// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2018, National
// (English/Afrikaans bilingual memo; English question paper).
// Sources (stanmorephysics.com, separate files):
//   QP:   https://stanmorephysics.com/wp-content/uploads/2019/05/NOV-P2-QP-ONLY-1.pdf
//         (the REAL 2018 Chemistry P2: pages headed "Physical Sciences/P2 ... DBE/November 2018".
//         The other candidate, NOV-P2-QP-ONLY.pdf, is MATHEMATICS P2 Nov 2018 and was NOT used.)
//   Memo: https://stanmorephysics.com/wp-content/uploads/2019/10/Physical-Sciences-P2-Nov-2018-FINAL-Memo-Afr-Eng..pdf
//         (cover reads "PHYSICAL SCIENCES: CHEMISTRY (P2) / NOVEMBER 2018 / MARKS 150", 18 pages).
// The question paper scan starts at its page 2 (the cover page is not in the file), so the
// duration (180 min) is the standard NSC Chemistry P2 duration and is not read from this scan;
// total 150 is confirmed by the paper's own "TOTAL: 150" and the memo cover.
//
// Structure: TEN compulsory questions, 150 marks (Q1 20, Q2 10, Q3 15, Q4 17, Q5 15, Q6 16,
// Q7 20, Q8 17, Q9 8, Q10 12). Every question was cross-checked against the memo question by
// question (numbers, mark totals, answers): no mismatches.
//
// Every question is a stepped multiple choice (no marking_points). Per-step mark splits follow
// the memo's tick/bullet allocation where it states one; where the memo only gives a total
// (e.g. 8.1.4, 7.3.2) the split is inferred from the memo's listed points.
//
// Diagrams cropped from the scan (2x upscaled): 1.1 functional groups, 1.3 structure, 1.6 rate
// graphs, 1.10 flow diagram, Q2 apparatus, Q5 experiments table, 5.4 Maxwell-Boltzmann curves,
// 8.1 beaker, 8.1.5 iron pipe, Q9 refining cell, Q10 fertiliser flow. The Q3 and Q4 tables /
// reaction boxes and the Q6 syringe picture are reproduced in the question text or skipped as
// decorative (syringe).
//
// FLAGS for review:
//  - Topic mapping: Q1.10 and Q10 (sulphur-to-sulphuric acid, Haber/Ostwald, NPK) use the
//    older-syllabus "chemical-industry" topic. 3.1 (boiling point) is under intermolecular-forces.
//  - 1.1: memo answer is C (carbonyl between two carbons). Option A also shows a bare C=O but with
//    no carbon neighbours, so it is not the ketone group. Transcribed as memo.
//  - 3.2.3: memo main answer is methyl methanoate; it ALSO lists as accepted two chemically odd
//    structures (hydroxy-aldehyde and enediols). Only the real functional isomer is used.
//  - 5.6: memo accepts range 1,43 x 10^-3 to 1,65 x 10^-3 mol/min; 1,65 x 10^-3 used.
//  - 7.3.2: memo Option 2 prints 9,69 then "(9,65 x 10^-6)" for the same value: a typo; the
//    final answer 1,09 x 10^6 g (range 1,08 to 1,09 x 10^6 g) is used.
//  - 8.2.2: memo's Option 2 writes the Fe oxidation E as 0,06 V (sign is carried by oxidation);
//    standard value E(Fe3+/Fe) = -0,06 V as in Option 1. Final answer +0,40 V.
//  - 1.4 asks for the minimum energy to CAUSE EFFECTIVE COLLISIONS (A); transcribed as memo.

