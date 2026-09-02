// Second practice paper (not a real past exam) in the same "IB AA HL"
// format as advanced-mathematics-ib-aa-hl.ts — same scope (induction,
// factor theorem, conjugate root theorem, surd equations, fundamental
// theorem of algebra, Newton-Raphson), same 2-hour/88-mark structure,
// entirely fresh questions. Content and mark scheme hand-verified in this
// session before transcription. Same year as the first paper (2026);
// distinguished as "Practice B" vs "Practice A" via exam_diet, since
// neither is tied to a real exam sitting and a fake future year would be
// misleading.
//
// Same grading convention as the first paper: any part with a single
// concrete answer uses `steps` (stepped-MCQ, exact-match grading),
// including the Newton-Raphson iteration table; `marking_points` (free
// text) is reserved for written justification/explanation.

export const subject = {
  name: "Advanced Mathematics",
  stream: null as string | null,
};

export const cognitiveLevels = [
  { name: "Knowledge & Skills", order_index: 1 },
  { name: "Application", order_index: 2 },
  { name: "Analysis & Reasoning", order_index: 3 },
  { name: "Proof & Synthesis", order_index: 4 },
];

export const topics = [
  {
    key: "induction",
    name: "Mathematical Induction",
    caps_term: "IB Topic 1",
    textbook_ref: "IB Mathematics AA HL — Proof by Mathematical Induction",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=ib+math+aa+hl+proof+by+induction",
  },
  {
    key: "polynomial_roots",
    name: "Polynomial Roots: Factor Theorem, Conjugate Roots & Surds",
    caps_term: "IB Topic 1",
    textbook_ref: "IB Mathematics AA HL — Factor Theorem, Conjugate Root Theorem, Fundamental Theorem of Algebra, Surd Equations",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=ib+math+aa+hl+conjugate+root+theorem+factor+theorem",
  },
  {
    key: "numerical_methods",
    name: "Numerical Methods (Newton-Raphson)",
    caps_term: "IB Topic 5",
    textbook_ref: "IB Mathematics AA HL — Newton-Raphson Method of Approximation",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=newton+raphson+method+ib+math+aa+hl",
  },
];

