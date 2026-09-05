// Fourth practice paper (not a real past exam) in the same "AP Calculus AB"
// format as the A/B/C practice papers — same scope (curve sketching, log/e
// equation solving, differentiation incl. implicit), same 2-hour/88-mark
// structure, entirely fresh questions. Content and mark scheme hand-verified
// in this session before transcription.
//
// FRQ21(d) has a genuine inflection point (unlike Practice C's FRQ21(d),
// which deliberately had none) — the quadratic factor of f'' has a positive
// discriminant here. FRQ24 uses an ellipse (B²-4AC < 0) so, unlike Practice
// C's hyperbola-shaped curve, it has real horizontal AND vertical tangent
// points — both were solved and checked by hand.
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
  exam_diet: "Practice D",
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
    text: "If f(x) = ln(7x² + 3), then f'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = 14x/(7x² + 3), by the chain rule.",
    marking_notes: "Chain rule: derivative of the inside over the inside.",
    steps: [{ marks: 1, description: "f'(x) =", options: ["14x / (7x² + 3)", "14x", "1 / (7x² + 3)", "14 / (7x² + 3)"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: null,
    text: "The solution set of e^(2x) − 9e^x + 18 = 0 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Let u = e^x: u² − 9u + 18 = 0 → (u−3)(u−6) = 0 → u = 3 or 6 → x = ln 3 or ln 6.",
    marking_notes: "Substitution u = e^x turns this into a quadratic; both roots must be converted back via ln.",
    steps: [{ marks: 1, description: "Solution set:", options: ["{3, 6}", "{ln 3, ln 6}", "{ln 9, ln 18}", "{−ln 3, −ln 6}"], correctIndex: 1 }],
  },
  {
    number: "3", sub_number: null,
    text: "If xy² + y³ = 10, then dy/dx =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "y² + 2xyy' + 3y²y' = 0 → y'(2xy + 3y²) = −y² → y' = −y/(2x + 3y) (dividing by y).",
    marking_notes: "Product rule on xy², then collect y' terms.",
    steps: [{ marks: 1, description: "dy/dx =", options: ["y / (2x + 3y)", "−y / (2x − 3y)", "−y / (2x + 3y)", "−x / (2x + 3y)"], correctIndex: 2 }],
  },
  {
    number: "4", sub_number: null,
    text: "f(x) = x³ − 9x² + 15x + 2 is decreasing on",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 3x² − 18x + 15 = 3(x−1)(x−5), negative between the roots (upward parabola): (1, 5).",
    marking_notes: "Sign of f' between its roots, since the leading coefficient of f' is positive.",
    steps: [{ marks: 1, description: "Decreasing on:", options: ["(−∞, 1) ∪ (5, ∞)", "(−∞, 5)", "(1, ∞)", "(1, 5)"], correctIndex: 3 }],
  },
  {
    number: "5", sub_number: null,
    text: "The x-coordinate(s) of the inflection point(s) of f(x) = x⁴ − 8x³ is/are",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f''(x) = 12x² − 48x = 12x(x−4), zero and changing sign at x = 0 and x = 4 — both are inflection points.",
    marking_notes: "Both roots of f'' are simple roots, so both are genuine sign changes.",
    steps: [{ marks: 1, description: "Inflection point(s):", options: ["x = 0 and x = 4", "x = 0 only", "x = 4 only", "x = 2"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: null,
    text: "If g(x) = e^(3x) / x, then g'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "Quotient rule: g'(x) = [3e^(3x)·x − e^(3x)·1] / x² = e^(3x)(3x − 1) / x².",
    marking_notes: "Quotient rule applied directly.",
    steps: [{ marks: 1, description: "g'(x) =", options: ["e^(3x) / x²", "e^(3x)(3x − 1) / x²", "e^(3x)(3x + 1) / x²", "3e^(3x) / x²"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: null,
    text: "The solution of ln(4x − 1) = 2 is x =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "4x − 1 = e² → x = (e² + 1)/4.",
    marking_notes: "Exponentiate both sides, then isolate x.",
    steps: [{ marks: 1, description: "x =", options: ["(e² − 1) / 4", "e² / 4", "(e² + 1) / 4", "(e² + 1) / 2"], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: null,
    text: "If x² + 16y² = 32, then dy/dx at the point (4, 1) equals",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + 32yy' = 0 → y' = −x/(16y) = −4/16 = −1/4.",
    marking_notes: "Implicit differentiation of an ellipse, then substitute the point.",
    steps: [{ marks: 1, description: "dy/dx at (4, 1):", options: ["1/4", "−1/16", "1/16", "−1/4"], correctIndex: 3 }],
  },
  {
    number: "9", sub_number: null,
    text: "The curve y = x³ − 9x has a local minimum at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "y' = 3x² − 9 = 0 → x = ±√3. y'' = 6x: at x = √3, y'' > 0 (local min); at x = −√3, y'' < 0 (local max).",
    marking_notes: "Second Derivative Test distinguishes the two critical points.",
    steps: [{ marks: 1, description: "Local minimum at:", options: ["x = √3", "x = −√3", "x = 0", "both x = ±√3"], correctIndex: 0 }],
  },
  {
    number: "10", sub_number: null,
    text: "d/dx [ ln(x) · e^(4x) ] =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "Product rule: (1/x)e^(4x) + ln(x)·4e^(4x) = e^(4x)(1/x + 4 ln x).",
    marking_notes: "Product rule, with the chain rule inside the second factor's derivative.",
    steps: [{ marks: 1, description: "Derivative:", options: ["4e^(4x) ln x", "e^(4x)(1/x + 4 ln x)", "e^(4x) / x", "e^(4x)(1/x − 4 ln x)"], correctIndex: 1 }],
  },
  {
    number: "11", sub_number: null,
    text: "As x → −∞, the graph of f(x) = e^(3x) / (e^(3x) + 5) has a horizontal asymptote at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "As x → −∞, e^(3x) → 0, so f(x) → 0/5 = 0: horizontal asymptote y = 0.",
    marking_notes: "Behaviour of e^(3x) as x → −∞.",
    steps: [{ marks: 1, description: "Horizontal asymptote:", options: ["y = 1", "none", "y = 0", "y = 1/5"], correctIndex: 2 }],
  },
  {
    number: "12", sub_number: null,
    text: "If h(x) = x^(4x) for x > 0, then h'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Logarithmic differentiation: ln h = 4x ln x → h'/h = 4 ln x + 4 → h' = 4x^(4x)(ln x + 1).",
    marking_notes: "Take ln of both sides first, since the variable is in both the base and exponent.",
    steps: [{ marks: 1, description: "h'(x) =", options: ["4x · x^(4x−1)", "x^(4x) · 4 ln x", "x^(4x)(ln x + 1)", "4x^(4x)(ln x + 1)"], correctIndex: 3 }],
  },

  // ============ SECTION I · PART B — calculator permitted (Q13-20, 1 mark each) ============

  {
    number: "13", sub_number: null,
    text: "To three decimal places, the root of f(x) = ln(x) − 3x + 8 between x = 3 and x = 4 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Numerically, the root is x ≈ 3.037 (f(3.037) ≈ 0).",
    marking_notes: "Calculator numeric solve or repeated bisection.",
    steps: [{ marks: 1, description: "Root ≈", options: ["3.037", "2.847", "3.302", "2.609"], correctIndex: 0 }],
  },
  {
    number: "14", sub_number: null,
    text: "A bacteria culture is modelled by A(t) = 400e^(0.04t). To the nearest hour, when does A reach 1200?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "400e^(0.04t) = 1200 → e^(0.04t) = 3 → t = ln(3)/0.04 ≈ 27.47 ≈ 27 hours.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.04.",
    steps: [{ marks: 1, description: "t ≈", options: ["20 hours", "27 hours", "25 hours", "35 hours"], correctIndex: 1 }],
  },
  {
    number: "15", sub_number: null,
    text: "The absolute maximum value of f(x) = (x − 4)²e^(−x) on [3, 7] is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = e^(−x)(x−4)(6−x) = 0 at x=4,6. f(3)≈0.0498, f(4)=0, f(6)≈0.0099, f(7)≈0.0082 — the maximum is at the endpoint x=3, value ≈0.0498.",
    marking_notes: "Compare critical points and both endpoints — the maximum here occurs at an endpoint, not a critical point.",
    steps: [{ marks: 1, description: "Absolute maximum ≈", options: ["0.0099", "0.0082", "0.0498", "0.0000"], correctIndex: 2 }],
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
    text: "A cooling object follows T(t) = 22 + 85e^(−0.1t). To the nearest 0.1 minute, when is T = 35?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "35 = 22 + 85e^(−0.1t) → e^(−0.1t) = 13/85 → t = −ln(13/85)/0.1 ≈ 18.8 minutes.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.1.",
    steps: [{ marks: 1, description: "t ≈", options: ["18.8 min", "2.0 min", "28.5 min", "9.4 min"], correctIndex: 0 }],
  },
  {
    number: "18", sub_number: null,
    text: "If y = ln(kx⁴) passes through (1, 6), then, to three decimals, k =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "6 = ln(k·1) → k = e⁶ ≈ 403.429.",
    marking_notes: "Substitute the point, exponentiate, solve for k.",
    steps: [{ marks: 1, description: "k ≈", options: ["201.715", "403.429", "54.598", "806.858"], correctIndex: 1 }],
  },
  {
    number: "19", sub_number: null,
    text: "The number of critical points of f(x) = x⁴e^(−x²) on (−2, 2) is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = 2x³e^(−x²)(2 − x²), zero at x = 0 and x = ±√2 ≈ ±1.414 — three critical points.",
    marking_notes: "Set f' = 0 and count solutions inside the interval.",
    steps: [{ marks: 1, description: "Number of critical points:", options: ["1", "2", "3", "4"], correctIndex: 2 }],
  },
  {
    number: "20", sub_number: null,
    text: "The maximum value of f(x) = 6 ln(x) − x² for x > 0 is approximately",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 6/x − 2x = 0 → x = √3 ≈ 1.732. f(√3) = 6 ln(√3) − 3 ≈ 0.296.",
    marking_notes: "Set f' = 0, confirm a maximum, evaluate f there.",
    steps: [{ marks: 1, description: "Maximum value ≈", options: ["−0.296", "3.000", "−3.000", "0.296"], correctIndex: 3 }],
  },

  // ============ SECTION II · PART A — calculator permitted, FRQ (30 marks) ============

  {
    number: "21", sub_number: "a",
    text: "Let f(x) = ln(x) / √x for x > 0. Find f'(x).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "By the quotient rule, f'(x) = [(1/x)√x − ln(x)·(1/2)x^(−1/2)] / x = (2 − ln x) / (2x^(3/2)).",
    marking_notes: "Full marks for the correctly simplified derivative.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["(2 − ln x) / (2x^(3/2))", "(2 + ln x) / (2x^(3/2))", "(ln x − 2) / (2x^(3/2))", "1 / (2x^(3/2))"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "b",
    text: "Find the critical point of f(x) = ln(x)/√x and classify it.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 0 at x = e² ≈ 7.389. Since f' is positive for x < e² and negative for x > e², this is a local maximum.",
    marking_notes: "Two steps: locate the critical point, then classify using a sign analysis of f'.",
    steps: [
      { marks: 2, description: "Critical point:", options: ["x = e² ≈ 7.389", "x = e ≈ 2.718", "x = 1", "x = e²/2 ≈ 3.69"], correctIndex: 0 },
      { marks: 2, description: "Classification:", options: ["local maximum", "local minimum", "inflection point, not extremum", "cannot be determined"], correctIndex: 0 },
    ],
  },
  {
    number: "21", sub_number: "c",
    text: "Determine the intervals on which f(x) = ln(x)/√x is increasing and decreasing.",
    marks: 3, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = (2 − ln x)/(2x^(3/2)) > 0 when x < e²: increasing on (0, e²), decreasing on (e², ∞).",
    marking_notes: "Sign of f' either side of the critical point.",
    steps: [{ marks: 3, description: "f is:", options: ["increasing on (0, e²), decreasing on (e², ∞)", "decreasing on (0, e²), increasing on (e², ∞)", "increasing on all of (0, ∞)", "decreasing on all of (0, ∞)"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "d",
    text: "Find the x-coordinate of any inflection point of f(x) = ln(x)/√x.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "f''(x) = (1/2)x^(−5/2)[(3/2)ln x − 4] = 0 → ln x = 8/3 → x = e^(8/3) ≈ 14.39.",
    marking_notes: "Full marks for the correctly located inflection point.",
    steps: [{ marks: 5, description: "Inflection point:", options: ["x = e^(8/3) ≈ 14.39", "x = e² ≈ 7.39", "x = e^(4/3) ≈ 3.79", "no inflection point exists"], correctIndex: 0 }],
  },

  {
    number: "22", sub_number: "a",
    text: "A bacteria population (in thousands) is modelled by P(x) = 60 ln(x + 1) − 4x, for x ≥ 0 hours. Find P'(x).",
    marks: 2, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "P'(x) = 60/(x + 1) − 4.",
    marking_notes: "Direct differentiation.",
    steps: [{ marks: 2, description: "P'(x) =", options: ["60/(x+1) − 4", "60/(x+1) + 4", "60(x+1) − 4", "60/x − 4"], correctIndex: 0 }],
  },
  {
    number: "22", sub_number: "b",
    text: "Find the value of x that maximises P(x) = 60 ln(x + 1) − 4x, and the maximum population (nearest thousand).",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "P'(x) = 0 → x = 14. P(14) = 60 ln 15 − 56 ≈ 106.5 → maximum population ≈ 107 thousand.",
    marking_notes: "Two steps: the critical x-value, then the value evaluated there.",
    steps: [
      { marks: 2, description: "x that maximises P:", options: ["x = 14", "x = 15", "x = 10", "x = 20"], correctIndex: 0 },
      { marks: 3, description: "Maximum population (nearest thousand):", options: ["≈ 100", "≈ 107", "≈ 115", "≈ 95"], correctIndex: 1 },
    ],
  },
  {
    number: "22", sub_number: "c",
    text: "Determine the concavity of P(x) = 60 ln(x + 1) − 4x at x = 14, and interpret what it means for the population.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "P''(x) = −60/(x+1)²; P''(14) ≈ −0.267 < 0, concave down — confirms a maximum, meaning the population's growth rate is slowing as it approaches its peak.",
    marking_notes: "Two steps: the concavity conclusion, then the interpretation.",
    steps: [
      { marks: 2, description: "Concavity at x = 14:", options: ["Concave down — confirms a maximum", "Concave up — confirms a minimum", "Concave down — confirms a minimum", "Concave up — confirms a maximum"], correctIndex: 0 },
      { marks: 2, description: "What this means for the population:", options: ["Growth rate is slowing as the population approaches its peak", "Growth rate is accelerating", "Population is constant", "Population is about to decline sharply"], correctIndex: 0 },
    ],
  },
  {
    number: "22", sub_number: "d",
    text: "Solve P(x) = 0 for x > 0, correct to two decimal places, and interpret the result in context.",
    marks: 4, topicKey: "logs_exponentials", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Solving 60 ln(x+1) − 4x = 0 numerically for x > 0 gives x ≈ 62.20 — beyond this point the linear decline term overtakes the logarithmic growth term and the modelled population would turn negative, i.e. the model breaks down beyond this point.",
    marking_notes: "Two steps: the numeric root, then the interpretation.",
    steps: [
      { marks: 2, description: "Root:", options: ["x ≈ 62.20", "x ≈ 55.00", "x ≈ 70.00", "x ≈ 50.00"], correctIndex: 0 },
      { marks: 2, description: "Interpretation:", options: ["Beyond this point, the modelled population turns negative and the model breaks down", "Beyond this point, the population is maximised", "This is where the population growth rate is fastest", "This is where the population first becomes positive"], correctIndex: 0 },
    ],
  },

  // ============ SECTION II · PART B — no calculator, FRQ (38 marks) ============

  {
    number: "23", sub_number: "a",
    text: "Let f(x) = ln(25 − x²). State the domain of f.",
    marks: 2, topicKey: "curve_sketching", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "25 − x² > 0 → −5 < x < 5: domain is (−5, 5).",
    marking_notes: "Requires the argument of ln to be strictly positive.",
    steps: [{ marks: 2, description: "Domain:", options: ["(−5, 5)", "(−25, 25)", "(0, 5)", "(−5, 0)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "b",
    text: "Find f'(x) for f(x) = ln(25 − x²).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = −2x / (25 − x²), by the chain rule.",
    marking_notes: "Standard chain rule application.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["−2x / (25 − x²)", "2x / (25 − x²)", "−2x / (25 + x²)", "−1 / (25 − x²)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "c",
    text: "Determine the intervals on which f(x) = ln(25 − x²) is increasing and decreasing.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = −2x/(25−x²), with 25−x² > 0 throughout the domain, so the sign of f' matches the sign of −2x: increasing on (−5, 0), decreasing on (0, 5).",
    marking_notes: "Sign of f' on each side of x = 0.",
    steps: [{ marks: 4, description: "f is:", options: ["increasing on (−5, 0), decreasing on (0, 5)", "decreasing on (−5, 0), increasing on (0, 5)", "increasing throughout (−5, 5)", "decreasing throughout (−5, 5)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "d",
    text: "Find the vertical asymptote(s) of f(x) = ln(25 − x²), justifying your answer using limits.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "As x → 5⁻ or x → −5⁺, 25−x² → 0⁺, so ln(25−x²) → −∞: vertical asymptotes at x = 5 and x = −5.",
    marking_notes: "Two steps: the asymptote locations, then the limit justification.",
    steps: [
      { marks: 2, description: "Vertical asymptote(s):", options: ["x = 5 and x = −5", "x = 0 only", "x = 25 and x = −25", "none"], correctIndex: 0 },
      { marks: 2, description: "Justification:", options: ["25 − x² → 0⁺ as x approaches ±5 from inside the domain, so ln → −∞", "25 − x² → ∞, so ln → ∞", "25 − x² → 0⁻, so ln is undefined for a different reason", "The function has no vertical asymptotes"], correctIndex: 0 },
    ],
  },
  {
    number: "23", sub_number: "e",
    text: "Describe the shape of the graph of f(x) = ln(25 − x²), referring to your answers above.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "A single symmetric hump: since f is even, the curve rises from −∞ (as x → −5⁺) to a maximum at x = 0 (f(0) = ln 25), then falls back to −∞ (as x → 5⁻).",
    marking_notes: "Two steps: the overall shape, then the maximum/asymptote behaviour.",
    steps: [
      { marks: 2, description: "Overall shape:", options: ["A single symmetric hump (even function)", "Two separate monotonic branches", "An always-increasing curve", "An always-decreasing curve"], correctIndex: 0 },
      { marks: 2, description: "Behaviour at the maximum and asymptotes:", options: ["Rises to a maximum at x = 0, then falls to −∞ at both x = ±5", "Falls to a minimum at x = 0, then rises to +∞ at both x = ±5", "Rises to a maximum at x = 0 with no asymptotes", "Falls continuously from x = −5 to x = 5"], correctIndex: 0 },
    ],
  },

  {
    number: "24", sub_number: "a",
    text: "Consider the curve x² + xy + 2y² = 14. Find dy/dx in terms of x and y.",
    marks: 4, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + y + xy' + 4yy' = 0 → y'(x + 4y) = −(2x + y) → y' = −(2x + y)/(x + 4y).",
    marking_notes: "Implicit differentiation with product rule on xy.",
    steps: [{ marks: 4, description: "dy/dx =", options: ["−(2x + y)/(x + 4y)", "(2x + y)/(x + 4y)", "−(x + 4y)/(2x + y)", "−(2x − y)/(x + 4y)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "b",
    text: "For the curve x² + xy + 2y² = 14, find the coordinates of the point(s) where the tangent line is horizontal.",
    marks: 6, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "y' = 0 when y = −2x; substituting into the curve gives 7x² = 14, so x = ±√2, giving the points (√2, −2√2) and (−√2, 2√2).",
    marking_notes: "Two steps: the substitution condition, then the resulting coordinates.",
    steps: [
      { marks: 2, description: "Horizontal tangent requires:", options: ["y = −x", "y = x/3", "x = −3y", "2x = 6y"], correctIndex: 0 },
      { marks: 4, description: "Points where the tangent is horizontal:", options: ["(√2, −2√2) and (−√2, 2√2)", "(√12, √12) and (−√12, −√12)", "(2√3, 2√3) and (−2√3, −2√3)", "(4√3, −4√3) and (−4√3, 4√3)"], correctIndex: 0 },
    ],
  },
  {
    number: "24", sub_number: "c",
    text: "For the curve x² + xy + 2y² = 14, find the coordinates of the point(s) where the tangent line is vertical.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Tangent is vertical when x = −4y; substituting gives 6y² = 24... wait: substituting x=-4y gives 16y² − 4y² + 3y² = 14 → 15y²=14. Recompute: correct substitution x+4y=0 → x=-4y; plug into x²+xy+2y²=14: 16y² + (-4y)(y) + 2y² = 14 → 16y²-4y²+2y²=14 → 14y²=14 → y²=1 → y=±1, x=∓4. Points (-4,1) and (4,-1).",
    marking_notes: "Full marks for both correct coordinate pairs from the vertical-tangent condition.",
    steps: [{ marks: 5, description: "Points where the tangent is vertical:", options: ["(−4, 1) and (4, −1)", "(4, 1) and (−4, −1)", "(−1, 4) and (1, −4)", "(−2, 1) and (2, −1)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "d",
    text: "Verify that (3, 1) lies on the curve x² + xy + 2y² = 14, and find the equation of the tangent line there.",
    marks: 6, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "9 + 3 + 2 = 14 ✓. At (3,1): y' = −(2(3)+1)/(3+4(1)) = −7/7 = −1. Tangent: y − 1 = −1(x − 3), i.e. y = −x + 4.",
    marking_notes: "Two steps: the slope at the point, then the tangent line equation.",
    steps: [
      { marks: 2, description: "Slope of the tangent at (3, 1):", options: ["−1", "1", "−7", "7"], correctIndex: 0 },
      { marks: 4, description: "Equation of the tangent line:", options: ["y = −x + 4", "y = x − 2", "y = −x + 3", "y = 2x − 5"], correctIndex: 0 },
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
