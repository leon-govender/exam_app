// Real DBE past paper: Physical Sciences (Physics) P1, November 2022, National
// (English).
// Source: single combined PDF (question paper + marking guideline) fetched
// from stanmorephysics.com. QP (cover + instructions + questions) is pages
// 1-18, data sheets are pages 19-21 (their own internal numbering "1"-"3"),
// and the memo (marking guidelines, "APPROVED MARKING GUIDELINE" stamped) is
// pages 22-53 of the combined PDF (memo cover page 22, then content numbered
// 2-32 internally). Page-by-page cross-check of question numbers/marks
// against the memo's answers found no stray or mismatched pages.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours
// (confirmed off the question paper's own cover page). All 150 marks are
// included here.
//
// This paper reuses every topic already defined by the Nov 2025/2024 P1
// datasets (scripts/seed-data/physical-sciences-p1-nov2025.ts and
// physical-sciences-p1-nov2024.ts) — no new CAPS topic appears in this paper
// that wasn't already covered by those, so the `topics` array below is
// identical to theirs (topics are upserted by key in scripts/seed.ts, so
// redeclaring them here is safe and required since this file is a standalone
// dataset).
//
// Diagrams (circuit diagrams, force/incline diagrams, graphs, the DC
// generator sketch, the charge-line diagrams) are vector line drawings
// rendered directly into the page content stream, not separate embedded
// raster images, so they were cropped from full-page renders rather than
// extracted as clean standalone images. The site's watermark
// ("Stanmorephysics.com" + a faint succulent-plant photo) appears faintly on
// a couple of them; it doesn't obscure any exam content. Pure MCQ text
// questions with no diagram (1.1, 1.2, 1.3, 1.4, 1.6, 1.8, 1.9, 1.10) and the
// purely illustrative photoelectric-cell circuit sketch in Question 10 were
// not cropped — the 10 diagram is decorative (the question is answerable
// from the text alone; the circuit isn't referenced numerically).
//
// Calculation questions (2.3.1, 2.3.2, 3.2.1, 3.2.2, 3.2.3, 4.2.1, 4.2.2,
// 4.3, 5.3, 5.4, 6.4, 7.3, 7.4, 7.6, 8.2.1, 8.2.2, 9.1.3, 9.2, 10.3, 10.4)
// use `steps` instead of `marking_points`: the student works the problem out
// on paper as normal, then picks the option they got for each mark-earning
// step (formula, intermediate value, final answer) from a few choices,
// rather than typing anything. Distractors are chosen to trap specific real
// errors (wrong formula, sign flip, wrong given value substituted, confusing
// an intermediate answer from a neighbouring sub-question — e.g. 3.2.2's
// distractor 24,43 m·s⁻¹ is the real velocity at the top of the door from
// 3.2.3's own working, not an arbitrary number), not just wrong final
// numbers. Non-computational MCQ-style and short single-answer questions
// (6.1-6.3, 7.5.1, 7.5.2, 8.2.3, 8.3.2, 8.4.1, 8.4.2, 9.1.1, 9.1.2, 9.1.3,
// 10.1) also use `steps` as single-step multiple-choice, per the grading
// convention of preferring `steps` over free-text `marking_points` whenever
// the memo gives one exact accepted answer or a small enumerable set.
// `marking_points` is reserved for genuinely open-ended define/state/explain
// answers and for diagram/graph-sketch questions (free-body diagrams, field
// patterns, graph sketches) where the memo awards marks for several
// independent visual/verbal criteria rather than one pickable answer.
//
// Question 8's circuit (8.1-8.3): the two parallel branches are a 1 Ω
// resistor (switched via S) and a 3 Ω + 2 Ω resistor IN SERIES (not, as the
// bare resistor values might suggest at a glance, 3 Ω alone) — confirmed
// against the memo's own working, which computes 1/Rp = 1/1 + 1/5 (treating
// the second branch as a single 5 Ω = 3 Ω + 2 Ω resistance) giving
// Rp = 0,83 Ω and Rtotal = Rp + 4 = 4,83 Ω. This was verified directly
// against a high-resolution crop of the circuit diagram itself, not assumed.
//
// FLAG for review: Question 8.2.3 (how does voltmeter V2's reading compare
// to V1's?) only requires a qualitative SMALLER-THAN/EQUAL-TO/GREATER-THAN
// answer per the memo, so this file does not attempt to pin down and
// transcribe V2's exact numeric reading (its precise node placement in the
// circuit — whether it spans just the 3 Ω resistor or the full 3 Ω + 2 Ω
// branch — doesn't change the qualitative "smaller than" answer either way,
// since both interpretations give a value well below V1's ~16,92 V). Not
// altered from the memo; flagging only because a fully worked V2 value is
// intentionally not derived here.
//
// FLAG for review: Question 6.2 ("name ONE application in the medical field
// of the Doppler Effect") and 6.5 (sketch a second fL vs fS line for a higher
// learner velocity) were transcribed from the QP as printed; 6.5 is a
// graph-sketch question marked purely on shape/gradient criteria per the
// memo (no numerical answer), consistent with how earlier papers in this
// dataset handle sketch questions.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2022-p1";

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
  year: 2022,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2023/10/NSC-Physical-Science-Grade-12-November-2022-P1-and-Memo-copy.pdf" as string | null,
};

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];

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
    text: "Which ONE of the following combinations consists of only SCALAR quantities? (A) Velocity, speed and time (B) Time, distance and speed (C) Acceleration, speed and distance (D) Displacement, velocity and acceleration",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "B — time, distance and speed are all scalars (no direction); velocity, displacement and acceleration are vectors.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The acceleration due to gravity on Earth is g. Which ONE of the following represents the acceleration due to gravity on a planet that has TWICE the mass and HALF the radius of the Earth? (A) ½g (B) 2g (C) 4g (D) 8g",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "D — 8g. Using g = GM/r²: doubling M multiplies g by 2, and halving r multiplies g by (1/0,5)² = 4, so g' = 2 × 4 × g = 8g.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "A ball is projected vertically upwards from the ground and reaches its maximum height after a while. Ignore the effects of air friction. How will the ACCELERATION and TOTAL MECHANICAL ENERGY of the ball at its maximum height compare to that immediately after it was projected? (A) Equal to; Equal to (B) Greater than; Smaller than (C) Equal to; Greater than (D) Smaller than; Equal to",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A — Equal to; Equal to. The acceleration is g throughout the motion (constant, unaffected by velocity), and with no air friction total mechanical energy is conserved.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "A car travels at CONSTANT VELOCITY along a horizontal road. A constant frictional force acts on the car during its motion. Which ONE of the following statements about the power dissipated by the engine of the car during the motion is CORRECT? The power ... (A) is zero. (B) increases. (C) decreases. (D) remains constant.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "D — remains constant. At constant velocity the net force is zero, so the driving force (equal to the constant friction) is constant; since P = Fv with both F and v constant, the power is constant.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Block X is placed on a horizontal table and is connected to block Y by a light inextensible string passing over a frictionless pulley. A constant frictional force acts on block X while it moves to the right. P, Q and R are points on the table such that the distance from P to Q is equal to that from Q to R. When block X reaches point Q, the string is cut and block X continues to move towards point R. Ignore the effect of air friction. Consider the following statements: (i) The work done by the frictional force acting on block X is greater when the block moves from point P to point Q than when the block moves from point Q to point R. (ii) Both the momentum and kinetic energy of block X decrease when the block moves from point Q to point R. (iii) The total mechanical energy of block X remains constant when the block moves from point Q to point R. Which of the statements above is/are CORRECT as block X moves from point Q to point R? (A) (i) only (B) (ii) only (C) (i) and (ii) only (D) (ii) and (iii) only",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "B — (ii) only. The constant friction acts over equal distances (PQ = QR) so it does equal work in each interval, making (i) false. After the string is cut, only friction acts on X, decelerating it, so both its momentum and kinetic energy decrease from Q to R — (ii) is true. Kinetic energy is lost to friction with no compensating height change, so total mechanical energy decreases, making (iii) false.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.5-block-pulley.png`,
  },
  {
    number: "1", sub_number: "1.6",
    text: "Light emitted from a distant star contains a spectral line X of frequency f. The spectral lines of this star when observed on Earth are red shifted. Which ONE of the following combinations of the OBSERVED FREQUENCY of spectral line X and the MOTION OF THE STAR is CORRECT? (A) Greater than f; Away from Earth (B) Greater than f; Towards Earth (C) Smaller than f; Away from Earth (D) Smaller than f; Towards Earth",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C — Smaller than f; Away from Earth. A red shift means the observed wavelength increases, so the observed frequency decreases (smaller than f); this is caused by the star moving away from Earth.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "A proton and an electron are a distance r apart. The magnitude of the electrostatic force that they exert on each other is F. Which ONE of the following graphs shows the relationship between F and r² as the proton and the electron approach each other?",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C — a hyperbolic curve decreasing from a high value towards the axis. Since F = kQ1Q2/r², F is inversely proportional to r², giving a hyperbola when F is plotted against r² (not a straight line as in A or D, and not the saturating curve of B).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.7-force-r2-graphs.png`,
  },
  {
    number: "1", sub_number: "1.8",
    text: "The emf of a battery is ε and its internal resistance is r. The battery is connected to three resistors R1, R2 and R3 and four voltmeters V1, V2, V3 and V4, as shown in the circuit diagram (V1 across the battery terminals, V2 across R1, V3 across R2, V4 across R3, with R2 and R3 in parallel with each other). The resistance of the conducting wires is negligible, while the voltmeters have very high resistances. Which ONE of the following equations represents the reading on voltmeter V1 in terms of the readings on the other voltmeters? (A) V1 = V2 + V3 (B) V1 = V2 + ½V3 (C) V1 = V2 + V3 + V4 (D) V1 = V2 + 2V3",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A — V1 = V2 + V3. R1 is in series with the parallel combination of R2 and R3 (which have the same voltage across them, V3 = V4), so the total voltage V1 across the battery terminals equals the voltage across R1 (V2) plus the voltage across the parallel combination (V3).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.9",
    text: "An AC generator consists of a coil which is rotated in a magnetic field. The emf-time graph for one complete rotation of the coil is shown below, reaching a maximum of 150 V at a period of 0,2 s. If the speed of rotation of the coil is now DOUBLED, which ONE of the following graphs is CORRECT for one complete rotation of the coil? (A) same 150 V peak, same 0,2 s period (B) 300 V peak, 0,2 s period (C) 300 V peak, 0,1 s period (D) 150 V peak, 0,1 s period",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "C — 300 V peak, 0,1 s period. Doubling the rotation speed doubles the rate of change of flux, doubling the peak emf (150 V → 300 V), and halves the period (0,2 s → 0,1 s) since the coil completes each rotation in half the time.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "White light is passed through a cold gas and then through a prism. A line spectrum is observed on the screen. Which ONE of the following correctly describes the ENERGY TRANSITION of the atoms of the gas and the TYPE OF LINE SPECTRUM observed on the screen? (A) Higher to lower energy level; Emission (B) Lower to higher energy level; Emission (C) Higher to lower energy level; Absorption (D) Lower to higher energy level; Absorption",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "D — Lower to higher energy level; Absorption. The cold gas atoms absorb specific wavelengths of the white light passing through them, exciting electrons from lower to higher energy levels; the dark lines seen against the continuous spectrum form an absorption spectrum.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (13 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "Crate P of mass 1,25 kg is connected to another crate, Q, of mass 2 kg by a light inextensible string. The two crates are placed on a rough horizontal surface. A constant force F of magnitude 7,5 N, acting at angle θ to the horizontal, is applied on crate Q. The crates accelerate at 0,1 m·s⁻² to the right. Crate P experiences a constant frictional force of 1,8 N and crate Q experiences a constant frictional force of 2,2 N. State Newton's Second Law of Motion in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When a net/resultant force acts on an object, the object will accelerate in the direction of the force, and the acceleration is directly proportional to the force and inversely proportional to the mass of the object.",
    marking_notes: "Full statement including 'net/resultant force', 'accelerate in the direction of the force', and 'directly proportional to force, inversely proportional to mass' required for full marks.",
    marking_points: [
      { marks: 1, description: "net/resultant force causes acceleration in the direction of the force", keywords: ["net force", "resultant force", "direction of the force"] },
      { marks: 1, description: "acceleration directly proportional to force and inversely proportional to mass", keywords: ["directly proportional", "inversely proportional", "mass"] },
    ],
    image_url: `${IMG}/2-crates-force.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram for crate P.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on crate P, all drawn from a single point: weight w vertically down; normal force N vertically up; tension T in the string pulling to the right (towards Q); and friction f acting to the left, opposing P's motion.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (down), normal force (up), tension T (in the direction of pull, towards Q), friction f (opposing motion). Max 4.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N/FN) drawn vertically upward", keywords: ["normal force", "fn"] },
      { marks: 1, description: "tension T (or FT/Fstring) drawn towards Q", keywords: ["tension", "ft", "fstring"] },
      { marks: 1, description: "friction f drawn opposing the direction of motion", keywords: ["friction", "fk"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Calculate the magnitude of the tension in the string.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For crate P: Fnet = ma, so T − f = ma, giving T − 1,8 = (1,25)(0,1), so T = 1,93 N.",
    marking_notes: "Marking points: correct equation of motion for P (T − f = ma); correct substitution (T − 1,8 = (1,25)(0,1)); correct final answer T = 1,93 N (1,925 N).",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to crate P (mass 1,25 kg, friction 1,8 N)?",
        options: ["T − f = ma", "T + f = ma", "f − T = ma", "T = ma (ignoring friction)"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is ma for crate P (the net force needed)?",
        options: ["0,125 N", "1,25 N", "0,1 N", "12,5 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the tension T?",
        options: ["1,93 N", "1,68 N", "1,80 N", "2,00 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Calculate the magnitude of angle θ.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For crate Q: Fcosθ − T − f = ma, so 7,5cosθ − 1,93 − 2,2 = (2)(0,1), giving θ = 54,74°.",
    marking_notes: "Marking points: correct equation of motion for Q (Fcosθ − T − f = ma); correct final answer θ = 54,74° (range 54,55°-54,78°).",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to crate Q (force F at angle θ, tension T, friction 2,2 N)?",
        options: [
          "Fcosθ − T − f = ma",
          "Fcosθ + T + f = ma",
          "Fsinθ − T − f = ma",
          "Fcosθ − T − f = 0",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is θ?",
        options: ["54,74°", "58,40°", "71,34°", "35,26°"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (16 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A ball is thrown vertically upwards at 12 m·s⁻¹ from the top of a building of height 25 m. On its way down, the ball passes a door which has a height of 1,9 m and then strikes the ground. Ignore the effects of air friction. Define the term free fall.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Motion under the influence (or in the presence) of the gravitational force (weight) only.",
    marking_notes: "Must refer to motion under gravitational force/weight only.",
    marking_points: [{ marks: 2, description: "motion under the influence of weight/gravitational force only", keywords: ["gravitational force", "weight only"] }],
    image_url: `${IMG}/3-building-door.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Calculate the time taken for the ball to reach its maximum height.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf = vi + aΔt (upward positive, vf = 0 at the top): 0 = 12 + (−9,8)Δt, giving Δt = 1,22 s.",
    marking_notes: "Formula vf = vi + aΔt with Δt, correct substitution, and final answer 1,22 s.",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies (vf = 0 at maximum height)?",
        options: ["vf = vi + aΔt", "vf² = vi² + 2aΔx", "Δx = viΔt + ½aΔt²", "vf = vi − aΔt"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the time taken to reach maximum height?",
        options: ["1,22 s", "2,45 s", "0,82 s", "12,00 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Calculate the velocity with which the ball strikes the ground.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf² = vi² + 2aΔy from the throw point to the ground (upward positive, Δy = −25 m): vf² = (12)² + 2(−9,8)(−25) = 634, giving vf = 25,18 m·s⁻¹ downwards.",
    marking_notes: "Formula vf² = vi² + 2aΔy, correct substitution, correct final answer 25,18 m·s⁻¹ downwards (range 25,03-25,59 m·s⁻¹).",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies from the throw point to the ground (25 m below)?",
        options: ["vf² = vi² + 2aΔy", "vf = vi + aΔt", "Δy = viΔt", "Δy = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is vf² (magnitude, in (m·s⁻¹)²)?",
        options: ["634", "490", "346", "144"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the velocity with which the ball strikes the ground?",
        options: ["25,18 m·s⁻¹ downwards", "24,43 m·s⁻¹ downwards", "22,14 m·s⁻¹ downwards", "30,40 m·s⁻¹ downwards"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "Calculate the time it took the ball to move from the top of the door to the ground.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "First find the velocity at the top of the door (23,1 m below the throw point, since 25 − 1,9 = 23,1 m): vf² = (12)² + 2(−9,8)(−23,1) = 596,76, giving vf = 24,43 m·s⁻¹ downwards. Then, from the top of the door to the ground: vf = vi + aΔt, so −25,18 = −24,43 + (−9,8)Δt, giving Δt = 0,08 s (range 0,07-0,08 s).",
    marking_notes: "Marking points: substitution to find velocity at the top of the door (24,43 m·s⁻¹); formula to find Δt from top to bottom of door; correct substitution; final answer 0,07-0,08 s.",
    steps: [
      {
        marks: 1,
        description: "What is the ball's velocity at the top of the door (23,1 m below the throw point)?",
        options: ["24,43 m·s⁻¹ downwards", "25,18 m·s⁻¹ downwards", "12,00 m·s⁻¹ downwards", "22,14 m·s⁻¹ downwards"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation of motion finds the time from the top of the door to the ground?",
        options: ["vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt", "Δy = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the time taken from the top of the door to the ground?",
        options: ["0,08 s", "1,22 s", "3,79 s", "0,14 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Draw a velocity versus time graph for the motion of the ball from the moment that the ball is thrown upwards until it strikes the ground. Use the ground as zero reference. Clearly indicate the following on your graph: the velocity with which the ball was thrown upwards, the time taken by the ball to reach its maximum height, and the velocity with which the ball strikes the ground.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A single straight line starting at v = 12 m·s⁻¹ (or −12 m·s⁻¹) with a constant negative (or positive) gradient, crossing the time axis at t = 1,22 s (from 3.2.1), and ending at v = −25,18 m·s⁻¹ (or +25,18 m·s⁻¹) when the ball strikes the ground.",
    marking_notes: "Marking points: straight line starting at ±12 m·s⁻¹ with the correct final sign; line crosses the time axis at the time calculated in 3.2.1; correct final velocity as calculated in 3.2.2 is indicated.",
    marking_points: [
      { marks: 1, description: "straight line starting at the initial velocity (12 or −12 m·s⁻¹) with the correct final sign", keywords: ["12", "straight line"] },
      { marks: 1, description: "line crosses the time axis at the time calculated in 3.2.1 (1,22 s)", keywords: ["1 22", "crosses"] },
      { marks: 1, description: "correct final velocity from 3.2.2 (25,18 m·s⁻¹) is indicated at the end of the line", keywords: ["25 18", "final velocity"] },
    ],
  },

  // ============ QUESTION 4: MOMENTUM AND IMPULSE (14 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Trolley X of mass 1,2 kg travels at 8 m·s⁻¹ east and collides with trolley Y of mass 0,5 kg which is initially at rest. Ignore all frictional effects. The velocity-time graph for trolley X shows it moving at 8 m·s⁻¹ from t = 20 s, decreasing linearly to 4 m·s⁻¹ by t = 20,2 s (the collision lasting from t = 20,1 s to t = 20,2 s), then remaining constant at 4 m·s⁻¹. State the principle of conservation of linear momentum.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "In an isolated/closed system the total (linear) momentum is conserved/remains constant.",
    marking_notes: "Must refer to an isolated/closed system and total momentum being conserved/constant.",
    marking_points: [{ marks: 2, description: "total momentum in an isolated/closed system is conserved/remains constant", keywords: ["isolated system", "closed system", "conserved"] }],
    image_url: `${IMG}/4-velocity-time-graph.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Calculate the magnitude of the velocity of trolley Y immediately after the collision.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Using conservation of momentum, Σpi = Σpf: (1,2)(8) + (0,5)(0) = (1,2)(4) + (0,5)(vfy), giving vfy = 9,6 m·s⁻¹.",
    marking_notes: "Marking points: formula Σpi = Σpf (or equivalent); correct substitution; correct final answer vfy = 9,6 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies (frictionless collision between the trolleys)?",
        options: [
          "Conservation of momentum: Σpi = Σpf",
          "Conservation of kinetic energy: ΣEki = ΣEkf",
          "Impulse-momentum theorem applied to the system as a whole",
          "Newton's second law: Fnet = ma",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total initial momentum of the system (X + Y)?",
        options: ["9,6 kg·m·s⁻¹", "4,8 kg·m·s⁻¹", "19,2 kg·m·s⁻¹", "0,6 kg·m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the velocity of trolley Y immediately after the collision?",
        options: ["9,6 m·s⁻¹", "4,8 m·s⁻¹", "19,2 m·s⁻¹", "2,4 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Calculate the magnitude of the average net force that trolley X exerts on trolley Y during the collision.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "The collision lasts Δt = 20,2 − 20,1 = 0,1 s. Using FnetΔt = Δp = m(vf − vi) for trolley Y: Fnet(0,1) = (0,5)(9,6 − 0), giving Fnet = 48 N.",
    marking_notes: "Marking points: formula FnetΔt = Δp (or equivalent); correct substitution using Δt = 0,1 s; correct final answer 48 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the average net force, using the collision time Δt = 0,1 s?",
        options: ["FnetΔt = Δp = m(vf − vi)", "Fnet = ma (using the acceleration of X)", "Fnet = Δp only, without dividing by Δt", "FnetΔt = ½mv²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the average net force?",
        options: ["48 N", "24 N", "4,8 N", "96 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Is the collision ELASTIC or INELASTIC? Explain the answer by means of suitable calculations.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Total kinetic energy before: ΣEki = ½(1,2)(8)² + 0 = 38,4 J. Total kinetic energy after: ΣEkf = ½(1,2)(4)² + ½(0,5)(9,6)² = 32,64 J. Since ΣEki ≠ ΣEkf, kinetic energy is not conserved, so the collision is INELASTIC.",
    marking_notes: "Marking points: formula Ek = ½mv²; correct value of ΣEki (38,4 J); correct value of ΣEkf (32,64 J); correct conclusion that the collision is inelastic because ΣEki ≠ ΣEkf.",
    steps: [
      {
        marks: 1,
        description: "Which formula is needed to compare kinetic energy before and after the collision?",
        options: ["Ek = ½mv²", "p = mv", "Ek = mv", "Ek = ½mv"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total kinetic energy of the system BEFORE the collision?",
        options: ["38,4 J", "30,72 J", "19,2 J", "76,8 J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total kinetic energy of the system AFTER the collision?",
        options: ["32,64 J", "28,80 J", "38,40 J", "23,04 J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Is the collision elastic or inelastic?",
        options: [
          "Inelastic — ΣEki ≠ ΣEkf (kinetic energy is not conserved)",
          "Elastic — ΣEki = ΣEkf",
          "Elastic — because momentum is conserved",
          "Cannot be determined from this information",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (15 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A 12 kg block is initially at rest at point A at the bottom of a ROUGH inclined plane. The block is pulled up the incline by a constant force F acting parallel to the incline. The block reaches point B, at a vertical height of 4,5 m above the horizontal, with a speed of 2,25 m·s⁻¹. Define the term non-conservative force.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "A force is non-conservative if the work done by the force on an object (moving between two points) depends on the path taken.",
    marking_notes: "Must refer to the work done depending on the path taken.",
    marking_points: [{ marks: 2, description: "work done by the force depends on the path taken", keywords: ["work done", "depends on the path"] }],
    image_url: `${IMG}/5.1-incline-diagram.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Draw a labelled free-body diagram for the block when it is pulled up the inclined plane.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on the block, all drawn from a single point: weight w vertically down (or resolved into components parallel and perpendicular to the incline); normal force N perpendicular to the incline; applied force F up the incline; and friction f down the incline (opposing motion).",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight/Fg⊥ and Fg∥ (or w), normal force N (perpendicular to incline), applied force F (up the incline), friction f (down the incline, opposing motion). Max 4.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg, or resolved as Fg∥ and Fg⊥) drawn correctly", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N) drawn perpendicular to the incline", keywords: ["normal force"] },
      { marks: 1, description: "applied force F drawn up the incline", keywords: ["applied force", "f"] },
      { marks: 1, description: "friction drawn down the incline, opposing motion", keywords: ["friction"] },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Calculate the total work done on the block by the NON-CONSERVATIVE forces when the block moved from point A to point B.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnc = ΔEk + ΔEp = ½(12)(2,25² − 0) + (12)(9,8)(4,5 − 0) = 30,375 + 529,2 = 559,58 J.",
    marking_notes: "Marking points: formula Wnc = ΔEk + ΔEp; correct value of ΔEk (30,38 J); correct final answer Wnc = 559,58 J.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the work done by the non-conservative forces from A to B?",
        options: ["Wnc = ΔEk + ΔEp", "Wnet = ΔEk", "Wnc = ΔEp only", "Wnc = ΔEk only"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is ΔEk (the change in kinetic energy) from A to B?",
        options: ["30,38 J", "15,19 J", "60,75 J", "91,35 J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Wnc, the total work done by the non-conservative forces?",
        options: ["559,58 J", "498,83 J", "30,38 J", "589,58 J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "The same constant force F now moves the block at a CONSTANT VELOCITY across a rough horizontal surface from point B to point C. Force F acts parallel to the horizontal surface. The magnitude of the constant frictional force acting on the block while moving from point B to point C is 42 N LARGER than the magnitude of the constant frictional force acting on the block when it moves from point A to point B. Calculate the distance from point A to point B.",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Along the incline (A to B): Wnc = (F − f1)Δx, so 559,58 = (F − f1)Δx ... (1). Along the horizontal (B to C, constant velocity so Fnet = 0): F − f2 = 0, so F = f2 = f1 + 42, giving F − f1 = 42 ... (2). Substituting (2) into (1): 559,58 = 42Δx, giving Δx = 13,32 m.",
    marking_notes: "Marking points: formula for Wnc along the incline; correct substitution of 559,58 J; correct force equation on the horizontal (Fnet = 0, F = f2); relating the two frictional forces (f2 = f1 + 42); correct final answer Δx = 13,32 m.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates Wnc along the incline to F, f1 and the distance Δx (A to B)?",
        options: ["Wnc = (F − f1)Δx", "Wnc = (F + f1)Δx", "Wnc = FΔx only", "Wnc = f1Δx only"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct force equation on the horizontal surface B to C (constant velocity)?",
        options: ["F − f2 = 0 (Fnet = 0)", "F − f2 = ma with a ≠ 0", "F + f2 = 0", "f2 = 0"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do the two frictional forces relate to each other?",
        options: ["f2 = f1 + 42", "f2 = f1 − 42", "f2 = 42 (f1 = 0)", "f1 = f2 + 42"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the distance from point A to point B?",
        options: ["13,32 m", "6,66 m", "26,64 m", "559,58 m"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (10 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "A learner investigates the relationship between the observed frequency and the frequency of sound waves emitted by a stationary source, by moving towards the source at a constant velocity. A graph of observed frequency (fL) versus source frequency (fS) is a straight line through the origin. Name the phenomenon illustrated by the graph.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler Effect.",
    marking_notes: "Accept only 'Doppler Effect'.",
    steps: [
      { marks: 1, description: "Name the phenomenon illustrated by the graph.", options: ["Doppler Effect", "Redshift", "Interference", "Diffraction"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Name ONE application in the medical field of the phenomenon in Question 6.1.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Measurement of foetal heartbeat, or measurement of blood flow (Doppler ultrasound/flow meter).",
    marking_notes: "Any one valid medical application of the Doppler effect accepted.",
    steps: [
      { marks: 1, description: "Name ONE medical application of the Doppler effect.", options: ["Measuring blood flow or foetal heartbeat (Doppler ultrasound)", "Measuring body temperature", "X-ray imaging of bones", "MRI scanning"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Write down the type of proportionality that exists between fL and fS, as illustrated by the graph.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Directly proportional (fL ∝ fS).",
    marking_notes: "Accept only 'directly proportional'.",
    steps: [
      { marks: 1, description: "What type of proportionality exists between fL and fS?", options: ["Directly proportional", "Inversely proportional", "Exponentially related", "Not related"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "The gradient of the graph obtained is found to be 1,06. If the speed of sound in air is 340 m·s⁻¹, calculate the magnitude of the velocity at which the learner approaches the source.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "fL/fS = (v + vL)/v (listener moving towards a stationary source), and the gradient of the fL vs fS graph equals fL/fS, so 1,06 = (340 + vL)/340, giving vL = 20,4 m·s⁻¹.",
    marking_notes: "Marking points: Doppler formula; correct substitution for v and vL; substitution of the gradient 1,06 for fL/fS; final answer 20,4 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which Doppler formula applies (listener moving towards a stationary source)?",
        options: ["fL/fS = (v + vL)/v", "fL/fS = (v − vL)/v", "fL/fS = v/(v + vL)", "fL/fS = v/(v − vL)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What does the gradient (1,06) equal, and what is the resulting equation?",
        options: ["1,06 = (340 + vL)/340", "1,06 = (340 − vL)/340", "1,06 = 340/(340 + vL)", "1,06 = vL/340"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the learner's velocity?",
        options: ["20,4 m·s⁻¹", "360,40 m·s⁻¹", "18,68 m·s⁻¹", "0,06 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.5",
    text: "The investigation is repeated with the learner moving at a HIGHER constant velocity towards the sound source. Copy the graph (fL vs fS) and label it as A. On the same set of axes, sketch the graph that will be obtained when the learner is moving at the HIGHER velocity. Label this as B.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Graph B is a second straight line through the origin with a STEEPER gradient than graph A, since a higher approach velocity gives a larger fL/fS ratio.",
    marking_notes: "Marking points: graph is a straight line starting at the origin; gradient of B is greater than the gradient of A.",
    marking_points: [
      { marks: 1, description: "graph B is a straight line starting at the origin", keywords: ["straight line", "origin"] },
      { marks: 1, description: "gradient of B is greater than the gradient of A", keywords: ["gradient", "greater", "steeper"] },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (17 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "A charged sphere M is suspended from a ceiling by a light inextensible, insulated string. Another charged sphere N, of mass 2,04 × 10⁻³ kg and carrying a charge of +8,6 × 10⁻⁸ C, hangs STATIONARY vertically below sphere M. The centres of the spheres are 0,3 m apart. State Coulomb's law in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The magnitude of the electrostatic force exerted by one point charge on another point charge is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.",
    marking_notes: "Must refer to the electrostatic force between two point charges being directly proportional to the product of the charges and inversely proportional to the square of the distance between them.",
    marking_points: [{ marks: 2, description: "force directly proportional to the product of the charges and inversely proportional to the square of the distance between them", keywords: ["directly proportional", "square of the distance"] }],
    image_url: `${IMG}/7.1-charges-mn.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "State whether the charge on sphere M is POSITIVE or NEGATIVE.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Negative. Sphere N is positive and hangs in stationary equilibrium directly below M, so M must attract N (its weight is balanced by an upward electrostatic attraction), meaning M carries the opposite (negative) charge.",
    marking_notes: "Accept only 'negative'.",
    steps: [
      { marks: 1, description: "What is the polarity of the charge on sphere M?", options: ["Negative", "Positive"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Draw a labelled free-body diagram for sphere N.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Two forces act on sphere N, both drawn from a single point: the electrostatic force FE (attraction towards M) pointing upward, and the weight w pointing downward.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: electrostatic force FE (upward, towards M) and weight w (downward). Max 2.",
    marking_points: [
      { marks: 1, description: "electrostatic force FE (or F/FM on N) drawn upward, towards M", keywords: ["electrostatic force", "fe"] },
      { marks: 1, description: "weight (w/Fg/mg) drawn downward", keywords: ["weight", "gravitational force", "mg"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Calculate the magnitude of the charge on sphere M.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "At equilibrium, the electrostatic force on N balances its weight: Fg = FE, so mg = kQMQN/r². Fg = (2,04×10⁻³)(9,8) = 0,02 N. Then 0,02 = (9×10⁹)(QM)(8,6×10⁻⁸)/(0,3)², giving QM = 2,33×10⁻⁶ C.",
    marking_notes: "Marking points: correct substitution to calculate the weight of N (0,02 N); Coulomb's law formula; equating Fnet = 0 (mg = kQMQN/r²); correct substitution into the Coulomb's law formula; correct final answer 2,32-2,33×10⁻⁶ C.",
    steps: [
      {
        marks: 1,
        description: "What is the weight of sphere N (mass 2,04×10⁻³ kg)?",
        options: ["0,02 N", "0,002 N", "0,2 N", "2,04 N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula gives the electrostatic force between M and N?",
        options: ["F = kQMQN/r²", "F = kQ/r²", "F = kQMQN/r", "F = QMQN/kr²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What equation applies at equilibrium (N hangs stationary)?",
        options: ["mg = kQMQN/r² (weight equals electrostatic force)", "mg = 0", "kQMQN/r² = 0", "mg + kQMQN/r² = 0"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the charge on sphere M?",
        options: ["2,33×10⁻⁶ C", "2,33×10⁻⁵ C", "8,60×10⁻⁸ C", "1,80×10⁻⁶ C"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.5.1",
    text: "How does the electrostatic force that sphere M exerts on sphere N compare to that exerted by sphere N on sphere M, with respect to MAGNITUDE?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Equal (the same).",
    marking_notes: "Accept only 'equal' or 'same'.",
    steps: [
      { marks: 1, description: "How do the magnitudes of the two forces compare?", options: ["Equal", "Smaller", "Greater", "Cannot be determined"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.5.2",
    text: "How does the electrostatic force that sphere M exerts on sphere N compare to that exerted by sphere N on sphere M, with respect to DIRECTION?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Opposite (Newton's third law).",
    marking_notes: "Accept 'opposite' or 'upwards' (opposite to the force on N).",
    steps: [
      { marks: 1, description: "How do the directions of the two forces compare?", options: ["Opposite (Newton's third law)", "Same direction", "Perpendicular", "No force on one of them"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.6",
    text: "A charged sphere M is suspended from a ceiling. Another charged sphere N, of mass 2,04 × 10⁻³ kg and carrying a charge of +8,6 × 10⁻⁸ C, hangs STATIONARY vertically below sphere M. The centres of M and N are 0,3 m apart. Point X is 0,1 m vertically below the centre of sphere N. Given that the magnitude of the charge on sphere M is 2,33 × 10⁻⁶ C, calculate the net electric field at point X.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "Field due to M at X (r = 0,4 m): E = kQM/r² = (9×10⁹)(2,33×10⁻⁶)/(0,4)² = 1,31×10⁵ N·C⁻¹ (upward, towards M). Field due to N at X (r = 0,1 m): E = kQN/r² = (9×10⁹)(8,6×10⁻⁸)/(0,1)² = 7,74×10⁴ N·C⁻¹ (downward, away from N, since N is positive). Net field = 1,31×10⁵ − 7,74×10⁴ = 5,37×10⁴ N·C⁻¹ upward, towards M.",
    marking_notes: "Marking points: formula E = kQ/r²; field due to M; field due to N; correct final answer 5,31×10⁴-5,37×10⁴ N·C⁻¹, upward/towards M.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "F = kQ1Q2/r²", "E = kQ/r", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of the field at X due to sphere N (r = 0,1 m)?",
        options: ["7,74×10⁴ N·C⁻¹", "1,31×10⁵ N·C⁻¹", "7,74×10³ N·C⁻¹", "2,58×10⁵ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of the field at X due to sphere M (r = 0,4 m)?",
        options: ["1,31×10⁵ N·C⁻¹", "5,24×10⁵ N·C⁻¹", "2,10×10⁴ N·C⁻¹", "7,74×10⁴ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the net electric field at X?",
        options: ["5,37×10⁴ N·C⁻¹ upward, towards M", "2,09×10⁵ N·C⁻¹ upward", "7,74×10⁴ N·C⁻¹ downward", "1,31×10⁵ N·C⁻¹ upward"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (20 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Four resistors (3 Ω, 1 Ω, 2 Ω and 4 Ω) are connected to a battery of emf ε and internal resistance r, together with an ammeter and voltmeters V1 and V2, as shown in the circuit diagram. The 1 Ω resistor is connected in series with switch S; the 3 Ω and 2 Ω resistors are in series with each other, forming a branch in parallel with the (switched) 1 Ω branch; this parallel combination is in series with the 4 Ω resistor and the battery. The resistances of the ammeter and connecting wires are negligible, while the voltmeters have very high resistances. State Ohm's law in words.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The potential difference across a conductor is directly proportional to the current in the conductor at constant temperature (provided temperature and all other physical conditions are constant).",
    marking_notes: "Must refer to potential difference directly proportional to current, at constant temperature.",
    marking_points: [{ marks: 2, description: "potential difference directly proportional to current at constant temperature", keywords: ["directly proportional", "constant temperature"] }],
    image_url: `${IMG}/8.1-circuit.png`,
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "Switch S is CLOSED. The reading on the ammeter is 3,5 A. Calculate the total external resistance of the circuit.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "The 1 Ω branch and the (3 Ω + 2 Ω = 5 Ω) branch are in parallel: 1/Rp = 1/1 + 1/5, giving Rp = 0,83 Ω. This is in series with the 4 Ω resistor: RT = 0,83 + 4 = 4,83 Ω.",
    marking_notes: "Marking points: parallel-resistor formula with R1 = 1 Ω and R2 = 5 Ω (the 3 Ω + 2 Ω series branch); correct value of Rp (0,83 Ω); correct final total RT = 4,83 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the parallel combination of the 1 Ω branch and the (3 Ω + 2 Ω) branch?",
        options: ["1/Rp = 1/1 + 1/5", "Rp = 1 + 5", "1/Rp = 1/1 + 1/3 + 1/2", "Rp = (1)(3)/(1+3)"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Rp, the parallel combination?",
        options: ["0,83 Ω", "0,20 Ω", "6,00 Ω", "4,00 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total external resistance?",
        options: ["4,83 Ω", "4,00 Ω", "9,83 Ω", "0,83 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Calculate the reading on voltmeter V1 (connected across the battery terminals).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V1 is the terminal voltage, equal to the voltage across the total external resistance: V1 = IRT = (3,5)(4,83) = 16,92 V.",
    marking_notes: "Formula V = IR, correct substitution, correct final answer 16,91-16,92 V.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives V1 (the terminal voltage)?",
        options: ["V1 = IRT (I = ammeter reading, RT = total external resistance)", "V1 = I/RT", "V1 = RT/I", "V1 = I + RT"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the reading on V1?",
        options: ["16,92 V", "4,83 V", "13,42 V", "3,50 V"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "How does the reading on voltmeter V2 compare to the reading on voltmeter V1? Choose from SMALLER THAN, EQUAL TO or GREATER THAN.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "Smaller than. V2 reads the voltage across (part of) the parallel section only, which is a fraction of the total external voltage V1 across the whole external circuit (parallel section + the 4 Ω resistor).",
    marking_notes: "Accept only 'smaller than'.",
    steps: [
      { marks: 1, description: "How does V2 compare to V1?", options: ["Smaller than", "Equal to", "Greater than"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.3.1",
    text: "A learner concludes that the emf of the battery is equal to the reading on voltmeter V1. Define the term emf.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "Maximum work done by the battery per unit charge (or: maximum/total energy supplied by the battery per unit charge).",
    marking_notes: "Must refer to maximum work/energy per unit charge.",
    marking_points: [{ marks: 2, description: "maximum work/energy done by the battery per unit charge", keywords: ["maximum work", "per unit charge", "maximum energy"] }],
  },
  {
    number: "8", sub_number: "8.3.2",
    text: "Is the learner's conclusion CORRECT? Choose from YES or NO.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "No.",
    marking_notes: "Accept only 'No'.",
    steps: [
      { marks: 1, description: "Is the learner's conclusion (emf = V1) correct?", options: ["No", "Yes"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.3.3",
    text: "Give a reason for the answer to Question 8.3.2.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "The battery has internal resistance, so there is a potential drop (lost volts) inside the battery — V1 (the terminal voltage) is therefore less than the emf.",
    marking_notes: "Must refer to the battery's internal resistance causing a potential drop/lost volts, so V1 < emf.",
    marking_points: [{ marks: 1, description: "the battery has internal resistance, causing a potential drop inside the battery so V1 is less than the emf", keywords: ["internal resistance", "potential drop", "lost volts"] }],
  },
  {
    number: "8", sub_number: "8.4.1",
    text: "Switch S is now removed and replaced by voltmeter V2, as shown in the circuit diagram (so the 1 Ω branch, now in series with an ideal voltmeter, carries no current). How will the power dissipated by the 4 Ω resistor change? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases.",
    marking_notes: "Accept only 'decreases'.",
    steps: [
      { marks: 1, description: "How does the power dissipated by the 4 Ω resistor change?", options: ["Decreases", "Increases", "Remains the same"], correctIndex: 0 },
    ],
    image_url: `${IMG}/8.4-circuit-v2.png`,
  },
  {
    number: "8", sub_number: "8.4.2",
    text: "How will the reading on voltmeter V1 change? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Increases.",
    marking_notes: "Accept only 'increases'.",
    steps: [
      { marks: 1, description: "How does the reading on V1 change?", options: ["Increases", "Decreases", "Remains the same"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Explain the answer to Question 8.4.2.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "With switch S replaced by voltmeter V2 (which has a very high resistance), no/very little current flows through the 1 Ω branch — the branch is effectively disabled. This increases the total resistance of the circuit, which decreases the current in the circuit. Since the internal (lost) volts decrease as current decreases, the external volts (V1) must increase for a constant emf.",
    marking_notes: "Marking points: no/very little current through the 1 Ω branch (branch effectively disabled, since the voltmeter has very high resistance); (total) resistance of the circuit increases; current in the circuit decreases; internal/lost volts decrease, so external volts (V1) increase for constant emf.",
    marking_points: [
      { marks: 1, description: "no/very little current flows through the 1 Ω branch (it is effectively disabled by the high-resistance voltmeter)", keywords: ["no current", "1 ohm branch", "disabled"] },
      { marks: 1, description: "the total resistance of the circuit increases", keywords: ["resistance increases", "total resistance"] },
      { marks: 1, description: "the current in the circuit decreases", keywords: ["current decreases"] },
      { marks: 1, description: "internal/lost volts decrease, so the external volts (V1) increase for a constant emf", keywords: ["internal volts", "lost volts", "external volts increase"] },
    ],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS AND AC (11 marks) ============

  {
    number: "9", sub_number: "9.1.1",
    text: "The diagram below shows the initial position of the coil in a simple DC generator, rotated in an anticlockwise direction as shown. Name the component in this generator that ensures that the induced current in the external circuit is in one direction only.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Split-ring commutator.",
    marking_notes: "Accept 'split ring' or 'commutator'.",
    steps: [
      { marks: 1, description: "Which component ensures the induced current is in one direction only?", options: ["Split-ring commutator", "Slip rings", "Brushes alone", "A diode"], correctIndex: 0 },
    ],
    image_url: `${IMG}/9-dc-generator.png`,
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "Is the direction of the induced current from X to Y or from Y to X?",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Y to X.",
    marking_notes: "Accept only 'Y to X'.",
    steps: [
      { marks: 1, description: "What is the direction of the induced current?", options: ["Y to X", "X to Y"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.1.3",
    text: "A maximum voltage of 90 V is generated when the coil is rotating at a frequency of 20 Hz. Write down the time taken for the coil to complete ONE rotation.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "T = 1/f = 1/20 = 0,05 s.",
    marking_notes: "Accept only 0,05 s.",
    steps: [
      { marks: 1, description: "What is T, the period of rotation (f = 20 Hz)?", options: ["0,05 s", "20,00 s", "0,02 s", "2,00 s"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.1.4",
    text: "The coil starts rotating from the initial position shown in the diagram. Sketch a graph of output voltage versus time for ONE complete rotation of the coil. Indicate the maximum voltage and the relevant time values on the graph.",
    marks: 4, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "A sinusoidal curve starting at 0 V, rising to a peak of 90 V at t = 0,0125 s, back to 0 V at t = 0,025 s, down to a trough of −90 V at t = 0,0375 s, and back to 0 V at t = 0,05 s (one full cycle).",
    marking_notes: "Marking points: correct sinusoidal shape showing one full cycle; curve starts at zero, rising to the first peak; the correct time value(s) shown at the correct position(s); maximum voltage of 90 V (or −90 V) indicated.",
    marking_points: [
      { marks: 1, description: "correct sinusoidal shape with one full cycle shown", keywords: ["one cycle", "sinusoidal"] },
      { marks: 1, description: "curve starts at zero, rising to the first peak", keywords: ["starts at zero", "zero to peak"] },
      { marks: 1, description: "a correct time value shown at the correct position (e.g. 0,025 s or 0,05 s)", keywords: ["0 025", "0 05"] },
      { marks: 1, description: "maximum voltage of 90 V (or −90 V) is indicated", keywords: ["90 v", "maximum voltage"] },
    ],
  },
  {
    number: "9", sub_number: "9.2",
    text: "Wall sockets supply rms voltage and current. A 220 V AC voltage is supplied from a wall socket to an electric kettle having a resistance of 32 Ω. Calculate the average energy dissipated by the kettle in TWO minutes.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Wave = Vrms²Δt/R = (220)²(120)/32 = 181 500 J (accepted range 181 500-181 764 J).",
    marking_notes: "Marking points: formula Wave = Vrms²Δt/R; correct value of Δt (120 s, converting 2 minutes); correct final answer in the range 181 500-181 764 J.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the average energy dissipated?",
        options: ["Wave = Vrms²Δt/R", "Wave = Vrms²/R (no time)", "Wave = Vrms/R", "Wave = Vrms²R"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Δt in seconds (2 minutes)?",
        options: ["120 s", "2 s", "7 200 s", "60 s"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the average energy dissipated?",
        options: ["181 500 J", "1 512,5 J", "3 025 J", "90 750 J"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 10: THE PHOTOELECTRIC EFFECT (14 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "Light is incident on the cathode of a photoelectric cell connected to a battery and a sensitive ammeter. What conclusive evidence about the nature of light is provided by the photoelectric effect?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Light has a particle nature (is quantised).",
    marking_notes: "Accept 'particle nature' (and 'wave nature' as an additional accepted phrase).",
    steps: [
      { marks: 1, description: "What conclusive evidence about the nature of light does the photoelectric effect provide?", options: ["Light has a particle nature (is quantised)", "Light has only a wave nature", "Light travels only in straight lines", "Light can be polarised"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.2",
    text: "The cathode has a work function of 3,42 × 10⁻¹⁹ J. Define the term work function.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The minimum energy (of incident photons) that can eject electrons from a metal/surface.",
    marking_notes: "Must refer to the minimum energy needed to eject electrons from a metal surface.",
    marking_points: [{ marks: 2, description: "minimum energy (of incident photons) needed to eject electrons from a metal surface", keywords: ["minimum energy", "eject electrons"] }],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Light of frequency 5,96 × 10¹⁴ Hz is shone onto the cathode. Calculate the maximum kinetic energy of an electron ejected from the cathode.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W0 + Ek(max), where E = hf: (6,63×10⁻³⁴)(5,96×10¹⁴) = 3,42×10⁻¹⁹ + Ek(max), giving Ek(max) = 5,30×10⁻²⁰ J.",
    marking_notes: "Marking points: formula E = W0 + Ek(max) (hf = hf0 + Ek(max)); correct value of E = hf; correct final answer 5,30×10⁻²⁰ J (5,32×10⁻²⁰ J).",
    steps: [
      {
        marks: 1,
        description: "Which formula applies (E = W0 + Ek(max), i.e. hf = hf0 + Ek(max))?",
        options: ["E = W0 + Ek(max)", "E = W0 − Ek(max)", "E = W0 × Ek(max)", "Ek(max) = W0"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is E, the energy of the incident photon (E = hf)?",
        options: ["3,95×10⁻¹⁹ J", "3,42×10⁻¹⁹ J", "5,30×10⁻²⁰ J", "6,63×10⁻³⁴ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Ek(max)?",
        options: ["5,30×10⁻²⁰ J", "3,42×10⁻¹⁹ J", "3,95×10⁻¹⁹ J", "7,37×10⁻¹⁹ J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.4",
    text: "The ammeter registers a constant current of 0,012 A. Calculate the minimum number of photons of light that strike the cathode in a 10 s period.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "q = IΔt = (0,012)(10) = 0,12 C. n = Q/e = 0,12/(1,6×10⁻¹⁹) = 7,5×10¹⁷ photons (one photon ejects one electron, so the minimum number of photons equals the number of electrons/charge carriers).",
    marking_notes: "Marking points: formula q = IΔt; correct value of q (0,12 C); correct final answer n = 7,5×10¹⁷.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the total charge that flowed in 10 s?",
        options: ["q = IΔt", "q = I/Δt", "q = I + Δt", "q = Δt/I"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total charge q?",
        options: ["0,12 C", "1,2 C", "0,012 C", "120 C"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the minimum number of photons (n = q/e)?",
        options: ["7,5×10¹⁷", "7,5×10¹⁸", "1,92×10⁻²⁰", "4,69×10¹⁷"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.5",
    text: "The intensity of the incident light is now INCREASED. How will this change affect the reading on the ammeter? Choose from INCREASES, DECREASES or REMAINS THE SAME. Explain the answer.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. More photons strike the surface of the metal per unit time (at a higher rate), hence more (photo)electrons are ejected per unit time, resulting in increased current.",
    marking_notes: "Must state 'increases' and explain: more photons strike the surface per unit time, so more electrons are ejected per unit time.",
    marking_points: [
      { marks: 1, description: "states the ammeter reading increases", keywords: ["increases"] },
      { marks: 1, description: "more photons strike the surface of the metal per unit time (at a higher rate)", keywords: ["more photons", "per unit time", "higher rate"] },
      { marks: 1, description: "more (photo)electrons are ejected per unit time, resulting in increased current", keywords: ["more electrons", "ejected", "increased current"] },
    ],
  },
];
