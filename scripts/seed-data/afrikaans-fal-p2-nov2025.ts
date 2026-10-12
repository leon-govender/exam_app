// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language, FAL) Paper 2 (Literatuur / Literature), November 2025, National
// Senior Certificate. Source: official DBE combined question paper + marking
// guideline PDF (81 pages: question paper pages 1-44 [paper's own pagination
// 1-44], marking guideline pages 45-81 [paper's own pagination 1-37]),
// downloaded from the stanmorephysics.com mirror (official DBE crest,
// "NASIENRIGLYNE", "Kopiereg voorbehou" on every page). The PDF has a real
// text layer; everything below was transcribed from it. No diagrams or images
// in the scoped sections, so no images were created.
//
// ============================ SCOPE (IMPORTANT) ============================
// The real P2 offers a CHOICE: the student answers TWO of four sections
// (A Roman/novel, B Drama, C Kortverhale/short stories, D Gedigte/poems), and
// within A and B picks one text (cover page: PUNTE 70, TYD 2 1/2 uur). This
// app has no "answer one of several" mechanism, so every seeded question is
// shown to the student. The student studies the drama "Fiela se Kind - Die
// Drama" and the novel title is unknown, so this file is DELIBERATELY SCOPED:
//   - Section A (Roman): SKIPPED ENTIRELY (questions 1-4, the four novels).
//   - Section B (Drama): ONLY question 7, Fiela se Kind (35 marks).
//     Questions 5 (Poppie) and 6 (Paljas) are NOT ingested.
//   - Section C (Kortverhale): BOTH short stories, question 8.1 "Kom ons
//     stuur vir Tasu" (Maretha Maartens, 18) and 8.2 "Opdrag" (Rike Olivier,
//     17) = 35 marks.
//   - Section D (Gedigte): BOTH poems, question 9.1 "Krisis" (Elizabeth
//     Eybers, 17) and 9.2 "Ken jy die see ..." (Uys Krige, 18) = 35 marks.
// Scoped total = 105 marks, MORE than the real 70-mark sitting (35 + 35 for
// two sections). That is intentional: this is a practice bank, not a
// simulation of exam-day choice constraints. `paper.total_marks` is the
// scoped 105; `duration_minutes` stays the real 150 (2 1/2 hours).
//
// Subject, cognitive levels and topics are identical across the ten
// Afrikaans FAL seed files (P1 and P2, 2021-2025). All seven topics are
// declared although P2 uses only drama-fiela (question 7), short-stories
// (question 8) and poetry (question 9).
//
// =========================== GRADING APPROACH ==============================
// Per the user's standing preference EVERY question is stepped multiple
// choice (`steps`): one step per mark-earning point, four options, the
// correct one taken from the memo, the wrong ones realistic Grade 12
// misreadings (never another memo-accepted answer). Step marks sum to the
// question's marks. NO question uses `marking_points`.
//   - Gap-fill (7.1, 8.1.1, 9.2.1): one step per blank.
//   - Open "waarom / wat beteken / verduidelik / motiveer" items: the memo's
//     accepted-answer list is condensed to the best-supported memo answer as
//     the correct option; the wrong options are plausible but wrong readings.
//     "Any ONE of" memo lists therefore yield one correct option even though
//     the memo would accept several; the model_answer lists the others.
//   - "Give TWO ..." (7.16, 7.18, 8.1.7, 8.2.9, 9.1.3): two single-mark steps,
//     each with a different memo-accepted answer as its correct option.
//   - Sequencing (7.11, 8.2.1, 9.1.9): four 1-mark steps ("which event is
//     FIRST / SECOND / THIRD / FOURTH?"), each offering all four events.
//   - Column matching (7.10, 8.1.6, 9.2.7): one step per row, options drawn
//     from the Column B items (correct + 3 others; 9.2.7 offers all four).
//   - Binary "(a/b)" choices (7.5.1, 7.12.1, 7.13.1, 8.1.5a, 8.2.2a, 8.2.6a,
//     9.1.4, 9.2.6): the two printed alternatives plus two extra plausible
//     alternatives so every step has four options.
//   - Letter MCQs (7.3, 7.14, 8.1.3, 8.2.3, 9.1.8, 9.2.5): the printed A-D
//     options are kept verbatim in the printed order.
//
// ======================= HOW EXTRACTS / POEMS ARE SHOWN ====================
// The student sees the printed text inside `text` (as in the English HL P2
// reference, but because the Afrikaans questions depend on the printed
// extract, the text itself is embedded):
//   - The first sub-question of each text (7.1 Teks M, 7.11 Teks N, 8.1.1
//     Teks O, 8.2.1 Teks P, 9.1.1 "Krisis", 9.2.1 "Ken jy die see ...")
//     carries the full printed extract / poem with the paper's line numbers
//     where the questions cite them. Later sub-questions of the same text
//     restate the line(s) they depend on (the printed line number is kept in
//     brackets) so each question stands alone in the UI.
//   - Drama extracts (Teks M, N) are reproduced one speech per line; the
//     printed margin line numbers are not reproduced, so quoted lines carry
//     their "Reël N" reference from the paper in the question text.
//   - The memo's `(Enige EEN of soortgelyk ...)` lists are reproduced in
//     `model_answer` / `marking_notes`.
//
// ================================ FLAGS ====================================
// FLAG 1 (7.1.4): memo accepts "bottels/soetoliebottel/twee blou bottels/
//   kraffie/botteltjies"; the correct option uses "bottels".
// FLAG 2 (7.10 and 8.1.6 matching): the memo letters are transcribed as
//   printed. The Column A / Column B item order in the PDF text layer was
//   checked against the memo mapping and is consistent (e.g. 7.10.2 Kapp had
//   to check on Lukas -> D Elias used the chance to look for work for Nina).
// FLAG 3 (8.2.1 and 7.11): memo gives the correct SEQUENCE as a list; steps
//   below follow that order exactly (it differs from the order printed in the
//   question). 8.2.1 memo order: Jordaantjie sorg vir iets anders; Sarah
//   begin met E se situasie; Sarah besef sy worstel met gevoelens vir Gerrie;
//   Sarah hoop Jordaantjie lees tussen die reels.
// FLAG 4 (9.2.2): the memo awards 2 marks for ONE combined answer
//   ("Die see lyk rustig/kalm, maar is eintlik baie gevaarlik/bedrieglik").
//   Split into two 1-mark steps (the calm appearance, the real danger);
//   the memo does not state the split, so this is an editorial choice.
// FLAG 5 (9.1.5): memo accepts several answers (hoofletters, voornaamwoorde
//   soos ek/jy, personifikasie, eiename). Only "personifikasie" is offered
//   as the correct option; the others are in the model_answer.
// FLAG 6 (cognitive levels): the memo gives no Barrett-taxonomy labels, so
//   levels are assigned by question type: gap-fill/facts = Literal;
//   sequencing/matching/which-event = Reorganisation; meaning/tone/"waarom"
//   = Inference; identify-with/credibility/theme-fit/lesson = Evaluation.
// FLAG 7 (8.1.8): the memo's list is long and varied ("Tasu se ma wou nie
//   ..."); the correct option uses "wou nie by mense geld leen/skuld maak
//   nie".
// FLAG 8 (poem line numbers): "Ken jy die see ..." refrain lines are
//   numbered 5, 10, 15, ... 40 in the paper; reproduced the same.

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
  year: 2025,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 150,
  total_marks: 105,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/04/NSC-Afrikaans-FAL-Grade-12-November-2025-P2-and-Memo.pdf" as string | null,
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

// ---------------------------------------------------------------------------
// Printed texts (shown to the student inside `text`)
// ---------------------------------------------------------------------------

const TEKS_M = `TEKS M (Fiela se Kind – Die Drama)

BARTA (skrik haar oorhoeks): Opsoek?
ELIAS (vinnig): Loop drink 'n bietjie water, vrou. Mister Kapp, ek sê jou vandag hier in my huis, en jy kan dit vir die magistraat ook loop sê: as sy hier by mý kom moeilikheid maak, gaat ek self moeilikheid maak. My vrou sal dit nie kan staan nie.
KAPP: Die magistraat het gesê julle moet praat as sy dalk hier kom lol.
ELIAS: Dis reg, mister, ek sal so maak.
KAPP: Waar's die kinders, Van Rooyen?
ELIAS: Weet nie wanneer hulle weer huis kry nie. Hang af. Dié meisiekind van my is mos nes 'n bok oor die Bos. Mister kom mos dikwels op die dorp, mister moet tog vir my uitluister of daar nie van die Engelse is wat 'n kinderwagter soek nie. Verniet wil ek haar nie graag verhuur nie, maar as hulle haar 'n stukkie klere en so aan gee, sal ons regkom met die prys.
KAPP: Ek sal verneem. (Pouse.) Hoe lank skat jy gaan die kinders nog wegbly?
ELIAS: Moeilik om te sê, mister Kapp. Moeilik. (Lang pouse.) Mister kan die magistraat met 'n skoon gemoed loop sê dat dit goed gaan met hom. Ek meen, hy's mos nou darem onder sy eie mense.
KAPP: Ek sal vir hom sê. Nou ja, dan loop ek dan maar eers.
    Hulle groet. KAPP af.
BARTA: As Lukas vandag hier was, was jy in die moeilikheid, ...`;

const TEKS_N = `TEKS N (Fiela se Kind – Die Drama)

WEATHERBURY (agterdogtig; kortaf): Waarom wil jy haar geld kom haal?
LUKAS: Wel ... ee ... dis eintlik my pa wat die geld laat haal.
WEATHERBURY: Julle kan nie sommer elke maand al haar geld kom haal nie. Ek sal dit nie toelaat nie!
LUKAS: U verstaan nie, miss Weatherbury. Bosmense is anders. Alles word saam in een hand gegooi.
WEATHERBURY: Nina is nie meer in die Bos nie. Ek kan dus nie sien waarom julle nog haar geld wil hê nie.
LUKAS: Ek ook nie eintlik nie.
NINA verskyn agter MISS WEATHERBURY in die deur.
LUKAS: Middag, Nina.
NINA: Hoe't julle geweet waar ek is?
LUKAS: Iemand op die dorp het my gesê.
NINA: Weet Pa-hulle?
LUKAS: Nog nie.
NINA (kwaai): Jy loop sê nie waar ek is nie! Jy hou jou bek, Lukas van Rooyen.
WEATHERBURY: Christina! Praat ordentlik!
NINA: Jy loop sê nie jy het my gekry nie. Ek gee nie langer my geld af nie, vir niemand nie. Pa kan sy gat oplig en vir homself werk. (Pouse.)
LUKAS: Ek het eintlik gekom om jou 'n guns te vra.
NINA: Is jy siek, Lukas?
LUKAS: Nee. Maar vir al die kere wat ek vir jou geskerm het, vir elke keer wat ek jou nie verklap het nie en vir al die bas wat ek vir jou help afkap het, vra ek jou vandag net een keer se hulp.
NINA: Wat?
LUKAS: Gaan huis toe en gaan sê vir Pa ek kom nie terug nie.`;

const TEKS_O = `TEKS O (''Kom ons stuur vir Tasu'' – Maretha Maartens)

1  ''Sal Ma ... sestig rand kan bymekaarskraap?'' vra Tasu.
2  ''Daarvan kan ek vergeet,'' sê Ma.
3  ''Kan ons nie sestig rand iewers leen nie?'' vra Tasu.
4  Ma se kop ruk. ''Ek leen by niemand geld nie,'' sê sy.
5  ''Kom ons verkoop iets,'' stel Tasu voor. ''Eiers of iets.''
6  ''Ons eet self ons hoenders se eiers,'' sê Ma. ''Dit hou julle mage darem vol.''
7  Skielik onthou Tasu van sy sewe-en-vyftig botteltjies vol tieroogklippe.
8  Nee, nee, dink hy dadelik. Ek gaan nie aan my botteltjies tieroë dink nie. Ek
9  het te hard gewerk om hulle almal vol te kry. Sterkman het my gemóór, ek het
10 my besimpeld gewerk, net om sy ou slypsteen te kon gebruik. Ek het gesweet
11 en gebárs om daardie oë uit die klippe te haal.
12 Maar omdat hy so lief is vir sy vet, goeie ouma, sê sy mond die dinge wat sy
13 hart nie wil sê nie: ''Ek het baie botteltjies vol tieroë, Ma. Ek sal by die
14 petrolpomp gaan staan, waar die mense brandstof ingooi. Ek sal tieroë verkoop
15 totdat daar genoeg geld is om vir die taxi te betaal.''
16 En dis toe wat Tasu doen.
17 Nes die mense stilhou om brandstof vir die ver pad in te gooi, wys Tasu die
18 botteltjies vol tieroë vir hulle.`;

