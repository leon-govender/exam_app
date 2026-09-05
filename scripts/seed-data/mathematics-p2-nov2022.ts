// Real DBE past paper: Mathematics P2, November 2022, National Senior
// Certificate (English). Source: combined PDF containing the official DBE
// question paper, a blank student answer book, and the official marking
// guideline, rendered to images and read directly (this is a SCANNED PDF with
// no extractable text layer).
//
// Structure (confirmed by rendering and visually reading every page):
//   - Question paper = pages 1-14 of the combined PDF (13 numbered question
//     pages + 1 information/formula sheet), confirmed by the cover page's own
//     statement "This question paper consists of 13 pages and 1 information
//     sheet" and the printed page footers/numbers.
//   - Pages 15-38 are a BLANK student answer-book template (lined answer
//     pages with mark-allocation boxes but no actual content) — these were
//     skipped entirely, per the ingestion instructions.
//   - Marking guideline = pages 39-62 of the combined PDF (24 pages),
//     confirmed genuine via its own cover page: "MARKING GUIDELINES/
//     NASIENRIGLYNE", the official DBE crest, stamped "APPROVED MARKING
//     GUIDELINE / PUBLIC EXAMINATION" dated 2022-11-16, "MARKS/PUNTE: 150",
//     "Approved by Umalusi External Moderator" — and every memo page's
//     content matches its corresponding QP question with no stray/mismatched
//     pages found.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours,
// both confirmed directly from the rendered cover page. All 150 marks are
// included here: Q1=12, Q2=8, Q3=20, Q4=20, Q5=30, Q6=10, Q7=10, Q8=13,
// Q9=14, Q10=13 (sum = 150, matching the printed "TOTAL: 150" on the QP and
// the memo, and each question's own printed bracket total on both).
//
// This is the fifth Mathematics P2 paper ingested into this app. It reuses
// the same Mathematics subject row, the same four CAPS cognitive levels, and
// all four existing topic keys (statistics, analytical_geometry,
// trigonometry, euclidean_geometry) — this paper's content maps onto exactly
// the same four broad CAPS strands, so no new topics were needed.
//
// Marking-point pattern: calculation sub-questions (including trig
// derivations, which have a single determinate chain of intermediate
// expressions per the memo's primary method) use the stepped-MCQ pattern
// (`steps: MarkingPointStep[]`), one step per mark-earning stage, step marks
// summing exactly to the sub-question's `marks`, with plausible Grade 12
// distractors (sign slips, wrong theorem/rule applied, arithmetic slips,
// wrong root chosen, mixing up which triangle/circle a rule applies to).
// Genuinely non-computational Euclidean-geometry proofs, i.e. "prove that ..."
// sub-questions with no final numeric/algebraic value to report (9.1, 9.2.1,
// 9.2.2, 10.1, 10.2, 10.3), use `marking_points: MarkingPoint[]` instead,
// since these are graded on which correct statements/reasons appear, not on a
// single determinate final value. Sub-questions that ask for an angle or
// length "giving reasons" but DO produce a final numeric value (8.1.1,
// 8.1.2, 8.1.3, 8.3.1 in the 2023 file's convention) use stepped-MCQ options
// that bundle the value with its reason. Where the memo shows an OR/
// alternative method, the steps/points below are based on the FIRST/primary
// method shown in the memo, not an amalgam of methods.
//
// Diagrams: this paper has diagrams for Q1 (scatter plot), Q2 (ogive), Q3
// (triangle ABC with parallel line DCT), Q4 (circle with tangent KL), Q6
// (graphs of f and g), Q7 (3D flagpole figure), Q8.1 (circle MNPR), Q8.2
// (triangle ABG with midpoints), Q9.1 (circle with chord AB), Q9.2 (circle
// with tangent GB), and Q10 (cyclic quadrilateral PQRS with tangent KP) — 11
// images in total, each cropped from the full-page render and cross-checked
// against its exact question. Question 5 has no diagram (pure trigonometric
// identity/equation work).
//
// Judgment calls:
// - Q5.1: the QP prints "Given that √13 sin x + 3 = 0, where x ∈ (0°;90°)."
//   verbatim (confirmed by zooming into the rendered pixels) — this domain is
//   mathematically inconsistent with the equation itself (√13 sinx+3=0 gives
//   sinx = -3/√13 < 0, impossible for x in the first quadrant), and with the
//   memo's own reference-triangle working, which places x in the third
//   quadrant (both the opposite and adjacent sides are taken as negative,
//   giving tanx = 3/2 > 0 with sinx < 0). This is a known error in the
//   official printed paper; the question text below reproduces the QP
//   exactly as printed, and the model answers/steps follow the memo's actual
//   (self-consistent, Quadrant III) working rather than "fixing" the printed
//   domain.
// - Q3.3.2 and Q4.3: the memo shows multiple OR/alternative methods reaching
//   the same single final answer in each case (no genuinely distinct valid
//   numeric answers), so only the first/primary method is captured.
// - Q9 (9.1, 9.2.1, 9.2.2) is entirely formal Euclidean-geometry proof (prove
//   OD ⊥ AB; prove OTBG is a cyclic quadrilateral; prove GÔB = Ŝ) with no
//   final numeric value anywhere in the question, so all three sub-questions
//   use `marking_points` rather than stepped-MCQ, following the S/R
//   (statement/reason) mark breakdown printed in the memo.
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
  year: 2022,
  exam_diet: "November",
  paper_number: "P2",
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

