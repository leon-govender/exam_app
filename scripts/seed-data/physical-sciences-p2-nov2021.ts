// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2021, National
// (English/Afrikaans bilingual).
// Source: single combined SCANNED PDF (question paper + marking guideline)
// fetched from stanmorephysics.com (no text layer; pages were rendered at
// 220dpi and read visually). The PDF has 40 pages: pages 1-15 are the question
// paper (cover + 14 content pages, cover confirms "PHYSICAL SCIENCES:
// CHEMISTRY (P2)", "NOVEMBER 2021", MARKS: 150, TIME: 3 hours), pages 16-19 are
// the four data sheets, pages 20-40 are the DBE marking guidelines (cover
// confirms NOVEMBER 2021, 150 marks, 21 pages, approved 24/11/2021).
// Question numbers, sub-numbers and per-question totals (20, 18, 13, 21, 15,
// 18, 18, 16, 11 = 150) were cross-checked page by page between the question
// paper and the memo and match.
//
// Paper structure: NINE compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here.
//
// This paper reuses the SAME subject row ("Physical Sciences"), the same four
// cognitive levels and the same seven Chemistry topics as the Nov 2024 / 2025
// Chemistry P2 files. The 8th topic (chemical-industry) is included verbatim
// for the shared definitions but is NOT used by any question here (no
// fertiliser / industrial-process content in this paper).
//
// GRADING CONVENTION: every question is stepped multiple choice (`steps`);
// there is no `marking_points` anywhere. Definitions / "state the law" items
// are one step offering four candidate statements; "explain" items and
// calculations are one MCQ step per memo mark point. MCQ questions in
// Question 1 are a single 2-mark step whose options are the lettered answers.
//
// Diagrams cropped from page renders (via Pillow) into
// public/question-images/chemistry-2021-p2/: 1.3 (ketone structure), 1.5
// (Maxwell-Boltzmann curves), 1.9 (voltaic cell), 1.10 (copper refining cell),
// 2 (compounds A-H table), 4.1 (flow diagram, compounds P/Q/R), 4.2 (flow
// diagram, but-2-ene to 1,2-dibromopropane), 5 (CO2 volume vs time graph) and
// 9 (electroplating cell). The test-tube picture in 1.7 and the data tables in
// Q3 and 6.2 are transcribed into the question text instead; the
// Stanmorephysics watermark / thumbnail on the source pages is not part of the
// exam content (crops were framed to avoid it).
//
// FLAG for review:
//  - Question 4.2 (question paper) says "1,2-dibromopropane can be prepared
//    from but-2-ene by a three-step process". The memo resolves this as:
//    step 1 hydrogenation of but-2-ene to butane (compound A), step 2
//    cracking/elimination of butane giving propene (compound B), step 3
//    addition of Br2 to propene. Transcribed faithfully; the chemistry of
//    step 2 (butane cracking to propene) is only loosely balanced in the paper.
//  - 4.2.2: the memo accepts "Elimination/Cracking"; this file uses the single
//    option "Cracking (elimination)".
//  - 6.2.3: the memo prints the mark allocation "(3)" beside the first
//    calculation-box heading but the question paper, the 8 marking criteria
//    (a-h) and the question total all give 8 marks; 8 is used. Memo options 1
//    and 2 take the 300 K equilibrium amounts (0,8 / 0,8 / 3,2) as the starting
//    point for the 350 K equilibrium; Option 3 works from the original initial
//    amounts (4 / 2,4 / 0). All reach Kc = 10,89.
//  - 7.2.2: Option 1 (0,096 mol.dm-3 initial HCl, giving 0,013 mol.dm-3) is
//    used. Option 2 in the memo gives 0,014 mol.dm-3 and the accepted range is
//    0,01 to 0,02 mol.dm-3.
//  - 7.2.1: the memo's [HCl] is 0,0955 mol.dm-3 with 0,096 also quoted as the
//    rounded value; the step uses 0,0955 and keeps 0,096 out of the distractors.
//  - 9.4: Option 3 in the memo (96 500 C per mole of electrons) gives
//    11 134,62 C versus 11 113,85 C; both are inside the accepted range
//    11 076,8 to 11 580 C, so 11 134 is not used as a
//    distractor.
//  - 5.4 final answer: the memo accepts 2 976 cm3 or 2,976 dm3 (range
//    2 880 to 2 970 cm3 stated, which does not include 2 976; transcribed
//    as printed).
//  - Topic mapping: all questions fit the seven existing topics. 5.4 (percentage
//    purity gas-volume calculation) is mapped to "stoichiometry".

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2021-p2";

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
  year: 2021,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2022/03/Physical-Science-Grade-12-NSC-November-2021-P2-and-Memo.pdf" as string | null,
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

