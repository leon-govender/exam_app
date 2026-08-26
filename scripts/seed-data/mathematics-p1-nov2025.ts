// Real DBE past paper: Mathematics P1, November 2025, National (English).
// Source: official DBE question paper + marking guidelines, both fetched
// from stanmorephysics.com (source_url below points at the combined
// QP+memo PDF). QP is pages 1-12 of the combined PDF (11 question pages +
// 1 information/formula sheet); pages 13-36 are a blank answer-book
// template (skipped, not needed); the memo is pages 37-57. Confirmed by
// reading the actual rendered pages, not guessed. No stray/mismatched
// pages were found between the QP and memo for this paper.
//
// Paper structure: ELEVEN compulsory questions (no choice), 150 marks,
// 3 hours. All 150 marks are included here.
//
// This is the first Mathematics paper ingested into this app, so this file
// also defines the Mathematics subject, its four CAPS cognitive levels
// (Knowledge / Routine Procedures / Complex Procedures / Problem Solving —
// this is Mathematics' own well-established CAPS taxonomy, distinct from
// both Geography's Recall/Comprehension/Analysis/Evaluation and Physical
// Sciences' Recall/Comprehension/Application/Evaluation), and its topics.
//
// This paper is almost entirely calculation/algebra-based, so nearly every
// sub-question uses the stepped-MCQ pattern (`steps: MarkingPointStep[]`):
// the student works the problem out on paper as normal, then picks the
// option they got for each mark-earning step (which technique/formula
// applies, what the key intermediate value is, what the final
// answer/root/derivative is) from a few choices, rather than typing
// anything. Distractors are chosen to trap real Grade 12 Mathematics
// errors — sign slips, wrong root selected, quotient-vs-product-rule mix
// ups, arithmetic slips, forgetting a domain restriction, off-by-one
// errors in sequence indices, etc. — not just random wrong numbers.
// `marking_points` (free-text) is used only for the small number of
// genuinely non-computational parts: 4.5 (sketch a graph — graded on the
// features it must show) and 6.3 (describe a transformation in words).
//
// Where the memo shows an OR/alternative method, the steps below are based
// on the FIRST/primary method shown in the memo, per this app's ingestion
// convention, not an amalgam of methods.
//
// Diagrams: the graphs in Questions 4, 5, 6, 9 and the rectangle/cylinder
// diagram in Question 10 are vector line-drawings rendered directly into
// the page content stream (not separate embedded raster images), so they
// were cropped from full-page renders rather than extracted as clean
// standalone images. The Question 3 submarine/torpedo illustration is
// purely decorative (the table above 3.1-3.4 already gives every numeric
// value needed) and was NOT cropped in — it adds nothing gradable.
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
  year: 2025,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/04/NSC-Maths-Grade-12-November-2025-P1-and-Memo-Updated.pdf" as string | null,
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

