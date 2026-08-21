// Real school past paper: Parktown Boys' High School Geography Prelim
// Paper 2, 27 September 2023. Source: the school's own question paper +
// official memo (both supplied by the user as local PDFs, cross-verified
// page-by-page against each other — same pattern as geography-p1-prelim2023.ts).
//
// Scope: Sections A (Rural and Urban Settlement, Q1-4) and B (Economic
// Geography, Q5-8) — the full 120 of 150 marks. Section C (Mapwork, 30
// marks) requires the physical 1:50 000 topographic map (2930CA MERRIVALE)
// + orthophoto, which weren't supplied, so it's excluded — same reasoning
// as the P1 dataset. Unlike P1, Sections A and B here contain no
// drawing-only sub-questions, so all 120 marks are included as-is.
//
// This is the first Settlement Geography / Economic Geography content in
// the app — all five topics below are new (previous Geography datasets
// only covered Climatology and Geomorphology).
//
// KNOWN MEMO ERROR: Q7.3 asks students to list factors that FAVOUR mining
// in South Africa, but the official memo's answer is a list of factors
// that HINDER mining (exchange-rate volatility, costly underground water,
// rising labour costs/strikes, environmental constraints, transport costs,
// HIV/lung disease). The memo's answer content is coherent and clearly
// intentional — it's the question wording that doesn't match. Per user
// decision, the question text below asks about HINDERING factors (to
// match the memo's actual answer), not the original "favour" wording.
//
// Model answers/marking notes below are written in our own words from the
// memo's content, not copied verbatim.

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/geography-2023-prelim-p2";

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
    key: "rural-urban-settlement",
    name: "Rural and Urban Settlement",
    caps_term: "Term 3",
    textbook_ref: "Focus Geography Grade 12 — Settlement Geography (Rural & Urban Settlement)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=rural+urban+settlement+central+place+theory+geography+grade+12",
  },
  {
    key: "rural-urban-migration",
    name: "Rural-Urban Migration",
    caps_term: "Term 3",
    textbook_ref: "Focus Geography Grade 12 — Settlement Geography (Migration & Urbanisation)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=rural+depopulation+urbanisation+south+africa+geography+grade+12",
  },
  {
    key: "economic-geography-agriculture",
    name: "Economic Geography — Agriculture",
    caps_term: "Term 3",
    textbook_ref: "Focus Geography Grade 12 — Economic Geography (Agriculture)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=agriculture+south+africa+geography+grade+12",
  },
  {
    key: "economic-geography-mining",
    name: "Economic Geography — Mining",
    caps_term: "Term 3",
    textbook_ref: "Focus Geography Grade 12 — Economic Geography (Mining)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=mining+industry+south+africa+geography+grade+12",
  },
  {
    key: "economic-geography-industry",
    name: "Economic Geography — Industry & Development Strategies",
    caps_term: "Term 3",
    textbook_ref: "Focus Geography Grade 12 — Economic Geography (Industrial Location, GEAR, BEE)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=industrial+location+GEAR+BEE+south+africa+geography+grade+12",
  },
];

