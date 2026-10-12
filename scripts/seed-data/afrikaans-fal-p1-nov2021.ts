// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language, FAL) Paper 1 (Language: "V1"), November 2021, National Senior
// Certificate, Grade 12. Paper is in Afrikaans. Source: official DBE question
// paper + marking guideline (Nasienriglyne), combined PDF mirrored on
// stanmorephysics.com (source_url below). Question paper = pages 1-16
// (cover page 1, instructions p.2, Afdeling A p.3-8, Afdeling B p.9, Afdeling
// C p.10-16); memo = pages 17-28 (cover p.17, "12 bladsye"). Cover page:
// PUNTE: 80, TYD: 2 uur (=120 minutes). Both read in full from the real
// extracted text layer, and visual texts checked against page renders.
//
// Paper structure (no choice sections; every mark ingested), 80 marks:
//   AFDELING A: Leesbegrip (30)  Q1: TEKS A article "Moenie net praat nie;
//                                doen iets!" (1.1-1.15, 24 marks incl. the
//                                4-mark matching item 1.13) + TEKS B bar graph
//                                "Soveel mense is vir verkeersoortredings
//                                gevang" (1.16-1.21, 6 marks)
//   AFDELING B: Opsomming (10)   Q2: summarise SEVEN facts about Zozibini
//                                Tunzi's development (TEKS C), <= 70 words:
//                                7 marks for facts + 3 marks for language
//   AFDELING C: Taal (40)        Q3 Advertensie (TEKS D, 10) + Q4 Strokiesprent
//                                (TEKS E, 10) + Q5 Artikel (TEKS F, 5.1 = 14)
//                                and Prent (TEKS G, 5.2 = 6)
//
// Subject / cognitive levels / topics are the shared Afrikaans FAL definitions
// used verbatim in all ten Afrikaans FAL seed files (P1 uses only the first
// four topics).
//
// Cognitive levels: the Afrikaans FAL memo gives NO Barrett-taxonomy labels
// per question (unlike some English papers), so levels are assigned by the
// ingester from the nature of each question (Literal = lift a fact; Reorgan-
// isation = classify/match/summarise/apply a language rule; Inference =
// work out meaning, purpose or visual evidence; Evaluation = judge/opinion).
// FLAG: levels are NOT from the memo; review if exact levels matter.
//
// Topic mapping: Q1 (incl. the TEKS B graph, which is a Section A
// comprehension text) -> "comprehension"; Q2 -> "summary"; Q3 and Q4 are
// sub-question-by-sub-question: items on advertising/cartoon technique,
// connotation, layout, manipulation and picture evidence -> "visual-literacy"
// (3.1, 3.2, 3.3, 3.6, 3.7, 3.8, 4.2, 4.5-4.8); items that test grammar/
// spelling/register inside those texts (3.4 intensive form, 3.5 superlative,
// 4.1 spelling, 4.3 sentence correction, 4.4.1/4.4.2 register) ->
// "language-structures"; all of Q5 -> "language-structures".
//
// ALL-MULTIPLE-CHOICE conversion (the user's standing preference): every
// question is a stepped MCQ (`steps`), one step per mark-earning point, four
// options each. The correct option is taken from the memo; wrong options are
// realistic Grade 12 errors in Afrikaans (typical misspellings, wrong
// grammatical forms, facts from elsewhere in the text, literal readings),
// never another memo-accepted answer. Where the memo accepts a list of
// alternatives ("Enige EEN") the single most representative one is used as
// the correct option. "Noem TWEE ..." / two-mark items are two 1-mark steps.
// `marking_points` is NOT used anywhere in this file.
//
// Summary (Q2, Opsomming): converted to 10 MCQ steps. Steps 1-7: for each of
// seven chronological stages of Zozi's development the student picks the
// correct own-words summary fact (distractors = wrong details, or accurate
// but non-developmental facts from TEKS C such as her parents' jobs). Steps
// 8-10 stand in for the memo's 3 language marks (own words, chronological
// order, word-limit/word-count convention) as MCQ items about summary
// technique. FLAG: the memo awards language marks by number of correct facts
// and quotation, which cannot be reproduced in MCQ form; the 3 language marks
// are an adaptation, not a memo transcription. The memo accepts ANY seven of
// eight facts; the eighth (guest on Trevor Noah's The Daily Show) has no step.
//
// Images (cropped from page renders, public/question-images/afrikaans-fal-
// 2021-p1/): the reading passages and visual texts are provided as images
// since the questions refer to paragraph/line numbers and layout:
//   teks-a-artikel.png (TEKS A, pp.3-4, both pages stitched, line numbers
//   kept), teks-b-grafiek.png (TEKS B graph), teks-c-opsomming.png (Q2
//   instructions + TEKS C), teks-d-advertensie.png (TEKS D), teks-e-
//   strokiesprent.png (TEKS E, three frames), teks-f-artikel.png (TEKS F,
//   with the numbered 5.1.x markers), teks-g-prent.png (TEKS G picture).
// Each image is attached to every question that uses its text. The PDF
// mirror stamps a "Downloaded from Stanmorephysics.com" watermark diagonally
// over TEKS A (page 3) that cannot be removed; the text stays readable.
//
// FLAG notes for review:
//  - 1.6.2 is a "dominovraag" in the memo (1.6.2 earns its mark only if 1.6.1
//    is correct); stepped marking cannot enforce this, so 1.6.2 is graded
//    independently.
//  - 1.15 is an open "choose ONE of three people" question; the memo credits
//    any of the three. The MCQ fixes the choice to Ayakha Melithafa (as
//    stated in the question text) and tests her contribution and a workable
//    way to support her.
//  - 1.5.2 / 1.14 / 1.17 / 1.19 / 3.x / 4.x open items: the memo lists many
//    accepted alternatives; the MCQ tests one representative accepted answer.
//  - 5.1.3 (2 marks): memo gives 1 mark for the punctuation mark in the right
//    place and 1 for correct word order; modelled as two MCQ steps (word
//    order, then punctuation) over full sentences.
//  - 5.1.12 (homonym of "maat" used in a sentence): converted to "pick the
//    sentence in which 'maat' has a DIFFERENT meaning than in the article
//    (rhythm/beat)". 5.2.6 / 5.1.7 etc. were turned into choose-the-correct-
//    sentence items.
//  - 5.1.13 memo also accepts "spesial" (not "speciaal"); "spesial" is
//    deliberately not offered as a distractor.
//  - Memo 5.2.2 lists both "familie" and "gesin" as one-word answers; only
//    "gesin" is offered as the correct option and "familie" is not offered.
//  - Memo 4.8 wording for Mavis ("'n motor wat vol duike is") is slightly
//    loose; transcribed faithfully in meaning (an unmarked car = a car
//    without dents/marks, which Mavis says does not exist).

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/afrikaans-fal-2021-p1";
const TEKS_A = `${IMG}/teks-a-artikel.png`;
const TEKS_B = `${IMG}/teks-b-grafiek.png`;
const TEKS_C = `${IMG}/teks-c-opsomming.png`;
const TEKS_D = `${IMG}/teks-d-advertensie.png`;
const TEKS_E = `${IMG}/teks-e-strokiesprent.png`;
const TEKS_F = `${IMG}/teks-f-artikel.png`;
const TEKS_G = `${IMG}/teks-g-prent.png`;

export const subject = {
  name: "Afrikaans First Additional Language",
  stream: null as string | null,
};

