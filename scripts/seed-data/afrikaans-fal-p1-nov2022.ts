// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language) Paper 1 (Taal / Language), November 2022, National Senior
// Certificate. 80 marks, 2 hours (cover page: PUNTE 80, TYD 2 uur).
// Source: official DBE combined question paper + official DBE marking
// guideline (Nasienriglyne) as mirrored at the source_url below. Question
// paper = pages 1-15, memo = pages 16-28 of the combined 28-page PDF. Both
// read in full before writing any step below. Only the DBE paper and memo
// were used.
//
// Paper structure: AFDELING A Leesbegrip (30): Q1 TEKS A article on TikTok
// (1.1-1.14, 24 marks) + TEKS B picture table of New Year's resolutions
// (1.15-1.20, 6 marks). AFDELING B Opsomming (10): Q2 TEKS C "Wees geldslim!"
// (7 content marks + 3 language marks). AFDELING C Taalstrukture en
// -konvensies (40): Q3 TEKS D advertisement (10), Q4 TEKS E cartoon (10),
// Q5.1 TEKS F article with in-text language items (14) and Q5.2 TEKS G
// picture (6).
//
// Grading mode: ALL questions are converted to the stepped-MCQ pattern
// (`steps`): one step per mark-earning point, 4 options, the correct option
// taken from the memo wording, distractors being realistic Grade 12 errors
// (never another memo-accepted answer). "Give TWO" items are two single-mark
// steps, each with its own correct option. No `marking_points` are used
// anywhere in this file.
//
// Conversion notes (open/constructed-response items turned into choices):
//  - Q1.2, 1.3, 1.10, 3.6, 3.8 etc. (one-word / quote / short answers) ask
//    the student to choose the correct word/quote/answer.
//  - Q1.9 (matching, memo 1.9.1-1.9.4) is kept as four 1-mark sub-questions,
//    one per Column A date, with the Column B descriptions as options.
//  - Language-manipulation items (3.4, 3.5, 4.3, 4.6, 5.1.x, 5.2.x) ask the
//    student to choose the correctly transformed word/sentence.
//  - Q5.1.14 (punctuation) asks for the correctly punctuated sentence.
//  - Q2 SUMMARY (10 marks) is ONE question with 10 steps. Steps 1-7: for each
//    of the 7 memo summary points (in memo order) choose the correct own-words
//    summary sentence (1 mark each). Steps 8-10 replace the memo's 3 language
//    marks (awarded for own-words writing and presentation): step 8 = which
//    version is in own words and not a direct quotation, step 9 = correct
//    presentation (numbered points, full sentences), step 10 = what the memo
//    says about the 70-word limit. FLAG: the memo awards the 3 language marks
//    on a sliding scale based on facts found (1-3 facts = 1, 4-5 = 2,
//    6-7 = 3) and penalises direct quotation; this has no direct MCQ
//    equivalent, so steps 8-10 are a conversion of the language criteria,
//    not a transcription of memo marks. The memo's model summary is 60/61
//    words.
//  - Memo "(Enige EEN/TWEE ... of soortgelyk)" lists were treated as
//    alternatives: the correct option is a memo-listed answer (or a close
//    paraphrase) and no distractor is a memo-listed alternative.
//  - Q4.5.2 (2 marks) is split into two 1-mark steps (the straatverkoper's
//    words; what he does). The memo gates 4.5.2 on a correct 4.5.1; this
//    gate is not enforced by the stepped grader. FLAG.
//  - Q1.7.2 and 1.11.2 are likewise gated on the preceding answer in the memo
//    (not enforced). FLAG.
//  - Q1.13 memo gives a list of acceptable life lessons; the two chosen
//    lessons are two single-mark steps with memo-based correct options.
//  - Q4.7 memo accepts BOTH "Ja" and "Nee" with valid reasons; the single
//    step offers a "Ja" reason from the memo as correct and distractors that
//    are not memo-accepted. FLAG: a student who takes the "Nee" position
//    cannot be credited by this conversion.
//  - Q3.10 and 1.20 are personal-opinion items; the memo's accepted opinions
//    were used for the correct option.
//  - Q3.4 memo shows "bloedjonk/piepjonk"; "bloedjonk" used as the correct
//    option. Q4.3 correct option is "Die man vra of dit waar kan wees."
//  - Cognitive levels: this memo does NOT label questions with Barrett
//    taxonomy levels, so the Literal / Reorganisation / Inference /
//    Evaluation level of each question is the ingester's own judgement. FLAG.
//  - Topic mapping: Q1.1-1.14 comprehension; Q1.15-1.20 (TEKS B picture
//    table) visual-literacy; Q2 summary; Q3 and Q4: items about the
//    advertisement/cartoon itself (audience, pictures, visual signs, intent,
//    persuasion) visual-literacy, grammar/word-study items
//    language-structures; Q5 language-structures.
//
// Images (rendered from the QP pages and cropped; the passages are provided
// as images so the student can read them, following the English HL P1
// reference for visual texts):
//   teks-a.png (TEKS A article, pp. 3-4), teks-b.png (TEKS B picture table,
//   p. 7), teks-c.png (TEKS C summary text, p. 9), teks-d.png (TEKS D
//   advertisement, p. 10), teks-e.png (TEKS E cartoon, p. 12), teks-g.png
//   (TEKS G picture, p. 15). TEKS F (Q5.1) is prose with embedded numbering
//   and is reproduced verbatim inside each item's text instead of imaged.
//
// FLAG: line-number references (e.g. paragraph numbers) are those printed in
// the question paper and visible in teks-a.png.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/afrikaans-fal-2022-p1";

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
  paper_number: "P1",
  duration_minutes: 120,
  total_marks: 80,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2023/10/NSC-FAL-Afrikkans-Grade-12-November-2022-P1-and-Memo.pdf" as string | null,
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

type Level = "Literal" | "Reorganisation" | "Inference" | "Evaluation";

function step(description: string, options: string[], correctIndex: number, marks = 1): MarkingPointStep {
  return { marks, description, options, correctIndex };
}

