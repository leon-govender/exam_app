// Real school past paper: Parktown Boys' High School Geography Prelim
// Paper 1, 6 September 2024. Source: the school's own question paper +
// official memo (both supplied by the user as local PDFs, cross-verified
// page-by-page against each other — same pattern as the 2023 datasets).
//
// Scope: Sections A (Climate & Weather, Q1-4) and B (Geomorphology, Q5-8)
// — 150 of the paper's 150 marks are split 60/60/30 across three
// sections; Section C (Mapwork, 30 marks) requires the physical 1:50 000
// topographic map (3325DC & DD / 3425BA GQEBERHA) + orthophoto, which
// weren't supplied, so it's excluded — same reasoning as the other real
// papers in this app.
//
// Within A+B, one sub-question is a pure drawing task the app has no way
// to grade and is excluded: 3.3 (cross-section sketch of Berg winds, 4
// marks).
//
// Included total: 116 of 150 marks (56 from Section A, 60 from Section B).
//
// MEMO-DOCUMENTED QUESTION ERROR: Q5.1 was printed as "state whether each
// [statement] is found in the UPPER, MIDDLE or LOWER course of a river"
// but the statements themselves already assert a specific course (e.g.
// "Erosion is dominant in the lower course of a river") — some of those
// assertions are wrong. The memo itself flags this ("NOTE: Question error
// – Should have been true or false") and grades it as a true/false
// exercise, giving the correct course for each false statement. Seeded
// here as true/false questions per the memo's own fix, not the printed
// wording.
//
// Model answers/marking notes below are written in our own words from the
// memo's content, not copied verbatim (except short direct quotes from
// the hurricane-forecast news article reprinted in Question 2, which is
// itself quoted material within the original paper).

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/geography-2024-prelim-p1";

export const subject = {
  name: "Geography",
  stream: null as string | null,
};

export const cognitiveLevels = [
  { name: "Recall", order_index: 1 },
  { name: "Comprehension", order_index: 2 },
  { name: "Analysis", order_index: 3 },
  { name: "Evaluation", order_index: 4 },
];

export const topics = [
  {
    key: "valley-climates",
    name: "Valley Climates",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Valley Climates)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=valley+climates+anabatic+katabatic+winds+geography+grade+12",
  },
  {
    key: "urban-climates",
    name: "Urban Climates (Urban Heat Islands)",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Urban Climates)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=urban+heat+island+geography+grade+12",
  },
  {
    key: "subtropical-anticyclones",
    name: "Subtropical Anticyclones & Pressure Systems",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Subtropical Anticyclones)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=subtropical+anticyclones+south+africa+geography+grade+12",
  },
  {
    key: "tropical-cyclones",
    name: "Tropical Cyclones",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Tropical Cyclones)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=tropical+cyclones+CAPS+geography+grade+12",
  },
  {
    key: "fluvial-processes",
    name: "Fluvial Processes",
    caps_term: "Term 2",
    textbook_ref: "Focus Geography Grade 12 — Geomorphology (Fluvial Processes)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=fluvial+processes+river+long+profile+grade+12+geography",
  },
  {
    key: "drainage-basin-management",
    name: "Drainage Basin Management",
    caps_term: "Term 2",
    textbook_ref: "Focus Geography Grade 12 — Geomorphology (Drainage Basin Management)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=drainage+basin+flood+management+grade+12+geography",
  },
];

export const paper = {
  year: 2024,
  exam_diet: "September",
  paper_number: "P1",
  duration_minutes: 140, // scaled from the real 180 min / 150 marks to the 116 marks included here
  total_marks: 116,
  source_url: null as string | null,
};

