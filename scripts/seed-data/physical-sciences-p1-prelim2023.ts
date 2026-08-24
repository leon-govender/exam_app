// School-authored past paper (NOT a DBE national paper): Parktown Boys' High
// School, Physical Sciences Grade 12, Physics — Paper 1, Preliminary
// Examination, September 2023. 150 marks, 3 hours.
// Source: school's own question paper + school's own marking memorandum
// (both supplied directly by the user, not fetched from a public mirror).
// No source_url — this is a private school paper, not published online.
//
// Every question and sub-question (150/150 marks) is transcribed here.
// Diagrams (MCQ graphs, circuit diagrams, force diagrams, the AC generator
// schematic, etc.) are hand-drawn/vector line art in the scanned PDF, so
// they were cropped from full-page renders of the question paper.
//
// IMPORTANT MEMO GAP: the memo PDF supplied is 9 pages long and its content
// stops after Question 8 — page 5 of the memo is an exact duplicate of page
// 4 (both show Question 4's answers), which appears to have displaced what
// should have been the final page(s) covering Question 9 (Electrodynamics,
// 15 marks) and Question 10 (Photoelectric effect, 10 marks). No memo
// answers for Q9/Q10 exist anywhere in the supplied 9-page file. Per the
// "do not invent exam content" constraint, the QUESTIONS themselves are
// transcribed faithfully from the real question paper (nothing invented
// there), but the model answers/marking points for Q9 and Q10 are this
// ingestion's own from-scratch worked solutions, derived directly from the
// CAPS-standard formulae on the paper's own data sheet (Table 2) and the
// values stated in the question paper — not transcribed from any official
// memo, because none exists in the source file. Two specific judgment calls
// worth flagging: (1) Q9.1.1's part "R" is read as the slip rings, based on
// its label position on the ring itself in the diagram, though "brushes"
// is a plausible alternative reading of the same diagram; (2) Q9.3's current
// direction (A to B vs B to A) cannot be determined with certainty from the
// static line diagram's rotation arrow — B to A is used per the standard
// convention for this widely-reused SA generator diagram, flagged as
// low-confidence in the ingestion report.
//
// One arithmetic slip found and corrected: memo Q3.6 states "16,661 m" as
// the final distance between the ball and balloon, but the memo's own
// working (17,052 − 0,441) actually equals 16,611 m — the memo's stated
// answer looks like a transposed-digit slip. This file uses the
// independently-verified 16,611 m and documents the discrepancy here rather
// than silently picking one value (per known past failure mode in this
// app's ingestion process).
//
// Calculation sub-questions use `steps` (stepped-MCQ grading, see
// gradeSteppedAnswer in src/lib/grader.ts): the student works the problem
// out on paper, then picks the option matching their result for each
// mark-earning step, rather than typing free text. Distractors trap
// specific real errors (wrong formula, sign flip, using the wrong given
// value) drawn from what the memo's own crossed-out/corrected working
// shows students actually got wrong.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2023-prelim-p1";

export const subject = {
  name: "Physical Sciences",
  stream: null as string | null,
};

export const cognitiveLevels = [
  { name: "Recall", order_index: 1 },
  { name: "Comprehension", order_index: 2 },
  { name: "Application", order_index: 3 },
  { name: "Evaluation", order_index: 4 },
];

