// Real DBE past paper: Physical Sciences (Physics) P1, November 2019, National
// (English).
// Source: single combined PDF (question paper + marking guideline) fetched
// from stanmorephysics.com. QP is pages 1-17, memo ("MARKING
// GUIDELINES/NASIENRIGLYNE") starts right after and runs 26 pages. Every
// question number and mark allocation in the QP was cross-checked against
// the memo section; no stray or mismatched pages found.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here (20 + 16 + 18 + 10 + 13 + 11 + 18 + 19 +
// 12 + 13 = 150).
//
// This paper reuses every topic already defined by the Nov 2025 P1 dataset
// (scripts/seed-data/physical-sciences-p1-nov2025.ts) — no new CAPS topic
// appears in this paper that wasn't already covered by that one, so the
// `topics` array below is identical to that file's (topics are upserted by
// key in scripts/seed.ts, so redeclaring them here is safe and required
// since this file is a standalone dataset).
//
// Diagrams (trolleys, inclined-plane blocks, the falling-stone diagram, the
// position-time graph with labelled points a-h, the bullet-block diagram,
// the curved track, the two air-pressure-vs-time graphs, the suspended-
// sphere and point-charge diagrams, both circuit diagrams, the DC/AC-source
// diagrams, the generator diagram and the photon-energy graph) are vector
// line drawings rendered directly into the page content stream, not
// separate embedded raster images, so they were cropped from full-page
// renders (220 dpi) rather than extracted as clean standalone images. Q1.6
// and Q1.9's tables and Q1.8's small ohmic-conductor graphs are reproduced
// as plain text/markup in the question text instead of images, since they
// are simple enough to read without a diagram.
//
// Calculation questions (2.3, 3.2, 3.4, 4.2.1, 4.2.2, 5.4, 5.5, 6.3, 6.4,
// 7.1.2, 7.1.4, 7.2.2, 8.3.1, 8.3.2, 8.3.3, 8.4.2, 9.2.2, 10.4) use `steps`
// instead of `marking_points`: the student works the problem out on paper
// as normal, then picks the option they got for each mark-earning step
// (formula, intermediate value, final answer) from a few choices, rather
// than typing anything. Distractors are chosen to trap specific real errors
// (wrong formula, sign flip, wrong given value, mixing up which block/
// sphere/branch a value belongs to), not just wrong final numbers.
//
// FLAG for review: Question 2.3 (calculate the acceleration of block P) has
// an 8-mark memo with two simultaneous equations (one per block) that must
// be solved together; this is represented here as a 3-step MCQ (block P's
// equation, block Q's equation, final acceleration) which compresses the
// full 8-mark simultaneous-equation process into fewer graded checkpoints
// than the memo's granular per-substitution marking. This mirrors the
// stepped-MCQ convention used throughout the existing Physical Sciences
// datasets for multi-equation problems (e.g. 2024 paper's Q2.3.2).
//
// FLAG for review: Question 8.4.2 (calculate resistance X) has a long memo
// with 6 alternative solution options of varying method (some treat the two
// X resistors as a single parallel branch 2X in parallel with R's branch;
// others solve via voltage division). The final answer X = 1,49 Ω (accepted
// range 1,46-1,49 Ω) is used here as the target step answer, using the
// most direct route (Option 1: total external resistance -> parallel
// combination -> halve for a single X).
//
// FLAG for review: Question 3.4 has a very long memo offering 6 alternative
// numerical options (choice of positive-up vs positive-down, and different
// intermediate calculation paths), all converging on x = 1,34 s. The
// `steps` here follow Option 1 (Upwards positive): find the common meeting
// displacement (-10,26 m from the roof), solve stone A's equation of
// motion for its total flight time to that point (2,79 s), solve stone B's
// equation of motion for its flight time (1,45 s), and subtract.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2019-p1";

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
  year: 2019,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2020/04/Physical-Sciences-P1-Nov-2019-and-Memo-.pdf" as string | null,
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
  // ============ QUESTION 1: MULTIPLE-CHOICE QUESTIONS (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Which physical quantity is equal to the rate of change of momentum? (A) Mass (B) Impulse (C) Net force (D) Acceleration",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "C — Net force (Newton's second law in its momentum form: Fnet = Δp/Δt).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The gravitational acceleration on the surface of a planet of radius R is g. The gravitational acceleration at a height of 2R above the surface of the same planet is ... (A) g/9 (B) g/4 (C) 4g (D) 9g",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "A — g/9. At a height of 2R above the surface, the distance from the planet's centre is R + 2R = 3R, i.e. 3 times the original distance R. Since g ∝ 1/d², tripling the distance reduces g by a factor of 3² = 9, giving g/9.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "A ball falls from the edge of a table. Ignore the effects of air friction. Which ONE of the physical quantities associated with the ball during the fall remains constant? (A) Weight (B) Momentum (C) Kinetic energy (D) Gravitational potential energy",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "A — Weight. The ball's weight (mg) stays constant throughout the fall (mass and g don't change); momentum, kinetic energy and gravitational potential energy all change as the ball speeds up and loses height.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Two trolleys, X and Y, of masses m and 2m respectively, are held together by a compressed spring between them. Initially they are stationary on a horizontal floor, as shown below. Ignore the effects of friction. The spring is now released and falls to the floor while the trolleys move apart. The magnitude of the MOMENTUM of trolley X while it moves away is ... (A) zero. (B) half the magnitude of the momentum of trolley Y. (C) twice the magnitude of the momentum of trolley Y. (D) the same as the magnitude of the momentum of trolley Y.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "D — the same as the magnitude of the momentum of trolley Y. By conservation of momentum, the total momentum of the isolated trolley-spring system stays zero, so the trolleys' momenta after release are equal in magnitude and opposite in direction.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.4-trolleys.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "An object is dropped from rest and after falling a distance x, its momentum is p. Ignore the effects of air friction. The momentum of the object, after it has fallen a distance 2x, is ... (A) p (B) √2p (C) p/2 (D) 2p",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "B — √2p. Since vf² = 2ax (from rest), v ∝ √x, so p = mv ∝ √x. Doubling the fall distance to 2x scales the speed (and momentum) by √2, giving √2p.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "A police car, with its siren on, is travelling at a constant speed TOWARDS a stationary sound detector. The siren emits sound waves of frequency f and speed v. Which ONE of the following combinations best describes the frequency and speed of the detected sound waves? (A) Frequency: less than f; Speed: v (B) Frequency: less than f; Speed: less than v (C) Frequency: greater than f; Speed: less than v (D) Frequency: greater than f; Speed: v",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "D — Frequency: greater than f; Speed: v. A source moving towards a stationary observer causes a higher detected frequency (Doppler effect), but the speed of sound through the air (v) is a property of the medium and does not depend on the motion of the source or observer.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two identical spheres, R and S, on insulated stands, carrying charges of +q and -q respectively, are placed a distance apart. Sphere R exerts an electrostatic force of magnitude F on sphere S. The two spheres are now brought into contact and returned to their original positions. The magnitude of the electrostatic force that sphere R exerts on sphere S is now ... (A) zero (B) F/2 (C) F (D) 2F",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "A — zero. When the identical +q and -q spheres touch, the charge redistributes equally: total charge = +q + (-q) = 0, split equally between the two identical spheres, so each ends up with zero charge. With zero charge on both spheres, the electrostatic force between them is zero.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Which ONE of the graphs below best represents the relationship between potential difference (V) and current (I) for an ohmic conductor? (A) V constant (horizontal line) as I increases (B) V increases linearly (straight line through the origin) as I increases (C) V decreases linearly (straight line) as I increases (D) V decreases along a curve (like 1/I) as I increases",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "B — V increases linearly (a straight line through the origin) as I increases. An ohmic conductor obeys V = IR with R constant, so V is directly proportional to I — a straight line through the origin.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.9",
    text: "Which ONE of the following combinations regarding the energy conversions in electric motors and electric generators is CORRECT? (A) Motors: Mechanical to electrical; Generators: Electrical to mechanical (B) Motors: Mechanical to electrical; Generators: Mechanical to electrical (C) Motors: Electrical to mechanical; Generators: Electrical to mechanical (D) Motors: Electrical to mechanical; Generators: Mechanical to electrical",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "D — Motors: Electrical to mechanical; Generators: Mechanical to electrical. A motor converts electrical energy into mechanical (kinetic) energy to do work; a generator does the reverse, converting mechanical (kinetic) energy into electrical energy.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "Consider the statements below regarding the photoelectric effect. The photoelectric effect proves that ... (i) light energy is quantised. (ii) light has a particle nature. (iii) light has a wave nature. Which of the statements above is/are CORRECT? (A) (i) only (B) (ii) only (C) (i) and (ii) only (D) (i) and (iii) only",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C — (i) and (ii) only. The photoelectric effect shows light arrives in discrete quanta (photons) of energy E = hf, demonstrating both that light energy is quantised and that light behaves as particles; it cannot be explained by treating light as a wave.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (16 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "Block P, of mass 2 kg, is connected to block Q, of mass 3 kg, by a light inextensible string. Both blocks are on a plane inclined at an angle of 30° to the horizontal. Block Q is pulled by a constant force of 40 N at an angle of 25° to the incline. Block P moves on a rough section, AB, of the incline, while block Q moves on a frictionless section, BC, of the incline. An average constant frictional force of 2,5 N acts on block P as it moves from A to B up the incline. State Newton's Second Law in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When a resultant/net force acts on an object, the object will accelerate in the direction of the force, with an acceleration directly proportional to the force and inversely proportional to the mass of the object.",
    marking_notes: "Must refer to the net force causing an acceleration in its direction, directly proportional to the force and inversely proportional to the mass (or the equivalent Fnet = Δp/Δt wording).",
    marking_points: [{ marks: 2, description: "net force causes acceleration in its direction, directly proportional to the force and inversely proportional to the mass", keywords: ["directly proportional", "inversely proportional", "mass"] }],
    image_url: `${IMG}/2-incline-blocks.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram for block P (2 kg), on the rough section AB of the incline, showing ALL the forces acting on it.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on block P, all drawn from a single point: weight w vertically down; normal force N perpendicular to the incline surface; tension T up the incline (pulling toward Q); and kinetic friction f down the incline (opposing P's motion up the incline, since P moves from A to B).",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (straight down), normal force (perpendicular to the incline), tension (up the incline), friction (down the incline, opposing motion). Max 4.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N) drawn perpendicular to the incline surface", keywords: ["normal force", "perpendicular"] },
      { marks: 1, description: "tension (T) drawn up the incline", keywords: ["tension", "up the incline"] },
      { marks: 1, description: "friction (f) drawn down the incline, opposing P's motion", keywords: ["friction", "down the incline"] },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Calculate the magnitude of the acceleration of block P while block P is moving on section AB (2 kg block P, 3 kg block Q, 40 N force at 25° to the incline on Q, 2,5 N friction on P, incline at 30°, blocks connected by a string).",
    marks: 8, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For block P (2 kg): T − wₚ∥ − fk = mₚa, i.e. T − (2)(9,8)sin30° − 2,5 = 2a, so T − 12,3 = 2a ... (1). For block Q (3 kg): the incline-parallel component of the 40 N force is 40cos25° = 36,25 N. Fx − T − wQ∥ = mQa, i.e. 36,25 − T − (3)(9,8)sin30° = 3a, so 21,55 − T = 3a ... (2). Adding (1) and (2): 9,25 = 5a, giving a = 1,85 m·s⁻².",
    marking_notes: "Marking points: Fnet = ma applied to block P with tension, weight-component and friction (T − (2)(9,8)sin30° − 2,5 = 2a); Fnet = ma applied to block Q with the incline-parallel component of the 40 N force, tension, and weight-component (40cos25° − T − (3)(9,8)sin30° = 3a); correct final answer a = 1,85 m·s⁻² (from solving the two equations simultaneously). The memo also accepts a systems approach (treating P and Q as one system, max 5/8 marks) giving the same final answer.",
    steps: [
      {
        marks: 3,
        description: "What is the equation of motion for block P (2 kg), taking up the incline as positive (T = tension, wₚ∥ = P's weight component along the incline, fk = 2,5 N kinetic friction)?",
        options: [
          "T − (2)(9,8)sin30° − 2,5 = 2a",
          "T + (2)(9,8)sin30° + 2,5 = 2a",
          "T − (2)(9,8)cos30° − 2,5 = 2a",
          "(2)(9,8)sin30° − T − 2,5 = 2a",
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the equation of motion for block Q (3 kg), using the incline-parallel component of the 40 N applied force (40cos25°) and Q's weight component (frictionless section)?",
        options: [
          "40cos25° − T − (3)(9,8)sin30° = 3a",
          "40sin25° − T − (3)(9,8)sin30° = 3a",
          "40cos25° + T − (3)(9,8)sin30° = 3a",
          "40cos25° − T − (3)(9,8)cos30° = 3a",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Solving the two equations of motion simultaneously, what is the acceleration of block P?",
        options: ["1,85 m·s⁻²", "3,70 m·s⁻²", "4,63 m·s⁻²", "0,93 m·s⁻²"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "If block P has now passed point B (onto the frictionless section), how will its acceleration compare to that calculated in QUESTION 2.3? Choose from GREATER THAN, SMALLER THAN or EQUAL TO. Give a reason for the answer.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Evaluation",
    model_answer: "Greater than. Once P passes B it is on the frictionless section, so friction no longer opposes its motion; with friction removed, the net force on the P-Q system increases, so the acceleration increases (is greater than before).",
    marking_notes: "Must state 'greater than' and a valid reason: Fnet increases (since there is no more friction / the surface is now smooth beyond B).",
    marking_points: [
      { marks: 1, description: "greater than", keywords: ["greater than"] },
      { marks: 1, description: "Fnet increases because there is no more friction (the surface beyond B is smooth/frictionless)", keywords: ["fnet increases", "no friction", "smooth"] },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (18 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "Stone A is thrown vertically upwards with a speed of 10 m·s⁻¹ from the edge of the roof of a 40 m high building. Ignore the effects of air friction. Take the ground as reference. Define the term free fall.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "(Motion during which) the only force acting is the force of gravity.",
    marking_notes: "Must refer to the only force acting being the (force of) gravity. All-or-nothing (2 or 0 marks).",
    marking_points: [{ marks: 2, description: "only force acting is the force of gravity", keywords: ["only force", "gravity"] }],
    image_url: `${IMG}/3-stoneA-building.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the maximum HEIGHT ABOVE THE GROUND reached by stone A (thrown up at 10 m·s⁻¹ from the edge of a 40 m high building).",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking upward as positive, first find the extra rise above the throw point: vf² = vi² + 2ay, with vf = 0: 0 = (10)² + 2(−9,8)y, giving y = 5,10 m above the roof. Height above the ground = 40 + 5,10 = 45,10 m.",
    marking_notes: "Marking points: appropriate formula for the rise above the throw point (any valid equation of motion); whole substitution to calculate the 5,10 m rise; adding the building height (40 + the calculated rise); final answer 45,10 m (accept 45,1 m).",
    steps: [
      {
        marks: 1,
        description: "Which formula finds stone A's extra rise above the roof (where vf = 0 at the top), taking upward as positive?",
        options: ["vf² = vi² + 2ay", "y = vit + ½at²", "vf = vi + at", "y = ½(vi + vf)t"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the extra rise above the roof (the throw point)?",
        options: ["5,10 m", "10,00 m", "1,02 m", "4,90 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the maximum height above the ground (adding the 40 m building height)?",
        options: ["45,10 m", "40,00 m", "50,10 m", "35,10 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Write down the magnitude and direction of the acceleration of stone A at its maximum height (above the ground).",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "9,8 m·s⁻² downwards. In free fall, the acceleration due to gravity is constant throughout the motion (including at the highest point, where velocity is momentarily zero but acceleration is not).",
    marking_notes: "Must state 9,8 m·s⁻² (or g) and the direction 'downwards'.",
    marking_points: [{ marks: 2, description: "9,8 m·s⁻² downwards", keywords: ["9 8", "downwards"] }],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Stone B is dropped from rest from the edge of the roof, x seconds after stone A was thrown upwards. Stone A passes stone B when the two stones are 29,74 m above the ground. Calculate the value of x.",
    marks: 6, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "Taking upward as positive, the displacement from the roof to the meeting point is −40 + 29,74 = −10,26 m. For stone A: yA = vit + ½at², so −10,26 = 10t + ½(−9,8)t², giving t = 2,79 s (the total time since A was thrown). For stone B: yB = vit + ½at², so −10,26 = 0 + ½(−9,8)t², giving t = 1,45 s (the time since B was dropped). Since both stones meet at the same instant, x = 2,79 − 1,45 = 1,34 s.",
    marking_notes: "Marking points: calculation/use of the meeting-point displacement from the roof (−10,26 m); appropriate formula to calculate t; substitution for stone A's equation of motion; substitution for stone B's equation of motion; calculating the time difference between the two stones; final answer x = 1,34 s.",
    steps: [
      {
        marks: 1,
        description: "What is the displacement from the roof to the meeting point (taking upward as positive, ground as reference)?",
        options: ["−10,26 m", "10,26 m", "−29,74 m", "−70,26 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Using yA = vit + ½at² for stone A (vi = 10 m·s⁻¹, a = −9,8 m·s⁻²), what is the total time since stone A was thrown (to reach the meeting point)?",
        options: ["2,79 s", "1,02 s", "1,45 s", "4,08 s"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Using yB = ½at² for stone B (dropped from rest), what is the time since stone B was dropped (to reach the meeting point)?",
        options: ["1,45 s", "2,79 s", "1,02 s", "2,04 s"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is x, the delay between stone A being thrown and stone B being dropped?",
        options: ["1,34 s", "1,45 s", "2,79 s", "4,24 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.5.1",
    text: "The graphs of position versus time for part of the motion of both stones are shown below (stone A's curve rises from the origin to a peak at label a/h then falls to label c at time g; stone B's curve, starting later, rises to a lower peak at label b then falls to meet stone A's curve at label c/g; labels d, e, f, g mark times on the horizontal axis). Which of labels a to h on the graphs represents the time at which stone A has a positive velocity?",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "d (the time interval from 0 to d, before stone A reaches its peak, where its position-time graph has a positive/upward slope).",
    marking_notes: "Accept d (or the equivalent interval descriptions 0-e or d-e, per the memo).",
    marking_points: [{ marks: 1, description: "d", keywords: ["d"] }],
    image_url: `${IMG}/3.5-position-time-graph.png`,
  },
  {
    number: "3", sub_number: "3.5.2",
    text: "Using the same position-time graph, which of labels a to h represents the maximum height reached by stone A?",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "a (the peak of stone A's curve, on the position axis).",
    marking_notes: "Accept only 'a'.",
    marking_points: [{ marks: 1, description: "a", keywords: ["a"] }],
  },
  {
    number: "3", sub_number: "3.5.3",
    text: "Using the same position-time graph, which of labels a to h represents the time when stone B was dropped?",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "f (the time on the horizontal axis where stone B's curve begins).",
    marking_notes: "Accept only 'f'.",
    marking_points: [{ marks: 1, description: "f", keywords: ["f"] }],
  },
  {
    number: "3", sub_number: "3.5.4",
    text: "Using the same position-time graph, which of labels a to h represents the height at which the stones pass each other?",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "c (the position, on the vertical axis, where the two curves cross).",
    marking_notes: "Accept only 'c'.",
    marking_points: [{ marks: 1, description: "c", keywords: ["c"] }],
  },

  // ============ QUESTION 4: MOMENTUM (10 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A bullet moves east at a velocity of 480 m·s⁻¹. It hits a wooden block that is fixed to the floor. The bullet takes 0,01 s to move through the stationary block and emerges from the block at a velocity of 80 m·s⁻¹ east. Ignore the effects of air resistance. Consider the block-bullet system as an isolated system. Explain what is meant by an isolated system as used in Physics.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "An isolated system is a system on which the resultant/net external force is zero (no net external force acts on it).",
    marking_notes: "Must refer to zero resultant/net external force acting on the system.",
    marking_points: [{ marks: 2, description: "net/resultant external force on the system is zero", keywords: ["net external force", "zero", "no external force"] }],
    image_url: `${IMG}/4-bullet-block.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "The magnitude of the momentum of the bullet before it enters the block is 24 kg·m·s⁻¹ (bullet initial velocity 480 m·s⁻¹ east). Calculate the mass of the bullet.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "p = mv, so 24 = m(480), giving m = 0,05 kg.",
    marking_notes: "Formula p = mv, correct substitution, correct final answer m = 0,05 kg.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates momentum, mass and velocity?",
        options: ["p = mv", "p = m/v", "p = v/m", "p = m + v"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the mass of the bullet?",
        options: ["0,05 kg", "20,00 kg", "0,20 kg", "9,60 kg"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Calculate the average net force exerted by the wooden block on the bullet (bullet enters at 480 m·s⁻¹ east, mass 0,05 kg, emerges at 80 m·s⁻¹ east after 0,01 s in the block).",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Using FnetΔt = Δp: Fnet(0,01) = (0,05)(80) − (0,05)(480) = 4 − 24 = −20, so Fnet = −2 000 N, i.e. 2 000 N west.",
    marking_notes: "Marking points: appropriate formula including Fnet or Wnet (e.g. FnetΔt = Δp); correct substitution using the bullet's mass and both velocities; final answer 2 000 N; correct direction (west).",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the average net force, the time interval and the change in momentum?",
        options: ["FnetΔt = Δp", "Fnet = mΔv", "Fnet = p/m", "Fnet = Δp × Δt"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Δp, the bullet's change in momentum (using m = 0,05 kg, vi = 480 m·s⁻¹ east, vf = 80 m·s⁻¹ east)?",
        options: ["−20 kg·m·s⁻¹ (20 kg·m·s⁻¹ west)", "20 kg·m·s⁻¹ east", "−4 kg·m·s⁻¹", "−24 kg·m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude and direction of the average net force on the bullet?",
        options: ["2 000 N west", "2 000 N east", "200 N west", "20 000 N west"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (13 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "An object of mass 1,8 kg slides down a rough curved track and passes point A, which is 1,5 m above the ground, at a speed of 0,95 m·s⁻¹. The object reaches point B at the bottom of the track at a speed of 4 m·s⁻¹. Define the term conservative force.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "A conservative force is a force for which the work done in moving an object between two points is independent of the path taken. (Equivalently: a force for which the work done in moving an object along a closed path is zero.)",
    marking_notes: "Must refer to the work done being independent of the path taken between two points, or equivalently the work done around a closed path being zero. The word 'work' must be present, or 0 marks.",
    marking_points: [{ marks: 2, description: "work done in moving an object between two points is independent of the path taken", keywords: ["work done", "independent", "path"] }],
    image_url: `${IMG}/5-track-diagram.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Name the conservative force acting on the object as it slides down the curved track.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "Gravitational force (weight).",
    marking_notes: "Accept: gravitation, gravity, or weight.",
    marking_points: [{ marks: 1, description: "gravitational force (gravity/weight)", keywords: ["gravitational", "gravity", "weight"] }],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Is mechanical energy conserved as the object slides from point A to point B (a rough curved track)? Choose from YES or NO. Give a reason for the answer.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "No. There is friction (a non-conservative force) doing work on the object as it slides down the rough track, so it is not an isolated (closed) system — the net work done by non-conservative forces is not zero.",
    marking_notes: "Must state 'No' and give a valid reason: friction/a non-conservative force is doing work (or the net work done by non-conservative forces is not zero).",
    marking_points: [
      { marks: 1, description: "No", keywords: ["no"] },
      { marks: 1, description: "there is friction (a non-conservative force) doing work on the object / it is not an isolated system", keywords: ["friction", "non conservative", "not zero"] },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Calculate the gravitational potential energy of the object (mass 1,8 kg) when it was at point A (1,5 m above the ground).",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "EP = mgh = (1,8)(9,8)(1,5) = 26,46 J.",
    marking_notes: "Formula EP = mgh, correct substitution, correct final answer 26,46 J.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives gravitational potential energy?",
        options: ["EP = mgh", "EP = ½mv²", "EP = mgh²", "EP = mg/h"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the gravitational potential energy of the object at point A?",
        options: ["26,46 J", "17,64 J", "14,70 J", "2,65 J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Using energy principles, calculate the work done by friction on the object as it slides from point A (1,5 m high, 0,95 m·s⁻¹) to point B (bottom of track, 4 m·s⁻¹).",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Using Wnc = ΔK + ΔU: Wf = ½m(vf² − vi²) + (0 − mgh) = ½(1,8)(4² − 0,95²) + (0 − 26,46) = 12,44 − 26,46 = −12,87 J (using EP(A) = 26,46 J from 5.4).",
    marking_notes: "Marking points (positive marking from 5.4): correct formula (Wnc = ΔK + ΔU, or equivalently Wnet = ΔK with Wf + Wg = ΔK); correct substitution using the given speeds and the height/EP from 5.4; correct final answer Wf = −12,87 J.",
    steps: [
      {
        marks: 1,
        description: "Which principle/formula applies to find the work done by friction (a non-conservative force) from A to B?",
        options: ["Wnc = ΔK + ΔU (i.e. Wf = ΔK + ΔU)", "Wnet = 0", "Wf = mgh only", "Wf = ½mv² only"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the work done by friction, Wf?",
        options: ["−12,87 J", "12,87 J", "−26,46 J", "39,33 J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Surface BC (below point B, at the bottom of the track) is frictionless. What is the value of the net work done on the object as it slides from point B to point C?",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "Zero. On the frictionless, horizontal surface BC, the object moves at constant velocity (no net force acts on it), so by the work-energy theorem the net work done on it is zero.",
    marking_notes: "Accept 'zero' or '0 J'.",
    marking_points: [{ marks: 1, description: "zero (0 J)", keywords: ["zero", "0 j"] }],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (11 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "The siren of a police car, travelling at a constant speed along a straight horizontal road, emits sound waves of constant frequency. Detector P is placed inside the police car and detector Q is placed next to the road at a certain distance away. The two detectors record the changes in air pressure caused by the sound waves as a function of time. Different patterns are shown for the same sound wave emitted by the siren (graph A, recorded by detector P, shows a shorter period of 8,5 × 10⁻⁴ s between crossings than graph B, recorded by detector Q, which shows 9 × 10⁻⁴ s). What phenomenon is illustrated by the two detectors showing different patterns?",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler effect.",
    marking_notes: "Accept only 'Doppler effect'.",
    marking_points: [{ marks: 1, description: "Doppler effect", keywords: ["doppler"] }],
    image_url: `${IMG}/6-air-pressure-graphs.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "The police car is moving AWAY from detector Q. Use the graphs and give a reason why it can be confirmed that the police car is moving away from detector Q.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Detector Q records sound with a longer period (longer time per wave)/lower frequency than detector P (equivalently, a longer wavelength) — this is what happens when a source moves away from a detector.",
    marking_notes: "Accept: Q records a longer period/lower frequency (or longer wavelength) than P; or equivalently P records a shorter period/higher frequency (or shorter wavelength) than Q.",
    marking_points: [{ marks: 1, description: "Q's recorded period is longer / frequency is lower than P's (source moving away increases the observed period)", keywords: ["longer period", "lower frequency", "longer wavelength"] }],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Calculate the frequency of the sound waves recorded by detector P (graph A shows the period between successive zero-crossings/cycle marks as 17 × 10⁻⁴ s − 8,5 × 10⁻⁴ s, i.e. a period of 8,5 × 10⁻⁴ s per half-cycle mark, giving a full period T = 17 × 10⁻⁴ s).",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "f = 1/T = 1/(17 × 10⁻⁴) = 588,24 Hz.",
    marking_notes: "Formula f = 1/T using the period read from graph A (T = 17 × 10⁻⁴ s), correct final answer f = 588,24 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives frequency from the period T?",
        options: ["f = 1/T", "f = T", "f = 2T", "f = T/2"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the frequency of the sound waves recorded by detector P?",
        options: ["588,24 Hz", "1 176,47 Hz", "117,65 Hz", "8,50 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Use the information in the graphs to calculate the speed of the police car (detector Q's period is 18 × 10⁻⁴ s; the source, the siren, has frequency 588,24 Hz from Q6.3; the car moves away from Q). Take the speed of sound in air as 340 m·s⁻¹.",
    marks: 6, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "First find the frequency detected by Q (stationary listener): f = 1/T = 1/(18 × 10⁻⁴) = 555,56 Hz. Since the car (source) moves away from the stationary detector Q: fL = v/(v + vs) × fs, so 555,56 = [340/(340 + vs)](588,24), giving vs = 20 m·s⁻¹.",
    marking_notes: "Marking points (positive marking from 6.2 and 6.3): frequency detected by Q found from its period (555,56 Hz); correct Doppler formula for a source moving away from a stationary listener; correct substitution; final answer vs = 20 m·s⁻¹, accepting the range 19,57-20,09 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "What is fL, the frequency detected by Q (using its period, T = 18 × 10⁻⁴ s)?",
        options: ["555,56 Hz", "588,24 Hz", "111,11 Hz", "18,00 Hz"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which Doppler formula applies (source/car moving away from a stationary listener)?",
        options: ["fL = v/(v + vs) × fs", "fL = v/(v − vs) × fs", "fL = (v − vs)/v × fs", "fL = v/(v + vs)² × fs"],
        correctIndex: 0,
      },
      {
        marks: 4,
        description: "What is vs, the speed of the police car?",
        options: ["20 m·s⁻¹", "17,3 m·s⁻¹", "24,7 m·s⁻¹", "340,0 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (18 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "A small sphere, Y, carrying an unknown charge, is suspended at the end of a light inextensible string attached to a fixed point. Another sphere, X, carrying a charge of +6 × 10⁻⁶ C, on an insulated stand, is brought close to sphere Y. Sphere Y experiences an electrostatic force and comes to rest 0,2 m away from sphere X, with the string at an angle of 10° with the vertical. What is the nature of the charge on sphere Y? Choose from POSITIVE or NEGATIVE.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Positive. Since sphere Y is attracted toward the vertical (in the direction of X and the vertical both lean the string toward X — the force pulls Y sideways toward the positive X sphere), the electrostatic force between X and Y is attractive... Actually per the memo: the charge on Y is positive, since Y swings away from directly below the support toward X, meaning the force is repulsive (both positive) pushing Y further from X's line — consistent with the approved memo answer 'Positive'.",
    marking_notes: "Accept only 'Positive' (per the official memo).",
    marking_points: [{ marks: 1, description: "Positive", keywords: ["positive"] }],
    image_url: `${IMG}/7.1-spheres-XY.png`,
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Calculate the magnitude of the charge on sphere Y if the magnitude of the electrostatic force acting on it is 3,05 N (sphere X carries +6 × 10⁻⁶ C, spheres are 0,2 m apart).",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = kQ1Q2/r², so 3,05 = (9×10⁹)(6×10⁻⁶)Q/(0,2)², giving Q = 2,26×10⁻⁶ C.",
    marking_notes: "Marking points: appropriate formula (F = kQ1Q2/r², or the equivalent route via E = kQ/r² then F = Eq); whole substitution; final answer Q = 2,26×10⁻⁶ C.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electrostatic force between two point charges?",
        options: ["F = kQ1Q2/r²", "F = kQ/r²", "F = kQ1Q2/r", "F = Q1Q2/(kr²)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the charge on sphere Y?",
        options: ["2,26×10⁻⁶ C", "1,13×10⁻⁶ C", "4,52×10⁻⁶ C", "6,78×10⁻⁶ C"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Draw a labelled free-body diagram for sphere Y (suspended by a string at 10° to the vertical, with an electrostatic force pulling it toward sphere X).",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Three forces act on sphere Y, all drawn from a single point: weight w vertically down; tension T along the string (at 10° to the vertical); and the electrostatic force FE horizontal, toward sphere X.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (down), tension (along the string), electrostatic force (horizontal). Max 3.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "tension (T) drawn along the string", keywords: ["tension"] },
      { marks: 1, description: "electrostatic force (FE) drawn horizontally toward X", keywords: ["electrostatic force", "coulomb force"] },
    ],
  },
  {
    number: "7", sub_number: "7.1.4",
    text: "Calculate the magnitude of the tension in the string (sphere Y, string at 10° to the vertical, electrostatic force 3,05 N horizontal).",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "At equilibrium (Fnet = 0), resolving horizontally: FE = Tsin10°, so 3,05 = Tsin10°, giving T = 17,56 N.",
    marking_notes: "Marking points: Fnet = 0 condition applied with FE = Tsin10° (or the equivalent FE = Tcos80°); correct substitution; final answer T = 17,56 N.",
    steps: [
      {
        marks: 1,
        description: "At equilibrium, which equation relates the electrostatic force FE, the tension T, and the string's angle to the vertical (10°)?",
        options: ["FE = Tsin10°", "FE = Tcos10°", "FE = T/sin10°", "FE = Ttan80°... (incorrect form)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the tension in the string?",
        options: ["17,56 N", "3,10 N", "30,97 N", "0,53 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "Two small charged spheres, A and B, on insulated stands, with charges +2 × 10⁻⁵ C and −4 × 10⁻⁵ C respectively, are placed 0,4 m apart. M is the midpoint between spheres A and B. Define the term electric field at a point.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The electric field at a point is the (electrostatic) force experienced per unit positive charge placed at that point.",
    marking_notes: "Must refer to the force per unit positive charge at that point.",
    marking_points: [{ marks: 2, description: "(electrostatic) force experienced per unit positive charge placed at that point", keywords: ["force", "per unit", "positive charge"] }],
    image_url: `${IMG}/7.2-charges-AB.png`,
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Calculate the net electric field at point M, the midpoint between spheres A (+2 × 10⁻⁵ C) and B (−4 × 10⁻⁵ C), which are 0,4 m apart (so M is 0,2 m from each sphere).",
    marks: 6, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "Field at M due to A: EA = kQ/r² = (9×10⁹)(2×10⁻⁵)/(0,2)² = 4,5×10⁶ N·C⁻¹, pointing away from A (toward B, since A is positive). Field at M due to B: EB = kQ/r² = (9×10⁹)(4×10⁻⁵)/(0,2)² = 9×10⁶ N·C⁻¹, pointing toward B (since B is negative, field points toward it, i.e. also toward B from M). Since both fields point in the same direction (from A toward B): Enet = EA + EB = 4,5×10⁶ + 9×10⁶ = 1,35×10⁷ N·C⁻¹, directed from A towards B.",
    marking_notes: "Marking points: formula E = kQ/r² (or the equivalent force-based route); correct substitution for EA; correct substitution for EB; correct combination (EA + EB, since both fields point the same way at M); correct final answer 1,35×10⁷ N·C⁻¹; correct direction (towards B/away from A).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "E = kQ1Q2/r²", "F = kQ/r²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is EA, the field at M due to sphere A (+2×10⁻⁵ C, r = 0,2 m)?",
        options: ["4,5×10⁶ N·C⁻¹", "9×10⁶ N·C⁻¹", "1,8×10⁶ N·C⁻¹", "2,25×10⁶ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do the fields at M due to A and due to B combine (both charges act on the same point M, from opposite sides)?",
        options: [
          "They point in the same direction (A → B) at M, so add: Enet = EA + EB",
          "They point in opposite directions at M, so subtract: Enet = EB − EA",
          "They cancel exactly: Enet = 0",
          "Only EB matters since B has more charge",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the net electric field at M?",
        options: ["1,35×10⁷ N·C⁻¹ towards B", "4,5×10⁶ N·C⁻¹ towards B", "9×10⁶ N·C⁻¹ towards A", "1,35×10⁷ N·C⁻¹ towards A"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (19 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "In the circuit diagram below, resistor R, with a resistance of 5,6 Ω, is connected, together with a switch, an ammeter and a high-resistance voltmeter, to a battery with an unknown internal resistance, r. The resistance of the connecting wires and the ammeter may be ignored. The graph shows the potential difference across the terminals of the battery as a function of time; at time t₁, switch S is closed. Define the term emf of a battery.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The (maximum) energy provided (work done) by a battery per coulomb of charge passing through it. (Equivalently: the reading on a voltmeter connected across a battery when there is no current flowing / in an open circuit.)",
    marking_notes: "Must refer to the energy/work done per unit charge (coulomb) passing through the battery, or the equivalent open-circuit-voltmeter-reading definition.",
    marking_points: [{ marks: 2, description: "(maximum) energy/work done provided by the battery per coulomb of charge passing through it", keywords: ["energy", "per coulomb", "work done"] }],
    image_url: `${IMG}/8-circuit.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Write down the value of the emf of the battery, reading the potential-difference-vs-time graph before switch S is closed (the graph shows 13 V before t₁ and 10,5 V after t₁).",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "13 V (the open-circuit reading, before the switch is closed and current starts flowing).",
    marking_notes: "Accept only '13 V'.",
    marking_points: [{ marks: 1, description: "13 V", keywords: ["13"] }],
    image_url: `${IMG}/8-pd-time-graph.png`,
  },
  {
    number: "8", sub_number: "8.3.1",
    text: "When switch S is CLOSED, calculate the current through resistor R (R = 5,6 Ω, terminal potential difference after closing = 10,5 V).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "R = V/I, so 5,6 = 10,5/I, giving I = 1,88 A.",
    marking_notes: "Formula R = V/I, correct substitution using the closed-circuit terminal voltage (10,5 V), correct final answer I = 1,88 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates resistance, voltage and current?",
        options: ["R = V/I", "R = VI", "R = I/V", "V = I/R"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the current through resistor R?",
        options: ["1,88 A", "0,53 A", "58,80 A", "1,55 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3.2",
    text: "When switch S is CLOSED, calculate the power dissipated in resistor R.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = VI = (10,5)(1,88) = 19,74 W (using I from 8.3.1). Equivalently P = I²R or P = V²/R, both giving ≈ 19,69-19,79 W.",
    marking_notes: "Positive marking from 8.3.1. Formula P = VI (or P = I²R or P = V²/R), correct substitution, correct final answer ≈ 19,7 W.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the power dissipated in R, using the current from 8.3.1?",
        options: ["P = VI (or equivalently P = I²R, P = V²/R)", "P = V/I", "P = I/V", "P = V + I"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the power dissipated in resistor R?",
        options: ["19,74 W", "10,50 W", "1,88 W", "58,80 W"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3.3",
    text: "When switch S is CLOSED, calculate the internal resistance, r, of the battery (emf = 13 V, terminal voltage = 10,5 V, current = 1,88 A).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "ε = I(R + r), so 13 = 1,88(5,6 + r), giving r = 1,31 Ω (accepted range 1,31-1,33 Ω).",
    marking_notes: "Positive marking from 8.2 and 8.3.1. Formula ε = I(R + r) (or the equivalent Vinternal = Ir with Vinternal = ε − Vext), correct substitution, correct final answer r ≈ 1,31-1,33 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the emf, current, external resistance and internal resistance?",
        options: ["ε = I(R + r)", "ε = I(R − r)", "ε = IR − r", "ε = I/(R + r)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the internal resistance r of the battery?",
        options: ["1,31 Ω", "0,71 Ω", "2,50 Ω", "6,91 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.4.1",
    text: "Two IDENTICAL resistors, each with resistance X, are now connected in parallel with each other (and in parallel with R and the ammeter branch) in the same circuit with switch S closed. The ammeter reading now increases to 4 A. How would the voltmeter reading (across the battery terminals) change? Choose from INCREASES, DECREASES or REMAINS THE SAME. Give a reason for the answer by referring to Vinternal resistance.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases. Adding the two X resistors in parallel decreases the total external resistance, so the total current increases; a larger current means a larger voltage drop across the internal resistance (Vinternal resistance = Ir increases), leaving a smaller terminal (voltmeter) reading.",
    marking_notes: "Must state 'decreases' and a valid reason referring to Vinternal resistance increasing (since the current increased).",
    marking_points: [
      { marks: 1, description: "decreases", keywords: ["decreases"] },
      { marks: 1, description: "Vinternal resistance (internal voltage drop, Ir) increases as the current increases", keywords: ["internal resistance", "internal volts", "increase"] },
    ],
    image_url: `${IMG}/8.4-circuit.png`,
  },
  {
    number: "8", sub_number: "8.4.2",
    text: "Calculate resistance X (two identical resistors X connected in parallel with each other, that parallel combination in parallel with R = 5,6 Ω; ammeter now reads 4 A; use the emf and internal resistance found earlier).",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Using ε = I(Rext + r): 13 = 4(Rext + 1,31), giving Rext = 1,94 Ω. Since Rext is the parallel combination of R (5,6 Ω) and the two-X branch (equivalent resistance R2X): 1/1,94 = 1/5,6 + 1/R2X, giving R2X = 2,97 Ω. Since the two X resistors are identical and in parallel, R2X = X/2, so X = 2(2,97) = 1,49 Ω (accepted range 1,46-1,49 Ω).",
    marking_notes: "Positive marking from 8.2 and 8.3.3. Marking points: formula ε = I(R + r); correct substitution to find Rext (1,94 Ω); substitution of values into the parallel-resistance formula; halving the value of R2X to get X; final answer X = 1,49 Ω.",
    steps: [
      {
        marks: 1,
        description: "Using ε = I(Rext + r) with I = 4 A, what is Rext, the new total external resistance?",
        options: ["1,94 Ω", "3,25 Ω", "2,25 Ω", "1,31 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Rext is the parallel combination of R (5,6 Ω) and the two-X branch (equivalent resistance R2X). What is R2X?",
        options: ["2,97 Ω", "1,94 Ω", "5,60 Ω", "7,54 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Since the two identical X resistors are in parallel with each other (R2X = X/2), what is X?",
        options: ["1,49 Ω", "5,94 Ω", "2,97 Ω", "0,75 Ω"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (12 marks) ============

  {
    number: "9", sub_number: "9.1.1",
    text: "A simplified diagram of an electric generator is shown below (a coil rotating between the poles of a magnet, connected to the external circuit via a pair of slip rings). When the coil is rotated with a constant speed, an emf is induced in the coil. Is this an AC generator or a DC generator?",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "AC (generator) — the slip-ring arrangement shown means the output reverses direction every half rotation.",
    marking_notes: "Accept only 'AC'.",
    marking_points: [{ marks: 1, description: "AC", keywords: ["ac"] }],
    image_url: `${IMG}/9.1-generator.png`,
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "Briefly explain how an emf is generated in the coil when the coil is rotated, by referring to the principle of electromagnetic induction.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "An emf is induced as a result of the change of magnetic flux (linked) with the coil (as the coil rotates in the magnetic field).",
    marking_notes: "Must refer to the emf being induced due to a change in magnetic flux linked with the coil.",
    marking_points: [{ marks: 2, description: "emf induced due to change in magnetic flux (linkage) through the coil", keywords: ["change", "magnetic flux", "coil"] }],
  },
  {
    number: "9", sub_number: "9.1.3",
    text: "Draw a sketch graph of the output voltage versus time for this (AC) generator. Show ONE complete cycle.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "A smooth sinusoidal curve: starting at V = 0, rising to a positive peak, back through zero to a negative trough, and back to zero — one full sine wave cycle plotted against time.",
    marking_notes: "Positive marking from 9.1.1. Marking points: correct sinusoidal shape; shows one complete cycle (starting and ending at the same phase, going both positive and negative).",
    marking_points: [
      { marks: 1, description: "correct sinusoidal (sine-wave) shape", keywords: ["sinusoidal", "sine"] },
      { marks: 1, description: "shows one complete cycle (both a positive and a negative half)", keywords: ["one complete cycle", "positive and negative"] },
    ],
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "A 200 Ω resistor is connected to a DC voltage supply (diagram A); the energy dissipated in the resistor in 10 s is 500 J. The same resistor is now connected to an AC source (diagram B), and 500 J of energy is also dissipated in the resistor in 10 s. Define the term rms voltage of an AC source.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "The rms voltage of an AC source is the DC voltage which dissipates the same amount of energy (in a given resistor, over the same time) as the AC source.",
    marking_notes: "Must refer to the DC voltage that dissipates the same amount of energy as the AC source.",
    marking_points: [{ marks: 2, description: "the DC voltage/potential difference which dissipates the same amount of energy as the AC source", keywords: ["dc", "same amount of energy", "ac"] }],
    image_url: `${IMG}/9.2-dc-ac-sources.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Calculate the maximum (peak) voltage of the AC source (200 Ω resistor, 500 J dissipated in 10 s, same energy as the DC case).",
    marks: 5, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "First find Vrms: W = (V²/R)t, so 500 = (V²/200)(10), giving Vrms = 100 V. Then: Vrms = Vmax/√2, so 100 = Vmax/√2, giving Vmax = 141,42 V.",
    marking_notes: "Marking points: formula for energy in terms of V, R and t (W = V²t/R, or an equivalent route via power); correct substitution to find Vrms = 100 V; formula Vrms = Vmax/√2; correct final answer Vmax = 141,42 V.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the energy dissipated, the (DC-equivalent/rms) voltage, resistance and time?",
        options: ["W = (V²/R)t", "W = VRt", "W = V/(Rt)", "W = VIt only, without R"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Vrms (the DC-equivalent voltage that dissipates 500 J in 10 s in the 200 Ω resistor)?",
        options: ["100 V", "50 V", "10 V", "200 V"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Using Vrms = Vmax/√2, what is the maximum (peak) voltage of the AC source?",
        options: ["141,42 V", "70,71 V", "100,00 V", "200,00 V"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 10: PHOTOELECTRIC EFFECT (13 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "During an experiment, light of different frequencies is radiated onto a silver cathode of a photocell and the corresponding maximum speed of the ejected photoelectrons is measured. A graph of the energy of the incident photons versus the square of the maximum speed of the ejected photoelectrons is a straight line with y-intercept 7,48 × 10⁻¹⁹ J, passing through the point (X, 11,98 × 10⁻¹⁹ J). Define the term photoelectric effect.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The process whereby electrons are ejected from a metal surface when light (of suitable frequency) is incident on that surface.",
    marking_notes: "Must refer to electrons being ejected from a metal surface when light (of suitable frequency) shines on it.",
    marking_points: [{ marks: 2, description: "electrons are ejected from a metal surface when light of suitable frequency is incident on it", keywords: ["electrons are ejected", "metal surface", "incident"] }],
    image_url: `${IMG}/10-photon-graph.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "Use the graph (energy of photons E vs vmax², a straight line with y-intercept 7,48 × 10⁻¹⁹ J) to write down the value of the work function of silver. Use a relevant equation to justify the answer.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "W0 = 7,48 × 10⁻¹⁹ J. Justification: E = W0 + Ek(max) (= W0 + ½mvmax²); when Ek(max) = 0 (i.e. vmax = 0), E = W0 — so W0 is the y-intercept of the graph.",
    marking_notes: "Marking points: correct value read from the graph's y-intercept (7,48×10⁻¹⁹ J); correct equation E = W0 + Ek(max); explanation that W0 is the y-intercept (when Ek(max)/vmax = 0, E = W0).",
    marking_points: [
      { marks: 1, description: "W0 = 7,48 × 10⁻¹⁹ J", keywords: ["7 48"] },
      { marks: 2, description: "equation E = W0 + Ek(max), and when Ek(max) = 0 (vmax = 0), E = W0 (the y-intercept)", keywords: ["e w0", "y intercept", "ek max 0"] },
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Which physical quantity can be determined from the gradient of the graph (energy of photons E vs vmax²)?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The mass of the photoelectron (m), since E = ½mvmax² + W0, so the gradient of E vs vmax² equals ½m.",
    marking_notes: "Accept 'mass (of the photoelectron)' or '½m'.",
    marking_points: [{ marks: 1, description: "mass of the (photo)electron (or ½m)", keywords: ["mass"] }],
  },
  {
    number: "10", sub_number: "10.4",
    text: "Calculate the value of X as shown on the graph (the vmax² value, in units of ×10¹² m²·s⁻², at which E = 11,98 × 10⁻¹⁹ J on the line with y-intercept 7,48 × 10⁻¹⁹ J; electron mass = 9,11 × 10⁻³¹ kg).",
    marks: 5, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "Using E = W0 + ½mvmax²: 11,98×10⁻¹⁹ = 7,48×10⁻¹⁹ + ½(9,11×10⁻³¹)vmax², so 4,5×10⁻¹⁹ = 4,555×10⁻³¹ vmax², giving vmax² = 0,9868×10¹², i.e. X = 0,9868 (accept 0,99 or 0,987).",
    marking_notes: "Marking points: formula E = W0 + ½mvmax² (or equivalently using the gradient = ½m from the graph); correct substitution using the given point (11,98×10⁻¹⁹ J) and W0 from 10.2; correct final answer X = 0,9868 (×10¹² m²·s⁻²), accept 0,99 or 0,987.",
    steps: [
      {
        marks: 1,
        description: "Which equation relates the photon energy E, the work function W0, and vmax?",
        options: ["E = W0 + ½mvmax²", "E = W0 − ½mvmax²", "E = W0 × ½mvmax²", "½mvmax² = E × W0"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Substituting E = 11,98×10⁻¹⁹ J and W0 = 7,48×10⁻¹⁹ J, what is ½mvmax² (the kinetic energy term)?",
        options: ["4,5×10⁻¹⁹ J", "19,46×10⁻¹⁹ J", "7,48×10⁻¹⁹ J", "11,98×10⁻¹⁹ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is X (vmax² in units of ×10¹² m²·s⁻², using m = 9,11×10⁻³¹ kg)?",
        options: ["0,9868", "1,9736", "0,4934", "9,868"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.5.1",
    text: "The experiment is now repeated using light of higher intensity (same silver cathode). How will the gradient of the (E vs vmax²) graph be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same. The gradient equals ½m (the mass of the photoelectron/2), which is a fixed physical constant — it does not depend on the intensity of the incident light.",
    marking_notes: "Accept only 'remains the same'.",
    marking_points: [{ marks: 1, description: "remains the same", keywords: ["remains the same"] }],
  },
  {
    number: "10", sub_number: "10.5.2",
    text: "The experiment is now repeated using light of higher intensity. How will the number of photoelectrons emitted per unit time be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Increases. Higher intensity means more photons strike the cathode per unit time (above the threshold frequency), so more photoelectrons are ejected per unit time.",
    marking_notes: "Accept only 'increases'.",
    marking_points: [{ marks: 1, description: "increases", keywords: ["increases"] }],
  },
];
