// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2025, National
// (English).
// Source: single combined PDF (question paper + marking guideline) fetched
// from stanmorephysics.com. QP is pages 1-20 of that PDF (16 pages of
// content + 4 data-sheet pages), memo is pages 21-42; page-by-page
// cross-check of question numbers/marks against the memo's answers found no
// stray or mismatched pages.
//
// Paper structure: NINE compulsory questions (no choice), 150 marks, 3 hours.
// All 150 marks are included here.
//
// This is the first Physical Sciences: Chemistry (P2) paper ingested into
// this app. It reuses the SAME subject row as the existing Physics (P1)
// papers ("Physical Sciences" — seed.ts matches subjects by name, so this is
// not a duplicate) and the SAME four CAPS cognitive levels
// (Recall/Comprehension/Application/Evaluation), but defines entirely NEW
// topics, since P2 (Chemistry) covers different CAPS content from P1
// (Physics): organic molecules, intermolecular forces, stoichiometry, rate
// and extent of reaction, chemical equilibrium, acids and bases, and
// electrochemical reactions (galvanic/electrolytic cells) — each topic here
// is only created because it is actually examined somewhere in this paper.
//
// Diagrams (reaction-rate graphs, the Maxwell-Boltzmann distribution curve,
// the concentration-time graph, the electroplating/refining/galvanic cell
// diagrams, the reactions table in Q4.1, and the organic-compounds table in
// Q2) are vector line-drawings rendered directly into the page content
// stream, not separate embedded raster images, so they were cropped from
// full-page PNG renders (via Pillow) rather than extracted as clean
// standalone images. The site's watermark ("Stanmorephysics.com" + a faint
// leaning-tower graphic) appears faintly on the source pages; crops were
// framed to avoid it landing on exam content.
//
// Calculation questions (2.3.2, 5.2.2, 6.2.3, 7.2.1, 7.2.2, 8.4, 9.2.3) use
// `steps` instead of `marking_points`: the student works the problem out on
// paper as normal, then picks the option they got for each mark-earning step
// (formula, intermediate value, final answer) from a few choices, rather
// than typing anything. Distractors are chosen to trap specific real errors
// (wrong mole ratio, wrong formula, using the wrong given value, arithmetic
// slips seen elsewhere in the official memo's own worked options).
//
// FLAG for review: the official memo's OPTION 1 working for 6.2.3 contains
// an internal arithmetic slip (x = 1,27 mol leads to n(NH4HS)eq = 0,10 mol,
// which the memo's OPTION 1 then multiplies out to m = 5,1 g — but the
// memo's own marking-criteria box states the "CORRECT final answer" is
// m = 5,61 g with an accepted range of 4,96-5,74 g, and OPTION 2/OPTION 3 in
// the same memo reach 5,61 g / 5,74 g respectively via slightly different
// rounding paths). The final numeric step for 6.2.3 here uses the
// marking-criteria box's stated correct answer (5,61 g) rather than
// OPTION 1's internally-inconsistent 5,1 g, since the criteria box is the
// authoritative statement of what earns the mark.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2025-p2";

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
  {
    key: "organic-chemistry",
    name: "Organic Molecules: Nomenclature, Isomers and Reactions",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Organic Chemistry (Nomenclature, Isomerism and Reactions)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=organic+chemistry+nomenclature+isomers+reactions+grade+12+physical+sciences",
  },
  {
    key: "intermolecular-forces",
    name: "Intermolecular Forces",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Chemical Bonding (Intermolecular Forces)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=intermolecular+forces+grade+12+physical+sciences",
  },
  {
    key: "stoichiometry",
    name: "Stoichiometry and the Mole Concept",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Quantitative Aspects of Chemical Change (Stoichiometry)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=stoichiometry+gas+volumes+grade+12+physical+sciences",
  },
  {
    key: "rate-of-reaction",
    name: "Rate and Extent of Reaction",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Reaction Rate (Rate and Extent of Reaction)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=rate+of+reaction+collision+theory+grade+12+physical+sciences",
  },
  {
    key: "chemical-equilibrium",
    name: "Chemical Equilibrium",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Chemical Equilibrium (Le Chatelier's Principle, Kc)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=chemical+equilibrium+le+chatelier+kc+grade+12+physical+sciences",
  },
  {
    key: "acids-and-bases",
    name: "Acids and Bases",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Physical Sciences — Acids and Bases (Ka, pH, Titrations)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=acids+and+bases+ph+titration+grade+12+physical+sciences",
  },
  {
    key: "electrochemistry",
    name: "Electrochemical Reactions (Galvanic and Electrolytic Cells)",
    caps_term: "Term 3",
    textbook_ref: "Grade 12 Physical Sciences — Electrochemistry (Galvanic and Electrolytic Cells)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=galvanic+electrolytic+cells+grade+12+physical+sciences",
  },
];

