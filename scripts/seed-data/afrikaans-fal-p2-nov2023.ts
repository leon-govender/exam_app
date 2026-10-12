// Real DBE past paper: Afrikaans Eerste Addisionele Taal (First Additional
// Language, FAL) Paper 2 (Literature / Letterkunde), November 2023, National
// Senior Certificate. Source: official DBE combined question paper + marking
// guideline ("NASIENRIGLYNE") PDF from stanmorephysics.com (82 pages in the
// file: question paper = pages 1-43 incl. cover/instructions/contents, memo =
// pages 44-82). The PDF has a real text layer; everything below was read from
// it directly (no page images needed, no diagrams in the scoped questions).
// Cover page: PUNTE 70, TYD 2 1/2 uur. Only the DBE paper and memo were used.
//
// ============================ SCOPE (IMPORTANT) ============================
// The real P2 offers a CHOICE: the candidate answers TWO of four sections
// (A Roman, B Drama, C Kortverhale, D Gedigte) = 70 marks, and within A and B
// picks one text. This app has no "answer one of several" mechanism, so every
// seeded question is shown to the student. The student studies the drama
// "Fiela se Kind - Die Drama"; the novel is unknown, so this file is SCOPED:
//   - Section A (Roman, Q1-4): SKIPPED entirely.
//   - Section B (Drama): ONLY Q7 "Fiela se kind - Die Drama" (35 marks; QP
//     pp.29-33, memo pp.27-31 by the memo's own page numbering). Q5 (Poppie)
//     and Q6 (Paljas) skipped.
//   - Section C (Kortverhale), Q8: BOTH stories (35 marks):
//       8.1 'Kom ons stuur vir Tasu' - Maretha Maartens (18 marks)
//       8.2 'Geluk in ongeluk' - Thelton Masimila (17 marks; the memo header
//           spells the author "Theltom" - a slip, same story)
//   - Section D (Gedigte), Q9: BOTH poems (35 marks):
//       9.1 'Ken jy die see ...' - Uys Krige (18 marks)
//       9.2 'Sproeireen' - DJ Opperman (17 marks)
// Scoped total = 35 + 35 + 35 = 105 marks (verified against the paper's own
// per-question marks and each section's "[35]" total), MORE than the real
// 70-mark sitting. Intentional: this is a practice bank. paper.total_marks is
// the scoped 105; duration_minutes stays at the real exam's 150 (2.5 hours).
//
// =========================== GRADING APPROACH ==============================
// Per the standing preference, EVERY question is a stepped MCQ (`steps`): one
// step per mark-earning point, four options, the correct option taken from the
// memo, distractors invented Grade-12-style misreadings in Afrikaans (never
// another memo-accepted answer). NO question uses `marking_points`.
//   - Fill-in-the-blank (7.1, 8.1.1, 9.1.1): one single-step MCQ per blank.
//   - Matching columns (7.6, 8.1.10, 9.1.4): one MCQ per row; options are
//     Column B items (A-E are the same five statements/terms as in the paper).
//   - "Kies die KORREKTE antwoord" (A-D) items keep the printed options.
//   - Sequencing (7.11, 8.2.5): 4 steps, "which event is 1st/2nd/3rd/4th".
//   - "Motiveer ..." items whose memo mark depends on the previous answer
//     being right (7.3.2, 7.13.2, 7.15.2, 8.1.7(b), 8.2.2(b), 8.2.4(b)) are
//     independent steps here (the app grades each step on its own), so the
//     memo's dependency rule is not enforced.
//   - Open "what would you do differently" items (7.5, 8.1.8) accept many
//     answers in the memo; converted to "choose the answer that fits the text".
//   - 7.7, 7.19.x, 8.1.5, 8.2.9, 9.1.3, 9.1.6, 9.1.8, 9.2.1, 9.2.6(c),
//     9.2.10: one mark per required point, as laid out in the memo.
// Cognitive levels: the paper/memo do not print Barrett labels, so levels are
// assigned by judgement (facts/fill-ins = Literal; sequencing = Reorganisation;
// figurative meaning / motivation / theme = Inference; "what would you do
// differently" / effectiveness = Evaluation).
//
// ============================ EXTRACTS / POEMS =============================
// Extracts (Teks M, N, O, P) and both poems are reproduced in the question
// `text` of every question that refers to them (no images), with the paper's
// line numbers (every 5th line for prose/drama extracts; every line for the
// poems). Drama/prose line numbers were reconstructed from the printed layout
// and verified against the line references in the questions (e.g. "reel 6",
// "reel 18-20", "reel 7 en 8"); the stage direction counts as line 1 in Teks M.
// Teks O/P are only the extracts printed in the paper, not the whole stories.
//
// ============================== FLAG NOTES =================================
// FLAG 1 (7.11): the memo's accepted order is: spookskip by Noetzie ->
//   finaal besluit nie Bos toe -> Wolwekraal oor Nina -> hoor by Barta dat
//   hy nie Lukas van Rooyen is. Transcribed as printed in the memo (it does
//   not look chronological for the Barta event; not "fixed").
// FLAG 2 (9.2.6(c)): memo says "Enige EEN" but allocates 2 marks and lists
//   two bullets (Swartfoloos boorde; hoe 'n vrou kan troos). Treated as one
//   mark per bullet (two steps).
// FLAG 3 (9.1.4(b)): memo accepts E/vergelyking OR A/personifikasie; the seeded
//   MCQ lists only E among its options (A omitted so only one option is
//   correct).
// FLAG 4 (9.1.2, 9.1.3): the paper counts each refrain line ("Dan/En jy se nog
//   ...") as its own strofe, so strofe 5 = reels 11-14, strofe 7 = 16-19,
//   strofe 9 = 21-24. A clarifying note was added to those question texts.
// FLAG 5 (8.2.6): "Vicky het gese dat haar pa net die geld vir die troue wou
//   gebruik" is the memo's reason the statement is ONWAAR; the distractors
//   are invented.
// FLAG 6: several items printed with only two bracketed choices (7.3.1, 7.15.1,
//   8.1.7(a), 8.2.4(a), 9.2.5(b), 9.2.7) or two-option lists (9.1.2) were
//   padded to four plausible options.
// FLAG 7: the memo lists many "Enige EEN" alternatives for open items; each
//   MCQ uses one of them as the correct option.

import type { MarkingPointStep } from "../../src/lib/grader";

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
  paper_number: "P2",
  duration_minutes: 150,
  total_marks: 105,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2024/04/NSC-Afrikaans-FAL-Grade-12-November-2023-P2-and-Memo.pdf" as string | null,
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
  steps: MarkingPointStep[];
}

// ----------------------------- helpers -----------------------------------

/** Number lines like the printed paper: every `every`-th line gets its number. */
function numbered(lines: string[], every: number): string {
  return lines
    .map((l, i) => ((i + 1) % every === 0 ? String(i + 1).padStart(2, " ") : "  ") + "  " + l)
    .join("\n");
}

