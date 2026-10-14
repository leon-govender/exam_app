// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2017, National
// (English).
// Source: single combined PDF (question paper + data sheets + English/Afrikaans
// marking guideline) from stanmorephysics.com. QP = pages 1-16 (cover page
// confirms "PHYSICAL SCIENCES: CHEMISTRY (P2)", "NOVEMBER 2017", MARKS 150,
// TIME 3 hours), data sheets = pages 17-21, memo = pages 22-31. Question
// numbers, sub-numbers and mark values in the memo were cross-checked against
// the question paper for every sub-question: all match, per-question totals
// (20/13/14/15/17/17/17/14/9/14) and the 150 grand total agree.
//
// Paper structure: TEN compulsory questions, 150 marks, 3 hours. All 150 marks
// are included. Every question is stepped multiple choice (no marking_points).
//
// Topic mapping: all questions map to the existing topics. Q1.10 (eutrophication)
// and Q10 (ammonium nitrate / Ostwald / Haber, NPK fertiliser) use the
// "chemical-industry" topic. Q1.4 (potential-energy diagram, heat of reaction)
// is mapped to rate-of-reaction (closest match; FLAG: energy changes have no
// dedicated topic). Q5.4 (moles of H2 from a rate and a molar gas volume) is
// kept under rate-of-reaction since it is part of the Q5 rate investigation.
//
// Diagrams cropped from 220dpi renders (the PDF has a text layer but the
// drawings are vector): 1.2 aldehyde-group options, 1.4 energy diagram, 2.1
// ester, 2.3 alkyne, Q3 vapour-pressure graph, Q4 flow diagram, Q5 table +
// volume-time graph, 7.2 pH graph, 7.3 dilution diagram, 8.1 galvanic cell, Q9
// copper-refining cell, 10.1 process box. The memo's drawn answer structures
// (2.1.4, 2.2, 3.4.1, 4.5) are not images; they are given as text options.
//
// FLAGS for review:
// - 6.2.2: memo OPTION 1 gives 90,46 % and OPTION 2 gives 90,9 % (via
//   masses); the memo accepts the range 90,46 - 90,9 %. 90,46 % is used as the
//   correct step answer; 90,9 % is NOT offered as a distractor.
// - 8.1.3 / 10.1.7 / 4.5: memo awards marks for reactants/products/balancing;
//   modelled as one MCQ step per mark criterion.
// - 3.4.1: memo accepts either 2-methylbutane or 2,2-dimethylpropane; only
//   2-methylbutane is offered as the correct option (2,2-dimethylpropane is not
//   used as a distractor).
// - 7.1.3: memo accepts H2O OR NH3 as the ampholyte; H2O is the correct option
//   and NH3 is not offered as a distractor.
// - 5.4: the memo uses 30 s (the time at which curve P levels off on the
//   graph) with the 15 cm3/s average rate to get V(H2) = 450 cm3.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2017-p2";

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
  year: 2017,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2020/10/Physical-Sciences-grade-12-Nov-2017-P2-and-Memo.pdf" as string | null,
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
  marking_points?: MarkingPoint[];
  steps?: MarkingPointStep[];
  image_url?: string;
}

