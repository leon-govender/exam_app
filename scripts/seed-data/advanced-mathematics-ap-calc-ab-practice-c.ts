// Third practice paper (not a real past exam) in the same "AP Calculus AB"
// format as advanced-mathematics-ap-calc-ab.ts / -practice-b.ts — same
// scope (curve sketching, log/e equation solving, differentiation incl.
// implicit), same 2-hour/88-mark structure, entirely fresh questions.
// Content and mark scheme hand-verified in this session before
// transcription. "Practice C" distinguishes this sitting from A/B under
// the same paper_number on the subject page — there is no real exam tied
// to any of the three dates/labels.
//
// Two questions deliberately break the pattern of the first two papers
// (which always had a real inflection point / real horizontal & vertical
// tangent points to find): FRQ21(d) has NO inflection point (the relevant
// quadratic has a negative discriminant) and FRQ24(b)/(c) has NEITHER a
// horizontal NOR a vertical tangent anywhere on the curve (both algebraic
// conditions reduce to a negative value equalling a square). Both are
// worked and double-checked by hand — these are genuine "show that no such
// point exists" results, not errors — included to test whether a student
// actually works the algebra rather than assuming a feature must exist.
//
// Same grading convention as the first two papers: any part with a single
// concrete answer uses `steps` (stepped-MCQ, exact-match grading);
// `marking_points` (free text) is reserved for written interpretation and
// for the two "show that no such point exists" proofs, which have no
// single MCQ-able answer.

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
  exam_diet: "Practice C",
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
    text: "If f(x) = ln(5x² + 2), then f'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = 10x/(5x² + 2), by the chain rule.",
    marking_notes: "Chain rule: derivative of the inside over the inside.",
    steps: [{ marks: 1, description: "f'(x) =", options: ["10x / (5x² + 2)", "10x", "1 / (5x² + 2)", "10 / (5x² + 2)"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: null,
    text: "The solution set of e^(2x) − 8e^x + 15 = 0 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Let u = e^x: u² − 8u + 15 = 0 → (u−3)(u−5) = 0 → u = 3 or 5 → x = ln 3 or ln 5.",
    marking_notes: "Substitution u = e^x turns this into a quadratic; both roots must be converted back via ln.",
    steps: [{ marks: 1, description: "Solution set:", options: ["{3, 5}", "{ln 3, ln 5}", "{ln 8, ln 15}", "{−ln 3, −ln 5}"], correctIndex: 1 }],
  },
  {
    number: "3", sub_number: null,
    text: "If x²y + 2y³ = 11, then dy/dx =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2xy + x²y' + 6y²y' = 0 → y'(x² + 6y²) = −2xy → y' = −2xy/(x² + 6y²).",
    marking_notes: "Product rule on x²y, then collect y' terms.",
    steps: [{ marks: 1, description: "dy/dx =", options: ["2xy / (x² + 6y²)", "−2xy / (x² − 6y²)", "−2xy / (x² + 6y²)", "−xy / (x² + 6y²)"], correctIndex: 2 }],
  },
  {
    number: "4", sub_number: null,
    text: "f(x) = x³ − 6x² + 5 is decreasing on",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 3x² − 12x = 3x(x−4), negative between the roots (upward parabola): (0, 4).",
    marking_notes: "Sign of f' between its roots, since the leading coefficient of f' is positive.",
    steps: [{ marks: 1, description: "Decreasing on:", options: ["(−∞, 0) ∪ (4, ∞)", "(−∞, 4)", "(0, ∞)", "(0, 4)"], correctIndex: 3 }],
  },
  {
    number: "5", sub_number: null,
    text: "The x-coordinate(s) of the inflection point(s) of f(x) = x⁴ − 4x² is/are",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f''(x) = 12x² − 8, zero and changing sign at x = ±√6/3 — both are inflection points.",
    marking_notes: "Solve 12x² − 8 = 0 and simplify the surd.",
    steps: [{ marks: 1, description: "Inflection point(s):", options: ["x = ±√6/3", "x = 0 only", "x = ±√2", "x = ±2/3"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: null,
    text: "If g(x) = e^(2x) / x, then g'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "Quotient rule: g'(x) = [2e^(2x)·x − e^(2x)·1] / x² = e^(2x)(2x − 1) / x².",
    marking_notes: "Quotient rule applied directly.",
    steps: [{ marks: 1, description: "g'(x) =", options: ["e^(2x) / x²", "e^(2x)(2x − 1) / x²", "e^(2x)(2x + 1) / x²", "2e^(2x) / x²"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: null,
    text: "The solution of ln(5x + 3) = 2 is x =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "5x + 3 = e² → x = (e² − 3)/5.",
    marking_notes: "Exponentiate both sides, then isolate x.",
    steps: [{ marks: 1, description: "x =", options: ["(e² + 3) / 5", "e² / 5", "(e² − 3) / 5", "(e² − 3) / 2"], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: null,
    text: "If x² + 9y² = 36, then dy/dx at the point (3, √3) equals",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + 18yy' = 0 → y' = −x/(9y) = −3/(9√3) = −1/(3√3).",
    marking_notes: "Implicit differentiation of an ellipse, then substitute the point.",
    steps: [{ marks: 1, description: "dy/dx at (3, √3):", options: ["1 / (3√3)", "−3 / √3", "−√3 / 3", "−1 / (3√3)"], correctIndex: 3 }],
  },
  {
    number: "9", sub_number: null,
    text: "The curve y = x³ − 6x² has a local minimum at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "y' = 3x² − 12x = 3x(x−4) = 0 → x = 0, 4. y'' = 6x − 12: at x = 4, y'' > 0 (local min); at x = 0, y'' < 0 (local max).",
    marking_notes: "Second Derivative Test distinguishes the two critical points.",
    steps: [{ marks: 1, description: "Local minimum at:", options: ["x = 4", "x = 0", "x = 2", "both x = 0 and x = 4"], correctIndex: 0 }],
  },
  {
    number: "10", sub_number: null,
    text: "d/dx [ ln(x) · e^(3x) ] =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "Product rule: (1/x)e^(3x) + ln(x)·3e^(3x) = e^(3x)(1/x + 3 ln x).",
    marking_notes: "Product rule, with the chain rule inside the second factor's derivative.",
    steps: [{ marks: 1, description: "Derivative:", options: ["3e^(3x) ln x", "e^(3x)(1/x + 3 ln x)", "e^(3x) / x", "e^(3x)(1/x − 3 ln x)"], correctIndex: 1 }],
  },
  {
    number: "11", sub_number: null,
    text: "As x → −∞, the graph of f(x) = e^(2x) / (e^(2x) + 3) has a horizontal asymptote at",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "As x → −∞, e^(2x) → 0, so f(x) → 0/3 = 0: horizontal asymptote y = 0.",
    marking_notes: "Behaviour of e^(2x) as x → −∞.",
    steps: [{ marks: 1, description: "Horizontal asymptote:", options: ["y = 1", "none", "y = 0", "y = 1/3"], correctIndex: 2 }],
  },
  {
    number: "12", sub_number: null,
    text: "If h(x) = x^(3x) for x > 0, then h'(x) =",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "Logarithmic differentiation: ln h = 3x ln x → h'/h = 3 ln x + 3 → h' = 3x^(3x)(ln x + 1).",
    marking_notes: "Take ln of both sides first, since the variable is in both the base and exponent.",
    steps: [{ marks: 1, description: "h'(x) =", options: ["3x · x^(3x−1)", "x^(3x) · 3 ln x", "x^(3x)(ln x + 1)", "3x^(3x)(ln x + 1)"], correctIndex: 3 }],
  },

  // ============ SECTION I · PART B — calculator permitted (Q13-20, 1 mark each) ============

  {
    number: "13", sub_number: null,
    text: "To three decimal places, the root of f(x) = ln(x) − 2x + 5 between x = 2 and x = 4 is",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "Numerically, the root is x ≈ 3.059 (f(3.059) ≈ 0).",
    marking_notes: "Calculator numeric solve or repeated bisection.",
    steps: [{ marks: 1, description: "Root ≈", options: ["3.059", "2.847", "3.302", "3.588"], correctIndex: 0 }],
  },
  {
    number: "14", sub_number: null,
    text: "A bacteria culture is modelled by A(t) = 300e^(0.06t). To the nearest hour, when does A reach 900?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "300e^(0.06t) = 900 → e^(0.06t) = 3 → t = ln(3)/0.06 ≈ 18.31 ≈ 18 hours.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.06.",
    steps: [{ marks: 1, description: "t ≈", options: ["12 hours", "18 hours", "25 hours", "30 hours"], correctIndex: 1 }],
  },
  {
    number: "15", sub_number: null,
    text: "The absolute maximum value of f(x) = (x − 3)²e^(−x) on [2, 6] is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = e^(−x)(x−3)(5−x) = 0 at x=3,5. f(2)≈0.135, f(3)=0, f(5)≈0.027, f(6)≈0.022 — the maximum is at the endpoint x=2, value ≈0.135.",
    marking_notes: "Compare critical points and both endpoints — the maximum here occurs at an endpoint, not a critical point.",
    steps: [{ marks: 1, description: "Absolute maximum ≈", options: ["0.027", "0.022", "0.135", "0.000"], correctIndex: 2 }],
  },
  {
    number: "16", sub_number: null,
    text: "If x³ + 2y³ = xy + 20, the value of dy/dx at the point (2, 2) is closest to",
    marks: 1, topicKey: "differentiation", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "3x² + 6y²y' = y + xy' → y' = (y − 3x²)/(6y² − x). At (2,2): (2−12)/(24−2) ≈ −0.45.",
    marking_notes: "Implicit differentiation, then substitute the point (checked: 8+16=4+20=24).",
    steps: [{ marks: 1, description: "dy/dx ≈", options: ["0.45", "−0.83", "0.83", "−0.45"], correctIndex: 3 }],
  },
  {
    number: "17", sub_number: null,
    text: "A cooling object follows T(t) = 25 + 90e^(−0.12t). To the nearest 0.1 minute, when is T = 40?",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "40 = 25 + 90e^(−0.12t) → e^(−0.12t) = 1/6 → t = ln(6)/0.12 ≈ 14.9 minutes.",
    marking_notes: "Isolate the exponential, take ln, divide by 0.12.",
    steps: [{ marks: 1, description: "t ≈", options: ["14.9 min", "3.0 min", "20.7 min", "8.3 min"], correctIndex: 0 }],
  },
  {
    number: "18", sub_number: null,
    text: "If y = ln(kx³) passes through (1, 5), then, to three decimals, k =",
    marks: 1, topicKey: "logs_exponentials", cognitiveLevelName: "Application",
    model_answer: "5 = ln(k·1) → k = e⁵ ≈ 148.413.",
    marking_notes: "Substitute the point, exponentiate, solve for k.",
    steps: [{ marks: 1, description: "k ≈", options: ["74.207", "148.413", "20.086", "244.692"], correctIndex: 1 }],
  },
  {
    number: "19", sub_number: null,
    text: "The number of critical points of f(x) = x³e^(−x²) on (−2, 2) is",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = x²e^(−x²)(3 − 2x²), zero at x = 0 and x = ±√1.5 ≈ ±1.2247 — three critical points.",
    marking_notes: "Set f' = 0 and count solutions inside the interval.",
    steps: [{ marks: 1, description: "Number of critical points:", options: ["1", "2", "3", "4"], correctIndex: 2 }],
  },
  {
    number: "20", sub_number: null,
    text: "The maximum value of f(x) = 5 ln(x) − x² for x > 0 is approximately",
    marks: 1, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 5/x − 2x = 0 → x = √2.5 ≈ 1.5811. f(1.5811) = 5 ln(1.5811) − 2.5 ≈ −0.209.",
    marking_notes: "Set f' = 0, confirm a maximum, evaluate f there.",
    steps: [{ marks: 1, description: "Maximum value ≈", options: ["0.209", "2.500", "−2.500", "−0.209"], correctIndex: 3 }],
  },

  // ============ SECTION II · PART A — calculator permitted, FRQ (30 marks) ============

  {
    number: "21", sub_number: "a",
    text: "Let f(x) = e^x / x² for x > 0. Find f'(x).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "By the quotient rule, f'(x) = [e^x·x² − e^x·2x] / x⁴ = e^x(x − 2) / x³.",
    marking_notes: "Full marks for the correctly simplified derivative.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["e^x(x − 2) / x³", "e^x(x + 2) / x³", "e^x(2 − x) / x³", "e^x / x³"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "b",
    text: "Find the critical point of f(x) = e^x/x² and classify it using the Second Derivative Test.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Analysis & Reasoning",
    model_answer: "f'(x) = 0 at x = 2. f''(x) = e^x(x²−4x+6)/x⁴; at x = 2, x²−4x+6 = 2 > 0, so f''(2) > 0 → local minimum.",
    marking_notes: "Two steps: locate the critical point, then classify using the sign of f''.",
    steps: [
      { marks: 2, description: "Critical point:", options: ["x = 2", "x = 0", "x = 1", "x = −2"], correctIndex: 0 },
      { marks: 2, description: "Classification:", options: ["local minimum", "local maximum", "inflection point, not extremum", "cannot be determined"], correctIndex: 0 },
    ],
  },
  {
    number: "21", sub_number: "c",
    text: "Determine the intervals on which f(x) = e^x/x² is increasing and decreasing.",
    marks: 3, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = e^x(x−2)/x³, with x³ > 0 throughout the domain (x>0), so the sign of f' matches the sign of (x−2): decreasing on (0, 2), increasing on (2, ∞).",
    marking_notes: "Sign of f' either side of the critical point.",
    steps: [{ marks: 3, description: "f is:", options: ["decreasing on (0, 2), increasing on (2, ∞)", "increasing on (0, 2), decreasing on (2, ∞)", "increasing on all of (0, ∞)", "decreasing on all of (0, ∞)"], correctIndex: 0 }],
  },
  {
    number: "21", sub_number: "d",
    text: "Determine whether f(x) = e^x/x² has any inflection points, justifying your answer.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "f''(x) = e^x(x²−4x+6)/x⁴. Setting the numerator's quadratic factor to zero: x²−4x+6=0 has discriminant 16−24=−8 < 0, so no real solutions — f'' is never zero (and, since it's positive at any test point, always positive), so f has no inflection points.",
    marking_notes: "Three steps: reduce to the quadratic, compute the discriminant, then conclude.",
    steps: [
      { marks: 2, description: "Setting f''(x) = 0 reduces to:", options: ["x² − 4x + 6 = 0", "x² + 4x + 6 = 0", "x² − 4x − 6 = 0", "4x − 6 = 0"], correctIndex: 0 },
      { marks: 2, description: "The discriminant of this quadratic is:", options: ["16 − 24 = −8 (negative)", "16 + 24 = 40 (positive)", "16 − 24 = −8 but treated as positive", "0 (repeated root)"], correctIndex: 0 },
      { marks: 1, description: "Conclusion:", options: ["No real solutions, so f has no inflection points", "Two real solutions, so f has two inflection points", "One repeated real solution, so f has one inflection point", "Cannot be determined"], correctIndex: 0 },
    ],
  },

  {
    number: "22", sub_number: "a",
    text: "A drug's concentration in the bloodstream (mg/L) after x hours is C(x) = 40 ln(x + 1) − 3x, for x ≥ 0. Find C'(x).",
    marks: 2, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "C'(x) = 40/(x + 1) − 3.",
    marking_notes: "Direct differentiation.",
    steps: [{ marks: 2, description: "C'(x) =", options: ["40/(x+1) − 3", "40/(x+1) + 3", "40(x+1) − 3", "40/x − 3"], correctIndex: 0 }],
  },
  {
    number: "22", sub_number: "b",
    text: "Find the value of x that maximises C(x) = 40 ln(x + 1) − 3x, and the maximum concentration to the nearest 0.1 mg/L.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "C'(x) = 0 → x = 40/3 − 1 ≈ 12.33. C(12.33) = 40 ln(13.33) − 3(12.33) ≈ 66.6 mg/L.",
    marking_notes: "Two steps: the critical x-value, then the concentration evaluated there.",
    steps: [
      { marks: 2, description: "x that maximises C:", options: ["x ≈ 12.33", "x ≈ 13.33", "x ≈ 10", "x ≈ 15"], correctIndex: 0 },
      { marks: 3, description: "Maximum concentration (nearest 0.1 mg/L):", options: ["≈ 60.0 mg/L", "≈ 66.6 mg/L", "≈ 70.0 mg/L", "≈ 50.0 mg/L"], correctIndex: 1 },
    ],
  },
  {
    number: "22", sub_number: "c",
    text: "Determine the concavity of C(x) = 40 ln(x + 1) − 3x at x ≈ 12.33, and interpret what it means for the drug's concentration.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "C''(x) = −40/(x+1)²; C''(12.33) ≈ −0.225 < 0, concave down — confirms a maximum, meaning the rate at which concentration is rising is slowing as it approaches its peak.",
    marking_notes: "Two steps: the concavity conclusion, then the interpretation.",
    steps: [
      { marks: 2, description: "Concavity at x ≈ 12.33:", options: ["Concave down — confirms a maximum", "Concave up — confirms a minimum", "Concave down — confirms a minimum", "Concave up — confirms a maximum"], correctIndex: 0 },
      { marks: 2, description: "What this means for the drug's concentration:", options: ["The rate of increase is slowing as concentration approaches its peak", "The rate of increase is accelerating", "Concentration is constant", "Concentration is about to spike suddenly"], correctIndex: 0 },
    ],
  },
  {
    number: "22", sub_number: "d",
    text: "Solve C(x) = 0 for x > 0, correct to two decimal places, and interpret the result in context.",
    marks: 4, topicKey: "logs_exponentials", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "Solving 40 ln(x+1) − 3x = 0 numerically for x > 0 gives x ≈ 53.25 — beyond this point the linear elimination term overtakes the logarithmic term and the modelled concentration would turn negative, i.e. the drug is effectively cleared by this time.",
    marking_notes: "Two steps: the numeric root, then the interpretation.",
    steps: [
      { marks: 2, description: "Root:", options: ["x ≈ 53.25", "x ≈ 45.00", "x ≈ 60.00", "x ≈ 40.00"], correctIndex: 0 },
      { marks: 2, description: "Interpretation:", options: ["Beyond this point, the modelled concentration turns negative — the drug is effectively cleared", "Beyond this point, concentration is maximised", "This is where the drug first becomes effective", "This is where the concentration rate is fastest"], correctIndex: 0 },
    ],
  },

  // ============ SECTION II · PART B — no calculator, FRQ (38 marks) ============

  {
    number: "23", sub_number: "a",
    text: "Let f(x) = ln(16 − x²). State the domain of f.",
    marks: 2, topicKey: "curve_sketching", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "16 − x² > 0 → −4 < x < 4: domain is (−4, 4).",
    marking_notes: "Requires the argument of ln to be strictly positive.",
    steps: [{ marks: 2, description: "Domain:", options: ["(−4, 4)", "(−16, 16)", "(0, 4)", "(−4, 0)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "b",
    text: "Find f'(x) for f(x) = ln(16 − x²).",
    marks: 3, topicKey: "differentiation", cognitiveLevelName: "Knowledge & Skills",
    model_answer: "f'(x) = −2x / (16 − x²), by the chain rule.",
    marking_notes: "Standard chain rule application.",
    steps: [{ marks: 3, description: "f'(x) =", options: ["−2x / (16 − x²)", "2x / (16 − x²)", "−2x / (16 + x²)", "−1 / (16 − x²)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "c",
    text: "Determine the intervals on which f(x) = ln(16 − x²) is increasing and decreasing.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Application",
    model_answer: "f'(x) = −2x/(16−x²), with 16−x² > 0 throughout the domain, so the sign of f' matches the sign of −2x: increasing on (−4, 0), decreasing on (0, 4).",
    marking_notes: "Sign of f' on each side of x = 0.",
    steps: [{ marks: 4, description: "f is:", options: ["increasing on (−4, 0), decreasing on (0, 4)", "decreasing on (−4, 0), increasing on (0, 4)", "increasing throughout (−4, 4)", "decreasing throughout (−4, 4)"], correctIndex: 0 }],
  },
  {
    number: "23", sub_number: "d",
    text: "Find the vertical asymptote(s) of f(x) = ln(16 − x²), justifying your answer using limits.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "As x → 4⁻ or x → −4⁺, 16−x² → 0⁺, so ln(16−x²) → −∞: vertical asymptotes at x = 4 and x = −4.",
    marking_notes: "Two steps: the asymptote locations, then the limit justification.",
    steps: [
      { marks: 2, description: "Vertical asymptote(s):", options: ["x = 4 and x = −4", "x = 0 only", "x = 16 and x = −16", "none"], correctIndex: 0 },
      { marks: 2, description: "Justification:", options: ["16 − x² → 0⁺ as x approaches ±4 from inside the domain, so ln → −∞", "16 − x² → ∞, so ln → ∞", "16 − x² → 0⁻, so ln is undefined for a different reason", "The function has no vertical asymptotes"], correctIndex: 0 },
    ],
  },
  {
    number: "23", sub_number: "e",
    text: "Describe the shape of the graph of f(x) = ln(16 − x²), referring to your answers above.",
    marks: 4, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "A single symmetric hump: since f is even, the curve rises from −∞ (as x → −4⁺) to a maximum at x = 0 (f(0) = ln 16), then falls back to −∞ (as x → 4⁻).",
    marking_notes: "Two steps: the overall shape, then the maximum/asymptote behaviour.",
    steps: [
      { marks: 2, description: "Overall shape:", options: ["A single symmetric hump (even function)", "Two separate monotonic branches", "An always-increasing curve", "An always-decreasing curve"], correctIndex: 0 },
      { marks: 2, description: "Behaviour at the maximum and asymptotes:", options: ["Rises to a maximum at x = 0, then falls to −∞ at both x = ±4", "Falls to a minimum at x = 0, then rises to +∞ at both x = ±4", "Rises to a maximum at x = 0 with no asymptotes", "Falls continuously from x = −4 to x = 4"], correctIndex: 0 },
    ],
  },

  {
    number: "24", sub_number: "a",
    text: "Consider the curve x² + 3xy + y² = 5. Find dy/dx in terms of x and y.",
    marks: 4, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "2x + 3y + 3xy' + 2yy' = 0 → y'(3x + 2y) = −(2x + 3y) → y' = −(2x + 3y)/(3x + 2y).",
    marking_notes: "Implicit differentiation with product rule on 3xy.",
    steps: [{ marks: 4, description: "dy/dx =", options: ["−(2x + 3y)/(3x + 2y)", "(2x + 3y)/(3x + 2y)", "−(3x + 2y)/(2x + 3y)", "−(2x − 3y)/(3x + 2y)"], correctIndex: 0 }],
  },
  {
    number: "24", sub_number: "b",
    text: "Show that the curve x² + 3xy + y² = 5 has no point where the tangent line is horizontal.",
    marks: 6, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "A horizontal tangent requires 2x+3y=0, i.e. y=−2x/3. Substituting into the curve: x² − 2x² + 4x²/9 = −5x²/9 = 5, giving x² = −9, which has no real solution — so no point on the curve has a horizontal tangent.",
    marking_notes: "Three steps: the horizontal-tangent condition, the substitution result, then the conclusion.",
    steps: [
      { marks: 2, description: "Horizontal tangent requires:", options: ["2x + 3y = 0, i.e. y = −2x/3", "3x + 2y = 0, i.e. y = −3x/2", "x + y = 0", "2x − 3y = 0"], correctIndex: 0 },
      { marks: 2, description: "Substituting into the curve simplifies to:", options: ["−5x²/9 = 5, i.e. x² = −9", "5x²/9 = 5, i.e. x² = 9", "−5x² = 5, i.e. x² = −1", "x² = 9"], correctIndex: 0 },
      { marks: 2, description: "Conclusion:", options: ["No real solution — no point has a horizontal tangent", "Two real solutions x = ±3", "One real solution x = 0", "Infinitely many solutions"], correctIndex: 0 },
    ],
  },
  {
    number: "24", sub_number: "c",
    text: "Show that the curve x² + 3xy + y² = 5 has no point where the tangent line is vertical.",
    marks: 5, topicKey: "curve_sketching", cognitiveLevelName: "Proof & Synthesis",
    model_answer: "A vertical tangent requires 3x+2y=0, i.e. x=−2y/3. Substituting into the curve: 4y²/9 − 2y² + y² = −5y²/9 = 5, giving y² = −9, which has no real solution — so no point on the curve has a vertical tangent.",
    marking_notes: "Three steps: the vertical-tangent condition, the substitution result, then the conclusion.",
    steps: [
      { marks: 2, description: "Vertical tangent requires:", options: ["3x + 2y = 0, i.e. x = −2y/3", "2x + 3y = 0, i.e. x = −3y/2", "x + y = 0", "3x − 2y = 0"], correctIndex: 0 },
      { marks: 2, description: "Substituting into the curve simplifies to:", options: ["−5y²/9 = 5, i.e. y² = −9", "5y²/9 = 5, i.e. y² = 9", "−5y² = 5, i.e. y² = −1", "y² = 9"], correctIndex: 0 },
      { marks: 1, description: "Conclusion:", options: ["No real solution — no point has a vertical tangent", "Two real solutions y = ±3", "One real solution y = 0", "Infinitely many solutions"], correctIndex: 0 },
    ],
  },
  {
    number: "24", sub_number: "d",
    text: "Verify that (1, 1) lies on the curve x² + 3xy + y² = 5, and find the equation of the tangent line there.",
    marks: 6, topicKey: "differentiation", cognitiveLevelName: "Application",
    model_answer: "1 + 3 + 1 = 5 ✓. At (1,1): y' = −(2+3)/(3+2) = −1. Tangent: y − 1 = −1(x − 1), i.e. y = −x + 2.",
    marking_notes: "Two steps: the slope at the point, then the tangent line equation.",
    steps: [
      { marks: 2, description: "Slope of the tangent at (1, 1):", options: ["−1", "1", "−5", "5"], correctIndex: 0 },
      { marks: 4, description: "Equation of the tangent line:", options: ["y = −x + 2", "y = x", "y = −x + 1", "y = 2x − 1"], correctIndex: 0 },
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
