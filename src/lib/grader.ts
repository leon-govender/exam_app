// Free, deterministic marking: no LLM call, ever — this is the only marking
// path in the app. Each memo answer carries a list of marking points (see
// scripts/seed-data) — short, gradable concepts pulled straight from the
// marking notes. A point is awarded if any of its keyword phrases show up
// in the student's answer, or, for a keyword written as a bare number (e.g.
// "225", "0 38"), if a number within tolerance of it shows up anywhere in
// the student's working — see numericKeywordValue().
//
// This is a coverage check, not a reasoning check: it can't tell a correct
// explanation from a jumbled one that happens to use the right words, and it
// can't award credit for a correct idea phrased in a way none of the
// keywords anticipated. Treat it as a first pass, not a substitute for
// reading the memo.
//
// Calculation questions (answer_mode = "stepped_mcq" on the question row)
// skip this keyword/numeric matching entirely and go through
// gradeSteppedAnswer below instead — the student picks an option per step
// rather than typing working out, so grading is exact-index equality.
//
// NOTE: model_answer/marking_notes are not currently surfaced anywhere in
// the UI (results page, study page) — a student who gets marked down can't
// yet see the memo's actual answer to check against. Worth fixing; not done
// here.

export interface MarkingPoint {
  marks: number;
  description: string;
  keywords: string[];
}

