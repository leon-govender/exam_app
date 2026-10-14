// Real DBE past paper: Physical Sciences (Physics) P1, November 2010, National
// (English). OLD NCS paper (pre-CAPS), Grade 12.
// Sources (maimelatct.com mirror; both PDFs verified from their own cover
// pages, since mirror filenames are unreliable):
//   Question paper: physicalsciencesp1nov2010eng.pdf. Cover reads "PHYSICAL
//   SCIENCES: PHYSICS (P1)", "NOVEMBER 2010", MARKS 150, TIME 3 hours; 18 PDF
//   pages = 15 pages of questions + 3 data-sheet pages.
//   Memo: physicalsciencesp1nov2010memoeng.pdf. Cover reads "PHYSICAL
//   SCIENCES: PHYSICS (P1)", "NOVEMBER 2010", "MEMORANDUM", MARKS 150, 23 pages.
//
// SPECIAL MEMO NOTE: the memo cover carries the note "Marking rule 1.5 was
// changed according to decisions taken at the memorandum discussion, 17-18
// November 2010." The rule is in the General Guidelines (memo p. 3, verified
// on a render of the page): "1.5 When no formula is given, marks will be
// forfeited for zero substitutions not shown. Other substitutions and a
// correct answer will be credited." (Rule 1.4, immediately above it, still
// says that with no formula but all substitutions correct a candidate forfeits
// one mark.) The changed 1.5 is the amended version and is the one applied
// here: it only affects how a hand-written answer with NO stated formula is
// marked. Because every calculation in this dataset is a stepped multiple
// choice (one pickable step per formula / substitution / answer mark, with the
// formula step always presented), the rule has no effect on step marks, and
// the mark allocation of each step simply follows the memo's tick allocation
// (formula, substitutions, answer). It is recorded in the marking_notes of the
// calculation questions where the memo shows a formula tick.
//
// Paper structure: Section A (25) = Q1 five one-word items (5) + Q2 ten
// multiple-choice (20); Section B (125) = Q3-Q12. Everything is compulsory.
// All 150 marks are included. Per-question totals match the paper:
// Q1 5, Q2 20, Q3 19, Q4 13, Q5 15, Q6 6, Q7 7, Q8 10, Q9 17, Q10 16, Q11 10,
// Q12 12.
//
// This paper reuses the nine topics already defined by the Nov 2025/2024
// datasets, so the `topics` array is identical (topics are upserted by key in
// scripts/seed.ts, so redeclaring them here is safe).
//
// FLAG (topic mapping, old NCS content outside the nine CAPS topics; mapped to
// the closest existing topic, no new keys invented):
//   - 1.2 Huygens' principle, 2.5 evidence for the wave nature of light
//     (diffraction), Q7 double-slit interference, Q8 single-slit diffraction:
//     mapped to "doppler-effect" (Waves, Sound and Light).
//   - 2.4 order of the electromagnetic spectrum, 2.9 line emission spectrum
//     (neon tube), Q12.1-12.2 (UV light effects/uses): mapped to
//     "photoelectric-effect" (Matter and Materials / light).
//   - 2.2, 2.3 and Q4.3: collisions/momentum -> "momentum-impulse"; 1.1
//     elastic collision -> "momentum-impulse".
//   - Q9 capacitors (definition, C = e0A/d, charging graph, charge on plates,
//     force on an ion between the plates) -> "electrostatics".
//   - Q11 AC generator (rms, peak, DC graph) and 1.4 commutator ->
//     "electrodynamics"; 1.3 ohm and Q10 -> "electric-circuits".
//
// Diagrams (ball and wall, momentum-time graphs, two charged spheres, field
// lines with points R/S/T, DC motor, velocity-time graph, pendulum/crate
// setup, crate pulled at 30 degrees, double-slit wave diagram, single-slit
// diffraction set-up with results table, capacitor circuit, headlight
// circuit, AC generator graph) are vector line drawings in the page content
// stream, so they were cropped from 220 dpi page renders (13 images). Five of
// these were left over from an earlier stopped attempt; every one was viewed
// and re-cropped to remove stray clipped text lines. No diagram was skipped
// because it was purely decorative, except the memo's own answer graphs
// (3.3, 9.3, 11.2), which are model answers, not question material. The small
// car picture beside the headlight circuit is part of the same crop.
//
// Grading: calculations, short single-answer items, MCQ letters, defined
// terms/statements, explanations and sketch-graph questions are ALL
// converted to `steps` (stepped multiple choice, per the standing preference).
// There are NO `marking_points` questions in this file. Non-calculation items
// that the memo awards as several independent marks (definitions, reasons,
// free-body diagram, sketch graphs) are split into one 1-mark step per memo
// tick (or per criterion in the memo's checklist), with 4 options each and
// the wrong options chosen to trap real Grade 12 misconceptions. For the
// free-body diagram (5.1) and the sketch graphs (3.3, 9.3, 11.2) the student
// is asked to identify the correct features of what they would draw, since
// drawing cannot be auto-marked.
//
// FLAG for review: Q3.3 (position-time graph). The memo accepts two graphs:
// upward-positive (inverted parabola from 0 to a maximum at t = 3 s back to 0
// at t = 6 s) OR downward-positive (the mirror image). The steps below
// describe the features common to both (parabolic shape, starts at 0 at
// t = 0, turning point at t = 3 s, back at 0 at t = 6 s).
// FLAG for review: Q8.4 gives two accepted routes (first minimum, a = 4,70 x
// 10^-6 m, or second minimum, a = 4,72 x 10^-6 m). Only the first-minimum
// route is offered as the correct option; 4,72 x 10^-6 m is not used as a
// distractor.
// FLAG for review: Q4.2 memo shows 5,19 J with a bracketed alternative 5,25 J,
// and Q4.3 shows 3,86 m.s^-1 with a bracketed alternative 3,88 m.s^-1 (the
// memo does not say why; likely rounding of g or of the intermediate speed).
// Transcribed with the primary values (5,19 J; 3,86 m.s^-1); the alternatives
// are noted in marking_notes and not used as distractors.
// FLAG for review: the memo's Q2.8 answer is B (anticlockwise) for the DC
// motor with the battery polarity and N-S poles as drawn; transcribed as
// printed without independently re-deriving the Fleming's-left-hand-rule
// direction.
// FLAG for review: the memo's 3.4 numbers (5,23 s, 21,85 m.s^-1 downwards,
// 29,40 m.s^-1 relative velocity) are consistent with the given data; the
// memo also shows several alternative "OPTION" routes which are all accepted.
// FLAG for review: Q5.2 in the memo is a 2-mark single reason (worked as two
// 1-mark steps here: the angle/perpendicularity reason, then W = FDx cos 90).