// Small helper: one stepped-MCQ step.
const st = (marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep => ({
  marks,
  description,
  options,
  correctIndex,
});

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Which formula shows the way in which atoms are bonded in a molecule but does not show all the bond lines?",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "D — Condensed structural formula. It shows how atoms are bonded without drawing every bond line.",
    marking_notes: "Accept only 'D'.",
    steps: [
      st(2, "Which formula shows the way in which atoms are bonded in a molecule but does not show all the bond lines?",
        ["A  Empirical", "B  Molecular", "C  Structural", "D  Condensed structural"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Which ONE of the following compounds has hydrogen bonds between its molecules? (A) CH3(CH2)2CH3 (B) CH3COCH2CH3 (C) CH3COOCH2CH3 (D) CH3CH(OH)CH2CH3",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "D — CH3CH(OH)CH2CH3 (butan-2-ol). It has an -OH group (H bonded to O), so molecules hydrogen-bond; the alkane, ketone and ester cannot.",
    marking_notes: "Accept only 'D'.",
    steps: [
      st(2, "Which ONE of the compounds has hydrogen bonds between its molecules?",
        ["A  CH3(CH2)2CH3", "B  CH3COCH2CH3", "C  CH3COOCH2CH3", "D  CH3CH(OH)CH2CH3"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Consider the compound drawn (CH3-CH(CH3)-C(=O)-CH2-CH3). Which ONE of the following is the IUPAC name of this compound? (A) 2-methylpentan-3-one (B) 4-methylpentan-3-one (C) 2,3-dimethylbutan-2-one (D) 2,2,4-trimethylpropan-2-one",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "A — 2-methylpentan-3-one. The longest chain containing C=O has 5 C atoms; numbering from the end nearest the methyl branch gives methyl on C2 and C=O on C3.",
    marking_notes: "Accept only 'A'.",
    image_url: `${IMG}/1.3-ketone-structure.png`,
    steps: [
      st(2, "Which ONE of the following is the IUPAC name of the compound shown?",
        ["A  2-methylpentan-3-one", "B  4-methylpentan-3-one", "C  2,3-dimethylbutan-2-one", "D  2,2,4-trimethylpropan-2-one"], 0),
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "A 2 g piece of magnesium reacts with EXCESS hydrochloric acid: Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g). Which ONE of the following changes will INCREASE the YIELD of H2(g)? (A) Crush the piece of magnesium. (B) Use a 3 g piece of magnesium. (C) Use a greater volume of the acid. (D) Use a higher concentration of the acid.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "B — Use a 3 g piece of magnesium. Mg is the limiting reagent (acid is in excess), so more Mg means more moles of H2. Crushing, a larger volume or higher concentration of acid change rate or leave the amount of limiting reagent unchanged.",
    marking_notes: "Accept only 'B'.",
    steps: [
      st(2, "Mg is the limiting reagent and the acid is in excess. Which change will INCREASE the yield of H2(g)?",
        ["A  Crush the piece of magnesium.", "B  Use a 3 g piece of magnesium.", "C  Use a greater volume of the acid.", "D  Use a higher concentration of the acid."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "The Maxwell-Boltzmann distribution curve P represents the number of molecules against kinetic energy for a certain reaction. Curve Q is obtained after a change was made to one reaction condition (Q is higher and narrower than P with the same overall shape, activation energy EA unchanged; the curve ends at the same energy). Which ONE of the following changes resulted in curve Q? (A) Addition of a catalyst (B) Increase in temperature (C) Increase in activation energy (D) Increase in the concentration of the reactants",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "D — Increase in the concentration of the reactants. Curve Q has the same shape and energy range as P but a larger number of molecules at every energy, i.e. more particles per volume; a temperature rise would shift the peak to higher energy and flatten it, a catalyst would lower EA.",
    marking_notes: "Accept only 'D'. FLAG: transcribed from the memo; the curve shapes are as drawn in the paper.",
    image_url: `${IMG}/1.5-maxwell-boltzmann.png`,
    steps: [
      st(2, "Curve Q has the same shape as P but more molecules at each kinetic energy. Which change resulted in curve Q?",
        ["A  Addition of a catalyst", "B  Increase in temperature", "C  Increase in activation energy", "D  Increase in the concentration of the reactants"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.6",
    text: "The expression for the equilibrium constant of a hypothetical reaction is Kc = [X]^3 / ([Y]^2[Z]). Which ONE of the following equations for a reaction at equilibrium matches the above expression? (A) Z(g) + 2Y(g) <=> 3X(s) (B) Z(aq) + 2Y(aq) <=> 3X(l) (C) Z(g) + Y2(g) <=> 3X(aq) + Q(s) (D) Z(aq) + 2Y(aq) <=> 3X(aq) + Q(s)",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "D — Z(aq) + 2Y(aq) <=> 3X(aq) + Q(s). X appears cubed in the numerator and Y squared with Z in the denominator; the solid Q is left out of Kc, and all other species must be gases or aqueous (not pure solids or liquids).",
    marking_notes: "Accept only 'D'.",
    steps: [
      st(2, "Kc = [X]^3 / ([Y]^2[Z]). Which equation matches (pure solids and liquids are NOT in Kc)?",
        ["A  Z(g) + 2Y(g) <=> 3X(s)", "B  Z(aq) + 2Y(aq) <=> 3X(l)", "C  Z(g) + Y2(g) <=> 3X(aq) + Q(s)", "D  Z(aq) + 2Y(aq) <=> 3X(aq) + Q(s)"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Two dilute acids of equal concentrations are added to separate test tubes: 100 cm3 HCl(aq) and 100 cm3 CH3COOH(aq). Statements: I: The pH of each is less than 7. II: Both will react at the same rate with 5 g of magnesium powder. III: Both will neutralise the same number of moles of NaOH(aq). Which of the statements is/are TRUE? (A) I only (B) I, II and III (C) I and III only (D) II and III only",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "C — I and III only. Both are acids, pH < 7 (I true). HCl is a strong acid with a higher [H3O+] so it reacts faster with Mg (II false). Equal volume and concentration means equal moles of acid, so both neutralise the same moles of NaOH (III true).",
    marking_notes: "Accept only 'C'.",
    steps: [
      st(2, "HCl (strong) and CH3COOH (weak) have the same concentration and volume. Which statements are TRUE: I (pH < 7), II (same rate with Mg), III (neutralise the same moles of NaOH)?",
        ["A  I only", "B  I, II and III", "C  I and III only", "D  II and III only"], 2),
    ],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Which ONE of the following is the conjugate base of H2PO4-? (A) PO4(3-) (B) HPO4(2-) (C) H3PO4 (D) H4PO4+",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "B — HPO4(2-). The conjugate base is formed when the acid loses one H+: H2PO4- -> HPO4(2-) + H+.",
    marking_notes: "Accept only 'B'.",
    steps: [
      st(2, "Which ONE of the following is the conjugate base of H2PO4-?",
        ["A  PO4(3-)", "B  HPO4(2-)", "C  H3PO4", "D  H4PO4+"], 1),
    ],
  },
  {
    number: "1", sub_number: "1.9",
    text: "The diagram represents a voltaic cell: Zn(s) in ZnSO4(aq) (side X of the salt bridge) and Cu(s) in CuSO4(aq) (side Y of the salt bridge), salt bridge containing KCl(aq), voltmeter between the electrodes. Which ONE of the following correctly describes the movement of ions in the cell? (A) Cl-(aq): Y to X (B) SO4(2-)(aq): X to Y (C) Cu2+(aq): Y to X (D) K+(aq): Y to X",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "A — Cl-(aq) moves from Y to X. Zn is the anode (oxidation, Zn2+ forms, extra positive charge) so negative ions (Cl-) migrate from the salt bridge towards the anode compartment X; K+ moves towards the cathode (Y).",
    marking_notes: "Accept only 'A'.",
    image_url: `${IMG}/1.9-voltaic-cell.png`,
    steps: [
      st(2, "Zn is the anode (X side) and Cu is the cathode (Y side). Which ONE correctly describes the movement of ions?",
        ["A  Cl-(aq): Y to X", "B  SO4(2-)(aq): X to Y", "C  Cu2+(aq): Y to X", "D  K+(aq): Y to X"], 0),
    ],
  },
  {
    number: "1", sub_number: "1.10",
    text: "The diagram represents a cell used for the refining of copper: electrode X (in CuSO4(aq)) and an impure copper electrode connected to a power supply. Which ONE of the following statements is TRUE? (A) X is made of platinum. (B) The mass of X increases. (C) X is the electrode where oxidation takes place. (D) X is connected to the positive terminal of the power supply.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "B — The mass of X increases. In copper refining the impure copper is the anode (dissolves) and X is the pure copper cathode where Cu2+ is reduced and Cu deposits, so its mass increases.",
    marking_notes: "Accept only 'B'.",
    image_url: `${IMG}/1.10-copper-refining.png`,
    steps: [
      st(2, "In the copper refining cell, impure copper dissolves. Which ONE of the statements about electrode X is TRUE?",
        ["A  X is made of platinum.", "B  The mass of X increases.", "C  X is the electrode where oxidation takes place.", "D  X is connected to the positive terminal of the power supply."], 1),
    ],
  },

  // ============ QUESTION 2: ORGANIC COMPOUNDS A-H (18 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "(Compounds A to H are shown in the table: A = ethanoic acid drawn in full; B = but-2-ene type structure H-C(H)(H)-CH=C(CH3)-... drawn in full; C = CH3CH2CH2COCH3; D = C2H6O; E = C2H4; F = 3-methylbutan-2-one; G = a dichloro-methyl-hexane drawn in full; H = 3-methylbutanal.) Define the term unsaturated compound.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "A compound that contains a double bond / multiple bond (between C atoms), i.e. does NOT contain only single bonds.",
    marking_notes: "2 or 0. Key phrases: double/multiple bond; not only single bonds.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(2, "Which statement correctly defines an unsaturated compound?",
        ["A compound that contains only single bonds between C atoms.",
          "A compound that contains a double bond / multiple bond between C atoms (does NOT contain only single bonds).",
          "A compound with the maximum number of hydrogen atoms bonded to each carbon atom.",
          "A compound that contains an oxygen-containing functional group."], 1),
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "(Compounds A to H, see table.) Write down the letter that represents an UNSATURATED compound.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B (or E). B has a C=C double bond (E is C2H4, ethene, also unsaturated).",
    marking_notes: "Accept B or E.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "Which letter represents an UNSATURATED compound?",
        ["A", "C", "B", "G"], 2),
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "(Compounds A to H, see table.) Write down the NAME of the functional group of compound C (CH3CH2CH2COCH3).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Carbonyl (group bonded to two C atoms). Accept: Ketone.",
    marking_notes: "Accept 'carbonyl' or 'ketone'.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "What is the NAME of the functional group of compound C, CH3CH2CH2COCH3?",
        ["Carboxyl", "Hydroxyl", "Carbonyl", "Ester (carboxylate) group"], 2),
    ],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "(Compounds A to H, see table.) Write down the letter that represents a CHAIN ISOMER of compound C (pentan-2-one).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "F. 3-methylbutan-2-one has the same molecular formula (C5H10O) and the same functional group (ketone) as pentan-2-one but a different (branched) carbon chain.",
    marking_notes: "Accept only 'F'.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(2, "Which letter represents a CHAIN ISOMER of compound C (CH3CH2CH2COCH3, pentan-2-one)?",
        ["H", "A", "D", "F"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.2.4",
    text: "(Compounds A to H, see table.) Write down the IUPAC name of compound G (a six-carbon chain with Cl on C2 and C5 and a methyl group on C3).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2,5-dichloro-3-methylhexane. Marking criteria: correct stem (hexane); all substituents (dichloro and methyl) correctly identified; name completely correct including numbering, sequence, hyphens and commas.",
    marking_notes: "Three marks: stem; substituents; completely correct name.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "What is the correct STEM (longest chain) of compound G?",
        ["Hexane", "Pentane", "Heptane", "Butane"], 0),
      st(1, "Which substituents are present on the chain of compound G?",
        ["Two chloro groups and one methyl group", "Two chloro groups and two methyl groups", "One chloro group and one methyl group", "Two bromo groups and one methyl group"], 0),
      st(1, "Which is the completely correct IUPAC name of compound G (lowest numbers, alphabetical order)?",
        ["2,5-dichloro-4-methylhexane", "3-methyl-2,5-dichlorohexane", "2,5-dichloro-3-methylhexane", "1,4-dichloro-3-methylhexane"], 2),
    ],
  },
  {
    number: "2", sub_number: "2.2.5",
    text: "(Compounds A to H, see table.) Write down the general formula of the homologous series to which compound E (C2H4) belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "CnH2n (alkenes).",
    marking_notes: "Accept CnH2n.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "What is the general formula of the homologous series to which C2H4 belongs?",
        ["CnH2n+2", "CnH2n-2", "CnH2n", "CnH2n+1OH"], 2),
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Define the term functional isomers.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Compounds with the same molecular formula but different functional groups / belonging to different homologous series.",
    marking_notes: "Two marks: same molecular formula; different functional groups/homologous series.",
    steps: [
      st(2, "Which statement correctly defines functional isomers?",
        ["Compounds with the same molecular formula but different functional groups / homologous series.",
          "Compounds with the same molecular formula and the same functional group but in different positions on the chain.",
          "Compounds with the same molecular formula and the same functional group but different carbon chains.",
          "Compounds with the same functional group but different molecular formulae."], 0),
    ],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "For compound A (ethanoic acid, CH3COOH drawn in full), write down the homologous series to which it belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Carboxylic acids.",
    marking_notes: "Accept carboxylic acids.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "To which homologous series does compound A (CH3COOH) belong?",
        ["Esters", "Aldehydes", "Alcohols", "Carboxylic acids"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "For compound A (ethanoic acid), write down the STRUCTURAL FORMULA of its FUNCTIONAL isomer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Methyl methanoate: H-C(=O)-O-CH3 (drawn in full structural form: H-C(=O)-O-C(H)(H)-H). Marking: whole structure correct 2/2; only functional group (ester) correct 1/2; molecular formula 0/2; condensed structural formula 1/2.",
    marking_notes: "Two marks: ester functional group; whole structure correct.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "Ethanoic acid (C2H4O2) has a functional isomer from another homologous series. Which functional group does it contain?",
        ["Ester group (-COO-)", "Hydroxyl group (-OH) only", "Carboxyl group (-COOH)", "Ketone (C=O between two C atoms)"], 0),
      st(1, "Which is the correct structure of the functional isomer of ethanoic acid?",
        ["CH3COOCH3 (methyl ethanoate)", "HOCH2CHO (2-hydroxyethanal)", "CH3CH2COOH (propanoic acid)", "HCOOCH3 (methyl methanoate), H-C(=O)-O-CH3"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.5.1",
    text: "Compound D (C2H6O) undergoes a dehydration reaction. Write down the IUPAC name of compound D.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Ethanol.",
    marking_notes: "Accept ethanol.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "Compound D (C2H6O) undergoes a dehydration reaction. What is the IUPAC name of D?",
        ["Methoxymethane", "Ethanoic acid", "Ethanol", "Ethanal"], 2),
    ],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Compound D (ethanol) undergoes a dehydration reaction. Write down the letter that represents a product of this reaction.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "E (C2H4, ethene).",
    marking_notes: "Accept E or C2H4.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [
      st(1, "Which letter represents a product of the dehydration of ethanol?",
        ["B", "H", "F", "E"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "Write down the NAME or FORMULA of the inorganic reactant that is used in the dehydration of compound D.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "(Concentrated) sulphuric acid / H2SO4 / (concentrated) phosphoric acid / H3PO4.",
    marking_notes: "Accept (conc.) H2SO4 or H3PO4.",
    steps: [
      st(1, "Which inorganic reactant is used in the dehydration of an alcohol?",
        ["Dilute NaOH(aq)", "Cl2(g)", "Concentrated sulphuric acid, H2SO4", "Acidified KMnO4(aq)"], 2),
    ],
  },

  // ============ QUESTION 3: ALKANES, MELTING AND BOILING POINTS (13 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "The melting points and boiling points of four straight-chain alkanes: Pentane: m.p. -130 degrees C, b.p. 36,1; Hexane: -94, 69; Heptane: -90,6, 98,4; Octane: -57, 125. Define the term melting point.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "The temperature at which the solid and liquid phases of a substance are in equilibrium.",
    marking_notes: "If any underlined key phrase (temperature; solid and liquid phases; in equilibrium) is omitted in the correct context, deduct 1 mark.",
    steps: [
      st(2, "Which statement correctly defines melting point?",
        ["The temperature at which the vapour pressure of a liquid equals atmospheric pressure.",
          "The temperature at which the liquid and gas phases of a substance are in equilibrium.",
          "The temperature at which the solid and liquid phases of a substance are in equilibrium.",
          "The temperature at which a solid changes directly into a gas."], 2),
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "(Alkane table, see 3.1: melting points rise from -130 (pentane) to -57 (octane).) Write down the general conclusion that can be made about the melting points of straight-chain alkanes.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "As the chain length / number of C atoms / molecular mass / surface area / strength of the intermolecular forces increases, the melting points increase.",
    marking_notes: "Two marks: identify the independent variable; state the relationship between dependent and independent variable.",
    steps: [
      st(1, "What is the independent variable that determines the melting points of the straight-chain alkanes?",
        ["Chain length / number of C atoms", "Number of branches on the chain", "The pressure at which the melting point is measured", "The type of functional group"], 0),
      st(1, "State the relationship between the melting points and the independent variable.",
        ["As the chain length increases, the melting points decrease.", "As the chain length increases, the melting points stay the same.", "As the chain length increases, the melting points increase.", "As the chain length increases, the boiling points decrease but the melting points increase."], 2),
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Name the type of Van der Waals forces between molecules of octane.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "London forces (dispersion forces / induced dipole forces).",
    marking_notes: "Accept London / dispersion / induced dipole forces.",
    steps: [
      st(1, "What type of Van der Waals forces exist between molecules of octane?",
        ["Hydrogen bonds", "Dipole-dipole forces", "London (dispersion) forces", "Ion-dipole forces"], 2),
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "Write down the predominant phase of pentane (m.p. -130 degrees C, b.p. 36,1 degrees C) at -100 degrees C. Choose from GAS, LIQUID or SOLID.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "Liquid. -100 degrees C is above the melting point (-130) and below the boiling point (36,1).",
    marking_notes: "Accept 'liquid'.",
    steps: [
      st(1, "What is the predominant phase of pentane at -100 degrees C?",
        ["Gas", "Solid", "Liquid", "Gas and liquid in equilibrium"], 2),
    ],
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Write down the predominant phase of octane (m.p. -57 degrees C, b.p. 125 degrees C) at -100 degrees C. Choose from GAS, LIQUID or SOLID.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "Solid. -100 degrees C is below the melting point of octane (-57).",
    marking_notes: "Accept 'solid'.",
    steps: [
      st(1, "What is the predominant phase of octane at -100 degrees C?",
        ["Liquid", "Gas", "Solid and liquid in equilibrium", "Solid"], 3),
    ],
  },
  {
    number: "3", sub_number: "3.5.1",
    text: "Hexane is now compared to 2,2-dimethylbutane. Is the molecular mass of hexane GREATER THAN, LESS THAN or EQUAL to that of 2,2-dimethylbutane? Give a reason for the answer.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Equal to. Same molecular formula (C6H14) / isomers / same number and types of atoms.",
    marking_notes: "1 mark for 'equal to'; 1 mark for the reason.",
    steps: [
      st(1, "How does the molecular mass of hexane compare with that of 2,2-dimethylbutane?",
        ["Greater than", "Less than", "Equal to", "It cannot be compared without the boiling points"], 2),
      st(1, "Which is the correct reason?",
        ["Hexane has a longer chain, so it has more atoms.", "They have the same molecular formula (isomers: same number and types of atoms, C6H14).", "2,2-dimethylbutane has extra methyl groups, so it has more atoms.", "Both are unbranched alkanes."], 1),
    ],
  },
  {
    number: "3", sub_number: "3.5.2",
    text: "Is the boiling point of 2,2-dimethylbutane HIGHER THAN, LOWER THAN or EQUAL TO that of hexane?",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "Lower than.",
    marking_notes: "Accept 'lower than'.",
    steps: [
      st(1, "How does the boiling point of 2,2-dimethylbutane compare with that of hexane?",
        ["Higher than", "Lower than", "Equal to", "Cannot be determined"], 1),
    ],
  },
  {
    number: "3", sub_number: "3.5.3",
    text: "Fully explain the answer to QUESTION 3.5.2 (2,2-dimethylbutane has a lower boiling point than hexane).",
    marks: 3, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "2,2-dimethylbutane: more branched / more compact / smaller surface area, so weaker (London) intermolecular forces, so less energy is needed to overcome the intermolecular forces. (Or equivalently, for hexane: longer chain, stronger forces, more energy needed.)",
    marking_notes: "Marking criteria: compare structures; compare strength of intermolecular forces; compare the energy required to overcome the intermolecular forces.",
    steps: [
      st(1, "Compare the STRUCTURES of 2,2-dimethylbutane and hexane.",
        ["2,2-dimethylbutane is more branched / more compact (smaller surface area).", "2,2-dimethylbutane has a longer chain (larger surface area).", "2,2-dimethylbutane has more carbon atoms.", "2,2-dimethylbutane has hydrogen bonds but hexane does not."], 0),
      st(1, "Compare the strength of the intermolecular forces.",
        ["2,2-dimethylbutane has stronger London forces.", "2,2-dimethylbutane has weaker London (dispersion) forces.", "2,2-dimethylbutane has weaker covalent bonds within its molecules.", "The intermolecular forces are equal because the molecular masses are equal."], 1),
      st(1, "Compare the energy needed to overcome the intermolecular forces.",
        ["More energy is needed for 2,2-dimethylbutane.", "The same energy is needed for both.", "Less energy is needed to overcome the intermolecular forces in 2,2-dimethylbutane.", "Less energy is needed to break the covalent bonds in 2,2-dimethylbutane."], 2),
    ],
  },

  // ============ QUESTION 4: ORGANIC REACTIONS (21 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "Compound P (C5H11Br) is the starting reactant in the flow diagram: reaction I (dilute NaOH(aq)) gives 2-methylbutan-1-ol; reaction II (concentrated NaOH) gives compound Q; reaction III (HBr) converts Q to compound R (major product). Name the type of reaction represented by I.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Substitution / hydrolysis.",
    marking_notes: "Accept substitution or hydrolysis.",
    image_url: `${IMG}/4.1-flow-diagram.png`,
    steps: [
      st(1, "What type of reaction is reaction I (haloalkane + dilute NaOH(aq) gives an alcohol)?",
        ["Elimination", "Addition", "Substitution (hydrolysis)", "Cracking"], 2),
    ],
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Is 2-methylbutan-1-ol a PRIMARY, SECONDARY or TERTIARY alcohol? Give a reason for the answer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Primary. The C atom bonded to the -OH group is bonded to only one other C atom (terminal C atom / bonded to two H atoms).",
    marking_notes: "1 mark for 'primary'; 1 mark for any one correct reason.",
    image_url: `${IMG}/4.1-flow-diagram.png`,
    steps: [
      st(1, "Is 2-methylbutan-1-ol a primary, secondary or tertiary alcohol?",
        ["Secondary", "Tertiary", "Primary", "None of these (it is a phenol)"], 2),
      st(1, "Which is the correct reason?",
        ["The C atom bonded to the -OH group is bonded to two other C atoms.", "The C atom bonded to the -OH group is bonded to only one other C atom.", "The -OH group is bonded to the carbon with the methyl branch.", "The compound has a branched chain."], 1),
    ],
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "Write down the STRUCTURAL FORMULA of compound P (C5H11Br, which gives 2-methylbutan-1-ol with dilute NaOH).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "1-bromo-2-methylbutane: Br-CH2-CH(CH3)-CH2-CH3 (drawn in full). Marking criteria: four C atoms in the longest chain; one methyl substituent on C2; bromo substituent on C1.",
    marking_notes: "Three marks: four C atoms in longest chain; methyl on C2; Br on C1. Condensed/semi-structural or omitted H atoms: max 2/3.",
    image_url: `${IMG}/4.1-flow-diagram.png`,
    steps: [
      st(1, "Compound P reacts to give 2-methylbutan-1-ol. How many C atoms are in the longest chain of P?",
        ["Three C atoms", "Four C atoms", "Five C atoms", "Six C atoms"], 1),
      st(1, "Where is the methyl substituent in compound P?",
        ["On C2", "On C3", "Two methyl groups on C2", "An ethyl group on C2"], 0),
      st(1, "Where is the bromine atom in compound P?",
        ["On C2", "On C3", "On C1 (terminal C atom, as the -OH was on C1 in the product)", "On C4"], 2),
    ],
  },
  {
    number: "4", sub_number: "4.1.4",
    text: "Name the type of reaction represented by II (compound P with concentrated NaOH, producing Q).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Elimination / dehydrohalogenation / dehydrobromination.",
    marking_notes: "Accept elimination or dehydrohalogenation.",
    image_url: `${IMG}/4.1-flow-diagram.png`,
    steps: [
      st(1, "What type of reaction is reaction II (haloalkane + concentrated NaOH, heated in ethanol, giving compound Q that then adds HBr)?",
        ["Substitution", "Addition", "Hydrolysis", "Elimination"], 3),
    ],
  },
  {
    number: "4", sub_number: "4.1.5",
    text: "To which homologous series does compound Q belong? (Q is formed in reaction II and reacts with HBr in reaction III.)",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Alkenes.",
    marking_notes: "Accept alkenes.",
    image_url: `${IMG}/4.1-flow-diagram.png`,
    steps: [
      st(1, "To which homologous series does compound Q belong?",
        ["Alkanes", "Alkenes", "Alcohols", "Haloalkanes"], 1),
    ],
  },
  {
    number: "4", sub_number: "4.1.6",
    text: "Name the type of reaction represented by III (compound Q + HBr gives compound R). Choose from ADDITION, ELIMINATION or SUBSTITUTION.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Addition.",
    marking_notes: "Accept addition.",
    image_url: `${IMG}/4.1-flow-diagram.png`,
    steps: [
      st(1, "What type of reaction is reaction III?",
        ["Elimination", "Substitution", "Cracking", "Addition"], 3),
    ],
  },
  {
    number: "4", sub_number: "4.1.7",
    text: "Write down the IUPAC name of compound R (the major product of Q + HBr).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-bromo-2-methylbutane.",
    marking_notes: "1 mark for substituents (2-bromo-2-methyl); 1 mark for stem (butane).",
    image_url: `${IMG}/4.1-flow-diagram.png`,
    steps: [
      st(1, "In the major product of HBr addition, to which C atom is the Br bonded (the C of the double bond with fewer H atoms)?",
        ["C1", "C3", "C4", "C2, which also carries the methyl group"], 3),
      st(1, "What is the correct IUPAC name of compound R?",
        ["1-bromo-2-methylbutane", "2-bromo-3-methylbutane", "2-bromo-2-methylbutane", "3-bromo-2-methylbutane"], 2),
    ],
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "1,2-dibromopropane can be prepared from but-2-ene by a three-step process: but-2-ene -(step 1)-> Compound A -(step 2)-> Compound B -(step 3)-> 1,2-dibromopropane. Using CONDENSED STRUCTURAL FORMULAE, write down a balanced equation for step 1. Indicate the reaction conditions on the arrow.",
    marks: 4, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CHCHCH3 + H2 --(Pt/Ni/Pd)--> CH3CH2CH2CH3 (but-2-ene hydrogenated to butane, compound A).",
    marking_notes: "Four marks: correct condensed structure for but-2-ene; reacts with H2; catalyst Pt/Ni/Pd on the arrow; correct condensed formula for butane. Any additional products or reactants: minus 1 mark.",
    image_url: `${IMG}/4.2-flow-diagram.png`,
    steps: [
      st(1, "Which is the correct condensed structural formula for but-2-ene (the reactant)?",
        ["CH3CH2CHCH2", "CH3CHCHCH3", "CH3CH2CH2CH3", "CH3C(CH3)CH2"], 1),
      st(1, "Which reagent reacts with but-2-ene in step 1 (to give an alkane)?",
        ["H2", "Br2", "H2O", "HBr"], 0),
      st(1, "Which catalyst is written on the arrow?",
        ["Concentrated H2SO4", "Concentrated NaOH", "Pt / Ni / Pd", "Dilute NaOH(aq)"], 2),
      st(1, "Which is the correct condensed formula of the product (compound A)?",
        ["CH3CH2CH2CH3 (butane)", "CH3CH2CHBrCH3", "CH3CH2CH(OH)CH3", "CH3CHCHCH3"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Write down the type of reaction in step 2 (compound A, butane, is converted to compound B).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Elimination / cracking.",
    marking_notes: "Accept elimination or cracking.",
    image_url: `${IMG}/4.2-flow-diagram.png`,
    steps: [
      st(1, "What type of reaction is step 2 (butane to propene, an alkene)?",
        ["Hydration", "Substitution", "Addition", "Cracking (elimination)"], 3),
    ],
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "Write down the IUPAC name of compound B (the compound that reacts in step 3 to give 1,2-dibromopropane).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propene / 1-propene / prop-1-ene.",
    marking_notes: "Two marks for propene / prop-1-ene.",
    image_url: `${IMG}/4.2-flow-diagram.png`,
    steps: [
      st(1, "What must compound B be to give 1,2-dibromopropane on reaction with Br2?",
        ["A three-carbon alkene", "A three-carbon alkane", "A four-carbon alkene", "A three-carbon alkyne"], 0),
      st(1, "What is the correct IUPAC name of compound B?",
        ["Prop-1-yne", "Propan-1-ol", "Prop-1-ene", "1-bromopropane"], 2),
    ],
  },
  {
    number: "4", sub_number: "4.2.4",
    text: "Using CONDENSED STRUCTURAL FORMULAE, write down a balanced equation for step 3 (propene to 1,2-dibromopropane).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CHCH2 + Br2 -> CH3CHBrCH2Br.",
    marking_notes: "Three marks: correct condensed formula for propene; reacts with Br2; correct condensed formula for 1,2-dibromopropane. Any additional products or reactants: minus 1.",
    image_url: `${IMG}/4.2-flow-diagram.png`,
    steps: [
      st(1, "Which is the correct condensed formula of the reactant propene?",
        ["CH3CH2CH3", "CH3CHCH2", "CH3CCH", "CH3CH2CH2Br"], 1),
      st(1, "Which reagent reacts with propene in step 3?",
        ["HBr", "H2", "Br2", "NaOH"], 2),
      st(1, "Which is the correct condensed formula of 1,2-dibromopropane?",
        ["CH3CBr2CH3", "CH2BrCH2CH2Br", "CH3CHBrCH2Br", "CH3CH2CHBr2"], 2),
    ],
  },

  // ============ QUESTION 5: RATE OF REACTION (15 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "The reaction of 15 g of an IMPURE sample of calcium carbonate with EXCESS hydrochloric acid (1,0 mol.dm-3), CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g), is used to investigate rate. Define the term reaction rate.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "The change in concentration of products or reactants per (unit) time (or change in amount/moles/volume/mass per unit time).",
    marking_notes: "Two marks; 'per unit time' only if in context of reaction rate.",
    steps: [
      st(2, "Which statement correctly defines reaction rate?",
        ["The total amount of product formed when the reaction is complete.",
          "The change in concentration of products or reactants per unit time.",
          "The minimum energy needed for the reactants to react.",
          "The number of collisions between particles in the reaction mixture."], 1),
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "(Graph: volume of CO2(g) vs time, curve levelling off at X after t3.) Give a reason why the gradient of the graph decreases between t2 and t3.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "The reaction rate decreases / the concentration of the reactant (HCl) decreases / reactants are used up / the mass of CaCO3 decreases.",
    marking_notes: "Accept any one reason.",
    image_url: `${IMG}/5-co2-volume-graph.png`,
    steps: [
      st(1, "What is the reason why the gradient of the graph decreases between t2 and t3?",
        ["The temperature of the reaction mixture increases.", "The reactants are used up / concentration of reactant decreases.", "A catalyst is used up.", "The surface area of the CaCO3 increases."], 1),
    ],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "(Graph.) The changes in the graph between t1 and t2 are due to temperature changes within the reaction mixture. Is the reaction EXOTHERMIC or ENDOTHERMIC?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Exothermic.",
    marking_notes: "Accept exothermic.",
    image_url: `${IMG}/5-co2-volume-graph.png`,
    steps: [
      st(1, "Is the reaction exothermic or endothermic?",
        ["Endothermic", "Exothermic", "Neither: temperature has no effect on the rate", "It cannot be determined"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "(Graph.) Explain the answer to QUESTION 5.3.1 by referring to the graph.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "The gradient (curve) becomes steeper between t1 and t2; the reaction rate increases / more CO2 is produced per unit time; the temperature increases / energy is released / average kinetic energy of the molecules increases.",
    marking_notes: "Three marks: gradient increases; rate increases; temperature increases.",
    image_url: `${IMG}/5-co2-volume-graph.png`,
    steps: [
      st(1, "What happens to the gradient of the graph between t1 and t2?",
        ["It decreases and becomes flatter.", "It remains constant.", "It becomes steeper (increases).", "It becomes zero."], 2),
      st(1, "What does this show about the reaction rate?",
        ["The rate decreases: less CO2 is produced per unit time.", "The rate increases: more CO2 is produced per unit time.", "The rate stays the same.", "The reaction has stopped."], 1),
      st(1, "What is the cause of the change in rate between t1 and t2?",
        ["The concentration of HCl increases.", "The temperature of the mixture increases / energy is released, so the average kinetic energy of the molecules increases.", "The temperature of the mixture decreases as energy is absorbed.", "The mass of CaCO3 increases."], 1),
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "The percentage purity of the 15 g impure sample of CaCO3 is 82,5%. Calculate the value of X on the graph (the total volume of CO2(g)) assuming that the gas is collected at 25 degrees C. Take the molar gas volume at 25 degrees C as 24 000 cm3 (M(CaCO3) = 100 g.mol-1).",
    marks: 5, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "m(pure CaCO3) = (82,5/100) x 15 = 12,375 g. n(CaCO3) = m/M = 12,375/100 = 0,124 mol. n(CO2) = n(CaCO3) = 0,124 mol. V(CO2) = 0,124 x 24 000 = 2 976 cm3 (2,98 dm3).",
    marking_notes: "Five marks: m(pure CaCO3); divide by 100 g.mol-1; mole ratio n(CO2) = n(CaCO3); multiply n(CO2) by 24 000 cm3 (24 dm3); final answer 2 976 cm3. FLAG: the memo prints the range 2 880 to 2 970 cm3 although its own answer is 2 976 cm3.",
    image_url: `${IMG}/5-co2-volume-graph.png`,
    steps: [
      st(1, "What is the mass of pure CaCO3 in the 15 g impure sample (82,5% pure)?",
        ["12,375 g", "15,0 g", "2,625 g", "18,18 g"], 0),
      st(1, "Using n = m/M with M = 100 g.mol-1, what is n(CaCO3)?",
        ["0,15 mol", "0,124 mol", "1,24 mol", "0,0124 mol"], 1),
      st(1, "What mole ratio between CO2 and CaCO3 does the balanced equation give?",
        ["n(CO2) = 2 n(CaCO3)", "n(CO2) = n(CaCO3)", "n(CO2) = 1/2 n(CaCO3)", "n(CO2) = n(HCl)"], 1),
      st(1, "How is V(CO2) calculated from n(CO2)?",
        ["V = n(CO2) x 24 000 cm3.mol-1", "V = n(CO2) / 24 000 cm3.mol-1", "V = n(CO2) x 44 g.mol-1", "V = n(CO2) x 100 g.mol-1"], 0),
      st(1, "What is the final value of X?",
        ["3 600 cm3", "1 488 cm3", "2 976 cm3", "2 475 cm3"], 2),
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "How will the reaction rate change if 15 g of a PURE sample of CaCO3 reacts with the same HCl solution? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Increases.",
    marking_notes: "Accept increases.",
    steps: [
      st(1, "How will the reaction rate change with 15 g of a pure CaCO3 sample?",
        ["Decreases", "Remains the same", "Increases", "Becomes zero"], 2),
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Use the collision theory to explain the answer to QUESTION 5.5.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "More CaCO3 particles with the correct orientation / greater (exposed) surface area; more effective collisions per unit time / higher frequency of effective collisions.",
    marking_notes: "Two bullets marked independently. If the explanation is in terms of concentration: no mark for bullet 1.",
    steps: [
      st(1, "What is different for the pure sample (no impurities)?",
        ["More CaCO3 particles are exposed / a greater reacting surface area.", "The activation energy of the reaction is lower.", "The molecules have a higher average kinetic energy.", "The concentration of the HCl is higher."], 0),
      st(1, "What is the result according to the collision theory?",
        ["Particles collide with greater energy.", "A higher frequency of effective collisions / more effective collisions per unit time.", "The collisions are fewer but more energetic.", "The activation energy is no longer needed."], 1),
    ],
  },

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (18 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "Consider the hypothetical reaction in a sealed 2 dm3 container at 300 K: 2P(g) + Q2(g) <=> 2PQ(g). Define the term chemical equilibrium.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "The stage in a chemical reaction when the rate of the forward reaction equals the rate of the reverse reaction (or the concentrations of reactants and products remain constant).",
    marking_notes: "2 or 0.",
    steps: [
      st(2, "Which statement correctly defines chemical equilibrium?",
        ["The stage when the reaction has stopped and all reactants are used up.",
          "The stage when the concentrations of reactants and products are equal.",
          "The stage when the rate of the forward reaction equals the rate of the reverse reaction.",
          "The stage when the rate of the forward reaction is greater than the rate of the reverse reaction."], 2),
    ],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "Equilibrium amounts at 300 K: P 0,8 mol; Q2 0,8 mol; PQ 3,2 mol. The temperature is increased to 350 K and a NEW equilibrium is established with 1,2 mol P(g) present. Is the heat of the reaction (change in H) POSITIVE or NEGATIVE?",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Negative. At the higher temperature n(P) increased (0,8 to 1,2 mol), so the reverse reaction is favoured; the reverse reaction is endothermic, so the forward reaction is exothermic.",
    marking_notes: "Accept negative.",
    steps: [
      st(1, "Is the heat of the reaction positive or negative?",
        ["Positive", "Zero", "Negative", "It depends on the catalyst"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "Use Le Chatelier's principle to explain the answer to QUESTION 6.2.1 (the amount of P increases from 0,8 mol to 1,2 mol when temperature is increased from 300 K to 350 K).",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "An increase in temperature favours the endothermic reaction (or a decrease favours the exothermic); the reverse reaction is favoured (concentration of reactants increases / products decrease); so the forward reaction is exothermic (reverse is endothermic).",
    marking_notes: "Three marks (independent bullets).",
    steps: [
      st(1, "How does an increase in temperature affect the direction of the equilibrium?",
        ["It favours the exothermic reaction.", "It favours the endothermic reaction.", "It favours the reaction that produces more moles of gas.", "It has no effect on the direction."], 1),
      st(1, "Which reaction is favoured, given that n(P) increased?",
        ["The forward reaction is favoured.", "Neither reaction is favoured.", "The reverse reaction is favoured (reactant concentration increases).", "Both rates decrease equally."], 2),
      st(1, "What does this show about the forward reaction?",
        ["The forward reaction is endothermic.", "The forward reaction is exothermic (the reverse is endothermic).", "The forward reaction has a lower activation energy.", "The forward reaction involves fewer moles of gas."], 1),
    ],
  },
  {
    number: "6", sub_number: "6.2.3",
    text: "Calculate the equilibrium constant at 350 K. (Container volume 2 dm3; amounts at 300 K equilibrium: P 0,8, Q2 0,8, PQ 3,2 mol; at the new equilibrium n(P) = 1,2 mol; reaction 2P(g) + Q2(g) <=> 2PQ(g).)",
    marks: 8, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Starting from the 300 K equilibrium amounts (P 0,8; Q2 0,8; PQ 3,2): change in n(P) = 1,2 - 0,8 = 0,4 mol; ratio P : Q2 : PQ = 2 : 1 : 2 so Q2 changes by 0,2 and PQ by 0,4; n(Q2) = 0,8 + 0,2 = 1,0 mol and n(PQ) = 3,2 - 0,4 = 2,8 mol; concentrations (divide by 2 dm3): [P] = 0,6, [Q2] = 0,5, [PQ] = 1,4 mol.dm-3; Kc = [PQ]^2/([Q2][P]^2) = (1,4)^2/((0,5)(0,6)^2) = 10,89 (10,889).",
    marking_notes: "Eight marks (a-h): initial amounts; change in n(P); ratio 2:1:2; equilibrium n(Q2), n(PQ); divide by 2 dm3; Kc expression; substitution; final answer 10,89. No Kc expression but correct substitution: max 7/8; wrong Kc expression: max 5/8. FLAG: memo prints '(3)' beside this item but the criteria and question paper give 8 marks.",
    steps: [
      st(1, "Which amounts are taken as the starting point for the change to the new equilibrium at 350 K?",
        ["P 0,8 mol; Q2 0,8 mol; PQ 3,2 mol (the 300 K equilibrium amounts)", "P 1,2 mol; Q2 0,8 mol; PQ 3,2 mol", "P 4 mol; Q2 2,4 mol; PQ 0 mol with no change", "P 0,4 mol; Q2 0,4 mol; PQ 1,6 mol"], 0),
      st(1, "What is the change in n(P)?",
        ["0,4 mol (increase)", "0,4 mol (decrease)", "1,2 mol (increase)", "2,0 mol (increase)"], 0),
      st(1, "Using the mole ratio P : Q2 : PQ = 2 : 1 : 2, what are the changes in n(Q2) and n(PQ)?",
        ["Q2 decreases by 0,2 mol; PQ increases by 0,4 mol", "Q2 increases by 0,4 mol; PQ decreases by 0,4 mol", "Q2 increases by 0,2 mol; PQ decreases by 0,4 mol", "Q2 increases by 0,8 mol; PQ decreases by 0,8 mol"], 2),
      st(1, "What are the new equilibrium amounts of Q2 and PQ?",
        ["n(Q2) = 0,6 mol; n(PQ) = 3,6 mol", "n(Q2) = 1,0 mol; n(PQ) = 2,8 mol", "n(Q2) = 1,0 mol; n(PQ) = 3,6 mol", "n(Q2) = 0,6 mol; n(PQ) = 2,8 mol"], 1),
      st(1, "What are the equilibrium concentrations (container volume 2 dm3)?",
        ["[P] = 1,2; [Q2] = 1,0; [PQ] = 2,8 mol.dm-3", "[P] = 0,6; [Q2] = 0,5; [PQ] = 1,4 mol.dm-3", "[P] = 2,4; [Q2] = 2,0; [PQ] = 5,6 mol.dm-3", "[P] = 0,6; [Q2] = 0,5; [PQ] = 2,8 mol.dm-3"], 1),
      st(1, "Which is the correct Kc expression?",
        ["Kc = [P]^2[Q2] / [PQ]^2", "Kc = [PQ] / ([P][Q2])", "Kc = [PQ]^2 / ([P]^2[Q2])", "Kc = [PQ]^2 / ([P][Q2])"], 2),
      st(1, "Which is the correct substitution into the Kc expression?",
        ["Kc = (1,4)^2 / ((0,5)(0,6)^2)", "Kc = (1,4)^2 / ((0,5)^2(0,6))", "Kc = (0,6)^2(0,5) / (1,4)^2", "Kc = (2,8)^2 / ((1,0)(1,2)^2)"], 0),
      st(1, "What is the value of Kc at 350 K?",
        ["0,09", "10,89", "5,44", "3,30"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.2.4",
    text: "How will the equilibrium constant calculated in QUESTION 6.2.3 be affected when the volume of the container is decreased at constant temperature? Choose from INCREASES, DECREASES or REMAINS THE SAME. Give a reason for the answer.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "Remains the same. Only temperature can change Kc / the temperature remains constant.",
    marking_notes: "1 mark for 'remains the same'; 1 mark for the reason.",
    steps: [
      st(1, "How is Kc affected when the volume of the container is decreased at constant temperature?",
        ["Increases", "Decreases", "Remains the same", "Becomes zero"], 2),
      st(1, "Which is the correct reason?",
        ["The equilibrium shifts to the side with fewer moles of gas, which changes Kc.", "Only temperature can change Kc; the temperature remains constant.", "A smaller volume increases the concentrations, so Kc increases.", "Kc depends on the total pressure."], 1),
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "More Q2(g) is now added to the reaction mixture at constant temperature. How will the yield of PQ(g) be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Increases.",
    marking_notes: "Accept increases.",
    steps: [
      st(1, "How is the yield of PQ(g) affected when more Q2(g) is added?",
        ["Decreases", "Remains the same", "Increases", "Becomes zero"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "More Q2(g) is now added to the reaction mixture at constant temperature. How will the number of moles of P(g) be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Decreases.",
    marking_notes: "Accept decreases.",
    steps: [
      st(1, "How is the number of moles of P(g) affected when more Q2(g) is added?",
        ["Increases", "Remains the same", "Decreases", "Doubles"], 2),
    ],
  },

  // ============ QUESTION 7: ACIDS AND BASES (18 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "Sulphuric acid ionises in two steps: I H2SO4(aq) + H2O(l) -> HSO4-(aq) + H3O+(aq), Ka = 1 x 10^3; II HSO4-(aq) + H2O(l) -> SO4(2-)(aq) + H3O+(aq), Ka = 1 x 10^-2. Define an acid in terms of the Lowry-Bronsted theory.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "A proton (H+ / H3O+ ion) donor.",
    marking_notes: "2 marks.",
    steps: [
      st(2, "Which statement defines an acid in terms of the Lowry-Bronsted theory?",
        ["A substance that accepts protons (H+ ions).", "A substance that donates protons (H+ ions).", "A substance that donates electron pairs.", "A substance that produces OH- ions in water."], 1),
    ],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "(Equations I and II for H2SO4, see 7.1.1.) Write down the NAME or FORMULA of the substance that acts as an ampholyte in the above equations. Give a reason for the answer.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "HSO4- (hydrogen sulphate ion). It acts as a base in reaction I and as an acid in reaction II (it acts as an acid and a base).",
    marking_notes: "1 mark for HSO4-; 1 mark for any one reason.",
    steps: [
      st(1, "Which substance acts as an ampholyte in the equations?",
        ["H2SO4", "H3O+", "SO4(2-)", "HSO4-"], 3),
      st(1, "Which is the correct reason?",
        ["It acts as an acid in both reactions.", "It acts as a base in reaction I and as an acid in reaction II.", "It is formed in reaction I and consumed in reaction II.", "It has a Ka value greater than 1."], 1),
    ],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "The conductivity of solutions of HSO4-(aq) and H2SO4(aq) are compared. Which solution will have a LOWER conductivity? Explain the answer.",
    marks: 3, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "HSO4- (reaction II solution). It has the smaller Ka value / is the weaker acid; so it ionises incompletely / has a lower ion concentration.",
    marking_notes: "1 mark for HSO4-/reaction II; 1 mark for smaller Ka / weaker acid; 1 mark for lower ion concentration / incompletely ionised.",
    steps: [
      st(1, "Which solution has the LOWER conductivity?",
        ["H2SO4(aq) (reaction I)", "HSO4-(aq) (reaction II)", "Both are equal", "It cannot be determined"], 1),
      st(1, "Compare the Ka values: why is this solution a poorer conductor?",
        ["It has the larger Ka value (stronger acid).", "It has the smaller Ka value (weaker acid).", "It has the larger molar mass.", "It does not contain any H3O+ ions."], 1),
      st(1, "What is the effect on the ions in solution?",
        ["It is completely ionised, with a high ion concentration.", "It is incompletely ionised / has a lower ion concentration.", "It forms more ions because it is a weaker acid.", "It forms molecules that carry current."], 1),
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "The pH of a hydrochloric acid solution, HCl(aq), is 1,02 at 25 degrees C. Calculate the concentration of the HCl(aq).",
    marks: 3, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "pH = -log[H3O+]; 1,02 = -log[H3O+]; [H3O+] = 0,0955 mol.dm-3. HCl is a strong (monoprotic) acid so [HCl] = 0,0955 mol.dm-3 (0,096 mol.dm-3).",
    marking_notes: "Three marks: formula; substitution; answer 0,0955 (0,096) mol.dm-3.",
    steps: [
      st(1, "Which formula is used to relate pH and [H3O+]?",
        ["pH = -log[H3O+]", "pH = log[H3O+]", "pH = [H3O+]", "pH = 14 + log[H3O+]"], 0),
      st(1, "Which is the correct substitution?",
        ["[H3O+] = 10^(+1,02)", "[H3O+] = 10^(-1,02)", "[H3O+] = 1,02 / 14", "[H3O+] = 1,02 x 10^-14"], 1),
      st(1, "What is the concentration of the HCl(aq) (a strong monoprotic acid)?",
        ["0,0955 mol.dm-3", "10,47 mol.dm-3", "0,0478 mol.dm-3", "9,55 x 10^-14 mol.dm-3"], 0),
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "2HCl(aq) + Na2CO3(aq) -> 2NaCl(aq) + CO2(g) + H2O(l). 50 cm3 of the HCl solution (0,096 mol.dm-3 from 7.2.1) is added to 25 cm3 of a 0,075 mol.dm-3 Na2CO3 solution. Calculate the concentration of the EXCESS HCl in the new solution.",
    marks: 8, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "n(Na2CO3) = cV = 0,075 x 0,025 = 1,875 x 10^-3 mol. n(HCl)initial = cV = 0,096 x 0,05 = 4,75 x 10^-3 mol. n(HCl)used = 2 n(Na2CO3) = 3,75 x 10^-3 mol. n(HCl)excess = 4,75 x 10^-3 - 3,75 x 10^-3 = 9,5 x 10^-4 mol (approx. as in memo 0,00475 - 0,0038 = 0,00095 mol). c = n/V = 0,00095 / 0,075 = 0,013 mol.dm-3.",
    marking_notes: "Eight marks (positive marking from 7.2.1): formula; n(Na2CO3); n(HCl) initial; ratio n(HCl) = 2 n(Na2CO3); n(HCl) excess (2 marks); V = 0,075 dm3; final answer 0,013 mol.dm-3 (range 0,01 to 0,02). FLAG: memo Option 2 (c1V1 = c2V2) gives 0,014 mol.dm-3.",
    steps: [
      st(1, "Which formula is used to find the amounts of acid and base?",
        ["n = cV", "n = c / V", "n = m x M", "c = n x V"], 0),
      st(1, "What is n(Na2CO3) in 25 cm3 of 0,075 mol.dm-3 solution?",
        ["1,875 x 10^-3 mol", "1,875 mol", "3,0 mol", "3,75 x 10^-3 mol"], 0),
      st(1, "What is n(HCl) initially present in 50 cm3 of the 0,096 mol.dm-3 solution?",
        ["4,8 mol", "4,75 x 10^-3 mol", "1,92 x 10^-3 mol", "9,6 x 10^-2 mol"], 1),
      st(1, "How much HCl reacted with the Na2CO3 (use the mole ratio)?",
        ["n(HCl) = 1/2 n(Na2CO3) = 9,4 x 10^-4 mol", "n(HCl) = n(Na2CO3) = 1,875 x 10^-3 mol", "n(HCl) = 2 n(Na2CO3) = 3,75 x 10^-3 mol", "n(HCl) = 2 n(Na2CO3) = 3,75 mol"], 2),
      st(1, "How is the excess HCl found?",
        ["n(HCl) excess = n(HCl) used - n(HCl) initial", "n(HCl) excess = n(HCl) initial - n(HCl) used", "n(HCl) excess = n(HCl) initial + n(HCl) used", "n(HCl) excess = n(Na2CO3) x 2"], 1),
      st(1, "What is the amount of excess HCl?",
        ["0,00095 mol", "0,00850 mol", "0,0019 mol", "0,00475 mol"], 0),
      st(1, "What is the total volume of the new solution?",
        ["0,025 dm3", "0,050 dm3", "0,075 dm3", "0,025 + 0,050 = 75 dm3"], 2),
      st(1, "What is the concentration of the excess HCl in the new solution?",
        ["0,019 mol.dm-3", "0,013 mol.dm-3", "0,038 mol.dm-3", "0,13 mol.dm-3"], 1),
    ],
  },

  // ============ QUESTION 8: GALVANIC CELL (16 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "Two half-cells under STANDARD CONDITIONS: A = Cu2+(aq) | Cu(s); B = Ag+(aq) | Ag(s). State the energy conversion that takes place in this cell.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Chemical (energy) to electrical (energy).",
    marking_notes: "Accept chemical to electrical.",
    steps: [
      st(1, "What is the energy conversion in this galvanic cell?",
        ["Electrical energy to chemical energy", "Chemical energy to electrical energy", "Heat energy to electrical energy", "Electrical energy to heat energy"], 1),
    ],
  },
  {
    number: "8", sub_number: "8.2",
    text: "Calculate the mass of silver nitrate, AgNO3, used to prepare 150 cm3 of the electrolyte solution in half-cell B (standard conditions, so 1 mol.dm-3; M(AgNO3) = 170 g.mol-1).",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "c = m/(MV): 1 = m/(170 x 0,15); m = 25,50 g. (Or n = cV = 1 x 0,15 = 0,15 mol; m = nM = 0,15 x 170 = 25,50 g.)",
    marking_notes: "Four marks: any formula; substitute 1 mol.dm-3; substitute 170 g.mol-1 and 0,15 dm3; final answer 25,50 g.",
    steps: [
      st(1, "Which formula links mass, concentration, molar mass and volume?",
        ["c = m / (M x V)", "c = (M x V) / m", "c = m x M x V", "c = m / M x V^2"], 0),
      st(1, "What concentration of the electrolyte is used under standard conditions?",
        ["0,1 mol.dm-3", "1 mol.dm-3", "2 mol.dm-3", "0,15 mol.dm-3"], 1),
      st(1, "Which values are substituted for M and V?",
        ["M = 108 g.mol-1 and V = 150 dm3", "M = 170 g.mol-1 and V = 150 dm3", "M = 170 g.mol-1 and V = 0,15 dm3", "M = 108 g.mol-1 and V = 0,15 dm3"], 2),
      st(1, "What is the mass of AgNO3?",
        ["25,50 g", "0,15 g", "18,00 g", "255,0 g"], 0),
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Define the term reducing agent.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A substance that loses/donates electrons (or is oxidised, or whose oxidation number increases).",
    marking_notes: "Any one; 2 marks.",
    steps: [
      st(2, "Which statement defines a reducing agent?",
        ["A substance that gains electrons.", "A substance that is reduced.", "A substance that loses / donates electrons.", "A substance whose oxidation number decreases."], 2),
    ],
  },
  {
    number: "8", sub_number: "8.4.1",
    text: "(Half-cells: Cu2+|Cu and Ag+|Ag, standard conditions.) Write down the NAME or FORMULA of the reducing agent.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Copper / Cu.",
    marking_notes: "Accept copper or Cu.",
    steps: [
      st(1, "Which species is the reducing agent in this cell?",
        ["Ag+", "Ag", "Cu2+", "Cu"], 3),
    ],
  },
  {
    number: "8", sub_number: "8.4.2",
    text: "Write down the balanced equation for the reaction that takes place in the cell (Cu2+|Cu and Ag+|Ag half-cells).",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cu(s) + 2Ag+(aq) -> Cu2+(aq) + 2Ag(s). (Accept Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag.)",
    marking_notes: "Three marks: reactants; products; balancing. Ignore double arrows and phases. If electrons are not cancelled: minus 1.",
    steps: [
      st(1, "Which are the reactants of the overall cell reaction?",
        ["Cu2+ and Ag", "Cu and Ag+", "Cu and Ag", "Cu2+ and Ag+"], 1),
      st(1, "Which are the products of the overall cell reaction?",
        ["Cu2+ and Ag", "Cu and Ag+", "Cu2+ and Ag+", "Cu and Ag"], 0),
      st(1, "Which equation is balanced (with electrons cancelled)?",
        ["Cu + Ag+ -> Cu2+ + Ag", "Cu + 2Ag+ -> Cu2+ + 2Ag", "2Cu + Ag+ -> 2Cu2+ + Ag", "Cu + 2Ag+ + 2e- -> Cu2+ + 2Ag"], 1),
    ],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Calculate the initial emf of this cell (E0 Ag+/Ag = +0,80 V; E0 Cu2+/Cu = +0,34 V).",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E0cell = E0reduction - E0oxidation = 0,80 - (0,34) = 0,46 V.",
    marking_notes: "Four marks: formula; 0,80; -(0,34); 0,46 V. Any other correct formula from the data sheet is accepted.",
    steps: [
      st(1, "Which formula is used to calculate the emf?",
        ["E0cell = E0oxidation - E0reduction", "E0cell = E0reduction + E0oxidation", "E0cell = E0reduction - E0oxidation", "E0cell = E0cathode x E0anode"], 2),
      st(1, "Which value is substituted for the reduction half-reaction (cathode)?",
        ["+0,34 V (Cu2+/Cu)", "+0,80 V (Ag+/Ag)", "-0,80 V", "+1,14 V"], 1),
      st(1, "Which value is substituted for the oxidation half-reaction (anode)?",
        ["-(0,34 V) (Cu2+/Cu)", "-(0,80 V)", "+(0,34 V) added", "-(1,14 V)"], 0),
      st(1, "What is the initial emf of the cell?",
        ["1,14 V", "0,46 V", "-0,46 V", "0,23 V"], 1),
    ],
  },
  {
    number: "8", sub_number: "8.6",
    text: "How will the emf of the cell be affected if the concentration of the copper ions in half-cell A increases? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases. Cu2+ is a product; a higher product concentration opposes the forward reaction, lowering the emf.",
    marking_notes: "Accept decreases.",
    steps: [
      st(1, "How is the emf affected when [Cu2+] in half-cell A increases?",
        ["Increases", "Decreases", "Remains the same", "Becomes constant at 0,34 V"], 1),
    ],
  },

  // ============ QUESTION 9: ELECTROLYTIC CELL (11 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "The diagram shows a simplified electrolytic cell used to electroplate a ring with chromium (pure chromium metal electrode and a ring in concentrated Cr3+(aq), connected to a power source). Define the term electrolyte.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A substance whose (aqueous) solution contains ions / a substance that dissolves in water to give a solution that conducts electricity / forms ions in water or when melted.",
    marking_notes: "Any one; 2 or 0.",
    image_url: `${IMG}/9-electroplating-cell.png`,
    steps: [
      st(2, "Which statement correctly defines an electrolyte?",
        ["A substance whose aqueous solution contains ions (conducts electricity through the movement of ions).", "A metal that conducts electricity through free electrons.", "The electrode at which reduction takes place.", "A substance that dissolves in water to form molecules only."], 0),
    ],
  },
  {
    number: "9", sub_number: "9.2",
    text: "Is the pure chromium metal the ANODE or the CATHODE of the cell? Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Anode. Chromium is oxidised / oxidation takes place at it / it loses electrons / its mass decreases / Cr -> Cr3+ + 3e-. (The ring is plated, so the ring is the cathode.)",
    marking_notes: "1 mark for anode; 1 mark for the reason. Any half-reaction used must be correct.",
    image_url: `${IMG}/9-electroplating-cell.png`,
    steps: [
      st(1, "Is the pure chromium metal the anode or the cathode?",
        ["Cathode", "Anode", "Neither: it is a salt bridge", "Both anode and cathode"], 1),
      st(1, "Which is the correct reason?",
        ["Chromium is reduced: Cr3+ + 3e- -> Cr.", "Chromium is oxidised / loses electrons: Cr -> Cr3+ + 3e-.", "Chromium gains electrons and its mass increases.", "Chromium is connected to the negative terminal of the power source."], 1),
    ],
  },
  {
    number: "9", sub_number: "9.3",
    text: "Write down the half-reaction that takes place at the ring (the ring is being electroplated with chromium from Cr3+(aq)).",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Cr3+(aq) + 3e- -> Cr(s).",
    marking_notes: "2 marks. Ignore phases. Reversed arrow Cr <- Cr3+ + 3e- is 2/2; Cr3+ + 3e- <=> Cr is 1/2; Cr -> Cr3+ + 3e- is 0/2.",
    image_url: `${IMG}/9-electroplating-cell.png`,
    steps: [
      st(2, "Which half-reaction takes place at the ring (cathode)?",
        ["Cr -> Cr3+ + 3e-", "Cr3+ + 3e- -> Cr", "Cr3+ -> Cr + 3e-", "Cr + 3e- -> Cr3+"], 1),
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "Calculate the total charge transferred when the mass of the pure chromium changes by 2 g. (M(Cr) = 52 g.mol-1; NA = 6,02 x 10^23; charge on one electron 1,6 x 10^-19 C.)",
    marks: 5, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "n(Cr) = m/M = 2/52 = 0,038 mol. n(e-) = 3 n(Cr) = 0,115 mol. Number of e- = 0,115 x 6,02 x 10^23 = 6,95 x 10^22. Q = 6,95 x 10^22 x 1,6 x 10^-19 = 11 113,85 C.",
    marking_notes: "Five marks: substitute 52 g.mol-1 in n = m/M; mole ratio n(e-):n(Cr) = 3:1; number of electrons = n x 6,02 x 10^23; total charge = number of electrons x 1,6 x 10^-19; final answer 11 113,85 C (range 11 076,8 to 11 580 C). Option 3 (96 500 C.mol-1) gives 11 134,62 C.",
    steps: [
      st(1, "What is n(Cr) when the mass changes by 2 g (M = 52 g.mol-1)?",
        ["0,038 mol", "26 mol", "0,5 mol", "104 mol"], 0),
      st(1, "Using the half-reaction Cr -> Cr3+ + 3e-, what is n(e-)?",
        ["0,013 mol", "0,038 mol", "0,077 mol", "0,115 mol"], 3),
      st(1, "What is the number of electrons transferred?",
        ["6,95 x 10^22", "2,32 x 10^22", "4,63 x 10^22", "6,95 x 10^-22"], 0),
      st(1, "How is the total charge calculated from the number of electrons?",
        ["Q = number of electrons x 1,6 x 10^-19 C", "Q = number of electrons / 1,6 x 10^-19 C", "Q = number of electrons x 6,02 x 10^23", "Q = number of electrons x 52"], 0),
      st(1, "What is the total charge transferred?",
        ["3 704 C", "7 409 C", "11 113,85 C", "1,11 x 10^-2 C"], 2),
    ],
  },
];
