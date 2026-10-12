// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language, FAL) Paper 2 (Literature / Letterkunde), November 2024, National
// Senior Certificate. Source: official DBE combined question paper + marking
// guideline ("Nasienriglyne") PDF (87 pages: question paper pages 1-44,
// marking guideline pages 45-87), downloaded from stanmorephysics.com (a
// public DBE past-paper mirror; the memo is the official DBE one - "NSS -
// Nasienriglyne", "Kopiereg voorbehou"). Read from the PDF text layer; the two
// poem pages were rendered once to confirm stanza/line layout.
//
// ============================ SCOPE (IMPORTANT) ============================
// The real P2 offers a CHOICE: the student answers TWO of four sections
// (A Roman/novel, B Drama, C Kortverhale/short stories, D Gedigte/poems), and
// within A and B picks one text (cover page: PUNTE 70, TYD 2 1/2 uur). This
// app has no "answer one of several" mechanism, so every seeded question is
// shown to the student. The student studies the drama "Fiela se Kind - Die
// Drama" and the novel is unknown, so this file is DELIBERATELY SCOPED to:
//   - Section B (Drama): ONLY Question 7, Fiela se Kind (35 marks).
//     Questions 5 (Poppie) and 6 (Paljas) are NOT ingested.
//   - Section C (Kortverhale): Question 8.1 "Opdrag" (Rike Olivier, 18 marks)
//     and Question 8.2 "Kringloop" (Ruto Vambo, 17 marks) = 35 marks.
//   - Section D (Gedigte): Question 9.1 "Die dans van die reen" (Eugene N
//     Marais, 18 marks) and Question 9.2 "Eksamenlokaal" (Suzaan Laing,
//     17 marks) = 35 marks.
//   - Section A (Roman, Questions 1-4, the four novels) is SKIPPED entirely.
// Scoped total = 35 + 35 + 35 = 105 marks, MORE than the real 70-mark sitting
// (which needs only two sections). That is intentional: this is a practice
// bank. `paper.total_marks` is therefore 105 (the scoped total), not the real
// cover-page 70. `duration_minutes` is kept at the real exam's 150.
//
// ====================== EXTRACTS / TEXTS SHOWN TO THE STUDENT ===============
// The paper prints four texts that the questions depend on: TEKS M and TEKS N
// (drama extracts), TEKS O and TEKS P (short story extracts), and the two
// poems in full. Each is transcribed from the PDF text layer and embedded at
// the start of the `text` of every question that refers to it by line number
// or quotes it (questions that test general knowledge of the whole drama or
// short story, e.g. fill-in-the-blank plot facts, do not repeat it). TEKS O,
// TEKS P and both poems carry the printed line numbers. The drama extracts
// (TEKS M, TEKS N) are reflowed into speeches; the lines the questions cite
// are marked in square brackets (TEKS N) or explained in a note under the
// extract (TEKS M), because the paper's printed line breaks cannot be kept.
// NOTE on TEKS O: the printed extract contains the student's own
// italicised notes about "E" (Elizabeth), as in the paper.
//
// =========================== GRADING APPROACH ==============================
// ALL questions use stepped MCQ (`steps: MarkingPointStep[]`): one step per
// mark-earning point, four options, the correct option taken from the memo,
// the three wrong options being realistic Grade 12 misreadings (never another
// answer the memo accepts). No question uses `marking_points`.
//   - The memo's "Enige EEN of soortgelyk" open items (e.g. 7.3, 7.7, 7.9,
//     7.17-7.19, 8.1.x, 9.2.9, 9.2.10) become a single-step MCQ whose correct
//     option is one of the memo's accepted answers.
//   - "Kies die KORREKTE antwoord uit die tussen hakies" + "Motiveer" pairs
//     (7.12, 7.16, 8.1.8, 8.2.6, 9.2.4): the first part is one step (two real
//     choices padded to four); the motivation is a second step. The memo says
//     the motivation earns its mark only if the first answer is right; in
//     this app each step is graded independently, so this dependency is not
//     enforced (FLAG, below).
//   - Sequencing items (7.10, 8.2.1, 9.1.9): one step per position
//     ("Which event happened first/second/third/fourth?"), 1 mark each, as
//     the memo awards one mark per event in its correct position.
//   - Matching items (7.8, 8.2.7, 9.2.7): one step per row, options are the
//     column-B statements/terms.
//   - "Give TWO ..." items (9.1.5, 9.1.6, 9.2.6(a), 7.6, 9.2.1, 8.1.5) are
//     split into two single-mark steps.
//
// Cognitive levels: this paper (QP and memo) does NOT print Barrett-taxonomy
// labels per question, so the level for each question is this file's own
// judgement (Literal = recall of fact/quotation, Reorganisation = ordering /
// matching / classifying, Inference = interpretation of language, symbol,
// character, Evaluation = opinion/lesson/appropriateness).
//
// FLAGS FOR REVIEW:
//   1. No Barrett labels in the source (see above): cognitive levels are
//      assigned by this file.
//   2. Dependency between "choose" and "motivate" parts (7.12.2, 7.16.2,
//      8.1.8(b), 8.2.6(b), 9.2.4(b)) is not enforced by the stepped grader.
//   3. Memo 7.7 states 'Aanvaar nie "nie sensitief" nie' (do not accept
//      "not sensitive"): the correct option is phrased as a concrete reason.
//   4. Memo 8.1.5: "E" = Elizabeth, the main character of the youth novel
//      "'n Pot vol winter" that Sarah is reading; her relationship with Kurt
//      is contrasted with Sarah's with Gerrie. Transcribed as in the memo.
//   5. Memo 8.1.7 contains the bullet "laat nie ruimte vir verhoudings met
//      ander persone nie" among accepted answers; transcribed faithfully but
//      a different bullet (they talk constantly) is used as the correct MCQ
//      option.
//   6. Memo 9.1.1 accepts a long descriptive answer (Kalahari/die woestyn
//      waar die Khoi/San bly); the MCQ correct option is "die Kalahari".
//   7. Question 9.2.3 states the paper "is drie uur lank": memo says it is
//      false because the poem refers to twee ure (line 8).
//   8. Memo prints the poem 9.2 title in the contents list but the paper
//      shows only "Poort, Via Afrika, 1986" as source; kept as printed.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

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
  year: 2024,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 150,
  total_marks: 105,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2025/04/NSC-Afrikaans-FAL-Grade-12-November-2024-P2-and-Memo.pdf" as string | null,
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

// ---------------------------------------------------------------------------
// Texts printed in the question paper
// ---------------------------------------------------------------------------

const TEKS_M = `TEKS M (Fiela se Kind - Die Drama, Dalene Matthee)

ELIAS: As 'n man in die nag tot by die skippe kan kom en lewer wat jy het.

WILLEM terug.

WILLEM: Pa, Lukas is nie by tant Malie nie.

ELIAS: Het jy by tant Anna gevra?

WILLEM: Nee, Pa.

ELIAS: Nou vir wat moet ek julle alles voorsê?

WILLEM: Ja, Pa.

WILLEM af.

ELIAS: 'n Man sukkel tot sy kinders die dag groot genoeg is om te kan help, maar ek sal nou nog lank moet sukkel. Willem is maar ses, Kristoffel is vyf, Lukas is drie en Nina nog aan die tiet.

BARTA kom soos 'n gedaante deur die mis aan.

BARTA: Elias?

ELIAS: Wat is dit nou weer, vrou? Kan julle nie sien ek is besig nie?

BARTA: Was die kind nie hier by jou nie?

ELIAS: Ek het jou mos gesê hy was nie hier nie.

BARTA: Ek was by Sofie, hy's nie daar nie.

MALIE, TANT GERTJIE en SOFIE op.

TANT MALIE: Dit het my oorle antie agter in Karatara se bos oorgekom. Sy het gedink die kind is saam met die ander om te gaan vuurhout kap en so kom sy dit eers die middag agter dat hy wég is. Meer as 'n week later het hulle die verkluimde liggaampie gekry. Ons is nog die dag begrafnis toe.

BARTA druk 'n vuis in haar mond en byt op haar kneukels.

ELIAS: Ek sê vir julle, die kind is nie weg nie.

(Die uittreksel se reëls is soos in die vraestel gedruk: "BARTA kom soos 'n gedaante deur die mis aan." is reël 12; Elias se woorde in reëls 6 tot 16 is sy woorde vanaf "'n Man sukkel ..." tot "... Wat is dit nou weer, vrou? Kan julle nie sien ek is besig nie?"; tant Malie se woorde is reël 19 tot 22.)`;

const TEKS_N = `TEKS N (Fiela se Kind - Die Drama, Dalene Matthee)

MAGISTRAAT: Die kind is by sy regte ouers. Wat hy die dag toe hy weggeraak het, aanhad, kan geen verskil maak nie. Jy kan hom enigiets staan en aantrek en daarby sweer met die hoop dat ek jou sal glo. Jy kan selfs vir my kom sê jy het die klere gebêre en dit uithaal en wys en ...

FIELA: Die jaar met die kriekplaag in die Kloof is dit ongelukkig opgevreet, baas, maar ek sal nie vir baas lieg nie. Ek sal op die Grootboek sweer. [reël 6] Ek vra baas net hierdie een guns: laat roep die bosvrou en laat haar kom sê. [reël 7]

MAGISTRAAT: Dis genoeg. Jy kan besluit of jy self gaan loop en of ek die konstabel moet roep.

FIELA: Here, baas, jy kan my nie wegjaag nie.

MAGISTRAAT: Konstabel!

FIELA (op band): Seil, Fiela, seil. [reël 12] (Gewone spraak.) Asseblief, weledele heer, ek sal loop, ek wou nie kom moeilikheid maak het nie. (Loop agteruit.) Ek sal loop, baas – ek loop. Sê my dan net waar die kind is, baas. Sê my net wie die mense is by wie hy is.

MAGISTRAAT: Ek verbied jou om naby die kind te kom! Ek sal vandag nog aan die magistraat op Uniondale skryf om jou te laat dophou, en om stappe teen jou te neem as jy enige moeilikheid veroorsaak.

Ligte begin uitdoof.`;

