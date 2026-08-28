// Real DBE past paper: Mathematics P1, November 2023, National (English).
// Source: official DBE question paper (10 pages: 9 question pages + 1
// information/formula sheet, no answer book included in this download) +
// the genuine official DBE marking guidelines (memo_official.pdf, 17
// pages, confirmed by its cover page: "MARKING GUIDELINES/NASIENRIGLYNE",
// official crest, "Copyright reserved/Kopiereg voorbehou"). Both fetched
// from stanmorephysics.com. A second memo file (memo.pdf) found alongside
// this download was from a third-party commercial publisher ("The Answer
// Series") and was NOT used as a source for any content here.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3
// hours. All 150 marks are included here. Confirmed by reading every
// rendered page directly, not guessed. No stray/mismatched pages were
// found between the QP and memo for this paper, and no internally
// inconsistent memo answers were found (every memo answer was checked
// against its own shown working).
//
// This paper reuses the Mathematics subject, its four CAPS cognitive
// levels (Knowledge / Routine Procedures / Complex Procedures / Problem
// Solving), and every existing P1 topic key from mathematics-p1-nov2025.ts
// (algebra, sequences, finance, functions, calculus, probability) — no new
// topics were needed, since this paper's content (algebra, number
// patterns/sequences/series, finance, exponential & hyperbola/parabola
// functions, differential calculus incl. an optimisation problem, and
// probability) falls entirely within those existing CAPS content areas.
//
// This paper is almost entirely calculation/algebra-based, so nearly every
// sub-question uses the stepped-MCQ pattern (`steps: MarkingPointStep[]`):
// the student works the problem out on paper as normal, then picks the
// option they got for each mark-earning step from a few choices, rather
// than typing anything. Distractors trap real Grade 12 Mathematics errors
// — sign slips, wrong root selected, arithmetic slips, forgetting a domain
// restriction, off-by-one errors, etc. `marking_points` (free-text) is
// used only for the two genuinely non-computational parts: 8.2 (sketch a
// cubic graph) and 10.2.1 (represent given probability info on a tree
// diagram).
//
// Where the memo shows an OR/alternative method, the steps below are based
// on the FIRST/primary method shown in the memo, per this app's ingestion
// convention, not an amalgam of methods.
//
// Diagrams: the exponential graph (Question 4) and the parabola/hyperbola
// graph (Question 5) are vector line-drawings rendered directly into the
// page content stream (not separate embedded raster images), so they were
// cropped from full-page renders rather than extracted as clean standalone
// images. The Question 9 poster/rectangle diagram was likewise cropped
// from the full-page render — it is essential to understanding the 4 cm /
// 3 cm margin setup used in 9.1, even though the surrounding text also
// states the numbers.
export const subject = {
  name: "Mathematics",
  stream: null as string | null,
};

export const cognitiveLevels = [
  { name: "Knowledge", order_index: 1 },
  { name: "Routine Procedures", order_index: 2 },
  { name: "Complex Procedures", order_index: 3 },
  { name: "Problem Solving", order_index: 4 },
];

export const topics = [
  {
    key: "algebra",
    name: "Algebraic Equations and Inequalities",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Mathematics — Algebra (Equations, Inequalities, Surds, Exponents)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+algebraic+equations+and+inequalities",
  },
  {
    key: "sequences",
    name: "Number Patterns, Sequences and Series",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Mathematics — Number Patterns, Sequences and Series (Arithmetic, Geometric, Sigma Notation)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+number+patterns+sequences+and+series",
  },
  {
    key: "finance",
    name: "Finance, Growth and Decay",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Mathematics — Finance, Growth and Decay (Compound Growth, Annuities, Loans)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+finance+growth+and+decay+annuities",
  },
  {
    key: "functions",
    name: "Functions and Inverse Functions",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Mathematics — Functions (Parabolas, Hyperbolas, Logarithmic and Exponential Functions, Inverses)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+functions+and+inverse+functions",
  },
  {
    key: "calculus",
    name: "Differential Calculus",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Mathematics — Differential Calculus (First Principles, Rules of Differentiation, Cubic Graphs, Optimisation)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+differential+calculus",
  },
  {
    key: "probability",
    name: "Probability",
    caps_term: "Term 4",
    textbook_ref: "Grade 12 Mathematics — Probability (Venn Diagrams, Contingency Tables, Tree Diagrams, Counting Principles)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+probability+counting+principle",
  },
];

export const paper = {
  year: 2023,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2023/11/NSC-Maths-Grade-12-November-2023-P1-only.pdf" as string | null,
};

