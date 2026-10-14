// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language) Paper 1 (Language / V1), November 2025, National Senior
// Certificate. 80 marks, 2 hours (cover page: PUNTE 80 / TYD 2 uur).
// Source: combined question paper + official DBE marking guideline
// (Nasienriglyne) PDF mirrored at stanmorephysics.com (source_url below).
// Question paper = pages 1-17 of the combined PDF, memo = pages 18-30. The
// whole paper was read in Afrikaans and every mark below traces to the memo.
// The paper is in Afrikaans, so question text, options and model answers are
// kept in Afrikaans.
//
// Paper structure: SECTION A Leesbegrip (30, Q1: TEKS A article on MrBeast
// with photos, TEKS B bar-chart "Suid-Afrikaners in die werkplek"), SECTION B
// Opsomming (10, Q2: TEKS C on exam tips), SECTION C Taalstrukture en
// -konvensies (40: Q3 TEKS D advertisement 10, Q4 TEKS E comic strip 10, Q5
// TEKS F article 14 + TEKS G picture 6). No choice sections: all 80 marks
// are ingested (30 + 10 + 10 + 10 + 20).
//
// Grading mode (standing preference: ALL multiple choice): EVERY question
// uses `steps` (stepped MCQ), one step per mark-earning point, four options
// each; the correct option is the memo answer, the wrong options are
// realistic Grade 12 errors that are NOT memo-accepted answers. `marking_points`
// is not used anywhere. Where the paper itself is MCQ or has a "kies uit
// hakies" choice (1.3, 1.4, 1.18, 1.20, 4.3, 5.1.5, 5.2.2) the paper's own
// options are kept and padded to four. Where the paper asks for a free-text
// "gee EEN ..." the memo lists many accepted answers; ONE accepted answer is
// the correct option and the distractors are all outside the memo list.
//
// Passages / visual texts: the app has no passage field (the English HL
// reference does not supply passage text either), so each question that
// depends on a text carries `image_url` pointing at a crop of that text from
// the question paper, in public/question-images/afrikaans-fal-2025-p1/:
//   text-a-artikel.png          TEKS A, full article (pp.3-4 stitched)  Q1.1-1.16
//   text-b-grafiese-teks.png    TEKS B bar chart (p.7)                  Q1.17-1.22
//   text-c-opsomming.png        TEKS C exam-tips text (p.9)             Q2
//   text-d-advertensie.png      TEKS D advertisement (p.10)             Q3
//   text-e-strokiesprent.png    TEKS E six-frame comic (p.12)           Q4
//   text-g-prent.png            TEKS G beach picture (p.16)             Q5.2
// TEKS F (the Q5.1 article) is NOT imaged: every Q5.1 item quotes the full
// sentence under test (with the word/phrase in brackets exactly as printed)
// in its own text, so no image is needed.
//
// Summary (Q2, 10 marks) was converted to MCQ steps: the memo awards 7 marks
// for the 7 required facts (own sentences) + 3 language marks. Steps 1-7: for
// each of the first seven tips the student chooses the correct own-words
// summary sentence. Steps 8-10 (language marks): choose the version that is in
// own words rather than a direct quotation, the correct format (numbered
// full sentences) and the word-limit rule. These three language steps are a
// MCQ proxy for the memo's 3 language marks (which are awarded from the
// number of correct facts / quotation rules, not from separate tasks).
//
// Cognitive levels: this memo gives NO Barrett-taxonomy labels, so levels
// were assigned by the ingester (retrieval = Literal, own-words or
// restructuring = Reorganisation, why/how/motivate = Inference, opinion /
// reliability = Evaluation). Language-structure drill items are Literal.
//
// FLAG-for-review notes (memo transcribed faithfully, nothing "fixed"):
//  1. Q2 memo: the tips table lists EIGHT acceptable tips (kalm bly,
//     leestyd, tyd bestuur, instruksies, lees vrae versigtig, sleutelwoorde,
//     beplan langer vrae, gebruik oorblywende tyd om na te gaan) although
//     only SEVEN are required (7 marks). The first seven are tested as steps
//     1-7; the eighth (gebruik oorblywende tyd) is accepted by the memo but
//     not asked. Memo word-count example: (55/58 woorde).
//  2. Q3.9 memo: any of the three pictures is acceptable with a valid
//     motivation, and the mark is awarded for the motivation only. The MCQ
//     keeps one valid picture + motivation as the correct option and uses
//     illogical motivations as distractors.
//  3. Q1.3 / 1.4 / 1.18 / 1.20 / 4.3: the memo accepts the letter OR the
//     full answer text; here the options are the full text.
//  4. Q5.1.3 / 5.1.8 / 5.1.11 / 5.1.14: the memo accepts several equivalent
//     word orders / sentence forms; one accepted form is used as the correct
//     option.
//  5. Q3.1: the printed advertisement has the spelling error "voetspoore"
//     (memo: voetspore); the ad also prints the name as "Daleen Matthee".

import type { MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/afrikaans-fal-2025-p1";

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
  paper_number: "P1",
  duration_minutes: 120,
  total_marks: 80,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/04/NSC-Afrikaans-FAL-Grade-12-November-2025-P1-and-Memo.pdf" as string | null,
};

// Final dates: official DBE October/November 2026 NSC Examinations Timetable
// (Feb 2026). This one file carries the subject's whole schedule; every other
// Afrikaans FAL file leaves examSchedule empty.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [
  { paperNumber: "P3", examType: "final", examDate: "2026-10-20", startTime: "09:00", durationMinutes: 150 },
  { paperNumber: "P1", examType: "final", examDate: "2026-11-11", startTime: "09:00", durationMinutes: 120 },
  { paperNumber: "P2", examType: "final", examDate: "2026-11-20", startTime: "09:00", durationMinutes: 150 },
];

interface QuestionSeed {
  number: string;
  sub_number: string | null;
  text: string;
  marks: number;
  topicKey: string;
  cognitiveLevelName: string;
  model_answer: string;
  marking_notes: string;
  steps: MarkingPointStep[];
  image_url?: string;
}

