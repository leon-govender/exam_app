// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2014, National
// (English).
// Sources: question paper and memorandum (bilingual Afrikaans/English memo)
// from maimelatct.com, both verified by cover page: "PHYSICAL SCIENCES:
// CHEMISTRY (P2)", "NOVEMBER 2014", MARKS 150, TIME 3 hours (QP 16 pages + 4
// data sheets; memo 20 pages). Question numbers and values were cross-checked
// between QP and memo: every question's mark total in the memo
// (20, 14, 12, 15, 18, 16, 21, 15, 10, 9) matches the QP and sums to 150.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here.
//
// Grading: every item is a stepped multiple-choice (`steps`): the student works
// on paper and picks, for each mark-earning point in the memo (formula,
// substitution, intermediate value, final answer, or each memo marking-criteria
// bullet for definitions/explanations), one of four options. No
// `marking_points` are used. Distractors trap real Grade 12 errors.
//
// Topic mapping: Q10 (Haber/Ostwald processes, NPK fertiliser) maps to the
// new "chemical-industry" topic. Q1.1 (primary nutrient for plants) is also
// fertiliser content and maps to chemical-industry. FLAG: Q1.4 (effect of a
// catalyst on net activation energy and heat of reaction) maps to
// rate-of-reaction; Q1.5 (cracking) maps to organic-chemistry; Q3.1-3.4
// (alkane/alcohol structure and boiling point) map to organic-chemistry
// except 3.3.1, 3.3.2 and 3.4 (boiling-point investigation, intermolecular forces), which map to
// intermolecular-forces. Q2.2.2/D (polymers: polyethene, condensation
// polymer) map to organic-chemistry (older-syllabus polymer content).
// Q8 and Q9 map to electrochemistry; Q7 maps to acids-and-bases (5.5, the
// CaCO3 impurity calculation, maps to stoichiometry).
//
// Diagrams: Q2 compound table, Q4 flow diagram, Q5 experiments table and the
// A-D graphs, Q7.2 titration apparatus, Q8 cell diagram, Q9 cells A and B and
// the Q10.1 fertiliser flow diagram are vector drawings, so they were cropped
// from 220 dpi page renders into public/question-images/chemistry-2014-p2/.
// Skipped as decorative / fully described in the question text: the gas
// syringe sketches in Q6.3 and the fertiliser bag in Q10.2 (its "3 - 1 - 5
// (36)" label and 20 kg are stated in the text) and the indicator table in
// 7.2.3 (transcribed into the text).
//
// FLAG for review:
// - 5.5: the memo accepts a range of 7,00 g to 7,5 g (18 g rounded vs 17,5 g
//   unrounded mole values). The final-answer option uses 7,49 g (full
//   precision); 7,00 g is not offered as a separate option.
// - 6.2: the memo allows several equivalent methods (moles or concentrations);
//   the steps follow memo OPTION 2 (equilibrium moles using V = 0,08 dm3) and
//   the final answer 1,11 mol (range 1,11 to 1,12).
// - 7.2.6: memo uses M(MgO) = 40 g/mol; final 87,11% (accepted 87 to 87,11).
// - 7.2.3 (indicator B, pH 6,0-7,6) is the memo's choice; the memo gives two
//   alternative reasons, both reflected in the steps.
// - 9.3.2: the memo gives Cu2+ (ions)/copper(II) ions as the "product" at
//   electrode R (the anode, where Cu is oxidised); transcribed faithfully.
// - Memo ticks for several explanation items (3.3.2, 3.4, 5.3, 6.3.2, 9.4) are
//   bullets rather than numbered ticks; each bullet is one step.

