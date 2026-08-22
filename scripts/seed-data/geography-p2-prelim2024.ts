// Real school past paper: Parktown Boys' High School Geography Prelim
// Paper 2, 12 September 2024. Source: the school's own question paper +
// official memo (both supplied by the user as local PDFs). Note on
// sourcing: the file named "...MOD AM_Memo v 2.0.pdf" turned out — despite
// its filename — to be the full, up-to-date, answer-inclusive document
// (question text with the answer key inserted in red after each
// question/section), so it was used as the single source of truth here
// rather than the separately-supplied "...Memo.pdf" (an older version).
//
// Scope: Sections A (Settlement Geography, Q1-4) and B (Economic
// Geography, Q5-8) — the full 120 of 150 marks. Section C (Mapwork, 30
// marks) requires the physical 1:50 000 topographic map (3325DC & DD /
// 3425BA GQEBERHA) + orthophoto, which weren't supplied, so it's excluded
// — same reasoning as the other real papers in this app. No drawing-only
// sub-questions this time, so all 120 marks are included as-is.
//
// Reuses the 5 Settlement/Economic Geography topics introduced by
// geography-p2-prelim2023.ts.
//
// Model answers/marking notes below are written in our own words from the
// memo's content, not copied verbatim.

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/geography-2024-prelim-p2";

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
    textbook_ref: "Focus Geography Grade 12 — Economic Geography (Industrial Location, Trade, IDZs)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=industrial+location+trade+balance+south+africa+geography+grade+12",
  },
];

