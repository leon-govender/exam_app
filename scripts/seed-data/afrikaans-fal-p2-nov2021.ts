// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language) Paper 2 (Literature / Letterkunde), November 2021, National Senior
// Certificate. Source: official DBE combined question paper + marking
// guidelines PDF (78 pages: QP pages 1-40, memo pages 41-78), downloaded from
// stanmorephysics.com (genuine DBE document: "Kopiereg voorbehou", DBE crest,
// "NASIENRIGLYNE"). The PDF has a real text layer and was read directly from
// it. The paper is in Afrikaans and all question text, options and model
// answers below are in Afrikaans as the paper/memo phrase them. Only the DBE
// paper and memo were used (no commercial study-guide content).
//
// ============================ SCOPE (IMPORTANT) ============================
// The real P2 offers a CHOICE: the student answers TWO of four sections
// (A Roman/novel, B Drama, C Kortverhale/short stories, D Gedigte/poems), and
// within A and B picks ONE prescribed text. This app has no "answer one of
// several" mechanism, so every seeded question is shown to the student. The
// student studies the drama Fiela se Kind and the novel title is unknown, so
// this file is DELIBERATELY SCOPED to:
//   - Section B (Drama): ONLY Vraag 7, Fiela se Kind - Die Drama (35 marks,
//     Dalene Matthee). Vrae 5 (Poppie) and 6 (Paljas) are NOT ingested.
//   - Section C (Kortverhale): BOTH short stories, Vraag 8:
//       8.1 'Van Precious: 'n Buisie Salf' - Maretha Maartens (18 marks)
//       8.2 'Vegvlieenier Vivian' - Francois Geringer (17 marks)
//   - Section D (Gedigte): BOTH poems, Vraag 9:
//       9.1 'Ek het 'n huisie by die see' - HA Fagan (18 marks)
//       9.2 'Rondom my' - Dawie de Jager (17 marks)
//   - Section A (Vrae 1-4, the four novels) is NOT ingested at all.
// Scoped total = 35 + 35 + 35 = 105 marks, MORE than the real 70-mark sitting
// (which needs only two sections). That is intentional: this is a practice
// bank, not a simulation of exam-day choice. `paper.total_marks` is therefore
// 105 (the scoped total), not the cover page's "PUNTE: 70". `duration_minutes`
// stays at the real exam's 150 (2 1/2 hours).
//
// ======================== HOW EXTRACTS ARE SHOWN ===========================
// Like the English HL P2 reference, every question that depends on a printed
// text carries that text inside its `text` field: the drama extracts TEKS M
// (7.1-7.8) and TEKS N (7.9-7.19), the short-story extracts TEKS O (8.1.x)
// and TEKS P (8.2.x), and the two printed poems (9.1.x, 9.2.x). Lines are
// numbered (every line) so the paper's "Reel N" references work; the
// numbering is this file's own (the paper prints a number every 5th line).
// The poems' stanza breaks are kept. No images were needed (pure text), so
// no files were created under public/question-images/.
// Several drama/short-story questions (7.2, 7.3, 7.6-7.8, 7.10, 7.13, 7.15-
// 7.19, 8.1.2, 8.1.6-8.1.8, ...) ask about the WHOLE text, not just the
// extract; the memo answers come from the prescribed works themselves and are
// transcribed from the memo.
//
// =========================== GRADING APPROACH ==============================
// ALL questions are stepped-MCQ (`steps`), per the standing preference for
// multiple choice; NO question uses `marking_points`. The paper's own MCQ,
// matching-column (7.5.x, 8.1.5(a)-(d), 9.1.6(a)-(d), each split into its own
// 1-mark question) and 'kies tussen hakies' items map one-to-one. Open
// questions ("noem DRIE ...", "motiveer met TWEE redes") become one 1-mark
// step per memo point with the correct option taken from the memo's accepted
// list and the other three being realistic misreadings (never another memo-
// accepted answer). Linked pairs (e.g. 7.12.1/7.12.2, 7.15.1/7.15.2,
// 7.19.1/7.19.2, 8.2.4, 8.2.7, 8.2.11, 9.2.10) are separate questions, as in
// the paper; the memo says the first must be right to earn the second.
// Topics: Fiela se Kind -> drama-fiela, both short stories -> short-stories,
// both poems -> poetry. Cognitive levels follow the question type (the memo
// gives no Barrett labels): factual recall = Literal; summaries/matching =
// Reorganisation; interpretation/'wat sê die ... van die emosie' = Inference;
// motivations/opinions/titel/spyt = Evaluation.
//
// ============================ FLAG FOR REVIEW ==============================
// 1. The memo accepts open-ended opinion answers in BOTH directions
//    (7.7 and 8.1.7 bewonder ja/nee; 7.18, 8.2.10, 9.1.8, 9.2.8 ja/nee). Each
//    MCQ keys ONE direction using memo-listed reasons; the opposite-direction
//    memo reasons are deliberately not offered as distractors. Noted in each
//    question's marking_notes.
// 2. 9.1.8 (2 marks): the memo awards TWO marks for ANY ONE sensible reason;
//    the MCQ splits that into two 1-mark steps (two different 'Ja' reasons).
// 3. 7.19.1/7.19.2 and 9.2.10: the memo lists many unrelated regrets/reasons
//    and only demands that (b) correlate with (a); the keyed pairs are
//    memo-listed regrets with a memo-listed reason.
// 4. The memo's closing line reads "TOTAAL AFDELING C: 35 / GROOTTOTAAL: 70"
//    under Section D (a typo for AFDELING D); the paper's own section D total
//    is 35. The memo's 9.2.10(b) refers to "Vraag 9.10.2 (b)" (typo).
// 5. Text in 7.4/8.1.4 etc. is taken verbatim from the paper; nothing in the
//    memo was altered. Memo item 7.1 says 'Goldsbury'; 8.1.1 'Buchner'.
// 6. The paper's 7.9 extract (TEKS N) numbers its lines so that reel 4, 6, 13
//    and 21 match the cited speeches; this file's numbering reproduces that.

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
  paper_number: "P2",
  duration_minutes: 150,
  total_marks: 105,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2022/04/Afrikaans-FAL-Grade-12-NSC-November-2021-P2-and-Memo.pdf" as string | null,
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

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const TEKS_M = " 1  BENJAMIN: My naam was maar altyd Benjamin Komoetie.\n 2  MAGISTRAAT: Goed. Kan jy enigiets onthou voordat jy by die mense in die Lange\n 3  Kloof beland het? Enigiets.\n 4  BENJAMIN: Nee, weledele heer.\n 5  MAGISTRAAT: Ek wil hê jy moet nou vir my so ver as moontlik terugdink en dan moet\n 6  jy vir my alles sê wat jy dink.\n 7  BENJAMIN: Ek kan nie so lekker dink as ek bang is nie, baas.\n 8  MAGISTRAAT (se wange in en uit): Jy hoef vir niks bang te wees nie, seun, ek wou\n 9  maar net seker maak of jy enigiets kan onthou. Dit maak nie saak as jy niks onthou\n10  nie. Kom staan nou vir my nog 'n klein entjie vorentoe en dan bly staan jy net so\n11  doodstil. (MAGISTRAAT wink vir KONSTABEL. Gee hom 'n opdrag. KONSTABEL uit.\n12  KONSTABEL terug met vier seunskinders. Hulle stamp aan mekaar en lag en kom\n13  weerskante van BENJAMIN staan. Stemme op die agtergrond.) Stilte, asseblief!\n14  (MAGISTRAAT beduie aan die KONSTABEL en KONSTABEL by die deur uit. Kom\n15  terug met BARTA by hom. 'n Rukkie later kom ELIAS verskrik op.) Kom nader, mevrou\n16  Van Rooyen, kom tot by hulle en moenie haastig wees nie. Kyk net so lank as wat u\n17  wil. (BARTA nader. Wys met haar vinger na BENJAMIN. Draai haar om en begin huil.\n18  Opgewonde stemme van mense wat inloer: MAGISTRAAT roep KONSTABEL. Gee\n19  hom opdrag. KONSTABEL laat mense van die verhoog gaan.) Seun ... begryp jy wat\n20  so pas hier gebeur het?";
const TEKS_N = " 1  ELIAS: ... As jy nou weer huis toe kom, is al drie my seuns in die span en kan ons\n 2  kosyne ook lewer. Dan koop ons 'n swaar geweer en julle leer almal skiet en dan sal\n 3  ons 'n ding sien.\n 4  BARTA (fluister): Elias ... (Roep.) Elias ...\n 5  LUKAS: Pa, Ma praat.\n 6  ELIAS: Wat is dit, Barta? Ek sê vir julle, 'n wamakery sal in hierdie bos 'n betalende\n 7  ding wees. Ek het die ding lank oordink, ek lê nie verniet snags wakker in my ellende\n 8  nie.\n 9  LUKAS (benoud): Pa.\n10  ELIAS: Ek is 'n man wat 'n plan kan sien lank voor 'n ander man hom nog in die kop\n11  gekry het.\n12  LUKAS: Pa, daar's iets verkeerd met Ma!\n13  ELIAS (ergerlik): Wat's dit, Barta? Voel jy siek? Is dit weer die benoudigheid?\n14  Kristoffel, gee daar vir jou ma van die treksel op die rak lat sy drink. Lukas, jy kan\n15  gerus by die dokter op die dorp vir haar loop medisyne kry, sy bly die laaste tyd\n16  bekwaald. Jy weet, jou ouma het in 'n oog se knip van die hart ingegee. Voel jy sleg,\n17  Barta? (Haar kop sak laer. KRISTOFFEL hou beker uit na haar, maar sy wil nie drink\n18  nie.) Wat is dit, Barta?\n19  BARTA (die woorde skeur uit haar): Ek het die verkeerde kind gevat, Elias. Ek het\n20  iemand anders se kind gevat.\n21  ELIAS (bang): Waarvan praat jy, Barta?\n22  KRISTOFFEL: Is Ma benoud?\n23  BARTA: Dit was nie Lukas nie.";
const TEKS_O = " 1  Deur die venster het Coenie 'n lae muurtjie gesien, 'n diep kloof en die rotsagtige hang van die\n 2  oorkantste berg. Vassilis se elmboog het hom teen die nek getref en daar was\n 3  die geklap van klippe teen die onderstel en die skeurgeluid van remme wat\n 4  inderhaas aangeslaan word.\n 5  Die grys mikrobus het hulle s'n skrams getref. Hulle het 'n paar oomblikke\n 6  lank deur die lug gevlieg. Gedurende die kort vlug het Coenie net een ding\n 7  onthou: die keer toe hy en Mari saam met Ma en oom Willem lughawe toe\n 8  was om te kyk hoe die vliegtuie land en opstyg. En die dinge wat oom Willem\n 9  op die uitkyktoring kwytgeraak het: \"Dis stokou vliegtuie, Pat ... dis doodskiste\n10  met nuwe enjins ...\"\n11  Toe rol die bussie. Dit tuimel oor rotse; dit sleep takke en losgerukte\n12  struike saam. Arms en bene en lywe tol in die rondte soos wasgoed in 'n\n13  wasmasjien. Dit sou beter gewees het om in 'n industriële wasmasjien te kon\n14  rondtol, het Coenie deurmekaar gedink. Miskien sou iemand lewend daar kon\n15  uitkom.\n16  Toe word dit stil. Niemand gil meer nie. Selfs die enjin het gestol.\n17  Een vir een kruip hulle deur 'n opening, 'n skeur, 'n venster waarvan die ruit\n18  uitgeruk is. Solomon se regterarm sleep; hy kreun soos 'n gewonde dier.";
const TEKS_P = " 1  Op seweduisend meter bo grondvlak kom hulle in gelykvlug en dan beveel\n 2  kaptein Swart se stem in hulle oorfone: \"Suurstofmaskers aan en luister\n 3  noukeurig na die volgende instruksies! Ons gaan vier Migs onderskep wat\n 4  tans een van ons mees suidelike artillerie-basisse aanval. Ons gaan poog om\n 5  hulle uit die son aan te val van sowat eenduisend meter hoër as hulle vlug op\n 6  daardie stadium.\" Dan kras sy stem geïrriteerd: \"Luitenant Maile!\"\n 7  \"Ja, Kaptein, ek verstaan u instruksies,\" sê sy terwyl sy voel hoe die\n 8  adrenalien in haar bloedstroom losgelaat word. \"Hier is die oomblik van\n 9  waarheid nou!\" maal dit onwillekeurig deur haar gedagtes. \"Die toets dat ek\n10  as vrou dieselfde werk sal kan doen as enige man en dat ek as gelyke\n11  aanvaar sal word!\"\n12  Vir 'n oomblik kan sy voel hoe haar maagspiere onwillekeurig saamtrek,\n13  maar dan beveel haar leier se stem haar bars: \"Luitenant Maile, jy sal op 'n\n14  hoogte van tweeduisend meter bokant die gevegsone sirkel en slegs bystand\n15  verleen deur ons in kennis te stel van die vyandelike vliegtuie se posisies ten\n16  opsigte van elkeen van ons. Ek verlang deurlopende kommentaar. Bevestig\n17  dat jy verstaan!\"\n18  \"Maar Kaptein!\" ...";
const GEDIG_FAGAN = " 1  Ek het 'n huisie by die see. Dis nag.\n 2  Ek hoor aaneen, aaneen die golwe slaan\n 3  teenaan die rots waarop my huisie staan\n 4  met al die oseaan se woeste krag.\n\n 5  Ek hoor die winde huil – 'n kreun, 'n klag,\n 6  soos van verlore siele in hul nood\n 7  al dwalend, klagend, wat in graf en dood\n 8  geen rus kon vind nie, maar nog soek en smag\n\n 9  My vuurtjie brand, my kersie gee sy lig.\n10  ek hoor dan maar hoe loei die storm daarbuite,\n11  ek hoor hoe ruk die winde aan my ruite;\n12  hierbinne is dit veilig, warm en dig.\n\n13  Kom nag, kom weer en wind, kom oseaan –\n14  dit is 'n rots waarop my huisie staan.";
const GEDIG_RONDOM = " 1  Ek wil my tyd vat hierdie keer\n 2  ek moet my tyd vat hierdie keer\n 3  want die haastigheid in my\n 4  het my al veels te veel keer\n 5  ondergekry\n 6  my ondergekry.\n\n 7  Ek wil my tyd vat hierdie keer\n 8  ek moet my tyd vat hierdie keer.\n\n 9  Ek sien die blou in jou deur die bietjie in jou oë.\n10  Ek weet daar is dinge wat jou ook nog pla\n11  dinge wat jou terughou.\n12  Kom wys my wie jy is en wie jy graag wil wees.\n13  Kom wees net jy, kom wees net jy.\n\n14  As jy wil tyd vat hierdie keer\n15  kom vat 'n rukkie hier by my\n16  As jy tyd wil vat\n17  kom wees hier rondom my\n18  kom wees hier rondom my\n19  net as jy wil ...\n20  net as jy wil.";

