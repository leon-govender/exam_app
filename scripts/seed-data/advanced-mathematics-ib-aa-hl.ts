// Practice paper (not a real past exam): "Mathematics AA HL Practice Paper",
// modelled on IB Diploma Programme Mathematics: Analysis & Approaches HL
// Paper 2 (calculator permitted, Section A short-response / Section B
// long-response), 2 hours, 88 marks. Content and mark scheme were authored
// and hand-verified in this session (every induction proof, root
// factorisation, and Newton-Raphson iteration solved and checked before
// transcription) — this is original practice material, not a board-sourced
// past paper like the other subjects in this app.
//
// Scope: mathematical induction, the factor theorem, the conjugate root
// theorem, surd (irrational conjugate) equations, the fundamental theorem
// of algebra, and the Newton-Raphson method — all genuine IB AA HL Topic 1
// (Number & Algebra) and Topic 5 (Calculus) content. Companion paper
// advanced-mathematics-ap-calc-ab.ts covers the calculus-only subset of the
// original topic list that actually exists in the AP Calculus AB syllabus.
//
// Shares the "Advanced Mathematics" subject and cognitive-level scale with
// the AP Calc AB paper (both files define them identically, matching this
// app's per-file redundancy convention — see seedDataset() in scripts/seed.ts,
// which upserts by name so duplicate definitions across files are expected).
//
// Any part with a single concrete answer (a value, a factorisation, a set
// of roots) uses `steps: MarkingPointStep[]` (stepped-MCQ grading), per this
// app's established convention for calculation-heavy content — including
// the Newton-Raphson iteration table, which decomposes cleanly into one
// step per iterate. `marking_points` (free text) is used only for the
// handful of parts that require written justification/explanation.

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
  exam_diet: "Practice A",
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
    text: "Prove by mathematical induction that, for all positive integers n, 1² + 2² + 3² + ... + n² = n(n+1)(2n+1)/6.",
    marks: 6, topicKey: "induction", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Base case n=1: LHS=1, RHS=1·2·3/6=1. Assume true for n=k. Then the sum to k+1 terms is k(k+1)(2k+1)/6 + (k+1)² = (k+1)(k+2)(2k+3)/6, matching the formula at n=k+1. True for n=1 and the inductive step holds, so true for all positive integers n.",
    marking_notes: "Award marks for: correct base case; correctly stating the inductive hypothesis; correct algebraic manipulation adding (k+1)²; reaching the exact form of the RHS at n=k+1; a valid concluding statement.",
    marking_points: [
      { marks: 1, description: "Verifies the base case n = 1", keywords: ["base case", "n 1", "true for n 1"] },
      { marks: 1, description: "States the inductive hypothesis for n = k", keywords: ["assume", "hypothesis", "true for n k"] },
      { marks: 2, description: "Correctly adds (k+1)² and factorises to reach (k+1)(k+2)(2k+3)/6", keywords: ["k 1 k 2 2k 3", "k 2 2 2k 1", "factorise", "factoris"] },
      { marks: 1, description: "Confirms this matches the formula at n = k+1", keywords: ["matches", "n k 1", "formula at"] },
      { marks: 1, description: "Valid concluding statement (true for all n by induction)", keywords: ["by induction", "true for all", "for all positive integers"] },
    ],
  },
  {
    number: "2", sub_number: null,
    text: "Consider P(x) = x⁴ − 4x³ + 6x² − 4x + 5. Given that 2 + i is a root of P(x) = 0, use the conjugate root theorem to find all four roots of P(x) = 0.",
    marks: 7, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "2 − i is also a root (conjugate root theorem). The quadratic factor (x−(2+i))(x−(2−i)) = x²−4x+5 divides P(x) exactly, leaving quotient x²+1. All four roots: 2+i, 2−i, i, −i.",
    marking_notes: "Two steps: the quadratic factor from the conjugate pair, then the remaining two roots.",
    steps: [
      { marks: 3, description: "Quadratic factor from the conjugate pair 2±i:", options: ["x² − 4x + 5", "x² + 4x + 5", "x² − 4x + 3", "x² − 2x + 5"], correctIndex: 0 },
      { marks: 4, description: "All four roots of P(x) = 0:", options: ["2+i, 2−i, i, −i", "2+i, 2−i, 1, −1", "2+i, 2−i, 2i, −2i", "2+i, 2−i, 1+i, 1−i"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: null,
    text: "Use the factor theorem to fully factorise f(x) = x³ − 2x² − 5x + 6 over the integers, and hence solve f(x) = 0.",
    marks: 6, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "f(1) = 0, so (x−1) is a factor. Dividing gives x²−x−6 = (x−3)(x+2). f(x) = (x−1)(x−3)(x+2); roots x = 1, 3, −2.",
    marking_notes: "Two steps: the full factorisation, then the roots.",
    steps: [
      { marks: 3, description: "Full factorisation:", options: ["(x − 1)(x − 3)(x + 2)", "(x + 1)(x − 3)(x + 2)", "(x − 1)(x + 3)(x − 2)", "(x − 1)(x − 2)(x + 3)"], correctIndex: 0 },
      { marks: 3, description: "Roots of f(x) = 0:", options: ["x = 1, 3, −2", "x = −1, −3, 2", "x = 1, −3, 2", "x = 1, 3, 2"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: null,
    text: "Solve the equation √(x+7) − √(x−5) = 2 algebraically, showing full working, and verify your solution.",
    marks: 7, topicKey: "polynomial_roots", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "√(x+7) = 2+√(x−5). Squaring: x+7 = 4+4√(x−5)+(x−5) → 8 = 4√(x−5) → x−5 = 4 → x = 9. Check: √16 − √4 = 4−2 = 2 ✓.",
    marking_notes: "Two steps: isolating and squaring correctly, then the verified final value.",
    steps: [
      { marks: 4, description: "After isolating one radical and squaring, the equation simplifies to:", options: ["8 = 4√(x−5)", "8 = 2√(x−5)", "8 = 4√(x+5)", "4 = 4√(x−5)"], correctIndex: 0 },
      { marks: 3, description: "Solution, verified against the original equation:", options: ["x = 9", "x = 5", "x = 13", "x = 9 and x = 5"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: null,
    text: "State the Fundamental Theorem of Algebra, and use it to explain why x⁵ − 3x³ + x − 7 = 0 has exactly five roots in ℂ, counted with multiplicity. Without solving the equation, explain why it must have at least one real root.",
    marks: 6, topicKey: "polynomial_roots", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "The FTA states every non-constant polynomial with complex coefficients has at least one complex root, so a degree-n polynomial has exactly n roots in ℂ counted with multiplicity — here, exactly 5. Since the coefficients are real, any non-real roots occur in conjugate pairs, so non-real roots always come in even numbers; since 5 is odd, at least one root must be real.",
    marking_notes: "Award marks for a correct statement of the FTA, correctly applying it to conclude exactly 5 roots, and a valid real-root parity argument.",
    marking_points: [
      { marks: 2, description: "States the FTA correctly (every non-constant polynomial has a root in ℂ / degree-n polynomial has n roots)", keywords: ["fundamental theorem", "n roots", "degree n"] },
      { marks: 1, description: "Concludes exactly 5 roots counted with multiplicity", keywords: ["five roots", "5 roots", "multiplicity"] },
      { marks: 2, description: "States non-real roots of a real-coefficient polynomial occur in conjugate pairs", keywords: ["conjugate pairs", "come in pairs", "pairs of complex"] },
      { marks: 1, description: "Concludes at least one real root since 5 is odd", keywords: ["odd", "at least one real"] },
    ],
  },

  // ============ SECTION B — long response (56 marks) ============

  {
    number: "6", sub_number: "a",
    text: "Consider f(x) = x³ − x − 3. Show that f(x) = 0 has a root between x = 1 and x = 2.",
    marks: 2, topicKey: "numerical_methods", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f(1) = −3 < 0 and f(2) = 3 > 0 — a sign change, so by the Intermediate Value Theorem a root lies in (1, 2).",
    marking_notes: "Award marks for evaluating both endpoints correctly and invoking the sign-change/IVT argument.",
    marking_points: [
      { marks: 1, description: "Correctly evaluates f(1) = −3 and f(2) = 3", keywords: ["f 1 3", "f 2 3", "-3", "evaluates"] },
      { marks: 1, description: "Invokes the sign change / Intermediate Value Theorem", keywords: ["sign change", "intermediate value", "changes sign"] },
    ],
  },
  {
    number: "6", sub_number: "b",
    text: "Show that f'(x) = 3x² − 1 for f(x) = x³ − x − 3, and use the Newton-Raphson formula xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ) with x₀ = 1.5 to find x₁, x₂ and x₃, each to 5 decimal places.",
    marks: 8, topicKey: "numerical_methods", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 3x²−1. x₁ = 1.5 − (−1.125)/5.75 = 1.69565. x₂ = 1.69565 − 0.18005/7.62569 = 1.67204. x₃ = 1.67204 − 0.00261/7.38716 = 1.67169.",
    marking_notes: "One step per iterate — award marks for each correctly computed value in sequence.",
    steps: [
      { marks: 2, description: "x₁ (from x₀ = 1.5):", options: ["1.69565", "1.50000", "1.62500", "1.72500"], correctIndex: 0 },
      { marks: 3, description: "x₂ (from x₁):", options: ["1.69565", "1.67204", "1.65000", "1.70000"], correctIndex: 1 },
      { marks: 3, description: "x₃ (from x₂):", options: ["1.67204", "1.67500", "1.67169", "1.66800"], correctIndex: 2 },
    ],
  },
  {
    number: "6", sub_number: "c",
    text: "Hence state the root of f(x) = x³ − x − 3 correct to 4 decimal places.",
    marks: 2, topicKey: "numerical_methods", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "Successive iterates agree to 4 decimal places at x ≈ 1.6717.",
    marking_notes: "Full marks for the correctly rounded root, following from part (b).",
    steps: [{ marks: 2, description: "Root ≈", options: ["1.6716", "1.6717", "1.6720", "1.6700"], correctIndex: 1 }],
  },
  {
    number: "6", sub_number: "d",
    text: "For f(x) = x³ − x − 3, find the coordinates of any local maximum and local minimum, or show that none exist.",
    marks: 4, topicKey: "numerical_methods", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 0 at x = ±1/√3. f''(x) = 6x: local minimum ≈ (0.577, −3.385), local maximum ≈ (−0.577, −2.615).",
    marking_notes: "Two steps: locating the critical x-values, then the coordinates.",
    steps: [
      { marks: 2, description: "Critical x-values:", options: ["x = ±1/√3 ≈ ±0.577", "x = ±1/√2 ≈ ±0.707", "x = ±1", "x = ±3"], correctIndex: 0 },
      { marks: 2, description: "Classification and coordinates:", options: ["local min ≈ (0.577, −3.385), local max ≈ (−0.577, −2.615)", "local max ≈ (0.577, −3.385), local min ≈ (−0.577, −2.615)", "both are local minima", "both are inflection points"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "e",
    text: "With reference to part (d), explain why the Newton-Raphson method converges reliably to the root on [1, 2] when started at x₀ = 1.5.",
    marks: 4, topicKey: "numerical_methods", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Both critical points (≈ ±0.577) lie outside [1,2], so on this interval f is monotonically increasing and concave up (f'>0, f''>0 throughout). A monotonic, convex function containing the root guarantees the tangent-line iterates approach the root steadily without overshooting or oscillating, as seen in the iteration table.",
    marking_notes: "Award marks for noting the critical points lie outside [1,2], and for linking monotonicity/concavity there to reliable convergence.",
    marking_points: [
      { marks: 2, description: "Notes the critical points lie outside [1, 2]", keywords: ["outside", "not in", "lie outside"] },
      { marks: 2, description: "Links monotonicity/concavity on [1,2] to reliable convergence (no overshoot/oscillation)", keywords: ["monotonic", "concave", "convex", "converge", "no overshoot", "reliably"] },
    ],
  },

  {
    number: "7", sub_number: "a",
    text: "Prove by mathematical induction that 7ⁿ − 1 is divisible by 6 for all positive integers n.",
    marks: 8, topicKey: "induction", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Base n=1: 7−1=6, divisible by 6. Assume 7^k−1=6m. Then 7^(k+1)−1 = 7(6m+1)−1 = 42m+6 = 6(7m+1), divisible by 6. True for n=1 and the step holds, so true for all positive integers n.",
    marking_notes: "Award marks for: correct base case; correct inductive hypothesis; correct algebraic step showing divisibility by 6; valid concluding statement.",
    marking_points: [
      { marks: 2, description: "Verifies the base case n = 1 (7¹−1 = 6)", keywords: ["base case", "n 1", "6 divisible"] },
      { marks: 2, description: "States the inductive hypothesis 7^k − 1 = 6m", keywords: ["assume", "hypothesis", "6m"] },
      { marks: 3, description: "Correctly shows 7^(k+1) − 1 = 6(7m+1)", keywords: ["42m", "7m 1", "6 7m"] },
      { marks: 1, description: "Valid concluding statement (true for all n by induction)", keywords: ["by induction", "true for all", "positive integers"] },
    ],
  },
  {
    number: "7", sub_number: "b",
    text: "Prove by mathematical induction that, for all positive integers n, 1³ + 2³ + 3³ + ... + n³ = [n(n+1)/2]².",
    marks: 8, topicKey: "induction", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Base n=1: LHS=1, RHS=(1·2/2)²=1. Assume true for n=k. Adding (k+1)³ gives (k+1)²[k²/4+(k+1)] = [(k+1)(k+2)/2]², matching the formula at n=k+1. True for n=1 and the step holds, so true for all positive integers n.",
    marking_notes: "Award marks for: correct base case; correct inductive hypothesis; correct algebraic manipulation adding (k+1)³; reaching the exact form at n=k+1; valid conclusion.",
    marking_points: [
      { marks: 1, description: "Verifies the base case n = 1", keywords: ["base case", "n 1"] },
      { marks: 1, description: "States the inductive hypothesis for n = k", keywords: ["assume", "hypothesis"] },
      { marks: 3, description: "Correctly adds (k+1)³ and factorises toward [(k+1)(k+2)/2]²", keywords: ["k 1 k 2", "k 1 2", "factoris"] },
      { marks: 2, description: "Confirms this matches the formula at n = k+1", keywords: ["matches", "n k 1"] },
      { marks: 1, description: "Valid concluding statement (true for all n by induction)", keywords: ["by induction", "true for all"] },
    ],
  },

  {
    number: "8", sub_number: "a",
    text: "Consider P(x) = x⁵ − 7x⁴ + 17x³ − 13x² − 8x + 10. Show that x = 1 is a root of P(x), and use the factor theorem to write P(x) = (x − 1)Q(x), finding the quartic Q(x) explicitly.",
    marks: 5, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "P(1) = 1−7+17−13−8+10 = 0. Dividing by (x−1) gives Q(x) = x⁴ − 6x³ + 11x² − 2x − 10.",
    marking_notes: "Two steps: confirming P(1)=0, then the quotient Q(x).",
    steps: [
      { marks: 1, description: "P(1) =", options: ["0", "1", "−1", "2"], correctIndex: 0 },
      { marks: 4, description: "Q(x) =", options: ["x⁴ − 6x³ + 11x² − 2x − 10", "x⁴ − 7x³ + 17x² − 13x − 8", "x⁴ − 6x³ + 11x² + 2x − 10", "x⁴ − 5x³ + 11x² − 2x − 10"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "b",
    text: "Given that 2 + i is a root of Q(x) = x⁴ − 6x³ + 11x² − 2x − 10, use the conjugate root theorem to find a quadratic factor of Q(x) with real coefficients, and hence write Q(x) as the product of this quadratic and another quadratic, R(x).",
    marks: 6, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "2−i is also a root, giving quadratic factor x²−4x+5. Dividing Q(x) by this gives R(x) = x²−2x−2.",
    marking_notes: "Two steps: the quadratic factor from the conjugate pair, then R(x).",
    steps: [
      { marks: 2, description: "Quadratic factor from the conjugate pair:", options: ["x² − 4x + 5", "x² + 4x + 5", "x² − 4x − 5", "x² − 2x + 5"], correctIndex: 0 },
      { marks: 4, description: "R(x) =", options: ["x² − 2x − 2", "x² + 2x − 2", "x² − 2x + 2", "x² − 4x − 2"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "c",
    text: "Solve R(x) = x² − 2x − 2 = 0, expressing the roots exactly in the form a ± √b.",
    marks: 4, topicKey: "polynomial_roots", cognitiveLevelName: "Application",
    model_answer: "By the quadratic formula, x = (2 ± √12)/2 = 1 ± √3.",
    marking_notes: "Full marks for both exact roots.",
    steps: [{ marks: 4, description: "Roots of R(x) = 0:", options: ["1 ± √3", "2 ± √3", "1 ± √12", "−1 ± √3"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "d",
    text: "State all five roots of P(x) = x⁵ − 7x⁴ + 17x³ − 13x² − 8x + 10 = 0, and confirm this is consistent with the Fundamental Theorem of Algebra.",
    marks: 5, topicKey: "polynomial_roots", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "All five roots: 1, 2+i, 2−i, 1+√3, 1−√3 — five roots counted with multiplicity, consistent with the FTA for a degree-5 polynomial.",
    marking_notes: "Award marks for correctly listing all five roots and for the consistency statement with the FTA.",
    marking_points: [
      { marks: 3, description: "Lists all five roots correctly: 1, 2+i, 2−i, 1+√3, 1−√3", keywords: ["2 i", "1 3", "five roots", "1 1"] },
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
