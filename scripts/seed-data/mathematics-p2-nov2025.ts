// Real DBE past paper: Mathematics P2, November 2025, National (English).
// Source: official DBE question paper + marking guidelines, both fetched
// from stanmorephysics.com (source_url below points at the combined
// QP+memo PDF). QP is pages 1-15 of the combined PDF (14 question pages +
// 1 information/formula sheet, confirmed by reading the actual rendered
// pages); the memo is pages 16-41. Unlike the P1 paper, this combined PDF
// does NOT include a blank answer-book template. No stray/mismatched pages
// were found between the QP and memo for this paper.
//
// Paper structure: ELEVEN compulsory questions (no choice), 150 marks,
// 3 hours. All 150 marks are included here: Q1=8, Q2=12, Q3=18, Q4=21,
// Q5=17, Q6=13, Q7=10, Q8=10, Q9=10, Q10=8, Q11=23 (sum = 150, matching the
// printed [150] total and each question's own printed bracket total).
//
// This is the second Mathematics paper ingested into this app. It reuses
// the same Mathematics subject row and the same four CAPS cognitive levels
// (Knowledge / Routine Procedures / Complex Procedures / Problem Solving)
// established by mathematics-p1-nov2025.ts. P2 covers different CAPS
// content than P1 (statistics, analytical geometry, trigonometry and
// Euclidean geometry, vs P1's algebra/functions/calculus/finance/
// sequences/probability), so four brand-new topics are added here
// (statistics, analytical_geometry, trigonometry, euclidean_geometry) —
// none of P1's topic keys are reused, since none of P1's topics genuinely
// cover this paper's content.
//
// Marking-point pattern: calculation sub-questions use the stepped-MCQ
// pattern (`steps: MarkingPointStep[]`), one step per mark-earning stage,
// step marks summing exactly to the sub-question's `marks`, with plausible
// Grade 12 distractors (sign slips, wrong theorem/rule applied, arithmetic
// slips, wrong root/interval chosen, mixing up which triangle a rule
// applies to, forgetting a restriction). Genuinely non-computational parts
// — formal Euclidean-geometry proofs (statement + reason pairs, e.g. 9.1,
// 10.2, 10.3, 11.2.1-11.2.5), and drawing/sketching tasks (2.1.3's
// histogram, 7.2's graph) — use `marking_points: MarkingPoint[]` instead,
// since these are graded on which correct statements/reasons or visual
// features appear, not on a single determinate final value. Where the memo
// shows an OR/alternative method, the steps/points below are based on the
// FIRST/primary method shown in the memo, not an amalgam of methods.
//
// Memo cross-check note (7.5): the printed memo answer for the final
// interval is x ∈ [0°;22,5°] ∪ [112,5°;135°), matching "check on the
// sketch" in the examiner's marginal note. A different marginal
// annotation on the same page (a hand-written "[22,5;45) ∪ (45;112,5]"
// with "AD: 2") reads as an alternate-partition annotation for markers,
// not a correction of the typed answer — the typed interval is used here,
// consistent with the graph in 7.2 (f and g diverge at x = 45° where
// tan 2x is undefined, which is excluded from BOTH candidate intervals).
//
// Diagrams: all diagrams in this paper (Q3, Q4, Q7, Q8, Q9.1, Q9.2, Q10,
// Q11.1, Q11.2) are vector line-drawings rendered directly into the page
// content stream (not separate embedded raster images), so they were
// cropped from full-page renders rather than extracted as clean standalone
// images. Q3's triangle PQR diagram was cropped and included even though
// all coordinates are given in the question text, since 3.5-3.7 (the
// parallelogram order and area) are easier to follow with the visual.
// Question 5 and Question 6 have no diagrams in the question paper itself
// (the small right-triangle sketch appearing near 5.1.1 in the marking
// guidelines is the examiner's own working, not part of the QP).
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
    key: "statistics",
    name: "Statistics",
    caps_term: "Term 4",
    textbook_ref: "Grade 12 Mathematics — Statistics (Regression, Correlation, Variance and Standard Deviation, Histograms)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+statistics+regression+standard+deviation",
  },
  {
    key: "analytical_geometry",
    name: "Analytical Geometry",
    caps_term: "Term 3",
    textbook_ref: "Grade 12 Mathematics — Analytical Geometry (Distance, Gradient, Inclination, Circles, Tangents)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+analytical+geometry+circles+tangents",
  },
  {
    key: "trigonometry",
    name: "Trigonometry",
    caps_term: "Term 3",
    textbook_ref: "Grade 12 Mathematics — Trigonometry (Identities, Equations, Graphs, 2D and 3D Problems)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+trigonometry+identities+equations+graphs",
  },
  {
    key: "euclidean_geometry",
    name: "Euclidean Geometry",
    caps_term: "Term 3",
    textbook_ref: "Grade 12 Mathematics — Euclidean Geometry (Circle Theorems, Cyclic Quadrilaterals, Proportionality and Similarity)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+euclidean+geometry+circle+theorems",
  },
];