export const paper = {
  year: 2023,
  exam_diet: "September",
  paper_number: "P2",
  duration_minutes: 144, // scaled from the real 180 min / 150 marks to the 120 marks included here
  total_marks: 120,
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

  // ---------- 1.1 term matching, 7 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Match the term/concept to the statement. Terms: urban hierarchy; threshold population; urban profile; invasion; break-of-bulk point; urban sprawl; facadism; site; gentrification; ghetto. Statement: minimum number of people needed to make a business profitable.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Threshold population.",
    marking_notes: "Accept 'threshold population' or 'threshold pop'.",
    marking_points: [{ marks: 1, description: "threshold population", keywords: ["threshold population", "threshold pop"] }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Match the term/concept to the statement. Statement: replacement of the original type of land use with another.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Gentrification.",
    marking_notes: "Accept only 'gentrification'.",
    marking_points: [{ marks: 1, description: "gentrification", keywords: ["gentrification"] }],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Match the term/concept to the statement. Statement: shows the height of the buildings of a city.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Urban profile.",
    marking_notes: "Accept only 'urban profile'.",
    marking_points: [{ marks: 1, description: "urban profile", keywords: ["urban profile"] }],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Match the term/concept to the statement. Statement: the shapeless, uncontrolled expansion of the city.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Urban sprawl.",
    marking_notes: "Accept only 'urban sprawl'.",
    marking_points: [{ marks: 1, description: "urban sprawl", keywords: ["urban sprawl"] }],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Match the term/concept to the statement. Statement: when the old, original front or facade of a building is retained and a new development is built behind the old facade.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Facadism.",
    marking_notes: "Accept only 'facadism'.",
    marking_points: [{ marks: 1, description: "facadism", keywords: ["facadism", "façadism"] }],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "Match the term/concept to the statement. Statement: ranking of urban settlements according to their function.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Urban hierarchy.",
    marking_notes: "Accept only 'urban hierarchy'.",
    marking_points: [{ marks: 1, description: "urban hierarchy", keywords: ["urban hierarchy"] }],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Match the term/concept to the statement. Statement: the actual place where a settlement grew.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Site.",
    marking_notes: "Accept only 'site'.",
    marking_points: [{ marks: 1, description: "site", keywords: ["site"] }],
  },

  // ---------- 1.2 MCQ (A-D), 8 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "The largest city type with significant economic power is known as a...: (A) megalopolis, (B) smart city, (C) conurbation, (D) metropolis.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "A — megalopolis.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "The smallest rural settlement is a...: (A) village, (B) hamlet, (C) town, (D) isolated farmstead.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "D — isolated farmstead.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "The largest rural settlement is a...: (A) town, (B) hamlet, (C) village, (D) isolated farmstead.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "C — village.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "The smallest urban settlement is a...: (A) city, (B) town, (C) village, (D) metropolis.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "B — town.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "A very small grouping of farmsteads without any services or shops is a...: (A) minor country town, (B) village, (C) hamlet, (D) central place.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "C — hamlet.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "An example of a specialised city is...: (A) Johannesburg, (B) the Vatican, (C) De Aar, (D) Durban.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "B — the Vatican.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "An example of a gateway/gap town is...: (A) Worcester, (B) Pretoria, (C) Phalaborwa, (D) Saldanha Bay.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "A — Worcester.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.2.8",
    text: "The transitional zone is known for...: (A) having mixed land use, (B) undergoing change, (C) being on the edge of the commercial zone, (D) all of the above.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "D — all of the above.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },

  // ============ QUESTION 2: CLASSIFICATION OF RURAL SETTLEMENTS (15 marks) ============
  {
    number: "2", sub_number: "2.1.1",
    text: "Refer to the sketch map of rural settlements A, B, C and D. Match settlement D with the statement: irregular and nucleated pattern.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "D.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.1-rural-settlement-map.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Match the settlement with the statement: irregular and dispersed pattern.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "A.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2.1-rural-settlement-map.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Match the settlement with the statement: nucleated pattern and linear shape.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "C.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2.1-rural-settlement-map.jpeg`,
  },
  {
    number: "2", sub_number: "2.2",
    text: "Describe ONE factor that may have influenced the pattern and shape of EACH of the settlements labelled A-D on the sketch map.",
    marks: 8, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "A — gradient, access to resources like soil or water, or the layout of the farm. B — access to the main road. C — defence (being on a hill) and the good view, which increases property value. D — access to the nearby water source.",
    marking_notes: "One factor per settlement (A-D), each described, 2 marks each: A — gradient/resource access/farm layout; B — access to main road; C — defence/hilltop position/view/property value; D — access to water source.",
    marking_points: [
      { marks: 2, description: "A: gradient / access to resources / farm layout", keywords: ["gradient", "access to resources", "soil", "farm layout"] },
      { marks: 2, description: "B: access to the main road", keywords: ["access to the main road", "main road"] },
      { marks: 2, description: "C: defence / hilltop / view / property value", keywords: ["defence", "hill", "view", "property value"] },
      { marks: 2, description: "D: access to nearby water source", keywords: ["water source", "access to nearby water"] },
    ],
    image_url: `${IMG}/2.1-rural-settlement-map.jpeg`,
  },
  {
    number: "2", sub_number: "2.3",
    text: "Differentiate between the terms site and situation.",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Site is the actual area a settlement is developed on. Situation is the location of a settlement in relation to its surrounding areas.",
    marking_notes: "Site: the actual area the settlement is built on (2). Situation: the settlement's location relative to its surroundings (2).",
    marking_points: [
      { marks: 2, description: "site: the actual area a settlement is developed on", keywords: ["actual area", "developed on"] },
      { marks: 2, description: "situation: location relative to surrounding areas", keywords: ["surrounding areas", "location relative", "relation to"] },
    ],
  },

  // ============ QUESTION 3: CASE STUDY — RURAL-URBAN MIGRATION (15 marks) ============
  {
    number: "3", sub_number: "3.1",
    text: 'Refer to the article "Rural migrants better off in cities" and the accompanying graph showing the percentage of people below the income poverty line for urban, migrant, and rural populations. The article states: "So government ambivalence about urbanisation should be replaced by a more positive and proactive approach." What do you understand by this sentence?',
    marks: 2, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "The government should start seeing urbanisation as an opportunity rather than a problem.",
    marking_notes: "Core idea: government should treat urbanisation as an opportunity, not a problem.",
    marking_points: [{ marks: 2, description: "government should see urbanisation as an opportunity, not a problem", keywords: ["opportunity", "not a problem"] }],
    image_url: `${IMG}/3-poverty-line-graph.jpeg`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Distinguish between rural depopulation and selective outward migration.",
    marks: 4, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Rural depopulation is when people leave a rural area because they have no other choice (e.g. due to climate change or unemployment). Selective outward migration is a choice to leave, and often involves a specific characteristic of person leaving (e.g. mostly men).",
    marking_notes: "Rural depopulation: people leave because they have no other choice (2). Selective outward migration: a choice to leave, often by a specific group/characteristic (2).",
    marking_points: [
      { marks: 2, description: "rural depopulation: people leave because they have no other choice", keywords: ["no other choice", "forced to leave"] },
      { marks: 2, description: "selective outward migration: a choice to leave, often a specific group", keywords: ["choice to leave", "specific characteristic", "selective"] },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "With reference to the article, discuss ONE positive and ONE negative consequence of rural-urban migration.",
    marks: 4, topicKey: "rural-urban-migration", cognitiveLevelName: "Analysis",
    model_answer: "Positive: rural-urban migration has the potential to become a huge economic boost — a variety of products are created, labour markets grow, and many people are helped at once. Negative: it can give rise to protests, land invasions, and other forms of antisocial behaviour, and cause overcrowding and strain on all services.",
    marking_notes: "Positive consequence, described (2): economic boost/variety of products/labour market growth/many people helped. Negative consequence, described (2): protests/land invasions/antisocial behaviour, or overcrowding/strain on services.",
    marking_points: [
      { marks: 2, description: "positive: economic boost / labour market growth / many people helped", keywords: ["economic boost", "labour market", "helped at once"] },
      { marks: 2, description: "negative: protests/land invasions/antisocial behaviour, or overcrowding/strain on services", keywords: ["protests", "land invasions", "antisocial behaviour", "overcrowding", "strain on"] },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Provide and explain ONE cause of rural depopulation.",
    marks: 2, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Any one, explained: climate change ruining livelihoods; unemployment and the rise of machines/mechanisation; the promise of a better life in the city.",
    marking_notes: "Must be explained, not just named. Accept: climate change; unemployment/mechanisation; promise of a better life.",
    marking_points: [{ marks: 2, description: "a cause of rural depopulation, explained (climate change / unemployment / mechanisation / promise of a better life)", keywords: ["climate change", "unemployment", "machines", "better life"] }],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Name THREE consequences of rural depopulation for the rural settlement.",
    marks: 3, topicKey: "rural-urban-migration", cognitiveLevelName: "Recall",
    model_answer: "Any three: a smaller workforce; less security; the youth leaving (less care for the elderly); less production; less innovation; more corruption; more crime.",
    marking_notes: "Any THREE of: less workforce; less security; youth leaving/less elderly care; less production; less innovation; more corruption; more crime. 1 mark each.",
    marking_points: [
      { marks: 1, description: "less workforce / less production", keywords: ["less workforce", "less production", "smaller workforce"] },
      { marks: 1, description: "less security / more crime / more corruption", keywords: ["less security", "more crime", "more corruption"] },
      { marks: 1, description: "youth leaves / less care of elderly / less innovation", keywords: ["youth leaves", "care of elderly", "less innovation"] },
    ],
  },

  // ============ QUESTION 4: CENTRAL PLACE THEORY (15 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "Refer to the diagram of Central Place Theory, showing villages/hamlets (lower order), towns (intermediate order), and cities (higher order) arranged in a hexagonal network. What is an urban hierarchy?",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "The ranking of urban settlements according to their function.",
    marking_notes: "Core concept: ranking of urban settlements according to function.",
    marking_points: [{ marks: 2, description: "ranking of urban settlements according to their function", keywords: ["ranking", "function"] }],
    image_url: `${IMG}/4-central-place-theory.jpeg`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Who developed the idea of Central Place Theory?",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Walter Christaller.",
    marking_notes: "Accept 'Christaller' — be lenient on spelling.",
    marking_points: [{ marks: 1, description: "Walter Christaller", keywords: ["christaller"] }],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Why, according to Central Place theory, do we find more lower order places than higher order places?",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Lower order centres require a far smaller threshold population, so more of them can exist.",
    marking_notes: "Core concept: lower order centres need a smaller threshold population, so there are more of them.",
    marking_points: [{ marks: 2, description: "lower order centres require a smaller threshold population", keywords: ["smaller threshold", "lower threshold population"] }],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Name ONE low and ONE higher order function or service suggested by Central Place Theory.",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Low order: e.g. a pizza takeaway, bakery, or butcher. Higher order: e.g. a heart surgeon, lawyer, or university.",
    marking_notes: "One low-order example (1) and one high-order example (1).",
    marking_points: [
      { marks: 1, description: "low order example (e.g. bakery, butcher, takeaway)", keywords: ["bakery", "butcher", "takeaway", "pizza"] },
      { marks: 1, description: "high order example (e.g. heart surgeon, lawyer, university)", keywords: ["surgeon", "lawyer", "university"] },
    ],
    image_url: `${IMG}/4-central-place-theory.jpeg`,
  },
  {
    number: "4", sub_number: "4.5",
    text: "In a paragraph of approximately EIGHT lines, discuss the THREE main ideas that underpin Central Place Theory and provide and explain ONE South African example where this applies.",
    marks: 8, topicKey: "rural-urban-settlement", cognitiveLevelName: "Evaluation",
    model_answer: "The three main ideas: people want convenience and the cheapest price; businesses want to maximise profits; travelling to buy goods must be kept to a minimum. Example: there are many petrol stations because people won't travel far for petrol (low order good); there are many McDonald's outlets for the same reason of convenience; people will travel all the way to Cape Town for a specialist medical operation because it's a high-order service not commonly available.",
    marking_notes: "Any THREE main ideas (2 marks each, max 6): convenience/cheapest price; businesses maximise profit; minimal travel. Plus ONE explained South African example (2): e.g. many petrol stations/fast-food outlets nearby (low order), or travelling far for a specialist service (high order).",
    marking_points: [
      { marks: 2, description: "idea: people want convenience and the cheapest price", keywords: ["convenience", "cheapest price"] },
      { marks: 2, description: "idea: businesses want to maximise profits", keywords: ["maximise profit", "maximize profit"] },
      { marks: 2, description: "idea: travelling must be kept to a minimum", keywords: ["travelling", "minimum", "travel far"] },
      { marks: 2, description: "a South African example, explained (e.g. petrol stations, fast food, or travelling for a specialist service)", keywords: ["petrol station", "specialist", "cape town", "high order service", "low order good"] },
    ],
  },

  // ============ QUESTION 5: SHORT QUESTIONS — ECONOMIC GEOGRAPHY (15 marks) ============

  // ---------- 5.1 term matching, 8 marks ----------
  {
    number: "5", sub_number: "5.1.1",
    text: "Match the term to its definition. Term: centripetal force. Options: (A) the side view of a city, (B) when old houses close to the city centre are modernised and improved, (C) changing the existing structure of land tenure; redistribution of land, (D) a strategy adopted by the government in 1994 to solve social and economic problems, (E) maximum distance that people travel to buy goods, (F) land owned by the community, (G) a gateway into the interior, (H) a plan to promote growth, employment and redistribution, (I) a force that attracts and keeps people in an urban settlement, (J) one of the core industrial regions in South Africa, (K) a force that repels and pushes people out of an urban settlement.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "I — a force that attracts and keeps people in an urban settlement.",
    marking_notes: "Accept only 'I'.",
    marking_points: [{ marks: 1, description: "I", keywords: ["i"] }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Match the term to its definition. Term: urban profile.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "A — the side view of a city.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Match the term to its definition. Term: range.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "E — maximum distance that people travel to buy goods.",
    marking_notes: "Accept only 'E'.",
    marking_points: [{ marks: 1, description: "E", keywords: ["e"] }],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Match the term to its definition. Term: GEAR strategy.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "H — a plan to promote growth, employment and redistribution.",
    marking_notes: "Accept only 'H'.",
    marking_points: [{ marks: 1, description: "H", keywords: ["h"] }],
  },
  {
    number: "5", sub_number: "5.1.5",
    text: "Match the term to its definition. Term: RDP.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "D — a strategy adopted by the government in 1994 to solve social and economic problems.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "5", sub_number: "5.1.6",
    text: "Match the term to its definition. Term: gap town.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "G — a gateway into the interior.",
    marking_notes: "Accept only 'G'.",
    marking_points: [{ marks: 1, description: "G", keywords: ["g"] }],
  },
  {
    number: "5", sub_number: "5.1.7",
    text: "Match the term to its definition. Term: gentrification.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "B — when old houses close to the city centre are modernised and improved.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "5", sub_number: "5.1.8",
    text: "Match the term to its definition. Term: PWV complex of Gauteng.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "J — one of the core industrial regions in South Africa.",
    marking_notes: "Accept only 'J'.",
    marking_points: [{ marks: 1, description: "J", keywords: ["j"] }],
  },

  // ---------- 5.2 fill-in-the-blank, 7 marks ----------
  {
    number: "5", sub_number: "5.2.1",
    text: "Choose the correct concept/term to make the statement TRUE: (Footloose/Ubiquitous) industries that can be located anywhere.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Footloose.",
    marking_notes: "Accept only 'footloose'.",
    marking_points: [{ marks: 1, description: "footloose", keywords: ["footloose"] }],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "An industry that produces less pollution and handles small amounts of raw materials, e.g. (Sasol/bakery).",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Bakery.",
    marking_notes: "Accept only 'bakery'.",
    marking_points: [{ marks: 1, description: "bakery", keywords: ["bakery"] }],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Industries located close to the consumer are known as (market/raw material) orientated industries.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Market.",
    marking_notes: "Accept only 'market'.",
    marking_points: [{ marks: 1, description: "market", keywords: ["market"] }],
  },
  {
    number: "5", sub_number: "5.2.4",
    text: "Industries that produce a lot of pollution and are located near bulk transport networks are known as (break-of-bulk/heavy) industries.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Heavy.",
    marking_notes: "Accept only 'heavy'.",
    marking_points: [{ marks: 1, description: "heavy", keywords: ["heavy"] }],
  },
  {
    number: "5", sub_number: "5.2.5",
    text: "Industries that remain in the same location even though the original reasons for being there are gone are referred to as (industrial inertia/hinterland).",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Industrial inertia.",
    marking_notes: "Accept only 'industrial inertia'.",
    marking_points: [{ marks: 1, description: "industrial inertia", keywords: ["industrial inertia"] }],
  },
  {
    number: "5", sub_number: "5.2.6",
    text: "Mineral (by-products/benefication) add value to a mineral.",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Recall",
    model_answer: "Beneficiation.",
    marking_notes: "Accept only 'beneficiation'.",
    marking_points: [{ marks: 1, description: "beneficiation", keywords: ["beneficiation", "benefication"] }],
  },
  {
    number: "5", sub_number: "5.2.7",
    text: "(Multiplier effects/Link industries) are referred to as additional economic developments that stem from the mining industry.",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "Link industries.",
    marking_notes: "Accept only 'link industries'.",
    marking_points: [{ marks: 1, description: "link industries", keywords: ["link industries"] }],
  },

  // ============ QUESTION 6: AGRICULTURE (15 marks) ============
  {
    number: "6", sub_number: "6.1",
    text: "Refer to the cartoon of a tractor labelled 'AGRICULTURE', carrying a sign reading 'AFRICA NEEDS YOUNG FARMERS', with the driver thinking 'JUST TRYING TO HELP.' Name the TWO types of farming practised in South Africa.",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "Commercial farming (large-scale or small-scale) and subsistence farming.",
    marking_notes: "Accept any TWO of: large-scale commercial; small-scale commercial; subsistence (commercial alone is accepted for one).",
    marking_points: [
      { marks: 1, description: "commercial farming", keywords: ["commercial"] },
      { marks: 1, description: "subsistence farming", keywords: ["subsistence"] },
    ],
    image_url: `${IMG}/6-agriculture-cartoon.jpeg`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "What is the message in the cartoon?",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "Africa's farming industry needs to grow/modernise, and needs young farmers — the industry is not expanding.",
    marking_notes: "Accept 'Africa needs young farmers' or that Africa's farming industry is not expanding/needs to modernise.",
    marking_points: [{ marks: 2, description: "Africa's farming industry needs to grow/modernise / needs young farmers", keywords: ["needs young farmers", "needs to grow", "modernise", "not expanding"] }],
    image_url: `${IMG}/6-agriculture-cartoon.jpeg`,
  },
  {
    number: "6", sub_number: "6.3",
    text: "Provide and explain TWO factors that favour farming in South Africa.",
    marks: 4, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Analysis",
    model_answer: "Any two, explained: a wide range of climates supports many crop types; a long growing season; flat land suitable for cultivation; many rivers for irrigation; the ability to grow exotic crops; climate and plant research (e.g. GMO crops); established trade networks.",
    marking_notes: "Any TWO, each explained (2 marks each): wide range of climates; long growing season; flat land; many rivers; exotic crops possible; climate/plant research; trade.",
    marking_points: [
      { marks: 2, description: "factor 1: wide range of climates / long growing season / flat land", keywords: ["wide range of climates", "long growing season", "flat land"] },
      { marks: 2, description: "factor 2: many rivers / exotic crops / climate or plant research / trade", keywords: ["many rivers", "exotic crops", "research", "trade"] },
    ],
    image_url: `${IMG}/6-agriculture-cartoon.jpeg`,
  },
  {
    number: "6", sub_number: "6.4",
    text: "What is food security?",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "Having sufficient access to food.",
    marking_notes: "Core concept: sufficient access to food.",
    marking_points: [{ marks: 2, description: "sufficient access to food", keywords: ["sufficient access", "access to food"] }],
  },
  {
    number: "6", sub_number: "6.5",
    text: "What is the link between poverty and food insecurity?",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "As food insecurity increases, so does poverty.",
    marking_notes: "Core concept: food insecurity and poverty rise together.",
    marking_points: [{ marks: 2, description: "as food insecurity increases, so does poverty", keywords: ["food insecurity increases", "poverty increases", "linked"] }],
  },
  {
    number: "6", sub_number: "6.6",
    text: "List THREE factors hindering agriculture in South Africa.",
    marks: 3, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "Any three: only about 7% of South Africa's land is arable; inconsistent and sometimes insufficient rainfall; droughts; poor soils in most regions; no agricultural subsidies; bad farming practices; land ownership issues; trade barriers.",
    marking_notes: "Any THREE of: only 7% arable land; inconsistent/insufficient rain; droughts; poor soils; no subsidies; bad farming practices; land ownership; trade. 1 mark each.",
    marking_points: [
      { marks: 1, description: "only 7% of land is arable / poor soils", keywords: ["7%", "arable", "poor soils"] },
      { marks: 1, description: "inconsistent rainfall / droughts", keywords: ["inconsistent", "insufficient rain", "drought"] },
      { marks: 1, description: "no subsidies / bad farming practices / land ownership issues", keywords: ["subsidies", "bad farming practices", "land ownership"] },
    ],
  },

  // ============ QUESTION 7: MINING (15 marks) ============
  {
    number: "7", sub_number: "7.1",
    text: "Refer to the graph 'South African mining production fell by 1,3% in 2019' (StatsSA, showing the volume of mining production, Index 2015=100, from 2017 to 2019). Which TWO years was South Africa's mining production the highest?",
    marks: 2, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "2017 and 2018.",
    marking_notes: "Accept only '2017' and '2018'.",
    marking_points: [
      { marks: 1, description: "2017", keywords: ["2017"] },
      { marks: 1, description: "2018", keywords: ["2018"] },
    ],
    image_url: `${IMG}/7-mining-graph.jpeg`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "How has the discovery and extraction of minerals benefited South Africa? Provide and explain TWO ways.",
    marks: 4, topicKey: "economic-geography-mining", cognitiveLevelName: "Analysis",
    model_answer: "Any two, explained: increased exports; an improved economy; jobs created; improved investment in South Africa; improved infrastructure.",
    marking_notes: "Any TWO, each explained (2 marks each): increased exports; improved economy; job creation; improved investment; improved infrastructure.",
    marking_points: [
      { marks: 2, description: "benefit 1: increased exports / improved economy", keywords: ["increased exports", "improved economy"] },
      { marks: 2, description: "benefit 2: jobs created / improved investment / improved infrastructure", keywords: ["jobs created", "improved investment", "improved infrastructure"] },
    ],
    image_url: `${IMG}/7-mining-graph.jpeg`,
  },
  {
    number: "7", sub_number: "7.3",
    text: "List THREE factors that hinder mining in South Africa.",
    marks: 3, topicKey: "economic-geography-mining", cognitiveLevelName: "Recall",
    model_answer: "Any three: fluctuations in the rand exchange rate; underground water being dangerous and costly to drain; rising labour costs and strike action; strict environmental regulations making mining difficult; high transport costs; HIV and lung diseases among mine workers.",
    marking_notes: "Any THREE of: rand exchange rate fluctuations; costly underground water drainage; rising labour costs/strikes; environmental regulations; high transport costs; HIV/lung disease. 1 mark each. NOTE: the original memo attaches this answer to a question asking for factors that FAVOUR mining — the question text here has been corrected to ask for HINDERING factors to match the memo's actual (correct, coherent) answer content; see file header.",
    marking_points: [
      { marks: 1, description: "exchange rate fluctuations / high transport costs", keywords: ["exchange rate", "transport costs"] },
      { marks: 1, description: "costly underground water / environmental regulations", keywords: ["underground water", "environmentally conscious", "environmental"] },
      { marks: 1, description: "rising labour costs / strikes / HIV and lung disease", keywords: ["labour costs", "strike", "hiv", "lung disease"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "What does the graph suggest about the future of mining in South Africa?",
    marks: 2, topicKey: "economic-geography-mining", cognitiveLevelName: "Analysis",
    model_answer: "Mining production is currently in a slump/decline but has historically stayed fairly steady overall; South Africa should probably start looking to invest elsewhere.",
    marking_notes: "Accept reasonable answers: currently in a slump but steady overall, or that SA should diversify investment.",
    marking_points: [{ marks: 2, description: "currently in a slump but historically steady, or SA should invest elsewhere", keywords: ["slump", "steady", "invest elsewhere"] }],
    image_url: `${IMG}/7-mining-graph.jpeg`,
  },
  {
    number: "7", sub_number: "7.5",
    text: "Why should South Africa be concerned about the future of mining? Provide and explain TWO reasons.",
    marks: 4, topicKey: "economic-geography-mining", cognitiveLevelName: "Evaluation",
    model_answer: "Any two, explained: mineral resources are finite and will eventually run out; machines are increasingly replacing human workers; world markets and demand are changing; the environment is suffering from the impacts of mining.",
    marking_notes: "Any TWO, each explained (2 marks each): mining is finite; machines replacing people; changing world markets; environmental damage.",
    marking_points: [
      { marks: 2, description: "reason 1: mining resources are finite / machines replacing people", keywords: ["finite", "machines are replacing", "automation"] },
      { marks: 2, description: "reason 2: world markets are changing / environment is suffering", keywords: ["world markets", "environment is suffering", "environmental damage"] },
    ],
  },

  // ============ QUESTION 8: STRATEGIES FOR INDUSTRIAL DEVELOPMENT (15 marks) ============
  {
    number: "8", sub_number: "8.1",
    text: "In the year 1996 the South African government started an ambitious housing development plan. List TWO reasons that it was based on.",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Past injustices needed to be rectified, and many people (particularly black South Africans under Apartheid) did not have housing.",
    marking_notes: "Accept: past injustices needed rectifying; many people lacked housing under Apartheid.",
    marking_points: [
      { marks: 1, description: "past injustices needed to be rectified", keywords: ["past injustices", "rectified"] },
      { marks: 1, description: "many people did not have housing (under Apartheid)", keywords: ["did not have housing", "no housing", "apartheid"] },
    ],
  },
  {
    number: "8", sub_number: "8.2",
    text: "What does BBB-EE stand for?",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Broad-Based Black Economic Empowerment.",
    marking_notes: "Accept 'Broad-Based Black Economic Empowerment' — be lenient on wording order.",
    marking_points: [{ marks: 1, description: "Broad-Based Black Economic Empowerment", keywords: ["broad based black economic empowerment", "black economic empowerment"] }],
  },
  {
    number: "8", sub_number: "8.3",
    text: 'Refer to the cartoon showing a politician on top of a boulder labelled "ESKOM" saying "IT\'S UP TO SA BUSINESS TO CREATE JOBS!", with a chained figure labelled "SA BUSINESS" (also weighed down by boulders labelled "CORRUPTION", "BBBEE" and "ANC POLICIES") replying "HOW ABOUT SOME HELP?" Explain the humour in the cartoon.',
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "The politician is telling SA business that it must create jobs, while SA business is shown chained down and unable to get going because the country itself is held back by political incompetence (corruption, Eskom's failures, and policy burdens).",
    marking_notes: "Two ideas, each for 2 marks: the politician demands business create jobs; SA business can't get going because it is held back by political incompetence/corruption/Eskom/policy.",
    marking_points: [
      { marks: 2, description: "the politician demands business create jobs", keywords: ["business must create jobs", "create jobs"] },
      { marks: 2, description: "business is held back by political incompetence/corruption/Eskom/policy burdens", keywords: ["held back", "political incompetence", "corruption", "eskom"] },
    ],
    image_url: `${IMG}/8-industrial-development-cartoon.jpeg`,
  },
  {
    number: "8", sub_number: "8.4",
    text: "In the context of South Africa's post-Apartheid transformation, elaborate on the fundamental principles and goals of the GEAR policy, focusing on TWO crucial elements. Following this, assess the effectiveness of the BEE policy in promoting black economic empowerment.",
    marks: 8, topicKey: "economic-geography-industry", cognitiveLevelName: "Evaluation",
    model_answer: "GEAR's fundamental principles (any two): it aimed to expand the private sector; encourage trade; promote better business procedures; increase output; increase investment. Assessment of BEE (any two): BEE largely failed to fully achieve GEAR's progress; it only benefited a few and enriched a small class of super-rich people without significant entrepreneurial skills; it made businesses consider race before ability; it created tension with foreign mining/industrial companies required to give up a portion of profits without clear benefit; it contributed to a brain drain.",
    marking_notes: "TWO GEAR principles (2 marks each, max 4): expand private sector; encourage trade; better business procedures; increase output; increase investment. TWO BEE assessment points (2 marks each, max 4): only benefited a few/created a small super-rich class; made race a factor before ability; strained relations with foreign companies; contributed to brain drain.",
    marking_points: [
      { marks: 2, description: "GEAR principle 1: expand the private sector / encourage trade", keywords: ["expand the private sector", "encourage trade"] },
      { marks: 2, description: "GEAR principle 2: better business procedures / increase output or investment", keywords: ["business procedures", "increase output", "increase investment"] },
      { marks: 2, description: "BEE assessment 1: only benefited a few / created a super-rich class without entrepreneurial skills", keywords: ["only benefited a few", "super rich", "entrepreneurial skills"] },
      { marks: 2, description: "BEE assessment 2: race considered before ability, strained foreign relations, or brain drain", keywords: ["race before ability", "foreign mining", "brain drain"] },
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