import type { MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2018-p2";

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
  year: 2018,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2019/05/NOV-P2-QP-ONLY-1.pdf" as string | null,
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

// Build a step: the correct option is placed at position `pos` (0-3) among the three wrong ones.
function S(marks: number, description: string, correct: string, wrong: [string, string, string], pos: number): MarkingPointStep {
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

// Build a lettered MCQ step from four option texts and the memo letter.
function L(marks: number, letter: "A" | "B" | "C" | "D", opts: [string, string, string, string]): MarkingPointStep {
  const i = "ABCD".indexOf(letter);
  return { marks, description: `Choose ${letter}`, options: opts.map((o, k) => `${"ABCD"[k]}: ${o}`), correctIndex: i };
}

function Q(
  sub: string,
  text: string,
  marks: number,
  topicKey: string,
  cognitiveLevelName: string,
  model_answer: string,
  steps: MarkingPointStep[],
  image?: string,
  marking_notes = "Stepped multiple choice: one step per mark-earning point in the DBE memo.",
): QuestionSeed {
  const q: QuestionSeed = {
    number: sub.split(".")[0], sub_number: sub, text, marks, topicKey, cognitiveLevelName,
    model_answer, marking_notes, steps,
  };
  if (image) q.image_url = `${IMG}/${image}`;
  return q;
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20) ============
  Q("1.1", "Which ONE of the following is the structural formula of the functional group of the KETONES? (A: C=O with two open bonds; B: H–C(=O)–; C: –C–C(=O)–C–, carbonyl between two carbon atoms; D: –C–O–H)", 2, "organic-chemistry", "Recall",
    "C", [L(2, "C", ["C=O with two open bonds and no carbon neighbours shown", "H–C(=O)– (formyl group of aldehydes)", "–C–C(=O)–C– (carbonyl bonded between two carbon atoms)", "–C–O–H (hydroxyl group of alcohols)"])], "1.1-ketone-functional-groups.png"),
  Q("1.2", "Which ONE of the formulae below represents an ALKANE?", 2, "organic-chemistry", "Recall",
    "C: C14H30 (CnH2n+2).", [L(2, "C", ["C2H4", "C5H10", "C14H30", "C8H14"])]),
  Q("1.3", "The IUPAC name of the compound drawn (CH3–CH2–C(CH3)(CH3)–CH3 in full structural form) is ...", 2, "organic-chemistry", "Application",
    "C: 2,2-dimethylbutane.", [L(2, "C", ["2,3-dimethyl butane", "3,3-dimethyl butane", "2,2-dimethyl butane", "1,1,1-trimethyl propane"])], "1.3-structure.png"),
  Q("1.4", "Activation energy can best be described as the minimum energy required to ...", 2, "rate-of-reaction", "Recall",
    "A: cause effective collisions.", [L(2, "A", ["cause effective collisions", "make reactant molecules collide", "change the orientation of reactant molecules", "increase the kinetic energy of reactant molecules"])]),
  Q("1.5", "Which statement is CORRECT for a system in DYNAMIC EQUILIBRIUM?", 2, "chemical-equilibrium", "Comprehension",
    "D: the concentrations of reactants and products remain constant.", [L(2, "D", ["All reactants are used up", "The forward reaction is equal to the reverse reaction", "All substances in the reaction are of equal concentration", "The concentration of the reactants and products remain constant"])]),
  Q("1.6", "P(g) ⇌ 2Q(g), ΔH < 0. At time t the temperature is increased. Which graph (A to D) best illustrates the resulting changes in the rates of the forward and reverse reactions?", 2, "chemical-equilibrium", "Evaluation",
    "B: both rates increase suddenly, the reverse rate (favoured by the higher temperature, endothermic direction) increasing more, then both settle at new equal values.", [L(2, "B", ["Graph A", "Graph B", "Graph C", "Graph D"])], "1.6-rate-graphs.png"),
  Q("1.7", "Reactions I (H3X + HCO3⁻ ⇌ H2X⁻ + H2CO3) and II (H3O⁺ + H2X⁻ ⇌ H2O + H3X) both have Kc > 1. The ACIDS in order of INCREASING strength (weakest to strongest) are ...", 2, "acids-and-bases", "Evaluation",
    "B: H2CO3, H3X, H3O⁺.", [L(2, "B", ["H3X, H2X⁻, H3O⁺", "H2CO3, H3X, H3O⁺", "H3X, H2CO3, H3O⁺", "H3X, H3O⁺, H2CO3"])]),
  Q("1.8", "Cell notation: Ni(s) | Ni²⁺(aq) || H⁺(aq) | H2(g) | Pt(s). Which ONE of the following half-reactions takes place at the ANODE?", 2, "electrochemistry", "Application",
    "D: Ni(s) → Ni²⁺(aq) + 2e⁻ (oxidation at the anode, the left electrode in the notation).", [L(2, "D", ["2H⁺(aq) + 2e⁻ → H2(g)", "H2(g) → 2H⁺(aq) + 2e⁻", "Ni²⁺(aq) + 2e⁻ → Ni(s)", "Ni(s) → Ni²⁺(aq) + 2e⁻"])]),
  Q("1.9", "Which ONE of the following is applicable to an ELECTROLYTIC CELL?", 2, "electrochemistry", "Recall",
    "D: a battery is used for the cell to function.", [L(2, "D", ["Reduction takes place at the anode", "Oxidation takes place at the cathode", "It uses alternating current", "A battery is used for the cell to function"])]),
  Q("1.10", "The flow diagram shows four stages (A, B, C and D) in the conversion of sulphur to sulphuric acid: Sulphur →(A) sulphur dioxide →(B) sulphur trioxide →(C) oleum →(D) sulphuric acid. At which stage is a catalyst used?", 2, "chemical-industry", "Recall",
    "B: SO2 to SO3 uses a V2O5 catalyst in the Contact process.", [L(2, "B", ["Stage A", "Stage B", "Stage C", "Stage D"])], "1.10-sulphuric-acid-flow.png"),

  // ============ QUESTION 2: ESTERIFICATION (10) ============
  Q("2.1", "A test tube containing a straight chain organic acid X, ethanol and a catalyst is heated in a water bath. Give a reason why the test tube is heated in a water bath instead of directly over the flame.", 1, "organic-chemistry", "Comprehension",
    "Ethanol is flammable / volatile (water bath gives gentle, even, low heat).", [
      S(1, "Reason for the water bath", "Ethanol is flammable/volatile, so a water bath provides gentle, even, low-temperature heat", ["A water bath raises the temperature above the boiling point of ethanol", "The reaction only works if the catalyst is dissolved in water", "Direct heating would make the reaction exothermic"], 0)], "2-esterification-apparatus.png"),
  Q("2.2.1", "X + C2H5OH → Y + H2O. Write down the TYPE of reaction that takes place here.", 1, "organic-chemistry", "Recall",
    "Esterification / condensation.", [S(1, "Type of reaction", "Esterification (condensation)", ["Hydrolysis", "Addition", "Elimination"], 1)], "2-esterification-apparatus.png"),
  Q("2.2.2", "Write down the FORMULA of the catalyst needed.", 1, "organic-chemistry", "Recall",
    "H2SO4.", [S(1, "Catalyst", "H2SO4", ["HCl", "NaOH", "H3PO4 (dilute) – used for dehydration not this ester formation"], 2)]),
  Q("2.2.3", "Write down the homologous series to which compound Y belongs.", 1, "organic-chemistry", "Recall",
    "Esters.", [S(1, "Homologous series of Y", "Esters", ["Carboxylic acids", "Alcohols", "Aldehydes"], 3)]),
  Q("2.3", "The molecular mass of compound Y is 144 g·mol⁻¹ and its empirical formula is C4H8O. Determine the molecular formula of Y.", 2, "organic-chemistry", "Application",
    "M(C4H8O) = 72; 144/72 = 2; so Y = C8H16O2.", [
      S(1, "Divide molecular mass by empirical-formula mass", "144/72 = 2 (M of C4H8O = 72 g·mol⁻¹)", ["144/56 = 2,57", "144/88 = 1,64", "144/72 = 2 using M(C4H8O) = 60 g·mol⁻¹"], 0),
      S(1, "Molecular formula", "C8H16O2", ["C8H16O", "C4H8O2", "C6H12O"], 1)]),
  Q("2.4", "Write down the IUPAC name of compound Y.", 2, "organic-chemistry", "Application",
    "Ethyl hexanoate.", [
      S(1, "Alkyl part of the ester (from ethanol)", "Ethyl", ["Methyl", "Propyl", "Hexyl"], 2),
      S(1, "Acid part (C8 total minus 2 C of ethyl = 6 C chain)", "hexanoate", ["octanoate", "pentanoate", "heptanoate"], 3)]),
  Q("2.5", "Write down the structural formula of the organic acid X.", 2, "organic-chemistry", "Application",
    "Hexanoic acid: H–(CH2)5–COOH drawn in full: five carbons in a straight chain, each with its Hs, ending in –C(=O)–O–H.", [
      S(1, "Functional group of X", "Carboxyl group –C(=O)OH", ["Hydroxyl group –OH only", "Ester group –COO–", "Carbonyl group –CHO"], 0),
      S(1, "Whole structure of X", "Straight chain of 6 C atoms, CH3(CH2)4COOH (hexanoic acid)", ["Straight chain of 8 C atoms, CH3(CH2)6COOH (octanoic acid)", "Straight chain of 5 C atoms, CH3(CH2)3COOH (pentanoic acid)", "Branched 6 C acid, (CH3)2CH(CH2)2COOH"], 1)]),

  // ============ QUESTION 3: BOILING POINTS (15) ============
  Q("3.1", "Boiling points: A HCOOH 101 °C, B CH3COOH 118 °C, C CH3CH2COOH 141 °C, D CH3CH2CH2COOH 164 °C. Define boiling point.", 2, "intermolecular-forces", "Recall",
    "The temperature at which the vapour pressure of a substance equals atmospheric (external) pressure.", [
      S(2, "Definition of boiling point", "The temperature at which the vapour pressure of a substance equals atmospheric/external pressure", ["The temperature at which a substance changes from solid to liquid", "The temperature at which the vapour pressure of a substance is zero", "The energy required to break all the covalent bonds in a substance"], 2)]),
  Q("3.2.1", "Name the FUNCTIONAL GROUP of compounds A to D.", 1, "organic-chemistry", "Recall",
    "Carboxyl group.", [S(1, "Functional group", "Carboxyl group", ["Hydroxyl group", "Carbonyl group", "Ester group"], 3)]),
  Q("3.2.2", "Write down the IUPAC name of compound C (CH3CH2COOH).", 1, "organic-chemistry", "Recall",
    "Propanoic acid.", [S(1, "Name of C", "Propanoic acid", ["Butanoic acid", "Ethanoic acid", "Propan-1-ol"], 0)]),
  Q("3.2.3", "Write down the structural formula of the FUNCTIONAL isomer of compound B (CH3COOH).", 2, "organic-chemistry", "Application",
    "Methyl methanoate, H–C(=O)–O–CH3 (drawn in full).", [
      S(1, "Functional group of the isomer", "Ester group –C(=O)–O–", ["Carboxyl group –COOH (same as B, not an isomer)", "Aldehyde group only", "Ether group –C–O–C– only"], 1),
      S(1, "Whole structure", "H–C(=O)–O–CH3 (methyl methanoate)", ["CH3–C(=O)–O–CH3 (methyl ethanoate)", "CH3–O–CH2–OH (an ether-alcohol)", "CH3CH2–C(=O)–H (propanal)"], 2)]),
  Q("3.3", "Which ONE of the compounds, A or B or C, has the highest vapour pressure? Refer to the data in the table to give a reason.", 2, "intermolecular-forces", "Comprehension",
    "A: lowest boiling point / shortest chain length.", [
      S(1, "Compound", "A", ["B", "C", "All three have the same vapour pressure"], 0),
      S(1, "Reason", "A has the lowest boiling point / shortest chain length (weakest intermolecular forces)", ["A has the highest boiling point", "A has the longest chain length and the strongest London forces", "A is the only one with hydrogen bonds"], 1)]),
  Q("3.4.1", "The boiling point of compound B (CH3COOH, 118 °C) is compared with compound X (CH3CH2CH2OH, 98 °C). Besides the conditions used to determine boiling points, give a reason why this is a fair comparison.", 1, "intermolecular-forces", "Comprehension",
    "They have the same molecular mass / size.", [
      S(1, "Reason for fair comparison", "B and X have the same molecular mass / molecular size", ["B and X belong to the same homologous series", "B and X have the same functional group", "B and X have the same number of hydrogen bonding sites"], 2)]),
  Q("3.4.2", "Is compound X (CH3CH2CH2OH) a PRIMARY, SECONDARY or TERTIARY alcohol? Give a reason for the answer.", 2, "organic-chemistry", "Comprehension",
    "Primary: the –OH is bonded to a C atom bonded to one other C atom (that C has two H atoms).", [
      S(1, "Type", "Primary", ["Secondary", "Tertiary", "Quaternary"], 3),
      S(1, "Reason", "The –OH group is bonded to a C atom that is bonded to only one other C atom", ["The –OH group is bonded to a C atom bonded to two other C atoms", "The –OH group is on the middle carbon of the chain", "The molecule contains three carbon atoms"], 0)]),
  Q("3.4.3", "Fully explain the difference between the boiling points of B and X by referring to the types of intermolecular forces present in each of these compounds.", 4, "intermolecular-forces", "Evaluation",
    "Both have (London, dipole-dipole and) hydrogen bonding; B (carboxylic acid) has two/more sites for hydrogen bonding than X (one site); intermolecular forces in B are stronger; more energy is needed to overcome them, so B has the higher boiling point.", [
      S(1, "Types of forces", "Both B and X have hydrogen bonding (in addition to London and dipole-dipole forces)", ["Only B has hydrogen bonding; X has only London forces", "Both have only London forces because their molecular masses are equal", "B has ionic bonds between molecules"], 1),
      S(1, "Sites for hydrogen bonding", "B (carboxylic acid) has two/more sites for hydrogen bonding, X (alcohol) has one site", ["X has more sites for hydrogen bonding than B", "B and X have the same number of hydrogen bonding sites", "Hydrogen bonds in B break covalent bonds"], 2),
      S(1, "Strength of intermolecular forces", "Intermolecular forces in B are stronger than in X", ["Intermolecular forces in B are weaker than in X", "The covalent bonds in B are stronger than in X", "Intermolecular forces in B and X are equally strong"], 3),
      S(1, "Energy", "More energy is needed to overcome the intermolecular forces in B than in X", ["More energy is needed to break the covalent bonds in X than in B", "Less energy is needed to overcome the intermolecular forces in B", "The same energy is needed for B and X"], 0)]),

  // ============ QUESTION 4: ORGANIC REACTIONS (17) ============
  Q("4.1.1", "Three reactions of organic compounds from the same homologous series. I: Butane + Br2 → 2-bromobutane + P. II: Pentane + excess oxygen (heat) → ... III: Hexane → C2H4 + Q. Define a homologous series.", 2, "organic-chemistry", "Recall",
    "A series of organic compounds that can be described by the same general formula / functional group (or one member differs from the next by a CH2 group).", [
      S(2, "Definition", "A series of organic compounds that can be described by the same general formula / functional group", ["A series of compounds with the same molecular formula but different structures", "A series of compounds with the same empirical formula", "A series of organic compounds that differ from each other by an OH group"], 1)]),
  Q("4.1.2", "(Reaction I: butane + Br2 → 2-bromobutane + P.) Name the type of reaction represented by I.", 1, "organic-chemistry", "Recall",
    "Substitution (halogenation / bromination).", [S(1, "Type of reaction I", "Substitution (bromination)", ["Addition", "Elimination", "Hydrolysis"], 2)]),
  Q("4.1.3", "Write down the formula of the inorganic compound P.", 1, "organic-chemistry", "Application",
    "HBr.", [S(1, "P", "HBr", ["H2", "Br2", "HBrO"], 3)]),
  Q("4.1.4", "Give the structural formula of a POSITIONAL isomer of 2-bromobutane.", 2, "organic-chemistry", "Application",
    "1-bromobutane: Br on the first C atom of a straight 4-carbon chain, full structural formula.", [
      S(1, "Position of Br", "Br on the first carbon atom (terminal)", ["Br on the second carbon atom of a butane chain (same compound)", "Br on a methyl branch of propane (2-bromo-2-methylpropane, chain isomer)", "Two Br atoms (Br2 left on the chain)"], 0),
      S(1, "Whole structure", "H–C(Br)(H)–C(H)(H)–C(H)(H)–C(H)(H)–H (1-bromobutane)", ["CH3–CH(Br)–CH2–CH3 drawn in full (2-bromobutane itself)", "CH3–C(CH3)(Br)–CH3 (2-bromo-2-methylpropane)", "Br–CH2–CH2–CH2–CH2–Br (1,4-dibromobutane)"], 1)]),
  Q("4.1.5", "Using molecular formulae, write down the balanced equation for reaction II (pentane burns in excess oxygen).", 3, "organic-chemistry", "Application",
    "C5H12 + 8O2 → 5CO2 + 6H2O.", [
      S(1, "Reactants", "C5H12 + O2", ["C5H10 + O2", "C5H12 + H2O", "C5H12 only"], 2),
      S(1, "Products", "CO2 + H2O", ["CO + H2O", "CO2 + H2", "C + H2O"], 3),
      S(1, "Balancing", "C5H12 + 8O2 → 5CO2 + 6H2O", ["C5H12 + 5O2 → 5CO2 + 6H2O", "C5H12 + 6O2 → 5CO2 + 6H2O", "2C5H12 + 8O2 → 10CO2 + 12H2O (unbalanced oxygen)"], 0)]),
  Q("4.1.6", "Reaction III (hexane → C2H4 + Q) is an example of a cracking reaction. Define a cracking reaction.", 2, "organic-chemistry", "Recall",
    "The chemical process in which longer chain hydrocarbons are broken down to shorter/more useful hydrocarbons (alkanes and alkenes).", [
      S(2, "Definition", "The (chemical) process in which longer chain hydrocarbons are broken down into shorter, more useful hydrocarbons (alkanes and alkenes)", ["The process in which shorter hydrocarbons are joined to form longer chains", "The process in which crude oil is separated by boiling point into fractions", "The reaction of an alkane with oxygen to form CO2 and H2O"], 1)]),
  Q("4.1.7", "Give the structural formula of organic compound Q (hexane → C2H4 + Q).", 2, "organic-chemistry", "Application",
    "Butane, CH3CH2CH2CH3 drawn in full.", [
      S(1, "Identity of Q", "A 4-carbon alkane, C4H10 (butane)", ["A 4-carbon alkene, C4H8 (butene)", "A 6-carbon alkane, C6H14 (hexane)", "A 2-carbon alkane, C2H6 (ethane)"], 3),
      S(1, "Structure", "H–C–C–C–C–H straight chain with all single bonds and 10 H atoms", ["Branched chain (CH3)3CH, 2-methylpropane", "Straight chain with one C=C double bond (C4H8)", "Straight chain of 4 C atoms with 8 H atoms and a ring"], 0)]),
  Q("4.2.1", "2-bromobutane undergoes hydrolysis to form compound R, which reacts to form an alkene. Write down the IUPAC name of compound R.", 2, "organic-chemistry", "Application",
    "Butan-2-ol (2-butanol).", [
      S(1, "Homologous series / chain", "An alcohol with a 4-carbon chain (butanol)", ["An alkene with a 4-carbon chain (butene)", "An alcohol with a 3-carbon chain (propanol)", "A carboxylic acid with a 4-carbon chain (butanoic acid)"], 1),
      S(1, "Position of –OH", "Butan-2-ol (OH on carbon 2)", ["Butan-1-ol", "Butan-3-ol", "2-methylpropan-2-ol"], 2)], undefined),
  Q("4.2.2", "Compound R reacts in the presence of concentrated phosphoric acid to form an alkene. Write down the structural formula of the MAJOR PRODUCT in this reaction.", 2, "organic-chemistry", "Application",
    "But-2-ene: CH3–CH=CH–CH3 drawn in full (major product).", [
      S(1, "Functional group", "A C=C double bond (alkene)", ["A C≡C triple bond (alkyne)", "A C–O–C ether link", "A C=O carbonyl group"], 3),
      S(1, "Major product structure", "CH3–CH=CH–CH3 (but-2-ene, the more substituted alkene)", ["CH2=CH–CH2–CH3 (but-1-ene, the minor product)", "CH3–CH2–CH2–CH3 (butane)", "CH3–CH(OH)–CH2–CH3 (butan-2-ol)"], 0)]),

  // ============ QUESTION 5: RATE OF REACTION (15) ============
  Q("5.1", "Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g), excess dilute HCl. Experiments 1 and 5 differ only in HCl temperature (25 °C and 35 °C), with the same concentration (2,0 mol·dm⁻³), volume and powdered Zn. Write down the independent variable when experiments 1 and 5 are compared.", 1, "rate-of-reaction", "Comprehension",
    "Temperature.", [S(1, "Independent variable", "Temperature", ["Concentration of HCl", "Reaction time", "State of division of Zn"], 0)], "5-experiments-table.png"),
  Q("5.2", "Define reaction rate.", 2, "rate-of-reaction", "Recall",
    "The change in concentration (amount, moles, volume or mass) of products or reactants per (unit) time.", [
      S(2, "Definition", "The change in concentration of products/reactants per unit time", ["The total amount of product formed when the reaction is complete", "The minimum energy needed for a reaction to occur", "The time it takes for all the reactants to be used up"], 2)], "5-experiments-table.png"),
  Q("5.3", "Write down the value of x (reaction time in minutes) in experiment 4 (1,5 mol·dm⁻³ HCl, 400 cm³, granules, 25 °C), using the table.", 2, "rate-of-reaction", "Application",
    "14 (min): same mass of Zn and EXCESS acid, same concentration and state of division as experiment 2; the extra volume of acid does not change the rate or the time.", [
      S(2, "Value of x", "14 min", ["28 min", "7 min", "5 min"], 3)], "5-experiments-table.png"),
  Q("5.4.1", "The Maxwell-Boltzmann curves for experiments 1, 3 and 5 are shown. Identify the graph (A, B or C) that represents experiment 3. Give a reason.", 2, "rate-of-reaction", "Evaluation",
    "Graph B: experiment 3 has the highest HCl concentration / more particles.", [
      S(1, "Graph for experiment 3", "B", ["A", "C", "A and C together"], 0),
      S(1, "Reason", "Experiment 3 has the highest (acid) concentration / more particles", ["Experiment 3 has the highest temperature", "Experiment 3 has the lowest activation energy", "Experiment 3 reacts with the lowest rate"], 1)], "5.4-maxwell-boltzmann.png"),
  Q("5.4.2", "Identify the graph (A, B or C) that represents experiment 5. Give a reason.", 2, "rate-of-reaction", "Evaluation",
    "Graph C: experiment 5 is at the highest temperature (35 °C), more particles with sufficient kinetic energy.", [
      S(1, "Graph for experiment 5", "C", ["A", "B", "B and C together"], 2),
      S(1, "Reason", "Experiment 5 is at the highest temperature, more particles with sufficient kinetic energy", ["Experiment 5 has the highest concentration", "Experiment 5 has a catalyst present", "Experiment 5 has the largest surface area"], 3)], "5.4-maxwell-boltzmann.png"),
  Q("5.5.1", "Experiment 6 is conducted using a catalyst and the SAME reaction conditions as Experiment 1. What is the function of the catalyst in this experiment?", 1, "rate-of-reaction", "Recall",
    "It speeds up the reaction by providing an alternative pathway with a lower activation energy.", [
      S(1, "Function of catalyst", "Speeds up the reaction / lowers the (net) activation energy", ["Increases the yield of hydrogen gas", "Increases the heat of reaction", "Increases the kinetic energy of the particles"], 1)]),
  Q("5.5.2", "How will the heat of reaction in experiment 6 compare to that in experiment 1? Choose from: GREATER THAN, EQUAL TO or LESS THAN.", 1, "rate-of-reaction", "Comprehension",
    "Equal to: a catalyst does not change ΔH.", [S(1, "Comparison", "Equal to", ["Greater than", "Less than", "Zero"], 2)]),
  Q("5.6", "Calculate the average rate of the reaction (in mol·min⁻¹) with respect to zinc for experiment 2 if 1,5 g of zinc is used.", 4, "rate-of-reaction", "Application",
    "n(Zn) = 1,5/65 = 0,023 mol; rate = −Δn/Δt = −(0 − 0,023)/(14 − 0) = 1,65 × 10⁻³ mol·min⁻¹.", [
      S(1, "Moles of Zn (M = 65 g·mol⁻¹)", "n = m/M = 1,5/65 = 0,023 mol", ["n = 65/1,5 = 43,3 mol", "n = 1,5/32,5 = 0,046 mol", "n = 1,5 × 65 = 97,5 mol"], 3),
      S(1, "Substitute change in moles", "Δn = 0 − 0,023 (all Zn used up)", ["Δn = 0,023 + 0,046", "Δn = 0,023 × 2", "Δn = 1,5 − 0,023"], 0),
      S(1, "Substitute change in time (experiment 2)", "Δt = 14 − 0 min", ["Δt = 7 − 0 min", "Δt = 14 × 60 s = 840 s with an answer left in mol·min⁻¹", "Δt = 5 − 0 min"], 1),
      S(1, "Final answer", "1,65 × 10⁻³ mol·min⁻¹", ["3,3 × 10⁻³ mol·min⁻¹", "6,0 × 10⁻² mol·min⁻¹", "1,65 × 10⁻³ mol·min⁻¹ with the wrong sign convention giving 1,65 × 10³"], 2)]),

  // ============ QUESTION 6: EQUILIBRIUM (16) ============
  Q("6.1", "N2O4(g) ⇌ 2NO2(g) (colourless ⇌ brown) in a sealed syringe of volume 2 dm³ at 325 °C. State Le Chatelier's principle.", 2, "chemical-equilibrium", "Recall",
    "When the equilibrium in a closed system is disturbed, the system will re-instate a (new) equilibrium by favouring the reaction that will cancel/oppose the disturbance.", [
      S(2, "Statement", "When the equilibrium in a closed system is disturbed, the system re-instates a new equilibrium by favouring the reaction that opposes the disturbance", ["When a reaction reaches equilibrium the forward and reverse rates are equal and constant", "When a system is disturbed the equilibrium constant changes to oppose the disturbance", "When equilibrium is disturbed, the system favours the reaction that increases the disturbance"], 0)]),
  Q("6.2", "The syringe is dipped into ice water; after a while the brown colour disappears. Is the forward reaction EXOTHERMIC or ENDOTHERMIC? Explain using Le Chatelier's principle.", 3, "chemical-equilibrium", "Evaluation",
    "Endothermic: a decrease in temperature favours the exothermic reaction (reverse), so NO2 (brown) decreases / N2O4 increases.", [
      S(1, "Type of forward reaction", "Endothermic", ["Exothermic", "Neither: the colour change is caused by volume", "Cannot be determined"], 1),
      S(1, "Effect of lower temperature", "A decrease in temperature favours the exothermic reaction", ["A decrease in temperature favours the endothermic reaction", "A decrease in temperature slows both reactions equally", "A decrease in temperature increases the value of Kc only"], 2),
      S(1, "Observation link", "The reverse reaction is favoured: NO2 (brown) decreases and N2O4 (colourless) increases", ["The forward reaction is favoured: NO2 (brown) increases", "Both N2O4 and NO2 decrease", "The amount of N2O4 stays constant"], 3)]),
  Q("6.3.1", "The volume of the syringe is decreased at constant temperature. How will the number of moles of N2O4(g) be affected?", 1, "chemical-equilibrium", "Application",
    "Increases: higher pressure favours the side with fewer gas moles (N2O4).", [S(1, "Moles of N2O4", "Increases", ["Decreases", "Remains the same", "Becomes zero"], 0)]),
  Q("6.3.2", "(Volume decreased at constant temperature.) How will the value of the equilibrium constant be affected?", 1, "chemical-equilibrium", "Comprehension",
    "Remains the same: Kc depends only on temperature.", [S(1, "Kc", "Remains the same", ["Increases", "Decreases", "Becomes equal to 1"], 1)]),
  Q("6.3.3", "(Volume decreased at constant temperature.) How will the rate of the forward and reverse reactions be affected?", 1, "chemical-equilibrium", "Application",
    "Increases: concentrations increase, more effective collisions per unit time.", [S(1, "Rates", "Both increase", ["Both decrease", "Both remain the same", "Forward increases, reverse decreases permanently"], 2)]),
  Q("6.4", "Initially x moles of N2O4(g) were placed in the syringe of volume 2 dm³. At equilibrium 20% of the N2O4(g) had decomposed. If Kc = 0,16 at 325 °C, calculate the value of x.", 8, "chemical-equilibrium", "Application",
    "Δn(N2O4) = 0,2x; Δn(NO2) = 0,4x; equilibrium n: N2O4 = 0,8x, NO2 = 0,4x; concentrations 0,4x and 0,2x; Kc = [NO2]²/[N2O4]; 0,16 = (0,2x)²/(0,4x); x = 1,6 mol.", [
      S(1, "Change in N2O4", "Δn(N2O4) = 20% of x = 0,2x", ["Δn(N2O4) = 0,8x", "Δn(N2O4) = 0,2x² ", "Δn(N2O4) = 2 × 0,2x"], 3),
      S(1, "Mole ratio N2O4 : NO2 = 1 : 2", "Δn(NO2) = 0,4x", ["Δn(NO2) = 0,2x", "Δn(NO2) = 0,1x", "Δn(NO2) = 0,8x"], 0),
      S(1, "Equilibrium amounts", "n(N2O4) = 0,8x and n(NO2) = 0,4x", ["n(N2O4) = 0,2x and n(NO2) = 0,4x", "n(N2O4) = 0,8x and n(NO2) = 0,2x", "n(N2O4) = x and n(NO2) = 0,4x"], 1),
      S(1, "Divide by volume 2 dm³", "c(N2O4) = 0,4x and c(NO2) = 0,2x", ["c(N2O4) = 1,6x and c(NO2) = 0,8x", "c(N2O4) = 0,8x and c(NO2) = 0,4x", "c(N2O4) = 0,4x and c(NO2) = 0,4x"], 2),
      S(1, "Kc expression", "Kc = [NO2]² / [N2O4]", ["Kc = [N2O4] / [NO2]²", "Kc = [NO2] / [N2O4]", "Kc = 2[NO2] / [N2O4]"], 3),
      S(1, "Substitute Kc", "0,16 = [NO2]²/[N2O4]", ["0,16 = [N2O4]/[NO2]²", "1/0,16 = [NO2]²/[N2O4]", "0,16 = [NO2]/[N2O4]"], 0),
      S(1, "Substitute concentrations", "0,16 = (0,2x)² / (0,4x)", ["0,16 = (0,2x) / (0,4x)²", "0,16 = (0,4x)² / (0,2x)", "0,16 = (0,2x)² / (0,8x)"], 1),
      S(1, "Final answer", "x = 1,6 mol", ["x = 0,64 mol", "x = 0,8 mol", "x = 3,2 mol"], 2)]),

  // ============ QUESTION 7: ACIDS AND BASES (20) ============
  Q("7.1.1", "Sulphuric acid ionises in two steps: I H2SO4 + H2O ⇌ H3O⁺ + HSO4⁻; II HSO4⁻ + H2O ⇌ H3O⁺ + SO4²⁻. Define an acid in terms of the Lowry-Brønsted theory.", 2, "acids-and-bases", "Recall",
    "An acid is a proton (H⁺ ion) donor.", [
      S(2, "Definition", "An acid is a proton donor", ["An acid is a proton acceptor", "An acid is an electron-pair acceptor", "An acid is a substance that increases the OH⁻ concentration in water"], 1)]),
  Q("7.1.2", "Write down the FORMULA of the conjugate base of H3O⁺(aq).", 1, "acids-and-bases", "Recall",
    "H2O.", [S(1, "Conjugate base", "H2O", ["OH⁻", "H2O⁺", "H3O"], 2)]),
  Q("7.1.3", "Write down the FORMULA of the substance that acts as an ampholyte in the ionisation of sulphuric acid.", 2, "acids-and-bases", "Comprehension",
    "HSO4⁻ (it acts as a base in step I and as an acid in step II).", [
      S(2, "Ampholyte", "HSO4⁻", ["H2SO4", "SO4²⁻", "H2O"], 3)]),
  Q("7.2.1", "Acid rain does not damage lakes with limestone (CaCO3), because hydrolysis of CaCO3 forms ions that neutralise the acid. Define hydrolysis of a salt.", 2, "acids-and-bases", "Recall",
    "The reaction of a salt (its cations or anions) with water.", [
      S(2, "Definition", "The reaction of a salt (cations or anions) with water", ["The reaction of a salt with an acid to form a new salt", "The splitting of a salt into ions when it dissolves in water", "The reaction of an acid with a base to form a salt and water"], 0)]),
  Q("7.2.2", "Explain, with the aid of the relevant HYDROLYSIS reaction, how limestone can neutralise the acid.", 3, "acids-and-bases", "Evaluation",
    "CO3²⁻ + H2O ⇌ HCO3⁻ + OH⁻ (or CO3²⁻ + 2H2O ⇌ H2CO3 + 2OH⁻); the OH⁻ formed neutralises the excess acid.", [
      S(1, "Reactants of hydrolysis", "CO3²⁻(aq) + H2O(l)", ["CaCO3(s) + H2O(l) → Ca(OH)2 + CO2 only", "CO3²⁻(aq) + H3O⁺(aq)", "Ca²⁺(aq) + H2O(l)"], 1),
      S(1, "Products of hydrolysis", "HCO3⁻(aq) + OH⁻(aq) (or H2CO3 + 2OH⁻)", ["HCO3⁻(aq) + H3O⁺(aq)", "CO2(g) + H2(g)", "Ca(OH)2 + O2"], 2),
      S(1, "Explanation", "The OH⁻ formed neutralises the excess acid", ["The H3O⁺ formed neutralises the excess acid", "The Ca²⁺ ions react with and remove the acid", "The CO2 formed neutralises the excess acid"], 3)]),
  Q("7.3.1", "The water in a certain lake has a pH of 5. Calculate the concentration of the hydronium ions in the water.", 3, "acids-and-bases", "Application",
    "pH = −log[H3O⁺]; 5 = −log[H3O⁺]; [H3O⁺] = 1 × 10⁻⁵ mol·dm⁻³.", [
      S(1, "Formula", "pH = −log[H3O⁺]", ["pH = log[H3O⁺]", "pH = −log[OH⁻]", "pH = [H3O⁺]/14"], 0),
      S(1, "Substitution", "5 = −log[H3O⁺]", ["5 = log[H3O⁺]", "5 = −log[H3O⁺]²", "14 − 5 = −log[H3O⁺]"], 1),
      S(1, "Final answer", "[H3O⁺] = 1 × 10⁻⁵ mol·dm⁻³", ["[H3O⁺] = 1 × 10⁻⁹ mol·dm⁻³", "[H3O⁺] = 5 mol·dm⁻³", "[H3O⁺] = 1 × 10⁵ mol·dm⁻³"], 2)]),
  Q("7.3.2", "The lake has volume 4 × 10⁹ dm³. Lime, CaO, is added to neutralise the acid: CaO + 2H3O⁺ → Ca²⁺ + 3H2O. If the final amount of hydronium ions is 1,26 × 10³ mol, calculate the mass of lime that was added.", 7, "acids-and-bases", "Application",
    "n(H3O⁺) initial = cV = 1 × 10⁻⁵ × 4 × 10⁹ = 4 × 10⁴ mol; reacted = 4 × 10⁴ − 1,26 × 10³ = 3,87 × 10⁴ mol; n(CaO) = ½ × 3,87 × 10⁴ = 1,94 × 10⁴ mol; m = nM = 1,94 × 10⁴ × 56 = 1,09 × 10⁶ g.", [
      S(1, "Formula for moles from concentration", "n = cV", ["n = c/V", "n = m/M for the acid", "n = cM"], 3),
      S(1, "Substitute V = 4 × 10⁹ dm³ (initial moles)", "n(H3O⁺) initial = 1 × 10⁻⁵ × 4 × 10⁹ = 4 × 10⁴ mol", ["n = 1 × 10⁻⁵ × 4 × 10⁶ = 40 mol", "n = 1 × 10⁻⁵ / 4 × 10⁹ = 2,5 × 10⁻¹⁵ mol", "n = 5 × 4 × 10⁹ = 2 × 10¹⁰ mol"], 0),
      S(1, "Moles of H3O⁺ that reacted", "4 × 10⁴ − 1,26 × 10³ = 3,87 × 10⁴ mol", ["4 × 10⁴ + 1,26 × 10³ = 4,13 × 10⁴ mol", "1,26 × 10³ mol", "4 × 10⁴ mol"], 1),
      S(1, "Mole ratio CaO : H3O⁺ = 1 : 2", "n(CaO) = ½ × 3,87 × 10⁴ = 1,94 × 10⁴ mol", ["n(CaO) = 2 × 3,87 × 10⁴ = 7,74 × 10⁴ mol", "n(CaO) = 3,87 × 10⁴ mol", "n(CaO) = ⅓ × 3,87 × 10⁴ mol"], 2),
      S(1, "Formula for mass", "m = nM", ["m = n/M", "m = cV", "m = M/n"], 3),
      S(1, "Molar mass of CaO", "M(CaO) = 56 g·mol⁻¹", ["M(CaO) = 40 g·mol⁻¹", "M(CaO) = 74 g·mol⁻¹", "M(CaO) = 100 g·mol⁻¹"], 0),
      S(1, "Final answer", "m = 1,09 × 10⁶ g", ["m = 2,17 × 10⁶ g", "m = 7,76 × 10⁵ g", "m = 1,94 × 10⁴ g"], 1)]),

  // ============ QUESTION 8: REDOX / GALVANIC (17) ============
  Q("8.1.1", "Corrosion is a redox reaction in the presence of oxygen and water; rusting forms iron(III) ions. Define oxidation in terms of electron transfer.", 2, "electrochemistry", "Recall",
    "Loss of electrons.", [S(2, "Definition", "Loss of electrons", ["Gain of electrons", "Gain of oxygen only", "Loss of protons"], 2)]),
  Q("8.1.2", "A cleaned copper rod and a cleaned iron nail are placed in water. After a while the iron nail is coated with rust; the copper shows no corrosion. Write down the half-reaction for the iron nail.", 2, "electrochemistry", "Application",
    "Fe → Fe³⁺ + 3e⁻.", [
      S(1, "Species and charge", "Fe → Fe³⁺ + 3e⁻ (iron(III) ions, 3 electrons)", ["Fe → Fe²⁺ + 2e⁻", "Fe → Fe³⁺ + 2e⁻ (unbalanced charge)", "Fe → Fe³⁻ + 3e⁻"], 3),
      S(1, "Direction", "Oxidation: electrons appear on the product side, arrow points to Fe³⁺", ["Reduction: Fe³⁺ + 3e⁻ → Fe", "Oxidation with the electrons on the reactant side", "A reversible arrow with no direction"], 0)], "8.1-iron-copper-beaker.png"),
  Q("8.1.3", "Does iron act as REDUCING AGENT or OXIDISING AGENT in the beaker?", 1, "electrochemistry", "Comprehension",
    "Reducing agent (it is oxidised).", [S(1, "Role of iron", "Reducing agent", ["Oxidising agent", "Catalyst", "Electrolyte"], 1)], "8.1-iron-copper-beaker.png"),
  Q("8.1.4", "Explain the observation (Fe rusts, Cu does not) by referring to the Table of Standard Reduction Potentials.", 3, "electrochemistry", "Evaluation",
    "Fe is a stronger reducing agent than Cu and is oxidised (to Fe³⁺); Cu is a weaker reducing agent and is not oxidised.", [
      S(1, "Comparison", "Fe is a stronger reducing agent than Cu", ["Cu is a stronger reducing agent than Fe", "Fe is a stronger oxidising agent than Cu", "Fe and Cu have the same reducing strength"], 2),
      S(1, "Fate of Fe", "Fe is oxidised (to Fe³⁺), forming rust", ["Fe is reduced (to Fe³⁺)", "Fe is not oxidised in water", "Fe³⁺ is oxidised to Fe"], 3),
      S(1, "Fate of Cu", "Cu, the weaker reducing agent, is not oxidised (no visible corrosion)", ["Cu is oxidised faster than Fe but the rust is not visible", "Cu is reduced to Cu²⁺", "Cu is protected because it is a stronger reducing agent"], 0)], "8.1-iron-copper-beaker.png"),
  Q("8.1.5", "To prevent rusting of an underground iron pipe, the pipe is connected to a metal (Q) that corrodes easily. You are given two metals, Zn and Cu, to use as metal Q. Which metal would be more suitable? Give a reason.", 2, "electrochemistry", "Application",
    "Zinc: it is a stronger reducing agent than Fe (oxidised before Fe).", [
      S(1, "Metal", "Zn", ["Cu", "Both are equally suitable", "Neither is suitable"], 1),
      S(1, "Reason", "Zn is a stronger reducing agent than Fe, so it is oxidised in preference to Fe", ["Zn is a weaker reducing agent than Fe", "Zn is a stronger oxidising agent than Fe", "Zn has a higher reduction potential than Fe"], 2)], "8.1-iron-pipe-Q.png"),
  Q("8.2.1", "A galvanic cell is constructed using a Fe | Fe³⁺ half-cell and a Cu | Cu²⁺ half-cell. Write down the overall (net) cell reaction that takes place when the cell is functioning.", 3, "electrochemistry", "Application",
    "3Cu²⁺ + 2Fe → 3Cu + 2Fe³⁺.", [
      S(1, "Reactants", "Cu²⁺ + Fe", ["Cu + Fe³⁺", "Cu²⁺ + Fe³⁺", "Cu + Fe"], 3),
      S(1, "Products", "Cu + Fe³⁺", ["Cu²⁺ + Fe", "Cu + Fe²⁺", "Cu²⁺ + Fe³⁺"], 0),
      S(1, "Balancing (electrons balanced)", "3Cu²⁺ + 2Fe → 3Cu + 2Fe³⁺", ["Cu²⁺ + Fe → Cu + Fe³⁺", "2Cu²⁺ + 3Fe → 2Cu + 3Fe³⁺", "3Cu²⁺ + 3Fe → 3Cu + 3Fe³⁺"], 1)]),
  Q("8.2.2", "Calculate the cell potential of this cell under standard conditions.", 4, "electrochemistry", "Application",
    "E°cell = E°cathode − E°anode = 0,34 − (−0,06) = +0,40 V.", [
      S(1, "Formula", "E°cell = E°reduction − E°oxidation", ["E°cell = E°oxidation − E°reduction", "E°cell = E°reduction + E°oxidation", "E°cell = E°reduction × E°oxidation"], 2),
      S(1, "Reduction half-reaction (cathode) value", "E°(Cu²⁺/Cu) = +0,34 V", ["E°(Cu²⁺/Cu) = −0,34 V", "E°(Cu²⁺/Cu) = +0,80 V", "E°(Cu²⁺/Cu) = +0,16 V"], 3),
      S(1, "Oxidation half-reaction (anode) value", "E°(Fe³⁺/Fe) = −0,06 V", ["E°(Fe³⁺/Fe) = +0,06 V", "E°(Fe²⁺/Fe) = −0,44 V", "E°(Fe³⁺/Fe²⁺) = +0,77 V"], 0),
      S(1, "Final answer", "+0,40 V", ["+0,28 V", "−0,40 V", "+1,20 V (multiplied by electron numbers)"], 1)]),

  // ============ QUESTION 9: ELECTROLYTIC CELL (8) ============
  Q("9.1", "An electrolytic cell is used to obtain pure copper from impure copper. Define an electrolytic cell.", 2, "electrochemistry", "Recall",
    "A cell in which electrical energy is converted to chemical energy.", [
      S(2, "Definition", "A cell in which electrical energy is converted to chemical energy", ["A cell in which chemical energy is converted to electrical energy", "A cell in which a spontaneous redox reaction produces a current", "A cell in which heat energy is converted to chemical energy"], 3)], "9-copper-refining-cell.png"),
  Q("9.2", "Write down the FORMULA of a suitable electrolyte for this cell.", 1, "electrochemistry", "Application",
    "Any soluble copper(II) salt, e.g. CuSO4, Cu(NO3)2 or CuCl2.", [
      S(1, "Electrolyte", "CuSO4", ["CuCO3", "Cu(OH)2", "CuS"], 0)], "9-copper-refining-cell.png"),
  Q("9.3", "The cell potential of the power source is adjusted so that only copper is deposited on electrode B. Which electrode (A or B) is the cathode? Write down the relevant half-reaction at this electrode.", 3, "electrochemistry", "Application",
    "B; Cu²⁺ + 2e⁻ → Cu.", [
      S(1, "Cathode", "B (copper is deposited there)", ["A", "Both A and B", "Neither: the electrolyte is the cathode"], 1),
      S(1, "Species", "Cu²⁺ → Cu", ["Cu → Cu²⁺", "Cu²⁺ → Cu⁺", "Cu → Cu⁺"], 2),
      S(1, "Electrons and direction", "Reduction: Cu²⁺ + 2e⁻ → Cu (2 electrons on the reactant side)", ["Cu → Cu²⁺ + 2e⁻", "Cu²⁺ → Cu + 2e⁻", "Cu²⁺ + e⁻ → Cu"], 0)], "9-copper-refining-cell.png"),
  Q("9.4", "Sludge forms below one of the electrodes while the cell is in operation. Which of the metals, PLATINUM, IRON, COBALT, SILVER or NICKEL, will be present in the sludge?", 2, "electrochemistry", "Evaluation",
    "Platinum and silver (weaker reducing agents than Cu, not oxidised at this potential).", [
      S(2, "Metals in the sludge", "Platinum and silver", ["Iron, cobalt and nickel", "Platinum only", "Silver and nickel"], 2)], "9-copper-refining-cell.png"),

  // ============ QUESTION 10: CHEMICAL INDUSTRY (12) ============
  Q("10.1.1", "In the flow diagram, I and II are industrial processes in the fertiliser industry (N2 + H2 →(I) NH3 →(II) HNO3). Write down the name of process I.", 1, "chemical-industry", "Recall",
    "Haber process.", [S(1, "Process I", "Haber process", ["Ostwald process", "Contact process", "Cracking"], 3)], "10-fertiliser-flow.png"),
  Q("10.1.2", "Write down the name of process II.", 1, "chemical-industry", "Recall",
    "Ostwald process.", [S(1, "Process II", "Ostwald process", ["Haber process", "Contact process", "Fractional distillation"], 0)], "10-fertiliser-flow.png"),
  Q("10.2.1", "Write down the NAME or FORMULA of fertiliser Y (NH3 + HNO3).", 1, "chemical-industry", "Application",
    "Ammonium nitrate, NH4NO3.", [S(1, "Fertiliser Y", "Ammonium nitrate, NH4NO3", ["Ammonium sulphate, (NH4)2SO4", "Potassium nitrate, KNO3", "Urea, CO(NH2)2"], 1)], "10-fertiliser-flow.png"),
  Q("10.2.2", "Write down the NAME or FORMULA of the catalyst used in process I.", 1, "chemical-industry", "Recall",
    "Iron (Fe) / iron oxide.", [S(1, "Catalyst", "Iron (Fe)", ["Vanadium(V) oxide (V2O5)", "Platinum", "Concentrated H2SO4"], 2)], "10-fertiliser-flow.png"),
  Q("10.3", "In reaction P, NH3(g) reacts with another substance to produce ammonium sulphate. Write down a balanced equation for this reaction.", 3, "chemical-industry", "Application",
    "2NH3 + H2SO4 → (NH4)2SO4.", [
      S(1, "Reactants", "NH3 + H2SO4", ["NH3 + HNO3", "NH3 + SO2", "NH3 + Na2SO4"], 3),
      S(1, "Product", "(NH4)2SO4", ["NH4SO4", "NH4NO3", "(NH4)2SO3"], 0),
      S(1, "Balancing", "2NH3 + H2SO4 → (NH4)2SO4", ["NH3 + H2SO4 → (NH4)2SO4", "3NH3 + H2SO4 → (NH4)2SO4", "NH3 + 2H2SO4 → (NH4)2SO4"], 1)], "10-fertiliser-flow.png"),
  Q("10.4", "A bag of fertiliser contains 20 kg ammonium nitrate (NH4NO3), 12 kg sodium phosphate (Na3PO4) and 18 kg potassium chloride (KCl). Calculate the NPK ratio of the fertiliser.", 5, "chemical-industry", "Application",
    "m(N) = 28/80 × 20 = 7 kg; m(P) = 31/164 × 12 = 2,27 kg; m(K) = 39/74,5 × 18 = 9,42 kg; N : P : K = 7 : 2,27 : 9,42 = 3 : 1 : 4.", [
      S(1, "Molar masses", "M(NH4NO3) = 80, M(Na3PO4) = 164, M(KCl) = 74,5 g·mol⁻¹", ["M(NH4NO3) = 62, M(Na3PO4) = 142, M(KCl) = 56 g·mol⁻¹", "M(NH4NO3) = 80, M(Na3PO4) = 119, M(KCl) = 74,5 g·mol⁻¹", "M(NH4NO3) = 94, M(Na3PO4) = 164, M(KCl) = 90 g·mol⁻¹"], 2),
      S(1, "Mass of N", "m(N) = (28/80) × 20 = 7 kg", ["m(N) = (14/80) × 20 = 3,5 kg", "m(N) = (80/28) × 20 = 57 kg", "m(N) = (28/80) × 50 = 17,5 kg"], 3),
      S(1, "Mass of P", "m(P) = (31/164) × 12 = 2,27 kg", ["m(P) = (31/142) × 12 = 2,62 kg", "m(P) = (164/31) × 12 = 63,5 kg", "m(P) = (31/164) × 20 = 3,78 kg"], 0),
      S(1, "Mass of K", "m(K) = (39/74,5) × 18 = 9,42 kg", ["m(K) = (35,5/74,5) × 18 = 8,58 kg", "m(K) = (74,5/39) × 18 = 34,4 kg", "m(K) = (39/56) × 18 = 12,5 kg"], 1),
      S(1, "Ratio N : P : K", "3 : 1 : 4", ["7 : 2 : 9", "1 : 3 : 4", "4 : 1 : 3"], 2)]),
];
