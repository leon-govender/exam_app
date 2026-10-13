// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2015, National
// (English). 150 marks, 3 hours, TEN compulsory questions. All 150 marks included.
// Sources: question paper (scanned, image-only) and memo (scanned, image-only,
// GENERIC filename NOV-P2-MEMO.pdf) both from stanmorephysics.com, read visually.
// The memo cover reads "PHYSICAL SCIENCES: CHEMISTRY (P2) ... NOVEMBER 2015
// MEMORANDUM", 150 marks, and its answers match the question paper's own values
// (Kc from [X3]=0,226 / [X2]=0,06, 25 cm3 NaOH titre of 14,55 cm3, 1,76 V and 0,13 V
// cells, 2,85 x 10^-2 mol Cu, 50 kg NH4NO3, per-question totals 20/16/10/16/15/15/18/16/12/12).
//
// Grading: every item is a stepped MCQ (steps), one step per memo mark-earning
// point; no marking_points were needed. Open-ended define/explain/sketch items
// were converted to "choose the correct statement/description" steps.
//
// Images: cropped from 220dpi page renders into public/question-images/chemistry-2015-p2/.
// Not imaged: the Table of Standard Reduction Potentials (data sheet, referenced
// by 8.2.2/8.4/9.4; the values used are stated in the question text).
//
// FLAG (topic mapping): 1.1 (contact process), 10.x (Haber process, fertiliser %)
// use the new chemical-industry topic. 1.7 (empirical formula) mapped to
// stoichiometry. 6.6 (Maxwell-Boltzmann curve) mapped to rate-of-reaction.
//
// FLAG (memo notes):
// - 4.4: memo accepts a list "London/dispersion/induced dipole/dipole-dipole forces"
//   (or "A and B do not have hydrogen bonding"); transcribed as such.
// - 5.1: memo accepts one mark per TYPE of apparatus (stopwatch + any of gas syringe,
//   burette, measuring cylinder, balance, flasks); transcribed faithfully.
// - 5.5.1: memo final answer is a range 0,33 - 0,48 g (working gives 0,325 g reacted and
//   0,475 g / 0,48 g left); 0,48 g used.
// - 7.2.2: memo final answer range 0,11 - 0,21 g; 0,21 g used.
// - 6.2, 8.2.2, 9.4, 9.5: the memo shows ticks but not an explicit split of marks
//   for some steps; marks were allocated per the visible ticks/marking criteria
//   (6.2: expression 1 + substitution 2 + answer 1; 8.2.2: formula 1 + substitution 2 +
//   E cathode 1 + identify Ni 1; 9.4 and 9.5 inferred likewise).
// - 9.5: memo answer 90,49% (accept 90,5%).
// - 2.3.2: memo accepts substitution / halogenation / bromination.