function q(
  number: string,
  sub: string | null,
  text: string,
  topicKey: string,
  level: Level,
  model_answer: string,
  marking_notes: string,
  steps: MarkingPointStep[],
  image_url?: string,
): QuestionSeed {
  const marks = steps.reduce((s, x) => s + x.marks, 0);
  const out: QuestionSeed = {
    number, sub_number: sub, text, marks, topicKey, cognitiveLevelName: level,
    model_answer, marking_notes, steps,
  };
  if (image_url) out.image_url = image_url;
  return out;
}

const A = `${IMG}/teks-a.png`;
const B = `${IMG}/teks-b.png`;
const C = `${IMG}/teks-c.png`;
const D = `${IMG}/teks-d.png`;
const E = `${IMG}/teks-e.png`;
const G = `${IMG}/teks-g.png`;

export const questions: QuestionSeed[] = [
  // ============ AFDELING A: LEESBEGRIP — VRAAG 1 (30 marks) ============
  // TEKS A: "TikTok, TikTok ..." (image) — 1.1-1.14
  q("1", "1.1", "TEKS A. Waarvoor kan jy TikTok-video's gebruik? (Paragraaf 1) Kies TWEE korrekte gebruike (twee stappe).", "comprehension", "Literal",
    "Om kort video's te maak; om musiek/ander klankeffekte saam met die video's te gebruik.",
    "Memo: enige TWEE van: kort video's maak; musiek gebruik; ander klankeffekte gebruik.",
    [
      step("Eerste gebruik van TikTok-video's", ["Om lang rolprente te kyk", "Om kort video's te maak", "Om handboeke te lees", "Om foto's vir koerante te druk"], 1),
      step("Tweede gebruik van TikTok-video's", ["Om video's van minstens 'n uur lank te skep", "Om dokumente aanlyn te bêre", "Om ander klankeffekte saam met die video's te gebruik", "Om e-posse na vriende te stuur"], 2),
    ], A),
  q("1", "1.2", "Hoekom is ByteDance in paragraaf 2 as een woord geskryf?", "comprehension", "Literal",
    "Dit is die naam van die maatskappy / 'n eienaam.", "Memo: enige EEN: naam van die maatskappy; een begrip; samestelling; eienaam.",
    [step("Hoekom is ByteDance as een woord geskryf?", ["Dit is 'n baie lang woord", "Dit is 'n Engelse leenwoord", "Dit is die naam van die maatskappy", "Dit is die titel van 'n liedjie"], 2)], A),
  q("1", "1.3", "Kies EEN woord uit paragraaf 2 wat vir ons sê dat TikTok oor die hele wêreld gebruik word.", "comprehension", "Literal",
    "''globaal''", "Memo: ''globaal'' (aanvaar ''global'' as oorskryffout).",
    [step("Watter woord dui op wêreldwye gebruik?", ["aktiewe", "globaal", "beskikbaar", "afgelaai"], 1)], A),
  q("1", "1.4", "Kies die KORREKTE antwoord: Net soos Facebook, is TikTok ook een van die ''sosialemediareuse'' omdat dit …", "comprehension", "Reorganisation",
    "miljoene gebruikers het", "Memo: miljoene gebruikers (het).",
    [step("TikTok is 'n sosialemediareus omdat dit …", ["op kommunikasie tussen mense fokus", "kort video's van 15 sekondes bevat", "in China begin is", "miljoene gebruikers het"], 3)], A),
  q("1", "1.5", "Volgens Walloroo Media het TikTok aan die begin van 2021 meer as 1 miljard gebruikers gehad. Waarom kan ons sê dat hierdie 'n FEIT en nie 'n mening is nie?", "comprehension", "Inference",
    "Dit is op navorsing gebaseer / bewys.", "Memo: enige EEN: gebaseer op navorsing; die woord ''navorsing''/''bewys''; statistiek beskikbaar. Geen punt vir net FEIT/MENING nie.",
    [step("Waarom is dit 'n feit?", ["Almal stem saam dat TikTok gewild is", "Dit is deur Walloroo Media se navorsing bewys", "Die skrywer hou van TikTok", "Dit is in 'n tydskrif gepubliseer"], 1)], A),
  q("1", "1.6", "Watter inhoud word in TikTok-video's gebruik om mense te vermaak? Kies TWEE (twee stappe).", "comprehension", "Literal",
    "Grappe / toertjies / dansroetines / musiek (enige twee).", "Memo: enige TWEE: grappe; toertjies; dansroetines; musiek.",
    [
      step("Eerste soort inhoud", ["nuusberigte", "grappe", "skoolnotas", "kookresepte"], 1),
      step("Tweede soort inhoud", ["advertensies", "politieke toesprake", "toertjies", "reisgidse"], 2),
    ], A),
  q("1", "1.7.1", "Lees paragraaf 4. Kies die KORREKTE antwoord: Indien jongmense TikTok te veel gebruik, kan dit (voordelige/nadelige) gevolge vir hulle hê.", "comprehension", "Inference",
    "nadelige", "Memo: nadelige.",
    [step("Voordelige of nadelige gevolge?", ["voordelige", "nadelige", "geen gevolge", "net uitsonderlike gevolge"], 1)], A),
  q("1", "1.7.2", "Motiveer jou antwoord op VRAAG 1.7.1.", "comprehension", "Inference",
    "Hulle kan verslaaf raak aan TikTok / sukkel om te konsentreer.", "Memo: enige EEN. Die antwoord op 1.7.1 moet korrek wees om die punt te verdien (nie deur die gradeerder afgedwing nie).",
    [step("Motivering vir nadelige gevolge", ["Hulle leer nie om te dans nie", "Hulle kan verslaaf raak aan TikTok", "Hulle verloor hulle selfone gou", "Hulle word te gewild by ouer mense"], 1)], A),
  q("1", "1.8.1", "Lees paragraaf 7. Waarom, dink jy, het party mense nie van Farren White se nuwe manier van doen gehou nie?", "comprehension", "Inference",
    "Dit was iets nuuts / dit het vir baie mense nie in die kerk gepas nie.", "Memo: enige EEN van die gelyste redes.",
    [step("Waarom het party mense nie daarvan gehou nie?", ["Die kerk was te klein vir die gemeente", "Dit was iets nuuts wat nie vir baie mense in die kerk gepas het nie", "Die dominee was te jonk om te preek", "Die kameras was te duur"], 1)], A),
  q("1", "1.8.2", "Waarom kan ons sê dat Farren se digitale boodskappe wel suksesvol was? Kies TWEE redes (twee stappe).", "comprehension", "Literal",
    "Hulle moes vier ekstra kameras installeer; haar gemeente het gegroei.", "Memo: enige TWEE: vier ekstra kameras; gemeente het gegroei; sy doen dit nog steeds/mense hou daarvan.",
    [
      step("Eerste rede vir sukses", ["Die kerk het sy deure oopgemaak", "Hulle moes vier ekstra kameras in die kerk installeer", "Die dominee het 'n beloning gekry", "TikTok is in die kerk verbied"], 1),
      step("Tweede rede vir sukses", ["Haar gemeente het gegroei", "Die kerkie is pienk geverf", "Sy het op Lambertsbaai gaan woon", "Almal het van die nuwe manier gehou"], 0),
    ], A),
  q("1", "1.9.1", "TikTok het vinnig gegroei. Kies die beskrywing in KOLOM B wat by 2016 (KOLOM A) pas. KOLOM B: A Meer as 200 miljoen mense het die toep afgelaai; B TikTok het mense in moeilike tye gehelp; C TikTok is aan die wêreld bekendgestel; D Party lande het die gebruik van TikTok verbied; E Binne twee jaar het TikTok 'n sterk mededinger op sosiale media geword.", "comprehension", "Reorganisation",
    "C", "Memo: C/TikTok is aan die wêreld bekendgestel.",
    [step("2016 pas by …", ["A Meer as 200 miljoen mense het die toep afgelaai", "B TikTok het mense in moeilike tye gehelp", "C TikTok is aan die wêreld bekendgestel", "D Party lande het die gebruik van TikTok verbied"], 2)], A),
  q("1", "1.9.2", "Kies die beskrywing in KOLOM B wat by 2018 (KOLOM A) pas.", "comprehension", "Reorganisation",
    "E", "Memo: E/Binne twee jaar het TikTok 'n sterk mededinger op sosiale media geword.",
    [step("2018 pas by …", ["A Meer as 200 miljoen mense het die toep afgelaai", "B TikTok het mense in moeilike tye gehelp", "C TikTok is aan die wêreld bekendgestel", "E Binne twee jaar het TikTok 'n sterk mededinger op sosiale media geword"], 3)], A),
  q("1", "1.9.3", "Kies die beskrywing in KOLOM B wat by 2020 (KOLOM A) pas.", "comprehension", "Reorganisation",
    "B", "Memo: B/TikTok het mense in moeilike tye gehelp.",
    [step("2020 pas by …", ["B TikTok het mense in moeilike tye gehelp", "C TikTok is aan die wêreld bekendgestel", "D Party lande het die gebruik van TikTok verbied", "E Binne twee jaar het TikTok 'n sterk mededinger op sosiale media geword"], 0)], A),
  q("1", "1.9.4", "Kies die beskrywing in KOLOM B wat by 2021 (KOLOM A) pas.", "comprehension", "Reorganisation",
    "A", "Memo: A/Meer as 200 miljoen mense het die toep afgelaai.",
    [step("2021 pas by …", ["B TikTok het mense in moeilike tye gehelp", "C TikTok is aan die wêreld bekendgestel", "D Party lande het die gebruik van TikTok verbied", "A Meer as 200 miljoen mense het die toep afgelaai"], 3)], A),
  q("1", "1.10", "Watter musiekgenre het die twee leerders van wie ons in paragraaf 8 lees, gebruik om ander matrieks te motiveer? (EEN woord)", "comprehension", "Literal",
    "rymklets/gerymklets", "Memo: ''rymklets/gerymklets''. Aanvaar nie ''rymklets-notas'' nie.",
    [step("Watter musiekgenre?", ["gospel", "rymklets", "kwaito", "opera"], 1)], A),
  q("1", "1.11.1", "''Húlle het dit vir ander vriende gestuur en so het dit soos 'n veldbrand versprei.'' (Paragraaf 8) Word hierdie sin LETTERLIK of FIGUURLIK gebruik?", "comprehension", "Inference",
    "figuurlik", "Memo: figuurlik.",
    [step("Letterlik of figuurlik?", ["letterlik", "figuurlik", "dit is 'n feit", "dit is 'n vraag"], 1)], A),
  q("1", "1.11.2", "Motiveer jou antwoord op VRAAG 1.11.1.", "comprehension", "Inference",
    "Die video's het vinnig versprei.", "Memo: enige EEN: vinnig versprei; baie mense bereik; gou gedeel/aangestuur. Gate op 1.11.1 nie afgedwing nie.",
    [step("Motivering vir figuurlik", ["Die video's het 'n huis laat afbrand", "Die video's het vinnig versprei", "Die video's was gevaarlik vir die omgewing", "Die video's is op 'n warm dag gemaak"], 1)], A),
  q("1", "1.12", "Waarom kan 'n mens verstaan dat dit sinvol is om bekendes in TikTok-advertensies te gebruik?", "comprehension", "Evaluation",
    "Mense laat hulle deur bekendes beïnvloed / wil doen wat bekendes doen.", "Memo: enige EEN van die gelyste redes (adverteerder- of kykerperspektief).",
    [step("Waarom bekendes gebruik?", ["Bekendes werk vir 'n laer prys as gewone mense", "Mense wil graag doen wat bekendes doen", "Bekendes ken TikTok beter as ander", "Advertensies is verbode sonder bekendes"], 1)], A),
  q("1", "1.13", "Lees weer paragraaf 6. Watter TWEE lewenslesse wat jóú in alle omstandighede kan help om moeilike situasies te hanteer, kry jy uit hierdie paragraaf? Begin: Ek het geleer dat … (twee stappe).", "comprehension", "Evaluation",
    "Ek het geleer dat ... jy nooit moed moet opgee nie / daar altyd hoop is / mense mekaar kan inspireer / jy uitdagings moet aanvaar.",
    "Memo: enige TWEE lewenslesse (eie, persoonlike lesse; nie aanhaling nie): bv. nooit moed opgee; gewone mense kan mekaar inspireer; uitdagings aangryp; gemeenskappe moet saamstaan; daar is altyd hoop; steeds pret kan hê.",
    [
      step("Eerste lewensles: Ek het geleer dat …", ["jy ander se werk moet kopieer", "jy nooit moed moet opgee nie", "jy net op jou eie moet staatmaak", "dit beter is om stil te bly in moeilike tye"], 1),
      step("Tweede lewensles: Ek het geleer dat …", ["gewone mense mekaar kan inspireer", "net bekendes ander kan help", "moeilike tye nie verander kan word nie", "dans net vir jongmense is"], 0),
    ], A),
  q("1", "1.14", "Lees die slotparagraaf. Waarom, dink jy, is dit 'n goue reël op sosiale media om eers te dink voor jy doen?", "comprehension", "Evaluation",
    "Jy kan iets plaas wat nie reggemaak kan word nie / ander kan seergemaak word.", "Memo: enige EEN van die gelyste redes.",
    [step("Waarom eers dink?", ["Sosiale media kos geld om te gebruik", "Jy kan iets verkeerds plaas wat vir altyd aan jou naam gekoppel word", "Jy kry meer volgelinge as jy stadig plaas", "Foto's kan net een keer gedeel word"], 1)], A),

  // TEKS B: picture table (1.15-1.20)
  q("1", "1.15", "TEKS B. Kies die KORREKTE ANTWOORD: Uit PRENTJIE A lei ons af dat mense in 2023 graag …", "visual-literacy", "Inference",
    "C — hulle tyd beter wil gebruik", "Memo: C/hulle tyd beter wil gebruik.",
    [step("Uit PRENTJIE A lei ons af dat mense graag …", ["meer wil oefen", "met ander wil kompeteer", "hulle tyd beter wil gebruik", "vinniger by die werk wil kom"], 2)], B),
  q("1", "1.16", "Kies die KORREKTE antwoord: PRENTJIE B impliseer dat mense in 2023 (meer aktief wil wees/ander mense wil help).", "visual-literacy", "Inference",
    "ander mense wil help", "Memo: ander mense wil help.",
    [step("PRENTJIE B impliseer dat mense …", ["meer aktief wil wees", "ander mense wil help", "meer geld wil spaar", "meer tyd saam wil spandeer"], 1)], B),
  q("1", "1.17", "Wat sê die mense se nuwejaarsvoornemens in PRENTJIE C vir jou?", "visual-literacy", "Inference",
    "Die mense wil vir diere omgee / diere versorg.", "Memo: die mense wil vir diere omgee/aandag aan diere gee/diere versorg (aanvaar spesifieke diere).",
    [step("PRENTJIE C sê …", ["Die mense wil meer gesondheidskos eet", "Die mense wil vir diere omgee", "Die mense wil meer liefde vir hulle gesin wys", "Die mense wil na 'n troue gaan"], 1)], B),
  q("1", "1.18", "Noem EEN ding wat mense nie meer in 2023 wil doen nie.", "visual-literacy", "Literal",
    "Rook / op sosiale media (Twitter) wees.", "Memo: enige EEN: nie meer rook nie; nie meer op sosiale media/Twitter wees nie.",
    [step("Wat wil mense nie meer doen nie?", ["Nie meer rook nie", "Nie meer oefen nie", "Nie meer geld spaar nie", "Nie meer studeer nie"], 0)], B),
  q("1", "1.19", "Die meeste mense slaag daarin om by hulle nuwejaarsvoornemens te hou. Motiveer waarom hierdie stelling ONWAAR is.", "visual-literacy", "Evaluation",
    "Net 8% van mense hou by hulle voornemens / 92% hou nie.", "Memo: enige EEN: net 8% hou by voornemens; 92% hou nie. Geen punt vir net ONWAAR nie.",
    [step("Waarom is die stelling onwaar?", ["92% van mense hou by hulle voornemens", "Net 8% van mense hou by hulle voornemens", "Net 10 voornemens is gelys", "Die meeste mense maak geen voornemens nie"], 1)], B),
  q("1", "1.20", "Waarom sou jy respek kon hê vir mense (PRENTJIE J) wie se voorneme dit is om te oefen?", "visual-literacy", "Evaluation",
    "Hulle besef dat oefening/gesondheid belangrik is / het deursettingsvermoë.", "Memo: enige EEN van die gelyste redes.",
    [step("Rede vir respek", ["Hulle wil slegs gewig verloor om mooi te lyk", "Hulle besef dat oefening belangrik is", "Hulle wil kompeteer en wen", "Hulle het baie vrye tyd"], 1)], B),

  // ============ AFDELING B: OPSOMMING — VRAAG 2 (10 marks) ============
  q("2", null,
    "TEKS C 'Wees geldslim!'. Som die SEWE wenke om GELDSLIM te wees in jou eie woorde op (maks. 70 woorde, puntsgewys, genommer 1-7). Kies by elke stap die korrekte opsommingsin; stappe 8-10 toets die taalaspekte van die opsomming.",
    "summary", "Reorganisation",
    "1 Vind 'n manier om eerlik geld te verdien. 2 Stel 'n sinvolle begroting op. 3 Hou boek van al jou uitgawes. 4 Beplan jou inkopies volgens jou eie behoeftes/wat jy kan bekostig. 5 Neem kwaliteit in ag wanneer jy inkopies doen. 6 Soek na goedkoper opsies. 7 Begin so vroeg as moontlik spaar. 8 Vind uit waar jy die beste rente sal verdien. (Memo se model: 60/61 woorde.)",
    "Memo: 7 punte vir 7 feite (1 per feit) + 3 punte vir taal. Die memo-lys het agt genommerde wenke; slegs sewe feite word getel (dieselfde as die memo se puntetoekenning). Stappe 1-7 volg die memo se eie-woorde-kolom (wenke 1,2,3,4,5,6,7; die rente-wenk 8 is die 'ekstra' alternatief). Stappe 8-10: omskakeling van taalkriteria (FLAG; sien lêer-opskrif).",
    [
      step("Wenk 1: werk/geld verdien", ["Soek 'n werk wat baie betaal, ongeag eerlikheid", "Vind 'n manier om eerlik geld te verdien", "Werk hard sodat jy nie versigtig hoef te wees nie", "Moet nie na 'n werk soek voordat jy geld het nie"], 1),
      step("Wenk 2: begroting", ["Moenie 'n begroting opstel nie, want dit is tydmors", "Gee eers uit en bepaal later wat oor is", "Stel 'n sinvolle begroting op", "Leen geld om jou begroting groter te maak"], 2),
      step("Wenk 3: uitgawes aanteken", ["Hou boek van al jou uitgawes", "Hou net boek van groot uitgawes", "Onthou jou uitgawes sonder om dit neer te skryf", "Moenie op prysveranderinge let nie"], 0),
      step("Wenk 4: inkopies beplan", ["Koop wat jou vriende koop om ''in'' te wees", "Koop alles wat in die winkel te koop is", "Koop net wat jou eie vriende aanbeveel", "Beplan jou inkopies volgens jou eie behoeftes en wat jy kan bekostig"], 3),
      step("Wenk 5: kwaliteit", ["Koop altyd die goedkoopste, ongeag kwaliteit", "Kwaliteit is onbelangrik by inkopies", "Neem kwaliteit in ag wanneer jy inkopies doen", "Koop net handelsmerke wat bekendes gebruik"], 2),
      step("Wenk 6: goedkoper opsies", ["Koop altyd die duurste artikels", "Soek na goedkoper opsies van dit wat jy wil koop", "Koop nooit iets wat afslag het nie", "Wag tot pryse styg voordat jy koop"], 1),
      step("Wenk 7: spaar", ["Begin spaar wanneer jy 'n vaste werk het", "Spaar eers nadat jy alles gekoop het wat jy wil hê", "Begin so vroeg as moontlik spaar", "Spaar net as jy baie geld oorhet"], 2),
      step("Taal: watter weergawe is in eie woorde (nie 'n direkte aanhaling nie)?", ["Jy moet uitvind waar jy die beste rente op jou geld kan verdien", "Gevolglik moet jy uitvind waar jy die beste rente op jou spaargeld sal verdien", "Jy moet weet hoeveel geld jy hét voordat jy kan besluit hoeveel geld jy kan uitgee", "Dit sal jou help om te sien hoe jy jou geld uitgegee het"], 0),
      step("Taal: hoe moet die opsomming aangebied word?", ["As een lang paragraaf sonder nommers", "In volsinne, puntsgewys en genommer van 1 tot 7", "In enkele woorde in 'n tabel", "Met die oorspronklike paragraafnommers"], 1),
      step("Taal: wat gebeur as die opsomming meer as 70 woorde is?", ["Die nasiener lees die hele opsomming", "Die opsomming kry outomaties nul", "Vyf punte word afgetrek", "Die nasiener lees vyf woorde ná die 70-woordegrens en ignoreer die res"], 3),
    ], C),

  // ============ AFDELING C: TAALSTRUKTURE EN -KONVENSIES (40 marks) ============
  // VRAAG 3: TEKS D advertisement (image)
  q("3", "3.1", "TEKS D. Wie is die teikengroep van hierdie advertensie?", "visual-literacy", "Inference",
    "Die gemeenskap / enigiemand wat van 'n markdag hou.", "Memo: enige EEN: gemeenskap; enigiemand wat die markdag wil ondersteun; oud en jonk; ouers/kinders by Hoërskool Pretville; enigiemand wat van sulke pret hou.",
    [step("Teikengroep", ["net onderwysers van Hoërskool Pretville", "die gemeenskap", "net besighede wat produkte verkoop", "net koekbakkers"], 1)], D),
  q("3", "3.2", "Hoe ondersteun die prente die inhoud van die advertensie?", "visual-literacy", "Inference",
    "Die prente verteenwoordig die produkte/eetgoed wat verkoop gaan word.", "Memo: enige EEN: wys produkte wat verkoop gaan word; eetgoed; aktiwiteite; verteenwoordig die produkte.",
    [step("Funksie van prente", ["Die prente wys die adres van die skool", "Die prente wys wie die organiseerders is", "Die prente verteenwoordig die produkte wat verkoop word", "Die prente wys die tyd van die markdag"], 2)], D),
  q("3", "3.3", "Kies die KORREKTE ANTWOORD: ''Duisende aktiwiteite!'' is 'n voorbeeld van ('n hiperbool/ironie).", "language-structures", "Literal",
    "'n hiperbool", "Memo: 'n hiperbool.",
    [step("Hiperbool of ironie?", ["ironie", "'n hiperbool", "personifikasie", "'n eufemisme"], 1)], D),
  q("3", "3.4", "Gee die INTENSIEWE VORM van die woord tussen hakies: (Jonk) en stokoud is welkom.", "language-structures", "Literal",
    "bloedjonk / piepjonk", "Memo: bloedjonk/piepjonk (spelling).",
    [step("Intensiewe vorm van 'jonk'", ["jonkste", "bloedjonk", "jonkerig", "baie jonk-jonk"], 1)], D),
  q("3", "3.5", "Gee die SAMESTELLING van die woorde tussen hakies: (Kind + pret).", "language-structures", "Literal",
    "kinderpret", "Memo: kinderpret (spelling).",
    [step("Samestelling Kind + pret", ["kindpret", "kinder-pret", "kinderpret", "kindspret"], 2)], D),
  q("3", "3.6", "Die adverteerder gebruik herhaling om die leser te manipuleer. Haal 'n voorbeeld uit die advertensie aan om die stelling te bewys.", "visual-literacy", "Inference",
    "''en nog baie, baie meer''", "Memo: ''en nog baie, baie meer'' / ''baie, baie'' / ''baie''.",
    [step("Voorbeeld van herhaling", ["''Kom kuier, koop en eet saam''", "''Moenie dit misloop nie!''", "''Koop alles vir 'n appel en 'n ei''", "''en nog baie, baie meer''"], 3)], D),
  q("3", "3.7", "Kies die KORREKTE ANTWOORD: In hierdie advertensie beteken die idioom ''… vir 'n appel en 'n ei'' dat alles … is.", "language-structures", "Inference",
    "A — goedkoop", "Memo: A/goedkoop.",
    [step("Betekenis van die idioom", ["lekker", "vars", "gratis", "goedkoop"], 3)], D),
  q("3", "3.8", "Watter belangrike inligting wat in hierdie advertensie behoort te wees, is weggelaat?", "visual-literacy", "Evaluation",
    "Die datum waarop dit gaan plaasvind.", "Memo: enige EEN: die datum/die dag; fisiese adres van die skool; pryse van produkte.",
    [step("Watter inligting is weggelaat?", ["Die datum waarop die markdag plaasvind", "Die naam van die skool", "Die tyd van die markdag", "Die kontaknommer"], 0)], D),
  q("3", "3.9", "Hoekom, dink jy, het die adverteerder die 70 jaar binne 'n ster geplaas?", "visual-literacy", "Evaluation",
    "Om die 70 jaar van sukses te beklemtoon / die leser se aandag te trek.", "Memo: enige EEN van die gelyste redes.",
    [step("Hoekom binne 'n ster?", ["Die ster is die skool se embleem", "Om die tyd van die markdag aan te dui", "Om te wys dat die skool gesluit gaan word", "Om die 70 jaar van sukses te beklemtoon"], 3)], D),
  q("3", "3.10", "Hoekom sou dié advertensie jou oorreed om hierdie markdag by te woon? Motiveer jou antwoord.", "visual-literacy", "Evaluation",
    "Alles is goedkoop / ek hou van die lekkernye en aktiwiteite.", "Memo: enige EEN van die gelyste redes (persoonlike mening: ek/'n mens).",
    [step("Hoekom sou jy gaan?", ["Dit is gratis en daar is geen koste nie", "Die adverteerder belowe geskenke vir almal", "Die lekkernye en aktiwiteite trek my aandag", "Dit is net vir skoolkinders van Pretville"], 2)], D),

  // VRAAG 4: TEKS E cartoon (image)
  q("4", "4.1", "TEKS E. Die agtergrond vir hierdie strokiesprent is 'n tipiese straattoneel in die stad. Gee EEN visuele teken wat hierdie stelling ondersteun.", "visual-literacy", "Inference",
    "(Hoë) geboue / verkeerslig / artikels by die verkeerslig verkoop.", "Memo: enige EEN: hoë geboue; verkeerslig/robot; artikels verkoop; motor; sypaadjie; verkoper.",
    [step("Visuele teken van 'n stadstoneel", ["Plase en skape", "Die hoë geboue en verkeerslig", "'n Strand en see", "'n Berg en 'n rivier"], 1)], E),
  q("4", "4.2", "Verduidelik die funksie van die vraagtekens in RAAMPIE 1.", "visual-literacy", "Inference",
    "Dit dui die man se verbasing/ongeloof aan.", "Memo: enige EEN: verbasing; skok/ontsteld; ongeloof; wonder of dit waar is; retoriese vrae; frustrasie.",
    [step("Funksie van die vraagtekens", ["Dit wys dat die man die antwoord weet", "Dit wys dat die man gelukkig is", "Dit dui die man se verbasing en ongeloof aan", "Dit wys dat die man 'n wedstryd speel"], 2)], E),
  q("4", "4.3", "Skryf die sin in die INDIREKTE REDE. Gebruik ''of'' in jou antwoord: ''Kan dit waar wees?'' Begin só: Die man vra …", "language-structures", "Literal",
    "Die man vra of dit waar kan wees.", "Memo: Die man vra of dit waar kan wees / of dit kan waar wees.",
    [step("Indirekte rede", ["Die man vra dat dit waar kan wees.", "Die man vra of dit waar kan wees.", "Die man vra: of dit waar kan wees?", "Die man vra of kan dit waar wees."], 1)], E),
  q("4", "4.4.1", "''Dit is 'n ramp!'' (RAAMPIE 2) Wat, dink jy, bedoel die man met hierdie woorde?", "visual-literacy", "Inference",
    "Dit is tragies/erg/skokkend; dit kan probleme veroorsaak.", "Memo: enige EEN van die gelyste betekenisse.",
    [step("Wat bedoel die man?", ["Die waterbeperkings is wonderlik", "Dit gaan mense laat sukkel", "Daar is 'n brand in die stad", "Die koerant is te duur"], 1)], E),
  q("4", "4.4.2", "Waarom kan ons sê dat die man met hierdie woorde 'n aanname maak?", "visual-literacy", "Inference",
    "Hy aanvaar dat almal soos hy voel / dink waterbeperkings sal almal negatief raak.", "Memo: enige EEN van die gelyste redes.",
    [step("Waarom 'n aanname?", ["Hy het die koerant nie gelees nie", "Hy aanvaar dat almal so geskok soos hy is", "Hy ken die straatverkoper persoonlik", "Hy het self water verloor"], 1)], E),
  q("4", "4.5.1", "Kies die KORREKTE ANTWOORD: Die straatverkoper (verskil van/stem saam met) die man.", "visual-literacy", "Inference",
    "verskil van", "Memo: verskil (van).",
    [step("Verskil of stem saam?", ["stem saam met", "verskil van", "stem gedeeltelik saam met", "ignoreer"], 1)], E),
  q("4", "4.5.2", "Motiveer jou antwoord op VRAAG 4.5.1. Verwys na die straatverkoper se woorde én dit wat hy doen (twee stappe).", "visual-literacy", "Inference",
    "Hy sê die man moet namens homself praat; hy wys na die emmers en gieters wat hy verkoop.", "Memo: (1) sy woorde: die man moet namens homself praat/Nee; (2) wat hy doen: wys na die emmers en gieters waaruit hy 'n inkomste gaan verdien. 4.5.1 moet korrek wees (nie deur die gradeerder afgedwing nie).",
    [
      step("Sy woorde", ["Hy sê die man moet namens homself praat", "Hy sê dat hy ook geskok is", "Hy sê die waterbeperkings is verkeerd", "Hy vra die man om te help"], 0),
      step("Wat hy doen", ["Hy lees die koerant saam met die man", "Hy hardloop weg van die verkeer", "Hy wys na die emmers en gieters wat hy verkoop", "Hy bel die munisipaliteit"], 2),
    ], E),
  q("4", "4.6", "Skryf die sin oor as 'n BEVELSIN: Jy moet namens jouself praat.", "language-structures", "Literal",
    "Praat namens jouself!", "Memo: Praat namens jouself(!) / Jy móét namens jouself praat / Jy moet namens jouself praat!",
    [step("Bevelsin", ["Jy praat namens jouself.", "Praat namens jouself!", "Moet jy namens jouself praat?", "Hy moet namens homself praat."], 1)], E),
  q("4", "4.7", "Is dit reg dat die man in RAAMPIE 1 so ontsteld is oor wat hy in die koerant gelees het? Motiveer jou antwoord. Kies die redelike motivering vir ''Ja''.", "visual-literacy", "Evaluation",
    "Ja. Mense gaan sukkel sonder water / gedwing word om water te koop / ongerieflik.", "Memo: Ja óf Nee met enige EEN geldige rede; hier is slegs 'n ''Ja''-rede aangebied (FLAG: 'Nee'-posisie word nie hier gekrediteer nie).",
    [step("Rede waarom dit reg is dat hy ontsteld is", ["Waterbeperkings beteken die koerant is verkeerd", "Mense sal nie meer koerante kan koop nie", "Verkeersligte sal nie meer werk nie", "Mense gaan sukkel sonder genoeg water"], 3)], E),

  // VRAAG 5.1: TEKS F (verbatim in text), items 5.1.1-5.1.14
  q("5", "5.1.1", "TEKS F 'Ouma verwerf haar meestersgraad': ''Notozi Jennifer Mgobozi is 'n 75-jarige ouma van vyf (kleinkinders).'' Verdeel die woord tussen hakies korrek in LETTERGREPE.", "language-structures", "Literal",
    "klein+kin+ders", "Memo: klein+kin+ders / klein-kin-ders / klein/kin/ders (verdeling moet volledig wees).",
    [step("Lettergrepe van 'kleinkinders'", ["kleink-in-ders", "klein-kin-ders", "kle-in-kin-ders", "klein-kinders"], 1)]),
  q("5", "5.1.2", "''Sy het in (November) 2021 haar meestersgraad in onderwys aan die Walter Sisulu Universiteit behaal.'' Gee die AFKORTING vir die woord tussen hakies.", "language-structures", "Literal",
    "Nov.", "Memo: Nov. (leestekens moet korrek wees).",
    [step("Afkorting van November", ["Nov", "Nov.", "Novem.", "No."], 1)]),
  q("5", "5.1.3", "''Sy sê dit was (maklik), maar beslis die moeite werd.'' Gee die ANTONIEM vir die woord tussen hakies.", "language-structures", "Literal",
    "moeilik / uitdagend / swaar / hard", "Memo: moeilik(e)/uitdagend/ingewikkeld/swaar/hard.",
    [step("Antoniem van 'maklik'", ["eenvoudig", "gemaklik", "moeilik", "lig"], 2)]),
  q("5", "5.1.4", "''Haar familie én ander mense is baie trots ... haar.'' Vul die ontbrekende VOORSETSEL in.", "language-structures", "Literal",
    "op", "Memo: op.",
    [step("Voorsetsel", ["in", "oor", "vir", "op"], 3)]),
  q("5", "5.1.5", "''Jennifer is al (baie) as 40 jaar lank betrokke by onderwys.'' Gee die KORREKTE VORM van die woord tussen hakies.", "language-structures", "Literal",
    "meer", "Memo: meer.",
    [step("Korrekte vorm van 'baie'", ["baier", "meer", "meeste", "beter"], 1)]),
  q("5", "5.1.6", "''Sy werk by NECT, wat probeer (onderwys in SA verbeter).'' Skryf die hele sin oor in die INFINITIEF.", "language-structures", "Reorganisation",
    "Sy werk by NECT, wat probeer om onderwys in Suid-Afrika te verbeter.", "Memo: ... wat probeer om onderwys in Suid-Afrika te verbeter (of ... te verbeter in Suid-Afrika).",
    [step("Infinitief", ["Sy werk by NECT, wat probeer om onderwys in SA te verbeter.", "Sy werk by NECT, wat probeer onderwys in SA verbeter het.", "Sy werk by NECT, wat om onderwys in SA verbeter probeer.", "Sy werk by NECT, wat probeer te onderwys in SA verbeter."], 0)]),
  q("5", "5.1.7", "''Sy doen juis haar navorsing oor NECT se program vir Engels as EAT.'' Skryf die sin oor in die VERLEDE TYD.", "language-structures", "Reorganisation",
    "Sy het juis haar navorsing oor NECT se program vir Engels as EAT gedoen.", "Memo: Sy het juis haar navorsing oor NECT se program vir Engels as EAT gedoen (ander woordorde ook aanvaar).",
    [step("Verlede tyd", ["Sy het juis haar navorsing oor NECT se program vir Engels as EAT gedoen.", "Sy het juis haar navorsing oor NECT se program vir Engels as EAT doen.", "Sy doen juis haar navorsing oor NECT se program vir Engels as EAT gedoen.", "Sy sal juis haar navorsing oor NECT se program vir Engels as EAT doen."], 0)]),
  q("5", "5.1.8", "''Sy sal bly wees as haar navorsing 'n positiewe effek op onderwys het.'' Gebruik die HOMONIEM van ''bly'' in 'n sin sodat die betekenis duidelik blyk. Kies die sin wat die ANDER betekenis van ''bly'' (woon/aanhou/oorbly) korrek gebruik.", "language-structures", "Inference",
    "Ek bly in 'n woonstel.", "Memo: enige sin waar die ander betekenis van bly duidelik is (bv. Ek bly in 'n woonstel).",
    [step("Sin met die homoniem van 'bly'", ["Die kinders is bly oor die vakansie.", "Sy is bly om jou te sien.", "Ek bly in 'n woonstel.", "Hy was bly toe hy die toets slaag."], 2)]),
  q("5", "5.1.9", "''Jennifer sê studies en opleiding het (iets met ouderdom te doen).'' Skryf die gedeelte tussen hakies in die ONTKENNING.", "language-structures", "Reorganisation",
    "niks met ouderdom te doen nie", "Memo: niks met ouderdom te doen nie / nie iets met ouderdom te doen nie.",
    [step("Ontkenning", ["nie iets met ouderdom te doen", "iets met ouderdom te doen nie", "niks met ouderdom te doen nie", "nooit iets met ouderdom te doen nie"], 2)]),
  q("5", "5.1.10", "''Sy sê daar is nou baie (geleentheid) daarvoor.'' Gee die MEERVOUD van die woord tussen hakies.", "language-structures", "Literal",
    "geleenthede", "Memo: geleenthede.",
    [step("Meervoud", ["geleentheids", "geleenthede", "geleenthedes", "geleentheden"], 1)]),
  q("5", "5.1.11", "''As jy (dus/dis) kan, moet jy dit doen.'' Kies die KORREKTE WOORD.", "language-structures", "Literal",
    "dus", "Memo: dus.",
    [step("dus of dis?", ["dis", "dus", "albei is reg", "geen van die twee"], 1)]),
  q("5", "5.1.12", "Skryf die sin in die korrekte WOORDORDE: Sy wil (verwerf) (volgende jaar) (met lof) haar doktorsgraad.", "language-structures", "Reorganisation",
    "Sy wil volgende jaar haar doktorsgraad met lof verwerf.", "Memo: Sy wil volgende jaar haar doktorsgraad met lof verwerf / Sy wil haar doktorsgraad volgende jaar met lof verwerf / Volgende jaar wil sy haar doktorsgraad met lof verwerf.",
    [step("Korrekte woordorde", ["Sy wil verwerf volgende jaar met lof haar doktorsgraad.", "Sy wil volgende jaar haar doktorsgraad met lof verwerf.", "Sy verwerf wil volgende jaar haar doktorsgraad met lof.", "Sy wil met lof volgende jaar verwerf haar doktorsgraad."], 1)]),
  q("5", "5.1.13", "''Jennifer is 'n (inspireer) vir ander mense.'' Vorm 'n SELFSTANDIGE NAAMWOORD van die werkwoord tussen hakies.", "language-structures", "Literal",
    "inspirasie", "Memo: inspirasie (spelling).",
    [step("Selfstandige naamwoord van 'inspireer'", ["inspirering", "inspirasie", "inspirerende", "geïnspireer"], 1)]),
  q("5", "5.1.14", "Vul die ontbrekende LEESTEKEN in: ''Waar 'n wil is is 'n weg!''", "language-structures", "Literal",
    "Waar 'n wil is, is 'n weg!", "Memo: Waar 'n wil is, is 'n weg! (komma).",
    [step("Korrek gepunktueer", ["Waar 'n wil is; is 'n weg!", "Waar 'n wil is: is 'n weg!", "Waar 'n wil is, is 'n weg!", "Waar, 'n wil is is 'n weg!"], 2)]),

  // VRAAG 5.2: TEKS G picture (image)
  q("5", "5.2.1", "TEKS G. ''Susan dra 'n snaakse (hoed).'' Gee die VERKLEINWOORD van die woord tussen hakies.", "language-structures", "Literal",
    "hoedjie", "Memo: hoedjie (spelling).",
    [step("Verkleinwoord van 'hoed'", ["hoedtjie", "hoedjie", "hoedie", "hoetjie"], 1)], G),
  q("5", "5.2.2", "''Lukas eet 'n (sandwich).'' Gee die KORREKTE AFRIKAANS vir die woord tussen hakies.", "language-structures", "Literal",
    "toebroodjie / broodjie", "Memo: toebroodjie/broodjie.",
    [step("Afrikaans vir 'sandwich'", ["toebroodjie", "sandwiegie", "tweebrood", "broodplak"], 0)], G),
  q("5", "5.2.3", "VERBIND die twee sinne met die VOEGWOORD tussen hakies: Nina beduie met haar hand. Sy gesels met haar maats. (terwyl)", "language-structures", "Reorganisation",
    "Nina beduie met haar hand terwyl sy met haar maats gesels.", "Memo: Nina beduie met haar hand terwyl sy met haar maats gesels / Terwyl Nina met haar maats gesels, beduie sy met haar hand.",
    [step("Verbinding met 'terwyl'", ["Nina beduie met haar hand terwyl sy gesels met haar maats.", "Nina beduie met haar hand terwyl sy met haar maats gesels.", "Terwyl Nina met haar maats gesels sy beduie met haar hand.", "Nina beduie met haar hand terwyl sy met haar maats gesels het."], 1)], G),
  q("5", "5.2.4", "''Nina (behandel/hanteer) haar maats met respek.'' Kies die KORREKTE WOORD.", "language-structures", "Literal",
    "behandel", "Memo: behandel.",
    [step("behandel of hanteer?", ["hanteer", "behandel", "beide is reg", "geen van die twee"], 1)], G),
  q("5", "5.2.5", "''Lungile dra sy boeke in sy (sak wat hy op sy rug dra).'' Gee EEN woord vir die omskrywing.", "language-structures", "Literal",
    "rugsak", "Memo: rugsak (spelling).",
    [step("Een woord vir die omskrywing", ["handsak", "skoolsak", "rugsak", "boeksak"], 2)], G),
  q("5", "5.2.6", "''Lungile drink (gebottel) water.'' Vorm 'n VERLEDE DEELWOORD van die werkwoord tussen hakies.", "language-structures", "Literal",
    "gebottelde", "Memo: gebottelde (spelling).",
    [step("Verlede deelwoord van 'bottel'", ["gebottel", "gebottelde", "bottelende", "gebottelt"], 1)], G),
];
