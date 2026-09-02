// Real DBE past paper: Mathematics P2, November 2023, National (English).
// Source: official DBE question paper + official marking guidelines, both
// fetched from stanmorephysics.com. QP is 13 numbered question pages + 1
// information/formula sheet (14 pages total, confirmed by reading every
// rendered page against its printed page-footer number) — the file does NOT
// include the blank 23-page answer book mentioned on its own cover page, so
// there was nothing to skip there. The memo (23 pages) is the genuine
// official DBE marking guideline: its cover page reads "MARKING
// GUIDELINES/NASIENRIGLYNE" with the official crest and "Copyright
// reserved/Kopiereg voorbehou", and every memo page's content matches its
// corresponding QP question with no stray/mismatched pages found.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here: Q1=12, Q2=8, Q3=20, Q4=20, Q5=31, Q6=12,
// Q7=7, Q8=16, Q9=9, Q10=15 (sum = 150, matching the printed "TOTAL: 150" on
// the QP and each question's own printed bracket total on both QP and memo).
//
// This is the third Mathematics P2 paper ingested into this app (after
// Nov 2025's P2). It reuses the same Mathematics subject row, the same four
// CAPS cognitive levels, and ALL FOUR of Nov 2025 P2's existing topic keys
// (statistics, analytical_geometry, trigonometry, euclidean_geometry) — this
// paper's content maps onto exactly the same four broad CAPS strands, so no
// new topics were needed.
//
// Marking-point pattern: calculation sub-questions (including trig identity
// "prove"/"simplify" derivations, which have a single determinate chain of
// intermediate expressions per the memo's primary method) use the
// stepped-MCQ pattern (`steps: MarkingPointStep[]`), one step per
// mark-earning stage, step marks summing exactly to the sub-question's
// `marks`, with plausible Grade 12 distractors (sign slips, wrong
// theorem/rule applied, arithmetic slips, wrong root chosen, mixing up which
// triangle a rule applies to). Genuinely non-computational Euclidean-geometry
// proofs (formal statement + reason pairs: 8.1, 9.2, 10.1, 10.2, 10.3) use
// `marking_points: MarkingPoint[]` instead, since these are graded on which
// correct statements/reasons appear, not on a single determinate final
// value. There is no graph-drawing question in this particular paper (all
// graphs are already given in the QP), so marking_points is used only for
// those five Euclidean-geometry proofs. Where the memo shows an OR/
// alternative method, the steps/points below are based on the FIRST/primary
// method shown in the memo, not an amalgam of methods.
//
// Diagrams: all diagrams in this paper (Q3, Q4, Q6, Q7, Q8.1, Q8.2, Q8.3,
// Q9, Q10) are vector line-drawings rendered directly into the page content
// stream (not separate embedded raster images), so they were cropped from
// full-page renders rather than extracted as clean standalone images. Each
// crop was re-viewed after cropping and cross-checked against the exact
// sub-question it is attached to (see the mandatory image/question
// cross-check in the ingestion instructions). Question 1, Question 2 and
// Question 5 have no diagrams in the question paper.
//
// Judgment calls:
// - Q1.2/Q4.6/Q9.3: the memo gives two independent valid final answers via
//   different methods or (for Q4.6) two genuinely distinct correct final
//   values (translating the smaller circle either direction still touches
//   the larger circle internally). Where the memo shows two DIFFERENT VALID
//   NUMBERS (Q4.6 only), both are captured as separate steps. Elsewhere, the
//   first/primary method's single answer is used, consistent with the
//   "primary method" convention above.
// - Q2.1: the QP instruction is "complete the cumulative frequency column"
//   (fill in blanks in a printed table), not a free-response calculation, so
//   it is modelled as two stepped-MCQ checks mirroring the memo's own two
//   tick marks ("5; 20" and "40").
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
  year: 2023,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2023/11/NSC-Maths-Grade-12-November-2023-P2-only.pdf" as string | null,
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