const s = (marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep => ({ marks, description, options, correctIndex });

const q = (
  number: string,
  sub_number: string | null,
  text: string,
  marks: number,
  topicKey: string,
  cognitiveLevelName: string,
  model_answer: string,
  marking_notes: string,
  steps: MarkingPointStep[],
  image_url?: string,
): QuestionSeed => ({ number, sub_number, text, marks, topicKey, cognitiveLevelName, model_answer, marking_notes, steps, ...(image_url ? { image_url } : {}) });

const A = `${IMG}/text-a-artikel.png`;
const B = `${IMG}/text-b-grafiese-teks.png`;
const C = `${IMG}/text-c-opsomming.png`;
const D = `${IMG}/text-d-advertensie.png`;
const E = `${IMG}/text-e-strokiesprent.png`;
const G = `${IMG}/text-g-prent.png`;

export const questions: QuestionSeed[] = [
  // ============ AFDELING A: LEESBEGRIP — VRAAG 1 (30) ============
  q("1", "1.1", "VOLTOOI die sinne deur by elke vraag (1.1.1 tot 1.1.3) EEN of TWEE woord(e) uit paragraaf 2 in te vul. Jimmy Donaldson is (1.1.1) ... jaar oud. Sy (1.1.2) ... op sosiale media is MrBeast. Hy is baie bekend, want (1.1.3) ... mense kyk na sy video's as na enigiemand anders s'n.", 3, "comprehension", "Literal",
    "1.1.1 27/sewe-en-twintig; 1.1.2 aanlyn naam/naam; 1.1.3 meer.",
    "Memo: 27 / aanlyn naam (of naam) / meer. 1 punt elk.",
    [
      s(1, "1.1.1 Jimmy Donaldson is ... jaar oud.", ["25", "27", "30", "13"], 1),
      s(1, "1.1.2 Sy ... op sosiale media is MrBeast.", ["aanlyn naam", "regte naam", "kanaal", "handelsmerk"], 0),
      s(1, "1.1.3 Hy is baie bekend, want ... mense kyk na sy video's as na enigiemand anders s'n.", ["minder", "net so baie", "meer", "baie min"], 2),
    ], A),
  q("1", "1.2", "Kyk na die opskrif van hierdie teks. Haal EEN woord uit reëls 6 tot 10 aan wat vir ons sê dat MrBeast die koning of prins van sosiale media is.", 1, "comprehension", "Literal",
    "\"nommer-een-inhoudskepper\"", "Memo: nommer-een-inhoudskepper (EEN woord; geen penalisering as aanhalingstekens ontbreek nie).",
    [s(1, "Kies die woord uit reëls 6-10 wat wys MrBeast is die 'koning' van sosiale media.", ["smaakmakers", "volgelinge", "nommer-een-inhoudskepper", "multimedia-miljoenêr"], 2)], A),
  q("1", "1.3", "\"Jimmy is die jongste multimedia-miljoenêr in die wêreld wat op eie stoom so ryk geword het.\" (Reël 14 en 15) Kies die KORREKTE ANTWOORD om die sin te voltooi. Hier beteken \"op eie stoom\" dat Jimmy ...", 1, "comprehension", "Inference",
    "D — nie op ander staatgemaak het om sukses te behaal nie.", "Memo: D.",
    [s(1, "Hier beteken \"op eie stoom\" dat Jimmy ...", ["sy eie familie gevra het om hom te help.", "nie tyd gemors het om sy video's te maak nie.", "ander mense gemanipuleer het om hom te volg.", "nie op ander staatgemaak het om sukses te behaal nie."], 3)], A),
  q("1", "1.4", "\"Die kompetisie op sosiale media is kwaai.\" (Reël 15) Dit is 'n voorbeeld van FIGUURLIKE taalgebruik. Dit beteken dat ...", 1, "comprehension", "Inference",
    "dit nie maklik is om sukses te behaal nie.", "Memo: dit nie maklik is om sukses te behaal nie.",
    [s(1, "Kies die korrekte betekenis van die figuurlike uitdrukking.", ["mense op sosiale media lelik is met mekaar.", "daar baie kwaai honde op sosiale media is.", "dit nie maklik is om sukses te behaal nie.", "almal op sosiale media dieselfde video's maak."], 2)], A),
  q("1", "1.5", "Waar het Jimmy skoolgegaan?", 1, "comprehension", "Literal",
    "Greenville Christian Academy", "Memo: Greenville Christian Academy.",
    [s(1, "Waar het Jimmy skoolgegaan?", ["Laerskool Outeniqua", "Greenville Christian Academy", "Beast Philanthropy Akademie", "Khayelitsha Hoërskool"], 1)], A),
  q("1", "1.6", "Hoe oud was hy toe hy sy eerste video's op YouTube gelaai het?", 1, "comprehension", "Literal",
    "dertien/13 (jaar oud)", "Memo: dertien/13 (jaar oud).",
    [s(1, "Hoe oud was Jimmy toe hy sy eerste video's gelaai het?", ["sewentien (17) jaar oud", "twintig (20) jaar oud", "sewe-en-twintig (27) jaar oud", "dertien (13) jaar oud"], 3)], A),
  q("1", "1.7", "Jimmy wil hê sy volgelinge moet meer doen as net kyk na die video's wat hy maak. Motiveer waarom hierdie stelling WAAR is.", 1, "comprehension", "Inference",
    "Jimmy wil hê mense moet wonder/vrae vra oor dinge/hoe hy dit gedoen het; iets voel as hulle na sy video's kyk; sy kanaal volg.", "Memo: enige EEN van: wonder/vrae vra; iets voel/van sy video's hou; sy blad/kanaal volg. Geen punt vir WAAR/ONWAAR alleen nie.",
    [s(1, "Kies die motivering wat die stelling WAAR maak.", ["Hy wil hê mense moet wonder en vrae vra oor hoe hy dit gedoen het.", "Hy wil hê mense moet sy video's kyk en dadelik vergeet.", "Hy wil hê mense moet self videospeletjies by hom leer speel.", "Hy wil hê mense moet net geld vir hom gee."], 0)], A),
  q("1", "1.8", "Van watter wilde video lees ons in paragraaf 6?", 1, "comprehension", "Literal",
    "Die video waar hy homself lewend (laat) begrawe het.", "Memo: (Die video) waar hy homself lewend (laat) begrawe het.",
    [s(1, "Van watter wilde video lees ons in paragraaf 6?", ["Die video waar hy 100 huise laat bou het.", "Die video waar hy homself lewend laat begrawe het.", "Die video waar hy videospeletjies gespeel het.", "Die video waar hy plastiek uit die see gehaal het."], 1)], A),
  q("1", "1.9", "Lees paragraaf 6. Gee TWEE voorbeelde van mense se kritiek teenoor MrBeast se video's.", 2, "comprehension", "Literal",
    "Mense was ongelukkig/omgekrap oor die onsensitiewe taal wat hy soms gebruik; die plekke waar die video's gemaak word, is nie altyd veilig nie.", "Memo: 2 punte, een per voorbeeld.",
    [
      s(1, "Kies EEN korrekte kritiek uit paragraaf 6.", ["Hy gebruik soms onsensitiewe taal.", "Hy gee te veel van sy geld weg.", "Hy is te jonk om miljoenêr te wees.", "Sy video's is te lank."], 0),
      s(1, "Kies 'n TWEEDE, ander kritiek uit paragraaf 6.", ["Hy plant nie genoeg bome nie.", "Hy deel te min video's.", "Die plekke waar sy video's gemaak word, is nie altyd veilig nie.", "Hy is lelik met ander smaakmakers."], 2),
    ], A),
  q("1", "1.10", "MrBeast gebruik sy YouTube-kanaal, Beast Philanthrophy, om ander te help. Kies 'n omskrywing uit KOLOM B wat by die plek in KOLOM A pas (1.10.1 tot 1.10.5): Die see; Jamaika; Dorpie in Zambië; Khayelitsha; Oor die hele wêreld.", 5, "comprehension", "Reorganisation",
    "1.10.1 D veg teen besoedeling; 1.10.2 E gee blyplek vir mense wat swaarkry; 1.10.3 F hoef nie meer kerse te gebruik nie; 1.10.4 C veilige plek vir kinders sonder ouers; 1.10.5 B herstel skade aan die plantegroei.", "Memo: D, E, F, C, B (1 punt elk). Letter of volledige antwoord aanvaar.",
    [
      s(1, "1.10.1 Die see", ["help met dierebeskerming", "veg teen besoedeling", "herstel skade aan die plantegroei", "gee blyplek vir mense wat swaarkry"], 1),
      s(1, "1.10.2 Jamaika", ["veilige plek vir kinders sonder ouers", "veg teen besoedeling", "hoef nie meer kerse te gebruik nie", "gee blyplek vir mense wat swaarkry"], 3),
      s(1, "1.10.3 Dorpie in Zambië", ["herstel skade aan die plantegroei", "help met dierebeskerming", "gee blyplek vir mense wat swaarkry", "hoef nie meer kerse te gebruik nie"], 3),
      s(1, "1.10.4 Khayelitsha", ["help met dierebeskerming", "veg teen besoedeling", "veilige plek vir kinders sonder ouers", "gee blyplek vir mense wat swaarkry"], 2),
      s(1, "1.10.5 Oor die hele wêreld", ["help met dierebeskerming", "hoef nie meer kerse te gebruik nie", "veilige plek vir kinders sonder ouers", "herstel skade aan die plantegroei"], 3),
    ], A),
  q("1", "1.11", "\"Jimmy het persoonlike bande met Suid-Afrika.\" (Reël 50) Verduidelik in jou eie woorde wat hierdie persoonlike bande is.", 1, "comprehension", "Reorganisation",
    "Sy verloofde/vrou (Thea Booysen) is van Suid-Afrika; of sy liefdadigheidsprojek / die kinderhuis wat hy help.", "Memo: enige EEN: sy verloofde/geliefde; sy liefdadigheidsprojek; die kinderhuis wat hy help (in 'n verduidelikende volsin; geen aanhalings).",
    [s(1, "Wat is Jimmy se persoonlike bande met Suid-Afrika?", ["Hy het in Suid-Afrika skoolgegaan.", "Sy verloofde, Thea Booysen, is 'n Suid-Afrikaanse internetpersoonlikheid.", "Hy het sy tweede YouTube-kanaal in Kaapstad begin.", "Sy eerste video's is in Suid-Afrika gelaai."], 1)], A),
  q("1", "1.12", "Wanneer was Jimmy vir die eerste keer in Suid-Afrika?", 1, "comprehension", "Literal",
    "(In) 2022", "Memo: (In) 2022.",
    [s(1, "Wanneer was Jimmy vir die eerste keer in Suid-Afrika?", ["2019", "2018", "2024", "2022"], 3)], A),
  q("1", "1.13", "Noem EEN van die dinge wat MrBeast nog in die toekoms wil doen.", 1, "comprehension", "Literal",
    "Hy hoop om wêreldvrede te bring / 'n einde te maak aan hongersnood / nóg nuwe dinge te leer.", "Memo: enige EEN of soortgelyk.",
    [s(1, "Wat wil MrBeast nog in die toekoms doen?", ["Hy wil na Suid-Afrika verhuis.", "Hy wil 'n einde maak aan hongersnood.", "Hy wil ophou video's maak en weer skoolgaan.", "Hy wil nog gevaarliker video's maak."], 1)], A),
  q("1", "1.14", "\"Hy is die 'good-guy influencer'.\" (Paragraaf 3) Waarom pas hierdie beskrywing van Jimmy so goed by die inhoud van hierdie teks?", 1, "comprehension", "Inference",
    "In die teks lees ons dat Jimmy van sy eie geld gee om mense/diere/die natuur te help (of nie lelik is met ander nie, ens.).", "Memo: enige EEN, bv. nie lelik met ander; help arm mense met eie geld; goeie voorbeeld; liefdadigheid; kinderhuis. Aanhalings nie aanvaar nie.",
    [s(1, "Waarom pas \"good-guy influencer\" so goed by die teks?", ["Hy het meer volgelinge as enigiemand anders.", "Hy het op dertien sy eerste video's gelaai.", "Hy gee van sy eie geld om mense, diere en die natuur te help.", "Hy is die jongste multimedia-miljoenêr in die wêreld."], 2)], A),
  q("1", "1.15", "Lees paragraaf 5 en 10. Waarom maak dit sin dat Jimmy en Thea so goed by mekaar pas? Verwys in jou antwoord na die werk wat hulle doen en hoe hulle oor leer voel.", 2, "comprehension", "Inference",
    "WERK: albei is internetpersoonlikhede/maak inhoud vir die internet. LEER: albei hou daarvan om nuwe dinge te leer.", "Memo: 1 punt vir WERK + 1 punt vir LEER (of soortgelyk; geen aanhalings).",
    [
      s(1, "Werk: wat het Jimmy en Thea in gemeen?", ["Albei het 'n kinderhuis in Khayelitsha gestig.", "Albei is internetpersoonlikhede wat inhoud vir die internet maak.", "Albei het grade in videografie.", "Albei het in Kaapstad grootgeword."], 1),
      s(1, "Leer: hoe voel hulle albei daaroor?", ["Albei hou nie van skool nie.", "Albei dink leer is tydmors.", "Albei leer net by ander YouTube-kanale.", "Albei hou daarvan om nuwe dinge te leer."], 3),
    ], A),
  q("1", "1.16", "Hoe ondersteun die eerste foto in die teks die inhoud in paragraaf 2?", 1, "comprehension", "Inference",
    "Die foto wys dat hy baie volgelinge/views het (sy bekendheid/gewildheid).", "Memo: enige EEN, bv. wys hoe hy lyk; baie volgelinge/views; aanhangers raak al meer; gewildheid.",
    [s(1, "Hoe ondersteun die eerste foto paragraaf 2?", ["Dit wys dat hy kritiek van sy volgelinge ontvang.", "Dit wys dat hy in 'n nagklub in Kaapstad werk.", "Dit wys dat hy baie volgelinge/views het.", "Dit wys dat hy kwaad is vir sy volgelinge."], 2)], A),
  q("1", "1.17", "TEKS B (Suid-Afrikaners in die werkplek). Watter persentasie mans is huiswerkers?", 1, "comprehension", "Literal",
    "3(%)", "Memo: 3(%).",
    [s(1, "Watter persentasie mans is huiswerkers?", ["97%", "28%", "3%", "45%"], 2)], B),
  q("1", "1.18", "Kies die KORREKTE ANTWOORD. Die prentjie (gereedskap-ikoon) pas by die werk wat 'n tegnikus doen, want hulle ...", 1, "comprehension", "Inference",
    "maak stukkende goed reg", "Memo: maak stukkende goed reg.",
    [s(1, "Die prentjie pas by 'n tegnikus, want hulle ...", ["verkoop gereedskap.", "maak skoon in huise.", "bestuur ander werkers.", "maak stukkende goed reg."], 3)], B),
  q("1", "1.19", "In watter beroep is daar amper net so veel mans as vroue wat die werk doen? Noem EEN.", 1, "comprehension", "Literal",
    "Beroepslui/Beroepsmense OF Verkope en dienste", "Memo: enige EEN: Beroepslui; Verkope en dienste.",
    [s(1, "In watter beroep is daar amper net so veel mans as vroue?", ["Huiswerker", "Klerk", "Bestuurder", "Beroepslui"], 3)], B),
  q("1", "1.20", "Kies die KORREKTE ANTWOORD. Die statistiek oor landbou (geskool) as beroep gee net vir ons die inligting oor mense wat ...", 1, "comprehension", "Inference",
    "verder studeer het", "Memo: verder studeer het.",
    [s(1, "Die statistiek oor landbou (geskool) gee inligting oor mense wat ...", ["by hulle familie geleer het.", "hul eie plase besit.", "verder studeer het.", "net op die plaas werk."], 2)], B),
  q("1", "1.21", "Waarom, dink jy, is daar so min vroue wat masjinerie-operateurs is?", 1, "comprehension", "Evaluation",
    "Dit word tradisioneel nog as 'n beroep vir mans gesien (of ander geloofwaardige rede).", "Memo: enige EEN geloofwaardige rede (tradisioneel vir mans; gebrek aan opleiding; belangstelling; gevaarlik; omstandighede; fisiese krag).",
    [s(1, "Kies die geloofwaardigste rede waarom so min vroue masjinerie-operateurs is.", ["Vroue verdien te veel om masjiene te bestuur.", "Masjinerie-operateurs werk net deeltyds.", "Dit word tradisioneel nog as 'n beroep vir mans gesien.", "Vroue mag nie by wet studeer nie."], 2)], B),
  q("1", "1.22", "Waarom sal die inligting in hierdie teks jou nie kan help om 'n LO-taak in 2025 te voltooi nie?", 1, "comprehension", "Evaluation",
    "Die inligting is verouderd/die bron is 2018 gedateer.", "Memo: enige EEN: verouderd/2018; nie meer relevant; syfers het intussen verander.",
    [s(1, "Waarom is die teks nie bruikbaar vir 'n 2025-taak nie?", ["Die inligting is verouderd; die bron is van 2018.", "Die grafiek wys geen persentasies nie.", "Die teks gaan oor Amerikaanse werkers.", "LO-take gaan net oor gesondheid."], 0)], B),

  // ============ AFDELING B: OPSOMMING — VRAAG 2 (10) ============
  q("2", null, "Som die SEWE wenke WAT JOU SAL HELP OM 'N GOEIE EKSAMENSESSIE TE HÊ (TEKS C) in jou EIE VOLSINNE op, puntsgewys, genommer 1 tot 7, nie langer as 70 woorde nie. (Hier gekies as meerkeuse: wenke 1-7 en daarna drie taalpunte.)", 10, "summary", "Reorganisation",
    "1 Bly kalm voor/in die eksamen. 2 Gebruik die leestyd sinvol. 3 Bestuur jou tyd goed. 4 Voer alle instruksies noukeurig uit. 5 Lees alle vrae versigtig. 6 Lig sleutelwoorde in vrae uit/onderstreep dit. 7 Beplan langer vrae/opstelle deeglik. (Memo aanvaar ook: gebruik oorblywende tyd om jou antwoordeboek na te gaan.) Maksimum 70 woorde; memo-voorbeeld 55/58 woorde.",
    "Memo: 7 punte vir 7 feite + 3 taalpunte (1-3 feite = 1; 4-5 = 2; 6-7 = 3, as nie woordeliks aangehaal). Nasiener lees 5 woorde verby die 70-woordegrens. Hier as MCQ omgeskakel (sien lêerhoof); geen punte afgetrek vir ontbrekende woordtelling.",
    [
      s(1, "Wenk 1 (kalm bly): kies die korrekte opsommingspunt.", ["Wees bang vir die eksamen sodat jy harder leer.", "Probeer kalm bly sodat jy makliker kan onthou en verstaan.", "Slaap tien minute voor jy begin skryf.", "Skryf alles wat jy weet so vinnig moontlik neer."], 1),
      s(1, "Wenk 2 (leestyd): kies die korrekte opsommingspunt.", ["Begin dadelik tydens die leestyd antwoord skryf.", "Gebruik die leestyd om met ander kandidate te praat.", "Gebruik die tien minute leestyd sinvol om deur die vraestel te kyk.", "Slaan die leestyd oor en begin dadelik met vraag 1."], 2),
      s(1, "Wenk 3 (tydbestuur): kies die korrekte opsommingspunt.", ["Bestuur jou tyd goed sodat jy alle vrae kan beantwoord.", "Spandeer die meeste tyd aan die eerste vraag.", "Beantwoord slegs die vrae wat jy gemaklik vind.", "Skryf vinnig en moenie jou werk nakyk nie."], 0),
      s(1, "Wenk 4 (instruksies): kies die korrekte opsommingspunt.", ["Lees die instruksies net by die langer vrae.", "Skryf die instruksies in jou antwoordeboek oor.", "Ignoreer instruksies wat jy nie dadelik verstaan nie.", "Voer alle instruksies noukeurig uit."], 3),
      s(1, "Wenk 5 (vrae lees): kies die korrekte opsommingspunt.", ["Lees net die meervoudigekeuse-vrae versigtig.", "Lees alle vrae versigtig sodat jy verstaan wat gevra word.", "Jaag deur die vrae om tyd te bespaar.", "Lees elke vraag net een keer vinnig."], 1),
      s(1, "Wenk 6 (sleutelwoorde): kies die korrekte opsommingspunt.", ["Onderstreep die hele vraag.", "Onderstreep jou eie antwoorde.", "Lig die sleutelwoorde in die vrae uit, byvoorbeeld deur dit te onderstreep.", "Skryf die sleutelwoorde op die kantlyn vir die nasiener."], 2),
      s(1, "Wenk 7 (langer vrae/opstelle): kies die korrekte opsommingspunt.", ["Begin dadelik skryf, want beplanning mors tyd.", "Skryf alles vinnig neer wat jy weet.", "Los langer vrae tot laaste en beantwoord dit net as daar tyd is.", "Beplan langer vrae en opstelle deeglik voor jy skryf."], 3),
      s(1, "Taalpunt 1: watter sin is in EIE WOORDE (nie 'n direkte aanhaling uit die teks nie)?", ["Bly kalm voor en tydens die eksamen.", "Jy moet probeer om kalm te bly.", "Dan kan jy makliker onthou en verstaan.", "Dis 'n goeie idee om hierdie 10 minute sinvol te benut."], 0),
      s(1, "Taalpunt 2: wat is die korrekte formaat van die opsomming?", ["'n Lang paragraaf sonder nommers.", "Slegs sleutelwoorde sonder volsinne.", "Genommerde (1 tot 7) volsinne, elke wenk op sy eie reël.", "Kolpunte met direkte aanhalings uit die teks."], 2),
      s(1, "Taalpunt 3: wat is die woordelimiet en wat doen die nasiener as dit oorskry word?", ["Maksimum 90 woorde; die nasiener lees net tot woord 90.", "Maksimum 70 woorde; die nasiener trek een punt af vir elke ekstra woord.", "Maksimum 70 woorde; geen punte word toegeken as die getal woorde nie aangedui is nie.", "Maksimum 70 woorde; die nasiener lees vyf woorde verby die grens en ignoreer die res ná die sin waarin die 75ste woord voorkom."], 3),
    ], C),

  // ============ AFDELING C: TAAL ============
  // ---- VRAAG 3: ADVERTENSIE (10) ----
  q("3", "3.1", "Verbeter die SPELFOUT in die sin. \"Wil jy in Daleen Matthee se voetspoore volg?\"", 1, "language-structures", "Literal",
    "voetspore", "Memo: voetspore (sp).",
    [s(1, "Kies die korrekte spelling.", ["voetspoor", "voetspoere", "voetspore", "voetspoorte"], 2)], D),
  q("3", "3.2", "Wat is die doel van die twee retoriese vrae onder die opskrif?", 1, "visual-literacy", "Inference",
    "Dit trek die leser se aandag/prikkel die leser se belangstelling.", "Memo: enige EEN: aandag/belangstelling; kans om na te dink; persoonlik/betrek die leser; oorreed om die hele advertensie te lees.",
    [s(1, "Wat is die doel van die twee retoriese vrae?", ["Dit gee die antwoord op hoe om in te skryf.", "Dit wys die pryse wat gewen kan word.", "Dit toets of die leser Daleen Matthee se boeke ken.", "Dit trek die leser se aandag en prikkel sy belangstelling."], 3)], D),
  q("3", "3.3", "\"Dán is Letterveertjies nét die kompetisie vir jou!\" Motiveer waarom hierdie stelling 'n MENING is.", 1, "visual-literacy", "Evaluation",
    "Nie almal hou van kompetisies nie / nie almal sal so dink nie.", "Memo: enige EEN, bv. nie almal hou van kompetisies nie; opinie van die adverteerder; geen bewyse; nie nagevors nie. Geen punt vir FEIT/MENING alleen nie.",
    [s(1, "Waarom is die stelling 'n MENING?", ["Dit kan met statistiek bewys word dat almal van kompetisies hou.", "Nie almal hou van kompetisies nie, dus kan nie almal so dink nie.", "Die advertensie noem die datum van die kompetisie.", "Dit is nagevors en deur die webtuiste bevestig."], 1)], D),
  q("3", "3.4", "Waarom het die adverteerder die pryse wat jy kan wen, in blokkies geplaas? Gee EEN rede.", 1, "visual-literacy", "Inference",
    "Dit beklemtoon die pryse/groepeer die inligting oor elke prys.", "Memo: enige EEN, bv. beklemtoon die pryse; groepeer inligting; stel 'n podium voor; trek aandag na die pryse.",
    [s(1, "Waarom is die pryse in blokkies geplaas?", ["Dit wys hoe om vir die kompetisie in te skryf.", "Dit wys watter pryse reeds gewen is.", "Dit beklemtoon die pryse en groepeer die inligting oor elke prys.", "Dit maak die advertensie korter."], 2)], D),
  q("3", "3.5", "Mense jonger as 18 mag nie aan hierdie kompetisie deelneem nie. Motiveer waarom hierdie stelling ONWAAR is.", 1, "visual-literacy", "Inference",
    "Die advertensie noem geen ouderdomsbeperking nie.", "Memo: enige EEN, bv. geen ouderdom(sbeperking) genoem; almal kan deelneem.",
    [s(1, "Waarom is die stelling ONWAAR?", ["Die advertensie noem dat net skoolkinders mag deelneem.", "Die advertensie noem geen ouderdomsbeperking nie.", "Die pryse is net vir volwassenes bedoel.", "Inskrywings van jonger as 18 moet 'n ouer se handtekening hê."], 1)], D),
  q("3", "3.6", "Skryf die GETAL in woorde. \"Stuur die finale stuk voor (20) Desember 2025 aan voelnveer@mweb.co.za.\"", 1, "language-structures", "Literal",
    "twintig", "Memo: twintig (sp).",
    [s(1, "Skryf (20) korrek in woorde.", ["twentig", "twintig", "twinting", "twingtig"], 1)], D),
  q("3", "3.7.1", "Kyk na wat jy moet doen om in te skryf (HOE SKRYF JY IN?). Waarom sal dit maklik wees om vir die kompetisie in te skryf?", 1, "visual-literacy", "Inference",
    "Die instruksies is duidelik/stap vir stap uiteengesit.", "Memo: enige EEN, bv. duidelike instruksies; min stappe; stap vir stap; eenvoudige proses; aanlyn.",
    [s(1, "Waarom is dit maklik om in te skryf?", ["Die inskrywing is gratis.", "Jy hoef nie 'n storie of gedig te skryf nie.", "Jy kan by enige winkel inskryf.", "Die instruksies is duidelik en stap vir stap uiteengesit."], 3)], D),
  q("3", "3.7.2", "Waarom sal sekere mense nie aan hierdie kompetisie kan deelneem nie?", 1, "visual-literacy", "Inference",
    "Nie almal het rekenaars/internet om e-posse te stuur nie (inskrywings moet elektronies gedoen word).", "Memo: enige EEN, bv. elektronies; nie almal het rekenaars/selfone/internet; nie rekenaarvaardig; geld.",
    [s(1, "Waarom kan sekere mense nie deelneem nie?", ["Die kompetisie is net vir bekende skrywers.", "Nie almal het rekenaars of internet om e-posse te stuur nie.", "Die webtuiste is nie in Afrikaans nie.", "Slegs inskrywings op papier word aanvaar."], 1)], D),
  q("3", "3.8", "Watter belangrike inligting is uit die advertensie weggelaat?", 1, "visual-literacy", "Evaluation",
    "Die inskrywingsfooi/betaling/bedrag.", "Memo: enige EEN, bv. inskrywingsfooi; bankbesonderhede; kontaknommer; aanvangsdatum; wanneer uitslae bekend; lengte van skryfstuk.",
    [s(1, "Watter belangrike inligting ontbreek?", ["Die sluitingsdatum van die kompetisie.", "Die webtuiste-adres.", "Die pryse wat gewen kan word.", "Die inskrywingsfooi (hoeveel jy moet betaal)."], 3)], D),
  q("3", "3.9", "Watter EEN van die drie prentjies (hand met potlood, veertjie, boek met potlood en uitveër), dink jy, pas die beste by die tipe kompetisie wat hier geadverteer word? Motiveer jou antwoord.", 1, "visual-literacy", "Evaluation",
    "Bv. die veertjie: dit pas by die naam Letterveertjies/is waarmee stories in die ou dae geskryf is.", "Memo: enige EEN prentjie met geldige motivering; die punt is slegs vir die motivering.",
    [s(1, "Kies die prentjie met 'n geldige motivering.", ["Die veertjie, want dit pas by die naam Letterveertjies en is waarmee stories vroeër geskryf is.", "Die hand met die potlood, want dit wys dat die kompetisie net vir kunstenaars is.", "Die boek, want dit wys dat die pryse boeke is.", "Die veertjie, want dit wys dat die kompetisie net vir ou mense is."], 0)], D),

  // ---- VRAAG 4: STROKIESPRENT (10) ----
  q("4", "4.1", "Kyk na RAAMPIE 2. Hoe weet ons dat Anna gelukkig is? Gee EEN bewys.", 1, "visual-literacy", "Inference",
    "Anna se hande is in die lug / sy skree \"JIPPIE!\".", "Memo: enige EEN: hande in die lug; skree JIPPIE; oë/mond groot/oop; glimlag; gooi papier in die lug.",
    [s(1, "Hoe weet ons dat Anna gelukkig is?", ["Sy skree \"LOS MY GOED UIT, ANNA!!\"", "Sy sê \"Hou op, Anna!\"", "Sy lê en teken in 'n boek.", "Sy het haar hande in die lug en skree \"JIPPIE!\""], 3)], E),
  q("4", "4.2.1", "Kyk na RAAMPIE 1 tot RAAMPIE 3. Watter tegniek word hier gebruik om te wys dat Sara al kwater word vir Anna? Noem EEN.", 1, "visual-literacy", "Inference",
    "Meer uitroeptekens / die woorde word al groter geskryf / hoofletters.", "Memo: enige EEN: meer uitroeptekens; groter woorde; hoofletters; donkerder druk; bewende lettertipe; oë/mond groter.",
    [s(1, "Watter tegniek wys dat Sara al kwater word?", ["Die woorde word kleiner en ligter geskryf.", "Daar is minder uitroeptekens in RAAMPIE 3.", "Die kleur van die raampies verander na rooi.", "Die woorde word al groter geskryf en daar is meer uitroeptekens."], 3)], E),
  q("4", "4.2.2", "Hoe verskil dit wat Sara in RAAMPIE 3 doen van dit wat sy in RAAMPIE 1 doen?", 2, "visual-literacy", "Inference",
    "RAAMPIE 1: Sara lê en teken/fokus op wat sy doen. RAAMPIE 3: Sara is op haar knieë en gryp haar goed by Anna/skree op Anna.", "Memo: EEN punt per raampie.",
    [
      s(1, "Wat doen Sara in RAAMPIE 1?", ["Sy gryp haar goed by Anna.", "Sy lê en teken en fokus op wat sy doen.", "Sy huil hard.", "Sy roep Ma met 'n sagte stem."], 1),
      s(1, "Wat doen Sara in RAAMPIE 3?", ["Sy lê en teken rustig.", "Sy gee haar goed vrywillig aan Anna.", "Sy gryp haar goed by Anna en skree op haar.", "Sy loop uit die kamer."], 2),
    ], E),
  q("4", "4.3", "Kyk na RAAMPIE 4. Die bewegingslyn en die woord \"GRYP\" wys dat Anna se aksie ... gebeur.", 1, "visual-literacy", "Inference",
    "vinnig", "Memo: vinnig.",
    [s(1, "Anna se aksie gebeur ...", ["stadig", "rustig", "vinnig", "versigtig"], 2)], E),
  q("4", "4.4.1", "Kyk na RAAMPIE 5. Hoe weet ons dat Ma die situasie tussen die twee kinders rustig hanteer?", 1, "visual-literacy", "Inference",
    "Ma praat op 'n rustige manier/skree nie op Anna nie; haar woorde eindig met 'n punt.", "Memo: enige EEN, bv. gewone stemtoon; geen uitroeptekens; kyk Anna in die oë; vat rustig Sara se goed; kleiner skrif; geen bewegingslyne; noem beide name.",
    [s(1, "Hoe weet ons dat Ma rustig is?", ["Ma skree harder as die kinders.", "Ma gryp Sara se goed met bewegingslyne.", "Ma loop sonder om iets te sê uit die kamer.", "Ma praat in 'n gewone stemtoon sonder uitroeptekens."], 3)], E),
  q("4", "4.4.2", "Wat beteken die \"WAAAHHH!!\" in RAAMPIE 5?", 1, "visual-literacy", "Inference",
    "Anna huil/tjank baie hard.", "Memo: die kind/Anna huil/tjank/skree baie hard/is hartseer.",
    [s(1, "Wat beteken \"WAAAHHH!!\"?", ["Anna lag hardop.", "Ma skree op Anna.", "Anna huil baie hard.", "Anna is bly dat sy die goed gekry het."], 2)], E),
  q("4", "4.5", "Skryf Sara se ma se woorde in die INDIREKTE REDE. Jy moet dat in jou sin gebruik. \"Anna, dit is Sara se goed.\" Begin só: Ma sê ...", 1, "language-structures", "Literal",
    "Ma sê vir/aan Anna dat dit Sara se goed is.", "Memo: Ma sê vir/aan Anna dat dit Sara se goed is.",
    [s(1, "Kies die korrekte indirekte rede.", ["Ma sê vir Anna dat dit is Sara se goed.", "Ma sê vir Anna, dit is Sara se goed.", "Ma sê vir Anna dat dit Sara se goed is.", "Ma sê vir Anna dat dit Sara se goed was."], 2)], E),
  q("4", "4.6", "Skryf die gedeelte tussen hakies in die INFINITIEF. Skryf die hele sin uit. \"Dis nie nodig (met haar raas) nie!\"", 1, "language-structures", "Literal",
    "Dis nie nodig om met haar te raas nie.", "Memo: Dis nie nodig om met haar te raas nie.",
    [s(1, "Kies die korrekte infinitiefsin.", ["Dis nie nodig om met haar raas nie.", "Dis nie nodig te met haar raas nie.", "Dis nie nodig om met haar te raas nie.", "Dis nie nodig dat om met haar te raas nie."], 2)], E),
  q("4", "4.7", "Waarom kan ons sê dat hierdie situasie tussen Anna en Sara geloofwaardig is?", 1, "visual-literacy", "Evaluation",
    "Dit is regtig wat tussen kinders/susters in dieselfde huisgesin gebeur.", "Memo: enige EEN, bv. gebeur regtig tussen sibbe; kinders baklei gereeld; kleiner sussies wil dieselfde doen; persoonlike verwysing aanvaar.",
    [s(1, "Waarom is die situasie geloofwaardig?", ["Anna en Sara is bekende strokiesprentkarakters.", "Die kinders praat Afrikaans.", "Dit is wat regtig gereeld tussen susters/kinders in dieselfde huisgesin gebeur.", "Die strokiesprent is in kleur gedruk."], 2)], E),

  // ---- VRAAG 5.1: ARTIKEL (TEKS F, 14) ----
  q("5", "5.1.1", "Vorm 'n SELFSTANDIGE NAAMWOORD van die werkwoord tussen hakies. \"Luhan Smit is 'n (inwoon) van George.\"", 1, "language-structures", "Literal",
    "inwoner", "Memo: inwoner (sp).",
    [s(1, "Kies die korrekte selfstandige naamwoord.", ["inwonder", "inwonner", "inwoner", "inwonaar"], 2)]),
  q("5", "5.1.2", "Gee EEN WOORD vir die woorde tussen hakies. \"Hy samel (elke jaar) kos in vir diere in nood.\"", 1, "language-structures", "Literal",
    "jaarliks", "Memo: jaarliks (sp).",
    [s(1, "Kies die korrekte een woord vir \"elke jaar\".", ["jaarlikse", "jaarlank", "jaarliks", "jaarlijks"], 2)]),
  q("5", "5.1.3", "Skryf die sin in die VERLEDE TYD. \"In 2024 ontvang hy drie ton hondekos deur die Kersliggie-projek.\"", 1, "language-structures", "Literal",
    "In 2024 het hy drie ton hondekos deur die Kersliggie-projek ontvang.", "Memo: enige EEN korrekte verledetydsin met korrekte woordorde.",
    [s(1, "Kies die korrekte verledetydsin.", ["In 2024 het hy drie ton hondekos deur die Kersliggie-projek ontvang.", "In 2024 was hy drie ton hondekos deur die Kersliggie-projek ontvang.", "In 2024 het hy drie ton hondekos deur die Kersliggie-projek ontvang het.", "In 2024 hy het drie ton hondekos deur die Kersliggie-projek ontvang."], 0)]),
  q("5", "5.1.4", "Gee die OORTREFFENDE TRAP van die woord tussen hakies. \"Dit is die (baie) kos ooit.\"", 1, "language-structures", "Literal",
    "meeste", "Memo: meeste (sp).",
    [s(1, "Kies die korrekte oortreffende trap van \"baie\".", ["meer", "baiste", "meeste", "mees"], 2)]),
  q("5", "5.1.5", "Kies die korrekte VOORNAAMWOORD. \"Hy het mense uitgenooi om na (haar/sy) gesin se Kersliggies te gaan kyk.\"", 1, "language-structures", "Literal",
    "sy", "Memo: sy.",
    [s(1, "Kies die korrekte besitlike voornaamwoord.", ["haar", "hulle", "sy", "hom"], 2)]),
  q("5", "5.1.6", "Gee die MEERVOUD van die woord tussen hakies. \"Hulle moes met hondekos of ander (skenking) betaal.\"", 1, "language-structures", "Literal",
    "skenkings", "Memo: skenkings (sp).",
    [s(1, "Kies die korrekte meervoud van \"skenking\".", ["skenkinge", "skenkings", "skenkingte", "skenking's"], 1)]),
  q("5", "5.1.7", "Gee die korrekte SAMESTELLING van die woorde tussen hakies. \"Die kos is Vrydag met 'n (aflewering + wa) by ODIN afgelewer.\"", 1, "language-structures", "Literal",
    "afleweringswa", "Memo: afleweringswa (sp).",
    [s(1, "Kies die korrekte samestelling.", ["afleweringwa", "aflewerings wa", "afleweringswa", "afleweringwaens"], 2)]),
  q("5", "5.1.8", "Skryf die sin oor in die korrekte WOORDORDE. \"Luhan het die kos (vinnig) (vroeg die oggend) (op die perseel) afgelaai.\"", 1, "language-structures", "Literal",
    "Luhan het die kos vroeg die oggend vinnig op die perseel afgelaai.", "Memo: Luhan het die kos vroeg die oggend vinnig op die perseel afgelaai (tyd, wyse, plek).",
    [s(1, "Kies die sin met die korrekte woordorde.", ["Luhan het die kos vinnig vroeg die oggend op die perseel afgelaai.", "Luhan het die kos op die perseel vroeg die oggend vinnig afgelaai.", "Luhan het die kos vroeg die oggend vinnig op die perseel afgelaai.", "Luhan het die kos afgelaai vinnig vroeg die oggend op die perseel."], 2)]),
  q("5", "5.1.9", "Vul die ontbrekende VOORSETSEL in. \"Luhan is baie trots (...) dit wat hy en die gemeenskap reggekry het.\"", 1, "language-structures", "Literal",
    "op", "Memo: op.",
    [s(1, "Kies die korrekte voorsetsel.", ["vir", "aan", "met", "op"], 3)]),
  q("5", "5.1.10", "Gee die KORREKTE VORM van die woord tussen hakies. \"Januarie is dikwels 'n (moeilik) maand vir hulle.\"", 1, "language-structures", "Literal",
    "moeilike", "Memo: moeilike (sp).",
    [s(1, "Kies die korrekte vorm.", ["moeilik", "moeiliker", "moeilike", "moeilikste"], 2)]),
  q("5", "5.1.11", "Skryf die sin in die BEDRYWENDE VORM. \"Die projek is moontlik gemaak deur die gemeenskap se bydrae.\"", 1, "language-structures", "Literal",
    "Die gemeenskap se bydrae het die projek moontlik gemaak.", "Memo: Die gemeenskap se bydrae het die projek moontlik gemaak.",
    [s(1, "Kies die korrekte bedrywende vorm.", ["Die projek het die gemeenskap se bydrae moontlik gemaak.", "Die gemeenskap se bydrae is die projek moontlik gemaak.", "Die projek moontlik gemaak het die gemeenskap se bydrae.", "Die gemeenskap se bydrae het die projek moontlik gemaak."], 3)]),
  q("5", "5.1.12", "Verdeel die woord tussen hakies korrek in LETTERGREPE. \"ODIN se stigter, Colleen Smith, en bestuurder, Marlene Mennie, het hulle (dankbaarheid) uitgespreek.\"", 1, "language-structures", "Literal",
    "dank-baar-heid", "Memo: dank-baar-heid (verdeling moet volledig wees).",
    [s(1, "Kies die korrekte lettergreepverdeling.", ["dan-kbaar-heid", "dank-baarheid", "dankbaar-heid", "dank-baar-heid"], 3)]),
  q("5", "5.1.13", "Skryf die AFKORTING tussen hakies voluit as 'n woord. \"Luhan is 'n (gr.) 6-leerder aan Laerskool Outeniqua.\"", 1, "language-structures", "Literal",
    "graad", "Memo: graad/Graad (sp).",
    [s(1, "Kies die volle woord vir \"gr.\".", ["grade", "grad", "graad", "graaf"], 2)]),
  q("5", "5.1.14", "Verbind die sinne met die VOEGWOORD tussen hakies. \"ODIN ontvang geen staatshulp nie. Hulle is afhanklik van die publiek se hulp. (daarom)\"", 1, "language-structures", "Literal",
    "ODIN ontvang geen staatshulp nie; daarom is hulle afhanklik van die publiek se hulp.", "Memo: ... nie; daarom is hulle afhanklik van die publiek se hulp / is hulle van die publiek se hulp afhanklik (leesteken nie gepenaliseer nie).",
    [s(1, "Kies die korrekte verbinding.", ["ODIN ontvang geen staatshulp nie; daarom hulle is afhanklik van die publiek se hulp.", "ODIN ontvang geen staatshulp nie omdat daarom hulle afhanklik is van die publiek se hulp.", "ODIN ontvang geen staatshulp nie daarom hulle afhanklik is van die publiek se hulp.", "ODIN ontvang geen staatshulp nie; daarom is hulle afhanklik van die publiek se hulp."], 3)]),

  // ---- VRAAG 5.2: PRENT (TEKS G, 6) ----
  q("5", "5.2.1", "Gebruik die HOMONIEM van die woord tussen hakies in 'n sin sodat die betekenis duidelik is. \"Die vliegtuig (vlieg) hoog oor die see.\"", 1, "language-structures", "Literal",
    "Voorbeeld: Daar sit 'n vlieg op die tafel.", "Memo: enige EEN sin waar \"vlieg\" in 'n ander betekenisverband gebruik word (bv. die insek).",
    [s(1, "Kies die sin waar \"vlieg\" 'n homoniem met 'n ANDER betekenis is.", ["Die voël vlieg in die lug.", "Die vlieënier vlieg die vliegtuig.", "Die vliegtuig vlieg oor die see.", "Daar sit 'n vlieg op die tafel."], 3)], G),
  q("5", "5.2.2", "Kies die KORREKTE WOORD. \"Paul is besig om 'n foto te (vat/neem).\"", 1, "language-structures", "Literal",
    "neem", "Memo: neem.",
    [s(1, "Kies die korrekte woord.", ["neem", "vat", "kyk", "sit"], 0)], G),
  q("5", "5.2.3", "Gee die VERKLEINWOORD van die woord tussen hakies. \"Daar is 'n klein (blom) op Marietjie se swempet.\"", 1, "language-structures", "Literal",
    "blommetjie", "Memo: blommetjie (sp).",
    [s(1, "Kies die korrekte verkleinwoord.", ["blommie", "blomtjie", "blommetjies", "blommetjie"], 3)], G),
  q("5", "5.2.4", "Gee die INTENSIEWE VORM van die woord tussen hakies. \"Pietie staan in die son, want hy is (nat).\"", 1, "language-structures", "Literal",
    "papnat (of sopnat, waternat, druipnat, deurnat, ...)", "Memo: enige EEN, bv. papnat, sopnat, papsopnat, waternat, druipnat, deurnat, watersopnat, dronknat (informeel).",
    [s(1, "Kies die korrekte intensiewe vorm van \"nat\".", ["baie nat", "natter", "nat-nat", "papnat"], 3)], G),
  q("5", "5.2.5", "Gee die KORREKTE AFRIKAANS vir die woord tussen hakies. \"Daar is 'n (message) in die bottel.\"", 1, "language-structures", "Literal",
    "boodskap", "Memo: boodskap (fonetiese spelling aanvaar).",
    [s(1, "Kies die korrekte Afrikaanse woord.", ["bootskap", "boodskap", "boodskop", "bootskop"], 1)], G),
  q("5", "5.2.6", "Skryf die sin in die ONTKENNING. \"Almal is bang vir die haai.\"", 1, "language-structures", "Literal",
    "Niemand is bang vir die haai nie.", "Memo: enige EEN: Niemand/Geeneen is bang vir die haai nie; Almal is nie bang vir die haai nie; Nie almal is bang vir die haai nie.",
    [s(1, "Kies die korrekte ontkenning.", ["Almal is nie bang vir die haai.", "Almal is bang vir die haai nie.", "Niemand is nie bang vir die haai nie.", "Niemand is bang vir die haai nie."], 3)], G),
];
