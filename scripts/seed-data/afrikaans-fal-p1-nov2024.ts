// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language) Paper 1 (Taal / Language), November 2024, National Senior
// Certificate. Paper is in Afrikaans; question text, options and model
// answers are kept in Afrikaans.
// Source: official DBE combined question paper + nasienriglyne (memo),
// mirrored on stanmorephysics.com (source_url below). Question paper = pages
// 1-16 of the combined PDF (cover, instructions, Q1-Q5); memo = pages 17-28
// (title page, then 11 pages of guidelines). Both read in full from the PDF
// text layer; visual texts checked against page renders.
//
// Cover page: PUNTE 80, TYD 2 uur (120 minutes).
// Paper structure (no choice, answer everything):
//   AFDELING A: Leesbegrip (30)  Q1  TEKS A artikel (1.1-1.17 = 24 marks),
//                                    TEKS B grafiese teks (1.18-1.23 = 6)
//   AFDELING B: Opsomming (10)   Q2  TEKS C (7 content points + 3 language)
//   AFDELING C: Taal (40)        Q3 advertensie TEKS D (10), Q4 strokiesprent
//                                    TEKS E (10), Q5 artikel TEKS F (14) en
//                                    prent TEKS G (6)
//                                                          GROOTTOTAAL: 80
//
// This is the first Afrikaans paper in the app (shared subject/topic
// definitions with the sibling Afrikaans FAL papers).
//
// Cognitive levels: the memo gives no Barrett-taxonomy labels for this
// paper, so levels were assigned from the nature of each question
// (Literal = retrieve a stated fact / apply a rule; Reorganisation = pick
// out and re-state points, summary; Inference = read between the lines or
// interpret a visual; Evaluation = opinion/value judgement). FLAG: these
// labels are not the DBE's.
//
// Topics: Q1.1-1.17 -> comprehension; Q1.18-1.23 (TEKS B, a graphic text)
// -> visual-literacy; Q2 -> summary; Q3/Q4 visual-interpretation questions
// -> visual-literacy, the grammar/word-level items on those texts ->
// language-structures; Q5 -> language-structures. Topics drama-fiela,
// short-stories and poetry are declared but unused (P1 has no literature).
//
// Grading: EVERY question is stepped-MCQ (`steps`); no marking_points are
// used anywhere. Conversion rules:
//   - one step per mark; "Noem/Gee TWEE" items = two single-mark steps whose
//     options each hold ONE memo-accepted answer plus three wrong ones
//     (never another memo-accepted answer);
//   - open "write/explain" items: the correct option is taken from the memo
//     bullets, wrong options are realistic misreadings;
//   - language items asking for a written form (samestelling, indirekte
//     rede, lydende vorm, verkleinwoord, ens.): correct option = memo
//     answer, wrong options = typical Grade 12 errors in that structure;
//   - 1.14 matching: four steps, each choosing the Column B description;
//   - 1.10.1 (letterlik/figuurlik) has only two natural answers; two extra
//     options were added so the step still has four choices;
//   - 1.10.2, 3.1.2 and 3.6.2 depend on the previous answer in the memo
//     (conditional mark); here they are independent MCQs.
//
// Summary (Q2, 10 marks): a free-text opsomming cannot be auto-marked, so
// it was converted to 10 MCQ steps. Steps 1-7 (1 mark each) = the seven
// memo content points (one per wenk, in text order): pick the correct
// own-words point from four options. Steps 8-10 (1 mark each) stand in for
// the memo's 3 language marks (own words not lifted; full sentences in the
// numbered list; 70-word limit). FLAG: the memo awards the language marks
// by how many of the 7 facts were correct, not by separate criteria; the
// three language steps are an MCQ proxy. The memo's model answer is
// transcribed in model_answer (memo's own word count: 61).
//
// Images (public/question-images/afrikaans-fal-2024-p1/, rendered from the
// QP pages, so the Stanmorephysics watermark of the source PDF is visible):
//   teks-a-artikel.png (pp3-4, the passage with line numbers; needed for
//   1.1-1.17), teks-b-grafiese-teks.png (p7), teks-c-loopbaan.png (p9, the
//   summary text), teks-d-advertensie.png (p10), teks-e-strokiesprent.png
//   (p12), teks-g-prent.png (p16). TEKS F (article with embedded language
//   items) is not imaged: each 5.1.x question quotes its own sentence.
//
// FLAGS for review:
//   - Memos accept several wordings for most open items; only one accepted
//     answer is offered per step.
//   - Memo 5.1.10 accepts "gevaarlike/onveilige"; only "gevaarlike" offered.
//   - Memo 5.2.2 shows the agent ("deur die kinders") as optional; the
//     correct option includes it (one of the two memo-accepted forms).
//   - Cognitive-level labels are my own (see above).

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/afrikaans-fal-2024-p1";

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
  paper_number: "P1",
  duration_minutes: 120,
  total_marks: 80,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2025/04/NSC-Afrikaans-FAL-Grade-12-November-2024-P1-and-Memo.pdf" as string | null,
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

type Lvl = "Literal" | "Reorganisation" | "Inference" | "Evaluation";

// Single-mark, single-step MCQ. Options are listed in display order; the
// correct one is marked with a leading "*" (stripped here). The numeric
// argument before `notes` is unused legacy position and is ignored.
function one(
  number: string, sub: string, text: string, topicKey: string, level: Lvl,
  desc: string, opts: string[], _pos: number,
  notes: string, image?: string,
): QuestionSeed {
  const correctIndex = opts.findIndex((o) => o.startsWith("*"));
  if (correctIndex < 0 || opts.length !== 4) throw new Error(`bad options for ${sub}`);
  const options = opts.map((o) => (o.startsWith("*") ? o.slice(1) : o));
  return {
    number, sub_number: sub, text, marks: 1, topicKey, cognitiveLevelName: level,
    model_answer: options[correctIndex], marking_notes: notes,
    steps: [{ marks: 1, description: desc, options, correctIndex }],
    ...(image ? { image_url: image } : {}),
  };
}

