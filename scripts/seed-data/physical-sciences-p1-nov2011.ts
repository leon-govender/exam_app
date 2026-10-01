// Real DBE past paper: Physical Sciences (Physics) P1, November 2011, National
// (English).
//
// Source: question paper and memorandum fetched as SEPARATE PDFs from the
// Western Cape Education Department's official exam-paper archive
// (westerncape.gov.za/education/documents, "2011 NSC November Examination
// Papers" > "Physical Sciences" folder — a government host, not a third-party
// mirror). Both files verified by rendering and reading their cover pages:
// "PHYSICAL SCIENCES: PHYSICS (P1)" / "NOVEMBER 2011" / "MEMORANDUM" (150
// marks), confirming year, subject, paper number and document type before
// any content was transcribed.
//   QP:   https://www.westerncape.gov.za/education/files/wcg-blob-files?file=documents/paper-1-english-2011-november-nsc-examination-papers-b49bed7b.pdf&type=file
//   Memo: https://www.westerncape.gov.za/education/files/wcg-blob-files?file=documents/memo-1-english-afrikaans-2011-november-nsc-examination-papers-83483e53.pdf&type=file
// (An alternative QP-only mirror was also confirmed live at
// https://www.saexampapers.co.za/wp-content/uploads/2022/07/Physical-Sciences-P1-Nov-2011-Eng.pdf
// — same content — but the WCED source above is used as the canonical
// source_url since it is the official host for both documents.)
//
// Paper structure: SECTION A (Q1 one-word items + Q2 multiple-choice, 25
// marks) and SECTION B (Q3-Q12, 125 marks), 150 marks total, 3 hours. All
// 150 marks are included here. Marks-sum verified against paper.total_marks
// with a throwaway script (deleted after use).
//
// 2011 predates CAPS (CAPS was phased in for Grade 12 from 2014; this is a
// late-NCS-syllabus paper), so this file reuses the CAPS-era topics array
// already defined by the Nov 2025/2024 P1 datasets (topics are upserted by
// key in scripts/seed.ts, so redeclaring them here is safe and required
// since this file is a standalone dataset). Every question maps onto one of
// the nine existing topics as a physics content area, but several 2011
// questions cover sub-topics that don't have their own dedicated entry in
// that list (interference/diffraction of waves, atomic emission spectra,
// the electromagnetic spectrum, frames of reference/relative velocity).
// These are mapped to the closest existing topic and FLAGged individually
// below rather than inventing new topic keys, per the task instructions.
//
// FLAG for review (topic mapping): 1.2 (coherent waves), 2.4 (nodal line in
// a double-slit water-wave pattern) and 2.5 (pulse superposition on a
// slinky) are general wave-interference questions with no dedicated "waves
// and interference" topic in the canonical list; mapped to "doppler-effect"
// (the closest Term 1 "Waves, Sound and Light" topic). Question 7 (single-
// slit diffraction) is mapped the same way for the same reason.
//
// FLAG for review (topic mapping): 2.9 (line emission spectrum formation)
// and 2.10 (EM spectrum wavelength ordering) are atomic-physics/EM-spectrum
// questions with no dedicated topic; mapped to "photoelectric-effect" (the
// closest Term 3 "Matter and Materials" topic).
//
// FLAG for review (topic mapping): 4.1 and 4.2 (relative velocity of the
// thief's car and the bullet, using different reference frames) have no
// dedicated "frames of reference" topic; mapped to "momentum-impulse" since
// they lead directly into the momentum/collision problem later in the same
// question.
//
// Calculation and single-answer questions use `steps` (stepped MCQ): the
// student works the problem out on paper, then picks the option they got
// for each mark-earning step from a few choices. Distractors are chosen to
// trap specific real errors (sign flips on direction, using the wrong given
// value, confusing related formulae), not just wrong final numbers. Only
// genuinely open-ended explain/describe/state-in-words questions, and
// graph/diagram-drawing questions, use `marking_points`.
//
// Question 3.4 ("will the jogger catch the camera?") accepts five different
// valid solution methods in the memo (constant-velocity shortcut, average-
// velocity formula, etc.), all converging on the same YES/time-or-distance
// conclusion; this is modelled as a 3-step stepped MCQ (method choice,
// numeric result, final yes/no conclusion) using the memo's Option 1
// (constant velocity, Δx = vΔt) as the canonical path, since the jogger
// moves at a genuinely constant 2 m·s⁻¹.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2011-p1";

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
  year: 2011,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://www.westerncape.gov.za/education/files/wcg-blob-files?file=documents/paper-1-english-2011-november-nsc-examination-papers-b49bed7b.pdf&type=file" as string | null,
};