export const paper = {
  year: 2026,
  exam_diet: "Practice B",
  paper_number: "IB AA HL",
  duration_minutes: 120,
  total_marks: 88,
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

export const questions: QuestionSeed[] = [
  // ============ SECTION A — short response (32 marks) ============

  {
    number: "1", sub_number: null,
    text: "Prove by mathematical induction that, for all positive integers n, 1 + 3 + 5 + ... + (2n − 1) = n².",
    marks: 6, topicKey: "induction", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Base n=1: LHS=1, RHS=1. Assume true for n=k: sum of first k odd numbers = k². Adding the (k+1)th odd number 2k+1 gives k²+2k+1=(k+1)², matching the formula at n=k+1. True for n=1 and the step holds, so true for all positive integers n.",
    marking_notes: "Award marks for: correct base case; correctly stating the inductive hypothesis; correctly adding the (k+1)th odd term; reaching the exact form at n=k+1; valid conclusion.",
    marking_points: [
      { marks: 1, description: "Verifies the base case n = 1", keywords: ["base case", "n 1"] },
      { marks: 1, description: "States the inductive hypothesis for n = k", keywords: ["assume", "hypothesis"] },
      { marks: 2, description: "Correctly adds the (k+1)th odd number 2k+1 and simplifies to (k+1)²", keywords: ["2k 1", "k 1 2", "k2 2k 1"] },
      { marks: 1, description: "Confirms this matches the formula at n = k+1", keywords: ["matches", "n k 1"] },
      { marks: 1, description: "Valid concluding statement (true for all n by induction)", keywords: ["by induction", "true for all"] },
    ],
  },
  {
    number: "2", sub_number: null,
    text: "Consider P(x) = x⁴ − 2x³ + 6x² − 2x + 5. Given that 1 + 2i is a root of P(x) = 0, use the conjugate root theorem to find all four roots of P(x) = 0.",
    marks: 7, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "1 − 2i is also a root (conjugate root theorem). The quadratic factor (x−(1+2i))(x−(1−2i)) = x²−2x+5 divides P(x) exactly, leaving quotient x²+1. All four roots: 1+2i, 1−2i, i, −i.",
    marking_notes: "Two steps: the quadratic factor from the conjugate pair, then the remaining two roots.",
    steps: [
      { marks: 3, description: "Quadratic factor from the conjugate pair 1±2i:", options: ["x² − 2x + 5", "x² + 2x + 5", "x² − 2x + 3", "x² − 4x + 5"], correctIndex: 0 },
      { marks: 4, description: "All four roots of P(x) = 0:", options: ["1+2i, 1−2i, i, −i", "1+2i, 1−2i, 1, −1", "1+2i, 1−2i, 2i, −2i", "1+2i, 1−2i, 1+i, 1−i"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: null,
    text: "Use the factor theorem to fully factorise f(x) = x³ + 2x² − 5x − 6, and hence solve f(x) = 0.",
    marks: 6, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "f(−1) = 0, so (x+1) is a factor. Dividing gives x²+x−6 = (x+3)(x−2). f(x) = (x+1)(x+3)(x−2); roots x = −1, −3, 2.",
    marking_notes: "Two steps: the full factorisation, then the roots.",
    steps: [
      { marks: 3, description: "Full factorisation:", options: ["(x + 1)(x + 3)(x − 2)", "(x − 1)(x + 3)(x − 2)", "(x + 1)(x − 3)(x + 2)", "(x + 1)(x + 2)(x − 3)"], correctIndex: 0 },
      { marks: 3, description: "Roots of f(x) = 0:", options: ["x = −1, −3, 2", "x = 1, 3, −2", "x = −1, 3, −2", "x = −1, −3, −2"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: null,
    text: "Solve the equation √(3x + 4) − √(x + 1) = 2 algebraically, showing full working, and verify your solution.",
    marks: 7, topicKey: "polynomial_roots", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "√(3x+4) = 2+√(x+1). Squaring and simplifying: 2x−1 = 4√(x+1). Squaring again: 4x²−20x−15=0, giving x=(5±2√10)/2. Since 2x−1 must be ≥0, x=(5−2√10)/2 is rejected (extraneous); x=(5+2√10)/2 checks out in the original equation.",
    marking_notes: "Award marks for: correctly isolating and squaring to reach 2x−1=4√(x+1); correctly squaring again to reach the quadratic; solving the quadratic; correctly rejecting the extraneous root.",
    marking_points: [
      { marks: 2, description: "Isolates one radical and squares to reach 2x − 1 = 4√(x + 1)", keywords: ["2x 1", "4 x 1", "squaring"] },
      { marks: 2, description: "Squares again to reach the quadratic 4x² − 20x − 15 = 0", keywords: ["4x2", "20x", "quadratic"] },
      { marks: 2, description: "Solves the quadratic to get x = (5 ± 2√10)/2", keywords: ["5 2 10", "2 10", "quadratic formula"] },
      { marks: 1, description: "Correctly rejects the extraneous root, keeping only x = (5 + 2√10)/2", keywords: ["reject", "extraneous", "only valid"] },
    ],
  },
  {
    number: "5", sub_number: null,
    text: "State the Fundamental Theorem of Algebra, and use it to explain why x⁶ + 2x⁴ − x + 1 = 0 has exactly six roots in ℂ, counted with multiplicity. Without solving the equation, explain why the number of real roots cannot be determined to be odd — i.e. why this equation is not guaranteed to have any real root at all.",
    marks: 6, topicKey: "polynomial_roots", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "The FTA states every non-constant polynomial with complex coefficients has at least one complex root, so a degree-n polynomial has exactly n roots in ℂ counted with multiplicity — here, exactly 6. Since the coefficients are real, non-real roots occur in conjugate pairs (an even count), so the number of real roots must also be even (0, 2, 4, or 6) — unlike an odd-degree polynomial, this equation is not guaranteed to have any real root at all.",
    marking_notes: "Award marks for a correct statement of the FTA, correctly applying it to conclude exactly 6 roots, and a valid parity argument explaining why no real root is guaranteed.",
    marking_points: [
      { marks: 2, description: "States the FTA correctly (every non-constant polynomial has a root in ℂ / degree-n polynomial has n roots)", keywords: ["fundamental theorem", "n roots", "degree n"] },
      { marks: 1, description: "Concludes exactly 6 roots counted with multiplicity", keywords: ["six roots", "6 roots", "multiplicity"] },
      { marks: 2, description: "States non-real roots of a real-coefficient polynomial occur in conjugate pairs", keywords: ["conjugate pairs", "come in pairs"] },
      { marks: 1, description: "Concludes the number of real roots must be even, so none is guaranteed (unlike odd degree)", keywords: ["even", "not guaranteed", "no real root"] },
    ],
  },

  // ============ SECTION B — long response (56 marks) ============

  {
    number: "6", sub_number: "a",
    text: "Consider f(x) = x³ + x − 5. Show that f(x) = 0 has a root between x = 1 and x = 2.",
    marks: 2, topicKey: "numerical_methods", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f(1) = −3 < 0 and f(2) = 5 > 0 — a sign change, so by the Intermediate Value Theorem a root lies in (1, 2).",
    marking_notes: "Award marks for evaluating both endpoints correctly and invoking the sign-change/IVT argument.",
    marking_points: [
      { marks: 1, description: "Correctly evaluates f(1) = −3 and f(2) = 5", keywords: ["f 1 3", "f 2 5", "evaluates"] },
      { marks: 1, description: "Invokes the sign change / Intermediate Value Theorem", keywords: ["sign change", "intermediate value"] },
    ],
  },
  {
    number: "6", sub_number: "b",
    text: "Show that f'(x) = 3x² + 1 for f(x) = x³ + x − 5, and use the Newton-Raphson formula xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ) with x₀ = 1.5 to find x₁, x₂ and x₃, each to 5 decimal places.",
    marks: 8, topicKey: "numerical_methods", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 3x²+1. x₁ = 1.5 − (−0.125)/7.75 = 1.51613. x₂ = 1.51613 − 0.00153/7.89595 = 1.51594. x₃ = 1.51594 − (−0.00026)/7.89424 = 1.51597.",
    marking_notes: "One step per iterate — award marks for each correctly computed value in sequence.",
    steps: [
      { marks: 2, description: "x₁ (from x₀ = 1.5):", options: ["1.51613", "1.50000", "1.48000", "1.53000"], correctIndex: 0 },
      { marks: 3, description: "x₂ (from x₁):", options: ["1.51613", "1.51594", "1.51500", "1.52000"], correctIndex: 1 },
      { marks: 3, description: "x₃ (from x₂):", options: ["1.51594", "1.51600", "1.51597", "1.51550"], correctIndex: 2 },
    ],
  },
  {
    number: "6", sub_number: "c",
    text: "Hence state the root of f(x) = x³ + x − 5 correct to 4 decimal places.",
    marks: 2, topicKey: "numerical_methods", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "Successive iterates agree to 4 decimal places at x ≈ 1.5160.",
    marking_notes: "Full marks for the correctly rounded root, following from part (b).",
    steps: [{ marks: 2, description: "Root ≈", options: ["1.5159", "1.5160", "1.5170", "1.5150"], correctIndex: 1 }],
  },
  {
    number: "6", sub_number: "d",
    text: "For f(x) = x³ + x − 5, find the coordinates of any local maximum and local minimum, or show that none exist.",
    marks: 4, topicKey: "numerical_methods", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 3x² + 1, which is always positive (never zero, since x² ≥ 0) — so f is monotonically increasing everywhere and has no local maximum or minimum.",
    marking_notes: "Two steps: recognising f' is always positive, then the conclusion that no extrema exist.",
    steps: [
      { marks: 2, description: "f'(x) = 3x² + 1 is:", options: ["always positive (never zero)", "zero at x = ±1/√3", "zero at x = 0", "negative for x < 0"], correctIndex: 0 },
      { marks: 2, description: "Therefore f has:", options: ["no local maximum or minimum (monotonically increasing everywhere)", "one local minimum only", "one local maximum and one local minimum", "a local max at x = 0"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "e",
    text: "With reference to part (d), explain why the Newton-Raphson method converges reliably to the root when started at x₀ = 1.5.",
    marks: 4, topicKey: "numerical_methods", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Since f'(x) = 3x²+1 > 0 for every real x, f is monotonically increasing (and, since f''(x)=6x>0 for x>0, convex) everywhere — not just near the root. With no other critical points anywhere to interfere, the tangent-line iterates approach the single root steadily without overshooting or oscillating, exactly as seen in the iteration table.",
    marking_notes: "Award marks for noting f is monotonic/convex everywhere (not just on an interval), and for linking this to guaranteed reliable convergence.",
    marking_points: [
      { marks: 2, description: "Notes f is monotonically increasing (and convex) everywhere, not just on [1,2]", keywords: ["monotonic", "increasing everywhere", "convex"] },
      { marks: 2, description: "Links this to guaranteed reliable convergence with no other critical points to interfere", keywords: ["converge", "reliably", "no other critical points"] },
    ],
  },

  {
    number: "7", sub_number: "a",
    text: "Prove by mathematical induction that 5ⁿ − 1 is divisible by 4 for all positive integers n.",
    marks: 8, topicKey: "induction", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Base n=1: 5−1=4, divisible by 4. Assume 5^k−1=4m. Then 5^(k+1)−1 = 5(4m+1)−1 = 20m+4 = 4(5m+1), divisible by 4. True for n=1 and the step holds, so true for all positive integers n.",
    marking_notes: "Award marks for: correct base case; correct inductive hypothesis; correct algebraic step showing divisibility by 4; valid concluding statement.",
    marking_points: [
      { marks: 2, description: "Verifies the base case n = 1 (5¹−1 = 4)", keywords: ["base case", "n 1", "4 divisible"] },
      { marks: 2, description: "States the inductive hypothesis 5^k − 1 = 4m", keywords: ["assume", "hypothesis", "4m"] },
      { marks: 3, description: "Correctly shows 5^(k+1) − 1 = 4(5m+1)", keywords: ["20m", "5m 1", "4 5m"] },
      { marks: 1, description: "Valid concluding statement (true for all n by induction)", keywords: ["by induction", "true for all"] },
    ],
  },
  {
    number: "7", sub_number: "b",
    text: "Prove by mathematical induction that, for all positive integers n, 1/(1·2) + 1/(2·3) + ... + 1/(n(n+1)) = n/(n+1).",
    marks: 8, topicKey: "induction", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Base n=1: LHS=1/2, RHS=1/2. Assume true for n=k: sum = k/(k+1). Adding 1/((k+1)(k+2)) gives [k(k+2)+1]/[(k+1)(k+2)] = (k+1)²/[(k+1)(k+2)] = (k+1)/(k+2), matching the formula at n=k+1. True for n=1 and the step holds, so true for all positive integers n.",
    marking_notes: "Award marks for: correct base case; correct inductive hypothesis; correct combination of fractions; correct simplification to (k+1)/(k+2); valid conclusion.",
    marking_points: [
      { marks: 1, description: "Verifies the base case n = 1", keywords: ["base case", "n 1"] },
      { marks: 1, description: "States the inductive hypothesis for n = k", keywords: ["assume", "hypothesis"] },
      { marks: 3, description: "Correctly combines fractions to reach (k+1)²/[(k+1)(k+2)]", keywords: ["k 1 2", "common denominator", "k2 2k 1"] },
      { marks: 2, description: "Simplifies to (k+1)/(k+2), matching the formula at n = k+1", keywords: ["k 1 k 2", "matches", "n k 1"] },
      { marks: 1, description: "Valid concluding statement (true for all n by induction)", keywords: ["by induction", "true for all"] },
    ],
  },

  {
    number: "8", sub_number: "a",
    text: "Consider P(x) = x⁵ − 8x⁴ + 21x³ − 24x² + 10x + 4. Show that x = 2 is a root of P(x), and use the factor theorem to write P(x) = (x − 2)Q(x), finding the quartic Q(x) explicitly.",
    marks: 5, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "P(2) = 32−128+168−96+20+4 = 0. Dividing by (x−2) gives Q(x) = x⁴ − 6x³ + 9x² − 6x − 2.",
    marking_notes: "Two steps: confirming P(2)=0, then the quotient Q(x).",
    steps: [
      { marks: 1, description: "P(2) =", options: ["0", "4", "−4", "2"], correctIndex: 0 },
      { marks: 4, description: "Q(x) =", options: ["x⁴ − 6x³ + 9x² − 6x − 2", "x⁴ − 8x³ + 21x² − 24x + 10", "x⁴ − 6x³ + 9x² + 6x − 2", "x⁴ − 6x³ + 7x² − 6x − 2"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "b",
    text: "Given that 1 + i is a root of Q(x) = x⁴ − 6x³ + 9x² − 6x − 2, use the conjugate root theorem to find a quadratic factor of Q(x) with real coefficients, and hence write Q(x) as the product of this quadratic and another quadratic, R(x).",
    marks: 6, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "1 − i is also a root, giving quadratic factor x² − 2x + 2. Dividing Q(x) by this gives R(x) = x² − 4x − 1.",
    marking_notes: "Two steps: the quadratic factor from the conjugate pair, then R(x).",
    steps: [
      { marks: 2, description: "Quadratic factor from the conjugate pair:", options: ["x² − 2x + 2", "x² + 2x + 2", "x² − 2x − 2", "x² − 4x + 2"], correctIndex: 0 },
      { marks: 4, description: "R(x) =", options: ["x² − 4x − 1", "x² − 4x + 1", "x² + 4x − 1", "x² − 6x − 1"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "c",
    text: "Solve R(x) = x² − 4x − 1 = 0, expressing the roots exactly in the form a ± √b.",
    marks: 4, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "By the quadratic formula, x = (4 ± √20)/2 = 2 ± √5.",
    marking_notes: "Full marks for both exact roots.",
    steps: [{ marks: 4, description: "Roots of R(x) = 0:", options: ["2 ± √5", "4 ± √5", "2 ± √20", "1 ± √5"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "d",
    text: "State all five roots of P(x) = x⁵ − 8x⁴ + 21x³ − 24x² + 10x + 4 = 0, and confirm this is consistent with the Fundamental Theorem of Algebra.",
    marks: 5, topicKey: "polynomial_roots", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "All five roots: 2, 1+i, 1−i, 2+√5, 2−√5 — five roots counted with multiplicity, consistent with the FTA for a degree-5 polynomial.",
    marking_notes: "Award marks for correctly listing all five roots and for the consistency statement with the FTA.",
    marking_points: [
      { marks: 3, description: "Lists all five roots correctly: 2, 1+i, 1−i, 2+√5, 2−√5", keywords: ["1 i", "2 5", "five roots"] },
      { marks: 2, description: "States this is consistent with the FTA for a degree-5 polynomial", keywords: ["fundamental theorem", "degree 5", "consistent"] },
    ],
  },
];

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