const A = `${IMG}/teks-a-artikel.png`;
const B = `${IMG}/teks-b-grafiese-teks.png`;
const C = `${IMG}/teks-c-loopbaan.png`;
const D = `${IMG}/teks-d-advertensie.png`;
const E = `${IMG}/teks-e-strokiesprent.png`;
const G = `${IMG}/teks-g-prent.png`;

const colB = {
  A: "A: ontvang die hoogste erkenning vir 'n eetplek",
  B: "B: beweeg in koninklike kringe",
  C: "C: gee vir siek mense nuwe hoop op lewe",
  D: "D: bewys dat \"anders\" ook mooi kan wees",
  E: "E: maak geen onderskeid tussen mense wat hulp nodig het nie",
};

export const questions: QuestionSeed[] = [
  // ============ AFDELING A: LEESBEGRIP (30) ============
  {
    number: "1", sub_number: "1.1",
    text: "TEKS A. VOLTOOI die sin deur woorde uit paragraaf 1 in te vul. Zozi Tunzi, Siya Kolisi en Pretty Yende is mense van (1.1.1) ... wat regoor die wêreld (1.1.2) ... is.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "1.1.1 Suid-Afrika/(R)SA; 1.1.2 bekend",
    marking_notes: "Memo: 1 punt elk.",
    image_url: A,
    steps: [
      { marks: 1, description: "1.1.1 Zozi, Siya en Pretty is mense van ...", options: ["Amerika", "Suid-Afrika", "Frankryk", "Europa"], correctIndex: 1 },
      { marks: 1, description: "1.1.2 ... wat regoor die wêreld ... is.", options: ["gekroon", "gebore", "bekend", "vergeet"], correctIndex: 2 },
    ],
  },
  one("1", "1.2", "TEKS A. Watter siekte het veroorsaak dat dr. Chris Barnard moes ophou werk?", "comprehension", "Literal",
    "Watter siekte het veroorsaak dat Barnard moes ophou werk?", ["*artritis", "asma", "kanker", "hartsiekte"], 0, "Memo: artritis.", A),
  one("1", "1.3", "TEKS A. Watter EEN woord in paragraaf 3 sê vir ons dat Gift of the Givers 'n organisasie is wat mense help?", "comprehension", "Literal",
    "Watter een woord in paragraaf 3 sê dat dit 'n organisasie is wat mense help?", ["stigter", "bekendste", "*humanitêre", "politieke"], 0, "Memo: \"humanitêre\" (een woord).", A),
  {
    number: "1", sub_number: "1.4",
    text: "TEKS A. In watter situasies gaan Gift of the Givers mense help? Noem TWEE.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Enige TWEE: oorloë; vloede; aardbewings; rampe/natuurrampe.",
    marking_notes: "Memo: enige twee. Hier twee stappe, elk met een memo-antwoord.",
    image_url: A,
    steps: [
      { marks: 1, description: "Noem EEN situasie waarin Gift of the Givers help.", options: ["droogtes", "oorloë", "brande", "bendegeweld"], correctIndex: 1 },
      { marks: 1, description: "Noem 'n TWEEDE situasie waarin Gift of the Givers help.", options: ["hongersnood", "skoolgeldkrisisse", "aardbewings", "brandstoftekorte"], correctIndex: 2 },
    ],
  },
  one("1", "1.5", "TEKS A. Vir watter fliek het Charlize Theron 'n Oscar gewen?", "comprehension", "Literal",
    "Vir watter fliek het Charlize Theron 'n Oscar gewen?", ["Hancock", "Atomic Blonde", "*Monster", "Mad Max: Fury Road"], 0, "Memo: Monster.", A),
  one("1", "1.6", "TEKS A. Waaruit lei ons af dat sjef Jan Hendrik trots is op Suid-Afrika se kos?", "comprehension", "Inference",
    "Waaruit lei ons af dat hy trots is op Suid-Afrika se kos?",
    ["*Hy het Suid-Afrikaanse geregte soos melktert, biltong en mosbolletjies aan Europa se mense bekend gestel.", "Hy het aan die Universiteit van Stellenbosch studeer.", "Hy het dikwels oorsee gereis.", "Hy het vir 'n kostydskrif gewerk."], 0,
    "Memo: enige een van die bullets (Europa bekend gestel aan SA-kos ...).", A),
  one("1", "1.7", "TEKS A. Watter boodskap wil Zozibini Tunzi graag aan ander jong meisies oordra?", "comprehension", "Inference",
    "Watter boodskap wil Zozi aan jong meisies oordra?",
    ["*Dat elkeen mooi is.", "Dat jy kort hare moet hê om mooi te wees.", "Dat net skoonheidskoninginne mooi is.", "Dat jy hard moet werk om 'n kroon te wen."], 0, "Memo: dat elkeen/hulle mooi is (ens.).", A),
  one("1", "1.8", "TEKS A. Hoe verskil Zozi se tydperk as Mejuffrou Heelal van ander wenners se tydperke?", "comprehension", "Inference",
    "Hoe verskil Zozi se tydperk as Mejuffrou Heelal?",
    ["Sy het die kroon net 'n paar maande gedra.", "*Sy het die kroon vir twee jaar gedra.", "Sy het die kroon in 2020 ontvang.", "Sy het kort hare gehad."], 0, "Memo: Zozi het die kroon vir twee jaar gedra / langer as gewoonlik.", A),
  one("1", "1.9", "TEKS A. VOLTOOI die sin deur net EEN woord in te vul. Die (39) in paragraaf 7 verwys na hoe ... Pretty Yende is.", "comprehension", "Inference",
    "Die (39) verwys na hoe ... Pretty Yende is.", ["*oud", "ryk", "gewild", "lank"], 0, "Memo: oud (of jonk).", A),
  one("1", "1.10.1", "TEKS A. \"... musiek is in hierdie kinders se bloed!\" (Reël 44). Word hierdie woorde binne hierdie konteks LETTERLIK of FIGUURLIK bedoel?", "comprehension", "Inference",
    "Letterlik of figuurlik?",
    ["*Figuurlik: dit beteken hulle het musiek baie lief.", "Letterlik: hulle bloed bevat werklik musiek.", "Letterlik: dit beskryf 'n siekte in die gesin.", "Figuurlik: dit beteken hulle haat musiek."], 0,
    "Memo: figuurlik. FLAG: opsies 3 en 4 bygevoeg om vier keuses te kry.", A),
  one("1", "1.10.2", "TEKS A. Motiveer jou antwoord op VRAAG 1.10.1.", "comprehension", "Inference",
    "Motiveer waarom die woorde figuurlik bedoel word.",
    ["Hulle almal is dokters wat bloed toets.", "Musiek vloei werklik deur hulle are.", "*Hulle het met musiek grootgeword.", "Hulle het dieselfde bloedgroep."], 0, "Memo: enige een (grootgeword met musiek / passie / talent / loopbaan in musiek).", A),
  one("1", "1.11", "TEKS A. Pretty Yende het geen formele musiekopleiding gehad nie. Motiveer waarom hierdie stelling ONWAAR is.", "comprehension", "Literal",
    "Waarom is die stelling onwaar?",
    ["*Sy het aan die SA College of Music en die Universiteit van Kaapstad studeer.", "Sy het net kerkliedere saam met haar ouma gesing.", "Sy het van haar broers geleer om platejoggie te wees.", "Sy het net by die kerk sangonderrig gekry."], 0, "Memo: sy het (musiek) studeer / aan SA College of Music / UK studeer.", A),
  one("1", "1.12", "TEKS A. Hoe het die Suid-Afrikaanse regering Pretty vereer?", "comprehension", "Literal",
    "Hoe het die regering Pretty vereer?",
    ["Hulle het haar gevra om by die kroning van Koning Charles III te sing.", "Hulle het 'n Oscar aan haar toegeken.", "*Hulle het die Silwer Orde van Ikhamanga aan haar toegeken.", "Hulle het haar as Mejuffrou Heelal gekroon."], 0, "Memo: Silwer Orde van Ikhamanga.", A),
  {
    number: "1", sub_number: "1.13",
    text: "TEKS A. Gee TWEE redes waarom Siya Kolisi se lewe as kind nie maklik was nie.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Enige TWEE: sy ouers was baie jonk/ouma het hom grootgemaak; sy ouma is dood toe hy 12 was; hy het in 'n omgewing van armoede/geweld/misdaad grootgeword.",
    marking_notes: "Memo: enige twee. Twee stappe, elk met 'n ander memo-rede.",
    image_url: A,
    steps: [
      { marks: 1, description: "Rede 1", options: ["Sy ouers was baie jonk en sy ouma het hom grootgemaak.", "Sy ouers het hom in 'n weeshuis gelos.", "Hy het by sy pa in Frankryk grootgeword.", "Hy het sy skool op 12 verlaat."], correctIndex: 0 },
      { marks: 1, description: "Rede 2", options: ["Hy het in 'n ryk omgewing grootgeword en was eensaam.", "Hy moes as kind rugby laat vaar.", "Hy het in 'n omgewing van armoede, geweld en misdaad grootgeword.", "Hy het as kind in 'n kinderhuis gebly."], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.14",
    text: "TEKS A. Kies 'n beskrywing uit KOLOM B wat by die persoon in KOLOM A pas. KOLOM B: A ontvang die hoogste erkenning vir 'n eetplek; B beweeg in koninklike kringe; C gee vir siek mense nuwe hoop op lewe; D bewys dat \"anders\" ook mooi kan wees; E maak geen onderskeid tussen mense wat hulp nodig het nie.",
    marks: 4, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "1.14.1 C; 1.14.2 E; 1.14.3 A; 1.14.4 B",
    marking_notes: "Memo: 1 punt elk. Letter en/of volledige antwoord aanvaar.",
    image_url: A,
    steps: [
      { marks: 1, description: "1.14.1 Dr. Chris Barnard", options: [colB.C, colB.A, colB.B, colB.D], correctIndex: 0 },
      { marks: 1, description: "1.14.2 Dr. Imtiaz Sooliman", options: [colB.A, colB.B, colB.E, colB.D], correctIndex: 2 },
      { marks: 1, description: "1.14.3 Sjef Jan Hendrik", options: [colB.E, colB.A, colB.C, colB.D], correctIndex: 1 },
      { marks: 1, description: "1.14.4 Pretty Yende", options: [colB.A, colB.C, colB.B, colB.D], correctIndex: 2 },
    ],
  },
  one("1", "1.15", "TEKS A. Lees weer paragraaf 3. Wat sou jy vir dr. Sooliman en sy organisasie sê as jy die kans sou kry om met hulle te praat?", "comprehension", "Evaluation",
    "Wat sou jy vir dr. Sooliman sê?",
    ["*Ek sou vir hulle dankie sê vir die goeie werk wat hulle doen.", "Ek sou vir hulle sê hulle moet net Suid-Afrikaners help.", "Ek sou hulle vra om my geld te gee.", "Ek sou sê hulle bestee te veel tyd aan ander mense."], 0,
    "Memo: enige een, bv. dankie/respek/trots/aanmoediging.", A),
  one("1", "1.16", "TEKS A. Watter les oor keuses leer jy by Siya Kolisi?", "comprehension", "Evaluation",
    "Watter les oor keuses leer jy by Siya?",
    ["Jy moet jou ouers blameer vir swak omstandighede.", "*Moenie dat jou omstandighede jou negatief maak nie; kies iets positiefs soos rugby.", "Jy kan net sukses behaal as jy ryk gebore is.", "Jy moet jou gemeenskap verlaat om te slaag."], 0,
    "Memo: enige een, bv. jou verlede bepaal nie jou toekoms nie / goeie keuses verander jou lewe.", A),
  one("1", "1.17", "TEKS A. \"Soveel individue, soveel sukses ...\" (Reël 73). Waarom is dit goed dat party van die individue erkenning gee aan hulle oumas?", "comprehension", "Evaluation",
    "Waarom is dit goed dat hulle erkenning gee aan hulle oumas?",
    ["Dit maak hulle bekender as ander mense.", "*Dit wys dat hulle oumas 'n belangrike rol in hulle lewens gespeel het.", "Dit bewys dat oumas vir hulle geld gegee het.", "Dit wys dat net oumas sukses kan bring."], 0, "Memo: enige een, bv. oumas het 'n belangrike rol gespeel / hulle het nie vergeet waar hulle vandaankom nie.", A),

  // TEKS B (graphic text)
  one("1", "1.18", "TEKS B. Watter faktor is vir mense die belangrikste wanneer hulle kos aanlyn wil bestel?", "visual-literacy", "Literal",
    "Watter faktor is die belangrikste?", ["*Gerief", "Prys", "Tyd", "Verskeidenheid"], 0, "Memo: gerief (20,5%).", B),
  one("1", "1.19", "TEKS B. Kies die KORREKTE antwoord: Wanneer daar 'n verskeidenheid is, beteken dit dat mense ...", "visual-literacy", "Literal",
    "Wat beteken verskeidenheid?",
    ["elke keer dieselfde items moet kies.", "net een item kan bestel.", "*uit verskillende items kan kies.", "slegs goedkoop items kan koop."], 0, "Memo: uit verskillende items kan kies.", B),
  one("1", "1.20", "TEKS B. Wat móét jy op jou foon hê as jy kos aanlyn wil bestel?", "visual-literacy", "Literal",
    "Wat móét jy op jou foon hê?", ["'n bankkaartleser", "*die app", "'n gedrukte spyskaart", "'n radio"], 0, "Memo: die app/toepassing.", B),
  one("1", "1.21", "TEKS B. Kyk na die meisie wat by die eetplek werk. Waarom kan ons sê dat sy 'n goeie werker by hierdie eetplek is?", "visual-literacy", "Inference",
    "Waarom is sy 'n goeie werker?",
    ["Sy lyk onnet en haastig.", "Sy staan met haar arms gevou en wag.", "*Sy is vriendelik en glimlag.", "Sy kyk nie na die kliënte nie."], 0, "Memo: enige een, bv. vriendelik/glimlag, netjies, gereed om te bedien.", B),
  one("1", "1.22", "TEKS B. Verduidelik waarom dit goeie raad is om geduldig te wees terwyl jy vir jou kos wag.", "visual-literacy", "Evaluation",
    "Waarom is dit goeie raad om geduldig te wees?",
    ["Jou geld word terugbetaal as dit laat is.", "*Die afleweraar het dalk baie bestellings om af te lewer.", "Jy kan die bestelling sonder koste kanselleer.", "Die eetplek maak altyd binne vyf minute klaar."], 0, "Memo: enige een, bv. baie bestellings / druk verkeer / voorbereiding neem lank.", B),
  one("1", "1.23", "TEKS B. Waarom kan jy 'n grafiese teks soos hierdie een makliker verstaan?", "visual-literacy", "Evaluation",
    "Waarom is 'n grafiese teks makliker om te verstaan?",
    ["Dit bevat baie lang paragrawe met moeilike woorde.", "Dit het geen prentjies of syfers nie.", "Dit is in 'n vreemde taal geskryf.", "*Daar is genoeg prentjies om te sê waaroor dit gaan."], 0, "Memo: enige een, bv. min woorde / genoeg prentjies / stapsgewys.", B),

  // ============ AFDELING B: OPSOMMING (10) ============
  {
    number: "2", sub_number: null,
    text: "TEKS C: HOE KIES EK DIE REGTE LOOPBAAN? Jy is amper klaar met skool. Som die SEWE wenke WAT JOU SAL HELP OM 'N LOOPBAAN TE KIES in jou EIE VOLSINNE op (maksimum 70 woorde). Kies by elke stap die korrekte opsommingspunt; die laaste drie stappe toets die taalaspekte van 'n goeie opsomming.",
    marks: 10, topicKey: "summary", cognitiveLevelName: "Reorganisation",
    model_answer: "1. Jy moet weet waarin jy belangstel. 2. Neem jou vaardighede in ag. 3. Vind uit of daar werksgeleenthede vir jou sal wees. 4. Vind uit watter tipe opleiding jy gaan nodig hê. 5. Maak seker jy weet wat jou doel in die lewe is. 6. Vind uit watter salaris jy gaan verdien. 7. Maak seker dat jy weet wat jou werk op 'n daaglikse basis gaan wees. (Memo: WOORDE: 61 of meer/minder.)",
    marking_notes: "Memo: 7 punte vir 7 feite + 3 taalpunte (1-3 feite: 1; 4-5: 2; 6-7: 3; woordelikse aanhalings word gepenaliseer). FLAG: omgeskakel na MCQ; taalpunte as drie aparte stappe.",
    image_url: C,
    steps: [
      { marks: 1, description: "Punt 1 (belangstelling)", options: ["Jy moet weet waarin jy belangstel.", "Jy moet net kies wat jou vriende kies.", "Jy moet die loopbaan kies wat jou ouers gekies het.", "Jy moet enige werk aanvaar."], correctIndex: 0 },
      { marks: 1, description: "Punt 2 (vaardighede)", options: ["Jy moet jou vaardighede ignoreer.", "Neem jou vaardighede in ag.", "Jy moet net aan jou drome dink.", "Kies 'n loopbaan wat maklik is."], correctIndex: 1 },
      { marks: 1, description: "Punt 3 (werksgeleenthede)", options: ["Kies 'n loopbaan sonder om te kyk of daar werk is.", "Vra vir 'n beurs by die skool.", "Vind uit of daar werksgeleenthede vir jou sal wees.", "Wag tot iemand vir jou werk gee."], correctIndex: 2 },
      { marks: 1, description: "Punt 4 (opleiding)", options: ["Volg altyd 'n graadkursus.", "Vermy enige opleiding.", "Gaan soek net praktiese werk.", "Vind uit watter tipe opleiding jy gaan nodig hê."], correctIndex: 3 },
      { marks: 1, description: "Punt 5 (doel in die lewe)", options: ["Jou doel in die lewe maak nie saak nie.", "Maak seker jy weet wat jou doel in die lewe is.", "Kies die loopbaan wat die naaste is.", "Volg jou vriende se doelwitte."], correctIndex: 1 },
      { marks: 1, description: "Punt 6 (geld)", options: ["Vind uit watter salaris jy gaan verdien.", "Geld is onbelangrik.", "Kies die werk met die kortste ure.", "Werk net vir ander mense se geld."], correctIndex: 0 },
      { marks: 1, description: "Punt 7 (daaglikse werk)", options: ["Lees net wat die internet sê.", "Maak seker jy weet wat jou werk daagliks sal behels.", "Vra niemand uit oor die werk nie.", "Glo alle inligting sonder om dit te kontroleer."], correctIndex: 1 },
      { marks: 1, description: "Taal 1: eie woorde", options: ["Kopieer die sinne woordeliks uit die teks.", "Skryf die punte in jou eie woorde.", "Skryf die hele teks oor.", "Gebruik net die eerste sin van elke paragraaf."], correctIndex: 1 },
      { marks: 1, description: "Taal 2: volsinne en puntsgewys", options: ["Skryf die punte as losse woorde.", "Skryf een lang paragraaf.", "Skryf die punte in volsinne, genommer 1 tot 7.", "Skryf die punte sonder nommers."], correctIndex: 2 },
      { marks: 1, description: "Taal 3: woordgrens", options: ["Hoogstens 70 woorde.", "Hoogstens 150 woorde.", "Hoogstens 100 woorde.", "Daar is geen grens nie."], correctIndex: 0 },
    ],
  },

  // ============ AFDELING C: TAAL (40) ============
  // VRAAG 3: TEKS D advertensie
  one("3", "3.1.1", "TEKS D. Hou die teikengroep vir hierdie advertensie in gedagte. Met wie word daar dirék in hierdie advertensie gepraat?", "visual-literacy", "Literal",
    "Met wie word direk gepraat?", ["*Ma's", "Pa's", "Kinders", "Onderwysers"], 0, "Memo: (alle) ma's.", D),
  one("3", "3.1.2", "TEKS D. Verduidelik waarom ons kan sê dat hierdie teikengroep 'n voorbeeld van stereotipering is.", "visual-literacy", "Inference",
    "Waarom is die teikengroep stereotipering?",
    ["Alle ma's maak toebroodjies vir hulle gesinne.", "Net kinders eet toebroodjies.", "Ma's koop nooit brood by Checkers nie.", "*Nie alle huise het 'n ma wat toebroodjies maak nie; party pa's maak ook kos."], 0, "Memo: enige een, bv. nie alle huise het 'n ma / pa's maak ook kos.", D),
  one("3", "3.2", "TEKS D. Watter inligting omtrent hierdie brood maak dat mense dit sal wil koop?", "visual-literacy", "Literal",
    "Watter inligting maak dat mense dit wil koop?",
    ["Die brood is net in een winkel beskikbaar.", "Die brood word gratis weggegee.", "Die brood is baie duur maar van hoë gehalte.", "*Die brood kos slegs R10."], 0, "Memo: enige een, bv. goedkoop/R10, vars, by verskillende winkels.", D),
  one("3", "3.3", "TEKS D. Kies die KORREKTE antwoord: Met hierdie duimpie wys die adverteerder vir ons dat mense ...", "visual-literacy", "Inference",
    "Wat wys die duimpie?",
    ["'n fout sal maak om dié brood te gaan koop.", "dié brood by 'n ander winkel moet koop.", "*nie 'n fout sal maak om dié brood te gaan koop nie.", "geen keuse het om dit te koop nie."], 0, "Memo: nie 'n fout sal maak om dié brood te gaan koop nie.", D),
  one("3", "3.4", "TEKS D. Waarom, dink jy, was dit slim van die adverteerder om die foto van die dogtertjie te gebruik?", "visual-literacy", "Evaluation",
    "Waarom was die foto van die dogtertjie slim?",
    ["Sy is die eienaar van Albany.", "*Haar gelukkige gesig oorreed mense om ook die brood te koop.", "Sy wys hoe die brood gemaak word.", "Dit wys dat die brood net vir kinders is."], 0, "Memo: enige een, bv. manipuleer/trek aandag.", D),
  one("3", "3.5", "TEKS D. Gee die INTENSIEWE VORM van \"goedkoop\".", "language-structures", "Literal",
    "Intensiewe vorm van \"goedkoop\"", ["*spotgoedkoop", "goedkoper", "goedkoopste", "die goedkoop"], 0, "Memo: spotgoedkoop.", D),
  one("3", "3.6.1", "TEKS D. Kyk na die inligting onder die prente. Skryf VIER OPEENVOLGENDE WOORDE neer wat 'n mening is.", "language-structures", "Literal",
    "Watter vier opeenvolgende woorde is 'n mening?",
    ["Koop dit by Checkers", "Slegs R10 by Checkers", "*Die héél lekkerste toebroodjies", "kontak Albany se kliëntediens"], 0, "Memo: \"Die heel lekkerste toebroodjies\"/\"lekkerste toebroodjies vir jou\".", D),
  one("3", "3.6.2", "TEKS D. Motiveer jou antwoord op VRAAG 3.6.1.", "language-structures", "Inference",
    "Waarom is dit 'n mening?",
    ["Dit kan met navorsing bewys word.", "Almal stem saam dat Albany die lekkerste brood maak.", "*Nie almal sal dink dit is die lekkerste nie; dit is die adverteerder se eie opinie.", "Die woord lekkerste kan gemeet word."], 0, "Memo: enige een, bv. eie opinie / nie almal sal saamstem nie.", D),
  one("3", "3.7", "TEKS D. Gee EEN WOORD vir \"man en kinders\" binne die konteks van hierdie advertensie.", "language-structures", "Literal",
    "Een woord vir \"man en kinders\"", ["*gesin", "kollegas", "buurt", "klasmaats"], 0, "Memo: gesin(slede)/familie/huisgesin/huismense.", D),
  one("3", "3.8", "TEKS D. Waaruit kan ons aflei dat Albany graag wil weet wat mense van hulle produk dink?", "visual-literacy", "Inference",
    "Waaruit lei ons af dat Albany wil weet wat mense dink?",
    ["Albany lys die winkels waar die brood verkoop word.", "Albany sê die brood kos slegs R10.", "Albany gebruik 'n foto van 'n dogtertjie.", "*Albany verskaf 'n selnommer en e-posadres waar mense kommentaar kan lewer."], 0, "Memo: enige een, bv. kontakbesonderhede verskaf / nooi mense om kommentaar te lewer.", D),

  // VRAAG 4: TEKS E strokiesprent
  one("4", "4.1", "TEKS E, RAAMPIE 1. Hoe kan ons sien dat Jeremy nie in die vorm belangstel nie? Noem EEN visuele teken.", "visual-literacy", "Inference",
    "Wat is 'n visuele teken dat Jeremy nie belangstel nie?",
    ["Hy kyk aandagtig na die vorm.", "Hy glimlag vir sy ma.", "Hy lees die vorm vir sy ma voor.", "*Hy maak nie oogkontak met sy ma nie en kyk na sy tas."], 0, "Memo: enige een, bv. druk die vorm in ma se gesig / kyk nie na ma nie.", E),
  one("4", "4.2", "TEKS E, RAAMPIE 1. Skryf die VERKORTING tussen hakies in RAAMPIE 1 voluit: (Hier's).", "language-structures", "Literal",
    "Hier's voluit", ["*Hier is", "Hier was", "Hier het", "Hier sal"], 0, "Memo: Hier is.", E),
  one("4", "4.3.1", "TEKS E, RAAMPIE 2. Jeremy se ma se reaksie sê vir ons dat sy ...", "visual-literacy", "Inference",
    "Wat sê die ma se reaksie?",
    ["jammer gevoel het vir Jeremy.", "bly was vir Jeremy.", "*haar vir Jeremy vererg het.", "bang was vir Jeremy."], 0, "Memo: haar vir Jeremy vererg het.", E),
  one("4", "4.3.2", "TEKS E, RAAMPIE 2. Motiveer jou antwoord op 4.3.1 deur te verduidelik wat die ma DOEN.", "visual-literacy", "Inference",
    "Wat doen die ma?",
    ["Sy vat die vorm saggies uit sy hande.", "Sy begin die vorm self invul.", "Sy omhels vir Jeremy.", "*Sy stoot die vorm terug na Jeremy toe en praat hard met hom."], 0, "Memo: enige een (stoot vorm terug / mond wyd oop / praat hard).", E),
  one("4", "4.3.3", "TEKS E, RAAMPIE 2. Die gebruik van die ellips in Jeremy se woorde sê vir ons dat hy ...", "language-structures", "Inference",
    "Wat sê die ellips?",
    ["kwaad is vir sy ma.", "baie bly is oor sy ma se woorde.", "*nie seker is wat hy moet doen nie.", "vir sy ma wil lag."], 0, "Memo: nie seker is wat hy moet doen nie.", E),
  one("4", "4.4", "TEKS E, RAAMPIE 3. Hoe weet ons dat Jeremy se ma nou anders teenoor hom optree?", "visual-literacy", "Inference",
    "Hoe tree sy anders op?",
    ["Sy skree nog harder.", "Sy loop weg sonder om iets te sê.", "*Sy praat sagter en het haar hand op Jeremy se skouer.", "Sy gee die vorm vir iemand anders."], 0, "Memo: enige een, bv. praat sagter / hand op skouer / nader aan hom.", E),
  one("4", "4.5", "TEKS E, RAAMPIE 4. Jeremy se ma sê vir hom dat hy op sy eie bene moet staan. Dit beteken dat hy ...", "visual-literacy", "Inference",
    "Kies die korrekte voltooiing.",
    ["A: meer oefening moet kry.", "*B: moet leer om selfstandig te wees.", "C: min tyd het om die vorm te voltooi.", "D: moet staan sodat hy die vorm netjies kan invul."], 0, "Memo: B (moet leer om selfstandig te wees).", E),
  one("4", "4.6", "TEKS E, RAAMPIE 5. Hoe wys die visuele in RAAMPIE 5 dat Jeremy nie daaraan gewoond is om vorms in te vul nie?", "visual-literacy", "Inference",
    "Hoe wys die visuele dit?",
    ["Hy skryf sy naam vinnig en netjies.", "*Hy sukkel om sy naam reg te skryf en krap dit dood.", "Hy los die vorm blanko en loop weg.", "Hy skryf met sy linkerhand."], 0, "Memo: enige een, bv. sukkel om naam te skryf / krap dit dood.", E),
  one("4", "4.7", "TEKS E, RAAMPIE 6. Jeremy se ma se optrede is ironies. Jeremy se ma wil hê hy moet die vorm self invul, maar ...", "visual-literacy", "Evaluation",
    "Voltooi die sin.",
    ["sy gaan weg sodat hy alleen kan werk.", "sy beloon hom as hy klaar is.", "sy sê sy vertrou hom volkome.", "*sy loer nog steeds oor sy skouer terwyl hy dit invul."], 0, "Memo: enige een, bv. sy loer nog oor sy skouer / los hom nie alleen nie.", E),
  one("4", "4.8", "TEKS E. Skryf die sin oor as 'n VRAAGSIN: Dit is die mooiste wat jy kan skryf.", "language-structures", "Literal",
    "Korrekte vraagsin",
    ["Dit is die mooiste wat jy kan skryf?", "Is dit die mooiste wat kan jy skryf?", "*Is dit die mooiste wat jy kan skryf?", "Is dit die mooiste wat jy kan skryf."], 0, "Memo: Is dit die mooiste wat jy kan skryf? (vraagteken verplig).", E),

  // VRAAG 5.1: TEKS F
  one("5", "5.1.1", "TEKS F (Drome vir my boekklub). Gee die korrekte SAMESTELLING van die woorde tussen hakies: Thandeka Mandoyi van Phillipi se (liefde+projek) is die Chosi Chosi Boekklub.", "language-structures", "Literal",
    "Samestelling van liefde + projek", ["*liefdesprojek", "liefdeprojek", "liefdes projek", "liefdsprojek"], 0, "Memo: liefdesprojek."),
  one("5", "5.1.2", "TEKS F. Skryf die GETAL tussen hakies as 'n woord: Saterdae kom sowat (30) kinders in 'n hut naby Thandeka se huis bymekaar.", "language-structures", "Literal",
    "30 as woord", ["*dertig", "dertien", "dertigste", "drie"], 0, "Memo: dertig."),
  one("5", "5.1.3", "TEKS F. Vul die ontbrekende VOORSETSEL in: Dan luister hulle ... die stories wat sy vir hulle voorlees.", "language-structures", "Literal",
    "Ontbrekende voorsetsel", ["aan", "op", "*na", "in"], 0, "Memo: na."),
  one("5", "5.1.4", "TEKS F. Skryf die sin in die INDIREKTE REDE (gebruik \"dat\"): Thandeka sê: \"My boekklub is die enigste leesplek wat die kinders het.\"", "language-structures", "Literal",
    "Korrekte indirekte rede",
    ["Thandeka sê dat my boekklub die enigste leesplek is wat die kinders het.", "Thandeka sê dat haar boekklub die enigste leesplek wat die kinders het is.", "*Thandeka sê dat haar boekklub die enigste leesplek is wat die kinders het.", "Thandeka sê dat haar boekklub was die enigste leesplek wat die kinders het."], 0, "Memo: Thandeka sê dat haar boekklub die enigste leesplek is wat die kinders het."),
  one("5", "5.1.5", "TEKS F. Skryf die gedeelte tussen hakies in die INFINITIEF: Thandeka het in 2019 begin (vir haar nefies en hulle maatjies uit 'n boek lees).", "language-structures", "Literal",
    "Korrekte infinitief",
    ["Thandeka het in 2019 begin vir haar nefies en hulle maatjies uit 'n boek om te lees.", "*Thandeka het in 2019 begin om vir haar nefies en hulle maatjies uit 'n boek te lees.", "Thandeka het in 2019 begin om vir haar nefies en hulle maatjies uit 'n boek lees.", "Thandeka het in 2019 begin te vir haar nefies en hulle maatjies uit 'n boek lees."], 0, "Memo: ... begin om vir haar nefies en hulle maatjies uit 'n boek te lees."),
  one("5", "5.1.6", "TEKS F. Kies die KORREKTE antwoord: Hulle het dit baie (verniet/geniet) en wou net meer hoor.", "language-structures", "Literal",
    "Korrekte woord", ["verniet", "geniete", "genieten", "*geniet"], 0, "Memo: geniet."),
  one("5", "5.1.7", "TEKS F. Skryf die sin in die VERLEDE TYD: Verlede jaar besluit sy om haar leeskring uit te brei.", "language-structures", "Literal",
    "Korrekte verlede tyd",
    ["Verlede jaar besluit sy het om haar leeskring uit te brei.", "Verlede jaar het sy besluit om haar leeskring uitgebrei.", "*Verlede jaar het sy besluit om haar leeskring uit te brei.", "Verlede jaar het sy besluit haar leeskring uit te brei het."], 0, "Memo: Verlede jaar het sy besluit ... / Sy het verlede jaar besluit ..."),
  {
    number: "5", sub_number: "5.1.8",
    text: "TEKS F. Verbind die twee sinne met die VOEGWOORD tussen hakies: Daar het so baie kinders gekom. Sy het die bure se hut as haar leeskamer ingerig. (Aangesien)",
    marks: 2, topicKey: "language-structures", cognitiveLevelName: "Literal",
    model_answer: "Aangesien daar so baie kinders gekom het, het sy die bure se hut as haar leeskamer ingerig. / Sy het die bure se hut as haar leeskamer ingerig aangesien daar so baie kinders gekom het.",
    marking_notes: "Memo: 1 punt vir elke korrekte sin (twee moontlike sinsvolgordes). Hier twee stappe, een per sinvolgorde.",
    steps: [
      { marks: 1, description: "Voegwoord aan die begin van die sin", options: ["Aangesien daar so baie kinders gekom het, sy het die bure se hut as haar leeskamer ingerig.", "Aangesien daar het so baie kinders gekom, het sy die bure se hut as haar leeskamer ingerig.", "Aangesien daar so baie kinders gekom het, het sy die bure se hut as haar leeskamer ingerig.", "Aangesien daar so baie kinders gekom het het sy die bure se hut as haar leeskamer ingerig."], correctIndex: 2 },
      { marks: 1, description: "Voegwoord in die middel van die sin", options: ["Sy het die bure se hut as haar leeskamer ingerig aangesien daar het so baie kinders gekom.", "Sy het die bure se hut as haar leeskamer ingerig aangesien daar so baie kinders gekom.", "Sy het die bure se hut as haar leeskamer ingerig aangesien daar so baie kinders gekom het.", "Sy het die bure se hut as haar leeskamer ingerig aangesien daar so baie kinders het gekom."], correctIndex: 2 },
    ],
  },
  one("5", "5.1.9", "TEKS F. Verdeel die woord tussen hakies korrek in LETTERGREPE: Daar is 'n plank op (bakstene).", "language-structures", "Literal",
    "Lettergreepverdeling", ["baks-te-ne", "bakst-e-ne", "ba-kste-ne", "*bak-ste-ne"], 0, "Memo: bak-ste-ne."),
  one("5", "5.1.10", "TEKS F. Gee die ANTONIEM van die woord tussen hakies: Phillipi is 'n (veilige) plek vir kinders.", "language-structures", "Literal",
    "Antoniem van \"veilige\"", ["beskermde", "*gevaarlike", "rustige", "gesonde"], 0, "Memo: gevaarlike/onveilige."),
  one("5", "5.1.11", "TEKS F. Gee die KORREKTE Afrikaans vir \"gangs\".", "language-structures", "Literal",
    "Afrikaans vir \"gangs\"", ["*bendes", "bende", "bendeles", "gangs"], 0, "Memo: bendes/bendelede/gangsters/tsotsi's."),
  one("5", "5.1.12", "TEKS F. Gebruik die HOMONIEM van die woord \"deur\" in 'n sin sodat die betekenis duidelik is (die woord moet 'n ánder betekenis hê as in die artikel).", "language-structures", "Reorganisation",
    "Sin met homoniem van \"deur\"",
    ["Deur harde werk het sy geslaag.", "Hy is deur die onderwyser gestraf.", "Sy is deur haar ouma grootgemaak.", "*Die deur is nie gesluit nie."], 0, "Memo: enige sin waar \"deur\" 'n ander betekenis het, bv. Die deur is nie gesluit nie."),
  one("5", "5.1.13", "TEKS F. Gee die VERGROTENDE TRAP van die woord tussen hakies: Dit wys vir hulle dat daar (goed) dinge buite hulle eie wêreld is.", "language-structures", "Literal",
    "Vergrotende trap van \"goed\"", ["gooder", "beste", "*beter", "meer goed"], 0, "Memo: beter."),

  // VRAAG 5.2: TEKS G prent
  one("5", "5.2.1", "TEKS G. Gee die MEERVOUD van die woord tussen hakies: Die kinders se (hemp) lyk dieselfde.", "language-structures", "Literal",
    "Meervoud van \"hemp\"", ["hempe", "hemps", "hempies", "*hemde"], 0, "Memo: hemde.", G),
  one("5", "5.2.2", "TEKS G. Skryf die sin in die LYDENDE VORM: Die kinders gooi die gemors in sakke.", "language-structures", "Literal",
    "Korrekte lydende vorm",
    ["Die gemors is deur die kinders in sakke gooi.", "*Die gemors word deur die kinders in sakke gegooi.", "Die kinders word die gemors in sakke gegooi.", "Die gemors gooi deur die kinders in sakke."], 0, "Memo: Die gemors word (deur die kinders) in sakke gegooi.", G),
  one("5", "5.2.3", "TEKS G. Gee die VERLEDE DEELWOORD van die werkwoord tussen hakies: Die kinders gooi die (gebruik) blikkies in die sakke.", "language-structures", "Literal",
    "Verlede deelwoord van \"gebruik\"", ["gebruikende", "gebruik", "*gebruikte", "gebruikes"], 0, "Memo: gebruikte.", G),
  one("5", "5.2.4", "TEKS G. Gee die VERKLEINWOORD van die woord tussen hakies: Daar is 'n lae (heining) om die parkie.", "language-structures", "Literal",
    "Verkleinwoord van \"heining\"", ["heiningtjie", "heiningkie", "heintjie", "*heininkie"], 0, "Memo: heininkie.", G),
  one("5", "5.2.5", "TEKS G. Skryf die sin in die ONTKENNING: Die kinders is al klaar met die werk.", "language-structures", "Literal",
    "Korrekte ontkenning",
    ["Die kinders is nog nie klaar met die werk.", "Die kinders is al nie klaar met die werk nie.", "*Die kinders is nog nie klaar met die werk nie.", "Die kinders is nie al klaar met die werk nie."], 0, "Memo: Die kinders is nog nie klaar met die werk nie.", G),
  one("5", "5.2.6", "TEKS G. Skryf die sin oor in die korrekte WOORDORDE: Die twee kinders werk (fluks) (in die parkie) (elke Saterdag).", "language-structures", "Literal",
    "Korrekte woordorde",
    ["Die twee kinders werk fluks elke Saterdag in die parkie.", "Die twee kinders werk in die parkie fluks elke Saterdag.", "Die twee kinders werk fluks in die parkie elke Saterdag.", "*Die twee kinders werk elke Saterdag fluks in die parkie."], 0, "Memo: Die twee kinders werk elke Saterdag fluks in die parkie.", G),
];
