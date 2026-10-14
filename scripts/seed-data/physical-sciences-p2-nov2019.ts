// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2019,
// National (English).
// Source: single combined PDF (question paper + data sheets + bilingual
// marking guidelines) from stanmorephysics.com. Pages 1-14 = question paper
// (cover page confirms "PHYSICAL SCIENCES: CHEMISTRY (P2)", "NOVEMBER 2019",
// MARKS 150, TIME 3 hours), pages 15-18 = data sheets, pages 19-38 = the memo
// (cover page 19, then content numbered 2-20). The memo's question numbers and
// per-question totals (20, 16, 12, 13, 18, 22, 17, 12, 8, 12 = 150) match the
// question paper exactly; no stray pages.
//
// Paper structure: TEN compulsory questions, 150 marks, 3 hours. All 150 marks
// are included here.
//
// Every question is stepped multiple choice (no marking_points): MCQ, name /
// identify items, definitions, explanations, structures and sketches all
// become one step per memo mark point with four candidate options.
//
// Topic mapping notes / FLAGS:
// - Q1.10 (Ostwald catalyst), Q10 (ammonium fertiliser flow diagram, NPK
//   ratio) use the "chemical-industry" topic (older-syllabus content).
// - FLAG: Q5.1 (exothermic/endothermic from dH) has no dedicated energy-
//   changes topic here; mapped to "rate-of-reaction" as the closest.
// - FLAG: Q1.4 (Ea vs dH pairing) mapped to "rate-of-reaction".
// - FLAG: Q5.3 is a stoichiometry calculation inside the rate question; mapped
//   to "stoichiometry".
//
// Odd memo points faithfully transcribed (not silently fixed):
// - Q6.2.1: the memo gives 12,24 (mole route, accepted range 11,85-12,66) and
//   12,15 (concentration route, 0,4607 mol/dm3 initial). The steps use the
//   mole route (12,24).
// - Q6.4.2: the memo's own working gives 6,225 % / 93,63 % (mol route) and
//   6,228 % / 93,77 % (conc. route), both matching the 827 C row; the step
//   quotes 6,22 % CO2.
// - Q7.3.2: memo shows 1,596 g / 1,595 g (1,60 g); the final option states
//   1,60 g.
// - Q7.3.1 memo accepts pH range 1,036-1,05; the final option is 1,04.
// - Q5.2: memo accepts a negative sign (-0,06 g/s); the app option is 0,06.
// - Q8.3: memo mark split is not itemised; the 5 steps below (formula,
//   cathode value, substitution, E(anode), identification) are the author's
//   reconstruction of the memo's 5 marks.
//
// Diagrams cropped from page renders (public/question-images/chemistry-2019-p2):
// the 1.2 polymer options, the 2.2 ketone, the Q4 flow diagram, the Q5 graph,
// the Q8 cell, the Q10 flow diagram and fertiliser bags. The 2.3 condensed
// formula is written in the question text. The Q3.4 syringe sketch is
// decorative (the question is answerable from the text) and was not cropped.

import type { MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2019-p2";

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
  year: 2019,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2020/04/Physical-Sciences-P2-Nov-2019-and-Memo.pdf" as string | null,
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
  steps: MarkingPointStep[];
  image_url?: string;
}

