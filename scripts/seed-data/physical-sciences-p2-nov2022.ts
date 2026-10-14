// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2022, National
// (English).
// Source: single combined scanned PDF (question paper + marking guideline)
// fetched from stanmorephysics.com. PDF pages 1-14 are the question paper
// (cover verified: "PHYSICAL SCIENCES: CHEMISTRY (P2)", "NOVEMBER 2022",
// MARKS: 150, TIME: 3 hours), pages 15-18 are the data sheets, page 19 is the
// memo cover ("MARKING GUIDELINES", "NOVEMBER 2022", 150 marks, stamped
// approved 2022-11-28) and pages 20-37 are the memo. The PDF is scanned (no
// text layer); every page was rendered and read visually. The memo's question
// numbers and per-question totals (20/15/14/15/19/21/18/15/13 = 150) match
// the question paper exactly.
//
// Paper structure: NINE compulsory questions, 150 marks, 3 hours. All 150
// marks are included. Every question is stepped multiple choice (no
// marking_points): letter-answer items carry the full lettered option text,
// calculations have one step per mark-earning point, and explanation /
// definition items have one step per memo mark point or four candidate
// statements.
//
// Topics: all questions map onto the first seven shared topics; the
// "chemical-industry" topic is not used.
//
// Diagrams cropped (Pillow, from page renders) into
// public/question-images/chemistry-2022-p2/: 1.6 gas jars, Q2 compounds
// table, Q4 flow diagram, 5.2 Maxwell-Boltzmann curves, 5.3 syringe, 5.4
// mass-time graph, 6.6 rate-time graph, 8.2 cell diagram, Q9 electrolysis
// cell, 9.2 mass-of-electrode graph. The Q3 data tables are transcribed into
// the question text instead. A faint site watermark ghost sits near the
// bottom-right corner of the 5.4 crop.
//
// FLAG for review:
// - 1.4: the memo answer is C ("The rate of change in concentration of the
//   products or reactants"), even though D adds "per unit time" and is the
//   more complete definition. Transcribed faithfully (C).
// - 3.1.x: the paper names compound D "3-methylbutanone" (not a valid IUPAC
//   name; it is 3-methylbutan-2-one). Transcribed as printed.
// - 5.3.2: the memo's own working rounds n(H2O) to 0,046 mol giving 0,83 g
//   (unrounded 0,0467 x 18 = 0,84 g); accepted range 0,72 to 0,9 g. 0,83 g is
//   used as the final-answer option.
// - 5.4.3, 7.2.3, 9.2.3: the memo accepts ranges (26,67-28,57 s;
//   0,095-0,1 mol.dm-3; 18,32-18,40 g). The memo's headline values are used.
// - 8.1.2: the memo awards 3 marks to one sentence (stronger oxidising agent
//   / than Zn2+ / will oxidise Zn); split here into three steps that follow
//   those three tick points.
// - 6.5: the memo accepts either a concentration table or a mole table
//   (option 2 uses 0,46 mol S initially); the concentration table (option 1)
//   is used for the steps.
// - 7.1.3: the two bases (H2O and CH3COO-) are split into one step each.
// - 5.2 and 6.6.x are read from the printed graphs; the memo answers (Y;
//   decrease in temperature) are consistent with the graphs.

import type { MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2022-p2";

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
  year: 2022,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2023/03/NSC-Physical-Science-Grade-12-November-2022-P2-and-Memo.pdf" as string | null,
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
  steps: MarkingPointStep[];
  image_url?: string;
}

