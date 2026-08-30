// Real DBE past paper: Mathematics P2, November 2024, National (English).
// Source: official DBE question paper + official marking guidelines, both
// rendered from images already downloaded (stanmorephysics.com watermark
// banner appears across the top of every page — ignored, not part of the
// real content). QP is 13 numbered question pages + 1 information/formula
// sheet (14 pages total), confirmed by page 2's own statement "This question
// paper consists of 11 questions" and the printed page footers; remaining
// rendered pages are blank/filler answer-book material and were skipped.
// The memo (25 pages) is the genuine official DBE marking guideline: its
// cover page reads "MARKING GUIDELINES/NASIENRIGLYNE" with the official
// crest and "Copyright reserved/Kopiereg voorbehou", and every memo page's
// content matches its corresponding QP question with no stray/mismatched
// pages found.
//
// Paper structure: ELEVEN compulsory questions (no choice), 150 marks,
// 3 hours — one more question than the Nov 2023 P2 paper (ten questions),
// confirmed directly from the rendered images rather than assumed. All 150
// marks are included here: Q1=10, Q2=10, Q3=19, Q4=20, Q5=12, Q6=18, Q7=11,
// Q8=9, Q9=6, Q10=15, Q11=20 (sum = 150, matching the printed "TOTAL: 150"
// on the QP and each question's own printed bracket total on both QP and
// memo).
//
// This is the fourth Mathematics P2 paper ingested into this app. It reuses
// the same Mathematics subject row, the same four CAPS cognitive levels, and
// all four existing topic keys (statistics, analytical_geometry,
// trigonometry, euclidean_geometry) — this paper's content maps onto exactly
// the same four broad CAPS strands, so no new topics were needed.
//
// Marking-point pattern: calculation sub-questions (including trig identity
// "prove"/"show" derivations, which have a single determinate chain of
// intermediate expressions per the memo's primary method) use the
// stepped-MCQ pattern (`steps: MarkingPointStep[]`), one step per
// mark-earning stage, step marks summing exactly to the sub-question's
// `marks`, with plausible Grade 12 distractors (sign slips, wrong
// theorem/rule applied, arithmetic slips, wrong root chosen, mixing up which
// triangle a rule applies to). Genuinely non-computational Euclidean-geometry
// proofs (formal statement + reason pairs: 9.2, 10.1, 10.2.1, 11.1, 11.2,
// 11.3, 11.4) use `marking_points: MarkingPoint[]` instead, since these are
// graded on which correct statements/reasons appear, not on a single
// determinate final value. Single "state a value, with reason" sub-questions
// (9.1) use a single stepped-MCQ step whose options bundle the reason with
// the value, mirroring the 2023 file's Q8.3.1 pattern. Where the memo shows
// an OR/alternative method, the steps/points below are based on the
// FIRST/primary method shown in the memo, not an amalgam of methods.
//
// Diagrams: all diagrams in this paper (Q1, Q2, Q3, Q4, Q5.1, Q7, Q8, Q9,
// Q10.1, Q10.2, Q11) are raster renders of the original page, so each was
// cropped from the full-page image and cross-checked against its exact
// sub-question. Q1's scatter plot was cropped together with its printed data
// table since students need to read both together. Question 6 has no
// diagram in the question paper (pure algebraic/trig identity work), so no
// image is attached to any of its sub-questions.
//
// Judgment calls:
// - Q2.4 (draw a box-and-whisker diagram) and Q2.5/Q2.6 (read values off the
//   ogive / apply a stated business rule) are modelled as stepped-MCQ
//   checks mirroring the memo's own tick breakdown, matching the 2023 file's
//   convention for QP "complete the table" / "draw the diagram" style
//   instructions that don't have a single free-response numeric answer.
// - Q7.3.2 (draw the graph of g(x)=cos2x+1) is modelled as a single 3-mark
//   stepped-MCQ check on the graph's key features (turning points and
//   y-intercept), mirroring the memo's three ticks (turning points on the
//   x-axis, shape, turning point on the y-axis).
// - Q11.4's memo shows five explicit tick marks for six mark-bearing lines
//   of algebra; the final result line (GF² = BC.FC.AF/AD) is treated as
//   its own 1-mark point so that the marking_points sum matches the printed
//   (6), consistent with how the intermediate algebraic steps are marked
//   elsewhere in this question.
// - No sub-question in this paper has two genuinely distinct correct final
//   numeric answers via different valid methods (unlike 2023's Q4.6/Q9.3);
//   every OR/alternative method in the memo reaches the same single answer,
//   so only the first/primary method is captured throughout.
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
  year: 2024,
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

