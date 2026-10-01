// Real DBE past paper: Physical Sciences (Physics) P1, November 2013, National
// (English).
// Source: QP and memo fetched as two separate PDFs from a third-party mirror
// (maimelatct.com) — not the official DBE site, so the cover page of each was
// checked by rendering it to an image and confirming it reads "PHYSICAL
// SCIENCES: PHYSICS (P1)" / "NOVEMBER 2013" / "MARKS: 150" / "TIME: 3 hours"
// before transcription began. QP is 15 numbered content pages (+3 data-sheet
// pages); memo is 16 pages. Page-by-page cross-check of question numbers and
// marks against the memo's answers found no stray or mismatched pages.
//
// Paper structure: SECTION A (Q1 one-word items + Q2 multiple-choice, 25
// marks) and SECTION B (Q3-Q11, 125 marks) — ELEVEN questions total, no
// choice, 150 marks, 3 hours (180 minutes). All 150 marks are included here
// (verified: 5 + 20 + 19 + 13 + 15 + 9 + 13 + 14 + 16 + 14 + 12 = 150).
//
// This paper reuses every topic already defined by the Nov 2025 P1 dataset
// (scripts/seed-data/physical-sciences-p1-nov2025.ts) as its closest-fit
// bucket — no new CAPS topic key is invented here — so the `topics` array
// below is identical to that file's (topics are upserted by key in
// scripts/seed.ts, so redeclaring them here is safe and required since this
// file is a standalone dataset).
//
// IMPORTANT CONTEXT: November 2013 predates CAPS (CAPS was phased in for
// Grade 12 from the 2014 exam onward); this is a late-NCS-syllabus paper.
// The old NSC syllabus examined some content that the current CAPS syllabus
// either dropped from Grade 12 P1 or relocated: parallel-plate capacitors
// (2.6), single-slit diffraction/double-slit interference (Question 7 in
// full), and electromagnetic-spectrum/atomic-energy-level items phrased
// outside a photoelectric-effect context (1.4, 2.5, 2.8, 2.10). None of
// these map cleanly onto the nine canonical topic keys. Per the brief, no
// new topic key was invented for these — each was mapped to its closest
// existing bucket and flagged below (and again inline at the question)
// rather than silently assigned a topic the question doesn't really belong
// to:
//   - 1.4 (EM spectrum: gamma has shortest wavelength), 2.5 (superposition
//     principle), 2.8 (EM waves share a common speed in vacuum), 2.10 (atomic
//     emission/absorption of a photon of energy E) -> mapped to
//     "doppler-effect" (the "Waves, Sound and Light" bucket is the closest
//     fit for general wave/EM-wave/quantum-of-light content).
//   - 2.6 (capacitors C = Q/V, C = epsilon0*A/d) -> mapped to
//     "electrostatics" (the capacitor formulae appear on this paper's own
//     official data sheet under the ELECTROSTATICS table, which is the
//     closest existing bucket; capacitors are not part of the current CAPS
//     electrostatics scope).
//   - Question 7 in full (diffraction: definition, single-slit diffraction
//     minima, double-slit interference pattern) -> mapped to
//     "doppler-effect" (closest existing "Waves, Sound and Light" bucket;
//     diffraction/interference is not one of the nine canonical topics).
//
// Diagrams (free-body diagram, P-vs-I graphs, conductor-in-field sketch,
// velocity-time graph, crate-on-incline path XYZ, single-slit diffraction
// patterns P and Q, the Wheatstone-bridge-style circuit, the AC generator
// sketch, and the current-time graph) are vector line drawings rendered
// directly into the page content stream, not separate embedded raster
// images, so they were cropped from full-page 220dpi renders rather than
// extracted as clean standalone images. Purely decorative illustrations
// (the boy-on-ice-skates clip-art in Question 4, the photocell diagram in
// Question 11 whose every needed value is given in the question text) were
// skipped, since the underlying physics is fully specified in the question
// text without them.
//
// Calculation questions (3.3.1, 3.3.2, 3.3.3, 4.3, 5.2, 5.5, 6.2, 7.4, 8.3,
// 8.5, 9.2, 9.3, 10.4, 10.5, 10.7, 11.1.2) and short enumerable-answer
// questions (MCQs, name/identify items, INCREASES/DECREASES/REMAINS THE
// SAME items) use `steps` instead of `marking_points`: the student works the
// problem out (or reasons it out) on paper as normal, then picks the option
// they got for each mark-earning step (formula, intermediate value, final
// answer, or the single accepted word/letter) from a few choices, rather
// than typing anything. Distractors are chosen to trap specific real errors
// (wrong formula, sign flip, wrong given value, mixing up which quantity is
// "before"/"after", an off-by-the-wrong-exponent slip), not just arbitrary
// wrong numbers. Genuinely open-ended "explain/describe" items, or items
// where the memo explicitly lists several differently-worded acceptable
// answers that don't collapse into one clean MCQ pick, use `marking_points`
// instead (e.g. 3.2, 4.2, 4.4.2, 5.1, 5.3, 6.4, 7.1, 7.3.1, 7.3.2, 7.5, 8.1,
// 9.1, 9.4, 10.2, 11.1.4, 11.2).
//
// FLAG for review: Question 7.4 (single-slit diffraction, second minimum).
// The approved memo's OPTION 1 computes sin(theta) = (2)(410e-9)/(5e-6) =
// 0.164 and states "theta = 9,44 deg or 9,21 deg" as two alternative
// accepted final answers on the same line, without showing how 9,21 deg is
// derived from that same substitution (arcsin(0,164) = 9,44 deg exactly;
// 9,21 deg would follow from a slightly different value, e.g. treating sin
// theta as instead being tan theta, or a rounding variant). Transcribed
// faithfully as the memo states it (both values accepted) rather than
// silently discarding the second value; flagging it here for a human to
// double-check against the original PDF if this question is ever disputed.
//
// FLAG for review: Question 9.4 ("Will the device still function at maximum
// power with switch S open? Explain without doing any calculations.") The
// approved memo's answer is "No", reasoned only qualitatively (total
// resistance R increases when S opens since Rx's branch is removed from the
// parallel combination, so current I decreases, so for constant R the power
// P = I^2R decreases below the maximum-power value found in 9.2). This is
// transcribed as the memo gives it; the "do not do any calculations"
// instruction is from the original paper, not an omission in this file.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2013-p1";

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
  year: 2013,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "http://maimelatct.com/wp-content/uploads/2013/08/physical-sciences-p1-nov-2013-eng.pdf" as string | null,
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
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The rate of change of velocity.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "Acceleration.",
    marking_notes: "Accept only 'acceleration'.",
    steps: [
      {
        marks: 1,
        description: "What is the rate of change of velocity called?",
        options: ["Acceleration", "Velocity", "Momentum", "Displacement"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: The distance between two consecutive points in phase on a wave.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Wavelength.",
    marking_notes: "Accept only 'wavelength'.",
    steps: [
      {
        marks: 1,
        description: "What is the distance between two consecutive points in phase on a wave called?",
        options: ["Wavelength", "Amplitude", "Period", "Frequency"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: A region of space in which an electric charge experiences an electrostatic force.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "Electric field.",
    marking_notes: "Accept only 'electric field'.",
    steps: [
      {
        marks: 1,
        description: "What is a region of space in which an electric charge experiences an electrostatic force called?",
        options: ["Electric field", "Equipotential line", "Electric circuit", "Magnetic field"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: The type of electromagnetic wave with the shortest wavelength. FLAG: this is a general electromagnetic-spectrum item (old-NSC content); mapped to the closest existing 'Waves, Sound and Light' bucket (doppler-effect) since it is not literally about the Doppler effect.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Gamma (rays).",
    marking_notes: "Accept only 'gamma (rays)'.",
    steps: [
      {
        marks: 1,
        description: "Which type of electromagnetic wave has the shortest wavelength?",
        options: ["Gamma rays", "Radio waves", "Visible light", "Infrared"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: The minimum frequency of light needed to remove an electron from the surface of a metal.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Threshold frequency.",
    marking_notes: "Accept only 'threshold (frequency)'.",
    steps: [
      {
        marks: 1,
        description: "What is the minimum frequency of light needed to remove an electron from a metal surface called?",
        options: ["Threshold frequency", "Work function", "Resonant frequency", "Cut-off wavelength"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 2: MULTIPLE-CHOICE QUESTIONS (20 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "Which ONE of the following physical quantities is equal to the product of force and constant velocity? (A) Work (B) Power (C) Energy (D) Acceleration",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "B — Power. P = Fv is the power delivered by a force acting on an object moving at constant velocity v.",
    marking_notes: "Accept only 'B'.",
    steps: [
      {
        marks: 2,
        description: "Which physical quantity equals the product of force and constant velocity?",
        options: ["Power (P = Fv)", "Work (W = F.Δx cosθ)", "Energy (Ek = ½mv²)", "Acceleration (a = F/m)"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "A 30 kg iron sphere and a 10 kg aluminium sphere with the same diameter fall freely from the roof of a tall building. Ignore the effects of friction. When the spheres are 5 m above the ground, they have the same ... (A) momentum. (B) acceleration. (C) kinetic energy. (D) potential energy.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "B — acceleration. In free fall (no friction), all objects experience the same gravitational acceleration g = 9,8 m·s⁻² regardless of mass; momentum, kinetic energy and potential energy all depend on mass and so differ between the two spheres.",
    marking_notes: "Accept only 'B'.",
    steps: [
      {
        marks: 2,
        description: "Which quantity is the same for both spheres (different masses, same diameter, free fall, no friction) at 5 m above the ground?",
        options: ["Acceleration", "Momentum", "Kinetic energy", "Potential energy"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "The free-body diagram shows the relative magnitudes and directions of all the forces acting on an object moving horizontally in an easterly direction (normal force up, weight down, frictional force to the west, applied force to the east, with the frictional force arrow drawn longer than the applied force arrow). The kinetic energy of the object ... (A) is zero. (B) increases. (C) decreases. (D) remains constant.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "C — decreases. The frictional force (west) is drawn larger than the applied force (east), so the net horizontal force is to the west, opposite to the object's eastward motion. This net force decelerates the object, so its speed — and therefore its kinetic energy — decreases.",
    marking_notes: "Accept only 'C'.",
    image_url: `${IMG}/2.3-free-body-diagram.png`,
    steps: [
      {
        marks: 2,
        description: "The frictional force arrow is drawn longer than the applied force arrow, and the object moves east. What happens to its kinetic energy?",
        options: [
          "Decreases (net force is westward, opposing the eastward motion, so the object decelerates)",
          "Increases (the applied force is pushing it forward)",
          "Remains constant (the forces are balanced)",
          "Is zero (the object is not moving)",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "The hooter of a vehicle travelling at constant speed towards a stationary observer produces sound waves of frequency 400 Hz. Ignore the effects of wind. Which ONE of the following frequencies, in hertz, is most likely to be heard by the observer? (A) 400 (B) 350 (C) 380 (D) 480",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "D — 480 Hz. The source (vehicle) is moving towards the stationary observer, so by the Doppler effect the observed frequency must be higher than the emitted frequency (400 Hz); 480 is the only option greater than 400.",
    marking_notes: "Accept only 'D'.",
    steps: [
      {
        marks: 2,
        description: "A source moving towards a stationary observer produces sound at 400 Hz. What frequency, in Hz, is the observer most likely to hear?",
        options: ["480 (higher than the emitted frequency, as expected for an approaching source)", "350 (lower than emitted)", "380 (lower than emitted)", "400 (unchanged)"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.5",
    text: "When two waves meet at a point, the amplitude of the resultant wave is the algebraic sum of the amplitudes of the individual waves. This principle is known as ... (A) dispersion. (B) the Doppler effect. (C) superposition. (D) Huygens' principle. FLAG: superposition is general wave behaviour, mapped to the closest existing 'Waves, Sound and Light' bucket (doppler-effect).",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "C — superposition. The principle of superposition states that the resultant displacement/amplitude where waves overlap is the algebraic sum of the individual wave amplitudes.",
    marking_notes: "Accept only 'C'.",
    steps: [
      {
        marks: 2,
        description: "What principle states that the resultant amplitude where two waves meet is the algebraic sum of their individual amplitudes?",
        options: ["Superposition", "Dispersion", "The Doppler effect", "Huygens' principle"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.6",
    text: "A parallel-plate capacitor X, with a vacuum between its plates, is connected in a circuit as shown (resistor R in series with capacitor X, connected across a battery — a second capacitor is also in the loop). When fully charged, the charge stored on its plates is Q. Capacitor X is now replaced with a similar capacitor Y, with the same dimensions but with paper between its plates. When fully charged, the charge stored on the plates of capacitor Y is ... (A) zero. (B) equal to Q. (C) larger than Q. (D) smaller than Q. FLAG: capacitors are old-NSC content (the C = Q/V and C = ε₀A/d formulae appear on this paper's own data sheet under ELECTROSTATICS, the closest existing bucket); not part of the current CAPS electrostatics scope.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "C — larger than Q. Inserting a dielectric (paper) between the plates increases the capacitance (C = ε₀A/d is increased by the dielectric's relative permittivity), and since the capacitor is still fully charged to the same voltage, Q = CV means a larger C gives a larger stored charge Q.",
    marking_notes: "Accept only 'C'.",
    image_url: `${IMG}/2.6-capacitor-circuit.png`,
    steps: [
      {
        marks: 2,
        description: "A dielectric (paper) is inserted between a capacitor's plates in place of a vacuum, and it is charged to the same voltage. What happens to the stored charge?",
        options: [
          "Larger than Q (a dielectric increases capacitance, and Q = CV)",
          "Equal to Q (capacitance is unaffected by the dielectric)",
          "Smaller than Q (a dielectric decreases capacitance)",
          "Zero (a dielectric blocks charge storage)",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.7",
    text: "Which ONE of the following graphs best represents the relationship between the electrical power and the current in a given ohmic conductor? (A) a horizontal line (B) a decreasing curve (C) a straight line through the origin (D) an upward curve through the origin",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "D — an upward (parabolic) curve through the origin. For a given (constant-resistance) ohmic conductor, P = I²R, so power is proportional to the square of the current — a parabola through the origin, not a straight line.",
    marking_notes: "Accept only 'D'.",
    image_url: `${IMG}/2.7-power-current-graphs.png`,
    steps: [
      {
        marks: 2,
        description: "For a given ohmic conductor (constant R), how does electrical power P relate to current I (P = I²R)?",
        options: [
          "D: an upward curve through the origin (P proportional to I²)",
          "C: a straight line through the origin (P proportional to I)",
          "A: a horizontal line (P constant, independent of I)",
          "B: a decreasing curve (P decreasing as I increases)",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.8",
    text: "In a vacuum, all electromagnetic waves have the same ... (A) energy. (B) speed. (C) frequency. (D) wavelength. FLAG: general EM-wave property, mapped to the closest existing 'Waves, Sound and Light' bucket (doppler-effect).",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "B — speed. All electromagnetic waves travel at the speed of light c = 3,0×10⁸ m·s⁻¹ in a vacuum, regardless of their frequency/wavelength/energy, which vary across the spectrum.",
    marking_notes: "Accept only 'B'.",
    steps: [
      {
        marks: 2,
        description: "What property is the same for all electromagnetic waves travelling in a vacuum?",
        options: ["Speed", "Energy", "Frequency", "Wavelength"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.9",
    text: "A conductor carrying conventional current I is placed in a magnetic field between the N and S poles of a magnet (field pointing from N to S, current pointing downward through the field). Which ONE of the following best describes the direction of the magnetic force experienced by the conductor? (A) Parallel to the direction of the magnetic field (B) Opposite to the direction of the magnetic field (C) Into the page perpendicular to the direction of the magnetic field (D) Out of the page perpendicular to the direction of the magnetic field",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "D — out of the page, perpendicular to the magnetic field. By the right-hand rule (F = IL×B), with current pointing down and field pointing from N to S (left to right in the diagram), the force on the conductor points out of the page.",
    marking_notes: "Accept only 'D'.",
    image_url: `${IMG}/2.9-conductor-field.png`,
    steps: [
      {
        marks: 2,
        description: "Using the right-hand rule with current pointing downward and the magnetic field pointing left to right (N to S), in which direction is the magnetic force on the conductor?",
        options: [
          "Out of the page, perpendicular to the field",
          "Into the page, perpendicular to the field",
          "Parallel to the magnetic field",
          "Opposite to the magnetic field",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.10",
    text: "An atom in its ground state absorbs energy E and is excited to a higher energy state. When the atom returns to the ground state, a photon with energy ... (A) E is absorbed. (B) E is released. (C) less than E is released. (D) less than E is absorbed. FLAG: atomic energy-level item, mapped to the closest existing 'photoelectric-effect' (quantum-of-light / Matter and Materials) bucket.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "B — E is released. By conservation of energy, the exact amount of energy E absorbed to excite the atom is released as a photon when the atom returns (directly) to the ground state.",
    marking_notes: "Accept only 'B'.",
    steps: [
      {
        marks: 2,
        description: "An atom absorbs energy E and is excited; when it returns to the ground state, what energy photon is released?",
        options: ["E is released (conservation of energy)", "E is absorbed (not released)", "Less than E is released", "Less than E is absorbed"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (19 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A ball of mass 0,15 kg is thrown vertically downwards from the top of a building to a concrete floor below. The ball bounces off the floor. The velocity-time graph shows the motion: velocity rises in a straight line from 10 m·s⁻¹ at t = 0 to 20 m·s⁻¹ at the instant it strikes the floor, then drops instantly to -15 m·s⁻¹, then rises in a straight line again, crossing zero at time t. Take downward motion as positive. From the graph, write down the magnitude of the velocity at which the ball bounces off the floor.",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "15 m·s⁻¹.",
    marking_notes: "Accept only '15 m·s⁻¹' (read directly off the graph).",
    image_url: `${IMG}/3-velocity-time-graph.png`,
    steps: [
      {
        marks: 1,
        description: "From the graph, what is the magnitude of the velocity at which the ball bounces off the floor?",
        options: ["15 m·s⁻¹", "20 m·s⁻¹", "5 m·s⁻¹", "10 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Is the collision of the ball with the floor ELASTIC or INELASTIC? Refer to the data on the graph to explain the answer.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Inelastic. The speed at which the ball leaves the floor (15 m·s⁻¹) is less than (different from) the speed at which it strikes the floor (20 m·s⁻¹) — equivalently, the kinetic energy just before the collision (30 J) is not equal to the kinetic energy just after (16,88 J) — so kinetic energy is not conserved in the collision.",
    marking_notes: "Must state 'inelastic' and give a valid reason referring to the graph's data: the speed/velocity at which the ball leaves the floor is less than/different from the speed at which it strikes the floor, OR the kinetic energy changes/is not conserved (with supporting Ki ≠ Kf values).",
    marking_points: [
      { marks: 1, description: "states the collision is inelastic", keywords: ["inelastic"] },
      { marks: 1, description: "the speed/velocity at which the ball leaves the floor is less than / different from the speed at which it strikes the floor (20 m/s vs 15 m/s)", keywords: ["speed", "less than", "different"] },
      { marks: 1, description: "therefore the kinetic energy changes / is not conserved", keywords: ["kinetic energy", "not conserved", "changes"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Calculate the height from which the ball is thrown.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf² = vi² + 2aΔy (downward positive) from the throw point to the floor: (20)² = (10)² + 2(9,8)Δy, giving Δy = 15,31 m.",
    marking_notes: "Marking points: formula vf² = vi² + 2aΔy (or an equivalent valid method); correct substitution using vi = 10 m/s, vf = 20 m/s, a = 9,8 m/s²; correct final answer Δy = 15,31 m.",
    steps: [
      {
        marks: 1,
        description: "Which formula finds the height the ball is thrown from (using vi = 10 m/s at t = 0 and vf = 20 m/s just before impact)?",
        options: ["vf² = vi² + 2aΔy", "vf = vi + aΔt", "Δy = viΔt", "Δy = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct substitution into that formula (downward positive, a = 9,8 m/s²)?",
        options: ["(20)² = (10)² + 2(9,8)Δy", "(10)² = (20)² + 2(9,8)Δy", "(20)² = (10)² + 2(9,8)Δy, but using a = -9,8", "(20)² = (15)² + 2(9,8)Δy"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the height from which the ball is thrown?",
        options: ["15,31 m", "30,00 m", "20,00 m", "7,65 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Calculate the magnitude of the impulse imparted by the floor on the ball.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "FnetΔt = Δp = mvf - mvi = 0,15(-15 - 20) = -5,25 N·s, so the magnitude of the impulse is 5,25 N·s (or 5,25 kg·m·s⁻¹).",
    marking_notes: "Marking points: formula FnetΔt = Δp = mvf - mvi; correct substitution using vi = 20 m/s (downward, positive, just before impact) and vf = -15 m/s (upward, just after bounce); correct final magnitude 5,25 N·s.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the impulse on the ball from the collision with the floor?",
        options: ["FnetΔt = Δp = mvf - mvi", "FnetΔt = ½mv²", "p = mv alone (no change)", "Δp = m(vf + vi)"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct substitution (downward positive; vi = 20 m/s just before impact, vf = -15 m/s just after bounce)?",
        options: ["0,15(-15 - 20)", "0,15(15 - 20)", "0,15(-15 + 20)", "0,15(20 - (-15))"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of the impulse?",
        options: ["5,25 N·s", "0,75 N·s", "5,25 N", "35,00 N·s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3.3",
    text: "Calculate the magnitude of the displacement of the ball from the moment it is thrown until time t (the moment, after the bounce, at which the ball's velocity is zero / it reaches maximum height).",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "From the floor to time t (max height after bounce), using vf² = vi² + 2aΔy with vi = -15 m/s, vf = 0: (0)² = (-15)² + 2(9,8)Δy, giving Δy = -11,48 m (11,48 m upward from the floor). Total displacement from the throw point = -11,48 + 15,31 = 3,82 m (accept 3,83 m).",
    marking_notes: "Marking points: formula vf² = vi² + 2aΔy (or equivalent) applied to the rise after the bounce; correct substitution giving 11,48 m (upward) from the floor; correct combination with the 15,31 m throw height from 3.3.1 to give the final total displacement 3,82 m (accept 3,83 m).",
    steps: [
      {
        marks: 1,
        description: "Which formula finds the ball's rise from the floor to its maximum height after the bounce (vi = -15 m/s, vf = 0)?",
        options: ["vf² = vi² + 2aΔy", "vf = vi + aΔt", "Δy = viΔt", "p = mv"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of the rise from the floor to maximum height?",
        options: ["11,48 m", "15,31 m", "20,00 m", "7,65 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the total displacement of the ball from the moment it is thrown until time t (combining the 15,31 m fall and the 11,48 m rise, in opposite directions)?",
        options: ["3,82 m (or 3,83 m)", "26,79 m", "15,31 m", "11,48 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Sketch a position-versus-time graph for the motion of the ball from the moment it is thrown until it reaches its maximum height after the bounce. Use the floor as the zero position. Indicate on the graph: the height from which the ball is thrown, and time t.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A curve starting at position -15,3 m (above the floor, so negative if the floor is zero and up is... per the memo, the graph starts at -15,3 m, i.e. the position axis is set up so the throw height reads as a negative value) at t = 0, curving (concave, steepening) down to the floor (position 0) at the moment of impact, then an instantaneous jump, followed by a second curve (decelerating, concave down, flattening to a turning point) rising from the floor up to the maximum height reached at time t.",
    marking_notes: "Marking points: correct shape for the first part (steepening curve from the throw height down to the floor); correct shape for the second part up to time t (decelerating curve rising from the floor, flattening at the top); graph starts at -15,3 m at t = 0 s; maximum height after the bounce reached at time t, and that maximum height is less than 15,3 m.",
    marking_points: [
      { marks: 1, description: "correct shape for the first part (curve from the throw height down to the floor)", keywords: ["curve", "shape"] },
      { marks: 1, description: "correct shape for the second part up to time t (curve rising from the floor, flattening at the top)", keywords: ["second part", "rising"] },
      { marks: 1, description: "graph starts at -15,3 m at t = 0 s", keywords: ["15 3", "starts at"] },
      { marks: 1, description: "maximum height after the bounce is reached at time t, and is less than 15,3 m", keywords: ["maximum height", "time t", "less than"] },
    ],
  },

  // ============ QUESTION 4: MOMENTUM (NEWTON'S THIRD LAW) (13 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A boy on ice skates is stationary on a frozen lake (no friction). He throws a package of mass 5 kg at 4 m·s⁻¹ horizontally east. The mass of the boy is 60 kg. At the instant the package leaves the boy's hand, the boy starts moving. In which direction does the boy move? Write down only EAST or WEST.",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "West.",
    marking_notes: "Accept only 'west'.",
    steps: [
      {
        marks: 1,
        description: "The boy throws the package east. By conservation of momentum, in which direction does he move?",
        options: ["West", "East", "North", "He remains stationary"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Which ONE of Newton's laws of motion explains the direction in which the boy experiences a force when he throws the package? Name and state this law in words.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "Newton's Third Law of Motion: when object A exerts a force on object B, object B exerts a force equal in magnitude on object A, but opposite in direction.",
    marking_notes: "Must name 'Newton's Third Law (of Motion)' (1 mark) and state it in words: when object A exerts a force on object B, object B exerts a force equal in magnitude on object A but opposite in direction (2 marks).",
    marking_points: [
      { marks: 1, description: "names Newton's Third Law of Motion", keywords: ["third law"] },
      { marks: 2, description: "when object A exerts a force on object B, object B exerts a force equal in magnitude on object A, but opposite in direction", keywords: ["equal in magnitude", "opposite in direction"] },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Calculate the magnitude of the velocity of the boy immediately after the package leaves his hand. Ignore the effects of friction.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "By conservation of momentum (taking east as positive): Σpi = Σpf, so 0 = (60)vf + (5)(4), giving vf = -0,33 m/s, i.e. the boy moves at 0,33 m·s⁻¹ (west).",
    marking_notes: "Marking points: formula Σpi = Σpf (or an equivalent valid approach, e.g. ΔpA = -ΔpB); correct substitution using the boy's mass (60 kg), the package's mass (5 kg) and velocity (4 m/s); correct final answer 0,33 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies (system initially at rest, frictionless, boy throws a package)?",
        options: [
          "Conservation of momentum: Σpi = Σpf (or ΔpA = -ΔpB)",
          "Conservation of mechanical energy",
          "Newton's second law: Fnet = ma, applied without any time interval",
          "Work-energy theorem",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the correct substitution (east positive, system initially at rest)?",
        options: ["0 = (60)vf + (5)(4)", "0 = (60)vf - (5)(4)", "(60)(4) = (5)vf", "0 = (5)vf + (60)(4)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the boy's velocity?",
        options: ["0,33 m·s⁻¹", "4,00 m·s⁻¹", "0,08 m·s⁻¹", "12,00 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "How will the answer to QUESTION 4.3 be affected if the boy throws the same package at a higher velocity in the same direction? Write down INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Increases.",
    marking_notes: "Accept only 'increases'.",
    steps: [
      {
        marks: 1,
        description: "If the boy throws the same package at a higher velocity in the same direction, how is his own velocity affected?",
        options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "How will the answer to QUESTION 4.3 be affected if the boy throws a package of double the mass at the same velocity as in QUESTION 4.3? Write down INCREASES, DECREASES or REMAINS THE SAME. Explain the answer.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. The package's change in momentum doubles (since its mass doubles at the same velocity), so by conservation of momentum the boy's change in momentum also doubles; for the same mass of boy, this means his velocity must be greater.",
    marking_notes: "Must state 'increases' and give a valid reason: doubling the package's mass (at the same velocity) doubles its momentum change, so the boy's momentum change also doubles (conservation of momentum), and for the same mass of boy his velocity increases.",
    marking_points: [
      { marks: 1, description: "states the boy's velocity increases", keywords: ["increases"] },
      { marks: 2, description: "the package's momentum change doubles/increases, so the boy's momentum change doubles/increases, and for the same mass of boy his velocity increases", keywords: ["momentum", "doubles", "increases"] },
    ],
  },

  // ============ QUESTION 5: WORK-ENERGY (15 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A 5 kg rigid crate moves from rest down path XYZ (X is 5 m above the ground, Y is 1 m above the ground, i.e. X is 4 m above Y). Section XY of the path is frictionless. State, in words, the principle of the conservation of mechanical energy.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The total mechanical energy in an isolated/closed system remains constant (is conserved), in the absence of external or non-conservative forces.",
    marking_notes: "Must refer to the total mechanical energy remaining constant/conserved in a closed/isolated system (or equivalently: the sum of potential and kinetic energy remains constant in a closed/isolated system; or: when the work done by non-conservative forces on an object is zero, the total mechanical energy is conserved).",
    marking_points: [{ marks: 2, description: "the total mechanical energy remains constant/is conserved in a closed/isolated system", keywords: ["total mechanical energy", "remains constant", "conserved", "closed", "isolated"] }],
    image_url: `${IMG}/5-crate-path-xyz.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Use the principle of the conservation of mechanical energy to calculate the speed of the crate when it reaches point Y.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "(Ep + Ek)X = (Ep + Ek)Y, so (5)(9,8)(5) + ½(5)(0)² = (5)(9,8)(1) + ½(5)vf², giving v = 8,85 m·s⁻¹.",
    marking_notes: "Marking points: formula (Ep + Ek)X = (Ep + Ek)Y (any valid equivalent form); correct substitution using heights 5 m (X) and 1 m (Y) above the ground, with the crate starting from rest; correct final answer v = 8,85 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies on the frictionless section XY?",
        options: [
          "Conservation of mechanical energy: (Ep + Ek)X = (Ep + Ek)Y",
          "Conservation of momentum",
          "Work-energy theorem with a nonzero friction term",
          "Newton's second law alone",
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the speed of the crate at Y (X at 5 m, Y at 1 m above the ground, crate starts from rest at X)?",
        options: ["8,85 m·s⁻¹", "6,26 m·s⁻¹", "9,90 m·s⁻¹", "4,43 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "On reaching point Y, the crate continues to move down section YZ of the path. It experiences an average frictional force of 10 N and reaches point Z at a speed of 4 m·s⁻¹. Apart from friction, write down the names of TWO other forces that act on the crate while it moves down section YZ.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "Weight (gravitational force) and the normal force.",
    marking_notes: "Must name two of: weight/gravitational force/force of gravity, and normal force. 1 mark each.",
    marking_points: [
      { marks: 1, description: "weight / gravitational force / force of gravity", keywords: ["weight", "gravitational force", "gravity"] },
      { marks: 1, description: "normal force", keywords: ["normal force"] },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "In which direction does the net force act on the crate as it moves down section YZ? Write down only from 'Y to Z' or from 'Z to Y'.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "Z to Y. The crate decelerates from 8,85 m/s at Y to 4 m/s at Z, so the net force opposes its direction of motion (which is from Y to Z), i.e. the net force acts from Z to Y.",
    marking_notes: "Accept only 'Z to Y'.",
    steps: [
      {
        marks: 1,
        description: "The crate decelerates from 8,85 m/s at Y to 4 m/s at Z as it moves down the path from Y to Z. In which direction does the net force act?",
        options: ["From Z to Y (opposing the direction of motion, since the crate is decelerating)", "From Y to Z (in the direction of motion)", "There is no net force", "Perpendicular to the path"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Use the WORK-ENERGY THEOREM to calculate the length of section YZ.",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = ΔK: Ww + Wf = ½m(vf² - vi²). mgΔycosθ... using the vertical drop and friction opposing motion: (5)(9,8)(1)(1) + (10)Δx(-1) = ½(5)(4² - 8,85²), giving Δx = 20,48 m.",
    marking_notes: "Marking points: formula Wnet = ΔK (Ww + Wf = ½m(vf² - vi²)); correct substitution for the work done by gravity over the 1 m vertical drop from Y to Z; correct substitution for the work done by friction (10 N opposing motion over length Δx); correct final answer Δx = 20,48 m.",
    steps: [
      {
        marks: 1,
        description: "Which theorem applies, using the vertical drop (1 m) from Y to Z and the 10 N friction force?",
        options: [
          "Work-energy theorem: Wnet = ΔK (Ww + Wf = ½m(vf² − vi²))",
          "Conservation of mechanical energy (ignoring friction)",
          "Conservation of momentum",
          "F = ma directly, without any displacement",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the correct substitution (m = 5 kg, 1 m vertical drop Y to Z, friction = 10 N opposing motion, vY = 8,85 m/s, vZ = 4 m/s)?",
        options: [
          "(5)(9,8)(1)(1) + (10)Δx(-1) = ½(5)(4² − 8,85²)",
          "(5)(9,8)(4)(1) + (10)Δx(-1) = ½(5)(4² − 8,85²)",
          "(5)(9,8)(1)(1) + (10)Δx(1) = ½(5)(4² − 8,85²)",
          "(5)(9,8)(1)(1) + (10)Δx(-1) = ½(5)(8,85² − 4²)",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the length of section YZ?",
        options: ["20,48 m", "4,80 m", "10,24 m", "1,96 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Another crate of mass 10 kg now moves from rest down path XYZ. How will the velocity of this 10 kg crate at point Y compare to that of the 5 kg crate at Y? Write down only GREATER THAN, SMALLER THAN or EQUAL TO.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Equal to. On the frictionless section XY, the speed gained from conservation of mechanical energy (v = √(2gh)) is independent of mass, so both crates reach Y at the same speed.",
    marking_notes: "Accept only 'equal to'.",
    steps: [
      {
        marks: 1,
        description: "A 10 kg crate (instead of 5 kg) moves from rest down the frictionless section XY. How does its speed at Y compare to the 5 kg crate's speed at Y?",
        options: ["Equal to (speed from energy conservation on a frictionless incline is independent of mass)", "Greater than (heavier crate gains more speed)", "Smaller than (heavier crate gains less speed)", "Cannot be determined"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: DOPPLER EFFECT (9 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "An ambulance approaches a stationary observer at a constant speed of 10,6 m·s⁻¹, while its siren produces sound at a constant frequency of 954,3 Hz. The stationary observer measures the frequency of the sound as 985 Hz. Name the medical instrument that makes use of the Doppler effect.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Doppler flow meter.",
    marking_notes: "Accept only 'Doppler flow meter'.",
    steps: [
      {
        marks: 1,
        description: "Which medical instrument makes use of the Doppler effect?",
        options: ["Doppler flow meter", "Stethoscope", "Sphygmomanometer", "Electrocardiograph"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Calculate the velocity of sound.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "fL = v/(v - vs) × fs (source approaching stationary observer): 985 = v/(v - 10,6) × 954,3, giving v = 340,1 m·s⁻¹.",
    marking_notes: "Marking points: correct Doppler formula fL = v/(v ± vs) × fs; correct choice of sign for a source approaching a stationary observer (v - vs in the denominator); correct substitution of fL = 985 Hz, fs = 954,3 Hz, vs = 10,6 m/s; correct final answer v = 340,1 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which Doppler formula applies (source moving, observer stationary)?",
        options: ["fL = v/(v ± vs) × fs", "fL = (v ± vL)/v × fs", "fL = v × fs", "fL = fs/v"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which sign applies for a source approaching a stationary observer?",
        options: ["v − vs (denominator), since the source approaches", "v + vs (denominator), since the source recedes", "v − vs (numerator)", "No sign change needed"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the velocity of sound (fL = 985 Hz, fs = 954,3 Hz, vs = 10,6 m/s)?",
        options: ["340,1 m·s⁻¹", "330,4 m·s⁻¹", "349,7 m·s⁻¹", "954,3 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "How would the wavelength of the sound wave produced by the siren of the ambulance change if the frequency of the wave were higher than 954,3 Hz? Write down only INCREASES, DECREASES or STAYS THE SAME.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Decreases.",
    marking_notes: "Accept only 'decreases'.",
    steps: [
      {
        marks: 1,
        description: "If the siren's frequency were higher (at the same speed of sound), what would happen to its wavelength?",
        options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Give a reason for the answer to QUESTION 6.3.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "For a constant velocity of sound, wavelength is inversely proportional to frequency (λ ∝ 1/f, from v = fλ), so if the frequency increases, the wavelength decreases.",
    marking_notes: "Must refer to the velocity of sound being constant and wavelength being inversely proportional to frequency (λ ∝ 1/f), or equivalently state that as frequency increases, wavelength decreases, for a constant wave speed.",
    marking_points: [{ marks: 2, description: "for a constant speed of sound, wavelength is inversely proportional to frequency (λ ∝ 1/f), so wavelength decreases as frequency increases", keywords: ["inversely proportional", "constant", "wavelength decreases"] }],
  },

  // ============ QUESTION 7: DIFFRACTION (13 marks) ============
  // FLAG: Diffraction/interference is old-NSC content not covered by any of
  // the nine canonical CAPS topics; mapped throughout to the closest
  // existing "Waves, Sound and Light" bucket (doppler-effect).

  {
    number: "7", sub_number: "7.1",
    text: "Learners investigate how the broadness of the central bright band in a diffraction pattern changes as the wavelength of light changes. Define the term diffraction.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The bending (spreading) of waves around an obstacle/corner or through an opening/aperture.",
    marking_notes: "Must refer to the bending/spreading of waves around an obstacle/barrier/corner or through an opening/aperture.",
    marking_points: [{ marks: 2, description: "the bending/spreading of waves around an obstacle/corner or through an opening/aperture", keywords: ["bending", "spreading", "obstacle", "opening", "aperture"] }],
  },
  {
    number: "7", sub_number: "7.2",
    text: "In the first experiment, learners pass light from a monochromatic source through a single slit and obtain pattern P on a screen. In the second experiment, they pass light from a different monochromatic source through the same single slit and obtain pattern Q (pattern P has a wider central bright band than pattern Q, but is otherwise similar). Which ONE of the two patterns (P or Q) was obtained using the monochromatic light of a longer wavelength?",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "P. A wider central bright band corresponds to greater diffraction, which occurs for a longer wavelength (for the same slit width).",
    marking_notes: "Accept only 'P'.",
    image_url: `${IMG}/7-diffraction-patterns.png`,
    steps: [
      {
        marks: 1,
        description: "Pattern P has a wider central bright band than pattern Q (same slit width in both experiments). Which pattern used the longer wavelength?",
        options: ["P (a wider central band means more diffraction, which occurs for a longer wavelength)", "Q (a narrower central band means a longer wavelength)", "Both used the same wavelength", "Cannot be determined from the patterns"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "For this investigation (how the broadness of the central bright band changes as wavelength changes, slit width and screen distance kept constant), write down the dependent variable.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The broadness of the central bright band (equivalently: the diffraction pattern / angle of diffraction / degree of diffraction / sin θ / position of the first minimum).",
    marking_notes: "Accept any of: broadness of the central bright band, diffraction pattern, angle of diffraction, degree of diffraction, sin θ, position of the first minimum.",
    marking_points: [{ marks: 1, description: "broadness of the central bright band / diffraction pattern / angle of diffraction / degree of diffraction / sin θ / position of the first minimum", keywords: ["broadness", "diffraction pattern", "angle of diffraction", "sin"] }],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "For this investigation, write down the investigative question.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "What is the relationship between the broadness of the central band and the wavelength (of light used)?",
    marking_notes: "Must correctly identify the dependent and independent variables (broadness of the central band; wavelength) and correctly formulate a question about the relationship between them.",
    marking_points: [{ marks: 2, description: "what is the relationship between the broadness of the central band and the wavelength of light used", keywords: ["relationship", "broadness", "wavelength"] }],
  },
  {
    number: "7", sub_number: "7.4",
    text: "In one of their experiments, learners use light of wavelength 410 nm and a slit width of 5×10⁻⁶ m. Calculate the angle at which the SECOND MINIMUM will be observed on the screen.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "sin θ = mλ/a = (2)(410×10⁻⁹)/(5×10⁻⁶), giving θ = 9,44° (the approved memo also accepts 9,21° as an alternative final answer — see FLAG for review note at the top of this file).",
    marking_notes: "Marking points: formula sin θ = mλ/a; correct substitution with m = 2 (second minimum), λ = 410×10⁻⁹ m, a = 5×10⁻⁶ m; correct final answer θ = 9,44° (memo also accepts 9,21°).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the angle of a diffraction minimum for a single slit?",
        options: ["sin θ = mλ/a", "sin θ = a/(mλ)", "v = fλ", "sin θ = λ/a (ignoring the order m)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the correct substitution for the SECOND minimum (m = 2, λ = 410×10⁻⁹ m, a = 5×10⁻⁶ m)?",
        options: [
          "sin θ = (2)(410×10⁻⁹)/(5×10⁻⁶)",
          "sin θ = (1)(410×10⁻⁹)/(5×10⁻⁶)",
          "sin θ = (2)(5×10⁻⁶)/(410×10⁻⁹)",
          "sin θ = (2)(410×10⁻⁶)/(5×10⁻⁶)",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the angle θ of the second minimum?",
        options: ["9,44°", "4,72°", "18,88°", "16,40°"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "The single slit is now replaced with a double slit. Describe the pattern that will be observed on the screen.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Light (bright) and dark bands/fringes of equal width, evenly spaced (an interference pattern).",
    marking_notes: "Must refer to alternating light/bright and dark bands/fringes, of equal width.",
    marking_points: [
      { marks: 1, description: "light (bright) and dark bands/fringes", keywords: ["light", "dark bands", "bright"] },
      { marks: 1, description: "bands/fringes of equal width", keywords: ["equal width"] },
    ],
  },

  // ============ QUESTION 8: ELECTROSTATICS (14 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Point charge A has a charge of +16 μC. X is a point 12 cm from point charge A. Draw the electric field pattern produced by point charge A.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Field lines pointing radially outward from charge A in all directions (since A is positive).",
    marking_notes: "Marking points: correct shape (field lines radially around the charge); correct direction (pointing away from the positive charge).",
    marking_points: [
      { marks: 1, description: "correct shape — field lines radially around the charge", keywords: ["radially", "field lines"] },
      { marks: 1, description: "correct direction — field lines pointing away from the (positive) charge", keywords: ["away from", "direction"] },
    ],
  },
  {
    number: "8", sub_number: "8.2",
    text: "Is the electric field in QUESTION 8.1 UNIFORM or NON-UNIFORM?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Non-uniform. The field around a single point charge radiates outward and weakens with distance (E ∝ 1/r²), so it is not uniform.",
    marking_notes: "Accept only 'non-uniform'.",
    steps: [
      {
        marks: 1,
        description: "Is the electric field around a single point charge uniform or non-uniform?",
        options: ["Non-uniform", "Uniform", "Zero everywhere", "Undefined"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Calculate the magnitude and direction of the electric field at point X due to point charge A (+16 μC, X is 12 cm east of A).",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = kQ/r² = (9×10⁹)(16×10⁻⁶)/(0,12)² = 1×10⁷ N·C⁻¹, directed east (away from the positive charge A, towards X).",
    marking_notes: "Marking points: formula E = kQ/r²; correct substitution using Q = 16×10⁻⁶ C and r = 0,12 m; correct final magnitude 1×10⁷ N·C⁻¹; correct direction (east, away from the positive charge).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "F = kQ1Q2/r²", "E = V/d"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the electric field at X (Q = 16×10⁻⁶ C, r = 0,12 m)?",
        options: ["1×10⁷ N·C⁻¹", "1×10⁶ N·C⁻¹", "1,2×10⁷ N·C⁻¹", "9×10⁷ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the direction of the electric field at X?",
        options: ["East (away from the positive charge A, towards X)", "West (towards the positive charge A)", "North", "There is no defined direction"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.4",
    text: "Another point charge B is now placed at a distance of 35 cm from point charge A (on the same line through X). The net electric field at point X due to point charges A and B is 1×10⁷ N·C⁻¹ west. Is point charge B POSITIVE or NEGATIVE?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "Positive. Charge A alone produces 1×10⁷ N·C⁻¹ east at X; for the net field to become 1×10⁷ N·C⁻¹ west, charge B's field at X must point west and be larger in magnitude than A's — a field pointing away from B (west, back towards A/X) only happens if B is positive.",
    marking_notes: "Accept only 'positive'.",
    steps: [
      {
        marks: 1,
        description: "Charge A alone gives 1×10⁷ N·C⁻¹ east at X; with charge B added, the net field at X becomes 1×10⁷ N·C⁻¹ west. Is B positive or negative?",
        options: ["Positive (its field must point away from B, i.e. westward at X, overpowering A's eastward field)", "Negative (its field would point towards B, i.e. eastward at X, reinforcing A's field)", "Cannot be determined", "Zero charge"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Calculate the magnitude of point charge B.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "EA + EB = Enet (west positive): -1×10⁷ + EB = 1×10⁷, so EB = 2×10⁷ N·C⁻¹. Then EB = kQB/r² with r = 0,23 m (distance from B to X): 2×10⁷ = (9×10⁹)QB/(0,23)², giving QB = 1,18×10⁻⁴ C.",
    marking_notes: "Marking points: correct combination of fields EA + EB = Enet to find EB = 2×10⁷ N·C⁻¹; formula EB = kQB/r²; correct substitution using r = 0,23 m (the distance from B to X, i.e. 35 cm − 12 cm); correct final answer QB = 1,18×10⁻⁴ C.",
    steps: [
      {
        marks: 1,
        description: "Which equation combines the fields of A and B to find EB, given Enet at X?",
        options: ["EA + EB = Enet", "EA − EB = Enet", "EA × EB = Enet", "EB = Enet (ignore EA)"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is EB (taking west as positive, EA = -1×10⁷ N·C⁻¹, Enet = 1×10⁷ N·C⁻¹ west)?",
        options: ["2×10⁷ N·C⁻¹", "1×10⁷ N·C⁻¹", "0", "-2×10⁷ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct distance r from charge B to point X (A to B is 35 cm; A to X is 12 cm)?",
        options: ["0,23 m", "0,35 m", "0,12 m", "0,47 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of charge B?",
        options: ["1,18×10⁻⁴ C", "2,00×10⁻⁴ C", "5,88×10⁻⁵ C", "1,18×10⁻³ C"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 9: ELECTRIC CIRCUITS (16 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A learner wants to use a 12 V battery with an internal resistance of 1 Ω to operate an electrical device of resistance 5 Ω. He uses a circuit with the device, the battery, resistors (4 Ω, Rx, 3 Ω, 9 Ω) and switch S, to obtain the desired potential difference. Explain, in words, the meaning of an emf of 12 V.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "12 J of energy are transferred to (work is done on) each coulomb (of charge) passing through the battery.",
    marking_notes: "Must refer to 12 J of energy being transferred to / work done on each coulomb of charge passing through the battery.",
    marking_points: [{ marks: 2, description: "12 J of energy is transferred to / work done on each coulomb of charge passing through the battery", keywords: ["12 j", "each coulomb", "per coulomb"] }],
    image_url: `${IMG}/9-circuit.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "When switch S is closed, the device functions at its maximum power of 5 W. Calculate the current that passes through the electrical device.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = I²R: 5 = I²(5), giving I = 1 A.",
    marking_notes: "Marking points: formula P = I²R (or an equivalent valid route via P = V²/R and V = IR); correct substitution using P = 5 W and R = 5 Ω; correct final answer I = 1 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the device's maximum power, its resistance and the current through it?",
        options: ["P = I²R", "P = IR", "P = R/I", "I = P + R"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the current through the electrical device (P = 5 W, R = 5 Ω)?",
        options: ["1 A", "25 A", "0,2 A", "5 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Calculate the resistance of resistor Rx.",
    marks: 7, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "emf = I(R + r): 12 = (1)(R + 1), giving R = 11 Ω, the total external resistance. The 5 Ω device branch is in series with the parallel combination of (4 Ω + S + Rx) and the (3 Ω + 9 Ω) branch, so Rp = 11 − 5 = 6 Ω. Then 1/Rp = 1/12 + 1/(4 + Rx): 1/6 = 1/12 + 1/(4 + Rx), giving 12 = 4 + Rx, so Rx = 8 Ω.",
    marking_notes: "Marking points: formula emf = I(R + r); correct substitution to find total external resistance R = 11 Ω; correct identification of the parallel resistance Rp = R − 5 = 6 Ω; correct parallel-resistance equation 1/Rp = 1/12 + 1/(4 + Rx); correct final answer Rx = 8 Ω. (7 marks total across these steps.)",
    steps: [
      {
        marks: 2,
        description: "Using emf = I(R + r) with I = 1 A (from 9.2), emf = 12 V, r = 1 Ω, what is the total external resistance R?",
        options: ["11 Ω", "12 Ω", "13 Ω", "6 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "The 5 Ω device is in series with the parallel combination of the two branches. What is the parallel resistance Rp (= total external R minus the 5 Ω device)?",
        options: ["6 Ω", "11 Ω", "4 Ω", "9 Ω"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "Using 1/Rp = 1/12 + 1/(4 + Rx) with Rp = 6 Ω, what is Rx?",
        options: ["8 Ω", "4 Ω", "12 Ω", "2 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "Switch S is now opened. Will the device still function at maximum power? Write down YES or NO. Explain the answer without doing any calculations.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "No. Opening switch S removes the Rx branch, so the total (external) resistance R increases. A larger total resistance means a smaller current I from the battery. For the device (a fixed resistance), a smaller current means less power dissipated (P = I²R), so the device no longer operates at the maximum power found in 9.2.",
    marking_notes: "Must state 'No' and explain: opening S increases the total resistance R; this decreases the current I; for a constant device resistance, the power P = I²R therefore decreases (below the maximum-power value).",
    marking_points: [
      { marks: 1, description: "states 'No'", keywords: ["no"] },
      { marks: 1, description: "total resistance (R) increases when S opens", keywords: ["resistance increases", "total resistance"] },
      { marks: 1, description: "current (I) decreases", keywords: ["current decreases"] },
      { marks: 1, description: "for a constant device resistance, power (P = I²R) decreases", keywords: ["power decreases", "i2r"] },
    ],
  },

  // ============ QUESTION 10: ELECTRODYNAMICS (AC GENERATOR) (14 marks) ============

  {
    number: "10", sub_number: "10.1.1",
    text: "The simplified sketch represents an AC generator, with main components labelled A, B, C and D (C is the rotating coil between the N and S poles; D points to the magnet; A and B point to the two ring/brush contacts below the coil). Write down the name of component A.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Slip rings.",
    marking_notes: "Accept only 'slip rings'.",
    image_url: `${IMG}/10-ac-generator.png`,
    steps: [
      {
        marks: 1,
        description: "In this AC generator sketch, component A points to the two continuous rings the coil's ends are connected to. What is component A called?",
        options: ["Slip rings", "Commutator", "Brushes", "Armature"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "Write down the name of component B (the contacts that press against the slip rings and connect the generator to the external circuit).",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Brush(es).",
    marking_notes: "Accept only 'brush(es)'.",
    steps: [
      {
        marks: 1,
        description: "What is component B, the fixed contact that presses against the slip rings, called?",
        options: ["Brush(es)", "Slip rings", "Commutator", "Field coil"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.2",
    text: "Write down the function of component B.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "Maintains electrical contact with the slip rings, to take the current out of (or into) the coil.",
    marking_notes: "Accept either: maintains electrical contact with the slip rings, OR to take current out of/into the coil.",
    marking_points: [{ marks: 1, description: "maintains electrical contact with the slip rings / takes current out of (into) the coil", keywords: ["electrical contact", "slip rings", "current out"] }],
  },
  {
    number: "10", sub_number: "10.3",
    text: "State the energy conversion which takes place in an AC generator.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Mechanical (kinetic) energy is converted to electrical energy.",
    marking_notes: "Accept only 'mechanical/kinetic energy to electrical energy'.",
    steps: [
      {
        marks: 1,
        description: "What energy conversion takes place in an AC generator?",
        options: ["Mechanical/kinetic energy to electrical energy", "Electrical energy to mechanical energy", "Chemical energy to electrical energy", "Electrical energy to heat energy only"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.4",
    text: "A similar coil is rotated in a magnetic field. The current-time graph shows the alternating current produced: a sine wave with amplitude 21,21 A, crossing zero at t = 0,01 s and t = 0,02 s, and completing a further half-cycle by t = 0,03 s. How many rotations are made by the coil in 0,03 seconds?",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "1½ rotations (one full cycle takes 0,02 s, so 0,03 s is 1,5 cycles/rotations).",
    marking_notes: "Accept only '1½' (or '1,5').",
    image_url: `${IMG}/10-current-time-graph.png`,
    steps: [
      {
        marks: 1,
        description: "The current completes one full cycle every 0,02 s. How many rotations does the coil make in 0,03 s?",
        options: ["1½", "1", "2", "3"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.5",
    text: "Calculate the frequency of the alternating current.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "f = 1/T = 1/0,02, giving f = 50 Hz.",
    marking_notes: "Marking points: formula f = 1/T (or f = number of cycles / time); correct substitution using T = 0,02 s; correct final answer f = 50 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives frequency from the period of the current-time graph?",
        options: ["f = 1/T", "f = T", "f = 2T", "f = T/2"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the frequency (T = 0,02 s)?",
        options: ["50 Hz", "20 Hz", "100 Hz", "0,02 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.6",
    text: "Will the plane of the coil be PERPENDICULAR TO or PARALLEL TO the magnetic field at t = 0,015 s?",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "Parallel to. At t = 0,015 s the current is at its (negative) peak magnitude (-21,21 A), which occurs when the rate of change of flux — and hence the induced emf/current — is maximum, i.e. when the plane of the coil is parallel to the field.",
    marking_notes: "Accept only 'parallel to'.",
    steps: [
      {
        marks: 1,
        description: "At t = 0,015 s the current graph is at its peak magnitude. At this instant, is the plane of the coil perpendicular to or parallel to the magnetic field?",
        options: ["Parallel to (maximum rate of change of flux, maximum induced current)", "Perpendicular to (zero rate of change of flux, zero induced current)", "Neither — the coil is stationary", "Cannot be determined"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.7",
    text: "If the generator produces a maximum potential difference of 311 V, calculate its average power output.",
    marks: 5, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Pave = VrmsIrms = (Vmax/√2)(Imax/√2) = (311/√2)(21,21/√2), giving Pave = 3 298,16 W.",
    marking_notes: "Marking points: formula Pave = VrmsIrms together with Vrms = Vmax/√2 and Irms = Imax/√2 (1 mark for both formulae); correct substitution using Vmax = 311 V and Imax = 21,21 A; correct final answer Pave = 3 298,16 W (accept the range 3 298,13 – 3 299,18 W).",
    steps: [
      {
        marks: 1,
        description: "Which formulae give the average power from the maximum voltage and current of an AC supply?",
        options: [
          "Pave = VrmsIrms, with Vrms = Vmax/√2 and Irms = Imax/√2",
          "Pave = VmaxImax directly (no √2 factor)",
          "Pave = Vmax + Imax",
          "Pave = Vmax/Imax",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What are Vrms and Irms (Vmax = 311 V, Imax = 21,21 A)?",
        options: ["Vrms = 219,91 V, Irms = 14,998 A", "Vrms = 311 V, Irms = 21,21 A", "Vrms = 155,5 V, Irms = 10,605 A", "Vrms = 439,7 V, Irms = 30,0 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the average power output?",
        options: ["3 298,16 W", "6 596,31 W", "1 649,08 W", "659,63 W"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 11: PHOTOELECTRIC EFFECT (12 marks) ============

  {
    number: "11", sub_number: "11.1.1",
    text: "In the simplified diagram, light is incident on the emitter of a photocell. The emitted photoelectrons move towards the collector and the ammeter registers a reading. Name the phenomenon illustrated above.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The photoelectric effect.",
    marking_notes: "Accept only 'photoelectric effect'.",
    steps: [
      {
        marks: 1,
        description: "Light strikes a metal emitter, electrons are released and flow to a collector, registering a current. What phenomenon is this?",
        options: ["Photoelectric effect", "Doppler effect", "Diffraction", "Electromagnetic induction"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "The work function of the metal used as emitter is 8,0×10⁻¹⁹ J. The incident light has a wavelength of 200 nm. Calculate the maximum speed at which an electron can be emitted.",
    marks: 5, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W0 + Ek: hc/λ = W0 + ½mv². (6,63×10⁻³⁴)(3×10⁸)/(200×10⁻⁹) = 8×10⁻¹⁹ + ½(9,11×10⁻³¹)v², giving v = 6,53×10⁵ m·s⁻¹.",
    marking_notes: "Marking points: formula E = W0 + Ek (hf = hf0 + Ek, or hc/λ = W0 + ½mv²); correct substitution for the incident photon energy using λ = 200×10⁻⁹ m; correct substitution of W0 = 8,0×10⁻¹⁹ J and the electron mass; correct final answer v = 6,53×10⁵ m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which equation applies (photoelectric effect, maximum kinetic energy of an emitted electron)?",
        options: ["E = W0 + Ek (hc/λ = W0 + ½mv²)", "E = W0 − Ek", "E = ½mv² only (ignore W0)", "W0 = hc/λ (ignore Ek)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the energy of the incident photon (λ = 200×10⁻⁹ m)?",
        options: ["9,95×10⁻¹⁹ J", "8,00×10⁻¹⁹ J", "1,33×10⁻²⁷ J", "6,63×10⁻³⁴ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the maximum speed of the emitted electron (W0 = 8,0×10⁻¹⁹ J, me = 9,11×10⁻³¹ kg)?",
        options: ["6,53×10⁵ m·s⁻¹", "1,96×10⁵ m·s⁻¹", "4,27×10¹¹ m·s⁻¹", "1,33×10⁻¹⁹ m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "11", sub_number: "11.1.3",
    text: "Incident light of a higher frequency is now used. How will this change affect the maximum kinetic energy of the electron emitted in QUESTION 11.1.2? Write down only INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Increases. By Ek(max) = hf - W0, a higher incident frequency f (with W0 fixed for the same metal) gives a greater maximum kinetic energy.",
    marking_notes: "Accept only 'increases'.",
    steps: [
      {
        marks: 1,
        description: "If light of a higher frequency is used on the same metal, how is the maximum kinetic energy of the emitted electron affected?",
        options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "11", sub_number: "11.1.4",
    text: "The intensity of the incident light is now increased. How will this change affect the speed of the electron calculated in QUESTION 11.1.2? Write down INCREASES, DECREASES or REMAINS THE SAME. Give a reason for the answer.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same. Intensity only affects the number of photoelectrons emitted per second (the photocurrent), not their maximum kinetic energy/speed, which depends only on the frequency of the incident light (for a given metal).",
    marking_notes: "Must state 'remains the same' and a valid reason: intensity only affects the number of photoelectrons emitted per second, OR only the frequency/wavelength of the incident light affects the maximum kinetic energy.",
    marking_points: [
      { marks: 1, description: "remains the same", keywords: ["remains the same"] },
      { marks: 1, description: "intensity only affects the number of photoelectrons emitted per second (not their maximum kinetic energy/speed, which depends only on frequency)", keywords: ["number of photoelectrons", "per second", "only the frequency"] },
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "A metal worker places two iron rods, A and B, in a furnace. After a while he observes that A glows deep red while B glows orange. Which ONE of the rods (A or B) radiates more energy? Give a reason for the answer.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "B. Orange light has a higher frequency (shorter wavelength) than red light, and by E = hf, a higher frequency means the rod is radiating photons of greater energy.",
    marking_notes: "Must state 'B' and a valid reason: orange light has a higher frequency than red light (or equivalently, a smaller wavelength than red light).",
    marking_points: [
      { marks: 1, description: "B", keywords: ["b"] },
      { marks: 1, description: "orange light has a higher frequency / smaller wavelength than red light", keywords: ["higher frequency", "smaller wavelength"] },
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Neon signs illuminate many buildings. What type of spectrum is produced by neon signs?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "(Line) emission spectrum.",
    marking_notes: "Accept only 'line emission (spectrum)'.",
    steps: [
      {
        marks: 1,
        description: "What type of spectrum is produced by neon signs (a gas excited by an electric current, emitting light at specific wavelengths)?",
        options: ["Line emission spectrum", "Continuous spectrum", "Absorption spectrum", "Band spectrum"],
        correctIndex: 0,
      },
    ],
  },
];

// No exam_schedule entries here — mirrors physical-sciences-p1-nov2025.ts and
// physical-sciences-p1-nov2024.ts.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
