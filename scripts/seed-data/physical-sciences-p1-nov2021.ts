// Real DBE past paper: Physical Sciences (Physics) P1, November 2021, National
// (English).
// Source: single combined PDF (question paper + approved marking guideline)
// fetched from stanmorephysics.com. QP is pages 1-20 of that PDF (17 question
// pages + 3 data-sheet pages, matching the QP cover page's own "This question
// paper consists of 17 pages and 3 data sheets"), memo is pages 21-46 (26
// pages, matching the marking-guidelines cover page's own "This marking
// guidelines consists of 26 pages"). Page-by-page cross-check of question
// numbers/marks against the memo's answers found no stray or mismatched
// pages.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours
// (180 minutes), confirmed off the QP's own cover page. Per-question totals
// transcribed from the QP (Q1=20, Q2=16, Q3=18, Q4=10, Q5=14, Q6=12, Q7=14,
// Q8=19, Q9=15, Q10=12) sum to exactly 150. All 150 marks are included here.
//
// This paper reuses every topic already defined by the Nov 2025 P1 dataset
// (scripts/seed-data/physical-sciences-p1-nov2025.ts) — no new CAPS topic
// appears in this paper that wasn't already covered by that one, so the
// `topics` array below is identical to that file's (topics are upserted by
// key in scripts/seed.ts, so redeclaring them here is safe and required
// since this file is a standalone dataset).
//
// Diagrams (MCQ graphs, circuit diagrams, charge-line diagrams, the
// incline/track/balloon setups, the AC generator sketch, the photoelectric
// graph, etc.) are vector line drawings rendered directly into the page
// content stream, not separate embedded raster images, so they were cropped
// from full-page renders (220dpi) rather than extracted as clean standalone
// images. The site's watermark ("Stanmorephysics.com" + a faint
// succulent-plant photo) appears faintly on a few source pages but was
// cropped out of, or does not overlap, any of the saved images below.
// Purely decorative photos (the small succulent-plant thumbnail that
// appears next to several questions) were skipped — they carry no exam
// content.
//
// Calculation questions (2.3, 2.5, 3.2.1, 3.2.2, 3.2.3, 4.2, 4.3, 5.2, 5.3,
// 5.4, 6.1, 6.4, 7.1.2, 7.1.4, 7.2, 8.3, 8.4, 8.5, 9.4, 9.5, 10.3) use
// `steps` instead of `marking_points`: the student works the problem out on
// paper as normal, then picks the option they got for each mark-earning
// step (formula, intermediate value, final answer) from a few choices,
// rather than typing anything. Distractors are chosen to trap specific real
// errors (wrong formula, sign flip, wrong given value substituted, using
// the wrong branch of an OR-option in the memo), not just arbitrary wrong
// numbers. Non-computational single-answer items (MCQ-choose-a-letter,
// state-a-law, define-a-term, name/identify, INCREASED/DECREASED/NO EFFECT)
// also use `steps` (single-step) rather than `marking_points`, following
// the convention set by the 2024/2025 files, since the memo gives one exact
// accepted answer or a small enumerable set. `marking_points` is reserved
// for 2.2/5.2(FBD)-style free-body-diagram items and other genuinely
// multi-part/open-ended items (e.g. 2.4, 3.1, 6.2, 6.3) where multiple
// creditable phrasings exist.
//
// No FLAG-for-review items were needed for this paper — the memo's answers
// are internally consistent throughout (unlike the 2024 file's Q8.3/Q1.10
// flags), and every diagram the QP references was legible in the source
// render.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2021-p1";

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
  year: 2021,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2022/03/Physical-Science-Grade-12-NSC-November-2021-P1-and-Memo.pdf" as string | null,
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
    text: "Consider the statement below: 'The perpendicular force exerted by a surface on an object in contact with the surface.' Which ONE of the following forces is defined by the statement above? (A) Normal force (B) Resultant force (C) Frictional force (D) Gravitational force",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "A — Normal force (the perpendicular force a surface exerts on an object in contact with it).",
    marking_notes: "Accept only 'A'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Two balls of masses m and 2m are dropped simultaneously from the same height above the ground. Ignore air resistance. When the balls strike the ground, which ONE of the following physical quantities will be the same for both balls? (A) Weight (B) Velocity (C) Momentum (D) Kinetic energy",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "B — Velocity. Both balls fall the same height under the same acceleration (g), so they reach the ground with the same velocity regardless of mass; momentum and kinetic energy both scale with mass and so differ, and weight obviously differs.",
    marking_notes: "Accept only 'B'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 1 }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "The graph below shows how the momentum (p) of an object changes with time (t): a straight line rising from (0 s, 0) to (1 s, 20 kg·m·s⁻¹), falling to (2 s, 10 kg·m·s⁻¹), continuing down to (3 s, -10 kg·m·s⁻¹), then rising steeply back up to (4 s, 20 kg·m·s⁻¹). During which ONE of the following time intervals, measured in seconds, is the magnitude of the net force acting on the object the greatest? (A) 0 to 1 (B) 1 to 2 (C) 2 to 3 (D) 3 to 4",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "D — 3 to 4. The net force equals the gradient of the momentum-time graph; the steepest segment (greatest |Δp/Δt|) is from t = 3 s to t = 4 s, where momentum changes from -10 to 20 kg·m·s⁻¹ (a change of 30 over 1 s).",
    marking_notes: "Accept only 'D'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 3 }],
    image_url: `${IMG}/1.3-momentum-time-graph.png`,
  },
  {
    number: "1", sub_number: "1.4",
    text: "A ball is dropped from a height above a floor. The ball makes an elastic collision with the floor at time t₀ and bounces vertically upwards. Ignore air resistance. Which ONE of the following graphs shows how the total mechanical energy (E_M) of the ball changes with time? (A) a triangle rising from 0 to a peak at t₀ then falling back to 0 at t (B) a constant horizontal line at a fixed E_M value from 0 through t₀ to t (C) a V-shape starting above 0, falling to 0 at t₀, then rising again (asymmetric heights) (D) a V-shape similar to C but with a lower start/end height",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "B — a constant horizontal line. In an elastic collision, total mechanical energy is conserved throughout (ignoring air resistance), so E_M remains constant at all times, including during and after the bounce.",
    marking_notes: "Accept only 'B'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 1 }],
    image_url: `${IMG}/1.4-mechanical-energy-graphs.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "Consider two spectrum diagrams. Diagram 1 represents the spectrum of an element in a laboratory on Earth. Diagram 2 represents the spectrum of the same element from a distant star as observed from Earth, with the absorption lines shifted towards the red (longer-wavelength) end compared to Diagram 1. Which ONE of the following can be deduced from the spectra above? (A) The star is moving towards Earth. (B) The star is at rest relative to Earth. (C) The star is moving away from Earth. (D) Both the star and Earth are moving towards each other.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C — The star is moving away from Earth. The spectral lines in Diagram 2 are shifted towards the red end relative to Diagram 1, a red shift, which indicates the source (star) is moving away from the observer (Earth).",
    marking_notes: "Accept only 'C'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 2 }],
    image_url: `${IMG}/1.5-spectrum-diagrams.png`,
  },
  {
    number: "1", sub_number: "1.6",
    text: "The diagram below shows the field lines for the combined electric field due to two small charged spheres P and Q, with field lines emanating from P, curving across, and entering Q (a dipole pattern). Which ONE of the combinations below correctly shows the polarity of spheres P and Q? (A) P: Negative, Q: Positive (B) P: Negative, Q: Negative (C) P: Positive, Q: Positive (D) P: Positive, Q: Negative",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "D — P: Positive, Q: Negative. Electric field lines point away from positive charges and towards negative charges; since the lines leave P and enter Q, P is positive and Q is negative.",
    marking_notes: "Accept only 'D'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 3 }],
    image_url: `${IMG}/1.6-field-lines-PQ.png`,
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two identical spheres, P and Q, carry charges of +q and -2q respectively. Sphere P exerts an electrostatic force of magnitude F on sphere Q. Which ONE of the following represents the magnitude of the electrostatic force exerted on sphere P by sphere Q? (A) ½F (B) F (C) 2F (D) 4F",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "B — F. By Newton's third law, the electrostatic force sphere Q exerts on sphere P is equal in magnitude (and opposite in direction) to the force P exerts on Q — action-reaction pairs are always equal in magnitude regardless of the individual charge magnitudes.",
    marking_notes: "Accept only 'B'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 1 }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "In the circuit diagram shown below all the resistors are IDENTICAL (resistance R each). Ignore the internal resistance of the cell. The circuit has: a branch with voltmeter V1 in parallel with a resistor R (both in the main loop near the cell); and a parallel combination of two resistors R, with voltmeters V2 (across one R), V3 (across the parallel combination), and V4 (across the whole parallel section) also shown. Which voltmeter will have the HIGHEST reading when switch S is closed? (A) V1 (B) V2 (C) V3 (D) V4",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A — V1. V1 is connected across the single resistor R in series with the parallel combination of two R's (equivalent resistance R/2); since the full resistor R carries the same current as the combination but has twice its resistance, the voltage across it (read by V1) is the highest of the four.",
    marking_notes: "Accept only 'A'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 0 }],
    image_url: `${IMG}/1.8-circuit-voltmeters.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "In which ONE of the following electrical machines is electrical energy converted to mechanical energy? (A) AC generator (B) DC generator (C) AC dynamo (D) DC motor",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "D — DC motor (a motor converts electrical energy into mechanical energy; generators and dynamos do the reverse).",
    marking_notes: "Accept only 'D'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 3 }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "Which ONE of the following combinations correctly links an emission spectrum and an absorption spectrum to the energy transitions of an electron in an atom? (A) Emission: low to high; Absorption: high to low (B) Emission: low to high; Absorption: low to high (C) Emission: high to low; Absorption: high to low (D) Emission: high to low; Absorption: low to high",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "D — Emission: high to low energy levels; Absorption: low to high energy levels. Emission occurs when an electron falls from a higher to a lower energy level, releasing a photon; absorption occurs when an electron absorbs a photon and jumps from a lower to a higher energy level.",
    marking_notes: "Accept only 'D'.",
    steps: [{ marks: 2, description: "Which option is correct?", options: ["A", "B", "C", "D"], correctIndex: 3 }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (16 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "A 20 kg block is placed on a rough surface inclined at 30° to the horizontal. A constant force F, acting parallel to the surface, is applied on the block so that the block moves up the incline at a CONSTANT VELOCITY of 2 m·s⁻¹. A constant kinetic frictional force of 18 N acts on the block. State Newton's First Law in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "A body will remain in its state of rest or motion at constant velocity (uniform motion in a straight line) unless a non-zero resultant/net force acts on it.",
    marking_notes: "Must refer to a body remaining in its state of rest OR motion at constant velocity, unless a non-zero resultant/net force acts on it.",
    marking_points: [{ marks: 2, description: "a body remains at rest or in motion at constant velocity unless a non-zero resultant/net force acts on it", keywords: ["remain", "constant velocity", "resultant force", "net force"] }],
    image_url: `${IMG}/2-incline-block.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram for the block as it moves up the incline at constant velocity.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on the block, all drawn from a single point: the applied force F up the incline, the normal force N perpendicular to the incline surface, kinetic friction fk down the incline (opposing motion), and weight w vertically downward.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: applied force F (up the incline), normal force N (perpendicular to incline), kinetic friction fk (down the incline, opposing motion), weight w (vertically down). Max 4. (The memo also accepts the weight resolved into components w∥ and w⊥ instead of a single w vector.)",
    marking_points: [
      { marks: 1, description: "applied force F (or FA) drawn up the incline", keywords: ["applied force", "f"] },
      { marks: 1, description: "normal force N (or FN) drawn perpendicular to the incline", keywords: ["normal force", "fn"] },
      { marks: 1, description: "kinetic friction fk (or f/Ff/fw) drawn down the incline opposing motion", keywords: ["friction", "fk"] },
      { marks: 1, description: "weight w (or Fg/mg/196 N) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Calculate the magnitude of force F (the block moves up the incline at constant velocity, kinetic friction = 18 N, mass = 20 kg, angle = 30°).",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Taking up the incline as positive, since the block moves at constant velocity, Fnet = 0: F − fk − w∥ = 0, so F − [18 + (20)(9,8)(sin30°)] = 0, giving F = 116 N.",
    marking_notes: "Marking points: Fnet = ma (= 0) set up with F, fk and w∥ as the forces along the incline; correct substitution of fk = 18 N and w∥ = (20)(9,8)(sin30°) = 98 N; correct final answer F = 116 N.",
    steps: [
      {
        marks: 1,
        description: "Which equation applies along the incline, given the block moves at constant velocity?",
        options: ["Fnet = ma = 0, with F, fk and w∥ (= mg sin30°) as the forces along the incline", "Fnet = ma with a = 9,8 m·s⁻²", "F = fk only, ignoring weight", "F = w∥ only, ignoring friction"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is w∥, the component of weight along the incline?",
        options: ["98 N", "196 N", "169,74 N", "88,2 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is F?",
        options: ["116 N", "80 N", "98 N", "18 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "Force F is removed when the block reaches point X on the surface. The block continues to move up the surface and comes to rest momentarily at point Y. Assume that the kinetic frictional force acting on the block remains at 18 N as it moves from point X to point Y. Write down the net force acting on the block as it moves from X to Y.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "116 N, directed down the incline (opposite to the direction of motion) — once F is removed, the remaining forces along the incline are friction (now acting down the incline, since the block still moves up) and the weight component down the incline, which together equal F + fk + w∥ from before minus... using positive marking from 2.3: the net force equals fk + w∥ = 18 + 98 = 116 N, down the incline.",
    marking_notes: "Positive marking from 2.3: the net force from X to Y equals 116 N (= fk + w∥), directed down the incline / opposite to the direction of motion. Accept 'downwards'/'down'/'afwaarts'.",
    marking_points: [
      { marks: 1, description: "116 N (equal in magnitude to F from 2.3, i.e. fk + w∥)", keywords: ["116"] },
      { marks: 1, description: "directed down the incline, opposite to the direction of motion", keywords: ["down the incline", "opposite", "downwards"] },
    ],
  },
  {
    number: "2", sub_number: "2.5",
    text: "Calculate the distance between points X and Y.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Using Fnet = ma (up the incline positive): −116 = 20a, so a = −5,80 m·s⁻². Then using vf² = vi² + 2aΔx with vf = 0 and vi = 2 m·s⁻¹: 0 = (2)² + 2(−5,80)Δx, giving Δx = 0,34 m.",
    marking_notes: "Marking points: Fnet = ma used to find a = −5,80 m·s⁻² (positive marking from 2.4's 116 N); a correct equation of motion (e.g. vf² = vi² + 2aΔx) with vf = 0 and vi = 2 m·s⁻¹; correct final answer Δx = 0,34 m.",
    steps: [
      {
        marks: 1,
        description: "What is the magnitude of the block's deceleration from X to Y (using Fnet = ma with Fnet = 116 N, mass = 20 kg)?",
        options: ["5,80 m·s⁻²", "9,80 m·s⁻²", "2,00 m·s⁻²", "0,34 m·s⁻²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation of motion finds the distance XY, given vi = 2 m·s⁻¹ and vf = 0 at Y?",
        options: ["vf² = vi² + 2aΔx", "vf = vi + aΔt", "Δx = viΔt", "Fnet = ma directly gives distance"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the distance between X and Y?",
        options: ["0,34 m", "0,17 m", "0,69 m", "1,38 m"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (18 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A hot-air balloon is moving upwards at a CONSTANT UNKNOWN speed. Is the hot air balloon in free fall? Choose from YES or NO. Give a reason for the answer.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "No. Gravitational force is not the only force acting on the balloon (there are other forces, e.g. the buoyant/lift force, acting on it) — equivalently, its acceleration is not 9,8 m·s⁻² (it has constant velocity, i.e. zero acceleration), which free fall requires.",
    marking_notes: "Must state 'No' and give a valid reason: gravitational force is not the only force acting on the balloon, OR its acceleration is not 9,8 m·s⁻²/is zero, OR it has constant velocity/no acceleration.",
    marking_points: [
      { marks: 1, description: "states 'No'", keywords: ["no"] },
      { marks: 1, description: "gravitational force is not the only force acting on the balloon, or its acceleration is not 9,8 m/s² (zero), or it moves at constant velocity", keywords: ["not the only force", "constant velocity", "not 9 8"] },
    ],
    image_url: `${IMG}/3-balloon-stones.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "When the balloon is 200 m above the ground, a small stone A is dropped from the balloon. Another small stone B is dropped 5 s later from the balloon while the balloon is still moving upwards at constant velocity. Stone A strikes the ground at a speed of 62,68 m·s⁻¹. Ignore air resistance. Calculate the speed of the hot air balloon.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking upward as positive, using vf² = vi² + 2aΔy for stone A's full 200 m fall: (−62,68)² = vi² + 2(−9,8)(−200), giving vi = 2,96 m·s⁻¹ (this is the initial, upward, velocity of stone A at the moment of release — equal to the balloon's speed at that instant).",
    marking_notes: "Marking points: an equation of motion (e.g. vf² = vi² + 2aΔy) applied to stone A's full fall from release to the ground; correct substitution using vf = 62,68 m·s⁻¹ and Δy = 200 m; correct final answer vi = 2,96 m·s⁻¹ (the balloon's speed, since the stone shares the balloon's velocity at the moment of release).",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to stone A's fall (vf = 62,68 m·s⁻¹ over the full 200 m, initial velocity unknown)?",
        options: ["vf² = vi² + 2aΔy", "vf = vi + aΔt", "Δy = viΔt", "Δy = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the balloon's speed (= stone A's initial velocity at release)?",
        options: ["2,96 m·s⁻¹", "62,68 m·s⁻¹", "9,80 m·s⁻¹", "200,00 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Calculate the time it takes stone A to strike the ground (from the moment it is dropped).",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf = vi + aΔt (upward positive): −62,68 = 2,96 + (−9,8)Δt, giving Δt = 6,70 s.",
    marking_notes: "Formula to calculate Δt (vf = vi + aΔt or equivalent), correct substitution, final answer 6,70 s (accept 6,69 to 6,70 s).",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion gives the time for stone A to fall, using vi = 2,96 m·s⁻¹ and vf = −62,68 m·s⁻¹?",
        options: ["vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt", "Δy = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the time for stone A to strike the ground?",
        options: ["6,70 s", "6,40 s", "0,30 s", "5,70 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "Calculate the distance between the hot-air balloon and stone B at the instant when stone A strikes the ground.",
    marks: 6, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "Stone B has been falling for Δt = 6,70 − 5 = 1,70 s when stone A lands. For stone B: Δy = viΔt + ½aΔt² = 2,96(1,70) + ½(−9,8)(1,70)² = −9,13 m (i.e. it has fallen 9,13 m below its release point). For the balloon over the same 1,70 s: Δy = viΔt + ½aΔt² = 2,96(1,70) + 0 = 5,03 m (it continues rising at constant velocity, so a = 0). The distance between the balloon and stone B = 9,13 + 5,03 = 14,16 m.",
    marking_notes: "Marking points: formula to calculate Δy of stone B; substitution of t = 1,70 s (= 6,70 − 5); substitution to calculate Δy of stone B; substitution to calculate Δy of the balloon; calculating the distance between the balloon and stone B by adding the two displacements; final answer 14,16 m (accept 14,11 to 14,16 m).",
    steps: [
      {
        marks: 1,
        description: "For how long has stone B been falling at the instant stone A lands (stone A's total flight time was 6,70 s; stone B was released 5 s after stone A)?",
        options: ["1,70 s", "5,00 s", "6,70 s", "0,30 s"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "How far below its own release point has stone B fallen in that time (vi = 2,96 m·s⁻¹ upward, a = −9,8 m·s⁻², Δt = 1,70 s)?",
        options: ["9,13 m", "14,16 m", "5,03 m", "16,66 m"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How far has the balloon itself risen in that same 1,70 s (moving at constant velocity 2,96 m·s⁻¹, zero acceleration)?",
        options: ["5,03 m", "9,13 m", "2,96 m", "16,66 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the distance between the balloon and stone B?",
        options: ["14,16 m", "4,10 m", "9,13 m", "5,03 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "On the same set of axes, draw position-time graphs for both the hot-air balloon and stone A from the moment the stone is dropped until it strikes the ground. Use the ground as zero reference. Label your graphs BALLOON and A.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "The balloon's graph is a straight line with a constant positive gradient, starting at 200 m and rising continuously throughout. Stone A's graph starts at the same point (200 m, t = 0), curves (parabolic) rising briefly then falling, reaching maximum height just after release, and returns to 0 m (the ground) at t = 6,70 s; stone A's curve does not start at 0 m.",
    marking_notes: "Marking points: correct shape for stone A, not starting from 0 m; correct shape and correct initial position (200 m) for the hot-air balloon; gradient for the hot-air balloon's line is steeper/higher than stone A's curve until stone A reaches its maximum height; both graphs start at the same position (200 m) and the balloon's graph continues while stone A's ends when it reaches the ground at the same time axis point.",
    marking_points: [
      { marks: 1, description: "correct shape for stone A, not starting from 0 m", keywords: ["stone a", "not starting"] },
      { marks: 1, description: "correct shape and correct initial position for the hot-air balloon (starting at 200 m)", keywords: ["balloon", "200"] },
      { marks: 1, description: "gradient for the balloon is higher/steeper than stone A's until stone A reaches its maximum height", keywords: ["gradient", "higher", "steeper"] },
      { marks: 1, description: "both graphs start at the same position and the same time", keywords: ["same position", "same time", "start"] },
    ],
  },

  // ============ QUESTION 4: MOMENTUM AND IMPULSE (10 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A ball X, of mass 10 kg, is moving eastwards with a velocity of 2 m·s⁻¹. It collides ELASTICALLY with another ball, Y, of mass 2 kg which was moving with an unknown velocity vY. Immediately after the collision, ball X comes to rest and ball Y moves eastwards with a kinetic energy of 36 J. Ignore friction. Explain the meaning of the term elastic collision.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "A collision in which both the total momentum and total kinetic energy are conserved.",
    marking_notes: "Must refer to both total momentum AND total kinetic energy being conserved. If 'total' is omitted: minus 1 mark.",
    marking_points: [{ marks: 2, description: "a collision in which both total momentum and total kinetic energy are conserved", keywords: ["momentum", "kinetic energy", "conserved"] }],
    image_url: `${IMG}/4-balls-collision.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Calculate velocity vY (ball X's initial velocity before collision).",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "First find ball Y's velocity after collision from its kinetic energy: 36 = ½(2)vf², giving vf = 6 m·s⁻¹. Then using conservation of momentum: m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f, so (10)(2) + (2)vY = 0 + (2)(6), giving vY = −4 m·s⁻¹, i.e. 4 m·s⁻¹ west (ball Y was initially moving west, towards ball X).",
    marking_notes: "Marking points: formula EKi = ½mvf² used to find ball Y's final speed (6 m·s⁻¹); conservation of momentum formula (Σpi = Σpf); correct substitution; correct final answer vY = 4 m·s⁻¹ west (accept 'left').",
    steps: [
      {
        marks: 1,
        description: "What is ball Y's speed immediately after the collision, given it has 36 J of kinetic energy and a mass of 2 kg?",
        options: ["6 m·s⁻¹", "18 m·s⁻¹", "36 m·s⁻¹", "3 m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which principle finds vY, ball Y's initial velocity (ball X: 10 kg at 2 m·s⁻¹ before, 0 m·s⁻¹ after; ball Y: 2 kg, unknown before, 6 m·s⁻¹ east after)?",
        options: ["Conservation of momentum: Σpi = Σpf", "Conservation of kinetic energy alone, without momentum", "Newton's second law: Fnet = ma", "Impulse-momentum theorem for ball X alone"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is vY (magnitude and direction)?",
        options: ["4 m·s⁻¹ west", "4 m·s⁻¹ east", "8 m·s⁻¹ west", "2 m·s⁻¹ west"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "The balls were in contact with each other for 0,1 s during the collision. Calculate the magnitude of the force that ball X exerted on ball Y during the collision.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Using the impulse-momentum theorem for ball Y: FnetΔt = m(vf − vi) = 2(6 − (−4)) = 2(10) = 20... Using the memo's approach (with Y's initial velocity as −4 m·s⁻¹ moving west and final as +6 m·s⁻¹ moving east, east positive): FnetΔt = m(vf − vi), Fnet(0,1) = 2{6 − (−4)}, giving Fnet = 200 N.",
    marking_notes: "Formula FnetΔt = Δp = m(vf − vi) (any equivalent form, applied to either ball X or ball Y), correct substitution using Δt = 0,1 s and the velocities from 4.2, correct final answer 200 N.",
    steps: [
      {
        marks: 1,
        description: "Which principle gives the force ball X exerted on ball Y during the 0,1 s collision?",
        options: ["Impulse-momentum theorem: FnetΔt = m(vf − vi)", "Work-energy theorem: Wnet = ΔEk", "Conservation of momentum alone, without force", "F = ma with a found from distance"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the force?",
        options: ["200 N", "20 N", "100 N", "40 N"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (14 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A 2 kg box is released from rest at point P, 5 m above the ground. It slides down a smooth frictionless curved track PQ, then moves 10 m on a rough horizontal surface before striking a barrier at point R. State the principle of conservation of mechanical energy in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The total mechanical energy in an isolated system remains constant (the same). (Equivalently: the sum of the kinetic and gravitational potential energies in an isolated system remains constant/the same.)",
    marking_notes: "Must refer to total mechanical energy (or the sum of kinetic and gravitational potential energy) in an isolated system remaining constant.",
    marking_points: [{ marks: 2, description: "total mechanical energy in an isolated system remains constant", keywords: ["total mechanical energy", "remains constant", "isolated system"] }],
    image_url: `${IMG}/5-track-PQR.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Use the PRINCIPLE OF CONSERVATION OF MECHANICAL ENERGY to calculate the speed of the box when it reaches point Q.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "EP/mech at top (P) = EQ/mech at bottom (Q): (mgh + ½mv²)P = (mgh + ½mv²)Q, so (2)(9,8)(5) + 0 = 0 + ½(2)vf², giving vf = 9,90 m·s⁻¹.",
    marking_notes: "Formula setting mechanical energy at P equal to mechanical energy at Q (mass may be omitted during substitution), correct substitution, correct final answer 9,90 m·s⁻¹ (accept 9,899).",
    steps: [
      {
        marks: 1,
        description: "Which principle applies from P to Q (smooth, frictionless track)?",
        options: ["Conservation of mechanical energy: (Ep + Ek)P = (Ep + Ek)Q", "Conservation of momentum", "Work-energy theorem with friction: Wnc = ΔEk + ΔEp", "Newton's second law: Fnet = ma"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the box's speed at Q?",
        options: ["9,90 m·s⁻¹", "7,00 m·s⁻¹", "49,00 m·s⁻¹", "4,95 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "The box passes point Q and moves 10 m on a rough horizontal surface before striking a barrier at point R at a speed of 4 m·s⁻¹. Use ENERGY PRINCIPLES to calculate the magnitude of the average frictional force acting on the box as it moves from Q to R.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = ΔEk (horizontal motion, so ΔEp = 0): Wf = ½mvf² − ½mvi², so f(10)cos180° = ½(2)(4² − 9,90²), giving f = 8,2 N.",
    marking_notes: "Marking points: non-conservative/net work-energy formula (Wnet = ΔEk, or Wnc = ΔEk + ΔEp with ΔEp = 0); correct substitution using vi = 9,90 m·s⁻¹ (positive marking from 5.2) and vf = 4 m·s⁻¹; correct final answer f = 8,2 N.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies from Q to R (horizontal surface, friction present)?",
        options: ["Work-energy theorem: Wnet = ΔEk (or Wnc = ΔEk + ΔEp with ΔEp = 0)", "Conservation of mechanical energy (no friction)", "Conservation of momentum", "Impulse-momentum theorem"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the change in kinetic energy from Q to R (vi = 9,90 m·s⁻¹, vf = 4 m·s⁻¹, m = 2 kg)?",
        options: ["−57,02 J", "57,02 J", "−8,00 J", "8,00 J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the average frictional force?",
        options: ["8,2 N", "5,7 N", "16,0 N", "2,9 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "The barrier exerts an impulse of 14 N·s to the LEFT on the box when the box strikes the barrier. Calculate the change in kinetic energy of the box after striking the barrier.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Taking left as negative: FnetΔt = Δp = m(vf − vi), so −14 = 2(vf − 4), giving vf = −3 m·s⁻¹ (i.e. 3 m·s⁻¹ to the left, the box rebounds). Then ΔEk = ½mvf² − ½mvi² = ½(2)[(−3)² − 4²] = −7 J.",
    marking_notes: "Marking points: impulse-momentum theorem (FnetΔt = Δp = m(vf − vi)) used to find vf after the collision; correct substitution of the −14 N·s impulse and vi = 4 m·s⁻¹; formula ΔEk = ½mvf² − ½mvi²; correct final answer ΔEk = −7 J (also accept −9 J, which results from taking the box's velocity after the bounce as 0 m·s⁻¹ with an equally valid alternative reading of the memo).",
    steps: [
      {
        marks: 1,
        description: "Which principle finds the box's velocity after striking the barrier (impulse = −14 N·s, taking left as negative, vi = +4 m·s⁻¹ before impact)?",
        options: ["Impulse-momentum theorem: FnetΔt = m(vf − vi)", "Work-energy theorem: Wnet = ΔEk", "Conservation of momentum for an isolated system", "Newton's second law with a given acceleration"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the box's velocity immediately after striking the barrier?",
        options: ["3 m·s⁻¹ left (−3 m·s⁻¹)", "3 m·s⁻¹ right (+3 m·s⁻¹)", "7 m·s⁻¹ left", "4 m·s⁻¹ left"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the change in kinetic energy of the box after striking the barrier?",
        options: ["−7 J", "−9 J", "7 J", "−1 J"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (12 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "The siren of a stationary ambulance emits sound waves at a constant frequency of 680 Hz. A man is standing with a detector that records the wavelength of the sound emitted by the siren. The speed of sound in air is 340 m·s⁻¹. Calculate the wavelength of the detected sound.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Using v = fλ: 340 = 680λ, giving λ = 0,5 m.",
    marking_notes: "Formula v = fλ, correct substitution, correct final answer λ = 0,5 m.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the speed of sound, frequency and wavelength?",
        options: ["v = fλ", "v = f/λ", "v = f + λ", "f = v + λ"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the wavelength of the detected sound (ambulance stationary)?",
        options: ["0,5 m", "2,0 m", "340,0 m", "680,0 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "The ambulance now moves at a constant speed along the road TOWARDS the man. The detector now records the wavelength of the sound, which differs from the previous reading by 0,05 m. State the Doppler effect.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The change in frequency/pitch/wavelength of the sound detected by a listener because the sound source and the listener have different velocities relative to the medium of sound propagation. (Equivalently: an apparent change in observed/detected frequency/pitch/wavelength as a result of the relative motion between a source and an observer/listener.)",
    marking_notes: "Must refer to a change in (detected) frequency/pitch/wavelength as a result of relative motion between the source and the listener/observer.",
    marking_points: [{ marks: 2, description: "a change in frequency/pitch/wavelength due to relative motion between a source and a listener", keywords: ["change in frequency", "relative motion", "source"] }],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "How would the distance between the wave fronts have changed when the ambulance approached the detector compared to when the ambulance was stationary? Choose from INCREASED, DECREASED or NO CHANGE.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Decreased — as the source moves towards the observer, successive wave fronts are emitted closer together, compressing the wavelength (distance between wave fronts).",
    marking_notes: "Accept only 'Decreased'.",
    marking_points: [{ marks: 1, description: "decreased", keywords: ["decreased"] }],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "How would the frequency of the detected waves have changed when the ambulance approached the detector compared to when the ambulance was stationary? Choose from INCREASED, DECREASED or NO CHANGE.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Increased — a decrease in the detected wavelength (as the source approaches) corresponds to an increase in the detected frequency (v = fλ, with v constant).",
    marking_notes: "Accept only 'Increased'.",
    marking_points: [{ marks: 1, description: "increased", keywords: ["increased"] }],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Calculate the speed of the ambulance (the detected wavelength while approaching differs from the stationary reading of 0,5 m by 0,05 m, i.e. the new detected wavelength is 0,45 m; speed of sound = 340 m·s⁻¹, source frequency = 680 Hz).",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Using fL = v/(v − vs) × fs, or equivalently fL = v/λL: fL = 340/0,45 = 755,56 Hz. Then 755,56 = [340/(340 − vs)](680), giving vs = 34 m·s⁻¹ (accept 33,67 to 34,04 m·s⁻¹).",
    marking_notes: "Marking points: formula fL = v/(v ± vs) × fs (or fL = v/λL) used to find the detected frequency fL; correct substitution using λL = 0,45 m to find fL = 755,56 Hz; correct Doppler formula for a source approaching a stationary listener; correct substitution; correct final answer vs = 34 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "What is fL, the frequency detected while the ambulance approaches (using v = fλ with the new detected wavelength λL = 0,45 m)?",
        options: ["755,56 Hz", "680,00 Hz", "612,00 Hz", "340,00 Hz"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which Doppler formula applies (ambulance approaching a stationary listener)?",
        options: ["fL = v/(v − vs) × fs", "fL = v/(v + vs) × fs", "fL = (v + vs)/v × fs", "fL = v/(v − vs)² × fs"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is vs, the speed of the ambulance?",
        options: ["34 m·s⁻¹", "45 m·s⁻¹", "17 m·s⁻¹", "68 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (14 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "A small neutral sphere acquires a charge of −1,95 × 10⁻⁶ C. Were electrons ADDED TO or REMOVED FROM the sphere?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Added — the sphere gained a negative charge, which means it gained extra electrons (electrons carry negative charge).",
    marking_notes: "Accept only 'Added'.",
    marking_points: [{ marks: 1, description: "added", keywords: ["added"] }],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Calculate the number of electrons which were added or removed (charge = −1,95 × 10⁻⁶ C).",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "n = Q/qe = (−1,95 × 10⁻⁶)/(−1,6 × 10⁻¹⁹) = 1,22 × 10¹³ electrons.",
    marking_notes: "Formula n = Q/qe, correct substitution (ignore signs of the charges), correct final answer 1,22 × 10¹³ (accept 1,21875 × 10¹³).",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the number of electrons to the charge?",
        options: ["n = Q/qe", "n = Q × qe", "n = qe/Q", "Q = n + qe"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the number of electrons?",
        options: ["1,22 × 10¹³", "1,22 × 10¹⁹", "3,12 × 10⁻²⁵", "1,60 × 10⁻¹⁹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Define the term electric field at a point.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The (electrostatic) force experienced per unit positive charge placed at that point. (An electric field itself is a region of space in which an electric charge experiences a force.)",
    marking_notes: "Must refer to the (electrostatic) force experienced per unit positive charge placed at that point.",
    marking_points: [{ marks: 2, description: "the force experienced per unit positive charge placed at that point", keywords: ["force", "per unit", "positive charge"] }],
  },
  {
    number: "7", sub_number: "7.1.4",
    text: "Calculate the magnitude of the electric field at a point 0,5 m from the centre of the charged sphere (charge = −1,95 × 10⁻⁶ C).",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = kQ/r² = (9 × 10⁹)(1,95 × 10⁻⁶)/(0,5)² = 7,02 × 10⁴ N·C⁻¹.",
    marking_notes: "Formula E = kQ/r², correct substitution, correct final answer 7,02 × 10⁴ N·C⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "F = kQ1Q2/r²", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the electric field at that point?",
        options: ["7,02 × 10⁴ N·C⁻¹", "3,51 × 10⁴ N·C⁻¹", "1,75 × 10⁵ N·C⁻¹", "7,02 × 10³ N·C⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Two point charges, q1 and q2, are fixed 0,02 m apart. The magnitude of charges q1 and q2 is the same and q1 is NEGATIVELY charged. The small charged sphere with the charge of −1,95 × 10⁻⁶ C is placed at point P, 0,03 m east of charge q2, as shown in the diagram. The sphere at point P experiences a net electrostatic force of 1,38 N west. Calculate the magnitude of the charge on q2.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "FE(net) = Fq2 + Fq1 (with directions accounted for): 1,38 = [kq2(1,95×10⁻⁶)/(0,03)²] − [kq1(1,95×10⁻⁶)/(0,05)²] (q2 repels the negative sphere P towards P i.e. west since q2 is negative like P... using the memo's substitution with q1 = q2 = q): 1,38 = (9×10⁹)(1,95×10⁻⁶)q/(0,03)² − (9×10⁹)(1,95×10⁻⁶)q/(0,05)², giving q2 = 1,11 × 10⁻⁷ C.",
    marking_notes: "Marking points: Coulomb's Law formula; correct substitution for the force due to q1 OR q2 into kQ1Q2/r²; correct substitution of 1,38 N for the net force; subtracting (vector addition of) the two electrostatic forces; correct final answer 1,11 × 10⁻⁷ C (accept 1,106 × 10⁻⁷ C).",
    steps: [
      {
        marks: 1,
        description: "Which law gives the force between two point charges?",
        options: ["Coulomb's Law: F = kQ1Q2/r²", "E = kQ/r²", "F = qE", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation correctly combines the forces from q1 (0,05 m from P) and q2 (0,03 m from P) to equal the net force of 1,38 N on P?",
        options: ["FE(net) = Fq2 + Fq1 (accounting for their opposite directions, since q1 is negative and q2's sign is unknown)", "FE(net) = Fq2 − Fq1 with both forces in the same direction", "FE(net) = Fq1 × Fq2", "FE(net) = Fq1 only, ignoring q2"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the magnitude of charge q2?",
        options: ["1,11 × 10⁻⁷ C", "2,22 × 10⁻⁷ C", "5,55 × 10⁻⁸ C", "1,95 × 10⁻⁶ C"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-q1q2P.png`,
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (19 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "The battery in the circuit shown below has an emf of 12 V and an unknown internal resistance r. The resistance of the connecting wires and the ammeter is negligible. Switch S is OPEN. Write down the reading on voltmeter V1.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "12 V — with switch S open, no current flows, so there is no voltage drop across the internal resistance r or resistor X; V1 (across the battery terminals) reads the full emf.",
    marking_notes: "Accept only '12 V'.",
    marking_points: [{ marks: 1, description: "12 V", keywords: ["12"] }],
    image_url: `${IMG}/8-circuit.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Write down the reading on voltmeter V2 (switch S still OPEN).",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "0 V — with switch S open, no current flows anywhere in the circuit, so there is no voltage drop across the 6 Ω resistor that V2 is connected across.",
    marking_notes: "Accept only '0 (V)'.",
    marking_points: [{ marks: 1, description: "0 V", keywords: ["0"] }],
  },
  {
    number: "8", sub_number: "8.2",
    text: "Define the term power.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The rate at which work is done or energy is expended/transferred.",
    marking_notes: "Must refer to the rate at which work is done or energy is expended/transferred.",
    marking_points: [{ marks: 2, description: "the rate at which work is done or energy is transferred", keywords: ["rate", "work is done", "energy"] }],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Switch S is now CLOSED. The reading on the ammeter is 1,2 A and the power dissipated in resistor X is 5,76 W. Calculate the resistance of resistor X.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = I²R, so 5,76 = (1,2)²R, giving R = 4 Ω.",
    marking_notes: "Formula P = I²R (or an equivalent route via P = VI then V = IR), correct substitution, correct final answer R = 4 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the power dissipated in X, the current through it, and its resistance?",
        options: ["P = I²R", "P = VI only, without finding V first", "P = V²/R directly without finding V", "P = IR"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the resistance of resistor X?",
        options: ["4 Ω", "8 Ω", "2 Ω", "6,91 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.4",
    text: "Calculate the total EXTERNAL resistance of the circuit (resistor X = 4 Ω in series with a 2,4 Ω resistor, which is in series with a parallel combination of two 6 Ω resistors).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "The two 6 Ω resistors in parallel: Rp = R1R2/(R1+R2) = (6)(8,4)/(6+8,4)... using the memo's grouping (2,4 Ω in series with one 6 Ω branch, giving 8,4 Ω, in parallel with the other 6 Ω branch): Rp = (6)(8,4)/(6+8,4) = 3,5 Ω. Then RT = Rp + 4 = 3,5 + 4 = 7,5 Ω.",
    marking_notes: "Marking points: parallel-resistance formula applied to the two parallel branches (one being 6 Ω, the other the 2,4 Ω resistor in series with the second 6 Ω, i.e. 8,4 Ω); correct substitution giving Rp = 3,5 Ω; adding resistor X (4 Ω) in series to get RT = 7,5 Ω.",
    steps: [
      {
        marks: 1,
        description: "What is the combined resistance of the parallel section (one branch = 6 Ω; the other branch = 2,4 Ω + 6 Ω = 8,4 Ω, in parallel with the first)?",
        options: ["3,5 Ω", "7,2 Ω", "14,4 Ω", "2,4 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total external resistance RT (adding resistor X = 4 Ω in series)?",
        options: ["7,5 Ω", "10,4 Ω", "3,5 Ω", "11,5 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Calculate the reading on voltmeter V2 (switch S closed, ammeter reads 1,2 A, V2 is across one of the 6 Ω resistors in the parallel section).",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Vp (across the parallel section) = IRp = (1,2)(3,5) = 4,2 V. The current through the branch containing V2's 6 Ω resistor: I = V/R = 4,2/8,4 = 0,5 A. Then V2 = IR = (0,5)(6) = 3 V.",
    marking_notes: "Marking points: formula V = IR used to calculate Vp (the voltage across the parallel section); substitution to calculate Vp = 4,2 V; substitution to calculate the branch current or ratio of branch resistances; substitution to calculate V2; final answer V2 = 3 V.",
    steps: [
      {
        marks: 1,
        description: "What is Vp, the voltage across the whole parallel section (I = 1,2 A, Rp = 3,5 Ω from 8.4)?",
        options: ["4,2 V", "3,5 Ω × 1,2 = 4,2 V (same)", "7,5 V", "2,4 V"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the current through the branch that V2's 6 Ω resistor is part of (that branch's total resistance is 2,4 + 6 = 8,4 Ω)?",
        options: ["0,5 A", "0,7 A", "1,2 A", "0,18 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the reading on V2?",
        options: ["3 V", "4,2 V", "1,2 V", "4,8 V"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.6",
    text: "A length of wire of negligible resistance is used to connect point P to point Q in the circuit. How will the reading on voltmeter V1 be affected? Choose from INCREASES, DECREASES or NO EFFECT. Explain the answer.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases. Connecting P to Q with a zero-resistance wire short-circuits resistor X and the 2,4 Ω resistor (and effectively changes the parallel network), so the total external resistance decreases; the current from the battery therefore increases, which increases the internal voltage drop ('lost volts') across r, and so the external (terminal) voltage — which is what V1 reads — decreases.",
    marking_notes: "Must state 'Decreases' and explain using: total resistance decreases; current increases; internal voltage ('lost volts') increases; therefore external voltage (read by V1) decreases. (Do not penalise if 'total' is omitted.)",
    marking_points: [
      { marks: 1, description: "states the reading decreases", keywords: ["decreases"] },
      { marks: 1, description: "total resistance decreases", keywords: ["resistance decreases", "total resistance"] },
      { marks: 1, description: "current increases", keywords: ["current increases"] },
      { marks: 1, description: "internal voltage / lost volts increases, so external voltage (read by V1) decreases", keywords: ["internal voltage", "lost volts", "external voltage decreases"] },
    ],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (15 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A simplified diagram of an AC generator connected to a 25 Ω resistor is shown below. The coil rotates anticlockwise. Name the component that distinguishes this generator from a DC generator.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Slip rings (as opposed to a split-ring/slip-ring commutator in a DC generator).",
    marking_notes: "Accept 'slip rings' or 'split ring/slip ring commutator'.",
    marking_points: [{ marks: 1, description: "slip rings", keywords: ["slip rings"] }],
    image_url: `${IMG}/9-generator.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "In which direction will the induced current flow in section XY of the coil? Choose from X to Y OR Y to X.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Y to X — applying the right-hand rule (or Faraday's law) to the coil rotating anticlockwise in the field between the N and S poles as shown, the induced current in section XY flows from Y to X.",
    marking_notes: "Accept only 'Y to X'.",
    marking_points: [{ marks: 2, description: "Y to X", keywords: ["y to x"] }],
  },
  {
    number: "9", sub_number: "9.3",
    text: "The graph below shows the output voltage of the generator for one cycle of rotation of the coil: a sine wave with amplitude 100 V, reaching a peak at t = 0,025 s and completing one cycle by t = 0,1 s. Define the term rms potential difference.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "The AC potential difference which dissipates the same amount of energy as an equivalent DC potential difference. (Equivalently, the DC potential difference which dissipates the same amount of energy as an equivalent AC potential difference.)",
    marking_notes: "Must refer to the AC (or DC) potential difference that dissipates the same amount of energy as an equivalent DC (or AC) potential difference.",
    marking_points: [{ marks: 2, description: "the AC potential difference that dissipates the same energy as an equivalent DC potential difference", keywords: ["dissipates the same", "energy", "equivalent"] }],
    image_url: `${IMG}/9-output-voltage-graph.png`,
  },
  {
    number: "9", sub_number: "9.4",
    text: "Calculate the rms current in the circuit (Vmax = 100 V, R = 25 Ω).",
    marks: 4, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Vrms = Vmax/√2 = 100/√2 = 70,71 V. Then Irms = Vrms/R = 70,71/25 = 2,83 A.",
    marking_notes: "Marking points: formula Vrms = Vmax/√2 (or Imax = Vmax/R then Irms = Imax/√2, or Pave = Vrms²/R); correct substitution to find Vrms = 70,71 V (or Imax = 4 A); correct final answer Irms = 2,83 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula finds Vrms from Vmax = 100 V?",
        options: ["Vrms = Vmax/√2", "Vrms = Vmax × √2", "Vrms = Vmax/2", "Vrms = Vmax²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Vrms?",
        options: ["70,71 V", "50,00 V", "100,00 V", "141,42 V"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Irms (using Irms = Vrms/R with R = 25 Ω)?",
        options: ["2,83 A", "4,00 A", "2,00 A", "0,35 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.5",
    text: "Calculate the average power dissipated in the 25 Ω resistor.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Pave = Vrms²/R = (70,71)²/25 = 200,00 W. (Equivalently, Pave = Irms²R = (2,83)²(25) ≈ 200 W.)",
    marking_notes: "Formula Pave = Vrms²/R (or Pave = Vrms·Irms, or Pave = Irms²R, positive marking from 9.4), correct substitution, correct final answer ≈ 200 W.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the average power dissipated, using rms values?",
        options: ["Pave = Vrms²/R (or equivalently Irms²R or Vrms·Irms)", "Pave = Vmax²/R directly without converting to rms", "Pave = Vrms/R", "Pave = Vrms × R"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the average power dissipated in the 25 Ω resistor?",
        options: ["200 W", "400 W", "100 W", "283 W"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.6",
    text: "The speed of rotation of the coil in the generator is now DOUBLED. Copy the set of axes below in your ANSWER BOOK and sketch the graph of output voltage versus time for 0,1 s.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "The new graph shows 4 complete sine-wave cycles in the same 0,1 s (double the frequency, so double the number of cycles), with the same peak amplitude of 100 V (amplitude depends on the field strength and number of coil turns, not rotation speed... per the memo, amplitude is unchanged at ±100 V) and a period of 0,025 s.",
    marking_notes: "Marking points: correct new period (0,025 s, i.e. double the number of cycles — 4 cycles — in the same 0,1 s); same peak amplitude of 100 V as before; correctly shaped sine curve.",
    marking_points: [
      { marks: 1, description: "4 complete cycles shown in the 0,1 s window (double the original frequency)", keywords: ["4 cycles", "double"] },
      { marks: 1, description: "new period of 0,025 s", keywords: ["0 025", "period"] },
      { marks: 1, description: "same peak amplitude of 100 V as the original graph", keywords: ["100", "amplitude"] },
    ],
  },

  // ============ QUESTION 10: THE PHOTOELECTRIC EFFECT (12 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "The relationship between frequency (f) and maximum kinetic energy (Ek(max)) of photoelectrons emitted from two cathodes, M and N, of different photoelectric cells is investigated. The graphs below (f vs Ek(max)) have been obtained from the results: both straight lines with the same gradient, M with a y-intercept of 10,40 × 10¹⁴ Hz, N with a y-intercept of 5,16 × 10¹⁴ Hz, and both lines meeting the vertical dashed line at Ek(max) = 23,01 × 10⁻¹⁹ J, where M's line reaches fx. Define the term threshold frequency.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The minimum frequency of light needed to eject electrons from a metal/surface.",
    marking_notes: "Must refer to the minimum frequency of light needed to eject electrons from a metal surface.",
    marking_points: [{ marks: 2, description: "the minimum frequency of light needed to eject electrons from a metal surface", keywords: ["minimum frequency", "eject electrons"] }],
    image_url: `${IMG}/10-photoelectric-graph.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "How does the maximum kinetic energy of photoelectrons emitted from cathode N compare to the maximum kinetic energy of those emitted from cathode M when light of a frequency greater than 10,40 × 10¹⁴ Hz is shone on each of the cathodes? Choose from GREATER THAN, SMALLER THAN or EQUAL TO.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Greater than — for light above both cathodes' threshold frequencies, cathode N (with the lower threshold/work function) produces photoelectrons with greater maximum kinetic energy than cathode M, since at any given frequency the vertical gap between the lines (N's line is lower, i.e. shows more Ek(max) for the same f on this f-vs-Ek(max) axes layout) favours N.",
    marking_notes: "Accept only 'Greater than'.",
    marking_points: [{ marks: 2, description: "greater than", keywords: ["greater than"] }],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Calculate the value of frequency fx indicated on the graph (where both M's and N's lines are evaluated at Ek(max) = 23,01 × 10⁻¹⁹ J, and M's threshold frequency is 10,40 × 10¹⁴ Hz).",
    marks: 5, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Using the photoelectric equation E = W₀ + Ek(max), i.e. hf = hf₀ + Ek(max): fx = (1/6,63×10⁻³⁴)(23,01×10⁻¹⁹) + 10,40×10¹⁴ = 4,51 × 10¹⁵ Hz.",
    marking_notes: "Marking points: formula E = W₀ + Ek(max) (or hf = hf₀ + Ek(max)); correct substitution of Ek(max) = 23,01×10⁻¹⁹ J; correct substitution of f₀ = 10,40×10¹⁴ Hz; correct substitution of Planck's constant; correct final answer fx = 4,51 × 10¹⁵ Hz (45,1 × 10¹⁴ Hz).",
    steps: [
      {
        marks: 1,
        description: "Which equation relates the photon energy, the work function (threshold energy), and the maximum kinetic energy of the photoelectron?",
        options: ["E = W₀ + Ek(max) (i.e. hf = hf₀ + Ek(max))", "E = W₀ − Ek(max)", "E = W₀ × Ek(max)", "Ek(max) = W₀ only, ignoring E"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is W₀ (= hf₀), the work function for cathode M, using f₀ = 10,40 × 10¹⁴ Hz?",
        options: ["6,90 × 10⁻¹⁹ J", "23,01 × 10⁻¹⁹ J", "1,66 × 10⁻¹⁸ J", "4,51 × 10⁻¹⁹ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is fx?",
        options: ["4,51 × 10¹⁵ Hz", "3,47 × 10¹⁵ Hz", "1,04 × 10¹⁵ Hz", "2,30 × 10¹⁵ Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.4.1",
    text: "The experiment is repeated for cathode M using light of frequency fx, but of higher intensity. How will the y-intercept of the graph be affected? Choose from INCREASES, DECREASES or NO EFFECT.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "No effect — the y-intercept (threshold frequency) depends only on the metal (cathode) used, not on the intensity of the incident light.",
    marking_notes: "Accept only 'No effect'.",
    marking_points: [{ marks: 1, description: "no effect", keywords: ["no effect"] }],
  },
  {
    number: "10", sub_number: "10.4.2",
    text: "How will the number of photoelectrons emitted per unit time be affected by the higher intensity? Choose from INCREASES, DECREASES or NO EFFECT.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Increases — higher intensity means more photons strike the cathode per unit time, ejecting more photoelectrons per unit time.",
    marking_notes: "Accept only 'Increases'.",
    marking_points: [{ marks: 1, description: "increases", keywords: ["increases"] }],
  },
  {
    number: "10", sub_number: "10.4.3",
    text: "How will the maximum kinetic energy of the emitted photoelectrons be affected by the higher intensity? Choose from INCREASES, DECREASES or NO EFFECT.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "No effect — maximum kinetic energy of photoelectrons depends on the frequency of the incident light (and the cathode's work function), not on its intensity.",
    marking_notes: "Accept only 'No effect'.",
    marking_points: [{ marks: 1, description: "no effect", keywords: ["no effect"] }],
  },
];
