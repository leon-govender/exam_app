// Real DBE past paper: Physical Sciences (Physics) P1, November 2016, National
// (English).
// Source: single combined PDF (question paper + marking memorandum) fetched
// from stanmorephysics.com (.scratch_pdfs/qpmemo2016.pdf, 38 pages total).
// QP is pages 1-16 (cover page confirms "PHYSICAL SCIENCES: PHYSICS (P1)",
// "NOVEMBER 2016", "MARKS: 150", "TIME: 3 hours", 16 content pages + 3 data
// sheets). Pages 17-19 are the three data sheets, and page 20 is a blank
// "Copyright reserved/Please turn over" transition page with no question
// content. The marking memorandum begins on page 21 ("QUESTION 1/VRAAG 1"
// under the "NSC/NSS - Memorandum" header) and runs to page 38 ("TOTAL:
// 150" at the end of Question 10's memo). Page-by-page cross-check of every
// question number and mark allocation in the QP against the memo's answers
// found no stray or mismatched pages — the QP/memo split and numbering are
// clean, with no gaps or duplicated question numbers.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here (20 + 18 + 11 + 13 + 13 + 13 + 17 + 21 +
// 11 + 13 = 150).
//
// This paper reuses every topic already defined by the Nov 2025 P1 dataset
// (scripts/seed-data/physical-sciences-p1-nov2025.ts) — no new CAPS topic
// appears in this paper that wasn't already covered by that one, so the
// `topics` array below is identical to that file's (topics are upserted by
// key in scripts/seed.ts, so redeclaring them here is safe and required
// since this file is a standalone dataset).
//
// Calculation questions (2.2, 2.3, 2.4.1, 2.4.2, 3.2.1, 3.2.2, 4.2.1, 4.2.2,
// 4.2.3, 5.1.1, 5.1.2, 5.3, 6.1.2, 6.1.3, 7.1.4, 7.2.2, 8.1.4, 8.1.5, 8.1.6,
// 8.2.1, 8.2.2, 9.2.1, 9.2.2, 10.2.1) use `steps` instead of `marking_points`:
// the student works the problem out on paper as normal, then picks the
// option they got for each mark-earning step (formula, intermediate value,
// final answer) from a few choices, rather than typing anything. Distractors
// are chosen to trap specific real errors (wrong formula, sign flip, wrong
// given value, swapped masses/charges, forgetting a square, using the wrong
// branch of a circuit), not just arbitrary wrong numbers.
//
// Non-computational short-answer parts (define a term, state a law, name an
// effect, a plain "write down" one-word answer) also use `steps` (single- or
// multi-step small-option MCQs), matching the repo-wide convention of
// preferring `steps` over `marking_points` wherever the memo accepts one
// exact/enumerable answer. `marking_points` is reserved for genuinely
// open-ended multi-clause explanations (e.g. 2.3's free-body diagram, 7.2.1's
// field-line sketch, 9.1.1's AC/DC reasoning) that don't collapse cleanly
// into a small multiple-choice pick.
//
// Diagrams: this paper's diagrams are vector line drawings rendered directly
// into the page content stream (not separate embedded raster images), so
// they were cropped from full-page 220 DPI renders rather than extracted as
// clean standalone images. The site's watermark ("Downloaded from
// Stanmorephysics.com") appears faintly at the top of several source pages;
// it was cropped out of the diagram images below and doesn't obscure any
// exam content. The ball-drop diagram for Question 3 (a building with a ball
// and a "20 m" height arrow) is purely decorative — the 20 m height is
// already given in the question text — so it was skipped per the task
// instructions. The toaster/kettle circuit diagram for 9.2 and the 3-D
// generator illustration for 9.1 are included since they are genuine circuit
// diagrams, even though the former's numeric values are also stated in text.
//
// FLAG for review: Question 8.2.1 asks students to calculate "the value of
// X", where X is the power rating of a small electric motor ("rated X watts,
// 3 volts"). The official memo computes X via P = Fv = mgv = (0,35)(9,8)(0,4)
// = 1,37 W, i.e. it derives the motor's actual *mechanical output* power
// (lifting a 0,35 kg mass at a constant 0,4 m/s) and equates that directly to
// the motor's rated power. This silently assumes the motor is 100% efficient
// (no heat/sound losses), which is also explicitly stated as a given
// assumption in the question ("Assume there is no energy conversion into
// heat and sound"), so the memo's approach is consistent with the question's
// stated assumptions. Transcribed faithfully as given.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2016-p1";

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
  year: 2016,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2020/10/Physical-Sciences-grade-12-Nov-2016-P1-and-Memo.pdf" as string | null,
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
    text: "The tendency of an object to remain at rest or to continue in its uniform motion in a straight line is known as ... (A) inertia. (B) acceleration. (C) Newton's Third Law. (D) Newton's Second Law.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "A — inertia (the property of an object that resists a change in its state of rest or uniform motion).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The mass of an astronaut on Earth is M. At a height equal to twice the radius of the Earth, the mass of the astronaut will be ... (A) ¼M (B) ⅑M (C) M (D) 2M",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "C — M. Mass is an intrinsic property of an object and does not change with position or gravitational field strength (only weight changes).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "An object is thrown vertically upwards from the ground. Which ONE of the following is CORRECT regarding the direction of the acceleration of the object as it moves upwards and then downwards? Ignore the effects of air resistance. (A) Object moving upwards: Downwards; Object moving downwards: Upwards (B) Object moving upwards: Upwards; Object moving downwards: Downwards (C) Object moving upwards: Downwards; Object moving downwards: Downwards (D) Object moving upwards: Upwards; Object moving downwards: Upwards",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "C — Downwards; Downwards. The acceleration due to gravity is constant in magnitude and direction (downwards) throughout the motion, regardless of whether the object is moving up or down.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "A person drops a glass bottle onto a concrete floor from a certain height and the bottle breaks. The person then drops a second, identical glass bottle from the same height onto a thick, woollen carpet, but the bottle does not break. Which ONE of the following is CORRECT for the second bottle compared to the first bottle for the same momentum change? (A) Average force on second bottle: Larger; Time of contact with carpet: Smaller (B) Average force on second bottle: Smaller; Time of contact with carpet: Smaller (C) Average force on second bottle: Larger; Time of contact with carpet: Larger (D) Average force on second bottle: Smaller; Time of contact with carpet: Larger",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "D — Average force: Smaller; Time of contact: Larger. For the same momentum change (impulse), a longer contact time with the soft carpet means a smaller average force is needed (FΔt = Δp, constant).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "A block of mass m is released from rest from the top of a frictionless inclined plane QR, as shown below. The total mechanical energy of the block is EQ at point Q and ER at point R. The kinetic energy of the block at points Q and R is KQ and KR respectively. Which ONE of the statements regarding the total mechanical energy and the kinetic energy of the block at points Q and R respectively is CORRECT? (A) Total mechanical energy: EQ > ER; Kinetic energy: KQ = KR (B) Total mechanical energy: EQ = ER; Kinetic energy: KQ < KR (C) Total mechanical energy: EQ = ER; Kinetic energy: KQ = KR (D) Total mechanical energy: EQ < ER; Kinetic energy: KQ > KR",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "B — EQ = ER; KQ < KR. The incline is frictionless, so mechanical energy is conserved (EQ = ER); as the block descends from Q to R it speeds up, so its kinetic energy increases (KQ < KR).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.5-incline-QR.png`,
  },
  {
    number: "1", sub_number: "1.6",
    text: "The diagram below shows the positions of two stationary listeners, P and Q, relative to a car moving at a constant velocity towards listener Q. The hooter on the car emits sound. Listeners P and Q and the driver all hear the sound of the hooter. Which ONE of the following CORRECTLY describes the frequency of the sound heard by P and Q, compared to that heard by the driver? (A) Frequency heard by P: Lower; Frequency heard by Q: Higher (B) Frequency heard by P: Higher; Frequency heard by Q: Higher (C) Frequency heard by P: Lower; Frequency heard by Q: Lower (D) Frequency heard by P: Higher; Frequency heard by Q: Lower",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "A — Frequency heard by P: Lower; Frequency heard by Q: Higher. The car moves away from P (lower observed frequency, Doppler effect) and towards Q (higher observed frequency). The driver (moving with the source) hears the actual emitted frequency, which is in between.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.6-car-listeners.png`,
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two charges, +Q and −Q, are placed a distance d from a negative charge −q. The charges, +Q and −Q, are located along lines that are perpendicular to each other, as shown in the diagram below (+Q directly above −q at distance d; −Q directly to the right of −q at distance d). Which ONE of the following arrows CORRECTLY shows the direction of the net force acting on charge −q due to the presence of charges +Q and −Q? (A) → (horizontal, to the right) (B) ↗ (diagonally up-right) (C) ↖ (diagonally up-left) (D) ← (horizontal, to the left)",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C — diagonally up and to the left. +Q (above) attracts −q upward (unlike charges attract); −Q (to the right) attracts −q... wait, −Q and −q are both negative so they repel, pushing −q to the left. Combining an upward attraction toward +Q and a leftward repulsion away from −Q gives a net force up and to the left.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.7-charges-diagram.png`,
  },
  {
    number: "1", sub_number: "1.8",
    text: "Learners investigate the relationship between current (I) and potential difference (V) at a constant temperature for three different resistors, X, Y and Z. They obtain the graphs shown below (three straight lines through the origin on an I vs V set of axes, with X having the steepest gradient, then Y, then Z the shallowest). The resistances of X, Y and Z are RX, RY and RZ respectively. Which ONE of the following conclusions regarding the resistances of the resistors is CORRECT? (A) RZ > RY > RX (B) RX = RY = RZ (C) RX > RY > RZ (D) RX > RY and RY < RZ",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A — RZ > RY > RX. Resistance is the inverse of the gradient of an I vs V graph (R = V/I = 1/gradient); the steepest line (X) has the smallest resistance, and the shallowest line (Z) has the largest resistance.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.8-IV-graph.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "Which ONE of the following changes may lead to an increase in the emf of an AC generator without changing its frequency? (A) Decrease the resistance of the coil. (B) Increase the area of the coil. (C) Increase the resistance of the coil. (D) Decrease the speed of rotation.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "B — Increase the area of the coil. The induced emf is proportional to the rate of change of magnetic flux (emf ∝ NAB×angular speed); increasing the coil's area increases the emf without needing to change the speed of rotation (which would change the frequency). Resistance of the coil does not affect the induced emf.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "The wavelength of a monochromatic light source P is twice that of a monochromatic light source Q. The energy of a photon from source P will be ... of a photon from source Q. (A) a quarter of the energy (B) half the energy (C) equal to the energy (D) twice the energy",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "B — half the energy. Photon energy E = hc/λ is inversely proportional to wavelength; doubling the wavelength (source P) halves the photon energy compared to source Q.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS — PUSH TOY (18 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "A learner constructs a push toy using two blocks with masses 1,5 kg and 3 kg respectively. The blocks are connected by a massless, inextensible cord. The learner then applies a force of 25 N at an angle of 30° to the 1,5 kg block by means of a light rigid rod, causing the toy to move across a flat, rough, horizontal surface. The coefficient of kinetic friction (μK) between the surface and each block is 0,15. State Newton's Second Law of Motion in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When a net/resultant force acts on an object, the object will accelerate in the direction of the net force; the acceleration is directly proportional to the net force and inversely proportional to the mass of the object. (OR: The resultant/net force acting on an object is equal to the rate of change of momentum of the object, in the direction of the force.)",
    marking_notes: "Must state that acceleration is directly proportional to net force and inversely proportional to mass, in the direction of the net force (OR the equivalent rate-of-change-of-momentum form).",
    marking_points: [
      { marks: 1, description: "acceleration directly proportional to the net/resultant force", keywords: ["directly proportional", "net force", "resultant force"] },
      { marks: 1, description: "acceleration inversely proportional to the mass, in the direction of the net force", keywords: ["inversely proportional", "mass", "direction"] },
    ],
    image_url: `${IMG}/2-push-toy.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Calculate the magnitude of the kinetic frictional force acting on the 3 kg block.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "fk = μkN = μkmg = (0,15)(3)(9,8) = 4,41 N.",
    marking_notes: "Formula fk = μkN = μkmg, correct substitution, correct final answer 4,41 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the kinetic friction on the 3 kg block (N = mg, horizontal surface)?",
        options: ["fk = μkmg", "fk = μk/mg", "fk = mg/μk", "fk = μk + mg"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the normal force on the 3 kg block?",
        options: ["29,4 N", "4,41 N", "3 N", "0,15 N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the kinetic frictional force on the 3 kg block?",
        options: ["4,41 N", "2,94 N", "29,40 N", "0,45 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Draw a labelled free-body diagram showing ALL the forces acting on the 1,5 kg block.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on the 1,5 kg block, all drawn from a single point: weight w vertically down; normal force N vertically up; the applied 25 N force F at 30° above the horizontal; kinetic friction fk horizontal, opposing the motion; and tension T horizontal, pulling backward (toward the 3 kg block being towed).",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (down), normal force (up), applied 25 N force (at 30° to the horizontal), kinetic friction fk (horizontal, opposing motion), tension T (horizontal, opposite to the direction of motion, pulling back toward the 3 kg block). Max 5.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N) drawn vertically upward", keywords: ["normal force", "fn"] },
      { marks: 1, description: "applied 25 N force drawn at 30° to the horizontal", keywords: ["25 n", "30"] },
      { marks: 1, description: "kinetic friction fk drawn horizontally opposing the motion", keywords: ["friction", "fk"] },
      { marks: 1, description: "tension T drawn horizontally, pulling back toward the towed 3 kg block", keywords: ["tension", "t"] },
    ],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "Calculate the magnitude of the kinetic frictional force acting on the 1,5 kg block.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "The vertical component of the 25 N force (25sin30°) reduces the normal force: N = 25sin30° + mg (since the rod pushes down at this angle, adding to the weight on the normal force) — using the memo's approach, fk = μkN = μk(25sin30° + mg) = 0,15[(25sin30°) + (1,5)(9,8)] = 4,08 N.",
    marking_notes: "Marking points: correct normal force expression accounting for the vertical component of the applied force (N = 25sin30° + mg, or equivalently 25cos60° + mg); formula fk = μkN; correct final answer fk = 4,08 N.",
    steps: [
      {
        marks: 1,
        description: "Which expression gives the normal force on the 1,5 kg block (the 25 N force acts at 30° to the horizontal, so it has a vertical component)?",
        options: ["N = 25sin30° + mg", "N = mg − 25sin30°", "N = mg (ignore the applied force)", "N = 25cos30° + mg"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula relates the kinetic friction to the normal force?",
        options: ["fk = μkN", "fk = μk/N", "fk = N/μk", "fk = μk + N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the kinetic frictional force on the 1,5 kg block?",
        options: ["4,08 N", "2,21 N", "14,70 N", "6,38 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Calculate the tension in the cord connecting the two blocks.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Evaluation",
    model_answer: "For the 1,5 kg block: 25cos30° − T − fk = 1,5a, so (25cos30° − T) − 4,08 = 1,5a, giving 17,571 − T = 1,5a ... (1). For the 3 kg block: T − fk = 3a, so T − 4,41 = 3a ... (2). Solving (1) and (2) simultaneously gives T = 13,18 N (accepted range 13,17–13,19 N).",
    marking_notes: "Marking points: correct equation of motion for the 1,5 kg block (Fnet = ma, horizontal components); correct substitution using 2.4.1's friction value; correct equation of motion for the 3 kg block using 2.2's friction value; correctly solving the simultaneous equations; correct final answer T = 13,18 N.",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to the 1,5 kg block (horizontal components: applied force, tension, friction)?",
        options: [
          "25cos30° − T − fk = 1,5a",
          "25sin30° − T − fk = 1,5a",
          "T − fk = 1,5a",
          "25cos30° + T − fk = 1,5a",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation of motion applies to the 3 kg block?",
        options: ["T − fk = 3a", "T + fk = 3a", "fk − T = 3a", "T = 3a"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the tension T in the cord?",
        options: ["13,18 N", "17,57 N", "4,41 N", "21,98 N"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (11 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A ball is dropped from the top of a building 20 m high. Ignore the effects of air resistance. Define the term free fall.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Free fall is the motion of an object under the influence of gravity/weight/gravitational force only (motion in which the only force acting is the gravitational force).",
    marking_notes: "Must refer to motion under the influence of gravity/the gravitational force only.",
    marking_points: [{ marks: 2, description: "motion of an object under the influence of gravity/weight/gravitational force only", keywords: ["gravitational force only", "under the influence of gravity"] }],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Calculate the speed at which the ball hits the ground.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking downward as positive: vf² = vi² + 2aΔy = 0² + 2(9,8)(20), giving vf = 19,80 m·s⁻¹.",
    marking_notes: "Formula vf² = vi² + 2aΔy, correct substitution, correct final answer 19,80 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the final speed without needing the time?",
        options: ["vf² = vi² + 2aΔy", "vf = vi + aΔt", "Δy = viΔt", "Δy = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct substitution (downward positive, vi = 0, a = 9,8 m·s⁻², Δy = 20 m)?",
        options: ["vf² = 0² + 2(9,8)(20)", "vf² = 0² + 2(9,8)(10)", "vf² = 0² + (9,8)(20)", "vf² = 20² + 2(9,8)(0)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the speed at which the ball hits the ground?",
        options: ["19,80 m·s⁻¹", "9,90 m·s⁻¹", "14,00 m·s⁻¹", "392,00 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Calculate the time it takes the ball to reach the ground.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking downward as positive: vf = vi + aΔt, so 19,80 = 0 + (9,8)Δt, giving Δt = 2,02 s.",
    marking_notes: "Formula vf = vi + aΔt (positive marking from 3.2.1's speed), correct substitution, correct final answer 2,02 s.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the time, using the final speed found in 3.2.1?",
        options: ["vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = ½aΔt²", "Δy = viΔt"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the time it takes the ball to reach the ground?",
        options: ["2,02 s", "1,98 s", "4,04 s", "0,49 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Sketch a velocity-time graph for the motion of the ball (no values required).",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A straight line starting at the origin (v = 0 at t = 0) and increasing linearly with time (constant positive gradient, representing a constant downward acceleration of 9,8 m·s⁻²), since the ball starts at rest and speeds up as it falls.",
    marking_notes: "Must show a straight line through the origin with a constant (non-zero) gradient, increasing from zero.",
    marking_points: [{ marks: 2, description: "straight line through the origin with constant positive gradient", keywords: ["straight line", "origin", "constant gradient"] }],
  },

  // ============ QUESTION 4: MOMENTUM (13 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "The graph below shows how the momentum of car A changes with time just before and just after a head-on collision with car B. Car A has a mass of 1 500 kg, while the mass of car B is 900 kg. Car B was travelling at a constant velocity of 15 m·s⁻¹ west before the collision. Take east as positive and consider the system as isolated. What do you understand by the term isolated system as used in physics?",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "A system on which the resultant/net external force is zero (a system which excludes external forces).",
    marking_notes: "Accept 'a system on which the net external force is zero' or equivalent.",
    marking_points: [{ marks: 1, description: "a system on which the net external force is zero", keywords: ["net external force is zero", "excludes external forces"] }],
    image_url: `${IMG}/4-momentum-time-graph.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Use the information in the graph (momentum of car A is 30 000 kg·m·s⁻¹ before the collision, at t = 20,1 s) to calculate the magnitude of the velocity of car A just before the collision.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "p = mv, so 30 000 = (1 500)v, giving v = 20 m·s⁻¹.",
    marking_notes: "Formula p = mv, correct substitution using car A's mass and momentum before the collision, correct final answer 20 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates momentum, mass and velocity?",
        options: ["p = mv", "p = m/v", "p = mv²", "p = v/m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of car A's velocity just before the collision?",
        options: ["20 m·s⁻¹", "45 000 m·s⁻¹", "0,05 m·s⁻¹", "28 500 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Use the information in the graph (car A's momentum drops from 30 000 to 14 000 kg·m·s⁻¹ during the collision) to calculate the velocity of car B just after the collision.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Using conservation of momentum for the isolated system: Σpi = Σpf, so m1v1i + m2v2i = m1v1f + m2v2f: 30 000 + (900)(−15) = 14 000 + 900vB, giving vB = 2,78 m·s⁻¹ east.",
    marking_notes: "Marking points: formula Σpi = Σpf (conservation of momentum); correct substitution using car B's initial momentum (900)(−15) and car A's momenta before/after from the graph; correct final answer vB = 2,78 m·s⁻¹ east.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies (isolated system, head-on collision)?",
        options: [
          "Conservation of momentum: Σpi = Σpf",
          "Conservation of mechanical energy",
          "Newton's second law: Fnet = ma",
          "Work-energy theorem",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total momentum of the system before the collision (taking east as positive, car B moving west at 15 m·s⁻¹)?",
        options: ["16 500 kg·m·s⁻¹", "43 500 kg·m·s⁻¹", "30 000 kg·m·s⁻¹", "-16 500 kg·m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the velocity of car B just after the collision?",
        options: ["2,78 m·s⁻¹ east", "2,78 m·s⁻¹ west", "18,33 m·s⁻¹ east", "15,56 m·s⁻¹ east"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "Calculate the magnitude of the net average force acting on car A during the collision.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Fnet = slope of the momentum-time graph = Δp/Δt = (14 000 − 30 000)/(20,2 − 20,1) = −160 000 N, so Fnet = 160 000 N.",
    marking_notes: "Marking points: formula Fnet = Δp/Δt (the slope of the momentum-time graph), correct substitution using the graph's values (Δp = −16 000 kg·m·s⁻¹ over Δt = 0,1 s), correct final answer 160 000 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the net average force from a momentum-time graph?",
        options: ["Fnet = Δp/Δt (the slope)", "Fnet = pΔt", "Fnet = Δp × Δt", "Fnet = p/t at a single point"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Δt, the duration of the collision (read off the graph)?",
        options: ["0,1 s", "0,2 s", "20,1 s", "0,3 s"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the net average force on car A?",
        options: ["160 000 N", "16 000 N", "1 600 N", "44 000 N"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: MECHANICAL ENERGY (13 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "A pendulum with a bob of mass 5 kg is held stationary at a height h metres above the ground. When released, it collides with a block of mass 2 kg which is stationary at point A. The bob swings past A and comes to rest momentarily at a position ¼h above the ground. Immediately after the collision the 2 kg block begins to move from A to B at a constant speed of 4,95 m·s⁻¹. Ignore frictional effects and assume that no loss of mechanical energy occurs during the collision. Calculate the kinetic energy of the block immediately after the collision.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Ek = ½mv² = ½(2)(4,95)² = 24,50 J.",
    marking_notes: "Formula Ek = ½mv², correct substitution, correct final answer 24,50 J.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives kinetic energy?",
        options: ["Ek = ½mv²", "Ek = mv", "Ek = mgh", "Ek = ½mv"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the kinetic energy of the block immediately after the collision?",
        options: ["24,50 J", "9,90 J", "49,00 J", "12,25 J"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/5-pendulum-before-after.png`,
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Calculate height h (the height from which the pendulum bob was released, given that the bob swings past A and comes to rest momentarily at ¼h, and the block gains 24,50 J of kinetic energy from the collision).",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Using conservation of mechanical energy for the bob, and that the kinetic energy transferred to the block (24,50 J) equals the bob's loss in potential energy from h to ¼h: (5)(9,8)h + 0 = (5)(9,8)(¼h) + 0 + 24,50, giving h = 0,67 m.",
    marking_notes: "Marking points: correct energy-conservation equation (bob's energy before = bob's energy after + energy transferred to block); correct substitution using 24,50 J from 5.1.1; correct final answer h = 0,67 m.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies to find h?",
        options: [
          "Conservation of mechanical energy, with the kinetic energy gained by the block (24,50 J) equal to the bob's loss in potential energy",
          "Conservation of momentum only",
          "Work-energy theorem for the block alone",
          "Newton's second law",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the bob's loss in potential energy, in terms of h (bob falls from h to ¼h)?",
        options: ["mg(h − ¼h) = ¾mgh", "mgh", "mg(¼h)", "½mgh"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is h?",
        options: ["0,67 m", "0,50 m", "2,50 m", "1,33 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "The block moves from point B at a velocity of 4,95 m·s⁻¹ up a rough inclined plane to point C. The speed of the block at point C is 2 m·s⁻¹. Point C is 0,5 m above the horizontal. During its motion from B to C a uniform frictional force acts on the block. State the work-energy theorem in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The net/total work done on an object is equal to the change in the object's kinetic energy. (OR: The work done on an object by a resultant/net force is equal to the change in the object's kinetic energy.)",
    marking_notes: "Must refer to net/total work done being equal to the change in kinetic energy.",
    marking_points: [{ marks: 2, description: "net/total work done on an object equals the change in the object's kinetic energy", keywords: ["net work", "equal", "change in kinetic energy"] }],
    image_url: `${IMG}/5-block-B-to-C.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "Use energy principles to calculate the work done by the frictional force when the 2 kg block moves from point B to point C.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = ΔEk: Wf + mgΔycos180° = ½m(vf² − vi²), so Wf + (2)(9,8)(0,5)cos180° = ½(2)(2² − 4,95²), giving Wf = −10,7 J.",
    marking_notes: "Marking points: correct formula (Wnet = ΔEk, or equivalently Wnc = ΔEk + ΔEp); correct substitution using the 0,5 m rise and the speeds at B and C; correct final answer Wf = −10,7 J.",
    steps: [
      {
        marks: 1,
        description: "Which energy principle applies (B to C, rough incline)?",
        options: [
          "Wnet = ΔEk (or equivalently Wnc = ΔEk + ΔEp)",
          "Conservation of mechanical energy (frictionless)",
          "Conservation of momentum",
          "Fnet = ma directly",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is ΔEk, the change in kinetic energy of the block from B to C?",
        options: ["−20,5 J", "+20,5 J", "−5,0 J", "+5,0 J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the work done by friction from B to C?",
        options: ["−10,7 J", "−9,8 J", "10,7 J", "−30,3 J"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (13 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "An ambulance is moving towards a stationary listener at a constant speed of 30 m·s⁻¹. The siren of the ambulance emits sound waves having a wavelength of 0,28 m. Take the speed of sound in air as 340 m·s⁻¹. State the Doppler effect in words.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler effect is the (apparent) change in frequency (or pitch) of the sound (detected by a listener) because the sound source and the listener have different velocities relative to the medium of sound propagation.",
    marking_notes: "Must refer to an apparent change in frequency/pitch/wavelength as a result of the relative motion between a source and an observer/listener.",
    marking_points: [{ marks: 2, description: "apparent change in frequency/pitch due to relative motion between source and listener", keywords: ["apparent change in frequency", "relative motion", "source and"] }],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Calculate the frequency of the sound waves emitted by the siren as heard by the ambulance driver.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "The driver moves with the source, so they hear the actual emitted frequency: v = fλ, so 340 = f(0,28), giving fs = 1 214,29 Hz.",
    marking_notes: "Formula v = fλ, correct substitution using the emitted wavelength 0,28 m, correct final answer 1 214,29 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the speed of sound, frequency and wavelength?",
        options: ["v = fλ", "v = f/λ", "v = f + λ", "f = v + λ"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What frequency does the ambulance driver hear (the actual emitted frequency, since the driver moves with the source)?",
        options: ["1 214,29 Hz", "1 331,80 Hz", "95,20 Hz", "340,00 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "Calculate the frequency of the sound waves emitted by the siren as heard by the listener (stationary, ambulance approaching at 30 m·s⁻¹).",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Source moving towards a stationary listener: fL = [v/(v − vs)]fs = [340/(340 − 30)](1214,29) = 1 331,80 Hz (accepted range 1 331,80–1 335,72 Hz).",
    marking_notes: "Marking points: correct Doppler formula for a source moving towards a stationary listener; correct substitution (positive marking from 6.1.2); correct final answer 1 331,80 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which Doppler formula applies (source moving towards a stationary listener)?",
        options: ["fL = [v/(v − vs)]fs", "fL = [v/(v + vs)]fs", "fL = [(v − vs)/v]fs", "fL = fs (no change)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is (v − vs), the denominator in the Doppler formula?",
        options: ["310 m·s⁻¹", "370 m·s⁻¹", "340 m·s⁻¹", "30 m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What frequency does the listener hear?",
        options: ["1 331,80 Hz", "1 115,15 Hz", "1 214,29 Hz", "340,00 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.1.4",
    text: "How would the answer to QUESTION 6.1.3 change if the speed of the ambulance were LESS THAN 30 m·s⁻¹? Write down only INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases.",
    marking_notes: "Accept only 'decreases'.",
    marking_points: [{ marks: 1, description: "decreases", keywords: ["decreases"] }],
  },
  {
    number: "6", sub_number: "6.2",
    text: "An observation of the spectrum of a distant star shows that it is moving away from the Earth. Explain, in terms of the frequencies of the spectral lines, how it is possible to conclude that the star is moving away from the Earth.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "The spectral lines of the star are shifted towards the lower frequency end, which is the red end (red shift) of the spectrum.",
    marking_notes: "Must refer to the spectral lines being shifted towards the lower-frequency/red end of the spectrum.",
    marking_points: [{ marks: 2, description: "spectral lines shifted towards the lower-frequency (red) end of the spectrum", keywords: ["lower frequency", "red", "shifted"] }],
  },

  // ============ QUESTION 7: ELECTROSTATICS (17 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "In an experiment to verify the relationship between the electrostatic force, FE, and distance, r, between two identical, positively charged spheres, a graph of FE versus 1/r² was obtained (a straight line through the origin). State Coulomb's law in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The (magnitude of the) electrostatic force exerted by one point charge on another is directly proportional to the product of the charges and inversely proportional to the square of the distance between them (their centres).",
    marking_notes: "Must refer to the electrostatic force being directly proportional to the product of the charges and inversely proportional to the square of the distance between them.",
    marking_points: [{ marks: 2, description: "force directly proportional to the product of the charges and inversely proportional to the square of the distance between them", keywords: ["directly proportional", "product of the charges", "square of the distance"] }],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Write down the dependent variable of the experiment.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "FE (the electrostatic force).",
    marking_notes: "Accept only 'FE' / 'electrostatic force'.",
    marking_points: [{ marks: 1, description: "FE / electrostatic force", keywords: ["fe", "electrostatic force"] }],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "What relationship between the electrostatic force FE and the square of the distance, r², between the charged spheres can be deduced from the graph?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "The electrostatic force is inversely proportional to the square of the distance between the charges (FE ∝ 1/r²).",
    marking_notes: "Accept 'inversely proportional' in any equivalent valid wording, or the symbolic form F ∝ 1/r².",
    marking_points: [{ marks: 1, description: "inversely proportional to the square of the distance", keywords: ["inversely proportional"] }],
    image_url: `${IMG}/7-FE-vs-1overr2-graph.png`,
  },
  {
    number: "7", sub_number: "7.1.4",
    text: "Use the information in the graph to calculate the charge on each sphere.",
    marks: 6, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "Slope = ΔFE/Δ(1/r²) = (0,027 − 0)/(5,6 − 0) = 4,82 × 10⁻³ N·m². Since slope = FEr² = kQ1Q2 = kQ² (identical spheres), 4,82×10⁻³ = (9×10⁹)Q², giving Q = 7,32×10⁻⁷ C (accepted range 7,32×10⁻⁷–7,45×10⁻⁷ C).",
    marking_notes: "Marking points: slope correctly read off the graph (using any pair of points on the line); slope = kQ1Q2 = kQ² (identical spheres); correct final answer Q = 7,32×10⁻⁷ C.",
    steps: [
      {
        marks: 1,
        description: "What does the slope of the FE vs 1/r² graph represent?",
        options: ["kQ1Q2 (= kQ² for identical spheres)", "k/Q1Q2", "Q1Q2/k", "r² directly"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the slope of the graph (using the line through the origin and the point (5,6; 0,027))?",
        options: ["4,82 × 10⁻³ N·m²", "2,07 × 10² N⁻¹·m⁻²", "0,027 N", "5,60 m⁻²"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the magnitude of the charge on each sphere?",
        options: ["7,32 × 10⁻⁷ C", "4,82 × 10⁻³ C", "2,70 × 10⁻⁴ C", "5,36 × 10⁻¹³ C"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "A charged sphere, A, carries a charge of −0,75 μC. Draw a diagram showing the electric field lines surrounding sphere A.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Field lines pointing radially inward, converging onto sphere A from all directions (since A is negatively charged, field lines point toward it).",
    marking_notes: "Marking points: correct direction (radially inward, toward the negative charge); field lines arranged radially/symmetrically around the sphere.",
    marking_points: [
      { marks: 1, description: "field lines point radially inward (toward the negative charge)", keywords: ["inward", "toward", "negative"] },
      { marks: 1, description: "field lines arranged radially/symmetrically around the sphere", keywords: ["radially", "symmetrically"] },
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Sphere A is placed 12 cm away from another charged sphere, B, along a straight line in a vacuum. Sphere B carries a charge of +0,8 μC. Point P is located 9 cm to the right of sphere A (so 3 cm to the left of sphere B). Calculate the magnitude of the net electric field at point P.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "EPA = kQA/rPA² = (9×10⁹)(0,75×10⁻⁶)/(0,09)² = 8,33×10⁵ N·C⁻¹ (pointing toward A, i.e. to the left, since A is negative). EPB = kQB/rPB² = (9×10⁹)(0,8×10⁻⁶)/(0,03)² = 8×10⁶ N·C⁻¹ (pointing toward A, i.e. to the left, since B is positive and P is to its left — the field points away from B). Both fields point in the same direction (to the left), so Enet = EPA + EPB = 8,33×10⁵ + 8×10⁶ = 8,83×10⁶ N·C⁻¹.",
    marking_notes: "Marking points: formula E = kQ/r²; correct substitution for EPA (using rPA = 0,09 m); correct substitution for EPB (using rPB = 0,03 m); recognising both fields point in the same direction at P and adding them; correct final answer 8,83×10⁶ N·C⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "F = kQ1Q2/r²", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the field at P due to sphere A alone (rPA = 0,09 m)?",
        options: ["8,33 × 10⁵ N·C⁻¹", "7,50 × 10⁴ N·C⁻¹", "9,26 × 10⁵ N·C⁻¹", "8,33 × 10⁶ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the net electric field at P (both fields point the same direction at P)?",
        options: ["8,83 × 10⁶ N·C⁻¹", "7,17 × 10⁶ N·C⁻¹", "8,33 × 10⁵ N·C⁻¹", "8,80 × 10⁶ N·C⁻¹"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-APB.png`,
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (21 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "In the circuit below the battery has an emf (ε) of 12 V and an internal resistance of 0,2 Ω. The resistances of the connecting wires are negligible. Define the term emf of a battery.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The (maximum) energy provided (work done) by a battery per coulomb/unit charge passing through it.",
    marking_notes: "Must refer to the (maximum) energy provided per coulomb of charge.",
    marking_points: [{ marks: 2, description: "maximum energy provided per coulomb/unit charge passing through the battery", keywords: ["energy provided", "per coulomb", "unit charge"] }],
    image_url: `${IMG}/8-circuit-1.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Switch S is open. A high-resistance voltmeter is connected across points a and b. What will the reading on the voltmeter be?",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "12 V. With S open, no current flows, so there is no voltage drop across the internal resistance, and the voltmeter reads the full emf.",
    marking_notes: "Accept only '12 (V)'.",
    marking_points: [{ marks: 1, description: "12 V", keywords: ["12"] }],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "Switch S is now closed. The same voltmeter is now connected across points c and d. What will the reading on the voltmeter be?",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "0 V. Points c and d are connected by a plain conducting wire with no resistance between them (not across the battery or a resistor), so there is no potential difference between them.",
    marking_notes: "Accept only '0 (V)' / 'zero'.",
    marking_points: [{ marks: 1, description: "0 V / zero", keywords: ["0", "zero"] }],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: "When switch S is closed, the potential difference across the terminals of the battery is 11,7 V. Calculate the current in the battery.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "ε = I(R + r) = Vext + Ir, so 12 = 11,7 + Ir, giving 0,3 = Itot(0,2), so Itot = 1,5 A.",
    marking_notes: "Formula ε = Vext + Ir (or V = IR applied to the 'lost volts'), correct substitution, correct final answer 1,5 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates emf, terminal voltage and the voltage 'lost' across the internal resistance?",
        options: ["ε = Vext + Ir", "ε = Vext − Ir", "ε = Vext × Ir", "Ir = Vext"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the voltage 'lost' across the internal resistance (ε − Vext)?",
        options: ["0,3 V", "11,7 V", "12,0 V", "0,2 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the current in the battery?",
        options: ["1,5 A", "58,5 A", "0,60 A", "2,40 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.1.5",
    text: "Calculate the effective resistance of the parallel branch (the 10 Ω and 15 Ω resistors).",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "1/R∥ = 1/R1 + 1/R2 = 1/10 + 1/15, giving R∥ = 6 Ω.",
    marking_notes: "Formula 1/R∥ = 1/R1 + 1/R2 (or R∥ = R1R2/(R1+R2)), correct final answer 6 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the effective resistance of two resistors in parallel?",
        options: ["1/R∥ = 1/R1 + 1/R2", "R∥ = R1 + R2", "R∥ = R1 − R2", "R∥ = R1 × R2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the effective resistance of the parallel branch?",
        options: ["6 Ω", "25 Ω", "12,5 Ω", "150 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.1.6",
    text: "Calculate the resistance of resistor R.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V = IR for the whole external circuit: 11,7 = 1,5(6 + R), giving R = 1,8 Ω.",
    marking_notes: "Marking points: formula V = IR for the series combination of R and the parallel branch; correct substitution using the total current (1,5 A, positive marking from 8.1.4) and the parallel resistance (6 Ω, positive marking from 8.1.5); correct final answer R = 1,8 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula applies to find R (R is in series with the 6 Ω parallel combination, across the 11,7 V external voltage)?",
        options: ["V = I(R + R∥)", "V = IR∥ only", "V = IR only (ignore R∥)", "V = I/R"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct substitution?",
        options: ["11,7 = 1,5(R + 6)", "11,7 = 1,5(R − 6)", "11,7 = 1,5R", "12 = 1,5(R + 6)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the resistance of R?",
        options: ["1,8 Ω", "7,8 Ω", "9,6 Ω", "1,5 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "A battery with an emf of 12 V and an internal resistance of 0,2 Ω are connected in series to a very small electric motor and a resistor, T, of unknown resistance. The motor is rated X watts, 3 volts, and operates at optimal conditions. When switch S is closed, the motor lifts a 0,35 kg mass vertically upwards at a constant speed of 0,4 m·s⁻¹. Assume that there is no energy conversion into heat and sound. Calculate the value of X.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Pave = Fvave = mg(vave) = (0,35)(9,8)(0,4) = 1,37 W, so X = 1,37.",
    marking_notes: "Formula P = Fv = mgv, correct substitution, correct final answer X = 1,37 (W).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the motor's mechanical output power (lifting the mass at constant speed, no losses)?",
        options: ["P = Fv = mgv", "P = mgh", "P = ½mv²", "P = mv"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is X, the power rating of the motor?",
        options: ["1,37 W", "3,43 W", "0,14 W", "13,72 W"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/8-circuit-motor.png`,
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Calculate the resistance of resistor T.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "P = VI for the motor: 1,37 = (3)I, giving I = 0,46 A. Then ε = Vext + Vint = VT + 3 + (0,2)(0,46), so 12 = VT + 3 + 0,092, giving VT = 8,91 V. Finally VT = IRT: 8,91 = (0,46)RT, giving RT = 19,37 Ω.",
    marking_notes: "Marking points: formula P = VI to find the current through the (series) circuit; correct equation ε = VT + Vmotor + Vint; correct substitution; correct final answer RT = 19,37 Ω (accept 19,31–19,41 Ω across valid rounding routes).",
    steps: [
      {
        marks: 1,
        description: "What is the current in the circuit (using the motor's power and rated voltage, P = VI)?",
        options: ["0,46 A", "4,11 A", "0,24 A", "1,37 A"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation relates the emf to the voltage across T, the motor, and the internal resistance?",
        options: ["ε = VT + Vmotor + Ir", "ε = VT − Vmotor − Ir", "ε = VT × Vmotor", "ε = VT only"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the resistance of resistor T?",
        options: ["19,37 Ω", "8,91 Ω", "26,09 Ω", "17,37 Ω"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (11 marks) ============

  {
    number: "9", sub_number: "9.1.1",
    text: "A generator is shown below (a coil between the poles of a magnet, connected via a split ring to the external circuit). Assume that the coil is in a vertical position. Is the generator above AC or DC? Give a reason for the answer.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "DC. It uses a split ring/commutator (rather than slip rings).",
    marking_notes: "Must state 'DC' and give the reason: it uses a split ring/commutator.",
    marking_points: [
      { marks: 1, description: "DC", keywords: ["dc"] },
      { marks: 1, description: "uses a split ring/commutator", keywords: ["split ring", "commutator"] },
    ],
    image_url: `${IMG}/9-generator.png`,
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "Sketch an induced emf versus time graph for ONE complete rotation of the coil. (The coil starts turning from the vertical position.)",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "A series of two identical positive humps (both above the time axis, never going negative) over one complete rotation — the characteristic rectified/DC output shape produced by the split-ring commutator.",
    marking_notes: "Must show two positive humps (both above the axis) for one complete rotation, consistent with a DC generator (commutator reverses the connections every half-rotation so the output never goes negative).",
    marking_points: [{ marks: 2, description: "two positive humps, both above the time axis (never negative), for one full rotation", keywords: ["positive humps", "above the axis", "never negative"] }],
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "An AC generator is operating at a maximum emf of 340 V. It is connected across a toaster and a kettle (in parallel). The toaster is rated at 800 W, while the kettle is rated at 2 000 W. Both are working under optimal conditions. Calculate the rms current passing through the toaster.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Vrms = Vmax/√2 = 340/√2 = 240,42 V. Pave = VrmsIrms: 800 = (240,42)Irms, giving Irms = 3,33 A.",
    marking_notes: "Marking points: formula Vrms = Vmax/√2; formula Pave = VrmsIrms; correct final answer Irms = 3,33 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the rms voltage from the maximum (peak) voltage?",
        options: ["Vrms = Vmax/√2", "Vrms = Vmax × √2", "Vrms = Vmax/2", "Vrms = Vmax²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula relates average power, rms voltage and rms current?",
        options: ["Pave = VrmsIrms", "Pave = Vrms/Irms", "Pave = Vrms + Irms", "Pave = Vrms²Irms"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the rms current through the toaster?",
        options: ["3,33 A", "2,35 A", "4,71 A", "0,24 A"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-toaster-kettle-circuit.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Calculate the total rms current delivered by the generator.",
    marks: 4, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "For the kettle: 2 000 = (240,42)Irms, giving Irms(kettle) = 8,32 A. Since the toaster and kettle are in parallel, the total current is the sum: Itot = 3,33 + 8,32 = 11,65 A.",
    marking_notes: "Marking points: formula Pave = VrmsIrms applied to the kettle; correct rms current for the kettle (8,32 A); recognising the toaster and kettle are in parallel so currents add; correct final answer 11,65 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the rms current through the kettle?",
        options: ["Pave = VrmsIrms, solved for Irms", "Pave = Vrms/Irms", "Irms = Pave × Vrms", "Irms = Pave/Vmax"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the rms current through the kettle?",
        options: ["8,32 A", "5,88 A", "4,16 A", "2 000,00 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total rms current delivered by the generator (toaster and kettle in parallel)?",
        options: ["11,65 A", "8,32 A", "5,00 A", "2,80 A"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 10: PHOTOELECTRIC EFFECT (13 marks) ============

  {
    number: "10", sub_number: "10.1.1",
    text: "A learner is investigating the photoelectric effect for two different metals, silver and sodium, using light of different frequencies. The maximum kinetic energy of the emitted photoelectrons is plotted against the frequency of the light for each of the metals (sodium's line has a threshold frequency of 5,94 × 10¹⁴ Hz; silver's line has a threshold frequency of 11,42 × 10¹⁴ Hz). Define the term threshold frequency.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The minimum frequency (of a photon/light) needed to emit electrons from (the surface of) a metal. (OR: The frequency of a photon/light needed to emit electrons from a metal with zero kinetic energy.)",
    marking_notes: "Must refer to the minimum frequency of light needed to eject electrons from a metal surface.",
    marking_points: [{ marks: 2, description: "minimum frequency of light needed to emit electrons from a metal surface", keywords: ["minimum frequency", "emit electrons", "metal"] }],
    image_url: `${IMG}/10-Ek-vs-freq-graph.png`,
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "Which metal, sodium or silver, has the larger work function? Explain the answer.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Silver. The threshold/cutoff frequency of silver is higher than sodium's (11,42 × 10¹⁴ Hz vs 5,94 × 10¹⁴ Hz). Since W0 ∝ f0 (W0 = hf0), the higher the threshold frequency, the greater the work function.",
    marking_notes: "Must state 'silver' and give the reason: silver's threshold frequency is higher, and since W0 = hf0 (work function is proportional to threshold frequency), a higher threshold frequency means a larger work function.",
    marking_points: [
      { marks: 1, description: "silver has the larger work function", keywords: ["silver"] },
      { marks: 2, description: "silver's threshold frequency is higher, and W0 = hf0 (or equivalent reasoning) means a higher threshold frequency gives a larger work function", keywords: ["threshold frequency is higher", "w0", "hf0"] },
    ],
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "Name the physical constant represented by the slopes of the graphs.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Planck's constant.",
    marking_notes: "Accept only 'Planck's constant'.",
    marking_points: [{ marks: 1, description: "Planck's constant", keywords: ["planck"] }],
  },
  {
    number: "10", sub_number: "10.1.4",
    text: "If light of the same frequency is shone on each of the metals, in which metal will the ejected photoelectrons have a larger maximum kinetic energy?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Sodium. Sodium has the lower work function (lower threshold frequency), so for the same incident photon energy (hf), it leaves more energy available as kinetic energy (Ek(max) = hf − W0).",
    marking_notes: "Accept only 'sodium'.",
    marking_points: [{ marks: 1, description: "sodium", keywords: ["sodium"] }],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "In a different photoelectric experiment, blue light obtained from a light bulb is shone onto a metal plate and electrons are released. The wavelength of the blue light is 470 × 10⁻⁹ m and the bulb is rated at 60 mW. The bulb is only 5% efficient. Calculate the number of photons that will be incident on the metal plate per second, assuming all the light from the bulb is incident on the metal plate.",
    marks: 5, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Energy radiated per second by the blue light = (5/100)(60×10⁻³) = 3×10⁻³ J·s⁻¹. Ephoton = hc/λ = (6,63×10⁻³⁴)(3×10⁸)/(470×10⁻⁹) = 4,232×10⁻¹⁹ J. Number of photons per second = (3×10⁻³)/(4,232×10⁻¹⁹) = 7,09×10¹⁵.",
    marking_notes: "Marking points: correct power actually radiated as light (accounting for the 5% efficiency, 3×10⁻³ W); formula Ephoton = hc/λ; correct final answer 7,09×10¹⁵ photons per second.",
    steps: [
      {
        marks: 1,
        description: "What is the actual power radiated as blue light (the bulb is only 5% efficient)?",
        options: ["3 × 10⁻³ W", "60 × 10⁻³ W", "5 × 10⁻³ W", "1,2 × 10⁻³ W"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the energy of a single blue-light photon (Ephoton = hc/λ)?",
        options: ["4,232 × 10⁻¹⁹ J", "1,41 × 10⁻²⁷ J", "3,12 × 10⁻¹⁹ J", "6,63 × 10⁻³⁴ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the number of photons incident on the metal plate per second?",
        options: ["7,09 × 10¹⁵", "1,42 × 10⁻²²", "7,09 × 10¹⁸", "2,12 × 10¹⁶"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Without any further calculation, write down the number of electrons emitted per second from the metal.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "7,09 × 10¹⁵ (the same as the number of photons incident per second from 10.2.1, since each photon that is absorbed ejects exactly one electron).",
    marking_notes: "Positive marking from 10.2.1: accept the same numeric value as 10.2.1's answer.",
    marking_points: [{ marks: 1, description: "same number as calculated in 10.2.1 (one electron ejected per incident photon)", keywords: ["7 09", "same number"] }],
  },
];

// No exam_schedule entries here — mirrors physical-sciences-p1-nov2024.ts and
// physical-sciences-p1-nov2025.ts.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
