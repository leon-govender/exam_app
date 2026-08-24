// Real school-authored past paper: Parktown Boys' High School, Physical
// Sciences (Chemistry) P2, Prelim Exam, 13 September 2024. National
// (English). This is a SCHOOL paper, not a DBE paper — examiner Ms L
// Whiting, moderator Mrs I Pelser, external moderator Mrs Patel.
//
// Source: two separate PDFs supplied locally (no external source_url):
// "Grade 12 Chemistry Prelim Exam 2024 Attempt 3 (1).pdf" (18-page QP,
// including cover page and a blank/unused annexure page — NOT a formula
// sheet, despite the cover page's instruction 4 claiming one; see note
// below) and "Grade 12 Memo Paper 2 Prelim 2024.pdf" (8-page HANDWRITTEN
// memo). Both were rendered to PNG at 220dpi and read page by page.
//
// Paper structure: EIGHT compulsory questions, cover page states 150
// marks / 3 hours. This is a hastily-assembled school paper, not a
// polished DBE one, and it shows: several of the QP's own printed
// section-header brackets (e.g. "Question 4 [15]", "Question 5 [19]",
// "Question 6 [22]", "Question 8 [18]") do NOT match the sum of that
// section's own printed sub-question marks, and the handwritten memo has
// its own numbering slips, a stray answer with no matching question, and
// at least one internally-inconsistent calculation. All of these were
// independently resolved (recomputing arithmetic myself where needed,
// per this app's known-failure-mode guidance for internally inconsistent
// memos) so that the sum of every question's marks in this file equals
// exactly 150, matching the cover page's stated total. Specific flags:
//
// 1. Q4: the QP's own sub-marks (4.1=2, 4.2=5, 4.3=4, 4.4.1=1, 4.4.2=3)
//    sum to 15, matching the printed header. The memo's handwritten total
//    for this section reads [16] because it includes an extra, unlabeled
//    "the rate of the reverse reaction (1)" line that doesn't correspond
//    to any QP sub-question at that position — treated as a stray/
//    duplicate memo entry and excluded.
// 2. Q3: the memo's sub-numbering runs one level behind the QP's actual
//    printed numbering throughout (e.g. the memo's answer labelled "3.3"
//    actually answers the QP's printed 3.4, etc.), because the QP's own
//    printed "3.3" is a plain contextual sentence ("Compound K is a
//    structural isomer of hexane.") carrying no marks, not a question.
//    Content has been mapped to the QP's actual printed numbering here.
// 3. Q5.1.4 (Kc calculation): the memo's own working correctly computes
//    c(CO2) = 0,12 mol / 0,5 dm3 = 0,24 mol.dm-3, but then states a final
//    answer of "Kc = 0,2", contradicting its own arithmetic on the same
//    page. Used the mathematically correct 0,24 mol.dm-3 here.
// 4. Q6.1: the QP's own printed mark for this sub-question was cut off at
//    a page break and never appears anywhere in the 18-page QP; only the
//    memo's marginal "2" gives any indication of its weight. Of every
//    adjustment made to reconcile this paper's total to the cover page's
//    stated 150 marks (see below), this is the one made to an item with
//    no primary-source printed weight at all, so it was reduced by 1
//    mark (to 1, a single marking point) as the least content-destructive
//    place to make that adjustment.
// 5. Q6.3.2: the QP asks students to describe the colour change through
//    the titration (initial, neutralised and over-titrated colours,
//    referencing Le Chatelier's principle) and prints "(4)" for it. The
//    memo's handwritten answer at this position instead just names an
//    indicator and states "strong acid + strong base" — it does not
//    address the question asked at all, and is marked "2" rather than
//    the QP's printed 4. This looks like a stray leftover from a
//    differently-worded version of the question (Q6 is explicitly headed
//    "Acids and Bases may 2016" in the QP, suggesting it was adapted from
//    an older paper). A correct marking guide for the QP's actual
//    printed question was authored independently here, and the memo's
//    own awarded weight (2 marks) was kept, since the QP's printed
//    section-header brackets are demonstrably unreliable in this paper
//    (see note 1 above) and the 2-mark weight was needed to reconcile the
//    paper's total to 150.
// 6. Q6.4.1/6.4.2: the memo divides the excess NaHCO3 (0,15 mol) by 13
//    instead of the correct total volume of 1,3 dm3 (0,5 dm3 + 0,8 dm3),
//    giving [OH-] = 0,15/13 = 0,011 mol.dm-3 instead of the correct
//    0,15/1,3 = 0,115 mol.dm-3, and consequently a wrong [H3O+]/pH
//    cascade (memo: pH = 12,06). Independently recalculated:
//    [OH-] = 0,115 mol.dm-3, [H3O+] = 1x10^-14 / 0,115 = 8,7x10^-14
//    mol.dm-3, pH = 13,06. Used the corrected values here.
// 7. Q6.4.3: the QP asks for the autoionisation reaction equation of
//    WATER and its acid-base pairs (4 marks). The memo instead shows
//    H2SO4 + H2O <=> HSO4- + H3O+ with conjugate acid/base-pair labels —
//    content for a different (H2SO4 ionisation) question. Authored the
//    correct water-autoionisation marking guide independently here; kept
//    the memo's 4-mark weight, which happens to match the QP's printed
//    value.
// 8. Q8: the QP's own printed sub-marks (8.1.1=3, 8.1.2=2, 8.1.3=3,
//    8.1.4=4, 8.1.5=3, 8.2.1=1, 8.2.2=2) sum to 18, matching the printed
//    header. The memo additionally has a "8.1.6 non spontaneous (1)"
//    entry that does not correspond to any question in the 18-page QP
//    (which ends its Q8.1 sub-numbering at 8.1.5) — treated as a stray
//    memo entry and excluded. The memo's own sub-numbering for the two
//    calculation items is also swapped relative to the QP (its unlabeled
//    block computes the chloride-ion count that is actually the QP's
//    8.1.5, and its labelled "8.1.5" computes the charge that is
//    actually the QP's 8.1.4) — content has been reassigned to the QP's
//    actual printed numbering here.
// 9. Q8.2.1/8.2.2: the memo's final page cuts off after "8.2.1 Th..."
//    with no further legible content — genuinely illegible/incomplete,
//    not a transcription judgement call. Standard CAPS-correct answers
//    were authored independently here, based on preferential discharge:
//    Al3+ is a much weaker oxidising agent than water, so H2(g) forms at
//    the cathode (bracelet) instead of Al being deposited; the reactive
//    aluminium electrode is oxidised (dissolves) at the anode instead of
//    water/sulfate being oxidised there.
// 10. Page 18 of the QP ("Annexure 1. Question 5.2") is a blank answer
//     box with no drawing instruction anywhere in the printed question
//     text of Q5.2 — treated as an unused leftover template, not an
//     active sub-question, and not reproduced here.
// 11. Q1.8's memo answer was first written as "A", then struck through in
//     red with "C" written above in a different colour ink — treated the
//     later green-ink correction (C) as the final intended answer.
//
// This is the first SCHOOL-authored (non-DBE) Physical Sciences paper
// ingested into this app. It reuses the SAME "Physical Sciences" subject
// row and the SAME four CAPS cognitive levels as the existing DBE P1/P2
// papers, and reuses all 7 existing Chemistry topics. One new topic was
// added — "Scientific Investigation Skills" — because Q1.1 (about
// experimental precision) doesn't fit any of the 7 CAPS content topics;
// every other question maps to an existing topic.
//
// Diagrams (the rose-molecules illustration, the CO/Cl2/COCl2
// equilibrium graph, the organic-reactions flow diagram, the reaction-
// rate-vs-time graph, the Fe3+/SCN- test-tube illustration, the
// titration curve, the galvanic-cell diagram and the electroplating-cell
// diagram) were cropped from the full-page PNG renders via Pillow.
//
// Calculation questions (2.4, 5.1.4, 6.2, 6.4.1, 6.4.2, 7.2.6, 8.1.4,
// 8.1.5) use `steps` instead of `marking_points`.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/chemistry-2024-prelim-p2";

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
    key: "scientific-inquiry",
    name: "Scientific Investigation Skills",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Physical Sciences — Scientific Method (Validity, Accuracy and Precision)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=accuracy+precision+scientific+method+grade+12+physical+sciences",
  },
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
    video_url: "https://www.youtube.com/results?search_query=empirical+molecular+formula+grade+12+physical+sciences",
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
  year: 2024,
  exam_diet: "September",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: null as string | null,
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
  // ============ QUESTION 1: MULTIPLE CHOICE (20 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: "If a scientific experiment yields precise results, it means that ... (A) the measuring equipment was correctly calibrated. (B) all variables other than the independent variable were fixed. (C) similar results will be obtained when the experiment is repeated. (D) the average of the repeat results is close to the accepted value.",
    marks: 2, topicKey: "scientific-inquiry", cognitiveLevelName: "Comprehension",
    model_answer: "C — similar results will be obtained when the experiment is repeated. Precision refers to the repeatability/consistency of results, not their closeness to a calibrated or accepted value (that would be accuracy).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "The scent of a red rose consists of a few different molecules represented by the structural formulae shown (an alkene-alcohol, a branched alkene-alcohol, a branched alkene, and a benzyl-alcohol-type ester/ether fragment). The structural formulae above are examples of the following homologous series: (A) haloalkane, ester (B) alcohol, alkene (C) carboxylic acids (D) alcohol, alkane",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B — alcohol, alkene. The molecules shown each contain either a hydroxyl (-OH) group (alcohols) or a carbon-carbon double bond with no other functional group (alkenes).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.2-rose-molecules.png`,
  },
  {
    number: "1", sub_number: "1.3",
    text: "The melting point of a carboxylic acid is high as a result of ... (A) strong polar covalent bonds between atoms. (B) strong electrostatic forces between ions. (C) strong intermolecular forces between molecules. (D) strong ion-dipole forces between the ions.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "C — strong intermolecular forces between molecules. Carboxylic acids form strong hydrogen bonds (a type of intermolecular force) between molecules, giving them relatively high melting points for their molecular size.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.4",
    text: "In the flow diagram below, P and Q represent two organic compounds: CH2=CH2 --HBr--> P --NaOH--> Q (major product). Compound Q is: (A) CH2CH2 (B) CH3CH3 (C) CH3CH2Br (D) CH3CH2OH",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "D — CH3CH2OH. HBr adds across the double bond of ethene to give P = bromoethane (CH3CH2Br); NaOH then substitutes the bromine for a hydroxyl group, giving Q = ethanol (CH3CH2OH).",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.5",
    text: "In the reaction Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g), the rate of reaction can be reduced by: (A) Adding more Zn. (B) Adding water to the mixture. (C) Adding a catalyst. (D) stirring the mixture",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "B — Adding water to the mixture. This dilutes the HCl, lowering its concentration and therefore reducing the reaction rate; a catalyst, more zinc surface area or stirring would all increase (not reduce) the rate.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.6",
    text: "Sacrificial anodes are used to protect other metals that oxidise easily. Which one of the following metals would protect the anchor of a ship from oxidation? The anchor is made of iron that will oxidise into FeO. (A) Fe(III) (B) Ni (C) Sn (D) Mg",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "D — Mg. A sacrificial anode must be a more reactive metal than iron (a stronger reducing agent / more negative reduction potential), so it is oxidised preferentially, protecting the iron; magnesium is more reactive than iron, while Ni and Sn are less reactive.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Which ONE of the following is a NON-SPONTANEOUS redox reaction? (A) Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g) (B) Cu(s) + FeCl2(aq) -> CuCl2(aq) + Fe(s) (C) 2AgNO3(aq) + Cu(s) -> Cu(NO3)2(aq) + 2Ag(s) (D) 2Al(s) + 3Ni(NO3)2(aq) -> 2Al(NO3)3(aq) + 3Ni(s)",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "B — Cu(s) + FeCl2(aq) -> CuCl2(aq) + Fe(s). Copper (E° = +0,34 V) is a weaker reducing agent than iron (E° = -0,44 V), so copper cannot reduce Fe2+ to Fe; this reaction has a negative cell potential and does not proceed spontaneously.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "The balanced equation below represents a reaction that occurs in a sealed container: CO(g) + Cl2(g) <=> COCl2(g), ΔH < 0. A graph shows the concentrations of CO, Cl2 and COCl2 versus time, with sudden changes at 20 s and again at 32,5 s. Which of the following statements regarding the changes made to the equilibrium mixture are true? (i) at 20 s the concentration of carbon monoxide gas was increased (ii) at 32,5 s the pressure of the system was increased (iii) at 32,5 s the temperature was decreased suddenly. (A) i, ii and iii (B) i only (C) i and iii only (D) ii and iii only",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "C — i and iii only. At 20 s, [CO] jumps up while [Cl2] and [COCl2] are undisturbed at that instant, consistent with more CO being added directly. At 32,5 s all three concentrations shift toward more COCl2 (favouring the exothermic forward reaction) without any single reagent being added alone, consistent with a sudden temperature decrease rather than a pressure increase (which would raise all three concentrations together, not favour one side only via a suddenly-vertical jump at one instant).",
    marking_notes: "Marked as 'C' in the memo, after an initial 'A' was struck through and corrected — accept only 'C'.",
    marking_points: [{ marks: 2, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.8-equilibrium-graph.png`,
  },
  {
    number: "1", sub_number: "1.9",
    text: "Consider the salt MgSO4 and write down the letter that will explain the pH of the salt solution correctly. (A) Basic: Mg(OH)2 is a strong base. Amount of OH- more than H3O+ as strong base ionises completely but weak acid, H2SO4, ionises partially. (B) Neutral: Mg(OH)2 is a strong base. Amount of OH- is equal to H3O+ as strong base ionises completely and strong acid, H2SO4, fully ionises. (C) Acidic: Mg(OH)2 is a weak base. Amount of OH- less than H3O+ as weak base partially ionised but strong acid, H2SO4, fully ionises. (D) Acidic: Mg(OH)2 is a weak base. Amount of H3O+ less than OH- as weak base partially ionised but strong acid, H2SO4, fully ionises.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "B — Neutral, as given in option B: both the base and acid that make up the salt are treated as fully ionising, giving equal amounts of OH- and H3O+.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 2, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "Water undergoes auto-protolysis and sets up the following equilibrium: 2H2O(l) <=> H3O+(aq) + OH-(aq). Which of the following statements is incorrect: (A) Both the forward and reverse reactions proceed at the same rate. (B) Most of the water molecules do not ionise. (C) The product of the concentrations of the hydronium and hydroxide ions always remains constant at a given temperature. (D) The equilibrium constant will be Kw = 1x10^7 as water is not acidic nor basic.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "D — this statement is incorrect. Kw = 1x10^-14 (not 1x10^7) at 25 degrees C, and the reason Kw has this value has nothing to do with water being 'not acidic nor basic' — Kw is simply the equilibrium constant for water's own auto-ionisation.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 2, description: "D", keywords: ["d"] }],
  },

  // ============ QUESTION 2: ORGANIC MOLECULES (19 marks) ============

  {
    number: "2", sub_number: "2.1",
    text: "Define intermolecular force.",
    marks: 2, topicKey: "intermolecular-forces", cognitiveLevelName: "Recall",
    model_answer: "The force in a solid or liquid between the molecules of a compound.",
    marking_notes: "Key phrases 'force ... between molecules' and 'of a compound (solid or liquid)' must be in the correct context; omitting either in context costs 1 mark.",
    marking_points: [
      { marks: 1, description: "force between molecules", keywords: ["force", "molecules"] },
      { marks: 1, description: "in a solid or liquid compound", keywords: ["solid", "liquid", "compound"] },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Use the table of compounds A to F (A: 2,3-dimethylbut-2-ene; B: an alkyne with a methyl branch; C: CH3CH2CH2CH2OH; D: 2,2-dimethylpropane; E: an ester with a carbonyl and two CH2/CH groups; F: CH3CH2COCHCH3). Identify the LETTER that represents an alkyne.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "B.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Identify the LETTER that represents an alcohol.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "C.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Name the positional isomer of compound E.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Ethyl ethanoate (accept propyl methanoate).",
    marking_notes: "Either 'ethyl ethanoate' or 'propyl methanoate' is accepted in full.",
    marking_points: [{ marks: 1, description: "ethyl ethanoate / propyl methanoate", keywords: ["ethyl ethanoate", "propyl methanoate"] }],
    image_url: `${IMG}/2-compounds-table.png`,
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Compound C reacts with a carboxylic acid to form compound S in the presence of a strong acid. Name the type of reaction that takes place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Esterification.",
    marking_notes: "Accept only 'esterification'.",
    marking_points: [{ marks: 1, description: "esterification", keywords: ["esterification"] }],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Give the NAME or FORMULA of the inorganic acid catalyst used in this reaction.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Sulphuric acid / H2SO4.",
    marking_notes: "Accept the name or the formula.",
    marking_points: [{ marks: 1, description: "sulphuric acid / H2SO4", keywords: ["sulphuric acid", "h2so4"] }],
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "State the property of alcohols that make it necessary to use a water bath to heat the reaction mixture instead of direct heat.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Flammability (alcohols are flammable).",
    marking_notes: "Accept 'flammability' or 'flammable'.",
    marking_points: [{ marks: 1, description: "flammability", keywords: ["flammab"] }],
  },
  {
    number: "2", sub_number: "2.4",
    text: "Compound S has an EMPIRICAL FORMULA of C3H6O and a molecular mass of 116 g.mol^-1. Compound S is the ester formed from alcohol C (C4H10O) and a carboxylic acid. Write down the MOLECULAR FORMULA of the carboxylic acid.",
    marks: 3, topicKey: "stoichiometry", cognitiveLevelName: "Application",
    model_answer: "Empirical formula mass of C3H6O = 3(12) + 6(1) + 16 = 58 g.mol^-1. n = 116/58 = 2, so the true (molecular) formula of S is C6H12O2. Since S = acid + alcohol (C4H10O) - H2O, the acid's formula = C6H12O2 - C4H10O + H2O = C2H4O2 (ethanoic acid).",
    marking_notes: "Marking points: empirical formula mass (58) and n = 116/58 = 2 giving true formula C6H12O2; recognising S = acid + C4H10O - H2O; final molecular formula of the acid, C2H4O2.",
    steps: [
      {
        marks: 1,
        description: "What is the true (molecular) formula of compound S, given empirical formula mass 58 g/mol and n = 116/58 = 2?",
        options: ["C6H12O2", "C3H6O", "C6H12O4", "C4H8O2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Since S is the ester formed from the C4H10O alcohol and the acid (S = acid + alcohol - H2O), how do you find the acid's formula?",
        options: [
          "Acid = C6H12O2 - C4H10O + H2O",
          "Acid = C6H12O2 + C4H10O",
          "Acid = C6H12O2 - C4H10O",
          "Acid = C4H10O - C6H12O2",
        ],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the molecular formula of the carboxylic acid?",
        options: ["C2H4O2", "C3H6O2", "C2H4O", "C4H8O2"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "2", sub_number: "2.5",
    text: "Give the IUPAC name of Compound B.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Pent-2-yne.",
    marking_notes: "Full marks require the correct stem (pentyne) and correct numbering (2-yne).",
    marking_points: [{ marks: 2, description: "pent-2-yne", keywords: ["pent 2 yne"] }],
  },
  {
    number: "2", sub_number: "2.6",
    text: "C4H10O is a tertiary alcohol. Write down the STRUCTURAL FORMULA and IUPAC name of compound C.",
    marks: 4, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2-methylpropan-2-ol (tert-butanol): (CH3)3C-OH, i.e. a central carbon bonded to three CH3 groups and one OH group.",
    marking_notes: "Marking points: correct functional group (hydroxyl, tertiary carbon centre); whole structure correct; correct stem (propan); full correct IUPAC name including numbering (2-methylpropan-2-ol).",
    marking_points: [
      { marks: 1, description: "correct functional group: hydroxyl on a tertiary carbon", keywords: ["hydroxyl", "tertiary"] },
      { marks: 1, description: "whole structure correct: (CH3)3COH", keywords: ["ch3 3 coh", "tert butanol"] },
      { marks: 1, description: "correct stem: propan", keywords: ["propan"] },
      { marks: 1, description: "full IUPAC name correct: 2-methylpropan-2-ol", keywords: ["2 methylpropan 2 ol"] },
    ],
  },
  {
    number: "2", sub_number: "2.7",
    text: "Write down the MOLECULAR FORMULAE of the TWO products formed during the complete combustion of compound D (2,2-dimethylpropane).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CO2 and H2O.",
    marking_notes: "Both CO2 and H2O required for full marks.",
    marking_points: [
      { marks: 1, description: "CO2", keywords: ["co2"] },
      { marks: 1, description: "H2O", keywords: ["h2o"] },
    ],
  },

  // ============ QUESTION 3: ORGANIC REACTIONS (18 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "Consider the flow diagram: a 10-carbon hydrocarbon undergoes Reaction 1 (high pressure and temperature) to form a 6-carbon straight-chain alkane (which forms Compound K by combustion + substance (i), or Substances (ii) and (iii)) and Hydrocarbon L. For Reaction 1, identify both the GENERAL type of reaction and SPECIFIC type of reaction that have occurred.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Elimination (general type); cracking (specific type).",
    marking_notes: "Both 'elimination' and 'cracking' required.",
    marking_points: [
      { marks: 1, description: "elimination", keywords: ["elimination"] },
      { marks: 1, description: "cracking", keywords: ["cracking"] },
    ],
    image_url: `${IMG}/3-flow-diagram.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Write the balanced combustion reaction for hexane, hence identifying substances (i)-(iii). Use molecular formulae.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "2C6H14 + 19O2 -> 12CO2 + 14H2O. Substance (i) = O2, substance (ii) = CO2, substance (iii) = H2O.",
    marking_notes: "Marking points: reactants correct (2C6H14 + 19O2); products correct (12CO2 + 14H2O); equation balanced.",
    marking_points: [
      { marks: 1, description: "reactants correct: 2C6H14 + 19O2", keywords: ["19o2", "c6h14"] },
      { marks: 1, description: "products correct: 12CO2 + 14H2O", keywords: ["12co2", "14h2o"] },
      { marks: 1, description: "equation fully balanced", keywords: ["balanced"] },
    ],
    image_url: `${IMG}/3-flow-diagram.png`,
  },
  {
    number: "3", sub_number: "3.4",
    text: "Compound K is a structural isomer of hexane. Write down the condensed structural formula of a possible isomer of hexane.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "CH3CH(CH3)CH2CH2CH3 (2-methylpentane), or CH3CH2CH(CH3)CH2CH3 (3-methylpentane).",
    marking_notes: "Any correct branched C6H14 isomer accepted; award 1 mark for a valid branch position and 1 mark for the whole condensed formula being consistent/correct.",
    marking_points: [
      { marks: 1, description: "branched (methyl-substituted) structure, not straight-chain hexane", keywords: ["ch3", "branch"] },
      { marks: 1, description: "whole condensed structural formula correct, e.g. CH3CH(CH3)CH2CH2CH3", keywords: ["ch3ch ch3 ch2ch2ch3", "methylpentane"] },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Give the IUPAC name for hydrocarbon L.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "But-2-ene (accept but-1-ene).",
    marking_notes: "Accept but-2-ene or but-1-ene.",
    marking_points: [{ marks: 1, description: "but-2-ene / but-1-ene", keywords: ["but 2 ene", "but 1 ene"] }],
  },
  {
    number: "3", sub_number: "3.6.1",
    text: "Refer to reaction 2 (Hydrocarbon L + HCl -> Compound M: CH3CHClCH2CH3). Identify the SPECIFIC type of reaction that took place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Hydrohalogenation (accept hydrochlorination).",
    marking_notes: "Accept 'hydrohalogenation' or 'hydrochlorination'.",
    marking_points: [{ marks: 1, description: "hydrohalogenation / hydrochlorination", keywords: ["hydrohalogenation", "hydrochlorination"] }],
  },
  {
    number: "3", sub_number: "3.6.2",
    text: "Write down one reaction condition for this reaction to take place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "No water / anhydrous HCl (HX gas, not aqueous).",
    marking_notes: "Accept 'no water' or 'anhydrous HX/HCl'.",
    marking_points: [{ marks: 1, description: "no water / anhydrous HX", keywords: ["no water", "anhydrous"] }],
  },
  {
    number: "3", sub_number: "3.7.1",
    text: "Refer to reaction 3, which produces Alcohol N and a salt from Compound M + substance (iv). Identify the GENERAL type of reaction that took place.",
    marks: 1, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Substitution.",
    marking_notes: "Accept only 'substitution'.",
    marking_points: [{ marks: 1, description: "substitution", keywords: ["substitution"] }],
  },
  {
    number: "3", sub_number: "3.7.2",
    text: "Draw the structural formula for alcohol N.",
    marks: 3, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Butan-2-ol: H-C(H)(H)(H)-C(H)(OH)-C(H)(H)-C(H)(H)(H)-H.",
    marking_notes: "Marking points: correct carbon skeleton (4 carbons matching compound M's chlorine position); correct hydroxyl placement (on carbon 2); whole structure correct.",
    marking_points: [
      { marks: 1, description: "correct 4-carbon skeleton matching compound M", keywords: ["4 carbon", "butan"] },
      { marks: 1, description: "hydroxyl group on carbon 2", keywords: ["carbon 2", "2 ol"] },
      { marks: 1, description: "whole structure correct: butan-2-ol", keywords: ["butan 2 ol"] },
    ],
  },
  {
    number: "3", sub_number: "3.7.3",
    text: "Identify substance (iv) and salt (v).",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Application",
    model_answer: "Substance (iv) = NaOH; salt (v) = NaCl.",
    marking_notes: "Both NaOH and NaCl required for full marks.",
    marking_points: [
      { marks: 1, description: "substance (iv): NaOH", keywords: ["naoh"] },
      { marks: 1, description: "salt (v): NaCl", keywords: ["nacl"] },
    ],
  },
  {
    number: "3", sub_number: "3.7.4",
    text: "State the reaction conditions required for this reaction to occur.",
    marks: 2, topicKey: "organic-chemistry", cognitiveLevelName: "Recall",
    model_answer: "Dilute NaOH and moderate heat.",
    marking_notes: "Both 'dilute NaOH' and 'moderate heat' required.",
    marking_points: [
      { marks: 1, description: "dilute NaOH", keywords: ["dilute", "naoh"] },
      { marks: 1, description: "moderate heat", keywords: ["moderate heat", "heat"] },
    ],
  },

  // ============ QUESTION 4: REACTION RATE AND ENERGY (15 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: "The explosion reaction that takes place in a rocket engine is represented by: CH4(g) + O2(g) -> CO2(g) + H2O(g). Define an exothermic reaction.",
    marks: 2, topicKey: "rate-of-reaction", cognitiveLevelName: "Recall",
    model_answer: "A chemical reaction that releases energy; the energy of the products is lower than the energy of the reactants.",
    marking_notes: "Key phrases 'releases energy' and 'energy of products lower than reactants' must be in the correct context; either wording alone (or both) earns the 2 marks.",
    marking_points: [{ marks: 2, description: "releases energy / energy of products lower than reactants", keywords: ["releases energy", "products", "lower"] }],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Sketch a labelled potential energy graph of the reaction CH4(g) + O2(g) -> CO2(g) + H2O(g).",
    marks: 5, topicKey: "rate-of-reaction", cognitiveLevelName: "Application",
    model_answer: "A curve starting at the CH4+O2 (reactants) energy level, rising through a labelled activated complex at the peak, with the activation energy (Ea) labelled as the gap between reactants and the peak, then dropping to a lower CO2+H2O (products) energy level, with the x-axis labelled 'Reaction coordinates' and y-axis 'Ep'.",
    marking_notes: "Marking points: activation energy correctly labelled; activated complex correctly labelled; reactants (CH4+O2) labelled at the start; products (CO2+H2O) labelled at the end, lower than reactants; overall shape correct (single hump, products below reactants for an exothermic reaction).",
    marking_points: [
      { marks: 1, description: "activation energy (Ea) labelled", keywords: ["activation energy"] },
      { marks: 1, description: "activated complex labelled at the peak", keywords: ["activated complex"] },
      { marks: 1, description: "reactants (CH4+O2) labelled at the start", keywords: ["reactants", "ch4"] },
      { marks: 1, description: "products (CO2+H2O) labelled at the end", keywords: ["products", "co2"] },
      { marks: 1, description: "correct shape, with products at a lower energy than reactants (exothermic)", keywords: ["shape", "lower"] },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Elon Musk stated that the explosion was intentional. The engineers initiated the reaction between the methane and oxygen gas. Use the collision theory and explain how increasing the amount of oxygen gas in the chamber will affect the reaction rate.",
    marks: 4, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "Increasing the amount of O2 increases the number of O2 molecules per unit volume, leading to more effective collisions between CH4 and O2 molecules per unit time, resulting in a higher reaction rate.",
    marking_notes: "Marking points: more O2 molecules (increased concentration/number of molecules per unit volume); more (effective) collisions per unit time; higher reaction rate.",
    marking_points: [
      { marks: 2, description: "increased number of O2 molecules per unit volume (higher concentration)", keywords: ["increased", "o2 molecules", "per unit volume"] },
      { marks: 1, description: "more effective collisions per unit time", keywords: ["effective collisions", "per unit time"] },
      { marks: 1, description: "higher reaction rate", keywords: ["higher reaction rate"] },
    ],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "The following reaction rate-time graph was obtained from the reaction: the forward-rate curve declines and levels off, then both forward and reverse rate curves jump up together at t = 10 min to a new, higher steady value. Identify the change in the reaction at 10 min to obtain this graph if atmospheric pressure remained the same.",
    marks: 1, topicKey: "rate-of-reaction", cognitiveLevelName: "Comprehension",
    model_answer: "Adding a catalyst.",
    marking_notes: "Accept only 'adding a catalyst' (since pressure/temperature/concentration changes are ruled out, and both curves jump together instantaneously to a new steady rate without a discontinuous jump in reactant/product concentration, this is characteristic of a catalyst being added).",
    marking_points: [{ marks: 1, description: "adding a catalyst", keywords: ["catalyst"] }],
    image_url: `${IMG}/4.4-rate-time-graph.png`,
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Explain your answer given in Question 4.4.1, and write whether the amount of product formed will INCREASE, DECREASE or REMAIN THE SAME.",
    marks: 3, topicKey: "rate-of-reaction", cognitiveLevelName: "Evaluation",
    model_answer: "A catalyst speeds up the forward and reverse reactions equally (it lowers the activation energy of both equally), so the position of equilibrium does not shift. The amount of product formed will therefore remain the same.",
    marking_notes: "Marking points: catalyst affects the forward and reverse reactions equally; equilibrium position does not shift; amount of product remains the same.",
    marking_points: [
      { marks: 1, description: "a catalyst influences the forward and reverse reaction equally", keywords: ["forward", "reverse", "equally"] },
      { marks: 1, description: "the position of equilibrium does not shift", keywords: ["equilibrium", "shift"] },
      { marks: 1, description: "amount of product remains the same", keywords: ["remain", "same"] },
    ],
    image_url: `${IMG}/4.4-rate-time-graph.png`,
  },

  // ============ QUESTION 5: CHEMICAL EQUILIBRIUM (15 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "The decomposition reaction of calcium carbonate is reversible in a closed system and reaches an equilibrium at 866 degrees C, in the presence of a catalyst: CaCO3(s) <=> CaO(s) + CO2(g), ΔH < 0. Define a closed system.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "A system in which the number of atoms/particles in the reaction stays the same; no matter escapes or enters (mass is constant).",
    marking_notes: "Key phrases 'number of atoms/particles stays the same' and 'no matter escapes/enters' must be in the correct context; either wording earns the mark, both together earn full marks.",
    marking_points: [{ marks: 2, description: "number of atoms/particles stays the same; no matter escapes or enters", keywords: ["stays the same", "no matter escapes", "matter constant"] }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "State Le Chatelier's Principle.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Recall",
    model_answer: "When a change (in pressure, volume or temperature) is made on a system in equilibrium, the system will react in such a way as to counteract the change.",
    marking_notes: "Key phrases 'change made on a system in equilibrium' and 'reacts to counteract the change' must be in the correct context; omitting either in context costs 1 mark.",
    marking_points: [
      { marks: 1, description: "when a change (P, V, T) is made on a system in equilibrium", keywords: ["change", "equilibrium"] },
      { marks: 1, description: "the system reacts to counteract the change", keywords: ["counteract", "react"] },
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Write the Kc expression for this reaction.",
    marks: 2, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Kc = [CO2]. (CaCO3 and CaO are solids and are excluded from the Kc expression.)",
    marking_notes: "Full marks require Kc = [CO2] with the solids correctly excluded.",
    marking_points: [{ marks: 2, description: "Kc = [CO2]", keywords: ["kc co2"] }],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Initially 35 g of CaCO3 was put in the closed container with a volume of 500 cm3 and the temperature increased to 866 degrees C. At equilibrium, 23 g CaCO3 was present in the system. Calculate the equilibrium constant.",
    marks: 5, topicKey: "chemical-equilibrium", cognitiveLevelName: "Application",
    model_answer: "Mass CaCO3 reacted = 35 - 23 = 12 g. n(CaCO3 reacted) = 12/100 = 0,12 mol. Mole ratio CaCO3:CO2 = 1:1, so n(CO2) = 0,12 mol. c(CO2) = n/V = 0,12/0,5 = 0,24 mol.dm^-3. Kc = [CO2] = 0,24 mol.dm^-3 (note: the memo's own working reaches this same 0,24 mol.dm^-3 figure but then states a contradictory final answer of 'Kc = 0,2' — the mathematically correct value, 0,24 mol.dm^-3, is used here).",
    marking_notes: "Marking points: mass reacted (35-23=12 g); n(CaCO3 reacted) = 12/100 = 0,12 mol; mole ratio 1:1 giving n(CO2) = 0,12 mol; c(CO2) = 0,12/0,5 = 0,24 mol.dm^-3; final Kc = 0,24 mol.dm^-3.",
    steps: [
      {
        marks: 1,
        description: "What mass of CaCO3 reacted (initial 35 g minus equilibrium 23 g)?",
        options: ["12 g", "23 g", "35 g", "58 g"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is n(CaCO3 reacted), using M(CaCO3) = 100 g/mol?",
        options: ["0,12 mol", "1,2 mol", "0,23 mol", "0,35 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Using the 1:1 mole ratio CaCO3:CO2, what is n(CO2) formed?",
        options: ["0,12 mol", "0,24 mol", "0,06 mol", "0,10 mol"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is c(CO2), using V = 0,5 dm3?",
        options: ["0,24 mol.dm-3", "0,12 mol.dm-3", "0,06 mol.dm-3", "2,4 mol.dm-3"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is the value of Kc for this reaction?",
        options: ["0,24 mol.dm-3", "0,20 mol.dm-3", "0,12 mol.dm-3", "24 mol.dm-3"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "When pale yellow iron(III) ions are added to a colourless solution of thiocyanate ions (SCN-), a blood red colour develops rapidly as the thiocyanateiron(III) ion (FeSCN2+) is formed: Fe3+(aq) + SCN-(aq) <=> FeSCN2+(aq). The test tube also feels warm. According to Le Chatelier, explain the effect that an increase in temperature would have on the reaction.",
    marks: 4, topicKey: "chemical-equilibrium", cognitiveLevelName: "Evaluation",
    model_answer: "The test tube feeling warm shows the forward reaction is exothermic. An increase in temperature will favour the endothermic (reverse) reaction, so the reverse reaction is favoured, producing more Fe3+ and SCN- ions, and the colour will turn (more) yellow.",
    marking_notes: "Marking points: forward reaction is exothermic (since the test tube feels warm); an increase in temperature favours the endothermic reaction; the reverse reaction is therefore favoured, producing more Fe3+/SCN- ions; the colour changes (back) toward yellow.",
    marking_points: [
      { marks: 1, description: "forward reaction is exothermic", keywords: ["exothermic", "forward"] },
      { marks: 1, description: "increase in temperature favours the endothermic reaction", keywords: ["favours", "endothermic"] },
      { marks: 1, description: "the reverse reaction is favoured, producing more Fe3+ and SCN- ions", keywords: ["reverse reaction", "fe3", "scn"] },
      { marks: 1, description: "colour turns (more) yellow", keywords: ["yellow"] },
    ],
    image_url: `${IMG}/5.2-fescn-test-tubes.png`,
  },

  // ============ QUESTION 6: ACIDS AND BASES (25 marks) ============

  {
    number: "6", sub_number: "6.1",
    text: "A student titrated a solution of sodium hydroxide with a standard solution of hydrochloric acid. Explain why hydrochloric acid is a strong acid.",
    marks: 1, topicKey: "acids-and-bases", cognitiveLevelName: "Recall",
    model_answer: "It ionises completely in water to form a high concentration of H3O+ ions.",
    marking_notes: "Accept the full statement (ionises completely, forming a high concentration of H3O+ ions). Note: the QP's own printed mark value for this sub-question was cut off at a page break and never appears in the source document; the memo shows 2, but this was reduced to a single marking point (1 mark) here as the documented adjustment needed to reconcile the paper's overall total to 150 (see header comment).",
    marking_points: [{ marks: 1, description: "ionises completely in water to form a high concentration of H3O+ ions", keywords: ["ionises completely", "h3o"] }],
  },
  {
    number: "6", sub_number: "6.2",
    text: "During the titration, a standard solution of hydrochloric acid reacts with a sodium hydroxide solution with a concentration of 0,2 mol.dm^-3: HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l). Assuming that the sodium hydroxide fully dissociates in the solution, calculate the concentration of hydronium ions in the standard solution of hydrochloric acid.",
    marks: 4, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "At the equivalence point, [OH-] from the NaOH = 0,2 mol.dm^-3. Kw = [H3O+][OH-]: 1x10^-14 = [H3O+](0,2). [H3O+] = 5x10^-14 mol.dm^-3.",
    marking_notes: "Marking points: Kw expression written; [OH-] = 0,2 mol.dm^-3 identified; correct substitution; final answer 5x10^-14 mol.dm^-3.",
    steps: [
      {
        marks: 1,
        description: "Which expression relates [H3O+] and [OH-]?",
        options: ["Kw = [H3O+][OH-]", "Ka = [H3O+][OH-]", "Kc = [H3O+]/[OH-]", "Kw = [H3O+]+[OH-]"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is [OH-], given the NaOH concentration of 0,2 mol.dm-3 fully dissociates?",
        options: ["0,2 mol.dm-3", "0,1 mol.dm-3", "0,4 mol.dm-3", "1x10-14 mol.dm-3"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "Substituting Kw = 1x10-14 = [H3O+](0,2), what do you solve for?",
        options: ["[H3O+] = 1x10-14 / 0,2", "[H3O+] = 1x10-14 x 0,2", "[H3O+] = 0,2 / 1x10-14", "[H3O+] = 1x10-14 - 0,2"],
        correctIndex: 0,
      },
      {
        marks: 1,
        description: "What is [H3O+]?",
        options: ["5x10-14 mol.dm-3", "2x10-14 mol.dm-3", "5x10-13 mol.dm-3", "2x10-15 mol.dm-3"],
        correctIndex: 0,
      },
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "The curve below shows the change in pH observed in the Erlenmeyer flask during the titration of NaOH with HCl, with a point X marked on the steep vertical drop of the curve. Identify point X on the graph above. Give a possible value for point X for this specific titration.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Comprehension",
    model_answer: "X is the equivalence/neutralisation point; a possible value is pH = 7 (since this is a strong acid-strong base titration).",
    marking_notes: "Marking points: identify X as the (neutralisation/equivalence) point; give a value consistent with a strong acid-strong base titration (pH = 7).",
    marking_points: [
      { marks: 1, description: "neutralisation / equivalence point", keywords: ["neutralisation", "equivalence"] },
      { marks: 1, description: "pH = 7", keywords: ["7"] },
    ],
    image_url: `${IMG}/6.3-titration-curve.png`,
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Use Le Chatelier's principle and refer to the equation HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) to explain what colour change will be observed during the titration of sodium hydroxide and hydrochloric acid, using bromothymol blue as indicator. Your explanation must include the initial colour, the neutralised colour and the over-titrated colour.",
    marks: 2, topicKey: "acids-and-bases", cognitiveLevelName: "Evaluation",
    model_answer: "Bromothymol blue is yellow in acid and blue in base. Initially (excess acid in the flask) the solution is yellow; at the neutralisation point (pH about 7, within the indicator's colour-change range) it is green; once over-titrated (excess base) it turns blue.",
    marking_notes: "Marking points: initial colour (yellow, in excess acid); neutralised/transitional colour (green, at pH 7) and over-titrated colour (blue, in excess base). Note: the handwritten memo's answer at this position ('bromothymol blue; strong acid + strong base') does not address the actual printed question (describing the colour progression) — a correct marking guide for the printed question was authored independently here; see header comment.",
    marking_points: [
      { marks: 1, description: "initial colour yellow (in excess acid)", keywords: ["yellow"] },
      { marks: 1, description: "over-titrated colour blue (in excess base), via a green transition at neutralisation", keywords: ["blue", "green"] },
    ],
    image_url: `${IMG}/6.3-titration-curve.png`,
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "During another experiment, 0,50 dm3 of a 0,10 mol.dm^-3 HCl solution is added to 0,80 dm3 of a NaHCO3 solution of concentration 0,25 mol.dm^-3: NaHCO3(aq) + HCl(aq) -> NaCl(aq) + CO2(g) + H2O(l). Calculate the concentration of the hydroxide ions in the solution on completion of the reaction.",
    marks: 8, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "n(HCl) = CV = 0,1x0,5 = 0,05 mol. n(NaHCO3) = CV = 0,25x0,8 = 0,2 mol. Mole ratio HCl:NaHCO3 = 1:1, so HCl is the limiting reagent (0,05 mol < 0,2 mol). n(NaHCO3) remaining = 0,2 - 0,05 = 0,15 mol. Total volume = 0,5 + 0,8 = 1,3 dm3. c(NaHCO3 remaining), taken as [OH-] = 0,15/1,3 = 0,115 mol.dm^-3. (The memo divides by 13 instead of the correct 1,3 dm3 total volume here, giving an incorrect 0,011 mol.dm^-3 — the corrected value is used; see header comment.)",
    marking_notes: "Marking points: n(HCl) = 0,05 mol; n(NaHCO3) = 0,2 mol; correct 1:1 mole ratio; HCl identified as limiting reagent; n(NaHCO3) reacted = 0,05 mol; n(NaHCO3) remaining = 0,15 mol; total volume = 1,3 dm3; final [OH-] = 0,115 mol.dm^-3.",
    steps: [
      { marks: 1, description: "What is n(HCl), using n = CV = 0,1 x 0,5?", options: ["0,05 mol", "0,10 mol", "0,50 mol", "0,15 mol"], correctIndex: 0 },
      { marks: 1, description: "What is n(NaHCO3), using n = CV = 0,25 x 0,8?", options: ["0,2 mol", "0,25 mol", "0,8 mol", "0,05 mol"], correctIndex: 0 },
      { marks: 1, description: "What is the mole ratio of HCl to NaHCO3 in the balanced equation?", options: ["1:1", "1:2", "2:1", "1:3"], correctIndex: 0 },
      { marks: 1, description: "Which reagent is limiting, comparing 0,05 mol HCl to 0,2 mol NaHCO3 at a 1:1 ratio?", options: ["HCl", "NaHCO3", "Neither, both used up exactly", "Cannot be determined"], correctIndex: 0 },
      { marks: 1, description: "How much NaHCO3 reacts (equal to the moles of HCl, at a 1:1 ratio)?", options: ["0,05 mol", "0,10 mol", "0,15 mol", "0,20 mol"], correctIndex: 0 },
      { marks: 1, description: "How much NaHCO3 remains in excess (0,2 - 0,05)?", options: ["0,15 mol", "0,25 mol", "0,05 mol", "0,20 mol"], correctIndex: 0 },
      { marks: 1, description: "What is the total volume of the mixture (0,5 + 0,8)?", options: ["1,3 dm3", "13 dm3", "1,0 dm3", "0,3 dm3"], correctIndex: 0 },
      { marks: 1, description: "What is the concentration of the excess NaHCO3 (taken as [OH-]), using 0,15 mol / 1,3 dm3?", options: ["0,115 mol.dm-3", "0,011 mol.dm-3", "0,15 mol.dm-3", "1,15 mol.dm-3"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "Calculate the pH of the solution on completion of the reaction in 6.4.",
    marks: 4, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "Kw = [H3O+][OH-]: 1x10^-14 = [H3O+](0,115). [H3O+] = 8,70x10^-14 mol.dm^-3. pH = -log[H3O+] = -log(8,70x10^-14) = 13,06.",
    marking_notes: "Marking points: Kw expression; correct substitution using [OH-] = 0,115 mol.dm^-3; [H3O+] = 8,70x10^-14 mol.dm^-3; pH = 13,06 (the memo's own [OH-] = 0,011 mol.dm^-3 figure, and its resulting pH = 12,06, both stem from the volume slip identified in 6.4.1; the corrected value is used here).",
    steps: [
      { marks: 1, description: "Which expression relates [H3O+] and [OH-]?", options: ["Kw = [H3O+][OH-]", "Ka = [H3O+][OH-]", "pH = [H3O+][OH-]", "Kw = [H3O+]/[OH-]"], correctIndex: 0 },
      { marks: 1, description: "Substituting Kw = 1x10-14 = [H3O+](0,115), what is [H3O+]?", options: ["8,70x10-14 mol.dm-3", "1,15x10-14 mol.dm-3", "8,70x10-13 mol.dm-3", "1,15x10-13 mol.dm-3"], correctIndex: 0 },
      { marks: 1, description: "Which formula gives the pH from [H3O+]?", options: ["pH = -log[H3O+]", "pH = log[H3O+]", "pH = -log[OH-]", "pH = 14 - [H3O+]"], correctIndex: 0 },
      { marks: 1, description: "What is the pH of the solution?", options: ["13,06", "12,06", "1,06", "14,00"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4.3",
    text: "Give the autoionisation reaction equation of water and indicate the acid-base pairs.",
    marks: 4, topicKey: "acids-and-bases", cognitiveLevelName: "Application",
    model_answer: "2H2O(l) <=> H3O+(aq) + OH-(aq). Conjugate acid-base pair 1: H2O (acid, left) / OH- (its conjugate base, right). Conjugate acid-base pair 2: H2O (base, left) / H3O+ (its conjugate acid, right).",
    marking_notes: "Marking points: correct balanced equation (2H2O <=> H3O+ + OH-); correctly labelled conjugate acid-base pair 1 (H2O/OH-); correctly labelled conjugate acid-base pair 2 (H2O/H3O+); correct designation of which species is the acid and which is the base in each pair. Note: the handwritten memo shows an H2SO4 + H2O ionisation equation with conjugate-pair labels at this position, not water's own autoionisation as the QP asks — a correct marking guide for the actual printed question was authored independently here; see header comment.",
    marking_points: [
      { marks: 1, description: "correct equation: 2H2O <=> H3O+ + OH-", keywords: ["2h2o", "h3o", "oh"] },
      { marks: 1, description: "conjugate pair 1 identified: H2O / OH-", keywords: ["h2o", "oh"] },
      { marks: 1, description: "conjugate pair 2 identified: H2O / H3O+", keywords: ["h2o", "h3o"] },
      { marks: 1, description: "acid and base correctly designated in each pair", keywords: ["acid", "base"] },
    ],
  },

  // ============ QUESTION 7: GALVANIC CELLS (20 marks) ============

  {
    number: "7", sub_number: "7.1.1",
    text: "An electrochemical cell is constructed with a copper electrode in 1,0 M Cu2+ solution and a zinc electrode in 1,0 M Zn2+ solution, connected via a voltmeter and salt bridge X. Consider the aqueous copper nitrate solution as seen above. Give the formula of the solute that was used to make the copper(II) nitrate solution.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Cu(NO3)2.",
    marking_notes: "Full marks require the correct formula, Cu(NO3)2, with correct subscripts.",
    marking_points: [{ marks: 2, description: "Cu(NO3)2", keywords: ["cu no3 2"] }],
    image_url: `${IMG}/7-galvanic-cell.png`,
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Name the solvent that was used to make the electrolyte.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Recall",
    model_answer: "Water.",
    marking_notes: "Accept only 'water'.",
    marking_points: [{ marks: 1, description: "water", keywords: ["water"] }],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: "The zinc rod is now replaced by an iron rod, and the zinc solution is replaced with an iron(II) nitrate solution. Name the reducing agent in this reaction.",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Iron (Fe) atoms / the iron electrode.",
    marking_notes: "Accept 'iron' or 'iron atoms'.",
    marking_points: [{ marks: 1, description: "iron atoms / Fe", keywords: ["iron"] }],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: "Give the equations for the oxidation and reduction half reactions.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Oxidation: Fe -> Fe2+ + 2e-. Reduction: Cu2+ + 2e- -> Cu.",
    marking_notes: "Both half-reactions required, correctly balanced, for full marks.",
    marking_points: [
      { marks: 1, description: "oxidation: Fe -> Fe2+ + 2e-", keywords: ["fe", "fe2", "2e"] },
      { marks: 1, description: "reduction: Cu2+ + 2e- -> Cu", keywords: ["cu2", "2e", "cu"] },
    ],
  },
  {
    number: "7", sub_number: "7.2.3",
    text: "Write the cell notation for this cell.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "Fe(s) | Fe2+(aq) || Cu2+(aq) | Cu(s).",
    marking_notes: "Marking points: anode half-cell correct (Fe | Fe2+); salt bridge (double line) in the correct position; cathode half-cell correct (Cu2+ | Cu); correct overall order (anode, then cathode) with phases indicated.",
    marking_points: [
      { marks: 1, description: "anode half-cell: Fe(s) | Fe2+(aq)", keywords: ["fe s", "fe2"] },
      { marks: 1, description: "salt bridge shown (||)", keywords: ["salt bridge", "double line"] },
      { marks: 1, description: "cathode half-cell: Cu2+(aq) | Cu(s)", keywords: ["cu2", "cu s"] },
      { marks: 1, description: "correct order and phases throughout", keywords: ["phases"] },
    ],
  },
  {
    number: "7", sub_number: "7.2.4",
    text: "State which electrode, Cu or Fe, would decrease in mass as the reaction proceeds. Explain your answer.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Fe. Fe gets oxidised (it is the stronger reducing agent / anode); it loses electrons to form Fe2+ ions that go into solution, so the iron electrode loses mass.",
    marking_notes: "Marking points: identify Fe as the electrode that decreases in mass; Fe is oxidised at the anode; it loses electrons to form Fe2+ ions that dissolve into solution.",
    marking_points: [
      { marks: 1, description: "Fe (the iron electrode)", keywords: ["fe"] },
      { marks: 1, description: "Fe is oxidised, losing electrons", keywords: ["oxidised", "loses electrons"] },
      { marks: 1, description: "Fe2+ ions formed go into solution", keywords: ["fe2", "solution"] },
    ],
  },
  {
    number: "7", sub_number: "7.2.5",
    text: "Would a potassium chloride solution be a suitable chemical to use in component X (the salt bridge)? Explain your answer by mentioning the movement of the different ions.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Yes: it does not form a precipitate with either half-cell's ions. Cl- ions move towards the Fe2+ half-cell, as [Fe2+] increases, to neutralise the excess positive charge building up there; K+ ions move towards the Cu2+ half-cell to replace the Cu2+ ions being reduced (removed from solution), keeping both half-cells electrically neutral.",
    marking_notes: "Marking points: 'yes', with the reason that KCl does not form a precipitate with Fe2+/Cu2+/NO3-; Cl- ions move to the Fe2+(anode) half-cell as [Fe2+] increases; K+ ions move to the Cu2+(cathode) half-cell to replace the Cu2+ ions being reduced, keeping both half-cells electrically neutral.",
    marking_points: [
      { marks: 1, description: "yes — KCl does not form a precipitate with the ions present", keywords: ["yes", "precipitate"] },
      { marks: 1, description: "Cl- ions move toward the Fe2+ (anode) half-cell as [Fe2+] increases", keywords: ["cl", "fe2", "increases"] },
      { marks: 1, description: "K+ ions move toward the Cu2+ (cathode) half-cell to replace the reduced Cu2+ ions", keywords: ["k", "cu2", "replace"] },
      { marks: 1, description: "this keeps both half-cells electrically neutral", keywords: ["neutral", "charge"] },
    ],
  },
  {
    number: "7", sub_number: "7.2.6",
    text: "Calculate the emf generated by this cell under standard conditions.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "EMF = E(cathode) - E(anode) = E(Cu2+/Cu) - E(Fe2+/Fe) = 0,34 - (-0,44) = 0,78 V.",
    marking_notes: "Marking points: correct formula (EMF = E(cathode) - E(anode)); correct substitution of standard electrode potentials; final answer 0,78 V.",
    steps: [
      { marks: 1, description: "Which formula gives the standard cell EMF?", options: ["EMF = E(cathode) - E(anode)", "EMF = E(anode) - E(cathode)", "EMF = E(cathode) + E(anode)", "EMF = E(anode) x E(cathode)"], correctIndex: 0 },
      { marks: 1, description: "Substituting the standard electrode potentials, what is 0,34 - (-0,44)?", options: ["0,78", "0,10", "-0,10", "0,44"], correctIndex: 0 },
      { marks: 1, description: "What is the EMF generated by this cell under standard conditions?", options: ["0,78 V", "0,10 V", "0,44 V", "0,34 V"], correctIndex: 0 },
    ],
  },

  // ============ QUESTION 8: ELECTROLYTIC CELLS (18 marks) ============

  {
    number: "8", sub_number: "8.1.1",
    text: "A student wishes to observe the electrolysis of a solution of copper(II) chloride. He inserts two graphite electrodes into the solution and connects these electrodes to a DC power supply: CuCl2(aq) -> Cu(s) + Cl2(g). Explain why the student uses copper(II) chloride SOLUTION and not copper(II) chloride SOLID for this process.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "The solid has no free ions that are able to move, as the ions are packed/fixed in a solid lattice structure; in solution, the ions are free to move and can conduct electric current / undergo electrolysis.",
    marking_notes: "Marking points: solid has no free-moving ions; ions are fixed/packed in a solid lattice structure; (in solution) ions are free to move, allowing conduction/electrolysis.",
    marking_points: [
      { marks: 1, description: "the solid has no free ions that can move", keywords: ["no free ions", "move"] },
      { marks: 1, description: "ions are packed/fixed in a solid lattice structure", keywords: ["lattice", "packed"] },
      { marks: 1, description: "in solution the ions are free to move / can conduct", keywords: ["solution", "free", "conduct"] },
    ],
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "At which electrode, anode or cathode, will chlorine gas be produced?",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Comprehension",
    model_answer: "Anode.",
    marking_notes: "Accept only 'anode'.",
    marking_points: [{ marks: 2, description: "anode", keywords: ["anode"] }],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "The student adds copper(II) chloride to the cell every minute to prevent the formation of oxygen gas at the electrode named in Question 8.1.2. Why does the student do this? Fully explain your answer.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "As electrolysis proceeds, [CuCl2] (and therefore [Cl-]) decreases; if it gets too low, water will be oxidised to O2 instead. Cl- is a stronger reducing agent than water (is oxidised more easily than water) and less energy is needed to oxidise it, so keeping [Cl-] high (by topping up CuCl2) ensures Cl2, not O2, continues to form.",
    marking_notes: "Marking points: [CuCl2]/[Cl-] decreases as electrolysis proceeds; if too low, water will be oxidised to O2 instead; Cl- is a stronger reducing agent than water / needs less energy to oxidise, so topping up keeps Cl2 (not O2) forming.",
    marking_points: [
      { marks: 1, description: "[CuCl2] / [Cl-] decreases as the reaction proceeds", keywords: ["decreases", "cucl2", "cl"] },
      { marks: 1, description: "if [Cl-] gets too low, water will be oxidised to O2 instead", keywords: ["water", "oxidised", "o2"] },
      { marks: 1, description: "Cl- is a stronger reducing agent than water / needs less energy to oxidise", keywords: ["stronger reducing agent", "less energy"] },
    ],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: "After a period of 10 minutes, 0,11 mol of copper metal is formed (Cu2+ + 2e- -> Cu). Determine the charge supplied to this cell in 10 minutes.",
    marks: 4, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "n(e-) = 2 x n(Cu) = 2 x 0,11 = 0,22 mol (mole ratio Cu2+:e- = 1:2). Q = nF = 0,22 x 96 500 = 21 230 C.",
    marking_notes: "Marking points: mole ratio Cu2+:e- = 1:2, giving n(e-) = 0,22 mol; using Q = nF; correct substitution; final answer approximately 21 230 C (accept the range 21 000-21 300 C, consistent with the memo's own alternative method via Avogadro's number, which reached 21 190,4 C).",
    steps: [
      { marks: 1, description: "Using the mole ratio Cu2+:e- = 1:2 and n(Cu) = 0,11 mol, what is n(e-)?", options: ["0,22 mol", "0,11 mol", "0,44 mol", "0,055 mol"], correctIndex: 0 },
      { marks: 1, description: "Which formula relates charge to moles of electrons?", options: ["Q = nF", "Q = n/F", "Q = It only", "Q = n x NA"], correctIndex: 0 },
      { marks: 1, description: "Substituting n = 0,22 mol and F = 96 500 C/mol, what is Q?", options: ["0,22 x 96 500", "0,22 / 96 500", "96 500 / 0,22", "0,22 + 96 500"], correctIndex: 0 },
      { marks: 1, description: "What is the charge supplied to the cell in 10 minutes?", options: ["21 230 C", "9 650 C", "212 300 C", "2 123 C"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.1.5",
    text: "Calculate the number of chloride ions used while the cell runs for 10 minutes.",
    marks: 3, topicKey: "electrochemistry", cognitiveLevelName: "Application",
    model_answer: "n(Cl-) = 2 x n(Cu) = 2 x 0,11 = 0,22 mol (mole ratio Cu:Cl- = 1:2, from CuCl2 -> Cu + Cl2). Number of Cl- ions = n x NA = 0,22 x 6,02x10^23 = 1,32x10^23 ions.",
    marking_notes: "Marking points: mole ratio Cu:Cl- = 1:2, giving n(Cl-) = 0,22 mol; using N = n x NA; final answer 1,32x10^23 Cl- ions.",
    steps: [
      { marks: 1, description: "Using the mole ratio Cu:Cl- = 1:2 and n(Cu) = 0,11 mol, what is n(Cl-)?", options: ["0,22 mol", "0,11 mol", "0,055 mol", "0,44 mol"], correctIndex: 0 },
      { marks: 1, description: "Which formula converts moles of Cl- to number of ions?", options: ["N = n x NA", "N = n / NA", "N = NA / n", "N = n x F"], correctIndex: 0 },
      { marks: 1, description: "What is the number of Cl- ions used, using NA = 6,02x10^23 mol-1?", options: ["1,32x10^23", "6,02x10^23", "2,64x10^23", "1,32x10^22"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2.1",
    text: "In an attempt to electroplate a bracelet with aluminium metal, a technician uses an aqueous solution of aluminium sulfate (Al2(SO4)3) in a cell, with an aluminium electrode connected to a power source and the bracelet as the other electrode. When the technician connects the power source, she notices that there is no shiny plating of aluminium metal appearing on the bracelet — instead, a stream of colourless bubbles (hydrogen gas) forms at the bracelet. Over time, what will be observed at the aluminium electrode?",
    marks: 1, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "The aluminium electrode will decrease in size/mass (it will dissolve away) over time.",
    marking_notes: "Accept 'decreases in size/mass' or 'dissolves'. Since Al3+ is not reduced at the bracelet (H2 forms there instead), the reactive aluminium electrode must instead be oxidised (Al -> Al3+ + 3e-) at the anode, in preference to water/sulfate being oxidised there, causing it to dissolve. Note: the memo's final page is illegible/incomplete beyond '8.2.1 Th...'; this is an independently authored, standard CAPS-consistent answer — see header comment.",
    marking_points: [{ marks: 1, description: "the aluminium electrode decreases in size/mass (dissolves)", keywords: ["decrease", "dissolve", "mass"] }],
    image_url: `${IMG}/8.2-electroplating-diagram.png`,
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Name the gas produced at the bracelet. Explain your answer.",
    marks: 2, topicKey: "electrochemistry", cognitiveLevelName: "Evaluation",
    model_answer: "Hydrogen gas (H2). Al3+ is a much weaker oxidising agent than water (has a much more negative reduction potential), so Al3+ is not reduced; water is reduced instead at the cathode (bracelet): 2H2O + 2e- -> H2 + 2OH-.",
    marking_notes: "Marking points: hydrogen gas (H2) named; explanation that Al3+ is a weaker oxidising agent than water / water is reduced preferentially at the cathode. Note: independently authored, standard CAPS-consistent answer, since the memo's final page is illegible/incomplete at this point — see header comment.",
    marking_points: [
      { marks: 1, description: "hydrogen gas (H2)", keywords: ["hydrogen"] },
      { marks: 1, description: "Al3+ is a weaker oxidising agent than water, so water is reduced instead at the cathode", keywords: ["weaker oxidising agent", "water", "reduced"] },
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
