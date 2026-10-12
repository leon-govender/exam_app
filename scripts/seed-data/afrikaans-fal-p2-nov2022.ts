// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language, FAL) Paper 2 (Literature / Letterkunde), November 2022, National
// Senior Certificate. Source: official DBE combined question paper + marking
// guidelines (nasienriglyne) PDF, 76 pages — QP pages 1-40, memo pages 41-76
// (the memo's own "NASIENRIGLYNE" cover is PDF page 41; its own page numbers
// restart at 1) — downloaded from stanmorephysics.com (a public DBE
// past-paper mirror). The paper and memo are in Afrikaans and have a real
// text layer; page 39 (the "Boekmerk" poem, stanza layout) and pages 31, 33
// and 35 (Teks N, O, P line numbering) were also checked against page
// renders. Only the official DBE paper and memo were used.
//
// ============================ SCOPE (IMPORTANT) ============================
// The real P2 offers a CHOICE: the student answers TWO of four sections
// (A Roman, B Drama, C Kortverhale, D Gedigte), and within A and B picks ONE
// text (70 marks on exam day; cover page "PUNTE: 70, TYD: 2 1/2 uur"). This
// app has no "answer one of several" mechanism, so every seeded question is
// shown to the student. The student studies the drama "Fiela se Kind – Die
// Drama" and the novel title is unknown, so this file is DELIBERATELY SCOPED
// to:
//   - Section B (Drama): ONLY Question 7, Fiela se Kind – Die Drama (35
//     marks; Teks M and Teks N). Questions 5 (Poppie) and 6 (Paljas) are
//     NOT ingested.
//   - Section C (Kortverhale): BOTH short stories — Question 8.1 'Oom Dries
//     se sorge met Jantjie' (Felicia Goosen, Teks O, 18 marks) and 8.2 'Die
//     ballade van Robbie de Wee' (Deon Meyer, Teks P, 17 marks) = 35 marks.
//   - Section D (Gedigte): BOTH poems — 9.1 'Tien haikoes vir die
//     Vredefortkoepel' (Hans du Plessis, 18 marks) and 9.2 'Boekmerk'
//     (Marlise Joubert, 17 marks) = 35 marks.
//   - Section A (Roman, Questions 1-4): NOT ingested at all.
// Scoped total = 35 + 35 + 35 = 105 marks, MORE than the real 70-mark
// sitting. That is intentional: this is a practice bank. `paper.total_marks`
// is therefore 105 (verified against the per-question marks printed in the
// question paper and the memo's own [35] section totals); `duration_minutes`
// is the real exam's 150 (2 1/2 hours).
//
// =========================== GRADING APPROACH ==============================
// Per the user's standing preference EVERY question is stepped multiple
// choice (`steps: MarkingPointStep[]`): one step per mark-earning point, four
// options, the correct option taken from the memo, wrong options realistic
// Grade 12 misreadings (never another memo-accepted answer for that step).
// No `marking_points` are used anywhere in this file.
//   - Fill-in-the-blank paragraphs (7.1, 8.1.1, 9.1.5): one step per blank.
//   - "Noem DRIE/TWEE ..." questions (7.2, 7.13, 8.1.2, 9.2.2, 9.2.5): one
//     single-mark step per required item, each with its own correct item and
//     its own distractors.
//   - Matching columns (7.6, 8.1.3, 9.1.6): one step per row.
//   - Ordering questions (7.11, 8.2.1): four single-mark steps ("which event
//     came first / second / third / fourth"), since the memo awards one mark
//     per event on its correct position.
//   - Choose-from-brackets questions (e.g. 7.4, 7.14.1) are shown with four
//     options (the two bracketed words plus two realistic alternatives); the
//     original bracketed pair is kept in the question text.
//   - Two-sided questions the memo marks "1 mark per side" (7.16, 7.17,
//     8.2.3, 8.2.6, 8.2.7, 9.2.7) are two single-mark steps, one per side.
//   - Open "motiveer / hoekom dink jy / lewensles" items: the memo accepts
//     many answers (any ONE of a list); each is turned into a step whose
//     correct option is one memo-accepted answer (usually the first listed).
//
// Cognitive levels: this paper's memo does NOT print Barrett labels, so the
// four levels were assigned from the verbs: factual recall/quotation/fill-in
// = Literal; ordering/matching/listing = Reorganisation; explain/motivate/
// irony/tone/technique = Inference; opinion, lesson, author's purpose,
// "why do you think" = Evaluation.
//
// ============================ TEXTS / EXTRACTS =============================
// The extracts (Teks M, N, O, P) and both poems are printed IN FULL at the
// start of every sub-question's `text` that depends on them, because the app
// shows each question on its own and the student must be able to answer it.
// The exam view collapses newlines, so poem lines are separated by " / " and
// stanza/haiku breaks by " // ", and the paper's printed line numbers appear
// inline as [n] (for the prose extracts, at the end of the printed line the
// number sits on; for the poems, at the start of each line). No images were
// needed: nothing in this paper is a diagram or picture, so no files were
// created under public/question-images/.
//
// ============================== FLAG NOTES =================================
// FLAG 1 (contents-table marks): the paper's contents table lists 8.1 as 17,
//   8.2 as 18, 9.1 as 17 and 9.2 as 18; the questions themselves (and the
//   memo) sum to 8.1 = 18, 8.2 = 17, 9.1 = 18, 9.2 = 17 (each section = 35).
//   The question-level marks are used.
// FLAG 2 (7.6.2): the memo gives Selling = D "... se gesondheid het verder
//   verswak." Transcribed as printed (reads oddly against the story; not
//   changed).
// FLAG 3 (dependent "motiveer" marks): the memo only awards the motivation
//   (7.14.2, 8.2.5(b), 9.1.10(b), 9.2.3(b), 9.2.6(b)) if the preceding
//   choose-from-brackets answer is correct. The app grades steps
//   independently, so a student can earn the motivation step with a wrong
//   first step; noted in each marking_notes.
// FLAG 4 (8.2.6): the memo gives two ALTERNATIVE 2-mark answers (mutual
//   accusation OR disagreement about needing each other) and says "see the
//   general marking guidelines" (1 mark per side of a conflict). Rendered as
//   two single-mark steps, one per alternative statement, a deliberate
//   approximation of that rule (the student must recognise both).
// FLAG 5 (7.1.4): the memo accepts "volstruise/volstruisvere/vere"; the
//   option shows "volstruise".
// FLAG 6 (poem layout): the haikus are printed in two columns in the paper;
//   they are reproduced here in reading order 1-10 (Meteoriet, Wind, Water,
//   Grond, Boom, Mens, Wêrelderfenis, Besoedeling, Dankgebed, Tien), with
//   line numbers 1-30 as printed.
// FLAG 7 (7.11 / 8.2.1): the memo's correct order is transcribed as given.

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
  year: 2022,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 150,
  total_marks: 105,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2023/10/NSC-FAL-Afrikkans-Grade-12-November-2022-P2-and-Memo.pdf" as string | null,
};

export const examSchedule: { paperNumber: string; examType: "prelim" | "final"; examDate: string; startTime: string; durationMinutes: number; }[] = [];

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

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
}

/** Step whose correct option is inserted at index `pos` among the wrong options. */
function S(marks: number, description: string, correct: string, wrongs: string[], pos: number): MarkingPointStep {
  const options = [...wrongs];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}
