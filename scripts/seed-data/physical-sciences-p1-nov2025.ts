// Real DBE past paper: Physical Sciences (Physics) P1, November 2025, National
// (English).
// Source: official DBE question paper (fetched from stanmorephysics.com) +
// official DBE marking guideline (fetched separately from saexampapers.co.za).
// Both cross-verified page-by-page against each other; no stray/mismatched
// pages were found in either PDF for this paper.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here — Physics P1 has no excluded
// mapwork-style section like Geography does.
//
// Diagrams (MCQ graphs, circuit diagrams, charge-line diagrams, the
// generator sketch, the energy-level diagram, etc.) are vector line-drawings
// rendered directly into the page content stream, not separate embedded
// raster images, so they were cropped from full-page renders rather than
// extracted as clean standalone images. The site's watermark
// ("Stanmorephysics.com" + a faint succulent-plant photo) appears faintly on
// several of them; it doesn't obscure any exam content.
//
// This is the first Physical Sciences paper ingested into this app, so this
// file also defines the Physical Sciences subject, its four CAPS cognitive
// levels (Recall / Comprehension / Application / Evaluation — note this
// differs from Geography's Recall/Comprehension/Analysis/Evaluation), and
// its topics.
//
// IMPORTANT grader caveat: the keyword-matching grader in src/lib/grader.ts
// was designed for Geography's descriptive-prose answers. For Physics,
// correct answers are numeric (e.g. "33,56°", "0,38", "17,97 m·s⁻¹").
// grader.ts's significantWords() filter drops any keyword token of length
// <= 2, and normalize() splits on commas — so a numeric answer like "0,38"
// becomes tokens "0" and "38", both of which are silently dropped by the
// length filter before matching even starts. In practice this means
// marking_points keyed on final numeric answers will almost never award
// marks automatically. To keep grading useful at all, marking_points below
// are keyed on the physics concepts/formula names a candidate's working
// would contain (e.g. "coefficient of static friction", "impulse
// momentum theorem") rather than on the numbers themselves, and MCQ answers
// use the single-letter trick (matches only if the letter is the FIRST word
// of the answer, per phraseMatches()). Full model answers with the actual
// numeric working are always given in model_answer/marking_notes for
// students to self-check against, but grader auto-marking of calculation
// steps should be treated as unreliable until grader.ts is adapted for
// numeric marking (e.g. tolerance-based numeric comparison) — flagged here
// for follow-up, not solved in this ingestion.

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/physics-2025-p1";

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
  year: 2025,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2025/11/NSC-Physical-Sciences-Grade-12-November-2025-P1-only.pdf" as string | null,
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
  marking_points: MarkingPoint[];
  image_url?: string;
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "The net force acting on an object on a horizontal surface is always ... (A) in the direction of motion of the object. (B) in the direction of acceleration of the object. (C) zero when the object moves at constant acceleration. (D) increasing when the object moves at constant acceleration.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Comprehension",
    model_answer: "B — in the direction of acceleration of the object.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "A hot-air balloon is moving upwards at a constant velocity. A small stone is dropped from THE BALLOON. Which ONE of the following graphs (A–D) represents the motions of the balloon and the stone? Ignore the effects of friction on the stone.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "B — the balloon's velocity stays constant (horizontal line) while the stone's velocity starts at the balloon's velocity and decreases through zero to negative values (constant deceleration due to gravity).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.2-velocity-graphs.png`,
  },
  {
    number: "1", sub_number: "1.3",
    text: "A motor fixed to the ground lifts a box vertically upwards at a CONSTANT VELOCITY. Consider: (i) the rate at which work is done by the motor on the box increases; (ii) the rate at which work is done by the motor on the box is constant; (iii) the mechanical energy of the box increases; (iv) the mechanical energy of the box is constant. Which of the statements are CORRECT? (A) (i) and (iii) only (B) (ii) and (iv) only (C) (ii) and (iii) only (D) (i) and (iv) only",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "C — (ii) and (iii) only: constant velocity means constant force so constant power (rate of work), and rising height means increasing mechanical (potential) energy.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.3-motor-box.png`,
  },
  {
    number: "1", sub_number: "1.4",
    text: "Objects P and Q, with masses m and 2m respectively, have the same momentum. The velocity of P is ... (A) equal to the velocity of Q. (B) half the velocity of Q. (C) twice the velocity of Q. (D) four times the velocity of Q.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "C — twice the velocity of Q (since p = mv is equal and P has half the mass of Q, P's velocity must be double Q's).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "A block moves along a rough horizontal surface while a horizontal force F of magnitude 18 N and a constant kinetic frictional force of magnitude 6 N act on it. Which ONE of the following combinations of ACCELERATION and NET WORK DONE ON THE BLOCK is CORRECT? (A) Constant acceleration, Increasing net work (B) Increasing acceleration, Constant net work (C) Increasing acceleration, Increasing net work (D) Constant acceleration, Constant net work",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "A — constant acceleration (net force of 12 N stays constant since F and friction are both constant), but net work done increases (work = force × increasing displacement).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "A star's spectrum, observed from Earth, is red shifted. Which ONE of the following statements is CORRECT? (A) The speed of light is increasing. (B) The star is moving towards Earth. (C) The frequency of each spectral line has increased. (D) The wavelength of each spectral line has increased.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "D — the wavelength of each spectral line has increased (a red shift is an increase in observed wavelength, caused by the star moving away from Earth).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Three point charges, Q1, Q2 and Q3, are fixed in a straight line. Q1 is r metres from Q2, while Q3 is 2r metres from Q2. The magnitude of the charge on Q2 is q. The net electrostatic force on charge Q1 is zero. What is the magnitude of charge Q3 in terms of q? (A) 1/9 q (B) 1/3 q (C) 3q (D) 9q",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "D — 9q. For the net force on Q1 to be zero, the force from Q3 (at distance 3r) must equal the force from Q2 (at distance r). Since F ∝ Q/d², and Q3 is 3 times as far, Q3 must be 3² = 9 times as large as Q2's charge to balance: Q3 = 9q.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Three identical light bulbs, X, Y and Z, are connected in a circuit. Switch S is initially closed. Ignore the internal resistance of the battery. Switch S is now opened. How will the brightness of bulbs X and Y be affected? (A) X increases, Y decreases (B) X decreases, Y increases (C) X increases, Y increases (D) X decreases, Y decreases",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "B — X decreases, Y increases. Opening S removes bulb Z from the circuit, increasing total resistance, so total current (through X) decreases; with Z removed, more of that (smaller) current is available to Y's branch, so Y's current, and brightness, increases.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.8-circuit-bulbs.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "How does the commutator in a DC motor ensure that the coil rotates continuously in ONE direction? (A) By reducing friction (B) By converting AC to DC (C) By reversing the direction of the current in the coil (D) By maintaining electrical contact between the external and the internal circuits",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "C — by reversing the direction of the current in the coil every half turn, so the torque keeps acting in the same rotational direction.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "Light of different wavelengths is incident on a metal surface. Which ONE of the following graphs shows the CORRECT relationship between the maximum kinetic energy of the photoelectrons, Ek(max), and the inverse of the wavelength of the incident light, 1/λ?",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "C — a straight line with a positive gradient that has a positive x-intercept (Ek(max) is zero below the threshold frequency/1/λ, then increases linearly), consistent with Ek(max) = (hc)(1/λ) − W₀.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.10-ek-graphs.png`,
  },

  // ============ QUESTION 2: NEWTON'S LAWS (17 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "A block of mass 5 kg is at rest on a rough horizontal surface. A constant force F of magnitude 18 N acts on the block at an angle θ to the horizontal, and the block experiences maximum static friction. State Newton's Second Law of Motion in words.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Recall",
    model_answer: "When a net/resultant force acts on an object, the object will accelerate in the direction of the force, and the acceleration is directly proportional to the force and inversely proportional to the mass of the object. (Equivalently: the net force acting on an object is equal to the rate of change of momentum of the object, in the direction of the net force.)",
    marking_notes: "Full statement including 'net/resultant force', 'accelerate in the direction of the force', and 'directly proportional to force, inversely proportional to mass' required for full marks. The rate-of-change-of-momentum version is also accepted in full.",
    marking_points: [
      { marks: 1, description: "net/resultant force causes acceleration in the direction of the force", keywords: ["net force", "resultant force", "direction of the force"] },
      { marks: 1, description: "acceleration directly proportional to force and inversely proportional to mass", keywords: ["directly proportional", "inversely proportional", "mass"] },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Draw a labelled free-body diagram showing ALL the forces acting on the 5 kg block as force F (at angle θ) acts on it and it experiences maximum static friction on the rough horizontal surface.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Four forces act on the block, all drawn from a single point: weight w (Fg) vertically down; normal force N vertically up; applied force F at angle θ above the horizontal; and maximum static friction fs(max) horizontal, opposing the horizontal component of F.",
    marking_notes: "One mark per correctly labelled force with a correctly-directed arrow: weight (down), normal force (up), applied force F (at angle θ), friction fs(max) (horizontal, opposing motion tendency). Max 4.",
    marking_points: [
      { marks: 1, description: "weight (Fg/Fw/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (FN) drawn vertically upward", keywords: ["normal force", "fn"] },
      { marks: 1, description: "applied force F drawn at angle θ", keywords: ["applied force", "18 n"] },
      { marks: 1, description: "maximum static friction fs(max) drawn horizontally opposing F's horizontal component", keywords: ["friction", "fs max", "static friction"] },
    ],
    image_url: `${IMG}/2-block-angle.png`,
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "The horizontal component of force F (18 N at angle θ) is 15 N. Calculate θ.",
    marks: 2, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Fx = F cos θ, so 15 = 18 cos θ, giving θ = 33,56°.",
    marking_notes: "Formula Fx = Fcosθ (or equivalent using the vertical component and tanθ/sinθ), correct substitution, and final answer θ = 33,56°.",
    marking_points: [
      { marks: 1, description: "correct formula relating the horizontal component to F and θ (Fx = Fcosθ)", keywords: ["fcos", "cos theta", "horizontal component"] },
      { marks: 1, description: "correct final answer for θ", keywords: ["33 56", "theta"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Calculate the coefficient of static friction between the block and the surface.",
    marks: 5, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Vertical component of F: Fy = √(18² − 15²) = 9,95 N. Normal force: N = mg − Fy = (5)(9,8) − 9,95 = 39,05 N. Since the block experiences maximum static friction, fs(max) = μsN, so 15 = μs(39,05), giving μs = 0,38.",
    marking_notes: "Marking points: formula fs(max) = μsN; correct substitution of fs(max) = 15 N; correct calculation of the vertical component Fy; correct subtraction to find N from Fg and Fy; correct final answer μs = 0,38.",
    marking_points: [
      { marks: 1, description: "formula fs(max) = μsN used", keywords: ["fs max", "mu", "normal force"] },
      { marks: 1, description: "correct substitution of the maximum static friction value (15 N)", keywords: ["15", "fs max"] },
      { marks: 1, description: "correct calculation of the vertical component of F", keywords: ["vertical component", "9 95"] },
      { marks: 1, description: "correct subtraction to find the normal force N from weight and the vertical component", keywords: ["normal force", "weight", "39 05"] },
      { marks: 1, description: "correct final coefficient of static friction (0,38)", keywords: ["coefficient of static friction", "0 38"] },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "Angle θ is decreased while the magnitude of force F remains constant. How will the friction acting on the block be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME. Explain the answer.",
    marks: 4, topicKey: "newtons-laws", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. As θ decreases, the vertical component of F decreases, so the normal force N increases (since N = mg − Fy and Fy is now smaller). Since μs stays constant and fs(max) is directly proportional to N, fs(max) increases.",
    marking_notes: "Any one of the three valid lines of reasoning is accepted in full: (1) INCREASES because the vertical component of F decreases, N increases, and fs(max) ∝ N with μs constant; (2) DECREASES because the horizontal component of F increases, so the block will move (Fnet increases) and fk < fs(max); (3) REMAINS THE SAME, explained using a relevant calculation with a chosen μk < μs and θ that gives fk = 15 N. Any internally consistent option can earn full marks.",
    marking_points: [
      { marks: 1, description: "states the direction of change (increases / decreases / remains the same)", keywords: ["increases", "decreases", "remains the same"] },
      { marks: 1, description: "vertical or horizontal component of F changes as θ decreases", keywords: ["vertical component", "horizontal component"] },
      { marks: 1, description: "normal force changes accordingly (increases if vertical component decreases)", keywords: ["normal force increases", "normal force"] },
      { marks: 1, description: "fs(max) is directly proportional to N with μs constant, or the block will move once Fnet increases", keywords: ["directly proportional", "mu s", "fnet"] },
    ],
  },

  // ============ QUESTION 3: VERTICAL PROJECTILE MOTION (15 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A ball is projected vertically upwards from the top of a building that is 5 m high. Define the term free fall.",
    marks: 2, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Recall",
    model_answer: "Motion under the influence (or in the presence) of the gravitational force (weight) only.",
    marking_notes: "Must refer to motion under gravitational force/weight only. Defining 'projectile' instead of 'free fall' earns 0.",
    marking_points: [{ marks: 2, description: "motion under the influence of weight/gravitational force only", keywords: ["gravitational force", "weight only"] }],
    image_url: `${IMG}/3-building-ball.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "The velocity of the ball is 15 m·s⁻¹ (upward) at t = 0 s and reaches 0 m·s⁻¹ at t = p seconds. Using EQUATIONS OF MOTION ONLY, calculate the value of p.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf = vi + aΔt (taking upward as positive): 0 = 15 + (−9,8)Δt, so Δt = p = 1,53 s.",
    marking_notes: "Formula vf = vi + aΔt with Δt, correct substitution, and the correct final answer p = 1,53 s.",
    marking_points: [
      { marks: 1, description: "equation of motion with Δt used (vf = vi + aΔt)", keywords: ["vf", "delta t", "equation of motion"] },
      { marks: 1, description: "correct substitution of initial velocity and acceleration due to gravity", keywords: ["15", "9 8"] },
      { marks: 1, description: "correct final answer for p (1,53 s)", keywords: ["1 53"] },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "The ball strikes the ground 3,36 seconds after it was thrown upwards. Calculate q, the magnitude of the velocity when the ball strikes the ground.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "Using vf = vi + aΔt from the launch point to the ground (upward positive): vf = 15 + (−9,8)(3,36) = −17,93, so the magnitude q = 17,93 m·s⁻¹ (accept the range 17,93–18,33 m·s⁻¹ depending on the reference points used).",
    marking_notes: "Formula with vf, correct substitution, correct final answer (range 17,93–18,33 m·s⁻¹ accepted for different valid approaches).",
    marking_points: [
      { marks: 1, description: "formula with final velocity used (vf = vi + aΔt or equivalent)", keywords: ["vf", "equation of motion"] },
      { marks: 1, description: "correct substitution into the formula", keywords: ["3 36", "9 8"] },
      { marks: 1, description: "correct final answer for q", keywords: ["17 93", "17 97"] },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "The ball bounces to a maximum height of 3 m after it struck the ground. Is the collision with the ground ELASTIC or INELASTIC? Explain the answer WITHOUT the use of calculations.",
    marks: 3, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Comprehension",
    model_answer: "Inelastic. The height after the bounce (3 m) decreased compared to the ball's original launch height/energy, meaning the velocity with which the ball struck the ground is not the same as the velocity with which it left the ground — kinetic energy was converted to heat and sound (kinetic energy was not conserved).",
    marking_notes: "Must state 'inelastic', that the height decreased, and that kinetic energy is not conserved (converted to heat/sound). NOTE: no calculation-based explanation is accepted.",
    marking_points: [
      { marks: 1, description: "states the collision is inelastic", keywords: ["inelastic"] },
      { marks: 1, description: "the height decreased / is smaller after the bounce", keywords: ["height decreased", "smaller"] },
      { marks: 1, description: "kinetic energy is not conserved / converted to heat and sound", keywords: ["kinetic energy", "not conserved", "heat and sound"] },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Sketch a velocity versus time graph for the motion of the ball from the time it was projected until it reached the maximum height after it bounced. Show the following numerical values on the graph: the initial velocity, time p, and velocity q.",
    marks: 4, topicKey: "vertical-projectile-motion", cognitiveLevelName: "Application",
    model_answer: "A straight line starting at v = 15 m·s⁻¹ (or −15 m·s⁻¹) with a negative (or positive) gradient, crossing the time axis at t = p = 1,53 s, continuing to v = −17,97 m·s⁻¹ (or +17,97) when the ball hits the ground, then a second straight line of smaller magnitude (parallel to the first), ending at v = 0 at the maximum bounce height.",
    marking_notes: "Marking points: straight line starting at ±15 m·s⁻¹ with the correct sign flip after bounce; line crosses the time axis at time p from 3.2; line reaches the correct velocity q from 3.3 at the moment the ball is on the ground; second line (after bounce) has smaller magnitude, is drawn parallel to the first, and ends at v = 0.",
    marking_points: [
      { marks: 1, description: "straight line starts at the initial velocity (15 or −15 m·s⁻¹) with the correct final sign", keywords: ["15", "initial velocity"] },
      { marks: 1, description: "line crosses the time axis at time p calculated in 3.2", keywords: ["time p", "1 53"] },
      { marks: 1, description: "line reaches the correct velocity q from 3.3 when the ball is on the ground", keywords: ["velocity q", "17 97"] },
      { marks: 1, description: "second (bounce) line has smaller magnitude, drawn parallel, ending at v = 0", keywords: ["parallel", "smaller", "ends at v"] },
    ],
  },

  // ============ QUESTION 4: MOMENTUM AND IMPULSE (11 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Cricketers at an academy conduct an experiment to determine the relationship between the contact time and the final momentum of a ball for a constant average net force. A cricket ball of mass 150 g is thrown horizontally and struck by a bat so it moves in the opposite direction. Define the term impulse.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Recall",
    model_answer: "The product of the resultant/net force acting on an object and the time the (net) force acts on the object. (Equivalently: the product of the resultant/net force and the contact time.)",
    marking_notes: "Must refer to the product of net/resultant force and time.",
    marking_points: [{ marks: 2, description: "product of the net/resultant force and the time it acts", keywords: ["net force", "resultant force", "time"] }],
    image_url: `${IMG}/4-bat-ball.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "The experiment is repeated with the contact time between bat and ball changed each time (average net force and initial velocity kept constant). The final momentum pf versus contact time Δt graph is a straight line through (0,01 s; 0 kg·m·s⁻¹) and (0,03 s; 4,5 kg·m·s⁻¹). Calculate the average net force acting on the ball.",
    marks: 3, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "The gradient of the pf vs Δt graph equals the net force: Fnet = (4,5 − 0)/(0,03 − 0,01) = 225 N, directed to the right (opposite to the ball's original direction).",
    marking_notes: "Marking points: gradient formula (Δpf/Δ(Δt)) used, correct substitution of the two graph points, correct final answer 225 N with direction (to the right / opposite the ball's original direction).",
    marking_points: [
      { marks: 1, description: "gradient of the pf vs Δt graph used to find Fnet", keywords: ["gradient", "fnet"] },
      { marks: 1, description: "correct substitution of the graph values (4,5 and 0,03−0,01)", keywords: ["4 5", "0 03", "0 01"] },
      { marks: 1, description: "correct final force with direction (225 N to the right, opposite the ball's original direction)", keywords: ["225", "opposite", "to the right"] },
    ],
    image_url: `${IMG}/4-momentum-graph.png`,
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Calculate the magnitude of the initial velocity of the ball.",
    marks: 4, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Using the impulse-momentum theorem, FnetΔt = Δp = mvf − mvi. Substituting one data point, e.g. (225)(0,03) = 4,5 − (0,15)vi, gives vi = −15 m·s⁻¹, so the magnitude of the initial velocity is 15 m·s⁻¹.",
    marking_notes: "Formula FnetΔt = Δp = mvf − mvi (any equivalent form), correct substitution using the mass (0,15 kg) and a graph data point, correct final answer 15 m·s⁻¹.",
    marking_points: [
      { marks: 1, description: "impulse-momentum theorem used (FnetΔt = Δp = mvf − mvi)", keywords: ["impulse momentum theorem", "delta p", "net delta t"] },
      { marks: 1, description: "correct substitution of mass (0,15 kg) and a graph data point", keywords: ["0 15", "mass"] },
      { marks: 1, description: "algebra correctly rearranged to solve for vi", keywords: ["vi"] },
      { marks: 1, description: "correct final answer for the magnitude of the initial velocity (15 m·s⁻¹)", keywords: ["15 m", "initial velocity"] },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Redraw the pf vs Δt graph in the ANSWER BOOK and label it as A. On the same set of axes, draw the graph that will be obtained when a ball with a bigger mass is used, without changing the initial velocity and average net force. Label this as B.",
    marks: 2, topicKey: "momentum-impulse", cognitiveLevelName: "Application",
    model_answer: "Graph B is a second straight line through the same origin-intercept point as A (since Fnet and vi are unchanged), but with a smaller gradient than A (since a bigger mass reduces the ball's momentum change per unit of contact time for the same force).",
    marking_notes: "Both a correctly labelled line A (as given) and a correctly labelled line B (straight line, smaller gradient than A, same x-intercept) are required; award full marks for two correctly labelled solid lines.",
    marking_points: [{ marks: 2, description: "graph B correctly drawn as a straight line with a smaller gradient than A, both lines labelled", keywords: ["smaller gradient", "labelled"] }],
    image_url: `${IMG}/4-momentum-graph.png`,
  },

  // ============ QUESTION 5: WORK, ENERGY AND POWER (13 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A crate of mass 3 kg is at rest at point A on a frictionless horizontal surface. A constant horizontal force F of 12 N acts on the crate and moves it from point A to point B (7 m). The crate then moves down a rough plane, inclined at 20° to the horizontal, from B to C (6,8 m). State the work-energy theorem in words.",
    marks: 2, topicKey: "work-energy-power", cognitiveLevelName: "Recall",
    model_answer: "The net/total work done on an object is equal to the change in the object's kinetic energy. (Equivalently: the work done on an object by a resultant/net force is equal to the change in the object's kinetic energy.)",
    marking_notes: "Must refer to net/total work done being equal to the change in kinetic energy.",
    marking_points: [{ marks: 2, description: "net/total work done equals the change in kinetic energy", keywords: ["net work", "total work", "kinetic energy"] }],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Using ENERGY PRINCIPLES ONLY, calculate the kinetic energy of the crate at point B.",
    marks: 3, topicKey: "work-energy-power", cognitiveLevelName: "Application",
    model_answer: "WFA = ΔEk (the surface A to B is frictionless), so FΔxcosθ = Ekf − Eki. Substituting: (12)(7)cos0° = Ekf − 0, giving Ekf = 84 J.",
    marking_notes: "Formula relating net/applied work to the change in kinetic energy, correct substitution of F, distance and angle, correct final answer 84 J.",
    marking_points: [
      { marks: 1, description: "work-energy theorem formula used (Wnet = ΔEk or WFA = ΔEk)", keywords: ["wnet", "delta ek", "work energy"] },
      { marks: 1, description: "correct substitution of force, distance A to B and angle", keywords: ["12", "cos"] },
      { marks: 1, description: "correct final kinetic energy at B (84 J)", keywords: ["84"] },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Force F is removed when the crate reaches point B. The crate then experiences a constant frictional force of 21 N as it moves down the incline. Draw a free-body diagram showing ALL the forces acting on the crate as it moves down the incline.",
    marks: 3, topicKey: "newtons-laws", cognitiveLevelName: "Application",
    model_answer: "Three forces act on the crate on the incline, all drawn from a single point: weight w (Fg) vertically down; normal force N perpendicular to the incline surface; and kinetic friction f acting up the incline (opposing the crate's motion down the slope).",
    marking_notes: "One mark per correctly labelled force with correctly-directed arrow: weight (down), normal force (perpendicular to incline), friction (up the incline, opposing motion). Max 3.",
    marking_points: [
      { marks: 1, description: "weight (Fg/Fw/mg) drawn vertically downward", keywords: ["weight", "gravitational force", "mg"] },
      { marks: 1, description: "normal force (N) drawn perpendicular to the incline", keywords: ["normal force"] },
      { marks: 1, description: "kinetic friction (f) drawn up the incline, opposing motion", keywords: ["friction", "kinetic friction"] },
    ],
    image_url: `${IMG}/5-crate-incline.png`,
  },
  {
    number: "5", sub_number: "5.4",
    text: "Using ENERGY PRINCIPLES ONLY, determine whether the crate will pass point C.",
    marks: 5, topicKey: "work-energy-power", cognitiveLevelName: "Evaluation",
    model_answer: "Wnc = ΔEk + ΔEp. Substituting from B to C: fkΔxcosθ = (Ekf − 84) − (3)(9,8)(6,8)sin20°, i.e. (21)(6,8)cos180° = (Ekf − 84) − 68,38, giving Ekf = 9,58 J. Since 9,58 J > 0 J (a positive, physically possible kinetic energy at C), the crate WILL pass point C. (Equivalently, solving for the distance the crate can travel before stopping gives Δx = 7,68 m, which is greater than the 6,8 m to point C, so the crate passes C.)",
    marking_notes: "Marking points: non-conservative work-energy formula used (Wnc = ΔEk + ΔEp), correct substitution of friction work, correct substitution of the change in potential energy (using height or mgh·sinθ), correct final answer, and a conclusion that compares the result to the given distance/zero and states the crate passes point C.",
    marking_points: [
      { marks: 1, description: "non-conservative work-energy formula used (Wnc = ΔEk + ΔEp)", keywords: ["wnc", "delta ek", "delta ep"] },
      { marks: 1, description: "correct substitution for the work done by friction on the incline", keywords: ["21", "cos180"] },
      { marks: 1, description: "correct substitution for the change in gravitational potential energy on the incline", keywords: ["sin20", "6 8"] },
      { marks: 1, description: "correct final numeric result (9,58 J or 7,68 m or 2,52 m·s⁻¹, consistent with the method used)", keywords: ["9 58", "7 68"] },
      { marks: 1, description: "correct conclusion that the crate will pass point C, with comparison shown", keywords: ["will pass point c", "pass point c"] },
    ],
  },

  // ============ QUESTION 6: DOPPLER EFFECT (12 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "An investigation is performed to determine the relationship between the velocity of a moving sound source and the frequency of the sound detected, using an ambulance siren moving towards (Part A) and away from (Part B) a stationary sound detector at constant velocities. STATE the Doppler effect.",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Recall",
    model_answer: "The change in frequency (or pitch) of the sound detected by a listener, because the sound source and the listener have different velocities relative to the medium of sound propagation. (Equivalently: the apparent change in observed/detected frequency (pitch) as a result of the relative motion between a sound source and an observer.)",
    marking_notes: "Must refer to a change in (observed/detected) frequency due to relative motion between source and listener.",
    marking_points: [{ marks: 2, description: "change in observed/detected frequency due to relative motion between source and listener", keywords: ["change in frequency", "relative motion", "sound source"] }],
    image_url: `${IMG}/6-ambulance.png`,
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "For this experiment, write down the independent variable.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "The velocity/speed of the ambulance (sound source).",
    marking_notes: "Accept 'velocity of the ambulance/source'.",
    marking_points: [{ marks: 1, description: "velocity/speed of the ambulance (source)", keywords: ["velocity", "speed", "ambulance"] }],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "For this experiment, write down a controlled variable.",
    marks: 1, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: the frequency/wavelength of the sound produced by the ambulance siren; the speed of sound; the density/temperature of the air; the detector/listener remaining stationary.",
    marking_notes: "Any one valid controlled variable accepted.",
    marking_points: [{ marks: 1, description: "frequency of the siren, speed of sound, or air density/temperature kept constant", keywords: ["frequency", "speed of sound", "temperature", "stationary"] }],
  },
  {
    number: "6", sub_number: "6.3",
    text: "The graph shows detected frequency versus velocity of the ambulance for Part B (ambulance moving away): the line has a negative gradient, from about 1 160 Hz at v = 0 down to 1 115 Hz at v = 25 m·s⁻¹. What conclusion can be made for Part B of this experiment?",
    marks: 2, topicKey: "doppler-effect", cognitiveLevelName: "Comprehension",
    model_answer: "As the velocity of the ambulance increases, the detected frequency decreases.",
    marking_notes: "Must state the inverse relationship in words (as velocity increases, frequency decreases); stating 'inversely proportional' without further support is not accepted.",
    marking_points: [{ marks: 2, description: "as the velocity of the ambulance increases, the detected frequency decreases", keywords: ["velocity increases", "frequency decreases"] }],
    image_url: `${IMG}/6-doppler-graph.png`,
  },
  {
    number: "6", sub_number: "6.4",
    text: "At v = 25 m·s⁻¹, the detected frequency is 1 298 Hz when the ambulance approaches, and 1 115 Hz when it moves away. Calculate the speed of sound in air.",
    marks: 6, topicKey: "doppler-effect", cognitiveLevelName: "Evaluation",
    model_answer: "Approaching: fL = v/(v − vs) × fs, so 1298 = v/(v−25) × fs, giving fs·v = 1298(v − 25) ... (1). Moving away: fL = v/(v + vs) × fs, so 1115 = v/(v+25) × fs, giving fs·v = 1115(v + 25) ... (2). Equating (1) and (2): 1298(v − 25) = 1115(v + 25), which solves to v = 329,64 m·s⁻¹.",
    marking_notes: "Marking points: Doppler formula for the source approaching (either form), correct substitution for approaching case; Doppler formula for source moving away (either form), correct substitution for moving-away case; the two equations correctly equated (or divided) and solved for v = 329,64 m·s⁻¹.",
    marking_points: [
      { marks: 1, description: "Doppler formula used for the ambulance approaching (fL = v/(v−vs) fs)", keywords: ["doppler", "approaching", "fl"] },
      { marks: 1, description: "correct substitution of 1298 Hz and v−25 for the approaching case", keywords: ["1298", "v 25"] },
      { marks: 1, description: "Doppler formula used for the ambulance moving away (fL = v/(v+vs) fs)", keywords: ["moving away", "v 25"] },
      { marks: 1, description: "correct substitution of 1115 Hz and v+25 for the moving-away case", keywords: ["1115"] },
      { marks: 1, description: "the two equations correctly equated (or divided) to eliminate fs", keywords: ["equating", "equated"] },
      { marks: 1, description: "correct final speed of sound (329,64 m·s⁻¹)", keywords: ["329 64", "speed of sound"] },
    ],
  },

  // ============ QUESTION 7: ELECTROSTATICS (15 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "A sphere X is placed at point A on a horizontal surface. X carries a charge of +3 × 10⁻⁷ C. Point P is r metres to the left of point A. Describe an electric field.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Recall",
    model_answer: "A region of space in which an electric charge experiences a force.",
    marking_notes: "Must refer to a region of space in which a charge experiences a force.",
    marking_points: [{ marks: 2, description: "region of space in which an electric charge experiences a force", keywords: ["region of space", "electric charge", "experiences a force"] }],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Draw the electric field pattern due to the charge on sphere X.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "Field lines pointing radially outward from the positive sphere X in all directions, evenly spaced, none touching or crossing.",
    marking_notes: "One mark for correct direction (radially outward, since the charge is positive), one mark for the field lines being radial (drawn touching the sphere, not crossing each other).",
    marking_points: [
      { marks: 1, description: "field lines point outward, away from the positive charge", keywords: ["radially outward", "outward"] },
      { marks: 1, description: "field lines are radial, touching the sphere and not crossing", keywords: ["radial", "field lines"] },
    ],
    image_url: `${IMG}/7-charges-PA.png`,
  },
  {
    number: "7", sub_number: "7.3",
    text: "The magnitude of the electric field at point P is 1,08 × 10⁶ N·C⁻¹. Show, by means of a calculation, that r = 0,05 m.",
    marks: 3, topicKey: "electrostatics", cognitiveLevelName: "Application",
    model_answer: "E = kQ/r², so 1,08×10⁶ = (9×10⁹)(3×10⁻⁷)/r², giving r = 0,05 m.",
    marking_notes: "Formula E = kQ/r², correct substitution, and the answer r = 0,05 m shown.",
    marking_points: [
      { marks: 1, description: "formula E = kQ/r² used", keywords: ["kq", "electric field formula"] },
      { marks: 1, description: "correct substitution of E, k and Q", keywords: ["1 08", "9x10", "3x10"] },
      { marks: 1, description: "shows r = 0,05 m as the final result", keywords: ["0 05"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Sphere Y, carrying a charge of −5 × 10⁻⁷ C, is now fixed at point P and sphere Z, carrying a charge of −4 × 10⁻⁷ C, is fixed 0,04 m to the right of sphere X. The NET FORCE acting on sphere X is 0,0427 N at point A. Is the surface frictionless? Choose from YES or NO. Explain the answer by means of a calculation.",
    marks: 6, topicKey: "electrostatics", cognitiveLevelName: "Evaluation",
    model_answer: "FXY = kQXQY/r² = (9×10⁹)(3×10⁻⁷)(5×10⁻⁷)/(0,05)² = 0,54 N (attractive, towards Y). FXZ = kQXQZ/r² = (9×10⁹)(3×10⁻⁷)(4×10⁻⁷)/(0,04)² = 0,68 N (attractive, towards Z). Net electrostatic force = 0,68 − 0,54 = 0,14 N. Since the given net force on X (0,0427 N) is less than this calculated net electrostatic force (0,14 N), a frictional force must also be acting on X — so the surface is NOT frictionless (NO).",
    marking_notes: "Marking points: Coulomb's law applied correctly to find FXY, applied correctly to find FXZ, correct subtraction of the two forces to find the net electrostatic force, correct comparison to the given net force of 0,0427 N, and the correct conclusion (NO, not frictionless — friction of 0,0923 N must be present).",
    marking_points: [
      { marks: 1, description: "Coulomb's law used to calculate the force between X and Y", keywords: ["kqxqy", "coulomb"] },
      { marks: 1, description: "correct substitution for the force between X and Y", keywords: ["3x10", "5x10", "0 05"] },
      { marks: 1, description: "Coulomb's law used to calculate the force between X and Z", keywords: ["kqxqz"] },
      { marks: 1, description: "correct substitution for the force between X and Z", keywords: ["3x10", "4x10", "0 04"] },
      { marks: 1, description: "correct subtraction of the two forces to find the net electrostatic force (0,14 N)", keywords: ["0 14"] },
      { marks: 1, description: "correct conclusion: NO, the surface is not frictionless, since the calculated net electrostatic force does not equal the given net force", keywords: ["no", "not frictionless", "friction"] },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Sphere Y is brought into contact with sphere X, and is placed back in its original position. How will the magnitude of the force that sphere X now exerts on sphere Y be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 2, topicKey: "electrostatics", cognitiveLevelName: "Comprehension",
    model_answer: "Decreases (after contact, the charges on X and Y redistribute equally between them, changing both charge magnitudes and, since one was negative, reducing the product of charges and hence the force).",
    marking_notes: "Accept only 'decreases'.",
    marking_points: [{ marks: 2, description: "decreases", keywords: ["decrease"] }],
    image_url: `${IMG}/7-charges-YXZ.png`,
  },

  // ============ QUESTION 8: ELECTRIC CIRCUITS (20 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Two identical headlights, L1 and L2 (12 Ω each), and a starter motor M (0,1 Ω) of a car are connected to a battery with unknown emf (ε) and internal resistance (r). The ammeters and connecting wires have negligible resistance; the voltmeter has a high resistance. Switches S1 and S2 are initially open. Define the term emf.",
    marks: 2, topicKey: "electric-circuits", cognitiveLevelName: "Recall",
    model_answer: "The maximum/total energy provided (or work done) by a battery/cell per unit/coulomb of charge passing through it.",
    marking_notes: "Must refer to maximum/total energy (or work) per unit charge.",
    marking_points: [{ marks: 2, description: "maximum/total energy per unit charge provided by a battery/cell", keywords: ["energy per", "unit charge", "coulomb of charge"] }],
    image_url: `${IMG}/8-circuit.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Switch S1 remains open while switch S2 is closed. The reading on ammeter A2 (through the starter motor) is 120 A. Calculate the reading on the voltmeter.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "R = V/I, so 0,1 = V/120, giving V = 12 V.",
    marking_notes: "Formula R = V/I, correct substitution of the starter motor's resistance and the ammeter reading, correct final answer 12 V.",
    marking_points: [
      { marks: 1, description: "formula R = V/I used", keywords: ["v i", "ohms law"] },
      { marks: 1, description: "correct substitution of resistance (0,1 Ω) and current (120 A)", keywords: ["0 1", "120"] },
      { marks: 1, description: "correct final voltmeter reading (12 V)", keywords: ["12 v", "voltmeter"] },
    ],
  },
  {
    number: "8", sub_number: "8.3.1",
    text: "Switch S1 is now closed and switch S2 is opened. The power dissipated by each headlight is 15 W. Calculate the current passing through L1.",
    marks: 3, topicKey: "electric-circuits", cognitiveLevelName: "Application",
    model_answer: "P = I²R, so 15 = I²(12), giving I = 1,12 A.",
    marking_notes: "Formula relating power, current and resistance (P = I²R, or via V = √(PR) then I = V/R), correct substitution, correct final answer 1,12 A.",
    marking_points: [
      { marks: 1, description: "power formula used (P = I²R or P = V²/R)", keywords: ["i2r", "v2", "power formula"] },
      { marks: 1, description: "correct substitution of power (15 W) and resistance (12 Ω)", keywords: ["15", "12"] },
      { marks: 1, description: "correct final current through L1 (1,12 A)", keywords: ["1 12"] },
    ],
  },
  {
    number: "8", sub_number: "8.3.2",
    text: "Write down the reading on ammeter A1.",
    marks: 1, topicKey: "electric-circuits", cognitiveLevelName: "Comprehension",
    model_answer: "A1 = (1,12)(2) = 2,24 A, since A1 reads the total current through both identical, parallel headlights.",
    marking_notes: "Positive marking from 8.3.1: A1 = 2 × the current through one headlight.",
    marking_points: [{ marks: 1, description: "A1 reads double the current through one headlight (2,24 A)", keywords: ["2 24"] }],
  },
  {
    number: "8", sub_number: "8.4",
    text: "Calculate the emf of the battery.",
    marks: 6, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Parallel resistance of L1 and L2: Rp = (12)(12)/(12+12) = 6 Ω. With S1 closed, S2 open: ε1 = I(R+r) = 2,24(6+r). With S1 open, S2 closed: ε2 = I(R+r) = 120(0,1+r). Since ε1 = ε2: 2,24(6+r) = 120(0,1+r), giving r = 0,012 Ω. Substituting back: ε = 2,24(6 + 0,012) = 13,46 V (accept the range 13,42–13,47 V depending on the method/rounding used).",
    marking_notes: "Marking points: parallel resistance of the two headlights calculated; emf equation for the S1-closed case; emf equation for the S2-closed case; the two emf expressions equated (since it's the same battery); internal resistance r solved; final emf value in the range 13,42–13,47 V.",
    marking_points: [
      { marks: 1, description: "parallel resistance of L1 and L2 calculated (Rp = 6 Ω)", keywords: ["parallel resistance", "6"] },
      { marks: 1, description: "emf equation set up for the S1-closed, S2-open case (ε = I(R+r))", keywords: ["2 24", "r"] },
      { marks: 1, description: "emf equation set up for the S1-open, S2-closed case", keywords: ["120", "0 1"] },
      { marks: 1, description: "the two emf expressions equated to solve for r", keywords: ["equating", "equated"] },
      { marks: 1, description: "correct internal resistance r solved (0,012 Ω)", keywords: ["0 012"] },
      { marks: 1, description: "correct final emf value (in the range 13,42–13,47 V)", keywords: ["13 4", "emf"] },
    ],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Both switches are now closed. How will the reading on ammeter A1 be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME. Explain the answer WITHOUT the use of a calculation.",
    marks: 5, topicKey: "electric-circuits", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. Initially (S1 open) the reading on A1 was 0 A. With both switches now closed, current flows through the headlight branch of the circuit as well, so A1's reading rises above zero. (In terms of the overall circuit: total/external resistance decreases, so total current increases, the internal voltage drop increases, and the voltage across the external components — including the headlights — decreases, but this does not change the conclusion that A1's own reading rises from its initial zero value.)",
    marking_notes: "Full marks (5) require the calculation-free reasoning: initial A1 reading was 0 A with S1 open, and closing both switches means current now flows through that branch, so it increases. The alternative circuit-analysis-style explanation (total resistance decreases, total current increases, Vinternal increases, Vexternal/headlight voltage decreases) is also accepted for full marks. A mark for 'increases' is only awarded if the explanation is correct; a calculation offered as the explanation earns at most 1/5.",
    marking_points: [
      { marks: 1, description: "states the reading increases", keywords: ["increases"] },
      { marks: 1, description: "initial reading of A1 was 0 A when S1 was open", keywords: ["0 a", "s1 is open", "initial reading"] },
      { marks: 1, description: "with both switches closed, current now flows through that branch of the circuit", keywords: ["both switch", "current is flowing", "circuit"] },
      { marks: 1, description: "total/external resistance decreases, so total current increases", keywords: ["total resistance decreases", "total current increases"] },
      { marks: 1, description: "internal voltage increases and external/headlight voltage decreases", keywords: ["internal", "external", "decreases"] },
    ],
  },

  // ============ QUESTION 9: ELECTRODYNAMICS (13 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "An AC generator operates a fan. The directions of rotation of the coil and the induced current are shown in a simplified diagram. Define the term rms potential difference.",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "The AC potential difference/voltage that produces/dissipates the same amount of energy as an equivalent DC potential difference/voltage.",
    marking_notes: "Must refer to AC voltage producing the same energy as an equivalent DC voltage; defining alternating current, or naming DC first, earns 0.",
    marking_points: [{ marks: 2, description: "AC voltage that produces the same energy as an equivalent DC voltage", keywords: ["same amount of energy", "equivalent dc"] }],
    image_url: `${IMG}/9-generator.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "What is the polarity of the magnet at Z?",
    marks: 2, topicKey: "electrodynamics", cognitiveLevelName: "Comprehension",
    model_answer: "North (N).",
    marking_notes: "Accept only 'North' or 'N', determined using the right-hand rule from the shown current/rotation direction.",
    marking_points: [{ marks: 2, description: "North", keywords: ["north", "n"] }],
  },
  {
    number: "9", sub_number: "9.3",
    text: "The resistance of the fan is 60 Ω and the maximum potential difference produced by the generator is 311,11 V. Calculate the cost of operating the fan for 1,5 hours if the cost of electricity is R3,33 per kWh.",
    marks: 5, topicKey: "electrodynamics", cognitiveLevelName: "Evaluation",
    model_answer: "Vrms = Vmax/√2 = 311,11/√2 = 219,99 V. Pave = Vrms²/R = 219,99²/60 = 806,59 W = 0,80659 kW. Energy used: E = PΔt = 0,80659 × 1,5 = 1,21 kWh. Cost = E × tariff = 1,21 × 3,33 = R4,03.",
    marking_notes: "Marking points: Vrms formula and correct substitution; average power formula (Pave = Vrms²/R) and correct substitution; energy E = PΔt calculated correctly (in kWh, using the 1,5 hour operating time); correct final cost R4,03.",
    marking_points: [
      { marks: 1, description: "rms voltage formula used and correctly calculated (Vrms = Vmax/√2)", keywords: ["vrms", "vmax"] },
      { marks: 1, description: "average power formula used (Pave = Vrms²/R)", keywords: ["pave", "vrms2"] },
      { marks: 1, description: "correct substitution to find average power in kW", keywords: ["60", "806"] },
      { marks: 1, description: "energy calculated using E = PΔt over 1,5 hours", keywords: ["1 5", "energy"] },
      { marks: 1, description: "correct final cost (R4,03), using the given tariff", keywords: ["4 03", "3 33"] },
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "The voltage versus time graph for this generator (one full cycle by t = 4 s) is given. Redraw this graph in the ANSWER BOOK and label it as A. On the same set of axes, draw the graph for ONE rotation of the coil when the speed of rotation is doubled. Label this as graph B.",
    marks: 3, topicKey: "electrodynamics", cognitiveLevelName: "Application",
    model_answer: "Graph B is a cosine-shaped curve with the same amplitude as graph A, but completing one full cycle in half the time (period halved, so frequency doubled) — i.e. graph B reaches its minimum and returns to its starting value twice as fast as graph A.",
    marking_notes: "Marking points: amplitude of B equal to that of A (doubling speed does not change peak voltage); period of B is half that of A; correct shape (cosine graph) showing one full cycle of B within the time A takes to complete one cycle.",
    marking_points: [
      { marks: 1, description: "amplitude of graph B is the same/not bigger than graph A", keywords: ["amplitude"] },
      { marks: 1, description: "period of graph B is half of graph A", keywords: ["period", "half"] },
      { marks: 1, description: "correct cosine shape with the correct number of cycles shown", keywords: ["cosine", "cycle"] },
    ],
    image_url: `${IMG}/9-voltage-graph.png`,
  },
  {
    number: "9", sub_number: "9.5",
    text: "State ONE way in which this generator can be changed to a DC generator.",
    marks: 1, topicKey: "electrodynamics", cognitiveLevelName: "Recall",
    model_answer: "By replacing the slip rings with a split-ring commutator.",
    marking_notes: "Must mention replacing slip rings with a split-ring commutator (or 'commutator'/'split ring').",
    marking_points: [{ marks: 1, description: "replace the slip rings with a split-ring commutator", keywords: ["split ring", "commutator", "slip rings"] }],
  },

  // ============ QUESTION 10: PHOTOELECTRIC EFFECT & ATOMIC SPECTRA (14 marks) ============

  {
    number: "10", sub_number: "10.1.1",
    text: "Learners conduct an experiment to determine whether electrons will be emitted from the surface of different metals when light with a single frequency (1,045 × 10¹⁵ Hz) is incident on the metal. Results for zinc, sodium, caesium and metal M are given. Define the term work function.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "The minimum energy needed for electrons to be emitted from the metal surface.",
    marking_notes: "Must refer to minimum energy needed for electron emission from the metal surface; defining threshold frequency instead earns 0.",
    marking_points: [{ marks: 2, description: "minimum energy needed for electrons to be emitted from the metal surface", keywords: ["minimum energy", "electrons to be emitted"] }],
    image_url: `${IMG}/10.1-metals-table.png`,
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "Write down the threshold frequency of zinc.",
    marks: 1, topicKey: "photoelectric-effect", cognitiveLevelName: "Recall",
    model_answer: "1,045 × 10¹⁵ Hz (the frequency of light used, since the maximum kinetic energy of emitted electrons from zinc is exactly 0 J at this frequency).",
    marking_notes: "Accept only 1,045 × 10¹⁵ Hz.",
    marking_points: [{ marks: 1, description: "1,045 × 10¹⁵ Hz", keywords: ["1 045", "10 15"] }],
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "How does the work function of sodium compare to that of caesium? Choose from SMALLER THAN, GREATER THAN or EQUAL TO. Explain the answer.",
    marks: 3, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "Greater than. The maximum kinetic energy of electrons emitted from sodium (2,53×10⁻¹⁹ J) is smaller than that from caesium (3,50×10⁻¹⁹ J); since the same frequency (same photon energy E) was used for both, and E = W₀ + Ek(max), a smaller Ek(max) means a larger work function W₀.",
    marking_notes: "Must state 'greater than', that sodium's maximum kinetic energy is smaller, and that the same photon energy was used (so a smaller Ek(max) implies a larger W₀).",
    marking_points: [
      { marks: 1, description: "states the work function of sodium is greater than that of caesium", keywords: ["greater than"] },
      { marks: 1, description: "the maximum kinetic energy of electrons from sodium is smaller than from caesium", keywords: ["maximum kinetic energy", "smaller"] },
      { marks: 1, description: "same photon energy/frequency used for both metals, so smaller Ek(max) means larger work function", keywords: ["same frequency", "same light", "constant"] },
    ],
  },
  {
    number: "10", sub_number: "10.1.4",
    text: "Light of the same frequency, but with a higher intensity, is now incident on metal M (which showed no electron emission at the original intensity). Will electrons now be ejected? Choose from YES or NO. Give a reason for the answer.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Comprehension",
    model_answer: "No. Increasing the intensity of light only increases the number of photons per second, not the energy of each individual photon; the frequency (and therefore the energy per photon, E = hf) has not changed, so if it was insufficient to eject electrons before, it remains insufficient.",
    marking_notes: "Must state 'No' and that intensity does not affect the ejection of electrons from metal M (since frequency/photon energy is unchanged).",
    marking_points: [{ marks: 2, description: "No; intensity of light does not affect electron ejection since frequency/photon energy is unchanged", keywords: ["intensity", "frequency", "not changed"] }],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "An energy-level diagram (not to scale) shows electron energies E1 = 1,3×10⁻¹⁹ J, E2 = 5,1×10⁻¹⁹ J and E3 = 5,7×10⁻¹⁹ J for a certain atom. An electron of this atom moves from E3 to E1. Photon X is emitted. Calculate the frequency of photon X.",
    marks: 4, topicKey: "photoelectric-effect", cognitiveLevelName: "Application",
    model_answer: "E = hf, so (5,7×10⁻¹⁹ − 1,3×10⁻¹⁹) = (6,63×10⁻³⁴)f, giving f = 6,64×10¹⁴ Hz.",
    marking_notes: "Formula E = hf, correct calculation of the energy difference E3 − E1 (order doesn't matter as long as f is kept positive), correct substitution of Planck's constant, correct final answer 6,64×10¹⁴ Hz.",
    marking_points: [
      { marks: 1, description: "formula E = hf used", keywords: ["e hf", "planck"] },
      { marks: 1, description: "correct energy difference calculated (E3 minus E1)", keywords: ["5 7", "1 3"] },
      { marks: 1, description: "correct substitution of Planck's constant (6,63×10⁻³⁴)", keywords: ["6 63"] },
      { marks: 1, description: "correct final frequency (6,64×10¹⁴ Hz)", keywords: ["6 64"] },
    ],
    image_url: `${IMG}/10-energy-levels.png`,
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Is it possible for a photon with an energy of 2,5×10⁻¹⁹ J to be emitted from this atom? Choose from YES or NO. Give a reason for the answer.",
    marks: 2, topicKey: "photoelectric-effect", cognitiveLevelName: "Evaluation",
    model_answer: "No. The energy does not correspond to any of the possible transitions between E1, E2 and E3 in this atom (the only possible emitted-photon energies are E2−E1 = 3,8×10⁻¹⁹ J, E3−E2 = 0,6×10⁻¹⁹ J, or E3−E1 = 4,4×10⁻¹⁹ J).",
    marking_notes: "Must state 'No' and that the energy does not correspond to any transition in this atom.",
    marking_points: [{ marks: 2, description: "No; the energy does not correspond to any transition in this atom", keywords: ["no", "does not correspond", "transition"] }],
  },
];

// No exam_schedule entries here — Physical Sciences exam dates aren't
// modelled in this ingestion; a future pilot dataset can carry them the way
// geography-p1-pilot does for Geography.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
