// Fifth practice paper (not a real past exam) in the same "AP Calculus AB"
// format as the A/B/C/D practice papers — same scope (curve sketching,
// log/e equation solving, differentiation incl. implicit), same
// 2-hour/88-mark structure, entirely fresh questions. Content and mark
// scheme hand-verified in this session before transcription.
//
// FRQ21 uses x^4 e^(-x^2), which has three critical points (x=0 and
// x=±sqrt(2.5)) unlike Practice D's two-critical-point function — checked
// by hand via the product/chain rule. FRQ24 uses another ellipse
// (x^2 + 2xy + 3y^2 = 24, discriminant B^2-4AC = -8 < 0) so it again has
// real horizontal and vertical tangent points, with different numbers from
// Practice D's ellipse.
//
// Same grading convention as the other practice papers: any part with a
// single concrete answer uses `steps` (stepped-MCQ, exact-match grading);
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
  exam_diet: "Practice E",
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
    text: "If f(x) = ln(4x² + 9), then f'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = 8x/(4x² + 9), by the chain rule.",
    marking_notes: "Chain rule: derivative of the inside over the inside.",
    steps: [{ marks: 1, description: "f'(x) =", options: ["8x / (4x² + 9)", "8x", "1 / (4x² + 9)", "8 / (4x² + 9)"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: null,
    text: "The solution set of e^(2x) − 6e^x + 8 = 0 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Let u = e^x: u² − 6u + 8 = 0 → (u−2)(u−4) = 0 → u = 2 or 4 → x = ln 2 or ln 4.",
    marking_notes: "Substitution u = e^x turns this into a quadratic; both roots must be converted back via ln.",
    steps: [{ marks: 1, description: "Solution set:", options: ["{2, 4}", "{ln 2, ln 4}", "{ln 6, ln 8}", "{−ln 2, −ln 4}"], correctIndex: 1 }],
  },
  {
    number: "3", sub_number: null,
    text: "If x³y + y² = 12, then dy/dx =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "3x²y + x³y' + 2yy' = 0 → y'(x³ + 2y) = −3x²y → y' = −3x²y/(x³ + 2y).",
    marking_notes: "Product rule on x³y, then collect y' terms.",
    steps: [{ marks: 1, description: "dy/dx =", options: ["3x²y / (x³ + 2y)", "−3x²y / (x³ − 2y)", "−3x²y / (x³ + 2y)", "−3xy / (x³ + 2y)"], correctIndex: 2 }],
  },
  {
    number: "4", sub_number: null,
    text: "f(x) = x³ − 12x² + 36x − 5 is decreasing on",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 3x² − 24x + 36 = 3(x−2)(x−6), negative between the roots (upward parabola): (2, 6).",
    marking_notes: "Sign of f' between its roots, since the leading coefficient of f' is positive.",
    steps: [{ marks: 1, description: "Decreasing on:", options: ["(−∞, 2) ∪ (6, ∞)", "(−∞, 6)", "(2, ∞)", "(2, 6)"], correctIndex: 3 }],
  },
  {
    number: "5", sub_number: null,
    text: "The x-coordinate(s) of the inflection point(s) of f(x) = x⁴ − 12x² is/are",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f''(x) = 12x² − 24 = 12(x² − 2), zero and changing sign at x = ±√2 — both are inflection points.",
    marking_notes: "Solve 12x² − 24 = 0 and simplify the surd.",
    steps: [{ marks: 1, description: "Inflection point(s):", options: ["x = ±√2", "x = 0 only", "x = ±2", "x = ±1"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: null,
    text: "If g(x) = e^(4x) / x, then g'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "Quotient rule: g'(x) = [4e^(4x)·x − e^(4x)·1] / x² = e^(4x)(4x − 1) / x².",
    marking_notes: "Quotient rule applied directly.",
    steps: [{ marks: 1, description: "g'(x) =", options: ["e^(4x) / x²", "e^(4x)(4x − 1) / x²", "e^(4x)(4x + 1) / x²", "4e^(4x) / x²"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: null,
    text: "The solution of ln(6x − 5) = 3 is x =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "6x − 5 = e³ → x = (e³ + 5)/6.",
    marking_notes: "Exponentiate both sides, then isolate x.",
    steps: [{ marks: 1, description: "x =", options: ["(e³ − 5) / 6", "e³ / 6", "(e³ + 5) / 6", "(e³ + 5) / 3"], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: null,
    text: "If x² + 25y² = 50, then dy/dx at the point (5, 1) equals",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + 50yy' = 0 → y' = −x/(25y) = −5/25 = −1/5.",
    marking_notes: "Implicit differentiation of an ellipse, then substitute the point.",
    steps: [{ marks: 1, description: "dy/dx at (5, 1):", options: ["1/5", "−1/25", "1/25", "−1/5"], correctIndex: 3 }],
  },
  {
    number: "9", sub_number: null,
    text: "The curve y = x³ − 27x has a local maximum at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "y' = 3x² − 27 = 0 → x = ±3. y'' = 6x: at x = −3, y'' < 0 (local max); at x = 3, y'' > 0 (local min).",
    marking_notes: "Second Derivative Test distinguishes the two critical points.",
    steps: [{ marks: 1, description: "Local maximum at:", options: ["x = −3", "x = 3", "x = 0", "both x = ±3"], correctIndex: 0 }],
  },
  {
    number: "10", sub_number: null,
    text: "d/dx [ ln(x) · e^(5x) ] =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "Product rule: (1/x)e^(5x) + ln(x)·5e^(5x) = e^(5x)(1/x + 5 ln x).",
    marking_notes: "Product rule, with the chain rule inside the second factor's derivative.",
    steps: [{ marks: 1, description: "Derivative:", options: ["5e^(5x) ln x", "e^(5x)(1/x + 5 ln x)", "e^(5x) / x", "e^(5x)(1/x − 5 ln x)"], correctIndex: 1 }],
  },
  {
    number: "11", sub_number: null,
    text: "As x → −∞, the graph of f(x) = e^(4x) / (e^(4x) + 7) has a horizontal asymptote at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "As x → −∞, e^(4x) → 0, so f(x) → 0/7 = 0: horizontal asymptote y = 0.",
    marking_notes: "Behaviour of e^(4x) as x → −∞.",
    steps: [{ marks: 1, description: "Horizontal asymptote:", options: ["y = 1", "none", "y = 0", "y = 1/7"], correctIndex: 2 }],
  },
  {
    number: "12", sub_number: null,
    text: "If h(x) = x^(5x) for x > 0, then h'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Logarithmic differentiation: ln h = 5x ln x → h'/h = 5 ln x + 5 → h' = 5x^(5x)(ln x + 1).",
    marking_notes: "Take ln of both sides first, since the variable is in both the base and exponent.",
    steps: [{ marks: 1, description: "h'(x) =", options: ["5x · x^(5x−1)", "x^(5x) · 5 ln x", "x^(5x)(ln x + 1)", "5x^(5x)(ln x + 1)"], correctIndex: 3 }],
  },

  // ============ SECTION I · PART B — calculator permitted (Q13-20, 1 mark each) ============

  {
    number: "13", sub_number: null,
    text: "To three decimal places, the root of f(x) = ln(x) − 4x + 9 between x = 2 and x = 3 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Numerically, the root is x ≈ 2.477 (f(2.477) ≈ 0).",
    marking_notes: "Calculator numeric solve or repeated bisection.",
    steps: [{ marks: 1, description: "Root ≈", options: ["2.477", "2.303", "2.609", "2.847"], correctIndex: 0 }],
  },
  {
    number: "14", sub_number: null,
    text: "A bacteria culture is modelled by A(t) = 250e^(0.05t). To the nearest hour, when does A reach 1000?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "250e^(0.05t) = 1000 → e^(0.05t) = 4 → t = ln(4)/0.05 ≈ 27.73 ≈ 28 hours.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.05.",
    steps: [{ marks: 1, description: "t ≈", options: ["20 hours", "28 hours", "24 hours", "33 hours"], correctIndex: 1 }],
  },
  {
    number: "15", sub_number: null,
    text: "The absolute maximum value of f(x) = (x − 5)²e^(−x) on [4, 8] is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = e^(−x)(x−5)(7−x) = 0 at x=5,7. f(4)≈0.0183, f(5)=0, f(7)≈0.0037, f(8)≈0.0030 — the maximum is at the endpoint x=4, value ≈0.0183.",
    marking_notes: "Compare critical points and both endpoints — the maximum here occurs at an endpoint, not a critical point.",
    steps: [{ marks: 1, description: "Absolute maximum ≈", options: ["0.0037", "0.0030", "0.0183", "0.0000"], correctIndex: 2 }],
  },
  {
    number: "16", sub_number: null,
    text: "If x³ + 2y³ = xy + 8, the value of dy/dx at the point (2, 1) is closest to",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "3x² + 6y²y' = y + xy' → y' = (y − 3x²)/(6y² − x). At (2,1): (1−12)/(6−2) = −2.75.",
    marking_notes: "Implicit differentiation, then substitute the point (checked: 8+2=2+8=10).",
    steps: [{ marks: 1, description: "dy/dx ≈", options: ["2.75", "−1.83", "1.83", "−2.75"], correctIndex: 3 }],
  },
  {
    number: "17", sub_number: null,
    text: "A cooling object follows T(t) = 20 + 95e^(−0.09t). To the nearest 0.1 minute, when is T = 32?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "32 = 20 + 95e^(−0.09t) → e^(−0.09t) = 12/95 → t = −ln(12/95)/0.09 ≈ 23.0 minutes.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.09.",
    steps: [{ marks: 1, description: "t ≈", options: ["23.0 min", "2.3 min", "34.5 min", "11.5 min"], correctIndex: 0 }],
  },
  {
    number: "18", sub_number: null,
    text: "If y = ln(kx⁵) passes through (1, 7), then, to three decimals, k =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "7 = ln(k·1) → k = e⁷ ≈ 1096.633.",
    marking_notes: "Substitute the point, exponentiate, solve for k.",
    steps: [{ marks: 1, description: "k ≈", options: ["548.317", "1096.633", "148.413", "2193.267"], correctIndex: 1 }],
  },
  {
    number: "19", sub_number: null,
    text: "The number of critical points of f(x) = x⁵e^(−x²) on (−2, 2) is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = x⁴e^(−x²)(5 − 2x²), zero at x = 0 and x = ±√2.5 ≈ ±1.581 — three critical points.",
    marking_notes: "Set f' = 0 and count solutions inside the interval.",
    steps: [{ marks: 1, description: "Number of critical points:", options: ["1", "2", "3", "4"], correctIndex: 2 }],
  },
  {
    number: "20", sub_number: null,
    text: "The maximum value of f(x) = 7 ln(x) − x² for x > 0 is approximately",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 7/x − 2x = 0 → x = √3.5 ≈ 1.871. f(1.871) = 7 ln(1.871) − 3.5 ≈ 0.885.",
    marking_notes: "Set f' = 0, confirm a maximum, evaluate f there.",
    steps: [{ marks: 1, description: "Maximum value ≈", options: ["−0.885", "3.500", "−3.500", "0.885"], correctIndex: 3 }],
  },

  // ============ SECTION II · PART A — calculator permitted, FRQ (30 marks) ============

  {
    number: "21", sub_number: "a",
    text: "Let f(x) = x²e^(−2x). Find f'(x).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "By the product rule, f'(x) = 2xe^(−2x) + x²(−2)e^(−2x) = 2x(1 − x)e^(−2x).",
    marking_notes: "Full marks for the correctly simplified derivative.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["2x(1 − x)e^(−2x)", "2x(1 + x)e^(−2x)", "(2x − 2x²)e^(2x)", "2(1 − x)e^(−2x)"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "b",
    text: "Find the critical points of f(x) = x²e^(−2x) and classify each.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 2x(1−x)e^(−2x) = 0 at x = 0 and x = 1. f' is negative for x<0, positive for 0<x<1, negative for x>1: x=0 is a local minimum, x=1 is a local maximum.",
    marking_notes: "Two steps: locate both critical points, then classify both.",
    steps: [
      { marks: 2, description: "Critical points:", options: ["x = 0 and x = 1", "x = 0 only", "x = 1 only", "x = 0 and x = 2"], correctIndex: 0 },
      { marks: 2, description: "Classification:", options: ["x = 0 local min, x = 1 local max", "x = 0 local max, x = 1 local min", "both local minima", "both are inflection points, not extrema"], correctIndex: 0 },
    ],
  },
  {
    number: "21", sub_number: "c",
    text: "Determine the intervals on which f(x) = x²e^(−2x) is increasing and decreasing.",
    marks: 3, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 2x(1−x)e^(−2x), so f is decreasing on (−∞, 0), increasing on (0, 1), decreasing on (1, ∞).",
    marking_notes: "Sign of f' across the three intervals defined by the critical points.",
    steps: [{ marks: 3, description: "f is:", options: ["increasing on (0, 1), decreasing on (−∞, 0) ∪ (1, ∞)", "decreasing on (0, 1), increasing elsewhere", "increasing everywhere", "decreasing everywhere"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "d",
    text: "Find the x-coordinates of any inflection points of f(x) = x²e^(−2x).",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "f''(x) = e^(−2x)(4x² − 8x + 2) = 0 → 2x² − 4x + 1 = 0 → x = 1 ± √2/2 (≈ 0.293 and 1.707) — both are inflection points.",
    marking_notes: "Full marks for both correctly located inflection points.",
    steps: [{ marks: 5, description: "Inflection points:", options: ["x = 1 ± √2/2 (≈ 0.293, 1.707)", "x = 1 ± √2 (≈ −0.414, 2.414)", "x = 0 and x = 1", "no inflection points exist"], correctIndex: 0 }],
  },

  {
    number: "22", sub_number: "a",
    text: "A signal's strength (in units) at distance x metres is modelled by S(x) = 45 ln(x + 1) − 3.5x, for x ≥ 0. Find S'(x).",
    marks: 2, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "S'(x) = 45/(x + 1) − 3.5.",
    marking_notes: "Direct differentiation.",
    steps: [{ marks: 2, description: "S'(x) =", options: ["45/(x+1) − 3.5", "45/(x+1) + 3.5", "45(x+1) − 3.5", "45/x − 3.5"], correctIndex: 0 }],
  },
  {
    number: "22", sub_number: "b",
    text: "Find the value of x that maximises S(x) = 45 ln(x + 1) − 3.5x, and the maximum signal strength.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "S'(x) = 0 → x ≈ 11.86. S(11.86) = 45 ln(12.86) − 3.5(11.86) ≈ 73.4 units.",
    marking_notes: "Two steps: the critical x-value, then the value evaluated there.",
    steps: [
      { marks: 2, description: "x that maximises S:", options: ["x ≈ 11.86", "x ≈ 12.86", "x ≈ 10.00", "x ≈ 15.00"], correctIndex: 0 },
      { marks: 3, description: "Maximum signal strength:", options: ["≈ 65.0", "≈ 73.4", "≈ 80.0", "≈ 60.0"], correctIndex: 1 },
    ],
  },
  {
    number: "22", sub_number: "c",
    text: "Determine the concavity of S(x) = 45 ln(x + 1) − 3.5x at x ≈ 11.86, and interpret what it means for the signal.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "S''(x) = −45/(x+1)²; S''(11.86) ≈ −0.272 < 0, concave down — confirms a maximum, meaning the signal's rate of gain is slowing as it approaches its peak distance.",
    marking_notes: "Two steps: the concavity conclusion, then the interpretation.",
    steps: [
      { marks: 2, description: "Concavity at x ≈ 11.86:", options: ["Concave down — confirms a maximum", "Concave up — confirms a minimum", "Concave down — confirms a minimum", "Concave up — confirms a maximum"], correctIndex: 0 },
      { marks: 2, description: "What this means for the signal:", options: ["The rate of gain is slowing as the signal approaches its peak", "The rate of gain is accelerating", "Signal strength is constant", "Signal strength is about to spike suddenly"], correctIndex: 0 },
    ],
  },
  {
    number: "22", sub_number: "d",
    text: "Solve S(x) = 0 for x > 0, correct to two decimal places, and interpret the result in context.",
    marks: 4, topicKey: "logs_exponentials", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Solving 45 ln(x+1) − 3.5x = 0 numerically for x > 0 gives x ≈ 50.73 — beyond this distance the linear attenuation term overtakes the logarithmic term and the modelled signal strength would turn negative, i.e. the signal is effectively undetectable beyond this range.",
    marking_notes: "Two steps: the numeric root, then the interpretation.",
    steps: [
      { marks: 2, description: "Root:", options: ["x ≈ 50.73", "x ≈ 45.00", "x ≈ 60.00", "x ≈ 40.00"], correctIndex: 0 },
      { marks: 2, description: "Interpretation:", options: ["Beyond this distance, the signal is effectively undetectable and the model breaks down", "Beyond this distance, the signal is strongest", "This is where the signal first becomes detectable", "This is where the signal's rate of gain is fastest"], correctIndex: 0 },
    ],
  },

  // ============ SECTION II · PART B — no calculator, FRQ (38 marks) ============

  {
    number: "23", sub_number: "a",
    text: "Let f(x) = ln(36 − x²). State the domain of f.",
    marks: 2, topicKey: "curve_sketching", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "36 − x² > 0 → −6 < x < 6: domain is (−6, 6).",
    marking_notes: "Requires the argument of ln to be strictly positive.",
    steps: [{ marks: 2, description: "Domain:", options: ["(−6, 6)", "(−36, 36)", "(0, 6)", "(−6, 0)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "b",
    text: "Find f'(x) for f(x) = ln(36 − x²).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = −2x / (36 − x²), by the chain rule.",
    marking_notes: "Standard chain rule application.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["−2x / (36 − x²)", "2x / (36 − x²)", "−2x / (36 + x²)", "−1 / (36 − x²)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "c",
    text: "Determine the intervals on which f(x) = ln(36 − x²) is increasing and decreasing.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = −2x/(36−x²), with 36−x² > 0 throughout the domain, so the sign of f' matches the sign of −2x: increasing on (−6, 0), decreasing on (0, 6).",
    marking_notes: "Sign of f' on each side of x = 0.",
    steps: [{ marks: 4, description: "f is:", options: ["increasing on (−6, 0), decreasing on (0, 6)", "decreasing on (−6, 0), increasing on (0, 6)", "increasing throughout (−6, 6)", "decreasing throughout (−6, 6)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "d",
    text: "Find the vertical asymptote(s) of f(x) = ln(36 − x²), justifying your answer using limits.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "As x → 6⁻ or x → −6⁺, 36−x² → 0⁺, so ln(36−x²) → −∞: vertical asymptotes at x = 6 and x = −6.",
    marking_notes: "Two steps: the asymptote locations, then the limit justification.",
    steps: [
      { marks: 2, description: "Vertical asymptote(s):", options: ["x = 6 and x = −6", "x = 0 only", "x = 36 and x = −36", "none"], correctIndex: 0 },
      { marks: 2, description: "Justification:", options: ["36 − x² → 0⁺ as x approaches ±6 from inside the domain, so ln → −∞", "36 − x² → ∞, so ln → ∞", "36 − x² → 0⁻, so ln is undefined for a different reason", "The function has no vertical asymptotes"], correctIndex: 0 },
    ],
  },
  {
    number: "23", sub_number: "e",
    text: "Describe the shape of the graph of f(x) = ln(36 − x²), referring to your answers above.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "A single symmetric hump: since f is even, the curve rises from −∞ (as x → −6⁺) to a maximum at x = 0 (f(0) = ln 36), then falls back to −∞ (as x → 6⁻).",
    marking_notes: "Two steps: the overall shape, then the maximum/asymptote behaviour.",
    steps: [
      { marks: 2, description: "Overall shape:", options: ["A single symmetric hump (even function)", "Two separate monotonic branches", "An always-increasing curve", "An always-decreasing curve"], correctIndex: 0 },
      { marks: 2, description: "Behaviour at the maximum and asymptotes:", options: ["Rises to a maximum at x = 0, then falls to −∞ at both x = ±6", "Falls to a minimum at x = 0, then rises to +∞ at both x = ±6", "Rises to a maximum at x = 0 with no asymptotes", "Falls continuously from x = −6 to x = 6"], correctIndex: 0 },
    ],
  },

  {
    number: "24", sub_number: "a",
    text: "Consider the curve x² + 2xy + 3y² = 24. Find dy/dx in terms of x and y.",
    marks: 4, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + 2y + 2xy' + 6yy' = 0 → y'(2x + 6y) = −(2x + 2y) → y' = −(x + y)/(x + 3y).",
    marking_notes: "Implicit differentiation with product rule on 2xy.",
    steps: [{ marks: 4, description: "dy/dx =", options: ["−(x + y)/(x + 3y)", "(x + y)/(x + 3y)", "−(x + 3y)/(x + y)", "−(x − y)/(x + 3y)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "b",
    text: "For the curve x² + 2xy + 3y² = 24, find the coordinates of the point(s) where the tangent line is horizontal.",
    marks: 6, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "y' = 0 when y = −x; substituting into the curve gives 2x² = 24, so x = ±2√3, giving the points (2√3, −2√3) and (−2√3, 2√3).",
    marking_notes: "Two steps: the substitution condition, then the resulting coordinates.",
    steps: [
      { marks: 2, description: "Horizontal tangent requires:", options: ["y = −x", "x = 2y", "y = x/2", "x + 3y = 0"], correctIndex: 0 },
      { marks: 4, description: "Points where the tangent is horizontal:", options: ["(2√3, −2√3) and (−2√3, 2√3)", "(√24, √24) and (−√24, −√24)", "(2√3, 2√3) and (−2√3, −2√3)", "(4√3, −4√3) and (−4√3, 4√3)"], correctIndex: 0 },
    ],
  },
  {
    number: "24", sub_number: "c",
    text: "For the curve x² + 2xy + 3y² = 24, find the coordinates of the point(s) where the tangent line is vertical.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Tangent is vertical when x = −3y; substituting gives 6y² = 24, so y = ±2, giving the points (−6, 2) and (6, −2).",
    marking_notes: "Full marks for both correct coordinate pairs from the vertical-tangent condition.",
    steps: [{ marks: 5, description: "Points where the tangent is vertical:", options: ["(−6, 2) and (6, −2)", "(6, 2) and (−6, −2)", "(−2, 6) and (2, −6)", "(−3, 1) and (3, −1)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "d",
    text: "Verify that (2, 2) lies on the curve x² + 2xy + 3y² = 24, and find the equation of the tangent line there.",
    marks: 6, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "4 + 8 + 12 = 24 ✓. At (2,2): y' = −(2+2)/(2+6) = −4/8 = −0.5. Tangent: y − 2 = −0.5(x − 2), i.e. y = −0.5x + 3.",
    marking_notes: "Two steps: the slope at the point, then the tangent line equation.",
    steps: [
      { marks: 2, description: "Slope of the tangent at (2, 2):", options: ["−0.5", "0.5", "−2", "2"], correctIndex: 0 },
      { marks: 4, description: "Equation of the tangent line:", options: ["y = −0.5x + 3", "y = 0.5x + 1", "y = −0.5x + 2", "y = −2x + 6"], correctIndex: 0 },
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