import type { MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2014-p2";

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
  year: 2014,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://maimelatct.com/wp-content/uploads/2014/02/physical-sciences-p2-nov-2014-eng1.pdf" as string | null,
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

// Options are written with the correct answer first when correctIndex is 0;
// to avoid always-A answers the correct option is rotated to a position
// derived deterministically from the step description (rotation keeps all
// four options distinct and correctIndex accurate).
function S(marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep {
  if (correctIndex === 0 && options.length === 4) {
    let h = 0;
    for (let i = 0; i < description.length; i++) h += description.charCodeAt(i);
    const k = h % 4;
    const rotated = [...options.slice(4 - k), ...options.slice(0, 4 - k)];
    return { marks, description, options: rotated, correctIndex: k };
  }
  return { marks, description, options, correctIndex };
}

function Q(
  sub: string,
  text: string,
  marks: number,
  topicKey: string,
  cognitiveLevelName: string,
  model_answer: string,
  marking_notes: string,
  steps: MarkingPointStep[],
  image_url?: string,
): QuestionSeed {
  const q: QuestionSeed = {
    number: sub.split(".")[0],
    sub_number: sub,
    text,
    marks,
    topicKey,
    cognitiveLevelName,
    model_answer,
    marking_notes,
    steps,
  };
  if (image_url) q.image_url = image_url;
  return q;
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============
  Q("1.1", "Which ONE of the following is a primary nutrient for plants? (A) Oxygen (B) Carbon (C) Potassium (D) Magnesium",
    2, "chemical-industry", "Recall",
    "C — Potassium. The primary nutrients for plants are nitrogen (N), phosphorus (P) and potassium (K).",
    "Accept only 'C'.",
    [S(2, "Which is a primary plant nutrient?", ["A: Oxygen", "B: Carbon", "C: Potassium", "D: Magnesium"], 2)]),
  Q("1.2", "Which ONE of the following statements is CORRECT? Alkenes ... (A) have the general formula CnH2n+2. (B) are unsaturated hydrocarbons. (C) readily undergo substitution reactions. (D) have one triple bond between two carbon atoms.",
    2, "organic-chemistry", "Recall",
    "B — Alkenes are unsaturated hydrocarbons (they contain a C=C double bond, general formula CnH2n).",
    "Accept only 'B'.",
    [S(2, "Which statement about alkenes is correct?", ["A: have the general formula CnH2n+2.", "B: are unsaturated hydrocarbons.", "C: readily undergo substitution reactions.", "D: have one triple bond between two carbon atoms."], 1)]),
  Q("1.3", "Consider the reaction Cu(s) + 2Ag+(aq) → Cu2+(aq) + 2Ag(s). In the above reaction, Cu(s) is the ... (A) oxidising agent and is reduced. (B) oxidising agent and is oxidised. (C) reducing agent and is reduced. (D) reducing agent and is oxidised.",
    2, "electrochemistry", "Comprehension",
    "D — Cu loses electrons (Cu → Cu2+ + 2e-), so it is oxidised and is therefore the reducing agent.",
    "Accept only 'D'.",
    [S(2, "What is Cu(s) in this reaction?", ["A: oxidising agent and is reduced.", "B: oxidising agent and is oxidised.", "C: reducing agent and is reduced.", "D: reducing agent and is oxidised."], 3)]),
  Q("1.4", "Which ONE of the following describes the effect of a positive catalyst on the net activation energy and the heat of reaction (ΔH) of a specific reaction? (A) Net activation energy increases, ΔH no effect (B) Net activation energy decreases, ΔH increases (C) Net activation energy no effect, ΔH decreases (D) Net activation energy decreases, ΔH no effect",
    2, "rate-of-reaction", "Comprehension",
    "D — A positive catalyst provides an alternative pathway with a lower net activation energy but does not change ΔH.",
    "Accept only 'D'.",
    [S(2, "Effect of a positive catalyst on net activation energy and ΔH?", ["A: Increases; no effect on ΔH", "B: Decreases; ΔH increases", "C: No effect; ΔH decreases", "D: Decreases; no effect on ΔH"], 3)]),
  Q("1.5", "The following equation represents the cracking of a hydrocarbon at high temperature and pressure: C11H24 → 2C2H4 + Y + C4H10. Which ONE of the following is the IUPAC name of product Y? (A) Prop-1-ene (B) Propane (C) Ethene (D) Ethane",
    2, "organic-chemistry", "Application",
    "A — Prop-1-ene. Balancing atoms: C = 11 - 4 - 4 = 3 and H = 24 - 8 - 10 = 6, so Y is C3H6, which is propene.",
    "Accept only 'A'.",
    [S(2, "Name of product Y (C3H6) in the cracking equation", ["A: Prop-1-ene", "B: Propane", "C: Ethene", "D: Ethane"], 0)]),
  Q("1.6", "When 2-chlorobutane is strongly heated in the presence of concentrated sodium hydroxide, the major product formed is ... (A) but-1-ene. (B) but-2-ene. (C) butan-1-ol. (D) butan-2-ol.",
    2, "organic-chemistry", "Application",
    "B — but-2-ene. Strongly heating a haloalkane with concentrated NaOH gives elimination (dehydrohalogenation); the major product is the more substituted alkene, but-2-ene.",
    "Accept only 'B'.",
    [S(2, "Major product of 2-chlorobutane with strongly heated concentrated NaOH", ["A: but-1-ene", "B: but-2-ene", "C: butan-1-ol", "D: butan-2-ol"], 1)]),
  Q("1.7", "A hypothetical reaction reaches equilibrium at 10 °C in a closed container: A(g) + B(g) ⇌ AB(g), ΔH < 0. The temperature is now increased to 25 °C. Which ONE is correct as the reaction approaches a new equilibrium? (A) Rate increases, yield remains the same (B) Rate increases, yield decreases (C) Rate increases, yield increases (D) Rate decreases, yield decreases",
    2, "chemical-equilibrium", "Application",
    "B — Reaction rate increases, yield of products decreases. A higher temperature increases the rate (more effective collisions) and, because the forward reaction is exothermic, favours the reverse (endothermic) reaction, so the yield of AB decreases.",
    "Accept only 'B'.",
    [S(2, "Effect of increasing temperature on reaction rate and yield", ["A: Rate increases; yield remains the same", "B: Rate increases; yield decreases", "C: Rate increases; yield increases", "D: Rate decreases; yield decreases"], 1)]),
  Q("1.8", "Which ONE of the following represents the products formed during the hydrolysis of ammonium chloride? (A) NH3(aq) and H3O+(aq) (B) NH4+(aq) and Cl-(aq) (C) HCl(aq) and OH-(aq) (D) Cl-(aq) and H3O+(aq)",
    2, "acids-and-bases", "Application",
    "A — NH3(aq) and H3O+(aq). The NH4+ ion (conjugate acid of a weak base) reacts with water: NH4+ + H2O ⇌ NH3 + H3O+, giving an acidic solution.",
    "Accept only 'A'.",
    [S(2, "Products of hydrolysis of NH4Cl", ["A: NH3(aq) and H3O+(aq)", "B: NH4+(aq) and Cl-(aq)", "C: HCl(aq) and OH-(aq)", "D: Cl-(aq) and H3O+(aq)"], 0)]),
  Q("1.9", "An electrochemical cell is used to electroplate an iron spoon with nickel. Which ONE of the following half-reactions takes place at the positive electrode of this cell? (A) Fe2+(aq) + 2e- → Fe(s) (B) Fe(s) → Fe2+(aq) + 2e- (C) Ni2+(aq) + 2e- → Ni(s) (D) Ni(s) → Ni2+(aq) + 2e-",
    2, "electrochemistry", "Application",
    "D — Ni(s) → Ni2+(aq) + 2e-. The positive electrode is the anode (oxidation); in electroplating it is the nickel, which dissolves to replace Ni2+ ions deposited on the iron spoon (the cathode).",
    "Accept only 'D'.",
    [S(2, "Half-reaction at the positive electrode (anode)", ["A: Fe2+(aq) + 2e- → Fe(s)", "B: Fe(s) → Fe2+(aq) + 2e-", "C: Ni2+(aq) + 2e- → Ni(s)", "D: Ni(s) → Ni2+(aq) + 2e-"], 3)]),
  Q("1.10", "The following reaction reaches equilibrium in a closed container at a certain temperature: 2O3(g) ⇌ 3O2(g). The pressure is now decreased by increasing the volume of the container at constant temperature. Which ONE is correct as the reaction approaches a new equilibrium? (A) moles O3 increases, moles O2 decreases, [O2] decreases (B) moles O3 decreases, moles O2 increases, [O2] increases (C) moles O3 decreases, moles O2 increases, [O2] decreases (D) moles O3 increases, moles O2 decreases, [O2] increases",
    2, "chemical-equilibrium", "Evaluation",
    "C — Decreasing the pressure favours the side with more moles of gas (the forward reaction: 2 mol → 3 mol), so n(O3) decreases and n(O2) increases; but the volume has increased, so the concentration of O2 is still lower than before.",
    "Accept only 'C'.",
    [S(2, "Effect of decreased pressure (larger volume) on 2O3 ⇌ 3O2", ["A: n(O3) increases; n(O2) decreases; [O2] decreases", "B: n(O3) decreases; n(O2) increases; [O2] increases", "C: n(O3) decreases; n(O2) increases; [O2] decreases", "D: n(O3) increases; n(O2) decreases; [O2] increases"], 2)]),

  // ============ QUESTION 2: ORGANIC COMPOUNDS (14 marks) ============
  Q("2.1.1", "The table shows compounds A to F: A is 2,2,4-trimethylhexane; B is CH3CH2CH2CH2CHO; C is a structural formula of a five-carbon haloalkane (with Br, Cl and a methyl branch); D is a polymer of repeating unit -CH2-CH2-; E is a polymer with ester linkages (a polyester); F is pentan-2-one. Write down the LETTER that represents an aldehyde.",
    1, "organic-chemistry", "Recall",
    "B — CH3CH2CH2CH2CHO ends in the -CHO functional group, so it is an aldehyde (pentanal).",
    "Accept only 'B'.",
    [S(1, "Letter of the aldehyde", ["A", "B", "D", "F"], 1)],
    `${IMG}/2-compounds-table.png`),
  Q("2.1.2", "Using the table of compounds A to F, write down the LETTER that represents a condensation polymer.",
    1, "organic-chemistry", "Recall",
    "E — The polyester in E is formed from monomers that join with the loss of small molecules (water), so it is a condensation polymer. D (polyethene) is an addition polymer.",
    "Accept only 'E'.",
    [S(1, "Letter of the condensation polymer", ["B", "C", "D", "E"], 3)],
    `${IMG}/2-compounds-table.png`),
  Q("2.1.3", "Using the table of compounds A to F, write down the LETTER that represents a compound which has a carbonyl group bonded to two carbon atoms as its functional group.",
    1, "organic-chemistry", "Recall",
    "F — Pentan-2-one is a ketone: its C=O carbonyl group is bonded to two carbon atoms.",
    "Accept only 'F'.",
    [S(1, "Letter of the compound with a carbonyl group bonded to two C atoms", ["B", "E", "F", "A"], 2)],
    `${IMG}/2-compounds-table.png`),
  Q("2.2.1", "Write down the IUPAC name of compound C in the table (a five-carbon chain: CH3-CH(Br)-CH(Cl)-CH(CH3)-CH3).",
    3, "organic-chemistry", "Application",
    "2-bromo-3-chloro-4-methylpentane.",
    "Memo criteria: correct stem (pentane); all substituents correctly identified; substituents correctly numbered, in alphabetical order, with hyphens and commas correctly used.",
    [
      S(1, "Correct stem (longest chain)", ["Butane", "Pentane", "Hexane", "Propane"], 1),
      S(1, "All substituents identified", ["bromo, chloro and methyl", "bromo, chloro and ethyl", "bromo and chloro only", "bromo, chloro and dimethyl"], 0),
      S(1, "Correct numbering, alphabetical order and punctuation", ["2-bromo-3-chloro-4-methylpentane", "4-bromo-3-chloro-2-methylpentane", "2-chloro-3-bromo-4-methylpentane", "3-bromo-2-chloro-4-methylpentane"], 0),
    ],
    `${IMG}/2-compounds-table.png`),
  Q("2.2.2", "Write down the IUPAC name of the monomer of compound D (the polymer with repeating unit -CH2-CH2-).",
    1, "organic-chemistry", "Comprehension",
    "Ethene.",
    "Accept 'Ethene' only.",
    [S(1, "Monomer of the polymer -(CH2-CH2)n-", ["Ethane", "Ethene", "Ethyne", "Propene"], 1)],
    `${IMG}/2-compounds-table.png`),
  Q("2.3.1", "Write down the structural formula of compound A (2,2,4-trimethylhexane).",
    2, "organic-chemistry", "Application",
    "Hexane chain of six carbons with two methyl groups on C2 and one methyl group on C4: CH3-C(CH3)2-CH2-CH(CH3)-CH2-CH3.",
    "Memo criteria: six saturated C atoms in the longest chain (hexane); three methyl substituents on second C (two) and fourth C (one). Condensed formula or H atoms omitted: max 1/2; molecular formula: 0/2.",
    [
      S(1, "Longest chain and substituents", ["Six-carbon chain with three methyl groups", "Five-carbon chain with three ethyl groups", "Seven-carbon chain with two methyl groups", "Six-carbon chain with three bromo groups"], 0),
      S(1, "Condensed structure of 2,2,4-trimethylhexane", ["CH3C(CH3)2CH2CH(CH3)CH2CH3", "CH3CH(CH3)CH2C(CH3)2CH2CH3", "CH3C(CH3)2CH(CH3)CH2CH2CH3", "CH3C(CH3)2CH2CH2CH(CH3)CH3"], 0),
    ],
    `${IMG}/2-compounds-table.png`),
  Q("2.3.2", "Write down the structural formula of compound F (pentan-2-one).",
    2, "organic-chemistry", "Application",
    "CH3-CO-CH2-CH2-CH3 (a five-carbon chain with the C=O carbonyl group on carbon 2).",
    "Memo: whole structure correct 2/2; only functional group correct 1/2; condensed formula max 1/2; molecular formula 0/2.",
    [
      S(1, "Functional group and its position", ["C=O carbonyl on carbon 2 (bonded to two C atoms)", "C=O carbonyl on carbon 1 (CHO at the end)", "-OH group on carbon 2", "-COOH group on carbon 1"], 0),
      S(1, "Condensed structure of pentan-2-one", ["CH3COCH2CH2CH3", "CH3CH2CH2CH2CHO", "CH3CH2COCH2CH3", "CH3COCH2CH3"], 0),
    ],
    `${IMG}/2-compounds-table.png`),
  Q("2.4.1", "The table contains compounds which are functional isomers. Define the term functional isomer.",
    2, "organic-chemistry", "Recall",
    "Compounds with the same molecular formula but different functional groups (different homologous series).",
    "Memo: same molecular formula (1); different functional groups / different homologous series (1).",
    [
      S(1, "First part of the definition", ["Compounds with the same molecular formula", "Compounds with the same structural formula", "Compounds with the same functional group", "Compounds with the same boiling point"], 0),
      S(1, "Second part of the definition", ["but different functional groups / homologous series", "but a different position of the same functional group", "but a different chain length of the same series", "but a different number of carbon atoms"], 0),
    ]),
  Q("2.4.2", "Write down the LETTERS that represent two compounds in the table that are functional isomers.",
    1, "organic-chemistry", "Application",
    "B and F. Pentanal (B, an aldehyde) and pentan-2-one (F, a ketone) both have the molecular formula C5H10O but different functional groups.",
    "Accept B and F.",
    [S(1, "Two compounds that are functional isomers", ["A and B", "B and F", "C and F", "B and E"], 1)],
    `${IMG}/2-compounds-table.png`),

  // ============ QUESTION 3: ALKANES, ALCOHOLS, BOILING POINT (12 marks) ============
  Q("3.1", "Give a reason why alkanes are saturated hydrocarbons.",
    1, "organic-chemistry", "Recall",
    "Alkanes have only single bonds between carbon atoms (no double or triple bonds); they contain the maximum number of H atoms bonded to the C atoms.",
    "Any ONE: only single bonds; single bonds between C atoms; no double/triple/multiple bonds; maximum number of H atoms bonded to C atoms.",
    [S(1, "Reason alkanes are saturated", ["They have only single bonds between C atoms", "They contain at least one C=C double bond", "They contain an -OH group", "They have fewer H atoms than alkenes of the same length because of triple bonds"], 0)]),
  Q("3.2.1", "Write down the structural formula of the functional group of alcohols.",
    1, "organic-chemistry", "Recall",
    "-OH (hydroxyl group), i.e. -O-H.",
    "Accept -OH, -O-H, R-OH or R-O-H.",
    [S(1, "Functional group of alcohols", ["-OH", "-COOH", "-CHO", "C=O"], 0)]),
  Q("3.2.2", "Write down the structural formula of a tertiary alcohol that is a structural isomer of butan-1-ol.",
    2, "organic-chemistry", "Application",
    "2-methylpropan-2-ol: (CH3)3C-OH, with the OH on the second carbon of a three-carbon chain that also carries a methyl group on carbon 2.",
    "Memo criteria: -OH group on second C of longest chain; tertiary group of four C atoms with methyl group on 2nd C atom. Condensed formula max 1/2; molecular formula 0/2.",
    [
      S(1, "Position of the OH and type of alcohol", ["OH on the carbon that is bonded to three other carbons (tertiary)", "OH on the first carbon of the chain (primary)", "OH on a carbon bonded to two other carbons (secondary)", "OH on a carbon bonded to one other carbon with a branch (primary, branched)"], 0),
      S(1, "Structure of the tertiary alcohol isomer of butan-1-ol", ["(CH3)3COH", "CH3CH(OH)CH2CH3", "(CH3)2CHCH2OH", "CH3CH2CH2CH2OH"], 0),
    ]),
  Q("3.3.1", "Learners investigate factors that influence the boiling points of alkanes and alcohols. In one investigation they determine the boiling points of the first three alkanes. Write down an investigative question for this investigation.",
    2, "intermolecular-forces", "Application",
    "How does an increase in chain length / molecular size / molecular mass / surface area influence the boiling point of the alkanes? (or: What is the relationship between chain length and boiling point?)",
    "Memo criteria: the dependent (boiling point) and independent (chain length/molecular size/mass/surface area) variables are stated; a question about the relationship between them.",
    [
      S(1, "Independent and dependent variables to be named", ["Chain length (molecular size) and boiling point", "Boiling point and the colour of the alkane", "Pressure and density", "Number of H atoms and solubility in water"], 0),
      S(1, "Suitable investigative question", ["How does an increase in chain length influence the boiling point of alkanes?", "Do alkanes burn in oxygen?", "Why is propane a gas at room temperature?", "Does the boiling point of alkanes depend on the learner who measures it?"], 0),
    ]),
  Q("3.3.2", "Fully explain why the boiling point increases from methane to propane.",
    3, "intermolecular-forces", "Comprehension",
    "The chain length / molecular size / surface area increases from methane to propane; therefore the strength of the London (dispersion/induced dipole) forces increases; so more energy is needed to overcome (break) the intermolecular forces.",
    "Memo: structure (chain length/molecular size/mass/surface area increases); intermolecular forces (increase in strength of London/dispersion forces); energy (more energy needed to overcome the forces). The OR-version describes propane to methane in reverse.",
    [
      S(1, "Structure", ["Chain length / molecular size / surface area increases", "Chain length decreases", "The polarity of the molecules increases", "Hydrogen bonding is introduced"], 0),
      S(1, "Intermolecular forces", ["Strength of London (dispersion) forces increases", "Strength of London forces decreases", "Covalent bonds within molecules become stronger", "Hydrogen bonds become stronger"], 0),
      S(1, "Energy", ["More energy is needed to overcome the intermolecular forces", "Less energy is needed to overcome the intermolecular forces", "More energy is needed to break the C-H bonds", "The same energy is needed"], 0),
    ]),
  Q("3.4", "The learners find that the boiling point of propan-1-ol is higher than that of propane. Explain this observation by referring to the TYPE of INTERMOLECULAR FORCES present in each of these compounds.",
    3, "intermolecular-forces", "Comprehension",
    "Between propane molecules there are London (dispersion/induced dipole) forces. Between propan-1-ol molecules there are London forces and hydrogen bonds. The hydrogen bonds are stronger than London forces and need more energy to overcome.",
    "Memo: propane - London forces only (1); propan-1-ol - London forces and hydrogen bonds (1); hydrogen bonds are stronger / need more energy than London forces (1).",
    [
      S(1, "Intermolecular forces in propane", ["London (dispersion) forces only", "Hydrogen bonds only", "Dipole-dipole forces and hydrogen bonds", "Ion-dipole forces"], 0),
      S(1, "Intermolecular forces in propan-1-ol", ["London forces and hydrogen bonds", "London forces only", "Ionic bonds", "Covalent network bonds"], 0),
      S(1, "Comparison of strengths", ["Hydrogen bonds are stronger than London forces and need more energy to overcome", "London forces are stronger than hydrogen bonds", "Propan-1-ol has weaker forces so it needs less energy", "Both have forces of equal strength but propan-1-ol has more atoms"], 0),
    ]),

  // ============ QUESTION 4: ORGANIC REACTIONS (15 marks) ============
  Q("4.1.1", "The flow diagram shows the preparation of an ester using prop-1-ene as a starting reagent: prop-1-ene (P) → propane; propane + Cl2 (Q) → haloalkane; haloalkane (R) → propan-1-ol; propan-1-ol (S) → ester. Write down the type of reaction represented by Q.",
    1, "organic-chemistry", "Recall",
    "Substitution (chlorination / halogenation). Propane reacts with Cl2 and one H atom is replaced by Cl.",
    "Accept substitution, chlorination or halogenation.",
    [S(1, "Type of reaction Q (propane + Cl2 → haloalkane)", ["Addition", "Substitution (chlorination)", "Elimination", "Esterification"], 1)],
    `${IMG}/4-flow-diagram.png`),
  Q("4.1.2", "In the flow diagram, the haloalkane is converted to propan-1-ol in reaction R. Write down the type of reaction represented by R.",
    1, "organic-chemistry", "Recall",
    "Substitution (hydrolysis). The Cl atom is replaced by an OH group.",
    "Accept substitution or hydrolysis.",
    [S(1, "Type of reaction R (haloalkane → alcohol)", ["Substitution (hydrolysis)", "Addition (hydration)", "Elimination (dehydrohalogenation)", "Cracking"], 0)],
    `${IMG}/4-flow-diagram.png`),
  Q("4.2.1", "For reaction P (prop-1-ene → propane) write down the type of addition reaction.",
    1, "organic-chemistry", "Recall",
    "Hydrogenation.",
    "Accept hydrogenation.",
    [S(1, "Type of addition reaction P", ["Hydrogenation", "Hydration", "Hydrohalogenation", "Halogenation"], 0)],
    `${IMG}/4-flow-diagram.png`),
  Q("4.2.2", "For reaction P (prop-1-ene → propane) write down the balanced equation using structural formulae.",
    3, "organic-chemistry", "Application",
    "CH3-CH=CH2 + H2 → CH3-CH2-CH3 (shown in full structural form in the memo).",
    "Memo: reactants (1); product (1); balancing (1). Ignore ⇌; accept H2 if condensed; any additional reactants/products max 2/3; molecular/condensed formulae max 2/3; accept multiple coefficients.",
    [
      S(1, "Reactants", ["CH3CH=CH2 and H2", "CH3CH=CH2 and Cl2", "CH3CH=CH2 and H2O", "CH3CH2CH3 and H2"], 0),
      S(1, "Product", ["CH3CH2CH3 (propane)", "CH3CH2CH2Cl", "CH3CH2CH2OH", "CH3CH(Cl)CH3"], 0),
      S(1, "Balanced equation", ["CH3CH=CH2 + H2 → CH3CH2CH3", "CH3CH=CH2 + 2H2 → CH3CH2CH3", "CH3CH=CH2 + H2 → CH3CH2CH2OH", "CH3CH2CH3 + H2 → CH3CH=CH2"], 0),
    ],
    `${IMG}/4-flow-diagram.png`),
  Q("4.3", "Write down the structural formula of the haloalkane formed in reaction Q (propane reacts with Cl2).",
    2, "organic-chemistry", "Application",
    "1-chloropropane: CH2Cl-CH2-CH3 (Cl bonded to the first carbon of the propane chain), drawn in full in the memo.",
    "Memo: whole structure correct 2/2; only ONE Cl atom as functional group 1/2; condensed formula max 1/2; molecular formula 0/2; incorrect functional group 0/2. The memo's structure has Cl on carbon 1 (the next step R gives propan-1-ol).",
    [
      S(1, "Functional group in the haloalkane", ["Exactly one Cl atom replacing one H atom", "Two Cl atoms on the same carbon", "A double bond between two carbons and one Cl atom", "An -OH group"], 0),
      S(1, "Structure of the haloalkane that leads to propan-1-ol", ["CH2ClCH2CH3", "CH3CHClCH3", "CH2ClCH2CH2Cl", "CH3CH2CH2OH"], 0),
    ],
    `${IMG}/4-flow-diagram.png`),
  Q("4.4.1", "In reaction S propan-1-ol reacts with ethanoic acid to form the ester. Write down the name of the reaction that takes place.",
    1, "organic-chemistry", "Recall",
    "Esterification (condensation).",
    "Accept esterification or condensation.",
    [S(1, "Name of reaction S", ["Esterification", "Hydrolysis", "Cracking", "Hydrogenation"], 0)]),
  Q("4.4.2", "In reaction S (propan-1-ol + ethanoic acid → ester) write down the FORMULA or NAME of the catalyst needed.",
    1, "organic-chemistry", "Recall",
    "(Concentrated) H2SO4 / (concentrated) sulphuric acid.",
    "Accept concentrated H2SO4 or concentrated sulphuric acid.",
    [S(1, "Catalyst for esterification", ["Concentrated H2SO4", "Dilute NaOH", "Pt (platinum)", "Concentrated HCl"], 0)]),
  Q("4.4.3", "Write down the structural formula of the ester formed when propan-1-ol reacts with ethanoic acid.",
    2, "organic-chemistry", "Application",
    "CH3-C(=O)-O-CH2-CH2-CH3 (propyl ethanoate), drawn in full structural form in the memo.",
    "Memo: whole structure correct 2/2; only functional group correct 1/2; condensed formula max 1/2; molecular formula 0/2.",
    [
      S(1, "Functional group of the ester", ["-COO- (ester linkage)", "-COOH (carboxyl group)", "-CHO (aldehyde group)", "-O- (ether linkage)"], 0),
      S(1, "Structure of the ester", ["CH3COOCH2CH2CH3", "CH3CH2COOCH3", "CH3CH2CH2COOCH3", "CH3CH2CH2OCOCH2CH3"], 0),
    ]),
  Q("4.4.4", "Write down the IUPAC name of the ester formed when propan-1-ol reacts with ethanoic acid.",
    2, "organic-chemistry", "Application",
    "Propyl ethanoate.",
    "Propyl (from the alcohol) and ethanoate (from the acid), one mark each.",
    [
      S(1, "Alkyl part of the name (from propan-1-ol)", ["Propyl", "Ethyl", "Methyl", "Butyl"], 0),
      S(1, "Second part of the name (from ethanoic acid)", ["ethanoate", "propanoate", "methanoate", "ethanol"], 0),
    ]),
  Q("4.5", "The propan-1-ol formed in reaction R can be converted to prop-1-ene. Write down the FORMULA or NAME of the inorganic reagent needed.",
    1, "organic-chemistry", "Application",
    "Sulphuric acid (H2SO4) or phosphoric acid (H3PO4), acting as a dehydrating agent.",
    "Accept sulphuric acid / H2SO4 / phosphoric acid / H3PO4.",
    [S(1, "Reagent to convert propan-1-ol to prop-1-ene", ["Concentrated H2SO4 or H3PO4", "Dilute NaOH(aq)", "KMnO4(aq)", "Cl2(g)"], 0)]),

  // ============ QUESTION 5: REACTION RATE (18 marks) ============
  Q("5.1", "Define the term reaction rate in words.",
    2, "rate-of-reaction", "Recall",
    "The change in concentration (or amount/number of moles/volume/mass) of products or reactants per (unit) time.",
    "Memo: any ONE of: change in concentration of products/reactants per unit time; rate of change in concentration; change in amount/moles/volume/mass per unit time; amount of products formed or reactants used per unit time.",
    [
      S(1, "Quantity that changes", ["Change in concentration (or amount) of reactants or products", "Change in temperature of the reaction mixture", "Change in the activation energy", "Change in the colour of the reaction mixture"], 0),
      S(1, "Over what", ["per (unit) time", "per mole of reactant", "per unit of pressure", "per unit of surface area"], 0),
    ]),
  Q("5.2.1", "Learners use impure powdered calcium carbonate and excess hydrochloric acid in four experiments (table: Exp 1: 1 mol·dm-3, 15 g, 30 °C; Exp 2: 0,5 mol·dm-3, 15 g, 30 °C; Exp 3: 1 mol·dm-3, 15 g, 40 °C; Exp 4: 1 mol·dm-3, 25 g, 40 °C). CaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g). The results of experiments 1 and 3 are compared. Write down the independent variable.",
    1, "rate-of-reaction", "Comprehension",
    "Temperature (30 °C in experiment 1 and 40 °C in experiment 3).",
    "Accept temperature.",
    [S(1, "Independent variable when comparing experiments 1 and 3", ["Temperature", "Concentration of the acid", "Mass of CaCO3", "Volume of gas released"], 0)],
    `${IMG}/5-experiments-table.png`),
  Q("5.2.2", "For the comparison of experiments 1 and 3 (calcium carbonate with excess hydrochloric acid, volume of gas measured), write down the dependent variable.",
    1, "rate-of-reaction", "Comprehension",
    "Rate of reaction (volume of gas formed per unit time).",
    "Accept rate of reaction or volume of gas formed per unit time.",
    [S(1, "Dependent variable", ["Rate of reaction (volume of gas per unit time)", "Temperature of the acid", "Mass of calcium carbonate", "Concentration of the acid"], 0)],
    `${IMG}/5-experiments-table.png`),
  Q("5.3", "Use the collision theory to explain why the reaction rate in experiment 4 (25 g CaCO3, 1 mol·dm-3 acid, 40 °C) will be higher than that in experiment 3 (15 g CaCO3, 1 mol·dm-3 acid, 40 °C).",
    3, "rate-of-reaction", "Comprehension",
    "Experiment 4 has a larger mass (amount/surface area) of CaCO3. So more particles collide with sufficient kinetic energy and correct orientation per unit time; the frequency of effective collisions increases and therefore the rate is higher.",
    "Memo: larger mass/amount/surface area (1); more effective collisions per unit time / frequency of effective collisions increases (2 marks together with the link to rate). Without reference to mass/amount/surface area: 0/3. If only 'more particles collide / more collisions': max 2/3.",
    [
      S(1, "Difference between experiments 4 and 3", ["Larger mass (amount / surface area) of CaCO3 in experiment 4", "Higher temperature in experiment 4", "Higher acid concentration in experiment 4", "A catalyst was used in experiment 4"], 0),
      S(1, "Effect on collisions", ["More particles with sufficient kinetic energy and correct orientation collide per unit time", "The particles have a higher average kinetic energy", "The activation energy is lowered", "The collisions become more forceful but not more frequent"], 0),
      S(1, "Conclusion", ["Frequency of effective collisions increases, so the reaction rate is higher", "Fewer effective collisions occur per unit time, so the rate is lower", "The number of collisions stays the same but each is more effective", "The equilibrium shifts to the products"], 0),
    ],
    `${IMG}/5-experiments-table.png`),
  Q("5.4", "The learners obtain graphs A, B, C and D (volume of CO2 against time) from their results. Which ONE of the graphs (A, B, C or D) represents experiment 1? Fully explain the answer by comparing experiment 1 with experiments 2, 3 and 4.",
    6, "rate-of-reaction", "Evaluation",
    "Graph C. Experiment 1 is faster than experiment 2 (higher acid concentration), so its graph is steeper / reaches constant volume sooner than that of experiment 2 (graph D). Experiments 3 and 4 are faster than experiment 1 (3: higher temperature; 4: higher temperature and larger surface area/mass), so their graphs (B and A; A reaches the greatest volume because of the greater mass) are steeper than that of experiment 1.",
    "Memo: exp 1 vs 2: factor (concentration) and rate (1), gradient comparison (1); exp 1 vs 3: factor and rate (1); exp 1 vs 4: factor and rate (1); gradient of 3 and 4 greater than exp 1 (1); final answer C (1).",
    [
      S(1, "Graph for experiment 1", ["A", "B", "C", "D"], 2),
      S(1, "Experiment 1 compared with experiment 2 (factor and rate)", ["Exp. 1 is faster than exp. 2 because of the higher acid concentration", "Exp. 1 is slower than exp. 2 because of the higher acid concentration", "Exp. 1 is faster than exp. 2 because of the higher temperature", "Exp. 1 and exp. 2 have the same rate"], 0),
      S(1, "Graph consequence for experiments 1 and 2", ["Graph of exp. 1 has the steeper gradient / reaches constant volume sooner than exp. 2", "Graph of exp. 1 has the smaller gradient than exp. 2", "Graph of exp. 1 reaches a larger final volume than exp. 2", "Graph of exp. 1 is the same as exp. 2"], 0),
      S(1, "Experiment 1 compared with experiment 3", ["Exp. 3 is faster than exp. 1 because of the higher temperature", "Exp. 3 is faster than exp. 1 because of the higher concentration", "Exp. 3 is slower than exp. 1 because of the higher temperature", "Exp. 3 has the same rate as exp. 1"], 0),
      S(1, "Experiment 1 compared with experiment 4", ["Exp. 4 is faster than exp. 1 because of the higher temperature / larger surface area (mass)", "Exp. 4 is slower than exp. 1 because of the larger mass", "Exp. 4 is faster than exp. 1 because of the lower temperature", "Exp. 4 has the same rate as exp. 1 because the acid concentration is the same"], 0),
      S(1, "Gradients of graphs for experiments 3 and 4", ["Gradients of exp. 3 and 4 are steeper than that of exp. 1", "Gradients of exp. 3 and 4 are less steep than that of exp. 1", "Only exp. 3 is steeper than exp. 1", "All four experiments have the same gradient"], 0),
    ],
    `${IMG}/5.4-graphs.png`),
  Q("5.5", "When the reaction in experiment 4 reaches completion, the volume of gas formed is 4,5 dm3. Assume that the molar gas volume at 40 °C is equal to 25,7 dm3. The mass of impure calcium carbonate used in experiment 4 is 25 g. Calculate the mass of the impurities present in the calcium carbonate.",
    5, "stoichiometry", "Application",
    "n(CO2) = V/Vm = 4,5/25,7 = 0,175 mol (0,18 mol). n(CaCO3) = n(CO2) = 0,175 mol (1:1). m(CaCO3) = nM = (0,175)(100) = 17,5 g (18 g if 0,18 mol is used). Mass of impurities = 25 - 17,5 = 7,49 g (7,00 g if 18 g is used).",
    "Memo: divide volume by 25,7 (1); use ratio n(CO2) = n(CaCO3) = 1:1 (1); substitute 100 into n = m/M (1); subtraction (1); final answer 7,00 g to 7,5 g (1) (memo accepts the range 7,00 to 7,5 g).",
    [
      S(1, "Moles of CO2 formed", ["n = V/Vm = 4,5 / 25,7 = 0,175 mol", "n = Vm/V = 25,7 / 4,5 = 5,71 mol", "n = V x Vm = 4,5 x 25,7 = 115,65 mol", "n = V/22,4 = 4,5 / 22,4 = 0,20 mol"], 0),
      S(1, "Mole ratio", ["n(CaCO3) = n(CO2) (1:1)", "n(CaCO3) = 2n(CO2)", "n(CaCO3) = n(CO2) / 2", "n(CaCO3) = n(HCl)"], 0),
      S(1, "Mass of CaCO3 that reacted", ["m = nM = 0,175 x 100 = 17,5 g", "m = nM = 0,175 x 44 = 7,7 g", "m = n/M = 0,175 / 100 = 0,00175 g", "m = nM = 0,175 x 36,5 = 6,4 g"], 0),
      S(1, "Method for the mass of impurities", ["m(impurities) = 25 - m(CaCO3 reacted)", "m(impurities) = m(CaCO3 reacted) - 15", "m(impurities) = 25 + m(CaCO3 reacted)", "m(impurities) = 15 - m(CaCO3 reacted)"], 0),
      S(1, "Final answer: mass of impurities", ["7,49 g", "17,5 g", "10,5 g", "32,5 g"], 0),
    ]),

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (16 marks) ============
  Q("6.1", "A certain amount of nitrogen dioxide gas (NO2) is sealed in a gas syringe at 25 °C. When equilibrium is reached the volume is 80 cm3. The equation is 2NO2(g) ⇌ N2O4(g), ΔH < 0 (dark brown ⇌ colourless). Define the term chemical equilibrium.",
    2, "chemical-equilibrium", "Recall",
    "The stage in a chemical reaction when the rate of the forward reaction equals the rate of the reverse reaction (or when the concentrations of reactants and products remain constant).",
    "Memo: either 'rate of forward reaction equals rate of reverse reaction' OR 'concentrations of reactants and products remain constant'.",
    [S(2, "Definition of chemical equilibrium", ["The stage when the rate of the forward reaction equals the rate of the reverse reaction", "The stage when all the reactants have been used up", "The stage when the concentrations of reactants and products are equal", "The stage when the forward reaction stops completely"], 0)]),
  Q("6.2", "At equilibrium (volume 80 cm3, 25 °C) the concentration of NO2(g) is 0,2 mol·dm-3. The equilibrium constant for 2NO2(g) ⇌ N2O4(g) is 171 at 25 °C. Calculate the initial number of moles of NO2(g) placed in the gas syringe.",
    8, "chemical-equilibrium", "Application",
    "Kc = [N2O4]/[NO2]²; 171 = [N2O4]/(0,2)², so [N2O4] = 6,84 mol·dm-3. At equilibrium n(N2O4) = 6,84 x 0,08 = 0,55 mol and n(NO2) = 0,2 x 0,08 = 0,016 mol. n(N2O4) formed = 0,55 mol; n(NO2) reacted = 2 x 0,55 = 1,094 mol. Initial n(NO2) = 0,016 + 1,094 = 1,11 mol.",
    "Memo marks: correct Kc expression; substitution of concentrations; substitution of Kc value; equilibrium concentrations of both multiplied by 0,08 dm3; change in n(N2O4); use of ratio NO2:N2O4 = 2:1; initial n(NO2) = equilibrium + change; final answer 1,11 mol (accept 1,11 to 1,12). Wrong Kc expression: max 5/8; no Kc expression but correct substitution: max 7/8. The memo gives several equivalent methods; steps follow Option 2 (moles).",
    [
      S(1, "Kc expression", ["Kc = [N2O4] / [NO2]²", "Kc = [NO2]² / [N2O4]", "Kc = [N2O4] / [NO2]", "Kc = [N2O4] x [NO2]²"], 0),
      S(1, "Substitution of the equilibrium concentration of NO2 and Kc", ["171 = [N2O4] / (0,2)²", "171 = [N2O4] / (2 x 0,2)", "171 = (0,2)² / [N2O4]", "171 = [N2O4] x (0,2)²"], 0),
      S(1, "Equilibrium concentration of N2O4", ["6,84 mol·dm-3", "34,2 mol·dm-3", "0,234 mol·dm-3", "0,0047 mol·dm-3"], 0),
      S(1, "Equilibrium moles (multiplying concentrations by 0,08 dm3)", ["n(NO2) = 0,016 mol; n(N2O4) = 0,55 mol", "n(NO2) = 0,2 mol; n(N2O4) = 6,84 mol", "n(NO2) = 16 mol; n(N2O4) = 550 mol", "n(NO2) = 0,016 mol; n(N2O4) = 0,0856 mol"], 0),
      S(1, "Change in n(N2O4) (equilibrium minus initial)", ["0,55 - 0 = 0,55 mol", "0,55 - 0,016 = 0,534 mol", "0,016 - 0 = 0,016 mol", "6,84 - 0 = 6,84 mol"], 0),
      S(1, "Use of the mole ratio NO2 : N2O4 = 2 : 1", ["n(NO2 reacted) = 2 x 0,55 = 1,094 mol", "n(NO2 reacted) = 0,55 / 2 = 0,275 mol", "n(NO2 reacted) = 0,55 mol", "n(NO2 reacted) = 3 x 0,55 = 1,65 mol"], 0),
      S(1, "Method for the initial number of moles of NO2", ["Initial n(NO2) = equilibrium n(NO2) + n(NO2) reacted", "Initial n(NO2) = n(NO2) reacted - equilibrium n(NO2)", "Initial n(NO2) = equilibrium n(NO2) x n(NO2) reacted", "Initial n(NO2) = n(N2O4) at equilibrium"], 0),
      S(1, "Final answer: initial n(NO2)", ["1,11 mol", "0,56 mol", "1,09 mol", "0,29 mol"], 0),
    ]),
  Q("6.3.1", "The pressure on the equilibrium mixture of 2NO2(g) ⇌ N2O4(g) is increased by decreasing the volume of the gas syringe at constant temperature. IMMEDIATELY after increasing the pressure, the colour of the reaction mixture appears darker than before. Give a reason for this observation.",
    1, "chemical-equilibrium", "Comprehension",
    "The concentration of the gases (including brown NO2) increases because the same amount of gas is compressed into a smaller volume (molecules are closer together).",
    "Accept: concentration of the gases increases / molecules more condensed or closer to each other.",
    [S(1, "Reason for the immediately darker colour", ["The concentration of the gases increases (smaller volume)", "More NO2 is formed immediately", "The temperature of the mixture decreases", "The equilibrium shifts to the reverse reaction"], 0)]),
  Q("6.3.2", "After a while a new equilibrium is established and the colour of the mixture appears lighter than the initial (darker) colour. Use Le Chatelier's principle to explain the colour change observed in the gas syringe.",
    3, "chemical-equilibrium", "Comprehension",
    "An increase in pressure favours the reaction that leads to the smaller number of moles (volume) of gas. The forward reaction is favoured. The amount of N2O4 (colourless) increases / the amount of NO2 (brown) decreases, so the mixture becomes lighter.",
    "Memo: increase in pressure favours the reaction that leads to smaller number of moles/volume of gas (1); forward reaction favoured (1); amount of N2O4/colourless gas increases OR amount of NO2/brown gas decreases (1).",
    [
      S(1, "Effect of increased pressure", ["Favours the reaction that produces the smaller number of moles of gas", "Favours the reaction that produces the larger number of moles of gas", "Favours the endothermic reaction", "Has no effect on the position of equilibrium"], 0),
      S(1, "Which reaction is favoured", ["The forward reaction (2 mol NO2 → 1 mol N2O4)", "The reverse reaction", "Neither reaction", "Both reactions equally"], 0),
      S(1, "Result for the colour", ["The amount of N2O4 (colourless) increases / amount of NO2 (brown) decreases", "The amount of NO2 (brown) increases", "The amount of N2O4 (colourless) decreases", "The total number of moles of gas increases"], 0),
    ]),
  Q("6.4.1", "The temperature of the reaction mixture 2NO2(g) ⇌ N2O4(g) (ΔH < 0) is now increased and a new equilibrium is established. How will the colour of the reaction mixture be affected? Write down only DARKER, LIGHTER or REMAINS THE SAME.",
    1, "chemical-equilibrium", "Application",
    "Darker. A higher temperature favours the endothermic reverse reaction, forming more brown NO2.",
    "Accept only 'Darker'.",
    [S(1, "Colour after increasing the temperature", ["Darker", "Lighter", "Remains the same", "Becomes colourless"], 0)]),
  Q("6.4.2", "The temperature of the reaction mixture 2NO2(g) ⇌ N2O4(g) (ΔH < 0) is now increased and a new equilibrium is established. How will the value of the equilibrium constant (Kc) be affected? Write down only INCREASES, DECREASES or REMAINS THE SAME.",
    1, "chemical-equilibrium", "Application",
    "Decreases. The reverse (endothermic) reaction is favoured, so [N2O4]/[NO2]² becomes smaller.",
    "Accept only 'Decreases'.",
    [S(1, "Effect on Kc", ["Decreases", "Increases", "Remains the same", "Becomes zero"], 0)]),

  // ============ QUESTION 7: ACIDS AND BASES (21 marks) ============
  Q("7.1.1", "Nitric acid (HNO3), an important acid used in industry, is a strong acid. Give a reason why nitric acid is classified as a strong acid.",
    1, "acids-and-bases", "Recall",
    "It ionises (dissociates) completely in water.",
    "Accept: ionises/dissociates completely (in water).",
    [S(1, "Reason nitric acid is a strong acid", ["It ionises completely in water", "It ionises only partially in water", "It has a high concentration", "It contains oxygen atoms"], 0)]),
  Q("7.1.2", "Write down the NAME or FORMULA of the conjugate base of nitric acid.",
    1, "acids-and-bases", "Recall",
    "NO3- (nitrate ion).",
    "Accept NO3- or nitrate ion.",
    [S(1, "Conjugate base of HNO3", ["NO3- (nitrate ion)", "H2NO3+", "NO2- (nitrite ion)", "OH-"], 0)]),
  Q("7.1.3", "Calculate the pH of a 0,3 mol·dm-3 nitric acid solution.",
    3, "acids-and-bases", "Application",
    "pH = -log[H3O+] = -log(0,3) = 0,52.",
    "Memo: formula (1); substitution (1); answer 0,52 (1). No/incorrect formula: max 2/3. No substitution step: 2 marks for the correct answer.",
    [
      S(1, "Formula", ["pH = -log[H3O+]", "pH = log[H3O+]", "pH = 14 + log[H3O+]", "pH = -ln[H3O+]"], 0),
      S(1, "Substitution (HNO3 is strong, so [H3O+] = 0,3)", ["pH = -log(0,3)", "pH = -log(0,15)", "pH = -log(0,6)", "pH = 14 - log(0,3)"], 0),
      S(1, "pH of the solution", ["0,52", "-0,52", "13,48", "0,30"], 0),
    ]),
  Q("7.2.1", "A laboratory technician wants to determine the percentage purity of magnesium oxide. He dissolves a 4,5 g sample of the magnesium oxide in 100 cm3 hydrochloric acid of concentration 2 mol·dm-3. Calculate the number of moles of hydrochloric acid added to the magnesium oxide.",
    3, "acids-and-bases", "Application",
    "c = n/V, so n(HCl) = cV = (2)(0,1) = 0,2 mol.",
    "Memo: c = n/V (1); substitution (1); n(HCl) = 0,2 mol (1). Penalise once for incorrect unit conversion.",
    [
      S(1, "Formula", ["c = n/V", "c = nV", "n = c/V", "c = m/V"], 0),
      S(1, "Substitution (volume converted to dm3)", ["n = (2)(0,1)", "n = (2)(100)", "n = 2/0,1", "n = (2)(0,1)/2"], 0),
      S(1, "Number of moles of HCl added", ["0,2 mol", "200 mol", "20 mol", "0,05 mol"], 0),
    ]),
  Q("7.2.2", "He then uses the apparatus shown (retort stand holding a graduated tube Q above an Erlenmeyer flask containing hydrochloric acid, with sodium hydroxide solution in Q) to titrate the EXCESS hydrochloric acid against a sodium hydroxide solution. Write down the name of apparatus Q.",
    1, "acids-and-bases", "Recall",
    "Burette.",
    "Accept burette / buret.",
    [S(1, "Name of apparatus Q", ["Burette", "Pipette", "Measuring cylinder", "Volumetric flask"], 0)],
    `${IMG}/7.2-titration-apparatus.png`),
  Q("7.2.3", "The following indicators are available for the titration of the excess hydrochloric acid with sodium hydroxide: A (pH range 3,1 to 4,4); B (pH range 6,0 to 7,6); C (pH range 8,3 to 10,0). Which ONE of the indicators (A, B or C) is most suitable to indicate the exact endpoint in this titration? Give a reason for the answer.",
    3, "acids-and-bases", "Evaluation",
    "Indicator B. It is a titration of a strong acid and a strong base, so the endpoint is at approximately pH = 7, which lies within the pH range of indicator B.",
    "Memo: B (1); reason - titration of strong acid and strong base OR endpoint at approximately pH 7, within the range of the indicator (2).",
    [
      S(1, "Most suitable indicator", ["Indicator A (3,1 - 4,4)", "Indicator B (6,0 - 7,6)", "Indicator C (8,3 - 10,0)", "Any of the three"], 1),
      S(1, "Type of titration", ["Strong acid and strong base", "Weak acid and strong base", "Strong acid and weak base", "Weak acid and weak base"], 0),
      S(1, "Reason", ["The endpoint is at about pH 7, which falls within the range of the indicator", "The endpoint is at about pH 9, which falls within the range of the indicator", "The endpoint is at about pH 4, which falls within the range of the indicator", "The indicator changes colour at the pH of the sodium hydroxide solution"], 0),
    ]),
  Q("7.2.4", "During the titration, the technician uses distilled water to wash any sodium hydroxide spilled against the sides of the Erlenmeyer flask into the solution. Give a reason why the addition of distilled water to the Erlenmeyer flask will not influence the results.",
    1, "acids-and-bases", "Comprehension",
    "The number of moles of acid in the flask remains constant.",
    "Accept: number of moles of acid remains the same.",
    [S(1, "Why added distilled water does not affect the result", ["The number of moles of acid in the flask remains constant", "The distilled water neutralises some of the acid", "The concentration of the acid stays the same", "The distilled water increases the number of moles of NaOH needed"], 0)]),
  Q("7.2.5", "At the endpoint of the titration he finds that 21 cm3 of a 0,2 mol·dm-3 sodium hydroxide solution has neutralised the EXCESS hydrochloric acid. Calculate the number of moles of hydrochloric acid in excess.",
    3, "acids-and-bases", "Application",
    "n(NaOH) = cV = (0,2)(0,021) = 4,2 x 10-3 mol. HCl + NaOH → NaCl + H2O (1:1), so n(HCl in excess) = 4,2 x 10-3 mol.",
    "Memo: c = n/V with substitution (0,2)(0,021) (1-2 marks); n(NaOH) = 4,2 x 10-3 mol; n(HCl in excess) = n(NaOH) = 4,2 x 10-3 mol (1).",
    [
      S(1, "Substitution to find n(NaOH)", ["n = (0,2)(0,021)", "n = (0,2)(21)", "n = 0,2/0,021", "n = (0,2)(0,021)/2"], 0),
      S(1, "Mole ratio of HCl to NaOH", ["n(HCl) = n(NaOH) (1:1)", "n(HCl) = 2n(NaOH)", "n(HCl) = n(NaOH)/2", "n(HCl) = n(MgO)"], 0),
      S(1, "Moles of HCl in excess", ["4,2 x 10-3 mol", "4,2 mol", "0,2 mol", "8,4 x 10-3 mol"], 0),
    ]),
  Q("7.2.6", "The balanced equation for the reaction between hydrochloric acid and magnesium oxide is MgO(s) + 2HCl(aq) → MgCl2(aq) + 2H2O(l). Calculate the percentage purity of the magnesium oxide. Assume that only the magnesium oxide in the 4,5 g sample reacted with the acid. (Use the answers to 7.2.1 and 7.2.5: 0,2 mol HCl added and 4,2 x 10-3 mol in excess.)",
    5, "acids-and-bases", "Application",
    "n(HCl reacted) = 0,2 - 4,2 x 10-3 = 0,196 mol. n(MgO reacted) = ½n(HCl) = 0,098 mol. m(MgO) = nM = (0,098)(40) = 3,92 g. % purity = (3,92/4,5) x 100 = 87,11%.",
    "Memo (positive marking from 7.2.1 and 7.2.5): n(HCl reacted) = initial - excess (1); mole ratio acid:base = 2:1 (1); substitute 40 into n = m/M (1); m(MgO reacted)/4,5 x 100 (1); final answer 87,11% (1) (accept 87 to 87,11%). Memo uses M(MgO) = 40 g·mol-1.",
    [
      S(1, "Moles of HCl that reacted with MgO", ["0,2 - 4,2 x 10-3 = 0,196 mol", "0,2 + 4,2 x 10-3 = 0,204 mol", "4,2 x 10-3 mol", "0,2 mol"], 0),
      S(1, "Mole ratio of MgO to HCl", ["n(MgO) = ½n(HCl)", "n(MgO) = 2n(HCl)", "n(MgO) = n(HCl)", "n(MgO) = ¼n(HCl)"], 0),
      S(1, "Mass of MgO that reacted", ["m = nM = (0,098)(40) = 3,92 g", "m = nM = (0,196)(40) = 7,84 g", "m = nM = (0,098)(36,5) = 3,58 g", "m = n/M = 0,098/40 = 0,00245 g"], 0),
      S(1, "Percentage purity formula", ["(m(MgO reacted) / 4,5) x 100", "(4,5 / m(MgO reacted)) x 100", "(m(MgO reacted) / 100) x 4,5", "(100 - m(MgO reacted)) / 4,5"], 0),
      S(1, "Final answer: percentage purity", ["87,11%", "174,2%", "12,89%", "43,56%"], 0),
    ]),

  // ============ QUESTION 8: GALVANIC CELLS (15 marks) ============
  Q("8.1", "A standard electrochemical cell is set up using a standard hydrogen half-cell and a standard X|X2+ half-cell. A voltmeter connected across the cell initially registers 0,31 V. Besides concentration write down TWO conditions needed for the hydrogen half-cell to function under standard conditions.",
    2, "electrochemistry", "Recall",
    "Pressure: 1 atm (101,3 kPa / 1,013 x 10^5 Pa) and temperature: 25 °C (298 K).",
    "One mark for pressure (1 atm / 101,3 kPa / 1,013 x 10^5 Pa), one mark for temperature (25 °C / 298 K).",
    [
      S(1, "Pressure condition", ["1 atm (101,3 kPa)", "2 atm (202,6 kPa)", "0,5 atm (50,7 kPa)", "10 atm"], 0),
      S(1, "Temperature condition", ["25 °C (298 K)", "0 °C (273 K)", "100 °C (373 K)", "20 °C (293 K)"], 0),
    ],
    `${IMG}/8-standard-cell.png`),
  Q("8.2", "In the standard hydrogen half-cell, platinum is used as the electrode. Give TWO reasons, besides being a solid, why platinum is suitable to be used as electrode in the cell.",
    2, "electrochemistry", "Comprehension",
    "Platinum is inert (does not react with the H+ ions / acid) and platinum is a conductor of electricity.",
    "One mark each: inert / does not react with H+ ions or acid; conductor of electricity.",
    [
      S(1, "First reason", ["It is inert (does not react with the H+ ions or acid)", "It reacts readily with hydrogen gas to form hydrides", "It is a better reducing agent than hydrogen", "It has a low melting point"], 0),
      S(1, "Second reason", ["It is a conductor of electricity", "It is an insulator", "It dissolves in the acid to supply electrons", "It is a gas at room temperature"], 0),
    ],
    `${IMG}/8-standard-cell.png`),
  Q("8.3.1", "Write down the NAME of component Q in the diagram of the standard cell (the U-tube connecting the hydrogen half-cell and the X|X2+ half-cell).",
    1, "electrochemistry", "Recall",
    "Salt bridge.",
    "Accept salt bridge.",
    [S(1, "Name of component Q", ["Salt bridge", "Voltmeter", "Anode", "Electrolyte"], 0)],
    `${IMG}/8-standard-cell.png`),
  Q("8.3.2", "The voltmeter initially registers 0,31 V. In the diagram the hydrogen electrode is the positive terminal (+) and the X electrode is the negative terminal (-). Write down the standard reduction potential of the X|X2+ half-cell.",
    1, "electrochemistry", "Application",
    "-0,31 V. The hydrogen electrode (E° = 0 V) is the cathode (positive), so E°cell = 0 - E°(X) = +0,31 V and E°(X|X2+) = -0,31 V.",
    "Accept -0,31 V only.",
    [S(1, "Standard reduction potential of X|X2+", ["-0,31 V", "+0,31 V", "0,00 V", "-0,62 V"], 0)],
    `${IMG}/8-standard-cell.png`),
  Q("8.3.3", "Write down the half-reaction that takes place at the cathode of this cell (hydrogen half-cell is the positive terminal).",
    2, "electrochemistry", "Application",
    "2H+ + 2e- → H2",
    "Memo guideline: 2H+ + 2e- ⇌ H2: 1/2; H2 ← 2H+ + 2e-: 2/2 (a reduction written with one-way arrow); H2 ⇌ 2H+ + 2e- or H2 → 2H+ + 2e- : 0/2.",
    [
      S(1, "Species reduced at the cathode", ["H+ is reduced to H2", "H2 is oxidised to H+", "X is oxidised to X2+", "X2+ is reduced to X"], 0),
      S(1, "Half-reaction", ["2H+ + 2e- → H2", "H2 → 2H+ + 2e-", "H+ + e- → H2", "2H+ → H2 + 2e-"], 0),
    ],
    `${IMG}/8-standard-cell.png`),
  Q("8.4.1", "The hydrogen half-cell is now replaced by a M|M2+ half-cell. The cell notation is M(s) | M2+(aq) || X2+(aq) | X(s). The initial reading on the voltmeter is now 2,05 V. Identify metal M. Show how you arrived at the answer. (Use E°(X|X2+) = -0,31 V from 8.3.2 and the table of standard reduction potentials.)",
    5, "electrochemistry", "Evaluation",
    "E°cell = E°reduction - E°oxidation; 2,05 = -0,31 - E°(M|M2+); E°(M|M2+) = -2,36 V; M is magnesium (Mg).",
    "Memo (positive marking from 8.3.2): formula (1); substitution of 2,05 (1) and of -0,31 (1); E°(M|M2+) = -2,36 V (1); M is magnesium, awarded only if concluded from -2,36 V (1). Any other correct formula from the data sheet accepted; unconventional abbreviations followed by correct substitutions: max 4/5. Option 2: M → M2+ + 2e- E° = +2,36 V.",
    [
      S(1, "Formula", ["E°cell = E°reduction - E°oxidation", "E°cell = E°oxidation - E°reduction", "E°cell = E°reduction + E°oxidation", "E°cell = E°anode + E°cathode"], 0),
      S(1, "Substitution of the cell potential", ["E°cell = +2,05 V", "E°cell = -2,05 V", "E°cell = +0,31 V", "E°cell = 2,05 + 0,31 V"], 0),
      S(1, "Substitution of the reduction potential of the cathode (X2+|X)", ["2,05 = -0,31 - E°(M|M2+)", "2,05 = +0,31 - E°(M|M2+)", "2,05 = -0,31 + E°(M|M2+)", "2,05 = E°(M|M2+) - 0,31"], 0),
      S(1, "E° of the M|M2+ half-cell", ["-2,36 V", "+1,74 V", "+2,36 V", "-1,74 V"], 0),
      S(1, "Metal M", ["Magnesium (Mg)", "Zinc (Zn)", "Aluminium (Al)", "Calcium (Ca)"], 0),
    ]),
  Q("8.4.2", "The M|M2+ half-cell and X2+|X half-cell are connected (initial reading 2,05 V). Is the cell reaction EXOTHERMIC or ENDOTHERMIC?",
    1, "electrochemistry", "Comprehension",
    "Exothermic. A galvanic cell with a positive E°cell has a spontaneous cell reaction, which releases energy.",
    "Accept only 'Exothermic'.",
    [S(1, "Is the cell reaction exothermic or endothermic?", ["Exothermic", "Endothermic", "Neither", "Cannot be determined"], 0)]),
  Q("8.5", "The reading on the voltmeter becomes zero after using this cell for several hours. Give a reason for this reading by referring to the cell reaction.",
    1, "electrochemistry", "Comprehension",
    "The cell reaction reaches equilibrium (or one or more of the reactants are used up).",
    "Accept: cell reaction reaches equilibrium / reactants used up / reaction has run to completion.",
    [S(1, "Reason for a zero reading", ["The cell reaction has reached equilibrium", "The salt bridge has been removed", "The temperature has increased", "The electrodes have become inert"], 0)]),

  // ============ QUESTION 9: ELECTROCHEMICAL CELLS A AND B (10 marks) ============
  Q("9.1", "The simplified diagrams show two electrochemical cells, A (carbon electrodes P and Q) and B (copper electrodes R and T), each connected to a battery, with concentrated copper(II) chloride solution as electrolyte. Are A and B ELECTROLYTIC or GALVANIC cells?",
    1, "electrochemistry", "Comprehension",
    "Electrolytic. Both cells are connected to an external power source (battery) which drives a non-spontaneous reaction.",
    "Accept 'Electrolytic'.",
    [S(1, "Type of cells A and B", ["Electrolytic", "Galvanic", "A is galvanic and B is electrolytic", "A is electrolytic and B is galvanic"], 0)],
    `${IMG}/9-electrochemical-cells.png`),
  Q("9.2", "Which of the electrodes (P, Q, R or T) will show a mass increase? Write down a half-reaction to motivate the answer.",
    4, "electrochemistry", "Application",
    "Electrodes Q and T (cathodes of cells A and B) show a mass increase because copper is deposited: Cu2+ + 2e- → Cu.",
    "Memo: Q and T (2 marks, one for each; if more than two electrodes are given, mark the first two); half-reaction Cu2+ + 2e- → Cu (2). Memo guideline: Cu2+ + 2e- ⇌ Cu 1/2; Cu2+ + 2e- ← ... (one-way reduction) 2/2; Cu → Cu2+ + 2e- 0/2.",
    [
      S(1, "Electrode in cell A that gains mass", ["Q", "P", "Neither P nor Q", "Both P and Q"], 0),
      S(1, "Electrode in cell B that gains mass", ["T", "R", "Neither R nor T", "Both R and T"], 0),
      S(2, "Half-reaction", ["Cu2+ + 2e- → Cu", "Cu → Cu2+ + 2e-", "2Cl- → Cl2 + 2e-", "Cu2+ + e- → Cu+"], 0),
    ],
    `${IMG}/9-electrochemical-cells.png`),
  Q("9.3.1", "Write down the NAME or FORMULA of the product formed at electrode P (carbon electrode in cell A with concentrated CuCl2(aq)).",
    1, "electrochemistry", "Application",
    "Cl2 (chlorine gas). Cl- ions are oxidised at the anode: 2Cl- → Cl2 + 2e-.",
    "Accept Cl2 / chlorine (gas).",
    [S(1, "Product at electrode P", ["Cl2 (chlorine gas)", "Cu (copper)", "O2 (oxygen gas)", "H2 (hydrogen gas)"], 0)],
    `${IMG}/9-electrochemical-cells.png`),
  Q("9.3.2", "Write down the NAME or FORMULA of the product formed at electrode R (copper electrode in cell B with concentrated CuCl2(aq)).",
    1, "electrochemistry", "Application",
    "Cu2+ (copper(II) ions), formed when the copper electrode is oxidised: Cu → Cu2+ + 2e-.",
    "Accept Cu2+ (ions) / copper(II) ions / CuCl2 / copper(II) chloride. Transcribed as in the memo.",
    [S(1, "Product at electrode R", ["Cu2+ (copper(II) ions)", "Cl2 (chlorine gas)", "O2 (oxygen gas)", "H2 (hydrogen gas)"], 0)],
    `${IMG}/9-electrochemical-cells.png`),
  Q("9.4", "Fully explain the answer to QUESTION 9.3.2 by referring to the relative strengths of the reducing agents involved.",
    3, "electrochemistry", "Evaluation",
    "Cu is a stronger reducing agent than Cl- (ions), so Cu will be oxidised (to Cu2+) at the anode instead of Cl-.",
    "Memo: Cu is a stronger reducing agent (1) than Cl- (1) and Cu will be oxidised to Cu2+ (1). OR: Cl- is a weaker reducing agent than Cu and Cu will be oxidised.",
    [
      S(1, "Which is the stronger reducing agent", ["Cu is a stronger reducing agent than Cl-", "Cl- is a stronger reducing agent than Cu", "Cu and Cl- are equally strong", "Cu2+ is a stronger reducing agent than Cu"], 0),
      S(1, "Comparison with Cl-", ["Cl- is the weaker reducing agent (less readily oxidised)", "Cl- is the stronger oxidising agent", "Cl- is the stronger reducing agent so it reacts first", "Cl- is neither oxidised nor reduced"], 0),
      S(1, "Conclusion at electrode R", ["Cu is oxidised (to Cu2+) at the anode instead of Cl-", "Cl- is oxidised to Cl2 at electrode R", "Cu2+ is reduced to Cu at electrode R", "Water is oxidised to O2 at electrode R"], 0),
    ],
    `${IMG}/9-electrochemical-cells.png`),

  // ============ QUESTION 10: FERTILISERS AND INDUSTRIAL PROCESSES (9 marks) ============
  Q("10.1.1", "The flow diagram shows the processes involved in the industrial preparation of fertiliser Q: Reactants → (Haber process) → Product A; Product A → (Ostwald process) → Main product B; A and B → Fertiliser Q. Write down the NAMES or FORMULAE of the reactants used in the Haber process.",
    2, "chemical-industry", "Recall",
    "Nitrogen (N2) and hydrogen (H2).",
    "One mark for nitrogen/N2 and one for hydrogen/H2.",
    [
      S(1, "First reactant of the Haber process", ["Nitrogen (N2)", "Ammonia (NH3)", "Sulphur dioxide (SO2)", "Oxygen (O2)"], 0),
      S(1, "Second reactant of the Haber process", ["Hydrogen (H2)", "Nitric acid (HNO3)", "Carbon dioxide (CO2)", "Water (H2O)"], 0),
    ],
    `${IMG}/10.1-fertiliser-flow.png`),
  Q("10.1.2", "Write down the balanced equation for the formation of fertiliser Q (Product A, ammonia from the Haber process, reacts with main product B, nitric acid from the Ostwald process).",
    3, "chemical-industry", "Application",
    "NH3 + HNO3 → NH4NO3",
    "Memo: reactants (1); product (1); balancing (1). Ignore double arrows.",
    [
      S(1, "Reactants", ["NH3 and HNO3", "NH3 and H2SO4", "N2 and H2", "NO2 and H2O"], 0),
      S(1, "Product (fertiliser Q)", ["NH4NO3 (ammonium nitrate)", "(NH4)2SO4 (ammonium sulphate)", "NaNO3", "NH4Cl"], 0),
      S(1, "Balanced equation", ["NH3 + HNO3 → NH4NO3", "2NH3 + HNO3 → NH4NO3", "NH3 + 2HNO3 → NH4NO3", "NH3 + HNO3 → NH4NO3 + H2O"], 0),
    ],
    `${IMG}/10.1-fertiliser-flow.png`),
  Q("10.2", "A bag of NPK fertiliser is labelled '3 - 1 - 5 (36)' and has a mass of 20 kg. Calculate the mass of nitrogen in the bag.",
    4, "chemical-industry", "Application",
    "The ratio N:P:K = 3:1:5, so N is 3/9 of the nutrients. The nutrients make up 36% of 20 kg = 7,2 kg. m(N) = 3/9 x 7,2 = 2,4 kg.",
    "Memo: use ratio 3/9 (1); x 20 kg (1); x 36 (or 36%) (1); final answer 2,4 kg (1). Option 1: %N = 3/9 x 36 = 12%; m(N) = 12/100 x 20 = 2,4 kg.",
    [
      S(1, "Fraction of the nutrients that is nitrogen", ["3/9", "3/36", "3/1", "3/5"], 0),
      S(1, "Mass of the nutrients in the bag (36% of 20 kg)", ["0,36 x 20 = 7,2 kg", "36 x 20 = 720 kg", "20/36 = 0,56 kg", "0,64 x 20 = 12,8 kg"], 0),
      S(1, "Mass of nitrogen from the nutrients", ["3/9 x 7,2", "3/36 x 7,2", "3/9 x 20", "9/3 x 7,2"], 0),
      S(1, "Final answer: mass of nitrogen", ["2,4 kg", "6,67 kg", "0,6 kg", "7,2 kg"], 0),
    ]),
];
