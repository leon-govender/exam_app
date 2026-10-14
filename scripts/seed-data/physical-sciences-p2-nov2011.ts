// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2011, National
// Senior Certificate (English/Afrikaans bilingual memo).
// Sources: question paper (English) from saexampapers.co.za (cover page
// verified: "PHYSICAL SCIENCES: CHEMISTRY (P2)", "NOVEMBER 2011", 150 marks,
// 3 hours, 15 pages + 4 data sheets); memorandum "Memo 2 (English & Afrikaans)"
// from the Western Cape Education Department archive
// (westerncape.gov.za/education/documents, 2011 NSC November Examination
// Papers > Physical Sciences). The memo is a scanned PDF (no text layer); all
// 25 pages were rendered and read visually. Cover page confirms "NOVEMBER 2011
// POSSIBLE ANSWERS, MARKS 150". Question numbers, sub-question marks and
// per-question totals ([5], [20], [14], [17], [11], [12], [19], [17], [12],
// [11], [12]) match between paper and memo.
//
// Paper structure: Section A (Q1 one-word items 5, Q2 multiple choice 20) and
// Section B (Q3-Q11, 125 marks), no choice. All 150 marks are included.
//
// Grading convention: the app's standing preference is all multiple choice,
// so EVERY item here uses `steps` (stepped MCQ, one step per memo mark-earning
// point, four options, wrong options trap real Grade 12 errors). No
// marking_points are used, so there are no open-ended items to flag. Where the
// memo awards a mark per statement for an explanation, each statement became a
// step; the memo's own alternative acceptable wordings were NOT used as
// distractors.
//
// FLAG for review (topic mapping): this is an older-syllabus paper.
//  - 1.4 (cryolite in aluminium extraction), 2.8 (what cannot be a
//    fertiliser), Q10 (chlor-alkali membrane cell) and Q11 (Ostwald process,
//    fertiliser N content, eutrophication) all map to "chemical-industry".
//  - 1.5 (cell capacity) and 2.7 (metal atom becoming an ion: loses electrons,
//    oxidised) have no exact topic; both mapped to "electrochemistry" (closest
//    match).
//  - 1.1/1.2/2.1/2.2/2.3/Q3/Q5 are organic chemistry; Q4 parts 4.2-4.6 (except
//    4.4 and 4.5.1) are mapped to intermolecular-forces (boiling point and
//    branching), 4.1, 4.3, 4.4 and 4.5.1 to organic-chemistry.
//
// FLAG: memo oddities transcribed faithfully.
//  - 5.4: the memo accepts "haloalkane dissolved in ethanol" as one of the
//    reaction conditions for the substitution (Q), although ethanol as the
//    solvent is normally associated with elimination. Only the two conditions
//    "dilute/aqueous base" and "mild heat" are used as the correct steps.
//  - 2.6 and 2.10: the memo gives a letter plus its value (e.g. "C / Ea",
//    "C / +2"); the letter is the correct option.
//  - 3.4.4 / 4.5.1 / 5.2: the memo expects full structural formulae with all H
//    atoms shown (condensed formulae are penalised). The options here are in
//    text form (semi-structural), because a student cannot draw structures in
//    the app; the options describe the connectivity unambiguously.
//  - 7.1.2: the memo wording "4 mol or volumes of gas produces 2 mol" refers
//    to the reverse reaction (products 4 mol gas, reactants 2 mol gas).
//  - 7.2.1: three worked options exist in the memo; all reach x = 0,3 mol. The
//    8 marks are: ratio, equilibrium n(H2) and n(CO2), n(CO), divide by volume,
//    Kc expression, substitution of Kc, substitution of concentrations, final
//    answer.
//
// Diagrams cropped from page renders (Pillow) into
// public/question-images/chemistry-2011-p2/: 2.3 compound table, 2.5
// Maxwell-Boltzmann curves, 2.6 potential-energy diagram, Q3 compound table,
// Q5 flow diagram, Q6 O2 volume-time graph, Q8 galvanic cell, Q9 electrolytic
// cell, Q10 membrane cell, Q11 nitric acid flow diagram. The Q4 boiling-point
// table is reproduced in the question text. The fertiliser bag drawing in 11.4
// is purely decorative (its "3 - 1 - 5 (30)" label is in the question text) and
// was skipped.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2011-p2";

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
  year: 2011,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://www.saexampapers.co.za/wp-content/uploads/2022/07/Physical-Sciences-P2-Nov-2011-Eng.pdf" as string | null,
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

