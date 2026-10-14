// Real DBE past paper: Physical Sciences (Physics) P1, November 2008, National
// (English).
//
// Sources (maimelatct.com mirror, question paper and memorandum fetched as
// SEPARATE PDFs; both verified by reading the cover pages, since filenames on
// these mirrors are unreliable):
//   QP:   http://maimelatct.com/wp-content/uploads/2013/08/physicalsciencep1nov2008eng.pdf
//         cover: "PHYSICAL SCIENCES: PHYSICS (P1)", "NOVEMBER 2008", MARKS 150,
//         TIME 3 hours (20 pages: cover, instructions, questions pp.3-16, a
//         3-page data sheet, and the answer sheet).
//   Memo: http://maimelatct.com/wp-content/uploads/2013/08/physicalsciencesp1memoengafrnov2008.pdf
//         cover: "PHYSICAL SCIENCES: PHYSICS (P1) ... MEMORANDUM ... NOVEMBER
//         2008", MARKS 150 (17 pages, English/Afrikaans bilingual).
//
// Paper structure: SECTION A (Q1 one-word items, Q2 matching, Q3 true/false,
// Q4 multiple choice = 35 marks) and SECTION B (Q5-Q15 = 115 marks), 150 marks
// total, 3 hours, all compulsory. All 150 marks are included here (marks sum
// verified against paper.total_marks and each question's own printed total
// with a throwaway script, deleted after use).
//
// This is a late old-NCS paper (pre-CAPS), so it reuses the CAPS-era `topics`
// array already defined by the Nov 2025/2024/2022 P1 datasets (topics are
// upserted by key in scripts/seed.ts, so redeclaring them here is safe and
// required since this file is a standalone dataset). No new topic keys.
//
// FLAG for review (topic mapping, no dedicated topic exists for these):
//  - 1.3 (continuous spectrum from a prism), 2.3 (opaque objects), 4.3
//    (pigment cyan / colour subtraction), 1.5, 2.5, 3.5 (LASER: population
//    inversion, monochromatic source, stimulated emission) and Q15.1 are
//    light/atomic-physics items mapped to "photoelectric-effect" (closest
//    Term 3 Matter-and-Materials topic).
//  - 1.4 (capacitor) and 3.4 (dielectric in a parallel-plate capacitor) are
//    capacitor items mapped to "electrostatics".
//  - 3.3 (diffraction vs frequency) and all of Q9 (single/double-slit
//    diffraction with a laser) are wave-optics items mapped to
//    "doppler-effect" (closest Term 1 Waves, Sound and Light topic).
//  - 3.2 (relative speed of two cars) is a relative-velocity item with no
//    frames-of-reference topic; mapped to "newtons-laws" (mechanics).
//  - 1.2 (elastic collision), 2.2 (net force = rate of change of momentum)
//    are mapped to "momentum-impulse"; 1.1, 2.1, 3.1, 4.2 to
//    "work-energy-power".
//
// Diagrams: the question paper's diagrams are vector line drawings, so they
// were cropped from full-page renders of the QP into
// public/question-images/physics-2008-p1/. Cropped and referenced: 4.5
// (circuit), Q6 (velocity-time graph), Q10 (ink-jet printer plates), Q11 (the
// wire-test circuit and the I-V graph, as two images used on 11.1 and 11.2),
// Q12 (circuit), Q13 (coil between magnets). Purely illustrative drawings
// that were NOT cropped because every question is answerable from the text
// alone: Q4.4 (two charged spheres a distance r apart), Q5 (before/after
// sketch of the two cars; all values are in the text), Q7 (hydro-electric
// pipe and turbine, 150 m drop given in text), Q8 (stationary lady/ambulance
// sketch). The earlier partial crops in that folder were discarded and
// re-cropped cleanly (they had clipped neighbouring question text).
//
// Grading conventions: calculation questions and short single-answer items
// (one-word, matching, true/false-with-correction, MCQ, name/identify,
// increases/decreases/same, explanations with a small enumerable set of memo
// points) use `steps` (stepped multiple choice): one step per mark-earning
// point, 4 plausible options trapping real Grade 12 errors. Definition items
// (9.1, 10.1) and the three graph/field-line sketch items (6.5, 10.3, 13.3)
// are ALSO converted to `steps` (the student picks the correct definition or
// the correct description of each memo checklist criterion), so this paper
// uses no free-text `marking_points` at all. The sketch items therefore
// describe the expected graph in words rather than asking the student to
// draw it, and the 6.5/13.3 options refer to the memo's checklist criteria
// (shape, intercept, end point) one by one.
//
// FLAG for review: 14.2 (power during the cutback). The memo accepts two
// values depending on rounding of the intermediate quantity: 991,82 W (via
// R = V^2/P = 40,33 ohm, P = 200^2/40,33) and 990,91 W (via a rounded
// Irms = 5,45 A scaled to 4,95 A). The correct step option below is 991,82 W
// (the first, unrounded route); 990,91 W is deliberately NOT offered as a
// distractor because the memo accepts it.
//
// FLAG for review: 7.4 memo answer 2,499 x 10^8 W and "accept 2,5 x 10^8 W".
// The correct option shows "2,50 x 10^8 W (2,499 x 10^8)" covering both.
//
// FLAG for review: 12.1 asks for the ammeter reading. The ammeter sits in
// series with the 10 ohm resistor only (not with R), so it reads the current
// through the 10 ohm branch, 0,75 A (confirmed against the memo's working
// and the circuit crop), not the 3 A battery current.
//
// FLAG for review: 13.2 (direction of current in XY). Transcribed from the
// memo as "X to Y" without re-deriving it from the diagram.
//
// FLAG for review: 6.5 memo accepts two zero-reference conventions for the
// position-time sketch (cliff top as zero, or the stone's highest point as
// zero). The question text fixes the cliff top as origin, so the options
// below follow the first sketch only (parabola starting at +5 m at t = 1 s,
// crossing zero at t = 2 s, ending below the axis at t = 3,5 s).
// 13.3 accepts either a sine or cosine shape; the options do not
// distinguish between those.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2008-p1";

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
  year: 2008,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "http://maimelatct.com/wp-content/uploads/2013/08/physicalsciencep1nov2008eng.pdf" as string | null,
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

