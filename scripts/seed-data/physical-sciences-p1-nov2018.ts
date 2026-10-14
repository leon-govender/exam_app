// Real DBE past paper: Physical Sciences (Physics) P1, November 2018, National
// (English).
// Sources (stanmorephysics.com, two separate files):
//  - Question paper: NOV-P1-QP-ONLY-1.pdf (generic filename, but the cover
//    page reads "PHYSICAL SCIENCES: PHYSICS (P1)", "NOVEMBER 2018", MARKS 150,
//    TIME 3 hours, 15 pages and 3 data sheets). It is a scanned, image-only
//    PDF with no text layer, so every page was rendered and read visually.
//  - Memo: Physical-Sciences-P1-Nov-2018-FINAL-Memo-Afr-Eng..pdf (bilingual
//    Afrikaans/English, 29-page marking guideline with a real text layer;
//    cover confirms "PHYSICS (P1)", "NOVEMBER 2018", 150 marks). Every
//    question was cross-checked against the question paper's own marks.
//
// Paper structure: ELEVEN compulsory questions, 150 marks (Q1 20, Q2 17,
// Q3 13, Q4 14, Q5 13, Q6 13, Q7 19, Q8 11, Q9 6, Q10 11, Q11 13), 3 hours.
// All 150 marks are included.
//
// Topics: this paper reuses only the nine existing CAPS topics; no new topic
// key was needed (Q1.1/1.2/1.3 and Q2/Q3 etc. map to the closest existing
// topic; Q1.4/1.5 momentum and work-energy; Q1.6 and Q6 Doppler; Q1.7 and Q7
// electrostatics; Q1.8, Q8, Q9 circuits; Q1.9 and Q10 electrodynamics; Q1.10
// and Q11 photoelectric/spectra).
//
// Grading convention: EVERY question is `steps` (stepped multiple choice; one
// step per mark-earning point). Calculations, MCQ letters, YES/NO and
// increases/decreases are direct choices; the three sketch items (2.2
// free-body diagram, 3.4 velocity-time graph, 7.2 field pattern) are "which
// description of the correct drawing" choices; the eight define/state items
// (2.1, 4.1, 5.1, 5.4, 6.1, 7.3, 8.1, 11.1) are single 2-mark steps whose
// options are candidate statements (memo wording plus three wrong or
// half-correct statements). No `marking_points` are used.
// Diagrams were cropped from page renders into
// public/question-images/physics-2018-p1/ (lift, balls P/Q, spheres XYZ,
// circuits X/Y, block-and-pulley, pole T, skater, incline, charges P/S/T and
// their axes, Q8 circuit, Q9 circuit and graph, generator, voltage-time graph,
// photocells A/B). The Q11 threshold-frequency table is transcribed in the
// question text instead. The Q1.5 and Q1.6 option tables need no image.
//
// FLAG for review (memo oddities, transcribed faithfully):
//  - Q1.1: memo lists "C /D" (both accepted). Option D as printed ("maintain
//    its velocity when a non-zero net force is acting on it") is therefore NOT
//    offered as a distractor; a different wrong option takes its place.
//  - Q7.6.1: memo says "Sphere P or T" (both accepted) and 7.6.2 gives a
//    worked answer for each (P: 8,55 x 10^-20 kg; T: 2,85 x 10^-20 kg). Q7.6.1
//    and 7.6.2 are therefore built so the correct choice is the "either, per
//    memo" option; physically only P (charged to -15 nC) gains electrons.
//  - Q9.2.1: memo accepts r = 3 ohm or 1,5 ohm (and -3 / -1,5 ohm for one mark
//    only). 3 ohm is the value consistent with the graph and with 9.2.2's
//    working (epsilon = 7 V); 1,5 ohm is not offered as a distractor.
//  - Q10.2.1: memo accepts 340 V or -340 V; -340 V is not offered as a
//    distractor. Q10.1.1 memo answer is "Y to X", transcribed as given.
//  - Q11.4: memo range 2,52 x 10^-20 to 2,6 x 10^-20 J (2,55 x 10^-20 J
//    with the exact 5,45 x 10^14 Hz gives 2,52).
//  - Q4.3/4.4 take motion to the right as positive; candidates may use the
//    opposite direction. Q3.2, 3.3 and 3.4 accept upward- or downward-positive.
//  - Memo 7.2 addendum also accepts the field diagram that includes the third
//    charge.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2018-p1";

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
  year: 2018,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2019/05/NOV-P1-QP-ONLY-1.pdf" as string | null,
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

