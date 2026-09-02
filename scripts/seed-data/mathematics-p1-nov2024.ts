// Real DBE past paper: Mathematics P1, November 2024, National (English).
// Source: official DBE question paper (11 pages: 9 question pages + 1
// information/formula sheet + 1 memo cover page bundled into the same
// download, no answer book included) + the genuine official DBE marking
// guidelines (confirmed by their own cover page: "MARKING
// GUIDELINES/NASIENRIGLYNE", official crest, "Copyright reserved/Kopiereg
// voorbehou", "These marking guidelines consist of 17 pages" — 1 cover +
// 16 content pages, all read directly). Both downloaded from
// stanmorephysics.com (visible watermark on every page). No third-party
// commercial-publisher memo was used as a source for any content here.
//
// Paper structure: TWELVE compulsory questions (no choice), 150 marks, 3
// hours (confirmed by the question paper's own cover page: "MARKS: 150",
// "TIME: 3 hours"). All 150 marks are included here. Confirmed by reading
// every rendered page directly, not guessed. No stray/mismatched pages
// were found between the QP and memo for this paper, and no internally
// inconsistent memo answers were found.
//
// This paper reuses the Mathematics subject, its four CAPS cognitive
// levels (Knowledge / Routine Procedures / Complex Procedures / Problem
// Solving), and every existing P1 topic key from mathematics-p1-nov2023.ts
// (algebra, sequences, finance, functions, calculus, probability) — no new
// topics were needed. This paper's twelve questions map onto those six
// topics as: Q1 algebra; Q2 & Q3 sequences and series (arithmetic/
// quadratic patterns, then a geometric-series circles context); Q4 & Q5
// functions (exponential, then a hyperbola with a line of symmetry); Q6
// functions (parabola/straight line, including a tangency condition found
// via calculus); Q7 finance, growth and decay; Q8, Q9 & Q10 differential
// calculus (rules of differentiation & first principles, then a cubic
// graph analysis, then a kinematics/rate-of-change problem); Q11 & Q12
// probability (a Venn diagram/independence question, then a fundamental
// counting principle question).
//
// This paper is almost entirely calculation/algebra-based, so nearly every
// sub-question uses the stepped-MCQ pattern (`steps: MarkingPointStep[]`):
// the student works the problem out on paper as normal, then picks the
// option they got for each mark-earning step from a few choices, rather
// than typing anything. Distractors trap real Grade 12 Mathematics errors
// — sign slips, wrong root selected, arithmetic slips, forgetting a domain
// restriction, off-by-one errors in counting problems, etc.
// `marking_points` (free-text) is used only for the three genuinely
// non-computational parts: 4.3 (sketch an exponential graph), 5.5
// (describe a possible transformation — several different OR answers are
// equally valid in the memo, so there is no single "correct MCQ option"),
// and 11.1 (represent given set information on a Venn diagram).
//
// Where the memo shows an OR/alternative method, the steps below are based
// on the FIRST/primary method shown in the memo, per this app's ingestion
// convention, not an amalgam of methods.
//
// Diagrams: the hyperbola-and-line graph (Question 5), the parabola-and-
// line graph (Question 6) and the cubic graph with labelled turning points
// (Question 9) are essential to answering their questions and are cropped
// directly from the official question paper's page renders (they are
// hand-drawn line diagrams embedded in the page image, not separate clean
// vector assets). The Question 3 circles diagram is also included: the
// text describes the internally-tangent-through-the-centre construction,
// but the diagram is the clearest way to see that each new circle's
// radius is half of the previous one, which underlies every sub-part of
// that question.
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
  year: 2024,
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

