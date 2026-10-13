// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2020, National
// (English/Afrikaans bilingual memo).
// Source: single combined PDF (question paper + data sheets + marking
// guideline) fetched from stanmorephysics.com. QP is pages 1-15 of that PDF,
// data sheets pages 16-19, memo pages 20-36 (cover cross-checked:
// "PHYSICAL SCIENCES: CHEMISTRY (P2)", "NOVEMBER 2020", MARKS: 150, TIME: 3
// hours). Memo question numbers and values match the question paper
// question-for-question (page-by-page check; no stray pages).
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included: Q1 20, Q2 12, Q3 15, Q4 15, Q5 16, Q6 18,
// Q7 20, Q8 14, Q9 8, Q10 12. The 2020 (COVID-year) paper is a normal-looking
// paper; nothing was trimmed.
//
// Grading: EVERY question is stepped multiple choice (`steps`), no
// `marking_points` anywhere. Calculation questions get one step per
// mark-earning point (formula, substitution, intermediate value, final
// answer); definitions / explanations get one step per memo mark point with
// four candidate statements; MCQ letter answers are a single step.
//
// Topic mapping: Q1.1-1.3, Q2, Q4 -> organic-chemistry; Q3 -> intermolecular-
// forces (3.2, 3.5, 3.6 are organic naming/functional-group items kept with
// the Q3 boiling-point theme); Q1.4/1.5, Q5.1-5.5 -> rate-of-reaction; Q5.6 ->
// stoichiometry; Q1.6, Q6 -> chemical-equilibrium; Q1.7, Q7 -> acids-and-bases;
// Q1.8/1.9, Q8, Q9 -> electrochemistry; Q1.10, Q10 -> chemical-industry
// (fertilisers, Haber/Ostwald, eutrophication, NPK ratio). No other topic-
// mapping gaps.
//
// Diagrams (1.3 structure options, 1.9 purification cell + graphs, Q2
// compounds table, Q3 boiling-point graph, Q4 flow diagram, Q5 experiments
// table and CO2 volume-time graph, Q8 galvanic cell, Q9 electroplating cell,
// Q10 fertiliser flow diagram) were cropped from 220dpi-style full-page
// renders into public/question-images/chemistry-2020-p2/. The Stanmorephysics
// plant-photo watermark beside the Q3 graph was cropped out and was painted
// white on the Q8 crop; the faint "Downloaded from" header watermark is not
// in any crop. 1.1, 1.2, 1.4-1.8, 1.10 are text-only.
//
// FLAG for review:
//  - 1.3: structures B and D are printed essentially identically in the
//    question paper (both H-C(=O)-O-CH2CH3); the memo answer is C
//    (CH3-C(=O)-O-CH3), which is unambiguous. Options are shown as letters
//    with the image.
//  - 3.5: the memo accepts only "Butanal" (curve B at 4 carbons = 373 K), but
//    curve C also reaches roughly 373 K at 8 carbons (octane). Transcribed per
//    memo; octane is deliberately NOT used as a distractor.
//  - 6.5: memo lists a final-answer RANGE (26 g - 27,94 g) in the mark
//    allocation but the worked answer is 26,543 g (initial n(I2) 0,1045 mol);
//    the step options use 26,54 g.
//  - 7.2.2: memo accepts 17,92 - 22,92 % but works to 18,08 %; 18,08 % used.
//    The memo treats "4,52% by volume" with "1 cm3 = 1 g" as 4,52 g per 100 g.
//    The memo's 7.2.1 working oddly labels the answer n(CH3COOH)diluted
//    (it is the unreacted acid); transcribed as the unreacted acid.
//  - 8.5 (4 marks) memo gives only "formula, substitution, answer" style
//    working with a 4-mark allocation; the split used here is formula (1),
//    cathode potential (1), anode potential (1), final value (1).
//  - 10.1.3: memo accepts iron / iron oxide / Fe / FeO; 'Iron (Fe)' used.
//  - 4.5.1 (5 marks): memo mark split (reactants, alcohol 2, NaCl) inferred
//    from its notes; the memo accepts 1-chloropropane -> primary alcohol only
//    if that reactant is used, whereas the diagram gives 2-chloropropane.
//  - 2.1.2: memo accepts pentanal, 2,2-dimethylpropanal, 2-methylbutanal and
//    3-methylbutanal; pentanal used as the single correct option.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";


const IMG = "/question-images/chemistry-2020-p2";

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
  year: 2020,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2021/06/Physical-Science-Grade-12-Nov-2020-P2-and-Memo.pdf" as string | null,
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

// Build a step: the correct option is inserted at index `at` among the three
// wrong ones so the correct position varies.
function st(
  marks: number,
  description: string,
  correct: string,
  wrong: [string, string, string],
  at: number,
): MarkingPointStep {
  const options = [...wrong];
  options.splice(at, 0, correct);
  return { marks, description, options, correctIndex: at };
}

// Fixed-order lettered step (A-D as printed); correctIndex = letter index.
function lettered(
  description: string,
  options: [string, string, string, string],
  correctIndex: number,
  marks = 2,
): MarkingPointStep {
  return { marks, description, options, correctIndex };
}


