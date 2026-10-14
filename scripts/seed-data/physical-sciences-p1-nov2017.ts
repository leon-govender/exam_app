// Real DBE past paper: Physical Sciences (Physics) P1, November 2017, National
// (English/Afrikaans bilingual memo).
// Source: single combined PDF (question paper + marking guideline) fetched
// from stanmorephysics.com. The PDF has a real text layer. QP (cover +
// instructions + questions) is pages 1-19, data sheets are pages 20-22, and the
// memo ("MARKING GUIDELINES", 150 marks) is pages 23-42 of the combined PDF
// (memo cover page 23, MCQ answers page 24, then content). Cover page confirms
// "PHYSICAL SCIENCES: PHYSICS (P1)", "NOVEMBER 2017", MARKS 150, TIME 3 hours.
// Per-question totals in the QP (21, 14, 11, 12, 10, 13, 9, 18, 9, 13 plus 20
// for Q1) sum to the paper's own "TOTAL: 150".
//
// Paper structure: ELEVEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here.
//
// This paper reuses every topic already defined by the Nov 2025/2024/2022 P1
// datasets, so the `topics` array is identical to theirs (topics are upserted
// by key in scripts/seed.ts).
//
// Diagrams (force diagram, graphs, circuits, charge layouts, generator coil
// positions, spectrum set-ups, energy levels) are vector drawings, so they were
// cropped from 220dpi page renders into public/question-images/physics-2017-p1/.
// The site watermark does not touch any of the cropped regions. The small
// illustrative AC-generator circuit in Question 10.2 (generator + 20 ohm
// device + wire) was NOT cropped: every value it shows is stated in the text,
// so it is decorative. Pure text MCQs (1.1, 1.5, 1.6, 1.8, 1.10) have no image.
// Question 1.4 uses one image holding both the trolley/clay sketch and the
// four velocity-time graphs; 1.9's image holds the field-and-conductor sketch,
// while its four answer arrows (A right, B up, C down, D left) are spelled out
// in the option text.
//
// Calculation questions and short single-answer items (all of Q1, 2.1.3,
// 2.1.4, 2.2.2, 3.1-3.3, 4.2, 4.3, 5.3, 5.4, 6.2.1, 6.2.2, 6.3, 7.2, 7.4, 8.2,
// 8.3, 9.1.2-9.1.4, 9.2.1-9.2.3, 10.1.1, 10.2.1, 10.2.2, 11.1.1, 11.1.2,
// 11.2.1-11.2.4) use `steps` (stepped multiple choice): the student works the
// problem on paper, then picks the option for each mark-earning step. The
// marks per step are allocated by this file (the memo shows ticks but not a
// per-step breakdown in text); they always sum to the question's marks.
//
// The definition/state-in-words items (2.1.1, 2.2.1, 4.1, 5.1, 6.1, 7.1, 8.1,
// 9.1.1) are stepped MCQs whose options are candidate statements, one step per
// memo mark point. The diagram/graph-sketch items (2.1.2, 3.4, 5.2, 7.3,
// 10.1.2) are one MCQ step per memo checklist criterion, with options
// describing correct versus incorrect drawing features. No question uses
// `marking_points`.
//
// FLAG for review: Question 1.9 (force on a current-carrying conductor in a
// magnetic field, F = BIL with the right-hand rule) is not one of the nine
// topics; it is mapped to "electrodynamics" as the closest existing topic
// (electromagnetism). Question 1.8 / 1.5 etc. map normally.
//
// FLAG for review: the memo's own numbering is slightly off. The free-body
// diagram and its accepted labels for 2.1.2 appear under the heading "2.1.3"
// on memo page 25 (the 2.1.3 working follows on page 26). Transcribed against
// the QP numbering here.
//
// FLAG for review: Question 3.3 memo gives a range of accepted values depending
// on rounding of the intermediate time (43,76 m with 2,44 s; 44,06 m with
// 2,45 s; 43,92 m, 44,08 m by other routes; range 43,764-44,08 m). The correct
// option here is 43,76 m (the memo's first answer, 2,44 s route). Distractors
// avoid every memo-accepted value.
//
// FLAG for review: Question 3.2 memo accepts 5,98 m.s-1 (5,978-6,03) and gives
// 6,00 m.s-1 via the impulse route; 5,98 is the correct option.
//
// FLAG for review: Question 6.3 memo accepts 45,33 m.s-1 (range 45,33-45,45).
//
// FLAG for review: Question 7.4 memo gives the magnitude QZ = 1,34 x 10-5 C;
// the question states sphere Z is NEGATIVE, so the actual charge is
// -1,34 x 10-5 C. Transcribed as the memo's magnitude.
//
// FLAG for review: Question 9.2.2 memo gives 7,00 V (accepted 6,972-7,00 V).
// Question 10.2.2 memo shows several accepted answers (29,77, 29,76, 29,75,
// 29,74 W depending on rounding of Irms = 1,22 A); the option used is
// 29,77 W with the others noted in marking_notes. Distractor 30,49 W is the
// memo's own intermediate (total power in the whole circuit) and 0,74 W is the
// power lost in the wires.
//
// FLAG for review: Question 1.1 maps to "newtons-laws" (mass vs weight) and
// 1.2 to "newtons-laws" (normal force); Q4's momentum/impulse and work-energy
// content map to "momentum-impulse"; Q11 (line spectra, photon energy) maps to
// "photoelectric-effect" as the closest topic for emission/absorption spectra.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2017-p1";

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
  year: 2017,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2020/10/Physical-Sciences-grade-12-Nov-2017-P1-and-Memo.pdf" as string | null,
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
    text: "The acceleration due to gravity on Earth is greater than that on the moon. Which ONE of the following statements is CORRECT?",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "B — The mass of an object on Earth is the same as that on the moon. Mass is independent of location; weight (w = mg) is greater on Earth because g is greater.",
    marking_notes: "Accept only 'B'.",
    steps: [
      {
        marks: 2,
        description: "Which statement is correct?",
        options: [
          "A — The weight of an object on Earth is the same as that on the moon.",
          "B — The mass of an object on Earth is the same as that on the moon.",
          "C — The mass of an object on Earth is greater than that on the moon.",
          "D — The weight of an object on Earth is less than that on the moon.",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The force diagram shows the forces acting on a box: weight w downwards, normal force N upwards, and a force F acting at angle θ above the horizontal. Which ONE of the following equations for the magnitude of the normal force (N) is CORRECT?",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "D — N = w − Fsinθ. The vertical component of F (Fsinθ) acts upwards and helps support the box, so N + Fsinθ = w.",
    marking_notes: "Accept only 'D'.",
    steps: [
      {
        marks: 2,
        description: "Which equation for the magnitude of N is correct?",
        options: ["A — N = w + Fcosθ", "B — N = w + Fsinθ", "C — N = w − Fcosθ", "D — N = w − Fsinθ"],
        correctIndex: 3,
      },
    ],
    image_url: `${IMG}/1.2-force-diagram.png`,
  },
  {
    number: "1", sub_number: "1.3",
    text: "A stone is projected vertically upwards from the top of a building at a speed of v m·s⁻¹. The position-time graph shown represents the motion of the stone (it rises to a maximum at time t₁, then falls below the starting position). Ignore air resistance. Which ONE of the combinations below regarding the magnitudes of the stone's velocity and acceleration, at time t₁, is CORRECT?",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A — velocity 0, acceleration 9,8 m·s⁻². At t₁ the stone is at its maximum height (momentarily at rest) but the acceleration due to gravity is still 9,8 m·s⁻².",
    marking_notes: "Accept only 'A'.",
    steps: [
      {
        marks: 2,
        description: "Magnitudes of velocity and acceleration at t₁?",
        options: [
          "A — velocity 0 m·s⁻¹; acceleration 9,8 m·s⁻²",
          "B — velocity 0 m·s⁻¹; acceleration 0 m·s⁻²",
          "C — velocity v m·s⁻¹; acceleration 0 m·s⁻²",
          "D — velocity v m·s⁻¹; acceleration 9,8 m·s⁻²",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/1.3-position-time-graph.png`,
  },
  {
    number: "1", sub_number: "1.4",
    text: "A trolley of mass m is moving at constant velocity v to the right on a frictionless horizontal surface. A ball of clay, also of mass m, dropped vertically, falls onto the trolley at time t. The ball of clay sticks to the trolley. Which ONE of the velocity-time graphs (A to D) CORRECTLY represents the velocity of the trolley before and after time t? (A: v drops to −v; B: v drops to −½v; C: v drops to ½v; D: v rises to 2v.)",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "C — Momentum is conserved horizontally: mv = (m + m)v_f, so v_f = ½v. The velocity drops from v to ½v and stays positive (same direction).",
    marking_notes: "Accept only 'C'.",
    steps: [
      {
        marks: 2,
        description: "Which velocity-time graph is correct?",
        options: [
          "A — v drops to −v after time t",
          "B — v drops to −½v after time t",
          "C — v drops to ½v after time t",
          "D — v rises to 2v after time t",
        ],
        correctIndex: 2,
      },
    ],
    image_url: `${IMG}/1.4-trolley-and-graphs.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "A person lifts a crate vertically upwards at constant velocity through a distance h. The person does work x on the crate in time t. The person now lifts the same crate vertically upwards at constant velocity through the same distance, but in time 2t. The work done by the person on the crate will now be …",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "B — x. At constant velocity the applied force equals the weight, so W = mgh regardless of the time taken.",
    marking_notes: "Accept only 'B'.",
    steps: [
      {
        marks: 2,
        description: "What is the work done in time 2t?",
        options: ["A — ½x", "B — x", "C — 2x", "D — 4x"],
        correctIndex: 1,
      },
    ],
  },
  {
    number: "1", sub_number: "1.6",
    text: "The wavelengths of light emitted by a distant star appear shorter when observed from Earth. From this we can conclude that the star is …",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A — moving towards Earth and the light is blue shifted. Shorter observed wavelengths mean higher frequency, which happens when the source approaches the observer (blue shift).",
    marking_notes: "Accept only 'A'.",
    steps: [
      {
        marks: 2,
        description: "What can be concluded about the star?",
        options: [
          "A — moving towards Earth and the light is blue shifted.",
          "B — moving towards Earth and the light is red shifted.",
          "C — moving away from Earth and the light is red shifted.",
          "D — moving away from Earth and the light is blue shifted.",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two identical light graphite-coated spheres, P₁ and P₂, are suspended using identical thin insulated threads. P₁ is charged, but P₂ is neutral. The spheres are brought into contact with each other (diagram I) and thereafter assume the positions shown in diagram II, hanging apart at equal angles θ. Which ONE of the following combinations concerning the charges on the spheres possibly explains why the spheres move apart after touching?",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "D — + and +, equal. On contact, identical conducting spheres share the total charge equally, so both end with the same sign (that of P₁) and equal magnitudes, and they repel each other.",
    marking_notes: "Accept only 'D'.",
    steps: [
      {
        marks: 2,
        description: "Which combination of charges on P₁ and P₂ explains the spheres moving apart?",
        options: [
          "A — P₁ +, P₂ +, magnitudes unequal",
          "B — P₁ −, P₂ −, magnitudes unequal",
          "C — P₁ +, P₂ −, magnitudes equal",
          "D — P₁ +, P₂ +, magnitudes equal",
        ],
        correctIndex: 3,
      },
    ],
    image_url: `${IMG}/1.7-charged-spheres.png`,
  },
  {
    number: "1", sub_number: "1.8",
    text: "When a resistor of resistance R is connected to a battery of emf ε and negligible internal resistance, the power dissipated in the resistor is P. If the resistor is replaced with a resistor of resistance 2R, without changing the battery, the power dissipated will be …",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "B — ½P. With a fixed emf, P = V²/R, so doubling R halves the power.",
    marking_notes: "Accept only 'B'.",
    steps: [
      {
        marks: 2,
        description: "What is the new power dissipated?",
        options: ["A — ¼P", "B — ½P", "C — 2P", "D — 4P"],
        correctIndex: 1,
      },
    ],
  },
  {
    number: "1", sub_number: "1.9",
    text: "The diagram shows a current-carrying conductor lying in a uniform magnetic field directed to the right. The current flows into the page. Which ONE of the following arrows shows the direction of the force experienced by the conductor due to the magnetic field? (A: arrow to the right; B: arrow up the page; C: arrow down the page; D: arrow to the left.)",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "C — down the page. By the right-hand rule (current into the page, field to the right) the force on the conductor points down the page.",
    marking_notes: "Accept only 'C'.",
    steps: [
      {
        marks: 2,
        description: "Which arrow shows the direction of the force on the conductor?",
        options: ["A — to the right (→)", "B — up the page (↑)", "C — down the page (↓)", "D — to the left (←)"],
        correctIndex: 2,
      },
    ],
    image_url: `${IMG}/1.9-conductor-field.png`,
  },
  {
    number: "1", sub_number: "1.10",
    text: "Light of a certain frequency is shone onto a metal M and electrons are ejected from the surface. The same source of light is shone onto another metal N. The electrons ejected from the surface of metal N have a much higher kinetic energy than that from metal M. This means that …",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "D — the threshold frequency of metal N is lower than that of metal M. With the same incident photon energy, E = W₀ + Ek(max), higher Ek means a smaller work function, hence a lower threshold frequency.",
    marking_notes: "Accept only 'D'.",
    steps: [
      {
        marks: 2,
        description: "What does this mean about metals N and M?",
        options: [
          "A — metal N has the same work function as metal M.",
          "B — metal N has a larger work function than metal M.",
          "C — the threshold frequency of metal N is higher than that of metal M.",
          "D — the threshold frequency of metal N is lower than that of metal M.",
        ],
        correctIndex: 3,
      },
    ],
  },

  // ============ QUESTION 2: NEWTON'S LAWS / GRAVITATION (21 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "An 8 kg block, P, is being pulled by constant force F up a rough inclined plane at an angle of 30° to the horizontal, at CONSTANT SPEED. Force F is parallel to the inclined plane. State Newton's First Law in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "An object continues in its state of rest or uniform motion (constant velocity) unless it is acted upon by an unbalanced (resultant/net) force.",
    marking_notes: "1 mark for 'remains at rest or moves at constant velocity'; 1 mark for 'unless acted on by a non-zero net/resultant/unbalanced force'. Alternative memo wordings accepted.",
    steps: [
      {
        marks: 1,
        description: "Which part of the statement correctly says what an object does?",
        options: [
          "An object continues in its state of rest or uniform motion (constant velocity)",
          "An object always slows down and eventually comes to rest",
          "An object accelerates at a constant rate in the direction of its last push",
          "An object moves at a speed proportional to the force applied to it",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which condition completes the law?",
        options: [
          "unless it is acted upon by an unbalanced (net/resultant) force",
          "unless it is acted upon by a balanced set of forces",
          "unless friction acts on it, whatever the other forces are",
          "unless its mass is greater than the mass of the surface",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/2.1-incline-block.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Draw a labelled free-body diagram for block P (8 kg, pulled by force F up a rough incline of 30°).",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces drawn from one point: weight w (Fg, 78,4 N) vertically downwards; normal force N perpendicular to the plane, away from the surface; applied force F (accept T/tension) parallel to and up the plane; kinetic friction fk parallel to the plane and down the slope (opposing motion).",
    marking_notes: "One mark per correctly labelled and correctly directed force: w, F (accept Fapp/FA/T), fk (accept Ff/f), N (accept FN). Max 4. Memo shows N, fk, w and F drawn from a single point (this is printed under the heading 2.1.3 in the memo).",
    steps: [
      {
        marks: 1,
        description: "In the free-body diagram of block P, how is the weight (w, 78,4 N) drawn?",
        options: [
          "Vertically downwards",
          "Perpendicular to the plane, into the surface",
          "Parallel to the plane, down the slope",
          "Vertically upwards",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How is the normal force N drawn?",
        options: [
          "Perpendicular to the plane, away from the surface",
          "Vertically upwards",
          "Parallel to the plane, up the slope",
          "Perpendicular to the plane, into the surface",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How is the applied force F drawn?",
        options: [
          "Parallel to the plane, pointing up the slope",
          "Horizontal, pointing to the right",
          "Parallel to the plane, pointing down the slope",
          "Vertically upwards",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How is the kinetic friction fk drawn?",
        options: [
          "Parallel to the plane, pointing down the slope (opposing the motion)",
          "Parallel to the plane, pointing up the slope",
          "Perpendicular to the plane, away from the surface",
          "Vertically downwards",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/2.1-incline-block.png`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "The kinetic frictional force between the block and the surface of the inclined plane is 20,37 N. Calculate the magnitude of force F.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Constant speed, so Fnet = 0: F − fk − mg sin30° = 0, so F = 20,37 + (8)(9,8)sin30° = 20,37 + 39,2 = 59,57 N.",
    marking_notes: "Marking points: Fnet = ma with Fnet = 0 (or equivalent equilibrium equation); correct substitution of fk and the parallel weight component (8)(9,8)sin30°; correct answer F = 59,57 N.",
    steps: [
      {
        marks: 1,
        description: "Which equation applies to the block moving up the plane at constant speed?",
        options: [
          "F − fk − mg sin30° = 0",
          "F + fk − mg sin30° = 0",
          "F − fk − mg cos30° = 0",
          "F − fk + mg sin30° = 0",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the component of the weight parallel to the plane, mg sin30°?",
        options: ["39,2 N", "67,9 N", "78,4 N", "19,6 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of F?",
        options: ["59,57 N", "18,83 N", "98,77 N", "88,27 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Force F is now removed and the block ACCELERATES down the plane. The kinetic frictional force remains 20,37 N. Calculate the magnitude of the acceleration of the block.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Fnet = ma: mg sin30° − fk = ma, so (8)(9,8)sin30° − 20,37 = 8a, giving a = 2,35 m·s⁻² (down the plane).",
    marking_notes: "Marking points: Fnet = ma; correct substitution (mg sin30° − fk = ma); correct answer a = 2,35 m·s⁻². The memo accepts either direction convention provided the magnitude is 2,35 m·s⁻².",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies down the plane (F removed)?",
        options: [
          "mg sin30° − fk = ma",
          "mg sin30° + fk = ma",
          "mg cos30° − fk = ma",
          "fk − mg = ma",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the net force along the plane?",
        options: ["18,83 N", "59,57 N", "39,20 N", "47,53 N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the acceleration?",
        options: ["2,35 m·s⁻²", "4,90 m·s⁻²", "7,45 m·s⁻²", "5,94 m·s⁻²"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "A 200 kg rock lies on the surface of a planet. The acceleration due to gravity on the surface of the planet is 6,0 m·s⁻². State Newton's Law of Universal Gravitation in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "Each body in the universe attracts every other body with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.",
    marking_notes: "1 mark for 'directly proportional to the product of the masses'; 1 mark for 'inversely proportional to the square of the distance between (centres of) them'. The memo also accepts the 'every particle ... along a line joining them' version.",
    steps: [
      {
        marks: 1,
        description: "How does the gravitational force depend on the masses?",
        options: [
          "Directly proportional to the product of their masses",
          "Directly proportional to the sum of their masses",
          "Inversely proportional to the product of their masses",
          "Directly proportional to the square of their masses",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How does the gravitational force depend on the distance?",
        options: [
          "Inversely proportional to the square of the distance between their centres",
          "Inversely proportional to the distance between their centres",
          "Directly proportional to the square of the distance between their centres",
          "Inversely proportional to the cube of the distance between their centres",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Calculate the mass of the planet if its radius is 700 km. (The 200 kg rock lies on the planet's surface where g = 6,0 m·s⁻².)",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "g = GM/r²: 6 = (6,67 × 10⁻¹¹)M / (700 × 10³)², giving M = 4,41 × 10²² kg.",
    marking_notes: "Marking points: correct formula (g = GM/r² or F = Gm₁m₂/r² with F = mg); correct substitution including r = 700 × 10³ m; correct answer 4,41 × 10²² kg. Memo Option 2 uses mg = GmM/r² and gets the same answer.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates g, the planet's mass M and its radius r?",
        options: ["g = GM/r²", "g = GM/r", "g = GMm/r²", "g = Gm/r²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What value of r must be substituted?",
        options: ["7 × 10⁵ m", "700 m", "7 × 10⁴ m", "7 × 10⁸ m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the mass of the planet?",
        options: ["4,41 × 10²² kg", "4,41 × 10¹⁶ kg", "6,72 × 10²² kg", "2,94 × 10¹² kg"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (14 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "Stone A is projected vertically upwards at a speed of 12 m·s⁻¹ from a height h above the ground. Ignore the effects of air resistance. Calculate the time taken for stone A to reach its maximum height.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Upwards positive, vf = 0 at the top: vf = vi + aΔt, so 0 = 12 + (−9,8)Δt, giving Δt = 1,22 s.",
    marking_notes: "Marking points: correct equation (vf = vi + aΔt); correct substitution; correct answer 1,22 s. The memo accepts several other routes (Δy then Δt, energy, impulse) giving 1,22 s (1,2245 s).",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies (vf = 0 at maximum height)?",
        options: ["vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt + ½aΔt²", "vf = vi − aΔt with a = −9,8 m·s⁻²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution is correct (upwards positive)?",
        options: ["0 = 12 + (−9,8)Δt", "0 = 12 + (9,8)Δt", "12 = 0 + (−9,8)Δt", "0 = −12 + (−9,8)Δt"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the time to reach maximum height?",
        options: ["1,22 s", "2,45 s", "0,82 s", "12,00 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "At the same instant that stone A is projected upwards at 12 m·s⁻¹, stone B is thrown vertically downwards from the same height at an unknown speed, v. When stone A reaches its maximum height, the speed of stone B is 3v. Calculate the speed, v, with which stone B is thrown downwards.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "For B (downwards positive) over the 1,22 s taken by A to reach its top: vf = vi + aΔt, so 3v = v + (9,8)(1,22), giving 2v = 11,96 and v = 5,98 m·s⁻¹.",
    marking_notes: "Marking points: correct equation for B; substitution with vf = 3v, vi = v, a = 9,8 and Δt = 1,22 s; correct answer v = 5,98 m·s⁻¹ (range 5,978-6,03; the impulse route gives 6,00 m·s⁻¹).",
    steps: [
      {
        marks: 1,
        description: "Which equation applies to stone B (downwards positive) over the time stone A takes to reach its top?",
        options: [
          "3v = v + (9,8)(1,22)",
          "3v = v − (9,8)(1,22)",
          "v = 3v + (9,8)(1,22)",
          "3v = 12 + (9,8)(1,22)",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Simplifying, what is 2v?",
        options: ["11,96 m·s⁻¹", "23,92 m·s⁻¹", "5,98 m·s⁻¹", "7,66 m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is v?",
        options: ["5,98 m·s⁻¹", "3,99 m·s⁻¹", "2,99 m·s⁻¹", "11,96 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/3-stones-AB.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "At the instant stone A passes its initial position on its way down, stone B hits the ground. Calculate the height h.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Stone A returns to its starting height after 2 × 1,22 = 2,44 s, so B falls h in 2,44 s (downwards positive): Δy = viΔt + ½aΔt² = (5,98)(2,44) + ½(9,8)(2,44)² = 43,76 m.",
    marking_notes: "Marking points: total time 2,44 s (accept 2,45 s); correct equation for B with vi = 5,98 m·s⁻¹ and a = 9,8 m·s⁻²; correct answer h = 43,76 m. The memo accepts 43,76-44,08 m (44,06 m with 2,45 s; 43,92 m and 44,08 m via other routes).",
    steps: [
      {
        marks: 1,
        description: "How long does B take to reach the ground (the time for A to go up and return to its start)?",
        options: ["2,44 s", "1,22 s", "3,66 s", "4,88 s"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation gives h for stone B (downwards positive)?",
        options: [
          "Δy = (5,98)Δt + ½(9,8)Δt²",
          "Δy = (12)Δt + ½(9,8)Δt²",
          "Δy = (5,98)Δt − ½(9,8)Δt²",
          "Δy = (5,98)Δt + (9,8)Δt²",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is h?",
        options: ["43,76 m", "14,59 m", "29,23 m", "87,52 m"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/3-stones-AB.png`,
  },
  {
    number: "3", sub_number: "3.4",
    text: "Sketch velocity-time graphs for the complete motions of stones A and B on the same set of axes. Label your graphs for stones A and B clearly. Show the time taken for stone A to reach its maximum height and the velocity with which stone B is thrown downwards.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "With upwards positive: A starts at +12 m·s⁻¹ and decreases linearly, crossing the time axis at 1,22 s. B starts at −5,98 m·s⁻¹ and decreases linearly. The two lines are straight and parallel (same gradient −9,8 m·s⁻²); A's line extends beyond the time when B hits the ground (at 2,44 s). (Downwards-positive version is the mirror image: A from −12, B from +5,98.)",
    marking_notes: "Memo criteria, 1 mark each: time 1,22 s correctly shown; B's initial velocity at t = 0 correctly shown with correct sign for the chosen convention; two sloping parallel lines with A crossing the time axis; A's line parallel to B's and extended beyond the time B hits the ground. Either sign convention accepted.",
    steps: [
      {
        marks: 1,
        description: "(Upwards positive.) What time must be marked on the graph for stone A?",
        options: [
          "1,22 s, where A's line crosses the time axis (v = 0 at maximum height)",
          "2,44 s, where A's line crosses the time axis",
          "1,22 s, where A's line reaches a maximum velocity",
          "12 s, where A's line crosses the time axis",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What must be shown for stone B at t = 0?",
        options: [
          "An initial velocity of −5,98 m·s⁻¹ (downwards, so negative)",
          "An initial velocity of +5,98 m·s⁻¹ (positive, same sign as A)",
          "An initial velocity of 0 m·s⁻¹",
          "An initial velocity of −12 m·s⁻¹",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct shape of the two graphs?",
        options: [
          "Two sloping straight lines that are parallel (both have gradient −9,8 m·s⁻²)",
          "Two sloping straight lines that cross each other at 1,22 s",
          "Two horizontal lines, one at +12 and one at −5,98 m·s⁻¹",
          "Two curved lines that get steeper with time",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How far should A's line extend?",
        options: [
          "Beyond the time at which B hits the ground (A is still moving at that instant)",
          "Only up to the time A reaches its maximum height",
          "Only up to the time B hits the ground",
          "It stops when A's velocity is zero",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/3-stones-AB.png`,
  },

  // ============ QUESTION 4: MOMENTUM (11 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "A 2 kg block is at rest on a smooth, frictionless, horizontal table. A bullet of mass 0,015 kg, travelling east at 400 m·s⁻¹, strikes the block and passes straight through it with constant acceleration. State the principle of conservation of linear momentum in words.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "The total linear momentum in an isolated (closed) system is constant (or: total linear momentum before a collision equals total linear momentum after the collision).",
    marking_notes: "1 mark for 'total (linear) momentum ... is conserved/constant/the same before and after', 1 mark for 'in an isolated/closed system (no net external force)'.",
    steps: [
      {
        marks: 1,
        description: "What does the principle say about the total linear momentum?",
        options: [
          "It is constant (the total before a collision equals the total after)",
          "It is greater after the collision than before",
          "It is always zero",
          "It is constant only if kinetic energy is also conserved",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Under what condition does this hold?",
        options: [
          "In an isolated (closed) system, with no net external force",
          "Whenever the objects stick together after the collision",
          "In any system, even with a net external force",
          "Only when the objects have equal masses",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/4-bullet-block.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "The block moves eastwards at 0,7 m·s⁻¹ after the bullet has emerged from it. Calculate the magnitude of the velocity of the bullet immediately after it emerges from the block.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Σpi = Σpf: (0,015)(400) + 0 = (0,015)v + (2)(0,7), so v = 306,67 m·s⁻¹.",
    marking_notes: "Marking points: Σpi = Σpf; correct substitution of the momenta before and after; correct answer 306,67 m·s⁻¹ (306,666).",
    steps: [
      {
        marks: 1,
        description: "Which equation applies to the bullet-block system?",
        options: [
          "mb·vbi + mB·vBi = mb·vbf + mB·vBf",
          "mb·vbi − mB·vBi = mb·vbf − mB·vBf",
          "½mb·vbi² = ½mb·vbf² + ½mB·vBf²",
          "mb·vbi = mb·vbf",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total momentum of the system before the collision?",
        options: ["6,0 kg·m·s⁻¹", "1,4 kg·m·s⁻¹", "800 kg·m·s⁻¹", "7,4 kg·m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the momentum of the block after the bullet emerges?",
        options: ["1,4 kg·m·s⁻¹", "0,7 kg·m·s⁻¹", "0,0105 kg·m·s⁻¹", "2,7 kg·m·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the speed of the bullet after emerging?",
        options: ["306,67 m·s⁻¹", "93,33 m·s⁻¹", "493,33 m·s⁻¹", "400,00 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "If the bullet takes 0,002 s to travel through the block, calculate the length, x, of the block.",
    marks: 5, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Bullet: vf = vi + aΔt gives 306,67 = 400 + a(0,002), so a = −46 667 m·s⁻². Then Δx = viΔt + ½aΔt² = (400)(0,002) + ½(−46 667)(0,002)² = 0,71 m.",
    marking_notes: "Marking points: equation for acceleration (or Fnet from impulse); a = −46 667 m·s⁻²; correct equation for displacement; substitution; answer x = 0,71 m (0,707 m). Memo accepts several routes (Δx = ((vi+vf)/2)Δt directly; work-energy with Fnet = 700 N).",
    steps: [
      {
        marks: 1,
        description: "Which equation gives the bullet's acceleration inside the block?",
        options: ["vf = vi + aΔt", "vf² = vi² + 2aΔx", "Δx = viΔt + ½aΔt²", "Fnet = ma with m = 2 kg"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the acceleration of the bullet?",
        options: ["−46 667 m·s⁻²", "+46 667 m·s⁻²", "−23 333 m·s⁻²", "−700 m·s⁻²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation then gives the length x of the block?",
        options: [
          "Δx = viΔt + ½aΔt²",
          "Δx = viΔt − ½aΔt² using a = −46 667 m·s⁻²",
          "Δx = vfΔt + ½aΔt²",
          "Δx = ½aΔt²",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the length of the block?",
        options: ["0,71 m", "0,80 m", "0,89 m", "0,35 m"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (12 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "In the diagram, a 4 kg block lying on a rough horizontal surface is connected to a 6 kg block by a light inextensible string passing over a light frictionless pulley. Initially the blocks are held at rest. State the work-energy theorem in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The net (total) work done on an object is equal to the change in the object's kinetic energy.",
    marking_notes: "1 mark for 'net/total work done (on an object)' (or work done by the resultant force), 1 mark for 'equal to the change in kinetic energy'.",
    steps: [
      {
        marks: 1,
        description: "Which work is referred to in the work-energy theorem?",
        options: [
          "The net (total) work done on an object",
          "The work done by friction only",
          "The work done by the applied force only",
          "The work done by the gravitational force only",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is that work equal to?",
        options: [
          "The change in the object's kinetic energy",
          "The change in the object's potential energy",
          "The object's final kinetic energy only",
          "The change in the object's momentum",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/5-blocks-pulley.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "When the blocks are released, the 6 kg block falls through a vertical distance of 1,6 m. Draw a labelled free-body diagram for the 6 kg block.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Two forces drawn from a point: weight w (Fg = 58,8 N) vertically downwards and tension T (FT) in the string vertically upwards.",
    marking_notes: "1 mark for weight (w/Fg/mg/58,8 N) drawn downwards and labelled; 1 mark for tension (T/FT) drawn upwards and labelled.",
    steps: [
      {
        marks: 1,
        description: "In the free-body diagram of the 6 kg block, how is the weight (w = 58,8 N) drawn?",
        options: [
          "Vertically downwards",
          "Vertically upwards",
          "Horizontally towards the pulley",
          "Vertically downwards, labelled as the normal force N",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What other force acts on the 6 kg block and how is it drawn?",
        options: [
          "Tension T in the string, vertically upwards",
          "Normal force N, vertically upwards",
          "Friction f, vertically upwards",
          "Tension T in the string, vertically downwards",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/5-blocks-pulley.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "Calculate the work done by the gravitational force on the 6 kg block as it falls through 1,6 m.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "W = FΔx cosθ = mgΔx cosθ = (6)(9,8)(1,6)cos0° = 94,08 J.",
    marking_notes: "Marking points: W = FΔx cosθ (or W = −ΔEp); correct substitution with cos0°; answer 94,08 J. Alternative Ww = −ΔEp = −(6)(9,8)(0 − 1,6) accepted.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the work done by the gravitational force?",
        options: ["W = mgΔx cosθ", "W = mg/Δx", "W = ½mv²", "W = mgΔt"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution is correct (weight and displacement in the same direction)?",
        options: [
          "(6)(9,8)(1,6)cos0°",
          "(6)(9,8)(1,6)cos180°",
          "(6)(9,8)(1,6)cos90°",
          "(10)(9,8)(1,6)cos0°",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the work done by the gravitational force?",
        options: ["94,08 J", "−94,08 J", "156,80 J", "0 J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "The coefficient of kinetic friction between the 4 kg block and the horizontal surface is 0,4. Ignore the effects of air resistance. Use energy principles to calculate the speed of the 6 kg block when it falls through 1,6 m while still attached to the 4 kg block.",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Wnet = ΔEk. Wnet = Wg + Wf = 94,08 + (0,4)(4)(9,8)(1,6)cos180° = 94,08 − 25,09 = 68,99 J (68,992 J). Both blocks move at the same speed: 68,992 = ½(4 + 6)v², so v = 3,71 m·s⁻¹.",
    marking_notes: "Marking points: Wnet = ΔEk; Wf = μkNΔx cos180° with N = mg of the 4 kg block; Wnet = 68,99 J; ΔEk of BOTH blocks, ½(4+6)v²; v = 3,71 m·s⁻¹. Memo accepts four other routes (Wnc = ΔEp + ΔEk, Newton's-law route with T = 32,928 N, etc.) all giving 3,71 (3,72) m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which energy principle applies to the whole system?",
        options: ["Wnet = ΔEk", "Wnet = ΔEp", "Ek + Ep = 0 (no friction)", "Wnet = Fnet·Δt"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the work done by friction on the 4 kg block?",
        options: ["−25,09 J", "+25,09 J", "−37,63 J", "−15,68 J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the net work done on the system?",
        options: ["68,99 J", "119,17 J", "94,08 J", "25,09 J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the change in kinetic energy of the system (starting from rest)?",
        options: ["½(4 + 6)v²", "½(6)v²", "½(4)v²", "(4 + 6)v²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the speed of the 6 kg block?",
        options: ["3,71 m·s⁻¹", "4,80 m·s⁻¹", "4,34 m·s⁻¹", "13,80 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/5-blocks-pulley.png`,
  },

  // ============ QUESTION 6: DOPPLER EFFECT (10 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "A police car moving at a constant velocity with its siren on passes a stationary listener. The graph shows the changes in the frequency of the sound of the siren detected by the listener. State the Doppler Effect in words.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "It is the (apparent) change in frequency (or pitch) of the sound detected by a listener because the sound source and the listener have different velocities relative to the medium of sound propagation.",
    marking_notes: "1 mark for '(apparent) change in (observed/detected) frequency/pitch', 1 mark for 'due to relative motion between source and listener/observer (different velocities relative to the medium)'.",
    steps: [
      {
        marks: 1,
        description: "What changes in the Doppler Effect?",
        options: [
          "The (apparent) frequency or pitch of the sound detected by the listener",
          "The speed of the sound in the air",
          "The amplitude of the sound only",
          "The frequency of the sound emitted by the source",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What causes the change?",
        options: [
          "The source and listener have different velocities relative to the medium (relative motion)",
          "The medium changes its temperature as the source passes",
          "The source emits a different frequency as it speeds up",
          "The sound waves are reflected by the listener",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/6-freq-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "Write down the frequency of the sound detected by the listener as the police car approaches the listener (read from the graph).",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "170 Hz (higher frequency while approaching).",
    marking_notes: "Accept only 170 Hz.",
    steps: [
      {
        marks: 1,
        description: "Frequency detected as the car approaches?",
        options: ["170 Hz", "130 Hz", "150 Hz", "180 Hz"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/6-freq-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "Write down the frequency of the sound detected by the listener as the police car moves away from the listener (read from the graph).",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "130 Hz (lower frequency while receding).",
    marking_notes: "Accept only 130 Hz.",
    steps: [
      {
        marks: 1,
        description: "Frequency detected as the car moves away?",
        options: ["130 Hz", "170 Hz", "110 Hz", "120 Hz"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/6-freq-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "Calculate the speed of the police car. Take the speed of sound in air to be 340 m·s⁻¹. (Use the frequencies from 6.2.1 and 6.2.2; the siren's own frequency is unknown.)",
    marks: 6, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "fL = [(v ± vL)/(v ± vs)] fs with the listener stationary. Approaching: 170 = 340/(340 − vs) × fs. Moving away: 130 = 340/(340 + vs) × fs. Dividing: 170/130 = (340 + vs)/(340 − vs), so vs = 45,33 m·s⁻¹.",
    marking_notes: "Marking points: Doppler formula; correct substitution for approaching (340 − vs); correct substitution for moving away (340 + vs); eliminating fs; answer vs = 45,33 m·s⁻¹ (range 45,33-45,45). Positive marking from 6.2.1 and 6.2.2.",
    steps: [
      {
        marks: 1,
        description: "Which Doppler formula applies (stationary listener, moving source)?",
        options: [
          "fL = [(v ± vL)/(v ± vs)] × fs",
          "fL = [(v ± vs)/(v ± vL)] × fs",
          "fL = [(v ± vL)/(v ± vs)] × λ",
          "fL = [(v ± vL)/(v ± vs)]",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation describes the car APPROACHING the listener?",
        options: [
          "170 = [340/(340 − vs)] × fs",
          "170 = [340/(340 + vs)] × fs",
          "130 = [340/(340 − vs)] × fs",
          "170 = [(340 − vs)/340] × fs",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation describes the car MOVING AWAY from the listener?",
        options: [
          "130 = [340/(340 + vs)] × fs",
          "130 = [340/(340 − vs)] × fs",
          "170 = [340/(340 + vs)] × fs",
          "130 = [(340 + vs)/340] × fs",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Dividing the two equations to eliminate fs, which relationship results?",
        options: [
          "170/130 = (340 + vs)/(340 − vs)",
          "170/130 = (340 − vs)/(340 + vs)",
          "170 × 130 = (340 + vs)(340 − vs)",
          "170 − 130 = vs",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the speed of the police car?",
        options: ["45,33 m·s⁻¹", "22,67 m·s⁻¹", "90,67 m·s⁻¹", "104,62 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (13 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "Two small spheres, X and Y, carrying charges of +6 × 10⁻⁶ C and +8 × 10⁻⁶ C respectively, are placed 0,20 m apart in air. State Coulomb's law in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The magnitude of the electrostatic force exerted by one point charge on another point charge is directly proportional to the product of the (magnitudes of the) charges and inversely proportional to the square of the distance between them.",
    marking_notes: "1 mark for 'directly proportional to the product of the charges', 1 mark for 'inversely proportional to the square of the distance between them'.",
    steps: [
      {
        marks: 1,
        description: "How does the electrostatic force depend on the charges?",
        options: [
          "Directly proportional to the product of the (magnitudes of the) charges",
          "Directly proportional to the sum of the charges",
          "Inversely proportional to the product of the charges",
          "Directly proportional to the square of the charges added together",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How does the electrostatic force depend on the distance?",
        options: [
          "Inversely proportional to the square of the distance between them",
          "Inversely proportional to the distance between them",
          "Directly proportional to the square of the distance between them",
          "Inversely proportional to the cube of the distance between them",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-XY.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Calculate the magnitude of the electrostatic force experienced by charged sphere X (+6 × 10⁻⁶ C, 0,20 m from Y which carries +8 × 10⁻⁶ C).",
    marks: 4, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = kQ₁Q₂/r² = (9 × 10⁹)(6 × 10⁻⁶)(8 × 10⁻⁶)/(0,20)² = 10,8 N.",
    marking_notes: "Marking points: F = kQ₁Q₂/r²; substitution of k and both charges; r² = (0,20)²; answer 10,8 N. Option 2 (E = kQ/r² = 1,8 × 10⁴ N·C⁻¹ then F = Eq) also gives 10,8 N.",
    steps: [
      {
        marks: 1,
        description: "Which formula applies?",
        options: ["F = kQ₁Q₂/r²", "F = kQ₁Q₂/r", "F = kQ₁Q₂r²", "F = kQ/r²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution is correct?",
        options: [
          "(9 × 10⁹)(6 × 10⁻⁶)(8 × 10⁻⁶)/(0,20)²",
          "(9 × 10⁹)(6 × 10⁻⁶)(8 × 10⁻⁶)/(0,20)",
          "(9 × 10⁹)(6 × 10⁻⁶ + 8 × 10⁻⁶)/(0,20)²",
          "(9 × 10⁹)(6 × 10⁻⁶)(8 × 10⁻⁶)/(0,40)²",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the force on X?",
        options: ["10,8 N", "2,16 N", "1,08 N", "0,43 N"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-XY.png`,
  },
  {
    number: "7", sub_number: "7.3",
    text: "A third sphere, Z, of unknown NEGATIVE charge, is now placed 0,30 m below sphere Y so that the line joining X and Y is perpendicular to the line joining Y and Z. Draw a vector diagram showing the directions of the electrostatic forces and the net force experienced by charged sphere Y due to the presence of charged spheres X and Z respectively.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Three vectors drawn from one point: FXY (force of X on Y) pointing horizontally to the right, away from X (repulsion, like charges); FZY (force of Z on Y) pointing vertically downwards towards Z (attraction, opposite charges); and Fnet, the resultant, drawn diagonally down and to the right as the diagonal of the rectangle/triangle formed by FXY and FZY.",
    marking_notes: "Memo: 1 mark for FXY horizontal to the right, 1 mark for FZY vertically downwards, 1 mark for Fnet (the resultant) pointing diagonally between them.",
    steps: [
      {
        marks: 1,
        description: "How is FXY (force of X on Y) drawn? (X and Y are both positive, X to the left of Y.)",
        options: [
          "Horizontally to the right, away from X (repulsion)",
          "Horizontally to the left, towards X (attraction)",
          "Vertically downwards",
          "Diagonally down and to the right",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How is FZY (force of Z on Y) drawn? (Z is negative and directly below Y.)",
        options: [
          "Vertically downwards, towards Z (attraction)",
          "Vertically upwards, away from Z (repulsion)",
          "Horizontally to the left",
          "Horizontally to the right",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How is Fnet drawn?",
        options: [
          "Diagonally down and to the right, the resultant of FXY and FZY",
          "Diagonally up and to the left, opposite to the resultant",
          "Vertically downwards, equal to FZY",
          "Horizontally to the right, equal to FXY",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-XYZ.png`,
  },
  {
    number: "7", sub_number: "7.4",
    text: "The magnitude of the net electrostatic force experienced by charged sphere Y is 15,20 N. Calculate the charge on sphere Z. (FXY on Y is 10,8 N from Q7.2; Y is 0,30 m from Z and carries +8 × 10⁻⁶ C.)",
    marks: 4, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "The forces are perpendicular, so Fnet² = FXY² + FZY²: (15,20)² = (10,8)² + FZY², giving FZY = 10,696 N. Then FZY = kQZQY/r²: 10,696 = (9 × 10⁹)(QZ)(8 × 10⁻⁶)/(0,30)², so QZ = 1,34 × 10⁻⁵ C (magnitude; Z is negative).",
    marking_notes: "Marking points: Pythagoras for the net force; FZY = 10,70 N; Coulomb's law for FZY with r = 0,30 m; QZ = 1,34 × 10⁻⁵ C. The memo states the magnitude only; sphere Z is negative.",
    steps: [
      {
        marks: 1,
        description: "How are Fnet, FXY and FZY related (the forces are at right angles)?",
        options: [
          "Fnet² = FXY² + FZY²",
          "Fnet = FXY + FZY",
          "Fnet = FXY − FZY",
          "Fnet² = FXY² − FZY²",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of FZY?",
        options: ["10,70 N", "4,40 N", "26,00 N", "18,65 N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution into Coulomb's law gives QZ?",
        options: [
          "10,70 = (9 × 10⁹)(QZ)(8 × 10⁻⁶)/(0,30)²",
          "10,70 = (9 × 10⁹)(QZ)(8 × 10⁻⁶)/(0,20)²",
          "15,20 = (9 × 10⁹)(QZ)(8 × 10⁻⁶)/(0,30)²",
          "10,70 = (9 × 10⁹)(QZ)(6 × 10⁻⁶)/(0,30)²",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of the charge on Z?",
        options: ["1,34 × 10⁻⁵ C", "5,50 × 10⁻⁶ C", "5,94 × 10⁻⁶ C", "3,25 × 10⁻⁵ C"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-XYZ.png`,
  },

  // ============ QUESTION 8: ELECTRIC FIELDS (9 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "A and B are two small spheres separated by a distance of 0,70 m. Sphere A carries a charge of +1,5 × 10⁻⁶ C and sphere B carries a charge of −2,0 × 10⁻⁶ C. P is a point between A and B, 0,40 m from A. Define the term electric field at a point.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The electric field at a point is the force per unit positive charge placed at that point.",
    marking_notes: "1 mark for 'force per unit charge', 1 mark for 'positive (test) charge placed at that point'.",
    steps: [
      {
        marks: 1,
        description: "What quantity defines the electric field?",
        options: [
          "The force per unit charge",
          "The energy per unit charge",
          "The charge per unit area",
          "The force multiplied by the charge",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What kind of charge is the field defined with?",
        options: [
          "A positive charge placed at that point",
          "A negative charge placed at that point",
          "The charge that creates the field",
          "Any charge, regardless of its sign",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/8-charges-APB.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Calculate the magnitude of the net electric field at point P (0,40 m from A, +1,5 × 10⁻⁶ C, and 0,30 m from B, −2,0 × 10⁻⁶ C).",
    marks: 4, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = kQ/r². Between a positive and a negative charge both fields at P point the same way (towards B), so they add: Enet = (9 × 10⁹)(1,5 × 10⁻⁶)/(0,4)² + (9 × 10⁹)(2,0 × 10⁻⁶)/(0,3)² = 8,44 × 10⁴ + 2,00 × 10⁵ = 2,84 × 10⁵ N·C⁻¹.",
    marking_notes: "Marking points: E = kQ/r²; correct substitution for A (r = 0,40 m) and B (r = 0,30 m); the fields ADD; answer 2,84 × 10⁵ N·C⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the field due to each point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "E = kQ₁Q₂/r²", "E = kQr²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the field at P due to A (r = 0,40 m)?",
        options: ["8,44 × 10⁴ N·C⁻¹", "3,38 × 10⁴ N·C⁻¹", "1,50 × 10⁵ N·C⁻¹", "1,13 × 10⁵ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the field at P due to B (r = 0,30 m)?",
        options: ["2,00 × 10⁵ N·C⁻¹", "1,13 × 10⁵ N·C⁻¹", "6,00 × 10⁴ N·C⁻¹", "6,67 × 10⁴ N·C⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of the net field at P?",
        options: ["2,84 × 10⁵ N·C⁻¹", "1,16 × 10⁵ N·C⁻¹", "2,00 × 10⁵ N·C⁻¹", "1,46 × 10⁵ N·C⁻¹"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/8-charges-APB.png`,
  },
  {
    number: "8", sub_number: "8.3",
    text: "A point charge of magnitude 3,0 × 10⁻⁹ C is now placed at point P. Calculate the magnitude of the electrostatic force experienced by this charge.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "F = qE = (3,0 × 10⁻⁹)(2,84 × 10⁵) = 8,52 × 10⁻⁴ N.",
    marking_notes: "Marking points: F = qE; correct substitution using Enet from 8.2; answer 8,52 × 10⁻⁴ N. Memo Option 2 (F = kQ₁Q₂/r² summed over A and B) gives 8,53 × 10⁻⁴ N and is also accepted.",
    steps: [
      {
        marks: 1,
        description: "Which formula applies?",
        options: ["F = qE", "F = q/E", "F = E/q", "F = qE²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution is correct?",
        options: [
          "(3,0 × 10⁻⁹)(2,84 × 10⁵)",
          "(3,0 × 10⁻⁹)/(2,84 × 10⁵)",
          "(2,84 × 10⁵)/(3,0 × 10⁻⁹)",
          "(3,0 × 10⁻⁹)(2,84 × 10⁵)²",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the magnitude of the force on the charge?",
        options: ["8,52 × 10⁻⁴ N", "8,52 × 10⁻² N", "1,06 × 10⁻¹⁴ N", "8,52 × 10⁴ N"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/8-charges-APB.png`,
  },

  // ============ QUESTION 9: ELECTRIC CIRCUITS (18 marks) ============

  {
    number: "9", sub_number: "9.1.1",
    text: "Learners investigated the relationship between potential difference (V) and current (I) for two resistors R₁ and R₂, connected in parallel in one experiment and in series in a second. Graph X and graph Y show the results (one for each experiment). State Ohm's law in words.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The potential difference (voltage) across a conductor is directly proportional to the current in the conductor at constant temperature.",
    marking_notes: "1 mark for 'potential difference directly proportional to current' (either quantity may be stated first), 1 mark for 'at constant temperature'.",
    steps: [
      {
        marks: 1,
        description: "How are potential difference and current related for a conductor?",
        options: [
          "The potential difference is directly proportional to the current",
          "The potential difference is inversely proportional to the current",
          "The potential difference is proportional to the square of the current",
          "The potential difference equals the current multiplied by the power",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Under what condition does this hold?",
        options: [
          "At constant temperature",
          "At constant current",
          "At constant potential difference",
          "At any temperature",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-VI-graph.png`,
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "What physical quantity does the gradient (slope) of the V-I graph represent?",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "(Equivalent) resistance.",
    marking_notes: "Accept 'resistance' / 'equivalent resistance'.",
    steps: [
      {
        marks: 1,
        description: "What does the gradient of a V-I graph represent?",
        options: ["(Equivalent) resistance", "Conductance", "Power", "Electric charge"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-VI-graph.png`,
  },
  {
    number: "9", sub_number: "9.1.3",
    text: "Calculate the gradient (slope) of graph X.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "Gradient = ΔV/ΔI = (2 − 0)/(0,5 − 0) = 4 Ω.",
    marking_notes: "Marking points: gradient = ΔV/ΔI with values read correctly from graph X (2,00 V at 0,50 A); answer 4 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which expression gives the gradient of the V-I graph?",
        options: ["ΔV/ΔI = (2 − 0)/(0,5 − 0)", "ΔI/ΔV = (0,5 − 0)/(2 − 0)", "V × I = 2 × 0,5", "ΔV/Δt"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the gradient of graph X?",
        options: ["4 Ω", "0,25 Ω", "2 Ω", "1 Ω"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-VI-graph.png`,
  },
  {
    number: "9", sub_number: "9.1.4",
    text: "Determine the resistance of resistor R₁. (Graph X gradient is 4 Ω; graph Y has gradient 1 Ω, from 0,50 V at 0,50 A.)",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "The steeper graph X (4 Ω) is the series combination: R₁ + R₂ = 4 Ω. Graph Y (1 Ω) is the parallel combination: R₁R₂/(R₁ + R₂) = 1 Ω, so R₁R₂ = 4 Ω². Solving: R₁ = R₂ = 2 Ω.",
    marking_notes: "Marking points (memo option 1): series R₁ + R₂ = 4 Ω; parallel R₁R₂/(R₁ + R₂) = 1 Ω; R₁R₂ = 4; R₁ = R₂ = 2 Ω. Memo option 2 substitutes into 1/R₁ + 1/R₂ = 1/1 to get R₁ = 2 Ω.",
    steps: [
      {
        marks: 1,
        description: "Which graph is the series combination and what is its resistance?",
        options: [
          "X (4 Ω) is series; Y (1 Ω) is parallel",
          "Y (1 Ω) is series; X (4 Ω) is parallel",
          "Both graphs are series, R = 4 Ω and R = 1 Ω",
          "Neither can be identified from the gradient",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation holds for the series combination?",
        options: ["R₁ + R₂ = 4 Ω", "R₁ + R₂ = 1 Ω", "R₁R₂/(R₁ + R₂) = 4 Ω", "R₁ + R₂ = 5 Ω"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation holds for the parallel combination?",
        options: ["R₁R₂/(R₁ + R₂) = 1 Ω", "R₁R₂/(R₁ + R₂) = 4 Ω", "(R₁ + R₂)/R₁R₂ = 1 Ω", "R₁R₂ = 1 Ω²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the resistance of R₁?",
        options: ["2 Ω", "4 Ω", "1 Ω", "3 Ω"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-VI-graph.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "The circuit consists of three resistors, M, N and T, a battery with emf ε and internal resistance 0,9 Ω. The effective resistance between points a and b is 6 Ω. The resistance of resistor T is 1,5 Ω. When switch S is closed, a high-resistance voltmeter V₁ across a and b reads 5 V. Calculate the current delivered by the battery.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "I = V/R = 5/6 = 0,83 A.",
    marking_notes: "Marking points: I = V/R; substitution of V = 5 V and R = 6 Ω (the resistance between a and b, M and N together); answer 0,83 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula applies (using the voltmeter V₁ reading across a and b)?",
        options: ["I = V/R", "I = VR", "I = R/V", "I = V/R²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution is correct?",
        options: ["5/6", "5/(6 + 1,5)", "5/(6 + 0,9)", "5/(6 + 1,5 + 0,9)"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the current delivered by the battery?",
        options: ["0,83 A", "0,67 A", "0,72 A", "0,60 A"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-circuit.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Calculate the emf (ε) of the battery.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "ε = I(R + r) = (0,83)[(6 + 1,5) + 0,9] = 7,00 V.",
    marking_notes: "Marking points: ε = I(R + r) (or ε = V_ext + V_int); external resistance 6 + 1,5 = 7,5 Ω; substitution including r = 0,9 Ω; answer 7,00 V (accepted range 6,972-7,00 V). Memo option 2: ε = 5 + (0,833 × 1,5) + (0,9 × 0,833) = 6,999 V.",
    steps: [
      {
        marks: 1,
        description: "Which equation gives the emf?",
        options: ["ε = I(R + r)", "ε = IR", "ε = I(R − r)", "ε = Ir"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total external resistance (a to b plus T)?",
        options: ["7,5 Ω", "6,0 Ω", "6,9 Ω", "1,5 Ω"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total resistance of the whole circuit (external plus internal)?",
        options: ["8,4 Ω", "7,5 Ω", "6,9 Ω", "9,0 Ω"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the emf of the battery?",
        options: ["7,00 V", "6,23 V", "5,75 V", "5,00 V"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-circuit.png`,
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "Voltmeter V₂ (across resistor M) reads 2,5 V when the switch is closed. Write down the resistance of N (no calculations required) and give a reason for the answer.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "RN = 3 Ω. The voltage divides proportionately in a series circuit. Since the voltage across M (2,5 V) is half the total voltage across a and b (5 V), the resistances of M and N are equal, so each is 3 Ω.",
    marking_notes: "1 mark for RN = 3 Ω; 1 mark for the reason (voltage divides in proportion to resistance in series; V across M is half of the total so RM = RN).",
    steps: [
      {
        marks: 1,
        description: "What is the resistance of N?",
        options: ["3 Ω", "6 Ω", "1,5 Ω", "2,5 Ω"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which reason is correct?",
        options: [
          "Voltage divides in proportion to resistance in series; V across M is half of the total, so RM = RN",
          "In a series circuit the current is shared equally between M and N",
          "In a parallel circuit the potential difference is the same across M and N",
          "N has the same resistance as T because they carry the same current",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9-circuit.png`,
  },

  // ============ QUESTION 10: ELECTRODYNAMICS (9 marks) ============

  {
    number: "10", sub_number: "10.1.1",
    text: "The diagram shows different positions (ABCDA) of the coil in a DC generator for a complete revolution. The coil is rotated clockwise at a constant speed in a uniform magnetic field. Write down the energy conversion that takes place during the operation of the DC generator.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Mechanical (energy) to electrical (energy).",
    marking_notes: "Accept 'mechanical to electrical'.",
    steps: [
      {
        marks: 1,
        description: "Energy conversion in a DC generator?",
        options: [
          "Mechanical to electrical",
          "Electrical to mechanical",
          "Chemical to electrical",
          "Electrical to heat",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/10-coil-positions.png`,
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "Sketch a graph to show how the induced emf of the DC generator varies with time. Clearly indicate positions A, B, C, D and A on the graph.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "A DC (commutator-rectified) graph: the emf starts from zero at A, rises to a maximum at B, falls back to zero at C, rises to a maximum again at D (same sign, never negative), and returns to zero at A. The whole graph lies on one side of the time axis (the memo also accepts the mirror image below the axis, or starting at a maximum, as long as positions A, B, C, D and A are correctly located).",
    marking_notes: "Memo criteria, 1 mark each: correct DC shape starting from zero (two same-sign humps with sharp cusps at the axis); positions ABCDA correctly indicated on the graph (A and C at zero emf, B and D at the maximum).",
    steps: [
      {
        marks: 1,
        description: "What is the correct shape of the induced emf-time graph for a DC generator?",
        options: [
          "Two same-sign humps per revolution, starting from zero, never changing sign",
          "A smooth sine wave that alternates above and below the time axis",
          "A horizontal straight line at a constant emf",
          "A straight line rising steadily with time",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Where are positions A, B, C, D and A marked on the graph?",
        options: [
          "A and C at zero emf; B and D at the maximum emf",
          "A and C at the maximum emf; B and D at zero emf",
          "A, B, C and D all at the maximum emf",
          "A at zero emf; B, C and D at the maximum emf",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/10-coil-positions.png`,
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "A small AC generator, providing an rms voltage of 25 V, is connected across a device with a resistance of 20 Ω. The wires connecting the generator to the device have a total resistance of 0,5 Ω. Write down the total resistance of the circuit.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "20,5 Ω (device and wires in series).",
    marking_notes: "Accept only 20,5 Ω.",
    steps: [
      {
        marks: 1,
        description: "Total resistance of the circuit?",
        options: ["20,5 Ω", "20,0 Ω", "0,5 Ω", "40,5 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Calculate the average power delivered to the device. (Generator rms voltage 25 V; device 20 Ω; wires 0,5 Ω.)",
    marks: 5, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "Irms = Vrms/R_total = 25/20,5 = 1,22 A. The device's average power: Pave = Irms²R = (1,22)²(20) = 29,77 W (the memo accepts 29,74-29,77 W depending on rounding of Irms). Alternatively total power 30,49 W minus the 0,74 W lost in the wires gives 29,75 W.",
    marking_notes: "Marking points: Irms = Vrms/R using the total resistance 20,5 Ω; Irms = 1,22 A; Pave = Irms²R with R = 20 Ω (the DEVICE resistance, not the total); substitution; answer about 29,75 W. Memo accepts 29,74 / 29,75 / 29,76 / 29,77 W. The total power in the whole circuit is 30,49 W and the power lost in the wires is 0,74 W (both are traps, not accepted as the answer).",
    steps: [
      {
        marks: 1,
        description: "What is the rms current in the circuit?",
        options: ["1,22 A", "1,25 A", "0,82 A", "50,0 A"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula gives the average power delivered to the device?",
        options: [
          "Pave = Irms² × R_device (20 Ω)",
          "Pave = Irms² × R_total (20,5 Ω)",
          "Pave = Irms² × R_wires (0,5 Ω)",
          "Pave = Irms × R_device",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution is correct?",
        options: ["(1,22)²(20)", "(1,22)²(20,5)", "(1,22)²(0,5)", "(25)²(20)"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the average power delivered to the device? (Memo accepts 29,74-29,77 W.)",
        options: ["29,77 W", "30,49 W", "0,74 W", "31,25 W"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 11: SPECTRA AND PHOTONS (13 marks) ============

  {
    number: "11", sub_number: "11.1.1",
    text: "A teacher explains how different types of spectra are obtained. In the first diagram, light from a HOT GAS passes through a diffraction grating to give Spectrum Y. Name the type of spectrum Y.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "(Line) emission spectrum.",
    marking_notes: "Accept '(line) emission spectrum'.",
    steps: [
      {
        marks: 1,
        description: "Type of spectrum Y?",
        options: [
          "(Line) emission spectrum",
          "(Line) absorption spectrum",
          "Continuous spectrum",
          "Continuous absorption spectrum",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/11-spectra-diagram.png`,
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "In the second diagram, light from a hot, glowing bulb passes through a COLD GAS and then through a diffraction grating to give Spectrum Z. Name the type of spectrum Z.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "(Line) absorption spectrum.",
    marking_notes: "Accept '(line) absorption spectrum'.",
    steps: [
      {
        marks: 1,
        description: "Type of spectrum Z?",
        options: [
          "(Line) absorption spectrum",
          "(Line) emission spectrum",
          "Continuous spectrum",
          "Continuous emission spectrum",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/11-spectra-diagram.png`,
  },
  {
    number: "11", sub_number: "11.2.1",
    text: "The energy-level diagram (not drawn to scale) of an excited atom shows E₄ = 2,044 × 10⁻¹⁸ J, E₃ = 1,937 × 10⁻¹⁸ J and E₂ = 1,635 × 10⁻¹⁸ J, with arrows pointing DOWN from E₄ to E₂ and from E₃ to E₂. Do the transitions indicated in the diagram lead to ABSORPTION or EMISSION spectra?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Emission. Electrons drop from higher to lower energy levels and release photons.",
    marking_notes: "Accept 'emission'.",
    steps: [
      {
        marks: 1,
        description: "Absorption or emission spectra?",
        options: [
          "Emission — electrons drop to lower levels and release photons",
          "Absorption — electrons drop to lower levels and absorb photons",
          "Absorption — electrons are excited to higher levels",
          "Neither — only continuous spectra are formed",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/11-energy-levels.png`,
  },
  {
    number: "11", sub_number: "11.2.2",
    text: "Calculate the frequency of the photon produced when an electron in an excited atom makes a transition from E₄ to E₂ (E₄ = 2,044 × 10⁻¹⁸ J, E₂ = 1,635 × 10⁻¹⁸ J).",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = E₄ − E₂ = 2,044 × 10⁻¹⁸ − 1,635 × 10⁻¹⁸ = 4,09 × 10⁻¹⁹ J. E = hf: 4,09 × 10⁻¹⁹ = (6,63 × 10⁻³⁴)f, so f = 6,17 × 10¹⁴ Hz.",
    marking_notes: "Marking points: energy released = E₄ − E₂; E = 4,09 × 10⁻¹⁹ J; E = hf with substitution; f = 6,17 × 10¹⁴ Hz.",
    steps: [
      {
        marks: 1,
        description: "How is the energy of the photon found?",
        options: ["E = E₄ − E₂", "E = E₄ − E₃", "E = E₃ − E₂", "E = E₄ + E₂"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the energy of the photon?",
        options: ["4,09 × 10⁻¹⁹ J", "3,02 × 10⁻¹⁹ J", "1,07 × 10⁻¹⁹ J", "3,68 × 10⁻¹⁸ J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation relates the photon's energy to its frequency?",
        options: ["E = hf", "E = h/f", "E = f/h", "E = hf²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the frequency of the photon?",
        options: ["6,17 × 10¹⁴ Hz", "4,56 × 10¹⁴ Hz", "1,61 × 10¹⁴ Hz", "1,62 × 10⁻¹⁵ Hz"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/11-energy-levels.png`,
  },
  {
    number: "11", sub_number: "11.2.3",
    text: "The threshold frequency of a metal, Q, is 4,4 × 10¹⁴ Hz. Calculate the kinetic energy of the most energetic electron ejected when the photon produced in QUESTION 11.2.2 is incident on the surface of metal Q.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = W₀ + Ek(max): 4,09 × 10⁻¹⁹ = (6,63 × 10⁻³⁴)(4,4 × 10¹⁴) + Ek(max), so Ek(max) = 1,17 × 10⁻¹⁹ J.",
    marking_notes: "Marking points: E = W₀ + Ek(max) (or hf = hf₀ + Ek(max)); W₀ = hf₀ = 2,92 × 10⁻¹⁹ J; correct substitution; answer 1,17 × 10⁻¹⁹ J. Alternative route Ek = hf − hf₀ with f = 6,17 × 10¹⁴ Hz gives the same.",
    steps: [
      {
        marks: 1,
        description: "Which equation applies to the photoelectric effect here?",
        options: ["E = W₀ + Ek(max)", "E = W₀ − Ek(max)", "Ek(max) = W₀ + E", "E = Ek(max)/W₀"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the work function of metal Q?",
        options: ["2,92 × 10⁻¹⁹ J", "4,09 × 10⁻¹⁹ J", "4,97 × 10⁻¹⁹ J", "6,63 × 10⁻³⁴ J"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution is correct?",
        options: [
          "4,09 × 10⁻¹⁹ = (6,63 × 10⁻³⁴)(4,4 × 10¹⁴) + Ek(max)",
          "4,09 × 10⁻¹⁹ = (6,63 × 10⁻³⁴)(7,5 × 10¹⁴) + Ek(max)",
          "(6,63 × 10⁻³⁴)(4,4 × 10¹⁴) = 4,09 × 10⁻¹⁹ + Ek(max)",
          "4,09 × 10⁻¹⁹ + (6,63 × 10⁻³⁴)(4,4 × 10¹⁴) = Ek(max)",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the maximum kinetic energy of the ejected electron?",
        options: ["1,17 × 10⁻¹⁹ J", "7,01 × 10⁻¹⁹ J", "2,92 × 10⁻¹⁹ J", "4,09 × 10⁻¹⁹ J"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "11", sub_number: "11.2.4",
    text: "Another metal, R, has a threshold frequency of 7,5 × 10¹⁴ Hz. Will the photon produced in QUESTION 11.2.2 (f = 6,17 × 10¹⁴ Hz) be able to eject electrons from the surface of metal R? Write down only YES or NO, and give a reason for the answer.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "NO. The threshold frequency of R (7,5 × 10¹⁴ Hz) is greater than the frequency of the photon (6,17 × 10¹⁴ Hz) (equivalently, the photon's energy is less than R's work function).",
    marking_notes: "1 mark for NO; 1 mark for the reason (photon frequency less than threshold frequency / photon energy less than the work function). Any one of the memo's three wordings is accepted.",
    steps: [
      {
        marks: 1,
        description: "Will the photon eject electrons from metal R?",
        options: [
          "NO",
          "YES",
          "NO, but only if the intensity is increased",
          "YES, if the intensity is increased",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which reason is correct?",
        options: [
          "The threshold frequency of R is greater than the frequency of the photon",
          "The threshold frequency of R is smaller than the frequency of the photon",
          "The work function of R is smaller than the photon's energy",
          "The photon's intensity is too low to eject electrons",
        ],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/11-energy-levels.png`,
  },
];
