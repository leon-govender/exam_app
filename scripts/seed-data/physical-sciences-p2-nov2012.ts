// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2012, National
// (English/Afrikaans bilingual paper; the English text is used here).
// Question paper source: Western Cape Education Department archive, "2012 NSC
// November Examination Papers" -> "Physical Science" -> "Physical Science
// English P2". The marking guideline (also WCED archive, "English P2 memo")
// is bilingual; cover pages of both PDFs were checked: "PHYSICAL SCIENCES:
// CHEMISTRY (P2)", "NOVEMBER 2012", MARKS 150, TIME 3 hours. Question numbers
// and values were cross-checked memo against paper for every item.
//
// Paper structure: Section A (Q1 one-word items 5, Q2 multiple choice 20 = 25)
// and Section B (Q3-Q11 = 125), all compulsory, 150 marks in total. All 150
// marks are included here.
//
// This is an older-syllabus paper: besides the usual organic chemistry, rate,
// equilibrium and electrochemistry it contains fertiliser / industrial-process
// content (Q11, 2.9 cryolite in the extraction of aluminium, 2.10 primary
// nutrients), which uses the `chemical-industry` topic.
//
// Grading: following the standing all-multiple-choice preference, EVERY
// sub-question here uses `steps` (stepped MCQ). Calculations get one step per
// mark-earning point; multi-mark explain/define/structure items are split into
// the memo's mark-earning ideas. No `marking_points` are used. The memo's own
// mark allocation for the 9-mark calculation 7.4 is shown only as "ratio" /
// "divide by 5" tick positions and a 9-mark total, so the step split for 7.4
// (and the step splits for 4.4, 8.2.2, 8.2.3, 10.4.1, 11.1.2, 11.1.4) is a
// reasonable reconstruction of the memo's ticks that sums to the memo total.
//
// Diagrams cropped (Pillow, from page renders) into
// public/question-images/chemistry-2012-p2/: 2.1 structure, 2.4 energy
// distribution curves, Q3 compound table, Q5 flow diagram, Q6 apparatus and
// loss-in-mass graph, Q8.1 beaker and Q8.2 cell, Q9 electroplating cell, Q11
// fertiliser flow diagram. The Q4 boiling-point table is given in the text.
//
// FLAG for review:
//  - Topic mapping gaps (older syllabus): 1.5 (brine) is mapped to
//    electrochemistry; 2.9 (cryolite in aluminium extraction), 2.10 (primary
//    nutrient) and all of Q11 are mapped to chemical-industry. 4.4 (combustion
//    of propane) is mapped to organic-chemistry.
//  - 6.6: the memo rounds n(CO2) = 4/44 to 0,09 mol and gives m(CaCO3) = 9 g;
//    the unrounded value is 9,09 g. Transcribed as the memo gives it (9 g).
//  - 7.4: the memo accepts 9,3 mol (Option 1, from 15,3 - 6) and also shows
//    x = 9,31 mol (Options 2 and 3). The correct step uses 9,3 mol (9,31).
//  - 4.2.2: the memo accepts chain length / molecular size / molecular mass
//    as the independent variable; the correct option lists all three.
//  - 9.4.2: the memo accepts silver nitrate (or silver ethanoate); the correct
//    option is silver nitrate, AgNO3.
//  - 9.6: the memo accepts EITHER protection from rusting OR improved
//    appearance; the correct option states both as accepted.
//  - 4.3: the memo accepts pentane OR hexane; the correct option names both.
//  - 5.2.1: the memo accepts substitution OR hydrolysis (both in the correct
//    option); 5.3.2 accepts elimination / dehydrohalogenation /
//    dehydrobromination.
//  - 10.3: the memo gives three accepted answers (any one); the correct option
//    is the first (cell reaction reaches equilibrium).

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2012-p2";

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
  year: 2012,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://www.westerncape.gov.za/education/files/wcg-blob-files?file=documents/physical-science-english-p2-2012-november-nsc-examination-papers-9cabe8f7.pdf&type=file" as string | null,
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