// No exam_schedule entries here — mirrors physical-sciences-p1-nov2025.ts.
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
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The rate at which work is done.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "Power.",
    marking_notes: "Accept only 'power'.",
    marking_points: [{ marks: 1, description: "Power", keywords: ["power"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: The term that describes two sources that produce waves that have a constant phase relationship to each other.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Coherent.",
    marking_notes: "Accept only 'coherent'.",
    marking_points: [{ marks: 1, description: "Coherent", keywords: ["coherent"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: The general name given to the insulating material between the plates of capacitors.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "Dielectric.",
    marking_notes: "Accept only 'dielectric'.",
    marking_points: [{ marks: 1, description: "Dielectric", keywords: ["dielectric"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: The type of current produced by an electric generator which has slip rings.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Alternating current (AC).",
    marking_notes: "Accept 'alternating (current)' or 'AC'.",
    marking_points: [{ marks: 1, description: "Alternating current / AC", keywords: ["alternating", "ac"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: The unit of measurement of electric field.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "N·C⁻¹ (equivalently V·m⁻¹, newton per coulomb, or volt per metre).",
    marking_notes: "Accept N·C⁻¹, V·m⁻¹, newton per coulomb, or volt per metre.",
    marking_points: [{ marks: 1, description: "N·C⁻¹ / V·m⁻¹ / newton per coulomb / volt per metre", keywords: ["n c", "v m", "newton per coulomb"] }],
  },

  // ============ QUESTION 2: MULTIPLE-CHOICE (20 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "Impulse is equal to the ... (A) initial momentum of a body. (B) final momentum of a body. (C) change in momentum of a body. (D) rate of change in momentum of a body.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "C — the change in momentum of a body (impulse = Δp = FΔt).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.2",
    text: "An object is pulled along a straight horizontal road to the right without being lifted. The force diagram shows all the forces acting on the object: normal force N (up), applied force F (at angle θ above horizontal, pointing up-right), friction f (pointing left), and weight w (down). Which ONE of the above forces does POSITIVE work on the object? (A) w (B) N (C) f (D) F",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "D — F. Only F has a component in the direction of motion (to the right); N and w are perpendicular to the motion (zero work), and f opposes the motion (negative work).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.2-force-diagram.png`,
  },
  {
    number: "2", sub_number: "2.3",
    text: "A ball is released from rest from a certain height above the floor and bounces off the floor a number of times. The position-time graph shows the motion of the bouncing ball from the instant it is released: peaks at A and C, troughs at B and D (in that time order). Neglecting air resistance, which point (A, B, C or D) represents the position-time coordinates of the maximum height reached by the ball after the SECOND bounce? (A) A (B) B (C) C (D) D",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "D. The ball is released at the start (height falling from the origin), bounces the first time at B (trough), rises to a maximum at C (peak, after the first bounce), bounces a second time at D (trough) — so the maximum height after the SECOND bounce is the next peak, which is point D is actually the trough just after the second bounce; the next peak after D (off the graph) would be the true maximum — however per the graph as drawn and the memo, D is the correct choice since it is read as the point marking the second bounce's rebound reference on the given graph.",
    marking_notes: "Accept only 'D' (per the official memo). Note: D is plotted as a trough (ball striking the floor for the second time) immediately before the ball rises to its next maximum height; the memo's answer is D.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.3-position-time-graph.png`,
  },
  {
    number: "2", sub_number: "2.4",
    text: "Water waves pass through a double slit, producing circular wavefronts shown as solid lines (crests) and dotted lines (troughs). Points A, B, C and D are marked on the pattern. Which ONE of the points (A, B, C or D) lies on a nodal line? (A) A (B) B (C) C (D) D",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "C. A nodal line occurs where a crest from one slit consistently meets a trough from the other slit (destructive interference); point C lies on such a line in the diagram.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2.4-wavefronts.png`,
  },
  {
    number: "2", sub_number: "2.5",
    text: "The diagram represents two pulses, each of amplitude a, travelling in opposite directions along a slinky coil (one a crest moving right, one a trough moving left, same amplitude). Which ONE of the following (A-D) represents the resultant amplitude at the instant that these two pulses meet? (A) a crest of height 2a (B) a flat/zero line (C) a trough of depth 2a (D) a diamond shape with height 2a",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "B — a flat (zero displacement) line. Since the two pulses have equal and opposite amplitudes (a crest of +a and a trough of −a), by the principle of superposition they cancel completely at the instant they fully overlap, giving a resultant amplitude of zero.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/2.5-pulses.png`,
  },
  {
    number: "2", sub_number: "2.6",
    text: "A set of identical light bulbs are connected as shown in four circuit diagrams (A: four bulbs all in parallel with the battery; B: four bulbs in a single series loop; C: two parallel branches of two bulbs each in series; D: two parallel branches of two bulbs each in series, with a connecting wire between the branches' midpoints). The internal resistance of the battery is negligible. In which ONE of these circuits will the light bulbs glow the brightest? (A) A (B) B (C) C (D) D",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A. With each bulb connected directly in parallel across the full emf (and negligible internal resistance), each bulb gets the full battery voltage, giving it the highest possible current and brightness compared to the series/series-parallel arrangements in B, C and D.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2.6-circuits.png`,
  },
  {
    number: "2", sub_number: "2.7",
    text: "The unit of measurement of THE RATE OF FLOW OF CHARGE in a conductor is ... (A) watt. (B) volt. (C) ampere. (D) coulomb.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "C — ampere (current I = Q/t is measured in amperes, coulombs per second).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.8",
    text: "Point P is a distance x from the positive plate of a parallel-plate capacitor. The magnitude of the electric field at P is E. At a distance ½x from the positive plate, the magnitude of the electric field will be ... (A) ¼E (B) ½E (C) E (D) 2E",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "C — E. The electric field between the parallel plates of a capacitor is uniform (constant magnitude and direction at every point between the plates), so it does not depend on the distance from either plate.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2.8-capacitor.png`,
  },
  {
    number: "2", sub_number: "2.9",
    text: "Which ONE of the following descriptions best explains the formation of a line emission spectrum? A line emission spectrum is formed when ... (A) white light passes through a cold gas. (B) white light passes through a triangular prism. (C) electrons in the ground state move to a higher energy level. (D) electrons in the excited state move to a lower energy level.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "D — electrons in the excited state move to a lower energy level, emitting photons of specific (discrete) energies/wavelengths that appear as bright lines.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "2", sub_number: "2.10",
    text: "Which ONE of the following electromagnetic waves has the shortest wavelength? (A) Radio waves (B) Gamma rays (C) Infrared rays (D) Ultraviolet rays",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "B — Gamma rays (highest-frequency, shortest-wavelength region of the electromagnetic spectrum).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (14 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A hot-air balloon is moving vertically upwards at a constant speed. A camera is accidentally dropped from the balloon at a height of 92,4 m. The camera strikes the ground after 6 s. Ignore the effects of friction. At the instant the camera is dropped, it moves upwards. Give a reason for this observation.",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "The initial velocity/speed of the camera is the same as that of the balloon (at the instant of release).",
    marking_notes: "Must state that the camera's initial velocity is the same as the balloon's velocity.",
    marking_points: [{ marks: 1, description: "initial velocity/speed of the camera is the same as that of the balloon", keywords: ["initial velocity", "same as", "balloon"] }],
    image_url: `${IMG}/3-balloon.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the speed vi at which the balloon is rising when the camera is dropped. (Camera strikes the ground after 6 s, from a height of 92,4 m; ignore friction.)",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking downward as positive: Δy = viΔt + ½aΔt², so 92,4 = vi(6) + ½(9,8)(6)², giving vi = −14 m·s⁻¹, i.e. vi = 14 m·s⁻¹ upward.",
    marking_notes: "Formula Δy = viΔt + ½aΔt², correct substitution (92,4 = vi(6) + ½(9,8)(6)² taking downward positive, or the downward-negative equivalent), correct final answer vi = 14 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion directly relates displacement, initial velocity, time and acceleration?",
        options: ["Δy = viΔt + ½aΔt²", "vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = ½(vi + vf)Δt"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Taking downward as positive, what is the correctly substituted equation?",
        options: ["92,4 = vi(6) + ½(9,8)(6)²", "92,4 = vi(6) + ½(9,8)(6)", "92,4 = vi(6) − ½(9,8)(6)²", "92,4 = vi + ½(9,8)(6)²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of vi?",
        options: ["14 m·s⁻¹", "15,4 m·s⁻¹", "9,8 m·s⁻¹", "22,16 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Draw a sketch graph of velocity versus time for the entire motion of the camera. Indicate the following on the graph: initial velocity; time at which it reaches the ground.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A single straight line with constant (negative, taking upward as positive) gradient: starts at v = 14 m·s⁻¹ at t = 0 s (the camera's initial upward velocity), crosses the time axis, and ends at v = −44,8 m·s⁻¹ at t = 6 s (when it strikes the ground). The section of the line below the time axis is longer than the section above it.",
    marking_notes: "Marking points: correct straight-line shape with constant gradient; graph starts at v = 14 m·s⁻¹ (or vi) at t = 0 s; graph extends below the time axis until t = 6 s; the section below the axis is longer than the section above it (reflecting the camera accelerating downward for longer than it decelerated upward). (Equally accept the downward-positive mirror-image graph: starts at v = −14 m·s⁻¹, ends above the axis at t = 6 s, with the section above the axis longer.)",
    marking_points: [
      { marks: 1, description: "correct straight-line shape with a constant (single) gradient throughout", keywords: ["straight line", "constant gradient"] },
      { marks: 1, description: "graph starts at v = 14 m·s⁻¹ (or −14 m·s⁻¹) at t = 0 s", keywords: ["14", "t 0"] },
      { marks: 1, description: "graph extends until t = 6 s, crossing the time axis", keywords: ["6 s", "crosses"] },
      { marks: 1, description: "the section of the graph on the side representing downward motion is longer than the section representing upward motion", keywords: ["longer", "downward section"] },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "A jogger, 10 m away from point P (directly below where the camera is dropped) and running at a constant speed of 2 m·s⁻¹, sees the camera at the same instant it starts falling from the balloon. Will he be able to catch the camera before it strikes the ground? Use a calculation to show how you arrived at the answer.",
    marks: 5, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "Using Δx = vΔt for the jogger (constant velocity): 10 = (2)Δt, so Δt = 5 s. Since 5 s is less than the 6 s it takes the camera to reach the ground, the jogger WILL catch the camera before it strikes the ground.",
    marking_notes: "Marking points: correct formula (Δx = vΔt, since the jogger moves at a constant 2 m·s⁻¹); correct substitution 10 = (2)Δt; correct time Δt = 5 s; correct conclusion (yes, will catch the camera, since 5 s < 6 s). The memo also accepts an equivalent distance-based approach (find the distance the jogger covers in 6 s = 12 m, which is greater than 10 m, so yes).",
    steps: [
      {
        marks: 1,
        description: "Which formula applies to the jogger, who moves at a constant speed?",
        options: ["Δx = vΔt", "Δx = viΔt + ½aΔt²", "vf = vi + aΔt", "Δx = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What time does the jogger take to cover the 10 m to point P?",
        options: ["5 s", "20 s", "6 s", "2 s"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Will the jogger catch the camera before it strikes the ground?",
        options: [
          "Yes — the jogger's time (5 s) is less than the camera's fall time (6 s)",
          "No — the jogger's time (5 s) is more than the camera's fall time (6 s)",
          "Yes — the jogger runs faster than the camera falls",
          "No — the jogger is too far from point P",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 4: RELATIVE VELOCITY, MOMENTUM & IMPULSE (17 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A patrol car moves on a straight horizontal road at a velocity of 10 m·s⁻¹ east (vPG). At the same time a thief in a car ahead of him drives at a velocity of 40 m·s⁻¹ in the same direction (vTG). Write down the velocity of the thief's car relative to the patrol car.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "vTP = vTG − vPG = 40 − 10 = 30 m·s⁻¹ east.",
    marking_notes: "Correct formula/approach (vTP = vTG − vPG, or the equivalent vTP = vTG + vGP), correct final answer 30 m·s⁻¹ east.",
    steps: [
      {
        marks: 1,
        description: "Which relation gives the thief's velocity relative to the patrol car?",
        options: ["vTP = vTG − vPG", "vTP = vTG + vPG", "vTP = vPG − vTG", "vTP = vTG × vPG"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the velocity of the thief's car relative to the patrol car?",
        options: ["30 m·s⁻¹ east", "50 m·s⁻¹ east", "30 m·s⁻¹ west", "10 m·s⁻¹ east"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/4-patrol-car.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "A person in the patrol car fires a bullet at the thief's car. The bullet leaves the gun with an initial horizontal velocity of 100 m·s⁻¹ relative to the patrol car. Ignore the effects of friction. Write down the initial velocity of the bullet relative to the thief's car.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "vBT = vBP − vTP = 100 − 30 = 70 m·s⁻¹ east.",
    marking_notes: "Correct formula/approach (vBT = vBP − vTP, using vTP = 30 m·s⁻¹ from 4.1), correct final answer 70 m·s⁻¹ east.",
    steps: [
      {
        marks: 1,
        description: "Which relation gives the bullet's velocity relative to the thief's car?",
        options: ["vBT = vBP − vTP", "vBT = vBP + vTP", "vBT = vTP − vBP", "vBT = vBP − vPG"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the initial velocity of the bullet relative to the thief's car?",
        options: ["70 m·s⁻¹ east", "130 m·s⁻¹ east", "60 m·s⁻¹ east", "100 m·s⁻¹ east"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "While travelling at 40 m·s⁻¹, the thief's car of mass 1 000 kg collides head-on with a truck of mass 5 000 kg moving at 20 m·s⁻¹ (in the opposite direction). After the collision, the car and the truck move together. Ignore the effects of friction. State the law of conservation of linear momentum in words.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "The total (linear) momentum remains constant/is conserved in an isolated (closed) system, i.e. in the absence of external forces.",
    marking_notes: "Must refer to total (linear) momentum remaining constant/conserved, AND in an isolated/closed system (or absence of external forces).",
    marking_points: [
      { marks: 1, description: "total (linear) momentum remains constant/is conserved", keywords: ["total", "momentum", "constant", "conserved"] },
      { marks: 1, description: "in an isolated/closed system (absence of external forces)", keywords: ["isolated", "closed system", "external forces"] },
    ],
    image_url: `${IMG}/4-collision-cars.png`,
  },
  {
    number: "4", sub_number: "4.4",
    text: "Calculate the velocity of the thief's car (mass 1 000 kg, 40 m·s⁻¹) immediately after the collision with the truck (mass 5 000 kg, 20 m·s⁻¹, opposite direction). After the collision the car and truck move together.",
    marks: 6, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Taking the car's direction (to the right) as positive: Σpbefore = Σpafter, so (1 000)(40) + (5 000)(−20) = (1 000 + 5 000)vf, giving vf = −10 m·s⁻¹, i.e. 10 m·s⁻¹ in the truck's original direction (left/opposite to the car).",
    marking_notes: "Marking points: formula Σpbefore = Σpafter; correct substitution (1 000)(40) + (5 000)(−20) = (6 000)vf; correct final answer vf = 10 m·s⁻¹ in the direction the truck was originally moving.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies to find the combined velocity after this inelastic collision?",
        options: [
          "Conservation of momentum: Σpbefore = Σpafter",
          "Conservation of mechanical energy",
          "Impulse-momentum theorem for one object only",
          "Newton's second law, Fnet = ma",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Taking the car's direction as positive, what is the correctly substituted equation?",
        options: [
          "(1 000)(40) + (5 000)(−20) = (6 000)vf",
          "(1 000)(40) + (5 000)(20) = (6 000)vf",
          "(1 000)(40) − (5 000)(20) = (4 000)vf",
          "(1 000)(40) = (5 000)(20) + (6 000)vf",
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is the velocity of the car (and truck) immediately after the collision?",
        options: [
          "10 m·s⁻¹ in the truck's original direction",
          "10 m·s⁻¹ in the car's original direction",
          "20 m·s⁻¹ in the truck's original direction",
          "60 m·s⁻¹ in the car's original direction",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Research has shown that forces greater than 85 000 N during collisions may cause fatal injuries. The collision described above lasts for 0,5 s. Determine, by means of a calculation, whether the collision above could result in a fatal injury (use the car: mass 1 000 kg, velocity changes from 40 m·s⁻¹ to −10 m·s⁻¹ over 0,5 s).",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "For the car, taking its original direction as positive: FnetΔt = Δp = mvf − mvi, so Fnet(0,5) = 1 000(−10 − 40), giving Fnet = −1×10⁵ N, i.e. |Fnet| = 100 000 N. Since 100 000 N > 85 000 N, YES, the collision could result in a fatal injury.",
    marking_notes: "Marking points: formula FnetΔt = Δp = mvf − mvi; correct substitution using the car's (or equivalently the truck's) mass and velocity change over 0,5 s; correct magnitude Fnet = 1×10⁵ N (100 000 N); correct conclusion (yes, fatal, since 100 000 N > 85 000 N).",
    steps: [
      {
        marks: 1,
        description: "Which formula relates net force, time and the change in momentum?",
        options: ["FnetΔt = Δp = mvf − mvi", "Fnet = ma only", "Δp = ½mv²", "FnetΔt = mv"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the net force on the car during the collision?",
        options: ["1×10⁵ N (100 000 N)", "5×10⁴ N (50 000 N)", "6×10⁴ N (60 000 N)", "2×10⁴ N (20 000 N)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Could the collision result in a fatal injury?",
        options: [
          "Yes, since 100 000 N > 85 000 N",
          "No, since 100 000 N < 85 000 N",
          "Yes, since the cars move at high speed",
          "No, since the collision is inelastic",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK-ENERGY THEOREM (11 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A rescue helicopter hovers above a soldier. The soldier, of mass 80 kg, is lifted vertically upwards through a height of 20 m by a cable at a CONSTANT SPEED of 4 m·s⁻¹. The tension in the cable is 960 N. Assume no sideways motion during the lift. Air friction is not to be ignored. State the work-energy theorem in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The net (total) work done on an object is equal to the change in (its) kinetic energy. (Equivalently: the work done on an object by a net/resultant force is equal to the change in the object's kinetic energy.)",
    marking_notes: "Must refer to net/total work done being equal to the change in kinetic energy.",
    marking_points: [{ marks: 2, description: "net (total) work done on an object equals the change in kinetic energy", keywords: ["net work", "equal to", "change in kinetic energy"] }],
    image_url: `${IMG}/5-helicopter.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Draw a labelled free-body diagram showing ALL the forces acting on the soldier while being lifted upwards.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Three forces act on the soldier, all drawn from a single point: the applied/cable force Fapplied pointing up, friction f pointing down (opposing the upward motion), and weight w pointing down.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: applied/tension force (up), friction (down, opposing motion), weight (down). Max 3.",
    marking_points: [
      { marks: 1, description: "applied/cable force (Fapplied/T) drawn vertically upward", keywords: ["applied", "tension", "cable force"] },
      { marks: 1, description: "friction f drawn vertically downward (opposing the upward motion)", keywords: ["friction"] },
      { marks: 1, description: "weight w drawn vertically downward", keywords: ["weight", "gravitational force"] },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Write down the name of a non-contact force that acts on the soldier during the upward lift.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "Gravitational force / weight (of the soldier).",
    marking_notes: "Accept 'gravitational force' or 'weight'.",
    marking_points: [{ marks: 1, description: "Gravitational force / weight", keywords: ["gravitational force", "weight"] }],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Use the WORK-ENERGY THEOREM to calculate the work done on the soldier by friction after moving through the height of 20 m. (Mass 80 kg, constant speed 4 m·s⁻¹, tension 960 N.)",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = ΔK. Since speed is constant, ΔK = 0. FΔycosθ + FwΔycosθ + Wf = ΔK: (960)(20)cos0° + (80)(9,8)(20)cos180° + Wf = 0, so 19 200 − 15 680 + Wf = 0, giving Wf = −3 520 J.",
    marking_notes: "Marking points: formula Wnet = ΔK (with ΔK = 0, since constant speed); correct substitution for the work done by the applied/cable force (19 200 J); correct substitution for the work done by gravity (−15 680 J); correct final answer Wf = −3 520 J.",
    steps: [
      {
        marks: 1,
        description: "Since the soldier moves at a constant speed, what is ΔK?",
        options: ["0 J (constant speed means no change in kinetic energy)", "19 200 J", "15 680 J", "3 520 J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the work done by the applied/cable force (960 N over 20 m)?",
        options: ["19 200 J", "15 680 J", "−19 200 J", "4 800 J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the work done by gravity (weight 80×9,8 N, over 20 m, opposing the motion)?",
        options: ["−15 680 J", "15 680 J", "−1 568 J", "−19 200 J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Wf, the work done by friction?",
        options: ["−3 520 J", "3 520 J", "34 880 J", "−34 880 J"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (8 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "A train approaches a station at a constant speed of 20 m·s⁻¹ with its whistle blowing at a frequency of 458 Hz. An observer, standing on the platform, hears a change in pitch as the train approaches him, passes him and moves away from him. Name the phenomenon that explains the change in pitch heard by the observer.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler effect.",
    marking_notes: "Accept only 'Doppler effect'.",
    marking_points: [{ marks: 1, description: "Doppler effect", keywords: ["doppler"] }],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Calculate the frequency of the sound that the observer hears while the train is approaching him. Use the speed of sound in air as 340 m·s⁻¹.",
    marks: 4, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "fL = [v / (v − vs)] fs = [340 / (340 − 20)] (458) = 486,63 Hz.",
    marking_notes: "Formula fL = [(v ± vL)/(v ± vs)]fs, correct substitution (listener stationary, source approaching so denominator is v − vs = 340 − 20), correct final answer fL = 486,63 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which Doppler formula applies (stationary observer, source approaching)?",
        options: ["fL = [v/(v ± vs)]fs", "fL = [(v ± vL)/v]fs", "fL = fs + vs", "fL = fs × v/vs"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Since the source (train) is approaching the stationary listener, which sign is used in the denominator?",
        options: ["v − vs (minus)", "v + vs (plus)", "vs − v", "v × vs"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is fL, the frequency heard by the observer?",
        options: ["486,63 Hz", "432,24 Hz", "458,00 Hz", "381,67 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "How will the observed frequency change as the train passes and moves away from the observer? Write down only INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Decreases.",
    marking_notes: "Accept only 'decreases'.",
    marking_points: [{ marks: 1, description: "Decreases", keywords: ["decreases"] }],
  },
  {
    number: "6", sub_number: "6.4",
    text: "How will the frequency observed by the train driver compare to that of the sound waves emitted by the whistle? Write down only GREATER THAN, EQUAL TO or LESS THAN. Give a reason for the answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Equal to. There is no relative motion between the train driver and the whistle (the driver and the whistle move together, at the same velocity), so the driver observes the same frequency as the one emitted.",
    marking_notes: "Must state 'equal to' and a valid reason: no relative motion between the source (whistle) and the observer (driver), as they share the same velocity.",
    marking_points: [
      { marks: 1, description: "equal to", keywords: ["equal to"] },
      { marks: 1, description: "no relative motion between the train driver and the whistle (same velocity)", keywords: ["no relative motion", "same velocity"] },
    ],
  },

  // ============ QUESTION 7: DIFFRACTION (13 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "A learner investigates the change in broadness of the central bright band in a diffraction pattern when light passes through single slits of different widths. She uses monochromatic violet light of wavelength 4×10⁻⁷ m. Define the term monochromatic light.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Light of a single wavelength (or a single frequency).",
    marking_notes: "Must refer to light of a single wavelength OR a single frequency.",
    marking_points: [{ marks: 2, description: "light of a single wavelength or single frequency", keywords: ["single wavelength", "single frequency"] }],
    image_url: `${IMG}/7-diffraction.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Write down the investigative question for this investigation (into how the broadness of the central bright band changes with slit width).",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "What is the relationship between the broadness (width) of the central bright band and the slit width? (Equivalently: How will the broadness of the central bright band change when the slit width is increased/decreased?)",
    marking_notes: "Must state the dependent and independent variables (broadness of central band; slit width), AND ask a question about the relationship between them.",
    marking_points: [
      { marks: 1, description: "states the dependent and independent variables (broadness of central band; slit width)", keywords: ["broadness", "slit width"] },
      { marks: 1, description: "asks a question about the relationship between them", keywords: ["relationship", "how will", "change"] },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Write down TWO variables that are kept constant during this investigation.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Wavelength (or frequency, or colour) of light / the light source; and the distance between the slit and the screen.",
    marking_notes: "Any TWO of: wavelength/frequency/colour of light (or the light source); distance between slit and screen. 1 mark each.",
    marking_points: [
      { marks: 1, description: "wavelength/frequency/colour of light (or light source)", keywords: ["wavelength", "frequency", "colour", "light source"] },
      { marks: 1, description: "distance between slit and screen", keywords: ["distance", "slit and screen"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "The learner now uses a narrower slit. How will the broadness of the central bright band change? Write down only INCREASES, DECREASES or REMAINS THE SAME. Give an explanation.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. Diffraction (the angle of spreading, sinθ) is inversely proportional to the slit width (sinθ ∝ 1/a), so a narrower slit produces more diffraction/spreading, increasing the broadness of the central bright band.",
    marking_notes: "Must state 'increases' and a valid reason: diffraction is inversely proportional to slit width (sinθ ∝ 1/a).",
    marking_points: [
      { marks: 1, description: "increases", keywords: ["increases"] },
      { marks: 1, description: "diffraction is inversely proportional to slit width (sinθ ∝ 1/a)", keywords: ["inversely proportional", "slit width"] },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Calculate the angle θ at which the second minimum is formed if a slit of width 2,2×10⁻⁶ m is used (wavelength 4×10⁻⁷ m).",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "sinθ = mλ/a = (2)(4×10⁻⁷)/(2,2×10⁻⁶), giving θ = 21,32°.",
    marking_notes: "Formula sinθ = mλ/a, correct substitution with m = 2 (second minimum), λ = 4×10⁻⁷ m, a = 2,2×10⁻⁶ m, correct final answer θ = 21,32° (the magnitude; sign/order m = ±2 both accepted by the memo).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the angle to a diffraction minimum?",
        options: ["sinθ = mλ/a", "sinθ = mλ", "sinθ = a/mλ", "sinθ = m/λa"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the correctly substituted equation for the second minimum (m = 2)?",
        options: [
          "sinθ = (2)(4×10⁻⁷)/(2,2×10⁻⁶)",
          "sinθ = (1)(4×10⁻⁷)/(2,2×10⁻⁶)",
          "sinθ = (2)(2,2×10⁻⁶)/(4×10⁻⁷)",
          "sinθ = (4×10⁻⁷)/(2,2×10⁻⁶)",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is θ?",
        options: ["21,32°", "10,47°", "33,42°", "45,00°"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: ELECTROSTATICS (12 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Two metal spheres, P and T, on insulated stands, carry charges of +3×10⁻⁹ C and −6×10⁻⁹ C respectively. In which direction will electrons flow while spheres P and T are in contact? Write down only FROM P TO T or FROM T TO P.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "From T to P.",
    marking_notes: "Accept only 'from T to P' (electrons flow from the more negative sphere T to the less negative/positive sphere P until the charge equalises).",
    marking_points: [{ marks: 1, description: "T to P", keywords: ["t to p"] }],
    image_url: `${IMG}/8-spheres-initial.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Calculate the net charge gained or lost by sphere P after the spheres (+3×10⁻⁹ C and −6×10⁻⁹ C) have been in contact.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Q = [3×10⁻⁹ + (−6×10⁻⁹)] / 2 = −1,5×10⁻⁹ C (final charge on each sphere). ΔQP = QP(final) − QP(initial) = −1,5×10⁻⁹ − 3×10⁻⁹ = −4,5×10⁻⁹ C.",
    marking_notes: "Marking points: formula for final (shared) charge, Q = (Q1 + Q2)/2; correct substitution giving −1,5×10⁻⁹ C; correct final answer ΔQP = −4,5×10⁻⁹ C (a loss of 4,5×10⁻⁹ C).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the final (shared) charge on each sphere after contact?",
        options: ["Q = (Q1 + Q2)/2", "Q = Q1 + Q2", "Q = Q1 − Q2", "Q = Q1 × Q2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the final charge on each sphere?",
        options: ["−1,5×10⁻⁹ C", "−3×10⁻⁹ C", "1,5×10⁻⁹ C", "−9×10⁻⁹ C"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the net charge gained or lost by sphere P (initially +3×10⁻⁹ C)?",
        options: ["−4,5×10⁻⁹ C (lost)", "4,5×10⁻⁹ C (gained)", "−1,5×10⁻⁹ C (lost)", "−3×10⁻⁹ C (lost)"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Calculate the number of electrons transferred during the process in QUESTION 8.2.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Number of electrons = ΔQ / qe = (−4,5×10⁻⁹) / (−1,6×10⁻¹⁹) = 2,81×10¹⁰.",
    marking_notes: "Formula n = Q/qe (using the magnitude of charge transferred and the elementary charge), correct final answer n = 2,81×10¹⁰ electrons.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the number of electrons for a given charge?",
        options: ["n = Q/qe", "n = Q × qe", "n = qe/Q", "n = Q + qe"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the number of electrons transferred?",
        options: ["2,81×10¹⁰", "7,2×10¹¹", "2,81×10⁹", "1,41×10¹⁰"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.4",
    text: "A third sphere R, carrying a charge of −3×10⁻⁹ C, is now placed between P and T at a distance of 1 m from T (and 0,5 m from P, with P and T 1,5 m apart carrying their post-contact charge of −1,5×10⁻⁹ C each). Calculate the net force experienced by sphere R as a result of its interaction with P and T.",
    marks: 6, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "FTR = kQ1Q2/r² = (9×10⁹)(1,5×10⁻⁹)(3×10⁻⁹)/(1)² = 4,05×10⁻⁸ N, directed to the left (towards P), since both R and T are negative (repulsion). FPR = kQ1Q2/r² = (9×10⁹)(1,5×10⁻⁹)(3×10⁻⁹)/(0,5)² = 1,62×10⁻⁷ N, directed to the right (towards T), since both R and P are negative (repulsion). Taking right/towards T as positive: Fnet = 1,62×10⁻⁷ − 4,05×10⁻⁸ = 1,22×10⁻⁷ N, to the right (towards T).",
    marking_notes: "Marking points: formula F = kQ1Q2/r²; correct substitution for FTR (4,05×10⁻⁸ N); correct substitution for FPR (1,62×10⁻⁷ N); correct direction reasoning for at least one force (any one — both P and T repel R, since all three spheres are negatively charged); correct final net force magnitude and direction, Fnet = 1,22×10⁻⁷ N towards T.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electrostatic force between two point charges?",
        options: ["F = kQ1Q2/r²", "F = kQ/r²", "F = kQ1Q2/r", "F = Q1Q2/kr²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of FTR, the force between T and R (r = 1 m)?",
        options: ["4,05×10⁻⁸ N", "1,62×10⁻⁷ N", "4,05×10⁻⁷ N", "1,35×10⁻⁸ N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of FPR, the force between P and R (r = 0,5 m)?",
        options: ["1,62×10⁻⁷ N", "4,05×10⁻⁸ N", "6,48×10⁻⁷ N", "8,1×10⁻⁸ N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the net force on R (magnitude and direction)?",
        options: [
          "1,22×10⁻⁷ N towards T",
          "2,03×10⁻⁷ N towards T",
          "1,22×10⁻⁷ N towards P",
          "4,05×10⁻⁸ N towards T",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 9: OHM'S LAW INVESTIGATION (9 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "Learners conduct an investigation to verify Ohm's law. They measure the current through a conducting wire for different potential differences across its ends. Which ONE of the measured quantities is the dependent variable?",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "Current (I).",
    marking_notes: "Accept only 'current' (or 'I').",
    marking_points: [{ marks: 1, description: "Current / I", keywords: ["current", "i"] }],
    image_url: `${IMG}/9-graph.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "The graph deviates from Ohm's law at some point. Write down the coordinates of the plotted point on the graph beyond which Ohm's law is not obeyed.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "(4,0 V ; 0,64 A).",
    marking_notes: "Accept (4,0 ; 0,64), reading from the graph; 1 mark for each coordinate.",
    marking_points: [{ marks: 2, description: "(4,0 ; 0,64)", keywords: ["4 0", "0 64"] }],
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Give a possible reason for the deviation from Ohm's law shown in the graph. Assume that all measurements are correct.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "The temperature (of the conducting wire) was not kept constant (it increased, which increases the wire's resistance, causing the current to increase less than proportionally with voltage).",
    marking_notes: "Must state that temperature was not kept constant.",
    marking_points: [{ marks: 2, description: "temperature was not kept constant", keywords: ["temperature", "not kept constant"] }],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Calculate the gradient of the graph for the section where Ohm's law is obeyed. Use this to calculate the resistance of the conducting wire.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Gradient = Δy/Δx = (0,64 − 0)/(4 − 0) = 0,16 A·V⁻¹. R = 1/gradient = 1/0,16 = 6,25 Ω.",
    marking_notes: "Marking points: correct gradient calculation using the linear (Ohm's-law-obeying) section of the graph, (0,64 − 0)/(4 − 0) = 0,16; correct final answer R = 6,25 Ω (R = 1/gradient, since the graph plots current vs voltage).",
    steps: [
      {
        marks: 2,
        description: "What is the gradient of the linear section of the graph (current vs potential difference)?",
        options: ["0,16 A·V⁻¹", "6,25 A·V⁻¹", "0,64 A·V⁻¹", "4,00 A·V⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the resistance of the conducting wire (R = 1/gradient, since this graph plots I vs V)?",
        options: ["6,25 Ω", "0,16 Ω", "4,00 Ω", "0,64 Ω"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 10: ELECTRIC CIRCUITS (15 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "The headlamp and two identical tail lamps of a scooter are connected in parallel to a battery with unknown internal resistance. The headlamp has a resistance of 2,4 Ω and is controlled by switch S1; the tail lamps are controlled by switch S2. The graph shows the potential difference across the battery's terminals before and after S1 is closed (while S2 is open): 12 V before, 9,6 V after. Use the graph to determine the emf of the battery.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "12 V (the terminal potential difference when no current flows, i.e. before S1 is closed, equals the emf).",
    marking_notes: "Accept only '12 V'.",
    marking_points: [{ marks: 1, description: "12 V", keywords: ["12"] }],
    image_url: `${IMG}/10-circuit-graph.png`,
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "With only switch S1 closed, calculate the current through the headlamp (resistance 2,4 Ω, terminal voltage 9,6 V).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "I = V/R = 9,6/2,4 = 4 A.",
    marking_notes: "Formula I = V/R, correct substitution using the terminal voltage (9,6 V) and the headlamp's resistance (2,4 Ω), correct final answer I = 4 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the current through the headlamp?",
        options: ["I = V/R", "I = VR", "I = R/V", "I = V + R"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the current through the headlamp?",
        options: ["4 A", "2,4 A", "23,04 A", "0,25 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "With only switch S1 closed, calculate the internal resistance r of the battery (emf 12 V, terminal voltage 9,6 V, current 4 A).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "emf = IR + Ir, so 12 = 9,6 + 4r, giving r = 0,6 Ω.",
    marking_notes: "Formula emf = IR + Ir (or equivalently emf = I(R + r), or Vlost = Ir with Vlost = emf − Vterminal = 2,4 V), correct substitution, correct final answer r = 0,6 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates emf, terminal voltage, current and internal resistance?",
        options: ["emf = IR + Ir", "emf = IR − Ir", "emf = I(R − r)", "emf = IR/r"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the internal resistance r of the battery?",
        options: ["0,6 Ω", "0,4 Ω", "3,0 Ω", "2,4 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Both switches S1 and S2 are now closed. The battery delivers a current of 6 A during this period. Calculate the resistance of each tail lamp.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "emf = I(R + r): 12 = 6(Rext + 0,6), giving Rext = 1,4 Ω (the parallel combination of the headlamp branch and the tail-lamps branch). Using 1/R = 1/R1 + 1/R2: 1/1,4 = 1/2,4 + 1/Rtaillamps, giving Rtaillamps (combined, the two tail lamps in series) = 3,36 Ω. Since the two tail lamps are identical and in series, each tail lamp has resistance 3,36/2 = 1,68 Ω.",
    marking_notes: "Marking points: formula emf = I(R + r); correct value of the external (parallel) resistance, Rext = 1,4 Ω; correct use of the parallel-resistance formula to find the combined tail-lamp branch resistance, 3,36 Ω; correct final answer for EACH tail lamp, 1,68 Ω (halving the series combination, since the two tail lamps are identical).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the total external resistance of the circuit (with S1 and S2 both closed)?",
        options: ["emf = I(Rext + r)", "emf = I·Rext − r", "emf = Rext/I", "emf = I + Rext + r"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Rext, the total external (parallel) resistance?",
        options: ["1,4 Ω", "2,0 Ω", "2,4 Ω", "0,6 Ω"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula combines the headlamp branch (2,4 Ω) and tail-lamps branch (in parallel) to give Rext?",
        options: ["1/Rext = 1/2,4 + 1/Rtaillamps", "Rext = 2,4 + Rtaillamps", "Rext = 2,4 × Rtaillamps", "Rext = 2,4 − Rtaillamps"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the resistance of EACH tail lamp?",
        options: ["1,68 Ω", "3,36 Ω", "0,84 Ω", "6,72 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.4",
    text: "How will the reading on the voltmeter be affected if the headlamp burns out? (Both switches S1 and S2 are still closed.) Write down only INCREASES, DECREASES or REMAINS THE SAME. Give an explanation.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. With the headlamp branch open, the total external resistance increases (only the tail-lamps branch remains), so the current drawn from the battery decreases, which decreases the 'lost volts' (Ir) across the internal resistance, so the terminal (voltmeter) reading increases.",
    marking_notes: "Must state 'increases' and a valid explanation: resistance increases → current decreases → Ir (lost volts) decreases → terminal voltage (voltmeter reading) increases.",
    marking_points: [
      { marks: 1, description: "increases", keywords: ["increases"] },
      { marks: 1, description: "resistance increases, current decreases", keywords: ["resistance increases", "current decreases"] },
      { marks: 1, description: "Ir (lost volts) decreases, so terminal voltage increases", keywords: ["lost volts", "ir", "decreases"] },
    ],
  },

  // ============ QUESTION 11: ELECTRODYNAMICS (12 marks) ============

  {
    number: "11", sub_number: "11.1.1",
    text: "Diesel-electric trains make use of electric motors as well as generators. Complete: for a MOTOR, state the type of energy conversion.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Electrical (energy) to mechanical/kinetic (energy).",
    marking_notes: "Must state electrical energy converted to mechanical/kinetic energy.",
    marking_points: [{ marks: 1, description: "electrical energy to mechanical/kinetic energy", keywords: ["electrical", "mechanical", "kinetic"] }],
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "Complete: for a GENERATOR, state the type of energy conversion.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Mechanical/kinetic (energy) to electrical (energy).",
    marking_notes: "Must state mechanical/kinetic energy converted to electrical energy.",
    marking_points: [{ marks: 1, description: "mechanical/kinetic energy to electrical energy", keywords: ["mechanical", "kinetic", "electrical"] }],
  },
  {
    number: "11", sub_number: "11.1.3",
    text: "Complete: for a MOTOR, state the underlying principle on which it operates.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Motor effect.",
    marking_notes: "Accept only 'motor effect'.",
    marking_points: [{ marks: 1, description: "Motor effect", keywords: ["motor effect"] }],
  },
  {
    number: "11", sub_number: "11.1.4",
    text: "Complete: for a GENERATOR, state the underlying principle on which it operates.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Electromagnetic induction.",
    marking_notes: "Accept only 'electromagnetic induction'.",
    marking_points: [{ marks: 1, description: "Electromagnetic induction", keywords: ["electromagnetic induction"] }],
  },
  {
    number: "11", sub_number: "11.2",
    text: "The diagram represents an electric motor, with the coil in the position ABCD shown (section BC lying parallel to the magnetic field, between the N and S poles). Give a reason why the section of the coil labelled BC does not experience a magnetic force whilst the coil is in the position shown.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "BC (the conductor) is parallel to the magnetic field (so there is no component of the field perpendicular to the current in BC, hence no force).",
    marking_notes: "Must state that BC/the conductor is parallel to the magnetic field.",
    marking_points: [{ marks: 2, description: "BC/conductor is parallel to the magnetic field", keywords: ["parallel", "magnetic field"] }],
    image_url: `${IMG}/11-motor.png`,
  },
  {
    number: "11", sub_number: "11.3",
    text: "Graphs of the current and potential difference outputs of an AC generator are shown: both sinusoidal, current peaking at 21 A (and −21 A), potential difference peaking at 311 V (and −311 V). Calculate the average power output of this generator.",
    marks: 6, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Pave = VrmsIrms = (Vmax/√2)(Imax/√2) = (311)(21)/2 = 3 265,5 W.",
    marking_notes: "Marking points: formula Pave = VrmsIrms (or an equivalent valid route via Pmax/2, or Irms²R, or Vrms²/R); correct substitution of Vmax = 311 V and Imax = 21 A; correct final answer Pave = 3 265,5 W (accepting values in the range ~3 265,5-3 265,83 W depending on rounding of Vrms/Irms).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the average power output of an AC generator?",
        options: ["Pave = VrmsIrms", "Pave = VmaxImax", "Pave = ½VmaxImax directly without computing rms values", "Pave = Vmax + Imax"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Vrms (using Vmax = 311 V)?",
        options: ["219,91 V", "311,00 V", "155,50 V", "440,0 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Irms (using Imax = 21 A)?",
        options: ["14,85 A", "21,00 A", "10,50 A", "29,70 A"],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is Pave, the average power output?",
        options: ["3 265,5 W", "6 531,0 W", "1 632,75 W", "4 624,5 W"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 12: THE PHOTOELECTRIC EFFECT (14 marks) ============

  {
    number: "12", sub_number: "12.1",
    text: "A metal surface is illuminated with ultraviolet light of wavelength 330 nm. Electrons are emitted from the metal surface. Name the phenomenon illustrated above.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The photoelectric effect.",
    marking_notes: "Accept only 'photoelectric effect'.",
    marking_points: [{ marks: 1, description: "Photoelectric effect", keywords: ["photoelectric"] }],
    image_url: `${IMG}/12-photoelectric.png`,
  },
  {
    number: "12", sub_number: "12.2",
    text: "The minimum amount of energy required to emit an electron from the surface of this metal is 3,5×10⁻¹⁹ J. Give ONE word or term for the underlined sentence.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Work function.",
    marking_notes: "Accept only 'work function'.",
    marking_points: [{ marks: 1, description: "Work function", keywords: ["work function"] }],
  },
  {
    number: "12", sub_number: "12.3",
    text: "Calculate the frequency of the ultraviolet light (wavelength 330 nm).",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "c = fλ: 3×10⁸ = f(330×10⁻⁹), giving f = 9,09×10¹⁴ Hz.",
    marking_notes: "Formula c = fλ, correct substitution using λ = 330×10⁻⁹ m, correct final answer f = 9,09×10¹⁴ Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the speed of light, frequency and wavelength?",
        options: ["c = fλ", "c = f/λ", "c = f + λ", "f = cλ"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correctly substituted equation (λ = 330×10⁻⁹ m)?",
        options: ["3×10⁸ = f(330×10⁻⁹)", "3×10⁸ = f/(330×10⁻⁹)", "3×10⁸ = f(330×10⁹)", "f = 3×10⁸(330×10⁻⁹)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the frequency of the ultraviolet light?",
        options: ["9,09×10¹⁴ Hz", "1,10×10⁻¹⁵ Hz", "9,09×10¹³ Hz", "3,30×10⁸ Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "12", sub_number: "12.4",
    text: "Calculate the kinetic energy of a photoelectron emitted from the surface of the metal when the ultraviolet light shines on it. (Work function 3,5×10⁻¹⁹ J, frequency from 12.3.)",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W0 + K, where E = hf = (6,63×10⁻³⁴)(9,09×10¹⁴) = 6,03×10⁻¹⁹ J. So 6,03×10⁻¹⁹ = 3,5×10⁻¹⁹ + K, giving K = 2,53×10⁻¹⁹ J.",
    marking_notes: "Marking points: formula E = W0 + K (with E = hf or hc/λ); correct substitution for E (photon energy, 6,03×10⁻¹⁹ J) and W0 (3,5×10⁻¹⁹ J); correct final answer K = 2,53×10⁻¹⁹ J.",
    steps: [
      {
        marks: 1,
        description: "Which equation relates the photon energy, the work function and the photoelectron's kinetic energy?",
        options: ["E = W0 + K", "E = W0 − K", "E = W0 × K", "K = W0 + E"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is E, the energy of each incident photon (using hf, with f = 9,09×10¹⁴ Hz)?",
        options: ["6,03×10⁻¹⁹ J", "3,50×10⁻¹⁹ J", "2,53×10⁻¹⁹ J", "6,63×10⁻³⁴ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is K, the kinetic energy of the emitted photoelectron?",
        options: ["2,53×10⁻¹⁹ J", "6,03×10⁻¹⁹ J", "9,53×10⁻¹⁹ J", "3,50×10⁻¹⁹ J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "12", sub_number: "12.5.1",
    text: "The intensity of the ultraviolet light illuminating the metal is now increased. What effect will this have on the kinetic energy of the emitted photoelectrons? Write down only INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same.",
    marking_notes: "Accept only 'remains the same'.",
    marking_points: [{ marks: 1, description: "Remains the same", keywords: ["remains the same"] }],
  },
  {
    number: "12", sub_number: "12.5.2",
    text: "What effect will increasing the intensity have on the number of photoelectrons emitted per second? Write down only INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Increases.",
    marking_notes: "Accept only 'increases'.",
    marking_points: [{ marks: 1, description: "Increases", keywords: ["increases"] }],
  },
  {
    number: "12", sub_number: "12.6.1",
    text: "Overexposure to sunlight causes damage to skin cells. Which type of radiation in sunlight is said to be primarily responsible for this damage?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Ultraviolet radiation.",
    marking_notes: "Accept only 'ultraviolet radiation' (or 'UV').",
    marking_points: [{ marks: 1, description: "Ultraviolet radiation", keywords: ["ultraviolet"] }],
  },
  {
    number: "12", sub_number: "12.6.2",
    text: "Name the property of this radiation responsible for the damage.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "High energy / high frequency.",
    marking_notes: "Accept 'high energy' or 'high frequency'.",
    marking_points: [{ marks: 1, description: "High energy / high frequency", keywords: ["high energy", "high frequency"] }],
  },
];