export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============
  {
    number: "1", sub_number: "1.1",
    text: "Which ONE of the following is the general formula for the alkanes? (A) CnH2n (B) CnH2n-2 (C) CnH2n+2 (D) CnH2n+2O",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "C — CnH2n+2. Alkanes are saturated hydrocarbons.",
    marking_notes: "Memo: C.",
    steps: [lettered("Choose the general formula of the alkanes.", ["CnH2n", "CnH2n-2", "CnH2n+2", "CnH2n+2O"], 2)],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The EMPIRICAL FORMULA of hexanoic acid is ... (A) C3H6O2 (B) C6H6O2 (C) C6H12O2 (D) C3H6O",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "D — C3H6O. Hexanoic acid is C6H12O2; dividing by the common factor 2 gives the simplest whole-number ratio C3H6O.",
    marking_notes: "Memo: D.",
    steps: [lettered("Choose the empirical formula of hexanoic acid (molecular formula C6H12O2).", ["C3H6O2", "C6H6O2", "C6H12O2", "C3H6O"], 3)],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Which ONE of the following is the CORRECT structural formula for METHYL ETHANOATE? Four structural formulae A-D are shown in the diagram (A: an acid-type structure ending in -O-H; B and D: H-C(=O)-O-CH2-CH3; C: CH3-C(=O)-O-CH3).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C — CH3-C(=O)-O-CH3. The 'ethanoate' part is the acid-derived CH3C(=O)-O- (2 carbons) and 'methyl' is the alcohol-derived -CH3 on the oxygen.",
    marking_notes: "Memo: C.",
    steps: [lettered("Which structure is methyl ethanoate?", ["A (an -O-H carboxylic acid structure)", "B (H-C(=O)-O-CH2CH3, ethyl methanoate)", "C (CH3-C(=O)-O-CH3)", "D (H-C(=O)-O-CH2CH3, ethyl methanoate)"], 2)],
    image_url: `${IMG}/1.3-methyl-ethanoate-structures.png`,
  },
  {
    number: "1", sub_number: "1.4",
    text: "Zn(s) + HCl(aq) -> ZnCl2(aq) + H2(g). Zinc granules (same mass) react with EXCESS HCl(aq). Which ONE of the following combinations of volume and concentration of HCl(aq) will result in the highest INITIAL reaction rate? (Zinc is completely covered by the acid in all cases.) (A) 50 cm3, 0,5 mol·dm-3 (B) 100 cm3, 1,0 mol·dm-3 (C) 200 cm3, 0,1 mol·dm-3 (D) 200 cm3, 0,5 mol·dm-3",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "B — 100 cm3 of 1,0 mol·dm-3. Initial rate depends on the CONCENTRATION of the acid (more particles per unit volume, more effective collisions), not on its volume.",
    marking_notes: "Memo: B.",
    steps: [lettered("Which acid sample gives the highest initial rate?", ["A: 50 cm3 of 0,5 mol·dm-3", "B: 100 cm3 of 1,0 mol·dm-3", "C: 200 cm3 of 0,1 mol·dm-3", "D: 200 cm3 of 0,5 mol·dm-3"], 1)],
  },
  {
    number: "1", sub_number: "1.5",
    text: "The role of a catalyst in a chemical reaction is to increase the ... (A) yield. (B) activation energy. (C) heat of reaction. (D) rate of the reaction.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "D — rate of the reaction. A catalyst lowers the activation energy, so the rate increases; yield and heat of reaction are unchanged.",
    marking_notes: "Memo: D.",
    steps: [lettered("A catalyst increases the ...", ["yield.", "activation energy.", "heat of reaction.", "rate of the reaction."], 3)],
  },
  {
    number: "1", sub_number: "1.6",
    text: "Consider the equilibrium 2CrO4^2-(aq) + 2H+(aq) <=> Cr2O7^2-(aq) + H2O(l), ΔH < 0. Which ONE of the following changes will favour the forward reaction? (A) Temperature decrease, pH increase (B) Temperature decrease, pH decrease (C) Temperature increase, pH increase (D) Temperature increase, pH decrease",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "B — decrease temperature, decrease pH. The forward reaction is exothermic (ΔH < 0), so lowering the temperature favours it; a decrease in pH means more H+, which also favours the forward reaction.",
    marking_notes: "Memo: B.",
    steps: [lettered("Which change favours the forward reaction?", ["Temperature decrease and pH increase", "Temperature decrease and pH decrease", "Temperature increase and pH increase", "Temperature increase and pH decrease"], 1)],
  },
  {
    number: "1", sub_number: "1.7",
    text: "The conjugate base of HPO4^2- is ... (A) OH- (B) PO4^3- (C) H2PO4- (D) H3PO4",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "B — PO4^3-. A conjugate base is formed when the acid loses one proton: HPO4^2- -> H+ + PO4^3-.",
    marking_notes: "Memo: B.",
    steps: [lettered("Choose the conjugate base of HPO4^2-.", ["OH-", "PO4^3-", "H2PO4-", "H3PO4"], 1)],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Which ONE of the following reactions will proceed spontaneously under standard conditions? (A) Ni2+(aq) + H2(g) -> Ni(s) + 2H+(aq) (B) Br2(l) + 2Cl-(aq) -> 2Br-(aq) + Cl2(g) (C) 2Fe3+(aq) + 2I-(aq) -> 2Fe2+(aq) + I2(s) (D) 2Cu+(aq) + Pb2+(aq) -> 2Cu2+(aq) + Pb(s)",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "C — 2Fe3+ + 2I- -> 2Fe2+ + I2. Fe3+ (E° = +0,77 V) is a stronger oxidising agent than I2 (E° = +0,54 V), so it oxidises I-; E°cell = +0,23 V > 0. The other three have negative E°cell.",
    marking_notes: "Memo: C.",
    steps: [lettered("Which reaction is spontaneous under standard conditions (E°cell > 0)?", ["Ni2+ + H2 -> Ni + 2H+", "Br2 + 2Cl- -> 2Br- + Cl2", "2Fe3+ + 2I- -> 2Fe2+ + I2", "2Cu+ + Pb2+ -> 2Cu2+ + Pb"], 2)],
  },
  {
    number: "1", sub_number: "1.9",
    text: "The diagram shows an electrochemical cell used for the PURIFICATION of copper (electrodes P and Q connected to a battery; the electrolyte is shown). Which ONE of the graphs A-D represents the CHANGE IN MASS of electrodes P and Q during the purification process?",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "A — Q (connected to the positive terminal, the impure copper anode) decreases in mass as Cu dissolves, while P (the cathode, connected to the negative terminal) increases in mass as pure copper is deposited.",
    marking_notes: "Memo: A.",
    steps: [lettered("Which graph shows Q (the anode) losing mass and P (the cathode) gaining mass?", ["A: Q decreases to zero, P increases from a non-zero starting mass", "B: P decreases to zero, Q increases from a non-zero starting mass", "C: Q decreases to zero, P increases from zero mass", "D: P decreases to zero, Q increases from zero mass"], 0)],
    image_url: `${IMG}/1.9-copper-purification-cell-and-graphs.png`,
  },
  {
    number: "1", sub_number: "1.10",
    text: "Eutrophication in water is caused by ... (A) algal bloom. (B) bacterial nitrogen fixation. (C) an increase in plant nutrients. (D) a depletion of oxygen concentration.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Comprehension",
    model_answer: "C — an increase in plant nutrients. Fertiliser run-off (nitrates and phosphates) causes eutrophication; algal bloom and oxygen depletion are consequences, not the cause.",
    marking_notes: "Memo: C.",
    steps: [lettered("Eutrophication is caused by ...", ["algal bloom.", "bacterial nitrogen fixation.", "an increase in plant nutrients.", "a depletion of oxygen concentration."], 2)],
  },

  // ============ QUESTION 2: ORGANIC COMPOUNDS TABLE (12 marks) ============
  // Table: A = 5-bromo-2,3-dimethylhexane structure; B = C3H8O (primary alcohol);
  // C = propyl butanoate structure; D = pentan-2-one; E = 4-methylpent-2-yne.
  {
    number: "2", sub_number: "2.1.1",
    text: "The table shows five organic compounds: A (a structural formula of a brominated, branched six-carbon chain), B (C3H8O, a primary alcohol), C (an ester structure, CH3CH2CH2-O-C(=O)-CH2CH2CH3), D (pentan-2-one) and E (4-methylpent-2-yne). For compound D, write down the homologous series to which it belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Ketones.",
    marking_notes: "Memo: Ketones.",
    steps: [st(1, "Homologous series of pentan-2-one", "Ketones", ["Aldehydes", "Alcohols", "Esters"], 0)],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "For compound D (pentan-2-one), write down the IUPAC name of a FUNCTIONAL ISOMER.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Pentanal (also accepted: 2,2-dimethylpropanal, 2-methylbutanal, 3-methylbutanal). Pentan-2-one (C5H10O) is a ketone; its functional isomers are aldehydes with the same formula.",
    marking_notes: "Memo marks: correct functional group (aldehyde, -al) 1; whole name correct 1.",
    steps: [st(2, "Which compound is a functional isomer of pentan-2-one (C5H10O)?", "Pentanal", ["Pentan-3-one", "Pentan-2-ol", "Pentanoic acid"], 1)],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Write down the IUPAC name of compound A (a six-carbon chain: CH3 groups on carbons 2 and 3 and a Br on carbon 5, as drawn in the table).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "5-bromo-2,3-dimethylhexane.",
    marking_notes: "Memo marks: correct stem (hexane) 1; all substituents (bromo and dimethyl) correctly identified 1; whole IUPAC name correct including numbering, order, hyphens and commas 1.",
    steps: [
      st(1, "Stem: what is the parent chain?", "Hexane (longest chain of 6 carbons)", ["Heptane", "Pentane", "Octane"], 0),
      st(1, "Which substituents are on the chain?", "One bromo and two methyl groups", ["One bromo and one ethyl group", "One bromo and three methyl groups", "Two bromo and one methyl group"], 1),
      st(1, "Which is the full correct IUPAC name?", "5-bromo-2,3-dimethylhexane", ["2-bromo-4,5-dimethylhexane", "3,4-dimethyl-2-bromohexane", "5-bromo-2,3-dimethylheptane"], 2),
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Write down the STRUCTURAL FORMULA of compound E (4-methylpent-2-yne).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-C≡C-CH(CH3)-CH3 drawn with all bonds: a five-carbon chain with a triple bond between C2 and C3 and a methyl group on C4.",
    marking_notes: "Memo: whole structure correct 2; only functional group (triple bond) correct max 1. Condensed formula max 1.",
    steps: [st(2, "Which structure is 4-methylpent-2-yne?", "CH3-C≡C-CH(CH3)-CH3", ["CH3-CH=CH-CH(CH3)-CH3", "HC≡C-CH(CH3)-CH2CH3", "CH3-C≡C-CH2-CH2-CH3"], 0)],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Compound B is a primary alcohol. Write down the meaning of the term primary alcohol.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "An alcohol in which the carbon atom bonded to the hydroxyl group (-OH) is bonded to only one other carbon atom.",
    marking_notes: "Memo: 2 or 0. Also accepted: -OH bonded to a C atom bonded to two H atoms / to a primary or first C atom.",
    steps: [st(2, "Which statement defines a primary alcohol?", "The C atom bonded to the -OH group is bonded to only one other C atom", ["The C atom bonded to the -OH group is bonded to two other C atoms", "The -OH group is bonded to the second carbon of the chain", "The molecule contains only one -OH group"], 2)],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Compound B (propan-1-ol) reacts with another organic compound X to form compound C (the ester propyl butanoate). Write down the type of reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Esterification (condensation).",
    marking_notes: "Memo: Esterification / condensation.",
    steps: [st(1, "Type of reaction forming an ester from an alcohol", "Esterification (condensation)", ["Hydrolysis", "Dehydration (elimination)", "Hydrogenation"], 3)],
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "Compound B (propan-1-ol) reacts with another organic compound X to form compound C (propyl butanoate). Write down the IUPAC name of compound X.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Butanoic acid.",
    marking_notes: "Memo: Butanoic acid.",
    steps: [st(1, "Name of the organic reactant X", "Butanoic acid", ["Propanoic acid", "Butan-1-ol", "Ethanoic acid"], 1)],
  },

  // ============ QUESTION 3: BOILING POINT GRAPH (15 marks) ============
  {
    number: "3", sub_number: "3.1",
    text: "The relationship between boiling point and the number of carbon atoms in straight chain molecules of aldehydes, alkanes and primary alcohols is investigated (curves A, B and C on the graph). Define the term boiling point.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "The temperature at which the vapour pressure of a substance equals atmospheric (external) pressure.",
    marking_notes: "Memo: if a key phrase (vapour pressure; equals atmospheric/external pressure) is omitted deduct 1.",
    steps: [st(2, "Which statement defines boiling point?", "The temperature at which the vapour pressure equals atmospheric (external) pressure", ["The temperature at which the vapour pressure is zero", "The temperature at which a liquid's intermolecular forces are completely broken", "The temperature at which a solid changes to a liquid at atmospheric pressure"], 0)],
    image_url: `${IMG}/3-boiling-point-graph.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Write down the STRUCTURAL FORMULA of the functional group of the aldehydes.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "-C(=O)H: a carbonyl carbon double-bonded to O and bonded to one H atom, at the end of the chain.",
    marking_notes: "Memo: structural formula of the -CHO group (C=O with H).",
    steps: [st(1, "Structural formula of the aldehyde functional group", "-C(=O)-H (carbonyl carbon bonded to one H)", ["-C(=O)- between two carbon atoms", "-C(=O)-O-H", "-O-H"], 1)],
  },
  {
    number: "3", sub_number: "3.3",
    text: "The graph shows that the boiling points increase as the number of carbon atoms increases. Fully explain this trend.",
    marks: 3, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "As the number of C atoms increases, the molecular mass/size/chain length/surface area increases; the strength of the intermolecular forces (London forces) increases; more energy is needed to overcome/break the intermolecular forces.",
    marking_notes: "Memo marks: increase in C atoms increases molecular size/surface area 1; strength of intermolecular forces increases 1; more energy needed to overcome them 1.",
    steps: [
      st(1, "What changes as the number of carbon atoms increases?", "Molecular size / chain length / surface area increases", ["The polarity of the molecule increases", "The number of hydrogen bonds per molecule decreases", "Covalent bonds within the molecule become stronger"], 0),
      st(1, "Effect on the intermolecular forces", "The strength of the intermolecular (London) forces increases", ["The strength of the intermolecular forces decreases", "Hydrogen bonds form between the chains", "The covalent bonds between atoms are broken"], 1),
      st(1, "Effect on the energy needed to boil", "More energy is needed to overcome the intermolecular forces", ["Less energy is needed to overcome the intermolecular forces", "More energy is needed to break the covalent bonds", "The same energy is needed since the functional group is unchanged"], 2),
    ],
    image_url: `${IMG}/3-boiling-point-graph.png`,
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "Identify the curve (A, B or C) that represents compounds with London forces only.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "C (the alkanes: lowest boiling points).",
    marking_notes: "Memo: C.",
    steps: [st(1, "Curve for the compounds with London forces only", "Curve C", ["Curve A", "Curve B", "Curves A and C"], 0)],
    image_url: `${IMG}/3-boiling-point-graph.png`,
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Identify the curve (A, B or C) that represents the aldehydes. Explain the answer.",
    marks: 4, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "B. Aldehydes have (in addition to London forces) dipole-dipole forces, which are stronger than London forces but weaker than hydrogen bonds. So aldehydes have lower boiling points than alcohols (A, hydrogen bonds), but higher boiling points than alkanes (C, London forces only).",
    marking_notes: "Memo marks: B 1; compare strength of intermolecular forces of A, B and C 1; compare B and A (alcohols have the highest boiling points / B needs less energy) 1; compare B and C (alkanes have the lowest boiling points / B needs more energy) 1.",
    steps: [
      st(1, "Which curve represents the aldehydes?", "Curve B", ["Curve A", "Curve C", "Curve A or B (they overlap)"], 1),
      st(1, "How do the intermolecular forces of A, B and C compare?", "Alcohols (A) have hydrogen bonds, aldehydes (B) have dipole-dipole + London forces, alkanes (C) have London forces only", ["Alcohols (A) have London forces only, aldehydes (B) have hydrogen bonds, alkanes (C) have dipole-dipole forces", "All three have the same type of forces; only the molecular size differs", "Aldehydes (B) have hydrogen bonds, alcohols (A) have dipole-dipole forces, alkanes (C) have London forces only"], 0),
      st(1, "Aldehydes (B) compared with alcohols (A)", "Aldehydes have lower boiling points: less energy is needed to overcome their weaker intermolecular forces", ["Aldehydes have higher boiling points: more energy is needed to overcome their stronger forces", "Aldehydes have the same boiling points because the chains are equally long", "Aldehydes have lower boiling points because their covalent bonds are weaker"], 2),
      st(1, "Aldehydes (B) compared with alkanes (C)", "Aldehydes have higher boiling points: dipole-dipole forces are stronger than London forces, so more energy is needed", ["Aldehydes have lower boiling points: their dipole-dipole forces are weaker than London forces", "Aldehydes have the same boiling points since both are non-ionic", "Aldehydes have higher boiling points because they form hydrogen bonds with each other"], 0),
    ],
    image_url: `${IMG}/3-boiling-point-graph.png`,
  },
  {
    number: "3", sub_number: "3.5",
    text: "Use the information in the graph and write down the IUPAC name of the compound with a boiling point of 373 K.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "Butanal (curve B, aldehydes, at 4 carbon atoms).",
    marking_notes: "Memo marks: correct stem (but-) 1; whole name correct 1. FLAG: curve C also reads about 373 K at 8 carbons, but the memo accepts only butanal.",
    steps: [st(2, "Compound with a boiling point of 373 K", "Butanal", ["Butan-1-ol", "Butane", "Pentanal"], 0)],
    image_url: `${IMG}/3-boiling-point-graph.png`,
  },
  {
    number: "3", sub_number: "3.6",
    text: "Write down the IUPAC name of the compound containing five carbon atoms which has the lowest vapour pressure at a given temperature.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "Pentan-1-ol (1-pentanol): the alcohol (curve A) has the strongest intermolecular forces / highest boiling point, so the lowest vapour pressure.",
    marking_notes: "Memo: Pentan-1-ol or 1-pentanol.",
    steps: [st(2, "Five-carbon compound with the lowest vapour pressure", "Pentan-1-ol", ["Pentanal", "Pentane", "Pentan-2-one"], 2)],
    image_url: `${IMG}/3-boiling-point-graph.png`,
  },

  // ============ QUESTION 4: ORGANIC FLOW DIAGRAM (15 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "The flow diagram shows how organic compounds can be prepared from compound P: P undergoes Reaction I (elimination) to give compound Q + C5H12; Q undergoes bromination to give compound R; Q undergoes hydrohalogenation to give CH3CHClCH3; CH3CHClCH3 undergoes hydrolysis to give compound S. Write down the meaning of the term hydrohalogenation.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "The addition of a hydrogen halide (HX) to an alkene (an addition reaction across the C=C double bond).",
    marking_notes: "Memo marks: addition reaction / reaction of an alkene or C=C 1; (addition of) hydrogen halide / HX 1.",
    steps: [
      st(1, "Type of reaction / reactant", "An addition reaction of an alkene (C=C double bond)", ["A substitution reaction of an alkane", "An elimination reaction of a haloalkane", "An addition reaction of an alcohol"], 0),
      st(1, "What is added?", "A hydrogen halide (HX)", ["A halogen (X2)", "Water (H2O)", "Hydrogen (H2)"], 2),
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Write down the STRUCTURAL FORMULA of compound Q (the alkene that gives CH3CHClCH3 on hydrohalogenation and forms with C5H12 from P).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propene: CH3-CH=CH2 drawn with all bonds.",
    marking_notes: "Memo: whole structure correct 2; only functional group (C=C) correct max 1.",
    steps: [st(2, "Structure of compound Q", "CH3-CH=CH2 (propene)", ["CH2=CH2 (ethene)", "CH3-CH2-CH3 (propane)", "CH3-C≡CH (propyne)"], 1)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Reaction I is an elimination reaction (P -> Q + C5H12). Write down the TYPE of elimination reaction.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Cracking.",
    marking_notes: "Memo: Cracking.",
    steps: [st(1, "Type of elimination reaction", "Cracking", ["Dehydrohalogenation", "Dehydration", "Dehydrogenation"], 0)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Write down the MOLECULAR FORMULA of compound P (cracked to give Q = propene, C3H6, and C5H12).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C8H18 (C3H6 + C5H12).",
    marking_notes: "Memo: C8H18.",
    steps: [st(1, "Molecular formula of P", "C8H18", ["C8H16", "C5H12", "C8H14"], 1)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.4",
    text: "Write down the IUPAC name of compound R (formed by bromination of propene).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "1,2-dibromopropane.",
    marking_notes: "Memo marks: correct stem (propane) 1; whole name correct 1.",
    steps: [st(2, "IUPAC name of compound R", "1,2-dibromopropane", ["1,3-dibromopropane", "2,2-dibromopropane", "1,1-dibromopropane"], 2)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.5.1",
    text: "For the HYDROLYSIS REACTION (CH3CHClCH3 -> compound S), write down the balanced equation using structural formulae.",
    marks: 5, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CHClCH3 + NaOH (or H2O) -> CH3CH(OH)CH3 (propan-2-ol) + NaCl (or HCl), all drawn with structural formulae.",
    marking_notes: "Memo: whole structure of the alcohol 2 (functional group only 1); organic reactant 1; NaOH/KOH/H2O reagent 1; NaCl/KCl/HCl product 1 (marked with the matching reagent). Condensed formula max 4; molecular formula 2; extra species max 4; omitted arrow max 4.",
    steps: [
      st(2, "Which reactants (organic reactant and reagent) are used?", "CH3CHClCH3 + NaOH(aq) (or H2O)", ["CH3CHClCH3 + concentrated NaOH in ethanol", "CH3CHClCH3 + HCl", "CH3CH=CH2 + NaOH(aq)"], 0),
      st(2, "Which organic product is formed?", "CH3CH(OH)CH3 (propan-2-ol)", ["CH3CH2CH2OH (propan-1-ol)", "CH3C(=O)CH3 (propanone)", "CH3CH=CH2 (propene)"], 1),
      st(1, "Which inorganic product is formed?", "NaCl (or HCl if water is used)", ["Cl2", "NaOH", "H2"], 3),
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.5.2",
    text: "For the HYDROLYSIS REACTION, write down TWO reaction conditions.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "(Mild) heat; dilute strong base (NaOH/KOH/LiOH) OR water.",
    marking_notes: "Memo: (mild) heat 1; dilute strong base or water 1.",
    steps: [
      st(1, "Condition 1: temperature", "(Mild) heat", ["Concentrated H2SO4 as a catalyst", "UV light", "A platinum catalyst under high pressure"], 0),
      st(1, "Condition 2: reagent", "Dilute strong base (e.g. NaOH) or water", ["Concentrated strong base dissolved in ethanol", "Concentrated sulfuric acid", "Hydrogen gas"], 2),
    ],
  },

  // ============ QUESTION 5: RATE OF REACTION (16 marks) ============
  {
    number: "5", sub_number: "5.1.1",
    text: "CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g). The same mass of CaCO3 is used in all experiments with EXCESS HCl at 40 °C. Experiments (500 cm3 of 0,1 mol·dm-3 HCl each): A granules, B lumps, C powder (see table). For this investigation write down the dependent variable.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "(Reaction) rate.",
    marking_notes: "Memo: (Reaction) rate.",
    steps: [st(1, "Dependent variable", "(Reaction) rate", ["State of division of CaCO3", "Concentration of the HCl", "Temperature of the HCl"], 0)],
    image_url: `${IMG}/5-experiments-table.png`,
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "For this investigation (experiments A granules, B lumps, C powder of CaCO3) write down the independent variable.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Surface area / state of division / particle size of CaCO3.",
    marking_notes: "Memo: Surface area / state of division / particle size.",
    steps: [st(1, "Independent variable", "Surface area (state of division / particle size) of CaCO3", ["Reaction rate", "Concentration of HCl", "Temperature"], 1)],
    image_url: `${IMG}/5-experiments-table.png`,
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "The CO2(g) produced in experiment A is collected in a gas syringe and measured every 20 s; the volume-time graph shows 300 cm3 at 20 s, 460 cm3 at 40 s and 500 cm3 from 60 s to 120 s. What can be deduced from the graph regarding the RATE OF THE REACTION during the interval 20 s to 40 s?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "The (decreasing gradient shows that the) rate of reaction is decreasing.",
    marking_notes: "Memo: rate is decreasing.",
    steps: [st(1, "Rate between 20 s and 40 s", "The rate is decreasing (gradient decreases)", ["The rate is increasing", "The rate is constant", "The rate is zero"], 2)],
    image_url: `${IMG}/5-co2-volume-time-graph.png`,
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "From the graph (volume of CO2 constant at 500 cm3 from 60 s to 120 s), what can be deduced regarding the RATE OF THE REACTION during the interval 60 s to 120 s?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "The rate is zero (gradient is zero: the reaction has stopped).",
    marking_notes: "Memo: rate is zero.",
    steps: [st(1, "Rate between 60 s and 120 s", "The rate is zero (gradient is zero)", ["The rate is at its maximum", "The rate is decreasing", "The rate is constant but not zero"], 0)],
    image_url: `${IMG}/5-co2-volume-time-graph.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "Calculate the average rate (in cm3·s-1) at which CO2(g) is produced in the experiment (the graph shows 500 cm3 collected in total, with the volume reaching 500 cm3 at 60 s).",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Average rate = ΔV/Δt = (500 - 0)/(60 - 0) = 8,33 cm3·s-1.",
    marking_notes: "Memo marks: formula (rate = ΔV/Δt) 1; substitution (500 - 0)/(60 - 0) 1; answer 8,33 cm3·s-1 1.",
    steps: [
      st(1, "Formula for average rate", "Average rate = ΔV/Δt", ["Average rate = Δt/ΔV", "Average rate = ΔV × Δt", "Average rate = V/(Δt)²"], 0),
      st(1, "Substitution (the reaction is complete at 60 s)", "(500 - 0)/(60 - 0)", ["(500 - 0)/(120 - 0)", "(460 - 0)/(60 - 0)", "(500 - 300)/(60 - 20)"], 1),
      st(1, "Average rate", "8,33 cm3·s-1", ["4,17 cm3·s-1", "7,67 cm3·s-1", "5,00 cm3·s-1"], 2),
    ],
    image_url: `${IMG}/5-co2-volume-time-graph.png`,
  },
  {
    number: "5", sub_number: "5.4",
    text: "How will the volume of CO2(g) produced in experiment B (lumps, same mass of CaCO3, excess HCl) compare to that produced in experiment A (granules)? Choose from GREATER THAN, SMALLER THAN or EQUAL TO.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Equal to. The same mass of CaCO3 is used and the acid is in excess, so the same amount of CO2 forms; only the rate differs.",
    marking_notes: "Memo: Equal to.",
    steps: [st(1, "Volume of CO2 in B compared to A", "Equal to", ["Greater than", "Smaller than", "Cannot be compared without the concentration"], 1)],
  },
  {
    number: "5", sub_number: "5.5",
    text: "A graph is now drawn for experiment C (powder) on the same axes. How will the gradient of this graph compare to the gradient of the graph for experiment A (granules)? Choose from GREATER THAN, SMALLER THAN or EQUAL TO. Use the collision theory to fully explain the answer.",
    marks: 4, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Greater than. Powder has a greater surface area than granules, so more particles are exposed (more with the correct orientation); more effective collisions per unit time (higher frequency); so the reaction rate increases.",
    marking_notes: "Memo marks: greater than 1; surface area of powder greater / more particles exposed 1; more effective collisions per unit time 1; increase in rate 1.",
    steps: [
      st(1, "Gradient for C compared to A", "Greater than", ["Smaller than", "Equal to", "Zero"], 0),
      st(1, "Reason related to surface area", "Powder has a greater surface area, so more particles are exposed", ["Powder has a higher activation energy, so more particles are exposed", "Powder has a higher concentration of CaCO3 particles per unit volume of acid, so the acid is in excess", "Powder has a smaller surface area so the particles are packed more closely"], 1),
      st(1, "Collision theory", "More effective collisions per unit time (higher frequency of effective collisions)", ["Particles collide with greater kinetic energy", "Fewer collisions occur but each is more effective", "The activation energy of the collisions is lowered"], 2),
      st(1, "Conclusion", "The reaction rate increases", ["The reaction rate decreases", "The amount of CO2 produced increases", "The reaction rate stays the same"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Assume that the molar gas volume at 40 °C is 25,7 dm3·mol-1. Calculate the mass of CaCO3(s) used in experiment A (500 cm3 of CO2 produced in total).",
    marks: 4, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "n(CO2) = V/Vm = 0,5/25,7 = 0,0195 mol; n(CaCO3) = n(CO2) = 0,0195 mol; m(CaCO3) = nM = 0,0195(100) = 1,95 g.",
    marking_notes: "Memo marks: divide volume by 25,7 1; ratio n(CO2) = n(CaCO3) 1; substitute M = 100 g·mol-1 in m = nM 1; final answer 1,95 g (range 1,95 to 2 g) 1.",
    steps: [
      st(1, "Moles of CO2 produced", "n = 0,5 dm3 / 25,7 dm3·mol-1 = 0,0195 mol", ["n = 0,5 dm3 / 22,4 dm3·mol-1 = 0,0223 mol", "n = 500 dm3 / 25,7 dm3·mol-1 = 19,46 mol", "n = 25,7 dm3 / 0,5 dm3 = 51,4 mol"], 0),
      st(1, "Mole ratio from the equation", "n(CaCO3) = n(CO2) (1 : 1)", ["n(CaCO3) = 2n(CO2) (1 : 2)", "n(CaCO3) = ½n(CO2) (2 : 1)", "n(CaCO3) = n(HCl)"], 1),
      st(1, "Molar mass of CaCO3 used in m = nM", "M = 100 g·mol-1", ["M = 84 g·mol-1", "M = 40 g·mol-1", "M = 56 g·mol-1"], 2),
      st(1, "Mass of CaCO3", "1,95 g", ["0,98 g", "3,90 g", "2,23 g"], 0),
    ],
  },

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (18 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "The dissociation of iodine molecules to iodine atoms is a reversible reaction in a sealed container at 727 °C: I2(g) <=> 2I(g), Kc = 3,76 x 10-3. Write down the meaning of the term reversible reaction.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "A reaction in which products can be converted back to reactants (both the forward and reverse reactions can take place).",
    marking_notes: "Memo: products can be converted back to reactants / both forward and reverse reactions can take place / can take place in both directions.",
    steps: [st(1, "Meaning of reversible reaction", "Products can be converted back to reactants (the reaction can proceed in both directions)", ["A reaction that goes to completion in the forward direction only", "A reaction in which the rates of the forward and reverse reactions are zero", "A reaction in which the reactants are used up completely"], 0)],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "At equilibrium the pressure of the system I2(g) <=> 2I(g) is increased by decreasing the volume of the container at constant temperature. How will the value of the equilibrium constant be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same: Kc depends only on temperature.",
    marking_notes: "Memo: Remains the same.",
    steps: [st(1, "Effect on Kc", "Remains the same", ["Increases", "Decreases", "Becomes zero"], 2)],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "At equilibrium the pressure of the system I2(g) <=> 2I(g) is increased by decreasing the volume at constant temperature. How will the number of I2 molecules be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Increases: the reverse reaction (fewer gas molecules) is favoured.",
    marking_notes: "Memo: Increases.",
    steps: [st(1, "Effect on the number of I2 molecules", "Increases", ["Decreases", "Remains the same", "Increases and then returns to its original value"], 1)],
  },
  {
    number: "6", sub_number: "6.3",
    text: "Explain the answer to 6.2.2 by referring to Le Chatelier's principle.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "When the pressure is increased, the reaction that leads to the smaller amount of gas (fewer moles/molecules) is favoured; 1 mol I2 versus 2 mol I, so the reverse reaction is favoured.",
    marking_notes: "Memo marks: reaction leading to the smaller amount of gas / fewer molecules is favoured 1; reverse reaction favoured 1.",
    steps: [
      st(1, "Le Chatelier: effect of an increase in pressure", "The side with the smaller number of gas moles/molecules is favoured", ["The side with the larger number of gas moles/molecules is favoured", "The endothermic reaction is favoured", "The reaction rate of both reactions decreases equally"], 0),
      st(1, "Which reaction is favoured here?", "The reverse reaction (2I -> I2)", ["The forward reaction (I2 -> 2I)", "Neither: Kc stays the same so nothing changes", "Both reactions are favoured equally"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "At 227 °C the Kc value for I2(g) <=> 2I(g) is 5,6 x 10-12 (it is 3,76 x 10-3 at 727 °C). Is the forward reaction ENDOTHERMIC or EXOTHERMIC? Fully explain the answer.",
    marks: 4, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Endothermic. Kc decreases with a decrease in temperature, so the reverse reaction is favoured (concentration of reactants increases, yield decreases); a decrease in temperature favours an exothermic reaction, so the reverse is exothermic and the forward reaction is endothermic.",
    marking_notes: "Memo marks: endothermic 1; Kc decreases with decrease in temperature 1; reverse reaction favoured / [reactants] increase / yield decreases 1; decrease in temperature favours an exothermic reaction 1. (Equivalent route via an increase in temperature accepted.)",
    steps: [
      st(1, "Forward reaction", "Endothermic", ["Exothermic", "Neither: Kc is independent of temperature", "Cannot be determined from Kc"], 0),
      st(1, "What happens to Kc from 727 °C to 227 °C?", "Kc decreases as the temperature decreases", ["Kc increases as the temperature decreases", "Kc stays the same", "Kc decreases as the temperature increases"], 1),
      st(1, "Effect on the equilibrium", "The reverse reaction is favoured (more reactant, less product)", ["The forward reaction is favoured (more product)", "Both rates become equal", "The system moves to the side with fewer moles of gas"], 2),
      st(1, "Link to energy change", "A decrease in temperature favours the exothermic reaction", ["A decrease in temperature favours the endothermic reaction", "A decrease in temperature favours the reaction with fewer gas moles", "A decrease in temperature has no effect on which reaction is favoured"], 3),
    ],
  },
  {
    number: "6", sub_number: "6.5",
    text: "A certain mass of iodine molecules (I2) is sealed in a 12,3 dm3 flask at 727 °C (Kc = 3,76 x 10-3) and I2(g) <=> 2I(g). When equilibrium is reached, the concentration of the iodine atoms is 4,79 x 10-3 mol·dm-3. Calculate the INITIAL MASS of the iodine molecules in the flask.",
    marks: 9, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Kc = [I]²/[I2]; 3,76 x 10-3 = (4,79 x 10-3)²/[I2], so [I2]eq = 6,102 x 10-3 mol·dm-3. n(I2)eq = 0,0751 mol; n(I)eq = 0,0589 mol. Change in n(I) = 0,0589 mol, so change in n(I2) = 0,0295 mol (ratio 1 : 2). Initial n(I2) = 0,0751 + 0,0295 = 0,1045 mol. m = nM = 0,1045(254) = 26,54 g.",
    marking_notes: "Memo marks: Kc expression 1; substitution of equilibrium concentrations 1; substitution of Kc 1; multiply concentrations by 12,3 dm3 1; change in n(I) = n(I at equilibrium) 1; ratio I2 : I = 1 : 2 1; initial n(I2) = equilibrium n(I2) + change 1; M = 254 g·mol-1 1; final answer 26,54 g (range 26 to 27,94 g) 1. Wrong Kc expression max 6; no Kc expression but correct substitution max 8.",
    steps: [
      st(1, "Kc expression", "Kc = [I]²/[I2]", ["Kc = [I2]/[I]²", "Kc = [I]/[I2]", "Kc = 2[I]/[I2]"], 1),
      st(1, "Substitution of the equilibrium [I] and Kc", "3,76 x 10-3 = (4,79 x 10-3)²/[I2]", ["3,76 x 10-3 = [I2]/(4,79 x 10-3)²", "3,76 x 10-3 = (4,79 x 10-3)/[I2]", "3,76 x 10-3 = (2 x 4,79 x 10-3)²/[I2]"], 0),
      st(1, "Equilibrium concentration of I2", "6,10 x 10-3 mol·dm-3", ["1,27 mol·dm-3", "8,63 x 10-8 mol·dm-3", "163,9 mol·dm-3"], 2),
      st(1, "Equilibrium amounts (x 12,3 dm3)", "n(I2) = 0,0751 mol; n(I) = 0,0589 mol", ["n(I2) = 6,10 x 10-3 mol; n(I) = 4,79 x 10-3 mol (volume ignored)", "n(I2) = 0,0751 mol; n(I) = 0,0295 mol", "n(I2) = 0,0589 mol; n(I) = 0,0751 mol"], 0),
      st(1, "Change in n(I) (none present initially)", "0,0589 mol (equal to n(I) at equilibrium)", ["0,0751 mol", "0,0295 mol", "0 mol"], 1),
      st(1, "Change in n(I2) using I2 : I = 1 : 2", "0,0295 mol", ["0,0589 mol", "0,118 mol", "0,0751 mol"], 2),
      st(1, "Initial n(I2)", "0,0751 + 0,0295 = 0,1045 mol", ["0,0751 mol", "0,0751 + 0,0589 = 0,134 mol", "0,0751 - 0,0295 = 0,0456 mol"], 0),
      st(1, "Molar mass of I2", "254 g·mol-1", ["127 g·mol-1", "508 g·mol-1", "126,9 g·mol-1 (that is for one I atom)"], 1),
      st(1, "Initial mass of I2", "26,54 g", ["19,08 g", "34,04 g", "11,58 g"], 3),
    ],
  },

  // ============ QUESTION 7: ACIDS AND BASES (20 marks) ============
  {
    number: "7", sub_number: "7.1.1",
    text: "Ethanoic acid (CH3COOH) is an ingredient of household vinegar. Is ethanoic acid a WEAK acid or a STRONG acid? Give a reason for the answer.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "Weak: it ionises (dissociates) incompletely/partially in water.",
    marking_notes: "Memo marks: weak 1; ionises/dissociates incompletely in water 1.",
    steps: [
      st(1, "Weak or strong?", "Weak acid", ["Strong acid", "Neither: it is a base", "Strong acid, because it contains an -OH group"], 0),
      st(1, "Reason", "It ionises (dissociates) incompletely in water", ["It ionises completely in water", "It has a low molar mass", "It contains only one hydrogen atom"], 1),
    ],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "An ethanoic acid solution has a pH of 3,85 at 25 °C. Calculate the concentration of the hydronium ions, H3O+(aq), in the solution.",
    marks: 3, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "pH = -log[H3O+]; 3,85 = -log[H3O+]; [H3O+] = 10^-3,85 = 1,41 x 10-4 mol·dm-3.",
    marking_notes: "Memo marks: formula pH = -log[H3O+] 1; substitution 3,85 = -log[H3O+] 1; answer 1,41 x 10-4 mol·dm-3 1.",
    steps: [
      st(1, "Formula", "pH = -log[H3O+]", ["pH = log[H3O+]", "pH = -ln[H3O+]", "pH = [H3O+]/14"], 0),
      st(1, "Rearranged substitution", "[H3O+] = 10^-3,85", ["[H3O+] = 10^3,85", "[H3O+] = 10^-(14 - 3,85)", "[H3O+] = log 3,85"], 1),
      st(1, "Concentration of H3O+", "1,41 x 10-4 mol·dm-3", ["7,08 x 10-11 mol·dm-3", "7,08 x 103 mol·dm-3", "5,85 x 10-1 mol·dm-3"], 2),
    ],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Sodium ethanoate, CH3COONa(aq), forms when ethanoic acid reacts with sodium hydroxide. Will the pH of a sodium ethanoate solution be GREATER THAN 7, LESS THAN 7 or EQUAL TO 7?",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "Greater than 7.",
    marking_notes: "Memo: Greater than 7.",
    steps: [st(1, "pH of CH3COONa(aq)", "Greater than 7", ["Less than 7", "Equal to 7", "Equal to 14"], 0)],
  },
  {
    number: "7", sub_number: "7.1.4",
    text: "Explain the answer to 7.1.3 with the aid of a balanced chemical equation.",
    marks: 3, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq) (or CH3COONa + H2O <=> CH3COOH + NaOH). Hydroxide ions form, so the solution is basic/alkaline (pH > 7).",
    marking_notes: "Memo: balanced hydrolysis equation 2; formation of OH- / solution is basic (pH > 7) 1. (Mark split between equation and reason inferred.)",
    steps: [
      st(2, "Hydrolysis equation", "CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)", ["CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + H3O+(aq)", "CH3COOH(aq) + H2O(l) <=> CH3COO-(aq) + OH-(aq)", "Na+(aq) + H2O(l) <=> NaOH(aq) + H+(aq)"], 0),
      st(1, "Reason for pH > 7", "OH- ions form, so the solution is basic", ["H3O+ ions form, so the solution is acidic", "Na+ ions react with water to form a base", "The ethanoate ion is neutral and does not react"], 1),
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "Household vinegar contains 4,52% ethanoic acid by volume. A 1,2 g impure sample of CaCO3 is added to 25 cm3 of household vinegar. On completion of the reaction, the EXCESS ethanoic acid is neutralised by 14,5 cm3 of NaOH(aq) of concentration 1 mol·dm-3: CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l). Calculate the number of moles of the unreacted ethanoic acid.",
    marks: 3, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "n(NaOH) = cV = 1(0,0145) = 0,0145 mol; ratio CH3COOH : NaOH = 1 : 1, so n(CH3COOH) unreacted = 0,0145 mol.",
    marking_notes: "Memo marks: substitute 1 x 0,0145 in n = cV 1; ratio n(CH3COOH) : n(NaOH) = 1 : 1 1; answer 0,0145 mol 1.",
    steps: [
      st(1, "Moles of NaOH used", "n = cV = 1 x 0,0145 = 0,0145 mol", ["n = cV = 1 x 14,5 = 14,5 mol", "n = c/V = 1/0,0145 = 69 mol", "n = cV = 1 x 0,025 = 0,025 mol"], 0),
      st(1, "Mole ratio", "n(CH3COOH) : n(NaOH) = 1 : 1", ["n(CH3COOH) : n(NaOH) = 2 : 1", "n(CH3COOH) : n(NaOH) = 1 : 2", "n(CH3COOH) : n(NaOH) = 2 : 3"], 1),
      st(1, "Unreacted ethanoic acid", "0,0145 mol", ["0,029 mol", "0,00725 mol", "0,0188 mol"], 2),
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Calcium carbonate reacts with ethanoic acid: CaCO3(s) + 2CH3COOH(aq) -> (CH3COO)2Ca(aq) + H2O + CO2(g). Using the 25 cm3 of 4,52% (by volume) vinegar, the 1,2 g impure CaCO3 sample, and the 0,0145 mol of unreacted ethanoic acid from 7.2.1, calculate the percentage calcium carbonate in the impure sample if 1 cm3 of household vinegar has a mass of 1 g.",
    marks: 8, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "m(CH3COOH) in 25 cm3 = 4,52/100 x 25 = 1,13 g; n(initial) = m/M = 1,13/60 = 0,01883 mol; n(reacted) = 0,01883 - 0,0145 = 0,0043 mol; n(CaCO3) = ½(0,0043) = 0,00217 mol; m(CaCO3) = nM = 0,00217(100) = 0,217 g; % CaCO3 = 0,217/1,2 x 100 = 18,08 %.",
    marking_notes: "Memo marks (positive marking from 7.2.1): mass of CH3COOH in 25 cm3 (1,13 g) 1; n = m/M 1; M = 60 g·mol-1 1; n reacted = n initial - n unreacted 1; ratio n(CaCO3) : n(CH3COOH) = 1 : 2 1; M(CaCO3) = 100 g·mol-1 in m = nM 1; percentage formula (0,217/1,2 x 100) 1; final answer 18,08 % (range 17,92 to 22,92 %) 1.",
    steps: [
      st(1, "Mass of ethanoic acid in 25 cm3 vinegar", "1,13 g", ["4,52 g", "0,113 g", "113 g"], 1),
      st(1, "Formula for moles from mass", "n = m/M", ["n = M/m", "n = m x M", "n = m/Vm"], 0),
      st(1, "Molar mass of CH3COOH", "60 g·mol-1", ["46 g·mol-1", "30 g·mol-1", "88 g·mol-1"], 2),
      st(1, "Moles of acid that reacted with CaCO3", "0,01883 - 0,0145 = 0,0043 mol", ["0,01883 + 0,0145 = 0,0333 mol", "0,0145 mol", "0,01883 mol"], 0),
      st(1, "Mole ratio and n(CaCO3)", "n(CaCO3) = ½ x 0,0043 = 0,00217 mol", ["n(CaCO3) = 2 x 0,0043 = 0,0086 mol", "n(CaCO3) = 0,0043 mol", "n(CaCO3) = ½ x 0,0333 = 0,0167 mol"], 1),
      st(1, "Mass of CaCO3 (M = 100 g·mol-1)", "0,217 g", ["0,182 g", "0,0868 g", "0,434 g"], 3),
      st(1, "Percentage formula", "% CaCO3 = (0,217/1,2) x 100", ["% CaCO3 = (1,2/0,217) x 100", "% CaCO3 = (0,217/25) x 100", "% CaCO3 = (0,217/1,13) x 100"], 0),
      st(1, "Percentage CaCO3", "18,08 %", ["36,17 %", "15,17 %", "0,18 %"], 2),
    ],
  },

  // ============ QUESTION 8: GALVANIC CELL (14 marks) ============
  {
    number: "8", sub_number: "8.1",
    text: "The diagram shows a galvanic cell set up under standard conditions: a hydrogen gas/platinum/H+(aq) half-cell and an Mg/Mg2+(aq) half-cell joined by component X, with a voltmeter V. Component X completes the circuit in the cell. State ONE other function of component X.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "It provides a path for the movement of ions / it ensures electrical neutrality in the cell.",
    marking_notes: "Memo: Provides path for movement of ions / ensures (electrical) neutrality.",
    steps: [st(1, "Another function of the salt bridge (X)", "Allows ions to move between the half-cells, keeping the solutions electrically neutral", ["Allows electrons to flow between the half-cells", "Supplies H+ ions to the hydrogen electrode", "Increases the potential difference of the cell"], 0)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Define the term anode.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "The electrode where oxidation takes place (electrons are lost).",
    marking_notes: "Memo: (The electrode) where oxidation takes place / electrons are lost. 2 or 0.",
    steps: [st(2, "Definition of anode", "The electrode where oxidation takes place", ["The electrode where reduction takes place", "The electrode connected to the positive terminal of the voltmeter", "The electrode where electrons are gained"], 0)],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Identify the anode in the cell above (Mg in Mg2+(aq) and Pt in H+(aq)/H2(g)).",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Mg (magnesium), the stronger reducing agent, which is oxidised.",
    marking_notes: "Memo: Mg / Magnesium.",
    steps: [st(1, "Anode", "Mg (magnesium)", ["Platinum (Pt)", "Hydrogen gas, H2", "Mg2+(aq)"], 2)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.4.1",
    text: "Write down the reduction half-reaction that takes place in this cell (Mg/Mg2+ and H2/H+ half-cells).",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "2H+ + 2e- -> H2",
    marking_notes: "Memo: 2H+ + 2e- -> H2 (2); with reversible arrow max 1; if the reaction is reversed (oxidation) 0; ignore if the charge is omitted on the electron.",
    steps: [st(2, "Reduction half-reaction", "2H+ + 2e- -> H2", ["H2 -> 2H+ + 2e-", "Mg -> Mg2+ + 2e-", "Mg2+ + 2e- -> Mg"], 0)],
  },
  {
    number: "8", sub_number: "8.4.2",
    text: "Write down the NAME or FORMULA of the reducing agent in this cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Magnesium / Mg (it is oxidised and so causes the reduction of H+).",
    marking_notes: "Memo: Magnesium / Mg.",
    steps: [st(1, "Reducing agent", "Magnesium (Mg)", ["Hydrogen ions (H+)", "Hydrogen gas (H2)", "Magnesium ions (Mg2+)"], 3)],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Calculate the initial voltmeter reading of this cell (Mg|Mg2+ and H2|H+) under standard conditions.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°reduction - E°oxidation = 0 - (-2,36) = +2,36 V.",
    marking_notes: "Memo marks: any correct E°cell formula from the data sheet; substitutions; answer 2,36 V (positive). Option 2 (add half-cell potentials) accepted. Mark split here: formula 1, cathode value 1, anode value 1, answer 1.",
    steps: [
      st(1, "Formula", "E°cell = E°reduction - E°oxidation (cathode - anode)", ["E°cell = E°oxidation - E°reduction", "E°cell = E°reduction + E°oxidation", "E°cell = E°anode x E°cathode"], 0),
      st(1, "E° value for the cathode (H+/H2)", "0 V", ["+2,36 V", "-2,36 V", "+0,34 V"], 1),
      st(1, "E° value for the anode (Mg2+/Mg)", "-2,36 V", ["+2,36 V", "-0,76 V", "0 V"], 0),
      st(1, "Initial voltmeter reading", "+2,36 V", ["-2,36 V", "+1,18 V", "+4,72 V"], 2),
    ],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.6",
    text: "The Mg|Mg2+ half-cell is now replaced by a Cu|Cu2+ half-cell. It is found that the direction of electron flow changes. Fully explain why there is a change in direction of electron flow by referring to the relative strengths of the reducing agents involved.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "H2 is a stronger reducing agent than Cu, and therefore Cu2+ ions are reduced / H2 is oxidised. Electrons flow from H2 to Cu.",
    marking_notes: "Memo marks: H2 is a stronger reducing agent than Cu 1; Cu2+ reduced / H2 oxidised 1; electrons flow from H2 to Cu 1.",
    steps: [
      st(1, "Relative strengths of the reducing agents", "H2 is a stronger reducing agent than Cu", ["Cu is a stronger reducing agent than H2", "H2 is a stronger oxidising agent than Cu2+", "H2 and Cu are equally strong reducing agents"], 0),
      st(1, "Which species are oxidised and reduced?", "H2 is oxidised and Cu2+ is reduced", ["Cu is oxidised and H+ is reduced", "H2 is reduced and Cu2+ is oxidised", "Cu2+ and H+ are both reduced"], 1),
      st(1, "Direction of electron flow", "Electrons flow from the H2 half-cell to the Cu half-cell", ["Electrons flow from the Cu half-cell to the H2 half-cell", "Electrons flow through the salt bridge", "Electrons stop flowing"], 2),
    ],
  },

  // ============ QUESTION 9: ELECTROPLATING (8 marks) ============
  {
    number: "9", sub_number: "9.1",
    text: "The diagram shows an electrolytic cell used to electroplate a copper (Cu) coin with silver (Ag): a battery, a silver electrode, a copper coin and an electrolyte. Define the term electrolysis.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "The chemical process in which electrical energy is converted to chemical energy (or: the use of electrical energy to produce a chemical change).",
    marking_notes: "Memo: any one of the accepted definitions, 2 or 0.",
    steps: [st(2, "Definition of electrolysis", "The chemical process in which electrical energy is converted to chemical energy", ["The chemical process in which chemical energy is converted to electrical energy", "The process in which a metal is coated with another metal using a galvanic cell", "The loss of electrons by a substance at the anode"], 0)],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.2",
    text: "Which component in the diagram indicates that this is an electrolytic cell?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "The battery / cell / power source.",
    marking_notes: "Memo: Battery / cell / power source.",
    steps: [st(1, "Component indicating an electrolytic cell", "The battery (power source)", ["The silver electrode", "The copper coin", "The electrolyte"], 0)],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.3",
    text: "Write down the NAME or FORMULA of the electrolyte (for electroplating a copper coin with silver).",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Silver nitrate / AgNO3 (also accepted: silver ethanoate, silver fluoride, silver perchlorate).",
    marking_notes: "Memo: AgNO3 / silver nitrate / CH3COOAg / AgF / AgClO4.",
    steps: [st(1, "Electrolyte", "Silver nitrate, AgNO3", ["Copper(II) sulfate, CuSO4", "Copper(II) nitrate, Cu(NO3)2", "Silver chloride, AgCl"], 1)],
  },
  {
    number: "9", sub_number: "9.4",
    text: "How will the concentration of the electrolyte change during electroplating? Choose from INCREASES, DECREASES or REMAINS THE SAME. Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same: the rate of oxidation (Ag -> Ag+ at the silver anode) equals the rate of reduction (Ag+ -> Ag at the coin).",
    marking_notes: "Memo marks: remains the same 1; rate of oxidation equals rate of reduction 1.",
    steps: [
      st(1, "Change in electrolyte concentration", "Remains the same", ["Increases", "Decreases", "Decreases at first, then increases"], 0),
      st(1, "Reason", "The rate of oxidation equals the rate of reduction (Ag+ ions are used up as fast as they are formed)", ["Silver ions are not involved in the reactions", "The coin releases Cu2+ ions to replace the Ag+ ions", "Electrons are not used up in the solution"], 1),
    ],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },
  {
    number: "9", sub_number: "9.5",
    text: "Write down the balanced equation of the half-reaction that takes place at the silver electrode (the anode).",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Ag -> Ag+ + e-",
    marking_notes: "Memo: Ag -> Ag+ + e- (2); with reversible arrow max 1; reversed reaction 0; ignore if the charge is omitted on the electron.",
    steps: [st(2, "Half-reaction at the silver electrode", "Ag -> Ag+ + e-", ["Ag+ + e- -> Ag", "Ag -> Ag2+ + 2e-", "Cu -> Cu2+ + 2e-"], 0)],
    image_url: `${IMG}/9-electroplating-cell.png`,
  },

  // ============ QUESTION 10: CHEMICAL INDUSTRY (12 marks) ============
  {
    number: "10", sub_number: "10.1.1",
    text: "The flow diagram shows how fertiliser B is produced: raw material S gives nitrogen; raw material T gives hydrogen; nitrogen and hydrogen react in process 1 to give compound A; compound A undergoes process 2 to give nitric acid; compound A and nitric acid give fertiliser B. Write down the NAME of S.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "(Liquid) air.",
    marking_notes: "Memo: (Liquid) air.",
    steps: [st(1, "Raw material S (source of nitrogen)", "(Liquid) air", ["Natural gas", "Water", "Ammonia"], 0)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "In the fertiliser B flow diagram, raw material T gives hydrogen. Write down the NAME of T.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Natural gas / methane / oil / coal / coke.",
    marking_notes: "Memo: Natural gas / methane / oil / coal / coke.",
    steps: [st(1, "Raw material T (source of hydrogen)", "Natural gas (methane)", ["(Liquid) air", "Limestone", "Sulfur"], 1)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "Write down the NAME or FORMULA of the catalyst used in process 1 (nitrogen + hydrogen -> compound A).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Iron / Fe (also accepted: iron oxide / FeO).",
    marking_notes: "Memo: Iron / iron oxide / Fe / FeO.",
    steps: [st(1, "Catalyst in process 1 (Haber process)", "Iron (Fe)", ["Platinum (Pt)", "Vanadium(V) oxide (V2O5)", "Nickel (Ni)"], 2)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.4",
    text: "Write down the NAME or FORMULA of compound A (formed from nitrogen and hydrogen, and converted to nitric acid in process 2).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "NH3 / ammonia.",
    marking_notes: "Memo: NH3 / Ammonia.",
    steps: [st(1, "Compound A", "NH3 (ammonia)", ["NO2 (nitrogen dioxide)", "NH4NO3 (ammonium nitrate)", "N2O (dinitrogen oxide)"], 0)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.5",
    text: "Write down the NAME of process 2 (compound A -> nitric acid).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Ostwald (process).",
    marking_notes: "Memo: Ostwald (process).",
    steps: [st(1, "Process 2", "Ostwald process", ["Haber process", "Contact process", "Fractional distillation"], 3)],
    image_url: `${IMG}/10-fertiliser-flow-diagram.png`,
  },
  {
    number: "10", sub_number: "10.1.6",
    text: "Write down the balanced equation for the formation of fertiliser B (compound A, ammonia, reacts with nitric acid).",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "NH3 + HNO3 -> NH4NO3",
    marking_notes: "Memo marks: reactants 1; product 1; balancing 1. Ignore double arrows.",
    steps: [
      st(1, "Reactants", "NH3 and HNO3", ["NH3 and HCl", "N2 and HNO3", "NH4OH and HNO2"], 0),
      st(1, "Product (fertiliser B)", "NH4NO3", ["NH4Cl", "(NH4)2SO4", "NaNO3"], 1),
      st(1, "Balanced equation", "NH3 + HNO3 -> NH4NO3", ["2NH3 + HNO3 -> NH4NO3", "NH3 + 2HNO3 -> NH4NO3", "NH3 + HNO3 -> NH4NO2"], 2),
    ],
  },
  {
    number: "10", sub_number: "10.2.1",
    text: "A 20 kg bag of fertiliser is labelled as follows: 2 : 4 : 3 (X). What does the ratio on the label represent?",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "The NPK ratio (the ratio of the primary nutrients nitrogen : phosphorus : potassium).",
    marking_notes: "Memo: NPK ratio / ratio of primary nutrients.",
    steps: [st(1, "Meaning of the ratio on the label", "The NPK ratio: nitrogen : phosphorus : potassium", ["The ratio of carbon : hydrogen : oxygen", "The ratio of fertiliser to filler material by mass", "The ratio of acidic : basic : neutral components"], 0)],
  },
  {
    number: "10", sub_number: "10.2.2",
    text: "A 20 kg bag of fertiliser is labelled 2 : 4 : 3 (X). The bag contains 2,315 kg phosphorous. Calculate the value of X (the percentage of nutrients by mass in the fertiliser).",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Mass of P = (4/9) x (X/100) x 20 = 2,315 kg, so X = 26 (26,04).",
    marking_notes: "Memo: Option 1: (4/9) x (X/100) x 20 = 2,315, X = 26,04. Option 2: mass of one part = 2,315/4 = 0,57575 kg, N = 1,1575 kg, K = 1,73625 kg, total 5,20875 kg, X = 5,20875/20 x 100 = 26,04.",
    steps: [
      st(1, "Fraction of the nutrient mass that is phosphorus", "4/(2 + 4 + 3) = 4/9", ["4/6", "4/3", "2/9"], 0),
      st(1, "Equation for X", "(4/9) x (X/100) x 20 = 2,315", ["(4/6) x (X/100) x 20 = 2,315", "(4/9) x X x 20 = 2,315", "(4/9) x (100/X) x 20 = 2,315"], 1),
      st(1, "Value of X", "26,04", ["17,36", "52,09", "8,68"], 2),
    ],
  },
];