interface QuestionSeed {
  number: string;
  sub_number: string | null;
  text: string;
  marks: number;
  topicKey: string;
  cognitiveLevelName: string;
  model_answer: string;
  marking_notes: string;
  marking_points: MarkingPoint[];
  image_url?: string;
}

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: SHORT QUESTIONS (15 marks) ============

  // ---------- 1.1 MCQ (A-D), 8 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Pressure belts can be defined as … (A) A localised area of low pressure such as a cold front. (B) Areas of differing pressure that extend around the planet going from East to West. (C) Extended areas of differing pressure found along the coastline. (D) Areas of differing pressure that extend around the planet going from North to South.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "B — areas of differing pressure that extend around the planet going from East to West.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "A North facing slope in South Africa would experience ... (A) Warmer conditions between December and February. (B) Colder conditions between December and February. (C) Consistently warmer conditions throughout the year. (D) Consistently cooler conditions throughout the year.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "A — warmer conditions between December and February.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Katabatic winds refer to … (A) Winds that blow up valley sides and along the valley floor during the day. (B) Winds that travel vertically up in cities due to excess heat sources. (C) Sinking winds resulting from temperature inversions. (D) Winds that blow down valley sides and along the valley floor during the night.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Recall",
    model_answer: "D — winds that blow down valley sides and along the valley floor during the night.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Anabatic winds refer to … (A) Winds that blow up valley sides and along the valley floor during the day. (B) Winds that travel vertically up in cities due to excess heat sources. (C) Sinking winds resulting from temperature inversions. (D) Winds that blow down valley sides and along the valley floor during the night.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Recall",
    model_answer: "A — winds that blow up valley sides and along the valley floor during the day.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Refer to the synoptic weather map of South Africa showing a low-pressure system approaching from the southwest, high-pressure cells over the interior/Lesotho area, and low-pressure cells near Cape Town and over Mozambique. The season shown above is most likely … (A) Summer. (B) Autumn. (C) Winter. (D) Spring.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "A — Summer.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.1-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "Refer to the synoptic map. The weather phenomenon seen approaching South Africa from the bottom left is a … (A) Mid-latitude cyclone. (B) Hurricane. (C) Tropical cyclone. (D) Cut-off low.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "A — Mid-latitude cyclone.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.1-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "The low pressure cells that are dominating the interior of South Africa have developed because … (i) There is an increase in heat this time of the year. (ii) The Kalahari High Pressure has lifted. (iii) The interior is hotter than the coastline. (iv) The cold Benguela current has weakened. (A) i & iii ONLY. (B) None of the above. (C) All of the above. (D) i, ii & iii ONLY.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "D — i, ii & iii ONLY.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "Low pressure systems in Summer can lead to … (A) Colder conditions over a few weeks. (B) Clearer skies. (C) Increased flooding risks. (D) Increased temperature over a few days.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "C — increased flooding risks.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },

  // ---------- 1.2 fill-in-the-blank on urban heat dome diagram, 7 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "Refer to the diagram of a heat dome over a city, showing hotter air rising above the urban area and colder air moving in from the surrounding rural areas. Air rising in the urban area would signify an area of (high pressure/low pressure).",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Comprehension",
    model_answer: "Low pressure.",
    marking_notes: "Accept only 'low pressure'.",
    marking_points: [{ marks: 1, description: "low pressure", keywords: ["low pressure"] }],
    image_url: `${IMG}/1.2-heat-dome.jpeg`,
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Rural areas are cooler due to having (increased wind/more vegetation) than urban areas.",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Recall",
    model_answer: "More vegetation.",
    marking_notes: "Accept only 'more vegetation' / 'vegetation'.",
    marking_points: [{ marks: 1, description: "more vegetation", keywords: ["more veg", "vegetation"] }],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "One reason for the air being warmer over urban areas is (an increase of artificial heating/more exposure to sunlight).",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Recall",
    model_answer: "An increase of artificial heating.",
    marking_notes: "Accept 'artificial heating'.",
    marking_points: [{ marks: 1, description: "artificial heating", keywords: ["artificial heating"] }],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Due to the urban heat island effect in summer, urban areas receive (more rainstorms/less rainstorms).",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Comprehension",
    model_answer: "More rainstorms.",
    marking_notes: "Accept only 'more rainstorms'.",
    marking_points: [{ marks: 1, description: "more rainstorms", keywords: ["more rainstorms"] }],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "The typical type of rain experienced in urban areas as a result of this heat island effect is (orographic/convectional) rain.",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Recall",
    model_answer: "Convectional.",
    marking_notes: "Accept only 'convectional'.",
    marking_points: [{ marks: 1, description: "convectional", keywords: ["convectional", "convection"] }],
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "In winter the urban heat island effect is subdued. This is because there is a lack of (artificial heat sources/sunlight) contributing to the effect.",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Comprehension",
    model_answer: "Sunlight.",
    marking_notes: "Accept only 'sunlight'.",
    marking_points: [{ marks: 1, description: "sunlight", keywords: ["sunlight"] }],
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "In winter we see the creation of pollution domes. Pollution is trapped over urban cities by (an inversion layer/cold fronts).",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Recall",
    model_answer: "An inversion layer.",
    marking_notes: "Accept only 'inversion layer'.",
    marking_points: [{ marks: 1, description: "inversion layer", keywords: ["inversion layer"] }],
  },

  // ============ QUESTION 2: TROPICAL CYCLONES (15 marks) ============
  {
    number: "2", sub_number: "2.1",
    text: 'Refer to the article below and answer the questions that follow.\n\n"New forecast reveals when and where hurricane season could get active after Ernesto" — By Mary Gilbert, CNN Meteorologist, published 20 August 2024.\n\nTropical activity in an unusually active hurricane season will take a breather after Ernesto, but forecasters don\'t believe it will last long. Atlantic storms will be limited for at least the next week — dry, dusty air and some disruptive winds in the upper atmosphere are making it difficult for stormy weather to get its act together. A similar setup kept the Atlantic quiet for a few weeks following record-breaking Hurricane Beryl.\n\nBut this brief break in activity isn\'t likely to last nearly as long, according to forecasts from the Climate Prediction Center. Once the dry, dusty air eases, Atlantic tropical activity could be off to the races as stormy weather pushes off the coast of Africa and out to sea unimpeded. This isn\'t surprising because the climatological peak of hurricane season is just a few weeks away.\n\nThe Atlantic ocean is also still near record-warm, which could help systems develop and potentially explode in strength — something becoming more common in a world warming due to fossil fuel pollution. The season has already been unusually active, producing five named storms — three of which became hurricanes — by mid-August. Ernesto strengthened into the third hurricane of the season almost a month earlier than normal, according to the NHC.\n\nBeryl also shattered expectations when it became the earliest Category 5 hurricane on record in early July. It was a major hurricane — Category 3 or stronger — almost two months ahead of schedule. This season has already racked up about half of the activity an entire normal season would produce with plenty of tropical activity to come.\n\nWhat ocean did hurricane Ernesto develop over?',
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Recall",
    model_answer: "The Atlantic (Ocean).",
    marking_notes: "Accept only 'Atlantic'.",
    marking_points: [{ marks: 1, description: "Atlantic", keywords: ["atlantic"] }],
  },
  {
    number: "2", sub_number: "2.2",
    text: "How many hurricanes have developed over the Atlantic this year, including Ernesto?",
    marks: 2, topicKey: "tropical-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "5.",
    marking_notes: "Accept only '5' (full 2 marks).",
    marking_points: [{ marks: 2, description: "5", keywords: ["5", "five"] }],
  },
  {
    number: "2", sub_number: "2.3",
    text: "According to the article, dry and dusty air is causing a 'break' in hurricane season. Why would dry and dusty air cause this 'break'?",
    marks: 2, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any one, developed: hurricanes need moisture to form/intensify, and dry air reduces the amount of moisture available.",
    marking_notes: "Any ONE point, developed for 2 marks: hurricanes need moisture; dry air reduces moisture.",
    marking_points: [{ marks: 2, description: "hurricanes need moisture, and dry air reduces available moisture", keywords: ["need moisture", "reduces moisture", "dry air"] }],
  },
  {
    number: "2", sub_number: "2.4",
    text: "Hurricanes develop over the Atlantic Ocean. What is the name we give to these massive storms when they develop over the Indian Ocean?",
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Recall",
    model_answer: "Tropical cyclones.",
    marking_notes: "Accept only 'tropical cyclones'.",
    marking_points: [{ marks: 1, description: "tropical cyclones", keywords: ["tropical cyclone"] }],
  },
  {
    number: "2", sub_number: "2.5",
    text: "When considering hurricane Ernesto, quote ONE piece of evidence from the article to support the notion that climate change may be responsible for these storms developing so early.",
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: '"The season has already been unusually active, producing five named storms — three of which became hurricanes — by mid-August," or "Ernesto strengthened into the third hurricane of the season almost a month earlier than normal."',
    marking_notes: "Accept either quoted piece of evidence about Ernesto specifically — NOT evidence about Beryl, since the question asks specifically about Ernesto.",
    marking_points: [{ marks: 1, description: "quotes evidence about Ernesto's early/unusual development", keywords: ["unusually active", "almost a month earlier", "five named storms"] }],
  },
  {
    number: "2", sub_number: "2.6",
    text: "In a paragraph of approximately EIGHT lines, discuss the social impacts of hurricanes and the strategies we can implement to mitigate the damage caused by these phenomena.",
    marks: 8, topicKey: "tropical-cyclones", cognitiveLevelName: "Evaluation",
    model_answer: "Social impacts (discussed, any two): jobs lost; deaths in the family; family structures ruined; trauma; breaks in education. Mitigation strategies (discussed, any two): planning; prediction and early warning; community preparations; managing the loss/response after the event. A complete answer needs both impacts and strategies (can be 3 of one and 1 of the other, but must include both).",
    marking_notes: "Must be a DISCUSSION, not just a list. Any TWO social impacts (2 marks each) + any TWO strategies (2 marks each), max 8 — accept 3+1 split either way as long as both categories are covered.",
    marking_points: [
      { marks: 2, description: "social impact 1: jobs lost / deaths in family / family structure ruined", keywords: ["jobs lost", "deaths in family", "family structure"] },
      { marks: 2, description: "social impact 2: trauma / breaks in education", keywords: ["trauma", "breaks in education"] },
      { marks: 2, description: "strategy 1: planning / prediction and warning", keywords: ["planning", "prediction", "warning"] },
      { marks: 2, description: "strategy 2: community preparations / managing the loss", keywords: ["community preparations", "manage the loss"] },
    ],
  },

  // ============ QUESTION 3: ANTI-CYCLONES (11 of 15 marks — 3.3 excluded, drawing) ============
  {
    number: "3", sub_number: "3.1",
    text: "Study the synoptic weather map below (2024/05/21, MSLP analysis) and answer the questions that follow. What season is this synoptic weather map depicting?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Winter.",
    marking_notes: "Accept only 'winter'.",
    marking_points: [{ marks: 1, description: "winter", keywords: ["winter"] }],
    image_url: `${IMG}/3-synoptic-map.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Provide the names for the pressure systems labelled A and C on the map respectively.",
    marks: 2, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "A — South Atlantic High Pressure/Anticyclone. C — South Indian High Pressure/Anticyclone.",
    marking_notes: "Both must include 'South' to be correct: South Atlantic (A) and South Indian (C).",
    marking_points: [
      { marks: 1, description: "A: South Atlantic (High/Anticyclone)", keywords: ["south atlantic"] },
      { marks: 1, description: "C: South Indian (High/Anticyclone)", keywords: ["south indian"] },
    ],
    image_url: `${IMG}/3-synoptic-map.png`,
  },
  {
    number: "3", sub_number: "3.4",
    text: "Discuss why Berg Winds are a danger to South Africa. Provide TWO reasons in your answer.",
    marks: 4, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two, discussed: they dry out crops and vegetation; they exacerbate veld fires; they disrupt ecosystems; they can cause heat stroke; they increase electricity usage (air conditioning etc.); fires caused by them can damage infrastructure.",
    marking_notes: "Must be a DISCUSSION. Any TWO of: drying crops/vegetation; exacerbating veld fires; disrupting ecosystems; heat stroke; increased electricity usage; fire damage to infrastructure. 2 marks each.",
    marking_points: [
      { marks: 2, description: "dries out crops/vegetation, or exacerbates veld fires", keywords: ["dry out crops", "veld fires", "vegetation"] },
      { marks: 2, description: "disrupts ecosystems, causes heat stroke, or damages infrastructure via fire", keywords: ["disrupt ecosystems", "heat stroke", "infrastructure", "electricity usage"] },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Not shown on this synoptic weather map is the Kalahari High Pressure cell that dominates the interior of South Africa during this season. Define the term High Pressure.",
    marks: 2, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Descending, heavy air.",
    marking_notes: "Core concept: descending, heavy air (2 marks).",
    marking_points: [{ marks: 2, description: "descending, heavy air", keywords: ["descending", "heavy air", "sinking air"] }],
  },
  {
    number: "3", sub_number: "3.6",
    text: "Describe the role that the Kalahari High Pressure cell plays in the reduction of rain over the interior during this season.",
    marks: 2, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "It prevents the rising of air, which prevents air from condensing, which prevents cloud formation.",
    marking_notes: "Chain of reasoning: prevents rising air (which prevents condensing, which prevents cloud formation) — any part of this chain, 2 marks.",
    marking_points: [{ marks: 2, description: "prevents rising air / condensing / cloud formation", keywords: ["prevents the rising", "prevents air condensing", "prevents cloud formation"] }],
  },

  // ============ QUESTION 4: VALLEY CLIMATES (15 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "Study the figure below showing a typical valley climate at night (cross-section with points A, B, C, D labelled) and answer the questions that follow. Name the wind that flows down a slope at night, labelled C.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Recall",
    model_answer: "Downslope wind / Katabatic wind.",
    marking_notes: "Accept 'downslope wind' or 'katabatic wind'.",
    marking_points: [{ marks: 1, description: "downslope/katabatic wind", keywords: ["downslope wind", "katabatic"] }],
    image_url: `${IMG}/4-valley-climate.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Explain how this wind (labelled C) formed.",
    marks: 4, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "Any two, explained: air temperatures drop at night; cold air is heavy and sinks; high pressure above causes the air to descend; at night there is a lack of heat sources, so there's no rising air to counteract it.",
    marking_notes: "Any TWO of: temperatures drop; cold air sinks (heavy); high pressure causes descent; lack of heat sources at night. 2 marks each.",
    marking_points: [
      { marks: 2, description: "air temperatures drop at night / cold air is heavy and sinks", keywords: ["temperatures drop", "cold air is heavy", "sinks"] },
      { marks: 2, description: "high pressure causes descent, or lack of heat sources at night", keywords: ["high pressure", "descend", "lack of heat sources"] },
    ],
    image_url: `${IMG}/4-valley-climate.png`,
  },
  {
    number: "4", sub_number: "4.3",
    text: "Indicate if warm or cold air would be found at A and B respectively.",
    marks: 2, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "A — Cold. B — Warmer.",
    marking_notes: "A: cold (1). B: warmer (1).",
    marking_points: [
      { marks: 1, description: "A: cold", keywords: ["cold"] },
      { marks: 1, description: "B: warmer", keywords: ["warmer", "warm"] },
    ],
    image_url: `${IMG}/4-valley-climate.png`,
  },
  {
    number: "4", sub_number: "4.4",
    text: "Fully explain how the inversion layer at B would form.",
    marks: 6, topicKey: "valley-climates", cognitiveLevelName: "Analysis",
    model_answer: "Clear, cloudless skies allow heavy air to descend (heat escapes rapidly via terrestrial radiation). This cool air sinks down towards the valley floor. Cold air begins to collect on the valley floor, displacing all the warmer air upward. This displaced warm air rises to form a thermal belt partway up the valley, resulting in a temperature inversion (warmer air sitting above colder air).",
    marking_notes: "Accept reasonable answers covering the sequence: clear skies → heavy descending air (2); cool air sinks to valley floor (2); cold air displaces warm air upward, forming a thermal belt/inversion (2).",
    marking_points: [
      { marks: 2, description: "clear cloudless skies cause heavy air to descend", keywords: ["clear", "cloudless", "descending air"] },
      { marks: 2, description: "cool air sinks towards the valley floor", keywords: ["sinks", "valley floor"] },
      { marks: 2, description: "cold air displaces warm air upward, forming a thermal belt/inversion", keywords: ["displacing", "thermal belt", "temperature inversion"] },
    ],
    image_url: `${IMG}/4-valley-climate.png`,
  },
  {
    number: "4", sub_number: "4.5",
    text: "List TWO potential concerns for people settling on the valley floor.",
    marks: 2, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: frost pockets may kill vegetation/crops; increased heating costs; cold conditions are dangerous to health.",
    marking_notes: "Any TWO of: frost pockets killing vegetation/crops; increased costs; dangerous cold conditions. 1 mark each.",
    marking_points: [
      { marks: 1, description: "frost pockets may kill vegetation/crops", keywords: ["frost pockets", "kill veg", "kill crops"] },
      { marks: 1, description: "increased costs / dangerous cold conditions", keywords: ["increase costs", "cold conditions are dangerous"] },
    ],
    image_url: `${IMG}/4-valley-climate.png`,
  },

  // ============ QUESTION 5: SHORT QUESTIONS (15 marks) ============

  // ---------- 5.1 true/false (per memo's own correction), 7 marks ----------
  {
    number: "5", sub_number: "5.1.1",
    text: "Say whether the following statement is TRUE or FALSE, and if FALSE, give the correct river course: 'Erosion is dominant in the lower course of a river.'",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "False — erosion is dominant in the upper course.",
    marking_notes: "False; correct course is upper.",
    marking_points: [{ marks: 1, description: "false, upper course", keywords: ["false", "upper"] }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Say whether the following statement is TRUE or FALSE: 'In an ideal transverse river profile, erosion and deposition would be equal in the middle course.'",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "True (middle course).",
    marking_notes: "True; middle course.",
    marking_points: [{ marks: 1, description: "true, middle course", keywords: ["true", "middle"] }],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Say whether the following statement is TRUE or FALSE: 'Rapids and waterfalls are features of the upper river course.'",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "True (upper course).",
    marking_notes: "True; upper course.",
    marking_points: [{ marks: 1, description: "true, upper course", keywords: ["true", "upper"] }],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Say whether the following statement is TRUE or FALSE, and if FALSE, give the correct river course: 'Most headward erosion takes place in the middle course of a river.'",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "False — most headward erosion happens in the upper course.",
    marking_notes: "False; correct course is upper.",
    marking_points: [{ marks: 1, description: "false, upper course", keywords: ["false", "upper"] }],
  },
  {
    number: "5", sub_number: "5.1.5",
    text: "Say whether the following statement is TRUE or FALSE, and if FALSE, give the correct river course: 'Oxbow lakes typically form within deltas.'",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "False — oxbow lakes form in the lower course (not specifically within deltas).",
    marking_notes: "False; correct course is lower.",
    marking_points: [{ marks: 1, description: "false, lower course", keywords: ["false", "lower"] }],
  },
  {
    number: "5", sub_number: "5.1.6",
    text: "Say whether the following statement is TRUE or FALSE: 'The Nile travelling through the desert would be an example of an episodic river.'",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "False — the Nile crossing the desert is an example of an exotic river, not an episodic one.",
    marking_notes: "False; correct term is exotic river.",
    marking_points: [{ marks: 1, description: "false, exotic river", keywords: ["false", "exotic"] }],
  },
  {
    number: "5", sub_number: "5.1.7",
    text: "Say whether the following statement is TRUE or FALSE: 'Saltation refers to the percentage of salt in a river.'",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "False — saltation is a sediment-transport process (particles bouncing/hopping along the riverbed), not a measure of salt content.",
    marking_notes: "False.",
    marking_points: [{ marks: 1, description: "false", keywords: ["false"] }],
  },

  // ---------- 5.2 term matching, 8 marks ----------
  {
    number: "5", sub_number: "5.2.1",
    text: "Match the term to the description. Terms: Capacity, Knickpoint, Sinuosity, Valley, Meander, Abrasion, Antecedent drainage, Hydraulic action, Source, Watershed, Confluence, Interfluves, Mouth, Laminar flow, Turbulent flow. Description: the erosion of the river bottom and the riverbank by the material carried in the river.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Abrasion.",
    marking_notes: "Accept only 'abrasion'.",
    marking_points: [{ marks: 1, description: "abrasion", keywords: ["abrasion"] }],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Match the term to the description. Description: the water level, or stage, at which a stream, river or lake is at the top of its banks and any further rise would result in water moving into the flood plain.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Capacity.",
    marking_notes: "Accept only 'capacity'.",
    marking_points: [{ marks: 1, description: "capacity", keywords: ["capacity"] }],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Match the term to the description. Description: a ridge or area of land dividing two river valleys within a drainage basin.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Interfluves.",
    marking_notes: "Accept only 'interfluves'.",
    marking_points: [{ marks: 1, description: "interfluves", keywords: ["interfluves"] }],
  },
  {
    number: "5", sub_number: "5.2.4",
    text: "Match the term to the description. Description: a term to describe a location in a river or channel where there is a sharp change in channel slope.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Knickpoint.",
    marking_notes: "Accept only 'knickpoint'.",
    marking_points: [{ marks: 1, description: "knickpoint", keywords: ["knickpoint"] }],
  },
  {
    number: "5", sub_number: "5.2.5",
    text: "Match the term to the description. Description: a process whereby the continual colliding of water and other materials on the base of the plunge pool gradually deepens the pool.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Hydraulic action.",
    marking_notes: "Accept only 'hydraulic action'.",
    marking_points: [{ marks: 1, description: "hydraulic action", keywords: ["hydraulic action"] }],
  },
  {
    number: "5", sub_number: "5.2.6",
    text: "Match the term to the description. Description: the term that refers to the beginning of a river.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Source.",
    marking_notes: "Accept only 'source'.",
    marking_points: [{ marks: 1, description: "source", keywords: ["source"] }],
  },
  {
    number: "5", sub_number: "5.2.7",
    text: "Match the term to the description. Description: an elevated area of land that separates two drainage basins.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Watershed.",
    marking_notes: "Accept only 'watershed'.",
    marking_points: [{ marks: 1, description: "watershed", keywords: ["watershed"] }],
  },
  {
    number: "5", sub_number: "5.2.8",
    text: "Match the term to the description. Description: a term used to describe calm water with little turbulence.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Laminar flow.",
    marking_notes: "Accept only 'laminar flow'.",
    marking_points: [{ marks: 1, description: "laminar flow", keywords: ["laminar flow"] }],
  },

  // ============ QUESTION 6: DRAINAGE BASINS (15 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "Refer to the figure below showing the Braamfontein Spruit drainage basin (Johannesburg) and answer the questions that follow. Name TWO tributaries of the Braamfontein Spruit.",
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Any two: Montgomery Spruit, Delta Park, Canal, Outspan Spruit.",
    marking_notes: "Any TWO of: Montgomery Spruit; Delta Park; Canal; Outspan Spruit. 1 mark each.",
    marking_points: [
      { marks: 1, description: "Montgomery Spruit or Canal", keywords: ["montgomery spruit", "canal"] },
      { marks: 1, description: "Delta Park or Outspan Spruit", keywords: ["delta park", "outspan spruit"] },
    ],
    image_url: `${IMG}/6-drainage-basin.jpeg`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "Using only the figure above, determine the stream order of the Braamfontein Spruit when the river passes Witkoppen Road.",
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Analysis",
    model_answer: "2nd order.",
    marking_notes: "Accept only '2nd order' (full 2 marks).",
    marking_points: [{ marks: 2, description: "2nd order", keywords: ["2nd order", "second order"] }],
    image_url: `${IMG}/6-drainage-basin.jpeg`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "Name ONE temporary base level along the Braamfontein Spruit as seen above.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Emmarentia Dam.",
    marking_notes: "Accept only 'Emmarentia Dam'.",
    marking_points: [{ marks: 1, description: "Emmarentia Dam", keywords: ["emmarentia"] }],
    image_url: `${IMG}/6-drainage-basin.jpeg`,
  },
  {
    number: "6", sub_number: "6.4",
    text: "With reference to the source above, suggest THREE ways in which urban development has impacted upon the natural channel flow of the Braamfontein Spruit.",
    marks: 6, topicKey: "drainage-basin-management", cognitiveLevelName: "Analysis",
    model_answer: "Any three, each linked to channel flow: increased pollution has slowed the flow down; construction near Jan Smuts Avenue/William Nicol Drive disrupts flow; golf courses have dammed up water, disrupting flow; Emmarentia Dam has stopped/slowed flow; the canal may have increased flow.",
    marking_notes: "Any THREE, each must link to channel flow (2 marks each): pollution slowing flow; road construction disrupting flow; golf courses damming water; Emmarentia Dam stopping flow; the canal increasing flow.",
    marking_points: [
      { marks: 2, description: "pollution has slowed the flow down", keywords: ["pollution", "slowed"] },
      { marks: 2, description: "construction (roads/golf courses) disrupts flow", keywords: ["construction", "golf course", "disrupts flow"] },
      { marks: 2, description: "Emmarentia Dam stopped flow, or the canal increased flow", keywords: ["emmarentia dam", "stopped flow", "canal"] },
    ],
    image_url: `${IMG}/6-drainage-basin.jpeg`,
  },
  {
    number: "6", sub_number: "6.5",
    text: "Storm water drains in the Braamfontein Spruit catchment are often blocked with rubbish. Suggest how this may impact upon the discharge of the Braamfontein Spruit AND the health of the various animals, birds and fish found in this area.",
    marks: 4, topicKey: "drainage-basin-management", cognitiveLevelName: "Analysis",
    model_answer: "Discharge: it slows down/blocks up the river's flow. Health: it reduces the health of animals, birds, and fish, and can kill them.",
    marking_notes: "Discharge: slows down/blocks the river (2). Health: reduces health of / kills animals, birds, fish (2). Both required.",
    marking_points: [
      { marks: 2, description: "slows down / blocks up the discharge", keywords: ["slow down the discharge", "block up the river"] },
      { marks: 2, description: "reduces the health of / kills animals, birds, fish", keywords: ["reduce the health", "kill all the animals"] },
    ],
    image_url: `${IMG}/6-drainage-basin.jpeg`,
  },

  // ============ QUESTION 7: FLUVIAL PROCESSES (15 marks) ============
  {
    number: "7", sub_number: "7.1",
    text: "Study the figure below (four panels A-D showing a waterfall retreating over less-erodible strata) and answer the questions that follow. What feature is being shown in the diagram above?",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Waterfall.",
    marking_notes: "Accept only 'waterfall'.",
    marking_points: [{ marks: 1, description: "waterfall", keywords: ["waterfall"] }],
    image_url: `${IMG}/7-waterfall-migration.png`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "What is another term for 'Less Erodible Strata'?",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Resistant strata / hard rock.",
    marking_notes: "Accept 'resistant strata' or 'hard rock'.",
    marking_points: [{ marks: 1, description: "resistant strata / hard rock", keywords: ["resistant strata", "hard rock"] }],
    image_url: `${IMG}/7-waterfall-migration.png`,
  },
  {
    number: "7", sub_number: "7.3",
    text: "Name the erosive process occurring at B.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Undercutting.",
    marking_notes: "Accept only 'undercutting'.",
    marking_points: [{ marks: 1, description: "undercutting", keywords: ["undercutting"] }],
    image_url: `${IMG}/7-waterfall-migration.png`,
  },
  {
    number: "7", sub_number: "7.4",
    text: "The feature identified in QUESTION 7.1 is migrating headwards. By referring to the diagram, explain how this process works.",
    marks: 6, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "The increased erosive power of the water removes rock, sometimes linked to rejuvenation. The softer, more erodible rock beneath is weathered away, and undercutting occurs, removing this soft rock (hydraulic action and abrasion). The resistant rock above eventually collapses once it's no longer supported, exposing more soft rock and creating a new lip. This process repeats over time, and the waterfall continues to migrate towards the source.",
    marking_notes: "Any THREE points (2 marks each, max 6): increased erosive power removes rock; soft rock is weathered/undercut by hydraulic action and abrasion; resistant rock above collapses, exposing more soft rock and a new lip; process repeats, waterfall migrates towards the source.",
    marking_points: [
      { marks: 2, description: "increased erosive power removes rock (rejuvenation)", keywords: ["erosive power", "removes rock", "rejuvenation"] },
      { marks: 2, description: "undercutting removes soft/erodible rock via hydraulic action/abrasion", keywords: ["undercutting", "soft rock", "hydraulic action", "abrasion"] },
      { marks: 2, description: "resistant rock above collapses, exposing more soft rock / new lip, and the process repeats", keywords: ["resistant rock", "collapses", "new lip", "repeats"] },
    ],
    image_url: `${IMG}/7-waterfall-migration.png`,
  },
  {
    number: "7", sub_number: "7.5",
    text: "Features like the above often develop as a result of river rejuvenation. Define the term River Rejuvenation.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "An increase in a river's erosive power/energy, or an increase in water volume and power of a river.",
    marking_notes: "Core concept: increase in erosive power, or increase in water volume/power. 2 marks.",
    marking_points: [{ marks: 2, description: "increase in erosive power/energy, or water volume", keywords: ["increase in erosive power", "increase in water volume", "increase in power"] }],
  },
  {
    number: "7", sub_number: "7.6",
    text: "Describe TWO negative consequences for people and/or animals that live downstream of a river that has been rejuvenated.",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "Any two: increased flood risk; possible infrastructure destruction; possible danger and death from flooding; destroyed livelihoods and crops.",
    marking_notes: "Any TWO of: increased flood risk; infrastructure destruction; danger/death from flooding; destroyed livelihoods/crops. 2 marks each.",
    marking_points: [
      { marks: 2, description: "increased flood risk / danger and death from flooding", keywords: ["flood risk", "danger", "death from flooding"] },
      { marks: 2, description: "infrastructure destruction / destroyed livelihoods and crops", keywords: ["infrastructure destruction", "livelihoods", "crops destroyed"] },
    ],
  },

  // ============ QUESTION 8: RIVER MANAGEMENT (15 marks) ============
  {
    number: "8", sub_number: "8.1",
    text: 'Study the article below, "SA\'s rivers and dams can no longer recover from pollution, say water scientists," and answer the questions that follow. The National Water Act has failed to meet its objective of improving the quality of water in South Africa\'s rivers and dams, according to a resource management scientist. "We release about seven billion litres of sewage every single day into our rivers and dams and the purpose of the National Water Act at its heart is to improve the quality of water resources," said Anthony Turton, a professor at the Centre for Environmental Management at the University of the Free State. "Many of our rivers and dams have now reached a point of collapse where they can no longer recover so we can state with empirical evidence that the National Water Act has failed." About 80% of the sewage released into waterways comes back into the system either partially treated or, in some cases, untreated. What was the objective of the National Water Act?',
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "To improve the quality of water (in South Africa's rivers and dams).",
    marking_notes: "Accept 'improve water quality'.",
    marking_points: [{ marks: 1, description: "improve water quality", keywords: ["improve water quality", "improve the quality of water"] }],
  },
  {
    number: "8", sub_number: "8.2",
    text: "According to the article, why did the National Water Act fail?",
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: pollution levels have increased in the water system; leadership has failed; maintenance has failed.",
    marking_notes: "Any TWO of: pollution levels increased; leadership failed; maintenance failed. 1 mark each.",
    marking_points: [
      { marks: 1, description: "pollution levels have increased", keywords: ["pollution levels have increased", "pollution increased"] },
      { marks: 1, description: "leadership has failed / maintenance has failed", keywords: ["leadership has failed", "maintenance has failed"] },
    ],
  },
  {
    number: "8", sub_number: "8.3",
    text: "What percentage of sewage released into rivers re-enters the water system?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "80%.",
    marking_notes: "Accept only '80%'.",
    marking_points: [{ marks: 1, description: "80%", keywords: ["80"] }],
  },
  {
    number: "8", sub_number: "8.4",
    text: "What does EIA stand for?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Environmental Impact Assessment.",
    marking_notes: "Accept 'Environmental Impact Assessment'.",
    marking_points: [{ marks: 1, description: "Environmental Impact Assessment", keywords: ["environmental impact assessment"] }],
  },
  {
    number: "8", sub_number: "8.5",
    text: "Describe ONE way that EIAs may help improve the quality of our rivers.",
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Any one, described: research from EIAs may help plan clean-ups; fines can be given to people/companies contributing negatively to the problem; officials can be held accountable; resources can be correctly allocated to the most vulnerable areas.",
    marking_notes: "Any ONE, described for 2 marks: research informs clean-up planning; fines for offenders; official accountability; correct resource allocation.",
    marking_points: [{ marks: 2, description: "research informs clean-ups / fines / accountability / resource allocation", keywords: ["plan clean ups", "fines", "held accountable", "resources", "allocated"] }],
  },
  {
    number: "8", sub_number: "8.6",
    text: 'Considering the quote from the article: "We need to go out of our way to have communication that is honest and accurate and to have incredible leadership." Write a short paragraph in which you explore what the future may hold for South Africans if we do not improve our current situation, and provide solutions that leadership could consider to improve the situation.',
    marks: 8, topicKey: "drainage-basin-management", cognitiveLevelName: "Evaluation",
    model_answer: "Future consequences (any two): increases in various diseases; increased cost to the health sector; increased cost to water purification; loss of tourism; loss of crops. Solutions (any two): Environmental Impact Assessments; fining offenders; changing legislation; restricting development along rivers.",
    marking_notes: "Any TWO future consequences (2 marks each, max 4) + any TWO solutions (2 marks each, max 4): diseases/health costs/purification costs/tourism loss/crop loss; EIAs/fines/legislation change/restricted development along rivers.",
    marking_points: [
      { marks: 2, description: "consequence 1: increased disease / health sector costs", keywords: ["increases in various diseases", "cost to health sector"] },
      { marks: 2, description: "consequence 2: increased purification costs / loss of tourism or crops", keywords: ["water purification", "loss of tourism", "loss of crops"] },
      { marks: 2, description: "solution 1: EIAs / fining offenders", keywords: ["environmental impact assessment", "fine offenders"] },
      { marks: 2, description: "solution 2: legislature change / restrict development along rivers", keywords: ["legislature change", "restrict development"] },
    ],
  },
];

// No exam_schedule entries here — the real dates (prelim + final) already
// live on the pilot dataset's examSchedule, keyed to the Geography subject
// as a whole rather than to any one paper.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