export const cognitiveLevels = [
  { name: "Literal", order_index: 1 },
  { name: "Reorganisation", order_index: 2 },
  { name: "Inference", order_index: 3 },
  { name: "Evaluation", order_index: 4 },
];

export const topics = [
  { key: "comprehension", name: "Reading Comprehension (Leesbegrip)", caps_term: null as string | null, textbook_ref: "Afrikaans First Additional Language — Reading Comprehension", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=afrikaans+eerste+addisionele+taal+graad+12+leesbegrip" },
  { key: "summary", name: "Summary (Opsomming)", caps_term: null as string | null, textbook_ref: "Afrikaans First Additional Language — Summary Writing", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=afrikaans+eerste+addisionele+taal+graad+12+opsomming" },
  { key: "visual-literacy", name: "Advertisements and Cartoons (Visuele geletterdheid)", caps_term: null as string | null, textbook_ref: "Afrikaans First Additional Language — Advertisements, Cartoons and Visual Texts", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=afrikaans+eerste+addisionele+taal+graad+12+advertensie+spotprent" },
  { key: "language-structures", name: "Language Structures and Conventions (Taalstrukture en -konvensies)", caps_term: null as string | null, textbook_ref: "Afrikaans First Additional Language — Language Structures and Conventions", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=afrikaans+eerste+addisionele+taal+graad+12+taalstrukture" },
  { key: "drama-fiela", name: "Drama: Fiela se Kind", caps_term: null as string | null, textbook_ref: "Afrikaans First Additional Language — Fiela se Kind (Drama)", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=fiela+se+kind+drama+graad+12" },
  { key: "short-stories", name: "Short Stories (Kortverhale)", caps_term: null as string | null, textbook_ref: "Afrikaans First Additional Language — Prescribed Short Stories", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=afrikaans+eerste+addisionele+taal+graad+12+kortverhale" },
  { key: "poetry", name: "Poetry (Gedigte)", caps_term: null as string | null, textbook_ref: "Afrikaans First Additional Language — Prescribed Poetry", textbook_url: null as string | null, video_url: "https://www.youtube.com/results?search_query=afrikaans+eerste+addisionele+taal+graad+12+gedigte" },
];

export const paper = {
  year: 2021,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 120,
  total_marks: 80,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2022/04/Afrikaans-FAL-Grade-12-NSC-November-2021-P1-and-Memo.pdf" as string | null,
};

export const examSchedule: { paperNumber: string; examType: "prelim" | "final"; examDate: string; startTime: string; durationMinutes: number; }[] = [];

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

// Build a step: the correct option is inserted at index `pos` among the wrong
// ones (so the correct answer is not always in the same slot).
function step(
  description: string,
  pos: number,
  correct: string,
  wrong: [string, string, string],
  marks = 1,
): MarkingPointStep {
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

export const questions: QuestionSeed[] = [
  // ============ AFDELING A: LEESBEGRIP — VRAAG 1 (30 marks) ============
  // TEKS A: article (image) — 1.1 to 1.15; TEKS B: bar graph (image) — 1.16 to 1.21.

  {
    number: "1", sub_number: "1.1",
    text: "Watter skrywer glo dat alle mense 'n verskil aan ander se lewens wil maak?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Max Lucado",
    marking_notes: "Memo: Max Lucado.",
    steps: [step("Watter skrywer glo dat alle mense 'n verskil wil maak?", 1, "Max Lucado", ["Greta Thunberg", "Donalene Johanessen", "Candice Mostert"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.2",
    text: "\"Gelukkig sien ons deesdae al minder 'julle moet'-mense en meer 'ons moet'-mense.\" (Paragraaf 1)\n\nWaarom kan ons sê dat hierdie stelling 'n MENING is en nie 'n feit nie?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Dit is die skrywer se opinie; dit kan nie bewys word nie (daar is geen statistiek/navorsing wat dit bevestig nie; almal stem nie noodwendig saam nie).",
    marking_notes: "Memo: enige EEN van: dit is die skrywer se opinie / dit kan nie bewys word nie / geen statistiek of navorsing bevestig dit nie / almal stem nie noodwendig saam nie. Geen punt vir net FEIT/MENING nie; die rede verdien die punt.",
    steps: [step("Waarom is die stelling 'n mening en nie 'n feit nie?", 2, "Dit is die skrywer se opinie wat nie met syfers of navorsing bewys kan word nie.", ["Dit word met navorsing en syfers in die artikel bewys.", "Dit beskryf 'n gebeurtenis wat werklik in 2019 plaasgevind het.", "Dit is 'n stelling wat almal sonder uitsondering sal beaam."])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.3",
    text: "Kies die KORREKTE antwoord uit dié tussen hakies.\n\n\"Julle moet\"-mense is mense wat graag (eise stel/verantwoordelikheid aanvaar).",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "eise stel",
    marking_notes: "Memo: eise stel.",
    steps: [step("\"Julle moet\"-mense is mense wat graag ...", 1, "eise stel", ["verantwoordelikheid aanvaar", "self doen en gee", "moue oprol"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.4",
    text: "Waarom het Ayakha se familie swaargekry?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Dit was droog / die droogte.",
    marking_notes: "Memo: dit was droog/die droogte.",
    steps: [step("Waarom het Ayakha se familie swaargekry?", 0, "Die droogte het hulle as boere erg getref.", ["Hulle oeste is deur oorstromings vernietig.", "Hulle plaas is deur 'n veldbrand verwoes.", "Hulle het nie meer 'n vaste inkomste gehad nie."])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.5.1",
    text: "Ayakha het by verskillende organisasies, wat op klimaatsverandering fokus, aangesluit.\n\nNoem TWEE organisasies waarby Ayakha aangesluit het.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Projek 90 (teen 2030) en die Afrika Klimaat Alliansie.",
    marking_notes: "Memo: Projek 90 (teen 2030); Afrika Klimaat Alliansie (1 punt elk). Twee punte = twee stappe.",
    steps: [
      step("Eerste organisasie waarby Ayakha aangesluit het:", 2, "Projek 90 teen 2030", ["Royal Kidz", "Waste-Ed", "Restore SA Pty Ltd"]),
      step("Tweede organisasie waarby Ayakha aangesluit het:", 0, "Afrika Klimaat Alliansie", ["Sheets for Shirts", "Marriotts Hotelgroep", "Primêre Skool Eastville"]),
    ],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.5.2",
    text: "Waaruit kan 'n mens aflei dat hierdie organisasies nie nét in klimaatsverandering in Suid-Afrika belangstel nie?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Die woord \"wêreldwyd\" (dui op internasionale betrokkenheid) / die Afrika Klimaat Alliansie (dui op Afrika in sy geheel) / Ayakha het oorsese aktiviste/Greta van Swede leer ken.",
    marking_notes: "Memo: enige EEN of soortgelyk.",
    steps: [step("Waaruit lei ons af dat die organisasies nie net in Suid-Afrika belangstel nie?", 3, "Die woord \"wêreldwyd\" dui op internasionale betrokkenheid.", ["Ayakha se familie boer in die Wes-Kaap.", "Die organisasies is almal deur Suid-Afrikaanse boere gestig.", "Politieke leiers in Suid-Afrika ondersteun hulle."])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.6.1",
    text: "\"Hulle moenie dink dat sy dinge uit haar duim suig nie.\" (Paragraaf 5)\n\nWord \"uit haar duim suig\" hier LETTERLIK of FIGUURLIK gebruik?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "Figuurlik",
    marking_notes: "Memo: figuurlik.",
    steps: [step("Hoe word \"uit haar duim suig\" gebruik?", 1, "Figuurlik", ["Letterlik", "Letterlik en figuurlik terselfdertyd", "Dit is nie 'n uitdrukking nie"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.6.2",
    text: "Motiveer jou antwoord op VRAAG 1.6.1 deur te verduidelik wat \"uit haar duim suig\" beteken.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "Hulle moenie dink dat sy jok/stories opmaak/nie die waarheid praat/sonder bewyse praat nie.",
    marking_notes: "Memo: enige EEN of soortgelyk. Dominovraag: die punt word slegs toegeken as 1.6.1 korrek is (nie in stap-nasien afgedwing nie; sien FLAG in die lêerkop).",
    steps: [step("Wat beteken \"uit haar duim suig\"?", 2, "Stories opmaak / sonder bewyse praat", ["Soos 'n baba ongeduldig en afhanklik wees", "Baie lank en hard navorsing doen", "Seker wees van die feite wat jy verkondig"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.7",
    text: "Sê watter hotelgroep entrepreneurs se drome waar maak en motiveer jou antwoord met 'n bewys uit die leesstuk.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "Marriotts (-Hotelgroep). Bewys: Hulle het vir Donalene R1,2 miljoen/geld gegee om haar besigheid te begin / hulle het besluit om lakens vir haar te skenk.",
    marking_notes: "Memo: 1 punt vir Marriotts, 1 punt vir enige EEN bewys.",
    steps: [
      step("Watter hotelgroep maak entrepreneurs se drome waar?", 0, "Marriotts-Hotelgroep", ["Protea-Hotelgroep", "Hilton-Hotelgroep", "Sun International-Hotelgroep"]),
      step("Watter bewys uit die teks ondersteun jou antwoord?", 1, "Hulle het vir Donalene R1,2 miljoen gegee om haar eie besigheid te begin.", ["Hulle het 300 skoolhemde aan Primêre Skool Eastville gegee.", "Hulle het 20 ton plastiek van vullishope af verwyder.", "Hulle gebruik 40% van hul wins vir Royal Kidz se projekte."]),
    ],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.8",
    text: "Hoeveel skoolhemde kan uit een koningsgrootte laken gemaak word?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Vyf/5 (skoolhemde)",
    marking_notes: "Memo: vyf/5.",
    steps: [step("Hoeveel skoolhemde uit een koningsgrootte laken?", 1, "Vyf", ["Drie", "Tien", "Elf"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.9",
    text: "Wat was in 2019 Donalene se projek vir Mandeladag?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Sy het (meer as 1 000) skoolhemde/winterbaadjies/skoene/klere aan leerders (van verskillende skole) geskenk.",
    marking_notes: "Memo: of soortgelyk.",
    steps: [step("Donalene se Mandeladag-projek in 2019:", 2, "Sy het meer as 1 000 skoolhemde, winterbaadjies en skoene aan leerders geskenk.", ["Sy het 300 skoolhemde aan Graad R–1-leerders by Eastville geskenk.", "Sy het Restore SA Pty Ltd as haar eie besigheid begin.", "Sy het wasgoedsakke vir hotelle gemaak."])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.10",
    text: "Kies die KORREKTE antwoord.\n\nDie kinders wat deur Donalene se Sheets for Shirts-projek gehelp word, woon nou gereeld skool by. Hieruit lei ons af dat ...",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "C — hierdie projek onderwys in ons land indirek ondersteun.",
    marking_notes: "Memo: C.",
    steps: [step("Hieruit lei ons af dat ...", 2, "hierdie projek onderwys in ons land indirek ondersteun.", ["party kinders nie van hierdie projek sal hou nie.", "alle leerders nou hierdie hemde behoort te dra.", "ander hotelle ook by hierdie projek betrokke gaan raak."])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.11",
    text: "Watter tipe houer gebruik Candice om ekostene te maak?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "('n) 2 ℓ-koeldrankbottel",
    marking_notes: "Memo: 2 ℓ-koeldrankbottel (2 ℓ moet deel van die antwoord wees).",
    steps: [step("Watter houer gebruik Candice vir ekostene?", 3, "'n 2 ℓ-koeldrankbottel", ["'n 500 mℓ-waterbottel", "'n 5 ℓ-plastiekdrom", "'n 1 ℓ-melkhouer"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.12",
    text: "Die skrywer se doel met hierdie teks is om vir die leser presies te verduidelik wat klimaatsverandering is.\n\nMotiveer waarom hierdie stelling ONWAAR is.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Die eintlike doel is om die leser te vertel van Suid-Afrikaners wat 'n verskil maak / die leser te motiveer om betrokke te raak; klimaatsverandering word net in paragrawe 3, 4 en 5 aangeraak.",
    marking_notes: "Memo: enige EEN van 9 aanvaarde redes of soortgelyk. Geen punt vir net ONWAAR nie.",
    steps: [step("Waarom is die stelling onwaar?", 1, "Die teks handel hoofsaaklik oor mense wat 'n verskil maak, nie oor 'n verduideliking van klimaatsverandering nie.", ["Die titel verduidelik wat klimaatsverandering is.", "Elke paragraaf omskryf wat klimaatsverandering is.", "Die laaste paragraaf gee 'n definisie van klimaatsverandering."])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.13.1",
    text: "Kies die beskrywing in KOLOM B wat by die organisasie in KOLOM A pas.\n\nKOLOM A: Projek 90 teen 2030\n\nKOLOM B: A maak die jeug van herwinning bewus; B fokus net op klimaatsverandering in Afrika; C laat volwassenes menswaardig voel; D fokus op 'n gesonder toekoms vir die wêreld; E laat ander projekte ontwikkel wat op kinders fokus.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "D — fokus op 'n gesonder toekoms vir die wêreld",
    marking_notes: "Memo: D.",
    steps: [step("Projek 90 teen 2030:", 1, "fokus op 'n gesonder toekoms vir die wêreld", ["fokus net op klimaatsverandering in Afrika", "maak die jeug van herwinning bewus", "laat volwassenes menswaardig voel"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.13.2",
    text: "Kies die beskrywing in KOLOM B wat by die organisasie in KOLOM A pas.\n\nKOLOM A: Restore SA Pty Ltd\n\nKOLOM B: A maak die jeug van herwinning bewus; B fokus net op klimaatsverandering in Afrika; C laat volwassenes menswaardig voel; D fokus op 'n gesonder toekoms vir die wêreld; E laat ander projekte ontwikkel wat op kinders fokus.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "C — laat volwassenes menswaardig voel",
    marking_notes: "Memo: C.",
    steps: [step("Restore SA Pty Ltd:", 2, "laat volwassenes menswaardig voel", ["fokus op 'n gesonder toekoms vir die wêreld", "fokus net op klimaatsverandering in Afrika", "maak die jeug van herwinning bewus"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.13.3",
    text: "Kies die beskrywing in KOLOM B wat by die organisasie in KOLOM A pas.\n\nKOLOM A: Royal Kidz\n\nKOLOM B: A maak die jeug van herwinning bewus; B fokus net op klimaatsverandering in Afrika; C laat volwassenes menswaardig voel; D fokus op 'n gesonder toekoms vir die wêreld; E laat ander projekte ontwikkel wat op kinders fokus.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "E — laat ander projekte wat op kinders fokus, ontwikkel",
    marking_notes: "Memo: E.",
    steps: [step("Royal Kidz:", 3, "laat ander projekte ontwikkel wat op kinders fokus", ["maak die jeug van herwinning bewus", "laat volwassenes menswaardig voel", "fokus net op klimaatsverandering in Afrika"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.13.4",
    text: "Kies die beskrywing in KOLOM B wat by die organisasie in KOLOM A pas.\n\nKOLOM A: Waste-Ed\n\nKOLOM B: A maak die jeug van herwinning bewus; B fokus net op klimaatsverandering in Afrika; C laat volwassenes menswaardig voel; D fokus op 'n gesonder toekoms vir die wêreld; E laat ander projekte ontwikkel wat op kinders fokus.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "A — maak die jeug van herwinning bewus",
    marking_notes: "Memo: A.",
    steps: [step("Waste-Ed:", 0, "maak die jeug van herwinning bewus", ["laat ander projekte ontwikkel wat op kinders fokus", "fokus op 'n gesonder toekoms vir die wêreld", "fokus net op klimaatsverandering in Afrika"])],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.14",
    text: "Hou die hele teks in gedagte.\n\nWaarom is die sin hieronder 'n goeie samevatting van die inhoud?\n\n\"Maar om dit te doen, moet mense moue oprol.\" (Paragraaf 1)",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Die drie mense in die teks het nie net gedroom/gepraat nie; hulle het daadwerklik iets gedoen/hard gewerk om 'n verskil te maak/mense se omstandighede te verbeter.",
    marking_notes: "Memo: 2 punte vir enige EEN antwoord (of soortgelyk) wat beide idees dek: nie net gepraat nie + daadwerklik iets gedoen. Gemodelleer as twee 1-punt-stappe.",
    steps: [
      step("Wat het die drie mense NIE net gedoen nie?", 0, "Hulle het nie net gepraat of gedroom nie.", ["Hulle het nie net geld ingesamel nie.", "Hulle het nie net skool toe gegaan nie.", "Hulle het nie net hul eie besighede bestuur nie."]),
      step("Wat het hulle wél gedoen?", 3, "Hulle het daadwerklik gewerk om 'n verskil in ander se lewens te maak.", ["Hulle het politieke leiers gevra om al die werk te doen.", "Hulle het ander mense gevra om vir hulle te werk sonder betaling.", "Hulle het net by internasionale organisasies aangesluit."]),
    ],
    image_url: TEKS_A,
  },
  {
    number: "1", sub_number: "1.15",
    text: "In hierdie teks lees ons van drie mense wat 'n verskil gemaak het.\n\nKies EEN van die drie wat jy sou ondersteun. Sê wat hierdie persoon se grootste bydrae tot SA is en hoe jý hierdie persoon op 'n praktiese/werkbare manier sal ondersteun.\n\n(In hierdie keuse-weergawe kies ons Ayakha Melithafa.)",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Ayakha Melithafa — grootste bydrae: sy bring die gevare van klimaatsverandering onder ons aandag/wys ons om die omgewing te bewaar. Ondersteuning: enige werkbare idee wat haar stem namens die omgewing verder dra, bv. mense leer wat die gevolge van klimaatsverandering sal wees.",
    marking_notes: "Memo: 1 punt vir die bydrae, 1 punt vir 'n gepaste ondersteuningsidee; die memo aanvaar ook Donalene Johanessen of Candice Mostert (sien FLAG in die lêerkop).",
    steps: [
      step("Ayakha se grootste bydrae tot Suid-Afrika:", 1, "Sy bring die gevare van klimaatsverandering onder ons aandag.", ["Sy maak wasgoedsakke van ou lakens vir hotelle.", "Sy gebruik plastiekafval om ekostene te maak.", "Sy gee skoolhemde en skoene aan leerders."]),
      step("'n Praktiese manier om Ayakha te ondersteun:", 2, "Ek sal mense by my skool leer wat die gevolge van klimaatsverandering is.", ["Ek sal haar R1,2 miljoen gee om 'n fabriek te bou.", "Ek sal haar vra om liewer by die huis te bly en nie meer te praat nie.", "Ek sal niks doen nie, want sy het genoeg ondersteuning."]),
    ],
    image_url: TEKS_A,
  },

  // TEKS B: graph (image)

  {
    number: "1", sub_number: "1.16",
    text: "Vir watter oortreding op die pad word die meeste mense gevang?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Dronkbestuur",
    marking_notes: "Memo: dronkbestuur.",
    steps: [step("Meeste mense gevang vir:", 2, "Dronkbestuur", ["Roekelose bestuur", "Voertuie wat onwettig op die pad is", "Voertuie in 'n swak toestand wat nie op die pad mag wees nie"])],
    image_url: TEKS_B,
  },
  {
    number: "1", sub_number: "1.17",
    text: "Hoe word roekelose bestuur visueel in die grafiek voorgestel?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Die motor lyk asof dit op twee wiele om 'n draai ry/skuins van die pad af gly.",
    marking_notes: "Memo: enige EEN van die aanvaarde beskrywings van die motor (twee wiele, vinnig om die draai, skuins/afgly, kantel, ens.).",
    steps: [step("Hoe word roekelose bestuur visueel voorgestel?", 0, "'n Motor wat lyk asof dit op twee wiele om 'n draai ry.", ["'n Bottel en 'n wynglas langs die staaf.", "'n Motor met 'n deurgehaalde sirkel daaroor.", "'n Teerpad met 'n waarskuwingsbord in die agtergrond."])],
    image_url: TEKS_B,
  },
  {
    number: "1", sub_number: "1.18",
    text: "Kies die KORREKTE antwoord om die sin mee te voltooi.\n\n'n Voorbeeld van roekelose bestuur is om ...",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "D — 'n ander voertuig om 'n draai verby te steek.",
    marking_notes: "Memo: D.",
    steps: [step("'n Voorbeeld van roekelose bestuur is om ...", 3, "'n ander voertuig om 'n draai verby te steek.", ["met 'n gesteelde voertuig te ry.", "die motor se toeter te veel te blaas.", "jou bestuuderslisensie by die huis te los."])],
    image_url: TEKS_B,
  },
  {
    number: "1", sub_number: "1.19",
    text: "Hoekom, dink jy, behoort voertuie wat in 'n swak toestand is, nie op paaie toegelaat te word nie?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Hulle is 'n gevaar vir ander bestuurders/die bestuurder self; hulle kan ongelukke veroorsaak.",
    marking_notes: "Memo: enige EEN van ses aanvaarde redes (gevaar, ongelukke, dood, misdaad, besoedeling, ander verkeer in gevaar stel).",
    steps: [step("Hoekom behoort voertuie in 'n swak toestand nie op paaie te wees nie?", 1, "Hulle is 'n gevaar vir ander bestuurders en kan ongelukke veroorsaak.", ["Hulle is nie so mooi soos ander voertuie nie.", "Hulle ry te stadig vir die verkeersmanne om te sien.", "Hulle het nie 'n bestuurderslisensie nie."])],
    image_url: TEKS_B,
  },
  {
    number: "1", sub_number: "1.20",
    text: "Haal EEN woord uit die teks aan om die volgende sin te voltooi.\n\nDit is ... om 'n voertuig te bestuur wat nie gelisensieer is nie.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "onwettig",
    marking_notes: "Memo: onwettig.",
    steps: [step("Dit is ... om 'n voertuig te bestuur wat nie gelisensieer is nie.", 2, "onwettig", ["roekeloos", "dronk", "swak"])],
    image_url: TEKS_B,
  },
  {
    number: "1", sub_number: "1.21",
    text: "Kies die KORREKTE antwoord uit dié tussen hakies.\n\nDie inligting in hierdie grafiek leer ons om (te kyk waar die verkeersmanne die paaie patrolleer/bewus te wees van verkeersreëls).",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "bewus te wees van verkeersreëls",
    marking_notes: "Memo: bewus te wees van verkeersreëls.",
    steps: [step("Die inligting in die grafiek leer ons om ...", 0, "bewus te wees van verkeersreëls", ["te kyk waar die verkeersmanne die paaie patrolleer", "die aantal motors op die pad te tel", "net in 2019 versigtig te ry"])],
    image_url: TEKS_B,
  },

  // ============ AFDELING B: OPSOMMING — VRAAG 2 (10 marks) ============
  // TEKS C (image). Seven facts + 3 language marks, converted to 10 MCQ steps.

  {
    number: "2", sub_number: null,
    text: "Zozibini Tunzi, Mej. Heelal 2019, kom julle skool besoek. Jy moet haar aan die leerders voorstel.\n\nSom die SEWE feite oor Zozi se ONTWIKKELING van geboorte tot internasionale glanspersoon in jou EIE VOLSINNE op (puntsgewys, genommer 1 tot 7, hoogstens 70 woorde, getal woorde aangedui).\n\nIn hierdie keuse-weergawe kies jy by elke stap die korrekte opsommingspunt in chronologiese volgorde (stappe 1–7) en beantwoord dan drie vrae oor opsommingstegniek (stappe 8–10, die taalpunte).",
    marks: 10, topicKey: "summary", cognitiveLevelName: "Reorganisation",
    model_answer: "1. Sy is in 1993 in Tsolo in die Oos-Kaap gebore. 2. Sy het op ses aan haar eerste skoonheidskompetisie deelgeneem. 3. Sy het in 2011 aan Hoërskool Butterworth gematrikuleer. 4. Sy het 'n B.Tech-graad in Skakelwese behaal. 5. In 2015 het sy die Mej. Mamelodi Sundowns-titel gewen. 6. In 2019 is sy as Mej. Suid-Afrika gekroon. 7. Op 8 Desember 2019 is sy as Mej. Heelal gekroon. (Memo-voorbeeld: 63 woorde; die memo aanvaar enige SEWE van agt feite, die agtste is: sy was 'n gas op Trevor Noah se The Daily Show in Amerika.)",
    marking_notes: "Memo: 7 punte vir 7 feite (1 punt elk) + 3 taalpunte (1–3 feite: 1; 4–5 feite: 2; 6–7 feite: 3; minder as dit by woordelikse aanhaling). Feite in chronologiese volgorde, hoogstens 70 woorde. Stappe 1–7 = die sewe feite; stappe 8–10 = aanpassing van die 3 taalpunte (sien lêerkop FLAG).",
    steps: [
      step("Feit 1 (geboorte):", 0, "Sy is in 1993 in Tsolo in die Oos-Kaap gebore.", ["Sy is in 1993 in Mamelodi in Gauteng gebore.", "Sy is in 1991 in Butterworth in die Oos-Kaap gebore.", "Sy het in 'n doodgewone huis met twee susters grootgeword."]),
      step("Feit 2 (kinderjare):", 2, "Op ses jaar het sy aan haar eerste skoonheidskompetisie deelgeneem.", ["Op ses het sy by die skool begin om aan sport deel te neem.", "Op sestien het sy aan haar eerste skoonheidskompetisie deelgeneem.", "Haar ouers het haar ingeskryf omdat sy graag gelees het."]),
      step("Feit 3 (skool):", 1, "Sy het in 2011 aan Hoërskool Butterworth gematrikuleer.", ["Sy het in 2015 aan Hoërskool Butterworth gematrikuleer.", "Sy het in 2011 aan die Kaapse Skiereiland Universiteit van Tegnologie gematrikuleer.", "Sy het as skoolhoof se dogter 'n sportbeurs gekry."]),
      step("Feit 4 (tersiêre opleiding):", 3, "Sy het 'n B.Tech-graad in Skakelwese aan die Kaapse Skiereiland Universiteit van Tegnologie behaal.", ["Sy het 'n B.Tech-graad in Onderwys by die Departement van Hoër Onderwys behaal.", "Sy het 'n matriekdiploma in Skakelwese by Hoërskool Butterworth behaal.", "Sy het in Skakelwese gestudeer maar nooit 'n graad voltooi nie."]),
      step("Feit 5 (2015):", 0, "In 2015 het sy die Mej. Mamelodi Sundowns-titel gewen.", ["In 2015 het sy as Mej. Suid-Afrika gewen.", "In 2019 het sy die Mej. Mamelodi Sundowns-titel gewen.", "In 2015 het sy as Mej. Heelal gewen."]),
      step("Feit 6 (Augustus 2019):", 2, "In Augustus 2019 is sy as Mej. Suid-Afrika gekroon.", ["In Augustus 2019 is sy as Mej. Heelal gekroon.", "In Augustus 2018 is sy as Mej. Suid-Afrika gekroon.", "In Augustus 2019 het sy haar stereotipes oor skoonheid in 'n boek beskryf."]),
      step("Feit 7 (Desember 2019):", 1, "Op 8 Desember 2019 is sy as Mej. Heelal gekroon.", ["Op 8 Desember 2019 is sy as Mej. Suid-Afrika gekroon.", "Op 8 Desember 2018 is sy as Mej. Heelal gekroon.", "Op 8 Desember 2019 het Margaret Gardiner haar as Mej. Heelal opgevolg."]),
      step("Taal 1: Watter weergawe van feit 1 is in jou EIE WOORDE (nie woordeliks uit die teks gekopieer nie)?", 3, "Sy is in Tsolo in die Oos-Kaap gebore (18 September 1993).", ["Zozibini Tunzi is op 18 September 1993 in Tsolo in die Oos-Kaap gebore.", "Zozibini Tunzi is op 18 September 1993 in Tsolo gebore. Sy het in 'n doodgewone huis grootgeword.", "Sy is gebore, in 'n doodgewone huis grootgeword en het twee susters."]),
      step("Taal 2: Watter volgorde van die feite is korrek chronologies?", 1, "Geboorte, eerste kompetisie op ses, matriek, B.Tech-graad, Mamelodi Sundowns, Mej. Suid-Afrika, Mej. Heelal", ["Geboorte, matriek, eerste kompetisie op ses, Mej. Suid-Afrika, B.Tech-graad, Mamelodi Sundowns, Mej. Heelal", "Mej. Heelal, Mej. Suid-Afrika, Mamelodi Sundowns, B.Tech-graad, matriek, eerste kompetisie, geboorte", "Geboorte, B.Tech-graad, matriek, Mamelodi Sundowns, eerste kompetisie op ses, Mej. Heelal, Mej. Suid-Afrika"]),
      step("Taal 3: Hoe moet die opsomming aangebied word?", 2, "Puntsgewys, in eie volsinne, genommer 1 tot 7, hoogstens 70 woorde, met die getal woorde aan die einde aangedui.", ["As 'n lang paragraaf sonder nommers, so lank as nodig, sonder 'n woordtelling.", "Puntsgewys, maar woordeliks uit die teks gekopieer, hoogstens 100 woorde.", "Puntsgewys, met slegs sleutelwoorde (geen volsinne) en 'n minimum van 70 woorde."]),
    ],
    image_url: TEKS_C,
  },

  // ============ AFDELING C: TAAL — VRAAG 3: ADVERTENSIE (10 marks) ============
  // TEKS D (image)

  {
    number: "3", sub_number: "3.1",
    text: "Watter TEGNIEK gebruik die adverteerder om die leser se aandag op die opskrif te vestig?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Die adverteerder gebruik 'n groter font/vetdruk/hoofletters/uitroepteken, begin met 'n bevel (KYK HIER) of spreek die leser direk aan.",
    marking_notes: "Memo: enige EEN van die aanvaarde tegnieke (groter font, vetdruk, hoofletters, uitroepteken, bevel/KYK HIER, direkte aanspreking, assonansie).",
    steps: [step("Tegniek om aandag op die opskrif te vestig:", 0, "Hy gebruik 'n groter lettertipe en hoofletters.", ["Hy plaas die opskrif in kleiner, ligter letters as die res van die teks.", "Hy gebruik 'n vraag wat die leser moet beantwoord.", "Hy plaas 'n prent van kinders langs die opskrif."])],
    image_url: TEKS_D,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Wat word bedoel met \"goue oue\"? Jy moet na albei woorde in jou antwoord verwys.",
    marks: 2, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "\"goue\" beteken hier waardevol/kosbaar/duur/mooi; die \"oue\" verwys na die (veteraan-/antieke) motor.",
    marking_notes: "Memo: 1 punt vir \"goue\" (waardevol/duur/mooi/gesog/kosbaar ... — goud verwys nie na 'n kleur nie); 1 punt vir \"oue\" (die veteraan-/antieke/ouderwetse motor).",
    steps: [
      step("Wat beteken \"goue\" hier?", 2, "waardevol/kosbaar", ["geel van kleur", "goedkoop", "gebreek"]),
      step("Waarna verwys \"oue\"?", 1, "die antieke/ouderwetse motor", ["die oumense wat na die veiling kom", "die eienaar van die motor", "die nuwe, moderne motor"]),
    ],
    image_url: TEKS_D,
  },
  {
    number: "3", sub_number: "3.3",
    text: "Die sin hieronder is 'n voorbeeld van KONNOTASIE. Verduidelik wat die onderstreepte woorde beteken.\n\n\"Vandag skud ons ons sak vir liefdadigheid.\" (onderstreep: skud ons ons sak)",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Vandag gee ons geld uit/skenk ons geld/gee ons 'n donasie.",
    marking_notes: "Memo: enige EEN of soortgelyk (ook sonder verwysing na geld, bv. vandag ondersteun ons liefdadigheid).",
    steps: [step("\"skud ons ons sak\" beteken:", 3, "ons skenk geld / gee 'n donasie", ["ons skud stof uit ons sakke uit", "ons soek ons verlore geld", "ons verkoop ons besittings"])],
    image_url: TEKS_D,
  },
  {
    number: "3", sub_number: "3.4",
    text: "Gee die INTENSIEWE VORM van die woord tussen hakies.\n\nOns het jou ondersteuning (nodig)!",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "broodnodig / hoognodig",
    marking_notes: "Memo: broodnodig/hoognodig (spelling: EEN woord).",
    steps: [step("Intensiewe vorm van \"nodig\":", 1, "broodnodig", ["nodiger", "baie nodiger", "nodigste"])],
    image_url: TEKS_D,
  },
  {
    number: "3", sub_number: "3.5",
    text: "Gee die OORTREFFENDE TRAP van die woord tussen hakies.\n\nAlmal sal jou bewonder as jy hierdie heel (gewild) motor op die veiling koop.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "gewildste",
    marking_notes: "Memo: gewildste (spelling tel).",
    steps: [step("Oortreffende trap van \"gewild\":", 2, "gewildste", ["gewilder", "meer gewild", "mees gewildste"])],
    image_url: TEKS_D,
  },
  {
    number: "3", sub_number: "3.6",
    text: "Verduidelik die FUNKSIE van die stippels in die volgende sin.\n\nDink net daaraan …",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Die stippels laat die leser self sy/haar gedagtes voltooi/laat ruimte vir moontlikhede/stem tot nadenke.",
    marking_notes: "Memo: enige EEN of soortgelyk.",
    steps: [step("Funksie van die stippels:", 0, "Hulle laat die leser self die gedagte in sy kop voltooi.", ["Hulle dui aan dat 'n aanhaling woorde weggelaat het.", "Hulle wys dat die sin onvolledig en foutief is.", "Hulle skei twee opsommings van mekaar."])],
    image_url: TEKS_D,
  },
  {
    number: "3", sub_number: "3.7",
    text: "Sê waarom die woord \"reuseverskil\" groter as die res van die teks gedruk is.",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Dit stel die groot verskil visueel voor/om groter impak te maak/om te beklemtoon hoe groot die verskil is wat jy kan maak.",
    marking_notes: "Memo: enige EEN of soortgelyk.",
    steps: [step("Waarom is \"reuseverskil\" groter gedruk?", 1, "Om die groot verskil wat die leser kan maak, te beklemtoon.", ["Omdat dit die naam van die motor is.", "Omdat dit die prys van die motor aandui.", "Om die datum van die veiling uit te lig."])],
    image_url: TEKS_D,
  },
  {
    number: "3", sub_number: "3.8",
    text: "Noem TWEE maniere waarop hierdie advertensie die leser manipuleer om aan die veiling deel te neem.",
    marks: 2, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "Die adverteerder laat die leser voel dat hy/sy belangrik is/bewonder gaan word/kinders kan help; 'n spoggerige motor word vertoon; emotiewe woorde (\"Maar sonder jou\", \"Jy en jy alleen\"); praat direk met die leser (\"jy\" en \"jou\").",
    marking_notes: "Memo: enige TWEE verskillende maniere. Twee 1-punt-stappe.",
    steps: [
      step("Eerste manier van manipulasie:", 2, "Die leser word laat voel hy/sy is belangrik en gaan bewonder word.", ["Die leser word met boetes gedreig as hy nie kom nie.", "Elke bieër kry 'n gratis motor.", "Die pryse van al die motors word gelys."]),
      step("Tweede manier van manipulasie:", 0, "Die adverteerder spreek die leser direk aan met \"jy\" en \"jou\".", ["Die adverteerder gebruik net derdepersoon-voornaamwoorde.", "Die adverteerder gebruik vaktaal wat net kenners verstaan.", "Die adverteerder bespot die motor met humor."]),
    ],
    image_url: TEKS_D,
  },

  // ============ VRAAG 4: STROKIESPRENT (10 marks) ============
  // TEKS E (image)

  {
    number: "4", sub_number: "4.1",
    text: "Kies die KORREKTE woord uit dié tussen hakies.\n\nWat is (nies/nuus)?",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "nuus",
    marking_notes: "Memo: nuus.",
    steps: [step("Wat is ...?", 1, "nuus", ["nies", "nuuz", "nius"])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Waar kry Zandi die inligting wat sy met Mavis in Raampie 1 deel? Lei jou antwoord uit die strokiesprent af.",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Sy kry/lees dit in die koerant/dagblad/tydskrif/nuusblad.",
    marking_notes: "Memo: enige EEN.",
    steps: [step("Zandi kry die inligting ...", 0, "in die koerant wat sy lees.", ["van die radio wat sy luister.", "van Mavis, wat dit vir haar vertel het.", "op sosiale media op haar foon."])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.3",
    text: "Skryf die onderstaande sin oor sodat dit KORREK is.\n\n\"Sallie gebeur nie.\"\n\nBegin jou sin só: Dit ...",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Dit sal nie gebeur nie.",
    marking_notes: "Memo: Dit sal nie gebeur nie. / ... sal nie gebeur nie. / Dit sal nie so gebeur nie.",
    steps: [step("Korrekte sin:", 2, "Dit sal nie gebeur nie.", ["Dit sal gebeur nie.", "Dit sal nie gebeur.", "Dit salie gebeur nie."])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "Kyk na RAAMPIE 2.\n\nKies die KORREKTE woord tussen hakies.\n\nAs Zandi \"HUH\" sê, beteken dit dat sy (doof/onbeskof) is.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Inference",
    model_answer: "onbeskof",
    marking_notes: "Memo: onbeskof.",
    steps: [step("As Zandi \"HUH\" sê, is sy ...", 1, "onbeskof", ["doof", "blind", "skaam"])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Gee EEN WOORD wat meer aanvaarbaar as \"HUH\" is.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Evaluation",
    model_answer: "Ekskuus / Askies / Regtig / Jammer / Wat / Herhaal / Pardon",
    marking_notes: "Memo: enige EEN (leestekens en foutiewe spelling aanvaar, solank dit nie Engels is nie).",
    steps: [step("Meer aanvaarbaar as \"HUH\":", 0, "Ekskuus?", ["Haai!", "Ja-nee", "Siestog"])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.5",
    text: "Waarom sê ons Mavis se woorde in RAAMPIE 3 is net 'n aanname?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "Mavis kan nie bewys wat sy sê nie; dit is haar opinie, gebaseer op wat sy sien.",
    marking_notes: "Memo: enige EEN (bewys wat die kandidaat weet 'n aanname bloot 'n mening is, nie 'n feit nie).",
    steps: [step("Waarom is dit net 'n aanname?", 3, "Sy kan dit nie bewys nie; dit is haar mening gebaseer op wat sy sien.", ["Sy lees dit in die koerant.", "Sy is self 'n verkeersbeampte wat dit weet.", "Sy gee statistiek oor motorongelukke."])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.6",
    text: "Kyk na RAAMPIE 3.\n\nHoe weet ons dat Mavis en Zandi in die agterste motor is?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Die spraakborrel wys na die agterste motor; ons sien Mavis se hoed en ore in die agterste motor.",
    marking_notes: "Memo: enige EEN of soortgelyk.",
    steps: [step("Hoe weet ons hulle is in die agterste motor?", 2, "Die spraakborrel wys na die agterste motor.", ["Die naamkaartjies MAVIS en ZANDI is by die agterste motor geplaas.", "Die agterste motor is die enigste een wat op die pad is.", "Die agterste motor is die grootste en vinnigste een."])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.7",
    text: "Hoe ondersteun die prent in RAAMPIE 3 Mavis se woorde in dieselfde raampie?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Dit toon baie motors is gestamp/daar is (byna) geen motors sonder stampe nie/'n botsing vind plaas.",
    marking_notes: "Memo: enige EEN of soortgelyk.",
    steps: [step("Hoe ondersteun die prent haar woorde?", 1, "Dit wys 'n botsing en motors vol stampe.", ["Dit wys 'n polisiemotor met plakkers.", "Dit wys 'n padblokkade met verkeersmanne.", "Dit wys motors sonder nommerplate."])],
    image_url: TEKS_E,
  },
  {
    number: "4", sub_number: "4.8",
    text: "Kyk na RAAMPIE 1 en RAAMPIE 3.\n\nHoe VERSKIL Zandi se idee van 'ongemerkte' motors van Mavis se idee daarvan?",
    marks: 2, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Zandi: 'n ongemerkte motor het geen kenteken/plakkers wat dit as 'n verkeerspolisiemotor uitken nie. Mavis: 'n ongemerkte motor is een sonder duike/stampmerke; sy sê almal het merke en duike.",
    marking_notes: "Memo: 1 punt vir Zandi se betekenis, 1 punt vir Mavis se betekenis. Twee 1-punt-stappe.",
    steps: [
      step("Wat bedoel Zandi met 'n ongemerkte motor?", 3, "'n Motor sonder plakkers of tekens wat wys dat dit 'n verkeerspolisiemotor is.", ["'n Motor sonder duike en krapmerke.", "'n Motor wat nie 'n lisensie het nie.", "'n Motor sonder bestuurder."]),
      step("Wat bedoel Mavis met 'n ongemerkte motor?", 1, "'n Motor sonder duike of krapmerke (volgens haar bestaan so 'n motor nie).", ["'n Motor sonder plakkers wat dit as 'n polisiemotor uitken.", "'n Motor sonder bestuurder.", "'n Motor wat nie in 'n ongeluk kan raak nie."]),
    ],
    image_url: TEKS_E,
  },

  // ============ VRAAG 5: ARTIKEL EN PRENT (20 marks) ============
  // 5.1 TEKS F (image); 5.2 TEKS G (image)

  {
    number: "5", sub_number: "5.1.1",
    text: "Skryf die GETAL tussen hakies as 'n woord.\n\nAmmiël Smith is (27) jaar oud.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "sewe en twintig / sewe-en-twintig",
    marking_notes: "Memo: enige EEN; spelling moet korrek wees (telwoord).",
    steps: [step("27 as woord:", 0, "sewe en twintig", ["sewentwintig", "twintig en sewe", "sewetwintig"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Gee die ANTONIEM vir die woord tussen hakies.\n\nHy hou daarvan om (gewone) dinge te doen, soos om saam met haaie te duik.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "ongewone / buitengewone / vreemde / rare / ...",
    marking_notes: "Memo: enige EEN of soortgelyk binne die konteks.",
    steps: [step("Antoniem van \"gewone\":", 2, "ongewone", ["gewoonste", "gewoner", "alledaagse"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Verbind die sinne met die VOEGWOORD tussen hakies. Begin met die voegwoord.\n\nAmmiël het studeer. Hy het as bemarker gewerk. (nadat)",
    marks: 2, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Nadat Ammiël studeer het, het hy as ('n) bemarker gewerk.",
    marking_notes: "Memo: 1 punt vir die leesteken op die regte plek, 1 punt vir die korrekte woordorde (gemodelleer as twee stappe, sien lêerkop).",
    steps: [
      step("Watter sin het die korrekte woordorde?", 1, "Nadat Ammiël studeer het, het hy as bemarker gewerk.", ["Nadat Ammiël het studeer, het hy as bemarker gewerk.", "Nadat Ammiël studeer het, hy het as bemarker gewerk.", "Nadat het Ammiël studeer, hy het as bemarker gewerk."]),
      step("Watter sin het die leesteken op die regte plek?", 3, "Nadat Ammiël studeer het, het hy as bemarker gewerk.", ["Nadat Ammiël studeer het het hy as bemarker gewerk.", "Nadat, Ammiël studeer het het hy as bemarker gewerk.", "Nadat Ammiël studeer het het, hy as bemarker gewerk."]),
    ],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Gee die MEERVOUD van die woord tussen hakies.\n\nIn 2016 het hy drie (week) lank in 'n weeshuis in Indië gaan werk.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "weke",
    marking_notes: "Memo: weke (spelling tel).",
    steps: [step("Meervoud van \"week\":", 0, "weke", ["weeke", "weeks", "weekte"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.5",
    text: "Skryf die sin hieronder in die VERLEDE TYD.\n\nDit verander sy lewe.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Dit het sy lewe verander.",
    marking_notes: "Memo: Dit het sy lewe verander.",
    steps: [step("Verlede tyd:", 2, "Dit het sy lewe verander.", ["Dit het sy lewe geverander.", "Dit het verander sy lewe.", "Dit was sy lewe verander."])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.6",
    text: "Gee die KORREKTE vorm van die woord tussen hakies.\n\nHy wou 'n (positief) verskil in kinders se lewens maak.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "positiewe",
    marking_notes: "Memo: positiewe (spelling tel).",
    steps: [step("Korrekte vorm van \"positief\":", 1, "positiewe", ["positief", "positiefe", "positiewer"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.7",
    text: "Skryf die hele sin oor in die INFINITIEF.\n\nHy het besluit (onderwyser word).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Hy het besluit om ('n) onderwyser te word.",
    marking_notes: "Memo: Hy het besluit om ('n) onderwyser te word.",
    steps: [step("Infinitief:", 3, "Hy het besluit om onderwyser te word.", ["Hy het besluit om onderwyser te wees.", "Hy het besluit om onderwyser word.", "Hy het besluit onderwyser om te word."])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.8",
    text: "Kies die KORREKTE woord uit dié tussen hakies.\n\nAmmiël is die (vorige/afgelope) paar jaar 'n onderwyser by Laerskool Vryburg.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "afgelope",
    marking_notes: "Memo: afgelope (oorskryffout aanvaar).",
    steps: [step("Die ... paar jaar:", 2, "afgelope", ["vorige", "verlede", "voorafgaande"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.9",
    text: "Wat beteken die onderstreepte VOORVOEGSEL in die woord hieronder?\n\n... superfiks ... (onderstreep: super)",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "baie / buitengewoon / uiters / uitsonderlik / besonders / ekstra ...",
    marking_notes: "Memo: enige EEN of soortgelyk; ook omskrywing van die begrip aanvaar.",
    steps: [step("Die voorvoegsel \"super\" beteken:", 1, "baie / uiters", ["half / effens", "teen / nie", "bo-op / bo"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.10",
    text: "Vul die ontbrekende VOORSETSEL in.\n\nHy weet die kinders hou ... dans.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "van",
    marking_notes: "Memo: van.",
    steps: [step("Die kinders hou ... dans:", 0, "van", ["vir", "aan", "met"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.11",
    text: "Vorm 'n TEENWOORDIGE DEELWOORD van die werkwoord tussen hakies.\n\nDaar het onlangs 'n video van hom en 'n groep (dans) kinders op sosiale media beland.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "dansende",
    marking_notes: "Memo: dansende (spelling tel).",
    steps: [step("Teenwoordige deelwoord van \"dans\":", 3, "dansende", ["gedanste", "dansde", "dansend"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.12",
    text: "Gebruik die HOMONIEM van \"maat\" in 'n sin sodat die betekenis duidelik blyk.\n\n(In hierdie keuse-weergawe: kies die sin waarin \"maat\" 'n ANDER betekenis het as in die artikel, waar dit \"ritme/tempo van die musiek\" beteken: \"op die maat van DJ Cleo se musiek\".)",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Bv. My maat help my baie. / Ek en my maat kuier altyd saam. (maat = vriend); of: vars vrugte in groot maat aankoop (maat = hoeveelheid).",
    marking_notes: "Memo: enige aanvaarbare sin waar die betekenis van \"maat\" duidelik is (vier voorbeelde in die memo). Aangepas na 'n kies-die-sin-vorm (sien FLAG).",
    steps: [step("Sin met \"maat\" in 'n ander betekenis:", 0, "My maat help my baie.", ["Die dansers volg die maat van die musiek.", "Die orkes het die maat verloor.", "Die kinders dans op die maat van die trom."])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.1.13",
    text: "Gee die KORREKTE AFRIKAANS vir die woord tussen hakies.\n\nAmmiël sê hulle het (special) gevoel toe hulle hulleself op TV kon sien.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "spesiaal",
    marking_notes: "Memo: spesiaal (foutiewe spelling soos \"spesial\" aanvaar, maar nie \"speciaal\" nie).",
    steps: [step("Afrikaans vir \"special\":", 1, "spesiaal", ["speciaal", "special", "spessiaal"])],
    image_url: TEKS_F,
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Kies die KORREKTE woord uit dié tussen hakies.\n\nMa en Ouma het nie dieselfde (haarstyl/haarsteil) nie.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "haarstyl",
    marking_notes: "Memo: haarstyl.",
    steps: [step("Korrekte woord:", 2, "haarstyl", ["haarsteil", "haarstijl", "haarstil"])],
    image_url: TEKS_G,
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Gee EEN WOORD vir die woorde tussen hakies.\n\nDie hele (pa, ma, oupa, ouma en kinders) het inkopies gedoen.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "familie / gesin",
    marking_notes: "Memo: familie of gesin. Slegs \"gesin\" word as korrekte opsie gebied (sien FLAG).",
    steps: [step("Een woord vir pa, ma, oupa, ouma en kinders:", 1, "gesin", ["span", "klas", "kudde"])],
    image_url: TEKS_G,
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Gee die VERKLEINWOORD van die woord tussen hakies.\n\nDie stoel se een (wiel) staan skeef.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "wieletjie",
    marking_notes: "Memo: wieletjie (spelling tel).",
    steps: [step("Verkleinwoord van \"wiel\":", 3, "wieletjie", ["wieltjie", "wielkie", "wielletjie"])],
    image_url: TEKS_G,
  },
  {
    number: "5", sub_number: "5.2.4",
    text: "Gee 'n SINONIEM vir die woord tussen hakies.\n\nDie seuntjie dra 'n toegedraaide (present).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "geskenk",
    marking_notes: "Memo: geskenk.",
    steps: [step("Sinoniem van \"present\":", 0, "geskenk", ["kaartjie", "speelding", "blommetjie"])],
    image_url: TEKS_G,
  },
  {
    number: "5", sub_number: "5.2.5",
    text: "Vul die ONTBREKENDE WOORD in die onderstaande sin in.\n\nDie persoon by wie hulle betaal, noem ons 'n ...",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "kassier(e) / teller",
    marking_notes: "Memo: kassier(e)/teller (spelling tel nie, tensy dit die betekenis verander).",
    steps: [step("Die persoon by wie jy betaal, is 'n ...", 2, "kassier", ["verkoper", "bestuurder", "kliënt"])],
    image_url: TEKS_G,
  },
  {
    number: "5", sub_number: "5.2.6",
    text: "Skryf die hele sin oor in die ONTKENNING deur die onderstreepte woord te verander.\n\nOupa het iets gekoop. (onderstreep: iets)",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Oupa het niks gekoop nie.",
    marking_notes: "Memo: Oupa het niks gekoop nie.",
    steps: [step("Ontkenning:", 1, "Oupa het niks gekoop nie.", ["Oupa het niks gekoop.", "Oupa het nie iets gekoop nie.", "Oupa het geen gekoop nie."])],
    image_url: TEKS_G,
  },
];