function st(marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep {
  return { marks, description, options, correctIndex };
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============
  {
    number: "1", sub_number: "1.1",
    text: "Inertia is the tendency of an object to ... (A) maintain its mass. (B) continue in a state of non-uniform motion. (C) remain at rest or in the state of uniform motion. (D) maintain its velocity when a non-zero net force is acting on it.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "C (the memo also accepts D) — inertia is the tendency of an object to remain at rest or in uniform motion.",
    marking_notes: "Memo: 'C /D'. Both accepted; only C is offered as the pickable answer.",
    steps: [st(2, "Inertia is the tendency of an object to ...", [
      "maintain its mass",
      "continue in a state of non-uniform motion",
      "remain at rest or in the state of uniform motion",
      "change its velocity whenever any force acts on it",
    ], 2)],
  },
  {
    number: "1", sub_number: "1.2",
    text: "A person stands on a bathroom scale that is fixed to the floor of a lift. The reading on the scale is largest when the lift moves ... (A) upwards at a constant speed. (B) downwards at a constant speed. (C) upwards at an increasing speed. (D) downwards at an increasing speed.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "C — upwards at an increasing speed. The acceleration is upward, so N − mg = ma gives N = m(g + a), the largest scale reading.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "The reading on the scale is largest when the lift moves ...", [
      "upwards at a constant speed",
      "downwards at a constant speed",
      "upwards at an increasing speed",
      "downwards at an increasing speed",
    ], 2)],
    image_url: `${IMG}/1.2-lift.png`,
  },
  {
    number: "1", sub_number: "1.3",
    text: "An object is projected vertically upwards. Ignore air resistance. As the object rises, its velocity ... (A) and acceleration are both directed upwards. (B) and acceleration are both directed downwards. (C) is directed upwards, but its acceleration is directed downwards. (D) is directed downwards, but its acceleration is directed upwards.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "C — while rising the velocity is upward but the acceleration (g) is always downward.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "As the object rises, its velocity ...", [
      "and acceleration are both directed upwards",
      "and acceleration are both directed downwards",
      "is directed upwards, but its acceleration is directed downwards",
      "is directed downwards, but its acceleration is directed upwards",
    ], 2)],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Ball P and ball Q, of the same mass, are dropped onto a concrete floor. Both balls hit the floor at the same speed v. Ball P rebounds with the same vertical speed v, but ball Q rebounds with speed ½v. Ignore air resistance. Which ONE of the following statements regarding the collision of EACH ball with the concrete floor is CORRECT? (A) Kinetic energy is conserved for both balls P and Q. (B) The change in momentum of ball P is greater than that of ball Q. (C) The contact time with the floor is the same for both balls P and Q. (D) Momentum is conserved for the collision of ball P, but not for that of ball Q.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "B — P changes from −v to +v (Δp = 2mv) while Q changes from −v to +½v (Δp = 1,5mv), so P's change in momentum is greater.",
    marking_notes: "Accept only 'B'.",
    steps: [st(2, "Which statement about the collisions of balls P and Q with the floor is CORRECT?", [
      "Kinetic energy is conserved for both balls P and Q",
      "The change in momentum of ball P is greater than that of ball Q",
      "The contact time with the floor is the same for both balls P and Q",
      "Momentum is conserved for the collision of ball P, but not for that of ball Q",
    ], 1)],
    image_url: `${IMG}/1.4-balls-PQ.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "If the net work done on a moving object is POSITIVE, then we can conclude that the kinetic energy of the object ... (A) is zero. (B) has increased. (C) has decreased. (D) has not changed.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "B — has increased. By the work-energy theorem, Wnet = ΔEk, so positive net work means the kinetic energy increased.",
    marking_notes: "Accept only 'B'.",
    steps: [st(2, "If the net work done on a moving object is POSITIVE, the kinetic energy of the object ...", [
      "is zero",
      "has increased",
      "has decreased",
      "has not changed",
    ], 1)],
  },
  {
    number: "1", sub_number: "1.6",
    text: "The spectrum produced by a moving asteroid, as observed from Earth, indicates that the light has shifted towards the blue end of the spectrum. Which ONE of the following combinations of the FREQUENCY OF THE OBSERVED LIGHT and the DISTANCE BETWEEN THE ASTEROID AND EARTH is CORRECT? (A) Increased; Decreases (B) Increased; Increases (C) Decreased; Decreases (D) Decreased; Increases",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A — Increased; Decreases. A blue shift means higher observed frequency, which happens when the source moves towards the observer, so the distance decreases.",
    marking_notes: "Accept only 'A'.",
    steps: [st(2, "Frequency of observed light; distance between asteroid and Earth (blue-shifted light):", [
      "Increased; Decreases",
      "Increased; Increases",
      "Decreased; Decreases",
      "Decreased; Increases",
    ], 0)],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Three charged spheres X, Y and Z, supported by insulating threads of equal length, hang from a beam, as shown in the diagram. Sphere X is negatively charged. Sphere X attracts sphere Y, but repels sphere Z. Which ONE of the following conclusions is CORRECT? (A) Sphere Y is positively charged and sphere Z is negatively charged. (B) Sphere Y is positively charged and sphere Z is positively charged. (C) Sphere Y is negatively charged and sphere Z is negatively charged. (D) Sphere Y is negatively charged and sphere Z is positively charged.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "A — X attracts Y, so Y is positive; X repels Z, so Z is also negative.",
    marking_notes: "Accept only 'A'.",
    steps: [st(2, "Which conclusion about the charges on Y and Z is CORRECT?", [
      "Y is positively charged and Z is negatively charged",
      "Y is positively charged and Z is positively charged",
      "Y is negatively charged and Z is negatively charged",
      "Y is negatively charged and Z is positively charged",
    ], 0)],
    image_url: `${IMG}/1.7-spheres-XYZ.png`,
  },
  {
    number: "1", sub_number: "1.8",
    text: "In the circuit diagrams, the cells and resistors are identical. The cells have negligible internal resistances. In the left circuit two resistors (X and another) are in series with the cell; in the right circuit two resistors (one of them Y) are in parallel across the cell. The power dissipated in resistor X is P. The power dissipated in resistor Y is ... (A) ¼P. (B) ½P. (C) 2P. (D) 4P.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "D — 4P. In series each resistor has V/2 across it, so PX = (V/2)²/R = V²/4R = P. In parallel Y has the full V across it, so PY = V²/R = 4P.",
    marking_notes: "Accept only 'D'.",
    steps: [st(2, "The power dissipated in resistor Y is ...", ["¼P", "½P", "2P", "4P"], 3)],
    image_url: `${IMG}/1.8-circuits-XY.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "Which ONE of the following actions will NOT cause an INCREASE in the induced emf in a coil if the coil is rotated in a uniform magnetic field? (A) Rotating the coil faster (B) Increasing the strength of the magnetic field (C) Increasing the number of turns of the coil (D) Replacing the coil with a coil of lower resistance",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "D — the induced emf depends on the rate of change of flux (rotation speed, field strength, number of turns), not on the resistance of the coil.",
    marking_notes: "Accept only 'D'.",
    steps: [st(2, "Which action will NOT increase the induced emf?", [
      "Rotating the coil faster",
      "Increasing the strength of the magnetic field",
      "Increasing the number of turns of the coil",
      "Replacing the coil with a coil of lower resistance",
    ], 3)],
  },
  {
    number: "1", sub_number: "1.10",
    text: "A learner writes the following statements about the emission spectrum of light: (i) An emission spectrum is formed when certain frequencies of electromagnetic radiation pass through a cold gas. (ii) The lines in the emission spectrum of an atom have the same frequency as the corresponding lines in the atom's absorption spectrum. (iii) An emission spectrum is formed when the atom makes transitions from a high-energy state to a lower energy state. Which ONE of the following combinations is CORRECT? (A) (i) only (B) (ii) only (C) (ii) and (iii) only (D) (i) and (iii) only",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C — (ii) and (iii) only. (i) describes an absorption spectrum, not an emission spectrum.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Which combination of the statements is CORRECT?", [
      "(i) only",
      "(ii) only",
      "(ii) and (iii) only",
      "(i) and (iii) only",
    ], 2)],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (17 marks) ============
  {
    number: "2", sub_number: "2.1",
    text: "A block of mass 8 kg is placed on a rough horizontal surface. The 8 kg block, connected to a 2 kg block by a light inextensible string passing over a light frictionless pulley, starts sliding from point A. State Newton's Second Law of Motion in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When a (non-zero) resultant/net force acts on an object, the object will accelerate in the direction of the force with an acceleration that is directly proportional to the force and inversely proportional to the mass of the object. (OR: the net force on an object equals the rate of change of its momentum in the direction of the net force.)",
    marking_notes: "Memo: 2 or 0 for the full statement; accept 'acceleration is directly proportional to the net force and inversely proportional to the mass'. Deduct 1 if an underlined key word (net/resultant force, directly, inversely, mass) is omitted.",
    steps: [st(2, "Which statement is Newton's Second Law of Motion?", [
      "When a net force acts on an object, it accelerates in the direction of the force, with acceleration directly proportional to the net force and inversely proportional to the mass of the object",
      "When a net force acts on an object, it accelerates in the direction of the force, with acceleration directly proportional to the mass and inversely proportional to the net force",
      "An object remains at rest or in uniform motion unless a net force acts on it",
      "When object A exerts a force on object B, B exerts an equal force in the opposite direction on A",
    ], 0)],
    image_url: `${IMG}/2-block-pulley.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram for the 8 kg block. (The block is pulled by a string at 15° above the horizontal towards the pulley, and slides to the right over a rough surface.) Choose the correct description for each force.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on the 8 kg block, all drawn from one point: weight w (Fg) vertically downward; normal force N vertically upward; tension T along the string, up and to the right at 15° to the horizontal (towards the pulley); kinetic friction f horizontally to the left, opposing the motion.",
    marking_notes: "One mark per correctly labelled force with a correctly directed arrow: w, N, T, f. Do not penalise arrow length. If T is not shown but T∥ and T⊥ are, give 1 mark for both. Deduct 1 for any additional force; forces must touch the body.",
    steps: [
      st(1, "The weight (w, Fg, mg) of the 8 kg block acts ...", ["vertically downward", "vertically upward", "downward along the surface", "perpendicular to the string"], 0),
      st(1, "The normal force (N) acts ...", ["vertically upward", "vertically downward", "horizontally to the right", "along the string"], 0),
      st(1, "The tension (T) in the string acts ...", ["along the string, up and to the right at 15° to the horizontal", "horizontally to the right only", "vertically upward", "along the string, down and to the left"], 0),
      st(1, "The kinetic frictional force (f) acts ...", ["horizontally to the left, opposite to the motion", "horizontally to the right, in the direction of motion", "vertically downward", "up and to the left at 15°"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "When the 8 kg block reaches point B, the angle between the string and the horizontal is 15° and the acceleration of the system is 1,32 m·s⁻². Give a reason why the system is NOT in equilibrium.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "The system is accelerating (a ≠ 0), so the net force is not zero (accept: velocity is changing; unbalanced force acts).",
    marking_notes: "Accept any one: the 2 kg/8 kg block or system is accelerating; acceleration is not zero; velocity is changing/not constant; Fnet ≠ 0; an unbalanced force is acting.",
    steps: [st(1, "Why is the system NOT in equilibrium?", [
      "The system is accelerating, so the net force is not zero",
      "The block is moving at a constant velocity",
      "The tension in the string equals the weight of the 2 kg mass",
      "The 8 kg block is heavier than the 2 kg block",
    ], 0)],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Use the 2 kg mass to calculate the tension in the string (acceleration 1,32 m·s⁻²).",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For the 2 kg mass (downward positive): Fnet = ma, so mg − T = ma, (2)(9,8) − T = 2(1,32), giving T = 16,96 N.",
    marking_notes: "Formula Fnet = ma (mg − T = ma), correct substitution, and T = 16,96 N.",
    steps: [
      st(1, "Which equation of motion applies to the 2 kg mass (hanging, accelerating downward)?", ["mg − T = ma", "mg + T = ma", "T = ma", "T − mg = ma"], 0),
      st(1, "Which substitution is correct?", ["(2)(9,8) − T = 2(1,32)", "(2)(9,8) + T = 2(1,32)", "(8)(9,8) − T = 8(1,32)", "T = 2(1,32)"], 0),
      st(1, "What is the tension T?", ["16,96 N", "22,24 N", "19,60 N", "2,64 N"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "Calculate the kinetic frictional force between the 8 kg block and the horizontal surface (use T from QUESTION 2.3.2; string at 15° to the horizontal, acceleration 1,32 m·s⁻²).",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For the 8 kg block (to the right positive): Fnet = ma, Tcos15° − f = ma. Horizontal component of tension: Tx = 16,96cos15° = 16,38 N. Then 16,382 − f = (8)(1,32), giving f = 5,82 N (to the left).",
    marking_notes: "Fnet = ma with Tcos15° − f = ma; Tx = 16,38 N; correct substitution; f = 5,82 N. Positive marking from 2.3.2.",
    steps: [
      st(1, "Which equation of motion applies horizontally to the 8 kg block?", ["Tcos15° − f = ma", "Tsin15° − f = ma", "T − f = ma", "Tcos15° + f = ma"], 0),
      st(1, "What is the horizontal component of the tension?", ["16,38 N", "4,39 N", "16,96 N", "17,56 N"], 0),
      st(1, "What is ma for the 8 kg block?", ["10,56 N", "2,64 N", "78,40 N", "6,06 N"], 0),
      st(1, "What is the kinetic frictional force f?", ["5,82 N", "26,94 N", "6,40 N", "10,56 N"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "As the 8 kg block moves from B to C, the kinetic frictional force between the 8 kg block and the horizontal surface is not constant. Give a reason for this statement.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "The normal force changes (decreases), because the angle between the string and the horizontal changes/increases and so the vertical component of the tension changes.",
    marking_notes: "Accept any ONE: normal force changes/decreases; the angle changes/increases; the vertical component of the tension changes/increases.",
    steps: [st(1, "Why is the kinetic frictional force not constant from B to C?", [
      "The normal force changes because the angle of the string (and the vertical component of tension) changes",
      "The mass of the 8 kg block changes",
      "The coefficient of kinetic friction of the surface changes",
      "The gravitational force on the block changes",
    ], 0)],
  },
  {
    number: "2", sub_number: "2.5",
    text: "The horizontal surface on which the 8 kg block is moving is replaced by another horizontal surface made from a different material. Will the kinetic frictional force, calculated in QUESTION 2.3.3, change? Choose from: YES or NO. Give a reason for the answer.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "Yes. The frictional force (coefficient of friction) depends on the nature of the surfaces in contact.",
    marking_notes: "Yes (1) plus reason (1): friction depends on the nature of the surfaces in contact. Accept: the nature of the surface changes / µk changes.",
    steps: [
      st(1, "Will the kinetic frictional force change?", ["YES", "NO", "Only if the mass of the block changes", "Only if the acceleration changes"], 0),
      st(1, "Give the reason.", [
        "Friction depends on the nature of the surfaces in contact (the coefficient of friction changes)",
        "Friction depends only on the speed of the block",
        "Friction depends only on the mass of the 2 kg block",
        "Friction does not depend on the surface at all",
      ], 0),
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (13 marks) ============
  {
    number: "3", sub_number: "3.1",
    text: "A ball is thrown vertically upwards at 7,5 m·s⁻¹ from a point 1,6 m above the ground, towards point T marked on a tall vertical pole, 3,7 m above the ground. Ignore air resistance. In which direction is the net force acting on the ball while it moves towards point T? Choose from: UPWARDS or DOWNWARDS. Give a reason for the answer.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "Downwards. The only force acting on the ball is the gravitational force (weight), which acts downwards.",
    marking_notes: "Downwards (1) plus reason (1): only force is gravitational/weight, which acts downwards (accept: ball in free fall; gravitational acceleration is downwards).",
    steps: [
      st(1, "In which direction is the net force on the ball?", ["DOWNWARDS", "UPWARDS", "Zero (no net force)", "Upwards while rising, downwards only after the highest point"], 0),
      st(1, "Give the reason.", [
        "The only force acting on the ball is the gravitational force (weight), which acts downwards",
        "The force of the throw still acts upwards on the ball",
        "The upward velocity means the net force is upward",
        "The normal force from the air balances the weight",
      ], 0),
    ],
    image_url: `${IMG}/3-pole-T.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the time taken by the ball to reach its highest point (thrown upward at 7,5 m·s⁻¹).",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Upward positive, vf = 0 at the highest point: vf = vi + aΔt, 0 = 7,5 + (−9,8)Δt, so Δt = 0,77 s.",
    marking_notes: "Any correct method (vf = vi + aΔt; Δy then Δy = ½(vi + vf)Δt; impulse; top-to-bottom variants) gives Δt = 0,77 s (0,765 s). Formula, substitution and answer.",
    steps: [
      st(1, "Which equation of motion applies (vf = 0 at the highest point)?", ["vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt", "Δy = ½aΔt²"], 0),
      st(1, "Which substitution is correct (upward positive)?", ["0 = 7,5 + (−9,8)Δt", "0 = 7,5 + (9,8)Δt", "0 = 7,5² + (−9,8)Δt", "7,5 = 0 + (−9,8)Δt²"], 0),
      st(1, "What is the time to reach the highest point?", ["0,77 s", "1,53 s", "1,31 s", "0,38 s"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Determine, by means of a calculation, whether the ball will pass point T or not. (Thrown upward at 7,5 m·s⁻¹ from 1,6 m above the ground; T is 3,7 m above the ground.)",
    marks: 6, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "Upward positive, vf = 0 at the highest point: vf² = vi² + 2aΔy, 0 = (7,5)² + (2)(−9,8)Δy, so Δy = 2,87 m. The height needed to reach T is 3,7 − 1,6 = 2,1 m. Since 2,87 m > 2,1 m, the ball will pass point T.",
    marking_notes: "Formula, substitution, Δy = 2,87 m, height needed 2,1 m, comparison and conclusion. Many alternative methods accepted (e.g. highest point 4,47 m above the ground > 3,7 m; time to reach T 0,36/0,375 s < 0,77 s; velocity at T 3,88 m·s⁻¹ so still rising; required launch speed 6,42 m·s⁻¹ < 7,5 m·s⁻¹; energy methods).",
    steps: [
      st(1, "Which equation of motion finds the height risen above the launch point?", ["vf² = vi² + 2aΔy", "vf = vi + aΔt", "Δy = viΔt", "Δy = vavΔt with vav = 7,5 m·s⁻¹"], 0),
      st(2, "What height does the ball rise above the launch point?", ["2,87 m", "5,74 m", "1,43 m", "0,29 m"], 0),
      st(1, "What height above the launch point is needed to reach T?", ["2,1 m", "3,7 m", "1,6 m", "5,3 m"], 0),
      st(1, "How do the two heights compare?", ["2,87 m is greater than 2,1 m", "2,87 m is smaller than 2,1 m", "2,87 m is smaller than 3,7 m", "2,87 m equals 2,1 m"], 0),
      st(1, "What is the conclusion?", ["The ball will pass point T", "The ball will not reach point T", "The ball will just reach T and stop there", "It cannot be determined from the given data"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Draw a velocity-time graph for the motion of the ball from the instant it is thrown upwards until it reaches its highest point. Indicate the initial velocity and final velocity, and the time taken to reach the highest point. (Take upward as positive; the memo also accepts the downward-positive version.)",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A straight line starting at v = +7,5 m·s⁻¹ at t = 0 and falling with constant gradient −9,8 m·s⁻² to v = 0 at t = 0,77 s (mirror image, starting at −7,5 m·s⁻¹, if downward is positive).",
    marking_notes: "1 mark: initial velocity (7,5) and final velocity (0) with the time (0,77 s) shown. 1 mark: correct straight line including orientation. Positive marking from 3.2.",
    steps: [
      st(1, "Which end points should be marked (upward positive)?", [
        "Starts at +7,5 m·s⁻¹ at t = 0 and ends at 0 m·s⁻¹ at t = 0,77 s",
        "Starts at 0 and ends at +7,5 m·s⁻¹ at t = 0,77 s",
        "Starts at +7,5 m·s⁻¹ and ends at 0 at t = 1,53 s",
        "Starts at 0 at t = 0 and ends at −7,5 m·s⁻¹ at t = 0,77 s",
      ], 0),
      st(1, "Which line shape is correct?", [
        "A single straight line with a constant negative gradient (−9,8 m·s⁻²)",
        "A single straight line with a positive gradient",
        "A horizontal straight line at 7,5 m·s⁻¹",
        "A curve that flattens out near the highest point",
      ], 0),
    ],
  },

  // ============ QUESTION 4: MOMENTUM AND IMPULSE (14 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "Initially a girl on roller skates is at rest on a smooth horizontal pavement. The girl throws a parcel, of mass 8 kg, horizontally to the right at a speed of 4 m·s⁻¹. Immediately after the parcel has been thrown, the girl-roller-skate combination moves at a speed of 0,6 m·s⁻¹. Ignore friction and rotation. Define the term momentum in words.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "Momentum is the product of the mass of an object and its velocity.",
    marking_notes: "Memo: 2 or 0.",
    steps: [st(2, "Which statement defines momentum?", [
      "The product of the mass of an object and its velocity",
      "The product of the mass of an object and its acceleration",
      "The product of the net force on an object and its velocity",
      "The product of the mass of an object and the square of its velocity",
    ], 0)],
    image_url: `${IMG}/4-skater-parcel.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Will the girl-roller-skate combination move TO THE RIGHT or TO THE LEFT after the parcel is thrown? NAME the law in physics that can be used to explain your choice of direction.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Comprehension",
    model_answer: "To the left. Newton's Third Law (accept: principle of conservation of linear momentum; law of action-reaction; Newton's Third and Second Laws).",
    marking_notes: "Direction (1) plus law (1).",
    steps: [
      st(1, "In which direction will the girl-roller-skate combination move?", ["To the left", "To the right", "It stays at rest", "Upwards"], 0),
      st(1, "Which law explains this?", ["Newton's Third Law", "Newton's First Law only", "Law of conservation of energy", "Coulomb's Law"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "The total mass of the roller skates is 2 kg. Calculate the mass of the girl. (Parcel 8 kg thrown to the right at 4 m·s⁻¹; girl-skate combination moves at 0,6 m·s⁻¹ afterwards. Take right as positive.)",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Σpi = Σpf: (m + 2)(0) + (8)(0) = (m + 2)(−0,6) + (8)(4), so m = 51,33 kg.",
    marking_notes: "Σpi = Σpf; substitution of the zero initial momentum, (m + 2)(−0,6) and (8)(4); m = 51,33 kg. Accept the opposite sign convention. Penalise the sign of 0,6 only once.",
    steps: [
      st(1, "Which principle/equation applies?", ["Σpi = Σpf (conservation of linear momentum)", "Σ Eki = Σ Ekf (conservation of kinetic energy)", "Fnet = ma", "Fnet·Δt = 0"], 0),
      st(1, "What is the total momentum before the parcel is thrown?", ["Zero (everything is at rest)", "(8)(4) = 32 kg·m·s⁻¹", "(m + 2)(0,6)", "(m + 2)(4)"], 0),
      st(1, "Which expression gives the total momentum after (right positive)?", ["(m + 2)(−0,6) + (8)(4)", "(m + 2)(0,6) + (8)(4)", "(m)(−0,6) + (8)(4)", "(m + 2)(−0,6) − (8)(4)"], 0),
      st(2, "What is the mass of the girl?", ["51,33 kg", "53,33 kg", "55,33 kg", "49,33 kg"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Calculate the magnitude of the impulse that the girl-roller-skate combination is experiencing while the parcel is being thrown.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Impulse = Δp = m(vf − vi) = (51,33 + 2)(−0,6 − 0) = −32 N·s, so the magnitude is 32 N·s (equivalently Δp of the parcel = (8)(4 − 0) = 32 kg·m·s⁻¹).",
    marking_notes: "Impulse = Δp = m(vf − vi); correct substitution; 32 N·s. Positive marking from 4.3.",
    steps: [
      st(1, "Which equation gives the impulse?", ["Impulse = Δp = m(vf − vi)", "Impulse = ½m(vf² − vi²)", "Impulse = mv", "Impulse = F/Δt"], 0),
      st(1, "Which substitution is correct (girl plus skates)?", ["(51,33 + 2)(−0,6 − 0)", "(51,33)(−0,6 − 0)", "(8)(−0,6 − 0)", "(51,33 + 2)(4 − 0)"], 0),
      st(1, "What is the magnitude of the impulse?", ["32 N·s", "30,8 N·s", "4,8 N·s", "213 N·s"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Without any further calculation, write down the change in momentum experienced by the parcel while it is being thrown.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Comprehension",
    model_answer: "32 kg·m·s⁻¹ (N·s) to the right (opposite in direction to the change in momentum of the girl).",
    marking_notes: "Magnitude 32 (1) and direction to the right/opposite (1). Positive marking from 4.4.",
    steps: [st(2, "What is the change in momentum of the parcel?", [
      "32 kg·m·s⁻¹ to the right",
      "32 kg·m·s⁻¹ to the left",
      "30,8 kg·m·s⁻¹ to the right",
      "Zero, because momentum is conserved",
    ], 0)],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (13 marks) ============
  {
    number: "5", sub_number: "5.1",
    text: "A vehicle of mass 1 500 kg starts from rest at point A at the bottom of a rough incline. Point B is 200 m vertically above the horizontal. The total work done by force F that moves the vehicle from A to B in 90 s is 4,80 × 10⁶ J. Define the term non-conservative force.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "A force is non-conservative if the work it does on an object moving between two points depends on the path taken (or: the work it does around a closed path is non-zero).",
    marking_notes: "Underlined key words: work, path. If 'work' is omitted 0 marks; if another key word is omitted deduct 1.",
    steps: [st(2, "Which statement defines a non-conservative force?", [
      "A force is non-conservative if the work it does on an object moving between two points depends on the path taken",
      "A force is non-conservative if the work it does on an object moving between two points is independent of the path taken",
      "A force is non-conservative if the work it does around a closed path is always zero",
      "A force is non-conservative if it always acts in the direction opposite to the motion",
    ], 0)],
    image_url: `${IMG}/5-vehicle-incline.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Is force F a conservative force? Choose from: YES or NO.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "No.",
    marking_notes: "Accept only 'No'.",
    steps: [st(1, "Is force F a conservative force?", ["NO", "YES", "Only on a frictionless incline", "Only at constant speed"], 0)],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Calculate the average power generated by force F (work 4,80 × 10⁶ J in 90 s).",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "P = W/Δt = 4,80 × 10⁶ / 90 = 53 333,33 W (5,33 × 10⁴ W).",
    marking_notes: "Formula, substitution and answer 5,33 × 10⁴ W (53,33 kW). Alternative: Pave = Fvave with F = 4 266,67 N and vave = 12,5 m·s⁻¹.",
    steps: [
      st(1, "Which formula gives the average power?", ["P = W/Δt", "P = WΔt", "P = mgh/Δt", "P = ½mv²"], 0),
      st(1, "Which substitution is correct?", ["P = 4,80 × 10⁶ / 90", "P = (4,80 × 10⁶)(90)", "P = (1 500)(9,8)(200) / 90", "P = 4,80 × 10⁶ / 200"], 0),
      st(1, "What is the average power?", ["5,33 × 10⁴ W", "4,32 × 10⁸ W", "3,27 × 10⁴ W", "2,67 × 10⁴ W"], 0),
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "The speed of the vehicle when it reaches point B is 25 m·s⁻¹. State the work-energy theorem in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The net/total work done on an object is equal to the change in the object's kinetic energy (or: the work done on an object by a net force equals the change in its kinetic energy).",
    marking_notes: "Underlined key words: net/total work, change in kinetic energy. Deduct 1 for an omitted key word.",
    steps: [st(2, "Which statement is the work-energy theorem?", [
      "The net work done on an object is equal to the change in the object's kinetic energy",
      "The net work done on an object is equal to the change in the object's potential energy",
      "The work done by the applied force alone is equal to the change in the object's kinetic energy",
      "The net work done on an object is equal to the object's kinetic energy at the end of the motion",
    ], 0)],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Use energy principles to calculate the total work done on the vehicle by the frictional forces. (Mass 1 500 kg, from rest at A to 25 m·s⁻¹ at B, B is 200 m higher, work done by F is 4,80 × 10⁶ J.)",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Wnet = ΔK: Ww + Wf + WF = ½mvf² − ½mvi². Ww = mgΔxcos180° = −(1 500)(9,8)(200) = −2 940 000 J and ΔK = ½(1 500)(25²) = 468 750 J, so −2 940 000 + Wf + 4,8 × 10⁶ = 468 750, giving Wf = −1 391 250 J = −1,39 × 10⁶ J.",
    marking_notes: "Wnet = ΔK (or Wnc = ΔK + ΔU); Ww = −2,94 × 10⁶ J (or ΔEp); ΔK = 468 750 J; substitution; Wf = −1,39 × 10⁶ J (−1,40 × 10⁶ J accepted). Alternative accepted via a = 0,2778 m·s⁻², Fnet = 416,67 N, fk = 1 236,67 N, Wf = fkΔxcos180° with Δx = 1 125 m.",
    steps: [
      st(1, "Which equation applies?", ["Wnet = ΔK, i.e. Ww + Wf + WF = ½mvf² − ½mvi²", "Wf = ½mvf²", "Wnet = ΔEp", "WF = Wf + Ww"], 0),
      st(1, "What is the work done by gravity from A to B?", ["−2,94 × 10⁶ J", "+2,94 × 10⁶ J", "−1,47 × 10⁶ J", "−2,94 × 10⁴ J"], 0),
      st(1, "What is the change in kinetic energy?", ["468 750 J", "937 500 J", "18 750 J", "37 500 J"], 0),
      st(1, "Which equation results after substituting?", ["−2 940 000 + Wf + 4,8 × 10⁶ = 468 750", "2 940 000 + Wf + 4,8 × 10⁶ = 468 750", "−2 940 000 + Wf = 468 750", "−2 940 000 + Wf + 4,8 × 10⁶ = 0"], 0),
      st(1, "What is the work done by the frictional forces?", ["−1,39 × 10⁶ J", "+1,39 × 10⁶ J", "−1,86 × 10⁶ J", "−7,27 × 10⁶ J"], 0),
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (13 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "The alarm of a vehicle parked next to a straight horizontal road goes off, emitting sound with a wavelength of 0,34 m. A patrol car is moving at a constant speed on the same road. The driver of the patrol car hears a sound with a frequency 50 Hz lower than the sound emitted by the alarm. The speed of sound in air is 340 m·s⁻¹. State the Doppler effect in words.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The change in frequency (or pitch) of the sound detected by a listener because the sound source and the listener have different velocities relative to the medium of sound propagation. (OR: an apparent change in observed frequency as a result of the relative motion between a source and an observer.)",
    marking_notes: "Underlined key words: change in frequency (pitch), source and listener, relative motion/velocities. Deduct 1 if omitted.",
    steps: [st(2, "Which statement is the Doppler effect?", [
      "The change in frequency (pitch) of the sound detected by a listener because the sound source and the listener have different velocities relative to the medium of sound propagation",
      "The change in the speed of sound detected by a listener because the source and the listener move relative to each other",
      "The change in amplitude (loudness) of sound detected by a listener as the distance from the source changes",
      "The bending of sound waves around obstacles so that a listener hears a different frequency",
    ], 0)],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Is the patrol car driving TOWARDS or AWAY FROM the parked vehicle? Give a reason for the answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Away from the parked vehicle. The observed (detected) frequency is lower than the emitted frequency.",
    marking_notes: "Direction (1) plus reason: observed frequency is lower (1).",
    steps: [
      st(1, "Is the patrol car driving towards or away from the parked vehicle?", ["AWAY FROM the parked vehicle", "TOWARDS the parked vehicle", "It is stationary", "It is moving perpendicular to the road"], 0),
      st(1, "Give the reason.", [
        "The observed frequency is lower than the emitted frequency",
        "The observed frequency is higher than the emitted frequency",
        "The wavelength of the alarm sound has increased",
        "The speed of sound in air has decreased",
      ], 0),
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Calculate the frequency of the sound emitted by the alarm (wavelength 0,34 m, speed of sound 340 m·s⁻¹).",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "v = fλ: 340 = f(0,34), so f = 1 000 Hz.",
    marking_notes: "Formula, substitution, answer 1 000 Hz.",
    steps: [
      st(1, "Which formula applies?", ["v = fλ", "v = f/λ", "f = vλ", "λ = fv"], 0),
      st(1, "Which substitution is correct?", ["340 = f(0,34)", "340 = f/0,34", "0,34 = f(340)", "340 = f(0,34)²"], 0),
      st(1, "What is the frequency emitted by the alarm?", ["1 000 Hz", "950 Hz", "115,6 Hz", "0,001 Hz"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "The patrol car moves a distance of x metres in 10 seconds. Calculate the distance x. (Use the emitted frequency from 6.3; the driver hears a frequency 50 Hz lower.)",
    marks: 6, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "fL = [(v − vL)/(v + vs)]fs with vs = 0: 950 = [(340 − vL)/340](1 000), so vL = 17 m·s⁻¹. Then x = vΔt = (17)(10) = 170 m. (Accepted alternative: vL = Δfλ = (50)(0,34) = 17 m·s⁻¹.)",
    marking_notes: "Doppler formula; fL = 950 Hz; substitution; vL = 17 m·s⁻¹; x = vΔt; x = 170 m. Positive marking from 6.3.",
    steps: [
      st(1, "Which formula applies (source stationary, listener moving away)?", ["fL = [(v − vL)/v]fs", "fL = [(v + vL)/v]fs", "fL = [v/(v − vs)]fs", "fL = [(v − vL)/(v + vL)]fs"], 0),
      st(1, "What frequency does the driver hear?", ["950 Hz", "1 050 Hz", "50 Hz", "1 000 Hz"], 0),
      st(1, "Which substitution is correct?", ["950 = [(340 − vL)/340](1 000)", "950 = [(340 + vL)/340](1 000)", "950 = [340/(340 − vL)](1 000)", "50 = [(340 − vL)/340](1 000)"], 0),
      st(1, "What is the speed of the patrol car?", ["17 m·s⁻¹", "323 m·s⁻¹", "357 m·s⁻¹", "1,7 m·s⁻¹"], 0),
      st(1, "Which formula gives the distance?", ["x = vΔt", "x = v/Δt", "x = vΔt/2", "x = vΔt²"], 0),
      st(1, "What is the distance x?", ["170 m", "1,7 m", "3 230 m", "3 570 m"], 0),
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (19 marks) ============
  {
    number: "7", sub_number: "7.1",
    text: "Three small identical metal spheres, P, S and T, on insulated stands, are initially neutral. They are then charged to carry charges of −15 × 10⁻⁹ C, Q and +2 × 10⁻⁹ C respectively. The charged spheres are brought together so that all three touch each other at the same time, and are then separated. The charge on each sphere, after separation, is −3 × 10⁻⁹ C. Determine the value of charge Q.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Qnet = (Q1 + Q2 + Q3)/3: −3 × 10⁻⁹ = (−15 × 10⁻⁹ + Q + 2 × 10⁻⁹)/3, so Q = +4 × 10⁻⁹ C.",
    marking_notes: "1 mark for the sum of the three correct charges divided by 3; 1 mark for Q = +4 × 10⁻⁹ C.",
    steps: [
      st(1, "Which equation is correct?", ["−3 × 10⁻⁹ = (−15 × 10⁻⁹ + Q + 2 × 10⁻⁹)/3", "−3 × 10⁻⁹ = −15 × 10⁻⁹ + Q + 2 × 10⁻⁹", "−3 × 10⁻⁹ = (−15 × 10⁻⁹ + Q − 2 × 10⁻⁹)/3", "−3 × 10⁻⁹ = (−15 × 10⁻⁹ + Q + 2 × 10⁻⁹)/2"], 0),
      st(1, "What is Q?", ["+4 × 10⁻⁹ C", "−4 × 10⁻⁹ C", "+10 × 10⁻⁹ C", "+8 × 10⁻⁹ C"], 0),
    ],
    image_url: `${IMG}/7-spheres-PST.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Draw the electric field pattern associated with the charged spheres, S and T, after they are separated (each now carries −3 × 10⁻⁹ C) and returned to their original positions. Choose the correct description of the pattern.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Two equal negative point charges: field lines point TOWARDS each sphere (arrows into the spheres), curving away from each other so that no line joins the two spheres (a neutral point lies midway between them). Lines do not cross and touch the spheres. (Memo addendum also accepts the diagram that includes the effect of the third charge.)",
    marking_notes: "1 mark correct shape; 1 mark correct direction (towards negative charges); 1 mark lines do not cross and touch the spheres.",
    steps: [
      st(1, "Which shape is correct?", [
        "Radial lines from each sphere that bend away from each other, with a neutral point midway (repulsion pattern)",
        "Straight lines running directly from one sphere to the other (attraction pattern)",
        "Closed circular loops around both spheres",
        "Parallel straight lines between the two spheres",
      ], 0),
      st(1, "Which direction of the arrows is correct?", [
        "Pointing towards (into) both spheres",
        "Pointing away from both spheres",
        "Pointing from S towards T",
        "Pointing from T towards S",
      ], 0),
      st(1, "Which drawing rule must be satisfied?", [
        "Field lines must not cross and must touch the spheres",
        "Field lines should cross at the midpoint between the spheres",
        "Field lines should stop short of the spheres",
        "Field lines should be drawn as dashed closed loops",
      ], 0),
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "State Coulomb's law in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The magnitude of the electrostatic force exerted by one point charge (Q1) on another point charge (Q2) is directly proportional to the product of the (magnitudes of the) charges and inversely proportional to the square of the distance (r) between them.",
    marking_notes: "Deduct 1 if an underlined key word is omitted; if masses are used (0/2).",
    steps: [st(2, "Which statement is Coulomb's law?", [
      "The magnitude of the electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them",
      "The magnitude of the electrostatic force between two point charges is directly proportional to the sum of the magnitudes of the charges and inversely proportional to the square of the distance between them",
      "The magnitude of the electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the distance between them",
      "The magnitude of the electrostatic force between two point charges is directly proportional to the product of their masses and inversely proportional to the square of the distance between them",
    ], 0)],
  },
  {
    number: "7", sub_number: "7.4",
    text: "The spheres, each with the new charge of −3 × 10⁻⁹ C, are placed with sphere P at the origin, sphere S on the y-axis 0,1 m from P and sphere T on the x-axis 0,3 m from P. Calculate the magnitude of the net electrostatic force acting on sphere P.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = kQ1Q2/r². FSP = (9 × 10⁹)(3 × 10⁻⁹)(3 × 10⁻⁹)/(0,1)² = 8,1 × 10⁻⁶ N (along the y-axis, away from S i.e. downwards). FTP = (9 × 10⁹)(3 × 10⁻⁹)(3 × 10⁻⁹)/(0,3)² = 9 × 10⁻⁷ N (along the x-axis, to the left). Fnet² = FSP² + FTP², so Fnet = 8,15 × 10⁻⁶ N.",
    marking_notes: "Formula; both substitutions; Fnet from Pythagoras; 8,15 × 10⁻⁶ N. Alternative: fields ES = 2 700 N·C⁻¹, ET = 300 N·C⁻¹, Enet = 2 716,62 N·C⁻¹, F = Eq = 8,15 × 10⁻⁶ N.",
    steps: [
      st(1, "Which formula gives the force between two charges?", ["F = kQ1Q2/r²", "F = kQ1Q2/r", "F = kQ/r²", "F = Q1Q2/(kr²)"], 0),
      st(1, "What is the force exerted by S on P?", ["8,1 × 10⁻⁶ N", "9,0 × 10⁻⁷ N", "8,1 × 10⁻⁵ N", "2,7 × 10⁻⁶ N"], 0),
      st(1, "What is the force exerted by T on P?", ["9,0 × 10⁻⁷ N", "8,1 × 10⁻⁶ N", "2,7 × 10⁻⁷ N", "9,0 × 10⁻⁸ N"], 0),
      st(2, "What is the magnitude of the net force on P (the two forces are at right angles)?", ["8,15 × 10⁻⁶ N", "9,00 × 10⁻⁶ N", "7,20 × 10⁻⁶ N", "6,56 × 10⁻¹¹ N"], 0),
    ],
    image_url: `${IMG}/7-spheres-axes.png`,
  },
  {
    number: "7", sub_number: "7.5",
    text: "Calculate the magnitude of the net electric field at the origin due to charges S and T.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = F/q = 8,15 × 10⁻⁶ / 3 × 10⁻⁹ = 2,72 × 10³ N·C⁻¹. (Or: ES = 2 700 N·C⁻¹, ET = 300 N·C⁻¹, Enet = √(2 700² + 300²) = 2 716,62 N·C⁻¹.)",
    marking_notes: "Formula, substitution, answer 2,72 × 10³ N·C⁻¹. Positive marking from 7.4; full marks if the calculation was done in 7.4.",
    steps: [
      st(1, "Which formula applies?", ["E = F/q", "E = Fq", "E = kQ/r", "E = F/q²"], 0),
      st(1, "Which substitution is correct?", ["E = 8,15 × 10⁻⁶ / 3 × 10⁻⁹", "E = (8,15 × 10⁻⁶)(3 × 10⁻⁹)", "E = 3 × 10⁻⁹ / 8,15 × 10⁻⁶", "E = 8,15 × 10⁻⁶ / (3 × 10⁻⁹)²"], 0),
      st(1, "What is the net electric field at the origin?", ["2,72 × 10³ N·C⁻¹", "2,70 × 10³ N·C⁻¹", "3,00 × 10³ N·C⁻¹", "2,4 × 10⁻¹⁴ N·C⁻¹"], 0),
    ],
  },
  {
    number: "7", sub_number: "7.6.1",
    text: "ONE of the charged spheres, P and T, experienced a very small increase in mass after it was charged initially. Which sphere, P or T, experienced this very small increase in mass?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Sphere P or sphere T (the memo accepts either; physically, P gained electrons when it was charged to −15 × 10⁻⁹ C).",
    marking_notes: "Memo: 'Sphere P or/of T'. Both accepted for 1 mark; the pickable answer states this.",
    steps: [st(1, "Which sphere experienced the very small increase in mass?", [
      "Sphere P or sphere T (either is accepted by the memo)",
      "Neither sphere",
      "Both spheres, by exactly the same amount",
      "Only sphere S",
    ], 0)],
  },
  {
    number: "7", sub_number: "7.6.2",
    text: "Calculate the increase in mass by the sphere in QUESTION 7.6.1. (Electron charge 1,6 × 10⁻¹⁹ C, electron mass 9,11 × 10⁻³¹ kg.)",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Sphere P: n = Q/qe = 15 × 10⁻⁹/1,6 × 10⁻¹⁹ = 9,38 × 10¹⁰ electrons; m = n·me = (9,38 × 10¹⁰)(9,11 × 10⁻³¹) = 8,55 × 10⁻²⁰ kg. (Sphere T, if chosen: n = 5 × 10⁻⁹/1,6 × 10⁻¹⁹ = 3,125 × 10¹⁰; m = 2,85 × 10⁻²⁰ kg.)",
    marking_notes: "n = Q/e (1); number of electrons (1); mass gained = n·me (1). Memo accepts the working for either P (8,55 × 10⁻²⁰ kg) or T (2,85 × 10⁻²⁰ kg).",
    steps: [
      st(1, "Which equation finds the number of electrons transferred?", ["n = Q/qe", "n = Q·qe", "n = qe/Q", "n = Q/me"], 0),
      st(1, "How many electrons were transferred?", [
        "9,38 × 10¹⁰ for P (or 3,125 × 10¹⁰ for T)",
        "1,88 × 10¹⁰ (using the final charge of −3 × 10⁻⁹ C)",
        "2,4 × 10⁻²⁸",
        "1,67 × 10⁻¹⁰",
      ], 0),
      st(1, "What is the increase in mass?", [
        "8,55 × 10⁻²⁰ kg for P (or 2,85 × 10⁻²⁰ kg for T)",
        "1,57 × 10⁻¹⁶ kg",
        "1,71 × 10⁻²⁰ kg",
        "8,55 × 10⁻³⁰ kg",
      ], 0),
    ],
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (11 marks) ============
  {
    number: "8", sub_number: "8.1",
    text: "The battery in the circuit has an emf of 12 V and an internal resistance of 0,5 Ω. Resistor R has an unknown resistance (a 2 Ω resistor with switch S is in parallel with R; a voltmeter is across the battery terminals and an ammeter is in the main line). What is the meaning of the following statement? The emf of the battery is 12 V.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The battery supplies 12 J of energy per coulomb (unit charge) (or: the potential difference of the battery in an open circuit is 12 V).",
    marking_notes: "Accept any of: 12 J per coulomb; pd of the battery in an open circuit is 12 V; the battery does 12 J of work per coulomb; maximum work/energy supplied per unit charge is 12 J; the greatest pd the battery can generate is 12 V. Deduct 1 if an underlined key word is omitted.",
    steps: [st(2, "What is the meaning of the statement 'The emf of the battery is 12 V'?", [
      "The battery supplies 12 J of energy per coulomb of charge",
      "The battery supplies 12 C of charge per joule of energy",
      "The potential difference across the battery terminals is always 12 V, even when current flows",
      "The battery supplies 12 J of energy per second",
    ], 0)],
    image_url: `${IMG}/8-circuit.png`,
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "The reading on the ammeter is 2 A when switch S is OPEN. Calculate the reading on the voltmeter.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Vlost = Ir = (2)(0,5) = 1 V. Vext = emf − Vlost = 12 − 1 = 11 V.",
    marking_notes: "Accept ε = I(R + r), 12 = Vext + (2)(0,5) giving 11 V; or ε = I(R + r), R = 5,5 Ω and V = IR = 11 V.",
    steps: [
      st(1, "Which equation applies?", ["ε = Vext + Ir", "ε = Vext − Ir", "Vext = ε + Ir", "Vext = Ir"], 0),
      st(1, "What are the lost volts (Ir)?", ["1 V", "2 V", "0,25 V", "4 V"], 0),
      st(1, "What is the voltmeter reading?", ["11 V", "13 V", "12 V", "6 V"], 0),
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Calculate the resistance of resistor R (switch S open, ammeter reads 2 A).",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "R = V/I = 11/2 = 5,5 Ω. (Alternative: Rtotal = 12/2 = 6 Ω, R = 6 − 0,5 = 5,5 Ω.)",
    marking_notes: "Formula/substitution (1) and answer 5,5 Ω (1). Positive marking from 8.2.1.",
    steps: [
      st(1, "Which equation applies?", ["R = V/I", "R = VI", "R = I/V", "R = ε/I"], 0),
      st(1, "What is R?", ["5,5 Ω", "6,0 Ω", "22 Ω", "0,18 Ω"], 0),
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Switch S is now CLOSED. How does this change affect the reading on the voltmeter? Choose from: INCREASES, DECREASES or REMAINS THE SAME. Explain the answer.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases. The total resistance decreases (another parallel branch is added), so the current increases, the lost volts (Ir) increase while the emf stays the same (ε = Vext + Ir), so the external potential difference decreases.",
    marking_notes: "Decreases (1); total resistance decreases (1); current increases (1); lost volts increase, emf constant, so external pd decreases (1).",
    steps: [
      st(1, "How does the voltmeter reading change?", ["DECREASES", "INCREASES", "REMAINS THE SAME", "Drops to zero"], 0),
      st(1, "What happens to the total resistance?", ["It decreases", "It increases", "It remains the same", "It becomes infinite"], 0),
      st(1, "What happens to the current?", ["It increases", "It decreases", "It remains the same", "It becomes zero"], 0),
      st(1, "Why does the external potential difference decrease?", [
        "The lost volts (Ir) increase while the emf stays the same",
        "The emf of the battery decreases",
        "The internal resistance of the battery decreases",
        "The lost volts decrease while the emf stays the same",
      ], 0),
    ],
  },

  // ============ QUESTION 9: INTERNAL RESISTANCE EXPERIMENT (6 marks) ============
  {
    number: "9", sub_number: "9.1",
    text: "Learners perform an experiment to determine the emf (ε) and the internal resistance (r) of a battery using a circuit with a battery, ammeter, switch S and a variable resistor R. They use their recorded readings of current and resistance, together with the equation R = ε/I − r, to obtain a graph of resistance versus 1/current. Which variable has to be kept constant in the experiment?",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "Temperature.",
    marking_notes: "Accept only temperature.",
    steps: [st(1, "Which variable has to be kept constant?", ["Temperature", "Current", "External resistance R", "Potential difference across R"], 0)],
    image_url: `${IMG}/9-circuit.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "Refer to the graph of resistance (Ω) versus 1/current (A⁻¹) (a straight line through about (0,5; 0,5), (1,0; 4), (1,5; 7,5) and (2,0; 11), crossing the resistance axis below zero). Write down the value of the internal resistance of the cell.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "r = 3 Ω (the magnitude of the y-intercept, −3 Ω).",
    marking_notes: "Memo: r = 3 Ω or 1,5 Ω for 2 marks; r = −3 Ω or −1,5 Ω accepted for ONE mark only. The graph's y-intercept and the working in 9.2.2 both give 3 Ω.",
    steps: [st(2, "What is the internal resistance of the cell?", ["3 Ω", "7 Ω", "0,5 Ω", "6 Ω"], 0)],
    image_url: `${IMG}/9-graph.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Using the graph, calculate the emf of the battery.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "ε = slope (gradient) of the graph = (7,5 − (−3))/(1,5 − 0) = 7 V.",
    marking_notes: "ε = gradient (1); substitution of two points on the line (1); 7 V (1). Alternatives: R = ε/I − r with 7,5 = ε/1,5 − 3, or ε = I(R + r) = 0,5(11 + 3). Any correct values on the line are accepted.",
    steps: [
      st(1, "Which quantity on the graph equals the emf?", ["The gradient of the graph", "The y-intercept", "The x-intercept", "The area under the graph"], 0),
      st(1, "Which substitution is correct?", ["(7,5 − (−3))/(1,5 − 0)", "(1,5 − 0)/(7,5 − (−3))", "(7,5 − 0)/(1,5 − 0)", "(7,5 + 3)/(1,5 + 3)"], 0),
      st(1, "What is the emf?", ["7 V", "0,14 V", "5 V", "3 V"], 0),
    ],
  },

  // ============ QUESTION 10: ELECTRODYNAMICS (11 marks) ============
  {
    number: "10", sub_number: "10.1.1",
    text: "In the simplified AC generator shown, the coil is rotated clockwise. In which direction does the induced current flow in the coil? Choose from: X to Y or Y to X.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Y to X (as given in the memo).",
    marking_notes: "Memo: Y to X.",
    steps: [st(1, "In which direction does the induced current flow in the coil?", ["Y to X", "X to Y", "No current is induced", "The direction alternates every quarter turn"], 0)],
    image_url: `${IMG}/10-generator.png`,
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "On which principle or law is the working of the generator based?",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Faraday's law of electromagnetic induction (electromagnetic induction).",
    marking_notes: "Accept Faraday's law or electromagnetic induction.",
    steps: [st(1, "On which principle or law is the generator based?", [
      "Faraday's law of electromagnetic induction",
      "Coulomb's law",
      "Ohm's law",
      "Newton's second law",
    ], 0)],
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "State the energy conversion that takes place while the generator is in operation.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Mechanical (kinetic) energy to electrical energy.",
    marking_notes: "Both forms of energy required for 2 marks.",
    steps: [st(2, "Which energy conversion takes place?", [
      "Mechanical (kinetic) energy to electrical energy",
      "Electrical energy to mechanical (kinetic) energy",
      "Chemical energy to electrical energy",
      "Electrical energy to heat energy",
    ], 0)],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "The voltage output for an AC generator is shown in the graph (a sine wave between +340 V and −340 V). Write down the maximum (peak) output voltage of the generator.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "340 V (−340 V is also accepted).",
    marking_notes: "Accept 340 V or −340 V.",
    steps: [st(1, "What is the maximum (peak) output voltage?", ["340 V", "240 V", "680 V", "170 V"], 0)],
    image_url: `${IMG}/10-voltage-graph.png`,
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "A stove is connected to the generator above, and delivers an average power of 1 600 W. Calculate the rms voltage delivered to the stove.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Vrms = Vmax/√2 = 340/√2 = 240,42 V.",
    marking_notes: "Formula, substitution, answer 240,42 V. Positive marking from 10.2.1.",
    steps: [
      st(1, "Which formula applies?", ["Vrms = Vmax/√2", "Vrms = Vmax/2", "Vrms = Vmax × √2", "Vrms = Vmax²/2"], 0),
      st(2, "What is the rms voltage?", ["240,42 V", "170 V", "480,8 V", "120,2 V"], 0),
    ],
  },
  {
    number: "10", sub_number: "10.2.3",
    text: "Calculate the resistance of the stove (average power 1 600 W, rms voltage from 10.2.2).",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Pave = Vrms²/R: 1 600 = (240,42)²/R, so R = 36,13 Ω. (Alternatives: Pave = Vmax²/2R, R = 36,13 Ω; Pave = VrmsIrms, Irms = 6,66 A, R = 36,1 Ω; Imax = 9,412 A, R = 36,12 Ω.)",
    marking_notes: "Formula, substitution, answer 36,13 Ω (36,1 to 36,13 Ω depending on the route). Positive marking from 10.2.2.",
    steps: [
      st(1, "Which formula applies?", ["Pave = Vrms²/R", "Pave = Vmax²/R", "Pave = Vrms²R", "Pave = Vrms·R"], 0),
      st(2, "What is the resistance of the stove?", ["36,13 Ω", "72,25 Ω", "18,06 Ω", "0,03 Ω"], 0),
    ],
  },

  // ============ QUESTION 11: PHOTOELECTRIC EFFECT (13 marks) ============
  {
    number: "11", sub_number: "11.1",
    text: "The threshold frequencies of caesium and potassium are: caesium 5,07 × 10¹⁴ Hz; potassium 5,55 × 10¹⁴ Hz. Define the term work function in words.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The work function of a metal is the minimum energy needed to eject an electron from the metal surface.",
    marking_notes: "Underlined key words: minimum energy, eject an electron, metal surface. Deduct 1 if omitted.",
    steps: [st(2, "Which statement defines the work function of a metal?", [
      "The minimum energy needed to eject an electron from the metal surface",
      "The maximum kinetic energy of an electron ejected from the metal surface",
      "The minimum frequency of light that can eject an electron from the metal surface",
      "The total energy of the photon that strikes the metal surface",
    ], 0)],
  },
  {
    number: "11", sub_number: "11.2",
    text: "Threshold frequencies: caesium 5,07 × 10¹⁴ Hz; potassium 5,55 × 10¹⁴ Hz. Which ONE of the two metals in the table has the higher work function? Give a reason for the answer by referring to the information in the table.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Potassium. Its threshold frequency is greater than that of caesium (work function is directly proportional to threshold frequency, W0 = hf0).",
    marking_notes: "Potassium (1) plus reason (1). Accept W0 = hf0 or W0 ∝ f0.",
    steps: [
      st(1, "Which metal has the higher work function?", ["Potassium", "Caesium", "They are equal", "It cannot be determined from the table"], 0),
      st(1, "Give the reason.", [
        "Potassium has the greater threshold frequency (W0 = hf0)",
        "Potassium has the smaller threshold frequency",
        "Caesium has the greater threshold frequency",
        "Potassium is the heavier metal",
      ], 0),
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Circuit A has a photocell with a caesium plate and circuit B has a photocell with a potassium plate. Ultraviolet light of the same intensity and wavelength 5,5 × 10⁻⁷ m is incident on the plate in EACH photocell, and the ammeter in circuit A registers a current. By means of a calculation, determine whether the ammeter in circuit B will also register a current.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "c = fλ: 3 × 10⁸ = f(5,5 × 10⁻⁷), so f = 5,45 × 10¹⁴ Hz. This is less than the threshold frequency of potassium (5,55 × 10¹⁴ Hz), so the ammeter in circuit B will not register a current.",
    marking_notes: "Formula; f = 5,45 × 10¹⁴ Hz; comparison/conclusion. Accept the energy method (E = hc/λ = 3,62 × 10⁻¹⁹ J < W0 = hf0 = 3,68 × 10⁻¹⁹ J) or the threshold wavelength method (λ0 = 5,41 × 10⁻⁷ m < λ).",
    steps: [
      st(1, "Which formula gives the frequency of the incident light?", ["c = fλ", "c = f/λ", "E = hλ", "f = cλ"], 0),
      st(1, "What is the frequency of the ultraviolet light?", ["5,45 × 10¹⁴ Hz", "1,83 × 10⁻¹⁵ Hz", "1,65 × 10² Hz", "6,02 × 10¹⁴ Hz"], 0),
      st(1, "What is the conclusion?", [
        "f is less than the threshold frequency of potassium, so circuit B shows no current",
        "f is greater than the threshold frequency of potassium, so circuit B shows a current",
        "f is greater than the threshold frequency of caesium, so circuit B shows a current",
        "f equals the threshold frequency of potassium, so a current just starts",
      ], 0),
    ],
    image_url: `${IMG}/11-photocells-AB.png`,
  },
  {
    number: "11", sub_number: "11.4",
    text: "Calculate the maximum kinetic energy of an ejected electron in circuit A (caesium, threshold frequency 5,07 × 10¹⁴ Hz; light wavelength 5,5 × 10⁻⁷ m; h = 6,63 × 10⁻³⁴ J·s).",
    marks: 5, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W0 + Ek(max): hc/λ = hf0 + Ek(max). (6,63 × 10⁻³⁴)(3 × 10⁸)/(5,5 × 10⁻⁷) = (6,63 × 10⁻³⁴)(5,07 × 10¹⁴) + Ek(max), so Ek(max) = 2,55 × 10⁻²⁰ J.",
    marking_notes: "Formula; substitutions; Ek = 2,55 × 10⁻²⁰ J (range 2,52 × 10⁻²⁰ to 2,6 × 10⁻²⁰ J; 2,52 × 10⁻²⁰ J when f = 5,45 × 10¹⁴ Hz from 11.3 is used). Calculating Ek for the wrong photocell forfeits the final answer mark.",
    steps: [
      st(1, "Which equation applies?", ["hc/λ = hf0 + Ek(max)", "hc/λ = hf0 − Ek(max)", "hc/λ + hf0 = Ek(max)", "hf0 = hc/λ + Ek(max)"], 0),
      st(1, "What is the energy of an incident photon?", ["3,62 × 10⁻¹⁹ J", "3,36 × 10⁻¹⁹ J", "3,68 × 10⁻¹⁹ J", "1,99 × 10⁻²⁵ J"], 0),
      st(1, "What is the work function of caesium?", ["3,36 × 10⁻¹⁹ J", "3,68 × 10⁻¹⁹ J", "3,62 × 10⁻¹⁹ J", "2,55 × 10⁻²⁰ J"], 0),
      st(2, "What is the maximum kinetic energy of an ejected electron?", ["2,55 × 10⁻²⁰ J", "2,55 × 10⁻¹⁹ J", "3,36 × 10⁻¹⁹ J", "6,98 × 10⁻¹⁹ J"], 0),
    ],
  },
  {
    number: "11", sub_number: "11.5",
    text: "How will the maximum kinetic energy of the ejected electron, calculated in QUESTION 11.4, change when the intensity of the incident light increases? Choose from: INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same (maximum kinetic energy depends on the frequency of the light, not on its intensity).",
    marking_notes: "Accept only 'remains the same'.",
    steps: [st(1, "How does the maximum kinetic energy change?", ["REMAINS THE SAME", "INCREASES", "DECREASES", "Becomes zero"], 0)],
  },
];