const TEKS_P = `TEKS P (''Opdrag'' – Rike Olivier)

1  Orraait. Maar wat sou háár "boodskap" dan wees?
2  Liefste Gerrie, kyk na my. Ek is sewentien. My ouma was sestien toe sy
3  getroud is. Sy't nooit gaan leer nie, al wou sy dalk? My oupa was haar eerste
4  kêrel, so sê my ma, en hulle was mal oor mekaar en die opsitkers het kleinklein
5  gebrand, glo, met die vryery vooraf … Sy't later agt kinders gehad. Sy't nooit
6  wakker moes lê oor die mag en die mag-nie. Maar dit was my óúma.
7  Wat maak ék met hierdie verskriklike lief wees vir jou as ek my nie kan commit
8  nie? Ek is bang dat jou en my paadjies anderdag nie meer sal saamloop nie.
9  Ek is bang vir die seer van ghoebaai. Ek is bang vir die breek van iets wat heel
10 moes gebly het, want ek kan nie met my lyf vir jou lief wees net vir nou nie.
11 Sê jy verstaan dit, lief? Dat ons tussen "nou" en "trou" moet kan saamleef
12 met onsself om somehow te oorleef? Vir later, vir 'n "morning after" wat goed
13 sal wees, agterna?
14 AANBEVELING
15 P v W word aanbeveel vir aankope deur Bib om te dien as vertrekpunt by
16 besprekings, bv. in Voorligtingsklasse.
17 So, so kaal soos "tienerseks".`;

const GEDIG_KRISIS = `KRISIS – Elizabeth Eybers

1  Dis hier wat ons twee skei - jy, Hart, en ek,
2  albei tot afskeid so onvoorbereid.
3  Die weg was lieflik waarlangs jy geleiꞌt
4  maar dis verby, al staar jy terug. Nou strek
5  die pad langs klowe, afgrond en moeras.
6  Voortvarend en 'n lafaard soos altyd
7  en nooit in staat tot enige besluit
8  en siek daarby, is jy nou net 'n las.

9  Jy was die gas en gasheer by die fees,
10 die seremoniemeester en die nar:
11 jou dwase raad kan net die Hoof verwar
12 waar elke tree die laaste tree mag wees.
13 Kyk, dit word laat, die kermis is verby,
14 kan jy dit nie begryp? Hier moet ons skei.

[Uit: Versamelde gedigte, Human & Rousseau en Tafelberg, 1980]`;

const GEDIG_SEE = `KEN JY DIE SEE … – Uys Krige

1  Ken jy die see, Meneer, ken jy die see?
2  Hy lyk nou soos jou voorstoep blinkgeskuur
3  en kalm soos min dinge hier benee,
4  maar hyꞌs gevaarliker as vlam of vuur.
5  Dan sê jy nog, Meneer, die vis is duur.

6  Dié vrede, kalmer as 'n stil, soet kind,
7  lyk of dit dae, dae lank sal duur.
8  Maar word dié bries 'n bulderende wind,
9  dan veg jy vir jou lewe, uur na uur.
10 En jy sê nog, Meneer, die vis is duur.

11 Ja, sleep die swart, swart wind die swart nag mee,
12 waar kry ons hulp dan, waarꞌs ons naaste buur?
13 Die Dood staan voor die deur. Gee hy nog net één tree,
14 dan kelder hy ons almal in sy koue skuur.
15 En jy sê nog, Meneer, die vis is duur.

16 Wat van die storms wat nooit ophou raas?
17 Jy sit pal in jou kliphuis, klam en guur,
18 en hoor die wind al woester, wreder blaas.
19 En daarꞌs geen sprokkel hout meer vir jou vuur.
20 Dan sê jy nog, Meneer, die vis is duur.

21 Was jy al van jou bootjie soos 'n veer gevee
22 deur 'n grys golf hoog soos 'n tronk se muur.
23 Wat help dit om te spartel en te skree: ꞌꞌNee! Nee!ꞌꞌ
24 sluk jy eers daardie waters sout en suur?
25 Dan sê jy nog, Meneer, die vis is duur.

26 Ken jy die doodsangs as die rukwind klap?
27 Dié waansin ken geen redmiddel of kuur.
28 Hy vreet mos aan jou ingewande nes 'n krap.
29 Hyꞌs koud soos ys, heet soos hellevuur!
30 Dan sê jy nog, Meneer, die vis is duur.

31 Ken jy die see, Meneer, ken jy die see?
32 Hy wat met groen jaloerse oë na ons gluur,
33 ons wat net één ou misstappie moet gee
34 en hy kom tromp-op op ons afgestuur!
35 Dan sê jy nog, Meneer, die vis is duur.

36 Sien jy die krom ou vroutjie daar, mevrou Mathee,
37 wat telkens ver, vér oor die golwe tuur?
38 Sy dink dié briesie bring haar seuns betyds vir tee.
39 Hul slaap aldrie agter die kerkhofmuur.
40 Dan sê jy nog, Meneer, die vis is duur ...

[Uit: Versamelde gedigte, JL van Schaik, 1985]`;