const st = (marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep => ({
  marks, description, options, correctIndex,
});

const q = (
  sub: string, text: string, marks: number, topicKey: string, level: string,
  model_answer: string, marking_notes: string, steps: MarkingPointStep[], image?: string,
): QuestionSeed => ({
  number: sub.split(".")[0], sub_number: sub, text, marks, topicKey, cognitiveLevelName: level,
  model_answer, marking_notes, steps, ...(image ? { image_url: `${IMG}/${image}` } : {}),
});

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE CHOICE (20) ============
  q("1.1", "The IUPAC name of an organic compound with molecular formula C7H14O2 is:", 2, "organic-chemistry", "Application",
    "D: heptanoic acid (CnH2nO2 carboxylic acid with 7 carbons).", "Only D.",
    [st(2, "Choose the compound that fits C7H14O2", ["Heptanal", "Heptan-1-ol", "Heptan-2-ol", "Heptanoic acid"], 3)]),
  q("1.2", "Which ONE of the following structures is the functional group of aldehydes? (Structures A to D are shown in the image.)", 2, "organic-chemistry", "Recall",
    "B: -C(=O)-H (the formyl group).", "Only B.",
    [st(2, "Identify the aldehyde functional group", ["A: -C(=O)-O-H (carboxyl group)", "B: -C(=O)-H (formyl group, carbonyl carbon bonded to one H)", "C: -C(=O)-O-C- (ester group)", "D: -C-C(=O)-C- (ketone carbonyl group)"], 1)], "1.2-aldehyde-groups.png"),
  q("1.3", "Which ONE of the following equations represents a cracking process? (A) 5CH2=CH2 → —(CH2CH2)5— (B) CH3(CH2)5CH=CH2 + H2 → CH3(CH2)6CH3 (C) CH3(CH2)6CH3 → CH3(CH2)4CH3 + CH2=CH2 (D) CH3(CH2)7OH → CH3(CH2)5CH=CH2 + H2O", 2, "organic-chemistry", "Comprehension",
    "C: a long-chain alkane is broken into a shorter alkane and an alkene.", "Only C.",
    [st(2, "Identify the cracking equation", ["A: polymerisation of ethene", "B: hydrogenation of an alkene", "C: an alkane breaks into a shorter alkane and an alkene", "D: dehydration of an alcohol"], 2)]),
  q("1.4", "The potential energy diagram (products higher than reactants) is shown. I: X represents the potential energy of the products formed during the reverse reaction. II: The graph could represent CaCO3(s) ⇌ Ca2+(aq) + CO3^2-(aq), ΔH > 0. III: The graph could represent the combustion of methane. Which statements are TRUE?", 2, "rate-of-reaction", "Evaluation",
    "A: I and II only. X is the energy of the reactants of the forward reaction = products of the reverse reaction; the graph is endothermic (ΔH > 0) like the dissolving, whereas combustion is exothermic so III is false.", "Only A.",
    [st(2, "Decide which statements are true", ["I and II only", "II and III only", "I and III only", "I, II and III"], 0)], "1.4-potential-energy.png"),
  q("1.5", "A reaction reaches equilibrium at 25 °C. Kc = 1,0 × 10^-4. Which statement about the reaction at equilibrium is CORRECT?", 2, "chemical-equilibrium", "Comprehension",
    "C: Kc << 1, so the concentration of products is lower than that of the reactants.", "Only C.",
    [st(2, "Interpret the small Kc value", ["The concentration of the products is equal to that of the reactants.", "The concentration of the products is higher than that of the reactants.", "The concentration of the products is lower than that of the reactants.", "The rate of the forward reaction is lower than the rate of the reverse reaction."], 2)]),
  q("1.6", "2HgO(s) ⇌ 2Hg(ℓ) + O2(g) is at equilibrium in a closed container. More HgO(s) is added at constant temperature. How are the moles of O2(g) and Kc affected?", 2, "chemical-equilibrium", "Application",
    "C: a pure solid does not appear in Kc and its amount does not change the equilibrium; moles of O2 remain the same and Kc is unchanged (temperature constant).", "Only C.",
    [st(2, "Effect on n(O2) and Kc", ["n(O2) increases; Kc increases", "n(O2) increases; Kc remains the same", "n(O2) remains the same; Kc remains the same", "n(O2) remains the same; Kc increases"], 2)]),
  q("1.7", "Which ONE of the following 0,1 mol·dm-3 solutions has the highest pH? (A) HNO3 (B) NH4Cℓ (C) Na2CO3 (D) CH3COOH", 2, "acids-and-bases", "Application",
    "C: Na2CO3 is the salt of a strong base and a weak acid; CO3^2- hydrolyses to give OH-, so a basic solution.", "Only C.",
    [st(2, "Choose the highest-pH solution", ["HNO3(aq)", "NH4Cℓ(aq)", "Na2CO3(aq)", "CH3COOH(aq)"], 2)]),
  q("1.8", "Cell notation: Ni(s) | Ni2+(1 mol·dm-3) || Pb2+(1 mol·dm-3) | Pb(s). Which statement is CORRECT?", 2, "electrochemistry", "Comprehension",
    "A: Ni is on the left (anode) and is oxidised.", "Only A.",
    [st(2, "Interpret the cell notation", ["Ni is oxidised.", "Pb(s) is reduced.", "Ni2+(aq) is the oxidising agent.", "Pb2+ is the reducing agent."], 0)]),
  q("1.9", "Which combination CORRECTLY shows the products formed during electrolysis of a CONCENTRATED sodium chloride solution (cathode / anode)?", 2, "electrochemistry", "Application",
    "B: hydrogen at the cathode (water is reduced in preference to Na+) and chlorine at the anode.", "Only B.",
    [st(2, "Products at cathode / anode", ["Cathode: hydrogen; anode: sodium", "Cathode: hydrogen; anode: chlorine", "Cathode: chlorine; anode: sodium", "Cathode: chlorine; anode: hydrogen"], 1)]),
  q("1.10", "Which ONE of the following is NOT part of the eutrophication process?", 2, "chemical-industry", "Comprehension",
    "B: bacterial nitrogen fixation. Eutrophication involves an increase in nutrients, an algal bloom and depletion of oxygen.", "Only B.",
    [st(2, "Choose the item that is not part of eutrophication", ["Algal bloom", "Bacterial nitrogen fixation", "Depletion of oxygen in water", "Increase in plant nutrients in water"], 1)]),

  // ============ QUESTION 2: ORGANIC (13) ============
  q("2.1.1", "Study the structural formula of CH3CH2-O-C(=O)-CH2CH2CH3. Write down the homologous series to which it belongs.", 1, "organic-chemistry", "Recall",
    "Esters.", "Esters.",
    [st(1, "Homologous series of the compound", ["Carboxylic acids", "Esters", "Ketones", "Ethers"], 1)], "2.1-ester.png"),
  q("2.1.2", "Write down the IUPAC name of this compound (CH3CH2-O-C(=O)-CH2CH2CH3).", 2, "organic-chemistry", "Application",
    "Ethyl butanoate (1 mark ethyl, 1 mark butanoate).", "Ethyl / butanoate.",
    [st(1, "Alkyl group from the alcohol part", ["Ethyl", "Propyl", "Methyl", "Butyl"], 0),
     st(1, "Stem from the acid part", ["Butanoate", "Propanoate", "Pentanoate", "Ethanoate"], 0)], "2.1-ester.png"),
  q("2.1.3", "Write down the IUPAC name of the organic acid used in the preparation of this ester.", 1, "organic-chemistry", "Application",
    "Butanoic acid.", "Butanoic acid.",
    [st(1, "Acid used", ["Propanoic acid", "Butanoic acid", "Ethanoic acid", "Pentanoic acid"], 1)], "2.1-ester.png"),
  q("2.1.4", "Write down the STRUCTURAL FORMULA of the straight chain (unbranched) functional isomer of this ester.", 2, "organic-chemistry", "Application",
    "Hexanoic acid: CH3CH2CH2CH2CH2-COOH (the ester is C6H12O2; its unbranched carboxylic acid isomer has six carbons), all bonds drawn.", "Memo structure: straight six-carbon chain ending in -COOH with all H's drawn (2 marks: carboxyl group drawn correctly; unbranched chain of 6 carbons).",
    [st(1, "Functional group of the isomer", ["Carboxyl group, -C(=O)OH", "Hydroxyl group only, -OH", "Ester group, -C(=O)O-", "Carbonyl in the chain, ketone"], 0),
     st(1, "Chain length of the unbranched isomer (C6H12O2)", ["Six carbons in total: CH3CH2CH2CH2CH2-COOH", "Five carbons in total: CH3CH2CH2CH2-COOH", "Four carbons in total: CH3CH2CH2-COOH", "Six carbons with a methyl branch: (CH3)2CHCH2CH2-COOH"], 0)], "2.1-ester.png"),
  q("2.2", "Write down the structural formula of 4-methylpentan-2-one.", 3, "organic-chemistry", "Application",
    "CH3-C(=O)-CH2-CH(CH3)-CH3 (drawn fully): a five-carbon chain, C=O on carbon 2, methyl on carbon 4.", "Ketone C=O on C2 (1); five-carbon main chain (1); methyl on C4 (1).",
    [st(1, "Position of the carbonyl group", ["C=O on carbon 2 inside the chain (ketone)", "C=O on carbon 1 at the end (aldehyde)", "-OH on carbon 2 (alcohol)", "C=O on carbon 3"], 0),
     st(1, "Main chain", ["Five carbons (pentane chain)", "Four carbons (butane chain)", "Six carbons (hexane chain)", "Three carbons (propane chain)"], 0),
     st(1, "Methyl substituent position", ["On carbon 4", "On carbon 2", "On carbon 3", "On carbon 5"], 0)]),
  q("2.3.1", "Consider the alkyne structure shown. Write down the general formula of the homologous series to which it belongs.", 1, "organic-chemistry", "Recall",
    "CnH2n-2.", "CnH2n-2.",
    [st(1, "General formula of alkynes", ["CnH2n-2", "CnH2n", "CnH2n+2", "CnH2n-1"], 0)], "2.3-alkyne.png"),
  q("2.3.2", "Write down the IUPAC name of this compound (the structure is shown).", 3, "organic-chemistry", "Application",
    "5-ethyl-2,6-dimethylhept-3-yne.", "Longest chain with triple bond (hept-3-yne), substituents, full name.",
    [st(1, "Parent chain and triple-bond position", ["Hept-3-yne", "Hept-4-yne", "Oct-3-yne", "Hex-2-yne"], 0),
     st(1, "Substituents identified", ["Ethyl and two methyl groups", "Propyl and one methyl group", "Two ethyl groups and one methyl group", "Ethyl and three methyl groups"], 0),
     st(1, "Full IUPAC name", ["5-ethyl-2,6-dimethylhept-3-yne", "3-ethyl-2,6-dimethylhept-4-yne", "5-ethyl-2,6-dimethylhept-4-yne", "2,6-dimethyl-5-ethylhept-3-yne"], 0)], "2.3-alkyne.png"),

  // ============ QUESTION 3: ALKANES, VAPOUR PRESSURE (14) ============
  q("3.1", "Give a reason why alkanes are said to be SATURATED.", 1, "organic-chemistry", "Recall",
    "They have only single bonds between carbon atoms (any one of the memo's accepted reasons).", "Any one correct reason.",
    [st(1, "Why alkanes are saturated", ["They have only single bonds between carbon atoms.", "They contain a double bond between carbon atoms.", "They contain only carbon atoms.", "They have a functional group containing oxygen."], 0)]),
  q("3.2", "Define vapour pressure.", 2, "intermolecular-forces", "Recall",
    "The pressure exerted by a vapour in equilibrium with its liquid in a closed system.", "Pressure of a vapour in equilibrium with its liquid in a closed system.",
    [st(2, "Definition of vapour pressure", ["The pressure exerted by a vapour in equilibrium with its liquid in a closed system.", "The pressure of the atmosphere above a liquid in an open container.", "The pressure at which a liquid boils in an open system.", "The pressure needed to turn a vapour into a liquid at any temperature."], 0)]),
  q("3.3.1", "Use the graph: what is the effect of an increase in temperature on vapour pressure? Choose INCREASES, DECREASES or NO EFFECT.", 1, "intermolecular-forces", "Comprehension",
    "Increases.", "Increases.",
    [st(1, "Effect of temperature on vapour pressure", ["Increases", "Decreases", "No effect", "Increases then decreases"], 0)], "3-vapour-pressure-graph.png"),
  q("3.3.2", "Which compound has a boiling point of approximately 68 °C? Give a reason for the answer.", 2, "intermolecular-forces", "Application",
    "Q. It is the temperature where its vapour pressure equals atmospheric pressure (760 mmHg), where the graph meets the dotted line.", "Q (1) with reason (1).",
    [st(1, "Compound with b.p. about 68 °C", ["Q", "P", "R", "S"], 0),
     st(1, "Reason", ["At 68 °C its vapour pressure equals atmospheric pressure (760 mmHg).", "At 68 °C its vapour pressure is the highest of the four compounds.", "At 68 °C its vapour pressure is zero.", "At 68 °C its vapour pressure is 68 mmHg."], 0)], "3-vapour-pressure-graph.png"),
  q("3.3.3", "Which compound has the longest chain length? Fully explain the answer.", 4, "intermolecular-forces", "Evaluation",
    "S. At a given temperature S has the lowest vapour pressure (highest boiling point), strongest London/dispersion forces, so the highest energy is needed to overcome the intermolecular forces.", "S (1), lowest vapour pressure/highest b.p. (1), strongest London forces (1), most energy to overcome forces (1).",
    [st(1, "Compound with the longest chain", ["S", "P", "Q", "R"], 0),
     st(1, "Observation from the graph at a given temperature", ["S has the lowest vapour pressure (highest boiling point).", "S has the highest vapour pressure (lowest boiling point).", "S has the same vapour pressure as P.", "S has the vapour pressure closest to 760 mmHg at 20 °C."], 0),
     st(1, "Intermolecular forces", ["S has the strongest London (dispersion) forces.", "S has the weakest London (dispersion) forces.", "S has hydrogen bonds between its molecules.", "S has the strongest covalent bonds."], 0),
     st(1, "Energy", ["The highest energy is needed to overcome the intermolecular forces of S.", "The least energy is needed to overcome the intermolecular forces of S.", "The highest energy is needed to break the C-C covalent bonds of S.", "The same energy is needed for all four compounds."], 0)], "3-vapour-pressure-graph.png"),
  q("3.4.1", "Compound P has FIVE carbon atoms. Draw the structural formula of a chain isomer of P and write down its IUPAC name.", 3, "organic-chemistry", "Application",
    "2-methylbutane, CH3-CH(CH3)-CH2-CH3 (2 marks for the structure, 1 for the name). (Memo also accepts 2,2-dimethylpropane.)", "Structure (2), name (1).",
    [st(1, "Carbon skeleton of the isomer", ["A four-carbon chain with one methyl branch on the second carbon", "An unbranched five-carbon chain", "A three-carbon chain with an ethyl branch on carbon 2", "A four-carbon chain with a methyl branch on carbon 1"], 0),
     st(1, "Complete saturated structure (all H's, C5H12)", ["C5H12: CH3-CH(CH3)-CH2-CH3 with every carbon having four bonds", "C5H10: CH3-C(CH3)=CH-CH3", "C5H11: CH3-CH(CH3)-CH2-CH2 with a free bond", "C5H12O: CH3-CH(CH3)-CH2-CH2-OH"], 0),
     st(1, "IUPAC name", ["2-methylbutane", "3-methylbutane", "2-methylpentane", "Pentane"], 0)]),
  q("3.4.2", "How will the vapour pressure of this isomer compare with that of compound P (pentane)? Choose HIGHER THAN, LOWER THAN or EQUAL TO.", 1, "intermolecular-forces", "Application",
    "Higher than: the branched isomer has a smaller surface area, so weaker London forces and higher vapour pressure.", "Higher than.",
    [st(1, "Vapour pressure of the isomer vs P", ["Higher than", "Lower than", "Equal to", "Cannot be compared"], 0)]),

  // ============ QUESTION 4: ORGANIC REACTIONS (15) ============
  q("4.1", "Compound P is butan-2-ol (the OH is on the second carbon of a four-carbon chain). Is compound P a PRIMARY, SECONDARY or TERTIARY alcohol? Give a reason.", 2, "organic-chemistry", "Comprehension",
    "Secondary; the C atom bonded to the -OH group is bonded to TWO other C atoms.", "Secondary (1) with reason (1).",
    [st(1, "Type of alcohol", ["Secondary", "Primary", "Tertiary", "Quaternary"], 0),
     st(1, "Reason", ["The C bonded to the -OH group is bonded to two other C atoms.", "The C bonded to the -OH group is bonded to one other C atom.", "The C bonded to the -OH group is bonded to three other C atoms.", "The -OH group is on the last carbon of the chain."], 0)], "4-flow-diagram.png"),
  q("4.2.1", "Write down the type of elimination reaction represented by A (alcohol P → alkene Y).", 1, "organic-chemistry", "Recall",
    "Dehydration.", "Dehydration.",
    [st(1, "Reaction A", ["Dehydration", "Dehydrohalogenation", "Hydration", "Cracking"], 0)], "4-flow-diagram.png"),
  q("4.2.2", "Write down the type of addition reaction represented by B (alkene Y → alcohol P).", 1, "organic-chemistry", "Recall",
    "Hydration.", "Hydration.",
    [st(1, "Reaction B", ["Hydration", "Hydrogenation", "Hydrohalogenation", "Dehydration"], 0)], "4-flow-diagram.png"),
  q("4.2.3", "Write down the type of elimination reaction represented by D (compound X → alkene Y).", 1, "organic-chemistry", "Recall",
    "Dehydrohalogenation (dehydrobromination).", "Dehydrohalogenation / dehydrobromination.",
    [st(1, "Reaction D", ["Dehydrohalogenation", "Dehydration", "Halogenation", "Hydrolysis"], 0)], "4-flow-diagram.png"),
  q("4.3.1", "Sodium hydroxide is used as one of the reactants in reaction C (compound X → alcohol P). What type of reaction takes place?", 1, "organic-chemistry", "Comprehension",
    "Substitution (hydrolysis).", "Substitution / hydrolysis.",
    [st(1, "Type of reaction C", ["Substitution (hydrolysis)", "Elimination", "Addition", "Esterification"], 0)], "4-flow-diagram.png"),
  q("4.3.2", "State the TWO reaction conditions for reaction C.", 2, "organic-chemistry", "Recall",
    "Dilute base/sodium hydroxide and moderate temperature (mild heat).", "One mark each.",
    [st(1, "Reagent condition", ["Dilute sodium hydroxide", "Concentrated sodium hydroxide dissolved in ethanol", "Concentrated sulphuric acid", "Dilute sulphuric acid"], 0),
     st(1, "Temperature condition", ["Moderate temperature (mild heat)", "Very high temperature (strong heat)", "Low temperature (ice bath)", "A platinum catalyst at 150 °C"], 0)], "4-flow-diagram.png"),
  q("4.3.3", "Write down the IUPAC name of compound X (made from butan-2-ol with HBr).", 2, "organic-chemistry", "Application",
    "2-bromobutane.", "Bromobutane (1), locant 2 (1).",
    [st(1, "Parent name", ["Bromobutane", "Bromopropane", "Dibromobutane", "Butanol"], 0),
     st(1, "Position of bromine", ["2-bromobutane", "1-bromobutane", "3-bromobutane", "2-bromo-2-methylpropane"], 0)], "4-flow-diagram.png"),
  q("4.4", "Write down the FORMULA of an inorganic reactant needed for reaction D (haloalkane → alkene).", 1, "organic-chemistry", "Recall",
    "NaOH or KOH (concentrated, in ethanol).", "NaOH / KOH.",
    [st(1, "Inorganic reactant for D", ["NaOH (or KOH)", "H2SO4", "H2O", "HBr"], 0)], "4-flow-diagram.png"),
  q("4.5", "Using STRUCTURAL FORMULAE, write down a balanced equation for reaction E (alkene Y + H2 with Pt).", 3, "organic-chemistry", "Application",
    "CH3-CH=CH-CH3 + H-H → CH3-CH2-CH2-CH3 (all bonds drawn).", "Alkene reactant (1), H2 (1), butane product (1).",
    [st(1, "Organic reactant (Y, the major alkene)", ["But-2-ene: CH3-CH=CH-CH3", "But-1-ene: CH2=CH-CH2-CH3", "Butane: CH3-CH2-CH2-CH3", "Butan-2-ol: CH3-CH(OH)-CH2-CH3"], 0),
     st(1, "Other reactant", ["H-H (hydrogen)", "H-Br", "H-OH", "Br-Br"], 0),
     st(1, "Product", ["CH3-CH2-CH2-CH3 (butane)", "CH3-CHBr-CH2-CH3", "CH3-CH(OH)-CH2-CH3", "CH3-CH=CH-CH3 (but-2-ene)"], 0)], "4-flow-diagram.png"),
  q("4.6", "Write down the IUPAC name of compound Z.", 1, "organic-chemistry", "Application",
    "Butane.", "Butane.",
    [st(1, "Name of Z", ["Butane", "Butene", "Propane", "Butan-2-ol"], 0)], "4-flow-diagram.png"),

  // ============ QUESTION 5: RATE (17) ============
  q("5.1", "Define reaction rate.", 2, "rate-of-reaction", "Recall",
    "Change in concentration of products/reactants per (unit) time.", "Any one memo definition.",
    [st(2, "Definition of reaction rate", ["The change in concentration of reactants or products per unit time.", "The total amount of product formed when the reaction is complete.", "The time taken for a reaction to reach equilibrium.", "The minimum energy needed for a reaction to occur."], 0)]),
  q("5.2", "Write down an investigative question for this investigation (Zn powder with excess HCℓ, 0,25 and 0,40 mol·dm-3).", 2, "rate-of-reaction", "Application",
    "e.g. What is the relationship between concentration and reaction rate?", "Variables correctly identified (1); question about their relationship (1).",
    [st(1, "Variables identified", ["Independent: concentration of HCℓ; dependent: reaction rate", "Independent: reaction rate; dependent: concentration of HCℓ", "Independent: mass of zinc; dependent: temperature", "Independent: temperature; dependent: volume of HCℓ"], 0),
     st(1, "Form of the investigative question", ["What is the relationship between the concentration of HCℓ and the reaction rate?", "Does a higher temperature make zinc dissolve faster?", "Concentration of HCℓ increases the reaction rate.", "What is the volume of hydrogen formed in 30 s?"], 0)], "5-table-and-graph.png"),
  q("5.3", "Which curve, P or Q, represents the results of experiment I? Explain the answer.", 3, "rate-of-reaction", "Evaluation",
    "Q. Smaller gradient (less steep); experiment I has the lower HCℓ concentration and takes longer to reach the maximum volume of gas.", "Q (1), smaller gradient (1), lowest concentration so takes longer (1).",
    [st(1, "Curve for experiment I", ["Q", "P", "Both P and Q", "Neither"], 0),
     st(1, "Graph feature", ["Q has a smaller gradient (less steep).", "Q reaches a higher final volume.", "Q has a steeper gradient than P.", "Q starts at a higher volume of H2."], 0),
     st(1, "Reason", ["Experiment I has the lowest HCℓ concentration and takes longer to reach the maximum volume of gas.", "Experiment I has the highest HCℓ concentration so it forms the most gas.", "Experiment I has less zinc so less gas is formed.", "Experiment I is at a lower temperature."], 0)], "5-table-and-graph.png"),
  q("5.4", "The average rate of production of hydrogen gas, as represented by graph P, was 15 cm3·s-1. Calculate the mass of zinc used. Take the molar gas volume at 25 °C as 24 000 cm3.", 5, "rate-of-reaction", "Application",
    "V(H2) = 15 × 30 = 450 cm3; n(H2) = 450/24 000 = 0,0188 mol; n(Zn) = n(H2) = 0,0188 mol; m = nM = 0,0188 × 65 = 1,22 g.", "Memo: rate formula/V = 450 cm3, n = V/Vm, mole ratio, n = m/M, final answer 1,22 g.",
    [st(1, "Volume of H2 produced (curve P levels off at 30 s)", ["450 cm3", "15 cm3", "1 050 cm3", "7,5 cm3"], 0),
     st(1, "Moles of H2 (n = V/Vm)", ["0,0188 mol", "0,0375 mol", "53,3 mol", "0,0063 mol"], 0),
     st(1, "Mole ratio Zn : H2", ["n(Zn) = n(H2) = 0,0188 mol", "n(Zn) = 2n(H2) = 0,0375 mol", "n(Zn) = ½n(H2) = 0,0094 mol", "n(Zn) = n(HCℓ) = 0,05 mol"], 0),
     st(1, "Formula used for mass", ["m = nM = 0,0188 × 65", "m = n/M = 0,0188 / 65", "m = nVm", "m = M/n"], 0),
     st(1, "Mass of zinc", ["1,22 g", "2,45 g", "0,61 g", "1,53 g"], 0)], "5-table-and-graph.png"),
  q("5.5.1", "Experiment III: 200 cm3 of 0,25 mol·dm-3 HCℓ at 35 °C reacts with the same amount of zinc as in I and II. How will the heat of reaction of experiment II compare with that of experiment III? Choose MORE THAN, LESS THAN or EQUAL TO.", 1, "rate-of-reaction", "Evaluation",
    "Equal to (the same reaction; heat of reaction does not depend on concentration or temperature changes).", "Equal to.",
    [st(1, "Heat of reaction II vs III", ["Equal to", "More than", "Less than", "Cannot be determined"], 0)], "5-table-and-graph.png"),
  q("5.5.2", "How will the activation energy of the reaction in experiment I compare with that of experiment III? Choose MORE THAN, LESS THAN or EQUAL TO.", 1, "rate-of-reaction", "Evaluation",
    "Equal to (temperature does not change the activation energy).", "Equal to.",
    [st(1, "Activation energy I vs III", ["Equal to", "More than", "Less than", "Cannot be determined"], 0)], "5-table-and-graph.png"),
  q("5.6", "The rate of the reaction in experiment III is higher than that of experiment I. Fully explain this statement by referring to the collision theory.", 3, "rate-of-reaction", "Comprehension",
    "Higher temperature gives higher average kinetic energy; more molecules have energy equal to or greater than the activation energy; more effective collisions per unit time.", "Three memo points.",
    [st(1, "Effect of the higher temperature on particles", ["The average kinetic energy of the particles is higher.", "The activation energy of the reaction is lower.", "The concentration of the particles is higher.", "The surface area of the zinc is larger."], 0),
     st(1, "Number of molecules able to react", ["More molecules have kinetic energy equal to or greater than the activation energy.", "Fewer molecules have kinetic energy equal to the activation energy.", "All molecules now have energy greater than the activation energy.", "The activation energy is no longer needed."], 0),
     st(1, "Frequency of effective collisions", ["More effective collisions per unit time.", "More collisions overall, but fewer effective ones.", "Fewer but harder collisions per unit time.", "Collisions become effective without orientation."], 0)]),

  // ============ QUESTION 6: EQUILIBRIUM (17) ============
  q("6.1", "Define chemical equilibrium.", 2, "chemical-equilibrium", "Recall",
    "The stage in a reaction when the rate of the forward reaction equals the rate of the reverse reaction (or when the concentrations of reactants and products remain constant).", "Either memo definition.",
    [st(2, "Definition of chemical equilibrium", ["The stage when the rate of the forward reaction equals the rate of the reverse reaction.", "The stage when the concentrations of reactants and products are equal.", "The stage when the forward reaction stops.", "The stage when all reactants are converted to products."], 0)]),
  q("6.2.1", "COBr2(g) ⇌ CO(g) + Br2(g), ΔH > 0. Initially COBr2 is sealed in a 2 dm3 container at 73 °C; Kc = 0,19. At equilibrium 1,12 g CO(g) is present. Calculate the equilibrium concentration of COBr2(g).", 7, "chemical-equilibrium", "Application",
    "n(CO) = 1,12/28 = 0,04 mol; n(Br2) = 0,04 mol; c(CO) = c(Br2) = 0,02 mol·dm-3; Kc = [CO][Br2]/[COBr2]; 0,19 = (0,02)(0,02)/[COBr2]; [COBr2] = 2,11 × 10^-3 mol·dm-3.", "Memo OPTION 1/2 (7 marks).",
    [st(1, "n(CO) at equilibrium", ["0,04 mol", "0,08 mol", "31,36 mol", "0,02 mol"], 0),
     st(1, "n(Br2) at equilibrium", ["0,04 mol (equal to n(CO), 1:1 ratio)", "0,08 mol (twice n(CO))", "0,02 mol (half of n(CO))", "0,0 mol"], 0),
     st(1, "Equilibrium concentration of CO and Br2", ["0,02 mol·dm-3 each (divide by 2 dm3)", "0,04 mol·dm-3 each (volume ignored)", "0,08 mol·dm-3 each (multiplied by 2 dm3)", "0,01 mol·dm-3 each"], 0),
     st(1, "Kc expression", ["Kc = [CO][Br2]/[COBr2]", "Kc = [COBr2]/[CO][Br2]", "Kc = [CO] + [Br2]/[COBr2]", "Kc = [CO][Br2]"], 0),
     st(1, "Substitution", ["0,19 = (0,02)(0,02)/[COBr2]", "0,19 = (0,02)/[COBr2]", "0,19 = [COBr2]/(0,02)(0,02)", "0,19 = (0,04)(0,04)/[COBr2]"], 0),
     st(1, "Numerator and rearrangement", ["[COBr2] = (4 × 10^-4)/0,19", "[COBr2] = 0,19 × (4 × 10^-4)", "[COBr2] = 0,19/(4 × 10^-4)", "[COBr2] = (0,02)/0,19"], 0),
     st(1, "[COBr2] at equilibrium", ["2,11 × 10^-3 mol·dm-3", "4,75 × 10^2 mol·dm-3", "7,6 × 10^-5 mol·dm-3", "0,21 mol·dm-3"], 0)]),
  q("6.2.2", "Calculate the percentage of COBr2(g) that decomposed at 73 °C.", 4, "chemical-equilibrium", "Application",
    "n(COBr2)eq = cV = 2,11 × 10^-3 × 2 = 4,22 × 10^-3 mol; n(initial) = 0,04 + 4,22 × 10^-3 = 0,044 mol; % decomposed = 0,04/0,044 × 100 = 90,46 % (memo range 90,46 - 90,9 %).", "Memo OPTION 1/2.",
    [st(1, "n(COBr2) at equilibrium", ["4,22 × 10^-3 mol", "2,11 × 10^-3 mol", "0,04 mol", "8,44 × 10^-3 mol"], 0),
     st(1, "n(COBr2) initially", ["0,044 mol", "0,04 mol", "0,0358 mol", "0,0042 mol"], 0),
     st(1, "Formula for percentage decomposed", ["(amount reacted / initial amount) × 100", "(amount at equilibrium / initial amount) × 100", "(amount reacted / amount at equilibrium) × 100", "(initial amount / amount reacted) × 100"], 0),
     st(1, "Percentage decomposed", ["90,46 %", "9,54 %", "95,0 %", "10,55 %"], 0)]),
  q("6.3", "Which ONE correctly describes the Kc value when equilibrium is reached at a LOWER temperature (the forward reaction is endothermic)?", 1, "chemical-equilibrium", "Application",
    "Kc < 0,19.", "Kc < 0,19.",
    [st(1, "Kc at a lower temperature", ["Kc < 0,19", "Kc > 0,19", "Kc = 0,19", "Kc = 0"], 0)]),
  q("6.4", "The pressure of the system is decreased by increasing the container volume at 73 °C and the system reaches equilibrium. How will the number of moles of COBr2(g) be affected? Choose INCREASES, DECREASES or REMAINS THE SAME and explain.", 3, "chemical-equilibrium", "Evaluation",
    "Decreases. A decrease in pressure favours the reaction that produces the greater number of moles of gas; the forward reaction (1 mol → 2 mol) is favoured.", "Decreases (1), pressure rule (1), forward reaction favoured (1).",
    [st(1, "Effect on n(COBr2)", ["Decreases", "Increases", "Remains the same", "Becomes zero"], 0),
     st(1, "Principle", ["A decrease in pressure favours the reaction that produces the larger number of moles of gas.", "A decrease in pressure favours the reaction that produces fewer moles of gas.", "A decrease in pressure favours the endothermic reaction.", "A decrease in pressure has no effect on equilibrium."], 0),
     st(1, "Reaction favoured", ["The forward reaction is favoured.", "The reverse reaction is favoured.", "Both reactions are favoured equally.", "Neither reaction is favoured."], 0)]),

  // ============ QUESTION 7: ACIDS AND BASES (17) ============
  q("7.1.1", "NH3(g) + H2O(ℓ) ⇌ NH4+(aq) + OH-(aq). Is ammonia a WEAK or a STRONG base? Give a reason.", 2, "acids-and-bases", "Comprehension",
    "Weak; it ionises/dissociates incompletely in water.", "Weak (1), reason (1).",
    [st(1, "Strength of ammonia", ["Weak", "Strong", "Neutral", "Acidic"], 0),
     st(1, "Reason", ["It ionises incompletely in water.", "It ionises completely in water.", "It has a low concentration.", "It does not contain OH- in its formula."], 0)]),
  q("7.1.2", "Write down the conjugate acid of NH3(g).", 1, "acids-and-bases", "Recall",
    "NH4+.", "NH4+.",
    [st(1, "Conjugate acid of NH3", ["NH4+", "NH2-", "OH-", "H3O+"], 0)]),
  q("7.1.3", "Identify ONE substance in this reaction that can behave as an ampholyte in some reactions.", 1, "acids-and-bases", "Comprehension",
    "H2O (water). (The memo also accepts NH3.)", "H2O or NH3.",
    [st(1, "Ampholyte", ["H2O", "NH4+", "OH-", "None of these"], 0)]),
  q("7.2.1", "A learner adds distilled water to a soil sample, filters the mixture and measures the pH of the filtrate, then gradually adds NH3(aq). Using the graph (pH starts at about 4): is the soil sample ACIDIC or BASIC? Give a reason.", 2, "acids-and-bases", "Application",
    "Acidic; the initial pH is less than 7 (about 4).", "Acidic (1), pH < 7 (1).",
    [st(1, "Nature of the soil", ["Acidic", "Basic", "Neutral", "Cannot be determined"], 0),
     st(1, "Reason", ["The initial pH (at 0 cm3 NH3) is less than 7.", "The final pH is greater than 7.", "The pH of the graph increases when NH3 is added.", "The pH is exactly 7."], 0)], "7.2-ph-graph.png"),
  q("7.2.2", "Calculate the concentration of hydroxide ions (OH-) in the reaction mixture after the addition of 4 cm3 of NH3(aq) (read the pH from the graph).", 4, "acids-and-bases", "Application",
    "From the graph pH = 6 at 4 cm3; [H3O+] = 10^-6 = 1 × 10^-6 mol·dm-3; [OH-] = 10^-14 / 10^-6 = 1 × 10^-8 mol·dm-3.", "Memo OPTION 1/2.",
    [st(1, "pH at 4 cm3 and formula", ["pH = 6; pH = -log[H3O+]", "pH = 8; pH = -log[H3O+]", "pH = 4; pH = -log[OH-]", "pH = 6; pH = log[H3O+]"], 0),
     st(1, "[H3O+]", ["1 × 10^-6 mol·dm-3", "6 mol·dm-3", "1 × 10^-8 mol·dm-3", "1 × 10^6 mol·dm-3"], 0),
     st(1, "Relationship to find [OH-]", ["[H3O+][OH-] = 1 × 10^-14", "[H3O+] + [OH-] = 1 × 10^-14", "[H3O+] = [OH-]", "[H3O+][OH-] = 1 × 10^-7"], 0),
     st(1, "[OH-]", ["1 × 10^-8 mol·dm-3", "1 × 10^-6 mol·dm-3", "1 × 10^-20 mol·dm-3", "8 mol·dm-3"], 0)], "7.2-ph-graph.png"),
  q("7.3", "5 cm3 of an HCℓ sample is added to 495 cm3 distilled water (500 cm3 dilute HCℓ). 50 cm3 of this dilute HCℓ reacts completely with 0,29 g Na2CO3: Na2CO3(s) + 2HCℓ(aq) → 2NaCℓ(aq) + CO2(g) + H2O(ℓ). Calculate the concentration of the HCℓ sample.", 7, "acids-and-bases", "Application",
    "n(Na2CO3) = 0,29/106 = 2,74 × 10^-3 mol; n(HCℓ) = 2n(Na2CO3) = 5,47 × 10^-3 mol; c(dilute) = 5,47 × 10^-3/0,05 = 0,1094 mol·dm-3; cV(dilute) = cV(conc): 0,1094 × 500 = c × 5; c(sample) = 10,94 mol·dm-3.", "Memo OPTION 1/2.",
    [st(1, "Formula for n(Na2CO3)", ["n = m/M", "n = M/m", "n = cV", "n = mM"], 0),
     st(1, "n(Na2CO3)", ["2,74 × 10^-3 mol", "5,47 × 10^-3 mol", "3,65 × 10^2 mol", "1,37 × 10^-3 mol"], 0),
     st(1, "n(HCℓ) from the mole ratio", ["5,47 × 10^-3 mol (ratio 1 : 2)", "2,74 × 10^-3 mol (ratio 1 : 1)", "1,37 × 10^-3 mol (ratio 2 : 1)", "0,29 mol"], 0),
     st(1, "Formula for concentration of the diluted acid", ["c = n/V with V = 0,05 dm3", "c = n/V with V = 0,5 dm3", "c = nV with V = 0,05 dm3", "c = n/V with V = 50 dm3"], 0),
     st(1, "c(HCℓ) in the diluted solution", ["0,1094 mol·dm-3", "0,0109 mol·dm-3", "1,094 mol·dm-3", "0,0547 mol·dm-3"], 0),
     st(1, "Dilution relationship", ["c1V1 = c2V2: 0,1094 × 500 = c × 5", "c1V1 = c2V2: 0,1094 × 50 = c × 5", "c1V1 = c2V2: 0,1094 × 5 = c × 500", "c1/V1 = c2/V2: 0,1094/500 = c/5"], 0),
     st(1, "Concentration of the HCℓ sample", ["10,94 mol·dm-3", "0,0011 mol·dm-3", "1,094 mol·dm-3", "109,4 mol·dm-3"], 0)], "7.3-dilution.png"),

  // ============ QUESTION 8: ELECTROCHEMISTRY (14) ============
  q("8.1.1", "A standard galvanic cell with Aℓ and Ag electrodes in AgNO3(aq) is set up with a salt bridge. Write down the name of component Y (connected between the electrodes).", 1, "electrochemistry", "Recall",
    "Voltmeter.", "Voltmeter / multimeter.",
    [st(1, "Component Y", ["Voltmeter", "Ammeter in series with a resistor", "Power source", "Salt bridge"], 0)], "8.1-galvanic-cell.png"),
  q("8.1.2", "Is Aℓ the ANODE or the CATHODE?", 1, "electrochemistry", "Application",
    "Anode (Aℓ is the stronger reducing agent and is oxidised).", "Anode.",
    [st(1, "Role of Aℓ", ["Anode", "Cathode", "Salt bridge", "Electrolyte"], 0)], "8.1-galvanic-cell.png"),
  q("8.1.3", "Write down the overall (net) cell reaction that takes place when the cell is working.", 3, "electrochemistry", "Application",
    "3Ag+(aq) + Aℓ(s) → 3Ag(s) + Aℓ3+(aq) (balanced).", "Reactants (1), products (1), balanced (1).",
    [st(1, "Reactants", ["Ag+(aq) and Aℓ(s)", "Ag(s) and Aℓ3+(aq)", "Ag+(aq) and Aℓ3+(aq)", "Ag(s) and Aℓ(s)"], 0),
     st(1, "Products", ["Ag(s) and Aℓ3+(aq)", "Ag+(aq) and Aℓ(s)", "Ag+(aq) and Aℓ3+(aq)", "Ag(s) and Aℓ(s)"], 0),
     st(1, "Balanced equation", ["3Ag+ + Aℓ → 3Ag + Aℓ3+", "Ag+ + Aℓ → Ag + Aℓ3+", "Ag+ + 3Aℓ → Ag + 3Aℓ3+", "3Ag + Aℓ3+ → 3Ag+ + Aℓ"], 0)], "8.1-galvanic-cell.png"),
  q("8.1.4", "Calculate the initial emf of this cell.", 4, "electrochemistry", "Application",
    "E°cell = E°cathode - E°anode = +0,80 - (-1,66) = 2,46 V.", "Memo OPTION 1/2.",
    [st(1, "Formula", ["E°cell = E°reduction - E°oxidation", "E°cell = E°reduction + E°oxidation", "E°cell = E°oxidation - E°reduction", "E°cell = 3 × E°reduction - E°oxidation"], 0),
     st(1, "E° of Ag+/Ag", ["+0,80 V", "-0,80 V", "+2,40 V", "-1,66 V"], 0),
     st(1, "E° of Aℓ3+/Aℓ", ["-1,66 V", "+1,66 V", "-0,55 V", "+0,80 V"], 0),
     st(1, "emf", ["2,46 V", "0,86 V", "-2,46 V", "0,80 V"], 0)], "8.1-galvanic-cell.png"),
  q("8.2.1", "Half-cells: P = Zn | Zn2+(aq); Q = Cℓ2 | Cℓ-(aq); R = Cu | Cu2+(aq). Write down the NAME of a suitable electrode for half-cell Q.", 1, "electrochemistry", "Recall",
    "Platinum (or carbon).", "Pt / C.",
    [st(1, "Electrode for Cℓ2/Cℓ- half-cell", ["Platinum or carbon (inert electrode)", "Zinc", "Copper", "Chlorine gas rod"], 0)]),
  q("8.2.2", "State the standard conditions under which the half-cells should operate to ensure a fair comparison.", 2, "electrochemistry", "Recall",
    "Any two: concentration 1 mol·dm-3; temperature 25 °C (298 K); pressure 101,3 kPa (1 atm).", "Any two.",
    [st(2, "Standard conditions", ["Concentration 1 mol·dm-3, temperature 25 °C and pressure 101,3 kPa", "Concentration 0,1 mol·dm-3, temperature 0 °C and pressure 101,3 kPa", "Concentration 1 mol·dm-3, temperature 100 °C and pressure 202,6 kPa", "Concentration 2 mol·dm-3, temperature 25 °C and pressure 50 kPa"], 0)]),
  q("8.2.3", "Write down the NAME or FORMULA of the strongest reducing agent in the half-cells above.", 1, "electrochemistry", "Application",
    "Zinc (Zn).", "Zn / zinc.",
    [st(1, "Strongest reducing agent", ["Zn", "Cu", "Cℓ-", "Cℓ2"], 0)]),
  q("8.2.4", "Which combination of half-cells will produce the highest emf? Choose PR, PQ or QR. (No calculation is required.)", 1, "electrochemistry", "Application",
    "PQ (Zn is the strongest reducing agent and Cℓ2 the strongest oxidising agent).", "PQ.",
    [st(1, "Combination with highest emf", ["PQ", "PR", "QR", "All give the same emf"], 0)]),

  // ============ QUESTION 9: COPPER REFINING (9) ============
  q("9.1", "What type of power source, AC or DC, is used to drive the reaction in this copper-refining cell?", 1, "electrochemistry", "Recall",
    "DC.", "DC.",
    [st(1, "Power source", ["DC", "AC", "Either AC or DC", "Neither"], 0)], "9-copper-refining.png"),
  q("9.2", "When an electric current passes through the CuCℓ2(aq), the mass of electrode P increases. Is P the CATHODE or the ANODE? Write down the relevant half-reaction to support the answer.", 3, "electrochemistry", "Application",
    "Cathode; Cu2+(aq) + 2e- → Cu(s).", "Cathode (1); half-reaction (2).",
    [st(1, "Electrode P", ["Cathode", "Anode", "Salt bridge", "Electrolyte"], 0),
     st(2, "Half-reaction", ["Cu2+(aq) + 2e- → Cu(s)", "Cu(s) → Cu2+(aq) + 2e-", "Cu2+(aq) → Cu(s) + 2e-", "Cu(s) + 2e- → Cu2+(aq)"], 0)], "9-copper-refining.png"),
  q("9.3", "The impure copper contains zinc impurities which are oxidised to zinc ions. Refer to the relative strengths of oxidising agents to explain why zinc ions will not influence the quality of the pure copper produced in this cell.", 3, "electrochemistry", "Evaluation",
    "Cu2+ is a stronger oxidising agent than Zn2+, so Zn2+ ions will not be reduced (to Zn).", "Three memo points.",
    [st(1, "Oxidising agents compared", ["Cu2+ is a stronger oxidising agent than Zn2+.", "Zn2+ is a stronger oxidising agent than Cu2+.", "Cu is a stronger reducing agent than Zn.", "Cu2+ and Zn2+ are equally strong oxidising agents."], 0),
     st(1, "Consequence", ["Cu2+ is reduced in preference to Zn2+.", "Zn2+ is reduced in preference to Cu2+.", "Zn is oxidised at the cathode.", "Both ions are reduced at the same rate."], 0),
     st(1, "Result for the pure copper", ["Zn2+ ions are not reduced to Zn, so the copper is not contaminated.", "Zn2+ ions are reduced to Zn, which dissolves in the copper.", "Zn2+ ions are oxidised at the cathode.", "Zn2+ ions form a layer on the anode only."], 0)], "9-copper-refining.png"),
  q("9.4.1", "Electrodes P and Q are now replaced by carbon electrodes (electrolyte concentrated CuCℓ2(aq)). What will be observed at electrode Q (the anode)?", 1, "electrochemistry", "Application",
    "(Chlorine) gas/bubbles form.", "Gas bubbles of chlorine.",
    [st(1, "Observation at Q", ["Gas bubbles (chlorine) form.", "A brown/red-orange copper layer forms.", "The electrode becomes thinner and dissolves.", "No change is observed."], 0)], "9-copper-refining.png"),
  q("9.4.2", "How will the concentration of the electrolyte change as the reaction proceeds? Choose INCREASES, DECREASES or REMAINS THE SAME.", 1, "electrochemistry", "Evaluation",
    "Decreases (Cu2+ and Cℓ- are used up).", "Decreases.",
    [st(1, "Change in electrolyte concentration", ["Decreases", "Increases", "Remains the same", "Increases then decreases"], 0)], "9-copper-refining.png"),

  // ============ QUESTION 10: CHEMICAL INDUSTRY (14) ============
  q("10.1.1", "Process X: I: A + 5O2(g) → 4NO + 6H2O(g); II: 2NO(g) + O2(g) → 2B; III: B + H2O(g) → HNO3(g) + NO(g). Process Y: N2(g) + 3H2(g) ⇌ 2NH3(g). Both lead to ammonium nitrate. Write down the NAME of substance A.", 1, "chemical-industry", "Application",
    "Ammonia.", "Ammonia.",
    [st(1, "Substance A (4A + 5O2 → 4NO + 6H2O)", ["Ammonia", "Nitrogen", "Nitrogen dioxide", "Nitric acid"], 0)], "10.1-processes.png"),
  q("10.1.2", "Write down the FORMULA of substance B.", 1, "chemical-industry", "Application",
    "NO2.", "NO2.",
    [st(1, "Substance B (2NO + O2 → 2B)", ["NO2", "N2O", "N2O4", "HNO3"], 0)], "10.1-processes.png"),
  q("10.1.3", "Write down the NAME given for reaction I.", 1, "chemical-industry", "Recall",
    "Catalytic oxidation of ammonia.", "Catalytic oxidation of ammonia.",
    [st(1, "Name of reaction I", ["Catalytic oxidation of ammonia", "Haber process", "Contact process", "Neutralisation"], 0)], "10.1-processes.png"),
  q("10.1.4", "Write down the NAME or FORMULA of the catalyst used in reaction I.", 1, "chemical-industry", "Recall",
    "Platinum (Pt).", "Pt / platinum.",
    [st(1, "Catalyst in reaction I", ["Platinum (Pt)", "Iron (Fe)", "Vanadium(V) oxide (V2O5)", "Nickel (Ni)"], 0)], "10.1-processes.png"),
  q("10.1.5", "Write down the name of process X.", 1, "chemical-industry", "Recall",
    "Ostwald process.", "Ostwald.",
    [st(1, "Process X", ["Ostwald process", "Haber process", "Contact process", "Solvay process"], 0)], "10.1-processes.png"),
  q("10.1.6", "Write down the name of process Y.", 1, "chemical-industry", "Recall",
    "Haber process.", "Haber.",
    [st(1, "Process Y", ["Haber process", "Ostwald process", "Contact process", "Fractional distillation"], 0)], "10.1-processes.png"),
  q("10.1.7", "Write down the balanced equation for the preparation of ammonium nitrate from the products obtained in process X (HNO3) and process Y (NH3).", 3, "chemical-industry", "Application",
    "NH3 + HNO3 → NH4NO3.", "Reactants (1), product (1), balanced (1).",
    [st(1, "Reactants", ["NH3 and HNO3", "NO and NH3", "N2 and HNO3", "NH4+ and NO2"], 0),
     st(1, "Product", ["NH4NO3", "NH4NO2", "(NH4)2SO4", "NaNO3"], 0),
     st(1, "Balanced equation", ["NH3 + HNO3 → NH4NO3", "2NH3 + HNO3 → NH4NO3", "NH3 + 2HNO3 → NH4NO3", "NH3 + HNO3 → NH4NO3 + H2O"], 0)], "10.1-processes.png"),
  q("10.2.1", "A 15 kg bag of fertiliser contains 5% phosphorus, 10% nitrogen and 15% potassium. Calculate the mass of phosphorus in the bag.", 2, "chemical-industry", "Application",
    "m(P) = 5/100 × 15 = 0,75 kg.", "Method (1), answer (1).",
    [st(1, "Method", ["m(P) = 5/100 × 15 kg", "m(P) = 5/30 × 15 kg × 100", "m(P) = 15/5 kg", "m(P) = 5 × 15/10 kg"], 0),
     st(1, "Mass of phosphorus", ["0,75 kg", "7,5 kg", "3,0 kg", "0,075 kg"], 0)]),
  q("10.2.2", "Calculate the mass of filler in the bag (15 kg bag; 5% P, 10% N, 15% K).", 3, "chemical-industry", "Application",
    "% fertiliser = 10 + 5 + 15 = 30 %; % filler = 70 %; m(filler) = 70/100 × 15 = 10,5 kg.", "Memo 3 marks.",
    [st(1, "Total percentage of nutrients", ["30 %", "15 %", "10 %", "50 %"], 0),
     st(1, "Percentage of filler", ["70 %", "30 %", "85 %", "90 %"], 0),
     st(1, "Mass of filler", ["10,5 kg", "4,5 kg", "12,75 kg", "1,05 kg"], 0)]),
];

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
