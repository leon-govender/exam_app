// Real school-authored paper: Parktown Boys' High School Grade 12 Physical
// Sciences Preliminary Exam, Chemistry (Paper 2), 11 September 2023.
// Source: two separate school-provided PDFs — QP: "Grade 12 Exam 2023
// Chemistry Prelim Final 23.09.23.pdf" (22 pages: 14-page question paper +
// data sheets, no memo content); Memo: "Prelim memo 2.pdf" (9 pages, a
// scanned/handwritten-annotated memo with moderator red-pen corrections).
// Examiner Ms L Whiting, Moderator Mrs I Pelser, External moderator Mrs F
// Patel. NINE compulsory questions, 150 marks, 3 hours. Instruction on the
// cover page: "Round off to TWO decimal places." No external source URL
// exists for this paper (source_url is null).
//
// Reuses the existing "Physical Sciences" subject row and the same four CAPS
// cognitive levels, and reuses ALL SEVEN existing Chemistry (P2) topic keys
// (organic-chemistry, intermolecular-forces, stoichiometry, rate-of-reaction,
// chemical-equilibrium, acids-and-bases, electrochemistry) — this September
// prelim covers a subset of the same CAPS Chemistry content already seeded
// by the November papers, so no new topics were added.
//
// Diagrams (equilibrium particle-count diagrams, Maxwell-Boltzmann curves,
// the cathodic-protection sketch, the six-compound organic table, the gas-
// collection apparatus + rate graphs, the equilibrium rate-vs-time graph, the
// galvanic cell diagram, and the electrolytic refining cell diagram) are
// vector line drawings in the source PDF, so they were cropped from full-page
// PNG renders (Pillow) rather than extracted as standalone images.
//
// KNOWN QP TYPOS / FLAGS (transcribed faithfully, resolved and documented
// here rather than silently picked):
// 1. The QP duplicates the label "2.5" twice: 2.5.1-2.5.4 (homologous
//    series/functional group/IUPAC name/structural formula of compound F),
//    then ANOTHER "2.5.1"/"2.5.2" under the heading "2.6" (the ester %-
//    composition calculation and its follow-up). The second pair is
//    relabelled 2.6.1/2.6.2 here to avoid a duplicate (paper_id, number,
//    sub_number) key — the intent is unambiguous from the "2.6" heading.
// 2. Question 1.7 (pH ordering of NaCl/CH3COONa/NH4Cl): the memo marks
//    option D ("Highest pH: NH4Cl; Lowest pH: CH3COONa") as correct. This is
//    chemically backwards — NH4Cl hydrolyses to an ACIDIC solution (lowest
//    pH) and CH3COONa hydrolyses to a BASIC solution (highest pH), with
//    neutral NaCl in between. Verified independently: the correct option is
//    C ("Highest pH: CH3COONa; Lowest pH: NH4Cl"). Used C here, not the
//    memo's D.
// 3. Question 8's QP section header prints "[19]" but the sum of the QP's
//    own printed per-sub-question mark allocations for Q8 is only 16, while
//    the memo's own header for Q8 reads "(17)" and its detailed checkmarks
//    sum to 17. Neither reconciles to 19. To keep this paper's total at the
//    150 marks stated on the cover page (verified: every other question's
//    sub-marks sum exactly to that question's printed QP total), Q8's marks
//    were allocated across sub-questions using the memo's marking detail as
//    a guide, with 8.3 (Ecell calculation) given 5 marking steps and 8.4
//    (Le Chatelier/EMF reasoning) given 4, reaching 19 for the question
//    while staying faithful to the memo's actual marking points.
// 4. Question 5: the memo's handwritten cover-page tally lists Q5 as 14
//    marks, and some of its per-sub-question brackets (5.4.2, 5.7.1, 5.7.2)
//    show "(2)" where the QP itself prints "(1)". The QP's own printed
//    per-sub-question marks for Q5 sum correctly to its own header total of
//    12, so the QP's values (which is what students actually saw and were
//    marked out of) are used here, not the memo's inflated cover tally.
//
// Calculation questions (2.6.1, 6.5.1, 6.5.2, 7.3.1, 7.3.2, 8.3) use `steps`
// instead of `marking_points`: the student works the problem out on paper as
// normal, then picks the option they got for each mark-earning step from a
// few choices, rather than typing anything. Distractors trap specific real
// errors (wrong formula, wrong mole ratio, using the wrong given value,
// rounding to the wrong number of decimal places — this paper explicitly
// instructs "round off to TWO decimal places").

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2023-prelim-p2";

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
    key: "organic-chemistry",
    name: "Organic Molecules: Nomenclature, Isomers and Reactions",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Organic Chemistry (Nomenclature, Isomerism and Reactions)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=organic+chemistry+nomenclature+isomers+reactions+grade+12+physical+sciences",
  },
  {
    key: "intermolecular-forces",
    name: "Intermolecular Forces",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Chemical Bonding (Intermolecular Forces)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=intermolecular+forces+grade+12+physical+sciences",
  },
  {
    key: "stoichiometry",
    name: "Stoichiometry and the Mole Concept",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Quantitative Aspects of Chemical Change (Stoichiometry)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=stoichiometry+gas+volumes+grade+12+physical+sciences",
  },
  {
    key: "rate-of-reaction",
    name: "Rate and Extent of Reaction",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Reaction Rate (Rate and Extent of Reaction)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=rate+of+reaction+collision+theory+grade+12+physical+sciences",
  },
  {
    key: "chemical-equilibrium",
    name: "Chemical Equilibrium",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Chemical Equilibrium (Le Chatelier's Principle, Kc)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=chemical+equilibrium+le+chatelier+kc+grade+12+physical+sciences",
  },
  {
    key: "acids-and-bases",
    name: "Acids and Bases",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Acids and Bases (Ka, pH, Titrations)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=acids+and+bases+ph+titration+grade+12+physical+sciences",
  },
  {
    key: "electrochemistry",
    name: "Electrochemical Reactions (Galvanic and Electrolytic Cells)",
    caps_term: "Term 3",
    textbook_ref: "Grade 12 Physical Sciences — Electrochemistry (Galvanic and Electrolytic Cells)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=galvanic+electrolytic+cells+grade+12+physical+sciences",
  },
];