interface QuestionSeed {
  number: string;
  sub_number: string | null;
  text: string;
  marks: number;
  topicKey: string;
  cognitiveLevelName: string;
  model_answer: string;
  marking_notes: string;
  marking_points?: MarkingPoint[];
  steps?: MarkingPointStep[];
  image_url?: string;
}

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/maths-2023-p1";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ALGEBRA (24 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "Solve for x: x² + x − 12 = 0",
    marks: 3, topicKey: "algebra", cognitiveLevelName: "Routine Procedures",
    model_answer: "(x − 3)(x + 4) = 0, so x = 3 or x = −4.",
    marking_notes: "Correct factors, and one mark for each correct root.",
    steps: [
      { marks: 1, description: "How does x² + x − 12 = 0 factorise?", options: ["(x − 3)(x + 4) = 0", "(x + 3)(x − 4) = 0", "(x − 12)(x + 1) = 0", "(x − 2)(x + 6) = 0"], correctIndex: 0 },
      { marks: 1, description: "What is one value of x?", options: ["x = 3", "x = −3", "x = 4", "x = 12"], correctIndex: 0 },
      { marks: 1, description: "What is the other value of x?", options: ["x = −4", "x = 4", "x = −3", "x = −1"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Solve for x (answers correct to TWO decimal places): 3x² − 2x = 6",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Routine Procedures",
    model_answer: "3x² − 2x − 6 = 0. Using the quadratic formula: x = (2 ± √((−2)² − 4(3)(−6)))/(2(3)) = (2 ± √76)/6, giving x = 1,79 or x = −1,12.",
    marking_notes: "Standard form, correct substitution into the quadratic formula, and both final answers rounded to 2 decimal places.",
    steps: [
      { marks: 1, description: "What is the standard form (ax² + bx + c = 0)?", options: ["3x² − 2x − 6 = 0", "3x² + 2x − 6 = 0", "3x² − 2x + 6 = 0", "3x² − 6x − 2 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the quadratic formula?", options: ["x = (2 ± √((−2)² − 4(3)(−6)))/(2(3))", "x = (−2 ± √((2)² − 4(3)(−6)))/(2(3))", "x = (2 ± √((−2)² − 4(3)(6)))/(2(3))", "x = (2 ± √((−2)² + 4(3)(−6)))/(2(3))"], correctIndex: 0 },
      { marks: 1, description: "What is the first answer (2 d.p.)?", options: ["x = 1,79", "x = −1,79", "x = 1,12", "x = 2,00"], correctIndex: 0 },
      { marks: 1, description: "What is the second answer (2 d.p.)?", options: ["x = −1,12", "x = 1,12", "x = −1,79", "x = −2,00"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Solve for x: √(2x + 1) = x − 1",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "Squaring both sides: 2x + 1 = (x − 1)² = x² − 2x + 1, so x² − 4x = 0, giving x(x − 4) = 0, so x = 0 or x = 4. Since √(2x+1) ≥ 0 must equal x − 1, and at x = 0 the right side is −1 (negative), x = 0 is rejected: x = 4.",
    marking_notes: "Squaring both sides, correct standard form, both x-values, and the valid final answer with the invalid root rejected.",
    steps: [
      { marks: 1, description: "What do you get after squaring both sides?", options: ["2x + 1 = (x − 1)²", "2x + 1 = x − 1", "2x + 1 = (x + 1)²", "(2x + 1)² = x − 1"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after expanding and simplifying?", options: ["x² − 4x = 0", "x² − 4x + 2 = 0", "x² + 4x = 0", "x² − 2x = 0"], correctIndex: 0 },
      { marks: 1, description: "What are both x-values, from x(x − 4) = 0?", options: ["x = 0 or x = 4", "x = 0 or x = −4", "x = 1 or x = 4", "x = 0 or x = 2"], correctIndex: 0 },
      { marks: 1, description: "Which is the valid final answer, after checking against the original equation?", options: ["x = 4 (x = 0 is rejected)", "x = 0 (x = 4 is rejected)", "x = 0 or x = 4 (both valid)", "x = −4"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Solve for x: x² − 2x > 3",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "x² − 2x − 3 > 0, so (x − 3)(x + 1) > 0. Critical values are x = −1 and x = 3. Using a sign diagram (parabola opening upward): x < −1 or x > 3.",
    marking_notes: "Standard form, critical values/factors, and the final answer (two marks — must reflect the parabola opening upward, so outside the roots).",
    steps: [
      { marks: 1, description: "What is the standard form?", options: ["x² − 2x − 3 > 0", "x² + 2x − 3 > 0", "x² − 2x + 3 > 0", "2x² − 2x − 3 > 0"], correctIndex: 0 },
      { marks: 1, description: "What are the critical values, after factorising (x − 3)(x + 1) > 0?", options: ["x = −1 and x = 3", "x = 1 and x = −3", "x = −1 and x = −3", "x = 1 and x = 3"], correctIndex: 0 },
      { marks: 2, description: "What is the final solution?", options: ["x < −1 or x > 3", "−1 < x < 3", "x > −1 and x > 3", "x < −1 or x < 3"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Solve for x and y simultaneously: x + 2 = 2y and 1/x + 1/y = 1",
    marks: 5, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "x = 2y − 2. Substituting into 1/x + 1/y = 1: 1/(2y−2) + 1/y = 1, giving y + 2y − 2 = 2y² − 2y, so 2y² − 5y + 2 = 0, i.e. (2y − 1)(y − 2) = 0, giving y = 1/2 or y = 2, and correspondingly x = −1 or x = 2.",
    marking_notes: "Correct expression for x in terms of y, correct substitution, correct standard form, and both y-values and x-values.",
    steps: [
      { marks: 1, description: "What is x in terms of y, from x + 2 = 2y?", options: ["x = 2y − 2", "x = 2y + 2", "x = y − 2", "x = 2 − 2y"], correctIndex: 0 },
      { marks: 1, description: "What do you get after substituting x = 2y − 2 into 1/x + 1/y = 1 and clearing denominators?", options: ["y + 2y − 2 = 2y² − 2y", "y − (2y − 2) = 2y² − 2y", "y + 2y − 2 = y² − 2y", "2y − 2 + y = 2y²"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after simplifying?", options: ["2y² − 5y + 2 = 0", "2y² + 5y + 2 = 0", "2y² − 5y − 2 = 0", "y² − 5y + 2 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two y-values, from (2y − 1)(y − 2) = 0?", options: ["y = 1/2 or y = 2", "y = −1/2 or y = 2", "y = 1/2 or y = −2", "y = 2 or y = 1"], correctIndex: 0 },
      { marks: 1, description: "What are the two corresponding x-values?", options: ["x = −1 or x = 2", "x = 1 or x = 2", "x = −1 or x = −2", "x = 1 or x = −2"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Given: 2^(m+1) + 2^m = 3^(n+2) − 3^n, where m and n are integers. Determine the value of m + n.",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "Factorising: 2^m(2 + 1) = 3^n(3² − 1), so 2^m(3) = 3^n(8) = 3^n(2³). Since 2 and 3 are different prime bases, this only holds if the exponents of each base match on both sides: m = 3 and n = 1, so m + n = 4.",
    marking_notes: "Correct factorisation on both sides, rewriting 8 as 2³ so both sides use the same two prime bases, correctly reading off m = 3 and n = 1, and the final answer m + n = 4.",
    steps: [
      { marks: 1, description: "How does the equation factorise?", options: ["2^m(3) = 3^n(8)", "2^m(3) = 3^n(6)", "2^m(2) = 3^n(8)", "2^m(1) = 3^n(8)"], correctIndex: 0 },
      { marks: 1, description: "Rewriting 8 as a power of 2, what do you get?", options: ["2^m(3) = 3^n(2³)", "2^m(3) = 3^n(2²)", "2^m(3) = 3^n(2⁴)", "2^m(3) = 2^n(2³)"], correctIndex: 0 },
      { marks: 1, description: "Matching the exponents of the two different prime bases (2 and 3) on each side, what are m and n?", options: ["m = 3 and n = 1", "m = 1 and n = 3", "m = 3 and n = 3", "m = 8 and n = 1"], correctIndex: 0 },
      { marks: 1, description: "What is m + n?", options: ["4", "3", "1", "8"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 2: NUMBER PATTERNS, SEQUENCES AND SERIES (16 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "Given the arithmetic series: 7 + 12 + 17 + ... Determine the value of T91.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "d = 5. Tn = a + (n − 1)d, so T91 = 7 + (91 − 1)(5) = 457.",
    marking_notes: "Correct common difference, correct substitution into the formula, and the final answer.",
    steps: [
      { marks: 1, description: "What is the common difference, d?", options: ["5", "7", "12", "17"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into Tn = a + (n − 1)d?", options: ["T91 = 7 + (91 − 1)(5)", "T91 = 7 + (91)(5)", "T91 = 5 + (91 − 1)(7)", "T91 = 7 + (90)(7)"], correctIndex: 0 },
      { marks: 1, description: "What is T91?", options: ["457", "452", "462", "455"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Calculate S91.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "S91 = (91/2)[2(7) + (91 − 1)(5)] = 21 112.",
    marking_notes: "Correct substitution into the sum formula and the final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into Sn = (n/2)[2a + (n − 1)d]?", options: ["S91 = (91/2)[2(7) + (90)(5)]", "S91 = (91/2)[7 + (90)(5)]", "S91 = (91/2)[2(7) + (91)(5)]", "S91 = 91[2(7) + (90)(5)]"], correctIndex: 0 },
      { marks: 1, description: "What is S91?", options: ["21 112", "20 566", "21 567", "22 750"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Calculate the value of n for which Tn = 517.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "7 + (n − 1)(5) = 517, so 5n + 2 = 517, giving 5n = 515, so n = 103.",
    marking_notes: "Correct substitution into the formula, correctly equating to 517 and simplifying, and the final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution?", options: ["7 + (n − 1)(5) = 517", "7 + (n)(5) = 517", "5 + (n − 1)(7) = 517", "7 + (n − 1)(517) = 5"], correctIndex: 0 },
      { marks: 1, description: "What does this simplify to before solving for n?", options: ["5n + 2 = 517", "5n − 2 = 517", "5n = 517", "5n + 7 = 517"], correctIndex: 0 },
      { marks: 1, description: "What is n?", options: ["103", "101", "105", "102"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "The following information is given about a quadratic number pattern: T1 = 3, T2 − T1 = 9 and T3 − T2 = 21. Show that T5 = 111.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "The second difference is constant: 21 − 9 = 12. Continuing the first differences (9, 21, ...) using this constant second difference gives the next first differences 33 and 45, so T5 = 3 + 9 + 21 + 33 + 45 = 111.",
    marking_notes: "Correctly identifying the constant second difference (12), and correctly extending the first differences (33 and 45) to reach T5 = 111.",
    steps: [
      { marks: 1, description: "What is the constant second difference?", options: ["12", "9", "21", "30"], correctIndex: 0 },
      { marks: 1, description: "Continuing the pattern of first differences, what are the next two first differences (after 9 and 21)?", options: ["33 and 45", "30 and 42", "33 and 42", "21 and 33"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Show that the general term of the quadratic pattern is Tn = 6n² − 9n + 6",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "For Tn = an² + bn + c: 2a = 12, so a = 6. Using 3a + b = 9: 18 + b = 9, so b = −9. Using a + b + c = T1 = 3: 6 − 9 + c = 3, so c = 6. Therefore Tn = 6n² − 9n + 6.",
    marking_notes: "Correct value of a (from half the second difference), correct value of b, and correct value of c.",
    steps: [
      { marks: 1, description: "Using 2a = 12 (the constant second difference), what is a?", options: ["a = 6", "a = 12", "a = 3", "a = 24"], correctIndex: 0 },
      { marks: 1, description: "Using 3a + b = 9, what is b?", options: ["b = −9", "b = 9", "b = −18", "b = 27"], correctIndex: 0 },
      { marks: 1, description: "Using a + b + c = 3 (T1 = 3), what is c?", options: ["c = 6", "c = −6", "c = 3", "c = 0"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Show that the pattern is increasing for all n ∈ N.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "Tn' = 12n − 9 > 0, so n > 3/4. Since n ∈ N means n ≥ 1, and 1 > 3/4, the pattern is increasing for all n ∈ N.",
    marking_notes: "Correct derivative of the general term, correctly solving the inequality, and the correct conclusion linking it to n ∈ N.",
    steps: [
      { marks: 1, description: "What is Tn' (the derivative of Tn = 6n² − 9n + 6, treated as a continuous function)?", options: ["12n − 9", "6n − 9", "12n + 6", "12n − 6"], correctIndex: 0 },
      { marks: 1, description: "Solving Tn' > 0, what do you get?", options: ["n > 3/4", "n < 3/4", "n > 4/3", "n > 9/12"], correctIndex: 0 },
      { marks: 1, description: "What is the correct conclusion?", options: ["Since n ∈ N means n ≥ 1 > 3/4, Tn is increasing for all n ∈ N", "Since n > 3/4 is not always true for n ∈ N, the pattern is not always increasing", "The pattern is increasing only for n > 1", "The pattern is decreasing for n ∈ N"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 3: GEOMETRIC AND ARITHMETIC SERIES (10 marks) ============

  {
    number: "3", sub_number: "3.1.1",
    text: "Given the geometric series: 3 + 6 + 12 + ... to n terms. Write down the general term of this series.",
    marks: 1, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "Tn = ar^(n−1) = 3(2)^(n−1).",
    marking_notes: "Accept only Tn = 3(2)^(n−1).",
    steps: [{ marks: 1, description: "What is the general term Tn?", options: ["Tn = 3(2)^(n−1)", "Tn = 3(2)^n", "Tn = 2(3)^(n−1)", "Tn = 3 + 2(n−1)"], correctIndex: 0 }],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Calculate the value of k such that: Σ (from p=1 to k) of (3/2)(2)^p = 98 301",
    marks: 4, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "Expanding, this series is 3 + 6 + 12 + ... (n = k terms), a geometric series with a = 3, r = 2. Using Sn = a(r^n − 1)/(r − 1): 3(2^k − 1)/(2 − 1) = 98 301, so 2^k − 1 = 32 767, giving 2^k = 32 768 = 2¹⁵, so k = 15.",
    marking_notes: "Correctly expanding the sigma notation into the series 3+6+12+..., recognising n = k, correct substitution into the geometric sum formula, and the final answer.",
    steps: [
      { marks: 1, description: "What does the series Σ(3/2)(2)^p expand to?", options: ["3 + 6 + 12 + ...", "3/2 + 3 + 6 + ...", "1,5 + 3 + 4,5 + ...", "6 + 12 + 24 + ..."], correctIndex: 0 },
      { marks: 1, description: "How many terms are being summed?", options: ["n = k", "n = k − 1", "n = k + 1", "n = 2k"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the geometric sum formula?", options: ["3(2^k − 1)/(2 − 1) = 98 301", "3(2^k − 1)/(1 − 2) = 98 301", "3(2^k)/(2 − 1) = 98 301", "(3/2)(2^k − 1)/(2 − 1) = 98 301"], correctIndex: 0 },
      { marks: 1, description: "What is k?", options: ["15", "14", "16", "13"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "A geometric sequence and an arithmetic sequence have the same first term. The common ratio of the geometric sequence is 1/3. The common difference of the arithmetic sequence is 3. The sum of 22 terms of the arithmetic sequence is 734 more than the sum to infinity of the geometric sequence. Calculate the value of the first term.",
    marks: 5, topicKey: "sequences", cognitiveLevelName: "Problem Solving",
    model_answer: "S22 = (22/2)[2a + 21(3)] = 22a + 693. S∞ = a/(1 − 1/3) = 3a/2. Since S22 = S∞ + 734: 22a + 693 = 3a/2 + 734, so 44a + 1386 = 3a + 1468, giving 41a = 82, so a = 2.",
    marking_notes: "Correct substitution into Sn for the arithmetic sequence, correct simplification, correct substitution into S∞ for the geometric sequence, correctly equating S22 = S∞ + 734, and the final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into Sn = (n/2)[2a + (n−1)d] for the arithmetic sequence?", options: ["S22 = (22/2)[2a + 21(3)]", "S22 = (22/2)[2a + 22(3)]", "S22 = (22/2)[a + 21(3)]", "S22 = (21/2)[2a + 21(3)]"], correctIndex: 0 },
      { marks: 1, description: "What does S22 simplify to?", options: ["22a + 693", "22a + 63", "44a + 693", "22a + 66"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into S∞ = a/(1 − r) for the geometric sequence?", options: ["S∞ = a/(1 − 1/3) = 3a/2", "S∞ = a/(1 + 1/3) = 3a/4", "S∞ = a/(1 − 1/3) = a/2", "S∞ = a(1 − 1/3) = 2a/3"], correctIndex: 0 },
      { marks: 1, description: "What is the correct equation, using S22 = S∞ + 734?", options: ["22a + 693 = 3a/2 + 734", "22a + 693 = 3a/2 − 734", "22a = 3a/2 + 734", "693 = 22a + 3a/2 + 734"], correctIndex: 0 },
      { marks: 1, description: "What is the value of the first term, a?", options: ["2", "3", "41/82", "82"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 4: EXPONENTIAL FUNCTION AND ITS INVERSE (14 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Sketched below is the graph of f(x) = 2^x − 4 for x ∈ [−2 ; 4). A and B are respectively the y- and x-intercepts of f. Write down the equation of the asymptote of f.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "y = −4, the horizontal asymptote of the exponential function f(x) = 2^x − 4.",
    marking_notes: "Accept only y = −4.",
    steps: [{ marks: 1, description: "What is the asymptote of f?", options: ["y = −4", "x = −4", "y = 0", "y = 4"], correctIndex: 0 }],
    image_url: `${IMG}/4-exp-graph.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Determine the coordinates of B.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "At B, y = 0: 0 = 2^x − 4, so 2^x = 4, giving x = 2. B(2 ; 0).",
    marking_notes: "Correctly setting y = 0, and correctly solving for x.",
    steps: [
      { marks: 1, description: "Solving 0 = 2^x − 4, what is 2^x?", options: ["4", "−4", "2", "0"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of B?", options: ["B(2 ; 0)", "B(4 ; 0)", "B(0 ; 2)", "B(−2 ; 0)"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Determine the equation of k, a straight line passing through A and B, in the form k(x) = ...",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "A is the y-intercept: y = 2⁰ − 4 = −3, so A(0 ; −3). Gradient m = (0 − (−3))/(2 − 0) = 3/2. So k(x) = (3/2)x − 3.",
    marking_notes: "Correct y-coordinate of A, correct gradient, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is the y-coordinate of A (the y-intercept of f)?", options: ["−3", "3", "−4", "4"], correctIndex: 0 },
      { marks: 1, description: "What is the gradient m of line k through A(0 ; −3) and B(2 ; 0)?", options: ["3/2", "−3/2", "2/3", "3"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of k?", options: ["k(x) = (3/2)x − 3", "k(x) = (3/2)x + 3", "k(x) = (2/3)x − 3", "k(x) = (3/2)x − 2"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Calculate the vertical distance between k and f at x = 1",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "k(1) = (3/2)(1) − 3 = −3/2. f(1) = 2¹ − 4 = −2. Vertical distance = −3/2 − (−2) = 1/2 units.",
    marking_notes: "Correct value of k(1), correct value of f(1), and the correct final distance.",
    steps: [
      { marks: 1, description: "What is k(1)?", options: ["−3/2", "3/2", "−1", "−5/2"], correctIndex: 0 },
      { marks: 1, description: "What is f(1)?", options: ["−2", "2", "−4", "−3"], correctIndex: 0 },
      { marks: 1, description: "What is the vertical distance between k and f at x = 1?", options: ["1/2", "−1/2", "7/2", "3/2"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Write down the equation of g if it is given that g(x) = f(x) + 4",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "g(x) = 2^x − 4 + 4 = 2^x, for x ∈ [−2 ; 4).",
    marking_notes: "Accept only g(x) = 2^x.",
    steps: [{ marks: 1, description: "What is g(x)?", options: ["g(x) = 2^x", "g(x) = 2^x − 4", "g(x) = 2^x + 4", "g(x) = 2^(x+4)"], correctIndex: 0 }],
  },
  {
    number: "4", sub_number: "4.6",
    text: "Write down the domain of g⁻¹.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "The range of g (for x ∈ [−2 ; 4)) is y ∈ [1/4 ; 16), so the domain of g⁻¹ is x ∈ [1/4 ; 16).",
    marking_notes: "Accept only x ∈ [1/4 ; 16) (or equivalent notation such as 1/4 ≤ x < 16).",
    steps: [{ marks: 2, description: "What is the domain of g⁻¹?", options: ["x ∈ [1/4 ; 16)", "x ∈ [−2 ; 4)", "x ∈ (0 ; 16]", "x ∈ [4 ; 16)"], correctIndex: 0 }],
  },
  {
    number: "4", sub_number: "4.7",
    text: "Write down the equation of g⁻¹ in the form y = ...",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "g: y = 2^x. Swapping x and y: x = 2^y, so g⁻¹(x) = log₂x, for x ∈ [1/4 ; 16).",
    marking_notes: "Correct swap of x and y, and the correct final logarithmic form.",
    steps: [
      { marks: 1, description: "What do you get after swapping x and y in y = 2^x?", options: ["x = 2^y", "y = 2^x (unchanged)", "x = 2y", "y = x^2"], correctIndex: 0 },
      { marks: 1, description: "What is g⁻¹(x)?", options: ["log₂x", "2^x", "x/2", "log_x 2"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: PARABOLA AND HYPERBOLA (18 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "The graphs of f(x) = −(1/2)(x − 1)² + 8 and g(x) = d/x are drawn below. A point of intersection of f and g is B, the turning point of f. The graph f has x-intercepts at (−3 ; 0) and (5 ; 0) and a y-intercept at C. Write down the coordinates of the turning point of f.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "From the turning-point form f(x) = −(1/2)(x − 1)² + 8, the turning point is (1 ; 8).",
    marking_notes: "Accept only (1 ; 8).",
    steps: [{ marks: 2, description: "What are the coordinates of the turning point of f?", options: ["(1 ; 8)", "(−1 ; 8)", "(1 ; −8)", "(8 ; 1)"], correctIndex: 0 }],
    image_url: `${IMG}/5-graphs-f-g.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Calculate the coordinates of C.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "At C, x = 0: y = −(1/2)(0 − 1)² + 8 = 15/2. C(0 ; 15/2).",
    marking_notes: "Correctly substituting x = 0, and the correct final coordinates.",
    steps: [
      { marks: 1, description: "What do you substitute for x to find C, the y-intercept?", options: ["x = 0", "x = 1", "x = 8", "x = −1"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of C?", options: ["C(0 ; 15/2)", "C(0 ; 8)", "C(0 ; 7)", "C(0 ; 17/2)"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Calculate the value of d.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "Since B(1 ; 8) lies on g: 8 = d/1, so d = 8.",
    marking_notes: "Accept only d = 8.",
    steps: [{ marks: 1, description: "What is d?", options: ["8", "1", "15/2", "−8"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Write down the range of g.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "y ∈ R, y ≠ 0.",
    marking_notes: "Accept only y ∈ R, y ≠ 0.",
    steps: [{ marks: 1, description: "What is the range of g?", options: ["y ∈ R, y ≠ 0", "y ∈ R, y ≠ 8", "y ≥ 0", "y ∈ R"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.5",
    text: "For which values of x will f(x).g(x) ≤ 0?",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "f(x).g(x) ≤ 0 where the graphs of f and g have opposite signs (or either is zero): −3 ≤ x < 0 or x ≥ 5.",
    marking_notes: "Two marks for the first correct interval (both endpoints), and one mark for the second correct interval.",
    steps: [
      { marks: 2, description: "What is the first part of the answer?", options: ["−3 ≤ x < 0", "−3 < x < 0", "−3 ≤ x ≤ 0", "x ≤ −3"], correctIndex: 0 },
      { marks: 1, description: "What is the second part of the answer?", options: ["x ≥ 5", "x > 5", "x ≤ 5", "x ≥ 0"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Calculate the values of k so that h(x) = −2x + k will not intersect the graph of g.",
    marks: 5, topicKey: "functions", cognitiveLevelName: "Problem Solving",
    model_answer: "−2x + k = 8/x, so −2x² + kx − 8 = 0. For no real intersection, the discriminant must be negative: Δ = k² − 4(−2)(−8) = k² − 64 < 0, giving critical values k = 8 and k = −8, so −8 < k < 8.",
    marking_notes: "Correctly setting the two functions equal, correct standard form, correct substitution into the discriminant, correctly requiring Δ < 0, and the final inequality.",
    steps: [
      { marks: 1, description: "What equation do you get by setting h(x) = g(x)?", options: ["−2x + k = 8/x", "−2x − k = 8/x", "2x + k = 8/x", "−2x + k = −8/x"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after clearing the denominator?", options: ["−2x² + kx − 8 = 0", "−2x² − kx − 8 = 0", "2x² + kx − 8 = 0", "−2x² + kx + 8 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the discriminant, Δ = b² − 4ac?", options: ["Δ = k² − 4(−2)(−8)", "Δ = k² − 4(−2)(8)", "Δ = k² + 4(−2)(−8)", "Δ = (−2)² − 4(k)(−8)"], correctIndex: 0 },
      { marks: 1, description: "For the line to NOT intersect g, what condition must Δ satisfy?", options: ["Δ < 0", "Δ > 0", "Δ = 0", "Δ ≤ 0"], correctIndex: 0 },
      { marks: 1, description: "What is the final inequality for k?", options: ["−8 < k < 8", "k < −8 or k > 8", "−8 ≤ k ≤ 8", "0 < k < 8"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.7",
    text: "h is a tangent to g at R, a point in the first quadrant. Calculate t such that y = f(x) + t intersects g at R.",
    marks: 4, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "From 5.6, the tangent case in the first quadrant uses k = 8, so h(x) = −2x + 8. Setting h(x) = g(x): −2x + 8 = 8/x, giving −2x² + 8x − 8 = 0, so x² − 4x + 4 = 0, i.e. (x − 2)² = 0, giving x = 2 (a repeated root, confirming tangency). f(2) = −(1/2)(2−1)² + 8 = 15/2. h(2) = −2(2) + 8 = 4. Since y = f(x) + t must also equal 4 at x = 2: 4 = 15/2 + t, so t = −7/2.",
    marking_notes: "Correctly finding x = 2 (the repeated root confirming tangency), correct value of f(2), correct value of h(2), and the correct final value of t.",
    steps: [
      { marks: 1, description: "Solving −2x + 8 = 8/x, what is x at the point of tangency R?", options: ["x = 2", "x = 4", "x = 1", "x = 8"], correctIndex: 0 },
      { marks: 1, description: "What is f(2)?", options: ["15/2", "8", "4", "7"], correctIndex: 0 },
      { marks: 1, description: "What is h(2)?", options: ["4", "8", "15/2", "0"], correctIndex: 0 },
      { marks: 1, description: "What is t?", options: ["−7/2", "7/2", "−4", "4"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 6: FINANCE, GROWTH AND DECAY (16 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "Patrick deposited an amount of R18 500 into an account earning r% interest p.a., compounded monthly. After 6 months, his balance was R19 319,48. Calculate the value of r.",
    marks: 3, topicKey: "finance", cognitiveLevelName: "Routine Procedures",
    model_answer: "19 319,48 = 18 500(1 + r/1200)⁶. So (1 + r/1200) = ⁶√1,04429... = 1,00725..., giving r/1200 = 0,00725..., so r = 8,7%.",
    marking_notes: "Correct number of months (n = 6), correct substitution into the compound growth formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is n (the number of months)?", options: ["6", "1", "12", "0,5"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into A = P(1 + i)ⁿ?", options: ["19 319,48 = 18 500(1 + r/1200)⁶", "19 319,48 = 18 500(1 + r/100)⁶", "19 319,48 = 18 500(1 + r/1200)¹²", "19 319,48 = 18 500(1 + 6r/1200)"], correctIndex: 0 },
      { marks: 1, description: "What is r?", options: ["8,7%", "7,8%", "9,06%", "4,43%"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Calculate the effective interest rate.",
    marks: 2, topicKey: "finance", cognitiveLevelName: "Routine Procedures",
    model_answer: "1 + i/100 = (1 + 8,7/1200)¹², giving i = 9,06%.",
    marking_notes: "Correct substitution into the effective-rate formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution?", options: ["1 + i/100 = (1 + 8,7/1200)¹²", "1 + i/100 = (1 + 8,7/100)¹²", "1 + i/100 = (1 + 8,7/1200)⁶", "i/100 = (1 + 8,7/1200)¹²"], correctIndex: 0 },
      { marks: 1, description: "What is the effective interest rate?", options: ["9,06%", "8,70%", "10,44%", "9,00%"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "Kuda bought a laptop for R10 000 on 31 January 2019. The value of the old laptop depreciates annually at a rate of 20% p.a. according to the straight-line method. After how many years will the laptop have a value of R0?",
    marks: 2, topicKey: "finance", cognitiveLevelName: "Routine Procedures",
    model_answer: "A = P(1 − in): 0 = 10 000(1 − 0,2n), so n = 5.",
    marking_notes: "Correct substitution into the straight-line depreciation formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into A = P(1 − in)?", options: ["0 = 10 000(1 − 0,2n)", "0 = 10 000(1 − 0,2)ⁿ", "10 000 = 10 000(1 − 0,2n)", "0 = 10 000(1 + 0,2n)"], correctIndex: 0 },
      { marks: 1, description: "After how many years, n, is the value R0?", options: ["5", "4", "20", "10"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "Kuda will buy a replacement laptop that costs R20 000 on 31 January 2024. He made his first monthly deposit into a savings account on 28 February 2019. He will make his 60th monthly deposit on 31 January 2024. The savings account pays interest at 8,7% p.a., compounded monthly. Calculate Kuda's monthly deposit into this account.",
    marks: 4, topicKey: "finance", cognitiveLevelName: "Complex Procedures",
    model_answer: "This is a future-value annuity with n = 60 monthly deposits ending exactly on the date the R20 000 is needed (deposits at the end of each month, matching the F formula directly): 20 000 = x[(1 + 8,7/1200)⁶⁰ − 1]/(8,7/1200), giving x = R267,26.",
    marking_notes: "Correct monthly interest rate i, correct number of deposits n = 60, correct substitution into the future-value annuity formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the monthly interest rate i to use?", options: ["8,7/1200", "8,7/100", "8,7/12", "8,7/1200 × 60"], correctIndex: 0 },
      { marks: 1, description: "What is n, the number of monthly deposits?", options: ["60", "59", "61", "12"], correctIndex: 0 },
      { marks: 1, description: "Which formula and substitution apply?", options: ["Future-value annuity formula: 20 000 = x[(1 + 8,7/1200)⁶⁰ − 1]/(8,7/1200)", "Present-value annuity formula: 20 000 = x[1 − (1 + 8,7/1200)⁻⁶⁰]/(8,7/1200)", "Simple compound growth: 20 000 = x(1 + 8,7/1200)⁶⁰", "Future-value annuity formula with n = 59"], correctIndex: 0 },
      { marks: 1, description: "What is Kuda's monthly deposit, x?", options: ["R267,26", "R333,33", "R283,80", "R240,00"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Tino wins a jackpot of R1 600 000. He invests all of his winnings in a fund that earns interest of 11,2% p.a., compounded monthly. He withdraws R20 000 from the fund at the end of each month. His first withdrawal is exactly 1 month after his initial investment. How many withdrawals of R20 000 will Tino be able to make from this fund?",
    marks: 5, topicKey: "finance", cognitiveLevelName: "Problem Solving",
    model_answer: "Using the present-value annuity formula: 1 600 000 = 20 000[1 − (1 + 0,112/12)⁻ⁿ]/(0,112/12), giving 56/75 = 1 − (1 + 0,112/12)⁻ⁿ, so (1 + 0,112/12)⁻ⁿ = 19/75. Taking logs: −n = log base (1+0,112/12) of (19/75) = −147,80. Since Tino can only make complete withdrawals, he can make 147 withdrawals of R20 000.",
    marking_notes: "Correct monthly interest rate, correct substitution into the present-value annuity formula, correct use of logs to solve for n, and the correct final answer (rounded down to 147 complete withdrawals).",
    steps: [
      { marks: 1, description: "What is the monthly interest rate i to use?", options: ["0,112/12", "0,112", "0,112/1200", "11,2/12"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the present-value annuity formula?", options: ["1 600 000 = 20 000[1 − (1 + 0,112/12)⁻ⁿ]/(0,112/12)", "1 600 000 = 20 000[(1 + 0,112/12)ⁿ − 1]/(0,112/12)", "20 000 = 1 600 000[1 − (1 + 0,112/12)⁻ⁿ]/(0,112/12)", "1 600 000 = 20 000(1 + 0,112/12)⁻ⁿ"], correctIndex: 0 },
      { marks: 1, description: "How do you solve for n from (1 + 0,112/12)⁻ⁿ = 19/75?", options: ["Take logs of both sides", "Take the square root of both sides", "Divide both sides by 0,112/12", "Multiply both sides by 12"], correctIndex: 0 },
      { marks: 1, description: "What value of −n does this give?", options: ["−147,80", "−150,00", "−144,25", "−19,75"], correctIndex: 0 },
      { marks: 1, description: "How many complete withdrawals of R20 000 can Tino make?", options: ["147", "148", "150", "144"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 7: DIFFERENTIAL CALCULUS — FIRST PRINCIPLES & RULES (13 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "Determine f'(x) from first principles if f(x) = −4x²",
    marks: 5, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f'(x) = lim(h→0) [f(x+h) − f(x)]/h = lim(h→0) [−4(x+h)² − (−4x²)]/h. f(x+h) = −4x² − 8xh − 4h². So f'(x) = lim(h→0) (−8xh − 4h²)/h = lim(h→0) h(−8x − 4h)/h = lim(h→0) (−8x − 4h) = −8x.",
    marking_notes: "Correct substitution into the first-principles definition, correct expansion of f(x+h), correct simplification, correct common factor of h, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into f'(x) = lim(h→0) [f(x+h) − f(x)]/h?", options: [
        "[−4(x+h)² − (−4x²)]/h",
        "[−4(x+h)² + (−4x²)]/h",
        "[−4(x+h) − (−4x²)]/h",
        "[(−4x²) − (−4(x+h)²)]/h",
      ], correctIndex: 0 },
      { marks: 1, description: "What is f(x+h)?", options: ["−4x² − 8xh − 4h²", "−4x² − 8xh", "−4x² + 8xh − 4h²", "−4x² − 4h²"], correctIndex: 0 },
      { marks: 1, description: "What does the numerator simplify to?", options: ["−8xh − 4h²", "8xh − 4h²", "−8xh + 4h²", "−4h²"], correctIndex: 0 },
      { marks: 1, description: "What is the common factor of h taken out?", options: ["h(−8x − 4h)", "h(−8x + 4h)", "h(8x − 4h)", "h(−4x − 8h)"], correctIndex: 0 },
      { marks: 1, description: "What is f'(x)?", options: ["−8x", "8x", "−4x", "−8x − 4h"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "Determine: f'(x) if f(x) = 2x³ − 3x",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Knowledge",
    model_answer: "f'(x) = 6x² − 3.",
    marking_notes: "One mark for each correctly differentiated term.",
    steps: [
      { marks: 1, description: "What is the derivative of 2x³?", options: ["6x²", "2x²", "6x", "3x²"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of −3x?", options: ["−3", "−3x", "0", "3"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Determine: Dx[7·∛(x²) + 2x⁻⁵]",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "7·∛(x²) = 7x^(2/3). So Dx[7x^(2/3) + 2x⁻⁵] = (14/3)x^(−1/3) − 10x⁻⁶.",
    marking_notes: "Correctly rewriting the cube root as a rational exponent, correctly differentiating that term, and correctly differentiating the second term.",
    steps: [
      { marks: 1, description: "How is 7·∛(x²) rewritten with a rational exponent, before differentiating?", options: ["7x^(2/3)", "7x^(3/2)", "7x^2", "7x^(1/3)"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of 7x^(2/3)?", options: ["(14/3)x^(−1/3)", "(14/3)x^(2/3)", "(7/3)x^(−1/3)", "(2/3)x^(−1/3)"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of 2x⁻⁵?", options: ["−10x⁻⁶", "10x⁻⁶", "−10x⁻⁴", "−2x⁻⁶"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "For which values of x will the tangent to f(x) = −2x³ + 8x have a positive gradient?",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "f'(x) = −6x² + 8 > 0, so x² < 8/6 = 4/3. Critical values: x = ±2/√3. Positive for −2/√3 < x < 2/√3.",
    marking_notes: "Correct critical values, and the correct final interval (two marks).",
    steps: [
      { marks: 1, description: "Solving −6x² + 8 > 0, what are the critical values?", options: ["x = ±2/√3", "x = ±4/3", "x = ±2/3", "x = ±√8"], correctIndex: 0 },
      { marks: 2, description: "For which values of x is the gradient positive?", options: ["−2/√3 < x < 2/√3", "x < −2/√3 or x > 2/√3", "0 < x < 2/√3", "x < 2/√3"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: CUBIC FUNCTION (18 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Given: f(x) = −x³ + 6x² − 9x + 4 = (x − 1)²(−x + 4). Determine the coordinates of the turning points of f.",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f'(x) = −3x² + 12x − 9 = 0, so x² − 4x + 3 = 0, giving (x − 3)(x − 1) = 0, so x = 3 or x = 1. f(3) = −(3)³ + 6(3)² − 9(3) + 4 = 4. f(1) = −(1)³ + 6(1)² − 9(1) + 4 = 0. Turning points: (3 ; 4) and (1 ; 0).",
    marking_notes: "Correct derivative, correct standard form after setting f'(x) = 0, both correct x-values, and both correct y-values.",
    steps: [
      { marks: 1, description: "What is f'(x)?", options: ["−3x² + 12x − 9", "−x² + 12x − 9", "−3x² + 6x − 9", "−3x² + 12x"], correctIndex: 0 },
      { marks: 1, description: "Setting f'(x) = 0 and simplifying, what is the standard form?", options: ["x² − 4x + 3 = 0", "x² + 4x + 3 = 0", "x² − 4x − 3 = 0", "3x² − 12x + 9 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are both x-values of the turning points?", options: ["x = 3 or x = 1", "x = −3 or x = −1", "x = 3 or x = −1", "x = 4 or x = 1"], correctIndex: 0 },
      { marks: 1, description: "What are both y-values of the turning points?", options: ["y = 4 (at x = 3) and y = 0 (at x = 1)", "y = 0 (at x = 3) and y = 4 (at x = 1)", "y = 4 (at x = 3) and y = 4 (at x = 1)", "y = −4 (at x = 3) and y = 0 (at x = 1)"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2",
    text: "Draw a sketch graph of f. Clearly label all the intercepts with the axes and any turning points.",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "A cubic with a negative leading coefficient, y-intercept at (0 ; 4), x-intercepts at (1 ; 0) (a repeated/touching root) and (4 ; 0), a local minimum at (1 ; 0), and a local maximum at (3 ; 4), decreasing to the right after x = 4.",
    marking_notes: "One mark for the correct y-intercept, one mark for both x-intercepts, one mark for both turning points, and one mark for the correct overall cubic shape (matching the sign of the leading coefficient).",
    marking_points: [
      { marks: 1, description: "correct y-intercept at (0 ; 4)", keywords: ["0 4", "y intercept"] },
      { marks: 1, description: "both x-intercepts correctly plotted, at (1 ; 0) and (4 ; 0)", keywords: ["1 0", "4 0", "x intercept"] },
      { marks: 1, description: "both turning points correctly plotted, at (1 ; 0) and (3 ; 4)", keywords: ["turning point", "3 4"] },
      { marks: 1, description: "correct overall cubic shape, decreasing then increasing then decreasing (negative leading coefficient)", keywords: ["shape", "decreasing increasing decreasing", "cubic"] },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Use the graph to determine the value(s) of k for which −x³ + 6x² − 9x + 4 = k will have three real and unequal roots.",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "For three real and unequal roots, the horizontal line y = k must cross the graph strictly between the two turning-point y-values: 0 < k < 4.",
    marking_notes: "Accept only 0 < k < 4 (k strictly between the y-values of the two turning points).",
    steps: [{ marks: 2, description: "For which values of k does −x³ + 6x² − 9x + 4 = k have three real and unequal roots?", options: ["0 < k < 4", "0 ≤ k ≤ 4", "k < 0 or k > 4", "k = 0 or k = 4"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.4",
    text: "The line g(x) = ax + b is the tangent to f at the point of inflection of f. Determine the equation of g.",
    marks: 6, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "The point of inflection lies midway between the two turning points: x = (3 + 1)/2 = 2. f(2) = −(2)³ + 6(2)² − 9(2) + 4 = 2, so the point of inflection is (2 ; 2). f'(2) = −3(2)² + 12(2) − 9 = 3. Using y − 2 = 3(x − 2): g(x) = 3x − 4.",
    marking_notes: "Correct second-derivative equation (or midpoint method), correct x-value of the point of inflection, correct y-value, correct gradient at that x-value, and the correct final tangent equation.",
    steps: [
      { marks: 1, description: "Which equation locates the point of inflection?", options: ["f''(x) = −6x + 12 = 0", "f'(x) = −3x² + 12x − 9 = 0", "f(x) = 0", "f''(x) = −6x − 12 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the x-value of the point of inflection?", options: ["x = 2", "x = 1", "x = 3", "x = 4"], correctIndex: 0 },
      { marks: 1, description: "What is f(2), the y-value of the point of inflection?", options: ["2", "0", "4", "3"], correctIndex: 0 },
      { marks: 1, description: "What is f'(2), the gradient at the point of inflection?", options: ["3", "0", "9", "−3"], correctIndex: 0 },
      { marks: 2, description: "What is the equation of the tangent g?", options: ["g(x) = 3x − 4", "g(x) = 3x + 4", "g(x) = 3x − 2", "g(x) = −3x + 4"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Calculate the value of θ, the acute angle formed between g and the x-axis in the first quadrant.",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "The gradient of g is 3, so tanθ = 3, giving θ = 71,57°.",
    marking_notes: "Correct gradient used, and the correct final angle.",
    steps: [
      { marks: 1, description: "What is tanθ, using the gradient of g?", options: ["3", "−4", "1/3", "4"], correctIndex: 0 },
      { marks: 1, description: "What is θ?", options: ["71,57°", "18,43°", "60,00°", "45,00°"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 9: OPTIMISATION (6 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "The diagram below represents a printed poster. Rectangle ABCD is the part on which the text is printed. This shaded area ABCD is 432 cm² and AD = x cm. ABCD is 4 cm from the left and right edges of the page and 3 cm from the top and bottom of the page. Show that the total area of the page is given by: A(x) = 3456/x + 6x + 480",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since ABCD has area 432 cm² and AD = x: 432 = x·b, so b = 432/x (the height of ABCD). The full page has width (x + 8) and height (432/x + 6). So A(x) = (x + 8)(432/x + 6) = 432 + 6x + 3456/x + 480 = 3456/x + 6x + 480.",
    marking_notes: "Correct expression for b (the height of ABCD), correct expression for the page width (x + 8), and correct expression for the page height (432/x + 6), which multiply out to the given formula.",
    steps: [
      { marks: 1, description: "Since 432 = x·b, what is b (the height of ABCD)?", options: ["b = 432/x", "b = 432 − x", "b = x/432", "b = 432x"], correctIndex: 0 },
      { marks: 1, description: "What is the width of the full page?", options: ["x + 8", "x + 4", "x + 3", "x + 7"], correctIndex: 0 },
      { marks: 1, description: "What is the height of the full page?", options: ["432/x + 6", "432/x + 3", "432/x + 8", "432/x + 4"], correctIndex: 0 },
    ],
    image_url: `${IMG}/9-poster-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "Determine the value of x such that the total area of the page is a minimum.",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "A(x) = 3456x⁻¹ + 6x + 480. A'(x) = −3456/x² + 6. Setting A'(x) = 0: 3456 = 6x², so x² = 576, giving x = 24 cm.",
    marking_notes: "Correct rewriting of A(x) with a negative exponent, correct derivative, and the correct final answer.",
    steps: [
      { marks: 1, description: "How is A(x) rewritten before differentiating?", options: ["A(x) = 3456x⁻¹ + 6x + 480", "A(x) = 3456x + 6x + 480", "A(x) = 3456x⁻¹ − 6x + 480", "A(x) = 3456x² + 6x + 480"], correctIndex: 0 },
      { marks: 1, description: "What is A'(x)?", options: ["−3456/x² + 6", "−3456/x² − 6", "3456/x² + 6", "−3456x⁻² + 6x"], correctIndex: 0 },
      { marks: 1, description: "What is x, at the minimum?", options: ["24 cm", "576 cm", "12 cm", "48 cm"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 10: PROBABILITY (15 marks) ============

  {
    number: "10", sub_number: "10.1.1",
    text: "A and B are independent events. P(A) = 1/3 and P(B) = 3/4. Determine: P(A and B)",
    marks: 2, topicKey: "probability", cognitiveLevelName: "Knowledge",
    model_answer: "Since A and B are independent: P(A and B) = P(A) × P(B) = (1/3) × (3/4) = 1/4.",
    marking_notes: "Correct substitution and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution, using independence?", options: ["(1/3) × (3/4)", "(1/3) + (3/4)", "(3/4)/(1/3)", "(1/3) × (3/4) − 1"], correctIndex: 0 },
      { marks: 1, description: "What is P(A and B)?", options: ["1/4", "1/12", "13/12", "3/4"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "Determine: P(at least ONE event occurs)",
    marks: 2, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "P(A or B) = P(A) + P(B) − P(A and B) = 1/3 + 3/4 − 1/4 = 5/6.",
    marking_notes: "Correct substitution into the addition rule, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution?", options: ["1/3 + 3/4 − 1/4", "1/3 + 3/4 + 1/4", "1/3 × 3/4 − 1/4", "1/3 + 3/4"], correctIndex: 0 },
      { marks: 1, description: "What is P(at least ONE event occurs)?", options: ["5/6", "13/12", "1/2", "7/12"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "The probability that it will snow on the Drakensberg Mountains in June is 5%. When it snows on the mountains, the probability that the minimum temperature in Central South Africa will drop below 0 °C is 72%. If it does not snow on the mountains, the probability that the minimum temperature in Central South Africa will drop below 0 °C is 35%. Represent the given information on a tree diagram. Clearly indicate the probabilities associated with EACH branch.",
    marks: 3, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "First set of branches: Snow (0,05) / No Snow (0,95). From Snow: Below 0° (0,72) / Not below 0° (0,28). From No Snow: Below 0° (0,35) / Not below 0° (0,65).",
    marking_notes: "One mark for each of the three branch levels shown with correct probabilities: the snow/no-snow branch, the below-0°/not-below-0° branch following snow, and the below-0°/not-below-0° branch following no snow.",
    marking_points: [
      { marks: 1, description: "first branch (Snow 0,05 / No Snow 0,95) shown with correct probabilities", keywords: ["0 05", "0 95", "snow"] },
      { marks: 1, description: "second branch, following Snow (Below 0° 0,72 / Not below 0° 0,28), shown with correct probabilities", keywords: ["0 72", "0 28"] },
      { marks: 1, description: "third branch, following No Snow (Below 0° 0,35 / Not below 0° 0,65), shown with correct probabilities", keywords: ["0 35", "0 65"] },
    ],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Calculate the probability that the temperature in Central South Africa will NOT drop below 0 °C in June 2024.",
    marks: 3, topicKey: "probability", cognitiveLevelName: "Complex Procedures",
    model_answer: "P(NOT below 0°) = P(Snow; NOT below 0°) + P(No snow; NOT below 0°) = (0,05 × 0,28) + (0,95 × 0,65) = 0,6315.",
    marking_notes: "Correct value for the snow branch, correct value for the no-snow branch, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is P(Snow AND NOT below 0°)?", options: ["0,05 × 0,28 = 0,014", "0,05 × 0,72 = 0,036", "0,95 × 0,28", "0,05 + 0,28"], correctIndex: 0 },
      { marks: 1, description: "What is P(No snow AND NOT below 0°)?", options: ["0,95 × 0,65 = 0,6175", "0,95 × 0,35", "0,05 × 0,65", "0,95 + 0,65"], correctIndex: 0 },
      { marks: 1, description: "What is the total probability that it will NOT drop below 0°?", options: ["0,6315", "0,6500", "0,0140", "0,7200"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.3.1",
    text: "Ten learners stand randomly in a line, one behind the other. In how many different ways can the ten learners stand in the line?",
    marks: 1, topicKey: "probability", cognitiveLevelName: "Knowledge",
    model_answer: "n(S) = 10! = 3 628 800.",
    marking_notes: "Accept only 10! (or its evaluated value, 3 628 800).",
    steps: [{ marks: 1, description: "In how many ways can the ten learners stand in the line?", options: ["10!", "10", "2 × 9!", "9!"], correctIndex: 0 }],
  },
  {
    number: "10", sub_number: "10.3.2",
    text: "Calculate the probability that there will be 5 learners between the 2 youngest learners in the line.",
    marks: 4, topicKey: "probability", cognitiveLevelName: "Problem Solving",
    model_answer: "With exactly 5 learners between the two youngest, there are 4 possible starting positions for this block of 8 (2 youngest + 5 between them) within the line of 10, and the 2 youngest can be arranged in 2 ways at the ends of the block, with the remaining 8 learners (6 others plus the 2 in fixed relative positions... more precisely: treating the arrangement as (2 × 8!) for each of the 4 valid starting positions of the first of the two youngest learners) gives a total of 4(2 × 8!) = 322 560 favourable arrangements. P(5 learners in between) = 322 560/10! = 4/45.",
    marking_notes: "Correct count of (2 × 8!) arrangements for one valid position, correctly multiplying by 4 (the number of valid starting positions) to get 322 560 total favourable arrangements, and correctly dividing by n(S) = 10! for the final probability.",
    steps: [
      { marks: 1, description: "For one fixed starting position of the two youngest learners (5 apart), how many arrangements are there, accounting for the 2 youngest swapping places and the other 8 learners filling the remaining spots?", options: ["2 × 8!", "2 × 9!", "8!", "2 × 7!"], correctIndex: 0 },
      { marks: 2, description: "How many such arrangements are there in total, across all valid starting positions?", options: ["4(2 × 8!) = 322 560", "2(2 × 8!) = 161 280", "5(2 × 8!) = 403 200", "4(8!) = 161 280"], correctIndex: 0 },
      { marks: 1, description: "What is the final probability?", options: ["322 560/10! = 4/45", "322 560/9! = 8/9", "10!/322 560", "4/45 × 2"], correctIndex: 0 },
    ],
  },
];

// No exam_schedule entries here, matching the Physical Sciences and other
// Mathematics ingestion convention — Mathematics exam dates aren't
// modelled in this ingestion; a future pilot dataset can carry them the
// way geography-p1-pilot does for Geography.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
