// Practice paper (not a real past exam): "Calculus AB Practice Paper", modelled
// on the College Board AP Calculus AB exam format (MCQ Parts A/B no-calc/calc,
// FRQ Parts A/B calc/no-calc), 2 hours, 88 marks. Content and mark scheme were
// authored and hand-verified in this session (every derivative, root, and
// numeric iteration solved and checked before transcription) — this is
// original practice material, not a DBE/board-sourced past paper like the
// other subjects in this app.
//
// Scope: curve sketching, logarithmic/exponential (e, ln) equation solving,
// and differentiation including implicit differentiation — deliberately
// excludes mathematical induction, complex/surd roots, the factor theorem
// and the fundamental theorem of algebra, none of which are part of the
// real AP Calculus AB syllabus; those topics went into the companion
// IB AA HL paper (advanced-mathematics-ib-aa-hl.ts) instead, where they
// actually belong.
//
// Every question with a single concrete mathematical answer (an expression,
// value, interval, or set of coordinates) uses `steps: MarkingPointStep[]`
// (stepped-MCQ grading) rather than free text, per this app's established
// convention for calculation-heavy content — free-text keyword matching is
// unreliable for algebraic expressions. `marking_points` (free text) is
// used only for the handful of parts that require written interpretation
// (e.g. explaining what a concavity result means for a business, or
// describing a graph's shape).
//
// The 20 standalone multiple-choice questions (Section I) are each modelled
// as a single-step `steps` array worth the question's full mark, with the
// correct option's index deliberately varied (rotating 0-1-2-3) across
// questions rather than always sitting in the same slot.

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
    key: "curve_sketching",
    name: "Curve Sketching & Graphical Analysis",
    caps_term: "AP Unit 5",
    textbook_ref: "AP Calculus AB — Analytical Applications of Differentiation (Monotonicity, Concavity, Extrema, Asymptotes)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=ap+calculus+ab+curve+sketching+extrema+concavity",
  },
  {
    key: "logs_exponentials",
    name: "Logarithms, e and Natural Logarithm Equations",
    caps_term: "AP Unit 3",
    textbook_ref: "AP Calculus AB — Exponential & Logarithmic Functions, Equation Solving",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=solving+exponential+and+logarithmic+equations+e+ln",
  },
  {
    key: "differentiation",
    name: "Differentiation & Implicit Differentiation",
    caps_term: "AP Unit 2–3",
    textbook_ref: "AP Calculus AB — Differentiation Rules, Composite/Implicit/Inverse Functions",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=implicit+differentiation+ap+calculus",
  },
];