const S = (marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep => ({ marks, description, options, correctIndex });

function Q(
  number: string, sub_number: string, text: string, marks: number, topicKey: string, cognitiveLevelName: string,
  model_answer: string, marking_notes: string, steps: MarkingPointStep[],
): QuestionSeed {
  return { number, sub_number, text, marks, topicKey, cognitiveLevelName, model_answer, marking_notes, steps };
}

const COL_B_7 = "KOLOM B: A Benjamin is vir sewe jaar uit 'n liefdevolle huis weggeruk. B Benjamin het hom na jare losgemaak van die Boslewe. C Fiela het grond op Benjamin se naam gesit. D Fiela het geen keuse gehad as om vir Benjamin Knysna toe te laat gaan nie. E Benjamin het begin glo dat die Komoeties hom vergeet het.";
const COL_B_8 = "KOLOM B: A Coenie was bekommerd oor Precious se toestand. B Precious het belowe om die volgende Maandag vir Coenie salf skool toe te bring. C Coenie se probleem was nie meer 'n faktor nie. D Die bestuurder van 'n voertuig het beheer verloor. E Precious kon vir Coenie laat verstaan dat hy nie 'n ondier was nie.";
const ctx = (extract: string, label: string, q: string) => `${label}\n\n${extract}\n\n${q}`;
const M = (q: string) => ctx(TEKS_M, "FIELA SE KIND – TEKS M", q);
const N = (q: string) => ctx(TEKS_N, "FIELA SE KIND – TEKS N (die reëlnommers verwys na die uittreksel)", q);
const O = (q: string) => ctx(TEKS_O, "'VAN PRECIOUS: 'N BUISIE SALF' – Maretha Maartens – TEKS O", q);
const P = (q: string) => ctx(TEKS_P, "'VEGVLIEËNIER VIVIAN' – Francois Geringer – TEKS P (die reëlnommers verwys na die uittreksel)", q);
const GF = (q: string) => ctx(GEDIG_FAGAN, "'EK HET 'N HUISIE BY DIE SEE' – HA Fagan", q);
const GR = (q: string) => ctx(GEDIG_RONDOM, "'RONDOM MY' – Dawie de Jager", q);

export const questions: QuestionSeed[] = [
  // ============ SECTION B: DRAMA – VRAAG 7: FIELA SE KIND (35 marks) ============
  Q("7", "7.1", M("Wie was hierdie magistraat voor wie Benjamin moes verskyn?"), 1, "drama-fiela", "Literal",
    "(Mister) Goldsbury.", "Memo: (Mister) Goldsbury.",
    [S(1, "Wie was die magistraat voor wie Benjamin moes verskyn?", ["Mister Goldsbury", "Mister Van Rooyen", "Mister Weatherbury", "Mister Zondagh"], 0)]),
  Q("7", "7.2", M("Som Fiela se verduideliking aan Lange en Dikke oor hoekom sy Benjamin gehou het, op. (3 punte: kies een rede in elke stap)"), 3, "drama-fiela", "Reorganisation",
    "Enige DRIE van: Petrus Zondagh was nie beskikbaar nie/was by die see; daar was nog nie 'n magistraat op die dorp nie; die veldkornet was agter skaapdiewe aan/Dugas toe; die veldkornet was begrafnis (Haarlem) toe; die kind was later te geheg aan haar/aan haar rokspante vas; sy kon nie 'n 3-jarige kind net daar op haar stoep gelos het nie.",
    "Memo: any THREE of the listed reasons. One reason per step (three distinct memo reasons used).",
    [S(1, "Fiela se eerste rede:", ["Petrus Zondagh was nie beskikbaar nie/was by die see", "Petrus Zondagh het geweier om hulle te help", "Petrus Zondagh het gesê Benjamin hoort by Elias", "Petrus Zondagh was siek en kon nie reis nie"], 0),
     S(1, "Fiela se tweede rede:", ["Daar was nog nie 'n magistraat op die dorp nie", "Die magistraat het haar vooraf gewaarsku om niks te doen nie", "Sy het nie geweet daar was 'n magistraat nie", "Die magistraat het reeds besluit Benjamin moes by Barta bly"], 0),
     S(1, "Fiela se derde rede:", ["Die kind was later te geheg aan haar/aan haar rokspante vas", "Die kind het self gevra om nooit terug te gaan nie", "Die kind kon reeds werk en het haar met die volstruise gehelp", "Die kind het gesê hy onthou niks van sy ouers nie"], 0)]),
  Q("7", "7.3", M("Bespreek Barta se innerlike konflik toe sy vir Lukas tussen die ander seuntjies moes uitken. Verwys na albei kante van die konflik."), 2, "drama-fiela", "Inference",
    "Barta het skuldig gevoel dat sy gejok het, maar was ook verlig dat hierdie kind miskien haar verlore kind was. (Of soortgelyk: Barta het besluit om na die sensusman te luister, maar sy het geweet dit was nie haar kind nie.) Albei kante moet genoem word.",
    "Memo: any ONE of the listed conflicts, but BOTH sides must be mentioned for 2 marks (one side = 1 mark). Converted to two steps (one per side), based on the memo's 'skuldig gevoel ... maar verlig' pairing.",
    [S(1, "Die een kant van Barta se konflik:", ["Sy het skuldig gevoel omdat sy geweet het sy jok", "Sy was seker dit was haar kind en wou dit nie wegsteek nie", "Sy was kwaad vir die magistraat se vrae", "Sy was bang Elias sou haar slaan as sy die kind uitken"], 0),
     S(1, "Die ander kant van Barta se konflik:", ["Sy was ook verlig dat hierdie kind miskien haar verlore kind kon wees", "Sy het die kind dadelik herken en gevoel dat sy geen keuse gehad het nie", "Sy het gehoop die magistraat sou Benjamin by Fiela laat", "Sy was jaloers op Fiela se liefde vir die kind"], 0)]),
  Q("7", "7.4", M("Kies die KORREKTE antwoord om die sin mee te voltooi.\nSpanning is in die drama geskep deur ...\nA vinnig deur die storielyn van die verlore kind te beweeg.\nB vir Fiela voor te stel as 'n pleitende ma wat haar kind liefhet.\nC die Bos voor te stel as 'n wêreld waar Nina kan fantaseer.\nD tussen die twee ruimtes, die Bos en Lange Kloof, te spring."), 1, "drama-fiela", "Inference",
    "D – tussen die twee ruimtes, die Bos en Lange Kloof, te spring.", "Memo: D.",
    [S(1, "Spanning is in die drama geskep deur ...", ["vinnig deur die storielyn van die verlore kind te beweeg.", "vir Fiela voor te stel as 'n pleitende ma wat haar kind liefhet.", "die Bos voor te stel as 'n wêreld waar Nina kan fantaseer.", "tussen die twee ruimtes, die Bos en Lange Kloof, te spring."], 3)]),
  Q("7", "7.5.1", M("In enige drama is daar gebeure en gevolge. Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: 7.5.1 Die sensusmanne het 'n tweede keer by Wolwekraal opgedaag.\n" + COL_B_7), 1, "drama-fiela", "Reorganisation",
    "D – Fiela het geen keuse gehad as om vir Benjamin Knysna toe te laat gaan nie.", "Memo: D.",
    [S(1, "Die sensusmanne het 'n tweede keer by Wolwekraal opgedaag. Wat was die gevolg?", ["Fiela het grond op Benjamin se naam gesit.", "Benjamin het begin glo dat die Komoeties hom vergeet het.", "Fiela het geen keuse gehad as om vir Benjamin Knysna toe te laat gaan nie.", "Benjamin is vir sewe jaar uit 'n liefdevolle huis weggeruk."], 2)]),
  Q("7", "7.5.2", M("Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: 7.5.2 Barta het vir Benjamin as haar seun, Lukas, uitgeken.\n" + COL_B_7), 1, "drama-fiela", "Reorganisation",
    "A – Benjamin is vir sewe jaar uit 'n liefdevolle huis weggeruk.", "Memo: A.",
    [S(1, "Barta het vir Benjamin as haar seun, Lukas, uitgeken. Wat was die gevolg?", ["Benjamin het hom na jare losgemaak van die Boslewe.", "Fiela het grond op Benjamin se naam gesit.", "Benjamin het begin glo dat die Komoeties hom vergeet het.", "Benjamin is vir sewe jaar uit 'n liefdevolle huis weggeruk."], 3)]),
  Q("7", "7.5.3", M("Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: 7.5.3 Die magistraat het al Fiela se pogings om met Benjamin kontak te maak, verwerp.\n" + COL_B_7), 1, "drama-fiela", "Reorganisation",
    "E – Benjamin het begin glo dat die Komoeties hom vergeet het.", "Memo: E.",
    [S(1, "Die magistraat het al Fiela se pogings om met Benjamin kontak te maak, verwerp. Wat was die gevolg?", ["Benjamin het begin glo dat die Komoeties hom vergeet het.", "Benjamin het hom na jare losgemaak van die Boslewe.", "Fiela het geen keuse gehad as om vir Benjamin Knysna toe te laat gaan nie.", "Fiela het grond op Benjamin se naam gesit."], 0)]),
  Q("7", "7.5.4", M("Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: 7.5.4 Benjamin is Knysna toe gestuur om vir Nina te gaan soek.\n" + COL_B_7), 1, "drama-fiela", "Reorganisation",
    "B – Benjamin het hom na jare losgemaak van die Boslewe.", "Memo: B.",
    [S(1, "Benjamin is Knysna toe gestuur om vir Nina te gaan soek. Wat was die gevolg?", ["Benjamin is vir sewe jaar uit 'n liefdevolle huis weggeruk.", "Benjamin het begin glo dat die Komoeties hom vergeet het.", "Fiela het grond op Benjamin se naam gesit.", "Benjamin het hom na jare losgemaak van die Boslewe."], 3)]),
  Q("7", "7.6", M("Vertel van DRIE negatiewe dinge in Benjamin se lewe by die Van Rooyens. (Kies een in elke stap.)"), 3, "drama-fiela", "Literal",
    "Enige DRIE van: hy is soms (met die osriem) geslaan/mishandel; hy moes hard/soos 'n slaaf werk; hy het nie liefde gekry nie; kon nie leer nie; kon nie kind wees en speel nie; moes Elias en Barta 'ma en pa' noem; het in armoede grootgeword; het nie voedsame kos gekry nie; mag nie oor Fiela-hulle gepraat het nie; ens.",
    "Memo: any THREE of the listed negatives. One memo item per step.",
    [S(1, "Eerste negatiewe ding by die Van Rooyens:", ["Hy is soms (met die osriem) geslaan/mishandel", "Hy het elke dag skool toe gegaan en moes swaar boeke dra", "Hy moes net in die winter werk", "Hy is nooit toegelaat om in die Bos rond te loop nie"], 0),
     S(1, "Tweede negatiewe ding by die Van Rooyens:", ["Hy moes hard/soos 'n slaaf werk", "Hy het te veel vrye tyd gehad en was verveeld", "Hy is gedwing om saam met Elias dorp toe te gaan om te drink", "Hy moes die hele dag by Barta in die huis bly"], 0),
     S(1, "Derde negatiewe ding by die Van Rooyens:", ["Hy het nie liefde gekry nie", "Hy het te veel kos gekry en is bederf", "Elias het hom as erfgenaam bevoordeel", "Hy is as die gunsteling kind behandel"], 0)]),
  Q("7", "7.7", M("Kan 'n mens Benjamin/Lukas as hoofkarakter bewonder? Motiveer jou antwoord met TWEE redes. (Kies een rede in elke stap.)"), 2, "drama-fiela", "Evaluation",
    "Ja. Enige TWEE van: hy het Nina teen Elias beskerm; hy het die Komoeties nie vergeet nie; hy het vir sy geluk geveg; hy het deursettingsvermoë gehad (leer roei); hy het integriteit gehad/wou nie die grond aanvaar nie; hy was onafhanklik; ens.",
    "Memo: 'Ja' with any TWO of the listed reasons (the memo also lets a candidate who disagrees score only with a valid text-based motivation; converted to the 'Ja' side only, using memo-listed reasons).",
    [S(1, "Eerste rede waarom Benjamin/Lukas bewonder kan word:", ["Hy het Nina teen Elias beskerm/vir haar opgestaan en haar nie verklap nie", "Hy het Nina by Elias verklap sodat hy nie gestraf word nie", "Hy het Elias se bevele sonder teenspraak gehoorsaam tot die einde", "Hy het sy drome opgegee toe dit moeilik geword het"], 0),
     S(1, "Tweede rede waarom Benjamin/Lukas bewonder kan word:", ["Hy het deursettingsvermoë gehad en geleer roei, al het Kaliel gesê hy kan nie", "Hy het die grond wat Fiela vir hom gekoop het, dadelik en sonder vrae aanvaar", "Hy het die Komoeties vergeet en tevrede in die Bos gebly", "Hy het geweier om te werk tot iemand hom 'n beter aanbod gemaak het"], 0)]),
  Q("7", "7.8", M("Gee TWEE redes waarom die titel gepas is. (Kies een rede in elke stap.)"), 2, "drama-fiela", "Evaluation",
    "Enige TWEE van: die drama gaan oor die kind/hoofkarakter Benjamin; dit dui Fiela se besitreg/hartreg op Benjamin aan; Fiela het Benjamin soos haar eie grootgemaak; Benjamin het Fiela altyd as ma erken; al die geheime en twyfel oor wie se kind Benjamin was, lê in die titel; dit dui op Benjamin se identiteitskrisis; ens.",
    "Memo: any TWO of the listed reasons.",
    [S(1, "Eerste rede waarom die titel gepas is:", ["Dit dui Fiela se besitreg/hartreg op Benjamin aan", "Dit wys dat Fiela Benjamin se biologiese ma is", "Dit wys dat Nina Fiela se dogter is", "Dit dui aan dat Fiela die enigste karakter is wat saak maak"], 0),
     S(1, "Tweede rede waarom die titel gepas is:", ["Al die geheime en twyfel oor wie se kind Benjamin was, lê opgesluit in die titel", "Dit beskryf hoe Fiela haar kind in die Bos verloor het", "Dit wys Benjamin het besluit hy bly Elias se kind", "Dit verwys na die kinders wat Fiela uit die Bos aangeneem het"], 0)]),

  Q("7", "7.9", N("Elias praat in hierdie uittreksel net met sy drie seuns. Waar/By wie was Nina op daardie stadium in die drama?"), 1, "drama-fiela", "Literal",
    "Nina was in Knysna/die dorp/by die see, of by Miss Weatherbury.", "Memo: in Knysna/die dorp/by die see; or by Miss Weatherbury.",
    [S(1, "Waar/by wie was Nina op daardie stadium?", ["In die Bos by Elias en Barta", "By Fiela op Wolwekraal", "In Knysna by Miss Weatherbury", "By Kaliel by die skuit in Lange Kloof"], 2)]),
  Q("7", "7.10", N("Noem TWEE redes waarom Lukas besluit het om vir 'n tweede keer na die Van Rooyens toe terug te gaan. (Kies een rede in elke stap.)"), 2, "drama-fiela", "Literal",
    "Enige TWEE van: Lukas wou die waarheid oor wie hy was uitvind/sy ware identiteit vind; hy was verlief op Nina; Fiela het hom aangeraai om terug te gaan; hy het gehoop Elias ken die waarheid; Fiela het gesê bloed sou bloed gekeer het as Nina sy suster was.",
    "Memo: any TWO of the listed reasons (two used: identity, love for Nina).",
    [S(1, "Eerste rede waarom Lukas teruggegaan het:", ["Hy wou die waarheid oor wie hy was uitvind/sy ware identiteit vind", "Hy wou vir Elias met die wamakery help", "Hy was bang die magistraat sou hom straf as hy wegbly", "Hy het gemis om saam met Kristoffel te werk"], 0),
     S(1, "Tweede rede waarom Lukas teruggegaan het:", ["Hy was verlief op Nina/wou 'n romantiese verhouding met haar hê", "Hy wou Barta se medisyne gaan haal", "Hy het gedink Fiela wou nie meer hê hy moes terugkom nie", "Hy wou grond by Elias gaan koop"], 0)]),
  Q("7", "7.11", N("\"BARTA (fluister): Elias ... (Roep.) Elias ...\" (Reël 4)\nWat sê die manier waarop Barta hier praat van die emosie wat sy op daardie oomblikke ervaar het?"), 1, "drama-fiela", "Inference",
    "Dit dui aan dat Barta ontsteld/bang/paniekerig/angstig/benoud/senuweeagtig was/skuldig gevoel het. (NIE onseker of ongelukkig NIE.)", "Memo: any ONE of ontsteld/bang/paniekerig/angstig/benoud/senuweeagtig/skuldig; NOT onseker or ongelukkig.",
    [S(1, "Watter emosie dui Barta se manier van praat aan?", ["Sy was kalm en selfversekerd", "Sy was kwaad vir Elias se planne", "Sy was bang/benoud en angstig", "Sy was bly en opgewonde oor Lukas se terugkeer"], 2)]),
  Q("7", "7.12.1", N("Elias het nie in reël 6, 13 en 21 gereageer soos wat 'n mens van 'n man sou verwag nie.\nKies die KORREKTE antwoord uit dié tussen hakies.\nElias se reaksie op Barta se toestand het aangedui dat hy (nie verstaan het nie/kwaad was omdat Lukas so lank weg was)."), 1, "drama-fiela", "Inference",
    "nie verstaan het nie", "Memo: 'nie verstaan het nie'. (7.12.1 must be correct to earn 7.12.2.)",
    [S(1, "Elias se reaksie op Barta se toestand het aangedui dat hy ...", ["kwaad was omdat Lukas so lank weg was", "nie verstaan het nie", "reeds geweet het sy het die verkeerde kind gevat", "besig was om haar teen die dorpsmense te beskerm"], 1)]),
  Q("7", "7.12.2", N("Motiveer jou antwoord op VRAAG 7.12.1 (Elias het nie verstaan nie) deur hierdie reaksie van Elias te verduidelik."), 1, "drama-fiela", "Inference",
    "Enige EEN van: Elias het die heeltyd gedink Barta het die waarheid gepraat; hy kon nie dink dat sy so lank kon lieg nie; hy het gedink sy makeer fisiek iets/was weer benoud; hy het nie haar emosionele trauma verstaan nie; hy het nie gedink dit was ernstig nie en wou net oor sy planne verder praat.",
    "Memo: any ONE of the listed explanations; must correlate with 7.12.1.",
    [S(1, "Hoekom het Elias nie verstaan nie?", ["Hy het gedink sy makeer fisiek iets/was weer benoud en wou net verder oor sy planne praat", "Hy het geweet sy lieg en wou haar nie in die openbaar blameer nie", "Hy het gedink Lukas het haar ontstel", "Hy het gedink sy wou net aandag van die seuns trek"], 0)]),
  Q("7", "7.13", N("Sê waarom die volgende stelling ONWAAR is.\nIn hierdie drama kry ons 'n voorbeeld van die mens wat nooit loskom uit onderdrukking nie."), 1, "drama-fiela", "Evaluation",
    "Enige EEN van: Nina het besluit om weg te loop uit die Bos; Fiela het goed met geld gewerk en grond vir Benjamin gekoop; Lukas het gaan werk om 'n beter lewe buite die Bos te maak; Lukas is weg van die Van Rooyens omdat hy nie langer misbruik wou word nie; Benjamin het teruggegaan na die Komoeties toe; Nina het geweier om langer haar geld vir Elias te gee.",
    "Memo: any ONE of the listed reasons.",
    [S(1, "Hoekom is die stelling onwaar?", ["Nina het by Elias gebly en haar geld bly afgee", "Lukas het tot aan die einde in die Bos gebly", "Nina het besluit om weg te loop uit die Bos om 'n beter lewe te gaan vind", "Barta het die waarheid vir niemand gesê nie"], 2)]),
  Q("7", "7.14", N("Kies die KORREKTE antwoord om die sin mee te voltooi.\nUit Benjamin/Lukas se reaksie nadat Barta erken het dat sy 'n leuen vertel het, kan ons aflei dat hy ...\nA jaloers was op die ander Van Rooyen-kinders.\nB trots was om vir 'n rukkie 'n Van Rooyen te kon wees.\nC wou kompeteer met die ander seuns vir Elias se aandag.\nD ontevrede was met die sensusmanne van destyds se optrede."), 1, "drama-fiela", "Inference",
    "D – ontevrede was met die sensusmanne van destyds se optrede.", "Memo: D.",
    [S(1, "Uit Lukas se reaksie kan ons aflei dat hy ...", ["jaloers was op die ander Van Rooyen-kinders.", "trots was om vir 'n rukkie 'n Van Rooyen te kon wees.", "wou kompeteer met die ander seuns vir Elias se aandag.", "ontevrede was met die sensusmanne van destyds se optrede."], 3)]),
  Q("7", "7.15.1", N("Dink aan Lukas/Benjamin en die Komoeties. Hoe sal jy die verhouding tussen Lukas/Benjamin en die Komoeties aan die einde van die drama beskryf?"), 1, "drama-fiela", "Inference",
    "Hulle was gelukkig saam/lief vir mekaar/liefdevol/ondersteunend/'n familie. (7.15.1 must be correct to earn 7.15.2.)", "Memo: happy/loving/supportive/family.",
    [S(1, "Die verhouding tussen Lukas/Benjamin en die Komoeties aan die einde:", ["Dit was gespanne en vol wantroue", "Dit was 'n liefdevolle, ondersteunende verhouding (hulle was 'n familie)", "Dit was 'n verhouding van skuld en bitterheid", "Dit was onverskillig, want hy het besluit om alleen te leef"], 1)]),
  Q("7", "7.15.2", N("Motiveer jou antwoord op VRAAG 7.15.1 (liefdevolle, ondersteunende verhouding) met TWEE redes. (Konsentreer op Lukas/Benjamin EN die Komoeties.)"), 2, "drama-fiela", "Evaluation",
    "Enige TWEE van: die Komoeties het hom as seun terugverwelkom; hulle het verstaan dat hy sy eie pad moes volg; hulle het vir hom grond gegee/'n toekoms verseker; Fiela het hom omhels; Lukas het vir Fiela 'Ma' genoem; hy was bly hy kon weer Benjamin/'n Komoetie wees; hy het vir John Benn gesê hy is 'n Komoetie; hy het besluit hy bly in Lange Kloof.",
    "Memo: any TWO of the listed reasons (one for each side: the Komoeties, and Benjamin).",
    [S(1, "Die Komoeties se kant:", ["Hulle het hom as seun terugverwelkom/vir hom grond gegee", "Hulle het hom gevra om by Elias te gaan woon", "Hulle het hom die grond ontsê omdat hy weggeloop het", "Hulle het hom gestraf omdat hy so lank weg was"], 0),
     S(1, "Benjamin/Lukas se kant:", ["Hy het vir John Benn gesê hy is 'n Komoetie/het vir Fiela 'Ma' genoem", "Hy het vir John Benn gesê hy bly liewer by die Van Rooyens", "Hy het besluit om Lange Kloof so gou moontlik te verlaat", "Hy het die Komoeties gevra om hom alleen te laat"], 0)]),
  Q("7", "7.16", N("Waarom kan ons glo dat Benjamin/Lukas 'n sukses van sy toekoms sou maak?"), 1, "drama-fiela", "Evaluation",
    "Enige EEN van: hy was weer 'n Komoetie/deel van 'n liefdevolle gesin; hy het toe grond gehad; hy kon vir Nina vra om met hom te trou; hy was 'n harde werker met deursettingsvermoë; hy het weg van Elias se onderdrukking gekom; hy het nuwe vaardighede (roei) aangeleer; hy het geleer om na homself om te sien.",
    "Memo: any ONE of the listed reasons.",
    [S(1, "Waarom sou hy 'n sukses van sy toekoms maak?", ["Hy het steeds van Elias afhanklik gebly vir geld", "Hy was 'n harde werker met deursettingsvermoë wat nuwe vaardighede (roei) aangeleer het", "Hy het alles aanvaar wat ander vir hom besluit het", "Hy was bang vir verandering en het by sy gewoontes gehou"], 1)]),
  Q("7", "7.17", N("Sê hoe die verhouding tussen Benjamin/Lukas en Nina aan die einde van die drama verskil van hul verhouding aan die begin. (Een stap vir die begin en een vir die einde.)"), 2, "drama-fiela", "Inference",
    "Aan die begin was hulle vreemd vir mekaar/het mekaar nie vertrou nie/gedink sy was moeilikheid/het nie van mekaar gehou nie, maar aan die einde was hulle lief vir mekaar. (Of: eers soos broer en suster/vriende, maar ná die gesprek kon hy sê dat hy lief was vir haar.)",
    "Memo: both sides of the difference needed (one side = 1 mark); the memo's first version (vreemd/nie vertrou -> lief vir mekaar) is used. The memo's alternative first side (broer en suster/vriende) is NOT used as a distractor.",
    [S(1, "Aan die begin was hulle verhouding:", ["Hulle was reeds verloof en het 'n toekoms beplan", "Hulle was vreemd vir mekaar/het mekaar nie vertrou nie", "Hulle was vyande wat wraak op mekaar wou neem", "Hulle was onafskeidbaar en het alles met mekaar gedeel"], 1),
     S(1, "Aan die einde was hulle verhouding:", ["Hulle het steeds nie van mekaar gehou nie", "Hulle was lief vir mekaar", "Hulle het mekaar nie weer gesien nie", "Hulle was gelykgesind, maar het besluit om as vriende te skei"], 1)]),
  Q("7", "7.18", N("Sou dit Elias se skuld gewees het as hy alleen sonder sy kinders se ondersteuning moes oud word? Motiveer jou antwoord."), 1, "drama-fiela", "Evaluation",
    "Ja. Enige EEN van: Elias het nooit moeite gedoen om 'n goeie verhouding met sy kinders op te bou nie; sy kinders was net goed genoeg om vir hom te werk; hy het hulle mishandel (Nina se hare afgesny, osriem); hy het hulle sleg behandel/min liefde getoon; hy was wreed/lui/onregverdig. (OF Nee: kinders kon leer vergewe.)",
    "FLAG: the memo accepts BOTH 'Ja' (with a reason) and 'Nee' (kinders kon leer om te vergewe). The MCQ keys the 'Ja' reasons; the 'Nee' memo reason is deliberately not used as a distractor.",
    [S(1, "Sou dit Elias se skuld gewees het? Kies die beste antwoord met motivering.", ["Nee, want Elias het altyd na sy kinders se behoeftes omgesien", "Nee, want Nina en Lukas het nooit die geleentheid gehad om by hom te bly nie", "Ja, want Elias het die kinders mishandel en nooit moeite gedoen om 'n goeie verhouding met hulle te bou nie", "Ja, want Fiela het sy kinders van hom weggeneem"], 2)]),
  Q("7", "7.19.1", N("Sê nou daar was EEN ding waaroor Benjamin/Lukas kon spyt/sleg voel of homself blameer. Waaroor sou Benjamin/Lukas kon spyt/sleg voel?"), 1, "drama-fiela", "Evaluation",
    "Enige EEN van: dat hy nie vroeër vir Barta gekonfronteer het nie; nie meer pogings aangewend het om die Komoeties te sien nie; nie opgestaan het teen Elias se mishandeling nie; nie vroeër weggeloop het nie; gedink het Fiela het van hom vergeet; ooit die sensusmanne ontmoet het; nie harder probeer het om die magistraat te oorreed nie; Nina nie ondersteun het nie; op sy suster verlief geraak het.",
    "FLAG: the memo accepts any context-appropriate regret; the MCQ keys 'nie vroeër vir Barta gekonfronteer nie'. Distractors are things that contradict the text. 7.19.1 must be correct to earn 7.19.2.",
    [S(1, "Waaroor sou Benjamin/Lukas kon spyt/sleg voel?", ["Dat hy teen Elias opgestaan en Nina gehelp het", "Dat hy nie vroeër vir Barta gekonfronteer het nie", "Dat hy ooit by die Komoeties gewoon het", "Dat hy Kaliel se aanbod om roei te leer aanvaar het"], 1)]),
  Q("7", "7.19.2", N("Motiveer jou antwoord op VRAAG 7.19.1 (hy kon spyt wees dat hy nie vroeër vir Barta gekonfronteer het nie)."), 1, "drama-fiela", "Evaluation",
    "Enige EEN van: Benjamin kon gouer gelukkig gewees het; sou steeds gevoel het hy hoort iewers; kon die ander kinders ook 'n beter lewe laat leef het; ens.", "FLAG: the memo's 7.19.2 list is generic; the keyed reason ('gouer gelukkig') is one of the memo's. Must correlate with 7.19.1.",
    [S(1, "Hoekom sou hy spyt wees?", ["Hy sou nog langer by die Van Rooyens moes bly", "Hy kon gouer gelukkig gewees het", "Elias sou hom dan beloon het", "Fiela sou hom dan nie meer wou hê nie"], 1)]),

  // ============ SECTION C: KORTVERHALE – VRAAG 8: SPIEËLBEELDE (35 marks) ============
  // ---- 8.1 'Van Precious: 'n Buisie Salf' (18 marks) ----
  Q("8", "8.1.1", O("Wie (die naam) het vir Coenie gekies om aan die debatskompetisie deel te neem?"), 1, "short-stories", "Literal",
    "(Mev.) Buchner.", "Memo: (Mev.) Buchner.",
    [S(1, "Wie het vir Coenie gekies om aan die debatskompetisie deel te neem?", ["Mev. Buchner", "Mev. Maartens", "Oom Willem", "Mnr. Vassilis"], 0)]),
  Q("8", "8.1.2", O("Som die advies/raad wat Coenie oor die debatskompetisie by sy ma en oom Willem gekry het, op. (Kies een stuk raad in elke stap.)"), 3, "short-stories", "Reorganisation",
    "Coenie moes ... selfversekerd wees/in homself glo; 'n goeie liggaamshouding hê/sy skouers reguit maak; 'n netjiese voorkoms hê; glimlag/smile. (Enige DRIE.)",
    "Memo: any THREE of: selfversekerd; liggaamshouding/skouers reguit; netjiese voorkoms/netjiese klere; glimlag/smile.",
    [S(1, "Eerste stuk raad:", ["Hy moes selfversekerd wees/in homself glo", "Hy moes sy gesprek vooraf uit sy kop leer en nie opkyk nie", "Hy moes hard praat sodat almal hom kon hoor", "Hy moes die opponente se swakpunte aanval"], 0),
     S(1, "Tweede stuk raad:", ["Hy moes 'n goeie liggaamshouding hê/sy skouers reguit maak", "Hy moes met sy hande in sy sakke staan om kalm te lyk", "Hy moes sy oë toemaak terwyl hy praat", "Hy moes so min as moontlik beweeg en nooit kyk nie"], 0),
     S(1, "Derde stuk raad:", ["Hy moes 'n netjiese voorkoms hê/sorg dat sy klere netjies is", "Hy moes sy skooldrag by die huis los en gemaklike klere dra", "Hy moes sy gesig met 'n serp bedek om sy vel weg te steek", "Hy moes nie omgee hoe hy lyk nie"], 0)]),
  Q("8", "8.1.3", O("Bespreek Coenie se innerlike konflik oor sy voorkoms toe hy voor die spieël gestaan het. Verwys na albei kante van die konflik. (Een stap per kant.)"), 2, "short-stories", "Inference",
    "Aan die een kant het Coenie gedink hy lyk monsteragtig/moes hy vrede maak met sy lelike vel, maar aan die anderkant wou hy goed lyk/vir meisies aantreklik wees/aanvaar word. (Albei kante nodig vir 2 punte.)",
    "Memo: both sides must be mentioned (one side = 1 mark; both = 2). Converted to two steps (the two sides).",
    [S(1, "Die een kant van Coenie se konflik:", ["Hy wou goed lyk/vir meisies aantreklik wees en aanvaar word", "Hy wou liewer nie aan die debat deelneem nie omdat hy te veel moes leer", "Hy was trots op sy vel en wou dit vir almal wys", "Hy wou hê sy stiefpa moes hom help"], 0),
     S(1, "Die ander kant van Coenie se konflik:", ["Hy moes in die werklikheid vrede maak met sy lelike vel/het gedink hy lyk monsteragtig", "Hy het geweet sy vel was perfek, maar was bang vir die debat", "Hy het gedink die ander sou sy aknee nie raaksien nie", "Hy was seker dat die probleem binne 'n week sou verdwyn"], 0)]),
  Q("8", "8.1.4", O("Kies die KORREKTE antwoord om die sin mee te voltooi.\nSpanning is in die kortverhaal geskep deur ...\nA Coenie en Mari se negatiewe houding teenoor hulle stiefpa.\nB die polities-sensitiewe onderwerp van die debatskompetisie.\nC die bestuurder van die bussie wat nie 'n onderwyser was nie.\nD die waarskuwings oor slegte weer op pad na die kompetisie."), 1, "short-stories", "Inference",
    "D – die waarskuwings oor slegte weer op pad na die kompetisie.", "Memo: D.",
    [S(1, "Spanning is in die kortverhaal geskep deur ...", ["Coenie en Mari se negatiewe houding teenoor hulle stiefpa.", "die polities-sensitiewe onderwerp van die debatskompetisie.", "die bestuurder van die bussie wat nie 'n onderwyser was nie.", "die waarskuwings oor slegte weer op pad na die kompetisie."], 3)]),
  Q("8", "8.1.5(a)", O("In enige kortverhaal is daar gebeure en gevolge. Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: (a) Daar was 'n geweldige rukwind.\n" + COL_B_8), 1, "short-stories", "Reorganisation",
    "D – Die bestuurder van 'n voertuig het beheer verloor.", "Memo: D.",
    [S(1, "Daar was 'n geweldige rukwind. Wat was die gevolg?", ["Coenie was bekommerd oor Precious se toestand.", "Die bestuurder van 'n voertuig het beheer verloor.", "Coenie se probleem was nie meer 'n faktor nie.", "Precious het belowe om die volgende Maandag vir Coenie salf skool toe te bring."], 1)]),
  Q("8", "8.1.5(b)", O("Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: (b) Dit het gelyk asof Precious baie seergekry het.\n" + COL_B_8), 1, "short-stories", "Reorganisation",
    "A – Coenie was bekommerd oor Precious se toestand.", "Memo: A.",
    [S(1, "Dit het gelyk asof Precious baie seergekry het. Wat was die gevolg?", ["Coenie was bekommerd oor Precious se toestand.", "Die bestuurder van 'n voertuig het beheer verloor.", "Coenie se probleem was nie meer 'n faktor nie.", "Precious kon vir Coenie laat verstaan dat hy nie 'n ondier was nie."], 0)]),
  Q("8", "8.1.5(c)", O("Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: (c) Precious het vertel van haar verkragting.\n" + COL_B_8), 1, "short-stories", "Reorganisation",
    "C – Coenie se probleem was nie meer 'n faktor nie.", "Memo: C.",
    [S(1, "Precious het vertel van haar verkragting. Wat was die gevolg?", ["Precious het belowe om die volgende Maandag vir Coenie salf skool toe te bring.", "Die bestuurder van 'n voertuig het beheer verloor.", "Coenie was bekommerd oor Precious se toestand.", "Coenie se probleem was nie meer 'n faktor nie."], 3)]),
  Q("8", "8.1.5(d)", O("Kies die gevolg in KOLOM B wat pas by die gebeure in KOLOM A.\nKOLOM A: (d) Coenie het daarin geslaag om vir Precious te laat glo dat die lewe die moeite werd was.\n" + COL_B_8), 1, "short-stories", "Reorganisation",
    "B – Precious het belowe om die volgende Maandag vir Coenie salf skool toe te bring.", "Memo: B.",
    [S(1, "Coenie het vir Precious laat glo dat die lewe die moeite werd was. Wat was die gevolg?", ["Precious het belowe om die volgende Maandag vir Coenie salf skool toe te bring.", "Coenie was bekommerd oor Precious se toestand.", "Die bestuurder van 'n voertuig het beheer verloor.", "Precious kon vir Coenie laat verstaan dat hy nie 'n ondier was nie."], 0)]),
  Q("8", "8.1.6", O("Vertel van DRIE dinge wat Coenie van die lewe besef het ná sy gesprek met Precious. (Kies een in elke stap.)"), 3, "short-stories", "Inference",
    "Coenie het besef dat ... elke mens sy eie probleme het; sy probleem opgelos kon word; die lewe kosbaar is; die lewe oor meer gaan as hoe jy lyk; jy nooit hoop moet verloor nie; mense mekaar moet ondersteun; ander mense se probleme groter is as joune; ens. (Enige DRIE.)",
    "Memo: any THREE of the listed realisations (three distinct memo items used).",
    [S(1, "Eerste besef:", ["Elke mens het sy eie probleme/nagmerrieverhaal", "Net mense met 'n mooi voorkoms verdien aandag", "Probleme verdwyn as jy hulle ignoreer", "Ander mense se probleme is kleiner as joune"], 0),
     S(1, "Tweede besef:", ["Sy probleem kon opgelos word", "Sy probleem sou nooit opgelos kon word nie", "Dit is beter om niemand van jou probleme te vertel nie", "Net volwassenes kan probleme oplos"], 0),
     S(1, "Derde besef:", ["Die lewe is kosbaar en gaan oor meer as hoe jy lyk", "Die lewe is nie die moeite werd as jy 'n probleem het nie", "Hoe jy lyk bepaal of jy 'n goeie lewe sal hê", "Dit help nie om met ander mense te praat nie"], 0)]),
  Q("8", "8.1.7", O("Kan 'n mens Precious as karakter in hierdie kortverhaal bewonder? Motiveer jou antwoord met TWEE redes. (Kies een rede in elke stap.)"), 2, "short-stories", "Evaluation",
    "Ja. Enige TWEE van: sy het haar geheim alleen gedra; sy het nie gewys dat iets fout was nie; sy het uitgereik na ander/salf vir Coenie gegee; sy was empatiek; sy het hom laat besef hy is nie al een met probleme nie; sy was beseer, maar het Coenie gehelp; sy was sterk/het weer moed vir die lewe; ens.",
    "Memo: the memo accepts 'Ja' (with TWO reasons) or 'Nee' (two reasons). The MCQ keys the 'Ja' reasons; 'Nee' memo reasons are not used as distractors.",
    [S(1, "Eerste rede waarom Precious bewonder kan word:", ["Sy het uitgereik na ander/salf vir Coenie gegee", "Sy het haar probleme op Coenie afgeskuif", "Sy het gewag dat Coenie eerste vir haar hulp vra", "Sy het die bestuurder van die bussie blameer"], 0),
     S(1, "Tweede rede waarom Precious bewonder kan word:", ["Sy was ernstig beseer, maar het steeds vir Coenie gehelp/was hulpvaardig", "Sy het haar verhaal aan almal in die bussie vertel", "Sy het geweier om met Coenie te praat totdat sy ontsnap was", "Sy het gesê Coenie moes self sy probleem oplos"], 0)]),
  Q("8", "8.1.8", O("Gee TWEE redes waarom die titel gepas is. Verwys na die LETTERLIKE en FIGUURLIKE betekenis van die titel. (Een stap per betekenis.)"), 2, "short-stories", "Evaluation",
    "Letterlik: Precious belowe medisinale salf om Coenie se aknee te laat opklaar. Figuurlik: Precious se verhaal/gesprek bring heling/vertroosting/begrip en verander Coenie se uitkyk op homself en die lewe.",
    "Memo: letterlik and figuurlik need not be named but must be clear. Two marks, one per meaning.",
    [S(1, "Letterlike betekenis:", ["Precious belowe salf om Coenie se aknee te laat opklaar", "Precious gee vir Coenie salf vir sy beserings na die ongeluk", "Mev. Buchner gee vir Coenie salf vir sy senuwees", "Coenie smeer salf aan Precious se wonde"], 0),
     S(1, "Figuurlike betekenis:", ["Precious se verhaal/gesprek bring heling en vertroosting en verander Coenie se uitkyk op die lewe", "Die salf is 'n simbool van die ryk lewe wat Coenie in die toekoms sal hê", "Die salf wys dat geld alle probleme kan oplos", "Die salf beteken dat Coenie se probleme net oppervlakkig is en vanself verdwyn"], 0)]),

  // ---- 8.2 'Vegvlieënier Vivian' (17 marks) ----
  Q("8", "8.2.1", P("Waar (die geleentheid) het Vivian se droom om 'n vegvlieënier te word, begin?"), 1, "short-stories", "Literal",
    "By die Paasskou (toe sy 'n Mirage gesien het)/toe sy vir die eerste keer in 'n Mirage gesit het/by die weermaguitstalling.", "Memo: any ONE of the listed. (Distractors avoid the other two accepted answers.)",
    [S(1, "Waar het Vivian se droom om 'n vegvlieënier te word, begin?", ["By 'n loopbaandag by die skool", "By die Paasskou", "Toe haar pa haar na 'n lughawe geneem het", "Toe sy 'n rolprent oor vegvlieëniers gesien het"], 1)]),
  Q("8", "8.2.2", P("Noem TWEE redes waarom Vivian die dag toe hulle die Migs moes gaan onderskep, nie so opgewonde gevoel het toe hulle opstyg nie. (Kies een rede in elke stap.)"), 2, "short-stories", "Literal",
    "Enige TWEE van: die opdrag om Migs neer te skiet het haar ontstel; haar kollegas se negatiewe houding daardie oggend (hulle het haar nie as kameraad aanvaar nie); dit was haar eerste sending en sy was bang; ens.",
    "Memo: any TWO of the listed reasons.",
    [S(1, "Eerste rede:", ["Die opdrag wat hulle moes uitvoer/om Migs neer te skiet, het haar ontstel", "Sy was moeg omdat sy die vorige nag nie geslaap het nie", "Sy het nie gehou van haar uniform nie", "Sy het haar sending gesien as 'n gewone roetine-vlug"], 0),
     S(1, "Tweede rede:", ["Haar kollegas se negatiewe houding daardie oggend het haar ontstel", "Haar kollegas het haar oorlaai met lof en dit het haar bang gemaak", "Kaptein Swart het gesê sy hoef nie saam te gaan nie", "Sy het gedink die Migs was nie 'n gevaar nie"], 0)]),
  Q("8", "8.2.3", P("\"Maar Kaptein!\" (Reël 18)\nWat sê hierdie uitroep van die emosie wat Vivian op daardie oomblik ervaar het?"), 1, "short-stories", "Inference",
    "Dit dui aan dat Vivian frustrasie/opstandigheid/woede/irritasie/teleurstelling ervaar het (sy het gedink hy dink sy is nie goed genoeg nie).", "Memo: any ONE of frustrasie/opstandig/kwaad/geïrriteerd/teleurgesteld/ontsteld/ontevrede.",
    [S(1, "Watter emosie dui die uitroep aan?", ["Dankbaarheid en verligting", "Frustrasie/opstandigheid", "Vrees vir die gevaar", "Blydskap en trots"], 1)]),
  Q("8", "8.2.4(a)", P("In die gevegsone was Vivian baie bewus van elke kollega se beweging en posisie.\nKies die KORREKTE antwoord uit dié tussen hakies.\nHierdie gedrag van Vivian teenoor haar kollegas het aangedui dat sy (vir hulle omgegee het/op hulle gespioeneer het)."), 1, "short-stories", "Inference",
    "vir hulle omgegee het", "Memo: 'vir hulle omgegee het'. (8.2.4(a) must be correct to earn 8.2.4(b).)",
    [S(1, "Hierdie gedrag het aangedui dat sy ...", ["op hulle gespioeneer het", "vir hulle omgegee het", "hulle posisies vir Kaptein Swart wou verklap", "wou wys dat sy beter as hulle was"], 1)]),
  Q("8", "8.2.4(b)", P("Motiveer jou antwoord op VRAAG 8.2.4(a) (sy het vir hulle omgegee) deur te sê waarom Vivian só opgetree het."), 1, "short-stories", "Inference",
    "Enige EEN van: hulle was soos broers vir haar; hulle het saam swaargekry tydens opleiding; sy wou haar spanmaats beskerm; sy het geweet hulle lewens was in gevaar; sy het verantwoordelikheid vir hul veiligheid aanvaar; sy wou seker maak hulle word nie neergeskiet nie.",
    "Memo: any ONE; must correlate with 8.2.4(a).",
    [S(1, "Hoekom het Vivian só opgetree?", ["Sy wou haar spanmaats beskerm omdat sy geweet het hulle lewens was in gevaar", "Sy wou bewys dat sy beter as hulle kon vlieg", "Kaptein Swart het haar gedwing om hulle dop te hou", "Sy was bang die kollegas sou haar aanval"], 0)]),
  Q("8", "8.2.5", P("Sê waarom die volgende stelling ONWAAR is.\nIn hierdie kortverhaal kry ons voorbeelde van diskriminasie van begin tot einde."), 1, "short-stories", "Evaluation",
    "Teen die einde/slot was daar geen sprake van diskriminasie teen Vivian nie; daar is net tydens die finale keuring/tot en met die aanval op die Migs teen haar gediskrimineer.", "Memo: any ONE.",
    [S(1, "Hoekom is die stelling onwaar?", ["Vivian is nooit in die verhaal gediskrimineer nie", "Teen die einde was daar geen sprake van diskriminasie teen Vivian nie", "Sy is aan die einde steeds deur Kaptein Swart gediskrimineer", "Die diskriminasie het eers ná die aanval op die Migs begin"], 1)]),
  Q("8", "8.2.6", P("Kies die KORREKTE antwoord om die sin mee te voltooi.\nUit Vivian se optrede tydens die aanval op die eerste en derde Mig, kan ons aflei dat sy ...\nA jaloers was op haar leier se posisie.\nB trots was op haar optrede in die gevegsone.\nC tevrede was met haar leier se bevele aan haar.\nD wou kompeteer met haar kollegas se vaardighede."), 1, "short-stories", "Inference",
    "B – trots was op haar optrede in die gevegsone.", "Memo: B.",
    [S(1, "Uit Vivian se optrede kan ons aflei dat sy ...", ["jaloers was op haar leier se posisie.", "tevrede was met haar leier se bevele aan haar.", "wou kompeteer met haar kollegas se vaardighede.", "trots was op haar optrede in die gevegsone."], 3)]),
  Q("8", "8.2.7(a)", P("Dink aan Vivian en Sydney. Hoe sal jy die verhouding tussen Vivian en Sydney aan die einde van die kortverhaal beskryf?"), 1, "short-stories", "Inference",
    "Dit was 'n goeie/kollegiale/vertrouens-/respekvolle/waarderende verhouding. (8.2.7(a) must be correct to earn 8.2.7(b).)", "Memo: good/collegial/trusting/respectful/appreciative.",
    [S(1, "Die verhouding tussen Vivian en Sydney aan die einde:", ["Dit was 'n vyandige verhouding van mededinging", "Dit was 'n goeie, respekvolle kollegiale verhouding", "Dit was 'n verhouding van haat en wantroue", "Dit was 'n verhouding waarin Sydney haar steeds geïgnoreer het"], 1)]),
  Q("8", "8.2.7(b)", P("Motiveer jou antwoord op VRAAG 8.2.7(a) (goeie, respekvolle verhouding) met TWEE redes. (Konsentreer op Vivian EN Sydney.)"), 2, "short-stories", "Evaluation",
    "Enige TWEE van: Vivian het sy goeie optrede raakgesien en geprys; Sydney het haar goeie optrede raakgesien/sy duim in die lug gesteek/'good for you' geroep; aan die einde aanvaar hulle haar as gelyke/kry sy 'n eresaluut.",
    "Memo: any TWO of the listed reasons (one on Vivian, one on Sydney).",
    [S(1, "Vivian se kant:", ["Vivian het Sydney se goeie optrede raakgesien en geprys", "Vivian het Sydney se bevele geïgnoreer", "Vivian het Sydney van die geveg ontslaan", "Vivian het Sydney se vlugroete gekritiseer"], 0),
     S(1, "Sydney se kant:", ["Sydney het haar goeie optrede raakgesien en sy duim in die lug gesteek", "Sydney het haar ondermyn en vir Kaptein Swart gaan kla", "Sydney het ná die geveg weggedraai en nie gepraat nie", "Sydney het gesê sy het geluk gehad"], 0)]),
  Q("8", "8.2.8", P("Waarom kan ons glo dat Vivian 'n sukses van haar toekoms sou maak?"), 1, "short-stories", "Evaluation",
    "Enige EEN van: Vivian was 'n vasbyter; sy wou bewys dat sy as vrou 'n goeie vegvlieënier kon wees; sy was 'n harde werker; sy kon hindernisse oorkom; sy het koelkop in noodsituasies gebly; sy sou op haar kollegas se ondersteuning kon staatmaak; ens.",
    "Memo: any ONE of the listed reasons.",
    [S(1, "Waarom sou Vivian 'n sukses van haar toekoms maak?", ["Sy het gou moed opgegee as dinge moeilik was", "Sy het koelkop in noodsituasies gebly en hindernisse oorkom", "Sy het gewag dat ander haar werk vir haar doen", "Sy was deur almal van die begin af as gelyke aanvaar"], 1)]),
  Q("8", "8.2.9", P("Kaptein Swart se houding teenoor Vivian het verander ná die geveg met die Migs. Sê hoe sy houding aan die einde verskil van sy houding aan die begin. (Een stap vir die begin en een vir die einde.)"), 2, "short-stories", "Inference",
    "Eers het kaptein Swart Vivian stief behandel/getwyfel in haar vermoë/gediskrimineer/haar onderskat; aan die einde het hy haar gesalueer/die vlerksaluut gegee/openlik geprys/ten volle aanvaar.",
    "Memo: both sides needed (one side = 1 mark).",
    [S(1, "Kaptein Swart se houding aan die begin:", ["Hy het haar as sy beste vlieënier beskou en toegejuig", "Hy was stief/het getwyfel in haar vermoë en haar onderskat", "Hy was vriendelik en het haar soos 'n dogter behandel", "Hy het haar verwag om eerste die Migs aan te val"], 1),
     S(1, "Kaptein Swart se houding aan die einde:", ["Hy het haar gesalueer en openlik geprys/ten volle aanvaar", "Hy het steeds getwyfel en haar nie aanvaar nie", "Hy het haar gewaarsku om nie weer so te vlieg nie", "Hy het gesê dit was bloot geluk"], 0)]),
  Q("8", "8.2.10", P("Sou dit Vivian se vriend, John, se skuld gewees het as sy sou besluit het om nooit vliegskool toe te gaan nie? Motiveer jou antwoord."), 1, "short-stories", "Evaluation",
    "Ja. Enige EEN van: John het haar van die begin af ontmoedig; hy het gesê geen vrou kon as vegvlieënier opgelei word nie; hy het nie geglo dat 'n vrou dit kon doen nie; sy woorde het haar laat twyfel. (OF Nee: Vivian moes haar eie keuse maak.)",
    "FLAG: the memo accepts BOTH 'Ja' (with reason) and 'Nee' (Vivian se eie keuse). The MCQ keys the 'Ja' reason; the 'Nee' memo reasons are not used as distractors.",
    [S(1, "Sou dit John se skuld gewees het? Kies die beste antwoord met motivering.", ["Nee, want John het haar altyd aangemoedig om vliegskool toe te gaan", "Nee, want John het geen idee gehad van haar drome nie", "Ja, want John het haar ontmoedig en gesê geen vrou kon as vegvlieënier opgelei word nie", "Ja, want John het haar vliegskool-aansoek weggesteek"], 2)]),
  Q("8", "8.2.11(a)", P("Sê nou daar was EEN ding waaroor sommige lede van die raad wat Vivian-hulle finaal moes keur, kon spyt/sleg voel of hulself blameer. Waaroor sou hierdie lede kon spyt/sleg voel?"), 1, "short-stories", "Evaluation",
    "Hulle kon spyt voel dat hulle in hulle keuring teen Vivian gediskrimineer het a.g.v. haar geslag/nie meer vroue gekeur het nie/bevooroordeeld teenoor vroue was/haar gestereotipeer het/oor haar fisieke vermoëns getwyfel het.", "Memo: any of the listed. (8.2.11(a) must be correct to earn 8.2.11(b).)",
    [S(1, "Waaroor sou die raadslede kon spyt voel?", ["Dat hulle Vivian gekeur het", "Dat hulle teen Vivian gediskrimineer het weens haar geslag/bevooroordeeld teenoor vroue was", "Dat hulle te veel vliegtuie aangekoop het", "Dat hulle nie meer mans gekeur het nie"], 1)]),
  Q("8", "8.2.11(b)", P("Motiveer jou antwoord op VRAAG 8.2.11(a) (hulle het teen Vivian gediskrimineer)."), 1, "short-stories", "Evaluation",
    "Enige EEN van: sy het uiteindelik bewys wat sy kon doen; Vivian sou nie alleen die stryd teen vrouediskriminasie moes beveg nie; alle vooroordeel is verkeerd; Vivian was aan die einde suksesvol.", "Memo: any ONE; must correlate with 8.2.11(a).",
    [S(1, "Hoekom sou hulle spyt wees?", ["Vivian het uiteindelik bewys wat sy kon doen/was aan die einde suksesvol", "Vivian het hulle gedwing om hulle besluit te verander", "Die weermag het geld verloor weens haar keuring", "Vivian het hul bevele geïgnoreer"], 0)]),

  // ============ SECTION D: GEDIGTE – VRAAG 9 (35 marks) ============
  // ---- 9.1 'Ek het 'n huisie by die see' – HA Fagan (18 marks) ----
  Q("9", "9.1.1", GF("Watter tyd van die dag is dit in die gedig?"), 1, "poetry", "Literal",
    "Nag/aand. (Aanvaar nie 'donker' nie.)", "Memo: nag/aand; 'donker' not accepted. 'Aand' not used as a distractor.",
    [S(1, "Watter tyd van die dag is dit in die gedig?", ["Môre", "Middag", "Nag", "Dagbreek"], 2)]),
  Q("9", "9.1.2", GF("Lees strofe 1, 2 en 3. Skryf die hoofgedagte in elke strofe neer. (Een stap per strofe.)"), 3, "poetry", "Reorganisation",
    "Strofe 1: daar was 'n woeste storm/hewige golwe teen die huisie/rots. Strofe 2: die wind het sterk gewaai/die geluide van die wind maak die spreker bang. Strofe 3: in die huisie was dit veilig/warm/snoesig.",
    "Memo: one main idea per strofe, 1 mark each.",
    [S(1, "Hoofgedagte van strofe 1:", ["Die golwe slaan woes teen die rots waarop die huisie staan", "Die spreker voel eensaam in sy huisie", "Die spreker sit 'n vuur aan om warm te bly", "Die spreker beskryf 'n kalm see in die oggend"], 0),
     S(1, "Hoofgedagte van strofe 2:", ["Die spreker is bly oor die stilte buite", "Die wind waai sterk en die geluide daarvan maak hom bang", "Die spreker verlang na verlore vriende", "Die wind het die huisie se dak afgewaai"], 1),
     S(1, "Hoofgedagte van strofe 3:", ["Die spreker is bang en wil uit die huisie ontsnap", "In die huisie is dit veilig, warm en gesellig, al woed die storm buite", "Die storm het die lig laat doodgaan", "Die spreker slaap rustig omdat die storm bedaar het"], 1)]),
  Q("9", "9.1.3", GF("Voltooi die volgende sin deur die KORREKTE woord uit die lys te kies.\nhuisie; aaneen; slaan; hoor; kom\nDie herhaling van ... dui aan dat die golwe sonder ophou teen die rotse slaan."), 1, "poetry", "Inference",
    "aaneen", "Memo: aaneen.",
    [S(1, "Die herhaling van ... dui aan dat die golwe sonder ophou teen die rotse slaan.", ["huisie", "slaan", "hoor", "aaneen"], 3)]),
  Q("9", "9.1.4", GF("Kies die KORREKTE antwoord om die sin mee te voltooi.\nDaar is 'n ek-spreker in die gedig omdat dit die gedig ... maak.\nA modern\nB geloofwaardig\nC liries\nD universeel"), 1, "poetry", "Inference",
    "B – geloofwaardig.", "Memo: B.",
    [S(1, "Daar is 'n ek-spreker in die gedig omdat dit die gedig ... maak.", ["modern", "liries", "universeel", "geloofwaardig"], 3)]),
  Q("9", "9.1.5", GF("Lees reël 13 en 14. Wat kan ons van die spreker uit hierdie uitnodiging aflei?"), 1, "poetry", "Inference",
    "Enige EEN van: die spreker glo in sy huisie se stewigheid; is nie bang nie; is selfversekerd; is uitdagend; voel veilig/warm; sy geloof is sterk, die storms kan maar kom; hy kan die storms van die lewe trotseer.", "Memo: any ONE.",
    [S(1, "Wat kan ons uit reël 13 en 14 van die spreker aflei?", ["Hy is bang vir die storm en wil weghardloop", "Hy is selfversekerd en uitdagend: hy is nie bang vir die storms nie", "Hy is moeg vir die see en wil verhuis", "Hy hoop iemand sal hom kom red"], 1)]),
  Q("9", "9.1.6(a)", GF("'n Digter maak gewoonlik van verskillende tegnieke gebruik. Kies die tegniek in KOLOM B wat pas by die aanhaling in KOLOM A.\nKOLOM A: (a) \"teenaan die rots waarop my huisie staan\"\nKOLOM B: A alliterasie B vergelyking C kontras D assonansie E personifikasie"), 1, "poetry", "Reorganisation",
    "D – assonansie.", "Memo: D.",
    [S(1, "\"teenaan die rots waarop my huisie staan\" is 'n voorbeeld van ...", ["alliterasie", "vergelyking", "kontras", "assonansie"], 3)]),
  Q("9", "9.1.6(b)", GF("Kies die tegniek in KOLOM B wat pas by die aanhaling in KOLOM A.\nKOLOM A: (b) \"Ek hoor die winde huil\"\nKOLOM B: A alliterasie B vergelyking C kontras D assonansie E personifikasie"), 1, "poetry", "Reorganisation",
    "E – personifikasie.", "Memo: E.",
    [S(1, "\"Ek hoor die winde huil\" is 'n voorbeeld van ...", ["personifikasie", "vergelyking", "kontras", "alliterasie"], 0)]),
  Q("9", "9.1.6(c)", GF("Kies die tegniek in KOLOM B wat pas by die aanhaling in KOLOM A.\nKOLOM A: (c) \"Ek hoor ... 'n kreun, 'n klag soos verlore siele\"\nKOLOM B: A alliterasie B vergelyking C kontras D assonansie E personifikasie"), 1, "poetry", "Reorganisation",
    "B – vergelyking.", "Memo: B.",
    [S(1, "\"Ek hoor ... 'n kreun, 'n klag soos verlore siele\" is 'n voorbeeld van ...", ["assonansie", "personifikasie", "vergelyking", "kontras"], 2)]),
  Q("9", "9.1.6(d)", GF("Kies die tegniek in KOLOM B wat pas by die aanhaling in KOLOM A.\nKOLOM A: (d) \"... maar nog soek en smag\"\nKOLOM B: A alliterasie B vergelyking C kontras D assonansie E personifikasie"), 1, "poetry", "Reorganisation",
    "A – alliterasie.", "Memo: A.",
    [S(1, "\"... maar nog soek en smag\" is 'n voorbeeld van ...", ["alliterasie", "kontras", "vergelyking", "personifikasie"], 0)]),
  Q("9", "9.1.7", GF("Noem die TWEE ruimtes wat ons in hierdie gedig kry EN sê waarom die spreker positief oor EEN van hierdie ruimtes voel. (Drie stappe: ruimte 1, ruimte 2, verduideliking.)"), 3, "poetry", "Inference",
    "Ruimtes: buite sy huis/die oseaan/die see; binne sy huis/huisie. Verduideliking: die spreker voel positief oor binne die huisie omdat dit veilig/beskermd/warm/dig/lig is (of positief oor buite omdat die rots hom veilig laat voel).",
    "Memo: two spaces and an explanation of why one is positive = 3 marks (1 each).",
    [S(1, "Eerste ruimte in die gedig:", ["Buite die huisie by die woeste see/oseaan", "In 'n stad vol mense", "In 'n bos naby die huisie", "Op 'n skip op die see"], 0),
     S(1, "Tweede ruimte in die gedig:", ["In 'n skuiling in die berge", "Binne die huisie", "Op die strand in die son", "In die dorp teen die berg"], 1),
     S(1, "Waarom voel die spreker positief oor een van die ruimtes?", ["Binne die huisie is dit veilig, warm en beskermd teen die storm", "Binne die huisie is dit koud en donker, maar stil", "Buite is dit rustig en kalm", "Hy voel veilig omdat ander mense by hom is"], 0)]),
  Q("9", "9.1.8", GF("Het die spreker in hierdie gedig 'n liefde vir die natuur? Motiveer jou antwoord met TWEE redes. (Een rede per stap; die 'Ja'-kant.)"), 2, "poetry", "Evaluation",
    "Ja. Enige EEN sinvolle rede (memo: TWEE punte): die spreker gebruik sy sintuie om die natuur te beleef/hoor en sien dit van naby; die spreker het sy huisie by die see gebou/bly by die see; hy is nie bang vir die woeste see nie; hy sien die rots as iets wat hom help. (OF Nee: die storms pla hom/maak hom bang.)",
    "FLAG: the memo accepts BOTH 'Ja' and 'Nee', and awards the full TWO marks for any ONE sensible reason ('Enige EEN sinvolle rede ... verdien TWEE punte'). The MCQ splits this into two 1-mark steps using two distinct 'Ja'-side memo reasons; this is a deliberate approximation of the memo's 2-for-1 award.",
    [S(1, "Eerste rede:", ["Hy beleef die natuur met sy sintuie: hy hoor en sien die golwe en die wind van naby", "Hy haat die natuur en wil dit verander", "Hy bly in die stad weg van die natuur", "Hy gebruik die natuur net as bron van geld"], 0),
     S(1, "Tweede rede:", ["Hy het sy huisie by die see gebou en is nie bang vir die woeste see nie", "Hy het sy huisie so ver as moontlik van die see af gebou", "Hy hardloop weg wanneer die storm kom", "Hy wil die storms met 'n hoër muur buite hou"], 0)]),
  Q("9", "9.1.9", GF("Gee TWEE redes waarom die verkleinwoord 'huisie' in die titel gepas is. (Kies een rede in elke stap.)"), 2, "poetry", "Evaluation",
    "Enige TWEE van: dit beklemtoon hoe klein die huisie (in vergelyking met die woeste storm) is; dit sluit aan by woorde soos 'vuurtjie' en 'kersie'; dit wys hoe nietig/weerloos 'n mens teen die aanslae van die lewe is; dit dui op die spreker se liefde/omgee/vertroue in sy huisie.",
    "Memo: any TWO.",
    [S(1, "Eerste rede:", ["Dit beklemtoon hoe klein die huisie is teenoor die woeste storm", "Dit wys dat die huisie 'n paleis is", "Dit wys dat die huisie baie kamers het", "Dit dui aan dat die huisie in die dorp staan"], 0),
     S(1, "Tweede rede:", ["Dit dui op die spreker se liefde en vertroue in sy huisie", "Dit dui aan dat die spreker skaam is oor sy huisie", "Dit dui aan dat die spreker die huisie wil verkoop", "Dit dui aan dat die huisie nie veilig is nie"], 0)]),

  // ---- 9.2 'Rondom my' – Dawie de Jager (17 marks) ----
  Q("9", "9.2.1", GR("Kies die KORREKTE antwoord uit dié tussen hakies.\nVolgens reël 1 en 7 konsentreer die spreker op wat hy/sy in die (verlede gedoen het/toekoms wil doen)."), 1, "poetry", "Inference",
    "toekoms wil doen", "Memo: toekoms wil doen.",
    [S(1, "Volgens reël 1 en 7 konsentreer die spreker op wat hy/sy in die ...", ["verlede gedoen het", "verlede nie moes doen nie", "toekoms wil doen", "hede reeds gedoen het"], 2)]),
  Q("9", "9.2.2", GR("Gee DRIE redes waarom ons hierdie gedig as 'n lied kan beskryf. (Kies een rede in elke stap.)"), 3, "poetry", "Evaluation",
    "Enige DRIE van: die inhoud is liries/druk sterk persoonlike gevoelens uit; die ritme pas by 'n lied; die herhaling/refrein; die gebruik van alliterasie en assonansie/klankryk; woorde wat rym.",
    "Memo: any THREE of the listed reasons.",
    [S(1, "Eerste rede:", ["Die inhoud is liries/druk persoonlike gevoelens uit", "Die gedig vertel 'n lang storie met baie karakters", "Die gedig het geen ritme nie", "Die gedig bevat net feite"], 0),
     S(1, "Tweede rede:", ["Daar is herhaling/'n refrein van woorde en versreëls", "Elke reël is totaal verskillend en word nie herhaal nie", "Die gedig bevat dialoog tussen twee karakters", "Die gedig het 'n streng soneturvorm"], 0),
     S(1, "Derde rede:", ["Die ritme pas by 'n lied", "Die gedig is in 'n streng sonnetvorm geskryf", "Die gedig het net lang, ingewikkelde sinne", "Die gedig is 'n prosa-verhaal"], 0)]),
  Q("9", "9.2.3", GR("Lees reël 3 tot 6. Hoe voel die spreker in hierdie reëls?"), 1, "poetry", "Inference",
    "Hy/sy voel spyt/jammer/moedeloos/hartseer/ongelukkig/onseker/hulpeloos/versigtig/bekommerd/teleurgesteld/bedruk/eensaam.", "Memo: any ONE of the listed emotions.",
    [S(1, "Hoe voel die spreker in reël 3 tot 6?", ["Opgewonde en vol selfvertroue", "Spyt/hartseer oor sy/haar haastigheid in die verlede", "Kwaad vir die geliefde", "Gelukkig en tevrede"], 1)]),
  Q("9", "9.2.4(a)", GR("\"Ek sien die blou in jou deur die bietjie in jou oë.\" (Reël 9)\nBenoem die beeldspraak in die vetgedrukte woorde (die blou in jou)."), 1, "poetry", "Reorganisation",
    "('n) metafoor", "Memo: metafoor.",
    [S(1, "Watter beeldspraak is 'die blou in jou'?", ["Vergelyking", "Metafoor", "Personifikasie", "Ironie"], 1)]),
  Q("9", "9.2.4(b)", GR("\"Ek sien die blou in jou deur die bietjie in jou oë.\" (Reël 9)\nVerduidelik wat die spreker met hierdie beeldspraak (die blou in jou) bedoel."), 1, "poetry", "Inference",
    "Die spreker sien dat die geliefde hartseer/ongelukkig/bedruk/moedeloos/onseker is, of dat die geliefde ook al seergekry het.", "Memo: any ONE.",
    [S(1, "Wat bedoel die spreker met 'die blou in jou'?", ["Die geliefde het blou oë", "Die geliefde is hartseer/ongelukkig", "Die geliefde is kalm soos die lug", "Die geliefde is koud"], 1)]),
  Q("9", "9.2.4(c)", GR("\"Ek sien die blou in jou deur die bietjie in jou oë.\" (Reël 9)\nWat bedoel die spreker met die woorde 'die bietjie in jou oë'?"), 1, "poetry", "Inference",
    "Hy/sy sien net wat die geliefde vir hom/haar wil wys; die geliefde wys net 'n stukkie van sy/haar gevoelens/het sy/haar hart nog nie oopgemaak nie/probeer 'n bietjie van sy/haar hartseer wegsteek. (Die letterlike betekenis is verkeerd.)", "Memo: any ONE; literal meaning is wrong.",
    [S(1, "Wat bedoel die spreker met 'die bietjie in jou oë'?", ["Die geliefde het net 'n bietjie lig in haar oë", "Die geliefde wys net 'n klein deel van wat sy voel", "Die geliefde se oë is klein", "Die geliefde kan skaars sien"], 1)]),
  Q("9", "9.2.5", GR("Sê waarom hierdie stelling WAAR is.\nIn hierdie gedig sê die spreker dat 'n mens niemand in 'n verhouding moet indwing of forseer nie."), 1, "poetry", "Evaluation",
    "Enige EEN van: die spreker gee die geliefde tyd om te dink; die spreker gee die geliefde 'n keuse; die spreker sê/herhaal 'net as jy wil'/'As jy wil tyd vat hierdie keer'.", "Memo: any ONE; quotations acceptable.",
    [S(1, "Hoekom is die stelling waar?", ["Die spreker beveel die geliefde om dadelik te kom", "Die spreker gee die geliefde 'n keuse ('net as jy wil')", "Die spreker dreig om te vertrek", "Die spreker besluit self wat die geliefde moet doen"], 1)]),
  Q("9", "9.2.6", GR("Kies die KORREKTE antwoord om die sin mee te voltooi.\nOns kan aflei dat die spreker nou ... is om nie die geliefde seer te maak nie.\nA versigtig\nB haastig\nC ongeduldig\nD opgewonde"), 1, "poetry", "Inference",
    "A – versigtig.", "Memo: A.",
    [S(1, "Ons kan aflei dat die spreker nou ... is om nie die geliefde seer te maak nie.", ["haastig", "ongeduldig", "versigtig", "opgewonde"], 2)]),
  Q("9", "9.2.7(a)", GR("Wat bedoel die spreker met die volgende woorde?\n\"want die haastigheid in my / het my al veels te veel keer / ondergekry\" (Reël 3 tot 5)"), 1, "poetry", "Inference",
    "Enige EEN van: die spreker se haastigheid het hom/haar oorweldig/moedeloos/seergemaak laat voel; het probleme veroorsaak; was die rede vir sy/haar ongelukkigheid in die verlede; het verhoudings vernietig; was sy/haar baas.", "Memo: any ONE.",
    [S(1, "Wat bedoel die spreker?", ["Sy/haar haastigheid het hom/haar al dikwels moedeloos gemaak/probleme veroorsaak", "Hy/sy het al baie keer in 'n wedloop verloor", "Hy/sy is fisiek baie swak", "Hy/sy het nog nooit haastig opgetree nie"], 0)]),
  Q("9", "9.2.7(b)", GR("Wat bedoel die spreker met die volgende woorde?\n\"dinge wat jou terughou\" (Reël 11)"), 1, "poetry", "Inference",
    "Dit is dinge wat keer/jou stop/rem/pla/weghou van die spreker; deel nie alles nie; bang/skrikkerig om kanse te vat.", "Memo: any ONE.",
    [S(1, "Wat bedoel die spreker met 'dinge wat jou terughou'?", ["Dinge wat die geliefde help om vorentoe te beweeg", "Dinge wat die geliefde keer/rem om haarself heeltemal te wys", "Dinge wat die geliefde gelukkig maak", "Dinge wat die spreker wil verberg"], 1)]),
  Q("9", "9.2.8", GR("Sou dit die geliefde se skuld gewees het as die verhouding hierdie keer sou misluk? Motiveer jou antwoord."), 1, "poetry", "Evaluation",
    "Nee/Ja is albei moontlik. Ja: die spreker het sy/haar les geleer; wil dit rustig vat; neem die geliefde se vrese in ag; gee 'n keuse; die geliefde sukkel om oop te maak. OF Nee: dit sal van altwee afhang; die spreker spreek bloot 'n voorneme uit; miskien is hulle nie vir mekaar bedoel nie; miskien oorreed die spreker die geliefde in 'n verhouding wat nie gaan werk nie.",
    "FLAG: the memo accepts BOTH 'Ja' and 'Nee' ('Beoordeel elke antwoord op meriete'). The MCQ keys the 'Nee'-type reason 'dit sal van altwee afhang' because the question asks whether it would be the beloved's fault; distractors blame only the beloved or assume the speaker is faultless. The 'Ja' memo reasons are not used as distractors.",
    [S(1, "Sou dit die geliefde se skuld gewees het? Kies die beste antwoord met motivering.", ["Ja, want die geliefde is vir alles verantwoordelik omdat sy nie dadelik antwoord nie", "Ja, want die spreker het niks verkeerd gedoen nie en alles hang van die geliefde af", "Nee, want dit sal van altwee afhang/die spreker kan weer foute maak", "Nee, want die geliefde het die spreker nooit gevra om te wag nie"], 2)]),
  Q("9", "9.2.9", GR("Gee TWEE redes hoekom jy dink die lesse uit hierdie gedig is geskik vir tieners. (Kies een rede in elke stap.)"), 2, "poetry", "Evaluation",
    "Enige TWEE van: baie tieners bevind hulle in verhoudings; tieners kan oorhaastig in verhoudings raak/verhoudings neem tyd om te groei; tieners dink selfsugtig net aan eie behoeftes; tieners verstaan nie altyd dat die ander een kan kies/homself moet wees nie; tieners aanvaar mekaar nie met al hulle foute nie; tieners gee mekaar nie genoeg spasie nie; tieners se harte kan maklik breek.",
    "Memo: any TWO of the listed reasons.",
    [S(1, "Eerste rede:", ["Tieners kan oorhaastig in verhoudings raak, terwyl verhoudings tyd neem om te groei", "Tieners het nooit met verhoudings te doen nie", "Tieners moet net aan hulself dink", "Tieners moet die ander persoon dwing om te verander"], 0),
     S(1, "Tweede rede:", ["Tieners moet leer dat die ander een die vryheid het om homself/haarself te wees en te kies", "Tieners moet leer om altyd vinnig besluite te neem", "Tieners moet leer dat 'n verhouding nie tyd nodig het nie", "Tieners moet leer om hulle geliefdes te beheer"], 0)]),
  Q("9", "9.2.10(a)", GR("Sê nou daar was EEN ding waaroor die spreker kon spyt/sleg voel of homself/haarself blameer. Waaroor sou die spreker kon spyt/sleg voel?"), 1, "poetry", "Evaluation",
    "(Die spreker sou kon spyt voel dat hy/sy) te haastig was/dinge nie tyd gegee het om rustig te ontwikkel nie; mislukte verhoudings; die geliefde se gevoelens nie in ag geneem het nie; iemand seergemaak het.", "Memo: any of the listed. (9.2.10(a) must be correct to earn 9.2.10(b).)",
    [S(1, "Waaroor sou die spreker kon spyt voel?", ["Dat hy/sy dinge te haastig aangepak het en nie tyd gegee het om rustig te ontwikkel nie", "Dat hy/sy te stadig opgetree het", "Dat hy/sy die geliefde ontmoet het", "Dat hy/sy te veel tyd saam met die geliefde spandeer het"], 0)]),
  Q("9", "9.2.10(b)", GR("Motiveer jou antwoord op VRAAG 9.2.10(a) (spyt oor haastigheid)."), 1, "poetry", "Evaluation",
    "Enige EEN van: die spreker se oorhaastigheid lei tot mislukking; om te haastig te wees, lei tot gebreekte harte/vorige verhoudings wat nie uitgewerk het nie; hy/sy het die geliefde nie genoeg verstaan nie; as net een se gevoelens in ag geneem word, sal die verhouding misluk.", "Memo: any ONE; must correlate with 9.2.10(a).",
    [S(1, "Motivering:", ["Oorhaastigheid lei tot mislukking/gebreekte harte in vorige verhoudings", "Stadigheid lei tot mislukking van verhoudings", "Die geliefde sal hom/haar altyd vergewe", "Haastigheid maak verhoudings sterker"], 0)]),
];