const IMG = "/question-images/maths-2025-p1";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ALGEBRA (25 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "Solve for x: (x + 5)(x − 2) = 0",
    marks: 2, topicKey: "algebra", cognitiveLevelName: "Routine Procedures",
    model_answer: "x = −5 or x = 2.",
    marking_notes: "One mark per correct root.",
    steps: [
      { marks: 1, description: "What is one value of x?", options: ["x = −5", "x = 5", "x = −2", "x = 2 and x = −5 (both from one factor)"], correctIndex: 0 },
      { marks: 1, description: "What is the other value of x?", options: ["x = 2", "x = −2", "x = 5", "x = 0"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Solve for x (correct to TWO decimal places): 5x² + 2 = −9x",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Routine Procedures",
    model_answer: "5x² + 9x + 2 = 0. Using the quadratic formula: x = (−9 ± √(81 − 40))/10 = (−9 ± √41)/10, giving x = −0,26 or x = −1,54.",
    marking_notes: "Standard form, correct substitution into the quadratic formula, and both final answers rounded to 2 decimal places.",
    steps: [
      { marks: 1, description: "What is the standard form (ax² + bx + c = 0)?", options: ["5x² + 9x + 2 = 0", "5x² − 9x + 2 = 0", "5x² + 9x − 2 = 0", "9x² + 5x + 2 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the discriminant, b² − 4ac?", options: ["41", "121", "121 − 40 = 81", "−41"], correctIndex: 0 },
      { marks: 2, description: "What are the two roots (2 d.p.)?", options: ["x = −0,26 or x = −1,54", "x = 0,26 or x = 1,54", "x = −0,20 or x = −2,00", "x = −0,90 or x = −0,10"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Solve for x: 8x² > 2x",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "8x² − 2x > 0, so 2x(4x − 1) > 0. Critical values are x = 0 and x = 1/4. Using a sign diagram: x < 0 or x > 1/4.",
    marking_notes: "Standard form, critical values/factors, and the final answer (two marks — must reflect the parabola opening upward, so outside the roots).",
    steps: [
      { marks: 1, description: "What is the standard form?", options: ["8x² − 2x > 0", "8x² + 2x > 0", "2x² − 8x > 0", "8x² − 2x < 0"], correctIndex: 0 },
      { marks: 1, description: "What are the critical values, after factorising 2x(4x − 1) > 0?", options: ["x = 0 and x = 1/4", "x = 0 and x = 4", "x = 0 and x = −1/4", "x = 2 and x = 1/4"], correctIndex: 0 },
      { marks: 2, description: "What is the final solution?", options: ["x < 0 or x > 1/4", "0 < x < 1/4", "x > 0 and x > 1/4", "x < 0 or x < 1/4"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Solve for x: 2.2^(2x) − 9.2^x + 4 = 0",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "Factorising: (2.2^x − 1)(2^x − 4) = 0, so 2^x = 1/2 or 2^x = 4, giving x = −1 or x = 2.",
    marking_notes: "Correct factors, both resulting equations, and both final answers.",
    steps: [
      { marks: 1, description: "How does this factorise (letting k = 2^x if helpful)?", options: ["(2.2^x − 1)(2^x − 4) = 0", "(2^x − 1)(2^x − 4) = 0", "(2.2^x − 4)(2^x − 1) = 0", "(2^x − 2)(2^x − 2) = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two resulting equations?", options: ["2^x = 1/2 or 2^x = 4", "2^x = 2 or 2^x = 4", "2^x = 1/2 or 2^x = −4", "2^x = 1 or 2^x = 4"], correctIndex: 0 },
      { marks: 1, description: "What is the first value of x?", options: ["x = −1", "x = 1", "x = −2", "x = 1/2"], correctIndex: 0 },
      { marks: 1, description: "What is the second value of x?", options: ["x = 2", "x = 4", "x = −2", "x = 0"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Solve for x: √(√(1/x) + 2) = 1/√x",
    marks: 5, topicKey: "algebra", cognitiveLevelName: "Problem Solving",
    model_answer: "Squaring both sides: √(1/x) + 2 = 1/x. Isolating the surd: 1/√x = 1/x − 2. Squaring again (only valid once the surd is isolated): 1/x = 1/x² − 4/x + 4, giving the standard form 4x² − 5x + 1 = 0, so (4x − 1)(x − 1) = 0, giving x = 1/4 or x = 1. Checking in the original equation, x = 1 does not satisfy it (1/√x − 2 would need to be non-negative for the second squaring to be valid), so x = 1 is rejected: x = 1/4.",
    marking_notes: "Squaring both sides, isolating the surd, squaring again only after isolating the surd, standard form, and the final answer with the invalid root (x = 1) correctly rejected.",
    steps: [
      { marks: 1, description: "What do you get after squaring both sides the first time?", options: ["√(1/x) + 2 = 1/x", "1/x + 2 = 1/x", "√(1/x) + 4 = 1/x", "1/x + 4 = 1/x²"], correctIndex: 0 },
      { marks: 1, description: "How do you isolate the surd?", options: ["1/√x = 1/x − 2", "√(1/x) = 1/x − 2", "1/√x = 2 − 1/x", "√(1/x) = 2/x"], correctIndex: 0 },
      { marks: 1, description: "Why must you square again only now, not straight after the first squaring?", options: [
        "Squaring must happen only once the surd term is alone on one side, otherwise extra invalid roots are introduced without a clean way to check them",
        "It doesn't matter when you square, the answer is the same either way",
        "Because squaring is only valid for equations with a single x term",
        "Because the right-hand side must always be squared first",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after squaring again and simplifying?", options: ["4x² − 5x + 1 = 0", "4x² + 5x + 1 = 0", "x² − 5x + 4 = 0", "4x² − 5x − 1 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the final answer, after checking which root is valid?", options: ["x = 1/4 (x = 1 is rejected)", "x = 1 (x = 1/4 is rejected)", "x = 1/4 or x = 1 (both valid)", "x = 4"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Calculate the values of x and y if: x is the sum of 2 and y; and five times the product of x and y is 6 more than the square of x.",
    marks: 6, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "x = y + 2 and 5xy = x² + 6. Substituting: 5(y + 2)y = (y + 2)² + 6, giving 5y² + 10y = y² + 4y + 4 + 6, so 4y² + 6y − 10 = 0, i.e. 2y² + 3y − 5 = 0, so (2y + 5)(y − 1) = 0, giving y = −5/2 or y = 1, and correspondingly x = −1/2 or x = 3.",
    marking_notes: "Correct equations from the word problem, correct substitution, correct standard form, and both pairs of y-values and x-values.",
    steps: [
      { marks: 1, description: "Which equation correctly represents 'x is the sum of 2 and y'?", options: ["x = y + 2", "x = 2y", "y = x + 2", "x = y − 2"], correctIndex: 0 },
      { marks: 1, description: "What do you get after substituting x = y + 2 into 5xy = x² + 6?", options: ["5(y + 2)y = (y + 2)² + 6", "5(y + 2)y = y² + 6", "5y(y + 2) = (y + 2)² − 6", "5(y − 2)y = (y + 2)² + 6"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after expanding and simplifying?", options: ["2y² + 3y − 5 = 0", "2y² − 3y − 5 = 0", "4y² + 6y + 10 = 0", "y² + 3y − 5 = 0"], correctIndex: 0 },
      { marks: 1, description: "How does 2y² + 3y − 5 = 0 factorise?", options: ["(2y + 5)(y − 1) = 0", "(2y − 5)(y + 1) = 0", "(2y + 1)(y − 5) = 0", "(y + 5)(2y − 1) = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two y-values?", options: ["y = −5/2 or y = 1", "y = 5/2 or y = −1", "y = −5 or y = 1", "y = −5/2 or y = −1"], correctIndex: 0 },
      { marks: 1, description: "What are the two corresponding x-values?", options: ["x = −1/2 or x = 3", "x = −1/2 or x = −1", "x = 1/2 or x = 3", "x = −9/2 or x = 3"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 2: NUMBER PATTERNS, SEQUENCES AND SERIES (15 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "Given the infinite geometric series: (t + 10) + (t − 2) + (t + 4) + ... Show that t = −2.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "For a geometric series, the ratios of consecutive terms are equal: (t − 2)/(t + 10) = (t + 4)/(t − 2). Cross-multiplying: (t − 2)² = (t + 4)(t + 10), giving t² − 4t + 4 = t² + 14t + 40, so −18t = 36, i.e. t = −2.",
    marking_notes: "Equating the ratios, cross multiplication, and correct expansion leading to t = −2.",
    steps: [
      { marks: 1, description: "What equation do you get by equating the common ratios?", options: ["(t − 2)/(t + 10) = (t + 4)/(t − 2)", "(t + 10)/(t − 2) = (t − 2)/(t + 4)", "(t − 2)/(t + 4) = (t + 10)/(t − 2)", "(t + 10)(t − 2) = (t + 4)(t − 2)"], correctIndex: 0 },
      { marks: 1, description: "What do you get after cross-multiplying?", options: ["(t − 2)² = (t + 4)(t + 10)", "(t − 2)² = (t + 4)(t − 2)", "(t + 10)² = (t + 4)(t − 2)", "t − 2 = (t + 4)(t + 10)"], correctIndex: 0 },
      { marks: 1, description: "What is the result after expanding both sides and simplifying?", options: ["−18t = 36, so t = −2", "18t = 36, so t = 2", "−18t = −36, so t = 2", "−4t = 36, so t = −9"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Calculate the value of T25. Write your answer in the form Tn = b^x.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "With t = −2, the series is 8 ; −4 ; ..., so a = 8 and r = −4/8 = −1/2. T25 = 8(−1/2)^24 = (1/2)^21.",
    marking_notes: "Correct first two terms (8 and −4), correct common ratio, and the final answer written in exponential form (accept equivalent forms such as (2)^(−21), (8)^(−7), (128)^(−3)).",
    steps: [
      { marks: 1, description: "What are the first two terms of the series (using t = −2)?", options: ["8 and −4", "10 and −2", "8 and 4", "−2 and 4"], correctIndex: 0 },
      { marks: 1, description: "What is the common ratio r?", options: ["−1/2", "1/2", "−2", "2"], correctIndex: 0 },
      { marks: 1, description: "What is T25, written in exponential form?", options: ["(1/2)^21", "(1/2)^24", "8(1/2)^25", "(1/2)^25"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Calculate the sum of the infinite series.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "S∞ = a/(1 − r) = 8/(1 − (−1/2)) = 16/3 = 5,33.",
    marking_notes: "Correct substitution into the sum-to-infinity formula and the final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into S∞ = a/(1 − r)?", options: ["8/(1 − (−1/2))", "8/(1 + (−1/2))", "(−1/2)/(1 − 8)", "8/(1 − 1/2)"], correctIndex: 0 },
      { marks: 1, description: "What is S∞?", options: ["16/3 = 5,33", "4 = 4,00", "24 = 24,00", "8/3 = 2,67"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Given Σ (from p=k to 117) of (4p − 1) = 26 675. Write down the difference between T6 and T14.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "The sequence Tp = 4p − 1 is arithmetic with common difference d = 4, so T14 − T6 = 8d = 8(4) = 32.",
    marking_notes: "Recognising the common difference is 4, and the correct final answer 32 (8 terms apart, so 8 × 4).",
    steps: [
      { marks: 1, description: "How many 'steps' of the common difference separate T6 and T14, and what is d for Tp = 4p − 1?", options: ["8 steps, d = 4", "6 steps, d = 4", "8 steps, d = 1", "14 steps, d = 4"], correctIndex: 0 },
      { marks: 1, description: "What is T14 − T6?", options: ["32", "8", "4", "28"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Calculate the value of k.",
    marks: 5, topicKey: "sequences", cognitiveLevelName: "Problem Solving",
    model_answer: "The number of terms from p = k to p = 117 is n = 118 − k. The last term T117 = 4(117) − 1 = 467. Substituting into Sn = (n/2)[2a + (n−1)d] using a = Tk = 4k − 1 and last term 467: 26 675 = ((118−k)/2)[4k − 1 + 467] = (118−k)(2k + 233). Expanding: 26 675 = 236k + 27 494 − 2k² − 233k, giving 2k² − 3k − 819 = 0, so (k − 21)(2k + 39) = 0, giving k = 21 (k = −39/2 is rejected, since k must be a positive integer).",
    marking_notes: "Number of terms (118 − k), last term T117 = 467, correct substitution into the sum formula, correct standard form, and the final answer with the invalid root rejected.",
    steps: [
      { marks: 1, description: "How many terms are being summed, from p = k to p = 117?", options: ["118 − k", "117 − k", "k − 117", "117 + k"], correctIndex: 0 },
      { marks: 1, description: "What is the last term, T117?", options: ["467", "468", "463", "471"], correctIndex: 0 },
      { marks: 1, description: "What do you get after substituting into the sum formula and simplifying?", options: ["26 675 = (118 − k)(2k + 233)", "26 675 = (117 − k)(2k + 233)", "26 675 = (118 − k)(4k + 233)", "13 337,5 = (118 − k)(2k + 233)"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after expanding?", options: ["2k² − 3k − 819 = 0", "2k² + 3k − 819 = 0", "k² − 3k − 819 = 0", "2k² − 3k + 819 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the final answer for k?", options: ["k = 21 (k = −39/2 rejected)", "k = −39/2 (k = 21 rejected)", "k = 21 or k = −39/2 (both valid)", "k = 39/2"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 3: QUADRATIC NUMBER PATTERN (10 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "The depth of a torpedo below sea level forms a quadratic pattern, where 0 metres is at sea level. A submarine tracked a torpedo in one-second intervals. The depth (in metres) at the end of the first, second and third seconds was 36, 71 and 104 respectively. Calculate the depth of the torpedo at the end of the first 5 seconds.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "First differences: 35, 33. Second difference: −2 (constant). Continuing: next first differences are 31 and 29, so T4 = 104 + 31 = 135 and T5 = 135 + 29 = 164.",
    marking_notes: "Correct use of the constant second difference (−2) to extend the pattern, and the final answer 164.",
    steps: [
      { marks: 1, description: "The first differences are 35, 33, ... with a constant second difference of −2. What are the next two first differences?", options: ["31 and 29", "31 and 33", "33 and 31", "29 and 27"], correctIndex: 0 },
      { marks: 1, description: "What is T5, the depth at the end of the first 5 seconds?", options: ["164", "166", "162", "160"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Show that the depth of the torpedo at the end of n seconds was Tn = −n² + 38n − 1",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "For a quadratic sequence Tn = an² + bn + c: 2a = −2, so a = −1. Using T1 = 36: 3(−1) + b = 35 (from the first-difference formula 3a + b = 35), so b = 38. Using a + b + c = 36: −1 + 38 + c = 36, so c = −1. Therefore Tn = −n² + 38n − 1.",
    marking_notes: "Correct value of a (from half the second difference), correct value of b, and correct value of c.",
    steps: [
      { marks: 1, description: "Using 2a = −2 (the constant second difference), what is a?", options: ["a = −1", "a = 1", "a = −2", "a = 2"], correctIndex: 0 },
      { marks: 1, description: "Using 3a + b = 35, what is b?", options: ["b = 38", "b = 32", "b = 35", "b = 36"], correctIndex: 0 },
      { marks: 1, description: "Using a + b + c = 36 (T1 = 36), what is c?", options: ["c = −1", "c = 1", "c = −3", "c = 0"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Calculate the maximum depth that the torpedo reached.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "The turning point of Tn = −n² + 38n − 1 occurs at n = −b/2a = −38/(2(−1)) = 19. T19 = −(19)² + 38(19) − 1 = 360.",
    marking_notes: "Correct method (turning point of the quadratic, n = −b/2a), correct value of n, and the correct maximum depth.",
    steps: [
      { marks: 1, description: "Which method finds the maximum of Tn = −n² + 38n − 1?", options: ["n = −b/2a (turning point of the quadratic)", "n where the first difference is zero, solved directly as n = 38", "n = −c/b", "n = the average of T1 and T3"], correctIndex: 0 },
      { marks: 1, description: "What is n at the maximum?", options: ["n = 19", "n = 38", "n = 18", "n = 19,5"], correctIndex: 0 },
      { marks: 1, description: "What is the maximum depth, T19?", options: ["360", "358", "361", "342"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "After how many seconds was the torpedo at 104 m below sea level for the second time?",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "By the symmetry of the parabola about n = 19, and since 104 m occurs at n = 3, the second occurrence is at n = 19 + (19 − 3) = 35. (Equivalently, solving −n² + 38n − 1 = 104 gives n = 3 or n = 35.)",
    marking_notes: "Correct method (symmetry about the turning point, or solving the quadratic equation directly) and the correct final answer, n = 35.",
    steps: [
      { marks: 1, description: "Which method finds the second time the depth is 104 m?", options: [
        "Use symmetry about n = 19 (the axis of symmetry), or solve −n² + 38n − 1 = 104 directly",
        "Just double the first time (n = 3), giving n = 6",
        "Add 19 to the first time (n = 3), giving n = 22",
        "Subtract the first time (n = 3) from 38, giving n = 35 is a coincidence not a method",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the answer, n?", options: ["n = 35", "n = 38", "n = 32", "n = 22"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 4: LOGARITHMIC FUNCTION AND ITS INVERSE (10 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "The graph of f(x) = log base 1/3 of x is drawn below. Point A is the x-intercept of f and (3 ; t) lies on f. Calculate the value of t.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "t = log base 1/3 of 3 = −1.",
    marking_notes: "Accept only t = −1.",
    steps: [{ marks: 1, description: "What is t?", options: ["t = −1", "t = 1", "t = 3", "t = 1/3"], correctIndex: 0 }],
    image_url: `${IMG}/4-log-graph.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Write down the coordinates of A.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "A(1 ; 0), since the x-intercept of any logarithmic function log_b(x) is where x = 1.",
    marking_notes: "Accept only A(1 ; 0).",
    steps: [{ marks: 1, description: "What are the coordinates of A?", options: ["A(1 ; 0)", "A(0 ; 1)", "A(−1 ; 0)", "A(3 ; 0)"], correctIndex: 0 }],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Determine the equation of f⁻¹, the inverse of f, in the form y = ...",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "y = log base 1/3 of x. Swapping x and y: x = log base 1/3 of y, so y = (1/3)^x = 3^(−x).",
    marking_notes: "Correct swap of x and y, and the correct final exponential form.",
    steps: [
      { marks: 1, description: "What do you get after swapping x and y in y = log base 1/3 of x?", options: ["x = log base 1/3 of y", "y = log base 1/3 of x (unchanged)", "x = 1/3 · log(y)", "y = 3^x"], correctIndex: 0 },
      { marks: 1, description: "What is f⁻¹(x), written with base 3?", options: ["y = 3^(−x)", "y = 3^x", "y = −3^x", "y = (1/3)^(−x)"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Write down the equation of the asymptote of f⁻¹",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "y = 0, since f⁻¹ is an exponential function and the horizontal asymptote of the original logarithmic f (x = 0, the y-axis) becomes the horizontal asymptote y = 0 after reflecting over y = x.",
    marking_notes: "Accept only y = 0.",
    steps: [{ marks: 1, description: "What is the asymptote of f⁻¹?", options: ["y = 0", "x = 0", "y = 1", "y = −1"], correctIndex: 0 }],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Draw the graph of f⁻¹ on the set of axes provided in the ANSWER BOOK. Clearly indicate the intercepts with the axes, the coordinates of ONE other point and the asymptotes.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "A decreasing exponential curve with asymptote y = 0, y-intercept at (0 ; 1), and passing through another point such as (−1 ; 3).",
    marking_notes: "One mark for the correct decreasing exponential shape with the asymptote y = 0 shown, one mark for the y-intercept (0 ; 1), and one mark for a correctly plotted additional point (e.g. (−1 ; 3)).",
    marking_points: [
      { marks: 1, description: "decreasing exponential shape with the asymptote y = 0 shown", keywords: ["decreasing", "asymptote", "y 0"] },
      { marks: 1, description: "y-intercept correctly plotted at (0 ; 1)", keywords: ["0 1", "y intercept"] },
      { marks: 1, description: "one other correctly plotted point, e.g. (−1 ; 3)", keywords: ["1 3", "other point"] },
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "The graph of h is obtained when f⁻¹ is translated 5 units to the right. Determine the y-values of h where x > 4.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "Shifting f⁻¹ 5 units right means x > 4 on h corresponds to x > −1 on f⁻¹. Since (−1 ; 3) is a point on f⁻¹ and f⁻¹ is decreasing towards its asymptote y = 0, the y-values for x > −1 on f⁻¹ (and hence x > 4 on h) satisfy 0 < y < 3.",
    marking_notes: "Correctly relating x > 4 on h to x > −1 on f⁻¹ (using the horizontal shift), and the correct final answer 0 < y < 3.",
    steps: [
      { marks: 1, description: "Since h is f⁻¹ shifted 5 units right, which region of f⁻¹ corresponds to x > 4 on h?", options: ["x > −1 on f⁻¹", "x > 9 on f⁻¹", "x > 4 on f⁻¹ (shift ignored)", "x < −1 on f⁻¹"], correctIndex: 0 },
      { marks: 1, description: "What are the y-values of h for x > 4?", options: ["0 < y < 3", "y > 3", "y < 0", "0 < y < 1"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: PARABOLA AND HYPERBOLA (18 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "The graphs of f(x) = ax² + bx + c and g(x) = −4/(x − 3) + 8 are drawn below. P is the turning point of f and the point of intersection of the asymptotes of g. The graphs intersect at D(5 ; 6). M and T are x-intercepts of f and g respectively. Write down the domain of g.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "x ∈ R, x ≠ 3.",
    marking_notes: "Accept only x ∈ R, x ≠ 3 (or equivalent notation).",
    steps: [{ marks: 1, description: "What is the domain of g?", options: ["x ∈ R, x ≠ 3", "x ∈ R, x ≠ 8", "x ∈ R, x ≠ −3", "x ∈ R"], correctIndex: 0 }],
    image_url: `${IMG}/5-graphs-f-g.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Write down the range of f.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "y ≤ 8, since P (the turning point of the downward-opening parabola f) lies on the horizontal asymptote y = 8 of g.",
    marking_notes: "Accept only y ≤ 8.",
    steps: [{ marks: 1, description: "What is the range of f?", options: ["y ≤ 8", "y ≥ 8", "y ≤ 3", "all real y"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Determine the values of x for which g(x) ≤ f(x)",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "g(x) ≤ f(x) where the graph of g is below or meets the graph of f, i.e. between the vertical asymptote of g (x = 3) and D (5 ; 6): 3 < x ≤ 5.",
    marking_notes: "Correct interval, both endpoints (3 excluded since it's the asymptote, 5 included since D is a point of intersection).",
    steps: [{ marks: 2, description: "For which x is g(x) ≤ f(x)?", options: ["3 < x ≤ 5", "3 ≤ x ≤ 5", "3 < x < 5", "x ≤ 5"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Determine the values of x for which f(x) < 6",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "f(x) = 6 at x = M and at x = D's x-coordinate (5), by symmetry of the parabola. Since f is below y = 6 outside this interval: x < 1 or x > 5.",
    marking_notes: "One mark for each correct branch of the inequality.",
    steps: [
      { marks: 1, description: "What is the first part of the answer?", options: ["x < 1", "x < 5", "x < 3", "x < −1"], correctIndex: 0 },
      { marks: 1, description: "What is the second part of the answer?", options: ["x > 5", "x > 6", "x > 8", "x > 3"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Show that the equation of the parabola is f(x) = −(1/2)x² + 3x + 7/2",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "P is at (3 ; 8) (the intersection of g's asymptotes), so f(x) = a(x − 3)² + 8. Substituting D(5 ; 6): 6 = a(5 − 3)² + 8, so −2 = 4a, giving a = −1/2. So f(x) = −(1/2)(x − 3)² + 8 = −(1/2)(x² − 6x + 9) + 8 = −(1/2)x² + 3x + 7/2.",
    marking_notes: "Correct turning-point form using p = 3, q = 8, correct substitution of D(5 ; 6) to find a, and correct simplification to standard form.",
    steps: [
      { marks: 1, description: "What is the turning-point form of f, using P(3 ; 8)?", options: ["f(x) = a(x − 3)² + 8", "f(x) = a(x + 3)² + 8", "f(x) = a(x − 8)² + 3", "f(x) = a(x − 3)² − 8"], correctIndex: 0 },
      { marks: 1, description: "Substituting D(5 ; 6), what is a?", options: ["a = −1/2", "a = 1/2", "a = −2", "a = −1"], correctIndex: 0 },
      { marks: 1, description: "What is the simplified standard form?", options: ["f(x) = −(1/2)x² + 3x + 7/2", "f(x) = −(1/2)x² − 3x + 7/2", "f(x) = −(1/2)x² + 3x − 7/2", "f(x) = (1/2)x² + 3x + 7/2"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Calculate the length of MT.",
    marks: 6, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "For f: x² − 6x − 7 = 0, so (x − 7)(x + 1) = 0, giving x = 7 or x = −1; M is the negative x-intercept, M(−1 ; 0). For g: 0 = −4/(x − 3) + 8, so −8x + 24 = −4, giving x = 7/2, so T(7/2 ; 0). MT = 7/2 − (−1) = 9/2 = 4,5.",
    marking_notes: "Solving for f's x-intercepts, correctly identifying M's coordinates, solving for g's x-intercept, correctly identifying T's coordinates, and the correct final distance MT.",
    steps: [
      { marks: 1, description: "Solving −(1/2)x² + 3x + 7/2 = 0 (or x² − 6x − 7 = 0), what are f's x-values?", options: ["x = 7 or x = −1", "x = 7 or x = 1", "x = −7 or x = 1", "x = 6 or x = −1"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of M (the negative x-intercept)?", options: ["M(−1 ; 0)", "M(7 ; 0)", "M(1 ; 0)", "M(0 ; −1)"], correctIndex: 0 },
      { marks: 1, description: "Solving 0 = −4/(x − 3) + 8 for x, what is g's x-intercept?", options: ["x = 7/2", "x = 3/2", "x = 5/2", "x = 4"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of T?", options: ["T(7/2 ; 0)", "T(0 ; 7/2)", "T(−7/2 ; 0)", "T(4 ; 0)"], correctIndex: 0 },
      { marks: 2, description: "What is the length of MT?", options: ["4,5", "3,5", "8,5", "2,5"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Determine the equation of the tangent to f at D.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "f'(x) = −x + 3. Gradient at D: m = f'(5) = −5 + 3 = −2. Using D(5 ; 6): 6 = −2(5) + c, so c = 16. The tangent is y = −2x + 16.",
    marking_notes: "Correct derivative, correct gradient at x = 5, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is f'(x)?", options: ["f'(x) = −x + 3", "f'(x) = −x", "f'(x) = x + 3", "f'(x) = −2x + 3"], correctIndex: 0 },
      { marks: 1, description: "What is the gradient of the tangent at D (x = 5)?", options: ["m = −2", "m = −5", "m = 2", "m = 8"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of the tangent?", options: ["y = −2x + 16", "y = −2x + 6", "y = 2x + 16", "y = −2x − 16"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 6: HYPERBOLA AND LINE (8 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "The graphs of g(x) = x + c and f(x) = a/(x + p) + q are drawn below. Graph g and the vertical asymptote of f intersect at the x-axis. Write down the coordinates of the x-intercept of g in terms of p.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "(−p ; 0), since the vertical asymptote of f is x = −p, and g meets this asymptote on the x-axis.",
    marking_notes: "Accept only (−p ; 0).",
    steps: [{ marks: 1, description: "What are the coordinates of the x-intercept of g?", options: ["(−p ; 0)", "(p ; 0)", "(0 ; −p)", "(0 ; p)"], correctIndex: 0 }],
    image_url: `${IMG}/6-graphs-f-g.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "Graph g intersects the horizontal asymptote of graph f at x = 1 and the graph f at x = 3. Graphs f and g also intersect on the y-axis. Determine the equation of f.",
    marks: 5, topicKey: "functions", cognitiveLevelName: "Problem Solving",
    model_answer: "Since g meets f's vertical asymptote at the x-axis, −p = −c (the x-intercept of g), so p = c, and f's horizontal asymptote is q = g(1) = 1 + c. So f(x) = a/(x + c) + 1 + c. Since f and g intersect on the y-axis, at (0 ; c): c = a/(0 + c) + 1 + c, giving −1 = a/c, so a = −c. Using the intersection at x = 3, point (3 ; 3 + c): 3 + c = a/(3 + c) + 1 + c, i.e. 3 + c = −c/(3 + c) + 1 + c. Solving: 9 + 6c + c² = −c + 3 + 4c + c², so 3c = −6, giving c = −2, so a = 2, q = 1 + c = −1. Therefore f(x) = 2/(x − 2) − 1.",
    marking_notes: "Correctly relating q to c (q = 1 + c), setting up f(x) = a/(x+c) + 1 + c, using the y-axis intersection point to relate a and c, using the x = 3 intersection point to solve for c and a, and the final equation.",
    steps: [
      { marks: 1, description: "How does q (f's horizontal asymptote) relate to c, given g meets f's horizontal asymptote at x = 1?", options: ["q = 1 + c", "q = 1 − c", "q = c − 1", "q = c"], correctIndex: 0 },
      { marks: 1, description: "Using the y-axis intersection point (0 ; c), what relationship do you get between a and c?", options: ["a = −c", "a = c", "a = 2c", "a = −2c"], correctIndex: 0 },
      { marks: 1, description: "What equation results from substituting the point (3 ; 3 + c) into f?", options: ["3 + c = −c/(3 + c) + 1 + c", "3 + c = c/(3 + c) + 1 + c", "3 = −c/(3 + c) + 1 + c", "3 + c = −c/(3 − c) + 1 + c"], correctIndex: 0 },
      { marks: 1, description: "Solving that equation, what is c (and hence a)?", options: ["c = −2, a = 2", "c = 2, a = −2", "c = −3, a = 3", "c = −1, a = 1"], correctIndex: 0 },
      { marks: 1, description: "What is the final equation of f?", options: ["f(x) = 2/(x − 2) − 1", "f(x) = 2/(x + 2) − 1", "f(x) = −2/(x − 2) + 1", "f(x) = 2/(x − 2) + 1"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Describe the transformation that g must undergo to become an axis of symmetry of f that cuts f at two points.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "A translation of 1 unit down (equivalently, a translation of 1 unit to the right also works, since both move g through the centre of the hyperbola f).",
    marking_notes: "Accept either valid transformation described in the memo: a translation of 1 unit down, or a translation of 1 unit to the right.",
    marking_points: [{ marks: 2, description: "translation of 1 unit down, or equivalently a translation of 1 unit to the right", keywords: ["1 unit down", "one unit down", "1 unit right", "one unit right"] }],
  },

  // ============ QUESTION 7: FINANCE, GROWTH AND DECAY (15 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "A travel company informs Robert that a holiday to a certain destination costs R40 000 now. The company predicts that the cost of this holiday will increase by 7,8% per annum. What will this holiday cost in 5 years' time?",
    marks: 2, topicKey: "finance", cognitiveLevelName: "Routine Procedures",
    model_answer: "A = P(1 + i)^n = 40 000(1 + 0,078)^5 = R58 230,94.",
    marking_notes: "Correct substitution into the compound growth formula and the correct final answer.",
    steps: [
      { marks: 1, description: "Which formula and substitution apply here?", options: ["A = 40 000(1,078)^5", "A = 40 000(1 − 0,078)^5", "A = 40 000(1,078)(5)", "A = 40 000 + 40 000(0,078)(5)"], correctIndex: 0 },
      { marks: 1, description: "What is the cost in 5 years' time?", options: ["R58 230,94", "R55 600,00", "R43 120,00", "R60 116,72"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Sarah opened a savings account that paid interest at a rate of 5,8% p.a., compounded quarterly. She deposited R2 300 into the account on 1 January 2020 and continued to make deposits of R2 300 at the beginning of each quarter thereafter. She made her last deposit on 1 October 2025. Calculate the accumulated amount in the account on 1 January 2026.",
    marks: 4, topicKey: "finance", cognitiveLevelName: "Complex Procedures",
    model_answer: "There are 24 quarterly deposits (1 Jan 2020 to 1 Oct 2025). Since deposits are at the start of each period, F = {x[(1+i)^n − 1]/i} × (1+i), with x = 2300, i = 0,058/4, n = 24: F = {2300[(1 + 0,058/4)^24 − 1]/(0,058/4)} × (1 + 0,058/4) = R66 411,60.",
    marking_notes: "Correct quarterly interest rate i, correct substitution into the future-value annuity formula, correctly multiplying by (1+i) once to account for deposits at the start of each period, and the final answer.",
    steps: [
      { marks: 1, description: "What is the quarterly interest rate i to use?", options: ["0,058/4", "0,058", "0,058 × 4", "0,058/12"], correctIndex: 0 },
      { marks: 1, description: "Which annuity formula and n (number of deposits) apply?", options: ["Future value annuity formula, n = 24", "Present value annuity formula, n = 24", "Future value annuity formula, n = 23", "Compound interest formula (single deposit), n = 24"], correctIndex: 0 },
      { marks: 1, description: "Why must the future value be multiplied by (1 + i) once more?", options: [
        "Because deposits are made at the START of each quarter (annuity due), shifting every payment's growth forward by one extra period",
        "Because deposits are made at the END of each quarter",
        "To convert the answer to a present value",
        "It doesn't need to be — the plain annuity formula already gives the right answer",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the accumulated amount?", options: ["R66 411,60", "R64 355,68", "R62 792,40", "R68 970,00"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "The bank granted Rajesh a loan of R900 000 on 28 February 2024 at an interest rate of 6,8% p.a., compounded monthly. Rajesh was unable to make the first three payments. He made his first repayment of R10 000 on 30 June 2024. He continued to make monthly repayments of R10 000 at the end of each month thereafter. How long, in completed months, will it take Rajesh to repay the loan from the time the loan was granted?",
    marks: 5, topicKey: "finance", cognitiveLevelName: "Problem Solving",
    model_answer: "The loan grows for 3 unpaid months first: A = 900 000(1 + 0,068/12)^3 = R915 386,86. This becomes the present value for the repayment annuity: 915 386,86 = 10 000[1 − (1+0,068/12)^(−n)]/(0,068/12), giving (1+0,068/12)^(−n) = 0,4812..., so n = 129,42 months (of repayments). Adding the 3 unpaid months, the loan takes 132,42 months since it was granted, so 133 completed months.",
    marking_notes: "Correctly growing the loan balance over the 3 skipped months, correct substitution into the present-value annuity formula, correct use of logs to solve for n, and the correct final answer (rounded up to 133 completed months, including the 3 skipped months).",
    steps: [
      { marks: 1, description: "What is the loan balance on 30 June 2024, after growing for 3 unpaid months?", options: ["R915 386,86", "R900 000,00", "R918 360,00", "R910 200,00"], correctIndex: 0 },
      { marks: 1, description: "Which formula do you substitute the R915 386,86 balance into?", options: ["Present-value annuity formula", "Future-value annuity formula", "Simple compound growth formula", "Simple interest formula"], correctIndex: 0 },
      { marks: 1, description: "How do you solve for n from (1 + 0,068/12)^(−n) = 0,4812...?", options: ["Take logs of both sides", "Take the square root of both sides", "Divide both sides by 0,068/12", "Multiply both sides by 12"], correctIndex: 0 },
      { marks: 1, description: "How many months of repayments (n) does this give?", options: ["129,42 months", "132,42 months", "126,42 months", "133,00 months"], correctIndex: 0 },
      { marks: 1, description: "Including the 3 skipped months, how many completed months does it take, from when the loan was granted?", options: ["133 months", "129 months", "132 months", "136 months"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "Calculate the value of the final payment.",
    marks: 4, topicKey: "finance", cognitiveLevelName: "Complex Procedures",
    model_answer: "The outstanding balance after 129 completed months of repayment (i.e. with 0,419... of a month remaining) is P = 10 000[1 − (1+0,068/12)^(−0,419...)]/(0,068/12) = R4 173,55. The final payment, one month later with interest, is 4 173,55(1 + 0,068/12) = R4 197,21.",
    marking_notes: "Correct substitution to find the outstanding balance, correct use of the fractional remaining period n, correct balance value, and the correct final payment (balance grown by one month's interest).",
    steps: [
      { marks: 1, description: "What do you substitute into the present-value formula to find the balance still owing?", options: ["The fractional remaining n = 0,419... months", "n = 129 months", "n = 133 months", "n = 4 months"], correctIndex: 0 },
      { marks: 1, description: "Roughly what is this outstanding balance?", options: ["R4 173,55", "R10 000,00", "R6 826,45", "R2 086,78"], correctIndex: 0 },
      { marks: 1, description: "How do you convert this balance into the value of the final payment?", options: ["Multiply the balance by (1 + 0,068/12) once, for the last month's interest", "The balance itself is the final payment, no further step needed", "Multiply the balance by (1 + 0,068)", "Divide the balance by (1 + 0,068/12)"], correctIndex: 0 },
      { marks: 1, description: "What is the value of the final payment?", options: ["R4 197,21", "R4 173,55", "R4 220,89", "R10 000,00"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: DIFFERENTIAL CALCULUS — FIRST PRINCIPLES & RULES (10 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Determine f'(x) from first principles if it is given that f(x) = −2x + 3.",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f'(x) = lim(h→0) [f(x+h) − f(x)]/h = lim(h→0) [−2(x+h) + 3 − (−2x + 3)]/h = lim(h→0) (−2h)/h = lim(h→0) (−2) = −2.",
    marking_notes: "Correct f(x+h), correct substitution into the first-principles definition, correct simplification, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is f(x + h)?", options: ["−2(x + h) + 3", "−2x + h + 3", "−2(x + h)", "−2x + 3 + h"], correctIndex: 0 },
      { marks: 1, description: "What do you substitute into the limit definition f'(x) = lim(h→0) [f(x+h) − f(x)]/h?", options: [
        "[−2(x+h) + 3 − (−2x + 3)]/h",
        "[−2(x+h) + 3 + (−2x + 3)]/h",
        "[−2(x+h) − 3 − (−2x + 3)]/h",
        "[−2x + 3 − (−2(x+h) + 3)]/h",
      ], correctIndex: 0 },
      { marks: 1, description: "What does the numerator simplify to?", options: ["−2h", "2h", "−2h + 6", "0"], correctIndex: 0 },
      { marks: 1, description: "What is f'(x)?", options: ["−2", "2", "0", "−2x"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "Determine g'(x) if g(x) = −3x⁴ + 2x",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Knowledge",
    model_answer: "g'(x) = −12x³ + 2.",
    marking_notes: "One mark for each correctly differentiated term.",
    steps: [
      { marks: 1, description: "What is the derivative of −3x⁴?", options: ["−12x³", "−3x³", "−12x⁴", "12x³"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of 2x?", options: ["2", "2x", "0", "x"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Determine dy/dx if y = (2x⁴ + 1)/x²",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "y = 2x⁴/x² + 1/x² = 2x² + x⁻². So dy/dx = 4x − 2x⁻³.",
    marking_notes: "Correctly rewriting each term (2x² and x⁻²) before differentiating, then correctly differentiating each term.",
    steps: [
      { marks: 1, description: "What does 2x⁴/x² simplify to, before differentiating?", options: ["2x²", "2x⁶", "2x", "x²"], correctIndex: 0 },
      { marks: 1, description: "What does 1/x² simplify to, before differentiating?", options: ["x⁻²", "x²", "2x⁻²", "x⁻¹"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of the first term, 2x²?", options: ["4x", "2x", "4x²", "x"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of the second term, x⁻²?", options: ["−2x⁻³", "2x⁻³", "−2x⁻¹", "−x⁻³"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 9: CUBIC FUNCTIONS (17 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "Sketched below is the graph of f(x) = x³ − 8x² + 5x + 14. A, B and C are the x-intercepts of f. D and E are the turning points of f. Calculate the coordinates of E.",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f'(x) = 3x² − 16x + 5 = 0, so (3x − 1)(x − 5) = 0, giving x = 1/3 or x = 5. Since E is the minimum turning point (further right, lower), x = 5: f(5) = 125 − 200 + 25 + 14 = −36, so E(5 ; −36).",
    marking_notes: "Correct derivative, correct factorisation/solving f'(x) = 0, correct x-value chosen for E (the minimum, not D), and correct y-value.",
    steps: [
      { marks: 1, description: "What is f'(x)?", options: ["3x² − 16x + 5", "x² − 16x + 5", "3x² − 8x + 5", "3x² − 16x"], correctIndex: 0 },
      { marks: 1, description: "Solving f'(x) = 0, what are the two x-values?", options: ["x = 1/3 or x = 5", "x = 1/3 or x = −5", "x = 3 or x = 5", "x = 1 or x = 5/3"], correctIndex: 0 },
      { marks: 1, description: "Which x-value corresponds to E (the minimum turning point)?", options: ["x = 5", "x = 1/3", "x = −5", "x = 8"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of E?", options: ["−36", "36", "−14", "14"], correctIndex: 0 },
    ],
    image_url: `${IMG}/9-cubic-graph.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "For which values of x is f concave down?",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f''(x) = 6x − 16 < 0, so x < 8/3.",
    marking_notes: "Correct second derivative, correct inequality set up (f''(x) < 0 for concave down), and correct final answer.",
    steps: [
      { marks: 1, description: "What is f''(x)?", options: ["6x − 16", "3x − 16", "6x − 8", "6x + 16"], correctIndex: 0 },
      { marks: 1, description: "Which inequality gives where f is concave down?", options: ["f''(x) < 0", "f''(x) > 0", "f'(x) < 0", "f''(x) = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the final answer?", options: ["x < 8/3", "x > 8/3", "x < 16/6", "x < −8/3"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "The coordinates of B are (2 ; 0). Use the graph to determine the values of x for which f(x).f''(x) < 0",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "The x-intercepts of f are (−1 ; 0), B(2 ; 0), and (7 ; 0). f(x).f''(x) < 0 where f and f'' have opposite signs: this happens for −1 < x < 2 (f negative... using the graph shape, f is positive then f'' positive/negative combinations) and 8/3 < x < 7. (Reading directly off the sketch, using the sign of f from its intercepts and the sign of f'' from the concavity found in 9.2: the product is negative for −1 < x < 2 or 8/3 < x < 7.)",
    marking_notes: "Correct x-intercepts of f (both needed), and both correct intervals where the product of the two signs is negative.",
    steps: [
      { marks: 2, description: "What are the x-intercepts of f (A and C, since B is given)?", options: ["(−1 ; 0) and (7 ; 0)", "(−1 ; 0) and (8 ; 0)", "(1 ; 0) and (7 ; 0)", "(−2 ; 0) and (7 ; 0)"], correctIndex: 0 },
      { marks: 1, description: "What is the first interval where f(x).f''(x) < 0?", options: ["−1 < x < 2", "x < −1", "2 < x < 7", "x < 2"], correctIndex: 0 },
      { marks: 1, description: "What is the second interval where f(x).f''(x) < 0?", options: ["8/3 < x < 7", "8/3 < x < 8", "2 < x < 8/3", "x > 7"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "For which values of t will y = −11x + t intersect f at 3 distinct points?",
    marks: 6, topicKey: "calculus", cognitiveLevelName: "Problem Solving",
    model_answer: "This line is parallel to a tangent line at both turning points, so equate gradients: f'(x) = −11, i.e. 3x² − 16x + 5 = −11, giving 3x² − 16x + 16 = 0, so (x − 4)(3x − 4) = 0, giving x = 4 or x = 4/3. Substituting x = 4 into x³ − 8x² + 5x + 14 = −11x + t: t = 14. Substituting x = 4/3: t = 634/27 ≈ 23,48. For 3 distinct intersection points, t lies strictly between these two tangency values: 14 < t < 634/27.",
    marking_notes: "Correctly equating f'(x) to −11 (the gradient of the line), correct x-values, correct t-value at each x, and the correct final inequality (both bounds needed).",
    steps: [
      { marks: 1, description: "What equation do you set up, since the line's gradient is −11?", options: ["3x² − 16x + 5 = −11", "3x² − 16x + 5 = 11", "x³ − 8x² + 5x + 14 = −11", "3x² − 16x + 5 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two x-values?", options: ["x = 4 or x = 4/3", "x = 4 or x = −4/3", "x = −4 or x = 4/3", "x = 4 or x = 3"], correctIndex: 0 },
      { marks: 2, description: "What are the two corresponding t-values (at x = 4 and x = 4/3)?", options: ["t = 14 and t = 634/27 (≈23,48)", "t = 14 and t = 23,00", "t = −14 and t = 634/27", "t = 4 and t = 4/3"], correctIndex: 0 },
      { marks: 2, description: "What is the final inequality for 3 distinct intersection points?", options: ["14 < t < 634/27", "t < 14 or t > 634/27", "14 ≤ t ≤ 634/27", "t = 14 or t = 634/27"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 10: OPTIMISATION (6 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "A rectangular metal sheet has dimensions x and h units, with x > h, and a perimeter of 50 units. The metal sheet is rolled into a cylinder with two open ends (top and bottom) and height h units. Show that the volume of the cylinder is given by V = 25x²/(4π) − x³/(4π)",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "From the perimeter: 2x + 2h = 50, so h = 25 − x. Rolling the sheet so that x becomes the circumference: 2πr = x, so r = x/(2π). Substituting into V = πr²h: V = π(x/(2π))²(25 − x) = πx²(25 − x)/(4π²) = 25x²/(4π) − x³/(4π).",
    marking_notes: "Correct expression for h from the perimeter, correct expression for r from the circumference, and correct substitution into V = πr²h leading to the given expression.",
    steps: [
      { marks: 1, description: "Using the perimeter 2x + 2h = 50, what is h?", options: ["h = 25 − x", "h = 50 − x", "h = 25 − 2x", "h = 50 − 2x"], correctIndex: 0 },
      { marks: 1, description: "Since x is rolled into the circumference of the cylinder, what is r?", options: ["r = x/(2π)", "r = x/π", "r = 2πx", "r = x/(4π)"], correctIndex: 0 },
      { marks: 1, description: "Substituting into V = πr²h, what do you get before final simplification?", options: ["π(x/(2π))²(25 − x)", "π(x/π)²(25 − x)", "π(x/(2π))(25 − x)", "π(x/(2π))²(25 − 2x)"], correctIndex: 0 },
    ],
    image_url: `${IMG}/10-cylinder.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "Calculate the value of x that will maximise the volume of the cylinder.",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "V'(x) = 50x/(4π) − 3x²/(4π). Setting V'(x) = 0: 50x − 3x² = 0, so x(50 − 3x) = 0, giving x ≠ 0 or x = 50/3 = 16,67.",
    marking_notes: "Correct derivative, correct equation V'(x) = 0, and the correct final answer (rejecting x = 0).",
    steps: [
      { marks: 1, description: "What is V'(x)?", options: ["50x/(4π) − 3x²/(4π)", "25x/(4π) − x²/(4π)", "50x/(4π) − x²/(4π)", "50x/(4π) − 3x/(4π)"], correctIndex: 0 },
      { marks: 1, description: "Setting V'(x) = 0 and factorising, what do you get?", options: ["x(50 − 3x) = 0", "x(25 − 3x) = 0", "3x(50 − x) = 0", "x(50 − x) = 0"], correctIndex: 0 },
      { marks: 1, description: "What is x (rejecting the invalid root)?", options: ["x = 50/3 = 16,67", "x = 0", "x = 3/50", "x = 25"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 11: PROBABILITY (16 marks) ============

  {
    number: "11", sub_number: "11.1.1",
    text: "A survey was conducted among female and male learners at a school about which type of cold drink they preferred. Of the males surveyed, 36 preferred juice and 54 preferred energy drinks. The total surveyed was 210. The events male and preferring juice are independent. Show that e (the total number of learners preferring juice) = 84.",
    marks: 3, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since male and preferring juice are independent: P(Male and Juice) = P(Male) × P(Juice). So 36/210 = (90/210) × (e/210), giving e = 84.",
    marking_notes: "Correct independence formula, correct substitution of the known probabilities, and correctly solving for e = 84.",
    steps: [
      { marks: 1, description: "Which formula applies, since the events are independent?", options: ["P(Male and Juice) = P(Male) × P(Juice)", "P(Male and Juice) = P(Male) + P(Juice)", "P(Male or Juice) = P(Male) × P(Juice)", "P(Male and Juice) = P(Juice)/P(Male)"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["36/210 = (90/210) × (e/210)", "36/210 = (90/210) + (e/210)", "36/210 = (e/210) × (90/210) × 210", "90/210 = (36/210) × (e/210)"], correctIndex: 0 },
      { marks: 1, description: "What is e?", options: ["84", "90", "126", "36"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "Calculate the probability that a female learner, chosen at random from the group, will like energy drinks.",
    marks: 3, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "Total preferring energy drinks, d = 210 − 84 = 126. Females preferring energy drinks, b = 126 − 54 = 72. P(Female and energy drink) = 72/210 = 12/35 = 0,34.",
    marking_notes: "Correct value of d (total energy drinks), correct value of b (females who prefer energy drinks), and the correct final probability.",
    steps: [
      { marks: 1, description: "What is d, the total number preferring energy drinks?", options: ["126", "84", "210", "72"], correctIndex: 0 },
      { marks: 1, description: "What is b, the number of females preferring energy drinks?", options: ["72", "54", "36", "90"], correctIndex: 0 },
      { marks: 1, description: "What is the probability?", options: ["0,34", "0,60", "0,26", "0,43"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "At a kiosk, 120 people buy either a cup of coffee or a bottle of water. The chance of rain on any given day is 75%. The chance of a person buying a cup of coffee on a rainy day is three times the chance of the person buying coffee on a non-rainy day. The probability of a person buying coffee on any given day is 7/12. Calculate the number of cups of coffee that will be sold on a non-rainy day.",
    marks: 4, topicKey: "probability", cognitiveLevelName: "Problem Solving",
    model_answer: "Let x be the probability of buying coffee on a non-rainy day (so 3x is the probability on a rainy day). By the law of total probability: (3/4)(3x) + (1/4)(x) = 7/12, giving 27x/12 + x/12 = 7/12... simplified: 9x/4 + x/4 = 7/12, i.e. 10x/4 = 7/12, so 30x = 7, giving x = 7/30. Converting to a number of cups on a non-rainy day: (7/30) × 120 = 28 cups.",
    marking_notes: "Correct total-probability equation (using P(rain) = 3/4 and P(no rain) = 1/4), correct simplification to a linear equation in x, correctly solving for x, and correctly converting the probability into a number of cups.",
    steps: [
      { marks: 1, description: "What is the correct total-probability equation, letting x = P(coffee | non-rainy)?", options: ["(3/4)(3x) + (1/4)(x) = 7/12", "(3/4)(x) + (1/4)(3x) = 7/12", "(3/4)(3x) + (1/4)(x) = 7", "(1/4)(3x) + (3/4)(x) = 7/12"], correctIndex: 0 },
      { marks: 1, description: "What does this simplify to?", options: ["30x = 7", "10x = 7", "30x = 84", "3x = 7"], correctIndex: 0 },
      { marks: 1, description: "What is x, the probability of buying coffee on a non-rainy day?", options: ["7/30", "7/12", "7/10", "3/7"], correctIndex: 0 },
      { marks: 1, description: "How many cups of coffee are sold on a non-rainy day?", options: ["28 cups", "70 cups", "84 cups", "36 cups"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.3.1",
    text: "Eight runners compete in a race where there are no tied finishes. Bongi and Andrew are two of the competitors. Calculate the total number of possible ways in which the 8 runners can finish the race if Bongi finishes in a position immediately after Andrew.",
    marks: 2, topicKey: "probability", cognitiveLevelName: "Knowledge",
    model_answer: "Treat Andrew-then-Bongi as one block: this leaves 7 'units' to arrange (the block plus the other 6 runners), giving 7! = 5 040 ways.",
    marking_notes: "Accept only the correct count, 5 040 (whether obtained as 7 × 6! or 7!).",
    steps: [{ marks: 2, description: "How many ways can the 8 runners finish, with Bongi immediately after Andrew?", options: ["5 040", "40 320", "720", "2 520"], correctIndex: 0 }],
  },
  {
    number: "11", sub_number: "11.3.2",
    text: "Calculate the probability that TWO OR MORE runners finish the race after Andrew and before Bongi.",
    marks: 4, topicKey: "probability", cognitiveLevelName: "Problem Solving",
    model_answer: "Counting the arrangements with exactly 1, 2, 3, 4 or 5 runners between Andrew and Bongi (each contributing a multiple of 6! for arranging the rest): total = 6!(5 + 4 + 3 + 2 + 1) = 6!(15). Total possible arrangements of 8 runners = 8!. So P(two or more runners finish between Andrew and Bongi) = 6!(15)/8! = 15/56 ≈ 0,27.",
    marking_notes: "Correct count of favourable arrangements (6! multiplied by the sum 5+4+3+2+1 = 15), correctly dividing by 8! (the total arrangements), and the correct final probability.",
    steps: [
      { marks: 2, description: "How many favourable arrangements are there (with 2, 3, 4, 5, or 6 runners' worth of gap options between Andrew and Bongi)?", options: ["6!(15)", "6!(10)", "7!(15)", "6!(5)"], correctIndex: 0 },
      { marks: 2, description: "What is the final probability?", options: ["15/56 (≈0,27)", "15/40 (≈0,38)", "1/56 (≈0,02)", "6/56 (≈0,11)"], correctIndex: 0 },
    ],
  },
];

// No exam_schedule entries here, matching the Physical Sciences ingestion
// convention — Mathematics exam dates aren't modelled in this ingestion; a
// future pilot dataset can carry them the way geography-p1-pilot does for
// Geography.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
