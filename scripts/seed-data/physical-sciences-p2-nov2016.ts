// Real DBE past paper: Physical Sciences (Chemistry) P2, November 2016, National
// (English/Afrikaans bilingual).
// Source: single combined PDF (question paper + memorandum) from
// stanmorephysics.com. Pages 1-18 are the question paper (cover page, 1
// instruction page, questions 1-10), pages 19-22 are the 4 data-sheet pages,
// pages 23-45 are the memorandum (cover page 23, memo 24-45). Cover page
// confirms "PHYSICAL SCIENCES: CHEMISTRY (P2)", "NOVEMBER 2016", MARKS: 150,
// TIME: 3 hours. The memo's question numbers and mark allocations were
// cross-checked against the question paper for every question: no mismatches.
//
// Paper structure: TEN compulsory questions (no choice), 150 marks, 3 hours:
// Q1 20, Q2 13, Q3 11, Q4 13, Q5 20, Q6 18, Q7 16, Q8 16, Q9 9, Q10 14.
// All 150 marks are included here.
//
// Subject row and topics are reused from the other Physical Sciences
// Chemistry P2 seed files (same names). Question 10 (fertilisers, Haber,
// Contact process, NPK ratio) and Question 1.6 (Ostwald process) use the
// "chemical-industry" topic.
//
// Grading format: every item is a stepped multiple choice (steps). The
// question text of each define/explain item is turned into choices (one
// choice question per memo mark-earning point); no marking_points are used.
//
// Images (cropped from the question paper at 220dpi into
// public/question-images/chemistry-2016-p2/): 1.5 (structures of I and II),
// 1.8 (four graphs), 1.10 (test tubes), 2 (compound table), 4.2 (bromine
// water apparatus), 4.3 (flow diagram), 5.1.2 (blank potential energy axes,
// also used for 5.1.3), 5.2 (graphs A and B), 5.3 (energy distribution
// curves), 6.3 (rate-time graph), 8.1 (Ni rod in AgNO3), 8.2 (galvanic cell),
// 9 (electrolysis cell), 10.1 (fertiliser flow diagram). The picture of the
// fertiliser bag in 10.2 is decorative; its label "x-y-z (36)", "20 kg" is
// reproduced in the question text instead.
//
// FLAG notes for review:
// - Drawing questions (5.1.2, 5.1.3, 6.3) cannot be drawn in this app. They
//   are converted to choice steps that describe the features the memo's
//   marking criteria require (curve shape, 75 kJ peak, -196 kJ products,
//   lower catalysed peak, parallel vertical/horizontal rate lines), one step
//   per memo criterion.
// - Q2.2.1, 2.2.2, 2.2.3, 4.3.3 (structural formulae): converted to steps
//   that follow the memo's criteria (chain/functional group, whole
//   structure) with the structures written in condensed text form.
// - Q1.6 (Ostwald process) and Q10 (fertilisers) are older-syllabus
//   industrial-process content mapped to the "chemical-industry" topic.
// - Q3.3 / 3.4 (boiling point trend, vapour pressure of isomers) mapped to
//   "intermolecular-forces"; 3.1, 3.2, 3.5 to "organic-chemistry".
// - Q5.2.2 (mass of H2O2 from gas volume) mapped to "stoichiometry"; the
//   rest of Q5 to "rate-of-reaction".
// - Q5.2.1: the memo reads V = 16 dm3 at t = 10 s and 52 dm3 at t = 40 s and
//   accepts a volume range of 16 to 17 and an answer range 1,167 to 1,2
//   dm3.s-1; the step uses the memo's own 1,2 dm3.s-1.
// - Q7.2.1: memo gives "0,08 mol (0,075 mol)", i.e. it rounds to 0,08 but
//   carries 0,075 forward (0,075 is used in 7.2.2). The step uses 0,075 mol
//   and is labelled with the rounded 0,08 mol equivalent.
// - Q7.2.2: memo final answer is 5 g with an accepted range of 4,8 to 5,6 g
//   (answers differ by rounding path); the step uses 5 g.
// - Q6.4: memo final answer 0,07 (0,067 if unrounded); the step uses 0,07.
//   The memo's own mark criteria give 9 points; the nine steps map to them
//   one-to-one (M, ratio, n formed, H2:H2S 1:1, n(H2) at equilibrium,
//   divide by 2 dm3, Kc expression, substitution, final answer).
// - Q10.1.5: the memo's four marks are shown by tick marks that are not
//   visible in the text layer; the split used here is reactants (2),
//   product (1), balancing (1), which is the pattern of the 10.1.4 criteria
//   extended by one reactant mark. Total of 4 is exact.
// - Q9.2: memo accepts anode as electrode P (connected to the positive
//   terminal of the battery), which agrees with gas X being chlorine (9.3.1).

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2016-p2";

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
  year: 2016,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2020/10/Physical-Sciences-grade-12-Nov-2016-P2-and-Memo.pdf" as string | null,
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