const S = (marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep => ({
  marks,
  description,
  options,
  correctIndex,
});

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The product of force and velocity.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "Power (P = Fv; rate of doing work).",
    marking_notes: "Accept power / rate of work.",
    steps: [S(1, "Which quantity is the product of force and velocity?", ["Work", "Power", "Impulse", "Kinetic energy"], 1)],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: The type of collision in which kinetic energy is conserved.",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "Elastic.",
    marking_notes: "Accept elastic.",
    steps: [S(1, "Which type of collision conserves kinetic energy?", ["Inelastic", "Perfectly inelastic", "Elastic", "Explosive"], 2)],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: The coloured bands produced when white light passes through a triangular prism.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "(Continuous) spectrum / continuous emission spectrum.",
    marking_notes: "Accept (continuous/light) spectrum.",
    steps: [S(1, "What are the coloured bands produced when white light passes through a prism called?", ["A line absorption spectrum", "A diffraction pattern", "A line emission spectrum", "A continuous spectrum"], 3)],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: A device used to store charge in an electric circuit.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "Capacitor.",
    marking_notes: "Accept capacitor.",
    steps: [S(1, "Which device is used to store charge in an electric circuit?", ["Capacitor", "Resistor", "Rheostat", "Voltmeter"], 0)],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: A phenomenon that occurs in a LASER when there are more electrons in a high-energy state than in a lower energy state.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Population inversion.",
    marking_notes: "Accept population inversion.",
    steps: [S(1, "What is it called when a laser medium has more electrons in a high-energy state than in a lower energy state?", ["Spontaneous emission", "Population inversion", "Photoelectric emission", "Total internal reflection"], 1)],
  },

  // ============ QUESTION 2: MATCHING ITEMS (5 marks) ============
  // Column B: A opaque, B electric field, C net force, D joule, E light bulb,
  // F newton, G laser, H electric potential, I transparent, J impulse.

  {
    number: "2", sub_number: "2.1",
    text: "Match the description with an item in COLUMN B (A opaque, B electric field, C net force, D joule, E light bulb, F newton, G laser, H electric potential, I transparent, J impulse). A unit of measure equal to kg·m²·s⁻².",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "D — joule (1 J = 1 N·m = 1 kg·m²·s⁻²).",
    marking_notes: "Accept only 'D'.",
    steps: [S(1, "Which item is a unit equal to kg·m²·s⁻²?", ["F — newton", "J — impulse", "D — joule", "H — electric potential"], 2)],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Match the description with an item in COLUMN B (A opaque, B electric field, C net force, D joule, E light bulb, F newton, G laser, H electric potential, I transparent, J impulse). The rate of change of momentum.",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Comprehension",
    model_answer: "C — net force (Newton's second law: Fnet = Δp/Δt).",
    marking_notes: "Accept only 'C'.",
    steps: [S(1, "Which item is the rate of change of momentum?", ["J — impulse", "F — newton", "B — electric field", "C — net force"], 3)],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Match the description with an item in COLUMN B (A opaque, B electric field, C net force, D joule, E light bulb, F newton, G laser, H electric potential, I transparent, J impulse). Objects that absorb some light while reflecting others.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A — opaque.",
    marking_notes: "Accept only 'A'.",
    steps: [S(1, "Which item describes objects that absorb some light while reflecting others?", ["A — opaque", "I — transparent", "E — light bulb", "G — laser"], 0)],
  },
  {
    number: "2", sub_number: "2.4",
    text: "Match the description with an item in COLUMN B (A opaque, B electric field, C net force, D joule, E light bulb, F newton, G laser, H electric potential, I transparent, J impulse). Electric potential energy per unit charge.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "H — electric potential (V = U/q).",
    marking_notes: "Accept only 'H'.",
    steps: [S(1, "Which item is electric potential energy per unit charge?", ["B — electric field", "D — joule", "J — impulse", "H — electric potential"], 3)],
  },
  {
    number: "2", sub_number: "2.5",
    text: "Match the description with an item in COLUMN B (A opaque, B electric field, C net force, D joule, E light bulb, F newton, G laser, H electric potential, I transparent, J impulse). A source of monochromatic light.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "G — laser.",
    marking_notes: "Accept only 'G'.",
    steps: [S(1, "Which item is a source of monochromatic light?", ["E — light bulb", "A — opaque", "G — laser", "I — transparent"], 2)],
  },

  // ============ QUESTION 3: TRUE/FALSE ITEMS (10 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "Indicate whether the statement is TRUE or FALSE and correct it if it is false: When work is done by a net force on an object moving along a horizontal plane, the kinetic energy of the object is constant.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "False — the kinetic energy changes (increases or decreases); by the work-energy theorem Wnet = ΔEk, so a net force doing work changes the kinetic energy.",
    marking_notes: "1 mark for 'false', 1 mark for the correction (kinetic energy changes / does not remain the same).",
    steps: [S(2, "Is the statement true or false, and what is the correct version?", [
      "True: kinetic energy stays constant, because the object stays on a horizontal plane",
      "False: the kinetic energy changes (Wnet = ΔEk), so it is not constant",
      "False: the potential energy changes instead of the kinetic energy",
      "False: the work done by a net force on a horizontal plane is always zero",
    ], 1)],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Indicate whether the statement is TRUE or FALSE and correct it if it is false: When car A, travelling at 20 m·s⁻¹, approaches car B, travelling at 18 m·s⁻¹ in the opposite direction, its speed relative to car B is 38 m·s⁻¹.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "True — the cars move towards each other, so the relative speed is 20 + 18 = 38 m·s⁻¹.",
    marking_notes: "'True' (2 marks, no correction needed).",
    steps: [S(2, "Is the statement true or false?", [
      "False: the relative speed is 20 − 18 = 2 m·s⁻¹",
      "False: the relative speed is 20 m·s⁻¹, the speed of car A",
      "False: the relative speed is 19 m·s⁻¹, the average of the two speeds",
      "True: the cars approach each other, so the speeds add: 20 + 18 = 38 m·s⁻¹",
    ], 3)],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Indicate whether the statement is TRUE or FALSE and correct it if it is false: The degree of diffraction of a wave is directly proportional to its frequency.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "False — the degree of diffraction is inversely proportional to frequency (directly proportional to wavelength).",
    marking_notes: "1 mark for 'false', 1 mark for 'inversely proportional to frequency / directly proportional to wavelength'.",
    steps: [S(2, "Is the statement true or false, and what is the correct version?", [
      "True: higher frequency waves diffract more",
      "False: the degree of diffraction is independent of frequency",
      "False: the degree of diffraction is directly proportional to the square of the frequency",
      "False: the degree of diffraction is inversely proportional to frequency (directly proportional to wavelength)",
    ], 3)],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Indicate whether the statement is TRUE or FALSE and correct it if it is false: In a parallel plate capacitor, a dielectric increases capacitance by increasing the net electric field between the plates.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "False — a dielectric increases the capacitance by decreasing the net electric field between the plates (it sets up a field opposing the field set up by the voltage source).",
    marking_notes: "1 mark for 'false', 1 mark for 'decreasing the net electric field / opposing the field of the source'.",
    steps: [S(2, "Is the statement true or false, and what is the correct version?", [
      "True: the dielectric adds to the field of the source, which stores more charge",
      "False: a dielectric increases capacitance by decreasing the distance between the plates",
      "False: a dielectric increases capacitance by decreasing the net electric field between the plates",
      "False: a dielectric increases capacitance by increasing the voltage across the plates",
    ], 2)],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Indicate whether the statement is TRUE or FALSE and correct it if it is false: In a laser, an incident photon leads to the creation of an identical photon travelling in the same direction as the incident photon.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "True — this is stimulated emission, which produces a photon identical to (same frequency, phase and direction as) the incident photon.",
    marking_notes: "'True' (2 marks, no correction needed).",
    steps: [S(2, "Is the statement true or false?", [
      "False: the new photon has a different frequency from the incident photon",
      "True: stimulated emission creates an identical photon travelling in the same direction",
      "False: the new photon travels in the opposite direction to the incident photon",
      "False: the incident photon is absorbed and no new photon is created",
    ], 1)],
  },

  // ============ QUESTION 4: MULTIPLE-CHOICE (15 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A car of mass m moves along a straight line with a velocity of magnitude v. The driver sees an obstruction and immediately applies the brakes. The car stops uniformly in t seconds from the moment that the brakes are applied. The car does not hit the obstruction. Which ONE of the following represents the MAGNITUDE of the average force exerted on the car during the braking period of t seconds? (A) v/t (B) mv (C) mv/t (D) mvt",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "C — mv/t. FnetΔt = Δp = mv_f − mv_i = 0 − mv, so the magnitude of the average force is mv/t.",
    marking_notes: "Accept only 'C'.",
    steps: [S(3, "Which option is the magnitude of the average braking force?", ["A: v/t", "B: mv", "C: mv/t", "D: mvt"], 2)],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Consider the statements: I Work is done on an object when a force displaces the object in the direction of the force. II Mechanical energy of a system is conserved when an external force does no work on the system. III The work done on an object by a net force is equal to the kinetic energy of the object. Which of the above statements is/are TRUE? (A) Only I (B) I and II only (C) II and III only (D) I, II and III",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "B — I and II only. III is false: the net work done equals the CHANGE in kinetic energy, not the kinetic energy itself.",
    marking_notes: "Accept only 'B'.",
    steps: [S(3, "Which of statements I, II and III are true?", ["A: Only I", "B: I and II only", "C: II and III only", "D: I, II and III"], 1)],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Which ONE of the statements is CORRECT for the pigment cyan? Cyan absorbs … (A) red light while reflecting green and blue light. (B) green light while reflecting red and blue light. (C) blue light while reflecting green and red light. (D) yellow light while reflecting green and blue light.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A — cyan pigment absorbs red light and reflects green and blue light (cyan = green + blue).",
    marking_notes: "Accept only 'A'.",
    steps: [S(3, "What does the pigment cyan absorb and reflect?", [
      "A: absorbs red, reflects green and blue",
      "B: absorbs green, reflects red and blue",
      "C: absorbs blue, reflects green and red",
      "D: absorbs yellow, reflects green and blue",
    ], 0)],
  },
  {
    number: "4", sub_number: "4.4",
    text: "The centres of two identical spheres are a distance r apart. They carry charges of Q1 and Q2 respectively. Each sphere exerts an electrostatic force of magnitude F on the other. The distance between the charges is now halved and the charge on Q1 is doubled. The magnitude of the new force between the charges is … (A) F (B) 2F (C) 4F (D) 8F",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "D — 8F. F = kQ1Q2/r². New force = k(2Q1)Q2/(r/2)² = 2 × 4 × F = 8F.",
    marking_notes: "Accept only 'D'.",
    steps: [S(3, "What is the magnitude of the new force?", ["A: F", "B: 2F", "C: 4F", "D: 8F"], 3)],
  },
  {
    number: "4", sub_number: "4.5",
    text: "In the circuit represented in the diagram (a battery of emf ε and internal resistance r in series with a variable resistor R and an ammeter A; a voltmeter V across the battery terminals), the resistance of the variable resistor is decreased. How would this decrease affect the readings on the voltmeter and ammeter? (A) Voltmeter unchanged; ammeter unchanged (B) Voltmeter decreases; ammeter increases (C) Voltmeter decreases; ammeter unchanged (D) Voltmeter increases; ammeter increases",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "B — decreasing R lowers the total resistance, so the current (ammeter) increases; the lost volts Ir increase, so the terminal voltage (voltmeter) = ε − Ir decreases.",
    marking_notes: "Accept only 'B'.",
    steps: [S(3, "How do the voltmeter and ammeter readings change when R is decreased?", [
      "A: voltmeter unchanged; ammeter unchanged",
      "B: voltmeter decreases; ammeter increases",
      "C: voltmeter decreases; ammeter unchanged",
      "D: voltmeter increases; ammeter increases",
    ], 1)],
    image_url: `${IMG}/4.5-circuit.png`,
  },

  // ============ QUESTION 5: MOMENTUM (9 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "Car A of mass 1 000 kg, stationary at a traffic light, is hit from behind by Car B of mass 1 200 kg, travelling at 18 m·s⁻¹. Immediately after the collision Car A moves forward at 12 m·s⁻¹. Assume that linear momentum is conserved during this collision. Calculate the speed of Car B immediately after the collision.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Forward positive: ΣpBefore = ΣpAfter, so (1 000)(0) + (1 200)(18) = (1 000)(12) + (1 200)vB, giving 21 600 = 12 000 + 1 200vB and vB = 8 m·s⁻¹ (forward).",
    marking_notes: "Marking points: principle/formula pbefore = pafter; substitution; final answer 8 m·s⁻¹.",
    steps: [
      S(1, "Which principle/equation applies to the collision?", [
        "Σp before = Σp after, i.e. mAviA + mBviB = mAvfA + mBvfB",
        "Σ(½mv²) before = Σ(½mv²) after only",
        "Fnet = ma applied to Car B only",
        "mAvfA = mBvfB",
      ], 0),
      S(1, "What is the total momentum before the collision?", ["18 000 kg·m·s⁻¹", "32 400 kg·m·s⁻¹", "21 600 kg·m·s⁻¹", "9 600 kg·m·s⁻¹"], 2),
      S(1, "Which equation results from substituting the values?", [
        "21 600 = 12 000 − 1 200vB",
        "21 600 = 12 000 + 1 200vB",
        "21 600 = 1 200(12) + 1 000vB",
        "18 000 = 12 000 + 1 200vB",
      ], 1),
      S(1, "What is the speed of Car B after the collision?", ["28 m·s⁻¹", "5 m·s⁻¹", "10 m·s⁻¹", "8 m·s⁻¹"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Modern cars are designed to crumple partially on impact. Explain why the assumption made in Question 5.1 (that linear momentum is conserved) may NOT be valid in this case.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Comprehension",
    model_answer: "It is not an isolated system: external forces such as friction are present (or the driver of the front car has a foot on the brake).",
    marking_notes: "Accept: not an isolated system / external forces present / frictional forces present / driver in front car has foot on the brake (2 marks, all-or-nothing).",
    steps: [S(2, "Why might momentum NOT be conserved in this collision?", [
      "The cars gain mass when they crumple",
      "Crumpling creates extra kinetic energy that adds momentum",
      "It is not an isolated system: external forces such as friction (or braking) act on the cars",
      "Momentum is only conserved in elastic collisions, and crumpling makes it elastic",
    ], 2)],
  },
  {
    number: "5", sub_number: "5.3",
    text: "A traffic officer says that for cars involved in a head-on collision, the risk of injury for passengers in a heavier car is less than for passengers in a lighter car. Use principles of Physics to explain why this statement is correct.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "During the collision both cars experience a force of equal magnitude (Newton's third law). The same net force on the car with the larger mass gives a smaller acceleration, so its passengers undergo a smaller change in velocity and are less likely to be injured. (Equivalently, for the same FnetΔt both cars have equal Δp, so with the larger m the heavier car has the smaller change in velocity.)",
    marking_notes: "1 mark each: equal-magnitude forces; smaller acceleration for the larger mass; smaller change in velocity so less injury.",
    steps: [
      S(1, "During the collision, the force each car exerts on the other is…", [
        "greater on the lighter car",
        "greater on the heavier car",
        "equal in magnitude (and opposite in direction)",
        "zero on the heavier car",
      ], 2),
      S(1, "The same force on the car with the larger mass produces…", [
        "a larger acceleration",
        "a smaller acceleration",
        "the same acceleration",
        "no acceleration",
      ], 1),
      S(1, "So the passengers in the heavier car experience…", [
        "a smaller change in velocity and are less injured",
        "a larger change in velocity and are less injured",
        "a smaller change in velocity and are more injured",
        "the same change in velocity as the lighter car's passengers",
      ], 0),
    ],
  },

  // ============ QUESTION 6: VERTICAL PROJECTILE MOTION (13 marks) ============
  // Graph: velocity vs time, starts at +10 m/s at t=0, crosses zero at t=1 s,
  // reaches -10 m/s at t=2 s, -20 m/s at t=3 s, -25 m/s at t=3,5 s (upward
  // positive).

  {
    number: "6", sub_number: "6.1",
    text: "A boy stands at the edge of a high cliff and throws a stone vertically upwards with an initial velocity of 10 m·s⁻¹. The stone strikes the ground below the cliff after 3,5 s. Use the velocity-time graph to calculate the acceleration of the stone between times t = 2 s and t = 3 s.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "a = Δv/Δt = (−20 − (−10))/(3 − 2) = −10 m·s⁻² (10 m·s⁻² downwards).",
    marking_notes: "Gradient/acceleration formula; correct substitution from the graph (−10 at 2 s, −20 at 3 s); answer −10 m·s⁻² or 10 m·s⁻² downwards.",
    steps: [
      S(1, "Which formula gives the acceleration from the graph?", ["a = Δv/Δt (gradient of the v-t graph)", "a = Δv × Δt", "a = vf/Δt", "a = Δt/Δv"], 0),
      S(1, "Which substitution uses the graph values correctly?", [
        "(−20 + (−10))/(3 − 2)",
        "(−10 − (−20))/(3 − 2)",
        "(−20 − (−10))/(3 + 2)",
        "(−20 − (−10))/(3 − 2)",
      ], 3),
      S(1, "What is the acceleration?", ["+10 m·s⁻² (upwards)", "−10 m·s⁻² (10 m·s⁻² downwards)", "−6,67 m·s⁻²", "−20 m·s⁻²"], 1),
    ],
    image_url: `${IMG}/6-velocity-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "(Velocity-time graph of the stone.) At which time(s) is the stone moving at a speed of 5 m·s⁻¹? Give the time on the way up and the time on the way down.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "t = 0,5 s (moving up at +5 m·s⁻¹) and t = 1,5 s (moving down at −5 m·s⁻¹).",
    marking_notes: "1 mark for 0,5 s and 1 mark for 1,5 s.",
    steps: [
      S(1, "At what time is the stone moving UPWARDS at 5 m·s⁻¹?", ["1,0 s", "0,5 s", "1,5 s", "2,5 s"], 1),
      S(1, "At what time is the stone moving DOWNWARDS at 5 m·s⁻¹?", ["2,5 s", "0,5 s", "2,0 s", "1,5 s"], 3),
    ],
    image_url: `${IMG}/6-velocity-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "(Velocity-time graph of the stone.) After how many seconds does the stone reach its highest point?",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "1 s (the velocity is zero where the graph crosses the time axis).",
    marking_notes: "Accept 1 s.",
    steps: [S(1, "At what time does the stone reach its highest point?", ["0,5 s", "2,0 s", "3,5 s", "1,0 s"], 3)],
    image_url: `${IMG}/6-velocity-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.4",
    text: "(Velocity-time graph of the stone, which strikes the ground after 3,5 s.) Determine the height of the cliff from which the stone was thrown.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "The stone is back at the cliff-top height at t = 2 s (it rose 5 m and fell 5 m), moving at 10 m·s⁻¹ downwards. The cliff height is the area of the trapezium under the graph between t = 2 s and 3,5 s: ½(10 + 25)(1,5) = 26,25 m. (Equivalent memo routes: equations of motion, e.g. vf² = vi² + 2aΔy with (−25)² = 10² + 2(−10)Δy gives Δy = −26,25 m; or the larger triangle minus the smaller triangle 31,25 − 5.)",
    marking_notes: "Any valid method. Answer: 26,25 m. Memo allocates marks for the method/formula, the substitution values and the final answer.",
    steps: [
      S(1, "Which method gives the height of the cliff?", [
        "The area of the trapezium under the graph from t = 2 s to 3,5 s (the stone is level with the cliff top at t = 2 s)",
        "The gradient of the graph between 0 and 3,5 s",
        "The area of the triangle between t = 0 and t = 1 s only",
        "The final speed (25 m·s⁻¹) multiplied by the total time (3,5 s)",
      ], 0),
      S(1, "What are the two parallel sides of that trapezium (speeds) and its height (time interval)?", [
        "Sides 10 and 25 m·s⁻¹; height 3,5 s",
        "Sides 5 and 25 m·s⁻¹; height 1,5 s",
        "Sides 10 and 25 m·s⁻¹; height 1,5 s",
        "Sides 0 and 25 m·s⁻¹; height 2,5 s",
      ], 2),
      S(1, "Which expression gives the area?", ["(10 + 25)(1,5)", "½(10 + 25)(1,5)", "½(25)(1,5)", "½(10 + 25)(3,5)"], 1),
      S(1, "What is the height of the cliff?", ["52,50 m", "31,25 m", "37,50 m", "26,25 m"], 3),
    ],
    image_url: `${IMG}/6-velocity-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.5",
    text: "Using the top of the cliff as the initial position of the stone, the position-time (displacement-time) graph is to be sketched for the motion of the stone from its highest point (t = 1 s) until it reaches the ground (t = 3,5 s). Choose the correct description of each feature of the sketch.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "From t = 1 s to 3,5 s the graph is a curve (parabola) showing constant downward acceleration, starting at the maximum position (+5 m above the cliff top) at t = 1 s, crossing the time axis (position 0) at t = 2 s, and stopping at t = 3,5 s at the ground (about −26,25 m).",
    marking_notes: "Memo checklist (cliff top as zero): shape of curve for constant acceleration (position decreasing); displacement is 0 at t = 2 s; curve stops at t = 3,5 s. (The memo also accepts the other zero-reference convention; see FLAG in the file header.)",
    steps: [
      S(1, "What is the shape of the graph from t = 1 s to t = 3,5 s?", [
        "A straight line sloping downwards (constant velocity)",
        "A curve that starts at a maximum and falls ever more steeply (constant acceleration)",
        "A curve that starts at a minimum and rises ever more steeply",
        "A horizontal line",
      ], 1),
      S(1, "Where does the curve cross the time axis (position = 0, the cliff top)?", ["t = 1 s", "t = 3 s", "t = 2 s", "t = 3,5 s"], 2),
      S(1, "Where does the curve end?", [
        "At t = 3,5 s, below the axis (the ground)",
        "At t = 3,5 s, on the time axis",
        "At t = 4 s, below the axis",
        "At t = 3 s, above the axis",
      ], 0),
    ],
  },

  // ============ QUESTION 7: WORK, ENERGY AND POWER (11 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "At a hydro-electric power plant, 200 m³ of water is funnelled each second down a vertical shaft to a turbine. The vertical height through which the water falls is 150 m. Ignore friction. One m³ of water has a mass of 1 000 kg. Calculate the mass of water that enters the turbine each second.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "200 × 1 000 = 2 × 10⁵ kg.",
    marking_notes: "2 × 10⁵ kg.",
    steps: [S(1, "What mass of water enters the turbine each second?", ["200 kg", "2 × 10⁶ kg", "2 × 10³ kg", "2 × 10⁵ kg"], 3)],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Each second 2 × 10⁵ kg of water falls through a vertical height of 150 m to the turbine (ignore friction). Calculate the kinetic energy of this mass of water when entering the turbine. Use energy principles.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Mechanical energy is conserved: Eki + Epi = Ekf + Epf, so 0 + mgh = Ekf + 0, giving Ekf = (2 × 10⁵)(9,8)(150) = 2,94 × 10⁸ J. (Alternatively Wnet = ΔEk: (200 000)(9,8)cos0°(150) = Ekf − 0.)",
    marking_notes: "Principle (energy conservation or work-energy theorem), substitution, and final answer 2,94 × 10⁸ J.",
    steps: [
      S(1, "Which energy principle applies (no friction)?", [
        "Ek at the bottom = Ep at the top (Eki + Epi = Ekf + Epf, mechanical energy conserved)",
        "Ek = Ep + work done by friction",
        "Ek at the top = ½mv² with v = 150 m·s⁻¹",
        "Ek at the bottom = mgh/2",
      ], 0),
      S(1, "Which expression gives the kinetic energy?", ["(2 × 10⁵)(9,8)(150)", "½(2 × 10⁵)(9,8)(150)", "(2 × 10⁵)(150)", "(2 × 10⁵)(9,8)"], 0),
      S(2, "What is the kinetic energy of the water?", ["1,96 × 10⁶ J", "1,47 × 10⁸ J", "2,94 × 10⁶ J", "2,94 × 10⁸ J"], 3),
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "The kinetic energy of 2 × 10⁵ kg of water entering the turbine is 2,94 × 10⁸ J. Calculate the maximum speed at which this mass of water enters the turbine.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Ek = ½mv²: 2,94 × 10⁸ = ½(2 × 10⁵)v², so v = 54,22 m·s⁻¹.",
    marking_notes: "Formula Ek = ½mv²; substitution; final answer 54,22 m·s⁻¹.",
    steps: [
      S(1, "Which formula relates kinetic energy and speed?", ["Ek = ½mv²", "Ek = mv²", "Ek = mv", "Ek = ½mv"], 0),
      S(1, "Which substitution is correct?", [
        "2,94 × 10⁸ = (2 × 10⁵)v²",
        "2,94 × 10⁸ = ½(200)v²",
        "2,94 × 10⁸ = ½(2 × 10⁵)v²",
        "2,94 × 10⁸ = ½(2 × 10⁵)v",
      ], 2),
      S(1, "What is the speed?", ["38,34 m·s⁻¹", "54,22 m·s⁻¹", "2 940 m·s⁻¹", "76,68 m·s⁻¹"], 1),
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Assume that a generator converts 85% of this maximum kinetic energy (2,94 × 10⁸ J each second) gained by the water into hydro-electricity. Calculate the electrical power output of the generator.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "P = W/Δt = (85/100)(2,94 × 10⁸)/1 = 2,499 × 10⁸ W (accept 2,5 × 10⁸ W).",
    marking_notes: "Correct substitution (85% of 2,94 × 10⁸ J in 1 s) and answer 2,499 × 10⁸ W (accept 2,5 × 10⁸ W).",
    steps: [
      S(1, "Which expression gives the electrical power?", [
        "(15/100)(2,94 × 10⁸)/1",
        "(2,94 × 10⁸)/(0,85 × 1)",
        "(85/100)(2,94 × 10⁸)/1",
        "(85/100)(2,94 × 10⁸)(200)",
      ], 2),
      S(1, "What is the electrical power output?", ["4,41 × 10⁷ W", "3,46 × 10⁸ W", "2,94 × 10⁸ W", "2,50 × 10⁸ W (2,499 × 10⁸ W)"], 3),
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Explain what happens to the 15% of the kinetic energy that is NOT converted into electrical energy.",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "It is converted to other forms of energy such as sound or heat (in the turbine).",
    marking_notes: "Accept: converted to sound / heat in the turbine / other forms of energy.",
    steps: [S(1, "What happens to the 15% of the kinetic energy that is not converted to electrical energy?", [
      "It is destroyed",
      "It is converted to other forms of energy such as sound and heat in the turbine",
      "It is converted back into gravitational potential energy of the water",
      "It becomes extra electrical energy in the generator",
    ], 1)],
  },

  // ============ QUESTION 8: DOPPLER EFFECT (11 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "An ambulance travelling down a road at constant speed emits sound waves from its siren. A stationary lady with a detector registers a frequency of 445 Hz as the ambulance approaches, and 380 Hz as it moves away at the same constant speed. Name the phenomenon that describes the change in the frequency observed by the lady.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler effect.",
    marking_notes: "Accept Doppler effect.",
    steps: [S(1, "Which phenomenon describes the change in observed frequency?", ["Interference", "The Doppler effect", "Diffraction", "Resonance"], 1)],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "An ambulance moving at constant speed emits sound from its siren. A stationary lady registers 445 Hz as it approaches and 380 Hz as it moves away at the same speed. The speed of sound in air is 343 m·s⁻¹. Calculate the speed at which the ambulance is moving.",
    marks: 7, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "fL = [(v ± vL)/(v ± vs)]fs with vL = 0. Approaching: 445 = [343/(343 − vs)]fs, so 445(343 − vs) = 343fs …(i). Moving away: 380 = [343/(343 + vs)]fs, so 380(343 + vs) = 343fs …(ii). Equating: 445(343 − vs) = 380(343 + vs), so 825vs = 22 295 and vs = 27,02 m·s⁻¹.",
    marking_notes: "Marking points: Doppler formula; approaching equation; moving-away equation; equating/eliminating fs; simplification; answer 27,02 m·s⁻¹.",
    steps: [
      S(1, "Which formula applies to a moving source and a stationary listener?", [
        "fL = [(v ± vL)/(v ± vs)]fs",
        "fL = (v − vs)fs/v only",
        "fL = fs·λ/v",
        "fL = fs(vs/v)",
      ], 0),
      S(1, "For the approaching ambulance, what appears in the denominator?", ["343 + vs", "343 − vs", "343", "vs − 343"], 1),
      S(1, "Which equation describes the approaching ambulance?", [
        "445 = [343/(343 + vs)]fs",
        "445 = [(343 + vs)/343]fs",
        "445 = [343/(343 − vs)]fs",
        "445 = [(343 − vs)/343]fs",
      ], 2),
      S(1, "Which equation describes the ambulance moving away?", [
        "380 = [343/(343 + vs)]fs",
        "380 = [343/(343 − vs)]fs",
        "380 = [(343 + vs)/343]fs",
        "380 = [343/vs]fs",
      ], 0),
      S(1, "Which equation results from eliminating fs?", [
        "445(343 + vs) = 380(343 − vs)",
        "445(343 − vs) = 380(343 − vs)",
        "445(343 − vs) = 380(343 + vs)",
        "445(343) = 380(vs)",
      ], 2),
      S(1, "Which simplified equation follows?", ["65vs = 22 295", "825vs = 152 635", "825vs = 130 340", "825vs = 22 295"], 3),
      S(1, "What is the speed of the ambulance?", ["13,51 m·s⁻¹", "54,05 m·s⁻¹", "27,02 m·s⁻¹", "−27,02 m·s⁻¹"], 2),
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "The ambulance moves at 27,02 m·s⁻¹ and the stationary lady registers 445 Hz as it approaches. The speed of sound in air is 343 m·s⁻¹. Calculate the frequency at which the siren emits the sound waves.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "445 = [343/(343 − 27,02)]fs, so fs = 445(343 − 27,02)/343 = 409,94 Hz. (Using the receding value: 380(343 + 27,02)/343 = 409,94 Hz.)",
    marking_notes: "Correct substitution, rearrangement and answer 409,94 Hz.",
    steps: [
      S(1, "Which substitution uses the correct sign for the approaching ambulance?", [
        "445 = [343/(343 + 27,02)]fs",
        "445 = [(343 + 27,02)/343]fs",
        "445 = [343/(343 − 27,02)]fs",
        "445 = [343/27,02]fs",
      ], 2),
      S(1, "Which expression gives fs?", ["445(343 + 27,02)/343", "445(343)/(343 − 27,02)", "445(27,02)/343", "445(343 − 27,02)/343"], 3),
      S(1, "What is fs?", ["480,00 Hz", "412,50 Hz", "409,94 Hz", "445,00 Hz"], 2),
    ],
  },

  // ============ QUESTION 9: DIFFRACTION (11 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A helium-neon laser emits red light that passes through a single slit. A diffraction pattern is observed on a screen some distance away from the slit. Define the term diffraction.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The spreading (or bending) of a wave when it passes through a small aperture/slit or around a sharp edge/obstacle.",
    marking_notes: "2 marks or 0: spreading/bending of a wave passing through a narrow slit or around a sharp edge/obstacle.",
    steps: [S(2, "Which is the correct definition of diffraction?", [
      "The change in direction of a wave when it passes from one medium into another",
      "The bouncing back of a wave from a surface",
      "The separation of white light into its component colours",
      "The spreading (bending) of a wave as it passes through a small slit or around a sharp edge or obstacle",
    ], 3)],
  },
  {
    number: "9", sub_number: "9.2",
    text: "Red light of wavelength 644,4 nm passes through a single slit of width 3 437 nm. Calculate the angle at which the third minimum occurs.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "sinθ = mλ/a = 3(644,4 × 10⁻⁹)/(3 437 × 10⁻⁹) = 0,5625, so θ = 34,23°.",
    marking_notes: "Formula sinθ = mλ/a; substitution with m = 3; θ = 34,23°.",
    steps: [
      S(1, "Which formula gives the angle of the mth minimum for a single slit?", ["sinθ = mλ/a", "sinθ = λ/(ma)", "sinθ = a/(mλ)", "tanθ = mλ/a"], 0),
      S(1, "Which substitution is correct for the THIRD minimum?", [
        "644,4/3 437",
        "2 × 644,4/3 437",
        "3 × 644,4/3 437",
        "3 × 3 437/644,4",
      ], 2),
      S(1, "What is the angle?", ["10,81°", "22,02°", "55,77°", "34,23°"], 3),
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Briefly describe the single-slit diffraction pattern of red laser light that will be observed on the screen.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A broad central red (bright) fringe, followed on either side by alternating dark and red (bright) fringes.",
    marking_notes: "1 mark for the broad central bright fringe; 1 mark for alternate dark and bright fringes on either side.",
    steps: [
      S(1, "What is the central fringe like?", [
        "A narrow dark fringe",
        "A broad bright red fringe",
        "A bright fringe of the same width as the others",
        "A white fringe",
      ], 1),
      S(1, "What is observed on either side of the central fringe?", [
        "One single dark band only",
        "Continuous red light with no dark bands",
        "A rainbow of coloured bands",
        "Alternating dark and bright red fringes",
      ], 3),
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "The single slit is replaced with a double slit. Name ONE similarity and ONE difference in the pattern observed compared to the single slit.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Similarity: alternating red and dark bands. Difference: the red bands are of equal width (no broad central band) / of equal intensity.",
    marking_notes: "1 mark for the similarity, 1 mark for the difference.",
    steps: [
      S(1, "Which is a SIMILARITY between the two patterns?", [
        "Both have a broad central bright band",
        "Both consist of alternating red and dark bands",
        "Both show coloured bands of different colours",
        "Both have bright bands whose intensity decreases rapidly",
      ], 1),
      S(1, "Which is a DIFFERENCE?", [
        "The double-slit bands are of equal width (no broad central band) and equal intensity",
        "The double-slit pattern has no dark bands",
        "The double-slit pattern has a broader central band",
        "The double-slit pattern has bands of different colours",
      ], 0),
    ],
  },
  {
    number: "9", sub_number: "9.5",
    text: "Will this diffraction/interference pattern be observed if the laser is replaced with a light bulb? Give a reason for your answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "No — a light bulb is not a coherent source / not monochromatic (it emits many colours/wavelengths).",
    marking_notes: "1 mark for 'No', 1 mark for the reason (not coherent / not monochromatic / bands of different colours).",
    steps: [
      S(1, "Will the same pattern be observed with a light bulb?", ["Yes, an identical pattern", "Yes, but dimmer", "No", "Yes, but with wider bands"], 2),
      S(1, "What is the reason?", [
        "The light bulb is too bright",
        "The light bulb is not a coherent, monochromatic source (it emits many wavelengths)",
        "The light bulb emits sound waves",
        "The light bulb emits light that cannot diffract",
      ], 1),
    ],
  },

  // ============ QUESTION 10: ELECTROSTATICS (11 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "An ink-jet printer uses the electric field between two oppositely charged parallel plates A and B to control the position of an ink drop on paper. P is a negatively charged ink drop. Define the electric field at a point in space.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The (electric) force experienced per (positive) unit charge placed at the point. (Or: a point/space where a charge will experience an electric force.)",
    marking_notes: "Accept force per unit (positive) charge, or a region where a charge experiences an electric force (2 marks, all-or-nothing).",
    steps: [S(2, "Which is the correct definition of the electric field at a point?", [
      "The work done to move a unit charge from infinity to the point",
      "The electric force experienced per (positive) unit charge placed at the point",
      "The total charge stored on the plates at the point",
      "The electric potential energy of a charge at the point",
    ], 1)],
    image_url: `${IMG}/10-inkjet-printer.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "In the diagram, the negatively charged ink drop P is deflected towards plate A. Is plate B negatively or positively charged? Give a reason for your answer.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Negative. The negative ink drop is repelled by B / attracted towards A (like charges repel).",
    marking_notes: "1 mark for 'negative', 1 mark for the reason (negative drops deflect away from B / are attracted to A / like charges repel).",
    steps: [
      S(1, "Plate B is…", ["positively charged", "negatively charged", "neutral", "positively charged at the edges only"], 1),
      S(1, "What is the reason?", [
        "The negative drop is repelled by B (like charges repel) and attracted towards A",
        "The negative drop is attracted to B because opposite charges attract",
        "The negative drop is repelled by A and so B must be positive",
        "Plates always have the same charge as the nearest drop",
      ], 0),
    ],
    image_url: `${IMG}/10-inkjet-printer.png`,
  },
  {
    number: "10", sub_number: "10.3",
    text: "Sketch the electric field pattern between plates A (positive) and B (negative). Choose the correct description of each feature of the sketch.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Field lines between the plates are parallel and evenly spaced (slightly bent at the ends), directed from the positive plate A to the negative plate B.",
    marking_notes: "1 mark for parallel, evenly spaced lines (slightly bent at the edges); 1 mark for direction from A to B.",
    steps: [
      S(1, "What is the pattern of the field lines between the plates?", [
        "Lines radiating outwards from the middle of plate A",
        "Parallel, evenly spaced lines between the plates (slightly bent at the ends)",
        "Concentric circles around the ink drop",
        "Lines that converge on one point of plate B",
      ], 1),
      S(1, "In which direction do the field lines point?", ["From B to A", "Parallel to the plates, left to right", "From A to B", "Into the page"], 2),
    ],
    image_url: `${IMG}/10-inkjet-printer.png`,
  },
  {
    number: "10", sub_number: "10.4",
    text: "The plates A and B are 6,4 × 10⁻⁴ m apart and ink drop P has a charge of magnitude 1,5 × 10⁻¹³ C. When the ink drop enters the field it experiences an electrical force of 2,1 × 10⁻⁷ N. Calculate the potential difference across the parallel plates.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = F/q = (2,1 × 10⁻⁷)/(1,5 × 10⁻¹³) = 1,4 × 10⁶ N·C⁻¹. E = V/d, so 1,4 × 10⁶ = V/(6,4 × 10⁻⁴) and V = 8,96 × 10² V. (Alternatively V = Fd/q.)",
    marking_notes: "Formula E = F/q; E value; formula E = V/d; substitution; V = 8,96 × 10² V.",
    steps: [
      S(1, "Which formula gives the electric field strength from the force on the drop?", ["E = F/q", "E = Fq", "E = q/F", "E = kQ/r²"], 0),
      S(1, "What is the electric field strength between the plates?", ["7,14 × 10⁻⁷ N·C⁻¹", "1,4 × 10⁶ N·C⁻¹", "3,15 × 10⁻²⁰ N·C⁻¹", "1,4 × 10⁻⁶ N·C⁻¹"], 1),
      S(1, "Which formula relates the field to the potential difference between parallel plates?", ["E = V·d", "E = V/d (V = Ed)", "E = d/V", "E = V²/d"], 1),
      S(1, "Which substitution is correct?", [
        "1,4 × 10⁶ = V/(6,4 × 10⁻⁴)",
        "1,4 × 10⁶ = (6,4 × 10⁻⁴)/V",
        "1,4 × 10⁶ = V(6,4 × 10⁻⁴)²",
        "1,5 × 10⁻¹³ = V/(6,4 × 10⁻⁴)",
      ], 0),
      S(1, "What is the potential difference?", ["2,19 × 10⁹ V", "8,96 × 10⁶ V", "1,4 × 10⁶ V", "8,96 × 10² V"], 3),
    ],
    image_url: `${IMG}/10-inkjet-printer.png`,
  },

  // ============ QUESTION 11: ELECTRIC CIRCUITS (6 marks) ============

  {
    number: "11", sub_number: "11.1",
    text: "Learners investigate the conducting ability of two metal wires P and Q, made of different materials. They connect ONE wire at a time in the circuit shown (battery, ammeter in series with the wire, voltmeter across the wire) and increase the potential difference in equal increments, measuring the current. Name TWO variables that the learners would have controlled in each of the experiments.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Any two of: temperature; cross-sectional area (thickness) of the wire; length of the wire.",
    marking_notes: "1 mark each for any two of: temperature, cross-sectional area, length.",
    steps: [
      S(1, "Which is a variable the learners controlled (kept constant)?", ["Current through the wire", "Potential difference across the wire", "Temperature of the wire", "The material of the wire"], 2),
      S(1, "Which is a second variable the learners controlled?", [
        "Current through the wire",
        "Cross-sectional area (thickness) of the wire",
        "Potential difference across the wire",
        "The material of the wire",
      ], 1),
    ],
    image_url: `${IMG}/11-circuit.png`,
  },
  {
    number: "11", sub_number: "11.2",
    text: "The sketch graph shows current against potential difference for wire P and wire Q (the line for Q is steeper than the line for P). Which one (P or Q) is the better conductor? Explain your answer.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Wire Q. For the same potential difference, wire Q has a higher current than wire P (its I-V gradient, I/V = 1/R, is larger), therefore wire Q has a lower resistance than wire P.",
    marking_notes: "1 mark for Q; remaining marks for: higher current at the same p.d. / larger gradient (I/V = 1/R = conductance); therefore lower resistance. Memo accepts several equivalent phrasings.",
    steps: [
      S(1, "Which wire is the better conductor?", ["Wire P", "Both are equal", "Wire Q", "It cannot be determined without the lengths"], 2),
      S(1, "At the same potential difference, which wire carries the larger current?", ["Wire P", "Wire Q", "Both carry the same current", "Neither, since both lines pass through the origin"], 1),
      S(1, "What does the gradient (I/V) of each graph represent, and how do they compare?", [
        "I/V = R, and P has the larger value",
        "I/V = 1/R (conductance), and Q has the larger gradient",
        "I/V = 1/R (conductance), and P has the larger gradient",
        "I/V = R, and Q has the larger value",
      ], 1),
      S(1, "Therefore wire Q has…", ["a higher resistance than wire P", "the same resistance as wire P", "a lower resistance than wire P", "a lower emf than wire P"], 2),
    ],
    image_url: `${IMG}/11-current-pd-graph.png`,
  },

  // ============ QUESTION 12: ELECTRIC CIRCUITS (15 marks) ============

  {
    number: "12", sub_number: "12.1",
    text: "A circuit is connected as shown (battery of internal resistance 0,5 Ω in series with switch S and a 12 Ω resistor; R and a 10 Ω resistor in parallel, with ammeter A in series with the 10 Ω resistor; voltmeter V across the battery). The resistance of R is unknown. With switch S closed, the reading on voltmeter V decreases from 45 V to 43,5 V. Calculate the reading on ammeter A. Show ALL your calculations.",
    marks: 8, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Vint = 45 − 43,5 = 1,5 V. I = Vint/r = 1,5/0,5 = 3 A (battery current). V12Ω = IR = (3)(12) = 36 V. V∥ = 43,5 − 36 = 7,5 V. Ammeter reading I = V∥/R = 7,5/10 = 0,75 A.",
    marking_notes: "Memo (8 marks): emf/voltage lost in the battery 1,5 V; current 3 A; V across 12 Ω = 36 V; V across the parallel pair = 7,5 V; ammeter (10 Ω branch) 0,75 A. The ammeter reads only the current through the 10 Ω branch.",
    steps: [
      S(1, "What is the voltage lost across the internal resistance? (emf = 45 V with S open; terminal voltage 43,5 V with S closed)", ["43,5 V", "1,5 V", "45 V", "88,5 V"], 1),
      S(1, "Which equation gives the current drawn from the battery?", [
        "I = Vint/r",
        "I = Vint × r",
        "I = Vterminal/r",
        "I = emf/R12",
      ], 0),
      S(1, "What is the current through the battery?", ["87 A", "0,75 A", "3 A", "1,5 A"], 2),
      S(1, "Which equation gives the potential difference across the 12 Ω resistor?", ["V = IR12 (the battery current times 12 Ω)", "V = I/R12", "V = I²/R12", "V = emf − IR12"], 0),
      S(1, "What is the potential difference across the 12 Ω resistor?", ["4 V", "3,5 V", "36 V", "9 V"], 2),
      S(1, "What is the potential difference across the parallel combination (R and 10 Ω)?", ["9,0 V", "7,5 V", "79,5 V", "36,0 V"], 1),
      S(1, "Which expression gives the current through the 10 Ω resistor (the ammeter reading)?", ["7,5/12", "7,5 × 10", "3/10", "7,5/10"], 3),
      S(1, "What is the reading on the ammeter?", ["0,75 A", "3,00 A", "0,63 A", "2,25 A"], 0),
    ],
    image_url: `${IMG}/12-circuit.png`,
  },
  {
    number: "12", sub_number: "12.2",
    text: "In the same circuit the battery current is 3 A, the potential difference across the parallel pair (R and 10 Ω) is 7,5 V, and the ammeter in series with the 10 Ω resistor reads 0,75 A. Determine the resistance of resistor R.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "IR = 3 − 0,75 = 2,25 A; R = V∥/IR = 7,5/2,25 = 3,33 Ω. (Alternatively Rtotal = 14,5 Ω, Rp = 2,5 Ω and 1/2,5 = 1/R + 1/10 gives R = 3,33 Ω.)",
    marking_notes: "Current through R = 2,25 A; R = V/I substitution; R = 3,33 Ω.",
    steps: [
      S(1, "What is the current through resistor R?", ["0,75 A", "3,75 A", "2,25 A", "3,00 A"], 2),
      S(1, "Which substitution gives R?", ["7,5/2,25", "7,5/3", "7,5/0,75", "43,5/2,25"], 0),
      S(1, "What is the resistance of R?", ["19,33 Ω", "2,50 Ω", "10,00 Ω", "3,33 Ω"], 3),
    ],
    image_url: `${IMG}/12-circuit.png`,
  },
  {
    number: "12", sub_number: "12.3",
    text: "How will the reading on voltmeter V change if resistor R burns out? Give a reason for your answer.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "It increases. The total resistance increases (a parallel branch is removed), so the current decreases; the voltage lost across the internal resistance (Vint = Ir) decreases, so the terminal voltage read by V increases.",
    marking_notes: "1 mark each: increases; total resistance increases; current decreases; Vinternal decreases (so V reading increases).",
    steps: [
      S(1, "How does the voltmeter reading change?", ["It increases", "It decreases", "It stays the same", "It drops to zero"], 0),
      S(1, "What happens to the total resistance of the circuit?", ["It decreases", "It stays the same", "It increases", "It becomes zero"], 2),
      S(1, "What happens to the current drawn from the battery?", ["It increases", "It decreases", "It stays the same", "It reverses direction"], 1),
      S(1, "What happens to the voltage lost across the internal resistance, and so to the reading of V?", [
        "Vinternal increases, so V decreases",
        "Vinternal decreases, so V increases",
        "Vinternal stays the same, so V stays the same",
        "Vinternal decreases, so V decreases",
      ], 1),
    ],
    image_url: `${IMG}/12-circuit.png`,
  },

  // ============ QUESTION 13: ELECTRODYNAMICS (6 marks) ============

  {
    number: "13", sub_number: "13.1",
    text: "A coil is rotated anti-clockwise in a uniform magnetic field (see diagram: the coil ends connect to two separate slip rings). What type of generator is illustrated in the diagram? Give a reason for your answer.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "An AC generator (alternator), because there is a separate slip ring for each end of the coil.",
    marking_notes: "1 mark for AC generator/alternator; 1 mark for the (separate) slip ring for each side of the loop.",
    steps: [
      S(1, "What type of generator is shown?", ["DC generator", "AC generator (alternator)", "DC motor", "Transformer"], 1),
      S(1, "What is the reason?", [
        "It has a split-ring commutator",
        "It has a (separate) slip ring for each side of the coil",
        "It has a permanent magnet",
        "The coil rotates in a magnetic field",
      ], 1),
    ],
    image_url: `${IMG}/13-coil-magnets.png`,
  },
  {
    number: "13", sub_number: "13.2",
    text: "Determine the direction of the current in segment XY when the coil is in the position shown (lying parallel to the magnetic field, rotating anti-clockwise). Only write down X to Y OR Y to X.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "X to Y.",
    marking_notes: "Memo answer: X to Y (2 marks).",
    steps: [S(2, "What is the direction of the current in segment XY?", ["Y to X", "No current flows (emf is zero when the coil is parallel to the field)", "X to Y", "The current alternates direction continuously"], 2)],
    image_url: `${IMG}/13-coil-magnets.png`,
  },
  {
    number: "13", sub_number: "13.3",
    text: "Assume that the speed and direction of rotation are constant. A sketch graph of potential difference against time that represents the output of this device is to be drawn. Choose the correct description of each feature of the sketch.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "A sinusoidal alternating-voltage graph (at least one full cycle) with the vertical axis labelled V (volt) and the horizontal axis labelled t (s).",
    marking_notes: "1 mark for correct axis labelling (V on the vertical, t on the horizontal axis); 1 mark for the shape: at least one sinusoidal cycle (sine or cosine accepted).",
    steps: [
      S(1, "How should the axes be labelled?", [
        "t (s) on the vertical axis and V (volt) on the horizontal axis",
        "V (volt) on the vertical axis and t (s) on the horizontal axis",
        "I (A) on the vertical axis and t (s) on the horizontal axis",
        "V (volt) on the vertical axis and position (m) on the horizontal axis",
      ], 1),
      S(1, "What is the shape of the output?", [
        "A horizontal straight line (constant DC)",
        "Positive half-cycles only (pulsating DC)",
        "A sinusoidal curve alternating above and below zero (at least one cycle)",
        "A straight diagonal line",
      ], 2),
    ],
  },

  // ============ QUESTION 14: AC (11 marks) ============

  {
    number: "14", sub_number: "14.1",
    text: "The municipality of Dinaledin implements a power cutback in the town. As a result of the cutback the rms voltage drops from 220 Vrms to 200 Vrms. Calculate the peak voltage during the cutback.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Vrms = Vmax/√2, so 200 = Vmax/√2 and Vmax = 282,84 V.",
    marking_notes: "Formula Vrms = Vmax/√2; substitution; Vmax = 282,84 V.",
    steps: [
      S(1, "Which formula relates rms and peak voltage?", ["Vrms = Vmax/√2", "Vrms = √2·Vmax", "Vrms = Vmax/2", "Vmax = Vrms/√2"], 0),
      S(1, "Which substitution is correct?", ["200 = √2·Vmax", "200 = Vmax/√2", "200 = Vmax/2", "220 = Vmax/√2"], 1),
      S(1, "What is the peak voltage during the cutback?", ["141,42 V", "311,13 V", "400,00 V", "282,84 V"], 3),
    ],
  },
  {
    number: "14", sub_number: "14.2",
    text: "A certain electrical appliance dissipates 1 200 W when it is operated at 220 Vrms. Calculate the power at which it will operate during the cutback (200 Vrms).",
    marks: 4, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Pave = V²rms/R: 1 200 = 220²/R, so R = 40,33 Ω. At 200 V: Pave = 200²/40,33 = 991,82 W. (The memo also accepts 990,91 W via Irms = 5,45 A scaled to 4,95 A.)",
    marking_notes: "Formula Pave = V²rms/R (or Pave = VrmsIrms); R = 40,33 Ω; substitution at 200 V; answer 991,82 W (accept 990,91 W).",
    steps: [
      S(1, "Which formula gives the resistance of the appliance?", ["R = V²rms/Pave", "R = Pave/V²rms", "R = Pave/Vrms", "R = Pave × Vrms"], 0),
      S(1, "What is the resistance of the appliance?", ["0,18 Ω", "40,33 Ω", "0,025 Ω", "4 033 Ω"], 1),
      S(1, "Which substitution gives the power during the cutback?", ["Pave = 200²/40,33", "Pave = 200/40,33", "Pave = 200 × 40,33", "Pave = 220²/40,33"], 0),
      S(1, "What is the power during the cutback?", ["1 090,91 W", "1 452,00 W", "1 200,00 W", "991,82 W"], 3),
    ],
  },
  {
    number: "14", sub_number: "14.3",
    text: "It is common practice to connect many appliances to a multi-plug. Modern types of multi-plugs have a cut-off switch built in. Using principles in Physics, explain clearly why this cut-off switch is important.",
    marks: 4, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "The potential difference stays constant (appliances are in parallel). As more appliances are connected, the total resistance decreases, so the current drawn through the multi-plug increases. The high current increases the heating effect, which can damage the plug/cause a fire, so the cut-off switch trips.",
    marking_notes: "1 mark each: V constant; total resistance decreases; main current increases; heating effect increases and can cause damage/trips the switch.",
    steps: [
      S(1, "What stays constant as appliances are added to the multi-plug?", [
        "The total current",
        "The total resistance",
        "The potential difference (the mains voltage)",
        "The power drawn",
      ], 2),
      S(1, "As more appliances are connected in parallel, the total resistance…", ["increases", "decreases", "stays the same", "becomes infinite"], 1),
      S(1, "So the current drawn through the multi-plug…", ["decreases", "stays the same", "increases", "alternates"], 2),
      S(1, "Why is the cut-off switch important?", [
        "The high current increases the heating effect, which can damage the plug or start a fire, so the switch cuts it off",
        "The switch increases the potential difference to the appliances",
        "The switch increases the total resistance so appliances use more power",
        "The switch stores the excess energy",
      ], 0),
    ],
  },

  // ============ QUESTION 15: PHOTOELECTRIC EFFECT (11 marks) ============

  {
    number: "15", sub_number: "15.1",
    text: "A fully automatic camera has a built-in light meter. When light enters the light meter, it strikes a metal object that releases electrons and creates a current. What phenomenon is described by the sentence 'it strikes a metal object that releases electrons and creates a current'?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The photo-electric effect.",
    marking_notes: "Accept photo-electric effect.",
    steps: [S(1, "Which phenomenon is described?", ["Electromagnetic induction", "The photo-electric effect", "Thermionic emission", "Diffraction"], 1)],
  },
  {
    number: "15", sub_number: "15.2",
    text: "A metal plate is irradiated with electromagnetic radiation of wavelength 200 nm. The metal has a work function of 7,57 × 10⁻¹⁹ J. Show by calculation that the metal plate will emit photo-electrons when irradiated with radiation of this wavelength.",
    marks: 6, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "c = fλ: 3 × 10⁸ = f(200 × 10⁻⁹), so f = 1,5 × 10¹⁵ Hz. Threshold frequency f0 = W0/h = (7,57 × 10⁻¹⁹)/(6,63 × 10⁻³⁴) = 1,14 × 10¹⁵ Hz. The frequency of the radiation (1,5 × 10¹⁵ Hz) is greater than the threshold frequency (1,14 × 10¹⁵ Hz), so photo-electrons will be emitted. (Memo also accepts comparing the photon energy E = hc/λ = 9,95 × 10⁻¹⁹ J with W0, or Ek = hf − W0 = 2,375 × 10⁻¹⁹ J > 0.)",
    marking_notes: "Any valid method (threshold frequency, photon energy vs work function, or Ek > 0), 6 marks in total.",
    steps: [
      S(1, "Which equation gives the frequency of the radiation?", ["c = fλ", "E = hf", "f = λ/c", "v = fλ with v = 343 m·s⁻¹"], 0),
      S(1, "What is the frequency of the radiation?", ["1,5 × 10⁶ Hz", "6,67 × 10⁻¹⁶ Hz", "1,5 × 10¹⁵ Hz", "5,0 × 10¹⁴ Hz"], 2),
      S(1, "Which formula gives the threshold frequency?", ["f0 = h/W0", "f0 = hW0", "f0 = W0·c", "f0 = W0/h"], 3),
      S(1, "Which substitution is correct?", [
        "(7,57 × 10⁻¹⁹)/(6,63 × 10⁻³⁴)",
        "(6,63 × 10⁻³⁴)/(7,57 × 10⁻¹⁹)",
        "(7,57 × 10⁻¹⁹)(6,63 × 10⁻³⁴)",
        "(7,57 × 10⁻¹⁹)/(3 × 10⁸)",
      ], 0),
      S(1, "What is the threshold frequency?", ["8,76 × 10⁻¹⁶ Hz", "1,14 × 10¹⁵ Hz", "5,02 × 10⁻⁵² Hz", "1,14 × 10¹⁶ Hz"], 1),
      S(1, "What is the correct conclusion?", [
        "f is less than f0, so no photo-electrons are emitted",
        "f equals f0, so photo-electrons are emitted with maximum kinetic energy",
        "f (1,5 × 10¹⁵ Hz) is greater than f0 (1,14 × 10¹⁵ Hz), so photo-electrons are emitted",
        "The intensity is too low, so no photo-electrons are emitted",
      ], 2),
    ],
  },
  {
    number: "15", sub_number: "15.3.1",
    text: "The intensity of the incident radiation (wavelength 200 nm) on the metal plate is increased while maintaining a constant wavelength. State and explain the effect this change has on the energy of the emitted photo-electrons.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The energy of the photo-electrons remains unchanged, because the frequency/wavelength (and hence the energy) of each photon did not change.",
    marking_notes: "1 mark for 'unchanged', 1 mark for the reason (frequency/wavelength of the photons unchanged).",
    steps: [
      S(1, "How does the energy of the emitted photo-electrons change?", ["Increases", "Decreases", "Remains the same", "Becomes zero"], 2),
      S(1, "What is the reason?", [
        "More photons strike the plate, so each electron gains more energy",
        "Intensity is not related to photons at all",
        "The frequency/wavelength (so energy) of each photon did not change",
        "The work function decreases",
      ], 2),
    ],
  },
  {
    number: "15", sub_number: "15.3.2",
    text: "The intensity of the incident radiation (wavelength 200 nm) on the metal plate is increased while maintaining a constant wavelength. State and explain the effect this change has on the number of emitted photo-electrons.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The number of photo-electrons (emitted per second) increases, because a higher intensity means more photons strike the plate per second, each able to release an electron.",
    marking_notes: "1 mark for 'increases', 1 mark for the reason (more photons per second release more electrons).",
    steps: [
      S(1, "How does the number of emitted photo-electrons change?", ["Increases", "Decreases", "Remains the same", "Becomes zero"], 0),
      S(1, "What is the reason?", [
        "Each photon now carries more energy and releases several electrons",
        "The work function of the metal decreases",
        "The wavelength of the radiation decreases",
        "Higher intensity means more photons per second, releasing more electrons",
      ], 3),
    ],
  },
];