const IMG = "/question-images/maths-2024-p1";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ALGEBRA (27 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "Solve for x: x(x − 3) = 0",
    marks: 2, topicKey: "algebra", cognitiveLevelName: "Knowledge",
    model_answer: "x(x − 3) = 0, so x = 0 or x = 3.",
    marking_notes: "One mark for each correct value of x.",
    steps: [
      { marks: 1, description: "Since x(x − 3) = 0, what is one value of x?", options: ["x = 0", "x = 3", "x = −3", "x = 1"], correctIndex: 0 },
      { marks: 1, description: "What is the other value of x?", options: ["x = 3", "x = 0", "x = −3", "x = −1"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Solve for x (correct to TWO decimal places): 2x² + 1 = 4x",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Routine Procedures",
    model_answer: "2x² − 4x + 1 = 0. Using the quadratic formula: x = [4 ± √((−4)² − 4(2)(1))]/(2(2)) = [4 ± √8]/4, giving x = 1,71 or x = 0,29.",
    marking_notes: "Correct standard form, correct substitution into the quadratic formula, and both final answers rounded to 2 decimal places.",
    steps: [
      { marks: 1, description: "What is the standard form (ax² + bx + c = 0)?", options: ["2x² − 4x + 1 = 0", "2x² + 4x + 1 = 0", "2x² − 4x − 1 = 0", "2x² − 1 = 4x"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the quadratic formula?", options: ["x = [4 ± √((−4)² − 4(2)(1))]/(2(2))", "x = [−4 ± √((4)² − 4(2)(1))]/(2(2))", "x = [4 ± √((−4)² + 4(2)(1))]/(2(2))", "x = [4 ± √((−4)² − 4(2)(1))]/(2)"], correctIndex: 0 },
      { marks: 1, description: "What is the first answer (2 d.p.)?", options: ["x = 1,71", "x = 1,79", "x = 2,00", "x = 1,21"], correctIndex: 0 },
      { marks: 1, description: "What is the second answer (2 d.p.)?", options: ["x = 0,29", "x = −0,29", "x = 0,21", "x = 0,79"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Solve for x: x² − 2x − 3 > 0",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "(x − 3)(x + 1) > 0, so the critical values are x = 3 and x = −1. Using a sign diagram (parabola opening upward): x < −1 or x > 3.",
    marking_notes: "Correct factors, correct critical values, and the final answer (two marks — must reflect the parabola opening upward, so outside the roots).",
    steps: [
      { marks: 1, description: "How does x² − 2x − 3 factorise?", options: ["(x − 3)(x + 1)", "(x + 3)(x − 1)", "(x − 3)(x − 1)", "(x + 3)(x + 1)"], correctIndex: 0 },
      { marks: 1, description: "What are the critical values?", options: ["x = 3 and x = −1", "x = −3 and x = 1", "x = 3 and x = 1", "x = −3 and x = −1"], correctIndex: 0 },
      { marks: 2, description: "What is the final solution?", options: ["x < −1 or x > 3", "−1 < x < 3", "x < 3 or x > −1", "x > −1 and x > 3"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Solve for x: 2^(2x) − 2^(x+2) − 32 = 0",
    marks: 5, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since 2^(x+2) = 4·2^x: 2^(2x) − 4·2^x − 32 = 0, so (2^x − 8)(2^x + 4) = 0, giving 2^x = 8 or 2^x = −4 (rejected, since 2^x can never be negative). Since 2^x = 8 = 2³, x = 3.",
    marking_notes: "Correct use of the exponential law to rewrite 2^(x+2), correct factors, correctly identifying 2^x = 8, correctly rejecting 2^x = −4, and the final answer.",
    steps: [
      { marks: 1, description: "Using the exponential law 2^(x+2) = 4·2^x, what does the equation become?", options: ["2^(2x) − 4·2^x − 32 = 0", "2^(2x) − 2·2^x − 32 = 0", "2^(2x) + 4·2^x − 32 = 0", "2^(2x) − 4·2^(2x) − 32 = 0"], correctIndex: 0 },
      { marks: 1, description: "How does this factorise (letting y = 2^x)?", options: ["(2^x − 8)(2^x + 4) = 0", "(2^x − 4)(2^x + 8) = 0", "(2^x − 8)(2^x − 4) = 0", "(2^x + 8)(2^x − 4) = 0"], correctIndex: 0 },
      { marks: 1, description: "What is 2^x, from the first factor?", options: ["2^x = 8", "2^x = −8", "2^x = 4", "2^x = 32"], correctIndex: 0 },
      { marks: 1, description: "What must happen to the solution 2^x = −4?", options: ["It must be rejected, since 2^x > 0 for all real x", "It must be accepted, giving a negative x", "It should be squared to make it positive", "It gives x = −4"], correctIndex: 0 },
      { marks: 1, description: "What is x?", options: ["3", "8", "4", "2"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Solve for x: √(−2x + 4) − x = 2",
    marks: 4, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "√(−2x+4) = 2 + x. Squaring both sides: −2x + 4 = (2+x)² = 4 + 4x + x², so x² + 6x = 0, giving x(x + 6) = 0, so x = 0 or x = −6. Since √(−2x+4) ≥ 0 must equal 2 + x, and at x = −6 the right side is −4 (negative), x = −6 is rejected: x = 0.",
    marking_notes: "Correctly isolating the root, correctly squaring both sides, correct standard form, and the final answer with the invalid root correctly rejected.",
    steps: [
      { marks: 1, description: "What do you get after isolating the root?", options: ["√(−2x + 4) = 2 + x", "√(−2x + 4) = x − 2", "−2x + 4 = 2 + x", "√(−2x + 4) = −2 − x"], correctIndex: 0 },
      { marks: 1, description: "What do you get after squaring both sides?", options: ["−2x + 4 = (2 + x)²", "−2x + 4 = 4 + x²", "(−2x + 4)² = 2 + x", "−2x + 4 = (x − 2)²"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after expanding and simplifying?", options: ["x² + 6x = 0", "x² − 6x = 0", "x² + 6x + 8 = 0", "x² + 2x = 0"], correctIndex: 0 },
      { marks: 1, description: "Which is the valid final answer, after checking against the original equation?", options: ["x = 0 (x = −6 is rejected)", "x = −6 (x = 0 is rejected)", "x = 0 or x = −6 (both valid)", "x = 6"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Solve for x and y simultaneously: 2x + y = 3 and y² + xy = 2",
    marks: 5, topicKey: "algebra", cognitiveLevelName: "Complex Procedures",
    model_answer: "y = 3 − 2x. Substituting into y² + xy = 2: (3−2x)² + (3−2x)x = 2, giving 4x² − 12x + 9 − 2x² + 3x − 2 = 0, so 2x² − 9x + 7 = 0, i.e. (2x − 7)(x − 1) = 0, giving x = 7/2 or x = 1, and correspondingly y = −4 or y = 1.",
    marking_notes: "Correct expression for y in terms of x, correct substitution, correct standard form, and both x-values and y-values.",
    steps: [
      { marks: 1, description: "What is y in terms of x, from 2x + y = 3?", options: ["y = 3 − 2x", "y = 2x − 3", "y = 3 + 2x", "y = (3 − x)/2"], correctIndex: 0 },
      { marks: 1, description: "What do you get after substituting y = 3 − 2x into y² + xy = 2?", options: ["(3−2x)² + (3−2x)x = 2", "(3−2x)² − (3−2x)x = 2", "(3−2x) + (3−2x)x = 2", "(3−2x)² + x = 2"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after expanding and simplifying?", options: ["2x² − 9x + 7 = 0", "2x² + 9x + 7 = 0", "2x² − 9x − 7 = 0", "4x² − 9x + 7 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two x-values, from (2x − 7)(x − 1) = 0?", options: ["x = 7/2 or x = 1", "x = −7/2 or x = 1", "x = 7/2 or x = −1", "x = 2 or x = 1"], correctIndex: 0 },
      { marks: 1, description: "What are the two corresponding y-values?", options: ["y = −4 or y = 1", "y = 4 or y = −1", "y = −4 or y = −1", "y = 4 or y = 1"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Consider the product (1 + 1/2)(1 + 1/3)(1 + 1/4) ... Each factor in the product is of the form (1 + 1/n) for n ≥ 2. Determine ALL the values of n for which the product will be an integer value.",
    marks: 3, topicKey: "algebra", cognitiveLevelName: "Problem Solving",
    model_answer: "The product telescopes: (3/2)(4/3)(5/4)...((n+1)/n) = (n+1)/2. This is an integer value whenever n+1 is divisible by 2, i.e. whenever n is odd. Therefore n must be an odd number greater than 2 (n ∈ {3;5;7;...}).",
    marking_notes: "Correctly writing out the telescoping product, the correct simplified statement (n+1)/2, and the correct conclusion that n must be odd for n > 2.",
    steps: [
      { marks: 1, description: "How does the product (3/2)(4/3)(5/4)...((n+1)/n) simplify after cancelling?", options: ["(n+1)/2", "(n+1)/n", "n/2", "(n+1)/(n−1)"], correctIndex: 0 },
      { marks: 1, description: "What condition on (n+1)/2 makes the product an integer?", options: ["n + 1 must be divisible by 2", "n + 1 must be divisible by n", "n must be divisible by 2", "n + 1 must be a prime number"], correctIndex: 0 },
      { marks: 1, description: "What is the correct conclusion?", options: ["n must be an odd number greater than 2 (n ∈ {3;5;7;...})", "n must be an even number greater than 2", "n can be any integer greater than 2", "n must equal 3 only"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 2: NUMBER PATTERNS, SEQUENCES AND SERIES (14 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The first term of an arithmetic series is 7. The common difference of this series is 5 and the series contains 20 terms. Calculate the sum of this series.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "S20 = (20/2)[2(7) + (20−1)(5)] = 1 090.",
    marking_notes: "Correct substitution into the sum formula and the final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into Sn = (n/2)[2a + (n−1)d]?", options: ["S20 = (20/2)[2(7) + (19)(5)]", "S20 = (20/2)[7 + (19)(5)]", "S20 = (20/2)[2(7) + (20)(5)]", "S20 = 20[2(7) + (19)(5)]"], correctIndex: 0 },
      { marks: 1, description: "What is S20?", options: ["1 090", "1 095", "1 050", "1 190"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "The original arithmetic series is extended to 75 terms. The sum of these 75 terms is 14 400. Using sigma notation, write down an equation for the sum of the terms added to the original series.",
    marks: 4, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "Tn = 5n + 2. The sum of the added terms is S75 − S20 = 14 400 − 1 090 = 13 310. So Σ (n = 21 to 75) (5n + 2) = 13 310.",
    marking_notes: "Correct general term, correctly calculating S75 − S20, correct sigma notation using the range n = 21 to 75, and the correct value on the right-hand side.",
    steps: [
      { marks: 1, description: "What is the general term, Tn, of the original series?", options: ["Tn = 5n + 2", "Tn = 5n − 2", "Tn = 7n + 5", "Tn = 5n + 7"], correctIndex: 0 },
      { marks: 1, description: "What is S75 − S20, the sum of the added terms?", options: ["14 400 − 1 090 = 13 310", "14 400 + 1 090 = 15 490", "14 400 − 1 090 = 13 400", "1 090 − 14 400 = −13 310"], correctIndex: 0 },
      { marks: 1, description: "What is the correct sigma notation for the terms added (terms 21 to 75)?", options: ["Σ (n = 21 to 75) (5n + 2)", "Σ (n = 1 to 75) (5n + 2)", "Σ (n = 20 to 75) (5n + 2)", "Σ (n = 21 to 74) (5n + 2)"], correctIndex: 0 },
      { marks: 1, description: "What value should this sigma expression equal?", options: ["13 310", "14 400", "1 090", "12 220"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "The sequence of the first differences of a quadratic pattern is: 1 ; 3 ; 5 ; ... If T99 of this quadratic pattern is 9 632, calculate the value of T98.",
    marks: 3, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "The first differences are given by 2n − 1, so the 98th first difference is 2(98) − 1 = 195. T98 = T99 − 195 = 9 632 − 195 = 9 437.",
    marking_notes: "Correctly calculating the 98th first difference, the correct method relating T98 to T99, and the final answer.",
    steps: [
      { marks: 1, description: "What is the 98th first difference (using first difference = 2n − 1)?", options: ["195", "197", "193", "196"], correctIndex: 0 },
      { marks: 1, description: "How is T98 correctly related to T99?", options: ["T98 = T99 − (98th first difference)", "T98 = T99 + (98th first difference)", "T98 = T99 − (99th first difference)", "T98 = T99 × (98th first difference)"], correctIndex: 0 },
      { marks: 1, description: "What is T98?", options: ["9 437", "9 827", "9 439", "9 435"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "If it is further given that the third term of the quadratic pattern is 32, determine the general term, Tn, of the quadratic pattern.",
    marks: 5, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "For Tn = an² + bn + c: the second difference is 2, so 2a = 2, giving a = 1. Using 3a + b = 1 (the second first difference): 3 + b = 1, so b = −2. Using T3 = 32: 9(1) + 3(−2) + c = 32, so c = 29. Therefore Tn = n² − 2n + 29.",
    marking_notes: "Correct second difference used to find a, correct value of b, correct method to calculate c, and the correct value of c.",
    steps: [
      { marks: 1, description: "What is the constant second difference of this pattern?", options: ["2", "1", "3", "4"], correctIndex: 0 },
      { marks: 1, description: "Using 2a = 2, what is a?", options: ["a = 1", "a = 2", "a = 1/2", "a = 0"], correctIndex: 0 },
      { marks: 1, description: "Using 3a + b = 1 (the second first difference), what is b?", options: ["b = −2", "b = 2", "b = −1", "b = 4"], correctIndex: 0 },
      { marks: 1, description: "Which equation correctly uses T3 = 32 to find c?", options: ["9(1) + 3(−2) + c = 32", "9(1) − 3(−2) + c = 32", "3(1) + (−2) + c = 32", "1 − 2 + c = 32"], correctIndex: 0 },
      { marks: 1, description: "What is c?", options: ["29", "23", "35", "26"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 3: GEOMETRIC SERIES — CIRCLES PATTERN (10 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A circle with radius 6 cm is drawn. A second, smaller circle is drawn through the centre of the first circle and also touches the first circle internally, as shown in the diagram. A third, smaller circle is drawn through the centre of the second circle and touches the second circle internally. The process of drawing circles continues and forms a geometric pattern. Write down the radius of the 3rd circle.",
    marks: 2, topicKey: "sequences", cognitiveLevelName: "Knowledge",
    model_answer: "Each new circle's radius is half of the previous circle's radius: 2nd circle radius = 6/2 = 3 cm, so 3rd circle radius = 3/2 = 1,5 cm.",
    marking_notes: "Accept only 1,5 cm.",
    steps: [{ marks: 2, description: "What is the radius of the 3rd circle?", options: ["1,5 cm", "3 cm", "0,75 cm", "6 cm"], correctIndex: 0 }],
    image_url: `${IMG}/3-circles-diagram.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the sum of the areas of the first 10 circles.",
    marks: 4, topicKey: "sequences", cognitiveLevelName: "Routine Procedures",
    model_answer: "The areas form a geometric series 36π ; 9π ; (9/4)π ; ... with a = 36π and r = 1/4. S10 = 36π[(1/4)^10 − 1]/(1/4 − 1) = 150,80.",
    marking_notes: "Correct first term (area of the first circle), correct common ratio, correct substitution into the geometric sum formula, and the final answer.",
    steps: [
      { marks: 1, description: "What is a, the area of the first circle?", options: ["36π", "6π", "9π", "12π"], correctIndex: 0 },
      { marks: 1, description: "What is r, the common ratio of the areas (radius ratio squared)?", options: ["1/4", "1/2", "1/16", "1/8"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into Sn = a(r^n − 1)/(r − 1)?", options: ["S10 = 36π[(1/4)^10 − 1]/(1/4 − 1)", "S10 = 36π[(1/4)^10 − 1]/(1 − 1/4)", "S10 = 36π[(1/2)^10 − 1]/(1/2 − 1)", "S10 = 9π[(1/4)^10 − 1]/(1/4 − 1)"], correctIndex: 0 },
      { marks: 1, description: "What is S10 (the sum of the areas of the first 10 circles)?", options: ["150,80", "148,00", "36,00", "160,53"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Which circle has a diameter of 3/128 cm?",
    marks: 4, topicKey: "sequences", cognitiveLevelName: "Complex Procedures",
    model_answer: "Radius = (1/2)(3/128) = 3/256. Equating to the general term of the radius sequence (6 ; 3 ; 3/2 ; ... with r = 1/2): 3/256 = 6(1/2)^(n−1), so 1/512 = (1/2)^(n−1), giving (1/2)^9 = (1/2)^(n−1), so n − 1 = 9, i.e. n = 10.",
    marking_notes: "Correctly halving the diameter to get the radius, correctly equating this to the general term of the radius sequence, correct simplification, and the final answer.",
    steps: [
      { marks: 1, description: "What is the radius, given the diameter is 3/128?", options: ["3/256", "3/128", "3/64", "6/128"], correctIndex: 0 },
      { marks: 1, description: "What is the correct equation, equating this radius to the general term of the radius sequence?", options: ["3/256 = 6(1/2)^(n−1)", "3/256 = 6(1/2)^n", "3/128 = 6(1/2)^(n−1)", "3/256 = 3(1/2)^(n−1)"], correctIndex: 0 },
      { marks: 1, description: "What does this simplify to?", options: ["(1/2)^9 = (1/2)^(n−1)", "(1/2)^8 = (1/2)^(n−1)", "(1/2)^10 = (1/2)^(n−1)", "(1/2)^9 = (1/2)^n"], correctIndex: 0 },
      { marks: 1, description: "What is n?", options: ["10", "9", "11", "8"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 4: EXPONENTIAL FUNCTION (9 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Given: f(x) = aˣ − 1 for a > 0. B(2 ; −5/9) is a point on f. Calculate the value of a.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "−5/9 = a² − 1, so a² = 4/9, giving a = 2/3.",
    marking_notes: "Correct substitution of B into f, and the correct final answer (a must be positive).",
    steps: [
      { marks: 1, description: "What is the correct substitution of B(2 ; −5/9) into f(x) = aˣ − 1?", options: ["−5/9 = a² − 1", "−5/9 = a² + 1", "−5/9 = 2a − 1", "5/9 = a² − 1"], correctIndex: 0 },
      { marks: 1, description: "What is a?", options: ["2/3", "−2/3", "4/9", "3/2"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Write down the range of f.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "y > −1, the horizontal asymptote of the exponential function f(x) = aˣ − 1.",
    marking_notes: "Accept only y > −1.",
    steps: [{ marks: 1, description: "What is the range of f?", options: ["y > −1", "y ≥ −1", "y < −1", "y ≠ −1"], correctIndex: 0 }],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Sketch the graph of f. Clearly show the intercepts with the axes and asymptotes, if any.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since 0 < a = 2/3 < 1, f is a decreasing exponential-shaped curve passing through the origin (0 ; 0), with a horizontal asymptote at y = −1.",
    marking_notes: "One mark for the correct intercept at (0 ; 0), one mark for the correct asymptote y = −1, and one mark for the correct overall decreasing shape (matching 0 < a < 1).",
    marking_points: [
      { marks: 1, description: "correct intercept shown at (0 ; 0)", keywords: ["0 0", "origin", "intercept"] },
      { marks: 1, description: "correct horizontal asymptote shown at y = −1", keywords: ["-1", "asymptote"] },
      { marks: 1, description: "correct overall decreasing shape, matching 0 < a < 1", keywords: ["decreasing", "shape"] },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "It is further given that C is a point on f at y = 19/8. Determine the coordinates of C′, the image of C, when C is reflected about the line y = x.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "19/8 = (2/3)^x − 1, so 27/8 = (2/3)^x, giving (3/2)³ = (3/2)^(−x), so x = −3. C(−3 ; 19/8). Reflecting about y = x swaps the coordinates: C′(19/8 ; −3).",
    marking_notes: "Correct substitution to find x, the correct value of x, and the correct final coordinates of C′.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find the x-coordinate of C, using y = 19/8?", options: ["19/8 = (2/3)^x − 1", "19/8 = (2/3)^x + 1", "19/8 = x(2/3) − 1", "8/19 = (2/3)^x − 1"], correctIndex: 0 },
      { marks: 1, description: "What is x?", options: ["−3", "3", "−2", "2"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of C′, the reflection of C(−3 ; 19/8) about y = x?", options: ["C′(19/8 ; −3)", "C′(−3 ; 19/8)", "C′(3 ; −19/8)", "C′(−19/8 ; 3)"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: HYPERBOLA (10 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "Sketched below is the graph of f(x) = a/(x+p) + q having the domain (−∞ ; 1) ∪ (1 ; ∞). The graph of f cuts the y-axis at (0 ; 1). A line of symmetry of f is given by g(x) = x − 3. Write down the value of p.",
    marks: 1, topicKey: "functions", cognitiveLevelName: "Knowledge",
    model_answer: "Since the domain excludes x = 1, the vertical asymptote is x = 1, so x + p = 0 at x = 1, giving p = −1.",
    marking_notes: "Accept only p = −1.",
    steps: [{ marks: 1, description: "What is p?", options: ["p = −1", "p = 1", "p = 3", "p = −3"], correctIndex: 0 }],
    image_url: `${IMG}/5-graphs-f-g.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Determine the equation of the horizontal asymptote of f.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "The point of symmetry of the hyperbola lies on its line of symmetry g at x = −p = 1: g(1) = 1 − 3 = −2. So the horizontal asymptote of f is y = −2.",
    marking_notes: "Correct substitution of x = 1 into g, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find the horizontal asymptote, using g(x) = x − 3 at x = −p = 1?", options: ["g(1) = 1 − 3", "g(−1) = −1 − 3", "g(1) = 1 + 3", "g(3) = 3 − 3"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of the horizontal asymptote of f?", options: ["y = −2", "y = 2", "y = −4", "y = 1"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Calculate the value of a.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "Substituting the y-intercept (0 ; 1), p = −1 and q = −2 into f(x) = a/(x+p) + q: 1 = a/(0−1) − 2, so 3 = a/(−1), giving a = −3.",
    marking_notes: "Correct substitution of (0 ; 1), and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution, using (0 ; 1), p = −1 and q = −2?", options: ["1 = a/(0−1) − 2", "1 = a/(0+1) − 2", "1 = a/(0−1) + 2", "0 = a/(1−1) − 2"], correctIndex: 0 },
      { marks: 1, description: "What is a?", options: ["−3", "3", "−1", "1"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "For which values of x is f(x) ≥ 0?",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "The x-intercept: −3/(x−1) − 2 = 0, so −3 = 2x − 2, giving x = −1/2. Since f(x) ≥ 0 on the branch between the x-intercept and the vertical asymptote: x ∈ [−1/2 ; 1).",
    marking_notes: "Correct x-intercept, and the correct final answer (two marks, both endpoints correct).",
    steps: [
      { marks: 1, description: "What is the x-intercept of f?", options: ["x = −1/2", "x = 1/2", "x = −2", "x = 2"], correctIndex: 0 },
      { marks: 2, description: "For which values of x is f(x) ≥ 0?", options: ["x ∈ [−1/2 ; 1)", "x ∈ (−1/2 ; 1]", "x ∈ (−∞ ; −1/2]", "x ∈ [1 ; ∞)"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Graph f undergoes a transformation to h where: the domain and range of h are the same as that of f; h′(x), the derivative of h, is negative on its domain. Describe a possible transformation that f could have undergone to result in h.",
    marks: 2, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "For example: f is reflected in the line x = 1 (its vertical asymptote), which reverses the sign of the gradient everywhere while keeping the same domain and range. (Other valid descriptions: reflect in the y-axis then translate 2 units to the right; reflect in the x-axis then translate 4 units down; reflect in the line y = −2, its horizontal asymptote.)",
    marking_notes: "One mark for correctly identifying a reflection (about the correct axis/line for the chosen method), and one mark for correctly identifying any accompanying translation needed so the domain and range match f exactly. Any one of the memo's OR methods is accepted in full.",
    marking_points: [
      { marks: 2, description: "correctly describes a transformation of f that reverses the sign of its gradient everywhere while preserving its domain and range — e.g. reflection about the line x = 1, reflection about the line y = −2, reflection in the y-axis followed by a translation 2 units right, or reflection in the x-axis followed by a translation 4 units down", keywords: ["reflect", "x = 1", "y = -2", "translate", "y-axis", "x-axis"] },
    ],
  },

  // ============ QUESTION 6: PARABOLA AND STRAIGHT LINE (15 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "In the diagram below, the graphs of f(x) = −x² + 4x + 5 and g, a straight line, are drawn. C(3 ; 8) is a point of intersection of f and g. EH is drawn parallel to the y-axis, with E a point on f and H a point on g. Calculate the coordinates of B, the turning point of f.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "x = −4/(2(−1)) = 2. y = −(2)² + 4(2) + 5 = 9. B(2 ; 9).",
    marking_notes: "Correct method for the x-value of the turning point, the correct x-value, and the correct y-value.",
    steps: [
      { marks: 1, description: "Which method correctly finds the x-coordinate of the turning point of f(x) = −x² + 4x + 5?", options: ["x = −b/(2a) = −4/(2(−1))", "x = −b/(2a) = −4/(2(1))", "x = b/(2a) = 4/(2(−1))", "x = −c/(2a)"], correctIndex: 0 },
      { marks: 1, description: "What is the x-value of B?", options: ["2", "−2", "4", "1"], correctIndex: 0 },
      { marks: 1, description: "What is the y-value of B?", options: ["9", "8", "5", "13"], correctIndex: 0 },
    ],
    image_url: `${IMG}/6-graphs-f-g.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "Show that the equation of the line through A and C is given by g(x) = 2x + 2.",
    marks: 3, topicKey: "functions", cognitiveLevelName: "Routine Procedures",
    model_answer: "The x-intercepts of f: −x² + 4x + 5 = 0, so x² − 4x − 5 = 0, giving (x−5)(x+1) = 0, so x = 5 or x = −1. Since A is the intercept nearer the y-axis, A(−1 ; 0). Gradient of AC = (8 − 0)/(3 − (−1)) = 2. Using y − 0 = 2(x − (−1)): g(x) = 2x + 2.",
    marking_notes: "Correct coordinates of A, correct method for the gradient of AC, and correctly substituting a point into the equation of a straight line.",
    steps: [
      { marks: 1, description: "What are the coordinates of A, the x-intercept of f to the left of the y-axis?", options: ["A(−1 ; 0)", "A(5 ; 0)", "A(0 ; 5)", "A(1 ; 0)"], correctIndex: 0 },
      { marks: 1, description: "What is the gradient of the line through A(−1 ; 0) and C(3 ; 8)?", options: ["2", "1/2", "8", "−2"], correctIndex: 0 },
      { marks: 1, description: "Substituting A(−1 ; 0) and m = 2 into y − y₁ = m(x − x₁), what equation do you get?", options: ["y − 0 = 2(x − (−1))", "y − 0 = 2(x − 3)", "y − (−1) = 2(x − 0)", "y − 8 = 2(x − 3)"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Calculate the maximum length of EH for f > g.",
    marks: 4, topicKey: "functions", cognitiveLevelName: "Complex Procedures",
    model_answer: "EH = f(x) − g(x) = −x² + 4x + 5 − (2x + 2) = −x² + 2x + 3. This is maximised at x = −2/(2(−1)) = 1. Maximum EH = −(1)² + 2(1) + 3 = 4.",
    marking_notes: "Correctly setting up the difference f(x) − g(x), the correct simplified expression for EH, the correct x-value at the maximum, and the correct maximum length.",
    steps: [
      { marks: 1, description: "What is the correct expression for the length EH, as a difference of functions?", options: ["EH = f(x) − g(x)", "EH = g(x) − f(x)", "EH = f(x) + g(x)", "EH = f(x)/g(x)"], correctIndex: 0 },
      { marks: 1, description: "What does EH simplify to?", options: ["−x² + 2x + 3", "−x² + 6x + 3", "−x² + 2x + 7", "x² + 2x + 3"], correctIndex: 0 },
      { marks: 1, description: "At what x-value is EH a maximum?", options: ["x = 1", "x = 2", "x = −1", "x = 3"], correctIndex: 0 },
      { marks: 1, description: "What is the maximum length of EH?", options: ["4", "3", "9", "5"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Given: k(x) = f(x + m) = −x² − 2mx − m² + 4x + 4m + 5. Determine the value of m such that g is a tangent to k.",
    marks: 5, topicKey: "functions", cognitiveLevelName: "Problem Solving",
    model_answer: "k′(x) = −2x − 2m + 4. For g (with gradient 2) to be tangent to k, k′(x) = 2 at the point of tangency: −2x − 2m + 4 = 2, so x = 1 − m. Since k(1−m) must also equal g(1−m): −(1−m)² − 2m(1−m) − m² + 4(1−m) + 4m + 5 = 2(1−m) + 2, which simplifies to −2m − 4 = 0, giving m = −2.",
    marking_notes: "Correct derivative k′(x), correctly setting k′(x) equal to the gradient of g, the correct x-value in terms of m, correct substitution of this x-value into k(x) = g(x), and the correct final answer.",
    steps: [
      { marks: 1, description: "What is k′(x)?", options: ["−2x − 2m + 4", "−2x + 2m + 4", "−x − 2m + 4", "−2x − 2m"], correctIndex: 0 },
      { marks: 1, description: "For g to be a tangent to k, what must k′(x) equal (the gradient of g)?", options: ["2", "0", "−2", "1"], correctIndex: 0 },
      { marks: 1, description: "Solving −2x − 2m + 4 = 2 for x, what do you get?", options: ["x = 1 − m", "x = 1 + m", "x = m − 1", "x = 2 − m"], correctIndex: 0 },
      { marks: 1, description: "What is the correct equation obtained by substituting x = 1 − m into k(x) = g(x)?", options: ["−(1−m)² − 2m(1−m) − m² + 4(1−m) + 4m + 5 = 2(1−m) + 2", "−(1−m)² − 2m(1−m) − m² + 4(1−m) + 4m + 5 = 2(1−m)", "(1−m)² − 2m(1−m) − m² + 4(1−m) + 4m + 5 = 2(1−m) + 2", "−(1−m)² + 2m(1−m) − m² + 4(1−m) + 4m + 5 = 2(1−m) + 2"], correctIndex: 0 },
      { marks: 1, description: "What is m?", options: ["−2", "2", "−4", "4"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 7: FINANCE, GROWTH AND DECAY (14 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "Mary's grandparents deposited R5 000 into a savings account on the day that she was born. The account pays interest at a rate of 6,8% p.a., compounded quarterly. Calculate the accumulated amount in this account on Mary's 16th birthday.",
    marks: 3, topicKey: "finance", cognitiveLevelName: "Routine Procedures",
    model_answer: "A = 5 000(1 + 6,8/400)^64 = R14 706,56.",
    marking_notes: "Correct quarterly interest rate and number of quarters, correct substitution into the compound growth formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "What are the correct values of i and n to use, for quarterly compounding over 16 years?", options: ["i = 6,8/400, n = 64", "i = 6,8/100, n = 16", "i = 6,8/400, n = 16", "i = 6,8/4, n = 64"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into A = P(1 + i)ⁿ?", options: ["A = 5 000(1 + 6,8/400)^64", "A = 5 000(1 + 6,8/400)^16", "A = 5 000(1 + 6,8/100)^64", "A = 5 000(1 − 6,8/400)^64"], correctIndex: 0 },
      { marks: 1, description: "What is the accumulated amount?", options: ["R14 706,56", "R13 400,00", "R15 706,56", "R14 000,00"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "After 4 years, the value of a printer was half of its original value. Determine the rate at which the value of the printer depreciated over this period, if depreciation was calculated according to a straight-line method.",
    marks: 2, topicKey: "finance", cognitiveLevelName: "Routine Procedures",
    model_answer: "(1/2)P = P(1 − 4i), so 1/2 = 1 − 4i, giving i = 1/8, so r = 12,5%.",
    marking_notes: "Correct substitution into the straight-line depreciation formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into A = P(1 − in)?", options: ["(1/2)P = P(1 − 4i)", "(1/2)P = P(1 − i)⁴", "P = (1/2)P(1 − 4i)", "(1/2)P = P(1 + 4i)"], correctIndex: 0 },
      { marks: 1, description: "What is the depreciation rate, r?", options: ["12,5%", "25%", "8%", "50%"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "Tshepo was granted a loan of R100 000 on 1 March 2022 at an interest rate of 13,5% p.a., compounded monthly. Tshepo agreed to repay the loan over 5 years in monthly instalments of R2 300,98, starting on 1 April 2022. Calculate the total interest that he will pay over the 5 years.",
    marks: 2, topicKey: "finance", cognitiveLevelName: "Knowledge",
    model_answer: "Total repaid over 5 years = 2 300,98 × 60 = R138 058,80. Interest paid = R138 058,80 − R100 000 = R38 058,80.",
    marking_notes: "Correct total amount already paid, and the correct total interest.",
    steps: [
      { marks: 1, description: "What is the total amount Tshepo will pay over the 5 years (60 instalments)?", options: ["R138 058,80", "R100 000,00", "R2 300,98", "R138 000,00"], correctIndex: 0 },
      { marks: 1, description: "What is the total interest paid?", options: ["R38 058,80", "R138 058,80", "R41 941,20", "R38 000,00"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "Tshepo paid R22 300,98 (his monthly instalment and an additional R20 000) on 1 March 2024 into the loan account. He continues to pay the original monthly instalment thereafter. How many months earlier will Tshepo repay the loan?",
    marks: 7, topicKey: "finance", cognitiveLevelName: "Problem Solving",
    model_answer: "By 1 March 2024, 24 monthly instalments have been paid, leaving n = 36 instalments outstanding. Balance owed just before the extra payment: P = 2 300,98[1 − (1 + 13,5/1200)^(−36)]/(13,5/1200) = R67 804,94. After the extra R20 000 payment: R67 804,94 − R20 000 = R47 804,94. Solving 47 804,94 = 2 300,98[1 − (1 + 13,5/1200)^(−n)]/(13,5/1200) for n gives n = 23,83, so the loan is repaid after a further 24 months instead of 36 — that is, 12 months earlier.",
    marking_notes: "Correct number of outstanding instalments (n = 36), correct monthly interest rate, correct substitution into the present-value annuity formula, the correct balance before the extra payment, the correct balance after subtracting the extra payment, correct substitution to solve for the new n, and the correct final answer in months.",
    steps: [
      { marks: 1, description: "How many monthly instalments remain outstanding on 1 March 2024 (after 24 instalments have been paid)?", options: ["36", "24", "35", "37"], correctIndex: 0 },
      { marks: 1, description: "What is the correct monthly interest rate, i, to use?", options: ["13,5/1200", "13,5/100", "13,5/12", "13,5/1200 × 36"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the present-value annuity formula for the outstanding balance?", options: ["P = 2 300,98[1 − (1 + 13,5/1200)^(−36)]/(13,5/1200)", "P = 2 300,98[(1 + 13,5/1200)^36 − 1]/(13,5/1200)", "P = 2 300,98[1 − (1 + 13,5/1200)^(−24)]/(13,5/1200)", "P = 2 300,98 × 36 × (13,5/1200)"], correctIndex: 0 },
      { marks: 1, description: "What is the outstanding balance just before the extra payment?", options: ["R67 804,94", "R82 835,28", "R47 804,94", "R100 000,00"], correctIndex: 0 },
      { marks: 1, description: "What is the outstanding balance after the R20 000 extra payment?", options: ["R47 804,94", "R67 804,94", "R27 804,94", "R87 804,94"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution to solve for the new number of instalments, n?", options: ["47 804,94 = 2 300,98[1 − (1 + 13,5/1200)^(−n)]/(13,5/1200)", "67 804,94 = 2 300,98[1 − (1 + 13,5/1200)^(−n)]/(13,5/1200)", "47 804,94 = 2 300,98(1 + 13,5/1200)^n", "47 804,94 = 2 300,98[(1 + 13,5/1200)^n − 1]/(13,5/1200)"], correctIndex: 0 },
      { marks: 1, description: "How many months earlier will Tshepo repay the loan?", options: ["12 months earlier", "24 months earlier", "36 months earlier", "6 months earlier"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: DIFFERENTIAL CALCULUS — RULES & FIRST PRINCIPLES (18 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "Determine: d/dx[3x − 5x²]",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Knowledge",
    model_answer: "= 3 − 10x.",
    marking_notes: "One mark for each correctly differentiated term.",
    steps: [
      { marks: 1, description: "What is the derivative of 3x?", options: ["3", "3x", "0", "1"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of −5x²?", options: ["−10x", "−5x", "−10x²", "10x"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Determine: g′(x) if g(x) = 2/x² − ∛(x⁷)",
    marks: 4, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "g(x) = 2x⁻² − x^(7/3). So g′(x) = −4x⁻³ − (7/3)x^(4/3).",
    marking_notes: "Correctly rewriting each term with a rational/negative exponent before differentiating, and correctly differentiating each term.",
    steps: [
      { marks: 1, description: "How is 2/x² rewritten before differentiating?", options: ["2x⁻²", "2x²", "−2x⁻²", "x⁻²/2"], correctIndex: 0 },
      { marks: 1, description: "How is ∛(x⁷) rewritten before differentiating?", options: ["x^(7/3)", "x^(3/7)", "x^7", "7x^(1/3)"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of 2x⁻²?", options: ["−4x⁻³", "−4x⁻¹", "4x⁻³", "−2x⁻³"], correctIndex: 0 },
      { marks: 1, description: "What is the derivative of −x^(7/3)?", options: ["−(7/3)x^(4/3)", "(7/3)x^(4/3)", "−(3/7)x^(4/3)", "−(7/3)x^(10/3)"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2",
    text: "Determine the equation of the tangent to f(x) = x³ − 4x² + 2x + 3 at x = 2.",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f′(x) = 3x² − 8x + 2, so m = f′(2) = 3(4) − 16 + 2 = −2. f(2) = 8 − 16 + 4 + 3 = −1. Using y + 1 = −2(x − 2): y = −2x + 3.",
    marking_notes: "Correct gradient m, correct y-value at x = 2, and the correct final tangent equation.",
    steps: [
      { marks: 1, description: "What is m = f′(2)?", options: ["−2", "2", "−6", "6"], correctIndex: 0 },
      { marks: 1, description: "What is f(2)?", options: ["−1", "1", "3", "−3"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of the tangent?", options: ["y = −2x + 3", "y = −2x − 3", "y = 2x + 3", "y = −2x + 1"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.3.1",
    text: "Given: f(x) = −6x². Determine f′(x) from first principles.",
    marks: 5, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "f′(x) = lim(h→0) [f(x+h) − f(x)]/h = lim(h→0) [−6(x+h)² − (−6x²)]/h. f(x+h) = −6x² − 12xh − 6h². The numerator simplifies to −12xh − 6h² = h(−12x − 6h). So f′(x) = lim(h→0)(−12x − 6h) = −12x.",
    marking_notes: "Correct substitution into the first-principles definition, correct expansion of f(x+h), correct simplification of the numerator, correct common factor of h, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into f′(x) = lim(h→0) [f(x+h) − f(x)]/h?", options: [
        "[−6(x+h)² − (−6x²)]/h",
        "[−6(x+h)² + (−6x²)]/h",
        "[−6(x+h) − (−6x²)]/h",
        "[(−6x²) − (−6(x+h)²)]/h",
      ], correctIndex: 0 },
      { marks: 1, description: "What is f(x+h)?", options: ["−6x² − 12xh − 6h²", "−6x² − 12xh", "−6x² + 12xh − 6h²", "−6x² − 6h²"], correctIndex: 0 },
      { marks: 1, description: "What does the numerator simplify to?", options: ["−12xh − 6h²", "12xh − 6h²", "−12xh + 6h²", "−6h²"], correctIndex: 0 },
      { marks: 1, description: "What is the common factor of h taken out?", options: ["h(−12x − 6h)", "h(−12x + 6h)", "h(12x − 6h)", "h(−6x − 12h)"], correctIndex: 0 },
      { marks: 1, description: "What is f′(x)?", options: ["−12x", "12x", "−6x", "−12x − 6h"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.3.2",
    text: "Write down how you will restrict the domain of f such that f⁻¹, the inverse of f, is a function.",
    marks: 1, topicKey: "calculus", cognitiveLevelName: "Knowledge",
    model_answer: "Restrict the domain to x ≥ 0 (or, equally validly, x ≤ 0).",
    marking_notes: "Accept x ≥ 0 or x ≤ 0.",
    steps: [{ marks: 1, description: "How should the domain of f be restricted so that f⁻¹ is a function?", options: ["x ≥ 0", "x > 0", "all real x", "x ≠ 0"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.3.3",
    text: "Determine the equation of f⁻¹ for f⁻¹(x) ≤ 0. Write your answer in the form y = ...",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "y = −6x². Swapping x and y: x = −6y², so y² = −x/6, giving y = ±√(−x/6). Since f⁻¹(x) ≤ 0: y = −√(−x/6), for x ≤ 0.",
    marking_notes: "Correctly swapping x and y, the correct expression for y after making y the subject, and the correct final answer with the correct sign selected.",
    steps: [
      { marks: 1, description: "What do you get after swapping x and y in y = −6x²?", options: ["x = −6y²", "y = −6y²", "x = −6x²", "x = 6y²"], correctIndex: 0 },
      { marks: 1, description: "What is y, after making y the subject of x = −6y²?", options: ["y = ±√(−x/6)", "y = ±√(x/6)", "y = ±√(−6x)", "y = −6√x"], correctIndex: 0 },
      { marks: 1, description: "Which is the correct final answer, for f⁻¹(x) ≤ 0?", options: ["y = −√(−x/6), for x ≤ 0", "y = √(−x/6), for x ≤ 0", "y = −√(−x/6), for x ≥ 0", "y = −√(x/6), for x ≤ 0"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 9: CUBIC GRAPH ANALYSIS (8 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A(1 ; 9) and B(5/2 ; 8) are the turning points of graph f below. C(0 ; 7) is the y-intercept of f. For which values of x is f decreasing?",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Knowledge",
    model_answer: "f is decreasing between its two turning points: 1 < x < 5/2.",
    marking_notes: "Accept only 1 < x < 5/2.",
    steps: [{ marks: 2, description: "For which values of x is f decreasing?", options: ["1 < x < 5/2", "x < 1 or x > 5/2", "x < 1", "x > 5/2"], correctIndex: 0 }],
    image_url: `${IMG}/9-cubic-graph.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "Write down the x-intercepts of f′, the derivative of f.",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Knowledge",
    model_answer: "The x-intercepts of f′ occur at the x-values of the turning points of f: x = 1 and x = 5/2.",
    marking_notes: "One mark for each correct x-intercept.",
    steps: [
      { marks: 1, description: "What is one x-intercept of f′?", options: ["x = 1", "x = 9", "x = 0", "x = 8"], correctIndex: 0 },
      { marks: 1, description: "What is the other x-intercept of f′?", options: ["x = 5/2", "x = 2", "x = 7", "x = −5/2"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "For which values of x will f be concave up?",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "The point of inflection lies midway between the two turning points: x = (1 + 5/2)/2 = 7/4. f is concave up for x > 7/4.",
    marking_notes: "Correct method to find the point of inflection, and the correct final answer.",
    steps: [
      { marks: 1, description: "How is the x-value of the point of inflection found, using the two turning points x = 1 and x = 5/2?", options: ["x = (1 + 5/2)/2", "x = 1 + 5/2", "x = (5/2 − 1)/2", "x = 5/2 − 1"], correctIndex: 0 },
      { marks: 1, description: "For which values of x is f concave up?", options: ["x > 7/4", "x < 7/4", "x > 1", "x < 5/2"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "Determine the value of k for which y = f(x) + k will have THREE positive x-intercepts.",
    marks: 2, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "Shifting f vertically by k, the graph will have three positive x-intercepts when the shifted local minimum is still above the x-axis but the shifted local maximum is below it in a way that keeps all three roots positive: −9 < k < −8.",
    marking_notes: "Accept only −9 < k < −8.",
    steps: [{ marks: 2, description: "For which values of k does y = f(x) + k have THREE positive x-intercepts?", options: ["−9 < k < −8", "8 < k < 9", "−1 < k < 0", "0 < k < 1"], correctIndex: 0 }],
  },

  // ============ QUESTION 10: RATE OF CHANGE (8 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "A cyclist rode from town P and stopped at town T. The speed (in km/h) at which this cyclist rode, is represented by the equation s′(t) = −3t² + 18t. NOTE: Speed is the rate of change in distance with respect to time. Calculate the maximum speed that the cyclist reached on this ride.",
    marks: 3, topicKey: "calculus", cognitiveLevelName: "Routine Procedures",
    model_answer: "Maximum speed occurs where the derivative of speed is zero: −6t + 18 = 0, so t = 3. s′(3) = −3(3)² + 18(3) = 27 km/h.",
    marking_notes: "Correctly setting the derivative of s′(t) equal to zero, the correct value of t, and the correct maximum speed.",
    steps: [
      { marks: 1, description: "Which equation gives the time at which speed is a maximum?", options: ["−6t + 18 = 0", "−3t² + 18t = 0", "−6t − 18 = 0", "−3t + 18 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is t at the maximum speed?", options: ["3", "6", "9", "2"], correctIndex: 0 },
      { marks: 1, description: "What is the maximum speed?", options: ["27 km/h", "18 km/h", "9 km/h", "54 km/h"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.2",
    text: "Calculate the distance between town P and town T.",
    marks: 5, topicKey: "calculus", cognitiveLevelName: "Complex Procedures",
    model_answer: "The cyclist stops when s′(t) = 0: −3t² + 18t = 0, so −3t(t − 6) = 0, giving t = 0 or t = 6. Since s(t) = at³ + bt² (distance starts at 0), s′(t) = 3at² + 2bt, so 3a = −3 and 2b = 18, giving a = −1 and b = 9. So s(t) = −t³ + 9t². The distance is s(6) = −(6)³ + 9(6)² = 108 km.",
    marking_notes: "Correct factors of s′(t) = 0, both correct t-values, correct values of a and b, correct substitution into s(t), and the correct final distance.",
    steps: [
      { marks: 1, description: "How does −3t² + 18t = 0 factorise?", options: ["−3t(t − 6) = 0", "−3t(t + 6) = 0", "3t(t − 6) = 0", "−3(t − 6) = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two t-values when the cyclist is stationary (s′(t) = 0)?", options: ["t = 0 or t = 6", "t = 0 or t = 3", "t = 3 or t = 6", "t = 0 or t = −6"], correctIndex: 0 },
      { marks: 1, description: "Using s(t) = at³ + bt² and s′(t) = −3t² + 18t, what are a and b?", options: ["a = −1, b = 9", "a = −3, b = 18", "a = 1, b = −9", "a = −1, b = 18"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution to find the distance travelled?", options: ["s(6) = −(6)³ + 9(6)²", "s(3) = −(3)³ + 9(3)²", "s(6) = −(6)² + 9(6)³", "s(0) = −(0)³ + 9(0)²"], correctIndex: 0 },
      { marks: 1, description: "What is the distance between town P and town T?", options: ["108 km", "216 km", "54 km", "162 km"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 11: PROBABILITY — VENN DIAGRAM (9 marks) ============

  {
    number: "11", sub_number: "11.1",
    text: "A certain number of learners are sitting for examinations in Mathematics, Tourism and Geography. All these learners sit for at least one of these examinations. The total number of learners who sit for Mathematics (M), is 22. The total number of learners sitting for Tourism (T), is 16. The total number of learners sitting for Geography (G), is 18. 5 learners sit for Mathematics and Tourism, but not Geography. 4 learners sit for Mathematics and Geography, but not Tourism. 3 learners sit for Tourism and Geography, but not Mathematics. 6 learners sit for only Tourism. Draw a Venn diagram to represent ALL the learners sitting for these examinations.",
    marks: 3, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since M = 22 = (M only) + 5 + 4 + (all three), and T = 16 = 6 + 5 + 3 + (all three), the number sitting for all three subjects works out to 2. This gives Mathematics-only = 11 and Geography-only = 9. The Venn diagram shows: M only = 11, T only = 6, G only = 9, M∩T only = 5, M∩G only = 4, T∩G only = 3, and M∩T∩G = 2.",
    marking_notes: "One mark for the correct value of 2 in the centre (all three subjects), one mark for the correct pairwise-only values (3, 4 and 5), and one mark for the correct single-subject-only values (6, 9 and 11).",
    marking_points: [
      { marks: 1, description: "correct value of 2 shown in the centre region (all three subjects)", keywords: ["2"] },
      { marks: 1, description: "correct pairwise-only values of 3, 4 and 5 shown in the correct regions", keywords: ["3", "4", "5"] },
      { marks: 1, description: "correct single-subject-only values of 6, 9 and 11 shown in the correct regions", keywords: ["6", "9", "11"] },
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "Calculate the probability that a learner, chosen at random, will sit for examinations in at least TWO of the subjects.",
    marks: 2, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "P(at least two subjects) = (4 + 2 + 5 + 3)/40 = 14/40 = 7/20 = 0,35.",
    marking_notes: "Correct numerator (the sum of all regions with two or more subjects), and the correct final probability.",
    steps: [
      { marks: 1, description: "What is the correct numerator — the number of learners sitting for at least two subjects?", options: ["4 + 2 + 5 + 3 = 14", "5 + 4 + 3 = 12", "22 + 16 + 18", "2"], correctIndex: 0 },
      { marks: 1, description: "What is the probability that a learner sits for at least two subjects?", options: ["7/20", "14/22", "2/40", "1/2"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Determine if the events: sitting for examinations in Mathematics and sitting for examinations in Tourism are independent. Support your answer with the necessary calculations.",
    marks: 4, topicKey: "probability", cognitiveLevelName: "Complex Procedures",
    model_answer: "P(M) × P(T) = (22/40) × (16/40) = 11/50 = 0,22. P(M and T) = 7/40 = 0,175. Since P(M) × P(T) ≠ P(M and T), the events M and T are NOT independent.",
    marking_notes: "Correct substitution for P(M) × P(T), correct simplified value, correct value of P(M and T), and the correct conclusion.",
    steps: [
      { marks: 1, description: "What is the correct substitution for P(M) × P(T)?", options: ["(22/40) × (16/40)", "(22/40) + (16/40)", "(40/22) × (40/16)", "(22/16) × (16/40)"], correctIndex: 0 },
      { marks: 1, description: "What does P(M) × P(T) simplify to?", options: ["11/50", "7/40", "9/20", "22/40"], correctIndex: 0 },
      { marks: 1, description: "What is P(M and T)?", options: ["7/40", "11/50", "5/40", "9/40"], correctIndex: 0 },
      { marks: 1, description: "What is the correct conclusion?", options: ["P(M) × P(T) ≠ P(M and T), so M and T are NOT independent", "P(M) × P(T) = P(M and T), so M and T are independent", "P(M) × P(T) ≠ P(M and T), so M and T ARE independent", "P(M and T) = 0, so M and T are mutually exclusive"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 12: COUNTING PRINCIPLE (8 marks) ============

  {
    number: "12", sub_number: "12.1",
    text: "A company generates a 4-character code using the 26 letters of the alphabet and the 10 digits, from 0 to 9. The code is in the form: letter digit letter digit. Determine how many different codes can be formed if letters and digits may be repeated.",
    marks: 2, topicKey: "probability", cognitiveLevelName: "Knowledge",
    model_answer: "26 × 10 × 26 × 10 = 67 600.",
    marking_notes: "Correct number of choices for each letter position, and the correct total number of codes.",
    steps: [
      { marks: 1, description: "How many choices are there for each letter position, if repetition is allowed?", options: ["26", "25", "10", "36"], correctIndex: 0 },
      { marks: 1, description: "What is the total number of different codes that can be formed?", options: ["67 600", "6 760", "676 000", "260 000"], correctIndex: 0 },
    ],
  },
  {
    number: "12", sub_number: "12.2",
    text: "Determine how many different codes can be formed if: the letters D, F, I, Q, U and V may NOT be used; the code may NOT start with a W or a Z; letters or digits may NOT be repeated; the code ends with an odd digit.",
    marks: 4, topicKey: "probability", cognitiveLevelName: "Complex Procedures",
    model_answer: "First letter: 26 − 6 (banned letters) − 2 (W or Z) = 18 options. Last digit (must be odd): 5 options. First digit (any digit except the one reserved for the last position, since digits may not repeat): 9 options. Second letter (excluding the 6 banned letters and the letter already used first): 19 options. Total = 18 × 9 × 19 × 5 = 15 390.",
    marking_notes: "One mark for each of the four correct counts: the first letter, the first digit, the second letter, and the last digit.",
    steps: [
      { marks: 1, description: "How many choices are there for the first letter (excluding the 6 banned letters, and excluding W and Z)?", options: ["18", "20", "24", "17"], correctIndex: 0 },
      { marks: 1, description: "How many choices are there for the first digit, given the last digit must be odd and digits cannot repeat?", options: ["9", "10", "5", "8"], correctIndex: 0 },
      { marks: 1, description: "How many choices are there for the second letter (excluding the 6 banned letters and the letter already used)?", options: ["19", "18", "20", "25"], correctIndex: 0 },
      { marks: 1, description: "How many choices are there for the last digit (which must be odd)?", options: ["5", "10", "4", "9"], correctIndex: 0 },
    ],
  },
  {
    number: "12", sub_number: "12.3",
    text: "The company wishes to increase the number of 4-character codes formed in QUESTION 12.2 by allowing the letters D, F, I, Q, U and V to be used. Calculate the percentage increase in the number of different codes that can now be formed.",
    marks: 2, topicKey: "probability", cognitiveLevelName: "Routine Procedures",
    model_answer: "New total = 24 × 9 × 25 × 5 = 27 000. Percentage increase = (27 000 − 15 390)/15 390 × 100 = 75,44%.",
    marking_notes: "Correct new total number of codes, and the correct percentage increase.",
    steps: [
      { marks: 1, description: "What is the new total number of codes, now that all 26 letters (except W and Z at the start) may be used?", options: ["24 × 9 × 25 × 5 = 27 000", "26 × 9 × 25 × 5 = 29 250", "24 × 10 × 25 × 5 = 30 000", "18 × 9 × 19 × 5 = 15 390"], correctIndex: 0 },
      { marks: 1, description: "What is the percentage increase in the number of codes?", options: ["75,44%", "42,98%", "175,44%", "27,00%"], correctIndex: 0 },
    ],
  },
];

// No exam_schedule entries here, matching the mathematics-p1-nov2023.ts
// ingestion convention — Mathematics exam dates aren't modelled in this
// ingestion, and this paper is already in the past.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
