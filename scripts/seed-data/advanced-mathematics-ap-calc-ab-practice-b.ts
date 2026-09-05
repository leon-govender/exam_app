// Second practice paper (not a real past exam) in the same "AP Calculus AB"
// format as advanced-mathematics-ap-calc-ab.ts — same scope (curve
// sketching, log/e equation solving, differentiation incl. implicit),
// same 2-hour/88-mark structure, entirely fresh questions. Content and mark
// scheme hand-verified in this session before transcription. Same year as
// the first paper (2026); distinguished as "Practice B" vs "Practice A" via
// exam_diet, since neither is tied to a real exam sitting and a fake future
// year would be misleading.
//
// Same grading convention as the first paper: any part with a single
// concrete answer uses `steps` (stepped-MCQ, exact-match grading);
// `marking_points` (free text) is reserved for written interpretation.

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
  exam_diet: "Practice B",
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
    text: "If f(x) = ln(x² + 4), then f'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = 2x/(x² + 4), by the chain rule.",
    marking_notes: "Chain rule: derivative of the inside over the inside.",
    steps: [{ marks: 1, description: "f'(x) =", options: ["2x / (x² + 4)", "2x", "1 / (x² + 4)", "2 / (x² + 4)"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: null,
    text: "The solution set of e^(2x) − 7e^x + 10 = 0 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Let u = e^x: u² − 7u + 10 = 0 → (u−2)(u−5) = 0 → u = 2 or 5 → x = ln 2 or ln 5.",
    marking_notes: "Substitution u = e^x turns this into a quadratic; both roots must be converted back via ln.",
    steps: [{ marks: 1, description: "Solution set:", options: ["{2, 5}", "{ln 2, ln 5}", "{ln 7, ln 10}", "{−ln 2, −ln 5}"], correctIndex: 1 }],
  },
  {
    number: "3", sub_number: null,
    text: "If x²y − y³ = 8, then dy/dx =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2xy + x²y' − 3y²y' = 0 → y'(x² − 3y²) = −2xy → y' = 2xy/(3y² − x²).",
    marking_notes: "Product rule on x²y, then collect y' terms.",
    steps: [{ marks: 1, description: "dy/dx =", options: ["−2xy / (3y² − x²)", "2xy / (3y² + x²)", "2xy / (3y² − x²)", "−2xy / (3y² + x²)"], correctIndex: 2 }],
  },
  {
    number: "4", sub_number: null,
    text: "f(x) = x³ − 3x² − 9x + 5 is decreasing on",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 3x² − 6x − 9 = 3(x−3)(x+1), negative between the roots (upward parabola): (−1, 3).",
    marking_notes: "Sign of f' between its roots, since the leading coefficient of f' is positive.",
    steps: [{ marks: 1, description: "Decreasing on:", options: ["(−∞, −1) ∪ (3, ∞)", "(−∞, 3)", "(−1, ∞)", "(−1, 3)"], correctIndex: 3 }],
  },
  {
    number: "5", sub_number: null,
    text: "The x-coordinate(s) of the inflection point(s) of f(x) = x⁴ − 6x² is/are",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f''(x) = 12x² − 12 = 12(x−1)(x+1), zero and changing sign at x = ±1 — both are inflection points.",
    marking_notes: "Both roots of f'' are simple roots, so both are genuine sign changes.",
    steps: [{ marks: 1, description: "Inflection point(s):", options: ["x = −1 and x = 1", "x = 0 only", "x = 1 only", "x = 0 and x = 1"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: null,
    text: "If g(x) = e^x / x, then g'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "Quotient rule: g'(x) = [e^x·x − e^x·1] / x² = e^x(x − 1) / x².",
    marking_notes: "Quotient rule applied directly.",
    steps: [{ marks: 1, description: "g'(x) =", options: ["e^x / x²", "e^x(x − 1) / x²", "e^x(x + 1) / x²", "e^x · x"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: null,
    text: "The solution of ln(3x + 2) = 4 is x =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "3x + 2 = e⁴ → x = (e⁴ − 2)/3.",
    marking_notes: "Exponentiate both sides, then isolate x.",
    steps: [{ marks: 1, description: "x =", options: ["(e⁴ + 2) / 3", "e⁴ / 3", "(e⁴ − 2) / 3", "(e⁴ − 2) / 4"], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: null,
    text: "If x² + 4y² = 16, then dy/dx at the point (2, √3) equals",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + 8yy' = 0 → y' = −x/(4y) = −2/(4√3) = −1/(2√3).",
    marking_notes: "Implicit differentiation of an ellipse, then substitute the point.",
    steps: [{ marks: 1, description: "dy/dx at (2, √3):", options: ["1 / (2√3)", "−2 / √3", "−√3 / 2", "−1 / (2√3)"], correctIndex: 3 }],
  },
  {
    number: "9", sub_number: null,
    text: "The curve y = x³ − 12x has a local minimum at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "y' = 3x² − 12 = 0 → x = ±2. y'' = 6x: at x = 2, y'' > 0 (local min); at x = −2, y'' < 0 (local max).",
    marking_notes: "Second Derivative Test distinguishes the two critical points.",
    steps: [{ marks: 1, description: "Local minimum at:", options: ["x = 2", "x = −2", "x = 0", "both x = −2 and x = 2"], correctIndex: 0 }],
  },
  {
    number: "10", sub_number: null,
    text: "d/dx [ ln(x) · e^(2x) ] =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "Product rule: (1/x)e^(2x) + ln(x)·2e^(2x) = e^(2x)(1/x + 2 ln x).",
    marking_notes: "Product rule, with the chain rule inside the second factor's derivative.",
    steps: [{ marks: 1, description: "Derivative:", options: ["2e^(2x) ln x", "e^(2x)(1/x + 2 ln x)", "e^(2x) / x", "e^(2x)(1/x − 2 ln x)"], correctIndex: 1 }],
  },
  {
    number: "11", sub_number: null,
    text: "As x → −∞, the graph of f(x) = e^x / (e^x + 1) has a horizontal asymptote at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "As x → −∞, e^x → 0, so f(x) → 0/(0+1) = 0: horizontal asymptote y = 0.",
    marking_notes: "Behaviour of e^x as x → −∞.",
    steps: [{ marks: 1, description: "Horizontal asymptote:", options: ["y = 1", "none", "y = 0", "y = 1/2"], correctIndex: 2 }],
  },
  {
    number: "12", sub_number: null,
    text: "If h(x) = x^(2x) for x > 0, then h'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Logarithmic differentiation: ln h = 2x ln x → h'/h = 2 ln x + 2 → h' = 2x^(2x)(ln x + 1).",
    marking_notes: "Take ln of both sides first, since the variable is in both the base and exponent.",
    steps: [{ marks: 1, description: "h'(x) =", options: ["2x · x^(2x−1)", "x^(2x) · 2 ln x", "x^(2x)(ln x + 1)", "2x^(2x)(ln x + 1)"], correctIndex: 3 }],
  },

  // ============ SECTION I · PART B — calculator permitted (Q13-20, 1 mark each) ============

  {
    number: "13", sub_number: null,
    text: "To three decimal places, the root of f(x) = ln(x) − x + 3 between x = 4 and x = 5 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Numerically, the root is x ≈ 4.505 (f(4.505) ≈ 0).",
    marking_notes: "Calculator numeric solve or repeated bisection.",
    steps: [{ marks: 1, description: "Root ≈", options: ["4.505", "4.386", "4.609", "4.792"], correctIndex: 0 }],
  },
  {
    number: "14", sub_number: null,
    text: "A radioactive sample decays as A(t) = 200e^(−0.05t). To the nearest hour, when does A reach 50?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "200e^(−0.05t) = 50 → e^(−0.05t) = 0.25 → t = −ln(0.25)/0.05 ≈ 27.73 ≈ 28 hours.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.05.",
    steps: [{ marks: 1, description: "t ≈", options: ["20 hours", "28 hours", "25 hours", "35 hours"], correctIndex: 1 }],
  },
  {
    number: "15", sub_number: null,
    text: "The absolute maximum value of f(x) = (x − 2)²e^(−x) on [1, 5] is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = e^(−x)(x−2)(4−x) = 0 at x=2,4. f(1)≈0.368, f(2)=0, f(4)≈0.073, f(5)≈0.061 — the maximum is at the endpoint x=1, value ≈0.368.",
    marking_notes: "Compare critical points and both endpoints — the maximum here occurs at an endpoint, not a critical point.",
    steps: [{ marks: 1, description: "Absolute maximum ≈", options: ["0.073", "0.061", "0.368", "0.000"], correctIndex: 2 }],
  },
  {
    number: "16", sub_number: null,
    text: "If x³ + y³ = 9xy, the value of dy/dx at the point (2, 4) is closest to",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "3x² + 3y²y' = 9y + 9xy' → y' = (3y − x²)/(y² − 3x). At (2,4): (12−4)/(16−6) = 0.8.",
    marking_notes: "Implicit differentiation of the folium-style curve, then substitute the point.",
    steps: [{ marks: 1, description: "dy/dx ≈", options: ["−0.8", "1.25", "−1.25", "0.8"], correctIndex: 3 }],
  },
  {
    number: "17", sub_number: null,
    text: "A cooling object follows T(t) = 20 + 80e^(−0.15t). To the nearest 0.1 minute, when is T = 30?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "30 = 20 + 80e^(−0.15t) → e^(−0.15t) = 0.125 → t = −ln(0.125)/0.15 ≈ 13.9 minutes.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.15.",
    steps: [{ marks: 1, description: "t ≈", options: ["13.9 min", "2.1 min", "20.8 min", "6.9 min"], correctIndex: 0 }],
  },
  {
    number: "18", sub_number: null,
    text: "If y = ln(kx²) passes through (1, 4), then, to three decimals, k =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "4 = ln(k·1) → k = e⁴ ≈ 54.598.",
    marking_notes: "Substitute the point, exponentiate, solve for k.",
    steps: [{ marks: 1, description: "k ≈", options: ["27.299", "54.598", "7.389", "109.196"], correctIndex: 1 }],
  },
  {
    number: "19", sub_number: null,
    text: "The number of critical points of f(x) = x²e^(−x²) on (−2, 2) is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 2xe^(−x²)(1 − x²), zero at x = 0 and x = ±1 — three critical points.",
    marking_notes: "Set f' = 0 and count solutions inside the interval.",
    steps: [{ marks: 1, description: "Number of critical points:", options: ["1", "2", "3", "4"], correctIndex: 2 }],
  },
  {
    number: "20", sub_number: null,
    text: "The maximum value of f(x) = 3 ln(x) − x² for x > 0 is approximately",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 3/x − 2x = 0 → x = √1.5 ≈ 1.2247. f(1.2247) = 3 ln(1.2247) − 1.5 ≈ −0.892.",
    marking_notes: "Set f' = 0, confirm a maximum, evaluate f there.",
    steps: [{ marks: 1, description: "Maximum value ≈", options: ["0.892", "1.500", "−1.500", "−0.892"], correctIndex: 3 }],
  },

  // ============ SECTION II · PART A — calculator permitted, FRQ (30 marks) ============

  {
    number: "21", sub_number: "a",
    text: "Let f(x) = ln(x) / x² for x > 0. Find f'(x).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "By the quotient rule, f'(x) = [(1/x)x² − ln(x)·2x] / x⁴ = (1 − 2 ln x) / x³.",
    marking_notes: "Full marks for the correctly simplified derivative.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["(1 − 2 ln x) / x³", "(1 + 2 ln x) / x³", "(2 ln x − 1) / x³", "−2 ln x / x³"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "b",
    text: "Find the critical point of f(x) = ln(x)/x² and classify it using the Second Derivative Test.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 0 at x = √e ≈ 1.6487. f''(x) = (6 ln x − 5)/x⁴; at x = √e, f'' = 3 − 5 = −2 < 0 → local maximum.",
    marking_notes: "Two steps: locate the critical point, then classify using the sign of f''.",
    steps: [
      { marks: 2, description: "Critical point:", options: ["x = √e ≈ 1.6487", "x = e ≈ 2.718", "x = 1", "x = √e / 2 ≈ 0.824"], correctIndex: 0 },
      { marks: 2, description: "Classification:", options: ["local maximum", "local minimum", "inflection point, not extremum", "cannot be determined"], correctIndex: 0 },
    ],
  },
  {
    number: "21", sub_number: "c",
    text: "Determine the intervals on which f(x) = ln(x)/x² is increasing and decreasing.",
    marks: 3, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = (1 − 2 ln x)/x³ > 0 when x < √e: increasing on (0, √e), decreasing on (√e, ∞).",
    marking_notes: "Sign of f' either side of the critical point.",
    steps: [{ marks: 3, description: "f is:", options: ["increasing on (0, √e), decreasing on (√e, ∞)", "decreasing on (0, √e), increasing on (√e, ∞)", "increasing on all of (0, ∞)", "decreasing on all of (0, ∞)"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "d",
    text: "Find the x-coordinate of any inflection point of f(x) = ln(x)/x².",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "f''(x) = (6 ln x − 5)/x⁴ = 0 → ln x = 5/6 → x = e^(5/6) ≈ 2.301.",
    marking_notes: "Full marks for the correctly located inflection point.",
    steps: [{ marks: 5, description: "Inflection point:", options: ["x = e^(5/6) ≈ 2.301", "x = e^(1/2) ≈ 1.649", "x = e ≈ 2.718", "x = e^(5/3) ≈ 5.29"], correctIndex: 0 }],
  },

  {
    number: "22", sub_number: "a",
    text: "The value of an investment (in thousands of rand) after x years is V(x) = 50 + 30 ln(x + 1) − 2x, for x ≥ 0. Find V'(x).",
    marks: 2, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "V'(x) = 30/(x + 1) − 2.",
    marking_notes: "Direct differentiation.",
    steps: [{ marks: 2, description: "V'(x) =", options: ["30/(x+1) − 2", "30/(x+1) + 2", "30(x+1) − 2", "30/x − 2"], correctIndex: 0 }],
  },
  {
    number: "22", sub_number: "b",
    text: "Find the value of x that maximises V(x) = 50 + 30 ln(x + 1) − 2x, and the maximum value to the nearest thousand rand.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "V'(x) = 0 → x = 14. V(14) = 50 + 30 ln 15 − 28 ≈ 103.25 → maximum value ≈ R103 000.",
    marking_notes: "Two steps: the critical x-value, then the value evaluated there.",
    steps: [
      { marks: 2, description: "x that maximises V:", options: ["x = 14", "x = 15", "x = 10", "x = 20"], correctIndex: 0 },
      { marks: 3, description: "Maximum value (nearest R1000):", options: ["≈ R110 000", "≈ R103 000", "≈ R95 000", "≈ R120 000"], correctIndex: 1 },
    ],
  },
  {
    number: "22", sub_number: "c",
    text: "Determine the concavity of V(x) = 50 + 30 ln(x + 1) − 2x at x = 14, and interpret what it means for the investment.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "V''(x) = −30/(x+1)²; V''(14) ≈ −0.133 < 0, concave down — confirms a maximum, meaning the investment's growth rate is slowing (diminishing returns) as x increases toward this point.",
    marking_notes: "Two steps: the concavity conclusion, then the interpretation.",
    steps: [
      { marks: 2, description: "Concavity at x = 14:", options: ["Concave down — confirms a maximum", "Concave up — confirms a minimum", "Concave down — confirms a minimum", "Concave up — confirms a maximum"], correctIndex: 0 },
      { marks: 2, description: "What this means for the investment:", options: ["Growth is slowing (diminishing returns) as x increases toward this point", "Growth is accelerating as x increases", "Value is constant at this x", "Value is about to fall sharply"], correctIndex: 0 },
    ],
  },
  {
    number: "22", sub_number: "d",
    text: "Solve V(x) = 0 for x > 0, correct to two decimal places, and interpret the result in context.",
    marks: 4, topicKey: "logs_exponentials", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Solving 50 + 30 ln(x+1) − 2x = 0 numerically for x > 0 gives x ≈ 93.18 — beyond this point, the linear decay term overtakes the logarithmic growth term and the modelled value would turn negative.",
    marking_notes: "Two steps: the numeric root, then the interpretation.",
    steps: [
      { marks: 2, description: "Root:", options: ["x ≈ 93.18", "x ≈ 85.00", "x ≈ 100.00", "x ≈ 75.00"], correctIndex: 0 },
      { marks: 2, description: "Interpretation:", options: ["Beyond this point, the modelled value turns negative", "Beyond this point, the value is maximised", "This is where the investment breaks even on cost", "This is where growth is fastest"], correctIndex: 0 },
    ],
  },

  // ============ SECTION II · PART B — no calculator, FRQ (38 marks) ============

  {
    number: "23", sub_number: "a",
    text: "Let f(x) = ln(9 − x²). State the domain of f.",
    marks: 2, topicKey: "curve_sketching", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "9 − x² > 0 → −3 < x < 3: domain is (−3, 3).",
    marking_notes: "Requires the argument of ln to be strictly positive.",
    steps: [{ marks: 2, description: "Domain:", options: ["(−3, 3)", "(−9, 9)", "(0, 3)", "(−3, 0)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "b",
    text: "Find f'(x) for f(x) = ln(9 − x²).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = −2x / (9 − x²), by the chain rule.",
    marking_notes: "Standard chain rule application.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["−2x / (9 − x²)", "2x / (9 − x²)", "−2x / (9 + x²)", "−1 / (9 − x²)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "c",
    text: "Determine the intervals on which f(x) = ln(9 − x²) is increasing and decreasing.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = −2x/(9−x²), with 9−x² > 0 throughout the domain, so the sign of f' matches the sign of −2x: increasing on (−3, 0), decreasing on (0, 3).",
    marking_notes: "Sign of f' on each side of x = 0.",
    steps: [{ marks: 4, description: "f is:", options: ["increasing on (−3, 0), decreasing on (0, 3)", "decreasing on (−3, 0), increasing on (0, 3)", "increasing throughout (−3, 3)", "decreasing throughout (−3, 3)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "d",
    text: "Find the vertical asymptote(s) of f(x) = ln(9 − x²), justifying your answer using limits.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "As x → 3⁻ or x → −3⁺, 9−x² → 0⁺, so ln(9−x²) → −∞: vertical asymptotes at x = 3 and x = −3.",
    marking_notes: "Two steps: the asymptote locations, then the limit justification.",
    steps: [
      { marks: 2, description: "Vertical asymptote(s):", options: ["x = 3 and x = −3", "x = 0 only", "x = 9 and x = −9", "none"], correctIndex: 0 },
      { marks: 2, description: "Justification:", options: ["9 − x² → 0⁺ as x approaches ±3 from inside the domain, so ln → −∞", "9 − x² → ∞, so ln → ∞", "9 − x² → 0⁻, so ln is undefined for a different reason", "The function has no vertical asymptotes"], correctIndex: 0 },
    ],
  },
  {
    number: "23", sub_number: "e",
    text: "Describe the shape of the graph of f(x) = ln(9 − x²), referring to your answers above.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "A single symmetric hump: since f is even, the curve rises from −∞ (as x → −3⁺) to a maximum at x = 0 (f(0) = ln 9), then falls back to −∞ (as x → 3⁻).",
    marking_notes: "Two steps: the overall shape, then the maximum/asymptote behaviour.",
    steps: [
      { marks: 2, description: "Overall shape:", options: ["A single symmetric hump (even function)", "Two separate monotonic branches", "An always-increasing curve", "An always-decreasing curve"], correctIndex: 0 },
      { marks: 2, description: "Behaviour at the maximum and asymptotes:", options: ["Rises to a maximum at x = 0, then falls to −∞ at both x = ±3", "Falls to a minimum at x = 0, then rises to +∞ at both x = ±3", "Rises to a maximum at x = 0 with no asymptotes", "Falls continuously from x = −3 to x = 3"], correctIndex: 0 },
    ],
  },

  {
    number: "24", sub_number: "a",
    text: "Consider the curve x² − xy + y² = 3. Find dy/dx in terms of x and y.",
    marks: 4, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x − y − xy' + 2yy' = 0 → y'(2y − x) = y − 2x → y' = (y − 2x)/(2y − x).",
    marking_notes: "Implicit differentiation with product rule on xy.",
    steps: [{ marks: 4, description: "dy/dx =", options: ["(y − 2x)/(2y − x)", "(2x − y)/(2y − x)", "(y − 2x)/(x − 2y)", "(2y − x)/(y − 2x)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "b",
    text: "For the curve x² − xy + y² = 3, find the coordinates of the point(s) where the tangent line is horizontal.",
    marks: 6, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "y' = 0 when y = 2x; substituting into the curve gives 3x² = 3, so x = ±1, giving the points (1, 2) and (−1, −2).",
    marking_notes: "Two steps: the substitution condition, then the resulting coordinates.",
    steps: [
      { marks: 2, description: "Horizontal tangent requires:", options: ["y = 2x", "x = 2y", "y = −2x", "x + 2y = 0"], correctIndex: 0 },
      { marks: 4, description: "Points where the tangent is horizontal:", options: ["(1, 2) and (−1, −2)", "(2, 1) and (−2, −1)", "(1, −2) and (−1, 2)", "(√3, 0) and (−√3, 0)"], correctIndex: 0 },
    ],
  },
  {
    number: "24", sub_number: "c",
    text: "For the curve x² − xy + y² = 3, find the coordinates of the point(s) where the tangent line is vertical.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Tangent is vertical when x = 2y; substituting gives 3y² = 3, so y = ±1, giving the points (2, 1) and (−2, −1).",
    marking_notes: "Full marks for both correct coordinate pairs from the vertical-tangent condition.",
    steps: [{ marks: 5, description: "Points where the tangent is vertical:", options: ["(2, 1) and (−2, −1)", "(1, 2) and (−1, −2)", "(2, −1) and (−2, 1)", "(0, √3) and (0, −√3)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "d",
    text: "Verify that (1, 2) lies on the curve x² − xy + y² = 3, and find the equation of the tangent line there.",
    marks: 6, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "1 − 2 + 4 = 3 ✓. At (1,2): y' = (2−2)/(4−1) = 0. Since (1,2) is one of the horizontal-tangent points from part (b), the tangent line is y = 2.",
    marking_notes: "Two steps: the slope at the point, then the tangent line equation.",
    steps: [
      { marks: 2, description: "Slope of the tangent at (1, 2):", options: ["0", "undefined", "1", "−1"], correctIndex: 0 },
      { marks: 4, description: "Equation of the tangent line:", options: ["y = 2", "x = 1", "y = 2x", "y = 1"], correctIndex: 0 },
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