export const paper = {
  year: 2025,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/03/NSC-Maths-Grade-12-November-2025-P2-and-Memo.pdf" as string | null,
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

const IMG = "/question-images/maths-2025-p2";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: STATISTICS — REGRESSION (8 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "There were 11 cars of the same model for sale at a car dealership. The age (in years) of each car and its corresponding selling price (in rand) is provided in a table (2;293000), (3;265000), (3;256000), (4;219000), (4;241000), (4;246000), (6;226000), (6;176000), (7;154000), (7;180000), (8;148000). Determine the equation of the least squares regression line.",
    marks: 3, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using a calculator's linear regression function: a = 331 397,20 and b = −22 988,32, so ŷ = 331 397,20 − 22 988,32x.",
    marking_notes: "Correct value of a, correct value of b, and the correct equation combining them.",
    steps: [
      { marks: 1, description: "What is a (the y-intercept of the regression line)?", options: ["331 397,20", "−22 988,32", "293 000,00", "216 455,60"], correctIndex: 0 },
      { marks: 1, description: "What is b (the gradient of the regression line)?", options: ["−22 988,32", "331 397,20", "22 988,32", "−331 397,20"], correctIndex: 0 },
      { marks: 1, description: "What is the full equation?", options: ["ŷ = 331 397,20 − 22 988,32x", "ŷ = −22 988,32 + 331 397,20x", "ŷ = 331 397,20 + 22 988,32x", "ŷ = 22 988,32 − 331 397,20x"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Predict the selling price of a similar car at this dealership that is 5 years old.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "ŷ = 331 397,20 − 22 988,32(5) = R216 455,60.",
    marking_notes: "Correct substitution of x = 5 into the regression equation, and the correct final predicted price.",
    steps: [
      { marks: 1, description: "What do you substitute into the regression equation?", options: ["331 397,20 − 22 988,32(5)", "331 397,20 − 22 988,32(11)", "331 397,20 × 5 − 22 988,32", "(331 397,20 − 22 988,32) × 5"], correctIndex: 0 },
      { marks: 1, description: "What is the predicted selling price?", options: ["R216 455,60", "R308 408,88", "R193 467,28", "R331 397,20"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Use the correlation coefficient to show whether the prediction made in Question 1.2 is valid or not.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "The correlation coefficient r = −0,95 shows a strong (negative) correlation, meaning the data points lie close to the regression line. Therefore, the prediction is valid.",
    marking_notes: "Correctly stating the strong correlation (r = −0,95), and correctly concluding the prediction is valid because of it.",
    steps: [
      { marks: 1, description: "What does the correlation coefficient r tell you here?", options: ["r = −0,95, a strong correlation", "r = −0,95, a weak correlation", "r = 0,95, no correlation", "r cannot be determined from this data"], correctIndex: 0 },
      { marks: 1, description: "Is the prediction from 1.2 valid?", options: ["Yes, since the data points lie close to the regression line", "No, since the correlation is too weak to trust", "Yes, but only because x = 5 is outside the given range", "No, since r should be positive for a valid prediction"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Use the answer to Question 1.1 to write down the estimated average yearly decrease in the selling price of these 11 cars.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "R22 988,32 per year, the magnitude of b (the gradient of the regression line).",
    marking_notes: "Accept only R22 988,32 (the positive magnitude of b).",
    steps: [{ marks: 1, description: "What is the estimated average yearly decrease?", options: ["R22 988,32", "R331 397,20", "R216 455,60", "R308 409,00"], correctIndex: 0 }],
  },

  // ============ QUESTION 2: STATISTICS — CUMULATIVE FREQUENCY & STANDARD DEVIATION (12 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The cumulative frequency table below shows the amount of time people spent on a website on a certain day: 0<t≤20 → 16; 0<t≤40 → 40; 0<t≤60 → 59; 0<t≤80 → 67; 0<t≤100 → 70. How many people visited this website on that day?",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "70, the final cumulative frequency.",
    marking_notes: "Accept only 70.",
    steps: [{ marks: 1, description: "How many people visited the website?", options: ["70", "67", "59", "16"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "How many people spent more than 40 and up to 80 minutes on the website?",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "67 − 40 = 27 people.",
    marking_notes: "Correct subtraction set up (the cumulative frequency at 80 minus the cumulative frequency at 40), and the correct answer.",
    steps: [
      { marks: 1, description: "Which subtraction gives this count?", options: ["67 − 40", "70 − 16", "59 − 40", "67 − 59"], correctIndex: 0 },
      { marks: 1, description: "How many people is that?", options: ["27", "30", "19", "8"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Draw a histogram to represent the information provided in the cumulative frequency table.",
    marks: 3, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Bars of height 16, 24, 19, 8 and 3 over the intervals 0-20, 20-40, 40-60, 60-80 and 80-100 respectively (the class frequencies obtained by subtracting consecutive cumulative frequencies), drawn with no gaps between the bars.",
    marking_notes: "One mark for at least two class frequencies plotted correctly, one mark for all five class frequencies correct, and one mark for drawing the bars with no gaps between them.",
    marking_points: [
      { marks: 1, description: "at least two of the five class frequencies (16, 24, 19, 8, 3) plotted correctly", keywords: ["16", "24", "19", "frequencies"] },
      { marks: 1, description: "all five class frequencies correct", keywords: ["16 24 19 8 3", "all frequencies"] },
      { marks: 1, description: "bars drawn with no gaps between them (histogram, not a bar chart)", keywords: ["no gaps", "histogram"] },
    ],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Comment on the skewness of the data.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "The data is skewed to the right (positively skewed), since the tail of the distribution stretches out towards the higher time values.",
    marking_notes: "Accept 'skewed to the right' or 'positively skewed'.",
    steps: [{ marks: 1, description: "How is the data skewed?", options: ["Skewed to the right (positively skewed)", "Skewed to the left (negatively skewed)", "Symmetric, not skewed", "Cannot be determined from a histogram"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.2",
    text: "There are 9 players in a basketball team. The coach calculated that on average, each player scored 12 points during a game. The points scored by 8 of the 9 players were: 11, 14, 19, 20, 8, 10, 2, 14. How many players' points score was outside ONE standard deviation of the mean points score?",
    marks: 5, topicKey: "statistics", cognitiveLevelName: "Problem Solving",
    model_answer: "Equating the mean: (11+14+19+20+8+10+2+14+x)/9 = 12, so x + 98 = 108, giving x = 10 (the 9th player scored 10 points). Using all 9 scores, σ = 5,23. The interval (x̄ − σ ; x̄ + σ) = (12 − 5,23 ; 12 + 5,23) = (6,77 ; 17,23). Checking each of the 9 scores against this interval: 3 players' scores (20, 8 and 2) lie outside it.",
    marking_notes: "Correctly equating the mean to find the missing 9th score, correctly solving for that score, correctly calculating the standard deviation, correctly forming the one-standard-deviation interval, and correctly counting the players outside it.",
    steps: [
      { marks: 1, description: "How do you find the missing 9th player's score, using the known mean of 12?", options: ["(11+14+19+20+8+10+2+14+x)/9 = 12", "(11+14+19+20+8+10+2+14+x)/8 = 12", "(11+14+19+20+8+10+2+14)/9 = x", "(11+14+19+20+8+10+2+14+x)/9 = 12 × 9"], correctIndex: 0 },
      { marks: 1, description: "What is the 9th player's score, x?", options: ["10", "8", "12", "14"], correctIndex: 0 },
      { marks: 1, description: "What is the standard deviation σ of all 9 scores?", options: ["5,23", "12,00", "27,33", "3,63"], correctIndex: 0 },
      { marks: 1, description: "What is the interval (x̄ − σ ; x̄ + σ)?", options: ["(6,77 ; 17,23)", "(0 ; 24)", "(5,23 ; 12,00)", "(6,77 ; 12,00)"], correctIndex: 0 },
      { marks: 1, description: "How many players' scores lie outside this interval?", options: ["3", "2", "4", "1"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 3: ANALYTICAL GEOMETRY — TRIANGLE PQR (18 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "P(−1 ; 8), Q(−4 ; −6) and R(12 ; 2) are the vertices of ΔPQR. Calculate the length of QR. Leave your answer in simplified surd form.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "QR = √[(−4−12)² + (−6−2)²] = √320 = 8√5 units.",
    marking_notes: "Correct substitution into the distance formula, and the correct simplified surd answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the distance formula?", options: ["√[(−4−12)² + (−6−2)²]", "√[(12−2)² + (−4−(−6))²]", "√[(−4−12)² + (−6+2)²]", "√[(−1−12)² + (8−2)²]"], correctIndex: 0 },
      { marks: 1, description: "What is QR in simplified surd form?", options: ["8√5", "√320", "4√5", "8√10"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the gradient of QR.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "mQR = (−6−2)/(−4−12) = −8/−16 = 1/2.",
    marking_notes: "Correct substitution of Q and R into the gradient formula, and the correct answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the gradient formula?", options: ["(−6−2)/(−4−12)", "(2−(−6))/(12−(−4))", "(−4−12)/(−6−2)", "(−6−2)/(12+4)"], correctIndex: 0 },
      { marks: 1, description: "What is mQR?", options: ["1/2", "−1/2", "2", "−2"], correctIndex: 0 },
    ],
    image_url: `${IMG}/3-triangle-pqr.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "The angle of inclination of QR is θ. Calculate the size of θ.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "tan θ = mQR = 1/2, so θ = 26,57°.",
    marking_notes: "Correctly relating tan θ to mQR, and the correct final angle.",
    steps: [
      { marks: 1, description: "Which equation relates θ to the gradient of QR?", options: ["tan θ = mQR = 1/2", "sin θ = mQR = 1/2", "θ = mQR = 1/2", "tan θ = 2 × mQR"], correctIndex: 0 },
      { marks: 1, description: "What is θ?", options: ["26,57°", "63,43°", "45,00°", "18,43°"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Determine the equation of QR.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using mQR = 1/2 and point R(12 ; 2): y − 2 = (1/2)(x − 12), giving y = (1/2)x − 4.",
    marking_notes: "Correct substitution of the gradient and one of the two points, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is the correct substitution, using Q(−4 ; −6) or R(12 ; 2)?", options: ["y − 2 = (1/2)(x − 12)", "y − 2 = 2(x − 12)", "y + 6 = 2(x + 4)", "y − 2 = (1/2)(x + 12)"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of QR?", options: ["y = (1/2)x − 4", "y = (1/2)x + 4", "y = 2x − 4", "y = (1/2)x − 8"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "PQRS, in that order, is a parallelogram. Write down the coordinates of S.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since PQRS is a parallelogram, Q → R is the same translation as P → S: (x + 16 ; y + 8). Applying this to Q(−4 ; −6) to get R(12 ; 2) confirms the translation, and applying it to P(−1 ; 8) gives S(15 ; 16).",
    marking_notes: "Correct x-coordinate of S, and correct y-coordinate of S.",
    steps: [
      { marks: 1, description: "What is the x-coordinate of S?", options: ["15", "13", "−1", "11"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of S?", options: ["16", "8", "14", "2"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "T is a point on QR such that PT ⊥ QR. Calculate the coordinates of T.",
    marks: 5, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mPT = −2 (perpendicular to mQR = 1/2). Equation of PT, using P(−1 ; 8): y = −2x + 6. Equating with QR (y = (1/2)x − 4): −2x + 6 = (1/2)x − 4, giving −4x + 12 = x − 8, so 5x = 20, x = 4, and y = −2. So T(4 ; −2).",
    marking_notes: "Correct perpendicular gradient, correct equation of PT, correctly equating QR and PT and simplifying, and the correct final coordinates.",
    steps: [
      { marks: 1, description: "What is mPT (perpendicular to QR)?", options: ["−2", "2", "1/2", "−1/2"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of PT, using P(−1 ; 8)?", options: ["y = −2x + 6", "y = −2x − 6", "y = 2x + 6", "y = −2x + 8"], correctIndex: 0 },
      { marks: 1, description: "Equating the equations of QR and PT, what do you get?", options: ["−2x + 6 = (1/2)x − 4", "−2x + 6 = (1/2)x + 4", "2x + 6 = (1/2)x − 4", "−2x − 6 = (1/2)x − 4"], correctIndex: 0 },
      { marks: 1, description: "Simplifying, what is x?", options: ["4", "5", "2", "−4"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of T?", options: ["T(4 ; −2)", "T(4 ; 2)", "T(−4 ; −2)", "T(4 ; −4)"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.7",
    text: "Calculate the area of parallelogram PQRS.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "PT = √[(4−(−1))² + (−2−8)²] = √125 = 5√5 units. Area of PQRS = QR × PT = (8√5)(5√5) = 200 units².",
    marking_notes: "Correct length of PT, correct substitution of QR and PT into the area formula, and the correct final area.",
    steps: [
      { marks: 1, description: "What is the length of PT?", options: ["5√5 units", "√125 units (unsimplified)", "5√10 units", "10√5 units"], correctIndex: 0 },
      { marks: 1, description: "What do you substitute to find the area of PQRS?", options: ["(8√5)(5√5)", "(1/2)(8√5)(5√5)", "(8√5) + (5√5)", "(8√5)²"], correctIndex: 0 },
      { marks: 1, description: "What is the area of PQRS?", options: ["200 units²", "100 units²", "40 units²", "400 units²"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 4: ANALYTICAL GEOMETRY — CIRCLE (21 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "M(p ; q) is the centre of the circle that intersects the x-axis at A and B. C is a point such that the line from M to C is parallel to the y-axis, intersecting the x-axis at D. MC intersects the circle at E(−6 ; −1). Tangents from C touch the circle at A and B. AD = (q − 1) units. Write down the value of p.",
    marks: 1, topicKey: "analytical_geometry", cognitiveLevelName: "Knowledge",
    model_answer: "p = −6, since MC is parallel to the y-axis and passes through E(−6 ; −1), so M has the same x-coordinate as E.",
    marking_notes: "Accept only p = −6.",
    steps: [{ marks: 1, description: "What is p?", options: ["−6", "6", "−1", "4"], correctIndex: 0 }],
    image_url: `${IMG}/4-circle-mabc.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Show that q = 4.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since MC ⊥ x-axis, MD̂B = 90°, and AM = ME = q + 1 (radii), while MD = q. By Pythagoras in ΔAMD: AM² = AD² + MD², so (q+1)² = (q−1)² + q². Expanding: q² + 2q + 1 = q² − 2q + 1 + q², giving q² − 4q = 0, so q(q − 4) = 0, and since q ≠ 0 (M would coincide with D), q = 4.",
    marking_notes: "Correct expression for AM (= q+1), correct expression for MD (= q), correct substitution into Pythagoras, and correctly simplifying to standard form and rejecting q = 0.",
    steps: [
      { marks: 1, description: "What is AM, the radius, in terms of q?", options: ["q + 1", "q − 1", "q", "2q"], correctIndex: 0 },
      { marks: 1, description: "What is MD in terms of q?", options: ["q", "q + 1", "q − 1", "2q"], correctIndex: 0 },
      { marks: 1, description: "What do you substitute into Pythagoras (AM² = AD² + MD²)?", options: ["(q+1)² = (q−1)² + q²", "(q+1)² = (q−1)² − q²", "(q−1)² = (q+1)² + q²", "(q+1)² = q² + q²"], correctIndex: 0 },
      { marks: 1, description: "Simplifying, what is q (rejecting the invalid root)?", options: ["q = 4 (q = 0 is rejected)", "q = 0 (q = 4 is rejected)", "q = 4 or q = 0 (both valid)", "q = −4"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Determine the equation of the circle in the form (x − a)² + (y − b)² = r².",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "AM = q + 1 = 5 units, so with centre M(−6 ; 4): (x + 6)² + (y − 4)² = 25.",
    marking_notes: "Correct radius (AM = 5 units), and the correct equation.",
    steps: [
      { marks: 1, description: "What is the radius, AM?", options: ["5 units", "4 units", "3 units", "9 units"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of the circle?", options: ["(x + 6)² + (y − 4)² = 25", "(x − 6)² + (y + 4)² = 25", "(x + 6)² + (y − 4)² = 5", "(x − 6)² + (y − 4)² = 25"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "If the circle is translated 2 units to the left, determine the minimum distance between the circle and the y-axis.",
    marks: 1, topicKey: "analytical_geometry", cognitiveLevelName: "Knowledge",
    model_answer: "The new centre is (−8 ; 4), so the minimum distance from the circle to the y-axis is 8 − 5 = 3 units.",
    marking_notes: "Accept only 3 units.",
    steps: [{ marks: 1, description: "What is the minimum distance between the translated circle and the y-axis?", options: ["3 units", "8 units", "5 units", "2 units"], correctIndex: 0 }],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Calculate the coordinates of A and B.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Substituting y = 0 into the circle equation: (x + 6)² + (0 − 4)² = 25, so (x + 6)² = 9, giving x + 6 = ±3, i.e. x = −3 or x = −9. So A(−9 ; 0) and B(−3 ; 0).",
    marking_notes: "Correctly substituting y = 0 into the circle's equation, and correctly identifying the coordinates of both A and B.",
    steps: [
      { marks: 1, description: "What do you substitute to find the x-intercepts?", options: ["(x + 6)² + (0 − 4)² = 25", "(x + 6)² + (y − 4)² = 0", "(0 + 6)² + (y − 4)² = 25", "(x + 6)² + 16 = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of A (the leftmost point)?", options: ["A(−9 ; 0)", "A(−3 ; 0)", "A(9 ; 0)", "A(−6 ; 0)"], correctIndex: 0 },
      { marks: 1, description: "What are the coordinates of B?", options: ["B(−3 ; 0)", "B(−9 ; 0)", "B(3 ; 0)", "B(0 ; −3)"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "Determine the equation of tangent BC.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mMB = (4−0)/(−6−(−3)) = −4/3. Since BC ⊥ MB (tangent ⊥ radius), mBC = 3/4. Using B(−3 ; 0): y − 0 = (3/4)(x + 3), so y = (3/4)x + 9/4.",
    marking_notes: "Correct gradient of MB, correct perpendicular gradient of BC, correct substitution of the gradient and B's coordinates, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is mMB?", options: ["−4/3", "4/3", "−3/4", "3/4"], correctIndex: 0 },
      { marks: 1, description: "What is mBC (perpendicular to MB, since BC is a tangent)?", options: ["3/4", "−3/4", "4/3", "−4/3"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using B(−3 ; 0)?", options: ["y − 0 = (3/4)(x + 3)", "y − 0 = (3/4)(x − 3)", "y − 3 = (3/4)(x + 0)", "y − 0 = (4/3)(x + 3)"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of tangent BC?", options: ["y = (3/4)x + 9/4", "y = (3/4)x − 9/4", "y = (4/3)x + 4", "y = (3/4)x + 3"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.7",
    text: "Write down the coordinates of C.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since MC is parallel to the y-axis (x = −6), substituting into tangent BC's equation: y = (3/4)(−6) + 9/4 = −9/4. So C(−6 ; −9/4).",
    marking_notes: "Correct x-coordinate of C, and correct y-coordinate of C.",
    steps: [
      { marks: 1, description: "What is the x-coordinate of C?", options: ["−6", "−3", "6", "0"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of C?", options: ["−9/4", "9/4", "−1", "−4"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.8",
    text: "Calculate the size of ACB.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mAC = 3/4 (parallel to BC by symmetry, or computed directly), so tan α = 3/4, giving α = 36,87° (angle MCA-related). Similarly tan β = 3/4 giving the angle on the other side, β = 180° − 36,87° = 143,13°. Therefore ACB = 106,26°.",
    marking_notes: "Correct first angle (36,87°), correctly relating tan β to the same gradient magnitude, correct value of β, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is α (using tan α = 3/4)?", options: ["36,87°", "53,13°", "63,43°", "26,57°"], correctIndex: 0 },
      { marks: 1, description: "Which relationship gives tan β?", options: ["tan β = mAC = 3/4 (using the supplementary angle)", "tan β = mAC = −3/4", "tan β = 2 × mAC", "tan β = 1/mAC"], correctIndex: 0 },
      { marks: 1, description: "What is β?", options: ["143,13°", "36,87°", "126,87°", "153,13°"], correctIndex: 0 },
      { marks: 1, description: "What is the size of ACB?", options: ["106,26°", "73,74°", "180,00°", "90,00°"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: TRIGONOMETRY — IDENTITIES (17 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "It is given that tan 50° = k. Express cos 40° in terms of k.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "In a right triangle with opposite k, adjacent 1 and angle 50°, the hypotenuse is √(k²+1) (Pythagoras). Since 40° = 90° − 50°, cos 40° = sin 50° = k/√(k²+1).",
    marking_notes: "Correct third side of the triangle (√(k²+1)), and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the hypotenuse of the reference right triangle (opposite k, adjacent 1)?", options: ["√(k²+1)", "k²+1", "√(k²−1)", "k+1"], correctIndex: 0 },
      { marks: 1, description: "What is cos 40° in terms of k?", options: ["k/√(k²+1)", "1/√(k²+1)", "√(k²+1)/k", "k/(k²+1)"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "It is given that tan 50° = k. Express (2 sin 25° . cos 25°)/(−2 + 4 sin² 25°) in terms of k.",
    marks: 5, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "The numerator 2 sin 25° cos 25° = sin 50°. The denominator −2 + 4 sin² 25° = −2(1 − 2 sin² 25°) = −2 cos 50° (double-angle identity). So the expression = sin 50°/(−2 cos 50°) = (k/√(k²+1)) ÷ (−2/√(k²+1)) = −k/2.",
    marking_notes: "Correctly rewriting the numerator as sin 50°, correctly rewriting the denominator using the double-angle identity, correct substitution of both in terms of k, and the correct final simplified answer.",
    steps: [
      { marks: 1, description: "What does the numerator, 2 sin 25° cos 25°, simplify to?", options: ["sin 50°", "cos 50°", "sin 25°", "2 sin 50°"], correctIndex: 0 },
      { marks: 1, description: "What does the denominator, −2 + 4 sin² 25°, simplify to?", options: ["−2(1 − 2 sin² 25°)", "2(1 − 2 sin² 25°)", "−2(1 + 2 sin² 25°)", "−4 sin² 25°"], correctIndex: 0 },
      { marks: 1, description: "Using the double-angle identity, what does −2(1 − 2 sin² 25°) equal?", options: ["−2 cos 50°", "2 cos 50°", "−2 sin 50°", "−cos 50°"], correctIndex: 0 },
      { marks: 1, description: "Substituting sin 50° and cos 50° in terms of k, what do you get?", options: ["(k/√(k²+1)) ÷ (−2/√(k²+1))", "(k/√(k²+1)) ÷ (2/√(k²+1))", "(1/√(k²+1)) ÷ (−2k/√(k²+1))", "(k/√(k²+1)) × (−2/√(k²+1))"], correctIndex: 0 },
      { marks: 1, description: "What is the final simplified answer?", options: ["−k/2", "k/2", "−2k", "−2/k"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "It is given that tan 50° = k. Express sin 10° in terms of k.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "sin 10° = sin(50° − 40°) = sin 50° cos 40° − cos 50° sin 40° = (k/√(k²+1))(k/√(k²+1)) − (1/√(k²+1))(1/√(k²+1)) = (k² − 1)/(k² + 1).",
    marking_notes: "Correctly writing 10° as a difference of the two known angles, correctly expanding using the compound-angle identity, and correctly substituting both terms in terms of k.",
    steps: [
      { marks: 1, description: "How do you write 10° using the two known angles, 50° and 40°?", options: ["sin 10° = sin(50° − 40°)", "sin 10° = sin(50° + 40°)", "sin 10° = sin(40° − 50°)", "sin 10° = sin 50° − sin 40°"], correctIndex: 0 },
      { marks: 1, description: "What is the correct compound-angle expansion?", options: ["sin 50° cos 40° − cos 50° sin 40°", "sin 50° cos 40° + cos 50° sin 40°", "cos 50° cos 40° − sin 50° sin 40°", "sin 50° sin 40° − cos 50° cos 40°"], correctIndex: 0 },
      { marks: 1, description: "What is the first term, sin 50° cos 40°, in terms of k?", options: ["k²/(k²+1)", "k/(k²+1)", "1/(k²+1)", "k/√(k²+1)"], correctIndex: 0 },
      { marks: 1, description: "What is the final simplified answer?", options: ["(k² − 1)/(k² + 1)", "(k² + 1)/(k² − 1)", "(1 − k²)/(k² + 1)", "k²/(k² + 1)"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Simplify [sin(540° + x) . cos(90° + x)] / sin(−x) fully to a single trigonometric ratio.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "sin(540° + x) = sin(180° + x) = −sin x. cos(90° + x) = −sin x. sin(−x) = −sin x. So the expression = [(−sin x)(−sin x)] / (−sin x) = −sin x.",
    marking_notes: "Correct reduction of each of the three trigonometric terms, and the correct final simplified answer.",
    steps: [
      { marks: 1, description: "What is sin(540° + x) reduced to?", options: ["−sin x", "sin x", "−cos x", "cos x"], correctIndex: 0 },
      { marks: 1, description: "What is cos(90° + x) reduced to?", options: ["−sin x", "sin x", "cos x", "−cos x"], correctIndex: 0 },
      { marks: 1, description: "What is sin(−x) reduced to?", options: ["−sin x", "sin x", "cos x", "−cos x"], correctIndex: 0 },
      { marks: 1, description: "What is the fully simplified expression?", options: ["−sin x", "sin x", "−1", "sin² x"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Hence, determine the values of x in the interval x ∈ [0°;360°] for which √{[sin(540° + x) . cos(90° + x)] / sin(−x)} will be real.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since the expression under the square root simplifies to −sin x, this is real (non-negative) when −sin x ≥ 0, i.e. sin x ≤ 0, which happens for x ∈ [180°;360°].",
    marking_notes: "Accept only x ∈ (180°;360°), correctly excluding x = 180° and x = 360° (where sin(−x) = 0, undefined in the original expression).",
    steps: [{ marks: 2, description: "For which x ∈ [0°;360°] is the expression real?", options: ["x ∈ (180°;360°)", "x ∈ [0°;180°]", "x ∈ (0°;180°)", "x ∈ [180°;360°]"], correctIndex: 0 }],
  },

  // ============ QUESTION 6: TRIGONOMETRY — PROOF & EQUATION (13 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "Prove that: [tan(180° − x)](1 − cos² x) + cos² x = (sin x − cos x)(1 + sin x . cos x) / (−cos x)",
    marks: 6, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "LHS = (−tan x)(sin² x) + cos² x = (−sin x/cos x)(sin² x) + cos² x = (−sin³x + cos³x)/cos x = (sin³x − cos³x)/(−cos x) = (sin x − cos x)(sin²x + sinx.cosx + cos²x)/(−cos x) = (sin x − cos x)(1 + sinx.cosx)/(−cos x) = RHS.",
    marking_notes: "Correctly reducing tan(180°−x) to −tan x, correctly reducing 1−cos²x to sin²x, correctly using the quotient identity, correctly combining into a single fraction, correctly factorising the difference of cubes, and correctly using sin²x+cos²x=1 to finish.",
    steps: [
      { marks: 1, description: "What does tan(180° − x) reduce to?", options: ["−tan x", "tan x", "−1/tan x", "cot x"], correctIndex: 0 },
      { marks: 1, description: "What does 1 − cos² x reduce to?", options: ["sin² x", "−sin² x", "cos² x", "1 − sin² x (unchanged)"], correctIndex: 0 },
      { marks: 1, description: "Which identity do you use to rewrite −tan x?", options: ["−sin x/cos x (quotient identity)", "−1/sin x", "−cos x/sin x", "sin x . cos x"], correctIndex: 0 },
      { marks: 1, description: "Combining the terms over cos x, what single fraction do you get?", options: ["(sin³x − cos³x)/(−cos x)", "(sin³x + cos³x)/(−cos x)", "(sin³x − cos³x)/cos x", "(sinx − cosx)/(−cos x)"], correctIndex: 0 },
      { marks: 1, description: "How does sin³x − cos³x factorise (difference of cubes)?", options: ["(sin x − cos x)(sin²x + sinx.cosx + cos²x)", "(sin x − cos x)(sin²x − sinx.cosx + cos²x)", "(sin x + cos x)(sin²x − sinx.cosx + cos²x)", "(sinx − cosx)³"], correctIndex: 0 },
      { marks: 1, description: "Which identity finishes the proof, turning sin²x+cos²x into 1?", options: ["sin²x + cos²x = 1", "sin²x − cos²x = 1", "1 − sin²x = cos²x", "sinx.cosx = 1"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "It is given that sin² x ; cos² x and (1/2) sin 2x are the first three terms of an arithmetic sequence. The constant difference of the arithmetic sequence is NOT zero. Determine the general solution for x.",
    marks: 7, topicKey: "trigonometry", cognitiveLevelName: "Problem Solving",
    model_answer: "For an arithmetic sequence, cos²x − sin²x = (1/2)sin2x − cos²x. Using sin2x = 2sinx.cosx: cos²x − sin²x = sinx.cosx − cos²x, giving 2cos²x − sinx.cosx − sin²x = 0, which factorises as (2cosx + sinx)(cosx − sinx) = 0. So 2cosx = −sinx (giving tanx = −2) or cosx = sinx (giving tanx = 1, rejected since the constant difference would be zero, meaning sin²x = cos²x makes the first two terms equal). Using tanx = −2: reference angle 63,43°, so x = 116,57° + k.180°, k ∈ ℤ.",
    marking_notes: "Correctly equating the common differences, correctly substituting the double-angle identity, correct standard form, correct factors, both resulting equations (with the invalid tanx = 1 case identified), and the correct general solution.",
    steps: [
      { marks: 1, description: "What equation do you get by equating the common differences of the arithmetic sequence?", options: ["cos²x − sin²x = (1/2)sin2x − cos²x", "sin²x − cos²x = (1/2)sin2x − cos²x", "cos²x − sin²x = cos²x − (1/2)sin2x", "cos²x + sin²x = (1/2)sin2x"], correctIndex: 0 },
      { marks: 1, description: "Which identity do you substitute for sin 2x?", options: ["sin2x = 2sinx.cosx", "sin2x = sin²x − cos²x", "sin2x = 2cos²x − 1", "sin2x = cosx.cosx"], correctIndex: 0 },
      { marks: 1, description: "What is the standard form after simplifying?", options: ["2cos²x − sinx.cosx − sin²x = 0", "2cos²x + sinx.cosx − sin²x = 0", "cos²x − sinx.cosx − sin²x = 0", "2sin²x − sinx.cosx − cos²x = 0"], correctIndex: 0 },
      { marks: 1, description: "How does this factorise?", options: ["(2cosx + sinx)(cosx − sinx) = 0", "(2cosx − sinx)(cosx + sinx) = 0", "(cosx + sinx)(2cosx − sinx) = 0", "(2sinx + cosx)(sinx − cosx) = 0"], correctIndex: 0 },
      { marks: 1, description: "What are the two resulting equations (in tan x)?", options: ["tanx = −2 or tanx = 1", "tanx = 2 or tanx = 1", "tanx = −2 or tanx = −1", "tanx = 2 or tanx = −1"], correctIndex: 0 },
      { marks: 1, description: "Why is tanx = 1 rejected here?", options: [
        "It would make sin²x = cos²x, so the first two terms of the sequence would be equal, giving a zero common difference (excluded by the question)",
        "tanx = 1 has no solutions in degrees",
        "tanx = 1 only applies to geometric sequences",
        "It gives a negative common difference, which isn't allowed",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the general solution, using tanx = −2 (reference angle 63,43°)?", options: ["x = 116,57° + k.180°, k ∈ ℤ", "x = 63,43° + k.180°, k ∈ ℤ", "x = 116,57° + k.360°, k ∈ ℤ", "x = −63,43° + k.180°, k ∈ ℤ"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 7: TRIGONOMETRY — GRAPHS (10 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "The graph of f(x) = cos 2x is drawn for x ∈ [−135°;135°]. Write down the period of f.",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "180°, since f(x) = cos 2x has period 360°/2 = 180°.",
    marking_notes: "Accept only 180°.",
    steps: [{ marks: 1, description: "What is the period of f?", options: ["180°", "360°", "90°", "270°"], correctIndex: 0 }],
    image_url: `${IMG}/7-cos-graph.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "On the set of axes provided in the ANSWER BOOK, draw the graph of g(x) = tan 2x − 1 for x ∈ [−135°;135°].",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "The graph of tan 2x (period 90°, asymptotes at x = −135°, −45°, 45°, 135°), shifted 1 unit down, with x-intercepts where tan 2x = 1 (i.e. x = 22,5°, −67,5°, ...).",
    marking_notes: "One mark for the correct vertical asymptotes shown, one mark for the correct tan-shape branches, and one mark for the correct intercepts with the axes.",
    marking_points: [
      { marks: 1, description: "correct vertical asymptotes shown (at x = −135°, −45°, 45°, 135°)", keywords: ["asymptotes", "135", "45"] },
      { marks: 1, description: "correct increasing tan-shaped branches", keywords: ["shape", "increasing", "tan"] },
      { marks: 1, description: "correct intercepts with the axes shown", keywords: ["intercepts", "22 5", "axes"] },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Graph f is translated 45° to the left to form graph h. Determine the equation of h in its simplest form.",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "h(x) = f(x + 45°) = cos2(x + 45°) = cos(2x + 90°) = −sin 2x.",
    marking_notes: "Accept only h(x) = −sin 2x.",
    steps: [{ marks: 1, description: "What is the equation of h in its simplest form?", options: ["h(x) = −sin 2x", "h(x) = sin 2x", "h(x) = cos(2x + 45°)", "h(x) = −cos 2x"], correctIndex: 0 }],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Write down the range of h.",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "y ∈ [−1;1], the same range as any sine function with amplitude 1.",
    marking_notes: "Accept y ∈ [−1;1] or −1 ≤ y ≤ 1.",
    steps: [{ marks: 1, description: "What is the range of h?", options: ["y ∈ [−1;1]", "y ∈ [0;1]", "y ∈ (−1;1)", "y ∈ [−2;2]"], correctIndex: 0 }],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Determine the values of x for which (1 − tan 2x)(cos 2x) ≥ 0 in the interval x ∈ [0°;135°].",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "First find where tan 2x = 1: 2x = 45°, so x = 22,5° (the critical value in this interval, together with the asymptotes of tan 2x). Rewriting the inequality: (tan2x − 1)(cos2x) ≤ 0. Reading off the graphs of f and g (using the sketch), this holds for x ∈ [0°;22,5°] ∪ [112,5°;135°).",
    marking_notes: "Correct critical value (x = 22,5°), correctly rewriting the inequality with a consistent sign, and both correct intervals in the final answer.",
    steps: [
      { marks: 1, description: "Where does tan 2x = 1 in this interval?", options: ["x = 22,5°", "x = 45°", "x = 67,5°", "x = 90°"], correctIndex: 0 },
      { marks: 1, description: "Rewriting (1 − tan2x)(cos2x) ≥ 0 with tan2x moved to the front, what do you get?", options: ["(tan2x − 1)(cos2x) ≤ 0", "(tan2x − 1)(cos2x) ≥ 0", "(tan2x + 1)(cos2x) ≤ 0", "(1 + tan2x)(cos2x) ≤ 0"], correctIndex: 0 },
      { marks: 1, description: "What is the first interval of the solution?", options: ["[0°;22,5°]", "[0°;45°]", "(0°;22,5°)", "[22,5°;45°]"], correctIndex: 0 },
      { marks: 1, description: "What is the second interval of the solution?", options: ["[112,5°;135°)", "[90°;135°)", "(112,5°;135°]", "[112,5°;135°]"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: TRIGONOMETRY — 3D (10 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "As part of a school project, learners design a portable stage for a puppet show. BKLC is a horizontal base having KB̂C = 104° and BK̂C = 52,6°. The rectangular backdrop ABCD is vertical to the base and must have an area of 648 cm². The sides of ABCD are in the ratio AB : BC = 1 : 2. Show that AB = 18 cm.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since BC = 2AB, Area of ABCD = BC × AB = 2AB × AB = 648, so AB² = 324, giving AB = 18 cm.",
    marking_notes: "Correctly substituting BC = 2AB into the area formula, and correctly solving to confirm AB = 18 cm.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the area of rectangle ABCD?", options: ["648 = 2AB × AB", "648 = AB × AB", "648 = 2AB + AB", "648 = (1/2)AB × AB"], correctIndex: 0 },
      { marks: 1, description: "Solving, what is AB?", options: ["18 cm", "36 cm", "9 cm", "24 cm"], correctIndex: 0 },
    ],
    image_url: `${IMG}/8-stage-diagram.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Calculate the length of AC.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "AC² = AB² + BC² = 18² + 36² = 1620, so AC = √1620 = 18√5 = 40,25 cm.",
    marking_notes: "Correct substitution into Pythagoras, and the correct final length.",
    steps: [
      { marks: 1, description: "What is the correct substitution into Pythagoras?", options: ["AC² = 18² + 36²", "AC² = 18² − 36²", "AC² = 18² + 18²", "AC² = 36² − 18²"], correctIndex: 0 },
      { marks: 1, description: "What is AC?", options: ["18√5 = 40,25 cm", "40,25 cm² (units error aside, wrong magnitude)", "54,00 cm", "36√5 cm"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Calculate the length of diagonal KC.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using the sine rule in ΔKBC: KC/sin(KB̂C) = BC/sin(BK̂C), so KC = 36sin104°/sin52,6° = 43,97 cm.",
    marking_notes: "Correct substitution into the sine rule, and the correct final length.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the sine rule for ΔKBC?", options: ["KC/sin104° = 36/sin52,6°", "KC/sin52,6° = 36/sin104°", "KC/36 = sin104°/sin52,6°", "KC/sin104° = sin52,6°/36"], correctIndex: 0 },
      { marks: 1, description: "What is KC?", options: ["43,97 cm", "36,00 cm", "39,44 cm", "46,50 cm"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.4",
    text: "If AB = BK, calculate the size of KÂC.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "AK² = AB² + BK² = 18² + 18² = 648, so AK = 18√2 = 25,46 cm. Using the cosine rule in ΔAKC: KC² = AK² + AC² − 2.AK.AC.cosKÂC, so (43,97)² = (18√2)² + (18√5)² − 2(18√2)(18√5)cosKÂC, giving cosKÂC = 0,16..., so KÂC = 80,60°.",
    marking_notes: "Correct length of AK, correct substitution into the cosine rule, correct simplification, and the correct final angle.",
    steps: [
      { marks: 1, description: "What is AK, given AB = BK = 18 cm?", options: ["18√2 = 25,46 cm", "18,00 cm", "36,00 cm", "18√5 = 40,25 cm"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the cosine rule in ΔAKC?", options: ["(43,97)² = (18√2)² + (18√5)² − 2(18√2)(18√5)cosKÂC", "(43,97)² = (18√2)² + (18√5)² + 2(18√2)(18√5)cosKÂC", "(18√5)² = (43,97)² + (18√2)² − 2(43,97)(18√2)cosKÂC", "(43,97)² = (18)² + (18√5)² − 2(18)(18√5)cosKÂC"], correctIndex: 0 },
      { marks: 1, description: "Simplifying, what is cosKÂC?", options: ["0,16...", "0,84...", "−0,16...", "0,50..."], correctIndex: 0 },
      { marks: 1, description: "What is KÂC?", options: ["80,60°", "99,40°", "9,40°", "70,60°"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 9: EUCLIDEAN GEOMETRY — CIRCLE THEOREM PROOF (10 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "O is the centre of the circle. K, T and P lie on the circle. Use the diagram to prove the theorem which states that the angle subtended by a chord (or arc) at the centre of the circle is equal to twice the angle subtended by the same chord (or arc) at the circumference, that is prove that TÔP = 2TK̂P.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Construction: draw KO produced to a point on the circle. Ô1 = K̂1 + T̂ (exterior angle of a triangle). But K̂1 = T̂ (angles opposite equal radii, OK = OT). So Ô1 = 2K̂1. Similarly, Ô2 = K̂2 + P̂ (exterior angle), and K̂2 = P̂ (angles opposite equal radii, OK = OP), so Ô2 = 2K̂2. Therefore Ô1 + Ô2 = 2K̂1 + 2K̂2 = 2(K̂1 + K̂2), i.e. TÔP = 2TK̂P.",
    marking_notes: "One mark for the correct construction (draw KO produced), and one mark each for the four remaining correct statement/reason pairs building the proof.",
    marking_points: [
      { marks: 1, description: "correct construction: draw KO produced to a point on the circle", keywords: ["construction", "KO produced"] },
      { marks: 1, description: "Ô1 = K̂1 + T̂ [exterior angle of a triangle]", keywords: ["exterior angle", "O1 K1 T"] },
      { marks: 1, description: "K̂1 = T̂ [angles opposite equal radii]", keywords: ["opposite equal radii", "K1 T"] },
      { marks: 1, description: "therefore Ô1 = 2K̂1 (and similarly Ô2 = 2K̂2)", keywords: ["O1 2K1", "O2 2K2"] },
      { marks: 1, description: "adding: Ô1 + Ô2 = 2(K̂1 + K̂2), therefore TÔP = 2TK̂P", keywords: ["TOP 2TKP", "adding"] },
    ],
    image_url: `${IMG}/9-1-circle-ktp.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "O is the centre of the circle, POF is a diameter, and MF is a tangent to the circle at F. OM cuts the circle at L. P̂ = 32°. Calculate, with reasons, the size of Ô2.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Ô2 = 2P̂ = 2(32°) = 64° [angle at centre = 2 × angle at circumference, both subtending arc LF].",
    marking_notes: "Correct statement (Ô2 = 64°), and the correct reason (angle at centre = 2 × angle at circumference).",
    steps: [{ marks: 2, description: "What is Ô2, with reason?", options: ["64° [∠ at centre = 2 × ∠ at circumference]", "32° [∠ at centre = ∠ at circumference]", "58° [angles in a triangle]", "64° [tan-chord theorem]"], correctIndex: 0 }],
    image_url: `${IMG}/9-2-circle-pomlf.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Calculate, with reasons, the size of M̂.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "PF̂M = 90° [tangent ⊥ diameter]. In ΔPFM, M̂ = 180° − 90° − 64° = 26° [sum of angles in a triangle].",
    marking_notes: "Correct statement and reason for PF̂M = 90°, and the correct final value of M̂.",
    steps: [
      { marks: 1, description: "What is PF̂M, with reason?", options: ["90° [tangent ⊥ radius/diameter]", "64° [∠ at centre]", "32° [given]", "58° [angles in Δ]"], correctIndex: 0 },
      { marks: 2, description: "What is M̂, with reason?", options: ["26° [sum of ∠s in a triangle]", "64° [exterior angle of a triangle]", "58° [angles in a triangle]", "32° [tan-chord theorem]"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 10: EUCLIDEAN GEOMETRY — CYCLIC QUADRILATERAL (8 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "PQRS is a cyclic quadrilateral. T is a point on the circle such that QT ⊥ SR at V. PT and ST are drawn. Q̂2 = 35° and R̂ = Ŝ1. Calculate, with reasons, the size of QT̂S.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "In ΔQVR, R̂ = 55° [sum of angles in a triangle, using V̂1 = 90° and Q̂2 = 35°]. Therefore QT̂S = 55° [angles in the same segment as QR̂S, or equivalently subtending the same arc QS as R̂].",
    marking_notes: "Correct value of R̂ with reason, and the correct value of QT̂S with reason (angles in the same segment).",
    steps: [
      { marks: 1, description: "What is R̂, with reason?", options: ["55° [sum of ∠s in Δ]", "35° [given]", "90° [QT ⊥ SR]", "125° [co-int ∠s]"], correctIndex: 0 },
      { marks: 2, description: "What is QT̂S, with reason?", options: ["55° [∠s in the same segment]", "35° [∠s in the same segment]", "90° [∠s in a semi-circle]", "125° [opp ∠s of cyclic quad]"], correctIndex: 0 },
    ],
    image_url: `${IMG}/10-cyclic-quad-pqrst.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "Prove that PQ ‖ SR.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "SP̂Q = 125° [opposite angles of a cyclic quadrilateral, sum to 180° with QR̂S = 55°]. Ŝ1 = R̂ = 55° [given]. So SP̂Q + Ŝ1 = 125° + 55° = 180°. Therefore PQ ‖ SR [co-interior angles supplementary].",
    marking_notes: "Correct statement and reason for SP̂Q = 125°, correctly using the given Ŝ1 = R̂ = 55°, and the correct final reason (co-interior angles supplementary).",
    marking_points: [
      { marks: 1, description: "SP̂Q = 125° [opposite angles of a cyclic quadrilateral]", keywords: ["125", "cyclic quad"] },
      { marks: 1, description: "Ŝ1 = R̂ = 55° [given]", keywords: ["55", "given"] },
      { marks: 1, description: "PQ ‖ SR [co-interior angles supplementary, since SP̂Q + Ŝ1 = 180°]", keywords: ["co-interior", "supplementary", "180"] },
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Prove that PT is a diameter of the circle.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Q̂1 = 90° [co-interior angles, since PQ ‖ SR (proved in 10.2), with QT ⊥ SR]. Therefore PT is a diameter [converse: a chord subtending a 90° angle at the circumference / the converse of the angle in a semi-circle].",
    marking_notes: "Correct statement (Q̂1 = 90°) with reason, and the correct final conclusion with reason (converse of the angle in a semi-circle).",
    marking_points: [
      { marks: 1, description: "Q̂1 = 90° [co-interior angles; PQ ‖ SR]", keywords: ["90", "co-interior"] },
      { marks: 1, description: "PT is a diameter [converse: angle in a semi-circle / chord subtends 90°]", keywords: ["diameter", "converse", "semi-circle"] },
    ],
  },

  // ============ QUESTION 11: EUCLIDEAN GEOMETRY — PROPORTIONALITY & SIMILARITY (23 marks) ============

  {
    number: "11", sub_number: "11.1.1",
    text: "ΔABC is drawn. BA is produced to E. F and D are points on BC such that AD ‖ EF. AC and EF intersect at G. CF/FB = 2/5 and CG/GA = 3/2. Calculate, with reasons, the value of FD/CF.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "FD/CF = GA/CG [proportion theorem, since AD ‖ EF / FG is one side of ΔACD]. So FD/CF = GA/GC = 2/3.",
    marking_notes: "Correct statement and reason (proportion theorem, AD ‖ EF), and the correct final ratio.",
    steps: [
      { marks: 1, description: "Which theorem and relationship gives FD/CF?", options: ["FD/CF = GA/CG [proportion theorem; AD ‖ EF]", "FD/CF = CG/GA [proportion theorem; AD ‖ EF]", "FD/CF = CF/FB [given ratio directly]", "FD/CF = GC/CA [proportion theorem]"], correctIndex: 0 },
      { marks: 1, description: "What is FD/CF?", options: ["2/3", "3/2", "2/5", "5/2"], correctIndex: 0 },
    ],
    image_url: `${IMG}/11-1-triangle-abcefg.png`,
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "Calculate, with reasons, the value of BA/EA.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Letting CF = 2x and FB = 5x (from CF/FB = 2/5): FD = (2/3)CF = (2/3)(2x) = (4/3)x. Then BA/EA = BD/FD [proportion theorem; AD ‖ EF]. Substituting: BA/EA = [5x − (4/3)x]/[(4/3)x] = (11x/3)/(4x/3) = 11/4.",
    marking_notes: "Correct value of FD in terms of x, correct theorem and reason (proportion theorem, AD ‖ EF), correct substitution BA/EA = [5x − (4/3)x]/[(4/3)x] (subtraction, per the memo's diagram), and the correct final ratio 11/4.",
    steps: [
      { marks: 1, description: "What is FD, in terms of x (using CF = 2x)?", options: ["(4/3)x", "(2/3)x", "(3/2)x", "2x"], correctIndex: 0 },
      { marks: 1, description: "Which theorem and relationship gives BA/EA?", options: ["BA/EA = BD/FD [proportion theorem; AD ‖ EF]", "BA/EA = FD/BD [proportion theorem; AD ‖ EF]", "BA/EA = CF/FB [given ratio]", "BA/EA = GA/GC [proportion theorem]"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution for BD/FD?", options: ["(5x − (4/3)x) / ((4/3)x)", "(5x + (4/3)x) / ((4/3)x)", "((4/3)x) / (5x)", "(5x) / ((4/3)x − 5x)"], correctIndex: 0 },
      { marks: 1, description: "What is BA/EA?", options: ["11/4", "19/4", "4/11", "3/2"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.1.3",
    text: "Calculate, with reasons, the value of (Area of ΔGCF) / (Area of GFDA).",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "Area of GFDA = Area ΔCDA − Area ΔGCF. Area ΔGCF = (1/2)GC.CF.sinĈ, and Area ΔCDA = (1/2)AC.CD.sinĈ. Using GC = 3k, CA = 5k (from CG/GA = 3/2) and CF = 3p, CD = 5p (from CF/FB = 2/5, so CD = CF+FD proportionally scaled): Area ratio = [(1/2)(3k)(3p)sinĈ] / [(1/2)(5k)(5p)sinĈ − (1/2)(3k)(3p)sinĈ] = (9kp) / (25kp − 9kp) = 9/16.",
    marking_notes: "Correctly expressing GFDA as ΔCDA − ΔGCF, correctly setting up the area of ΔGCF using the sine rule area formula, correctly setting up the full ratio expression, and the correct final answer.",
    steps: [
      { marks: 1, description: "How do you express the area of GFDA?", options: ["Area ΔCDA − Area ΔGCF", "Area ΔCDA + Area ΔGCF", "Area ΔCFD − Area ΔGCA", "Area ΔABC − Area ΔGCF"], correctIndex: 0 },
      { marks: 1, description: "What is the area of ΔGCF?", options: ["(1/2)(GC)(CF)sinĈ", "(1/2)(GA)(FB)sinĈ", "(1/2)(GC)(CF)", "(GC)(CF)sinĈ"], correctIndex: 0 },
      { marks: 1, description: "What is the full ratio expression before simplifying?", options: [
        "[(1/2)(3k)(3p)sinĈ] / [(1/2)(5k)(5p)sinĈ − (1/2)(3k)(3p)sinĈ]",
        "[(1/2)(5k)(5p)sinĈ] / [(1/2)(3k)(3p)sinĈ − (1/2)(5k)(5p)sinĈ]",
        "[(1/2)(3k)(3p)sinĈ] / [(1/2)(5k)(5p)sinĈ]",
        "[(1/2)(2k)(2p)sinĈ] / [(1/2)(5k)(5p)sinĈ]",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the final ratio?", options: ["9/16", "9/25", "16/9", "3/5"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.2.1",
    text: "WVZR is a cyclic quadrilateral. RZ is produced to Q. A tangent is drawn from Q to touch the circle at S. WV is produced to E, a point on ZQ. RW produced meets ZV produced in P. PQ ‖ WE. RS and ZS are drawn. Prove that PR = (PW.QR)/QE.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "QE/QR = PW/PR [proportion theorem; PQ ‖ WE, one side of ΔPQR]. Making PR the subject: PR = PW.QR/QE.",
    marking_notes: "Correct statement and reason (proportion theorem, PQ ‖ WE), and correctly making PR the subject.",
    marking_points: [
      { marks: 1, description: "QE/QR = PW/PR [proportion theorem; PQ ‖ WE]", keywords: ["proportion theorem", "PQ WE"] },
      { marks: 1, description: "PR = PW.QR/QE (making PR the subject)", keywords: ["PW QR QE", "subject"] },
    ],
    image_url: `${IMG}/11-2-cyclic-quad-pqrswzve.png`,
  },
  {
    number: "11", sub_number: "11.2.2",
    text: "If ΔPQZ ||| ΔRQP, then prove that PQ² = RQ.QZ.",
    marks: 1, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since ΔPQZ ||| ΔRQP, PQ/RQ = QZ/QP, so PQ² = RQ.QZ.",
    marking_notes: "Accept the correctly stated proportion PQ/RQ = QZ/QP leading to PQ² = RQ.QZ.",
    marking_points: [{ marks: 1, description: "PQ/RQ = QZ/QP [ΔPQZ ||| ΔRQP], so PQ² = RQ.QZ", keywords: ["PQ RQ QZ QP", "similar"] }],
  },
  {
    number: "11", sub_number: "11.2.3",
    text: "Prove that ΔQSZ ||| ΔQRS.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "In ΔQSZ and ΔQRS: Q̂2 = Q̂2 [common angle]. Ŝ1 = R̂2 [tangent-chord theorem]. So Ẑ1 = QŜR [third angle of a triangle]. Therefore ΔQSZ ||| ΔQRS [∠∠∠].",
    marking_notes: "Correct common angle statement, correct tangent-chord theorem statement, and the correct final similarity conclusion with reason.",
    marking_points: [
      { marks: 1, description: "Q̂2 = Q̂2 [common angle]", keywords: ["common angle"] },
      { marks: 1, description: "Ŝ1 = R̂2 [tangent-chord theorem]", keywords: ["tangent-chord", "tan chord"] },
      { marks: 1, description: "ΔQSZ ||| ΔQRS [∠∠∠, using the third angle of the triangle]", keywords: ["QSZ QRS", "similar"] },
    ],
  },
  {
    number: "11", sub_number: "11.2.4",
    text: "Prove that PQ = QS.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "QS/QR = QZ/QS [ΔQSZ ||| ΔQRS, proved in 11.2.3], so QS² = QZ.QR. But PQ² = RQ.QZ [proved in 11.2.2]. Since both QS² and PQ² equal QZ.QR, PQ = QS.",
    marking_notes: "Correct proportion from the similarity in 11.2.3, correctly concluding QS² = QZ.QR, and correctly combining with the result of 11.2.2 to conclude PQ = QS.",
    marking_points: [
      { marks: 1, description: "QS/QR = QZ/QS [ΔQSZ ||| ΔQRS]", keywords: ["QS QR QZ", "similar"] },
      { marks: 1, description: "QS² = QZ.QR", keywords: ["QS2 QZ QR", "QS squared"] },
      { marks: 1, description: "Combining with PQ² = RQ.QZ (proved in 11.2.2), PQ = QS", keywords: ["PQ QS", "combining"] },
    ],
  },
  {
    number: "11", sub_number: "11.2.5",
    text: "Prove that PW = (QE.PZ)/√(QR.QZ).",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "PQ/RQ = PZ/PR [ΔPQZ ||| ΔRQP], so PR = QR.PZ/PQ. But also PR = PW.QR/QE [proved in 11.2.1]. Equating: PW.QR/QE = QR.PZ/PQ, giving PW = QE.PZ/PQ. Since PQ² = RQ.QZ [proved in 11.2.2], PQ = √(RQ.QZ). Therefore PW = QE.PZ/√(QR.QZ).",
    marking_notes: "Correct alternate expression for PR (= QR.PZ/PQ), correctly equating with the result of 11.2.1, correctly isolating PW, and correctly substituting PQ = √(RQ.QZ) to finish.",
    marking_points: [
      { marks: 1, description: "PR = QR.PZ/PQ [from ΔPQZ ||| ΔRQP]", keywords: ["QR PZ PQ", "PR"] },
      { marks: 1, description: "equating with PR = PW.QR/QE (proved in 11.2.1)", keywords: ["equating", "PW QR QE"] },
      { marks: 1, description: "PW = QE.PZ/PQ (isolating PW)", keywords: ["PW QE PZ PQ"] },
      { marks: 1, description: "substituting PQ = √(RQ.QZ) to get PW = QE.PZ/√(QR.QZ)", keywords: ["PQ RQ QZ", "square root"] },
    ],
  },
];

// No exam_schedule entries here, matching the Mathematics P1 and Physical
// Sciences ingestion convention.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