const IMG = "/question-images/maths-2024-p2";

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: STATISTICS — REGRESSION (10 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "At the beginning of a season, the coach of a junior boys' rugby team recorded the weight (in kg) of the 15 players in his team and the number of push-ups that each player was able to do in one minute. The data is represented in the table and scatter plot. Determine the equation of the least squares regression line for the data.",
    marks: 3, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Using a calculator's linear regression function: a = 39,456... and b = −0,590..., so ŷ = 39,46 − 0,59x.",
    marking_notes: "Correct value of a, correct value of b, and the correct equation combining them.",
    steps: [
      { marks: 1, description: "What is a (the y-intercept of the regression line)?", options: ["39,46", "−0,59", "18,33", "−39,46"], correctIndex: 0 },
      { marks: 1, description: "What is b (the gradient of the regression line)?", options: ["−0,59", "39,46", "0,59", "−0,80"], correctIndex: 0 },
      { marks: 1, description: "What is the full equation?", options: ["ŷ = 39,46 − 0,59x", "ŷ = −39,46 + 0,59x", "ŷ = 0,59 − 39,46x", "ŷ = 39,46x − 0,59"], correctIndex: 0 },
    ],
    image_url: `${IMG}/1-scatter-plot-weight-pushups.png`,
  },
  {
    number: "1", sub_number: "1.2",
    text: "Write down the correlation coefficient.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "r = −0,8.",
    marking_notes: "Accept only r = −0,8.",
    steps: [{ marks: 1, description: "What is the correlation coefficient r?", options: ["−0,8", "0,8", "−0,59", "1,0"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "The coach uses the least squares regression line to set the target for the minimum number of push-ups by each team member according to their weight. Predict the number of push-ups that a member of the team, who weighs 29 kg, should do to meet the target.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "ŷ = 39,46 − 0,59(29) = 22,35 push-ups.",
    marking_notes: "Correct substitution of x = 29 into the regression equation, and the correct final predicted number of push-ups.",
    steps: [
      { marks: 1, description: "What do you substitute into the regression equation?", options: ["39,46 − 0,59(29)", "39,46 − 0,59(15)", "0,59(29) − 39,46", "(39,46 − 0,59) × 29"], correctIndex: 0 },
      { marks: 1, description: "What is the predicted number of push-ups?", options: ["22,35", "18,33", "39,46", "17,11"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Write down the mean number of push-ups for the given data.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "ȳ = 18,33.",
    marking_notes: "Accept only ȳ = 18,33.",
    steps: [{ marks: 1, description: "What is the mean number of push-ups?", options: ["18,33", "22,35", "20,00", "39,46"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "The players trained hard during the season. At the end of the season, the coach reported that each player was able to do 5 more push-ups per minute than they did at the beginning of the season. How does the increase in the number of push-ups influence the standard deviation of the data?",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "The increase has no influence — the standard deviation stays the same, since adding a constant to every value does not change the spread of the data.",
    marking_notes: "Accept 'no influence' or 'standard deviation remains the same' (or equivalent).",
    steps: [{ marks: 1, description: "How does adding 5 push-ups to every player's score affect the standard deviation?", options: ["No influence — it stays the same", "It increases by 5", "It doubles", "It decreases"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "At the beginning of the season, the coach used the least squares regression line as the minimum target for a player to aim for. Determine the maximum possible increase in the number of push-ups that a team member must obtain to reach the minimum target.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Problem Solving",
    model_answer: "6 is the furthest y-value below the regression line (for the player at (40;6)). An increase of 10 push-ups would take this player to (40;16), the minimum target for a player weighing 40 kg on the regression line.",
    marking_notes: "Correctly identifying the player furthest below the line (y = 6), and the correct maximum increase needed (10).",
    steps: [
      { marks: 1, description: "Which data point lies furthest below the regression line?", options: ["(40;6)", "(55;7)", "(27;20)", "(57;8)"], correctIndex: 0 },
      { marks: 1, description: "What is the maximum possible increase in push-ups needed to reach the minimum target?", options: ["10", "6", "16", "22"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 2: STATISTICS — OGIVE (10 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "The cumulative frequency graph (ogive) shows the time taken (in minutes) for 60 employees to travel to work each morning. Estimate the median travel time.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "Median ≈ 65 minutes (reading off the ogive at cumulative frequency 30).",
    marking_notes: "Accept only 65.",
    steps: [{ marks: 1, description: "What is the estimated median travel time?", options: ["65 minutes", "44 minutes", "84 minutes", "60 minutes"], correctIndex: 0 }],
    image_url: `${IMG}/2-ogive-cumulative-frequency.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Estimate the lower quartile.",
    marks: 1, topicKey: "statistics", cognitiveLevelName: "Knowledge",
    model_answer: "Q1 ≈ 44 minutes (reading off the ogive at cumulative frequency 15).",
    marking_notes: "Accept only 44.",
    steps: [{ marks: 1, description: "What is the estimated lower quartile?", options: ["44 minutes", "65 minutes", "84 minutes", "15 minutes"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Estimate the interquartile range.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "IQR = Q3 − Q1 = 84 − 44 = 40 minutes.",
    marking_notes: "Correct value of Q3 (84), and the correct interquartile range.",
    steps: [
      { marks: 1, description: "What is the upper quartile Q3?", options: ["84 minutes", "65 minutes", "44 minutes", "90 minutes"], correctIndex: 0 },
      { marks: 1, description: "What is the interquartile range (Q3 − Q1)?", options: ["40 minutes", "84 minutes", "128 minutes", "21 minutes"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "The minimum and maximum times taken for an employee to travel to work are 5 and 120 minutes respectively. On the scaled line in the ANSWER BOOK, draw a box and whisker diagram to indicate the distribution of the data as represented in the ogive above.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Box from Q1 = 44 to Q3 = 84, with the median line at 65; whiskers extending to the minimum (5) and maximum (120).",
    marking_notes: "Correct box (using Q1 = 44, median = 65, Q3 = 84), and correct whiskers ending at the given minimum and maximum (5 and 120).",
    steps: [
      { marks: 1, description: "Where should the box boundaries and median line be drawn?", options: ["Q1 = 44, median = 65, Q3 = 84", "Q1 = 44, median = 84, Q3 = 120", "Q1 = 5, median = 65, Q3 = 120", "Q1 = 15, median = 30, Q3 = 45"], correctIndex: 0 },
      { marks: 1, description: "Where should the whiskers end?", options: ["5 and 120 (the given minimum and maximum)", "44 and 84 (Q1 and Q3)", "0 and 140 (the axis limits)", "65 and 120 (median and maximum)"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.5",
    text: "The company manager decided that all employees who travel for an hour or more will be allowed to work from home for part of the day. What percentage of the employees will be allowed to work from home for part of the day?",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Routine Procedures",
    model_answer: "Number of employees travelling ≥ 60 minutes = 60 − 26 = 34. Percentage = (34/60) × 100 = 56,67%.",
    marking_notes: "Correct number of employees who qualify (34), and the correct percentage.",
    steps: [
      { marks: 1, description: "How many employees travel for an hour (60 minutes) or more?", options: ["34", "26", "44", "60"], correctIndex: 0 },
      { marks: 1, description: "What percentage of employees will be allowed to work from home?", options: ["56,67%", "43,33%", "60,00%", "34,00%"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.6",
    text: "Employees work 8 hours in a normal working day. The manager decided on the following rule: an employee is allowed to work half an hour from home for each time interval of 20 minutes, or part thereof, above an hour taken to travel to work. On a certain day, an employee takes 110 minutes to travel to work. Calculate the number of minutes that this employee will be allowed to work from home on this day.",
    marks: 2, topicKey: "statistics", cognitiveLevelName: "Problem Solving",
    model_answer: "110 − 60 = 50 minutes above an hour. 50/20 = 2,5, rounded up to 3 whole 20-minute intervals. Time allowed = 3 × 30 minutes = 90 minutes.",
    marking_notes: "Correct number of 20-minute intervals (3, rounding up for the part-interval), and the correct total time allowed.",
    steps: [
      { marks: 1, description: "How many 20-minute intervals (or part thereof) is the 50 minutes above an hour?", options: ["3", "2", "50", "2,5"], correctIndex: 0 },
      { marks: 1, description: "How many minutes will the employee be allowed to work from home?", options: ["90 minutes", "60 minutes", "75 minutes", "150 minutes"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 3: ANALYTICAL GEOMETRY — TRIANGLE ACD (19 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "ΔACD has vertices A, D(3;−9) and C(−9;0), where A is a point in the second quadrant. B(−1;k) lies on side DC. Calculate the gradient of DC.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "mDC = (−9−0)/(3−(−9)) = −3/4.",
    marking_notes: "Correct substitution of D and C into the gradient formula, and the correct answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the gradient formula?", options: ["(−9−0)/(3−(−9))", "(3−(−9))/(−9−0)", "(−9+0)/(3+(−9))", "(0−3)/(−9−(−9))"], correctIndex: 0 },
      { marks: 1, description: "What is mDC?", options: ["−3/4", "3/4", "−4/3", "4/3"], correctIndex: 0 },
    ],
    image_url: `${IMG}/3-triangle-acd.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Determine the equation of DC in the form y = mx + c.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "0 = −3/4(−9) + c, so c = −27/4, giving y = −3/4x − 27/4.",
    marking_notes: "Correct substitution of C or D into the equation of a line, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is the correct substitution, using C(−9;0)?", options: ["0 = −3/4(−9) + c", "0 = −3/4(3) + c", "−9 = −3/4(0) + c", "0 = 3/4(−9) + c"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of DC?", options: ["y = −3/4x − 27/4", "y = −3/4x + 27/4", "y = 3/4x − 27/4", "y = −4/3x − 27/4"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Show that k = −6.",
    marks: 1, topicKey: "analytical_geometry", cognitiveLevelName: "Knowledge",
    model_answer: "Substituting B(−1;k) into y = −3/4x − 27/4: k = −3/4(−1) − 27/4 = 3/4 − 27/4 = −6.",
    marking_notes: "Correct substitution of B(−1;k) into the equation of DC.",
    steps: [{ marks: 1, description: "Substituting x = −1 into the equation of DC, what is k?", options: ["−6", "6", "−3", "3"], correctIndex: 0 }],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Calculate the length of DC.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "DC = √[(3+9)² + (−9−0)²] = √(144+81) = √225 = 15 units.",
    marking_notes: "Correct substitution of D and C into the distance formula, and the correct answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the distance formula?", options: ["√[(3+9)² + (−9−0)²]", "√[(3−9)² + (−9+0)²]", "√[(3+9)² − (−9−0)²]", "√[(9−3)² + (0−9)²]"], correctIndex: 0 },
      { marks: 1, description: "What is DC?", options: ["15 units", "225 units", "√225 units (unsimplified)", "12 units"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Calculate the ratio of DB/DC.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "DB = √[(3−(−1))² + (−9−(−6))²] = √(16+9) = 5. DB/DC = 5/15 = 1/3.",
    marking_notes: "Correct length of DB, and the correct ratio.",
    steps: [
      { marks: 1, description: "What is the length of DB?", options: ["5 units", "√25 units (unsimplified)", "4 units", "9 units"], correctIndex: 0 },
      { marks: 1, description: "What is DB/DC?", options: ["1/3", "1/5", "5/9", "3/1"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "If M is a point on AD such that AC ∥ MB, calculate the ratio of Area ΔMBD / Area ΔACD.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "DM/DA = DB/DC = 1/3 (proportion theorem, since MB ∥ AC). Area ΔMBD/Area ΔACD = [(1/2)(DM)(DB)sinD̂] / [(1/2)(DA)(DC)sinD̂] = (DM/DA) × (DB/DC) = 1/3 × 1/3 = 1/9.",
    marking_notes: "Correct ratio DM/DA (= DB/DC, using the proportion theorem), correct use of the triangle area formula for both triangles, correct substitution of both ratios, and the correct final answer.",
    steps: [
      { marks: 1, description: "What is DM/DA, using the fact that MB ∥ AC (proportion theorem)?", options: ["DB/DC = 1/3", "DC/DB = 3", "1/9", "3/1"], correctIndex: 0 },
      { marks: 1, description: "Which formula correctly compares the two triangle areas (D̂ is the common angle)?", options: ["[(1/2)(DM)(DB)sinD̂] / [(1/2)(DA)(DC)sinD̂]", "[(1/2)(DM)(DA)sinD̂] / [(1/2)(DB)(DC)sinD̂]", "(DM)(DB) / (DA)(DC)sinD̂", "[(1/2)(DM)(DB)] / [(1/2)(DA)(DC)] × 2"], correctIndex: 0 },
      { marks: 1, description: "Substituting DM/DA = 1/3 and DB/DC = 1/3, what do you get?", options: ["1/3 × 1/3", "1/3 + 1/3", "(1/3)²  × 2", "1/3 ÷ 1/3"], correctIndex: 0 },
      { marks: 1, description: "What is the final area ratio?", options: ["1/9", "1/6", "2/9", "1/3"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.7",
    text: "If it is further given that the gradient of AD is −4 and the length of AD is √612 units, calculate the coordinates of A.",
    marks: 6, topicKey: "analytical_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "y = −4x + c through D(3;−9): −9 = −4(3) + c, so c = 3, giving y = −4x + 3. Substituting into (x−3)² + (y+9)² = 612: (x−3)² + (−4x+12)² = 612, which expands to 17x² − 102x − 459 = 0, i.e. x² − 6x − 27 = 0, so (x−9)(x+3) = 0, giving x = 9 or x = −3. Since A is in the second quadrant, x = −3. Then y = −4(−3) + 3 = 15, so A(−3;15).",
    marking_notes: "Correct equation of line AD, correct equation (x−3)²+(y+9)²=612 (distance formula for AD=√612), correct substitution of the line equation into this, correct standard-form quadratic, correctly rejecting the invalid root using the second-quadrant condition, and the correct y-coordinate of A.",
    steps: [
      { marks: 1, description: "What is the equation of line AD (through D(3;−9) with gradient −4)?", options: ["y = −4x + 3", "y = −4x − 3", "y = 4x + 3", "y = −4x + 9"], correctIndex: 0 },
      { marks: 1, description: "Using AD = √612, what equation represents the distance from A(x;y) to D(3;−9)?", options: ["(x−3)² + (y+9)² = 612", "(x−3)² + (y−9)² = 612", "(x+3)² + (y+9)² = 612", "(x−3)² + (y+9)² = √612"], correctIndex: 0 },
      { marks: 1, description: "Substituting y = −4x + 3 into the distance equation, what do you get before simplifying?", options: ["(x−3)² + (−4x+12)² = 612", "(x−3)² + (−4x+3)² = 612", "(x−3)² + (4x−12)² = −612", "(x−3)² + (−4x−12)² = 612"], correctIndex: 0 },
      { marks: 1, description: "What is the resulting quadratic in standard form?", options: ["x² − 6x − 27 = 0", "x² + 6x − 27 = 0", "x² − 6x + 27 = 0", "17x² − 102x − 459 = 0 (unreduced)"], correctIndex: 0 },
      { marks: 1, description: "Solving and rejecting the invalid root (A is in the second quadrant), what is x?", options: ["−3 (x = 9 rejected, since A must have x < 0)", "9 (x = −3 rejected)", "3", "−9"], correctIndex: 0 },
      { marks: 1, description: "What is the y-coordinate of A?", options: ["15", "−9", "3", "−15"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 4: ANALYTICAL GEOMETRY — CIRCLE MPRSTL (20 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "M(1;3) is the centre of the circle. The circle cuts the x-axis at N. ST is a tangent to the circle at P(3;9). R(d;1), with d > 0, and L lie on the circle. O and V are the x-intercepts of PL and RL respectively. Write down the coordinates of L.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Knowledge",
    model_answer: "L(−1;−3), the point diametrically opposite P through centre M(1;3).",
    marking_notes: "Correct x-coordinate and correct y-coordinate of L.",
    steps: [{ marks: 2, description: "What are the coordinates of L (diametrically opposite P through M)?", options: ["(−1;−3)", "(1;3)", "(−3;−1)", "(5;9)"], correctIndex: 0 }],
    image_url: `${IMG}/4-circle-mnpst.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Determine the equation of tangent ST to the circle at P.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mMP = (9−3)/(3−1) = 3. Since ST ⊥ MP, mST = −1/3. Using P(3;9): 9 = −1/3(3) + c, so c = 10, giving y = −1/3x + 10.",
    marking_notes: "Correct gradient of the radius MP, correctly using the perpendicular gradient for the tangent, correct substitution of P into the equation of a line, and the correct final equation.",
    steps: [
      { marks: 1, description: "What is mMP, the gradient of radius MP (using M(1;3) and P(3;9))?", options: ["3", "1/3", "−3", "−1/3"], correctIndex: 0 },
      { marks: 1, description: "Since ST is tangent to the circle at P, what is mST?", options: ["−1/3", "3", "1/3", "−3"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using mST = −1/3 and P(3;9)?", options: ["9 = −1/3(3) + c", "9 = −1/3(9) + c", "3 = −1/3(9) + c", "9 = 3(3) + c"], correctIndex: 0 },
      { marks: 1, description: "What is the equation of tangent ST?", options: ["y = −1/3x + 10", "y = −1/3x − 10", "y = 1/3x + 10", "y = −3x + 10"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Show that the equation of the circle with centre M is x² + y² − 2x − 6y − 30 = 0.",
    marks: 4, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "(x−1)² + (y−3)² = r². Substituting P(3;9): (3−1)² + (9−3)² = r², so r² = 40. So (x−1)² + (y−3)² = 40, which expands to x² + y² − 2x − 6y − 30 = 0.",
    marking_notes: "Correct substitution of P(3;9) to find r², correct value of r², correct equation of the circle in centre-radius form, and correctly expanding to the required general form.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find r² (using P(3;9) and M(1;3))?", options: ["(3−1)² + (9−3)² = r²", "(1−3)² − (3−9)² = r²", "(3+1)² + (9+3)² = r²", "(3−1)² + (3−9)² = r²"], correctIndex: 0 },
      { marks: 1, description: "What is r²?", options: ["40", "36", "4", "64"], correctIndex: 0 },
      { marks: 1, description: "What is the equation in centre-radius form?", options: ["(x−1)² + (y−3)² = 40", "(x+1)² + (y+3)² = 40", "(x−1)² + (y−3)² = √40", "x² + (y−1)² = 40"], correctIndex: 0 },
      { marks: 1, description: "What is the expanded general-form equation?", options: ["x² + y² − 2x − 6y − 30 = 0", "x² + y² + 2x + 6y − 30 = 0", "x² + y² − 2x − 6y + 30 = 0", "x² + y² − x − 3y − 30 = 0"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Show that d = 7.",
    marks: 2, topicKey: "analytical_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Substituting R(d;1) into x² + y² − 2x − 6y − 30 = 0: d² + 1 − 2d − 6 − 30 = 0, so d² − 2d − 35 = 0, giving (d−7)(d+5) = 0, so d = 7 or d = −5. Since d > 0, d = 7.",
    marking_notes: "Correct substitution of R(d;1) into the circle's equation, and correctly writing the resulting equation in standard form.",
    steps: [
      { marks: 1, description: "What is the correct substitution of R(d;1) into the circle equation?", options: ["d² + 1² − 2d − 6(1) − 30 = 0", "d² + 1² − 2d − 6(1) + 30 = 0", "d² − 1² − 2d − 6(1) − 30 = 0", "d² + 1² + 2d − 6(1) − 30 = 0"], correctIndex: 0 },
      { marks: 1, description: "Solving, and rejecting the invalid root (d > 0), what is d?", options: ["7 (d = −5 rejected)", "−5 (d = 7 rejected)", "35", "5"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Calculate the size of L̂.",
    marks: 5, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mPO = mMP = 3, so tan(PÔV) = 3, giving PÔV = 71,565°. mRL = (1−(−3))/(7−(−1)) = 1/2, so tan(RV̂N) = 1/2, giving RV̂N = 26,565°. L̂ = PÔV − RV̂N = 71,565° − 26,565° = 45° [exterior angle of a triangle].",
    marking_notes: "Correct relation tan(PÔV) = mPO, correct value of PÔV, correct gradient of RL (using R(7;1) and L(−1;−3)), correct value of RV̂N, and the correct final angle L̂.",
    steps: [
      { marks: 1, description: "Which identity relates PÔV to the gradient of PO (mPO = mMP = 3)?", options: ["tan PÔV = mPO = 3", "sin PÔV = mPO = 3", "PÔV = 3°", "tan PÔV = 1/3"], correctIndex: 0 },
      { marks: 1, description: "What is PÔV?", options: ["71,57°", "18,43°", "45,00°", "63,43°"], correctIndex: 0 },
      { marks: 1, description: "What is mRL, using R(7;1) and L(−1;−3)?", options: ["1/2", "2", "−1/2", "4/8 (unsimplified)"], correctIndex: 0 },
      { marks: 1, description: "What is RV̂N (using tan RV̂N = mRL)?", options: ["26,57°", "63,43°", "18,43°", "45,00°"], correctIndex: 0 },
      { marks: 1, description: "Using the exterior angle of a triangle, what is L̂?", options: ["45,00°", "98,13°", "26,57°", "71,57°"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "TR is a tangent to the circle at R. Prove that PT ⊥ RT.",
    marks: 3, topicKey: "analytical_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "mRM = (1−3)/(7−1) = −1/3. Since TR is tangent at R, mRT = 3 (perpendicular to mRM). mPT = −1/3 (found in 4.2). Since mRT × mPT = 3 × (−1/3) = −1, PT ⊥ RT.",
    marking_notes: "Correct gradient of radius RM, correct perpendicular gradient of tangent RT, and correctly showing mRT × mPT = −1 to conclude PT ⊥ RT.",
    steps: [
      { marks: 1, description: "What is mRM (using R(7;1) and M(1;3))?", options: ["−1/3", "1/3", "−3", "3"], correctIndex: 0 },
      { marks: 1, description: "Since TR is tangent to the circle at R, what is mRT?", options: ["3", "−3", "1/3", "−1/3"], correctIndex: 0 },
      { marks: 1, description: "Using mPT = −1/3 (from 4.2), what shows PT ⊥ RT?", options: ["mRT × mPT = 3 × (−1/3) = −1", "mRT = mPT = −1/3", "mRT + mPT = 0", "mRT × mPT = 1"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 5: TRIGONOMETRY — NO CALCULATOR (12 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "In the diagram, line OP is given with P(−3;−4). KÔP = A. Determine, without using a calculator, the value of cos A.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "r = √[(−3)² + (−4)²] = 5. cos A = −3/5.",
    marking_notes: "Correct value of r (= 5), and the correct value of cos A.",
    steps: [
      { marks: 1, description: "What is r, using P(−3;−4)?", options: ["5", "7", "−5", "25"], correctIndex: 0 },
      { marks: 1, description: "What is cos A?", options: ["−3/5", "3/5", "−4/5", "4/5"], correctIndex: 0 },
    ],
    image_url: `${IMG}/5-angle-op.png`,
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Determine, without using a calculator, the value of cos 2A.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "cos 2A = 2cos²A − 1 = 2(−3/5)² − 1 = −7/25.",
    marking_notes: "Correct substitution of cos A into a double-angle formula for cos 2A, and the correct final answer.",
    steps: [
      { marks: 1, description: "Which substitution correctly uses cos A = −3/5 in a double-angle formula?", options: ["2(−3/5)² − 1", "2(−3/5) − 1", "1 − 2(−3/5)²", "(−3/5)² − (−4/5)²"], correctIndex: 0 },
      { marks: 1, description: "What is cos 2A?", options: ["−7/25", "7/25", "−18/25", "11/25"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Determine, without using a calculator, the value of sin(A − B), if it is further given that sin B = 4/5 and 90° < B < 360°.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since sin B = 4/5 > 0 and 90° < B < 360°, B is in the 2nd quadrant, so x = −3 and cos B = −3/5. sin(A−B) = sinA cosB − cosA sinB = (−4/5)(−3/5) − (−3/5)(4/5) = 12/25 + 12/25 = 24/25.",
    marking_notes: "Correctly identifying x = −3 (B in the 2nd quadrant), correct value of cos B, correct substitution into the compound-angle formula, and the correct final answer.",
    steps: [
      { marks: 1, description: "Given sin B = 4/5 > 0 and 90° < B < 360°, in which quadrant must B lie, and what is x?", options: ["Quadrant 2, x = −3", "Quadrant 3, x = −3", "Quadrant 1, x = 3", "Quadrant 4, x = 3"], correctIndex: 0 },
      { marks: 1, description: "What is cos B?", options: ["−3/5", "3/5", "−4/5", "4/5"], correctIndex: 0 },
      { marks: 1, description: "Using sin(A−B) = sinA cosB − cosA sinB, what is the correct substitution?", options: ["(−4/5)(−3/5) − (−3/5)(4/5)", "(−4/5)(−3/5) + (−3/5)(4/5)", "(−3/5)(−3/5) − (−4/5)(4/5)", "(−4/5)(4/5) − (−3/5)(−3/5)"], correctIndex: 0 },
      { marks: 1, description: "What is sin(A − B)?", options: ["24/25", "−24/25", "7/25", "−7/25"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "If cos α = p, express the following in terms of p: [cos(α/2 − 45°)sin(α/2 − 45°)] / 2.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Multiplying numerator and denominator by 2: [2cos(α/2−45°)sin(α/2−45°)] / (2×2) = sin(α−90°)/4 = −cosα/4 = −p/4.",
    marking_notes: "Correctly multiplying by 2/2 to expose a double-angle form, correctly applying the double-angle identity, correctly applying the co-function identity, and the correct final answer in terms of p.",
    steps: [
      { marks: 1, description: "Multiplying the numerator and denominator by 2, what double-angle identity applies to the numerator?", options: ["2cos(α/2−45°)sin(α/2−45°) = sin(2(α/2−45°)) = sin(α−90°)", "2cos(α/2−45°)sin(α/2−45°) = cos(α−90°)", "2cos(α/2−45°)sin(α/2−45°) = sin(α+90°)", "2cos(α/2−45°)sin(α/2−45°) = 2sin(α−90°)"], correctIndex: 0 },
      { marks: 1, description: "What does the expression become after applying the double-angle identity?", options: ["sin(α−90°)/4", "sin(α−90°)/2", "cos(α−90°)/4", "sin(α+90°)/4"], correctIndex: 0 },
      { marks: 1, description: "Using the co-function identity, what does sin(α − 90°) equal?", options: ["−cos α", "cos α", "−sin α", "sin α"], correctIndex: 0 },
      { marks: 1, description: "What is the final answer in terms of p?", options: ["−p/4", "p/4", "−p/2", "p/2"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 6: TRIGONOMETRY — IDENTITIES AND EQUATIONS (18 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "Given the identity cos(x − y) = cosx cosy + sinx siny. Use this identity to derive a formula for cos(x + y).",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "cos(x+y) = cos(x−(−y)) = cosx cos(−y) + sinx sin(−y) = cosx cosy − sinx siny.",
    marking_notes: "Correctly rewriting (x+y) as (x−(−y)), and correctly reducing cos(−y) and sin(−y) to reach the final formula.",
    steps: [
      { marks: 1, description: "How do you rewrite cos(x + y) so the given identity applies?", options: ["cos(x − (−y))", "cos(x + (−y))", "cos(−x − y)", "cos(y − x)"], correctIndex: 0 },
      { marks: 1, description: "Expanding and simplifying (using cos(−y) = cosy, sin(−y) = −siny), what is the final formula for cos(x+y)?", options: ["cosx cosy − sinx siny", "cosx cosy + sinx siny", "sinx cosy − cosx siny", "cosx siny − sinx cosy"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Hence, or otherwise, show that: [cos(90°−x)cosy + sin(−y)cos(180°+x)] / [cosx cos(360°+y) + sin(360°−x)siny] = tan(x+y).",
    marks: 6, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "cos(90°−x) = sinx, sin(−y) = −siny, cos(180°+x) = −cosx, cos(360°+y) = cosy, sin(360°−x) = −sinx. LHS = [sinx cosy + (−siny)(−cosx)] / [cosx cosy + (−sinx)siny] = [sinx cosy + cosx siny] / [cosx cosy − sinx siny] = sin(x+y)/cos(x+y) = tan(x+y) = RHS.",
    marking_notes: "Correct reduction of each of the five given co-ratio/reduction terms, and correctly applying the compound-angle formulae to reach tan(x+y).",
    steps: [
      { marks: 1, description: "What does cos(90° − x) equal?", options: ["sin x", "cos x", "−sin x", "−cos x"], correctIndex: 0 },
      { marks: 1, description: "What does sin(−y) equal?", options: ["−sin y", "sin y", "−cos y", "cos y"], correctIndex: 0 },
      { marks: 1, description: "What does cos(180° + x) equal?", options: ["−cos x", "cos x", "sin x", "−sin x"], correctIndex: 0 },
      { marks: 1, description: "What does cos(360° + y) equal?", options: ["cos y", "−cos y", "sin y", "−sin y"], correctIndex: 0 },
      { marks: 1, description: "What does sin(360° − x) equal?", options: ["−sin x", "sin x", "cos x", "−cos x"], correctIndex: 0 },
      { marks: 1, description: "After substituting all reductions and simplifying using the compound-angle formulae, what does the expression equal?", options: ["tan(x + y)", "tan(x − y)", "cot(x + y)", "1"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Given: f(x) = √[6sin²x − 11cos(90°+x) + 7]. Solve for x in the interval x ∈ (0°;360°) if f(x) = 2.",
    marks: 6, topicKey: "trigonometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Squaring: 6sin²x − 11cos(90°+x) + 7 = 4. Since cos(90°+x) = −sinx: 6sin²x + 11sinx + 7 = 4, i.e. 6sin²x + 11sinx + 3 = 0, which factorises as (3sinx+1)(2sinx+3) = 0. So sinx = −1/3 or sinx = −3/2 (no solution, since −3/2 < −1). For sinx = −1/3: reference angle = 19,47°, giving x = 199,47° or x = 340,53°.",
    marking_notes: "Correctly squaring both sides, correctly reducing cos(90°+x) to −sinx, correctly factorising the resulting quadratic, correctly identifying which factor gives valid solutions, and both correct final answers in the given interval.",
    steps: [
      { marks: 1, description: "Squaring both sides of the equation, what do you get?", options: ["6sin²x − 11cos(90°+x) + 7 = 4", "6sin²x − 11cos(90°+x) + 7 = 2", "6sinx − 11cos(90°+x) + 7 = 4", "36sin²x − 11cos(90°+x) + 7 = 4"], correctIndex: 0 },
      { marks: 1, description: "What does cos(90° + x) equal?", options: ["−sin x", "sin x", "cos x", "−cos x"], correctIndex: 0 },
      { marks: 1, description: "Substituting and simplifying, what are the factors of the resulting quadratic in sin x?", options: ["(3sinx + 1)(2sinx + 3) = 0", "(3sinx − 1)(2sinx − 3) = 0", "(6sinx + 1)(sinx + 3) = 0", "(3sinx + 1)(2sinx − 3) = 0"], correctIndex: 0 },
      { marks: 1, description: "Which factor gives a valid solution for sin x?", options: ["sinx = −1/3 only (sinx = −3/2 has no solution)", "sinx = −3/2 only (sinx = −1/3 has no solution)", "both sinx = −1/3 and sinx = −3/2 are valid", "neither is valid"], correctIndex: 0 },
      { marks: 2, description: "Solving sinx = −1/3 in the interval x ∈ (0°;360°), what are the two solutions?", options: ["x = 199,47° or x = 340,53°", "x = 19,47° or x = 160,53°", "x = 199,47° or x = 160,53°", "x = 340,53° only"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "Consider the function: g(x) = (4 − 8sin²x) / 3. Calculate the maximum value of g.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "4 − 8sin²x = 4(1 − 2sin²x) = 4cos2x. So g(x) = 4cos2x/3. Since the maximum value of cos2x is 1, the maximum value of g(x) = 4/3.",
    marking_notes: "Correctly factorising and rewriting the numerator using the double-angle identity (1 − 2sin²x = cos2x), correctly rewriting g(x), and the correct maximum value.",
    steps: [
      { marks: 1, description: "Rewriting 4 − 8sin²x using cos2x = 1 − 2sin²x, what do you get?", options: ["4(1 − 2sin²x) = 4cos2x", "4(1 + 2sin²x) = 4cos2x", "4 − 8sin²x = 8cos2x", "4(2sin²x − 1) = −4cos2x"], correctIndex: 0 },
      { marks: 1, description: "What does g(x) simplify to?", options: ["4cos2x/3", "8cos2x/3", "4cos2x", "cos2x/3"], correctIndex: 0 },
      { marks: 1, description: "What is the maximum value of g?", options: ["4/3", "4", "8/3", "1/3"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Write down the smallest possible value of x for which g will have a maximum value in the interval x ∈ (0°;360°].",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "g is maximum when cos2x = 1, i.e. 2x = 360°, so x = 180°.",
    marking_notes: "Accept only x = 180°.",
    steps: [{ marks: 1, description: "What is the smallest x ∈ (0°;360°] for which g has its maximum value?", options: ["180°", "90°", "360°", "0°"], correctIndex: 0 }],
  },

  // ============ QUESTION 7: TRIGONOMETRY — GRAPHS (11 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "The graph of f(x) = tanx is drawn for the interval x ∈ [−180°;180°]. Write down the equation of the asymptote of f in the interval x ∈ [0°;180°].",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "x = 90°.",
    marking_notes: "Accept only x = 90°.",
    steps: [{ marks: 1, description: "What is the equation of the asymptote of f in x ∈ [0°;180°]?", options: ["x = 90°", "x = 180°", "y = 90°", "x = 0°"], correctIndex: 0 }],
    image_url: `${IMG}/7-graph-f-tanx.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Write down the values of x in the interval x ∈ [−180°;0°] for which f(x) ≤ 0.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "x = −180° or x ∈ (−90°;0°], reading off where the graph of f lies on or below the x-axis.",
    marking_notes: "Both parts of the answer are needed for full marks.",
    steps: [{ marks: 2, description: "For which x ∈ [−180°;0°] is f(x) ≤ 0?", options: ["x = −180° or x ∈ (−90°;0°]", "x ∈ [−180°;−90°)", "x ∈ (−90°;0°) only", "x = −180° only"], correctIndex: 0 }],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "Given: g(x) = cos2x + 1. Write down the period of g.",
    marks: 1, topicKey: "trigonometry", cognitiveLevelName: "Knowledge",
    model_answer: "180°, since g(x) = cos2x + 1 has period 360°/2 = 180°.",
    marking_notes: "Accept only 180°.",
    steps: [{ marks: 1, description: "What is the period of g?", options: ["180°", "360°", "90°", "720°"], correctIndex: 0 }],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "On the grid given in the ANSWER BOOK, draw the graph of g(x) = cos2x + 1 for the interval x ∈ [−180°;180°]. Clearly show the intercepts with the axes as well as the coordinates of the turning points.",
    marks: 3, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Cosine-shaped graph with turning points (minima, y = 0) at x = −90° and x = 90°, and a turning point (maximum, y = 2) at (0°;2); the graph starts and ends at (−180°;2) and (180°;2).",
    marking_notes: "Correct turning points on the x-axis at x = −90° and x = 90°, correct overall cosine shape, and the correct turning point on the y-axis at (0;2).",
    steps: [{ marks: 3, description: "Which set of features correctly describes the graph of g(x) = cos2x + 1 on x ∈ [−180°;180°]?", options: ["Minima (y=0) at x = −90° and x = 90°; maximum (y=2) at (0°;2) and at the endpoints", "Maxima at x = −90° and x = 90°; minimum at (0°;0)", "Minima at x = −180° and x = 180°; maximum at (90°;2)", "A straight line through (0°;1) with no turning points"], correctIndex: 0 }],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Use the graphs to determine the general solution of 2cos³x − sinx = 0.",
    marks: 4, topicKey: "trigonometry", cognitiveLevelName: "Problem Solving",
    model_answer: "2cos³x − sinx = 0 gives 2cos²x = sinx/cosx = tanx, so 2cos²x − 1 = tanx − 1, i.e. cos2x + 1 = tanx. Reading off where the graphs of g(x) = cos2x+1 and y = tanx (related to f) intersect: x = 45° + k.180°, k ∈ ℤ.",
    marking_notes: "Correctly reducing to 2cos²x = tanx, correctly rewriting as cos2x + 1 = tanx (linking to the graphs of f and g), and the correct general solution.",
    steps: [
      { marks: 1, description: "Dividing 2cos³x = sinx by cosx, what do you get?", options: ["2cos²x = tanx", "2cosx = tanx", "2cos²x = sinx", "2cos³x = tanx"], correctIndex: 0 },
      { marks: 1, description: "Subtracting 1 from both sides, what do you get?", options: ["2cos²x − 1 = tanx − 1", "2cos²x + 1 = tanx + 1", "2cos²x = tanx − 1", "cos²x − 1 = tanx"], correctIndex: 0 },
      { marks: 1, description: "Using cos2x = 2cos²x − 1, what equation links this to the graphs of f and g?", options: ["cos2x + 1 = tanx", "cos2x − 1 = tanx", "cos2x = tanx + 1", "cos2x + 1 = −tanx"], correctIndex: 0 },
      { marks: 1, description: "What is the general solution?", options: ["x = 45° + k.180°, k ∈ ℤ", "x = 45° + k.360°, k ∈ ℤ", "x = −45° + k.180°, k ∈ ℤ", "x = 90° + k.180°, k ∈ ℤ"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: TRIGONOMETRY — 3D (9 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "C is the foot of a vertical building and D is the top of the same building. The height of the building, CD, is 16 m. Two observers are standing 19 m apart at A and B, where A, B and C lie in the same horizontal plane. A painter is working at point E on the building. The angle of elevation of D from A is 46,85°. DÊB = 122° and BĈA = 105,61°. Calculate the length of AC, the distance between the observer at A and the foot of the building.",
    marks: 2, topicKey: "trigonometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "tan(DÂC) = DC/AC, so AC = 16/tan46,85° = 15 m.",
    marking_notes: "Correct substitution into the trig ratio, and the correct answer.",
    steps: [
      { marks: 1, description: "What is the correct substitution to find AC?", options: ["AC = 16/tan46,85°", "AC = 16 × tan46,85°", "AC = tan46,85°/16", "AC = 16/sin46,85°"], correctIndex: 0 },
      { marks: 1, description: "What is AC?", options: ["15 m", "17 m", "11,7 m", "22 m"], correctIndex: 0 },
    ],
    image_url: `${IMG}/8-building-abcde.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Calculate how far the painter at E is from the top of the building.",
    marks: 7, topicKey: "trigonometry", cognitiveLevelName: "Problem Solving",
    model_answer: "Using the cosine rule in ΔABC: 19² = x² + 15² − 2x(15)cos105,61°, giving x² + 8,07x − 136 = 0, so x = 8,30 m (rejecting the negative root) — this is BC. BÊC = 180° − 122° = 58°. In right-angled ΔBEC: tan(BÊC) = BC/EC, so EC = 8,3/tan58° = 5,19 m. DE = CD − EC = 16 − 5,19 = 10,81 m.",
    marking_notes: "Correct substitution into the cosine rule, correct quadratic in standard form, correct substitution into the quadratic formula, correct length of BC, correct size of BÊC, correct length of EC, and the correct final distance DE.",
    steps: [
      { marks: 1, description: "What is the correct substitution into the cosine rule for AB² (letting BC = x)?", options: ["19² = x² + 15² − 2x(15)cos105,61°", "19² = x² + 15² + 2x(15)cos105,61°", "15² = x² + 19² − 2x(19)cos105,61°", "19² = x² − 15² − 2x(15)cos105,61°"], correctIndex: 0 },
      { marks: 1, description: "What is the resulting quadratic in standard form?", options: ["x² + 8,07x − 136 = 0", "x² − 8,07x − 136 = 0", "x² + 8,07x + 136 = 0", "x² + 136x − 8,07 = 0"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution into the quadratic formula?", options: ["x = [−8,07 ± √(8,07² − 4(1)(−136))] / 2(1)", "x = [8,07 ± √(8,07² − 4(1)(−136))] / 2(1)", "x = [−8,07 ± √(8,07² + 4(1)(−136))] / 2(1)", "x = [−8,07 ± √(8,07² − 4(1)(136))] / 2(1)"], correctIndex: 0 },
      { marks: 1, description: "What is the length of BC (rejecting the negative root)?", options: ["8,30 m", "−16,38 m", "16,38 m", "8,07 m"], correctIndex: 0 },
      { marks: 1, description: "What is BÊC (using DÊB = 122°, angles on a straight line)?", options: ["58°", "122°", "32°", "62°"], correctIndex: 0 },
      { marks: 1, description: "Using tan(BÊC) = BC/EC, what is EC?", options: ["5,19 m", "13,28 m", "4,40 m", "8,30 m"], correctIndex: 0 },
      { marks: 1, description: "How far is the painter E from the top of the building D (DE = CD − EC)?", options: ["10,81 m", "5,19 m", "21,19 m", "16,00 m"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 9: EUCLIDEAN GEOMETRY — CYCLIC QUAD ABCD (6 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "ABCD is a cyclic quadrilateral. BC is produced to E. AC is drawn. Â1 = (1/2)B̂, Â2 = 46° and Ĉ1 = 86°. Calculate, with a reason, the value of Â1.",
    marks: 2, topicKey: "euclidean_geometry", cognitiveLevelName: "Routine Procedures",
    model_answer: "Â1 = 40° [exterior angle of a cyclic quadrilateral], since Ĉ1 = Â1 + Â2 (86° = Â1 + 46°).",
    marking_notes: "Correct value (40°) and correct reason (exterior angle of a cyclic quadrilateral).",
    steps: [{ marks: 2, description: "What is Â1, with reason?", options: ["40° [exterior angle of a cyclic quadrilateral]", "46° [opposite angles of a cyclic quadrilateral]", "86° [exterior angle of a cyclic quadrilateral]", "40° [angles in the same segment]"], correctIndex: 0 }],
    image_url: `${IMG}/9-cyclic-quad-abcde.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "Hence, prove that AD = DC.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "B̂ = 80° [since Â1 = (1/2)B̂ = 40°]. D̂ = 100° [opposite angles of a cyclic quadrilateral, since ABCD is cyclic]. In ΔACD: Ĉ2 = 180° − 100° − 40° = 40° [sum of angles in a triangle]. So Ĉ2 = Â1 = 40°, therefore AD = DC [sides opposite equal angles].",
    marking_notes: "Correct value of B̂ (statement), correct value and reason for D̂, correct value of Ĉ2 (statement), and correct final conclusion with reason.",
    marking_points: [
      { marks: 1, description: "B̂ = 80° [Â1 = (1/2)B̂]", keywords: ["B", "80"] },
      { marks: 1, description: "D̂ = 100° [opposite angles of a cyclic quadrilateral]", keywords: ["opposite angles", "cyclic quad", "100"] },
      { marks: 1, description: "Ĉ2 = 40° [sum of angles in a triangle], so Ĉ2 = Â1 = 40°", keywords: ["sum of angles", "triangle", "C2 40"] },
      { marks: 1, description: "therefore AD = DC [sides opposite equal angles]", keywords: ["sides opposite equal angles", "AD DC"] },
    ],
  },

  // ============ QUESTION 10: EUCLIDEAN GEOMETRY — PROPORTIONALITY AND CIRCLE (15 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "ΔRST is drawn. Line AB intersects RS and RT at A and B respectively such that AB ∥ ST. Prove the theorem which states that a line drawn parallel to one side of a triangle divides the other two sides proportionally, i.e. RA/AS = RB/BT.",
    marks: 6, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Construction: join SB and TA, and draw h1 from B perpendicular to AR, and h2 from A perpendicular to RB. area ΔRAB / area ΔASB = [(1/2)RA×h1] / [(1/2)AS×h1] = RA/AS. area ΔRAB / area ΔABT = [(1/2)RB×h2] / [(1/2)BT×h2] = RB/BT. area ΔRAB = area ΔRAB [common], and area ΔASB = area ΔABT [same base and height, since AB ∥ ST]. Therefore area ΔRAB/area ΔASB = area ΔRAB/area ΔABT, so RA/AS = RB/BT.",
    marking_notes: "One mark for the correct construction, one mark each for the two area-ratio setups (RA/AS and RB/BT), and two marks for correctly identifying the common triangle and the equal-area triangles (statement and reason) that let the two ratios be equated.",
    marking_points: [
      { marks: 1, description: "Construction: join SB and TA, and draw h1 from B ⊥ AR and h2 from A ⊥ RB", keywords: ["construction", "join", "perpendicular"] },
      { marks: 1, description: "area ΔRAB/area ΔASB = [(1/2)RA×h1] / [(1/2)AS×h1] = RA/AS", keywords: ["RAB", "ASB", "RA AS"] },
      { marks: 1, description: "area ΔRAB/area ΔABT = [(1/2)RB×h2] / [(1/2)BT×h2] = RB/BT", keywords: ["RAB", "ABT", "RB BT"] },
      { marks: 2, description: "area ΔRAB = area ΔRAB [common], and area ΔASB = area ΔABT [same base and height; AB ∥ ST]", keywords: ["common", "same base and height", "AB ST"] },
      { marks: 1, description: "therefore RA/AS = RB/BT", keywords: ["RA AS RB BT"] },
    ],
    image_url: `${IMG}/10-1-triangle-rst-ab.png`,
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "O is the centre of the circle. ΔPWS is drawn with P, W and S on the circle. OR ⊥ PS. PRS is produced to T. SW and OT intersect at V. OV : OT = 1 : 4. Prove, with reasons, that OR : WS = 1 : 2.",
    marks: 5, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "PR = RS [line from centre perpendicular to chord bisects the chord]. PO = OW [radii]. Therefore OR = (1/2)WS [midpoint theorem, since O and R are midpoints of PW and PS respectively]. Therefore OR : WS = 1 : 2.",
    marking_notes: "Correct statement and reason for PR = RS, correct statement for PO = OW, and correct statement and reason for OR = (1/2)WS leading to the final ratio.",
    marking_points: [
      { marks: 2, description: "PR = RS [line from centre ⊥ to chord bisects the chord]", keywords: ["PR RS", "perpendicular to chord"] },
      { marks: 1, description: "PO = OW [radii]", keywords: ["radii", "PO OW"] },
      { marks: 2, description: "OR = (1/2)WS [midpoint theorem], therefore OR : WS = 1 : 2", keywords: ["midpoint theorem", "OR WS"] },
    ],
    image_url: `${IMG}/10-2-circle-pwstor.png`,
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Calculate the length of PT if ST = 15 units.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Since OV:OT = 1:4, VT:OT = 3:4. By the proportion theorem (RO ∥ SW, since OR and SW are both perpendicular-related lines through the midpoints): RS/ST = OV/OT = 1/3... using RO ∥ SW, RS/ST = 1/3, so RS = 15/3 = 5 units. PR = RS = 5 units [line from centre ⊥ to chord]. PT = PR + RS + ST = 5 + 5 + 15 = 25 units.",
    marking_notes: "Correct ratio RS/ST (using the proportion theorem, RO ∥ SW), correct length of RS, correct length of PR (using PR = RS), and the correct final length of PT.",
    steps: [
      { marks: 1, description: "Using OV : OT = 1 : 4 and the proportion theorem (RO ∥ SW), what is RS/ST?", options: ["1/3", "1/4", "1/2", "3/4"], correctIndex: 0 },
      { marks: 1, description: "What is RS (using ST = 15 units)?", options: ["5 units", "3,75 units", "7,5 units", "10 units"], correctIndex: 0 },
      { marks: 1, description: "What is PR (using PR = RS, line from centre ⊥ to chord)?", options: ["5 units", "10 units", "15 units", "2,5 units"], correctIndex: 0 },
      { marks: 1, description: "What is PT (PT = PR + RS + ST)?", options: ["25 units", "20 units", "15 units", "30 units"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 11: EUCLIDEAN GEOMETRY — TWO CIRCLES (20 marks) ============

  {
    number: "11", sub_number: "11.1",
    text: "A, B, G and F lie on the larger circle. A smaller circle is drawn to touch the larger circle internally at A. EA is a common tangent to both circles. EBCF is a tangent to the smaller circle at C. AC is produced to G. AF cuts the smaller circle at D. AB, CD and GF are drawn. If EÂG = x, determine with reasons, FOUR other angles that are equal to x.",
    marks: 6, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "D̂1 = EÂG = x [tan-chord theorem, tangent EBCF and chord AD of the smaller circle]. Ĉ1 = D̂1 = x [tan-chord theorem, tangent EBCF and chord DC of the smaller circle]. Ĉ4 = Ĉ1 = x [vertically opposite angles]. AF̂G = EÂG = x [tan-chord theorem, tangent EBCF and chord AG of the larger circle].",
    marking_notes: "Correct statement and reason for each of the four angles equal to x: D̂1, Ĉ1, Ĉ4 and AF̂G.",
    marking_points: [
      { marks: 2, description: "D̂1 = EÂG = x [tan-chord theorem]", keywords: ["tan-chord", "D1"] },
      { marks: 2, description: "Ĉ1 = D̂1 = x [tan-chord theorem]", keywords: ["tan-chord", "C1"] },
      { marks: 1, description: "Ĉ4 = Ĉ1 = x [vertically opposite angles]", keywords: ["vertically opposite", "C4"] },
      { marks: 1, description: "AF̂G = EÂG = x [tan-chord theorem]", keywords: ["tan-chord", "AFG"] },
    ],
    image_url: `${IMG}/11-circles-eabgfdc.png`,
  },
  {
    number: "11", sub_number: "11.2",
    text: "Prove that AG.AD = AC.AF.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "D̂1 = AF̂G = x [both proved equal to x in 11.1]. Therefore DC ∥ FG [corresponding angles equal]. AG/AC = AF/AD [proportion theorem, DC ∥ FG]. Therefore AG.AD = AC.AF.",
    marking_notes: "Correct statement linking D̂1 = AF̂G, correct statement and reason that DC ∥ FG, and correct statement and reason for the proportion leading to AG.AD = AC.AF.",
    marking_points: [
      { marks: 1, description: "D̂1 = AF̂G = x", keywords: ["D1", "AFG"] },
      { marks: 1, description: "therefore DC ∥ FG [corresponding angles equal]", keywords: ["corresponding angles", "DC FG"] },
      { marks: 2, description: "AG/AC = AF/AD [proportion theorem; DC ∥ FG], therefore AG.AD = AC.AF", keywords: ["proportion theorem", "AG AD AC AF"] },
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Prove that ΔAGF ||| ΔABC.",
    marks: 4, topicKey: "euclidean_geometry", cognitiveLevelName: "Complex Procedures",
    model_answer: "Ĝ = B̂2 [angles in the same segment, both subtending AF]. AF̂G = Ĉ1 = x [proved in 11.1]. Â3 = Â2 [sum of angles in a triangle, since the third angles of ΔAGF and ΔABC must be equal given the other two pairs are equal]. Therefore ΔAGF ||| ΔABC [∠;∠;∠].",
    marking_notes: "Correct statement and reason for Ĝ = B̂2, correct statement linking AF̂G = Ĉ1 = x (proved in 11.1), and correct statement for the third pair of angles leading to the similarity conclusion.",
    marking_points: [
      { marks: 2, description: "Ĝ = B̂2 [angles in the same segment]", keywords: ["same segment", "G B2"] },
      { marks: 1, description: "AF̂G = Ĉ1 = x [proved in 11.1]", keywords: ["proved", "AFG C1"] },
      { marks: 1, description: "Â3 = Â2 [sum of angles in a triangle], therefore ΔAGF ||| ΔABC [∠;∠;∠]", keywords: ["sum of angles", "similar", "AGF ABC"] },
    ],
  },
  {
    number: "11", sub_number: "11.4",
    text: "Prove that GF² = (BC.FC.AF) / AD.",
    marks: 6, topicKey: "euclidean_geometry", cognitiveLevelName: "Problem Solving",
    model_answer: "GF/BC = AF/AC [ΔAGF ||| ΔABC, proved in 11.3], so GF = BC.AF/AC. ΔACD ||| ΔFGC [∠;∠;∠], so AC/GF = AD/FC, giving AC = AD.FG/FC. Substituting: GF = BC.AF ÷ (AD.FG/FC) = BC.AF × FC/(AD.FG). Therefore GF² = (BC.FC.AF)/AD.",
    marking_notes: "Correct statement and reason for GF/BC = AF/AC, correct rearrangement to GF = BC.AF/AC, correct statement and reason for ΔACD ||| ΔFGC, correct proportion AC/GF = AD/FC, correct substitution to eliminate AC, and the correct final result GF² = (BC.FC.AF)/AD.",
    marking_points: [
      { marks: 1, description: "GF/BC = AF/AC [ΔAGF ||| ΔABC]", keywords: ["GF BC", "AF AC"] },
      { marks: 1, description: "therefore GF = BC.AF/AC", keywords: ["GF BC AF AC"] },
      { marks: 1, description: "ΔACD ||| ΔFGC [∠;∠;∠]", keywords: ["ACD FGC", "similar"] },
      { marks: 1, description: "AC/GF = AD/FC", keywords: ["AC GF", "AD FC"] },
      { marks: 1, description: "therefore AC = AD.FG/FC", keywords: ["AC AD FG FC"] },
      { marks: 1, description: "substituting, GF² = (BC.FC.AF)/AD", keywords: ["GF2 BC FC AF AD"] },
    ],
  },
];

// No exam_schedule entries here, matching the Mathematics P1/P2 Nov 2025 and
// Nov 2023 ingestion convention — this paper is in the past.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