/** One MCQ step; the correct option is inserted at index `pos` among 3 wrong ones. */
function step(marks: number, description: string, correct: string, wrong: [string, string, string], pos: number): MarkingPointStep {
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

/** MCQ step with the options exactly as printed (or already arranged). */
function fixed(marks: number, description: string, options: string[], correctIndex: number): MarkingPointStep {
  return { marks, description, options, correctIndex };
}

function q(
  number: string,
  sub_number: string,
  text: string,
  marks: number,
  topicKey: string,
  cognitiveLevelName: string,
  model_answer: string,
  marking_notes: string,
  steps: MarkingPointStep[],
  extract?: string,
): QuestionSeed {
  return {
    number, sub_number,
    text: extract ? `${extract}\n\n${text}` : text,
    marks, topicKey, cognitiveLevelName, model_answer, marking_notes, steps,
  };
}

// ------------------------------ extracts ---------------------------------

const TEKS_M = "TEKS M (Fiela se Kind - Die Drama)\n" + numbered([
  "Ligte doof uit en weer in op toneel in Bos. LUKAS sit op sy hurke langs die huis.",
  "NINA: Wil jy 'n patat hê, Lukas?",
  "LUKAS: Nee.",
  "NINA: Kan jy 'n geheim hou?",
  "LUKAS: Watse geheim?",
  "NINA: As jy saam met my kom, gaan wys ek jou die geheim.",
  "LUKAS: Ek gaan nêrens heen nie.",
  "NINA: Jy gaan bobbejaanboude kry van net so sit en sit.",
  "LUKAS: Ek wag vir my ma.",
  "NINA: Pa sê hy gee jou nog net vandag om uit jou nuk te kom. Van môre af gaat hy vir",
  "jou lekker kortvat.",
  "LUKAS: Ek is nie julle kind nie.",
  "NINA: Is, jy is.",
  "LUKAS: My ma gaan my kom haal, jy gaan sien.",
  "NINA: Jy's Lukas wat weggeraak het, man!",
  "Bosduif en loerie skree skielik naby.",
  "LUKAS: Ek is Benjamin Komoetie.",
  "NINA: Sjuut! Hoor jy dit?",
  "LUKAS: Wat?",
  "NINA: Is jy doof? 'n Bosduif en 'n bosloerie tesame.",
  "LUKAS: Meisiekind, weet jy miskien hoe ver ons van die pad af is wat Lange Kloof toe",
  "loop?",
  "NINA: Die hardepad?",
  "LUKAS: Ek weet nie, dis die pad wat deur die Bos loop en waarlangs hulle my Knysna",
  "toe geneem het.",
  "NINA: Dis Diepwalle se pad.",
  "LUKAS: Hoe ver is ons van die hardepad af?",
  "NINA: Lank se loop.",
  "LUKAS: Weet jy hoe om daar te kom?",
  "NINA: Ja.",
  "LUKAS: Sal jy my wys om daar te kom?",
  "NINA: Die geheim wat ek jou wil wys, is op pad daarheen. Miskien kan ons tot in Kom-",
  "se-bos se sleeppad hardloop ...",
], 5);

const TEKS_N = "TEKS N (Fiela se Kind - Die Drama)\n" + numbered([
  "Ligte uit. Musiek. Ligte op. Seetoneel. Vlagpaal met klipbankie. JOHN BENN besig",
  "om met seilnaald 'n vlag te lap. LUKAS kom opgestap.",
  "LUKAS: Ek het net kom sê ek is terug, mister Benn.",
  "BENN (laat naald vassteek in die vlag): Jy lyk verkreukel, maar jy klink beter, Van",
  "Rooyen.",
  "LUKAS: Ek is. En ek sal van hier af bekend staan as Benjamin Komoetie. Dis nie 'n",
  "nuwe naam nie, dis my ou naam. Daarby sal ek net kan uithelp tot Kaliel weer reg is",
  "om sy spaan te vat, dan gaan ek terug Lange Kloof toe. Na my mense toe.",
  "BENN: Jy is beter. Jy bly nog 'n raaisel, maar jy's die man wat ek in jou gesoek het –",
  "Komoetie, het jy gesê?",
  "LUKAS: Ja.",
  "BENN: Dis 'n eerbare naam, 'n ou Hottentotnaam.",
  "LUKAS: Dis reg.",
  "BENN: Loop sê vir Joop Stoep jy's terug.",
  "LUKAS: Joop Stoep sal vandag ook nog vir my moet instaan, mister Benn. Ek moet na",
  "miss Weatherbury se huis toe gaan.",
  "BENN trek die naald deur die dik wit lap. Wanneer hy opkyk, is dit of daar êrens in sy",
  "ruiebaard 'n glimlag huiwer. LUKAS loop weg terwyl die ligte uitdoof en die",
  "openingsmusiek herhaal word.",
  "Gordyn",
], 5);

const TEKS_O = "TEKS O ('Kom ons stuur vir Tasu' - Maretha Maartens)\n" + numbered([
  "En dis toe wat Tasu doen.",
  "Nes die mense stilhou om brandstof vir die ver pad in te gooi, wys Tasu die",
  "botteltjies tieroë vir hulle.",
  "''Tieroë, tieroë!'' smous hy asof hy daarvan hou. ''Daar bly tiere diep in",
  "hierdie klippe, Meneer. Kyk hulle geel oë.'' Dan vat die mense die botteltjies",
  "en draai hulle teen die lig en kyk hoe die kwaai tiere se kwaai oë al blinker en",
  "blinker word.",
  "''Dis mooi,'' sê hulle. ''Hoeveel kos so 'n botteltjie?''",
  "''Net vier rand,'' antwoord Tasu dan.",
  "So verkoop Tasu sewentien botteltjies vol ogies.",
  "Hy stop die geld in sy broeksak, maar sy hart is seer. Dit voel vir hom asof",
  "hy sy tiere verkoop het.",
  "Die Vrydagmiddag toe oom Jollyman se taxi kom, staan hy gereed. Ma het",
  "vir hom brood ingepak en hy het sy sweetpakbaadjie om sy lyf geknoop, want",
  "dit kan dalk koud word. Hy wou die bottel kruiemedisyne in sy drasak gepak",
  "het, maar Ma het gesê die prop is nie dig nie; hy moet dit op sy skoot hou.",
  "''Gedra vir jou,'' sê Ma. ''Moenie wilde goed aanvang nie.''",
  "''Ma moet eerder sê hy moenie sy babagesig opsit nie,'' sê Sterkman uit die",
  "bloute.",
  "''My babagesig? Ek sit nooit 'n babagesig op nie!''",
  "''Ha-ha,'' sê Sterkman. ''Kyk maar vir jouself in die spieël. Jy's bang vir",
  "mense.''",
], 5);

const TEKS_P = "TEKS P ('Geluk in ongeluk' - Thelton Masimila)\n" + numbered([
  "... Dit was 'n Sondagagtermiddag in 'n koffiewinkel met 'n Italiaanse naam.",
  "Hulle het albei cappucino's bestel en voor die skuim die bodem bereik het, het",
  "hulle alles van mekaar geweet.",
  "Die lug ruik soos aarbeie. Soet en ferm, maar ook vriendelik. Nog elke keer",
  "as hy by die kamer met die geel deur ingestap het, het hy diep asemgehaal",
  "en dan kry hy hoendervleis wat hy van sy nek tot by sy arms voel trek.",
  "Vandag ruik hy steeds die aarbeie, maar die hoendervleis is nie meer daar",
  "nie. Dis net nie daar nie en dit pla hom. Hy sit die brief wat tussen sy vingers",
  "bewe op die mantel neer en die lemoensap op die linkerbedkassie.",
  "Hy praat sag, rustig.",
  "''Ek het vanoggend vir Vicky gevra wat somer is. Toe sê sy dis wanneer jy",
  "in die reën kan staan en lag, want jy kry nie koud nie. Kan jy dit glo? Tien jaar",
  "oud en sy sit die woorde so mooi bymekaar. Ek sê jou mos, sy hoor die",
  "musiek wat sy maak, maar sy weet nie sy sing nie.''",
  "Gavin gaan sit oudergewoonte langs die bed op Karla se gunsteling-stoel.",
  "Hy het die stoel vir haar op hul wittebrood gekoop. Dit was 'n tweedehandse",
  "oudhedewinkel in die hartjie van Kaapstad.",
], 5);

const GEDIG_KRIGE = "'KEN JY DIE SEE ...' - Uys Krige\n" + numbered([
  "Ken jy die see, Meneer, ken jy die see?",
  "Hy lyk nou soos jou voorstoep blinkgeskuur",
  "en kalm soos min dinge hier benee,",
  "maar hy's gevaarliker as vlam of vuur.",
  "Dan sê jy nog, Meneer, die vis is duur.",
  "Dié vrede, kalmer as 'n stil, soet kind,",
  "lyk of dit dae, dae lank sal duur.",
  "Maar word dié bries 'n bulderende wind,",
  "dan veg jy vir jou lewe, uur na uur.",
  "En jy sê nog, Meneer, die vis is duur.",
  "Ja, sleep die swart, swart wind die swart nag mee,",
  "waar kry ons hulp dan, waar's ons naaste buur?",
  "Die Dood staan voor die deur. Gee hy nog net één tree,",
  "dan kelder hy ons almal in sy koue skuur.",
  "En jy sê nog, Meneer, die vis is duur.",
  "Wat van die storms wat nooit ophou raas?",
  "Jy sit pal in jou kliphuis, klam en guur,",
  "en hoor die wind al woester, wreder blaas.",
  "En daar's geen sprokkel hout meer vir jou vuur.",
  "Dan sê jy nog, Meneer, die vis is duur.",
  "Was jy al van jou bootjie soos 'n veer gevee",
  "deur 'n grys golf hoog soos 'n tronk se muur.",
  "Wat help dit om te spartel en te skree: ''Nee! Nee!''",
  "sluk jy eers daardie waters sout en suur?",
  "Dan sê jy nog, Meneer, die vis is duur.",
  "Ken jy die doodsangs as die rukwind klap?",
  "Dié waansin ken geen redmiddel of kuur.",
  "Hy vreet mos aan jou ingewande nes 'n krap.",
  "Hy's koud soos ys, heet soos hellevuur!",
  "Dan sê jy nog, Meneer, die vis is duur.",
  "Ken jy die see, Meneer, ken jy die see?",
  "Hy wat met groen jaloerse oë na ons gluur,",
  "ons wat net één ou misstappie moet gee",
  "en hy kom tromp-op op ons afgestuur!",
  "Dan sê jy nog, Meneer, die vis is duur.",
  "Sien jy die krom ou vroutjie daar, mevrou Mathee,",
  "wat telkens ver, vér oor die golwe tuur?",
  "Sy dink dié briesie bring haar seuns betyds vir tee.",
  "Hul slaap aldrie agter die kerkhofmuur.",
  "Dan sê jy nog, Meneer, die vis is duur ...",
], 1) + "\n[Uit: Versamelde gedigte. JL van Schaik, 1985]";

const GEDIG_OPPERMAN = "'SPROEIREËN' - DJ Opperman\n" + numbered([
  "My nooi is in 'n nartjie,",
  "my ouma in kaneel,",
  "daar's iemand ... iemand in anys,",
  "daar's 'n vrou in elke geur!",
  "As ek 'n stukkie nartjieskil",
  "tussen my vingers buig of knak,",
  "breek uit die klein sproeireën",
  "wat geurend om my hand uitsak,",
  "die boorde weer van Swartfoloos",
  "en met die nartjies om my heen",
  "weet ek hoe dat 'n vrou kan troos.",
  "O my nooi is in 'n nartjie,",
  "my ouma in kaneel,",
  "daar's iemand ... iemand in anys,",
  "daar's 'n vrou in elke geur!",
], 1) + "\n[Uit: Versamelde poësie, Human & Rousseau, 1987]\n(Strofe 1 = reëls 1-4, strofe 2 = reëls 5-11, strofe 3 = reëls 12-15.)";

const D = "drama-fiela";
const K = "short-stories";
const G = "poetry";

export const questions: QuestionSeed[] = [
  // ======================= SECTION B: DRAMA - Q7 (35) =======================
  q("7", "7.1.1", "Voltooi feitelik korrek: Benjamin het voor die magistraat in die hof op die dorp, ..., verskyn.",
    1, D, "Literal", "Knysna.", "Memo: Knysna.",
    [step(1, "Op watter dorp het Benjamin voor die magistraat in die hof verskyn?", "Knysna", ["George", "Uniondale", "Oudtshoorn"], 0)]),
  q("7", "7.1.2", "Voltooi feitelik korrek: Een van die ... het vir Barta van Rooyen gesê watter seun sy as haar verlore seun moes uitwys.",
    1, D, "Literal", "Die sensusmanne / manne wat die mense tel.", "Memo: sensusmanne/manne wat die mense tel.",
    [step(1, "Wie het vir Barta gesê watter seun sy as haar verlore seun moes uitwys?", "die sensusmanne", ["die boswagters", "die polisiemanne", "die kerkraadslede"], 1)]),
  q("7", "7.1.3", "Voltooi feitelik korrek: Barta se seun was ... jaar oud toe hy weggeraak het.",
    1, D, "Literal", "Drie (3).", "Memo: drie/3.",
    [step(1, "Hoe oud was Barta se seun toe hy weggeraak het?", "drie jaar", ["twee jaar", "vier jaar", "vyf jaar"], 0)]),
  q("7", "7.1.4", "Voltooi feitelik korrek: Barta het gewys dat die seun met die ... (kleur) hempie haar Lukas was.",
    1, D, "Literal", "Blou.", "Memo: blou.",
    [step(1, "Watter kleur hempie het die seun gedra wat Barta as Lukas uitgewys het?", "blou", ["rooi", "groen", "geel"], 2)]),
  q("7", "7.2", "Waarom het Nina vir niemand anders van haar ''geheim'' (reël 6) vertel nie?",
    1, D, "Inference", "Nina was bang haar pa gaan haar bottels vat/gaan uitvind van haar speelplek in die bos (of enige soortgelyke antwoord uit die memo, bv. sy het net vir Lukas vertrou).",
    "Memo: enige EEN van o.a. bang vir moeilikheid / pa sou bottels vat / het nie ander mense vertrou nie / dit was haar ontvlugting.",
    [step(1, "Waarom het Nina vir niemand anders van haar geheim vertel nie?",
      "Sy was bang haar pa sou haar bottels vat en van haar speelplek in die bos uitvind.",
      ["Die geheim was lankal bekend, want al haar broers het dit geweet.", "Sy wou dit eers aan Barta wys voordat sy dit vir iemand anders vertel.", "Elias het haar verbied om met vreemdelinge te praat."], 0)], TEKS_M),
  q("7", "7.3.1", "''Sjuut! Hoor jy dit?'' (Reël 18) / ''Wat?'' (Reël 19) / ''Is jy doof? 'n Bosduif en 'n bosloerie tesame.'' (Reël 20)\nAs 'n mens dink aan al die negatiewe dinge in Nina se lewe in die Bos, is hierdie woorde van haar (ironies/sarkasties).",
    1, D, "Inference", "Ironies.", "Memo: ironies.",
    [step(1, "Kies die KORREKTE antwoord: Nina se woorde is ...", "ironies", ["sarkasties", "dreigend", "wanhopig"], 0)], TEKS_M),
  q("7", "7.3.2", "Motiveer jou antwoord op VRAAG 7.3.1 (Nina se woorde in reël 18-20 is ironies).",
    1, D, "Inference", "Nina se woorde wys dat sy die mooi/positiewe raaksien en aandag gee aan die geluide van die voëls.",
    "Memo: enige EEN, bv. Nina gee aandag aan die mooiheid van die voëls / luister na die bos, nie na mense nie. (Memo: 7.3.1 moet reg wees vir die punt; hier onafhanklik gegradeer.)",
    [step(1, "Hoe motiveer jy dat Nina se woorde ironies is?",
      "Nina gee aandag aan die mooi geluide van die voëls, ondanks al die negatiewe dinge in haar lewe.",
      ["Nina spot met Lukas omdat hy nie die bosgeluide kan hoor nie.", "Nina wil Lukas bang maak met die geluide van die bos.", "Nina haat die geluide van die voëls, want dit herinner haar aan Elias."], 1)], TEKS_M),
  q("7", "7.4", "Lukas het uit die Bos weggeloop. Wat was die gevolg hiervan vir hom?",
    1, D, "Inference", "Elias het hom gaan soek / hom geslaan (of enige soortgelyke gevolg uit die memo).",
    "Memo: enige EEN, bv. Elias het hom gaan soek; Elias het hom geslaan; hy moes harder werk; hy was nog banger vir Elias.",
    [step(1, "Wat was die gevolg toe Lukas uit die Bos weggeloop het?",
      "Elias het hom gaan soek en hom geslaan.",
      ["Fiela het hom dadelik kom haal en teruggeneem Wolwekraal toe.", "Die boswagter het hom sonder straf Lange Kloof toe teruggebring.", "Barta het hom beloon omdat hy sy eie pad gekies het."], 2)], TEKS_M),
  q("7", "7.5", "Wat sou jy anders as Lukas gedoen het as om weg te loop?",
    1, D, "Evaluation", "Ek sou gewag het totdat Fiela my kom haal het / meer geduld gehad het (enige soortgelyke antwoord uit die memo).",
    "Open vraag in die memo: enige EEN, bv. gewag totdat Fiela gekom het; meer geduld; met die boswagter/Barta gepraat; probeer inpas; vriende gemaak. FLAG: omgeskakel na 'kies die antwoord wat by die teks pas'.",
    [step(1, "Wat sou jy anders as Lukas gedoen het as om weg te loop?",
      "Ek sou meer geduld gehad het en gewag het totdat Fiela my kom haal.",
      ["Ek sou by Nina se speelplek weggekruip het totdat almal my vergeet het.", "Ek sou Elias se geld gesteel en self na Knysna toe gestap het.", "Ek sou Nina gedwing het om my deur die nag na Lange Kloof te neem."], 0)], TEKS_M),
  q("7", "7.6.1", "Een van die temas in hierdie drama is Benjamin/Lukas se soeke na identiteit. Kies die boodskap wat by die situasie pas: Lukas het gewag dat Fiela hom moes kom haal.",
    1, D, "Inference", "D - 'n Mens onthou die liefde en beskerming wat jy as kind ervaar.", "Memo: D.",
    [fixed(1, "Watter boodskap pas by: Lukas het gewag dat Fiela hom moes kom haal?",
      ["'n Mens het altyd die keuse van watter werk jy wil doen.", "'n Mens onthou die liefde en beskerming wat jy as kind ervaar.", "'n Mens se opvoeding bepaal jou optrede teenoor ander mense.", "'n Mens probeer dikwels om die verkeerde dinge wat jy gedoen het, met beter dinge reg te maak."], 1)]),
  q("7", "7.6.2", "Kies die boodskap wat by die situasie pas: Op haar eie manier het Barta tog omgee vir Lukas gewys.",
    1, D, "Inference", "C - 'n Mens probeer dikwels om die verkeerde dinge wat jy gedoen het, met beter dinge reg te maak.", "Memo: C.",
    [fixed(1, "Watter boodskap pas by: Op haar eie manier het Barta tog omgee vir Lukas gewys?",
      ["'n Mens moet soms seker maak dat jy is wie jy dink jy is.", "'n Mens het altyd die keuse van watter werk jy wil doen.", "'n Mens onthou die liefde en beskerming wat jy as kind ervaar.", "'n Mens probeer dikwels om die verkeerde dinge wat jy gedoen het, met beter dinge reg te maak."], 3)]),
  q("7", "7.6.3", "Kies die boodskap wat by die situasie pas: Al het Lukas gesê dat hy nie die Van Rooyens se kind is nie, het hy Elias wel later Pa genoem.",
    1, D, "Inference", "E - 'n Mens se opvoeding bepaal jou optrede teenoor ander mense.", "Memo: E.",
    [fixed(1, "Watter boodskap pas by: Lukas het Elias wel later Pa genoem?",
      ["'n Mens se opvoeding bepaal jou optrede teenoor ander mense.", "'n Mens het altyd die keuse van watter werk jy wil doen.", "'n Mens moet soms seker maak dat jy is wie jy dink jy is.", "'n Mens onthou die liefde en beskerming wat jy as kind ervaar."], 0)]),
  q("7", "7.6.4", "Kies die boodskap wat by die situasie pas: Nina het van die begin af probeer om Lukas deel van haar lewe te maak.",
    1, D, "Inference", "A - 'n Mens moet soms seker maak dat jy is wie jy dink jy is.", "Memo: A (soos in die memo gegee).",
    [fixed(1, "Watter boodskap pas by: Nina het van die begin af probeer om Lukas deel van haar lewe te maak?",
      ["'n Mens het altyd die keuse van watter werk jy wil doen.", "'n Mens se opvoeding bepaal jou optrede teenoor ander mense.", "'n Mens moet soms seker maak dat jy is wie jy dink jy is.", "'n Mens probeer dikwels om die verkeerde dinge wat jy gedoen het, met beter dinge reg te maak."], 2)]),
  q("7", "7.7", "Lukas en Nina het baie verskillend grootgeword. Wat het Fiela vir Benjamin oor werk geleer en hoe verskil dit van wat Nina in die Bos geleer het? Jy moet in jou antwoord na Benjamin en Nina verwys.",
    2, D, "Inference", "Fiela het vir Benjamin geleer dat almal in die gesin saam werk (of: eers werk dan eet/speel, harde werk is belangrik). Nina het elke geleentheid gebruik om nie haar werk te doen nie (of: net gewerk omdat sy verplig was, geen voorbeeld van harde werk gehad nie).",
    "Memo: 1 punt vir Fiela/Benjamin (enige EEN) + 1 punt vir Nina (enige EEN).",
    [
      step(1, "Wat het Fiela vir Benjamin oor werk geleer?", "Almal in die gesin werk saam.", ["Werk is net vir grootmense, kinders moet speel.", "'n Kind werk net as iemand hom daarvoor betaal.", "Jy moet eers speel en eers daarna werk."], 0),
      step(1, "Wat het Nina in die Bos oor werk geleer?", "Sy het elke geleentheid gebruik om nie haar werk te doen nie.", ["Sy het geleer om trots te wees op die harde werk wat sy vir Elias gedoen het.", "Haar ma het haar altyd aangemoedig om harder te werk.", "Sy het self besluit watter werk sy wil doen en dit gedoen."], 2),
    ]),
  q("7", "7.8", "Die boswagter het later vir Nina werk op die dorp gekry. Sy het konflik hieroor beleef, want sy ...",
    1, D, "Inference", "C - het gevoel dat sy misbruik word.", "Memo: C.",
    [fixed(1, "Kies die KORREKTE antwoord: Nina het konflik beleef, want sy ...",
      ["het nie van die mense gehou by wie sy moes gaan werk nie.", "het gevoel dat Barta haar in die Bos nodig gehad het.", "het gevoel dat sy misbruik word.", "wou nie so min geld verdien nie."], 2)]),
  q("7", "7.9", "Lukas was bereid om vir Nina vyf sjielings te betaal om vir hom die pad uit die Bos te wys. Waarom kan ons sê dat hierdie vyf sjielings die simbool van iets positiefs in Lukas se lewe was?",
    1, D, "Inference", "Dit was 'n simbool van hoop/vryheid, want dit kon vir hom die pad uit die Bos 'koop' (enige soortgelyke antwoord uit die memo).",
    "Memo: enige EEN, bv. ere-geld; simbool van Fiela se omgee/opvoeding; simbool van hoop/vryheid.",
    [step(1, "Waarom was die vyf sjielings 'n simbool van iets positiefs?",
      "Dit was 'n simbool van hoop, want dit kon vir hom die pad uit die Bos na vryheid 'koop'.",
      ["Dit het bewys dat die Van Rooyens hom goed vir sy werk betaal het.", "Dit was Barta se geskenk waarmee sy hom wou laat bly.", "Dit was Elias se beloning omdat Lukas sy nuwe naam aanvaar het."], 1)]),
  q("7", "7.10", "Watter voorbeeld van omgee het Nina in hierdie situasie met Lukas vir jou gestel?",
    1, D, "Inference", "Nina het vir Lukas kos/'n patat aangebied (of enige soortgelyke antwoord uit die memo).",
    "Memo: enige EEN, bv. patat aangebied; gewaarsku teen Elias; wou maats maak; geheim gedeel; gehelp om die pad te vind.",
    [step(1, "Watter voorbeeld van omgee het Nina vir Lukas gestel?",
      "Sy het vir Lukas 'n patat aangebied om te eet.",
      ["Sy het vir Elias gaan sê waar Lukas was sodat hy veilig kon wees.", "Sy het Lukas gedwing om saam met haar te werk.", "Sy het Lukas se vyf sjielings vir hom gebêre."], 3)], TEKS_M),
  q("7", "7.11", "Skryf die volgende vier gebeure in die korrekte VOLGORDE: Lukas het by Barta gehoor dat hy nie Lukas van Rooyen is nie; Lukas het finaal besluit om nie terug te gaan Bos toe nie; Lukas is Wolwekraal toe om met Fiela oor Nina te praat; Lukas het die spookskip by Noetzie gesien.",
    4, D, "Reorganisation", "1. Lukas het die spookskip by Noetzie gesien. 2. Lukas het finaal besluit om nie terug te gaan Bos toe nie. 3. Lukas is Wolwekraal toe om met Fiela oor Nina te praat. 4. Lukas het by Barta gehoor dat hy nie Lukas van Rooyen is nie.",
    "Memo: 1 punt vir elke gebeure op die korrekte plek. FLAG 1: volgorde getranskribeer soos in die memo gedruk.",
    [
      step(1, "Watter gebeurtenis is EERSTE (posisie 1)?", "Lukas het die spookskip by Noetzie gesien.", ["Lukas het by Barta gehoor dat hy nie Lukas van Rooyen is nie.", "Lukas het finaal besluit om nie terug te gaan Bos toe nie.", "Lukas is Wolwekraal toe om met Fiela oor Nina te praat."], 0),
      step(1, "Watter gebeurtenis is TWEEDE (posisie 2)?", "Lukas het finaal besluit om nie terug te gaan Bos toe nie.", ["Lukas het die spookskip by Noetzie gesien.", "Lukas is Wolwekraal toe om met Fiela oor Nina te praat.", "Lukas het by Barta gehoor dat hy nie Lukas van Rooyen is nie."], 1),
      step(1, "Watter gebeurtenis is DERDE (posisie 3)?", "Lukas is Wolwekraal toe om met Fiela oor Nina te praat.", ["Lukas het finaal besluit om nie terug te gaan Bos toe nie.", "Lukas het by Barta gehoor dat hy nie Lukas van Rooyen is nie.", "Lukas het die spookskip by Noetzie gesien."], 2),
      step(1, "Watter gebeurtenis is VIERDE (posisie 4)?", "Lukas het by Barta gehoor dat hy nie Lukas van Rooyen is nie.", ["Lukas is Wolwekraal toe om met Fiela oor Nina te praat.", "Lukas het die spookskip by Noetzie gesien.", "Lukas het finaal besluit om nie terug te gaan Bos toe nie."], 3),
    ]),
  q("7", "7.12.1", "Lees reëls 1 tot 8. In watter ruimte speel hierdie uittreksel af?",
    1, D, "Literal", "By die see / in Knysna (die dorp) by John Benn se werksplek, die vlagpaal met die klipbankie.",
    "Memo: enige EEN, bv. in Knysna/die dorp; waar Lukas voorheen gewerk het; by die see; John Benn se werksplek.",
    [step(1, "In watter ruimte speel hierdie uittreksel af?",
      "By die see, by John Benn se vlagpaal met die klipbankie.",
      ["Op Wolwekraal, by Fiela se huis.", "In die Bos, by die Van Rooyens se huis.", "In miss Weatherbury se huis."], 1)], TEKS_N),
  q("7", "7.12.2", "Lees reëls 1 tot 8. Na wie verwys Lukas as hy in reël 8 van ''my mense'' praat?",
    1, D, "Literal", "Die Komoeties / Fiela en Selling / Wolwekraal se mense.",
    "Memo: enige EEN, bv. die Komoeties; Fiela en Selling; Wolwekraal se mense; die bruin familie in die Langekloof.",
    [step(1, "Na wie verwys ''my mense''?",
      "Na die Komoeties (Fiela en haar gesin).",
      ["Na die Van Rooyens in die Bos.", "Na mister Benn en sy werkers by die see.", "Na Barta en haar kinders."], 2)], TEKS_N),
  q("7", "7.13.1", "''Ek is. En ek sal van hier af bekend staan as Benjamin Komoetie. Dis nie 'n nuwe naam nie, dis my ou naam.'' (Reël 6 en 7) / ''Dis 'n eerbare naam, 'n ou Hottentotnaam.'' (Reël 12)\nWatter stylfiguur kry ons in hierdie reëls?",
    1, D, "Literal", "Kontras/Teenstelling (of Ironie / Herhaling).",
    "Memo: enige EEN van Kontras/Teenstelling, Ironie of Herhaling/Repetisie. Slegs Kontras as opsie gebruik; Ironie en Herhaling as opsies weggelaat sodat net een opsie reg is.",
    [step(1, "Watter stylfiguur kry ons in hierdie reëls?", "Kontras (teenstelling)", ["Personifikasie", "Metafoor", "Hiperbool"], 0)], TEKS_N),
  q("7", "7.13.2", "Wat beteken die stylfiguur in 7.13.1 (kontras tussen sy ou en nuwe naam) binne die konteks van die uittreksel?",
    1, D, "Inference", "Benjamin is nou seker van sy identiteit en trots op die naam wat hy dra (Komoetie).",
    "Memo: enige EEN van die opsies by die stylfiguur, bv. Benjamin is nou seker wie hy is/waar hy hoort; trots op sy naam. (Memo: 7.13.1 moet reg wees; hier onafhanklik gegradeer.)",
    [step(1, "Wat beteken dit binne die konteks van die uittreksel?",
      "Benjamin is nou seker van wie hy is en is trots op die naam Komoetie.",
      ["Benjamin skaam hom vir sy ou naam en wil dit verander.", "Benjamin gee voor dat hy 'n bruin man is om Fiela se guns te wen.", "Mister Benn sê die naam is eerbaar omdat dit 'n Engelse adelsnaam is."], 3)], TEKS_N),
  q("7", "7.14", "Lukas moes na miss Weatherbury se huis toe gaan om Nina se geld vir Elias te gaan haal. Sê waarom hierdie stelling ONWAAR is.",
    1, D, "Inference", "Lukas wou vir Nina gaan sê hoe hy oor haar voel / wou haar gaan sien (of enige soortgelyke antwoord uit die memo).",
    "Memo: enige EEN, bv. Nina het nie meer haar geld vir Elias gegee nie; Lukas wou Nina gaan sien/haal; wou vir haar vertel hy is nie haar broer nie.",
    [step(1, "Waarom is die stelling ONWAAR?",
      "Lukas wou vir Nina gaan sê hoe hy oor haar voel en haar gaan sien.",
      ["Lukas moes vir miss Weatherbury gaan sê dat hy weer by haar kom werk.", "Miss Weatherbury het die geld reeds self vir Elias gebring.", "Lukas moes die geld vir mister Benn gaan terugbetaal."], 0)], TEKS_N),
  q("7", "7.15.1", "Lukas het vir mister Benn gaan vertel wat sy toekomsplanne is. Uit hulle gesprek lei ons af dat mister Benn (twyfel oor/respek vir) Lukas gehad het.",
    1, D, "Inference", "Respek vir.", "Memo: respek vir.",
    [step(1, "Kies die KORREKTE antwoord: mister Benn het ... Lukas gehad.", "respek vir", ["twyfel oor", "jaloesie teenoor", "simpatie met"], 0)], TEKS_N),
  q("7", "7.15.2", "Motiveer jou antwoord op VRAAG 7.15.1 (mister Benn het respek vir Lukas gehad).",
    1, D, "Inference", "Mister Benn het gesê dat Komoetie 'n eerbare naam is (of enige soortgelyke antwoord uit die memo).",
    "Memo: enige EEN, bv. 'eerbare naam'; 'die man wat ek in jou gesoek het'; Lukas 'n sterk man genoem. (Memo: 7.15.1 moet reg wees; hier onafhanklik gegradeer.)",
    [step(1, "Hoe wys die gesprek dat mister Benn respek vir Lukas gehad het?",
      "Hy het gesê dat Komoetie 'n eerbare naam is.",
      ["Hy het Lukas gevra om sy besluit oor sy naam weer te oorweeg.", "Hy het kwaad geword omdat Lukas so laat terug is.", "Hy het vir Lukas gesê om eers vir Joop Stoep te gaan sê dat hy terug is, sodat Joop kon besluit."], 1)], TEKS_N),
  q("7", "7.16", "'' ... tot Kaliel weer reg is om sy spaan te vat, ...'' (Reël 7 en 8) Verduidelik die figuurlike betekenis van Lukas se woorde.",
    1, D, "Inference", "Totdat Kaliel weer reg was om te werk / kon roei en sy plek op die loodsboot kon inneem.",
    "Memo: enige EEN: totdat Kaliel weer reg was om te werk; kon roei/sy plek kon inneem op die loodsboot.",
    [step(1, "Wat is die figuurlike betekenis van 'tot Kaliel weer reg is om sy spaan te vat'?",
      "Totdat Kaliel weer gesond genoeg is om te kan roei en sy plek op die boot kan inneem.",
      ["Totdat Kaliel 'n nuwe spaan gemaak het.", "Totdat Kaliel Lukas se werk by die vlagpaal kan oorneem.", "Totdat Kaliel van sy hartseer herstel het."], 2)], TEKS_N),
  q("7", "7.17", "Uit Lukas se optrede in hierdie uittreksel kom die tema van ... sterk na vore.",
    1, D, "Inference", "B - vrede.", "Memo: B/vrede.",
    [fixed(1, "Kies die KORREKTE antwoord: die tema van ... kom sterk na vore.", ["haat", "vrede", "vooroordeel", "magteloosheid"], 1)], TEKS_N),
  q("7", "7.18", "Hoe kry die dramaturg dit reg om mister Benn uit te beeld as iemand wat mense kén?",
    1, D, "Inference", "Die dramaturg gebruik woorde soos 'lyk' en 'klink' (Jy lyk verkreukel, maar jy klink beter) wat wys dat hy die mens sien en hoor / dialoog wat wys hy sien die verandering by Lukas.",
    "Memo: enige EEN: woorde soos 'is'/'lyk'/'klink'; dialoog wat wys dat hy die Komoetienaam as eerbaar ken / verandering by Lukas hoor.",
    [step(1, "Hoe beeld die dramaturg mister Benn uit as iemand wat mense ken?",
      "Hy gebruik woorde soos 'lyk' en 'klink' in Benn se dialoog, wat wys hy sien en hoor die verandering by Lukas.",
      ["Hy laat Benn lang monoloë oor sy eie lewe lewer.", "Hy laat 'n verteller Benn se gedagtes vir die gehoor lees.", "Hy laat Benn Lukas se geheime vir ander karakters vertel."], 3)], TEKS_N),
  q("7", "7.19.1", "In hierdie drama sluit die titel, inhoud en slot goed by mekaar aan. Waaroor, dink jy, gaan die drama as jy net na die titel kyk?",
    1, D, "Inference", "Dit gaan oor 'n kind wat aan Fiela behoort / 'n ma-kind-verhouding.",
    "Memo: enige EEN, bv. 'n karakter met die naam Fiela; Fiela se kind; ma-kind-verhouding; die drama as genre.",
    [step(1, "Waaroor, dink jy, gaan die drama as jy net na die titel kyk?",
      "Oor Fiela se kind / 'n ma-kind-verhouding.",
      ["Oor Fiela se stryd om 'n eie stuk grond.", "Oor Elias se lewe en sy gesin in die Bos.", "Oor Fiela se werk as wasvrou in die dorp."], 1)]),
  q("7", "7.19.2", "Alhoewel Fiela nog vier ander kinders gehad het, is die fokus in hierdie drama op Benjamin. Hoekom?",
    1, D, "Inference", "Benjamin het onder vreemde omstandighede haar kind geword (hy was nie haar eie kind nie) en worstel met sy identiteit.",
    "Memo: enige EEN, bv. hanskind/nie haar eie kind; weggevat van haar; enigste wit kind; sukkel met sy identiteit.",
    [step(1, "Hoekom is die fokus op Benjamin?",
      "Hy het onder vreemde omstandighede haar kind geword en sukkel met sy identiteit.",
      ["Hy is die oudste van al Fiela se kinders.", "Hy was die enigste kind wat geld vir Fiela verdien het.", "Al Fiela se ander kinders het in die Bos gaan woon."], 2)]),
  q("7", "7.19.3", "Hoe weet jy dat hierdie drama positief vir Fiela geëindig het?",
    1, D, "Inference", "Benjamin sou terugkom / het vir Benn gesê hy gaan terug na sy mense (Fiela) toe.",
    "Memo: enige EEN, bv. Benjamin sou terugkom; Fiela se doel bereik; Benjamin noem die Komoeties 'sy mense'; Fiela se gebede verhoor.",
    [step(1, "Hoe weet jy dat die drama positief vir Fiela geëindig het?",
      "Benjamin het gesê hy gaan terug na sy mense (Fiela) toe.",
      ["Lukas het besluit om by die Van Rooyens te bly.", "Fiela het na die dorp getrek om naby Benjamin te wees.", "Mister Benn het Lukas verbied om terug te gaan."], 0)]),

  // ==================== SECTION C: KORTVERHALE - Q8 (35) ====================
  // ---- 8.1 'Kom ons stuur vir Tasu' - Maretha Maartens (18) ----
  q("8", "8.1.1(a)", "Voltooi feitelik korrek: Tasu se ouma bly op ...",
    1, K, "Literal", "Perdeberg.", "Memo: Perdeberg.",
    [step(1, "Waar bly Tasu se ouma?", "Perdeberg", ["Swartberg", "Klipheuwel", "Bergplaas"], 0)]),
  q("8", "8.1.1(b)", "Voltooi feitelik korrek: Tasu se ouma was so siek dat sy nie kon ... nie.",
    1, K, "Literal", "Loop.", "Memo: loop.",
    [step(1, "Wat kon die siek ouma nie doen nie?", "loop", ["praat", "eet", "slaap"], 1)]),
  q("8", "8.1.1(c)", "Voltooi feitelik korrek: Pa kon nie gaan nie, want die motor se ... was gedaan.",
    1, K, "Literal", "Remme/bande.", "Memo: remme/bande (slegs remme as opsie gebruik).",
    [step(1, "Wat van die motor was gedaan?", "remme", ["enjin", "battery", "ligte"], 2)]),
  q("8", "8.1.1(d)", "Voltooi feitelik korrek: Ma wou nie vir ... stuur nie, want sy het nog nie verstand gehad nie.",
    1, K, "Literal", "Evelina (haar dogter/Tasu se sussie).", "Memo: Evelina/haar dogter/Tasu se sussie.",
    [step(1, "Vir wie wou Ma nie stuur nie, omdat sy nog nie verstand gehad het nie?", "Evelina", ["Oom Jollyman", "die buurmeisie", "Tasu se niggie"], 3)]),
  q("8", "8.1.2", "Tasu se ma het nie R60 vir taxigeld gehad nie. Wat was die gevolg hiervan vir Tasu?",
    1, K, "Literal", "Tasu moes sy klippies/tieroë verkoop.", "Memo: Tasu moes sy klippies/tieroë verkoop.",
    [step(1, "Wat was die gevolg vir Tasu dat Ma nie taxigeld gehad het nie?",
      "Tasu moes sy klippies (tieroë) verkoop.", ["Tasu moes te voet na sy ouma stap.", "Tasu moes die eiers by die huis verkoop.", "Tasu moes by die huis bly en Sterkman laat gaan."], 0)]),
  q("8", "8.1.3", "Waarom wou Tasu se ma nie van die eiers verkoop vir taxigeld nie?",
    1, K, "Inference", "Hulle het die eiers self nodig gehad / dit was hulle oorlewing.",
    "Memo: enige EEN, bv. self geëet; eiers maak hulle mae vol; eiers is hulle oorlewing; nodig gehad.",
    [step(1, "Waarom wou Ma nie eiers verkoop nie?",
      "Hulle het die eiers self nodig gehad om te oorleef.", ["Die eiers was vir oom Jollyman as betaling bestem.", "Die eiers was te klein om te verkoop.", "Niemand in die omgewing wou eiers koop nie."], 1)]),
  q("8", "8.1.4", "Nadat Tasu baie innerlike konflik ervaar het oor wat hy moes doen om taxigeld te kry, het hy dit gedoen, want ...",
    1, K, "Inference", "B - hy was 'n verantwoordelike kleinseun.", "Memo: B.",
    [fixed(1, "Kies die KORREKTE antwoord: Tasu het dit gedoen, want ...",
      ["hy was amper veertien.", "hy was 'n verantwoordelike kleinseun.", "sy ma het vir hom gevra om dit te doen.", "hy wou vir Sterkman bewys dat hy nie bang is nie."], 1)]),
  q("8", "8.1.5", "Wat was die verskil tussen Tasu en die ander mense in oom Jollyman se taxi? Jy moet in jou antwoord na Tasu en die ander mense verwys.",
    2, K, "Inference", "Tasu was bang vir mense en het in die taxi vasgekeer/benoud gevoel, terwyl die ander mense aangegaan het asof alles normaal is.",
    "Memo: 1 punt vir Tasu (enige EEN) + 1 punt vir die ander mense (enige EEN).",
    [
      step(1, "Hoe het Tasu in die taxi gevoel?", "Hy was bang vir mense en het vasgekeer/benoud gevoel.", ["Hy het die rit geniet omdat hy graag met mense gesels.", "Hy was ontspanne en het aan die slaap geraak.", "Hy het gevoel hy is te groot vir die klein taxi."], 2),
      step(1, "Hoe het die ander mense in die taxi opgetree?", "Hulle het aangegaan asof alles normaal is.", ["Hulle was net so bang soos Tasu vir die baie mense.", "Hulle het vir Tasu met sy drasak gehelp.", "Hulle het gekla oor die spoed van die taxi."], 0),
    ], TEKS_O),
  q("8", "8.1.6", "''Daar bly tiere diep in hierdie klippe ...'' (Reël 4 en 5) Verduidelik die figuurlike betekenis van hierdie woorde.",
    1, K, "Inference", "Die klippies lyk soos tierogies teen die lig / dit verwys na die mooi binne-in die klippies.",
    "Memo: enige EEN, bv. klippies lyk soos tierogies; die mooi binne-in die klippies; die patroon is diep weggesteek.",
    [step(1, "Wat is die figuurlike betekenis?",
      "Die klippies lyk soos tiere se oë wanneer jy dit teen die lig hou.", ["Daar leef regtig wilde diere in die berge naby Tasu se huis.", "Die klipgroef is baie gevaarlik om in te werk.", "Tasu is bang vir die tiere wat hy by die klippe gesien het."], 3)], TEKS_O),
  q("8", "8.1.7(a)", "''Ma moet eerder sê hy moenie sy babagesig opsit nie,'' sê Sterkman uit die bloute. (Reël 18 en 19)\nAs ons dink aan alles wat Tasu gedoen het, is hierdie woorde van Sterkman (ironies/manipulerend).",
    1, K, "Inference", "Ironies.", "Memo: ironies.",
    [step(1, "Kies die KORREKTE antwoord: Sterkman se woorde is ...", "ironies", ["manipulerend", "bemoedigend", "simpatiek"], 0)], TEKS_O),
  q("8", "8.1.7(b)", "Motiveer jou antwoord op VRAAG 8.1.7(a) (Sterkman se woorde is ironies).",
    1, K, "Inference", "Tasu het 'n volwasse besluit geneem en alleen na sy ouma gegaan; hy het nie soos 'n baba opgetree nie.",
    "Memo: enige EEN, bv. gedoen wat pa/broer nie kon nie; volwasse besluit; dapper opgetree. (Memo: 8.1.7(a) moet reg wees; hier onafhanklik gegradeer.)",
    [step(1, "Hoe wys Tasu se optrede dat Sterkman se woorde ironies is?",
      "Tasu het 'n volwasse besluit geneem en dapper opgetree, nie soos 'n baba nie.",
      ["Tasu het baie gehuil en die taxi amper nie geneem nie.", "Tasu het sy ma gevra om saam met hom na die ouma te gaan.", "Tasu het saam met Sterkman na die ouma gegaan."], 1)], TEKS_O),
  q("8", "8.1.8", "As jy Tasu se ma was, wat sou jy anders gedoen het om die taxigeld te kry?",
    1, K, "Evaluation", "Ek sou geld gaan leen het / 'n ander plan gemaak het (enige soortgelyke antwoord uit die memo).",
    "Open vraag; memo: enige EEN, bv. eiers verkoop; geld geleen; ander plan; kruie verkoop; mense se huise skoongemaak. FLAG: omgeskakel na 'kies die antwoord wat by die verhaal pas'.",
    [step(1, "Wat sou jy as Tasu se ma anders gedoen het om die taxigeld te kry?",
      "Ek sou geld by iemand geleen het.",
      ["Ek sou die ouma se kruiemedisyne weggegooi het.", "Ek sou niks gedoen het en gewag het tot die ouma beter word nie.", "Ek sou Sterkman gedwing het om sy matriekeksamen te los."], 2)]),
  q("8", "8.1.9", "Tasu was onselfsugtig. Gee 'n voorbeeld van sy onselfsugtigheid.",
    1, K, "Inference", "Hy het sy kosbare tieroë verkoop om taxigeld vir sy siek ouma te kry.",
    "Memo: enige EEN, bv. nie aan homself gedink nie; sy tieroë verkoop; op die taxi geklim al was hy bang.",
    [step(1, "Wat is 'n voorbeeld van Tasu se onselfsugtigheid?",
      "Hy het sy tieroë (wat vir hom kosbaar was) verkoop om sy ouma te help.",
      ["Hy het sy sweetpakbaadjie vir Sterkman gegee.", "Hy het die geld van die klippies vir homself gehou.", "Hy het sy brood met die ander mense in die taxi gedeel."], 0)]),
  q("8", "8.1.10(a)", "Een van die temas is dat dit nie altyd maklik is om die regte ding te doen nie. Kies die boodskap wat pas by: Tasu se ouma was baie siek.",
    1, K, "Inference", "C - 'n Mens behoort opofferinge vir jou familie te maak.", "Memo: C.",
    [fixed(1, "Watter boodskap pas by: Tasu se ouma was baie siek?",
      ["'n Mens moet seker maak dat jy geld in tye van nood het.", "'n Mens moet besef dat die regte keuses jou lewe in 'n goeie rigting stuur.", "'n Mens behoort opofferinge vir jou familie te maak.", "'n Mens moet soms ekstra moeite vir iemand doen, al is dit nie deel van jou werk nie."], 2)]),
  q("8", "8.1.10(b)", "Kies die boodskap wat pas by: Sterkman was kwaad oor sy slypsteen.",
    1, K, "Inference", "E - 'n Mens moet mooi na jou goed kyk.", "Memo: E.",
    [fixed(1, "Watter boodskap pas by: Sterkman was kwaad oor sy slypsteen?",
      ["'n Mens moet mooi na jou goed kyk.", "'n Mens moet seker maak dat jy geld in tye van nood het.", "'n Mens behoort opofferinge vir jou familie te maak.", "'n Mens moet besef dat die regte keuses jou lewe in 'n goeie rigting stuur."], 0)]),
  q("8", "8.1.10(c)", "Kies die boodskap wat pas by: Oom Jollyman het seker gemaak dat Tasu weet waar hy hom weer Sondag sou oplaai.",
    1, K, "Inference", "A - 'n Mens moet soms ekstra moeite vir iemand doen, al is dit nie deel van jou werk nie.", "Memo: A.",
    [fixed(1, "Watter boodskap pas by: Oom Jollyman het seker gemaak dat Tasu weet waar hy hom Sondag sou oplaai?",
      ["'n Mens moet mooi na jou goed kyk.", "'n Mens moet seker maak dat jy geld in tye van nood het.", "'n Mens behoort opofferinge vir jou familie te maak.", "'n Mens moet soms ekstra moeite vir iemand doen, al is dit nie deel van jou werk nie."], 3)]),
  q("8", "8.1.10(d)", "Kies die boodskap wat pas by: Tasu het besluit hy gaan nie meer bang wees nie.",
    1, K, "Inference", "B - 'n Mens moet besef dat die regte keuses jou lewe in 'n goeie rigting stuur.", "Memo: B.",
    [fixed(1, "Watter boodskap pas by: Tasu het besluit hy gaan nie meer bang wees nie?",
      ["'n Mens moet seker maak dat jy geld in tye van nood het.", "'n Mens moet mooi na jou goed kyk.", "'n Mens moet besef dat die regte keuses jou lewe in 'n goeie rigting stuur.", "'n Mens behoort opofferinge vir jou familie te maak."], 2)]),

  // ---- 8.2 'Geluk in ongeluk' - Thelton Masimila (17) ----
  q("8", "8.2.1(a)", "Dink aan die hele uittreksel. In watter ruimte speel hierdie uittreksel af?",
    1, K, "Literal", "In die kamer met die geel deur (Karla se hospitaal-/slaapkamer waar sy in 'n koma lê).",
    "Memo: enige EEN, bv. in Gavin en Karla se huis/slaapkamer; hospitaalkamer; die kamer met die geel deur.",
    [step(1, "In watter ruimte speel die uittreksel af?",
      "In die kamer met die geel deur waar Karla in 'n koma lê.",
      ["In die koffiewinkel met die Italiaanse naam.", "In die tweedehandse oudhedewinkel in Kaapstad.", "In Vicky se klaskamer."], 0)], TEKS_P),
  q("8", "8.2.1(b)", "Dink aan die hele uittreksel. Na wie verwys ''hy'' in reël 5?",
    1, K, "Literal", "Gavin.", "Memo: Gavin.",
    [step(1, "Na wie verwys ''hy'' in reël 5?", "Gavin", ["Karla", "Vicky", "die dokter"], 1)], TEKS_P),
  q("8", "8.2.2(a)", "\"Die lug ruik soos aarbeie.\" (Reël 4) Watter beeldspraak kry ons in hierdie reël?",
    1, K, "Literal", "('n) Vergelyking.", "Memo: ('n) vergelyking.",
    [step(1, "Watter beeldspraak kry ons in hierdie reël?", "'n Vergelyking", ["'n Metafoor", "Personifikasie", "Hiperbool"], 0)], TEKS_P),
  q("8", "8.2.2(b)", "Wat beteken \"Die lug ruik soos aarbeie\" binne die konteks van hierdie kortverhaal?",
    1, K, "Inference", "Dit was 'n reuk wat hom aan Karla herinner het / soete herinneringe aan sy vrou voor die ongeluk.",
    "Memo: enige EEN, bv. reuk wat hom aan Karla herinner het; Karla het altyd aarbeisap gedrink; soete herinneringe. (Memo: 8.2.2(a) moet reg wees; hier onafhanklik gegradeer.)",
    [step(1, "Wat beteken die aarbeireuk in die konteks van die kortverhaal?",
      "Dit herinner Gavin aan Karla en aan soete herinneringe voor die ongeluk.",
      ["Dit is die skoonmaakmiddel van die hospitaal wat Gavin pla.", "Dit is die reuk van die kos wat Gavin vir Karla gebring het.", "Dit wys dat dit somer is."], 2)], TEKS_P),
  q("8", "8.2.3", "Wat is die simboliek van die ''geel deur'' (reël 5) in hierdie kortverhaal?",
    1, K, "Inference", "Dit simboliseer sonskyn/vrolikheid/geluk/hoop (die kleur waarvan Karla gehou het).",
    "Memo: enige EEN, bv. kleur waarvan Karla gehou het; sonskyn/geluk/hoop; warm/positiewe kleur; lig in donker omstandighede.",
    [step(1, "Wat is die simboliek van die geel deur?",
      "Dit simboliseer sonskyn, geluk en hoop.",
      ["Dit simboliseer die dood en die einde van Karla se lewe.", "Dit simboliseer die gevaar van die hospitaal.", "Dit simboliseer Gavin se skuldgevoel."], 1)], TEKS_P),
  q("8", "8.2.4(a)", "\"Vandag ruik hy steeds die aarbeie, maar die hoendervleis is nie meer daar nie.\" (Reël 7 en 8)\nUit hierdie gedagtes van Gavin lei ons af dat vandag ('n gewone dag sou wees/'n verandering in Gavin se lewe sou bring).",
    1, K, "Inference", "'n Verandering in Gavin se lewe sou bring.", "Memo: 'n verandering in Gavin se lewe sou bring.",
    [step(1, "Kies die KORREKTE antwoord: vandag ...",
      "'n verandering in Gavin se lewe sou bring", ["'n gewone dag sou wees", "Karla se herstel sou bring", "'n nuwe ongeluk sou veroorsaak"], 0)], TEKS_P),
  q("8", "8.2.4(b)", "Motiveer jou antwoord op VRAAG 8.2.4(a).",
    1, K, "Inference", "Dit was die dag dat hy vir Karla gesê het hy het die vorms geteken / toestemming gegee dat die masjiene afgeskakel word.",
    "Memo: enige EEN, bv. vorms ingevul; toestemming vir afskakel; nuwe lewe sonder Karla. (Memo: 8.2.4(a) moet reg wees; hier onafhanklik gegradeer.)",
    [step(1, "Hoe motiveer jy dat vandag 'n verandering sou bring?",
      "Dit was die dag dat Gavin vir Karla gesê het hy het die vorms geteken sodat die masjiene afgeskakel kan word.",
      ["Dit was die dag dat Karla uit die koma wakker sou word.", "Dit was die dag dat Vicky vir die eerste keer by die hospitaal sou kuier.", "Dit was die dag dat Gavin sy werk sou bedank."], 3)], TEKS_P),
  q("8", "8.2.5", "Skryf die volgende vier gebeure in die korrekte VOLGORDE: Gavin het vir Vicky vertel dat die masjiene afgeskakel gaan word; Gavin het vir Karla vertel dat hy die vorm geteken het; Die ander vrou het gehoor haar man is dood; Karla is ernstig beseer en in 'n koma.",
    4, K, "Reorganisation", "1. Die ander vrou het gehoor haar man is dood. 2. Karla is ernstig beseer en in 'n koma. 3. Gavin het vir Vicky vertel dat die masjiene afgeskakel gaan word. 4. Gavin het vir Karla vertel dat hy die vorm geteken het.",
    "Memo: 1 punt vir elke gebeure op die korrekte plek.",
    [
      step(1, "Watter gebeurtenis is EERSTE (posisie 1)?", "Die ander vrou het gehoor haar man is dood.", ["Karla is ernstig beseer en in 'n koma.", "Gavin het vir Vicky vertel dat die masjiene afgeskakel gaan word.", "Gavin het vir Karla vertel dat hy die vorm geteken het."], 0),
      step(1, "Watter gebeurtenis is TWEEDE (posisie 2)?", "Karla is ernstig beseer en in 'n koma.", ["Die ander vrou het gehoor haar man is dood.", "Gavin het vir Karla vertel dat hy die vorm geteken het.", "Gavin het vir Vicky vertel dat die masjiene afgeskakel gaan word."], 1),
      step(1, "Watter gebeurtenis is DERDE (posisie 3)?", "Gavin het vir Vicky vertel dat die masjiene afgeskakel gaan word.", ["Gavin het vir Karla vertel dat hy die vorm geteken het.", "Karla is ernstig beseer en in 'n koma.", "Die ander vrou het gehoor haar man is dood."], 2),
      step(1, "Watter gebeurtenis is VIERDE (posisie 4)?", "Gavin het vir Karla vertel dat hy die vorm geteken het.", ["Gavin het vir Vicky vertel dat die masjiene afgeskakel gaan word.", "Die ander vrou het gehoor haar man is dood.", "Karla is ernstig beseer en in 'n koma."], 3),
    ]),
  q("8", "8.2.6", "Vicky het Gavin se verduideliking aanvaar oor hoekom hy die masjiene gaan laat afskakel. Sê waarom hierdie stelling ONWAAR is.",
    1, K, "Inference", "Vicky het gesê dat haar pa net die geld vir die troue wou gebruik.",
    "Memo: Vicky het gesê dat haar pa net die geld vir die troue wou gebruik. FLAG 5: distraktors self uitgedink.",
    [step(1, "Waarom is die stelling ONWAAR?",
      "Vicky het gesê dat haar pa net die geld vir die troue wou gebruik.",
      ["Vicky het nie geweet dat Karla in die hospitaal was nie.", "Vicky was te jonk om iets van die masjiene te verstaan.", "Vicky het self besluit dat die masjiene afgeskakel moet word."], 1)]),
  q("8", "8.2.7", "Die universele tema van ... kom duidelik in hierdie kortverhaal na vore.",
    1, K, "Inference", "C - moeilike besluite.", "Memo: C/moeilike besluite.",
    [fixed(1, "Kies die KORREKTE antwoord: die universele tema van ...", ["ouerskap", "lewensverlies", "moeilike besluite", "ernstige motorongelukke"], 2)]),
  q("8", "8.2.8", "Hoe slaag die skrywer daarin om Gavin se innerlike konflik uit te druk?",
    1, K, "Inference", "Die skrywer beskryf hoe Gavin steeds met Karla praat en artikels vertel, al weet hy sy gaan nie wakker word nie / beeld sy herinneringe aan Karla uit.",
    "Memo: enige EEN, bv. herinneringe uitgebeeld; Gavin wat steeds lief is vir Karla al moet hy die masjiene afskakel; hy praat steeds met haar; hoendervleis wat nie meer kom nie.",
    [step(1, "Hoe druk die skrywer Gavin se innerlike konflik uit?",
      "Hy laat Gavin steeds met Karla praat en haar herinneringe uitbeeld, al weet hy sy gaan nie wakker word nie.",
      ["'n Verteller sê direk dat Gavin 'n skuldgevoel het.", "Daar is lang gesprekke tussen Gavin en die dokter.", "Gavin verskeur die brief in woede."], 0)], TEKS_P),
  q("8", "8.2.9(a)", "In hierdie kortverhaal sluit die titel, inhoud en slot goed bymekaar aan. Waaroor, dink jy, gaan die kortverhaal as jy net na die titel kyk?",
    1, K, "Inference", "Iets goeds wat uit iets slegs voortgespruit het / geluk en ongeluk.",
    "Memo: enige EEN, bv. iets goed uit iets sleg; iemand wat weer geluk na hartseer vind; geluk en ongeluk.",
    [step(1, "Waaroor, dink jy, gaan die kortverhaal as jy net na die titel kyk?",
      "Oor iets goeds wat uit iets slegs voortgespruit het.",
      ["Oor 'n man wat 'n lotery wen en sy familie verloor.", "Oor 'n gelukkige troue sonder enige probleme.", "Oor mense wat in motorongelukke sterf."], 1)]),
  q("8", "8.2.9(b)", "Watter geluk het die ongeluk vir Gavin gebring?",
    1, K, "Inference", "Gavin het verlief geraak op iemand anders / 'n tweede kans op geluk gekry.",
    "Memo: enige EEN, bv. verlief geraak op iemand anders; tweede kans op geluk; sielsgenoot net soos Karla; ma vir sy dogter.",
    [step(1, "Watter geluk het die ongeluk vir Gavin gebring?",
      "Hy het verlief geraak op iemand anders en 'n tweede kans op geluk gekry.",
      ["Karla het uit die koma wakker geword.", "Gavin het 'n groot erfenis ontvang.", "Gavin het geld gekry om die masjiene aan te hou."], 2)]),
  q("8", "8.2.9(c)", "Watter finaliteit kry ons in die slot van hierdie kortverhaal?",
    1, K, "Inference", "Gavin het afskeid geneem van sy vrou en besluit om die masjiene af te skakel / hy het die geel deur toegemaak.",
    "Memo: enige EEN, bv. afskeid geneem; besluit om masjiene af te skakel; geel deur toegemaak; hoofstuk afgesluit.",
    [step(1, "Watter finaliteit kry ons in die slot?",
      "Gavin het afskeid geneem van Karla en besluit om die masjiene af te skakel.",
      ["Karla het wakker geword en Gavin vergewe.", "Gavin het besluit om die masjiene tog aan te hou.", "Vicky het van die huis af weggeloop."], 3)]),

  // ======================= SECTION D: GEDIGTE - Q9 (35) =======================
  // ---- 9.1 'Ken jy die see ...' - Uys Krige (18) ----
  q("9", "9.1.1(a)", "Voltooi die paragraaf korrek met 'n woord uit die gedig: Alhoewel die see ... lyk, is dit eintlik baie gevaarlik.",
    1, G, "Literal", "Kalm (of stil/blinkgeskuur).", "Memo: kalm/blinkgeskuur/stil.",
    [step(1, "Hoe lyk die see, alhoewel dit gevaarlik is?", "kalm", ["woes", "troebel", "donker"], 0)], GEDIG_KRIGE),
  q("9", "9.1.1(b)", "Voltooi die paragraaf korrek met 'n woord uit die gedig: Wanneer 'n bries in 'n kwaai ... verander, moet die vissers om hulle lewens veg.",
    1, G, "Literal", "(Bulderende) wind.", "Memo: (bulderende) wind.",
    [step(1, "In wat verander die bries wanneer die vissers om hul lewens moet veg?", "wind", ["vlam", "golf", "tree"], 1)], GEDIG_KRIGE),
  q("9", "9.1.1(c)", "Voltooi die paragraaf korrek met 'n woord uit die gedig: As die storms nie ... nie, kan die vissers nie uitgaan om vis te vang nie.",
    1, G, "Literal", "Ophou (raas).", "Memo: ophou raas / ophou / ophou woester, wreder blaas (enige EEN).",
    [step(1, "Wat moet die storms doen sodat die vissers kan uitgaan?", "ophou", ["kelder", "tuur", "spartel"], 2)], GEDIG_KRIGE),
  q("9", "9.1.1(d)", "Voltooi die paragraaf korrek met 'n woord uit die gedig: Vissers wat op see is wanneer die storm baie erg is, kan doodgaan as hulle net een ... begaan.",
    1, G, "Literal", "(Ou) misstappie.", "Memo: (ou) misstappie.",
    [step(1, "Wat hoef die vissers net een van te begaan om dood te gaan?", "misstappie", ["waansin", "tree", "kuur"], 0)], GEDIG_KRIGE),
  q("9", "9.1.2(a)", "Lees strofe 5 (reëls 11-14; die refrein-reëls tel as aparte strofes). \"Ja, sleep die swart, swart wind die swart nag mee\" (Reël 11)\nDie spreker herhaal die woord ''swart'' om te beklemtoon dat ...",
    1, G, "Inference", "Hulle situasie op see lewensgevaarlik is.", "Memo: hulle situasie op see lewensgevaarlik is.",
    [step(1, "Die spreker herhaal ''swart'' om te beklemtoon dat ...",
      "hulle situasie op see lewensgevaarlik is.", ["dit baie donker is.", "die nag baie lank sal duur.", "die vissers se bote swart geverf is."], 1)], GEDIG_KRIGE),
  q("9", "9.1.2(b)", "Lees strofe 5 (reëls 11-14). \"Gee hy nog net één tree\" (Reël 13)\nDie spreker beklemtoon die woord ''één'' om te wys ...",
    1, G, "Inference", "Hoe na aan die dood die vissers op die boot is.", "Memo: hoe na aan die dood die vissers op die boot is.",
    [step(1, "Die spreker beklemtoon ''één'' om te wys ...",
      "hoe na aan die dood die vissers op die boot is.", ["dat die mense wat hulle kom help, naby is.", "dat die storm net 'n kort tydjie sal duur.", "dat die Dood net een visserman sal haal."], 2)], GEDIG_KRIGE),
  q("9", "9.1.3", "Die invloed van die see in strofes 7 en 9 verskil van mekaar (strofe 7 = reëls 16-19; strofe 9 = reëls 21-24). Hoe beïnvloed die see die visserman se lewe volgens strofe 7 en strofe 9? Jy moet in jou antwoord na strofe 7 en strofe 9 verwys.",
    2, G, "Inference", "Strofe 7: die storms hou die visserman in sy kliphuis; hy kan nie vis vang/geld maak nie en kry koud sonder hout. Strofe 9: hy kan van sy bootjie af gevee word deur 'n golf en verdrink.",
    "Memo: 1 punt vir strofe 7 (enige EEN) + 1 punt vir strofe 9 (enige EEN).",
    [
      step(1, "Hoe beïnvloed die see die visserman se lewe in strofe 7?", "Die storms hou hom in sy kliphuis, sonder inkomste en sonder hout vir vuur.", ["Die storms bring hom na 'n veiliger kus waar hy goed verdien.", "Die see gee hom oorvloed vis en 'n goeie inkomste.", "Die storms dryf al die vissers na die kerkhof."], 0),
      step(1, "Hoe beïnvloed die see die visserman se lewe in strofe 9?", "Hy kan deur 'n golf van sy bootjie af gevee word en verdrink.", ["Die golwe spoel hom veilig aan wal.", "Ander vissers red hom wanneer hy spartel en skree.", "Die golwe breek sy bootjie, maar hy kan maklik terugswem."], 1),
    ], GEDIG_KRIGE),
  q("9", "9.1.4(a)", "Kies die begrip wat by die aanhaling pas: \"grys golf\"",
    1, G, "Literal", "C - alliterasie.", "Memo: C/alliterasie.",
    [fixed(1, "Watter begrip pas by \"grys golf\"?", ["personifikasie", "metafoor", "alliterasie", "eufemisme"], 2)], GEDIG_KRIGE),
  q("9", "9.1.4(b)", "Kies die begrip wat by die aanhaling pas: \"Hy vreet mos aan jou ingewande nes 'n krap.\"",
    1, G, "Literal", "E - vergelyking (memo aanvaar ook A/personifikasie).", "Memo: E/vergelyking OF A/personifikasie (enige EEN). FLAG 3: personifikasie nie as opsie gebruik.",
    [fixed(1, "Watter begrip pas by \"Hy vreet mos aan jou ingewande nes 'n krap.\"?", ["vergelyking", "alliterasie", "metafoor", "eufemisme"], 0)], GEDIG_KRIGE),
  q("9", "9.1.4(c)", "Kies die begrip wat by die aanhaling pas: \"Hy wat met groen jaloerse oë na ons gluur,\"",
    1, G, "Literal", "A - personifikasie.", "Memo: A/personifikasie.",
    [fixed(1, "Watter begrip pas by \"Hy wat met groen jaloerse oë na ons gluur\"?", ["alliterasie", "personifikasie", "eufemisme", "vergelyking"], 1)], GEDIG_KRIGE),
  q("9", "9.1.4(d)", "Kies die begrip wat by die aanhaling pas: \"Hul slaap aldrie agter die kerkhofmuur.\"",
    1, G, "Literal", "D - eufemisme.", "Memo: D/eufemisme.",
    [fixed(1, "Watter begrip pas by \"Hul slaap aldrie agter die kerkhofmuur\"?", ["metafoor", "alliterasie", "vergelyking", "eufemisme"], 3)], GEDIG_KRIGE),
  q("9", "9.1.5", "Die spreker se toon teenoor die koper (Meneer) is ...",
    1, G, "Inference", "B - verwytend.", "Memo: B/verwytend.",
    [fixed(1, "Kies die KORREKTE woord: die spreker se toon teenoor die koper is ...", ["tevrede.", "verwytend.", "opgewonde.", "manipulerend."], 1)], GEDIG_KRIGE),
  q("9", "9.1.6", "Lees reëls 36 tot 39. Hoekom kan ons sê dat dit wat die spreker in reëls 1 tot 35 vir ons van die see vertel, in reëls 36 tot 39 bewys word? Jy moet in jou antwoord na reëls 1 tot 35 en hierdie reëls verwys.",
    2, G, "Inference", "Reëls 1-35: die spreker wys hoe gevaarlik die see/'n storm kan wees en dat dit jou dood kan veroorsaak. Reëls 36-39: mev. Mathee se seuns het op see gesterf - 'Hul slaap aldrie agter die kerkhofmuur'.",
    "Memo: 1 punt vir reëls 1-35 + 1 punt vir reëls 36-39.",
    [
      step(1, "Wat vertel die spreker in reëls 1 tot 35?", "Hoe gevaarlik die see/'n storm kan wees en dat dit die dood kan veroorsaak.", ["Dat die see goedkoop vis lewer en die vissers ryk maak.", "Dat die vissers die see liefhet en nooit bang is nie.", "Dat die koper nie vis wil koop nie."], 2),
      step(1, "Hoe word dit in reëls 36 tot 39 bewys?", "Mev. Mathee se seuns het op see gesterf: 'Hul slaap aldrie agter die kerkhofmuur'.", ["Mev. Mathee se seuns kom veilig tuis vir tee.", "Mev. Mathee wag om vis te kom verkoop.", "Mev. Mathee se seuns het die dorp verlaat."], 0),
    ], GEDIG_KRIGE),
  q("9", "9.1.7", "Waarom is die gebruik van retoriese vrae in hierdie gedig gepas?",
    1, G, "Evaluation", "Die spreker verwag nie antwoorde nie; die vrae beklemtoon dat Meneer die gevaar van die see nie ken/onderskat nie.",
    "Memo: enige EEN, bv. spreker praat met homself; verwag nie antwoorde nie; beklemtoon dat Meneer die see onderskat; laat koper skuldig voel; skep spanning.",
    [step(1, "Waarom is retoriese vrae gepas?",
      "Die spreker verwag nie antwoorde nie; die vrae beklemtoon dat Meneer die gevaar van die see nie ken nie.",
      ["Die spreker wil werklik by Meneer leer hoe om die see te ken.", "Die vrae wys dat die spreker twyfel of hy visserman wil bly.", "Die vrae gee antwoorde wat die leser kan onthou."], 1)], GEDIG_KRIGE),
  q("9", "9.1.8", "''Dan sê jy nog, Meneer, die vis is duur.'' (Reël 5) / ''En jy sê nog, Meneer, die vis is duur.'' (Reël 10)\nIn hierdie twee reëls plaas die digter klem op ''nog'' (reël 5) en ''jy'' (reël 10). Wat wil die digter vir die leser hiermee sê?",
    2, G, "Inference", "Reël 5 ('nog'): die koper hou aan kla oor die prys al het hy die verduidelikings gehoor. Reël 10 ('jy'): die koper weet nie hoe gevaarlik die see is nie, maar kla maklik.",
    "Memo: 1 punt vir 'nog' + 1 punt vir 'jy' (enige EEN elk).",
    [
      step(1, "Wat wil die digter met die klem op ''nog'' (reël 5) sê?", "Die koper hou aan kla oor die prys, al het hy die verduidelikings gehoor.", ["Die vissers het die prys van die vis reeds verlaag.", "Die koper wag nog vir sy vis.", "Die koper het al meer as een keer vis gekoop."], 3),
      step(1, "Wat wil die digter met die klem op ''jy'' (reël 10) sê?", "Die koper (Meneer) weet nie hoe gevaarlik die see is nie, maar kla maklik.", ["Die spreker praat met homself.", "Die koper is self 'n visserman.", "Die spreker wil hê die koper moet die vis goedkoper verkoop."], 0),
    ], GEDIG_KRIGE),

  // ---- 9.2 'Sproeireën' - DJ Opperman (17) ----
  q("9", "9.2.1", "Aan watter TWEE spesifieke persone dink die spreker? (Lees reël 1 en reël 2.)",
    2, G, "Literal", "Sy nooi (reël 1) en sy ouma (reël 2).", "Memo: sy nooi/meisie/geliefde; sy ouma (1 punt elk).",
    [
      step(1, "Aan wie dink die spreker in reël 1 (''My nooi is in 'n nartjie'')?", "sy nooi (geliefde)", ["sy dogter", "sy suster", "sy tante"], 0),
      step(1, "Aan wie dink die spreker in reël 2 (''my ouma in kaneel'')?", "sy ouma", ["sy ma", "sy tante", "sy buurvrou"], 0),
    ], GEDIG_OPPERMAN),
  q("9", "9.2.2", "'n Strofe wat uit 4 reëls bestaan, is 'n ...",
    1, G, "Literal", "Kwatryn.", "Memo: kwatryn.",
    [fixed(1, "Voltooi: 'n Strofe van 4 reëls is 'n ...", ["koeplet", "tersine", "kwatryn", "sestet"], 2)], GEDIG_OPPERMAN),
  q("9", "9.2.3", "Watter sintuig word hoofsaaklik in hierdie gedig gebruik?",
    1, G, "Literal", "Reuk(sintuig).", "Memo: reuk/ruik.",
    [step(1, "Watter sintuig word hoofsaaklik gebruik?", "reuk", ["gehoor", "smaak", "gesig"], 0)], GEDIG_OPPERMAN),
  q("9", "9.2.4(a)", "\"daar's 'n vrou in elke geur!\" (Reël 4) Noem EEN spesery wat die spreker aan spesifieke mense laat dink.",
    1, G, "Literal", "Kaneel (of anys).", "Memo: kaneel/anys (enige EEN); slegs kaneel as opsie gebruik.",
    [step(1, "Watter spesery laat die spreker aan 'n spesifieke persoon dink?", "kaneel", ["peper", "borrie", "naeltjies"], 1)], GEDIG_OPPERMAN),
  q("9", "9.2.4(b)", "Wat kan ons aflei uit die spreker se verwysing na die verskillende geure?",
    1, G, "Inference", "Verskillende geure laat die spreker aan verskillende vroue in sy lewe dink / skep herinneringe.",
    "Memo: enige EEN, bv. baie geure hou verband met kos; verskillende geure laat hom aan sekere vroue dink; waardering vir vroue; elke vrou het 'n unieke geur.",
    [step(1, "Wat kan ons uit die verwysing na verskillende geure aflei?",
      "Verskillende geure laat hom aan verskillende vroue in sy lewe dink.",
      ["Die spreker is 'n kok wat met speserye werk.", "Die spreker hou nie van sterk geure nie.", "Al die geure herinner hom net aan een vrou."], 2)], GEDIG_OPPERMAN),
  q("9", "9.2.5(a)", "Hou die hele gedig in gedagte. Gee EEN woord uit die gedig wat vir ons sê dat die inhoud iemand se eie, persoonlike siening is.",
    1, G, "Inference", "''my'' (of ''ek'').", "Memo: ''ek'' of ''my'' (enige EEN).",
    [step(1, "Watter woord wys dat die inhoud 'n persoonlike siening is?", "my", ["jy", "hulle", "ons"], 2)], GEDIG_OPPERMAN),
  q("9", "9.2.5(b)", "Ons kan sê dat die inhoud van hierdie gedig 'n sterk (denotatiewe/konnotatiewe) betekenis het.",
    1, G, "Inference", "Konnotatiewe.", "Memo: konnotatiewe.",
    [fixed(1, "Kies die KORREKTE woord: die inhoud het 'n sterk ... betekenis.", ["denotatiewe", "konnotatiewe", "letterlike", "feitelike"], 1)], GEDIG_OPPERMAN),
  q("9", "9.2.6(a)", "Lees weer strofe 2 (reëls 5-11). Na watter vrug verwys die sproeireën waarvan die spreker praat?",
    1, G, "Literal", "'n Nartjie (sitrusvrug).", "Memo: 'n nartjie/nartjies/sitrusvrug.",
    [step(1, "Na watter vrug verwys die sproeireën?", "'n nartjie", ["'n appel", "'n perske", "'n druif"], 0)], GEDIG_OPPERMAN),
  q("9", "9.2.6(b)", "Lees weer strofe 2. Waar kom hierdie sproeireën vandaan? Verduidelik dit in jou eie woorde.",
    1, G, "Inference", "Fyn druppels sap spat uit die nartjieskil wanneer jy dit buig of knak.",
    "Memo: enige EEN, bv. buig/knak 'n nartjieskil tussen die vingers; fyn druppels sap; dit kom van die nartjieskil.",
    [step(1, "Waar kom die sproeireën vandaan?",
      "Fyn druppels sap spat uit die nartjieskil wanneer jy dit buig of knak.",
      ["Dit kom van wolke bo die boorde.", "Dit kom van die water waarmee die boorde natgelei word.", "Dit kom van die kaneel wat die spreker strooi."], 1)], GEDIG_OPPERMAN),
  q("9", "9.2.6(c)", "Lees weer strofe 2. Noem TWEE positiewe herinneringe wat hierdie sproeireën vir die spreker bring.",
    2, G, "Inference", "Hy onthou die jare/boorde van Swartfoloos; en hy weet hoe 'n vrou kan troos.",
    "FLAG 2: memo se 'Enige EEN' maar 2 punte, twee kolpunte - elk as 1 punt behandel.",
    [
      step(1, "Watter plek se herinnering bring die sproeireën?", "Die boorde van Swartfoloos", ["Die vlaktes van die Karoo", "Die wingerde van Paarl", "Die kerkhof by sy ouma se plaas"], 1),
      step(1, "Watter ander herinnering bring die sproeireën?", "Hoe 'n vrou kan troos", ["Hoe 'n vrou kan kook", "Hoe 'n vrou hom kan straf", "Hoe 'n vrou op sy terugkeer wag"], 0),
    ], GEDIG_OPPERMAN),
  q("9", "9.2.7", "In reël 7 en reël 9 is die woordorde verander. Hierdie stylfiguur staan bekend as (elisie/inversie).",
    1, G, "Literal", "Inversie.", "Memo: inversie.",
    [fixed(1, "Kies die KORREKTE woord: die stylfiguur is ...", ["elisie", "inversie", "ellips", "antitese"], 1)], GEDIG_OPPERMAN),
  q("9", "9.2.8", "Waarom is strofe 1 en strofe 3 ingekeep?",
    1, G, "Inference", "Dit beklemtoon/hef die refrein uit.",
    "Memo: enige EEN, bv. beklemtoon die refrein; vestig aandag op die refrein; beklemtoon die kernboodskap; lirieke aard.",
    [step(1, "Waarom is strofe 1 en strofe 3 ingekeep?",
      "Dit beklemtoon die refrein.",
      ["Dit wys dat die strofes nie met die res verband hou nie.", "Dit dui op 'n verandering van spreker.", "Dit wys dat dit die slot van die gedig is."], 2)], GEDIG_OPPERMAN),
  q("9", "9.2.9", "Al is die inhoud baie persoonlik, het hierdie gedig 'n ... tema omdat mense oral oor daarmee kan identifiseer.",
    1, G, "Inference", "C - universele.", "Memo: C/universele.",
    [fixed(1, "Kies die KORREKTE woord: die gedig het 'n ... tema.", ["literêre", "fiktiewe", "universele", "alledaagse"], 2)], GEDIG_OPPERMAN),
  q("9", "9.2.10", "Die inhoud van hierdie gedig is waarderend van aard. Verwys na die gebruik van die ellips in reël 14 en die uitroepteken aan die einde van reël 15 om te motiveer waarom hierdie stelling WAAR is.",
    2, G, "Inference", "Reël 14: die ellips beklemtoon dat daar altyd iemand/'n vrou in sy lewe was / die spreker sukkel om te onthou wie by anys hoort. Reël 15: die uitroepteken wys sy blydskap/bewondering vir vroue.",
    "Memo: 1 punt vir reël 14 (ellips) + 1 punt vir reël 15 (uitroepteken).",
    [
      step(1, "Wat wys die ellips in reël 14?", "Daar was altyd 'n vrou in sy lewe; hy sukkel om te onthou wie by anys hoort.", ["Die spreker raak moeg en wil ophou praat.", "Die spreker is onseker of hy sy ouma wil onthou.", "Die ellips dui op 'n vraag aan die leser."], 0),
      step(1, "Wat wys die uitroepteken aan die einde van reël 15?", "Sy blydskap en bewondering vir vroue.", ["Sy woede teenoor vroue.", "Sy skok oor die sterk geure.", "Dat hy iemand roep."], 1),
    ], GEDIG_OPPERMAN),
];