// One step: the correct option is inserted at position `pos` among three wrong ones.
function st(marks: number, description: string, correct: string, wrong: [string, string, string], pos: number): MarkingPointStep {
  const options: string[] = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

// Lettered MCQ item (2 marks): options are the lettered statements.
function letter(opts: [string, string, string, string], correct: number): MarkingPointStep[] {
  const L = ["A", "B", "C", "D"];
  return [{ marks: 2, description: "Choose the correct option", options: opts.map((o, i) => `${L[i]}: ${o}`), correctIndex: correct }];
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============
  {
    number: "1", sub_number: "1.1",
    text: "Which ONE of the following terms describes hydrocarbons that contain only single bonds? (A) Isomers (B) Saturated (C) Unsaturated (D) Homologous series",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "B — Saturated.", marking_notes: "Memo: B.",
    steps: letter(["Isomers", "Saturated", "Unsaturated", "Homologous series"], 1),
  },
  {
    number: "1", sub_number: "1.2",
    text: "Which ONE of the following combinations correctly indicates the STRONGEST intermolecular forces found in ethanoic acid and methyl propanoate respectively? (A) Hydrogen bonds; hydrogen bonds (B) Dipole-dipole forces; London forces (C) Hydrogen bonds; London forces (D) Hydrogen bonds; dipole-dipole forces",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "D — ethanoic acid has hydrogen bonds (O-H); methyl propanoate (an ester, no O-H) has dipole-dipole forces as its strongest.", marking_notes: "Memo: D.",
    steps: letter(["Hydrogen bonds; hydrogen bonds", "Dipole-dipole forces; London forces", "Hydrogen bonds; London forces", "Hydrogen bonds; dipole-dipole forces"], 3),
  },
  {
    number: "1", sub_number: "1.3",
    text: "A test tube contains a liquid hydrocarbon. When bromine water (Br2) is added, the mixture decolourises IMMEDIATELY. Which ONE of the following combinations correctly identifies the COMPOUND and the TYPE OF REACTION? (A) Hexane, addition (B) Hexane, substitution (C) Hex-2-ene, addition (D) Hex-2-ene, substitution",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C — Hex-2-ene, addition. Alkenes decolourise bromine water immediately by an addition reaction.", marking_notes: "Memo: C.",
    steps: letter(["Hexane, addition", "Hexane, substitution", "Hex-2-ene, addition", "Hex-2-ene, substitution"], 2),
  },
  {
    number: "1", sub_number: "1.4",
    text: "Which ONE of the following statements is the CORRECT definition for the rate of a reaction? (A) The time taken for the reaction to take place (B) The speed at which the reaction takes place (C) The rate of change in concentration of the products or reactants (D) The rate of change in concentration of the products or reactants per unit time",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "C — The rate of change in concentration of the products or reactants (as given by the memo; see header flag about option D).", marking_notes: "Memo: C (FLAG: option D, which adds 'per unit time', looks like the more complete definition, but the memo gives C).",
    steps: letter(["The time taken for the reaction to take place", "The speed at which the reaction takes place", "The rate of change in concentration of the products or reactants", "The rate of change in concentration of the products or reactants per unit time"], 2),
  },
  {
    number: "1", sub_number: "1.5",
    text: "Consider the reaction between magnesium powder and EXCESS dilute hydrochloric acid, HCl(aq): Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g). Which ONE of the following will NOT increase the rate of this reaction? (A) Increasing the volume of HCl(aq) (B) Increasing the temperature of HCl(aq) (C) Increasing the concentration of HCl(aq) (D) Adding more magnesium powder",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "A — increasing the volume of HCl(aq) at the same concentration does not change the rate.", marking_notes: "Memo: A.",
    steps: letter(["Increasing the volume of HCl(aq)", "Increasing the temperature of HCl(aq)", "Increasing the concentration of HCl(aq)", "Adding more magnesium powder"], 0),
  },
  {
    number: "1", sub_number: "1.6",
    text: "Two identical sealed gas jars R and S initially contain: R: 1 mole H2(g) + 1 mole I2(g); S: 2 moles HI(g). Equilibrium is reached in both at 500 C according to H2(g) + I2(g) <=> 2HI(g). Which ONE of the following is TRUE at equilibrium? (A) S will contain 1 mole of I2(g). (B) R will contain a larger amount of I2(g) than S. (C) R and S will contain the same amount of HI(g). (D) S will contain a larger amount of HI(g) than R.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "C — both jars hold the same total amounts of H and I atoms, so they reach the same equilibrium composition.", marking_notes: "Memo: C.",
    steps: letter(["S will contain 1 mole of I2(g)", "R will contain a larger amount of I2(g) than S", "R and S will contain the same amount of HI(g)", "S will contain a larger amount of HI(g) than R"], 2),
    image_url: `${IMG}/1.6-gas-jars.png`,
  },
  {
    number: "1", sub_number: "1.7",
    text: "Which ONE of the following salts, when dissolved in water, will NOT change the pH of the water? (A) Na2CO3 (B) (COO)2Na2 (C) NH4Cl (D) NaCl",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "D — NaCl is the salt of a strong acid and a strong base; neither ion hydrolyses.", marking_notes: "Memo: D.",
    steps: letter(["Na2CO3", "(COO)2Na2", "NH4Cl", "NaCl"], 3),
  },
  {
    number: "1", sub_number: "1.8",
    text: "A dilute acid is titrated against potassium hydroxide solution, KOH(aq). At the equivalence point the pH is 7. Which ONE of the following combinations correctly identifies the acid and the MOST SUITABLE indicator? (A) (COOH)2(aq), phenolphthalein (B) (COOH)2(aq), bromothymol blue (C) HCl(aq), phenolphthalein (D) HCl(aq), bromothymol blue",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "D — HCl is a strong acid giving a pH 7 equivalence point, for which bromothymol blue (colour change near pH 7) is most suitable.", marking_notes: "Memo: D.",
    steps: letter(["(COOH)2(aq) with phenolphthalein", "(COOH)2(aq) with bromothymol blue", "HCl(aq) with phenolphthalein", "HCl(aq) with bromothymol blue"], 3),
  },
  {
    number: "1", sub_number: "1.9",
    text: "Which ONE of the following statements is TRUE for an oxidising agent? (A) It gains electrons. (B) It causes another species in the reaction to be reduced. (C) Its oxidation number does not change during a chemical reaction. (D) Its oxidation number increases during a chemical reaction.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A — an oxidising agent gains electrons (it is reduced).", marking_notes: "Memo: A.",
    steps: letter(["It gains electrons", "It causes another species in the reaction to be reduced", "Its oxidation number does not change during a chemical reaction", "Its oxidation number increases during a chemical reaction"], 0),
  },
  {
    number: "1", sub_number: "1.10",
    text: "Which ONE of the following metals will reduce Cd2+(aq) to Cd(s), but will NOT reduce Mn2+(aq) to Mn(s)? (A) Zn (B) Ag (C) Ni (D) Mg",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "A — Zn lies between Cd and Mn on the table of standard reduction potentials: it is a stronger reducing agent than Cd but weaker than Mn.", marking_notes: "Memo: A.",
    steps: letter(["Zn", "Ag", "Ni", "Mg"], 0),
  },

  // ============ QUESTION 2 (15 marks) ============
  {
    number: "2", sub_number: "2.1.1",
    text: "Compounds A to F: A = CH3CH2-C(CH3)2-CHBr-CH2CH3 (drawn in full); B = (CH3)3C-C≡C-CH3; C = CH3CH2CH2CHO; D = CH3CH2COCH3; E = CH3CH2CH2COOH; F = CH3CH2CH2CH2OH. Write down the LETTERS that represent TWO organic compounds that are isomers of each other.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "C & D (butanal and butanone, both C4H8O).", marking_notes: "Memo: C & D.",
    steps: [st(1, "Isomer pair", "C and D", ["A and B", "C and E", "E and F"], 1)],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Using the compounds A to F in the table: write down the TYPE of isomers (CHAIN, FUNCTIONAL or POSITIONAL) identified in QUESTION 2.1.1.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Functional (aldehyde vs ketone).", marking_notes: "Memo: Functional.",
    steps: [st(1, "Type of isomers", "Functional", ["Chain", "Positional", "Geometric"], 0)],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Write down the GENERAL FORMULA of the homologous series to which compound B belongs (B = (CH3)3C-C≡C-CH3, an alkyne).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "CnH2n-2", marking_notes: "Memo: CnH2n-2.",
    steps: [st(1, "General formula of the alkynes", "CnH2n-2", ["CnH2n+2", "CnH2n", "CnH2n+1OH"], 2)],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Write down the NAME of the functional group of compound F (CH3CH2CH2CH2OH).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Hydroxyl (group).", marking_notes: "Memo: Hydroxyl (group).",
    steps: [st(1, "Functional group of F", "Hydroxyl", ["Carboxyl", "Carbonyl", "Formyl"], 0)],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Write down the IUPAC name of compound A (CH3CH2-C(CH3)2-CHBr-CH2CH3 as drawn in the table).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "4-bromo-3,3-dimethylhexane.",
    marking_notes: "Memo criteria: correct stem (hexane); all substituents (bromo and dimethyl) identified; IUPAC name completely correct including numbering, sequence, hyphens and commas.",
    steps: [
      st(1, "Correct stem", "Hexane", ["Pentane", "Heptane", "Butane"], 0),
      st(1, "Substituents correctly identified", "Bromo and dimethyl", ["Bromo and ethyl", "Bromo and trimethyl", "Chloro and dimethyl"], 1),
      st(1, "Completely correct name", "4-bromo-3,3-dimethylhexane", ["3-bromo-4,4-dimethylhexane", "3,3-dimethyl-4-bromohexane", "4-bromo-3-methylhexane"], 2),
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Write down the IUPAC name of compound B ((CH3)3C-C≡C-CH3).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "4,4-dimethylpent-2-yne (4,4-dimethyl-2-pentyne).",
    marking_notes: "Memo criteria: correct stem (pentyne) and substituents (dimethyl); name completely correct.",
    steps: [
      st(1, "Correct stem and substituents", "Pentyne with two methyl substituents", ["Pentene with two methyl substituents", "Hexyne with one methyl substituent", "Butyne with three methyl substituents"], 0),
      st(1, "Completely correct name", "4,4-dimethylpent-2-yne", ["2,2-dimethylpent-3-yne", "4,4-dimethylpent-2-ene", "4,4-dimethylpent-3-yne"], 3),
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Write down the IUPAC name of compound C (CH3CH2CH2CHO).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Butanal.", marking_notes: "Memo: correct functional group (-al) and correct IUPAC name.",
    steps: [
      st(1, "Correct functional group suffix", "-al", ["-one", "-ol", "-oic acid"], 1),
      st(1, "Correct IUPAC name", "Butanal", ["Propanal", "Butanone", "Butan-1-ol"], 2),
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Compound F reacts with a carboxylic acid to form compound S in the presence of a strong acid. Write down the type of reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Esterification / condensation.", marking_notes: "Memo: esterification/condensation.",
    steps: [st(1, "Type of reaction", "Esterification (condensation)", ["Hydrolysis", "Elimination", "Addition"], 0)],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Compound S has an EMPIRICAL FORMULA of C3H6O and a molecular mass of 116 g·mol⁻¹. Write down the MOLECULAR FORMULA of the carboxylic acid (that reacted with F, butan-1-ol, to form S).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "M(C3H6O) = 58 g·mol⁻¹; 116/58 = 2, so S = C6H12O2; the acid is C2H4O2.",
    marking_notes: "Memo: C6H12O2 (1 mark) and C2H4O2 (2 marks); if only the correct answer is given, full marks; condensed or structural formula max 2/3.",
    steps: [
      st(1, "Molecular formula of S", "C6H12O2", ["C3H6O", "C4H8O", "C6H6O"], 1),
      st(2, "Molecular formula of the carboxylic acid", "C2H4O2", ["C3H6O2", "C4H8O2", "C2H6O"], 0),
    ],
  },

  // ============ QUESTION 3 (14 marks) ============
  {
    number: "3", sub_number: "3.1.1",
    text: "Melting points: A propanone -95,4 C; B butanone -86,9 C; C pentan-2-one -77,8 C; D 3-methylbutanone -92 C. To which homologous series do the above compounds belong?",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Ketones.", marking_notes: "Memo: ketone.",
    steps: [st(1, "Homologous series", "Ketones", ["Aldehydes", "Alcohols", "Esters"], 0)],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "The melting points of compounds A, B and C (propanone, butanone, pentan-2-one) are compared. Write down the controlled variable for this comparison.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Functional group / homologous series.", marking_notes: "Memo: functional group/homologous series.",
    steps: [st(1, "Controlled variable", "Functional group (homologous series)", ["Chain length", "Molecular mass", "Melting point"], 3)],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "The melting points of compounds C (pentan-2-one, -77,8 C) and D (3-methylbutanone, -92 C) are compared. Fully explain the difference in the melting points of these two compounds.",
    marks: 4, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "C (pentan-2-one) has a longer chain / is less branched / has a larger surface area than D; therefore stronger intermolecular (London / dipole-dipole) forces; more energy is needed to overcome the intermolecular forces; therefore C has a higher melting point.",
    marking_notes: "Memo mark points: compare structure; compare strength of intermolecular forces; compare energy needed to overcome them; state the difference in melting point. (Memo also accepts the answer built from D's side.) If boiling point is stated instead, max 3/4.",
    steps: [
      st(1, "Compare structures", "C has a longer chain, is less branched and has a larger surface area than D", ["C is more branched and more compact than D", "C has a shorter chain than D", "C and D have identical structures"], 0),
      st(1, "Compare intermolecular forces", "C has stronger intermolecular forces than D", ["C has weaker intermolecular forces than D", "C has stronger covalent bonds than D", "C has hydrogen bonds but D does not"], 2),
      st(1, "Compare energy needed", "More energy is needed to overcome the intermolecular forces in C", ["Less energy is needed to overcome the intermolecular forces in C", "More energy is needed to break the covalent bonds in C", "The same energy is needed for both"], 1),
      st(1, "State the difference in melting point", "C has a higher melting point than D", ["C has a lower melting point than D", "C has a higher boiling point than D", "C and D have the same melting point"], 3),
    ],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Define the term vapour pressure.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "The pressure exerted by a vapour at equilibrium with its liquid in a closed system.",
    marking_notes: "Memo: pressure exerted by a vapour; at equilibrium with its liquid; in a closed system. Omitting a key phrase costs 1 mark.",
    steps: [st(2, "Definition of vapour pressure", "The pressure exerted by a vapour at equilibrium with its liquid in a closed system", ["The pressure exerted by a liquid at its boiling point in an open container", "The pressure of the atmosphere above a liquid", "The pressure at which a liquid boils"], 0)],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Vapour pressures of straight chain primary alcohols at 300 K: CH3OH 16,8 kPa; C2H5OH 7,88; C3H7OH 2,8; C4H9OH 0,91; C5H11OH 0,88; C6H13OH 0,124. Write down a suitable conclusion for this investigation.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "Vapour pressure decreases with an increase in the number of C atoms / chain length (or vapour pressure increases with a decrease in chain length).",
    marking_notes: "Memo: dependent and independent variables identified (1); correct relationship stated (1).",
    steps: [
      st(1, "Variables identified", "Vapour pressure and number of C atoms (chain length)", ["Boiling point and temperature", "Vapour pressure and temperature only", "Molecular mass and density"], 1),
      st(1, "Relationship", "Vapour pressure decreases as chain length increases", ["Vapour pressure increases as chain length increases", "Vapour pressure is independent of chain length", "Vapour pressure decreases as temperature increases"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "Write down the IUPAC name of the alcohol (from the table in 3.2.2) with the HIGHEST boiling point.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Hexan-1-ol (1-hexanol): the lowest vapour pressure means the strongest intermolecular forces and highest boiling point.",
    marking_notes: "Memo: correct chain length (hex) 1; hexanol 2/3; whole name correct 3/3.",
    steps: [
      st(1, "Correct chain length", "Hex (C6H13OH)", ["Meth (CH3OH)", "Pent (C5H11OH)", "But (C4H9OH)"], 2),
      st(1, "Correct functional group", "Alcohol (-ol)", ["Aldehyde (-al)", "Ketone (-one)", "Carboxylic acid (-oic acid)"], 0),
      st(1, "Whole name correct", "Hexan-1-ol", ["Hexan-2-ol", "Pentan-1-ol", "Hexanal"], 1),
    ],
  },
  {
    number: "3", sub_number: "3.2.4",
    text: "The experiment is repeated at 320 K. Will the vapour pressure of each compound INCREASE, DECREASE or REMAIN THE SAME?",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "Increases.", marking_notes: "Memo: increases.",
    steps: [st(1, "Change in vapour pressure", "Increases", ["Decreases", "Remains the same", "Increases for the long chains only"], 0)],
  },

  // ============ QUESTION 4 (15 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "Compound A is CH3C(CH3)BrCH2CH3 (2-bromo-2-methylbutane); the flow diagram shows reaction I (A to compound B, C5H10, major product), reaction II (B to compound C, C5H12O, major product) and reaction III (A to C directly). Is compound A a PRIMARY, SECONDARY or TERTIARY haloalkane? Give a reason for the answer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Tertiary: the halogen (bromine) is bonded to a C atom that is bonded to three other C atoms.",
    marking_notes: "Memo: tertiary (1); halogen/functional group bonded to a carbon bonded to three other C atoms (1).",
    steps: [
      st(1, "Classification", "Tertiary", ["Primary", "Secondary", "Quaternary"], 0),
      st(1, "Reason", "The Br is bonded to a C atom that is bonded to three other C atoms", ["The Br is bonded to a C atom that is bonded to one other C atom", "The Br is bonded to a C atom that is bonded to two other C atoms", "The compound contains three Br atoms"], 0),
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Consider reaction I (A to B, C5H10, the major product). Besides heat, write down the other reaction condition needed.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Concentrated strong base (concentrated NaOH/KOH/LiOH), or a strong base in ethanol.",
    marking_notes: "Memo: concentrated strong base; or concentrated NaOH/KOH/LiOH; or strong base in ethanol.",
    steps: [st(1, "Other reaction condition", "Concentrated strong base (e.g. NaOH/KOH) in ethanol", ["Dilute strong base in water", "Concentrated sulphuric acid", "A platinum catalyst with H2"], 0)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Consider reaction I. Write down the type of reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Elimination / dehydrohalogenation / dehydrobromination.", marking_notes: "Memo: elimination (or dehydrohalogenation/dehydrobromination).",
    steps: [st(1, "Type of reaction", "Elimination (dehydrohalogenation)", ["Substitution", "Addition", "Esterification"], 1)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "Using STRUCTURAL FORMULAE for the organic compounds, write down a balanced equation for reaction I (A to B).",
    marks: 5, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-C(CH3)(Br)-CH2-CH3 (drawn in full) + NaOH/KOH/LiOH -> (CH3)2C=CH-CH3 (2-methylbut-2-ene, drawn in full) + NaBr/KBr/LiBr + H2O.",
    marking_notes: "Memo mark points: whole structural formula of A correct; reacts with NaOH/KOH/LiOH; functional group of the alkene (C=C) correct; whole structural formula of the alkene correct; NaBr/KBr/LiBr + H2O. Caps: any error such as omitted H atoms or condensed formula max 3/5; additional reactants/products max 4/5; molecular formulae max 2/5; no or incorrect inorganic reactants/products max 3/5.",
    steps: [
      st(1, "Reactant A written correctly (whole structural formula)", "2-bromo-2-methylbutane: CH3-C(CH3)(Br)-CH2-CH3", ["1-bromo-2-methylbutane: BrCH2-CH(CH3)-CH2-CH3", "2-bromo-3-methylbutane: CH3-CHBr-CH(CH3)-CH3", "1-bromopentane: BrCH2CH2CH2CH2CH3"], 0),
      st(1, "Inorganic reactant", "+ NaOH (or KOH/LiOH)", ["+ H2O only", "+ H2SO4(conc.)", "+ HBr"], 2),
      st(1, "Functional group of the organic product", "Double bond C=C (alkene)", ["Hydroxyl group -OH", "Carbonyl group C=O", "Triple bond C≡C"], 1),
      st(1, "Whole structural formula of the organic product", "2-methylbut-2-ene: (CH3)2C=CH-CH3", ["3-methylbut-1-ene: (CH3)2CH-CH=CH2", "2-methylbutan-2-ol: (CH3)2C(OH)CH2CH3", "pent-2-ene: CH3CH=CHCH2CH3"], 3),
      st(1, "Inorganic products", "NaBr (or KBr/LiBr) + H2O", ["NaBr only", "H2 + NaBr", "NaOH + H2O"], 0),
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Consider reaction II (B to C, C5H12O, major product). Write down the STRUCTURAL FORMULA of compound C.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-methylbutan-2-ol: CH3-C(CH3)(OH)-CH2-CH3 (whole structure drawn, OH on the tertiary carbon).",
    marking_notes: "Memo: functional group correct (1); whole structure correct (1).",
    steps: [
      st(1, "Functional group", "Hydroxyl (-OH)", ["Bromo (-Br)", "Carbonyl (C=O)", "Carboxyl (-COOH)"], 0),
      st(1, "Whole structure", "2-methylbutan-2-ol: (CH3)2C(OH)CH2CH3", ["3-methylbutan-2-ol: (CH3)2CH-CH(OH)CH3", "pentan-1-ol: CH3CH2CH2CH2CH2OH", "2-methylbutan-1-ol: CH3CH2CH(CH3)CH2OH"], 1),
    ],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Consider reaction II. Write down the NAME or FORMULA of the inorganic reagent needed.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Water / H2O.", marking_notes: "Memo: water/H2O.",
    steps: [st(1, "Inorganic reagent", "Water (H2O) (with acid catalyst)", ["Hydrogen gas (H2)", "Bromine (Br2)", "Concentrated NaOH"], 3)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.3.3",
    text: "Consider reaction II. Write down the TYPE OF ADDITION reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Hydration.", marking_notes: "Memo: hydration.",
    steps: [st(1, "Type of addition", "Hydration", ["Hydrogenation", "Halogenation", "Hydrohalogenation"], 2)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "Consider reaction III (A directly to C). Write down the type of reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Substitution / hydrolysis.", marking_notes: "Memo: substitution/hydrolysis.",
    steps: [st(1, "Type of reaction", "Substitution (hydrolysis)", ["Elimination", "Addition", "Cracking"], 0)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Consider reaction III. Besides heat, write down the other reaction condition needed.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Dilute strong base (dilute NaOH/KOH/LiOH), or NaOH(aq), or water.",
    marking_notes: "Memo: dilute strong base; or dilute NaOH/KOH/LiOH; or NaOH(aq)/KOH(aq)/LiOH(aq); or (add) water.",
    steps: [st(1, "Other reaction condition", "Dilute strong base (e.g. dilute NaOH) or water", ["Concentrated strong base in ethanol", "Concentrated H2SO4", "A catalyst of finely divided platinum"], 1)],
    image_url: `${IMG}/4-flow-diagram.png`,
  },

  // ============ QUESTION 5 (19 marks) ============
  {
    number: "5", sub_number: "5.1",
    text: "Three experiments on the decomposition of H2O2(l), 2H2O2(l) -> 2H2O(l) + O2(g), use identical samples: A: 25 C without catalyst; B: 25 C with catalyst; C: 35 C without catalyst. In which experiment, A or B, is the reaction rate higher? Use the collision theory to explain the answer.",
    marks: 4, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "B. The catalyst provides an alternative route of lower activation energy; more molecules have sufficient kinetic energy (equal to or higher than the activation energy); more effective collisions per unit time.",
    marking_notes: "Memo: B (1); lower activation energy via alternative route (1); more molecules with sufficient energy (1); more effective collisions per unit time (1).",
    steps: [
      st(1, "Experiment with the higher rate", "B", ["A", "Both the same", "Cannot be determined"], 0),
      st(1, "Role of the catalyst", "It provides an alternative route of lower activation energy", ["It increases the temperature of the reaction", "It increases the concentration of the reactant", "It lowers the enthalpy change of the reaction"], 2),
      st(1, "Energy of molecules", "More molecules have energy equal to or higher than the activation energy", ["Each molecule has more kinetic energy than before", "Fewer molecules are needed to react", "The activation energy of the molecules increases"], 1),
      st(1, "Effect on collisions", "More effective collisions per unit time", ["Fewer but harder collisions", "More collisions in total, none of them effective", "The collision frequency is unchanged"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "The Maxwell-Boltzmann distribution curves X (solid, taller peak at lower kinetic energy) and Y (dashed, lower peak shifted to higher kinetic energy) are shown for two of the experiments A, B and C. Identify the curve (X or Y) that represents experiment C.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Y: experiment C is at the higher temperature (35 C), so its curve is flatter and shifted to higher kinetic energy.",
    marking_notes: "Memo: Y.",
    steps: [st(2, "Curve for experiment C", "Y (higher temperature curve)", ["X", "Both X and Y", "Neither: C has a catalyst"], 0)],
    image_url: `${IMG}/5.2-maxwell-boltzmann.png`,
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "The volume of O2(g) produced in experiment B during the first 3,6 s is collected in a syringe (scale in cm³: marked 160, 320, 480, 640, 800, 960; the gas stops midway between 480 and 640). Write down the volume of O2(g) collected.",
    marks: 2, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "560 cm³ (0,56 dm³).", marking_notes: "Memo: 560 cm³ / 0,56 dm³.",
    steps: [st(2, "Syringe reading", "560 cm³", ["520 cm³", "600 cm³", "640 cm³"], 1)],
    image_url: `${IMG}/5.3-syringe.png`,
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "For 2H2O2(l) -> 2H2O(l) + O2(g): calculate the mass of water, H2O(l), that was produced during the first 3,6 s. Take the molar gas volume to be 24 000 cm³·mol⁻¹ at 25 C. (Use your answer to 5.3.1, 560 cm³ of O2.)",
    marks: 4, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "n(O2) = V/Vm = 560/24 000 = 0,023 mol; n(H2O) = 2n(O2) = 0,046 mol; m = nM = 0,046 x 18 = 0,83 g.",
    marking_notes: "Memo: (a) substitute 24 000 and 560 into n = V/Vm; (b) use mol ratio H2O : O2 = 2 : 1; (c) substitute 18 and n(H2O) in m = nM; (d) final answer 0,83 g (range 0,72 to 0,9 g).",
    steps: [
      st(1, "n(O2) = V/Vm", "560/24 000 = 0,0233 mol", ["560/24 = 23,3 mol", "24 000/560 = 42,9 mol", "560 x 24 000 = 1,34 x 10⁷ mol"], 0),
      st(1, "Mole ratio H2O : O2 = 2 : 1", "n(H2O) = 2 x 0,0233 = 0,0467 mol", ["n(H2O) = 0,0233 mol (1 : 1)", "n(H2O) = 0,0117 mol (1 : 2)", "n(H2O) = 0,0933 mol (4 : 1)"], 2),
      st(1, "m = nM with M(H2O) = 18 g·mol⁻¹", "m = 0,0467 x 18", ["m = 0,0467 x 34", "m = 0,0467 / 18", "m = 0,0467 x 32"], 1),
      st(1, "Final answer", "0,83 g", ["0,42 g", "1,59 g", "0,0026 g"], 3),
    ],
    image_url: `${IMG}/5.3-syringe.png`,
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "The graph (not to scale) shows the mass of oxygen gas produced over time in experiment A (mass 0,4 g at 3 s, 0,6 g at 9 s, 0,8 g at 20 s, 0,9 g from time t onwards, flat to 36 s). Write down the rate of production of oxygen gas for the interval 30 s to 36 s.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "0 g·s⁻¹ (the graph is horizontal: the reaction has finished).", marking_notes: "Memo: 0 (g·s⁻¹) / zero.",
    steps: [st(1, "Rate 30 s to 36 s", "0 g·s⁻¹", ["0,025 g·s⁻¹", "0,033 g·s⁻¹", "0,9 g·s⁻¹"], 1)],
    image_url: `${IMG}/5.4-graph.png`,
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "Using the same graph: will the rate of the reaction in the interval 3 s to 9 s be GREATER THAN, SMALLER THAN or EQUAL TO the rate of the reaction in the interval 9 s to 20 s?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Greater than (the curve is steeper from 3 s to 9 s).", marking_notes: "Memo: greater than.",
    steps: [st(1, "Comparison of rates", "Greater than", ["Smaller than", "Equal to", "Cannot be compared"], 2)],
    image_url: `${IMG}/5.4-graph.png`,
  },
  {
    number: "5", sub_number: "5.4.3",
    text: "The average rate of decomposition of hydrogen peroxide is 2,1 x 10⁻³ mol·s⁻¹ (2H2O2 -> 2H2O + O2; M(O2) = 32 g·mol⁻¹). Using the maximum mass of oxygen on the graph (0,9 g), calculate the value of time t on the graph.",
    marks: 5, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "n(O2) = 0,9/32 = 0,028 mol; n(H2O2) = 2n(O2) = 0,056 mol; rate = Δn/Δt: 2,1 x 10⁻³ = 0,056/Δt; Δt = 26,67 s.",
    marking_notes: "Memo: (a) substitute 0,9 g and (b) 32 in n = m/M; (c) use ratio H2O2 : O2 = 2 : 1; (d) substitute 2,1 x 10⁻³ and n(H2O2) in the rate formula; (e) final answer 26,67 s (range 26,67 to 28,57 s). An alternative memo option gives 26,79 s.",
    steps: [
      st(2, "n(O2) = m/M", "0,9/32 = 0,028 mol", ["32/0,9 = 35,6 mol", "0,9/64 = 0,014 mol", "0,9/34 = 0,026 mol"], 0),
      st(1, "Mole ratio H2O2 : O2 = 2 : 1", "n(H2O2) = 2 x 0,028 = 0,056 mol", ["n(H2O2) = 0,028 mol", "n(H2O2) = 0,014 mol", "n(H2O2) = 0,112 mol"], 1),
      st(1, "Substitution in rate = Δn/Δt", "2,1 x 10⁻³ = 0,056/Δt", ["2,1 x 10⁻³ = Δt/0,056", "2,1 x 10⁻³ = 0,028/Δt", "2,1 x 10⁻³ = 0,9/Δt"], 2),
      st(1, "Final answer", "26,67 s", ["13,33 s", "428,6 s", "0,0375 s"], 0),
    ],
    image_url: `${IMG}/5.4-graph.png`,
  },

  // ============ QUESTION 6 (21 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "C(s) + 2S(g) <=> CS2(g), ΔH > 0, equilibrium at temperature T in a sealed 2 dm³ container; Kc = 9,4 at T. State Le Chatelier's principle.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "When the equilibrium in a closed system is disturbed, the system will re-instate a new equilibrium by favouring the reaction that will cancel/oppose the disturbance.",
    marking_notes: "Memo: omitting any key phrase costs 1 mark.",
    steps: [st(2, "Statement of Le Chatelier's principle", "When the equilibrium in a closed system is disturbed, the system re-instates a new equilibrium by favouring the reaction that opposes the disturbance", ["When a system at equilibrium is disturbed, the forward reaction is always favoured", "When the temperature is increased, the rate of the endothermic reaction increases", "When a system is disturbed, the equilibrium constant changes to oppose the disturbance"], 0)],
  },
  {
    number: "6", sub_number: "6.2",
    text: "At equilibrium, 1 mole of carbon disulphide, CS2(g), is present in the 2 dm³ container (Kc = 9,4). Calculate the concentration of S(g) present at equilibrium.",
    marks: 4, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Kc = [CS2]/[S]²; 9,4 = 0,5/[S]²; [S] = 0,23 mol·dm⁻³.",
    marking_notes: "Memo: Kc expression (1); substitution of 9,4 (1) and 0,5 (1); answer 0,23 mol·dm⁻³ (1). Wrong Kc expression max 2/4; no expression but correct substitution max 3/4.",
    steps: [
      st(1, "Kc expression", "Kc = [CS2]/[S]²", ["Kc = [S]²/[CS2]", "Kc = [CS2]/[S]", "Kc = [C][CS2]/[S]²"], 1),
      st(2, "Substitution", "9,4 = 0,5/[S]²", ["9,4 = 1/[S]²", "9,4 = [S]²/0,5", "9,4 = 0,5/[S]"], 0),
      st(1, "Final answer", "0,23 mol·dm⁻³", ["0,053 mol·dm⁻³", "0,33 mol·dm⁻³", "4,34 mol·dm⁻³"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "The volume of the container is now DOUBLED at temperature T and a new equilibrium is established. How will the amount of S(g) change as this new equilibrium is established? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Increases.", marking_notes: "Memo: increases.",
    steps: [st(1, "Change in amount of S(g)", "Increases", ["Decreases", "Remains the same", "Becomes zero"], 0)],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Explain the answer to QUESTION 6.3 in terms of Le Chatelier's principle.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Doubling the volume decreases the pressure; the reaction that produces the greater number of moles of gas (1 mol gas to 2 mol gas) is favoured; the reverse reaction is favoured.",
    marking_notes: "Memo: three mark points as stated.",
    steps: [
      st(1, "Effect of increasing the volume", "The pressure decreases", ["The pressure increases", "The temperature decreases", "The concentration of every gas increases"], 0),
      st(1, "Reaction favoured by the lower pressure", "The reaction producing the greater number of moles of gas (1 mol to 2 mol)", ["The reaction producing the smaller number of moles of gas", "The exothermic reaction", "The reaction in which the solid C is consumed"], 1),
      st(1, "Which reaction", "The reverse reaction is favoured", ["The forward reaction is favoured", "Neither reaction is favoured", "Both reactions stop"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.5",
    text: "After the volume is doubled (to 4 dm³), the initial concentrations are halved: [S] = 0,23 x 1/2 = 0,115 mol·dm⁻³ and [CS2] = 0,5 x 1/2 = 0,25 mol·dm⁻³. If the concentration of CS2(g) CHANGES by x mol·dm⁻³, write down an expression for the equilibrium constant, Kc, in terms of x. Show ALL your workings. NO simplification or solving for x is required.",
    marks: 5, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Initial: [S] = 0,115, [CS2] = 0,25. Change: S +2x, CS2 -x. Equilibrium: [S] = 0,115 + 2x; [CS2] = 0,25 - x. Kc = [CS2]/[S]²: 9,4 = (0,25 - x)/(0,115 + 2x)².",
    marking_notes: "Memo: (a) initial concentration halved; (b) change using ratio S : CS2 = 2 : 1; (c) equilibrium [S] = initial + change; (d) equilibrium [CS2] = initial - change; (e) correct final expression. Wrong Kc expression max 4/5. The memo accepts a mole-based option (initial n(S) = 0,46 mol, n(CS2) = 1 mol) as an alternative.",
    steps: [
      st(1, "Initial concentrations after doubling the volume", "[S] = 0,115 and [CS2] = 0,25 mol·dm⁻³", ["[S] = 0,46 and [CS2] = 1,0 mol·dm⁻³", "[S] = 0,23 and [CS2] = 0,5 mol·dm⁻³", "[S] = 0,115 and [CS2] = 0,5 mol·dm⁻³"], 0),
      st(1, "Change in concentration (S : CS2 = 2 : 1)", "S changes by 2x, CS2 changes by x", ["S changes by x, CS2 changes by x", "S changes by x, CS2 changes by 2x", "S changes by 2x, CS2 changes by 2x"], 2),
      st(1, "Equilibrium [S]", "0,115 + 2x", ["0,115 - 2x", "0,115 + x", "0,23 + 2x"], 1),
      st(1, "Equilibrium [CS2]", "0,25 - x", ["0,25 + x", "0,25 - 2x", "0,5 - x"], 3),
      st(1, "Final expression", "9,4 = (0,25 - x)/(0,115 + 2x)²", ["9,4 = (0,25 - x)/(0,115 + 2x)", "9,4 = (0,115 + 2x)²/(0,25 - x)", "9,4 = (0,25 + x)/(0,115 - 2x)²"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.6.1",
    text: "A reaction rate-time graph shows the forward (solid) and reverse (dashed) reaction rates; between tA and tB the two lines are parallel (equal and horizontal). The volume is constant. What do the parallel lines between tA and tB represent?",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "(Chemical) equilibrium: the rates of the forward and reverse reactions are equal / concentrations are constant.", marking_notes: "Memo: equilibrium / equal rates / constant concentrations.",
    steps: [st(1, "Meaning of the parallel lines", "Chemical equilibrium (equal forward and reverse rates)", ["The reaction has not started", "The reaction has gone to completion", "A catalyst has been added"], 0)],
    image_url: `${IMG}/6.6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.6.2",
    text: "What change was made to the equilibrium mixture at tB? (At tB the forward rate jumps up while the reverse rate starts to rise gradually.)",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "An increase in the amount/concentration of S (reactant) / S was added.", marking_notes: "Memo: increase in concentration of S / S added.",
    steps: [st(1, "Change made at tB", "S(g) (the reactant) was added", ["CS2(g) (the product) was added", "The temperature was increased", "A catalyst was added"], 2)],
    image_url: `${IMG}/6.6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.6.3",
    text: "Give a reason for the sudden change in the reaction rate at tC (both rates drop suddenly, the forward rate dropping below the reverse rate; the volume is constant).",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "A decrease in temperature.", marking_notes: "Memo: decrease in temperature.",
    steps: [st(1, "Reason for the sudden change at tC", "A decrease in temperature", ["An increase in temperature", "An increase in pressure", "Addition of a catalyst"], 1)],
    image_url: `${IMG}/6.6-rate-time-graph.png`,
  },
  {
    number: "6", sub_number: "6.6.4",
    text: "Fully explain the answer to QUESTION 6.6.3.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "The rates of the forward and reverse reactions decrease; the reverse reaction is favoured / the forward reaction decreases more; a decrease in temperature favours the exothermic reaction (ΔH > 0 for the forward reaction).",
    marking_notes: "Memo: three mark points as stated.",
    steps: [
      st(1, "Effect on the rates", "The rates of both the forward and reverse reactions decrease", ["The rates of both reactions increase", "Only the forward rate decreases", "The rates of both reactions stay the same"], 0),
      st(1, "Which reaction is favoured", "The reverse reaction is favoured (the forward reaction decreases more)", ["The forward reaction is favoured", "Both reactions decrease equally", "The reverse reaction decreases more"], 2),
      st(1, "Reason", "A decrease in temperature favours the exothermic reaction", ["A decrease in temperature favours the endothermic reaction", "A decrease in temperature increases the activation energy", "A decrease in temperature decreases Kc by a fixed amount for both reactions"], 1),
    ],
    image_url: `${IMG}/6.6-rate-time-graph.png`,
  },

  // ============ QUESTION 7 (18 marks) ============
  {
    number: "7", sub_number: "7.1.1",
    text: "Ethanoic acid reacts with water: CH3COOH(aq) + H2O(l) <=> CH3COO⁻(aq) + H3O⁺(aq). Define an acid in terms of the Lowry-Brønsted theory.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "A proton (H⁺ ion) donor.", marking_notes: "Memo: proton donor / H⁺ donor (2 or 0).",
    steps: [st(2, "Lowry-Brønsted definition of an acid", "A proton (H⁺) donor", ["A proton (H⁺) acceptor", "An electron pair acceptor", "A substance that produces OH⁻ ions in water"], 0)],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Give a reason why ethanoic acid is classified as a WEAK acid.",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "It ionises/dissociates incompletely (partially) in water / has a low Ka value.", marking_notes: "Memo: ionises incompletely/partially or low Ka.",
    steps: [st(1, "Reason", "It ionises incompletely in water", ["It ionises completely in water", "It has a high concentration", "It has a high pH at any concentration"], 1)],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Write down the formulae of the TWO bases in the equation CH3COOH(aq) + H2O(l) <=> CH3COO⁻(aq) + H3O⁺(aq). First: which species on the reactant side is a base?",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "H2O and CH3COO⁻.", marking_notes: "Memo: H2O (1) and CH3COO⁻ (1).",
    steps: [
      st(1, "Base on the reactant side", "H2O", ["CH3COOH", "H3O⁺", "H⁺"], 0),
      st(1, "Base on the product side", "CH3COO⁻", ["CH3COOH", "H3O⁺", "CH3COOH2⁺"], 2),
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "A flask contains 300 cm³ of dilute sodium hydroxide, NaOH(aq), of concentration 0,167 mol·dm⁻³. Calculate the number of moles of sodium hydroxide in the flask.",
    marks: 3, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "n = cV = (0,167)(0,300) = 0,05 mol (5 x 10⁻² mol).",
    marking_notes: "Memo: formula (1); substitution (1); answer (1).",
    steps: [
      st(1, "Formula", "n = cV", ["n = c/V", "n = m/M", "n = V/Vm"], 0),
      st(1, "Substitution", "n = (0,167)(0,300)", ["n = (0,167)(300)", "n = 0,167/0,300", "n = (0,167)(0,800)"], 1),
      st(1, "Answer", "0,05 mol", ["50 mol", "0,557 mol", "0,0005 mol"], 2),
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "500 cm³ of ethanoic acid of unknown concentration X is added to the flask (300 cm³ of 0,167 mol·dm⁻³ NaOH) to give 800 cm³ of solution; the pH of the mixture is 11,4. NaOH(aq) + CH3COOH(aq) -> CH3COONa(aq) + H2O(l). Calculate the concentration of the OH⁻(aq) in the mixture.",
    marks: 4, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "pH = -log[H3O⁺]: 11,4 = -log[H3O⁺]; [H3O⁺] = 3,98 x 10⁻¹²; [H3O⁺][OH⁻] = 1 x 10⁻¹⁴; [OH⁻] = 2,51 x 10⁻³ mol·dm⁻³.",
    marking_notes: "Memo: (a) any formula (pH = -log[H3O⁺], pOH = -log[OH⁻], [H3O⁺][OH⁻] = 10⁻¹⁴, pH + pOH = 14); (b) substitute 11,4; (c) substitute the calculated value; (d) 2,51 x 10⁻³ mol·dm⁻³ (0,003). Option 2 via pOH = 2,6 is also accepted.",
    steps: [
      st(1, "Formula", "pH = -log[H3O⁺] (with [H3O⁺][OH⁻] = 1 x 10⁻¹⁴)", ["pH = log[H3O⁺]", "pH = [H3O⁺]", "pH = -ln[OH⁻]"], 0),
      st(1, "Substitute pH = 11,4", "[H3O⁺] = 10⁻¹¹·⁴ = 3,98 x 10⁻¹²", ["[H3O⁺] = 10¹¹·⁴", "[H3O⁺] = 11,4 x 10⁻¹⁴", "[H3O⁺] = 3,98 x 10⁻³"], 1),
      st(1, "Substitute into [H3O⁺][OH⁻] = 1 x 10⁻¹⁴", "(3,98 x 10⁻¹²)[OH⁻] = 1 x 10⁻¹⁴", ["(3,98 x 10⁻¹²)[OH⁻] = 1", "[OH⁻]/(3,98 x 10⁻¹²) = 1 x 10⁻¹⁴", "(3,98 x 10⁻¹²) + [OH⁻] = 14"], 2),
      st(1, "Final answer", "2,51 x 10⁻³ mol·dm⁻³", ["3,98 x 10⁻¹² mol·dm⁻³", "2,51 x 10⁻¹¹ mol·dm⁻³", "0,398 mol·dm⁻³"], 3),
    ],
  },
  {
    number: "7", sub_number: "7.2.3",
    text: "Calculate the initial concentration, X, of the ethanoic acid solution (use [OH⁻] = 0,00251 mol·dm⁻³ from 7.2.2 and n(NaOH) = 0,05 mol from 7.2.1; the mixture volume is 0,8 dm³ and the acid volume is 0,5 dm³).",
    marks: 6, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "n(NaOH) in mixture = 0,00251 x 0,8 = 0,002 mol; n(NaOH) reacted = 0,05 - 0,002 = 0,048 mol = n(CH3COOH); [CH3COOH] = 0,048/0,5 = 0,096 mol·dm⁻³.",
    marking_notes: "Memo: (a) 0,00251 and 0,8 in c = n/V (1); (b) subtract n(NaOH)initial - n(NaOH)mixture (2); (c) ratio n(OH⁻) = n(CH3COOH) (1); (d) substitute 0,5 and Δn in c = n/V (1); (e) 0,096 mol·dm⁻³ (1) (range 0,095 to 0,1). Max 1/6 if cAVa/cBVb = 1/1 is used.",
    steps: [
      st(1, "n(NaOH) remaining in the mixture", "n = 0,00251 x 0,8 = 0,002 mol", ["n = 0,00251 x 0,5 = 0,00126 mol", "n = 0,00251 x 0,3 = 0,00075 mol", "n = 0,00251/0,8 = 0,0031 mol"], 1),
      st(2, "n(NaOH) that reacted", "0,05 - 0,002 = 0,048 mol", ["0,05 + 0,002 = 0,052 mol", "0,002 mol", "0,05 mol"], 0),
      st(1, "Mole ratio", "n(CH3COOH) = n(NaOH) reacted = 0,048 mol", ["n(CH3COOH) = 2 x 0,048 mol", "n(CH3COOH) = 0,048/2 mol", "n(CH3COOH) = 0,002 mol"], 2),
      st(1, "Substitution in c = n/V", "c = 0,048/0,5", ["c = 0,048/0,8", "c = 0,048/0,3", "c = 0,05/0,5"], 3),
      st(1, "Final answer", "0,096 mol·dm⁻³", ["0,06 mol·dm⁻³", "0,0096 mol·dm⁻³", "0,01 mol·dm⁻³"], 1),
    ],
  },

  // ============ QUESTION 8 (15 marks) ============
  {
    number: "8", sub_number: "8.1.1",
    text: "A piece of zinc (Zn) is placed in a test tube containing an acidified permanganate solution, MnO4⁻(aq), and a redox reaction takes place. Use the Table of Standard Reduction Potentials. Write down the NAME or FORMULA of the reducing agent.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Zn / zinc.", marking_notes: "Memo: Zn/zinc/sink.",
    steps: [st(1, "Reducing agent", "Zn", ["MnO4⁻", "Zn²⁺", "Mn²⁺"], 0)],
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Refer to the relative strengths of the OXIDISING AGENTS to explain why a redox reaction has taken place (Zn and acidified MnO4⁻(aq)).",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "MnO4⁻ is a stronger oxidising agent than Zn²⁺ and will oxidise Zn (to Zn²⁺). (Or: Zn²⁺ is a weaker oxidising agent than MnO4⁻, therefore MnO4⁻ will be reduced.)",
    marking_notes: "Memo: stronger oxidising agent (1); than Zn²⁺ (1); will oxidise Zn (1) — or the equivalent weaker-oxidising-agent version. Steps here follow those three tick points.",
    steps: [
      st(1, "Which is the stronger oxidising agent", "MnO4⁻", ["Zn²⁺", "Zn", "Mn²⁺"], 2),
      st(1, "Comparison", "MnO4⁻ is a stronger oxidising agent than Zn²⁺", ["Zn²⁺ is a stronger oxidising agent than MnO4⁻", "MnO4⁻ is a stronger reducing agent than Zn", "Zn²⁺ and MnO4⁻ are equally strong oxidising agents"], 0),
      st(1, "Consequence", "MnO4⁻ will oxidise Zn (to Zn²⁺)", ["Zn²⁺ will oxidise MnO4⁻", "Zn will reduce Zn²⁺", "No reaction takes place"], 1),
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "A standard electrochemical cell has a Ni electrode in Ni²⁺(aq) and a Mn electrode in Mn²⁺(aq), connected by a voltmeter and component Y (a U-tube between the two half-cells). Write down the function of component Y.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Provides a path for the movement of ions / completes the circuit / ensures electrical neutrality / restores charge balance.", marking_notes: "Memo: any one of these.",
    steps: [st(1, "Function of Y (salt bridge)", "It provides a path for the movement of ions and maintains electrical neutrality", ["It allows electrons to flow between the half-cells", "It speeds up the reaction by acting as a catalyst", "It prevents the two solutions from ever being in electrical contact"], 0)],
    image_url: `${IMG}/8.2-cell-diagram.png`,
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "In which direction will electrons flow in the external circuit? Choose from 'Ni to Mn' OR 'Mn to Ni'.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Mn to Ni (Mn, the stronger reducing agent, is oxidised at the anode).", marking_notes: "Memo: Mn to Ni.",
    steps: [st(2, "Direction of electron flow", "Mn to Ni", ["Ni to Mn", "Through the salt bridge from Ni to Mn", "No electron flow"], 0)],
    image_url: `${IMG}/8.2-cell-diagram.png`,
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "Calculate the initial emf of this standard cell (Ni|Ni²⁺ and Mn|Mn²⁺; E°(Ni²⁺/Ni) = -0,27 V, E°(Mn²⁺/Mn) = -1,18 V).",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°reduction - E°oxidation = -0,27 - (-1,18) = 0,91 V.",
    marking_notes: "Memo: formula (1), -0,27 (1), -(-1,18) (1), 0,91 V (1). Option 2 (adding half-reaction potentials) is also accepted.",
    steps: [
      st(1, "Formula", "E°cell = E°reduction - E°oxidation", ["E°cell = E°oxidation - E°reduction", "E°cell = E°reduction + E°oxidation", "E°cell = E°reduction x E°oxidation"], 0),
      st(1, "E° of the reduction half-reaction (Ni²⁺ + 2e⁻ -> Ni)", "-0,27 V", ["+0,27 V", "-1,18 V", "+1,18 V"], 1),
      st(1, "E° of the oxidation half-reaction (Mn -> Mn²⁺ + 2e⁻)", "-1,18 V (subtracted: -(-1,18))", ["+1,18 V (subtracted: -(+1,18))", "-0,27 V (subtracted)", "-1,18 V added to -0,27"], 2),
      st(1, "Final answer", "0,91 V", ["-0,91 V", "1,45 V", "-1,45 V"], 3),
    ],
    image_url: `${IMG}/8.2-cell-diagram.png`,
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "Write down the balanced equation for the net cell reaction taking place.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Ni²⁺ + Mn -> Mn²⁺ + Ni.",
    marking_notes: "Memo: reactants (1), products (1), balancing (1); phases and equilibrium arrows ignored.",
    steps: [
      st(1, "Reactants", "Ni²⁺ and Mn", ["Ni and Mn²⁺", "Ni²⁺ and Mn²⁺", "Ni and Mn"], 0),
      st(1, "Products", "Mn²⁺ and Ni", ["Ni²⁺ and Mn", "Mn²⁺ and Ni²⁺", "Mn and Ni"], 2),
      st(1, "Balanced equation", "Ni²⁺ + Mn -> Mn²⁺ + Ni", ["Ni²⁺ + 2Mn -> 2Mn²⁺ + Ni", "Ni + Mn²⁺ -> Ni²⁺ + Mn", "Ni²⁺ + Mn -> Mn + Ni²⁺"], 1),
    ],
    image_url: `${IMG}/8.2-cell-diagram.png`,
  },
  {
    number: "8", sub_number: "8.2.5",
    text: "The concentration of Ni²⁺(aq) is now increased. Will the reading on the voltmeter INCREASE, DECREASE or REMAIN THE SAME?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Increase (Ni²⁺ is a reactant; more reactant increases the emf).", marking_notes: "Memo: increase.",
    steps: [st(1, "Voltmeter reading", "Increases", ["Decreases", "Remains the same", "Drops to zero"], 0)],
  },

  // ============ QUESTION 9 (13 marks) ============
  {
    number: "9", sub_number: "9.1",
    text: "A simplified cell is used for the electrolysis of CONCENTRATED chromium(III) chloride, CrCl3(aq), with carbon electrodes R and T. The net cell reaction is 2CrCl3(aq) -> 2Cr(s) + 3Cl2(g). Define the term electrolysis.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "The chemical process in which electrical energy is converted to chemical energy (or: the use of electrical energy to produce a chemical change; or: the process during which an electric current passes through a solution/molten ionic compound).",
    marking_notes: "Memo: any one of the three (2 or 0).",
    steps: [st(2, "Definition of electrolysis", "The chemical process in which electrical energy is converted to chemical energy", ["The chemical process in which chemical energy is converted to electrical energy", "The process in which a substance dissolves in water to form ions", "The process in which a metal is oxidised by oxygen"], 0)],
    image_url: `${IMG}/9-electrolysis-cell.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "The graph shows the mass of electrode T increasing from 2,2 g to a final mass X over 10 hours (so Cr is deposited on T). Write down the half-reaction that takes place at electrode T.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cr³⁺(aq) + 3e⁻ -> Cr.",
    marking_notes: "Memo: Cr³⁺ + 3e⁻ -> Cr (2); a reversible arrow gives 1/2; reaction written as oxidation gives 0; omitting the + on Cr³⁺ max 1/2.",
    steps: [st(2, "Half-reaction at T", "Cr³⁺(aq) + 3e⁻ -> Cr(s)", ["Cr(s) -> Cr³⁺(aq) + 3e⁻", "2Cl⁻(aq) -> Cl2(g) + 2e⁻", "Cr²⁺(aq) + 2e⁻ -> Cr(s)"], 0)],
    image_url: `${IMG}/9.2-graph.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "A current of 2,5 A passes through the cell for 10 hours. Calculate the total charge that flows through the cell during this time.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "q = IΔt = (2,5)(10 x 60 x 60) = 9 x 10⁴ C (90 000 C).",
    marking_notes: "Memo: formula (1), substitution (1), answer (1).",
    steps: [
      st(1, "Formula", "q = IΔt", ["q = I/Δt", "q = I²Δt", "q = Δt/I"], 0),
      st(1, "Substitution (time in seconds)", "q = (2,5)(10 x 60 x 60)", ["q = (2,5)(10 x 60)", "q = (2,5)(10)", "q = (2,5)/(10 x 60 x 60)"], 2),
      st(1, "Answer", "9 x 10⁴ C", ["25 C", "1,5 x 10³ C", "9 x 10⁻⁵ C"], 1),
    ],
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "Calculate the value of X (the final mass of electrode T) shown on the graph. The initial mass of T is 2,2 g; q = 9 x 10⁴ C from 9.2.2; e = 1,6 x 10⁻¹⁹ C; NA = 6,02 x 10²³ mol⁻¹; M(Cr) = 52 g·mol⁻¹.",
    marks: 6, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "N(electrons) = 9 x 10⁴/1,6 x 10⁻¹⁹ = 5,63 x 10²³; N(Cr) = 5,63 x 10²³/3 = 1,88 x 10²³; n(Cr) = 1,88 x 10²³/6,02 x 10²³ = 0,31 mol; m(Cr) = 0,31 x 52 = 16,12 g; X = 16,12 + 2,2 = 18,32 g.",
    marking_notes: "Memo: (a) substitute 1,6 x 10⁻¹⁹ in n = Q/e; (b) N(Cr) = n(electrons)/3; (c) n(Cr) = N/NA; (d) substitute 52 in n = m/M; (e) add 2,2 g; (f) final answer 18,32 g (range 18,32 to 18,40 g). Option 2 (n(Cr) = 9 x 10⁴/(3 x 96 500)) is also accepted. If Cr²⁺ + 2e⁻ -> Cr was used in 9.2.1, division by 2 is accepted, giving 26,49 g.",
    steps: [
      st(1, "Number of electrons", "N = 9 x 10⁴/1,6 x 10⁻¹⁹ = 5,63 x 10²³", ["N = 1,6 x 10⁻¹⁹/9 x 10⁴ = 1,78 x 10⁻²⁴", "N = 9 x 10⁴ x 1,6 x 10⁻¹⁹ = 1,44 x 10⁻¹⁴", "N = 9 x 10⁴/6,02 x 10²³"], 0),
      st(1, "Number of Cr atoms (3 electrons per Cr)", "N(Cr) = 5,63 x 10²³/3 = 1,88 x 10²³", ["N(Cr) = 5,63 x 10²³ x 3", "N(Cr) = 5,63 x 10²³/2", "N(Cr) = 5,63 x 10²³"], 2),
      st(1, "Moles of Cr", "n = 1,88 x 10²³/6,02 x 10²³ = 0,31 mol", ["n = 6,02 x 10²³/1,88 x 10²³ = 3,2 mol", "n = 1,88 x 10²³ x 6,02 x 10²³", "n = 1,88 x 10²³/52"], 1),
      st(1, "Mass of Cr deposited", "m = 0,31 x 52 = 16,12 g", ["m = 0,31/52 = 0,006 g", "m = 0,31 x 24 = 7,4 g", "m = 0,31 x 104 = 32,2 g"], 3),
      st(1, "Add the initial mass of T", "X = 16,12 + 2,2", ["X = 16,12 - 2,2", "X = 16,12 x 2,2", "X = 16,12"], 0),
      st(1, "Final answer", "18,32 g", ["13,92 g", "26,49 g", "35,46 g"], 2),
    ],
    image_url: `${IMG}/9.2-graph.png`,
  },
];

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