const IMG = "/question-images/maths-2022-p2";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: STATISTICS — SCATTER PLOT (12 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "The matric class of a certain high school had to vote for the chairperson of the RCL. The scatter plot shows the IQ of the 10 learners who received the most votes and the number of votes they received. Before the election, a popularity score (out of 100) was assigned to each of the same 10 learners, whose popularity scores and number of votes are: Popularity score: 32, 89, 35, 82, 50, 59, 81, 40, 79, 65. Number of votes: 9, 22, 10, 21, 11, 15, 20, 12, 19, 16. Calculate the mean number of votes that these 10 learners received.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "ȳ = 155/10 = 15,5.",
    marking_notes: "Correct sum of the 10 vote values (155), and the correct mean.",
    steps: [
      { marks: 1, description: "What is the sum of the 10 vote values?", options: ["155", "150", "145", "160"], correctIndex: 0 },
      { marks: 1, description: "What is the mean number of votes?", options: ["15,5", "16,0", "14,5", "17,0"], correctIndex: 0 },
    ],
    image_url: `${IMG}/1-scatter-plot.png`,
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Calculate the standard deviation of the number of votes that these 10 learners received.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "SD = 4,59.",
    marking_notes: "Accept only SD = 4,59.",
    steps: [{ marks: 1, description: "What is the standard deviation?", options: ["4,59", "4,50", "5,09", "15,50"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The learners who received fewer votes than one standard deviation below the mean were not invited for an interview. How many learners were invited?",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "ȳ − SD = 15,5 − 4,59 = 10,91. Two learners (with 9 and 10 votes) received fewer votes than this, so 10 − 2 = 8 learners were invited.",
    marking_notes: "Correct value of ȳ − SD, and the correct final count of invited learners.",
    steps: [
      { marks: 1, description: "What is ȳ − SD?", options: ["10,91", "20,09", "15,50", "4,59"], correctIndex: 0 },
      { marks: 1, description: "How many learners were invited for an interview?", options: ["8", "9", "7", "2"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Determine the equation of the least squares regression line for the data given in the table.",
    marks: 3, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using a calculator's linear regression function: a = 1,7709..., b = 0,2243..., so ŷ = 1,77 + 0,22x.",
    marking_notes: "Correct value of a, correct value of b, and the correct equation combining them.",
    steps: [
      { marks: 1, description: "What is a (the y-intercept of the regression line)?", options: ["1,77", "0,22", "15,50", "−1,77"], correctIndex: 0 },
      { marks: 1, description: "What is b (the gradient of the regression line)?", options: ["0,22", "1,77", "−0,22", "2,24"], correctIndex: 0 },
      { marks: 1, description: "What is the full equation?", options: ["ŷ = 1,77 + 0,22x", "ŷ = 0,22 + 1,77x", "ŷ = 1,77 − 0,22x", "ŷ = 0,22x − 1,77"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Predict the number of votes that a learner with a popularity score of 72 will receive.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "ŷ = 1,77 + 0,22(72) = 17,61 ≈ 18 votes.",
    marking_notes: "Correct substitution of x = 72 into the regression equation, and the correct final rounded number of votes.",
    steps: [
      { marks: 1, description: "What do you substitute into the regression equation?", options: ["1,77 + 0,22(72)", "1,77 + 0,22(10)", "0,22 + 1,77(72)", "(1,77 + 0,22) × 72"], correctIndex: 0 },
      { marks: 1, description: "What is the predicted number of votes?", options: ["18 votes", "17 votes", "16 votes", "19 votes"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.5.1",
    text: "Using the scatter plot and table, provide a reason why IQ is not a good indicator of the number of votes that a learner could receive.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "The points on the scatter plot are all scattered, showing a low correlation between IQ and votes, so a prediction based on IQ would be unrealistic.",
    marking_notes: "Accept any correct reason referring to the scattered points / low correlation on the IQ scatter plot.",
    steps: [{ marks: 1, description: "Why is IQ not a good indicator of the number of votes?", options: ["The points on the scatter plot are scattered, showing a low correlation", "The points on the scatter plot lie on a strong upward trend", "IQ scores are always higher than the number of votes", "The scatter plot has no y-axis values"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.5.2",
    text: "Using the scatter plot and table, provide a reason why the prediction in QUESTION 1.4 is reliable.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "The correlation coefficient for the popularity-score data is r = 0,98, showing a very strong correlation, so the prediction is reliable.",
    marking_notes: "Accept r = 0,98 / a very strong correlation as the reason.",
    steps: [{ marks: 1, description: "Why is the prediction in 1.4 reliable?", options: ["r = 0,98, a very strong correlation", "r = 0,98, a very weak correlation", "The sample size is 100", "The popularity scores are all above 50"], correctIndex: 0 }],
  },

  // ============ QUESTION 2: STATISTICS — OGIVE (8 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "A company conducted research among all its employees on what percentage of their monthly salary was spent on fuel in a particular month. The data is represented in the ogive (cumulative frequency graph) shown. How many people are employed at this company?",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "60 employees, read off as the final (maximum) cumulative frequency on the ogive.",
    marking_notes: "Accept only 60.",
    steps: [{ marks: 1, description: "How many people are employed at this company?", options: ["60", "62", "46", "34"], correctIndex: 0 }],
    image_url: `${IMG}/2-ogive.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Write down the modal class of the data.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "20 < x ≤ 25, the class with the steepest rise on the ogive (the greatest frequency).",
    marking_notes: "Accept only 20 < x ≤ 25.",
    steps: [{ marks: 1, description: "What is the modal class of the data?", options: ["20 < x ≤ 25", "15 < x ≤ 20", "25 < x ≤ 30", "5 < x ≤ 10"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.3",
    text: "How many employees spent more than 22,5% of their monthly salary on fuel?",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Reading off the ogive at x = 22,5: cumulative frequency = 34. So 60 − 34 = 26 employees spent more than 22,5%.",
    marking_notes: "Correct cumulative frequency read off at x = 22,5 (34), and the correct final count.",
    steps: [
      { marks: 1, description: "What is the cumulative frequency at 22,5% on the ogive?", options: ["34", "46", "26", "60"], correctIndex: 0 },
      { marks: 1, description: "How many employees spent more than 22,5% of their salary on fuel?", options: ["26", "34", "22", "46"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "An employee spent R2 400 of his salary on fuel in that particular month. Determine the monthly salary of this employee if he spends 7% of his salary on fuel.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Salary = (100/7) × 2400 = R34 285,71.",
    marking_notes: "Correct method (100/7 × 2400), and the correct final salary.",
    steps: [
      { marks: 1, description: "What is the correct method to find the salary?", options: ["(100/7) × 2 400", "(7/100) × 2 400", "2 400 × 7", "2 400 / 7 × 100"], correctIndex: 0 },
      { marks: 1, description: "What is the employee's monthly salary?", options: ["R34 285,71", "R2 571,43", "R16 800,00", "R342 857,10"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.5",
    text: "The monthly salaries of these employees remain constant and the number of litres of fuel used each month also remains constant. If the fuel price increases from R21,43 per litre to R22,79 per litre at the beginning of the next month, how will the above ogive change?",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since the same number of litres now costs more (as a percentage of the same salary), the percentage of salary spent on fuel increases for every employee, so the ogive (cumulative frequency graph) will shift to the right / become steeper.",
    marking_notes: "Correct description of how the ogive changes (shifts right / becomes steeper).",
    steps: [{ marks: 2, description: "How will the ogive change?", options: ["It will shift to the right (become steeper further along the x-axis)", "It will shift to the left", "It will stay exactly the same", "It will flip upside down"], correctIndex: 0 }],
  },

  // ============ QUESTION 3: ANALYTICAL GEOMETRY — TRIANGLE ABC (20 marks) ============

  {
    number: "3", sub_number: "3.1.1",
    text: "A(4;2), B(6;−4) and C(−2;−3) are vertices of ΔABC. T is the midpoint of CB. The equation of line AC is 5x−6y=8. The angle of inclination of AB is α. ΔDCT is drawn such that CD ∥ BA. The lines AC and DT intersect at S, the y-intercept of AC. P, F and R are the x-intercepts of DC, AC and AB respectively. Calculate the gradient of AB.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "mAB = (2−(−4))/(4−6) = −3.",
    marking_notes: "Correct substitution of A and B into the gradient formula, and the correct answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the gradient formula?", options: ["(2−(−4))/(4−6)", "(4−6)/(2−(−4))", "(2+(−4))/(4+6)", "(−4−2)/(6−4)"], correctIndex: 0 },
      { marks: 1, description: "What is mAB?", options: ["−3", "3", "−1/3", "1/3"], correctIndex: 0 },
    ],
    image_url: `${IMG}/3-triangle-abc-dct.png`,
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Calculate the size of α, the angle of inclination of AB.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "tan α = mAB = −3, so α = 108,43°.",
    marking_notes: "Correctly relating tanα to mAB, and the correct final angle.",
    steps: [
      { marks: 1, description: "Which equation relates α to the gradient of AB?", options: ["tan α = mAB = −3", "sin α = mAB = −3", "α = mAB = −3", "tan α = 1/3"], correctIndex: 0 },
      { marks: 1, description: "What is α?", options: ["108,43°", "71,57°", "18,43°", "161,57°"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "Calculate the coordinates of T, the midpoint of CB.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "T = ((−2+6)/2 ; (−3−4)/2) = (2 ; −7/2).",
    marking_notes: "Correct x-coordinate and correct y-coordinate of T.",
    steps: [
      { marks: 1, description: "What is the x-coordinate of T?", options: ["2", "4", "−2", "1"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of T?", options: ["−7/2", "7/2", "−7", "−1/2"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.1.4",
    text: "Calculate the coordinates of S, the y-intercept of AC.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Knowledge",
    model_answer: "Substituting x = 0 into 5x − 6y = 8: 5(0) − 6y = 8, so y = −4/3. S(0 ; −4/3).",
    marking_notes: "Correct x-coordinate (0), and correct y-coordinate (−4/3).",
    steps: [
      { marks: 1, description: "What is the x-coordinate of S (the y-intercept)?", options: ["0", "8/5", "−8/6", "5"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of S?", options: ["−4/3", "4/3", "−8/6", "8/6"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Determine the equation of CD in the form y = mx + c.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "mCD = mAB = −3 (since CD ∥ BA). Using C(−2;−3): −3 = −3(−2) + c, so c = −9, giving y = −3x − 9.",
    marking_notes: "Correct gradient (mCD = mAB = −3), correct substitution of C's coordinates, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is mCD, given CD ∥ BA?", options: ["−3", "3", "−1/3", "5/6"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using C(−2;−3)?", options: ["−3 = −3(−2) + c", "−3 = −3(2) + c", "−2 = −3(−3) + c", "−3 = 3(−2) + c"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of CD?", options: ["y = −3x − 9", "y = −3x + 9", "y = 3x − 9", "y = −3x − 3"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Calculate the size of DĈA.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "From 5x−6y=8, mAC = 5/6, so tanθ = mAC = 5/6, giving θ = 39,81°. Â = 108,43° − 39,81° = 68,62° [ext ∠ of Δ]. DĈA = 68,62° [alt ∠s; DC ∥ AB].",
    marking_notes: "Correct value of tanθ (= mAC), correct value of θ, correct value of Â, and the correct final angle DĈA.",
    steps: [
      { marks: 1, description: "What is tanθ (using the gradient of AC)?", options: ["5/6", "6/5", "−5/6", "8/6"], correctIndex: 0 },
      { marks: 1, description: "What is θ?", options: ["39,81°", "50,19°", "80,54°", "9,46°"], correctIndex: 0 },
      { marks: 1, description: "What is Â (using the exterior angle of a triangle)?", options: ["68,62°", "148,24°", "39,81°", "108,43°"], correctIndex: 0 },
      { marks: 1, description: "What is DĈA (using alternate angles, since DC ∥ AB)?", options: ["68,62°", "39,81°", "108,43°", "21,38°"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Calculate the area of quadrilateral POSC.",
    marks: 5, topicKey: "analytical_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "P is the x-intercept of DC: y = −3x − 9 = 0 gives P(−3;0). Area POSC = Area ΔFPC − Area ΔOFS = (1/2)(4,6)(3) − (1/2)(1,6)(4/3) = 6,9 − 1,07 = 5,83 units².",
    marking_notes: "Correct coordinates of P, correct method splitting the quadrilateral into triangles, correct substitution for each triangle's area, and the correct final total area.",
    steps: [
      { marks: 1, description: "What are the coordinates of P (the x-intercept of DC)?", options: ["P(−3;0)", "P(3;0)", "P(0;−9)", "P(−9;0)"], correctIndex: 0 },
      { marks: 1, description: "Which method correctly finds the area of quadrilateral POSC?", options: ["Area ΔFPC − Area ΔOFS", "Area ΔFPC + Area ΔOFS", "Area ΔFPC × Area ΔOFS", "Area ΔOSC only"], correctIndex: 0 },
      { marks: 1, description: "What is the area of ΔFPC (using F(8/5;0), P(−3;0), C(−2;−3))?", options: ["(1/2)(4,6)(3) = 6,9 units²", "(1/2)(4,6)(3) = 3,45 units²", "(1/2)(3)(3) = 4,5 units²", "(1/2)(4,6)(9) = 20,7 units²"], correctIndex: 0 },
      { marks: 1, description: "What is the area of ΔOFS?", options: ["(1/2)(1,6)(4/3) = 1,07 units²", "(1/2)(1,6)(4/3) = 2,13 units²", "(1/2)(8/5)(4/3) = 2,13 units²", "(1/2)(1,6)(3) = 2,4 units²"], correctIndex: 0 },
      { marks: 1, description: "What is the area of quadrilateral POSC?", options: ["5,83 units²", "7,97 units²", "6,90 units²", "4,76 units²"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 4: ANALYTICAL GEOMETRY — CIRCLE MNPKL (20 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "M(3;−5) is the centre of the circle having PN as its diameter. KL is a tangent to the circle at N(7;−2). Calculate the coordinates of P.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "M is the midpoint of PN: (xP+7)/2 = 3 gives xP = −1. (yP−2)/2 = −5 gives yP = −8. So P(−1;−8).",
    marking_notes: "Correct x-coordinate and correct y-coordinate of P, using the midpoint formula with M and N.",
    steps: [
      { marks: 1, description: "What is the x-coordinate of P?", options: ["−1", "13", "1", "−13"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of P?", options: ["−8", "8", "−12", "2"], correctIndex: 0 },
    ],
    image_url: `${IMG}/4-circle-mnpkl.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Determine the equation of the circle in the form (x−a)²+(y−b)²=r².",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "r² = (7−3)² + (−2−(−5))² = 16 + 9 = 25. So (x−3)² + (y+5)² = 25.",
    marking_notes: "Correct substitution into the distance formula, correct simplified form (x−3)²+(y+5)², and the correct value of r².",
    steps: [
      { marks: 1, description: "What is the correct substitution to find r² (using M and N)?", options: ["(7−3)² + (−2−(−5))²", "(3−7)² + (−5−(−2))²", "(7−3)² − (−2−(−5))²", "(7+3)² + (−2+5)²"], correctIndex: 0 },
      { marks: 1, description: "What is the equation in the required form (before evaluating r²)?", options: ["(x−3)² + (y+5)² = r²", "(x+3)² + (y−5)² = r²", "(x−3)² − (y+5)² = r²", "(x−7)² + (y+2)² = r²"], correctIndex: 0 },
      { marks: 1, description: "What is r²?", options: ["25", "16", "9", "5"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Determine the equation of KL in the form y = mx + c.",
    marks: 5, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mradius (MN) = (−5−(−2))/(3−7) = −3/−4 = 3/4. Since KL ⊥ MN (tangent ⊥ radius), mtangent = −4/3. Using N(7;−2): −2 = −(4/3)(7) + c, so c = 22/3, giving y = −(4/3)x + 22/3.",
    marking_notes: "Correct substitution for the radius gradient, correct radius gradient, correct (perpendicular) tangent gradient, correct substitution of N's coordinates, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is the correct substitution for the gradient of MN, using M(3;−5) and N(7;−2)?", options: ["(−5−(−2))/(3−7)", "(3−7)/(−5−(−2))", "(−5+(−2))/(3+7)", "(−2−3)/(−5−7)"], correctIndex: 0 },
      { marks: 1, description: "What is the gradient of the radius MN?", options: ["3/4", "4/3", "−3/4", "−4/3"], correctIndex: 0 },
      { marks: 1, description: "What is the gradient of the tangent KL (perpendicular to MN)?", options: ["−4/3", "4/3", "−3/4", "3/4"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using N(7;−2)?", options: ["−2 = −(4/3)(7) + c", "−2 = (4/3)(7) + c", "7 = −(4/3)(−2) + c", "−2 = −(3/4)(7) + c"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of KL?", options: ["y = −(4/3)x + 22/3", "y = −(4/3)x − 22/3", "y = (4/3)x + 22/3", "y = −(3/4)x + 22/3"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "For which values of k will y = −(4/3)x + k be a secant to the circle?",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "A line parallel to KL through P(−1;−8) gives −8 = −(4/3)(−1) + c, so c = −28/3. A line through N gives c = 22/3 (from 4.2.2). For a secant, k must lie strictly between these bounds: −28/3 < k < 22/3.",
    marking_notes: "Correct substitution of the gradient and P's coordinates, correct value of c for the boundary through P, and the correct final compound inequality for k.",
    steps: [
      { marks: 1, description: "What is the correct substitution, using gradient −4/3 and P(−1;−8)?", options: ["−8 = −(4/3)(−1) + c", "−8 = (4/3)(−1) + c", "−1 = −(4/3)(−8) + c", "−8 = −(4/3)(1) + c"], correctIndex: 0 },
      { marks: 1, description: "What is c for the line through P?", options: ["−28/3", "28/3", "−8/3", "22/3"], correctIndex: 0 },
      { marks: 2, description: "For which values of k is y = −(4/3)x + k a secant to the circle?", options: ["−28/3 < k < 22/3", "k < −28/3 or k > 22/3", "−22/3 < k < 28/3", "k = −28/3 or k = 22/3"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "Points A(t;t) and B are not shown on the diagram. From point A, another tangent is drawn to touch the circle with centre M at B. Show that the length of tangent AB is given by √(2t²+4t+9).",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "AB² = AM² − MB² = [(t−3)² + (t+5)²] − 5² = t² − 6t + 9 + t² + 10t + 25 − 25 = 2t² + 4t + 9. So AB = √(2t²+4t+9).",
    marking_notes: "Correct substitution into Pythagoras (AM² − MB²), and the correct simplification to reach the given result.",
    steps: [
      { marks: 1, description: "What is the correct substitution into Pythagoras?", options: ["AB² = [(t−3)² + (t+5)²] − 5²", "AB² = [(t−3)² + (t+5)²] + 5²", "AB² = 5² − [(t−3)² + (t+5)²]", "AB² = (t−3)² + (t+5)² + 25"], correctIndex: 0 },
      { marks: 1, description: "Simplifying, what do you get?", options: ["AB = √(2t²+4t+9)", "AB = √(2t²−4t+9)", "AB = √(2t²+4t−9)", "AB = √(t²+4t+9)"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Determine the minimum length of AB.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "AB is minimised when 2t²+4t+9 is minimised. Using the turning point of the quadratic: t = −4/(2×2) = −1. AB = √(2(−1)²+4(−1)+9) = √7.",
    marking_notes: "Correct substitution into the turning-point formula, correct value of t, correct substitution back into AB, and the correct minimum length.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find the turning point of 2t²+4t+9?", options: ["t = −4/(2×2)", "t = −4/2", "t = 4/(2×2)", "t = −2/(2×2)"], correctIndex: 0 },
      { marks: 1, description: "What is t at the minimum?", options: ["−1", "1", "−2", "2"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution back into AB?", options: ["√(2(−1)²+4(−1)+9)", "√(2(−1)²−4(−1)+9)", "√(2(1)²+4(1)+9)", "√(2(−1)²+4(−1)−9)"], correctIndex: 0 },
      { marks: 1, description: "What is the minimum length of AB?", options: ["√7", "7", "√9", "3"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: TRIGONOMETRY — IDENTITIES AND EQUATIONS (30 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "Given that √13 sin x + 3 = 0, where x ∈ (0°;90°). Without using a calculator, determine the value of sin(360° + x).",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "sin(360° + x) = sin x = −3/√13.",
    marking_notes: "Correctly reducing sin(360°+x) to sinx (periodicity), and the correct final value.",
    steps: [{ marks: 2, description: "What is sin(360° + x)?", options: ["sin x = −3/√13", "−sin x = 3/√13", "cos x", "−cos x"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Given that √13 sin x + 3 = 0, where x ∈ (0°;90°). Without using a calculator, determine the value of tan x.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "In the reference triangle (opposite = −3, hypotenuse = √13): adjacent = −√((√13)² − (−3)²) = −2. tan x = −3/−2 = 3/2.",
    marking_notes: "Correct substitution to find the adjacent side, correct method for tanx, and the correct final value.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find the third side of the reference triangle?", options: ["√((√13)² − (−3)²) = −2", "√((√13)² + (−3)²)", "√((−3)² − (√13)²)", "√13 − 3"], correctIndex: 0 },
      { marks: 1, description: "Using opposite = −3 and adjacent = −2, what is the method for tanx?", options: ["tan x = −3/−2", "tan x = −2/−3", "tan x = √13/−3", "tan x = −3/√13"], correctIndex: 0 },
      { marks: 1, description: "What is tan x?", options: ["3/2", "2/3", "−3/2", "−2/3"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Given that √13 sin x + 3 = 0, where x ∈ (0°;90°). Without using a calculator, determine the value of cos(180° + x).",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "cos(180° + x) = −cos x.",
    marking_notes: "Correctly reducing cos(180°+x) to −cosx.",
    steps: [{ marks: 2, description: "What is cos(180° + x)?", options: ["−cos x", "cos x", "−sin x", "sin x"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Determine the value of the following expression, without using a calculator: cos(90°+θ) / [sin(θ−180°) + 3sin(−θ)].",
    marks: 5, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Numerator: cos(90°+θ) = −sinθ. Denominator: sin(θ−180°) = −sin(180°−θ) = −sinθ, and 3sin(−θ) = −3sinθ, so the denominator = −sinθ − 3sinθ = −4sinθ. The expression = −sinθ / −4sinθ = 1/4.",
    marking_notes: "Correct reduction of the numerator, correct reduction of sin(θ−180°), correct reduction of 3sin(−θ), correct simplification of the denominator, and the correct final answer.",
    steps: [
      { marks: 1, description: "What does cos(90°+θ) reduce to?", options: ["−sinθ", "sinθ", "−cosθ", "cosθ"], correctIndex: 0 },
      { marks: 1, description: "What does sin(θ−180°) reduce to?", options: ["−sinθ", "sinθ", "−cosθ", "cosθ"], correctIndex: 0 },
      { marks: 1, description: "What does 3sin(−θ) reduce to?", options: ["−3sinθ", "3sinθ", "−3cosθ", "3cosθ"], correctIndex: 0 },
      { marks: 1, description: "What does the full denominator simplify to?", options: ["−4sinθ", "−2sinθ", "4sinθ", "2sinθ"], correctIndex: 0 },
      { marks: 1, description: "What is the final value of the expression?", options: ["1/4", "−1/4", "4", "−4"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Determine the general solution of the equation: (cos x + 2sin x)(3sin 2x − 1) = 0.",
    marks: 6, topicKey: "trigonometry", cognitiveLevelName: "Problem Solving",
    model_answer: "cosx+2sinx=0 gives tanx=−1/2, ref∠=26,565°, x=153,43°+k.180°, k∈ℤ. 3sin2x−1=0 gives sin2x=1/3, ref∠=19,471°, 2x=19,74°+k.360° or 2x=160,26°+k.360°, so x=9,74°+k.180° or x=80,26°+k.180°, k∈ℤ.",
    marking_notes: "Correctly splitting into both factor equations, correct tanx=−1/2, correct sin2x=1/3, correct first general solution (x=153,43°+k.180°), and correct second pair of general solutions (x=9,74° & 80,26°+k.180°).",
    steps: [
      { marks: 1, description: "What are the two equations from the product being zero?", options: ["cosx+2sinx=0 and 3sin2x−1=0", "cosx+2sinx=0 and 3sin2x+1=0", "cosx−2sinx=0 and 3sin2x−1=0", "cosx+2sinx=0 only"], correctIndex: 0 },
      { marks: 1, description: "Solving cosx+2sinx=0, what is tanx?", options: ["−1/2", "1/2", "−2", "2"], correctIndex: 0 },
      { marks: 1, description: "Solving 3sin2x−1=0, what is sin2x?", options: ["1/3", "3", "−1/3", "1/6"], correctIndex: 0 },
      { marks: 1, description: "What is the general solution from tanx=−1/2?", options: ["x = 153,43° + k.180°, k∈ℤ", "x = 26,57° + k.180°, k∈ℤ", "x = 153,43° + k.360°, k∈ℤ", "x = −153,43° + k.180°, k∈ℤ"], correctIndex: 0 },
      { marks: 2, description: "What are the general solutions from sin2x=1/3?", options: ["x = 9,74° + k.180° or x = 80,26° + k.180°, k∈ℤ", "x = 19,47° + k.180° or x = 160,53° + k.180°, k∈ℤ", "x = 9,74° + k.360° or x = 80,26° + k.360°, k∈ℤ", "x = 9,74° + k.180° only, k∈ℤ"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "Given the identity: cos(x+y).cos(x−y) = 1 − sin²x − sin²y. Prove the identity.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "LHS = [cosx.cosy−sinx.siny][cosx.cosy+sinx.siny] = cos²x.cos²y − sin²x.sin²y = (1−sin²x)(1−sin²y) − sin²x.sin²y = 1 − sin²y − sin²x + sin²x.sin²y − sin²x.sin²y = 1 − sin²x − sin²y = RHS.",
    marking_notes: "Correct expansion of both compound-angle factors, correct simplification to cos²x.cos²y − sin²x.sin²y, correct use of the square identity (1−sin²x)(1−sin²y), and correctly expanding the product to reach the RHS.",
    steps: [
      { marks: 1, description: "How do you expand cos(x+y).cos(x−y)?", options: ["[cosx.cosy−sinx.siny][cosx.cosy+sinx.siny]", "[cosx.cosy+sinx.siny][cosx.cosy+sinx.siny]", "cosx.cosy − sinx.siny only", "[cosx.siny−sinx.cosy][cosx.cosy+sinx.siny]"], correctIndex: 0 },
      { marks: 1, description: "Simplifying (a−b)(a+b), what do you get?", options: ["cos²x.cos²y − sin²x.sin²y", "cos²x.cos²y + sin²x.sin²y", "cos²x − sin²y", "cos²x.sin²y − sin²x.cos²y"], correctIndex: 0 },
      { marks: 1, description: "Using the square identity, what does cos²x.cos²y become?", options: ["(1−sin²x)(1−sin²y)", "(1+sin²x)(1+sin²y)", "1 − sin²x.sin²y", "1 − sin²x − sin²y"], correctIndex: 0 },
      { marks: 1, description: "Expanding the product and simplifying, what is the final result?", options: ["1 − sin²x − sin²y", "1 + sin²x + sin²y", "1 − sin²x + sin²y", "sin²x + sin²y − 1"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "Hence, determine the value of 1 − sin²45° − sin²15°, without using a calculator.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "1 − sin²45° − sin²15° = cos(45°+15°).cos(45°−15°) = cos60°.cos30° = (1/2)(√3/2) = √3/4.",
    marking_notes: "Correctly identifying x=45° and y=15° in the identity from 5.4.1, correct substitution of the special angle values, and the correct final answer.",
    steps: [
      { marks: 1, description: "Using the identity from 5.4.1, what does 1 − sin²45° − sin²15° equal?", options: ["cos(45°+15°).cos(45°−15°)", "cos(45°−15°).cos(45°−15°)", "cos45°.cos15°", "cos(45°+15°) only"], correctIndex: 0 },
      { marks: 1, description: "What does this simplify to using special angles?", options: ["cos60°.cos30°", "cos60°.cos60°", "cos30°.cos30°", "sin60°.cos30°"], correctIndex: 0 },
      { marks: 1, description: "What is the final value?", options: ["√3/4", "√3/2", "1/4", "3/4"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.5.1",
    text: "Consider the trigonometric expression: 16sinx.cos³x − 8sinx.cosx. Rewrite the expression as a single trigonometric ratio.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "16sinx.cos³x − 8sinx.cosx = 8sinx.cosx(2cos²x − 1) = 4sin2x(cos2x) = 2sin4x.",
    marking_notes: "Correct common factor 8sinx.cosx, correct identification of 2cos²x−1=cos2x, correct rewriting as 4sin2x.cos2x, and the correct final double-angle simplification.",
    steps: [
      { marks: 1, description: "What common factor can you take out of 16sinx.cos³x − 8sinx.cosx?", options: ["8sinx.cosx, giving 8sinx.cosx(2cos²x − 1)", "8cosx, giving 8cosx(2sinx.cos²x − sinx)", "8sinx, giving 8sinx(2cos³x − cosx)", "16cosx, giving 16cosx(sinx.cos²x − sinx/2)"], correctIndex: 0 },
      { marks: 1, description: "What is 4sin2x, using sin2x=2sinx.cosx?", options: ["4sin2x = 8sinx.cosx", "4sin2x = 4sinx.cosx", "4sin2x = 2sinx.cosx", "4sin2x = 16sinx.cosx"], correctIndex: 0 },
      { marks: 1, description: "What is cos2x, matching 2cos²x−1?", options: ["cos2x", "1−2sin²x", "cos²x−sin²x only", "2sin²x−1"], correctIndex: 0 },
      { marks: 1, description: "What is the final single trigonometric ratio?", options: ["2sin4x", "4sin4x", "sin4x", "2sin2x"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.5.2",
    text: "For which value of x in the interval x ∈ [0°;90°] will 16sinx.cos³x − 8sinx.cosx have its minimum value?",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "16sinx.cos³x − 8sinx.cosx = 2sin4x, which has a minimum (of −2) at x = 67,5° in the interval [0°;90°].",
    marking_notes: "Accept only x = 67,5°.",
    steps: [{ marks: 1, description: "For which x is the expression at its minimum?", options: ["67,5°", "45,0°", "22,5°", "90,0°"], correctIndex: 0 }],
  },

  // ============ QUESTION 6: TRIGONOMETRY — GRAPHS (10 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "The graphs of f(x) = tanx and g(x) = 2sin2x are drawn for the interval x ∈ [−180°;180°]. A(60°;k) and B are two points of intersection of f and g. Write down the period of g.",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "180°, since g(x) = 2sin2x has period 360°/2 = 180°.",
    marking_notes: "Accept only 180°.",
    steps: [{ marks: 1, description: "What is the period of g?", options: ["180°", "360°", "90°", "720°"], correctIndex: 0 }],
    image_url: `${IMG}/6-graphs-fg.png`,
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "Calculate the value of k, given A(60°;k) is a point of intersection of f and g.",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "k = g(60°) = 2sin(120°) = √3 = 1,73.",
    marking_notes: "Accept only k = √3 (1,73).",
    steps: [{ marks: 1, description: "What is the value of k?", options: ["√3 = 1,73", "1,00", "2,00", "0,87"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "Calculate the coordinates of B, the other point of intersection of f and g shown in the interval [−180°;−90°].",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "By symmetry of the two graphs about the origin, B(−120° ; √3).",
    marking_notes: "Accept only B(−120° ; √3).",
    steps: [{ marks: 1, description: "What are the coordinates of B?", options: ["B(−120° ; √3)", "B(−60° ; √3)", "B(−120° ; −√3)", "B(120° ; √3)"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Write down the range of 2g(x).",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Since g has range y ∈ [−2;2], 2g(x) has range y ∈ [−4;4].",
    marking_notes: "Correct range of g (as an intermediate step), and the correct final range of 2g(x).",
    steps: [{ marks: 2, description: "What is the range of 2g(x)?", options: ["y ∈ [−4;4]", "y ∈ [−2;2]", "y ∈ [−1;1]", "y ∈ [0;4]"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Determine the values of x, in the interval x ∈ [−90°;0°], for which g(x+5°) − f(x+5°) ≤ 0.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "g(x+5°) − f(x+5°) ≤ 0 means g(x+5°) ≤ f(x+5°), i.e. the graph of g lies below (or on) f, shifted 5° to the left. Reading off the (shifted) graph in [−90°;0°], this holds for x ∈ [−65°;−5°].",
    marking_notes: "Both endpoints of the interval must be correct.",
    steps: [{ marks: 2, description: "For which x is g(x+5°) − f(x+5°) ≤ 0?", options: ["x ∈ [−65°;−5°]", "x ∈ [−90°;−65°]", "x ∈ [−60°;0°]", "x ∈ [−85°;−10°]"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.5",
    text: "Determine the values of p for which sinx.cosx = p will have exactly two real roots in the interval x ∈ [−180°;180°].",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "sinx.cosx = p, so 2sinx.cosx = 2p, i.e. 2sin2x = 4p (matching the graph of g(x)=2sin2x). For exactly two real roots in [−180°;180°], the horizontal line must pass through the graph's turning points, i.e. 4p = ±2, giving p = −1/2 or p = 1/2.",
    marking_notes: "Correct rewriting as 2sin2x = 4p (linking to the graph of g), correctly setting 4p = ±2, and the correct final values of p.",
    steps: [
      { marks: 1, description: "How do you rewrite sinx.cosx = p to link it to the graph of g(x) = 2sin2x?", options: ["2sin2x = 4p", "sin2x = p", "2sin2x = 2p", "4sin2x = p"], correctIndex: 0 },
      { marks: 1, description: "For exactly two real roots, what must 4p equal?", options: ["±2", "±1", "±4", "0"], correctIndex: 0 },
      { marks: 1, description: "What are the values of p?", options: ["p = −1/2 or p = 1/2", "p = −2 or p = 2", "p = −1/4 or p = 1/4", "p = 1/2 only"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 7: TRIGONOMETRY — 3D FLAGPOLE (10 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "AB is a vertical flagpole that is √5p metres long. AC and AD are two cables anchoring the flagpole. B, C and D are in the same horizontal plane. BD = 2p metres, AĈD = x and AD̂C = 45°. Determine the length of AD in terms of p.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "In right-angled ΔABD: AD² = AB² + BD² = (√5p)² + (2p)² = 9p². So AD = 3p.",
    marking_notes: "Correct substitution into Pythagoras, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into Pythagoras (using ΔABD)?", options: ["AD² = AB² + BD²", "AD² = AB² − BD²", "AD² = BD² − AB²", "AD² = AB² × BD²"], correctIndex: 0 },
      { marks: 1, description: "What is AD in terms of p?", options: ["3p", "9p", "√9p", "5p"], correctIndex: 0 },
    ],
    image_url: `${IMG}/7-triangle-acd.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Show that the length of CD is given by CD = 3p(sinx + cosx) / (√2 sinx).",
    marks: 5, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Using the sine rule in ΔACD: CD/sin(135°−x) = 3p/sinx. CD = 3p.sin(135°−x)/sinx = 3p(sin135°.cosx − cos135°.sinx)/sinx = 3p(sin45°.cosx + cos45°.sinx)/sinx = 3p[(√2/2)cosx + (√2/2)sinx]/sinx = 3p(√2/2)(cosx+sinx)/sinx = 3p(sinx+cosx)/(√2 sinx).",
    marking_notes: "Correct use of the sine rule, correctly using AĈD+AD̂C+BAD... angle 135°−x for DÂC, correctly expanding using the compound-angle identity, correctly substituting the special-angle values, and correctly factorising to reach the given result.",
    steps: [
      { marks: 1, description: "What is the correct use of the sine rule in ΔACD?", options: ["CD/sin(135°−x) = 3p/sinx", "CD/sinx = 3p/sin(135°−x)", "CD/sin45° = 3p/sinx", "CD/sinx = 3p/sin45°"], correctIndex: 0 },
      { marks: 1, description: "What angle appears as the numerator's sine argument?", options: ["135° − x", "45° + x", "180° − x", "x − 45°"], correctIndex: 0 },
      { marks: 1, description: "Expanding sin(135°−x) with the compound-angle identity, what do you get?", options: ["sin135°.cosx − cos135°.sinx", "sin135°.cosx + cos135°.sinx", "cos135°.cosx − sin135°.sinx", "sin135°.sinx − cos135°.cosx"], correctIndex: 0 },
      { marks: 1, description: "Substituting the special angle values sin135°=√2/2 and cos135°=−√2/2, what do you get?", options: ["(√2/2)cosx + (√2/2)sinx", "(√2/2)cosx − (√2/2)sinx", "(1/2)cosx + (1/2)sinx", "(√2/2)sinx − (√2/2)cosx"], correctIndex: 0 },
      { marks: 1, description: "Factorising out √2/2 and rearranging, what is the final result?", options: ["3p(sinx+cosx)/(√2 sinx)", "3p(sinx−cosx)/(√2 sinx)", "3p(sinx+cosx)/(2 sinx)", "p(sinx+cosx)/(√2 sinx)"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "If it is further given that p = 10 and x = 110°, calculate the area of ΔADC.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Area ΔADC = (1/2)(AD)(CD)sinAD̂C = (1/2)(30)[30(sin110°+cos110°)/(√2 sin110°)](sin45°) = 143,11 m².",
    marking_notes: "Correct use of the area rule with AD, CD and the included angle AD̂C=45°, correct substitution of p=10 and x=110° into CD, and the correct final area.",
    steps: [
      { marks: 1, description: "What is the correct use of the area rule for ΔADC?", options: ["(1/2)(AD)(CD)sinAD̂C", "(1/2)(AD)(CD)sinAĈD", "(1/2)(AD)(AC)sinAD̂C", "(AD)(CD)sinAD̂C"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution using p=10, x=110°?", options: ["(1/2)(30)[30(sin110°+cos110°)/(√2 sin110°)](sin45°)", "(1/2)(30)[30(sin110°+cos110°)/(√2 sin110°)](sin110°)", "(1/2)(10)[30(sin110°+cos110°)/(√2 sin110°)](sin45°)", "(1/2)(30)[30(sin110°−cos110°)/(√2 sin110°)](sin45°)"], correctIndex: 0 },
      { marks: 1, description: "What is the area of ΔADC?", options: ["143,11 m²", "128,55 m²", "156,42 m²", "101,50 m²"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: EUCLIDEAN GEOMETRY — CIRCLES AND MIDPOINTS (13 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "O is the centre of the circle. MNPR is a cyclic quadrilateral and SN is a diameter of the circle. Chord MS and radius OR are drawn. M̂2 = 64°. Determine, giving reasons, the size of P̂.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "P̂ = 116° [opp ∠s of cyclic quadrilateral MNPR, since M̂ = 180°−64°... using M̂ = M̂1+M̂2, but directly: P̂ = 180° − M̂2's supplementary relationship gives P̂ = 116°].",
    marking_notes: "Correct value of P̂, with the correct reason (opposite angles of a cyclic quadrilateral).",
    steps: [{ marks: 2, description: "What is P̂, with reason?", options: ["116° [opp ∠s of cyclic quad]", "64° [opp ∠s of cyclic quad]", "90° [∠ in semi-circle]", "128° [ext ∠ of cyclic quad]"], correctIndex: 0 }],
    image_url: `${IMG}/8-1-circle-mnpr.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Determine, giving reasons, the size of M̂1.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "M̂1 + 64° = 90° [∠ in semi-circle, SN a diameter], so M̂1 = 26°.",
    marking_notes: "Correct value of M̂1, with the correct reason (angle in a semicircle).",
    steps: [{ marks: 2, description: "What is M̂1, with reason?", options: ["26° [∠ in semi-circle]", "64° [∠ in semi-circle]", "36° [∠s on a str line]", "116° [opp ∠s cyclic quad]"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "Determine, giving reasons, the size of Ô1.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Ô1 = 2 × M̂1 = 2(26°) = 52° [∠ at centre = 2 × ∠ at circumference].",
    marking_notes: "Correct value of Ô1, with the correct reason (angle at the centre equals twice the angle at the circumference).",
    steps: [{ marks: 2, description: "What is Ô1, with reason?", options: ["52° [∠ at centre = 2 × ∠ at circumference]", "26° [∠ at centre = ∠ at circumference]", "64° [∠ at centre = 2 × ∠ at circumference]", "128° [∠ at centre = 2 × ∠ at circumference]"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "ΔABG is drawn. D and E are midpoints of AB and AG respectively. AG and BG are produced to C and H respectively. F is a point on BC such that FG ∥ CH. Give a reason why DE ∥ BH.",
    marks: 1, topicKey: "euclidean_geometry", cognitiveLevelName: "Knowledge",
    model_answer: "DE ∥ BH since D and E are midpoints of AB and AG [Midpoint Theorem].",
    marking_notes: "Accept the Midpoint Theorem (or the converse of the proportional-intercept theorem) as the reason.",
    steps: [{ marks: 1, description: "Why is DE ∥ BH?", options: ["Midpoint Theorem (D, E are midpoints of AB, AG)", "Corresponding angles", "Line from centre bisects chord", "Converse tan-chord theorem"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "If it is further given that FC/BF = 1/4, DE = 3x−1 and GH = x+1, calculate, giving reasons, the value of x.",
    marks: 6, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "BG = 2DE = 6x−2 [Midpoint Theorem]. GH/BG = FC/BF [line ∥ one side of a Δ], so (x+1)/(6x−2) = 1/4, giving 4x+4 = 6x−2, so 2x = 6, x = 3.",
    marking_notes: "Correct statement and reason for BG = 2DE = 6x−2, correct proportion (with reason) linking GH/BG to FC/BF, correct equation in x, and the correct final value of x.",
    steps: [
      { marks: 1, description: "What is BG in terms of x, with reason?", options: ["BG = 2DE = 6x−2 [Midpoint Theorem]", "BG = DE = 3x−1 [Midpoint Theorem]", "BG = 2DE = 3x−1 [Midpoint Theorem]", "BG = 2GH = 2x+2 [Midpoint Theorem]"], correctIndex: 0 },
      { marks: 2, description: "What proportion, with reason, links GH and BG to FC and BF?", options: ["GH/BG = FC/BF [line ∥ one side of a Δ]", "GH/BG = BF/FC [line ∥ one side of a Δ]", "BG/GH = FC/BF [Midpoint Theorem]", "GH/FC = BG/BF [line ∥ one side of a Δ]"], correctIndex: 0 },
      { marks: 2, description: "What is the equation in x?", options: ["(x+1)/(6x−2) = 1/4", "(x+1)/(6x−2) = 4", "(6x−2)/(x+1) = 4", "(x+1)/(3x−1) = 1/4"], correctIndex: 0 },
      { marks: 1, description: "What is x?", options: ["3", "1", "2", "5"], correctIndex: 0 },
    ],
    image_url: `${IMG}/8-2-triangle-abg.png`,
  },

  // ============ QUESTION 9: EUCLIDEAN GEOMETRY — CIRCLE PROOFS (14 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "O is the centre of a circle. OD bisects chord AB. Prove the theorem that states that the line from the centre of a circle that bisects a chord is perpendicular to the chord, i.e. OD ⊥ AB.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Construction: draw OA and OB. In ΔADO and ΔBDO: OA = OB [radii], OD = OD [common side], AD = DB [given]. Therefore ΔADO ≡ ΔBDO [S;S;S]. ADB is a straight line, therefore D̂1 = D̂2 [∠s on a straight line]. Therefore OD ⊥ AB.",
    marking_notes: "One mark for the correct construction (draw OA and OB), one mark for the first pair of equal sides, one mark for the other two pairs of equal sides (giving SSS), and one mark each for the two reasons that complete the proof (angles on a straight line, therefore perpendicular).",
    marking_points: [
      { marks: 1, description: "correct construction: draw OA and OB", keywords: ["construction", "OA", "OB"] },
      { marks: 1, description: "OA = OB [radii]", keywords: ["radii", "OA OB"] },
      { marks: 1, description: "OD = OD [common side] and AD = DB [given]", keywords: ["common side", "AD DB", "given"] },
      { marks: 1, description: "therefore ΔADO ≡ ΔBDO [S;S;S]", keywords: ["SSS", "ADO BDO"] },
      { marks: 1, description: "ADB is a straight line, therefore D̂1 = D̂2 [∠s on a straight line], therefore OD ⊥ AB", keywords: ["straight line", "D1 D2", "perpendicular"] },
    ],
    image_url: `${IMG}/9-1-circle-oab.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "E, B, F, S and P are points on the circle centred at O. GB is a tangent to the circle at B. FE is produced to meet the tangent at G. OT is drawn such that T is the midpoint of EF. GO and BO are drawn. BS is drawn through T. PS ∥ GF. Prove, giving reasons, that OTBG is a cyclic quadrilateral.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "OT̂G = 90° [line from centre to midpoint of chord]. OB̂G = 90° [tangent ⊥ radius]. Therefore OT̂G = OB̂G = 90°. Therefore OTBG is a cyclic quadrilateral [line subtends equal angles / converse: angles in the same segment].",
    marking_notes: "Correct statement and reason for OT̂G = 90°, correct statement and reason for OB̂G = 90°, and the correct final conclusion with reason.",
    marking_points: [
      { marks: 1, description: "OT̂G = 90°", keywords: ["OTG 90"] },
      { marks: 1, description: "[line from centre to midpoint of chord]", keywords: ["midpoint of chord", "centre"] },
      { marks: 1, description: "OB̂G = 90° [tangent ⊥ radius]", keywords: ["tangent", "radius", "OBG 90"] },
      { marks: 1, description: "therefore OT̂G = OB̂G = 90°", keywords: ["OTG OBG 90"] },
      { marks: 1, description: "therefore OTBG is a cyclic quadrilateral [line subtends equal angles / converse ∠s in the same segment]", keywords: ["cyclic quadrilateral", "OTBG"] },
    ],
    image_url: `${IMG}/9-2-circle-gebfotsp.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Prove, giving reasons, that GÔB = Ŝ.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "Ŝ = BT̂G [corresponding angles; GF ∥ PS]. But BT̂G = GÔB [angles in the same segment, both subtending GB in circle OTBG]. Therefore GÔB = Ŝ.",
    marking_notes: "Correct statement and reason for Ŝ = BT̂G, correct statement and reason for BT̂G = GÔB, leading to the final conclusion.",
    marking_points: [
      { marks: 1, description: "Ŝ = BT̂G", keywords: ["S BTG"] },
      { marks: 1, description: "[corresponding angles; GF ∥ PS]", keywords: ["corresponding", "GF PS"] },
      { marks: 1, description: "BT̂G = GÔB [angles in the same segment]", keywords: ["same segment", "BTG GOB"] },
      { marks: 1, description: "therefore GÔB = Ŝ", keywords: ["GOB S"] },
    ],
  },

  // ============ QUESTION 10: EUCLIDEAN GEOMETRY — TANGENTS (13 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "PQRS is a cyclic quadrilateral. KP is a tangent to the circle at P. C and D are points on chords PQ and PS respectively and CD produced meets RS produced at A. CA ∥ QS. RC is drawn. P̂1 = R̂2. Prove, giving reasons, that Ŝ1 = T̂2.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "P̂1 = Q̂1 [tan-chord theorem]. Ŝ1 = Q̂1 + Q̂2 [ext ∠ of cyclic quadrilateral], therefore Ŝ1 = P̂1 + Q̂2. T̂2 = R̂2 + Q̂2 [ext ∠ of a triangle], but P̂1 = R̂2 [given], so T̂2 = P̂1 + Q̂2. Therefore Ŝ1 = T̂2 = P̂1 + Q̂2.",
    marking_notes: "Correct statement and reason for P̂1 = Q̂1, correct statement and reason for Ŝ1 = Q̂1 + Q̂2, correct statement and reason for T̂2 = R̂2 + Q̂2, and correctly combining using the given P̂1 = R̂2 to conclude Ŝ1 = T̂2.",
    marking_points: [
      { marks: 1, description: "P̂1 = Q̂1 [tan-chord theorem]", keywords: ["tan chord", "P1 Q1"] },
      { marks: 1, description: "Ŝ1 = Q̂1 + Q̂2 [ext ∠ of cyclic quadrilateral], therefore Ŝ1 = P̂1 + Q̂2", keywords: ["ext angle cyclic quad", "S1 Q1 Q2"] },
      { marks: 1, description: "T̂2 = R̂2 + Q̂2 [ext ∠ of a triangle]", keywords: ["ext angle triangle", "T2 R2 Q2"] },
      { marks: 1, description: "but P̂1 = R̂2 [given], therefore T̂2 = P̂1 + Q̂2, so Ŝ1 = T̂2", keywords: ["P1 R2 given", "S1 T2"] },
    ],
    image_url: `${IMG}/10-cyclic-quad-pqrs.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "PR and QS intersect at M. Prove, giving reasons, that AD/AR = AS/AC.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "In ΔASD and ΔACR: Â = Â [common angle]. Ŝ1 = T̂2 [proved in 10.1]. T̂2 = Ĉ2 [alt ∠s; QS ∥ CA]. Therefore Ŝ1 = Ĉ2. Therefore ΔASD ||| ΔACR [∠;∠;∠]. Therefore AD/AR = AS/AC [corresponding sides in proportion].",
    marking_notes: "Correctly identifying the two triangles, correct common angle Â=Â, correct statement/reason chaining Ŝ1=T̂2=Ĉ2, correct similarity conclusion, and the correct final proportion with reason.",
    marking_points: [
      { marks: 1, description: "identifying ΔASD and ΔACR", keywords: ["ASD ACR"] },
      { marks: 1, description: "Â = Â [common angle]", keywords: ["common angle"] },
      { marks: 1, description: "Ŝ1 = T̂2 [proved in 10.1], T̂2 = Ĉ2 [alt ∠s; QS ∥ CA]", keywords: ["alt angles", "QS CA", "S1 T2 C2"] },
      { marks: 1, description: "therefore Ŝ1 = Ĉ2, so ΔASD ||| ΔACR [∠;∠;∠]", keywords: ["similar", "ASD ACR"] },
      { marks: 1, description: "therefore AD/AR = AS/AC [corresponding sides in proportion]", keywords: ["corresponding sides", "proportion", "AD AR AS AC"] },
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Prove, giving reasons, that AC × SD = AR × CT.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "AS/AC = SD/CR [ΔASD ||| ΔACR], so AS = AC×SD/CR. Also AS/AR = CT/CR [line ∥ one side of Δ; TS ∥ CA], so AS = AR×CT/CR. Equating: AC×SD/CR = AR×CT/CR, therefore AC × SD = AR × CT.",
    marking_notes: "Correct proportion AS/AC = SD/CR from the similarity, correct second proportion AS/AR = CT/CR with reason, correctly equating the two expressions for AS, and the correct final result.",
    marking_points: [
      { marks: 1, description: "AS/AC = SD/CR [ΔASD ||| ΔACR]", keywords: ["AS AC SD CR", "similar"] },
      { marks: 1, description: "AS/AR = CT/CR [line ∥ one side of a Δ; TS ∥ CA]", keywords: ["AS AR CT CR", "line parallel"] },
      { marks: 1, description: "equating the two expressions for AS", keywords: ["equating"] },
      { marks: 1, description: "therefore AC × SD = AR × CT", keywords: ["AC SD AR CT"] },
    ],
  },
];

// No exam_schedule entries here, matching the Mathematics P1/P2 Nov 2025
// ingestion convention — this paper is in the past.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