const TEKS_O = `TEKS O ("Opdrag" - Rike Olivier)

1   Dus: as E se ouers nou nie ongelukkig was nie, sou E nie "seks" gesoek
2   het nie?
3   Kommunikasie tussen ouers en kinders oor huweliksituasie nul.
4   Hiermee kan sy tog 'n bietjie identifiseer. Soms is haar ma-hulle darem baie
5   tóé. Nie dat moeilike goed tuis nie openlik bespreek word nie, veral saans aan
6   tafel. Dis so lékker om veral met haar pa te debatteer. Hy kan so tergend
7   duiwel-se-advokaat speel om haar uit te lok. "Tot dénke," spot hy dan as sy
8   heftig raak, "nie emosie alleen nie." Dit gaan dikwels oor wat aangaan in die
9   land, of oor godsdiens, of oor wat nie hierdie maand bekostig kan word nie.
10  Maar daar ís 'n blinde kol: sy kan nie na haar ouers toe gaan oor Gerrie nie.
11  Sy sweer haar ma het nooit so gevoel toe sy jonk was nie. Of as sy het (?),
12  het sy vergeet. En nou ja, haar pa verpes pop en partytjies, hy sien haar nie
13  eers as 'n méisiekind nie, verstaan nie van klere en lipstick nie. En van seuns
14  nie.
    E ervaar gebrek aan (huislike) liefde intens. Soek dit elders en kry troos
    en warmte by kêrel, Kurt (K). E dink eintlik hy pas nie by haar nie, dis net
    physical attraction (soek Afr) weens traumas tuis en bang vir alleenwees.
15  Hier werk iets nie, dink Sarah.`;

const TEKS_P = `TEKS P ("Kringloop" - Ruto Vambo)

1   Die AAND breek aan. Helder en skoon. Perfekte lansering. Perfekte
2   beeldsending. Manjifieke kleurskouspel, vlamme so hoog soos die
3   Chrysler-gebou en die sampioenwolk sonder weerga. Maar diep in die hart
4   van die rooi planeet heers pandemonium. Lank, lank gelede – toe die son
5   begin afkoel het – het lewe op Mars se oppervlak onbestaanbaar geraak.
6   Daar was nie genoeg hitte om verdamping te veroorsaak nie, die reën het
7   weggebly, die vog het diep onder die kors van die planeet verdwyn. Dit het
8   kouer en kouer geword. Oorlewing was in die weegskaal. Oorloë om kos het
9   uitgebreek. Uiteindelik is alles wat die samelewing deur eeue opgebou het,
10  stelselmatig vernietig. Bendes het gefloreer in 'n klimaat van totale anargie.
11  Dié wat wou oorleef en dit kon bekostig, het ondergronds gegaan, letterlik.
12  Geleidelik is water- en energiebronne ontwikkel teen enorme onkoste. Nuwe
13  boerderymetodes is gevolg. 'n Hele nuwe samelewing het sy beslag gekry.
14  Die kennis wat hulle gehad het, was nutteloos. Die inwoners moes nuwe
15  planne maak, oplossings bedink. Die ondergrondse bestaan het bitter min in
16  gemeen gehad met die luukse van sonskyn en oorvloedige water wat hulle
17  eers geken het. Wurms en fungi het die stapelvoedsel uitgemaak. Mars het
18  die Donker Eeue ingegaan.
19  Maar geleidelik groei 'n nuwe kultuur. Grondverskuiwings en lawa
20  veroorsaak al groter probleme. Die wetenskaplikes beplan eindeloos ... tot die
21  BOM.`;

const GEDIG_1 = `"DIE DANS VAN DIE REËN" - Eugène N Marais
Lied van die vioolspeler, Jan Konterdans, uit die Groot Woestyn

1   O die dans van ons Suster!
2   Eers oor die bergtop loer sy skelm,
3       en haar oge is skaam;
4           en sy lag saggies.
5   En van ver af wink sy met die een hand;
6   haar armbande blink en haar krale skitter;
7               saggies roep sy.
8   Sy vertel die winde van die dans
9   en sy nooi hulle uit, want die werf is wyd en die bruilof groot.

10  Die grootwild jaag uit die vlakte,
11          hulle dam op die bulttop,
12  wyd rek hulle die neusgate
13          en hulle sluk die wind;
14  en hulle buk, om haar fyn spore op die sand te sien.
15  Die kleinvolk diep onder die grond hoor die sleep van haar voete,
16        en hulle kruip nader en sing saggies:
17              "Ons Suster! Ons Suster! Jy het gekom! Jy het gekom!"

18  En haar krale skud,
19  en haar koperringe blink in die wegraak van die son.
20      Op haar voorkop is die vuurpluim van die berggier;
21            sy trap af van die hoogte;
22  sy sprei die vaalkaros met altwee arms uit;
23      die asem van die wind raak weg.
24      O, die dans van ons Suster!

[Uit: Versamelde gedigte, JL van Schaik, 1936]`;

const GEDIG_2 = `"EKSAMENLOKAAL" - Suzaan Laing

1   Haar skoene klik hard op die houtvloer
2   soos sy op en af stap
3   tussen die rye tjoepstil banke

4   Nou en dan kraak die blaai van 'n blad
5   die Septembereksamenlug.

6   hande bewe met rukke oor skoon wit velle
7   los 'n inkwarboel agter.

8   Die horlosie tel twee ure af.

9   Sy stap stadig en oes die stelle een vir een
10  Blou op wit:
11  Ryp met gistermiddag se kennis.

[Uit: Poort, Via Afrika, 1986]`;

const withText = (extract: string, q: string) => `${extract}\n\n${q}`;