/** Step with a fixed, already-ordered option list. */
function F(marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep {
  return { marks, description, options, correctIndex };
}

// ----- Texts shown to the student (see header: " / " = line break) -----
const TEKS_M = "TEKS M (Fiela se Kind – uittreksel): ELIAS: ... Ek is 'n vernielde man, ek was op niks na nie onder die grootvoete vertrap. Kyk hoe lyk ek. BOSWAGTER: Ek kom nie moeilikheid wegbring nie, ek bring net vir jou 'n boodskap van die magistraat op Knysna af. ELIAS: Magistraat? BOSWAGTER: Ja. Daar bestaan 'n groot moontlikheid dat jou seun wat die slag weggeraak het, gevind is. Lewend gevind is. ELIAS (probeer opstaan): Wat sê meneer daar? BOSWAGTER: Hulle het hom agter die berg in die Lange Kloof gekry. ELIAS: Meneer, jy praat 'n ding wat my kop nie wil vat nie, ek sit bedol. BOSWAGTER: Jy beter maar eers bedaard bly, Van Rooyen. Baie dinge dui daarop dat dit jou kind kan wees, maar die saak is nog nie uitgemaak nie. Dis hoekom die magistraat jou en jou vrou Vrydag op die dorp in die hof wil sien. ELIAS: Jy sê hulle het die kind in die Lange Kloof gekry? BOSWAGTER: Ja. By bruin mense. Hy is glo al nege jaar lank daar. ELIAS: Jy sê hulle het onse Lukas gekry? BOSWAGTER: Die moontlikheid lyk groot. ELIAS: Dit kan nie wees nie. Waar's hy nou, meneer? BOSWAGTER: Nog daar agter in die Kloof. Hulle laat hom môre haal. (Musiek op. Ligte uit en doof in. Toneel: voor FIELA se huis. Kinders besig op verhoog. FIELA kom uit die huis.)";

const TEKS_N = "TEKS N (Fiela se Kind – uittreksel): FIELA: Ek sê jou maar net wat jy te wagte kan wees. Ek en jy weet wie daardie bruinvrou is en ek sal sorg dat jy jou nie hoef te skaam nie. Ons moet vir jou laat huis bou en jy moet langsaan toe trek. BENJAMIN: Dit sou so maklik gewees het as ek vir Ma kon sê: Dankie, dan maak ons so en ek koop die grond by Ma, maar ek kan nie. [5] FIELA: Ek het jou gesê dit moenie vandag foeter nie. BENJAMIN: Wag nou, Ma. Ma het gesê ons gaan hierdie ding vandag klaar lospraat. Daar is iets wat Ma nie weet nie. FIELA: Wat? BENJAMIN: Ek het verlief geraak op my suster. Op Nina. [10] FIELA ('n koue gaan deur haar): Jou suster? BENJAMIN: Ja, Ma. FIELA: Hoe het dit dan gebeur, Benjamin? BENJAMIN: Dit het net gebeur, Ma. Ek het dit nie gesoek nie. FIELA: En sy? Wat van haar? [15] BENJAMIN: Sy weet dit nie, Ma. Ek is vir haar net 'n broer. (Pouse.) FIELA: As sy jou suster was, Benjamin, sou bloed bloed gekeer het. Die feit dat jy op haar verlief geraak het, is net nog 'n bewys dat ek reg had en hulle verkeerd. Maar my reg kan jou nie vandag van Lukas van Rooyen verlos nie. [19]";

const TEKS_O = "TEKS O ('Oom Dries se sorge met Jantjie' – Felicia Goosen, uittreksel): Die volgende oggend kom oom Dries eerste by die sloot aan en klouter teen die dig beboste wal af terwyl sy oë deurentyd soek of hy nie Jantjie se reste êrens sien nie. Die graaf en sak wat hy saamdra, is in sy pad en bly skuur-skuur teen sy sitvlak teen die steil wal af. Toe hy onder kom, rus hy eers 'n rukkie onder 'n bos. Dis toe dat hy duidelik die gekraak van takke hoor [5] asof iemand haastig van die wal af ondertoe klouter. Hy voel hoe sy hele lyf koud word. Hy kom regop en vat die graaf vas, gereed om wat ook al verskyn, met 'n swaai van die graaf stil te maak. Saggies sluip hy om die bos en bly half verskuil staan, elke spier oorgehaal, die graaf gelig, reg om te slaan. Êrens maak 'n brandwagbobbejaan alarm en 'n skaduwee val vlak voor sy [10] voete. Hy swaai die graaf met alle mag en skreeu uit volle bors ''Hiee-haa!'' Vir 'n gedeelte van 'n sekonde herken hy die skraal, geboë gestalte van oom Thys, sien hy hoe sy oë groot, rond geskrik, voor hom wegbuk toe die graaf se plat spitgedeelte hom voluit tussen die blaaie tref. Sy bruin stewels lig etlike sentimeters van die grond af op, hy trek deur die [15] lug en beland hande-viervoet in die stof. ''My maggies, Thys!'' ... [17]";

const TEKS_P = "TEKS P ('Die ballade van Robbie de Wee' – Deon Meyer, uittreksel): Ek weet nou, ek sal vir Robbie, die gans wat die goue eiers lê, moet keer. *** Hy maak die hotelkamer se deur oop. ''Len,'' sê hy, tegelyk verbaas en vol blydskap. Ek staan vir hom en kyk, na die engel-gesig, die deernisvolle oë. Ek kan maar net wonder wat hulle gesien en beleef het. Ek voel in die oomblik [5] weersin én 'n verterende empatie vir hom. Hy frons. ''Wat is verkeerd, Len?'' ''Ons moet praat, Robbie.'' Ek sien die proses, die begrip wat oor hom daal. 'n Tamheid wat sy gelaat [10] en sy lyf laat ineenkrimp. ''Kom in,'' sê hy sag. ''Nie hier nie, Robbie. Ons kan nie die kans waag nie.'' Ek lei hom na die hysbak, en dan op, na die hotel se dak. Hy kom gedwee saam, sy blik afgewend. Met 'n asembenemende Kaapstad en die sprankelende see as uitsig, sê hy, [15] ''Ek kan dit nie help nie, Len.'' ''Ek verstaan dit, Robbie.'' ''Ek huil. Ná elke keer.'' ''Het sy geweet, Robbie? Toe jou pa jou misbruik het?'' Hy kyk ver, na die horison. Hy knik, klein. Met woorde wat amper wegwaai [20] in die bergwind, sê hy: ''Toe sê sy, sy skiet hom vir my.'' Hy talm. ''Ek moes hom begrawe.'' ''Wat het jy met die vroue gedoen? Op Upington en Nelspruit en Kimberley?'' ''Ons het uitgery.'' [25]";

const GEDIG_HAIKOES = "GEDIG 'Tien haikoes vir die Vredefortkoepel' – Hans du Plessis (Uit: vonk@verse 2. Best Books, 2011): Meteoriet: [1] Deur die donker klief / [2] 'n klipvuis en klap lewe / [3] uit die aarde uit. // Wind: [4] 'n Asem jaag oor / [5] yslike nagte en vee / [6] ons winternis weg. // Water: [7] Jy maak so silwer / [8] sonder droë woorde sin / [9] wat my skoon verstom. // Grond: [10] Vang reën en son in / [11] die bakhand van jou lyf waar / [12] lewe kliphart klop. // Boom: [13] Veerlig dwarrel herfs / [14] van kil takke los en broei / [15] nog 'n lente uit. // Mens: [16] Toe staan stof uit stof / [17] en oorheers die aarde op / [18] grond van sy bestaan. // Wêrelderfenis: [19] En ons koepel skeur / [20] al langs perforasies van / [21] mens-dom middeldeur. // Besoedeling: [22] Nou moet dier en duif / [23] hees van die rook en roet vir / [24] byl en treksaag boet. // Dankgebed: [25] Heer, ons paaie lê / [26] uitgeteer oor brûe met / [27] water onderdeur. // Tien: [28] Vuis van swael en vuur / [29] gaan duskant ons Groot Ekskuus / [30] weer kom asem haal.";

const GEDIG_BOEKMERK = "GEDIG 'Boekmerk' – Marlise Joubert (Uit: vonk@verse 2. Best Books, 2011): [1] kinders / [2] met wange soos mossies / [3] wat teen elke oggend stoei / [4] hande altyd woerende vlerke / [5] elke lyfie 'n seilende gesang – / [6] vlak bo die waterspieël / [7] van 'n klipvloergang // [8] vlytig stort die druppels klank / [9] oor haar uit totdat sy verbaas / [10] die reuk van bittersoet jasmyn / [11] uit haar skooljare proe / [12] waar sy ook kon mor / [13] en protesteer: // [14] waarom is alles altyd ver / [15] waarom is alles altyd hier / [16] waarom moet ek leer / [17] van optel aftrek deel / [18] van dooie digters / [19] uit die toentertyd / [20] en watter land sit waar / [21] en waarom draai die son // [22] toe maak sy die dag weer oor – / [23] met elke skoolklok werk sy / [24] namens mossiekind: // [25] kom ons pars die wind / [26] met wange soos soldaatjies // [27] totdat elkeen net die geur / [28] van jasmyn kan boekmerk / [29] teen die onheil van ons / [30] ellelange reis";

function Q(
  number: string,
  sub: string,
  ctx: string,
  qtext: string,
  marks: number,
  topicKey: string,
  cognitiveLevelName: string,
  model_answer: string,
  marking_notes: string,
  steps: MarkingPointStep[],
): QuestionSeed {
  return {
    number,
    sub_number: sub,
    text: `${ctx} — VRAAG ${sub}: ${qtext}`,
    marks,
    topicKey,
    cognitiveLevelName,
    model_answer,
    marking_notes,
    steps,
  };
}

const FIELA = "drama-fiela";
const STORY = "short-stories";
const POEM = "poetry";

export const questions: QuestionSeed[] = [
  // ======================= AFDELING B: DRAMA (35) =======================
  // VRAAG 7: FIELA SE KIND – DIE DRAMA – Dalene Matthee (QP p29-32, memo p64-69 of the PDF)
  Q("7", "7.1.1", TEKS_M,
    "Voltooi die paragraaf feitelik korrek: Die Goewerment het die twee sensusmanne gestuur om die mense te gaan (7.1.1) ... Watter woord pas by 7.1.1?",
    1, FIELA, "Literal", "tel.", "Accept: tel.",
    [S(1, "7.1.1 Die sensusmanne is gestuur om die mense te gaan ...", "tel", ["ondervra", "opvoed", "belas"], 0)]),
  Q("7", "7.1.2", TEKS_M,
    "Voltooi die paragraaf feitelik korrek: (7.1.2) ... en Fiela het vir die twee sensusmanne die inligting oor die Komoeties gegee. Watter naam pas by 7.1.2?",
    1, FIELA, "Literal", "Selling.", "Accept: Selling.",
    [S(1, "7.1.2 Wie het saam met Fiela die inligting gegee?", "Selling", ["Tollie", "Dawid", "Elias"], 2)]),
  Q("7", "7.1.3", TEKS_M,
    "Voltooi die paragraaf feitelik korrek: Die Komoeties het al jare lank op die plaas, (7.1.3) ..., gewoon. Watter naam pas by 7.1.3?",
    1, FIELA, "Literal", "Wolwekraal.", "Accept: Wolwekraal.",
    [S(1, "7.1.3 Naam van die plaas waar die Komoeties gewoon het", "Wolwekraal", ["Laghaanskraal", "Rooiplaas", "Groot Kloof"], 1)]),
  Q("7", "7.1.4", TEKS_M,
    "Voltooi die paragraaf feitelik korrek: Hulle het geld verdien deur met groente, skape, mielies, koring, 'n melkbok en (7.1.4) ... te boer. Watter woord pas by 7.1.4?",
    1, FIELA, "Literal", "volstruise/volstruisvere/vere.", "Memo: volstruise/volstruisvere/vere (see FLAG 5).",
    [S(1, "7.1.4 Waarmee het die Komoeties ook geboer?", "volstruise", ["perde", "varke", "beeste"], 3)]),
  Q("7", "7.2", TEKS_M,
    "Die sensusmanne het die wit kind by die bruin mense gesien en vrae oor die kind gevra. Noem DRIE redes wat Fiela vir die sensusmanne gegee het waarom Benjamin nie die Van Rooyens se verlore seun kon wees nie. (Kies by elke stap een rede wat Fiela gegee het.)",
    3, FIELA, "Reorganisation",
    "Any THREE: daar was nie 'n pad nie; dit was baie bergagtig; 'n klein kind sou nie alleen oor die berge kon loop nie; die kind was net 3 jaar oud; die kind was skoon en netjies.",
    "Memo: any THREE or similar. Each step carries one accepted reason; distractors are not memo reasons.",
    [
      S(1, "Rede 1: gee die rede wat met die pad/terrein te doen het", "Daar was nie 'n pad na die Bos toe nie.", ["Die pad was met sneeu toegesak.", "Die Boswagter het die pad gesluit.", "Die brug oor die rivier was weggespoel."], 0),
      S(1, "Rede 2: gee die rede wat met die kind se ouderdom te doen het", "Die kind was net 3 jaar oud.", ["Die kind was al sewe jaar oud en te groot om gedra te word.", "Die kind was 'n baba van enkele maande.", "Die kind was al ouer as Nina."], 2),
      S(1, "Rede 3: gee die rede wat met die kind se versorging te doen het", "Die kind was skoon en netjies.", ["Die kind was maer en deur 'n klip verwond.", "Die kind het swak gekleed rondgeloop.", "Die kind het net Afrikaans met 'n Boslafrikaanse aksent gepraat."], 1),
    ]),
  Q("7", "7.3", TEKS_M,
    "Kies die KORREKTE antwoord. Elias het gedink dat die Boswagter met hom kom praat het omdat ... A hy sy jong kinders gedwing het om hard te werk. B hy grootvoete gejag het sonder dat hy 'n lisensie gehad het. C iemand gaan kla het dat hy sy vrou en kinders sleg behandel het. D die Boswagter sy handbyl, kortsaag en osrieme in die Bos gekry het.",
    1, FIELA, "Inference", "B — hy grootvoete gejag het sonder dat hy 'n lisensie gehad het.", "Accept B only.",
    [F(1, "Waarom het Elias gedink die Boswagter het met hom kom praat?", ["hy sy jong kinders gedwing het om hard te werk.", "hy grootvoete gejag het sonder dat hy 'n lisensie gehad het.", "iemand gaan kla het dat hy sy vrou en kinders sleg behandel het.", "die Boswagter sy handbyl, kortsaag en osrieme in die Bos gekry het."], 1)]),
  Q("7", "7.4", TEKS_M,
    "Kies die KORREKTE antwoord uit dié tussen hakies. Barta is die Vrydag hof toe. Daar het Lange haar (gesoebat/gemanipuleer) om die kind met die blou hempie as Lukas te identifiseer.",
    1, FIELA, "Literal", "gemanipuleer.", "Accept: gemanipuleer.",
    [F(1, "Wat het Lange met Barta gedoen in die hof?", ["gesoebat", "gedreig", "gemanipuleer", "beveel"], 2)]),
  Q("7", "7.5", TEKS_M,
    "Benjamin het oor en oor vir die magistraat gevra of hy huis toe kon gaan. Hoe sluit hierdie situasie by die titel van die drama aan?",
    1, FIELA, "Inference", "Die feit dat Benjamin huis toe wou gaan, bevestig dat hy glo hy is Fiela se kind.", "Memo: any ONE (e.g. he believes he is Fiela's child; Fiela was the only mother he knew; he kept saying Fiela is his mother).",
    [S(1, "Hoe sluit dit by die titel 'Fiela se Kind' aan?", "Dit bevestig dat Benjamin glo hy is Fiela se kind.", ["Dit wys dat Fiela hom nooit wou laat gaan nie.", "Dit wys dat Benjamin bang was vir die magistraat.", "Dit wys dat Benjamin die Bos as sy tuiste beskou het."], 0)]),
  Q("7", "7.6.1", TEKS_M,
    "Barta se besluit om Lukas as haar seun te herken, het baie mense se lewens verander. Pas die gevolg in KOLOM B by die karakter in KOLOM A: 7.6.1 Fiela.",
    1, FIELA, "Reorganisation", "E — ... moes aanvaar wat ander oor hulle lewens besluit het.", "Accept E only.",
    [F(1, "Watter gevolg pas by Fiela?", ["... het met skuldgevoelens saamgeleef.", "... kon meer hout aan die houtkopers verkoop.", "... se gesondheid het verder verswak.", "... moes aanvaar wat ander oor hulle lewens besluit het."], 3)]),
  Q("7", "7.6.2", TEKS_M,
    "Barta se besluit om Lukas as haar seun te herken, het baie mense se lewens verander. Pas die gevolg in KOLOM B by die karakter in KOLOM A: 7.6.2 Selling.",
    1, FIELA, "Reorganisation", "D — ... se gesondheid het verder verswak.", "Accept D only (transcribed as printed; see FLAG 2).",
    [F(1, "Watter gevolg pas by Selling?", ["... kon die mooi dinge in die Bos met iemand anders deel.", "... se gesondheid het verder verswak.", "... het met skuldgevoelens saamgeleef.", "... kon meer hout aan die houtkopers verkoop."], 1)]),
  Q("7", "7.6.3", TEKS_M,
    "Barta se besluit om Lukas as haar seun te herken, het baie mense se lewens verander. Pas die gevolg in KOLOM B by die karakter in KOLOM A: 7.6.3 Barta.",
    1, FIELA, "Reorganisation", "A — ... het met skuldgevoelens saamgeleef.", "Accept A only.",
    [F(1, "Watter gevolg pas by Barta?", ["... het met skuldgevoelens saamgeleef.", "... moes aanvaar wat ander oor hulle lewens besluit het.", "... kon meer hout aan die houtkopers verkoop.", "... kon die mooi dinge in die Bos met iemand anders deel."], 0)]),
  Q("7", "7.6.4", TEKS_M,
    "Barta se besluit om Lukas as haar seun te herken, het baie mense se lewens verander. Pas die gevolg in KOLOM B by die karakter in KOLOM A: 7.6.4 Nina.",
    1, FIELA, "Reorganisation", "C — ... kon die mooi dinge in die Bos met iemand anders deel.", "Accept C only.",
    [F(1, "Watter gevolg pas by Nina?", ["... se gesondheid het verder verswak.", "... het met skuldgevoelens saamgeleef.", "... moes aanvaar wat ander oor hulle lewens besluit het.", "... kon die mooi dinge in die Bos met iemand anders deel."], 3)]),
  Q("7", "7.7", TEKS_M,
    "Benjamin wou nie aanvaar dat hy as Lukas vir altyd in die Bos moes bly nie. Sê waarom hierdie stelling WAAR is.",
    1, FIELA, "Inference", "Hy het in sy hart bly glo dat hy 'n Komoetie is (or any ONE similar memo answer).", "Memo: any ONE (e.g. he still saw himself as Benjamin; refused to call Elias and Barta Pa and Ma; tried to escape the Bos; bribed Nina with 5 shillings; told Nina Fiela is his mother).",
    [S(1, "Waarom is die stelling WAAR?", "Hy het in sy hart bly glo dat hy 'n Komoetie is.", ["Hy het dadelik gereageer wanneer iemand hom Lukas noem.", "Hy was bang dat die Bos te ver van die see af was.", "Hy het Elias as sy pa aanvaar, maar Barta nie."], 3)]),
  Q("7", "7.8", TEKS_M,
    "Motiveer waarom 'n mens kan sê dat dit tot Elias se voordeel was om Lukas by hulle te hê.",
    1, FIELA, "Inference", "Elias het ekstra hulp gehad; hy kon meer balke saag en verkoop/meer geld verdien.", "Memo: any ONE (extra help; more beams sawn and sold; Lukas taught Nina to read and write so she could find work in town).",
    [S(1, "Hoe was dit tot Elias se voordeel?", "Elias het ekstra hulp gehad en kon meer balke saag en verkoop.", ["Lukas het Elias se skuld by die Boswagter betaal.", "Lukas het Elias se drankprobleem laat ophou.", "Lukas het Elias leer lees en skryf."], 1)]),
  Q("7", "7.9", TEKS_M,
    "Waarom kan 'n mens sê dat dit goed was vir Nina se toekoms dat Lukas wel Bos toe gekom het?",
    1, FIELA, "Inference", "Nina het opgevoed geraak / hy het haar leer lees en skryf (or any ONE similar memo answer).", "Memo: any ONE (encouraged her to leave Elias's bad treatment; met Miss Weatherbury; taught her to read and write; she could earn her own money; she fell in love with him).",
    [S(1, "Hoekom was Lukas se koms goed vir Nina se toekoms?", "Hy het haar leer lees en skryf, sodat sy opgevoed geraak het.", ["Hy het Elias oortuig om haar na 'n skool te stuur.", "Hy het vir Nina grond by Fiela gekoop.", "Hy het haar gedwing om uit die Bos te trek en by Fiela te gaan bly."], 2)]),
  Q("7", "7.10", TEKS_M,
    "Waarom kan jy verstaan hoekom Barta besluit het om Benjamin teen Elias te beskerm?",
    1, FIELA, "Inference", "As ma wou sy die kind beskerm / sy het jammer gevoel vir hom, want hy was so maer.", "Memo: any ONE (wanted to protect him as a mother; knew it was not her child; afraid of trouble if the magistrate saw him beaten; felt sorry for him; knew how cruel Elias was).",
    [S(1, "Waarom het Barta Benjamin teen Elias beskerm?", "As ma wou sy die kind beskerm, want hy was so maer en sy het jammer gevoel vir hom.", ["Sy was bang Elias sou die kind weer by Fiela gaan sit.", "Sy het vir Fiela belowe dat sy hom sou beskerm.", "Sy wou hê Benjamin moes by die houtkopers gaan werk."], 3)]),
  Q("7", "7.11", TEKS_N,
    "Plaas die volgende vier gebeure in die korrekte VOLGORDE: Nina het die nuus gebring dat Dawid dood is; Mister Benn het vir Lukas werk in die loodsboot gegee; Lukas het werk by Kaliel September vir kos en blyplek gekry; Miss Weatherbury het weer vir Nina werk gegee nadat sy in die Bos was.",
    4, FIELA, "Reorganisation",
    "1 Lukas het werk by Kaliel September vir kos en blyplek gekry; 2 Miss Weatherbury het weer vir Nina werk gegee nadat sy in die Bos was; 3 Nina het die nuus gebring dat Dawid dood is; 4 Mister Benn het vir Lukas werk in die loodsboot gegee.",
    "One mark for each event on its correct position (4 single-mark steps).",
    [
      F(1, "Watter gebeurtenis het EERSTE plaasgevind?", ["Nina het die nuus gebring dat Dawid dood is.", "Mister Benn het vir Lukas werk in die loodsboot gegee.", "Lukas het werk by Kaliel September vir kos en blyplek gekry.", "Miss Weatherbury het weer vir Nina werk gegee nadat sy in die Bos was."], 2),
      F(1, "Watter gebeurtenis het as TWEEDE plaasgevind?", ["Nina het die nuus gebring dat Dawid dood is.", "Mister Benn het vir Lukas werk in die loodsboot gegee.", "Lukas het werk by Kaliel September vir kos en blyplek gekry.", "Miss Weatherbury het weer vir Nina werk gegee nadat sy in die Bos was."], 3),
      F(1, "Watter gebeurtenis het as DERDE plaasgevind?", ["Nina het die nuus gebring dat Dawid dood is.", "Mister Benn het vir Lukas werk in die loodsboot gegee.", "Lukas het werk by Kaliel September vir kos en blyplek gekry.", "Miss Weatherbury het weer vir Nina werk gegee nadat sy in die Bos was."], 0),
      F(1, "Watter gebeurtenis het LAASTE plaasgevind?", ["Nina het die nuus gebring dat Dawid dood is.", "Mister Benn het vir Lukas werk in die loodsboot gegee.", "Lukas het werk by Kaliel September vir kos en blyplek gekry.", "Miss Weatherbury het weer vir Nina werk gegee nadat sy in die Bos was."], 1),
    ]),
  Q("7", "7.12", TEKS_N,
    "''... ons gaan hierdie ding vandag klaar lospraat.'' (Reël 7) Wat bedoel Benjamin met hierdie woorde?",
    1, FIELA, "Inference", "Hulle moes die saak uitpraat/deurpraat; reguit met mekaar oor die waarheid praat.", "Memo: any ONE similar answer (not 'bespreek').",
    [S(1, "Wat bedoel Benjamin met 'klaar lospraat'?", "Hulle moes die saak uitpraat en reguit oor die waarheid met mekaar praat.", ["Hulle moes besluit wie die grond sou kry.", "Hy wou Fiela se aanbod van 'n huis finaal weier en wegtrek.", "Hulle moes besluit of Benjamin in die Bos sou gaan woon."], 1)]),
  Q("7", "7.13", TEKS_N,
    "Fiela het vir Benjamin die Laghaanse se grond gekoop. Verduidelik waarom Fiela dit vir Benjamin gedoen het. Gee TWEE redes. (Kies by elke stap een rede.)",
    2, FIELA, "Inference",
    "Any TWO: it gave him a chance to stand on his own feet; he could be financially independent; he need not be ashamed; it gave him an identity/belonging; showed how much she loved him; etc.",
    "Memo: any TWO or similar. Each step carries one accepted reason; distractors are not memo reasons.",
    [
      S(1, "Rede 1: wat sou die grond vir Benjamin se toekoms beteken?", "Dit sou Benjamin die kans gee om op sy eie voete te staan en vir homself te sorg.", ["Dit sou beteken dat hy die grond kon verhuur en nooit hoef te werk nie.", "Sy wou die Laghaanse straf deur sy grond te neem.", "Die grond was te klein vir haar eie kinders."], 2),
      S(1, "Rede 2: wat sou die grond vir Benjamin se identiteit beteken?", "Hy sou hom nie hoef te skaam dat 'n bruinvrou hom grootgemaak het nie.", ["Sy wou hê Benjamin moes die grond aan Elias verkoop.", "Dawid het in sy testament gevra dat Benjamin die grond kry.", "Sy wou hê Benjamin moes Wolwekraal vir Tollie bestuur."], 0),
    ]),
  Q("7", "7.14.1", TEKS_N,
    "In reël 11 lees ons dat daar 'n ''koue'' deur Fiela gegaan het. Kies die KORREKTE antwoord uit dié tussen hakies: ''koue'' word hier (letterlik/figuurlik) gebruik.",
    1, FIELA, "Inference", "figuurlik.", "Accept: figuurlik.",
    [F(1, "Hoe word 'koue' hier gebruik?", ["letterlik", "ironies", "figuurlik", "idiomaties"], 2)]),
  Q("7", "7.14.2", TEKS_N,
    "Motiveer jou antwoord op VRAAG 7.14.1 (dat ''koue'' in reël 11 figuurlik gebruik word).",
    1, FIELA, "Inference", "Fiela het geskrik/was bang/verbaas/geskok.", "Memo: any ONE (e.g. she was shocked, worried or uncertain; did not expect Benjamin to fall in love with Nina). The memo awards this mark only if 7.14.1 is correct (see FLAG 3).",
    [S(1, "Wat dui die 'koue' by Fiela aan?", "Fiela het geskrik en was geskok, want sy het nie verwag Benjamin sou op Nina verlief raak nie.", ["Fiela was kwaad omdat Benjamin nie die grond wou aanneem nie.", "Fiela was verlig omdat Benjamin uiteindelik sy gevoelens gedeel het.", "Fiela was bly omdat Benjamin 'n meisie gevind het."], 0)]),
  Q("7", "7.15", TEKS_N,
    "Kies die KORREKTE antwoord. ''Maar my reg kan jou nie vandag van Lukas van Rooyen verlos nie.'' (Reël 19) Hiermee bedoel Fiela dat ... A sy die hele tyd verkeerd was. B sy nie Lukas se van kon verander nie. C Benjamin die antwoord in die Bos moes gaan soek. D Benjamin die enigste een is wat regtig kon besluit wie hy is.",
    1, FIELA, "Inference", "C — Benjamin die antwoord in die Bos moes gaan soek.", "Accept C only.",
    [F(1, "Wat bedoel Fiela?", ["sy die hele tyd verkeerd was.", "sy nie Lukas se van kon verander nie.", "Benjamin die antwoord in die Bos moes gaan soek.", "Benjamin die enigste een is wat regtig kon besluit wie hy is."], 2)]),
  Q("7", "7.16", TEKS_N,
    "Hoe sluit die krisis wat Benjamin in hierdie uittreksel ervaar, by Barta se innerlike konflik oor die waarheid aan? Jy moet na Benjamin se krisis EN Barta se innerlike konflik verwys. (Een stap vir elke kant.)",
    2, FIELA, "Inference",
    "Benjamin's crisis concerned his identity/who he really is (he fell in love with Nina). Barta's inner conflict concerned the lie about the child: she knew the truth but did not know whether to tell it / felt guilty because Benjamin struggled with his identity.",
    "Memo: 1 mark per side (see general marking guidelines).",
    [
      S(1, "Benjamin se krisis", "Sy krisis gaan oor sy identiteit/wie hy regtig is, omdat hy op Nina verlief geraak het.", ["Sy krisis gaan oor geld, want hy kon nie die grond koop nie.", "Sy krisis is dat Nina hom afgekeur het.", "Sy krisis is dat Fiela hom wou wegstuur."], 1),
      S(1, "Barta se innerlike konflik", "Sy het die waarheid geken, maar nie geweet of sy dit moes sê nie, en het skuldig gevoel oor Benjamin se stryd.", ["Sy was onseker of sy Elias moes verlaat.", "Sy het getwyfel of Fiela hom regtig goed grootgemaak het.", "Sy het gesukkel om al haar eie kinders te versorg."], 3),
    ]),
  Q("7", "7.17", TEKS_N,
    "Waarom is dit ironies dat Elias so geskok was toe hy uitvind dat Barta in die hof gelieg het? (Een stap vir elke kant van die ironie.)",
    2, FIELA, "Inference",
    "Elias did many wrong things himself/lied to the Boswagter about Lukas being with them, but was now shocked that Barta lied/was sly.",
    "Memo: any ONE of the listed two-sided ironies (1 mark per side).",
    [
      S(1, "Elias se eie gedrag", "Elias het self baie verkeerde dinge gedoen en vir die Boswagter oor Lukas gelieg.", ["Elias was altyd eerlik teenoor die magistraat.", "Elias het die hof gehelp deur die waarheid te vertel.", "Elias het Lukas teen die Boswagter beskerm."], 2),
      S(1, "Elias se reaksie", "Hy was geskok dat Barta ook gelieg het/skelm was.", ["Hy was trots dat Barta vir die kind opgekom het.", "Hy was verlig omdat die waarheid uiteindelik uitgekom het.", "Hy was bang dat die magistraat hom sou straf."], 0),
    ]),
  Q("7", "7.18", TEKS_N,
    "Lees weer die uittreksel. Waarom kan ons sê dat Fiela in hierdie situasie vir Benjamin goeie raad gegee het?",
    1, FIELA, "Evaluation", "Fiela het hom in die regte rigting gestuur / die keuse aan hom oorgelaat.", "Memo: any ONE (right direction; left the choice to him; made him confront Barta; helped him discover his identity).",
    [S(1, "Waarom was Fiela se raad goed?", "Sy het die besluit aan hom oorgelaat en hom in die regte rigting gestuur.", ["Sy het vir hom besluit dat hy by die Van Rooyens moes bly.", "Sy het hom verbied om weer met Nina te praat.", "Sy het hom gesê om die Bos te verlaat en nooit terug te keer nie."], 1)]),
  Q("7", "7.19", TEKS_N,
    "Lees die hele uittreksel. Watter lewensles kan jy hier by Benjamin leer wat jou lewe beter kan maak?",
    1, FIELA, "Evaluation", "Ek kan leer dat ek altyd na die waarheid moet soek.", "Memo: any ONE (e.g. seek the truth; remember where I come from; follow my heart; seek help from the right people).",
    [S(1, "Watter lewensles leer jy by Benjamin?", "Ek moet altyd na die waarheid soek en my hart volg.", ["Ek moet my verlede vergeet en net aan die toekoms dink.", "Ek moet nooit ander se raad vra nie, want ek ken myself die beste.", "Ek moet my eie opinie op ander afdwing sodat hulle my respekteer."], 0)]),
  Q("7", "7.20", TEKS_N,
    "Vandat Benjamin by Fiela weggevat is, het hy met sy ware identiteit gesukkel. Wat, dink jy, is die skrywer se doel met jou, as leser, om dié probleem as fokuspunt in die drama te gebruik?",
    1, FIELA, "Evaluation", "Die skrywer se doel was om simpatie by my te wek oor die onreg/probleme in Benjamin se lewe (or any ONE similar memo answer).", "Memo: any ONE (e.g. create tension; keep my attention; evoke sympathy; show that love is not determined by skin colour; that we can choose who we want to be).",
    [S(1, "Wat is die skrywer se doel met die leser?", "Om simpatie by my te wek oor die onreg en probleme in Benjamin se lewe.", ["Om my te leer dat 'n kind altyd by sy biologiese ouers moet bly.", "Om te wys dat velkleur bepaal wie jou familie is.", "Om my te oortuig dat die Bos 'n beter plek as die see is."], 3)]),

  // ===================== AFDELING C: KORTVERHALE (35) =====================
  // VRAAG 8: SPIEËLBEELDE (QP p33-36, memo p70-73 of the PDF)
  // ---- 8.1 'Oom Dries se sorge met Jantjie' – Felicia Goosen (18) ----
  Q("8", "8.1.1(a)", TEKS_O,
    "Voltooi die paragraaf feitelik korrek: Hierdie kortverhaal het op oom Dries se plaas, (a) ..., afgespeel. Watter naam pas by (a)?",
    1, STORY, "Literal", "Driefontein.", "Accept: Driefontein.",
    [S(1, "(a) Naam van oom Dries se plaas", "Driefontein", ["Welgevonden", "Kleinfontein", "Rooiheuwel"], 2)]),
  Q("8", "8.1.1(b)", TEKS_O,
    "Voltooi die paragraaf feitelik korrek: Nadat (b) ... die bobbejaanwyfie doodgeskiet het, het oom Dries die klein bobbejaantjie huis toe gevat. Wie pas by (b)?",
    1, STORY, "Literal", "(Groot) Dawid.", "Accept: (Groot) Dawid.",
    [S(1, "(b) Wie het die bobbejaanwyfie doodgeskiet?", "(Groot) Dawid", ["oom Thysie", "Abraham", "Sofie"], 1)]),
  Q("8", "8.1.1(c)", TEKS_O,
    "Voltooi die paragraaf feitelik korrek: Oom Dries het vir hom (c) ... gegee om te drink. Watter woord pas by (c)?",
    1, STORY, "Literal", "(warm) melk.", "Accept: (warm) melk.",
    [S(1, "(c) Wat het oom Dries die bobbejaantjie gegee om te drink?", "(warm) melk", ["water", "tee", "kondensmelk"], 0)]),
  Q("8", "8.1.1(d)", TEKS_O,
    "Voltooi die paragraaf feitelik korrek: ... en 'n (d) ... uit 'n Ford-binneband gemaak om hom te vermaak. Watter woord pas by (d)?",
    1, STORY, "Literal", "swaai/skoppelmaai/speelding.", "Accept: swaai/skoppelmaai/speelding.",
    [S(1, "(d) Wat is uit die Ford-binneband gemaak?", "swaai", ["mandjie", "bed", "kar"], 3)]),
  Q("8", "8.1.2", TEKS_O,
    "Jantjie het grootgeword en was toe baie stout. Noem DRIE stoute dinge wat Jantjie vóór die middag in die boord gedoen het. (Kies by elke stap een stoute ding.)",
    3, STORY, "Reorganisation",
    "Any THREE: ruined fruit (guavas, dates); threw eggs of the chickens/broke eggs; bit cats dead; bit one of Abraham's children (calf); threw Sofie with his food bowl.",
    "Memo: any THREE or similar. Each step carries one accepted item; distractors are not memo items.",
    [
      S(1, "Stoute ding 1: wat het Jantjie met die vrugte gedoen?", "Hy het vrugte (koejawels, dadels) verwoes.", ["Hy het die vrugte aan die werkers uitgedeel.", "Hy het die vrugtebome uit die grond uitgeruk.", "Hy het die vrugte in die sloot gegooi."], 1),
      S(1, "Stoute ding 2: wat het Jantjie met die hoenders se eiers gedoen?", "Hy het die hoenders se eiers as teiken gebruik en stukkend gegooi.", ["Hy het die eiers uitgebroei.", "Hy het die eiers gesteel en na oom Thysie gebring.", "Hy het die hoenderhok se heining omgetrek."], 0),
      S(1, "Stoute ding 3: wat het Jantjie met die katte gedoen?", "Hy het katte doodgebyt.", ["Hy het die katte geleer om op die swaai te speel.", "Hy het die katte opgejaag tot in die dak.", "Hy het die katte se kos opgeëet."], 2),
    ]),
  Q("8", "8.1.3(a)", TEKS_O,
    "Pas die gevolg in KOLOM B by die gebeure in KOLOM A: (a) Jantjie het oom Dries se waterpyp stukkend gebyt. A Jantjie het aggressiewer geword. B Oom Dries kon nie tot rus kom nie. C Niemand anders wou oom Dries help nie. D Oom Dries het verstaan waarom oom Thysie Jantjie wou doodskiet. E Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie.",
    1, STORY, "Reorganisation", "E — Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie.", "Accept E only.",
    [F(1, "Gevolg van die stukkende waterpyp", ["Jantjie het aggressiewer geword.", "Oom Dries kon nie tot rus kom nie.", "Niemand anders wou oom Dries help nie.", "Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie."], 3)]),
  Q("8", "8.1.3(b)", TEKS_O,
    "Pas die gevolg in KOLOM B by die gebeure in KOLOM A: (b) Oom Dries het probeer om Jantjie tot bedaring te bring. A Jantjie het aggressiewer geword. B Oom Dries kon nie tot rus kom nie. C Niemand anders wou oom Dries help nie. D Oom Dries het verstaan waarom oom Thysie Jantjie wou doodskiet. E Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie.",
    1, STORY, "Reorganisation", "A — Jantjie het aggressiewer geword.", "Accept A only.",
    [F(1, "Gevolg toe oom Dries Jantjie probeer bedaar het", ["Jantjie het aggressiewer geword.", "Niemand anders wou oom Dries help nie.", "Oom Dries kon nie tot rus kom nie.", "Oom Dries het verstaan waarom oom Thysie Jantjie wou doodskiet."], 0)]),
  Q("8", "8.1.3(c)", TEKS_O,
    "Pas die gevolg in KOLOM B by die gebeure in KOLOM A: (c) Jantjie het oom Dries aan sy hand gebyt. A Jantjie het aggressiewer geword. B Oom Dries kon nie tot rus kom nie. C Niemand anders wou oom Dries help nie. D Oom Dries het verstaan waarom oom Thysie Jantjie wou doodskiet. E Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie.",
    1, STORY, "Reorganisation", "D — Oom Dries het verstaan waarom oom Thysie Jantjie wou doodskiet.", "Accept D only.",
    [F(1, "Gevolg toe Jantjie oom Dries gebyt het", ["Oom Dries kon nie tot rus kom nie.", "Niemand anders wou oom Dries help nie.", "Oom Dries het verstaan waarom oom Thysie Jantjie wou doodskiet.", "Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie."], 2)]),
  Q("8", "8.1.3(d)", TEKS_O,
    "Pas die gevolg in KOLOM B by die gebeure in KOLOM A: (d) Jantjie se karkas is langs die gruisgat gegooi. A Jantjie het aggressiewer geword. B Oom Dries kon nie tot rus kom nie. C Niemand anders wou oom Dries help nie. D Oom Dries het verstaan waarom oom Thysie Jantjie wou doodskiet. E Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie.",
    1, STORY, "Reorganisation", "B — Oom Dries kon nie tot rus kom nie.", "Accept B only.",
    [F(1, "Gevolg toe Jantjie se karkas langs die gruisgat gegooi is", ["Niemand anders wou oom Dries help nie.", "Oom Dries kon nie tot rus kom nie.", "Jantjie het aggressiewer geword.", "Oom Dries het besef dat hy Jantjie se stoutigheid nie langer kon duld nie."], 1)]),
  Q("8", "8.1.4", TEKS_O,
    "Kies die KORREKTE antwoord uit dié tussen hakies. ''Hy voel hoe sy hele lyf koud word.'' (Reël 6 en 7) Hieruit lei ons af dat oom Dries (bang/kwaad) was.",
    1, STORY, "Inference", "bang.", "Accept: bang.",
    [F(1, "Hoe voel oom Dries?", ["kwaad", "dankbaar", "bang", "verveeld"], 2)]),
  Q("8", "8.1.5", TEKS_O,
    "Kies die KORREKTE antwoord. ''My maggies, Thys!'' (Reël 17) Dit sê vir ons dat oom Dries ... A bly was om oom Thysie te sien. B gedink het dat oom Thysie 'n spook was. C nie verwag het om oom Thysie daar te sien nie. D bekommerd was oor oom Thysie wat in die nag alleen rondloop.",
    1, STORY, "Inference", "C — nie verwag het om oom Thysie daar te sien nie.", "Accept C only.",
    [F(1, "Wat sê 'My maggies, Thys!' vir ons?", ["bly was om oom Thysie te sien.", "gedink het dat oom Thysie 'n spook was.", "nie verwag het om oom Thysie daar te sien nie.", "bekommerd was oor oom Thysie wat in die nag alleen rondloop."], 2)]),
  Q("8", "8.1.6", TEKS_O,
    "Nadat oom Dries Jantjie se karkas onder die boom naby die huis begrawe het, het Jantjie tot rus gekom. Sê waarom hierdie stelling WAAR is.",
    1, STORY, "Inference", "Oom Dries het nooit weer iets van Jantjie 'gesien' nie.", "Memo: any ONE (never again 'saw' anything of Jantjie; did not see Jantjie at the swing again).",
    [S(1, "Waarom is die stelling WAAR?", "Oom Dries het Jantjie nooit weer by die swaai of elders 'gesien' nie.", ["Jantjie se spook het elke nag by die graf bly rondloop.", "Oom Dries het Jantjie se karkas weer uitgegrawe.", "Oom Thysie het Jantjie se spook van die plaas af verjaag."], 0)]),
  Q("8", "8.1.7(a)", TEKS_O,
    "Mense se inmenging in die natuur veroorsaak dikwels probleme. Waarom kan 'n mens sê dat oom Dries verkeerd opgetree het deur die klein bobbejaantjie huis toe te neem en groot te maak?",
    1, STORY, "Inference", "Bobbejane is van nature stout en vernielsugtig/word nie mak nie.", "Memo: any ONE (e.g. baboons cannot be pets; are naturally naughty; wild animals belong in nature; he should have known).",
    [S(1, "Waarom was oom Dries se optrede verkeerd?", "Bobbejane is van nature stout en kan nie mak troeteldiere wees nie.", ["Hy het nie genoeg kos vir Jantjie gegee nie.", "Hy het nie die plaasboere se toestemming gekry nie.", "Bobbejane eet net vrugte en kan nie by 'n huis oorleef nie."], 3)]),
  Q("8", "8.1.7(b)", TEKS_O,
    "Mense se inmenging in die natuur veroorsaak dikwels probleme. Watter les het jy uit oom Dries se optrede (VRAAG 8.1.7(a)) geleer?",
    1, STORY, "Evaluation", "Ek het geleer dat mense nooit seker kan wees hoe diere sal reageer nie / mense die natuur moet respekteer en nie moet inmeng nie.", "Memo: any ONE similar lesson (e.g. animals act on instinct; do not take wild animals from their habitat; respect nature).",
    [S(1, "Watter les leer jy?", "Mense moet die natuur respekteer en nie wilde diere uit hulle habitat neem nie.", ["Met genoeg liefde kan enige wilde dier heeltemal mak gemaak word.", "Slegs oom Thysie mag wilde diere versorg.", "Jong diere moet altyd van hulle ma's weggeneem word sodat hulle veilig is."], 1)]),
  Q("8", "8.1.8", TEKS_O,
    "Waarom was oom Thysie se besluit om Jantjie ná die dag in die boord dood te skiet, 'n verantwoordelike besluit?",
    1, STORY, "Inference", "Jantjie het nou die persoon aangeval wat vir hom gesorg het / het al stouter geraak / was gevaarlik.", "Memo: any ONE (attacked his carer; got worse; no control over him; could seriously hurt someone; Thysie saw Dries could not shoot him).",
    [S(1, "Waarom was die besluit verantwoordelik?", "Jantjie het al stouter geraak en nou die persoon aangeval wat vir hom gesorg het.", ["Jantjie was siek en moes uit sy lyding verlos word.", "Jantjie het begin om die plaasdiere te eet.", "Die munisipaliteit het gesê alle bobbejane moes doodgeskiet word."], 2)]),
  Q("8", "8.1.9", TEKS_O,
    "In hierdie verhaal is dit die skrywer se bedoeling om vir die leser te wys hoe die karakters op die bonatuurlike reageer. Hoe sou jy op Jantjie se spook reageer?",
    1, STORY, "Evaluation", "Ek sou geskrik het/bang gevoel het (want spoke maak my bang).", "Memo: any ONE similar (e.g. be scared/curious/run away; wonder if it was imagination; ignore it; try to shoot it like oom Thysie).",
    [S(1, "Hoe sou jy reageer?", "Ek sou geskrik het en bang gevoel het, want spoke maak my bang.", ["Ek sou die spook nader geroep het om saam te speel.", "Ek sou vir die polisie gaan sê dat die spook 'n misdadiger is.", "Ek sou die spook gevra het om my plaas te beskerm teen diewe."], 0)]),

  // ---- 8.2 'Die ballade van Robbie de Wee' – Deon Meyer (17) ----
  Q("8", "8.2.1", TEKS_P,
    "Plaas die volgende vier gebeure in die korrekte VOLGORDE: Len het op die internet gelees van verskeie meisies wat verdwyn het; Cybelene het Len aan Robbie voorgestel; Die ou mans op Amersfoort het Robbie se ware storie vir Len vertel; Sasha het in Robbie se hotelkamer gesterf.",
    4, STORY, "Reorganisation",
    "1 Cybelene het Len aan Robbie voorgestel; 2 Sasha het in Robbie se hotelkamer gesterf; 3 Len het op die internet gelees van verskeie meisies wat verdwyn het; 4 Die ou mans op Amersfoort het Robbie se ware storie vir Len vertel.",
    "One mark for each event on its correct position (4 single-mark steps).",
    [
      F(1, "Watter gebeurtenis het EERSTE plaasgevind?", ["Len het op die internet gelees van verskeie meisies wat verdwyn het.", "Cybelene het Len aan Robbie voorgestel.", "Die ou mans op Amersfoort het Robbie se ware storie vir Len vertel.", "Sasha het in Robbie se hotelkamer gesterf."], 1),
      F(1, "Watter gebeurtenis het as TWEEDE plaasgevind?", ["Len het op die internet gelees van verskeie meisies wat verdwyn het.", "Cybelene het Len aan Robbie voorgestel.", "Die ou mans op Amersfoort het Robbie se ware storie vir Len vertel.", "Sasha het in Robbie se hotelkamer gesterf."], 3),
      F(1, "Watter gebeurtenis het as DERDE plaasgevind?", ["Len het op die internet gelees van verskeie meisies wat verdwyn het.", "Cybelene het Len aan Robbie voorgestel.", "Die ou mans op Amersfoort het Robbie se ware storie vir Len vertel.", "Sasha het in Robbie se hotelkamer gesterf."], 0),
      F(1, "Watter gebeurtenis het LAASTE plaasgevind?", ["Len het op die internet gelees van verskeie meisies wat verdwyn het.", "Cybelene het Len aan Robbie voorgestel.", "Die ou mans op Amersfoort het Robbie se ware storie vir Len vertel.", "Sasha het in Robbie se hotelkamer gesterf."], 2),
    ]),
  Q("8", "8.2.2", TEKS_P,
    "Len beskryf Robbie as ''die gans wat die goue eiers lê''. (Reël 1) Wat bedoel Len hiermee?",
    1, STORY, "Inference", "Robbie was Len se bron van inkomste/het Len ryk gemaak.", "Memo: any ONE (the one who made Len earn money; his source of income; made Len rich/successful).",
    [S(1, "Wat bedoel Len met 'die gans wat die goue eiers lê'?", "Robbie was Len se bron van inkomste en het hom ryk gemaak.", ["Robbie was baie spaarsaam en het goud versamel.", "Robbie het gouddelwery as stokperdjie gehad.", "Robbie het Len se skuld afbetaal."], 1)]),
  Q("8", "8.2.3", TEKS_P,
    "''Ek voel in die oomblik weersin én 'n verterende empatie vir hom.'' (Reël 5 en 6) Verduidelik waarom Len in dieselfde oomblik weersin EN empatie vir Robbie gevoel het. (Een stap vir elke emosie.)",
    2, STORY, "Inference",
    "Weersin: Len knew Robbie had murdered several girls/acted wrongly. Empatie: Len found out Robbie had been abused/mistreated as a child (physically and sexually by his father).",
    "Memo: 1 mark per emotion explained.",
    [
      S(1, "Waarom weersin?", "Omdat hy geweet het dat Robbie verskeie meisies vermoor het.", ["Omdat Robbie hom oor geld gelieg het.", "Omdat Robbie sy kontrak wou kanselleer.", "Omdat Robbie sy musiek verwaarloos het."], 0),
      S(1, "Waarom empatie?", "Omdat hy uitgevind het Robbie is as kind deur sy pa mishandel/misbruik.", ["Omdat Robbie arm was en geen werk gehad het.", "Omdat Robbie se ma jonk gesterf het.", "Omdat die polisie vir Robbie gejag het."], 3),
    ]),
  Q("8", "8.2.4", TEKS_P,
    "Kies die KORREKTE antwoord. Na Len en Robbie se gesprek op die dak het Len besluit om ... A vir Robbie se ma te vertel wat Robbie gedoen het. B sy kontrak met Robbie te kanselleer. C Robbie te laat arresteer. D Robbie te vermoor.",
    1, STORY, "Literal", "D — Robbie te vermoor.", "Accept D only.",
    [F(1, "Waartoe het Len besluit?", ["vir Robbie se ma te vertel wat Robbie gedoen het.", "sy kontrak met Robbie te kanselleer.", "Robbie te laat arresteer.", "Robbie te vermoor."], 3)]),
  Q("8", "8.2.5(a)", TEKS_P,
    "Lees weer reëls 9 tot 24. Kies die KORREKTE antwoord uit dié tussen hakies: Die woordkeuse en kort sinne in hierdie reëls wys dat (daar spanning in Robbie opbou/Len ontevrede is met Robbie).",
    1, STORY, "Inference", "daar spanning in Robbie opbou.", "Accept: daar spanning in Robbie opbou.",
    [F(1, "Wat wys die woordkeuse en kort sinne?", ["Len ontevrede is met Robbie", "Robbie kwaad is vir Len", "Len onseker is oor sy plan", "daar spanning in Robbie opbou"], 3)]),
  Q("8", "8.2.5(b)", TEKS_P,
    "Motiveer jou antwoord op VRAAG 8.2.5(a) (dat daar spanning in Robbie opbou).",
    1, STORY, "Inference", "Len se beskrywing van Robbie se liggaamstaal (bv. tamheid; kom gedwee saam; lyf laat ineenkrimp).", "Memo: any ONE (Len's description of Robbie's body language; Robbie's soft way of speaking; certain words e.g. gedwee, klein). Awarded in the memo only if 8.2.5(a) is correct (see FLAG 3).",
    [S(1, "Hoe blyk die spanning in Robbie?", "Len beskryf Robbie se liggaamstaal: sy lyf krimp ineen en hy kom gedwee saam.", ["Robbie praat hard en aggressief met Len.", "Len gebruik lang, ingewikkelde sinne om Robbie se gevoelens te beskryf.", "Die asembenemende uitsig van Kaapstad ontspan Robbie."], 2)]),
  Q("8", "8.2.6", TEKS_P,
    "Aan die einde van die kortverhaal was daar uiterlike konflik tussen Len en Robbie. Verduidelik hierdie konflik. Verwys in jou antwoord na die laaste gesprek tussen Len en Robbie. (Kies by elke stap die korrekte stelling.)",
    2, STORY, "Inference",
    "Len and Robbie told each other that they knew wrong things about each other; OR Len and Robbie differed on whether they needed each other or not.",
    "Memo: either alternative earns 2 marks (see general marking guidelines). Rendered as two single-mark steps — FLAG 4.",
    [
      S(1, "Wat het hulle in die laaste gesprek vir mekaar gesê?", "Hulle het vir mekaar gesê dat hulle verkeerde dinge van mekaar geweet het.", ["Hulle het baklei oor Robbie se kontrak met 'n ander bestuurder.", "Hulle het gestry oor wie die liedjies geskryf het.", "Robbie het gedreig om Len by die polisie aan te gee."], 1),
      S(1, "Waaroor het hulle van mekaar verskil?", "Hulle het verskil oor of hulle mekaar nodig gehad het of nie.", ["Hulle het verskil oor of Robbie sy laaste CD moes vrystel.", "Hulle het verskil oor of Robbie weer na Upington moes gaan.", "Hulle het verskil oor of Len Robbie se geheim moes vergewe."], 0),
    ]),
  Q("8", "8.2.7", TEKS_P,
    "Waarom is dit ironies dat Robbie se laaste CD die topverkoper in die land was? (Een stap vir elke kant van die ironie.)",
    2, STORY, "Inference",
    "In his life Robbie was a struggling artist, but after his death his CD earned a lot of money; (or: Robbie gained nothing/is dead, but Len made a lot of money; Robbie got no recognition, but Len was praised by the media).",
    "Memo: any ONE of the listed two-sided ironies (1 mark per side).",
    [
      S(1, "Robbie se lewe", "In sy lewe was Robbie 'n sukkelende kunstenaar sonder erkenning.", ["In sy lewe was Robbie 'n baie ryk en gewilde kunstenaar.", "In sy lewe het Robbie al sy geld aan Len gegee.", "In sy lewe het Robbie sy eie CD's bemark."], 0),
      S(1, "Na Robbie se dood", "Na sy dood het sy CD baie geld verdien en het Len groot wins gemaak.", ["Na sy dood het sy CD swak verkoop omdat mense geskrik het.", "Na sy dood is sy CD verban weens die skandaal.", "Na sy dood het Robbie se familie al die wins ontvang."], 2),
    ]),
  Q("8", "8.2.8", TEKS_P,
    "Waarom kan 'n mens sê dat Len nie uit sy foute geleer het nie?",
    1, STORY, "Evaluation", "Hy het weer die verkeerde ding gedoen/weer mense te na gekom (hy het Robbie vermoor).", "Memo: any ONE (wrong thing again; killed Robbie; did not use his second chance well; decisions again from greed; lied to the media; learned not to be caught).",
    [S(1, "Waarom het Len nie uit sy foute geleer nie?", "Hy het weer die verkeerde ding gedoen en Robbie uit gierigheid vermoor.", ["Hy het Robbie se geheim by die polisie aangegee.", "Hy het ná Sasha se dood sy beroep verander.", "Hy het al die wins aan Robbie se ma gegee."], 3)]),
  Q("8", "8.2.9", TEKS_P,
    "Motiveer waarom 'n mens kan sê dat dit tot Len se voordeel was om depressie as rede vir Robbie se dood te gee.",
    1, STORY, "Inference", "Niemand sou Len van moord verdink het nie; almal sou gedink het dat Robbie selfdood gepleeg het.", "Memo: any ONE (nobody suspects Len; Len makes money from CD sales; other artists use Len's service).",
    [S(1, "Hoe was dit tot Len se voordeel?", "Niemand sou Len van moord verdink nie, want almal sou dink Robbie het selfdood gepleeg.", ["Dit het Len se kontrak met Robbie se ma bekragtig.", "Mense sou simpatie met Len hê en hom van Robbie se skuld vergewe.", "Dit sou die CD-verkope verlaag en Len belasting bespaar."], 1)]),
  Q("8", "8.2.10", TEKS_P,
    "Hoekom, dink jy, pas die titel by die inhoud van hierdie kortverhaal?",
    1, STORY, "Evaluation", "Die inhoud handel oor Robbie de Wee se lewe/lief en leed; ballades gaan oor die lief en leed van mense.", "Memo: any ONE (content is about Robbie's life/joy and sorrow; ballads tell of people's joy and sorrow; Robbie's life was like a ballad).",
    [S(1, "Hoekom pas die titel?", "Die inhoud handel oor Robbie se lief en leed, en ballades vertel van die lief en leed van mense.", ["Die verhaal speel in 'n ballroom af waar Robbie gesing het.", "Robbie het net ballades oor sy ma geskryf.", "Die titel verwys na die kitaar waarmee Robbie gespeel het."], 2)]),

  // ======================= AFDELING D: GEDIGTE (35) =======================
  // VRAAG 9: VERSKUNS VIR EERSTE ADDISIONELE TAAL (QP p37-40, memo p73-76 of the PDF)
  // ---- 9.1 'Tien haikoes vir die Vredefortkoepel' – Hans du Plessis (18) ----
  Q("9", "9.1.1", GEDIG_HAIKOES,
    "Op watter plek het die meteoriet waaroor hierdie gedig handel, geval?",
    1, POEM, "Literal", "Vredefort/Vrystaat.", "Accept: Vredefort/Vrystaat.",
    [S(1, "Waar het die meteoriet geval?", "Vredefort/Vrystaat", ["Pilanesberg", "die Karoo", "Magaliesberg"], 1)]),
  Q("9", "9.1.2", GEDIG_HAIKOES,
    "'n Haikoe is 'n Japannese digvorm. Noem EEN kenmerk van hierdie digvorm.",
    1, POEM, "Literal", "Dit het 'n 5-7-5 lettergreeppatroon / 3 reëls / geen vaste rympatroon.", "Memo: any ONE (no fixed rhyme; 17 syllables/5-7-5; simple form; 3 lines; appeals to emotions; usually about nature; says much with few words).",
    [S(1, "Kenmerk van 'n haikoe", "Dit het 'n 5-7-5 lettergreeppatroon.", ["Dit het 'n vaste rympatroon (abab).", "Dit bestaan uit vier reëls.", "Dit is 'n lang vertellende gedig."], 2)]),
  Q("9", "9.1.3", GEDIG_HAIKOES,
    "Skryf die personifikasie in haikoe 1 neer.",
    1, POEM, "Literal", "''klap lewe uit die aarde uit'' / ''klief 'n klipvuis''.", "Memo: any ONE of 'klap lewe uit die aarde uit', ''n klipvuis (en) klap lewe', 'klief 'n klipvuis'; 'klipvuis en klap' alone is NOT accepted.",
    [S(1, "Watter aanhaling is personifikasie?", "klap lewe uit die aarde uit", ["Deur die donker", "Meteoriet", "'n klipvuis en klap"], 0)]),
  Q("9", "9.1.4", GEDIG_HAIKOES,
    "Watter werkwoord word in haikoe 2 gebruik om te sê dat die wind waai?",
    1, POEM, "Literal", "''vee'' / ''jaag'' / ''vee weg''.", "Memo: any ONE of vee / vee weg / jaag.",
    [S(1, "Watter werkwoord sê die wind waai?", "vee", ["klop", "dwarrel", "vang"], 3)]),
  Q("9", "9.1.5(a)", GEDIG_HAIKOES,
    "Voltooi die paragraaf met woorde uit haikoe 3 en 4: Die water is (a) ... van kleur.",
    1, POEM, "Literal", "silwer.", "Accept: silwer.",
    [S(1, "(a) Van watter kleur is die water?", "silwer", ["blou", "skoon", "groen"], 2)]),
  Q("9", "9.1.5(b)", GEDIG_HAIKOES,
    "Voltooi die paragraaf met woorde uit haikoe 3 en 4: Die mens is (b) ... oor die water wat die aarde voed.",
    1, POEM, "Literal", "verstom/skoon verstom.", "Accept: verstom/skoon verstom.",
    [S(1, "(b) Hoe voel die mens oor die water?", "verstom", ["bang", "kwaad", "dankbaar"], 0)]),
  Q("9", "9.1.5(c)", GEDIG_HAIKOES,
    "Voltooi die paragraaf met woorde uit haikoe 3 en 4: ''Jou lyf'' in haikoe 4 verwys na die (c) ... wat die water opvang.",
    1, POEM, "Literal", "grond.", "Accept: grond.",
    [S(1, "(c) Waarna verwys 'jou lyf'?", "grond", ["boom", "wind", "meteoriet"], 1)]),
  Q("9", "9.1.5(d)", GEDIG_HAIKOES,
    "Voltooi die paragraaf met woorde uit haikoe 3 en 4: ... en (d) ... bring.",
    1, POEM, "Literal", "lewe.", "Accept: lewe.",
    [S(1, "(d) Wat bring die grond met die water en son voort?", "lewe", ["vrede", "droogte", "kleur"], 2)]),
  Q("9", "9.1.6(a)", GEDIG_HAIKOES,
    "Kies die begrip in KOLOM B wat by die aanhaling in KOLOM A pas: (a) ''Deur die donker''. A vergelyking B assonansie C alliterasie D metafoor",
    1, POEM, "Inference", "C — alliterasie.", "Accept C only.",
    [F(1, "Watter stylfiguur is 'Deur die donker'?", ["vergelyking", "assonansie", "alliterasie", "metafoor"], 2)]),
  Q("9", "9.1.6(b)", GEDIG_HAIKOES,
    "Kies die begrip in KOLOM B wat by die aanhaling in KOLOM A pas: (b) ''bakhand van jou lyf''. A vergelyking B assonansie C alliterasie D metafoor",
    1, POEM, "Inference", "D — metafoor.", "Accept D only.",
    [F(1, "Watter stylfiguur is 'bakhand van jou lyf'?", ["vergelyking", "assonansie", "alliterasie", "metafoor"], 3)]),
  Q("9", "9.1.6(c)", GEDIG_HAIKOES,
    "Kies die begrip in KOLOM B wat by die aanhaling in KOLOM A pas: (c) ''al langs''. A vergelyking B assonansie C alliterasie D metafoor",
    1, POEM, "Inference", "B — assonansie.", "Accept B only.",
    [F(1, "Watter stylfiguur is 'al langs'?", ["vergelyking", "assonansie", "alliterasie", "metafoor"], 1)]),
  Q("9", "9.1.7", GEDIG_HAIKOES,
    "Haal TWEE OPEENVOLGENDE woorde uit haikoe 5 aan wat aandui dat die bome se blare afval.",
    1, POEM, "Literal", "''veerlig dwarrel'' / ''takke los'' / ''dwarrel herfs'' / ''kil takke''.", "Memo: any ONE pair of two consecutive words.",
    [S(1, "Watter twee opeenvolgende woorde dui aan dat blare afval?", "veerlig dwarrel", ["nog 'n", "'n lente", "en broei"], 0)]),
  Q("9", "9.1.8", GEDIG_HAIKOES,
    "Watter woord in haikoe 6 sê vir ons dat die mens sy posisie op aarde misbruik?",
    1, POEM, "Literal", "''oorheers''.", "Accept one word only: oorheers.",
    [S(1, "Watter woord wys dat die mens sy posisie misbruik?", "oorheers", ["staan", "bestaan", "grond"], 2)]),
  Q("9", "9.1.9", GEDIG_HAIKOES,
    "Waarom kan 'n mens sê dat die opskrif van haikoe 7 in hierdie gedig gepas is?",
    1, POEM, "Inference", "Die haikoe verwys na die koepel, wat 'n wêrelderfenis(gebied) is.", "Memo: any ONE (refers to the dome, a world heritage site; 'Vredefortkoepel' in the title links to the heading of haiku 7).",
    [S(1, "Waarom is die opskrif 'Wêrelderfenis' gepas?", "Die haikoe verwys na die koepel, wat 'n wêrelderfenisgebied is wat bewaar word.", ["Die haikoe gaan oor wêreldoorloë wat die koepel verwoes het.", "Die haikoe verwys na die besoedeling van die koepel.", "Die haikoe verwys na die Wêreldbeker-sokkertoernooi."], 1)]),
  Q("9", "9.1.10(a)", GEDIG_HAIKOES,
    "Lees weer reël 24. Kies die KORREKTE antwoord uit dié tussen hakies: ''boet'' in reël 24 sê vir die leser dat die aarde deur die mens (verwoes/beskerm) word.",
    1, POEM, "Inference", "verwoes.", "Accept: verwoes.",
    [F(1, "Wat sê 'boet' vir die leser?", ["beskerm", "herstel", "vereer", "verwoes"], 3)]),
  Q("9", "9.1.10(b)", GEDIG_HAIKOES,
    "Motiveer jou antwoord op VRAAG 9.1.10(a) (dat die aarde deur die mens verwoes word).",
    1, POEM, "Inference", "Die mens gebruik byle en treksae om bome af te kap / vernietig die diere se habitat.", "Memo: any ONE (cuts down trees; more pollution/destruction; over-use of resources harms animals; animals get sick from smoke; earth suffers from development). Awarded in the memo only if 9.1.10(a) is correct (see FLAG 3).",
    [S(1, "Hoe blyk dit dat die aarde verwoes word?", "Die mens kap met byl en treksaag bome af en vernietig die diere se habitat.", ["Die mens gebruik byl en treksaag om skuilings vir diere te bou.", "Die diere gebruik die mens se byle om hulleself te beskerm.", "Die rook van veldbrande maak die mens bang vir diere."], 0)]),
  Q("9", "9.1.11", GEDIG_HAIKOES,
    "Kies die KORREKTE antwoord. Die inhoud van haikoe 9 is ..., want al sê die mens dankie, hou die mens aan om te vernietig. A verskonend B sarkasties C smekend D ironies",
    1, POEM, "Inference", "D — ironies.", "Accept D only.",
    [F(1, "Hoe is die inhoud van haikoe 9?", ["verskonend", "sarkasties", "smekend", "ironies"], 3)]),
  Q("9", "9.1.12", GEDIG_HAIKOES,
    "Watter les leer jy uit hierdie gedig?",
    1, POEM, "Evaluation", "Ek leer dat die mens die wêreld moet oppas/ontsag vir die natuur moet hê.", "Memo: any ONE similar lesson (no respect for nature; must look after the world; progress at nature's expense; will pay for destroying the earth; life is a cycle; life follows destruction).",
    [S(1, "Watter les leer jy?", "Die mens moet die aarde oppas en ontsag vir die natuur hê, anders bly niks vir die nageslag oor nie.", ["Die natuur sal altyd vanself herstel, ongeag wat die mens doen.", "Vooruitgang is belangriker as die natuur.", "Net 'n nuwe meteoriet kan die aarde red."], 2)]),

  // ---- 9.2 'Boekmerk' – Marlise Joubert (17) ----
  Q("9", "9.2.1", GEDIG_BOEKMERK,
    "Wie is die spreker in hierdie gedig?",
    1, POEM, "Literal", "Die onderwyser(es)/juffrou/die 'sy'.", "Accept: onderwyser(es)/juffrou/die 'sy'.",
    [S(1, "Wie is die spreker?", "Die onderwyseres (juffrou)", ["'n ouer van een van die kinders", "die skoolhoof", "'n leerder in graad 12"], 0)]),
  Q("9", "9.2.2", GEDIG_BOEKMERK,
    "Noem die DRIE dinge van kinders wat die spreker in strofe 1 beskryf. (Kies by elke stap een.)",
    3, POEM, "Literal", "Any THREE: wange; hande; lyfies/liggame; bewegings; kinders wil nie skool toe kom nie.", "Memo: any THREE or similar (verse lines may be quoted).",
    [
      S(1, "Ding 1: wat word van die kinders se wange gesê?", "Hulle wange is soos mossies.", ["Hulle wange is soos rose.", "Hulle wange is bleek van die koue.", "Hulle wange is nat van trane."], 1),
      S(1, "Ding 2: wat word van die kinders se hande gesê?", "Hulle hande is altyd woerende vlerke.", ["Hulle hande is gevou in gebed.", "Hulle hande is vas om hul boeke.", "Hulle hande is stil op die banke."], 2),
      S(1, "Ding 3: wat word van die kinders se lyfies gesê?", "Elke lyfie is 'n seilende gesang.", ["Hulle lyfies is swaar van moegheid.", "Hulle lyfies is so styf soos soldaatjies.", "Hulle lyfies is bang vir die skoolklok."], 0),
    ]),
  Q("9", "9.2.3(a)", GEDIG_BOEKMERK,
    "Lees reël 3. Kies die KORREKTE antwoord uit dié tussen hakies: ''stoei'' word hier (letterlik/figuurlik) gebruik.",
    1, POEM, "Inference", "figuurlik.", "Accept: figuurlik.",
    [F(1, "Hoe word 'stoei' gebruik?", ["letterlik", "ironies", "oordrewe", "figuurlik"], 3)]),
  Q("9", "9.2.3(b)", GEDIG_BOEKMERK,
    "Motiveer jou antwoord op VRAAG 9.2.3(a) (dat ''stoei'' figuurlik gebruik word).",
    1, POEM, "Inference", "Kinders sukkel om op te staan vir skool.", "Memo: any ONE (children struggle to get up for school; do not like going to school every day; parents struggle to get children out of bed). Awarded in the memo only if 9.2.3(a) is correct (see FLAG 3).",
    [S(1, "Waarom is 'stoei' figuurlik?", "Kinders sukkel om elke oggend uit die bed op te staan en skool toe te gaan.", ["Kinders baklei werklik elke oggend met mekaar.", "Kinders speel graag in die skoolgang.", "Die onderwyseres moet elke oggend fisiek met die kinders stoei."], 2)]),
  Q("9", "9.2.4", GEDIG_BOEKMERK,
    "In strofe 2 is die spreker verbaas dat hierdie kinders so anders is as toe sy op skool was. Sê waarom hierdie stelling ONWAAR is.",
    1, POEM, "Inference", "Die kinders doen presies dieselfde dinge/kla oor dieselfde dinge soos toe sy op skool was ('mor en protesteer').", "Memo: any ONE (the children do the same/complain about the same things; the word 'ook' says they were the same).",
    [S(1, "Waarom is die stelling ONWAAR?", "Die kinders doen presies dieselfde as toe sy op skool was: sy het ook gemor en geprotesteer.", ["Die kinders se vrae oor skool is baie dieper as haar vrae was.", "Die kinders was in haar skooljare baie gehoorsamer.", "Die spreker was nooit self by die skool nie."], 1)]),
  Q("9", "9.2.5", GEDIG_BOEKMERK,
    "Noem TWEE tegnieke wat die digter in strofe 3 gebruik om die tipiese aard van kinders uit te beeld. (Kies by elke stap een tegniek.)",
    2, POEM, "Inference", "Any TWO: herhaling (waarom); geen leestekens; enjambement; inkeping; retoriese vrae; vraagstelling; kleinletters.", "Memo: any TWO or similar. Each step carries one accepted technique; distractors are not memo techniques.",
    [
      S(1, "Tegniek 1", "Herhaling van die woord 'waarom'.", ["'n Vaste rympatroon (abab).", "Onomatopee (klanknabootsing).", "Oordrywing (hiperbool)."], 0),
      S(1, "Tegniek 2", "Daar is geen leestekens nie.", ["Elke reël eindig met 'n punt.", "Alle reëls het presies dieselfde lengte.", "Direkte rede met aanhalingstekens."], 3),
    ]),
  Q("9", "9.2.6(a)", GEDIG_BOEKMERK,
    "Lees strofe 4. Kies die KORREKTE antwoord uit dié tussen hakies: ''toe'' in reël 22 dui 'n (hoogtepunt/wending) in die gedig aan.",
    1, POEM, "Inference", "wending.", "Accept: wending.",
    [F(1, "Wat dui 'toe' in reël 22 aan?", ["hoogtepunt", "inleiding", "wending", "afsluiting"], 2)]),
  Q("9", "9.2.6(b)", GEDIG_BOEKMERK,
    "Motiveer jou antwoord op VRAAG 9.2.6(a) (dat ''toe'' 'n wending aandui).",
    1, POEM, "Inference", "Daar is 'n verandering in die onderwyser(es)/spreker se siening van/benadering tot die kinders.", "Memo: any ONE (change in the speaker's view of children/school; change in approach; she becomes part of their learning; works harder for them; wants to make a difference to their memories). Awarded in the memo only if 9.2.6(a) is correct (see FLAG 3).",
    [S(1, "Hoe blyk die wending?", "Die spreker se benadering verander: sy gaan nou die kinders se dae beter maak en harder vir hulle werk.", ["Die kinders hou skielik op mor en word stil.", "Die spreker besluit om as onderwyseres te bedank.", "Dit is waar die skooldag begin en die kinders aankom."], 1)]),
  Q("9", "9.2.7", GEDIG_BOEKMERK,
    "Hoe verskil die toon in strofe 1 tot 3 van die toon in strofe 4 tot 6? (Een stap vir elke deel van die gedig.)",
    2, POEM, "Inference",
    "Strofe 1-3: afsydig/krities/negatief/saaklik/moedeloos/waarnemend. Strofe 4-6: liefdevol/begrypend/positief/bemoedigend/inspirerend/gemotiveerd.",
    "Memo: 1 mark per side; the difference must be clear.",
    [
      S(1, "Toon in strofe 1 tot 3", "afsydig en krities/moedeloos (waarnemend)", ["kwaad en aggressief", "spottend en snedig", "gelukkig en onbesorg"], 1),
      S(1, "Toon in strofe 4 tot 6", "liefdevol, begrypend en bemoedigend", ["ernstig en dreigend", "bitter en sarkasties", "ongeduldig en streng"], 2),
    ]),
  Q("9", "9.2.8", GEDIG_BOEKMERK,
    "Kies die KORREKTE antwoord. Die funksie van die dubbelpunt in reël 24 is om ... A dit wat daarna volg, te verduidelik. B opdragte aan die kinders te gee oor wat hulle moet doen. C die spreker se direkte woorde aan die kinders aan te dui. D die betekenis van 'n boekmerk aan die kinders te verduidelik.",
    1, POEM, "Inference", "C — die spreker se direkte woorde aan die kinders aan te dui.", "Accept C only.",
    [F(1, "Wat is die funksie van die dubbelpunt in reël 24?", ["dit wat daarna volg, te verduidelik.", "opdragte aan die kinders te gee oor wat hulle moet doen.", "die spreker se direkte woorde aan die kinders aan te dui.", "die betekenis van 'n boekmerk aan die kinders te verduidelik."], 2)]),
  Q("9", "9.2.9", GEDIG_BOEKMERK,
    "Hoekom is die gebruik van die voornaamwoord ''ons'' in strofe 5 en 6 so gepas?",
    1, POEM, "Inference", "Dit dui daarop dat die spreker nie meer eenkant staan nie, maar deel is van die kinders.", "Memo: any ONE (no longer stands aside; links to the turn when she works on behalf of the children; expresses togetherness between teacher and children).",
    [S(1, "Hoekom is 'ons' gepas?", "Dit wys dat die onderwyseres nie meer eenkant staan nie, maar deel van die kinders is.", ["Dit wys dat sy net namens haarself praat.", "Dit wys dat die kinders alleen moet werk.", "Dit verwys na al die onderwysers van die skool."], 0)]),
  Q("9", "9.2.10", GEDIG_BOEKMERK,
    "In die slotstrofe is die spreker se ideaal vir die kinders dat die goeie herinneringe hulle teen die slegte dinge van die lewe sal beskerm. Waarom, dink jy, is dit nie realisties nie?",
    1, POEM, "Evaluation", "Niemand kan iemand anders teen alle onheil beskerm nie.", "Memo: any ONE (nobody can be protected from all trouble; nobody knows the future; not all children have good memories; memories will not solve problems; life is good and bad).",
    [S(1, "Waarom is dit nie realisties nie?", "Niemand kan iemand anders teen alle onheil beskerm nie; die lewe bestaan uit goed en sleg.", ["Kinders onthou niks van hulle skooldae nie.", "Die geur van jasmyn het geneeskrag.", "Onderwysers het geen invloed op kinders nie."], 3)]),
  Q("9", "9.2.11", GEDIG_BOEKMERK,
    "Waarom, dink jy, is dit belangrik dat onderwysers en kinders moet saamwerk?",
    1, POEM, "Evaluation", "Hulle het mekaar nodig om goeie herinneringe te kan bou / die sukses van onderwys hang van albei af.", "Memo: any ONE (success of teaching depends on both; need each other to build good memories; without cooperation learning cannot happen; better marks; makes school pleasant; less conflict).",
    [S(1, "Waarom is samewerking belangrik?", "Die sukses van onderwys hang van onderwysers én kinders af, en saam bou hulle goeie herinneringe.", ["Kinders moet onderwysers beheer sodat hulle minder werk het.", "Dit verseker dat die onderwyser die meeste punte kry.", "Dit verminder die hoeveelheid skoolwerk."], 1)]),
];