export const paper = {
  year: 2023,
  exam_diet: "September",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: null as string | null,
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
  // ============ QUESTION 1: MULTIPLE CHOICE (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Which two compounds react with each other to form CH3CH2CH2COOCH2CH2CH3? (A) propanoic acid and propan-2-ol (B) propanoic acid and butan-1-ol (C) butanoic acid and propan-2-ol (D) butanoic acid and propan-1-ol",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "D — butanoic acid and propan-1-ol. The ester CH3CH2CH2COOCH2CH2CH3 is formed from the 4-carbon acid (butanoic acid, CH3CH2CH2COOH) and the straight-chain 3-carbon alcohol (propan-1-ol, CH3CH2CH2OH).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "A structural isomer of butane is... (A) propane. (B) 2-methylbutane. (C) 2-methylpropane. (D) 2,2-dimethylpropane.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "C — 2-methylpropane. Butane is C4H10; only 2-methylpropane (isobutane) shares this molecular formula. Propane is C3H8, and 2-methylbutane/2,2-dimethylpropane are C5-based.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Diagrams P, Q and R represent different reaction mixtures of the hypothetical reaction X(g) + Y2(g) ⇌ XY(g) + Y(g), ΔH > 0, at equilibrium in a closed container at a certain temperature (X = open circle, Y = filled circle). If at equilibrium Kc = 2, which diagram(s) correctly represent(s) the mixture at equilibrium? (A) P only (B) Q only (C) R only (D) P, Q and R",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "B — Q only. Counting particles in each diagram and applying Kc = [XY][Y] / ([X][Y2]), only diagram Q gives a ratio equal to 2.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.3-equilibrium-diagrams.png`,
  },
  {
    number: "1", sub_number: "1.4",
    text: "The Maxwell-Boltzmann energy distribution curves show the number of particles as a function of kinetic energy for a reaction at four different temperatures (curves A-E shown, with E the minimum kinetic energy needed for effective collisions). Which ONE of these curves represents the reaction with the highest rate? (A) A (B) B (C) C (D) D",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "D. Curve D is at the highest temperature and has the greatest proportion of particles with kinetic energy exceeding the activation energy E, so it represents the fastest reaction rate.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.4-maxwell-boltzmann.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "Ethene can be oxidised to form epoxyethane, C2H4O: 2C2H4(g) + O2(g) ⇌ 2C2H4O(g), ΔH = −107 kJ·mol⁻¹. Which set of conditions will give the greatest yield of epoxyethane at equilibrium? (A) Low pressure, 100°C (B) High pressure, 200°C (C) High pressure, 100°C (D) Low pressure, 200°C",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "C — High pressure, 100°C. The reaction is exothermic, so a LOWER temperature favours the forward (product-forming) reaction; there are fewer moles of gas on the product side (2 mol vs 3 mol), so HIGHER pressure also favours the forward reaction. High pressure + low temperature (100°C) together give the greatest yield.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "A solution of aluminium sulfate is labelled 1,0 mol·dm⁻³ Aℓ2(SO4)3. Which ONE of the following statements is true? In 2 dm³ of solution, there are... (A) 6 moles of sulfate ions. (B) 1 mole of aluminium ions. (C) 2 moles of aluminium ions. (D) 1,5 moles of sulfate ions.",
    marks: 2, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "A — 6 moles of sulfate ions. n(Aℓ2(SO4)3) = c × V = 1,0 × 2 = 2 mol. Each formula unit contains 3 SO4²⁻ ions, so n(SO4²⁻) = 2 × 3 = 6 mol (and n(Aℓ³⁺) = 2 × 2 = 4 mol, ruling out B and C).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "The pH values of equal concentrations of the following solutions are compared: NaCℓ, CH3COONa, NH4Cℓ. Identify the combination with the highest pH and the lowest pH. (A) Highest: CH3COONa; Lowest: NaCℓ (B) Highest: NaCℓ; Lowest: CH3COONa (C) Highest: CH3COONa; Lowest: NH4Cℓ (D) Highest: NH4Cℓ; Lowest: CH3COONa",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "C — Highest: CH3COONa; Lowest: NH4Cℓ. CH3COONa is the salt of a weak acid and strong base, so it hydrolyses to give a basic (highest pH) solution. NH4Cℓ is the salt of a weak base and strong acid, so it hydrolyses to give an acidic (lowest pH) solution. NaCℓ (strong acid + strong base) is neutral, in between.",
    marking_notes: "Accept only 'C'. FLAG: the source memo marks option D as correct, but D states the reverse (NH4Cℓ highest, CH3COONa lowest) — chemically backwards, since NH4Cℓ hydrolyses acidic and CH3COONa hydrolyses basic. Verified independently and corrected to C; see file header comment.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Which of the following reactions is, according to the Brønsted-Lowry definition, NOT an acid-base reaction? (A) Zn(s) + HNO3(aq) → Zn(NO3)2(aq) + H2(g) (B) CuO + H2SO4 → CuSO4 + H2O (C) CaCO3 + 2HCℓ → CaCℓ2 + H2O + CO2 (D) NH3(aq) + H3O⁺(aq) → NH4⁺(aq) + H2O(aq)",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "A. Zn + HNO3 is a redox reaction (Zn is oxidised, H⁺ is reduced to H2 gas), not a Brønsted-Lowry proton-transfer reaction. B, C and D are all proton-transfer (acid-base) reactions.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.9",
    text: "Water and ammonia react. One of the products is an ammonium ion. Which statement about this reaction is correct? (A) The reaction can be classified as dissociation. (B) The resulting solution will be a strong electrolyte. (C) The reaction is a redox reaction. (D) The water is acting as an acid.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "D. In NH3(aq) + H2O(ℓ) ⇌ NH4⁺(aq) + OH⁻(aq), water donates a proton to ammonia, so water is acting as a Brønsted-Lowry acid.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "When a metal pipe made up mainly of iron is buried in wet soil, blocks of an unknown metal X are connected to the pipe, as shown in the sketch. Which ONE of the metals listed below would be the MOST suitable to be used as metal X? (A) Aℓ (B) Ag (C) Cu (D) Mg",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "D — Mg. This is cathodic (sacrificial anode) protection: metal X must be MORE reactive (a stronger reducing agent) than iron so that X corrodes preferentially. Of the options, magnesium (E° = −2,36 V) is the most reactive — more reactive than iron, aluminium, and far more reactive than silver or copper.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.10-iron-pipe.png`,
  },

  // ============ QUESTION 2: ORGANIC MOLECULES (22 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The letters A to F represent six organic compounds (see table). Write down the letter that represents a ketone.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "D. Compound D has a C=O group on an internal carbon (a ketone), not a terminal carbon.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Write down the letter that represents a compound which is an isomer of prop-1-ene.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "C. Compound C is cyclopropane (C3H6), a structural (ring) isomer of prop-1-ene (C3H6).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Write down the IUPAC name of compound B.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propyne.",
    marking_notes: "Accept only 'propyne'.",
    marking_points: [{ marks: 1, description: "propyne", keywords: ["propyne"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.3",
    text: "Draw a chain isomer of compound E (butane, C4H10).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-methylpropane (isobutane): a branched C4H10 chain isomer of butane.",
    marking_notes: "Marking points: correct branched skeleton (methyl branch on a propane chain) (1); whole structure/molecular formula C4H10 correct (1).",
    marking_points: [
      { marks: 1, description: "correctly branched skeleton: methyl group on a 3-carbon chain", keywords: ["methyl", "branch"] },
      { marks: 1, description: "whole structure correct: 2-methylpropane (C4H10)", keywords: ["2 methylpropane", "isobutane"] },
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.4",
    text: "Write down the NAME or FORMULA of EACH of the TWO products formed during the complete combustion of compound E (butane).",
    marks: 4, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2C4H10(g) + 13O2(g) → 8CO2(g) + 10H2O(g). The two products are carbon dioxide (CO2) and water (H2O).",
    marking_notes: "2 marks for carbon dioxide (CO2), 2 marks for water (H2O) — matching the memo's balanced-equation-based mark allocation.",
    marking_points: [
      { marks: 2, description: "carbon dioxide / CO2", keywords: ["carbon dioxide", "co2"] },
      { marks: 2, description: "water / H2O", keywords: ["water", "h2o"] },
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.5.1",
    text: "Compound F is the organic product of the reaction between a carboxylic acid and ethanol. Write down the name of the homologous series to which compound F belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Esters.",
    marking_notes: "Accept only 'esters'.",
    marking_points: [{ marks: 1, description: "esters", keywords: ["esters"] }],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Write down the structural formula of the FUNCTIONAL GROUP of carboxylic acids.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "-COOH (the carboxyl group: -C(=O)-O-H).",
    marking_notes: "Accept -COOH or the carboxyl group described in words.",
    marking_points: [{ marks: 1, description: "-COOH / carboxyl group", keywords: ["cooh", "carboxyl"] }],
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "Write down the IUPAC name of the carboxylic acid from which compound F is prepared.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Butanoic acid.",
    marking_notes: "Accept only 'butanoic acid' (ethyl butanoate is prepared from butanoic acid + ethanol).",
    marking_points: [{ marks: 2, description: "butanoic acid", keywords: ["butanoic acid"] }],
  },
  {
    number: "2", sub_number: "2.5.4",
    text: "Write down the structural formula of compound F (ethyl butanoate).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CH2CH2-C(=O)-O-CH2CH3 (ethyl butanoate).",
    marking_notes: "Marking points: correct ester functional group (-COO-) (1); whole structure correct (butanoic acid chain + ethyl group) (1).",
    marking_points: [
      { marks: 1, description: "correct ester functional group: -COO-", keywords: ["coo", "ester"] },
      { marks: 1, description: "whole structure correct: ethyl butanoate", keywords: ["ethyl butanoate"] },
    ],
  },
  {
    number: "2", sub_number: "2.6.1",
    text: "An ester contains 9,81% hydrogen (H), 58,85% carbon (C) and 31,34% oxygen (O). The molecular mass of the ester is 102 g·mol⁻¹. Calculate the molecular formula of the ester.",
    marks: 6, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "Assuming 100 g of the ester: n(H) = 9,81/1 = 9,81 mol; n(C) = 58,85/12 = 4,90 mol; n(O) = 31,34/16 = 1,96 mol. Dividing by the smallest (1,96): H : C : O ≈ 5 : 2,5 : 1. Multiplying by 2 to clear the half: H : C : O = 10 : 5 : 2, giving empirical formula C5H10O2. Empirical formula mass = 5(12) + 10(1) + 2(16) = 102 g·mol⁻¹, which already equals the given molecular mass (factor = 102/102 = 1), so the molecular formula is C5H10O2.",
    marking_notes: "Marking points: n(H) = 9,81 mol; n(C) = 4,90 mol; n(O) = 1,96 mol; simplest whole-number ratio H:C:O = 10:5:2; empirical formula mass 102 g·mol⁻¹ matches the given molar mass (factor = 1); final answer C5H10O2.",
    steps: [
      { marks: 1, description: "What is n(H), taking the 9,81% as 9,81 g in a 100 g sample (n = m/M)?", options: ["9,81 mol", "58,85 mol", "31,34 mol", "0,98 mol"], correctIndex: 0 },
      { marks: 1, description: "What is n(C), using M = 12 g·mol⁻¹?", options: ["4,90 mol", "58,85 mol", "9,81 mol", "0,49 mol"], correctIndex: 0 },
      { marks: 1, description: "What is n(O), using M = 16 g·mol⁻¹?", options: ["1,96 mol", "31,34 mol", "4,90 mol", "0,20 mol"], correctIndex: 0 },
      { marks: 1, description: "Dividing each by the smallest value (1,96 mol) and then multiplying by 2 to clear the half, what is the simplest whole-number ratio H:C:O?", options: ["10 : 5 : 2", "5 : 2,5 : 1", "1 : 2 : 5", "2 : 5 : 10"], correctIndex: 0 },
      { marks: 1, description: "What is the empirical formula mass of C5H10O2, and how does it compare to the given molar mass (102 g·mol⁻¹)?", options: ["102 g·mol⁻¹ — equal, so the factor is 1", "51 g·mol⁻¹ — factor is 2", "204 g·mol⁻¹ — factor is 0,5", "150 g·mol⁻¹ — factor is 0,68"], correctIndex: 0 },
      { marks: 1, description: "What is the molecular formula of the ester?", options: ["C5H10O2", "C10H5O2", "C5H5O2", "C10H20O4"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.6.2",
    text: "The alcohol used to prepare this ester is ethanol. What is the name of the other reagent used to prepare the ester?",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Propanoic acid (the ester C5H10O2 prepared from ethanol is ethyl propanoate, from propanoic acid + ethanol).",
    marking_notes: "Accept only 'propanoic acid'.",
    marking_points: [{ marks: 1, description: "propanoic acid", keywords: ["propanoic acid"] }],
  },

  // ============ QUESTION 3: INTERMOLECULAR PROPERTIES (13 marks) ============

  {
    number: "3", sub_number: "3.1.1",
    text: "The table shows boiling points of compounds from three homologous series, measured in two experiments (A: CH3COOH, B: CH3CH2CH2OH, C: CH3CH2CHO, D: CH3(CH2)2COOH, E: CH3(CH2)3CH2OH, F: CH3(CH2)3CHO). Name the homologous series to which compounds A and D belong.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Carboxylic acids.",
    marking_notes: "Accept only 'carboxylic acids'.",
    marking_points: [{ marks: 1, description: "carboxylic acids", keywords: ["carboxylic acid"] }],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Name the homologous series to which compounds B and E belong.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Alcohols.",
    marking_notes: "Accept only 'alcohols'.",
    marking_points: [{ marks: 1, description: "alcohols", keywords: ["alcohol"] }],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "Name the homologous series to which compounds C and F belong.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Aldehydes.",
    marking_notes: "Accept only 'aldehydes'.",
    marking_points: [{ marks: 1, description: "aldehydes", keywords: ["aldehyde"] }],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Define the term functional group.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "A bond/atom or group of atoms that determines the physical and chemical properties of a group of organic compounds.",
    marking_notes: "Marking points: a bond/atom or group of atoms (1); that determines the physical and chemical properties of a group of organic compounds (1).",
    marking_points: [
      { marks: 1, description: "a bond/atom or group of atoms", keywords: ["bond", "atom", "group of atoms"] },
      { marks: 1, description: "determines the physical and chemical properties of a group of organic compounds", keywords: ["physical", "chemical properties"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Write down the IUPAC name for compound C.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propanal.",
    marking_notes: "Accept only 'propanal'.",
    marking_points: [{ marks: 1, description: "propanal", keywords: ["propanal"] }],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Write down the IUPAC name for compound E.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Pentan-1-ol.",
    marking_notes: "Accept 'pentan-1-ol' or 'pentanol'.",
    marking_points: [{ marks: 1, description: "pentan-1-ol / pentanol", keywords: ["pentan 1 ol", "pentanol"] }],
  },
  {
    number: "3", sub_number: "3.4",
    text: "For Experiment I, which other variable, apart from the conditions for determining boiling points, was kept constant?",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "The (molar) mass of the compounds — A, B and C all have very similar molar masses (60,5 / 60,1 / 58,1 g·mol⁻¹).",
    marking_notes: "Accept 'mass' or '(molar) mass'.",
    marking_points: [{ marks: 1, description: "(molar) mass", keywords: ["mass"] }],
  },
  {
    number: "3", sub_number: "3.5",
    text: "What conclusion can be drawn from the results in Experiment I?",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "For compounds of similar molar mass, the boiling point of carboxylic acids > alcohols > aldehydes.",
    marking_notes: "Marking points: correct order (carboxylic acids > alcohols > aldehydes) (1); comparison made for compounds of similar molar mass (1).",
    marking_points: [
      { marks: 1, description: "boiling point order: carboxylic acids > alcohols > aldehydes", keywords: ["carboxylic acid", "alcohol", "aldehyde"] },
      { marks: 1, description: "comparison is for compounds of similar molar mass", keywords: ["similar", "molar mass", "same mass"] },
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "Refer to intermolecular forces to explain the difference in boiling points between A and D.",
    marks: 3, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "The size (and mass) of the molecule increases with additional carbon (CH2) groups, so the strength of the Van der Waals forces also increases, meaning more energy is required to overcome the intermolecular forces between molecules of D than between molecules of A — so D has the higher boiling point.",
    marking_notes: "Marking points: size of the molecule increases with additional carbon group(s) (1); mass increases, so Van der Waals forces (strength) increase (1); more energy is required to overcome the (stronger) intermolecular forces (1).",
    marking_points: [
      { marks: 1, description: "size of the molecule increases with additional carbon group(s)", keywords: ["size", "additional carbon"] },
      { marks: 1, description: "mass increases, so Van der Waals forces increase", keywords: ["mass increase", "van der waals"] },
      { marks: 1, description: "more energy is required to overcome the (stronger) intermolecular forces", keywords: ["more energy", "overcome"] },
    ],
  },

  // ============ QUESTION 4: ORGANIC FLOW CHARTS (14 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "The flow diagram shows the conversion of propene to a secondary alcohol: Propene --HBr--> Compound X --H2O (substitution)--> Secondary alcohol. Give a reason why propene is classified as an unsaturated organic compound.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "It contains a double bond between carbon atoms (a C=C double bond).",
    marking_notes: "Must mention a double bond between carbon atoms.",
    marking_points: [{ marks: 1, description: "contains a (C=C) double bond between carbon atoms", keywords: ["double bond"] }],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Use structural formulae to write a balanced equation for the formation of compound X (propene + HBr).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH2=CH-CH3 + HBr → CH3-CHBr-CH3 (2-bromopropane, via Markovnikov addition).",
    marking_notes: "Marking points: correct structural formula of propene (1); HBr correctly shown as a reactant (1); correct product structure with Br on the middle (2nd) carbon (1).",
    marking_points: [
      { marks: 1, description: "correct structural formula of propene", keywords: ["propene", "ch2 ch ch3"] },
      { marks: 1, description: "HBr correctly shown as a reactant", keywords: ["hbr"] },
      { marks: 1, description: "correct product structure: Br on the 2nd (middle) carbon", keywords: ["2 bromopropane", "bromopropane"] },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Name the type of reaction that takes place when propene is converted to compound X.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Addition (hydrohalogenation).",
    marking_notes: "Accept 'addition' and/or 'hydrohalogenation'.",
    marking_points: [{ marks: 1, description: "addition / hydrohalogenation", keywords: ["addition", "hydrohalogenation"] }],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Write down the structural formula and IUPAC name for the secondary alcohol that is formed.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propan-2-ol: CH3-CH(OH)-CH3.",
    marking_notes: "Marking points: correct structure with -OH on the middle carbon (2); correct IUPAC name propan-2-ol (1).",
    marking_points: [
      { marks: 2, description: "correct structure: -OH on the 2nd (middle) carbon", keywords: ["ch3 ch oh ch3", "hydroxyl"] },
      { marks: 1, description: "correct IUPAC name: propan-2-ol", keywords: ["propan 2 ol"] },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Name the type of substitution reaction that takes place when compound X is converted to the secondary alcohol.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Hydrolysis.",
    marking_notes: "Accept only 'hydrolysis'.",
    marking_points: [{ marks: 1, description: "hydrolysis", keywords: ["hydrolysis"] }],
  },
  {
    number: "4", sub_number: "4.6.1",
    text: "With the aid of a catalyst, propene can be converted directly to the secondary alcohol, without forming intermediate compound X. Besides propene, write down the NAME of the reactant needed for this conversion.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Water.",
    marking_notes: "Accept only 'water'.",
    marking_points: [{ marks: 1, description: "water", keywords: ["water"] }],
  },
  {
    number: "4", sub_number: "4.6.2",
    text: "Write down the FORMULA of a catalyst that can be used for this direct conversion.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "H3PO4 (or H2SO4).",
    marking_notes: "Accept H3PO4 or H2SO4.",
    marking_points: [{ marks: 1, description: "H3PO4 / H2SO4", keywords: ["h3po4", "h2so4"] }],
  },
  {
    number: "4", sub_number: "4.6.3",
    text: "Name the type of reaction that will take place during this direct conversion.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Addition (hydration).",
    marking_notes: "Accept 'addition' and/or 'hydration'.",
    marking_points: [{ marks: 1, description: "addition / hydration", keywords: ["addition", "hydration"] }],
  },
  {
    number: "4", sub_number: "4.7.1",
    text: "Concentrated sodium hydroxide is now added to compound X and the mixture is heated. Write down the IUPAC name of the organic product that is formed.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propene.",
    marking_notes: "Accept only 'propene'.",
    marking_points: [{ marks: 1, description: "propene", keywords: ["propene"] }],
  },
  {
    number: "4", sub_number: "4.7.2",
    text: "Name the type of reaction that takes place when concentrated NaOH is added to compound X and heated.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Elimination (dehydrohalogenation).",
    marking_notes: "Accept 'elimination' and/or 'dehydrohalogenation'.",
    marking_points: [{ marks: 1, description: "elimination / dehydrohalogenation", keywords: ["elimination", "dehydrohalogenation"] }],
  },

  // ============ QUESTION 5: RATES OF REACTIONS (12 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "A group of learners investigate the reaction Mg(s) + 2HCℓ(aq) → MgCℓ2(aq) + H2(g). Experiment 1: a spatula of Mg powder + 50 cm³ HCℓ(aq) of known concentration. Experiment 2: repeat, but use only 25 cm³ of the same HCℓ(aq) diluted to 50 cm³ with distilled water. How does the concentration of the acid used in Experiment 2 differ from that used in Experiment 1? (GREATER THAN, SMALLER THAN or EQUAL TO)",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Smaller than.",
    marking_notes: "Accept only 'smaller than'.",
    marking_points: [{ marks: 1, description: "smaller than", keywords: ["smaller"] }],
    image_url: `${IMG}/5-apparatus.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Why should the learners ensure that equal amounts of magnesium powder are used in each of the two experiments?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "To act as a control and to make the test/comparison fair.",
    marking_notes: "Accept 'to act as a control' or 'to make it a fair test'.",
    marking_points: [{ marks: 1, description: "to act as a control / make it a fair test", keywords: ["control", "fair test"] }],
    image_url: `${IMG}/5-apparatus.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "The learners use an excess of HCℓ(aq) for the two experiments. Give a reason why the excess HCℓ(aq) will not influence the results.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "The same mass of magnesium is used in both experiments, so the same amount of HCℓ will react regardless of how much excess is present — magnesium is the limiting reagent.",
    marking_notes: "Marking points: the same mass/volume of Mg will react with the same amount of acid (1); Mg is the limiting reagent (1).",
    marking_points: [
      { marks: 1, description: "the same mass/volume of Mg will react with the same amount of acid", keywords: ["same mass", "same amount"] },
      { marks: 1, description: "Mg is the limiting reagent", keywords: ["limiting reagent", "limiting reactant"] },
    ],
    image_url: `${IMG}/5-apparatus.png`,
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "Using the graph of volume of H2(g) vs time for Experiments 1 and 2, write down the volume of hydrogen gas formed during the first minute in Experiment 1.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "60 cm³.",
    marking_notes: "Accept '60 cm³' (or '60').",
    marking_points: [{ marks: 1, description: "60 cm³", keywords: ["60"] }],
    image_url: `${IMG}/5-graph.png`,
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "Write down the volume of hydrogen gas formed during the first minute in Experiment 2.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "42 cm³ (accept a small range read off the graph, e.g. 40-44 cm³).",
    marking_notes: "Accept '42 cm³' or values close to it read from the graph.",
    marking_points: [{ marks: 1, description: "42 cm³", keywords: ["42"] }],
    image_url: `${IMG}/5-graph.png`,
  },
  {
    number: "5", sub_number: "5.5",
    text: "Which one of the experiments (Experiment 1 or Experiment 2) took place at the faster rate? Refer to the shape of the curves to motivate your answer.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Experiment 1. The gradient of its graph is steeper (than Experiment 2's), showing gas was produced faster.",
    marking_notes: "Marking points: Experiment 1 (1); the gradient of the graph is steeper (1).",
    marking_points: [
      { marks: 1, description: "Experiment 1", keywords: ["experiment 1"] },
      { marks: 1, description: "the gradient of the graph is steeper", keywords: ["gradient", "steeper"] },
    ],
    image_url: `${IMG}/5-graph.png`,
  },
  {
    number: "5", sub_number: "5.6",
    text: "What conclusion can the learners draw from the results obtained?",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Reaction rate increases with an increase in the concentration of the reactant(s).",
    marking_notes: "Marking points: reaction rate increases (1); with an increase in concentration (1).",
    marking_points: [
      { marks: 1, description: "reaction rate increases", keywords: ["rate increases"] },
      { marks: 1, description: "with an increase in concentration", keywords: ["increase in concentration"] },
    ],
    image_url: `${IMG}/5-graph.png`,
  },
  {
    number: "5", sub_number: "5.7.1",
    text: "How will an increase in temperature influence the final volume of gas obtained in each experiment? (INCREASES, DECREASES or REMAINS THE SAME)",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same. The same amount of limiting reagent (Mg) reacts regardless of temperature, so the same total volume of H2 gas is eventually produced.",
    marking_notes: "Accept only 'remains the same'.",
    marking_points: [{ marks: 1, description: "remains the same", keywords: ["remains the same"] }],
    image_url: `${IMG}/5-graph.png`,
  },
  {
    number: "5", sub_number: "5.7.2",
    text: "How will an increase in temperature influence the volume of gas obtained in each experiment after 40 s? (INCREASES, DECREASES or REMAINS THE SAME)",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. A higher temperature speeds up the reaction, so more gas will have formed by the 40 s mark.",
    marking_notes: "Accept only 'increases'.",
    marking_points: [{ marks: 1, description: "increases", keywords: ["increase"] }],
    image_url: `${IMG}/5-graph.png`,
  },

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (18 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "Gas A2B is introduced into a sealed flask and allowed to reach dynamic chemical equilibrium: 2A2B(g) ⇌ 2A2(g) + B2(g). The graph shows the forward/reverse reaction rates vs time, with a volume decrease at t = 120 s and a temperature decrease at t = 180 s. State Le Chatelier's principle.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "When the equilibrium in a closed system is disturbed, the system will shift the equilibrium position (re-instate a new equilibrium) so as to favour the reaction that will oppose/cancel/counteract the change (disturbance).",
    marking_notes: "Marking points: when equilibrium in a closed system is disturbed, the system shifts/re-instates a new equilibrium (1); by favouring the reaction that opposes/cancels/counteracts the change or disturbance (1).",
    marking_points: [
      { marks: 1, description: "when equilibrium in a closed system is disturbed, the system shifts/re-instates a new equilibrium", keywords: ["disturbed", "new equilibrium", "shift"] },
      { marks: 1, description: "by favouring the reaction that opposes/cancels/counteracts the change", keywords: ["favour", "oppose", "cancel", "counteract"] },
    ],
    image_url: `${IMG}/6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "At t = 120 s the volume of the container is decreased. Using Le Chatelier's principle, explain what takes place inside the flask.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Decreasing the volume increases the concentration of reactants and products. The reverse reaction is favoured, since it produces fewer moles of gas (2A2B has 2 mol gas vs 3 mol gas for 2A2 + B2), which opposes the increase in pressure/concentration.",
    marking_notes: "Marking points: concentration of reactants and products increases (1); the reverse reaction is favoured (1); because it forms fewer moles of gas (1).",
    marking_points: [
      { marks: 1, description: "concentration of reactants and products increases", keywords: ["concentration increases"] },
      { marks: 1, description: "the reverse reaction is favoured", keywords: ["reverse reaction", "favoured"] },
      { marks: 1, description: "to form fewer moles of gas", keywords: ["fewer moles", "less mol gas"] },
    ],
    image_url: `${IMG}/6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "At t = 180 s the temperature in the container is decreased. Is the forward reaction EXOTHERMIC or ENDOTHERMIC? Explain your answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Exothermic. Decreasing the temperature (a stress) causes the reverse (rate) to decrease and the forward reaction is favoured, acting to raise the temperature back up — this only happens if the forward reaction releases heat, i.e. is exothermic.",
    marking_notes: "Marking points: exothermic (1); the stress (decrease in temperature) causes the reverse reaction to decrease (1); the forward reaction is favoured, to raise the temperature (1).",
    marking_points: [
      { marks: 1, description: "exothermic", keywords: ["exothermic"] },
      { marks: 1, description: "stress: decrease in temperature causes the reverse reaction to decrease", keywords: ["reverse reaction decreases", "decrease in temperature"] },
      { marks: 1, description: "forward reaction is favoured, to raise the temperature", keywords: ["forward reaction", "favoured", "raise the temperature"] },
    ],
    image_url: `${IMG}/6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "How is the equilibrium constant (Kc) for this reaction affected by the increase in pressure at t = 120 s? (INCREASES, DECREASES or NO EFFECT)",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "No effect. Kc only changes with temperature.",
    marking_notes: "Accept only 'no effect'.",
    marking_points: [{ marks: 1, description: "no effect", keywords: ["no effect"] }],
    image_url: `${IMG}/6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "How is the equilibrium constant (Kc) for this reaction affected by the decrease in temperature at t = 180 s? (INCREASES, DECREASES or NO EFFECT)",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Increases — must be consistent with the answer to 6.3 (an exothermic forward reaction favoured by lower temperature means more product relative to reactant at equilibrium, so Kc increases).",
    marking_notes: "Accept only 'increases' (consistent with 6.3's exothermic answer).",
    marking_points: [{ marks: 1, description: "increases", keywords: ["increase"] }],
    image_url: `${IMG}/6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.5.1",
    text: "Initially 5,1 moles of gas A2B are introduced into a reaction flask, which is then sealed and kept at a constant temperature: 2A2B(g) ⇌ 2A2(g) + B2(g). At equilibrium there is 3,6 mol of gas A2, and [A2] at equilibrium is 1,2 mol·dm⁻³. Calculate the volume of the reaction flask.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "V = n/c = 3,6/1,2 = 3 dm³.",
    marking_notes: "Marking points: correct formula V = n/c (1); correct final answer 3 dm³ (1).",
    steps: [
      { marks: 1, description: "Which formula relates volume, moles and concentration?", options: ["V = n/c", "V = c/n", "V = nc", "V = n + c"], correctIndex: 0 },
      { marks: 1, description: "What is the volume of the reaction flask?", options: ["3 dm³", "4,32 dm³", "0,33 dm³", "1,2 dm³"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.5.2",
    text: "Calculate the value of the equilibrium constant (Kc) for this reaction (2A2B(g) ⇌ 2A2(g) + B2(g)) at this constant temperature.",
    marks: 6, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "n(A2B) at equilibrium = 5,1 − 3,6 = 1,5 mol; using the 2:1 mole ratio, n(B2) formed = 1,8 mol. In the 3 dm³ flask: [A2B] = 1,5/3 = 0,5 mol·dm⁻³; [A2] = 3,6/3 = 1,2 mol·dm⁻³; [B2] = 1,8/3 = 0,6 mol·dm⁻³. Kc = [A2]²[B2] / [A2B]² = (1,2² × 0,6) / 0,5² = 0,864/0,25 = 3,46.",
    marking_notes: "Marking points: n(A2B) remaining = 1,5 mol; n(B2) formed = 1,8 mol (2:1 ratio with A2); [A2B] = 0,5 mol·dm⁻³; [A2] = 1,2 mol·dm⁻³ and [B2] = 0,6 mol·dm⁻³; correct Kc expression and substitution; final answer Kc = 3,46 (no units).",
    steps: [
      { marks: 1, description: "What is n(A2B) remaining at equilibrium (5,1 − 3,6)?", options: ["1,5 mol", "3,6 mol", "5,1 mol", "8,7 mol"], correctIndex: 0 },
      { marks: 1, description: "Using the 2A2 : B2 mole ratio (2:1), what is n(B2) formed (from 3,6 mol A2)?", options: ["1,8 mol", "3,6 mol", "7,2 mol", "0,9 mol"], correctIndex: 0 },
      { marks: 1, description: "What is [A2B] at equilibrium, using V = 3 dm³?", options: ["0,5 mol·dm⁻³", "1,2 mol·dm⁻³", "1,7 mol·dm⁻³", "1,5 mol·dm⁻³"], correctIndex: 0 },
      { marks: 1, description: "What are [A2] and [B2] at equilibrium?", options: ["1,2 mol·dm⁻³ and 0,6 mol·dm⁻³", "3,6 mol·dm⁻³ and 1,8 mol·dm⁻³", "0,5 mol·dm⁻³ and 0,5 mol·dm⁻³", "1,2 mol·dm⁻³ and 1,8 mol·dm⁻³"], correctIndex: 0 },
      { marks: 1, description: "Which is the correct Kc expression and substitution?", options: ["Kc = (1,2² × 0,6) / 0,5²", "Kc = 0,5² / (1,2² × 0,6)", "Kc = (1,2 × 0,6²) / 0,5", "Kc = (1,2² × 0,5) / 0,6²"], correctIndex: 0 },
      { marks: 1, description: "What is the final value of Kc?", options: ["3,46", "0,29", "1,44", "6,91"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 7: ACIDS AND BASES (21 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "Consider the ionisation of the HSO3⁻ ion: HSO3⁻(aq) + H2O ⇌ SO3²⁻(aq) + H3O⁺(aq), Ka = 6,5 × 10⁻⁸. Define ionisation.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "The reaction of a molecular substance with water to produce ions.",
    marking_notes: "Marking points: reaction of a molecular substance with water (1); to produce ions (1).",
    marking_points: [
      { marks: 1, description: "reaction of a molecular substance with water", keywords: ["molecular substance", "water"] },
      { marks: 1, description: "to produce ions", keywords: ["produce ions"] },
    ],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Define a base in terms of the Brønsted-Lowry model.",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "A proton acceptor.",
    marking_notes: "Accept only 'a proton acceptor'.",
    marking_points: [{ marks: 1, description: "a proton acceptor", keywords: ["proton acceptor"] }],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Give the name of the conjugate acid of HSO3⁻.",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "Sulphurous acid (H2SO3).",
    marking_notes: "Accept only 'sulphurous acid'.",
    marking_points: [{ marks: 1, description: "sulphurous acid", keywords: ["sulphurous acid"] }],
  },
  {
    number: "7", sub_number: "7.1.4",
    text: "Explain what the magnitude of the Ka value for this reaction (Ka = 6,5 × 10⁻⁸) indicates about HSO3⁻.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "The small Ka value shows that HSO3⁻ only partially ionises in solution — HSO3⁻ is a weak acid.",
    marking_notes: "Marking points: it partially ionises in solution (1); HSO3⁻ is a weak acid (1).",
    marking_points: [
      { marks: 1, description: "it partially ionises in solution", keywords: ["partially ionises"] },
      { marks: 1, description: "HSO3⁻ is a weak acid", keywords: ["weak acid"] },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "BaSO3 is an insoluble salt. A few crystals of Ba(NO3)2(s) are added to the HSO3⁻/SO3²⁻ equilibrium mixture. Explain, by applying Le Châtelier's principle, how the pH of the solution will be affected.",
    marks: 5, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "Ba²⁺ reacts with SO3²⁻ to precipitate insoluble BaSO3, so [SO3²⁻] decreases. This favours the forward (ionisation) reaction, replacing some of the SO3²⁻ removed — more HSO3⁻ ionises. [H3O⁺] therefore increases, so the pH decreases.",
    marking_notes: "Marking points: [SO3²⁻] decreases (removed as precipitate) (1); the equilibrium shifts to replace the SO3²⁻ removed / forward reaction favoured (1); more HSO3⁻ ionises (1); [H3O⁺] increases (1); pH decreases (1).",
    marking_points: [
      { marks: 1, description: "[SO3²⁻] decreases (removed as precipitate BaSO3)", keywords: ["so3 2 decrease", "precipitate"] },
      { marks: 1, description: "the forward (ionisation) reaction is favoured, to replace the SO3²⁻ removed", keywords: ["forward reaction", "favoured"] },
      { marks: 1, description: "more HSO3⁻ ionises", keywords: ["ionises", "more hso3"] },
      { marks: 1, description: "[H3O⁺] increases", keywords: ["h3o", "increases"] },
      { marks: 1, description: "pH decreases", keywords: ["ph decreases"] },
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "5 g of impure magnesium carbonate, MgCO3, is added to 50 cm³ of sulphuric acid of concentration 1,0 mol·dm⁻³: MgCO3(s) + H2SO4(aq) → MgSO4(aq) + CO2(g) + H2O(ℓ) ...(i). Calculate the initial (total) number of moles of sulphuric acid to which the impure magnesium carbonate was added.",
    marks: 3, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "n(H2SO4) = c × V = 1,0 × 0,05 = 0,05 mol.",
    marking_notes: "Marking points: correct formula n = CV (1); correct substitution 1,0 × 0,05 (1); final answer 0,05 mol (1).",
    steps: [
      { marks: 1, description: "Which formula gives moles from concentration and volume?", options: ["n = CV", "n = C/V", "n = V/C", "n = C + V"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution, using V in dm³ (50 cm³ = 0,05 dm³)?", options: ["1,0 × 0,05", "1,0 × 50", "1,0 / 0,05", "0,05 / 1,0"], correctIndex: 0 },
      { marks: 1, description: "What is n(H2SO4), the initial (total) number of moles?", options: ["0,05 mol", "0,5 mol", "50 mol", "0,005 mol"], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "The reaction is allowed to proceed until all the pure magnesium carbonate reacts. The excess sulphuric acid is neutralised by adding 28 cm³ of 0,5 mol·dm⁻³ sodium hydroxide solution: H2SO4(aq) + 2NaOH(aq) → Na2SO4(aq) + 2H2O(ℓ) ...(ii). Calculate the % purity of the magnesium carbonate.",
    marks: 7, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "n(NaOH) = CV = 0,5 × 0,028 = 0,014 mol. Using the 2:1 mole ratio (equation ii), n(H2SO4 excess) = 0,014/2 = 0,007 mol. n(H2SO4 that reacted with MgCO3) = 0,05 − 0,007 = 0,043 mol. Using the 1:1 mole ratio (equation i), n(MgCO3) = 0,043 mol. m(MgCO3) = nM = 0,043 × 84,3 = 3,62 g. % purity = (3,62/5) × 100 = 72,50%.",
    marking_notes: "Marking points: n(NaOH) = 0,014 mol; mole ratio NaOH:H2SO4 = 2:1, giving n(H2SO4 excess) = 0,007 mol; n(H2SO4 reacted with MgCO3) = 0,05 − 0,007 = 0,043 mol; mole ratio H2SO4:MgCO3 = 1:1, so n(MgCO3) = 0,043 mol; m(MgCO3) = nM = 3,62 g; % purity formula (mass recovered / 5 g) × 100; final answer 72,50% (accept 72,40-72,50%).",
    steps: [
      { marks: 1, description: "What is n(NaOH) used to neutralise the excess acid (n = CV, with V = 0,028 dm³)?", options: ["0,014 mol", "0,028 mol", "0,05 mol", "0,0014 mol"], correctIndex: 0 },
      { marks: 1, description: "Using the mole ratio NaOH:H2SO4 = 2:1, what is n(H2SO4) in excess?", options: ["0,007 mol", "0,014 mol", "0,028 mol", "0,0035 mol"], correctIndex: 0 },
      { marks: 1, description: "What is n(H2SO4) that reacted with the MgCO3 (0,05 mol total − excess)?", options: ["0,043 mol", "0,057 mol", "0,007 mol", "0,05 mol"], correctIndex: 0 },
      { marks: 1, description: "Using the mole ratio H2SO4:MgCO3 = 1:1 (equation i), what is n(MgCO3)?", options: ["0,043 mol", "0,086 mol", "0,0215 mol", "0,007 mol"], correctIndex: 0 },
      { marks: 1, description: "What mass of (pure) MgCO3 reacted, using M(MgCO3) = 84,3 g·mol⁻¹?", options: ["3,62 g", "1,81 g", "7,25 g", "0,043 g"], correctIndex: 0 },
      { marks: 1, description: "Which formula gives the % purity?", options: ["(mass of pure MgCO3 / 5 g) × 100", "(5 g / mass of pure MgCO3) × 100", "(mass of pure MgCO3 / 84,3) × 100", "(mass of pure MgCO3 × 5) / 100"], correctIndex: 0 },
      { marks: 1, description: "What is the % purity of the magnesium carbonate?", options: ["72,50%", "86,00%", "60,33%", "43,00%"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: GALVANIC CELLS (19 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "Chlorine gas and iron(II) ions react in aqueous solution: Cℓ2 + 2Fe²⁺ → 2Cℓ⁻ + 2Fe³⁺. The diagram shows a galvanic cell used to determine Ecell° for this reaction. Half-cell X (left) has gas A fed in over a Pt electrode, with electrolyte B; a voltmeter and salt bridge (E) connect to half-cell Y. Give the chemical formulae of the substances represented by A and B.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "A: Cℓ2(g). B: Cℓ⁻ (e.g. as NaCℓ(aq) or KCℓ(aq), the electrolyte of half-cell X).",
    marking_notes: "1 mark for A (Cℓ2), 1 mark for B (Cℓ⁻).",
    marking_points: [
      { marks: 1, description: "A: Cℓ2 (chlorine gas)", keywords: ["cl2", "chlorine"] },
      { marks: 1, description: "B: Cℓ⁻ (chloride ions in solution)", keywords: ["cl", "chloride"] },
    ],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Give the chemical formulae of the substances represented by C and D (the electrode and electrolyte of half-cell Y).",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "C: Pt (inert electrode). D: Fe²⁺; Fe³⁺ (both ions in solution in half-cell Y).",
    marking_notes: "1 mark for C (Pt), 1 mark for D (Fe²⁺; Fe³⁺).",
    marking_points: [
      { marks: 1, description: "C: Pt", keywords: ["pt"] },
      { marks: 1, description: "D: Fe2+; Fe3+", keywords: ["fe2", "fe3"] },
    ],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "The section labelled E (connecting the two half-cells) is a salt bridge. What is the function of E?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "It completes the circuit (maintains electrical neutrality in both half-cells).",
    marking_notes: "Accept 'completes the circuit' or 'maintains electrical neutrality'.",
    marking_points: [{ marks: 1, description: "completes the circuit / maintains electrical neutrality", keywords: ["completes the circuit", "electrical neutrality"] }],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Give the chemical formula of a suitable compound that could be dissolved in water to make the solution to fill E (the salt bridge).",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "KNO3 (any soluble Group 1 metal salt with a spectator anion, e.g. KNO3, NaNO3, KCℓ).",
    marking_notes: "Accept any suitable Group 1 metal salt formula, e.g. KNO3.",
    marking_points: [{ marks: 1, description: "KNO3 (or another suitable Group 1 metal salt)", keywords: ["kno3", "nano3", "kcl"] }],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "Give a reason why your choice of compound in Question 8.2.2 is suitable for this purpose.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "The ions present allow electrical conductivity (to complete the circuit), and the compound is highly soluble and inert/unreactive, so its ions act only as spectator ions and don't react with either half-cell.",
    marking_notes: "Marking points: ions present allow electrical conductivity (1); highly soluble and inert/unreactive (acts only as spectator ions) (1).",
    marking_points: [
      { marks: 1, description: "ions present allow electrical conductivity", keywords: ["conductivity", "conduct"] },
      { marks: 1, description: "highly soluble and inert/unreactive (spectator ions)", keywords: ["soluble", "inert", "spectator"] },
    ],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "Is this reaction (Cℓ2 + 2Fe²⁺ → 2Cℓ⁻ + 2Fe³⁺) exothermic or endothermic? Give a reason for your answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Exothermic — a spontaneous galvanic cell reaction releases energy.",
    marking_notes: "Marking points: exothermic (1); it is a spontaneous reaction that releases energy (1).",
    marking_points: [
      { marks: 1, description: "exothermic", keywords: ["exothermic"] },
      { marks: 1, description: "spontaneous reaction that releases energy", keywords: ["spontaneous", "releases energy"] },
    ],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.3",
    text: "Calculate the initial cell potential (Ecell°) for this cell under standard conditions.",
    marks: 5, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Ecell° = Ecathode° − Eanode°. Cℓ2/Cℓ⁻ (E° = +1,36 V) is reduced at the cathode; Fe³⁺/Fe²⁺ (E° = +0,77 V) is oxidised at the anode. Ecell° = 1,36 − 0,77 = 0,59 V.",
    marking_notes: "Marking points: correct formula Ecell = Ecathode − Eanode; cathode correctly identified as Cℓ2/Cℓ⁻ with E° = +1,36 V; anode correctly identified as Fe³⁺/Fe²⁺ with E° = +0,77 V; correct substitution 1,36 − 0,77; final answer 0,59 V.",
    steps: [
      { marks: 1, description: "Which formula gives the standard cell potential?", options: ["Ecell° = Ecathode° − Eanode°", "Ecell° = Eanode° − Ecathode°", "Ecell° = Ecathode° + Eanode°", "Ecell° = Ecathode° × Eanode°"], correctIndex: 0 },
      { marks: 1, description: "Which half-reaction is the cathode (reduction, higher/more positive E°)?", options: ["Cℓ2 + 2e⁻ → 2Cℓ⁻, E° = +1,36 V", "Fe³⁺ + e⁻ → Fe²⁺, E° = +0,77 V", "Cℓ2 + 2e⁻ → 2Cℓ⁻, E° = +0,77 V", "Fe³⁺ + e⁻ → Fe²⁺, E° = +1,36 V"], correctIndex: 0 },
      { marks: 1, description: "Which half-reaction is the anode (oxidation, lower/less positive E°)?", options: ["Fe²⁺ → Fe³⁺ + e⁻, E° = +0,77 V", "Cℓ⁻ → ½Cℓ2 + e⁻, E° = +1,36 V", "Fe²⁺ → Fe³⁺ + e⁻, E° = +1,36 V", "Cℓ⁻ → ½Cℓ2 + e⁻, E° = +0,77 V"], correctIndex: 0 },
      { marks: 1, description: "What is the correct substitution?", options: ["1,36 − 0,77", "0,77 − 1,36", "1,36 + 0,77", "1,36 − 0"], correctIndex: 0 },
      { marks: 1, description: "What is Ecell°?", options: ["0,59 V", "2,13 V", "−0,59 V", "1,05 V"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.4",
    text: "Iron(III) hydroxide is far less soluble than iron(II) hydroxide. Make use of this fact and Le Châtelier's principle to explain how the Emf of the cell will be affected if some NaOH is added to the Fe²⁺ | Fe³⁺ half-cell.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Adding OH⁻ precipitates the far-less-soluble Fe(OH)3, so [Fe³⁺] decreases more than [Fe²⁺]. This favours the forward reaction (more Fe²⁺ is oxidised to Fe³⁺) to increase [Fe³⁺] again. As a result, the Emf of the cell increases.",
    marking_notes: "Marking points: Fe³⁺ decreases more than Fe²⁺ (precipitates as the less-soluble Fe(OH)3) (1); the forward reaction is favoured (1); to increase the concentration of Fe³⁺ (1); Emf will increase (1).",
    marking_points: [
      { marks: 1, description: "Fe3+ decreases more than Fe2+ (precipitates as the less-soluble Fe(OH)3)", keywords: ["fe3", "decrease more"] },
      { marks: 1, description: "the forward reaction is favoured", keywords: ["forward reaction", "favoured"] },
      { marks: 1, description: "to increase the concentration of Fe3+", keywords: ["increase", "concentration of fe3"] },
      { marks: 1, description: "EMF will increase", keywords: ["emf", "increase"] },
    ],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },

  // ============ QUESTION 9: ELECTROLYTIC CELLS (11 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "Electrolysis is an important industrial process used to decompose compounds, extract metals from their ores, and purify metals like gold or copper. The diagram shows a simplified electrolytic cell used to purify copper, with electrodes P and Q dipped in CuSO4(aq) and connected to a battery. Define the term electrolysis.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "The process in which electricity is used to bring about a (non-spontaneous) chemical change/to decompose or break compounds into their components (or: a process where electrical energy is converted into chemical energy).",
    marking_notes: "Accept either the 'electricity used to bring about chemical change/decompose compounds' phrasing or the 'electrical energy converted into chemical energy' phrasing, in full, for 2 marks.",
    marking_points: [{ marks: 2, description: "process where electricity brings about a chemical change / decomposes compounds (or: electrical energy converted into chemical energy)", keywords: ["chemical change", "decompose", "electrical energy", "chemical energy"] }],
  },
  {
    number: "9", sub_number: "9.2",
    text: "Which electrode, P or Q, consists of the impure copper? Explain how you arrived at your answer.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "P. P is the anode (connected to the positive terminal of the battery), and oxidation (the impure copper dissolving into solution as Cu²⁺) takes place at the anode.",
    marking_notes: "Marking points: P (1); P is the anode (1); oxidation takes place at the anode (1).",
    marking_points: [
      { marks: 1, description: "P", keywords: ["p"] },
      { marks: 1, description: "P is the anode", keywords: ["anode"] },
      { marks: 1, description: "oxidation takes place at the anode", keywords: ["oxidation"] },
    ],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
  {
    number: "9", sub_number: "9.3",
    text: "Write down the half-reaction that takes place at electrode Q.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cu²⁺(aq) + 2e⁻ → Cu(s).",
    marking_notes: "Marking points: correct species and electrons (Cu2+ + 2e-) (1); correct product and direction (→ Cu(s)) (1).",
    marking_points: [
      { marks: 1, description: "Cu2+(aq) + 2e- (correct reactant and electrons)", keywords: ["cu2", "2e"] },
      { marks: 1, description: "→ Cu(s) (correct product, reduction)", keywords: ["cu(s)", "cu s"] },
    ],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
  {
    number: "9", sub_number: "9.4",
    text: "During purification, metals such as silver and platinum form sludge at the bottom of the container. Refer to the relative strengths of reducing agents to explain why these two metals do not form ions during the purification process.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Pt and Ag are both weaker reducing agents than Cu, so they will not be oxidised (Cu, the stronger reducing agent, is oxidised instead).",
    marking_notes: "Marking points: Pt and Ag are weaker reducing agents (than Cu) (1); so they will not undergo oxidation / Cu (the stronger reducing agent) is oxidised instead (1).",
    marking_points: [
      { marks: 1, description: "Pt and Ag are weaker reducing agents than Cu", keywords: ["weaker reducing agent"] },
      { marks: 1, description: "they will not undergo oxidation / Cu is oxidised instead (stronger reducing agent)", keywords: ["not undergo oxidation", "stronger reducing agent"] },
    ],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
  {
    number: "9", sub_number: "9.5",
    text: "Explain why the concentration of the copper(II) sulphate solution remains constant. Assume that the only impurities in the copper are silver and platinum.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "The rate at which copper is oxidised (dissolved) at the anode is equal to the rate at which copper ions are reduced (deposited) at the cathode, so [Cu²⁺] stays constant.",
    marking_notes: "Marking points: the rate at which Cu is oxidised at the anode (1); equals the rate at which Cu2+ is reduced at the cathode (1).",
    marking_points: [
      { marks: 1, description: "the rate at which Cu is oxidised at the anode", keywords: ["rate", "oxidised", "anode"] },
      { marks: 1, description: "equals the rate at which Cu2+ is reduced at the cathode", keywords: ["equal", "reduced", "cathode"] },
    ],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
];

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