// Build a step with the correct option placed at a rotating position so the
// right answer is not always first.
let rot = 0;
function S(marks: number, description: string, correct: string, wrong: [string, string, string]): MarkingPointStep {
  const pos = rot++ % 4;
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

// Step whose options are given in fixed order (used for lettered MCQs).
function F(marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep {
  return { marks, description, options, correctIndex };
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============
  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term: The homologous series to which propan-2-one belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Ketones.",
    marking_notes: "Memo: Ketones.",
    steps: [S(1, "Which homologous series does propan-2-one (CH3COCH3) belong to?", "Ketones", ["Aldehydes", "Alcohols", "Carboxylic acids"])],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term: The IUPAC name of the alkene with two carbon atoms.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Ethene.",
    marking_notes: "Memo: Ethene.",
    steps: [S(1, "What is the IUPAC name of the alkene with two carbon atoms?", "Ethene", ["Ethane", "Ethyne", "Methene"])],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term: The minimum energy needed for a chemical reaction to occur.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "Activation energy.",
    marking_notes: "Memo: Activation (energy).",
    steps: [S(1, "What is the term for the minimum energy needed for a reaction to occur?", "Activation energy", ["Heat of reaction", "Kinetic energy", "Potential energy"])],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term: The general name used for a substance that increases the rate of a reaction without being consumed in the reaction.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "Catalyst.",
    marking_notes: "Memo: Catalyst.",
    steps: [S(1, "What is the general name for a substance that speeds up a reaction without being consumed?", "Catalyst", ["Reagent", "Inhibitor", "Reactant"])],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term: The chemical name of brine.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "(Saturated) sodium chloride solution.",
    marking_notes: "Memo: (saturated) sodium chloride solution.",
    steps: [S(1, "What is the chemical name of brine?", "(Saturated) sodium chloride solution", ["Sodium hydroxide solution", "Hydrochloric acid solution", "Calcium chloride solution"])],
  },

  // ============ QUESTION 2: MULTIPLE CHOICE (20 marks) ============
  {
    number: "2", sub_number: "2.1",
    text: "Consider the organic compound represented in the diagram (CH3-CH(CH3)-CH=CH2, drawn in full structural form). The compound is ... (A) saturated and branched. (B) unsaturated and branched. (C) saturated and straight-chained. (D) unsaturated and straight-chained.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B. The structure contains a C=C double bond (unsaturated) and a CH3 side chain (branched): 3-methylbut-1-ene.",
    marking_notes: "Memo: B.",
    steps: [F(2, "Which description of the compound is correct?", ["A: saturated and branched", "B: unsaturated and branched", "C: saturated and straight-chained", "D: unsaturated and straight-chained"], 1)],
    image_url: `${IMG}/2.1-compound.png`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "A structural isomer of butane is ... (A) propane. (B) 2-methylbutane. (C) 2-methylpropane. (D) 2,2-dimethylpropane.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "C. 2-methylpropane has molecular formula C4H10, the same as butane, but a branched structure.",
    marking_notes: "Memo: C.",
    steps: [F(2, "Which compound is a structural isomer of butane (C4H10)?", ["A: propane", "B: 2-methylbutane", "C: 2-methylpropane", "D: 2,2-dimethylpropane"], 2)],
  },
  {
    number: "2", sub_number: "2.3",
    text: "The alcohols form a homologous series. This means that alcohols have ... (A) similar chemical properties. (B) similar physical properties. (C) the same molecular formula. (D) the same structural formula.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "A. Members of a homologous series have the same functional group and therefore similar chemical properties.",
    marking_notes: "Memo: A.",
    steps: [F(2, "What does it mean that alcohols form a homologous series?", ["A: similar chemical properties", "B: similar physical properties", "C: the same molecular formula", "D: the same structural formula"], 0)],
  },
  {
    number: "2", sub_number: "2.4",
    text: "The energy distribution (Maxwell-Boltzmann) diagrams for particles in a fixed mass of gas at two different temperatures, T1 and T2, are shown (T2 curve is broader, with its peak lower and further right than T1). Which ONE is the correct interpretation as the temperature changes from T1 to T2? (A) Activation energy remains the same; number of effective collisions increases. (B) Activation energy decreases; number of effective collisions decreases. (C) Activation energy decreases; number of effective collisions increases. (D) Activation energy remains the same; number of effective collisions decreases.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "A. Temperature does not change the activation energy, but more particles have enough kinetic energy to react at the higher temperature, so effective collisions increase.",
    marking_notes: "Memo: A.",
    steps: [F(2, "Which interpretation is correct for T1 to T2?", ["A: EA remains the same; effective collisions increase", "B: EA decreases; effective collisions decrease", "C: EA decreases; effective collisions increase", "D: EA remains the same; effective collisions decrease"], 0)],
    image_url: `${IMG}/2.4-energy-distribution.png`,
  },
  {
    number: "2", sub_number: "2.5",
    text: "The expression for the equilibrium constant of a hypothetical reaction is KC = [D]²[C] / [A]³. Which ONE of the following equations for a reaction at equilibrium matches this expression? (A) 3A(s) ⇌ C(g) + 2D(g) (B) 3A(ℓ) ⇌ C(aq) + 2D(aq) (C) 3A(aq) + B(s) ⇌ C(g) + D2(g) (D) 3A(aq) + B(s) ⇌ C(aq) + 2D(aq)",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "D. Only aqueous and gaseous species appear in KC; solids (B(s)) and pure liquids do not. A(aq), C(aq) and D(aq) with coefficients 3, 1 and 2 match, and B(s) is correctly left out.",
    marking_notes: "Memo: D.",
    steps: [F(2, "Which equation matches KC = [D]²[C]/[A]³?", ["A: 3A(s) ⇌ C(g) + 2D(g)", "B: 3A(ℓ) ⇌ C(aq) + 2D(aq)", "C: 3A(aq) + B(s) ⇌ C(g) + D2(g)", "D: 3A(aq) + B(s) ⇌ C(aq) + 2D(aq)"], 3)],
  },
  {
    number: "2", sub_number: "2.6",
    text: "The reaction 2NO2(g) ⇌ N2O4(g), ΔH < 0, reaches equilibrium in a closed container. Which ONE of the following changes will INCREASE the yield of N2O4(g)? (A) Add a catalyst. (B) Remove NO2 gas from the container. (C) Increase the temperature of the system. (D) Decrease the temperature of the system.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "D. The forward reaction is exothermic (ΔH < 0), so decreasing the temperature favours the forward reaction and increases the yield of N2O4. Removing NO2 favours the reverse reaction, a higher temperature favours the endothermic reverse reaction, and a catalyst does not change the yield.",
    marking_notes: "Memo: D.",
    steps: [F(2, "Which change will increase the yield of N2O4(g)?", ["A: Add a catalyst", "B: Remove NO2 gas from the container", "C: Increase the temperature of the system", "D: Decrease the temperature of the system"], 3)],
  },
  {
    number: "2", sub_number: "2.7",
    text: "In a redox reaction, an oxidising agent is ... (A) reduced because it loses electrons. (B) reduced because it gains electrons. (C) oxidised because it loses electrons. (D) oxidised because it gains electrons.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "B. An oxidising agent accepts electrons, so it is itself reduced.",
    marking_notes: "Memo: B.",
    steps: [F(2, "What is an oxidising agent in a redox reaction?", ["A: reduced because it loses electrons", "B: reduced because it gains electrons", "C: oxidised because it loses electrons", "D: oxidised because it gains electrons"], 1)],
  },
  {
    number: "2", sub_number: "2.8",
    text: "In a galvanic (voltaic) cell, electrons move from the ... (A) anode to the cathode through the salt bridge. (B) cathode to the anode through the salt bridge. (C) anode to the cathode in the external circuit. (D) cathode to the anode in the external circuit.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "C. Electrons flow from the anode (where oxidation occurs) to the cathode through the external circuit; the salt bridge carries ions, not electrons.",
    marking_notes: "Memo: C.",
    steps: [F(2, "In which direction do electrons move in a galvanic cell?", ["A: anode to cathode through the salt bridge", "B: cathode to anode through the salt bridge", "C: anode to cathode in the external circuit", "D: cathode to anode in the external circuit"], 2)],
  },
  {
    number: "2", sub_number: "2.9",
    text: "During the extraction of aluminium from aluminium oxide, cryolite is added to ... (A) increase the yield of aluminium. (B) decrease the yield of aluminium. (C) increase the melting point of aluminium oxide. (D) decrease the melting point of aluminium oxide.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "D. Cryolite lowers the melting point of aluminium oxide, which saves energy during electrolysis.",
    marking_notes: "Memo: D.",
    steps: [F(2, "Why is cryolite added during the extraction of aluminium?", ["A: to increase the yield of aluminium", "B: to decrease the yield of aluminium", "C: to increase the melting point of aluminium oxide", "D: to decrease the melting point of aluminium oxide"], 3)],
  },
  {
    number: "2", sub_number: "2.10",
    text: "Which ONE of the following is a primary nutrient needed by plants? (A) N (B) C (C) Mg (D) Na",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "A. The primary plant nutrients are nitrogen (N), phosphorus (P) and potassium (K).",
    marking_notes: "Memo: A.",
    steps: [F(2, "Which element is a primary nutrient for plants?", ["A: N", "B: C", "C: Mg", "D: Na"], 0)],
  },

  // ============ QUESTION 3: ORGANIC COMPOUNDS (15 marks) ============
  {
    number: "3", sub_number: "3.1.1",
    text: "The letters A to F in the table represent six organic compounds: A = CH≡C-CH2-CH2-CH3; B = CH3CH2CH2CH(OH)CH3; C = CH2=C(CH3)-CH2-CH3; D = Pentanoic acid; E = the aldehyde CH3-CH(CH3)-CH2-CHO drawn in full structural form; F = CH3CH2-O-C(=O)-CH2CH3. Write down the letter that represents an alkyne.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "A. A contains a carbon-carbon triple bond (pent-1-yne).",
    marking_notes: "Memo: A.",
    steps: [S(1, "Which compound is an alkyne?", "A", ["B", "C", "E"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "(Table of compounds A to F as above.) Write down the letters of two compounds that are structural isomers.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "D and F. Pentanoic acid and ethyl propanoate both have molecular formula C5H10O2 but different functional groups.",
    marking_notes: "Memo: D & F (both required).",
    steps: [S(2, "Which TWO compounds are structural isomers of each other?", "D and F", ["A and C", "C and E", "B and D"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "(Table of compounds A to F as above.) Write down the letter of a compound containing a carboxyl group.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "D. Pentanoic acid contains the carboxyl group, -COOH.",
    marking_notes: "Memo: D.",
    steps: [S(1, "Which compound contains a carboxyl group?", "D", ["B", "E", "F"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.4",
    text: "(Table of compounds A to F as above.) Write down the letter of an aldehyde.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "E. E has a terminal -CHO group.",
    marking_notes: "Memo: E.",
    steps: [S(1, "Which compound is an aldehyde?", "E", ["B", "D", "F"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.5",
    text: "(Table of compounds A to F as above.) Write down the letter of an alcohol.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B. B (pentan-2-ol) has an -OH group on a carbon chain.",
    marking_notes: "Memo: B.",
    steps: [S(1, "Which compound is an alcohol?", "B", ["D", "E", "F"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "(Table of compounds A to F as above.) Write down the IUPAC name of compound C, CH2=C(CH3)-CH2-CH3.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-methylbut-1-ene.",
    marking_notes: "Memo: 2-methylbut-1-ene.",
    steps: [S(2, "What is the IUPAC name of compound C?", "2-methylbut-1-ene", ["3-methylbut-1-ene", "2-methylbut-2-ene", "2-ethylprop-1-ene"])],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "(Table of compounds A to F as above.) Write down the structural formula of compound D (pentanoic acid).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-CH2-CH2-CH2-COOH (full structural formula with a carboxyl group on a five-carbon straight chain).",
    marking_notes: "Memo: full structural formula of pentanoic acid (carboxyl group on C1 of a straight chain of 5 carbons).",
    steps: [S(2, "Which structure represents pentanoic acid?", "CH3-CH2-CH2-CH2-COOH", ["CH3-CH2-CH2-COO-CH3", "CH3-CH2-CH2-CH2-CH2-OH", "CH3-CH2-CH2-CH2-CHO"])],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Compound F (ethyl propanoate, an ester) is prepared in the laboratory. How can one quickly establish whether compound F is indeed being formed?",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "By its pleasant (fruity) odour.",
    marking_notes: "Memo: Pleasant odour.",
    steps: [S(1, "How can one quickly tell that the ester is forming?", "Smell the mixture for a pleasant odour", ["Observe a colour change to blue", "Test that the gas turns limewater milky", "Measure that the mixture boils below 0 °C"])],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Compound F is CH3CH2-O-C(=O)-CH2CH3. Write down the IUPAC name of the alcohol needed to prepare compound F.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Ethanol. The part of the ester attached to the oxygen (CH3CH2-) comes from the alcohol.",
    marking_notes: "Memo: Ethanol.",
    steps: [S(2, "Which alcohol is needed to prepare compound F?", "Ethanol", ["Propan-1-ol", "Methanol", "Propan-2-ol"])],
  },
  {
    number: "3", sub_number: "3.3.3",
    text: "Write down the IUPAC name of compound F, CH3CH2-O-C(=O)-CH2CH3.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Ethyl propanoate.",
    marking_notes: "Memo: Ethyl propanoate.",
    steps: [S(2, "What is the IUPAC name of compound F?", "Ethyl propanoate", ["Propyl ethanoate", "Ethyl ethanoate", "Methyl butanoate"])],
  },

  // ============ QUESTION 4: ALKANES (14 marks) ============
  {
    number: "4", sub_number: "4.1.1",
    text: "During a practical investigation the boiling points of the first six straight-chain alkanes were determined: methane CH4 -164 °C; ethane C2H6 -89 °C; propane C3H8 -42 °C; butane C4H10 -0,5 °C; pentane C5H12 36 °C; hexane C6H14 69 °C. Write down the most important use of the alkanes in the table.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Fuels.",
    marking_notes: "Memo: Fuels.",
    steps: [S(1, "What is the most important use of these alkanes?", "Fuels", ["Solvents for paint", "Preservatives", "Fertilisers"])],
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Write down the general formula of the alkanes.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "CnH2n+2.",
    marking_notes: "Memo: CnH2n+2.",
    steps: [S(1, "What is the general formula of the alkanes?", "CnH2n+2", ["CnH2n", "CnH2n-2", "CnH2n+1"])],
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "(Boiling-point table of the first six straight-chain alkanes as above.) For this investigation, write down the dependent variable.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Boiling point.",
    marking_notes: "Memo: Boiling point.",
    steps: [S(1, "Which is the dependent variable?", "Boiling point", ["Chain length", "Molecular formula", "Molecular mass"])],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "(Same table.) Write down the independent variable.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Chain length / molecular size / molecular mass (any of these is accepted).",
    marking_notes: "Memo: Chain length / Molecular size / Molecular mass.",
    steps: [S(1, "Which is the independent variable?", "Chain length / molecular size / molecular mass", ["Boiling point", "Temperature of the room", "Physical state at 25 °C"])],
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "(Same table.) Write down the conclusion that can be drawn from the above results.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Boiling point increases with increase in chain length / molecular size / molecular mass.",
    marking_notes: "Memo: 1 mark for the dependent and independent variables correctly identified; 1 mark for the relationship correctly stated.",
    steps: [
      S(1, "Which two variables does the conclusion relate?", "Boiling point and chain length (molecular size/mass)", ["Boiling point and the number of isomers", "Physical state and the temperature of the room", "Chain length and the general formula"]),
      S(1, "Which relationship between them is shown by the results?", "Boiling point increases as chain length increases", ["Boiling point decreases as chain length increases", "Boiling point stays the same as chain length increases", "Boiling point is unrelated to chain length"]),
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "(Same table.) Write down the NAME of an alkane that is a liquid at 25 °C.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "Pentane OR hexane (both melt below 25 °C and boil above 25 °C).",
    marking_notes: "Memo: Pentane OR hexane.",
    steps: [S(1, "Which alkane is a liquid at 25 °C?", "Pentane (or hexane)", ["Methane", "Ethane", "Propane"])],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Alkanes burn readily in oxygen. Write down a balanced equation, using molecular formulae, for the combustion of propane in excess oxygen.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C3H8 + 5O2 → 3CO2 + 4H2O",
    marking_notes: "Memo: C3H8 + 5O2 → 3CO2 + 4H2O (3 marks; the memo marks reactants, products and balancing). Step split is a reconstruction summing to 3.",
    steps: [
      S(1, "What are the products of complete combustion of propane in excess oxygen?", "CO2 and H2O", ["CO and H2O", "C and H2O", "CO2 and H2"]),
      S(1, "How many mol of CO2 and H2O form per mol of C3H8?", "3 mol CO2 and 4 mol H2O", ["3 mol CO2 and 8 mol H2O", "1 mol CO2 and 4 mol H2O", "4 mol CO2 and 3 mol H2O"]),
      S(1, "Which is the fully balanced equation?", "C3H8 + 5O2 → 3CO2 + 4H2O", ["C3H8 + 4O2 → 3CO2 + 4H2O", "C3H8 + 3O2 → 3CO2 + 4H2O", "C3H8 + 5O2 → 3CO2 + 8H2O"]),
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Will the boiling points of the structural isomers of hexane be HIGHER THAN, LOWER THAN or EQUAL TO that of hexane? Refer to MOLECULAR STRUCTURE, INTERMOLECULAR FORCES and ENERGY NEEDED to explain the answer.",
    marks: 4, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "Lower than. Structure: the isomers are more branched, more compact/spherical, with smaller surface areas over which intermolecular forces act. Intermolecular forces: weaker intermolecular forces. Energy: less energy is needed to overcome the intermolecular forces.",
    marking_notes: "Memo: 1 mark each for: lower than; structure (more branched/compact, smaller surface area); weaker intermolecular forces; less energy needed.",
    steps: [
      S(1, "How do the boiling points of the branched isomers compare with hexane?", "Lower than", ["Higher than", "Equal to", "Cannot be compared"]),
      S(1, "What is true about the structure of the isomers?", "More branched/compact with a smaller surface area for intermolecular forces", ["Longer chains with a larger surface area", "Larger molecular mass", "More polar bonds"]),
      S(1, "What is true about their intermolecular forces?", "Weaker intermolecular forces", ["Stronger intermolecular forces", "Hydrogen bonds form between molecules", "The same strength of forces"]),
      S(1, "What is true about the energy needed to boil them?", "Less energy is needed to overcome the intermolecular forces", ["More energy is needed to break the covalent bonds", "More energy is needed to overcome the forces", "No energy is needed"]),
    ],
  },

  // ============ QUESTION 5: ORGANIC REACTIONS (12 marks) ============
  {
    number: "5", sub_number: "5.1.1",
    text: "The flow diagram shows how three organic compounds can be prepared from 2-bromo-3-methylbutane: Reaction 1 gives Compound A, Reaction 2 gives Compound B, and Reaction 3 converts compound B to an alkene. Write down the homologous series to which 2-bromo-3-methylbutane belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Haloalkanes.",
    marking_notes: "Memo: Haloalkanes.",
    steps: [S(1, "To which homologous series does 2-bromo-3-methylbutane belong?", "Haloalkanes", ["Alkanes", "Alcohols", "Alkenes"])],
    image_url: `${IMG}/5-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Write down the structural formula of 2-bromo-3-methylbutane.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-CHBr-CH(CH3)-CH3 (full structural formula: Br on C2 and a CH3 branch on C3 of a four-carbon chain).",
    marking_notes: "Memo: full structural formula (2 marks).",
    steps: [S(2, "Which structure is 2-bromo-3-methylbutane?", "CH3-CHBr-CH(CH3)-CH3", ["CH3-CH2-CBr(CH3)-CH3", "CH3-CH2-CH(CH3)-CH2Br", "CH3-CHBr-CH2-CH2-CH3"])],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Reaction 2 takes place in the presence of a dilute sodium hydroxide solution. Write down the name of the type of reaction which takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Substitution (OR hydrolysis).",
    marking_notes: "Memo: Substitution OR hydrolysis.",
    steps: [S(1, "What type of reaction is Reaction 2?", "Substitution (hydrolysis)", ["Elimination", "Addition", "Cracking"])],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Write down the structural formula of compound B (formed in Reaction 2).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-CH(OH)-CH(CH3)-CH3 (3-methylbutan-2-ol): the Br is replaced by -OH.",
    marking_notes: "Memo: full structural formula of 3-methylbutan-2-ol (2 marks).",
    steps: [S(2, "Which structure is compound B?", "CH3-CH(OH)-CH(CH3)-CH3", ["CH3-CH=C(CH3)-CH3", "CH3-CH(OH)-CH2-CH2-CH3", "HOCH2-CH2-CH(CH3)-CH3"])],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Reaction 1 takes place in the presence of concentrated sodium hydroxide. Write down another reaction condition needed for this reaction.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Heat strongly.",
    marking_notes: "Memo: Heat strongly.",
    steps: [S(1, "Which other condition is needed for Reaction 1?", "Heat strongly", ["Cool the mixture in ice", "Add a catalyst of platinum", "Use ultraviolet light"])],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Write down the name of the type of reaction which takes place in Reaction 1.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Elimination (dehydrohalogenation / dehydrobromination).",
    marking_notes: "Memo: Elimination / dehydrohalogenation / dehydrobromination.",
    steps: [S(1, "What type of reaction is Reaction 1?", "Elimination (dehydrohalogenation)", ["Substitution (hydrolysis)", "Addition (hydrohalogenation)", "Esterification"])],
  },
  {
    number: "5", sub_number: "5.3.3",
    text: "Write down the structural formula of compound A, the major product formed in Reaction 1.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-CH=C(CH3)-CH3 (2-methylbut-2-ene), the more substituted alkene.",
    marking_notes: "Memo: full structural formula of 2-methylbut-2-ene (2 marks).",
    steps: [S(2, "Which structure is the major product A?", "CH3-CH=C(CH3)-CH3", ["CH2=CH-CH(CH3)-CH3", "CH2=C(CH3)-CH2-CH3", "CH3-CH2-CH(CH3)-CH3"])],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Reaction 3 takes place when compound B is heated in the presence of concentrated sulphuric acid. Write down the IUPAC name of the major product formed.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-methylbut-2-ene.",
    marking_notes: "Memo: 2-methylbut-2-ene.",
    steps: [S(2, "What is the IUPAC name of the major product?", "2-methylbut-2-ene", ["3-methylbut-1-ene", "2-methylbut-1-ene", "3-methylbutan-2-ol"])],
  },

  // ============ QUESTION 6: RATE OF REACTION (16 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "Calcium carbonate chips are added to an excess dilute hydrochloric acid solution in a flask placed on a balance (apparatus shown). The cotton wool plug prevents spillage but allows the gas formed to escape. CaCO3(s) + 2HCℓ(aq) → CaCℓ2(aq) + CO2(g) + H2O(ℓ). Write down the NAME of the gas that escapes through the cotton wool plug.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "Carbon dioxide.",
    marking_notes: "Memo: Carbon dioxide.",
    steps: [S(1, "Which gas escapes through the cotton wool plug?", "Carbon dioxide", ["Hydrogen", "Oxygen", "Chlorine"])],
    image_url: `${IMG}/6-apparatus.png`,
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "The loss in mass of the flask and its contents is recorded every 2 minutes (graph of loss in mass versus time shown; points at roughly (0;0), (2;2,1), (4;3,0), (6;3,1), (8;3,6), (10;3,8), (12;4,0), (14;4,0), (16;4,0)). From the graph, write down the coordinates of the point that represents results that were measured incorrectly.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "(6 ; 3,1). The curve should keep rising smoothly; at 6 minutes the value barely rises from the 4-minute value.",
    marking_notes: "Memo: (6 ; 3,1).",
    steps: [S(1, "Which point was measured incorrectly?", "(6 ; 3,1)", ["(2 ; 2,1)", "(8 ; 3,6)", "(4 ; 3,0)"])],
    image_url: `${IMG}/6.2-loss-in-mass-graph.png`,
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "(Graph as above.) How long (in minutes) does the reaction last?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "12 minutes. The loss in mass becomes constant (4,0 g) from 12 minutes onwards.",
    marking_notes: "Memo: 12 minutes.",
    steps: [S(1, "How long does the reaction last?", "12 minutes", ["16 minutes", "4 minutes", "10 minutes"])],
    image_url: `${IMG}/6.2-loss-in-mass-graph.png`,
  },
  {
    number: "6", sub_number: "6.2.3",
    text: "(Graph as above.) How long (in minutes) does it take 75% (three quarters) of the reaction to occur?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "4 minutes. The total loss in mass is 4,0 g; 75% of 4,0 g is 3,0 g, reached at 4 minutes.",
    marking_notes: "Memo: 4 minutes.",
    steps: [S(1, "At what time has 75% of the reaction occurred?", "4 minutes", ["8 minutes", "6 minutes", "3 minutes"])],
    image_url: `${IMG}/6.2-loss-in-mass-graph.png`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "The experiment is repeated using hydrochloric acid of a higher concentration. It is found that the rate of the reaction INCREASES. Use the collision theory to explain this observation.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "More particles per unit volume, so more effective collisions per unit time/second.",
    marking_notes: "Memo: 1 mark for more particles per unit volume; 1 mark for more effective collisions per unit time.",
    steps: [
      S(1, "What changes in the acid when its concentration is higher?", "More particles per unit volume", ["Particles have a higher average kinetic energy", "A lower activation energy", "A larger surface area"]),
      S(1, "What is the result for the collisions?", "More effective collisions per unit time", ["Each collision is more energetic", "Fewer but harder collisions per unit time", "Effective collisions are unchanged"]),
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "How would a higher concentration of hydrochloric acid affect the loss in mass per unit time? (INCREASES, DECREASES or REMAINS THE SAME)",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Increases.",
    marking_notes: "Memo: Increases.",
    steps: [S(1, "Effect on the loss in mass per unit time:", "Increases", ["Decreases", "Remains the same", "First increases then decreases"])],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "How would a higher concentration of hydrochloric acid affect the total loss in mass? (INCREASES, DECREASES or REMAINS THE SAME)",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Remains the same. The mass of CaCO3 (the limiting reactant) is unchanged, so the same mass of CO2 is formed.",
    marking_notes: "Memo: Remains the same.",
    steps: [S(1, "Effect on the total loss in mass:", "Remains the same", ["Increases", "Decreases", "Doubles"])],
  },
  {
    number: "6", sub_number: "6.4.3",
    text: "How would a higher concentration of hydrochloric acid affect the time for the reaction to reach completion? (INCREASES, DECREASES or REMAINS THE SAME)",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Decreases. The reaction is faster so it finishes sooner.",
    marking_notes: "Memo: Decreases.",
    steps: [S(1, "Effect on the time for the reaction to reach completion:", "Decreases", ["Increases", "Remains the same", "Cannot be predicted"])],
  },
  {
    number: "6", sub_number: "6.5",
    text: "Apart from concentration and temperature changes, write down TWO other changes that can be made to increase the rate of this reaction.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Add a catalyst; increase the surface area of the calcium carbonate (use powder / crush the chips).",
    marking_notes: "Memo: add a catalyst; increase the surface area of calcium carbonate (powder / crush chips). 1 mark each.",
    steps: [S(2, "Which TWO changes will increase the rate (apart from concentration and temperature)?", "Add a catalyst and crush the CaCO3 chips into powder", ["Add more water and use larger CaCO3 chips", "Use a larger flask and cool the mixture", "Decrease the pressure and stir less"])],
  },
  {
    number: "6", sub_number: "6.6",
    text: "Calculate the mass of calcium carbonate used when the reaction is completed (total loss in mass from the graph is 4,0 g). Assume that all the gas formed escaped from the flask. M(CO2) = 44 g·mol⁻¹, M(CaCO3) = 100 g·mol⁻¹.",
    marks: 5, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "n(CO2) = m/M = 4/44 = 0,09 mol; n(CaCO3) = n(CO2) = 0,09 mol; m(CaCO3) = nM = (0,09)(100) = 9 g.",
    marking_notes: "Memo: n = m/M (1); 4/44 (1); 0,09 mol (1, memo rounds, exact 0,0909); ratio n(CaCO3) = n(CO2) (1); m = nM x 100 giving 9 g (1). FLAG: the memo's 9 g comes from the rounded 0,09 mol (exact value 9,09 g).",
    steps: [
      S(1, "Which formula and values give the amount of CO2 lost?", "n = m/M = 4 / 44", ["n = m/M = 4 / 100", "n = m × M = 4 × 44", "n = V/Vm = 4 / 22,4"]),
      S(1, "What is n(CO2)?", "0,09 mol", ["0,04 mol", "0,18 mol", "176 mol"]),
      S(1, "What is the mole ratio of CaCO3 to CO2 in the equation?", "n(CaCO3) = n(CO2) (1 : 1)", ["n(CaCO3) = 2 n(CO2)", "n(CaCO3) = ½ n(CO2)", "n(CaCO3) = n(HCℓ)"]),
      S(1, "Which formula and values give the mass of CaCO3?", "m = nM = (0,09)(100)", ["m = n/M = 0,09/100", "m = nM = (0,09)(44)", "m = nM = (0,18)(100)"]),
      S(1, "What is the mass of CaCO3 used?", "9 g", ["4 g", "18 g", "3,96 g"]),
    ],
  },

  // ============ QUESTION 7: CHEMICAL EQUILIBRIUM (17 marks) ============
  {
    number: "7", sub_number: "7.1",
    text: "A hypothetical reaction is A(g) + 2B(g) ⇌ 2C(g). Initially 3 mol of A(g) and 6 mol of B(g) are mixed in a 5 dm³ sealed container. At equilibrium at 25 °C, 4 mol of B(g) is present. Define the term chemical equilibrium.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "The stage in a chemical reaction when the rate of the forward reaction equals the rate of the reverse reaction.",
    marking_notes: "Memo: the stage in a chemical reaction when the rate of forward reaction equals the rate of reverse reaction (2 marks).",
    steps: [
      S(1, "Chemical equilibrium is the stage in a reversible reaction ...", "in a chemical reaction (a reversible reaction in a closed system)", ["at which the reaction stops completely", "at which all reactants have been used up", "at which the concentrations of reactants and products are equal"]),
      S(1, "At this stage ...", "the rate of the forward reaction equals the rate of the reverse reaction", ["the forward reaction is faster than the reverse reaction", "the rate of the reverse reaction is zero", "the forward and reverse reactions have both stopped"]),
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "(Same reaction and data.) Show by calculation that the equilibrium concentration of C(g) is 0,4 mol·dm⁻³.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "n(B) reacted = 6 − 4 = 2 mol; n(C) formed = n(B) reacted = 2 mol (ratio B : C = 2 : 2); c(C) = n/V = 2/5 = 0,4 mol·dm⁻³.",
    marking_notes: "Memo: n(B) reacted = 2 mol (1); n(C) = 2 mol from the ratio (1); c = n/V = 2/5 = 0,4 mol·dm⁻³ (1).",
    steps: [
      S(1, "How many mol of B reacted?", "6 − 4 = 2 mol", ["6 + 4 = 10 mol", "4 mol", "3 mol"]),
      S(1, "How many mol of C formed (mole ratio B : C = 2 : 2)?", "2 mol", ["1 mol", "4 mol", "3 mol"]),
      S(1, "What is c(C) at equilibrium?", "c = n/V = 2/5 = 0,4 mol·dm⁻³", ["c = n/V = 2/2 = 1,0 mol·dm⁻³", "c = n/V = 4/5 = 0,8 mol·dm⁻³", "c = V/n = 5/2 = 2,5 mol·dm⁻³"]),
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "(Same reaction.) How will an increase in pressure, by decreasing the volume of the container, influence the amount of C(g) in the container at 25 °C? Write down INCREASES, DECREASES or REMAINS THE SAME. Explain the answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Increases. 3 mol (volumes) of gas on the left produce 2 mol (volumes) of gas on the right; the reaction that produces the smaller number of moles is favoured, so the forward reaction is favoured.",
    marking_notes: "Memo: Increases (1); 3 mol gas produces 2 mol gas, the reaction giving fewer moles is favoured (1); forward reaction is favoured (1).",
    steps: [
      S(1, "How does the amount of C(g) change?", "Increases", ["Decreases", "Remains the same", "Doubles exactly"]),
      S(1, "Which reasoning from the equation is correct?", "3 mol of gas (reactants) produce 2 mol of gas (product); the side with fewer moles is favoured at higher pressure", ["2 mol of gas produce 3 mol of gas; the side with more moles is favoured", "The reaction is exothermic so pressure favours the reverse reaction", "The number of moles of gas is the same on both sides"]),
      S(1, "Which reaction is favoured?", "The forward reaction", ["The reverse reaction", "Both reactions equally", "Neither reaction"]),
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "(Same reaction.) The initial number of moles of B(g) is now increased while the initial number of moles of A(g) remains constant at 3 mol at 25 °C (volume 5 dm³). Calculate the number of moles of B(g) that must be ADDED to the original amount (6 mol) so that the concentration of C(g) is 0,8 mol·dm⁻³ at equilibrium. The equilibrium constant (KC) for this reaction at 25 °C is 0,625.",
    marks: 9, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Let x = total initial n(B). [C] = 0,8 mol·dm⁻³ so n(C) = 4 mol; by the 1 : 2 : 2 ratio, n(A) reacted = 2 mol and n(B) reacted = 4 mol. At equilibrium n(A) = 3 − 2 = 1 mol ([A] = 0,2 mol·dm⁻³), n(B) = x − 4 ([B] = (x − 4)/5). KC = [C]²/([A][B]²): 0,625 = (0,8)²/((0,2)((x − 4)/5)²) ⇒ x = 15,3 mol. n(B) added = 15,3 − 6 = 9,3 mol (9,31 mol).",
    marking_notes: "Memo Option 1: KC expression; ratio; divide by 5; substitution; x = 15,3 mol; added = 9,3 mol (wrong KC expression: max 6/9; no KC expression with correct substitution: max 8/9). Options 2/3 (x added to 6 mol or to 4 mol) give 9,31 mol. Step split is a reconstruction summing to 9.",
    steps: [
      S(1, "Which is the correct KC expression for A(g) + 2B(g) ⇌ 2C(g)?", "KC = [C]² / ([A][B]²)", ["KC = [C] / ([A][B])", "KC = ([A][B]²) / [C]²", "KC = [C]² / ([A][B])"]),
      S(1, "What mole ratio A : B : C do the changes follow?", "1 : 2 : 2", ["1 : 1 : 1", "1 : 2 : 1", "2 : 1 : 2"]),
      S(1, "What is n(C) at equilibrium if [C] = 0,8 mol·dm⁻³ in 5 dm³?", "4 mol", ["0,16 mol", "0,8 mol", "2 mol"]),
      S(1, "What is n(A) at equilibrium (n(C) formed = 4 mol, A : C = 1 : 2, starting with 3 mol)?", "3 − 2 = 1 mol", ["3 − 4 = −1 mol", "3 − 1 = 2 mol", "3 + 2 = 5 mol"]),
      S(1, "If x is the total initial n(B), what is n(B) at equilibrium?", "x − 4 mol", ["x − 2 mol", "x + 4 mol", "x − 8 mol"]),
      S(1, "What are [A] and [B] at equilibrium?", "[A] = 1/5 = 0,2 mol·dm⁻³ and [B] = (x − 4)/5 mol·dm⁻³", ["[A] = 1 mol·dm⁻³ and [B] = (x − 4) mol·dm⁻³", "[A] = 0,2 mol·dm⁻³ and [B] = (x − 4) mol·dm⁻³", "[A] = 5 mol·dm⁻³ and [B] = (x − 4)/5 mol·dm⁻³"]),
      S(1, "Which substitution into KC is correct?", "0,625 = (0,8)² / ((0,2)((x − 4)/5)²)", ["0,625 = (0,8) / ((0,2)((x − 4)/5))", "0,625 = (0,2)((x − 4)/5)² / (0,8)²", "0,625 = (4)² / ((1)(x − 4)²)"]),
      S(1, "What is the total initial amount of B, x?", "15,3 mol", ["9,3 mol", "7,4 mol", "11,3 mol"]),
      S(1, "How many mol of B must be ADDED to the original 6 mol?", "9,3 mol (15,3 − 6)", ["15,3 mol", "4 mol", "5,3 mol"]),
    ],
  },

  // ============ QUESTION 8: ELECTROCHEMISTRY (17 marks) ============
  {
    number: "8", sub_number: "8.1.1",
    text: "A strip of aluminium is placed in a beaker containing a blue solution of a copper(II) salt (a thermometer is in the solution). After a while the solution becomes colourless. How would the reading on the thermometer change as the reaction proceeds? Write down INCREASES, DECREASES or REMAINS THE SAME. Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Increases. The reaction is exothermic: energy (heat) is released, ΔH < 0.",
    marking_notes: "Memo: Increases (1); the reaction is exothermic / energy (heat) is released / ΔH < 0 (1).",
    steps: [
      S(1, "How does the thermometer reading change?", "Increases", ["Decreases", "Remains the same", "Falls then rises"]),
      S(1, "Why?", "The reaction is exothermic (heat is released)", ["The reaction is endothermic (heat is absorbed)", "The copper metal formed is a good conductor", "Water is being formed"]),
    ],
    image_url: `${IMG}/8.1-beaker.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Refer to the reducing ability of aluminium to explain why the solution becomes colourless.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Aluminium is a stronger reducing agent than copper and will reduce the copper(II) ions to copper, so the blue Cu²⁺ ions are removed from the solution.",
    marking_notes: "Memo: aluminium is a (stronger) reducing agent than copper (1); it will reduce the copper(II) ions to copper (1).",
    steps: [
      S(1, "How does the reducing ability of Al compare with that of Cu?", "Al is a stronger reducing agent than Cu", ["Al is a weaker reducing agent than Cu", "Al is a stronger oxidising agent than Cu", "Al and Cu have equal reducing ability"]),
      S(1, "What happens to the blue ions?", "Al reduces the Cu²⁺ ions to Cu, so the blue colour disappears", ["Al oxidises the Cu²⁺ ions to Cu³⁺", "Cu reduces the Al³⁺ ions to Al", "Al dissolves and neutralises the Cu²⁺ ions"]),
    ],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "Write down the balanced net IONIC equation for the reaction that takes place when aluminium is placed in the copper(II) salt solution.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "2Aℓ(s) + 3Cu²⁺(aq) → 2Aℓ³⁺(aq) + 3Cu(s)",
    marking_notes: "Memo: 2Aℓ(s) + 3Cu²⁺(aq) → 2Aℓ³⁺(aq) + 3Cu(s) (3 marks: reactants, products, balancing). Step split is a reconstruction summing to 3.",
    steps: [
      S(1, "Which are the reactants?", "Aℓ(s) and Cu²⁺(aq)", ["Aℓ³⁺(aq) and Cu(s)", "Aℓ(s) and Cu(s)", "Aℓ(s) and SO4²⁻(aq)"]),
      S(1, "Which are the products?", "Aℓ³⁺(aq) and Cu(s)", ["Aℓ²⁺(aq) and Cu(s)", "Aℓ(s) and Cu²⁺(aq)", "Aℓ³⁺(aq) and Cu⁺(aq)"]),
      S(1, "Which is the fully balanced equation?", "2Aℓ + 3Cu²⁺ → 2Aℓ³⁺ + 3Cu", ["Aℓ + Cu²⁺ → Aℓ³⁺ + Cu", "3Aℓ + 2Cu²⁺ → 3Aℓ³⁺ + 2Cu", "2Aℓ + 3Cu²⁺ → 2Aℓ³⁺ + 3Cu²⁺"]),
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "The electrochemical cell shown (Cu electrode in Cu²⁺(aq), Aℓ electrode in Aℓ³⁺(aq), salt bridge and voltmeter) functions at standard conditions. Which electrode (Cu or Aℓ) is the anode?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Aℓ. Aluminium is the stronger reducing agent and is oxidised at the anode.",
    marking_notes: "Memo: Aℓ / aluminium.",
    steps: [S(1, "Which electrode is the anode?", "Aℓ", ["Cu", "Both electrodes", "Neither electrode"])],
    image_url: `${IMG}/8.2-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "(Same cell.) Write down the cell notation for this cell.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Aℓ(s) | Aℓ³⁺(1 mol·dm⁻³) || Cu²⁺(1 mol·dm⁻³) | Cu(s)",
    marking_notes: "Memo: Aℓ(s) | Aℓ³⁺(1 mol·dm⁻³) || Cu²⁺(1 mol·dm⁻³) | Cu(s) (3 marks: anode half-cell on the left, salt bridge and cathode half-cell on the right, concentrations). Step split is a reconstruction summing to 3.",
    steps: [
      S(1, "Which half-cell is written on the left (anode)?", "Aℓ(s) | Aℓ³⁺", ["Cu(s) | Cu²⁺", "Aℓ³⁺ | Aℓ(s)", "Cu²⁺ | Cu(s)"]),
      S(1, "How are the two half-cells separated and the cathode written?", "|| Cu²⁺ | Cu(s) (double line for the salt bridge)", ["| Cu(s) | Cu²⁺ (single line)", "|| Cu(s) | Cu²⁺", "|| Aℓ³⁺ | Aℓ(s)"]),
      S(1, "What concentration is shown for each ion at standard conditions?", "1 mol·dm⁻³", ["0,1 mol·dm⁻³", "2 mol·dm⁻³", "No concentrations are given"]),
    ],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "(Same cell.) Calculate the emf of this cell. (E°(Cu²⁺/Cu) = +0,34 V; E°(Aℓ³⁺/Aℓ) = −1,66 V.)",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°cathode − E°anode = 0,34 − (−1,66) = 2,00 V.",
    marking_notes: "Memo: E°cell = E°cathode − E°anode (1); 0,34 (1); −1,66 (1); 2,00 V (1). Step split is a reconstruction summing to 4.",
    steps: [
      S(1, "Which formula is correct?", "E°cell = E°cathode − E°anode", ["E°cell = E°anode − E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°oxidation − E°reduction"]),
      S(1, "What is E° of the cathode (Cu)?", "+0,34 V", ["−0,34 V", "+1,66 V", "−1,66 V"]),
      S(1, "What is E° of the anode (Aℓ)?", "−1,66 V", ["+1,66 V", "+0,34 V", "−0,34 V"]),
      S(1, "What is the emf?", "2,00 V", ["−2,00 V", "1,32 V", "1,66 V"]),
    ],
    image_url: `${IMG}/8.2-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "The salt bridge is now removed. What will the reading on the voltmeter be? Give a reason for your answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "0 V. The circuit is open (incomplete).",
    marking_notes: "Memo: 0 (V) / zero (1); the circuit is open (1).",
    steps: [
      S(1, "What is the voltmeter reading?", "0 V", ["2,00 V", "1,00 V", "−2,00 V"]),
      S(1, "Why?", "The circuit is open (no ion flow to complete it)", ["The electrodes are now identical", "The reaction reaches equilibrium immediately", "The aluminium is no longer reactive"]),
    ],
    image_url: `${IMG}/8.2-galvanic-cell.png`,
  },

  // ============ QUESTION 9: ELECTROPLATING (11 marks) ============
  {
    number: "9", sub_number: "9.1",
    text: "The simplified diagram shows an electrolytic cell used at an electroplating company to coat iron spoons with silver (spoons connected to a DC power source; electrode Y; electrolyte X). Write down the energy conversion that takes place in this cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Electrical energy to chemical energy.",
    marking_notes: "Memo: Electrical energy to chemical energy.",
    steps: [S(1, "Which energy conversion takes place?", "Electrical energy to chemical energy", ["Chemical energy to electrical energy", "Heat energy to electrical energy", "Chemical energy to light energy"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "(Same cell.) Direct current (DC) is used in this process. Give a reason why alternating current (AC) is NOT used.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "The polarity of the electrodes must remain constant during plating.",
    marking_notes: "Memo: the polarity of the electrodes must remain constant during plating.",
    steps: [S(1, "Why is AC not used?", "The polarity of the electrodes must remain constant", ["AC does not carry enough current", "AC would heat the electrolyte to boiling", "AC cannot pass through an electrolyte"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.3",
    text: "(Same cell.) Which type of reaction (OXIDATION or REDUCTION) takes place at the spoons?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Reduction. The spoons are the cathode, where Ag⁺ ions are reduced to Ag.",
    marking_notes: "Memo: Reduction.",
    steps: [S(1, "Which type of reaction takes place at the spoons?", "Reduction", ["Oxidation", "Neutralisation", "Both oxidation and reduction"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.4.1",
    text: "(Same cell.) Write down the equation for the half-reaction that takes place at electrode Y.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Ag → Ag⁺ + e⁻ (electrode Y is the silver anode, where oxidation takes place).",
    marking_notes: "Memo: Ag → Ag⁺ + e⁻ (2 marks).",
    steps: [S(2, "Which half-reaction takes place at electrode Y?", "Ag → Ag⁺ + e⁻", ["Ag⁺ + e⁻ → Ag", "Fe → Fe²⁺ + 2e⁻", "Ag → Ag²⁺ + 2e⁻"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.4.2",
    text: "(Same cell.) Write down the NAME or FORMULA of electrolyte X.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Silver nitrate (AgNO3). (The memo also accepts silver ethanoate.)",
    marking_notes: "Memo: silver nitrate / AgNO3 OR silver ethanoate / CH3COOAg.",
    steps: [S(1, "Which electrolyte X is used?", "Silver nitrate, AgNO3", ["Iron(II) sulphate, FeSO4", "Copper(II) sulphate, CuSO4", "Sodium chloride, NaCℓ"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.5",
    text: "(Same cell.) Give a reason why the concentration of electrolyte X remains constant during electroplating.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "The rate of oxidation (at the anode) is equal to the rate of reduction (at the cathode), so Ag⁺ ions are replaced as fast as they are removed.",
    marking_notes: "Memo: rate of oxidation is equal to the rate of reduction (2 marks).",
    steps: [S(2, "Why does the concentration of X stay constant?", "The rate of oxidation equals the rate of reduction", ["The electrolyte is not involved in any reaction", "Water is added continuously", "The iron spoons dissolve to replace the ions"])],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.6",
    text: "(Same cell.) Apart from the income generated, write down ONE major reason why the company electroplates the spoons.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Protection (protects the iron from rusting/corrosion) OR appearance (improves the appearance of the spoons).",
    marking_notes: "Memo: protection from rusting/corrosion OR improved appearance.",
    steps: [S(1, "Which is a major reason for electroplating the spoons?", "To protect the iron from rusting/corrosion (or improve appearance)", ["To increase the mass of the spoons", "To make the spoons magnetic", "To lower the melting point of iron"])],
  },
  {
    number: "9", sub_number: "9.7",
    text: "Write down the TWO major expenses for the company during the process.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "The cost of electricity and the cost of silver.",
    marking_notes: "Memo: cost of electricity; cost of silver (1 mark each).",
    steps: [S(2, "Which are the two major expenses?", "Cost of electricity and cost of silver", ["Cost of iron and cost of water", "Cost of the DC power source and cost of the beaker", "Cost of nitric acid and cost of AC electricity"])],
  },

  // ============ QUESTION 10: ALKALINE CELL (11 marks) ============
  {
    number: "10", sub_number: "10.1",
    text: "The following half-reactions take place when a non-rechargeable alkaline cell is in use: (1) Zn(s) + 2OH⁻(aq) → ZnO(s) + H2O(ℓ) + 2e⁻; (2) MnO2(s) + 2H2O(ℓ) + 2e⁻ → Mn(OH)2(s) + 2OH⁻(aq). Write down the general name used for non-rechargeable cells.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Primary cells.",
    marking_notes: "Memo: Primary (cells).",
    steps: [S(1, "What is the general name for non-rechargeable cells?", "Primary cells", ["Secondary cells", "Fuel cells", "Electrolytic cells"])],
  },
  {
    number: "10", sub_number: "10.2",
    text: "(Same half-reactions.) Which ONE of the above equations (1 or 2) represents the half-reaction that takes place at the cathode? Give a reason for your answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Equation 2. Reduction takes place at the cathode (MnO2 gains electrons).",
    marking_notes: "Memo: equation 2 (1); reduction takes place at the cathode (1).",
    steps: [
      S(1, "Which equation represents the cathode half-reaction?", "Equation 2", ["Equation 1", "Both equations", "Neither equation"]),
      S(1, "Why?", "Reduction (gain of electrons) takes place at the cathode", ["Oxidation (loss of electrons) takes place at the cathode", "The cathode is where Zn is formed", "The cathode is the negative terminal of an electrolytic cell"]),
    ],
  },
  {
    number: "10", sub_number: "10.3",
    text: "Give a reason why the cell 'dies' after delivering current for a while.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "The cell reaction reaches equilibrium (any ONE of: the cell reaction reaches equilibrium; the rates of the forward and reverse reactions become equal; substances reach their equilibrium concentrations).",
    marking_notes: "Memo: any ONE of three equivalent statements about the cell reaction reaching equilibrium.",
    steps: [S(1, "Why does the cell 'die'?", "The cell reaction reaches equilibrium", ["The emf of the cell becomes infinite", "The electrodes are fully oxidised and cannot be reduced again", "The salt bridge dries out"])],
  },
  {
    number: "10", sub_number: "10.4.1",
    text: "The emf of the alkaline cell is 1,5 V. The maximum electrical work that can be done by this cell is 3 × 10⁴ J. Calculate the cell capacity of this cell in A·h.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "W = qV ⇒ 3 × 10⁴ = q(1,5) ⇒ q = 2 × 10⁴ C. Cell capacity = (2 × 10⁴)/3600 = 5,56 A·h.",
    marking_notes: "Memo: W = qV (1); substitution 3 × 10⁴ = q(1,5) (1); q = 2 × 10⁴ C (1); divide by 3600 giving 5,56 A·h (1). Step split is a reconstruction summing to 4.",
    steps: [
      S(1, "Which formula links work, charge and potential difference?", "W = qV", ["W = q/V", "W = qΔt", "W = V/q"]),
      S(1, "Which substitution is correct?", "3 × 10⁴ = q(1,5)", ["3 × 10⁴ = q/(1,5)", "q = 3 × 10⁴ × 1,5", "1,5 = q(3 × 10⁴)"]),
      S(1, "What is the charge q?", "2 × 10⁴ C", ["4,5 × 10⁴ C", "5 × 10⁻⁵ C", "2 × 10⁴ A·h"]),
      S(1, "What is the cell capacity in A·h?", "(2 × 10⁴)/3600 = 5,56 A·h", ["(2 × 10⁴) × 3600 = 7,2 × 10⁷ A·h", "(2 × 10⁴)/60 = 333 A·h", "(2 × 10⁴)/1000 = 20 A·h"]),
    ],
  },
  {
    number: "10", sub_number: "10.4.2",
    text: "(Same cell: q = 2 × 10⁴ C, capacity 5,56 A·h.) Calculate the maximum constant current that this cell can deliver for 20 hours.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "q = IΔt ⇒ 2 × 10⁴ = I(20)(3600) ⇒ I = 0,28 A. (Option 2: 5,56 = I(20) ⇒ I = 0,28 A.)",
    marking_notes: "Memo: q = IΔt (1); substitution 2 × 10⁴ = I(20)(3600) or 5,56 = I(20) (1); I = 0,28 A (1). Step split is a reconstruction summing to 3.",
    steps: [
      S(1, "Which formula is correct?", "q = IΔt", ["q = I/Δt", "q = I + Δt", "I = qΔt"]),
      S(1, "Which substitution is correct?", "2 × 10⁴ = I(20)(3600)", ["2 × 10⁴ = I(20)", "2 × 10⁴ = I/(20 × 3600)", "5,56 = I(20)(3600)"]),
      S(1, "What is the current?", "0,28 A", ["278 A", "0,0046 A", "1,11 × 10³ A"]),
    ],
  },

  // ============ QUESTION 11: FERTILISER INDUSTRY (12 marks) ============
  {
    number: "11", sub_number: "11.1.1",
    text: "The flow diagram represents processes used in the fertiliser industry: Air → (Process X) → Nitrogen; Nitrogen + Hydrogen → (Process Y) → Ammonia; Process Z → Acid R; Ammonia + Acid R → Ammonium sulphate. Write down the name of industrial process X.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Fractional distillation (of liquid air).",
    marking_notes: "Memo: Fractional distillation (of liquid air).",
    steps: [S(1, "What is industrial process X (air to nitrogen)?", "Fractional distillation of liquid air", ["Haber process", "Contact process", "Ostwald process"])],
    image_url: `${IMG}/11-fertiliser-flow.png`,
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "(Same flow diagram.) Write down a balanced equation for process Y.",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "N2 + 3H2 ⇌ 2NH3",
    marking_notes: "Memo: N2 + 3H2 ⇌ 2NH3 (3 marks: reactants, product, balancing). Step split is a reconstruction summing to 3.",
    steps: [
      S(1, "Which are the reactants and product of the Haber process?", "N2 and H2 form NH3", ["N2 and O2 form NO", "NH3 and O2 form NO", "N2 and H2 form N2H4"]),
      S(1, "Which type of arrow should be used?", "Reversible arrow ⇌", ["Single arrow →", "Double arrow with a catalyst on top only", "No arrow is needed"]),
      S(1, "Which is the balanced equation?", "N2 + 3H2 ⇌ 2NH3", ["N2 + H2 ⇌ NH3", "N2 + 2H2 ⇌ 2NH3", "2N2 + 3H2 ⇌ 2NH3"]),
    ],
    image_url: `${IMG}/11-fertiliser-flow.png`,
  },
  {
    number: "11", sub_number: "11.1.3",
    text: "(Same flow diagram.) Write down the name of industrial process Z (which produces acid R, sulphuric acid).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Contact (process).",
    marking_notes: "Memo: Contact (process).",
    steps: [S(1, "What is industrial process Z?", "Contact process", ["Haber process", "Ostwald process", "Fractional distillation"])],
    image_url: `${IMG}/11-fertiliser-flow.png`,
  },
  {
    number: "11", sub_number: "11.1.4",
    text: "(Same flow diagram.) Write down a balanced equation for the preparation of ammonium sulphate using acid R.",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "H2SO4 + 2NH3 → (NH4)2SO4",
    marking_notes: "Memo: H2SO4 + 2NH3 → (NH4)2SO4 (3 marks: reactants, product, balancing). Step split is a reconstruction summing to 3.",
    steps: [
      S(1, "Which are the reactants?", "H2SO4 and NH3", ["HNO3 and NH3", "H2SO4 and N2", "HCℓ and NH3"]),
      S(1, "What is the formula of ammonium sulphate?", "(NH4)2SO4", ["NH4SO4", "(NH4)2SO3", "NH4(SO4)2"]),
      S(1, "Which is the balanced equation?", "H2SO4 + 2NH3 → (NH4)2SO4", ["H2SO4 + NH3 → NH4SO4", "H2SO4 + 2NH3 → (NH4)2SO4 + H2O", "2H2SO4 + NH3 → (NH4)2SO4"]),
    ],
    image_url: `${IMG}/11-fertiliser-flow.png`,
  },
  {
    number: "11", sub_number: "11.1.5",
    text: "(Same flow diagram.) Write down the name of the type of reaction taking place in QUESTION 11.1.4.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Neutralisation (acid-base reaction).",
    marking_notes: "Memo: Neutralisation / acid-base reaction.",
    steps: [S(1, "What type of reaction forms ammonium sulphate from sulphuric acid and ammonia?", "Neutralisation (acid-base)", ["Redox", "Precipitation", "Combustion"])],
  },
  {
    number: "11", sub_number: "11.2.1",
    text: "Ammonium nitrate is one of the most common compounds used as fertiliser. Write down the NAME or FORMULA of the acid needed to prepare ammonium nitrate from ammonia.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Nitric acid, HNO3.",
    marking_notes: "Memo: Nitric acid / HNO3.",
    steps: [S(1, "Which acid is needed to make ammonium nitrate from ammonia?", "Nitric acid, HNO3", ["Sulphuric acid, H2SO4", "Hydrochloric acid, HCℓ", "Phosphoric acid, H3PO4"])],
  },
  {
    number: "11", sub_number: "11.2.2",
    text: "Write down TWO properties of ammonium nitrate that make it suitable for use as a fertiliser.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Comprehension",
    model_answer: "It contains a high percentage of nitrogen (a primary nutrient) and it is highly soluble (so plants can absorb it).",
    marking_notes: "Memo: contains (a high percentage of) nitrogen / primary nutrient; high solubility (1 mark each).",
    steps: [S(2, "Which TWO properties make ammonium nitrate a suitable fertiliser?", "A high nitrogen content and high solubility in water", ["It is insoluble in water and contains potassium", "It is flammable and has a low nitrogen content", "It is basic and contains phosphorus"])],
  },
];