export const topics = [
  {
    key: "newtons-laws",
    name: "Newton's Laws of Motion",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Mechanics (Newton's Laws)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=newtons+laws+of+motion+grade+12+physical+sciences",
  },
  {
    key: "momentum-impulse",
    name: "Momentum and Impulse",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Mechanics (Momentum and Impulse)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=momentum+and+impulse+grade+12+physical+sciences",
  },
  {
    key: "vertical-projectile-motion",
    name: "Vertical Projectile Motion",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Mechanics (Vertical Projectile Motion)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=vertical+projectile+motion+grade+12+physical+sciences",
  },
  {
    key: "work-energy-power",
    name: "Work, Energy and Power",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Mechanics (Work, Energy and Power)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=work+energy+power+grade+12+physical+sciences",
  },
  {
    key: "doppler-effect",
    name: "The Doppler Effect",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Waves, Sound and Light (Doppler Effect)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=doppler+effect+grade+12+physical+sciences",
  },
  {
    key: "electrostatics",
    name: "Electrostatics",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Electricity and Magnetism (Electrostatics)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=electrostatics+coulombs+law+grade+12+physical+sciences",
  },
  {
    key: "electric-circuits",
    name: "Electric Circuits",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Electricity and Magnetism (Electric Circuits)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=electric+circuits+emf+internal+resistance+grade+12",
  },
  {
    key: "electrodynamics",
    name: "Electrodynamics (Generators and Motors)",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Electricity and Magnetism (Electrodynamics)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=AC+generator+DC+motor+grade+12+physical+sciences",
  },
  {
    key: "photoelectric-effect",
    name: "The Photoelectric Effect",
    caps_term: "Term 3",
    textbook_ref: "Grade 12 Physical Sciences — Matter and Materials (Photoelectric Effect)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=photoelectric+effect+grade+12+physical+sciences",
  },
];

export const paper = {
  year: 2023,
  exam_diet: "September",
  paper_number: "P1",
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

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Consider the formula W = FΔxcosθ. How many scalar and how many vector quantities does this equation contain? (A) one scalar and two vectors (B) two scalars and one vector (C) three scalars (D) three vectors",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "A — one scalar (W, work, is a scalar) and two vectors (F and Δx are vectors; θ is the angle between them, not a separate quantity).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The acceleration-time graph for the motion of a certain body is shown: a constant, positive acceleration from t = 0. Which of the following graphs (A–D) best illustrates the corresponding graph of the resultant force on the body versus time?",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "C — a constant, horizontal line (since Fnet = ma, and a constant acceleration with constant mass gives a constant net force).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.2-graphs.png`,
  },
  {
    number: "1", sub_number: "1.3",
    text: "A ball is thrown vertically upward. The ball slows down and stops at its highest point. The acceleration at its highest point is: (A) 0 m·s⁻² (B) 9,8 m·s⁻² downward (C) 9,8 m·s⁻² upwards (D) 0 m·s⁻¹",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "B — 9,8 m·s⁻² downward. Velocity is momentarily zero at the highest point, but acceleration due to gravity acts continuously and is never zero during free fall.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "When the velocity of a moving object is doubled, the ... (A) net work done by the object is doubled (B) kinetic energy of the object is doubled (C) potential energy of the object is doubled (D) linear momentum of the object is doubled",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "D — linear momentum of the object is doubled (p = mv is directly proportional to v; kinetic energy, by contrast, would quadruple since Ek = ½mv²).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "The light from distant galaxies is shifted to longer wavelengths. This is called _______ and occurs because _______. (A) red shift, the frequency of light decreases as it travels through space (B) red shift, distant galaxies have a relative movement away from Earth (C) blue shift, the wavelength of light from galaxies increases as it travels through space (D) blue shift, some galaxies are approaching Earth",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "B — red shift, distant galaxies have a relative movement away from Earth.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "When a stone falls vertically which of the following statements is true? Ignore air friction. (A) There is no change in the total energy (B) Ek is conserved (C) Ek decreases and gravitational Ep increases (D) Ep is conserved",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "A — there is no change in the total (mechanical) energy, since only the conservative gravitational force acts (Ek increases and Ep decreases by equal amounts, keeping total mechanical energy constant).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two point charges, X and Y, produce a net electric field (Enet) at point P which is directed to the RIGHT, with X, Y and P in a straight line (X furthest left, then Y, then P). Which ONE of the following combinations of charges X and Y CANNOT produce this?",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "D — X negative, Y negative. If both X and Y are negative, the field at P from each points back toward the (negative) charge, i.e. to the LEFT from both, so the net field at P would point left, not right — this combination cannot produce a net field to the right.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.7-charges.png`,
  },
  {
    number: "1", sub_number: "1.8",
    text: "Two IDENTICAL resistors are connected in parallel, each in series with its own switch/ammeter branch as shown, with the internal resistance of the cell and resistance of the connecting wires ignored. When switch S is open, the reading of the ammeter is I. When switch S is closed, the reading of the ammeter will be ... (A) I (B) 2I (C) I/2 (D) 0",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A — I. The ammeter shown is in series with only the top resistor R, so it always reads the current through that single resistor branch; since the resistors are identical and the emf/voltage across each parallel branch stays the same regardless of whether S is open or closed, the ammeter's reading is unaffected by closing S.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.8-circuit.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "A multi plug enables us to plug many appliances in at the same time so that they can function simultaneously. If a multi plug adaptor connected in parallel is overloaded with too many appliances, a trip switch cuts off the electrical supply. Which ONE of the following statements best explains the situation? (A) The effective resistance increases and the current becomes too high (B) Less current is required (C) The effective resistance decreases, resulting in a larger current in the plug (D) The current is divided among all the appliances and is not enough for them all to operate",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "C — the effective resistance decreases (more parallel branches means lower total resistance), resulting in a larger total current drawn from the supply, which trips the switch.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "The number of photoelectrons per unit time ejected from a metal surface depends on the ... (A) intensity of the incident light (B) frequency of the incident light (C) wavelength of the incident light (D) threshold frequency of the metal",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "A — the intensity of the incident light (more photons per second means more photoelectrons emitted per second, provided the frequency already exceeds the threshold frequency).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (17 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "A learner constructs a push toy using two blocks with masses 1,5 kg and 3 kg respectively, connected by a massless, inextensible cord. A force of 25 N at an angle of 30° is applied to the 1,5 kg block by means of a light rigid rod, moving the toy across a flat, rough, horizontal surface (coefficient of kinetic friction 0,15 between the surface and each block). State Newton's Second Law of Motion in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When a net force acts on a body, the body will accelerate in the direction of the force. This acceleration is directly proportional to the force and inversely proportional to the mass.",
    marking_notes: "Full statement including 'net force causes acceleration in the direction of the force' and 'directly proportional to force, inversely proportional to mass' required for full marks.",
    marking_points: [
      { marks: 1, description: "net force causes the body to accelerate in the direction of the force", keywords: ["net force", "direction of the force"] },
      { marks: 1, description: "acceleration directly proportional to force and inversely proportional to mass", keywords: ["directly proportional", "inversely proportional", "mass"] },
    ],
    image_url: `${IMG}/2-block-diagram.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Calculate the magnitude of the kinetic frictional force acting on the 3 kg block.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Ff = μN = 0,15 × 3(9,8) = 4,41 N.",
    marking_notes: "Formula Ff = μN, correct substitution (N = 3×9,8 since the 3 kg block rests flat with no vertical component of applied force acting on it), correct final answer 4,41 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the kinetic friction on the 3 kg block?",
        options: ["Ff = μN", "Ff = μmg cos θ", "Ff = ma", "Ff = μN sin θ"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the kinetic frictional force on the 3 kg block?",
        options: ["4,41 N", "2,94 N", "4,08 N", "0,15 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Draw a labelled free-body diagram showing ALL the forces acting on the 1,5 kg block.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Five forces act on the 1,5 kg block, all drawn from a single point: normal force FN vertically up; weight mg vertically down; applied force Fa at 30° above the horizontal (pulling on the rod); tension T horizontal, pulling back toward the 3 kg block; and kinetic friction Ff horizontal, opposing the block's motion.",
    marking_notes: "One mark for all 5 forces present, one mark for correct directions, one mark for all arrows correctly drawn/touching a single point. Max 3.",
    marking_points: [
      { marks: 1, description: "all 5 forces present: FN, mg, Fa, T, Ff", keywords: ["normal force", "weight", "tension", "friction", "applied force"] },
      { marks: 1, description: "all forces correctly directed", keywords: ["directions"] },
      { marks: 1, description: "all arrows correctly drawn from a single point/touching", keywords: ["touching", "single point"] },
    ],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "Calculate the magnitude of the kinetic frictional force acting on the 1,5 kg block.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Vertically: N = mg + F sin30° = 1,5(9,8) + 25 sin30° = 27,2 N. Then Ff = μN = 0,15 × 27,2 = 4,08 N.",
    marking_notes: "Marking points: correct vertical equation N = mg + Fsinθ; correct substitution giving N = 27,2 N; formula Ff = μN; final answer 4,08 N.",
    steps: [
      {
        marks: 1,
        description: "Which equation gives the normal force on the 1,5 kg block (F acts upward at 30° above horizontal)?",
        options: ["N = mg + F sin30°", "N = mg − F sin30°", "N = mg + F cos30°", "N = F sin30°"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the normal force N?",
        options: ["27,2 N", "14,7 N", "2,2 N", "39,7 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the kinetic frictional force on the 1,5 kg block?",
        options: ["4,08 N", "2,21 N", "5,96 N", "4,41 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Calculate the tension in the cord connecting the two blocks.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "1,5 kg block: Fcosθ − Ff − T = ma → 25cos30° − 4,08 − T = 1,5a → 17,57 − T = 1,5a. 3 kg block: T − Ff = ma → T − 4,41 = 3a. Adding: 17,57 − 4,41 = 4,5a → a = 2,92 m·s⁻². T = 3(2,92) + 4,41 = 13,18 N.",
    marking_notes: "Marking points: equation of motion for the 1,5 kg block; equation of motion for the 3 kg block; the two equations combined; a = 2,92 m·s⁻²; T = 13,18 N.",
    steps: [
      {
        marks: 1,
        description: "What is the equation of motion for the 1,5 kg block (Fa at 30°, friction Ff, tension T pulling back)?",
        options: [
          "F cos30° − Ff − T = (1,5)a",
          "F cos30° + Ff − T = (1,5)a",
          "F − Ff − T = (1,5)a",
          "F cos30° − T = (1,5)a",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the equation of motion for the 3 kg block (tension T pulls it forward, friction Ff opposes)?",
        options: ["T − Ff = (3)a", "T + Ff = (3)a", "Ff − T = (3)a", "T − Ff = (1,5)a"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Solving the two simultaneous equations, what is the acceleration a?",
        options: ["2,92 m·s⁻²", "3,90 m·s⁻²", "5,85 m·s⁻²", "1,46 m·s⁻²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the tension T in the cord?",
        options: ["13,18 N", "8,76 N", "17,57 N", "4,41 N"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (15 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A hot air balloon rises vertically at a CONSTANT velocity. When the hot air balloon reaches point A a few metres above the ground, a man in the balloon drops a ball which hits the ground and bounces. Ignore the effects of friction. Define free fall.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Only gravitational forces act on the ball (motion under the influence of gravity alone).",
    marking_notes: "Must refer to only the gravitational force acting.",
    marking_points: [{ marks: 2, description: "only gravitational forces act on the object", keywords: ["gravitational force", "only"] }],
    image_url: `${IMG}/3-balloon.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Using the velocity-time graph provided (from the instant the ball is dropped until after it bounces for the first time; upward taken as positive), write down the magnitude of the velocity of the hot air balloon.",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "5,88 m·s⁻¹ (the ball's initial velocity at t = 0, which equals the balloon's constant velocity since the ball was released from rest relative to the balloon).",
    marking_notes: "Accept only 5,88 m·s⁻¹.",
    marking_points: [{ marks: 1, description: "5,88 m·s⁻¹", keywords: ["5 88"] }],
    image_url: `${IMG}/3-vt-graph.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "Calculate the height above the ground from which the ball was dropped (the ball first strikes the ground at t = 2,6 s, per the graph).",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Δy = viΔt + ½aΔt² = 5,88(2,6) + ½(−9,8)(2,6)² = −17,836 m, so the ball was dropped from 17,836 m above the ground.",
    marking_notes: "Formula Δy = viΔt + ½aΔt², correct substitution using Δt = 2,6 s, correct final answer 17,836 m.",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies from the drop (t = 0) to the ball striking the ground (t = 2,6 s)?",
        options: ["Δy = viΔt + ½aΔt²", "vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = vfΔt − ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What height above the ground was the ball dropped from?",
        options: ["17,836 m", "15,288 m", "33,124 m", "2,548 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Calculate the time at the point P indicated on the graph (P is the moment, after the first bounce, when the ball's velocity is momentarily zero at its maximum height).",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf = vi + aΔt from the bounce (v = 2,94 m·s⁻¹ at t = 2,6 s): 0 = 2,94 + (−9,8)t, giving t = 0,3 s after the bounce, so the time at P is 2,6 + 0,3 = 2,9 s.",
    marking_notes: "Method (equation of motion applied from the bounce) and final answer t = 2,9 s.",
    steps: [
      {
        marks: 1,
        description: "Which method finds the time at P (v = 0) after the bounce at t = 2,6 s, v = 2,94 m·s⁻¹?",
        options: [
          "vf = vi + aΔt, solved for the time after the bounce, then add 2,6 s",
          "Δy = viΔt + ½aΔt², solved directly for the total time",
          "vf² = vi² + 2aΔy, solved for Δy first",
          "t = distance ÷ speed using 19,60 m·s⁻¹",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the time at point P?",
        options: ["2,9 s", "2,6 s", "3,2 s", "0,3 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Calculate the maximum height the ball reaches after the first bounce.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Δy = viΔt + ½aΔt² = 2,94(0,3) + ½(−9,8)(0,3)² = 0,441 m.",
    marking_notes: "Formula Δy = viΔt + ½aΔt², correct substitution (vi = 2,94 m·s⁻¹, Δt = 0,3 s from 3.4), correct final answer 0,441 m.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the maximum height reached after the bounce?",
        options: ["Δy = viΔt + ½aΔt²", "Δy = viΔt", "vf² = vi² + 2aΔy solved for vf", "Δy = ½at²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the maximum height reached after the first bounce?",
        options: ["0,441 m", "0,882 m", "1,323 m", "2,940 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "Calculate the distance between the ball and the hot air balloon when the ball is at its maximum height after the first bounce.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "The balloon moves up at a constant 5,88 m·s⁻¹ for the full 2,9 s: Δy(balloon) = viΔt = 5,88(2,9) = 17,052 m above point A. The ball is 0,441 m above the ground at that moment. Distance apart = 17,052 − 0,441 = 16,611 m.",
    marking_notes: "Marking points: balloon's displacement calculated using Δy = viΔt with the full 2,9 s; correct substitution giving 17,052 m; ball's height (0,441 m from 3.5) subtracted from the balloon's height; final answer 16,611 m. NOTE: the supplied memo states 16,661 m here, but its own working (17,052 − 0,441) computes to 16,611 m — this is treated as a memo transcription slip and the independently-verified 16,611 m is used (see file header comment).",
    steps: [
      {
        marks: 1,
        description: "How far above point A has the balloon risen by t = 2,9 s?",
        options: ["17,052 m", "5,880 m", "16,611 m", "2,900 m"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do you find the distance between the ball and the balloon at this moment?",
        options: [
          "Subtract the ball's height above the ground (0,441 m) from the balloon's height above A",
          "Add the ball's height to the balloon's height",
          "Use only the balloon's height above A",
          "Use only the ball's maximum height",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the distance between the ball and the balloon?",
        options: ["16,611 m", "17,493 m", "17,052 m", "0,441 m"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 4: MOMENTUM AND IMPULSE (11 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "The average mass of a minibus taxi on South African roads is 1 500 kg. The law states that the combined mass of all the passengers in a minibus taxi and the taxi itself should not exceed 3500 kg. A minibus taxi with an unknown number of passengers travels at 25 m·s⁻¹ when it collides with a car with a mass of 1 200 kg (passengers included), travelling at 15 m·s⁻¹ in the opposite direction. During the collision the vehicles stick together and travel at 14 m·s⁻¹ immediately after the collision in the direction of the original motion of the taxi. State the law of conservation of momentum.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "The total linear momentum of an isolated system remains constant (is conserved).",
    marking_notes: "Must refer to total momentum of an isolated system being conserved.",
    marking_points: [{ marks: 2, description: "total linear momentum of an isolated system is conserved", keywords: ["linear momentum", "isolated system", "conserved"] }],
    image_url: `${IMG}/4-vehicles.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Ignore friction. Use momentum principles to determine whether the minibus taxi was overloaded, that is, above the legal combined mass of 3 500 kg.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Σpi = Σpf: taking the taxi's direction as positive, 25m1 + 1200(−15) = 14(m1 + 1200). Solving: 25m1 − 18000 = 14m1 + 16800 → 11m1 = 34800 → m1 = 3163,63 kg. Since 3163,63 kg < 3500 kg, the taxi was NOT overloaded.",
    marking_notes: "Marking points: principle Σpi = Σpf; correct equation set up with the taxi's mass as the unknown and signed velocities; m1 = 3163,63 kg solved; correct conclusion (not overloaded, since m1 < 3500 kg).",
    steps: [
      {
        marks: 1,
        description: "Which principle applies (vehicles stick together, ignore friction)?",
        options: ["Conservation of momentum: Σpi = Σpf", "Work-energy theorem", "Newton's second law only", "Conservation of kinetic energy"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "How do you set up the equation for the taxi's mass m1 (taxi's direction positive)?",
        options: [
          "25m1 + 1200(−15) = 14(m1 + 1200)",
          "25m1 − 1200(15) = 14(m1 − 1200)",
          "25m1 + 1200(15) = 14(m1 + 1200)",
          "25(m1 + 1200) = 14m1 + 15(1200)",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the mass of the loaded taxi, m1?",
        options: ["3163,63 kg", "3500,00 kg", "2571,43 kg", "4200,00 kg"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Was the taxi overloaded?",
        options: [
          "NO — m1 = 3163,63 kg, which is less than the legal 3500 kg",
          "YES — m1 = 3163,63 kg, which exceeds the legal 3500 kg",
          "Cannot be determined without knowing the number of passengers",
          "YES — because the taxi's speed (25 m·s⁻¹) exceeds the car's",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Calculate the impulse on the car.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "FΔt = m(vf − vi) = 1200(14 − (−15)) = 1200(29) = 34 800 N·s, to the right (in the direction of the taxi's original motion).",
    marking_notes: "Formula FΔt = m(vf − vi), correct substitution of the car's mass and signed velocities, correct final answer 34 800 N·s with direction.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the impulse on the car?",
        options: ["FΔt = m(vf − vi)", "FΔt = m(vi − vf)", "FΔt = ½m(vf² − vi²)", "FΔt = m·vf only"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What are vf and vi for the car (taxi's original direction positive)?",
        options: ["vf = 14 m·s⁻¹, vi = −15 m·s⁻¹", "vf = 14 m·s⁻¹, vi = 15 m·s⁻¹", "vf = −14 m·s⁻¹, vi = −15 m·s⁻¹", "vf = 29 m·s⁻¹, vi = 0 m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the impulse on the car?",
        options: ["34 800 N·s, to the right", "16 800 N·s, to the right", "34 800 N·s, to the left", "12 000 N·s, to the right"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (12 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A 5 kg block is released from rest from a vertical height of 5 m and slides down a frictionless incline to point P. It then moves along a frictionless horizontal portion PQ and finally moves up a second rough inclined plane, coming to a stop at point R, 3 m above the horizontal. The frictional force between the surface and the block is 18 N. State the law of conservation of mechanical energy.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The mechanical energy of a system in free fall (in the presence of only the gravitational force) is conserved (remains constant).",
    marking_notes: "Must refer to mechanical energy being conserved when only gravitational/conservative forces act (no friction).",
    marking_points: [{ marks: 2, description: "mechanical energy is conserved when only gravitational (conservative) forces act", keywords: ["mechanical energy", "conserved", "gravitational force"] }],
    image_url: `${IMG}/5-incline.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Using ENERGY PRINCIPLES only, calculate the speed of the block at point P.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "(mgh + ½mv²)top = (mgh + ½mv²)bottom: 5(9,8)(5) + ½(5)(0)² = 0 + ½(5)v², giving v = 9,9 m·s⁻¹.",
    marking_notes: "Conservation of mechanical energy equation, correct substitution, correct final answer 9,9 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies from the top of the first (frictionless) incline to point P?",
        options: [
          "Conservation of mechanical energy: (mgh + ½mv²)top = (mgh + ½mv²)P",
          "Non-conservative work-energy theorem: Wnc = ΔEk + ΔEp",
          "Conservation of momentum",
          "Work-energy theorem: W = ΔEk only",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the speed of the block at point P?",
        options: ["9,9 m·s⁻¹", "49,0 m·s⁻¹", "7,0 m·s⁻¹", "9,8 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Explain why the kinetic energy at point P is the same as that at point Q.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "No (frictional) forces act on the block along the horizontal portion PQ, so the net force on the block is zero (Fnet = 0) and, by Newton's First Law, it continues at constant velocity — meaning its kinetic energy does not change between P and Q.",
    marking_notes: "Must state that no friction/net force acts along PQ (constant velocity, per Newton's first law), so kinetic energy is unchanged.",
    marking_points: [{ marks: 2, description: "no friction/net force acts on PQ, so the block moves at constant velocity (Newton's first law) and Ek is unchanged", keywords: ["no friction", "net force", "constant velocity"] }],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Calculate the angle (θ) of the slope QR.",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnc = ΔEk + ΔEp: FfΔxcosθ = (½mvf² − ½mvi²) + (mghf − mghi). (18 × x × cos180°) = (½(5)(0² − 9,9²)) + (5)(9,8)(3 − 0), giving x = 5,44 m. Then sinθ = 3/5,44, so θ = 33,47°.",
    marking_notes: "Marking points: non-conservative work-energy formula; correct substitution of the friction work term; correct substitution of the kinetic and potential energy changes; distance x = 5,44 m solved; final angle θ = 33,47° found via sinθ = 3/x.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies from P/Q to R (friction present on QR, height changes)?",
        options: [
          "Non-conservative work-energy theorem: Wnc = ΔEk + ΔEp",
          "Conservation of mechanical energy",
          "Work-energy theorem (frictionless form): W = ΔEk",
          "Conservation of momentum",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Solving Wnc = ΔEk + ΔEp for the distance x along the incline QR, what is x?",
        options: ["5,44 m", "3,00 m", "9,90 m", "6,80 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Using sinθ = 3/x, what is the angle θ of slope QR?",
        options: ["33,47°", "56,53°", "28,07°", "45,00°"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: DOPPLER EFFECT (10 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "An ambulance is moving towards a stationary listener at a constant speed of 30 m·s⁻¹. The siren of the ambulance emits sound waves with a wavelength of 0,28 m. The speed of sound in air is 340 m·s⁻¹. State the Doppler effect in words.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler effect is the change in observed frequency (or pitch) of a sound (or wave) detected by a listener because the source and the listener have different velocities relative to the medium in which the wave travels.",
    marking_notes: "Must refer to a change in observed frequency due to the source and listener having different velocities relative to the medium — not merely 'moving relative to each other', and not describing how the sound 'appears' rather than the actual relative-velocity cause.",
    marking_points: [{ marks: 2, description: "change in observed frequency because source and listener have different velocities relative to the medium", keywords: ["change in frequency", "different velocities", "medium"] }],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Calculate the frequency of the sound waves emitted by the siren as heard by the ambulance driver.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "v = fλ: 340 = 0,28f, giving f = 1214,29 Hz. (The driver moves together with the source, so there is no relative motion between them — the driver hears the siren's actual emitted frequency.)",
    marking_notes: "Formula v = fλ, correct substitution, correct final answer 1214,29 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates wave speed, frequency and wavelength?",
        options: ["v = fλ", "v = f/λ", "v = f + λ", "f = v + λ"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What frequency does the ambulance driver hear (no relative motion between driver and source)?",
        options: ["1214,29 Hz", "95,20 Hz", "340,28 Hz", "1200,00 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Calculate the frequency of the sound waves emitted by the siren as heard by the (stationary) listener.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "FL = v/(v − vs) × fs = 340/(340 − 30) × 1214,29 = (340/310) × 1214,29 = 1331,79 Hz.",
    marking_notes: "Formula FL = v/(v − vs) × fs (source approaching a stationary listener), correct substitution, correct final answer 1331,79 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which Doppler formula applies (source approaching a stationary listener)?",
        options: ["FL = v/(v − vs) × fs", "FL = v/(v + vs) × fs", "FL = (v − vs)/v × fs", "FL = v/(v − vs)² × fs"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is (v − vs)?",
        options: ["310 m·s⁻¹", "370 m·s⁻¹", "340 m·s⁻¹", "30 m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What frequency does the stationary listener hear?",
        options: ["1331,79 Hz", "1214,29 Hz", "1102,63 Hz", "1244,74 Hz"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (15 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "A very small graphite-coated sphere P, carrying a charge of +0,5 μC, is suspended from a light, inextensible string. Another sphere, R, with a charge of −0,9 μC, supported on an insulated stand, is brought close to sphere P. As a result, sphere P moves to a position where it is 20 cm from sphere R. The system is in equilibrium and the angle between the string and the vertical is 7°. Draw a labelled free-body diagram showing ALL the forces acting on sphere P.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Three forces act on sphere P, all drawn from a single point: weight (mg) vertically down; tension (Fa, along the string) at 7° from the vertical; and the electrostatic force (attractive, since P is positive and R is negative) horizontal, toward R.",
    marking_notes: "One mark for all 3 forces correctly labelled and directed, one mark for the tension drawn at the correct angle, one mark for the electrostatic (attractive) force drawn horizontally toward R.",
    marking_points: [
      { marks: 1, description: "weight (mg) drawn vertically down", keywords: ["weight", "mg"] },
      { marks: 1, description: "tension (Fa/T) drawn along the string, at an angle to the vertical", keywords: ["tension", "fa"] },
      { marks: 1, description: "electrostatic force drawn horizontally, attractive (toward R)", keywords: ["electrostatic force", "attractive"] },
    ],
    image_url: `${IMG}/7-pendulum.png`,
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "State Coulomb's law in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The magnitude of the electrostatic force exerted by one point charge (Q1) on another point charge (Q2) is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance (r) between them.",
    marking_notes: "Must refer to directly proportional to the product of the charges and inversely proportional to the square of the distance.",
    marking_points: [{ marks: 2, description: "force directly proportional to the product of the charges and inversely proportional to the square of the distance", keywords: ["directly proportional", "inversely proportional", "square of the distance"] }],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Calculate the magnitude of the tension in the string.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = kQ1Q2/r² = (9×10⁹ × 5×10⁻⁷ × 9×10⁻⁷)/(0,2)² = 10,125 N. Then sin7° = 10,125/T, giving T = 83,08 N.",
    marking_notes: "Marking points: Coulomb's law formula; correct substitution giving F = 10,125 N; equation sin7° = F/T; final answer T = 83,08 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electrostatic force between P and R?",
        options: ["F = kQ1Q2/r²", "F = kQ1Q2/r", "E = kQ/r²", "F = Q1Q2/(4πε₀r)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the electrostatic force F between P and R?",
        options: ["10,125 N", "1,0125 N", "101,25 N", "0,10125 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Using sin7° = F/T, what is the tension T in the string?",
        options: ["83,08 N", "10,125 N", "1,234 N", "72,96 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "A charged sphere, A, carries a charge of −0,75 μC. Draw a diagram showing the electric field lines surrounding sphere A.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Field lines pointing radially INWARD toward the negative sphere A, evenly spaced, none touching or crossing.",
    marking_notes: "One mark for correct direction (radially inward, since the charge is negative), one mark for the field lines being radial (touching the sphere, not crossing).",
    marking_points: [
      { marks: 1, description: "field lines point inward, toward the negative charge", keywords: ["radially inward", "inward"] },
      { marks: 1, description: "field lines are radial, touching the sphere and not crossing", keywords: ["radial", "field lines"] },
    ],
    image_url: `${IMG}/7-sphereA-P.png`,
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Point P is located 9 cm to the right of sphere A. Calculate the magnitude of the net electric field at point P.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Enet = kQ/r² = (9×10⁹ × 0,75×10⁻⁶)/(0,09)² = 8,3×10⁵ N·C⁻¹, directed to the left (toward the negative sphere A, since a positive test charge at P would be attracted toward A).",
    marking_notes: "Formula E = kQ/r², correct substitution, correct final answer 8,3×10⁵ N·C⁻¹ (direction: to the left/toward A).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field at P due to sphere A?",
        options: ["E = kQ/r²", "F = kQ1Q2/r²", "E = kQ/r", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the net electric field at P?",
        options: ["8,3×10⁵ N·C⁻¹", "9,3×10⁴ N·C⁻¹", "8,3×10⁴ N·C⁻¹", "7,5×10⁵ N·C⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (25 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "Three resistors (7 Ω in series with a parallel combination of 3 Ω and an unknown resistor R, with a voltmeter across the parallel combination) are connected to a 24 V battery of negligible internal resistance, as shown. The battery supplies 60 W of power to the circuit. Calculate the reading on the ammeter.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = VI: 60 = 24I, giving I = 2,5 A.",
    marking_notes: "Formula P = VI, correct substitution, correct final answer 2,5 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the battery's power, voltage and total current?",
        options: ["P = VI", "P = I²R", "P = V²/R", "V = IR"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the ammeter reading (total current)?",
        options: ["2,5 A", "1440 A", "0,4 A", "36 A"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/8-circuit.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "State Ohm's law.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The ratio between voltage and current for a given resistor (conductor) is constant, at a constant temperature.",
    marking_notes: "Must refer to the ratio of voltage to current being constant at constant temperature.",
    marking_points: [{ marks: 2, description: "ratio of voltage to current is constant at constant temperature", keywords: ["ratio", "voltage", "current", "constant temperature"] }],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "Calculate the potential difference across the 7 Ω resistor.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V = IR = 2,5 × 7 = 17,5 V.",
    marking_notes: "Formula V = IR, correct substitution using the total current (2,5 A) and the 7 Ω resistor, correct final answer 17,5 V.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the potential difference across the 7 Ω resistor?",
        options: ["V = IR", "V = I/R", "V = I + R", "P = VI"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the potential difference across the 7 Ω resistor?",
        options: ["17,5 V", "6,5 V", "2,8 V", "24,0 V"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: "Calculate the voltmeter reading.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V(parallel combination) = 24 − 17,5 = 6,5 V.",
    marking_notes: "Correct application of Kirchhoff's voltage law (total emf minus the 7 Ω drop), correct final answer 6,5 V.",
    marking_points: [{ marks: 2, description: "voltmeter reads 24 − 17,5 = 6,5 V", keywords: ["6 5"] }],
  },
  {
    number: "8", sub_number: "8.1.5",
    text: "Calculate the value of resistor R.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "I(3Ω) = V/R = 6,5/3 = 2,17 A. IR = 2,5 − 2,17 = 0,33 A. R = V/I = 6,5/0,33 = 19,7 Ω.",
    marking_notes: "Marking points: current through the 3 Ω resistor found via I = V/R; current through R found by subtracting from the total current (parallel branches); R = V/I applied; final answer 19,7 Ω.",
    steps: [
      {
        marks: 1,
        description: "What is the current through the 3 Ω resistor?",
        options: ["2,17 A", "2,50 A", "3,00 A", "1,08 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the current through resistor R?",
        options: ["0,33 A", "2,17 A", "2,50 A", "4,67 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the value of resistor R?",
        options: ["19,7 Ω", "3,0 Ω", "6,5 Ω", "1,4 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "A set of students changed the external resistance of a circuit and recorded current and terminal potential difference readings: (0,15 A; 11,75 V), (0,35 A; 11,10 V), (0,75 A; 10,23 V), (1,15 A; 9,15 V). Plot a graph of terminal potential difference vs current using this data.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A straight-line graph of terminal potential difference (y-axis) vs current (x-axis), with all 4 points plotted accurately, a best-fit straight line drawn through them, and both axes correctly labelled with units.",
    marking_notes: "Marking points: axes correctly labelled (current on x-axis, terminal p.d. on y-axis, with units); all 4 points plotted accurately; a straight best-fit line drawn through the points; a sensible, evenly-spaced scale used. This is a hand-drawn graph task and cannot be automatically marked from typed text — check it against the memo's plotted graph yourself.",
    marking_points: [{ marks: 4, description: "graph correctly plotted: axes labelled, all 4 points accurate, straight best-fit line drawn", keywords: ["graph", "plotted", "straight line"] }],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Calculate the gradient of the graph. Show all steps.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "m = Δy/Δx = (9,15 − 11,75)/(1,15 − 0,15) = −2,6/1 = −2,6.",
    marking_notes: "Formula for gradient, correct substitution of two graph points, correct final answer −2,6 (V per A).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the gradient of the terminal p.d. vs current graph?",
        options: ["m = Δy/Δx", "m = Δx/Δy", "m = y-intercept/x-intercept", "m = y × x"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the gradient of the graph?",
        options: ["−2,6", "2,6", "−0,38", "−7,83"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "Use your answer in the previous question to determine the internal resistance of the battery.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Comparing V = −Ir + EMF to y = mx + c, the gradient equals −r, so r = −gradient = −(−2,6) = 2,6 Ω.",
    marking_notes: "Must state that internal resistance equals the negative of the gradient, and give the final value 2,6 Ω.",
    marking_points: [{ marks: 2, description: "internal resistance r = −gradient = 2,6 Ω", keywords: ["2 6"] }],
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "State the value of the emf of the battery.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "12 V (the y-intercept of the terminal p.d. vs current graph, i.e. the terminal p.d. when the current is zero).",
    marking_notes: "Accept only 12 V.",
    marking_points: [{ marks: 1, description: "12 V", keywords: ["12"] }],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (15 marks) ============
  // NOTE: no official memo answers exist for Question 9 in the supplied
  // 9-page memo (see file header). These are this ingestion's own
  // from-scratch worked solutions using the CAPS-standard formulae from the
  // paper's own data sheet and the values given in the question. 9.1.1 and
  // 9.3 are flagged low-confidence judgment calls — see header comment.

  {
    number: "9", sub_number: "9.1.1",
    text: "The diagram given is a schematic representation of an AC generator, with a coil rotating between N and S magnetic poles, connected via two rings to brushes and a galvanometer G. Write down the name of the part labelled 'R'.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Slip ring(s).",
    marking_notes: "Accept 'slip ring' or 'slip rings'. JUDGMENT CALL (no official memo exists for this question — see file header): 'R' is read as labelling the ring itself where it meets the brush; 'brushes' is a plausible alternative reading of the same diagram and should also be accepted if a student justifies it.",
    marking_points: [{ marks: 1, description: "slip ring(s)", keywords: ["slip ring"] }],
    image_url: `${IMG}/9-generator.png`,
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "Write down the function of the part labelled 'R'.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "It maintains electrical contact between the rotating coil (armature) and the external circuit, via the brushes, while allowing the coil to rotate freely.",
    marking_notes: "Must refer to maintaining electrical contact between the rotating coil and the external circuit.",
    marking_points: [{ marks: 2, description: "maintains electrical contact between the rotating coil and the external circuit", keywords: ["electrical contact", "external circuit"] }],
  },
  {
    number: "9", sub_number: "9.2",
    text: "State the principle on which an AC generator works.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Electromagnetic induction: a changing magnetic flux through a coil induces an emf in the coil.",
    marking_notes: "Must refer to electromagnetic induction.",
    marking_points: [{ marks: 1, description: "electromagnetic induction", keywords: ["electromagnetic induction"] }],
  },
  {
    number: "9", sub_number: "9.3",
    text: "If the armature is rotated in the direction indicated in the diagram, which way will the current flow in the armature? Choose from A to B or B to A.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "B to A (using the right-hand rule/generator rule for the direction of induced current, given the rotation direction shown and the N-left/S-right pole arrangement).",
    marking_notes: "LOW-CONFIDENCE JUDGMENT CALL (no official memo exists for this question — see file header): the current direction cannot be determined with full certainty from a static reproduction of the rotation arrow. Accept either 'A to B' or 'B to A' if the student's working correctly applies the right-hand rule to their own reading of the rotation direction shown.",
    marking_points: [{ marks: 1, description: "B to A", keywords: ["b to a"] }],
  },
  {
    number: "9", sub_number: "9.4",
    text: "What effect does changing the polarity of the magnets have on the output voltage? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same (swapping the magnets' polarity reverses the direction/polarity of the induced current and emf, but does not change its magnitude).",
    marking_notes: "Accept only 'remains the same'.",
    marking_points: [{ marks: 1, description: "remains the same", keywords: ["remains the same"] }],
  },
  {
    number: "9", sub_number: "9.5",
    text: "What is the position of the coil, relative to the magnetic field, when the output voltage is at a minimum?",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "When the plane of the coil is perpendicular to the magnetic field (the coil sides are momentarily moving parallel to the field lines, so they are not cutting any field lines and the rate of change of flux, and hence the induced emf, is zero).",
    marking_notes: "Must refer to the plane of the coil being perpendicular to the magnetic field (equivalently, the coil sides moving parallel to the field).",
    marking_points: [{ marks: 2, description: "plane of the coil is perpendicular to the magnetic field", keywords: ["perpendicular", "magnetic field"] }],
  },
  {
    number: "9", sub_number: "9.6.1",
    text: "The graph shows the potential delivered by an AC source to a light bulb dissipating 15 W, with a peak emf of 17 V. What DC voltage would have to be supplied to keep the bulb burning at the same brightness?",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "The equivalent DC voltage for the same power dissipation is the rms voltage: Vrms = Vmax/√2 = 17/√2 = 12,02 V.",
    marking_notes: "Formula Vrms = Vmax/√2, correct substitution, correct final answer 12,02 V.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the DC-equivalent voltage for the same brightness (same power)?",
        options: ["Vrms = Vmax/√2", "Vrms = Vmax × √2", "Vrms = Vmax/2", "Vrms = Vmax²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What DC voltage is needed?",
        options: ["12,02 V", "17,00 V", "24,04 V", "8,50 V"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.6.2",
    text: "What is the peak current through the bulb while it is connected to the AC source?",
    marks: 4, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "R = Vrms²/P = 12,02²/15 = 9,63 Ω. Then Imax = Vmax/R = 17/9,63 = 1,77 A.",
    marking_notes: "Marking points: formula Pave = Vrms²/R used to find the bulb's resistance; correct value R = 9,63 Ω; formula Imax = Vmax/R; correct final answer 1,77 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula finds the bulb's resistance from its power and rms voltage?",
        options: ["R = Vrms²/P", "R = P/Vrms", "R = Vmax²/P", "R = P × Vrms"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the bulb's resistance R?",
        options: ["9,63 Ω", "14,45 Ω", "1,18 Ω", "19,27 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the peak current through the bulb?",
        options: ["1,77 A", "1,25 A", "0,88 A", "2,50 A"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-voltage-graph.png`,
  },

  // ============ QUESTION 10: PHOTOELECTRIC EFFECT (10 marks) ============
  // NOTE: as with Question 9, no official memo answers exist for Question
  // 10 in the supplied memo (see file header). These are this ingestion's
  // own worked solutions using the standard photoelectric equation and the
  // data given in the question paper.

  {
    number: "10", sub_number: "10.1",
    text: "The diagram shows an experiment where red light and UV light are shone onto a negatively charged plate of zinc metal. When red light is shone onto the negatively charged zinc plate the milliammeter reads 0 mA. When UV light is shone on the same plate, electrons are emitted and a reading is seen on the milliammeter. Name the phenomenon described above.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The photoelectric effect.",
    marking_notes: "Accept only 'photoelectric effect'.",
    marking_points: [{ marks: 1, description: "photoelectric effect", keywords: ["photoelectric effect"] }],
    image_url: `${IMG}/10-photoelectric.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "What is the significance of this effect?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "It provided evidence for the particle (quantum) nature of light.",
    marking_notes: "Must refer to evidence for the particle/quantum nature of light.",
    marking_points: [{ marks: 1, description: "evidence for the particle/quantum nature of light", keywords: ["particle nature", "quantum nature"] }],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Explain why red light has no effect but the UV light causes electrons to be emitted.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Red light has a frequency below the threshold frequency of zinc, so each red-light photon has less energy than the work function of zinc and cannot eject an electron. UV light has a higher frequency, above the threshold frequency, so each UV photon has enough energy (greater than the work function) to eject an electron.",
    marking_notes: "Must state that red light's frequency (photon energy) is below the threshold frequency/work function, and that UV light's frequency (photon energy) exceeds it.",
    marking_points: [
      { marks: 1, description: "red light's frequency/photon energy is below the threshold frequency/work function of zinc", keywords: ["below", "threshold frequency", "work function"] },
      { marks: 1, description: "UV light's frequency/photon energy exceeds the threshold frequency/work function of zinc", keywords: ["exceeds", "threshold frequency", "work function"] },
    ],
  },
  {
    number: "10", sub_number: "10.4",
    text: "The work function of zinc is 6,928 × 10⁻¹⁹ J. Calculate the kinetic energy of an electron ejected from the zinc metal by a photon of wavelength 100 nm.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = hc/λ = (6,63×10⁻³⁴ × 3,0×10⁸)/(100×10⁻⁹) = 1,989×10⁻¹⁸ J. Ek = E − W₀ = 1,989×10⁻¹⁸ − 6,928×10⁻¹⁹ = 1,30×10⁻¹⁸ J.",
    marking_notes: "Marking points: formula E = hc/λ; correct value for the photon's energy; formula Ek = E − W₀; correct final answer 1,30×10⁻¹⁸ J.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the energy of a photon of wavelength λ?",
        options: ["E = hc/λ", "E = h/λ", "E = hλ/c", "E = hf² "],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the energy of a 100 nm photon?",
        options: ["1,989×10⁻¹⁸ J", "1,989×10⁻²⁵ J", "6,63×10⁻¹⁹ J", "1,989×10⁻¹⁹ J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula gives the kinetic energy of the ejected electron?",
        options: ["Ek = E − W₀", "Ek = E + W₀", "Ek = W₀ − E", "Ek = E × W₀"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the kinetic energy of the ejected electron?",
        options: ["1,30×10⁻¹⁸ J", "2,68×10⁻¹⁸ J", "6,93×10⁻¹⁹ J", "1,99×10⁻¹⁸ J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.5",
    text: "The intensity of both lights (red and UV) is increased. For each experiment, state what would happen to the reading on the milliammeter. State only INCREASE, DECREASE or REMAIN THE SAME.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Red light: remains the same (still 0 mA) — the frequency is still below the threshold frequency of zinc, so no electrons are emitted regardless of intensity. UV light: increases — more photons per second strike the plate, ejecting more photoelectrons per second, increasing the current.",
    marking_notes: "Must state 'remains the same' for red light and 'increase' for UV light, one mark each.",
    marking_points: [
      { marks: 1, description: "red light: milliammeter reading remains the same (still 0 mA)", keywords: ["remains the same"] },
      { marks: 1, description: "UV light: milliammeter reading increases", keywords: ["increase"] },
    ],
  },
];

// No exam_schedule entries here — Physical Sciences exam dates aren't
// modelled in this ingestion; a future pilot dataset can carry them the way
// geography-p1-pilot does for Geography.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