export const questions: QuestionSeed[] = [
  // ======================================================================
  // AFDELING B: DRAMA - VRAAG 7: FIELA SE KIND - DIE DRAMA (35 marks)
  // ======================================================================
  {
    number: "7", sub_number: "7.1",
    text: "Voltooi die volgende paragraaf feitelik korrek deur die ontbrekende woord(e) uit die drama te kies.\n\nLukas van Rooyen het in die Bos weggeraak. Op die (7.1.1) ... dag was hy steeds weg. Op die plaas, (7.1.2) ..., het Fiela Komoetie 'n klein seuntjie voor haar deur gekry. Sy het hom Benjamin genoem en as haar eie kind grootgemaak. Jare later het die sensusmanne veroorsaak dat die magistraat, Mister (7.1.3) ..., besluit het dat Benjamin eintlik Lukas is. Die magistraat het so besluit omdat Benjamin wit en die Komoeties (7.1.4) ... was.",
    marks: 4, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "7.1.1 agtste; 7.1.2 Wolwekraal; 7.1.3 Goldsbury; 7.1.4 bruin/bruinmense.",
    marking_notes: "Memo: agtste/agste/8ste; Wolwekraal; Goldsbury; bruin/bruinmense. 1 mark each.",
    steps: [
      { marks: 1, description: "7.1.1 Op die ... dag was Lukas steeds weg.", options: ["sewende", "agtste", "tiende", "veertiende"], correctIndex: 1 },
      { marks: 1, description: "7.1.2 Op die plaas ... het Fiela Benjamin voor haar deur gekry.", options: ["Diepwalle", "Karatara", "Wolwekraal", "Uniondale"], correctIndex: 2 },
      { marks: 1, description: "7.1.3 Die magistraat, Mister ...", options: ["Kapp", "Goldsbury", "Laghaanse", "Van Rooyen"], correctIndex: 1 },
      { marks: 1, description: "7.1.4 Benjamin was wit en die Komoeties was ...", options: ["wit", "swart", "arm", "bruin"], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.2.1",
    text: withText(TEKS_M, "''BARTA kom soos 'n gedaante deur die mis aan.'' (Reël 12)\n\nKies die KORREKTE antwoord: ''kom soos 'n gedaante deur die mis aan.'' in reël 12 is 'n ..."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "vergelyking",
    marking_notes: "Memo: vergelyking.",
    steps: [{ marks: 1, description: "Watter beeldspraak is 'soos 'n gedaante deur die mis'?", options: ["metafoor", "vergelyking", "personifikasie", "ironie"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.2.2",
    text: withText(TEKS_M, "''BARTA kom soos 'n gedaante deur die mis aan.'' (Reël 12)\n\nWat beteken dit binne die konteks van die uittreksel?"),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Barta lyk spookagtig/verskrik/bang en bekommerd, en in die mis kan 'n mens net die figuur sien, nie wie dit is nie.",
    marking_notes: "Memo (enige EEN): in die mis kon 'n mens nie mooi sien wie dit was nie; spookagtig/uitgeteer/verskrik/bekommerd; skadu van die self; onheilspellende atmosfeer; skielik uit nêrens.",
    steps: [{ marks: 1, description: "Wat beteken dit dat Barta soos 'n gedaante deur die mis aankom?", options: ["Barta is baie gelukkig en loop vinnig na Elias toe.", "Barta lyk spookagtig en verskrik en word net as 'n figuur in die mis gesien.", "Barta het 'n wit kleed aan en probeer Elias bang maak.", "Barta kom doelbewus stadig aan omdat sy kwaad is vir Elias."], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Dit was maklik om in die Bos weg te raak, want daar was baie mis. Noem nog EEN rede waarom iemand maklik in die Bos kon wegraak.",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "Die bome groei dig op mekaar / die plantegroei is dig / dis donker / daar is geen rigtingaanwysers nie.",
    marking_notes: "Memo (enige EEN): dig bome/plantegroei; donker; olifante; Bos is groot; baie voetpaaie; geen regte paaie; geen rigtingaanwysers; kinderspore; alles lyk dieselfde.",
    steps: [{ marks: 1, description: "Watter rede (behalwe mis) maak dit maklik om in die Bos weg te raak?", options: ["Daar is baie mense wat jou kan lei.", "Die Bos is baie klein en oop sodat jy verdwaal.", "Daar is geen bome in die Bos nie.", "Die bome groei dig op mekaar en daar is geen rigtingaanwysers nie."], correctIndex: 3 }],
  },
  {
    number: "7", sub_number: "7.4",
    text: withText(TEKS_M, "Lees Elias se woorde in reëls 6 tot 16.\n\nUit hierdie woorde lei ons af dat Elias ... was."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "C - ongeduldig",
    marking_notes: "Memo: C/ongeduldig.",
    steps: [{ marks: 1, description: "Elias was ...", options: ["bang", "kalm", "ongeduldig", "agterdogtig"], correctIndex: 2 }],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Waarmee moes Lukas vir Elias help nadat hy by die Van Rooyens in die Bos gaan bly het?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "Met die hout / om hout te kap.",
    marking_notes: "Memo (enige EEN): met die hout; om hout/bome te kap; balke maak/saag; werk op die steier.",
    steps: [{ marks: 1, description: "Waarmee moes Lukas vir Elias help?", options: ["Om olifante te jag", "Om hout te kap", "Om skape op te pas", "Om die kleiner kinders te onderrig"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.6",
    text: "Benjamin het in die Lange Kloof en in die Bos grootgeword.\n\nHoe het sy lewe in die Lange Kloof van sy lewe in die Bos verskil as ons dink aan skoolwerk wat hy geleer het?",
    marks: 2, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "In die Lange Kloof het hy geleer wat die ander kinders in die skool geleer het (bv. Bybel, somme, lees en skryf); in die Bos het hy nie skoolwerk geleer nie / net gewerk (en Nina het geleer lees en skryf).",
    marking_notes: "Memo: 1 mark vir die Lange Kloof-deel (enige EEN), 1 mark vir die Bos-deel (enige EEN).",
    steps: [
      { marks: 1, description: "In die Lange Kloof (by Fiela-hulle) het hy ...", options: ["glad niks geleer nie want Fiela het hom weggehou van almal.", "geleer lees en skryf en somme en Bybelstories soos die ander kinders.", "net geleer hoe om hout te kap.", "slegs by die magistraat se kinders klasgehou."], correctIndex: 1 },
      { marks: 1, description: "In die Bos het hy ...", options: ["elke dag skoolgegaan by 'n onderwyser.", "nie skoolwerk geleer nie, net gewerk.", "Latyn en wiskunde by Elias geleer.", "boeke by die boswagter Kapp geleen en self gestudeer."], correctIndex: 1 },
    ],
  },
  {
    number: "7", sub_number: "7.7",
    text: withText(TEKS_M, "Lees tant Malie se woorde in reël 19 tot 22.\n\nWaarom kan ons sê dat tant Malie se woorde in hierdie situasie onsensitief was?"),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Met haar storie oor 'n ander kind wat dood is, neem sy Lukas se ouers se hoop weg / skep sy die ergste scenario / maak sy die ouers bang.",
    marking_notes: "Memo (enige EEN): neem hoop weg; skep ergste scenario; negatief i.p.v. positief; doemprofeet/onsimpatiek; maak ander bang met woorde soos dood/begrafnis. Memo aanvaar nie 'nie sensitief' as antwoord nie.",
    steps: [{ marks: 1, description: "Waarom was tant Malie se woorde onsensitief?", options: ["Sy het die ouers aangemoedig om vinniger in die Bos te gaan soek.", "Sy het met haar storie oor 'n dooie kind die ouers se hoop weggeneem en hulle bang gemaak.", "Sy het gesê Lukas is by tant Anna, wat nie waar was nie.", "Sy het Elias beskuldig dat hy nie sy kinders oppas nie."], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.8",
    text: "In hierdie drama is daar uiterlike konflik tussen karakters.\n\nKies die oorsaak van die konflik uit die stellings wat by elke karakter pas:\n\nA ... het verkeerd opgetree deur ander mense se goed sommer net te vat.\nB ... het sonder simpatie opgetree toe hulle die kind van die plaas af weggevat het.\nC ... het Lukas in die Bos beskerm en dit het die ander karakters ontstel.\nD ... het die magistraat aangevat oor sy keuses.\nE ... se aggressie het sy kinders van hom weggestoot.",
    marks: 4, topicKey: "drama-fiela", cognitiveLevelName: "Reorganisation",
    model_answer: "7.8.1 Elias - E; 7.8.2 Barta - C; 7.8.3 Nina - A; 7.8.4 Dikke en Lange - B.",
    marking_notes: "Memo: Elias E, Barta C, Nina A, Dikke en Lange B (1 punt elk).",
    steps: [
      { marks: 1, description: "7.8.1 Elias", options: ["A ... het verkeerd opgetree deur ander mense se goed sommer net te vat.", "B ... het sonder simpatie opgetree toe hulle die kind van die plaas af weggevat het.", "D ... het die magistraat aangevat oor sy keuses.", "E ... se aggressie het sy kinders van hom weggestoot."], correctIndex: 3 },
      { marks: 1, description: "7.8.2 Barta", options: ["A ... het verkeerd opgetree deur ander mense se goed sommer net te vat.", "C ... het Lukas in die Bos beskerm en dit het die ander karakters ontstel.", "D ... het die magistraat aangevat oor sy keuses.", "E ... se aggressie het sy kinders van hom weggestoot."], correctIndex: 1 },
      { marks: 1, description: "7.8.3 Nina", options: ["A ... het verkeerd opgetree deur ander mense se goed sommer net te vat.", "B ... het sonder simpatie opgetree toe hulle die kind van die plaas af weggevat het.", "C ... het Lukas in die Bos beskerm en dit het die ander karakters ontstel.", "D ... het die magistraat aangevat oor sy keuses."], correctIndex: 0 },
      { marks: 1, description: "7.8.4 Dikke en Lange", options: ["B ... het sonder simpatie opgetree toe hulle die kind van die plaas af weggevat het.", "C ... het Lukas in die Bos beskerm en dit het die ander karakters ontstel.", "D ... het die magistraat aangevat oor sy keuses.", "E ... se aggressie het sy kinders van hom weggestoot."], correctIndex: 0 },
    ],
  },
  {
    number: "7", sub_number: "7.9",
    text: withText(TEKS_M, "Hoe kry die skrywer dit reg om jou te laat voel dat Elias eenkant staan en nie regtig deel is van die situasie in die uittreksel nie?"),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Elias laat Barta voel sy is lastig, sê hy is besig en gaan voort met sy eie werk sonder om te help soek / gee kort, ongeduldige antwoorde.",
    marking_notes: "Memo (enige EEN): Barta lastig laat voel; sê hy is besig; help nie soek nie; reageer nie dadelik nie; sê vir ander wat om te doen maar doen self niks; fokus op homself; kort/kortaf antwoorde; praat met homself; ontken dat die kind weg is.",
    steps: [{ marks: 1, description: "Hoe wys die skrywer dat Elias eenkant staan?", options: ["Elias neem die leiding en organiseer die soektog.", "Elias troos Barta en bly by haar.", "Elias sê hy is besig en gee kort, ongeduldige antwoorde sonder om te help soek.", "Elias loop self die Bos in om Lukas te gaan soek."], correctIndex: 2 }],
  },
  {
    number: "7", sub_number: "7.10",
    text: "Skryf die volgende gebeure in die korrekte VOLGORDE soos wat dit in die drama gebeur:\n\nA Lukas het Nina tot by Diepwalle geneem toe sy op Knysna moes gaan werk.\nB Boswagter Kapp het gaan hoor hoe dit met Lukas in die Bos gaan.\nC Die magistraat het gesê Benjamin moes in die hof verskyn.\nD Benjamin is saam met die Van Rooyens Bos toe.",
    marks: 4, topicKey: "drama-fiela", cognitiveLevelName: "Reorganisation",
    model_answer: "1. C (magistraat: Benjamin moes in die hof verskyn); 2. D (Benjamin saam met die Van Rooyens Bos toe); 3. B (Kapp gaan hoor hoe dit met Lukas gaan); 4. A (Lukas neem Nina tot by Diepwalle).",
    marking_notes: "Memo: een punt vir elke gebeure op die korrekte plek.",
    steps: [
      { marks: 1, description: "Watter gebeurtenis was EERSTE?", options: ["Lukas het Nina tot by Diepwalle geneem.", "Boswagter Kapp het gaan hoor hoe dit met Lukas gaan.", "Die magistraat het gesê Benjamin moes in die hof verskyn.", "Benjamin is saam met die Van Rooyens Bos toe."], correctIndex: 2 },
      { marks: 1, description: "Watter gebeurtenis was TWEEDE?", options: ["Lukas het Nina tot by Diepwalle geneem.", "Benjamin is saam met die Van Rooyens Bos toe.", "Boswagter Kapp het gaan hoor hoe dit met Lukas gaan.", "Die magistraat het gesê Benjamin moes in die hof verskyn."], correctIndex: 1 },
      { marks: 1, description: "Watter gebeurtenis was DERDE?", options: ["Benjamin is saam met die Van Rooyens Bos toe.", "Lukas het Nina tot by Diepwalle geneem.", "Die magistraat het gesê Benjamin moes in die hof verskyn.", "Boswagter Kapp het gaan hoor hoe dit met Lukas in die Bos gaan."], correctIndex: 3 },
      { marks: 1, description: "Watter gebeurtenis was LAASTE?", options: ["Boswagter Kapp het gaan hoor hoe dit met Lukas gaan.", "Benjamin is saam met die Van Rooyens Bos toe.", "Die magistraat het gesê Benjamin moes in die hof verskyn.", "Lukas het Nina tot by Diepwalle geneem toe sy op Knysna moes gaan werk."], correctIndex: 3 },
    ],
  },
  {
    number: "7", sub_number: "7.11.1",
    text: withText(TEKS_N, "''Ek sal op die Grootboek sweer.'' (Reël 6)\n\nWaarna verwys Fiela as sy van die ''Grootboek'' praat?"),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "Die Bybel.",
    marking_notes: "Memo: (Die) Bybel.",
    steps: [{ marks: 1, description: "Wat is die 'Grootboek'?", options: ["Die magistraat se wetboek", "Die Bybel", "Die boek waarin die sensus aangeteken is", "Die hofregister"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.11.2",
    text: withText(TEKS_N, "''Ek sal op die Grootboek sweer.'' (Reël 6)\n\nWat bedoel Fiela as sy sê dat sy op die Grootboek sal sweer?"),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Sy sal nooit lieg nie / sy is 'n eerlike mens (omdat die Bybel vir haar so belangrik is).",
    marking_notes: "Memo (enige EEN): sal nie lieg nie/eerlik; uit respek vir die Bybel die waarheid vertel; Christenvrou met groot geloof.",
    steps: [{ marks: 1, description: "Wat bedoel Fiela?", options: ["Sy sal die magistraat probeer omkoop.", "Sy is bang dat sy gestraf sal word as sy nie sweer nie.", "Sy sal nie lieg nie en praat die waarheid.", "Sy wil die magistraat uitdaag om die Bybel voor te lees."], correctIndex: 2 }],
  },
  {
    number: "7", sub_number: "7.12.1",
    text: withText(TEKS_N, "''... laat roep die bosvrou en laat haar kom sê.'' (Reël 7)\n\nKies die KORREKTE antwoord: Hierdie woorde van Fiela dui op ..."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "ironie",
    marking_notes: "Memo: ironie.",
    steps: [{ marks: 1, description: "Fiela se woorde dui op ...", options: ["sarkasme", "ironie", "personifikasie", "oordrywing"], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.12.2",
    text: withText(TEKS_N, "''... laat roep die bosvrou en laat haar kom sê.'' (Reël 7)\n\nMotiveer jou antwoord op 7.12.1 (ironie)."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Barta het reeds in die hof gelieg toe sy gesê het Benjamin is haar seun, Lukas / Fiela weet Barta sal nie weet wat die kind aangehad het nie.",
    marking_notes: "Memo (enige EEN): Barta het reeds gelieg; het toegelaat dat ander haar voorsê; Fiela het geweet Barta sou nie weet wat die kind aangehad het nie; Fiela is nooit geroep nie maar is bereid om Barta deel te maak. Antwoord op 7.12.1 moet reg wees vir die punt (nie deur die app afgedwing nie).",
    steps: [{ marks: 1, description: "Hoekom is dit ironies dat Fiela vra dat die bosvrou kom sê?", options: ["Fiela glo die bosvrou sal die magistraat oortuig dat Benjamin Fiela se kind is.", "Barta het reeds in die hof gelieg en sal nie weet wat die kind aangehad het nie.", "Die bosvrou is 'n bekende getuie wat die magistraat vertrou.", "Barta is nie meer in die distrik nie en kan nie geroep word nie."], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.13",
    text: withText(TEKS_N, "''Seil, Fiela, seil.'' (Reël 12)\n\nVerduidelik die figuurlike betekenis van hierdie woorde wat Fiela vir haarself sê."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Sy moet nederig bly / kalm bly / nie terugpraat nie / onderdanig wees.",
    marking_notes: "Memo: nederig bly; nie kwaad word nie; kalm bly; die minste wees; nie terugpraat nie; onderdanig wees; smeek/pleit.",
    steps: [{ marks: 1, description: "Wat beteken 'Seil, Fiela, seil' figuurlik?", options: ["Fiela moet vinnig uit die hof vlug.", "Fiela moet kalm en nederig bly en nie terugpraat nie.", "Fiela wil met 'n skip na Benjamin vaar.", "Fiela moet harder veg en haar stem verhef."], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.14",
    text: "Fiela het nooit uitgevind waar Benjamin was nie.\n\nGee 'n feit uit die drama om te sê waarom hierdie stelling ONWAAR is.",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Literal",
    model_answer: "Fiela het Benjamin se goed/klere/kombers by die Van Rooyens gaan afgee / was self by die Van Rooyens se huis in die Bos.",
    marking_notes: "Memo (enige EEN): het Benjamin se besittings by die Van Rooyens afgegee; het hom by die Van Rooyens gaan soek/was Bos toe.",
    steps: [{ marks: 1, description: "Watter feit bewys dat Fiela WEL uitgevind het waar Benjamin was?", options: ["Die magistraat het haar die adres gegee.", "Fiela het Benjamin se goed by die Van Rooyens in die Bos gaan afgee.", "Selling het vir Fiela gesê waar Benjamin is.", "Boswagter Kapp het Benjamin by Fiela se huis teruggebring."], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.15",
    text: withText(TEKS_N, "In hierdie uittreksel is die magistraat 'n simbool van ..."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "C - die onregverdige politieke situasie van die tyd.",
    marking_notes: "Memo: C.",
    steps: [{ marks: 1, description: "Die magistraat is 'n simbool van ...", options: ["mense se omgee.", "mense se hulpvaardigheid.", "die onregverdige politieke situasie van die tyd.", "die mense by die hof wat te veel werk het om te doen."], correctIndex: 2 }],
  },
  {
    number: "7", sub_number: "7.16.1",
    text: withText(TEKS_N, "Fiela is 'n sterk vrou wat nie maklik stilbly en terugstaan as iets nie reg is nie.\n\nKies die KORREKTE antwoord: In hierdie situasie ervaar Fiela sterk innerlike konflik, want sy is bekommerd oor Benjamin, maar sy moet ook ..."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "gehoorsaam wees aan die wet",
    marking_notes: "Memo: gehoorsaam wees aan die wet.",
    steps: [{ marks: 1, description: "Fiela moet ook ...", options: ["gehoorsaam wees aan die wet", "doen wat sy self dink is reg", "die Bybel aan die magistraat gee", "met die konstabel saamgaan tronk toe"], correctIndex: 0 }],
  },
  {
    number: "7", sub_number: "7.16.2",
    text: withText(TEKS_N, "Motiveer jou antwoord op 7.16.1 (gehoorsaam wees aan die wet)."),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Inference",
    model_answer: "Fiela het geweet die wet is magtiger as haar wil / sy het geen kans teen die wet nie / opstandigheid sou dit moeiliker maak.",
    marking_notes: "Memo (enige EEN): geweet wat die wet sê; al die jare bang so iets sou gebeur; wet sou haar nie bevoordeel nie; opstand sou dinge moeiliker maak; bang vir tronk; wet magtiger as haar wil; bruinmense kon nie wit kinders hê nie; magistraat het gedreig om haar te laat volg.",
    steps: [{ marks: 1, description: "Hoekom moet Fiela die wet gehoorsaam?", options: ["Die wet het gesê Benjamin kan by haar bly as sy bly is.", "Fiela het geweet die wet is magtiger as haar wil en sy het geen kans daarteen nie.", "Sy het die magistraat se besluit as regverdig beskou.", "Die Van Rooyens het die wet aan haar kant gehad."], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.17",
    text: withText(TEKS_N, "Waarom kan ons sê dat Fiela in hierdie situasie 'n goeie rolmodel is?"),
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Sy wys respek teenoor die magistraat en bly kalm.",
    marking_notes: "Memo (enige EEN): respek teenoor die magistraat; bly kalm; wys nie hoe kwaad sy is nie; nederig; sê sy soek nie moeilikheid nie; sê sy sal nie lieg nie; wetsgehoorsaam; bereid om haarself te verneder/te veg vir haar kind; berus by besluit; gelowig.",
    steps: [{ marks: 1, description: "Hoekom is Fiela 'n goeie rolmodel?", options: ["Sy raak woedend en skel die magistraat uit.", "Sy lieg om Benjamin te behou.", "Sy bly kalm en wys respek teenoor die magistraat.", "Sy dreig om die konstabel aan te val."], correctIndex: 2 }],
  },
  {
    number: "7", sub_number: "7.18",
    text: "Fiela sou alles vir haar hanskind doen. Waarom kan ons sê dat Selling ook 'n positiewe rol in Benjamin se lewe gespeel het?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Selling het Benjamin van water en skuitjies geleer / aandag aan hom gegee / saam met hom gespeel / hom liefgehad.",
    marking_notes: "Memo (enige EEN): aandag gegee; van water/skuitjies geleer; saam gespeel; gesê hoe om die magistraat aan te spreek; Fiela gesê Benjamin moet vry wees; Benjamin se hart geken; liefgehad en nie mishandel nie.",
    steps: [{ marks: 1, description: "Hoe het Selling 'n positiewe rol in Benjamin se lewe gespeel?", options: ["Hy het Benjamin geleer om hout te kap in die Bos.", "Hy het Benjamin skoolgegaan en sy somme nagesien.", "Hy het Benjamin gedwing om te bly werk op die plaas.", "Hy het aandag aan Benjamin gegee en hom van water en skuitjies geleer."], correctIndex: 3 }],
  },
  {
    number: "7", sub_number: "7.19.1",
    text: "Een van die hoofmomente in hierdie drama was toe Lukas ná Dawid se dood besluit het om na die Komoeties toe te gaan.\n\nWatter positiewe gevolg het dit vir Lukas se lewe gehad?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Lukas het weer liefde en omgee ervaar / kon sien die Komoeties het hom nie vergeet nie.",
    marking_notes: "Memo (enige EEN): weer tyd met Fiela-hulle; kans om oor Nina te dink; gevoelens met Fiela bespreek; Fiela se raad om na Barta terug te gaan; weer liefde en omgee; Komoeties het hom nie vergeet nie; Laghaanse se grond/toekoms.",
    steps: [{ marks: 1, description: "Watter positiewe gevolg het Lukas se besluit gehad?", options: ["Hy het die Komoeties se plaas geërf en nooit weer gewerk nie.", "Hy is deur die magistraat as Elias se seun erken.", "Hy het weer liefde en omgee ervaar en gesien die Komoeties het hom nie vergeet nie.", "Hy het besluit om nooit weer terug te gaan na die Bos nie."], correctIndex: 2 }],
  },
  {
    number: "7", sub_number: "7.19.2",
    text: "Watter les het jy by Lukas geleer in die situasie waar hy ná Dawid se dood besluit het om na die Komoeties toe te gaan?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Ek het by hom geleer om nie die mense wat my grootgemaak/liefgehad het, te vergeet nie / om te onthou waar ek vandaan kom / om aan te hou soek na die waarheid.",
    marking_notes: "Memo (enige EEN): aanhou soek na waarheid/identiteit; onthou waar ek vandaan kom; nie die mense wat my grootgemaak het, vergeet nie; by ouer mense raad vra; geduldig wees; bly glo in wie ek is; nooit opgee nie; my eie hart vertrou.",
    steps: [{ marks: 1, description: "Watter les kan jy by Lukas leer?", options: ["Om nooit terug te kyk na waar jy vandaan kom nie.", "Om te onthou waar ek vandaan kom en nie die mense wat my grootgemaak het, te vergeet nie.", "Om altyd dadelik te doen wat ander mense se besluit is.", "Om probleme te vermy deur van almal weg te bly."], correctIndex: 1 }],
  },
  {
    number: "7", sub_number: "7.19.3",
    text: "Hoe sluit hierdie hoofmoment (Lukas se besluit om na die Komoeties toe te gaan) by die slot van die drama aan as jy aan Fiela dink?",
    marks: 1, topicKey: "drama-fiela", cognitiveLevelName: "Evaluation",
    model_answer: "Fiela was bly dat Benjamin gekies het om haar kind te wees nadat hy die waarheid by Barta gehoor het / sy het nooit opgehou om sy ma te wees nie.",
    marking_notes: "Memo (enige EEN): Fiela bly Benjamin het gekies om haar kind te wees; het nooit opgehou om sy ma te wees; ma en seun; kon Nina as deel van sy lewe aanvaar; beskermer; verwelkom hom met ope arms.",
    steps: [{ marks: 1, description: "Hoe sluit dit by die slot aan?", options: ["Fiela was kwaad dat Benjamin by Barta teruggegaan het.", "Fiela het Benjamin gedwing om Lukas te bly.", "Fiela was bly dat Benjamin gekies het om haar kind te wees nadat hy die waarheid gehoor het.", "Fiela het besluit om na Uniondale te trek."], correctIndex: 2 }],
  },

  // ======================================================================
  // AFDELING C: KORTVERHALE - VRAAG 8: SPIEELBEELDE (35 marks)
  // 8.1 "OPDRAG" - Rike Olivier (18 marks)
  // ======================================================================
  {
    number: "8", sub_number: "8.1.1",
    text: "Voltooi die volgende paragraaf feitelik korrek deur die ontbrekende woord(e) uit die kortverhaal 'Opdrag' te kies.\n\nSarah is die hoofkarakter in hierdie kortverhaal. Sy is (a) ... jaar oud. Juffrou (b) ... is die onderwyser wat vir haar Afrikaans gee. Haar opdrag is dat die leerders 'n boek moet bestudeer en dan 'n (c) ... daaroor skryf. Sarah het die jeugroman, 'n Pot vol (d) ..., gekies.",
    marks: 4, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "(a) sewentien; (b) Jordaantjie/Jordaan; (c) verslag/leesverslag; (d) winter.",
    marking_notes: "Memo: 17/sewentien; Jordaantjie/Jordaan; verslag/leesverslag; winter.",
    steps: [
      { marks: 1, description: "(a) Sarah is ... jaar oud.", options: ["sestien", "agtien", "sewentien", "vyftien"], correctIndex: 2 },
      { marks: 1, description: "(b) Juffrou ... is die Afrikaansonderwyser.", options: ["Olivier", "Jordaantjie", "Kurt", "Marais"], correctIndex: 1 },
      { marks: 1, description: "(c) Die leerders moet 'n ... oor die boek skryf.", options: ["opstel", "gedig", "verslag", "toespraak"], correctIndex: 2 },
      { marks: 1, description: "(d) Die jeugroman is 'n Pot vol ...", options: ["somer", "liefde", "lente", "winter"], correctIndex: 3 },
    ],
  },
  {
    number: "8", sub_number: "8.1.2(a)",
    text: withText(TEKS_O, "''Dus: as E se ouers nou nie ongelukkig was nie, sou E nie 'seks' gesoek het nie?'' (Reël 1 en 2)\n\nWie is die ''E'' van wie Sarah in reël 1 praat?"),
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "Elizabeth, die hoofkarakter in die jeugroman 'n Pot vol winter.",
    marking_notes: "Memo (enige EEN): Elizabeth (van die jeugroman); die hoofkarakter/meisie in die boek wat sy lees; die meisie oor wie se lewe sy 'n verslag moet skryf.",
    steps: [{ marks: 1, description: "Wie is 'E'?", options: ["Sarah se beste vriendin Elsabé", "Elizabeth, die hoofkarakter in die jeugroman wat Sarah lees", "Sarah se ma, Elna", "Gerrie se suster"], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.1.2(b)",
    text: "Waarom word die verwysings na E verder deur die verhaal kursief geskryf?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Dit is Sarah se gedagtes/notas oor die boek wat sy lees.",
    marking_notes: "Memo (enige EEN): Sarah se gedagtes oor die boek; die notas wat sy maak; Sarah se idees oor Elizabeth.",
    steps: [{ marks: 1, description: "Hoekom is die verwysings na E kursief?", options: ["Dit is aanhalings uit die jeugroman self.", "Dit is Sarah se gedagtes en notas oor die boek.", "Dit is Juffrou Jordaantjie se kommentaar op die opdrag.", "Dit dui op woorde in 'n ander taal."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.1.3(a)",
    text: withText(TEKS_O, "''Soms is haar ma-hulle darem baie tóé.'' (Reël 4 en 5)\n\nWat is die figuurlike betekenis van ''baie tóé''?"),
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Haar ouers praat nie openlik oor sensitiewe tienersake nie / weet nie wat in tieners se lewens aangaan nie.",
    marking_notes: "Memo (enige EEN): weet nie wat in tieners se lewe aangaan nie; moeilik om aan te pas/te praat oor tienersake; praat nie openlik oor sensitiewe sake nie; oningelig; verstaan nie dat tye verander het nie; dink alles is soos toe hulle tieners was.",
    steps: [{ marks: 1, description: "Wat beteken 'baie tóé' figuurlik?", options: ["Haar ouers het baie deure en vensters gesluit.", "Haar ouers is baie streng en straf haar gedurig.", "Haar ouers praat nie openlik oor sensitiewe tienersake nie en verstaan nie tienerlewens nie.", "Haar ouers is selde by die huis."], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: "8.1.3(b)",
    text: withText(TEKS_O, "Wat is die gevolg van 8.1.3(a) vir Sarah wat so baie vrae het?"),
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Sy kan nie openlik met haar ouers oor haar vrae/probleem praat of raad vra oor tienerseks of Gerrie nie.",
    marking_notes: "Memo: sy kan nie openlik met haar ouers praat/advies vra nie; haar ouers kan haar nie help nie.",
    steps: [{ marks: 1, description: "Wat is die gevolg vir Sarah?", options: ["Sy kan nie openlik met haar ouers oor haar vrae of Gerrie praat nie.", "Sy hou op om vrae te vra.", "Sy praat net met haar ouers oor godsdiens en politiek.", "Sy dring daarop aan dat haar ouers die jeugroman lees."], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: withText(TEKS_O, "Kies die KORREKTE antwoord: ''Maar daar ís 'n blinde kol: ...'' in reël 10 is 'n ..."),
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "metafoor",
    marking_notes: "Memo: metafoor.",
    steps: [{ marks: 1, description: "'n blinde kol' is 'n ...", options: ["eufemisme", "metafoor", "vergelyking", "personifikasie"], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.1.5",
    text: "Hoe verskil E se verhouding met Kurt van Sarah se verhouding met Gerrie?",
    marks: 2, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "E se verhouding met Kurt is gebaseer op fisiese aantrekkingskrag en 'n behoefte aan warmte wat sy tuis nie kry nie; Sarah se verhouding met Gerrie is op liefde en vriendskap gebou en vir langer as net nou.",
    marking_notes: "Memo: 1 punt vir E+Kurt (enige EEN), 1 punt vir Sarah+Gerrie (enige EEN).",
    steps: [
      { marks: 1, description: "E se verhouding met Kurt is ...", options: ["op diep vriendskap en liefde gebou.", "gebaseer op fisiese aantrekkingskrag en 'n behoefte aan warmte wat sy tuis nie kry nie.", "deur haar ouers goedgekeur en aangemoedig.", "bedoel vir die toekoms en 'n huwelik."], correctIndex: 1 },
      { marks: 1, description: "Sarah se verhouding met Gerrie is ...", options: ["bloot fisiese aantrekkingskrag.", "'n manier om van haar huislike probleme te ontsnap.", "op liefde en vriendskap gebou en vir langer as net nou.", "iets wat sy vir haar ouers wil wys."], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.1.6",
    text: withText(TEKS_O, "Kies die KORREKTE antwoord: Sarah se siening van haar ouers in reëls 11 tot 14 is simbolies van ..."),
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "C - die gaping tussen generasies.",
    marking_notes: "Memo: C.",
    steps: [{ marks: 1, description: "Simbolies van ...", options: ["dinge wat onderwysers op skool vir kinders leer.", "inligting wat op sosiale media versprei word.", "die gaping tussen generasies.", "hegte gesinsverhoudinge."], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: "8.1.7",
    text: "Waarom is Sarah se ouers se verhouding 'n goeie voorbeeld van 'n gesonde liefdesverhouding?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Hulle gesels heeltyd met mekaar / praat dinge uit wanneer hulle verskil / maak weer vrede.",
    marking_notes: "Memo (enige EEN): gesels heeltyd; praat dinge uit; maak vrede; wys openlik liefde; laat nie ruimte vir ander verhoudings nie.",
    steps: [{ marks: 1, description: "Hoekom is hulle verhouding 'n goeie voorbeeld?", options: ["Hulle stem altyd saam en praat nooit oor probleme nie.", "Hulle gesels heeltyd met mekaar en praat dinge uit wanneer hulle verskil.", "Hulle bly weg van mekaar sodat daar nie stryd is nie.", "Hulle laat hul kinders alles besluit."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.1.8(a)",
    text: "Sarah se eie innerlike konflik het haar gehelp om 'n spesifieke aanbeveling oor die boek te maak.\n\nKies die KORREKTE antwoord: Sarah het 'n baie ... aanbeveling oor die boek gemaak.",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "objektiewe",
    marking_notes: "Memo: objektiewe.",
    steps: [{ marks: 1, description: "Sarah se aanbeveling was ...", options: ["objektiewe", "subjektiewe", "emosionele", "oorhaastige"], correctIndex: 0 }],
  },
  {
    number: "8", sub_number: "8.1.8(b)",
    text: "Motiveer jou antwoord op 8.1.8(a) (objektiewe aanbeveling).",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Haar aanbeveling gaan nie net oor haarself nie: sy hoop die boek kan ander tieners ook help / sy stel voor dat die biblioteek die boek aankoop / dink krities.",
    marking_notes: "Memo (enige EEN): stel voor die biblioteek koop die boek; boek in klasbesprekings gebruik; nie net oor haarself nie; dink krities en oorweeg alle moontlikhede. Antwoord op 8.1.8(a) moet reg wees (nie deur app afgedwing nie).",
    steps: [{ marks: 1, description: "Hoekom was dit objektief?", options: ["Sy het die boek aanbeveel omdat dit haar eie probleem oplos.", "Haar aanbeveling gaan nie net oor haarself nie: sy hoop die boek kan ook ander tieners help.", "Sy het die boek sleg beoordeel omdat sy Elizabeth nie hou nie.", "Sy het net gedoen wat Juffrou Jordaantjie van haar verwag het."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.1.9(a)",
    text: "Sarah se aanbeveling oor die boek is 'n hoogtepunt in hierdie kortverhaal.\n\nWatter positiewe gevolg het dit vir Sarah gehad?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Sarah het besef dat sy nie oorhaastig moet besluit nie en wil haar verhouding met Gerrie beskerm.",
    marking_notes: "Memo (enige EEN): nie oorhaastig besluit/wag vir die tyd; nog met ander tieners gesels; met ouers behoort te gesels; verhouding met Gerrie beskerm; eendag die inligting gebruik/eie storie skryf.",
    steps: [{ marks: 1, description: "Watter positiewe gevolg?", options: ["Sy het besluit om dadelik met Gerrie seks te hê.", "Sy het besef sy moet nie oorhaastig besluit nie en wil haar verhouding met Gerrie beskerm.", "Sy het met Gerrie opgebreek.", "Sy het Juffrou Jordaantjie se opdrag laat vaar."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.1.9(b)",
    text: "Watter les kan jy uit hierdie situasie by Sarah leer?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Ek kan leer dat kommunikasie baie belangrik is / ek nie alleen met sekere sake hoef te worstel nie.",
    marking_notes: "Memo (enige EEN): nie alleen hoef te worstel nie; kommunikasie belangrik; doen wat reg is vir my; oorhaastige besluite nadelig; as ek vrae vra, kry ek antwoorde.",
    steps: [{ marks: 1, description: "Watter les kan jy by Sarah leer?", options: ["Probleme los jy die beste op deur dit vir niemand te vertel nie.", "Jy moet doen wat jou vriende doen.", "Kommunikasie is belangrik en ek hoef nie alleen met sekere sake te worstel nie.", "Boeke bevat altyd alle antwoorde."], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: "8.1.9(c)",
    text: "Hoe sluit hierdie hoogtepunt (Sarah se aanbeveling) by die slot van die kortverhaal aan as jy aan Sarah as karakter dink?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Aan die einde het Sarah 'n nugter, verantwoordelike besluit geneem / as mens gegroei.",
    marking_notes: "Memo (enige EEN): nugter/verantwoordelike besluit; verhouding met Gerrie beskerm; as mens gegroei; opdrag suksesvol voltooi; gehoop Jordaantjie sou tevrede wees.",
    steps: [{ marks: 1, description: "Hoe sluit dit by die slot aan?", options: ["Sarah het aan die einde 'n impulsiewe besluit geneem sonder om te dink.", "Aan die einde het Sarah 'n nugter, verantwoordelike besluit geneem en as mens gegroei.", "Sarah het die opdrag nie klaargemaak nie.", "Sarah het gekies om haar ouers nooit weer te vertrou nie."], correctIndex: 1 }],
  },

  // 8.2 "KRINGLOOP" - Ruto Vambo (17 marks)
  {
    number: "8", sub_number: "8.2.1",
    text: "Skryf die volgende gebeure in die korrekte VOLGORDE soos wat dit in die kortverhaal 'Kringloop' gebeur:\n\nA Gideon de la Mer is geteer en geveer.\nB Mars se mense het lewe op Aarde vernietig.\nC Gideon de la Mer het voorgestel dat hulle toetse op Mars moes doen.\nD Lande het besluit dat hulle nooit weer kerntoetse op die Aarde sou uitvoer nie.",
    marks: 4, topicKey: "short-stories", cognitiveLevelName: "Reorganisation",
    model_answer: "1. D; 2. C; 3. B; 4. A.",
    marking_notes: "Memo: D, C, B, A (een punt vir elke gebeure op die korrekte plek).",
    steps: [
      { marks: 1, description: "Watter gebeurtenis was EERSTE?", options: ["Gideon de la Mer het voorgestel dat hulle toetse op Mars moes doen.", "Lande het besluit dat hulle nooit weer kerntoetse op die Aarde sou uitvoer nie.", "Mars se mense het lewe op Aarde vernietig.", "Gideon de la Mer is geteer en geveer."], correctIndex: 1 },
      { marks: 1, description: "Watter gebeurtenis was TWEEDE?", options: ["Mars se mense het lewe op Aarde vernietig.", "Gideon de la Mer is geteer en geveer.", "Gideon de la Mer het voorgestel dat hulle toetse op Mars moes doen.", "Lande het besluit dat hulle nooit weer kerntoetse op die Aarde sou uitvoer nie."], correctIndex: 2 },
      { marks: 1, description: "Watter gebeurtenis was DERDE?", options: ["Gideon de la Mer is geteer en geveer.", "Mars se mense het lewe op Aarde vernietig.", "Lande het besluit dat hulle nooit weer kerntoetse op die Aarde sou uitvoer nie.", "Gideon de la Mer het voorgestel dat hulle toetse op Mars moes doen."], correctIndex: 1 },
      { marks: 1, description: "Watter gebeurtenis was LAASTE?", options: ["Mars se mense het lewe op Aarde vernietig.", "Gideon de la Mer het voorgestel dat hulle toetse op Mars moes doen.", "Gideon de la Mer is geteer en geveer.", "Lande het besluit dat hulle nooit weer kerntoetse op die Aarde sou uitvoer nie."], correctIndex: 2 },
    ],
  },
  {
    number: "8", sub_number: "8.2.2",
    text: "Waarom het Aarde se mense na Gideon se raad geluister?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Hy was 'n uitmuntende kernfisikus / slim / het kennis van kerntoetse gehad.",
    marking_notes: "Memo (enige EEN): uitmuntende kernfisikus/slim; kennis van kerntoetse; visie; plan sou nie verdrag verbreek nie; regte tyd/plek; alles bereken en kripties beantwoord; bewonder vir briljante idees.",
    steps: [{ marks: 1, description: "Hoekom het hulle na Gideon geluister?", options: ["Hy was die president van die Verenigde Nasies.", "Hy het hulle gedreig met geweld.", "Hy was 'n uitmuntende kernfisikus met kennis van kerntoetse.", "Hy het reeds na Mars gereis."], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: "8.2.3",
    text: withText(TEKS_P, "''''n Hele nuwe samelewing het sy beslag gekry.'' (Reël 13)\n\n'n Mens kan die mense van Mars ..., want hulle het probeer om hulle omstandighede weer te verbeter."),
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "D - respekteer",
    marking_notes: "Memo: D/respekteer.",
    steps: [{ marks: 1, description: "'n Mens kan die mense van Mars ...", options: ["uitlag", "blameer", "kritiseer", "respekteer"], correctIndex: 3 }],
  },
  {
    number: "8", sub_number: "8.2.4",
    text: "Watter negatiewe effek was daar vir die mense van Mars nadat die Bom op Mars gegooi is? Noem EEN ding.",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "Kokende stoom / lawa / bestralingsiekte / baie mense het gesterf.",
    marking_notes: "Memo (enige EEN): kokende stoom; lawa; bestralingsiekte; baie mense (gaan) sterf.",
    steps: [{ marks: 1, description: "Watter negatiewe effek het die Bom op Mars gehad?", options: ["'n Ysperiode het ingetree.", "Bestralingsiekte het onder die mense versprei.", "Alle water het onmiddellik opgedroog.", "Die son het skielik verdwyn."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.2.5",
    text: "Die mense van Mars het nie geweet wie hulle planeet aangeval het nie.\n\nGee 'n feit uit die kortverhaal om te sê waarom hierdie stelling ONWAAR is.",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "Die ekspedisie wat na die oppervlak gestuur is, het bewyse gebring dat Aarde hulle aangeval het.",
    marking_notes: "Memo (enige EEN): ekspedisie het bewyse gebring dat Aarde hulle aangeval het; bewyse van Aarde af.",
    steps: [{ marks: 1, description: "Watter feit bewys dat hulle wel geweet het?", options: ["Die wetenskaplikes het die Aarde se vlag op Mars gesien.", "Die ekspedisie na die oppervlak het bewyse gebring dat Aarde hulle aangeval het.", "Gideon het dit self aan hulle bekend gemaak.", "Die Bom het 'n boodskap van Aarde bevat."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.2.6(a)",
    text: "Die gevolge van Aarde se aanval op Mars was eintlik ironies vir die Aarde se voortbestaan.\n\nKies die KORREKTE antwoord: Die aanval op Mars het ...",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "die mense van Mars laat besef wat hulle moet doen om Aarde te vernietig",
    marking_notes: "Memo: die mense van Mars laat besef wat hulle moet doen om Aarde te vernietig.",
    steps: [{ marks: 1, description: "Die aanval op Mars het ...", options: ["alles op die rooi planeet totaal vernietig.", "die mense van Mars laat besef wat hulle moet doen om Aarde te vernietig.", "Mars en Aarde tot vrede gedwing.", "die mense van Mars na Aarde laat verhuis."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.2.6(b)",
    text: "Motiveer jou antwoord op 8.2.6(a).",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Inference",
    model_answer: "Die mense van Mars het Aarde se eie tegnologie teen hulle gebruik / 'n middel gevind wat metaal in as laat verkrummel.",
    marking_notes: "Memo (enige EEN): besef daar is lewe op Aarde; Aarde se eie tegnologie teen hulle gebruik; middel wat metaal in as laat verkrummel; kapsule gereed om te lanseer. Antwoord op 8.2.6(a) moet reg wees (nie deur app afgedwing nie).",
    steps: [{ marks: 1, description: "Motivering", options: ["Mars se mense het besluit om vrede met Aarde te maak.", "Die Bom het Mars se mense dwaas gemaak.", "Mars se mense het Aarde se eie tegnologie teen hulle gebruik en 'n middel gevind wat metaal laat verkrummel.", "Gideon het Mars se mense gewaarsku."], correctIndex: 2 }],
  },
  {
    number: "8", sub_number: "8.2.7",
    text: "Die skrywer gebruik sekere tegnieke om die gevolge van geweld en vernietiging aan die leser oor te dra.\n\nKies die funksie wat by die tegniek pas:\n\nA lei tot afwagting en verwagting dat dinge gaan ontwikkel\nB beklemtoon die karakters se idees\nC dramatiese effek om fokus te versterk\nD gee vroeg reeds die idee van iets wat herhaal gaan word\nE gee duidelike prentjies vir die leser",
    marks: 4, topicKey: "short-stories", cognitiveLevelName: "Reorganisation",
    model_answer: "(a) Titel - D; (b) Kort sinne - C; (c) Beskrywende woorde - E; (d) Woorde soos 'En', 'Maar', 'Toe' aan die begin van paragrawe - A.",
    marking_notes: "Memo: a D, b C, c E, d A.",
    steps: [
      { marks: 1, description: "(a) Titel", options: ["A lei tot afwagting en verwagting dat dinge gaan ontwikkel", "B beklemtoon die karakters se idees", "D gee vroeg reeds die idee van iets wat herhaal gaan word", "E gee duidelike prentjies vir die leser"], correctIndex: 2 },
      { marks: 1, description: "(b) Kort sinne", options: ["B beklemtoon die karakters se idees", "C dramatiese effek om fokus te versterk", "D gee vroeg reeds die idee van iets wat herhaal gaan word", "E gee duidelike prentjies vir die leser"], correctIndex: 1 },
      { marks: 1, description: "(c) Beskrywende woorde", options: ["A lei tot afwagting en verwagting dat dinge gaan ontwikkel", "B beklemtoon die karakters se idees", "C dramatiese effek om fokus te versterk", "E gee duidelike prentjies vir die leser"], correctIndex: 3 },
      { marks: 1, description: "(d) Gebruik van woorde soos 'En', 'Maar' en 'Toe' aan die begin van paragrawe", options: ["A lei tot afwagting en verwagting dat dinge gaan ontwikkel", "B beklemtoon die karakters se idees", "D gee vroeg reeds die idee van iets wat herhaal gaan word", "E gee duidelike prentjies vir die leser"], correctIndex: 0 },
    ],
  },
  {
    number: "8", sub_number: "8.2.8",
    text: "Waarom kan ons sê dat Gideon in hierdie kortverhaal onverantwoordelik opgetree het?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Hy het stilgebly oor die verskynsel in die naghemel / belangrike dinge as 'n beuselagtigheid afgemaak / verkeerde advies gegee (kernwapens op Mars toets).",
    marking_notes: "Memo (enige EEN): stilgebly oor die verskynsel in die naghemel; belangrike dinge as nietigheid afgemaak; nie ander kundiges geraadpleeg nie; nie aandag gegee en uitgevind nie; kon aanval voorkom het; verkeerde advies gegee.",
    steps: [{ marks: 1, description: "Hoekom was Gideon onverantwoordelik?", options: ["Hy het die verskynsel in die naghemel openbaar gemaak.", "Hy het stilgebly oor die verskynsel in die naghemel en verkeerde advies gegee.", "Hy het te veel navorsing oor Mars gedoen.", "Hy het geweier om kernfisika te onderrig."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.2.9(a)",
    text: "Die Donker Eeue was 'n spesifieke tydperk in die geskiedenis.\n\nWat het in die Donker Eeue gebeur?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Literal",
    model_answer: "Gevestigde samelewings het tot niet gegaan / in haglike omstandighede verval.",
    marking_notes: "Memo: (tydens die Donker Eeue) het gevestigde samelewings tot niet gegaan/in haglike omstandighede verval.",
    steps: [{ marks: 1, description: "Wat het in die Donker Eeue gebeur?", options: ["Wetenskap en tegnologie het vinnig gevorder.", "Gevestigde samelewings het tot niet gegaan en in haglike omstandighede verval.", "Die son het vir jare lank nie opgekom nie.", "Nuwe lande het ontstaan en groei beleef."], correctIndex: 1 }],
  },
  {
    number: "8", sub_number: "8.2.9(b)",
    text: "Waarom is Donker Eeue gepas in hierdie kortverhaal?",
    marks: 1, topicKey: "short-stories", cognitiveLevelName: "Evaluation",
    model_answer: "Eers Mars en daarna Aarde het byna heeltemal tot niet gegaan / in haglike omstandighede verval; die Aarde verval in donkerte.",
    marking_notes: "Memo (enige EEN): eers Mars en daarna Aarde het byna heeltemal tot niet gegaan; die aarde verval in donkerte.",
    steps: [{ marks: 1, description: "Hoekom is die term gepas?", options: ["Omdat Mars en Aarde albei na aanvalle byna heeltemal tot niet gegaan het.", "Omdat die verhaal in die Middeleeue afspeel.", "Omdat die mense van Mars geen tegnologie gehad het nie.", "Omdat die Aarde nooit weer lig gehad het nie en niemand oorleef het nie."], correctIndex: 0 }],
  },

  // ======================================================================
  // AFDELING D: GEDIGTE - VRAAG 9 (35 marks)
  // 9.1 "DIE DANS VAN DIE REEN" - Eugene N Marais (18 marks)
  // ======================================================================
  {
    number: "9", sub_number: "9.1.1",
    text: withText(GEDIG_1, "Na watter spesifieke ruimte verwys ''Groot Woestyn'' in hierdie gedig?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Die Kalahari(woestyn) / die woestyn waar die Khoi/San bly.",
    marking_notes: "Memo: (Na die) Kalahari(woestyn)/die woestyn waar die Khoi/San/Khoi-San mense/Jan Konterdans bly.",
    steps: [{ marks: 1, description: "Die 'Groot Woestyn' is ...", options: ["die Namib", "die Kalahari", "die Sahara", "die Karoo"], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.1.2",
    text: withText(GEDIG_1, "Voltooi die volgende paragraaf feitelik korrek deur die ontbrekende woord(e) uit die gedig te kies.\n\nHierdie gedig is 'n (a) ..., en almal is baie bly oor die reën wat kom. Die grootwild kom op die (b) ... bymekaar om vir die reën te wag. Die kleiner diertjies is so bly oor die reën dat hulle (c) ... Uiteindelik raak die (d) ... weg en die wind stop. Die reën het gekom!"),
    marks: 4, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "(a) lied; (b) bulttop; (c) (saggies) sing / nader kruip en saggies sing; (d) son.",
    marking_notes: "Memo: lied (van die vioolspeler); bulttop; (saggies) sing/nader kruip en saggies sing; son.",
    steps: [
      { marks: 1, description: "(a) Hierdie gedig is 'n ...", options: ["sonnet", "lied", "ballade", "gebed"], correctIndex: 1 },
      { marks: 1, description: "(b) Die grootwild kom op die ... bymekaar.", options: ["vlakte", "sand", "bergtop", "bulttop"], correctIndex: 3 },
      { marks: 1, description: "(c) Die kleiner diertjies ...", options: ["dans in die sand", "skree en hardloop weg", "kruip nader en sing saggies", "gaan slaap onder die grond"], correctIndex: 2 },
      { marks: 1, description: "(d) Uiteindelik raak die ... weg.", options: ["maan", "son", "berg", "wolk"], correctIndex: 1 },
    ],
  },
  {
    number: "9", sub_number: "9.1.3",
    text: withText(GEDIG_1, "Met watter vrolike gebeurtenis word die koms van die reën in strofe 1 vergelyk?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Met 'n troue/bruilof.",
    marking_notes: "Memo: (Met 'n) troue/bruilof.",
    steps: [{ marks: 1, description: "Die koms van die reën word vergelyk met 'n ...", options: ["begrafnis", "troue/bruilof", "verjaardagpartytjie", "oesfees"], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.1.4",
    text: withText(GEDIG_1, "Haal EEN reël uit die gedig aan wat vir ons sê dat die grootwild die reën ruik."),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "''wyd rek hulle die neusgate''",
    marking_notes: "Memo: 'wyd rek hulle die neusgate'.",
    steps: [{ marks: 1, description: "Watter reël wys die grootwild ruik die reën?", options: ["''Die grootwild jaag uit die vlakte,''", "''wyd rek hulle die neusgate''", "''en hulle buk, om haar fyn spore op die sand te sien.''", "''hulle dam op die bulttop,''"], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.1.5",
    text: withText(GEDIG_1, "Lees reël 17.\n\nWatter TWEE tegnieke gebruik die digter om die kleinvolk se blydskap oor die koms van die Suster te beklemtoon?"),
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Enige twee van: inkeping/wit spasie; herhaling van 'Ons Suster!' / 'Jy het gekom!'; uitroeptekens; direkte rede; kort sinne; halfrym/alliterasie/assonansie.",
    marking_notes: "Memo: enige TWEE. Die twee stappe hier toets herhaling en uitroeptekens (albei memo-geldig); die verkeerde opsies is tegnieke wat NIE in reël 17 gebruik word nie.",
    steps: [
      { marks: 1, description: "Eerste tegniek in reël 17", options: ["Herhaling van 'Ons Suster!' en 'Jy het gekom!'", "Vergelyking", "Ironie", "Oordrywing"], correctIndex: 0 },
      { marks: 1, description: "Tweede tegniek in reël 17", options: ["Personifikasie", "Onomatopee", "Die gebruik van uitroeptekens", "Antiklimaks"], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.1.6",
    text: withText(GEDIG_1, "Daar is baie voorbeelde van personifikasie in hierdie gedig.\n\nGee TWEE aparte woorde uit strofe 3 wat op die Suster se liggaamsdele fokus."),
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "voorkop; arms.",
    marking_notes: "Memo: voorkop; arms (twee aparte woorde).",
    steps: [
      { marks: 1, description: "Eerste liggaamsdeel in strofe 3", options: ["hand", "voorkop", "neusgate", "oge"], correctIndex: 1 },
      { marks: 1, description: "Tweede liggaamsdeel in strofe 3", options: ["voete", "oge", "arms", "hand"], correctIndex: 2 },
    ],
  },
  {
    number: "9", sub_number: "9.1.7",
    text: withText(GEDIG_1, "Gee EEN rede waarom hierdie gedig 'n vrye vers is."),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Die versreëls is nie ewe lank nie / daar is nie 'n vaste rympatroon nie.",
    marking_notes: "Memo (enige EEN): reëls nie ewe lank; strofes nie ewe lank; geen vaste rympatroon; leestekens nie volgens gewone reëls; ongewone tipografie.",
    steps: [{ marks: 1, description: "Hoekom is dit 'n vrye vers?", options: ["Elke strofe het presies vier reëls.", "Dit het 'n vaste rympatroon.", "Die versreëls is nie ewe lank nie en daar is geen vaste rympatroon nie.", "Dit is in Standaardafrikaans sonder beeldspraak."], correctIndex: 2 }],
  },
  {
    number: "9", sub_number: "9.1.8",
    text: withText(GEDIG_1, "Die toon in hierdie gedig sê vir ons dat die diere ... is oor die reën."),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "C - dankbaar",
    marking_notes: "Memo: C/dankbaar.",
    steps: [{ marks: 1, description: "Die diere is ... oor die reën.", options: ["kwaad", "hartseer", "dankbaar", "bekommerd"], correctIndex: 2 }],
  },
  {
    number: "9", sub_number: "9.1.9",
    text: withText(GEDIG_1, "Beskryf die koms van die reën deur die volgende gebeure in die korrekte VOLGORDE te rangskik:\n\nA Daar is weerlig en blitse.\nB Die reën val hard en oor 'n wye gebied.\nC Almal sien die reën van ver af oor die berg.\nD Die diere sien die eerste reëndruppels op die grond."),
    marks: 4, topicKey: "poetry", cognitiveLevelName: "Reorganisation",
    model_answer: "1. C; 2. A; 3. D; 4. B.",
    marking_notes: "Memo: almal sien die reën van ver af oor die berg; weerlig en blitse; eerste reëndruppels op die grond; reën val hard en oor 'n wye gebied (een punt vir elke gebeure op die korrekte plek).",
    steps: [
      { marks: 1, description: "Watter gebeurtenis was EERSTE?", options: ["Daar is weerlig en blitse.", "Die reën val hard en oor 'n wye gebied.", "Almal sien die reën van ver af oor die berg.", "Die diere sien die eerste reëndruppels op die grond."], correctIndex: 2 },
      { marks: 1, description: "Watter gebeurtenis was TWEEDE?", options: ["Die diere sien die eerste reëndruppels op die grond.", "Daar is weerlig en blitse.", "Die reën val hard en oor 'n wye gebied.", "Almal sien die reën van ver af oor die berg."], correctIndex: 1 },
      { marks: 1, description: "Watter gebeurtenis was DERDE?", options: ["Die reën val hard en oor 'n wye gebied.", "Almal sien die reën van ver af oor die berg.", "Daar is weerlig en blitse.", "Die diere sien die eerste reëndruppels op die grond."], correctIndex: 3 },
      { marks: 1, description: "Watter gebeurtenis was LAASTE?", options: ["Daar is weerlig en blitse.", "Die diere sien die eerste reëndruppels op die grond.", "Almal sien die reën van ver af oor die berg.", "Die reën val hard en oor 'n wye gebied."], correctIndex: 3 },
    ],
  },
  {
    number: "9", sub_number: "9.1.10",
    text: withText(GEDIG_1, "Watter les het jy oor die belangrikheid van reën geleer?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Ek het geleer dat almal reën nodig het om te oorleef / reën hoop en nuwe lewe bring / ons dankbaar moet wees wanneer dit reën.",
    marking_notes: "Memo (enige EEN): almal reën nodig het; reën maak mens en dier bly; groot waardering in die woestyn; reën bring soveel emosie dat dit soos 'n familielid voel; hoop/nuwe lewe/vrugbaarheid; dankbaar wees.",
    steps: [{ marks: 1, description: "Watter les het jy geleer?", options: ["Reën is net 'n oorlas wat plant en dier hinder.", "Reën is slegs belangrik vir mense in die stad.", "Almal het reën nodig om te oorleef en ons moet dankbaar wees daarvoor.", "Diere kan sonder reën oorleef solank daar kos is."], correctIndex: 2 }],
  },

  // 9.2 "EKSAMENLOKAAL" - Suzaan Laing (17 marks)
  {
    number: "9", sub_number: "9.2.1",
    text: withText(GEDIG_2, "Watter kontras kry ons in strofe 1? Verduidelik dit in jou eie woorde sodat die kontras duidelik is."),
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Die harde klank van die onderwyseres se skoene teenoor die stilte in die lokaal / tjoepstil leerders.",
    marking_notes: "Memo: 1 punt vir die klik/harde klank van die skoene; 1 punt vir die stilte van die leerders in die lokaal.",
    steps: [
      { marks: 1, description: "Die een kant van die kontras", options: ["Die kandidate skryf baie vinnig.", "Die klik van die onderwyseres se skoene is hard.", "Die onderwyseres se skoene is nuut.", "Die houtvloer is koud."], correctIndex: 1 },
      { marks: 1, description: "Die ander kant van die kontras", options: ["Die kandidate gesels saggies.", "Die leerders sit tjoepstil in die lokaal.", "Die onderwyseres swyg heeltemal.", "Die klok lui hard."], correctIndex: 1 },
    ],
  },
  {
    number: "9", sub_number: "9.2.2",
    text: withText(GEDIG_2, "Haal EEN woord uit die gedig aan wat verwys na die eksamen waarmee die kandidate besig is."),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "''September(eksamen)(lug)''",
    marking_notes: "Memo: 'September(eksamen)(lug)'.",
    steps: [{ marks: 1, description: "Watter woord verwys na die eksamen?", options: ["houtvloer", "banke", "Septembereksamenlug", "horlosie"], correctIndex: 2 }],
  },
  {
    number: "9", sub_number: "9.2.3",
    text: withText(GEDIG_2, "Die vraestel in die gedig is drie uur lank.\n\nSê waarom hierdie stelling ONWAAR is."),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "''Die horlosie tel twee ure af.'' - die gedig verwys na twee ure.",
    marking_notes: "Memo (enige EEN): 'Die horlosie tel twee ure af.'; die gedig verwys na twee ure.",
    steps: [{ marks: 1, description: "Hoekom is die stelling onwaar?", options: ["''Die horlosie tel twee ure af.''", "''Sy stap stadig en oes die stelle.''", "''Nou en dan kraak die blaai van 'n blad''", "''Ryp met gistermiddag se kennis.''"], correctIndex: 0 }],
  },
  {
    number: "9", sub_number: "9.2.4(a)",
    text: withText(GEDIG_2, "Lees strofe 3.\n\nKies die KORREKTE antwoord: Uit hierdie strofe kan ons aflei dat die kandidaat ... oor die vraestel is."),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "gespanne",
    marking_notes: "Memo: gespanne.",
    steps: [{ marks: 1, description: "Die kandidaat is ...", options: ["ontspanne", "gespanne", "vrolik", "onverskillig"], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.2.4(b)",
    text: withText(GEDIG_2, "Verduidelik jou antwoord op 9.2.4(a) (gespanne) in jou eie woorde."),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Hulle hande bewe / is nie stabiel nie.",
    marking_notes: "Memo (enige EEN): hande bewe; skryf deurmekaar/slordig en laat 'n warboel agter; krap antwoorde uit; rukkerige bewegings dui op senuweeagtigheid. Aanhalings word nie aanvaar nie. Antwoord op 9.2.4(a) moet reg wees (nie deur app afgedwing nie).",
    steps: [{ marks: 1, description: "Hoe weet ons die kandidaat is gespanne?", options: ["Sy skryf stadig en netjies.", "Haar hande bewe en sy laat 'n inkwarboel agter.", "Sy kyk gedurig deur die venster.", "Sy gee haar vraestel vroeg in."], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.2.5(a)",
    text: withText(GEDIG_2, "Lees strofe 3 en strofe 5.\n\nWat is die geïmpliseerde betekenis van die ''skoon wit velle'' in strofe 3?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Die skoon antwoordblaaie waarop hulle skryf / dit is die begin van die skryfproses.",
    marking_notes: "Memo (enige EEN): skoon antwoordblaaie/eksamenskrifte; begin van skryfproses; antwoordstelle net uitgedeel; hulle het nog nie begin skryf nie; baie vrae oopgelaat.",
    steps: [{ marks: 1, description: "Wat beteken 'skoon wit velle'?", options: ["Die kandidate se klere is skoon.", "Die skoon antwoordblaaie waarop hulle nog moet begin skryf.", "Die onderwyseres se wit kleed.", "Die voltooide antwoordstelle."], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.2.5(b)",
    text: withText(GEDIG_2, "Hoe verskil dit (die 'skoon wit velle' van strofe 3) in strofe 5?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Die antwoordskrif is nou vol geskryf / vol ink, nie meer skoon nie (''blou op wit'').",
    marking_notes: "Memo (enige EEN): vol geskryf; vol ink/inkkolle; vol penmerke; nie meer skoon nie/'blou op wit'.",
    steps: [{ marks: 1, description: "Hoe verskil dit in strofe 5?", options: ["Die papier is nog steeds skoon en leeg.", "Die papier is nou vol ink en nie meer skoon nie.", "Die papier is deur die onderwyseres weggegooi.", "Die papier is nou swart."], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.2.6(a)",
    text: withText(GEDIG_2, "''oes die stelle een vir een'' (Reël 9)\n\nWat is die TWEE betekenisse van ''oes'' binne die konteks van die gedig?"),
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Letterlik: die onderwyseres neem die voltooide eksamenskrifte in. Figuurlik: sy versamel die kennis/antwoorde wat die kandidate weergegee het.",
    marking_notes: "Memo: 1 punt vir die letterlike betekenis (skrifte inneem), 1 punt vir die figuurlike (die kennis/antwoorde wat kandidate weergegee het).",
    steps: [
      { marks: 1, description: "Letterlike betekenis van 'oes'", options: ["Die onderwyseres snoei die plante buite die lokaal.", "Die onderwyseres neem die voltooide eksamenskrifte in.", "Die onderwyseres deel die vraestelle uit.", "Die onderwyseres merk die skrifte dadelik."], correctIndex: 1 },
      { marks: 1, description: "Figuurlike betekenis van 'oes'", options: ["Sy versamel die kennis/antwoorde wat die kandidate weergegee het.", "Sy straf die kandidate vir swak werk.", "Sy maak die lokaal klaar vir die volgende klas.", "Sy gee die kandidate nuwe vrae."], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.2.6(b)",
    text: withText(GEDIG_2, "Watter ander woord in strofe 5 hou direk verband met ''oes''?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "''ryp''",
    marking_notes: "Memo: 'ryp'.",
    steps: [{ marks: 1, description: "Watter woord hou verband met 'oes'?", options: ["stelle", "ryp", "blou", "gistermiddag"], correctIndex: 1 }],
  },
  {
    number: "9", sub_number: "9.2.7",
    text: "Kies die begrip wat by die aanhaling pas:\n\nA alliterasie\nB 'n vergelyking\nC 'n metafoor\nD onomatopee",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Reorganisation",
    model_answer: "(a) D onomatopee; (b) C metafoor; (c) A alliterasie.",
    marking_notes: "Memo: (a) D/Onomatopee; (b) C/'n Metafoor; (c) A/Alliterasie.",
    steps: [
      { marks: 1, description: "(a) ''Dan kraak die blaai van die blad''", options: ["A alliterasie", "B 'n vergelyking", "C 'n metafoor", "D onomatopee"], correctIndex: 3 },
      { marks: 1, description: "(b) ''los 'n inkwarboel agter''", options: ["A alliterasie", "B 'n vergelyking", "C 'n metafoor", "D onomatopee"], correctIndex: 2 },
      { marks: 1, description: "(c) ''Sy stap stadig''", options: ["A alliterasie", "B 'n vergelyking", "C 'n metafoor", "D onomatopee"], correctIndex: 0 },
    ],
  },
  {
    number: "9", sub_number: "9.2.8",
    text: "Die gedig begin en eindig met strofes wat uit drie versreëls bestaan. Wat noem ons 'n strofe wat uit DRIE versreëls bestaan?",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "'n tersine",
    marking_notes: "Memo: ('n) tersine.",
    steps: [{ marks: 1, description: "'n Strofe van drie versreëls is 'n ...", options: ["kwatryn", "koeplet", "tersine", "kwintyn"], correctIndex: 2 }],
  },
  {
    number: "9", sub_number: "9.2.9",
    text: withText(GEDIG_2, "Waarom is ''Eksamenlokaal'' 'n gepaste titel vir hierdie gedig?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Dit sê reg van die begin af waaroor die gedig handel / dit skep 'n ruimte waar die handelinge plaasvind.",
    marking_notes: "Memo (enige EEN): skep ruimte vir handelinge; skep toon; sê reg van die begin waaroor die gedig handel; skep afwagting/atmosfeer van eksamen.",
    steps: [{ marks: 1, description: "Hoekom is die titel gepas?", options: ["Dit sê reg van die begin af waaroor die gedig handel en waar dit afspeel.", "Dit verwys na 'n skool in die dorp.", "Dit vertel ons wie die vraestelle opstel.", "Dit toon dat die kandidate gelukkig is."], correctIndex: 0 }],
  },
  {
    number: "9", sub_number: "9.2.10",
    text: withText(GEDIG_2, "Waarom kan jy met die inhoud van die gedig identifiseer?"),
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Almal moes al een of ander tyd 'n eksamen aflê / ek is self besig om eksamen te skryf.",
    marking_notes: "Memo (enige EEN of soortgelyk): ek skryf self eksamen; alle skoolkinders gaan daardeur; almal moes al eksamen aflê; ek kan die atmosfeer/spanning herroep; my omstandighede is dieselfde; ek het ook onnet geskryf, ens.",
    steps: [{ marks: 1, description: "Hoekom kan jy identifiseer?", options: ["Almal moes al eksamen aflê en ek ken die atmosfeer en spanning in 'n eksamenlokaal.", "Ek werk self as 'n onderwyser.", "Ek hou nie van eksamens nie en probeer dit vermy.", "Ek het nog nooit eksamen geskryf nie."], correctIndex: 0 }],
  },
];
