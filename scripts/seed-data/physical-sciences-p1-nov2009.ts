// Real DBE past paper: Physical Sciences (Physics) P1, November 2009, National
// Senior Certificate (English).
// Sources (maimelatct.com mirror): question paper
// physicalsciencep1november2009eng.pdf (19 pages: cover, instructions,
// questions pp 3-16, data sheets pp 17-19) and memorandum
// physicalsciencesp1november2009memoengafr.pdf (16 pages, bilingual
// English/Afrikaans, cover page + general guidelines + answers). Both covers
// were checked: "PHYSICAL SCIENCES: PHYSICS (P1)", "NOVEMBER 2009", MARKS 150,
// TIME 3 hours (question paper) / MARKS 150 (memo). Both PDFs have a text
// layer, so the question and memo text were read directly; diagrams were
// cropped from 220 dpi page renders.
//
// Paper structure: old NCS format. SECTION A (25 marks): Q1 one-word items (5),
// Q2 false items (10), Q3 multiple choice (10). SECTION B (125 marks): Q4-Q14.
// No choice. 150 marks in total, all included here.
//
// This paper is the pre-2014 NCS style, so some content falls outside the nine
// CAPS topics shared by all the Physical Sciences P1 datasets. Nothing new was
// invented; each question is mapped to the closest existing topic key:
//   - FLAG (topic mapping): refraction/dispersion (1.3), double-slit
//     interference (2.3), additive/complementary colours (Q8) and single-slit
//     diffraction (Q9) -> "doppler-effect" (Waves, Sound and Light).
//   - FLAG (topic mapping): lasers (1.5), photons of monochromatic light (2.5)
//     and line emission spectra (3.5) -> "photoelectric-effect" (Matter and
//     Materials / quantum content).
//   - FLAG (topic mapping): capacitors and capacitance (Q10), uniform field
//     between parallel plates (3.4) and the lightning questions (11.4) ->
//     "electrostatics"; current/charge/energy in a lightning strike (11.1-11.3)
//     -> "electric-circuits"; RMS vs DC lamp (2.4) -> "electrodynamics".
//   - FLAG (topic mapping): relative velocity of a bird in wind (2.2) ->
//     "newtons-laws" (nearest kinematics/vectors topic).
//
// Question 4 (bouncing ball), 5 (ramp/work), 6 (Tarzan) and 12.1 (circuit with
// V1/V2) rely on diagrams that were cropped into
// public/question-images/physics-2009-p1/. The earlier partial crops in that
// folder were re-checked visually, trimmed of stray text from neighbouring
// lines, and every one is referenced by at least one question. The 4.3 axes
// (a blank y-t grid for the student to sketch on) and the 10.2 capacitor have
// no diagram of their own and were not cropped.
//
// Grading format: following the standing preference for multiple choice,
// EVERY item here uses `steps` (stepped MCQ), including the definitions
// (6.1, 8.2.1, 11.1, 14.1), the explain/describe items (4.1, 4.4, 8.2.2,
// 10.1, 12.2.1, 12.2.2, 14.2) and the graph sketch (4.3). No `marking_points`
// are used in this file. Distractors trap real Grade 12 errors (wrong formula,
// sign flip, unit/prefix slips such as nm or mm not converted, forgetting
// the 1/2 in kinetic energy, using the wrong mass or distance, etc.) and never
// reproduce another answer the memo accepts.
//
// FLAG for review (4.3): the question asks the student to sketch a position-time
// graph; this cannot be checked automatically, so it is turned into three
// choice steps that mirror the memo's own three-point checklist (shape; zero
// position at 0,4 s; smaller second maximum). The step marks sum to 3.
//
// FLAG for review (7.3.2): the question paper allots (2) marks to 7.3.2 and the
// sub-total [9] for Question 7 only works with 2 (1 + 4 + 2 + 2), but the memo
// prints (1) beside 7.3.2 ("Increases"). The paper's 2 marks are used so that
// Question 7 and the 150 total reconcile; the answer itself is not in doubt.
//
// FLAG for review (9.3): the memo's working gives 6,31 x 10^-7 m (631 nm)
// from sin 5 deg = lambda / 7,25 x 10^-6; exactly, sin 5 deg x 7,25 x 10^-6
// = 6,32 x 10^-7 m (and the tan = sin shortcut gives 6,34 x 10^-7 m). The memo
// value 6,31 x 10^-7 m is transcribed faithfully; no other answer within the
// rounding spread is offered as a distractor.
//
// FLAG for review (14.3): the memo labels the photocell calculation "14.4"
// (there is no 14.4 in the question paper); it is the answer to 14.3 (6 marks).
//
// FLAG for review (5.3.1): the memo offers four alternative methods (energy
// conservation with friction, net work, force along the incline, etc.), all
// giving W = 2 264 J and F = 226,4 N. The work-energy method (memo "Option 4")
// is used for the steps; the alternatives are equally accepted by the memo.
//
// FLAG for review (2.3, 9.4, 2.4, 2.5): the memo accepts several alternative
// corrections / answers for these items (e.g. 2.3 wavelength decreases ->
// bands increase, or frequency increases; 2.4 RMS-voltage version or the
// peak-voltage "dimmer" version; 2.5 white-light version; 9.4 widen the slit
// OR move the screen closer). Only one accepted form is offered as the correct
// option and none of the other accepted forms appear as distractors.
//

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2009-p1";

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
  year: 2009,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "http://maimelatct.com/wp-content/uploads/2013/08/physicalsciencep1november2009eng.pdf" as string | null,
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

