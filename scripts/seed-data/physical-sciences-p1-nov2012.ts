// Real DBE past paper: Physical Sciences (Physics) P1, November 2012, National
// (English).
// Source: third-party mirror (maimelatct.com), fetched as two separate PDFs —
// QP: physical-sciences-p1-nov-2012-eng.pdf (20 pages: cover, instructions,
// Section A pages 3-7, Section B pages 8-17, i.e. Questions 1-11 plus data
// sheets) and Memo: physical-sciences-p1-nov-2012-memo-afr-eng.pdf (12 pages,
// bilingual Eng/Afr memorandum). Both PDFs were rendered to page images at
// 220dpi and visually verified: cover pages confirm "PHYSICAL SCIENCES:
// PHYSICS (P1)", "NOVEMBER 2012", "MARKS: 150", "TIME: 3 hours" on the QP,
// and "MEMORANDUM" / "MARKS/PUNTE: 150" on the memo — these are the genuine
// DBE November 2012 NSC papers, not mismatched/stray pages.
//
// Paper structure (unlike the 2024/2025 papers, this one has TWO sections):
//   SECTION A (25 marks): Question 1 (5 one-word items) + Question 2
//     (10 two-mark MCQs) = 25.
//   SECTION B (125 marks): Questions 3-11, structured, compulsory, no
//     choice. Q3=16, Q4=17, Q5=13, Q6=11, Q7=13, Q8=15, Q9=20, Q10=9, Q11=11.
// Section A (25) + Section B (125) = 150, matching the cover page and the
// memo's own "GRAND TOTAL: 150" line. ALL 150 marks are included here.
//
// This paper predates CAPS (CAPS Grade 12 Physical Sciences only phased in
// from 2014; 2012 is late-NCS syllabus), so it reuses the canonical
// Physical Sciences `topics` array defined by the Nov 2025/2024 P1 datasets
// (scripts/seed-data/physical-sciences-p1-nov2025.ts,
// physical-sciences-p1-nov2024.ts) rather than redefining anything — topics
// are upserted by key in scripts/seed.ts, so redeclaring them here is safe
// and required since this file is a standalone dataset.
//
// FLAG for review — content outside the canonical 9 topics: this 2012 NSC
// paper examines two content areas that the later CAPS papers (and this
// repo's `topics` array) don't have a dedicated bucket for:
//   1. Single/double-slit diffraction and interference of light (Q2.4,
//      Q2.8 EM-spectrum ordering, and all of Q7 — 1+2+13 = 16 marks). CAPS
//      removed slit diffraction from the Grade 12 Physical Sciences Waves
//      topic entirely. These questions are mapped to the `doppler-effect`
//      topic key (the closest existing "Waves, Sound and Light" bucket)
//      rather than inventing a new topic key for a single legacy paper —
//      flagging here per the brief's instructions instead of silently
//      adding a topic.
//   2. Capacitors (Q8.2-Q8.5, 11 of Q8's 15 marks). Capacitance isn't a
//      named CAPS Grade 12 topic either. The circuit-behaviour sub-parts
//      (initial current, charging-time trends) are mapped to
//      `electric-circuits`; the charge/electric-field sub-parts are mapped
//      to `electrostatics` as the closer content fit.
// Both choices are judgement calls made to avoid fragmenting topics for a
// single older paper — reasonable alternative mappings exist.
//
// FLAG for review — Q10.3 (rms current in the transmission lines): the
// approved memo's answer is Irms = 2,10 x 10^5 A (210 000 A), obtained from
// Pave = 4,45x10^9 W and Vrms = Vmax/√2 = 2,12x10^4 V. Transcribed exactly
// as the signed memo states it (both "OPTION 1" and "OPTION 2" routes in
// the memo agree on this figure), even though a current of order 10^5 A is
// physically implausible for a real transmission line (ohmic losses at that
// current would be enormous) — this is almost certainly the source paper
// treating Vmax = 30 000 V as unrealistically low for "4,45 x 10^9 W of
// average power" rather than an arithmetic slip in this transcription. Not
// altered, since the task is faithful transcription of the real memo.
//
// Calculation questions (3.2.1, 3.2.2, 4.1, 4.3, 5.3.1, 5.3.2, 6.4.1, 6.4.2,
// 7.3.1, 7.3.2, 8.1, 8.3, 8.5.2, 9.1.1, 9.1.2, 9.1.3, 9.2.2, 10.3, 11.4) use
// `steps` instead of `marking_points`: the student works the problem out on
// paper as normal, then picks the option they got for each mark-earning
// step (formula, intermediate value, final answer) from a few choices,
// rather than typing anything. Short exact-answer recall/identification
// items (e.g. one-word items, MCQ letters, INCREASES/DECREASES/SAME
// questions, graph-reading-off values) also use `steps` for the same
// reason. Distractors are chosen to trap specific real errors (wrong
// formula, sign flip, wrong given value substituted, swapped direction),
// not just arbitrary wrong numbers. Genuinely open-ended "explain/describe"
// answers with multiple creditable phrasings (free-body diagrams, stating
// a law/theorem in words, graph-sketch criteria, evaluative explanations)
// use `marking_points`.
//
// Diagrams: this paper's diagrams (MCQ graphs, circuit diagrams, field
// patterns, the projectile/balcony diagram, the crumple-test diagram, the
// diffraction-geometry diagram, etc.) are vector line drawings rendered
// directly into the page content stream. They were cropped from full-page
// 220dpi renders into public/question-images/physics-2012-p1/. The power
// station transmission diagram on Question 10 (pylons/transformers) is
// purely illustrative context for a question answerable without it, so it
// was skipped per the brief's "purely decorative" allowance.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2012-p1";

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
  year: 2012,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "http://maimelatct.com/wp-content/uploads/2013/08/physical-sciences-p1-nov-2012-eng.pdf" as string | null,
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
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The number of complete waves that pass a point in one second.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Frequency.",
    marking_notes: "Accept only 'frequency'.",
    steps: [
      { marks: 1, description: "What is the term?", options: ["Frequency", "Wavelength", "Amplitude", "Period"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: A circuit component which stores electric charge and releases it instantly.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "Capacitor.",
    marking_notes: "Accept only 'capacitor'.",
    steps: [
      { marks: 1, description: "What is the term?", options: ["Capacitor", "Resistor", "Transformer", "Diode"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: The component in a generator needed to change it from an AC to a DC generator.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Split-ring commutator.",
    marking_notes: "Accept 'split-ring commutator' or 'commutator'.",
    steps: [
      { marks: 1, description: "What is the term?", options: ["Split-ring commutator", "Slip rings", "Armature", "Brushes only"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: The tiny 'packets' (quanta) of energy that light consists of.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Photons.",
    marking_notes: "Accept only 'photons'.",
    steps: [
      { marks: 1, description: "What is the term?", options: ["Photons", "Electrons", "Ions", "Quarks"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: The vector difference of two velocities measured from the same frame of reference.",
    marks: 1, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "Relative velocity.",
    marking_notes: "Accept only 'relative velocity'.",
    steps: [
      { marks: 1, description: "What is the term?", options: ["Relative velocity", "Average velocity", "Instantaneous velocity", "Resultant displacement"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 2: MULTIPLE-CHOICE QUESTIONS (20 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "The net force acting on an object is equal to the ... (A) mass of the object. (B) acceleration of the object. (C) change in momentum of the object. (D) rate of change in momentum of the object.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "D — the rate of change in momentum of the object (Newton's Second Law, Fnet = Δp/Δt).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "2", sub_number: "2.2",
    text: "The velocity-time graph shows the motion of an object: a straight line with positive gradient, starting at a negative velocity and crossing into positive velocity. Which ONE of the following graphs (A-D) represents the corresponding acceleration-time graph for the motion of this object?",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "D — a single constant negative acceleration value for the whole time shown (a straight line with constant positive gradient on a v-t graph means a single constant acceleration throughout, which is negative here since the line still has the same gradient before and after crossing zero velocity; option D shows a single constant horizontal line below the time axis).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.2-accel-time-graphs.png`,
  },
  {
    number: "2", sub_number: "2.3",
    text: "A car moves up a hill at CONSTANT speed. Which ONE of the following represents the work done by the weight of the car as it moves up the hill? (A) ΔEk (B) ΔEp (C) −ΔEk (D) −ΔEp",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "D — −ΔEp. The weight does negative work as the car rises (force down, displacement has an upward component), and this work done by gravity equals the negative of the increase in gravitational potential energy.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "2", sub_number: "2.4",
    text: "A central bright band is observed when light of wavelength λ passes through a single slit of width a. Light of wavelength 2λ is now used. Which ONE of the following slit widths would produce a central bright band of the SAME broadness? (A) ¼a (B) ½a (C) a (D) 2a",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "D — 2a. The broadness of the central band depends on the ratio λ/a; to keep this ratio (and hence the broadness) unchanged when the wavelength doubles, the slit width must also double.",
    marking_notes: "Accept only 'D'. (FLAG: single-slit diffraction is not one of this repo's 9 canonical topics — mapped to doppler-effect as the closest Waves, Sound and Light bucket; see top-of-file comment.)",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "2", sub_number: "2.5",
    text: "A source of sound approaches a stationary listener in a straight line at constant velocity, passes the listener, and moves away in the same straight line at the same constant velocity. Which ONE of the following graphs best represents the change in observed frequency against time?",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A — a higher constant frequency while approaching, dropping abruptly (discontinuously) to a lower constant frequency once the source passes and moves away, since the detected frequency depends only on whether the source is approaching or receding (not on distance) for constant relative velocity.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2.5-frequency-time-graphs.png`,
  },
  {
    number: "2", sub_number: "2.6",
    text: "Which ONE of the circuits below (A-D) can be used to measure the current in a conductor X and the potential difference across its ends?",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "A — the ammeter is in series with X (reading the current through X) and the voltmeter is connected in parallel directly across X (reading the potential difference across X only).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2.6-circuit-options.png`,
  },
  {
    number: "2", sub_number: "2.7",
    text: "The electric field pattern between two charged spheres, A and B, is shown below, with field lines pointing from B towards A. Which ONE of the following statements regarding the charge on spheres A and B is CORRECT? (A) Spheres A and B are both positively charged. (B) Spheres A and B are both negatively charged. (C) Sphere A is positively charged and sphere B is negatively charged. (D) Sphere A is negatively charged and sphere B is positively charged.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "D — sphere A is negatively charged and sphere B is positively charged. Electric field lines point away from positive charges and towards negative charges; since the lines point from B towards A, B is positive and A is negative.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.7-field-pattern.png`,
  },
  {
    number: "2", sub_number: "2.8",
    text: "Which ONE of the following shows the different types of electromagnetic radiation in order of increasing frequency? (A) X-rays; ultraviolet rays; infrared rays; visible light (B) Infrared rays; X-rays; visible light; ultraviolet rays (C) Infrared rays; visible light; ultraviolet rays; X-rays (D) X-rays; ultraviolet rays; visible light; infrared rays",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "C — infrared rays; visible light; ultraviolet rays; X-rays (increasing frequency across the electromagnetic spectrum).",
    marking_notes: "Accept only 'C'. (FLAG: EM spectrum ordering is not one of this repo's 9 canonical topics — mapped to doppler-effect as the closest Waves, Sound and Light bucket; see top-of-file comment.)",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.9",
    text: "A rectangular current-carrying coil, PQRS, is placed in a uniform magnetic field with its plane parallel to the field, between a North pole on the left and a South pole on the right. The arrows indicate the direction of the conventional current (up the P-Q side, down the R-S side). The coil will ... (A) rotate clockwise. (B) remain stationary. (C) rotate anticlockwise. (D) rotate clockwise and then anticlockwise.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "C — rotate anticlockwise. Using the right-hand rule (or F = IL × B) on the current-carrying sides PQ and RS in the field from North (left) to South (right) gives a torque that rotates the coil anticlockwise (viewed as drawn).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2.9-coil-pqrs.png`,
  },
  {
    number: "2", sub_number: "2.10",
    text: "The diagram shows light incident on the cathode of a photocell; the ammeter registers a reading. Which ONE of the following correctly describes the relationship between the intensity of the incident light and the ammeter reading? (A) Increases; Increases (B) Increases; Remains the same (C) Increases; Decreases (D) Decreases; Increases",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "A — as the intensity increases, the ammeter reading (photocurrent) also increases, since more photons per second strike the cathode, ejecting more photoelectrons per second (provided the frequency is above the threshold frequency).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2.10-photocell.png`,
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (16 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "An object is projected vertically upwards at 8 m·s⁻¹ from the roof of a building which is 60 m high. It strikes the balcony below after 4 s, bounces off, and strikes the ground. Ignore the effects of friction. Is the object's acceleration at its maximum height UPWARD, DOWNWARD or ZERO?",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Downward. The object is in free fall throughout its flight (ignoring friction), so its acceleration is always g, directed downward, even at the instant its velocity is zero at maximum height.",
    marking_notes: "Accept only 'downward'.",
    steps: [
      { marks: 1, description: "What is the direction of the object's acceleration at its maximum height?", options: ["Downward", "Upward", "Zero", "Cannot be determined"], correctIndex: 0 },
    ],
    image_url: `${IMG}/3-building-balcony.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Calculate the magnitude of the velocity at which the object strikes the balcony (4 s after being projected upwards at 8 m·s⁻¹).",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking upward as positive: vf = vi + aΔt = 8 + (−9,8)(4) = −31,2 m·s⁻¹, so the magnitude is 31,2 m·s⁻¹.",
    marking_notes: "Marking points: formula vf = vi + aΔt; correct substitution of vi = 8 and aΔt = (−9,8)(4); correct final magnitude 31,2 m·s⁻¹ (2 marks for the final answer).",
    steps: [
      { marks: 1, description: "Which equation of motion applies (constant acceleration, upward positive)?", options: ["vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt + ½aΔt²", "vf = vi − aΔt"], correctIndex: 0 },
      { marks: 1, description: "What is aΔt (the change in velocity over the 4 s)?", options: ["−39,2 m·s⁻¹", "−9,8 m·s⁻¹", "39,2 m·s⁻¹", "−4,9 m·s⁻¹"], correctIndex: 0 },
      { marks: 2, description: "What is the magnitude of the velocity at the balcony?", options: ["31,2 m·s⁻¹", "39,2 m·s⁻¹", "8,00 m·s⁻¹", "23,2 m·s⁻¹"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Calculate the height, h, of the balcony above the ground.",
    marks: 5, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Δy = viΔt + ½aΔt² = (8)(4) + ½(−9,8)(4)² = 32 − 78,4 = −46,4 m (the object ends up 46,4 m below the roof). Height of balcony above the ground: h = 60 − 46,4 = 13,6 m.",
    marking_notes: "Marking points: formula Δy = viΔt + ½aΔt²; correct substitution of vi = 8 and ½aΔt² = ½(−9,8)(4)² (2 marks); correct final height h = 13,6 m (2 marks, accepting 13,6-13,62 m for alternate valid methods).",
    steps: [
      { marks: 1, description: "Which formula finds the object's displacement from the roof after 4 s?", options: ["Δy = viΔt + ½aΔt²", "vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt"], correctIndex: 0 },
      { marks: 2, description: "What is the object's displacement from the roof after 4 s?", options: ["−46,4 m", "−78,4 m", "32,0 m", "−124,8 m"], correctIndex: 0 },
      { marks: 2, description: "What is h, the height of the balcony above the ground?", options: ["13,6 m", "106,4 m", "46,4 m", "6,4 m"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "The object bounces off the balcony at a velocity of 27,13 m·s⁻¹ and strikes the ground 6 s after leaving the balcony. Sketch a velocity-time graph to represent the motion of the object from the moment it is projected from the ROOF until it strikes the GROUND. Indicate the following on the graph: the initial velocity at which the object was projected from the roof; the velocity at which it strikes the balcony; the time when it strikes the balcony; the velocity at which it bounces off the balcony; and the time when it strikes the ground.",
    marks: 6, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Two straight parallel lines with the same (negative, upward positive) gradient: the first line starts at v = 8 m·s⁻¹ at t = 0 s and extends below the time axis to v = −31,2 m·s⁻¹ at t = 4 s; the graph is then discontinuous (the object changes direction on bouncing), with the second line starting at v = 27,13 m·s⁻¹ at t = 4 s and extending below the time axis until t = 10 s.",
    marking_notes: "Marking points (1 mark each, from the memo's criteria table): (1) shape has two parallel lines with a gradient; (2) first part of the graph starts at v = 8 m·s⁻¹ at t = 0 s; (3) first part of the graph extends below the time axis until v = −31,2 m·s⁻¹ at t = 4 s (positive marking from 3.2.1); (4) graph is discontinuous and the object changes direction at 4 s; (5) second part of the graph starts at v = 27,13 m·s⁻¹ at t = 4 s; (6) second part of the graph extends below the time axis until t = 10 s. (The sign convention may be inverted throughout if downward is taken as positive instead.)",
    marking_points: [
      { marks: 1, description: "shape has two parallel lines, each with a (the same) gradient", keywords: ["parallel", "gradient"] },
      { marks: 1, description: "first part of the graph starts at v = 8 m/s at t = 0 s", keywords: ["8", "t 0"] },
      { marks: 1, description: "first part of the graph extends to v = -31,2 m/s (or 31,2) at t = 4 s", keywords: ["31 2", "t 4"] },
      { marks: 1, description: "graph is discontinuous and the object changes direction at 4 s", keywords: ["discontinuous", "changes direction"] },
      { marks: 1, description: "second part of the graph starts at v = 27,13 m/s at t = 4 s", keywords: ["27 13"] },
      { marks: 1, description: "second part of the graph extends until t = 10 s", keywords: ["t 10", "10 s"] },
    ],
  },

  // ============ QUESTION 4: MOMENTUM (17 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A car of mass m travels at 20 m·s⁻¹ east on a straight level road, and a truck of mass 2m travels at 20 m·s⁻¹ west on the same road. Ignore the effects of friction. Calculate the velocity of the car relative to the truck.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "vcar/truck = vcar − vtruck = (+20) − (−20) = 40 m·s⁻¹ east (taking east as positive).",
    marking_notes: "Marking points: correct magnitude (40 m·s⁻¹) and correct direction (east).",
    steps: [
      { marks: 1, description: "What is the magnitude of the car's velocity relative to the truck?", options: ["40 m·s⁻¹", "20 m·s⁻¹", "0 m·s⁻¹", "10 m·s⁻¹"], correctIndex: 0 },
      { marks: 1, description: "What is the direction?", options: ["East", "West", "North", "South"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "The vehicles collide head-on and stick together during the collision. State the principle of conservation of linear momentum in words.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "The total (linear) momentum remains constant/is conserved in an isolated (or closed) system, in the absence of external forces (or if the impulse of external forces is zero).",
    marking_notes: "Must refer to total momentum remaining constant/conserved, and that this holds in an isolated/closed system (or absence of external forces).",
    marking_points: [
      { marks: 1, description: "the total (linear) momentum remains constant / is conserved", keywords: ["total momentum", "remains constant", "conserved"] },
      { marks: 1, description: "in an isolated/closed system, or in the absence of external forces", keywords: ["isolated system", "closed system", "external forces"] },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Calculate the velocity of the truck-car system immediately after the collision.",
    marks: 6, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Taking east as positive: Σpi = Σpf, so m(20) + 2m(−20) = (m + 2m)vf, giving vf = −6,67 m·s⁻¹, i.e. 6,67 m·s⁻¹ west.",
    marking_notes: "Marking points: formula Σpi = Σpf; correct substitution of m(20) and 2m(−20) on the left, (m+2m)vf on the right (2 marks); correct magnitude 6,67 m·s⁻¹ (2 marks); correct direction west (1 mark).",
    steps: [
      { marks: 1, description: "Which principle applies to the collision (vehicles stick together)?", options: ["Conservation of linear momentum: Σpi = Σpf", "Conservation of kinetic energy", "Impulse-momentum theorem for one vehicle only", "Newton's second law alone"], correctIndex: 0 },
      { marks: 2, description: "What is the correct substitution (east positive, car mass m at +20, truck mass 2m at −20)?", options: ["m(20) + 2m(−20) = (m + 2m)vf", "m(20) + 2m(20) = (m + 2m)vf", "m(20) − 2m(−20) = (m + 2m)vf", "m(20) = 2m(−20) + vf"], correctIndex: 0 },
      { marks: 2, description: "What is the magnitude of vf?", options: ["6,67 m·s⁻¹", "20,00 m·s⁻¹", "13,33 m·s⁻¹", "60,00 m·s⁻¹"], correctIndex: 0 },
      { marks: 1, description: "What is the direction of vf?", options: ["West", "East", "North", "South"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "On impact the car exerts a force of magnitude F on the truck and experiences an acceleration of magnitude a. Determine, in terms of F, the magnitude of the force that the truck exerts on the car on impact. Give a reason for the answer.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "F, by Newton's Third Law of Motion: for every action there is an equal and opposite reaction, so the truck exerts a force of equal magnitude F back on the car.",
    marking_notes: "Marking points: correct magnitude (F); correct law named (Newton's Third Law of Motion).",
    steps: [
      { marks: 1, description: "What is the magnitude of the force the truck exerts on the car, in terms of F?", options: ["F", "2F", "F/2", "−F (cannot express as a magnitude)"], correctIndex: 0 },
      { marks: 1, description: "Which law explains this?", options: ["Newton's Third Law of Motion", "Newton's First Law of Motion", "Newton's Second Law of Motion", "Conservation of energy"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Determine, in terms of a, the acceleration that the truck experiences on impact. Give a reason for the answer.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "½a (in magnitude, opposite in direction to the car's acceleration). Since the force on the truck has the same magnitude as the force on the car (Newton's Third Law), and the truck's mass (2m) is twice the car's mass (m), and a ∝ 1/m for the same net force, the truck's acceleration is half that of the car's.",
    marking_notes: "Marking points: correct magnitude (½a); correct reason (same Fnet magnitude on both, and a is inversely proportional to mass, with the truck having double the mass).",
    steps: [
      { marks: 1, description: "What is the truck's acceleration, in terms of a?", options: ["½a", "2a", "a", "¼a"], correctIndex: 0 },
      { marks: 1, description: "What is the reason?", options: [
        "Same magnitude of force acts on both (Newton's Third Law), and a ∝ 1/m, with the truck's mass being double the car's",
        "The truck is heavier so it must accelerate faster",
        "Momentum is not conserved during the collision",
        "The truck experiences a larger force than the car",
      ], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.3",
    text: "Both drivers are wearing identical seat belts. Which driver is likely to be more severely injured on impact? Explain the answer by referring to acceleration and velocity.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Evaluation",
    model_answer: "The car driver. The car (and its driver) has a greater acceleration than the truck (from 4.4.2) and undergoes a greater change in velocity (Δv) during the collision than the truck does, so the car driver experiences a more sudden, severe change in motion and is likely to be more severely injured.",
    marking_notes: "Marking points: identifies the car driver; states the car-driver system has the greater acceleration; states the car-driver system has the greater change in velocity/Δv.",
    marking_points: [
      { marks: 1, description: "the car driver", keywords: ["car driver"] },
      { marks: 1, description: "the car (driver) has the greater acceleration", keywords: ["greater acceleration"] },
      { marks: 1, description: "the car (driver) has the greater change in velocity (Δv)", keywords: ["greater change in velocity", "greater delta"] },
    ],
  },

  // ============ QUESTION 5: WORK-ENERGY (13 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "In order to measure the net force involved during a collision, a car is allowed to collide head-on with a flat, rigid barrier, crumpling by a measured distance. Draw a labelled free-body diagram showing ALL the forces acting on the car during the collision.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Three forces act on the car, all drawn from a single point: weight (w/Fg) vertically down; normal force (N) vertically up; and the net/applied force (F) horizontal, pointing in the direction opposing the car's original motion (from the barrier).",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (down), normal force (up), applied/net force F (horizontal, opposing the car's motion, i.e. from the barrier). Max 3.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N) drawn vertically upward", keywords: ["normal force", "fn"] },
      { marks: 1, description: "force F (from the barrier) drawn horizontally, opposing the car's original motion", keywords: ["force f", "horizontal"] },
    ],
    image_url: `${IMG}/5-crumple-diagram.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "State the work-energy theorem in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The net (total) work done on an object is equal to the change in kinetic energy of the object.",
    marking_notes: "Must refer to net/total work done being equal to the change in kinetic energy.",
    marking_points: [{ marks: 2, description: "net/total work done equals the change in kinetic energy", keywords: ["net work", "total work", "kinetic energy"] }],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "A car of mass 1 200 kg strikes the barrier at a speed of 20 m·s⁻¹. The crumple distance is measured as 1,02 m. Assume the net force is constant during crumpling. USE THE WORK-ENERGY THEOREM to calculate the magnitude of the net force exerted on the car as it is brought to rest during crumpling.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = ΔEk, so FnetΔxcosθ = ½m(vf² − vi²). Substituting: Fnet(1,02)cos180° = ½(1 200)(0² − 20²), giving Fnet = 235 294,12 N (2,35 x 10⁵ N).",
    marking_notes: "Marking points: formula Wnet = ΔEk (or equivalent FnetΔxcosθ = ½m(vf²−vi²)); correct substitution of both sides (2 marks: Fnet(1,02)cos180° and ½(1200)(0²−20²)); correct final answer Fnet = 235 294,12 N (2,35 x 10⁵ N).",
    steps: [
      { marks: 1, description: "Which theorem/formula applies (net force assumed constant)?", options: ["Wnet = ΔEk, i.e. FnetΔxcosθ = ½m(vf² − vi²)", "Conservation of momentum: m1v1 = m2v2", "Impulse-momentum theorem: FΔt = Δp", "Power formula: P = Fv"], correctIndex: 0 },
      { marks: 2, description: "What is the correct substitution?", options: [
        "Fnet(1,02)cos180° = ½(1 200)(0² − 20²)",
        "Fnet(1,02)cos0° = ½(1 200)(20² − 0²)",
        "Fnet(1,02) = (1 200)(20)",
        "Fnet(1,02)cos180° = ½(1 200)(20² − 0²)",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the magnitude of Fnet?", options: ["235 294,12 N", "117 647,06 N", "24 000,00 N", "470 588,24 N"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Calculate the time it takes the car to come to rest during crumpling.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Using the impulse-momentum theorem: FnetΔt = mΔv, so (−235 294,12)Δt = (1 200)(0 − 20), giving Δt = 0,1 s (0,102 s).",
    marking_notes: "Marking points: formula FnetΔt = mΔv; correct substitution of (−235 294,12)Δt and (1 200)(0 − 20) (2 marks); correct final answer Δt = 0,1 s.",
    steps: [
      { marks: 1, description: "Which formula connects the net force, the time, and the change in momentum?", options: ["FnetΔt = mΔv", "Fnet = ma", "Wnet = FΔx", "Δx = (vi+vf)/2 × Δt"], correctIndex: 0 },
      { marks: 2, description: "What is the correct substitution?", options: [
        "(−235 294,12)Δt = (1 200)(0 − 20)",
        "(235 294,12)Δt = (1 200)(20 − 0)",
        "(−235 294,12)Δt = (1 200)(20)",
        "(−235 294,12) = (1 200)(0 − 20)Δt",
      ], correctIndex: 0 },
      { marks: 1, description: "What is Δt?", options: ["0,1 s", "1,02 s", "0,2 s", "10,2 s"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 6: DOPPLER EFFECT (11 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "A bird flies directly towards a stationary birdwatcher at constant velocity, constantly emitting sound waves at a frequency of 1 650 Hz. The birdwatcher hears a change in pitch as the bird comes closer. Write down the property of sound that is related to pitch.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Frequency.",
    marking_notes: "Accept only 'frequency'.",
    steps: [
      { marks: 1, description: "Which property of sound is related to pitch?", options: ["Frequency", "Wavelength", "Amplitude", "Period"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Give a reason why the birdwatcher observes a change in pitch as the bird approaches him.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "There is relative motion between the bird (sound source) and the birdwatcher (listener).",
    marking_notes: "Must refer to relative motion between the bird and the birdwatcher.",
    marking_points: [{ marks: 1, description: "there is relative motion between the bird and the birdwatcher", keywords: ["relative motion"] }],
  },
  {
    number: "6", sub_number: "6.3",
    text: "The air pressure versus distance graph represents the waves detected by the birdwatcher as the bird comes closer to him (compressions shown at distances 0,1 m, 0,3 m and 0,5 m). The speed of sound in air is 340 m·s⁻¹. From the graph, write down the wavelength of the detected waves.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "0,2 m (the distance between consecutive compressions on the graph).",
    marking_notes: "Accept only 0,2 m.",
    steps: [
      { marks: 1, description: "What is the wavelength read from the graph?", options: ["0,2 m", "0,1 m", "0,4 m", "0,5 m"], correctIndex: 0 },
    ],
    image_url: `${IMG}/6-air-pressure-graph.png`,
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "Calculate the frequency of the waves detected by the birdwatcher.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "v = fλ, so 340 = f(0,2), giving f = 1 700 Hz.",
    marking_notes: "Formula v = fλ, correct substitution using λ = 0,2 m, correct final answer f = 1 700 Hz.",
    steps: [
      { marks: 1, description: "Which formula relates the speed of sound, frequency and wavelength?", options: ["v = fλ", "v = f/λ", "v = f + λ", "f = v + λ"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["340 = f(0,2)", "340 = f(1 650)", "f = 340(0,2)", "340 = f/0,2"], correctIndex: 0 },
      { marks: 1, description: "What is the detected frequency?", options: ["1 700 Hz", "68 Hz", "340 Hz", "1 650 Hz"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "Calculate the magnitude of the velocity at which the bird flies.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Since the bird (source) moves towards the stationary listener: fL = v/(v − vs) × fs. Substituting fL = 1 700 Hz, v = 340 m·s⁻¹, fs = 1 650 Hz: 1 700 = 340/(340 − vs) × 1 650, giving vs = 10 m·s⁻¹.",
    marking_notes: "Marking points: correct Doppler formula for a source moving towards a stationary listener; correct substitution of fL = 1 700, v = 340 and fs = 1 650 (2 marks); correct final answer vs = 10 m·s⁻¹ (2 marks).",
    steps: [
      { marks: 1, description: "Which Doppler formula applies (bird/source moving towards a stationary listener)?", options: ["fL = v/(v − vs) × fs", "fL = v/(v + vs) × fs", "fL = (v − vs)/v × fs", "fL = v/(v − vs)² × fs"], correctIndex: 0 },
      { marks: 2, description: "What is the correct substitution (fL from 6.4.1, fs = 1 650 Hz given)?", options: [
        "1 700 = 340/(340 − vs) × 1 650",
        "1 650 = 340/(340 − vs) × 1 700",
        "1 700 = 340/(340 + vs) × 1 650",
        "1 700 = (340 − vs)/340 × 1 650",
      ], correctIndex: 0 },
      { marks: 2, description: "What is the magnitude of the bird's velocity?", options: ["10 m·s⁻¹", "50 m·s⁻¹", "20 m·s⁻¹", "6,06 m·s⁻¹"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 7: DIFFRACTION/INTERFERENCE (13 marks) ============
  // FLAG for review: single/double-slit diffraction and interference of
  // light are not covered by any of this repo's 9 canonical Physical
  // Sciences topics (CAPS removed this content from Grade 12). All of
  // Question 7 is mapped to `doppler-effect` as the nearest existing
  // "Waves, Sound and Light" topic bucket rather than inventing a new key
  // for a single legacy paper — see the top-of-file comment.

  {
    number: "7", sub_number: "7.1",
    text: "Learners use monochromatic blue light to investigate the difference between an interference pattern and a diffraction pattern. Apart from the blue light and a screen, write down the name of ONE item that the learners will need to obtain an interference pattern.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "A double slit.",
    marking_notes: "Accept 'double slit' (or 'two slits').",
    steps: [
      { marks: 1, description: "What item is needed to obtain an interference pattern?", options: ["A double slit", "A single slit", "A diffraction grating with many thousands of slits", "A concave mirror"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Briefly describe the interference pattern that will be observed on the screen.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "An alternating pattern of dark and bright (blue) bands/fringes on the screen, with the bright (blue) bands of equal broadness (width).",
    marking_notes: "Marking points: describes alternating dark and bright/blue bands; states the bright/blue bands are of equal broadness (width).",
    marking_points: [
      { marks: 1, description: "(alternate) dark and bright/blue bands", keywords: ["dark and bright", "alternate"] },
      { marks: 1, description: "bright/blue bands of equal broadness (width)", keywords: ["equal broadness", "equal width"] },
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "In one of their experiments, learners place the screen at a distance of 1,4 m from a single slit and observe a pattern on the screen. The width of the central bright band is measured as 22 cm. Calculate the angle θ at which the first minimum will be observed on the screen.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "tanθ = (½ central band width)/(screen distance) = ½(0,22)/1,4, giving θ = 4,49°.",
    marking_notes: "Marking points: formula tanθ = ½(central band)/(screen distance); correct substitution ½(0,22)/1,4; correct final answer θ = 4,49°.",
    steps: [
      { marks: 1, description: "Which relationship gives the angle θ to the first minimum?", options: [
        "tanθ = ½(central band width)/(screen distance)",
        "tanθ = (central band width)/(screen distance)",
        "sinθ = ½(central band width)/(screen distance)",
        "tanθ = (screen distance)/½(central band width)",
      ], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["tanθ = ½(0,22)/1,4", "tanθ = (0,22)/1,4", "tanθ = ½(0,22)/0,7", "tanθ = 1,4/½(0,22)"], correctIndex: 0 },
      { marks: 1, description: "What is θ?", options: ["4,49°", "8,97°", "2,25°", "17,77°"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "Calculate the width of the slit used if the wavelength of the blue light is 470 nm.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "sinθ = mλ/a, so sin4,49° = (1)(470 x 10⁻⁹)/a, giving a = 6 x 10⁻⁶ m.",
    marking_notes: "Marking points: formula sinθ = mλ/a; correct substitution of sin4,49°, m = 1 and λ = 470 x 10⁻⁹ m (2 marks); correct final answer a = 6 x 10⁻⁶ m (2 marks).",
    steps: [
      { marks: 1, description: "Which formula relates the diffraction angle to the slit width and wavelength?", options: ["sinθ = mλ/a", "sinθ = a/mλ", "tanθ = mλ/a", "sinθ = mλa"], correctIndex: 0 },
      { marks: 2, description: "What is the correct substitution (θ from 7.3.1, first minimum m = 1, λ = 470 nm)?", options: [
        "sin4,49° = (1)(470 x 10⁻⁹)/a",
        "sin4,49° = (2)(470 x 10⁻⁹)/a",
        "sin4,49° = a/(470 x 10⁻⁹)",
        "sin8,97° = (1)(470 x 10⁻⁹)/a",
      ], correctIndex: 0 },
      { marks: 2, description: "What is the slit width a?", options: ["6 x 10⁻⁶ m", "3 x 10⁻⁶ m", "1,2 x 10⁻⁵ m", "6 x 10⁻⁹ m"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "The width of the central band INCREASES when the blue light is replaced with monochromatic red light. Explain this observation.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "The wavelength of red light is greater than the wavelength of blue light, and the (degree of) diffraction (sinθ/θ) is directly proportional to the wavelength, so the central band becomes broader with red light.",
    marking_notes: "Marking points: states λred > λblue; states the (degree of) diffraction/sinθ/θ is proportional to wavelength.",
    marking_points: [
      { marks: 1, description: "wavelength of red light is greater than that of blue light", keywords: ["red light", "greater", "wavelength"] },
      { marks: 1, description: "(degree of) diffraction is proportional to wavelength", keywords: ["diffraction", "proportional", "wavelength"] },
    ],
  },

  // ============ QUESTION 8: CAPACITOR CIRCUIT (15 marks) ============
  // FLAG for review: capacitance/capacitors are not a named CAPS Grade 12
  // topic and have no dedicated bucket among this repo's 9 canonical
  // topics. Circuit-behaviour sub-parts are mapped to `electric-circuits`;
  // charge/electric-field sub-parts are mapped to `electrostatics` as the
  // closer content fit — see top-of-file comment.

  {
    number: "8", sub_number: "8.1",
    text: "An uncharged capacitor is connected in series with a 1 000 Ω resistor. The emf of the battery is 12 V. Ignore the internal resistance of the battery and the ammeter. Calculate the initial current in the circuit when switch S is closed.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "At the instant S is closed, the uncharged capacitor behaves as a short circuit (no charge on the plates yet, so no opposing pd), so the full emf acts across the 1 000 Ω resistor: R = V/I, 1 000 = 12/I, giving I = 0,01 A.",
    marking_notes: "Marking points: formula R = V/I; correct substitution 1 000 = 12/I; correct final answer I = 0,01 A.",
    steps: [
      { marks: 1, description: "Which formula applies (uncharged capacitor acts as a short circuit at t = 0, so the full emf is across the resistor)?", options: ["R = V/I", "C = Q/V", "P = VI", "V = IR + Ir"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["1 000 = 12/I", "I = 1 000/12", "1 000 = 12 × I", "12 = 1 000 + I"], correctIndex: 0 },
      { marks: 1, description: "What is the initial current?", options: ["0,01 A", "0,12 A", "83,33 A", "12 000,00 A"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2",
    text: "Write down the potential difference across the plates of the capacitor when it is fully charged.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "12 V. Once fully charged, no current flows, so there is no pd across the resistor, meaning the full emf (12 V) appears across the capacitor's plates.",
    marking_notes: "Accept only 12 V.",
    steps: [
      { marks: 1, description: "What is the pd across the capacitor's plates when fully charged?", options: ["12 V", "0 V", "6 V", "1 000 V"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "The capacitor has a capacitance of 120 μF and the space between its plates is filled with air. Calculate the charge stored on the plates of the capacitor when it is fully charged.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C = Q/V, so 120 x 10⁻⁶ = Q/12, giving Q = 1,44 x 10⁻³ C.",
    marking_notes: "Marking points: formula C = Q/V; correct substitution 120 x 10⁻⁶ = Q/12; correct final answer Q = 1,44 x 10⁻³ C.",
    steps: [
      { marks: 1, description: "Which formula relates capacitance, charge and voltage?", options: ["C = Q/V", "C = V/Q", "Q = C + V", "C = QV"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["120 x 10⁻⁶ = Q/12", "Q = 120 x 10⁻⁶ / 12", "120 x 10⁻⁶ = Q × 12", "12 = Q/(120 x 10⁻⁶)"], correctIndex: 0 },
      { marks: 1, description: "What is the charge stored?", options: ["1,44 x 10⁻³ C", "1,00 x 10⁻⁵ C", "1,44 x 10⁻⁵ C", "10,00 C"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.4.1",
    text: "After discharging the capacitor, it is connected in the same circuit to a resistor of HIGHER resistance and switch S is closed again. How would this change affect the initial charging current? Write down INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases. The initial current is I = emf/R (uncharged capacitor acts as a short circuit); increasing R decreases this initial current.",
    marking_notes: "Accept only 'decreases'.",
    steps: [
      { marks: 1, description: "How does the initial charging current change with a higher-resistance resistor?", options: ["Decreases", "Increases", "Remains the same", "Becomes zero"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.4.2",
    text: "How would this change affect the time it takes for the capacitor to become fully charged? Write down INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. A higher resistance increases the RC time constant of the circuit, so the capacitor takes longer to charge fully.",
    marking_notes: "Accept only 'increases'.",
    steps: [
      { marks: 1, description: "How does the charging time change with a higher-resistance resistor?", options: ["Increases", "Decreases", "Remains the same", "Becomes instantaneous"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.5.1",
    text: "The two parallel plates of the fully charged capacitor are 12 mm apart. Sketch the electric field pattern between the parallel plates.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "A series of straight, parallel, equally-spaced field lines between the plates, pointing from the positive plate towards the negative plate, with the field curving slightly outward at the ends of the plates.",
    marking_notes: "Marking points: parallel lines equally spaced; direction from the positive plate towards the negative plate (polarity of plates must be indicated); field curved at the ends of the plates.",
    marking_points: [
      { marks: 1, description: "parallel lines equally spaced", keywords: ["parallel", "equally spaced"] },
      { marks: 1, description: "direction from positive plate towards negative plate (polarity indicated)", keywords: ["positive plate", "negative plate", "direction"] },
      { marks: 1, description: "field curved at the ends of the plates", keywords: ["curved", "ends of the plates"] },
    ],
  },
  {
    number: "8", sub_number: "8.5.2",
    text: "Calculate the magnitude of the electric field at a point midway between the plates.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = V/d = 12/(12 x 10⁻³) = 1 000 V·m⁻¹. (The field is uniform between parallel plates, so this is also the field at the midpoint.)",
    marking_notes: "Marking points: formula E = V/d; correct substitution 12/(12 x 10⁻³); correct final answer E = 1 000 V·m⁻¹.",
    steps: [
      { marks: 1, description: "Which formula gives the electric field between parallel plates?", options: ["E = V/d", "E = kQ/r²", "E = Vd", "E = d/V"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["12/(12 x 10⁻³)", "12 x (12 x 10⁻³)", "12/(6 x 10⁻³)", "(12 x 10⁻³)/12"], correctIndex: 0 },
      { marks: 1, description: "What is the electric field midway between the plates?", options: ["1 000 V·m⁻¹", "144 V·m⁻¹", "500 V·m⁻¹", "0,0001 V·m⁻¹"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 9: ELECTRIC CIRCUITS (20 marks) ============

  {
    number: "9", sub_number: "9.1.1",
    text: "Two 60 Ω resistors connected in parallel are connected in series with a 25 Ω resistor. The battery has an emf of 12 V and an internal resistance of 1,5 Ω. Calculate the equivalent resistance of the parallel combination.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "1/Rp = 1/R1 + 1/R2 = 1/60 + 1/60, giving Rp = 30 Ω.",
    marking_notes: "Marking points: formula 1/Rp = 1/R1 + 1/R2; correct substitution of 1/60 + 1/60; correct final answer Rp = 30 Ω.",
    steps: [
      { marks: 1, description: "Which formula gives the equivalent resistance of two resistors in parallel?", options: ["1/Rp = 1/R1 + 1/R2", "Rp = R1 + R2", "Rp = R1 × R2", "1/Rp = R1 + R2"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["1/Rp = 1/60 + 1/60", "1/Rp = 60 + 60", "1/Rp = 1/60 − 1/60", "Rp = 1/60 + 1/60"], correctIndex: 0 },
      { marks: 1, description: "What is Rp?", options: ["30 Ω", "120 Ω", "60 Ω", "15 Ω"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "Calculate the total current in the circuit.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Rext = 30 + 25 = 55 Ω. Using emf = I(R + r): 12 = I(55 + 1,5), giving I = 0,21 A.",
    marking_notes: "Marking points: correct total external resistance Rext = 55 Ω; formula emf = I(R + r); correct substitution 12 = I(55 + 1,5) (2 marks); correct final answer I = 0,21 A.",
    steps: [
      { marks: 1, description: "What is the total external resistance (Rp in series with the 25 Ω resistor)?", options: ["55 Ω", "30 Ω", "25 Ω", "56,5 Ω"], correctIndex: 0 },
      { marks: 1, description: "Which formula connects emf, current, external resistance and internal resistance?", options: ["emf = I(R + r)", "emf = IR − Ir", "emf = I/(R + r)", "emf = R/(I + r)"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["12 = I(55 + 1,5)", "12 = I(55 − 1,5)", "12 = I(30 + 1,5)", "I = 12(55 + 1,5)"], correctIndex: 0 },
      { marks: 2, description: "What is the total current?", options: ["0,21 A", "0,22 A", "8,00 A", "0,18 A"], correctIndex: 0 },
    ],
    image_url: `${IMG}/9.1-circuit.png`,
  },
  {
    number: "9", sub_number: "9.1.3",
    text: "Calculate the potential difference across the parallel resistors.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V = IR = (0,21)(30) = 6,3 V (using the total current from 9.1.2 and the equivalent parallel resistance from 9.1.1).",
    marking_notes: "Marking points: formula V = IR; correct substitution (0,21)(30); correct final answer V = 6,3 V.",
    steps: [
      { marks: 1, description: "Which formula gives the pd across the parallel combination?", options: ["V = IR", "V = I/R", "V = IR + emf", "V = I + R"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution (total current from 9.1.2, Rp from 9.1.1)?", options: ["(0,21)(30)", "(0,21)(55)", "(0,21)(25)", "(0,21)(56,5)"], correctIndex: 0 },
      { marks: 1, description: "What is the pd across the parallel resistors?", options: ["6,3 V", "5,7 V", "11,55 V", "3,15 V"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "Learners conduct an investigation to determine the emf and internal resistance (r) of a battery, measuring the potential difference using a voltmeter for different currents in the circuit. The graph of potential difference versus current is a straight line from (0 A; 1,5 V) to (1,0 A; 0,65 V). Use the graph to determine the emf of the battery.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "1,5 V (the y-intercept of the graph, i.e. the potential difference when the current is zero).",
    marking_notes: "Accept only 1,5 V.",
    steps: [
      { marks: 1, description: "What is the emf, read from the graph?", options: ["1,5 V", "0,65 V", "1,0 V", "0,85 V"], correctIndex: 0 },
    ],
    image_url: `${IMG}/9.2-circuit.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Calculate the gradient of the graph.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "gradient = ΔV/ΔI = (0,65 − 1,5)/(1,0 − 0) = −0,85 Ω.",
    marking_notes: "Marking points: formula gradient = ΔV/ΔI; correct substitution (0,65 − 1,5)/(1,0 − 0); correct final answer −0,85 Ω.",
    steps: [
      { marks: 1, description: "Which formula gives the gradient?", options: ["gradient = ΔV/ΔI", "gradient = ΔI/ΔV", "gradient = V × I", "gradient = V + I"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["(0,65 − 1,5)/(1,0 − 0)", "(1,5 − 0,65)/(1,0 − 0)", "(0,65 − 1,5)/(0 − 1,0)", "(1,5 + 0,65)/(1,0)"], correctIndex: 0 },
      { marks: 1, description: "What is the gradient?", options: ["−0,85 Ω", "0,85 Ω", "−1,5 Ω", "0,65 Ω"], correctIndex: 0 },
    ],
    image_url: `${IMG}/9.2-graph.png`,
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "Which physical quantity is represented by the magnitude of the gradient of the graph?",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "The internal resistance (r) of the battery.",
    marking_notes: "Accept only 'internal resistance'.",
    steps: [
      { marks: 2, description: "What physical quantity does the magnitude of the gradient represent?", options: ["Internal resistance", "External resistance", "Total resistance of the circuit", "The emf of the battery"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.2.4",
    text: "How does the voltmeter reading change as the ammeter reading increases? Write down INCREASES, DECREASES or REMAINS THE SAME. Use the formula emf = IR + Ir to explain the answer.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases. As I increases, the 'lost volts' (Ir) increases; since Vext = emf − Ir, and emf is constant, Vext (the voltmeter reading) decreases as I increases.",
    marking_notes: "Marking points: states 'decreases'; states that the 'lost volts'/Ir increases as I increases; states Vext = emf − Ir and that it decreases accordingly.",
    marking_points: [
      { marks: 1, description: "decreases", keywords: ["decreases"] },
      { marks: 1, description: "the 'lost volts' / Ir increases as I increases", keywords: ["lost volts", "ir increases"] },
      { marks: 1, description: "Vext = emf − Ir decreases", keywords: ["emf", "ir decreases", "vext"] },
    ],
  },

  // ============ QUESTION 10: ELECTRODYNAMICS/AC TRANSMISSION (9 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "The diagram illustrates how electricity generated at a power station is transmitted to a substation via a step-up transformer, transmission lines, and pylons. Does the power station use an AC or a DC generator?",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "AC. (A transformer, which only works with AC, is used to step up the voltage for transmission.)",
    marking_notes: "Accept only 'AC'.",
    steps: [
      { marks: 1, description: "Does the power station use an AC or a DC generator?", options: ["AC", "DC", "Both equally", "Neither — it uses a battery"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.2",
    text: "Sketch a graph of the potential difference generated at the power station versus time.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "A sine curve (V versus t), oscillating smoothly between a positive maximum and a negative minimum, starting at V = 0 at t = 0, consistent with an AC generator.",
    marking_notes: "Marking points: correct sinusoidal shape (accept more than one cycle shown); correctly labelled axes (V and t) — deduct 1 mark overall if labels are missing or wrong.",
    marking_points: [
      { marks: 1, description: "correct sinusoidal (sine curve) shape", keywords: ["sine", "sinusoidal"] },
      { marks: 1, description: "axes correctly labelled V and t", keywords: ["labelled", "axes"] },
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "The average power produced at the power station is 4,45 x 10⁹ W. Calculate the rms current in the transmission lines if the power is transmitted at a maximum voltage of 30 000 V.",
    marks: 5, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Vrms = Vmax/√2 = (30 x 10³)/√2 = 2,12 x 10⁴ V. Then Pave = VrmsIrms, so 4,45 x 10⁹ = (2,12 x 10⁴)Irms, giving Irms = 2,10 x 10⁵ A.",
    marking_notes: "Marking points: formula Vrms = Vmax/√2 and its value (2 marks); formula Pave = VrmsIrms; correct substitution and final answer Irms = 2,10 x 10⁵ A (2 marks). (FLAG: this memo value for Irms, while transcribed faithfully, is physically implausible for a real transmission line — see top-of-file comment.)",
    steps: [
      { marks: 2, description: "What is Vrms?", options: ["2,12 x 10⁴ V", "4,24 x 10⁴ V", "3,00 x 10⁴ V", "1,50 x 10⁴ V"], correctIndex: 0 },
      { marks: 1, description: "Which formula connects average power to Vrms and Irms?", options: ["Pave = VrmsIrms", "Pave = Vrms/Irms", "Pave = Vrms²/Irms", "Pave = Vrms + Irms"], correctIndex: 0 },
      { marks: 2, description: "What is Irms?", options: ["2,10 x 10⁵ A", "1,48 x 10⁵ A", "2,10 x 10⁴ A", "4,45 x 10⁵ A"], correctIndex: 0 },
    ],
  },
  {
    number: "10", sub_number: "10.4",
    text: "Give a reason why electricity should be transmitted at high voltage and low current.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "There is less loss in (electrical) energy, as heat, in the transmission lines (since power loss due to resistance, I²R, is reduced at lower current).",
    marking_notes: "Must refer to less loss of (electrical) energy as heat.",
    marking_points: [{ marks: 1, description: "less loss in (electrical) energy as heat", keywords: ["less loss", "heat"] }],
  },

  // ============ QUESTION 11: PHOTOELECTRIC EFFECT (11 marks) ============

  {
    number: "11", sub_number: "11.1.1",
    text: "During an investigation, light of different frequencies is shone onto the metal cathode of a photocell. The kinetic energy of the emitted photoelectrons is measured, and a graph of kinetic energy versus frequency is obtained. For this investigation, write down the dependent variable.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The kinetic energy (Ek) of the emitted photoelectrons.",
    marking_notes: "Accept 'kinetic energy (Ek)'.",
    steps: [
      { marks: 1, description: "What is the dependent variable?", options: ["Kinetic energy (Ek)", "Frequency (f)", "Type of metal", "Intensity of light"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "Write down the independent variable.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Frequency (f) of the incident light.",
    marking_notes: "Accept 'frequency (f)'.",
    steps: [
      { marks: 1, description: "What is the independent variable?", options: ["Frequency (f)", "Kinetic energy (Ek)", "Type of metal", "Intensity of light"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.1.3",
    text: "Write down a controlled variable.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The (type of) metal used as the cathode.",
    marking_notes: "Accept '(type of) metal'.",
    steps: [
      { marks: 1, description: "What is a controlled variable?", options: ["(Type of) metal", "Frequency", "Kinetic energy", "Time"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "Define the term threshold frequency.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The minimum frequency (of incident light) needed to emit electrons from (the surface of) a metal.",
    marking_notes: "Must refer to the minimum frequency needed to emit electrons from a metal's surface.",
    marking_points: [
      { marks: 1, description: "the minimum frequency needed to emit electrons", keywords: ["minimum frequency", "emit electrons"] },
      { marks: 1, description: "from (the surface of) a metal", keywords: ["surface", "metal"] },
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Use the graph to obtain the threshold frequency of the metal used as cathode in the photocell.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "9 x 10¹⁴ Hz (the x-intercept of the graph, where the kinetic energy of the photoelectrons is zero).",
    marking_notes: "Accept only 9 x 10¹⁴ Hz.",
    steps: [
      { marks: 1, description: "What is the threshold frequency, read from the graph's x-intercept?", options: ["9 x 10¹⁴ Hz", "5 x 10¹⁴ Hz", "14 x 10¹⁴ Hz", "15 x 10¹⁴ Hz"], correctIndex: 0 },
    ],
    image_url: `${IMG}/11-kinetic-energy-graph.png`,
  },
  {
    number: "11", sub_number: "11.4",
    text: "Calculate the kinetic energy at E1 shown on the graph (read at a frequency of 14 x 10¹⁴ Hz).",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "Using E = W0 + Ek, i.e. hf = hf0 + Ek: (6,63 x 10⁻³⁴)(14 x 10¹⁴) = (6,63 x 10⁻³⁴)(9 x 10¹⁴) + Ek, giving Ek = 3,32 x 10⁻¹⁹ J (3,31 x 10⁻¹⁹ J).",
    marking_notes: "Marking points: formula E = W0 + Ek (i.e. hf = hf0 + Ek); correct substitution of hf and hf0 (2 marks); correct final answer Ek = 3,32 x 10⁻¹⁹ J.",
    steps: [
      { marks: 1, description: "Which formula applies (Einstein's photoelectric equation)?", options: ["hf = hf0 + Ek", "Ek = hf0 − hf", "hf = Ek − hf0", "Ek = hf × hf0"], correctIndex: 0 },
      { marks: 2, description: "What is the correct substitution (f = 14 x 10¹⁴ Hz, threshold f0 = 9 x 10¹⁴ Hz from 11.3)?", options: [
        "(6,63 x 10⁻³⁴)(14 x 10¹⁴) = (6,63 x 10⁻³⁴)(9 x 10¹⁴) + Ek",
        "(6,63 x 10⁻³⁴)(9 x 10¹⁴) = (6,63 x 10⁻³⁴)(14 x 10¹⁴) + Ek",
        "(6,63 x 10⁻³⁴)(14 x 10¹⁴) = Ek",
        "(6,63 x 10⁻³⁴)(5 x 10¹⁴) = Ek",
      ], correctIndex: 0 },
      { marks: 1, description: "What is Ek?", options: ["3,32 x 10⁻¹⁹ J", "9,28 x 10⁻¹⁹ J", "5,97 x 10⁻¹⁹ J", "1,52 x 10⁻¹⁹ J"], correctIndex: 0 },
    ],
  },
  {
    number: "11", sub_number: "11.5",
    text: "How would the kinetic energy calculated in Question 11.4 be affected if light of higher intensity is used? Write down only INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same. The maximum kinetic energy of the photoelectrons depends only on the frequency of the incident light (above the threshold frequency), not on its intensity; a higher intensity only increases the number of photoelectrons emitted per second.",
    marking_notes: "Accept only 'remains the same'.",
    steps: [
      { marks: 1, description: "How is the kinetic energy affected by higher intensity (same frequency)?", options: ["Remains the same", "Increases", "Decreases", "Becomes zero"], correctIndex: 0 },
    ],
  },
];