import type { MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2015-p2";

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
  year: 2015,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2018/05/NOV-2015-PHY-P2-QP-ONLY.pdf" as string | null,
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

// Deterministically rotate options so the correct answer is not always first.
// Letter-labelled options (A: ..., or bare A/B/C/D) keep their printed order.
let stepCounter = 0;
const s = (marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep => {
  const labelled = /^[A-D](:|$)/.test(options[0]);
  const r = labelled ? 0 : (stepCounter++ * 3 + 1) % options.length;
  const rotated = options.map((_, i) => options[(i - r + options.length) % options.length]);
  return { marks, description, options: rotated, correctIndex: (correctIndex + r) % options.length };
};

const q = (
  sub: string, text: string, marks: number, topicKey: string, level: string,
  model_answer: string, steps: MarkingPointStep[], image?: string, notes = "Per DBE memo.",
): QuestionSeed => ({
  number: sub.split(".")[0], sub_number: sub, text, marks, topicKey, cognitiveLevelName: level,
  model_answer, marking_notes: notes, steps, ...(image ? { image_url: `${IMG}/${image}.png` } : {}),
});

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE CHOICE (20) ============
  q("1.1", "Which ONE of the following pairs of reactants is used in a reaction during the contact process?", 2, "chemical-industry", "Recall",
    "B: SO2(g) and O2(g). The contact process oxidises SO2 to SO3.",
    [s(2, "Pair of reactants in the contact process", ["A: N2(g) and H2(g)", "B: SO2(g) and O2(g)", "C: NH3(g) and O2(g)", "D: H2SO4(l) and NH3(g)"], 1)]),
  q("1.2", "The rate of a chemical reaction is most correctly defined as the ...", 2, "rate-of-reaction", "Recall",
    "D: change in the concentration of reactants or products per unit time.",
    [s(2, "Definition of reaction rate", ["A: time taken for a reaction to occur.", "B: speed at which a reaction takes place.", "C: change in the amount of reactants or products.", "D: change in the concentration of reactants or products per unit time."], 3)]),
  q("1.3", "Consider H3PO4(aq) + H2O(l) ⇌ H3O+(aq) + H2PO4-(aq). Which ONE of the following is a conjugate acid-base pair?", 2, "acids-and-bases", "Comprehension",
    "A: H3O+(aq) and H2O(l). H3O+ is the conjugate acid of the base H2O (they differ by one proton).",
    [s(2, "Conjugate acid-base pair", ["A: H3O+(aq) and H2O(l)", "B: H3PO4(aq) and H2O(l)", "C: H3PO4(aq) and H3O+(aq)", "D: H3O+(aq) and H2PO4-(aq)"], 0)]),
  q("1.4", "Which ONE of the following compounds has dipole-dipole forces between its molecules?", 2, "intermolecular-forces", "Comprehension",
    "A: Ethanal. It is a polar aldehyde; ethane, ethene and ethyne are non-polar.",
    [s(2, "Compound with dipole-dipole forces", ["A: Ethanal", "B: Ethane", "C: Ethene", "D: Ethyne"], 0)]),
  q("1.5", "The energy changes P, Q and R on the potential energy graph take place during a reversible reaction (P = activation energy forward, Q = ΔH, R = activation energy reverse). Which ONE of the following changes will decrease both P and R, but leave Q unchanged?", 2, "rate-of-reaction", "Application",
    "B: The addition of a catalyst lowers both activation energies but does not change ΔH.",
    [s(2, "Change that lowers P and R only", ["A: A decrease in volume", "B: The addition of a catalyst", "C: A decrease in temperature", "D: A decrease in concentration"], 1)], "1.5-potential-energy-graph"),
  q("1.6", "Which ONE of the following is a product formed during the hydrolysis of bromoethane?", 2, "organic-chemistry", "Comprehension",
    "C: Ethanol. Hydrolysis (substitution of Br by OH) of bromoethane gives ethanol and HBr.",
    [s(2, "Product of hydrolysis of bromoethane", ["A: Water", "B: Ethene", "C: Ethanol", "D: Bromine"], 2)]),
  q("1.7", "Which ONE of the following is the EMPIRICAL FORMULA of 1,2-dichloroethane (C2H4Cl2)?", 2, "stoichiometry", "Application",
    "B: CH2Cl. Divide C2H4Cl2 by 2.",
    [s(2, "Empirical formula", ["A: CHCl", "B: CH2Cl", "C: CHCl2", "D: C2H4Cl2"], 1)]),
  q("1.8", "The reaction Cl2(g) + H2O(l) ⇌ Cl-(aq) + ClO-(aq) + 2H+(aq) reaches equilibrium in a closed container. Which ONE of the following reagents will favour the forward reaction when added?", 2, "chemical-equilibrium", "Application",
    "D: Sodium hydroxide. OH- removes H+ (neutralisation), so the equilibrium shifts forward.",
    [s(2, "Reagent favouring forward reaction", ["A: Hydrogen", "B: Sodium chloride", "C: Hydrogen chloride", "D: Sodium hydroxide"], 3)]),
  q("1.9", "The half-reactions Co3+ + e- ⇌ Co2+ and Al3+ + 3e- ⇌ Al take place in a galvanic cell. Which ONE of the following is the cell notation for this cell?", 2, "electrochemistry", "Application",
    "B: Al | Al3+ || Co3+, Co2+ | Pt. Al (lower E°) is the anode written on the left; Co3+/Co2+ needs a Pt inert electrode on the right.",
    [s(2, "Cell notation", ["A: Al | Al3+ || Co3+, Co2+", "B: Al | Al3+ || Co3+, Co2+ | Pt", "C: Al | Al3+ || Co2+, Co3+ | Pt", "D: Pt | Co2+, Co3+ || Al3+ | Al"], 1)]),
  q("1.10", "Chlorine gas (Cl2) is bubbled through a potassium iodide solution (KI). The reducing agent in this reaction is:", 2, "electrochemistry", "Application",
    "C: Iodide ions. I- is oxidised to I2 (loses electrons), so it is the reducing agent.",
    [s(2, "Reducing agent", ["A: Potassium ions", "B: Chlorine gas", "C: Iodide ions", "D: Chloride ions"], 2)]),

  // ============ QUESTION 2: ORGANIC (16) ============
  q("2.1.1", "Compound table: A = an alkyne drawn in full (hept-2-yne skeleton with methyl and ethyl branches); B = H3C-CH2-C(=O)-CH3 drawn in full; C = CH3CH2CHO; D = butane. Write down the LETTER that represents a ketone.", 1, "organic-chemistry", "Comprehension",
    "B. It has a C=O group between two carbon atoms.",
    [s(1, "Letter of the ketone", ["A", "B", "C", "D"], 1)], "2-compounds-table"),
  q("2.1.2", "Write down the structural formula of the functional group of compound C (CH3CH2CHO).", 1, "organic-chemistry", "Recall",
    "-C(=O)-H (formyl group of an aldehyde).",
    [s(1, "Functional group of C", ["-C(=O)-H (formyl)", "-C(=O)- (carbonyl between two carbons)", "-O-H (hydroxyl)", "-C(=O)-O-H (carboxyl)"], 0)], "2-compounds-table"),
  q("2.1.3", "Write down the general formula of the homologous series to which compound A belongs.", 1, "organic-chemistry", "Recall",
    "CnH2n-2 (alkynes).",
    [s(1, "General formula of the alkynes", ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1OH"], 2)], "2-compounds-table"),
  q("2.1.4", "Write down the IUPAC name of compound A.", 3, "organic-chemistry", "Application",
    "4-ethyl-5-methylhept-2-yne (memo: any hyphen error ignored; max 2/3 if sequence incorrect).",
    [s(1, "Parent chain and triple bond position", ["hept-2-yne", "hept-5-yne", "oct-2-yne", "hex-2-yne"], 0),
     s(1, "Ethyl substituent position", ["4-ethyl", "3-ethyl", "5-ethyl", "2-ethyl"], 0),
     s(1, "Methyl substituent position", ["5-methyl", "4-methyl", "6-methyl", "2-methyl"], 0)], "2-compounds-table"),
  q("2.1.5", "Write down the IUPAC name of compound B (H3C-CH2-C(=O)-CH3).", 2, "organic-chemistry", "Application",
    "Butan-2-one (butanone).",
    [s(1, "Correct functional group (ketone)", ["Ketone: -one", "Aldehyde: -al", "Alcohol: -ol", "Carboxylic acid: -oic acid"], 0),
     s(1, "Whole name correct", ["Butan-2-one", "Butan-1-one", "Propan-2-one", "Butanal"], 0)], "2-compounds-table"),
  q("2.2.1", "Compound D (butane) is a gas used in cigarette lighters. To which homologous series does D belong?", 1, "organic-chemistry", "Recall",
    "Alkanes.",
    [s(1, "Homologous series of butane", ["Alkenes", "Alkynes", "Alkanes", "Alcohols"], 2)]),
  q("2.2.2", "Write down the STRUCTURAL FORMULA and IUPAC NAME of a structural isomer of compound D (butane).", 4, "organic-chemistry", "Application",
    "2-methylpropane (methylpropane): three carbons in the longest chain with a methyl group on the second carbon.",
    [s(2, "IUPAC name of the isomer", ["2-methylpropane", "2-methylbutane", "2,2-dimethylpropane", "propane"], 0),
     s(2, "Structural formula (3 C in longest chain, methyl on C2)", ["CH3-CH(CH3)-CH3 drawn in full (three carbons, methyl on the second)", "CH3-CH2-CH2-CH3 drawn in full (four carbons in a chain)", "CH3-C(CH3)2-CH3 drawn in full (two methyl groups on the second carbon)", "CH3-CH(CH3)-CH2-CH3 drawn in full (four carbons in longest chain)"], 0)]),
  q("2.2.3", "Is the isomer in QUESTION 2.2.2 a CHAIN, POSITIONAL or FUNCTIONAL isomer?", 1, "organic-chemistry", "Comprehension",
    "Chain isomer.",
    [s(1, "Type of isomerism", ["Chain", "Positional", "Functional", "Geometric"], 0)]),
  q("2.3.1", "Compound D reacts with bromine (Br2) to form 2-bromobutane. Write down the name of the homologous series to which 2-bromobutane belongs.", 1, "organic-chemistry", "Recall",
    "Haloalkanes / alkyl halides.",
    [s(1, "Homologous series of 2-bromobutane", ["Haloalkanes (alkyl halides)", "Alkanes", "Alcohols", "Alkenes"], 0)]),
  q("2.3.2", "Write down the name of the type of reaction in which butane reacts with bromine to form 2-bromobutane.", 1, "organic-chemistry", "Comprehension",
    "Substitution (halogenation / bromination).",
    [s(1, "Type of reaction", ["Substitution (bromination)", "Addition", "Elimination", "Hydrolysis"], 0)]),

  // ============ QUESTION 3 (10) ============
  q("3.1.1", "Flow diagram: Alcohol + P --Reaction 1--> ethyl propanoate; Alcohol --Reaction 2--> Alkene. Write down the type of reaction of which Reaction 1 is an example.", 1, "organic-chemistry", "Comprehension",
    "Esterification / condensation.",
    [s(1, "Type of reaction 1", ["Esterification (condensation)", "Addition", "Hydrolysis", "Cracking"], 0)], "3.1-flow-diagram"),
  q("3.1.2", "Write down the STRUCTURAL FORMULA of the functional group of ethyl propanoate.", 1, "organic-chemistry", "Recall",
    "-C(=O)-O- (ester group).",
    [s(1, "Ester functional group", ["-C(=O)-O-", "-C(=O)-", "-C(=O)-O-H", "-O-"], 0)]),
  q("3.1.3", "Write down the IUPAC name of compound P.", 1, "organic-chemistry", "Application",
    "Propanoic acid (ethyl propanoate = ethanol + propanoic acid).",
    [s(1, "Compound P", ["Propanoic acid", "Ethanoic acid", "Propan-1-ol", "Propanal"], 0)]),
  q("3.1.4", "Reaction 2 takes place in the presence of an acid catalyst and heat (alcohol to alkene). Write down the type of reaction.", 1, "organic-chemistry", "Comprehension",
    "Dehydration / elimination.",
    [s(1, "Type of reaction 2", ["Dehydration (elimination)", "Hydration (addition)", "Substitution", "Esterification"], 0)]),
  q("3.1.5", "Write down the NAME or FORMULA of the acid catalyst in Reaction 2.", 1, "organic-chemistry", "Recall",
    "(Concentrated) H2SO4 / sulphuric acid / H3PO4 / phosphoric acid.",
    [s(1, "Acid catalyst", ["Concentrated H2SO4 (sulphuric acid)", "Concentrated NaOH", "Solid NaCl", "Dilute HCl in excess water only"], 0)],
    undefined, "Memo accepts conc. H2SO4 or H3PO4. Only H2SO4 is offered as an option."),
  q("3.1.6", "Write down the STRUCTURAL FORMULA of the alkene formed in Reaction 2 (from ethanol).", 2, "organic-chemistry", "Application",
    "Ethene: H2C=CH2 drawn in full (functional group C=C, whole structure correct).",
    [s(1, "Functional group C=C present", ["Double bond C=C", "Triple bond C≡C", "Single bond only, C-C", "C=O double bond"], 0),
     s(1, "Whole structure correct", ["CH2=CH2 with 4 H atoms drawn in full (ethene)", "CH3-CH=CH2 (propene)", "CH3-CH3 (ethane)", "CH≡CH (ethyne)"], 0)]),
  q("3.2.1", "The condensed formula of a polymer is [-CH2-CH2-]n (drawn with H atoms). Write down the STRUCTURAL FORMULA of the monomer used to prepare it.", 2, "organic-chemistry", "Application",
    "Ethene: H2C=CH2 drawn in full (functional group correct, whole structure correct).",
    [s(1, "Functional group of the monomer", ["C=C double bond", "C≡C triple bond", "C-C single bond", "C=O double bond"], 0),
     s(1, "Whole structure correct", ["CH2=CH2 (ethene)", "CH3-CH=CH2 (propene)", "CH3-CH3 (ethane)", "CH2=CHCl (chloroethene)"], 0)], "3.2-polymer"),
  q("3.2.2", "Write down the type of polymerisation reaction (ADDITION or CONDENSATION) used to prepare this polymer.", 1, "organic-chemistry", "Comprehension",
    "Addition.",
    [s(1, "Polymerisation type", ["Addition", "Condensation", "Substitution", "Esterification"], 0)]),

  // ============ QUESTION 4 (16) ============
  q("4.1", "Define the term functional group of an organic compound.", 2, "organic-chemistry", "Recall",
    "A bond/an atom or a group of atoms that determine(s) the (physical and chemical) properties of a group of organic compounds.",
    [s(2, "Definition of functional group", [
      "A bond or an atom or a group of atoms that determine(s) the (physical and chemical) properties of a group of organic compounds.",
      "The longest continuous carbon chain in an organic molecule.",
      "A group of organic compounds with the same general formula that differ by a CH2 unit.",
      "The atoms bonded to the carbon atom that carries the highest number of hydrogen atoms."], 0)]),
  q("4.2.1", "Compounds of comparable molecular mass: A butane 204 kPa, B propan-2-one 24,6 kPa, C propan-1-ol 2 kPa, D ethanoic acid 1,6 kPa (vapour pressure at 20 °C). Which ONE has the HIGHEST boiling point? (Refer to the vapour pressures to give a reason.)", 2, "intermolecular-forces", "Comprehension",
    "D / ethanoic acid. It has the lowest vapour pressure.",
    [s(1, "Compound with highest boiling point", ["D: ethanoic acid", "A: butane", "B: propan-2-one", "C: propan-1-ol"], 0),
     s(1, "Reason", ["It has the lowest vapour pressure.", "It has the highest vapour pressure.", "It has the smallest molecular mass.", "It has the weakest intermolecular forces."], 0)], "4-vapour-pressure-table"),
  q("4.2.2", "Which ONE of the compounds (A, B, C or D) has the weakest intermolecular forces?", 1, "intermolecular-forces", "Comprehension",
    "A / butane (highest vapour pressure).",
    [s(1, "Compound with weakest forces", ["A: butane", "B: propan-2-one", "C: propan-1-ol", "D: ethanoic acid"], 0)], "4-vapour-pressure-table"),
  q("4.3", "Refer to the type of intermolecular forces to explain the difference between the vapour pressure of compound A (butane) and compound B (propan-2-one).", 3, "intermolecular-forces", "Evaluation",
    "Between molecules of A are London (dispersion) forces. Between molecules of B are dipole-dipole forces in addition to London forces. Intermolecular forces in A are weaker than those in B, so less energy is needed to overcome them in A, so A has the higher vapour pressure.",
    [s(1, "Forces between molecules of A (butane)", ["London (dispersion) forces only", "Hydrogen bonds", "Dipole-dipole forces only", "Ionic bonds"], 0),
     s(1, "Forces between molecules of B (propan-2-one)", ["Dipole-dipole forces in addition to London forces", "Hydrogen bonds in addition to London forces", "London forces only", "Ion-dipole forces"], 0),
     s(1, "Comparison of energy needed", ["Forces in A are weaker, so less energy is needed to overcome them", "Forces in A are stronger, so more energy is needed to overcome them", "Forces in A and B are equal, so the same energy is needed", "Bonds inside the molecules of A are weaker, so less energy is needed to break them"], 0)]),
  q("4.4", "The vapour pressures of C and D are much lower than those of A and B. Name the type of intermolecular force in A and B that is responsible for this difference.", 1, "intermolecular-forces", "Comprehension",
    "London / dispersion / induced dipole / dipole-dipole forces (A and B do not have hydrogen bonding).",
    [s(1, "Type of force in A and B", ["London (dispersion) and/or dipole-dipole forces: no hydrogen bonding", "Hydrogen bonding", "Ionic bonding", "Metallic bonding"], 0)],
    undefined, "FLAG: memo lists several accepted answers (London / dispersion / induced dipole / dipole-dipole) or 'A and B do not have hydrogen bonding'."),
  q("4.5", "Briefly explain the difference in vapour pressure between compound C (propan-1-ol, 2 kPa) and compound D (ethanoic acid, 1,6 kPa).", 2, "intermolecular-forces", "Evaluation",
    "D has more sites for hydrogen bonding than C / forms dimers / is more polar, so D has stronger intermolecular forces and needs more energy to overcome them.",
    [s(1, "Reason for lower vapour pressure of D", ["D has more sites for hydrogen bonding than C (forms dimers)", "D has fewer sites for hydrogen bonding than C", "D has a smaller molecular mass than C", "D has only London forces"], 0),
     s(1, "Consequence for the intermolecular forces", ["D has stronger intermolecular forces, so more energy is needed to overcome them", "D has weaker intermolecular forces, so less energy is needed to overcome them", "D has stronger covalent bonds inside its molecules", "D has the same forces as C but a larger volume"], 0)]),
  q("4.6", "8 cm3 of butane reacts in excess oxygen: 2C4H10(g) + 13O2(g) → 8CO2(g) + 10H2O(g). The initial volume of oxygen was 60 cm3. Calculate the TOTAL volume of gases in the container at the end of the reaction (same temperature and pressure).", 5, "stoichiometry", "Application",
    "V(CO2) = 4 x 8 = 32 cm3; V(H2O) = 5 x 8 = 40 cm3; O2 reacted = 13/2 x 8 = 52 cm3, O2 left = 60 - 52 = 8 cm3; total = 32 + 40 + 8 = 80 cm3.",
    [s(1, "Volume of CO2 formed", ["32 cm3 (mole ratio 2 : 8)", "16 cm3 (ratio 1 : 2)", "8 cm3", "64 cm3"], 0),
     s(1, "Volume of H2O formed", ["40 cm3 (mole ratio 2 : 10)", "80 cm3", "16 cm3", "10 cm3"], 0),
     s(1, "Volume of O2 reacted", ["52 cm3 (mole ratio 2 : 13)", "104 cm3", "60 cm3", "26 cm3"], 0),
     s(1, "Volume of O2 left over", ["8 cm3 (60 - 52)", "52 cm3", "60 cm3", "0 cm3"], 0),
     s(1, "Total volume at the end", ["80 cm3 (32 + 40 + 8)", "72 cm3 (32 + 40, O2 ignored)", "140 cm3 (60 + 80)", "88 cm3 (8 + 80)"], 0)]),

  // ============ QUESTION 5 (15) ============
  q("5.1", "Excess zinc reacts with dilute acids to produce hydrogen gas in three experiments (see table). Name TWO essential apparatuses needed to determine the rate of hydrogen production.", 2, "rate-of-reaction", "Recall",
    "A stopwatch (time) and a gas syringe (or burette / measuring cylinder / balance / flask; one mark per type of apparatus).",
    [s(1, "Apparatus for time", ["Stopwatch", "Thermometer", "pH meter", "Voltmeter"], 0),
     s(1, "Apparatus for volume of gas", ["Gas syringe", "Thermometer", "Bunsen burner", "Filter funnel"], 0)],
    "5-experiments-table", "FLAG: memo accepts gas syringe, burette, measuring cylinder, (chemical) balance, Erlenmeyer or graduated flask; one mark per type of apparatus."),
  q("5.2.1", "From the Experiment 1 graph (volume of H2 against time, with t1, t2, t3 marked), at which time is the reaction rate the highest?", 1, "rate-of-reaction", "Comprehension",
    "t1 (steepest gradient).",
    [s(1, "Time of highest rate", ["t1", "t2", "t3", "Equal at all three times"], 0)], "5-experiment1-graph"),
  q("5.2.2", "At which time (t1, t2 or t3) is the mass of zinc present in the flask the smallest?", 1, "rate-of-reaction", "Comprehension",
    "t3 (most zinc has reacted).",
    [s(1, "Time of smallest mass of zinc", ["t3", "t1", "t2", "It is the same at all three times"], 0)], "5-experiment1-graph"),
  q("5.3", "In which time interval, between t1 and t2 OR between t2 and t3, does the largest volume of hydrogen gas form per second?", 1, "rate-of-reaction", "Comprehension",
    "Between t1 and t2 (steeper curve).",
    [s(1, "Interval of largest rate", ["Between t1 and t2", "Between t2 and t3", "Equal in both", "After t3"], 0)], "5-experiment1-graph"),
  q("5.4", "Redraw the graph for Experiment 1. On the same axes, sketch the graphs for Experiments 2 (50 cm3 of 0,2 mol·dm-3 H2SO4) and 3 (100 cm3 of 0,1 mol·dm-3 HCl) and label them.", 4, "rate-of-reaction", "Evaluation",
    "Exp 2: initial gradient higher, same final volume as Exp 1 (reached earlier). Exp 3: initial gradient lower, smaller final volume (reached at a later stage).",
    [s(1, "Experiment 2: initial gradient", ["Higher than Experiment 1", "Lower than Experiment 1", "The same as Experiment 1", "Zero"], 0),
     s(1, "Experiment 2: final volume", ["Same constant volume as Experiment 1 (reached earlier)", "Larger constant volume than Experiment 1", "Smaller constant volume than Experiment 1", "Half of Experiment 1, reached later"], 0),
     s(1, "Experiment 3: initial gradient", ["Lower than Experiment 1", "Higher than Experiment 1", "The same as Experiment 1", "Zero"], 0),
     s(1, "Experiment 3: final volume", ["Smaller constant volume than Experiment 1 (reached at a later stage)", "Same constant volume as Experiment 1", "Larger constant volume than Experiment 1", "Same constant volume, reached earlier"], 0)],
    "5-experiment1-graph"),
  q("5.5.1", "The initial mass of zinc used in each experiment is 0,8 g. For Experiment 3: Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g), with 100 cm3 of 0,1 mol·dm-3 HCl. Calculate the mass of zinc present in the flask after completion of the reaction.", 5, "stoichiometry", "Application",
    "n(HCl) = cV = (0,1)(0,1) = 0,01 mol; n(Zn reacted) = 1/2 n(HCl) = 5 x 10^-3 mol; m(Zn reacted) = nM = (5 x 10^-3)(65) = 0,325 g; m(Zn left) = 0,8 - 0,325 = 0,48 g (0,475 g).",
    [s(1, "n(HCl)", ["0,01 mol", "0,1 mol", "0,001 mol", "0,02 mol"], 0),
     s(1, "n(Zn) reacted (mole ratio 1 : 2)", ["5 x 10^-3 mol", "0,02 mol", "0,01 mol", "2 x 10^-3 mol"], 0),
     s(1, "m(Zn) reacted", ["0,325 g", "0,65 g", "0,5 g", "0,13 g"], 0),
     s(1, "Subtraction from initial mass", ["0,8 - 0,325", "0,8 + 0,325", "0,325 - 0,8", "0,8 - 0,65"], 0),
     s(1, "Final mass of Zn remaining", ["0,48 g (0,475 g)", "1,13 g", "0,15 g", "0,325 g"], 0)],
    undefined, "Memo accepts range 0,33 - 0,48 g."),
  q("5.5.2", "How will the mass of zinc present in the flask after completion of Experiment 2 compare to the answer to 5.5.1? (LARGER THAN, SMALLER THAN or EQUAL TO)", 1, "stoichiometry", "Evaluation",
    "Smaller than (Experiment 2 has 0,02 mol H+, double the acid of Experiment 3, so more zinc reacts).",
    [s(1, "Comparison", ["Smaller than", "Larger than", "Equal to", "Cannot be determined"], 0)]),

  // ============ QUESTION 6 (15) ============
  q("6.1", "3X2(g) ⇌ 2X3(g) at 300 °C. How will the rate of formation of X3(g) compare to the rate of formation of X2(g) at equilibrium? (HIGHER THAN, LOWER THAN or EQUAL TO)", 1, "chemical-equilibrium", "Comprehension",
    "Equal to (forward and reverse rates are equal at equilibrium).",
    [s(1, "Comparison", ["Equal to", "Higher than", "Lower than", "Cannot be compared"], 0)]),
  q("6.2", "Using the table (equilibrium from t = 6 s onwards: [X2] = 0,06 and [X3] = 0,226 mol·dm-3), calculate Kc for 3X2(g) ⇌ 2X3(g) at 300 °C.", 4, "chemical-equilibrium", "Application",
    "Kc = [X3]^2/[X2]^3 = (0,226)^2/(0,06)^3 = 236,46.",
    [s(1, "Kc expression", ["Kc = [X3]^2 / [X2]^3", "Kc = [X2]^3 / [X3]^2", "Kc = [X3] / [X2]", "Kc = 2[X3] / 3[X2]"], 0),
     s(1, "Substitution of [X3]", ["(0,226)^2 in the numerator", "(0,226) x 2 in the numerator", "(0,213)^2 in the numerator", "(0,12)^2 in the numerator"], 0),
     s(1, "Substitution of [X2]", ["(0,06)^3 in the denominator", "(0,06) x 3 in the denominator", "(0,08)^3 in the denominator", "(0,4)^3 in the denominator"], 0),
     s(1, "Kc", ["236,46", "4,23 x 10^-3", "3,77", "0,0423"], 0)],
    "6-results-table", "FLAG: mark split (1 + 2 + 1) inferred from the memo's marking notes."),
  q("6.3.1", "More X3(g) is now added to the container. How will this change affect the amount of X2(g)? (INCREASES, DECREASES or REMAINS THE SAME)", 1, "chemical-equilibrium", "Application",
    "Increases.",
    [s(1, "Effect on X2", ["Increases", "Decreases", "Remains the same", "Becomes zero"], 0)]),
  q("6.3.2", "Use Le Chatelier's principle to explain the answer to 6.3.1.", 2, "chemical-equilibrium", "Evaluation",
    "The increase in [X3] is opposed. The reverse reaction is favoured / X3 is used up and [X3] decreases.",
    [s(1, "Statement of the principle", ["The change (increase in [X3]) is opposed", "The change (increase in [X3]) is reinforced", "The equilibrium constant increases", "The temperature of the system rises"], 0),
     s(1, "Direction", ["The reverse reaction is favoured: X3 is used up and X2 forms", "The forward reaction is favoured: X3 is used up", "The forward reaction is favoured: more X3 forms", "Neither reaction is favoured"], 0)]),
  q("6.4", "From the concentration against time curves, how does the rate of the forward reaction compare to that of the reverse reaction at t1 (where the curves cross, before equilibrium)? (HIGHER THAN, LOWER THAN or EQUAL TO)", 1, "chemical-equilibrium", "Comprehension",
    "Higher than (equilibrium has not yet been reached).",
    [s(1, "Comparison", ["Higher than", "Lower than", "Equal to", "Zero"], 0)], "6.4-concentration-curves"),
  q("6.5", "The reaction is repeated at 400 °C (dotted curves): at equilibrium [X3] is lower and [X2] is higher than at 300 °C. Is the forward reaction EXOTHERMIC or ENDOTHERMIC? Fully explain how you arrived at the answer.", 4, "chemical-equilibrium", "Evaluation",
    "Exothermic. [X3] (product) is lower and [X2] (reactant) is higher at 400 °C; the increase in temperature favoured the reverse reaction. By Le Chatelier an increase in temperature favours the endothermic reaction, so the reverse is endothermic and the forward is exothermic.",
    [s(1, "Conclusion", ["Exothermic", "Endothermic", "Neither: Kc is unchanged", "Cannot be determined"], 0),
     s(1, "Observation from the graph", ["[X3] is lower and [X2] is higher at 400 °C", "[X3] is higher and [X2] is lower at 400 °C", "Both concentrations are unchanged at 400 °C", "Equilibrium is reached later at 400 °C"], 0),
     s(1, "Effect of temperature increase", ["The increase in temperature favoured the reverse reaction", "The increase in temperature favoured the forward reaction", "The increase in temperature changed only the rate", "The increase in temperature lowered the activation energy"], 0),
     s(1, "Le Chatelier link", ["An increase in temperature favours the endothermic reaction, so the reverse is endothermic", "An increase in temperature favours the exothermic reaction, so the reverse is exothermic", "A decrease in temperature favours the endothermic reaction", "Kc increases when temperature increases"], 0)],
    "6.5-curves-300-400"),
  q("6.6", "The Maxwell-Boltzmann curve (number of particles against kinetic energy) at 300 °C is given. Redraw it and sketch the curve for 400 °C. How does the 400 °C curve compare?", 2, "rate-of-reaction", "Application",
    "The peak of the 400 °C curve is lower and shifted to the right; the 400 °C curve has a larger area at higher kinetic energy.",
    [s(1, "Peak of the 400 °C curve", ["Lower than at 300 °C and shifted to the right", "Higher than at 300 °C and shifted to the right", "Lower than at 300 °C and shifted to the left", "Same height as at 300 °C"], 0),
     s(1, "Area at high kinetic energy", ["The 400 °C curve has a larger area at higher Ek", "The 400 °C curve has a smaller area at higher Ek", "The areas are equal at higher Ek", "The 400 °C curve ends at lower Ek"], 0)],
    "6.6-maxwell-boltzmann"),

  // ============ QUESTION 7 (18) ============
  q("7.1.1", "Ammonium chloride dissolves in water to form NH4+ and Cl- ions. The ammonium ions react with water: NH4+(aq) + H2O(l) ⇌ NH3(aq) + H3O+(aq). Write down the name of the process described by the sentence \"the ammonium ions react with water\".", 1, "acids-and-bases", "Recall",
    "Hydrolysis.",
    [s(1, "Name of the process", ["Hydrolysis", "Neutralisation", "Ionisation", "Dissociation"], 0)]),
  q("7.1.2", "Is ammonium chloride ACIDIC or BASIC in aqueous solution? Give a reason for the answer.", 2, "acids-and-bases", "Comprehension",
    "Acidic. It forms H3O+ ions during hydrolysis (salt of a strong acid and weak base / NH4+ acts as a proton donor).",
    [s(1, "Acidic or basic", ["Acidic", "Basic", "Neutral", "Amphoteric"], 0),
     s(1, "Reason", ["It forms H3O+ ions during hydrolysis (salt of a strong acid and a weak base)", "It forms OH- ions during hydrolysis (salt of a strong base and a weak acid)", "Cl- ions react with water to form HCl", "It is a salt, so it is neutral"], 0)]),
  q("7.2.1", "A fertiliser (92% NH4Cl) of mass x g is dissolved in 100 cm3 of 0,10 mol·dm-3 NaOH (in excess). Calculate the number of moles of sodium hydroxide in which the sample is dissolved.", 3, "acids-and-bases", "Application",
    "n = cV = (0,1)(0,1) = 0,01 mol.",
    [s(1, "Formula", ["n = cV", "n = c/V", "n = m/M", "n = V/Vm"], 0),
     s(1, "Substitution (convert cm3 to dm3)", ["(0,1)(0,1)", "(0,1)(100)", "(0,1)/(0,1)", "(0,10)(0,01)"], 0),
     s(1, "Answer", ["0,01 mol", "10 mol", "1 mol", "0,001 mol"], 0)]),
  q("7.2.2", "25 cm3 of the excess NaOH solution (from the 100 cm3) is titrated with 0,11 mol·dm-3 HCl; 14,55 cm3 of HCl is used (HCl + NaOH → NaCl + H2O). Calculate the mass x (in grams) of the fertiliser sample used. (NH4Cl: M = 53,5 g·mol-1)", 8, "acids-and-bases", "Application",
    "n(HCl) = (0,11)(14,55 x 10^-3) = 1,6 x 10^-3 mol; n(NaOH) in 25 cm3 = 1,6 x 10^-3 mol; in 100 cm3 = 6,4 x 10^-3 mol; reacted = 0,01 - 6,4 x 10^-3 = 3,6 x 10^-3 mol = n(NH4Cl); m = nM = 0,193 g; x = 0,193 x 100/92 = 0,21 g.",
    [s(1, "n(HCl) used in titration", ["1,6 x 10^-3 mol", "0,11 mol", "1,6 mol", "6,4 x 10^-3 mol"], 0),
     s(1, "n(NaOH) in 25 cm3 (mole ratio 1 : 1)", ["1,6 x 10^-3 mol", "3,2 x 10^-3 mol", "0,8 x 10^-3 mol", "0,01 mol"], 0),
     s(1, "n(NaOH) excess in 100 cm3", ["6,4 x 10^-3 mol (x 4)", "1,6 x 10^-3 mol", "0,4 mol", "6,4 x 10^-2 mol"], 0),
     s(1, "n(NaOH) reacted with NH4Cl", ["0,01 - 6,4 x 10^-3 = 3,6 x 10^-3 mol", "0,01 + 6,4 x 10^-3 = 0,0164 mol", "6,4 x 10^-3 mol", "0,01 mol"], 0),
     s(1, "n(NH4Cl) (mole ratio 1 : 1)", ["3,6 x 10^-3 mol", "7,2 x 10^-3 mol", "1,8 x 10^-3 mol", "6,4 x 10^-3 mol"], 0),
     s(1, "m(NH4Cl)", ["0,193 g", "0,34 g", "0,0673 g", "1,93 g"], 0),
     s(1, "Conversion for 92% purity", ["m = 0,193 x 100/92", "m = 0,193 x 92/100", "m = 0,193 x 92", "m = 0,193 + 8"], 0),
     s(1, "Final answer", ["0,21 g", "0,18 g", "0,19 g", "2,1 g"], 0)],
    undefined, "Positive marking from 7.2.1. Memo final answer range 0,11 - 0,21 g."),
  q("7.3", "Calculate the pH of a 0,5 mol·dm-3 sodium hydroxide solution at 25 °C.", 4, "acids-and-bases", "Application",
    "[OH-] = 0,5; [H3O+] = Kw/[OH-] = 1 x 10^-14/0,5 = 2 x 10^-14 mol·dm-3; pH = -log[H3O+] = 13,7.",
    [s(1, "[OH-] of a strong base", ["[OH-] = [NaOH] = 0,5 mol·dm-3", "[OH-] = 2 x 0,5 = 1 mol·dm-3", "[OH-] = 0,25 mol·dm-3", "[OH-] = 1 x 10^-14 mol·dm-3"], 0),
     s(1, "[H3O+] from Kw", ["1 x 10^-14 / 0,5 = 2 x 10^-14 mol·dm-3", "1 x 10^-14 x 0,5 = 5 x 10^-15 mol·dm-3", "0,5 mol·dm-3", "1 x 10^-7 mol·dm-3"], 0),
     s(1, "Formula for pH", ["pH = -log[H3O+]", "pH = -log[OH-]", "pH = log[H3O+]", "pH = 14 + log[H3O+]"], 0),
     s(1, "Answer", ["13,7", "0,3", "14,0", "7,0"], 0)],
    undefined, "Memo option 2 (pOH = 0,301; pH = 14 - 0,301 = 13,7) also accepted. Wrong formula pH = -log[OH-] or pOH = -log[NaOH]: no marks for substitution and answer."),

  // ============ QUESTION 8 (16) ============
  q("8.1", "Learners connect unknown half-cells Q2+(aq)|Q(s) and Pt|R2(g)|R-(aq) alternately to Cd2+(aq)|Cd(s) under standard conditions. Write down THREE conditions needed for these cells to function as standard cells.", 3, "electrochemistry", "Recall",
    "Temperature: 25 °C (298 K); pressure: 101,3 kPa (1,013 x 10^5 Pa); concentration: 1 mol·dm-3.",
    [s(1, "Temperature", ["25 °C (298 K)", "0 °C (273 K)", "100 °C (373 K)", "Any constant temperature"], 0),
     s(1, "Pressure", ["101,3 kPa (1,013 x 10^5 Pa)", "202,6 kPa", "50 kPa", "Any constant pressure"], 0),
     s(1, "Concentration of electrolyte", ["1 mol·dm-3", "0,1 mol·dm-3", "2 mol·dm-3", "Any concentration"], 0)],
    "8-half-cell-table"),
  q("8.2.1", "For Combination I (Q2+ + Cd → Cd2+ + Q; cell potential 0,13 V), identify the anode of the cell.", 1, "electrochemistry", "Comprehension",
    "Cd(s) / cadmium / Cd|Cd2+ (it is oxidised).",
    [s(1, "Anode", ["Cd(s)", "Q(s)", "Pt", "Q2+(aq)"], 0)], "8-half-cell-table"),
  q("8.2.2", "For Combination I, identify Q by using a calculation (E° Cd2+/Cd = -0,40 V, cell potential 0,13 V).", 5, "electrochemistry", "Application",
    "E°cell = E°cathode - E°anode; 0,13 = E°cathode - (-0,40); E°cathode = -0,27 V; Q is nickel (Ni).",
    [s(1, "Formula", ["E°cell = E°cathode - E°anode", "E°cell = E°anode - E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°oxidation - E°reduction"], 0),
     s(1, "Substitution of E°cell", ["0,13 = E°cathode - ...", "1,76 = E°cathode - ...", "-0,13 = E°cathode - ...", "0,13 = E°anode - ..."], 0),
     s(1, "Substitution of E°anode", ["... - (-0,40)", "... - (+0,40)", "... + (-0,40) with E°anode taken as Q", "... - (-0,13)"], 0),
     s(1, "E°cathode", ["-0,27 V", "+0,53 V", "-0,53 V", "+0,27 V"], 0),
     s(1, "Identity of Q", ["Ni (nickel)", "Zn (zinc)", "Pb (lead)", "Fe (iron)"], 0)],
    "8-half-cell-table", "FLAG: mark split inferred from memo ticks; memo allows other correct formulae."),
  q("8.3.1", "For Combination II (R2(g) + Cd(s) → Cd2+(aq) + 2R-(aq); 1,76 V), write down the oxidation half-reaction.", 2, "electrochemistry", "Application",
    "Cd(s) → Cd2+(aq) + 2e-",
    [s(2, "Oxidation half-reaction", ["Cd → Cd2+ + 2e-", "Cd2+ + 2e- → Cd", "R2 + 2e- → 2R-", "2R- → R2 + 2e-"], 0)], "8-half-cell-table",
    "Memo: Cd ⇌ Cd2+ + 2e- earns 1/2; Cd2+ + 2e- ← Cd earns 2/2 (reduction written Cd2+ + 2e- ⇌ Cd earns 0/2)."),
  q("8.3.2", "For Combination II, write down the NAME or FORMULA of the metal used in the cathode compartment.", 1, "electrochemistry", "Comprehension",
    "Platinum / Pt (inert electrode for the R2/R- half-cell).",
    [s(1, "Cathode metal", ["Platinum (Pt)", "Cadmium (Cd)", "Nickel (Ni)", "Copper (Cu)"], 0)], "8-half-cell-table"),
  q("8.4", "Arrange the following species in order of INCREASING oxidising ability: Q2+ ; R2 ; Cd2+. Explain fully how you arrived at the answer. A calculation is NOT required. (R2 is Cl2, E° = +1,36 V; Q is Ni, E° = -0,27 V; Cd2+ E° = -0,40 V.)", 4, "electrochemistry", "Evaluation",
    "Cd2+ < Q2+ < R2. Q2+ is reduced and Cd oxidised in Combination I, so Q2+ is a stronger oxidising agent than Cd2+. R2 is reduced and Cd oxidised in Combination II, so R2 is stronger than Cd2+. The cell potential of II (1,76 V) is higher than that of I (0,13 V), so R2 is a stronger oxidising agent than Q2+.",
    [s(1, "Compare Q2+ and Cd2+", ["Q2+ is reduced and Cd is oxidised, so Q2+ is a stronger oxidising agent than Cd2+", "Cd2+ is reduced and Q is oxidised, so Cd2+ is a stronger oxidising agent than Q2+", "Both are reduced, so their oxidising ability is equal", "Q2+ is oxidised, so it is the weaker oxidising agent"], 0),
     s(1, "Compare R2 and Cd2+", ["R2 is reduced and Cd is oxidised, so R2 is a stronger oxidising agent than Cd2+", "R2 is oxidised and Cd2+ is reduced, so Cd2+ is the stronger oxidising agent", "R2 and Cd2+ are both reduced, so they are equal", "R2 is the reducing agent, so it is the weakest"], 0),
     s(1, "Compare R2 and Q2+", ["The cell potential of II (1,76 V) is higher than that of I (0,13 V), so R2 is the stronger oxidising agent", "The cell potential of II (1,76 V) is higher than that of I (0,13 V), so Q2+ is the stronger oxidising agent", "The cell potential of I is lower, so R2 is the weaker oxidising agent", "Both cell potentials are positive, so they are equal"], 0),
     s(1, "Final order of increasing oxidising ability", ["Cd2+ ; Q2+ ; R2", "R2 ; Q2+ ; Cd2+", "Q2+ ; Cd2+ ; R2", "Cd2+ ; R2 ; Q2+"], 0)],
    undefined, "Memo accepts Cd2+ ; Q2+ ; R2 or Cd2+ ; Ni2+ ; Cl2."),

  // ============ QUESTION 9 (12) ============
  q("9.1", "The diagram represents an electrochemical cell used for the purification of copper (Electrode A, impure copper Electrode B, DC source). Define the term electrolysis.", 2, "electrochemistry", "Recall",
    "The chemical process in which electrical energy is converted to chemical energy / the use of electrical energy to produce a chemical change / decomposition of an ionic compound by means of electrical energy.",
    [s(2, "Definition of electrolysis", ["The chemical process in which electrical energy is converted to chemical energy.", "The chemical process in which chemical energy is converted to electrical energy.", "The process by which a metal reacts with an acid to form a salt and hydrogen.", "The process in which an ionic compound dissolves in water to form ions."], 0)], "9-copper-purification"),
  q("9.2", "Give a reason why a direct-current (DC) source is used in this experiment.", 1, "electrochemistry", "Comprehension",
    "To keep the polarity of the electrodes the same / to prevent the anode and cathode from swapping / DC gives a one-way flow of electrons.",
    [s(1, "Reason for DC", ["To keep the polarity of the electrodes the same (anode and cathode do not swap)", "DC supplies a higher voltage than AC", "DC makes the electrolyte conduct", "DC heats the electrolyte faster"], 0)], "9-copper-purification"),
  q("9.3", "Write down the half-reaction which takes place at electrode A (the cathode, where pure copper is deposited).", 2, "electrochemistry", "Application",
    "Cu2+(aq) + 2e- → Cu(s)",
    [s(2, "Half-reaction at A", ["Cu2+ + 2e- → Cu", "Cu → Cu2+ + 2e-", "Zn2+ + 2e- → Zn", "2H2O + 2e- → H2 + 2OH-"], 0)], "9-copper-purification",
    "Memo: Cu2+ + 2e- ⇌ Cu earns 1/2; Cu ⇌ Cu2+ + 2e- earns 0/2."),
  q("9.4", "Due to small amounts of zinc impurities in the impure copper, the electrolyte becomes contaminated with Zn2+ ions. Refer to the Table of Standard Reduction Potentials to explain why the Zn2+ ions will not influence the purity of the copper obtained. (E° Cu2+/Cu = +0,34 V; E° Zn2+/Zn = -0,76 V)", 3, "electrochemistry", "Evaluation",
    "The standard reduction potential of Zn2+|Zn is lower than that of Cu2+|Cu, so Cu2+ is a stronger oxidising agent than Zn2+ (Zn a stronger reducing agent than Cu); Cu2+ will be reduced to Cu.",
    [s(1, "Compare reduction potentials", ["E° of Zn2+|Zn is lower than E° of Cu2+|Cu", "E° of Zn2+|Zn is higher than E° of Cu2+|Cu", "E° of Zn2+|Zn equals E° of Cu2+|Cu", "Zinc is more dense than copper"], 0),
     s(1, "Oxidising/reducing strength", ["Cu2+ is a stronger oxidising agent than Zn2+", "Zn2+ is a stronger oxidising agent than Cu2+", "Cu is a stronger reducing agent than Zn", "Cu2+ and Zn2+ have equal oxidising strength"], 0),
     s(1, "Conclusion", ["Cu2+ will be reduced to Cu (Zn2+ stays in solution)", "Zn2+ will be reduced to Zn at the cathode", "Zn2+ will be oxidised at the anode", "Zn2+ and Cu2+ will both be deposited"], 0)],
    "9-copper-purification", "FLAG: mark split inferred from memo ticks."),
  q("9.5", "After purification, 2,85 x 10^-2 mol of copper was formed. The initial mass of electrode B was 2,0 g. Calculate the percentage of copper initially present in electrode B. (M(Cu) = 63,5 g·mol-1)", 4, "stoichiometry", "Application",
    "n = m/M; 2,85 x 10^-2 = m/63,5; m = 1,81 g; % = 1,81/2 x 100 = 90,49% (accept 90,5%).",
    [s(1, "Substitution in n = m/M", ["2,85 x 10^-2 = m/63,5", "2,85 x 10^-2 = 63,5/m", "m = 2,85 x 10^-2 x 2,0", "2,85 x 10^-2 = m/2,0"], 0),
     s(1, "Mass of copper", ["1,81 g", "1,81 x 10^-2 g", "0,0285 g", "2,23 x 10^-3 g"], 0),
     s(1, "Percentage formula", ["1,81/2,0 x 100", "2,0/1,81 x 100", "1,81 x 2,0 x 100", "1,81/63,5 x 100"], 0),
     s(1, "Final answer", ["90,49%", "110,5%", "9,05%", "45,2%"], 0)],
    "9-copper-purification", "FLAG: mark split inferred. Memo: accept 90,5%."),

  // ============ QUESTION 10 (12) ============
  q("10.1.1", "For the industrial preparation of ammonia, write down the name of the process used.", 1, "chemical-industry", "Recall",
    "Haber (process).",
    [s(1, "Process", ["Haber process", "Contact process", "Ostwald process", "Solvay process"], 0)]),
  q("10.1.2", "Write down a balanced equation for the reaction that occurs in the industrial preparation of ammonia.", 3, "chemical-industry", "Application",
    "N2 + 3H2 ⇌ 2NH3 (reactants, products, balancing).",
    [s(1, "Reactants", ["N2 and H2", "NH3 and O2", "N2 and O2", "NH3 and H2"], 0),
     s(1, "Product", ["NH3", "NO", "N2H4", "NH4NO3"], 0),
     s(1, "Balancing", ["N2 + 3H2 ⇌ 2NH3", "N2 + H2 ⇌ NH3", "N2 + 2H2 ⇌ 2NH3", "2N2 + 3H2 ⇌ 2NH3"], 0)]),
  q("10.1.3", "Write down the source of nitrogen in the industrial preparation of ammonia.", 1, "chemical-industry", "Recall",
    "Air.",
    [s(1, "Source of nitrogen", ["Air", "Ammonium nitrate", "Natural gas", "Sea water"], 0)]),
  q("10.2.1", "Use the appropriate graph (400 °C curve) to estimate the percentage of ammonia present in the reaction mixture at 240 atmosphere and 400 °C.", 1, "chemical-industry", "Application",
    "40%.",
    [s(1, "Percentage at 240 atm, 400 °C", ["40%", "65%", "20%", "55%"], 0)], "10.2-ammonia-graph"),
  q("10.2.2", "State TWO advantages of using high pressure in the preparation of ammonia.", 2, "chemical-industry", "Comprehension",
    "High yield / percentage; high rate due to higher concentration.",
    [s(1, "Advantage 1", ["High yield (percentage of ammonia)", "Lower cost of equipment", "Less energy needed to compress", "Catalyst lasts longer"], 0),
     s(1, "Advantage 2", ["High rate due to higher concentration", "Lower activation energy", "Lower safety risk", "Lower temperature is required"], 0)],
    "10.2-ammonia-graph"),
  q("10.2.3", "The advantage of using a low temperature is the large percentage of ammonia formed. What is the disadvantage of using a low temperature?", 1, "chemical-industry", "Comprehension",
    "Low reaction rate.",
    [s(1, "Disadvantage", ["Low reaction rate", "Low percentage of ammonia", "The catalyst is destroyed", "The ammonia decomposes"], 0)]),
  q("10.3", "Calculate the mass of nitrogen in a 50 kg bag of pure ammonium nitrate (NH4NO3) fertiliser.", 3, "chemical-industry", "Application",
    "% N = 28/80 x 100 = 35%; m(N) = 35/100 x 50 = 17,5 kg.",
    [s(1, "Fraction of N in NH4NO3", ["28/80", "14/80", "14/53,5", "28/60"], 0),
     s(1, "Multiply by the mass of the bag", ["x 50", "/ 50", "x 100", "x 0,5"], 0),
     s(1, "Mass of nitrogen", ["17,5 kg", "8,75 kg", "26,2 kg", "35 kg"], 0)]),
];
