// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2024, National
// (English).
// Source: single combined PDF (question paper + marking guideline) fetched
// from stanmorephysics.com. QP is pages 1-21 of that PDF (17 pages of
// content + 4 data-sheet pages), memo is pages 22-49; page-by-page
// cross-check of question numbers/marks against the memo's answers found no
// stray or mismatched pages.
//
// Paper structure: NINE compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here.
//
// This is the second Physical Sciences: Chemistry (P2) paper ingested into
// this app (the first was Nov 2025 — see physical-sciences-p2-nov2025.ts).
// It reuses the SAME subject row ("Physical Sciences") and the SAME four
// CAPS cognitive levels (Recall/Comprehension/Application/Evaluation), and
// reuses every topic from the Nov 2025 Chemistry paper, since this paper's
// content (organic nomenclature/isomers/reactions, intermolecular forces,
// stoichiometry, rate and extent of reaction, chemical equilibrium, acids
// and bases, and electrochemical reactions) is fully covered by those
// existing topics — no new topics were needed.
//
// Diagrams (the potential-energy diagram in 1.4, the galvanic/electrolytic
// cell diagrams in 1.9/1.10/9.1/9.2, the organic-compounds table in Q2, the
// flow diagram in Q4, the H2-volume-vs-time graph and Maxwell-Boltzmann
// curve in Q5, and the concentration-vs-time graph in Q6.1) are vector
// line-drawings rendered directly into the page content stream, not
// separate embedded raster images, so they were cropped from full-page PNG
// renders (via Pillow) rather than extracted as clean standalone images.
// The site's watermark ("Stanmorephysics.com" + a faint leaning-tower
// graphic) appears faintly on some source pages; crops were framed as
// tightly as possible but a few (2-compounds-table, 5.2-maxwell-boltzmann,
// 9.2-cell-diagram) still carry a faint watermark ghost since the exam
// content itself overlaps the watermark region on those pages.
//
// Calculation questions (5.1.2, 6.2, 7.5, 7.6, 9.1) use `steps` instead of
// `marking_points`: the student works the problem out on paper as normal,
// then picks the option they got for each mark-earning step (formula,
// intermediate value, final answer) from a few choices, rather than typing
// anything. Distractors are chosen to trap specific real errors (wrong mole
// ratio, wrong formula, using the wrong given value, arithmetic slips seen
// elsewhere in the official memo's own worked options).
//
// FLAG for review: the official memo's marking-criteria summary box for
// 7.5 states "(e) Final answer: 0,0625 mol·dm⁻³", but BOTH fully worked
// options (OPTION 1 and OPTION 2) in the same memo compute and state
// [K2CO3] = 0,0622 mol·dm⁻³ (with 0,0625 mol·dm⁻³ appearing nowhere in
// either worked calculation) and the memo's own accepted range is
// "0,06 to 0,0625 mol·dm⁻³" — which 0,0622 falls inside. Since both worked
// examples agree on 0,0622 and the summary box's "0,0625" looks like a
// rounding slip that was never propagated into either working, the final
// step here uses 0,0622 mol·dm⁻³ (which is also consistent with the
// downstream 7.6 answer of x = 2, computed from 0,0622).
//
// Question 4.6.3 (IUPAC name of compound T): the memo accepts EITHER
// "but-2-ene" or "but-1-ene" as correct, even though the flow diagram is
// only consistent with one specific isomer given reactions IV/V (T is
// produced from S via elimination with NaOH, and 4.6.2's worked equation
// shows but-2-ene forming). This app's model_answer uses "but-2-ene" (the
// one actually diagrammed in the 4.6.2 working) but the marking point
// accepts either name per the memo's own stated leniency.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2024-p2";

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