const IMG = "/question-images/maths-2023-p2";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: STATISTICS — REGRESSION (12 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Truck drivers travel a certain distance and have a rest before travelling further. A driver kept record of the distance he travelled (in km) on 8 trips and the amount of rest time (in minutes) before he continued his journey: (180;20), (200;25), (400;55), (600;120), (170;15), (350;50), (270;40), (300;45). Determine the equation of the least squares regression line for the data.",
    marks: 3, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using a calculator's linear regression function: a = −23,846... and b = 0,227..., so ŷ = −23,85 + 0,23x.",
    marking_notes: "Correct value of a, correct value of b, and the correct equation combining them.",
    steps: [
      { marks: 1, description: "What is a (the y-intercept of the regression line)?", options: ["−23,85", "0,23", "150,00", "−0,23"], correctIndex: 0 },
      { marks: 1, description: "What is b (the gradient of the regression line)?", options: ["0,23", "−23,85", "−0,23", "23,85"], correctIndex: 0 },
      { marks: 1, description: "What is the full equation?", options: ["ŷ = −23,85 + 0,23x", "ŷ = 23,85 − 0,23x", "ŷ = 0,23 − 23,85x", "ŷ = −23,85x + 0,23"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "If a truck driver travelled 550 km, predict the amount of time (in minutes) that he should rest before continuing his journey.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "ŷ = −23,85 + 0,23(550) = 102,65 minutes.",
    marking_notes: "Correct substitution of x = 550 into the regression equation, and the correct final predicted time.",
    steps: [
      { marks: 1, description: "What do you substitute into the regression equation?", options: ["−23,85 + 0,23(550)", "−23,85 + 0,23(8)", "0,23 − 23,85(550)", "(−23,85 + 0,23) × 550"], correctIndex: 0 },
      { marks: 1, description: "What is the predicted rest time?", options: ["102,65 minutes", "126,50 minutes", "150,00 minutes", "26,15 minutes"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Write down the correlation coefficient for the data.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "r = 0,98.",
    marking_notes: "Accept only r = 0,98.",
    steps: [{ marks: 1, description: "What is the correlation coefficient r?", options: ["0,98", "0,23", "−0,98", "1,00"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Interpret your answer to QUESTION 1.3.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "r = 0,98 shows a very strong positive correlation between the distance travelled and the amount of rest time.",
    marking_notes: "Accept 'very strong positive correlation' or equivalent (strong, positive).",
    steps: [{ marks: 1, description: "What does r = 0,98 indicate about the data?", options: ["A very strong positive correlation", "A very strong negative correlation", "A weak positive correlation", "No correlation"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.5.1",
    text: "At each stop, the truck driver spent money buying food and other refreshments. The amounts (in rands) were: 100, 150, 130, 200, 50, 180, 200, 190. Calculate the mean amount of money he spent at each stop.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "x̄ = 1200/8 = R150.",
    marking_notes: "Correct sum (1200), and the correct mean.",
    steps: [
      { marks: 1, description: "What is the sum of all 8 amounts?", options: ["1200", "1100", "1250", "1000"], correctIndex: 0 },
      { marks: 1, description: "What is the mean amount spent?", options: ["R150", "R160", "R140", "R125"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.5.2",
    text: "Calculate the standard deviation for the data.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "σ = 50,50.",
    marking_notes: "Accept only σ = 50,50.",
    steps: [{ marks: 1, description: "What is the standard deviation?", options: ["50,50", "150,00", "45,25", "60,00"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.5.3",
    text: "At how many stops did the driver spend an amount that was less than one standard deviation below the mean?",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "x̄ − σ = 150 − 50,50 = 99,50. Only the stop where he spent R50 is below this value. So 1 stop.",
    marking_notes: "Correct calculation of x̄ − σ (= 99,50), and the correct count of stops below it.",
    steps: [
      { marks: 1, description: "What is x̄ − σ?", options: ["99,50", "200,50", "150,00", "50,50"], correctIndex: 0 },
      { marks: 1, description: "At how many stops was the amount spent less than this value?", options: ["1", "2", "0", "3"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 2: STATISTICS — CUMULATIVE FREQUENCY (8 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "At a certain school, all teachers present on a specific day were interviewed about how many glasses of water they drank during a school day: 0≤x<2 → 5 staff members; 2≤x<4 → 15; 4≤x<6 → 13; 6≤x<8 → 5; 8≤x<10 → 2. Complete the cumulative frequency column for this data.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "Cumulative frequencies: 5, 20, 33, 38, 40 (running totals of the class frequencies 5, 15, 13, 5, 2).",
    marking_notes: "Correct cumulative frequencies for the first two classes (5 and 20), and the correct final cumulative frequency (40).",
    steps: [
      { marks: 1, description: "What are the cumulative frequencies for the first two classes (0≤x<2 and 2≤x<4)?", options: ["5 and 20", "5 and 15", "0 and 5", "5 and 35"], correctIndex: 0 },
      { marks: 1, description: "What is the final (total) cumulative frequency?", options: ["40", "38", "45", "33"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "How many staff members were interviewed?",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "40 staff members, the final cumulative frequency.",
    marking_notes: "Accept only 40.",
    steps: [{ marks: 1, description: "How many staff members were interviewed?", options: ["40", "38", "33", "20"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.3",
    text: "How many staff members drank fewer than 6 glasses of water during a school day?",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "33 staff members, the cumulative frequency up to (and including) the 4≤x<6 class.",
    marking_notes: "Accept only 33.",
    steps: [{ marks: 1, description: "How many staff members drank fewer than 6 glasses per day?", options: ["33", "38", "20", "13"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.4",
    text: "The staff committee observed that k teachers were absent on the day of the interviews. It was found that half of these k teachers drank from 0 to fewer than 2 (0≤x<2) glasses of water per day, while the remainder drank from 4 to fewer than 6 (4≤x<6) glasses per day. When these k teachers are included in the data, the estimated mean is 4 glasses of water per staff member per day. How many teachers were absent on the day of the interviews?",
    marks: 4, topicKey: "statistics", cognitiveLevelName: "Problem Solving",
    model_answer: "Using midpoints 1, 3, 5, 7, 9 for the five classes and adding k/2 to the first class and k/2 to the third class: [1(5+k/2) + 3(15) + 5(13+k/2) + 7(5) + 9(2)] / (40+k) = 4. Expanding: 5 + k/2 + 45 + 65 + 5k/2 + 35 + 18 = 160 + 4k, so 3k + 168 = 160 + 4k, giving k = 8.",
    marking_notes: "Correct setup of the new weighted mean using the original answer from 2.2 plus k, correct substitution of the two extra midpoint terms with k/2 each, and correctly solving for k.",
    steps: [
      { marks: 1, description: "What is the new total number of staff members, in terms of k?", options: ["40 + k", "40 − k", "38 + k", "40 + 2k"], correctIndex: 0 },
      { marks: 1, description: "What is the correct extra term added for the 0≤x<2 class?", options: ["1 × (5 + k/2)", "1 × (5 + k)", "2 × (5 + k/2)", "1 × k/2"], correctIndex: 0 },
      { marks: 1, description: "What is the correct extra term added for the 4≤x<6 class?", options: ["5 × (13 + k/2)", "5 × (13 + k)", "4 × (13 + k/2)", "5 × k/2"], correctIndex: 0 },
      { marks: 1, description: "Solving the resulting equation, how many teachers were absent?", options: ["8", "10", "6", "12"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 3: ANALYTICAL GEOMETRY — TRIANGLE LSN (20 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "L(−4;1), S(4;5) and N(−2;−3) are the vertices of a triangle having SL̂N = 90°. LN intersects the x-axis at K. Calculate the length of SL. Leave your answer in surd form.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "SL = √[(4−(−4))² + (5−1)²] = √80 = 4√5 units.",
    marking_notes: "Correct substitution of S and L into the distance formula, and the correct simplified surd answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the distance formula?", options: ["√[(4−(−4))² + (5−1)²]", "√[(4−(−2))² + (5+3)²]", "√[(4+4)² + (5+1)²]", "√[(−4−1)² + (4−5)²]"], correctIndex: 0 },
      { marks: 1, description: "What is SL in simplified surd form?", options: ["4√5", "√80", "2√20", "8√5"], correctIndex: 0 },
    ],
    image_url: `${IMG}/3-triangle-lsn.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the gradient of SN.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "mSN = (5−(−3))/(4−(−2)) = 8/6 = 4/3.",
    marking_notes: "Correct substitution of S and N into the gradient formula, and the correct answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the gradient formula?", options: ["(5−(−3))/(4−(−2))", "(4−(−2))/(5−(−3))", "(5+(−3))/(4+(−2))", "(−3−5)/(−2−4)"], correctIndex: 0 },
      { marks: 1, description: "What is mSN?", options: ["4/3", "3/4", "8/6 (unsimplified only)", "−4/3"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Calculate the size of θ, the angle of inclination of SN.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "tan θ = mSN = 4/3, so θ = 53,13°.",
    marking_notes: "Correctly relating tan θ to mSN, and the correct final angle.",
    steps: [
      { marks: 1, description: "Which equation relates θ to the gradient of SN?", options: ["tan θ = mSN = 4/3", "sin θ = mSN = 4/3", "θ = mSN = 4/3", "tan θ = 3/4"], correctIndex: 0 },
      { marks: 1, description: "What is θ?", options: ["53,13°", "36,87°", "45,00°", "41,41°"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Calculate the size of LN̂S.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mLN = (1−(−3))/(−4−(−2)) = −2. LK̂O = 116,565° (angle of inclination of LN). LN̂S = 116,565° − 53,13° = 63,44°.",
    marking_notes: "Correct gradient of LN, correct size of LK̂O, and the correct final angle LN̂S.",
    steps: [
      { marks: 1, description: "What is mLN?", options: ["−2", "2", "−1/2", "1/2"], correctIndex: 0 },
      { marks: 1, description: "What is the angle of inclination LK̂O (using mLN = −2)?", options: ["116,565°", "63,435°", "26,565°", "153,435°"], correctIndex: 0 },
      { marks: 1, description: "What is LN̂S?", options: ["63,44°", "53,13°", "116,57°", "10,31°"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Determine the equation of the line which passes through L and is parallel to SN. Write your answer in the form y = mx + c.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using mSN = 4/3 and point L(−4;1): 1 = (4/3)(−4) + c, so c = 19/3, giving y = (4/3)x + 19/3.",
    marking_notes: "Correct gradient used (mSN = 4/3), correct substitution of L's coordinates, and the correct final equation.",
    steps: [
      { marks: 1, description: "Which gradient must this line have?", options: ["mSN = 4/3", "mLN = −2", "mSL = 1/2", "mSN = 3/4"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using L(−4;1)?", options: ["1 = (4/3)(−4) + c", "1 = (4/3)(4) + c", "−4 = (4/3)(1) + c", "1 = (3/4)(−4) + c"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of the line?", options: ["y = (4/3)x + 19/3", "y = (4/3)x − 19/3", "y = (3/4)x + 19/3", "y = (4/3)x + 4"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "Calculate the area of ΔLSN.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "SL = 4√5. LN = √[(−4−(−2))² + (1−(−3))²] = √20 = 2√5. Since SL̂N = 90°, Area ΔLSN = (1/2)(4√5)(2√5) = 20 units².",
    marking_notes: "Correct length of LN, correct substitution into the right-angled-triangle area formula, and the correct final area.",
    steps: [
      { marks: 1, description: "What is the length of LN?", options: ["2√5", "√20 (unsimplified)", "4√5", "√5"], correctIndex: 0 },
      { marks: 1, description: "What do you substitute to find the area of ΔLSN (using SL̂N = 90°)?", options: ["(1/2)(4√5)(2√5)", "(1/2)(4√5)(2√5)sin90°", "(4√5)(2√5)", "(1/2)(4√5)²"], correctIndex: 0 },
      { marks: 1, description: "What is the area of ΔLSN?", options: ["20 units²", "40 units²", "10 units²", "80 units²"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.7",
    text: "Calculate the coordinates of point P, which is equidistant from L, S and N.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since SL̂N = 90°, SN is a diameter of the circle through L, S, N, so P is the midpoint of SN: P = ((4+(−2))/2 ; (5+(−3))/2) = (1;1).",
    marking_notes: "Correctly identifying SN as a diameter (chord subtends 90° / converse angle in a semicircle), and the correct coordinates of the midpoint P.",
    steps: [
      { marks: 1, description: "Why must P be the midpoint of SN?", options: ["SN is a diameter of the circle through L, S, N, since SL̂N = 90° (chord subtends 90°)", "SL is a diameter, since SL̂N = 90°", "P is equidistant only from S and N by definition", "LN is a diameter, since it passes through K"], correctIndex: 0 },
      { marks: 1, description: "What is the x-coordinate of P?", options: ["1", "3", "−1", "0"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of P?", options: ["1", "0", "2", "−1"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.8",
    text: "Calculate the size of LP̂S.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "LP̂N = θ = 53,13° [alt ∠s; LP ∥ x-axis]. Therefore LP̂S = 126,87°.",
    marking_notes: "Correct value of LP̂N (with reason), and the correct final answer.",
    steps: [{ marks: 2, description: "What is LP̂S, with reason?", options: ["126,87° [co-int/alt ∠s with LP̂N = 53,13°]", "63,44° [∠ at centre = 2 × ∠ at circumference]", "53,13° [alt ∠s]", "116,57° [exterior ∠ of a Δ]"], correctIndex: 0 }],
  },

  // ============ QUESTION 4: ANALYTICAL GEOMETRY — TWO CIRCLES (20 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "The circle with centre O has the equation x² + y² = 20. G(t;0) is the centre of the larger circle. A common tangent touches the circles at D and F respectively, such that D(p;−2) lies in the 4th quadrant. Given that D(p;−2) lies on the smaller circle, show that p = 4.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "p² + (−2)² = 20, so p² = 16, giving p = ±4. Since D lies in the 4th quadrant, p = 4.",
    marking_notes: "Correct substitution of D(p;−2) into the circle's equation, and correctly obtaining p² = 16 then selecting p = 4 (rejecting p = −4, since D is in the 4th quadrant).",
    steps: [
      { marks: 1, description: "What is the correct substitution into x² + y² = 20?", options: ["p² + (−2)² = 20", "p² + 2² = 20", "p² − (−2)² = 20", "p² + (−2)² = 4"], correctIndex: 0 },
      { marks: 1, description: "Solving, and rejecting the invalid root, what is p?", options: ["4 (p = −4 rejected, since D is in the 4th quadrant)", "−4 (p = 4 rejected)", "16", "±4 (both accepted)"], correctIndex: 0 },
    ],
    image_url: `${IMG}/4-circle-odfg.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "E(6;2) is the midpoint of DF. Determine the coordinates of F.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "(4+xF)/2 = 6 gives xF = 8. (−2+yF)/2 = 2 gives yF = 6. So F(8;6).",
    marking_notes: "Correct midpoint-formula method, and the correct x- and y-coordinates of F.",
    steps: [
      { marks: 1, description: "Which method finds F from midpoint E and endpoint D(4;−2)?", options: ["(4+xF)/2 = 6 and (−2+yF)/2 = 2", "(4+xF)/2 = −2 and (6+yF)/2 = 2", "(xF−4)/2 = 6 and (yF+2)/2 = 2", "(4−xF)/2 = 6 and (−2−yF)/2 = 2"], correctIndex: 0 },
      { marks: 1, description: "What is the x-coordinate of F?", options: ["8", "16", "2", "10"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of F?", options: ["6", "4", "8", "2"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Determine the equation of the common tangent, DF, in the form y = mx + c.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mDE = (−2−2)/(4−6) = 2. Using D(4;−2): −2 = 2(4) + c, so c = −10, giving y = 2x − 10.",
    marking_notes: "Correct gradient (using D, E, or F), correct substitution of one of the points, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is the correct substitution for the gradient of DF, using D(4;−2) and E(6;2)?", options: ["(−2−2)/(4−6)", "(4−6)/(−2−2)", "(−2+2)/(4+6)", "(2−4)/(−2−6)"], correctIndex: 0 },
      { marks: 1, description: "What is the gradient of DF?", options: ["2", "−2", "1/2", "−1/2"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using D(4;−2)?", options: ["−2 = 2(4) + c", "−2 = 2(−4) + c", "4 = 2(−2) + c", "−2 = (1/2)(4) + c"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of DF?", options: ["y = 2x − 10", "y = 2x + 10", "y = −2x − 10", "y = 2x − 6"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Calculate the value of t. Show ALL working.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since GF ⊥ DF (tangent ⊥ radius), mGF = −1/2 (perpendicular to mDF = 2). Using F(8;6): (0−6)/(t−8) = −1/2, so −(t−8) = 2(−6), giving t = 20.",
    marking_notes: "Correct perpendicular gradient of GF, correct substitution of F and G(t;0) into the gradient formula, and the correct final value of t.",
    steps: [
      { marks: 1, description: "What is mGF (perpendicular to DF, since GF is a radius to the tangent point F)?", options: ["−1/2", "1/2", "−2", "2"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using F(8;6) and G(t;0)?", options: ["(0−6)/(t−8) = −1/2", "(6−0)/(8−t) = −1/2", "(0−6)/(t−8) = 2", "(t−8)/(0−6) = −1/2"], correctIndex: 0 },
      { marks: 1, description: "What is t?", options: ["20", "16", "4", "12"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Determine the equation of the larger circle in the form ax² + by² + cx + dy + e = 0.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "F(8;6), G(20;0). r² = (8−20)² + (6−0)² = 180. So (x−20)² + y² = 180, giving x² + y² − 40x + 220 = 0.",
    marking_notes: "Correct substitution of F and G to find r², correct value of r², correct equation of the circle in centre-radius form, and correctly expanding to the required general form.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find r² (using F and G)?", options: ["(8−20)² + (6−0)² = r²", "(20−8)² + (0−6)² = r²", "(8−20)² − (6−0)² = r²", "(8+20)² + (6+0)² = r²"], correctIndex: 0 },
      { marks: 1, description: "What is r²?", options: ["180", "144", "36", "220"], correctIndex: 0 },
      { marks: 1, description: "What is the equation in centre-radius form?", options: ["(x−20)² + y² = 180", "(x+20)² + y² = 180", "(x−20)² + y² = √180", "x² + (y−20)² = 180"], correctIndex: 0 },
      { marks: 1, description: "What is the expanded equation?", options: ["x² + y² − 40x + 220 = 0", "x² + y² + 40x + 220 = 0", "x² + y² − 40x − 220 = 0", "x² + y² − 20x + 220 = 0"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "The smaller circle must be translated by k units along the x-axis to touch the larger circle internally. Calculate the possible values of k.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "Smaller circle radius r = 2√5 (from x²+y²=20). Larger circle radius R = 6√5 (from r²=180). With G(20;0): k = 20 − (6√5 − 2√5) = 20 − 4√5 = 11,06 units, or k = 20 + (6√5 − 2√5) = 20 + 4√5 = 28,94 units.",
    marking_notes: "Correct radii of both circles, and both correct values of k (the smaller circle can touch the larger circle internally on either side of it).",
    steps: [
      { marks: 2, description: "What is the first possible value of k (translating so the smaller circle sits inside the larger circle on the near side of G)?", options: ["20 − 4√5 = 11,06 units", "20 − 4√5 = 20,00 units", "20 − 2√5 = 15,53 units", "6√5 − 2√5 = 8,94 units"], correctIndex: 0 },
      { marks: 2, description: "What is the second possible value of k (on the far side of G)?", options: ["20 + 4√5 = 28,94 units", "20 + 2√5 = 24,47 units", "20 + 6√5 = 33,42 units", "40 + 4√5 = 48,94 units"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: TRIGONOMETRY — IDENTITIES (31 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "Given: sin β = 1/3, where β ∈ (90°;270°). Without using a calculator, determine cos β.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "In the reference triangle (β in the 2nd or 3rd quadrant, so cos β is negative), r = 3, opposite = 1, so adjacent = −√(3²−1²) = −√8 = −2√2. cos β = −2√2/3.",
    marking_notes: "Correct value of x (the adjacent side, = −2√2), and the correct final answer.",
    steps: [
      { marks: 1, description: "What quadrant(s) must β lie in, given sin β = 1/3 > 0 and β ∈ (90°;270°)?", options: ["Quadrant 2 (90° to 180°), where cos is negative", "Quadrant 3, where cos is negative", "Quadrant 1, where cos is positive", "Quadrant 4, where cos is positive"], correctIndex: 0 },
      { marks: 1, description: "What is the adjacent side x (using Pythagoras, r = 3, opposite = 1)?", options: ["−2√2", "2√2", "−√8/3", "−8"], correctIndex: 0 },
      { marks: 1, description: "What is cos β?", options: ["−2√2/3", "2√2/3", "1/3", "−1/3"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Given: sin β = 1/3, where β ∈ (90°;270°). Without using a calculator, determine sin 2β.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "sin 2β = 2 sin β cos β = 2(1/3)(−2√2/3) = −4√2/9.",
    marking_notes: "Correct use of the double-angle identity, correct substitution, and the correct final answer.",
    steps: [
      { marks: 1, description: "Which identity do you use?", options: ["sin 2β = 2 sin β cos β", "sin 2β = sin²β − cos²β", "sin 2β = 2 cos²β − 1", "sin 2β = 1 − 2sin²β"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["2(1/3)(−2√2/3)", "2(1/3)(2√2/3)", "(1/3)(−2√2/3)", "2(1/3)²"], correctIndex: 0 },
      { marks: 1, description: "What is sin 2β?", options: ["−4√2/9", "4√2/9", "−2√2/9", "−4√2/3"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Given: sin β = 1/3, where β ∈ (90°;270°). Without using a calculator, determine cos(450° − β).",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "cos(450° − β) = cos(90° − β) = sin β = 1/3.",
    marking_notes: "Correctly reducing 450° to 90° (using the 360° periodicity), correctly using the co-ratio, and the correct final answer.",
    steps: [
      { marks: 1, description: "What does cos(450° − β) reduce to first?", options: ["cos(90° − β)", "cos(450° + β)", "−cos(90° − β)", "cos(β − 90°)"], correctIndex: 0 },
      { marks: 1, description: "Using the co-ratio identity, what does cos(90° − β) equal?", options: ["sin β", "cos β", "−sin β", "−cos β"], correctIndex: 0 },
      { marks: 1, description: "What is the final answer?", options: ["1/3", "−1/3", "−2√2/3", "2√2/3"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Prove that: (cos⁴x + sin²x.cos²x) / (1 + sin x) = 1 − sin x.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "LHS = cos²x(cos²x + sin²x)/(1+sinx) = (1−sin²x)/(1+sinx) = (1−sinx)(1+sinx)/(1+sinx) = 1 − sin x = RHS.",
    marking_notes: "Correctly factoring out cos²x from the numerator, correctly using sin²x+cos²x=1, correctly rewriting cos²x as 1−sin²x, and correctly factorising the difference of squares to cancel with the denominator.",
    steps: [
      { marks: 1, description: "What common factor can you take out of the numerator, cos⁴x + sin²x.cos²x?", options: ["cos²x, giving cos²x(cos²x + sin²x)", "sin²x, giving sin²x(cos²x + cos²x)", "cosx, giving cosx(cos³x + sin²x.cosx)", "cos²x + sin²x, giving 1 × cos²x"], correctIndex: 0 },
      { marks: 1, description: "Using sin²x + cos²x = 1, what does cos²x(cos²x + sin²x) simplify to?", options: ["cos²x", "sin²x", "1", "cos²x.sin²x"], correctIndex: 0 },
      { marks: 1, description: "Rewriting cos²x as 1 − sin²x, what is the numerator now?", options: ["1 − sin²x", "1 + sin²x", "sin²x − 1", "1 − sinx"], correctIndex: 0 },
      { marks: 1, description: "Factorising 1 − sin²x and cancelling with the denominator (1 + sinx), what is the final result?", options: ["1 − sin x", "1 + sin x", "(1−sinx)(1+sinx)", "sin x − 1"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "For what value(s) of x in the interval x ∈ [0°;360°] is (cos⁴x + sin²x.cos²x) / (1 + sin x) undefined?",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "The expression is undefined where 1 + sin x = 0, i.e. sin x = −1, which happens at x = 270°.",
    marking_notes: "Correctly setting sin x = −1, and the correct final value of x.",
    steps: [{ marks: 2, description: "For which x is the expression undefined?", options: ["x = 270°", "x = 90°", "x = 180°", "x = 0° and x = 360°"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Write down the minimum value of the function defined by y = (cos⁴x + sin²x.cos²x) / (1 + sin x).",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since y = 1 − sin x (proved in 5.2.1), and sin x has a maximum of 1, the minimum of y is 1 − 1 = 0.",
    marking_notes: "Accept only a minimum value of 0.",
    steps: [{ marks: 2, description: "What is the minimum value of y = 1 − sin x?", options: ["0", "1", "2", "−1"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Given: cos(A − B) = cosA cosB + sinA sinB. Use the above identity to deduce that sin(A − B) = sinA cosB − cosA sinB.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "sin(A−B) = cos[90°−(A−B)] = cos[(90°−A)+B]... using cos[(90°−A)−(−B)] = cos(90°−A)cos(−B) + sin(90°−A)sin(−B) = sinA cosB + cosA(−sinB) = sinA cosB − cosA sinB.",
    marking_notes: "Correctly rewriting sin(A−B) using the co-ratio (90° − angle), correctly expanding using the given compound-angle identity, and correctly reducing to the final form.",
    steps: [
      { marks: 1, description: "How do you rewrite sin(A − B), using the co-ratio identity?", options: ["cos[90° − (A − B)]", "cos[90° + (A − B)]", "sin[90° − (A − B)]", "cos(A − B) − 90°"], correctIndex: 0 },
      { marks: 1, description: "Regrouping as cos[(90°−A) − (−B)] and expanding with the given identity, what do you get?", options: ["cos(90°−A)cos(−B) + sin(90°−A)sin(−B)", "cos(90°−A)cos(−B) − sin(90°−A)sin(−B)", "cos(90°−A)sin(−B) + sin(90°−A)cos(−B)", "cos(90°−A) + cos(−B)"], correctIndex: 0 },
      { marks: 1, description: "Reducing cos(90°−A), sin(90°−A), cos(−B) and sin(−B), what is the final result?", options: ["sinA cosB − cosA sinB", "sinA cosB + cosA sinB", "cosA sinB − sinA cosB", "cosA cosB − sinA sinB"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Hence, or otherwise, determine the general solution of the equation sin48°cosx − cos48°sinx = cos2x.",
    marks: 5, topicKey: "trigonometry", cognitiveLevelName: "Problem Solving",
    model_answer: "sin(48°−x) = cos2x. Using the co-ratio, cos2x = sin(90°−2x), so sin(48°−x) = sin(90°−2x). Then 48°−x = 90°−2x+k.360° or 48°−x = 180°−(90°−2x)+k.360°. Solving: x = 42°+k.360°, k ∈ ℤ, or −3x = 42°+k.360°, giving x = −14°−k.120°, k ∈ ℤ.",
    marking_notes: "Correctly rewriting the left side using the compound-angle identity from 5.3.1, correctly rewriting the right side using the co-ratio, correctly writing both general sinA=sinB equations, and both correct general solutions with k ∈ ℤ.",
    steps: [
      { marks: 1, description: "Using the identity from 5.3.1, what does sin48°cosx − cos48°sinx rewrite to?", options: ["sin(48° − x)", "sin(48° + x)", "cos(48° − x)", "sin(x − 48°)"], correctIndex: 0 },
      { marks: 1, description: "Using the co-ratio identity, what does cos2x rewrite to?", options: ["sin(90° − 2x)", "sin(2x − 90°)", "cos(90° − 2x)", "sin(90° + 2x)"], correctIndex: 0 },
      { marks: 1, description: "What are the two general equations from sinA = sinB?", options: ["48°−x = 90°−2x+k.360° or 48°−x = 180°−(90°−2x)+k.360°", "48°−x = 90°−2x+k.360° or 48°−x = −(90°−2x)+k.360°", "48°−x = 2x−90°+k.360° only", "48°+x = 90°−2x+k.360° or 48°+x = 90°+2x+k.360°"], correctIndex: 0 },
      { marks: 1, description: "What is the first general solution?", options: ["x = 42° + k.360°, k ∈ ℤ", "x = 42° + k.180°, k ∈ ℤ", "x = −42° + k.360°, k ∈ ℤ", "x = 138° + k.360°, k ∈ ℤ"], correctIndex: 0 },
      { marks: 1, description: "What is the second general solution?", options: ["x = −14° − k.120°, k ∈ ℤ", "x = 14° + k.120°, k ∈ ℤ", "x = −14° − k.360°, k ∈ ℤ", "x = 42° − k.120°, k ∈ ℤ"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Simplify (sin3x + sinx) / (cos2x + 1) to a single trigonometric ratio.",
    marks: 6, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "sin3x + sinx = sin(2x+x) + sin(2x−x) = sin2x.cosx + cos2x.sinx + sin2x.cosx − cos2x.sinx = 2sin2x.cosx. cos2x + 1 = 2cos²x − 1 + 1 = 2cos²x. So the expression = 2sin2x.cosx / 2cos²x = 2(2sinx.cosx)cosx / 2cos²x = 4sinx.cos²x / 2cos²x = 2sinx.",
    marking_notes: "Correctly rewriting 3x as (2x+x), correctly expanding both sin(2x+x) and sin(2x−x), correctly rewriting cos2x+1 using the double-angle identity, correctly simplifying the numerator, correctly substituting sin2x=2sinxcosx, and the correct final answer.",
    steps: [
      { marks: 1, description: "How do you rewrite sin3x, to expand the numerator?", options: ["sin(2x + x)", "sin(3x) directly, no rewriting needed", "sin2x + sinx", "sin(x + x + x)"], correctIndex: 0 },
      { marks: 1, description: "Expanding sin(2x+x) + sin(2x−x) using the compound-angle identities, what do you get?", options: ["sin2x.cosx + cos2x.sinx + sin2x.cosx − cos2x.sinx", "sin2x.cosx + cos2x.sinx − sin2x.cosx + cos2x.sinx", "cos2x.cosx + sin2x.sinx", "2sin2x + 2sinx"], correctIndex: 0 },
      { marks: 1, description: "Which double-angle form of cos2x makes the denominator simplify cleanly?", options: ["cos2x = 2cos²x − 1", "cos2x = 1 − 2sin²x", "cos2x = cos²x − sin²x", "cos2x = 2sin²x − 1"], correctIndex: 0 },
      { marks: 1, description: "What does the numerator simplify to?", options: ["2sin2x.cosx", "2sin2x", "sin2x.cosx", "4sin2x.cosx"], correctIndex: 0 },
      { marks: 1, description: "Substituting sin2x = 2sinx.cosx into the numerator, what do you get?", options: ["4sinx.cos²x", "2sinx.cos²x", "4sinx.cosx", "2sinx.cos³x"], correctIndex: 0 },
      { marks: 1, description: "What is the final simplified answer?", options: ["2sinx", "sinx", "4sinx", "2cosx"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 6: TRIGONOMETRY — GRAPHS (12 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "The graphs of f(x) = 2sin2x and g(x) = −cos(x+45°) are drawn for the interval x ∈ [0°;180°]. A(105°;−1) lies on f. Write down the period of f.",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "180°, since f(x) = 2sin2x has period 360°/2 = 180°.",
    marking_notes: "Accept only 180°.",
    steps: [{ marks: 1, description: "What is the period of f?", options: ["180°", "360°", "90°", "720°"], correctIndex: 0 }],
    image_url: `${IMG}/6-graphs-fg.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "Determine the range of g in the interval x ∈ [0°;180°].",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "y ∈ [−√2/2 ; 1].",
    marking_notes: "Correct lower bound (−√2/2, occurring at x=0°), and the correct full range.",
    steps: [{ marks: 2, description: "What is the range of g on x ∈ [0°;180°]?", options: ["y ∈ [−√2/2 ; 1]", "y ∈ [−1 ; 1]", "y ∈ [0 ; 1]", "y ∈ [−√2/2 ; √2/2]"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "Determine the values of x, in the interval x ∈ [0°;180°], for which f(x).g(x) > 0.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Reading off the graph, both f and g are positive together (or the product is positive) for x ∈ (45°;90°).",
    marking_notes: "Both endpoints of the interval must be correct; accept open interval notation.",
    steps: [{ marks: 2, description: "For which x is f(x).g(x) > 0?", options: ["x ∈ (45°;90°)", "x ∈ (0°;45°)", "x ∈ (90°;135°)", "x ∈ (45°;180°)"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Determine the values of x, in the interval x ∈ [0°;180°], for which f(x) + 1 ≤ 0.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "f(x) + 1 ≤ 0 means f(x) ≤ −1. Reading off the graph, this holds for x ∈ [105°;165°].",
    marking_notes: "Correctly rewriting the inequality as f(x) ≤ −1, and the correct closed interval.",
    steps: [{ marks: 2, description: "For which x is f(x) + 1 ≤ 0?", options: ["x ∈ [105°;165°]", "x ∈ [45°;135°]", "x ∈ [90°;180°]", "x ∈ (105°;165°)"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Another graph p is defined as p(x) = −f(x). D(k;−1) lies on p. Determine the value(s) of k in the interval x ∈ [0°;180°].",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "p(x) = −2sin2x. Setting −2sin2x = −1, i.e. sin2x = 1/2. Reading off (or solving), k = 15° or k = 75°.",
    marking_notes: "Correct equation p(x) = −1 substituted, and both correct values of k.",
    steps: [
      { marks: 1, description: "What equation must you solve for k?", options: ["−2sin2k = −1", "2sin2k = −1", "−2sin2k = 1", "2sin k = −1"], correctIndex: 0 },
      { marks: 1, description: "What is the first value of k?", options: ["15°", "30°", "45°", "165°"], correctIndex: 0 },
      { marks: 1, description: "What is the second value of k?", options: ["75°", "105°", "150°", "90°"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.5",
    text: "Graph h is obtained when g is translated 45° to the left. Determine the equation of h. Write your answer in its simplest form.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "h(x) = g(x+45°) = −cos(x+45°+45°) = −cos(x+90°) = sin x.",
    marking_notes: "Correct substitution (−cos(x+90°)), and the correct simplest final answer.",
    steps: [{ marks: 2, description: "What is the equation of h in its simplest form?", options: ["h(x) = sin x", "h(x) = −sin x", "h(x) = cos x", "h(x) = −cos(x+90°) (unsimplified only)"], correctIndex: 0 }],
  },

  // ============ QUESTION 7: TRIGONOMETRY — 3D (7 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "S, T and K lie in the same horizontal plane. RS is a vertical tower. The angle of depression from R to K is β. TŜK = α, TS = p metres and the area of ΔSTK is q m². Determine the length of SK in terms of p, q and α.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Area ΔSTK = (1/2)p(SK)sinα = q, so SK = 2q/(p sinα).",
    marking_notes: "Correct substitution into the area formula, and the correct final answer.",
    steps: [{ marks: 2, description: "Making SK the subject of q = (1/2)p(SK)sinα, what is SK?", options: ["2q/(p sinα)", "q/(2p sinα)", "2q sinα/p", "pq sinα/2"], correctIndex: 0 }],
    image_url: `${IMG}/7-triangle-rstk.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Show that RS = (2q tanβ)/(p sinα).",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "RK̂S = β [angle of depression = angle of elevation]. RS/SK = tanβ, so RS = SK.tanβ = [2q/(p sinα)].tanβ = 2q tanβ/(p sinα).",
    marking_notes: "Correctly identifying RK̂S = β and setting up RS/SK = tanβ, and correctly substituting SK from 7.1 to reach the given result.",
    steps: [
      { marks: 1, description: "In right-angled ΔRSK, which ratio gives RS?", options: ["RS = SK.tanβ", "RS = SK.sinβ", "RS = SK/tanβ", "RS = SK.cosβ"], correctIndex: 0 },
      { marks: 1, description: "Substituting SK = 2q/(p sinα) from 7.1, what do you get?", options: ["RS = [2q/(p sinα)].tanβ", "RS = [2q/(p sinα)]/tanβ", "RS = 2q/(p sinα.tanβ)", "RS = 2q.tanβ/(sinα)"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Calculate the size of α if α < 90° and RS = 70 m, p = 80 m, q = 2 500 m² and β = 42°.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "70 = 2(2500)tan42° / (80 sinα), so sinα = (25/28)tan42° = 0,80..., giving α = 53,51°.",
    marking_notes: "Correct substitution of all given values into the RS formula, correct value of sinα, and the correct final angle.",
    steps: [
      { marks: 1, description: "What is the correct substitution into RS = 2q tanβ/(p sinα)?", options: ["70 = 2(2500)tan42° / (80 sinα)", "70 = 2(2500)tan42° × 80 sinα", "70 = (80)tan42° / (2(2500) sinα)", "70 = 2(2500) / (80 sinα.tan42°)"], correctIndex: 0 },
      { marks: 1, description: "What is sinα?", options: ["0,80...", "0,53...", "1,25...", "0,25..."], correctIndex: 0 },
      { marks: 1, description: "What is α?", options: ["53,51°", "36,49°", "42,00°", "63,51°"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: EUCLIDEAN GEOMETRY (16 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "O is the centre of the circle. K, T and P lie on the circle. Use the diagram to prove the theorem which states that the angle subtended by a chord at the centre of the circle is equal to twice the angle subtended by the same chord at the circumference, that is, prove that TÔP = 2TK̂P.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Construction: draw KO produced. Ô1 = K̂1 + T̂ [ext ∠ of Δ]. But K̂1 = T̂ [∠s opp equal sides], so Ô1 = 2K̂1. Similarly Ô2 = K̂2 + P̂ [ext ∠ of Δ], and K̂2 = P̂ [∠s opp equal sides], so Ô2 = 2K̂2. Therefore Ô1 + Ô2 = 2K̂1 + 2K̂2 = 2(K̂1 + K̂2), i.e. TÔP = 2TK̂P.",
    marking_notes: "One mark for the correct construction (draw KO produced), and one mark each for the four remaining correct statement/reason pairs building the proof.",
    marking_points: [
      { marks: 1, description: "correct construction: draw KO produced", keywords: ["construction", "KO produced"] },
      { marks: 1, description: "Ô1 = K̂1 + T̂ [exterior angle of a triangle]", keywords: ["exterior angle", "O1 K1 T"] },
      { marks: 1, description: "K̂1 = T̂ [angles opposite equal sides] therefore Ô1 = 2K̂1", keywords: ["opposite equal sides", "O1 2K1"] },
      { marks: 1, description: "Ô2 = K̂2 + P̂ [exterior angle of a triangle], K̂2 = P̂ [angles opposite equal sides], therefore Ô2 = 2K̂2", keywords: ["O2 2K2", "opposite equal sides"] },
      { marks: 1, description: "adding: Ô1 + Ô2 = 2(K̂1 + K̂2), therefore TÔP = 2TK̂P", keywords: ["TOP 2TKP", "adding"] },
    ],
    image_url: `${IMG}/8-1-circle-ktp.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "O is the centre of the circle and ABCD is a cyclic quadrilateral. OB and OD are drawn. If Ô1 = 4x+100° and Ĉ = x+34°, calculate, giving reasons, the size of x.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Â = 2x+50° [∠ at centre = 2 × ∠ at circumference, using reflex Ô1]. In cyclic quadrilateral ABCD: (x+34°) + (2x+50°) = 180° [opp ∠s of cyclic quad], so 3x = 96°, giving x = 32°.",
    marking_notes: "Correct value of Â in terms of x with reason, correct equation from the opposite angles of the cyclic quadrilateral, correctly simplifying, and the correct final value of x.",
    steps: [
      { marks: 1, description: "What is Â, in terms of x, with reason?", options: ["2x+50° [∠ at centre = 2 × ∠ at circumference]", "4x+100° [∠ at centre = ∠ at circumference]", "x+34° [opp ∠s cyclic quad]", "8x+200° [∠ at centre = 2 × ∠ at circumference, unreduced]"], correctIndex: 0 },
      { marks: 1, description: "What equation results from the opposite angles of cyclic quadrilateral ABCD?", options: ["(x+34°) + (2x+50°) = 180°", "(x+34°) + (2x+50°) = 360°", "(x+34°) − (2x+50°) = 0°", "(4x+100°) + (x+34°) = 180°"], correctIndex: 0 },
      { marks: 1, description: "Simplifying, what do you get?", options: ["3x = 96°", "3x = 84°", "3x + 84° = 180°", "x = 96°"], correctIndex: 0 },
      { marks: 2, description: "What is x?", options: ["32°", "28°", "48°", "96°"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.3.1",
    text: "O is the centre of the larger circle. OB is a diameter of the smaller circle. Chord AB of the larger circle intersects the smaller circle at M and B. Write down the size of OM̂B. Provide a reason.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Knowledge",
    model_answer: "OM̂B = 90° [angle in a semicircle, since OB is a diameter of the smaller circle].",
    marking_notes: "Correct statement (90°) and the correct reason (angle in a semicircle).",
    steps: [{ marks: 2, description: "What is OM̂B, with reason?", options: ["90° [∠ in a semi-circle]", "90° [tan ⊥ radius]", "180° [∠s on a straight line]", "45° [∠s opp equal sides]"], correctIndex: 0 }],
    image_url: `${IMG}/8-2-cyclic-quad-abcd.png`,
  },
  {
    number: "8", sub_number: "8.3.2",
    text: "If AB = √300 units and OM = 5 units, calculate, giving reasons, the length of OB.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "AB = √300 = 10√3, so MB = 5√3 [line from centre ⊥ to chord bisects the chord]. In right-angled ΔOMB: OB² = OM² + MB² = 5² + (5√3)² [Pythagoras], so OB = 10 units.",
    marking_notes: "Correct value of MB with reason (line from centre perpendicular to chord bisects it), correct substitution into Pythagoras with reason, and the correct final length.",
    steps: [
      { marks: 1, description: "What is AB in simplified surd form?", options: ["10√3", "√300 (unsimplified)", "5√3", "10√30"], correctIndex: 0 },
      { marks: 1, description: "What is MB, with reason?", options: ["5√3 [line from centre ⊥ to chord]", "10√3 [line from centre ⊥ to chord]", "5 [given]", "10 [∠ in semi-circle]"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into Pythagoras?", options: ["OB² = 5² + (5√3)²", "OB² = 5² − (5√3)²", "OB² = (5√3)² − 5²", "OB² = 5² + 3²"], correctIndex: 0 },
      { marks: 1, description: "What is OB?", options: ["10 units", "√100 units (unsimplified)", "20 units", "5√4 units"], correctIndex: 0 },
    ],
    image_url: `${IMG}/8-3-circle-aomb.png`,
  },

  // ============ QUESTION 9: EUCLIDEAN GEOMETRY — PARALLELOGRAM (9 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "ABCD is a parallelogram with AB = 14 units. AD is produced to E such that AD:DE = 4:3. EB intersects DC in F. EB = 21 units. Calculate, with reasons, the length of FB.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "FB/EB = DA/EA [proportion theorem; DC ∥ AB]. With DA = 4p and EA = 7p (from AD:DE = 4:3): FB = (4p × 21)/(7p) = 12 units.",
    marking_notes: "Correct proportion set up with reason (DC ∥ AB), and the correct final length.",
    steps: [
      { marks: 1, description: "Which proportion, with reason, gives FB?", options: ["FB/EB = DA/EA [proportion theorem; DC ∥ AB]", "FB/EB = EA/DA [proportion theorem; DC ∥ AB]", "FB/DA = EB/EA [opp sides of ‖gram]", "FB = EB − DA directly"], correctIndex: 0 },
      { marks: 1, description: "What are DA and EA in terms of p, given AD:DE = 4:3?", options: ["DA = 4p, EA = 7p", "DA = 4p, EA = 3p", "DA = 3p, EA = 7p", "DA = 7p, EA = 4p"], correctIndex: 0 },
      { marks: 1, description: "What is FB?", options: ["12 units", "9 units", "16,33 units", "6 units"], correctIndex: 0 },
    ],
    image_url: `${IMG}/9-parallelogram-abcdef.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "Prove, with reasons, that ΔEDF ||| ΔEAB.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "In ΔEDF and ΔEAB: Ê is common. ED̂F = Â [corresp ∠s; EA ∥ CB]. EF̂D = EB̂A [corresp ∠s; DC ∥ AB]. Therefore ΔEDF ||| ΔEAB [∠;∠;∠].",
    marking_notes: "Correct common angle statement, correct second pair of corresponding angles with reason, and the correct final similarity conclusion with reason.",
    marking_points: [
      { marks: 1, description: "Ê is common", keywords: ["common", "E common"] },
      { marks: 1, description: "ED̂F = Â [corresponding angles; EA ∥ CB]", keywords: ["corresp", "EA CB"] },
      { marks: 1, description: "EF̂D = EB̂A [corresponding angles; DC ∥ AB], therefore ΔEDF ||| ΔEAB [∠;∠;∠]", keywords: ["EDF EAB", "similar"] },
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Calculate, with reasons, the length of FC.",
    marks: 3, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "DF/AB = ED/EA [||| Δs], so DF = (3p × 14)/(7p) = 6 units. FC = DC − DF = 14 − 6 = 8 units [DC = AB = 14 units, opp sides of ‖gram].",
    marking_notes: "Correct proportion from the similarity in 9.2 giving DF, and the correct final length of FC (using DC = AB).",
    steps: [
      { marks: 1, description: "Which proportion, from the similarity in 9.2, gives DF?", options: ["DF/AB = ED/EA", "DF/AB = EA/ED", "DF/DC = ED/EA", "DF/AB = EF/EB"], correctIndex: 0 },
      { marks: 1, description: "What is DF?", options: ["6 units", "8 units", "9 units", "4 units"], correctIndex: 0 },
      { marks: 1, description: "What is FC (using DC = AB = 14 units, opp sides of a parallelogram)?", options: ["8 units", "6 units", "14 units", "2 units"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 10: EUCLIDEAN GEOMETRY — TANGENTS (15 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "PQRS is a cyclic quadrilateral such that PQ = PR. The tangents to the circle through P and R meet QS produced at A. RS is produced to meet tangent AP at B. PS is produced to meet tangent AR at C. PR and QS intersect at M. Prove, giving reasons, that Ŝ3 = Ŝ4.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Ŝ3 = PQ̂R [exterior angle of cyclic quadrilateral]. R̂3 = PQ̂R [angles opposite equal sides, since PQ = PR]. Therefore Ŝ3 = R̂3. But Ŝ4 = R̂3 [angles in the same segment, both subtending PS]. Therefore Ŝ3 = Ŝ4.",
    marking_notes: "Correct statement and reason for Ŝ3 = PQ̂R, correct statement and reason for R̂3 = PQ̂R, and correct statement and reason for Ŝ4 = R̂3, leading to Ŝ3 = Ŝ4.",
    marking_points: [
      { marks: 1, description: "Ŝ3 = PQ̂R [exterior angle of cyclic quadrilateral]", keywords: ["exterior angle", "cyclic quad"] },
      { marks: 1, description: "R̂3 = PQ̂R [angles opposite equal sides]", keywords: ["opposite equal sides", "R3"] },
      { marks: 1, description: "therefore Ŝ3 = R̂3", keywords: ["S3 R3"] },
      { marks: 1, description: "Ŝ4 = R̂3 [angles in the same segment]", keywords: ["same segment", "S4 R3"] },
      { marks: 1, description: "therefore Ŝ3 = Ŝ4", keywords: ["S3 S4"] },
    ],
    image_url: `${IMG}/10-cyclic-quad-pqrsabcm.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "Prove, giving reasons, that SMRC is a cyclic quadrilateral.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "R̂1 + R̂2 = PQ̂R [tan-chord theorem]. Ŝ4 = PQ̂R [proved in 10.1]. Therefore Ŝ4 = R̂1 + R̂2. So SMRC is a cyclic quadrilateral [converse: exterior angle of a cyclic quadrilateral equals the interior opposite angle].",
    marking_notes: "Correct statement and reason for R̂1 + R̂2 = PQ̂R, correctly connecting to Ŝ4 = PQ̂R (proved in 10.1), and the correct final conclusion with reason.",
    marking_points: [
      { marks: 1, description: "R̂1 + R̂2 = PQ̂R [tan-chord theorem]", keywords: ["tan chord", "tangent chord"] },
      { marks: 1, description: "Ŝ4 = PQ̂R [proved in 10.1]", keywords: ["proved", "S4 PQR"] },
      { marks: 1, description: "therefore Ŝ4 = R̂1 + R̂2", keywords: ["S4 R1 R2"] },
      { marks: 1, description: "SMRC is a cyclic quadrilateral [converse exterior angle of cyclic quad]", keywords: ["SMRC", "cyclic quad"] },
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Prove, giving reasons, that RP is a tangent to the circle passing through P, S and A at P.",
    marks: 6, topicKey: "euclidean_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "Ŝ3 = R̂2 + P̂2 [exterior angle of Δ]. Ŝ4 = P̂1 + Â2 [exterior angle of Δ]. Since Ŝ3 = Ŝ4 (proved in 10.1): R̂2 + P̂2 = Â2 + P̂1. But P̂1 = R̂2 [tan-chord theorem]. Therefore P̂2 = Â2, so RP is a tangent to the circle through P, S, A at P [converse tan-chord theorem].",
    marking_notes: "Correct statement and reason for Ŝ3 = R̂2 + P̂2, correct statement and reason for Ŝ4 = P̂1 + Â2, correctly combining using Ŝ3 = Ŝ4, correctly using P̂1 = R̂2 (tan-chord theorem), correctly isolating P̂2 = Â2, and the correct final conclusion with reason.",
    marking_points: [
      { marks: 1, description: "Ŝ3 = R̂2 + P̂2 [exterior angle of a triangle]", keywords: ["exterior angle", "S3 R2 P2"] },
      { marks: 1, description: "Ŝ4 = P̂1 + Â2 [exterior angle of a triangle]", keywords: ["exterior angle", "S4 P1 A2"] },
      { marks: 1, description: "combining with Ŝ3 = Ŝ4 (proved in 10.1): R̂2 + P̂2 = Â2 + P̂1", keywords: ["R2 P2 A2 P1"] },
      { marks: 1, description: "P̂1 = R̂2 [tan-chord theorem]", keywords: ["tan chord", "P1 R2"] },
      { marks: 1, description: "therefore P̂2 = Â2", keywords: ["P2 A2"] },
      { marks: 1, description: "RP is a tangent to the circle through P, S, A at P [converse tan-chord theorem]", keywords: ["tangent", "converse"] },
    ],
  },
];

// No exam_schedule entries here, matching the Mathematics P1/P2 Nov 2025
// ingestion convention.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