export const paper = {
  year: 2025,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/04/NSC-Physical-Sciences-Grade-12-November-2025-P2-and-Memo.pdf" as string | null,
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

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "Which ONE of the following is the name of the functional group of propan-1-ol? (A) Carboxyl (B) Carbonyl (C) Hydroxyl (D) Formyl",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "C — Hydroxyl. Propan-1-ol is an alcohol, and the functional group of an alcohol is the hydroxyl group (-OH).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The organic compound C2H4 is converted to an alkane as shown by the reaction below: C2H4 → Alkane. Which ONE of the following is a suitable catalyst for this reaction? (A) Lead (B) Platinum (C) Hydrogen (D) Iron",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "B — Platinum. This is a hydrogenation (addition) reaction converting an alkene to an alkane; platinum (or nickel/palladium) is used as a catalyst.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Which of the following statements ALWAYS apply to compounds that are structural isomers of one another? (i) They belong to the same homologous series. (ii) They have the same structural formula. (iii) They have the same molecular formula. (A) (iii) only (B) (i) and (iii) only (C) (i) and (ii) only (D) (i), (ii) and (iii)",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "A — (iii) only. Structural isomers always share the same molecular formula, but need not belong to the same homologous series (e.g. functional isomers) and by definition have different structural formulae.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Magnesium ribbon of mass 2 g reacts with excess hydrochloric acid of concentration 0,1 mol·dm⁻³ at 20 °C: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). Which ONE of the following changes will NOT increase the initial rate of the reaction? (A) Using 2 g of powdered magnesium (B) Increasing the temperature of HCl to 30 °C (C) Using a longer piece of the magnesium ribbon (D) Doubling the volume of the hydrochloric acid used",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "D — Doubling the volume of the hydrochloric acid used. This increases the total moles of HCl available but does not change its concentration, so the initial reaction rate (which depends on concentration) is unaffected.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "The following reaction reaches equilibrium in a closed container: H2(g) + S(s) ⇌ H2S(g), ΔH < 0. The reaction rate versus time graph for the reaction shows both the forward and reverse rate curves converging to a steady value, then both jumping up to a new, higher steady value at time t1. What change was made to the system at time t1? (A) The pressure was increased at a constant temperature. (B) The volume of the container was increased. (C) The temperature was increased. (D) More hydrogen was added to the system.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "A — The pressure was increased at a constant temperature. Both the forward and reverse rates jump up together to a new, higher steady value, consistent with a pressure/concentration increase (compression) rather than a change that would favour only one direction (like a temperature change) or add only one reactant.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.5-rate-time-graph.png`,
  },
  {
    number: "1", sub_number: "1.6",
    text: "A hypothetical endothermic reaction is given below: A(g) + B(g) ⇌ AB(g). The activation energy for the reverse reaction is 50 kJ·mol⁻¹. Which ONE of the following is possible for the reaction above? (A) The heat of the reaction is +70 kJ·mol⁻¹. (B) The activation energy for the forward reaction is 50 kJ·mol⁻¹. (C) The energy of the activated complex is 40 kJ·mol⁻¹. (D) The activation energy for the forward reaction is 40 kJ·mol⁻¹.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "A — The heat of the reaction is +70 kJ·mol⁻¹. Since Ea(forward) = ΔH + Ea(reverse), an endothermic reaction (ΔH > 0) must have Ea(forward) > Ea(reverse) = 50 kJ·mol⁻¹; ΔH = +70 kJ·mol⁻¹ gives a valid Ea(forward) = 120 kJ·mol⁻¹. The other options would each require a zero or negative ΔH, which contradicts the reaction being endothermic.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "The products for the reaction between a metal oxide and an acid are ... (A) a salt and water. (B) a salt and hydrogen gas. (C) a salt and carbon dioxide. (D) a salt, water and carbon dioxide.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "A — a salt and water. A metal oxide reacting with an acid is a neutralisation reaction, producing a salt and water.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 2, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "The concentration of each of the four solutions below is 0,1 mol·dm⁻³: HNO3(aq), NH3(aq), NaOH(aq) and H2CO3(aq). Which ONE of the following CORRECTLY places the solutions in order of INCREASING pH? (A) H2CO3 ; HNO3 ; NH3 ; NaOH (B) HNO3 ; H2CO3 ; NH3 ; NaOH (C) NaOH ; NH3 ; H2CO3 ; HNO3 (D) HNO3 ; H2CO3 ; NaOH ; NH3",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "B — HNO3 ; H2CO3 ; NH3 ; NaOH. HNO3 is a strong acid (lowest pH), H2CO3 is a weak acid, NH3 is a weak base, and NaOH is a strong base (highest pH).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.9",
    text: "A galvanic cell consists of the following half-cells: Fe3+(aq)|Fe2+(aq) and Ni2+(aq)|Ni(s). Which ONE of the following statements is CORRECT for this cell? (A) Ni2+ is reduced and Fe2+ is oxidised. (B) Ni2+ is oxidised and Fe3+ is reduced. (C) Pt is the electrode at the cathode. (D) Ni is the electrode at the cathode.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "C — Pt is the electrode at the cathode. Fe3+/Fe2+ (E° = +0,77 V) is reduced at the cathode; since both species in this half-cell are in solution, an inert electrode (Pt) is required there. Ni (E° = -0,27 V) is oxidised at the anode.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "The set-up for electroplating an iron medal with silver is shown in a simplified diagram: the iron medal and a silver rod are both dipped in an electrolyte and connected to a power source. Which ONE of the following combinations for the ANODE and REACTION AT THE CATHODE is CORRECT? (A) Anode: Iron medal; Cathode reaction: Ag+(aq) + e⁻ → Ag(s) (B) Anode: Silver rod; Cathode reaction: Fe2+(aq) + 2e⁻ → Fe(s) (C) Anode: Iron medal; Cathode reaction: Ag(s) → Ag+(aq) + e⁻ (D) Anode: Silver rod; Cathode reaction: Ag+(aq) + e⁻ → Ag(s)",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "D — Anode: Silver rod; Cathode reaction: Ag+(aq) + e⁻ → Ag(s). The silver rod is the anode (sacrificial source of Ag+ ions), and silver is deposited (reduced) onto the iron medal at the cathode.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.10-electroplating.png`,
  },

  // ============ QUESTION 2: ORGANIC NOMENCLATURE AND STOICHIOMETRY (22 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The letters A to G in the table represent organic compounds: A is CH3-CO-CH(CH3)-CH3 (drawn out in full structural form), B is a dichloro-dimethyl-substituted heptane (drawn out in full structural form), C is CH3CH(CH3)CH2CHO, D is C4H10O, E is C3H8, F is Pentane, and G is a branched hexene (drawn out in full structural form, 3-ethyl-2-methylhex-2-ene). Write down the LETTER that represents an alcohol.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "D. D has molecular formula C4H10O, which (as a straight-chain compound in this context) is a butanol — an alcohol.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Write down the LETTERS of the TWO compounds that are functional isomers of one another.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "A and C. A (3-methylbutan-2-one, a ketone) and C (CH3CH(CH3)CH2CHO, an aldehyde) are both C5H10O — the same molecular formula but different functional groups, so they are functional isomers.",
    marking_notes: "Both letters A and C required for the mark.",
    marking_points: [{ marks: 1, description: "A and C", keywords: ["a and c"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Write down the LETTERS of the TWO compounds that belong to the same homologous series.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "E and F. E (C3H8, propane) and F (pentane) are both straight-chain alkanes, so they belong to the same homologous series.",
    marking_notes: "Both letters E and F required for the mark.",
    marking_points: [{ marks: 1, description: "E and F", keywords: ["e and f"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Write down the IUPAC name of compound A.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "3-methylbutan-2-one (accept 3-methyl-2-butanone/methylbutanone).",
    marking_notes: "Full marks require the correct stem (butanone), the substituent (methyl) correctly identified, and the complete IUPAC name including numbering, sequence, hyphens and commas.",
    marking_points: [
      { marks: 1, description: "correct stem: butanone", keywords: ["butanone"] },
      { marks: 1, description: "substituent (methyl) correctly identified", keywords: ["methyl"] },
      { marks: 1, description: "IUPAC name fully correct, including numbering and hyphens: 3-methylbutan-2-one", keywords: ["3 methylbutan 2 one", "3 methyl 2 butanone"] },
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Write down the IUPAC name of compound B.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2,6-dichloro-2,5-dimethylheptane.",
    marking_notes: "Full marks require the correct stem (heptane), the substituents (dichloro and dimethyl) correctly identified, and the complete IUPAC name including numbering, sequence, hyphens and commas.",
    marking_points: [
      { marks: 1, description: "correct stem: heptane", keywords: ["heptane"] },
      { marks: 1, description: "substituents (dichloro and dimethyl) correctly identified", keywords: ["dichloro", "dimethyl"] },
      { marks: 1, description: "IUPAC name fully correct: 2,6-dichloro-2,5-dimethylheptane", keywords: ["2 6 dichloro 2 5 dimethylheptane"] },
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Write down the IUPAC name of compound G.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "3-ethyl-2-methylhex-2-ene (accept 3-ethyl-2-methyl-2-hexene).",
    marking_notes: "Full marks require the correct stem (hexene), the substituents (ethyl and methyl) correctly identified, and the complete IUPAC name including numbering, sequence, hyphens and commas.",
    marking_points: [
      { marks: 1, description: "correct stem: hexene", keywords: ["hexene"] },
      { marks: 1, description: "substituents (ethyl and methyl) correctly identified", keywords: ["ethyl", "methyl"] },
      { marks: 1, description: "IUPAC name fully correct: 3-ethyl-2-methylhex-2-ene", keywords: ["3 ethyl 2 methylhex 2 ene", "3 ethyl 2 methyl 2 hexene"] },
    ],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.4",
    text: "Write down the STRUCTURAL FORMULAE of two STRAIGHT CHAIN positional isomers of compound D (C4H10O).",
    marks: 4, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Butan-1-ol: H-O-C(H)(H)-C(H)(H)-C(H)(H)-C(H)(H)-H, with the hydroxyl group on the 1st carbon. Butan-2-ol: C(H)(H)(H)-C(H)(O-H)-C(H)(H)-C(H)(H)-H, with the hydroxyl group on the 2nd carbon.",
    marking_notes: "One mark per correctly-placed hydroxyl group (1st carbon for one isomer, 2nd carbon for the other) and one mark per otherwise-correct whole structure, for each of the two isomers (max 4). More than one functional group or the wrong functional group scores 0 for that molecule; condensed structural formulae are accepted for a maximum of 2/4; the O-H bond need not be shown.",
    marking_points: [
      { marks: 2, description: "first isomer: hydroxyl group on the 1st carbon, whole structure correct (butan-1-ol)", keywords: ["butan 1 ol", "1st carbon"] },
      { marks: 2, description: "second isomer: hydroxyl group on the 2nd carbon, whole structure correct (butan-2-ol)", keywords: ["butan 2 ol", "2nd carbon"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Compound E, C3H8(g), reacts with oxygen, O2(g), according to the balanced equation: C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g). Write down the name for this type of reaction.",
    marks: 1, topicKey: "stoichiometry", cognitiveLevelName: "Recall",
    model_answer: "Combustion (accept oxidation).",
    marking_notes: "Accept 'combustion' or 'oxidation'.",
    marking_points: [{ marks: 1, description: "combustion / oxidation", keywords: ["combustion", "oxidation"] }],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Initially 8 cm³ of compound E and 50 cm³ of oxygen were injected into a container of adjustable volume and allowed to react, according to C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g). Calculate the TOTAL volume of the GASES present in the container at the end of the reaction.",
    marks: 5, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "V(O2)used = 5 × V(C3H8) = 5(8) = 40 cm³. V(CO2)formed = 3 × V(C3H8) = 24 cm³. V(H2O)formed = 4 × V(C3H8) = 32 cm³. V(O2)unused = 50 − 40 = 10 cm³. Total volume of gas in the container = 10 + 24 + 32 = 66 cm³.",
    marking_notes: "Marking points: volume of O2 used (40 cm³, using the 1:5 mole ratio with C3H8); volumes of CO2 and H2O formed (24 cm³ and 32 cm³); volume of O2 remaining (10 cm³); addition of the three final volumes; correct final answer 66 cm³ (or 0,066 dm³).",
    steps: [
      {
        marks: 1,
        description: "What is the volume of O2 used, using the mole ratio V(O2) = 5 × V(C3H8)?",
        options: ["40 cm³", "8 cm³", "50 cm³", "24 cm³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What are the volumes of CO2 and H2O formed, using the mole ratios 3 × V(C3H8) and 4 × V(C3H8)?",
        options: ["24 cm³ CO2 and 32 cm³ H2O", "8 cm³ CO2 and 8 cm³ H2O", "40 cm³ CO2 and 50 cm³ H2O", "3 cm³ CO2 and 4 cm³ H2O"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What volume of O2 remains unreacted (50 cm³ initial − volume used)?",
        options: ["10 cm³", "0 cm³", "50 cm³", "40 cm³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do you find the total volume of gas left in the container?",
        options: [
          "Add the remaining O2 to the CO2 and H2O formed (10 + 24 + 32)",
          "Add all the initial volumes together (8 + 50)",
          "Subtract the CO2 formed from the O2 used",
          "Multiply the remaining O2 by the mole ratio",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total volume of gas in the container at the end of the reaction?",
        options: ["66 cm³", "82 cm³", "58 cm³", "74 cm³"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 3: INTERMOLECULAR FORCES (12 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "Two bottles contain compounds A and B with the same molecular formula, C4H8O2. These compounds are straight chain organic molecules that belong to two different homologous series. Define the term homologous series.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "A series of organic compounds that can be described by the same general formula (or: a series of organic compounds in which one member differs from the next by a CH2 group).",
    marking_notes: "Either the general-formula wording or the CH2-difference wording is accepted in full.",
    marking_points: [{ marks: 1, description: "same general formula / each member differs from the next by a CH2 group", keywords: ["same general formula", "ch2 group"] }],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Identify the TWO homologous series to which compounds A and B (C4H8O2) belong.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Ester and carboxylic acid.",
    marking_notes: "Both 'ester' and 'carboxylic acid' required.",
    marking_points: [
      { marks: 1, description: "ester", keywords: ["ester"] },
      { marks: 1, description: "carboxylic acid", keywords: ["carboxylic acid"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "The vapour pressures of compounds A and B (both C4H8O2) at a given temperature are: Compound A = 0,071 kPa; Compound B = 9,7 kPa. Write down the STRUCTURAL FORMULA of compound A.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3-CH2-CH2-COOH (butanoic acid): H-C(H)(H)-C(H)(H)-C(H)(H)-C(=O)-O-H.",
    marking_notes: "Marking points: correct functional group (carboxylic acid); whole structure correct. Compound A has the much lower vapour pressure, so the higher boiling point, consistent with hydrogen bonding (a carboxylic acid), not just dipole-dipole forces (an ester).",
    marking_points: [
      { marks: 1, description: "correct functional group: carboxylic acid", keywords: ["carboxylic acid", "cooh"] },
      { marks: 1, description: "whole structure correct: butanoic acid", keywords: ["butanoic acid"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Write down the IUPAC name for a possible compound B (C4H8O2, the other homologous series, with the much higher vapour pressure of 9,7 kPa).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Methyl propanoate (accept propyl methanoate or ethyl ethanoate).",
    marking_notes: "Any one of methyl propanoate / propyl methanoate / ethyl ethanoate is accepted in full (2 marks); any other answer scores 0.",
    marking_points: [{ marks: 2, description: "methyl propanoate / propyl methanoate / ethyl ethanoate", keywords: ["methyl propanoate", "propyl methanoate", "ethyl ethanoate"] }],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "Write down the strongest type of Van der Waals forces between the molecules in compound A (the carboxylic acid).",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "Hydrogen bonds.",
    marking_notes: "Accept only 'hydrogen bonds'.",
    marking_points: [{ marks: 1, description: "hydrogen bonds", keywords: ["hydrogen bond"] }],
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Write down the strongest type of Van der Waals forces between the molecules in compound B (the ester).",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "Dipole-dipole forces.",
    marking_notes: "Accept only 'dipole-dipole forces'.",
    marking_points: [{ marks: 1, description: "dipole-dipole forces", keywords: ["dipole dipole"] }],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Which compound, A or B, has a higher boiling point? Give a reason for the answer by referring to the strength of the intermolecular forces.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "A. The hydrogen bonds in A are stronger than the dipole-dipole forces in B (equivalently: A has stronger intermolecular forces than B).",
    marking_notes: "Must identify A and give a valid comparison of intermolecular force strength (hydrogen bonds stronger than / dipole-dipole forces weaker than).",
    marking_points: [
      { marks: 1, description: "compound A", keywords: ["a"] },
      { marks: 1, description: "hydrogen bonds are stronger than dipole-dipole forces", keywords: ["hydrogen bond", "stronger"] },
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "The boiling point of compound A is measured again on another day when the atmospheric pressure is much lower. How will the boiling point of this compound now be affected? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "intermolecular-forces", cognitiveLevelName: "Evaluation",
    model_answer: "Decreases.",
    marking_notes: "Accept only 'decreases'.",
    marking_points: [{ marks: 1, description: "decreases", keywords: ["decrease"] }],
  },

  // ============ QUESTION 4: ORGANIC REACTIONS (17 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "Study the three organic reactions: I: HBr(g) + T → W. II: W + NaOH(aq) → CH3CH(OH)CH2CH3 + R. III: CH3CH(OH)CH2CH3 --S--> T + H2O(l). Compounds T and W are organic compounds; R and S are inorganic substances. Consider only the major products. Write down the IUPAC name of compound W.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-bromobutane.",
    marking_notes: "Both the substituent position/name (2-bromo) and the stem (butane) required.",
    marking_points: [{ marks: 2, description: "2-bromobutane", keywords: ["2 bromobutane"] }],
    image_url: `${IMG}/4.1-reactions-table.png`,
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Write down the NAME or FORMULA of R.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "NaBr (sodium bromide).",
    marking_notes: "Accept the name or the formula.",
    marking_points: [{ marks: 1, description: "NaBr / sodium bromide", keywords: ["nabr", "sodium bromide"] }],
    image_url: `${IMG}/4.1-reactions-table.png`,
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "Write down TWO names for the type of reaction in reaction I (HBr(g) + T → W).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Addition, and hydrohalogenation (or hydrobromination).",
    marking_notes: "Both an 'addition' name and a more specific name (hydrohalogenation/hydrobromination) required for full marks.",
    marking_points: [
      { marks: 1, description: "addition", keywords: ["addition"] },
      { marks: 1, description: "hydrohalogenation / hydrobromination", keywords: ["hydrohalogenation", "hydrobromination"] },
    ],
    image_url: `${IMG}/4.1-reactions-table.png`,
  },
  {
    number: "4", sub_number: "4.1.4",
    text: "Write down the NAME or FORMULA of S (the substance that converts CH3CH(OH)CH2CH3 to T + H2O).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "(Concentrated) sulphuric acid / H2SO4 (accept phosphoric acid / H3PO4).",
    marking_notes: "Accept concentrated H2SO4 or H3PO4, by name or formula.",
    marking_points: [{ marks: 1, description: "concentrated sulphuric acid (H2SO4) or phosphoric acid (H3PO4)", keywords: ["sulphuric acid", "h2so4", "phosphoric acid", "h3po4"] }],
    image_url: `${IMG}/4.1-reactions-table.png`,
  },
  {
    number: "4", sub_number: "4.1.5",
    text: "Write down the STRUCTURAL formula of compound T.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "But-2-ene: H-C(H)(H)-C(H)=C(H)-C(H)(H)-H.",
    marking_notes: "Marking points: correct functional group (alkene, C=C double bond); whole structure correct.",
    marking_points: [
      { marks: 1, description: "correct functional group: alkene (C=C double bond)", keywords: ["alkene", "double bond"] },
      { marks: 1, description: "whole structure correct: but-2-ene", keywords: ["but 2 ene"] },
    ],
    image_url: `${IMG}/4.1-reactions-table.png`,
  },
  {
    number: "4", sub_number: "4.1.6",
    text: "Compound W can be converted to compound T in one step. State, besides heat, ONE other reaction condition for this conversion.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Concentrated strong base (e.g. concentrated NaOH, KOH or LiOH).",
    marking_notes: "Must specify a concentrated strong base.",
    marking_points: [{ marks: 1, description: "concentrated strong base (NaOH/KOH/LiOH)", keywords: ["concentrated", "strong base"] }],
    image_url: `${IMG}/4.1-reactions-table.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "A compound with the formula C10H22 undergoes a cracking reaction according to the equation: C10H22(l) → 2X(g) + C4H10(g). Define the term cracking.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "The chemical process/reaction in which longer chain hydrocarbon/alkane molecules are broken down to shorter (more useful) molecules.",
    marking_notes: "Key phrases 'longer chain hydrocarbon/alkane' and 'broken down' and 'shorter molecules' must be in the correct context; omitting any one in context costs 1 mark.",
    marking_points: [
      { marks: 1, description: "longer chain hydrocarbon/alkane molecules", keywords: ["longer chain", "hydrocarbon", "alkane"] },
      { marks: 1, description: "broken down to shorter (more useful) molecules", keywords: ["broken down", "shorter"] },
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "The mixture of the two products (2X(g) and C4H10(g)) is bubbled in bromine water, Br2(aq), in a darkened room. State ONE change, besides a change in temperature, that will be observed when the mixture is bubbled in Br2(aq).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Decolourisation (the colour fades / becomes lighter / colourless).",
    marking_notes: "Accept decolourisation or an equivalent description of the colour fading.",
    marking_points: [{ marks: 1, description: "decolourisation / colour fades", keywords: ["decolouris", "colour fades", "colourless"] }],
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "Write down the STRUCTURAL FORMULA of X.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Propene: H2C=CH-CH3, i.e. C(H)(H)=C(H)-C(H)(H)(H).",
    marking_notes: "Marking points: correct functional group (alkene, C=C double bond); whole structure correct.",
    marking_points: [
      { marks: 1, description: "correct functional group: alkene (C=C double bond)", keywords: ["alkene", "double bond"] },
      { marks: 1, description: "whole structure correct: propene", keywords: ["propene"] },
    ],
  },
  {
    number: "4", sub_number: "4.2.4",
    text: "Which compound, X or C4H10, reacts faster with Br2(aq)? Explain the answer.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Evaluation",
    model_answer: "X (propene, C3H6). X is unsaturated / has a double bond / is an alkene, and undergoes addition; alkenes are more reactive than alkanes (addition is faster than substitution and does not require UV/light, unlike the substitution reaction alkanes need).",
    marking_notes: "Must identify X, state it is unsaturated/an alkene, and give one valid reason (undergoes addition / alkenes more reactive than alkanes / addition faster than substitution / addition doesn't need UV light).",
    marking_points: [
      { marks: 1, description: "X (C3H6 / propene)", keywords: ["x"] },
      { marks: 1, description: "X is unsaturated / has a double bond / is an alkene", keywords: ["unsaturated", "double bond", "alkene"] },
      { marks: 1, description: "X undergoes addition, which is faster than substitution and does not need UV/light", keywords: ["addition", "faster", "substitution"] },
    ],
  },

  // ============ QUESTION 5: RATE AND EXTENT OF REACTION (20 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: "Define the term reaction rate.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "The change in concentration of products/reactants per unit time (equivalently: the rate of change in amount/number of moles/volume/mass of products or reactants).",
    marking_notes: "Must refer to a change per unit time (in concentration, amount, moles, volume or mass) of products or reactants.",
    marking_points: [{ marks: 2, description: "change in concentration/amount/moles/volume/mass of products or reactants per unit time", keywords: ["change in concentration", "per unit time", "per time"] }],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Carbon monoxide, CO(g), reacts with oxygen, O2(g), to form carbon dioxide, CO2(g), in a sealed container according to the balanced equation: 2CO(g) + O2(g) → 2CO2(g). The graph shows the concentration of O2(g) versus time, decreasing steadily from about 0,27 mol·dm⁻³ at t = 0 s to about 0,02 mol·dm⁻³ at t = 60 s, with the steepest part of the curve near the start. At which time, 10 s or 30 s, is the reaction rate higher?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "10 s.",
    marking_notes: "Accept only '10 s' (or '10').",
    marking_points: [{ marks: 1, description: "10 s", keywords: ["10"] }],
    image_url: `${IMG}/5.2-conc-time-graph.png`,
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "The reaction takes place in a 3 dm³ container. Using the graph (concentration of O2(g) is approximately 0,27 mol·dm⁻³ at t = 0 s and approximately 0,15 mol·dm⁻³ at t = 10 s), calculate the average rate (in mol·s⁻¹) at which CO2(g) is formed in the first 10 s.",
    marks: 5, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Rate(O2) = -Δc(O2)/Δt = -(0,15 - 0,27)/(10 - 0) = 0,012 mol·dm⁻³·s⁻¹. Converting to mol·s⁻¹: rate(O2) = cV = (0,012)(3) = 0,036 mol·s⁻¹. Using the mole ratio n(O2):n(CO2) = 1:2, rate(CO2) = 2 × rate(O2) = 2 × 0,036 = 0,072 mol·s⁻¹.",
    marking_notes: "Marking points: calculate the change in concentration of O2 over the first 10 s; substitute 10 s into the rate formula; multiply the rate/concentration of O2 by the 3 dm³ volume; use the mole ratio n(O2):n(CO2) = 1:2; correct final answer 0,072 mol·s⁻¹ (accepted range 0,06-0,072 mol·s⁻¹).",
    steps: [
      {
        marks: 1,
        description: "What is the change in concentration of O2 over the first 10 s (from the graph)?",
        options: ["-0,12 mol·dm⁻³", "0,27 mol·dm⁻³", "0,15 mol·dm⁻³", "-0,42 mol·dm⁻³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the rate of change of concentration of O2, substituting the 10 s time interval?",
        options: ["0,012 mol·dm⁻³·s⁻¹", "0,12 mol·dm⁻³·s⁻¹", "0,027 mol·dm⁻³·s⁻¹", "1,2 mol·dm⁻³·s⁻¹"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do you convert the rate of O2 in mol·dm⁻³·s⁻¹ to mol·s⁻¹, using the 3 dm³ container?",
        options: ["Multiply by 3 dm³ (rate × V)", "Divide by 3 dm³", "Add 3 dm³", "Multiply by 3 dm³ then by 2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the mole ratio n(O2):n(CO2) = 1:2, how is the rate of CO2 related to the rate of O2?",
        options: ["Rate(CO2) = 2 × rate(O2)", "Rate(CO2) = rate(O2) ÷ 2", "Rate(CO2) = rate(O2)", "Rate(CO2) = rate(O2) + 2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the average rate at which CO2(g) is formed in the first 10 s?",
        options: ["0,072 mol·s⁻¹", "0,036 mol·s⁻¹", "0,012 mol·s⁻¹", "0,144 mol·s⁻¹"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Which reactant is in excess, CO or O2?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "O2 (oxygen).",
    marking_notes: "Accept only 'O2' / 'oxygen'.",
    marking_points: [{ marks: 1, description: "O2 / oxygen", keywords: ["o2", "oxygen"] }],
  },
  {
    number: "5", sub_number: "5.2.4",
    text: "This reaction was repeated using a smaller sealed container. How will this affect the magnitude of the gradient of the graph at the beginning of the reaction? Choose from INCREASES, DECREASES or REMAINS THE SAME. Give a reason for the answer.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Increases. A smaller container means a higher concentration of reactants (pressure increased), giving a higher reaction rate.",
    marking_notes: "Must state 'increases' and give a valid reason: higher reaction rate / higher concentration of reactants (accept 'pressure increased').",
    marking_points: [
      { marks: 1, description: "increases", keywords: ["increase"] },
      { marks: 1, description: "higher reaction rate / higher concentration of reactants", keywords: ["higher reaction rate", "concentration", "pressure increased"] },
    ],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "The reaction between sulphur dioxide, SO2(g), and oxygen, O2(g), takes place in a sealed container according to the balanced equation: 2SO2(g) + O2(g) ⇌ 2SO3(g), ΔH = -196 kJ·mol⁻¹. Was there a net release or net absorption of energy during the REVERSE reaction?",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Absorption.",
    marking_notes: "Accept only 'absorption'. The forward reaction is exothermic (ΔH negative), so the reverse reaction is endothermic and absorbs energy.",
    marking_points: [{ marks: 1, description: "absorption", keywords: ["absorption"] }],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Define the term activated complex.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "An unstable (high energy) transition state from reactants to products.",
    marking_notes: "Key phrases 'unstable (high energy)' and 'transition state' and 'from/between reactants and products' must be in the correct context; omitting any one in context costs 1 mark. 'Between reactants and products' is also accepted in place of 'from reactants to products'.",
    marking_points: [
      { marks: 1, description: "unstable (high energy) transition state", keywords: ["unstable", "transition state"] },
      { marks: 1, description: "from/between reactants and products", keywords: ["reactants", "products"] },
    ],
  },
  {
    number: "5", sub_number: "5.3.3",
    text: "A catalyst, vanadium pentoxide, is added to the reaction. Explain, in terms of the collision theory, why the rate of the reaction will increase.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "The catalyst provides an alternative reaction path with a lower activation energy. More particles therefore have sufficient kinetic energy (kinetic energy greater than or equal to the activation energy), resulting in more effective collisions per unit time (a higher frequency of effective collisions).",
    marking_notes: "Marking points: catalyst lowers the activation energy / provides an alternative path with lower activation energy; more particles have sufficient (kinetic) energy / kinetic energy ≥ activation energy; more effective collisions per unit time (or higher frequency of effective collisions).",
    marking_points: [
      { marks: 1, description: "catalyst provides an alternative path with lower activation energy", keywords: ["lower activation energy", "alternative path"] },
      { marks: 1, description: "more particles have sufficient kinetic energy (≥ activation energy)", keywords: ["sufficient", "kinetic energy"] },
      { marks: 1, description: "more effective collisions per unit time / higher frequency of effective collisions", keywords: ["effective collisions", "per unit time", "frequency"] },
    ],
    image_url: `${IMG}/5.3-maxwell-boltzmann.png`,
  },
  {
    number: "5", sub_number: "5.3.4",
    text: "More SO2(g) is now added to the container at constant temperature. How will this change affect the heat of the reaction? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same.",
    marking_notes: "Accept only 'remains the same'. The heat of reaction (ΔH) is a fixed property of the reaction and does not change with concentration.",
    marking_points: [{ marks: 1, description: "remains the same", keywords: ["remains the same"] }],
  },
  {
    number: "5", sub_number: "5.3.5",
    text: "Redraw the Maxwell-Boltzmann distribution curve X in the ANSWER BOOK. On the same set of axes, draw the curve that will now be obtained (after more SO2(g) is added at constant temperature). Label this as curve Y.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Curve Y starts at the origin and has the same shape as curve X, with its peak at the same kinetic energy as curve X's peak, but with a higher peak (more particles overall, since more SO2 was added at constant temperature).",
    marking_notes: "Marking points: both curves start at the origin and have the correct shape with peaks at the same kinetic energy; curve Y's peak is higher than curve X's peak (same peak kinetic energy). If both curves are not labelled, award 0/2; if the curves intersect anywhere besides the origin, cap at 1/2.",
    marking_points: [
      { marks: 1, description: "both curves start at the origin, correct shape, peaks at the same kinetic energy", keywords: ["same kinetic energy", "same shape"] },
      { marks: 1, description: "curve Y's peak is higher than curve X's peak", keywords: ["higher peak", "curve y"] },
    ],
    image_url: `${IMG}/5.3-maxwell-boltzmann.png`,
  },

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (17 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "Equilibrium is established at 25 °C in a saturated calcium hydroxide solution according to the reaction: Ca(OH)2(s) ⇌ Ca2+(aq) + 2OH⁻(aq). State Le Chatelier's principle.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "When the equilibrium in a closed system is disturbed, the system will re-instate a new equilibrium by favouring the reaction that will cancel/oppose the disturbance.",
    marking_notes: "Key phrases 'equilibrium ... is disturbed', 're-instate a new equilibrium', and 'favouring the reaction that will cancel/oppose the disturbance' must be in the correct context; omitting any one in context costs 1 mark.",
    marking_points: [
      { marks: 1, description: "when equilibrium in a closed system is disturbed, the system re-instates a new equilibrium", keywords: ["disturbed", "new equilibrium"] },
      { marks: 1, description: "by favouring the reaction that opposes/cancels the disturbance", keywords: ["favouring", "oppose", "cancel"] },
    ],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "A few drops of concentrated hydrochloric acid, HCl(conc.), are added to the equilibrium mixture. What effect does this addition have on the mass of Ca(OH)2(s)? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Decreases.",
    marking_notes: "Accept only 'decreases'.",
    marking_points: [{ marks: 1, description: "decreases", keywords: ["decrease"] }],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "Explain the answer to QUESTION 6.1.2 by using Le Chatelier's principle.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "The acid (HCl/H+) reacts with the OH⁻ ions, decreasing the amount/concentration of OH⁻ ions; this favours the forward reaction, which increases the amount/concentration of OH⁻ ions again (by dissolving more Ca(OH)2(s), so its mass decreases).",
    marking_notes: "Marking points: decrease in amount/concentration of OH⁻ ions favours the reaction that increases OH⁻ again (or: acid reacts with OH⁻ ions); the forward reaction is favoured (or: the amount/concentration of products increases).",
    marking_points: [
      { marks: 1, description: "decrease in OH⁻ ions favours the reaction that increases OH⁻ ions again (acid reacts with OH⁻)", keywords: ["decrease", "oh ions", "favours"] },
      { marks: 1, description: "the forward reaction is favoured / amount of products increases", keywords: ["forward reaction", "favoured", "products increase"] },
    ],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "Initially 70 g of NH4HS(s) is placed in a 3 dm³ container at 250 °C. The container is sealed and the reaction is allowed to reach equilibrium according to the balanced equation: NH4HS(s) ⇌ NH3(g) + H2S(g). The Kc values for the decomposition of NH4HS(s) at different temperatures are: 200 °C: 7,5 × 10⁻²; 250 °C: 18 × 10⁻²; 300 °C: 40 × 10⁻². Is the decomposition of NH4HS(s) an EXOTHERMIC or ENDOTHERMIC reaction?",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Endothermic.",
    marking_notes: "Accept only 'endothermic'.",
    marking_points: [{ marks: 1, description: "endothermic", keywords: ["endothermic"] }],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "Explain the answer to QUESTION 6.2.1 by using Le Chatelier's principle.",
    marks: 3, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "With an increase in temperature, the Kc value increases, meaning the concentration of products increases (concentration of reactants decreases / the forward reaction is favoured). According to Le Chatelier's principle, an increase in temperature favours the endothermic reaction — so the forward (decomposition) reaction must be endothermic.",
    marking_notes: "Marking points: with an increase in temperature the Kc value increases; the concentration of products increases (or concentration of reactants decreases, or the forward reaction is favoured); an increase in temperature favours the endothermic reaction (Le Chatelier's principle).",
    marking_points: [
      { marks: 1, description: "with an increase in temperature the Kc value increases", keywords: ["increase in temperature", "kc value increases"] },
      { marks: 1, description: "concentration of products increases / forward reaction favoured", keywords: ["products increases", "forward reaction favoured"] },
      { marks: 1, description: "an increase in temperature favours the endothermic reaction (Le Chatelier's principle)", keywords: ["favours the endothermic", "le chatelier"] },
    ],
  },
  {
    number: "6", sub_number: "6.2.3",
    text: "Calculate the mass of NH4HS(s) that will be present at equilibrium at 250 °C, given that initially 70 g of NH4HS(s) is placed in the 3 dm³ container and Kc = 18 × 10⁻² at 250 °C.",
    marks: 8, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "n(NH4HS)initial = 70/51 = 1,37 mol. Using the mole ratio NH4HS : NH3 : H2S = 1:1:1, if x mol decomposes, [NH3] = [H2S] = x/3 mol·dm⁻³ at equilibrium. Kc = [NH3][H2S], so 18×10⁻² = (x/3)², giving x = 1,27 mol. n(NH4HS)eq = 1,37 − 1,27 = 0,10 mol. m(NH4HS)eq = nM = 0,10 × 51 = 5,61 g (accepted range 4,96-5,74 g).",
    marking_notes: "Marking points: calculate n(NH4HS) initial (70/51 = 1,37 mol); use the mole ratio NH4HS:NH3:H2S = 1:1:1; calculate the equilibrium concentrations of NH3 and H2S (divide equilibrium moles by the 3 dm³ volume); correct Kc expression; substitute Kc = 18×10⁻² and solve for x; n(NH4HS)eq = n(NH4HS)initial − n(NH4HS)change; substitute M = 51 in n = m/M; correct final answer (5,61 g, accepted range 4,96-5,74 g).",
    steps: [
      {
        marks: 1,
        description: "How many moles of NH4HS(s) are initially placed in the container (m = 70 g, M = 51 g·mol⁻¹)?",
        options: ["1,37 mol", "0,73 mol", "70,00 mol", "51,00 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the balanced equation NH4HS(s) ⇌ NH3(g) + H2S(g), what is the mole ratio NH4HS : NH3 : H2S?",
        options: ["1 : 1 : 1", "1 : 2 : 1", "2 : 1 : 1", "1 : 1 : 2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "If x mol of NH4HS decomposes, what is the equilibrium concentration of NH3 (and H2S) in the 3 dm³ container?",
        options: ["x/3 mol·dm⁻³", "x mol·dm⁻³", "3x mol·dm⁻³", "x/2 mol·dm⁻³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the correct Kc expression for NH4HS(s) ⇌ NH3(g) + H2S(g)?",
        options: ["Kc = [NH3][H2S]", "Kc = [NH3][H2S]/[NH4HS]", "Kc = [NH4HS]/([NH3][H2S])", "Kc = [NH3] + [H2S]"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Solving 18×10⁻² = (x/3)² for x, what is x (mol of NH4HS that decomposed)?",
        options: ["1,27 mol", "1,37 mol", "0,42 mol", "2,54 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is n(NH4HS) remaining at equilibrium (n(NH4HS)initial − x)?",
        options: ["0,10 mol", "1,27 mol", "1,37 mol", "0,20 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula converts n(NH4HS) remaining to a mass, using M = 51 g·mol⁻¹?",
        options: ["m = nM", "m = n/M", "m = M/n", "m = n + M"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the mass of NH4HS(s) present at equilibrium at 250 °C?",
        options: ["5,61 g", "5,10 g", "4,50 g", "0,10 g"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 7: ACIDS AND BASES (20 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "Phosphoric acid, H3PO4(aq), ionises in three steps: H3PO4(aq) + H2O(l) ⇌ H3O+(aq) + H2PO4⁻(aq), Ka = 6,9×10⁻³; H2PO4⁻(aq) + H2O(l) ⇌ H3O+(aq) + HPO4²⁻(aq), Ka = 6,2×10⁻⁸; HPO4²⁻(aq) + H2O(l) ⇌ H3O+(aq) + PO4³⁻(aq), Ka = 4,8×10⁻¹³. Which one is the stronger acid, H2PO4⁻ or HPO4²⁻? Give a reason for the answer by referring to the data above.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "H2PO4⁻. The Ka of H2PO4⁻ (6,2×10⁻⁸, its own ionisation step) is greater/higher than the Ka of HPO4²⁻ (4,8×10⁻¹³).",
    marking_notes: "Must identify H2PO4⁻ and state that its Ka is greater/higher than the Ka of HPO4²⁻.",
    marking_points: [
      { marks: 1, description: "H2PO4⁻", keywords: ["h2po4"] },
      { marks: 1, description: "Ka of H2PO4⁻ is greater/higher than Ka of HPO4²⁻", keywords: ["ka", "greater", "higher"] },
    ],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Write down the FORMULA for the conjugate base of H2PO4⁻(aq).",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "HPO4²⁻.",
    marking_notes: "Accept only HPO4²⁻ (with the correct charge).",
    marking_points: [{ marks: 1, description: "HPO4²⁻", keywords: ["hpo4"] }],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Identify a substance behaving as an ampholyte in the reactions above.",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "H2PO4⁻ (or HPO4²⁻).",
    marking_notes: "Accept either H2PO4⁻ or HPO4²⁻ — both act as an acid in one step and a base in another.",
    marking_points: [{ marks: 1, description: "H2PO4⁻ or HPO4²⁻", keywords: ["h2po4", "hpo4"] }],
  },
  {
    number: "7", sub_number: "7.1.4",
    text: "Sodium hydrogen phosphate, Na2HPO4(s), is dissolved in water. Will the resulting solution be ACIDIC or BASIC?",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "Basic.",
    marking_notes: "Accept only 'basic'.",
    marking_points: [{ marks: 1, description: "basic", keywords: ["basic"] }],
  },
  {
    number: "7", sub_number: "7.1.5",
    text: "Write a balanced equation to explain the answer to QUESTION 7.1.4.",
    marks: 3, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "HPO4²⁻(aq) + H2O(l) ⇌ H2PO4⁻(aq) + OH⁻(aq) (accept HPO4²⁻(aq) + 2H2O(l) ⇌ H3PO4(aq) + 2OH⁻(aq), or the equivalent equation starting from Na2HPO4).",
    marking_notes: "Marking points: correct reactants; correct products; balanced equation.",
    marking_points: [
      { marks: 1, description: "correct reactants: HPO4²⁻ (or Na2HPO4) and H2O", keywords: ["hpo4", "h2o"] },
      { marks: 1, description: "correct products: H2PO4⁻ (or H3PO4) and OH⁻", keywords: ["h2po4", "oh"] },
      { marks: 1, description: "equation balanced", keywords: ["balanced"] },
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "Barium hydroxide, Ba(OH)2, dissolves in water according to Ba(OH)2(s) → Ba2+(aq) + 2OH⁻(aq). A 100 cm³ solution is prepared by dissolving an unknown amount of Ba(OH)2 at 25 °C. 25 cm³ of this Ba(OH)2 solution is reacted with 15 cm³ of a 0,2 mol·dm⁻³ HCl solution in a flask, according to Ba(OH)2(aq) + 2HCl(aq) → BaCl2(aq) + 2H2O(l). The final pH of the solution is 12,62 at 25 °C. Calculate the final concentration of the hydroxide ions in the flask.",
    marks: 4, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "pH = -log[H3O+], so 12,62 = -log[H3O+], giving [H3O+] = 2,4×10⁻¹³ mol·dm⁻³. Using [H3O+][OH⁻] = 1×10⁻¹⁴: (2,4×10⁻¹³)[OH⁻] = 1×10⁻¹⁴, giving [OH⁻] = 0,0417 mol·dm⁻³ (accepted range 0,04-0,042 mol·dm⁻³).",
    marking_notes: "Marking points: any correct formula linking pH/pOH/[H3O+]/[OH⁻]; substitute 12,62; substitute the calculated [H3O+] (or pOH) into the Kw expression; final answer 0,04 mol·dm⁻³ (accepted range 0,04-0,042).",
    steps: [
      {
        marks: 1,
        description: "Which formula relates pH to [H3O+] (or pOH to [OH⁻])?",
        options: ["pH = -log[H3O+]", "pOH = -log[H3O+]", "[OH⁻] = -log[pH]", "pH = [H3O+]"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is [H3O+] when pH = 12,62?",
        options: ["2,4×10⁻¹³ mol·dm⁻³", "1,38×10⁻¹³ mol·dm⁻³", "12,62 mol·dm⁻³", "3,8×10⁻¹² mol·dm⁻³"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using Kw = [H3O+][OH⁻] = 1×10⁻¹⁴, what equation do you solve for [OH⁻]?",
        options: ["[OH⁻] = 10⁻¹⁴ / [H3O+]", "[OH⁻] = [H3O+] × 10⁻¹⁴", "[OH⁻] = 10⁻¹⁴ + [H3O+]", "[OH⁻] = [H3O+] / 10⁻¹⁴"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the final concentration of hydroxide ions in the flask?",
        options: ["0,04 mol·dm⁻³", "0,0042 mol·dm⁻³", "1,38 mol·dm⁻³", "2,4×10⁻¹³ mol·dm⁻³"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Calculate the number of moles of Ba(OH)2 used to prepare the 100 cm³ solution.",
    marks: 8, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "n(HCl) = cV = (0,2)(0,015) = 3×10⁻³ mol. Since n(OH⁻):n(HCl) = 1:1, n(OH⁻)reacted = 3×10⁻³ mol. n(OH⁻)final = cV = (0,0417)(0,04) = 1,67×10⁻³ mol. n(OH⁻)initial in the 25 cm³ sample = 3×10⁻³ + 1,67×10⁻³ = 4,67×10⁻³ mol. Using n(Ba(OH)2):n(OH⁻) = 1:2, n(Ba(OH)2) in 25 cm³ = ½(4,67×10⁻³) = 2,33×10⁻³ mol. Scaling up to 100 cm³ (×4): n(Ba(OH)2) = 9,34×10⁻³ mol (accepted range 9,2×10⁻³-9,36×10⁻³ mol).",
    marking_notes: "Marking points: substitute 0,2 and 0,015 into n = cV for HCl; use the mole ratio n(OH⁻):n(HCl) = 1:1; substitute the final [OH⁻] and 0,04 dm³ into n = cV; calculate n(OH⁻)initial as reacted + final (2 marks); use the mole ratio n(Ba(OH)2):n(OH⁻) = 1:2; scale the 25 cm³ answer up to 100 cm³ (×4); correct final answer 9,34×10⁻³ mol (accepted range 9,2×10⁻³-9,36×10⁻³ mol).",
    steps: [
      {
        marks: 1,
        description: "What is n(HCl) used, from n = cV with c = 0,2 mol·dm⁻³ and V = 0,015 dm³?",
        options: ["3×10⁻³ mol", "1,5×10⁻³ mol", "0,2 mol", "3×10⁻² mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the mole ratio in Ba(OH)2 + 2HCl → BaCl2 + 2H2O, what is the ratio n(OH⁻) reacted : n(HCl)?",
        options: ["1 : 1", "1 : 2", "2 : 1", "1 : 3"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is n(OH⁻) remaining unreacted in the flask, using c(OH⁻) = 0,0417 mol·dm⁻³ and V = 0,04 dm³?",
        options: ["1,67×10⁻³ mol", "3×10⁻³ mol", "0,0417 mol", "1,67×10⁻² mol"],
        correctIndex: 0,
      },
      {
        marks: 2,
        description: "What is n(OH⁻) initially present in the 25 cm³ sample (n(OH⁻)reacted with HCl + n(OH⁻)final)?",
        options: ["4,67×10⁻³ mol", "3×10⁻³ mol", "1,67×10⁻³ mol", "6,67×10⁻³ mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the mole ratio n(Ba(OH)2) : n(OH⁻) = 1 : 2, what is n(Ba(OH)2) in the 25 cm³ sample?",
        options: ["2,33×10⁻³ mol", "4,67×10⁻³ mol", "9,34×10⁻³ mol", "1,17×10⁻³ mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How do you scale n(Ba(OH)2) from the 25 cm³ sample up to the full 100 cm³ solution?",
        options: ["Multiply by 4 (100 cm³ ÷ 25 cm³)", "Multiply by 25", "Divide by 4", "Multiply by 100"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total number of moles of Ba(OH)2 used to prepare the 100 cm³ solution?",
        options: ["9,34×10⁻³ mol", "2,33×10⁻³ mol", "4,67×10⁻³ mol", "1,87×10⁻² mol"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 8: GALVANIC CELL (11 marks) ============

  {
    number: "8", sub_number: "8.1",
    text: "The diagram below represents a cell that operates initially under standard conditions: an aluminium electrode (Aℓ) dips into an Aℓ3+(aq) solution and a zinc electrode (Zn) dips into a Zn2+(aq) solution, connected by a salt bridge and a voltmeter (V). Define the term electrolyte.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "A substance whose (aqueous) solution contains ions (equivalently: a substance that dissolves in water to give a solution that conducts electricity through movement of ions, or a substance that dissociates to form ions in water/in the molten state).",
    marking_notes: "Must refer to a substance whose solution contains ions, or that dissociates to form ions in water/molten state.",
    marking_points: [{ marks: 2, description: "substance whose (aqueous) solution contains ions / dissociates to form ions", keywords: ["contains ions", "dissociates", "form ions"] }],
    image_url: `${IMG}/8-cell-diagram.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Which ion concentration, Aℓ3+(aq) or Zn2+(aq), will increase? Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Aℓ3+(aq). Aℓ is oxidised (Aℓ is a stronger reducing agent than Zn, E°(Aℓ3+/Aℓ) = -1,66 V is more negative than E°(Zn2+/Zn) = -0,76 V), so Aℓ is the anode and Aℓ3+ ions are produced, increasing [Aℓ3+].",
    marking_notes: "Must identify Aℓ3+ and give a valid reason: Aℓ is oxidised, or Aℓ is a stronger reducing agent (than Zn).",
    marking_points: [
      { marks: 1, description: "Aℓ3+ (aluminium ion)", keywords: ["al3", "aluminium ion"] },
      { marks: 1, description: "Aℓ is oxidised / Aℓ is a stronger reducing agent", keywords: ["oxidised", "stronger reducing agent"] },
    ],
    image_url: `${IMG}/8-cell-diagram.png`,
  },
  {
    number: "8", sub_number: "8.3",
    text: "Write down the cell notation for this cell (Aℓ | Aℓ3+ half-cell and Zn | Zn2+ half-cell, operating initially under standard conditions).",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Aℓ(s) | Aℓ3+(aq) || Zn2+(aq) | Zn(s) (accept with standard 1 mol·dm⁻³ concentrations shown, or the shortened form Aℓ | Aℓ3+ || Zn2+ | Zn).",
    marking_notes: "Marking points: anode half-cell (Aℓ(s) | Aℓ3+(aq)) correct; salt bridge (||) correctly placed; cathode half-cell (Zn2+(aq) | Zn(s)) correct.",
    marking_points: [
      { marks: 1, description: "anode half-cell: Aℓ(s) | Aℓ3+(aq)", keywords: ["al s", "al3"] },
      { marks: 1, description: "salt bridge (||) correctly placed between the half-cells", keywords: ["salt bridge"] },
      { marks: 1, description: "cathode half-cell: Zn2+(aq) | Zn(s)", keywords: ["zn2", "zn s"] },
    ],
    image_url: `${IMG}/8-cell-diagram.png`,
  },
  {
    number: "8", sub_number: "8.4",
    text: "The electrolyte in the aluminium half-cell is prepared by dissolving some aluminium sulphate, Aℓ2(SO4)3(s), in water. Calculate the mass of Aℓ2(SO4)3(s) needed to prepare 250 cm³ of this solution so that the cell operates initially under STANDARD CONDITIONS.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "n(Aℓ3+) needed = cV = (1)(0,25) = 0,25 mol (standard conditions require 1 mol·dm⁻³ Aℓ3+). Using the ratio n(Aℓ2(SO4)3):n(Aℓ3+) = 1:2, n(Aℓ2(SO4)3) = ½(0,25) = 0,125 mol. m = nM = 0,125 × 342 = 42,75 g.",
    marking_notes: "Marking points: calculate n(Aℓ3+) using standard 1 mol·dm⁻³ concentration and 250 cm³; use the mole ratio n(Aℓ2(SO4)3):n(Aℓ3+) = 1:2; multiply n(Aℓ2(SO4)3) by M = 342 g·mol⁻¹; correct final answer 42,75 g.",
    steps: [
      {
        marks: 1,
        description: "What is n(Aℓ3+) needed for 250 cm³ of a standard 1 mol·dm⁻³ solution (n = cV)?",
        options: ["0,25 mol", "0,125 mol", "1,00 mol", "0,50 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the mole ratio n(Aℓ2(SO4)3) : n(Aℓ3+) = 1 : 2 (from Aℓ2(SO4)3 → 2Aℓ3+ + 3SO4²⁻), what is n(Aℓ2(SO4)3)?",
        options: ["0,125 mol", "0,25 mol", "0,50 mol", "0,0625 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula converts n(Aℓ2(SO4)3) to a mass, using M = 342 g·mol⁻¹?",
        options: ["m = nM", "m = n/M", "m = M/n", "m = n + M"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What mass of Aℓ2(SO4)3(s) is needed?",
        options: ["42,75 g", "85,50 g", "21,38 g", "342,00 g"],
        correctIndex: 0,
      },
    ],
  },

  // ============ QUESTION 9: ELECTROLYTIC CELL (11 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "The diagram below represents a cell used for the refining of copper: unrefined copper (electrode R) and refined copper (electrode Q) are both dipped in an electrolyte and connected to a power source and switch. The unrefined copper contains zinc as the only impurity. Is this an ELECTROLYTIC or a GALVANIC cell?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Electrolytic.",
    marking_notes: "Accept only 'electrolytic'. The cell uses an external power source to drive a non-spontaneous reaction (electrorefining), which is characteristic of an electrolytic cell.",
    marking_points: [{ marks: 1, description: "electrolytic", keywords: ["electrolytic"] }],
    image_url: `${IMG}/9-cell-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2.1",
    text: "When the switch is closed, it is found after T hours that the amount of Cu2+(aq) ions in the electrolyte changed by 0,05 moles and 0,15 moles of Cu(s) were deposited on electrode Q. How will the concentration of the zinc ions in the electrolyte be affected during the refining of the copper? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Increases.",
    marking_notes: "Accept only 'increases'. Zinc, the impurity in the unrefined copper anode (R), is oxidised and dissolves into the electrolyte as Zn2+ ions.",
    marking_points: [{ marks: 1, description: "increases", keywords: ["increase"] }],
    image_url: `${IMG}/9-cell-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Will the amount of Cu2+(aq) ions INCREASE or DECREASE? Explain the answer in terms of the relative strengths of the oxidising agents present.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Decrease. More copper(II) ions are reduced (deposited as Cu on electrode Q) than are formed (dissolved from electrode R), because Cu2+ is a stronger oxidising agent than Zn2+ (equivalently, Zn2+ is a weaker oxidising agent than Cu2+).",
    marking_notes: "Marking points: states 'decrease'; more Cu2+ ions are reduced than formed (or: only Cu2+ ions are reduced); Cu2+ is a stronger oxidising agent than Zn2+ (or Zn2+ is a weaker oxidising agent than Cu2+).",
    marking_points: [
      { marks: 1, description: "decrease", keywords: ["decrease"] },
      { marks: 1, description: "more Cu2+ ions are reduced than are formed / only Cu2+ ions are reduced", keywords: ["reduced than", "only copper"] },
      { marks: 1, description: "Cu2+ is a stronger oxidising agent than Zn2+ (or Zn2+ is weaker than Cu2+)", keywords: ["stronger oxidising agent", "weaker oxidising agent"] },
    ],
    image_url: `${IMG}/9-cell-diagram.png`,
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "Calculate the change in mass of electrode R after T hours (given that the amount of Cu2+(aq) ions changed by 0,05 mol, and 0,15 mol of Cu(s) was deposited on electrode Q, with zinc as the only impurity in the unrefined copper).",
    marks: 6, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Using n(Cu2+):n(Zn2+) = 1:1, n(Zn2+) that dissolved from R = 0,05 mol. m(Zn) = nM = (0,05)(65) = 3,25 g lost from R. Since 0,15 mol Cu was deposited on Q but the net change in Cu2+ was only −0,05 mol, the amount of Cu that dissolved from R = 0,15 − 0,05 = 0,10 mol. m(Cu) = nM = (0,10)(63,5) = 6,35 g lost from R. Total change in mass of R = 6,35 + 3,25 = 9,6 g (a decrease in mass).",
    marking_notes: "Marking points: use the mole ratio n(Cu2+):n(Zn2+) = 1:1 to find n(Zn2+) = 0,05 mol; formula n = m/M (or m = nM); substitute 65 g·mol⁻¹ and n(Zn) in n = m/M; subtraction of moles (0,15 − 0,05 = 0,10 mol Cu from R); substitute 63,5 g·mol⁻¹ and n(Cu) in n = m/M; correct final answer 9,6 g (decrease in mass) — no accepted range.",
    steps: [
      {
        marks: 1,
        description: "Using the mole ratio n(Cu2+) : n(Zn2+) = 1 : 1 (since n(Cu2+) changed by 0,05 mol), what is n(Zn2+) that dissolved from electrode R?",
        options: ["0,05 mol", "0,15 mol", "0,10 mol", "0,20 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Which formula converts n(Zn) to a mass, using M = 65 g·mol⁻¹?",
        options: ["m = nM", "m = n/M", "m = M/n", "m = n + M"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What mass of Zn dissolved from electrode R?",
        options: ["3,25 g", "6,50 g", "0,77 g", "13,00 g"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "How many moles of Cu dissolved from electrode R (0,15 mol deposited on Q minus the net 0,05 mol change in Cu2+)?",
        options: ["0,10 mol", "0,15 mol", "0,20 mol", "0,05 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What mass of Cu dissolved from electrode R, using M = 63,5 g·mol⁻¹?",
        options: ["6,35 g", "3,18 g", "9,53 g", "0,10 g"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the total change in mass of electrode R (loss of Zn + loss of Cu)?",
        options: ["9,6 g (decrease)", "9,6 g (increase)", "3,1 g (decrease)", "6,35 g (decrease)"],
        correctIndex: 0,
      },
    ],
  },
];

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
