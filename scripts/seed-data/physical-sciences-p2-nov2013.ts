// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2013, National
// (English question paper; bilingual Afrikaans/English memorandum).
// Source: maimelatct.com mirror of the DBE question paper and memorandum:
//   QP:   http://maimelatct.com/wp-content/uploads/2013/08/physical-sciences-p2-nov-2013-eng.pdf
//   Memo: http://maimelatct.com/wp-content/uploads/2013/08/physical-sciences-p2-nov-2013-memo-afr-eng.pdf
// Both cover pages were checked: "PHYSICAL SCIENCES: CHEMISTRY (P2)",
// "NOVEMBER 2013", MARKS 150, TIME 3 hours. The memo's question numbers and
// per-question totals (Q1 [5], Q2 [20], Q3 [17], Q4 [11], Q5 [15], Q6 [17],
// Q7 [15], Q8 [12], Q9 [10], Q10 [17], Q11 [11]) match the question paper
// exactly (Section A = 25, Section B = 125, total 150).
//
// Paper structure: SECTION A (Q1 one-word items, Q2 multiple choice) and
// SECTION B (Q3-Q11), all compulsory. All 150 marks are included.
//
// Reuses the SAME subject row ("Physical Sciences"), the four CAPS cognitive
// levels and the shared topic list (verbatim names) used by the other
// Physical Sciences papers.
//
// Grading: every item is a stepped MCQ (`steps`): one step per mark-earning
// point, 4 options, correct option from the memo. No `marking_points` are
// used anywhere in this paper; define/explain items (6.3, 4.3.3, 4.4, 6.5,
// 7.4, 8.3, 9.1, 10.1, 11.3, 11.4) were turned into choice steps built from
// the memo's own marking criteria.
//
// Diagrams cropped from full-page renders into
// public/question-images/chemistry-2013-p2/: 2.3 (reaction structure), 2.4
// (Maxwell-Boltzmann curves), 2.6 (N2O4/NO2 graph), the Q3 compounds table,
// the Q5.3 flow diagram, the Q6 catalyst graph, the Q8 galvanic cell and the
// Q9 electroplating cell. The Q4 and Q6/Q7 data tables are described in the
// question text instead. The structures in 3.1/3.2/3.3 are only shown in the
// table image, so those sub-questions carry the table image; option text uses
// condensed formulae since the memo's drawn structures cannot be shown as
// text.
//
// FLAG for review (topic mapping): this older-syllabus paper has no perfect
// fit for a few items. Q1.1 (fractional distillation of liquid air) and all of
// Q11 (fertilisers / Haber process / eutrophication) use the new
// "chemical-industry" topic. Q2.10 (membrane cell anode product, chlor-alkali
// industry) is mapped to "electrochemistry" as the closest topic. Q4 (boiling
// points of alcohol/aldehyde/alkane and the hexane-vs-pentane comparison) is
// mapped to "intermolecular-forces", including the 4.1/4.2 investigation
// items. Q6.6 (mass of O2 from a concentration change) is mapped to
// "stoichiometry".
//
// FLAG for review (memo alternatives, transcribed faithfully):
// - 3.2.1 and 3.2.3 memo accept both "hex-2-ene"/"2-hexene" and
//   "pent-2-yne"/"2-pentyne" styles; the primary style is used here.
// - 4.2 memo accepts EITHER "... comparable molecular mass" OR "... under the
//   same conditions ..." as the fair-test phrase. Only the first is offered
//   as the correct option, and the second is not used as a distractor.
// - 6.4 memo shows the rate as "- 1,73 x 10^-5" with "OR 1,73 x 10^-5"; the
//   positive value is used.
// - 6.6 memo final answer is 7,52 x 10^-3 g, but "0,008 g" and "0,01 g" are
//   also accepted (rounded). The unrounded value is used.
// - 7.2 memo final answer 4,36 x 10^-3 mol/dm3 with "(0,004 mol/dm3)" also
//   accepted; the memo gives three equivalent methods; the amount-of-substance
//   route (OPTION 1, x = 0,0109 mol) is used for the intermediate values.
// - 8.1.3 memo accepts three notations (with 1 mol/dm3 labels, with (aq), or
//   without state symbols) and prints the chloride half-cell as
//   Pt | Cl-  | Cl2; transcribed as printed.
// - 10.4.2 memo rounds 146,34 cells up to 147 cells (answer accepted as 147).
// - 11.4 memo accepts ANY ONE of two impacts (eutrophication consequences, or
//   nitrates causing blue baby syndrome / cancer). Only one is offered as the
//   correct choice.
// - 9.1 and 10.1 definitions: the memo accepts two wordings for 9.1; one is
//   offered as the correct option.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2013-p2";

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
  { key: "organic-chemistry", name: "Organic Molecules: Nomenclature, Isomers and Reactions", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Organic Chemistry (Nomenclature, Isomerism and Reactions)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=organic+chemistry+nomenclature+isomers+reactions+grade+12+physical+sciences" },
  { key: "intermolecular-forces", name: "Intermolecular Forces", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Chemical Bonding (Intermolecular Forces)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=intermolecular+forces+grade+12+physical+sciences" },
  { key: "stoichiometry", name: "Stoichiometry and the Mole Concept", caps_term: "Term 1", textbook_ref: "Grade 12 Physical Sciences — Quantitative Aspects of Chemical Change (Stoichiometry)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=stoichiometry+gas+volumes+grade+12+physical+sciences" },
  { key: "rate-of-reaction", name: "Rate and Extent of Reaction", caps_term: "Term 2", textbook_ref: "Grade 12 Physical Sciences — Reaction Rate (Rate and Extent of Reaction)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=rate+of+reaction+collision+theory+grade+12+physical+sciences" },
  { key: "chemical-equilibrium", name: "Chemical Equilibrium", caps_term: "Term 2", textbook_ref: "Grade 12 Physical Sciences — Chemical Equilibrium (Le Chatelier's Principle, Kc)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=chemical+equilibrium+le+chatelier+kc+grade+12+physical+sciences" },
  { key: "acids-and-bases", name: "Acids and Bases", caps_term: "Term 2", textbook_ref: "Grade 12 Physical Sciences — Acids and Bases (Ka, pH, Titrations)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=acids+and+bases+ph+titration+grade+12+physical+sciences" },
  { key: "electrochemistry", name: "Electrochemical Reactions (Galvanic and Electrolytic Cells)", caps_term: "Term 3", textbook_ref: "Grade 12 Physical Sciences — Electrochemistry (Galvanic and Electrolytic Cells)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=galvanic+electrolytic+cells+grade+12+physical+sciences" },
  { key: "chemical-industry", name: "Chemical Industry: Fertilisers and Industrial Processes", caps_term: "Term 4", textbook_ref: "Grade 12 Physical Sciences — Chemical Industry (Fertilisers, Haber and Contact Processes)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=fertilisers+chemical+industry+grade+12+physical+sciences" },
];

export const paper = {
  year: 2013,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "http://maimelatct.com/wp-content/uploads/2013/08/physical-sciences-p2-nov-2013-eng.pdf" as string | null,
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

// Builds one stepped-MCQ step. The correct option is slotted into a rotating
// position (so the right answer is not always first); wrong[] are the three
// distractors in the order given.
let pos = 0;
function st(marks: number, description: string, correct: string, wrong: [string, string, string]): MarkingPointStep {
  const i = pos++ % 4;
  const options = [...wrong];
  options.splice(i, 0, correct);
  return { marks, description, options, correctIndex: i };
}

export const questions: QuestionSeed[] = [
  // ============ SECTION A, QUESTION 1: ONE-WORD ITEMS (5 marks) ============
  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The industrial preparation of nitrogen gas from liquid air.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Fractional distillation.",
    marking_notes: "Accept 'fractional distillation' only.",
    steps: [st(1, "Which term describes the industrial preparation of nitrogen gas from liquid air?", "Fractional distillation", ["Electrolysis", "Catalytic cracking", "Haber process"])],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: The removal of water from a compound during a reaction.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Dehydration.",
    marking_notes: "Accept 'dehydration' / 'dehydrasie'.",
    steps: [st(1, "Which term describes the removal of water from a compound during a reaction?", "Dehydration", ["Hydration", "Hydrolysis", "Esterification"])],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: A theory used to explain how factors, such as temperature, change the rate of a reaction.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "Collision theory.",
    marking_notes: "Accept 'collision (theory)'.",
    steps: [st(1, "Which theory explains how factors such as temperature change the rate of a reaction?", "Collision theory", ["Le Chatelier's principle", "Kinetic molecular theory of gases", "Atomic orbital theory"])],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: The general term used to describe a substance that donates electrons to another substance.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Reducing agent.",
    marking_notes: "Accept 'reducing agent' / 'reduseermiddel'.",
    steps: [st(1, "Which term describes a substance that donates electrons to another substance?", "Reducing agent", ["Oxidising agent", "Electrolyte", "Catalyst"])],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: The general term used to describe a class of organic compounds in which one member differs from the previous one by a CH2 group.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Homologous series.",
    marking_notes: "Accept 'homologous series' / 'homoloë reeks'.",
    steps: [st(1, "Which term describes a class of organic compounds in which each member differs from the previous one by a CH2 group?", "Homologous series", ["Functional group", "Structural isomers", "Hydrocarbon"])],
  },

  // ============ SECTION A, QUESTION 2: MULTIPLE-CHOICE (20 marks) ============
  {
    number: "2", sub_number: "2.1",
    text: "Which ONE of the following is the functional group of aldehydes?",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "C — ─CHO. The aldehyde functional group is a carbonyl group at the end of the carbon chain (─CHO).",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Which ONE of the following is the functional group of aldehydes?", "─ CHO", ["─ COO ─", "─ COOH", "─ OH"])],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Which ONE of the following hydrocarbons always gives a product with the same IUPAC name when ANY ONE of its hydrogen atoms is replaced with a chlorine atom?",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C — Cyclohexane. All twelve hydrogen atoms in cyclohexane are in identical positions, so replacing any one of them gives chlorocyclohexane.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Which ONE of the following hydrocarbons always gives a product with the same IUPAC name when ANY ONE of its hydrogen atoms is replaced with a chlorine atom?", "Cyclohexane", ["Hexane", "Hex-1-ene", "Cyclohexene"])],
  },
  {
    number: "2", sub_number: "2.3",
    text: "The equation below represents the reaction that takes place when an organic compound (2-bromopropane, CH3CHBrCH3) and concentrated sodium hydroxide are strongly heated: CH3CHBrCH3 + NaOH → X + NaBr + H2O. X represents the major organic product formed. Which ONE of the following is the correct IUPAC name for compound X?",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "A — Prop-1-ene. Concentrated NaOH with strong heating causes elimination (dehydrohalogenation) of HBr from 2-bromopropane, forming the alkene propene, correctly numbered prop-1-ene.",
    marking_notes: "Accept only 'A'.",
    steps: [st(2, "What is the correct IUPAC name for the major organic product X?", "Prop-1-ene", ["Prop-2-ene", "Propan-1-ol", "Propan-2-ol"])],
    image_url: `${IMG}/2.3-bromopropane-reaction.png`,
  },
  {
    number: "2", sub_number: "2.4",
    text: "The graphs below represent the molecular distribution (number of molecules versus kinetic energy) for a reaction at different temperatures. Which ONE of the graphs represents the reaction at the highest temperature?",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "D — S. At the highest temperature the curve has the lowest, broadest peak shifted furthest to higher kinetic energy, so the largest number of molecules have energy at or above the activation energy.",
    marking_notes: "Accept only 'D'.",
    steps: [st(2, "Which curve represents the reaction at the highest temperature?", "S", ["P", "Q", "R"])],
    image_url: `${IMG}/2.4-molecular-distribution.png`,
  },
  {
    number: "2", sub_number: "2.5",
    text: "The reaction CuO(s) + H2(g) ⇌ Cu(s) + H2O(g), ΔH < 0, reaches equilibrium in a closed container. Which ONE of the following changes will increase the yield of products?",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "B — Decrease temperature. The forward reaction is exothermic (ΔH < 0), so lowering the temperature favours the forward reaction and increases the yield. Pressure/volume changes have no effect because there is one mole of gas on each side.",
    marking_notes: "Accept only 'B'.",
    steps: [st(2, "Which ONE of the following changes will increase the yield of products?", "Decrease temperature.", ["Increase temperature.", "Increase pressure by decreasing the volume.", "Decrease pressure by increasing the volume."])],
  },
  {
    number: "2", sub_number: "2.6",
    text: "The graph below (concentration versus time) represents the decomposition of N2O4(g) in a closed container according to N2O4(g) ⇌ 2NO2(g). The concentrations of both gases are constant (but not equal) after the time t1. Which ONE of the following correctly describes the situation at t1?",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "C — The rate of the forward reaction equals the rate of the reverse reaction. At t1 the concentrations are constant, so the system is at equilibrium; neither gas is used up and the concentrations are not equal.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "Which ONE of the following correctly describes the situation at t1?", "The rate of the forward reaction equals the rate of the reverse reaction.", ["The N2O4 gas is used up.", "The NO2 gas is used up.", "The concentrations of the reactant and the product are equal."])],
    image_url: `${IMG}/2.6-n2o4-graph.png`,
  },
  {
    number: "2", sub_number: "2.7",
    text: "Which ONE of the following is the strongest oxidising agent?",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "A — F2(g). F2 is at the top of the table of standard reduction potentials (+2,87 V), making it the strongest oxidising agent.",
    marking_notes: "Accept only 'A'.",
    steps: [st(2, "Which ONE of the following is the strongest oxidising agent?", "F2(g)", ["F⁻(aq)", "Li(s)", "Li⁺(aq)"])],
  },
  {
    number: "2", sub_number: "2.8",
    text: "Which ONE of the following statements about a galvanic cell in operation is CORRECT?",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "D — ΔH for the cell reaction is negative. A galvanic cell is based on a spontaneous (exothermic) reaction with a positive emf.",
    marking_notes: "Accept only 'D'.",
    steps: [st(2, "Which ONE of the following statements about a galvanic cell in operation is CORRECT?", "ΔH for the cell reaction is negative.", ["ΔH for the cell reaction is positive.", "The overall cell reaction is non-spontaneous.", "The emf is negative."])],
  },
  {
    number: "2", sub_number: "2.9",
    text: "The function of the salt bridge in a galvanic cell in operation is to ...",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "B — maintain electrical neutrality in the half-cells.",
    marking_notes: "Accept only 'B'.",
    steps: [st(2, "The function of the salt bridge in a galvanic cell in operation is to ...", "maintain electrical neutrality in the half-cells.", ["allow anions to travel to the cathode.", "allow electrons to flow through it.", "provide ions to react at the anode and cathode."])],
  },
  {
    number: "2", sub_number: "2.10",
    text: "The major product formed at the ANODE in a membrane cell is ...",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "C — chlorine. In the membrane (chlor-alkali) cell, chloride ions are oxidised to chlorine gas at the anode.",
    marking_notes: "Accept only 'C'.",
    steps: [st(2, "The major product formed at the ANODE in a membrane cell is ...", "chlorine.", ["hydrogen.", "oxygen.", "hydroxide ions."])],
  },

  // ============ SECTION B, QUESTION 3: ORGANIC COMPOUNDS (17 marks) ============
  {
    number: "3", sub_number: "3.1.1",
    text: "The letters A to F in the table represent six organic compounds: A is 4,5-dimethylhex-2-ene drawn in full structural form, B is butan-2-one drawn in full structural form, C is CH3CH=CHCH2CH2CH3, D is pentyl propanoate, E is a dibromo-methyl-heptane drawn in full structural form, F is an alkyne drawn in full structural form (CH3C≡CCH(CH3)2). Write down the letter(s) that represent(s) alkenes.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "A and C.",
    marking_notes: "Both A and C are required for the 2 marks.",
    steps: [st(2, "Which letter(s) represent alkenes?", "A and C", ["A and F", "C and E", "A, C and F"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Using the table of compounds A to F, write down the letter that represents a ketone.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B (butan-2-one, which has a C=O group between two carbon atoms).",
    marking_notes: "Accept only 'B'.",
    steps: [st(1, "Which letter represents a ketone?", "B", ["A", "D", "F"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "Using the table of compounds A to F, write down the letter that represents a compound with the general formula CnH2n-2.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "F (an alkyne, C6H10).",
    marking_notes: "Accept only 'F'.",
    steps: [st(1, "Which letter represents a compound with the general formula CnH2n-2?", "F", ["A", "B", "C"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.4",
    text: "Using the table of compounds A to F, write down the letter that represents a structural isomer of cyclohexene.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "F. Cyclohexene is C6H10; compound F (4-methylpent-2-yne) also has the molecular formula C6H10 but a different structure.",
    marking_notes: "Accept only 'F'.",
    steps: [st(2, "Which letter represents a structural isomer of cyclohexene (C6H10)?", "F", ["A", "C", "E"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Write down the IUPAC name of compound A (the structure in the table with a double bond between C2 and C3 of a six-carbon main chain and two methyl branches).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "4,5-dimethylhex-2-ene (also accepted: 4,5-dimethyl-2-hexene).",
    marking_notes: "One mark for the correct parent chain and double-bond position (hex-2-ene); one mark for the substituents with their locants (4,5-dimethyl).",
    steps: [
      st(1, "What is the correct parent chain and double-bond position for compound A?", "hex-2-ene", ["hex-3-ene", "hex-1-ene", "hexane"]),
      st(1, "What is the full IUPAC name of compound A?", "4,5-dimethylhex-2-ene", ["2,3-dimethylhex-4-ene", "4,5-dimethylhex-3-ene", "3,4-dimethylhex-2-ene"]),
    ],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Write down the IUPAC name of compound E (in the table: a seven-carbon chain, once the ethyl branch is counted, with two bromine atoms on adjacent carbons and a methyl branch).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2,3-dibromo-5-methylheptane.",
    marking_notes: "One mark for the correct parent chain (heptane); one mark for the correct substituents and locants (2,3-dibromo-5-methyl).",
    steps: [
      st(1, "What is the longest continuous carbon chain (parent name) of compound E?", "heptane", ["hexane", "octane", "pentane"]),
      st(1, "What is the full IUPAC name of compound E?", "2,3-dibromo-5-methylheptane", ["4,5-dibromo-3-methylheptane", "2,3-dibromo-5-ethylhexane", "2,3-dibromo-3-methylheptane"]),
    ],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "Write down the IUPAC name of compound F (CH3C≡CCH(CH3)2).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "4-methylpent-2-yne (also accepted: 4-methyl-2-pentyne).",
    marking_notes: "One mark for the correct parent chain and triple-bond position (pent-2-yne); one mark for the methyl substituent and its locant (4-methyl).",
    steps: [
      st(1, "What is the correct parent chain and triple-bond position for compound F?", "pent-2-yne", ["pent-3-yne", "pent-2-ene", "pentane"]),
      st(1, "What is the full IUPAC name of compound F?", "4-methylpent-2-yne", ["2-methylpent-3-yne", "4-methylpent-2-ene", "3-methylpent-2-yne"]),
    ],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Compound D (pentyl propanoate) is prepared by reacting two organic compounds in the presence of an acid as catalyst. Write down the homologous series to which compound D belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Esters.",
    marking_notes: "Accept 'esters' / 'ester'.",
    steps: [st(1, "To which homologous series does pentyl propanoate belong?", "Esters", ["Carboxylic acids", "Alcohols", "Ketones"])],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Compound D (pentyl propanoate) is prepared by reacting two organic compounds in the presence of an acid as catalyst. Write down the structural formula of compound D.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CH2COOCH2CH2CH2CH2CH3 (the memo draws the full structural formula: a propanoate group, CH3CH2C(=O)O─, attached to a pentyl group, ─CH2CH2CH2CH2CH3).",
    marking_notes: "The memo awards marks for the ester functional group and the correct carbon chains; the answer is given here in condensed text form.",
    steps: [st(2, "Which formula represents pentyl propanoate?", "CH3CH2COOCH2CH2CH2CH2CH3", ["CH3CH2CH2CH2COOCH2CH2CH3", "CH3CH2COOCH2CH2CH2CH3", "CH3COOCH2CH2CH2CH2CH2CH3"])],
  },
  {
    number: "3", sub_number: "3.3.3",
    text: "Compound D (pentyl propanoate) is prepared by reacting two organic compounds in the presence of an acid as catalyst. Write down the IUPAC name of the organic acid used to prepare compound D.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propanoic acid.",
    marking_notes: "Accept 'propanoic acid' / 'propanoësuur'.",
    steps: [st(1, "Which carboxylic acid reacts with pentan-1-ol to form pentyl propanoate?", "Propanoic acid", ["Ethanoic acid", "Butanoic acid", "Pentanoic acid"])],
  },
  {
    number: "3", sub_number: "3.3.4",
    text: "Compound D (pentyl propanoate) is prepared by reacting two organic compounds in the presence of an acid as catalyst. Write down the NAME or FORMULA of the catalyst used.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Sulphuric acid (H2SO4).",
    marking_notes: "Accept 'sulphuric acid' / 'H2SO4'.",
    steps: [st(1, "Which catalyst is used in esterification?", "Sulphuric acid (H2SO4)", ["Sodium hydroxide (NaOH)", "Platinum", "Water"])],
  },

  // ============ QUESTION 4: BOILING POINTS / INTERMOLECULAR FORCES (11 marks) ============
  {
    number: "4", sub_number: "4.1.1",
    text: "A laboratory technician is supplied with three unlabelled bottles containing an alcohol, an aldehyde and an alkane respectively of comparable molecular mass. She takes a sample from each bottle and labels them P, Q and R. In order to identify each sample, she determines the boiling point of each under the same conditions: P 76 °C, Q 36 °C, R 118 °C. For this investigation, write down the independent variable.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Samples / contents of the bottle / (type of) compound / functional group / homologous series.",
    marking_notes: "Accept sample, contents of the bottle, type of compound, functional group or homologous series.",
    steps: [st(1, "What is the independent variable in this investigation?", "The type of compound (functional group) in each sample", ["The boiling point", "The molecular mass of each sample", "The pressure at which boiling points are measured"])],
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "(Investigation: three unlabelled samples P, Q and R with boiling points of 76 °C, 36 °C and 118 °C respectively, determined under the same conditions.) For this investigation, write down the dependent variable.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Boiling point.",
    marking_notes: "Accept 'boiling point' / 'kookpunt'.",
    steps: [st(1, "What is the dependent variable in this investigation?", "The boiling point", ["The type of compound (functional group)", "The molecular mass of each sample", "The volume of each sample"])],
  },
  {
    number: "4", sub_number: "4.2",
    text: "The passage says the technician is given 'an alcohol, an aldehyde and an alkane respectively of comparable molecular mass', takes 'a sample from each bottle and labels them P, Q and R', and 'determines the boiling point of each under the same conditions'. From the passage, write down a phrase that shows that this investigation is a fair test.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "'... comparable molecular mass.'",
    marking_notes: "The memo accepts either '... comparable molecular mass' or '... under the same conditions ...'. Only the first is offered as an option here, so the second (also valid per memo) is not used as a distractor.",
    steps: [st(1, "Which phrase from the passage shows that this is a fair test?", "... of comparable molecular mass.", ["... three unlabelled bottles ...", "... labels them P, Q and R.", "... takes a sample from each bottle ..."])],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "(Samples P, Q and R have boiling points of 76 °C, 36 °C and 118 °C respectively; one is an alcohol, one an aldehyde and one an alkane, of comparable molecular mass.) Which sample (P, Q or R) is the alkane?",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "Q. The alkane has only weak London forces between its molecules, so it has the lowest boiling point (36 °C).",
    marking_notes: "Accept only 'Q'.",
    steps: [st(1, "Which sample is the alkane?", "Q", ["P", "R", "P and Q (cannot be distinguished)"])],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "(Samples P, Q and R have boiling points of 76 °C, 36 °C and 118 °C respectively; one is an alcohol, one an aldehyde and one an alkane, of comparable molecular mass.) Which sample (P, Q or R) is the alcohol?",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "R. The alcohol has hydrogen bonds between its molecules and therefore the highest boiling point (118 °C).",
    marking_notes: "Accept only 'R'.",
    steps: [st(1, "Which sample is the alcohol?", "R", ["P", "Q", "Q and R (cannot be distinguished)"])],
  },
  {
    number: "4", sub_number: "4.3.3",
    text: "Refer to boiling point and the type of intermolecular forces present between alcohol molecules to give a reason for the answer in QUESTION 4.3.2 (sample R is the alcohol).",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "R has the highest boiling point. In addition to weak Van der Waals (London) forces, alcohols also have strong hydrogen bonds between molecules.",
    marking_notes: "One mark for the boiling-point comparison; one mark for the hydrogen bonds (in addition to Van der Waals forces) between alcohol molecules.",
    steps: [
      st(1, "What does the boiling-point data show about sample R?", "R has the highest boiling point.", ["R has the lowest boiling point.", "R has a boiling point between those of P and Q.", "R has the same boiling point as P."]),
      st(1, "Which intermolecular forces explain this for an alcohol?", "In addition to weak Van der Waals forces, alcohol molecules have strong hydrogen bonds between them.", ["Alcohol molecules have only weak London forces between them.", "Alcohol molecules have ionic bonds between them.", "Alcohol molecules are held together only by covalent bonds between them."]),
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "The alkane is identified as pentane. Will the boiling point of hexane be HIGHER THAN or LOWER THAN that of pentane? Refer to MOLECULAR STRUCTURE, INTERMOLECULAR FORCES and ENERGY needed to explain the answer.",
    marks: 4, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "Higher than. Structure: hexane has a longer chain length / more C atoms / greater molecular size or mass / larger surface area. Intermolecular forces: it has stronger (more) Van der Waals / London / dispersion forces. Energy: more energy is needed to overcome or break these intermolecular forces.",
    marking_notes: "Mark for 'higher than' plus one mark each for structure, intermolecular forces and energy. Memo accepts the equivalent comparison written from the pentane side (shorter chain, weaker forces, less energy).",
    steps: [
      st(1, "Will the boiling point of hexane be higher or lower than that of pentane?", "Higher than that of pentane", ["Lower than that of pentane", "The same as that of pentane", "Impossible to tell without data"]),
      st(1, "How does the molecular structure of hexane compare with that of pentane?", "Hexane has a longer chain / more carbon atoms / larger surface area.", ["Hexane has a shorter chain / fewer carbon atoms / smaller surface area.", "Hexane has hydrogen bonds but pentane has none.", "Hexane has a different functional group."]),
      st(1, "How do the intermolecular forces in hexane compare with those in pentane?", "Hexane has stronger (more) Van der Waals / London forces.", ["Hexane has weaker Van der Waals / London forces.", "Hexane has hydrogen bonds between its molecules.", "Hexane has weaker covalent bonds within each molecule."]),
      st(1, "How does the energy needed to boil hexane compare with that for pentane?", "More energy is needed to overcome the intermolecular forces in hexane.", ["Less energy is needed to overcome the intermolecular forces in hexane.", "More energy is needed to break the covalent bonds within hexane molecules.", "The same energy is needed for both."]),
    ],
  },

  // ============ QUESTION 5: ORGANIC REACTIONS (15 marks) ============
  {
    number: "5", sub_number: "5.1",
    text: "Two straight chain compounds, P and Q, each have the following molecular formula: P: C4H10; Q: C4H8. Write down the name of the homologous series to which Q belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Alkenes.",
    marking_notes: "Accept 'alkenes' / 'alkene'.",
    steps: [st(1, "To which homologous series does Q (C4H8, straight chain) belong?", "Alkenes", ["Alkanes", "Alkynes", "Alcohols"])],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Compound P (C4H10) reacts with chlorine to form 2-chlorobutane. Write down a balanced chemical equation, using MOLECULAR FORMULAE, for the reaction that takes place.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C4H10 + Cℓ2 → C4H9Cℓ + HCℓ",
    marking_notes: "Memo marks the balanced equation out of 3: reactants, products, balanced.",
    steps: [
      st(1, "Which are the correct reactants?", "C4H10 + Cℓ2", ["C4H8 + Cℓ2", "C4H10 + HCℓ", "C4H10 + Cℓ"]),
      st(1, "Which are the correct products?", "C4H9Cℓ + HCℓ", ["C4H8Cℓ2 + H2", "C4H9Cℓ + H2", "C4H9Cℓ + Cℓ2"]),
      st(1, "Which is the correct balanced equation?", "C4H10 + Cℓ2 → C4H9Cℓ + HCℓ", ["C4H10 + 2Cℓ2 → C4H9Cℓ + 2HCℓ", "C4H10 + Cℓ2 → C4H9Cℓ + H2", "C4H10 + Cℓ2 → C4H8Cℓ2 + H2"]),
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Compound P (C4H10) reacts with chlorine to form 2-chlorobutane. Write down the type of reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Halogenation / substitution / chlorination.",
    marking_notes: "Accept halogenation, substitution or chlorination.",
    steps: [st(1, "What type of reaction forms 2-chlorobutane from butane and chlorine?", "Substitution (halogenation)", ["Addition", "Elimination", "Hydrolysis"])],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Compound P (C4H10) reacts with chlorine to form 2-chlorobutane. Write down ONE reaction condition (other than the solvent needed).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Heat OR (sun)light (UV).",
    marking_notes: "Accept heat or (sun)light / UV.",
    steps: [st(1, "Which reaction condition is needed for the chlorination of an alkane?", "Heat or (sun)light (UV)", ["Concentrated NaOH and strong heating", "A platinum catalyst at high pressure", "Concentrated H2SO4 as a catalyst"])],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Compound Q (C4H8) takes part in reactions as shown in the flow diagram: with bromine it forms 2,3-dibromobutane, and in reaction 1 it forms compound P (C4H10). Write down the structural formula for 2,3-dibromobutane.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CHBrCHBrCH3 (a four-carbon chain with one Br on each of carbons 2 and 3).",
    marking_notes: "The memo draws the full structural formula; given here in condensed text form.",
    steps: [st(2, "Which formula represents 2,3-dibromobutane?", "CH3CHBrCHBrCH3", ["CH2BrCH2CH2CH2Br", "CH3CBr2CH2CH3", "CH2BrCHBrCH2CH3"])],
    image_url: `${IMG}/5.3-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Compound Q (C4H8) reacts with bromine to form 2,3-dibromobutane. Write down the IUPAC name of compound Q.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "But-2-ene (2-butene).",
    marking_notes: "One mark for the parent chain/homologous series (but...ene); one mark for the double-bond position (2).",
    steps: [
      st(1, "What type of four-carbon compound is Q?", "A four-carbon alkene (but-...-ene)", ["A four-carbon alkane (butane)", "A three-carbon alkene (propene)", "A four-carbon alkyne (butyne)"]),
      st(1, "What is the IUPAC name of Q?", "But-2-ene", ["But-1-ene", "2-methylpropene", "Cyclobutane"]),
    ],
    image_url: `${IMG}/5.3-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.3.3",
    text: "In the flow diagram, compound Q (C4H8) forms compound P (C4H10) in reaction 1. Write down the balanced equation, using structural formulae, for reaction 1.",
    marks: 4, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CH=CHCH3 + H2 → CH3CH2CH2CH3 (but-2-ene + hydrogen → butane), written with full structural formulae in the memo.",
    marking_notes: "Memo marks the equation out of 4 (structural formulae): reactant Q, H2, product P and the complete balanced equation. Given here in condensed text form.",
    steps: [
      st(1, "Which structure is the organic reactant (compound Q)?", "CH3CH=CHCH3", ["CH3CH2CH2CH3", "CH2=CHCH2CH3", "CH3CH2CHO"]),
      st(1, "Which other reactant is needed in reaction 1?", "H2", ["H2O", "Br2", "HBr"]),
      st(1, "Which structure is the organic product (compound P)?", "CH3CH2CH2CH3", ["CH3CHBrCHBrCH3", "CH3CH2CH2CH2OH", "CH3CH=CHCH3"]),
      st(1, "Which is the complete balanced equation for reaction 1?", "CH3CH=CHCH3 + H2 → CH3CH2CH2CH3", ["CH3CH=CHCH3 + H2O → CH3CH2CH(OH)CH3", "CH3CH2CH2CH3 + H2 → CH3CH=CHCH3", "CH3CH=CHCH3 + 2H2 → CH3CH2CH2CH3"]),
    ],
    image_url: `${IMG}/5.3-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.3.4",
    text: "In the flow diagram, compound Q (C4H8) forms compound P (C4H10) in reaction 1. Write down the type of reaction that occurs in reaction 1.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Hydrogenation / addition.",
    marking_notes: "Accept hydrogenation or addition.",
    steps: [st(1, "What type of reaction is reaction 1 (C4H8 → C4H10)?", "Hydrogenation (addition)", ["Substitution", "Elimination (dehydrohalogenation)", "Cracking"])],
    image_url: `${IMG}/5.3-flow-diagram.png`,
  },

  // ============ QUESTION 6: RATE OF REACTION (17 marks) ============
  {
    number: "6", sub_number: "6.1.1",
    text: "A hydrogen peroxide solution decomposes slowly at room temperature: 2H2O2(aq) → 2H2O(ℓ) + O2(g). Learners compare the effectiveness of three different catalysts, P, Q and R, on the rate of decomposition of hydrogen peroxide. They place EQUAL AMOUNTS of sufficient hydrogen peroxide into three containers, add EQUAL AMOUNTS of the three catalysts, and measure the rate at which oxygen gas is produced. For this investigation, write down the independent variable.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "(Type of) catalyst.",
    marking_notes: "Accept 'catalyst' / 'type of catalyst'.",
    steps: [st(1, "What is the independent variable in this investigation?", "The type of catalyst", ["The rate of oxygen production", "The amount of hydrogen peroxide", "The amount of catalyst"])],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "(Investigation: three different catalysts, P, Q and R, added in equal amounts to equal amounts of hydrogen peroxide; the rate at which oxygen gas is produced is measured.) For this investigation, write down the dependent variable.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Rate (of reaction).",
    marking_notes: "Accept 'rate of reaction' / rate of oxygen production.",
    steps: [st(1, "What is the dependent variable in this investigation?", "The rate of reaction (rate of oxygen production)", ["The type of catalyst", "The amount of catalyst", "The amount of hydrogen peroxide"])],
  },
  {
    number: "6", sub_number: "6.2",
    text: "The graph (volume of oxygen versus time) shows the results for catalysts P, Q and R. Curve R has the steepest initial gradient; all three curves level off at the same volume. Which catalyst is the most effective? Give a reason for the answer.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "R. It gives the fastest rate (steepest initial gradient; oxygen is produced fastest / reaction reaches completion in the shortest time).",
    marking_notes: "One mark for R; one mark for the reason (fastest rate / steepest initial gradient / completes in shortest time).",
    steps: [
      st(1, "Which catalyst is the most effective?", "R", ["P", "Q", "All three are equally effective"]),
      st(1, "What is the reason?", "It has the fastest rate (steepest initial gradient).", ["It produces the largest final volume of oxygen.", "It has the gentlest initial gradient.", "It is used up the slowest."]),
    ],
    image_url: `${IMG}/6-catalyst-graph.png`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "Fully explain, by referring to the collision theory, how a catalyst increases the rate of a reaction.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "A catalyst provides an alternative pathway of lower activation energy. More molecules have kinetic energy equal to or greater than the activation energy (sufficient energy), so there are more effective collisions per unit time and the rate of effective collisions increases.",
    marking_notes: "One mark each: lower activation energy via an alternative pathway; more molecules with sufficient kinetic energy; more effective collisions per unit time.",
    steps: [
      st(1, "What does a catalyst do to the reaction pathway?", "Provides an alternative pathway of lower activation energy", ["Raises the kinetic energy of every molecule", "Increases the temperature of the reaction mixture", "Increases the concentration of the reactants"]),
      st(1, "What is the effect on the molecules?", "More molecules have kinetic energy equal to or greater than the activation energy", ["Fewer molecules need to collide", "The molecules move faster because the temperature rises", "The activation energy of the reaction increases"]),
      st(1, "What is the effect on collisions?", "More effective collisions per unit time", ["More collisions in total, all of them effective", "Fewer but more energetic collisions per unit time", "Collisions become unnecessary"]),
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "In another experiment, the learners obtain these results for the decomposition of hydrogen peroxide: time 0 s, [H2O2] = 0,0200 mol·dm⁻³; 200 s, 0,0160; 400 s, 0,0131; 600 s, 0,0106; 800 s, 0,0086. Calculate the AVERAGE rate of decomposition (in mol·dm⁻³·s⁻¹) of H2O2(aq) in the first 400 s.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Average rate = Δc/Δt = (0,0200 − 0,0131)/(400 − 0) = 1,73 × 10⁻⁵ mol·dm⁻³·s⁻¹ (the memo also shows it as −1,73 × 10⁻⁵ since the concentration decreases).",
    marking_notes: "Marks: formula (rate = Δc/Δt); substitution (0,0200, 0,0131 and 400 s); final answer 1,73 × 10⁻⁵ mol·dm⁻³·s⁻¹ (either sign accepted per memo).",
    steps: [
      st(1, "Which formula gives the average rate of decomposition of H2O2?", "Average rate = Δ[H2O2]/Δt", ["Average rate = Δt/Δ[H2O2]", "Average rate = [H2O2] × Δt", "Average rate = [H2O2] at the end/Δt"]),
      st(1, "Which substitution is correct for the first 400 s?", "(0,0200 − 0,0131)/400", ["(0,0200 − 0,0106)/600", "(0,0200 − 0,0160)/200", "0,0131/400"]),
      st(1, "What is the average rate in mol·dm⁻³·s⁻¹?", "1,73 × 10⁻⁵", ["1,57 × 10⁻⁵", "2,00 × 10⁻⁵", "3,28 × 10⁻⁵"]),
    ],
  },
  {
    number: "6", sub_number: "6.5",
    text: "Will the rate of decomposition at 600 s be GREATER THAN, LESS THAN or EQUAL TO the rate calculated in QUESTION 6.4 (the average rate over the first 400 s)? Give a reason for the answer.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Less than. The concentration of hydrogen peroxide decreases as the reaction proceeds.",
    marking_notes: "One mark for 'less than'; one mark for the reason (concentration of H2O2 decreases as the reaction proceeds).",
    steps: [
      st(1, "How does the rate at 600 s compare with the rate in 6.4?", "Less than", ["Greater than", "Equal to", "Cannot be compared"]),
      st(1, "What is the reason?", "The concentration of hydrogen peroxide decreases as the reaction proceeds.", ["The concentration of hydrogen peroxide increases as the reaction proceeds.", "The temperature decreases as the reaction proceeds.", "The catalyst is used up completely."]),
    ],
  },
  {
    number: "6", sub_number: "6.6",
    text: "Using the table in QUESTION 6.4 (H2O2 concentration fell from 0,0200 to 0,0106 mol·dm⁻³ in the first 600 s) and the equation 2H2O2(aq) → 2H2O(ℓ) + O2(g), calculate the mass of oxygen produced in the first 600 s if 50 cm³ of hydrogen peroxide decomposes in this time interval.",
    marks: 5, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "Δc(H2O2) = 0,0200 − 0,0106 = 0,0094 mol·dm⁻³; n(H2O2) = cV = (0,0094)(50 × 10⁻³) = 4,7 × 10⁻⁴ mol; n(O2) = ½n(H2O2) = 2,35 × 10⁻⁴ mol; m(O2) = nM = (2,35 × 10⁻⁴)(32) = 7,52 × 10⁻³ g.",
    marking_notes: "Memo marks: n = cV (or equivalent); substitution of (0,0200 − 0,0106) and 50 × 10⁻³; n(O2) = ½n(H2O2); using M = 32 g·mol⁻¹; final answer 7,52 × 10⁻³ g. The memo also accepts 0,008 g and 0,01 g (rounded values).",
    steps: [
      st(1, "Which formula links the amount of H2O2 that reacted to its concentration change and the volume?", "n = cV", ["n = c/V", "n = V/c", "n = c × V × 22,4"]),
      st(1, "What is n(H2O2) that decomposed (Δc = 0,0200 − 0,0106, V = 50 × 10⁻³ dm³)?", "4,7 × 10⁻⁴ mol", ["5,3 × 10⁻⁴ mol", "1,0 × 10⁻³ mol", "0,47 mol"]),
      st(1, "Using the mole ratio 2H2O2 : 1 O2, what is n(O2)?", "2,35 × 10⁻⁴ mol", ["9,4 × 10⁻⁴ mol", "4,7 × 10⁻⁴ mol", "1,57 × 10⁻⁴ mol"]),
      st(1, "Which expression converts n(O2) to mass?", "m = nM with M(O2) = 32 g·mol⁻¹", ["m = nM with M(O2) = 16 g·mol⁻¹", "m = n/M with M(O2) = 32 g·mol⁻¹", "m = nM with M(O2) = 34 g·mol⁻¹"]),
      st(1, "What mass of oxygen is produced?", "7,52 × 10⁻³ g", ["1,50 × 10⁻² g", "3,76 × 10⁻³ g", "3,01 × 10⁻² g"]),
    ],
  },

  // ============ QUESTION 7: CHEMICAL EQUILIBRIUM (15 marks) ============
  {
    number: "7", sub_number: "7.1",
    text: "N2(g) + O2(g) ⇌ 2NO(g). Initially, 2 mol of nitrogen and 2 mol of oxygen are mixed in a 5 dm³ sealed container. At temperature T, the equilibrium constant Kc = 1,2 × 10⁻⁴. Is the yield of NO(g) at temperature T HIGH or LOW? Give a reason for the answer.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Low. Kc is very small (Kc < 1), so at equilibrium the concentration of products is small compared with the reactants.",
    marking_notes: "One mark for 'low'; one mark for the reason (small Kc value / Kc smaller than 1).",
    steps: [
      st(1, "Is the yield of NO(g) high or low?", "Low", ["High", "About 50 %", "It cannot be determined from Kc"]),
      st(1, "What is the reason?", "Kc is very small (Kc < 1).", ["Kc is very large (Kc > 1).", "Kc equals 1.", "Kc is positive."]),
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "N2(g) + O2(g) ⇌ 2NO(g). Initially, 2 mol of nitrogen and 2 mol of oxygen are mixed in a 5 dm³ sealed container, and Kc = 1,2 × 10⁻⁴ at temperature T. Calculate the equilibrium concentration of NO(g) at this temperature.",
    marks: 8, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Mole ratio N2 : O2 : NO = 1 : 1 : 2, so at equilibrium n(N2) = n(O2) = 2 − x and n(NO) = 2x. Concentrations: [N2] = [O2] = (2 − x)/5 and [NO] = 2x/5. Kc = [NO]²/([N2][O2]), so 1,2 × 10⁻⁴ = (2x/5)²/((2 − x)/5)², giving x = 0,0109 mol. [NO] = 2(0,0109)/5 = 4,36 × 10⁻³ mol·dm⁻³ (memo also accepts 0,004 mol·dm⁻³).",
    marking_notes: "Memo marks: ratio; n(N2) and n(O2) at equilibrium; n(NO) at equilibrium; divide by 5 dm³; correct Kc expression; substitution of concentrations; substitution of Kc; final answer 4,36 × 10⁻³ mol·dm⁻³ (0,004 accepted). The memo also gives equivalent routes with x defined differently or using concentrations directly; the amount-of-substance route (x = 0,0109 mol) is used here.",
    steps: [
      st(1, "What is the mole ratio N2 : O2 : NO from the balanced equation?", "1 : 1 : 2", ["1 : 1 : 1", "2 : 1 : 1", "1 : 2 : 2"]),
      st(1, "If x mol of N2 reacts, what are n(N2) and n(O2) at equilibrium?", "n(N2) = n(O2) = 2 − x", ["n(N2) = n(O2) = 2 + x", "n(N2) = n(O2) = 2 − 2x", "n(N2) = 2 − x and n(O2) = 2 − 2x"]),
      st(1, "What is n(NO) at equilibrium (none present initially)?", "2x", ["x", "2 + 2x", "2 − 2x"]),
      st(1, "How do you convert these amounts to concentrations?", "Divide each amount by the volume, 5 dm³", ["Multiply each amount by the volume, 5 dm³", "Divide each amount by 22,4 dm³·mol⁻¹", "Divide the amounts of N2 and O2 by 5 dm³ but leave NO in moles"]),
      st(1, "Which is the correct Kc expression?", "Kc = [NO]² / ([N2][O2])", ["Kc = [N2][O2] / [NO]²", "Kc = [NO] / ([N2][O2])", "Kc = [NO]² / ([N2] + [O2])"]),
      st(1, "Which substitution of the equilibrium concentrations is correct?", "(2x/5)² / [((2 − x)/5)((2 − x)/5)]", ["(x/5)² / [((2 − x)/5)((2 − x)/5)]", "(2x/5) / [((2 − x)/5)((2 − x)/5)]", "((2 − x)/5)² / (2x/5)²"]),
      st(1, "After substituting Kc = 1,2 × 10⁻⁴ and solving, what is x?", "0,0109 mol", ["0,0218 mol", "0,00545 mol", "0,109 mol"]),
      st(1, "What is the equilibrium concentration of NO(g)?", "4,36 × 10⁻³ mol·dm⁻³", ["2,18 × 10⁻³ mol·dm⁻³", "2,18 × 10⁻² mol·dm⁻³", "8,72 × 10⁻³ mol·dm⁻³"]),
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "N2(g) + O2(g) ⇌ 2NO(g). How will the following change affect the YIELD of NO(g)? The volume of the reaction vessel is decreased at constant temperature.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Remains the same. There are equal numbers of moles of gas on both sides of the equation (2 mol : 2 mol), so a change in pressure/volume does not shift the equilibrium.",
    marking_notes: "Accept 'remains the same'.",
    steps: [st(1, "How is the yield of NO(g) affected when the volume is decreased at constant temperature?", "Remains the same", ["Increases", "Decreases", "Falls to zero"])],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "N2(g) + O2(g) ⇌ 2NO(g). How will the following change affect the YIELD of NO(g)? An inert gas such as argon is added to the mixture.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Remains the same. An inert gas does not change the concentrations (partial pressures) of the reacting gases at constant volume, so the equilibrium does not shift.",
    marking_notes: "Accept 'remains the same'.",
    steps: [st(1, "How is the yield of NO(g) affected when argon is added?", "Remains the same", ["Increases", "Decreases", "Falls to zero"])],
  },
  {
    number: "7", sub_number: "7.4",
    text: "It is found that Kc of the reaction N2(g) + O2(g) ⇌ 2NO(g) increases with an increase in temperature. Is this reaction exothermic or endothermic? Explain the answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Endothermic. An increase in Kc implies an increase in the concentration of products (the forward reaction is favoured / the equilibrium position shifts right). An increase in temperature favours the endothermic reaction.",
    marking_notes: "Marks: endothermic; an increase in Kc means the forward reaction is favoured / more products; an increase in temperature favours the endothermic reaction.",
    steps: [
      st(1, "Is the reaction exothermic or endothermic?", "Endothermic", ["Exothermic", "Neither, because Kc does not depend on temperature", "Cannot be determined"]),
      st(1, "What does an increase in Kc imply?", "The forward reaction is favoured (more products at equilibrium).", ["The reverse reaction is favoured (more reactants at equilibrium).", "The reaction rate has decreased.", "A catalyst has been added."]),
      st(1, "Why does this show the reaction is that type?", "An increase in temperature favours the endothermic reaction.", ["An increase in temperature favours the exothermic reaction.", "An increase in temperature always favours the side with fewer gas moles.", "An increase in temperature lowers the activation energy."]),
    ],
  },

  // ============ QUESTION 8: GALVANIC CELL (12 marks) ============
  {
    number: "8", sub_number: "8.1.1",
    text: "The diagram shows a galvanic cell operating under standard conditions (a Pt electrode in Cℓ⁻(aq) with Cℓ2(g) bubbled over it, and an Au electrode in Au³⁺(aq), joined by a salt bridge). The cell reaction is: 6Cℓ⁻(aq) + 2Au³⁺(aq) → 3Cℓ2(g) + 2Au(s). With switch S OPEN, the initial voltmeter reading is 0,14 V. Write down the NAME or FORMULA of the oxidising agent.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Au³⁺ / gold(III) ion.",
    marking_notes: "Accept Au³⁺ or gold(III) ion.",
    steps: [st(1, "Which species is the oxidising agent in this cell reaction?", "Au³⁺", ["Cℓ⁻", "Cℓ2", "Au"])],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "(Galvanic cell with reaction 6Cℓ⁻(aq) + 2Au³⁺(aq) → 3Cℓ2(g) + 2Au(s).) Write down the half-reaction which takes place at the anode.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "2Cℓ⁻ → Cℓ2 + 2e⁻",
    marking_notes: "The memo notes that the equation written in the reverse direction (reduction) earns no marks, and that ⇌ with the correct direction earns only 1 of the 2 marks.",
    steps: [st(2, "Which half-reaction takes place at the anode?", "2Cℓ⁻ → Cℓ2 + 2e⁻", ["Cℓ2 + 2e⁻ → 2Cℓ⁻", "Au³⁺ + 3e⁻ → Au", "2Cℓ⁻ + 2e⁻ → Cℓ2"])],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "(Galvanic cell with reaction 6Cℓ⁻(aq) + 2Au³⁺(aq) → 3Cℓ2(g) + 2Au(s); Pt electrode in Cℓ⁻(aq)/Cℓ2(g) half-cell, Au electrode in Au³⁺(aq) half-cell.) Write down the cell notation for this cell.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Pt(s) | Cℓ⁻(1 mol·dm⁻³) | Cℓ2(g) || Au³⁺(1 mol·dm⁻³) | Au(s)  (also accepted: Pt(s) | Cℓ⁻(aq) | Cℓ2(g) || Au³⁺(aq) | Au(s), or without state symbols).",
    marking_notes: "Memo accepts the three written forms shown; marks for the anode half-cell on the left, the double line (salt bridge), and the cathode half-cell on the right. The memo's own ordering of the chloride half-cell (Cℓ⁻ before Cℓ2) is transcribed as printed.",
    steps: [st(3, "Which is the correct cell notation?", "Pt(s) | Cℓ⁻(aq) | Cℓ2(g) || Au³⁺(aq) | Au(s)", ["Au(s) | Au³⁺(aq) || Cℓ2(g) | Cℓ⁻(aq) | Pt(s)", "Cℓ⁻(aq) | Cℓ2(g) | Pt(s) || Au(s) | Au³⁺(aq)", "Pt(s) | Cℓ⁻(aq) | Cℓ2(g) | Au³⁺(aq) | Au(s)"])],
  },
  {
    number: "8", sub_number: "8.2",
    text: "(Galvanic cell operating under standard conditions; Pt/Cℓ2/Cℓ⁻ half-cell and Au/Au³⁺ half-cell; the initial voltmeter reading is 0,14 V.) Calculate the standard reduction potential of Au.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°cathode − E°anode. The Cℓ2/Cℓ⁻ half-cell is the anode (E° = +1,36 V from the data sheet) and the Au half-cell is the cathode. 0,14 = E°cathode − (+1,36), so E°(Au³⁺/Au) = +1,50 V.",
    marking_notes: "Marks: formula; identifying the anode/using 1,36 V; substitution of 0,14 V; final answer +1,50 V. The memo also shows an equivalent method (sum of E° values: −1,36 + 1,50 = 0,14 V).",
    steps: [
      st(1, "Which formula should be used?", "E°cell = E°cathode − E°anode", ["E°cell = E°anode − E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°oxidising agent + E°reducing agent"]),
      st(1, "Which half-cell is the anode, and what is its standard reduction potential?", "Cℓ2/Cℓ⁻ half-cell, E° = +1,36 V", ["Au³⁺/Au half-cell, E° = +1,36 V", "Cℓ2/Cℓ⁻ half-cell, E° = −1,36 V", "Au³⁺/Au half-cell, E° = +0,14 V"]),
      st(1, "Which substitution is correct?", "0,14 = E°cathode − (+1,36)", ["0,14 = (+1,36) − E°cathode", "0,14 = E°cathode + (+1,36)", "0,14 = E°cathode − (−1,36)"]),
      st(1, "What is the standard reduction potential of Au?", "+1,50 V", ["+1,22 V", "−1,50 V", "−1,22 V"]),
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Switch S is now closed and the bulb lights up. How will the reading on the voltmeter now compare to the INITIAL reading of 0,14 V? Write down only LARGER THAN, SMALLER THAN or EQUAL TO. Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Smaller than. There is a drop in potential difference (voltage) due to the internal resistance of the cell ('lost volts') when current flows.",
    marking_notes: "One mark for 'smaller than'; one mark for the reason (internal resistance / lost volts when current is drawn).",
    steps: [
      st(1, "How does the new voltmeter reading compare with 0,14 V?", "Smaller than", ["Larger than", "Equal to", "It drops to exactly zero"]),
      st(1, "What is the reason?", "There is a drop in potential difference due to the internal resistance of the cell ('lost volts').", ["The standard reduction potentials of the half-cells change when the bulb lights.", "The concentrations in the half-cells no longer matter.", "The salt bridge stops working when the bulb lights."]),
    ],
  },

  // ============ QUESTION 9: ELECTROLYTIC CELL (10 marks) ============
  {
    number: "9", sub_number: "9.1",
    text: "The diagram represents a simplified electrolytic cell used to electroplate a spanner with chromium from Cr(NO3)3(aq). Define the term electrolysis.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "The chemical process in which electrical energy is converted to chemical energy (or: the use of electrical energy to produce chemical change).",
    marking_notes: "Memo accepts either definition above. Offered as a 2-mark choice of definitions.",
    steps: [st(2, "Which is the correct definition of electrolysis?", "The chemical process in which electrical energy is converted to chemical energy.", ["The chemical process in which chemical energy is converted to electrical energy.", "The process in which a solution conducts electricity through the movement of electrons.", "The process in which a metal is oxidised by oxygen in the air."])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "(Electrolytic cell used to electroplate a spanner with chromium from Cr(NO3)3(aq).) Write down the half-reaction that occurs at the spanner.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cr³⁺ + 3e⁻ → Cr(s)",
    marking_notes: "The spanner is the cathode, where Cr³⁺ ions are reduced and deposited.",
    steps: [st(2, "Which half-reaction occurs at the spanner?", "Cr³⁺ + 3e⁻ → Cr(s)", ["Cr(s) → Cr³⁺ + 3e⁻", "Cr³⁺ + e⁻ → Cr²⁺", "Cr²⁺ + 2e⁻ → Cr(s)"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "(Electrolytic cell used to electroplate a spanner with chromium from Cr(NO3)3(aq); the concentration of Cr(NO3)3(aq) stays constant.) Write down the NAME or FORMULA of the metal of which electrode X is made.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cr / chromium.",
    marking_notes: "Accept Cr or chromium.",
    steps: [st(1, "Of which metal is electrode X made?", "Chromium (Cr)", ["Copper (Cu)", "Iron (Fe)", "Platinum (Pt)"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "(Electrolytic cell used to electroplate a spanner with chromium from Cr(NO3)3(aq).) Write down the NAME or FORMULA of the oxidising agent.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Chromium(III) ions / Cr³⁺.",
    marking_notes: "Accept chromium(III) ions or Cr³⁺.",
    steps: [st(1, "Which species is the oxidising agent?", "Cr³⁺ (chromium(III) ions)", ["Cr(s)", "NO3⁻(aq)", "H2O(ℓ)"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.3",
    text: "(Electrolytic cell used to electroplate a spanner with chromium from Cr(NO3)3(aq).) A constant current passes through the solution and the concentration of Cr(NO3)3(aq) remains constant. In the process, a total of 0,03 moles of electrons is transferred. Calculate the gain in mass of the spanner.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cr³⁺ + 3e⁻ → Cr, so n(Cr) = 0,03/3 = 0,01 mol. m = nM = (0,01)(52) = 0,52 g.",
    marking_notes: "Marks: use of n = m/M or a ratio calculation; ratio 1 : 3 (1 mol Cr³⁺ gains 3 mol electrons); M = 52 g·mol⁻¹; final answer 0,52 g.",
    steps: [
      st(1, "What is the mole ratio n(Cr) : n(e⁻) from Cr³⁺ + 3e⁻ → Cr?", "1 : 3", ["3 : 1", "1 : 1", "1 : 2"]),
      st(1, "What amount of chromium is deposited?", "0,01 mol", ["0,03 mol", "0,09 mol", "0,015 mol"]),
      st(1, "Which molar mass of chromium should be used (from the periodic table)?", "52 g·mol⁻¹", ["24 g·mol⁻¹", "59 g·mol⁻¹", "63,5 g·mol⁻¹"]),
      st(1, "What is the gain in mass of the spanner?", "0,52 g", ["1,56 g", "0,17 g", "5,2 g"]),
    ],
  },

  // ============ QUESTION 10: LEAD-ACID BATTERY (17 marks) ============
  {
    number: "10", sub_number: "10.1",
    text: "Lead-acid batteries consist of several cells. A sulphuric acid solution is used as electrolyte in these batteries. Define the term electrolyte.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A solution which conducts electricity through the movement of ions.",
    marking_notes: "Offered as a 2-mark choice of definitions.",
    steps: [st(2, "Which is the correct definition of an electrolyte?", "A solution which conducts electricity through the movement of ions.", ["A solution which conducts electricity through the movement of electrons.", "A solid metal through which electrons flow in the external circuit.", "A substance that speeds up a reaction without being used up."])],
  },
  {
    number: "10", sub_number: "10.2",
    text: "The standard reduction potentials for the half-reactions in a cell of a lead-acid battery are: PbO2(s) + SO4²⁻(aq) + 4H⁺(aq) + 2e⁻ ⇌ PbSO4(s) + 2H2O(ℓ), E° = +1,69 V; PbSO4(s) + 2e⁻ ⇌ Pb(s) + SO4²⁻(aq), E° = −0,36 V. Write down the half-reaction that takes place at the anode of this cell.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Pb(s) + SO4²⁻(aq) → PbSO4(s) + 2e⁻",
    marking_notes: "The anode is where oxidation occurs, the half-reaction with the lower (more negative) reduction potential, written in the reverse direction.",
    steps: [st(2, "Which half-reaction takes place at the anode?", "Pb(s) + SO4²⁻(aq) → PbSO4(s) + 2e⁻", ["PbSO4(s) + 2e⁻ → Pb(s) + SO4²⁻(aq)", "PbO2(s) + SO4²⁻(aq) + 4H⁺(aq) + 2e⁻ → PbSO4(s) + 2H2O(ℓ)", "Pb(s) → Pb²⁺(aq) + 2e⁻"])],
  },
  {
    number: "10", sub_number: "10.3",
    text: "(Lead-acid cell: PbO2(s) + SO4²⁻(aq) + 4H⁺(aq) + 2e⁻ ⇌ PbSO4(s) + 2H2O(ℓ), E° = +1,69 V; PbSO4(s) + 2e⁻ ⇌ Pb(s) + SO4²⁻(aq), E° = −0,36 V.) Write down the overall cell reaction when the cell delivers current.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "PbO2(s) + Pb(s) + 2SO4²⁻(aq) + 4H⁺(aq) → 2PbSO4(s) + 2H2O(ℓ)  (or PbO2(s) + Pb(s) + 2H2SO4(aq) → 2PbSO4(s) + 2H2O(ℓ)).",
    marking_notes: "Memo accepts either ionic or molecular form, provided it is balanced. Marks: reactants, products, balanced.",
    steps: [
      st(1, "Which species are the reactants when the cell delivers current?", "PbO2, Pb, SO4²⁻ and H⁺", ["PbSO4 and H2O", "PbO2 and PbSO4 only", "Pb and H2O only"]),
      st(1, "Which species are the products?", "PbSO4 and H2O", ["Pb and PbO2", "PbSO4 and H2", "Pb²⁺ and H2O"]),
      st(1, "Which is the balanced overall equation?", "PbO2(s) + Pb(s) + 2SO4²⁻(aq) + 4H⁺(aq) → 2PbSO4(s) + 2H2O(ℓ)", ["PbO2(s) + Pb(s) + SO4²⁻(aq) + 2H⁺(aq) → 2PbSO4(s) + H2O(ℓ)", "PbO2(s) + Pb(s) + 2SO4²⁻(aq) + 4H⁺(aq) → PbSO4(s) + 2H2O(ℓ)", "2PbSO4(s) + 2H2O(ℓ) → PbO2(s) + Pb(s) + 2SO4²⁻(aq) + 4H⁺(aq)"]),
    ],
  },
  {
    number: "10", sub_number: "10.4.1",
    text: "A number of lead-acid cells are connected in series to form a 300 V battery which operates at standard conditions. Calculate the maximum energy stored in the battery if its capacity is 7 500 A·h.",
    marks: 5, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Q = IΔt = (7 500)(3 600) = 2,7 × 10⁷ C. W = VQ = (300)(2,7 × 10⁷) = 8,1 × 10⁹ J. (Equivalently W = VIΔt = (300)(7 500)(3 600) = 8,1 × 10⁹ J.)",
    marking_notes: "Marks: Q = IΔt; substitution (7 500)(3 600); Q = 2,7 × 10⁷ C; W = VQ; final answer 8,1 × 10⁹ J.",
    steps: [
      st(1, "Which formula gives the charge stored?", "Q = IΔt", ["Q = I/Δt", "Q = VΔt", "Q = W/I"]),
      st(1, "Which substitution is correct (1 hour = 3 600 s)?", "Q = (7 500)(3 600)", ["Q = (7 500)(60)", "Q = (7 500)/(3 600)", "Q = (7 500)(24)"]),
      st(1, "What is the charge Q?", "2,7 × 10⁷ C", ["2,7 × 10⁴ C", "4,5 × 10⁵ C", "2,08 C"]),
      st(1, "Which formula gives the energy (work) stored?", "W = VQ", ["W = Q/V", "W = V/Q", "W = IQ"]),
      st(1, "What is the maximum energy stored?", "8,1 × 10⁹ J", ["8,1 × 10⁶ J", "2,25 × 10⁶ J", "9,0 × 10⁴ J"]),
    ],
  },
  {
    number: "10", sub_number: "10.4.2",
    text: "A number of lead-acid cells (half-reactions PbO2/PbSO4, E° = +1,69 V, and PbSO4/Pb, E° = −0,36 V) are connected in series to form a 300 V battery which operates at standard conditions. Calculate the minimum number of cells in this battery.",
    marks: 5, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°cathode − E°anode = +1,69 − (−0,36) = +2,05 V. Number of cells = 300/2,05 = 146,34, so a minimum of 147 cells.",
    marking_notes: "Marks: formula; substitution; E°cell = 2,05 V; 300/2,05; round up to 147 cells (the fraction means a 147th cell is needed to reach 300 V).",
    steps: [
      st(1, "Which formula gives the standard emf of one cell?", "E°cell = E°cathode − E°anode", ["E°cell = E°anode − E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°cathode ÷ E°anode"]),
      st(1, "Which substitution is correct?", "E°cell = +1,69 − (−0,36)", ["E°cell = +1,69 − (+0,36)", "E°cell = −0,36 − (+1,69)", "E°cell = +1,69 + (+0,36) − 1,00"]),
      st(1, "What is E°cell for one cell?", "+2,05 V", ["+1,33 V", "−2,05 V", "+1,69 V"]),
      st(1, "How is the number of cells calculated?", "300 ÷ 2,05 = 146,34", ["300 × 2,05 = 615", "2,05 ÷ 300 = 0,0068", "300 − 2,05 = 297,95"]),
      st(1, "What is the minimum number of cells?", "147", ["146", "615", "300"]),
    ],
  },

  // ============ QUESTION 11: FERTILISERS (11 marks) ============
  {
    number: "11", sub_number: "11.1.1",
    text: "A farmer wants to produce spinach, potatoes and apples for the market. Write down the NAME of the most important primary nutrient required to enhance root growth of potato plants.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Phosphorus.",
    marking_notes: "Accept 'phosphorus' / 'fosfor' / P.",
    steps: [st(1, "Which primary nutrient enhances root growth of potato plants?", "Phosphorus", ["Nitrogen", "Potassium", "Calcium"])],
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "A farmer wants to produce spinach, potatoes and apples for the market. Write down the NAME of the most important primary nutrient required to enhance leaf growth of spinach.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Nitrogen.",
    marking_notes: "Accept 'nitrogen' / 'stikstof' / N.",
    steps: [st(1, "Which primary nutrient enhances leaf growth of spinach?", "Nitrogen", ["Phosphorus", "Potassium", "Sulphur"])],
  },
  {
    number: "11", sub_number: "11.1.3",
    text: "A farmer wants to produce spinach, potatoes and apples for the market. Write down the NAME of the most important primary nutrient required to enhance flower and fruit production of apple trees.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Potassium.",
    marking_notes: "Accept 'potassium' / 'kalium' / K.",
    steps: [st(1, "Which primary nutrient enhances flower and fruit production of apple trees?", "Potassium", ["Nitrogen", "Phosphorus", "Magnesium"])],
  },
  {
    number: "11", sub_number: "11.2.1",
    text: "Ammonia must be produced in large quantities to produce nitrogen-based fertilisers. Write down the name of the process used in the industrial preparation of ammonia.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Haber process.",
    marking_notes: "Accept 'Haber (process)'.",
    steps: [st(1, "What is the name of the industrial process used to prepare ammonia?", "Haber process", ["Contact process", "Ostwald process", "Solvay process"])],
  },
  {
    number: "11", sub_number: "11.2.2",
    text: "Write down a balanced chemical equation for the reaction that takes place in the industrial preparation of ammonia (the process named in QUESTION 11.2.1).",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "N2(g) + 3H2(g) ⇌ 2NH3(g)",
    marking_notes: "Memo marks the balanced equation out of 3: reactants, product, balanced.",
    steps: [
      st(1, "Which are the correct reactants?", "N2(g) and H2(g)", ["N2(g) and O2(g)", "NH3(g) and H2(g)", "N2(g) and H2O(g)"]),
      st(1, "What is the product?", "NH3(g)", ["NO(g)", "N2H4(g)", "NH4NO3(s)"]),
      st(1, "Which is the correct balanced equation?", "N2(g) + 3H2(g) ⇌ 2NH3(g)", ["N2(g) + H2(g) ⇌ NH3(g)", "N2(g) + 2H2(g) ⇌ 2NH3(g)", "2N2(g) + 3H2(g) ⇌ 2NH3(g)"]),
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Ammonium hydrogen phosphate, (NH4)2HPO4, is a type of fertiliser used in agriculture. Refer to the type of elements of which this fertiliser is composed to give a reason why it will be advantageous for a farmer to use this fertiliser instead of a fertiliser such as ammonium nitrate, NH4NO3.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Evaluation",
    model_answer: "The fertiliser contains two primary nutrients, N (nitrogen) and P (phosphorus), whereas ammonium nitrate contains only N (nitrogen).",
    marking_notes: "One mark for (NH4)2HPO4 containing two primary nutrients N and P; one mark for NH4NO3 containing only N.",
    steps: [
      st(1, "Which primary nutrients does (NH4)2HPO4 contain?", "Two primary nutrients: nitrogen (N) and phosphorus (P)", ["Only nitrogen (N)", "Nitrogen (N) and potassium (K)", "Phosphorus (P) and potassium (K)"]),
      st(1, "Which primary nutrient(s) does NH4NO3 contain?", "Only nitrogen (N)", ["Nitrogen (N) and phosphorus (P)", "Nitrogen (N) and potassium (K)", "Phosphorus (P) only"]),
    ],
  },
  {
    number: "11", sub_number: "11.4",
    text: "Describe ONE negative impact on humans when fertiliser runs off into dams and rivers as a result of rain.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Fertilisers in water lead to an excess of nitrates in the water, which can cause blue baby syndrome / cancer. (The memo also accepts: eutrophication leading to less drinking water, starvation due to the death of fish, or fewer water recreation areas.)",
    marking_notes: "The memo accepts ANY ONE of: eutrophication resulting in less drinking water / starvation due to dying fish / fewer recreation areas; OR excess nitrates in water resulting in blue baby syndrome / cancer. Only the nitrates option is offered as the correct choice here.",
    steps: [st(2, "Which is a negative impact on humans of fertiliser runoff into dams and rivers?", "Excess nitrates in drinking water can cause blue baby syndrome", ["The extra nutrients make the water more acidic and so safer to drink", "Fertiliser runoff increases the oxygen content of the water, harming people", "Fertiliser runoff lowers the nitrate content of drinking water"])],
  },
];