const s = (
  marks: number,
  description: string,
  options: string[],
  correctIndex: number,
): MarkingPointStep => ({ marks, description, options, correctIndex });

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The rate of change of momentum.",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "Net (resultant) force. Newton's Second Law: Fnet = Δp/Δt.",
    marking_notes: "Accept net/resultant force only.",
    steps: [
      s(1, "Which term is defined as the rate of change of momentum?", ["Impulse", "Net (resultant) force", "Power", "Kinetic energy"], 1),
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: Motion of an object near the surface of the earth under the influence of the earth's gravitational force alone.",
    marks: 1, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Free fall.",
    marking_notes: "Accept free fall only.",
    steps: [
      s(1, "Which term describes motion near the earth's surface under gravity alone?", ["Terminal velocity", "Weightlessness", "Uniform motion", "Free fall"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: The phenomenon that causes dispersion of white light when it passes through a triangular prism.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Refraction. Different colours are bent by different amounts in the glass.",
    marking_notes: "Accept refraction only.",
    steps: [
      s(1, "Which phenomenon causes white light to disperse in a triangular prism?", ["Diffraction", "Refraction", "Total internal reflection", "Polarisation"], 1),
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: The law which relates the current in a resistor, maintained at constant temperature, to the potential difference across its ends.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "Ohm's law.",
    marking_notes: "Accept Ohm's law only.",
    steps: [
      s(1, "Which law relates current to potential difference for a resistor at constant temperature?", ["Coulomb's law", "Faraday's law", "Joule's law", "Ohm's law"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: The source of an intense narrow beam of coherent monochromatic light.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "Laser.",
    marking_notes: "Accept laser only.",
    steps: [
      s(1, "Which device is a source of an intense narrow beam of coherent monochromatic light?", ["Photocell", "Incandescent lamp", "Laser", "Prism"], 2),
    ],
  },

  // ============ QUESTION 2: FALSE ITEMS (10 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "The following statement is FALSE. Correct it so that it is TRUE: The work done by a non-zero net (resultant) force on an object, moving on a horizontal plane, is equal to the change in the potential energy of the object.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "The work done by a non-zero net force on an object moving on a horizontal plane is equal to the change in the KINETIC energy of the object (work-energy theorem). Potential energy does not change on a horizontal plane.",
    marking_notes: "Correction must replace 'potential' with 'kinetic' energy. Negatives (e.g. 'is NOT equal to...') are not accepted.",
    steps: [
      s(2, "Which is the correct form of the statement?", [
        "The work done by a non-zero net force on an object moving on a horizontal plane is equal to the change in the momentum of the object.",
        "The work done by a non-zero net force on an object moving on a horizontal plane is zero, because the potential energy does not change.",
        "The work done by a non-zero net force on an object moving on a horizontal plane is equal to the change in the kinetic energy of the object.",
        "The work done by a non-zero net force on an object moving on a horizontal plane is equal to the net force multiplied by the time.",
      ], 2),
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "The following statement is FALSE. Correct it so that it is TRUE: When a bird, flying at a velocity of 10 m·s⁻¹ east, encounters a wind blowing at 8 m·s⁻¹ west, its velocity relative to an observer on the ground is 18 m·s⁻¹ west.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Its velocity relative to an observer on the ground is 2 m·s⁻¹ east (take east as positive: 10 + (−8) = +2 m·s⁻¹).",
    marking_notes: "Only the corrected resultant (2 m·s⁻¹ east) is accepted.",
    steps: [
      s(2, "What is the bird's velocity relative to the ground?", [
        "18 m·s⁻¹ east",
        "2 m·s⁻¹ west",
        "2 m·s⁻¹ east",
        "18 m·s⁻¹ west (as given)",
      ], 2),
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "The following statement is FALSE. Correct it so that it is TRUE: The number of bright bands per unit length observed in an interference pattern on a screen, will increase when the wavelength of the waves passing through a double slit increases.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The number of bright bands per unit length ... will DECREASE when the wavelength of the waves increases (the bands spread further apart, as y = λL/d). Equivalently it increases when the wavelength decreases / the frequency increases.",
    marking_notes: "Memo accepts: 'will decrease' (keeping wavelength increases), OR 'when the wavelength decreases', OR 'when the frequency increases'.",
    steps: [
      s(2, "Which is a correct (TRUE) version of the statement?", [
        "The number of bright bands per unit length will decrease when the wavelength of the waves passing through the double slit decreases.",
        "The number of bright bands per unit length will decrease when the wavelength of the waves passing through the double slit increases.",
        "The number of bright bands per unit length will stay the same when the wavelength of the waves passing through the double slit increases.",
        "The number of bright bands per unit length will increase when the frequency of the waves passing through the double slit decreases.",
      ], 1),
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "The following statement is FALSE. Correct it so that it is TRUE: A lamp functioning at peak voltage (AC) will glow with the same brightness when connected to a battery of the same voltage (DC).",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "A lamp functioning at RMS voltage (AC) will glow with the same brightness when connected to a battery of the same voltage (DC). (Alternatively: a lamp at peak AC voltage glows dimmer than when connected to the same DC voltage.)",
    marking_notes: "Accept the RMS-voltage correction or the peak-voltage 'dimmer' correction.",
    steps: [
      s(2, "Which is a correct (TRUE) version of the statement?", [
        "A lamp functioning at RMS voltage (AC) will glow brighter than when connected to a battery of the same voltage (DC).",
        "A lamp functioning at RMS voltage (AC) will glow dimmer than when connected to a battery of the same voltage (DC) because RMS is smaller than peak.",
        "A lamp functioning at peak voltage (AC) will glow brighter than when connected to a battery of the same voltage (DC).",
        "A lamp functioning at RMS voltage (AC) will glow with the same brightness when connected to a battery of the same voltage (DC).",
      ], 3),
    ],
  },
  {
    number: "2", sub_number: "2.5",
    text: "The following statement is FALSE. Correct it so that it is TRUE: Monochromatic light has photons of different energies.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Monochromatic light has photons of the SAME energy (one frequency/wavelength, E = hf). Alternatively: white light has photons of different energies.",
    marking_notes: "Accept 'photons of the same energy' or the white-light version.",
    steps: [
      s(2, "Which is a correct (TRUE) version of the statement?", [
        "Monochromatic light has photons whose energy increases with the intensity of the light.",
        "Monochromatic light has photons of the same speed but different energies.",
        "Monochromatic light has photons of the same energy.",
        "Monochromatic light has no photons, only waves.",
      ], 2),
    ],
  },

  // ============ QUESTION 3: MULTIPLE CHOICE (10 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A person dives from a high platform into a pool along the path shown (A is at the water surface, B is lower down the path above the water, C is the highest point, D is just after leaving the platform). At which ONE of the positions A, B, C or D will the magnitude of his momentum be a maximum?",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "A. Momentum p = mv; speed is greatest where the diver has fallen furthest, just before entering the water at A (all gravitational potential energy has been converted to kinetic energy).",
    marking_notes: "Accept A only.",
    steps: [
      s(2, "At which position is the magnitude of the momentum a maximum?", ["Position A", "Position B", "Position C", "Position D"], 0),
    ],
    image_url: `${IMG}/3.1-diving.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "The sketch graph shows a constant net force of 100 N acting over a period of time on an object (Fnet = 100 N from t = 0 s onward, with marks at t = 1 s and t = 10 s). Which ONE of the following can be used to calculate the impulse (in kg·m·s⁻¹) of the force for the time interval t = 1 s to t = 10 s? (A) 100 × 1 (B) 100 × 10 (C) 100 × 9 (D) 10 × 9",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "C: impulse = FnetΔt = 100 × (10 − 1) = 100 × 9.",
    marking_notes: "Accept C only.",
    steps: [
      s(2, "Which expression gives the impulse for t = 1 s to t = 10 s?", ["100 × 1", "100 × 10", "100 × 9", "10 × 9"], 2),
    ],
    image_url: `${IMG}/3.2-force-time.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "A listener moves at constant velocity towards a stationary source of sound. The frequency of sound heard by the listener is higher than the frequency of the sound emitted by the source, because ... (A) the wavelength observed by the listener becomes shorter. (B) the wavelength observed by the listener becomes longer. (C) more wave fronts reach the listener per second. (D) less wave fronts reach the listener per second.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C: because the listener moves towards the source, more wave fronts reach the listener per second. (The source is stationary so the wavelength in the air does not change.)",
    marking_notes: "Accept C only.",
    steps: [
      s(2, "Why is the frequency heard by the listener higher?", [
        "The wavelength observed by the listener becomes shorter.",
        "The wavelength observed by the listener becomes longer.",
        "More wave fronts reach the listener per second.",
        "Less wave fronts reach the listener per second.",
      ], 2),
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "A potential difference V is applied across two identical, parallel plates a distance y apart. The magnitude of the electric field between the plates is E. Which ONE of the following changes to the arrangement will result in an electric field of magnitude 2E? (A) Potential difference 2V, distance between plates 2y (B) 2V and ½y (C) V and 2y (D) V and ½y",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "D: E = V/d. Keeping V and halving the distance gives E' = V/(½y) = 2E.",
    marking_notes: "Accept D only.",
    steps: [
      s(2, "Which combination of potential difference and plate separation gives a field of 2E?", [
        "2V and 2y",
        "2V and ½y",
        "V and 2y",
        "V and ½y",
      ], 3),
    ],
    image_url: `${IMG}/3.4-plates.png`,
  },
  {
    number: "3", sub_number: "3.5",
    text: "A line emission spectrum is formed when electrons in an atom, that move from ... (A) higher to lower energy levels, emit energy as light. (B) higher to lower energy levels, absorb light energy. (C) lower to higher energy levels, emit energy as light. (D) lower to higher energy levels, absorb light energy.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A: electrons falling from higher to lower energy levels emit photons, giving bright lines (emission spectrum).",
    marking_notes: "Accept A only.",
    steps: [
      s(2, "Which description gives a line EMISSION spectrum?", [
        "Electrons move from higher to lower energy levels and emit energy as light.",
        "Electrons move from higher to lower energy levels and absorb light energy.",
        "Electrons move from lower to higher energy levels and emit energy as light.",
        "Electrons move from lower to higher energy levels and absorb light energy.",
      ], 0),
    ],
  },

  // ============ QUESTION 4: BOUNCING BALL (13 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A ball is released from a certain height. The velocity-time graph shows the motion as it bounces vertically on a concrete floor (downward taken as positive: v rises linearly from 0 to 4 m·s⁻¹ at t = 0,4 s, then jumps to −3 m·s⁻¹ and rises linearly to 0 at t = 0,7 s, 3 m·s⁻¹ at t = 1,0 s, and so on). The interaction time with the floor is negligible. Describe the changes, if any, in velocity and acceleration of the ball from t = 0 s to t = 0,4 s.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "At t = 0 the ball starts from rest (0 m·s⁻¹). From 0 to 0,4 s it falls with constant acceleration (velocity increases uniformly, no change in acceleration). At t = 0,4 s it reaches the floor at 4 m·s⁻¹ downwards and bounces back at −3 m·s⁻¹ (3 m·s⁻¹ upwards).",
    marking_notes: "One mark each: starts from rest; constant acceleration; reaches floor at 4 m·s⁻¹; bounces back at −3 m·s⁻¹.",
    steps: [
      s(1, "What is the velocity of the ball at t = 0 s?", ["4 m·s⁻¹ downwards", "0 m·s⁻¹ (starts from rest)", "3 m·s⁻¹ upwards", "2 m·s⁻¹ downwards"], 1),
      s(1, "How does the acceleration change from t = 0 s to t = 0,4 s?", ["It increases steadily", "It decreases steadily to zero", "It is zero throughout", "It stays constant (constant increase in velocity)"], 3),
      s(1, "What is the velocity just before the ball hits the floor at t = 0,4 s?", ["3 m·s⁻¹ downwards", "4 m·s⁻¹ downwards", "4 m·s⁻¹ upwards", "0 m·s⁻¹"], 1),
      s(1, "What is the velocity just after the first bounce at t = 0,4 s?", ["−4 m·s⁻¹ (4 m·s⁻¹ upwards)", "+3 m·s⁻¹ (3 m·s⁻¹ downwards)", "−3 m·s⁻¹ (3 m·s⁻¹ upwards)", "0 m·s⁻¹"], 2),
    ],
    image_url: `${IMG}/4-velocity-time.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Using the velocity-time graph (v = 0 at t = 0, v = 4 m·s⁻¹ at t = 0,4 s, then the bounce), calculate WITHOUT using the equations of motion the height from which the ball has been dropped initially.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Δy = area of the triangle under the graph from 0 to 0,4 s = ½bh = ½(0,4)(4) = 0,8 m.",
    marking_notes: "Marks: Δy = area of triangle = ½bh (1); ½(0,4) (1); (4) (1); 0,8 m (1).",
    steps: [
      s(1, "Which method gives the displacement without using the equations of motion?", [
        "Area of the triangle under the graph from 0 to 0,4 s: Δy = ½bh",
        "Gradient of the graph from 0 to 0,4 s",
        "Area under the whole graph from 0 to 0,7 s",
        "Δy = v × t with v = 4 m·s⁻¹",
      ], 0),
      s(1, "What is the base b of the triangle?", ["0,7 s", "0,4 s", "1,0 s", "0,2 s"], 1),
      s(1, "What is the height h of the triangle?", ["3 m·s⁻¹", "7 m·s⁻¹", "4 m·s⁻¹", "2 m·s⁻¹"], 2),
      s(1, "What is the height from which the ball was dropped?", ["1,6 m", "0,6 m", "0,4 m", "0,8 m"], 3),
    ],
    image_url: `${IMG}/4-velocity-time.png`,
  },
  {
    number: "4", sub_number: "4.3",
    text: "Using the given velocity versus time graph, sketch the corresponding position-time graph (y in m, measured above the floor, against t from 0 s to 0,7 s). Choose the correct features of the sketch.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A curved (parabolic) graph: starts at 0,8 m at t = 0, falls with increasing steepness to y = 0 at t = 0,4 s, then rises as a curve to a maximum of about 0,45 m at t = 0,7 s (smaller than the 0,8 m of the first drop).",
    marking_notes: "Memo checklist (1 mark each): correct shape; zero position at 0,4 s; maximum position of the 2nd bounce smaller than that of the 1st. Converted to choices because a hand-drawn sketch cannot be graded automatically.",
    steps: [
      s(1, "Which shape is correct?", [
        "Two straight lines: one sloping down to 0,4 s and one sloping up to 0,7 s",
        "A smooth upward-curving (parabolic) fall from the start height to 0 at 0,4 s, then a curved (parabolic) rise",
        "A horizontal line followed by a straight rise",
        "A curve that starts at zero and rises to a single maximum at 0,4 s",
      ], 1),
      s(1, "Where is the position (height above the floor) equal to zero?", ["At t = 0 s", "At t = 0,2 s", "At t = 0,7 s", "At t = 0,4 s"], 3),
      s(1, "How does the maximum height after the bounce (at t = 0,7 s) compare with the initial height?", [
        "It is larger than the initial height",
        "It is equal to the initial height",
        "It is smaller than the initial height (about 0,45 m compared with 0,8 m)",
        "It is zero",
      ], 2),
    ],
    image_url: `${IMG}/4-velocity-time.png`,
  },
  {
    number: "4", sub_number: "4.4",
    text: "Is the first collision of the ball with the floor elastic or inelastic? Give a reason for your answer. (The ball hits the floor at 4 m·s⁻¹ and leaves at 3 m·s⁻¹.)",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "Inelastic: the speed decreases from 4 m·s⁻¹ to 3 m·s⁻¹ (kinetic energy decreases during the collision).",
    marking_notes: "Inelastic (1) + decrease in speed or kinetic energy (1).",
    steps: [
      s(1, "Is the collision elastic or inelastic?", ["Elastic", "Inelastic", "Perfectly elastic", "Neither: momentum is not conserved"], 1),
      s(1, "What is the reason?", [
        "The ball bounces back up, so kinetic energy is conserved.",
        "The speed decreases from 4 m·s⁻¹ to 3 m·s⁻¹, so kinetic energy is lost.",
        "The ball's momentum is the same before and after the collision.",
        "The ball rises back to the same height as before.",
      ], 1),
    ],
    image_url: `${IMG}/4-velocity-time.png`,
  },

  // ============ QUESTION 5: WHEELCHAIR ON A RAMP (12 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "John applies a force F to help his friend in a wheelchair move up a ramp of length 10 m and vertical height 1,5 m. The combined mass of his friend and the wheelchair is 120 kg. The frictional force between the wheels and the ramp is 50 N. The wheelchair moves up the ramp at constant velocity. What is the magnitude of the net force acting on the wheelchair as it moves up the ramp? Give a reason for your answer.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Comprehension",
    model_answer: "0 N. The wheelchair moves at constant velocity, so it has no acceleration and the net force is zero.",
    marking_notes: "0 N (1); no acceleration / constant velocity (1).",
    steps: [
      s(1, "What is the magnitude of the net force?", ["50 N", "226,4 N", "0 N", "1 176 N"], 2),
      s(1, "What is the reason?", [
        "The wheelchair moves up a slope, so the net force equals the component of weight down the slope.",
        "The wheelchair moves at constant velocity, so there is no acceleration.",
        "The applied force is equal to the frictional force.",
        "Friction is always larger than the applied force.",
      ], 1),
    ],
    image_url: `${IMG}/5-ramp.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "John pushes the wheelchair (120 kg combined, 50 N friction) up the 10 m ramp (height 1,5 m) at constant velocity. What is the magnitude of the net work done on the wheelchair on reaching the top of the ramp?",
    marks: 1, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "0 J. Wnet = Fnet·Δx = 0 (or ΔK = 0 because the velocity is constant).",
    marking_notes: "Accept 0 J only.",
    steps: [
      s(1, "What is the net work done on the wheelchair?", ["0 J", "500 J", "1 764 J", "2 264 J"], 0),
    ],
    image_url: `${IMG}/5-ramp.png`,
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "A wheelchair (combined mass 120 kg) is pushed up a ramp of length 10 m and vertical height 1,5 m at constant velocity by force F. Friction is 50 N. Calculate the work done on the wheelchair by force F.",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "W_applied + W_friction = ΔU + ΔK; W_applied + (50)(10)(−1) = (120)(9,8)(1,5) − 0 + 0; W_applied = 2 264 J (2,26 × 10³ J).",
    marking_notes: "Memo Option 4 (work-energy): formula (1); friction work (50)(10)(−1) (1); ΔU = (120)(9,8)(1,5) (1); ΔK = 0 (1); W_applied = 2 264 J (1). Other methods (Options 1-3, or F = f + mg sinα then FΔx) are also accepted.",
    steps: [
      s(1, "Which equation applies?", [
        "W_applied = ΔU + ΔK",
        "W_applied + W_friction = ΔU + ΔK",
        "W_applied − W_friction = ΔK",
        "W_applied + W_friction = ΔK",
      ], 1),
      s(1, "What is the work done by friction (50 N over the 10 m ramp)?", ["+500 J", "−50 J", "−75 J", "−500 J"], 3),
      s(1, "What is the change in gravitational potential energy?", ["11 760 J", "1 764 J", "1 176 J", "176,4 J"], 1),
      s(1, "What is the change in kinetic energy, ΔK?", ["0 J (constant velocity)", "1 764 J", "500 J", "−500 J"], 0),
      s(1, "What is the work done by force F?", ["1 264 J", "11 260 J", "1 764 J", "2 264 J"], 3),
    ],
    image_url: `${IMG}/5-ramp.png`,
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "The work done on the wheelchair by force F up the 10 m ramp is 2 264 J. Calculate the magnitude of force F exerted on the wheelchair by John (F acts parallel to the ramp).",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "W = FΔx cosθ; 2 264 = F(10)(cos 0°) = F(10)(1); F = 226,4 N (2,26 × 10² N). Alternatively F = f + mg sinα = 50 + (120)(9,8)(1,5/10) = 226,4 N.",
    marking_notes: "Formula (1); 2 264 J (1); F(10)(1) (1); F = 226,4 N (1).",
    steps: [
      s(1, "Which formula should be used?", ["W = FΔx cosθ", "W = F/Δx", "W = FΔt", "W = ½mv²"], 0),
      s(1, "What value is substituted for the work W?", ["500 J", "1 764 J", "11 760 J", "2 264 J"], 3),
      s(1, "What are Δx and cosθ?", ["Δx = 1,5 m, cosθ = 1", "Δx = 10 m, cosθ = 1", "Δx = 10 m, cosθ = 0", "Δx = 1,5 m, cosθ = 0"], 1),
      s(1, "What is the magnitude of F?", ["22,64 N", "1 509 N", "226,4 N", "0,0044 N"], 2),
    ],
    image_url: `${IMG}/5-ramp.png`,
  },

  // ============ QUESTION 6: TARZAN AND JANE (14 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "State the principle of conservation of linear momentum in words.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "The total linear momentum in a closed/isolated system is conserved in magnitude and direction.",
    marking_notes: "Two marks for a fully correct statement (no marks for a partial one).",
    steps: [
      s(2, "Which is the correct statement?", [
        "The total kinetic energy in a closed system is conserved in magnitude and direction.",
        "The total linear momentum of an object is always conserved, whatever forces act on it.",
        "The total linear momentum in a closed/isolated system is conserved in magnitude and direction.",
        "The total momentum of a system after a collision is always less than before the collision.",
      ], 2),
    ],
  },
  {
    number: "6", sub_number: "6.2",
    text: "Tarzan, of mass 80 kg, swings from rest on a rope of length 10 m that is horizontal when he starts. At the bottom of his swing he picks up Jane (mass 50 kg, sitting on the ground) in an inelastic collision. They then swing upwards as one unit. Ignore the mass of the rope and air friction. Calculate the combined speed of Tarzan and Jane just after he picks her up.",
    marks: 8, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Tarzan's speed at the bottom: (U + K)top = (U + K)bottom → mgh + 0 = 0 + ½mv²; (80)(9,8)(10) = ½(80)v²; v = 14 m·s⁻¹. Momentum: m1vi1 + m2vi2 = (m1 + m2)vf; (80)(14) + (50)(0) = (80 + 50)vf; vf = 8,62 m·s⁻¹.",
    marking_notes: "Energy part (4): formula; (80)(9,8)(10); ½(80)v²; v = 14 m·s⁻¹. Momentum part (4): formula; (80)(14) + (50)(0); (80 + 50)vf; vf = 8,62 m·s⁻¹.",
    steps: [
      s(1, "Which equation gives Tarzan's speed at the bottom of the swing?", ["mgh = ½mv²", "mgh = mv", "½mgh = mv²", "mgh = mv²"], 0),
      s(1, "What is the left-hand side (potential energy at the top)?", ["(130)(9,8)(10)", "(80)(9,8)", "(80)(9,8)(10)", "(50)(9,8)(10)"], 2),
      s(1, "What is the right-hand side (kinetic energy at the bottom)?", ["½(130)v²", "½(80)v²", "(80)v", "½(80)v"], 1),
      s(1, "What is Tarzan's speed just before picking up Jane?", ["9,9 m·s⁻¹", "196 m·s⁻¹", "14 m·s⁻¹", "98 m·s⁻¹"], 2),
      s(1, "Which equation applies to the pick-up collision?", [
        "½(80)(14)² = ½(130)vf²",
        "(80)(14) = (50)vf",
        "(80)(14) − (50)(0) = (80 − 50)vf",
        "m_T v_T + m_J v_J = (m_T + m_J) vf",
      ], 3),
      s(1, "What is the total momentum before the collision?", ["1 120 kg·m·s⁻¹", "1 820 kg·m·s⁻¹", "700 kg·m·s⁻¹", "1 520 kg·m·s⁻¹"], 0),
      s(1, "What is the total mass moving after the collision?", ["(80 + 50) kg = 130 kg", "80 kg", "50 kg", "(80 − 50) kg = 30 kg"], 0),
      s(1, "What is their combined speed just after the pick-up?", ["14 m·s⁻¹", "22,4 m·s⁻¹", "37,33 m·s⁻¹", "8,62 m·s⁻¹"], 3),
    ],
    image_url: `${IMG}/6-tarzan.png`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "Will Tarzan and Jane reach a height of 10 m on their upward swing (after the inelastic pick-up)? Give a reason for your answer.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Evaluation",
    model_answer: "No. The collision is inelastic, so the total kinetic energy after the collision is less than before it (they leave the collision at 8,62 m·s⁻¹ and only rise to about 3,8 m).",
    marking_notes: "No (1); collision is inelastic / total kinetic energy after the collision is less than before (1).",
    steps: [
      s(1, "Will they reach a height of 10 m?", ["Yes", "No", "Yes, because momentum is conserved", "Only if Jane lets go"], 1),
      s(1, "What is the reason?", [
        "Momentum is lost, but kinetic energy is conserved in the collision.",
        "The rope is longer than 10 m.",
        "The collision is inelastic, so the kinetic energy after the collision is less than before.",
        "Gravity does negative work on Tarzan on the way down.",
      ], 2),
    ],
    image_url: `${IMG}/6-tarzan.png`,
  },
  {
    number: "6", sub_number: "6.4",
    text: "If Jane is holding on to a bag of bananas at the time when Tarzan picks her up, how will their combined speed compare to that obtained in QUESTION 6.2?",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Smaller than. The total mass moving together is larger (80 + 50 + bag) while the total momentum before the collision is unchanged, so vf = Σp/(m total) is smaller.",
    marking_notes: "Accept 'smaller than' only.",
    steps: [
      s(2, "How does the combined speed compare with that in 6.2?", ["Greater than", "Equal to", "Smaller than", "Zero"], 2),
    ],
    image_url: `${IMG}/6-tarzan.png`,
  },

  // ============ QUESTION 7: POLICE SIREN (9 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "The siren of a police car produces a sound of frequency 420 Hz. A man sitting next to the road notices that the pitch of the sound changes as the car moves towards and then away from him. Write down the name of this phenomenon.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Doppler effect.",
    marking_notes: "Accept Doppler effect only.",
    steps: [
      s(1, "What is the name of the phenomenon?", ["Beats", "Resonance", "Diffraction", "Doppler effect"], 3),
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "The siren of a police car produces a sound of frequency 420 Hz. Assume that the speed of sound in air is 340 m·s⁻¹. Calculate the frequency of the sound of the siren observed by the man, when the car is moving towards him at a speed of 16 m·s⁻¹.",
    marks: 4, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "fL = [v/(v − vs)] fs = [340/(340 − 16)](420) = 440,74 Hz.",
    marking_notes: "Formula (1); substitution (2); answer 440,74 Hz (1).",
    steps: [
      s(1, "Which formula applies (source moving towards a stationary listener)?", [
        "fL = [(v + vL)/(v − vs)] fs",
        "fL = [v/(v − vs)] fs",
        "fL = [v/(v + vs)] fs",
        "fL = [(v − vL)/(v + vs)] fs",
      ], 1),
      s(2, "Which is the correct substitution?", [
        "fL = [340/(340 + 16)](420)",
        "fL = [(340 + 16)/340](420)",
        "fL = [340/(340 − 16)](16)",
        "fL = [340/(340 − 16)](420)",
      ], 3),
      s(1, "What is the frequency heard by the man?", ["401,12 Hz", "439,76 Hz", "440,74 Hz", "19,76 Hz"], 2),
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "The police car (siren 420 Hz) moves away from the man at constant velocity. How will the observed frequency compare with the original frequency of the siren?",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Smaller than: a source moving away produces a lower observed frequency.",
    marking_notes: "Accept 'smaller than' only.",
    steps: [
      s(2, "How does the observed frequency compare with 420 Hz?", ["Greater than", "Smaller than", "Equal to", "It alternates between greater and smaller"], 1),
    ],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "The police car moves away from the man, then slows down and finally comes to rest. How will the observed frequency change as the car slows down whilst moving away?",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Increases: as the car slows down the speed of the source decreases, so the observed frequency rises towards the original 420 Hz.",
    marking_notes: "Accept 'increases' only. (Paper allots 2 marks; memo prints 1: see header FLAG.)",
    steps: [
      s(2, "How does the observed frequency change as the car slows down?", ["Decreases", "Increases", "Remains the same", "Falls to zero"], 1),
    ],
  },

  // ============ QUESTION 8: COLOUR OF LIGHT (10 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "A learner shines light from a red lamp and a green lamp onto a wooden star. Coloured shadows of the star, P and Q, appear on a white screen behind the star (P is the shadow on the red lamp's side, Q on the green lamp's side). What colour is observed for each of the coloured shadows P and Q?",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "P: red; Q: green. Each shadow is lit by only one lamp, the light from the other being blocked by the star.",
    marking_notes: "P red (1); Q green (1).",
    steps: [
      s(1, "What colour is shadow P?", ["Green", "Yellow", "Red", "Black"], 2),
      s(1, "What colour is shadow Q?", ["Red", "Green", "Yellow", "Black"], 1),
    ],
    image_url: `${IMG}/8-star-shadows.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "A red lamp and a green lamp shine on a wooden star in front of a white screen. What colour is observed on the rest of the screen (outside the shadows)?",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Yellow (red + green).",
    marking_notes: "Accept yellow only.",
    steps: [
      s(1, "What colour is the rest of the screen?", ["White", "Cyan", "Magenta", "Yellow"], 3),
    ],
    image_url: `${IMG}/8-star-shadows.png`,
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "The learner adds a third lamp to the arrangement (red and green lamps, wooden star, white screen). He observes a third coloured shadow right behind the wooden star. The background on the screen appears white. What is the colour of the third lamp? Give a reason for your answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Blue. Red + green + blue light together give white light, so with the blue lamp the background is white.",
    marking_notes: "Blue (1); red + blue + green = white light (1).",
    steps: [
      s(1, "What is the colour of the third lamp?", ["Cyan", "Magenta", "Blue", "Yellow"], 2),
      s(1, "What is the reason?", [
        "Blue is the complementary colour of red.",
        "Red, green and blue light combine to give white light.",
        "Blue light is absorbed by the yellow background and leaves white.",
        "The three lamps together produce black.",
      ], 1),
    ],
    image_url: `${IMG}/8-star-shadows.png`,
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "With repeated washing, white fabrics become yellowish. A manufacturer of a certain detergent adds blue dye to the detergent and claims that it makes your fabric whiter by removing these yellow stains. Define the term complementary colours.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Any two colours that together will give white light.",
    marking_notes: "Two marks for a fully correct definition.",
    steps: [
      s(2, "Which is the correct definition of complementary colours?", [
        "Any two colours that together give black.",
        "Any two primary colours of light.",
        "Any two colours that together will give white light.",
        "Any two colours that lie next to each other in the spectrum.",
      ], 2),
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "A detergent manufacturer adds blue dye to the detergent and claims that it makes fabric whiter by removing the yellow stains. It is possible that the dye does not really remove the yellow stains, although it makes the fabric end up looking whiter. Explain how this may be the case.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "The blue dye reflects blue light, and the yellow stains reflect yellow light (red + green). Blue + yellow = white light, so the garment appears whiter even though the stains are still present.",
    marking_notes: "Reflected blue light from the dye (1) + reflected yellow light from the stains (1) = white light so the garment looks whiter (1).",
    steps: [
      s(1, "What does the blue dye do to the light falling on the fabric?", ["It absorbs blue light", "It reflects blue light", "It reflects yellow light", "It transmits all colours equally"], 1),
      s(1, "What do the remaining yellow stains do?", ["They reflect yellow light (red + green)", "They absorb yellow light and reflect blue", "They emit extra white light", "They absorb all visible light"], 0),
      s(1, "What is the overall effect?", [
        "Blue light + yellow light combine to give white light, so the garment looks whiter.",
        "The blue dye chemically removes the yellow colour.",
        "Blue and yellow combine to give green light.",
        "The dye makes the fabric absorb more light so it looks brighter.",
      ], 0),
    ],
  },

  // ============ QUESTION 9: SINGLE-SLIT DIFFRACTION (8 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A learner uses a single slit to determine the wavelength of a red laser light. He shines the laser through a single slit of width 7,25 × 10⁻⁶ m onto a screen 0,4 m away. Name the type of pattern observed on the screen.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Diffraction (pattern). (Memo also accepts interference.)",
    marking_notes: "Accept diffraction pattern (or interference).",
    steps: [
      s(1, "What type of pattern is observed?", ["Dispersion pattern", "Refraction pattern", "Polarisation pattern", "Diffraction pattern"], 3),
    ],
    image_url: `${IMG}/9-diffraction.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "A learner shines a red laser through a single slit onto a screen. State ONE safety precaution that the learner must take when using this apparatus.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "Do not look directly into the laser (or do not shine the laser in the direction of other people).",
    marking_notes: "Accept: do not look directly into the laser; do not shine the laser towards other people.",
    steps: [
      s(1, "Which is a correct safety precaution?", [
        "Look directly into the laser to check that it is switched on.",
        "Do not look directly into the laser.",
        "Use a more powerful laser to make the pattern clearer.",
        "Shine the laser at the audience to show the beam.",
      ], 1),
    ],
    image_url: `${IMG}/9-diffraction.png`,
  },
  {
    number: "9", sub_number: "9.3",
    text: "A red laser is shone through a single slit of width 7,25 × 10⁻⁶ m. The screen is 0,4 m from the slit. The learner measures the distance between the midpoint of the central bright band and the first dark band as 3,5 cm. Calculate the wavelength of the red laser light.",
    marks: 5, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "tanθ = 0,035/0,4 → θ ≈ 5°; mλ = a sinθ; sin 5° = (1)λ/(7,25 × 10⁻⁶); λ = 6,31 × 10⁻⁷ m (631 nm).",
    marking_notes: "tanθ = 0,035/0,4 (1); formula mλ = a sinθ (1); substitution (2); λ = 6,31 × 10⁻⁷ m (1). See header FLAG: memo gives 6,31 × 10⁻⁷ m.",
    steps: [
      s(1, "How is the angle θ to the first dark band found (3,5 cm = 0,035 m)?", [
        "tanθ = 0,4/0,035",
        "tanθ = 0,35/0,4",
        "tanθ = 0,035/0,4",
        "tanθ = 0,035/(7,25 × 10⁻⁶)",
      ], 2),
      s(1, "Which formula gives the wavelength?", ["mλ = a sinθ", "mλ = a cosθ", "λ = a tanθ/m²", "λ = m sinθ/a"], 0),
      s(2, "Which is the correct substitution (first dark band, m = 1)?", [
        "sin 5° = (2)λ/(7,25 × 10⁻⁶)",
        "sin 5° = (1)λ/0,4",
        "cos 5° = (1)λ/(7,25 × 10⁻⁶)",
        "sin 5° = (1)λ/(7,25 × 10⁻⁶)",
      ], 3),
      s(1, "What is the wavelength?", ["1,26 × 10⁻⁶ m", "6,31 × 10⁻⁷ m", "6,31 × 10⁻⁵ m", "7,20 × 10⁻⁶ m"], 1),
    ],
    image_url: `${IMG}/9-diffraction.png`,
  },
  {
    number: "9", sub_number: "9.4",
    text: "The learner wants to decrease the distance between the midpoint of the central bright band and the first dark band on the screen. Assume that the same laser is used. What change can the learner make to the arrangement to achieve this?",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Increase the slit width (or move the screen closer to the slit).",
    marking_notes: "Accept increasing the slit width OR decreasing the slit-to-screen distance.",
    steps: [
      s(1, "Which change achieves this?", [
        "Decrease the slit width.",
        "Move the screen further from the slit.",
        "Increase the slit width.",
        "Switch to a laser of longer wavelength.",
      ], 2),
    ],
    image_url: `${IMG}/9-diffraction.png`,
  },

  // ============ QUESTION 10: CAPACITORS (11 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "The ability of capacitors to store charge makes them essential components in electrical appliances. Briefly explain why it can be dangerous to touch a charged capacitor.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "It discharges very fast when touched and can cause an electric shock (that can be fatal).",
    marking_notes: "Discharges very fast (1); can cause a (fatal) electric shock (1).",
    steps: [
      s(1, "What happens when a charged capacitor is touched?", [
        "It discharges very quickly through the person's body.",
        "It slowly absorbs charge from the person.",
        "It creates a strong magnetic field in the body.",
        "It stores even more charge from the person.",
      ], 0),
      s(1, "What is the dangerous result?", [
        "The capacitor overheats and melts.",
        "The appliance short-circuits the mains supply.",
        "An (even fatal) electric shock.",
        "The person becomes permanently charged.",
      ], 2),
    ],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "A certain parallel plate capacitor consists of two identical aluminium plates, each of area 2 × 10⁻⁴ m². The plates are separated by a distance of 0,03 mm, with air occupying the space between the plates. Calculate the capacitance of the capacitor.",
    marks: 4, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C = ε0A/d = (8,85 × 10⁻¹²)(2 × 10⁻⁴)/(0,03 × 10⁻³) = 5,9 × 10⁻¹¹ F.",
    marking_notes: "Formula (1); substitution (2); C = 5,9 × 10⁻¹¹ F (1).",
    steps: [
      s(1, "Which formula gives the capacitance of a parallel plate capacitor?", ["C = ε0 d/A", "C = ε0 A/d", "C = ε0 A d", "C = Q/(ε0 A)"], 1),
      s(2, "Which is the correct substitution (note 0,03 mm)?", [
        "C = (8,85 × 10⁻¹²)(2 × 10⁻⁴)/(0,03)",
        "C = (8,85 × 10⁻¹²)(2 × 10⁻⁴)/(0,03 × 10⁻⁶)",
        "C = (8,85 × 10⁻¹²)(0,03 × 10⁻³)/(2 × 10⁻⁴)",
        "C = (8,85 × 10⁻¹²)(2 × 10⁻⁴)/(0,03 × 10⁻³)",
      ], 3),
      s(1, "What is the capacitance?", ["5,9 × 10⁻¹⁴ F", "5,9 × 10⁻¹¹ F", "1,33 × 10⁻¹² F", "5,9 × 10⁻⁸ F"], 1),
    ],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "The parallel plate capacitor of capacitance 5,9 × 10⁻¹¹ F is connected to a 6 V battery. Calculate the charge stored on the plates of the capacitor.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "C = Q/V; Q = (5,9 × 10⁻¹¹)(6) = 3,54 × 10⁻¹⁰ C.",
    marking_notes: "Formula (1); substitution (1); Q = 3,54 × 10⁻¹⁰ C (1).",
    steps: [
      s(1, "Which formula gives the charge?", ["Q = C/V", "Q = V/C", "Q = CV", "Q = ½CV²"], 2),
      s(1, "Which is the correct substitution?", [
        "Q = (5,9 × 10⁻¹¹)/6",
        "Q = (5,9 × 10⁻¹¹)(6)",
        "Q = (5,9 × 10⁻¹¹)(6)²",
        "Q = 6/(5,9 × 10⁻¹¹)",
      ], 1),
      s(1, "What is the charge stored?", ["9,83 × 10⁻¹² C", "2,12 × 10⁻⁹ C", "3,54 × 10⁻¹⁰ C", "1,02 × 10¹¹ C"], 2),
    ],
  },
  {
    number: "10", sub_number: "10.3.1",
    text: "How will the capacitance of the capacitor in QUESTION 10.2 change if paper is used to fill the gap between the plates instead of air?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Increases (paper has a larger permittivity than air).",
    marking_notes: "Accept 'increases' only.",
    steps: [
      s(1, "How does the capacitance change?", ["Decreases", "Remains the same", "Becomes zero", "Increases"], 3),
    ],
  },
  {
    number: "10", sub_number: "10.3.2",
    text: "How will the capacitance of the capacitor in QUESTION 10.2 change if the distance between the plates is increased?",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Decreases (C = ε0A/d is inversely proportional to d).",
    marking_notes: "Accept 'decreases' only.",
    steps: [
      s(1, "How does the capacitance change?", ["Increases", "Decreases", "Remains the same", "Becomes infinite"], 1),
    ],
  },

  // ============ QUESTION 11: LIGHTNING (10 marks) ============

  {
    number: "11", sub_number: "11.1",
    text: "Deaths associated with lightning in South Africa are about four times higher than the global average. A typical thundercloud may be at a potential of 1,2 × 10⁸ V and the thunder strike may result in a charge transfer of 20 C. Define electric current.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The amount of charge that passes a cross-section of a conductor per unit time (the rate of flow of charge).",
    marking_notes: "Two marks for a fully correct definition.",
    steps: [
      s(2, "Which is the correct definition of electric current?", [
        "The amount of energy transferred per unit charge.",
        "The amount of charge that passes a cross-section of a conductor per unit time.",
        "The amount of charge per unit area of the conductor.",
        "The rate at which energy is converted per unit time.",
      ], 1),
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "A thundercloud at a potential of 1,2 × 10⁸ V transfers a charge of 20 C in a lightning strike. Calculate the current generated during the strike if the charge transfer takes place in 1,1 × 10⁻⁴ s.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "I = Δq/Δt = 20/(1,1 × 10⁻⁴) = 1,82 × 10⁵ A.",
    marking_notes: "Formula (1); substitution (1); I = 1,82 × 10⁵ A (1).",
    steps: [
      s(1, "Which formula gives the current?", ["I = Δq × Δt", "I = Δq/Δt", "I = Δt/Δq", "I = V/Δt"], 1),
      s(1, "Which is the correct substitution?", [
        "I = (20)(1,1 × 10⁻⁴)",
        "I = (1,1 × 10⁻⁴)/20",
        "I = (1,2 × 10⁸)/(1,1 × 10⁻⁴)",
        "I = 20/(1,1 × 10⁻⁴)",
      ], 3),
      s(1, "What is the current?", ["2,2 × 10⁻³ A", "5,5 × 10⁻⁶ A", "1,82 × 10³ A", "1,82 × 10⁵ A"], 3),
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "A thundercloud at a potential of 1,2 × 10⁸ V transfers a charge of 20 C in a lightning strike. Calculate the amount of energy transferred during the strike.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "W = VQ = (1,2 × 10⁸)(20) = 2,4 × 10⁹ J.",
    marking_notes: "Formula (1); substitution (1); W = 2,4 × 10⁹ J (1).",
    steps: [
      s(1, "Which formula gives the energy transferred?", ["W = V/Q", "W = ½QV", "W = VQ", "W = Q/V"], 2),
      s(1, "Which is the correct substitution?", [
        "W = (1,2 × 10⁸)/20",
        "W = ½(1,2 × 10⁸)(20)",
        "W = (1,2 × 10⁸)(1,1 × 10⁻⁴)",
        "W = (1,2 × 10⁸)(20)",
      ], 3),
      s(1, "What is the energy transferred?", ["6 × 10⁶ J", "1,2 × 10⁹ J", "2,4 × 10⁹ J", "2,4 × 10⁸ J"], 2),
    ],
  },
  {
    number: "11", sub_number: "11.4.1",
    text: "If you are far from a shelter during lightning, crouch with your feet together. Give a reason why you must crouch.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Lightning tends to strike the highest points; crouching makes you lower.",
    marking_notes: "Accept: lightning strikes the highest points (so reduce your height).",
    steps: [
      s(1, "Why must you crouch?", [
        "Crouching insulates you from the ground.",
        "Lightning tends to strike the highest points, so crouching lowers your height.",
        "Crouching increases your resistance to current.",
        "Crouching raises your body to the potential of the cloud.",
      ], 1),
    ],
  },
  {
    number: "11", sub_number: "11.4.2",
    text: "If you are far from a shelter during lightning, crouch with your feet together. Give a reason why you must keep your feet together.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "To prevent a potential difference from building up between your feet.",
    marking_notes: "Accept: to prevent/avoid a potential difference between the feet.",
    steps: [
      s(1, "Why must you keep your feet together?", [
        "To keep your body balanced while crouching.",
        "To increase the contact area so more current flows through the ground.",
        "To prevent a potential difference from building up between your feet.",
        "To make the current flow through each leg separately.",
      ], 2),
    ],
  },

  // ============ QUESTION 12: ELECTRIC CIRCUITS (18 marks) ============

  {
    number: "12", sub_number: "12.1.1",
    text: "The battery in the circuit has an EMF of 12 V and an unknown internal resistance r. Voltmeter V1 is connected across the battery and voltmeter V2 is connected across the switch S. The circuit has a 12 Ω and a 6 Ω resistor in parallel, in series with the ammeter, the switch S and a 2 Ω resistor. Write down the respective readings on voltmeters V1 and V2 when switch S is open.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "V1 = 12 V; V2 = 12 V. With S open no current flows, so there are no lost volts and V1 = emf; V2 spans the open switch, which is across the full battery emf.",
    marking_notes: "V1 = 12 V (1); V2 = 12 V (1).",
    steps: [
      s(1, "What is the reading on V1 with S open?", ["0 V", "9 V", "6 V", "12 V"], 3),
      s(1, "What is the reading on V2 with S open?", ["12 V", "0 V", "9 V", "2 V"], 0),
    ],
    image_url: `${IMG}/12.1-circuit.png`,
  },
  {
    number: "12", sub_number: "12.1.2",
    text: "In the circuit (battery emf 12 V, internal resistance r, 12 Ω and 6 Ω in parallel, ammeter, switch S with voltmeter V2 across it, and a 2 Ω resistor), switch S is now closed. The reading on voltmeter V1 changes to 9 V. What will the new reading on V2 be?",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "0 V. V2 is connected across the closed switch, which has no resistance.",
    marking_notes: "Accept 0 V only.",
    steps: [
      s(1, "What is the new reading on V2?", ["9 V", "12 V", "0 V", "3 V"], 2),
    ],
    image_url: `${IMG}/12.1-circuit.png`,
  },
  {
    number: "12", sub_number: "12.1.3",
    text: "With switch S closed in the circuit (12 Ω and 6 Ω resistors in parallel, in series with a 2 Ω resistor; negligible resistance of ammeter and wires), calculate the total external resistance of the circuit.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "1/Rp = 1/R1 + 1/R2 = 1/12 + 1/6, so Rp = 4 Ω. R(total) = 4 + 2 = 6 Ω.",
    marking_notes: "Formula for parallel (1); 1/12 + 1/6 → Rp = 4 Ω (1); R = 4 + 2 (1); 6 Ω (1).",
    steps: [
      s(1, "Which formula combines the 12 Ω and 6 Ω resistors?", ["Rp = R1 + R2", "1/Rp = 1/R1 + 1/R2", "Rp = R1 × R2", "Rp = (R1 + R2)/2"], 1),
      s(1, "What is the parallel resistance of the 12 Ω and 6 Ω resistors?", ["18 Ω", "9 Ω", "4 Ω", "0,25 Ω"], 2),
      s(1, "How is the total external resistance obtained?", [
        "R(total) = 1/Rp + 2 = 0,25 + 2",
        "R(total) = Rp + 2 = 4 + 2",
        "R(total) = Rp × 2 = 4 × 2",
        "R(total) = Rp + 2 + r",
      ], 1),
      s(1, "What is the total external resistance?", ["8 Ω", "20 Ω", "18 Ω", "6 Ω"], 3),
    ],
    image_url: `${IMG}/12.1-circuit.png`,
  },
  {
    number: "12", sub_number: "12.1.4",
    text: "In the circuit (EMF 12 V, internal resistance r), with switch S closed the voltmeter V1 reads 9 V and the total external resistance is 6 Ω. Calculate the internal resistance r of the battery.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "R = V/I: 6 = 9/I, so I = 1,5 A. EMF = IR + Ir: 12 = 9 + (1,5)r, so r = 2 Ω.",
    marking_notes: "R = V/I (1); 6 = 9/I → I = 1,5 A (1); EMF = IR + Ir (1); 12 = 9 + 1,5r (1); r = 2 Ω (1).",
    steps: [
      s(1, "Which formula gives the current in the circuit?", ["I = VR", "I = R/V", "R = V/I", "I = V/(R + r)"], 2),
      s(1, "What is the current?", ["0,67 A", "1,5 A", "2 A", "54 A"], 1),
      s(1, "Which formula for the emf applies?", ["EMF = IR − Ir", "EMF = IR + Ir", "EMF = IR", "EMF = I²R + Ir"], 1),
      s(1, "Which is the correct substitution?", [
        "12 = 9 + (1,5)r",
        "12 = 6 + (1,5)r",
        "12 = 9 − (1,5)r",
        "9 = 12 + (1,5)r",
      ], 0),
      s(1, "What is the internal resistance?", ["6 Ω", "1 Ω", "3 Ω", "2 Ω"], 3),
    ],
    image_url: `${IMG}/12.1-circuit.png`,
  },
  {
    number: "12", sub_number: "12.2.1",
    text: "Two light bulbs, X (marked 40 W) and Y (marked 60 W), are connected in parallel to a battery with negligible internal resistance. Bulb Y glows brighter than bulb X. How does the resistance of bulb Y compare to that of bulb X? Use an appropriate equation (or relationship) to explain your answer.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "In parallel VY = VX (V is constant). P = V²/R, so with the same V, PY > PX means RY < RX. The resistance of Y is smaller than that of X.",
    marking_notes: "VY = VX (1); P = V²/R with PY > PX (1); RY < RX (1).",
    steps: [
      s(1, "Which quantity is the same for bulbs in parallel?", ["Current", "Voltage", "Power", "Resistance"], 1),
      s(1, "Which relationship should be used to compare the resistances here?", ["P = I²R", "P = VR", "P = V²/R", "P = V/R"], 2),
      s(1, "How does the resistance of Y compare to that of X?", ["Greater than X", "Equal to X", "Smaller than X", "It cannot be determined"], 2),
    ],
    image_url: `${IMG}/12.2-parallel-bulbs.png`,
  },
  {
    number: "12", sub_number: "12.2.2",
    text: "A learner connects bulb X (40 W) and bulb Y (60 W) in series to the same power supply. He observes that bulb X now glows brighter than bulb Y. Use an appropriate equation (or relationship) to explain why bulb X now glows brighter than bulb Y. (RY < RX from the parallel connection.)",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "In series the current is the same: IY = IX. P = I²R, so P ∝ R at constant current. Since RX > RY, PX > PY, so X is brighter.",
    marking_notes: "IY = IX (1); P = I²R (1); P ∝ R / PY < PX (1).",
    steps: [
      s(1, "Which quantity is the same for bulbs in series?", ["Voltage across each bulb", "Power", "Current", "Resistance"], 2),
      s(1, "Which relationship should be used?", ["P = V²/R", "P = I²R", "P = V/I²", "P = IR²"], 1),
      s(1, "Why does X glow brighter?", [
        "Its resistance is larger, so at the same current its power (I²R) is larger.",
        "Its resistance is smaller, so at the same current its power (I²R) is larger.",
        "Its voltage is smaller, so its power is larger.",
        "Its current is larger than that in Y.",
      ], 0),
    ],
    image_url: `${IMG}/12.2-series-bulbs.png`,
  },

  // ============ QUESTION 13: DC MOTOR (9 marks) ============

  {
    number: "13", sub_number: "13.1",
    text: "The diagram represents a simplified sketch of an electric DC motor (magnet N and S, coil, pivot, carbon brushes, commutator). Name the component which ensures continuous rotation of the coil of this electric motor.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "(Split-ring) commutator.",
    marking_notes: "Accept commutator / split-ring commutator.",
    steps: [
      s(1, "Which component ensures continuous rotation of the coil?", ["Carbon brushes", "Pivot", "Slip rings", "Split-ring commutator"], 3),
    ],
    image_url: `${IMG}/13-dc-motor.png`,
  },
  {
    number: "13", sub_number: "13.2",
    text: "In the diagram of the electric DC motor (magnet N and S, coil, pivot, carbon brushes, commutator), name the part of the motor which becomes an electromagnet when the current flows in the motor.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "The coil.",
    marking_notes: "Accept coil only.",
    steps: [
      s(1, "Which part becomes an electromagnet when current flows?", ["Permanent magnet", "Coil", "Commutator", "Carbon brushes"], 1),
    ],
    image_url: `${IMG}/13-dc-motor.png`,
  },
  {
    number: "13", sub_number: "13.3",
    text: "When the electric motor is connected to a 12 V DC supply, it draws a current of 1,2 A. The motor is now used to lift an object of mass 1,6 kg through a vertical height of 0,8 m at constant speed in 3 s. Is all the electrical energy converted to the gain in potential energy of the object? Support your answer with relevant calculations.",
    marks: 7, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "No. W(electrical) = VIΔt = (12)(1,2)(3) = 43,2 J. Ep = mgΔy = (1,6)(9,8)(0,8) = 12,544 J. E(electrical) > E(mechanical), so only part of the electrical energy becomes potential energy (the rest is lost as heat, friction, etc.).",
    marking_notes: "No (1); W = VIΔt (1); (12)(1,2)(3) (1); 43,2 J (1); Ep = mgΔy (1); (1,6)(9,8)(0,8) (1); 12,544 J (1).",
    steps: [
      s(1, "Is all the electrical energy converted to gain in potential energy?", [
        "Yes, because the object is lifted at constant speed.",
        "No, the electrical energy is greater than the potential energy gained.",
        "Yes, because energy is always conserved in the object alone.",
        "No, the potential energy gained is greater than the electrical energy.",
      ], 1),
      s(1, "Which formula gives the electrical energy supplied?", ["W = VI/Δt", "W = V/(IΔt)", "W = VIΔt", "W = ½VI"], 2),
      s(1, "Which is the correct substitution?", ["(12)(1,2)", "(12)(1,2)(3)", "(12)(1,2)/3", "(12)(1,2)²(3)"], 1),
      s(1, "What is the electrical energy supplied?", ["14,4 J", "4,8 J", "51,84 J", "43,2 J"], 3),
      s(1, "Which formula gives the gain in potential energy?", ["Ep = mg/Δy", "Ep = ½mv²", "Ep = mgΔy", "Ep = mΔy"], 2),
      s(1, "Which is the correct substitution?", ["(1,6)(9,8)(3)", "(1,6)(9,8)(0,8)", "(1,6)(9,8)", "(1,6)(0,8)"], 1),
      s(1, "What is the gain in potential energy?", ["15,68 J", "47,04 J", "12,54 J", "4,18 J"], 2),
    ],
    image_url: `${IMG}/13-dc-motor.png`,
  },

  // ============ QUESTION 14: PHOTOCELL (11 marks) ============

  {
    number: "14", sub_number: "14.1",
    text: "The photo-electric effect has many practical applications. A photocell, such as the one used in burglar alarm systems, is one such application. Define the term threshold frequency.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The minimum frequency of light needed to emit electrons from a certain metal.",
    marking_notes: "Two marks for a fully correct definition.",
    steps: [
      s(2, "Which is the correct definition of threshold frequency?", [
        "The maximum frequency of light that can be absorbed by a metal.",
        "The minimum frequency of light needed to emit electrons from a certain metal.",
        "The frequency at which the emitted electrons have maximum kinetic energy.",
        "The minimum intensity of light needed to emit electrons from a metal.",
      ], 1),
    ],
    image_url: `${IMG}/14-photocell.png`,
  },
  {
    number: "14", sub_number: "14.2",
    text: "Ultraviolet light of wavelength 100 nm is used to illuminate a photocell. How will an increase in intensity of the ultraviolet light influence the ammeter reading? Explain your answer.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Increases. A higher intensity means more photons strike the metal plate per second, so more photo-electrons are emitted per second.",
    marking_notes: "Increases (1); more photons strike the plate per second (1); more photo-electrons emitted per second (1).",
    steps: [
      s(1, "How does the ammeter reading change?", ["Decreases", "Remains the same", "Becomes zero", "Increases"], 3),
      s(1, "What is the effect of higher intensity on the light?", [
        "Each photon has more energy.",
        "More photons strike the metal plate per second.",
        "The photons have a higher frequency.",
        "The photons travel faster.",
      ], 1),
      s(1, "What results from this?", [
        "The emitted electrons have greater kinetic energy.",
        "The threshold frequency of the metal increases.",
        "More photo-electrons are emitted per second.",
        "The work function of the metal decreases.",
      ], 2),
    ],
    image_url: `${IMG}/14-photocell.png`,
  },
  {
    number: "14", sub_number: "14.3",
    text: "Ultraviolet light of wavelength 100 nm is used to illuminate a photocell. The work function of the metal used as a cathode is 8,7 × 10⁻¹⁹ J. Calculate the velocity at which the electrons are emitted.",
    marks: 6, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "hf = W0 + ½mv² with f = c/λ: (6,63 × 10⁻³⁴)(3 × 10⁸)/(100 × 10⁻⁹) = 8,7 × 10⁻¹⁹ + ½(9,11 × 10⁻³¹)v²; v = 1,57 × 10⁶ m·s⁻¹.",
    marking_notes: "Formula hf = W0 + Ek (1); hc/λ substitution (1); photon energy ≈ 1,99 × 10⁻¹⁸ J (1); Ek = 1,12 × 10⁻¹⁸ J (1); ½(9,11 × 10⁻³¹)v² (1); v = 1,57 × 10⁶ m·s⁻¹ (1). The memo labels this item 14.4 (see header FLAG).",
    steps: [
      s(1, "Which equation applies?", ["hf = W0 − ½mv²", "hf = ½mv²", "W0 = hf + ½mv²", "hf = W0 + ½mv²"], 3),
      s(1, "Which substitution gives the photon energy?", [
        "E = (6,63 × 10⁻³⁴)(3 × 10⁸)/(100)",
        "E = (6,63 × 10⁻³⁴)(3 × 10⁸)/(100 × 10⁻⁶)",
        "E = (6,63 × 10⁻³⁴)(3 × 10⁸)/(100 × 10⁻⁹)",
        "E = (6,63 × 10⁻³⁴)(3 × 10⁸)(100 × 10⁻⁹)",
      ], 2),
      s(1, "What is the energy of one photon?", ["1,99 × 10⁻²⁷ J", "1,99 × 10⁻²¹ J", "1,12 × 10⁻¹⁸ J", "1,99 × 10⁻¹⁸ J"], 3),
      s(1, "What is the maximum kinetic energy of an emitted electron?", ["2,86 × 10⁻¹⁸ J", "1,99 × 10⁻¹⁸ J", "1,12 × 10⁻¹⁸ J", "8,7 × 10⁻¹⁹ J"], 2),
      s(1, "Which equation must be solved for v?", [
        "(9,11 × 10⁻³¹)v² = 1,12 × 10⁻¹⁸",
        "½(9,11 × 10⁻³¹)v = 1,12 × 10⁻¹⁸",
        "½(9,11 × 10⁻³¹)v² = 1,12 × 10⁻¹⁸",
        "½(1,6 × 10⁻¹⁹)v² = 1,12 × 10⁻¹⁸",
      ], 2),
      s(1, "What is the velocity of the emitted electrons?", ["1,11 × 10⁶ m·s⁻¹", "2,46 × 10¹² m·s⁻¹", "2,09 × 10⁶ m·s⁻¹", "1,57 × 10⁶ m·s⁻¹"], 3),
    ],
    image_url: `${IMG}/14-photocell.png`,
  },
];
