// Real DBE past paper: Physical Sciences (Physics) P1, November 2015, National
// (English).
// Source: question paper rendered from .scratch_pdfs/qp2015.pdf (22 pages;
// cover page confirms "PHYSICAL SCIENCES: PHYSICS (P1)", "NOVEMBER 2015",
// "MARKS: 150", "TIME: 3 hours", "This question paper consists of 17 pages,
// 3 data sheets and 1 answer sheet.").
//
// Memo source note: the memo PDF (.scratch_pdfs/memo2015.pdf) was originally
// fetched from a generically-named file ("NOV-P1-MEMO.pdf", no year in the
// filename). It has been thoroughly verified to be the genuine 2015 P1 memo:
// its own cover page reads "PHYSICAL SCIENCES: PHYSICS (P1) / FISIESE
// WETENSKAPPE: FISIKA (V1)", "NOVEMBER 2015", "MEMORANDUM", "MARKS/PUNTE: 150"
// — and every one of the 11 questions was cross-checked line-by-line against
// the QP's given numbers while transcribing (Q1 MCQ answers B D C D A A A D C
// B against the QP's diagrams/options; Q2's pulley/friction figures 2.5 kg,
// mu_s=0.2, 5 kg, mu_k=0.15 and the planet-X data; Q3's ball A/B figures
// 16 m.s^-1, 9 m.s^-1, 30 m, one-second delay; Q4's bullet/rifle 20 g, 3 kg,
// 1.4 m.s^-1 recoil; Q5's motorbike 800 m/75 s, 240 N, 450 m/5 m incline,
// 294 N friction; Q6's Doppler table 0/10/20/30 m.s^-1 -> 900/874/850/827 Hz;
// Q7's spheres 0.5 muC, -0.9 muC, 7 degrees, 20 cm; Q8's charges +2e-5 C,
// -8e-6 C, 0.4 m, 0.25 m; Q9's circuit 8/16/20 ohm, r=1 ohm, 0.5 A; Q10's
// kettle 220 V, 40.33 ohm; Q11's photoelectric 1/lambda vs Ek(max) table).
// Every question's content, numbering, and mark allocation matches between
// the two PDFs with no stray or mismatched pages. The memo is 14 pages
// (landscape, two memo pages rendered per PDF page) against the QP's 17
// pages — that's just denser formatting, not a truncated memo; all 150
// marks are accounted for across all 11 questions.
//
// Paper structure: ELEVEN compulsory questions (no choice), 150 marks,
// 3 hours. Question 11.2 (plotting Ek(max) vs 1/lambda) is normally answered
// on a separate attached answer sheet with a pre-drawn grid; it is
// transcribed here as an open-ended sketch question using marking_points,
// consistent with how this repo handles other graph-sketch questions.
//
// Diagrams: genuinely diagram-dependent questions (MCQ graph/circuit/loop
// identification, the pulley system, the ball A/B position diagram, the
// motorbike incline, the charged-sphere string diagram, the point-charge
// diagram, the two circuit diagrams, and the induction/motor device
// diagrams) were cropped from 220 dpi page renders into
// public/question-images/physics-2015-p1/. The small motorbike/rocket
// clipart photos are decorative only and were not cropped as images; their
// numeric/diagram content (distances, forces, directions) is given in the
// question text instead.
//
// This paper reuses every topic already defined by the Nov 2025/2024 P1
// datasets (scripts/seed-data/physical-sciences-p1-nov2025.ts /
// -nov2024.ts) — no new CAPS topic appears in this paper that isn't already
// covered by those, so the `topics` array below is identical to theirs
// (topics are upserted by key in scripts/seed.ts, so redeclaring them here
// is safe and required since this file is a standalone dataset).
//
// Calculation questions (2.1.2, 2.1.3, 2.1.4, 2.2, 3.1, 3.3, 4.1, 4.2, 5.1,
// 5.4, 6.1.4, 7.1, 7.4, 8.1, 8.2, 8.3, 9.2, 9.3, 9.4, 10.2.1, 10.2.2, 11.3.1,
// 11.3.2) use `steps` instead of `marking_points`: the student works the
// problem out on paper as normal, then picks the option they got for each
// mark-earning step (formula, intermediate value, final answer) from a few
// choices, rather than typing anything. Distractors are chosen to trap
// specific real errors (wrong formula, sign flip, wrong given value, mixing
// up mass/radius, forgetting a conversion, using the wrong triangle side),
// not just arbitrary wrong numbers.
//
// FLAG for review: Question 3.3 ("calculate how high above the ground ball A
// will be at the instant the two balls pass each other") has a small
// discrepancy between marking options in the approved memo itself: Options 1
// and 2 (solving directly for the common height yA) give yA = 11,25 m, while
// Option 3 (solving for Delta t first, then substituting back) gives
// 11,31 m due to rounding Delta t to 1,24 s before back-substituting. Both
// are explicitly accepted by the memo. This is transcribed faithfully with
// 11,25 m as the primary accepted answer and the discrepancy noted in the
// step's distractor commentary, not silently resolved.
//
// FLAG for review: Question 6.1.4 ("calculate the speed of sound") has FOUR
// different accepted numeric answers across the memo's option boxes (336,15;
// 341,91; 339,57; and, using the simplest single-pair calculation from
// Experiment 1 and Experiment 3's rows of the table, exactly 340 m.s^-1),
// because different valid pairings of the four experimental data points
// give slightly different regression results. 340 m.s^-1 (the exact result
// from the cleanest single-equation method, consistent with the memo's
// accepted range of roughly 313-345 m.s^-1) is used here as the main
// accepted answer.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2015-p1";

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
  year: 2015,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2018/05/NOV-2015-PHY-P1-QP-ONLY.pdf" as string | null,
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
    text: "Two forces, F1 and F2, are applied on a crate lying on a frictionless, horizontal surface, as shown in the diagram below. The magnitude of force F1 is greater than that of force F2 (F1 points west, F2 points east). The crate will ... (A) accelerate towards the east. (B) accelerate towards the west. (C) move at a constant speed towards the east. (D) move at a constant speed towards the west.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "B — accelerate towards the west. F1 (west) is greater than F2 (east), so there is a nonzero net force to the west, giving the crate a (nonzero) acceleration to the west.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.1-force-crate.png`,
  },
  {
    number: "1", sub_number: "1.2",
    text: "A person stands on a bathroom scale that is calibrated in newton, in a stationary elevator. The reading on the bathroom scale is W. The elevator now moves with a constant upward acceleration of (1/4)g, where g is the gravitational acceleration. What will the reading on the bathroom scale be now? (A) (1/4)W (B) (3/4)W (C) W (D) (5/4)W",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "D — (5/4)W. Initially (stationary) the scale reads W = mg. Accelerating upward at a = g/4, the scale reading (normal force) is N = m(g+a) = m(g + g/4) = (5/4)mg = (5/4)W.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Which ONE of the graphs below correctly represents the relationship between the kinetic energy (K) of a free-falling object and its speed (v)? (A) a straight line through the origin with positive slope (B) a straight line with negative slope, decreasing to zero (C) a curve increasing with increasing steepness (concave up, through the origin) (D) a curve decreasing with decreasing steepness, approaching zero",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "C — the curve that increases with increasing steepness (concave up), since K = (1/2)mv² is a quadratic (parabolic) relationship between K and v, not a straight line.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.3-kv-graphs.png`,
  },
  {
    number: "1", sub_number: "1.4",
    text: "The simplified diagram shows a rocket that has been fired horizontally, accelerating to the west, with exhaust gases shooting out of the back towards the east. Which ONE of the statements below best explains why the rocket accelerates? (A) The speed of the exhaust gases is smaller than the speed of the rocket. (B) The pressure of the atmosphere at the back of the rocket is less than at the front. (C) The air outside the rocket exerts a greater force on the back of the rocket than at the front. (D) The rocket pushes the exhaust gases to the east and the exhaust gases push the rocket to the west.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "D — the rocket pushes the exhaust gases to the east and the exhaust gases push the rocket to the west (Newton's third law action-reaction pair; no air/atmosphere is needed, since this works even in a vacuum).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "A ball moving horizontally has constant momentum p and kinetic energy K. The ball collides with a wall and bounces back horizontally. Immediately after the collision, the ball has momentum (1/2)p. The mass of the ball remains constant. Which ONE of the following is the kinetic energy of the ball immediately after the collision? (A) (1/4)K (B) (1/2)K (C) 2K (D) 4K",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "A — (1/4)K. Since Ek = p²/(2m), halving the momentum while mass stays constant scales the kinetic energy by (1/2)² = 1/4.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "A line emission spectrum is formed when an excited atom moves from a ... (A) higher to a lower energy level and releases energy. (B) higher to a lower energy level and absorbs energy. (C) lower to a higher energy level and releases energy. (D) lower to a higher energy level and absorbs energy.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "A — higher to a lower energy level and releases energy (an emission spectrum is produced when electrons fall to a lower energy level, releasing a photon).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two charged spheres of magnitudes 2Q and Q respectively are placed a distance r apart on insulating stands. If the sphere of charge Q experiences a force F to the east, then the sphere of charge 2Q will experience a force ... (A) F to the west. (B) F to the east. (C) 2F to the west. (D) 2F to the east.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "A — F to the west. By Newton's third law, the two charges exert equal-magnitude, oppositely-directed forces on each other regardless of the difference in their charge magnitudes.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "The four resistors P, Q, R and T in the circuit are identical. The cell has an emf epsilon and negligible internal resistance. P and T are in series with the battery; Q and R are in parallel with each other, connected between P and T, with a switch S in series with R's branch (bridging to the node between Q and R). The switch is initially CLOSED. Switch S is now OPENED. Which ONE of the following combinations of changes will occur in P, R and T? (A) Current in P: Decreases; Current in R: Remains the same; Current in T: Decreases (B) Current in P: Increases; Current in R: Remains the same; Current in T: Increases (C) Current in P: Increases; Current in R: Increases; Current in T: Increases (D) Current in P: Decreases; Current in R: Increases; Current in T: Decreases",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "D — Current in P decreases, current in R increases, current in T decreases. Opening S removes R from the circuit entirely (no current can flow through it, since its branch is broken), so current in R is effectively zero. The total external resistance increases (losing the Q||R parallel combination's reduction), so the total circuit current (through P and T) decreases.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.8-circuit.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "A DC current passes through a rectangular wire loop OPQR placed between two pole pieces of a magnet, with side PQ nearest the N pole face and side OR(RO)/segment nearer the gap, as shown in the diagram (current flows up side OP and down side QR). Which TWO segments of the loop will experience an electromagnetic force when the loop is in the position shown? (A) OP and PQ (B) QR and RO (C) OP and QR (D) RO and OP",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "C — OP and QR. Only the two sides of the loop that lie within/across the magnetic field between the pole pieces (and that are perpendicular to the field, carrying current) experience a force (F = BIL sin theta); the sides running parallel to the field, or outside the gap, experience no (or negligible) force.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.9-loop-field.png`,
  },
  {
    number: "1", sub_number: "1.10",
    text: "When light of a certain wavelength is incident on a metal surface, no electrons are ejected. Which ONE of the following changes may result in electrons being ejected from the metal surface? (A) Increase the intensity of the light. (B) Use light with a much shorter wavelength. (C) Use metal with a larger work function. (D) Increase the surface area of the metal.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "B — use light with a much shorter wavelength. A shorter wavelength means a higher photon energy (E = hc/lambda); if the photon energy is raised above the metal's work function, electrons will be ejected. Increasing intensity, increasing the work function, or increasing surface area does not change whether individual photons have enough energy.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (19 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "Two blocks of mass M kg and 2,5 kg respectively are connected by a light, inextensible string. The string runs over a light, frictionless pulley at the edge of a table, as shown in the diagram (M kg on the table, 2,5 kg hanging). The blocks are stationary. State Newton's THIRD law in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When body A exerts a force on body B, body B simultaneously exerts a force of equal magnitude in the opposite direction on body A.",
    marking_notes: "Must refer to two bodies exerting forces of equal magnitude and opposite direction on each other, simultaneously.",
    marking_points: [{ marks: 2, description: "equal magnitude, opposite direction forces on each other (simultaneously)", keywords: ["equal magnitude", "opposite direction", "simultaneously"] }],
    image_url: `${IMG}/2-pulley.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Calculate the tension in the string (the blocks are stationary).",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For the stationary 2,5 kg hanging block: Fnet = 0, so T = mg = (2,5)(9,8) = 24,5 N.",
    marking_notes: "Marking points: formula T = mg (or Fnet = ma = 0 for the 2,5 kg block); correct substitution; correct final answer T = 24,5 N.",
    steps: [
      {
        marks: 1,
        description: "Which equation gives the tension, for the stationary 2,5 kg hanging block?",
        options: ["T = mg", "T = ma (with a ≠ 0)", "T = mg + ma (with a ≠ 0)", "T = m/g"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the tension in the string?",
        options: ["24,5 N", "12,25 N", "2,5 N", "9,8 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "The coefficient of static friction (mu_s) between the unknown mass M and the surface of the table is 0,2. Calculate the minimum value of M that will prevent the blocks from moving.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "At the minimum M, the maximum static friction on M exactly balances the tension (= 24,5 N from 2.1.2): fs(max) = T, so fs(max) = 24,5 N. Since fs(max) = mu_s·N = mu_s·M·g: 24,5 = (0,2)(M)(9,8), giving M = 12,5 kg.",
    marking_notes: "Marking points: fs(max) = T = 24,5 N; formula fs(max) = mu_s·N = mu_s·M·g; correct substitution; correct final answer M = 12,5 kg.",
    steps: [
      {
        marks: 1,
        description: "At the minimum M, what does the maximum static friction on M equal?",
        options: ["The tension T (24,5 N)", "Zero", "The weight of M", "Half the tension"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Which formula relates fs(max) to mu_s and M?",
        options: ["fs(max) = mu_s·M·g", "fs(max) = mu_s/(M·g)", "fs(max) = mu_s + M·g", "fs(max) = M·g/mu_s"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the minimum value of M?",
        options: ["12,5 kg", "5,0 kg", "2,5 kg", "4,9 kg"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "The block of unknown mass M is now replaced with a block of mass 5 kg. The 2,5 kg block now accelerates downwards. The coefficient of kinetic friction (mu_k) between the 5 kg block and the surface of the table is 0,15. Calculate the magnitude of the acceleration of the 5 kg block.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For the 5 kg block on the table: T − fk = (5)a, where fk = mu_k·N = (0,15)(5)(9,8) = 7,35 N, so T − 7,35 = 5a ... (1). For the 2,5 kg hanging block: (2,5)(9,8) − T = (2,5)a, so 24,5 − T = 2,5a ... (2). Adding (1) and (2): 24,5 − 7,35 = 7,5a, giving a = 2,29 m·s⁻².",
    marking_notes: "Marking points: correct equation of motion for the 5 kg block (using kinetic friction fk = 7,35 N); correct equation of motion for the 2,5 kg hanging block; correct final answer a = 2,29 m·s⁻².",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to the 5 kg block on the table (using kinetic friction, fk = mu_k·N = 7,35 N)?",
        options: [
          "T − fk = (5)a",
          "T − mu_s·N = (5)a",
          "fk − T = (5)a",
          "T = fk",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation of motion applies to the 2,5 kg hanging block?",
        options: [
          "(2,5)(9,8) − T = (2,5)a",
          "T − (2,5)(9,8) = (2,5)a",
          "T = (2,5)(9,8)",
          "(2,5)(9,8) = T·a",
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the magnitude of the acceleration of the 5 kg block?",
        options: ["2,29 m·s⁻²", "3,43 m·s⁻²", "4,90 m·s⁻²", "1,47 m·s⁻²"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "A small hypothetical planet X has a mass of 6,5 × 10²⁰ kg and a radius of 550 km. Calculate the gravitational force (weight) that planet X exerts on a 90 kg rock on this planet's surface.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "F = G·m1·m2/r² = (6,67×10⁻¹¹)(6,5×10²⁰)(90)/(550×10³)² = 12,90 N (12 899 N, i.e. ≈ 12,9 N since this is the weight of the 90 kg rock).",
    marking_notes: "Formula F = Gm1m2/r², correct substitution (r converted to metres: 550 000 m), correct final answer F = 12,90 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the gravitational force between planet X and the rock?",
        options: ["F = G·m1·m2/r²", "F = G·m1·m2/r", "F = G·(m1+m2)/r²", "F = m1·m2/(G·r²)"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is r in metres (converted from 550 km)?",
        options: ["550 000 m", "5 500 m", "55 000 m", "550 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the gravitational force (weight) on the rock?",
        options: ["12,90 N", "1,29 N", "129,0 N", "0,129 N"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (13 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "Ball A is projected vertically upwards at a velocity of 16 m·s⁻¹ from the ground. Ignore the effects of air resistance. Use the ground as zero reference. Calculate the time taken by ball A to return to the ground.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking upward as positive, ball A returns to the same height (Δy = 0): Δy = vi·Δt + (1/2)a·Δt², so 0 = 16Δt + (1/2)(−9,8)Δt² = Δt(16 − 4,9Δt). Since Δt ≠ 0: 16 = 4,9Δt, giving Δt = 3,26 s.",
    marking_notes: "Marking points: formula Δy = vi·Δt + (1/2)a·Δt² (with Δy = 0 for the round trip); correct substitution; correct final answer Δt = 3,26 s.",
    steps: [
      {
        marks: 1,
        description: "Which formula/condition finds the total time for ball A to return to the ground (Δy = 0 for the round trip)?",
        options: [
          "Δy = vi·Δt + (1/2)a·Δt², with Δy = 0",
          "vf = vi + a·Δt, solved for vf = 0",
          "vf² = vi² + 2a·Δy, with vf = 0",
          "Δy = vi·Δt only (ignoring acceleration)"
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the total time Δt for ball A to return to the ground?",
        options: ["3,26 s", "1,63 s", "4,90 s", "1,96 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Sketch a velocity-time graph for ball A. Show the following on the graph: (a) Initial velocity of ball A (b) Time taken to reach the highest point of the motion (c) Time taken to return to the ground.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A single straight line (constant negative gradient, since acceleration is constant) starting at v = 16 m·s⁻¹ (upward positive) at t = 0, crossing the time-axis (v = 0) at t = 1,63 s (the highest point), and continuing down to v = −16 m·s⁻¹ at t = 3,26 s (when ball A returns to the ground).",
    marking_notes: "Marking points: correct straight-line shape with correct initial velocity (16 m·s⁻¹) shown; time to reach the highest point (1,63 s, where the line crosses v = 0) correctly indicated; total time to return to the ground (3,26 s) correctly indicated at the end of the line.",
    marking_points: [
      { marks: 1, description: "correct straight line shape starting at initial velocity 16 m/s", keywords: ["16", "straight line"] },
      { marks: 1, description: "time to reach highest point shown as 1,63 s (where line crosses zero)", keywords: ["1 63", "highest point"] },
      { marks: 1, description: "total time to return to the ground shown as 3,26 s", keywords: ["3 26", "return to the ground"] },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "ONE SECOND after ball A is projected upwards, a second ball, B, is thrown vertically downwards at a velocity of 9 m·s⁻¹ from a balcony 30 m above the ground. Calculate how high above the ground ball A will be at the instant the two balls pass each other.",
    marks: 6, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "Let Δt be the time (measured from ball A's launch) at which they meet. Taking upward as positive and the ground as zero: ball A's position yA = 16Δt − 4,9Δt². Ball B starts 1 s later from 30 m, falling: yB = 30 − 9(Δt−1) − 4,9(Δt−1)². Setting yA = yB and solving gives Δt = 2,24 s, so yA = 16(2,24) − 4,9(2,24)² = 11,25 m.",
    marking_notes: "Marking points: correct position equation for ball A (yA = 16Δt − 4,9Δt²); correct position equation for ball B (yB = 30 − 9(Δt−1) − 4,9(Δt−1)²); equations set equal to solve for the common time; correct final answer yA = 11,25 m (accept the range 11,25–11,31 m, since the memo's alternate elimination method rounds Δt to 1,24 s before back-substituting, giving 11,31 m).",
    steps: [
      {
        marks: 1,
        description: "Which approach finds the height at which the balls pass (upward positive, ground as zero)?",
        options: [
          "Set ball A's position equation equal to ball B's position equation (accounting for B starting 1 s later) and solve for the common time",
          "Add the two balls' initial velocities",
          "Use only ball A's equation of motion with vf = 0",
          "Assume the balls meet at t = 1 s (when B is thrown)",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is ball B's position equation yB, measured from the ground, in terms of Δt (Δt measured from ball A's launch)?",
        options: [
          "yB = 30 − 9(Δt−1) − 4,9(Δt−1)²",
          "yB = 30 − 9Δt − 4,9Δt²",
          "yB = 9(Δt−1) + 4,9(Δt−1)²",
          "yB = 30 + 9(Δt−1) − 4,9(Δt−1)²",
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "How high above the ground is ball A when the two balls pass each other?",
        options: ["11,25 m", "18,69 m", "30,00 m", "6,20 m"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/3-balls-AB.png`,
  },

  // ============ QUESTION 4: MOMENTUM (10 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A bullet of mass 20 g is fired from a stationary rifle of mass 3 kg. Assume that the bullet moves horizontally. Immediately after firing, the rifle recoils (moves back) with a velocity of 1,4 m·s⁻¹. Calculate the speed at which the bullet leaves the rifle.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "By conservation of momentum, with the rifle-bullet system initially at rest: Σpi = Σpf, so 0 = m(rifle)v(rifle) + m(bullet)v(bullet) = (3)(−1,4) + (0,02)v, giving v = 4,2/0,02 = 210 m·s⁻¹.",
    marking_notes: "Marking points: formula Σpi = Σpf (conservation of momentum); correct substitution (rifle mass 3 kg at −1,4 m·s⁻¹, bullet mass 0,02 kg); correct final answer v = 210 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies (rifle-bullet system initially at rest)?",
        options: [
          "Conservation of momentum: Σpi = Σpf",
          "Conservation of mechanical energy",
          "Newton's second law: Fnet = ma",
          "Impulse-momentum theorem with an external force",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the rifle's momentum immediately after firing (mass 3 kg, recoil velocity 1,4 m·s⁻¹)?",
        options: ["−4,2 kg·m·s⁻¹", "4,2 kg·m·s⁻¹", "−2,1 kg·m·s⁻¹", "−1,4 kg·m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the speed at which the bullet leaves the rifle?",
        options: ["210 m·s⁻¹", "70 m·s⁻¹", "0,21 m·s⁻¹", "420 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "The bullet strikes a stationary 5 kg wooden block fixed to a flat, horizontal table. The bullet is brought to rest after travelling a distance of 0,4 m into the block. Calculate the magnitude of the average force exerted by the block on the bullet.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "First find the bullet's deceleration using vf² = vi² + 2aΔx: 0 = (210)² + 2a(0,4), giving a = −55 125 m·s⁻². Then F = ma = (0,02)(55 125) = 1 102,5 N.",
    marking_notes: "Marking points: formula vf² = vi² + 2aΔx to find the deceleration; formula F = ma (or the impulse-momentum theorem FΔt = Δp as an equivalent route); correct final answer F = 1 102,5 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula finds the bullet's deceleration inside the block (vi = 210 m·s⁻¹, vf = 0, Δx = 0,4 m)?",
        options: ["vf² = vi² + 2a·Δx", "vf = vi + a·Δt", "Δx = vi·Δt", "F = ma, assuming a is given"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the bullet's deceleration?",
        options: ["55 125 m·s⁻²", "27 562,5 m·s⁻²", "525 m·s⁻²", "110 250 m·s⁻²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the average force exerted by the block on the bullet (bullet mass 0,02 kg)?",
        options: ["1 102,5 N", "551,25 N", "2 205,0 N", "22,05 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "How does the magnitude of the force calculated in QUESTION 4.2 compare to the magnitude of the force exerted by the bullet on the block? Write down only LARGER THAN, SMALLER THAN or THE SAME.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "The same — by Newton's third law, the force exerted by the block on the bullet and the force exerted by the bullet on the block form an action-reaction pair, equal in magnitude (and opposite in direction).",
    marking_notes: "Accept only 'the same'.",
    marking_points: [{ marks: 1, description: "the same", keywords: ["the same"] }],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (15 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "The track for a motorbike race consists of a straight, horizontal section that is 800 m long. A participant rides at a certain average speed and completes the 800 m course in 75 s. To maintain this speed, a constant driving force of 240 N acts on the motorbike. Calculate the average power developed by the motorbike for this motion.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "v(ave) = Δx/Δt = 800/75 = 10,67 m·s⁻¹. P(ave) = F·v(ave) = (240)(10,67) = 2 560,8 W (2,56 kW).",
    marking_notes: "Marking points: formula P = F·v(ave) (or P = W/Δt as an equivalent route); correct substitution; correct final answer P = 2 560,8 W.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the average power developed?",
        options: ["P(ave) = F·v(ave)", "P(ave) = F/v(ave)", "P(ave) = F·Δt", "P(ave) = F·Δx"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the average power developed by the motorbike?",
        options: ["2 560,8 W", "18 000,0 W", "240,0 W", "32,0 W"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Another person practises on the same motorbike on a track with an incline, riding a distance of 450 m up the incline which has a vertical height of 5 m. The total frictional force acting on the motorbike is 294 N. The combined mass of rider and motorbike is 300 kg. The average driving force on the motorbike as it moves up the incline is 350 N. Consider the motorbike and rider as a single system. Draw a labelled free-body diagram for the motorbike-rider system on the incline.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on the motorbike-rider system, all drawn from a single point: weight w (Fg) vertically down; normal force N perpendicular to the incline surface; driving force FD up the incline (parallel to the slope); friction force f down the incline, opposing motion.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (straight down), normal force (perpendicular to the incline), driving force (up the slope), friction (down the slope, opposing motion). Max 4.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N) drawn perpendicular to the incline surface", keywords: ["normal force", "fn"] },
      { marks: 1, description: "driving force (FD) drawn up the incline", keywords: ["driving force", "fd"] },
      { marks: 1, description: "friction (f/Ff) drawn down the incline, opposing motion", keywords: ["friction", "ff"] },
    ],
    image_url: `${IMG}/5-incline.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "State the WORK-ENERGY theorem in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The net (total) work done on an object by a resultant/net force is equal to the change in the object's kinetic energy.",
    marking_notes: "Must refer to the net/total work done by a resultant/net force being equal to the change in kinetic energy.",
    marking_points: [{ marks: 2, description: "net work done by a resultant/net force equals the change in kinetic energy", keywords: ["net work", "resultant force", "change in", "kinetic energy"] }],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Use energy principles to calculate the speed of the motorbike at the end of the 450 m ride up the incline (starting from rest; driving force 350 N, friction 294 N, mass 300 kg, height gained 5 m).",
    marks: 6, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Using the work-energy theorem including gravity as the net force (or Wnc = ΔEk + ΔEp): W(driving) + W(friction) + W(gravity) = ΔEk. W(driving) = (350)(450) = 157 500 J. W(friction) = (−294)(450) = −132 300 J. W(gravity) = −mgΔh = −(300)(9,8)(5) = −14 700 J. Net work = 157 500 − 132 300 − 14 700 = 10 500 J. So 10 500 = (1/2)(300)(vf² − 0), giving vf = 8,37 m·s⁻¹ (accept the range ≈ 8,34–8,37 m·s⁻¹).",
    marking_notes: "Marking points: correct energy/work equation (Wnet = ΔEk, including the work done by the driving force, friction, and the component of gravity along the incline); correct computation of the net work done (≈ 10 500 J); correct final answer vf ≈ 8,37 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which equation applies to find the final speed (energy principles, incline with height gain)?",
        options: [
          "Wnet = ΔEk (net work by driving force, friction, and gravity equals the change in kinetic energy)",
          "Conservation of momentum",
          "Wnet = ΔEk, ignoring the work done against gravity",
          "F = ma directly, without energy methods",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the net work done on the motorbike-rider system over the 450 m (driving force 350 N, friction 294 N, weight component via height gain of 5 m)?",
        options: ["10 500 J", "157 500 J", "25 200 J", "−132 300 J"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the speed of the motorbike at the end of the 450 m ride?",
        options: ["8,37 m·s⁻¹", "5,92 m·s⁻¹", "70,00 m·s⁻¹", "4,19 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (11 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "Data was obtained during an investigation into the relationship between the different velocities of a moving sound source and the frequencies detected by a stationary listener for each velocity. The effect of wind was ignored. Experiment 1-4 velocities: 0, 10, 20, 30 m·s⁻¹; corresponding detected frequencies: 900, 874, 850, 827 Hz. Write down the dependent variable for this investigation.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The frequency (of the sound) detected by the listener (observer).",
    marking_notes: "Accept only 'frequency (detected by the listener)'.",
    marking_points: [{ marks: 1, description: "frequency detected by the listener", keywords: ["frequency"] }],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "State the Doppler effect in words.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler effect is the apparent change in frequency (or pitch/wavelength) of the sound detected by a listener because the sound source and the listener have different velocities relative to the medium of sound propagation.",
    marking_notes: "Must refer to an apparent change in frequency/pitch due to the relative motion between the source and the observer/listener.",
    marking_points: [{ marks: 2, description: "apparent change in frequency/pitch detected due to relative motion between source and listener", keywords: ["apparent change", "frequency", "relative motion"] }],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "Was the sound source moving TOWARDS or AWAY FROM the listener? Give a reason for the answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Away from the listener. The detected frequency decreases as the source's speed increases (900, 874, 850, 827 Hz), which happens only when the source is moving away from the stationary listener.",
    marking_notes: "Must state 'away from' and a valid reason: the detected frequency decreases (as the source speed increases).",
    marking_points: [
      { marks: 1, description: "away from the listener", keywords: ["away from"] },
      { marks: 1, description: "detected frequency decreases (as speed increases)", keywords: ["frequency decreases", "decreases"] },
    ],
  },
  {
    number: "6", sub_number: "6.1.4",
    text: "Use the information in the table to calculate the speed of sound during the investigation.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "The v = 0 row gives the true (emitted) source frequency fs = 900 Hz. Using the Doppler formula for a source moving away from a stationary listener, fL = v/(v + vs) × fs, with the v = 20 m·s⁻¹ row (fL = 850 Hz): 850 = v/(v + 20) × 900, so 850(v + 20) = 900v, giving 850v + 17 000 = 900v, so 17 000 = 50v, v = 340 m·s⁻¹ (the memo accepts a range of roughly 313–345 m·s⁻¹ across different valid pairings of the data).",
    marking_notes: "Marking points: identifying fs = 900 Hz from the v = 0 row; correct Doppler formula fL = v/(v+vs) × fs for a source moving away; correct substitution and final answer v ≈ 340 m·s⁻¹ (accept the range 313,33–345 m·s⁻¹).",
    steps: [
      {
        marks: 1,
        description: "Which Doppler formula applies (source moving away from a stationary listener)?",
        options: ["fL = v/(v + vs) × fs", "fL = v/(v − vs) × fs", "fL = (v − vs)/v × fs", "fL = v/(v + vs)² × fs"],
        correctIndex: 0,
      },
      {
        marks: 4,
        description: "Using fs = 900 Hz (from the v = 0 row) and the vs = 20 m·s⁻¹ row (fL = 850 Hz), what is the speed of sound v?",
        options: ["340 m·s⁻¹", "360 m·s⁻¹", "300 m·s⁻¹", "17 000 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "The spectral lines of a distant star are shifted towards the longer wavelengths of light. Is the star moving TOWARDS or AWAY FROM the Earth?",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Away from the Earth (a shift to longer wavelengths is a red shift, caused by the source moving away from the observer).",
    marking_notes: "Accept only 'away from (the Earth)'.",
    marking_points: [{ marks: 1, description: "away from the Earth", keywords: ["away from"] }],
  },

  // ============ QUESTION 7: ELECTROSTATICS (13 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "A very small graphite-coated sphere P is rubbed with a cloth. It is found that the sphere acquires a charge of +0,5 muC. Calculate the number of electrons removed from sphere P during the charging process.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "n = Q/e = (0,5×10⁻⁶)/(1,6×10⁻¹⁹) = 3,13×10¹² electrons.",
    marking_notes: "Formula n = Q/e, correct substitution, correct final answer n = 3,13×10¹² electrons.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the number of electrons removed?",
        options: ["n = Q/e", "n = Q × e", "n = e/Q", "n = Q + e"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "How many electrons were removed from sphere P?",
        options: ["3,13×10¹² electrons", "1,60×10⁻¹⁹ electrons", "8,00×10⁻¹³ electrons", "3,13×10⁻¹² electrons"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "The charged sphere P is suspended from a light, inextensible string. Another sphere, R, with a charge of −0,9 muC, on an insulated stand, is brought close to sphere P. As a result sphere P moves to a position where it is 20 cm from sphere R. The system is in equilibrium and the angle between the string and the vertical is 7°. Draw a labelled free-body diagram showing ALL the forces acting on sphere P.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Three forces act on sphere P, all drawn from a single point: weight w vertically down; tension T along the string (up and toward the support, at 7° from the vertical); electric force FE horizontal, directed towards sphere R (attraction, since P is positive and R is negative).",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (down), tension (along the string), electric force (horizontal, towards R, i.e. attraction). Max 3.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "tension (T) drawn along the string", keywords: ["tension"] },
      { marks: 1, description: "electric force (FE) drawn horizontally towards sphere R (attraction)", keywords: ["electric force", "fe", "electrostatic force"] },
    ],
    image_url: `${IMG}/7-P-R-string.png`,
  },
  {
    number: "7", sub_number: "7.3",
    text: "State Coulomb's law in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The magnitude of the electrostatic force exerted by one point charge on another point charge is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.",
    marking_notes: "Must refer to the electrostatic force between two point charges being directly proportional to the product of the charges and inversely proportional to the square of the distance between them.",
    marking_points: [{ marks: 2, description: "force directly proportional to the product of the charges and inversely proportional to the square of the distance between them", keywords: ["directly proportional", "product of the charges", "square of the distance"] }],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Calculate the magnitude of the tension in the string.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "First find the electric force: FE = kQ1Q2/r² = (9×10⁹)(0,5×10⁻⁶)(0,9×10⁻⁶)/(0,2)² = 0,101 N. At equilibrium, resolving the string's tension: T·sin7° = FE (horizontal), so T = 0,101/sin7° = 0,83 N (accept 0,82 N).",
    marking_notes: "Marking points: formula FE = kQ1Q2/r² (giving FE = 0,101 N); formula T = FE/sin7° from resolving forces on sphere P; correct final answer T = 0,83 N (accept 0,82 N).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric force between spheres P and R?",
        options: ["FE = kQ1Q2/r²", "FE = kQ1Q2/r", "FE = k(Q1+Q2)/r²", "FE = Q1Q2/(kr²)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the electric force FE?",
        options: ["0,101 N", "0,0506 N", "0,203 N", "2,025 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Using T·sin7° = FE, what is the magnitude of the tension T?",
        options: ["0,83 N", "0,101 N", "0,72 N", "0,014 N"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: ELECTROSTATICS — FIELD (11 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Two charged particles, Q1 and Q2, are placed 0,4 m apart along a straight line. The charge on Q1 is +2×10⁻⁵ C, and the charge on Q2 is −8×10⁻⁶ C. Point X is 0,25 m east of Q1 (so 0,15 m west of Q2). Calculate the net electric field at point X due to the two charges.",
    marks: 6, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E1 (due to Q1, at r = 0,25 m) = kQ1/r² = (9×10⁹)(2×10⁻⁵)/(0,25)² = 2,88×10⁶ N·C⁻¹, pointing east (away from positive Q1). E2 (due to Q2, at r = 0,15 m) = kQ2/r² = (9×10⁹)(8×10⁻⁶)/(0,15)² = 3,2×10⁶ N·C⁻¹, pointing east (towards negative Q2). Since both fields point east: Enet = E1 + E2 = 2,88×10⁶ + 3,2×10⁶ = 6,08×10⁶ N·C⁻¹ east.",
    marking_notes: "Marking points: formula E = kQ/r² applied to both charges; correct value and direction for E1 (2,88×10⁶ N·C⁻¹ east); correct value and direction for E2 (3,2×10⁶ N·C⁻¹ east); correct final answer Enet = 6,08×10⁶ N·C⁻¹ east.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "F = kQ1Q2/r²", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude and direction of the field at X due to Q1 (r = 0,25 m)?",
        options: ["2,88×10⁶ N·C⁻¹ east", "2,88×10⁶ N·C⁻¹ west", "3,2×10⁶ N·C⁻¹ east", "1,15×10⁶ N·C⁻¹ east"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the net electric field at X (combining the fields due to Q1 and Q2, r = 0,15 m from Q2)?",
        options: ["6,08×10⁶ N·C⁻¹ east", "0,32×10⁶ N·C⁻¹ east", "6,08×10⁶ N·C⁻¹ west", "3,55×10⁶ N·C⁻¹ east"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/8-Q1-X-Q2.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Calculate the electrostatic force that a −2×10⁻⁹ C charge will experience at point X.",
    marks: 4, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = QE = (2×10⁻⁹)(6,08×10⁶) = 1,22×10⁻² N. Since the charge at X is negative, the force is opposite to the (eastward) field direction, i.e. 1,22×10⁻² N to the west.",
    marking_notes: "Marking points: formula F = QE; correct substitution using the net field from 8.1; correct final answer F = 1,22×10⁻² N to the west.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the force on the charge placed at X?",
        options: ["F = QE", "F = Q/E", "F = QE²", "F = kQ/E"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the magnitude and direction of the force on the −2×10⁻⁹ C charge at X?",
        options: ["1,22×10⁻² N to the west", "1,22×10⁻² N to the east", "1,22×10⁻⁴ N to the west", "2,44×10⁻² N to the west"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "The −2×10⁻⁹ C charge is replaced with a charge of −4×10⁻⁹ C at point X. Without any further calculation, determine the magnitude of the force that the −4×10⁻⁹ C charge will experience at point X.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "F = 2,44×10⁻² N. Since F = QE and the field at X is unchanged, doubling the charge (from 2×10⁻⁹ C to 4×10⁻⁹ C) doubles the force (from 1,22×10⁻² N to 2,44×10⁻² N).",
    marking_notes: "Accept only 2,44×10⁻² N (double the answer to 8.2, since F is directly proportional to Q).",
    marking_points: [{ marks: 1, description: "2,44×10⁻² N", keywords: ["2 44"] }],
  },

  // ============ QUESTION 9: ELECTRIC CIRCUITS (14 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A battery with an internal resistance of 1 ohm and an unknown emf (epsilon) is connected in a circuit. An 8 ohm and a 16 ohm resistor are in parallel, in series (via ammeter A1) with a 20 ohm resistor; this combination is in parallel with a branch containing an unknown resistor R in series with ammeter A2; a high-resistance voltmeter V is connected across the battery, and switch S is in the main loop. With switch S closed, the current passing through the 8 ohm resistor is 0,5 A. State Ohm's law in words.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The current in a conductor is directly proportional to the potential difference across the conductor, provided the temperature and all other physical conditions remain constant.",
    marking_notes: "Must refer to current being directly proportional to potential difference across a conductor, at constant temperature (and other physical conditions).",
    marking_points: [{ marks: 2, description: "current directly proportional to potential difference, at constant temperature/physical conditions", keywords: ["directly proportional", "potential difference", "constant temperature"] }],
    image_url: `${IMG}/9-circuit.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "Calculate the reading on ammeter A1 (the current passing through the 8 ohm resistor is 0,5 A).",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V(8Ω) = I(8Ω)×R = (0,5)(8) = 4 V. Since the 8 Ω and 16 Ω resistors are in parallel, V(16Ω) = 4 V too, so I(16Ω) = V/R = 4/16 = 0,25 A. Ammeter A1 reads the total current into that branch: A1 = I(8Ω) + I(16Ω) = 0,5 + 0,25 = 0,75 A.",
    marking_notes: "Marking points: formula V = IR applied to the 8 Ω resistor (giving 4 V, shared across the 16 Ω resistor too); current through the 16 Ω resistor (0,25 A); correct final answer A1 = 0,75 A.",
    steps: [
      {
        marks: 1,
        description: "What is the voltage across the parallel combination of the 8 Ω and 16 Ω resistors?",
        options: ["4 V", "0,5 V", "8 V", "2 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the current through the 16 Ω resistor?",
        options: ["0,25 A", "0,50 A", "0,0625 A", "4,00 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the reading on ammeter A1 (the combined current from both resistors)?",
        options: ["0,75 A", "0,25 A", "0,50 A", "1,00 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "If device R delivers power of 12 W, calculate the reading on ammeter A2.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V across the 20 Ω resistor = I×R = (0,75)(20) = 15 V. Total voltage across that whole branch = V(parallel) + V(20Ω) = 4 + 15 = 19 V. Since the R-A2 branch is in parallel with this branch, it also has 19 V across it. Using P = VI: 12 = (19)(I), giving A2 = I = 0,63 A.",
    marking_notes: "Marking points: correct voltage across the (8||16)+20Ω branch (= 19 V, which is shared with the R branch since they're in parallel); formula P = VI; correct final answer A2 = 0,63 A.",
    steps: [
      {
        marks: 1,
        description: "What is the total voltage across the (8||16 Ω) + 20 Ω branch (= the voltage across the R-A2 branch, since the two are in parallel)?",
        options: ["19 V", "15 V", "4 V", "23 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula relates R's power, the voltage across it, and A2's reading?",
        options: ["P = VI", "P = I²/V", "P = V/I", "P = V + I"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the reading on ammeter A2?",
        options: ["0,63 A", "1,58 A", "0,76 A", "228,00 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "Calculate the reading on the voltmeter when switch S is open.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "With S closed, the total current from the battery is Itot = A1 + A2 = 0,75 + 0,63 = 1,38 A, and the terminal voltage is 19 V. So epsilon = V(terminal) + I(tot)·r = 19 + (1,38)(1) = 20,38 V. With S open, no current can flow anywhere in the circuit, so there is no voltage drop across the internal resistance r, and the voltmeter (connected across the battery) reads the full emf: V = epsilon = 20,38 V.",
    marking_notes: "Marking points: formula epsilon = V(terminal) + I(tot)·r, using the total current (1,38 A) and terminal voltage (19 V) from the S-closed situation, to find epsilon = 20,38 V; recognising that with S open no current flows, so the voltmeter reads the full emf; correct final answer V = 20,38 V.",
    steps: [
      {
        marks: 1,
        description: "What is the total current drawn from the battery while S is closed (A1 + A2)?",
        options: ["1,38 A", "0,75 A", "0,63 A", "2,01 A"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using epsilon = V(terminal) + I(tot)·r with S closed, what is the battery's emf?",
        options: ["20,38 V", "19,00 V", "21,38 V", "18,62 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "With S open (no current flows anywhere), what does the voltmeter read?",
        options: ["20,38 V (the full emf, since there's no drop across r)", "0 V (no current means no reading)", "19,00 V (unchanged from before)", "1,38 V"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 10: ELECTRODYNAMICS (11 marks) ============

  {
    number: "10", sub_number: "10.1.1",
    text: "A teacher demonstrates how current can be obtained using a bar magnet, a coil and a galvanometer, moving the bar magnet up and down near the coil. Briefly describe how the magnet must be moved in order to obtain a LARGE deflection on the galvanometer.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Move the magnet quickly (in and out of/up and down near the coil) — a faster rate of change of magnetic flux through the coil induces a larger emf (and hence a larger current/deflection).",
    marking_notes: "Must refer to moving the magnet faster/quickly (to increase the rate of change of flux).",
    marking_points: [{ marks: 2, description: "move the magnet quickly/fast (increase the speed of relative motion)", keywords: ["quickly", "fast", "faster"] }],
    image_url: `${IMG}/10-devices-AB.png`,
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "The two devices, A and B, both operate on the principle described in QUESTION 10.1.1 above. Write down the name of the principle.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Electromagnetic induction.",
    marking_notes: "Accept only 'electromagnetic induction'.",
    marking_points: [{ marks: 1, description: "electromagnetic induction", keywords: ["electromagnetic induction"] }],
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "Write down the name of part X in device A (the split-ring contact connecting the rotating coil to the external circuit/output).",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Commutator (split-ring commutator/slip rings).",
    marking_notes: "Accept 'commutator' or 'split rings/slip rings'.",
    marking_points: [{ marks: 1, description: "commutator / split rings", keywords: ["commutator", "split rings", "slip rings"] }],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "A 220 V, AC voltage is supplied from a wall socket to an electric kettle of resistance 40,33 ohm. Wall sockets provide rms voltages and currents. Calculate the electrical energy consumed by the kettle per second.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P(ave) = V(rms)²/R = (220)²/40,33 = 1 200,10 W. Since energy consumed per second (in joules) equals the power (in watts), the kettle consumes 1 200,10 J of electrical energy each second.",
    marking_notes: "Marking points: formula P = V(rms)²/R; correct substitution; correct final answer P ≈ 1 200,10 W (= 1 200,10 J per second).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the average power (= energy per second) consumed by the kettle?",
        options: ["P(ave) = V(rms)²/R", "P(ave) = V(rms)/R", "P(ave) = V(rms)×R", "P(ave) = R/V(rms)²"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the electrical energy consumed by the kettle per second?",
        options: ["1 200,10 J", "5,46 J", "8 866,60 J", "48 400,00 J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Calculate the maximum (peak) current through the kettle.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "I(rms) = V(rms)/R = 220/40,33 = 5,455 A. I(max) = √2 × I(rms) = √2 × 5,455 = 7,71 A.",
    marking_notes: "Marking points: formula I(rms) = V(rms)/R (giving 5,455 A); formula I(max) = √2 × I(rms); correct final answer I(max) = 7,71 A.",
    steps: [
      {
        marks: 1,
        description: "What is I(rms), the rms current through the kettle?",
        options: ["5,455 A", "220,00 A", "40,33 A", "0,183 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Using I(max) = √2 × I(rms), what is the maximum (peak) current?",
        options: ["7,71 A", "5,46 A", "3,86 A", "10,91 A"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 11: PHOTOELECTRIC EFFECT (13 marks) ============

  {
    number: "11", sub_number: "11.1",
    text: "In an experiment to demonstrate the photoelectric effect, light of different wavelengths was shone onto a metal surface of a photoelectric cell. The maximum kinetic energy of the emitted electrons was determined for the various wavelengths. What is meant by the term photoelectric effect?",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "It is the process whereby electrons are ejected from a metal surface when light (of suitable frequency) is incident on it.",
    marking_notes: "Must refer to electrons being ejected from a metal surface when light of (suitable) frequency is incident on it.",
    marking_points: [{ marks: 2, description: "electrons ejected from a metal surface when light (of suitable frequency) is incident on it", keywords: ["electrons are ejected", "metal surface", "incident"] }],
  },
  {
    number: "11", sub_number: "11.2",
    text: "Draw a graph of Ek(max) (y-axis) versus 1/lambda (x-axis) using the table of values: 1/lambda (×10⁶ m⁻¹): 5,00; 3,30; 2,50; 2,00 corresponding to Ek(max) (×10⁻¹⁹ J): 6,60; 3,30; 1,70; 0,70.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "A straight line of best fit through the four plotted points (5,00;6,60), (3,30;3,30), (2,50;1,70), (2,00;0,70), extrapolated down to cross the x-axis at approximately 1/lambda ≈ 1,6×10⁶ m⁻¹ (the threshold value).",
    marking_notes: "Marking points: all four points plotted correctly; a straight line of best fit drawn through the points; the line extrapolated (dashed) to cross the x-axis.",
    marking_points: [
      { marks: 1, description: "all four data points plotted correctly", keywords: ["points plotted", "plotted correctly"] },
      { marks: 1, description: "straight line of best fit through the points", keywords: ["straight line", "best fit"] },
      { marks: 1, description: "line extrapolated to cross the x-axis", keywords: ["extrapolated", "x-axis"] },
    ],
  },
  {
    number: "11", sub_number: "11.3.1",
    text: "Use the graph to determine the threshold frequency of the metal in the photoelectric cell.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Extrapolating the graph to the x-axis (where Ek(max) = 0) gives a threshold value of 1/lambda₀ ≈ 1,6×10⁶ m⁻¹. Using c = f·lambda (so f = c/lambda = c×(1/lambda)): f₀ = (3×10⁸)(1,6×10⁶) = 4,8×10¹⁴ Hz.",
    marking_notes: "Marking points: reading the x-intercept from the graph (1/lambda₀ ≈ 1,6×10⁶ m⁻¹); formula f₀ = c/lambda₀ = c×(1/lambda₀); correct final answer f₀ = 4,8×10¹⁴ Hz (accept the range 4,8×10¹⁴–5,1×10¹⁴ Hz).",
    steps: [
      {
        marks: 1,
        description: "Which formula converts the graph's x-intercept (1/lambda₀) into the threshold frequency f₀?",
        options: ["f₀ = c × (1/lambda₀)", "f₀ = c / (1/lambda₀)", "f₀ = h × (1/lambda₀)", "f₀ = (1/lambda₀) / c"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "Using the graph's x-intercept of 1/lambda₀ ≈ 1,6×10⁶ m⁻¹, what is the threshold frequency f₀?",
        options: ["4,8×10¹⁴ Hz", "1,6×10⁶ Hz", "1,88×10⁻⁷ Hz", "4,8×10⁻¹⁴ Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "11", sub_number: "11.3.2",
    text: "Use the graph to determine Planck's constant.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "From Ek(max) = hf − W0 = hc(1/lambda) − W0, the gradient of the Ek(max) vs 1/lambda graph equals hc. Reading the gradient from the graph (e.g. Δy/Δx between two points on the line) and dividing by c = 3×10⁸ m·s⁻¹ gives h ≈ 6,6×10⁻³⁴ J·s (the memo accepts a range of roughly 6,47×10⁻³⁴–6,66×10⁻³⁴ J·s depending on which two graph points are used).",
    marking_notes: "Marking points: recognising the gradient of the graph equals hc; formula h = gradient/c; correct final answer h ≈ 6,6×10⁻³⁴ J·s (accept the range 6,47×10⁻³⁴–6,66×10⁻³⁴ J·s).",
    steps: [
      {
        marks: 1,
        description: "What does the gradient of the Ek(max) vs 1/lambda graph represent?",
        options: ["hc (Planck's constant times the speed of light)", "h (Planck's constant) directly", "The work function W0 directly", "1/h"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "Using the graph's gradient and h = gradient/c, what is Planck's constant?",
        options: ["6,6×10⁻³⁴ J·s", "1,98×10⁻²⁵ J·s", "2,2×10⁻⁴² J·s", "3,0×10⁸ J·s"],
        correctIndex: 0,
      },
    ],
  },
];