export const paper = {
  year: 2024,
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

  // ---------- 1.1 MCQ (A-D), 8 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Urban settlements that are accessible and provide goods and services to surrounding areas are known as … (A) Specialised cities. (B) Break-of-bulk points. (C) Central places. (D) Gateway towns.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "C — Central places.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Settlements that are established at points where one mode of transport is exchanged for another are known as ... (A) Specialised cities. (B) Break-of-bulk points. (C) Central places. (D) Gateway towns.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "B — Break-of-bulk points.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Vatican City is a settlement devoted almost entirely to religion. This is an example of what kind of settlement? (A) Junction town. (B) Central place. (C) Gap town. (D) Specialised city.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "D — Specialised city.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Saldanha Bay is a settlement that was established around the largest and deepest natural port in South Africa. What type of settlement would this be? (A) Break-of-bulk point. (B) Junction town. (C) Gateway town. (D) Central place.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "A — Break-of-bulk point.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "A settlement that is established around mining operations would be primarily associated with which functions? (A) Primary functions. (B) Secondary functions. (C) Tertiary functions. (D) Quaternary functions.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "A — Primary functions.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "A settlement that is established around universities such as Oxford would be primarily associated with which functions? (A) Primary functions. (B) Secondary functions. (C) Tertiary functions. (D) Quaternary functions.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "D — Quaternary functions.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Which of the following main ideas underpin Central Place Theory? (A) Distance results in travelling costs, and consumers always wish to reduce travelling costs. (B) Businesses aim to maximise profits by attracting the most customers. (C) People want the cheapest price and convenience when shopping. (D) All of the above.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "D — All of the above.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "The area from which a business draws its customers is known as … (A) Range of customers. (B) Range of goods. (C) Sphere of customers. (D) Sphere of influence.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "D — Sphere of influence.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },

  // ---------- 1.2 fill-in-the-blank, 7 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "The smallest rural settlements are (hamlets/isolated farmsteads).",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Isolated farmsteads.",
    marking_notes: "Accept only 'isolated farmsteads' / 'isolated farmstead'.",
    marking_points: [{ marks: 1, description: "isolated farmstead(s)", keywords: ["isolated farmstead"] }],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "A (town/hamlet) is the smallest urban settlement.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Town.",
    marking_notes: "Accept only 'town'.",
    marking_points: [{ marks: 1, description: "town", keywords: ["town"] }],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "When two or more large urban cities merge, a (conurbation/metropolis) is formed.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Conurbation.",
    marking_notes: "Accept only 'conurbation'.",
    marking_points: [{ marks: 1, description: "conurbation", keywords: ["conurbation"] }],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "A (metropolis/megalopolis) is the main city within a particular region.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Metropolis.",
    marking_notes: "Accept only 'metropolis'.",
    marking_points: [{ marks: 1, description: "metropolis", keywords: ["metropolis"] }],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "The (multiple nuclei/third world) city model is based on the idea of multiple 'centres' within a city.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Multiple nuclei.",
    marking_notes: "Accept 'multiple nuclei'.",
    marking_points: [{ marks: 1, description: "multiple nuclei", keywords: ["multiple nuclei"] }],
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "Overcrowding and congestion is a (centrifugal/centripetal) force that drives people and business out of a city centre.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Centrifugal.",
    marking_notes: "Accept only 'centrifugal'.",
    marking_points: [{ marks: 1, description: "centrifugal", keywords: ["centrifugal"] }],
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "Functional convenience would be a (centrifugal/centripetal) force that attracts businesses and people to a particular area in a city.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Centripetal.",
    marking_notes: "Accept only 'centripetal'.",
    marking_points: [{ marks: 1, description: "centripetal", keywords: ["centripetal"] }],
  },

  // ============ QUESTION 2: CLASSIFICATION OF RURAL SETTLEMENTS (15 marks) ============
  {
    number: "2", sub_number: "2.1.1",
    text: "Refer to the diagram of a rural settlement (orange houses/barns strung along a river, with cropland, pasture, and forest zones running parallel inland, and the settlement labelled A). Is the situation of the settlement at A positive or negative?",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Positive.",
    marking_notes: "Accept only 'positive'.",
    marking_points: [{ marks: 1, description: "positive", keywords: ["positive"] }],
    image_url: `${IMG}/2.1-rural-settlement.png`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Identify the settlement pattern at A.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Linear.",
    marking_notes: "Accept only 'linear'.",
    marking_points: [{ marks: 1, description: "linear", keywords: ["linear"] }],
    image_url: `${IMG}/2.1-rural-settlement.png`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Would this settlement be a wet-point or dry-point settlement? Provide a reason for your answer.",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Wet-point — it is located near/along a river.",
    marking_notes: "Wet-point (1) + reason: near a river (1).",
    marking_points: [{ marks: 2, description: "wet-point, because it is near a river", keywords: ["wet point", "near a river", "near the river"] }],
    image_url: `${IMG}/2.1-rural-settlement.png`,
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Describe TWO factors that may have influenced the pattern and shape of the settlement labelled A.",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "Any two, described: the river — the settlement follows the river; the relief — the gradient near the river is less steep, which influenced people to build there; roads — the building of roads to connect the settlement would also contribute to pattern and shape.",
    marking_notes: "Any TWO, each described (2 marks each): the river (settlement follows it); the relief (gentler gradient near the river); roads connecting the settlement.",
    marking_points: [
      { marks: 2, description: "the river — settlement follows the river", keywords: ["follows the river", "river"] },
      { marks: 2, description: "the relief (gentler gradient) or roads connecting the settlement", keywords: ["gradient", "less steep", "roads"] },
    ],
    image_url: `${IMG}/2.1-rural-settlement.png`,
  },
  {
    number: "2", sub_number: "2.1.5",
    text: "Differentiate between the terms site and situation.",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "A site is the physical location of a settlement, while the situation refers to the relationship between the settlement and its environment and surrounds.",
    marking_notes: "Site: physical location (2). Situation: relationship to surrounding environment (2).",
    marking_points: [
      { marks: 2, description: "site: the physical location of a settlement", keywords: ["physical location"] },
      { marks: 2, description: "situation: the relationship between the settlement and its surrounds", keywords: ["relationship", "surrounding", "surrounds"] },
    ],
  },
  {
    number: "2", sub_number: "2.1.6",
    text: "All settlements have a function. The function relates to its economic and social development, and determines its main activities. List THREE potential functions of the settlement shown in the diagram.",
    marks: 3, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Any three: fishing, farming, forestry, livestock.",
    marking_notes: "Any THREE of: fishing; farming; forestry; livestock. 1 mark each.",
    marking_points: [
      { marks: 1, description: "farming or forestry", keywords: ["farming", "forestry"] },
      { marks: 1, description: "fishing or livestock", keywords: ["fishing", "livestock"] },
    ],
    image_url: `${IMG}/2.1-rural-settlement.png`,
  },

  // ============ QUESTION 3: CASE STUDY — RURAL-URBAN MIGRATION (15 marks) ============
  {
    number: "3", sub_number: "3.1.1",
    text: 'Refer to the article "Rural-urban migration in South Africa": besides the job opportunities that are a reality in urban areas, migration to towns and cities is also a result of the neglect of rural communities in terms of service delivery. Urban areas are better supplied with social infrastructure than rural areas, so people who can afford to migrate with their families to urban areas do so. By 2030, South Africa\'s urban population is projected to reach 71.3%, with the possibility of 80% by 2050. What do you understand by the sentence "Urban areas are better supplied with social infrastructure than rural areas"?',
    marks: 2, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Cities and towns generally have more and better-developed facilities and services supporting the well-being of their populations than rural areas — for example, more hospitals, schools, and public amenities — while rural areas often have limited access to these services.",
    marking_notes: "Core idea: urban areas have more/better healthcare, education, transport, and recreational facilities than rural areas.",
    marking_points: [{ marks: 2, description: "urban areas have more/better healthcare, education, or other facilities than rural areas", keywords: ["more facilities", "better developed", "healthcare", "education", "public amenities"] }],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Distinguish between rural depopulation and selective outward migration.",
    marks: 4, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Rural depopulation is the overall decline in the population of rural areas due to factors like migration, lack of jobs, poor services, and changing agricultural practices — it involves a broad segment of the population leaving. Selective outward migration is more specific: only certain groups (usually the young, skilled, or educated) leave a region for better opportunities elsewhere, which does not necessarily cause a total population decline but leaves behind an older, less economically active population (a 'brain drain').",
    marking_notes: "Rural depopulation: broad population decline due to multiple factors (2). Selective outward migration: only specific groups (young/skilled/educated) leave, causing a demographic shift/brain drain rather than total decline (2).",
    marking_points: [
      { marks: 2, description: "rural depopulation: broad decline in rural population", keywords: ["overall decline", "broad segment"] },
      { marks: 2, description: "selective outward migration: only specific groups (young/skilled) leave, causing a brain drain", keywords: ["specific groups", "young", "skilled", "brain drain"] },
    ],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "With reference to the article, discuss the ONE positive and ONE negative consequence of rural-urban migration.",
    marks: 4, topicKey: "rural-urban-migration", cognitiveLevelName: "Analysis",
    model_answer: "Positive: more opportunities, access to more services, increased quality of life, and greater earning potential for migrants. Negative: rural depopulation and loss of skills in the areas people leave behind.",
    marking_notes: "Positive, discussed (2): more opportunities/services/quality of life/earning potential. Negative, discussed (2): rural depopulation/loss of skills.",
    marking_points: [
      { marks: 2, description: "positive: more opportunities/services/quality of life/earning potential", keywords: ["more opportunities", "access to more services", "quality of life", "earning potential"] },
      { marks: 2, description: "negative: rural depopulation / loss of skills", keywords: ["rural depopulation", "loss of skills"] },
    ],
  },
  {
    number: "3", sub_number: "3.1.4",
    text: "Provide and explain ONE cause of rural depopulation.",
    marks: 2, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Any one, explained: crime; lack of opportunities; selective outward migration.",
    marking_notes: "Accept any reasonable cause, explained: crime, lack of opportunities, or selective outward migration.",
    marking_points: [{ marks: 2, description: "crime, lack of opportunities, or selective outward migration", keywords: ["crime", "lack of opportunities", "selective outward migration"] }],
  },
  {
    number: "3", sub_number: "3.1.5",
    text: "List THREE consequences of rural depopulation for the rural settlement.",
    marks: 3, topicKey: "rural-urban-migration", cognitiveLevelName: "Recall",
    model_answer: "Economic decline, an aging population, and loss of services and infrastructure.",
    marking_notes: "All THREE required for full marks: economic decline; aging population; loss of services/infrastructure. 1 mark each.",
    marking_points: [
      { marks: 1, description: "economic decline", keywords: ["economic decline"] },
      { marks: 1, description: "aging population", keywords: ["aging population", "ageing population"] },
      { marks: 1, description: "loss of services and infrastructure", keywords: ["loss of services", "loss of infrastructure"] },
    ],
  },

  // ============ QUESTION 4: CENTRAL PLACE THEORY (15 marks) ============
  {
    number: "4", sub_number: "4.1.1",
    text: "Refer to the diagram of Central Place Theory (hexagonal network showing cities, towns, market towns, and villages linked by boundaries). What is a conurbation?",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "A large urban area that forms when multiple cities, towns, or urban settlements expand and merge together into a continuous metropolitan region, while the individual municipalities/urban centres still maintain distinct identities.",
    marking_notes: "Core concept: multiple cities/towns merge into one continuous urban area.",
    marking_points: [{ marks: 2, description: "multiple cities/towns merge into a continuous urban area", keywords: ["merge", "expand and merge", "continuous metropolitan"] }],
    image_url: `${IMG}/4.1-central-place-theory.jpeg`,
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Urban hierarchies are diagrammatical representations of the number of settlements in an area. Draw/list a pyramidal urban hierarchy for the diagram above, from highest to lowest order.",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "City, Town, Market town, Village (from top/fewest to bottom/most numerous).",
    marking_notes: "Must be in the correct order: City → Town → Market town → Village.",
    marking_points: [{ marks: 2, description: "City, Town, Market town, Village in order", keywords: ["city", "market town", "village"] }],
    image_url: `${IMG}/4.1-central-place-theory.jpeg`,
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "According to Central Place theory, do we find more lower order places than higher order places in a country?",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Yes — more lower order places.",
    marking_notes: "Accept 'lower order places' / 'yes'.",
    marking_points: [{ marks: 1, description: "lower order places", keywords: ["lower order"] }],
  },
  {
    number: "4", sub_number: "4.1.4",
    text: "Provide a reason for your answer to the previous question (why there are more lower order places than higher order places).",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "There is more demand for lower order places, as we use them more frequently.",
    marking_notes: "Core idea: more demand for lower-order goods/services, used more frequently.",
    marking_points: [{ marks: 2, description: "more demand for lower order places, used more frequently", keywords: ["more demand", "more frequently"] }],
  },
  {
    number: "4", sub_number: "4.1.5",
    text: 'In a paragraph of approximately eight lines, explain how Walter Christaller\'s Central Place Theory helps in understanding the distribution of cities and towns in a region. In your answer, discuss the concepts of "threshold" and "range," and how they determine the hierarchy of settlements according to the theory. Use examples to illustrate how the theory applies to real-world urban planning and settlement patterns in South Africa.',
    marks: 8, topicKey: "rural-urban-settlement", cognitiveLevelName: "Evaluation",
    model_answer: "Central Place Theory explains how cities and towns are distributed based on their functions and the services they provide. Threshold is the minimum population required to support a service; range is the maximum distance people are willing to travel to access that service. Larger cities have a higher threshold and offer more specialised services, while smaller towns have a lower threshold and provide more basic goods. For example, in South Africa, a city like Johannesburg serves as a higher-order settlement offering specialised services (financial institutions, large hospitals), while a smaller town offers more basic services (grocery stores, clinics). This hierarchy helps in urban planning by determining where different types of services and infrastructure should be located based on population distribution and demand.",
    marking_notes: "Accept a full explanation covering: definition of threshold (2); definition of range (2); how they determine settlement hierarchy — bigger settlements have higher threshold/range and more specialised services (2); a South African example of the hierarchy in practice (2).",
    marking_points: [
      { marks: 2, description: "threshold: minimum population needed to support a service", keywords: ["threshold", "minimum population"] },
      { marks: 2, description: "range: maximum distance people will travel for a service", keywords: ["range", "maximum distance"] },
      { marks: 2, description: "larger settlements have higher threshold/range and offer more specialised services", keywords: ["higher threshold", "specialised services", "larger cities"] },
      { marks: 2, description: "a South African example of the settlement hierarchy in practice", keywords: ["johannesburg", "south africa", "smaller town"] },
    ],
  },

  // ============ QUESTION 5: SHORT QUESTIONS — ECONOMIC GEOGRAPHY (15 marks) ============

  // ---------- 5.1 matching (Y/Z), 7 marks ----------
  {
    number: "5", sub_number: "5.1.1",
    text: "Choose the word/term that matches the statement. Statement: Unfavourable trade balance … Options: (Y) increases employment, (Z) increases unemployment.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Z — increases unemployment.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Choose the word/term that matches the statement. Statement: Total value of all finished goods and services produced by a country's citizens in a given financial year, irrespective of their location. Options: (Y) Gross national product, (Z) Gross domestic product.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Y — Gross national product.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Choose the word/term that matches the statement. Statement: Difference in value between a country's imports and exports. Options: (Y) balance of trade, (Z) balance of payment.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Y — balance of trade.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Choose the word/term that matches the statement. Statement: A country's financial statement showing its transactions with the rest of the world is known as … Options: (Y) balance of payment, (Z) balance of trade.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Y — balance of payment.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "5", sub_number: "5.1.5",
    text: "Choose the word/term that matches the statement. Statement: A trade … exists in a country when the value of imports is greater than the value of exports. Options: (Y) surplus, (Z) deficit.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Z — deficit.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "5", sub_number: "5.1.6",
    text: "Choose the word/term that matches the statement. Statement: Goods that are exchanged within a country is known as …. trade. Options: (Y) regional, (Z) domestic.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Z — domestic.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "5", sub_number: "5.1.7",
    text: "Choose the word/term that matches the statement. Statement: A silo is classified as being in the … Options: (Y) primary sector, (Z) secondary sector.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Y — primary sector.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },

  // ---------- 5.2 MCQ (A-D), 8 marks ----------
  {
    number: "5", sub_number: "5.2.1",
    text: "A coal fired plant is an example of a … industry. (A) market oriented, (B) raw material orientated, (C) bridge, (D) footloose.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "B — raw material orientated.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "An industry that can be in any place without being affected by factors such as resources or transport. (A) Footloose industry, (B) Ubiquitous industry, (C) Break of bulk industry, (D) Market orientated industry.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "A — Footloose industry.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Industries that provide services that are available 24 hours a day, 7 days a week from any geographic location. (A) Market orientated industry, (B) Heavy industry, (C) Light industry, (D) Ubiquitous industry.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "D — Ubiquitous industry.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "5", sub_number: "5.2.4",
    text: "Heavy industries are characterised by ... (i) proximity to bulk transport facilities, (ii) being ubiquitous, (iii) high levels of noise and air pollution, (iv) being market orientated. (A) i and ii, (B) i and iii, (C) ii and iii, (D) iii and iv.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "B — i and iii.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "5", sub_number: "5.2.5",
    text: "TWO types of industries generally associated with lower levels of air pollution. (i) Light industry, (ii) Raw material orientated industry, (iii) Ubiquitous industry, (iv) Heavy industry. (A) i and ii, (B) ii and iii, (C) i and iii, (D) ii and iv.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "C — i and iii.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "5", sub_number: "5.2.6",
    text: "An industry associated with perishable goods and is located close to the consumer. (A) Raw material orientated industry, (B) Light industry, (C) Market orientated industry, (D) Heavy industry.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "C — Market orientated industry.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "5", sub_number: "5.2.7",
    text: "TWO types of industries associated with bulk transport. (i) Ubiquitous industry, (ii) Light industry, (iii) Heavy industry, (iv) Raw material orientated industry. (A) i and ii, (B) i and iv, (C) ii and iii, (D) iii and iv.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "D — iii and iv.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "5", sub_number: "5.2.8",
    text: "The industry which is located between the raw material and the market. (A) Bridge industry, (B) Raw-material oriented industry, (C) Market orientated industry, (D) Heavy industry.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "A — Bridge industry.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },

  // ============ QUESTION 6: AGRICULTURE (15 marks) ============
  {
    number: "6", sub_number: "6.1.1",
    text: 'Refer to the extract "Beef farming in South Africa": the beef industry faces numerous challenges — continued loadshedding, global geopolitical tensions, and the ongoing cost-of-living crisis. South Africa produces 83% of its meat requirements, and local demand for beef generally outstrips production, even though there are untapped reserves in communal farming areas. Since cattle serve as an indicator of wealth in some communities, communal farming does not contribute much to South Africa\'s meat requirements. Beef production is a long-term undertaking, and profits are rarely made in the short term; the climatic conditions in some parts of South Africa are also not suitable for beef production. Quote TWO pieces of evidence from the extract that hinder beef farming in South Africa.',
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: '"Communal farming does not contribute to South Africa\'s meat requirements" and "Climatic conditions in some parts of South Africa also are not suitable for beef production."',
    marking_notes: "Any TWO direct quotes from the extract showing a hindrance to beef farming. 1 mark each.",
    marking_points: [
      { marks: 1, description: "communal farming does not contribute to meat requirements", keywords: ["communal farming does not contribute"] },
      { marks: 1, description: "climatic conditions not suitable for beef production", keywords: ["climatic conditions", "not suitable"] },
    ],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "What is the percentage shortfall in South Africa regarding its production of meat requirements?",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "17% (100% − 83% produced locally).",
    marking_notes: "Accept only '17%' / '17 percent'.",
    marking_points: [{ marks: 1, description: "17%", keywords: ["17"] }],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "Why is beef production important for South Africa?",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "It is a source of food, and it is an indicator of wealth in some communities.",
    marking_notes: "Both parts needed: source of food (1) + indicator of wealth (1).",
    marking_points: [{ marks: 2, description: "source of food and indicator of wealth in some communities", keywords: ["source of food", "indicator of wealth"] }],
  },
  {
    number: "6", sub_number: "6.1.4",
    text: "Describe TWO natural factors that have a negative impact on beef production in South Africa.",
    marks: 4, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Analysis",
    model_answer: "Drought: South Africa is prone to severe drought, especially in arid/semi-arid regions, which reduces the water and grazing land available to cattle, leading to poor health, reduced growth/reproduction rates, and even death of livestock. Diseases and pests: livestock are susceptible to diseases like foot-and-mouth disease, tick-borne illnesses, and bovine tuberculosis, which can cause poor health or death and decrease production; pests like ticks also transmit disease.",
    marking_notes: "Any TWO, each described (2 marks each): drought (reduces water/grazing, harms cattle health); diseases and pests (foot-and-mouth, tick-borne illness, bovine TB reducing herd health/production).",
    marking_points: [
      { marks: 2, description: "drought reduces water/grazing land, harming cattle health and growth", keywords: ["drought", "grazing land", "reduces the availability of water"] },
      { marks: 2, description: "diseases and pests (foot-and-mouth, tick-borne illness, bovine TB) reduce herd health/production", keywords: ["diseases", "pests", "foot and mouth", "tick", "bovine tuberculosis"] },
    ],
  },
  {
    number: "6", sub_number: "6.1.5",
    text: "Discuss sustainable strategies that can be implemented by the South African government to assist small-scale beef farmers to increase beef production.",
    marks: 6, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Evaluation",
    model_answer: "Any three, discussed: water and grazing management (training on rotational grazing, rainwater harvesting, drought-resistant grasses); access to veterinary services and disease control (expanding vet services, affordable vaccinations, tick control programmes, disease monitoring); financial support and access to markets (subsidised loans/grants for equipment and infrastructure, establishing cooperatives or market hubs for small-scale farmers to sell collectively).",
    marking_notes: "Any THREE distinct strategies, each discussed (2 marks each, max 6): water/grazing management; veterinary services/disease control; financial support/market access.",
    marking_points: [
      { marks: 2, description: "water and grazing management (rotational grazing, rainwater harvesting, drought-resistant grasses)", keywords: ["rotational grazing", "rainwater harvesting", "drought resistant"] },
      { marks: 2, description: "veterinary services and disease control (vaccinations, tick control, disease monitoring)", keywords: ["veterinary services", "vaccinations", "tick control", "disease monitoring"] },
      { marks: 2, description: "financial support and market access (subsidised loans, cooperatives, market hubs)", keywords: ["subsidised loans", "grants", "cooperatives", "market hubs"] },
    ],
  },

  // ============ QUESTION 7: MINING (15 marks) ============
  {
    number: "7", sub_number: "7.1.1",
    text: "Refer to the map showing coal mines and mining companies across Gauteng, Mpumalanga, Limpopo, and the Free State. Which province accounts for the highest coal production in South Africa?",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "Mpumalanga.",
    marking_notes: "Accept only 'Mpumalanga'.",
    marking_points: [{ marks: 1, description: "Mpumalanga", keywords: ["mpumalanga"] }],
    image_url: `${IMG}/7.1-coal-mines-map.jpeg`,
  },
  {
    number: "7", sub_number: "7.1.2",
    text: "Name TWO of South Africa's major industries that are dependent on coal.",
    marks: 2, topicKey: "economic-geography-mining", cognitiveLevelName: "Recall",
    model_answer: "Sasol and Eskom.",
    marking_notes: "Accept 'Sasol' and 'Eskom'. 1 mark each.",
    marking_points: [
      { marks: 1, description: "Sasol", keywords: ["sasol"] },
      { marks: 1, description: "Eskom", keywords: ["eskom"] },
    ],
  },
  {
    number: "7", sub_number: "7.1.3",
    text: "Name and explain TWO factors that have contributed positively to South African mining.",
    marks: 4, topicKey: "economic-geography-mining", cognitiveLevelName: "Analysis",
    model_answer: "Any two, explained: rich mineral resources (South Africa has the world's largest platinum reserves and significant gold deposits, historically attracting investment); advanced mining technology and infrastructure (sophisticated extraction techniques and a well-established rail/port/road network enable efficient extraction and transport); resources being near the surface (easier to mine); a low thermal gradient (easier to mine, greater profits).",
    marking_notes: "Any TWO, each explained (2 marks each): rich mineral resources; advanced technology/infrastructure; resources near the surface; low thermal gradient.",
    marking_points: [
      { marks: 2, description: "rich mineral resources (e.g. world's largest platinum/gold reserves)", keywords: ["rich mineral resources", "platinum", "gold deposits"] },
      { marks: 2, description: "advanced mining technology/infrastructure, resources near the surface, or low thermal gradient", keywords: ["advanced mining technology", "infrastructure", "near the surface", "low thermal gradient"] },
    ],
  },
  {
    number: "7", sub_number: "7.1.4",
    text: "Mining and coal-dependent companies should work together to rectify environmental and social injustices associated with coal mining. In a paragraph of approximately eight lines, explain how this can be achieved.",
    marks: 8, topicKey: "economic-geography-mining", cognitiveLevelName: "Evaluation",
    model_answer: "Companies can invest in rehabilitating damaged ecosystems through land reclamation, reforestation, and reducing emissions from mining operations. They can collaborate with local communities to provide alternative livelihood programmes for displaced workers and residents affected by mining. Coal-dependent industries should transition to cleaner energy sources, reducing reliance on coal while retraining and upskilling affected workers for the renewable energy sector. Investing in community development projects — education, healthcare, and infrastructure — can address the long-term social impacts of mining, promoting environmental sustainability and social equity.",
    marking_notes: "Any FOUR points, each explained (2 marks each, max 8): rehabilitating damaged ecosystems (land reclamation/reforestation/reduced emissions); alternative livelihood programmes for affected communities; transition to cleaner energy and retraining/upskilling workers; investing in community development (education/healthcare/infrastructure).",
    marking_points: [
      { marks: 2, description: "rehabilitate damaged ecosystems (land reclamation, reforestation, reduced emissions)", keywords: ["rehabilitating", "land reclamation", "reforestation"] },
      { marks: 2, description: "alternative livelihood programmes for displaced workers/communities", keywords: ["alternative livelihood", "displaced workers"] },
      { marks: 2, description: "transition to cleaner energy sources, retrain/upskill workers", keywords: ["cleaner energy", "retrained", "upskilled"] },
      { marks: 2, description: "invest in community development (education, healthcare, infrastructure)", keywords: ["community development", "education", "healthcare", "infrastructure"] },
    ],
  },

  // ============ QUESTION 8: INDUSTRIAL DEVELOPMENT ZONES (15 marks) ============
  {
    number: "8", sub_number: "8.1.1",
    text: "Refer to the map of the West Coast SDI (Spatial Development Initiative), stretching from Vredendal to Cape Town along the N7, and information on the Saldanha Bay Industrial Development Zone. Define the term Industrial Development Zone.",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "A designated area, typically located near a port or major transportation hub, where specific policies and infrastructure are established to encourage industrial growth and investment.",
    marking_notes: "Core concept: a designated area near a port/transport hub, with policies/infrastructure to encourage industrial growth and investment.",
    marking_points: [{ marks: 2, description: "designated area near a port/hub with policies to encourage industrial growth/investment", keywords: ["designated area", "port", "encourage industrial growth", "investment"] }],
    image_url: `${IMG}/8.1-sdi-map.png`,
  },
  {
    number: "8", sub_number: "8.1.2",
    text: "What is the benefit of having a deep port?",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Deep ports can accommodate larger vessels (container ships, oil tankers, bulk carriers) which require deeper water to dock and unload, increasing cargo capacity and facilitating international trade by allowing large vessels to dock directly.",
    marking_notes: "Core concept: can accommodate/dock larger vessels, increasing trade capacity.",
    marking_points: [{ marks: 2, description: "can accommodate larger vessels, increasing trade capacity", keywords: ["larger vessels", "large ships", "accommodate"] }],
    image_url: `${IMG}/8.1-sdi-map.png`,
  },
  {
    number: "8", sub_number: "8.1.3",
    text: "List ONE factor that has limited the development of heavy industries in the South-western Cape core industrial region.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: infrastructure limitations, or distance (from other major markets/resources).",
    marking_notes: "Accept reasonable answers: infrastructure, distance.",
    marking_points: [{ marks: 1, description: "infrastructure or distance", keywords: ["infrastructure", "distance"] }],
  },
  {
    number: "8", sub_number: "8.1.4",
    text: "Explain how the West Coast Spatial Development Initiative (SDI) creates increased access for the South-western Cape core industrial regions to international markets.",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "The SDI invests in upgrading infrastructure (roads, railways, ports — including the Saldanha Bay deepwater port) and improving transportation networks, which reduces transit times and transport costs and makes it easier for businesses in the region to export to international markets.",
    marking_notes: "Core concept: improved infrastructure/transport networks (roads, rail, deepwater port) reduce transit time/cost and improve export access.",
    marking_points: [{ marks: 2, description: "improved infrastructure/transport (roads, rail, deepwater port) reduces cost/time and improves export access", keywords: ["infrastructure", "transport networks", "deepwater port", "export"] }],
    image_url: `${IMG}/8.1-sdi-map.png`,
  },
  {
    number: "8", sub_number: "8.1.5",
    text: "In a paragraph of approximately eight lines, explain how the Saldanha Bay Industrial Development Zone has positively impacted the industrial growth and economic development of the South-western Cape. You may include specific examples of its contributions to local industries, job creation, and regional infrastructure.",
    marks: 8, topicKey: "economic-geography-industry", cognitiveLevelName: "Evaluation",
    model_answer: "The Saldanha Bay IDZ has boosted industrial growth by providing a strategic location with advanced infrastructure and business incentives, attracting major investments in industries such as steel manufacturing, ship repair, and logistics — for example, the Saldanha Steel Plant has bolstered the steel industry and supported regional manufacturing. The IDZ has created numerous job opportunities for local residents, enhancing employment prospects and economic stability. Improved infrastructure, including the deepwater port and efficient transport links, has further facilitated trade and attracted additional businesses, playing a crucial role in stimulating economic development and strengthening the region's industrial base.",
    marking_notes: "Any FOUR points, each explained (2 marks each, max 8): strategic location/infrastructure attracting investment (e.g. steel, ship repair, logistics); a specific example (e.g. Saldanha Steel Plant); job creation for local residents; improved infrastructure (deepwater port/transport links) facilitating trade.",
    marking_points: [
      { marks: 2, description: "strategic location and incentives attract industrial investment (steel, ship repair, logistics)", keywords: ["strategic location", "business incentives", "steel manufacturing", "ship repair", "logistics"] },
      { marks: 2, description: "a specific example, e.g. the Saldanha Steel Plant boosting manufacturing", keywords: ["saldanha steel", "steel plant"] },
      { marks: 2, description: "job creation for local residents", keywords: ["job opportunities", "job creation", "local residents"] },
      { marks: 2, description: "improved infrastructure (deepwater port/transport links) facilitates trade", keywords: ["deepwater port", "transport links", "facilitated trade"] },
    ],
    image_url: `${IMG}/8.1-sdi-map.png`,
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