const STOPWORDS = new Set([
  "the", "a", "an", "of", "in", "on", "at", "to", "and", "or", "is", "are",
  "was", "were", "that", "this", "with", "by", "from", "as", "it", "its",
  "for", "be", "which", "into", "over", "than", "such",
]);

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function significantWords(phrase: string): string[] {
  return normalize(phrase)
    .split(" ")
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

/** A word counts as present if it (or a same-stem variant, e.g. erosion/eroded) appears. */
function wordPresent(word: string, answerWords: Set<string>): boolean {
  if (answerWords.has(word)) return true;
  if (word.length >= 5) {
    const stem = word.slice(0, 5);
    for (const aw of answerWords) {
      if (aw.length >= 5 && aw.startsWith(stem)) return true;
    }
  }
  return false;
}

/**
 * Short exact-token keywords (MCQ letters like "D", matching codes like "Y"/
 * "Z") bypass stopword filtering and word-count matching entirely — a
 * keyword this short would otherwise either get filtered as a stopword
 * ("a") or matched on zero significant words. It must be the FIRST word of
 * the answer, not just present anywhere — "A" is also the English article,
 * so "it is a katabatic wind" must not credit option A just because "a"
 * appears mid-sentence. Real MCQ answers lead with the letter ("D",
 * "D - katabatic", "D) destroys vegetation").
 */
function phraseMatches(keyword: string, answerWords: Set<string>, rawAnswer: string): boolean {
  const normalizedKeyword = normalize(keyword);
  if (normalizedKeyword.length > 0 && normalizedKeyword.length <= 2 && !normalizedKeyword.includes(" ")) {
    const firstWord = rawAnswer.split(" ")[0] ?? "";
    return firstWord === normalizedKeyword;
  }
  const words = significantWords(keyword);
  if (words.length === 0) return false;
  return words.every((w) => wordPresent(w, answerWords));
}

/**
 * Reads a keyword written as a bare calculated value, e.g. "225" or "0 38"
 * — ingestion writes the decimal point as a space (matching what
 * normalize() would do to a comma anyway) since these keywords are meant to
 * be compared numerically, not as word tokens. Returns null for anything
 * that isn't purely a number, so ordinary text keywords are unaffected.
 */
function numericKeywordValue(keyword: string): number | null {
  const trimmed = keyword.trim();
  if (!/^-?\d+(?:[ ,.]\d+)?$/.test(trimmed)) return null;
  const value = parseFloat(trimmed.replace(/[ ,]/, "."));
  return Number.isFinite(value) ? value : null;
}

/**
 * Pulls every number out of free-text student working. SA exam convention
 * uses a comma as the decimal point (e.g. "0,38") and a plain space to
 * group thousands (e.g. "1 298 Hz") — both would otherwise get chopped
 * into unrelated integers by a naive digit scan, so decimal commas
 * (1-2 digits after the comma) are folded into a decimal point first, then
 * any remaining thousands-grouping space or comma (exactly 3 digits after
 * it) is collapsed, before the final numbers are extracted.
 */
function extractNumbers(rawStudentAnswer: string): number[] {
  let text = rawStudentAnswer.replace(/(\d),(\d{1,2})(?!\d)/g, "$1.$2");
  let prev: string;
  do {
    prev = text;
    text = text.replace(/(\d)[ ,](\d{3})(?!\d)/g, "$1$2");
  } while (text !== prev);

  const matches = text.match(/-?\d+(?:\.\d+)?/g) ?? [];
  return matches.map(Number).filter((n) => Number.isFinite(n));
}

/**
 * A calculated answer is accepted within a tolerance band, not an exact
 * string match — DBE memos themselves accept a range for numeric answers
 * depending on which valid method/rounding a candidate used (e.g. the
 * Physics P1 memo accepts 17,93-18,33 m·s⁻¹ for one question and
 * 13,42-13,47 V for another), so an exact match would wrongly zero a
 * correct answer that rounded differently partway through.
 */
function numberMatches(target: number, candidates: number[]): boolean {
  const tolerance = Math.max(Math.abs(target) * 0.02, 0.015);
  return candidates.some((c) => Math.abs(c - target) <= tolerance);
}

function keywordMatches(
  keyword: string,
  answerWords: Set<string>,
  rawAnswer: string,
  answerNumbers: number[],
): boolean {
  const numericTarget = numericKeywordValue(keyword);
  if (numericTarget !== null) {
    return numberMatches(numericTarget, answerNumbers);
  }
  return phraseMatches(keyword, answerWords, rawAnswer);
}

export interface GradeResult {
  marks_awarded: number;
  feedback: string;
}

export function gradeAnswer(params: {
  marksPossible: number;
  markingPoints: MarkingPoint[] | null;
  studentAnswer: string;
}): GradeResult {
  const { marksPossible, markingPoints, studentAnswer } = params;

  if (!studentAnswer.trim()) {
    return { marks_awarded: 0, feedback: "No answer given." };
  }
  if (!markingPoints || markingPoints.length === 0) {
    return {
      marks_awarded: 0,
      feedback: "This question isn't set up for automatic marking yet — check it against the memo yourself.",
    };
  }

  const rawAnswer = normalize(studentAnswer);
  const answerWords = new Set(rawAnswer.split(" ").filter(Boolean));
  const answerNumbers = extractNumbers(studentAnswer);

  const hit: string[] = [];
  const missed: string[] = [];
  let total = 0;
  for (const point of markingPoints) {
    if (point.keywords.some((k) => keywordMatches(k, answerWords, rawAnswer, answerNumbers))) {
      total += point.marks;
      hit.push(point.description);
    } else {
      missed.push(point.description);
    }
  }

  const marks_awarded = Math.min(marksPossible, total);
  const feedback = missed.length
    ? `Matched: ${hit.join("; ") || "none"}. Not found in your answer: ${missed.join("; ")}.`
    : `Matched everything the memo looks for: ${hit.join("; ")}.`;

  return { marks_awarded, feedback };
}

/**
 * A calculation question's marking point rewritten as a step-by-step
 * multiple-choice item: the student works the problem out on paper as
 * normal, then picks the option they got for this step (formula,
 * substitution, final answer, ...) instead of typing anything. Grading is
 * exact-index equality, not text/numeric matching — see gradeSteppedAnswer.
 */
export interface MarkingPointStep {
  marks: number;
  description: string;
  options: string[];
  correctIndex: number;
}

export function gradeSteppedAnswer(params: {
  marksPossible: number;
  steps: MarkingPointStep[];
  stepAnswers: Record<number, number>;
}): GradeResult {
  const { marksPossible, steps, stepAnswers } = params;

  const hit: string[] = [];
  const missed: string[] = [];
  let total = 0;
  steps.forEach((step, i) => {
    if (stepAnswers[i] === step.correctIndex) {
      total += step.marks;
      hit.push(step.description);
    } else {
      missed.push(step.description);
    }
  });

  const marks_awarded = Math.min(marksPossible, total);
  const feedback = missed.length
    ? `Correct: ${hit.join("; ") || "none"}. Not correct: ${missed.join("; ")}.`
    : `Every step matched the memo: ${hit.join("; ")}.`;

  return { marks_awarded, feedback };
}
