// Real DBE past paper: Physical Sciences (Physics) P1, November 2020, National
// (English).
// Source: single combined PDF (question paper + marking guideline) fetched
// from stanmorephysics.com. QP is pages 1-16 (cover + instructions + Q1-Q10 +
// 3 data sheets), memo is pages 20-38 (cover page 20, content pages 21-38).
// Page-by-page cross-check of question numbers/marks against the memo's
// answers found no stray or mismatched pages.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here. Despite 2020 being the COVID-disrupted
// exam year, this paper's structure, mark allocation and topic coverage are
// consistent with a normal-year DBE Physics P1 (all nine CAPS topics below
// are examined) — no visible trimming versus the 2024/2025 papers already in
// this dataset.
//
// This paper reuses every topic already defined by the Nov 2025 P1 dataset
// (scripts/seed-data/physical-sciences-p1-nov2025.ts) — no new CAPS topic
// appears in this paper that wasn't already covered by that one, so the
// `topics` array below is identical to that file's (topics are upserted by
// key in scripts/seed.ts, so redeclaring them here is safe and required
// since this file is a standalone dataset).
//
// Two MCQ sub-questions touch content that isn't a separately-named topic in
// the canonical nine-topic list, so they're mapped to the closest-fitting
// existing topic rather than inventing a new key: Q1.2 (comparing
// gravitational acceleration between two planets, i.e. Newton's law of
// universal gravitation) is filed under "newtons-laws"; Q1.7 (charge
// sharing/conservation when two identical charged spheres touch) is filed
// under "electrostatics". Both fit comfortably within those topics' existing
// CAPS scope.
//
// Diagrams (the circuit diagrams, the DC motor, the position-time graph, the
// Ek-vs-f graph, the charge-line diagrams, the roller-coaster track, the
// block-pulley setup) are vector line drawings rendered directly into the
// page content stream, not separate embedded raster images, so they were
// cropped from full-page renders rather than extracted as clean standalone
// images. The site's watermark ("Stanmorephysics.com" + a faint
// succulent-plant photo) does not appear on any of the cropped images used
// here. Purely decorative/redundant diagrams were skipped: Q1.4's table is
// transcribed directly into the question text; Q1.7's simple two-sphere
// sketch and Q4's before/after collision sketch add nothing beyond what the
// question text already states (directions, speeds, masses); Q6's
// frequency-time graph's only load-bearing values (3 148 Hz, 2 073 Hz) are
// already given in the question text.
//
// Calculation questions (2.3, 3.2.1-3.2.4, 4.2.1, 4.2.2, 5.2, 5.3, 5.4, 6.3,
// 6.4, 7.1, 7.2, 7.4, 7.6, 8.3.1, 8.3.2, 8.3.3, 9.2.2, 9.2.3, 10.5.1, 10.5.2)
// use `steps` instead of `marking_points`: the student works the problem out
// on paper as normal, then picks the option they got for each mark-earning
// step (formula, intermediate value, final answer) from a few choices,
// rather than typing anything. Distractors are chosen to trap specific real
// errors (wrong formula, sign flip, wrong given value, missing a term,
// forgetting unit conversion), not just arbitrary wrong numbers. Straight
// multiple-choice questions (Q1.1-Q1.10, each already MCQ in the source
// paper) use `marking_points` with a single point keyed on the correct
// letter, matching the exact convention used in
// physical-sciences-p1-nov2024.ts.
//
// No FLAG-for-review items were needed for this paper: every memo answer
// transcribed here is unambiguous, and no source page was cut off or
// illegible in a way that required reconstruction.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2020-p1";

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
  year: 2020,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2021/06/Physical-Science-Grade-12-Nov-2020-P1-and-Memo.pdf" as string | null,
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
    text: "The rate of change of momentum of an object is equal to the … (A) impulse on the object. (B) net force acting on the object. (C) product of the object's mass and its change in velocity. (D) product of the net force acting on the object and its acceleration.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "B — the net force acting on the object (Newton's second law in momentum form: Fnet = Δp/Δt).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The gravitational acceleration on the surface of planet X with mass M and radius r is g. The gravitational acceleration on the surface of planet Y with mass 2M and radius ½r is … (A) ½g (B) g (C) 4g (D) 8g",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "D — 8g. Using g = GM/r²: g' = G(2M)/(½r)² = G(2M)/(¼r²) = 8(GM/r²) = 8g.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "The graph below shows how one of the physical quantities associated with an object in free fall changes with time t (a horizontal, non-zero line). The label on the y-axis is omitted. Ignore air friction. Which ONE of the following physical quantities can be the label on the y-axis? (A) Velocity (B) Position (C) Weight (D) Momentum",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "C — Weight. During free fall (ignoring air friction) the object's weight (mg) stays constant, giving a horizontal line; velocity, position and momentum all change continuously.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "A ball of mass m, falling vertically downwards, hits the floor at a speed v and bounces vertically upwards at a speed 0,75v. Which ONE of the following combinations regarding the change in momentum of the ball during the collision is CORRECT? (A) 0,25mv Upwards (B) 0,25mv Downwards (C) 1,75mv Upwards (D) 1,75mv Downwards",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "C — 1,75mv Upwards. Taking downward as positive: pi = mv, pf = −0,75mv, so Δp = pf − pi = −1,75mv, i.e. magnitude 1,75mv directed upward.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "The base SI unit of the physical quantity 'work' is … (A) kg·m·s⁻¹ (B) kg·m²·s² (C) kg·m²·s⁻² (D) kg·m·s⁻²",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "C — kg·m²·s⁻² (the joule, in base SI units).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "The siren of a police car, moving in front of a truck, emits sound waves of frequency f. Both vehicles are travelling at the same constant velocity. The frequency of the sound heard by the driver of the truck is … (A) f. (B) zero. (C) greater than f. (D) smaller than f.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A — f. Since both vehicles travel at the same velocity, there is no relative motion between the source and the observer, so no Doppler shift occurs.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two identical metal spheres, P and R, on insulated stands, carry different charges. The spheres are brought into contact and then separated again. If the charge on sphere R AFTER the separation is q, the charge on sphere P after the separation is … (A) q. (B) zero. (C) less than q. (D) greater than q.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "A — q. When two identical conducting spheres touch, the total charge redistributes equally between them (conservation of charge), so each ends up with the same charge q.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "An AC generator generates a current with a frequency of 50 Hz. The number of times that the maximum (peak) current is produced in one second is … (A) 25. (B) 50. (C) 75. (D) 100.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "D — 100. The peak current occurs twice per cycle (once in each direction), so at 50 cycles per second the peak is reached 2 × 50 = 100 times per second.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.9",
    text: "In the circuit below, the battery has an internal resistance r and an emf ε. A variable resistor R is connected in the circuit and the ammeter and voltmeter register readings. The resistance of the variable resistor R is INCREASED. Which ONE of the following combinations is the CORRECT representation of the change in the readings on the ammeter and voltmeter as the resistance of R is increased? (A) Ammeter: Decreases, Voltmeter: Increases (B) Ammeter: Increases, Voltmeter: Increases (C) Ammeter: Increases, Voltmeter: Decreases (D) Ammeter: Decreases, Voltmeter: Decreases",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A — Ammeter decreases, Voltmeter increases. Increasing R increases the total resistance, so the current (ammeter reading) decreases; with less current there is a smaller voltage drop across the internal resistance, so the terminal voltage across R (voltmeter reading) increases.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.9-circuit.png`,
  },
  {
    number: "1", sub_number: "1.10",
    text: "The sodium cathode of a photocell is irradiated with ultraviolet light, as shown in the diagram below. The ammeter registers a current. Which ONE of the following changes will INCREASE the ammeter reading? (A) Use a thinner sodium cathode. (B) Increase the intensity of the ultraviolet light. (C) Increase the frequency of the ultraviolet light. (D) Replace the sodium cathode with a cathode of lower work function.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "B — Increase the intensity of the ultraviolet light. More intensity means more photons per second striking the cathode, ejecting more electrons per second (a larger current), provided the frequency is already above the threshold frequency.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.10-photocell.png`,
  },

  // ============ QUESTION 2: NEWTON'S LAWS (16 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "A 20 kg block, resting on a rough horizontal surface, is connected to blocks P and Q (glued together, combined mass m) by a light inextensible string over a frictionless pulley. A force of 35 N is applied to the 20 kg block at 40° to the horizontal, as shown in the diagram. The 20 kg block experiences a frictional force of 5 N as it moves to the RIGHT at CONSTANT SPEED. Define the term normal force.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "The perpendicular force exerted by a surface on an object in contact with the surface.",
    marking_notes: "Must refer to the perpendicular force exerted by a surface on an object in contact with it.",
    marking_points: [{ marks: 2, description: "perpendicular force exerted by a surface on an object in contact with the surface", keywords: ["perpendicular force", "surface", "in contact"] }],
    image_url: `${IMG}/2-block-pulley.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram of the 20 kg block.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Five forces act on the 20 kg block, all drawn from a single point: the normal force N upward, the weight w downward, friction f horizontal (opposing motion, to the left), the tension T horizontal (to the right, towards the pulley), and the applied force Fapplied at 40° above the horizontal (up and to the left).",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: N (up), w (down), f (opposing motion), T (towards the pulley), Fapplied (at 40° to the horizontal, as shown in the diagram). Max 5.",
    marking_points: [
      { marks: 1, description: "normal force N drawn vertically upward", keywords: ["normal force", "fn"] },
      { marks: 1, description: "weight w (Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "friction f drawn horizontally opposing the block's motion", keywords: ["friction", "fk"] },
      { marks: 1, description: "tension T (or FT) drawn horizontally towards the pulley", keywords: ["tension", "ft"] },
      { marks: 1, description: "applied force Fapplied drawn at 40° to the horizontal, as shown in the diagram", keywords: ["applied force", "40"] },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Calculate the combined mass m of the two blocks P and Q.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For the 20 kg block (constant speed, so a = 0): Fnet = ma, T − f − Fcos40° = ma, T − 5 − 35cos40° = 0, giving T = 31,81 N. For the combined mass m (also at constant speed, a = 0): mg − T = ma, so mg − 31,81 = 0, giving m = 31,81/9,8 = 3,25 kg.",
    marking_notes: "Marking points: correct equation of motion for the 20 kg block (T − f − Fcos40° = ma); correct value of T (31,81 N); correct equation of motion for the combined mass (mg − T = ma); correct final answer m = 3,25 kg.",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to the 20 kg block (constant speed, applied force F at 40° opposing the horizontal motion)?",
        options: [
          "T − f − Fcos40° = ma",
          "T − f − Fsin40° = ma",
          "T + f − Fcos40° = ma",
          "T − f − Fcos40° = mg",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is T, the tension in the string (using a = 0)?",
        options: ["31,81 N", "26,81 N", "36,81 N", "21,81 N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation of motion applies to the combined mass m (also moving at constant speed)?",
        options: ["mg − T = ma", "T − mg = ma", "mg + T = ma", "mg = T·a"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is m, the combined mass of blocks P and Q?",
        options: ["3,25 kg", "3,57 kg", "2,74 kg", "31,81 kg"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "At a certain stage of the motion, block Q breaks off and falls down. How will the tension in the string be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "Decreases.",
    marking_notes: "Accept only 'decreases'.",
    marking_points: [{ marks: 1, description: "decreases", keywords: ["decreases"] }],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "How will the velocity of the 20 kg block (still moving to the right) be affected when block Q breaks off and falls down? Explain the answer.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Evaluation",
    model_answer: "The velocity decreases. As the tension force decreases (block P alone now hangs, a smaller weight pulling the system), the net force on the 20 kg block acts in the opposite direction to its motion (to the left), so the block decelerates.",
    marking_notes: "Must state 'decreases' and explain that, as the tension decreases, the net force/acceleration acts in the direction opposite to the block's motion.",
    marking_points: [
      { marks: 1, description: "velocity decreases", keywords: ["decreases"] },
      { marks: 2, description: "as the tension force decreases, the net force/acceleration acts in the opposite direction to the motion (to the left)", keywords: ["net force", "opposite direction", "decreas"] },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (15 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A small ball is dropped from a height of 2 m and bounces a few times after landing on a cement floor. Ignore air friction. The position-time graph (not drawn to scale) shows the motion. Define the term free fall.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Motion in which the only force acting on the object is gravity (weight).",
    marking_notes: "Must refer to motion under the influence of gravity (weight) only, or motion in which the only force acting on the object is gravity.",
    marking_points: [{ marks: 2, description: "motion under the influence of gravity (weight) only", keywords: ["gravity", "only force", "weight"] }],
    image_url: `${IMG}/3-position-time-graph.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Use the position-time graph to determine the time that the ball is in contact with the floor before the first bounce (the ball reaches the floor at 0,64 s and leaves it again at 0,67 s).",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "Δt = 0,67 − 0,64 = 0,03 s.",
    marking_notes: "Correct final answer 0,03 s (reading the two times directly off the graph and subtracting).",
    steps: [
      {
        marks: 2,
        description: "What is the time the ball is in contact with the floor before the first bounce (reading the graph: contact from 0,64 s to 0,67 s)?",
        options: ["0,03 s", "0,64 s", "0,67 s", "1,31 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Use the position-time graph to determine the time it takes the ball to reach its maximum height after the first bounce (the ball leaves the floor at 0,67 s and returns to the floor at 1,90 s).",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "By symmetry of the parabola, the time to reach maximum height is half the total time in the air: Δt = (1,90 − 0,67)/2 = 0,62 s.",
    marking_notes: "Correct final answer 0,62 s (0,615 s), found by halving the time between leaving and returning to the floor.",
    steps: [
      {
        marks: 2,
        description: "What is the time taken to reach maximum height after the first bounce (using the symmetry of the parabola between 0,67 s and 1,90 s)?",
        options: ["0,62 s", "1,23 s", "0,67 s", "1,90 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "Use the position-time graph to determine the speed at which the ball leaves the floor at the first bounce (the ball rises to a maximum height of 1,85 m after the first bounce).",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf² = vi² + 2aΔy with vf = 0 at the top: 0 = vi² + 2(−9,8)(1,85), giving vi = 6,02 m·s⁻¹.",
    marking_notes: "Marking points: correct formula (vf² = vi² + 2aΔy, with vf = 0 at the top); correct final answer 6,02 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which formula/approach finds the speed the ball leaves the floor (using the maximum height of 1,85 m reached after the first bounce)?",
        options: [
          "vf² = vi² + 2aΔy (with vf = 0 at the top)",
          "vf = vi + aΔt",
          "Δy = viΔt",
          "F = ma",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the speed at which the ball leaves the floor at the first bounce?",
        options: ["6,02 m·s⁻¹", "6,08 m·s⁻¹", "1,85 m·s⁻¹", "9,80 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.4",
    text: "The ball bounces a second time, leaving the floor at 1,97 s and rising to a maximum height of 1,2 m before landing again at time t, as shown on the graph. Use the position-time graph and calculate time t.",
    marks: 6, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "First find the speed leaving the floor at the second bounce: vf² = vi² + 2aΔy, 0 = vi² + 2(−9,8)(1,2), giving vi = 4,85 m·s⁻¹. By symmetry, the total time in the air is Δt = 2vi/g = 2(4,85)/9,8 = 0,99 s. So t = 1,97 + 0,99 = 2,96 s (accept 2,95-2,97 s).",
    marking_notes: "Marking points: correct formula to find vi (vf² = vi² + 2aΔy, vf = 0 at top); correct value vi = 4,85 m·s⁻¹; correct approach for the total flight time (Δt = 2vi/g, by symmetry); correct final answer t = 2,96 s (accept 2,95-2,97 s).",
    steps: [
      {
        marks: 1,
        description: "Which formula finds the initial (upward) speed of the ball as it leaves the floor at the second bounce (max height 1,2 m)?",
        options: [
          "vf² = vi² + 2aΔy (with vf = 0 at the top)",
          "vf = vi + aΔt",
          "Δy = viΔt",
          "p = mv",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is vi, the speed the ball leaves the floor at the second bounce?",
        options: ["4,85 m·s⁻¹", "4,90 m·s⁻¹", "1,20 m·s⁻¹", "6,02 m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total flight time from the second bounce (at 1,97 s) until the ball lands again (using Δt = 2vi/g, by symmetry)?",
        options: ["0,99 s", "0,49 s", "1,20 s", "4,85 s"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is t?",
        options: ["2,96 s", "1,97 s", "0,99 s", "3,17 s"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 4: MOMENTUM AND IMPULSE (10 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Ball P of mass 0,16 kg, moving east at 10 m·s⁻¹, collides head-on with ball Q of mass 0,2 kg, moving west at 15 m·s⁻¹. After the collision, ball P moves west at 5 m·s⁻¹. Ignore the effects of friction and the rotational effects of the balls. Define the term momentum in words.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "(Linear) momentum of an object is the product of its mass and velocity.",
    marking_notes: "Must refer to momentum being the product of mass and velocity.",
    marking_points: [{ marks: 2, description: "product of mass and velocity", keywords: ["product of mass", "velocity"] }],
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Calculate the velocity of ball Q after the collision.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Taking east as positive, using conservation of momentum: Σpi = Σpf. mPvPi + mQvQi = mPvPf + mQvQf: (0,16)(10) + (0,2)(−15) = (0,16)(−5) + (0,2)vQf, so −1,4 = −0,8 + 0,2vQf, giving vQf = −3 m·s⁻¹, i.e. 3 m·s⁻¹ west.",
    marking_notes: "Marking points: correct principle (conservation of momentum, Σpi = Σpf); correct total initial momentum of the system; correct final answer 3 m·s⁻¹ west.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies to find the velocity of ball Q after the collision?",
        options: [
          "Conservation of momentum: Σpi = Σpf",
          "Conservation of kinetic energy",
          "Newton's second law: Fnet = ma",
          "Impulse-momentum theorem applied to ball Q alone",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Taking east as positive, what is the total initial momentum of the system (ball P + ball Q)?",
        options: ["−1,4 kg·m·s⁻¹", "1,4 kg·m·s⁻¹", "−4,6 kg·m·s⁻¹", "−0,2 kg·m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the velocity of ball Q after the collision?",
        options: ["3 m·s⁻¹ west", "3 m·s⁻¹ east", "7 m·s⁻¹ west", "1,5 m·s⁻¹ west"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Calculate the magnitude of the impulse on ball P during the collision.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Impulse = Δp = m(vPf − vPi) = 0,16[(−5) − 10] = 0,16(−15) = −2,4 N·s, so the magnitude is 2,4 N·s.",
    marking_notes: "Marking points: correct formula (Impulse = Δp = m(vf − vi)); correct final answer 2,4 N·s.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the impulse on ball P during the collision?",
        options: ["Impulse = Δp = m(vPf − vPi)", "Impulse = ½m(vPf² − vPi²)", "Impulse = m/v", "Impulse = FΔx"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the impulse on ball P?",
        options: ["2,4 N·s", "1,2 N·s", "4,8 N·s", "0,8 N·s"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (14 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A roller-coaster car of mass 200 kg, with the engine switched off, travels along track ABC which has a rough surface. At point A (10 m above the ground) the speed is 4 m·s⁻¹; at point B (height h above the ground) the speed is 2 m·s⁻¹. During the motion from A to B, 3,40 × 10³ J of energy is used to overcome friction. Ignore rotational effects due to the wheels. Define the term non-conservative force.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "A force is non-conservative if the work it does on an object (moving between two points) depends on the path taken.",
    marking_notes: "Must refer to the work done depending on the path taken (or equivalently, the work done around a closed path being non-zero).",
    marking_points: [{ marks: 2, description: "work done by the force depends on the path taken", keywords: ["work it does", "depends on the path"] }],
    image_url: `${IMG}/5-rollercoaster.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Calculate the change in the kinetic energy of the car after it has travelled from point A to point B.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "ΔK = ½m(vf² − vi²) = ½(200)(2² − 4²) = −1 200 J.",
    marking_notes: "Marking points: correct formula (ΔK = ½m(vf² − vi²)); correct final answer −1 200 J.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the change in kinetic energy of the car from A to B?",
        options: ["ΔK = ½m(vf² − vi²)", "ΔK = m(vf − vi)", "ΔK = mgΔh", "ΔK = ½mv²Δt"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the change in kinetic energy of the car from A to B?",
        options: ["−1 200 J", "1 200 J", "−2 400 J", "−600 J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Use energy principles to calculate the height h.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnc = ΔK + ΔU: −3,40×10³ = −1 200 + 200(9,8)(h − 10), giving h = 8,88 m.",
    marking_notes: "Marking points: correct formula (Wnc = ΔK + ΔU); correct substitution together with −3,40×10³ J; correct final answer h = 8,88 m.",
    steps: [
      {
        marks: 1,
        description: "Which energy principle applies, given the energy used to overcome friction from A to B?",
        options: ["Wnc = ΔK + ΔU", "Wnet = ΔK only", "Conservation of momentum", "P = Fv"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is h, the height of point B above the ground?",
        options: ["8,88 m", "9,88 m", "11,12 m", "1,12 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "On reaching point B, the car's engine is switched on to move up the incline to point C (22 m above the ground). While moving from B to C, the car travels for 15 s at a constant speed of 2 m·s⁻¹, while an average frictional force of 50 N acts on it. Calculate the power delivered by the engine to move the car from point B to point C.",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Wnc = ΔK + ΔU: Wengine + Wf = 0 + mg(hC − hB) (ΔK = 0 at constant speed). Wf = (50)(30)cos180° = −1 500 J (distance travelled up the incline, at 2 m·s⁻¹ for 15 s, is 30 m). So Wengine − 1 500 = 200(9,8)(22 − 8,88), giving Wengine = 27 215,20 J. P = Wengine/Δt = 27 215,20/15 = 1 814,35 W.",
    marking_notes: "Marking points: correct principle (Wnc = ΔEk + ΔEp, with Wengine and Wfriction as the non-conservative work terms); correct work done by friction (−1 500 J, using the 30 m distance travelled at constant 2 m·s⁻¹ for 15 s); correct value of Wengine (27 215,20 J); correct final answer P = 1 814,35 W.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies to find the work done by the engine from B to C (constant speed, so ΔK = 0)?",
        options: [
          "Wnc = ΔEk + ΔEp (Wengine + Wfriction = ΔEk + ΔEp)",
          "Wnet = ΔEk only",
          "Conservation of momentum",
          "Fnet = ma directly",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the work done by friction from B to C (distance travelled = 2 m·s⁻¹ × 15 s = 30 m, friction 50 N opposing motion)?",
        options: ["−1 500 J", "1 500 J", "−750 J", "−50 J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the work done by the engine, Wengine?",
        options: ["27 215,20 J", "25 715,20 J", "28 715,20 J", "1 500 J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the power delivered by the engine (P = Wengine/Δt, Δt = 15 s)?",
        options: ["1 814,35 W", "1 500,00 W", "907,17 W", "2 721,52 W"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (11 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "The siren of a train, moving at a constant speed along a straight horizontal track, emits sound with a constant frequency. A detector, placed next to the track, records the frequency of the sound waves — the results are shown in a frequency-time graph (frequency drops from 3 148 Hz to 2 073 Hz at time t1). State the Doppler effect in words.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The (apparent) change in frequency (or pitch) of the sound detected by a listener because the source and the listener have different velocities relative to the medium of propagation.",
    marking_notes: "Must refer to the change in frequency (or pitch) detected, as a result of the relative motion between a source and a listener/observer.",
    marking_points: [{ marks: 2, description: "change in frequency (pitch) detected due to relative motion between source and listener", keywords: ["change in frequency", "relative motion"] }],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Does the detector record the frequency of 3 148 Hz when the train moves TOWARDS the detector or AWAY from the detector?",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Towards the detector.",
    marking_notes: "Accept only 'towards'.",
    marking_points: [{ marks: 1, description: "towards", keywords: ["towards"] }],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Calculate the speed of the train. Take the speed of sound in air as 340 m·s⁻¹.",
    marks: 6, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Approaching: fL = v/(v − vs) · fs, so 3148 = [340/(340 − vs)]fs. Receding: fL = v/(v + vs) · fs, so 2073 = [340/(340 + vs)]fs. Dividing to eliminate fs: 3148(340 − vs) = 2073(340 + vs), which solves to vs = 70 m·s⁻¹ (accept 69,95-70,16 m·s⁻¹).",
    marking_notes: "Marking points: correct pair of Doppler formulas (approaching and receding, stationary detector); correct combined equation eliminating fs; correct final answer vs = 70 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which pair of Doppler formulas applies, for the train approaching then receding from the stationary detector?",
        options: [
          "fL = v/(v−vs)·fs (approaching) and fL = v/(v+vs)·fs (receding)",
          "fL = v/(v+vs)·fs (approaching) and fL = v/(v−vs)·fs (receding)",
          "fL = (v−vs)/v·fs for both",
          "fL = v·vs·fs for both",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation results when the two expressions are combined to eliminate fs?",
        options: [
          "3148(340 − vs) = 2073(340 + vs)",
          "3148(340 + vs) = 2073(340 − vs)",
          "3148vs = 2073vs",
          "3148/vs = 2073/vs",
        ],
        correctIndex: 0,
      },
      {
        marks: 4,
        description: "What is the speed of the train, vs?",
        options: ["70 m·s⁻¹", "35 m·s⁻¹", "140 m·s⁻¹", "17,5 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "The detector started recording the frequency of the moving train's siren when the train was 350 m away. Calculate time t1 indicated on the graph (the time at which the recorded frequency drops from 3 148 Hz to 2 073 Hz).",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Δt = Δx/v = 350/70 = 5 s.",
    marking_notes: "Marking points: correct formula (Δt = Δx/v, using the train's speed found in 6.3); correct final answer 5 s.",
    steps: [
      {
        marks: 2,
        description: "What is t1 (using Δt = Δx/v with Δx = 350 m and the train's speed of 70 m·s⁻¹ from 6.3)?",
        options: ["5 s", "2,5 s", "10 s", "50 s"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (17 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "Two small charged spheres, A and B, are placed on insulated stands, 0,2 m apart. They carry charges of −4 × 10⁻⁶ C and +3 × 10⁻⁶ C respectively. Calculate the number of electrons in excess on sphere A.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "n = Q/e = (4×10⁻⁶)/(1,6×10⁻¹⁹) = 2,5×10¹³ electrons.",
    marking_notes: "Marking points: correct formula (n = Q/e); correct final answer 2,5×10¹³.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the number of excess electrons on sphere A?",
        options: ["n = Q/e", "n = Q×e", "n = e/Q", "n = Q/k"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the number of excess electrons on sphere A?",
        options: ["2,5×10¹³", "2,5×10¹²", "4,0×10¹³", "1,6×10¹³"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-AB.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Calculate the magnitude of the electrostatic force exerted by sphere A on sphere B.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = kQ1Q2/r² = (9×10⁹)(4×10⁻⁶)(3×10⁻⁶)/(0,2)² = 2,7 N.",
    marking_notes: "Marking points: correct formula (F = kQ1Q2/r²); correct final answer 2,7 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electrostatic force between two point charges?",
        options: ["F = kQ1Q2/r²", "F = kQ1Q2/r", "F = kQ/r²", "F = Q1Q2/kr²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the force exerted by sphere A on sphere B?",
        options: ["2,7 N", "5,4 N", "1,35 N", "0,27 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Describe the term electric field.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "An electric field is a region (in space) in which an (electric) charge experiences a (electric) force.",
    marking_notes: "Must refer to a region in space where a charge experiences a force.",
    marking_points: [{ marks: 2, description: "region in space where a charge experiences a force", keywords: ["region", "charge experiences", "force"] }],
  },
  {
    number: "7", sub_number: "7.4",
    text: "M is a point 0,1 m to the right of sphere B. Calculate the magnitude of the net electric field at point M.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "EAM = kQ/r² = (9×10⁹)(4×10⁻⁶)/(0,3)² = 4,0×10⁵ N·C⁻¹ (to the left, since A is negative). EBM = (9×10⁹)(3×10⁻⁶)/(0,1)² = 2,7×10⁶ N·C⁻¹ (to the right, since B is positive). Enet = EBM − EAM = 2,7×10⁶ − 4,0×10⁵ = 2,3×10⁶ N·C⁻¹, to the right.",
    marking_notes: "Marking points: correct formula (E = kQ/r²); correct magnitudes of the fields at M due to A and B; correct combination (fields in opposite directions, B's field dominates); correct final answer 2,3×10⁶ N·C⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "F = kQ1Q2/r²", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What are the magnitudes of the fields at M due to A (rA = 0,3 m) and B (rB = 0,1 m) respectively?",
        options: [
          "4,0×10⁵ N·C⁻¹ and 2,7×10⁶ N·C⁻¹",
          "2,7×10⁶ N·C⁻¹ and 4,0×10⁵ N·C⁻¹",
          "4,0×10⁵ N·C⁻¹ and 4,0×10⁵ N·C⁻¹",
          "3,6×10⁵ N·C⁻¹ and 2,7×10⁶ N·C⁻¹",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the net electric field at M (the two fields point in opposite directions, with B's field dominating)?",
        options: ["2,3×10⁶ N·C⁻¹", "3,1×10⁶ N·C⁻¹", "2,3×10⁵ N·C⁻¹", "4,0×10⁵ N·C⁻¹"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-AB.png`,
  },
  {
    number: "7", sub_number: "7.5",
    text: "Charged spheres A and B, and another charged sphere D, are now arranged along a rectangular system of axes (A at the origin, B 0,2 m along the positive x-axis, D 0,15 m along the positive y-axis). The net electrostatic force experienced by sphere A is 7,69 N, directed between the positive x- and y-axes. Is the charge on sphere D POSITIVE or NEGATIVE?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "Positive.",
    marking_notes: "Accept only 'positive'.",
    marking_points: [{ marks: 1, description: "positive", keywords: ["positive"] }],
    image_url: `${IMG}/7-charges-ABD-axes.png`,
  },
  {
    number: "7", sub_number: "7.6",
    text: "Calculate the magnitude of the charge on sphere D.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "Using Pythagoras: (Fnet)² = (FAD)² + (FAB)², (7,69)² = (FAD)² + (2,7)², giving FAD = 7,2 N. Using Coulomb's law: 7,2 = (9×10⁹)(4×10⁻⁶)QD/(0,15)², giving QD = 4,50×10⁻⁶ C.",
    marking_notes: "Marking points: correct substitution into Pythagoras's equation to find FAD; correct substitution into Coulomb's law; correct final answer 4,50×10⁻⁶ C.",
    steps: [
      {
        marks: 1,
        description: "Which approach finds FAD, the force on A due to D (the two force components are perpendicular)?",
        options: [
          "Pythagoras: (Fnet)² = (FAD)² + (FAB)²",
          "FAD = Fnet + FAB",
          "FAD = Fnet − FAB (simple subtraction)",
          "FAD = Fnet × FAB",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the charge on sphere D (using FAD = 7,2 N and Coulomb's law with r = 0,15 m)?",
        options: ["4,50×10⁻⁶ C", "9,00×10⁻⁶ C", "2,25×10⁻⁶ C", "3,60×10⁻⁶ C"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-ABD-axes.png`,
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (18 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "A battery with an internal resistance of 0,5 Ω and an unknown emf (ε) is connected to three resistors (R1 = 4 Ω, R2 = 25 Ω, R3 = 15 Ω), a high resistance voltmeter and an ammeter of negligible resistance, as shown in the circuit diagram. The resistance of the connecting wires must be ignored. Define the term emf of a battery.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The (maximum) energy provided (work done) by a battery per coulomb (unit charge) passing through it.",
    marking_notes: "Must refer to the energy provided (work done) by a battery per coulomb/unit charge passing through it.",
    marking_points: [{ marks: 2, description: "energy provided (work done) by a battery per coulomb of charge passing through it", keywords: ["energy provided", "per coulomb"] }],
    image_url: `${IMG}/8-circuit.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "The reading on the voltmeter DECREASES by 1,5 V when switch S is closed. Give a reason why the voltmeter reading decreases.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "Energy (per coulomb of charge) is converted to heat in the battery due to the internal resistance — as more current flows when S is closed, more voltage is 'lost' across the internal resistance, leaving less terminal voltage.",
    marking_notes: "Must refer to energy being converted to heat in the battery due to the internal resistance (as the current increases when S closes).",
    marking_points: [{ marks: 2, description: "energy converted to heat in the battery due to the internal resistance", keywords: ["converted to heat", "internal resistance"] }],
  },
  {
    number: "8", sub_number: "8.3.1",
    text: "Calculate the reading on the ammeter when switch S is closed.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "I = V/R = 1,5/0,5 = 3 A (the 1,5 V drop corresponds to the extra current flowing through the internal resistance once S is closed).",
    marking_notes: "Marking points: correct formula (I = V/R); correct final answer 3 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the ammeter reading, using the 1,5 V drop across the internal resistance (0,5 Ω)?",
        options: ["I = V/R", "I = VR", "I = R/V", "I = V + R"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the reading on the ammeter?",
        options: ["3 A", "0,75 A", "1,5 A", "6 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3.2",
    text: "Calculate the total external resistance of the circuit when switch S is closed.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "R2 and R3 are in parallel: 1/Rp = 1/25 + 1/15, giving Rp = 9,375 Ω. The total external resistance is R1 in series with this: Rext = 9,375 + 4 = 13,38 Ω.",
    marking_notes: "Marking points: correct formula for parallel resistors (1/Rp = 1/R1 + 1/R2); correct value of Rp (9,375 Ω); correct final answer Rext = 13,38 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the equivalent resistance of R2 and R3 in parallel?",
        options: ["1/Rp = 1/R2 + 1/R3", "Rp = R2 + R3", "Rp = R2 × R3", "1/Rp = R2 + R3"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Rp, the equivalent resistance of R2 and R3 in parallel?",
        options: ["9,375 Ω", "40 Ω", "6 Ω", "17,375 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total external resistance of the circuit (R1 in series with Rp)?",
        options: ["13,38 Ω", "9,375 Ω", "17,38 Ω", "4,375 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3.3",
    text: "Calculate the emf of the battery.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "ε = I(Rext + r) = 3(13,38 + 0,5) = 41,64 V.",
    marking_notes: "Marking points: correct formula (ε = I(Rext + r)); correct final answer 41,64 V (accept range 41,625-41,64 V).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the emf of the battery?",
        options: ["ε = I(Rext + r)", "ε = I(Rext − r)", "ε = Rext/I", "ε = I × r only"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the emf of the battery?",
        options: ["41,64 V", "40,14 V", "42,14 V", "13,88 V"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.4",
    text: "A learner makes the following statement: 'The current through resistor R3 is larger than the current through resistor R2.' Is this statement CORRECT? Choose from YES or NO. Explain the answer.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Yes. R2 and R3 are in parallel, so they have the same voltage across them. For the same voltage, a larger current flows through the smaller resistor (I = V/R), and R3 (15 Ω) is smaller than R2 (25 Ω), so IR3 > IR2.",
    marking_notes: "Marking points: correct answer YES; correct reason (for the same voltage across the parallel branches, a larger current flows through the smaller resistor, I = V/R).",
    steps: [
      {
        marks: 1,
        description: "Is the statement correct?",
        options: ["YES", "NO", "Cannot be determined from the given information", "Only if R1 is removed"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Why is the current through R3 larger than through R2 (R2 and R3 are in parallel, sharing the same voltage)?",
        options: [
          "For the same voltage, a larger current flows through the smaller resistor (I = V/R)",
          "A larger resistor always carries more current for the same voltage",
          "The current splits equally between parallel branches regardless of resistance",
          "R3 has a higher voltage across it than R2",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.5",
    text: "The 4 Ω resistor (R1) is now removed from the circuit. How will this affect the emf of the battery? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same.",
    marking_notes: "Accept only 'remains the same' (emf is a fixed property of the battery, independent of the external circuit).",
    marking_points: [{ marks: 1, description: "remains the same", keywords: ["remains the same"] }],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (16 marks) ============

  {
    number: "9", sub_number: "9.1.1",
    text: "A simplified diagram of an electrical machine is shown below, with a coil rotating between magnetic poles N and S, connected to a DC source via component A. Is this machine a DC motor or a DC generator?",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "DC motor.",
    marking_notes: "Accept only 'DC motor'.",
    marking_points: [{ marks: 1, description: "DC motor", keywords: ["dc motor"] }],
    image_url: `${IMG}/9-dc-motor.png`,
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "Write down the energy conversion that takes place while this machine is in operation.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Electrical energy is converted to mechanical (kinetic) energy.",
    marking_notes: "Must state electrical to mechanical/kinetic, in that order, for full marks.",
    marking_points: [{ marks: 2, description: "electrical energy converted to mechanical/kinetic energy", keywords: ["electrical", "mechanical"] }],
  },
  {
    number: "9", sub_number: "9.1.3",
    text: "Write down the name of component A in the diagram (connected to the DC source, touching the rotating coil).",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Split ring (commutator).",
    marking_notes: "Accept 'split ring' or 'commutator'.",
    marking_points: [{ marks: 1, description: "split ring/commutator", keywords: ["split ring", "commutator"] }],
  },
  {
    number: "9", sub_number: "9.1.4",
    text: "In which direction will the coil, shown in the diagram, rotate? Choose from CLOCKWISE or ANTICLOCKWISE.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Anticlockwise.",
    marking_notes: "Accept only 'anticlockwise'.",
    marking_points: [{ marks: 2, description: "anticlockwise", keywords: ["anticlockwise"] }],
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "An electrical device is marked 200 W; 220 V. Define the term rms voltage.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "The rms voltage of AC is the AC voltage/potential difference which dissipates the same amount of energy/heat/power as an equivalent DC voltage/potential difference.",
    marking_notes: "Must refer to the AC voltage that dissipates the same amount of energy/heat/power as an equivalent DC voltage.",
    marking_points: [{ marks: 2, description: "AC voltage that dissipates the same energy/power as an equivalent DC voltage", keywords: ["same amount of energy", "equivalent"] }],
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Calculate the resistance of the device.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Pave = Vrms²/R: 200 = 220²/R, giving R = 242 Ω.",
    marking_notes: "Marking points: correct formula (Pave = Vrms²/R); correct final answer 242 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the device's rated power, rated (rms) voltage, and resistance?",
        options: ["Pave = Vrms²/R", "Pave = Vrms × R", "Pave = R/Vrms", "R = Pave × Vrms"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the resistance of the device?",
        options: ["242 Ω", "220 Ω", "110 Ω", "484 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "This device is now connected to a 150 V AC source. Calculate the energy dissipated by the device in 10 minutes.",
    marks: 5, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "W = V²Δt/R = (150)²(10×60)/242 = 55 785,12 J.",
    marking_notes: "Marking points: correct formula (W = V²Δt/R); correct conversion of 10 minutes to 600 s; correct final answer 55 785,12 J (accept range 55 785,12-55 896 J).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the energy dissipated by the device (using the resistance found in 9.2.2)?",
        options: ["W = V²Δt/R", "W = V²/R", "W = VRΔt", "W = V/RΔt"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Δt in seconds (10 minutes)?",
        options: ["600 s", "60 s", "10 s", "6 000 s"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the energy dissipated by the device in 10 minutes?",
        options: ["55 785,12 J", "92 975,00 J", "33 471,07 J", "111 570,24 J"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 10: PHOTOELECTRIC EFFECT (13 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "An experiment investigates the relationship between the frequency of light incident on a metal and the maximum kinetic energy of the emitted electrons, for three different metals (potassium, zinc, platinum). The graph shows the results. Name the phenomenon on which this experiment is based.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The photoelectric effect.",
    marking_notes: "Accept only 'photoelectric effect'.",
    marking_points: [{ marks: 1, description: "photoelectric effect", keywords: ["photoelectric effect"] }],
    image_url: `${IMG}/10-Ek-f-graph.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "Name the physical quantity represented by X on the graph (the extrapolated y-intercept of the potassium line, below the origin).",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The work function (of potassium).",
    marking_notes: "Accept 'work function (of potassium)' or 'work function/arbeidsfunksie'.",
    marking_points: [{ marks: 1, description: "work function (of potassium)", keywords: ["work function"] }],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Which ONE of the three metals needs incident light with the largest wavelength for the emission of electrons? Give a reason for the answer.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Potassium. It has the lowest work function / threshold frequency (equivalently, the highest threshold wavelength) of the three metals.",
    marking_notes: "Marking points: correct metal (potassium); correct reason (lowest work function/threshold frequency, or highest threshold wavelength).",
    marking_points: [
      { marks: 1, description: "potassium", keywords: ["potassium"] },
      { marks: 1, description: "lowest work function / threshold frequency (highest threshold wavelength)", keywords: ["lowest work function", "threshold frequency"] },
    ],
  },
  {
    number: "10", sub_number: "10.4",
    text: "Define the term work function in words.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The work function of a metal is the minimum energy that an electron (in the metal) needs to be emitted/ejected from the metal surface.",
    marking_notes: "Must refer to the minimum energy an electron needs to be emitted from the metal surface.",
    marking_points: [{ marks: 2, description: "minimum energy an electron needs to be emitted from the metal surface", keywords: ["minimum energy", "emitted", "surface"] }],
  },
  {
    number: "10", sub_number: "10.5.1",
    text: "Calculate the work function of platinum (threshold frequency read from the graph: 1,75 × 10¹⁵ Hz).",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "W0 = hf0 = (6,63×10⁻³⁴)(1,75×10¹⁵) = 1,160×10⁻¹⁸ J.",
    marking_notes: "Marking points: correct formula (W0 = hf0); correct final answer 1,160×10⁻¹⁸ J.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the work function of platinum, using its threshold frequency?",
        options: ["W0 = hf0", "W0 = h/f0", "W0 = hf0 + Ek(max)", "W0 = f0/h"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the work function of platinum?",
        options: ["1,160×10⁻¹⁸ J", "1,160×10⁻¹⁹ J", "1,160×10⁻¹⁷ J", "6,63×10⁻¹⁹ J"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/10-Ek-f-graph.png`,
  },
  {
    number: "10", sub_number: "10.5.2",
    text: "Calculate the frequency of the incident light that will emit electrons from the surface of platinum with a maximum velocity of 5,60 × 10⁵ m·s⁻¹.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W0 + Ek(max): hf = W0 + ½mvmax²: (6,63×10⁻³⁴)f = 1,160×10⁻¹⁸ + ½(9,11×10⁻³¹)(5,60×10⁵)², giving f = 1,97×10¹⁵ Hz.",
    marking_notes: "Marking points: correct formula (hf = W0 + ½mvmax², using W0 from 10.5.1); correct final answer f = 1,97×10¹⁵ Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the photon's energy, the work function of platinum, and the ejected electron's maximum kinetic energy?",
        options: ["hf = W0 + ½mvmax²", "hf = W0 − ½mvmax²", "hf = W0 × ½mvmax²", "½mvmax² = hf + W0"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the frequency of the incident light?",
        options: ["1,97×10¹⁵ Hz", "1,75×10¹⁵ Hz", "2,20×10¹⁵ Hz", "1,86×10¹⁵ Hz"],
        correctIndex: 0,
      },
    ],
  },
];

// No exam_schedule entries here — mirrors physical-sciences-p1-nov2024.ts.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
