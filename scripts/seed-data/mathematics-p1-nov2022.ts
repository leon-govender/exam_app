// Real DBE past paper: Mathematics P1, November 2022, National Senior
// Certificate (English). Source: a combined PDF (30 pages total) containing
// the official DBE question paper (pages 1-10: 9 question pages + 1
// information/formula sheet) and the genuine official DBE marking
// guidelines (pages 11-30, 20 pages), confirmed by its own cover page:
// "MARKING GUIDELINES/NASIENRIGLYNE", official DBE crest, stamped
// "APPROVED MARKING GUIDELINE / PUBLIC EXAMINATION" dated 2022-11-13,
// "MARKS/PUNTE: 150". This is a SCANNED PDF (no text layer) — every single
// page of both the question paper and the memo was rendered to an image
// and read directly (not OCR-guessed) before writing any content below.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3
// hours, confirmed against the printed cover page ("MARKS: 150",
// "TIME: 3 hours") and the "TOTAL: 150" printed at the foot of the memo.
// All 150 marks are included here. No stray/mismatched pages were found
// between the QP and memo for this paper.
//
// This paper reuses the Mathematics subject, its four CAPS cognitive
// levels (Knowledge / Routine Procedures / Complex Procedures / Problem
// Solving), and every existing P1 topic key from mathematics-p1-nov2023.ts
// (algebra, sequences, finance, functions, calculus, probability) — no new
// topics were needed, since this paper's content (algebra, number
// patterns/sequences/series, finance, exponential/hyperbola/parabola
// functions, differential calculus incl. an optimisation-style minimum-
// distance problem, and probability) falls entirely within those existing
// CAPS content areas.
//
// This paper is almost entirely calculation/algebra-based, so nearly every
// sub-question uses the stepped-MCQ pattern (`steps: MarkingPointStep[]`):
// the student works the problem out on paper as normal, then picks the
// option they got for each mark-earning step from a few choices, rather
// than typing anything. Distractors trap real Grade 12 Mathematics errors
// — sign slips, wrong root selected, arithmetic slips, forgetting a domain
// restriction, off-by-one errors, etc. `marking_points` (free-text) is used
// only for the one genuinely non-computational part: 8.2.2 (sketch the
// cubic graph of f).
//
// Where the memo shows an OR/alternative method, the steps below are based
// on the FIRST/primary method shown in the memo, per this app's ingestion
// convention, not an amalgam of methods.
//
// Diagrams: the hyperbola graph (Question 4.1), the parabola/exponential
// graph (Question 4.2), the straight-line g/g⁻¹ graph (Question 5), the
// parabola graph of f' (Question 8), and the three-circle Venn diagram
// (Question 10.1) are all vector line-drawings rendered directly into the
// page content stream (not separate embedded raster images), so each was
// cropped from its full-page render rather than extracted as a clean
// standalone image.
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
  year: 2022,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: null as string | null,
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