// Build one step: the correct option is inserted at index `pos` among the
// three wrong options.
function mc(marks: number, description: string, correct: string, wrong: [string, string, string], pos: number): MarkingPointStep {
  const options: string[] = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

// Lettered multiple-choice item (options A-D given in the paper).
function letter(marks: number, description: string, opts: [string, string, string, string], correctIndex: number): MarkingPointStep {
  return { marks, description, options: [...opts], correctIndex };
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: ONE-WORD ITEMS (5 marks) ============
  {
    number: "1", sub_number: "1.1",
    text: "Give ONE word/term for the following description: The homologous series to which the compound CH3Cℓ belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Haloalkanes (also accepted: halogenoalkanes / alkyl halides).",
    marking_notes: "CH3Cℓ is an alkane with a halogen substituent.",
    steps: [mc(1, "Homologous series of CH3Cℓ", "Haloalkanes", ["Alkanes", "Alcohols", "Esters"], 2)],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Give ONE word/term for the following description: The general term that describes compounds that consist of hydrogen and carbon atoms only.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Hydrocarbons.",
    marking_notes: "Compounds made of only C and H.",
    steps: [mc(1, "Term for compounds of H and C only", "Hydrocarbons", ["Carbohydrates", "Hydrates", "Isomers"], 0)],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Give ONE word/term for the following description: The stage reached in a reversible chemical reaction when the rate of the forward reaction is equal to the rate of the reverse reaction.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "(Dynamic/chemical) equilibrium.",
    marking_notes: "Forward rate = reverse rate.",
    steps: [mc(1, "Stage where forward rate equals reverse rate", "(Dynamic) chemical equilibrium", ["Completion of the reaction (reaction stops)", "Activation energy", "Neutralisation point"], 1)],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Give ONE word/term for the following description: The name of the chemical substance in which Aℓ2O3 is dissolved to lower its melting point during the industrial extraction of aluminium.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Cryolite (sodium hexafluoroaluminate, Na3AℓF6).",
    marking_notes: "Cryolite lowers the melting point of aluminium oxide so electrolysis is more economical.",
    steps: [mc(1, "Substance in which Aℓ2O3 is dissolved", "Cryolite", ["Bauxite", "Brine", "Graphite (carbon)"], 3)],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Give ONE word/term for the following description: The ability of a cell to store charge.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "(Cell) capacity.",
    marking_notes: "Battery/cell capacity is the charge it can store.",
    steps: [mc(1, "Ability of a cell to store charge", "(Cell) capacity", ["Cell potential (emf)", "Internal resistance", "Electrode potential"], 0)],
  },

  // ============ QUESTION 2: MULTIPLE CHOICE (20 marks) ============
  {
    number: "2", sub_number: "2.1",
    text: "Which ONE of the following general formulae represents alkynes? A CnH2n+2  B CnH2n-2  C CnH2n  D CnH2n-1",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "B — CnH2n-2.",
    marking_notes: "Alkynes: CnH2n-2.",
    steps: [letter(2, "Choose the general formula for alkynes", ["A: CnH2n+2", "B: CnH2n-2", "C: CnH2n", "D: CnH2n-1"], 1)],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Which ONE of the following homologous series does NOT contain a CARBONYL group (C=O)? A Aldehydes  B Alcohols  C Carboxylic acids  D Esters",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B — Alcohols (the functional group is -OH only).",
    marking_notes: "Aldehydes, carboxylic acids and esters all contain C=O.",
    steps: [letter(2, "Choose the series without a carbonyl group", ["A: Aldehydes", "B: Alcohols", "C: Carboxylic acids", "D: Esters"], 1)],
  },
  {
    number: "2", sub_number: "2.3",
    text: "The structures of four organic compounds are shown (see diagram): I CH3-CH(CH3)-CH(OH)-CH3; II CH3-CH2-CH(OH)-CH2-CH3; III CH3-CH(OH)-CH(CH3)-CH3; IV CH3-CH(CH2OH)-CH2-CH3. Which of the compounds have the same IUPAC name? A I and II only  B III and IV only  C I and III only  D II and IV only",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C — I and III only. Both are 3-methylbutan-2-ol; II is pentan-3-ol and IV is 2-methylbutan-1-ol.",
    marking_notes: "Name each: I and III are identical structures drawn differently.",
    steps: [letter(2, "Which compounds have the same IUPAC name?", ["A: I and II only", "B: III and IV only", "C: I and III only", "D: II and IV only"], 2)],
    image_url: `${IMG}/2.3-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.4",
    text: "The reaction 2CrO4²⁻(aq) + 2H⁺(aq) ⇌ Cr2O7²⁻(aq) + H2O(ℓ) reaches equilibrium (CrO4²⁻ is yellow, Cr2O7²⁻ is orange). Which ONE of the following changes to the reaction mixture will change its colour from yellow to orange? A Add a catalyst.  B Add water to the reaction mixture.  C Add a few drops of sodium hydroxide solution.  D Add a few drops of concentrated hydrochloric acid.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "D — adding concentrated HCℓ increases [H⁺], so the forward reaction is favoured and more orange Cr2O7²⁻ forms.",
    marking_notes: "A catalyst does not shift equilibrium; NaOH removes H⁺ (shifts left); dilution favours the side with more particles (left).",
    steps: [letter(2, "Which change turns the mixture orange?", ["A: Add a catalyst", "B: Add water", "C: Add a few drops of NaOH(aq)", "D: Add a few drops of concentrated HCℓ"], 3)],
  },
  {
    number: "2", sub_number: "2.5",
    text: "The Maxwell-Boltzmann energy distribution curves in the diagram show the number of particles as a function of kinetic energy for a reaction at four different temperatures (curves A, B, C, D). E is the minimum kinetic energy needed for effective collisions. Which ONE of these curves represents the reaction with the highest rate?",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "D — curve D (highest temperature) has the largest number of particles with energy of at least E.",
    marking_notes: "Highest rate = largest area under the curve to the right of E.",
    steps: [letter(2, "Which curve has the highest rate?", ["A: Curve A", "B: Curve B", "C: Curve C", "D: Curve D"], 3)],
    image_url: `${IMG}/2.5-maxwell-boltzmann.png`,
  },
  {
    number: "2", sub_number: "2.6",
    text: "A certain chemical reaction is represented by the potential energy diagram (E1 = energy of reactants, E2 = energy of products, Ea = activation energy, ΔH = heat of reaction). Which ONE of the following quantities will change when a catalyst is added? A E2  B E1  C Ea  D ΔH",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "C — Ea. A catalyst provides an alternative pathway with a lower activation energy; the energies of reactants and products and ΔH do not change.",
    marking_notes: "Memo gives 'C / Ea'.",
    steps: [letter(2, "Which quantity changes with a catalyst?", ["A: E2", "B: E1", "C: Ea", "D: ΔH"], 2)],
    image_url: `${IMG}/2.6-potential-energy.png`,
  },
  {
    number: "2", sub_number: "2.7",
    text: "When a metallic atom becomes an ion, it … A loses electrons and is oxidised.  B loses electrons and is reduced.  C gains electrons and is oxidised.  D gains electrons and is reduced.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A — metal atoms lose electrons to form positive ions, which is oxidation.",
    marking_notes: "Topic mapping approximate (see header).",
    steps: [letter(2, "Metal atom becoming an ion", ["A: loses electrons and is oxidised", "B: loses electrons and is reduced", "C: gains electrons and is oxidised", "D: gains electrons and is reduced"], 0)],
  },
  {
    number: "2", sub_number: "2.8",
    text: "Which ONE of the following substances CANNOT be used as a fertiliser? A Nitrogen gas  B Guano  C Bone meal  D Ammonium sulphate",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "A — nitrogen gas (N2) cannot be absorbed by plants; guano, bone meal and ammonium sulphate supply usable nutrients.",
    marking_notes: "Plants cannot use atmospheric N2 directly.",
    steps: [letter(2, "Which substance cannot be used as a fertiliser?", ["A: Nitrogen gas", "B: Guano", "C: Bone meal", "D: Ammonium sulphate"], 0)],
  },
  {
    number: "2", sub_number: "2.9",
    text: "Consider the two half-reactions that occur in a battery: Zn(s) + 2OH⁻(aq) → ZnO(s) + H2O(ℓ) + 2e⁻ and Ag2O(s) + H2O(ℓ) + 2e⁻ → 2Ag(s) + 2OH⁻(aq). Which ONE of the following statements is CORRECT? A Ag(s) is reduced.  B Zn(s) is the anode.  C Ag2O(s) is the negative electrode.  D Electrons are transferred from Ag(s) to Zn(s).",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "B — Zn is oxidised (loses electrons), so it is the anode. Ag2O is reduced (not Ag), Ag2O is the positive electrode, and electrons flow from Zn to Ag2O.",
    marking_notes: "Anode = site of oxidation.",
    steps: [letter(2, "Choose the correct statement", ["A: Ag(s) is reduced", "B: Zn(s) is the anode", "C: Ag2O(s) is the negative electrode", "D: Electrons are transferred from Ag(s) to Zn(s)"], 1)],
  },
  {
    number: "2", sub_number: "2.10",
    text: "The oxidation number of copper (Cu) in the compound CuSO4 is … A -2  B -4  C +2  D +4",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "C — +2. SO4 has charge 2-, so Cu must be +2.",
    marking_notes: "Memo gives 'C / +2'.",
    steps: [letter(2, "Oxidation number of Cu in CuSO4", ["A: -2", "B: -4", "C: +2", "D: +4"], 2)],
  },

  // ============ QUESTION 3: ORGANIC COMPOUNDS (14 marks) ============
  {
    number: "3", sub_number: "3.1.1",
    text: "The letters A to F in the table (see diagram) represent six organic compounds: A = an aldehyde with a five-carbon main chain and a methyl branch; B = H-C≡C-CH3; C = cyclopropane (a ring of three CH2 groups); D = CH3-C(=O)-CH3; E = butane; F = ethyl butanoate. Write down the letter that represents a ketone.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "D — propanone (CH3-CO-CH3): carbonyl group bonded to two carbon atoms.",
    marking_notes: "A is an aldehyde (C=O at the chain end).",
    steps: [mc(1, "Letter of the ketone", "D", ["A", "B", "F"], 3)],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Using the table of compounds A to F (see diagram), write down the letter that represents a compound which is an isomer of prop-1-ene.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C — cyclopropane (C3H6) has the same molecular formula as prop-1-ene but a different structure.",
    marking_notes: "Prop-1-ene is C3H6.",
    steps: [mc(1, "Letter of an isomer of prop-1-ene", "C", ["A", "B", "E"], 1)],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Write down the IUPAC name of compound A (see the table in Question 3): an aldehyde with a five-carbon main chain ending in -CHO and one methyl group on the fourth carbon from the CHO carbon.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "4-methylpentanal.",
    marking_notes: "Memo: 4-methylpentanal (1 mark for 4-methyl, 1 for pentanal). Omitting hyphens: maximum 1/2.",
    steps: [
      mc(1, "Substituent and its position", "4-methyl", ["2-methyl", "3-methyl", "1-methyl"], 2),
      mc(1, "Parent chain and functional group", "pentanal", ["pentan-2-one", "pentanoic acid", "hexanal"], 0),
    ],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Write down the IUPAC name of compound B (H-C≡C-CH3) (see the table in Question 3).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Prop-1-yne (propyne).",
    marking_notes: "Memo: prop ✓, -1-yne ✓.",
    steps: [
      mc(1, "Stem (number of carbon atoms)", "prop-", ["eth-", "but-", "meth-"], 1),
      mc(1, "Suffix for the triple bond and its position", "-1-yne", ["-1-ene", "-ane", "-2-yne"], 3),
    ],
    image_url: `${IMG}/3-compounds-table.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "Write down the NAME or FORMULA of EACH of the TWO products formed during the complete combustion of compound E (butane).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "H2O (water) and CO2 (carbon dioxide).",
    marking_notes: "Complete combustion of a hydrocarbon gives CO2 and H2O.",
    steps: [
      mc(1, "First product of complete combustion", "Water (H2O)", ["Hydrogen peroxide (H2O2)", "Hydrogen gas (H2)", "Soot (C)"], 0),
      mc(1, "Second product of complete combustion", "Carbon dioxide (CO2)", ["Carbon monoxide (CO)", "Methane (CH4)", "Ethanol (C2H5OH)"], 2),
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "Compound F (ethyl butanoate) is the organic product of the reaction between a carboxylic acid and ethanol. Write down the name of the homologous series to which compound F belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Esters.",
    marking_notes: "Carboxylic acid + alcohol gives an ester.",
    steps: [mc(1, "Homologous series of F", "Esters", ["Carboxylic acids", "Aldehydes", "Alcohols"], 1)],
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Write down the structural formula of the FUNCTIONAL GROUP of carboxylic acids.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "-COOH, i.e. a carbon double-bonded to O and single-bonded to -O-H.",
    marking_notes: "Memo accepts C(=O)-O-H (with or without R).",
    steps: [mc(1, "Functional group of carboxylic acids", "–C(=O)–O–H (carboxyl group)", ["–C(=O)–H (carbonyl at chain end)", "–O–H (hydroxyl)", "–C(=O)–O–C– (ester linkage)"], 0)],
  },
  {
    number: "3", sub_number: "3.4.3",
    text: "Write down the IUPAC name of the carboxylic acid from which compound F (ethyl butanoate) is prepared.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Butanoic acid.",
    marking_notes: "Memo: butan ✓, oic ✓ (acid). Also accepts butan-1-oic acid.",
    steps: [
      mc(1, "Stem (carbon chain length)", "butan-", ["propan-", "pentan-", "ethan-"], 3),
      mc(1, "Suffix for a carboxylic acid", "-oic acid", ["-oate", "-ol", "-al"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.4.4",
    text: "Write down the structural formula of compound F (ethyl butanoate). (The options below give the connectivity in text form.)",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-CH2-CH2-C(=O)-O-CH2-CH3 (all H atoms shown in the memo's structural formula, ester group -C(=O)-O- encircled).",
    marking_notes: "Memo: functional group encircled (1), whole structure correct (1). Condensed formula scores 1/2 in the memo; molecular formula 0/2. No positive marking from 3.4.3.",
    steps: [
      mc(1, "Functional group of the structure", "Ester group: –C(=O)–O– linking two carbon chains", ["Carboxyl group –C(=O)–O–H", "Ether group –C–O–C– with no carbonyl", "Carbonyl group –C(=O)– only"], 1),
      mc(1, "Whole structure of ethyl butanoate", "CH3–CH2–CH2–C(=O)–O–CH2–CH3", ["CH3–CH2–C(=O)–O–CH2–CH3 (ethyl propanoate)", "CH3–CH2–CH2–C(=O)–O–CH3 (methyl butanoate)", "CH3–CH2–CH2–CH2–C(=O)–O–H (pentanoic acid)"], 2),
    ],
  },

  // ============ QUESTION 4: BRANCHING AND BOILING POINT (17 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "Three hydrocarbons (A, B and C) with molecular formula C5H12 are used to investigate the effect of BRANCHING on the BOILING POINTS of hydrocarbons. Boiling points: A 36 °C; B 28 °C; C 10 °C. Write down the term used to describe compounds with the same molecular formula, but with different structural formulae.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "(Structural) isomers.",
    marking_notes: "Memo also accepts isomerism/isometry.",
    steps: [mc(1, "Term for same molecular formula, different structure", "(Structural) isomers", ["Homologues", "Isotopes", "Allotropes"], 0)],
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "For this investigation (C5H12 isomers A 36 °C, B 28 °C, C 10 °C), write down the DEPENDENT variable.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Boiling point.",
    marking_notes: "The boiling point is what is measured.",
    steps: [mc(1, "Dependent variable", "Boiling point", ["Branching", "Number of carbon atoms", "Vapour pressure at a fixed temperature"], 3)],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "For this investigation, write down the INDEPENDENT variable.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Branching (structure/structural formula).",
    marking_notes: "Memo also accepts structure, isomers, surface area, chain length.",
    steps: [mc(1, "Independent variable", "Branching (structure) of the hydrocarbon", ["Boiling point", "Molecular formula C5H12", "Pressure of the surroundings"], 1)],
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "For this investigation, write down a CONTROLLED variable.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Number of C atoms (or molecular formula C5H12 / molar mass).",
    marking_notes: "All three are isomers of C5H12, so formula and molar mass are fixed.",
    steps: [mc(1, "Controlled variable", "Number of C atoms (molecular formula C5H12)", ["Branching", "Boiling point", "Structural formula"], 2)],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Are these hydrocarbons (C5H12 isomers) saturated or unsaturated? Explain the answer.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Saturated: they have no double (or triple) bonds / only single bonds between carbon atoms.",
    marking_notes: "Saturated (1) + explanation (2). If only 'saturated' with 'they are alkanes / CnH2n+2': maximum 2/3.",
    steps: [
      mc(1, "Saturated or unsaturated?", "Saturated", ["Unsaturated", "Aromatic", "Neither saturated nor unsaturated"], 0),
      mc(2, "Explanation", "They have no double or triple bonds (only single C–C bonds)", ["They contain at least one C=C double bond", "They contain a ring of carbon atoms", "They have the general formula CnH2n"], 2),
    ],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "One of the hydrocarbons (A 36 °C, B 28 °C, C 10 °C) has a straight chain with no branches. Write down the letter that represents this hydrocarbon.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "A — the straight-chain isomer has the largest surface area and so the highest boiling point (36 °C).",
    marking_notes: "Boiling point decreases with branching.",
    steps: [mc(1, "Letter of the straight-chain hydrocarbon", "A", ["B", "C", "Cannot be determined from the data"], 0)],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Write down the IUPAC name of the straight-chain C5H12 hydrocarbon.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Pentane.",
    marking_notes: "Memo: pent ✓, ane ✓.",
    steps: [
      mc(1, "Stem for five carbon atoms", "pent-", ["but-", "hex-", "prop-"], 1),
      mc(1, "Suffix for an alkane", "-ane", ["-ene", "-yne", "-anol"], 3),
    ],
  },
  {
    number: "4", sub_number: "4.5.1",
    text: "Consider hydrocarbon C (boiling point 10 °C, the most branched isomer of C5H12). Write down the structural formula of hydrocarbon C. (The options give the connectivity in text form.)",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2,2-dimethylpropane: a central carbon bonded to four CH3 groups, C(CH3)4, with all 12 H atoms shown in the memo's structural formula.",
    marking_notes: "Memo: condensed formula max 1/2; molecular formula 0/2; wrong number of bonds 0/2.",
    steps: [
      mc(1, "Carbon skeleton of the most branched C5H12 isomer", "A central C bonded to four CH3 groups", ["CH3–CH2–CH2–CH2–CH3 (unbranched)", "CH3–CH(CH3)–CH2–CH3 (one methyl branch)", "A ring of five carbon atoms"], 0),
      mc(1, "Hydrogen atoms and bonds", "12 H in total: three H on each CH3 and none on the central C (each C has four bonds)", ["Central C bonded to one H and three CH3 groups (wrong valency)", "Only 10 H atoms in total", "Central C bonded to four H atoms and one CH3"], 3),
    ],
  },
  {
    number: "4", sub_number: "4.5.2",
    text: "Explain why hydrocarbon C has the lowest boiling point. In your explanation, refer to its structure, intermolecular forces and the energy involved.",
    marks: 3, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "Structure: C is the most branched / most compact (smallest surface area). Intermolecular forces: it has the weakest London (dispersion) forces. Energy: the least energy is needed to overcome the intermolecular forces.",
    marking_notes: "Memo: one mark each for structure, intermolecular forces and energy; each statement marked independently.",
    steps: [
      mc(1, "Structure", "Most branched / most compact molecule with the smallest surface area", ["Straight chain with the largest surface area", "Contains a double bond", "Has the greatest molecular mass"], 1),
      mc(1, "Intermolecular forces", "Weakest London (dispersion) forces between molecules", ["Strongest London forces between molecules", "Hydrogen bonds between molecules", "Weak covalent bonds within each molecule"], 2),
      mc(1, "Energy", "Least energy needed to overcome the intermolecular forces", ["Most energy needed to overcome the intermolecular forces", "Least energy needed to break the covalent bonds within molecules", "Most energy needed to break the covalent bonds within molecules"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "Which ONE of hydrocarbons (A 36 °C, B 28 °C, C 10 °C) has the highest vapour pressure? Refer to the data in the table to give a reason for the answer.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "C — it has the lowest boiling point.",
    marking_notes: "Memo: C (1), lowest boiling point (1).",
    steps: [
      mc(1, "Hydrocarbon with the highest vapour pressure", "C", ["A", "B", "A and B have equal vapour pressure"], 2),
      mc(1, "Reason from the data", "It has the lowest boiling point", ["It has the highest boiling point", "It has the largest molar mass", "It has the longest chain"], 0),
    ],
  },

  // ============ QUESTION 5: ORGANIC REACTIONS (11 marks) ============
  {
    number: "5", sub_number: "5.1.1",
    text: "In the flow diagram (see diagram) R, P and Q represent different types of reactions: P converts CH3-CH=CH2 to alcohol X (major product); R converts CH3CHBrCH3 to CH3-CH=CH2; Q converts CH3CHBrCH3 to alcohol Y. Name the type of reaction represented by P.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Addition (hydration).",
    marking_notes: "An alkene reacts with water to give an alcohol.",
    steps: [mc(1, "Reaction type P", "Addition (hydration)", ["Elimination", "Substitution", "Cracking"], 0)],
    image_url: `${IMG}/5-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Using the flow diagram of Question 5 (Q converts CH3CHBrCH3 to alcohol Y in the presence of a base), name the type of reaction represented by Q.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Substitution (hydrolysis).",
    marking_notes: "The Br is replaced by OH.",
    steps: [mc(1, "Reaction type Q", "Substitution (hydrolysis)", ["Addition", "Elimination", "Esterification"], 1)],
    image_url: `${IMG}/5-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Using the flow diagram of Question 5 (R converts CH3CHBrCH3 to CH3-CH=CH2), name the type of reaction represented by R.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Elimination (dehydrohalogenation / dehydrobromination).",
    marking_notes: "HBr is removed to form a double bond.",
    steps: [mc(1, "Reaction type R", "Elimination (dehydrohalogenation)", ["Addition", "Substitution", "Hydrogenation"], 2)],
    image_url: `${IMG}/5-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.2",
    text: "Using structural formulae, write down a balanced equation for reaction P (propene to alcohol X, the major product). (The options give the species in text form.)",
    marks: 4, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3–CH=CH2 + H2O → CH3–CH(OH)–CH3 (propan-2-ol, major product), drawn with all H atoms shown.",
    marking_notes: "Memo: reactant structure (1), H2O (1), product with functional group encircled (1) and whole structure correct (1). Arrow omitted: max 3/4; condensed formulae: max 3/4; molecular formulae: max 1/4; wrong balancing: max 3/4.",
    steps: [
      mc(1, "Organic reactant", "Propene: CH3–CH=CH2", ["Propane: CH3–CH2–CH3", "Prop-1-yne: CH3–C≡CH", "Cyclopropane"], 0),
      mc(1, "Other reactant for reaction P", "H2O", ["H2", "HBr", "NaOH(aq)"], 3),
      mc(1, "Functional group position in the major product", "–OH on the middle carbon (propan-2-ol)", ["–OH on the end carbon (propan-1-ol)", "–Br on the middle carbon (2-bromopropane)", "–COOH on the end carbon"], 1),
      mc(1, "Complete balanced equation", "CH3CH=CH2 + H2O → CH3CH(OH)CH3", ["CH3CH=CH2 + H2O → CH3CH2CH2OH", "CH3CH=CH2 + H2 → CH3CH2CH3", "CH3CH=CH2 + HBr → CH3CHBrCH3"], 2),
    ],
    image_url: `${IMG}/5-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "Write down the IUPAC name of alcohol Y (formed from CH3CHBrCH3 in reaction Q, a substitution).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propan-2-ol (2-propanol).",
    marking_notes: "Memo: propan ✓, -2-ol ✓. 'Propanol' only: max 1/2.",
    steps: [
      mc(1, "Parent chain", "propan-", ["butan-", "ethan-", "propen-"], 1),
      mc(1, "Position and name of the functional group", "-2-ol", ["-1-ol", "-2-one", "-2-al"], 0),
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Reaction Q (CH3CHBrCH3 to alcohol Y) takes place in the presence of a BASE. Write down TWO reaction conditions for this reaction.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Any two of: dilute/aqueous base (KOH or NaOH) or excess water; mild heat; haloalkane dissolved in ethanol (per memo).",
    marking_notes: "See FLAG in the header about the ethanol condition. Steps use the two least ambiguous accepted conditions.",
    steps: [
      mc(1, "Reagent condition", "Dilute (aqueous) NaOH or KOH", ["Concentrated NaOH dissolved in ethanol", "Concentrated H2SO4", "Dilute HCℓ"], 2),
      mc(1, "Temperature condition", "Mild heat", ["Cooling to 0 °C", "UV light", "A platinum catalyst at high pressure"], 0),
    ],
  },

  // ============ QUESTION 6: RATE OF REACTION (12 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "Learners use copper(II) oxide POWDER to decompose hydrogen peroxide. They add 1 g copper(II) oxide to 100 cm³ hydrogen peroxide in a flask connected to a delivery tube: 2H2O2(ℓ) → 2H2O(ℓ) + O2(g) (catalysed by CuO(s)). Write down the name of ONE item of apparatus that can be used to measure the volume of the gas produced.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "(Gas) syringe (also accepted: burette / measuring cylinder).",
    marking_notes: "Any graduated cylinder or flask accepted.",
    steps: [mc(1, "Apparatus for measuring gas volume", "Gas syringe", ["Thermometer", "Stopwatch", "Pipette"], 1)],
  },
  {
    number: "6", sub_number: "6.2",
    text: "The volume of oxygen gas produced is measured every 10 seconds; the results are shown in the graph. Use the graph to determine the volume of oxygen gas collected in the container at 15 seconds.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "24 cm³ (0,024 dm³ / 24 mL).",
    marking_notes: "Read from the graph between 18 cm³ at 10 s and 30 cm³ at 20 s. Wrong unit after 24: max 1/2.",
    steps: [mc(2, "Volume of O2 at t = 15 s", "24 cm³", ["15 cm³", "18 cm³", "30 cm³"], 3)],
    image_url: `${IMG}/6-o2-volume-graph.png`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "How does the rate of the reaction change between t = 40 s and t = 70 s? Write down only INCREASES, DECREASES or REMAINS THE SAME. Refer to the graph to explain the answer.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Decreases: the gradient (slope) of the graph decreases / the curve is less steep.",
    marking_notes: "Memo: decreases (1), reason from the gradient (1).",
    steps: [
      mc(1, "Change in rate between 40 s and 70 s", "Decreases", ["Increases", "Remains the same", "First increases then decreases"], 0),
      mc(1, "Explanation from the graph", "The gradient (slope) of the graph decreases", ["The gradient of the graph increases", "The volume of oxygen decreases with time", "The graph is a straight line with constant slope"], 2),
    ],
    image_url: `${IMG}/6-o2-volume-graph.png`,
  },
  {
    number: "6", sub_number: "6.4",
    text: "What is the function of the copper(II) oxide in the decomposition of hydrogen peroxide?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "Catalyst (increases the rate by providing an alternative pathway with a lower activation energy).",
    marking_notes: "Copper(II) oxide is not consumed.",
    steps: [mc(1, "Function of CuO", "Catalyst", ["Reactant", "Product", "Inhibitor"], 3)],
  },
  {
    number: "6", sub_number: "6.5",
    text: "Apart from oxygen, write down the NAMES or FORMULAE of TWO substances present in the flask after 90 seconds.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "H2O (water) and CuO (copper(II) oxide).",
    marking_notes: "By 90 s the volume has plateaued so the H2O2 is used up; CuO as catalyst is unchanged.",
    steps: [
      mc(1, "First substance in the flask at 90 s", "H2O (water)", ["H2O2 (hydrogen peroxide)", "H2 (hydrogen gas)", "CO2 (carbon dioxide)"], 0),
      mc(1, "Second substance in the flask at 90 s", "CuO (copper(II) oxide)", ["Cu (copper metal)", "Cu(OH)2", "CuSO4"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.6",
    text: "The learners found that oxygen is produced at a slower rate when 1 g of a SOLID LUMP of copper(II) oxide is used instead of powder. Fully explain this observation.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "The lump has a smaller (exposed) surface area, so fewer H2O2 molecules per unit time contact the catalyst: fewer effective collisions per unit time.",
    marking_notes: "Memo: smaller surface area (1), fewer effective collisions per unit time (1).",
    steps: [
      mc(1, "Surface area of the lump", "Smaller (exposed) surface area / contact area", ["Larger (exposed) surface area", "Higher concentration of H2O2", "Higher activation energy of H2O2"], 2),
      mc(1, "Effect on collisions", "Fewer effective collisions per unit time", ["More effective collisions per unit time", "Particles have less kinetic energy", "The energy of each collision is higher"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.7",
    text: "It is known that bad breath is due to bacterial activity in the mouth in the absence of oxygen. Use the reaction above to explain why a solution containing hydrogen peroxide can be used as mouthwash to improve bad breath.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "The decomposition of hydrogen peroxide releases oxygen, which counters/resists the functioning of the bacteria (kills them / decreases bacterial activity).",
    marking_notes: "Memo: releases oxygen (1), counters the bacteria (1).",
    steps: [
      mc(1, "What the decomposition produces", "The decomposition of H2O2 releases oxygen", ["It releases hydrogen gas", "It absorbs oxygen from the mouth", "It releases carbon dioxide"], 1),
      mc(1, "Effect on the bacteria", "The oxygen counters the bacteria (decreases bacterial activity)", ["The oxygen is food that increases bacterial activity", "The oxygen speeds up bacterial reproduction", "The oxygen has no effect on bacteria"], 3),
    ],
  },

  // ============ QUESTION 7: CHEMICAL EQUILIBRIUM (19 marks) ============
  {
    number: "7", sub_number: "7.1.1",
    text: "The industrial preparation of hydrogen gas: CH4(g) + H2O(g) ⇌ CO(g) + 3H2(g), ΔH > 0, at equilibrium at 1 000 °C in a closed container. State Le Chatelier's principle.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "When the equilibrium in a closed system is disturbed, the system will shift the equilibrium position so as to oppose/counteract the change (disturbance).",
    marking_notes: "Memo: three marks for disturbed equilibrium in a closed system, shift of the equilibrium, opposing the change.",
    steps: [
      mc(1, "Condition", "When the equilibrium in a closed system is disturbed", ["When a catalyst is added to an open system", "When the reaction has gone to completion", "When the temperature is kept constant"], 0),
      mc(1, "Response of the system", "the system will shift the equilibrium position", ["the equilibrium constant is always doubled", "all reactions in the system stop", "the system turns completely into products"], 2),
      mc(1, "Direction of the response", "so as to oppose / counteract the change", ["so as to reinforce the change", "so as to double the forward rate", "so that the reverse reaction stops"], 1),
    ],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "For CH4(g) + H2O(g) ⇌ CO(g) + 3H2(g), ΔH > 0, at 1 000 °C: how will an increase in pressure (by decreasing the volume) affect the yield of hydrogen gas? Write down only INCREASES, DECREASES OR NO EFFECT. Explain the answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Decreases. Increased pressure favours the reaction that produces the smaller amount of gas; the reactants side has 2 mol gas and the products side has 4 mol gas, so the reverse reaction is favoured.",
    marking_notes: "Memo: decreases (1), smaller volume/amount of gas favoured (1), reverse reaction favoured (1).",
    steps: [
      mc(1, "Effect on H2 yield", "Decreases", ["Increases", "No effect", "Increases at first then decreases"], 3),
      mc(1, "Reason based on moles of gas", "Higher pressure favours the side with fewer moles of gas (2 mol reactants versus 4 mol products)", ["Higher pressure favours the side with more moles of gas (4 mol products versus 2 mol reactants)", "Pressure has no effect on gas equilibria", "Higher pressure favours the endothermic reaction"], 0),
      mc(1, "Reaction favoured", "The reverse reaction is favoured, so less H2 forms", ["The forward reaction is favoured, so more H2 forms", "Neither reaction is favoured", "The reverse reaction stops"], 1),
    ],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Give TWO reasons why high temperatures are used for the reaction CH4(g) + H2O(g) ⇌ CO(g) + 3H2(g), ΔH > 0.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Products form at a faster rate (more effective collisions per unit time); higher yield of products because the endothermic forward reaction is favoured.",
    marking_notes: "Memo: rate reason (1), yield reason (1).",
    steps: [
      mc(1, "Reason related to rate", "Products form at a faster rate (more effective collisions per unit time)", ["The activation energy of the forward reaction increases", "The pressure of the system decreases", "The catalyst works only at low temperature"], 2),
      mc(1, "Reason related to yield", "Higher yield of products (the endothermic forward reaction is favoured)", ["Lower yield because the exothermic reverse reaction is favoured", "Kc decreases at high temperature", "Equilibrium is never reached at high temperature"], 0),
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "Study the reversible reaction H2(g) + CO2(g) ⇌ H2O(g) + CO(g). Initially x moles of H2(g) is mixed with 0,3 moles of CO2(g) in a sealed 10 dm³ container. When equilibrium is reached at a certain temperature, 0,2 moles of H2O(g) is present. The equilibrium constant Kc at this temperature is 4. Calculate the initial number of moles of H2(g), x, that was in the container.",
    marks: 8, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Since the mole ratio is 1:1:1:1, 0,2 mol H2 and 0,2 mol CO2 reacted and 0,2 mol CO formed. At equilibrium n(H2) = x − 0,2; n(CO2) = 0,3 − 0,2 = 0,1; n(CO) = n(H2O) = 0,2. Concentrations (÷10 dm³): [H2] = (x − 0,2)/10; [CO2] = 0,01; [H2O] = [CO] = 0,02. Kc = [CO][H2O]/([H2][CO2]) so 4 = (0,02)(0,02) / ( ((x − 0,2)/10)(0,01) ), giving x = 0,3, i.e. n(H2) initial = 0,3 mol.",
    marking_notes: "Memo allocation (8): ratio (1); equilibrium n(H2) and n(CO2) (1); n(CO) = 0,2 (1); divide by volume (1); Kc expression (1); substitution of Kc value (1); substitution of concentrations (1); final answer 0,3 mol (1). No Kc expression, correct substitution: max 7/8; wrong Kc expression: max 5/8. Assuming [H2] = [CO2] at equilibrium: max 4/8.",
    steps: [
      mc(1, "Mole ratio of H2 : CO2 : H2O : CO", "1 : 1 : 1 : 1 (0,2 mol of each reacts or forms)", ["2 : 1 : 1 : 2", "1 : 1 : 2 : 2", "1 : 2 : 1 : 1"], 1),
      mc(1, "Equilibrium amounts of the reactants", "n(H2) = x − 0,2 mol and n(CO2) = 0,1 mol", ["n(H2) = x + 0,2 mol and n(CO2) = 0,5 mol", "n(H2) = x and n(CO2) = 0,3 mol", "n(H2) = 0,2 mol and n(CO2) = 0,2 mol"], 0),
      mc(1, "Equilibrium amount of CO", "n(CO) = 0,2 mol (equal to n(H2O))", ["n(CO) = 0,1 mol", "n(CO) = 0,4 mol", "n(CO) = 0,3 mol"], 3),
      mc(1, "Converting to concentrations (V = 10 dm³)", "c = n/V: [CO2] = 0,01, [H2O] = [CO] = 0,02, [H2] = (x − 0,2)/10 mol·dm⁻³", ["c = n × V: [CO2] = 1, [H2O] = [CO] = 2, [H2] = 10(x − 0,2)", "Use the amounts in mol directly (no division by V)", "c = V/n: [CO2] = 100, [H2O] = [CO] = 50"], 2),
      mc(1, "Kc expression", "Kc = [CO][H2O] / ([H2][CO2])", ["Kc = [H2][CO2] / ([CO][H2O])", "Kc = [CO] + [H2O] / ([H2] + [CO2])", "Kc = [H2O][CO] / [H2]"], 0),
      mc(1, "Value of Kc to substitute", "Kc = 4", ["Kc = 0,25", "Kc = 0,2", "Kc = 10"], 1),
      mc(1, "Substitution of concentrations into Kc", "4 = (0,02)(0,02) / ( ((x − 0,2)/10)(0,01) )", ["4 = ((x − 0,2)/10)(0,01) / ((0,02)(0,02))", "4 = (0,02)(0,02) / ((x − 0,2)(0,1))", "4 = (0,2)(0,2) / (x (0,3))"], 2),
      mc(1, "Initial amount of H2, x", "0,3 mol", ["0,10 mol", "0,50 mol", "0,40 mol"], 0),
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "For H2(g) + CO2(g) ⇌ H2O(g) + CO(g), the reaction is now carried out at a much higher temperature. It is found that Kc decreases at this higher temperature. Is this reaction exothermic or endothermic? Explain the answer.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Exothermic. A decrease in Kc means a lower product concentration (more reactants); the reverse reaction is favoured by the increase in temperature, so the forward reaction is exothermic.",
    marking_notes: "Memo: exothermic (1), lower product / higher reactant concentration (1), reverse reaction favoured (1).",
    steps: [
      mc(1, "Exothermic or endothermic?", "Exothermic", ["Endothermic", "Neither", "Cannot be determined from Kc"], 0),
      mc(1, "What a decrease in Kc implies", "Lower product concentration / more reactants at equilibrium", ["Higher product concentration", "A faster forward rate only", "No change in the equilibrium composition"], 3),
      mc(1, "Reaction favoured by the higher temperature", "The reverse reaction is favoured, so the forward reaction is exothermic", ["The forward reaction is favoured, so it is endothermic", "Both reactions are favoured equally", "The reverse reaction is exothermic and favoured"], 1),
    ],
  },

  // ============ QUESTION 8: GALVANIC CELL (17 marks) ============
  {
    number: "8", sub_number: "8.1",
    text: "A galvanic cell is set up (see diagram): a Cu electrode in Cu²⁺(aq) and a Pb electrode in Pb²⁺(aq), joined by a salt bridge and a voltmeter, with an initial reading of 0,3 V. Write down the energy conversion that takes place in this cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Chemical energy to electrical energy.",
    marking_notes: "A galvanic cell converts chemical energy into electrical energy.",
    steps: [mc(1, "Energy conversion in a galvanic cell", "Chemical energy to electrical energy", ["Electrical energy to chemical energy", "Heat energy to electrical energy", "Light energy to chemical energy"], 0)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "State ONE function of the salt bridge in the Cu–Pb galvanic cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Completes the circuit / maintains electrical neutrality (transports ions).",
    marking_notes: "Electrons do not flow through the salt bridge.",
    steps: [mc(1, "Function of the salt bridge", "Completes the circuit / maintains electrical neutrality by transporting ions", ["Allows electrons to flow between the half-cells", "Increases the emf of the cell", "Prevents the metals from reacting"], 2)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.3",
    text: "Write down the half-reaction that takes place at the anode of the Cu–Pb galvanic cell.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Pb → Pb²⁺ + 2e⁻ (Pb is the stronger reducing agent: E° = −0,13 V compared with +0,34 V for Cu).",
    marking_notes: "Oxidation occurs at the anode.",
    steps: [mc(2, "Anode half-reaction", "Pb → Pb²⁺ + 2e⁻", ["Pb²⁺ + 2e⁻ → Pb", "Cu → Cu²⁺ + 2e⁻", "Cu²⁺ + 2e⁻ → Cu"], 0)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.4",
    text: "In which direction do electrons flow in the external circuit when this cell delivers a current? Write down only 'from Cu to Pb' or 'from Pb to Cu'.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "From Pb to Cu.",
    marking_notes: "Electrons leave the anode (Pb) and reach the cathode (Cu).",
    steps: [mc(1, "Direction of electron flow", "From Pb to Cu", ["From Cu to Pb", "Through the salt bridge from the Cu half-cell to the Pb half-cell", "From Pb²⁺ to Cu²⁺"], 1)],
    image_url: `${IMG}/8-galvanic-cell.png`,
  },
  {
    number: "8", sub_number: "8.5",
    text: "Write down the balanced net (overall) cell reaction for the Cu–Pb galvanic cell.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Pb + Cu²⁺ → Pb²⁺ + Cu",
    marking_notes: "Memo: reactants (1), products (1), balancing (1).",
    steps: [
      mc(1, "Reactants", "Pb and Cu²⁺", ["Pb²⁺ and Cu", "Pb and Cu", "Pb²⁺ and Cu²⁺"], 2),
      mc(1, "Products", "Pb²⁺ and Cu", ["Pb and Cu²⁺", "Pb²⁺ and Cu²⁺", "Pb and Cu"], 0),
      mc(1, "Balanced equation", "Pb + Cu²⁺ → Pb²⁺ + Cu", ["Pb + 2Cu²⁺ → Pb²⁺ + 2Cu", "Pb²⁺ + Cu → Pb + Cu²⁺", "Pb + Cu → Pb²⁺ + Cu²⁺"], 3),
    ],
  },
  {
    number: "8", sub_number: "8.6",
    text: "Is the cell reaction in the Cu–Pb galvanic cell exothermic or endothermic?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Exothermic.",
    marking_notes: "Spontaneous reaction with a positive emf releases energy.",
    steps: [mc(1, "Exothermic or endothermic?", "Exothermic", ["Endothermic", "Neither: only electrical energy is produced", "Cannot be determined"], 1)],
  },
  {
    number: "8", sub_number: "8.7",
    text: "Use the Table of Standard Reduction Potentials to calculate the initial potential difference (emf) of the Cu–Pb cell at STANDARD CONDITIONS. (E° Cu²⁺/Cu = +0,34 V; E° Pb²⁺/Pb = −0,13 V.)",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°cathode − E°anode = 0,34 − (−0,13) = 0,47 V.",
    marking_notes: "Memo: formula (1), 0,34 (1), −0,13 (1), 0,47 V (1). Option 2 (adding half-cell potentials of Pb oxidation +0,13 and Cu reduction +0,34) also gives 0,47 V.",
    steps: [
      mc(1, "Formula for E°cell", "E°cell = E°cathode − E°anode", ["E°cell = E°anode − E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°cathode × E°anode"], 0),
      mc(1, "E° of the cathode (Cu²⁺/Cu)", "+0,34 V", ["−0,34 V", "−0,13 V", "+0,13 V"], 2),
      mc(1, "E° of the anode (Pb²⁺/Pb)", "−0,13 V", ["+0,13 V", "+0,34 V", "−0,34 V"], 1),
      mc(1, "E°cell", "0,47 V", ["0,21 V", "−0,47 V", "0,30 V"], 3),
    ],
  },
  {
    number: "8", sub_number: "8.8",
    text: "The learners find that the measured potential difference (0,3 V) differs from the calculated value at standard conditions. Give TWO possible reasons for this difference in values.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "The measurement was not done at standard temperature (25 °C / 298 K) and not at standard concentration (1 mol·dm⁻³).",
    marking_notes: "Memo: temperature not 25 °C / 298 K (2) and concentration not 1 mol·dm⁻³ (2); 'not done at standard conditions' alone earns 1.",
    steps: [
      mc(2, "First reason", "The temperature was not 25 °C (298 K)", ["The voltmeter measures the E° of the Cu half-cell only", "Electrons flowed through the salt bridge", "The Pb electrode was the cathode"], 1),
      mc(2, "Second reason", "The concentration of the solutions was not 1 mol·dm⁻³", ["The reading includes the potential of the salt bridge itself", "Pb was neutralised by the Cu²⁺ solution", "The emf is calculated using the wrong electrode as anode"], 3),
    ],
  },

  // ============ QUESTION 9: ELECTROLYTIC CELL (12 marks) ============
  {
    number: "9", sub_number: "9.1",
    text: "In an electrolytic cell (see diagram) two CARBON RODS (P and Q) are used as electrodes with concentrated copper(II) chloride solution as electrolyte. When the cell functions, a gas is released at electrode P and electrode Q is coated with a reddish brown layer. Define the term electrolyte.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A substance that forms free (positive and negative) ions when melted or dissolved (so it conducts electricity).",
    marking_notes: "Memo accepts: a solution that conducts electricity, or a liquid/solution/melt that conducts through the movement of free ions.",
    steps: [
      mc(1, "What an electrolyte forms", "A substance that forms free (positive and negative) ions", ["A substance that forms free electrons", "A substance that forms neutral molecules only", "A solid metal that conducts electricity"], 0),
      mc(1, "When it forms them", "When melted or dissolved", ["Only when solid", "Only when it is in contact with carbon rods", "Only at its boiling point"], 3),
    ],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "Write down a half-reaction to explain the observation made at electrode P (a gas is released) in the CuCℓ2 electrolytic cell.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "2Cℓ⁻ → Cℓ2 + 2e⁻",
    marking_notes: "Chloride ions are oxidised at the anode, releasing chlorine gas.",
    steps: [mc(2, "Half-reaction at P", "2Cℓ⁻ → Cℓ2 + 2e⁻", ["Cℓ2 + 2e⁻ → 2Cℓ⁻", "Cu²⁺ + 2e⁻ → Cu", "2H⁺ + 2e⁻ → H2"], 2)],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Write down a half-reaction to explain the observation made at electrode Q (coated with a reddish brown layer).",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cu²⁺ + 2e⁻ → Cu",
    marking_notes: "Copper(II) ions are reduced to copper metal at the cathode.",
    steps: [mc(2, "Half-reaction at Q", "Cu²⁺ + 2e⁻ → Cu", ["Cu → Cu²⁺ + 2e⁻", "Cu²⁺ + e⁻ → Cu⁺", "2Cℓ⁻ → Cℓ2 + 2e⁻"], 1)],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
  {
    number: "9", sub_number: "9.3",
    text: "Which electrode, P or Q, is the cathode? Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Q — reduction takes place there (it gains electrons: Cu²⁺ + 2e⁻ → Cu).",
    marking_notes: "Memo: Q (1), reason (1). 'It is the negative electrode / copper is formed' alone earns max 1/2 (no mark for reason).",
    steps: [
      mc(1, "The cathode", "Q", ["P", "Both P and Q", "Neither P nor Q"], 0),
      mc(1, "Reason", "Reduction takes place at Q (it gains electrons)", ["Oxidation takes place at Q", "Chlorine gas is released at Q", "Q is connected to the positive terminal of the battery"], 3),
    ],
    image_url: `${IMG}/9-electrolytic-cell.png`,
  },
  {
    number: "9", sub_number: "9.4.1",
    text: "The carbon rods are now replaced with COPPER RODS. At electrode P no gas is released and its surface appears rough and eroded. Refer to the RELATIVE STRENGTHS OF REDUCING AGENTS to explain this observation.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Cu (electrode P) is a stronger reducing agent than the Cℓ⁻ ions, so Cu is oxidised (loses electrons) instead of the chloride ions, and the plate erodes.",
    marking_notes: "Memo: stronger reducing agent (1), than Cℓ⁻ ions (1), Cu oxidised / plate eroded (1). Alternative: Cℓ⁻ is a weaker reducing agent than Cu and so is not oxidised.",
    steps: [
      mc(1, "Relative strength of Cu as a reducing agent", "Cu is a stronger reducing agent", ["Cu is a weaker reducing agent", "Cu is a stronger oxidising agent", "Cu is a weaker oxidising agent"], 1),
      mc(1, "Compared with", "Cℓ⁻ ions", ["Cu²⁺ ions", "Cℓ2 molecules", "Cu atoms in electrode Q"], 0),
      mc(1, "Result at electrode P", "Cu is oxidised (loses electrons), so the plate erodes", ["Cu is reduced (gains electrons), so the plate gets thicker", "Cℓ⁻ is oxidised, so chlorine gas bubbles off", "Cu²⁺ is reduced to Cu on P"], 2),
    ],
  },
  {
    number: "9", sub_number: "9.4.2",
    text: "This cell (with copper electrodes) can be used for the refining of copper. Which electrode (P or Q) will be replaced with impure copper during the refining process?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "P — the impure copper is the anode, where copper is oxidised.",
    marking_notes: "Electrode P was observed to erode, i.e. it is the anode.",
    steps: [mc(1, "Electrode replaced with impure copper", "P", ["Q", "Both P and Q", "Neither P nor Q"], 0)],
  },

  // ============ QUESTION 10: CHLOR-ALKALI MEMBRANE CELL (11 marks) ============
  {
    number: "10", sub_number: "10.1",
    text: "The simplified diagram of a membrane cell used in the chlor-alkali industry is shown. Gas A, gas B and compound C are the three major products. X and Y are the electrodes (water and compound C are on the X side; brine and used salt solution are on the Y side). Write down the function of the membrane in this cell.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Allows only positive ions (Na⁺) to migrate to the cathode half-cell (prevents Cℓ⁻ ions from mixing with NaOH).",
    marking_notes: "Memo also accepts: prevents chloride ions migrating to the cathode half-cell.",
    steps: [mc(1, "Function of the membrane", "Allows only positive ions (Na⁺) through to the cathode half-cell, keeping Cℓ⁻ out of the NaOH", ["Allows only negative ions (Cℓ⁻) through to the anode half-cell", "Allows electrons to flow through it", "Acts as a catalyst to speed up the electrolysis"], 0)],
    image_url: `${IMG}/10-membrane-cell.png`,
  },
  {
    number: "10", sub_number: "10.2",
    text: "Which electrode, X or Y, is connected to the positive terminal of the power supply? Briefly explain how you arrived at the answer.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Y — chloride ions are oxidised at Y / brine enters at the anode side (the anode is connected to the positive terminal).",
    marking_notes: "Memo: Y (1), reason (1).",
    steps: [
      mc(1, "Electrode connected to the positive terminal", "Y", ["X", "Both X and Y", "Neither X nor Y"], 0),
      mc(1, "Reason", "Cℓ⁻ ions are oxidised at Y (brine enters the anode half-cell)", ["Na⁺ ions are oxidised at Y", "Water is reduced at Y", "Hydrogen gas is produced at Y"], 1),
    ],
    image_url: `${IMG}/10-membrane-cell.png`,
  },
  {
    number: "10", sub_number: "10.3.1",
    text: "Write down the NAME or FORMULA of gas A (released at electrode X, the cathode side where water enters).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Hydrogen (H2).",
    marking_notes: "Water is reduced at the cathode: 2H2O + 2e⁻ → H2 + 2OH⁻.",
    steps: [mc(1, "Gas A", "Hydrogen (H2)", ["Chlorine (Cℓ2)", "Oxygen (O2)", "Sodium (Na)"], 2)],
    image_url: `${IMG}/10-membrane-cell.png`,
  },
  {
    number: "10", sub_number: "10.3.2",
    text: "Write down the NAME or FORMULA of gas B (released at electrode Y, the anode side where brine enters).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Chlorine (Cℓ2).",
    marking_notes: "Chloride ions are oxidised: 2Cℓ⁻ → Cℓ2 + 2e⁻.",
    steps: [mc(1, "Gas B", "Chlorine (Cℓ2)", ["Hydrogen (H2)", "Oxygen (O2)", "Hydrogen chloride (HCℓ)"], 0)],
    image_url: `${IMG}/10-membrane-cell.png`,
  },
  {
    number: "10", sub_number: "10.3.3",
    text: "Write down the NAME or FORMULA of compound C (leaving the cathode half-cell).",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Sodium hydroxide (NaOH).",
    marking_notes: "Na⁺ ions cross the membrane and combine with OH⁻.",
    steps: [mc(1, "Compound C", "Sodium hydroxide (NaOH)", ["Sodium chloride (NaCℓ)", "Hydrochloric acid (HCℓ)", "Sodium carbonate (Na2CO3)"], 1)],
    image_url: `${IMG}/10-membrane-cell.png`,
  },
  {
    number: "10", sub_number: "10.4",
    text: "Write down the balanced net (overall) cell reaction taking place in the chlor-alkali membrane cell.",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "2H2O + 2Cℓ⁻ → H2 + 2OH⁻ + Cℓ2 (or 2H2O + 2NaCℓ → H2 + 2NaOH + Cℓ2).",
    marking_notes: "Memo: reactants (1), products (1), balancing (1); one mark forfeited when the charge of an ion is omitted per equation.",
    steps: [
      mc(1, "Reactants", "H2O and Cℓ⁻ (or NaCℓ)", ["H2O and Na⁺ only", "NaOH and Cℓ⁻", "H2 and Cℓ2"], 0),
      mc(1, "Products", "H2, OH⁻ (or NaOH) and Cℓ2", ["O2, H2 and Cℓ2", "Na, OH⁻ and Cℓ2", "H2, Cℓ⁻ and O2"], 2),
      mc(1, "Balanced equation", "2H2O + 2Cℓ⁻ → H2 + 2OH⁻ + Cℓ2", ["H2O + Cℓ⁻ → H2 + OH⁻ + Cℓ2", "2H2O + Cℓ⁻ → H2 + 2OH⁻ + Cℓ2", "H2O + 2Cℓ⁻ → H2 + 2OH⁻ + Cℓ2"], 1),
    ],
  },
  {
    number: "10", sub_number: "10.5",
    text: "The chlor-alkali industry is sometimes blamed for contributing to the greenhouse effect. Briefly explain how the above cell contributes to the greenhouse effect.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Evaluation",
    model_answer: "It uses huge amounts of electricity; the combustion of coal during generation of this electricity releases huge amounts of carbon dioxide into the atmosphere.",
    marking_notes: "Memo: huge amounts of electricity (1), coal combustion releases CO2 (1).",
    steps: [
      mc(1, "Energy requirement of the cell", "The cell uses huge amounts of electricity (energy)", ["The cell uses no external energy", "The cell releases CFCs directly", "The cell consumes carbon dioxide"], 3),
      mc(1, "Link to the greenhouse effect", "Burning coal to generate the electricity releases huge amounts of carbon dioxide", ["Burning coal to generate the electricity releases huge amounts of hydrogen", "The electrolysis itself releases carbon dioxide at the electrodes", "Burning coal removes carbon dioxide from the atmosphere"], 0),
    ],
  },

  // ============ QUESTION 11: NITRIC ACID AND FERTILISERS (12 marks) ============
  {
    number: "11", sub_number: "11.1.1",
    text: "Nitric acid is used in the preparation of fertiliser. The flow diagram shows the three steps (A: NH3(g) + O2 → nitrogen(II) oxide; B: nitrogen(II) oxide + O2 → NO2(g); C: NO2(g) + O2 + water → HNO3(ℓ)). Write down the name of this industrial process in the preparation of nitric acid.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Ostwald process.",
    marking_notes: "Haber is for ammonia, Contact for sulphuric acid.",
    steps: [mc(1, "Name of the process", "Ostwald process", ["Haber process", "Contact process", "Fischer–Tropsch process"], 1)],
    image_url: `${IMG}/11-flow-diagram.png`,
  },
  {
    number: "11", sub_number: "11.1.2",
    text: "Write down the balanced equation for step B (nitrogen(II) oxide reacts with oxygen to form NO2(g)).",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "2NO + O2 → 2NO2",
    marking_notes: "Memo: reactants (1), products (1), balancing (1); multiples of the coefficients accepted.",
    steps: [
      mc(1, "Reactants of step B", "NO and O2", ["NO2 and O2", "NH3 and O2", "N2 and O2"], 0),
      mc(1, "Product of step B", "NO2", ["N2O", "HNO3", "N2O4 only"], 2),
      mc(1, "Balanced equation", "2NO + O2 → 2NO2", ["NO + O2 → NO2", "2NO + 2O2 → 2NO2", "NO + 2O2 → NO2"], 3),
    ],
    image_url: `${IMG}/11-flow-diagram.png`,
  },
  {
    number: "11", sub_number: "11.2",
    text: "NH3(g) reacts with O2(g) to form two products in step A. One of the products is nitrogen(II) oxide. Write down the NAME or FORMULA of the OTHER product.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "H2O (water): 4NH3 + 5O2 → 4NO + 6H2O.",
    marking_notes: "Memo: H2O / water.",
    steps: [mc(1, "Other product of step A", "H2O (water)", ["H2 (hydrogen)", "NO2", "N2"], 0)],
    image_url: `${IMG}/11-flow-diagram.png`,
  },
  {
    number: "11", sub_number: "11.3",
    text: "In step C, water is added to the reaction mixture. This step can be represented by the incomplete equation: NO2(g) + ___ + H2O(ℓ) → HNO3(ℓ). Fill in the missing reactant and balance the equation.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "4NO2 + O2 + 2H2O → 4HNO3",
    marking_notes: "Memo: missing reactant O2 (1), balancing (1); only O2 (not in an equation) earns 1.",
    steps: [
      mc(1, "Missing reactant", "O2", ["H2", "NH3", "N2"], 1),
      mc(1, "Balanced equation", "4NO2 + O2 + 2H2O → 4HNO3", ["2NO2 + O2 + H2O → 2HNO3", "4NO2 + 2O2 + 2H2O → 4HNO3", "NO2 + O2 + H2O → HNO3"], 0),
    ],
  },
  {
    number: "11", sub_number: "11.4",
    text: "A 50 kg bag of fertiliser is labelled \"3 – 1 – 5 (30)\" (N : P : K ratio 3 : 1 : 5, total nutrient content 30 %). Calculate the mass of nitrogen present in this bag of fertiliser.",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "Mass of nutrients = 30 % of 50 kg = 15 kg. Fraction N = 3/(3 + 1 + 5) = 3/9. Mass N = (3/9) × 15 kg = 5 kg.",
    marking_notes: "Memo (3): ratio 3/9 (1), × 15 (1), 5 kg (1). Alternative: 3/9 × 30 % = 10 %, then 10 % of 50 kg = 5 kg.",
    steps: [
      mc(1, "Fraction of the nutrients that is nitrogen", "3/9", ["3/5", "1/9", "3/30"], 2),
      mc(1, "Mass of N from the nutrient mass", "(3/9) × 15 kg (15 kg = 30 % of 50 kg)", ["(3/9) × 50 kg", "(3/9) × 30 kg", "(3/5) × 15 kg"], 1),
      mc(1, "Mass of nitrogen in the bag", "5 kg", ["16,67 kg", "10 kg", "9 kg"], 0),
    ],
  },
  {
    number: "11", sub_number: "11.5",
    text: "Uncontrolled use of fertiliser may cause excess fertiliser to run down into streams and rivers, leading to eutrophication. State ONE negative impact that eutrophication in water may have on humans.",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Any one of: fish/aquatic life dies, resulting in loss of income/jobs/food; poor water quality (excess nitrates), not enough drinking water or a health risk (blue baby syndrome); water recreation areas become unattractive/dangerous with lost tourism income.",
    marking_notes: "Memo: any ONE impact, 1 mark for the impact and 1 for its consequence.",
    steps: [
      mc(1, "Impact on the water", "Fish / aquatic life dies", ["Fish populations increase dramatically", "The water becomes cleaner", "The oxygen content of the water increases"], 1),
      mc(1, "Consequence for humans", "Loss of income / jobs / food", ["More income from fishing", "Cheaper drinking water", "Better water for recreation"], 0),
    ],
  },
];
