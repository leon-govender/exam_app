// Real DBE past paper: Physical Sciences (Physics) P1, November 2024, National
// (English).
// Source: single combined PDF (question paper + marking guideline) fetched
// from stanmorephysics.com. QP is pages 1-16, memo is pages 17-38 of that
// PDF; page-by-page cross-check of question numbers/marks against the memo's
// answers found no stray or mismatched pages.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here.
//
// Diagrams (MCQ graphs, circuit diagrams, charge-line diagrams, the trolley/
// spring setup, the photoelectric-effect diagram, etc.) are vector line
// drawings rendered directly into the page content stream, not separate
// embedded raster images, so they were cropped from full-page renders rather
// than extracted as clean standalone images. The site's watermark
// ("Stanmorephysics.com" + a faint succulent-plant photo) appears faintly on
// several of them; it doesn't obscure any exam content.
//
// This paper reuses every topic already defined by the Nov 2025 P1 dataset
// (scripts/seed-data/physical-sciences-p1-nov2025.ts) — no new CAPS topic
// appears in this paper that wasn't already covered by that one, so the
// `topics` array below is identical to that file's (topics are upserted by
// key in scripts/seed.ts, so redeclaring them here is safe and required
// since this file is a standalone dataset).
//
// Calculation questions (2.3.1, 2.3.2, 3.1.1, 3.1.2, 3.1.3, 4.2, 4.3.1, 4.4,
// 5.3, 6.3.1, 6.3.2, 7.1, 7.3.3, 8.2.1, 8.2.2, 8.2.3, 8.2.4, 8.3, 9.4, 9.6,
// 10.2.3) use `steps` instead of `marking_points`: the student works the
// problem out on paper as normal, then picks the option they got for each
// mark-earning step (formula, intermediate value, final answer) from a few
// choices, rather than typing anything. Distractors are chosen to trap
// specific real errors (wrong formula, sign flip, wrong given value, using
// the wrong branch's rating), not just wrong final numbers.
//
// FLAG for review: Question 8.3 asks whether bulb L2 continues to glow after
// L1 burns out, and the official DBE memo's answer is "NO", supported by a
// calculation that computes a nonzero current (1,82 A) flowing through the
// remaining L2-R2-r series loop once the L1 branch opens. Taken at face
// value that calculation implies current *does* flow through L2, which
// reads as physically inconsistent with the stated "NO" conclusion. This is
// transcribed exactly as the approved memo states it (verbatim from the
// signed/stamped "APPROVED MARKING GUIDELINE" pages) — not altered or
// corrected — since the task is faithful transcription of the real memo,
// not re-deriving the physics. Flagging it here for a human to double-check
// against the original PDF if this question is ever disputed by a student.
//
// FLAG for review: option D of MCQ 1.10 ("Which of the following statements
// is/are TRUE for the photoelectric effect?") is cut off in the source PDF's
// page render (the page image ends after option C). The memo confirms the
// correct answer is D. Since the standard CAPS-syllabus form of this
// question offers "(ii) and (iii) only" as the remaining combination (light
// has a particle nature; light energy is quantised — both true; "light has
// a wave nature" is false in this context), option D's text below is
// reconstructed as that standard phrasing rather than copied verbatim from
// an unreadable source pixel.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/physics-2024-p1";

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
  year: 2024,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2025/04/NSC-Physical-Sciences-Grade-12-November-2024-P1-and-Memo.pdf" as string | null,
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
    text: "Several forces are acting on a moving object. Which ONE of the following statements is CORRECT when these forces are in equilibrium? (A) The velocity of the object is increasing. (B) The object is moving at a constant velocity. (C) The kinetic energy of the object is decreasing. (D) The object has a non-zero acceleration.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "B — the object is moving at a constant velocity (forces in equilibrium means zero net force, so zero acceleration, so constant velocity).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "A stone thrown vertically downwards from the top of a building takes t seconds to strike the ground. Consider the acceleration-time graph for the motion of the stone (a horizontal line at 9,8 m·s⁻² from t = 0 to t). The effects of air friction are ignored. What does the shaded area between 0 and t seconds, shown in the graph, represent? (A) The final velocity of the stone (B) The change in position of the stone (C) The constant velocity of the stone (D) The change in velocity of the stone",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "D — the change in velocity of the stone (the area under an acceleration-time graph is the change in velocity, Δv = aΔt).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.2-accel-time-graph.png`,
  },
  {
    number: "1", sub_number: "1.3",
    text: "A ball moving horizontally has constant momentum p and kinetic energy K. The ball collides with a wall and bounces back horizontally. Immediately after the collision, the ball has momentum ½p. The mass of the ball remains constant. Which ONE of the following is the kinetic energy of the ball immediately after the collision? (A) ¼K (B) ½K (C) 2K (D) 4K",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "A — ¼K. Since Ek = p²/2m, halving the momentum while mass stays constant means the kinetic energy is scaled by (½)² = ¼.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.3-ball-wall.png`,
  },
  {
    number: "1", sub_number: "1.4",
    text: "A force F acts on a box as the box moves from rest down a rough incline at a constant acceleration. The force is parallel to the incline, as shown in the diagram. Choose the option that CORRECTLY completes the statement: The work done by the gravitational force is ... the work done by the frictional force and the work done by F. (A) equal to the sum of (B) less than the sum of (C) greater than the sum of (D) equal to the difference between",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "C — greater than the sum of. The box accelerates (net force nonzero), so by the work-energy theorem the net work done is positive; the work done by gravity must exceed the (negative) work done by friction and F combined.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.4-force-incline.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "A ball falling vertically downwards from point A strikes the ground with velocity v and bounces, reaching a maximum height at point B. Which ONE of the combinations below is CORRECT for the direction of the impulse on the ball upon striking the ground and the magnitude of the velocity with which the ball leaves the ground? (A) Upward; Greater than v (B) Downward; Greater than v (C) Upward; Less than v (D) Downward; Less than v",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Comprehension",
    model_answer: "C — Upward; Less than v. The impulse on the ball reverses its downward momentum to upward, so it acts upward; since B is at a lower height than A (energy is lost in the bounce), the ball leaves the ground slower than it arrived.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.5-ball-bounce.png`,
  },
  {
    number: "1", sub_number: "1.6",
    text: "The absorption spectrum of an element surrounding a moving star is observed on Earth and found to be red shifted. Which ONE of the following combinations is CORRECT for the movement of the star and the frequency of the observed light on Earth? (A) Away from Earth; Decreased (B) Towards Earth; Decreased (C) Away from Earth; Increased (D) Towards Earth; Increased",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "A — Away from Earth; Decreased. A red shift (longer observed wavelength, lower observed frequency) is caused by a source moving away from the observer.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two small identical spheres, each with mass m and charge +Q, are placed in a vertical cylinder. The spheres remain stationary when their centres are r metres apart. Ignore ALL frictional effects. Which ONE of the following expressions can be used to CORRECTLY calculate the distance r? (A) √(kQ²/mg) (B) √(kmg/Q²) (C) √(Q²/kmg) (D) √(mg/kQ²)",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "A — √(kQ²/mg). At equilibrium the electrostatic repulsion on the top sphere balances its weight: kQ²/r² = mg, so r² = kQ²/mg, giving r = √(kQ²/mg).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.7-spheres-cylinder.png`,
  },
  {
    number: "1", sub_number: "1.8",
    text: "The kilowatt-hour (kWh) is a unit of ... (A) power. (B) electric current. (C) electrical energy. (D) potential difference.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "C — electrical energy (power × time gives energy; a kilowatt-hour is a unit of energy, not power).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.9",
    text: "The diagram below shows a simplified electric motor. The rotation of the coil is observed from the battery. Which ONE of the following statements is CORRECT while the motor is in operation? The coil and the ... (A) slip rings rotate anti-clockwise. (B) slip rings rotate clockwise. (C) commutator rotate clockwise. (D) commutator rotate anti-clockwise.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "D — commutator rotate anti-clockwise (the coil and the split-ring commutator are physically joined and rotate together with the coil).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.9-dc-motor.png`,
  },
  {
    number: "1", sub_number: "1.10",
    text: "Which of the following statements is/are TRUE for the photoelectric effect? The photoelectric effect demonstrates that: (i) Light has a wave nature (ii) Light has a particle nature (iii) Light energy is quantised. (A) (i) only (B) (ii) only (C) (i) and (iii) only (D) (ii) and (iii) only",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "D — (ii) and (iii) only. The photoelectric effect shows light behaves as discrete particles (photons) whose energy is quantised (E = hf); it cannot be explained by treating light purely as a wave.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },

  // ============ QUESTION 2: NEWTON'S LAWS (15 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "In an experiment, a crate of mass 8,5 kg, lying stationary on a rough horizontal table, is connected to a mass hanger by means of a light inextensible string passing over a frictionless pulley. Mass pieces are added to the mass hanger and the acceleration of the crate is measured, repeated for different hanging masses. The results give a sketch graph of acceleration of crate vs hanging mass, which is zero up to 4,2 kg then curves up, reaching acceleration Y at a hanging mass of 7,4 kg. Ignore the effects of air friction. Define the term static friction.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "The force that opposes the tendency of motion of a stationary object relative/parallel to a surface.",
    marking_notes: "Must refer to the force opposing the tendency of motion of a stationary object relative to a surface.",
    marking_points: [{ marks: 2, description: "force that opposes the tendency of motion of a stationary object relative to a surface", keywords: ["opposes", "tendency of motion", "stationary"] }],
    image_url: `${IMG}/2-crate-pulley.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram showing ALL the HORIZONTAL forces acting on the crate JUST BEFORE it starts moving.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Two horizontal forces act on the crate, both drawn from a single point: static friction fs pointing left (opposing the tendency of motion), and the tension T in the string pointing right.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: static friction fs (opposing the pull) and tension T (in the direction of the pull). Vertical forces (weight, normal) need not be shown and are not penalised if included. Max 2.",
    marking_points: [
      { marks: 1, description: "static friction fs drawn opposing the tension", keywords: ["static friction", "fs"] },
      { marks: 1, description: "tension T (or FT/Fstring) drawn in the direction of the pull", keywords: ["tension", "ft", "fstring"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "The graph is zero up to a hanging mass of 4,2 kg (the crate is on the verge of moving at this point). Calculate the coefficient of static friction (μs).",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "At 4,2 kg the hanging mass is on the verge of pulling the crate, so T = mhanging·g = 4,2(9,8) = 41,16 N. At this point fs(max) = T, and fs(max) = μsN = μs(mcrate)g, so μs(8,5)(9,8) = 41,16, giving μs = 0,49.",
    marking_notes: "Marking points: correct value of T (=fs(max)) using the hanging mass at the verge of slipping (41,16 N); formula fs(max) = μsN; correct final answer μs = 0,49.",
    steps: [
      {
        marks: 1,
        description: "What is T (= fs(max)), the tension when the crate is on the verge of moving (hanging mass 4,2 kg)?",
        options: ["41,16 N", "82,32 N", "4,20 N", "45,02 N"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula relates fs(max) to μs and the normal force N?",
        options: ["fs(max) = μsN", "fs(max) = μs/N", "fs(max) = N/μs", "fs(max) = μs + N"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is μs?",
        options: ["0,49", "0,36", "0,60", "4,20"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Calculate the magnitude of the acceleration represented by Y on the graph if the coefficient of kinetic friction between the crate and the table is 0,40 (hanging mass 7,4 kg).",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "For the crate: T − μk(mcrate)g = (mcrate)a, so T − 0,4(8,5)(9,8) = 8,5a ... (1). For the hanging mass: (mhanging)g − T = (mhanging)a, so 7,4(9,8) − T = 7,4a ... (2). Solving (1) and (2) simultaneously gives Y = a = 2,47 m·s⁻².",
    marking_notes: "Marking points: correct equation of motion for the crate using kinetic friction; correct equation of motion for the hanging mass; correct final answer a = 2,47 m·s⁻².",
    steps: [
      {
        marks: 1,
        description: "Which equation of motion applies to the crate (using kinetic friction, μk = 0,40)?",
        options: [
          "T − μk(mcrate)g = (mcrate)a",
          "T − μs(mcrate)g = (mcrate)a",
          "(mcrate)g − T = (mcrate)a",
          "T = μk(mcrate)g",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which equation of motion applies to the hanging mass (7,4 kg)?",
        options: [
          "(mhanging)g − T = (mhanging)a",
          "T − (mhanging)g = (mhanging)a",
          "T = (mhanging)g",
          "(mhanging)g = T·a",
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is Y, the acceleration?",
        options: ["2,47 m·s⁻²", "3,29 m·s⁻²", "1,97 m·s⁻²", "0,83 m·s⁻²"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "A 5 kg block is now placed inside the crate and the experiment is repeated. How will this affect the maximum static frictional force now experienced by the crate? Choose from INCREASES, DECREASES or REMAINS THE SAME. Give a reason for the answer.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. The maximum static friction is directly proportional to the normal force (fs(max) = μsN); adding the 5 kg block increases the crate's weight and therefore the normal force acting on it, so fs(max) increases.",
    marking_notes: "Must state 'increases' and give a valid reason: fs(max) ∝ N, or fs(max) = μsN, or that the normal force acting on the crate increases (because its mass/weight increases).",
    marking_points: [
      { marks: 1, description: "states the maximum static friction increases", keywords: ["increases"] },
      { marks: 1, description: "fs(max) is directly proportional to N (or fs(max) = μsN), and N increases because the crate's mass/weight increases", keywords: ["directly proportional", "normal force increases", "mu s n"] },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (16 marks) ============

  {
    number: "3", sub_number: "3.1.1",
    text: "Ball A is thrown vertically upwards at 12 m·s⁻¹ from the top of a building. Two seconds after ball A was thrown upwards, ball B is thrown vertically downwards at 5,4 m·s⁻¹ from the top of the same building. Both balls, A and B, strike the ground at time t seconds. Ignore the effects of air friction. Using EQUATIONS OF MOTION ONLY, calculate the value of t.",
    marks: 5, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Taking upward as positive, for ball A: Δy = 12t + ½(−9,8)t² ... (1). For ball B (which travels for (t−2) seconds): Δy = −5,4(t−2) + ½(−9,8)(t−2)² ... (2). Both balls fall the same displacement from the top of the building, so equating (1) and (2): 12t + ½(−9,8)t² = −5,4(t−2) + ½(−9,8)(t−2)², which solves to t = 4 s.",
    marking_notes: "Marking points: formula Δy = viΔt + ½aΔt² used for both balls; correct substitution into ball A's equation; correct substitution into ball B's equation (using t−2 for its time of flight); equation for A set equal to equation for B; correct final answer t = 4 s.",
    steps: [
      {
        marks: 1,
        description: "Which approach finds the common time t at which both balls strike the ground?",
        options: [
          "Equate ball A's displacement equation to ball B's displacement equation (both measured from the top of the building)",
          "Use vf = vi + aΔt for ball A alone",
          "Add the two balls' initial velocities together",
          "Use only ball B's equation of motion",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is ball A's displacement equation, Δy in terms of t (upward positive)?",
        options: [
          "Δy = 12t + ½(−9,8)t²",
          "Δy = 12t + ½(9,8)t²",
          "Δy = −12t + ½(−9,8)t²",
          "Δy = 12t",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is t?",
        options: ["4 s", "2 s", "4,9 s", "3,06 s"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Using EQUATIONS OF MOTION ONLY, calculate the value of Z, ball A's position on the position-time graph at t = 2 s (the moment ball B is thrown).",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Δy = viΔt + ½aΔt² = (12)(2) + ½(−9,8)(2)² = 4,4 m upward, so |Z| = ball A's height above the throw point... using the full working: Δy = 12(4) + ½(−9,8)(4)² at t = 4 gives −30,4 m (the total drop), so Z, read at t = 2 s on ball B's line, corresponds to Δy = −5,4(2−2) + ½(−9,8)(2−2)² = 0 for ball B's own equation; the memo's value for Z (using ball A's equation directly at t = 2 s, or ball B's equation at t = 4 s) is 30,4 m.",
    marking_notes: "Marking points: correct formula Δy = viΔt + ½aΔt²; correct substitution (using ball A at t = 4 s, or ball B at t = 4−2 = 2 s); correct final answer Z = 30,4 m.",
    steps: [
      {
        marks: 1,
        description: "Which formula finds Z (using ball B's equation over its own flight time of t − 2 = 2 s)?",
        options: ["Δy = viΔt + ½aΔt²", "vf = vi + aΔt", "vf² = vi² + 2aΔy", "Δy = viΔt"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Z (magnitude)?",
        options: ["30,4 m", "7,35 m", "37,75 m", "58,8 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "Using EQUATIONS OF MOTION ONLY, calculate the value of Y, ball A's maximum height above the top of the building.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "First find the extra rise above the throw point: vf² = vi² + 2aΔy with vf = 0, so 0 = (12)² + 2(−9,8)Δy, giving Δy = 7,35 m above the throw point. Since the throw point is Z = 30,4 m above the ground, Y = 7,35 + 30,4 = 37,75 m.",
    marking_notes: "Marking points: correct formula (vf² = vi² + 2aΔy with vf = 0, or an equivalent approach); correct value for the extra rise above the throw point (7,35 m); correct final answer Y = 37,75 m (adding the 30,4 m from 3.1.2), accepting the range 37,72-37,75 m.",
    steps: [
      {
        marks: 1,
        description: "Which formula finds ball A's extra rise above its throw point (where vf = 0 at the top)?",
        options: ["vf² = vi² + 2aΔy", "Δy = viΔt", "vf = vi + aΔt", "Δy = ½aΔt²"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the extra rise above the throw point?",
        options: ["7,35 m", "30,4 m", "12,00 m", "1,22 m"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is Y, ball A's maximum height above the top of the building?",
        options: ["37,75 m", "30,40 m", "7,35 m", "45,10 m"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "On the same set of axes, sketch the velocity-time graphs for ball A and ball B while they are in free fall. Label the graphs A and B for ball A and ball B respectively. Clearly indicate the following on the graphs: the initial velocity of each ball, the time at which each ball is thrown, and the time at which the balls strike the ground.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Two straight, parallel lines with the same (negative, if upward is positive) gradient: line A starts at v = 12 m·s⁻¹ at t = 0 s; line B starts at v = −5,4 m·s⁻¹ at t = 2 s (starting after A's line, further to the right). Both lines end at t = 4 s.",
    marking_notes: "Marking points: correct initial velocities of both balls with the correct shape (straight lines, both with the same-signed slope); correct initial times for balls A and B, with B starting after A's line begins; both graphs end at t = 4 s; graphs parallel to each other with B's line to the right of A's. Deduct 1 mark overall if the lines are not labelled A and B.",
    marking_points: [
      { marks: 1, description: "both lines are straight with the same-signed (parallel) slope, starting at the correct initial velocities (12 and −5,4 m·s⁻¹)", keywords: ["12", "5 4", "straight line"] },
      { marks: 1, description: "correct initial times, with ball B's line starting after ball A's (at t = 2 s)", keywords: ["t 2", "starts after"] },
      { marks: 1, description: "both graphs end at t = 4 s", keywords: ["4 s", "end at"] },
      { marks: 1, description: "the two lines are parallel to each other, with B to the right of A", keywords: ["parallel", "labelled a", "labelled b"] },
    ],
    image_url: `${IMG}/3-position-time-graph.png`,
  },

  // ============ QUESTION 4: MOMENTUM AND MECHANICAL ENERGY (12 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Two trolleys, A and B, of masses 1,5 kg and 2 kg respectively, are held in a stationary position on a straight, horizontal, frictionless track, with a compressed spring between them. The trolleys are released and the spring takes t seconds to return to its natural length. The spring then falls to the ground. Trolley A moves to the left, while trolley B moves to the right and then up a frictionless inclined plane, rising to a maximum vertical height of 1,5 m. Ignore the rotational effects of the wheels. Write down the principle of conservation of mechanical energy in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The total mechanical energy (sum of gravitational potential energy and kinetic energy) in an isolated (or closed) system remains constant/is conserved.",
    marking_notes: "Must refer to total mechanical energy (sum of Ep and Ek) in an isolated/closed system remaining constant.",
    marking_points: [{ marks: 2, description: "total mechanical energy in an isolated system remains constant/is conserved", keywords: ["total mechanical energy", "remains constant", "conserved"] }],
    image_url: `${IMG}/4-trolleys-spring.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Calculate the speed of trolley B at the bottom of the inclined plane.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Total Emech(bottom) = Total Emech(top): (Ep + Ek)bottom = (Ep + Ek)top. Taking the bottom of the incline as the reference: 0 + ½mv² = mgh + 0, so ½v² = (9,8)(1,5), giving v = 5,42 m·s⁻¹.",
    marking_notes: "Marking points: correct energy-conservation formula (any equivalent valid form); correct substitution; correct final answer v = 5,42 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies to find trolley B's speed at the bottom of the (frictionless) incline?",
        options: [
          "Conservation of mechanical energy: total Emech(bottom) = total Emech(top)",
          "Conservation of momentum: m1v1 = m2v2",
          "Impulse-momentum theorem: FΔt = Δp",
          "Newton's second law: Fnet = ma",
        ],
        correctIndex: 0,
      },
      {
        marks: 3,
        description: "What is trolley B's speed at the bottom of the incline?",
        options: ["5,42 m·s⁻¹", "3,83 m·s⁻¹", "2,71 m·s⁻¹", "14,70 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "For the t seconds that the spring takes to return to its natural length, calculate the change in momentum of trolley B.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Δp = mvf − mvi = 2(5,42 − 0) = 10,84 kg·m·s⁻¹, directed to the right (the direction trolley B moves off in).",
    marking_notes: "Marking points: formula Δp = mvf − mvi; correct substitution using trolley B's mass and speed from 4.2; correct final answer 10,84 kg·m·s⁻¹ to the right.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the change in momentum of trolley B?",
        options: ["Δp = mvf − mvi", "Δp = ½m(vf² − vi²)", "Δp = m/v", "Δp = FΔx"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude and direction of trolley B's change in momentum?",
        options: ["10,84 kg·m·s⁻¹ to the right", "5,42 kg·m·s⁻¹ to the right", "2,71 kg·m·s⁻¹ to the right", "21,68 kg·m·s⁻¹ to the right"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Write down the change in momentum of trolley A for the same t seconds.",
    marks: 1, topicKey: "momentum-impulse", cognitiveLevelName: "Comprehension",
    model_answer: "10,84 kg·m·s⁻¹ to the left (opposite direction), by Newton's third law / conservation of momentum — the spring exerts equal and opposite impulses on the two trolleys.",
    marking_notes: "Positive marking from 4.3.1: same magnitude as trolley B's change in momentum, but in the opposite direction.",
    marking_points: [{ marks: 1, description: "10,84 kg·m·s⁻¹ to the left / opposite direction to trolley B", keywords: ["10 84", "opposite direction", "left"] }],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Calculate the speed of trolley A after t seconds.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Using Δp = mvf − mvi for trolley A (starting from rest): 10,84 = 1,5(vf − 0), giving vf = 7,23 m·s⁻¹.",
    marking_notes: "Marking points: correct formula/approach (Δp = mvf − mvi for trolley A, or conservation of momentum Σpi = Σpf); correct final answer v = 7,23 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "Which approach finds trolley A's speed, using its change in momentum from 4.3.2 (mass 1,5 kg, starting from rest)?",
        options: [
          "Δp = mvf − mvi (or equivalently Σpi = Σpf for the trolley-spring system)",
          "vf = vi + aΔt",
          "Ek = ½mv²",
          "F = ma",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is trolley A's speed?",
        options: ["7,23 m·s⁻¹", "10,84 m·s⁻¹", "5,42 m·s⁻¹", "1,50 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (12 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A constant force F is applied at an angle of 30° to the horizontal on a crate of mass 6 kg that is initially at rest. A constant frictional force of 10 N acts on the crate as it moves from rest at point A along a horizontal surface to point B. The distance between point A and point B is 1,5 m. The speed of the crate at point B is 2 m·s⁻¹. Define the term work done by a force.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The work done on an object by a constant force F is FΔxcosθ, where F is the magnitude of the force, Δx the magnitude of the displacement, and θ the angle between the force and the displacement. (Equivalently: the product of the force and the displacement of the object in the direction of the displacement.)",
    marking_notes: "Must refer to FΔxcosθ with F, Δx and θ (the angle between force and displacement) defined, or the equivalent 'product of force and displacement in the direction of the displacement' wording.",
    marking_points: [{ marks: 2, description: "work done is F Δx cos θ (force magnitude, displacement magnitude, angle between force and displacement)", keywords: ["magnitude of the force", "displacement", "angle between the force"] }],
    image_url: `${IMG}/5-crate-force.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Draw a labelled free-body diagram showing ALL the forces acting on the crate as it moves from A to B.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on the crate, all drawn from a single point: weight w vertically down; normal force N vertically up; applied force F at 30° above the horizontal; and friction f horizontal, opposing the horizontal component of F (i.e. opposing the crate's motion).",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (down), normal force (up), applied force F (at 30° to the horizontal), friction f (horizontal, opposing motion). Max 4.",
    marking_points: [
      { marks: 1, description: "weight (w/Fg/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N) drawn vertically upward", keywords: ["normal force", "fn"] },
      { marks: 1, description: "applied force F drawn at 30° to the horizontal", keywords: ["applied force", "30"] },
      { marks: 1, description: "friction f drawn horizontally opposing the crate's motion", keywords: ["friction", "f"] },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Using ENERGY PRINCIPLES ONLY, calculate the magnitude of force F.",
    marks: 4, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "Wnet = ΔEk (horizontal motion, so ΔEp = 0): WF + Wf = ½m(vf² − vi²). FΔxcosθ + fΔxcos180° = ½(6)(2² − 0²), so F(1,5)cos30° + 10(1,5)cos180° = ½(6)(4), giving F = 20,78 N.",
    marking_notes: "Marking points: correct formula for Wnet or Wnc equal to the change in kinetic energy; correct substitution for the work done by the forces (F at 30°, friction opposing motion); correct final answer F = 20,78 N, accepting the range 20,769-20,79 N.",
    steps: [
      {
        marks: 1,
        description: "Which principle applies (energy principles only, horizontal motion)?",
        options: [
          "Wnet = ΔEk",
          "Conservation of momentum",
          "Wnc = ΔEk + ΔEp (with ΔEp ≠ 0)",
          "F = ma directly",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the work done by friction from A to B?",
        options: ["−15 J", "15 J", "−10 J", "−1,5 J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is F?",
        options: ["20,78 N", "18,00 N", "20,00 N", "26,00 N"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "A 2 kg object is placed in the crate. What effect will this have on the work done by the same force F when the crate is again moved from point A to point B? Write only INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same. The work done by F depends on F, the displacement, and the angle between them (W = FΔxcosθ) — none of which change when the crate's mass changes, so the work done by F is unaffected.",
    marking_notes: "Accept only 'remains the same'.",
    marking_points: [{ marks: 2, description: "remains the same", keywords: ["remains the same"] }],
  },

  // ============ QUESTION 6: THE DOPPLER EFFECT (12 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "A stationary listener, standing on the roadside, records the wavelength of the sound emitted by the siren of a police car travelling at a constant velocity. In the wavelength-time graph (NOT drawn to scale), λL (0,40 m) is the wavelength of the sound recorded by the listener and λS (0,38 m) is the wavelength of the sound emitted by the siren. Take the speed of sound in air to be 343 m·s⁻¹. Name the phenomenon that explains why the wavelengths shown in the graph differ.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The Doppler Effect.",
    marking_notes: "Accept only 'Doppler Effect'.",
    marking_points: [{ marks: 1, description: "Doppler Effect", keywords: ["doppler"] }],
    image_url: `${IMG}/6-wavelength-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "Is the car moving TOWARDS or AWAY FROM the listener? Give a reason for the answer.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Away from the listener. The wavelength of the sound detected by the listener (λL = 0,40 m) is longer than the wavelength of the sound emitted by the source (λS = 0,38 m) — equivalently, the frequency detected is lower than the frequency emitted — which only happens when the source is moving away.",
    marking_notes: "Must state 'away from' and a valid reason: λL > λS, or fL < fS, in words or symbols.",
    marking_points: [
      { marks: 1, description: "away from the listener", keywords: ["away from"] },
      { marks: 1, description: "wavelength detected by the listener is longer than the wavelength emitted by the source (or frequency detected is lower than frequency emitted)", keywords: ["wavelength", "longer", "lower"] },
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "Calculate the frequency of the sound emitted by the siren.",
    marks: 3, topicKey: "doppler-effect", cognitiveLevelName: "Application",
    model_answer: "Using v = fλ with the wavelength emitted by the source: 343 = f(0,38), giving f = 902,63 Hz.",
    marking_notes: "Formula v = fλ, correct substitution using λS = 0,38 m, correct final answer f = 902,63 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the speed of sound, frequency and wavelength?",
        options: ["v = fλ", "v = f/λ", "v = f + λ", "f = v + λ"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the frequency emitted by the siren?",
        options: ["902,63 Hz", "858,00 Hz", "130,30 Hz", "343,00 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Calculate the magnitude of the velocity of the car.",
    marks: 6, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "First find the frequency detected by the listener: v = fLλL, so 343 = fL(0,40), giving fL = 857,5 Hz. Since the car is moving away from the stationary listener: fL = v/(v + vs) × fs, so 857,5 = [343/(343 + vs)](902,63), giving vs = 18,05 m·s⁻¹.",
    marking_notes: "Marking points: v = fλ used to find fL (857,5 Hz); correct Doppler formula for a source moving away from a stationary listener; correct substitution; correct final answer vs = 18,05 m·s⁻¹, accepting the range 18,05-18,45 m·s⁻¹.",
    steps: [
      {
        marks: 1,
        description: "What is fL, the frequency detected by the listener (using v = fλ with λL = 0,40 m)?",
        options: ["857,5 Hz", "902,63 Hz", "137,20 Hz", "343,00 Hz"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which Doppler formula applies (car moving away from a stationary listener)?",
        options: ["fL = v/(v + vs) × fs", "fL = v/(v − vs) × fs", "fL = (v − vs)/v × fs", "fL = v/(v + vs)² × fs"],
        correctIndex: 0,
      },
      {
        marks: 4,
        description: "What is vs, the speed of the car?",
        options: ["18,05 m·s⁻¹", "15,79 m·s⁻¹", "24,15 m·s⁻¹", "343,00 m·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (14 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "P is a +2 nC point charge. X is a point 6 cm away from charge P. Calculate the magnitude of the electric field at X.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = kQ/r² = (9×10⁹)(2×10⁻⁹)/(0,06)² = 5×10³ N·C⁻¹.",
    marking_notes: "Formula E = kQ/r², correct substitution, correct final answer 5×10³ N·C⁻¹ (5 000 N·C⁻¹).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electric field due to a point charge?",
        options: ["E = kQ/r²", "E = kQ/r", "F = kQ1Q2/r²", "V = kQ/r"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the magnitude of the electric field at X?",
        options: ["5×10³ N·C⁻¹", "5×10⁴ N·C⁻¹", "1,8×10³ N·C⁻¹", "3×10³ N·C⁻¹"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/7-charges-PX.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Point charge S, with a charge of −2 nC, is placed 4 cm to the right of charge P. Draw the resultant electric field pattern due to charges P and S.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Field lines leave the positive charge P and curve across to enter the negative charge S, forming the characteristic dipole pattern: lines point from P towards S, correctly shaped between and around the charges, none crossing.",
    marking_notes: "Marking points: correct direction of the field lines (from + to −); correct shape of the field lines between the charges and on the outside of the charges; no field lines crossing each other, and lines touching (not entering) the charges.",
    marking_points: [
      { marks: 1, description: "correct direction of field lines (from P towards S)", keywords: ["direction", "from p", "towards s"] },
      { marks: 1, description: "correct dipole shape of the field lines between and around the charges", keywords: ["shape", "field lines"] },
      { marks: 1, description: "field lines do not cross, and touch (not enter) the charges", keywords: ["not cross", "touch"] },
    ],
    image_url: `${IMG}/7-charges-PS.png`,
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "A third point charge T is placed 2 cm to the right of S. Point charge T experiences a net electrostatic force of 2,5 × 10⁻⁴ N to the left. State Coulomb's law in words.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "The magnitude of the electrostatic force exerted by one point charge on another point charge is directly proportional to the product of the magnitudes of their charges and inversely proportional to the square of the distance between them.",
    marking_notes: "Must refer to the electrostatic force between two point charges being directly proportional to the product of the charges and inversely proportional to the square of the distance between them.",
    marking_points: [{ marks: 2, description: "force directly proportional to the product of the charges and inversely proportional to the square of the distance between them", keywords: ["directly proportional", "product of the charges", "square of the distance"] }],
    image_url: `${IMG}/7-charges-PST.png`,
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "What is the polarity of charge T? Choose from POSITIVE or NEGATIVE.",
    marks: 1, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Positive. Charge S is negative, so it attracts positive charges and repels negative ones; for the net force on T from P (repulsion, since P is far and positive) and S (attraction if T negative, repulsion if T positive) to sum to a leftward (toward P/S) force, T must be positive so S attracts it.",
    marking_notes: "Accept only 'positive'.",
    marking_points: [{ marks: 1, description: "positive", keywords: ["positive"] }],
  },
  {
    number: "7", sub_number: "7.3.3",
    text: "Calculate the magnitude of charge T.",
    marks: 5, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "Using Coulomb's law for both S-T (r = 0,02 m) and P-T (r = 0,06 m), with Fnet = FST − FPT = 2,5×10⁻⁴ N: (9×10⁹)(2×10⁻⁹)QT/(0,02)² − (9×10⁹)(2×10⁻⁹)QT/(0,06)² = 2,5×10⁻⁴, giving QT = 6,25×10⁻⁹ C.",
    marking_notes: "Marking points: formula F = kQ1Q2/r²; correct substitution for both FST and FPT in terms of QT; net force set equal to 2,5×10⁻⁴ N with the correct combination (FST − FPT); correct final answer QT = 6,25×10⁻⁹ C.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the electrostatic force between two point charges?",
        options: ["F = kQ1Q2/r²", "F = kQ/r²", "F = kQ1Q2/r", "F = Q1Q2/kr²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Which combination of forces on T gives the net force of 2,5×10⁻⁴ N to the left (S is closer to T than P is)?",
        options: [
          "Fnet = FST − FPT",
          "Fnet = FPT − FST",
          "Fnet = FST + FPT",
          "Fnet = FST × FPT",
        ],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is QT, the magnitude of charge T?",
        options: ["6,25×10⁻⁹ C", "2,50×10⁻⁹ C", "1,25×10⁻⁸ C", "6,25×10⁻⁸ C"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (21 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "L1 and L2 are two light bulbs that have the following ratings: L1: 36 W; 20 V and L2: 48 W; 32 V. The two bulbs are connected in a circuit with a battery of internal resistance 0,6 Ω, resistors R1 and R2 (4 Ω), and ammeters A1 and A2, as shown in the circuit diagram. Define the term power.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The rate at which work is done, or energy is transferred/dissipated (work done per unit time).",
    marking_notes: "Must refer to the rate at which work is done or energy is transferred (work done per unit time).",
    marking_points: [{ marks: 2, description: "rate at which work is done / energy transferred (work done per unit time)", keywords: ["rate at which", "work is done", "per unit time"] }],
    image_url: `${IMG}/8-circuit.png`,
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "If both light bulbs operate as RATED, calculate the reading on ammeter A2 (in series with L2).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "For L2 operating as rated: P = VI, so 48 = 32I, giving I = 1,5 A.",
    marking_notes: "Formula P = VI (or an equivalent route via P = I²R and V = IR), correct substitution using L2's rated power and voltage, correct final answer 1,5 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula relates L2's rated power, voltage and current?",
        options: ["P = VI", "P = I²R only, without first finding R", "P = V/I", "V = P + I"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the reading on ammeter A2?",
        options: ["1,5 A", "1,8 A", "0,67 A", "80,00 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "If both light bulbs operate as RATED, calculate the reading on ammeter A1 (the total current from the battery).",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "For L1 operating as rated: P = VI, so 36 = 20I, giving I = 1,8 A (the current through the R1-L1 branch). Since the A2-L2 branch and the R1-L1 branch are parallel, A1 reads the total current: ITOT = 1,5 + 1,8 = 3,3 A.",
    marking_notes: "Marking points: current through L1 found using P = VI (1,8 A); A1's reading found as the sum of the two parallel branch currents (1,5 A from 8.2.1 plus 1,8 A); correct final answer 3,3 A.",
    steps: [
      {
        marks: 1,
        description: "What is the current through L1 (rated 36 W, 20 V)?",
        options: ["1,8 A", "1,5 A", "0,56 A", "720,00 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the reading on ammeter A1 (the total current from the battery)?",
        options: ["3,3 A", "1,8 A", "1,5 A", "6,6 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "If both light bulbs operate as RATED, calculate the resistance of resistor R1.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "The R1-L1 branch is in parallel with the A2-L2 branch, so it also has 32 V across it (L2's rated voltage): VR1 + VL1 = 32, so VR1 = 32 − 20 = 12 V. Since the current through this branch is 1,8 A: V = IR1, so 12 = 1,8R1, giving R1 = 6,67 Ω.",
    marking_notes: "Marking points: correct voltage across R1 found using the parallel-branch voltage (12 V); formula V = IR; correct final answer R1 = 6,67 Ω.",
    steps: [
      {
        marks: 1,
        description: "What is the voltage across R1 (the R1-L1 branch shares the same 32 V as the L2 branch, and VR1 + VL1 = 32 V)?",
        options: ["12 V", "20 V", "32 V", "8 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula relates VR1, the current through R1 (1,8 A) and R1?",
        options: ["V = IR", "P = VI", "P = I²R", "R = P/I"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is R1?",
        options: ["6,67 Ω", "17,77 Ω", "11,11 Ω", "21,33 Ω"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "If both light bulbs operate as RATED, calculate the emf of the battery.",
    marks: 4, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "The voltage across R2 (which is in series with the parallel combination): V2 = ITOT × R2 = 3,3(4) = 13,2 V. The emf: ε = Vext + Ir = (13,2 + 32) + 3,3(0,6) = 47,18 V.",
    marking_notes: "Marking points: correct voltage across R2 (13,2 V); formula ε = Vext + Ir; correct substitution; correct final answer 47,18 V, accepting the range 47,16-47,19 V.",
    steps: [
      {
        marks: 1,
        description: "What is the voltage across R2 (V2 = ITOT × R2, using the total current 3,3 A)?",
        options: ["13,2 V", "16 V", "4 V", "3,3 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula gives the emf in terms of the external voltage and the internal resistance drop?",
        options: ["ε = Vext + Ir", "ε = Vext − Ir", "ε = Ir − Vext", "ε = Vext/Ir"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the emf of the battery?",
        options: ["47,18 V", "45,20 V", "13,98 V", "49,16 V"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Bulb L1 burns out after a while. Assume that the resistance of bulb L2 remains constant. Will bulb L2 continue to glow after bulb L1 burns out? Choose from YES or NO. Support the answer with a suitable calculation.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "RL2 = V²/P = 32²/48 = 21,33 Ω. With L1 burnt out, the current in the remaining circuit is found from ε = I(R2 + RL2 + r): 47,18 = I(4 + 21,33 + 0,6), giving I = 1,82 A. According to the official memo, the conclusion is NO.",
    marking_notes: "Marking points: RL2 found from its rated values (21,33 Ω); correct total-resistance equation for the remaining circuit after L1 burns out; correct current value (1,82 A); conclusion NO, as stated in the official memo. NOTE: transcribed exactly as the approved DBE marking guideline states it — flagged for review since a nonzero current through the remaining L2-R2-r loop appears, on its face, to indicate L2 would still carry current.",
    steps: [
      {
        marks: 1,
        description: "What is the resistance of L2 (from its rated values, RL2 = V²/P)?",
        options: ["21,33 Ω", "17,77 Ω", "11,11 Ω", "6,67 Ω"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "With L1 burnt out (open), what is the current I in the remaining series circuit (ε = I(R2 + RL2 + r))?",
        options: ["1,82 A", "1,50 A", "3,30 A", "47,18 A"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "Will bulb L2 continue to glow?",
        options: ["NO", "YES, at the same brightness as before", "YES, but dimmer than before", "Cannot be determined from the given information"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (13 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "The graph shows how the induced current in a generator varies with time: current rises and falls between 0 and 1,2 A in a series of positive humps, never going negative, with a period of 0,02 s. Name the type of generator. Choose from AC or DC.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "DC (generator).",
    marking_notes: "Accept only 'DC'.",
    marking_points: [{ marks: 1, description: "DC", keywords: ["dc"] }],
    image_url: `${IMG}/9-current-time-graph1.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "State the energy conversion that takes place in this generator while it is in operation.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Mechanical (kinetic) energy is converted to electrical energy.",
    marking_notes: "Must state mechanical/kinetic to electrical, in that order, for full marks.",
    marking_points: [{ marks: 2, description: "mechanical/kinetic energy converted to electrical energy", keywords: ["mechanical", "electrical energy"] }],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Give a reason why this generator is NOT suitable for the transmission of electricity over long distances.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "A DC current/voltage cannot be stepped up or down by a transformer, so the power/energy/voltage loss over long transmission distances cannot be reduced (and would be too large).",
    marking_notes: "Accept: power/energy/voltage loss cannot be reduced (will be too large); or the current cannot be made smaller; or transformers do not work with DC / DC cannot be stepped up or down.",
    marking_points: [{ marks: 1, description: "power/energy/voltage loss cannot be reduced, since DC cannot be stepped up or down by a transformer", keywords: ["cannot be reduced", "stepped up", "transformer"] }],
  },
  {
    number: "9", sub_number: "9.4",
    text: "Calculate the frequency at which the coil rotates in the generator.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "f = 1/T = 1/0,02 = 50 Hz.",
    marking_notes: "Formula f = 1/T (using the period read off the graph, T = 0,02 s), correct final answer 50 Hz.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives frequency from the period T shown on the graph?",
        options: ["f = 1/T", "f = T", "f = 2T", "f = T/2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the frequency of rotation?",
        options: ["50 Hz", "100 Hz", "20 Hz", "0,02 Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.5",
    text: "Define the term root mean square (rms) current.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "Root-mean-square current is the alternating current that dissipates the same amount of energy as an equivalent DC current.",
    marking_notes: "Must refer to the alternating current that dissipates the same energy as an equivalent DC current.",
    marking_points: [{ marks: 2, description: "alternating current that dissipates the same energy as an equivalent DC current", keywords: ["alternating current", "same amount of energy", "equivalent"] }],
  },
  {
    number: "9", sub_number: "9.6",
    text: "Calculate the root-mean-square current delivered by the generator.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Irms = Imax/√2 = 1,2/√2 = 0,85 A.",
    marking_notes: "Formula Irms = Imax/√2, correct substitution using the peak current from the graph (1,2 A), correct final answer 0,85 A.",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the rms current from the peak current?",
        options: ["Irms = Imax/√2", "Irms = Imax × √2", "Irms = Imax/2", "Irms = Imax²"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the rms current?",
        options: ["0,85 A", "1,20 A", "1,70 A", "0,60 A"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "9", sub_number: "9.7",
    text: "The graph below shows how the induced current varies with time after a change was made to the operation of the generator: the current now peaks at 0,6 A, with the shape of the graph stretched out to a period of 0,04 s. Fully describe the change that was made.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "The speed of rotation of the coil was halved.",
    marking_notes: "Must state that the speed of rotation was halved. Accept: the frequency was halved, or the period was doubled, as equivalent full-credit answers. If only 'speed of rotation slower/frequency decreased/period increased' without the specific factor, award half credit.",
    marking_points: [{ marks: 2, description: "speed of rotation of the coil was halved (accept frequency halved / period doubled)", keywords: ["speed of rotation", "halved"] }],
    image_url: `${IMG}/9-current-time-graph2.png`,
  },

  // ============ QUESTION 10: PHOTOELECTRIC EFFECT (15 marks) ============

  {
    number: "10", sub_number: "10.1",
    text: "Define the term photoelectric effect.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The process whereby electrons are ejected from a metal surface when light (of suitable frequency) is incident/shining on that surface.",
    marking_notes: "Must refer to electrons being ejected from a metal surface when light shines on it.",
    marking_points: [{ marks: 2, description: "electrons are ejected from a metal surface when light shines on it", keywords: ["electrons are ejected", "metal surface", "incident"] }],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "Red light, blue light and green light are shone simultaneously on a sheet of potassium. Each colour of light consists of a single frequency. Two maximum kinetic energies of the ejected electrons are possible, namely 6,96 × 10⁻²⁰ J and 2,65 × 10⁻²⁰ J. Each ejected electron has only one of these maximum kinetic energies. Which colour of light is responsible for ejecting electrons that have a maximum kinetic energy equal to 2,65 × 10⁻²⁰ J?",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Green.",
    marking_notes: "Accept only 'green'.",
    marking_points: [{ marks: 1, description: "green", keywords: ["green"] }],
    image_url: `${IMG}/10-photoelectric-setup.png`,
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Explain the answer to QUESTION 10.2.1.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Only green and blue light eject electrons (red light does not eject electrons, since its frequency is below the threshold frequency). Green light has a lower frequency than blue light (photons of blue light have more energy than photons of green light), and therefore ejects electrons with the lower of the two maximum kinetic energies.",
    marking_notes: "Marking points: only green and blue light eject electrons / red light does not eject electrons; green has a lower frequency than blue (or blue has more energy per photon), so it ejects the lower-energy electrons.",
    marking_points: [
      { marks: 1, description: "only green and blue light eject electrons; red light does not eject electrons", keywords: ["red light does not", "only green and blue"] },
      { marks: 1, description: "green has a lower frequency than blue (blue photons carry more energy), so it ejects electrons with the lower maximum kinetic energy", keywords: ["lower frequency", "green", "blue"] },
    ],
  },
  {
    number: "10", sub_number: "10.2.3",
    text: "The electrons with a maximum kinetic energy of 2,65 × 10⁻²⁰ J are ejected by light that has a frequency of 5,85 × 10¹⁴ Hz. Calculate the frequency of the light that ejected electrons with a maximum kinetic energy of 6,96 × 10⁻²⁰ J.",
    marks: 5, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "Using the green-light data to find the work function: hf = W0 + Ek(max), so (6,63×10⁻³⁴)(5,85×10¹⁴) = W0 + 2,65×10⁻²⁰, giving W0 = 3,61×10⁻¹⁹ J. Using the blue-light data: (6,63×10⁻³⁴)f = 3,61×10⁻¹⁹ + 6,96×10⁻²⁰, giving f = 6,5×10¹⁴ Hz.",
    marking_notes: "Marking points: formula hf = W0 + Ek(max); correct substitution using the green-light data to find W0 (3,61×10⁻¹⁹ J); correct substitution using the blue-light data and W0 to find f; correct final answer f = 6,5×10¹⁴ Hz.",
    steps: [
      {
        marks: 1,
        description: "Which equation relates a photon's energy, the metal's work function, and the ejected electron's maximum kinetic energy?",
        options: ["hf = W0 + Ek(max)", "hf = W0 − Ek(max)", "hf = W0 × Ek(max)", "Ek(max) = hf + W0"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the work function W0 of potassium (using the green light's frequency and kinetic energy)?",
        options: ["3,61×10⁻¹⁹ J", "6,63×10⁻³⁴ J", "2,65×10⁻²⁰ J", "3,98×10⁻¹⁹ J"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is the frequency of the light that ejected electrons with Ek(max) = 6,96×10⁻²⁰ J?",
        options: ["6,5×10¹⁴ Hz", "5,85×10¹⁴ Hz", "7,2×10¹⁴ Hz", "1,05×10¹⁵ Hz"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "10", sub_number: "10.2.4",
    text: "The intensity of the red light is increased, while the intensities of the blue light and green light remain the same. What effect will this change have on the rate at which electrons are ejected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same. Red light's frequency is below the threshold frequency for potassium, so it does not eject any electrons regardless of its intensity — increasing its intensity still ejects zero electrons, so the overall rate of electron ejection (from blue and green light only) is unaffected.",
    marking_notes: "Accept only 'remains the same'.",
    marking_points: [{ marks: 2, description: "remains the same", keywords: ["remains the same"] }],
  },
  {
    number: "10", sub_number: "10.3.1",
    text: "Some of the atoms of a hot gas, made up of a single element, are in an excited state. The spectrum formed by the hot gas is observed on a screen in a darkened room. The spectrum consists of specific coloured lines on a black background. Name the type of spectrum formed.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "(Line) emission spectrum.",
    marking_notes: "Accept 'emission spectrum' or 'line emission spectrum'.",
    marking_points: [{ marks: 1, description: "(line) emission spectrum", keywords: ["emission spectrum"] }],
  },
  {
    number: "10", sub_number: "10.3.2",
    text: "Explain the presence of the coloured lines in the spectrum.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The coloured lines represent the (associated) frequencies/wavelengths/energy of the emitted photons when atoms/electrons move to a lower energy level.",
    marking_notes: "Must refer to the coloured lines representing the frequency/wavelength/energy of emitted photons, produced when electrons/atoms move to a lower energy level.",
    marking_points: [{ marks: 2, description: "coloured lines represent the frequency/wavelength/energy of photons emitted when electrons move to a lower energy level", keywords: ["frequencies", "emitted", "lower energy level"] }],
  },
];

// No exam_schedule entries here — mirrors physical-sciences-p1-nov2025.ts.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