const IMG = "/question-images/maths-2022-p1";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ALGEBRA (25 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "Solve for x: (3x − 6)(x + 2) = 0",
    marks: 2, topicKey: "algebra", cognitiveLevelName: "Routine Procedures",
    model_answer: "3x − 6 = 0 gives x = 2, and x + 2 = 0 gives x = −2.",
    marking_notes: "One mark for each correct root.",
    steps: [
      { marks: 1, description: "What is the first value of x, from 3x − 6 = 0?", options: ["x = 2", "x = −2", "x = 3", "x = 6"], correctIndex: 0 },
      { marks: 1, description: "What is the second value of x, from x + 2 = 0?", options: ["x = −2", "x = 2", "x = −6", "x = 6"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Solve for x (correct to TWO decimal places): 2x² − 6x + 1 = 0",
    marks: 3, topicKey: "algebra", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using the quadratic formula: x = (6 ± √((−6)² − 4(2)(1)))/(2(2)) = (6 ± √28)/4, giving x = 2,82 or x = 0,18.",
    marking_notes: "Correct substitution into the quadratic formula, and both final answers rounded to 2 decimal places.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the quadratic formula?", options: ["x = (6 ± √((−6)² − 4(2)(1)))/(2(2))", "x = (−6 ± √((−6)² − 4(2)(1)))/(2(2))", "x = (6 ± √((−6)² − 4(2)(1)))/(2)", "x = (6 ± √((6)² + 4(2)(1)))/(2(2))"], correctIndex: 0 },
      { marks: 1, description: "What is the first answer (2 d.p.)?", options: ["x = 2,82", "x = 3,82", "x = 2,79", "x = 2,18"], correctIndex: 0 },
      { marks: 1, description: "What is the second answer (2 d.p.)?", options: ["x = 0,18", "x = −0,18", "x = 1,18", "x = 0,82"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Solve for x: x² − 90 > x",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "x² − x − 90 > 0, so (x + 9)(x − 10) > 0. Critical values are x = −9 and x = 10. Using a sign diagram (parabola opening upward): x < −9 or x > 10.",
    marking_notes: "Standard form, critical values/factors, and the final answer (two marks).",
    steps: [
      { marks: 1, description: "What is the standard form?", options: ["x² − x − 90 > 0", "x² + x − 90 > 0", "x² − x + 90 > 0", "x² − 90x > 0"], correctIndex: 0 },
      { marks: 1, description: "What are the critical values, after factorising (x + 9)(x − 10) > 0?", options: ["x = −9 and x = 10", "x = 9 and x = −10", "x = −9 and x = −10", "x = 9 and x = 10"], correctIndex: 0 },
      { marks: 2, description: "What is the final solution?", options: ["x < −9 or x > 10", "−9 < x < 10", "x > −9 and x > 10", "x < −9 or x < 10"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Solve for x: x − 7√x = −12",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "Isolating the root: x + 12 = 7√x. Squaring both sides: (x + 12)² = 49x, so x² + 24x + 144 = 49x, giving x² − 25x + 144 = 0, i.e. (x − 16)(x − 9) = 0, so x = 16 or x = 9.",
    marking_notes: "Isolating the root, squaring both sides, correct standard form, and both answers.",
    steps: [
      { marks: 1, description: "What do you get after isolating the root term?", options: ["x + 12 = 7√x", "x − 12 = 7√x", "x = 7√x − 12", "7√x = x"], correctIndex: 0 },
      { marks: 1, description: "What do you get after squaring both sides?", options: ["x² + 24x + 144 = 49x", "x² + 144 = 49x", "x² + 24x + 144 = 7x", "x² − 24x + 144 = 49x"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after simplifying?", options: ["x² − 25x + 144 = 0", "x² + 25x + 144 = 0", "x² − 25x − 144 = 0", "x² − 24x + 144 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are both values of x, from (x − 16)(x − 9) = 0?", options: ["x = 16 or x = 9", "x = −16 or x = −9", "x = 16 or x = −9", "x = 8 or x = 18"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Solve for x and y simultaneously: 2x − y = 2 and xy = 4",
    marks: 5, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "From 2x − y = 2: y = 2x − 2. Substituting into xy = 4: x(2x − 2) = 4, so 2x² − 2x − 4 = 0, giving x² − x − 2 = 0, i.e. (x − 2)(x + 1) = 0, so x = 2 or x = −1, and correspondingly y = 2 or y = −4.",
    marking_notes: "Correct expression for y in terms of x, correct substitution, correct standard form, both x-values, and both y-values.",
    steps: [
      { marks: 1, description: "What is y in terms of x, from 2x − y = 2?", options: ["y = 2x − 2", "y = 2x + 2", "y = 2 − 2x", "y = x − 2"], correctIndex: 0 },
      { marks: 1, description: "What do you get after substituting y = 2x − 2 into xy = 4?", options: ["x(2x − 2) = 4", "x(2x + 2) = 4", "2x − 2x = 4", "x(2x − 2) = 4x"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after simplifying?", options: ["x² − x − 2 = 0", "x² + x − 2 = 0", "x² − x + 2 = 0", "2x² − x − 2 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two x-values, from (x − 2)(x + 1) = 0?", options: ["x = 2 or x = −1", "x = −2 or x = 1", "x = 2 or x = 1", "x = −2 or x = −1"], correctIndex: 0 },
      { marks: 1, description: "What are the two corresponding y-values?", options: ["y = 2 or y = −4", "y = 2 or y = 4", "y = −2 or y = −4", "y = 4 or y = −2"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Show that 2.5ⁿ − 5ⁿ⁺¹ + 5ⁿ⁺² is even for all positive integer values of n.",
    marks: 3, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "2.5ⁿ − 5ⁿ⁺¹ + 5ⁿ⁺² = 2.5ⁿ − 5ⁿ.5¹ + 5ⁿ.5² = 5ⁿ(2 − 5 + 25) = 5ⁿ(22) = 2(5ⁿ.11), which is even since it is 2 multiplied by an integer.",
    marking_notes: "Correct use of exponent laws to write every term with the same base and power (5ⁿ), correct common factor, and the final conclusion/explanation.",
    steps: [
      { marks: 1, description: "Using exponent laws, how are the last two terms rewritten in terms of 5ⁿ?", options: ["5ⁿ.5¹ and 5ⁿ.5²", "5ⁿ⁺¹ and 5ⁿ⁺²  (unchanged)", "5.5ⁿ⁺¹ and 5.5ⁿ⁺²", "5ⁿ.5 and 5ⁿ.5"], correctIndex: 0 },
      { marks: 1, description: "Taking out the common factor 5ⁿ, what remains in the brackets?", options: ["(2 − 5 + 25)", "(2 + 5 − 25)", "(2 − 5 − 25)", "(2 × 5 × 25)"], correctIndex: 0 },
      { marks: 1, description: "What is the fully factorised, final form showing the expression is even?", options: ["2(5ⁿ.11)", "5ⁿ(22)", "22(5ⁿ)", "11(2.5ⁿ)"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Determine the values of x and y if: 3^(y+1)/32 = √(96ˣ)",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Problem Solving",
    model_answer: "3^(y+1)/2⁵ = 96^(x/2), so 3^(y+1).2⁻⁵ = 2^(5x/2).3^(x/2) (since 96 = 2⁵.3). Matching the powers of 2: −5 = 5x/2, so x = −2. Matching the powers of 3: y + 1 = x/2 = −1, so y = −2.",
    marking_notes: "Correct rewriting of 32 as 2⁵ and 96 as 2⁵.3, correctly matching the powers of 2 on each side, the correct value of x, and the correct value of y.",
    steps: [
      { marks: 1, description: "Rewriting 32 as 2⁵, what is the correct equation?", options: ["3^(y+1)/2⁵ = (96)^(x/2)", "3^(y+1)/2⁵ = 96ˣ", "3^(y+1) = 2⁵.(96)^(x/2)", "3^(y+1)/2⁵ = (96)²ˣ"], correctIndex: 0 },
      { marks: 1, description: "Rewriting 96 as 2⁵.3 on the right, what is the correct equation?", options: ["3^(y+1).2⁻⁵ = 2^(5x/2).3^(x/2)", "3^(y+1).2⁻⁵ = 2^(5x).3^(x/2)", "3^(y+1).2⁵ = 2^(5x/2).3^(x/2)", "3^(y+1).2⁻⁵ = 2^(x/2).3^(5x/2)"], correctIndex: 0 },
      { marks: 1, description: "Matching the powers of 2 on each side, what is x?", options: ["x = −2", "x = 2", "x = −5", "x = 5"], correctIndex: 0 },
      { marks: 1, description: "Matching the powers of 3 on each side, what is y?", options: ["y = −2", "y = 2", "y = −1", "y = 1"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 2: SEQUENCES AND SERIES (14 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The first term of a geometric series is 14 and the 6th term is 448. Calculate the value of the constant ratio, r.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "T6 = 14r⁵ = 448, so r⁵ = 32, giving r = 2.",
    marking_notes: "Correct substitution into T6 = ar⁵, and the correct value of r.",
    steps: [
      { marks: 1, description: "What is the correct substitution into T6 = ar⁵ = 448?", options: ["14r⁵ = 448", "14r⁶ = 448", "r⁵ = 448", "14 + 5r = 448"], correctIndex: 0 },
      { marks: 1, description: "What is r?", options: ["2", "32", "5", "4"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Determine the number of consecutive terms that must be added to the first 6 terms of the series in order to obtain a sum of 114 674.",
    marks: 4, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "S6 = 14(2⁶ − 1)/(2 − 1) = 882. The remaining sum needed is 114 674 − 882 = 113 792 = 896(2ⁿ − 1), giving 2ⁿ = 128, so n = 7. Therefore 7 more terms must be added to the first 6.",
    marking_notes: "Correct substitution into the sum formula for S6, the correct remaining-sum equation, solving for 2ⁿ, and the final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find S6?", options: ["S6 = 14(2⁶ − 1)/(2 − 1)", "S6 = 14(2⁶ − 1)/(1 − 2)", "S6 = 14(2⁵ − 1)/(2 − 1)", "S6 = 6(2⁶ − 1)/(2 − 1)"], correctIndex: 0 },
      { marks: 1, description: "What is S6?", options: ["882", "896", "448", "784"], correctIndex: 0 },
      { marks: 1, description: "Setting up the extra terms needed as 896(2ⁿ − 1) = 114 674 − 882, what does 2ⁿ equal?", options: ["128", "113 792", "64", "256"], correctIndex: 0 },
      { marks: 1, description: "How many more terms must be added to the first 6 terms?", options: ["7", "8", "6", "13"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "If the first term of another series is 448 and the 6th term is 14, calculate the sum to infinity of the new series.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "448r⁵ = 14, so r⁵ = 1/32, giving r = 1/2. S∞ = 448/(1 − 1/2) = 896.",
    marking_notes: "Correct value of r, correct substitution into S∞, and the final answer.",
    steps: [
      { marks: 1, description: "What is r, from 448r⁵ = 14?", options: ["1/2", "2", "1/4", "1/32"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into S∞ = a/(1 − r)?", options: ["S∞ = 448/(1 − 1/2)", "S∞ = 448/(1 + 1/2)", "S∞ = 14/(1 − 1/2)", "S∞ = 448(1 − 1/2)"], correctIndex: 0 },
      { marks: 1, description: "What is S∞?", options: ["896", "224", "448", "672"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "If Σ (from p=0 to k) of (1/3.p + 1/6) = 20 1/6, determine the value of k.",
    marks: 5, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "T1 = 1/6, T2 = 1/3 + 1/6 = 3/6, so d = 3/6 − 1/6 = 1/3. Substituting n = k + 1 terms into 121/6 = (n/2)[2(1/6) + (n − 1)(1/3)]: 121/3 = n[1/3 + n/3 − 1/3] = n²/3, so 121 = n², giving n = 11, and therefore k = 10.",
    marking_notes: "Correct value of T1, correct common difference d, correct substitution into the sum formula, the value of n, and the final value of k.",
    steps: [
      { marks: 1, description: "What is T1, the p = 0 term?", options: ["1/6", "1/3", "1/2", "0"], correctIndex: 0 },
      { marks: 1, description: "What is d, the common difference of the resulting arithmetic series?", options: ["1/3", "1/6", "1/2", "3"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into Sn = (n/2)[2a + (n−1)d], using 121/6 for the sum?", options: ["121/6 = (n/2)[2(1/6) + (n−1)(1/3)]", "121/6 = (n/2)[2(1/3) + (n−1)(1/6)]", "121/6 = n[2(1/6) + (n−1)(1/3)]", "121/6 = (n/2)[1/6 + (n−1)(1/3)]"], correctIndex: 0 },
      { marks: 1, description: "Simplifying, what is n (the number of terms), from n² = 121?", options: ["11", "10", "121", "22"], correctIndex: 0 },
      { marks: 1, description: "Since n = k + 1, what is k?", options: ["10", "11", "9", "12"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 3: QUADRATIC NUMBER PATTERN (10 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "It is given that the general term of a quadratic number pattern is Tn = n² + bn + 9 and the first term of the first differences is 7. Show that b = 4.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "T2 − T1 = 7, so (4 + 2b + 9) − (1 + b + 9) = 7, giving 3 + b = 7, so b = 4.",
    marking_notes: "Correct equation 3a + b = 7 (using a = 1), and the correct final step showing b = 4.",
    steps: [
      { marks: 1, description: "Using T2 − T1 = 7 (where a = 1 is the coefficient of n²), what equation results?", options: ["3 + b = 7", "3 − b = 7", "b = 7", "3b = 7"], correctIndex: 0 },
      { marks: 1, description: "What is b?", options: ["4", "3", "7", "10"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Determine the value of the 60th term of this number pattern.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "Tn = n² + 4n + 9. T60 = (60)² + 4(60) + 9 = 3849.",
    marking_notes: "Correct substitution and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into Tn = n² + 4n + 9?", options: ["T60 = (60)² + 4(60) + 9", "T60 = (60)² + 4(60)", "T60 = 60² + 9", "T60 = 60 + 4(60) + 9"], correctIndex: 0 },
      { marks: 1, description: "What is T60?", options: ["3849", "3609", "3849,5", "3369"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Determine the general term for the sequence of first differences of the quadratic number pattern. Write your answer in the form Tp = mp + q.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "The first differences are 7 ; 9 ; 11 ; ... , an arithmetic sequence with first term 7 and common difference 2. Tp = 7 + (p − 1)(2) = 2p + 5.",
    marking_notes: "Correct first differences identified, correct common second difference (used as d for the first-differences sequence), and the correct final general term.",
    steps: [
      { marks: 1, description: "What are the first few first differences of the quadratic pattern?", options: ["7 ; 9 ; 11 ; ...", "7 ; 11 ; 15 ; ...", "9 ; 11 ; 13 ; ...", "4 ; 9 ; 14 ; ..."], correctIndex: 0 },
      { marks: 1, description: "What is the common (second) difference of this sequence of first differences?", options: ["2", "4", "7", "9"], correctIndex: 0 },
      { marks: 1, description: "What is the general term Tp = mp + q?", options: ["Tp = 2p + 5", "Tp = 2p + 7", "Tp = 7p + 2", "Tp = 2p + 9"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Which TWO consecutive terms in the quadratic number pattern have a first difference of 157?",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "157 = 2p + 5, so p = 76. This first difference is between T76 and T77.",
    marking_notes: "Correct substitution into Tp = 2p + 5 = 157, correct value of p, and correctly identifying the two consecutive terms.",
    steps: [
      { marks: 1, description: "What is the correct substitution?", options: ["157 = 2p + 5", "157 = 2p − 5", "157 = 2p", "157 = p + 5"], correctIndex: 0 },
      { marks: 1, description: "What is p?", options: ["76", "75", "77", "78"], correctIndex: 0 },
      { marks: 1, description: "Which two consecutive terms have this first difference?", options: ["T76 and T77", "T75 and T76", "T76 and T78", "T77 and T78"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 4: HYPERBOLA, PARABOLA AND EXPONENTIAL FUNCTIONS (20 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "Sketched below is the graph of h(x) = 1/(x + p) + q. The asymptotes of h intersect at (1 ; 2). Write down the values of p and q.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "The asymptotes intersect at (−p ; q) = (1 ; 2), so p = −1 and q = 2.",
    marking_notes: "One mark for each correct value.",
    steps: [
      { marks: 1, description: "What is the value of p?", options: ["p = −1", "p = 1", "p = 2", "p = −2"], correctIndex: 0 },
      { marks: 1, description: "What is the value of q?", options: ["q = 2", "q = 1", "q = −1", "q = −2"], correctIndex: 0 },
    ],
    image_url: `${IMG}/4-hyperbola-graph.png`,
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Calculate the coordinates of the x-intercept of h.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "At the x-intercept, y = 0: 1/(x − 1) + 2 = 0, so −2x + 2 = 1, giving x = 1/2. The x-intercept is (1/2 ; 0).",
    marking_notes: "Correctly setting h(x) = 0, and the correct final coordinates.",
    steps: [
      { marks: 1, description: "Setting h(x) = 0, what equation must be solved?", options: ["1/(x − 1) + 2 = 0", "1/(x − 1) − 2 = 0", "1/(x + 1) + 2 = 0", "x − 1 + 2 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of the x-intercept?", options: ["(1/2 ; 0)", "(−1/2 ; 0)", "(2 ; 0)", "(−1 ; 0)"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "Write down the x-coordinate of the x-intercept of g if g(x) = h(x + 3).",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "Shifting the x-intercept of h (x = 1/2) 3 units to the left: x = 1/2 − 3 = −5/2.",
    marking_notes: "Recognising the horizontal shift of 3 units to the left, and the correct final x-coordinate.",
    steps: [
      { marks: 1, description: "What is the correct horizontal shift applied to the x-intercept of h?", options: ["shift 3 units left: x = 1/2 − 3", "shift 3 units right: x = 1/2 + 3", "shift 3 units left: x = 1/2 + 3", "no shift needed"], correctIndex: 0 },
      { marks: 1, description: "What is the x-coordinate of the x-intercept of g?", options: ["−5/2", "5/2", "−7/2", "3/2"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.1.4",
    text: "The equation of an axis of symmetry of h is y = x + t. Determine the value of t.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "An axis of symmetry of a hyperbola passes through the point where the asymptotes intersect, (1 ; 2): 2 = 1 + t, so t = 1.",
    marking_notes: "Correctly substituting the point (1 ; 2) into y = x + t, and the correct value of t.",
    steps: [
      { marks: 1, description: "Substituting (1 ; 2) into y = x + t, what equation results?", options: ["2 = 1 + t", "1 = 2 + t", "2 = t − 1", "1 = t"], correctIndex: 0 },
      { marks: 1, description: "What is t?", options: ["1", "2", "−1", "3"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.1.5",
    text: "Determine the values of x for which −2 ≤ 1/(x − 1).",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "1/(x − 1) + 2 ≥ 0. This holds for x ≤ 1/2 or x > 1 (excluding the asymptote at x = 1).",
    marking_notes: "Correctly rewriting the inequality with zero on one side, and both parts of the final answer.",
    steps: [
      { marks: 1, description: "What is the inequality rewritten with zero on one side?", options: ["1/(x − 1) + 2 ≥ 0", "1/(x − 1) − 2 ≥ 0", "1/(x − 1) + 2 ≤ 0", "1/(x + 1) + 2 ≥ 0"], correctIndex: 0 },
      { marks: 1, description: "What is the first part of the answer?", options: ["x ≤ 1/2", "x < 1/2", "x ≥ 1/2", "x ≤ −1/2"], correctIndex: 0 },
      { marks: 1, description: "What is the second part of the answer?", options: ["x > 1", "x ≥ 1", "x < 1", "x > −1"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "The graphs of f(x) = x² − 4x − 5 and g(x) = a.2ˣ + q are sketched below. E and H are the x-intercepts of f. C is the y-intercept of f and lies on the asymptote of g. The two graphs intersect at D, the turning point of f. Write down the y-coordinate of C.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "C is the y-intercept of f: f(0) = 0² − 4(0) − 5 = −5, so the y-coordinate of C is −5.",
    marking_notes: "Accept only y = −5.",
    steps: [{ marks: 1, description: "What is the y-coordinate of C?", options: ["−5", "5", "0", "−4"], correctIndex: 0 }],
    image_url: `${IMG}/4-parabola-exp-graph.png`,
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Determine the coordinates of D.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "x = −b/2a = −(−4)/(2(1)) = 2. f(2) = 2² − 4(2) − 5 = −9. D(2 ; −9).",
    marking_notes: "Correct x-value of the turning point, and correct y-value.",
    steps: [
      { marks: 1, description: "What is the x-coordinate of D, the turning point of f?", options: ["2", "−2", "4", "−4"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of D?", options: ["−9", "9", "−5", "−4"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "Determine the values of a and q.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since C(0 ; −5) lies on the asymptote of g, q = −5. Since D(2 ; −9) lies on g: −9 = a(2)² − 5, so −4 = 4a, giving a = −1.",
    marking_notes: "Correct value of q, correct substitution of D(2 ; −9), and the correct value of a.",
    steps: [
      { marks: 1, description: "What is q?", options: ["−5", "5", "−9", "2"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution of D(2 ; −9) into g(x) = a.2ˣ + q?", options: ["−9 = a(2)² − 5", "−9 = a(2)² + 5", "−9 = a(2)⁴ − 5", "2 = a(−9)² − 5"], correctIndex: 0 },
      { marks: 1, description: "What is a?", options: ["−1", "1", "−4", "4"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.2.4",
    text: "Write down the range of g.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "Since g has a horizontal asymptote at y = −5 and a < 0 (g decreases towards but never reaches −5 from below), the range is y ∈ (−∞ ; −5).",
    marking_notes: "Accept only y ∈ (−∞ ; −5) or y < −5, y ∈ R.",
    steps: [{ marks: 1, description: "What is the range of g?", options: ["y ∈ (−∞ ; −5)", "y ∈ (−5 ; ∞)", "y ∈ R", "y ≤ −5"], correctIndex: 0 }],
  },
  {
    number: "4", sub_number: "4.2.5",
    text: "Determine the values of k for which the value of f(x) − k will always be positive.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "f(x) − k > 0 for all x means k must be less than the minimum value of f, which is the y-value of the turning point D, −9. So k < −9.",
    marking_notes: "Correctly identifying the minimum value of f (the y-value of the turning point), and the correct final inequality.",
    steps: [
      { marks: 1, description: "What is the minimum value of f (the y-value of its turning point)?", options: ["−9", "−5", "2", "9"], correctIndex: 0 },
      { marks: 1, description: "What is the final inequality for k?", options: ["k < −9", "k > −9", "k ≤ −9", "k < 9"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: STRAIGHT LINE AND ITS INVERSE (13 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "The graphs of g(x) = 2x + 6 and g⁻¹, the inverse of g, are shown in the diagram below. D and B are respectively the x- and y-intercepts of g. C is the x-intercept of g⁻¹. The graphs of g and g⁻¹ intersect at A. Write down the y-coordinate of B.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "B is the y-intercept of g(x) = 2x + 6: y = 6.",
    marking_notes: "Accept only y = 6.",
    steps: [{ marks: 1, description: "What is the y-coordinate of B?", options: ["6", "3", "−6", "2"], correctIndex: 0 }],
    image_url: `${IMG}/5-graphs-g-ginv.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Determine the equation of g⁻¹ in the form g⁻¹(x) = mx + n.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "y = 2x + 6. Swapping x and y: x = 2y + 6, so y = (1/2)x − 3, i.e. g⁻¹(x) = (1/2)x − 3.",
    marking_notes: "Correctly swapping x and y, and the correct final equation.",
    steps: [
      { marks: 1, description: "What do you get after swapping x and y in y = 2x + 6?", options: ["x = 2y + 6", "y = 2x + 6 (unchanged)", "x = 2y − 6", "y = 2x − 6"], correctIndex: 0 },
      { marks: 1, description: "What is g⁻¹(x)?", options: ["(1/2)x − 3", "(1/2)x + 3", "2x − 3", "(1/2)x − 6"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Determine the coordinates of A.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "At A, g(x) = g⁻¹(x): (1/2)x − 3 = 2x + 6, so x − 6 = 4x + 12, giving 3x = −18, so x = −6. A(−6 ; −6).",
    marking_notes: "Correctly equating the two functions, the correct x-value, and the correct y-value.",
    steps: [
      { marks: 1, description: "What equation results from equating g and g⁻¹?", options: ["(1/2)x − 3 = 2x + 6", "(1/2)x + 3 = 2x + 6", "2x + 6 = x − 3", "(1/2)x − 3 = 2x − 6"], correctIndex: 0 },
      { marks: 1, description: "What is x?", options: ["−6", "6", "−3", "3"], correctIndex: 0 },
      { marks: 1, description: "What is y (using y = 2x + 6)?", options: ["−6", "6", "18", "−18"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Calculate the length of AB.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "A(−6 ; −6), B(0 ; 6). AB = √((0 − (−6))² + (6 − (−6))²) = √(36 + 144) = √180 = 6√5 ≈ 13,42 units.",
    marking_notes: "Correct substitution into the distance formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the distance formula?", options: ["√((6)² + (12)²)", "√((6)² + (6)²)", "√((0)² + (12)²)", "√((12)² + (12)²)"], correctIndex: 0 },
      { marks: 1, description: "What is the length of AB?", options: ["13,42", "18,00", "6,71", "180,00"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Calculate the area of ΔABC.",
    marks: 5, topicKey: "functions", cognitiveLevelName: "Problem Solving",
    model_answer: "B(0 ; 6), C(6 ; 0): BC = √(6² + 6²) = √72 = 6√2. By the symmetry of g and g⁻¹ about y = x: AB = AC = √180. The perpendicular height from A to BC: h² = (√180)² − (√72/2)² = 162, so h = √162 = 9√2. Area of ΔABC = (1/2).BC.h = (1/2)(√72)(√162) = 54 units².",
    marking_notes: "Correct length of BC, recognising AB = AC by symmetry, correct perpendicular height using Pythagoras, correct substitution into the area formula, and the final answer.",
    steps: [
      { marks: 1, description: "What is the length of BC?", options: ["6√2", "6√5", "√180", "12"], correctIndex: 0 },
      { marks: 1, description: "Why are AB and AC equal, and what is their length?", options: ["By the symmetry of g and g⁻¹ about y = x, AB = AC = √180", "By coincidence, AB = AC = √72", "AB = AC = 6√2, since both lie on g", "AB and AC cannot be shown to be equal"], correctIndex: 0 },
      { marks: 1, description: "What is the perpendicular height h from A to BC?", options: ["√162 = 9√2", "√180", "√72", "√108"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the area formula, Area = (1/2).BC.h?", options: ["(1/2)(√72)(√162)", "(1/2)(√180)(√162)", "(1/2)(√72)(√180)", "(√72)(√162)"], correctIndex: 0 },
      { marks: 1, description: "What is the area of ΔABC?", options: ["54 units²", "108 units²", "27 units²", "72 units²"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 6: FINANCE, GROWTH AND DECAY (14 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "R12 000 was invested in a fund that paid interest at m% p.a., compounded quarterly. After 24 months, the value of the investment was R13 459. Determine the value of m.",
    marks: 4, topicKey: "finance", cognitiveLevelName: "Routine Procedures",
    model_answer: "13 459 = 12 000(1 + m/400)⁸. So (1 + m/400)⁸ = 1,121..., giving 1 + m/400 = ⁸√1,121... = 1,0144..., so m/400 = 0,0144..., giving m = 5,78%.",
    marking_notes: "Correct number of quarters (n = 8), correct substitution into the compound growth formula, correctly taking the 8th root, and the final answer.",
    steps: [
      { marks: 1, description: "What is n (the number of quarters in 24 months)?", options: ["8", "24", "2", "6"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into A = P(1 + i)ⁿ?", options: ["13 459 = 12 000(1 + m/400)⁸", "13 459 = 12 000(1 + m/100)⁸", "13 459 = 12 000(1 + m/400)²⁴", "13 459 = 12 000(1 + m/4)⁸"], correctIndex: 0 },
      { marks: 1, description: "Taking the 8th root of both sides, what equation results?", options: ["1 + m/400 = ⁸√1,121...", "1 + m/400 = 1,121.../8", "1 + m/400 = (1,121...)⁸", "m/400 = ⁸√1,121..."], correctIndex: 0 },
      { marks: 1, description: "What is m?", options: ["5,78%", "8,00%", "1,44%", "11,21%"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "On 31 January 2022, Tino deposited R1 000 in an account that paid interest at 7,5% p.a., compounded monthly. He continued depositing R1 000 on the last day of every month. He will make the last deposit on 31 December 2022. Will Tino have sufficient funds in the account on 1 January 2023 to buy a computer that costs R13 000? Justify your answer by means of an appropriate calculation.",
    marks: 4, topicKey: "finance", cognitiveLevelName: "Complex Procedures",
    model_answer: "F = 1000[(1 + 0,075/12)¹² − 1]/(0,075/12) = R12 421,22. Since R12 421,22 < R13 000, Tino will NOT have sufficient funds to buy the computer.",
    marking_notes: "Correct monthly interest rate, correct number of deposits (n = 12), the correct future-value answer, and the correct conclusion comparing it to R13 000.",
    steps: [
      { marks: 1, description: "What is the monthly interest rate to use?", options: ["0,075/12", "0,075/100", "7,5/12", "0,075"], correctIndex: 0 },
      { marks: 1, description: "What is n, the number of monthly deposits?", options: ["12", "11", "13", "24"], correctIndex: 0 },
      { marks: 1, description: "What is the future value of the deposits, F?", options: ["R12 421,22", "R13 000,00", "R12 000,00", "R12 900,00"], correctIndex: 0 },
      { marks: 1, description: "What is the correct conclusion?", options: ["He will NOT have sufficient funds, since R12 421,22 < R13 000", "He WILL have sufficient funds, since R12 421,22 > R13 000", "He will have exactly enough funds", "There is not enough information to decide"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "Thabo plans to buy a car that costs R250 000. He will pay a deposit of 15% and take out a loan for the balance. The interest on the loan is 13% p.a., compounded monthly. Calculate the value of the loan.",
    marks: 1, topicKey: "finance", cognitiveLevelName: "Knowledge",
    model_answer: "Loan amount = 85% × R250 000 = R212 500.",
    marking_notes: "Accept only R212 500.",
    steps: [{ marks: 1, description: "What is the value of the loan?", options: ["R212 500", "R250 000", "R37 500", "R215 000"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "The first repayment will be made 6 months after the loan has been granted. The loan will be repaid over a period of 6 years after it has been granted. Calculate the MONTHLY instalment.",
    marks: 5, topicKey: "finance", cognitiveLevelName: "Problem Solving",
    model_answer: "The loan grows for 5 months with no repayments before the annuity starts: A = 212 500(1 + 0,13/12)⁵ = R224 262,53. This becomes the present value of an annuity of 67 monthly payments (72 months in total, minus the 5 months already elapsed): 224 262,53 = x[1 − (1 + 0,13/12)⁻⁶⁷]/(0,13/12), giving x = R4 724,96.",
    marking_notes: "Correct value accumulated over the first 5 months before repayments begin, correct substitution into the present-value annuity formula, correct number of remaining monthly repayments (n = 67), and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution to grow the loan for the 5 months before repayments start?", options: ["A = 212 500(1 + 0,13/12)⁵", "A = 212 500(1 + 0,13/12)⁶", "A = 212 500(1 + 0,13/12)⁷²", "A = 212 500(1 + 0,13)⁵"], correctIndex: 0 },
      { marks: 1, description: "What is this accumulated value, A?", options: ["R224 262,53", "R226 562,50", "R212 500,00", "R230 000,00"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the present-value annuity formula?", options: ["224 262,53 = x[1 − (1 + 0,13/12)⁻⁶⁷]/(0,13/12)", "224 262,53 = x[(1 + 0,13/12)⁶⁷ − 1]/(0,13/12)", "212 500 = x[1 − (1 + 0,13/12)⁻⁶⁷]/(0,13/12)", "224 262,53 = x[1 − (1 + 0,13/12)⁻⁷²]/(0,13/12)"], correctIndex: 0 },
      { marks: 1, description: "What is n, the number of remaining monthly repayments?", options: ["67", "72", "66", "60"], correctIndex: 0 },
      { marks: 1, description: "What is the monthly instalment, x?", options: ["R4 724,96", "R3 819,44", "R4 674,17", "R5 062,50"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 7: DIFFERENTIAL CALCULUS — FIRST PRINCIPLES & RULES (12 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "Determine f'(x) from first principles if f(x) = x² + x",
    marks: 5, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f'(x) = lim(h→0) [f(x+h) − f(x)]/h = lim(h→0) [(x+h)² + (x+h) − (x² + x)]/h = lim(h→0) [x² + 2xh + h² + x + h − x² − x]/h = lim(h→0) (2xh + h² + h)/h = lim(h→0) h(2x + h + 1)/h = 2x + 1.",
    marking_notes: "Correct substitution into the first-principles definition, correct expansion, correct simplification, correct common factor of h, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into f'(x) = lim(h→0) [f(x+h) − f(x)]/h?", options: [
        "[(x+h)² + (x+h) − (x² + x)]/h",
        "[(x+h)² + (x+h) + (x² + x)]/h",
        "[(x+h)² − (x² + x)]/h",
        "[(x² + x) − (x+h)² + (x+h)]/h",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the fully expanded numerator?", options: ["x² + 2xh + h² + x + h − x² − x", "x² + 2xh + h² + x − x² − x", "x² + xh + h² + x + h − x² − x", "x² + 2xh + h + x + h − x² − x"], correctIndex: 0 },
      { marks: 1, description: "What does the numerator simplify to?", options: ["2xh + h² + h", "2xh + h²", "2xh + h", "xh + h² + h"], correctIndex: 0 },
      { marks: 1, description: "What is the common factor of h taken out?", options: ["h(2x + h + 1)", "h(2x + h)", "h(2x − h + 1)", "h(x + h + 1)"], correctIndex: 0 },
      { marks: 1, description: "What is f'(x)?", options: ["2x + 1", "x + 1", "2x", "2x + h + 1"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Determine f'(x) if f(x) = 2x⁵ − 3x⁴ + 8x",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Knowledge",
    model_answer: "f'(x) = 10x⁴ − 12x³ + 8.",
    marking_notes: "One mark for each correctly differentiated term.",
    steps: [
      { marks: 1, description: "What is the derivative of 2x⁵?", options: ["10x⁴", "10x⁵", "2x⁴", "5x⁴"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of −3x⁴?", options: ["−12x³", "−12x⁴", "−3x³", "−7x³"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of 8x?", options: ["8", "8x", "0", "4"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "The tangent to g(x) = ax³ + 3x² + bx + c has a minimum gradient at the point (−1 ; −7). For which values of x will g be concave up?",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "g'(x) = 3ax² + 6x + b, so g''(x) = 6ax + 6. The gradient (g') has a minimum where g''(x) = 0: g''(−1) = 6a(−1) + 6 = 0, giving a = 1. For g concave up, g''(x) > 0: 6x + 6 > 0, so x > −1.",
    marking_notes: "Correct g'(x), correctly setting g''(−1) = 0 (the minimum-gradient condition), the correct value of a, and the correct final interval.",
    steps: [
      { marks: 1, description: "What is g'(x)?", options: ["3ax² + 6x + b", "ax² + 6x + b", "3ax² + 3x + b", "3ax² + 6x"], correctIndex: 0 },
      { marks: 1, description: "What equation locates where the gradient g'(x) is a minimum, using x = −1?", options: ["g''(−1) = 6a(−1) + 6 = 0", "g'(−1) = 0", "g''(−1) = 6a(−1) − 6 = 0", "g(−1) = −7"], correctIndex: 0 },
      { marks: 1, description: "What is a?", options: ["1", "−1", "6", "−6"], correctIndex: 0 },
      { marks: 1, description: "For which values of x is g concave up (g''(x) > 0)?", options: ["x > −1", "x < −1", "x > 1", "x < 1"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: CUBIC FUNCTION VIA ITS DERIVATIVE (17 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "The graph of y = f'(x) = mx² + nx + k is drawn below. The graph passes through the points P(−1/3 ; 0), Q(1 ; 0) and R(0 ; 1). Determine the values of m, n and k.",
    marks: 6, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "Using the x-intercepts: f'(x) = m(x + 1/3)(x − 1). Substituting R(0 ; 1): 1 = m(0 + 1/3)(0 − 1) = −(1/3)m, so m = −3. Then f'(x) = −3(x + 1/3)(x − 1) = −3(x² − (2/3)x − 1/3) = −3x² + 2x + 1, so n = 2 and k = 1.",
    marking_notes: "Correct substitution of the two x-intercepts into the factorised form, correct substitution of R(0 ; 1), the correct value of m, the correctly expanded expression, and the correct values of n and k.",
    steps: [
      { marks: 1, description: "Using the x-intercepts P(−1/3 ; 0) and Q(1 ; 0), what is the factorised form of f'(x)?", options: ["f'(x) = m(x + 1/3)(x − 1)", "f'(x) = m(x − 1/3)(x + 1)", "f'(x) = m(x + 1/3)(x + 1)", "f'(x) = m(x − 1/3)(x − 1)"], correctIndex: 0 },
      { marks: 1, description: "Substituting R(0 ; 1), what equation results?", options: ["1 = m(0 + 1/3)(0 − 1)", "1 = m(0 − 1/3)(0 + 1)", "0 = m(1 + 1/3)(1 − 1)", "1 = m(1/3)"], correctIndex: 0 },
      { marks: 1, description: "What is m?", options: ["−3", "3", "−1/3", "1/3"], correctIndex: 0 },
      { marks: 1, description: "What is f'(x) fully expanded?", options: ["−3x² + 2x + 1", "−3x² − 2x + 1", "−3x² + 2x − 1", "3x² + 2x + 1"], correctIndex: 0 },
      { marks: 1, description: "What is n?", options: ["2", "−2", "1", "−3"], correctIndex: 0 },
      { marks: 1, description: "What is k?", options: ["1", "−1", "2", "0"], correctIndex: 0 },
    ],
    image_url: `${IMG}/8-fprime-graph.png`,
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "It is further given that f(x) = −x³ + x² + x + 2. Determine the coordinates of the turning points of f.",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "The turning points occur where f'(x) = 0, at x = −1/3 and x = 1 (from the graph in 8.1). f(−1/3) = −(−1/3)³ + (−1/3)² + (−1/3) + 2 = 49/27. f(1) = −1 + 1 + 1 + 2 = 3. Turning points: (−1/3 ; 49/27) and (1 ; 3).",
    marking_notes: "Correct x-coordinates of the turning points (from the x-intercepts of f'), and both correct turning points.",
    steps: [
      { marks: 1, description: "What are the x-coordinates of the turning points of f (the x-intercepts of f')?", options: ["x = −1/3 and x = 1", "x = 1/3 and x = −1", "x = −1/3 and x = −1", "x = 0 and x = 1"], correctIndex: 0 },
      { marks: 1, description: "What is the turning point at x = −1/3?", options: ["(−1/3 ; 49/27)", "(−1/3 ; 1,81)", "(−1/3 ; 2)", "(−1/3 ; 0)"], correctIndex: 0 },
      { marks: 1, description: "What is the turning point at x = 1?", options: ["(1 ; 3)", "(1 ; 0)", "(1 ; 2)", "(1 ; 1)"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Draw the graph of f. Indicate on your graph the coordinates of the turning points and the intercepts with the axes.",
    marks: 5, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "Solving −x³ + x² + x + 2 = 0 gives (x − 2)(−x² − x − 1) = 0, and since −x² − x − 1 = 0 has no real roots, the only x-intercept is x = 2. The y-intercept is at (0 ; 2). A negative cubic shape, decreasing then increasing then decreasing, with turning points at (−1/3 ; 1,81) and (1 ; 3), and passing through (2 ; 0).",
    marking_notes: "One mark for correctly solving for and plotting the single x-intercept at x = 2, one mark for showing only one x-intercept, one mark for both turning points plotted correctly, one mark for the correct y-intercept, and one mark for the correct overall negative-cubic shape.",
    marking_points: [
      { marks: 1, description: "the x-intercept correctly calculated as x = 2", keywords: ["x = 2", "2 0"] },
      { marks: 1, description: "only one x-intercept shown on the graph (matching the algebra, since the quadratic factor has no real roots)", keywords: ["one x intercept"] },
      { marks: 1, description: "both turning points correctly plotted, at (−1/3 ; 1,81) and (1 ; 3)", keywords: ["turning point", "1 3", "1 3 1 81"] },
      { marks: 1, description: "correct y-intercept plotted at (0 ; 2)", keywords: ["0 2", "y intercept"] },
      { marks: 1, description: "correct overall shape of a negative cubic (decreasing, increasing, then decreasing)", keywords: ["negative cubic", "shape"] },
    ],
  },
  {
    number: "8", sub_number: "8.3.1",
    text: "Points E and W are two variable points on f' and are on the same horizontal line. h is a tangent to f' at E. g is a tangent to f' at W. h and g intersect at D(a ; b). Write down the value of a.",
    marks: 1, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since f' is a parabola and E, W are symmetric points on the same horizontal line, their tangents h and g always intersect on the axis of symmetry of f': a = (−1/3 + 1)/2 = 1/3.",
    marking_notes: "Accept only a = 1/3.",
    steps: [{ marks: 1, description: "What is the value of a (the x-coordinate where the two tangents always meet)?", options: ["1/3", "−1/3", "2/3", "1"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.3.2",
    text: "Determine the value(s) of b for which h and g will no longer be tangents to f'.",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "The two tangents to a parabola drawn from two distinct points on it can only meet below the parabola's own value at x = a (i.e. below f'(1/3)) — once E and W merge (both at the vertex) the construction breaks down. This occurs when b < f'(1/3) = 4/3, so h and g fail to be (distinct) tangents when b < 4/3.",
    marking_notes: "Correct value of f'(1/3) = 4/3, and the correct final inequality for b.",
    steps: [
      { marks: 1, description: "What is f'(1/3), the boundary value?", options: ["4/3", "1/3", "1", "0"], correctIndex: 0 },
      { marks: 1, description: "For which values of b will h and g no longer be tangents to f'?", options: ["b < 4/3", "b > 4/3", "b ≤ 4/3", "b = 4/3"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 9: OPTIMISATION — MINIMUM DISTANCE (8 marks) ============

  {
    number: "9", sub_number: null,
    text: "Given f(x) = x². Determine the minimum distance between the point (10 ; 2) and a point on f.",
    marks: 8, topicKey: "calculus", cognitiveLevelName: "Problem Solving",
    model_answer: "Any point on f is (x ; x²). Distance d = √((x − 10)² + (x² − 2)²) = √(x² − 20x + 100 + x⁴ − 4x² + 4) = √(x⁴ − 3x² − 20x + 104). Minimising: d/dx(x⁴ − 3x² − 20x + 104) = 4x³ − 6x − 20 = 0, so (x − 2)(4x² + 8x + 10) = 0. Since 4x² + 8x + 10 has a negative discriminant (no real roots), x = 2. The minimum distance is d = √(2⁴ − 3(2)² − 20(2) + 104) = √68 = 2√17 ≈ 8,25 units.",
    marking_notes: "Correctly representing a general point on f, correct substitution into the distance formula, correct simplification, the correctly simplified expression under the root, the correct derivative, correctly setting the derivative equal to 0, the correct value of x, and the correct final minimum distance.",
    steps: [
      { marks: 1, description: "How is any point on f represented?", options: ["(x ; x²)", "(x² ; x)", "(x ; x)", "(x² ; x²)"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the distance formula?", options: ["d = √((x − 10)² + (x² − 2)²)", "d = √((x + 10)² + (x² − 2)²)", "d = √((x − 10)² + (x² + 2)²)", "d = √((x − 2)² + (x² − 10)²)"], correctIndex: 0 },
      { marks: 1, description: "What does this expand to?", options: ["x² − 20x + 100 + x⁴ − 4x² + 4", "x² − 20x + 100 + x⁴ + 4x² + 4", "x² + 20x + 100 + x⁴ − 4x² + 4", "x² − 20x + 100 − x⁴ − 4x² + 4"], correctIndex: 0 },
      { marks: 1, description: "What is the fully simplified expression under the root, d = √(...)?", options: ["x⁴ − 3x² − 20x + 104", "x⁴ + 3x² − 20x + 104", "x⁴ − 3x² + 20x + 104", "x⁴ − 3x² − 20x − 104"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of x⁴ − 3x² − 20x + 104?", options: ["4x³ − 6x − 20", "4x³ − 3x − 20", "4x³ − 6x", "x³ − 6x − 20"], correctIndex: 0 },
      { marks: 1, description: "Setting the derivative to 0 and factorising, which equation results?", options: ["(x − 2)(4x² + 8x + 10) = 0", "(x + 2)(4x² − 8x + 10) = 0", "(x − 2)(4x² − 8x + 10) = 0", "(x − 2)(4x² + 8x − 10) = 0"], correctIndex: 0 },
      { marks: 1, description: "What is x (given that the quadratic factor has no real roots)?", options: ["2", "−2", "0", "10"], correctIndex: 0 },
      { marks: 1, description: "What is the minimum distance?", options: ["2√17 ≈ 8,25", "√17 ≈ 4,12", "2√17 ≈ 6,25", "17"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 10: PROBABILITY (17 marks) ============

  {
    number: "10", sub_number: "10.1.1(a)",
    text: "A, B and C are three events. The probabilities of these events (or any combination of them) occurring are given in the Venn diagram below. If it is given that the probability that at least one of the events will occur is 0,893, calculate the value of: y, the probability that none of the events will occur.",
    marks: 1, topicKey: "probability", cognitiveLevelName: "Knowledge",
    model_answer: "y = 1 − 0,893 = 0,107.",
    marking_notes: "Accept only y = 0,107.",
    steps: [{ marks: 1, description: "What is y?", options: ["0,107", "0,893", "0,16", "0,733"], correctIndex: 0 }],
    image_url: `${IMG}/10-venn-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.1(b)",
    text: "Calculate the value of: x, the probability that all three events will occur.",
    marks: 1, topicKey: "probability", cognitiveLevelName: "Knowledge",
    model_answer: "The known regions inside the circles (excluding x) sum to 0,05 + 0,15 + 0,05 + 0,1 + 0,2 + 0,183 = 0,733. Since P(at least one) = 0,893: x = 0,893 − 0,733 = 0,16.",
    marking_notes: "Accept only x = 0,16.",
    steps: [{ marks: 1, description: "What is x?", options: ["0,16", "0,107", "0,733", "0,893"], correctIndex: 0 }],
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "Determine the probability that at least two of the events will take place.",
    marks: 2, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "P(at least two) = 0,1 + 0,15 + 0,16 + 0,2 = 0,61.",
    marking_notes: "Correctly identifying all four regions where at least two events overlap, and the correct final answer.",
    steps: [
      { marks: 1, description: "Which regions of the Venn diagram represent 'at least two events occurring'?", options: ["the 0,1 ; 0,15 ; x(0,16) and 0,2 regions", "the 0,05 ; 0,05 and 0,183 regions", "only the x region", "all regions except y"], correctIndex: 0 },
      { marks: 1, description: "What is P(at least two events)?", options: ["0,61", "0,76", "0,50", "0,893"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "Are events B and C independent? Justify your answer.",
    marks: 5, topicKey: "probability", cognitiveLevelName: "Complex Procedures",
    model_answer: "P(B) = 0,1 + 0,16 + 0,2 + 0,183 = 0,643. P(C) = 0,05 + 0,15 + 0,16 + 0,2 = 0,56. P(B and C) = 0,16 + 0,2 = 0,36. Since P(B) × P(C) = 0,643 × 0,56 = 0,36 = P(B and C), events B and C ARE independent.",
    marking_notes: "Correct P(B), correct P(C), correct P(B and C), correctly showing P(B) × P(C) = P(B and C), and the correct conclusion.",
    steps: [
      { marks: 1, description: "What is P(B)?", options: ["0,643", "0,56", "0,36", "0,733"], correctIndex: 0 },
      { marks: 1, description: "What is P(C)?", options: ["0,56", "0,643", "0,36", "0,25"], correctIndex: 0 },
      { marks: 1, description: "What is P(B and C)?", options: ["0,36", "0,16", "0,20", "0,56"], correctIndex: 0 },
      { marks: 1, description: "What is P(B) × P(C)?", options: ["0,36", "0,30", "0,40", "0,56"], correctIndex: 0 },
      { marks: 1, description: "What is the correct conclusion?", options: ["B and C are independent, since P(B) × P(C) = P(B and C)", "B and C are NOT independent, since P(B) × P(C) ≠ P(B and C)", "B and C are mutually exclusive", "There is not enough information to decide"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "A four-digit code is required to open a combination lock. The code must be even-numbered and may not contain the digits 0 or 1. Digits may not be repeated. How many possible 4-digit combinations are there to open the lock?",
    marks: 3, topicKey: "probability", cognitiveLevelName: "Complex Procedures",
    model_answer: "The last digit must be even, chosen from {2 ; 4 ; 6 ; 8}: 4 choices. The remaining three positions are then filled, without repetition, from the remaining 7 available digits (2-9, excluding the one used as the last digit): 7 × 6 × 5. Total = 7 × 6 × 5 × 4 = 840.",
    marking_notes: "Correct number of choices for the last (even) digit, correct number of remaining choices for the first of the other positions, and the correct final total.",
    steps: [
      { marks: 1, description: "How many valid choices are there for the last digit (must be even, from the digits 2-9)?", options: ["4", "5", "3", "8"], correctIndex: 0 },
      { marks: 1, description: "How many choices remain for the first of the other three positions?", options: ["7", "8", "6", "9"], correctIndex: 0 },
      { marks: 1, description: "What is the total number of 4-digit combinations?", options: ["840", "720", "1 680", "336"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Calculate the probability that you will open the lock at the first attempt if it is given that the code is greater than 5 000 and the third digit is 2.",
    marks: 5, topicKey: "probability", cognitiveLevelName: "Problem Solving",
    model_answer: "The first digit must make the code greater than 5000 (so it is 5, 6, 7, 8 or 9), and the third digit is fixed as 2. Case first digit ∈ {5 ; 7 ; 9} (odd, 3 choices): the 3 even digits {4 ; 6 ; 8} remain available for the last digit, and 5 digits remain for the second position: 3 × 5 × 1 × 3 = 45. Case first digit = 6: only {4 ; 8} remain even for the last digit, and 5 digits remain for the second position: 1 × 5 × 1 × 2 = 10. Case first digit = 8: similarly 1 × 5 × 1 × 2 = 10. Total favourable = 45 + 10 + 10 = 65. P = 65/840 = 13/168 ≈ 0,08.",
    marking_notes: "Correct count for the case where the first digit is odd (5, 7 or 9), correct count for first digit = 6, correct count for first digit = 8, the correct total number of favourable codes, and the correct final probability.",
    steps: [
      { marks: 1, description: "How many favourable codes have first digit 5, 7 or 9?", options: ["3 × 5 × 1 × 3 = 45", "3 × 6 × 1 × 4 = 72", "3 × 5 × 1 × 4 = 60", "3 × 5 × 1 × 2 = 30"], correctIndex: 0 },
      { marks: 1, description: "How many favourable codes have first digit 6?", options: ["1 × 5 × 1 × 2 = 10", "1 × 6 × 1 × 3 = 18", "1 × 5 × 1 × 3 = 15", "1 × 5 × 1 × 1 = 5"], correctIndex: 0 },
      { marks: 1, description: "How many favourable codes have first digit 8?", options: ["1 × 5 × 1 × 2 = 10", "1 × 5 × 1 × 3 = 15", "1 × 6 × 1 × 2 = 12", "1 × 4 × 1 × 2 = 8"], correctIndex: 0 },
      { marks: 1, description: "What is the total number of favourable codes?", options: ["65", "70", "60", "75"], correctIndex: 0 },
      { marks: 1, description: "What is the final probability, using n(S) = 840 from 10.2.1?", options: ["65/840 = 13/168 ≈ 0,08", "65/840 = 0,77", "840/65 ≈ 12,92", "13/840 ≈ 0,015"], correctIndex: 0 },
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