export const paper = {
  year: 2026,
  exam_diet: "Practice",
  paper_number: "AP Calculus AB",
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
  // ============ SECTION I · PART A — no calculator (Q1-12, 1 mark each) ============

  {
    number: "1", sub_number: null,
    text: "If f(x) = ln(3x² + 1), then f'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = 6x/(3x² + 1), by the chain rule.",
    marking_notes: "Chain rule: derivative of the inside (6x) over the inside.",
    steps: [{ marks: 1, description: "f'(x) =", options: ["6x / (3x² + 1)", "6x", "1 / (3x² + 1)", "6 / (3x² + 1)"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: null,
    text: "The solution set of e^(2x) − 5e^x + 6 = 0 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Let u = e^x: u² − 5u + 6 = 0 → (u−2)(u−3) = 0 → u = 2 or 3 → x = ln 2 or ln 3.",
    marking_notes: "Substitution u = e^x turns this into a quadratic; both roots must be converted back via ln.",
    steps: [{ marks: 1, description: "Solution set:", options: ["{2, 3}", "{ln 2, ln 3}", "{ln 5, ln 6}", "{−ln 2, −ln 3}"], correctIndex: 1 }],
  },
  {
    number: "3", sub_number: null,
    text: "If y³ + xy = 4, then dy/dx =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "Differentiating implicitly: 3y²y' + y + xy' = 0 → y'(3y² + x) = −y → y' = −y/(3y² + x).",
    marking_notes: "Product rule on xy, then collect y' terms.",
    steps: [{ marks: 1, description: "dy/dx =", options: ["y / (3y² + x)", "−y / (3y² − x)", "−y / (3y² + x)", "−x / (3y² + x)"], correctIndex: 2 }],
  },
  {
    number: "4", sub_number: null,
    text: "f(x) = x³ − 6x² + 9x + 1 is increasing on",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 3x² − 12x + 9 = 3(x−1)(x−3), positive outside the roots (upward parabola): (−∞,1) ∪ (3,∞).",
    marking_notes: "Sign of f' outside its roots, since the leading coefficient of f' is positive.",
    steps: [{ marks: 1, description: "Increasing on:", options: ["(1, 3)", "(−∞, 3)", "(1, ∞)", "(−∞, 1) ∪ (3, ∞)"], correctIndex: 3 }],
  },
  {
    number: "5", sub_number: null,
    text: "The x-coordinate(s) of the inflection point(s) of f(x) = x⁴ − 4x³ is/are",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f''(x) = 12x² − 24x = 12x(x−2), zero and changing sign at x = 0 and x = 2 — both are inflection points.",
    marking_notes: "Both roots of f'' are simple roots, so both are genuine sign changes.",
    steps: [{ marks: 1, description: "Inflection point(s):", options: ["x = 0 and x = 2", "x = 0 only", "x = 2 only", "x = 1"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: null,
    text: "If g(x) = ln(x) / x, then g'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "Quotient rule: g'(x) = [(1/x)·x − ln(x)·1] / x² = (1 − ln x) / x².",
    marking_notes: "Quotient rule applied directly.",
    steps: [{ marks: 1, description: "g'(x) =", options: ["(ln x − 1) / x²", "(1 − ln x) / x²", "1 / x²", "(1 + ln x) / x²"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: null,
    text: "The solution of ln(2x − 1) = 3 is x =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "2x − 1 = e³ → x = (e³ + 1)/2.",
    marking_notes: "Exponentiate both sides, then isolate x.",
    steps: [{ marks: 1, description: "x =", options: ["(e³ − 1) / 2", "e³ / 2", "(e³ + 1) / 2", "(e³ + 1) / 3"], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: null,
    text: "If x² + y² = 25, then dy/dx at the point (3, 4) equals",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + 2yy' = 0 → y' = −x/y = −3/4.",
    marking_notes: "Implicit differentiation of a circle, then substitute the point.",
    steps: [{ marks: 1, description: "dy/dx at (3,4):", options: ["3/4", "−4/3", "4/3", "−3/4"], correctIndex: 3 }],
  },
  {
    number: "9", sub_number: null,
    text: "The curve y = x³ − 3x has a local maximum at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "y' = 3x² − 3 = 0 → x = ±1. y'' = 6x: at x = −1, y'' < 0 (local max); at x = 1, y'' > 0 (local min).",
    marking_notes: "Second Derivative Test distinguishes the two critical points.",
    steps: [{ marks: 1, description: "Local maximum at:", options: ["x = −1", "x = 1", "x = 0", "both x = −1 and x = 1"], correctIndex: 0 }],
  },
  {
    number: "10", sub_number: null,
    text: "d/dx [ e^(x²) · ln(x) ] =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "Product rule: e^(x²)·2x·ln(x) + e^(x²)·(1/x) = e^(x²)(2x ln x + 1/x).",
    marking_notes: "Product rule, with the chain rule inside the first factor's derivative.",
    steps: [{ marks: 1, description: "Derivative:", options: ["2x e^(x²) ln x", "e^(x²)(2x ln x + 1/x)", "e^(x²) / x", "e^(x²)(2x ln x − 1/x)"], correctIndex: 1 }],
  },
  {
    number: "11", sub_number: null,
    text: "As x → ∞, the graph of f(x) = ln(x) / x has a horizontal asymptote at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "ln(x) grows slower than x, so the ratio → 0: horizontal asymptote y = 0.",
    marking_notes: "Growth-rate comparison between ln(x) and x.",
    steps: [{ marks: 1, description: "Horizontal asymptote:", options: ["y = 1", "none", "y = 0", "y = e"], correctIndex: 2 }],
  },
  {
    number: "12", sub_number: null,
    text: "If h(x) = x^x for x > 0, then h'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Logarithmic differentiation: ln h = x ln x → h'/h = ln x + 1 → h' = x^x(ln x + 1).",
    marking_notes: "Take ln of both sides first, since the variable is in both the base and exponent.",
    steps: [{ marks: 1, description: "h'(x) =", options: ["x · x^(x−1)", "x^x ln x", "x^x / x", "x^x (ln x + 1)"], correctIndex: 3 }],
  },

  // ============ SECTION I · PART B — calculator permitted (Q13-20, 1 mark each) ============

  {
    number: "13", sub_number: null,
    text: "To three decimal places, the root of f(x) = e^x − x − 3 between x = 1 and x = 2 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Numerically, the root is x ≈ 1.505 (f(1.505) ≈ 0, checked by narrowing the bracket).",
    marking_notes: "Calculator numeric solve or repeated bisection.",
    steps: [{ marks: 1, description: "Root ≈", options: ["1.505", "1.386", "1.609", "1.792"], correctIndex: 0 }],
  },
  {
    number: "14", sub_number: null,
    text: "A bacteria culture is modelled by N(t) = 500e^(0.08t). To the nearest hour, when does N reach 2000?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "500e^(0.08t) = 2000 → e^(0.08t) = 4 → t = ln(4)/0.08 ≈ 17.33 ≈ 17 hours.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.08.",
    steps: [{ marks: 1, description: "t ≈", options: ["14 hours", "17 hours", "20 hours", "25 hours"], correctIndex: 1 }],
  },
  {
    number: "15", sub_number: null,
    text: "The absolute maximum value of f(x) = x²e^(−x) on [0, 4] is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = e^(−x)x(2−x) = 0 at x = 0, 2. f(0)=0, f(2)=4e⁻²≈0.541, f(4)=16e⁻⁴≈0.293 — maximum is 0.541.",
    marking_notes: "Compare critical points and endpoints (closed-interval extreme value check).",
    steps: [{ marks: 1, description: "Absolute maximum ≈", options: ["0.293", "1.000", "0.541", "0.135"], correctIndex: 2 }],
  },
  {
    number: "16", sub_number: null,
    text: "If x²y + y³ = 10, the value of dy/dx at x = 2 (positive y, rounded to two decimals) is closest to",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Solving y³+4y−10=0 numerically at x=2 gives y≈1.557. y' = −2xy/(x²+3y²) ≈ −6.228/11.272 ≈ −0.55.",
    marking_notes: "First solve for y numerically, then apply the implicit-differentiation formula.",
    steps: [{ marks: 1, description: "dy/dx ≈", options: ["0.55", "−1.10", "−0.28", "−0.55"], correctIndex: 3 }],
  },
  {
    number: "17", sub_number: null,
    text: "A tank drains so that V(t) = 1000 − 50 ln(t + 1) litres. To the nearest 0.1 minute, when is V = 750?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "1000 − 50ln(t+1) = 750 → ln(t+1) = 5 → t = e⁵ − 1 ≈ 147.4 minutes.",
    marking_notes: "Isolate the log term, exponentiate, subtract 1.",
    steps: [{ marks: 1, description: "t ≈", options: ["147.4 min", "5.0 min", "250.0 min", "99.5 min"], correctIndex: 0 }],
  },
  {
    number: "18", sub_number: null,
    text: "If y = ln(kx) passes through (2, 3), then, to three decimals, k =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "3 = ln(2k) → 2k = e³ → k = e³/2 ≈ 10.043.",
    marking_notes: "Substitute the point, exponentiate, solve for k.",
    steps: [{ marks: 1, description: "k ≈", options: ["20.086", "10.043", "1.099", "6.695"], correctIndex: 1 }],
  },
  {
    number: "19", sub_number: null,
    text: "The number of critical points of f(x) = e^(−x²/2) on (−3, 3) is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = −x e^(−x²/2), zero only at x = 0 — one critical point.",
    marking_notes: "Set f' = 0 and count solutions inside the interval.",
    steps: [{ marks: 1, description: "Number of critical points:", options: ["2", "0", "1", "3"], correctIndex: 2 }],
  },
  {
    number: "20", sub_number: null,
    text: "The maximum value of f(x) = 2 ln(x) − x for x > 0 is approximately",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 2/x − 1 = 0 → x = 2. f(2) = 2 ln 2 − 2 ≈ −0.614.",
    marking_notes: "Set f' = 0, confirm a maximum, evaluate f there.",
    steps: [{ marks: 1, description: "Maximum value ≈", options: ["0.614", "1.386", "−1.386", "−0.614"], correctIndex: 3 }],
  },

  // ============ SECTION II · PART A — calculator permitted, FRQ (30 marks) ============

  {
    number: "21", sub_number: "a",
    text: "Let f(x) = x e^(−x²). Find f'(x).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "By the product rule, f'(x) = e^(−x²) + x·(−2x)e^(−x²) = e^(−x²)(1 − 2x²).",
    marking_notes: "Full marks for the correctly simplified derivative.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["e^(−x²)(1 − 2x²)", "e^(−x²)(1 + 2x²)", "−2x e^(−x²)", "e^(−x²)(2x² − 1)"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "b",
    text: "Find all critical points of f(x) = x e^(−x²) and classify each using the First or Second Derivative Test.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 0 at x = ±1/√2. f''(x) = 2x e^(−x²)(2x²−3); f''(1/√2) < 0 → local max; f''(−1/√2) > 0 → local min.",
    marking_notes: "Two steps: locate the critical points, then classify using the sign of f''.",
    steps: [
      { marks: 2, description: "Critical point(s):", options: ["x = ±1/√2", "x = 0 only", "x = ±1", "x = ±√2"], correctIndex: 0 },
      { marks: 2, description: "Classification:", options: ["local max at x = 1/√2, local min at x = −1/√2", "local min at x = 1/√2, local max at x = −1/√2", "both are local maxima", "both are inflection points, not extrema"], correctIndex: 0 },
    ],
  },
  {
    number: "21", sub_number: "c",
    text: "Determine the intervals on which f(x) = x e^(−x²) is increasing and decreasing.",
    marks: 3, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "Since f'(x) = e^(−x²)(1−2x²) > 0 for |x| < 1/√2: increasing on (−1/√2, 1/√2), decreasing on (−∞,−1/√2) ∪ (1/√2,∞).",
    marking_notes: "Sign of f' either side of the critical points.",
    steps: [{ marks: 3, description: "f is:", options: ["increasing on (−1/√2, 1/√2), decreasing elsewhere", "decreasing on (−1/√2, 1/√2), increasing elsewhere", "increasing everywhere on (−∞,∞)", "decreasing everywhere on (−∞,∞)"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "d",
    text: "Find the x-coordinates of any inflection points of f(x) = x e^(−x²).",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "f''(x) = 2x e^(−x²)(2x²−3) = 0 at x = 0 and x = ±√1.5 ≈ ±1.225 — all three are sign changes, so all are inflection points.",
    marking_notes: "Two steps: the value from the linear factor, then the values from the quadratic factor.",
    steps: [
      { marks: 2, description: "One inflection point comes directly from the factor 2x = 0:", options: ["x = 0", "x = 1", "x = −1", "no such point"], correctIndex: 0 },
      { marks: 3, description: "The other two inflection points, from 2x² − 3 = 0:", options: ["x = ±√1.5 ≈ ±1.225", "x = ±√3 ≈ ±1.732", "x = ±1.5", "x = ±√0.5 ≈ ±0.707"], correctIndex: 0 },
    ],
  },

  {
    number: "22", sub_number: "a",
    text: "A company's profit (in thousands of rand) from producing x hundred units is P(x) = 100 ln(x + 1) − 5x, for x ≥ 0. Find P'(x).",
    marks: 2, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "P'(x) = 100/(x + 1) − 5.",
    marking_notes: "Direct differentiation.",
    steps: [{ marks: 2, description: "P'(x) =", options: ["100/(x+1) − 5", "100/(x+1) + 5", "100(x+1) − 5", "100/x − 5"], correctIndex: 0 }],
  },
  {
    number: "22", sub_number: "b",
    text: "Find the value of x that maximises profit P(x) = 100 ln(x + 1) − 5x, and the maximum profit to the nearest thousand rand.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "P'(x) = 0 → x = 19. P(19) = 100 ln(20) − 95 ≈ 204.57 → maximum profit ≈ R205 000.",
    marking_notes: "Two steps: the critical x-value, then the profit evaluated there.",
    steps: [
      { marks: 2, description: "x that maximises profit:", options: ["x = 19", "x = 20", "x = 15", "x = 24"], correctIndex: 0 },
      { marks: 3, description: "Maximum profit (nearest R1000):", options: ["≈ R205 000", "≈ R195 000", "≈ R300 000", "≈ R100 000"], correctIndex: 0 },
    ],
  },
  {
    number: "22", sub_number: "c",
    text: "Determine the concavity of P(x) = 100 ln(x + 1) − 5x at x = 19, and interpret what it means for the business.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "P''(x) = −100/(x+1)²; P''(19) ≈ −0.25 < 0, concave down — confirms a maximum, and means profit growth is slowing (diminishing returns) as production increases toward this point.",
    marking_notes: "Award marks for the correct concavity conclusion and a coherent business interpretation (diminishing returns / slowing growth).",
    marking_points: [
      { marks: 1, description: "States P''(x) is negative / concave down at x = 19", keywords: ["concave down", "negative", "p x negative"] },
      { marks: 1, description: "Links this to confirming a maximum", keywords: ["confirms", "maximum", "confirm max"] },
      { marks: 2, description: "Interprets in business terms: profit growth slowing / diminishing returns", keywords: ["diminishing returns", "slowing", "slows down", "rate of increase decreasing"] },
    ],
  },
  {
    number: "22", sub_number: "d",
    text: "Solve P(x) = 0 for x > 0, correct to two decimal places, and interpret the result in context.",
    marks: 4, topicKey: "logs_exponentials", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Solving 100 ln(x+1) = 5x numerically for x > 0 gives x ≈ 90.30 (9030 units) — beyond this production level the linear cost overtakes logarithmic revenue growth, and profit turns negative.",
    marking_notes: "Award marks for the correct numeric root and for a coherent interpretation (break-even / turning negative beyond this point).",
    marking_points: [
      { marks: 2, description: "Correct numeric root x ≈ 90.30", keywords: ["90 30", "90 3", "9030"] },
      { marks: 2, description: "Interprets as the point beyond which profit turns negative / break-even", keywords: ["negative", "break even", "beyond this", "turns negative"] },
    ],
  },

  // ============ SECTION II · PART B — no calculator, FRQ (38 marks) ============

  {
    number: "23", sub_number: "a",
    text: "Let f(x) = ln(x² − 4). State the domain of f.",
    marks: 2, topicKey: "curve_sketching", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "x² − 4 > 0 → x < −2 or x > 2: domain is (−∞, −2) ∪ (2, ∞).",
    marking_notes: "Requires the argument of ln to be strictly positive.",
    steps: [{ marks: 2, description: "Domain:", options: ["(−∞, −2) ∪ (2, ∞)", "(−2, 2)", "(−∞, 2)", "(2, ∞) only"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "b",
    text: "Find f'(x) for f(x) = ln(x² − 4).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = 2x / (x² − 4), by the chain rule.",
    marking_notes: "Standard chain rule application.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["2x / (x² − 4)", "1 / (x² − 4)", "2x / (x − 4)", "2 / (x² − 4)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "c",
    text: "Determine the intervals on which f(x) = ln(x² − 4) is increasing and decreasing.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 2x/(x²−4): negative for x < −2 (decreasing), positive for x > 2 (increasing).",
    marking_notes: "Sign of f' on each piece of the domain.",
    steps: [{ marks: 4, description: "f is:", options: ["decreasing on (−∞,−2), increasing on (2,∞)", "increasing on (−∞,−2), decreasing on (2,∞)", "increasing on both pieces", "decreasing on both pieces"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "d",
    text: "Find the vertical asymptote(s) of f(x) = ln(x² − 4), justifying your answer using limits.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "As x → 2⁺ or x → −2⁻, x²−4 → 0⁺, so ln(x²−4) → −∞: vertical asymptotes at x = 2 and x = −2.",
    marking_notes: "Award marks for identifying both asymptote locations and for correctly justifying with a limit argument (argument of ln tending to 0⁺).",
    marking_points: [
      { marks: 2, description: "States both vertical asymptotes x = 2 and x = −2", keywords: ["x 2 and x 2", "vertical asymptote", "x 2", "x -2"] },
      { marks: 2, description: "Justifies via the limit: x² − 4 → 0⁺ so ln → −∞", keywords: ["approaches 0", "tends to 0", "negative infinity", "ln approaches"] },
    ],
  },
  {
    number: "23", sub_number: "e",
    text: "Describe the shape of the graph of f(x) = ln(x² − 4), referring to your answers above.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Two separate, monotonic branches: the left branch falls from +∞ (as x → −∞) down to −∞ (as x → −2⁻); the right branch rises from −∞ (as x → 2⁺) up to +∞ (as x → ∞); nothing is defined on [−2, 2].",
    marking_notes: "Award marks for describing both branches' overall shape/direction and for noting the excluded middle strip.",
    marking_points: [
      { marks: 2, description: "Describes both branches as monotonic (one decreasing, one increasing)", keywords: ["decreasing", "increasing", "monotonic", "falls", "rises"] },
      { marks: 2, description: "Notes nothing is defined between x = −2 and x = 2", keywords: ["undefined", "excluded", "gap", "no graph between", "not defined"] },
    ],
  },

  {
    number: "24", sub_number: "a",
    text: "Consider the curve x² + xy + y² = 7. Find dy/dx in terms of x and y.",
    marks: 4, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + y + xy' + 2yy' = 0 → y'(x + 2y) = −(2x + y) → y' = −(2x + y)/(x + 2y).",
    marking_notes: "Implicit differentiation with product rule on xy.",
    steps: [{ marks: 4, description: "dy/dx =", options: ["−(2x + y)/(x + 2y)", "(2x + y)/(x + 2y)", "−(x + 2y)/(2x + y)", "−(2x − y)/(x + 2y)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "b",
    text: "For the curve x² + xy + y² = 7, find the coordinates of the point(s) where the tangent line is horizontal.",
    marks: 6, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "y' = 0 when y = −2x; substituting into the curve gives 3x² = 7, so the points are (√21/3, −2√21/3) and (−√21/3, 2√21/3).",
    marking_notes: "Two steps: the substitution condition, then the resulting coordinates.",
    steps: [
      { marks: 2, description: "Horizontal tangent requires:", options: ["y = −2x", "x = −2y", "y = 2x", "x + 2y = 0"], correctIndex: 0 },
      { marks: 4, description: "Points where the tangent is horizontal:", options: ["(√21/3, −2√21/3) and (−√21/3, 2√21/3)", "(√7, −√7) and (−√7, √7)", "(√21/3, 2√21/3) and (−√21/3, −2√21/3)", "(2√21/3, −√21/3) and (−2√21/3, √21/3)"], correctIndex: 0 },
    ],
  },
  {
    number: "24", sub_number: "c",
    text: "For the curve x² + xy + y² = 7, find the coordinates of the point(s) where the tangent line is vertical.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Tangent is vertical when x + 2y = 0, i.e. x = −2y; substituting gives 3y² = 7, so the points are (−2√21/3, √21/3) and (2√21/3, −√21/3).",
    marking_notes: "Full marks for both correct coordinate pairs from the vertical-tangent condition.",
    steps: [{ marks: 5, description: "Points where the tangent is vertical:", options: ["(−2√21/3, √21/3) and (2√21/3, −√21/3)", "(√21/3, −2√21/3) and (−√21/3, 2√21/3)", "(2√21/3, √21/3) and (−2√21/3, −√21/3)", "(√7, −√7) and (−√7, √7)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "d",
    text: "Verify that (1, 2) lies on the curve x² + xy + y² = 7, and find the equation of the tangent line there.",
    marks: 6, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "1 + 2 + 4 = 7 ✓. At (1,2): y' = −(2+2)/(1+4) = −4/5. Tangent: y − 2 = −4/5(x − 1), i.e. y = −4/5 x + 14/5.",
    marking_notes: "Two steps: the slope at the point, then the tangent line equation.",
    steps: [
      { marks: 2, description: "Slope of the tangent at (1, 2):", options: ["−4/5", "4/5", "−5/4", "−4"], correctIndex: 0 },
      { marks: 4, description: "Equation of the tangent line:", options: ["y = −4/5 x + 14/5", "y = 4/5 x + 6/5", "y = −4/5 x + 2", "y = −5/4 x + 13/4"], correctIndex: 0 },
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
