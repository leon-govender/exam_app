// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language) Paper 1 (Taal / Language), November 2023, National Senior
// Certificate (NSS). The paper is written in Afrikaans; question text, step
// descriptions, options and model answers are kept in Afrikaans.
// Source: official DBE question paper + official DBE "Nasienriglyne"
// (marking guideline), combined into one 29-page PDF mirrored on
// stanmorephysics.com (source_url below). Question paper = pages 1-16
// (cover p.1 shows PUNTE: 80, TYD: 2 uur; instructions p.2); marking
// guideline = pages 17-29 (title page p.17, general memo notes p.18, memo
// Section A pp.18-23, Section B pp.24-25, Section C pp.26-29). The DBE crest
// / "Kopiereg voorbehou" / "NASIENRIGLYNE" are present, so this is the
// genuine DBE memo and not a third-party study-guide memo. The PDF text layer
// was read in full, and the visual texts were checked as page renders.
//
// Paper structure (80 marks, 2 hours; no choice sections, all ingested):
//   AFDELING A: Leesbegrip (30)  - VRAAG 1: TEKS A article "Suid-Afrikaners
//     se smulkos" (1.1-1.19 = 19 marks, 1.16 is a 5-mark matching item) +
//     TEKS B TV-gids (1.20-1.25 = 6 marks)  => 30
//   AFDELING B: Opsomming (10)   - VRAAG 2: TEKS C "Vreemde feite oor
//     selfone", 7 facts (7 marks) + 3 language marks => 10
//   AFDELING C: Taalstrukture en -konvensies (40)
//     VRAAG 3: TEKS D advertisement (UNIEK T-shirt)            10
//     VRAAG 4: TEKS E cartoon (Boet, Jan en Brak, 4 frames)    10
//     VRAAG 5: TEKS F article (Ndlovu Jeugkoor, 5.1 = 14) and
//              TEKS G picture (5.2 = 6)                         20
//   GRAND TOTAL 80 (confirmed against the paper's own section totals and
//   the memo's own "TOTAAL AFDELING" lines).
//
// Grading mode: EVERY question uses the stepped-MCQ pattern (`steps`), per
// the standing all-multiple-choice preference. NO `marking_points` are used
// anywhere, so there is nothing that needs free-text keyword grading.
// - One step per mark-earning point; 4 options per step; the correct option
//   is the memo answer (where the memo lists several acceptable answers, ONE
//   of them is used as the correct option and none of the others appears as
//   a distractor). Distractors are realistic Grade 12 errors (a plausible
//   but unsupported claim, a wrong word form, a misread detail).
// - Single-word/term answers (1.1-1.3, 1.11, 1.12, 3.8 ...) became a
//   "choose the correct word" step. Grammar transformation items (3.1, 3.2,
//   4.1, 4.4, 5.1.x, 5.2.x) became a "choose the correctly formed word or
//   sentence" step, with the wrong options being typical learner errors
//   (spelling, wrong affix, wrong word order, wrong tense form).
// - Questions with a memo of several accepted answers ("Enige EEN of
//   soortgelyk") offer ONE memo-accepted answer among three false/
//   unsupported alternatives.
// - Memo rule: for the "motiveer jou antwoord" pairs (1.15.1+1.15.2,
//   4.3.1+4.3.2) the second mark needs the first answer to be correct; each
//   is a separate question in this file as in the paper.
// - 1.16 (matching, 5 x 1): five separate 1-mark sub-questions 1.16.1-1.16.5,
//   each asking for the Column B description that fits the dish; the three
//   wrong options are other Column B descriptions.
// - 1.18 (agree/disagree + motivation): the memo gives no mark for Ja/Nee
//   itself, only for the reason. Converted to ONE step offering the memo's
//   "Ja." answer with one accepted reason; wrong options are unsupported
//   reasons. FLAG: the memo also accepts "Nee." with its own reasons; a
//   student who disagrees cannot express that in this MCQ form.
//
// Summary (VRAAG 2, 10 marks) - HOW IT WAS CONVERTED: the paper asks for
// seven facts in the learner's own words (70 words max). The memo awards 7
// marks (1 per fact, fact list on memo p.25) + 3 language marks (own words
// vs direct quotation; see memo p.24 scale). As MCQ steps: steps 1-7 (1 mark
// each) ask the learner to choose the statement that correctly states each of
// the seven memo facts (distractors alter the figure, place or subject);
// steps 8-10 (1 mark each) are the language marks, reformulated as: (8) which
// version is in own words rather than a direct quotation, (9) the correct
// format of the summary (numbered points, own full sentences, 7 facts, max
// 70 words, word count at the end) and (10) another own-words-vs-quotation
// choice. FLAG: these three language-mark steps are a faithful-in-spirit
// reformulation by this ingest, not memo text: the real memo awards the 3
// language marks on a 1-3 scale from the number of correct facts and from how
// many of them are direct quotations. The memo's note that no marks are
// deducted for a wrong or missing word count was kept in marking_notes.
//
// Visual texts / passages: this paper is read on screen without the printed
// booklet, so all texts were rendered from the source PDF, cropped to the
// text only, and saved under public/question-images/afrikaans-fal-2023-p1/
// as the image_url of the FIRST sub-question of each text (the exam page
// groups all sub-questions of one VRAAG together, so the image shows above
// the first sub-question and stays on screen):
//   teks-a.png  TEKS A article (pp.3-4 stitched into one image, incl. the
//               paragraph numbers and 5-line numbering the questions use)
//   teks-b.png  TEKS B TV-gids (p.7; includes the symbol key and the small
//               pictures used by 1.20-1.23)
//   teks-c.png  TEKS C (p.9, the summary text)
//   teks-d.png  TEKS D advertisement (p.10, T-shirt with numbered gaps)
//   teks-e.png  TEKS E cartoon (p.12, four frames)
//   teks-f.png  TEKS F article (p.14, with the numbered gaps 5.1.1-5.1.13)
//   teks-g.png  TEKS G picture (p.16, children in a room)
// The images carry the third-party "Downloaded from Stanmorephysics.com"
// watermark of the mirrored PDF only as far as it overlays the crop; the
// content is the DBE paper's own.
//
// Cognitive levels: the memo does NOT label questions with Barrett-taxonomy
// levels for this paper. FLAG: levels were assigned by this ingest from the
// nature of the question: Literal = retrieval of a stated fact or direct
// grammar form; Reorganisation = comparing/combining information
// (e.g. 1.10) and transformation tasks (indirect speech, tense, negation,
// word order, summary); Inference = what the text/picture implies
// (figurative meaning, purpose, visual reasoning); Evaluation = judging
// effectiveness or giving an opinion (1.18, 1.24, 1.25, 3.7, 3.9.x).
//
// Topic mapping: Q1.1-1.19 -> comprehension; Q1.20-1.25 (TV guide) ->
// visual-literacy; Q2 -> summary; Q3: 3.1/3.2 -> language-structures, the
// rest -> visual-literacy; Q4: 4.1/4.4 -> language-structures, the rest ->
// visual-literacy; Q5 -> language-structures.
//
// Other FLAGs (transcribed faithfully from the memo, not "fixed"):
// - 1.4 memo ("Motiveer waarom ... ONWAAR"): the TRUE/FALSE word itself earns
//   no mark; only the reason does, so a single reason step is used.
// - 1.22 / 1.23: the question paper refers to small pictures in the TV guide
//   (the man with his head in his hands beside "Kies die lewe"; the two
//   silhouettes with microphones beside "Stand Up South Africa"). The text
//   layer lost these pictures; they are in teks-b.png. The picture beside
//   "Stand Up South Africa" is identified for 1.23 from the memo ("daar is
//   mikrofone ... sangkompetisie").
// - 1.20: the "ster" symbol (printed as a small star beside "Fiela se Kind")
//   is described in words in the question text.
// - 3.4 memo bullet 3 and 3.9.2 etc. are accepted answers; only one used.
// - 3.5 memo accepts many techniques; one (capitals/bold) is the correct
//   option, the wrong options do not give the word more emphasis.
// - 4.7 (2 marks): memo says "1 punt vir net een kant van die ironie",
//   so two 1-mark steps (the positive thought in RAAMPIE 3, the negative
//   hope in RAAMPIE 4).
// - 5.1.4 (2 marks): memo says 1 mark for word order (the two verbs move)
//   and 1 mark for the comma between the two clauses: two 1-mark steps.
// - 5.1.3 memo accepts "eerste/enigste"; "eerste" used. 5.1.12 memo accepts
//   any sentence where "van" does NOT mean "to take note of"; the correct
//   option uses "My van is Ndlovu."
// - 5.2.2 memo accepts three positions of "op die bed"; one used.
// - 5.2.4 memo accepts "nie ... nie" or "nooit"; the "nie altyd ... nie"
//   version used.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/afrikaans-fal-2023-p1";

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
  year: 2023,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 120,
  total_marks: 80,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2024/04/NSC-Afrikaans-FAL-Grade-12-November-2023-P1-and-Memo.pdf" as string | null,
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