export const questions: QuestionSeed[] = [
  // ======================================================================
  // QUESTION 7: FIELA SE KIND - DIE DRAMA (Dalene Matthee) - 35 marks
  // ======================================================================
  {
    number: "7", sub_number: "7.1",
    text: `Lees die uittreksel hieronder deur en beantwoord die vrae wat daarop volg (VRAE 7.1 tot 7.10).\n\n${TEKS_M}\n\n7.1 Voltooi die volgende paragraaf feitelik korrek deur die ontbrekende woord(e) uit die drama te kies:\n\nNa (7.1.1) … jaar as Fiela se kind, moes Benjamin saam met die Van Rooyens Bos toe gaan. Benjamin het die kinders (7.1.2) … wat aan hom gevat het. Tant (7.1.3) …, een van die buurvrouens, het gesê hulle moet hom uitlos, want hy was moeg. Sy suster wou hom dadelik van haar geheim vertel. Haar geheim was die (7.1.4) … wat sy weggesteek het.`,
    marks: 4, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "7.1.1 nege/9; 7.1.2 geskop; 7.1.3 Gertjie; 7.1.4 bottels/soetoliebottel/twee blou bottels/kraffie/botteltjies.",
    marking_notes: "Een punt per korrekte woord (memo 7.1.1 - 7.1.4).",
    steps: [
      { marks: 1, description: "7.1.1 Na hoeveel jaar as Fiela se kind moes Benjamin saam met die Van Rooyens Bos toe gaan?", options: ["nege", "sewe", "dertien", "vyf"], correctIndex: 0 },
      { marks: 1, description: "7.1.2 Benjamin het die kinders ... wat aan hom gevat het.", options: ["geslaan", "geskop", "uitgeskel", "weggejaag"], correctIndex: 1 },
      { marks: 1, description: "7.1.3 Tant ..., een van die buurvrouens, het gesê hulle moet hom uitlos.", options: ["Barta", "Sarie", "Gertjie", "Weatherbury"], correctIndex: 2 },
      { marks: 1, description: "7.1.4 Haar geheim was die ... wat sy weggesteek het.", options: ["brief", "geld", "ringe", "bottels"], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Teks M. Waarom het Barta so groot geskrik? (Reël 1: ''BARTA (skrik haar oorhoeks): Opsoek?'')",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Enige EEN: Barta het geweet wat in die hof gebeur het/dat Lukas nie hulle kind was; Barta was bang Fiela sou veroorsaak dat Lukas weer van hulle af weggeneem word; Barta was bang vir moeilikheid met die gereg/wet; Barta was bang Fiela weet dalk waar Lukas/Benjamin vandaankom; Barta was bang Fiela/Kapp/die magistraat het uitgevind dat sy gejok het.",
    marking_notes: "1 punt vir enige EEN memo-antwoord. Die korrekte opsie hieronder is een van die memo-antwoorde.",
    steps: [
      { marks: 1, description: "Waarom het Barta so groot geskrik toe Kapp sê Fiela is opsoek?", options: ["Sy was bang Fiela sou veroorsaak dat Lukas weer van hulle af weggeneem word.", "Sy was bang Elias sou haar slaan omdat sy laat was met die kos.", "Sy het gedink Lukas is in die Bos verdwaal en kom nie terug nie.", "Sy was bang Kapp wou die Van Rooyens se huis kom afneem."], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Teks M. Lees reëls 2 tot 4 (''Loop drink 'n bietjie water, vrou. Mister Kapp, ek sê jou vandag hier in my huis ... as sy hier by mý kom moeilikheid maak, gaat ek self moeilikheid maak. My vrou sal dit nie kan staan nie.'').\n\nKies die KORREKTE antwoord om die sin mee te voltooi: Die toon in Elias se woorde in hierdie reëls kan as … beskryf word.",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "B / aggressief.",
    marking_notes: "Memo 7.3: B.",
    steps: [
      { marks: 1, description: "Die toon in Elias se woorde (reëls 2 tot 4) kan as ... beskryf word.", options: ["respekvol", "aggressief", "hartseer", "kalm"], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.4.1",
    text: "Teks M. ''Die magistraat het gesê julle moet praat as sy dalk hier kom lol.'' (Reël 5)\n\n7.4.1 Na wie verwys ''sy''?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "(Na) Fiela (Komoetie).",
    marking_notes: "Memo 7.4.1.",
    steps: [
      { marks: 1, description: "Na wie verwys ''sy'' in Kapp se sin?", options: ["Barta", "Nina", "Mevrou Kapp", "Fiela"], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.4.2",
    text: "Teks M. ''Die magistraat het gesê julle moet praat as sy dalk hier kom lol.'' (Reël 5)\n\n7.4.2 Wat beteken hierdie aanhaling binne die konteks van die drama?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Enige EEN: Die magistraat het opdrag gegee dat Fiela die kind moes uitlos/haar verbied om naby die kind te kom; die Van Rooyens moes die magistraat laat weet as Fiela moeilikheid kom maak; die magistraat sal Fiela vervolg/tronk toe stuur as sy moeilikheid maak.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Wat beteken die aanhaling binne die konteks van die drama?", options: ["Die magistraat wil hê Fiela moet by die Van Rooyens kom woon.", "Die Van Rooyens moes Fiela vra om saam met Lukas na die dorp te gaan.", "Die magistraat het opdrag gegee dat Fiela die kind moes uitlos en die Van Rooyens moes laat weet as sy moeilikheid kom maak.", "Die magistraat wou hê die Van Rooyens moes vir Fiela geld gee."], correctIndex: 2 },
    ],
  },
  {
    number: "7", sub_number: "7.5.1",
    text: "Teks M. ''Dié meisiekind van my is mos nes 'n bok oor die Bos.'' (Reël 8 en 9)\n\n7.5.1 Kies die KORREKTE antwoord. Dit is 'n voorbeeld van 'n ...",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "vergelyking.",
    marking_notes: "Memo 7.5.1: vergelyking (die woord ''nes'' toon dit).",
    steps: [
      { marks: 1, description: "Dit is 'n voorbeeld van 'n ...", options: ["metafoor", "personifikasie", "vergelyking", "oordrywing"], correctIndex: 2 },
    ],
  },
  {
    number: "7", sub_number: "7.5.2",
    text: "Teks M. ''Dié meisiekind van my is mos nes 'n bok oor die Bos.'' (Reël 8 en 9)\n\n7.5.2 Wat beteken die woorde ''nes 'n bok oor die Bos'' binne die konteks van die drama?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Enige EEN: Nina was lief vir die Bos; Nina wou net altyd in die Bos wees; Nina was vlugvoetig/rats in die Bos; die Bos was Nina se gelukkige plek; Nina kon ook soos 'n bok in die Bos wegraak/wegkruip/wild wees; dit was Nina se ontvlugting van Elias/werk.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Wat beteken ''nes 'n bok oor die Bos'' binne die konteks van die drama?", options: ["Nina is lomp en stadig as sy deur die Bos loop.", "Nina is bang vir die Bos en bly altyd by die huis.", "Nina is baie lui en wil nooit werk nie.", "Nina is lief vir die Bos en rats daarin; die Bos is haar ontvlugting."], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.6",
    text: "Teks M. Die meisiekind hét later werk as kinderwagter gekry.\n\n7.6 Watter feit uit die drama sê vir ons waarom hierdie stelling WAAR is?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Reorganisation",
    model_answer: "Enige EEN: Nina het die skoolmeester se kinders gaan oppas; dit is die werk wat Elias gevra het die Boswagter voor moet uitkyk; toe Lukas haar na die Boswagter toe vat, het sy gesê sy is niemand se kinderoppasser nie; toe Lukas haar geld moes gaan haal, het hy uitgevind sy is nie meer in diens van die skoolmeester nie.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Watter feit wys dat Nina later werk as kinderwagter gekry het?", options: ["Sy het vir mister Kapp se kinders gepas.", "Sy het die skoolmeester se kinders gaan oppas.", "Sy het by die magistraat se huis kinders opgepas.", "Sy het Barta se kleinkinders in die Bos versorg."], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.7",
    text: "Teks M. ''As Lukas vandag hier was, was jy in die moeilikheid, ...'' (Reël 19)\n\nBarta het niks gesê toe Elias oor Lukas gelieg het nie.\n\n7.7 Waarom kan jy met Barta se optrede identifiseer?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Ek kan hiermee identifiseer, want Barta was (enige EEN): bang vir Elias; gewoond daaraan om in te val by wat Elias besluit/doen; bang Elias kry probleme met die gereg; bang dit kom uit dat sy in die hof gelieg het; gewoond daaraan om gemanipuleer te word; seker die magistraat sou 'n probleem hê as hy uitvind Lukas word mishandel.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom kan jy met Barta se optrede (haar stilbly) identifiseer?", options: ["Barta was gewoond daaraan om in te val by wat Elias besluit en was bang vir hom.", "Barta het gedink Elias was heeltemal reg om Lukas so te straf.", "Barta het nie geweet wat Elias vir Kapp gesê het nie.", "Barta het besluit dis nie haar saak wat met Lukas gebeur nie."], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.8",
    text: "Voordat Lukas en Nina uit die Bos teruggekom het, het iets by Elias-hulle se huis gebeur. Wat het gebeur?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "Enige EEN: Fiela was by die Van Rooyens se huis om Benjamin se goed/dasvelkombers te bring; Fiela het kom kyk hoe dit met Lukas gaan; Elias het Fiela en haar seun weggejaag/verwilder; Mister Kapp het nuus gebring dat Fiela na haar kind soek.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Wat het by Elias-hulle se huis gebeur voordat Lukas en Nina uit die Bos teruggekom het?", options: ["Elias het Fiela genooi om saam met hulle te eet.", "Fiela het by die Van Rooyens se huis gekom om Benjamin se goed te bring.", "Kapp het nuus gebring dat Lukas in die Bos verdwaal het.", "Barta het die magistraat gaan sien om Lukas terug te vra."], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.9",
    text: "Teks M. Hoe kry Elias dit reg om jou as leser negatief teenoor hom te laat voel?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Enige EEN: Hy het 'n dreigende/aggressiewe/arrogante/rassistiese/selfsugtige/oneerlike houding gehad/gedreig om moeilikheid te maak; hy het gelieg as hy sê dit gaan goed met Lukas; hy het nie regtig Kapp se vrae beantwoord nie; hy het sy kinders geslaan/hard laat werk/mishandel; hy het net aan homself gedink; hy is gevoelloos teenoor Fiela.",
    marking_notes: "1 punt vir enige EEN memo-antwoord (voorbeelde van situasies kan gegee word).",
    steps: [
      { marks: 1, description: "Hoe laat Elias jou as leser negatief teenoor hom voel?", options: ["Hy dreig om moeilikheid te maak en lieg dat dit goed gaan met Lukas.", "Hy erken eerlik teenoor Kapp dat Lukas nie sy kind is nie.", "Hy is bang vir mister Kapp en verskuil hom in die huis.", "Hy verloor sy humeur en slaan mister Kapp."], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.10",
    text: "Die dinge wat mense doen, het altyd gevolge. Kies die gevolg uit KOLOM B wat by die gebeure in KOLOM A pas.\n\nKOLOM A\n7.10.1 Nina het Lukas gehelp om die pad uit die Bos te kry.\n7.10.2 Kapp moes gaan kyk hoe dit met Lukas in die Bos gaan.\n7.10.3 Fiela het Benjamin se goed Bos toe gevat.\n7.10.4 Elias het vir Lukas gestuur om vir Nina op Knysna te gaan soek.\n\nKOLOM B\nA Elias het vir Lukas gesê dat Barta sy ma is.\nB Lukas het besef dat hy 'n liefde vir die see het.\nC Lukas het vinnig geleer hoe om met die hout te werk.\nD Elias het die kans gebruik om vir Nina werk op die dorp te probeer kry.\nE Elias het die kinders fisies gestraf.",
    marks: 4, topicKey: "drama-fiela", cognitiveLevelName: "Reorganisation",
    model_answer: "7.10.1 E (Elias het die kinders fisies gestraf); 7.10.2 D (Elias het die kans gebruik om vir Nina werk op die dorp te probeer kry); 7.10.3 A (Elias het vir Lukas gesê dat Barta sy ma is); 7.10.4 B (Lukas het besef dat hy 'n liefde vir die see het).",
    marking_notes: "1 punt per korrekte pasmaat (memo 7.10.1 - 7.10.4). Sien FLAG 2 in die opskrif.",
    steps: [
      { marks: 1, description: "7.10.1 Nina het Lukas gehelp om die pad uit die Bos te kry. Wat is die gevolg?", options: ["Elias het vir Lukas gesê dat Barta sy ma is.", "Lukas het vinnig geleer hoe om met die hout te werk.", "Elias het die kinders fisies gestraf.", "Elias het die kans gebruik om vir Nina werk op die dorp te probeer kry."], correctIndex: 2 },
      { marks: 1, description: "7.10.2 Kapp moes gaan kyk hoe dit met Lukas in die Bos gaan. Wat is die gevolg?", options: ["Elias het die kinders fisies gestraf.", "Elias het die kans gebruik om vir Nina werk op die dorp te probeer kry.", "Lukas het besef dat hy 'n liefde vir die see het.", "Lukas het vinnig geleer hoe om met die hout te werk."], correctIndex: 1 },
      { marks: 1, description: "7.10.3 Fiela het Benjamin se goed Bos toe gevat. Wat is die gevolg?", options: ["Elias het vir Lukas gesê dat Barta sy ma is.", "Elias het die kinders fisies gestraf.", "Lukas het besef dat hy 'n liefde vir die see het.", "Lukas het vinnig geleer hoe om met die hout te werk."], correctIndex: 0 },
      { marks: 1, description: "7.10.4 Elias het vir Lukas gestuur om vir Nina op Knysna te gaan soek. Wat is die gevolg?", options: ["Elias het die kinders fisies gestraf.", "Elias het die kans gebruik om vir Nina werk op die dorp te probeer kry.", "Elias het vir Lukas gesê dat Barta sy ma is.", "Lukas het besef dat hy 'n liefde vir die see het."], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.11",
    text: `Lees die uittreksel hieronder deur en beantwoord die vrae wat daarop volg (VRAE 7.11 tot 7.20).\n\n${TEKS_N}\n\n7.11 Plaas die VIER gebeure in die korrekte VOLGORDE soos wat dit in die drama gebeur:\n• Terwyl Elias siek gelê het, het Barta erken dat sy in die hof gelieg het.\n• Lukas het vir Kaliel gevra om hom van die see te leer.\n• Die Komoeties het vir Lukas 'n brief geskryf om te sê hulle bid vir hom.\n• Lukas het vir Fiela van sy liefde vir Nina vertel.`,
    marks: 4, topicKey: "drama-fiela", cognitiveLevelName: "Reorganisation",
    model_answer: "1. Lukas het vir Kaliel gevra om hom van die see te leer. 2. Lukas het vir Fiela van sy liefde vir Nina vertel. 3. Terwyl Elias siek gelê het, het Barta erken dat sy in die hof gelieg het. 4. Die Komoeties het vir Lukas 'n brief geskryf om te sê hulle bid vir hom.",
    marking_notes: "1 punt vir elke gebeurtenis wat op die korrekte plek is (memo 7.11).",
    steps: [
      { marks: 1, description: "Watter gebeurtenis het EERSTE in die drama plaasgevind?", options: ["Lukas het vir Kaliel gevra om hom van die see te leer.", "Lukas het vir Fiela van sy liefde vir Nina vertel.", "Terwyl Elias siek gelê het, het Barta erken dat sy in die hof gelieg het.", "Die Komoeties het vir Lukas 'n brief geskryf om te sê hulle bid vir hom."], correctIndex: 0 },
      { marks: 1, description: "Watter gebeurtenis het TWEEDE plaasgevind?", options: ["Terwyl Elias siek gelê het, het Barta erken dat sy in die hof gelieg het.", "Die Komoeties het vir Lukas 'n brief geskryf om te sê hulle bid vir hom.", "Lukas het vir Kaliel gevra om hom van die see te leer.", "Lukas het vir Fiela van sy liefde vir Nina vertel."], correctIndex: 3 },
      { marks: 1, description: "Watter gebeurtenis het DERDE plaasgevind?", options: ["Lukas het vir Fiela van sy liefde vir Nina vertel.", "Lukas het vir Kaliel gevra om hom van die see te leer.", "Die Komoeties het vir Lukas 'n brief geskryf om te sê hulle bid vir hom.", "Terwyl Elias siek gelê het, het Barta erken dat sy in die hof gelieg het."], correctIndex: 3 },
      { marks: 1, description: "Watter gebeurtenis het LAASTE plaasgevind?", options: ["Die Komoeties het vir Lukas 'n brief geskryf om te sê hulle bid vir hom.", "Terwyl Elias siek gelê het, het Barta erken dat sy in die hof gelieg het.", "Lukas het vir Fiela van sy liefde vir Nina vertel.", "Lukas het vir Kaliel gevra om hom van die see te leer."], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.12.1",
    text: "Teks N. ''Bosmense is anders. Alles word saam in een hand gegooi.'' (Reël 5 en 6)\n\n7.12.1 Hierdie woorde van Lukas sê vir ons dat Bosmense ...",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "gestereotipeer word omdat hulle anders werk met hulle geld.",
    marking_notes: "Memo 7.12.1.",
    steps: [
      { marks: 1, description: "Hierdie woorde van Lukas sê vir ons dat Bosmense ...", options: ["ander mense manipuleer om hulle te help", "gestereotipeer word omdat hulle anders werk met hulle geld", "nooit hulle geld met hulle gesin deel nie", "swak met geld omgaan en altyd skuld maak"], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.12.2",
    text: "Teks N. ''Bosmense is anders. Alles word saam in een hand gegooi.'' (Reël 5 en 6)\n\n7.12.2 Waarom is Lukas se woorde geloofwaardig binne die konteks van die drama?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Enige EEN: Die Bosmense het volgens hulle eie reëls gelewe; Bosmense word op neergekyk deur die dorpsmense omdat hulle anders was; die gedagte is van geslag tot geslag oorgedra; binne 'n gesin was al die geld die gesin s'n; die pa was in beheer van die geld; Lukas het nou alles gedoen soos die Bosmense dit gedoen het; Lukas het net opdragte uitgevoer wat sy pa vir hom gegee het, al het hy nie saamgestem nie.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom is Lukas se woorde geloofwaardig binne die konteks van die drama?", options: ["Lukas het al lank op die dorp gewoon en die Bosmense se gewoontes vergeet.", "Miss Weatherbury het self vir Lukas gesê dat Bosmense nie geld deel nie.", "Die Bosmense het volgens hulle eie reëls gelewe en die pa was in beheer van die gesin se geld.", "Nina het vir Lukas gesê sy gee haar geld aan miss Weatherbury."], correctIndex: 2 },
    ],
  },
  {
    number: "7", sub_number: "7.13.1",
    text: "Teks N. Konflik is belangrik in enige drama.\n\n7.13.1 Lukas ervaar innerlike konflik, want hy ...",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "was nie seker of hy vir Nina moes vra om na Elias-hulle toe te gaan nie.",
    marking_notes: "Memo 7.13.1.",
    steps: [
      { marks: 1, description: "Lukas ervaar innerlike konflik, want hy ...", options: ["moes Elias se opdragte uitvoer", "was bang Nina sou hom by miss Weatherbury verklap", "wou nie meer die geld hê nie", "was nie seker of hy vir Nina moes vra om na Elias-hulle toe te gaan nie"], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.13.2",
    text: "Teks N. Lukas: ''Gaan huis toe en gaan sê vir Pa ek kom nie terug nie.'' (Reël 25)\n\n7.13.2 Motiveer jou antwoord op VRAAG 7.13.1: Lukas was nie seker of hy vir Nina moes vra om na Elias-hulle toe te gaan nie. Watter van die volgende motiveer dit die beste?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Enige EEN (die antwoord op 7.13.1 moet reg wees): Hy het Nina gevra om hom te help; hy het redes gegee waarom sy hom die guns moes bewys; hy was bang Elias sou haar nie terug laat kom Knysna toe nie; hy was bang Elias kon Nina weer aanrand/slaan; hy het geweet Elias sou hom nie laat teruggaan as hy dit self gaan doen het nie; hy was bang Nina sou nie weer wou terugkom dorp toe nie; hy was onseker omdat hy bang was sy sou nee sê en hy dan wel Bos toe moes teruggaan.",
    marking_notes: "1 punt vir enige EEN memo-antwoord; 7.13.1 moet reg wees om die punt te verdien.",
    steps: [
      { marks: 1, description: "Watter motivering ondersteun dat Lukas onseker was?", options: ["Hy was seker Nina sou dadelik ja sê en het dit nie nodig gehad om te vra nie.", "Hy was bang Elias sou haar nie terug laat kom Knysna toe nie.", "Hy het geweet Elias sou Nina hartlik verwelkom.", "Hy het net gegroet en niks van Nina gevra nie."], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.14",
    text: "Teks N. ''Pa kan sy gat oplig en vir homself werk.'' (Reël 19)\n\nKies die KORREKTE antwoord om die sin mee te voltooi: Dit beteken dat Nina sê ...",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "B / Elias moet ophou om te verwag dat sy kinders al sy werk moet doen.",
    marking_notes: "Memo 7.14: B.",
    steps: [
      { marks: 1, description: "Dit beteken dat Nina sê ...", options: ["haar pa moenie maak of hy te siek is om te werk nie.", "Elias moet ophou om te verwag dat sy kinders al sy werk moet doen.", "haar pa moenie sit en planne maak om olifante te skiet vir ivoor nie.", "Elias moet nie meer vir ander mense werk nie."], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.15",
    text: "Wat was die direkte gevolg vir Nina toe sy terug is Bos toe?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Reorganisation",
    model_answer: "Enige EEN: Nina het weer die ou plekke besoek; Nina kon weer haar geliefde plekke in die Bos besoek; Nina het besef die plekke waarvoor sy so lief was, was nie meer dieselfde nie/sy wou nie meer in die Bos wees nie; Nina het haar werk by miss Weatherbury verloor omdat sy so lank (drie maande) weggebly het.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Wat was die direkte gevolg vir Nina toe sy terug is Bos toe?", options: ["Sy is deur die magistraat in hegtenis geneem.", "Sy het by Fiela gaan woon.", "Sy het haar werk by miss Weatherbury verloor omdat sy so lank weggebly het.", "Elias het haar na Knysna teruggestuur om meer geld te verdien."], correctIndex: 2 },
    ],
  },
  {
    number: "7", sub_number: "7.16",
    text: "Die dorp het deel van Nina se lewe geword.\n\n7.16 Gee TWEE voorbeelde van hoe die dorp Nina se lewe positief beïnvloed het.",
    marks: 2, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Enige TWEE: Nina kon haar eie geld verdien/het nuwe/mooi klere gedra; kon 'n mate van vryheid kry; kon selfstandig wees/na haarself kyk; kon liefde daar vind; kon verskillende rolle/werke in die huishouding vertolk/soos 'n dame optree/Miss Weatherbury se companion wees; het baie nuwe dinge geleer/geleer dat daar beter plekke as die Bos was; kon goeie maniere leer; het 'n ander blyplek gekry.",
    marking_notes: "2 punte vir enige TWEE memo-antwoorde. Een stap per voorbeeld.",
    steps: [
      { marks: 1, description: "Eerste voorbeeld: hoe het die dorp Nina se lewe positief beïnvloed?", options: ["Sy kon haar eie geld verdien.", "Sy het meer tyd in die Bos deurgebring.", "Sy het haar pa se skuld afbetaal.", "Sy het geleer om beter bome te kap."], correctIndex: 0 },
      { marks: 1, description: "Tweede voorbeeld: hoe het die dorp Nina se lewe positief beïnvloed?", options: ["Sy het die magistraat se vertroue gewen.", "Sy het geleer om te jag.", "Sy het goeie maniere geleer.", "Sy het by Fiela gaan werk."], correctIndex: 2 },
    ],
  },
  {
    number: "7", sub_number: "7.17",
    text: "Teks N. Lukas: ''Maar vir al die kere wat ek vir jou geskerm het ... vra ek jou vandag net een keer se hulp ... Gaan huis toe en gaan sê vir Pa ek kom nie terug nie.'' (Reël 22 tot 24)\n\n7.17 Waarom laat Lukas se woorde in reëls 22 tot 24 jou goed voel?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Dit laat my goed voel, want Lukas (enige EEN): het nog altyd vir Nina gehelp/beskerm/omgegee; sien vir Nina as sy gelyke; bevry homself van Elias/die Bos; neem beheer van sy eie lewe; staan uiteindelik op vir homself; was 'n goeie broer; was lojaal teenoor Nina; vra iemand anders om hom te help/begin Nina vertrou.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom laat Lukas se woorde jou goed voel?", options: ["Lukas wys hy sal Elias se bevele altyd gehoorsaam.", "Lukas dreig Nina sodat sy huis toe gaan.", "Lukas wil graag weer by Elias in die Bos werk.", "Lukas staan uiteindelik op vir homself en neem beheer van sy eie lewe."], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.18",
    text: "Een van die lewenslesse in hierdie drama is dat 'n mens altyd na die waarheid moet soek.\n\n7.18 Noem TWEE positiewe gevolge wat dit vir Fiela gehad het.",
    marks: 2, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Enige TWEE: Fiela het haar hanskind teruggekry; uitgevind by wie haar kind geplaas was; vir Benjamin na Barta toe gestuur om die waarheid uit te vind; uitgevind dat Benjamin nie regtig die Van Rooyens se kind was nie; die kans gekry om die grond wat sy gekoop het vir hom te gee; haar verhouding met Benjamin herstel; haar eer, karakter en menswaardigheid bevestig; besef sy was nog altyd reg oor Benjamin se identiteit; (Benjamin het besluit om terug te gaan Wolwekraal/huis toe).",
    marking_notes: "2 punte vir enige TWEE memo-antwoorde. Een stap per gevolg.",
    steps: [
      { marks: 1, description: "Eerste positiewe gevolg vir Fiela:", options: ["Fiela het Elias in die tronk gekry.", "Fiela het die Van Rooyens se huis gekry.", "Fiela het haar hanskind teruggekry.", "Fiela het geld van die magistraat as vergoeding ontvang."], correctIndex: 2 },
      { marks: 1, description: "Tweede positiewe gevolg vir Fiela:", options: ["Fiela het haar eer, karakter en menswaardigheid bevestig.", "Fiela het die Van Rooyens se grond oorgeneem.", "Fiela is as kinderwagter vir die magistraat aangestel.", "Fiela het Nina by haar huis laat woon."], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.19",
    text: "Teks N. Miss Weatherbury: ''Julle kan nie sommer elke maand al haar geld kom haal nie. Ek sal dit nie toelaat nie!''\n\n7.19 Waarom kan 'n mens verstaan dat miss Weatherbury Nina wou beskerm?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Miss Weatherbury wou Nina beskerm, want (enige EEN): dit was deel van haar opheffingswerk; Nina was nog jonk en onervare/kwesbaar; sy wou verhoed dat mense Nina uitbuit; die dorpslewe en boslewe het baie van mekaar verskil; sy het gevoel dis haar plig omdat Nina gesê het sy het nie familie nie; sy het omgegee vir Nina.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom kan 'n mens verstaan dat miss Weatherbury Nina wou beskerm?", options: ["Nina was haar eie dogter.", "Nina was jonk en onervare en kon deur ander uitgebuit word.", "Nina het baie geld gehad wat miss Weatherbury wou hou.", "Nina was siek en het mediese sorg nodig gehad."], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.20",
    text: "Mense kry baie keer die kans om verkeerde dinge reg te stel.\n\n7.20 Waarom pas hierdie tema by die slot van die drama?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Enige EEN: Barta het die kans gekry om die waarheid te praat/te erken dat sy in die hof gelieg het; Benjamin kon kies wie/wie se kind hy wou wees; Benjamin kon lief wees vir wie hy wou; Benjamin kon nou self oor sy toekoms besluit.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom pas die tema by die slot van die drama?", options: ["Elias het die kans gekry om Lukas weer te straf.", "Fiela het die kans gekry om die Van Rooyens aan te kla.", "Nina het die kans gekry om terug te gaan Bos toe.", "Barta het die kans gekry om die waarheid te praat en te erken dat sy in die hof gelieg het."], correctIndex: 3 },
    ],
  },

  // ======================================================================
  // QUESTION 8.1: ''KOM ONS STUUR VIR TASU'' (Maretha Maartens) - 18 marks
  // ======================================================================
  {
    number: "8", sub_number: "8.1.1",
    text: `Lees die uittreksel hieronder deur en beantwoord die vrae wat daarop volg (VRAE 8.1.1 tot 8.1.10).\n\n${TEKS_O}\n\n8.1.1 Voltooi die volgende paragraaf feitelik korrek deur die ontbrekende woord(e) uit die kortverhaal te kies:\n\nTasu het saam met sy familie in (a) … gewoon. Sy suster het vir hom gaan sê dat sy ma oor hulle ouma (b) … het. Toe Tasu gaan hoor wat aangaan, het sy ma gesê dat Ouma se (c) … op is. Evelina het voorgestel dat sy en Tasu met oom (d) … se taxi na Ouma toe moes gaan, maar Tasu se ma wou nie vir Evelina stuur nie.`,
    marks: 4, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "(a) Griekwastad; (b) gehuil; (c) (kruie)medisyne; (d) Jollyman.",
    marking_notes: "Een punt per korrekte woord (memo 8.1.1(a) - (d)).",
    steps: [
      { marks: 1, description: "(a) Tasu het saam met sy familie in ... gewoon.", options: ["Kimberley", "Griekwastad", "Upington", "Perdeberg"], correctIndex: 1 },
      { marks: 1, description: "(b) Sy suster het vir hom gaan sê dat sy ma oor hulle ouma ... het.", options: ["gebid", "gelag", "gehuil", "gekla"], correctIndex: 2 },
      { marks: 1, description: "(c) Ouma se ... is op.", options: ["kos", "geld", "hout", "(kruie)medisyne"], correctIndex: 3 },
      { marks: 1, description: "(d) Evelina het voorgestel dat sy en Tasu met oom ... se taxi na Ouma toe moes gaan.", options: ["Jollyman", "Sterkman", "Koos", "Maans"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "Teks O. Waarom kon Sterkman nie na Ouma se huis toe gaan nie?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "Enige EEN: Sterkman was besig met matriekeksamen/skoolwerk; Sterkman moes vir die matriekeksamen leer.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom kon Sterkman nie na Ouma se huis toe gaan nie?", options: ["Hy moes die hoenders oppas.", "Hy was siek.", "Hy was besig om vir sy matriekeksamen te leer.", "Hy moes by die slypsteen werk."], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "Teks O. Lees reëls 1 tot 7 (Ma: ''Daarvan kan ek vergeet.'' ''Ek leen by niemand geld nie.'' ''Ons eet self ons hoenders se eiers.'').\n\nKies die KORREKTE antwoord om die sin mee te voltooi: Die toon in Tasu se ma se stem kan as ... beskryf word.",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "A / ernstig.",
    marking_notes: "Memo 8.1.3: A.",
    steps: [
      { marks: 1, description: "Die toon in Tasu se ma se stem kan as ... beskryf word.", options: ["ernstig", "entoesiasties", "spottend", "opgewonde"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: "Wat het Sterkman vir Tasu gesê voordat hy met die taxi weg is?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "Enige EEN: Tasu moenie sy babagesig opsit nie; Tasu moenie wys dat hy bang is nie; hy moenie sy babagesig wys as hy tussen mense is nie.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Wat het Sterkman vir Tasu gesê voordat hy met die taxi weg is?", options: ["Tasu moet sy botteltjies tieroë by die huis los.", "Tasu moet by die petrolpomp bly tot hy terugkom.", "Tasu moet vinnig terugkom met die geld.", "Tasu moenie sy babagesig opsit en wys dat hy bang is nie."], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.1.5(a)",
    text: "Sterkman se woorde het innerlike konflik by Tasu veroorsaak.\n\n8.1.5(a) Tasu het innerlike konflik gehad, want ...",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "hy het onthou van die slegte ervaring toe daar baie mense saam met hom was.",
    marking_notes: "Memo 8.1.5(a).",
    steps: [
      { marks: 1, description: "Tasu het innerlike konflik gehad, want ...", options: ["die taxi waarin hulle sou ry, was heeltemal te vinnig", "hy was bang Ouma sou nie meer lewe wanneer hy daar kom nie", "hy het onthou van die slegte ervaring toe daar baie mense saam met hom was", "hy wou nie sy tieroë verkoop nie"], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.1.5(b)",
    text: "Teks O / kortverhaal. Tasu het innerlike konflik gehad, want hy het onthou van die slegte ervaring toe daar baie mense saam met hom was.\n\n8.1.5(b) Motiveer: wat onthou Tasu?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Tasu onthou (enige EEN): die ongeluk; die ongeluk waarin baie mense seergekry het; die baie liggame wat in die taxi-ongeluk om/langs/oor hom gelê het; dat iemand gesterf het; die oë van die persoon wat gesterf het; dat hy vasgekeer was; dat hy nie kon asemhaal nie.",
    marking_notes: "1 punt vir enige EEN memo-antwoord; 8.1.5(a) moet reg wees.",
    steps: [
      { marks: 1, description: "Wat onthou Tasu?", options: ["Hy onthou dat Jollyman hom eenkeer by die pad laat uitklim het.", "Hy onthou dat Sterkman hom in 'n taxi geslaan het.", "Hy onthou dat hy sy botteltjies eenkeer in 'n taxi verloor het.", "Hy onthou die taxi-ongeluk waarin baie mense seergekry het en hy vasgekeer was."], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.1.6",
    text: "Die dinge wat mense doen, het altyd gevolge. Kies die gevolg uit KOLOM B wat by die gebeure in KOLOM A pas.\n\nKOLOM A\n(a) Sterkman het sy gereedskap mooi opgepas.\n(b) Die motor se bande en remme kon nie herstel word nie.\n(c) Tasu het soos 'n vasgekeerde muis tussen al die mense in die taxi gevoel.\n(d) Die taxibestuurder het mooi na Tasu gekyk.\n\nKOLOM B\nA Pa kon nie vir Ouma medisyne vat nie.\nB Tasu het presies geweet wat om Sondag te doen.\nC Tasu het niks van Perdebergstasie geweet nie.\nD Tasu kon net onder toesig sy tierogies slyp.\nE Een van die ander passasiers het probeer om Tasu beter te laat voel.",
    marks: 4, topicKey: "short-stories", cognitiveLevelName: "Reorganisation",
    model_answer: "(a) D (Tasu kon net onder toesig sy tierogies slyp); (b) A (Pa kon nie vir Ouma medisyne vat nie); (c) E (Een van die ander passasiers het probeer om Tasu beter te laat voel); (d) B (Tasu het presies geweet wat om Sondag te doen).",
    marking_notes: "1 punt per korrekte pasmaat (memo 8.1.6(a) - (d)).",
    steps: [
      { marks: 1, description: "(a) Sterkman het sy gereedskap mooi opgepas. Wat is die gevolg?", options: ["Pa kon nie vir Ouma medisyne vat nie.", "Tasu kon net onder toesig sy tierogies slyp.", "Tasu het niks van Perdebergstasie geweet nie.", "Tasu het presies geweet wat om Sondag te doen."], correctIndex: 1 },
      { marks: 1, description: "(b) Die motor se bande en remme kon nie herstel word nie. Wat is die gevolg?", options: ["Pa kon nie vir Ouma medisyne vat nie.", "Tasu kon net onder toesig sy tierogies slyp.", "Een van die ander passasiers het probeer om Tasu beter te laat voel.", "Tasu het niks van Perdebergstasie geweet nie."], correctIndex: 0 },
      { marks: 1, description: "(c) Tasu het soos 'n vasgekeerde muis tussen al die mense in die taxi gevoel. Wat is die gevolg?", options: ["Tasu het presies geweet wat om Sondag te doen.", "Pa kon nie vir Ouma medisyne vat nie.", "Tasu kon net onder toesig sy tierogies slyp.", "Een van die ander passasiers het probeer om Tasu beter te laat voel."], correctIndex: 3 },
      { marks: 1, description: "(d) Die taxibestuurder het mooi na Tasu gekyk. Wat is die gevolg?", options: ["Tasu het niks van Perdebergstasie geweet nie.", "Pa kon nie vir Ouma medisyne vat nie.", "Tasu het presies geweet wat om Sondag te doen.", "Tasu kon net onder toesig sy tierogies slyp."], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.1.7",
    text: "Die ruimte in die taxi was baie klein en beknop.\n\n8.1.7 Gee TWEE voorbeelde van hoe Tasu se besluite daardie dag sy lewe positief beïnvloed het.",
    marks: 2, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Tasu het (enige TWEE): besluit dat sy verlede nie sy lewe gaan bepaal nie; sy vrees (om in taxi's vol mense te ry) oorkom; nie meer vasgekyk teen sy probleme nie/sy vrese agtergelaat; besluit hy kan nie toelaat dat die dooie oë sy lewe beheer nie; besluit om die lewe soos 'n ryp turksvy te eet; besluit om elke oomblik van die lewe te leef.",
    marking_notes: "2 punte vir enige TWEE memo-antwoorde. Een stap per voorbeeld.",
    steps: [
      { marks: 1, description: "Eerste voorbeeld van hoe Tasu se besluite sy lewe positief beïnvloed het:", options: ["Hy het besluit om nooit weer in 'n taxi te ry nie.", "Hy het sy vrees om in taxi's vol mense te ry oorkom.", "Hy het besluit om al sy botteltjies tieroë vir homself te hou.", "Hy het besluit om sy ma se raad nie weer te volg nie."], correctIndex: 1 },
      { marks: 1, description: "Tweede voorbeeld van hoe Tasu se besluite sy lewe positief beïnvloed het:", options: ["Hy het besluit om Sterkman se slypsteen te verkoop.", "Hy het besluit om by die petrolpomp te bly werk.", "Hy het besluit dat sy verlede nie sy lewe gaan bepaal nie.", "Hy het besluit om Evelina in sy plek te stuur."], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.1.8",
    text: "Teks O. Waarom kan 'n mens sê dat Tasu se ma 'n verantwoordelike mens is?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Tasu se ma wou nie (enige EEN): vir Evelina stuur nie, want sy was te jonk; vir Sterkman stuur nie, want hy was besig met eksamens; die hoendereiers verkoop nie, want dis die gesin se kos; by mense geld leen/skuld maak nie; ophou planne maak om die medisyne by ouma te kry nie; dat pa met die kar ry nie, want die remme was swak en die bande sleg.",
    marking_notes: "1 punt vir enige EEN memo-antwoord. Sien FLAG 7.",
    steps: [
      { marks: 1, description: "Waarom kan 'n mens sê dat Tasu se ma 'n verantwoordelike mens is?", options: ["Sy het toegelaat dat Evelina alleen taxi ry.", "Sy het die hoendereiers verkoop sodat hulle genoeg geld het.", "Sy het ingestem dat Pa met die gevaarlike kar ry.", "Sy wou nie by mense geld leen en skuld maak nie."], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.1.9",
    text: "Tasu het sy droom om 100 botteltjies met tieroë vol te maak, laat gaan.\n\n8.1.9 Waarom kan jy met Tasu identifiseer?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Ek kan hiermee identifiseer, want (enige EEN): ek het ook my droom om verder te studeer prysgegee; ek wou professioneel sokker speel en moes dit prysgee; ek wou oorsee gaan swem en het dit prysgegee; as jou familie jou nodig het, is jou drome minder belangrik; my ouma se gesondheid sal ook vir my belangriker as geld en goed wees; ek het ook al my eie besittings/trots/geluk/drome prysgegee om ander te help.",
    marking_notes: "1 punt; die rede moet duidelik en sinvol binne konteks wees.",
    steps: [
      { marks: 1, description: "Waarom kan jy met Tasu identifiseer?", options: ["Drome is altyd belangriker as jou familie.", "Ek sou ook geld by ander leen eerder as om my besittings te verkoop.", "As jou familie jou nodig het, is jou drome minder belangrik.", "Ek sou nooit iets prysgee nie, al het my familie my nodig."], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.1.10",
    text: "Moeilike situasies maak jou sterker.\n\n8.1.10 Waarom pas hierdie tema by die slot van die kortverhaal?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Enige EEN: Tasu kon sy vrese oorwin; Tasu kon verantwoordelikheid neem namens sy gesin; Tasu kon baie van homself leer tydens die rit; Tasu het geleer dat jy voluit moet lewe; Tasu kon sy ouma help al was hy bang.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom pas die tema by die slot van die kortverhaal?", options: ["Tasu het die geld vir die taxi nie nodig gehad nie.", "Tasu het alles verloor en moes by die huis bly.", "Tasu kon sy vrese oorwin en verantwoordelikheid namens sy gesin neem.", "Tasu het besluit om nooit weer vir sy gesin te werk nie."], correctIndex: 2 },
    ],
  },

  // ======================================================================
  // QUESTION 8.2: ''OPDRAG'' (Rike Olivier) - 17 marks
  // ======================================================================
  {
    number: "8", sub_number: "8.2.1",
    text: `Lees die uittreksel hieronder deur en beantwoord die vrae wat daarop volg (VRAE 8.2.1 tot 8.2.10).\n\n${TEKS_P}\n\n8.2.1 Plaas die VIER gebeure in die korrekte VOLGORDE soos wat dit in die kortverhaal gebeur:\n• Sarah het haar feite met E se situasie begin.\n• Jordaantjie het altyd gesorg vir iets wat anders is.\n• Sarah het gehoop Jordaantjie sou tussen die reëls kon lees.\n• Sarah het besef sy worstel eintlik met haar gevoelens vir Gerrie.`,
    marks: 4, topicKey: "short-stories", cognitiveLevelName: "Reorganisation",
    model_answer: "1. Jordaantjie het altyd gesorg vir iets wat anders is. 2. Sarah het haar feite met E se situasie begin. 3. Sarah het besef sy worstel eintlik met haar gevoelens vir Gerrie. 4. Sarah het gehoop Jordaantjie sou tussen die reëls kon lees.",
    marking_notes: "1 punt vir elke gebeurtenis wat op die korrekte plek is (memo 8.2.1). Sien FLAG 3.",
    steps: [
      { marks: 1, description: "Watter gebeurtenis het EERSTE plaasgevind?", options: ["Jordaantjie het altyd gesorg vir iets wat anders is.", "Sarah het haar feite met E se situasie begin.", "Sarah het besef sy worstel eintlik met haar gevoelens vir Gerrie.", "Sarah het gehoop Jordaantjie sou tussen die reëls kon lees."], correctIndex: 0 },
      { marks: 1, description: "Watter gebeurtenis het TWEEDE plaasgevind?", options: ["Sarah het gehoop Jordaantjie sou tussen die reëls kon lees.", "Jordaantjie het altyd gesorg vir iets wat anders is.", "Sarah het haar feite met E se situasie begin.", "Sarah het besef sy worstel eintlik met haar gevoelens vir Gerrie."], correctIndex: 2 },
      { marks: 1, description: "Watter gebeurtenis het DERDE plaasgevind?", options: ["Sarah het haar feite met E se situasie begin.", "Sarah het gehoop Jordaantjie sou tussen die reëls kon lees.", "Jordaantjie het altyd gesorg vir iets wat anders is.", "Sarah het besef sy worstel eintlik met haar gevoelens vir Gerrie."], correctIndex: 3 },
      { marks: 1, description: "Watter gebeurtenis het LAASTE plaasgevind?", options: ["Sarah het gehoop Jordaantjie sou tussen die reëls kon lees.", "Sarah het besef sy worstel eintlik met haar gevoelens vir Gerrie.", "Sarah het haar feite met E se situasie begin.", "Jordaantjie het altyd gesorg vir iets wat anders is."], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2.2(a)",
    text: "Teks P. ''Ek is sewentien. My ouma was sestien toe sy getroud is.'' (Reël 2 en 3)\n\n8.2.2(a) Hierdie gedagtes van Sarah sê vir ons dat vroue ...",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "gestereotipeer is om jonk te trou en kinders te hê.",
    marking_notes: "Memo 8.2.2(a).",
    steps: [
      { marks: 1, description: "Hierdie gedagtes van Sarah sê vir ons dat vroue ...", options: ["gemanipuleer is om nie waarde te heg aan skoolopleiding nie", "graag al op sestien wil trou", "gestereotipeer is om jonk te trou en kinders te hê", "altyd op sewentien hulle eerste kêrel kry"], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.2.2(b)",
    text: "Teks P. ''Ek is sewentien. My ouma was sestien toe sy getroud is.'' (Reël 2 en 3)\n\n8.2.2(b) Waarom is Sarah se gedagtes geloofwaardig binne die konteks van die kortverhaal?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Enige EEN: Vroeër jare was dit vanselfsprekend dat vrouens teen sestien getroud is en kinders het; vroue van vroeër het nie sommer matriek voltooi en studeer nie, hulle het vroeg getrou; die vrou se rol was van 'n jong ouderdom af om te trou en kinders te hê; as Ouma sestien was en sy is al sewentien, dan moes sy eintlik al getroud gewees het.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom is Sarah se gedagtes geloofwaardig binne die konteks van die kortverhaal?", options: ["Sarah se ma het haar gedwing om op sewentien te trou.", "Sarah se ouma het ook matriek voltooi en gaan studeer.", "Sarah het self reeds besluit om met Gerrie te trou.", "Vroeër was dit vanselfsprekend dat vroue op sestien getroud was en kinders gehad het."], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: "Teks P. ''... die breek van iets wat heel moes gebly het, ...'' (Reël 9 en 10)\n\nKies die KORREKTE antwoord om die sin mee te voltooi: Dit beteken dat …",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "C / jy nie dinge moet doen wat 'n verhouding benadeel nie.",
    marking_notes: "Memo 8.2.3: C.",
    steps: [
      { marks: 1, description: "Dit beteken dat …", options: ["jy nie spyt moet voel oor gebroke verhoudings nie.", "jy moet doen wat jý dink die regte ding is om te doen.", "jy nie dinge moet doen wat 'n verhouding benadeel nie.", "almal nie dieselfde dink oor wat goed is vir 'n verhouding nie."], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "Sarah het haar notas weggegooi nadat sy die opdrag voltooi het.\n\n8.2.4 Noem 'n feit uit die kortverhaal om te sê waarom hierdie stelling ONWAAR is.",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Reorganisation",
    model_answer: "Enige EEN: Sarah het tot 'n gevolgtrekking gekom; Sarah het 'n aanbeveling gemaak; Sarah moes net die finale stuk netjies oorskryf; Sarah het besluit om haar kladboek te hou vir eendag as sy 'n storie wil skryf.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Watter feit wys dat die stelling (Sarah het haar notas weggegooi) ONWAAR is?", options: ["Sarah het die notas vir Gerrie gegee.", "Sarah het die opdrag nooit begin skryf nie.", "Sarah het haar notas in die klas gelos.", "Sarah moes net die finale stuk netjies oorskryf."], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.2.5(a)",
    text: "Teks P. ''P v W word aanbeveel ...'' (Reël 15)\n\n8.2.5(a) Waarna verwys hierdie P v W in die kortverhaal?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "Enige EEN: die boek, 'n Pot vol winter; die boek/roman/storie wat Sarah gekies het om haar boekverslag oor te doen.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarna verwys P v W?", options: ["die Voorligtingsklas by die skool", "die biblioteek (Bib) van die skool", "Gerrie se brief aan Sarah", "die boek 'n Pot vol winter wat Sarah vir haar boekverslag gekies het"], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.2.5(b)",
    text: "Teks P. ''P v W word aanbeveel vir aankope deur Bib om te dien as vertrekpunt by besprekings, bv. in Voorligtingsklasse.'' (Reël 15 en 16)\n\n8.2.5(b) Waarom beveel Sarah hierdie boek aan?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Deur die boek te lees het Sarah (enige EEN): haar eie idees oor tienerseks geëvalueer/gevorm; besluit dat tienerseks nie deel van haar verhouding moet wees nie; besef dat seks haar verhouding met Gerrie sou benadeel; besluit dat jou huislike omstandighede nie jou sekslewe bepaal nie; besef dat kommunikasie met volwassenes oor taboe-onderwerpe nodig is; besef dat dinge in die verhaal nie noodwendig in die werklike lewe gebeur nie; besef dat jy nie seks hoef te hê om te wys jy is lief vir jou kêrel nie; besef dit kan leerders voorligting en insig bied.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom beveel Sarah hierdie boek aan?", options: ["Die boek was kort en maklik om te lees.", "Die boek het haar gehelp om haar eie idees oor tienerseks te vorm en te besluit dit moet nie deel van haar verhouding wees nie.", "Die boek het gewys dat tienerseks heeltemal normaal is.", "Die boek het haar oortuig om by Gerrie te breek."], correctIndex: 1 },
    ],
  },
  {
    number: "8", sub_number: "8.2.6(a)",
    text: "Teks P. ''So, so kaal soos 'tienerseks'.'' (Reël 17)\n\n8.2.6(a) Dit is 'n voorbeeld van 'n ...",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "vergelyking.",
    marking_notes: "Memo 8.2.6(a): vergelyking.",
    steps: [
      { marks: 1, description: "Dit is 'n voorbeeld van 'n ...", options: ["metafoor", "personifikasie", "hiperbool", "vergelyking"], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.2.6(b)",
    text: "Teks P. ''So, so kaal soos 'tienerseks'.'' (Reël 17)\n\n8.2.6(b) Wat beteken die woorde ''so, so kaal'' binne die konteks van die kortverhaal?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Letterlik: haar aanbeveling is kort en saaklik/kragtig/op die man af; duidelik en logies gestel; feitelik, sonder om doekies om te draai; gestroop van lang verduidelikings. Figuurlik: Sarah besluit om nie as tiener seksueel aktief te wees nie; daar sal niks meer as hande vashou wees nie. (Enige EEN)",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Wat beteken ''so, so kaal'' binne die konteks van die kortverhaal?", options: ["Sarah se opdrag is te lank en vol besonderhede.", "Sarah is skaam en vermy die onderwerp.", "Tienerseks is vir haar iets pragtigs en romanties.", "Haar aanbeveling is kort en saaklik, sonder lang verduidelikings."], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.2.7",
    text: "Sarah het baie oor hierdie Afrikaanse opdrag gedink.\n\n8.2.7 Watter direkte gevolg het dit vir Sarah gehad?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Reorganisation",
    model_answer: "Enige EEN: Dit het Sarah onder druk geplaas om haar ander huiswerk te voltooi; die opdrag moes nog oorgeskryf word; Sarah het haar besluit oor tienerseks geneem; Sarah het besluit wat sy in haar verhouding met Gerrie fisies sal doen en nie doen nie.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Watter direkte gevolg het dit vir Sarah gehad?", options: ["Sy het in die opdrag gedruip.", "Dit het haar onder druk geplaas om haar ander huiswerk te voltooi.", "Sy het haar ma om raad gaan vra.", "Sy het by Gerrie gebreek."], correctIndex: 1 },
    ],
  },
  {
    number: "8", sub_number: "8.2.8",
    text: "Waarom laat hierdie ''gesprek'' in die kortverhaal jou goed voel as jy aan tienerverhoudings dink?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Die gesprek laat my goed voel, want dit wys tieners het (enige EEN): nog emosionele begrip; 'n sin vir verantwoordelikheid/selfbeheer; selfgroei as dit by verhoudings kom; probleemoplossingsvaardighede; begrip vir die gevolge van tienerverhoudings; 'n langtermyndoel met verhoudings.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom laat die ''gesprek'' jou goed voel oor tienerverhoudings?", options: ["Dit wys tieners dink nie aan die gevolge van hulle keuses nie.", "Dit wys tieners wil nie met volwassenes praat nie.", "Dit wys tieners hou nie van voorligting nie.", "Dit wys tieners het 'n sin vir verantwoordelikheid en selfbeheer."], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.2.9",
    text: "Een van die lewenslesse in die kortverhaal is dat keuses gevolge het.\n\n8.2.9 Noem TWEE positiewe gevolge wat die boek wat Sarah gelees het, op haar lewe gehad het.",
    marks: 2, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Sarah het (enige TWEE): haarself beter/haar sterkpunte/begeertes/beperkinge leer ken; geleer om haar emosies/drange te beheer; besef dat verkeerde besluite haar lewe nadelig kon beïnvloed; besef sy is verantwoordelik vir haar eie aksies/keuses; geleer om nie haar emosies te volg nie, maar rasioneel te dink.",
    marking_notes: "2 punte vir enige TWEE memo-antwoorde. Een stap per gevolg.",
    steps: [
      { marks: 1, description: "Eerste positiewe gevolg vir Sarah:", options: ["Sy het besluit om skool te los.", "Sy het 'n nuwe kêrel gekry.", "Sy het haarself beter leer ken.", "Sy het haar ma se raad heeltemal ignoreer."], correctIndex: 2 },
      { marks: 1, description: "Tweede positiewe gevolg vir Sarah:", options: ["Sy het besef Gerrie is verantwoordelik vir haar besluite.", "Sy het besef sy is verantwoordelik vir haar eie aksies en keuses.", "Sy het geleer dat gevolge nie saak maak nie.", "Sy het geleer om net haar emosies te volg."], correctIndex: 1 },
    ],
  },
  {
    number: "8", sub_number: "8.2.10",
    text: "Hoe kry Sarah dit reg om jou jammer vir haar te laat voel oor al haar vrae oor tienerseks?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Ek voel jammer vir haar, want (enige EEN): dit was 'n taboe onderwerp in haar huis; sy moes haar antwoorde uit 'n boek kry; haar onsekerhede oor seks moes haar leer oor selfbeheersing; sy worstel alleen met hierdie kwessies; sy het niemand gehad om mee te praat nie; sy vra vrae oor dinge wat sy op 17 moes geweet het.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Hoe laat Sarah jou jammer vir haar voel?", options: ["Sy het by die skool gedruip omdat sy so baie vrae gehad het.", "Sy het geen vrae gehad nie en het alles reeds geweet.", "Sy moes haar antwoorde uit 'n boek kry, want dit was 'n taboe onderwerp by haar huis.", "Sy was kwaad vir Gerrie omdat hy haar nooit geantwoord het nie."], correctIndex: 2 },
    ],
  },

  // ======================================================================
  // QUESTION 9.1: ''KRISIS'' (Elizabeth Eybers) - 17 marks
  // ======================================================================
  {
    number: "9", sub_number: "9.1.1",
    text: `Lees die gedig hieronder deur en beantwoord die vrae wat daarop volg (VRAE 9.1.1 tot 9.1.12).\n\n${GEDIG_KRISIS}\n\n9.1.1 Wie is die spreker in hierdie gedig?`,
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "(Die) hoof/verstand/brein/kop/Ek/die persoon wat van die hart wil skei/iemand wat besluit het om nie sy/haar emosies te volg nie.",
    marking_notes: "Memo 9.1.1.",
    steps: [
      { marks: 1, description: "Wie is die spreker in hierdie gedig?", options: ["Die Hart", "Die Hoof (die verstand)", "Die Dood", "Die seremoniemeester"], correctIndex: 1 },
    ],
  },
  {
    number: "9", sub_number: "9.1.2",
    text: "Gedig ''Krisis'', strofe 1 (reël 1 tot 8: ''Dis hier wat ons twee skei - jy, Hart, en ek, / albei tot afskeid so onvoorbereid. / Die weg was lieflik waarlangs jy geleiꞌt / maar dis verby, al staar jy terug. ...'').\n\n9.1.2 Watter EEN woord uit strofe 1 sê vir ons dat die Hoof en die Hart nie reg is vir die skeiding nie?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "''onvoorbereid''.",
    marking_notes: "Memo 9.1.2 (nie penaliseer as dit nie tussen aanhalingstekens is nie).",
    steps: [
      { marks: 1, description: "Watter woord sê vir ons dat die Hoof en die Hart nie reg is vir die skeiding nie?", options: ["lieflik", "onvoorbereid", "afskeid", "afgrond"], correctIndex: 1 },
    ],
  },
  {
    number: "9", sub_number: "9.1.3",
    text: "Gedig ''Krisis'', strofe 1 (reël 6 tot 8: ''Voortvarend en 'n lafaard soos altyd / en nooit in staat tot enige besluit / en siek daarby, is jy nou net 'n las.'') en strofe 2 (reël 11: ''jou dwase raad kan net die Hoof verwar'').\n\n9.1.3 Gee TWEE redes waarom die Hoof voel dat die Hart 'n ''las'' is.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Die Hart is (enige TWEE): voortvarend/impulsief; 'n lafaard; besluiteloos/kan nie (regte) besluite maak nie; siek/emosioneel; die Hart gee dwase raad/verwar net die Hoof/het niks rasioneel by te dra nie.",
    marking_notes: "2 punte vir enige TWEE memo-antwoorde; aanhaling met die kernwoorde word aanvaar. Een stap per rede.",
    steps: [
      { marks: 1, description: "Eerste rede waarom die Hart 'n ''las'' is:", options: ["Die Hart is te kwaad en wil nie praat nie.", "Die Hart is besluiteloos en kan nie regte besluite maak nie.", "Die Hart het die Hoof reeds verlaat.", "Die Hart is te oud om nog te help."], correctIndex: 1 },
      { marks: 1, description: "Tweede rede waarom die Hart 'n ''las'' is:", options: ["Die Hart gee dwase raad wat die Hoof net verwar.", "Die Hart weier om terug te kyk.", "Die Hart wil die Hoof na die kermis neem.", "Die Hart is te rasioneel en te streng."], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.1.4",
    text: "Gedig ''Krisis''.\n\n9.1.4 Kies die KORREKTE antwoord. Die Hart sukkel om die skeiding te aanvaar. Die Hart kies om die goeie tye te (a) ... Die Hoof is kwaai en verduidelik (b) ... vir die Hart dat die Hart moet verstaan dat hulle tyd verby is.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "(a) onthou; (b) ongeduldig.",
    marking_notes: "Memo 9.1.4(a) onthou, (b) ongeduldig. 1 punt elk.",
    steps: [
      { marks: 1, description: "(a) Die Hart kies om die goeie tye te ...", options: ["vergeet", "onthou", "verwerp", "vrees"], correctIndex: 1 },
      { marks: 1, description: "(b) Die Hoof verduidelik ... vir die Hart dat hulle tyd verby is.", options: ["rustig", "hartseer", "bly", "ongeduldig"], correctIndex: 3 },
    ],
  },
  {
    number: "9", sub_number: "9.1.5",
    text: "Gedig ''Krisis''. Die Hoof en die Hart word in die gedig as mense voorgestel (hulle praat en word aangespreek met ''jy'' en ''ek'').\n\n9.1.5 Watter tegniek gebruik die digter om die Hoof en die Hart as mense voor te stel?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Enige EEN: die digter gebruik hoofletters; voornaamwoorde soos ''ek'' en ''jy''; personifikasie; gebruik dit as eiename/persoonsname.",
    marking_notes: "1 punt vir enige EEN memo-antwoord. Sien FLAG 5.",
    steps: [
      { marks: 1, description: "Watter tegniek gebruik die digter om die Hoof en die Hart as mense voor te stel?", options: ["metafoor", "ironie", "personifikasie", "onomatopee"], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.1.6",
    text: "Gedig ''Krisis'', reël 7: ''en siek daarby, is jy nou net 'n las.''\n\n9.1.6 Watter negatiewe impak het die Hart volgens reël 7 op die Hoof gehad? Verduidelik dit in jou eie woorde.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Die Hoof (enige EEN): kon nie goeie besluite neem nie/was verwar deur die Hart; het nie duidelike leiding van die Hart gekry nie; was ontevrede met hoe die verhouding verloop het; wou nie meer in 'n verhouding met die Hart wees nie/wou van die Hart skei; het gesukkel met besluite as gevolg van die Hart.",
    marking_notes: "1 punt vir enige EEN memo-antwoord (eie woorde).",
    steps: [
      { marks: 1, description: "Watter negatiewe impak het die Hart op die Hoof gehad?", options: ["Die Hoof het van die Hart se siekte beter geword.", "Die Hoof het die Hart se raad dankbaar aanvaar.", "Die Hoof was verwar en kon nie goeie besluite neem nie.", "Die Hoof het in die verhouding baie gelukkig gevoel."], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.1.7",
    text: "Gedig ''Krisis'', strofe 2 (reël 9 tot 12: ''Jy was die gas en gasheer by die fees, / die seremoniemeester en die nar: / jou dwase raad kan net die Hoof verwar / waar elke tree die laaste tree mag wees.'').\n\nDie Hoof stem nie altyd saam met die advies wat die Hart gee nie.\n\n9.1.7 Haal TWEE OPEENVOLGENDE woorde aan om te sê waarom die stelling WAAR is.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "''dwase raad'' of ''hoof verwar'' (enige EEN; tweeopeenvolgende woorde; nie penaliseer as dit nie tussen aanhalingstekens is nie).",
    marking_notes: "Memo 9.1.7.",
    steps: [
      { marks: 1, description: "Watter twee opeenvolgende woorde wys dat die Hoof nie altyd met die Hart se advies saamstem nie?", options: ["gas en gasheer", "dwase raad", "die nar", "laaste tree"], correctIndex: 1 },
    ],
  },
  {
    number: "9", sub_number: "9.1.8",
    text: "Gedig ''Krisis''. ''..., die kermis is verby,'' (Reël 13)\n\nKies die KORREKTE antwoord om die sin mee te voltooi: Met hierdie woorde bedoel die Hoof dat ...",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "B / die spreker nie meer die konflik wil hê nie.",
    marking_notes: "Memo 9.1.8: B.",
    steps: [
      { marks: 1, description: "Met hierdie woorde bedoel die Hoof dat ...", options: ["die probleme nou opgelos is.", "die spreker nie meer konflik wil hê nie.", "daar weer volgende jaar kermis gehou sal word.", "dit tyd is om huis toe te gaan."], correctIndex: 1 },
    ],
  },
  {
    number: "9", sub_number: "9.1.9",
    text: "Gedig ''Krisis''.\n\n9.1.9 Beskryf die pad wat die Hoof en die Hart geloop het deur die volgende vier gebeure in die korrekte VOLGORDE te plaas:\n• Die Hoof het die Hart nie meer nodig nie.\n• Die Hoof en die Hart se pad saam het sleg begin word.\n• Hulle het aan die einde van hulle pad saam gekom.\n• Die pad wat die Hoof en die Hart saamgeloop het, was mooi.",
    marks: 4, topicKey: "poetry", cognitiveLevelName: "Reorganisation",
    model_answer: "1. Die pad wat die Hoof en die Hart saamgeloop het, was mooi. 2. Die Hoof en die Hart se pad saam het sleg begin word. 3. Die Hoof het die Hart nie meer nodig nie. 4. Hulle het aan die einde van hulle pad saam gekom.",
    marking_notes: "1 punt vir elke gebeurtenis wat op die korrekte plek is (memo 9.1.9).",
    steps: [
      { marks: 1, description: "Watter gebeurtenis kom EERSTE?", options: ["Die pad wat die Hoof en die Hart saamgeloop het, was mooi.", "Die Hoof en die Hart se pad saam het sleg begin word.", "Die Hoof het die Hart nie meer nodig nie.", "Hulle het aan die einde van hulle pad saam gekom."], correctIndex: 0 },
      { marks: 1, description: "Watter gebeurtenis kom TWEEDE?", options: ["Hulle het aan die einde van hulle pad saam gekom.", "Die Hoof het die Hart nie meer nodig nie.", "Die pad wat die Hoof en die Hart saamgeloop het, was mooi.", "Die Hoof en die Hart se pad saam het sleg begin word."], correctIndex: 3 },
      { marks: 1, description: "Watter gebeurtenis kom DERDE?", options: ["Die Hoof het die Hart nie meer nodig nie.", "Die pad wat die Hoof en die Hart saamgeloop het, was mooi.", "Hulle het aan die einde van hulle pad saam gekom.", "Die Hoof en die Hart se pad saam het sleg begin word."], correctIndex: 0 },
      { marks: 1, description: "Watter gebeurtenis kom LAASTE?", options: ["Die Hoof en die Hart se pad saam het sleg begin word.", "Die Hoof het die Hart nie meer nodig nie.", "Die pad wat die Hoof en die Hart saamgeloop het, was mooi.", "Hulle het aan die einde van hulle pad saam gekom."], correctIndex: 3 },
    ],
  },
  {
    number: "9", sub_number: "9.1.10",
    text: "Gedig ''Krisis''. Lees weer reël 1 (''Dis hier wat ons twee skei - jy, Hart, en ek,'') en die laaste vier woorde van die gedig (''Hier moet ons skei.'').\n\n9.1.10 Waarom is die herhaling van die skei-idee effektief?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Die herhaling (enige EEN): bind die gedig tot 'n geheel/voltooi die sirkel; maak dat die gedig eindig waar dit begin het; beklemtoon die einde/finaliteit van hulle verhouding; rond die gedig af; bevestig die tema; dui op die Hoof wat vasbeslote is om te skei.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom is die herhaling van die skei-idee effektief?", options: ["Dit wys dat die Hoof nog onseker is oor die skeiding.", "Dit wys dat die Hart die laaste woord sal hê.", "Dit bind die gedig tot 'n geheel en beklemtoon die finaliteit van die skeiding.", "Dit wys dat die skeiding nog nie seker is nie."], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.1.11",
    text: "Gedig ''Krisis''.\n\n9.1.11 Waarom kan jy met die innerlike konflik in die gedig identifiseer?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Enige EEN: my eie verstand baklei ook dikwels met my hart; in my lewe wil ek ook soms dinge doen soos my hart vir my sê; ek het ook al met my hart besluit/my hart het my ook verkeerde besluite laat neem; dis moeilik om die regte besluit te neem as jy vir iemand lief is; ek moet soms moeilike besluite maak waar die hart een ding wil doen en die kop 'n ander; my hart maak ook my kop deurmekaar; ek het besef dis beter om na my kop te luister.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom kan jy met die innerlike konflik in die gedig identifiseer?", options: ["Ek volg altyd my kop en my hart pla my nooit nie.", "Ek het nog nooit voor 'n moeilike besluit gestaan nie.", "My eie verstand baklei ook dikwels met my hart wanneer ek 'n besluit moet neem.", "Ek laat altyd ander mense vir my besluit."], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.1.12",
    text: "Gedig ''Krisis''.\n\n9.1.12 Waarom kan ons sê dat die titel, ''Krisis'', by die inhoud van die gedig pas?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Die titel is gepas, want (enige EEN): die inhoud van die gedig dui op die krisis/stryd tussen die Hoof en die Hart; konflik soos in die gedig beskryf lei gewoonlik tot 'n krisis; die Hart en die Hoof kan nie van mekaar geskei word nie en dit veroorsaak die krisis; die stryd is vir die spreker 'n krisis; die spreker besef sy Hart en Hoof werk nie meer saam nie.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom pas die titel ''Krisis'' by die inhoud?", options: ["Die gedig gaan oor 'n vrolike fees by die kermis.", "Die gedig beskryf die dood van die Hart.", "Die gedig gaan oor die stryd tussen die Hoof en die Hart, wat 'n krisis vir die spreker is.", "Die gedig gaan oor 'n ongeluk langs 'n pad."], correctIndex: 2 },
    ],
  },

  // ======================================================================
  // QUESTION 9.2: ''KEN JY DIE SEE ...'' (Uys Krige) - 18 marks
  // ======================================================================
  {
    number: "9", sub_number: "9.2.1",
    text: `Lees die gedig hieronder deur en beantwoord die vrae wat daarop volg (VRAE 9.2.1 tot 9.2.10).\n\n${GEDIG_SEE}\n\n9.2.1 Voltooi die volgende paragraaf feitelik korrek deur die ontbrekende woorde uit die gedig te kies:\n\nDie spreker vertel vir Meneer dat dit moeilik is om 'n visserman te wees. Wanneer hulle in die donker op die woeste see is, wag die Dood vir hulle en daar is geen (a) … nie. As die storms vir hulle te erg is om uit te gaan, moet hulle (b) … in die huis bly. Die golwe raak baie hoog, dan word hulle gou van hulle (c) … afgevee. Die spreker verstaan nie hoe Meneer kan sê die vis is te (d) … nie.`,
    marks: 4, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "(a) hulp/redmiddel/kuur; (b) pal; (c) bootjie(s); (d) duur.",
    marking_notes: "Een punt per korrekte woord (memo 9.2.1(a) - (d)).",
    steps: [
      { marks: 1, description: "(a) Wanneer die Dood wag, is daar geen ... nie.", options: ["skuiling", "hulp", "hoop", "kos"], correctIndex: 1 },
      { marks: 1, description: "(b) As die storms te erg is, moet hulle ... in die huis bly.", options: ["net", "soms", "gewoonlik", "pal"], correctIndex: 3 },
      { marks: 1, description: "(c) Die golwe veeg hulle gou van hulle ... af.", options: ["visgerei", "skuit", "net", "bootjie"], correctIndex: 3 },
      { marks: 1, description: "(d) Die spreker verstaan nie hoe Meneer kan sê die vis is te ...", options: ["duur", "goedkoop", "vars", "min"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.2.2",
    text: "Gedig ''Ken jy die see ...'', strofe 1 (reël 1 tot 4: ''Ken jy die see, Meneer, ken jy die see? / Hy lyk nou soos jou voorstoep blinkgeskuur / en kalm soos min dinge hier benee, / maar hy's gevaarliker as vlam of vuur.'').\n\n9.2.2 In strofe 1 is daar 'n duidelike kontras. Verduidelik die kontras in jou eie woorde.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Die see lyk rustig/kalm, maar is eintlik baie gevaarlik/bedrieglik. (Of soortgelyk, in die kandidaat se eie woorde.)",
    marking_notes: "Memo gee 2 punte vir een gekombineerde antwoord; hier in twee 1-punt-stappe verdeel. Sien FLAG 4.",
    steps: [
      { marks: 1, description: "Hoe lyk die see aanvanklik (eerste deel van die kontras)?", options: ["Die see lyk woes en gevaarlik.", "Die see lyk rustig en kalm, soos 'n blinkgeskuurde voorstoep.", "Die see lyk vol vis en welvarend.", "Die see lyk koud en donker."], correctIndex: 1 },
      { marks: 1, description: "Hoe is die see eintlik (tweede deel van die kontras)?", options: ["Die see is eintlik onskadelik en veilig.", "Die see is eintlik te vlak vir die bootjies.", "Die see is eintlik baie gevaarlik, gevaarliker as vlam of vuur.", "Die see is eintlik nog kalmer as wat dit lyk."], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.2.3",
    text: "Gedig ''Ken jy die see ...'', reël 12: ''waar kry ons hulp dan, waar's ons naaste buur?''\n\n9.2.3 Waarom gebruik die spreker in reël 12 die woord ''buur'' en nie ''bure'' nie?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Enige EEN: die woord ''buur'' pas in by die (kruis)rym van die gedig/rymdwang vind plaas; dit behou die ritme/tempo in die gedig; dit behou/beklemtoon die liriese toon/sluit aan by die refrein.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom gebruik die spreker ''buur'' en nie ''bure'' nie?", options: ["Daar is net een buurman wat die vissermanne kan help.", "Die digter het 'n spelfout gemaak.", "Die woord ''buur'' pas by die rym van die gedig en behou die ritme.", "Dit wys dat die vissermanne ver van ander mense woon."], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.2.4",
    text: "Gedig ''Ken jy die see ...'', reël 23: ''Wat help dit om te spartel en te skree: ''Nee! Nee!'''.\n\n9.2.4 Waarom maak die digter in reël 23 van die direkte rede gebruik?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Enige EEN: dit maak die woorde persoonlik/gedig geloofwaardig/praat direk met die leser; dit betrek die vissermanne direk; dit sluit aan by die gevaarlike situasie/vrees/angs van die vissermanne; dit wys die reaksie van die vissermanne in gevaar; dit is die direkte woorde van die vissermanne as die see hulle van hulle bootjies afvee; die direkte rede maak dit realisties/beklemtoon dat die see lewens neem.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom maak die digter van direkte rede gebruik?", options: ["Dit wys dat Meneer self hierdie woorde sê.", "Dit verander die gedig in gewone prosa.", "Dit wys dat die digter van die see hou.", "Dit wys die vissermanne se vrees en maak die situasie realisties."], correctIndex: 3 },
    ],
  },
  {
    number: "9", sub_number: "9.2.5",
    text: "Gedig ''Ken jy die see ...'': ''... ons wat net één ou misstappie moet gee'' (Reël 33)\n\nKies die KORREKTE antwoord om die sin mee te voltooi: Die gebruik van die verkleinwoord is om te ...",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "D / sê dat die kleinste foutjie die vissermanne kan laat sterf.",
    marking_notes: "Memo 9.2.5: D.",
    steps: [
      { marks: 1, description: "Die gebruik van die verkleinwoord is om te ...", options: ["sê dat die spreker hartseer is.", "sê dat die spreker sarkasties is.", "hoop dat Meneer sal ophou kla oor die prys.", "sê dat die kleinste foutjie die vissermanne kan laat sterf."], correctIndex: 3 },
    ],
  },
  {
    number: "9", sub_number: "9.2.6",
    text: "Gedig ''Ken jy die see ...''.\n\n9.2.6 Kies die KORREKTE antwoord. Die spreker se toon is (a) ..., want hy voel dit is (b) ... dat die mense wat die vis koop, oor die prys kla. Deur die refrein (c) ... die spreker sy gevoel.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "(a) ontevrede; (b) onregverdig; (c) beklemtoon.",
    marking_notes: "Memo 9.2.6(a) - (c). 1 punt elk.",
    steps: [
      { marks: 1, description: "(a) Die spreker se toon is ...", options: ["vriendelik", "ontevrede", "hartseer", "kalm"], correctIndex: 1 },
      { marks: 1, description: "(b) Hy voel dit is ... dat die mense oor die prys kla.", options: ["regverdig", "verstaanbaar", "onbelangrik", "onregverdig"], correctIndex: 3 },
      { marks: 1, description: "(c) Deur die refrein ... die spreker sy gevoel.", options: ["bevraagteken", "ontken", "beklemtoon", "vergeet"], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.2.7",
    text: "Gedig ''Ken jy die see ...''. Kies die begrip uit KOLOM B wat by die aanhaling in KOLOM A pas.\n\nKOLOM A\n(a) ''rukwind klap''\n(b) ''woester, wreder''\n(c) ''grys golf hoog soos 'n tronk se muur''\n\nKOLOM B\nA alliterasie\nB personifikasie\nC 'n metafoor\nD 'n vergelyking",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "(a) B / personifikasie; (b) A / alliterasie; (c) D / 'n vergelyking.",
    marking_notes: "Memo 9.2.7(a) - (c). 1 punt elk.",
    steps: [
      { marks: 1, description: "(a) ''rukwind klap''", options: ["alliterasie", "personifikasie", "'n metafoor", "'n vergelyking"], correctIndex: 1 },
      { marks: 1, description: "(b) ''woester, wreder''", options: ["alliterasie", "personifikasie", "'n metafoor", "'n vergelyking"], correctIndex: 0 },
      { marks: 1, description: "(c) ''grys golf hoog soos 'n tronk se muur''", options: ["alliterasie", "personifikasie", "'n metafoor", "'n vergelyking"], correctIndex: 3 },
    ],
  },
  {
    number: "9", sub_number: "9.2.8",
    text: "Die meneer kla dat die vis duur is.\n\n9.2.8 Watter les kan jy by die meneer in die gedig leer?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Ek kan leer dat ek (enige EEN): altyd na die groter prentjie moet kyk; die konteks van iets moet verstaan voordat ek daaroor kla/besef dat vissermanne gevaarlike werk doen; nie ander se werk moet bevraagteken/minder ag/op neersien nie; billik en regverdig moet wees as ek met mense omgaan; nie altyd moet kla alles is te duur nie.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Watter les kan jy by die meneer leer?", options: ["Ek moet altyd die goedkoopste vis koop.", "Ek moet die konteks verstaan voordat ek oor die prys kla.", "Vissermanne moet hulle pryse verlaag.", "Ek moet nooit vis eet nie."], correctIndex: 1 },
    ],
  },
  {
    number: "9", sub_number: "9.2.9",
    text: "Gedig ''Ken jy die see ...'', reël 37 en 38: ''wat telkens ver, vér oor die golwe tuur? / Sy dink dié briesie bring haar seuns betyds vir tee.''\n\n9.2.9 Motiveer waarom jy met mevrou Mathee kan simpatiseer.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Mevrou Mathee (enige EEN): het haar seuns verloor; het (nog) nie die dood van haar seuns aanvaar nie; tuur met verlange oor die see/wag nog vir haar seuns om terug te kom; hoop haar seuns sal terugkom om tee te drink; se seuns was vissermanne en het op see gesterf. Ek het ook al 'n geliefde verloor/almal wens 'n geliefde kom weer terug. (Aanhalings word nie aanvaar nie.)",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom kan jy met mevrou Mathee simpatiseer?", options: ["Sy is arm en kan nie vis koop nie.", "Sy is bang vir die wind in haar kliphuis.", "Sy het haar kliphuis in die storm verloor.", "Sy het haar seuns op see verloor en wag nog vir hulle om terug te kom."], correctIndex: 3 },
    ],
  },
  {
    number: "9", sub_number: "9.2.10",
    text: "Gedig ''Ken jy die see ...'', laaste strofe (reël 36 tot 40: mevrou Mathee wat oor die golwe tuur en wie se drie seuns ''agter die kerkhofmuur'' slaap).\n\n9.2.10 Waarom is die storie van mevrou Mathee se drie seuns 'n gepaste slot vir hierdie gedig?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Enige EEN: die vertelling van die gevare van die see bereik 'n hoogtepunt met die verwysing na die dood van die Mathee-seuns; dit bevestig die dinge wat die spreker van die see sê; ons leer die gevare/hartseer van die see ken; dit beklemtoon dat die see jou lewe kan neem; die manne se dood sluit aan by die einde van die gedig; dit beklemtoon dat die prys van die vis onbelangrik is in vergelyking met die prys wat mevrou Mathee se seuns moes betaal.",
    marking_notes: "1 punt vir enige EEN memo-antwoord.",
    steps: [
      { marks: 1, description: "Waarom is die storie 'n gepaste slot?", options: ["Dit wys dat die vis eintlik goedkoop is.", "Dit wys dat Meneer gelyk het oor die prys.", "Dit bewys dat die vissermanne nie genoeg vis verkoop nie.", "Dit beklemtoon die gevare van die see en dat die prys van die vis min is teenoor die lewens wat verlore gaan."], correctIndex: 3 },
    ],
  },
];