import type { MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2010-p1";

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
  { key: "newtons-laws", name: "Newton's Laws of Motion", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Mechanics (Newton's Laws)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=newtons+laws+of+motion+grade+12+physical+sciences" },
  { key: "momentum-impulse", name: "Momentum and Impulse", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Mechanics (Momentum and Impulse)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=momentum+and+impulse+grade+12+physical+sciences" },
  { key: "vertical-projectile-motion", name: "Vertical Projectile Motion", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Mechanics (Vertical Projectile Motion)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=vertical+projectile+motion+grade+12+physical+sciences" },
  { key: "work-energy-power", name: "Work, Energy and Power", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Mechanics (Work, Energy and Power)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=work+energy+power+grade+12+physical+sciences" },
  { key: "doppler-effect", name: "The Doppler Effect", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Waves, Sound and Light (Doppler Effect)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=doppler+effect+grade+12+physical+sciences" },
  { key: "electrostatics", name: "Electrostatics", caps_term: "Term 2", textbook_ref: "Grade 12 Physical Sciences — Electricity and Magnetism (Electrostatics)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=electrostatics+coulombs+law+grade+12+physical+sciences" },
  { key: "electric-circuits", name: "Electric Circuits", caps_term: "Term 2", textbook_ref: "Grade 12 Physical Sciences — Electricity and Magnetism (Electric Circuits)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=electric+circuits+emf+internal+resistance+grade+12" },
  { key: "electrodynamics", name: "Electrodynamics (Generators and Motors)", caps_term: "Term 2", textbook_ref: "Grade 12 Physical Sciences — Electricity and Magnetism (Electrodynamics)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=AC+generator+DC+motor+grade+12+physical+sciences" },
  { key: "photoelectric-effect", name: "The Photoelectric Effect", caps_term: "Term 3", textbook_ref: "Grade 12 Physical Sciences — Matter and Materials (Photoelectric Effect)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=photoelectric+effect+grade+12+physical+sciences" },
];

export const paper = {
  year: 2010,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "http://maimelatct.com/wp-content/uploads/2013/08/physicalsciencesp1nov2010eng.pdf" as string | null,
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
  steps: MarkingPointStep[];
  image_url?: string;
}

// Explicit step: options in the order given (used for A-D multiple choice).
function st(marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep {
  return { marks, description, options, correctIndex };
}

// Step where the correct option is rotated through positions so the answer
// is not always the first choice.
let rot = 0;
function mc(marks: number, description: string, correct: string, wrong: [string, string, string]): MarkingPointStep {
  const pos = rot++ % 4;
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The type of collision in which kinetic energy is conserved.",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "Elastic (collision).",
    marking_notes: "Accept 'elastic' only.",
    steps: [mc(1, "Which type of collision conserves kinetic energy?", "Elastic", ["Inelastic", "Perfectly inelastic", "Explosive"])],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: The principle which states that each point on a wave front acts as a source of secondary wavelets.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Huygens' (principle).",
    marking_notes: "Accept 'Huygens' principle'.",
    steps: [mc(1, "Which principle says each point on a wave front is a source of secondary wavelets?", "Huygens' principle", ["Fermat's principle", "Principle of superposition", "Pauli exclusion principle"])],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: The unit of measure equivalent to one volt per ampere.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "Ohm (Ω).",
    marking_notes: "Accept 'ohm' or the symbol Ω.",
    steps: [mc(1, "Which unit is equivalent to one volt per ampere?", "Ohm (Ω)", ["Siemens (S)", "Watt (W)", "Farad (F)"])],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: The component in a DC electric motor that ensures continuous rotation in one direction by reversing the direction of the current every half-cycle.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "(Split-ring) commutator.",
    marking_notes: "Accept 'commutator' or 'split-ring commutator'.",
    steps: [mc(1, "Which DC-motor component reverses the current direction every half-cycle?", "Split-ring commutator", ["Slip rings", "Carbon brushes", "Armature core"])],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: The minimum energy needed to eject an electron from a metal surface.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Work function.",
    marking_notes: "Accept 'work function'.",
    steps: [mc(1, "What is the minimum energy needed to eject an electron from a metal surface?", "Work function", ["Threshold frequency", "Maximum kinetic energy of the photoelectron", "Ionisation energy of the metal atom"])],
  },

  // ============ QUESTION 2: MULTIPLE-CHOICE (20 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "An object projected vertically upwards reaches its maximum height and returns to its original point of projection. Ignoring the effects of friction, the direction of the acceleration of the object during its motion is … (A) always vertically downwards. (B) first vertically upwards and then vertically downwards. (C) first vertically downwards and then vertically upwards. (D) always vertically upwards.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "A: the acceleration is g, always vertically downwards, on the way up, at the top and on the way down.",
    marking_notes: "Accept only 'A'.",
    steps: [st(2, "Direction of the acceleration during the whole motion", ["A. always vertically downwards.", "B. first vertically upwards and then vertically downwards.", "C. first vertically downwards and then vertically upwards.", "D. always vertically upwards."], 0)],
  },
  {
    number: "2", sub_number: "2.2",
    text: "A ball of mass m strikes a wall perpendicularly at a speed v. Immediately after the collision the ball moves in the opposite direction at the same speed v, as shown in the diagram. Which ONE of the following represents the magnitude of the change in momentum of the ball? (A) 0 (B) mv (C) 2mv (D) 3mv",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "C: Δp = mvf − mvi = m(−v) − m(v) = −2mv, so the magnitude is 2mv.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Magnitude of the change in momentum of the ball", ["A. 0", "B. mv", "C. 2mv", "D. 3mv"], 2)],
    image_url: `${IMG}/2.2-ball-wall.png`,
  },
  {
    number: "2", sub_number: "2.3",
    text: "Which ONE of the following momentum (p) versus time (t) graphs best represents the motion of an object that starts from rest and moves in a straight line under the influence of a constant net force? (A) a curve falling from a high value towards the time axis (B) a horizontal straight line above the axis (C) a curve starting at the origin and getting steeper (D) a straight line through the origin with a positive gradient",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "D: Fnet = Δp/Δt is constant, so p increases linearly with time from zero, a straight line through the origin.",
    marking_notes: "Accept only 'D'.",
    steps: [st(2, "Momentum-time graph for a constant net force starting from rest", ["A. A curve falling from a high value towards the time axis", "B. A horizontal straight line above the time axis", "C. A curve starting at the origin and getting steeper", "D. A straight line through the origin with a positive gradient"], 3)],
    image_url: `${IMG}/2.3-momentum-graphs.png`,
  },
  {
    number: "2", sub_number: "2.4",
    text: "Which ONE of the following correctly represents the given types of electromagnetic radiation in order of INCREASING WAVELENGTH? (A) Microwaves; infrared; ultraviolet (B) Infrared; ultraviolet; X-rays (C) Radio waves; infrared; gamma rays (D) Ultraviolet; infrared; microwaves",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "D: ultraviolet (~10⁻⁷ m), infrared (~10⁻⁵ m), microwaves (~10⁻² m) is in order of increasing wavelength. A, B and C list the radiations in order of decreasing wavelength.",
    marking_notes: "Accept only 'D'.",
    steps: [st(2, "Which list is in order of INCREASING wavelength?", ["A. Microwaves; infrared; ultraviolet", "B. Infrared; ultraviolet; X-rays", "C. Radio waves; infrared; gamma rays", "D. Ultraviolet; infrared; microwaves"], 3)],
  },
  {
    number: "2", sub_number: "2.5",
    text: "Which ONE of the following phenomena provides the most conclusive evidence for the wave nature of light? (A) Photoelectric effect (B) Refraction (C) Reflection (D) Diffraction",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "D: diffraction (and interference) can only be explained by waves; the photoelectric effect supports the particle nature, and reflection and refraction can be explained by both models.",
    marking_notes: "Accept only 'D'.",
    steps: [st(2, "Most conclusive evidence for the wave nature of light", ["A. Photoelectric effect", "B. Refraction", "C. Reflection", "D. Diffraction"], 3)],
  },
  {
    number: "2", sub_number: "2.6",
    text: "Two small spheres on insulated stands each carry a positive charge of magnitude q and are separated by a distance r, as shown. The total electrical potential energy of the system of two charges is U. The distance between the centres of the spheres is now HALVED. Which ONE of the following now represents the magnitude of the electrical potential energy of the system? (A) ¼U (B) ½U (C) 2U (D) 4U",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C: U = kQ1Q2/r, so U ∝ 1/r. Halving r doubles U, giving 2U. (Not 4U, which would hold for the force, F ∝ 1/r².)",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Electrical potential energy after the distance is halved", ["A. ¼U", "B. ½U", "C. 2U", "D. 4U"], 2)],
    image_url: `${IMG}/2.6-spheres-charges.png`,
  },
  {
    number: "2", sub_number: "2.7",
    text: "The diagram represents the electric field pattern around a negative point charge. R, S and T are points at different distances from the negative point charge (T is the closest, R and S are further away). The magnitude of the electric field of the point charge is ... (A) greatest at point R. (B) greatest at point S. (C) greatest at point T. (D) the same at points R, S and T.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "C: E = kQ/r², so the field is strongest at the point closest to the charge, T (where the field lines are most closely spaced).",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Where is the electric field magnitude greatest?", ["A. greatest at point R.", "B. greatest at point S.", "C. greatest at point T.", "D. the same at points R, S and T."], 2)],
    image_url: `${IMG}/2.7-field-RST.png`,
  },
  {
    number: "2", sub_number: "2.8",
    text: "The simplified diagram of an electric motor (coil ABCD between the N and S poles of a magnet, connected through a split-ring commutator and a switch to a battery) is shown. When the switch is closed, coil ABCD rotates … (A) clockwise. (B) anticlockwise. (C) clockwise until it reaches the vertical position and then reverses its direction. (D) anticlockwise until it reaches the vertical position and then reverses its direction.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "B: anticlockwise. The commutator reverses the current every half-turn, so the coil keeps rotating in the same direction (it does not reverse). The direction (anticlockwise) is transcribed from the memo.",
    marking_notes: "Accept only 'B'. Transcribed as printed in the memo; direction not independently re-derived.",
    steps: [st(2, "Direction of rotation of coil ABCD when the switch is closed", ["A. clockwise.", "B. anticlockwise.", "C. clockwise until it reaches the vertical position and then reverses its direction.", "D. anticlockwise until it reaches the vertical position and then reverses its direction."], 1)],
    image_url: `${IMG}/2.8-dc-motor.png`,
  },
  {
    number: "2", sub_number: "2.9",
    text: "A neon tube lights up when a large external voltage is applied across it. Which ONE of the following best describes the type of spectrum observed when the gas inside the tube is viewed through a diffraction grating? (A) Continuous (B) Absorption (C) Line emission (D) Line absorption",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C: a glowing (excited) gas emits only specific wavelengths, giving a line emission spectrum.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Type of spectrum from a glowing neon tube viewed through a diffraction grating", ["A. Continuous", "B. Absorption", "C. Line emission", "D. Line absorption"], 2)],
  },
  {
    number: "2", sub_number: "2.10",
    text: "When a clean metal plate is irradiated with light of sufficient energy, photoelectrons are emitted. The INTENSITY of the light is now increased. This change will … (A) increase the number of photoelectrons emitted per second. (B) decrease the number of photoelectrons emitted per second. (C) increase the kinetic energy of the emitted photoelectrons. (D) decrease the kinetic energy of the emitted photoelectrons.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A: higher intensity means more photons per second, so more photoelectrons per second. The kinetic energy of each depends on the photon frequency, not on intensity.",
    marking_notes: "Accept only 'A'.",
    steps: [st(2, "Effect of increasing the light intensity", ["A. increase the number of photoelectrons emitted per second.", "B. decrease the number of photoelectrons emitted per second.", "C. increase the kinetic energy of the emitted photoelectrons.", "D. decrease the kinetic energy of the emitted photoelectrons."], 0)],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (19 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A man fires a projectile X vertically upwards at a velocity of 29,4 m·s⁻¹ from the EDGE of a cliff of height 100 m. After some time the projectile lands on the ground below the cliff. The velocity-time graph (NOT DRAWN TO SCALE) represents the motion of projectile X (it starts at 29,4 m·s⁻¹ and crosses the time axis at t = 3 s). Ignore the effects of friction. Use the graph to determine the time that the projectile takes to reach its maximum height. (A calculation is not required.)",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "3 s, where the velocity-time graph crosses the time axis (velocity = 0 at maximum height).",
    marking_notes: "Accept '3 s'.",
    steps: [mc(1, "Time taken to reach maximum height, read from the graph", "3 s", ["1 s", "6 s", "29,4 s"])],
    image_url: `${IMG}/3-velocity-time-graph.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Calculate the maximum height that projectile X reaches above the ground. (Projectile X is fired upwards at 29,4 m·s⁻¹ from the edge of a 100 m cliff; it reaches maximum height after 3 s; ignore friction.)",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "From the edge of the cliff to maximum height (upward positive): vf² = vi² + 2aΔy, so 0² = 29,4² + 2(−9,8)Δy, giving Δy = 44,1 m. Maximum height above the ground = 100 + 44,1 = 144,1 m. (Equivalent: area of the triangle under the graph = ½(3)(29,4) = 44,1 m.)",
    marking_notes: "Memo ticks: correct equation; correct substitution; Δy = 44,1 m; 100 + 44,1 = 144,1 m. Many equivalent routes (area under graph, Δy = viΔt + ½aΔt² with Δt = 3 s, energy, Wnet = ΔEk) are accepted. Rule 1.5 (as amended): with no formula, zero substitutions not shown forfeit marks.",
    steps: [
      mc(1, "Which equation gives the height gained directly from vi, vf = 0 and a, without needing time?", "vf² = vi² + 2aΔy", ["vf = vi + aΔt", "Δy = viΔt + ½aΔt²", "Δy = ((vi + vf)/2)Δt"]),
      mc(1, "Which substitution is correct (upward positive, from the cliff edge to the top)?", "0² = 29,4² + 2(−9,8)Δy", ["0² = 29,4² + 2(+9,8)Δy", "29,4² = 0² + 2(−9,8)Δy", "0² = 29,4 + 2(−9,8)Δy"]),
      mc(1, "How far does the projectile rise above the edge of the cliff (Δy)?", "44,1 m", ["88,2 m", "22,05 m", "29,4 m"]),
      mc(1, "What is the maximum height above the ground?", "144,1 m", ["44,1 m", "129,4 m", "55,9 m"]),
    ],
    image_url: `${IMG}/3-velocity-time-graph.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "Sketch the position-time graph for projectile X for the period t = 0 s to t = 6 s. USE THE EDGE OF THE CLIFF AS ZERO OF POSITION. Indicate on the graph the time when projectile X reaches its maximum height and the time when projectile X returns to the edge of the cliff. (Since a sketch cannot be auto-marked, answer by identifying the features of the correct graph.)",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A parabola: starts at position 0 at t = 0 s, rises (upward positive) to a maximum of 44,1 m at t = 3 s (marked), and returns to position 0 at t = 6 s (the edge of the cliff). The mirror image (downward positive) is also accepted.",
    marking_notes: "Memo checklist (1 mark each): correct shape; t = 3 s at maximum height; t = 6 s at y = 0 m; graph starts at y = 0 m at t = 0 s. Both the upward-positive and downward-positive graphs are accepted.",
    steps: [
      mc(1, "What is the correct shape of the position-time graph?", "A parabola, symmetric about t = 3 s", ["A straight line with constant gradient", "A horizontal line", "A curve whose gradient keeps increasing from zero, never turning back"]),
      mc(1, "Where does the graph start, using the cliff edge as zero of position?", "At position 0 m at t = 0 s", ["At position 100 m at t = 0 s", "At position 144,1 m at t = 0 s", "At position 29,4 m at t = 0 s"]),
      mc(1, "What is shown at the turning point (maximum height)?", "The turning point is marked at t = 3 s", ["The turning point is marked at t = 6 s", "The turning point is marked at t = 1 s", "The turning point is marked at t = 5,23 s"]),
      mc(1, "Where does the graph end at t = 6 s?", "At position 0 m (back at the edge of the cliff)", ["At position −100 m (on the ground)", "At position 44,1 m (at the top)", "At position 29,4 m"]),
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "One second (1 s) after projectile X is fired, the man's friend fires a second projectile Y upwards at a velocity of 49 m·s⁻¹ FROM THE GROUND BELOW THE CLIFF. The first projectile, X, passes projectile Y 5,23 s after projectile X is fired. (Ignore friction.) Calculate the velocity of projectile X at the instant it passes projectile Y.",
    marks: 5, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Upward positive: vf = vi + aΔt = 29,4 + (−9,8)(5,23) = −21,85 m·s⁻¹, i.e. 21,85 m·s⁻¹ downwards.",
    marking_notes: "Memo ticks: vf = vi + aΔt; vi = 29,4; (−9,8)(5,23); 21,85 m·s⁻¹; downwards. Alternative routes (downward positive, two-stage routes via the top of the path) are accepted. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which equation gives the velocity of X directly from the data (vi, a and the time 5,23 s)?", "vf = vi + aΔt", ["vf² = vi² + 2aΔy", "Δy = viΔt + ½aΔt²", "Δy = ((vi + vf)/2)Δt"]),
      mc(2, "Which substitution is correct for projectile X (upward positive)?", "vf = 29,4 + (−9,8)(5,23)", ["vf = 29,4 + (−9,8)(4,23)", "vf = 29,4 + (+9,8)(5,23)", "vf = 49 + (−9,8)(5,23)"]),
      mc(1, "What is the magnitude of the velocity of X when it passes Y?", "21,85 m·s⁻¹", ["80,65 m·s⁻¹", "12,05 m·s⁻¹", "2,25 m·s⁻¹"]),
      mc(1, "What is the direction of X's velocity at that instant?", "Downwards, because it is past its maximum height (t > 3 s)", ["Upwards, because it is still rising (t < 3 s)", "Upwards, because the acceleration is upwards", "It has no direction: the velocity is zero there"]),
    ],
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "(Same situation as 3.4.1: Y is fired at 49 m·s⁻¹ upwards from the ground 1 s after X; X passes Y 5,23 s after X is fired; X's velocity then is 21,85 m·s⁻¹ downwards.) Calculate the velocity of projectile X RELATIVE to projectile Y at the instant it passes projectile Y.",
    marks: 5, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Evaluation",
    model_answer: "Y has been moving for Δt = 5,23 − 1 = 4,23 s. Upward positive: vY = 49 + (−9,8)(4,23) = 7,55 m·s⁻¹ upwards. vXY = vX − vY = −21,85 − 7,55 = −29,40 m·s⁻¹, i.e. 29,40 m·s⁻¹ downwards.",
    marking_notes: "Memo ticks: Δt = 4,23 s; vf = vi + aΔt; substitution; 29,40 m·s⁻¹; downwards. Positive marking from 3.4.1. Other sign conventions are accepted.",
    steps: [
      mc(1, "For how long has projectile Y been in the air when X passes it?", "4,23 s", ["5,23 s", "6,23 s", "1,00 s"]),
      mc(1, "Which substitution gives the velocity of Y (upward positive, vf = vi + aΔt)?", "vY = 49 + (−9,8)(4,23) = +7,55 m·s⁻¹", ["vY = 49 + (−9,8)(5,23) = −2,25 m·s⁻¹", "vY = 49 + (+9,8)(4,23) = +90,45 m·s⁻¹", "vY = 29,4 + (−9,8)(4,23) = −12,05 m·s⁻¹"]),
      mc(1, "Which expression gives the velocity of X relative to Y (upward positive)?", "vXY = vX − vY = (−21,85) − (+7,55)", ["vXY = vX + vY = (−21,85) + (+7,55)", "vXY = vX − vY = (+21,85) − (+7,55)", "vXY = vX − vY = (−21,85) − (−7,55)"]),
      mc(1, "What is the magnitude of the relative velocity?", "29,40 m·s⁻¹", ["14,30 m·s⁻¹", "21,85 m·s⁻¹", "7,55 m·s⁻¹"]),
      mc(1, "What is the direction of the relative velocity of X with respect to Y?", "Downwards", ["Upwards", "Zero (they are at the same place)", "Horizontal"]),
    ],
  },

  // ============ QUESTION 4: ENERGY AND MOMENTUM (13 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A steel ball of mass 0,5 kg is suspended from a string of negligible mass. It is released from rest at point A. As it passes through point B, which is 0,6 m above the ground, the magnitude of its velocity is 3 m·s⁻¹. (Ignore friction.) Write down the principle of the conservation of mechanical energy in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The sum of the kinetic and (gravitational) potential energy (the total mechanical energy) is conserved / remains constant in an isolated system (no external forces doing work / only conservative forces acting).",
    marking_notes: "1 mark: the total mechanical energy (sum of kinetic and potential energy) is conserved/constant. 1 mark: in an isolated/closed system (or only conservative forces act).",
    steps: [
      mc(1, "What does the principle say about the total mechanical energy (sum of kinetic and potential energy)?", "It is conserved (remains constant)", ["It increases as the ball falls", "It always equals the work done by friction", "It is converted entirely into heat"]),
      mc(1, "Under what condition does this hold?", "In an isolated system (no external forces doing work; only conservative forces act)", ["Only when friction acts on the object", "Only when the object moves at constant speed", "Only when the object is at rest"]),
    ],
    image_url: `${IMG}/4-pendulum-setup.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Calculate the mechanical energy of the steel ball (0,5 kg) at point B, which is 0,6 m above the ground, where its speed is 3 m·s⁻¹.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Emech = Ep + Ek = mgh + ½mv² = (0,5)(9,8)(0,6) + ½(0,5)(3)² = 2,94 + 2,25 = 5,19 J.",
    marking_notes: "Memo ticks: formula; substitution for Ep; substitution for Ek; 5,19 J (5,25 J also appears in the memo as an accepted variant). Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which expression gives the mechanical energy at B?", "Emech = mgh + ½mv²", ["Emech = mgh − ½mv²", "Emech = mgh × ½mv²", "Emech = mgh + mv"]),
      mc(1, "What is the gravitational potential energy at B (mgh)?", "2,94 J", ["5,88 J", "29,4 J", "1,47 J"]),
      mc(1, "What is the kinetic energy at B (½mv²)?", "2,25 J", ["4,50 J", "0,75 J", "1,50 J"]),
      mc(1, "What is the mechanical energy at B?", "5,19 J", ["0,69 J", "7,44 J", "2,94 J"]),
    ],
    image_url: `${IMG}/4-pendulum-setup.png`,
  },
  {
    number: "4", sub_number: "4.3",
    text: "As the steel ball (0,5 kg) swings through its lowest position at point C, it collides with a stationary crate of mass 0,1 kg. Immediately after the collision the crate moves at a velocity of 3,5 m·s⁻¹ to the right. The mechanical energy of the ball at B was 5,19 J, and C is at ground level. Calculate the velocity of the steel ball immediately after the collision.",
    marks: 7, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "Speed at C by conservation of mechanical energy: (U + K)B = (U + K)C, so 5,19 = 0 + ½(0,5)v², giving v = 4,56 m·s⁻¹. Momentum is conserved in the collision: Σp(before) = Σp(after), (0,5)(4,56) + 0 = (0,5)vf + (0,1)(3,5), giving vf = 3,86 m·s⁻¹ to the right.",
    marking_notes: "Memo ticks: (U + K)B = (U + K)C; 5,19; ½(0,5)v²; Σpbefore = Σpafter; two substitution ticks (0,5)(4,56) + 0 and (0,5)vf + (0,1)(3,5); 3,86 m·s⁻¹ to the right (3,88 m·s⁻¹ also accepted in the memo). Wnet = ΔEk is also accepted for the first part.",
    steps: [
      mc(1, "Which relationship gives the ball's speed at C?", "(U + K)B = (U + K)C", ["KB = KC", "UB = KC", "UC = KB"]),
      mc(2, "Which substitution is correct for the speed at C?", "5,19 = 0 + ½(0,5)v²", ["2,94 = 0 + ½(0,5)v²", "5,19 = 0 + ½(0,5)v", "5,19 = 0 + (0,5)v²"]),
      mc(1, "Which principle applies to the collision?", "Σp(before) = Σp(after) (conservation of momentum)", ["Ek(before) = Ek(after)", "Wnet = ΔEk", "Fnet = ma"]),
      mc(2, "Which momentum substitution is correct (right positive, vC = 4,56 m·s⁻¹)?", "(0,5)(4,56) + 0 = (0,5)vf + (0,1)(3,5)", ["(0,5)(4,56) + 0 = (0,5)vf − (0,1)(3,5)", "(0,5)(4,56) = (0,5)vf", "(0,5)(3) + 0 = (0,5)vf + (0,1)(3,5)"]),
      mc(1, "What is the velocity of the ball immediately after the collision?", "3,86 m·s⁻¹ to the right", ["5,26 m·s⁻¹ to the right", "4,56 m·s⁻¹ to the right", "2,28 m·s⁻¹ to the right"]),
    ],
    image_url: `${IMG}/4-pendulum-setup.png`,
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (15 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A worker pulls a crate of mass 30 kg from rest along a horizontal floor by applying a constant force of magnitude 50 N at an angle of 30° to the horizontal. A frictional force of magnitude 20 N acts on the crate whilst moving along the floor. Draw a labelled free-body diagram to show ALL the forces acting on the crate during its motion. (Since a drawing cannot be auto-marked, answer by identifying the correct arrow for each force.)",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces: weight w (Fg, mg = 294 N) vertically downwards; normal force N vertically upwards; applied force F = 50 N at 30° above the horizontal in the direction of motion (or its components 43,30 N horizontal and 25 N vertical); friction f = 20 N horizontal, opposing the motion.",
    marking_notes: "1 mark per correctly labelled arrow in the correct direction: N, w, applied force (or its two components), f. Accepted labels per the memo include FN/N, Fg/w/mg, Fapplied/F/FA, f/Ffriction/Ff.",
    steps: [
      mc(1, "Weight (w, Fg or mg) on the crate", "Drawn vertically downwards, labelled w / Fg / mg", ["Drawn vertically upwards", "Drawn perpendicular to the applied force", "Drawn horizontally to the left"]),
      mc(1, "Normal force (N) on the crate", "Drawn vertically upwards, perpendicular to the floor, labelled N / FN", ["Drawn vertically downwards", "Drawn at 30° above the horizontal", "Drawn horizontally to the right"]),
      mc(1, "Applied force by the worker", "50 N at 30° above the horizontal, in the direction of motion (or its 43,30 N horizontal and 25 N vertical components)", ["50 N at 30° below the horizontal", "50 N horizontal, opposite to the motion", "50 N vertically upwards"]),
      mc(1, "Frictional force on the crate", "20 N horizontal, opposing the motion (to the left)", ["20 N horizontal in the direction of motion", "20 N vertically downwards", "43,30 N horizontal, opposing the motion"]),
    ],
    image_url: `${IMG}/5-crate-force.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Give a reason why each of the vertical forces acting on the crate (the normal force and the weight) do NO WORK on the crate.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "The (normal and gravitational) forces are perpendicular (at 90°) to the direction of the displacement: W = FΔx cos 90° = 0.",
    marking_notes: "Memo: W = FΔx cos 90° = 0 (2 marks), OR they are perpendicular to / at 90° to the displacement (2 marks), OR the crate moves horizontally and the forces act vertically (2 marks).",
    steps: [
      mc(1, "Why do the normal force and the weight do no work on the crate?", "They are perpendicular (at 90°) to the displacement of the crate", ["They cancel each other, so the net vertical force is zero", "They are conservative forces, so they never do work", "The crate has no vertical acceleration because it is heavy"]),
      mc(1, "Which expression shows the work done by each of these forces?", "W = FΔx cos 90° = 0", ["W = FΔx cos 0° = FΔx", "W = FΔx cos 180° = −FΔx", "W = FΔx sin 90° = FΔx"]),
    ],
    image_url: `${IMG}/5-crate-force.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "Calculate the net work done on the crate (30 kg, pulled by a 50 N force at 30° above the horizontal against 20 N friction) as it reaches point P, 6 m from the starting point O.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = Wapplied + Wf = FΔx cos30° + fΔx cos180° = (50)(6)cos30° + (20)(6)cos180° = 259,81 + (−120) = 139,81 J. (Equivalent: Fnet = 50cos30° − 20 = 23,30 N, Wnet = FnetΔx = 139,81 J.)",
    marking_notes: "Memo ticks: formula; substitution for the applied force's work; substitution for friction's work; 139,81 J. Alternative routes (Fnet·Δx; Wnet = ΔK via a and v) are accepted. If Wapplied is given instead of Wnet, maximum 2/3 marks per the memo note. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which expression gives the net work done on the crate?", "Wnet = FΔx cos30° + fΔx cos180°", ["Wnet = FΔx cos30° + fΔx cos0°", "Wnet = FΔx sin30° + fΔx cos180°", "Wnet = FΔx cos30° only (friction ignored)"]),
      mc(1, "What is the work done by the applied force?", "259,81 J", ["150,00 J", "300,00 J", "129,90 J"]),
      mc(1, "What is the work done by the friction force?", "−120 J", ["+120 J", "−20 J", "−60 J"]),
      mc(1, "What is the net work done on the crate?", "139,81 J", ["379,81 J", "30,00 J", "259,81 J"]),
    ],
    image_url: `${IMG}/5-crate-force.png`,
  },
  {
    number: "5", sub_number: "5.4",
    text: "Use the work-energy theorem to calculate the speed of the crate at the instant it reaches point P. (The crate has mass 30 kg, starts from rest, and the net work done on it between O and P is 139,81 J.)",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = ΔK = ½mvf² − ½mvi², so 139,81 = ½(30)vf² − 0, giving vf = 3,05 m·s⁻¹.",
    marking_notes: "Memo ticks: Wnet = ΔK; substitution; 3,05 m·s⁻¹. No marks for any other method per the memo. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which statement of the work-energy theorem applies?", "Wnet = ΔK = ½mvf² − ½mvi²", ["Wnet = ½m(vf − vi)²", "Wnet = ΔU", "Wnet = mvf − mvi"]),
      mc(1, "Which substitution is correct?", "139,81 = ½(30)vf² − 0", ["139,81 = ½(30)vf − 0", "139,81 = (30)vf²", "259,81 = ½(30)vf² − 0"]),
      mc(1, "What is the speed of the crate at P?", "3,05 m·s⁻¹", ["9,32 m·s⁻¹", "4,16 m·s⁻¹", "6,10 m·s⁻¹"]),
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "The worker now applies a force of the same magnitude, but at a SMALLER ANGLE to the horizontal, on the crate. How does the work done by the worker now compare to the work done by the worker in QUESTION 5.3? Write down only GREATER THAN, SMALLER THAN or EQUAL TO. Give a reason for the answer. (No calculations are required.)",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Greater than. The horizontal component of the force (the component in the direction of motion) is now greater: as θ decreases, cos θ increases (cos θ > cos 30° for θ < 30°), so W = FΔx cos θ is greater.",
    marking_notes: "1 mark: greater than. 1 mark: valid reason (greater horizontal component / cos θ increases).",
    steps: [
      mc(1, "How does the work done by the worker compare with that in 5.3?", "Greater than", ["Smaller than", "Equal to", "It depends on the friction"]),
      mc(1, "Which reason is correct?", "The horizontal component of the force is greater (cos θ increases as θ decreases)", ["The vertical component of the force is greater, so more work is done", "The applied force itself is greater at a smaller angle", "The friction force is smaller at a smaller angle"]),
    ],
  },

  // ============ QUESTION 6: DOPPLER EFFECT (6 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "The siren of a burglar alarm system has a frequency of 960 Hz. During a patrol, a security officer, travelling in his car, hears the siren of the alarm of a house and approaches the house at constant velocity. A detector in his car registers the frequency of the sound as 1 000 Hz. Name the phenomenon that explains the change in the observed frequency.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler effect.",
    marking_notes: "Accept 'Doppler effect'.",
    steps: [mc(1, "Which phenomenon explains the change in the observed frequency?", "The Doppler effect", ["Interference of sound waves", "Resonance", "Diffraction of sound"])],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Calculate the speed at which the patrol car approaches the house. (Siren frequency 960 Hz; detected frequency 1 000 Hz; use the speed of sound in air as 340 m·s⁻¹.)",
    marks: 4, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "fL = ((v + vL)/v)fs (listener moving towards a stationary source), so 1 000 = ((340 + vL)/340)(960), giving vL = 14,17 m·s⁻¹.",
    marking_notes: "Memo ticks: correct Doppler formula (fL = (v ± vL)/(v ± vs) fs, here fL = ((v + vL)/v)fs); substitution of 1 000; substitution of 960; vL = 14,17 m·s⁻¹. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which Doppler expression fits a listener moving towards a stationary source?", "fL = ((v + vL)/v) fs", ["fL = ((v − vL)/v) fs", "fL = (v/(v + vs)) fs", "fL = (v/(v − vL)) fs"]),
      mc(2, "Which substitution is correct?", "1 000 = ((340 + vL)/340)(960)", ["1 000 = ((340 − vL)/340)(960)", "960 = ((340 + vL)/340)(1 000)", "1 000 = (340/(340 + vL))(960)"]),
      mc(1, "What is the speed of the car?", "14,17 m·s⁻¹", ["13,60 m·s⁻¹", "40,00 m·s⁻¹", "354,17 m·s⁻¹"]),
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "If the patrol car had approached the house at a higher speed, how would the detected frequency have compared to the first observed frequency of 1 000 Hz? Write down only HIGHER THAN, LOWER THAN or EQUAL TO.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Higher than (fL = ((v + vL)/v)fs increases as vL increases).",
    marking_notes: "Accept 'higher than'.",
    steps: [mc(1, "Detected frequency at a higher car speed compared with 1 000 Hz", "Higher than", ["Lower than", "Equal to", "Zero"])],
  },

  // ============ QUESTION 7: INTERFERENCE (7 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "Monochromatic red light passes through a double slit. Circular wave fronts advancing towards the screen are shown (solid lines = crests, dotted lines = troughs). Interference of the circular wave fronts results in an interference pattern on the screen; P, Q and R are the centres of different bands. Define the term interference.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "When two waves pass through the same region of space at the same time, resulting in the superposition of the waves.",
    marking_notes: "1 mark: two waves pass through the same region of space at the same time. 1 mark: resulting in superposition of the waves.",
    steps: [
      mc(1, "When does interference occur?", "When two waves pass through the same region of space at the same time", ["When a wave bends around a sharp edge", "When a wave bounces back from a surface", "When a wave changes speed on entering a different medium"]),
      mc(1, "What results from this?", "The superposition of the waves (their displacements add)", ["The waves cancel each other permanently", "The frequency of both waves changes", "The waves are totally reflected"]),
    ],
    image_url: `${IMG}/7-double-slit.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "What type of interference takes place at point A (a point where two dotted lines, i.e. two troughs, cross)? Give a reason for the answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Constructive interference: the waves crossing each other are in phase (two troughs meet; the path difference is a whole number of wavelengths).",
    marking_notes: "1 mark: constructive. 1 mark: waves in phase / two troughs meet / path difference = nλ.",
    steps: [
      mc(1, "Which type of interference takes place at A?", "Constructive interference", ["Destructive interference", "Diffraction only", "Polarisation"]),
      mc(1, "Which reason is correct?", "The waves are in phase: two troughs meet (path difference is a whole number of wavelengths)", ["A crest meets a trough, so the waves are out of phase", "The path difference is a half-integer number of wavelengths", "The waves travel in opposite directions"]),
    ],
    image_url: `${IMG}/7-double-slit.png`,
  },
  {
    number: "7", sub_number: "7.3",
    text: "Is band P a dark band or a red band? Refer to the type of interference involved to explain how you arrived at the answer.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Dark band. It lies on the (nodal) line combining all the points where crests and troughs overlap, resulting in destructive interference.",
    marking_notes: "1 mark: dark band. 1 mark: lies on the nodal line where crests and troughs overlap. 1 mark: destructive interference.",
    steps: [
      mc(1, "Is band P a dark band or a red band?", "A dark band", ["A red band", "Both a dark and a red band", "It cannot be determined"]),
      mc(1, "Where does band P lie on the wave pattern?", "On the (nodal) line where crests and troughs overlap", ["On the line where crests meet crests", "On the line where troughs meet troughs", "On the line equidistant from both slits"]),
      mc(1, "Which type of interference gives band P?", "Destructive interference", ["Constructive interference", "Diffraction only", "Refraction"]),
    ],
    image_url: `${IMG}/7-double-slit.png`,
  },

  // ============ QUESTION 8: DIFFRACTION (10 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "The relationship between the degree of diffraction of light and slit width is investigated. Monochromatic light of wavelength 410 nm is passed through a single slit of width a at a fixed distance from a screen. The angles at which the first minimum (α) and the second minimum (β) occur are measured. Define the term diffraction.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The ability of a wave to bend/spread out (in wave fronts) as it passes through a (small) aperture or around a (sharp) edge/corner/barrier.",
    marking_notes: "1 mark: the ability of a wave to bend / spread out. 1 mark: as it passes through a small aperture or around an edge/barrier.",
    steps: [
      mc(1, "What is diffraction the ability of a wave to do?", "Bend / spread out (in wave fronts)", ["Reflect back along its path", "Change frequency", "Cancel another wave completely"]),
      mc(1, "When does this happen?", "As the wave passes through a small opening or around a sharp edge / barrier", ["As the wave passes from one medium into another", "As two waves of the same frequency overlap", "As the source moves towards the observer"]),
    ],
    image_url: `${IMG}/8-diffraction-slit.png`,
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "For this investigation (angles of the first and second minima measured for two different slit widths; same light source), name the DEPENDENT variable.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The angle of diffraction / position of the minima (α or β).",
    marking_notes: "Accept angle of (degree of) diffraction, position of minima, or α or β.",
    steps: [mc(1, "Which is the dependent variable?", "The angle of diffraction (position of the minima, α or β)", ["The slit width", "The wavelength of the light", "The distance from the slit to the screen"])],
    image_url: `${IMG}/8-diffraction-slit.png`,
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "For this investigation (angles of the first and second minima measured for two different slit widths; same light source), name the INDEPENDENT variable.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "(Slit) width / a.",
    marking_notes: "Accept slit width or a.",
    steps: [mc(1, "Which is the independent variable?", "The (slit) width a", ["The angle of the first minimum", "The wavelength of the light", "The brightness of the central band"])],
    image_url: `${IMG}/8-diffraction-slit.png`,
  },
  {
    number: "8", sub_number: "8.3",
    text: "The results are: Slit 1, first minimum at 10°, second minimum at 20°; Slit 2, first minimum at 5°, second minimum at 10°. Which ONE of Slit 1 or Slit 2 is the narrower slit? Explain the answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Slit 1. It gives the larger angle for the first minimum, i.e. more diffraction; the angle (sin θ) is inversely proportional to slit width (sin θ = mλ/a).",
    marking_notes: "1 mark: Slit 1. 1 mark: any valid reason: slit 1 shows the most diffraction / larger angle for first minimum for slit 1 / smaller angle for slit 2 / angle (sin θ) ∝ 1/a / calculations showing slit 1 is narrower.",
    steps: [
      mc(1, "Which slit is narrower?", "Slit 1", ["Slit 2", "They are equally wide", "It cannot be determined from the data"]),
      mc(1, "Which reason is correct?", "Slit 1 gives the larger angle for the first minimum (more diffraction); the angle is inversely proportional to the slit width", ["Slit 1 gives the larger angle, so the angle is directly proportional to the slit width", "Slit 2 gives the smaller angle, so Slit 2 is the narrower slit", "Both slits give a second minimum at twice the first, so they have equal widths"]),
    ],
    image_url: `${IMG}/8-diffraction-slit.png`,
  },
  {
    number: "8", sub_number: "8.4",
    text: "Use the data in the table to calculate the width of Slit 2. (λ = 410 nm; Slit 2: first minimum at 5°, second minimum at 10°.)",
    marks: 4, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "a sin θ = mλ. For the first minimum of Slit 2: sin 5° = (1)(410 × 10⁻⁹)/a, giving a = 4,70 × 10⁻⁶ m.",
    marking_notes: "Memo ticks: formula a sin θ = mλ; correct substitution; answer. Option 1: first minimum, a = 4,70 × 10⁻⁶ m. Option 2 (second minimum, m = 2, 10°): a = 4,72 × 10⁻⁶ m, also accepted by the memo. Full marks if the calculation was done correctly in 8.3. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula applies to the minima of single-slit diffraction?", "a sin θ = mλ", ["a cos θ = mλ", "a sin θ = λ/m", "a = mλ sin θ"]),
      mc(2, "Which substitution is correct for the FIRST minimum of Slit 2?", "sin 5° = (1)(410 × 10⁻⁹)/a", ["sin 5° = (2)(410 × 10⁻⁹)/a", "sin 10° = (1)(410 × 10⁻⁹)/a", "sin 5° = (1)(410)/a"]),
      mc(1, "What is the width of Slit 2?", "4,70 × 10⁻⁶ m", ["9,41 × 10⁻⁶ m", "2,35 × 10⁻⁶ m", "4,70 × 10⁻³ m"]),
    ],
    image_url: `${IMG}/8-diffraction-slit.png`,
  },

  // ============ QUESTION 9: CAPACITORS (17 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A certain parallel plate capacitor consists of two plates, each of dimension 15 mm by 20 mm, separated by a distance of 1,5 mm. The space between the plates is occupied by air. Define the term capacitance, in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The ratio of the (amount of) charge (transferred/stored) to the (resulting) potential difference.",
    marking_notes: "1 mark: ratio of the (amount of) charge. 1 mark: to the (resulting) potential difference.",
    steps: [
      mc(1, "Capacitance is the ratio of which quantity ...", "The (amount of) charge stored/transferred", ["The potential difference", "The energy stored", "The current"]),
      mc(1, "... to which quantity?", "The (resulting) potential difference", ["The charge", "The plate separation", "The time taken to charge"]),
    ],
  },
  {
    number: "9", sub_number: "9.2",
    text: "Calculate the capacitance of this capacitor (plates 15 mm by 20 mm, separation 1,5 mm, air between the plates; ε0 = 8,85 × 10⁻¹² F·m⁻¹).",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C = ε0A/d (K = 1 for air) = (8,85 × 10⁻¹²)(15 × 10⁻³)(20 × 10⁻³)/(1,5 × 10⁻³) = 1,77 × 10⁻¹² F (1,77 pF).",
    marking_notes: "Memo ticks: formula C = ε0A/d (or Kε0A/d with K = 1); the second formula tick; area A = 3 × 10⁻⁴ m² substituted; d = 1,5 × 10⁻³ m; answer 1,77 × 10⁻¹² F. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula gives the capacitance of a parallel plate capacitor?", "C = ε0A/d", ["C = ε0d/A", "C = A/(ε0d)", "C = ε0Ad"]),
      mc(1, "What is the area of each plate, in m²?", "3,0 × 10⁻⁴ m²", ["3,5 × 10⁻² m²", "3,0 × 10² m²", "7,5 × 10⁻⁵ m²"]),
      mc(2, "Which substitution is correct?", "C = (8,85 × 10⁻¹²)(3 × 10⁻⁴)/(1,5 × 10⁻³)", ["C = (8,85 × 10⁻¹²)(3 × 10⁻⁴)/(1,5)", "C = (8,85 × 10⁻¹²)(1,5 × 10⁻³)/(3 × 10⁻⁴)", "C = (8,85 × 10⁻¹²)(35 × 10⁻³)/(1,5 × 10⁻³)"]),
      mc(1, "What is the capacitance?", "1,77 × 10⁻¹² F", ["1,77 × 10⁻¹⁵ F", "4,43 × 10⁻¹¹ F", "1,77 × 10⁻⁹ F"]),
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "The ABOVE CAPACITOR, initially uncharged, is connected in series to a resistor, an ammeter of negligible resistance and a 12 V source (negligible internal resistance). Switch S is now closed. Draw a sketch graph of current versus time to show how the ammeter reading changes with time as the capacitor charges. (Since a sketch cannot be auto-marked, answer by identifying the features of the correct graph.)",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "The current starts at its maximum value at t = 0 (uncharged capacitor) and decreases non-linearly (exponential-type curve) towards zero as the capacitor charges.",
    marking_notes: "Memo: correct shape of graph showing decreasing current with time (2 marks).",
    steps: [
      mc(1, "What is the current at the instant the switch is closed (t = 0)?", "At its maximum value", ["Zero", "Half of its maximum value", "Constant at the 12 V / R value for all time"]),
      mc(1, "How does the current change as the capacitor charges?", "It decreases as a curve (not a straight line), approaching zero", ["It increases as a curve to a maximum", "It decreases in a straight line to zero", "It stays constant and then drops suddenly to zero"]),
    ],
    image_url: `${IMG}/9-capacitor-circuit.png`,
  },
  {
    number: "9", sub_number: "9.4",
    text: "The capacitor (C = 1,77 × 10⁻¹² F) is now fully charged by the 12 V source. Calculate the magnitude of the charge on each plate of the capacitor.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C = Q/V, so 1,77 × 10⁻¹² = Q/12, giving Q = 2,12 × 10⁻¹¹ C.",
    marking_notes: "Memo ticks: C = Q/V; substitution; Q = 2,12 × 10⁻¹¹ C. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula links capacitance, charge and potential difference?", "C = Q/V", ["C = QV", "C = V/Q", "C = Q/V²"]),
      mc(1, "Which substitution is correct?", "1,77 × 10⁻¹² = Q/12", ["1,77 × 10⁻¹² = 12/Q", "1,77 × 10⁻¹² = Q × 12", "1,77 × 10⁻¹² = Q/(1,5 × 10⁻³)"]),
      mc(1, "What is the charge on each plate?", "2,12 × 10⁻¹¹ C", ["1,48 × 10⁻¹³ C", "2,12 × 10⁻¹² C", "6,78 × 10¹² C"]),
    ],
  },
  {
    number: "9", sub_number: "9.5",
    text: "One of the molecules in the air between the plates of the capacitor becomes ionised. This ion carries a charge of +3,2 × 10⁻¹⁹ C. Calculate the magnitude of the electrostatic force experienced by this ion between the plates. (Potential difference across the plates 12 V; separation 1,5 × 10⁻³ m.)",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "E = V/d = 12/(1,5 × 10⁻³) = 8 × 10³ V·m⁻¹; E = F/q, so 8 × 10³ = F/(3,2 × 10⁻¹⁹), giving F = 2,56 × 10⁻¹⁵ N. (Equivalent: F = Vq/d = (12)(3,2 × 10⁻¹⁹)/(1,5 × 10⁻³).)",
    marking_notes: "Memo Option 1: F = Vq/d (2 ticks), substitution, answer. Option 2: E = V/d, substitution, E = F/q, substitution, answer (5 ticks). Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula gives the electric field between the plates?", "E = V/d", ["E = Vd", "E = Q/V", "E = kQ/r² (point charge)"]),
      mc(1, "Which formula gives the force on the ion in this field?", "F = qE", ["F = E/q", "F = q/E", "F = qE²"]),
      mc(2, "Which substitution is correct?", "F = (3,2 × 10⁻¹⁹)(12/(1,5 × 10⁻³))", ["F = (3,2 × 10⁻¹⁹)(12)(1,5 × 10⁻³)", "F = (3,2 × 10⁻¹⁹)(12)/(1,5)", "F = (1,6 × 10⁻¹⁹)(12/(1,5 × 10⁻³))"]),
      mc(1, "What is the magnitude of the force on the ion?", "2,56 × 10⁻¹⁵ N", ["2,56 × 10⁻¹⁸ N", "1,28 × 10⁻¹⁵ N", "5,76 × 10⁻²¹ N"]),
    ],
    image_url: `${IMG}/9-capacitor-circuit.png`,
  },

  // ============ QUESTION 10: ELECTRIC CIRCUITS (16 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "The headlights of a car are connected in parallel to a 12 V battery (internal resistance 0,1 Ω; each headlight 1,4 Ω). The starter motor is connected in parallel with the headlights and controlled by the ignition switch S2. State Ohm's law in words.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The current in a conductor is directly proportional to the potential difference across its ends at constant temperature.",
    marking_notes: "1 mark: current directly proportional to the potential difference. 1 mark: at constant temperature. (Alternative: the ratio of potential difference to current is constant at constant temperature.)",
    steps: [
      mc(1, "Which relationship does Ohm's law state?", "The current in a conductor is directly proportional to the potential difference across its ends", ["The current is inversely proportional to the potential difference", "The current is directly proportional to the resistance", "The potential difference is inversely proportional to the resistance"]),
      mc(1, "Under which condition does it hold?", "At constant temperature", ["At constant current", "At constant power", "At any temperature"]),
    ],
    image_url: `${IMG}/10-headlights-circuit.png`,
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "With only switch S1 closed, calculate the effective resistance of the two headlights (two 1,4 Ω headlights in parallel).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "1/Rp = 1/R1 + 1/R2 = 1/1,4 + 1/1,4, so Rp = 0,7 Ω.",
    marking_notes: "Memo ticks: parallel formula (1/Rp = 1/R1 + 1/R2, or Rp = R1R2/(R1 + R2)); substitution; 0,7 Ω. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula gives the effective resistance of resistors in parallel?", "1/Rp = 1/R1 + 1/R2", ["Rp = R1 + R2", "Rp = (R1 + R2)/(R1R2)", "1/Rp = R1 + R2"]),
      mc(1, "Which substitution is correct?", "1/Rp = 1/1,4 + 1/1,4", ["1/Rp = 1/1,4 + 1/0,1", "1/Rp = 1/1,4 + 1/1,4 + 1/0,1", "1/Rp = 1,4 + 1,4"]),
      mc(1, "What is the effective resistance of the headlights?", "0,7 Ω", ["2,8 Ω", "1,4 Ω", "0,8 Ω"]),
    ],
    image_url: `${IMG}/10-headlights-circuit.png`,
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "With only switch S1 closed, calculate the potential difference across the two headlights. (emf 12 V, internal resistance 0,1 Ω, headlights' effective resistance 0,7 Ω.)",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "emf = I(R + r): 12 = I(0,7 + 0,1), so I = 15 A. V = IR = (15)(0,7) = 10,5 V. (Equivalent: Vexternal = 12 − Ir = 12 − (15)(0,1) = 10,5 V.)",
    marking_notes: "Memo ticks (Option 1): emf = I(R + r); substitution; V = IR (or R = V/I) with substitution (15)(0,7); 10,5 V. Other options (lost volts, voltage divider, current in headlight) are accepted. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which expression applies to the whole circuit (cell with internal resistance)?", "emf = I(R + r)", ["emf = I(R − r)", "emf = IR only", "emf = IRr"]),
      mc(1, "Which substitution gives the total current?", "12 = I(0,7 + 0,1), so I = 15 A", ["12 = I(0,7), so I = 17,14 A", "12 = I(1,4 + 0,1), so I = 8,00 A", "12 = I(0,7 − 0,1), so I = 20,00 A"]),
      mc(1, "Which expression gives the potential difference across the headlights?", "V = IR = (15)(0,7)", ["V = IR = (15)(0,8)", "V = IR = (15)(1,4)", "V = IR = (7,5)(0,7)"]),
      mc(1, "What is the potential difference across the headlights?", "10,5 V", ["12,0 V", "1,5 V", "21,0 V"]),
    ],
    image_url: `${IMG}/10-headlights-circuit.png`,
  },
  {
    number: "10", sub_number: "10.2.3",
    text: "With only switch S1 closed, calculate the power dissipated by one of the headlights. (Potential difference across the headlights 10,5 V; each headlight 1,4 Ω.)",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = V²/R = (10,5)²/1,4 = 78,75 W. (Equivalent: P = VI = (10,5)(7,5) or P = I²R = (7,5)²(1,4), with I = 7,5 A through each headlight.)",
    marking_notes: "Memo ticks: correct power formula (V²/R, VI or I²R); substitution; 78,75 W. The 'total power ÷ 2' routes are accepted only because the bulbs are identical. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula gives the power of one headlight from V and R?", "P = V²/R", ["P = V/R²", "P = VR", "P = I²/R"]),
      mc(1, "Which substitution is correct?", "P = (10,5)²/1,4", ["P = (10,5)²/0,7", "P = (12)²/1,4", "P = (10,5)²/(1,4 + 0,1)"]),
      mc(1, "What is the power dissipated by one headlight?", "78,75 W", ["157,50 W", "102,86 W", "73,50 W"]),
    ],
    image_url: `${IMG}/10-headlights-circuit.png`,
  },
  {
    number: "10", sub_number: "10.3",
    text: "Ignition switch S2 is now closed (whilst S1 is also closed) for a short time and the starter motor, with VERY LOW RESISTANCE, rotates. How will the brightness of the headlights be affected while switch S2 is closed? Write down only INCREASES, DECREASES or REMAINS THE SAME. Fully explain how you arrived at the answer.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases. The (effective/total) resistance decreases (the very low resistance starter motor is added in parallel), so the (total) current increases. The 'lost volts' (Ir across the internal resistance) increases, so the potential difference across the headlights decreases, and P = V²/R decreases.",
    marking_notes: "1 mark: decreases. 1 mark: (effective/total) resistance decreases. 1 mark: (total) current increases. 1 mark: lost volts / Ir increases, so the PD across the headlights decreases (P = V²/R decreases).",
    steps: [
      mc(1, "How is the brightness of the headlights affected?", "Decreases", ["Increases", "Remains the same", "First increases, then decreases"]),
      mc(1, "What happens to the effective (external) resistance?", "It decreases (the very low resistance motor is in parallel)", ["It increases", "It stays the same because parallel branches are independent", "Only the internal resistance decreases"]),
      mc(1, "What happens to the total current from the battery?", "It increases", ["It decreases", "It stays the same", "It becomes zero"]),
      mc(1, "Why does this change the brightness?", "Lost volts (Ir) increases, so the potential difference across the headlights decreases", ["Lost volts decreases, so the potential difference across the headlights increases", "The emf of the battery drops to zero", "The potential difference across each branch stays at 12 V"]),
    ],
    image_url: `${IMG}/10-headlights-circuit.png`,
  },

  // ============ QUESTION 11: AC GENERATOR (10 marks) ============

  {
    number: "11", sub_number: "11.1.1",
    text: "The output of an AC generator is shown in the graph (peak potential difference 311,13 V). A light bulb with an average power rating of 100 W is connected to this generator. Calculate the rms potential difference across the light bulb.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Vrms = Vmax/√2 = 311,13/√2 = 220 V.",
    marking_notes: "Memo ticks: Vrms = Vmax/√2; substitution; 220 V. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula links Vrms and Vmax?", "Vrms = Vmax/√2", ["Vrms = Vmax × √2", "Vrms = Vmax/2", "Vrms = 2Vmax"]),
      mc(1, "Which substitution is correct?", "Vrms = 311,13/√2", ["Vrms = 311,13/2", "Vrms = (2 × 311,13)/√2", "Vrms = 311,13 × √2"]),
      mc(1, "What is the rms potential difference?", "220 V", ["440 V", "155,57 V", "311,13 V"]),
    ],
    image_url: `${IMG}/11-ac-generator-graph.png`,
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "A light bulb with an average power rating of 100 W is connected to the AC generator, whose rms output is 220 V (peak 311,13 V). Calculate the peak current (Imax) through the light bulb.",
    marks: 5, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Pave = VrmsIrms: 100 = (220)Irms, so Irms = 0,45 A. Irms = Imax/√2, so Imax = 0,45 × √2 = 0,64 A.",
    marking_notes: "Memo Option 1 ticks: Pave = VrmsIrms; substitution (220); Irms = Imax/√2; substitution 0,45√2; 0,64 A. Options 2 and 3 (via R = Vrms²/Pave = 484 Ω, then Imax = Vmax/R; or Pave = VmaxImax/2) are also accepted. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula links average power, rms voltage and rms current?", "Pave = Vrms Irms", ["Pave = Vmax Imax", "Pave = Vrms/Irms", "Pave = Vrms² Irms"]),
      mc(1, "Which substitution is correct?", "100 = (220)Irms", ["100 = (311,13)Irms", "100 = (220)Irms²", "100 = Irms/220"]),
      mc(1, "Which formula links Irms and Imax?", "Irms = Imax/√2", ["Irms = Imax × √2", "Irms = Imax/2", "Irms = 2Imax"]),
      mc(1, "Which substitution gives Imax (Irms = 0,45 A)?", "Imax = 0,45 × √2", ["Imax = 0,45/√2", "Imax = 0,45 × 2", "Imax = 0,45"]),
      mc(1, "What is the peak current?", "0,64 A", ["0,32 A", "0,45 A", "0,90 A"]),
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "The AC generator is replaced with a DC generator. Draw the graph of potential difference versus time for the output of the DC generator. (No numerical values are expected on the axes. Since a sketch cannot be auto-marked, answer by identifying the features of the correct graph.)",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "A series of half-sine loops all on the same side of the time axis (never crossing zero), each of equal height (a rectified output, whether drawn above or below the axis).",
    marking_notes: "Memo: correct shape for at least one cycle (1 mark) and loops of equal height (1 mark). Loops above or below the axis are both accepted.",
    steps: [
      mc(1, "What is the correct shape of the DC generator's output?", "Half-sine loops all on one side of the time axis (the PD never changes sign)", ["A sine wave crossing the time axis, alternating positive and negative", "A horizontal straight line", "A straight sawtooth line that falls to zero"]),
      mc(1, "What can be said about the height of the loops?", "The loops are all of equal height", ["The loops steadily get taller", "The loops steadily get smaller", "The loops alternate between tall and short"]),
    ],
  },

  // ============ QUESTION 12: PHOTOELECTRIC EFFECT (12 marks) ============

  {
    number: "12", sub_number: "12.1",
    text: "Sunlight is a major source of ultraviolet light. Overexposure to ultraviolet light could have harmful effects on humans. State ONE of these harmful effects on humans.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Any ONE: damage to skin / causes (skin) cancer; damage to eyes / increased occurrence of cataracts; damage to crops resulting in food shortages.",
    marking_notes: "Accept any one of: skin damage / skin cancer; eye damage / cataracts; crop damage.",
    steps: [mc(1, "Which is a harmful effect of overexposure to ultraviolet light on humans?", "Skin cancer / skin damage", ["Hearing loss", "Bone fractures", "Increased muscle strength"])],
  },
  {
    number: "12", sub_number: "12.2",
    text: "Medical practitioners expose surgery equipment to ultraviolet light. Give a reason for doing this.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "It kills bacteria / germs (sterilises, sanitises or disinfects the equipment).",
    marking_notes: "Accept kills bacteria/germs; sterilises/sanitises/disinfects equipment.",
    steps: [mc(1, "Why is surgical equipment exposed to ultraviolet light?", "To kill bacteria / sterilise the equipment", ["To heat the equipment so it expands", "To magnetise the instruments", "To make the equipment radioactive"])],
  },
  {
    number: "12", sub_number: "12.3",
    text: "A certain metal has a work function of 3,84 × 10⁻¹⁹ J. The surface of the metal is irradiated with ultraviolet light of wavelength 200 nm causing photoelectrons to be emitted. Calculate the energy of a photon of ultraviolet light.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = hc/λ = (6,63 × 10⁻³⁴)(3 × 10⁸)/(200 × 10⁻⁹) = 9,95 × 10⁻¹⁹ J. (Equivalent: c = fλ gives f = 1,5 × 10¹⁵ Hz, then E = hf = (6,63 × 10⁻³⁴)(1,5 × 10¹⁵).)",
    marking_notes: "Memo ticks: E = hc/λ (or E = hf and c = fλ); substitution; answer 9,95 × 10⁻¹⁹ J. Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which formula gives the photon energy from the wavelength?", "E = hc/λ", ["E = hλ/c", "E = hcλ", "E = λ/(hc)"]),
      mc(2, "Which substitution is correct?", "E = (6,63 × 10⁻³⁴)(3 × 10⁸)/(200 × 10⁻⁹)", ["E = (6,63 × 10⁻³⁴)(3 × 10⁸)/(200)", "E = (6,63 × 10⁻³⁴)(3 × 10⁸)(200 × 10⁻⁹)", "E = (6,63 × 10⁻³⁴)(200 × 10⁻⁹)/(3 × 10⁸)"]),
      mc(1, "What is the energy of the photon?", "9,95 × 10⁻¹⁹ J", ["9,95 × 10⁻²⁸ J", "1,99 × 10⁻²⁵ J", "6,11 × 10⁻¹⁹ J"]),
    ],
  },
  {
    number: "12", sub_number: "12.4",
    text: "A certain metal has a work function of 3,84 × 10⁻¹⁹ J and is irradiated with ultraviolet light whose photons each have energy 9,95 × 10⁻¹⁹ J. Calculate the maximum velocity of the emitted photoelectrons. (Mass of an electron 9,11 × 10⁻³¹ kg.)",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W0 + Ek: 9,95 × 10⁻¹⁹ = 3,84 × 10⁻¹⁹ + ½(9,11 × 10⁻³¹)v², giving v = 1,16 × 10⁶ m·s⁻¹.",
    marking_notes: "Memo ticks: E = W0 + Ek; substitution (two ticks across the energy terms); v = 1,16 × 10⁶ m·s⁻¹ (the memo gives the range 1 157 583,69 to 1 158 180,94 m·s⁻¹). Alternative: Ek = 9,95 × 10⁻¹⁹ − 3,84 × 10⁻¹⁹ = 6,11 × 10⁻¹⁹ J, then Ek = ½mv². Rule 1.5 (as amended) applies when no formula is shown.",
    steps: [
      mc(1, "Which equation applies (photon energy, work function, kinetic energy)?", "E = W0 + Ek", ["E = W0 − Ek", "E = Ek − W0", "E = W0 × Ek"]),
      mc(2, "Which substitution is correct?", "9,95 × 10⁻¹⁹ = 3,84 × 10⁻¹⁹ + ½(9,11 × 10⁻³¹)v²", ["9,95 × 10⁻¹⁹ = 3,84 × 10⁻¹⁹ + ½(9,11 × 10⁻³¹)v", "3,84 × 10⁻¹⁹ = 9,95 × 10⁻¹⁹ + ½(9,11 × 10⁻³¹)v²", "9,95 × 10⁻¹⁹ + 3,84 × 10⁻¹⁹ = ½(9,11 × 10⁻³¹)v²"]),
      mc(1, "What is the maximum velocity of the photoelectrons?", "1,16 × 10⁶ m·s⁻¹", ["1,48 × 10⁶ m·s⁻¹", "1,74 × 10⁶ m·s⁻¹", "1,34 × 10¹² m·s⁻¹"]),
    ],
  },
  {
    number: "12", sub_number: "12.5",
    text: "Will photoelectrons be emitted from the surface of this metal if it is irradiated with X-rays? Give a reason for the answer.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Yes. X-ray photons have a higher frequency / shorter wavelength / more energy than ultraviolet radiation (which already ejects electrons), so they exceed the work function.",
    marking_notes: "1 mark: yes. 1 mark: X-rays have higher frequency / shorter wavelength / more energy than ultraviolet (UV has a lower frequency than X-rays).",
    steps: [
      mc(1, "Will photoelectrons be emitted when the metal is irradiated with X-rays?", "Yes", ["No", "Only if the X-rays are very intense", "Only after a time delay"]),
      mc(1, "Which reason is correct?", "X-ray photons have a higher frequency (shorter wavelength, more energy) than ultraviolet", ["X-ray photons have a lower frequency than ultraviolet", "X-rays have a longer wavelength than ultraviolet, so they carry more energy", "X-rays are always more intense than ultraviolet light"]),
    ],
  },
];