/** One mark-earning MCQ step. */
function st(description: string, options: string[], correctIndex: number, marks = 1): MarkingPointStep {
  return { marks, description, options, correctIndex };
}

export const questions: QuestionSeed[] = [
  // ============ AFDELING A: LEESBEGRIP — VRAAG 1 (30 marks) ============
  // TEKS A: artikel "Suid-Afrikaners se smulkos" (image: teks-a.png)

  {
    number: "1", sub_number: "1.1",
    text: "Lees TEKS A (die artikel hierbo) en beantwoord die vrae. Noem EEN voorbeeld van Suid-Afrikaners se smulkos, soos dit in die subtitel van hierdie artikel gegee word.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    image_url: `${IMG}/teks-a.png`,
    model_answer: "amasi (of frikkadelle / malvapoeding / walkie talkies).",
    marking_notes: "Memo: enige EEN van amasi, frikkadelle, malvapoeding, walkie talkies. Only one memo answer is offered; the distractors are dishes from the article body, not the subtitle.",
    steps: [
      st("Watter een staan in die subtitel van die artikel?", ["bobotie", "biltong", "amasi", "potjiekos"], 2),
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Watter organisasie het onlangs 'n ondersoek gedoen om uit te vind watter kosse eie aan Suid-Afrika is?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "LekkeSlaap",
    marking_notes: "Memo: LekkeSlaap.",
    steps: [
      st("Watter organisasie het die ondersoek gedoen?", ["Vrouekeur", "Die Departement van Toerisme", "SABC 2", "LekkeSlaap"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Skryf EEN woord uit paragraaf 1 neer wat dieselfde beteken as ''eie'' aan Suid-Afrika (paragraaf 2).",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "inheems",
    marking_notes: "Memo: ''inheems'' (nie penaliseer as die woord nie tussen aanhalingstekens is nie).",
    steps: [
      st("Watter woord uit paragraaf 1 beteken dieselfde as ''eie'' aan Suid-Afrika?", ["ryk", "inheems", "koskultuur", "eetgoed"], 1),
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Die gatsby is 'n gereg wat uit Engeland kom. Motiveer waarom hierdie stelling ONWAAR is.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Die gatsby het op die Kaapse Vlakte ontstaan / kom uit die Wes-Kaap / Kaap / Suid-Afrika.",
    marking_notes: "Memo: enige EEN: het op die Kaapse Vlakte ontstaan; kom uit die Wes-Kaap/Kaap/Suid-Afrika; of die aanhaling ''As jy egter dié Wes-Kaapse eetding wil geniet ...''. Geen punt vir ONWAAR self nie; die rede verdien die punt.",
    steps: [
      st("Watter rede wys dat die stelling ONWAAR is?", ["Die gatsby het in die 1940's in KwaZulu-Natal ontstaan.", "Die gatsby het op die Kaapse Vlakte ontstaan.", "Die gatsby is deur Nederlanders na die Kaap gebring.", "Die gatsby het in die 1970's in Gauteng se township-slaghuise ontstaan."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Wat kan jy in die plek van Russiese wors gebruik as jy 'n gatsby wil maak?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "polonie",
    marking_notes: "Memo: polonie.",
    steps: [
      st("Wat kan jy in die plek van Russiese wors gebruik?", ["bobotie", "polonie", "mogudu", "biltong"], 1),
    ],
  },
  {
    number: "1", sub_number: "1.6",
    text: "Waarom is 'n gatsby waarde vir jou geld?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Dit is vullend / dit maak jou gou vol.",
    marking_notes: "Memo: enige EEN: vullend; verskillende vulsels in een broodjie; goedkoop/meer as een persoon kan eet; 'n lang brood. Only 'dit is vullend' is offered as correct.",
    steps: [
      st("Waarom is 'n gatsby waarde vir jou geld?", ["Dit is 'n duur ete wat net toeriste kan bekostig.", "Dit word net in restaurante met 'n mes en 'n vurk bedien.", "Dit is baie vullend; dit maak jou gou vol.", "Dit bevat drie keer meer proteïene as beesvleis."], 2),
    ],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Waar het die Natalse werkers gewerk wat jare gelede met die bunny chow begin het?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "(Op/In die) suikerrietplantasies.",
    marking_notes: "Memo: (Op/In die) suikerrietplantasies.",
    steps: [
      st("Waar het hierdie werkers gewerk?", ["In Gauteng se township-slaghuise", "Op die suikerrietplantasies", "In Durban se restaurante", "Op die Kaapse Vlakte"], 1),
    ],
  },
  {
    number: "1", sub_number: "1.8",
    text: "In KwaZulu-Natal kraai die bunny chow koning. (Paragraaf 4) Sê hoe die woorde ''kraai ... koning'' hier figuurlik bedoel word.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Dit is die gereg waarvoor KwaZulu-Natal regtig bekend is / die gewildste gereg in KwaZulu-Natal.",
    marking_notes: "Memo: enige EEN: gereg waarvoor KZN bekend is; gewildste/populêr/gunsteling; oral beskikbaar; baie mense koop dit. Question paper shows the words in bold (the bold marking did not survive text extraction; ''kraai ... koning'' per the quoted sentence).",
    steps: [
      st("Hoe word die woorde figuurlik bedoel?", ["Die gereg word deur 'n koning in KwaZulu-Natal geëet.", "Die gereg is die gewildste gereg in KwaZulu-Natal.", "Die gereg word elke môre met die haan se gekraai bedien.", "Die gereg is net vir ryk mense bedoel."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.9",
    text: "''Shisanyama het hierdie braai-ding 'n bietjie verder gevoer.'' (Paragraaf 5) Kies die KORREKTE antwoord. Die mense het met shisanyama begin omdat hulle ...",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "meer vleis wou verkoop",
    marking_notes: "Memo: meer vleis wou verkoop. (The paper gave two options in brackets; two more realistic options were added for the MCQ.)",
    steps: [
      st("Die mense het met shisanyama begin omdat hulle ...", ["meer mense na Gauteng wou lok.", "'n braaidag wou vier.", "meer vleis wou verkoop.", "pap goedkoper wou maak."], 2),
    ],
  },
  {
    number: "1", sub_number: "1.10",
    text: "In watter opsig is die twee geregte van Noordwes en die Oos-Kaap dieselfde? (Paragraaf 6)",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "Albei geregte word met pap bedien / pap is die gemeenskaplike gereg.",
    marking_notes: "Memo: enige EEN: albei word met pap bedien; pap is die gemeenskaplike gereg; in albei word pap saam met vleis bedien/geëet.",
    steps: [
      st("In watter opsig is die twee geregte dieselfde?", ["Albei word met mieliebier afgesluk.", "Albei word met pap bedien.", "Albei is van skaapafval gemaak.", "Albei word ure lank gekook totdat dit sag is."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.11",
    text: "Wat word roosterkoek ook in die Noord-Kaap genoem?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "askoek",
    marking_notes: "Memo: askoek.",
    steps: [
      st("Wat word roosterkoek ook genoem?", ["vetkoek", "potjiekos", "ting", "askoek"], 3),
    ],
  },
  {
    number: "1", sub_number: "1.12",
    text: "Watter sanger het 'n liedjie oor potjiekos gemaak?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Anton Goosen",
    marking_notes: "Memo: Anton Goosen.",
    steps: [
      st("Watter sanger het die liedjie Potjiekos gemaak?", ["Gerhard Steyn", "Anton Goosen", "Ivor Swartz", "Simon Cowell"], 1),
    ],
  },
  {
    number: "1", sub_number: "1.13",
    text: "Waaruit lei ons af dat potjiekos al eeue lank deel van ons koskultuur is?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Potjiekos was al op die Groot Trek / dit is deel van ons geskiedenis/erfenis.",
    marking_notes: "Memo: enige EEN: potjiekos was deel van die Groot Trek; dit is deel van ons geskiedenis/erfenis.",
    steps: [
      st("Waaruit lei ons dit af?", ["Daar is baie verskillende resepte vir potjiekos.", "Potjiekos kan met seekos of sonder vleis gemaak word.", "Anton Goosen het 'n liedjie daaroor geskryf.", "Potjiekos was al op die Groot Trek."], 3),
    ],
  },
  {
    number: "1", sub_number: "1.14",
    text: "Noem EEN ding waarvoor die mense in Mpumalanga sorghum gebruik.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Hulle maak pap/bier daarvan.",
    marking_notes: "Memo: pap/bier (enige EEN).",
    steps: [
      st("Waarvoor gebruik hulle sorghum?", ["Hulle maak melktert daarvan.", "Hulle maak brood daarvan.", "Hulle maak pap daarvan.", "Hulle maak kerrie daarvan."], 2),
    ],
  },
  {
    number: "1", sub_number: "1.15.1",
    text: "Almal hou dalk nie van mopaniewurms nie, maar in Limpopo is dit 'n lekkerny. Kies die KORREKTE antwoord: Mopaniewurms is (nadelig/voordelig) vir mense wat dit eet.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "voordelig",
    marking_notes: "Memo: voordelig. (Paper offered nadelig/voordelig; two further wrong options added.)",
    steps: [
      st("Mopaniewurms is ... vir mense wat dit eet.", ["nadelig", "skadelik", "voordelig", "gevaarlik"], 2),
    ],
  },
  {
    number: "1", sub_number: "1.15.2",
    text: "Motiveer jou antwoord op VRAAG 1.15.1.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Dit bevat baie proteïene / drie keer meer proteïene as beesvleis. (Of: dit is ekonomies/goedkoop.)",
    marking_notes: "Memo: enige EEN: ekonomies/goedkoop; baie proteïene (drie keer meer as beesvleis)/gesond. Die antwoord op 1.15.1 moet korrek wees om hierdie punt te verdien.",
    steps: [
      st("Waarom is mopaniewurms voordelig?", ["Dit bevat drie keer meer proteïene as beesvleis.", "Dit word met rooiwyn en knoffel gekook.", "Dit is 'n gereg wat net in die Vrystaat gevind word.", "Dit bevat meer kaneelsuiker as melktert."], 0),
    ],
  },
  {
    number: "1", sub_number: "1.16.1",
    text: "Ons lees in die teks van die geregte wat ons in die verskillende provinsies kry. Kies 'n beskrywing uit KOLOM B wat by die gereg in KOLOM A pas. KOLOM B: A. In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg. B. Hierdie is 'n heerlike kerriegereg van die Wes-Kaap. C. Ons kry hierdie gereg net in Gauteng. D. Hierdie gewilde gereg het naam gemaak oorsee. E. Dié gereg neem lank om voor te berei. F. Die Nederlanders het hierdie gereg na ons land toe gebring.  --- 1.16.1: mogudu",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "E: Dié gereg neem lank om voor te berei.",
    marking_notes: "Memo: E. Accepts the letter and/or the written description.",
    steps: [
      st("Watter beskrywing pas by mogudu?", ["Hierdie is 'n heerlike kerriegereg van die Wes-Kaap.", "Ons kry hierdie gereg net in Gauteng.", "Dié gereg neem lank om voor te berei.", "Die Nederlanders het hierdie gereg na ons land toe gebring."], 2),
    ],
  },
  {
    number: "1", sub_number: "1.16.2",
    text: "KOLOM B: A. In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg. B. Hierdie is 'n heerlike kerriegereg van die Wes-Kaap. C. Ons kry hierdie gereg net in Gauteng. D. Hierdie gewilde gereg het naam gemaak oorsee. E. Dié gereg neem lank om voor te berei. F. Die Nederlanders het hierdie gereg na ons land toe gebring.  --- 1.16.2: roosterkoek",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "D: Hierdie gewilde gereg het naam gemaak oorsee.",
    marking_notes: "Memo: D.",
    steps: [
      st("Watter beskrywing pas by roosterkoek?", ["Hierdie gewilde gereg het naam gemaak oorsee.", "In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg.", "Ons kry hierdie gereg net in Gauteng.", "Dié gereg neem lank om voor te berei."], 0),
    ],
  },
  {
    number: "1", sub_number: "1.16.3",
    text: "KOLOM B: A. In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg. B. Hierdie is 'n heerlike kerriegereg van die Wes-Kaap. C. Ons kry hierdie gereg net in Gauteng. D. Hierdie gewilde gereg het naam gemaak oorsee. E. Dié gereg neem lank om voor te berei. F. Die Nederlanders het hierdie gereg na ons land toe gebring.  --- 1.16.3: potjiekos",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "A: In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg.",
    marking_notes: "Memo: A.",
    steps: [
      st("Watter beskrywing pas by potjiekos?", ["Die Nederlanders het hierdie gereg na ons land toe gebring.", "Hierdie is 'n heerlike kerriegereg van die Wes-Kaap.", "Dié gereg neem lank om voor te berei.", "In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg."], 3),
    ],
  },
  {
    number: "1", sub_number: "1.16.4",
    text: "KOLOM B: A. In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg. B. Hierdie is 'n heerlike kerriegereg van die Wes-Kaap. C. Ons kry hierdie gereg net in Gauteng. D. Hierdie gewilde gereg het naam gemaak oorsee. E. Dié gereg neem lank om voor te berei. F. Die Nederlanders het hierdie gereg na ons land toe gebring.  --- 1.16.4: melktert",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "F: Die Nederlanders het hierdie gereg na ons land toe gebring.",
    marking_notes: "Memo: F.",
    steps: [
      st("Watter beskrywing pas by melktert?", ["Hierdie gewilde gereg het naam gemaak oorsee.", "Die Nederlanders het hierdie gereg na ons land toe gebring.", "Ons kry hierdie gereg net in Gauteng.", "In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.16.5",
    text: "KOLOM B: A. In die Vrystaat gebruik hulle veral lamsvleis vir hierdie gereg. B. Hierdie is 'n heerlike kerriegereg van die Wes-Kaap. C. Ons kry hierdie gereg net in Gauteng. D. Hierdie gewilde gereg het naam gemaak oorsee. E. Dié gereg neem lank om voor te berei. F. Die Nederlanders het hierdie gereg na ons land toe gebring.  --- 1.16.5: bobotie",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "B: Hierdie is 'n heerlike kerriegereg van die Wes-Kaap.",
    marking_notes: "Memo: B.",
    steps: [
      st("Watter beskrywing pas by bobotie?", ["Hierdie is 'n heerlike kerriegereg van die Wes-Kaap.", "Dié gereg neem lank om voor te berei.", "Die Nederlanders het hierdie gereg na ons land toe gebring.", "Ons kry hierdie gereg net in Gauteng."], 0),
    ],
  },
  {
    number: "1", sub_number: "1.17",
    text: "Waarom was dit 'n slim idee van LekkeSlaap om hierdie inligting oor Suid-Afrika se kos aan die publiek bekend te maak?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "LekkeSlaap het dit gedoen om hulleself/hulle diens te bemark. (Of: dit het toeriste gemotiveer om die provinsies te besoek.)",
    marking_notes: "Memo: enige EEN: bemarking van LekkeSlaap; toeriste se belangstelling geprikkel; mense gemotiveer om die provinsies te besoek/geregte te proe; informatief; Suid-Afrika se koskultuur bekendgestel.",
    steps: [
      st("Waarom was dit 'n slim idee?", ["Dit het die pryse van kos in Suid-Afrika laat daal.", "Dit het toeriste gemotiveer om die provinsies te besoek en die geregte te proe.", "Dit het gesorg dat toeriste net by een plek bly.", "Dit het Suid-Afrikaners verhoed om vreemde kosse te eet."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.18",
    text: "''Jy is wat jy eet, word daar gesê.'' (Paragraaf 13) Stem jy met hierdie stelling saam? Motiveer jou antwoord.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Ja. Mense leer jou ken deur dit wat jy eet / dit wat jy eet, sê iets van wie jy is.",
    marking_notes: "Memo: geen punt vir Ja/Nee nie; die rede verdien die punt. Memo accepts several reasons for Ja (kos wys jou kultuur/voorkeure; gesonde kos = gesond) and for Nee (mens behoort nie te veralgemeen nie; jy kan nie altyd kies wat jy eet nie; gesondheid bepaal wat jy eet). ONE Ja reason is the correct option here (see header FLAG about Nee).",
    steps: [
      st("Kies die korrekte motivering vir 'n antwoord op die vraag.", ["Ja. Mense wat baie eet, is altyd gelukkig.", "Nee. Kos sê niks oor 'n mens nie, want almal in 'n provinsie eet presies dieselfde.", "Ja. Die kos wat jy eet, sê iets van wie jy is en waarin jy belangstel.", "Ja. Jy word 'n vleisgereg as jy dit eet."], 2),
    ],
  },
  {
    number: "1", sub_number: "1.19",
    text: "Waarom pas die woord ''kuierkos'' so goed by die inhoud van hierdie artikel?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Kos bring mense saam; in baie van die geregte lees ons mense kuier lekker saam as hulle eet.",
    marking_notes: "Memo: enige EEN algemene motivering (kos bring mense saam / geselligheid / LekkeSlaap wou hê mense moet kuier / aanhaling ''In Suid-Afrika beteken lekker eet dikwels ook lekker kuier!'') OF 'n voorbeeld uit die teks (para 3 gatsby; para 5 shisa nyama; para 8 potjie).",
    steps: [
      st("Waarom pas ''kuierkos'' so goed by die artikel?", ["Die geregte is so duur dat mense eerder alleen eet.", "Die artikel sê almal moet hulle kos alleen eet.", "Kuierkos beteken kos wat net toeriste in restaurante eet.", "Baie van die geregte laat mense lekker saamkuier terwyl hulle eet."], 3),
    ],
  },

  // TEKS B: TV-gids (image: teks-b.png)
  {
    number: "1", sub_number: "1.20",
    text: "Bestudeer TEKS B (die TV-gids hierbo). Waarom is daar 'n ster-simbool (✶) in die gids langs Fiela se Kind geplaas?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Literal",
    image_url: `${IMG}/teks-b.png`,
    model_answer: "Dit wys/dui aan dat dit 'n fliek/film/rolprent is.",
    marking_notes: "Memo: dit dui aan dat dit 'n fliek/film/rolprent is (of soortgelyk). The key at the top of the guide reads: ✶ Flieks.",
    steps: [
      st("Wat dui die ster-simbool aan?", ["Dit dui aan dat dit 'n herhaling is.", "Dit dui aan dat dit 'n fliek is.", "Dit dui aan dat dit 'n omnibus is.", "Dit dui aan dat dit 'n nuusprogram is."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.21",
    text: "Hoe weet ons dat daar van 08:30 af 'n paar episodes van Good People op SABC 2 uitgesaai word?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Daar is 'n O-simbool langs die program (omnibus: herhaling van 'n paar episodes in die reeks).",
    marking_notes: "Memo: enige EEN: O-simbool langs die program; dit is 'n omnibus; aangedui dat dit 'n herhaling van 'n paar episodes is.",
    steps: [
      st("Hoe weet ons dit?", ["Daar is 'n H-simbool langs die program.", "Die program word in 'n kassie met 'n prent gewys.", "Daar is 'n O-simbool langs die program.", "Die program begin om 07:00."], 2),
    ],
  },
  {
    number: "1", sub_number: "1.22",
    text: "Kies die KORREKTE ANTWOORD om die sin mee te voltooi. Uit hierdie prentjie (die man met sy kop in sy hande langs Kies die lewe op VIA) kan ons aflei dat die man raad nodig het oor ...",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "C: die probleme tussen hom en sy geliefde.",
    marking_notes: "Memo: C.",
    steps: [
      st("Die man het raad nodig oor ...", ["die plek waar hy sy bestuurderslisensie kan hernu.", "die universiteit waar hy aansoek moet doen.", "die probleme tussen hom en sy geliefde.", "die nuwe huis wat hy wil koop."], 2),
    ],
  },
  {
    number: "1", sub_number: "1.23",
    text: "Waarom pas die prentjie (die twee silhoeëtte met mikrofone langs Stand Up South Africa) by die spesifieke program?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Dit wys dat hulle sing / daar mikrofone in hulle hande is / dit 'n sangkompetisie is.",
    marking_notes: "Memo: enige EEN: hulle sing/mikrofone/sangkompetisie; twee mense/'n duo sing; dit wys waaroor die program gaan (musiek).",
    steps: [
      st("Waarom pas die prentjie by die program?", ["Dit wys twee mense wat dans in 'n huis.", "Dit wys dat hulle sing; daar is mikrofone en dit is 'n sangkompetisie.", "Dit wys twee mense wat 'n huis koop.", "Dit wys twee kokke wat 'n burger maak."], 1),
    ],
  },
  {
    number: "1", sub_number: "1.24",
    text: "Waarom is dit beter om na SABC 2 as na Via te kyk indien jy wil weet wat elke dag in die wêreld rondom jou gebeur?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "Daar is nuus-/sakeprogramme op SABC 2 (Via het geen nuus nie).",
    marking_notes: "Memo: enige EEN: verskillende programme/nuus op SABC 2; nuus word van vroegoggend af/op verskillende tye/in verskillende tale aangebied; Via het geen nuus/sakeprogramme nie; Morning Live is op SABC 2.",
    steps: [
      st("Waarom is SABC 2 beter hiervoor?", ["SABC 2 het meer flieks as Via.", "Via het net een program, naamlik Konings van Kitskos.", "SABC 2 het geen herhalings nie, so jy sien net nuwe programme.", "SABC 2 bied nuus in verskillende tale aan; Via het geen nuusprogramme nie."], 3),
    ],
  },
  {
    number: "1", sub_number: "1.25",
    text: "Verduidelik waarom die uitleg van hierdie TV-gids gebruikersvriendelik is.",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "'n Mens kan dadelik sien watter programme wanneer aangebied word / kan jou kyktyd beplan / hoef nie baie te lees nie.",
    marking_notes: "Memo: enige EEN: nie baie lees nie/soeklees; sien dadelik watter programme aangebied word; sien wanneer; kan kyktyd beplan; sien herhalings; kort beskrywings/aanbieders; prente/simbole/sleutels; duidelike tabelle/netjiese uitleg.",
    steps: [
      st("Waarom is die uitleg gebruikersvriendelik?", ["Die programme word van die mees onlangse na die oudste gelys.", "Die tye staan duidelik by elke program sodat jy jou kyktyd kan beplan.", "Daar is baie lang paragrawe wat elke program in detail beskryf.", "Al die programme van SABC 2 en Via staan in een lang lys sonder kolomme."], 1),
    ],
  },

  // ============ AFDELING B: OPSOMMING — VRAAG 2 (10 marks) ============
  {
    number: "2", sub_number: null,
    text: "VRAAG 2 (Opsomming). Selfone is niks vreemds nie, maar daar is 'n paar vreemde feite oor selfone. Lees TEKS C (hierbo). In die oorspronklike vraestel moet jy SEWE VREEMDE FEITE OOR SELFONE in jou EIE VOLSINNE opsom, puntsgewys, genommer van 1 tot 7, in hoogstens 70 woorde, met die getal woorde aan die einde. Hier kies jy by elke stap die korrekte opsommingspunt, en by die laaste drie stappe die korrekte eie-woorde-vorm en formaat.",
    marks: 10, topicKey: "summary", cognitiveLevelName: "Reorganisation",
    image_url: `${IMG}/teks-c.png`,
    model_answer: "1. Daar is meer selfone in Suid-Afrika as taxi's, televisiestelle en radio's saam. 2. Die meeste mense gebruik hulle selfone 110 keer per dag. 3. Selfone het 19 keer meer bakterieë as toilethandvatsels. 4. 201 000 dollar is die hoogste bedrag wat op 'n selfoonrekening betaal is. 5. 'n Juwelier in Hongkong hou die rekord vir 6 576 diamante op 'n selfoon. 6. Selfoongooi is 'n amptelike sportsoort in Finland. 7. Urine kan gebruik word om selfone te laai. (Memo-voorbeeld: 72 woorde.)",
    marking_notes: "Memo: 7 punte vir 7 feite (1 per feit) + 3 punte vir taal; totaal 10. Taalpunte (eie woorde): 1-3 korrekte feite = 1; 4-5 = 2; 6-7 = 3; direkte aanhaling van selfs een feit skuif na die aanhalingskaal (6-7 aanhalings = 0 taalpunte; 4-5 = maks 1; 2-3 = maks 2). Geen punte word afgetrek vir 'n verkeerde of ontbrekende woordtelling nie; as 70 woorde oorskry word, word vyf woorde ná die grens nagesien. Steps 1-7 = memo facts; steps 8-10 = the 3 language marks reformulated as MCQs (see file header FLAG).",
    steps: [
      st("Feit 1: Watter stelling is korrek?", ["Daar is meer taxi's as selfone in Suid-Afrika.", "Daar is meer televisiestelle as selfone in Suid-Afrika.", "Daar is meer selfone in Suid-Afrika as taxi's, televisiestelle en radio's saam.", "Daar is net soveel selfone as radio's in Suid-Afrika."], 2),
      st("Feit 2: Watter stelling is korrek?", ["Die meeste mense gebruik hulle selfone 110 keer per week.", "Die meeste mense gebruik hulle selfone 110 keer per dag.", "Die meeste mense gebruik hulle selfone net 10 keer per dag.", "Die meeste mense gebruik hulle selfone 19 keer per dag."], 1),
      st("Feit 3: Watter stelling is korrek?", ["Toilethandvatsels het 19 keer meer bakterieë as selfone.", "Selfone is skoner as toilethandvatsels.", "Selfone het 110 keer meer bakterieë as toilethandvatsels.", "Selfone het 19 keer meer bakterieë as toilethandvatsels."], 3),
      st("Feit 4: Watter stelling is korrek?", ["Celina Aarons se rekening van 6 576 dollar was die hoogste ooit.", "Die hoogste selfoonrekening ooit was 201 000 dollar.", "Die hoogste selfoonrekening was 201 000 rand.", "Die hoogste selfoonrekening was in Hongkong in 2011."], 1),
      st("Feit 5: Watter stelling is korrek?", ["'n Juwelier in Hongkong het 201 000 diamante op 'n selfoon aangebring.", "'n Juwelier in Florida hou die rekord vir die diamante op 'n selfoon.", "'n Juwelier in Hongkong het 6 576 diamante op 'n selfoon aangebring.", "Daar is 576 diamante op die duurste selfoon in Hongkong."], 2),
      st("Feit 6: Watter stelling is korrek?", ["Selfoongooi is 'n amptelike sportsoort in Engeland.", "Selfoongooi is 'n amptelike sportsoort in Finland.", "Finland het selfoonspeletjies as sportsoort goedgekeur.", "Selfoongooi is in Finland verbode."], 1),
      st("Feit 7: Watter stelling is korrek?", ["Wetenskaplikes in Florida laai selfone met sonlig.", "Wetenskaplikes in Engeland het uitgevind hoe om selfone met water te laai.", "Selfone kan met urine gelaai word (Engelse wetenskaplikes).", "Selfone word deur urine vuiler as toilethandvatsels."], 2),
      st("Taal (eie woorde): watter weergawe van 'n feit is in EIE WOORDE (nie 'n direkte aanhaling uit TEKS C nie)?", ["Mense raak ongelukkig as hulle nie hulle selfone kan gebruik nie.", "Selfone is vuiler as toilethandvatsels.", "Dalk sal mense versigtiger wees as hulle weet dat daar 19 keer meer bakterieë op selfone as op toilethandvatsels is.", "Mense sit hulle selfone orals neer sonder om daaroor na te dink."], 1),
      st("Taal (formaat): watter weergawe volg die instruksies vir die opsomming korrek?", ["Een lang paragraaf sonder nommers van 100 woorde.", "Tien feite wat woord vir woord uit die teks oorgeskryf is.", "Sewe feite, puntsgewys en genommer, in eie volsinne, hoogstens 70 woorde, met die getal woorde aan die einde.", "Sewe feite in die volgorde van die teks sonder woordtelling en met aanhalings."], 2),
      st("Taal (eie woorde): watter weergawe van die laaifeit is in EIE WOORDE?", ["Daar is 'n manier om selfone met urine te kan laai.", "Wetenskaplikes van die Bristol Robotics Laboratory in Engeland het 'n oplossing hiervoor gevind.", "Een van die probleme wat selfoongebruikers dikwels het, is dat hulle nie hulle selfone kan laai nie.", "Selfone kan met urine gelaai word."], 3),
    ],
  },

  // ============ AFDELING C: TAALSTRUKTURE EN -KONVENSIES (40 marks) ============
  // VRAAG 3: TEKS D advertensie (10 marks). Image: teks-d.png.
  // The ad reads: UNIEK / Jou eg (3.1) (Suid-Afrika) T-hemp / Gemaak deur
  // Suid-Afrikaners vír Suid-Afrikaners / [vingerafdruk] / Beskikbaar in ...
  // rooi, (3.2) (groen) en geel! / DAMES, moenie geld in die water gooi nie.
  // Koop 'n T-hemp van kwaliteit. / Kry 20%-afslag op (3.4) (die beste T-hemp
  // in Suid-Afrika). / (3.5) Koop nou / Vir pryse en verdere inligting besoek
  // www.UNIEK.co.za

  {
    number: "3", sub_number: "3.1",
    text: "Bestudeer TEKS D (die advertensie hierbo). Gee die KORREKTE VORM van die woord tussen hakies. Jou eg (Suid-Afrika) T-hemp!",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    image_url: `${IMG}/teks-d.png`,
    model_answer: "Suid-Afrikaanse",
    marking_notes: "Memo: Suid-Afrikaanse (spelling moet korrek wees).",
    steps: [
      st("Watter vorm is korrek?", ["Suid-Afrikaanse", "Suid-Afrikaans", "Suid-Afrikaners", "Suid-Afrika se"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Gee die INTENSIEWE VORM van die woord tussen hakies. Beskikbaar in ... rooi, (groen) en geel!",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "grasgroen",
    marking_notes: "Memo: grasgroen (spelling moet korrek wees).",
    steps: [
      st("Watter woord is die intensiewe vorm van ''groen''?", ["groenerig", "groener", "grasgroen", "groenste"], 2),
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "Kies die KORREKTE ANTWOORD om die sin mee te voltooi. Dames word in die advertensie gestereotipeer as mense wat ...",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "A: geld nie slim gebruik nie.",
    marking_notes: "Memo: A.",
    steps: [
      st("Dames word gestereotipeer as mense wat ...", ["geld nie slim gebruik nie.", "geld op onnodige dinge bestee.", "tyd mors om na winskopies te soek.", "nie die pryse van produkte dophou nie."], 0),
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Kry 20%-afslag op die beste T-hemp in Suid-Afrika. Waarom is die onderstreepte gedeelte (die beste T-hemp in Suid-Afrika) nie 'n FEIT nie?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Dit is nie deur navorsing/statistiek bewys nie; dit is slegs die adverteerder se opinie/mening.",
    marking_notes: "Memo: enige EEN: nie deur navorsing/statistiek bewys nie; slegs die adverteerder se mening/bevooroordeeld; manipuleer die leser; nie almal sal dink dis die beste nie; wil net sy T-hemp beter laat klink. Geen punt vir FEIT/MENING self nie.",
    steps: [
      st("Waarom is dit nie 'n feit nie?", ["Dit is deur verkoopsyfers van alle T-hemde bewys.", "Dit kan met 'n wetenskaplike toets nagegaan word.", "Dit is slegs die adverteerder se mening; dit is nie met navorsing bewys nie.", "Dit staan met groot letters in die advertensie."], 2),
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Koop nou. Gebruik enige advertensietegniek om die onderstreepte woord (nou) meer trefkrag te gee.",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Reorganisation",
    model_answer: "NOU (hoofletters) / nou in vetdruk / nou!",
    marking_notes: "Memo: enige EEN: hoofletters; vetdruk/donkerder skrif; uitroepteken; ander lettertipe; groter druk; aksenttekens (nóú); kleur/skuinsdruk. Die verbetering moet werklik meer trefkrag verleen.",
    steps: [
      st("Watter verandering gee die woord meer trefkrag?", ["Koop nou, (met 'n komma)", "Koop nou? (met 'n vraagteken)", "Koop NOU (in hoofletters en vetdruk)", "Koop nou (in kleiner, ligter skrif)"], 2),
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "Waarom is die gebruik van die vingerafdruk effektief as jy na die naam van die produk (UNIEK) kyk?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Die vingerafdruk skep die idee dat die naam/hemp so uniek is soos 'n vingerafdruk.",
    marking_notes: "Memo: enige EEN: naam uniek soos 'n vingerafdruk; hemp net so uniek; indruk wat jy skep as jy die T-hemp dra.",
    steps: [
      st("Waarom is die vingerafdruk effektief?", ["Dit wys dat net die polisie hierdie T-hemde kan koop.", "Dit wys dat die T-hemp gesteel kan word.", "Dit wys dat die T-hemp 'n lang tyd sal hou.", "Dit wys dat die hemp uniek is, net soos 'n vingerafdruk."], 3),
    ],
  },
  {
    number: "3", sub_number: "3.7",
    text: "Waarom, dink jy, word die produk in die vorm van 'n T-hemp geadverteer?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "Dit beeld die produk uit / wys onmiddellik wat verkoop word.",
    marking_notes: "Memo: enige EEN: beeld die produk uit/wys onmiddellik wat verkoop word; anders as ander advertensies trek aandag; so uniek soos die produk; kreatief; pas by die inhoud.",
    steps: [
      st("Waarom word die advertensie in die vorm van 'n T-hemp aangebied?", ["Omdat T-hemde die goedkoopste klere is.", "Dit wys onmiddellik wat verkoop word.", "Omdat die adverteerder nie 'n ander tipe prent kon vind nie.", "Omdat net T-hemde met 'n vingerafdruk gedruk kan word."], 1),
    ],
  },
  {
    number: "3", sub_number: "3.8",
    text: "Watter EEN woord gebruik die adverteerder om vir die leser te sê dat 'n mens die T-hemp vir 'n lang tyd sal dra?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Literal",
    model_answer: "kwaliteit",
    marking_notes: "Memo: ''kwaliteit'' (nie penaliseer as die woord nie tussen aanhalingstekens is nie).",
    steps: [
      st("Watter woord sê die T-hemp sal lank hou?", ["afslag", "kwaliteit", "inligting", "uniek"], 1),
    ],
  },
  {
    number: "3", sub_number: "3.9.1",
    text: "Die pryse is net op www.UNIEK.co.za beskikbaar. Watter groep mense, dink jy, word hierdeur uitgesluit?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "Mense wat nie (toegang tot) internet/rekenaars/selfone/data het nie.",
    marking_notes: "Memo: enige EEN: geen internet/rekenaar/selfone/data; nie rekenaargeletterd; gebruik nie tegnologie; vertrou nie aanlynbestellings; wil nie aanlyn bestel nie; wil eers die produk sien; verkies persoonlike diens.",
    steps: [
      st("Watter groep word uitgesluit?", ["Mense wat nie toegang tot die internet het nie.", "Mense wat nie van die kleur rooi hou nie.", "Mense wat reeds 'n T-hemp het.", "Mense wat in Suid-Afrika bly."], 0),
    ],
  },
  {
    number: "3", sub_number: "3.9.2",
    text: "Waarom, dink jy, sal hierdie uitsluiting die adverteerder se besigheid benadeel?",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "Minder mense sal reageer/koop; die adverteerder sal minder T-hemde verkoop.",
    marking_notes: "Memo: enige EEN: minder mense sal koop; adverteerder verloor besigheid/verkoop minder; mense sien nie die advertensie nie; nie almal weet daarvan nie; sou meer verkoop met 'n winkel/ander adverteerplekke.",
    steps: [
      st("Waarom sal dit die besigheid benadeel?", ["Die adverteerder sal meer belasting moet betaal.", "Die T-hemde sal te duur word.", "Minder mense sal die produk koop, so die adverteerder verkoop minder T-hemde.", "Die webblad sal te veel kopers hê om te hanteer."], 2),
    ],
  },

  // VRAAG 4: TEKS E strokiesprent (10 marks). Image: teks-e.png.
  {
    number: "4", sub_number: "4.1",
    text: "Bestudeer TEKS E (die strokiesprent hierbo). Skryf die sin hieronder in RAAMPIE 1 in die INDIREKTE REDE. Gebruik dat in jou antwoord. Boet sê vir Jan: ''My groentetuin vorder fluks.'' Begin só: Boet sê vir Jan dat ...",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    image_url: `${IMG}/teks-e.png`,
    model_answer: "Boet sê vir Jan dat sy groentetuin fluks vorder.",
    marking_notes: "Memo: Boet sê vir Jan dat sy groentetuin fluks vorder. (Die hele sin moet korrek wees.)",
    steps: [
      st("Watter sin is korrek?", ["Boet sê vir Jan dat my groentetuin fluks vorder.", "Boet sê vir Jan dat sy groentetuin vorder fluks.", "Boet sê vir Jan dat sy groentetuin fluks vorder.", "Boet sê vir Jan dat sy groentetuin fluks vorder het."], 2),
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Hoe kan ons in RAAMPIE 1 sien dat Boet tevrede is met sy groente wat so mooi groei? Noem TWEE visuele tekens.",
    marks: 2, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Albei Boet se duime is in die lug (hy wys 'shap'); Boet se mond is groot oop / hy lag/glimlag.",
    marking_notes: "Memo: (1) albei duime in die lug/wys met hande dat hy tevrede is/''shap''; (2) mond groot oop/lag/glimlag. Een punt per visuele teken (two single-mark steps).",
    steps: [
      st("Eerste visuele teken:", ["Boet se arms is gekruis.", "Albei Boet se duime is in die lug.", "Boet se hande is agter sy rug.", "Boet hou 'n emmer in sy hand."], 1),
      st("Tweede visuele teken:", ["Boet se oë is toe en hy frons.", "Boet kyk weg van Jan.", "Boet se mond is groot oop; hy lag.", "Boet se mond is toe en sy lippe is saamgepers."], 2),
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Kyk na RAAMPIE 2. Kies die KORREKTE ANTWOORD om die sin mee te voltooi. Met hierdie woorde (''Lekker!!! Boet het sowaar wéér vuil water in my bak laat val!'') is Brak ...",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "B: sarkasties.",
    marking_notes: "Memo: B/sarkasties.",
    steps: [
      st("Met hierdie woorde is Brak ...", ["eerlik.", "sarkasties.", "gehoorsaam.", "entoesiasties."], 1),
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Motiveer jou antwoord op VRAAG 4.3.1.",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Vuil water kan nie lekker wees nie / Brak dink nie regtig dat die water lekker is nie.",
    marking_notes: "Memo: enige EEN (bv. Brak dink nie regtig dat die water lekker is nie; daar is vuil water in sy bak; dis nie die eerste keer nie; Brak is nie gelukkig nie). Die antwoord op 4.3.1 moet korrek wees om hierdie punt te verdien.",
    steps: [
      st("Waarom is Brak sarkasties?", ["Brak is regtig bly omdat hy van vuil water hou.", "Brak is dors en wil meer water hê.", "Vuil water in sy bak kan nie lekker wees nie; hy dink nie regtig dis lekker nie.", "Brak is bly omdat Boet sy bak skoongemaak het."], 2),
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Gee die OORTREFFENDE TRAP van vergelyking van die woord tussen hakies. Ek wil die (mooi) tuin hê.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "mooiste",
    marking_notes: "Memo: mooiste (spelling moet korrek wees).",
    steps: [
      st("Watter vorm is die oortreffende trap?", ["mooier", "meer mooi", "mooist", "mooiste"], 3),
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Kies die KORREKTE ANTWOORD om die sin mee te voltooi. Kom worteltjies, ... (RAAMPIE 3). Hierdie verkleinwoord sê dat die wortels nog klein is. Dit sê ook dat Boet ...",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "B: baie vir sy groentetuin omgee.",
    marking_notes: "Memo: B.",
    steps: [
      st("Dit sê ook dat Boet ...", ["nie aandag gee aan die ander groente in sy tuin nie.", "daarvan hou om wortels te eet.", "geld uit sy wortels wil maak.", "baie vir sy groentetuin omgee."], 3),
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "Kyk na hoe Boet sy wortels natgooi. (RAAMPIE 3 en RAAMPIE 4) Waarom kan 'n mens verstaan dat daar vuil water in Brak se bak beland het? Gee EEN visuele rede.",
    marks: 1, topicKey: "visual-literacy", cognitiveLevelName: "Inference",
    model_answer: "Daar is oral waterdruppels / Brak se bak staan naby die wortels / die water spat as Boet dit uitgooi.",
    marking_notes: "Memo: enige EEN: oral/baie waterdruppels; Brak se bak staan naby/langs die wortels; Boet gooi nie versigtig nie; water spat.",
    steps: [
      st("Watter visuele rede wys dit?", ["Brak se bak staan ver van die wortels af.", "Daar is oral waterdruppels en die water spat as Boet dit uitgooi.", "Brak se bak is heeltemal leeg.", "Boet gooi die water baie versigtig op net een plant."], 1),
    ],
  },
  {
    number: "4", sub_number: "4.7",
    text: "Kyk weer na Brak se gedagtes in RAAMPIE 3 en RAAMPIE 4. Waarom is Brak se gedagtes ironies?",
    marks: 2, topicKey: "visual-literacy", cognitiveLevelName: "Evaluation",
    model_answer: "In RAAMPIE 3 dink Brak dat hy kan verstaan waarom Boet vuil water gebruik (positief), maar in RAAMPIE 4 hoop hy dat die wortels na seep sal proe (negatief).",
    marking_notes: "Memo: 1 punt vir elke kant van die ironie: RAAMPIE 3 begrip/positief; RAAMPIE 4 negatief (hoop wortels proe na seep). 1 punt vir net een kant; dus 0, 1 of 2.",
    steps: [
      st("RAAMPIE 3: Wat dink Brak (die een kant van die ironie)?", ["Brak is kwaad vir Boet en wil hom byt.", "Brak dink hy kan verstaan hoekom Boet vuil water gebruik (iets positiefs).", "Brak wil sy bak na 'n ander plek skuif.", "Brak dink die water is skoon."], 1),
      st("RAAMPIE 4: Wat dink Brak (die ander kant van die ironie)?", ["Hy hoop dat die wortels vinnig sal groei.", "Hy hoop dat Boet vir hom skoon water sal gee.", "Hy dink die water is lekker.", "Hy hoop dat die wortels ook na seep sal proe (iets negatiefs)."], 3),
    ],
  },

  // VRAAG 5: TEKS F artikel (5.1, 14 marks; image: teks-f.png) and TEKS G
  // prent (5.2, 6 marks; image: teks-g.png)
  {
    number: "5", sub_number: "5.1.1",
    text: "Lees TEKS F (die artikel hierbo) en beantwoord die vrae. Gee die MEERVOUD van die woord tussen hakies. Dit bestaan uit 30 (koorlid).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    image_url: `${IMG}/teks-f.png`,
    model_answer: "koorlede",
    marking_notes: "Memo: koorlede (spelling moet korrek wees).",
    steps: [
      st("Watter meervoud is korrek?", ["koorlidde", "koorlid's", "koorlede", "koorlidden"], 2),
    ],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Skryf die GETAL tussen hakies as 'n woord. Dit is hoofsaaklik tieners en jongmense tussen (14) en 24 jaar oud.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "veertien",
    marking_notes: "Memo: veertien (spelling moet korrek wees).",
    steps: [
      st("Hoe word 14 as 'n woord geskryf?", ["veertien", "vertien", "veertig", "veertein"], 0),
    ],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Gee die KORREKTE VORM van die woord tussen hakies. In 2019 was die koor die (een) koor in die geskiedenis van America's Got Talent wat tot by die finale rondte gevorder het.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "eerste",
    marking_notes: "Memo: eerste/enigste (spelling moet korrek wees).",
    steps: [
      st("Watter vorm is korrek?", ["eenste", "eersde", "een", "eerste"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Verbind die twee sinne met die VOEGWOORD tussen hakies en plaas die KOMMA op die korrekte plek. Hulle het nie die kompetisie gewen nie. Mense was mal oor hulle musiek. (alhoewel). Begin só: Alhoewel hulle nie ...",
    marks: 2, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Alhoewel hulle nie die kompetisie gewen het nie, was mense mal oor hulle musiek.",
    marking_notes: "Memo: 1 punt vir die woordorde (twee werkwoorde het geskuif) en 1 punt vir die komma op die korrekte plek tussen die twee sinsdele.",
    steps: [
      st("Watter sin het die korrekte WOORDORDE (die komma is in al vier reg)?", ["Alhoewel hulle nie die kompetisie gewen het nie, was mense mal oor hulle musiek.", "Alhoewel hulle nie die kompetisie gewen nie, mense was mal oor hulle musiek.", "Alhoewel hulle het nie die kompetisie gewen nie, was mense mal oor hulle musiek.", "Alhoewel hulle nie die kompetisie het gewen nie, was mense mal oor hulle musiek."], 0),
      st("Watter sin het die KOMMA op die korrekte plek?", ["Alhoewel hulle nie die kompetisie gewen het nie was mense, mal oor hulle musiek.", "Alhoewel, hulle nie die kompetisie gewen het nie was mense mal oor hulle musiek.", "Alhoewel hulle nie die kompetisie gewen het nie, was mense mal oor hulle musiek.", "Alhoewel hulle nie, die kompetisie gewen het nie was mense mal oor hulle musiek."], 2),
    ],
  },
  {
    number: "5", sub_number: "5.1.5",
    text: "Gee die AFKORTING vir die woord tussen hakies. In (November) 2009 het die koor hulle debuutalbum vrygestel.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "Nov.",
    marking_notes: "Memo: Nov. (die punt moet daar wees).",
    steps: [
      st("Watter afkorting is korrek?", ["Nov", "Novem.", "Nvm.", "Nov."], 3),
    ],
  },
  {
    number: "5", sub_number: "5.1.6",
    text: "Gee die SAMESTELLING van die woorde tussen hakies. Die koor sing in al twaalf (land+tale).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "landstale",
    marking_notes: "Memo: landstale (spelling moet korrek wees).",
    steps: [
      st("Watter samestelling is korrek?", ["landtale", "landetale", "landstale", "lande-tale"], 2),
    ],
  },
  {
    number: "5", sub_number: "5.1.7",
    text: "Gee EEN woord vir die woorde tussen hakies. Deur hulle vertonings is hulle betrokke by dinge wat (elke dag) met mense gebeur.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "daagliks",
    marking_notes: "Memo: daagliks (spelling moet korrek wees).",
    steps: [
      st("Watter een woord beteken ''elke dag''?", ["dagliks", "dagelik", "daaglikse", "daagliks"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.1.8",
    text: "Kies die KORREKTE WOORD uit dié tussen hakies. In 2021 het hulle gebaretaal aangeleer en dit in hulle vertoning gebruik om World Hearing Day te (fier/vier).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "vier",
    marking_notes: "Memo: vier. (Paper offered fier/vier; two further wrong options added.)",
    steps: [
      st("Watter woord is korrek?", ["fier", "veer", "vier", "vir"], 2),
    ],
  },
  {
    number: "5", sub_number: "5.1.9",
    text: "Vul die ontbrekende VOORSETSEL in. Die koor het onlangs weer met groot sukses (...) die AGT deelgeneem.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "aan",
    marking_notes: "Memo: aan.",
    steps: [
      st("Watter voorsetsel moet ingevul word?", ["in", "op", "aan", "vir"], 2),
    ],
  },
  {
    number: "5", sub_number: "5.1.10",
    text: "Vorm 'n SELFSTANDIGE NAAMWOORD van die woord tussen hakies. Simon Cowell, bekende (beoordeel), was beïndruk.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "beoordelaar",
    marking_notes: "Memo: beoordelaar (spelling moet korrek wees).",
    steps: [
      st("Watter selfstandige naamwoord is korrek?", ["beoordeler", "beoordeelaar", "beoordelend", "beoordelaar"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.1.11",
    text: "Gee die KORREKTE VORM van die woord tussen hakies. Hy het gesê dit was die (reg) besluit om hulle eie musiek te sing.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "regte",
    marking_notes: "Memo: regte (spelling moet korrek wees).",
    steps: [
      st("Watter vorm is korrek?", ["regde", "regte", "reg", "regter"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.1.12",
    text: "Gebruik die HOMONIEM van die woord tussen hakies in 'n sin sodat die betekenis duidelik blyk. Die wêreld het kennis geneem (van) ons koor!",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "My van is Ndlovu. (Of enige sin waar ''van'' nie ''kennis geneem van'' beteken nie, bv. Ek is van Kaapstad af.)",
    marking_notes: "Memo: enige korrekte sin waar ''van'' in 'n ander betekenisverband gebruik word, bv. selfstandige naamwoord (My van is Ndlovu.) of voorsetsel met ander betekenis (Ek is van Kaapstad af.). ''van'' met die betekenis ''to take note of'' word nie aanvaar nie. One correct sentence offered; the wrong options all reuse the same meaning as in the text.",
    steps: [
      st("Watter sin gebruik die homoniem van ''van'' in 'n ANDER betekenis?", ["Ek het kennis geneem van die nuus.", "Die publiek het kennis geneem van die koor se sukses.", "Sy het kennis geneem van die verandering.", "My van is Ndlovu."], 3),
    ],
  },
  {
    number: "5", sub_number: "5.1.13",
    text: "Verdeel die woord tussen hakies korrek in LETTERGREPE. Hulle gaan nou deel wees van die (volgende) AGT: All Stars.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "vol-gen-de",
    marking_notes: "Memo: vol-gen-de (of vol+gen+de of vol/gen/de); enige korrekte manier van verdeling aanvaar.",
    steps: [
      st("Watter verdeling in lettergrepe is korrek?", ["vo-lgen-de", "volg-en-de", "vol-ge-nde", "vol-gen-de"], 3),
    ],
  },

  // 5.2: TEKS G prent (image: teks-g.png), 6 marks
  {
    number: "5", sub_number: "5.2.1",
    text: "Kyk na die prent (TEKS G) en beantwoord die vrae. Skryf die hele sin oor in die INFINITIEF. Die kind op die stoel is besig (werk op die rekenaar).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    image_url: `${IMG}/teks-g.png`,
    model_answer: "Die kind op die stoel is besig om op die rekenaar te werk.",
    marking_notes: "Memo: Die kind op die stoel is besig om op die rekenaar te werk. / ... om te werk op die rekenaar. (Die gedeelte waar die infinitief getoets word, moet korrek wees.)",
    steps: [
      st("Watter sin is korrek in die infinitief?", ["Die kind op die stoel is besig om op die rekenaar werk.", "Die kind op die stoel is besig te op die rekenaar werk.", "Die kind op die stoel is besig om op die rekenaar te werk.", "Die kind op die stoel is besig om werk op die rekenaar te."], 2),
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Skryf die sin hieronder oor in die VERLEDE TYD. Die twee kinders op die bed bespreek die werk.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Die twee kinders het die werk op die bed bespreek. (Of: Die twee kinders op die bed het die werk bespreek.)",
    marking_notes: "Memo: enige EEN: Die twee kinders op die bed het die werk bespreek / Die twee kinders het op die bed die werk bespreek / Die twee kinders het die werk op die bed bespreek. Die hele sin moet korrek wees.",
    steps: [
      st("Watter sin is korrek in die verlede tyd?", ["Die twee kinders was die werk op die bed bespreek.", "Die twee kinders bespreek het die werk op die bed.", "Die twee kinders het die werk op die bed bespreekt.", "Die twee kinders het die werk op die bed bespreek."], 3),
    ],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Gee die korrekte AFRIKAANS vir die woord tussen hakies. Ons sien mooi bome deur die (window).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "venster",
    marking_notes: "Memo: venster/ruit/vensters/ruite (aanvaar spelling van fonetiese uitspraak).",
    steps: [
      st("Watter Afrikaanse woord is korrek?", ["gordyn", "wenster", "vinster", "venster"], 3),
    ],
  },
  {
    number: "5", sub_number: "5.2.4",
    text: "Skryf die sin oor in die ONTKENNING. Die kinders se kamer is altyd deurmekaar.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Die kinders se kamer is nie altyd deurmekaar nie.",
    marking_notes: "Memo: enige EEN: Die kinders se kamer is nie altyd deurmekaar nie / Die kinders se kamer is nooit deurmekaar nie.",
    steps: [
      st("Watter sin is korrek in die ontkenning?", ["Die kinders se kamer is nie altyd deurmekaar.", "Die kinders se kamer is altyd nie deurmekaar nie.", "Die kinders se kamer nie is altyd deurmekaar nie.", "Die kinders se kamer is nie altyd deurmekaar nie."], 3),
    ],
  },
  {
    number: "5", sub_number: "5.2.5",
    text: "Skryf die HELE sin hieronder in die korrekte WOORDORDE. Die kinders pak (op die boekrak) (die boeke) (netjies).",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Die kinders pak die boeke netjies op die boekrak.",
    marking_notes: "Memo: Die kinders pak die boeke netjies op die boekrak. (Die hele sin moet in die korrekte woordorde geskryf word.)",
    steps: [
      st("Watter sin het die korrekte woordorde?", ["Die kinders pak op die boekrak die boeke netjies.", "Die kinders pak netjies die boeke op die boekrak.", "Die kinders pak die boeke op die boekrak netjies.", "Die kinders pak die boeke netjies op die boekrak."], 3),
    ],
  },
  {
    number: "5", sub_number: "5.2.6",
    text: "Gee die ALGEMENE NAAM (versamelnaam) wat mense vir die woorde tussen hakies gebruik. Terwyl die kinders lees, is hulle nie besig met (Facebook, Instagram of Twitter) nie.",
    marks: 1, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "sosiale media",
    marking_notes: "Memo: sosiale media / sosiale-media / sosiale netwerke / sosiale platforms.",
    steps: [
      st("Wat is die algemene naam vir Facebook, Instagram en Twitter?", ["rekenaarspeletjies", "selfoontoepassings", "sosiale media", "tegnologie-toerusting"], 2),
    ],
  },
];