// Builds one choice step. The correct option is placed at a position that
// rotates deterministically (0,1,2,3,...) so the right answer is not always
// first; the three wrong options keep their given order.
let rot = 0;
function st(marks: number, description: string, correct: string, wrongs: [string, string, string]): MarkingPointStep {
  const pos = rot++ % 4;
  const options = [...wrongs];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: MULTIPLE-CHOICE (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "In a chemical reaction an oxidising agent will … (A) lose protons. (B) gain protons. (C) lose electrons. (D) gain electrons.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "D — gain electrons. An oxidising agent is reduced, so it gains electrons.",
    marking_notes: "Memo: D.",
    steps: [st(2, "Which option completes the sentence correctly?", "D — gain electrons.", ["A — lose protons.", "B — gain protons.", "C — lose electrons."])],
  },
  {
    number: "1", sub_number: "1.2",
    text: "A catalyst is added to a reaction mixture at equilibrium. Which ONE of the following statements about the effect of the catalyst is FALSE? (A) The rate of the forward reaction increases. (B) The rate of the reverse reaction increases. (C) The equilibrium position shifts to the right. (D) The equilibrium position remains unchanged.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "C — the equilibrium position shifts to the right is FALSE. A catalyst speeds up forward and reverse reactions equally, so the equilibrium position does not change.",
    marking_notes: "Memo: C.",
    steps: [st(2, "Which statement about the catalyst is FALSE?", "C — The equilibrium position shifts to the right.", ["A — The rate of the forward reaction increases.", "B — The rate of the reverse reaction increases.", "D — The equilibrium position remains unchanged."])],
  },
  {
    number: "1", sub_number: "1.3",
    text: "What product will be formed when an alkene reacts with water vapour (H₂O) in the presence of an acid catalyst? (A) Ester (B) Alkane (C) Alcohol (D) Aldehyde",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "C — Alcohol. Hydration of an alkene adds H and OH across the double bond.",
    marking_notes: "Memo: C.",
    steps: [st(2, "What is the product of the hydration of an alkene?", "C — Alcohol", ["A — Ester", "B — Alkane", "D — Aldehyde"])],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Which ONE of the following represents a SUBSTITUTION REACTION? (A) CH₂=CH₂ + HBr → CH₃CH₂Br (B) CH₂=CH₂ + H₂O → CH₃CH₂OH (C) CH₃CH₂OH → CH₂=CH₂ + H₂O (D) CH₃CH₂OH + HBr → CH₃CH₂Br + H₂O",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "D — the OH group of the alcohol is replaced by Br, so one atom/group is substituted for another.",
    marking_notes: "Memo: D.",
    steps: [st(2, "Which equation shows a substitution reaction?", "D — CH₃CH₂OH + HBr → CH₃CH₂Br + H₂O", ["A — CH₂=CH₂ + HBr → CH₃CH₂Br (addition of HBr)", "B — CH₂=CH₂ + H₂O → CH₃CH₂OH (hydration)", "C — CH₃CH₂OH → CH₂=CH₂ + H₂O (elimination)"])],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Consider the two organic molecules I and II shown in the diagram (I: CH₃CH₂CHO drawn in full, with C=O on the last carbon with an H attached; II: CH₃COCH₃ drawn in full, with C=O on the middle carbon). Which ONE of the following represents the homologous series to which compound I and compound II belong? (A) I: Ketones, II: Alcohols (B) I: Aldehydes, II: Ketones (C) I: Aldehydes, II: Alcohols (D) I: Ketones, II: Aldehydes",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B — I has the C=O group at the end of the chain with an H attached (aldehyde); II has the C=O group inside the chain (ketone).",
    marking_notes: "Memo: B.",
    image_url: `${IMG}/1.5-molecules-i-ii.png`,
    steps: [st(2, "Which option correctly names the homologous series of I and II?", "B — I: Aldehydes, II: Ketones", ["A — I: Ketones, II: Alcohols", "C — I: Aldehydes, II: Alcohols", "D — I: Ketones, II: Aldehydes"])],
  },
  {
    number: "1", sub_number: "1.6",
    text: "Consider the balanced equations for three reactions: I: N₂(g) + 3H₂(g) ⇌ 2NH₃(g); II: 4NH₃(g) + 5O₂(g) ⇌ 4NO(g) + 6H₂O(g); III: 2NO(g) + O₂(g) ⇌ 2NO₂(g). Which of the above reactions form(s) part of the Ostwald process? (A) I only (B) II only (C) III only (D) II and III only",
    marks: 2, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "D — II and III only. The Ostwald process oxidises ammonia to NO and then NO to NO₂ (before forming HNO₃); reaction I is the Haber process.",
    marking_notes: "Memo: D.",
    steps: [st(2, "Which reactions are part of the Ostwald process?", "D — II and III only", ["A — I only", "B — II only", "C — III only"])],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Which ONE of the following pairs is NOT a conjugate acid-base pair? (A) H₃O⁺ and OH⁻ (B) NH₄⁺ and NH₃ (C) H₂PO₄⁻ and HPO₄²⁻ (D) H₂CO₃ and HCO₃⁻",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "A — H₃O⁺ and OH⁻ differ by an H₂O unit (two protons), not by one proton, so they are not a conjugate pair (H₃O⁺ pairs with H₂O).",
    marking_notes: "Memo: A.",
    steps: [st(2, "Which pair is NOT a conjugate acid-base pair?", "A — H₃O⁺ and OH⁻", ["B — NH₄⁺ and NH₃", "C — H₂PO₄⁻ and HPO₄²⁻", "D — H₂CO₃ and HCO₃⁻"])],
  },
  {
    number: "1", sub_number: "1.8",
    text: "The reaction between hydrogen gas and iodine gas reaches equilibrium in a closed container: H₂(g) + I₂(g) ⇌ 2HI(g). Which ONE of the graphs shows the relationship between the amount of HI(g) at equilibrium and the pressure in the container at constant temperature? (A) a horizontal straight line (B) a curve rising and levelling off (C) a straight line rising through the origin (D) a curve falling from a high value. (See the graphs.)",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "A — the amount of HI at equilibrium stays constant. There are 2 mol of gas on each side of the equation, so a change in pressure does not shift the equilibrium position.",
    marking_notes: "Memo: A.",
    image_url: `${IMG}/1.8-graphs.png`,
    steps: [st(2, "Which graph shows how the amount of HI(g) at equilibrium depends on pressure?", "A — a horizontal line: amount of HI does not change with pressure", ["B — a curve rising and levelling off: more HI at higher pressure", "C — a straight line rising through the origin: HI directly proportional to pressure", "D — a falling curve: less HI at higher pressure"])],
  },
  {
    number: "1", sub_number: "1.9",
    text: "Which ONE of the equations below represents the half-reaction occurring at the CATHODE of an electrochemical cell that is used to electroplate an object? (A) Ag → Ag⁺ + e⁻ (B) Cr³⁺ + 3e⁻ → Cr (C) Cr³⁺ + e⁻ → Cr²⁺ (D) Cu²⁺ + e⁻ → Cu⁺",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "B — Cr³⁺ + 3e⁻ → Cr. At the cathode of an electroplating cell metal ions are reduced to the solid metal that coats the object (C and D are reductions that do not form the metal; A is an oxidation).",
    marking_notes: "Memo: B.",
    steps: [st(2, "Which half-reaction occurs at the cathode when an object is electroplated?", "B — Cr³⁺ + 3e⁻ → Cr", ["A — Ag → Ag⁺ + e⁻", "C — Cr³⁺ + e⁻ → Cr²⁺", "D — Cu²⁺ + e⁻ → Cu⁺"])],
  },
  {
    number: "1", sub_number: "1.10",
    text: "Equal amounts of magnesium (Mg) powder react respectively with equal volumes (100 cm³) and equal concentrations (1 mol·dm⁻³) of HCℓ(aq) in test tube X and H₂SO₄(aq) in test tube Y. The magnesium is in EXCESS. Statements: I: The initial rate of the reaction in test tube X equals the initial rate in test tube Y. II: After completion of the reactions, the mass of magnesium that remains in test tube X will be greater than that in test tube Y. III: The amount of hydrogen gas formed in X is equal to the amount formed in Y. Which of the above statements is/are TRUE? (A) I only (B) II only (C) III only (D) I and III only",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "B — II only. H₂SO₄ is diprotic, so Y has twice the H⁺ concentration and amount (0,2 mol vs 0,1 mol). Y therefore reacts faster initially (I false), produces more H₂ (III false) and uses more Mg, leaving less Mg in Y (II true).",
    marking_notes: "Memo: B.",
    image_url: `${IMG}/1.10-test-tubes.png`,
    steps: [st(2, "Which statement(s) is/are true?", "B — II only", ["A — I only", "C — III only", "D — I and III only"])],
  },

  // ============ QUESTION 2: ORGANIC COMPOUNDS (13 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The letters A to F in the table represent six organic compounds: A = 2-methylpropene (drawn in full), B = ethyl ethanoate, C = 2,3-dibromo-3-methylpentane, D = polyethene, E = methyl ethanoate (drawn in full), F = butanoic acid (drawn in full). Write down the LETTER that represents a hydrocarbon.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "A (or D). Both A (an alkene) and D (polyethene) contain only carbon and hydrogen.",
    marking_notes: "Memo: A OR D.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [st(1, "Which letter represents a hydrocarbon?", "A (or D) — contains only C and H", ["B — ethyl ethanoate", "C — 2,3-dibromo-3-methylpentane", "F — butanoic acid"])],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Using the same table of compounds A to F, write down the LETTER that represents a functional isomer of compound F (butanoic acid, C₄H₈O₂).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "B — ethyl ethanoate (C₄H₈O₂) is an ester with the same molecular formula as butanoic acid but a different functional group.",
    marking_notes: "Memo: B.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [st(1, "Which compound is a functional isomer of F?", "B — ethyl ethanoate (an ester, C₄H₈O₂)", ["A — 2-methylpropene (C₄H₈)", "E — methyl ethanoate (C₃H₆O₂)", "D — polyethene"])],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Using the same table of compounds A to F, write down the LETTER that represents a compound which belongs to the same homologous series as compound B (ethyl ethanoate).",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "E — methyl ethanoate is also an ester.",
    marking_notes: "Memo: E.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [st(1, "Which compound is in the same homologous series as B?", "E — methyl ethanoate (ester)", ["F — butanoic acid (carboxylic acid)", "A — 2-methylpropene (alkene)", "C — 2,3-dibromo-3-methylpentane (haloalkane)"])],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Using the same table of compounds A to F, write down the LETTER that represents a plastic.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "D — polyethene is a plastic (a polymer).",
    marking_notes: "Memo: D.",
    image_url: `${IMG}/2-compounds-table.png`,
    steps: [st(1, "Which compound is a plastic?", "D — polyethene", ["A — 2-methylpropene", "E — methyl ethanoate", "F — butanoic acid"])],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Write down the STRUCTURAL FORMULA of compound C, 2,3-dibromo-3-methylpentane. (Answer by choosing the correct structure, written in condensed form.)",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH₃–CHBr–CBr(CH₃)–CH₂–CH₃: a five-carbon main chain, Br on carbons 2 and 3, and a methyl group on carbon 3.",
    marking_notes: "Memo criteria: five C atoms in the longest chain; two Br and one methyl substituent; whole structure correct.",
    steps: [
      st(1, "How many carbon atoms are in the longest (main) chain of 2,3-dibromo-3-methylpentane?", "5 carbon atoms (pentane)", ["4 carbon atoms (butane)", "6 carbon atoms (hexane)", "3 carbon atoms (propane)"]),
      st(1, "Which substituents does the compound carry?", "Two Br atoms (on C2 and C3) and one methyl group (on C3)", ["One Br atom and two methyl groups", "Two Br atoms (both on C2) and one methyl group on C3", "Two Br atoms and one ethyl group"]),
      st(1, "Which condensed structure is correct for the whole molecule?", "CH₃CHBrC(Br)(CH₃)CH₂CH₃", ["CH₃CBr₂CH(CH₃)CH₂CH₃ (2,2-dibromo-3-methylpentane)", "CH₃CHBrCHBrCH(CH₃)CH₃ (2,3-dibromo-4-methylpentane)", "CH₃CHBrC(Br)(CH₃)CH₂CH₂CH₃ (a hexane chain)"]),
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Write down the STRUCTURAL FORMULA of the acid used to prepare compound B (ethyl ethanoate). (Answer by choosing.)",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Ethanoic acid, CH₃COOH. An ester is prepared from a carboxylic acid and an alcohol; ethyl ethanoate comes from ethanoic acid and ethanol.",
    marking_notes: "Memo: whole structure correct 2/2; only functional group correct (COOH) 1/2; more than one functional group 0/2. Accept -OH as condensed.",
    steps: [
      st(1, "What functional group does the acid used to make an ester have?", "Carboxyl group, –COOH", ["Hydroxyl group, –OH", "Carbonyl group, C=O in the middle of the chain", "Ester group, –COO– in the chain"]),
      st(1, "Which structure is the acid that makes ethyl ethanoate?", "CH₃COOH (ethanoic acid)", ["HCOOH (methanoic acid)", "CH₃CH₂COOH (propanoic acid)", "CH₃COOCH₃ (methyl ethanoate)"]),
    ],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Write down the STRUCTURAL FORMULA of the monomer used to make compound D (polyethene). (Answer by choosing.)",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Ethene, CH₂=CH₂ (drawn in full: H₂C=CH₂ with all four H atoms shown).",
    marking_notes: "Memo: whole structure correct 2/2; only functional group (C=C) correct 1/2; more than one functional group 0/2.",
    steps: [
      st(1, "What feature must the monomer have so that it can join into a polymer by addition?", "A C=C double bond", ["A C–C single bond only", "A carboxyl group", "A hydroxyl group"]),
      st(1, "Which structure is the monomer of polyethene?", "CH₂=CH₂ (ethene)", ["CH₃CH₃ (ethane)", "CH₃CH=CH₂ (propene)", "CH≡CH (ethyne)"]),
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Compound A (2-methylpropene) reacts with an unknown reactant, X, to form 2-methylpropane. Write down the NAME of reactant X.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Hydrogen (H₂). Adding H₂ across the double bond converts the alkene to the alkane.",
    marking_notes: "Memo: Hydrogen (gas).",
    steps: [st(1, "What is reactant X?", "Hydrogen (H₂)", ["Water (H₂O)", "Hydrogen bromide (HBr)", "Bromine (Br₂)"])],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Compound A (2-methylpropene) reacts with an unknown reactant, X, to form 2-methylpropane. Write down the type of reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Addition (hydrogenation).",
    marking_notes: "Memo: Addition / Hydrogenation.",
    steps: [st(1, "What type of reaction takes place?", "Addition (hydrogenation)", ["Substitution", "Elimination", "Cracking"])],
  },

  // ============ QUESTION 3: ISOMERS AND BOILING POINTS (11 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "The boiling points of three isomers are given: A 2,2-dimethylpropane 9 °C, B 2-methylbutane 28 °C, C pentane 36 °C. Define the term structural isomer.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Compounds with the same molecular formula but different structural formulae.",
    marking_notes: "Memo: 2 marks or none. Compounds with the same molecular formula but different structural formulae.",
    steps: [st(2, "Which is the correct definition of structural isomers?", "Compounds with the same molecular formula but different structural formulae.", ["Compounds with the same structural formula but different molecular formulae.", "Compounds with the same functional group but different molecular formulae.", "Compounds with the same molar mass but different elements."])],
  },
  {
    number: "3", sub_number: "3.2",
    text: "What type of isomers (POSITIONAL, CHAIN or FUNCTIONAL) are 2,2-dimethylpropane, 2-methylbutane and pentane?",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Chain isomers: they are all alkanes with the same functional group, differing only in how the carbon chain is branched.",
    marking_notes: "Memo: Chain.",
    steps: [st(1, "What type of isomers are these three compounds?", "Chain isomers", ["Positional isomers", "Functional isomers", "Geometric isomers"])],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Explain the trend in the boiling points from compound A (2,2-dimethylpropane, 9 °C) to compound C (pentane, 36 °C).",
    marks: 3, topicKey: "intermolecular-forces", cognitiveLevelName: "Comprehension",
    model_answer: "From A to C the molecules are less branched/less compact with a longer chain, so there is a larger surface area over which intermolecular forces act. This gives stronger (more) London/dispersion forces, so more energy is needed to overcome the intermolecular forces and the boiling point increases.",
    marking_notes: "Memo (3 marks): structure (less branched / larger surface area), intermolecular forces (stronger or more London/dispersion forces), energy (more energy needed to overcome the forces). The reverse reasoning from C to A is also accepted.",
    steps: [
      st(1, "How does the molecular structure change from A to C?", "Less branched, more elongated, larger surface area", ["More branched and more compact, with a smaller surface area", "The molecules become polar", "The molecules form hydrogen bonds"]),
      st(1, "What happens to the intermolecular forces from A to C?", "Stronger (more) London/dispersion forces", ["Weaker London/dispersion forces", "Covalent bonds between molecules form", "Ion-dipole forces appear"]),
      st(1, "What does this mean for the energy needed to boil the compound?", "More energy is needed to overcome the intermolecular forces", ["Less energy is needed to overcome the intermolecular forces", "More energy is needed to break the covalent bonds inside each molecule", "The same energy is needed because the molecular formula is the same"]),
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Which ONE of the three compounds (A, B or C) has the highest vapour pressure? Refer to the data in the table (boiling points 9 °C, 28 °C and 36 °C) to give a reason for the answer.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Application",
    model_answer: "A (2,2-dimethylpropane): it has the lowest boiling point, so the weakest intermolecular forces and it evaporates most easily.",
    marking_notes: "Memo: A / 2,2-dimethylpropane (1 mark); lowest boiling point (1 mark).",
    steps: [
      st(1, "Which compound has the highest vapour pressure?", "A — 2,2-dimethylpropane", ["B — 2-methylbutane", "C — pentane", "All three have the same vapour pressure because they are isomers"]),
      st(1, "Which reason, from the data, supports this?", "It has the lowest boiling point.", ["It has the highest boiling point.", "It has the highest molar mass.", "It has the longest carbon chain."]),
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Use MOLECULAR FORMULAE and write down a balanced equation for the complete combustion of compound B (2-methylbutane, C₅H₁₂).",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O",
    marking_notes: "Memo: reactants (1), products (1), balancing (1). Ignore double arrows and phases.",
    steps: [
      st(1, "Which are the reactants in complete combustion of C₅H₁₂?", "C₅H₁₂ and O₂", ["C₅H₁₂ and H₂O", "C₅H₁₂ and CO₂", "C₅H₁₂ and N₂"]),
      st(1, "Which are the products of COMPLETE combustion?", "CO₂ and H₂O", ["CO and H₂O (incomplete combustion)", "C and H₂O (soot formation)", "CO₂ and H₂ only"]),
      st(1, "Which is the correctly balanced equation?", "C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O", ["C₅H₁₂ + 5O₂ → 5CO₂ + 6H₂O", "C₅H₁₂ + 6O₂ → 5CO₂ + 6H₂O", "C₅H₁₂ + 8O₂ → 5CO₂ + 12H₂O"]),
    ],
  },

  // ============ QUESTION 4: CRACKING AND REACTIONS OF HYDROCARBONS (13 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "Butane (C₄H₁₀) is produced in industry by the THERMAL cracking of long-chain hydrocarbon molecules: C₁₀H₂₂ → X + C₄H₁₀. X represents an organic compound that is produced. Write down ONE condition required for THERMAL cracking to take place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "High temperature (heat / high energy / high pressure).",
    marking_notes: "Memo: high temperature / heat / high energy / high pressure.",
    steps: [st(1, "Which is a condition required for thermal cracking?", "High temperature", ["Low temperature", "Ultraviolet light", "Concentrated sulphuric acid"])],
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "In the cracking reaction C₁₀H₂₂ → X + C₄H₁₀, write down the molecular formula of compound X.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "C₆H₁₂ (C₁₀H₂₂ minus C₄H₁₀).",
    marking_notes: "Memo: C₆H₁₂ (condensed or structural formula also accepted).",
    steps: [st(1, "What is the molecular formula of X?", "C₆H₁₂", ["C₆H₁₄", "C₆H₁₀", "C₁₄H₃₂"])],
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "In the cracking reaction C₁₀H₂₂ → X + C₄H₁₀, write down the homologous series to which compound X belongs.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Alkenes (C₆H₁₂ fits CₙH₂ₙ).",
    marking_notes: "Memo: Alkenes.",
    steps: [st(1, "To which homologous series does X belong?", "Alkenes", ["Alkanes", "Alkynes", "Alcohols"])],
  },
  {
    number: "4", sub_number: "4.2",
    text: "A mixture of the two gases, compound X and butane, is bubbled through bromine water, Br₂(aq), in a conical flask (apparatus shown). THE REACTION IS CARRIED OUT IN A DARKENED ROOM. The colour of the bromine water changes from reddish brown to colourless. Which ONE of the gases (X or BUTANE) decolorises the bromine water? Explain the answer.",
    marks: 4, topicKey: "organic-chemistry", cognitiveLevelName: "Evaluation",
    model_answer: "X (C₆H₁₂, the alkene). X is unsaturated (has a double bond) and undergoes an addition reaction with Br₂ without needing light or heat, whereas butane is saturated and can only undergo substitution, which needs light.",
    marking_notes: "Memo Option 1: X is an alkene / has a double bond / unsaturated; X can undergo addition; X reacts without light/heat or is more reactive. Option 2 gives the same reasoning from the butane side (alkane, saturated; only substitution; needs light/heat or is less reactive). 1 mark for the correct gas plus 3 for the reasoning.",
    image_url: `${IMG}/4.2-bromine-water-apparatus.png`,
    steps: [
      st(1, "Which gas decolorises the bromine water?", "X (the alkene, C₆H₁₂)", ["Butane (C₄H₁₀)", "Both gases decolorise it equally", "Neither gas; the bromine water is decolorised by the water"]),
      st(1, "What structural feature of that gas explains this?", "It is unsaturated: it has a C=C double bond", ["It is saturated: it has only single bonds", "It is a polar molecule", "It has a higher molar mass"]),
      st(1, "Which type of reaction occurs between that gas and Br₂?", "Addition", ["Substitution", "Elimination", "Esterification"]),
      st(1, "Why does butane NOT react in a darkened room?", "Butane (alkane) only reacts by substitution, which needs light or heat; X reacts without light", ["Butane is more reactive than X but is too soluble in water", "Butane undergoes addition, which needs light", "Bromine reacts only with gases of a lower molar mass"]),
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Study the flow diagram: butane (C₄H₁₀) undergoes chlorination to form compound P. Reaction I converts P into CH₃CH₂CH(OH)CH₃ (butan-2-ol). Reaction II (with concentrated NaOH) converts P into compound Q (major product). Reaction III converts Q into butan-2-ol. Write down the IUPAC name of compound P.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-chlorobutane (the OH of butan-2-ol is on C2, so reaction I replaced Cl on C2 with OH).",
    marking_notes: "Memo: 2-chlorobutane (2 marks).",
    image_url: `${IMG}/4.3-flow-diagram.png`,
    steps: [
      st(1, "What are the parent chain and the substituent of P?", "A four-carbon chain with a chlorine atom (chlorobutane)", ["A three-carbon chain with a chlorine atom (chloropropane)", "A four-carbon chain with an OH group (butanol)", "A four-carbon chain with a double bond (butene)"]),
      st(1, "What is the full IUPAC name of P?", "2-chlorobutane", ["1-chlorobutane", "3-chlorobutane", "2-chlorobutene"]),
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "In the flow diagram (P → butan-2-ol in reaction I), write down the type of reaction labelled I.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Substitution (hydrolysis): Cl is replaced by OH.",
    marking_notes: "Memo: Substitution / Hydrolysis.",
    image_url: `${IMG}/4.3-flow-diagram.png`,
    steps: [st(1, "What type of reaction is reaction I?", "Substitution (hydrolysis)", ["Addition", "Elimination", "Cracking"])],
  },
  {
    number: "4", sub_number: "4.3.3",
    text: "In the flow diagram, reaction II (P with concentrated NaOH) forms compound Q (major product), which hydrates in reaction III to give butan-2-ol. Write down the structural formula of compound Q.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Evaluation",
    model_answer: "CH₃CH=CHCH₃ (but-2-ene): elimination of HCℓ from 2-chlorobutane gives the more substituted alkene as the major product, drawn in full with all H atoms.",
    marking_notes: "Memo: whole structure correct 2/2 (but-2-ene drawn in full); only the functional group (C=C) correct 1/2; more than one functional group 0/2.",
    image_url: `${IMG}/4.3-flow-diagram.png`,
    steps: [
      st(1, "Which functional group does Q contain?", "A C=C double bond (alkene)", ["A hydroxyl group, –OH", "A carbonyl group, C=O", "A chlorine atom, –Cl"]),
      st(1, "Which structure is Q (the major product)?", "CH₃CH=CHCH₃ (but-2-ene)", ["CH₂=CHCH₂CH₃ (but-1-ene)", "CH₃CH₂CH₂CH₃ (butane)", "CH₃CH(OH)CH₂CH₃ (butan-2-ol)"]),
    ],
  },
  {
    number: "4", sub_number: "4.3.4",
    text: "In the flow diagram, reaction III converts compound Q (an alkene) into butan-2-ol. Write down the type of addition reaction represented by reaction III.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Hydration (addition of water).",
    marking_notes: "Memo: Hydration.",
    image_url: `${IMG}/4.3-flow-diagram.png`,
    steps: [st(1, "What type of addition reaction is reaction III?", "Hydration", ["Hydrogenation", "Hydrohalogenation", "Halogenation"])],
  },

  // ============ QUESTION 5: RATE OF REACTION (20 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "Hydrogen peroxide, H₂O₂, decomposes to produce water and oxygen: 2H₂O₂(ℓ) → 2H₂O(ℓ) + O₂(g). The activation energy (EA) for this reaction is 75 kJ and the heat of reaction (ΔH) is –196 kJ. Define the term activation energy.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "The minimum energy needed for a reaction to take place (equivalently, the minimum energy needed to form the activated complex).",
    marking_notes: "Memo: The minimum energy needed for a reaction to take place / minimum energy needed to form the activated complex (2 marks).",
    steps: [st(2, "Which is the correct definition of activation energy?", "The minimum energy needed for a reaction to take place.", ["The energy released when a reaction takes place.", "The average kinetic energy of the reacting molecules.", "The difference in energy between the reactants and the products."])],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "For the decomposition of H₂O₂ (EA = 75 kJ, ΔH = –196 kJ), complete the potential energy diagram on the axes given (H₂O₂ starts at 0 on the y-axis; the graph does NOT have to be drawn to scale), indicating the potential energy of the activated complex and of the products on the y-axis. Choose the correct features of the completed diagram.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "An exothermic curve: it rises from 0 to a peak (activated complex) at +75 kJ, then falls to the products at –196 kJ, which lie below the reactants.",
    marking_notes: "Memo criteria (1 mark each): shape of curve for an exothermic reaction; activated complex shown as 75 kJ in line with the peak; products shown as –196 kJ below the zero. A wrong shape such as a straight line scores 0/3.",
    image_url: `${IMG}/5.1.2-axes.png`,
    steps: [
      st(1, "What is the shape of the curve for this reaction?", "Rises from the reactants to a peak, then falls to products BELOW the starting level (exothermic)", ["Rises from the reactants to a peak, then falls to products ABOVE the starting level (endothermic)", "A straight line sloping downward from the reactants to the products", "A horizontal line at 0 kJ"]),
      st(1, "What value is shown on the y-axis for the activated complex (the peak)?", "+75 kJ", ["+196 kJ", "+121 kJ", "–75 kJ"]),
      st(1, "What value is shown on the y-axis for the products?", "–196 kJ", ["+196 kJ", "–121 kJ", "+75 kJ"]),
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Powdered manganese dioxide (a catalyst) is added and the rate of reaction increases. On the graph drawn for 5.1.2, use broken lines to show the path of the reaction when manganese dioxide is added. Choose the correct features of the broken-line path.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "A dotted curve with a lower peak (lower activated complex energy), starting at the same energy as the reactants and ending at the same energy as the products (-196 kJ), lying inside the original curve.",
    marking_notes: "Memo criteria (1 mark each): dotted line showing a lower energy for the activated complex; dotted curve starts at/above the energy of the reactants and ends at/above the energy of the products, on the inside of the original curve.",
    image_url: `${IMG}/5.1.2-axes.png`,
    steps: [
      st(1, "How does the catalysed path differ at the peak?", "Its peak (activated complex) is LOWER than 75 kJ", ["Its peak is HIGHER than 75 kJ", "Its peak is at exactly 75 kJ", "It has no peak"]),
      st(1, "Where do the broken-line curve start and end?", "Same reactant energy at the start and same product energy at the end, inside the original curve", ["The products end at a lower energy than –196 kJ", "The products end at a higher energy than the reactants", "The curve starts at the peak of the original curve"]),
    ],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Use the collision theory to explain how manganese dioxide influences the rate of decomposition of hydrogen peroxide.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "The catalyst provides an alternative pathway of lower activation energy. More molecules therefore have sufficient kinetic energy (equal to or greater than the new activation energy), so there are more effective collisions per unit time, and the rate increases.",
    marking_notes: "Memo (1 mark each): alternative pathway of lower activation energy; more molecules have sufficient (kinetic) energy / energy equal to or greater than the activation energy; more effective collisions per unit time (frequency of effective collisions increases).",
    steps: [
      st(1, "What does the catalyst do to the activation energy?", "Provides an alternative pathway with a lower activation energy", ["Provides a pathway with a higher activation energy", "Increases the average kinetic energy of the molecules", "Increases the heat of reaction"]),
      st(1, "What is the effect on the molecules?", "More molecules have sufficient kinetic energy (≥ the activation energy)", ["Fewer molecules have sufficient kinetic energy", "The molecules move faster because the temperature rises", "The concentration of the molecules increases"]),
      st(1, "What follows for the collisions?", "More effective collisions per unit time", ["Fewer effective collisions per unit time", "Every collision becomes effective", "The same number of effective collisions, but each releases more energy"]),
    ],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Graphs A and B show the volume of oxygen produced over time under different conditions (see graph). Calculate the average rate of the reaction (in dm³·s⁻¹) between t = 10 s and t = 40 s for graph A. Read from the graph: V(O₂) at 10 s on graph A is 16 dm³ and at 40 s is 52 dm³.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Average rate = ΔV/Δt = (52 – 16)/(40 – 10) = 36/30 = 1,2 dm³·s⁻¹.",
    marking_notes: "Memo: formula ΔV/Δt; substitution of the graph readings; answer 1,2 dm³·s⁻¹ (accepted answer range 1,167 to 1,2; volume reading range 16 to 17).",
    image_url: `${IMG}/5.2-graphs-a-b.png`,
    steps: [
      st(1, "Which formula gives the average rate?", "Average rate = ΔV/Δt", ["Average rate = V/t at t = 40 s only", "Average rate = Δt/ΔV", "Average rate = ΔV × Δt"]),
      st(1, "Which substitution is correct?", "(52 – 16) / (40 – 10)", ["(52 – 16) / 40", "52 / (40 – 10)", "(60 – 16) / (40 – 10)"]),
      st(1, "What is the average rate?", "1,2 dm³·s⁻¹", ["0,83 dm³·s⁻¹", "1,73 dm³·s⁻¹", "1,3 dm³·s⁻¹"]),
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Use the information in graph A to calculate the mass of hydrogen peroxide used in the reaction (2H₂O₂ → 2H₂O + O₂). Assume that all the hydrogen peroxide decomposed. Use 24 dm³·mol⁻¹ as the molar volume of oxygen. (Graph A levels off at a total volume of 60 dm³ of O₂.)",
    marks: 4, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "n(O₂) = V/Vm = 60/24 = 2,5 mol. n(H₂O₂) = 2n(O₂) = 5 mol. M(H₂O₂) = 34 g·mol⁻¹. m = nM = 5 × 34 = 170 g.",
    marking_notes: "Memo: V(O₂) = 60 dm³ and divide by 24; use ratio n(H₂O₂) = 2n(O₂); use 34 g·mol⁻¹; final answer 170 g (alternative route via 80 g O₂ also accepted).",
    image_url: `${IMG}/5.2-graphs-a-b.png`,
    steps: [
      st(1, "What is n(O₂) produced (V = 60 dm³, Vm = 24 dm³·mol⁻¹)?", "2,5 mol", ["0,4 mol", "1440 mol", "5 mol"]),
      st(1, "Using the mole ratio 2H₂O₂ : 1O₂, what is n(H₂O₂)?", "5 mol", ["2,5 mol", "1,25 mol", "10 mol"]),
      st(1, "What molar mass of H₂O₂ is used?", "34 g·mol⁻¹", ["32 g·mol⁻¹", "18 g·mol⁻¹", "17 g·mol⁻¹"]),
      st(1, "What is the mass of H₂O₂ used?", "170 g", ["85 g", "80 g", "340 g"]),
    ],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "How does the mass of hydrogen peroxide used to obtain graph B compare to that used to obtain graph A? Choose from GREATER THAN, SMALLER THAN or EQUAL TO. (Both graphs level off at the same final volume of 60 dm³.)",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Equal to: both graphs produce the same final volume of O₂, so the same amount of H₂O₂ decomposed; graph B is simply slower.",
    marking_notes: "Memo: Equal to.",
    image_url: `${IMG}/5.2-graphs-a-b.png`,
    steps: [st(1, "How does the mass of H₂O₂ for graph B compare with graph A?", "EQUAL TO", ["GREATER THAN", "SMALLER THAN", "Cannot be compared, because the rates differ"])],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Three energy distribution curves for the oxygen gas produced under different conditions are shown: the solid line represents 1 mol of oxygen gas at 90 °C; curve P is taller and narrower with its peak at a lower energy; curve Q is flatter, wider and shifted to higher kinetic energies. Choose the curve (P or Q) that best represents 1 mol of oxygen gas produced at 120 °C.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "Q: a higher temperature shifts the peak to a higher kinetic energy and flattens the curve, with the same total area (same number of molecules).",
    marking_notes: "Memo: Q.",
    image_url: `${IMG}/5.3-energy-distribution.png`,
    steps: [st(1, "Which curve represents 1 mol of O₂ at 120 °C?", "Q", ["P", "Both P and Q", "Neither P nor Q"])],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Using the same energy distribution curves (solid line = 1 mol of O₂ at 90 °C; P taller and narrower; Q flatter and shifted right), choose the curve (P or Q) that best represents 2 moles of oxygen gas produced at 90 °C.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "P: the same temperature gives the same shape and peak position, but twice the number of molecules gives a taller curve with a larger area.",
    marking_notes: "Memo: P.",
    image_url: `${IMG}/5.3-energy-distribution.png`,
    steps: [st(1, "Which curve represents 2 mol of O₂ at 90 °C?", "P", ["Q", "Both P and Q", "Neither P nor Q"])],
  },

  // ============ QUESTION 6: CHEMICAL EQUILIBRIUM (18 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "Hydrogen gas reacts with sulphur powder: H₂(g) + S(s) ⇌ H₂S(g), ΔH < 0. The system reaches equilibrium at 90 °C. Define the term chemical equilibrium.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "The stage in a chemical reaction when the rate of the forward reaction equals the rate of the reverse reaction (equivalently, the state where the concentrations/quantities of reactants and products remain constant).",
    marking_notes: "Memo: 2 marks or none. The stage when the rate of forward reaction equals the rate of reverse reaction, OR the state where concentrations/quantities of reactants and products remain constant.",
    steps: [st(2, "Which is the correct definition of chemical equilibrium?", "The stage when the rate of the forward reaction equals the rate of the reverse reaction.", ["The stage when the forward reaction has stopped completely.", "The stage when the concentrations of reactants and products are equal.", "The stage when all the reactants have been converted to products."])],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "H₂(g) + S(s) ⇌ H₂S(g), ΔH < 0. How will the addition of more sulphur affect the number of moles of H₂S(g) at equilibrium? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "chemical-equilibrium", cognitiveLevelName: "Comprehension",
    model_answer: "Remains the same: sulphur is a solid, so its concentration is constant and adding more does not shift the equilibrium.",
    marking_notes: "Memo: Remains the same.",
    steps: [st(1, "What is the effect of adding more S(s) on the moles of H₂S(g)?", "REMAINS THE SAME", ["INCREASES", "DECREASES", "Cannot be predicted without the value of Kc"])],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "H₂(g) + S(s) ⇌ H₂S(g), ΔH < 0. How will an increase in temperature affect the number of moles of H₂S(g) at equilibrium? Choose from INCREASES, DECREASES or REMAINS THE SAME. Use Le Chatelier's principle to explain the answer.",
    marks: 4, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Decreases. When the temperature is increased, the reaction that opposes the increase (that lowers the temperature) is favoured. The forward reaction is exothermic, so the endothermic reverse reaction is favoured and less H₂S is present at equilibrium.",
    marking_notes: "Memo (4 marks): decreases; when temperature increases the reaction that opposes/decreases the temperature is favoured; the forward reaction is exothermic and an increase in temperature favours the endothermic reaction; the reverse reaction is favoured.",
    steps: [
      st(1, "How does the number of moles of H₂S change?", "DECREASES", ["INCREASES", "REMAINS THE SAME", "First increases and then returns to the original value"]),
      st(1, "What does Le Chatelier's principle predict for an increase in temperature?", "The reaction that opposes the increase (absorbs heat) is favoured", ["The exothermic reaction is always favoured", "The side with fewer gas moles is favoured", "Both reactions speed up equally, so nothing shifts"]),
      st(1, "What is the energy nature of the two reactions?", "Forward reaction exothermic (ΔH < 0); reverse reaction endothermic", ["Forward reaction endothermic; reverse reaction exothermic", "Both reactions are exothermic", "Both reactions are endothermic"]),
      st(1, "Which reaction is therefore favoured?", "The reverse reaction", ["The forward reaction", "Neither reaction", "Both reactions equally"]),
    ],
  },
  {
    number: "6", sub_number: "6.3",
    text: "The sketch graph shows reaction rate (mol·s⁻¹) against time (s) for the equilibrium mixture (the forward-reaction curve falls and the reverse-reaction curve rises until both are equal and horizontal up to time t₁). A catalyst is added to the equilibrium mixture at time t₁. On the same set of axes, complete the graph showing the effect of the catalyst on the reaction rates. Choose the correct features of the completed graph.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "At t₁ both the forward and reverse rates rise suddenly and by the same amount (vertical parallel lines), then stay equal, constant and at a higher level (horizontal parallel lines) after t₁.",
    marking_notes: "Memo (1 mark each): vertical parallel lines showing a sudden increase in rate of both forward and reverse reactions; horizontal parallel lines showing a constant higher rate for both catalysed reactions after t₁.",
    image_url: `${IMG}/6.3-rate-time-graph.png`,
    steps: [
      st(1, "What happens to the rates at t₁?", "Both rates increase suddenly and equally (vertical, parallel lines)", ["Only the forward rate increases suddenly", "Only the reverse rate increases suddenly", "Both rates decrease suddenly"]),
      st(1, "What do the rates look like after t₁?", "Two horizontal parallel (equal) lines at a constant, higher rate", ["Two lines that gradually diverge from each other", "Two horizontal lines at the original (lower) rate", "Two lines that fall back to zero"]),
    ],
  },
  {
    number: "6", sub_number: "6.4",
    text: "Initially 0,16 mol H₂(g) and excess S(s) are sealed in a 2 dm³ container and the system (H₂(g) + S(s) ⇌ H₂S(g)) is allowed to reach equilibrium at 90 °C. An exact amount of Pb(NO₃)₂ solution is added so that ALL the H₂S(g) present at EQUILIBRIUM is converted to PbS(s): Pb(NO₃)₂(aq) + H₂S(g) → PbS(s) + 2HNO₃(aq). The mass of the PbS precipitate is 2,39 g. Calculate the equilibrium constant Kc for the reaction at 90 °C.",
    marks: 9, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "n(PbS) = m/M = 2,39/239 = 0,01 mol. n(H₂S)eq = n(PbS) = 0,01 mol, so n(H₂S) formed = 0,01 mol and, from the 1:1 ratio, n(H₂) reacted = 0,01 mol. n(H₂)eq = 0,16 – 0,01 = 0,15 mol. Dividing by 2 dm³: [H₂] = 0,075 mol·dm⁻³ and [H₂S] = 0,005 mol·dm⁻³. Kc = [H₂S]/[H₂] (S is a solid) = 0,005/0,075 = 0,067 ≈ 0,07.",
    marking_notes: "Memo (9 marks): M(PbS) = 239 g·mol⁻¹ in n = m/M; ratio n(H₂S)eq = n(PbS); n(H₂S) formed = n(H₂S)eq; ratio H₂ : H₂S = 1 : 1; n(H₂)eq = n(H₂) initial – n(H₂) formed; divide equilibrium n(H₂S) and n(H₂) by 2 dm³; correct Kc expression; substitution; final answer 0,07 (0,067 if not rounded). A wrong Kc expression caps at 6/9 and no Kc expression at 8/9. Five equivalent worked options are given in the memo.",
    steps: [
      st(1, "Using M(PbS) = 239 g·mol⁻¹, what is n(PbS)?", "0,01 mol", ["0,0083 mol", "100 mol", "0,16 mol"]),
      st(1, "What does n(H₂S) at equilibrium equal (from Pb(NO₃)₂ + H₂S → PbS, ratio 1:1)?", "n(H₂S)eq = n(PbS) = 0,01 mol", ["n(H₂S)eq = 2n(PbS) = 0,02 mol", "n(H₂S)eq = n(H₂) initial = 0,16 mol", "n(H₂S)eq = 0 mol (all has been used)"]),
      st(1, "Since no H₂S was present initially, what is n(H₂S) formed?", "0,01 mol (equal to n(H₂S) at equilibrium)", ["0,16 mol", "0,15 mol", "0,0 mol"]),
      st(1, "Using the ratio H₂ : H₂S = 1 : 1, how many moles of H₂ reacted?", "0,01 mol", ["0,02 mol", "0,005 mol", "0,16 mol"]),
      st(1, "What is n(H₂) at equilibrium?", "0,16 – 0,01 = 0,15 mol", ["0,16 + 0,01 = 0,17 mol", "0,01 mol", "0,16 mol"]),
      st(1, "After dividing by the volume (2 dm³), what are the equilibrium concentrations?", "[H₂] = 0,075 mol·dm⁻³ and [H₂S] = 0,005 mol·dm⁻³", ["[H₂] = 0,15 mol·dm⁻³ and [H₂S] = 0,01 mol·dm⁻³ (not divided by 2)", "[H₂] = 0,08 mol·dm⁻³ and [H₂S] = 0,005 mol·dm⁻³", "[H₂] = 0,005 mol·dm⁻³ and [H₂S] = 0,075 mol·dm⁻³"]),
      st(1, "Which is the correct Kc expression?", "Kc = [H₂S] / [H₂]", ["Kc = [H₂] / [H₂S]", "Kc = [H₂S] / ([H₂][S])", "Kc = [H₂][S] / [H₂S]"]),
      st(1, "Which substitution into Kc is correct?", "Kc = 0,005 / 0,075", ["Kc = 0,075 / 0,005", "Kc = 0,01 / 0,15", "Kc = 0,05 / 0,75"]),
      st(1, "What is Kc?", "0,07 (0,067)", ["15", "0,13", "0,5"]),
    ],
  },

  // ============ QUESTION 7: ACIDS AND BASES (16 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "A learner dissolves ammonium chloride (NH₄Cℓ) crystals in water and measures the pH of the solution. Define the term hydrolysis of a salt.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "The reaction of a salt with water (a chemical reaction in which water is a reactant).",
    marking_notes: "Memo: Hydrolysis is the reaction (of a salt) with water (2 or 0). Accept: a chemical reaction in which water is a reactant.",
    steps: [st(2, "Which is the correct definition of hydrolysis of a salt?", "The reaction of a salt with water.", ["The dissolving of a salt in water without any chemical reaction.", "The reaction of an acid with a base to form a salt and water.", "The decomposition of water into hydrogen and oxygen."])],
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Will the pH of an ammonium chloride (NH₄Cℓ) solution be GREATER THAN, SMALLER THAN or EQUAL TO 7? Write a relevant equation to support your answer.",
    marks: 3, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "Smaller than 7. NH₄⁺ + H₂O → NH₃ + H₃O⁺: the ammonium ion hydrolyses to form H₃O⁺, making the solution acidic.",
    marking_notes: "Memo: Smaller than 7 (1); equation marked independently: reactants (1), products (1). Also accepted: NH₄Cℓ + H₂O → NH₃ + H₃O⁺ + Cℓ⁻ or NH₄⁺ → NH₃ + H⁺. Ignore double arrows and phases.",
    steps: [
      st(1, "Will the pH be greater than, smaller than or equal to 7?", "SMALLER THAN 7", ["GREATER THAN 7", "EQUAL TO 7", "Cannot be determined without the concentration"]),
      st(1, "Which are the reactants in the hydrolysis equation?", "NH₄⁺ and H₂O", ["Cℓ⁻ and H₂O", "NH₃ and H₂O", "NH₄⁺ and OH⁻"]),
      st(1, "Which are the products?", "NH₃ and H₃O⁺", ["NH₃ and OH⁻", "NH₄OH and H₃O⁺", "HCℓ and OH⁻"]),
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "A sulphuric acid solution is prepared by dissolving 7,35 g of H₂SO₄(ℓ) in 500 cm³ of water. Calculate the number of moles of H₂SO₄ present in this solution.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "n = m/M = 7,35/98 = 0,075 mol (0,08 mol when rounded).",
    marking_notes: "Memo: substitution of 98 g·mol⁻¹ (1); final answer 0,08 mol (0,075 mol if not rounded) (1). The unrounded 0,075 mol is carried into 7.2.2.",
    steps: [
      st(1, "Which molar mass of H₂SO₄ is used in n = m/M?", "98 g·mol⁻¹", ["96 g·mol⁻¹", "64 g·mol⁻¹", "34 g·mol⁻¹"]),
      st(1, "What is n(H₂SO₄)?", "0,075 mol (0,08 mol rounded)", ["0,15 mol", "13,3 mol", "0,0375 mol"]),
    ],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Sodium hydroxide (NaOH) pellets are added to the 500 cm³ H₂SO₄ solution (0,075 mol H₂SO₄). The balanced equation is: H₂SO₄(aq) + 2NaOH(s) → Na₂SO₄(aq) + 2H₂O(ℓ). After completion of the reaction, the pH of the solution was found to be 1,3. Assume complete ionisation of H₂SO₄. Calculate the mass of NaOH added to the H₂SO₄ solution. Assume that the volume of the solution does not change.",
    marks: 9, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "pH = –log[H₃O⁺], so 1,3 = –log[H₃O⁺] gives [H₃O⁺] = 0,05 mol·dm⁻³. [H₂SO₄] left = ½[H₃O⁺] = 0,025 mol·dm⁻³. n(H₂SO₄) left = cV = 0,025 × 0,5 = 0,0125 mol. n(H₂SO₄) reacted = 0,075 – 0,0125 = 0,0625 mol. n(NaOH) = 2n(H₂SO₄) = 0,125 mol. m = nM = 0,125 × 40 = 5 g.",
    marking_notes: "Memo (9 marks): formula pH = –log[H₃O⁺]; substitution of 1,3; use [H₂SO₄] : [H₃O⁺] = 1 : 2; formula c = n/V; multiply by 0,5 dm³; subtract n initial – n excess; use n(NaOH) : n(H₂SO₄) = 2 : 1; substitution of 40 g·mol⁻¹; final answer 5 g (accepted range 4,8 to 5,6 g because of rounding paths). Positive marking from 7.2.1. Memo gives three alternative routes (via H₂SO₄ amounts, via H₃O⁺ amounts, via concentrations).",
    steps: [
      st(1, "Which formula links pH to the hydronium concentration?", "pH = –log[H₃O⁺]", ["pH = log[H₃O⁺]", "pH = –ln[OH⁻]", "pH = [H₃O⁺] / 14"]),
      st(1, "What is [H₃O⁺] when pH = 1,3?", "0,05 mol·dm⁻³", ["0,5 mol·dm⁻³", "1,3 mol·dm⁻³", "0,0013 mol·dm⁻³"]),
      st(1, "How does [H₂SO₄] left over relate to [H₃O⁺] (complete ionisation, 1 : 2)?", "[H₂SO₄] = ½[H₃O⁺] = 0,025 mol·dm⁻³", ["[H₂SO₄] = 2[H₃O⁺] = 0,1 mol·dm⁻³", "[H₂SO₄] = [H₃O⁺] = 0,05 mol·dm⁻³", "[H₂SO₄] = ½[H₃O⁺] = 0,25 mol·dm⁻³"]),
      st(1, "Which formula converts the concentration to the amount of acid left over?", "n = cV", ["n = m/M", "n = c/V", "n = V/Vm"]),
      st(1, "What amount of H₂SO₄ is left over (V = 0,5 dm³)?", "0,0125 mol", ["0,05 mol", "0,125 mol", "0,0625 mol"]),
      st(1, "What amount of H₂SO₄ reacted with the NaOH?", "0,075 – 0,0125 = 0,0625 mol", ["0,075 + 0,0125 = 0,0875 mol", "0,0125 mol", "0,075 mol"]),
      st(1, "Using the mole ratio H₂SO₄ : NaOH = 1 : 2, what is n(NaOH)?", "0,125 mol", ["0,0625 mol", "0,0313 mol", "0,25 mol"]),
      st(1, "Which molar mass of NaOH is used in m = nM?", "40 g·mol⁻¹", ["23 g·mol⁻¹", "17 g·mol⁻¹", "58 g·mol⁻¹"]),
      st(1, "What mass of NaOH was added?", "5 g", ["2,5 g", "10 g", "2,3 g"]),
    ],
  },

  // ============ QUESTION 8: GALVANIC CELLS (16 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "A nickel (Ni) rod is placed in a beaker containing a silver nitrate solution, AgNO₃(aq), and a reaction takes place. Write down the NAME or FORMULA of the electrolyte.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "AgNO₃ (silver nitrate).",
    marking_notes: "Memo: AgNO₃ / silver nitrate.",
    image_url: `${IMG}/8.1-nickel-rod-beaker.png`,
    steps: [st(1, "What is the electrolyte?", "AgNO₃ (silver nitrate solution)", ["Ni (the nickel rod)", "Ni(NO₃)₂ (nickel nitrate)", "Ag (silver metal)"])],
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "A nickel rod is placed in AgNO₃(aq) and a reaction takes place. Write down the oxidation half-reaction that takes place.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Ni → Ni²⁺ + 2e⁻",
    marking_notes: "Memo: Ni → Ni²⁺ + 2e⁻ (2). Ni ⇌ Ni²⁺ + 2e⁻ scores 1/2; reduction written (Ni²⁺ + 2e⁻ → Ni) 0/2; Ni²⁺ + 2e⁻ ← Ni 2/2; if the charge on Ni²⁺ is omitted max 1/2. Ignore the charge on the electron being omitted.",
    image_url: `${IMG}/8.1-nickel-rod-beaker.png`,
    steps: [
      st(1, "Which species is oxidised and what does it form?", "Ni is oxidised and forms Ni²⁺", ["Ag⁺ is oxidised and forms Ag", "Ni²⁺ is oxidised and forms Ni", "NO₃⁻ is oxidised"]),
      st(1, "Which half-reaction is written correctly?", "Ni → Ni²⁺ + 2e⁻", ["Ni → Ni²⁺ + e⁻", "Ni²⁺ + 2e⁻ → Ni", "Ni + 2e⁻ → Ni²⁻"]),
    ],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "A nickel rod is placed in AgNO₃(aq) and a reaction takes place. Write down the balanced equation for the net (overall) redox reaction that takes place.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Ni + 2Ag⁺ → Ni²⁺ + 2Ag (or Ni + 2AgNO₃ → Ni(NO₃)₂ + 2Ag).",
    marking_notes: "Memo: reactants (1), products (1), balancing (1). Ignore double arrows.",
    steps: [
      st(1, "Which are the reactants?", "Ni and Ag⁺", ["Ni²⁺ and Ag", "Ni and Ag", "Ni²⁺ and Ag⁺"]),
      st(1, "Which are the products?", "Ni²⁺ and Ag", ["Ni and Ag⁺", "Ni²⁺ and Ag⁺", "Ni and Ag"]),
      st(1, "Which is the correctly balanced equation?", "Ni + 2Ag⁺ → Ni²⁺ + 2Ag", ["Ni + Ag⁺ → Ni²⁺ + Ag", "Ni + 2Ag⁺ → Ni²⁺ + Ag", "2Ni + Ag⁺ → 2Ni²⁺ + Ag"]),
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "A galvanic cell is set up using a nickel half-cell and a silver half-cell (see diagram). Which electrode (Ni or Ag) must be connected to the negative terminal of the voltmeter? Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Ni: it is the stronger reducing agent, so it is oxidised and loses electrons (it is the anode).",
    marking_notes: "Memo: Ni (1); reason (1): Ni is a stronger reducing agent / has a higher reducing ability / is the anode / loses electrons / is oxidised.",
    image_url: `${IMG}/8.2-galvanic-cell.png`,
    steps: [
      st(1, "Which electrode is connected to the negative terminal?", "Ni", ["Ag", "Both electrodes", "Neither; the voltmeter has no polarity"]),
      st(1, "Which reason is correct?", "Ni is the anode; it is the stronger reducing agent and loses electrons", ["Ni is the cathode; it gains electrons", "Ni is the stronger oxidising agent", "Ni²⁺ ions are reduced at this electrode"]),
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "For the galvanic cell with a nickel half-cell and a silver half-cell, write down the cell notation.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Ni(s) | Ni²⁺(aq) || Ag⁺(aq) | Ag(s)",
    marking_notes: "Memo: Ni(s) | Ni²⁺(aq) || Ag⁺(aq) | Ag(s), or with concentrations (1 mol·dm⁻³); accept Ni | Ni²⁺ || Ag⁺ | Ag. Three marks: anode half-cell on the left, double line for the salt bridge, cathode half-cell on the right.",
    steps: [
      st(1, "How is the anode (oxidation) half-cell written, on the left?", "Ni(s) | Ni²⁺(aq)", ["Ni²⁺(aq) | Ni(s)", "Ag(s) | Ag⁺(aq)", "Ag⁺(aq) | Ag(s)"]),
      st(1, "How is the salt bridge shown between the half-cells?", "A double vertical line ||", ["A single vertical line |", "A comma", "An arrow →"]),
      st(1, "How is the cathode (reduction) half-cell written, on the right?", "Ag⁺(aq) | Ag(s)", ["Ag(s) | Ag⁺(aq)", "Ni²⁺(aq) | Ni(s)", "Ag⁺(aq) | Ni(s)"]),
    ],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "Calculate the initial reading on the voltmeter if the Ni/Ag galvanic cell functions under standard conditions. (Use the standard reduction potentials from the data sheet: E°(Ag⁺/Ag) = +0,80 V; E°(Ni²⁺/Ni) = –0,27 V.)",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "E°cell = E°reduction – E°oxidation = 0,80 – (–0,27) = 1,07 V.",
    marking_notes: "Memo: formula E°cell = E°cathode – E°anode (or any other correct formula from the data sheet) followed by correct substitution; answer 1,07 V (4 marks).",
    steps: [
      st(1, "Which formula is used for E°cell?", "E°cell = E°cathode – E°anode (E°reduction – E°oxidation)", ["E°cell = E°anode – E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°cathode × E°anode"]),
      st(1, "Which value is used for the cathode (Ag⁺ + e⁻ → Ag)?", "+0,80 V", ["–0,80 V", "+0,27 V", "–0,27 V"]),
      st(1, "Which value is used for the anode (Ni → Ni²⁺ + 2e⁻), taking the E° from the table?", "–0,27 V", ["+0,27 V", "+0,80 V", "–0,54 V"]),
      st(1, "What is the initial reading on the voltmeter?", "1,07 V", ["0,53 V", "0,80 V", "–1,07 V"]),
    ],
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "How will the voltmeter reading in Question 8.2.3 be affected if the concentration of the silver ions is increased? Choose from INCREASES, DECREASES or REMAINS THE SAME.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Increases: a higher [Ag⁺] favours the forward reaction (Le Chatelier), increasing the cell potential.",
    marking_notes: "Memo: Increases.",
    image_url: `${IMG}/8.2-galvanic-cell.png`,
    steps: [st(1, "What happens to the voltmeter reading?", "INCREASES", ["DECREASES", "REMAINS THE SAME", "Drops to zero immediately"])],
  },

  // ============ QUESTION 9: ELECTROLYSIS OF NaCℓ (9 marks) ============

  {
    number: "9", sub_number: "9.1",
    text: "Carbon electrodes are used during the electrolysis of a concentrated sodium chloride solution (diagram shown; electrode P is connected to the positive terminal of the battery, gas X forms at P, gas Y at Q). The net cell reaction is: 2H₂O(ℓ) + 2Cℓ⁻(aq) → Cℓ₂(g) + H₂(g) + 2OH⁻(aq). Is the reaction EXOTHERMIC or ENDOTHERMIC?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Endothermic: electrical energy must be supplied to drive this non-spontaneous reaction.",
    marking_notes: "Memo: Endothermic.",
    image_url: `${IMG}/9-electrolysis-cell.png`,
    steps: [st(1, "Is the reaction exothermic or endothermic?", "ENDOTHERMIC", ["EXOTHERMIC", "Neither; electrolysis has no energy change", "Both, depending on the electrode"])],
  },
  {
    number: "9", sub_number: "9.2",
    text: "In the electrolysis of concentrated NaCℓ(aq) (diagram shown; electrode P is connected to the positive terminal of the battery), is electrode P the ANODE or the CATHODE? Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Anode: it is connected to the positive terminal of the battery.",
    marking_notes: "Memo: Anode (1); connected to the positive terminal of the battery (1).",
    image_url: `${IMG}/9-electrolysis-cell.png`,
    steps: [
      st(1, "Is electrode P the anode or the cathode?", "ANODE", ["CATHODE", "Neither, it is a salt bridge", "Both an anode and a cathode"]),
      st(1, "Which reason is correct?", "It is connected to the positive terminal of the battery", ["It is connected to the negative terminal of the battery", "Reduction takes place at it", "It is the carbon electrode with the smaller surface area"]),
    ],
  },
  {
    number: "9", sub_number: "9.3.1",
    text: "In the electrolysis of concentrated NaCℓ(aq), write down the NAME or FORMULA of gas X (formed at electrode P, the anode).",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Chlorine, Cℓ₂ (Cℓ⁻ is oxidised at the anode).",
    marking_notes: "Memo: Chlorine (gas) / Cℓ₂.",
    image_url: `${IMG}/9-electrolysis-cell.png`,
    steps: [st(1, "What is gas X?", "Chlorine, Cℓ₂", ["Hydrogen, H₂", "Oxygen, O₂", "Hydrogen chloride, HCℓ"])],
  },
  {
    number: "9", sub_number: "9.3.2",
    text: "In the electrolysis of concentrated NaCℓ(aq), write down the NAME or FORMULA of gas Y (formed at electrode Q, the cathode).",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Hydrogen, H₂ (water is reduced at the cathode).",
    marking_notes: "Memo: Hydrogen (gas) / H₂.",
    image_url: `${IMG}/9-electrolysis-cell.png`,
    steps: [st(1, "What is gas Y?", "Hydrogen, H₂", ["Chlorine, Cℓ₂", "Oxygen, O₂", "Sodium, Na"])],
  },
  {
    number: "9", sub_number: "9.3.3",
    text: "In the electrolysis of concentrated NaCℓ(aq) (net reaction: 2H₂O + 2Cℓ⁻ → Cℓ₂ + H₂ + 2OH⁻), write down the reduction half-reaction.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "2H₂O(ℓ) + 2e⁻ → H₂(g) + 2OH⁻(aq)",
    marking_notes: "Memo: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (2); the same equation written with the arrow reversed (←) also scores 2/2; written with ⇌ it scores 1/2; the oxidation direction (H₂ + 2OH⁻ → 2H₂O + 2e⁻, or ⇌ that way) or ← the wrong way scores 0/2. Ignore phases.",
    steps: [
      st(1, "Which species is reduced at the cathode?", "H₂O (water gains electrons)", ["Cℓ⁻ (chloride ions gain electrons)", "Na⁺ is oxidised", "OH⁻ gains electrons"]),
      st(1, "Which half-reaction is correct?", "2H₂O + 2e⁻ → H₂ + 2OH⁻", ["H₂ + 2OH⁻ → 2H₂O + 2e⁻", "2Cℓ⁻ → Cℓ₂ + 2e⁻", "2H₂O → H₂ + 2OH⁻ + 2e⁻"]),
    ],
  },
  {
    number: "9", sub_number: "9.4",
    text: "In the electrolysis of concentrated NaCℓ(aq), is the solution in the cell ACIDIC or ALKALINE (BASIC) after completion of the reaction? Give a reason for the answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Alkaline (basic): OH⁻ ions are produced (NaOH, a strong base, forms).",
    marking_notes: "Memo: Basic / alkaline (1); reason (1): OH⁻ ions / NaOH / a strong base forms.",
    image_url: `${IMG}/9-electrolysis-cell.png`,
    steps: [
      st(1, "Is the solution acidic or alkaline?", "ALKALINE (BASIC)", ["ACIDIC", "NEUTRAL", "It is acidic near P and alkaline near Q, so overall unknown"]),
      st(1, "Which reason is correct?", "OH⁻ ions (NaOH) are formed", ["H₃O⁺ ions are formed", "Cℓ₂ dissolves to form HCℓ", "Na⁺ ions are used up"]),
    ],
  },

  // ============ QUESTION 10: FERTILISERS AND INDUSTRIAL PROCESSES (14 marks) ============

  {
    number: "10", sub_number: "10.1.1",
    text: "The flow diagram shows the processes involved in the industrial preparation of fertiliser Q. N₂(g) + H₂(g) → (Process X) → Compound A. SO₂(g) + O₂(g) → (Process Y, V₂O₅) → Gas P; Gas P + H₂SO₄(ℓ) → Compound B; Compound B + H₂O(ℓ) → Compound C. Compound A + Compound C → Fertiliser Q. Write down the name of process X.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "The Haber process (N₂ + 3H₂ → 2NH₃, giving ammonia as compound A).",
    marking_notes: "Memo: Haber (process).",
    image_url: `${IMG}/10.1-fertiliser-flow.png`,
    steps: [st(1, "What is process X?", "Haber process", ["Contact process", "Ostwald process", "Fractional distillation"])],
  },
  {
    number: "10", sub_number: "10.1.2",
    text: "In the flow diagram for the preparation of fertiliser Q, SO₂(g) + O₂(g) → (Process Y, using V₂O₅) → Gas P. Write down the name of process Y.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "The Contact process (catalytic oxidation of SO₂).",
    marking_notes: "Memo: Contact process / catalytic oxidation of SO₂.",
    image_url: `${IMG}/10.1-fertiliser-flow.png`,
    steps: [st(1, "What is process Y?", "Contact process", ["Haber process", "Ostwald process", "Cracking"])],
  },
  {
    number: "10", sub_number: "10.1.3",
    text: "In the flow diagram, SO₂(g) is oxidised with O₂(g) (V₂O₅ catalyst) to form gas P. Write down the NAME or FORMULA of gas P.",
    marks: 1, topicKey: "chemical-industry", cognitiveLevelName: "Recall",
    model_answer: "Sulphur trioxide, SO₃.",
    marking_notes: "Memo: Sulphur trioxide / SO₃.",
    image_url: `${IMG}/10.1-fertiliser-flow.png`,
    steps: [st(1, "What is gas P?", "Sulphur trioxide, SO₃", ["Sulphur dioxide, SO₂", "Sulphuric acid, H₂SO₄", "Sulphur, S"])],
  },
  {
    number: "10", sub_number: "10.1.4",
    text: "In the flow diagram, gas P (SO₃) reacts with concentrated H₂SO₄(ℓ) to form compound B. Write down the balanced equation for the formation of compound B.",
    marks: 3, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "SO₃ + H₂SO₄ → H₂S₂O₇ (oleum is compound B).",
    marking_notes: "Memo: reactants (1), products (1), balancing (1). Ignore ⇌ and phases.",
    image_url: `${IMG}/10.1-fertiliser-flow.png`,
    steps: [
      st(1, "Which are the reactants?", "SO₃ and H₂SO₄", ["SO₂ and H₂SO₄", "SO₃ and H₂O", "SO₂ and H₂O"]),
      st(1, "Which is the product (compound B)?", "H₂S₂O₇ (oleum)", ["H₂SO₃", "(NH₄)₂SO₄", "H₂S₂O₈"]),
      st(1, "Which equation is correctly balanced?", "SO₃ + H₂SO₄ → H₂S₂O₇", ["2SO₃ + H₂SO₄ → H₂S₂O₇", "SO₃ + 2H₂SO₄ → H₂S₂O₇", "SO₃ + H₂SO₄ → H₂S₂O₇ + H₂O"]),
    ],
  },
  {
    number: "10", sub_number: "10.1.5",
    text: "In the flow diagram, compound A (formed by the Haber process) and compound C (formed by diluting compound B with water) react to form fertiliser Q. Write down the balanced equation for the formation of fertiliser Q.",
    marks: 4, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "H₂SO₄ + 2NH₃ → (NH₄)₂SO₄ (fertiliser Q is ammonium sulphate; A is NH₃ and C is H₂SO₄).",
    marking_notes: "Memo: reactants, products and balancing (4 marks in total, ticks not visible in the text layer; split here as reactants 2, product 1, balancing 1). Ignore ⇌ and phases.",
    image_url: `${IMG}/10.1-fertiliser-flow.png`,
    steps: [
      st(1, "What is compound A, one of the reactants?", "NH₃ (ammonia)", ["N₂O (dinitrogen oxide)", "HNO₃ (nitric acid)", "NH₄NO₃ (ammonium nitrate)"]),
      st(1, "What is compound C, the other reactant?", "H₂SO₄ (sulphuric acid)", ["H₂S₂O₇ (oleum)", "SO₃ (sulphur trioxide)", "H₂SO₃ (sulphurous acid)"]),
      st(1, "What is the product, fertiliser Q?", "(NH₄)₂SO₄ (ammonium sulphate)", ["NH₄NO₃ (ammonium nitrate)", "Na₂SO₄ (sodium sulphate)", "(NH₄)₃PO₄ (ammonium phosphate)"]),
      st(1, "Which equation is correctly balanced?", "H₂SO₄ + 2NH₃ → (NH₄)₂SO₄", ["H₂SO₄ + NH₃ → (NH₄)₂SO₄", "2H₂SO₄ + NH₃ → (NH₄)₂SO₄", "H₂SO₄ + 2NH₃ → NH₄SO₄"]),
    ],
  },
  {
    number: "10", sub_number: "10.2",
    text: "A 20 kg bag of NPK fertiliser is labelled x–y–z (36), where 36 is the total percentage of nutrients (N, P and K) by mass. It is found that the mass of nitrogen in the bag is 4,11 kg and the mass of phosphorus is 0,51 kg. Calculate the NPK ratio of the fertiliser.",
    marks: 4, topicKey: "chemical-industry", cognitiveLevelName: "Application",
    model_answer: "m(fertiliser nutrients) = 36/100 × 20 = 7,2 kg. m(N) + m(P) = 4,11 + 0,51 = 4,62 kg. m(K) = 7,2 – 4,62 = 2,58 kg. Ratio N : P : K = 4,11 : 0,51 : 2,58 = 8 : 1 : 5.",
    marking_notes: "Memo (4 marks): calculate the mass of fertiliser (nutrients); add %N and %P (or the masses of N and P); subtract from the total to find K (100 – (%N + %P), or m – [m(N) + m(P)]); final answer 8 : 1 : 5. Three equivalent routes are given (percentages of 7,2 kg, masses, or percentages of 20 kg).",
        steps: [
      st(1, "What is the total mass of nutrients (N, P and K) in the bag?", "36/100 × 20 = 7,2 kg", ["20 kg", "36 kg", "0,36 × 4,62 = 1,66 kg"]),
      st(1, "What is the combined mass of N and P?", "4,11 + 0,51 = 4,62 kg", ["4,11 – 0,51 = 3,60 kg", "4,11 × 0,51 = 2,10 kg", "20 – 4,62 = 15,38 kg"]),
      st(1, "What is the mass of K?", "7,2 – 4,62 = 2,58 kg", ["20 – 4,62 = 15,38 kg", "36 – 4,62 = 31,38 kg", "7,2 + 4,62 = 11,82 kg"]),
      st(1, "What is the NPK ratio?", "8 : 1 : 5", ["5 : 1 : 8", "4 : 1 : 3", "8 : 5 : 1"]),
    ],
  },
];
