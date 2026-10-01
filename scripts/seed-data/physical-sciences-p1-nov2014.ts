// Real DBE past paper: Physical Sciences (Physics) P1, November 2014, National
// (English).
// Source PDFs: .scratch_pdfs/qp2014.pdf (question paper, 22 pages — cover
// confirms "PHYSICAL SCIENCES: PHYSICS (P1)", "NOVEMBER 2014", "MARKS: 150",
// "TIME: 3 hours", "This question paper consists of 18 pages, 3 data sheets
// and 1 graph sheet") and .scratch_pdfs/memo2014.pdf (matching memorandum,
// 20 pages, "MARKS/PUNTE: 150"). Both PDFs were rendered to page images and
// read visually (broken/garbled text layer, common for DBE PDF mirrors).
// Every question number and mark allocation on the 18 content pages of the
// QP was cross-checked against the memo's checkmarks; no stray or mismatched
// pages were found. All 150 marks are included here.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// Question totals cross-checked question-by-question against the memo's
// bracketed totals: Q1=20, Q2=12, Q3=17, Q4=12, Q5=18, Q6=11, Q7=19, Q8=22,
// Q9=8, Q10=11 (sum = 150).
//
// This paper reuses every topic already defined by the Nov 2025 P1 dataset
// (scripts/seed-data/physical-sciences-p1-nov2025.ts) — no new CAPS topic
// appears in this paper that wasn't already covered by that one, so the
// `topics` array below is identical to that file's (topics are upserted by
// key in scripts/seed.ts, so redeclaring them here is safe and required
// since this file is a standalone dataset). Question 1.6 (electron
// transitions / emission-spectrum wavelengths) is slotted under
// "photoelectric-effect" (the closest existing topic, covering atomic
// spectra under Matter and Materials), matching how 2024's Q10.3.1 (emission
// spectrum) was classified.
//
// Grading format: per the repo's established convention, calculation
// questions (2.3, 3.2, 3.3, 4.1, 4.3, 5.1.3, 5.2.1, 5.2.2, 6.1.3, 7.2, 7.5,
// 7.7, 8.1.4, 8.2.1, 8.2.2, 8.2.3, 9.4.2, 10.2) use `steps` instead of
// `marking_points`. Most non-computational recall/short-answer parts (define
// a term, state a law in words, name/identify, yes/no, towards/away, choose
// a word) were ALSO converted to `steps` (single- or multi-step MCQ with
// plausible distractor phrasings), matching this app's majority-MCQ
// conversion pattern. `marking_points` is reserved for genuinely open-ended
// items that don't collapse into a clean multiple-choice pick: free-body
// diagrams (2.2, 7.4), sketch/plot graphs (3.4, 8.1.2), the electric field
// pattern sketch (7.3), and multi-clause chained reasoning (4.5, 8.2.5,
// 10.4). Question 1's ten MCQs use `marking_points` with a single-letter
// keyword, matching the exact pattern 2024/2025 use for their own Q1 (the
// grader's keyword matcher special-cases short 1-2-character keywords to
// require the letter be the first word of the answer).
//
// Distractors for calculation steps are chosen to trap specific, real
// physics errors (wrong formula, sign flip, wrong substituted value,
// forgetting a trig factor, inverting a formula, confusing two objects'
// values) rather than arbitrary wrong numbers.
//
// Diagrams: all diagrams that carry information needed to answer a question
// (graphs to read values from, circuit diagrams, charge/force diagrams,
// motion-graph setups) were cropped from 220dpi page renders into
// public/question-images/physics-2014-p1/. The purely decorative
// cover/instructions pages and the blank data sheets/graph sheet at the end
// of the QP (pages 19-22) carry no answerable content and were skipped.
//
// FLAG for review: none. The memo was transcribed faithfully throughout;
// no physically questionable approved answers or illegible/defective QP
// pages were found in this paper.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2014-p1";

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
  year: 2014,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "http://maimelatct.com/wp-content/uploads/2014/02/physical-sciences-p1-nov-2014-eng1.pdf" as string | null,
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
    text: "Which ONE of the following physical quantities is a measure of the inertia of a body? (A) Mass (B) Energy (C) Velocity (D) Acceleration",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "A — Mass is the measure of an object's inertia (its resistance to a change in its state of motion).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The magnitude of the gravitational force exerted by one body on another body is F. When the distance between the centres of the two bodies is doubled, the magnitude of the gravitational force, in terms of F, will now be ... (A) ¼F (B) ½F (C) 2F (D) 4F",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "A — ¼F. Since F = GMm/r², doubling r reduces the force by a factor of (½)² = ¼.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "An object is thrown vertically upwards. Which ONE of the following regarding the object's velocity and acceleration at the highest point of its motion is CORRECT? Ignore the effects of friction. (A) Velocity zero, acceleration zero (B) Velocity zero, acceleration upwards (C) Velocity maximum, acceleration zero (D) Velocity zero, acceleration downwards",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "D — Velocity is zero at the highest point, but acceleration remains 9,8 m·s⁻² downwards (gravity never stops acting, even when the object is momentarily at rest).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "An object of mass m moving at velocity v collides head-on with an object of mass 2m moving in the opposite direction at velocity v. Immediately after the collision the smaller mass moves at velocity v in the opposite direction and the larger mass is brought to rest. Ignore the effects of friction. Which ONE of the following is CORRECT regarding momentum and mechanical energy in this collision? (A) Momentum conserved, mechanical energy conserved (B) Momentum not conserved, mechanical energy conserved (C) Momentum conserved, mechanical energy not conserved (D) Momentum not conserved, mechanical energy not conserved",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "C — Momentum is conserved (total momentum before = total momentum after, as in any collision with no external horizontal forces), but mechanical energy is not conserved: kinetic energy before is 1,5mv², kinetic energy after is only 0,5mv², so energy was lost (an inelastic-type collision).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.4-collision-diagram.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "Two balls, P and Q, are dropped simultaneously from the same height. Ball P has TWICE the mass of ball Q. Ignore the effects of air friction. Just before the balls hit the ground, the kinetic energy of ball P is x. The kinetic energy of ball Q, in terms of x, will be ... (A) ¼x (B) ½x (C) x (D) 2x",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "B — ½x. Both balls fall the same height h, so Ek = mgh for each; since Q has half the mass of P, Q's kinetic energy is half of P's.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "The diagram below shows the electron transitions P, Q, R and S between different energy levels in an atom (E0 lowest, E3 highest; P and Q both drop/rise between E1 and E0; R drops from E3 to E2; S drops from E2 to E1). Which ONE of the transitions will result in an emission of radiation with the longest wavelength?",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "C — the option corresponding to transition R (E3 to E2), the smallest energy gap shown, which (since E = hc/λ) corresponds to the longest wavelength of emitted radiation.",
    marking_notes: "Accept 'C' (also accept the transition label 'R' itself, since the QP labels the diagram's transitions P/Q/R/S rather than A/B/C/D and option C corresponds to transition R).",
    marking_points: [{ marks: 2, description: "C (transition R)", keywords: ["c"] }],
    image_url: `${IMG}/1.6-energy-levels.png`,
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two charges of +2 nC and -2 nC are located on a straight line. S and T are two points that lie on the same straight line, with S between the two charges (closer to the -2 nC charge) and T beyond the -2 nC charge (closer to it than to the +2 nC charge). Which ONE of the following correctly represents the directions of the RESULTANT electric fields at S and at T? (A) S: Right, T: Left (B) S: Left, T: Left (C) S: Right, T: Right (D) S: Left, T: Right",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "A — At S, the field from the +2 nC charge (pointing away from it) and the field from the -2 nC charge (pointing towards it) both point right, so the resultant at S is to the right. At T, which is closer to the -2 nC charge than the +2 nC charge, the leftward field towards the negative charge dominates, so the resultant at T is to the left.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.7-charge-line.png`,
  },
  {
    number: "1", sub_number: "1.8",
    text: "Three light bulbs, X, Y and Z with resistances R, 2R and R respectively, are connected in parallel with ammeters A1, A2, A3 in series with each, and ammeter A in the main circuit; the battery has negligible internal resistance. When switch S is closed, all the bulbs light up and ammeter A reads 2,5 A. Which ONE of the following correctly describes the readings on the ammeters (in amperes) when bulb Z burns out? (A) A1=1,25; A2=1,25; A3=0; A=2,5 (B) A1=1,6; A2=0,8; A3=0,1; A=2,5 (C) A1=0,75; A2=0,75; A3=0; A=1,5 (D) A1=1; A2=0,5; A3=0; A=1,5",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "D — When Z (resistance R) burns out (open circuit), only X (R) and Y (2R) remain in parallel across the same voltage; since X has half the resistance of Y, X carries twice Y's current, giving A1=1, A2=0,5 and a new, smaller total A=1,5 A, with A3=0.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.8-circuit-bulbs.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "The coils of an AC generator make one complete rotation. The resulting graph for the output emf versus time is a sine curve, reaching its first maximum at point B. The position B on the graph is obtained when the plane of the coil is at an angle of ... to the magnetic field. (A) 0° (B) 60° (C) 90° (D) 120°",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "A — 0°. The emf is maximum when the plane of the coil is parallel to the magnetic field (0° to the field), since the coil's sides are then moving perpendicular to the field and cutting field lines at the maximum rate.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.9-emf-graph.png`,
  },
  {
    number: "1", sub_number: "1.10",
    text: "A learner makes the observations below after conducting an experiment using a photocell with frequencies of the incident light being above the threshold frequency (cut-off frequency): (i) The photocurrent increases as the intensity of the incident light increases. (ii) The ammeter in the circuit registers a current immediately after the incident light is radiated on the cathode. (iii) The photocurrent increases as the frequency of the incident light increases. Which of the observation(s) is/are CORRECT? (A) (i) only (B) (ii) only (C) (i) and (ii) only (D) (ii) and (iii) only",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C — (i) and (ii) only. Photocurrent depends on light intensity (more photons eject more electrons per second), and electron emission is instantaneous once light above the threshold frequency strikes the cathode. Statement (iii) is false — photocurrent does NOT increase with frequency above the threshold (frequency instead affects the ejected electrons' maximum kinetic energy).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (12 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "Two blocks of masses 20 kg and 5 kg respectively are connected by a light inextensible string, P. A second light inextensible string, Q, attached to the 5 kg block, runs over a light frictionless pulley. A constant horizontal force of 250 N pulls the second string, as shown in the diagram. The magnitudes of the tensions in P and Q are T1 and T2 respectively. Ignore the effects of air friction. State Newton's Second Law of Motion in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When a resultant (net) force acts on an object, the object will accelerate in the direction of the force. This acceleration is directly proportional to the force and inversely proportional to the mass of the object.",
    marking_notes: "Accept the equivalent momentum-based form: the net force acting on an object is equal to the rate of change of momentum of the object (in the direction of the force).",
    image_url: `${IMG}/2-pulley-setup.png`,
    steps: [
      {
        marks: 2,
        description: "Which statement is Newton's Second Law of Motion?",
        options: [
          "When a resultant (net) force acts on an object, the object will accelerate in the direction of the force; this acceleration is directly proportional to the force and inversely proportional to the mass of the object",
          "A body will remain in its state of rest or motion at constant velocity unless a non-zero resultant force acts on it",
          "When body A exerts a force on body B, body B simultaneously exerts an oppositely directed force of equal magnitude on body A",
          "Every point charge exerts an electrostatic force on every other point charge directly proportional to the product of their charges and inversely proportional to the square of the distance between them",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram indicating ALL the forces acting on the 5 kg block.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Three forces act on the 5 kg block, all drawn from a single point: T2 (the tension in string Q) pointing up; T1 (the tension in string P) pointing down; and w (the weight of the block) pointing down.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: T2 up, T1 down, w (weight) down. Max 3.",
    marking_points: [
      { marks: 1, description: "T2 drawn upward", keywords: ["t2"] },
      { marks: 1, description: "T1 drawn downward", keywords: ["t1"] },
      { marks: 1, description: "w (weight/Fg) drawn downward", keywords: ["weight", "w"] },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Calculate the magnitude of the tension T1 in string P.",
    marks: 6, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For the 5 kg block: T2 + (-mg) + (-T1) = ma, so 250 - (5)(9,8) - T1 = 5a ... (1). For the 20 kg block: T1 + (-mg) = ma, so T1 - (20)(9,8) = 20a ... (2). Solving (1) and (2) simultaneously gives a = 0,2 m·s⁻² (upwards) and T1 = 200 N.",
    marking_notes: "Marking points: correct equation of motion for the 5 kg block (1); correct equation of motion for the 20 kg block (1); correct final answer T1 = 200 N (4, for the simultaneous solve).",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to the 5 kg block (T2 = 250 N pulling up, weight down, T1 down)?",
        options: [
          "250 - (5)(9,8) - T1 = 5a",
          "250 + (5)(9,8) - T1 = 5a",
          "T1 - 250 - (5)(9,8) = 5a",
          "250 - T1 = 5a (ignoring weight)",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation of motion applies to the 20 kg block (T1 up, weight down)?",
        options: [
          "T1 - (20)(9,8) = 20a",
          "T1 + (20)(9,8) = 20a",
          "(20)(9,8) - T1 = -20a",
          "T1 = (20)(9,8)",
        ],
        correctIndex: 0,
      },
      {
        marks: 4,
        description: "What is T1 (solving the two equations simultaneously)?",
        options: ["200 N", "196 N", "201 N", "180 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "When the 250 N force is replaced by a sharp pull on the string, one of the two strings breaks. Which ONE of the two strings, P or Q, will break?",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Evaluation",
    model_answer: "String Q. A sharp (sudden, very short-duration) pull produces a very large force needed to accelerate the whole system quickly; string Q must supply this entire large force plus support the tension transmitted through P, so it experiences the greater tension and breaks first.",
    marking_notes: "Accept only 'Q'.",
    steps: [
      {
        marks: 1,
        description: "Which string breaks?",
        options: ["Q", "P", "Both P and Q break simultaneously", "Neither string breaks"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (17 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A ball, A, is thrown vertically upward from a height h, with a speed of 15 m·s⁻¹. AT THE SAME INSTANT, a second identical ball, B, is dropped from the same height as ball A. Both balls undergo free fall and eventually hit the ground. Explain the term free fall.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Motion (under the influence of gravity/weight/gravitational force only), where there are no other forces (such as friction) acting.",
    marking_notes: "Must refer to motion under the influence of gravity/weight only, with no other forces (e.g. friction/air resistance) acting.",
    image_url: `${IMG}/3-balls-AB.png`,
    steps: [
      {
        marks: 2,
        description: "What is free fall?",
        options: [
          "Motion under the influence of gravity/weight only, with no other forces (such as friction) acting",
          "Motion at a constant velocity, with air resistance balancing weight",
          "Motion under the influence of an applied force only, ignoring gravity",
          "Motion where both gravity and air resistance act equally on the object",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the time it takes for ball A to return to its starting point.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking upward as positive: Δy = viΔt + ½aΔt², so 0 = 15Δt + ½(-9,8)Δt², giving Δt = 3,06 s.",
    marking_notes: "Marking points: correct formula Δy = viΔt + ½aΔt² (with Δy = 0 since it returns to its starting point) (1); correct final answer Δt = 3,06 s (3).",
    steps: [
      {
        marks: 1,
        description: "Which formula finds the time for ball A to return to its starting point (Δy = 0)?",
        options: ["Δy = viΔt + ½aΔt²", "vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the time for ball A to return to its starting point?",
        options: ["3,06 s", "1,53 s", "2,29 s", "6,12 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Calculate the distance between ball A and ball B when ball A is at its maximum height.",
    marks: 7, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "When A is at its highest point (at t = 1,53 s, half of 3,06 s), A has risen ΔyA = 11,48 m above the start. In that same 1,53 s, B (dropped from rest at the same instant) has fallen ΔyB = 0 + ½(-9,8)(1,53)² = 11,47 m below the start. The distance between them is ΔyA + ΔyB = 11,48 + 11,47 = 22,95 m.",
    marking_notes: "Marking points: correct approach — find each ball's displacement from the start at the moment A is at its highest point, then add them (1); correct value for ΔyA = 11,48 m (2); correct value for ΔyB = 11,47 m downward (2); correct final answer, distance = 22,95 m (2).",
    steps: [
      {
        marks: 1,
        description: "Which approach finds the distance between A and B when A is at its highest point?",
        options: [
          "Find ball A's displacement and ball B's displacement from the starting point at that instant, and add them",
          "Use the final velocities of both balls just before they hit the ground",
          "Find only ball A's maximum height and ignore ball B",
          "Multiply ball A's maximum height by 2",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is ΔyA, ball A's displacement above the start when it is at its highest point?",
        options: ["11,48 m", "15,00 m", "7,35 m", "22,95 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is ΔyB, ball B's displacement below the start at that same instant (free fall for 1,53 s)?",
        options: ["11,47 m downward", "15,00 m downward", "22,95 m downward", "7,35 m downward"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the distance between ball A and ball B at that instant?",
        options: ["22,95 m", "11,48 m", "11,47 m", "34,42 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Sketch a velocity-time graph for the motion of ball A from the time it is projected until it hits the ground. Clearly indicate on your graph: the initial velocity, the time it takes to reach its maximum height, and the time it takes to return to its starting point.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A single straight line with a constant negative gradient (taking up as positive): starts at v = 15 m·s⁻¹ at t = 0, crosses the time-axis at t = 1,53 s (maximum height, v = 0), reaches v = -15 m·s⁻¹ at t = 3,06 s (back at the starting point), and the straight line continues beyond t = 3,06 s.",
    marking_notes: "Marking points: graph starts at the correct initial velocity (15 m·s⁻¹) shown (1); time for maximum height shown (1,53 s) (1); time for return to the starting point shown (3,06 s) (1); shape — a single straight line extending beyond 3,06 s (1).",
    marking_points: [
      { marks: 1, description: "graph starts at the correct initial velocity (15 m/s)", keywords: ["15"] },
      { marks: 1, description: "time for maximum height shown (1,53 s)", keywords: ["1 53"] },
      { marks: 1, description: "time for return shown (3,06 s)", keywords: ["3 06"] },
      { marks: 1, description: "shape: straight line extending beyond 3,06 s", keywords: ["straight line"] },
    ],
  },

  // ============ QUESTION 4: MOMENTUM AND IMPULSE (12 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Dancers have to learn many skills, including how to land correctly. A dancer of mass 50 kg leaps into the air and lands feet first on the ground. She lands on the ground with a velocity of 5 m·s⁻¹. As she lands, she bends her knees and comes to a complete stop in 0,2 seconds. Calculate the momentum with which the dancer reaches the ground.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "p = mv = 50(5) = 250 kg·m·s⁻¹ (downward).",
    marking_notes: "Marking points: formula p = mv (1); correct final answer 250 kg·m·s⁻¹ downward (2).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the dancer's momentum as she reaches the ground?",
        options: ["p = mv", "p = ½mv²", "p = mv²", "p = m/v"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the dancer's momentum?",
        options: ["250 kg·m·s⁻¹", "50 kg·m·s⁻¹", "10 kg·m·s⁻¹", "500 kg·m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Define the term impulse of a force.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "The product of the (net) force and the time interval during which the force acts.",
    marking_notes: "Must refer to the product of the (net) force and the time interval during which it acts.",
    steps: [
      {
        marks: 2,
        description: "What is the impulse of a force?",
        options: [
          "The product of the (net) force and the time interval during which the force acts",
          "The product of mass and velocity",
          "The rate of change of momentum per unit time",
          "The product of the force and the displacement of the object",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Calculate the magnitude of the net force acting on the dancer as she lands.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Δp = FnetΔt, so 0 - 250 = Fnet(0,2), giving Fnet = -1 250 N, i.e. 1 250 N (upward).",
    marking_notes: "Marking points: formula Δp = FnetΔt (1); correct final answer 1 250 N (2).",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the dancer's change in momentum, the net force and the stopping time?",
        options: ["Δp = FnetΔt", "Δp = Fnet/Δt", "Fnet = Δp × Δt", "Δp = Fnet + Δt"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the net force acting on the dancer?",
        options: ["1 250 N", "250 N", "50 N", "1 000 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Assume that the dancer performs the same jump as before but lands without bending her knees. Will the force now be GREATER THAN, SMALLER THAN or EQUAL TO the force calculated in QUESTION 4.3?",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Greater than.",
    marking_notes: "Accept only 'greater than'.",
    steps: [
      {
        marks: 1,
        description: "Will the force be greater than, smaller than, or equal to the force in 4.3?",
        options: ["Greater than", "Smaller than", "Equal to", "Cannot be determined"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Give a reason for the answer to QUESTION 4.4.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "For the same momentum change, the stopping time (contact time) will be smaller (shorter, since she doesn't bend her knees to extend it); therefore the (upward) force exerted on her is greater.",
    marking_notes: "Marking points: refers to the same momentum change occurring (1); the stopping/contact time being smaller (1); therefore the force being greater (1).",
    marking_points: [
      { marks: 1, description: "for the same momentum change", keywords: ["momentum change", "same change"] },
      { marks: 1, description: "the stopping/contact time will be smaller", keywords: ["stopping time", "contact time", "smaller"] },
      { marks: 1, description: "therefore the force is greater", keywords: ["force", "greater"] },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (18 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "The diagram below shows a track, ABC. The curved section, AB, is frictionless. The rough horizontal section, BC, is 8 m long. An object of mass 10 kg is released from point A, which is 4 m above the ground. It slides down the track and comes to rest at point C. State the principle of conservation of mechanical energy in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "In an isolated (closed) system, the total mechanical energy is conserved/remains constant.",
    marking_notes: "Must refer to the total mechanical energy of an isolated/closed system remaining constant (or an equivalent accepted form, e.g. in the absence of a non-conservative force / friction).",
    image_url: `${IMG}/5.1-track-ABC.png`,
    steps: [
      {
        marks: 2,
        description: "What is the principle of conservation of mechanical energy?",
        options: [
          "In an isolated/closed system, the total mechanical energy is conserved/remains constant",
          "In any system, the total kinetic energy is always conserved, with or without friction",
          "The total momentum of a system is always conserved",
          "Energy can be created or destroyed, but momentum is always conserved",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Is mechanical energy conserved as the object slides from A to C? Write only YES or NO.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "No (mechanical energy is lost to friction along the rough section BC).",
    marking_notes: "Accept only 'No'.",
    steps: [
      {
        marks: 1,
        description: "Is mechanical energy conserved from A to C?",
        options: ["No", "Yes", "Only along AB", "Cannot be determined"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Using ENERGY PRINCIPLES only, calculate the magnitude of the frictional force exerted on the object as it moves along BC.",
    marks: 6, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Along the frictionless AB: (Ep + Ek)A = (Ep + Ek)B, so (10)(9,8)(4) + 0 = 0 + ½(10)vf², giving vf = 8,85 m·s⁻¹ at B. Along BC: Wnc = ΔK + ΔU, so fΔx cosθ = ΔK (ΔU = 0 on the horizontal section), f(8)cos180° = ½(10)(0 - 8,85²), giving f = 48,95 N.",
    marking_notes: "Marking points: correct energy equation along AB (1); correct value of the speed at B, 8,85 m·s⁻¹ (2); correct work-energy equation along BC (1); correct final answer f = 48,95 N (accept 49 N) (2).",
    steps: [
      {
        marks: 1,
        description: "Which principle finds the object's speed at B (AB is frictionless)?",
        options: [
          "(Ep + Ek)A = (Ep + Ek)B",
          "Conservation of momentum",
          "Wnc = ΔK, ignoring potential energy",
          "F = ma directly, without using energy",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the object's speed at B?",
        options: ["8,85 m·s⁻¹", "4,00 m·s⁻¹", "9,80 m·s⁻¹", "19,60 m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation applies along BC (horizontal, so ΔEp = 0) to find the friction force?",
        options: ["fΔx cosθ = ΔK", "fΔx cosθ = ΔK + ΔEp (with ΔEp ≠ 0)", "f = ma, without using Δx", "fΔx = ΔEp only"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the frictional force along BC?",
        options: ["48,95 N", "98,00 N", "39,20 N", "19,60 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "A motor pulls a crate of mass 300 kg with a constant force by means of a light inextensible rope running over a light frictionless pulley, up an inclined plane at 25° to the horizontal. The coefficient of kinetic friction between the crate and the surface of the inclined plane is 0,19. Calculate the magnitude of the frictional force acting between the crate and the surface of the inclined plane.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "fk = μkN = μk·mg·cosθ = (0,19)(300)(9,8)cos25° = 506,26 N.",
    marking_notes: "Marking points: formula fk = μkN = μkmgcosθ (1); correct final answer 506,26 N (2).",
    image_url: `${IMG}/5.2-incline-motor.png`,
    steps: [
      {
        marks: 1,
        description: "Which formula gives the kinetic friction force on the incline?",
        options: ["fk = μkmgcosθ", "fk = μkmgsinθ", "fk = μkmg (no angle)", "fk = mgcosθ (no μk)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the frictional force?",
        options: ["506,26 N", "235,95 N", "558,60 N", "2 664,54 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "The crate moves up the incline at a constant speed of 0,5 m·s⁻¹. Calculate the average power delivered by the motor while pulling the crate up the incline.",
    marks: 6, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Fnet = 0 (constant speed): Fapp - Fg sinθ - f = 0, so Fapp - (300)(9,8)sin25° - 506,26 = 0, giving Fapp = 1 748,76 N. Pave = Fvave = (1 748,76)(0,5) = 874,38 W.",
    marking_notes: "Marking points: correct Fnet = 0 equation for the crate moving at constant velocity up the incline (1); correct value of Fapp = 1 748,76 N (2); formula Pave = Fvave (1); correct final answer Pave = 874,38 W (2).",
    steps: [
      {
        marks: 1,
        description: "Which equation applies to the crate moving up the incline at constant speed (Fnet = 0)?",
        options: [
          "Fapp - Fg sinθ - f = 0",
          "Fapp - Fg cosθ - f = 0",
          "Fapp + Fg sinθ + f = ma (a ≠ 0)",
          "Fapp = f only, ignoring gravity",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Fapp, the applied force from the motor's rope?",
        options: ["1 748,76 N", "1 242,50 N", "506,26 N", "736,26 N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula gives the average power delivered?",
        options: ["Pave = Fvave", "Pave = F/vave", "Pave = Fv²ave", "Pave = F + vave"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the average power delivered by the motor?",
        options: ["874,38 W", "1 748,76 W", "253,13 W", "437,19 W"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (11 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "The siren of a stationary ambulance emits a note of frequency 1 130 Hz. When the ambulance moves at a constant speed, a stationary observer detects a frequency that is 70 Hz higher than that emitted by the siren. State the Doppler effect in words.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "An (apparent) change in observed/detected frequency (pitch)/wavelength, as a result of the relative motion between a source and an observer (listener).",
    marking_notes: "Must refer to an apparent change in observed frequency/wavelength due to the relative motion between a source and an observer.",
    steps: [
      {
        marks: 2,
        description: "What is the Doppler effect?",
        options: [
          "An apparent change in observed/detected frequency (or wavelength) as a result of the relative motion between a source and an observer",
          "A permanent change in the actual frequency emitted by a source",
          "The bending of waves around an obstacle in their path",
          "The interference of two waves of slightly different frequency",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Is the ambulance moving towards or away from the observer? Give a reason for the answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Towards (the observer). The observed/detected frequency is greater than the actual (emitted) frequency, which only happens when the source is moving towards the observer.",
    marking_notes: "Two steps, 1 mark each: direction, then reason.",
    steps: [
      {
        marks: 1,
        description: "Is the ambulance moving towards or away from the observer?",
        options: ["Towards", "Away from", "Neither — it is stationary relative to the observer", "Cannot be determined"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the reason?",
        options: [
          "The observed/detected frequency is greater than the actual frequency emitted",
          "The observed/detected frequency is smaller than the actual frequency emitted",
          "The observed wavelength is longer than the emitted wavelength",
          "The observed frequency equals the actual frequency emitted",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "Calculate the speed at which the ambulance is travelling. Take the speed of sound in air as 343 m·s⁻¹.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "The observed frequency fL = 1 130 + 70 = 1 200 Hz. Since the source moves towards a stationary listener: fL = v/(v - vs) × fs, so 1 200 = [343/(343 - vs)](1 130), giving vs = 20,01 m·s⁻¹.",
    marking_notes: "Marking points: correct value of fL = 1 200 Hz (1); correct Doppler formula for a source moving towards a stationary listener (1); correct final answer vs = 20,01 m·s⁻¹ (accept 19,42–20,01 m·s⁻¹) (3).",
    steps: [
      {
        marks: 1,
        description: "What is fL, the frequency detected by the stationary observer?",
        options: ["1 200 Hz", "1 130 Hz", "1 060 Hz", "70 Hz"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which Doppler formula applies (source moving towards a stationary listener)?",
        options: ["fL = v/(v - vs) × fs", "fL = v/(v + vs) × fs", "fL = (v - vs)/v × fs", "fL = v/(v - vs)² × fs"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is vs, the speed of the ambulance?",
        options: ["20,01 m·s⁻¹", "17,88 m·s⁻¹", "23,10 m·s⁻¹", "343,00 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "A study of spectral lines obtained from various stars can provide valuable information about the movement of the stars. Diagram 1 represents the spectrum of an element in a laboratory on Earth. Diagram 2 represents the spectrum of the same element from a distant star, with the lines shifted towards the blue end relative to Diagram 1. Is the star moving towards or away from the Earth? Explain the answer by referring to the shifts in the spectral lines in the two diagrams.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The star is approaching (moving towards) the Earth. The spectral lines in Diagram 2 are shifted towards the blue end (blue-shifted) relative to Diagram 1.",
    marking_notes: "Accept the single combined 2-mark statement: star approaching + lines blue-shifted.",
    image_url: `${IMG}/6.2-spectral-lines.png`,
    steps: [
      {
        marks: 2,
        description: "Is the star moving towards or away from the Earth, and why?",
        options: [
          "Towards the Earth — the spectral lines in Diagram 2 are shifted towards the blue end (blue-shifted)",
          "Away from the Earth — the spectral lines in Diagram 2 are shifted towards the red end (red-shifted)",
          "Towards the Earth — the spectral lines in Diagram 2 are shifted towards the red end (red-shifted)",
          "Neither — the spectral lines in Diagram 2 are unchanged from Diagram 1",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (19 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "The diagram below shows two small identical metal spheres, R and S, each placed on a wooden stand. Spheres R and S carry charges of +8 μC and -4 μC respectively. Ignore the effects of air. Explain why the spheres were placed on wooden stands.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "To ensure that charge does not leak to the ground (the wooden stands insulate the charged spheres).",
    marking_notes: "Accept only the idea that the stands insulate the spheres, preventing charge leaking to the ground.",
    image_url: `${IMG}/7-spheres-RS.png`,
    steps: [
      {
        marks: 1,
        description: "Why were the spheres placed on wooden stands?",
        options: [
          "To ensure that charge does not leak to the ground / to insulate the charges",
          "To increase the charge on each sphere",
          "To allow the charge to flow freely to the ground",
          "To make the spheres easier to see",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Spheres R and S are brought into contact for a while and then separated by a small distance. Calculate the net charge on each of the spheres.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Net charge = (QR + QS)/2 = (+8 + (-4))/2 = 2 μC (on each sphere, since they are identical and share the total charge equally on contact).",
    marking_notes: "Marking points: formula (QR + QS)/2 (1); correct final answer 2 μC (1).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the net (shared) charge on each identical sphere after contact?",
        options: ["(QR + QS)/2", "QR + QS", "QR - QS", "(QR + QS)/4"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the net charge on each sphere?",
        options: ["2 μC", "4 μC", "-2 μC", "6 μC"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Draw the electric field pattern due to the two spheres R and S (now both carrying +2 μC after contact).",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Since both spheres now carry the same positive charge, the field lines leave both spheres radially and curve away from each other between the spheres (a 'like-charges repel' pattern), with no lines crossing.",
    marking_notes: "Marking points: correct direction of field lines (away from both positive spheres) (1); correct shape of the field pattern (lines curving away from each other between the spheres, radiating outward elsewhere) (1); no field lines crossing each other, none entering the spheres (1).",
    marking_points: [
      { marks: 1, description: "field lines point away from both (now positive) spheres", keywords: ["direction", "away from", "outward"] },
      { marks: 1, description: "correct repulsive shape between the two like charges", keywords: ["shape", "field lines", "repel"] },
      { marks: 1, description: "field lines do not cross, and do not enter the spheres", keywords: ["not cross", "touch"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "After R and S have been in contact and separated, a third sphere, T, of charge +1 μC is now placed between them, 10 cm from R and 20 cm from S. Draw a free-body diagram showing the electrostatic forces experienced by sphere T due to spheres R and S.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Two forces act on T, both drawn from a single point on a horizontal line: F(S on T) pointing left (towards R, since like charges S and T repel) and F(R on T) pointing right (towards S, since like charges R and T repel).",
    marking_notes: "One mark per correctly labelled, correctly-directed force: F(S on T) to the left, F(R on T) to the right. Max 2.",
    marking_points: [
      { marks: 1, description: "F(S on T) drawn pointing left (towards R)", keywords: ["s on t", "left"] },
      { marks: 1, description: "F(R on T) drawn pointing right (towards S)", keywords: ["r on t", "right"] },
    ],
    image_url: `${IMG}/7-spheres-RTS.png`,
  },
  {
    number: "7", sub_number: "7.5",
    text: "Calculate the net electrostatic force experienced by T due to R and S.",
    marks: 6, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = kQ1Q2/r². FST = (9×10⁹)(1×10⁻⁶)(2×10⁻⁶)/(0,2)² = 0,45 N (left, towards R). FRT = (9×10⁹)(2×10⁻⁶)(1×10⁻⁶)/(0,1)² = 1,8 N (right, towards S). Fnet = 1,8 + (-0,45) = 1,35 N, towards sphere S.",
    marking_notes: "Marking points: formula F = kQ1Q2/r² (1); correct value of FST = 0,45 N (2); correct value of FRT = 1,8 N (2); correct final net force 1,35 N towards S (1).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electrostatic force between two point charges?",
        options: ["F = kQ1Q2/r²", "F = kQ/r²", "F = kQ1Q2/r", "F = Q1Q2/(kr²)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of FST, the force on T due to S (r = 0,2 m)?",
        options: ["0,45 N", "1,80 N", "0,90 N", "4,50 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of FRT, the force on T due to R (r = 0,1 m)?",
        options: ["1,80 N", "0,45 N", "0,90 N", "18,00 N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the net electrostatic force on T?",
        options: ["1,35 N towards S", "1,35 N towards R", "2,25 N towards S", "0,45 N towards R"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.6",
    text: "Define the electric field at a point.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The (electrostatic) force experienced per unit positive charge placed at that point.",
    marking_notes: "Must refer to the force experienced per unit positive charge placed at that point.",
    steps: [
      {
        marks: 2,
        description: "What is the electric field at a point?",
        options: [
          "The force experienced per unit positive charge placed at that point",
          "The total charge enclosed per unit volume at that point",
          "The potential energy per unit charge at that point",
          "The force between two point charges at that point",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.7",
    text: "Calculate the magnitude of the net electric field at the location of T due to R and S. (Treat the spheres as if they were point charges.)",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = F/q = 1,35/(1×10⁻⁶) = 1,35×10⁶ N·C⁻¹.",
    marking_notes: "Marking points: formula E = F/q (or equivalently E = kQ/r² calculated for each sphere and combined) (1); correct final answer 1,35×10⁶ N·C⁻¹ (2).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the net electric field at T, using the net force found in 7.5?",
        options: ["E = F/q", "E = Fq", "E = q/F", "E = F/q²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the net electric field at the location of T?",
        options: ["1,35×10⁶ N·C⁻¹", "1,35×10⁵ N·C⁻¹", "4,50×10⁵ N·C⁻¹", "1,80×10⁶ N·C⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (22 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "A group of learners conduct an experiment to determine the emf (ε) and internal resistance (r) of a battery. They connect a battery to a rheostat (variable resistor), a low-resistance ammeter and a high-resistance voltmeter. The data obtained (voltmeter reading V in volts, ammeter reading A in amperes): (2; 0,58), (3; 0,46), (4; 0,36), (5; 0,24), (6; 0,14). State ONE factor which must be kept constant during the experiment.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "Keep the temperature (of the battery/resistors) constant.",
    marking_notes: "Accept any valid controlled variable, e.g. temperature.",
    image_url: `${IMG}/8.1-circuit-experiment.png`,
    steps: [
      {
        marks: 1,
        description: "Which factor must be kept constant during this experiment?",
        options: [
          "Temperature (of the battery/resistors)",
          "The reading on the ammeter",
          "The reading on the voltmeter",
          "The resistance of the rheostat",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Using the information in the table (V in volts vs A in amperes: (2; 0,58), (3; 0,46), (4; 0,36), (5; 0,24), (6; 0,14)), plot the points and draw the line of best fit.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "All five points plotted correctly on a V (y-axis) vs I (x-axis) graph, with a straight line of best fit drawn through them, extending to a y-intercept near 7,2 V.",
    marking_notes: "Marking points: all points correctly plotted (at least 4 points) (2); correct straight line of best fit using the plotted points (at least 3 points) (1). This is a hand-drawn graphing task; automatic keyword marking cannot verify an actual plotted graph, so this is a best-effort placeholder for completeness of mark coverage.",
    marking_points: [
      { marks: 2, description: "all points correctly plotted", keywords: ["plot", "points"] },
      { marks: 1, description: "correct straight line of best fit", keywords: ["line of best fit", "straight line"] },
    ],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "Use the graph drawn in QUESTION 8.1.2 to determine the emf (ε) of the battery.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "7,2 V (the y-intercept of the line of best fit).",
    marking_notes: "Accept any reading between 7,0 V and 7,4 V, or the value of the y-intercept.",
    steps: [
      {
        marks: 1,
        description: "What is the emf (ε) of the battery, read as the y-intercept of your graph?",
        options: ["7,2 V", "6,0 V", "9,0 V", "0,8 V"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: "Use the graph drawn in QUESTION 8.1.2 to determine the internal resistance of the battery, WITHOUT USING ANY FORM OF THE EQUATION ε = I(R + r).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "The internal resistance equals the magnitude of the gradient (slope) of the V vs I graph: slope = ΔV/ΔI = (0 - 7,2)/(0,8 - 0) = -9, so r = 9 Ω.",
    marking_notes: "Marking points: formula slope = ΔV/ΔI (1); correct final answer r = 9 Ω (2).",
    steps: [
      {
        marks: 1,
        description: "Which quantity (read from the graph, without using ε = I(R + r)) gives the internal resistance?",
        options: [
          "The magnitude of the gradient (slope) of the V vs I graph",
          "The y-intercept of the graph",
          "The x-intercept of the graph",
          "The area under the graph",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the internal resistance of the battery?",
        options: ["9 Ω", "0,11 Ω", "7,2 Ω", "0,8 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "Three electrical devices, X, Y and Z, are connected in parallel to a 24 V battery with internal resistance r, with switches S1 (main) and S2 (in series with Z only). X is rated 20 V, 100 W. Y is rated 150 W. With switch S1 closed and S2 open, the devices function as rated. Calculate the current in X.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = VI, so 100 = 20(I), giving I = 5 A.",
    marking_notes: "Marking points: formula P = VI (1); correct final answer 5 A (2).",
    image_url: `${IMG}/8.2-circuit-XYZ.png`,
    steps: [
      {
        marks: 1,
        description: "Which formula relates X's rated power, voltage and current?",
        options: ["P = VI", "P = I²R", "P = V/I", "V = P + I"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the current in X?",
        options: ["5 A", "2 000 A", "0,2 A", "25 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Calculate the resistance of Y.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = V²/R, so 150 = (20)²/R, giving R = 2,67 Ω.",
    marking_notes: "Marking points: formula P = V²/R (1); correct final answer 2,67 Ω (2).",
    steps: [
      {
        marks: 1,
        description: "Which formula relates Y's rated power, the (shared) voltage of 20 V, and its resistance?",
        options: ["P = V²/R", "P = VR²", "P = R/V²", "P = V/R"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the resistance of Y?",
        options: ["2,67 Ω", "4,00 Ω", "0,13 Ω", "7,50 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "Calculate the internal resistance of the battery.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Current through Y (150 W at 20 V): I = P/V = 7,5 A. Total current Itot = 5 + 7,5 = 12,5 A. ε = I(R + r): 24 = 12,5(R + r), i.e. 24 = Vext + Vir = 20 + 12,5(r), giving r = 0,32 Ω.",
    marking_notes: "Marking points: correct total current Itot = 12,5 A (1); formula ε = I(R + r) or V = Ir (1); correct final answer r = 0,32 Ω (3).",
    steps: [
      {
        marks: 1,
        description: "What is Itot, the total current drawn from the battery (with S1 closed, S2 open)?",
        options: ["12,5 A", "5,0 A", "7,5 A", "24,0 A"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation relates the emf, the external (terminal) voltage and the internal resistance drop?",
        options: ["ε = Vext + Ir", "ε = Vext - Ir", "ε = Ir - Vext", "ε = Vext/Ir"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the internal resistance of the battery?",
        options: ["0,32 Ω", "1,92 Ω", "0,16 Ω", "4,00 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "Now switch S2 is also closed. Identify device Z which, when placed in the position shown, can still enable X and Y to operate as rated. Assume that the resistances of all the devices remain unchanged.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Device Z is a voltmeter.",
    marking_notes: "Accept only 'voltmeter'.",
    steps: [
      {
        marks: 1,
        description: "What kind of device must Z be?",
        options: ["Voltmeter", "Ammeter", "Resistor equal to Y's resistance", "Rheostat set to zero resistance"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.5",
    text: "Explain how you arrived at the answer to QUESTION 8.2.4.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Device Z should be a voltmeter (or a device with very high resistance) because it has a very high resistance and will draw very little current. The current through X and Y will therefore remain the same, so they can still operate as rated.",
    marking_notes: "Marking points: Z has a very high resistance (1); it will draw very little current, so X and Y's currents are unaffected (1).",
    marking_points: [
      { marks: 1, description: "Z (a voltmeter) has a very high resistance", keywords: ["very high resistance", "high resistance"] },
      { marks: 1, description: "it draws very little current, so X and Y operate unaffected", keywords: ["very little current", "little current"] },
    ],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (8 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "The diagram below represents a simplified version of an electrical machine used to light up a bulb, with a rotating coil, magnets labelled N and S, and a commutator. Name the principle on which the machine operates.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Electromagnetic induction.",
    marking_notes: "Accept only 'electromagnetic induction'.",
    image_url: `${IMG}/9-generator-commutator.png`,
    steps: [
      {
        marks: 1,
        description: "On which principle does this machine operate?",
        options: ["Electromagnetic induction", "The photoelectric effect", "Conservation of momentum", "Coulomb's law"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.2",
    text: "State ONE way in which to make this bulb burn brighter.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Increase the speed of rotation of the coil (or increase the number of coils / strengthen the magnetic field).",
    marking_notes: "Accept any one valid way to increase the induced emf: rotate the coil faster, increase the number of turns, or use stronger magnets.",
    steps: [
      {
        marks: 1,
        description: "Which ONE change would make the bulb burn brighter?",
        options: [
          "Increase the speed of rotation of the coil",
          "Decrease the speed of rotation of the coil",
          "Decrease the number of turns on the coil",
          "Use weaker magnets",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Some changes have been made to the machine and a new device is obtained, with a split ring commutator replaced by two separate continuous rings (labelled X) connected to brushes. Name part X in the new device.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Slip rings.",
    marking_notes: "Accept only 'slip rings'.",
    image_url: `${IMG}/9-generator-sliprings.png`,
    steps: [
      {
        marks: 1,
        description: "What is part X?",
        options: ["Slip rings", "Commutator", "Brushes", "Armature"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.4.1",
    text: "The graph of output emf versus time obtained using the device in QUESTION 9.3 is a sine curve, reaching a maximum of 339,45 V. Define the term root mean square value of an AC voltage.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "It is the value of the voltage in a DC circuit that will have the same heating effect as an AC circuit.",
    marking_notes: "Must refer to the value of the voltage in a DC circuit that has the same heating effect as the AC circuit.",
    image_url: `${IMG}/9.4-emf-time-graph.png`,
    steps: [
      {
        marks: 2,
        description: "What is the root mean square (rms) value of an AC voltage?",
        options: [
          "The value of the voltage in a DC circuit that will have the same heating effect as an AC circuit",
          "The maximum (peak) value reached by the AC voltage",
          "The average value of the AC voltage over one cycle",
          "The value of the AC voltage at t = 0",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.4.2",
    text: "Calculate the rms voltage.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Vrms = Vmax/√2 = 339,45/√2 = 240,03 V.",
    marking_notes: "Marking points: formula Vrms = Vmax/√2 (1); correct final answer 240,03 V (2).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the rms voltage from the peak (maximum) voltage?",
        options: ["Vrms = Vmax/√2", "Vrms = Vmax × √2", "Vrms = Vmax/2", "Vrms = Vmax²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the rms voltage?",
        options: ["240,03 V", "339,45 V", "480,06 V", "169,73 V"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 10: PHOTOELECTRIC EFFECT (11 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "Ultraviolet light is incident onto a photocell with a potassium cathode. The threshold frequency of potassium is 5,548 × 10¹⁴ Hz. Define the term threshold frequency (cut-off frequency).",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The minimum frequency (of a photon/light) needed to emit electrons from (the surface of) a metal (substance).",
    marking_notes: "Must refer to the minimum frequency of light needed to eject/emit electrons from the surface of a metal.",
    image_url: `${IMG}/10-photocell.png`,
    steps: [
      {
        marks: 2,
        description: "What is the threshold (cut-off) frequency?",
        options: [
          "The minimum frequency of light needed to emit electrons from the surface of a metal",
          "The maximum frequency of light a metal surface can absorb",
          "The frequency at which a photocell draws its maximum current",
          "The frequency of light with the longest wavelength visible to the human eye",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.2",
    text: "The maximum speed of an ejected photoelectron is 5,33 × 10⁵ m·s⁻¹. Calculate the wavelength of the ultraviolet light used.",
    marks: 5, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W0 + Ek(max): hc/λ = hf0 + ½mv²max, so (6,63×10⁻³⁴)(3×10⁸)/λ = (6,63×10⁻³⁴)(5,548×10¹⁴) + ½(9,11×10⁻³¹)(5,33×10⁵)², giving λ = 4×10⁻⁷ m.",
    marking_notes: "Marking points: correct equation E = W0 + Ek(max), in any valid form (1); correct value of the total photon energy (combining W0 and Ek(max)) (2); correct final answer λ = 4×10⁻⁷ m (2).",
    steps: [
      {
        marks: 1,
        description: "Which equation relates a photon's energy, the metal's work function (via the threshold frequency), and the ejected electron's maximum kinetic energy?",
        options: [
          "hc/λ = hf0 + ½mv²max",
          "hc/λ = hf0 - ½mv²max",
          "hc/λ = hf0 × ½mv²max",
          "½mv²max = hf0 + hc/λ",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total photon energy (hc/λ)?",
        options: ["4,97×10⁻¹⁹ J", "3,68×10⁻¹⁹ J", "1,29×10⁻¹⁹ J", "6,63×10⁻³⁴ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the wavelength of the ultraviolet light?",
        options: ["4×10⁻⁷ m", "2×10⁻⁷ m", "5,548×10⁻⁷ m", "6,63×10⁻⁷ m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "The photocell is now replaced by another photocell with a rubidium cathode. The maximum speed of the ejected photoelectron is 6,10 × 10⁵ m·s⁻¹ when the same ultraviolet light source is used. How does the work function of rubidium compare to that of potassium? Write down only GREATER THAN, SMALLER THAN or EQUAL TO.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Smaller (less) than.",
    marking_notes: "Accept only 'smaller than'.",
    steps: [
      {
        marks: 1,
        description: "How does rubidium's work function compare to potassium's?",
        options: ["Smaller than", "Greater than", "Equal to", "Cannot be determined"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.4",
    text: "Explain the answer to QUESTION 10.3.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "The wavelength/frequency/energy of the incident light (photon/hf) is constant (the same UV source is used for both cathodes). Since the ejected electron's speed (and so its kinetic energy) is larger for rubidium, and E = W0 + Ek(max) is fixed, rubidium's work function must be smaller.",
    marking_notes: "Marking points: the incident light's wavelength/frequency/energy is constant (same source used) (1); since the speed is larger, the kinetic energy is larger (1); therefore the work function is smaller (1).",
    marking_points: [
      { marks: 1, description: "the wavelength/frequency/energy of the incident light is constant", keywords: ["constant", "same light"] },
      { marks: 1, description: "since the speed is larger, the kinetic energy is larger", keywords: ["kinetic energy is larger", "larger kinetic energy"] },
      { marks: 1, description: "therefore the work function is smaller", keywords: ["work function", "smaller"] },
    ],
  },
];

// No exam_schedule entries here — mirrors physical-sciences-p1-nov2025.ts
// and physical-sciences-p1-nov2024.ts.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