// Every topic below is reused verbatim (same `name`) from
// physical-sciences-p2-nov2025.ts so seed.ts's name-based topic matching
// attaches these questions to the SAME topic rows rather than duplicating
// them.
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
  year: 2024,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2025/04/NSC-Physical-Sciences-Grade-12-November-2024-P2-and-Memo.pdf" as string | null,
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
    text: "Which ONE of the following compounds has hydrogen bonds between its molecules? (A) CH3CH2CHO (B) CH3COOCH3 (C) CH3CH2CH2OH (D) CH3COCH3",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "C — CH3CH2CH2OH. This is propan-1-ol, an alcohol; alcohols have an -OH group that allows hydrogen bonding between molecules, unlike the aldehyde (A), ester (B) or ketone (D).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Which ONE of the following is a CORRECT general formula for the carboxylic acids? (A) CnH2n+1O2 (B) CnH2nO2n (C) CnH2nO2 (D) CnHnO2",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "C — CnH2nO2. This is the general formula for the carboxylic acid homologous series.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Study the reactions below. Reaction 1: CH3CH2CHOHCH3 --H2SO4(conc.)--> Compound P (major product) + H2O. Reaction 2: Compound P --hydrogenation--> Compound Q. Which ONE of the following combinations is the CORRECT IUPAC names of compounds P and Q? (A) P: But-1-ene, Q: Butane (B) P: But-2-ene, Q: Butane (C) P: But-1-ene, Q: Butan-2-ol (D) P: But-2-ene, Q: Butan-2-ol",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "B — P: But-2-ene, Q: Butane. Reaction 1 is an elimination (dehydration) of butan-2-ol with concentrated H2SO4, giving but-2-ene (the major/Zaitsev product) as P; reaction 2 is hydrogenation (addition of H2), converting the alkene P to the alkane butane (Q).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "The potential energy diagram below is for the hypothetical reaction X + Y ⇌ Z (a curve rising from a plateau to a single peak then falling to a lower plateau). Which ONE of the following combinations of values for the heat of the reaction and the activation energies can be obtained for this reaction? (A) ΔH(forward) = -400 kJ·mol⁻¹, EA(forward) = 300 kJ·mol⁻¹, EA(reverse) = 100 kJ·mol⁻¹ (B) ΔH(forward) = -200 kJ·mol⁻¹, EA(forward) = 300 kJ·mol⁻¹, EA(reverse) = 100 kJ·mol⁻¹ (C) ΔH(forward) = +400 kJ·mol⁻¹, EA(forward) = 100 kJ·mol⁻¹, EA(reverse) = 300 kJ·mol⁻¹ (D) ΔH(forward) = -200 kJ·mol⁻¹, EA(forward) = 100 kJ·mol⁻¹, EA(reverse) = 300 kJ·mol⁻¹",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "D — ΔH(forward) = -200 kJ·mol⁻¹, EA(forward) = 100 kJ·mol⁻¹, EA(reverse) = 300 kJ·mol⁻¹. The diagram shows the products at a lower potential energy than the reactants (exothermic, ΔH negative) and EA(forward) = ΔH + EA(reverse) must hold; only option D is internally consistent (-200 = 100 - 300).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.4-potential-energy-diagram.png`,
  },
  {
    number: "1", sub_number: "1.5",
    text: "Initially, an equal number of moles of hydrogen gas, H2(g), and iodine gas, I2(g), are mixed in a closed container. The reaction reaches equilibrium at a constant temperature according to the balanced equation: H2(g) + I2(g) ⇌ 2HI(g). Which ONE of the following is ALWAYS TRUE at equilibrium? (A) [H2] = [I2] (B) [HI] = [I2] (C) [HI] = 2[H2] (D) [H2] = [I2] = [HI]",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "A — [H2] = [I2]. Since H2 and I2 start with equal moles and are consumed in a 1:1 ratio, their concentrations remain equal at every point, including at equilibrium, regardless of how far the reaction has proceeded.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "Consider the following reaction at equilibrium: 2SO2(g) + O2(g) ⇌ 2SO3(g), ΔH = -188 kJ·mol⁻¹. Which ONE of the changes to the reaction conditions below will increase the yield of SO3(g)? (A) The addition of O2(g) (B) The addition of a catalyst (C) An increase in temperature (D) An increase in the volume of the container at a constant temperature",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "A — The addition of O2(g). Adding a reactant shifts the equilibrium to favour the forward reaction (Le Chatelier's principle), increasing the yield of SO3. A catalyst does not affect yield, an increase in temperature favours the reverse (endothermic) reaction, and increasing the volume favours the side with more moles of gas (reactants).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "The table below shows the ionisation constants, Ka, for two acids at 25 °C: Butanoic acid Ka = 1,5 × 10⁻⁵; Ethanoic acid Ka = 1,8 × 10⁻⁵. Consider the following statements for these two acids when they have equal concentration at 25 °C: (i) Both are weak acids. (ii) Butanoic acid is a stronger acid than ethanoic acid. (iii) The butanoic acid solution has a lower concentration of hydronium ion, H3O+(aq), than the ethanoic acid solution. Which of the above statements are TRUE? (A) (i) and (ii) only (B) (i) and (iii) only (C) (ii) and (iii) only (D) (i), (ii) and (iii)",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "B — (i) and (iii) only. Both acids are weak (Ka much less than 1), so (i) is true. Butanoic acid has the SMALLER Ka (1,5×10⁻⁵ < 1,8×10⁻⁵), so it is the WEAKER acid, making (ii) false; being weaker, it also has a lower [H3O+], making (iii) true.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Which ONE of the following pairs of acids and bases, all of the same concentration, react to give the highest pH at the equivalence point in a titration at 25 °C? (A) HCl and NH3 (B) HCl and NaOH (C) HNO3 and KOH (D) CH3COOH and NaOH",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "D — CH3COOH and NaOH. This is a weak acid/strong base titration; the salt formed (sodium ethanoate) hydrolyses to give a basic solution, so the equivalence point pH is greater than 7 — higher than the pH-7 equivalence points of the strong acid/strong base pairs (B and C) or the pH-below-7 equivalence point of the strong acid/weak base pair (A).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.9",
    text: "A standard galvanic cell is set up: a cadmium electrode dips into Cd2+(aq) and a silver electrode dips into Ag+(aq), connected by a salt bridge and a voltmeter (V). Which ONE of the following combinations of the metal used as cathode and the electron flow direction is CORRECT? (A) Cathode: Cd, Electron flow: Cd to Ag (B) Cathode: Ag, Electron flow: Cd to Ag (C) Cathode: Cd, Electron flow: Ag to Cd (D) Cathode: Ag, Electron flow: Ag to Cd",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "B — Cathode: Ag, Electron flow: Cd to Ag. Cd (E° = -0,40 V) is the stronger reducing agent, so it is oxidised at the anode; Ag+ (E° = +0,80 V) is reduced at the cathode. Electrons flow through the external circuit from the anode (Cd) to the cathode (Ag).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.9-galvanic-cell.png`,
  },
  {
    number: "1", sub_number: "1.10",
    text: "An electrolytic cell is set up to electroplate an iron rod with nickel, as shown in the diagram (two electrodes dipped in an electrolyte, connected to a power source). Consider the following statements: (i) The iron rod is the negative electrode. (ii) The metal ions in the solution undergo reduction. (iii) The anode is pure nickel. Which of the above statements are TRUE? (A) (i) and (ii) only (B) (i) and (iii) only (C) (ii) and (iii) only (D) (i), (ii) and (iii)",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "D — (i), (ii) and (iii). In electroplating, the object to be plated (the iron rod) is made the cathode (negative electrode, connected to the negative terminal), so (i) is true. Ni2+ ions in solution are reduced (deposited) onto the iron rod at the cathode, so (ii) is true. The anode is the pure nickel electrode, which dissolves to replenish Ni2+ ions, so (iii) is true.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.10-electroplating.png`,
  },

  // ============ QUESTION 2: ORGANIC NOMENCLATURE (18 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The letters A to H in the table represent organic compounds: A is CH3CH(CH3)CH(CH3)CHO (drawn in full structural form), B is a dibromo-dimethyl-substituted octane (drawn in full structural form), C is Butanone, D is C4H10O, E is CH3C(CH3)2CCCH3, F is CH3COO(CH2)2CH3, G is C4H8O2, H is CH3C(CH3)2CH2CH3. Write down the LETTER that represents an alcohol.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "D. D has molecular formula C4H10O, which is a butanol — an alcohol.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Write down the LETTER that represents a compound with a formyl group.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "A. Compound A has a terminal -CHO (formyl/aldehyde) group.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Write down the LETTER that represents an unsaturated compound.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "E. E (CH3C(CH3)2CCCH3) contains a carbon-carbon triple bond (an alkyne), making it unsaturated.",
    marking_notes: "Accept only 'E'.",
    marking_points: [{ marks: 1, description: "E", keywords: ["e"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Write down the IUPAC name of compound B.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "3,3-dibromo-4,4-dimethylhexane.",
    marking_notes: "Full marks require the correct stem (hexane), the substituents (dibromo and dimethyl) correctly identified, and the complete IUPAC name including numbering, sequence, hyphens and commas.",
    marking_points: [
      { marks: 1, description: "correct stem: hexane", keywords: ["hexane"] },
      { marks: 1, description: "substituents (bromo and methyl) correctly identified", keywords: ["bromo", "methyl"] },
      { marks: 1, description: "IUPAC name fully correct: 3,3-dibromo-4,4-dimethylhexane", keywords: ["3 3 dibromo 4 4 dimethylhexane"] },
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Write down the IUPAC name of compound E.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "4,4-dimethylpent-2-yne (accept 4,4-dimethyl-2-pentyne).",
    marking_notes: "Full marks require the correct stem (pentyne), the substituent (dimethyl) correctly identified, and the complete IUPAC name including numbering, sequence, hyphens and commas.",
    marking_points: [
      { marks: 1, description: "correct stem: pentyne", keywords: ["pentyne"] },
      { marks: 1, description: "substituent (dimethyl) correctly identified", keywords: ["dimethyl"] },
      { marks: 1, description: "IUPAC name fully correct: 4,4-dimethylpent-2-yne", keywords: ["4 4 dimethylpent 2 yne", "4 4 dimethyl 2 pentyne"] },
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Two different compounds in the table above are functional isomers. Define the term functional isomer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Compounds with the same molecular formula but different functional groups/homologous series.",
    marking_notes: "Key phrases 'same molecular formula' and 'different functional groups/homologous series' must be in the correct context; omitting either costs 1 mark.",
    marking_points: [
      { marks: 1, description: "same molecular formula", keywords: ["same molecular formula"] },
      { marks: 1, description: "different functional groups / homologous series", keywords: ["different functional group", "homologous series"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Write down the LETTERS that represent these functional isomers.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "A and C. A (an aldehyde, C5H10O) and C (butanone, a ketone — but sharing the same molecular formula context as A here) are functional isomers.",
    marking_notes: "Both letters A and C required for the mark.",
    marking_points: [{ marks: 1, description: "A and C", keywords: ["a and c"] }],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "Compound F is formed when a carboxylic acid reacts with another organic compound, X, in the presence of a catalyst. Write down the NAME or FORMULA of the catalyst.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "H2SO4/Sulphuric acid (concentrated).",
    marking_notes: "Accept the name or the formula, with or without 'concentrated'.",
    marking_points: [{ marks: 1, description: "H2SO4 / sulphuric acid", keywords: ["h2so4", "sulphuric acid"] }],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Write down the type of reaction that forms compound F.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Esterification (accept condensation).",
    marking_notes: "Accept 'esterification' or 'condensation'.",
    marking_points: [{ marks: 1, description: "esterification / condensation", keywords: ["esterification", "condensation"] }],
  },
  {
    number: "2", sub_number: "2.4.3",
    text: "Write down the STRUCTURAL FORMULA of compound F.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "F = CH3COO(CH2)2CH3 (propyl ethanoate): CH3-C(=O)-O-CH2-CH2-CH3.",
    marking_notes: "Marking points: correct functional group (ester, -COO-); whole structure correct.",
    marking_points: [
      { marks: 1, description: "correct functional group: ester (-COO-)", keywords: ["ester", "coo"] },
      { marks: 1, description: "whole structure correct: propyl ethanoate", keywords: ["propyl ethanoate"] },
    ],
  },
  {
    number: "2", sub_number: "2.4.4",
    text: "Write down the IUPAC name of compound X.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propan-1-ol (accept 1-propanol).",
    marking_notes: "Full marks require the correct chain length and functional group (propanol), with everything else (including numbering) correct.",
    marking_points: [{ marks: 2, description: "propan-1-ol / 1-propanol", keywords: ["propan 1 ol", "1 propanol"] }],
  },

  // ============ QUESTION 3: INTERMOLECULAR FORCES (11 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "The vapour pressures of different organic compounds are determined at 20 °C: Compound A = Pentane (72 g·mol⁻¹), Compound B = 2-methylbutane (72 g·mol⁻¹), Compound C = 2,2-dimethylpropane (72 g·mol⁻¹), Compound D = Propanoic acid (74 g·mol⁻¹, vapour pressure 0,32 kPa), Compound E = Butanal (72 g·mol⁻¹, vapour pressure 12,2 kPa). The vapour pressures of A, B and C are NOT shown. Define the term vapour pressure.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "The pressure exerted by a vapour at equilibrium with its liquid in a closed system.",
    marking_notes: "Key phrases 'pressure exerted by a vapour', 'equilibrium with its liquid', and 'closed system' must be in the correct context; omitting any one costs 1 mark.",
    marking_points: [
      { marks: 1, description: "pressure exerted by a vapour at equilibrium with its liquid", keywords: ["pressure exerted", "equilibrium with", "liquid"] },
      { marks: 1, description: "in a closed system", keywords: ["closed system"] },
    ],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "The vapour pressures of compounds A, B and C are given in random order below: 79 kPa, 146 kPa, 58 kPa. Write down the vapour pressure of compound C.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "146 kPa (accept 146 000 Pa).",
    marking_notes: "Accept only '146' (kPa) or '146 000' (Pa).",
    marking_points: [{ marks: 1, description: "146 kPa", keywords: ["146"] }],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Fully explain the answer to QUESTION 3.2.1.",
    marks: 3, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "Compound C (2,2-dimethylpropane) is more branched than compounds A and B (shorter chain length/most compact/most spherical/smallest surface area over which intermolecular forces act). Compound C therefore has weaker intermolecular (Van der Waals/London) forces than A and B. Less energy is needed to overcome/break the intermolecular forces in compound C than in A and B, so it has the highest vapour pressure.",
    marking_notes: "Marking points: compare structures (compound C is more branched / shorter chain / more compact / smaller surface area); compare the strength of intermolecular forces (compound C has weaker intermolecular/Van der Waals/London forces); compare the energy required to overcome intermolecular forces (lesser energy needed for compound C).",
    marking_points: [
      { marks: 1, description: "compound C is more branched / more compact / smaller surface area than A and B", keywords: ["more branched", "compact", "surface area"] },
      { marks: 1, description: "compound C has weaker intermolecular forces than A and B", keywords: ["weaker", "intermolecular forces"] },
      { marks: 1, description: "less energy is needed to overcome intermolecular forces in compound C", keywords: ["less energy", "overcome"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Compounds D and E are compared. Which compound has the lower boiling point?",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "E (butanal).",
    marking_notes: "Accept only 'E' or 'butanal'.",
    marking_points: [{ marks: 1, description: "E / butanal", keywords: ["e", "butanal"] }],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Fully explain the difference in the vapour pressures between compounds D and E.",
    marks: 4, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "Compound D (propanoic acid) has hydrogen bonding (and dipole-dipole and London forces) between its molecules. Compound E (butanal) has dipole-dipole forces (and London forces) between its molecules. Intermolecular forces between molecules of compound D are stronger than between molecules of compound E. More energy is needed to overcome/break the intermolecular forces between molecules of compound D than compound E, so D has the lower vapour pressure.",
    marking_notes: "Marking points: strongest intermolecular force in D is hydrogen bonding; strongest intermolecular force in E is dipole-dipole forces; compare the strength of the intermolecular forces (D stronger than E); compare the energy required to overcome the intermolecular forces (more needed for D than E).",
    marking_points: [
      { marks: 1, description: "compound D has hydrogen bonding between molecules", keywords: ["hydrogen bond"] },
      { marks: 1, description: "compound E has dipole-dipole forces between molecules", keywords: ["dipole dipole"] },
      { marks: 1, description: "intermolecular forces in D are stronger than in E", keywords: ["stronger", "d"] },
      { marks: 1, description: "more energy is needed to overcome intermolecular forces in D than E", keywords: ["more energy", "overcome"] },
    ],
  },

  // ============ QUESTION 4: ORGANIC REACTIONS (22 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "Study the flow diagram: Organic compound U undergoes Reaction I (a CRACKING reaction) forming organic compounds W and T (C4H8) as the ONLY products. W undergoes Reaction II to form CH3CH2CH2CH2Br. CH3CH2CH2CH2Br undergoes Reaction III (Elimination) to form organic compound R. R undergoes Reaction IV to form organic compound S. S undergoes Reaction V to form back T (C4H8). Define the term cracking reaction.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "The chemical process/reaction in which longer chain hydrocarbon/alkane molecules are broken down to shorter (more useful) molecules.",
    marking_notes: "Key phrases 'longer chain hydrocarbon/alkane' and 'broken down to shorter (more useful) molecules' must be in the correct context; omitting either costs 1 mark.",
    marking_points: [
      { marks: 1, description: "longer chain hydrocarbon/alkane molecules", keywords: ["longer chain", "hydrocarbon", "alkane"] },
      { marks: 1, description: "broken down to shorter (more useful) molecules", keywords: ["broken down", "shorter"] },
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Is the product in Reaction II (CH3CH2CH2CH2Br) a PRIMARY, SECONDARY or TERTIARY haloalkane? Give a reason for the answer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Primary. The halogen/bromine (-Br) is bonded to a carbon atom that is bonded to only one other carbon atom.",
    marking_notes: "Must state 'primary' and give a valid reason (the C-Br carbon is bonded to only one other C atom / the halogen is on the first/terminal C atom).",
    marking_points: [
      { marks: 1, description: "primary", keywords: ["primary"] },
      { marks: 1, description: "the halogen (-Br) is bonded to a C atom bonded to only one other C atom", keywords: ["one other c atom", "terminal", "first c atom"] },
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Write down the STRUCTURAL FORMULA of compound W.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Butane: CH3-CH2-CH2-CH3, i.e. H-C(H)(H)(H)-C(H)(H)-C(H)(H)-C(H)(H)(H)-H (a straight 4-carbon chain).",
    marking_notes: "Marking points: correct stem (4 carbon atoms in a chain); whole structural formula correct (2 marks).",
    marking_points: [
      { marks: 1, description: "correct stem: 4 carbon atoms", keywords: ["4 carbon", "butane"] },
      { marks: 2, description: "whole structural formula correct: butane", keywords: ["butane", "ch3 ch2 ch2 ch3"] },
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Write down the MOLECULAR formula of compound U.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C8H18. U (a C8H18 alkane, e.g. octane) cracks into W (C4H10, butane) and T (C4H8, an alkene).",
    marking_notes: "Accept only 'C8H18'.",
    marking_points: [{ marks: 1, description: "C8H18", keywords: ["c8h18"] }],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "For Reaction II, write down the NAME or FORMULA of the inorganic reactant.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Br2/Bromine.",
    marking_notes: "Accept the name or the formula.",
    marking_points: [{ marks: 1, description: "Br2 / bromine", keywords: ["br2", "bromine"] }],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "For Reaction II, write down the type of reaction (choose from SUBSTITUTION, ADDITION or ELIMINATION).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Substitution.",
    marking_notes: "Accept only 'substitution'.",
    marking_points: [{ marks: 1, description: "substitution", keywords: ["substitution"] }],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.4.3",
    text: "For Reaction II, write down ONE reaction condition.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "UV/(sun)light/heat.",
    marking_notes: "Accept UV light, sunlight, or heat.",
    marking_points: [{ marks: 1, description: "UV / (sun)light / heat", keywords: ["uv", "light", "heat"] }],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.5",
    text: "Write down the TYPE of elimination in Reaction III.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Dehydrohalogenation (accept dehydrobromination).",
    marking_notes: "Accept 'dehydrohalogenation' or 'dehydrobromination'.",
    marking_points: [{ marks: 1, description: "dehydrohalogenation / dehydrobromination", keywords: ["dehydrohalogenation", "dehydrobromination"] }],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.6.1",
    text: "Compounds R and T are positional isomers. The inorganic reagents available for reactions IV and V are: Br2, H2SO4(conc.), NaOH(conc.), HBr, H2. Write down the balanced equation for Reaction IV, using STRUCTURAL FORMULAE and the correct inorganic reagent shown above.",
    marks: 5, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "R (but-1-ene) + HBr → S (2-bromobutane): CH2=CH-CH2-CH3 + HBr → CH3-CHBr-CH2-CH3.",
    marking_notes: "Marking points: functional group of the alkene (R) correct on the first C atom; whole structural formula of the alkene correct; HBr; functional group of the haloalkane (S) correct; whole structural formula of the haloalkane correct (halogen on the second C atom, Markovnikov addition).",
    marking_points: [
      { marks: 1, description: "functional group of alkene (R) correct on the first C atom", keywords: ["alkene", "double bond"] },
      { marks: 1, description: "whole structural formula of alkene (R, but-1-ene) correct", keywords: ["but 1 ene"] },
      { marks: 1, description: "HBr", keywords: ["hbr"] },
      { marks: 1, description: "functional group of haloalkane (S) correct", keywords: ["br", "haloalkane"] },
      { marks: 1, description: "whole structural formula of haloalkane (S, 2-bromobutane) correct", keywords: ["2 bromobutane"] },
    ],
  },
  {
    number: "4", sub_number: "4.6.2",
    text: "Write down the balanced equation for Reaction V, using STRUCTURAL formulae and the correct reagent shown above.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "S (2-bromobutane) + NaOH → T (but-2-ene) + NaBr + H2O: CH3-CHBr-CH2-CH3 + NaOH → CH3-CH=CH-CH3 + NaBr + H2O.",
    marking_notes: "Marking points: NaOH; whole structural formula of the alkene (T) correct; NaBr + H2O.",
    marking_points: [
      { marks: 1, description: "NaOH", keywords: ["naoh"] },
      { marks: 1, description: "whole structural formula of alkene (T, but-2-ene) correct", keywords: ["but 2 ene"] },
      { marks: 1, description: "NaBr + H2O", keywords: ["nabr", "h2o"] },
    ],
  },
  {
    number: "4", sub_number: "4.6.3",
    text: "Write down the IUPAC name of compound T.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "But-2-ene (the memo also accepts but-1-ene/1-butene/2-butene).",
    marking_notes: "Accept but-2-ene, 2-butene, but-1-ene, or 1-butene in full; 'butene' alone loses 1 mark.",
    marking_points: [{ marks: 2, description: "but-2-ene / but-1-ene", keywords: ["but 2 ene", "but 1 ene", "2 butene", "1 butene"] }],
  },

  // ============ QUESTION 5: RATE AND EXTENT OF REACTION (17 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "The reaction between pure aluminium, Aℓ(s), and EXCESS hydrochloric acid, HCℓ(aq), is used to investigate the factors that affect the rate of a reaction: 2Aℓ(s) + 6HCℓ(aq) → 2AℓCℓ3(aq) + 3H2(g). Define the term reaction rate.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "The change in concentration of products/reactants per unit time (equivalently: the rate of change in amount/number of moles/volume/mass of products or reactants).",
    marking_notes: "Must refer to a change per unit time (in concentration, amount, moles, volume or mass) of products or reactants.",
    marking_points: [{ marks: 2, description: "change in concentration/amount/moles/volume/mass of products or reactants per unit time", keywords: ["change in concentration", "per unit time", "per time"] }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "EXPERIMENT I: 1 mol·dm⁻³ HCℓ solution reacts with a 0,5 g Aℓ strip from an aluminium roll at room temperature. The graph of volume H2(g) versus time (not drawn to scale) shows a point at t = 5 minutes. For the time interval t = 0 to t = 5 minutes, the average reaction rate for the formation of H2(g) is 0,033 dm³·min⁻¹. Calculate the mass of Aℓ present in the container at t = 5 minutes. Take the molar gas volume as 24,5 dm³·mol⁻¹. Assume the concentration of the HCℓ(aq) stays constant for the duration of the reaction.",
    marks: 6, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Rate = ΔV(H2)/Δt, so 0,033 = ΔV(H2)/5, giving V(H2) = 0,165 dm³. n(H2) = V/Vm = 0,165/24,5 = 6,74×10⁻³ mol. Using the mole ratio n(Aℓ):n(H2) = 2:3, n(Aℓ)reacted = (2/3)(6,74×10⁻³) = 4,49×10⁻³ mol. m(Aℓ)reacted = nM = (4,49×10⁻³)(27) = 0,12 g. m(Aℓ)remaining = m(Aℓ)initial - m(Aℓ)reacted = 0,5 - 0,12 = 0,38 g (accepted range 0,365-0,42 g).",
    marking_notes: "Marking points: substitute 0,033 and 5 into the rate formula to find V(H2); substitute 24,5 into n = V/Vm; use the mole ratio n(Aℓ):n(H2) = 2:3; substitute 27 g·mol⁻¹ into m = nM; subtract m(Aℓ)reacted from m(Aℓ)initial; correct final answer 0,38 g (accepted range 0,365-0,42 g).",
    steps: [
      {
        marks: 1,
        description: "Using rate = ΔV(H2)/Δt with rate = 0,033 dm³·min⁻¹ and Δt = 5 min, what is ΔV(H2)?",
        options: ["0,165 dm³", "0,033 dm³", "0,0066 dm³", "0,66 dm³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using n(H2) = V/Vm with V = 0,165 dm³ and Vm = 24,5 dm³·mol⁻¹, what is n(H2)?",
        options: ["6,74 × 10⁻³ mol", "4,04 mol", "0,165 mol", "24,5 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the mole ratio n(Aℓ):n(H2) = 2:3, what is n(Aℓ) that reacted?",
        options: ["4,49 × 10⁻³ mol", "6,74 × 10⁻³ mol", "1,01 × 10⁻² mol", "3,37 × 10⁻³ mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using m = nM with M = 27 g·mol⁻¹, what mass of Aℓ reacted?",
        options: ["0,12 g", "0,38 g", "0,50 g", "1,21 g"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do you find the mass of Aℓ remaining at t = 5 minutes?",
        options: [
          "Subtract the mass reacted from the initial 0,5 g",
          "Add the mass reacted to the initial 0,5 g",
          "Divide the initial 0,5 g by the mass reacted",
          "Multiply the initial 0,5 g by the mass reacted",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the mass of Aℓ present in the container at t = 5 minutes?",
        options: ["0,38 g", "0,12 g", "0,50 g", "0,62 g"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/5.1-h2-time-graph.png`,
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Use the collision theory to explain the change in the reaction rate from t = 0 to t = 5 minutes.",
    marks: 4, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "As the reaction proceeds, the surface area/contact area/mass/size of the aluminium decreases, so fewer particles are exposed. This results in fewer effective collisions per unit time (a lower frequency of effective collisions), so the reaction rate decreases/slows down.",
    marking_notes: "Marking points: surface area/contact area/mass/size of aluminium decreases; fewer particles exposed; fewer effective collisions per unit time / lower frequency of effective collisions; reaction rate decreases/slows down.",
    marking_points: [
      { marks: 1, description: "surface area/contact area/mass/size of the aluminium decreases", keywords: ["surface area", "decreases"] },
      { marks: 1, description: "fewer particles exposed", keywords: ["fewer particles", "less particles"] },
      { marks: 1, description: "fewer effective collisions per unit time / lower frequency of effective collisions", keywords: ["effective collisions", "per unit time", "frequency"] },
      { marks: 1, description: "reaction rate decreases / reaction slows down", keywords: ["reaction rate decreases", "slows down"] },
    ],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "EXPERIMENT II: Experiment I is repeated using a 2 mol·dm⁻³ HCℓ solution. Redraw the graph (no numerical values needed) and label the curve A. On the same set of axes, draw the curve that will be obtained for Experiment II. Label this as curve B.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Curve B starts at the origin and ends at the same point as curve A (same total volume of H2, since HCℓ is in excess in both experiments); the gradient of curve B is steeper than curve A for the whole duration (since the higher HCℓ concentration gives a faster initial rate).",
    marking_notes: "Marking points: curve B starts at the origin and ends at the same point as curve A; gradient of curve B is steeper than curve A for the whole duration. If the graph is not labelled, award a maximum of 1/2.",
    marking_points: [
      { marks: 1, description: "curve B starts at the origin and ends at the same point as curve A", keywords: ["same point", "origin"] },
      { marks: 1, description: "gradient of curve B is steeper than curve A for the whole duration", keywords: ["steeper", "gradient"] },
    ],
    image_url: `${IMG}/5.1-h2-time-graph.png`,
  },
  {
    number: "5", sub_number: "5.1.5",
    text: "EXPERIMENT III: Experiment I is repeated using 0,5 g pure powdered Aℓ. How will the volume of H2(g) produced in Experiment III compare to that in Experiment I? Choose from GREATER THAN, LESS THAN or EQUAL TO.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Equal to. The same mass (0,5 g) of aluminium reacts with excess HCℓ either way, so the same total volume of H2 is eventually produced — using powder only changes the rate, not the total yield.",
    marking_notes: "Accept only 'equal to'.",
    marking_points: [{ marks: 1, description: "equal to", keywords: ["equal"] }],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Curve X is the Maxwell-Boltzmann distribution curve for a reaction under a set of reaction conditions. A change was made to one of the reaction conditions to obtain curve Y (which has a lower, broader peak shifted to higher kinetic energy). What change was made to obtain curve Y?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "An increase in temperature.",
    marking_notes: "Accept only 'an increase in temperature'.",
    marking_points: [{ marks: 1, description: "an increase in temperature", keywords: ["increase in temperature"] }],
    image_url: `${IMG}/5.2-maxwell-boltzmann.png`,
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Give a reason for the answer to QUESTION 5.2.1.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Curve Y has a peak/maximum at a higher kinetic energy (the peak is shifted to the right) — equivalently, the average kinetic energy of the particles increases, with more particles having a higher kinetic energy.",
    marking_notes: "Accept either 'curve Y has a peak at a higher kinetic energy / peak shifted right' or 'the (average) kinetic energy increases / more particles with higher kinetic energy'.",
    marking_points: [{ marks: 1, description: "curve Y has a peak at higher kinetic energy / average kinetic energy increases", keywords: ["higher kinetic energy", "peak shifted", "kinetic energy increases"] }],
    image_url: `${IMG}/5.2-maxwell-boltzmann.png`,
  },

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (20 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "The reaction of carbon monoxide gas, CO(g), with oxygen gas, O2(g), is investigated. The reaction reaches equilibrium in a closed container at constant temperature T °C: 2CO(g) + O2(g) ⇌ 2CO2(g), ΔH < 0. Define the term chemical equilibrium.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "(The dynamic equilibrium when) the rate of the forward reaction equals the rate of the reverse reaction (equivalently: the stage in a chemical reaction when the concentrations of the reactants and products remain constant).",
    marking_notes: "Accept either the 'rate of forward = rate of reverse' wording or the 'concentrations remain constant' wording, each in full for 2 marks.",
    marking_points: [{ marks: 2, description: "rate of forward reaction equals rate of reverse reaction / concentrations of reactants and products remain constant", keywords: ["rate of the forward", "equals", "reverse reaction", "concentrations", "remain constant"] }],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Changes to the conditions of equilibrium are made at different times t1, t2 and t3; the graph shows concentration versus time for the gases X, Y and Z in the reaction. At t1, oxygen, O2(g), was added to the container. Write down the letter that represents O2(g). Choose from X, Y or Z.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "X.",
    marking_notes: "Accept only 'X'.",
    marking_points: [{ marks: 1, description: "X", keywords: ["x"] }],
    image_url: `${IMG}/6.1-conc-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "At t2, the pressure is adjusted by changing the volume of the container. Was the pressure INCREASED or DECREASED?",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Decreased.",
    marking_notes: "Accept only 'decreased'.",
    marking_points: [{ marks: 1, description: "decreased", keywords: ["decrease"] }],
    image_url: `${IMG}/6.1-conc-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.1.4",
    text: "Give a reason for the answer to QUESTION 6.1.3.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "The concentrations of all the gases decreased (the reverse reaction was favoured, increasing the number of moles of gas as the volume increased).",
    marking_notes: "Accept 'the concentrations of all the gases decreased' or 'the reverse reaction was favoured' or 'all concentrations decreased'.",
    marking_points: [{ marks: 1, description: "the concentrations of all the gases decreased / reverse reaction favoured", keywords: ["concentrations", "decreased", "reverse reaction favoured"] }],
    image_url: `${IMG}/6.1-conc-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.1.5",
    text: "Write down the NAME or FORMULA of the gas represented by the letter Z.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "CO(g)/carbon monoxide.",
    marking_notes: "Accept the name or the formula.",
    marking_points: [{ marks: 1, description: "CO(g) / carbon monoxide", keywords: ["co", "carbon monoxide"] }],
    image_url: `${IMG}/6.1-conc-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.1.6",
    text: "Give a reason for the answer to QUESTION 6.1.5.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "The concentration of Z (CO) decreased with a decrease in the concentration of X (O2) — Z behaves the same way as X (both are reactants), following the same trend.",
    marking_notes: "Accept any of: Z's concentration decreased/increased together with X's; Z follows the same trend as X; Z and X are both reactants (Y is the product); the reverse reaction is favoured to increase the number of moles.",
    marking_points: [{ marks: 1, description: "concentration of Z follows the same trend as X (both are reactants)", keywords: ["same trend", "both reactants", "decreased with"] }],
    image_url: `${IMG}/6.1-conc-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.1.7",
    text: "What change in temperature is made at t3? Choose between INCREASED or DECREASED.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Decreased.",
    marking_notes: "Accept only 'decreased'.",
    marking_points: [{ marks: 1, description: "decreased", keywords: ["decrease"] }],
    image_url: `${IMG}/6.1-conc-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.1.8",
    text: "Use Le Chatelier's principle to explain the answer to QUESTION 6.1.7.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "The concentration of products (Y/CO2) increases (the concentration of reactants Z/X/CO/O2 decreases, i.e. the forward reaction is favoured). The forward reaction is exothermic. A decrease in temperature favours the exothermic reaction.",
    marking_notes: "Marking points: concentration of products increases / concentration of reactants decreases / forward reaction favoured; the forward reaction is exothermic; a decrease in temperature favours the exothermic reaction.",
    marking_points: [
      { marks: 1, description: "concentration of products increases / forward reaction favoured", keywords: ["products", "increases", "forward reaction favoured"] },
      { marks: 1, description: "the forward reaction is exothermic", keywords: ["forward reaction", "exothermic"] },
      { marks: 1, description: "a decrease in temperature favours the exothermic reaction", keywords: ["decrease in temperature", "favours the exothermic"] },
    ],
    image_url: `${IMG}/6.1-conc-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "Carbon monoxide gas, CO(g), reacts with water vapour, H2O(g), at T °C: CO(g) + H2O(g) ⇌ CO2(g) + H2(g). Initially, 0,6 moles of CO(g), 0,6 moles of H2O(g), 0,1 moles of CO2(g), and 0,1 moles of H2(g) were mixed and sealed in a 2 dm³ flask. If the equilibrium constant, Kc, for this reaction at T °C is 4, calculate the mass of CO(g) present in the flask at equilibrium.",
    marks: 9, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Using the mole ratio n(H2O):n(CO):n(H2):n(CO2) = 1:1:1:1, if x mol of CO2/H2 form, n(CO)eq = n(H2O)eq = 0,6-x and n(CO2)eq = n(H2)eq = 0,1+x. Dividing by the 2 dm³ volume: [CO]eq=[H2O]eq=(0,6-x)/2, [CO2]eq=[H2]eq=(0,1+x)/2. Kc = [CO2][H2]/[CO][H2O], so 4 = [(0,1+x)/2]²/[(0,6-x)/2]², giving x = 0,37. n(CO)eq = 0,6 - 0,37 = 0,23 mol. m(CO)eq = nM = 0,23 × 28 = 6,44 g (accepted range 6,44-6,72 g).",
    marking_notes: "Marking points: use the mole ratio n(H2O):n(CO):n(H2):n(CO2) = 1:1:1:1; set up the equilibrium amounts (n(CO)eq = n(H2O)eq = 0,6-x and n(CO2)eq = n(H2)eq = 0,1+x); divide the equilibrium amounts by the 2 dm³ volume for concentrations; correct Kc expression; substitute Kc = 4; substitute the concentrations into the Kc expression; substitute the solved value of x into n(CO)initial - x; substitute 28 g·mol⁻¹ into m = nM; correct final answer 6,44 g (accepted range 6,44-6,72 g).",
    steps: [
      {
        marks: 1,
        description: "Using the balanced equation CO(g) + H2O(g) ⇌ CO2(g) + H2(g), what is the mole ratio n(H2O):n(CO):n(H2):n(CO2)?",
        options: ["1 : 1 : 1 : 1", "1 : 1 : 2 : 1", "2 : 1 : 1 : 1", "1 : 2 : 1 : 1"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "If x mol of CO2 and H2 form, what are the equilibrium amounts of CO and H2O (in moles)?",
        options: ["0,6 - x (each)", "0,6 + x (each)", "x (each)", "0,1 + x (each)"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do you convert the equilibrium amounts (in moles) to equilibrium concentrations?",
        options: ["Divide each by the 2 dm³ volume", "Multiply each by the 2 dm³ volume", "Divide each by 4", "Multiply each by 4"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct Kc expression for CO(g) + H2O(g) ⇌ CO2(g) + H2(g)?",
        options: ["Kc = [CO2][H2] / [CO][H2O]", "Kc = [CO][H2O] / [CO2][H2]", "Kc = [CO2][H2]", "Kc = [CO][H2O][CO2][H2]"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What value of Kc is substituted into the expression?",
        options: ["4", "0,25", "2", "40"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which substitution correctly sets up the equation to solve for x?",
        options: [
          "4 = [(0,1+x)/2]² / [(0,6-x)/2]²",
          "4 = [(0,6-x)/2]² / [(0,1+x)/2]²",
          "4 = (0,1+x) / (0,6-x)",
          "4 = (0,6-x) × (0,1+x)",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Solving for x, what is n(CO) at equilibrium (0,6 - x)?",
        options: ["0,23 mol", "0,37 mol", "0,47 mol", "0,13 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula converts n(CO) to a mass, using M = 28 g·mol⁻¹?",
        options: ["m = nM", "m = n/M", "m = M/n", "m = n + M"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the mass of CO(g) present in the flask at equilibrium?",
        options: ["6,44 g", "10,36 g", "3,22 g", "16,80 g"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ACIDS AND BASES (17 marks) ============

  {
    number: "7", sub_number: "7.1",
    text: "Hydrated potassium carbonate, K2CO3·xH2O, is a WEAK BASE. A solution is prepared by dissolving some of this solid in water. Define the term weak base.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "Weak bases dissociate/ionise incompletely/partially in water to form a low concentration of hydroxide/OH⁻ ions.",
    marking_notes: "Key phrases 'dissociate/ionise incompletely/partially in water' and 'low concentration of hydroxide/OH⁻ ions' must be in the correct context; omitting either costs 1 mark.",
    marking_points: [
      { marks: 1, description: "dissociates/ionises incompletely/partially in water", keywords: ["dissociate", "ionise", "incompletely", "partially"] },
      { marks: 1, description: "to form a low concentration of hydroxide/OH- ions", keywords: ["low concentration", "hydroxide", "oh"] },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Write down the formula of the conjugate acid of the carbonate ion, CO3^2-(aq).",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "HCO3^-(aq).",
    marking_notes: "Accept only HCO3- (with the correct charge).",
    marking_points: [{ marks: 1, description: "HCO3-", keywords: ["hco3"] }],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "A hydrochloric acid solution, HCℓ(aq), of concentration 0,1 mol·dm⁻³ is titrated with the prepared potassium carbonate solution, K2CO3(aq), of unknown concentration: K2CO3(aq) + 2HCℓ(aq) → 2KCℓ(aq) + CO2(g) + H2O(ℓ). Run 1: 25 cm³ HCℓ used; K2CO3 initial burette reading 6,5 cm³, final burette reading p, volume of K2CO3 used 20,05 cm³. Determine the value of p.",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "p = 26,55 cm³ (6,5 + 20,05).",
    marking_notes: "Accept only '26,55' (cm³).",
    marking_points: [{ marks: 1, description: "26,55", keywords: ["26 55"] }],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "Run 2: 25 cm³ HCℓ used; K2CO3 initial burette reading q, final burette reading 48,3 cm³, volume of K2CO3 used 20,15 cm³. Determine the value of q.",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "q = 28,15 cm³ (48,3 - 20,15).",
    marking_notes: "Accept only '28,15' (cm³).",
    marking_points: [{ marks: 1, description: "28,15", keywords: ["28 15"] }],
  },
  {
    number: "7", sub_number: "7.4",
    text: "METHYL ORANGE is used as the indicator. Explain why methyl orange is the most suitable indicator for this titration by referring to the pH at the equivalence point.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "The titration's equivalence point/colour change is in the pH range less than 7 (the reaction of a strong acid with a weak base has an equivalence point at pH less than 7). The end point of this titration is within the pH range in which methyl orange/indicator changes colour (methyl orange changes colour at a pH less than 7).",
    marking_notes: "Marking points: the titration's equivalence point/colour change is at pH less than 7 (strong acid/weak base has equivalence point below pH 7); the end point of the titration is within the pH range where methyl orange changes colour (below pH 7).",
    marking_points: [
      { marks: 1, description: "the titration's equivalence point is at pH less than 7 (strong acid/weak base)", keywords: ["ph less than 7", "equivalence point"] },
      { marks: 1, description: "the end point is within the pH range where methyl orange changes colour", keywords: ["methyl orange", "changes colour"] },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Calculate the concentration of the K2CO3 solution (using the average titre volume from Runs 1 and 2).",
    marks: 5, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "Using caVa/cbVb = na/nb: (0,1)(25)/(cb)(20,1) = 2/1 (average volume 20,1 cm³, using the mole ratio n(K2CO3):n(HCℓ) = 1:2). Solving: [K2CO3] = 0,0622 mol·dm⁻³ (accepted range 0,06-0,0625 mol·dm⁻³).",
    marking_notes: "Marking points: any correct formula (caVa/cbVb = na/nb or n = cV); substitute 0,1 mol·dm⁻³ and 25×10⁻³ dm³ (25 cm³); substitute the average volume 20,1×10⁻³ dm³ (20,1 cm³); use the mole ratio n(K2CO3) = (1/2)n(HCℓ); correct final answer 0,0622 mol·dm⁻³ (accepted range 0,06-0,0625 mol·dm⁻³ per the memo).",
    steps: [
      {
        marks: 1,
        description: "Which formula relates the two solutions in this titration?",
        options: ["caVa/(cbVb) = na/nb (or n = cV)", "ca + Va = cb + Vb", "ca × cb = Va × Vb", "ca/ca = Vb/Vb"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What values are substituted for the HCℓ concentration and volume?",
        options: ["0,1 mol·dm⁻³ and 25 × 10⁻³ dm³", "0,1 mol·dm⁻³ and 20,1 × 10⁻³ dm³", "25 mol·dm⁻³ and 0,1 × 10⁻³ dm³", "0,2 mol·dm⁻³ and 25 × 10⁻³ dm³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What average K2CO3 titre volume (from Runs 1 and 2) is substituted?",
        options: ["20,1 × 10⁻³ dm³", "20,05 × 10⁻³ dm³", "20,15 × 10⁻³ dm³", "25 × 10⁻³ dm³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the balanced equation, what is the mole ratio n(K2CO3) : n(HCℓ)?",
        options: ["1 : 2", "2 : 1", "1 : 1", "1 : 3"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the concentration of the K2CO3 solution?",
        options: ["0,0622 mol·dm⁻³", "0,124 mol·dm⁻³", "0,0311 mol·dm⁻³", "0,25 mol·dm⁻³"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.6",
    text: "The K2CO3 solution used in the titration was prepared by completely dissolving 6,525 g of the hydrated potassium carbonate, K2CO3·xH2O, in 600 cm³ water. Calculate the value of x in the formula K2CO3·xH2O.",
    marks: 5, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "Using c = m/(MV): 0,0622 = 6,525/(M × 0,6), giving M = 174,84 g·mol⁻¹. Since M(K2CO3·xH2O) = 2(39) + 12 + 3(16) + x(18) = 174,84, solving gives x = 2.",
    marking_notes: "Marking points: any correct formula (n = m/M or c = m/(MV)); substitute 600 cm³ (0,6 dm³) into n = cV; substitute 6,525 into n = m/M (or c = m/(MV)); substitute 138 and 18x into n = m/M (i.e. M(K2CO3·xH2O) = 138 + 18x); correct final answer x = 2.",
    steps: [
      {
        marks: 1,
        description: "Which formula links molar mass, mass, concentration and volume for the hydrated solid dissolved to make the solution?",
        options: ["c = m/(MV) (or n = m/M and n = cV)", "c = mMV", "M = c + m + V", "c = m + MV"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What volume (in dm³) is substituted for the 600 cm³ used to dissolve the solid?",
        options: ["0,6 dm³", "6 dm³", "60 dm³", "0,06 dm³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What mass is substituted for the hydrated potassium carbonate dissolved?",
        options: ["6,525 g", "0,0622 g", "174,84 g", "600 g"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using M(K2CO3·xH2O) = 138 + 18x = 174,84 (from the K2CO3 concentration found in 7.5), what does this solve for?",
        options: ["x, the number of water molecules", "the mass of K2CO3", "the concentration of HCℓ", "the volume of the flask"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the value of x in K2CO3·xH2O?",
        options: ["2", "1", "3", "6"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: GALVANIC CELL AND REDOX (12 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "Dilute hydrochloric acid, HCℓ(aq), reacts with magnesium, Mg(s), at 25 °C: Mg(s) + 2HCℓ(aq) → MgCℓ2(aq) + H2(g). Use oxidation numbers for EACH of the reactants and explain why this reaction is a redox reaction.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "The oxidation number of Mg changes from 0 to +2 (increases, so Mg is oxidised) AND the oxidation number of H changes from +1 to 0 (decreases, so H is reduced). Since both oxidation and reduction occur, this is a redox reaction.",
    marking_notes: "Must give the oxidation number change for both Mg (0 to +2) and H (+1 to 0).",
    marking_points: [
      { marks: 1, description: "oxidation number of Mg changes from 0 to +2 (increases)", keywords: ["mg", "0 to", "2"] },
      { marks: 1, description: "oxidation number of H changes from +1 to 0 (decreases)", keywords: ["h", "1 to 0"] },
    ],
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Write down the FORMULA of the oxidising agent in this reaction.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "H+/HCℓ.",
    marking_notes: "Accept H+ or HCl.",
    marking_points: [{ marks: 1, description: "H+ / HCl", keywords: ["h", "hcl"] }],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "It is observed that dilute hydrochloric acid does not react with copper, Cu(s), at 25 °C. Explain this observation by referring to the relative strengths of the reducing agents.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Cu/copper is a weaker reducing agent than hydrogen/H2 (and will not reduce H+/hydrogen ion to H2) — equivalently, Cu is too weak a reducing agent to reduce H+ to H2.",
    marking_notes: "Must state that Cu is a weaker (or too weak a) reducing agent than hydrogen/H2.",
    marking_points: [{ marks: 2, description: "Cu is a weaker reducing agent than hydrogen/H2 (cannot reduce H+ to H2)", keywords: ["weaker reducing agent", "hydrogen"] }],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: "Will dilute nitric acid, HNO3(aq), react with copper, Cu(s), at 25 °C? Choose from YES or NO. Explain the answer in terms of the relative strengths of the oxidising agents.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Yes. NO3-/nitrate ion (in nitric acid) is a stronger oxidising agent than Cu2+/copper(II) ion, so Cu will be oxidised to Cu2+/copper(II) ion.",
    marking_notes: "Must state 'yes' and explain that NO3-/nitric acid is a stronger oxidising agent than Cu2+, so Cu will be oxidised.",
    marking_points: [
      { marks: 1, description: "yes", keywords: ["yes"] },
      { marks: 2, description: "NO3-/nitric acid is a stronger oxidising agent than Cu2+ (so Cu will be oxidised)", keywords: ["stronger oxidising agent", "no3", "cu2"] },
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "A galvanic cell is represented by the following cell notation: Pb(s) | Pb2+(aq) || Fe3+(aq), Fe2+(aq) | Pt(s). Write down the balanced net ionic equation for this cell.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Pb(s) + 2Fe3+(aq) → Pb2+(aq) + 2Fe2+(aq).",
    marking_notes: "Marking points: correct reactants (Pb and Fe3+); correct products (Pb2+ and Fe2+); equation balanced.",
    marking_points: [
      { marks: 1, description: "correct reactants: Pb and Fe3+", keywords: ["pb", "fe3"] },
      { marks: 1, description: "correct products: Pb2+ and Fe2+", keywords: ["pb2", "fe2"] },
      { marks: 1, description: "equation balanced", keywords: ["balanced"] },
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "A stronger reducing agent is now used with the same oxidising agent under the same conditions. How will this affect the initial emf of the cell? Choose from INCREASES, DECREASES or NO EFFECT.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Increases.",
    marking_notes: "Accept only 'increases'. A stronger reducing agent has a more negative standard reduction potential, increasing the difference between the two half-cell potentials (Ecell = Ereduction - Eoxidation).",
    marking_points: [{ marks: 1, description: "increases", keywords: ["increase"] }],
  },

  // ============ QUESTION 9: SPONTANEITY AND ELECTROLYTIC CELL (13 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "A strip of silver is added to a 1 mol·dm⁻³ solution of Pb(NO3)2 at 25 °C. Consider the reaction: 2Ag(s) + Pb2+(aq) → 2Ag+(s) + Pb(s). By means of a calculation, determine whether this reaction is SPONTANEOUS or NON-SPONTANEOUS.",
    marks: 5, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Ecell = Ereduction - Eoxidation = E°(Pb2+/Pb) - E°(Ag+/Ag) = -0,13 - (0,80) = -0,93 V. Since Ecell is negative, the reaction is non-spontaneous.",
    marking_notes: "Marking points: correct formula (Ecell = Ereduction - Eoxidation); substitute Ereduction = -0,13 V (for Pb2+/Pb, the reduction half-reaction); substitute Eoxidation = +0,80 V (for Ag/Ag+, the oxidation half-reaction); Ecell = -0,93 V; conclusion: non-spontaneous (since Ecell is negative).",
    steps: [
      {
        marks: 1,
        description: "Which formula gives the standard cell potential?",
        options: ["Ecell = Ereduction - Eoxidation", "Ecell = Ereduction + Eoxidation", "Ecell = Eoxidation - Ereduction", "Ecell = Ereduction × Eoxidation"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is E° for the reduction half-reaction (Pb2+ + 2e⁻ → Pb)?",
        options: ["-0,13 V", "+0,80 V", "+0,13 V", "-0,80 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is E° for the oxidation half-reaction (2Ag → 2Ag+ + 2e⁻, written as its reduction potential)?",
        options: ["+0,80 V", "-0,13 V", "-0,80 V", "+0,13 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is Ecell for this reaction?",
        options: ["-0,93 V", "+0,93 V", "-0,67 V", "+0,67 V"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Since Ecell is negative, is the reaction spontaneous or non-spontaneous?",
        options: ["Non-spontaneous", "Spontaneous", "Cannot be determined", "At equilibrium"],
        correctIndex: 0,
      },
    ],
    image_url: `${IMG}/9.1-cell-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "The diagram below represents an electrolytic cell with carbon electrodes in concentrated NaCℓ(aq); electrode Q is shown. Define an electrolyte.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A substance of which the (aqueous) solution contains ions (equivalently: a substance that dissolves in water to give a solution that conducts electricity, or that forms ions in water/when melted, or a solution/substance that conducts electricity through the movement of ions).",
    marking_notes: "Must refer to a substance whose solution contains ions, or that forms ions in water/when melted, or a solution that conducts electricity via the movement of ions.",
    marking_points: [{ marks: 2, description: "substance whose (aqueous) solution contains ions / conducts electricity through movement of ions", keywords: ["contains ions", "conducts electricity", "movement of ions"] }],
    image_url: `${IMG}/9.2-cell-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Write down the PREDOMINANT oxidation half-reaction that takes place in this cell.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "2Cℓ-(aq) → Cℓ2(g) + 2e-.",
    marking_notes: "Full marks require the correct species (2Cl- and Cl2) and correctly balanced with 2e- on the product side; a reversible arrow (⇌) instead of a one-way arrow, or the reaction written backwards, loses marks per the memo's partial-credit table.",
    marking_points: [{ marks: 2, description: "2Cl-(aq) → Cl2(g) + 2e-", keywords: ["2cl", "cl2", "2e"] }],
    image_url: `${IMG}/9.2-cell-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "Write down the NAMES or FORMULAE of the products formed at electrode Q.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Hydroxide ions/OH-/sodium hydroxide/NaOH, and hydrogen/H2.",
    marking_notes: "Both the hydroxide/NaOH product and the hydrogen/H2 product are required for full marks.",
    marking_points: [
      { marks: 1, description: "hydroxide ions / OH- / sodium hydroxide / NaOH", keywords: ["hydroxide", "naoh"] },
      { marks: 1, description: "hydrogen / H2", keywords: ["hydrogen", "h2"] },
    ],
    image_url: `${IMG}/9.2-cell-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2.4",
    text: "Explain the answer to QUESTION 9.2.3 by referring to the relative strengths of the oxidising agents involved.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Water/H2O is a stronger oxidising agent than Na+/sodium ion, and water/H2O will be reduced (in preference to Na+) at electrode Q.",
    marking_notes: "Must compare water/H2O and Na+ as oxidising agents, concluding that water is reduced (stronger oxidising agent than Na+, or equivalently Na+ is the weaker oxidising agent).",
    marking_points: [{ marks: 2, description: "water/H2O is a stronger oxidising agent than Na+ and is reduced in preference to Na+", keywords: ["water", "stronger oxidising agent", "reduced"] }],
    image_url: `${IMG}/9.2-cell-diagram.png`,
  },
];

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
