// Free, deterministic marking: no LLM call. Each memo answer carries a list
// of marking points (see scripts/seed-data) — short, gradable concepts pulled
// straight from the marking notes. A point is awarded if any of its keyword
// phrases show up in the student's answer.
//
// This is a coverage check, not a reasoning check: it can't tell a correct
// explanation from a jumbled one that happens to use the right words, and it
// can't award credit for a correct idea phrased in a way none of the
// keywords anticipated. Treat it as a first pass, not a substitute for
// reading the memo — the study page still links the full model answer.

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

  const hit: string[] = [];
  const missed: string[] = [];
  let total = 0;
  for (const point of markingPoints) {
    if (point.keywords.some((k) => phraseMatches(k, answerWords, rawAnswer))) {
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