// Build one step: the correct option is inserted at index `pos` among the
// three wrong options.
function st(marks: number, description: string, correct: string, wrongs: [string, string, string], pos: number): MarkingPointStep {
  const options = [...wrongs];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

// Lettered MCQ item: options are given in A-D order; `ans` is the memo letter.
function mcq(description: string, opts: [string, string, string, string], ans: "A" | "B" | "C" | "D"): MarkingPointStep {
  return {
    marks: 2,
    description,
    options: opts.map((o, i) => `${"ABCD"[i]}: ${o}`),
    correctIndex: "ABCD".indexOf(ans),
  };
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE CHOICE (20 marks) ============
  {
    number: "1", sub_number: "1.1",
    text: "Which ONE of the following compounds has the HIGHEST vapour pressure? (A) HCOOH (B) CH3CHO (C) CH3CH2OH (D) CH3CH2CH3",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "D — CH3CH2CH3 (propane). It has only weak London forces, the weakest intermolecular forces of the four, so it evaporates most easily and has the highest vapour pressure.",
    marking_notes: "Accept only 'D'.",
    steps: [mcq("Compound with the highest vapour pressure", ["HCOOH", "CH3CHO", "CH3CH2OH", "CH3CH2CH3"], "D")],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Which ONE of the formulae in the diagram represents the product of a POLYMERISATION reaction? (A) ethanol structure (B) ethanal structure (C) the repeating unit -[CH2-CH2]n- (D) ethyl ethanoate structure",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "C — the repeating unit with subscript n is poly(ethene), the product of addition polymerisation.",
    marking_notes: "Accept only 'C'.",
    steps: [mcq("Product of a polymerisation reaction", ["CH3CH2OH (ethanol)", "CH3CHO (ethanal)", "-(CH2-CH2)n- (repeating unit)", "CH3COOCH2CH3 (ester)"], "C")],
    image_url: `${IMG}/1.2-polymerisation-options.png`,
  },
  {
    number: "1", sub_number: "1.3",
    text: "Which ONE of the following combinations are BOTH UNSATURATED HYDROCARBONS? (A) Ethane and ethene (B) Ethene and ethyne (C) Ethane and ethanol (D) Ethanoic acid and ethene",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B — ethene (C=C) and ethyne (C≡C) are both hydrocarbons with multiple bonds. Ethane is saturated; ethanol and ethanoic acid are not hydrocarbons.",
    marking_notes: "Accept only 'B'.",
    steps: [mcq("Both unsaturated hydrocarbons", ["Ethane and ethene", "Ethene and ethyne", "Ethane and ethanol", "Ethanoic acid and ethene"], "B")],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Which ONE of the following sets of values for activation energy (Ea) and heat of reaction (ΔH) is possible for a reaction? (A) Ea = 100 kJ·mol⁻¹, ΔH = +100 kJ·mol⁻¹ (B) Ea = 50, ΔH = +100 (C) Ea = 50, ΔH = +50 (D) Ea = 100, ΔH = -50",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "D — Ea = 100 kJ·mol⁻¹ and ΔH = -50 kJ·mol⁻¹. For an endothermic reaction (positive ΔH) the activation energy must be greater than ΔH, which rules out A (Ea = ΔH), B (Ea < ΔH) and C (Ea = ΔH); an exothermic reaction (negative ΔH) can have any positive Ea.",
    marking_notes: "Accept only 'D'.",
    steps: [mcq("Possible Ea and ΔH pair", ["Ea = 100, ΔH = +100 kJ·mol⁻¹", "Ea = 50, ΔH = +100 kJ·mol⁻¹", "Ea = 50, ΔH = +50 kJ·mol⁻¹", "Ea = 100, ΔH = -50 kJ·mol⁻¹"], "D")],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Consider the balanced equation for a system at equilibrium: 2SO2(g) + O2(g) ⇌ 2SO3(g). How will the addition of a catalyst to the equilibrium mixture affect the YIELD and REACTION RATE? (A) Yield increases, rate increases (B) Yield remains the same, rate remains the same (C) Yield remains the same, rate increases (D) Yield decreases, rate increases",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "C — a catalyst speeds up the forward and reverse reactions equally, so the rate increases but the equilibrium position (yield) is unchanged.",
    marking_notes: "Accept only 'C'.",
    steps: [mcq("Effect of a catalyst on yield and rate", ["Yield increases; rate increases", "Yield remains the same; rate remains the same", "Yield remains the same; rate increases", "Yield decreases; rate increases"], "C")],
  },
  {
    number: "1", sub_number: "1.6",
    text: "A hypothetical reaction reaches equilibrium at a certain temperature in a closed container: A(g) + 2B(g) ⇌ 3C(s), ΔH < 0. Which ONE of the following changes will result in an INCREASE in the equilibrium constant, Kc? (A) Increase in temperature (B) Decrease in temperature (C) Increase in pressure at constant temperature (D) Decrease in pressure at constant temperature",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "B — decrease in temperature. Kc depends only on temperature. The forward reaction is exothermic (ΔH < 0), so lowering the temperature favours the forward reaction and increases Kc. Pressure changes do not change Kc.",
    marking_notes: "Accept only 'B'.",
    steps: [mcq("Change that increases Kc", ["Increase in temperature", "Decrease in temperature", "Increase in pressure at constant temperature", "Decrease in pressure at constant temperature"], "B")],
  },
  {
    number: "1", sub_number: "1.7",
    text: "A hydrochloric acid solution, HCl(aq), and an acetic acid solution, CH3COOH(aq), of EQUAL CONCENTRATIONS are compared. How do the H3O+ concentration of HCl(aq) and the pH of HCl(aq) compare to that of CH3COOH(aq)? (A) [H3O+] higher than; pH higher than (B) [H3O+] higher than; pH lower than (C) Equal to; equal to (D) [H3O+] higher than; pH equal to",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "B — HCl is a strong acid (ionises completely), so it has a higher [H3O+] than the weak acid CH3COOH and therefore a LOWER pH.",
    marking_notes: "Accept only 'B'.",
    steps: [mcq("Comparison of [H3O+] and pH of HCl with CH3COOH", ["[H3O+] higher than; pH higher than", "[H3O+] higher than; pH lower than", "[H3O+] equal to; pH equal to", "[H3O+] higher than; pH equal to"], "B")],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Two hypothetical half-reactions: B+(aq) + e⁻ ⇌ B(s), Eθ = -1,5 V; A2+(aq) + 2e⁻ ⇌ A(s), Eθ = +2,5 V. A galvanic cell is set up using these substances. Which ONE of the following statements is CORRECT? (A) B(s) is the reducing agent. (B) A(s) is the oxidising agent. (C) The mass of B(s) will increase. (D) The mass of A(s) will decrease.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "A — B has the lower (more negative) reduction potential, so B(s) is oxidised at the anode: it is the reducing agent. A2+ is reduced to A(s), so the mass of A increases and the mass of B decreases.",
    marking_notes: "Accept only 'A'.",
    steps: [mcq("Correct statement for the galvanic cell", ["B(s) is the reducing agent.", "A(s) is the oxidising agent.", "The mass of B(s) will increase.", "The mass of A(s) will decrease."], "A")],
  },
  {
    number: "1", sub_number: "1.9",
    text: "In an electrolytic cell … (A) the anode is the positive electrode. (B) oxidation takes place at the cathode. (C) electrons flow from the cathode to the anode. (D) the mass of the anode increases.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A — in an electrolytic cell the anode is connected to the positive terminal of the source (positive electrode), oxidation occurs at the anode, and electrons flow from anode to cathode through the external circuit.",
    marking_notes: "Accept only 'A'.",
    steps: [mcq("Correct statement about an electrolytic cell", ["the anode is the positive electrode.", "oxidation takes place at the cathode.", "electrons flow from the cathode to the anode.", "the mass of the anode increases."], "A")],
  },
  {
    number: "1", sub_number: "1.10",
    text: "Which ONE of the following is used as a catalyst in the Ostwald process? (A) Iron (B) Copper (C) Platinum (D) Vanadium(V) oxide",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "C — platinum (Pt/Rh gauze) catalyses the oxidation of ammonia to nitrogen monoxide in the Ostwald process. Iron is used in the Haber process and V2O5 in the Contact process.",
    marking_notes: "Accept only 'C'.",
    steps: [mcq("Catalyst in the Ostwald process", ["Iron", "Copper", "Platinum", "Vanadium(V) oxide"], "C")],
  },

  // ============ QUESTION 2: ORGANIC NOMENCLATURE AND ISOMERS (16 marks) ============
  {
    number: "2", sub_number: "2.1.1",
    text: "The IUPAC name of an organic compound is 4,4-dimethylpent-2-yne. Write down the GENERAL FORMULA of the homologous series to which this compound belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "CnH2n-2 (alkynes).",
    marking_notes: "Accept CnH2n - 2.",
    steps: [st(1, "General formula of the alkynes", "CnH2n-2", ["CnH2n+2", "CnH2n", "CnH2n+1OH"], 2)],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Write down the STRUCTURAL formula of 4,4-dimethylpent-2-yne.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3–C≡C–C(CH3)2–CH3: a five-carbon chain with a triple bond between C2 and C3 and two methyl groups on C4 (drawn in full structural form).",
    marking_notes: "Memo criteria: functional group correct (1); 2 methyl substituents (1); whole structure correct (1).",
    steps: [
      st(1, "Functional group correct", "A carbon-carbon triple bond between C2 and C3 of a five-carbon chain", ["A carbon-carbon double bond between C2 and C3 of a five-carbon chain", "A carbon-carbon triple bond between C1 and C2 of a five-carbon chain", "A carbon-carbon triple bond between C3 and C4 of a five-carbon chain"], 0),
      st(1, "Two methyl substituents on C4", "Two CH3 groups, both attached to C4", ["Two CH3 groups, both attached to C2", "One CH3 group on C3 and one CH3 group on C4", "Two C2H5 (ethyl) groups attached to C4"], 1),
      st(1, "Whole structure correct", "CH3–C≡C–C(CH3)2–CH3", ["CH3–CH=CH–C(CH3)2–CH3", "CH≡C–C(CH3)2–CH2–CH3", "CH3–C≡C–CH(CH3)–CH2–CH3"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "The organic compound shown (CH3–CO–CH2CH2CH3, pentan-2-one) has one positional isomer and one functional isomer. Define the term positional isomer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Compounds with the same molecular formula, but different positions of the side chain/substituents/functional groups on the parent chain.",
    marking_notes: "Memo: 2 marks, both parts needed (same molecular formula; different positions of side chain/substituents/functional group on the parent chain).",
    steps: [st(2, "Definition of positional isomer", "Compounds with the same molecular formula, but different positions of the side chain, substituents or functional group on the parent chain.", ["Compounds with the same molecular formula, but different functional groups.", "Compounds with the same empirical formula, but different positions of the functional group on the parent chain.", "Compounds with the same functional group, but different molecular formulae and chain lengths."], 0)],
    image_url: `${IMG}/2.2-ketone-structure.png`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "For the compound pentan-2-one shown, write down the IUPAC name of its POSITIONAL isomer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Pentan-3-one (3-pentanone).",
    marking_notes: "Memo: functional group and correct position, i.e. 3 (1); whole name correct (1). Accept for one mark: pentanone with the 3 in an incorrect place.",
    steps: [
      st(1, "Functional group and correct position", "A ketone with the C=O on carbon 3", ["A ketone with the C=O on carbon 1", "An aldehyde with the C=O on carbon 1", "An alcohol with the OH on carbon 3"], 0),
      st(1, "Whole name correct", "Pentan-3-one", ["Pentan-2-one", "Pentan-3-ol", "Pentanal"], 1),
    ],
    image_url: `${IMG}/2.2-ketone-structure.png`,
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "For the compound pentan-2-one shown, write down the structural formula of its FUNCTIONAL isomer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Any aldehyde with five carbon atoms, e.g. pentanal CH3CH2CH2CH2CHO.",
    marking_notes: "Memo: whole structure correct (2); only functional group correct (1). Any five-carbon aldehyde is accepted.",
    steps: [
      st(1, "Functional group correct", "An aldehyde group (–CHO)", ["A ketone group (C=O in the middle of the chain)", "A hydroxyl group (–OH)", "A carboxyl group (–COOH)"], 2),
      st(1, "Whole structure correct", "CH3CH2CH2CH2CHO", ["CH3CH2COCH2CH3", "CH3CH2CH2CH2CH2OH", "CH3CH2CH2CH2COOH"], 0),
    ],
    image_url: `${IMG}/2.2-ketone-structure.png`,
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Consider the condensed structural formula CH3CH2C(CH3)(OH)CH3 (the OH is attached to the carbon that carries CH2CH3 and two CH3 groups). Is this a PRIMARY, SECONDARY or TERTIARY alcohol? Give a reason for the answer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Tertiary. The carbon atom bonded to the hydroxyl (-OH) group is bonded to three other carbon atoms (it has no hydrogen atoms).",
    marking_notes: "Memo: tertiary (1); reason (1).",
    steps: [
      st(1, "Type of alcohol", "Tertiary", ["Primary", "Secondary", "Quaternary"], 0),
      st(1, "Reason", "The C atom bonded to the –OH group is bonded to three other C atoms.", ["The C atom bonded to the –OH group is bonded to only one other C atom.", "The C atom bonded to the –OH group is bonded to two other C atoms.", "The molecule has three carbon atoms in the longest chain."], 2),
    ],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Write down the IUPAC name of CH3CH2C(CH3)(OH)CH3.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-methylbutan-2-ol.",
    marking_notes: "Memo: 2-methyl (1); butan-2-ol (1). Max 1 for any error such as omitted hyphens or incorrect sequence.",
    steps: [
      st(1, "Parent chain and hydroxyl position", "Butan-2-ol: four-carbon chain with the OH on C2", ["Butan-1-ol: four-carbon chain with the OH on C1", "Propan-2-ol: three-carbon chain with the OH on C2", "Pentan-2-ol: five-carbon chain with the OH on C2"], 0),
      st(1, "Whole name correct", "2-methylbutan-2-ol", ["3-methylbutan-3-ol", "2-methylbutan-3-ol", "2,2-dimethylpropan-1-ol"], 2),
    ],
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "Write down the IUPAC name of the MAJOR ORGANIC PRODUCT formed when CH3CH2C(CH3)(OH)CH3 undergoes an elimination reaction.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-methylbut-2-ene.",
    marking_notes: "Memo: 2-methyl (1); but-2-ene (1). Max 1 for any error such as omitted hyphens or incorrect sequence.",
    steps: [
      st(1, "Position of the double bond in the major product", "Between C2 and C3 (the more substituted alkene)", ["Between C1 and C2 (the less substituted alkene)", "Between C3 and C4", "No double bond forms; a haloalkane is produced"], 1),
      st(1, "Whole name correct", "2-methylbut-2-ene", ["2-methylbut-1-ene", "3-methylbut-1-ene", "2-methylbutane"], 0),
    ],
  },

  // ============ QUESTION 3: BOILING POINTS AND INTERMOLECULAR FORCES (12 marks) ============
  {
    number: "3", sub_number: "3.1",
    text: "The boiling points of five organic compounds are studied: P = pentanal, Q = 2,2-dimethylbutane, R = 3-methylpentane, S = hexane, T = pentan-1-ol. Define the term boiling point.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "The temperature at which the vapour pressure of a substance equals atmospheric (external) pressure.",
    marking_notes: "Memo: temperature (1); vapour pressure equals atmospheric/external pressure (1).",
    steps: [st(2, "Definition of boiling point", "The temperature at which the vapour pressure of a substance equals atmospheric (external) pressure.", ["The temperature at which the vapour pressure of a substance is equal to zero.", "The temperature at which a substance changes from solid to liquid at atmospheric pressure.", "The pressure at which the temperature of a substance equals its vapour temperature."], 0)],
  },
  {
    number: "3", sub_number: "3.2",
    text: "The boiling points of compounds Q, R and S (2,2-dimethylbutane, 3-methylpentane, hexane) are compared. Give a reason why this is a fair comparison.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Q, R and S have the same molecular mass/formula/number of carbon and hydrogen atoms (they are chain isomers). OR: they are all alkanes with the same number of carbon atoms.",
    marking_notes: "Accept either reason.",
    steps: [st(1, "Reason the comparison is fair", "They have the same molecular formula and molecular mass (they are chain isomers).", ["They all contain hydrogen bonds between molecules.", "They have different molecular masses, so each shows a different effect.", "They all belong to different homologous series."], 1)],
  },
  {
    number: "3", sub_number: "3.3",
    text: "The boiling points of Q, R and S are 55 °C, 49,7 °C and 68 °C (NOT necessarily in the correct order). Which ONE of the three boiling points is most likely the boiling point of compound R (3-methylpentane)? Explain the answer.",
    marks: 4, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "55 °C. R is less branched (less compact, greater surface area) than Q and more branched than S, so its intermolecular forces are stronger than Q's and weaker than S's; more energy is needed to overcome the intermolecular forces in R than in Q and less than in S. (Q = 49,7 °C, S = 68 °C.)",
    marking_notes: "Memo: 55 °C (1); compare branching/chain length/surface area (1); compare strength of intermolecular forces (1); compare energy needed (1).",
    steps: [
      st(1, "Boiling point of R", "55 °C", ["49,7 °C", "68 °C", "Any value above 68 °C"], 2),
      st(1, "Compare branching / surface area", "R is less branched (greater surface area) than Q but more branched (smaller surface area) than S.", ["R is more branched than both Q and S.", "R is less branched than both Q and S.", "R has a longer chain than both Q and S."], 0),
      st(1, "Compare strength of intermolecular forces", "London forces in R are stronger than in Q and weaker than in S.", ["Hydrogen bonds in R are stronger than in Q and S.", "London forces in R are weaker than in Q and stronger than in S.", "Intermolecular forces in R are identical to those in Q and S."], 1),
      st(1, "Compare energy needed", "More energy is needed to overcome the intermolecular forces in R than in Q, and less than in S.", ["Less energy is needed to break the covalent bonds in R than in Q.", "More energy is needed to overcome the intermolecular forces in R than in S.", "The same energy is needed for R, Q and S because they are isomers."], 0),
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "A mixture of equal amounts of P (pentanal) and T (pentan-1-ol) is placed in a flask and heated to a temperature below their boiling points. Assume no reaction or condensation takes place. The vapour is collected in a syringe. Which compound (P or T) will be present in a greater amount in the SYRINGE?",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "P (pentanal).",
    marking_notes: "Accept only P.",
    steps: [st(2, "Compound in greater amount in the vapour", "P (pentanal)", ["T (pentan-1-ol)", "Equal amounts of P and T", "Neither, since both are below their boiling points"], 1)],
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Explain the answer to QUESTION 3.4.1 by referring to the TYPES and STRENGTHS of intermolecular forces.",
    marks: 3, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "P (pentanal) has dipole-dipole forces (plus London forces); T (pentan-1-ol) has hydrogen bonding (plus London forces). Intermolecular forces in P are weaker than in T (or more energy is needed to overcome those in T), so P evaporates more readily.",
    marking_notes: "Memo: type of IMF in P (1); type of IMF in T (1); compare strength / energy (1).",
    steps: [
      st(1, "Type of intermolecular force in P (pentanal)", "Dipole-dipole forces (plus London forces)", ["Hydrogen bonding (plus London forces)", "London forces only", "Ion-dipole forces"], 0),
      st(1, "Type of intermolecular force in T (pentan-1-ol)", "Hydrogen bonding (plus London forces)", ["Dipole-dipole forces only", "London forces only", "Ionic bonding"], 2),
      st(1, "Compare strength / energy", "Intermolecular forces in P are weaker than in T, so less energy is needed to overcome them.", ["Intermolecular forces in P are stronger than in T, so more energy is needed to overcome them.", "The forces in P and T have equal strength, but P has a larger molecular mass.", "The covalent bonds in P are weaker than those in T."], 0),
    ],
  },

  // ============ QUESTION 4: ORGANIC REACTIONS FLOW DIAGRAM (13 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "The flow diagram shows how compound A can be used to prepare other organic compounds: A reacts (I) with concentrated KOH to give propene, and (III) with a base to give a primary alcohol; propene undergoes hydration (II) to give compound B (major product); the primary alcohol reacts (IV) with CH3COOH to give organic compound C. Name the homologous series to which compound A belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Haloalkane (alkyl halide).",
    marking_notes: "Accept haloalkane/alkyl halide.",
    steps: [st(1, "Homologous series of A", "Haloalkane (alkyl halide)", ["Alkene", "Alcohol", "Carboxylic acid"], 0)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Write down the TYPE of reaction represented by I (compound A with concentrated KOH giving propene).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Elimination (dehydrohalogenation).",
    marking_notes: "Accept elimination/dehydrohalogenation.",
    steps: [st(1, "Type of reaction I", "Elimination (dehydrohalogenation)", ["Substitution (hydrolysis)", "Addition (hydration)", "Esterification"], 1)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Write down the TYPE of reaction represented by III (compound A with a base giving a primary alcohol).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Substitution (hydrolysis).",
    marking_notes: "Accept substitution/hydrolysis.",
    steps: [st(1, "Type of reaction III", "Substitution (hydrolysis)", ["Elimination (dehydrohalogenation)", "Addition (hydrogenation)", "Cracking"], 2)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "Write down the TYPE of reaction represented by IV (the primary alcohol reacting with CH3COOH).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Esterification (condensation).",
    marking_notes: "Accept esterification/condensation.",
    steps: [st(1, "Type of reaction IV", "Esterification (condensation)", ["Hydrolysis", "Dehydration (elimination)", "Hydration (addition)"], 0)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Consider reaction III (haloalkane to primary alcohol). Write down TWO reaction conditions for this reaction.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "(Mild) heat; dilute strong base (NaOH/KOH/LiOH) OR add water.",
    marking_notes: "Memo: (mild) heat (1); dilute strong base or water (1).",
    steps: [
      st(1, "First condition", "(Mild) heat", ["Cooling in an ice bath", "UV light", "Platinum catalyst"], 0),
      st(1, "Second condition", "Dilute strong base (e.g. NaOH(aq)) or water", ["Concentrated strong base dissolved in ethanol", "Concentrated H2SO4", "Dry HBr gas"], 1),
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Consider reaction III. Write down the IUPAC name of the primary alcohol that is formed.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propan-1-ol (1-propanol).",
    marking_notes: "Memo: correct stem and functional group, i.e. propanol (1); whole name correct, propan-1-ol (1).",
    steps: [
      st(1, "Correct stem and functional group", "Propanol: three carbons with an alcohol group", ["Propanal: three carbons with an aldehyde group", "Butanol: four carbons with an alcohol group", "Propanoic acid: three carbons with a carboxyl group"], 0),
      st(1, "Whole name correct", "Propan-1-ol", ["Propan-2-ol", "Propan-3-ol", "Propane-1,2-diol"], 3),
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Draw the STRUCTURAL FORMULA for compound B (the major product of the hydration of propene).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propan-2-ol: CH3–CH(OH)–CH3 (OH on the middle carbon; Markovnikov addition).",
    marking_notes: "Memo: whole structure correct (2); only functional group correct (1). Accept -OH condensed. Max 1 for condensed formula; 0 for molecular formula.",
    steps: [
      st(1, "Functional group correct", "A hydroxyl (–OH) group", ["A carbonyl (C=O) group", "A halogen atom (–Br)", "A carbon-carbon double bond"], 1),
      st(1, "Whole structure correct", "CH3–CH(OH)–CH3 (propan-2-ol)", ["CH3–CH2–CH2–OH (propan-1-ol)", "CH3–CO–CH3 (propanone)", "CH3–CH2–CHO (propanal)"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.5.1",
    text: "Consider reaction IV (propan-1-ol with CH3COOH). Write down the structural formula of organic compound C.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propyl ethanoate: CH3–COO–CH2CH2CH3 (drawn in full structural form).",
    marking_notes: "Memo: whole structure correct (2); only functional group (ester) correct (1). Max 1 for condensed formula; 0 for molecular formula or wrong functional group. Positive marking from 4.3.2 only if that compound is an alcohol.",
    steps: [
      st(1, "Functional group correct", "An ester group (–COO–)", ["A carboxyl group (–COOH)", "An ether group (–O–)", "A ketone group (C=O)"], 0),
      st(1, "Whole structure correct", "CH3COOCH2CH2CH3", ["CH3CH2COOCH3", "CH3CH2CH2COOH", "CH3COOCH(CH3)CH3"], 2),
    ],
  },
  {
    number: "4", sub_number: "4.5.2",
    text: "Consider reaction IV. Write down the NAME or FORMULA of the catalyst that is used.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "(Concentrated) sulphuric acid, H2SO4.",
    marking_notes: "Accept (concentrated) sulphuric acid / H2SO4.",
    steps: [st(1, "Catalyst for esterification", "(Concentrated) sulphuric acid, H2SO4", ["Platinum", "Aqueous sodium hydroxide, NaOH", "Vanadium(V) oxide, V2O5"], 1)],
  },

  // ============ QUESTION 5: RATE OF REACTION, ANTACID TABLET (18 marks) ============
  {
    number: "5", sub_number: "5.1",
    text: "CaCO3(s) + 2HCl(aq) → CaCl2(aq) + CO2(g) + H2O(l), ΔH < 0. Is the reaction EXOTHERMIC or ENDOTHERMIC? Give a reason for the answer.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Exothermic; ΔH < 0 (energy is released).",
    marking_notes: "Memo: exothermic (1); ΔH < 0 / energy is released (1). FLAG: energy changes not a dedicated topic; mapped to rate-of-reaction.",
    steps: [
      st(1, "Exothermic or endothermic", "Exothermic", ["Endothermic", "Neither: ΔH only applies to gases", "Endothermic, because CO2(g) is produced"], 0),
      st(1, "Reason", "ΔH < 0 / energy is released", ["ΔH > 0 / energy is absorbed", "The products have more mass than the reactants", "The reaction produces a gas"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "An antacid tablet of mass 2 g is placed in HCl(aq). After 30 s the mass of the tablet was found to be 0,25 g. Calculate the average rate (in g·s⁻¹) of the reaction.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "rate = -Δm/Δt = -(0,25 - 2)/30 = 0,06 g·s⁻¹ (0,0583 g·s⁻¹).",
    marking_notes: "Memo: formula/substitution of masses (1); substitution of 30 s (1); answer 0,06 g·s⁻¹ (1). A negative answer (-0,06 g·s⁻¹) is also accepted.",
    steps: [
      st(1, "Formula", "rate = -Δm/Δt (change in mass over change in time)", ["rate = Δt/Δm", "rate = m/Δt using the final mass only", "rate = Δm × Δt"], 0),
      st(1, "Substitution", "-(0,25 - 2)/30", ["-(0,25 + 2)/30", "-(0,25 - 2)/0,5", "-(2 - 0,25) × 30"], 2),
      st(1, "Final answer", "0,06 g·s⁻¹", ["0,075 g·s⁻¹", "1,75 g·s⁻¹", "0,0083 g·s⁻¹"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "The antacid tablet contains 40% calcium carbonate. Another antacid tablet of mass 2 g is allowed to react completely with HCl(aq). Calculate the volume of carbon dioxide, CO2(g), that will be collected at STP. Assume that all the CO2(g) produced is from the calcium carbonate.",
    marks: 5, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "m(CaCO3) = 0,40 × 2 = 0,8 g; n(CaCO3) = 0,8/100 = 8 × 10⁻³ mol; n(CO2) = n(CaCO3) = 8 × 10⁻³ mol (1:1); V = 8 × 10⁻³ × 22,4 = 0,18 dm³ (0,1792 dm³).",
    marking_notes: "Memo: m(CaCO3) reacted or V(CO2) (1); substitute 100 g·mol⁻¹ (1); mole ratio 1:1 (1); use of 22,4 dm³·mol⁻¹ (1); final answer 0,18 dm³ (1).",
    steps: [
      st(1, "Mass of CaCO3 in the tablet", "0,8 g (40/100 × 2 g)", ["1,2 g (60/100 × 2 g)", "0,4 g (40 % of 1 g)", "80 g (40 × 2 g)"], 1),
      st(1, "Moles of CaCO3 (M = 100 g·mol⁻¹)", "n = 0,8/100 = 8 × 10⁻³ mol", ["n = 0,8 × 100 = 80 mol", "n = 2/100 = 0,02 mol", "n = 0,8/84 = 9,5 × 10⁻³ mol"], 0),
      st(1, "Mole ratio", "n(CO2) : n(CaCO3) = 1 : 1, so n(CO2) = 8 × 10⁻³ mol", ["n(CO2) : n(CaCO3) = 2 : 1, so n(CO2) = 1,6 × 10⁻² mol", "n(CO2) : n(CaCO3) = 1 : 2, so n(CO2) = 4 × 10⁻³ mol", "n(CO2) : n(HCl) = 1 : 1, so n(CO2) = 0,02 mol"], 2),
      st(1, "Molar gas volume at STP", "V = n × 22,4 dm³·mol⁻¹", ["V = n / 22,4 dm³·mol⁻¹", "V = n × 24,5 dm³·mol⁻¹", "V = n × 44 g·mol⁻¹"], 0),
      st(1, "Final answer", "0,18 dm³", ["0,36 dm³", "0,09 dm³", "1,79 dm³"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "The reaction rate of similar antacid tablets with excess HCl(aq) of concentration 0,1 mol·dm⁻³ at DIFFERENT TEMPERATURES is measured. The graph of 1/time (s⁻¹) against temperature (°C) shows an increasing curve. Write down ONE controlled variable for this investigation.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: concentration of the acid; size/mass/type of the tablet (identical tablets); state of division/surface area.",
    marking_notes: "Accept any one controlled variable.",
    steps: [st(1, "Controlled variable", "Concentration of the acid", ["Temperature of the acid", "1/time (the reaction rate)", "The time at which the reaction stops"], 0)],
    image_url: `${IMG}/5-rate-temperature-graph.png`,
  },
  {
    number: "5", sub_number: "5.5",
    text: "Write down a conclusion that can be made from the graph (1/time against temperature, a curve that rises with increasing temperature).",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "The reaction rate (1/time) increases with an increase in temperature (or: the time taken for the reaction decreases when the temperature increases).",
    marking_notes: "Memo: dependent (rate/time) and independent (temperature) variables correctly identified (1); relationship correctly stated (1). Max 1 if rate is stated to be directly proportional to temperature.",
    steps: [
      st(1, "Variables identified", "Dependent variable: reaction rate (1/time); independent variable: temperature", ["Dependent variable: temperature; independent variable: reaction rate", "Dependent variable: concentration; independent variable: temperature", "Dependent variable: tablet mass; independent variable: time"], 0),
      st(1, "Relationship", "The reaction rate increases as the temperature increases.", ["The reaction rate decreases as the temperature increases.", "The reaction rate is directly proportional to the temperature.", "The reaction rate is independent of the temperature."], 1),
    ],
    image_url: `${IMG}/5-rate-temperature-graph.png`,
  },
  {
    number: "5", sub_number: "5.6",
    text: "Use the collision theory to fully explain the answer to QUESTION 5.5.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "An increase in temperature increases the average kinetic energy of the molecules (they move faster); more molecules have enough kinetic energy (Ek > Ea); there are more effective collisions per unit time (frequency of effective collisions increases).",
    marking_notes: "Memo: three points, 1 mark each.",
    steps: [
      st(1, "Effect of temperature on the molecules", "The average kinetic energy of the molecules increases (they move faster).", ["The activation energy of the reaction decreases.", "The number of molecules in the container increases.", "The molecules become larger and collide more often."], 0),
      st(1, "Effect on energy of the molecules", "More molecules have sufficient kinetic energy (Ek > Ea).", ["Every molecule now has Ek > Ea.", "Fewer molecules have Ek > Ea.", "The threshold energy Ea decreases so Ek > Ea is easily met."], 2),
      st(1, "Effect on collisions", "More effective collisions per unit time (frequency of effective collisions increases).", ["The same number of effective collisions per unit time, but each is stronger.", "Fewer collisions per unit time, but all are effective.", "More collisions per unit time, but none of them are effective."], 0),
    ],
  },
  {
    number: "5", sub_number: "5.7",
    text: "Redraw the graph (1/time against temperature, with HCl at 0,1 mol·dm⁻³). On the same set of axes, sketch the curve that will be obtained if HCl(aq) of concentration 0,2 mol·dm⁻³ is now used. Label this curve Y.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Curve Y lies ABOVE the given curve at every temperature, and has an increasing rate (1/time) with an increase in temperature.",
    marking_notes: "Memo: for each temperature, curve Y above the given curve (1); curve Y has an increasing rate with increasing temperature (1).",
    steps: [
      st(1, "Position of curve Y", "Y is above the given curve at every temperature (higher 1/time).", ["Y is below the given curve at every temperature.", "Y is identical to the given curve.", "Y starts above and then crosses below the given curve."], 0),
      st(1, "Shape of curve Y", "Y rises (rate increases) as temperature increases.", ["Y is a horizontal line (rate independent of temperature).", "Y falls as temperature increases.", "Y rises, then levels off immediately at a low temperature."], 1),
    ],
    image_url: `${IMG}/5-rate-temperature-graph.png`,
  },

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (22 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "Initially 60,8 g pure carbon dioxide, CO2(g), is reacted with carbon, C(s), in a sealed container of volume 3 dm³. The reaction reaches equilibrium at temperature T: C(s) + CO2(g) ⇌ 2CO(g). Define the term chemical equilibrium.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "The stage in a chemical reaction when the rate of the forward reaction equals the rate of the reverse reaction (OR: when the concentrations of reactants and products remain constant).",
    marking_notes: "2 or 0. Accept either version.",
    steps: [st(2, "Definition of chemical equilibrium", "The stage in a reversible reaction when the rate of the forward reaction equals the rate of the reverse reaction.", ["The stage in a reaction when all the reactants have been used up.", "The stage in a reaction when the concentrations of reactants and products are equal.", "The stage in a reaction when the forward reaction has stopped."], 0)],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "At equilibrium it is found that the concentration of the carbon dioxide is 0,054 mol·dm⁻³ (initially 60,8 g CO2 in 3 dm³). Calculate the equilibrium constant, Kc, for this reaction at temperature T.",
    marks: 7, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "n(CO2) initial = 60,8/44 = 1,382 mol; n(CO2) eq = 0,054 × 3 = 0,162 mol; n(CO2) reacted = 1,22 mol; n(CO) formed = 2 × 1,22 = 2,44 mol (c = 0,813 mol·dm⁻³); Kc = [CO]²/[CO2] = (0,813)²/0,054 = 12,24 (accepted range 11,85 - 12,66; the concentration route gives 12,15).",
    marking_notes: "Memo (7): 44 g·mol⁻¹; equilibrium conc. × 3 dm³ and n(CO)/3 dm³; mole ratio 1:2; change in n(CO2) and n(CO)eq; correct Kc expression; substitution; final answer 12,24. Wrong Kc expression max 4/7; no Kc expression but correct substitution max 6/7.",
    steps: [
      st(1, "Initial moles of CO2 (M = 44 g·mol⁻¹)", "n = 60,8/44 = 1,382 mol", ["n = 60,8/28 = 2,17 mol", "n = 60,8 × 44 = 2675 mol", "n = 60,8/12 = 5,07 mol"], 0),
      st(1, "Equilibrium moles of CO2", "n = 0,054 × 3 = 0,162 mol", ["n = 0,054/3 = 0,018 mol", "n = 0,054 × 44 = 2,38 mol", "n = 0,054 mol"], 1),
      st(1, "Moles of CO2 reacted", "1,382 - 0,162 = 1,22 mol", ["1,382 + 0,162 = 1,544 mol", "0,162 mol", "1,382 mol"], 0),
      st(1, "Mole ratio to find CO formed", "n(CO) = 2 × 1,22 = 2,44 mol (CO2 : CO = 1 : 2)", ["n(CO) = 1,22 mol (ratio 1 : 1)", "n(CO) = ½ × 1,22 = 0,61 mol", "n(CO) = 2 × 1,382 = 2,76 mol"], 3),
      st(1, "Kc expression", "Kc = [CO]²/[CO2]", ["Kc = [CO2]/[CO]²", "Kc = [CO]/[CO2]", "Kc = [CO]²/([CO2][C])"], 0),
      st(1, "Substitution (c(CO) = 2,44/3 = 0,813 mol·dm⁻³)", "Kc = (0,813)²/0,054", ["Kc = (2,44)²/0,054", "Kc = 2(0,813)/0,054", "Kc = (0,813)²/0,162"], 2),
      st(1, "Final answer", "12,24", ["15,06", "0,0817", "278,8"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "Calculate the minimum mass of C(s) that must be present in the container to obtain this equilibrium.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "n(C) reacted = n(CO2) reacted = 1,22 mol; m(C) = nM = 1,22 × 12 = 14,64 g.",
    marking_notes: "Memo: mole ratio n(C) = n(CO2) (1); substitute 12 g·mol⁻¹ (1); final answer 14,64 g (1). Positive marking from 6.2.1.",
    steps: [
      st(1, "Mole ratio for carbon", "n(C) = n(CO2) reacted = 1,22 mol (1 : 1)", ["n(C) = 2 × 1,22 = 2,44 mol", "n(C) = ½ × 1,22 = 0,61 mol", "n(C) = n(CO2) initial = 1,382 mol"], 0),
      st(1, "Molar mass of carbon", "M(C) = 12 g·mol⁻¹", ["M(C) = 44 g·mol⁻¹", "M(C) = 28 g·mol⁻¹", "M(C) = 6 g·mol⁻¹"], 2),
      st(1, "Final answer", "14,64 g", ["16,58 g", "29,28 g", "53,68 g"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "How will the following change affect the AMOUNT of CO(g) at equilibrium (INCREASES, DECREASES or REMAINS THE SAME)? More carbon is added to the container.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same (C is a solid; its concentration is constant and does not affect the equilibrium position).",
    marking_notes: "Accept only 'remains the same'.",
    steps: [st(1, "Effect of adding C(s)", "Remains the same", ["Increases", "Decreases", "First increases, then decreases back to a lower value"], 0)],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "How will the AMOUNT of CO(g) at equilibrium be affected when the pressure is increased by reducing the volume of the container at constant temperature (INCREASES, DECREASES or REMAINS THE SAME)? Use Le Chatelier's principle to explain the answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Decreases. When pressure is increased, the reaction that leads to the smaller amount (moles/volume) of gas is favoured; the reverse reaction is favoured (1 mol CO2 vs 2 mol CO), so more CO2 is formed.",
    marking_notes: "Memo: decreases (1); reaction leading to smaller amount of gas favoured (1); reverse reaction favoured / more CO2 formed (1).",
    steps: [
      st(1, "Effect on the amount of CO(g)", "Decreases", ["Increases", "Remains the same", "Cannot be predicted"], 0),
      st(1, "Le Chatelier: effect of increased pressure", "The reaction that leads to the smaller amount (number of moles) of gas is favoured.", ["The reaction that leads to the greater amount of gas is favoured.", "The endothermic reaction is favoured.", "The reaction that consumes the solid carbon is favoured."], 1),
      st(1, "Direction of the shift", "The reverse reaction is favoured; more CO2 is formed.", ["The forward reaction is favoured; more CO is formed.", "Neither reaction is favoured because C is a solid.", "The forward reaction is favoured because CO2 is a gas."], 0),
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "The table shows the percentages of CO2(g) and CO(g) in the container at different temperatures: 827 °C: 6,23 % CO2, 93,77 % CO; 950 °C: 1,32 %, 98,68 %; 1 050 °C: 0,37 %, 99,63 %; 1 200 °C: 0,06 %, 99,94 %. Is the reaction EXOTHERMIC or ENDOTHERMIC? Refer to the data in the table and explain the answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Endothermic. When the temperature increases, the percentage CO(g) (product) increases / the forward reaction is favoured. An increase in temperature favours the endothermic reaction.",
    marking_notes: "Memo: endothermic (1); % CO increases / forward reaction favoured with temperature (1); increase in temperature favours the endothermic reaction (1).",
    steps: [
      st(1, "Exothermic or endothermic", "Endothermic", ["Exothermic", "Neither, since the percentages always add to 100 %", "Cannot be decided from the table"], 0),
      st(1, "Use of the data", "As temperature increases, the percentage of CO(g) (product) increases, so the forward reaction is favoured.", ["As temperature increases, the percentage of CO2(g) increases, so the forward reaction is favoured.", "As temperature increases, the percentages stay constant, so the forward reaction is unaffected.", "As temperature increases, the percentage of CO(g) increases, so the reverse reaction is favoured."], 2),
      st(1, "Principle", "An increase in temperature favours the endothermic reaction.", ["An increase in temperature favours the exothermic reaction.", "An increase in temperature favours the reaction producing fewer moles of gas.", "An increase in temperature increases Kc only for exothermic reactions."], 1),
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "Use the information in the table to determine temperature T. Show clearly how you arrived at the answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "n(total) at equilibrium = 0,162 + 2,44 = 2,606 mol; % CO2 = 0,162/2,606 × 100 = 6,22 % (CO: 93,63 %); this matches the 827 °C row, so T = 827 °C. (Concentration route: 0,054 + 0,813 = 0,867 mol·dm⁻³; 6,23 %.)",
    marking_notes: "Memo: total moles/concentration at equilibrium (1); percentage of any one gas (1); T = 827 °C (1). Positive marking from 6.2.1.",
    steps: [
      st(1, "Total amount of gas at equilibrium", "0,162 + 2,44 = 2,606 mol", ["1,382 + 2,44 = 3,822 mol", "2,44 - 0,162 = 2,278 mol", "0,162 mol"], 0),
      st(1, "Percentage of one gas", "% CO2 = 0,162/2,606 × 100 = 6,22 %", ["% CO2 = 2,44/2,606 × 100 = 93,6 %", "% CO2 = 0,162/1,382 × 100 = 11,7 %", "% CO2 = 0,054/3 × 100 = 1,8 %"], 1),
      st(1, "Temperature T", "827 °C", ["950 °C", "1 050 °C", "1 200 °C"], 3),
    ],
  },

  // ============ QUESTION 7: ACIDS AND BASES (17 marks) ============
  {
    number: "7", sub_number: "7.1",
    text: "A hydrogen bromide solution reacts with water: HBr(aq) + H2O(l) ⇌ Br⁻(aq) + H3O+(aq). The Ka value of HBr(aq) at 25 °C is 1 × 10⁹. Is hydrogen bromide a STRONG ACID or a WEAK ACID? Give a reason for the answer.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "Strong acid. Large Ka value (Ka > 1) / HBr ionises completely.",
    marking_notes: "Memo: strong (1); reason (1).",
    steps: [
      st(1, "Strong or weak", "Strong acid", ["Weak acid", "Neither, since Ka is not given for HBr(g)", "Weak acid, because it is diluted in water"], 0),
      st(1, "Reason", "Large Ka value (Ka > 1) / it ionises completely", ["Small Ka value (Ka < 1) / it ionises incompletely", "It contains a halogen", "It has a pH greater than 7"], 3),
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "For HBr(aq) + H2O(l) ⇌ Br⁻(aq) + H3O+(aq), write down the FORMULAE of the TWO bases in the above reaction.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "H2O and Br⁻.",
    marking_notes: "Memo: H2O (1); Br⁻ (1).",
    steps: [
      st(1, "Base on the reactant side", "H2O", ["HBr", "H3O+", "Br⁻"], 0),
      st(1, "Base on the product side", "Br⁻", ["H3O+", "HBr", "OH⁻"], 2),
    ],
  },
  {
    number: "7", sub_number: "7.3.1",
    text: "HBr(aq) reacts with Zn(OH)2(s): Zn(OH)2(s) + 2HBr(aq) → ZnBr2(aq) + 2H2O(l). An unknown quantity of Zn(OH)2(s) is reacted with 90 cm³ of HBr(aq) in a flask (volume unchanged). The EXCESS HBr(aq) is then neutralised by 16,5 cm³ of NaOH(aq) of concentration 0,5 mol·dm⁻³: HBr(aq) + NaOH(aq) → NaBr(aq) + H2O(l). Calculate the pH of the HBr solution remaining in the flask AFTER the reaction with Zn(OH)2(s).",
    marks: 7, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "n(NaOH) = cV = 0,5 × 0,0165 = 0,00825 mol; n(HBr) excess = n(NaOH) = 0,00825 mol (1:1); c(H3O+) = 0,00825/0,09 = 0,092 mol·dm⁻³; pH = -log(0,092) = 1,04.",
    marking_notes: "Memo (7): formula n = cV (or c_a V_a/c_b V_b = n_a/n_b); substitution (0,5)(0,0165); mole ratio 1:1; V = 0,09 dm³; pH = -log[H3O+]; substitute [H3O+]; final pH = 1,04 (range 1,036 - 1,05).",
    steps: [
      st(1, "Formula for amount of NaOH", "n = cV", ["n = c/V", "n = V/c", "n = m/V"], 0),
      st(1, "Substitution", "n(NaOH) = 0,5 × 0,0165 = 0,00825 mol", ["n(NaOH) = 0,5 × 16,5 = 8,25 mol", "n(NaOH) = 0,5 × 0,09 = 0,045 mol", "n(NaOH) = 0,5/0,0165 = 30,3 mol"], 1),
      st(1, "Mole ratio", "n(HBr) excess = n(NaOH) = 0,00825 mol (1 : 1)", ["n(HBr) excess = 2 × 0,00825 = 0,0165 mol", "n(HBr) excess = ½ × 0,00825 = 0,004125 mol", "n(HBr) excess = n(Zn(OH)2) = 0,00825 mol (1 : 2 mixed up)"], 0),
      st(1, "Volume used for concentration", "V = 0,09 dm³ (90 cm³): c(H3O+) = 0,00825/0,09 = 0,092 mol·dm⁻³", ["V = 0,1065 dm³ (90 + 16,5 cm³): c(H3O+) = 0,0775 mol·dm⁻³", "V = 0,0165 dm³: c(H3O+) = 0,5 mol·dm⁻³", "V = 90 dm³: c(H3O+) = 9,2 × 10⁻⁵ mol·dm⁻³"], 2),
      st(1, "pH formula", "pH = -log[H3O+]", ["pH = log[H3O+]", "pH = 14 + log[H3O+]", "pH = -ln[H3O+]"], 0),
      st(1, "Substitution into pH formula", "pH = -log(0,092)", ["pH = -log(0,00825)", "pH = -log(0,5)", "pH = -log(0,045)"], 3),
      st(1, "Final answer", "1,04", ["2,08", "12,96", "1,11"], 2),
    ],
  },
  {
    number: "7", sub_number: "7.3.2",
    text: "Calculate the mass of Zn(OH)2(s) INITIALLY present in the flask if the initial concentration of HBr(aq) was 0,45 mol·dm⁻³.",
    marks: 6, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "n(HBr) initial = 0,45 × 0,09 = 0,0405 mol; n(HBr) reacted with Zn(OH)2 = 0,0405 - 0,00825 = 0,03225 mol; n(Zn(OH)2) = ½ × 0,03225 = 0,016125 mol; m = nM = 0,016125 × 99 = 1,596 g.",
    marking_notes: "Memo: n(HBr) initial (1); subtraction for HBr reacted (2); mole ratio 1:2 (1); substitute 99 g·mol⁻¹ (1); final answer 1,5964 g (range 1,58 - 1,68) (1). Option 2 route gives 1,595 g (1,60 g). Positive marking from 7.3.1.",
    steps: [
      st(1, "Initial amount of HBr", "n = cV = 0,45 × 0,09 = 0,0405 mol", ["n = 0,45 × 90 = 40,5 mol", "n = 0,45/0,09 = 5 mol", "n = 0,5 × 0,09 = 0,045 mol"], 0),
      st(2, "Amount of HBr that reacted with Zn(OH)2", "0,0405 - 0,00825 = 0,03225 mol", ["0,0405 + 0,00825 = 0,04875 mol", "0,0405 mol", "0,00825 mol"], 1),
      st(1, "Mole ratio", "n(Zn(OH)2) = ½ n(HBr) = 0,016125 mol", ["n(Zn(OH)2) = 2 n(HBr) = 0,0645 mol", "n(Zn(OH)2) = n(HBr) = 0,03225 mol", "n(Zn(OH)2) = ½ × 0,0405 = 0,02025 mol"], 2),
      st(1, "Molar mass of Zn(OH)2", "M = 99 g·mol⁻¹", ["M = 81 g·mol⁻¹ (ZnO)", "M = 65 g·mol⁻¹ (Zn only)", "M = 83 g·mol⁻¹"], 0),
      st(1, "Final answer", "1,60 g (1,596 g)", ["3,19 g", "4,01 g", "6,38 g"], 3),
    ],
  },

  // ============ QUESTION 8: GALVANIC CELL (12 marks) ============
  {
    number: "8", sub_number: "8.1",
    text: "A standard electrochemical cell is set up using two standard half-cells: a Cl2(g)/Cl⁻(aq) half-cell with a platinum electrode, and a metal X in X2+(aq), joined by component Q and a voltmeter. State the energy conversion that takes place in this cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Chemical energy to electrical energy.",
    marking_notes: "Accept chemical to electrical.",
    steps: [st(1, "Energy conversion in a galvanic cell", "Chemical energy to electrical energy", ["Electrical energy to chemical energy", "Heat energy to electrical energy", "Electrical energy to heat energy"], 0)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "What is the function of component Q (the salt bridge)?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Provides a path for the movement of ions / completes the circuit / ensures electrical neutrality in the cell / restores charge balance.",
    marking_notes: "Accept any one of these functions.",
    steps: [st(1, "Function of Q", "Allows ions to move between the half-cells, completing the circuit and maintaining electrical neutrality", ["Allows electrons to flow between the two half-cells", "Supplies the metal ions that are consumed at the electrode", "Increases the voltage registered on the voltmeter"], 0)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.3",
    text: "X is a metal. A voltmeter connected across the cell initially registers 1,49 V. Use a calculation to identify metal X (reduction potential for Cl2 is +1,36 V).",
    marks: 5, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°cathode - E°anode; 1,49 = 1,36 - E°anode; E°anode = 1,36 - 1,49 = -0,13 V, so X is Pb (lead).",
    marking_notes: "Memo accepts any other correct formula from the data sheet (5 marks; 4/5 for unconventional abbreviations with correct substitutions). Option 2: Cl2 + 2e⁻ → 2Cl⁻ (E° = 1,36 V); X → X²⁺ + 2e⁻ (E° = 0,13 V); E°cell = 1,49 V. FLAG: the itemised mark split is not given in the memo; the steps are a reconstruction of the 5 marks.",
    steps: [
      st(1, "Formula", "E°cell = E°cathode - E°anode", ["E°cell = E°anode - E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°oxidising agent × E°reducing agent"], 0),
      st(1, "Reduction potential of the cathode", "Cl2 is reduced at the cathode: E° = +1,36 V", ["Cl2 is oxidised at the anode: E° = -1,36 V", "Cl⁻ is reduced at the cathode: E° = +1,49 V", "X²⁺ is reduced at the cathode: E° = +1,36 V"], 0),
      st(1, "Substitution", "1,49 = 1,36 - E°anode", ["1,49 = E°anode - 1,36", "1,49 = 1,36 + E°anode", "1,36 = 1,49 - E°anode + 0,13"], 1),
      st(1, "E° of the anode", "E°anode = -0,13 V", ["E°anode = +0,13 V", "E°anode = +2,85 V", "E°anode = -2,85 V"], 3),
      st(1, "Identity of X", "Pb (lead)", ["Sn (tin)", "Ni (nickel)", "Cu (copper)"], 0),
    ],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.4",
    text: "Write down the NAME or FORMULA of the reducing agent in this cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "X / Pb / lead.",
    marking_notes: "Positive marking from 8.3. Accept X, Pb or lead.",
    steps: [st(1, "Reducing agent", "Pb (lead, the metal X)", ["Cl2", "Pb²⁺", "Cl⁻"], 2)],
  },
  {
    number: "8", sub_number: "8.5.1",
    text: "The reading on the voltmeter becomes ZERO after this cell operates for several hours. Give a reason for this reading by referring to the rates of the oxidation and reduction half-reactions taking place in the cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "The reaction reached equilibrium: in each half-cell the rate of oxidation equals the rate of reduction (forward rate equals reverse rate).",
    marking_notes: "Accept equilibrium reached / rates equal.",
    steps: [st(1, "Reason for a zero reading", "The cell reaction has reached equilibrium; the rates of the forward and reverse (oxidation and reduction) reactions are equal.", ["The oxidation reaction has stopped completely, while reduction continues.", "The rate of oxidation is greater than the rate of reduction.", "The salt bridge has been used up and no ions can move."], 0)],
  },
  {
    number: "8", sub_number: "8.5.2",
    text: "A silver nitrate solution, AgNO3(aq), is NOW added to the chlorine half-cell and a precipitate (AgCl) forms. How will the reading on the voltmeter be affected? (INCREASES, DECREASES or REMAINS the same)",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Increases.",
    marking_notes: "Accept only 'increases'.",
    steps: [st(1, "Effect on the voltmeter reading", "Increases", ["Decreases", "Remains the same", "Falls to a negative value"], 1)],
  },
  {
    number: "8", sub_number: "8.5.3",
    text: "Use Le Chatelier's principle to explain the answer to QUESTION 8.5.2.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Cl⁻ is removed by precipitation as AgCl, so [Cl⁻] decreases; the system opposes this, so the forward reaction (Cl2 + X → X²⁺ + 2Cl⁻) is favoured and the cell potential increases.",
    marking_notes: "Memo: [Cl⁻] decreases (1); forward reaction is favoured (1).",
    steps: [
      st(1, "Change in concentration", "[Cl⁻] decreases (Cl⁻ is removed as AgCl).", ["[Cl⁻] increases (Ag⁺ releases more Cl⁻).", "[X²⁺] decreases (X²⁺ forms a precipitate).", "[Cl2] decreases (Cl2 forms a precipitate)."], 0),
      st(1, "Shift of the equilibrium", "The forward reaction is favoured.", ["The reverse reaction is favoured.", "Neither reaction is favoured.", "The reverse reaction is favoured because AgCl is a solid."], 0),
    ],
  },

  // ============ QUESTION 9: ELECTROLYSIS OF BRINE (8 marks) ============
  {
    number: "9", sub_number: "9.1",
    text: "Chlorine is produced industrially by the electrolysis of concentrated NaCl(aq): 2NaCl(aq) + 2H2O(l) → H2(g) + 2NaOH(aq) + Cl2(g). Define the term electrolysis.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "The chemical process in which electrical energy is converted to chemical energy. OR: the use of electrical energy to produce a chemical change. OR: the process during which an electrical current passes through a solution/molten ionic compound.",
    marking_notes: "Deduct 1 mark if an underlined key phrase is omitted/out of context.",
    steps: [st(2, "Definition of electrolysis", "The chemical process in which electrical energy is converted to chemical energy.", ["The chemical process in which chemical energy is converted to electrical energy.", "The process in which a metal reacts spontaneously with its own ions.", "The process in which an ionic solid dissolves in water to form ions."], 0)],
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "For the above cell reaction, write down the half-reaction that takes place at the cathode.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "2H2O(l) + 2e⁻ → H2(g) + 2OH⁻(aq).",
    marking_notes: "Ignore phases. Reversed arrow: 0/2 for the wrong direction; double arrow in the correct direction: 1/2; missing charge on OH⁻ max 1/2.",
    steps: [st(2, "Cathode half-reaction", "2H2O(l) + 2e⁻ → H2(g) + 2OH⁻(aq)", ["2Cl⁻(aq) → Cl2(g) + 2e⁻", "Na⁺(aq) + e⁻ → Na(s)", "H2(g) + 2OH⁻(aq) → 2H2O(l) + 2e⁻"], 0)],
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Write down the NAME or FORMULA of the oxidising agent in the cell reaction.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Water / H2O.",
    marking_notes: "Accept water or H2O.",
    steps: [st(1, "Oxidising agent", "Water, H2O", ["Chloride ion, Cl⁻", "Sodium ion, Na⁺", "Hydrogen gas, H2"], 1)],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Refer to the Table of Standard Reduction Potentials to explain why sodium ions are not reduced during this process.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "H2O is a stronger oxidising agent than Na⁺ and will be reduced (to H2). OR: the half-reaction that produces H2(g) has a more positive reduction potential (-0,83 V) than the half-reaction that produces Na (-2,71 V), so water is reduced and Na⁺ is not.",
    marking_notes: "Memo accepts any of the three equivalent formulations.",
    steps: [
      st(1, "Reduction potentials", "H2O/H2: E° = -0,83 V; Na⁺/Na: E° = -2,71 V", ["H2O/H2: E° = -2,71 V; Na⁺/Na: E° = -0,83 V", "H2O/H2: E° = +0,83 V; Na⁺/Na: E° = +2,71 V", "H2O/H2: E° = 0,00 V; Na⁺/Na: E° = -0,83 V"], 0),
      st(1, "Comparison of oxidising strength", "H2O is a stronger oxidising agent than Na⁺.", ["Na⁺ is a stronger oxidising agent than H2O.", "Na⁺ and H2O are equally strong oxidising agents.", "Na⁺ is a stronger reducing agent than H2O, so it is reduced first."], 2),
      st(1, "Conclusion", "Water is reduced (to H2) in preference to Na⁺, so Na⁺ is not reduced.", ["Na⁺ is reduced first because it is positively charged.", "Na⁺ is not reduced because it is not present in solution.", "Water is oxidised at the cathode in preference to Na⁺."], 1),
    ],
  },

  // ============ QUESTION 10: FERTILISER INDUSTRY (12 marks) ============
  {
    number: "10", sub_number: "10.1.1",
    text: "The flow diagram shows the industrial preparation of an ammonium fertiliser: Gas X + nitrogen gas → compound P; P + O2(g) → gas Y → NO2(g); NO2(g) + H2O(l) → acid Q; P + acid Q → ammonium fertiliser. Write down the NAME or FORMULA of gas X.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Hydrogen / H2.",
    marking_notes: "Accept hydrogen or H2.",
    steps: [st(1, "Gas X", "Hydrogen, H2", ["Oxygen, O2", "Carbon dioxide, CO2", "Nitrogen monoxide, NO"], 0)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "Write down the NAME or FORMULA of gas Y.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Nitrogen monoxide / NO.",
    marking_notes: "Accept nitrogen monoxide or NO.",
    steps: [st(1, "Gas Y", "Nitrogen monoxide, NO", ["Nitrogen dioxide, NO2", "Dinitrogen monoxide, N2O", "Nitrogen, N2"], 1)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "Write down the NAME or FORMULA of acid Q.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Nitric acid / HNO3.",
    marking_notes: "Accept nitric acid or HNO3.",
    steps: [st(1, "Acid Q", "Nitric acid, HNO3", ["Sulphuric acid, H2SO4", "Nitrous acid, HNO2", "Hydrochloric acid, HCl"], 2)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "Write down the TYPE of chemical reaction that converts compound P (NH3) into gas Y (NO).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Comprehension",
    model_answer: "(Catalytic) oxidation / redox.",
    marking_notes: "Accept (catalytic) oxidation or redox.",
    steps: [st(1, "Type of reaction P to Y", "(Catalytic) oxidation / redox", ["Neutralisation", "Reduction only", "Decomposition by heat"], 0)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "Write down the balanced equation for the reaction between compound P (NH3) and acid Q (HNO3).",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "NH3 + HNO3 → NH4NO3.",
    marking_notes: "Memo: reactants (1); products (1); balancing (1). Ignore double arrows and phases.",
    steps: [
      st(1, "Reactants", "NH3 and HNO3", ["N2 and HNO3", "NH4OH and HNO3", "NH3 and H2SO4"], 0),
      st(1, "Product", "NH4NO3", ["(NH4)2SO4", "NH4NO2", "NO2 and H2O"], 2),
      st(1, "Balanced equation", "NH3 + HNO3 → NH4NO3 (1 : 1 : 1)", ["2NH3 + HNO3 → NH4NO3", "NH3 + 2HNO3 → NH4NO3", "NH3 + HNO3 → 2NH4NO3"], 1),
    ],
  },
  {
    number: "10", sub_number: "10.3.1",
    text: "Two bags of fertiliser are labelled Bag A: 1 : 3 : 4 (21), 50 kg and Bag B: 1 : 3 : 4 (27), 40 kg. What do the numbers (21) and (27) on the labels represent?",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "The (total) percentage of nutrients (N, P, K) in the fertiliser.",
    marking_notes: "Accept total percentage of nutrients/fertiliser/N,P,K.",
    steps: [st(1, "Meaning of (21) and (27)", "The total percentage (by mass) of the nutrients N, P and K in the fertiliser", ["The mass of the fertiliser in kilograms", "The percentage of nitrogen only", "The ratio of phosphorus to potassium"], 0)],
    image_url: `${IMG}/10.3-fertiliser-bags.png`,
  },
  {
    number: "10", sub_number: "10.3.2",
    text: "Determine, by means of calculations, which bag (A or B) contains a greater mass of phosphorus. (Bag A: 1 : 3 : 4 (21), 50 kg; Bag B: 1 : 3 : 4 (27), 40 kg.)",
    marks: 4, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Mass of fertiliser in A = 21/100 × 50 = 10,5 kg; in B = 27/100 × 40 = 10,8 kg; mass of P in A = 3/8 × 10,5 = 3,94 kg; in B = 3/8 × 10,8 = 4,05 kg. Bag B contains more phosphorus.",
    marking_notes: "Memo: mass fertiliser in A (1); in B (1); mass of P in A and B (1); final answer, B has more phosphorus (1). Alternative routes (percentage P = 3/8 × 21 = 7,88 % and 3/8 × 27 = 10,13 %; or same ratio so the bag with more nutrient mass has more P) are accepted.",
    steps: [
      st(1, "Mass of nutrients in Bag A", "21/100 × 50 = 10,5 kg", ["21 × 50 = 1050 kg", "21/100 × 40 = 8,4 kg", "50/21 = 2,38 kg"], 0),
      st(1, "Mass of nutrients in Bag B", "27/100 × 40 = 10,8 kg", ["27/100 × 50 = 13,5 kg", "27 × 40 = 1080 kg", "40/27 = 1,48 kg"], 1),
      st(1, "Mass of phosphorus in each bag (P is 3 of the 8 parts)", "A: 3/8 × 10,5 = 3,94 kg; B: 3/8 × 10,8 = 4,05 kg", ["A: 3/4 × 10,5 = 7,88 kg; B: 3/4 × 10,8 = 8,10 kg", "A: 1/8 × 10,5 = 1,31 kg; B: 1/8 × 10,8 = 1,35 kg", "A: 3/8 × 50 = 18,75 kg; B: 3/8 × 40 = 15 kg"], 0),
      st(1, "Conclusion", "Bag B contains more phosphorus than Bag A.", ["Bag A contains more phosphorus than Bag B (it is the heavier bag).", "Both bags contain the same mass of phosphorus (same ratio).", "It cannot be determined without the molar mass of phosphorus."], 0),
    ],
    image_url: `${IMG}/10.3-fertiliser-bags.png`,
  },
];
