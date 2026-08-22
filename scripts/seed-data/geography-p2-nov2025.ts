// Real DBE past paper: Geography P2, November 2025, National (English).
// Source: official DBE question paper (fetched from a public past-paper
// mirror, stanmorephysics.com) + official DBE marking guideline (fetched
// separately from saexampapers.co.za — the copy bundled with the question
// paper under the same filename turned out to be question-paper-only,
// despite its name). Both cross-verified page-by-page against each other.
// As with the Nov 2025 P1 dataset, one early memo page turned out to be
// unrelated content (Paper 1's Question 1 answers) bundled into the same
// PDF by whoever compiled it — discarded after the mismatch was caught.
//
// This is the companion paper to geography-p1-nov2025.ts — same real DBE
// sitting, the Settlement Geography + Economic Geography half.
//
// Scope: Section A only (Questions 1 & 2, 120 of 150 marks). Section B
// (Geographical Skills and Techniques, 30 marks) requires the actual
// 1:50 000 topographical map (2529CC eMALAHLENI/WITBANK) + 1:10 000
// orthophoto (2529 CC 15 eMALAHLENI), which weren't obtained, so Section B
// is excluded — same reasoning as every other real paper in this app.
// Section A has no drawing-only sub-questions, so all 120 marks are
// included as-is.
//
// Reuses the 5 Settlement/Economic Geography topics already established
// by the Parktown Prelim P2 datasets.
//
// Model answers/marking notes below are written in our own words from the
// official memo's content, not copied verbatim.

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/geography-2025-p2";

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
  year: 2025,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 144, // scaled from the real 180 min / 150 marks to the 120 marks included here
  total_marks: 120,
  source_url: "https://www.education.gov.za" as string | null,
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
  // ============ QUESTION 1: RURAL AND URBAN SETTLEMENTS (60 marks) ============

  // ---------- 1.1 matching (Y/Z), 7 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Complete the statement with the correct option: Settlements are classified as rural, based on … (Y) the number of functions, (Z) the total population.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Y — the number of functions.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Complete the statement with the correct option: The actual physical position where a rural settlement is located … (Y) site, (Z) situation.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Y — site.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Complete the statement with the correct option: A loose grouping of farmsteads is called a … (Y) town, (Z) hamlet.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Z — hamlet.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Complete the statement with the correct option: A … has mostly rural functions and some urban functions. (Y) farmstead, (Z) village.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Z — village.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Refer to a sketch of a settlement showing 4 settlement blocks connected by roads in a scattered layout, scale 1:30 000. The pattern of the settlement is … (Y) nucleated, (Z) dispersed.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Z — dispersed.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "Refer to a sketch showing settlement blocks clustered along a river with contour lines (80/60 marked) either side. The sketch depicts a … settlement. (Y) wet-point, (Z) dry-point.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Y — wet-point.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Refer to a sketch showing settlement blocks clustered along a winding river. The shape of the settlement is … (Y) linear, (Z) round.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Y — linear.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },

  // ---------- 1.2 MCQ (A-D), 8 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "Refer to a photograph of Durban's harbour and city skyline. A … trade and transport town/city is shown in the photograph. (A) gap, (B) junction, (C) break-of-bulk-point, (D) specialised.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "C — break-of-bulk-point.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.2.1-durban-port.png`,
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Refer to a photograph of Plettenberg Bay's Beacon Island Hotel and busy beach. Plettenberg Bay is classified as a/an … urban settlement and its dominant economic function is … (i) gateway, (ii) specialised, (iii) tourism, (iv) mining. (A) (i) and (iii), (B) (i) and (iv), (C) (ii) and (iii), (D) (ii) and (iv).",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "C — (ii) and (iii): specialised, tourism.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.2.2-plettenberg-bay.png`,
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "A … provides mostly low-order goods and services to the surrounding rural population. (A) city, (B) metropolis, (C) conurbation, (D) town.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "D — town.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "… is the maximum distance that people will travel to buy goods or obtain services. (A) Sphere of influence, (B) Range, (C) Market, (D) Threshold population.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "B — Range.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "… refers to the uncontrolled growth of urban areas. (A) Rate of urbanisation, (B) Urban growth, (C) Urban sprawl, (D) Level of urbanisation.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "C — Urban sprawl.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "Refer to a cartoon showing city buildings collapsing/toppling over green space and trees. The cartoon depicts the negative impact of … (A) urban blight, (B) urban renewal, (C) counter-urbanisation, (D) urban expansion.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "D — urban expansion.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.2.6-urban-sprawl-cartoon.png`,
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "… is a process whereby an increasing percentage of a country's population lives in urban rather than rural areas. (A) Urbanisation, (B) Population growth, (C) Urban growth, (D) Rural-urban migration.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "A — Urbanisation.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.2.8",
    text: "Refer to a table on South Africa's level and rate of urbanisation: 2020 (67,35%; 0,55%), 2021 (67,85%; 0,50%), 2022 (?; 0,49%), 2023 (68,82%; 0,48%), 2024 (69,30%; ?). The level (%) of urbanisation in 2022 AND the rate (%) of urbanisation in 2024 is … and … (i) 68,34, (ii) 69,34, (iii) 0,51, (iv) 0,47. (A) (i) and (iii), (B) (i) and (iv), (C) (ii) and (iii), (D) (ii) and (iv).",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "B — (i) and (iv): 68,34% and 0,47%.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },

  // ---------- 1.3 rural population trend + land restitution, 15 marks ----------
  {
    number: "1", sub_number: "1.3.1",
    text: "Refer to the graph showing the percentage of rural population in South Africa from 2017 (34,66%) to 2024 (31,18%). According to the graph, state the rural population percentage of South Africa for 2024.",
    marks: 1, topicKey: "rural-urban-migration", cognitiveLevelName: "Recall",
    model_answer: "31,18%.",
    marking_notes: "Accept only '31,18%' / '31,18'.",
    marking_points: [{ marks: 1, description: "31,18", keywords: ["31,18", "31.18"] }],
    image_url: `${IMG}/1.3-rural-population-graph.png`,
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "Give the general trend in the rural population (percentages) as depicted between 2017 and 2024 in the graph.",
    marks: 1, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Downward / decreasing (from 34,66% to 31,18%).",
    marking_notes: "Accept 'downward' or 'decreases'.",
    marking_points: [{ marks: 1, description: "downward / decreasing", keywords: ["downward", "decrease", "decline"] }],
    image_url: `${IMG}/1.3-rural-population-graph.png`,
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "Explain the social impact that the general trend (answer to the previous question — a decreasing rural population) will have on the rural community.",
    marks: 4, topicKey: "rural-urban-migration", cognitiveLevelName: "Analysis",
    model_answer: "Any two, explained: decrease in employment opportunities; lack of facilities and services; deteriorating quality of life/standard of living; increased poverty; deteriorating infrastructure; increased crime/social ills; population imbalance; broken family ties; less social interaction; loss of community identity.",
    marking_notes: "Any TWO, each with example/explanation (2 marks each): decreased employment; lack of facilities/services; deteriorating quality of life; increased poverty; deteriorating infrastructure; increased crime; population imbalance; broken family ties; less social interaction; loss of community identity.",
    marking_points: [
      { marks: 2, description: "decreased employment opportunities, or lack of facilities/services", keywords: ["employment opportunities", "lack of facilities", "lack of services"] },
      { marks: 2, description: "deteriorating quality of life, increased poverty, or deteriorating infrastructure", keywords: ["quality of life", "poverty", "infrastructure"] },
    ],
    image_url: `${IMG}/1.3-rural-population-graph.png`,
  },
  {
    number: "1", sub_number: "1.3.4",
    text: 'Refer to the extract "Moletele Citrus Fruit Farm showcasing the success of a land restitution programme in Limpopo": the Moletele community opted to take their land back, resulting in a successful land restitution programme — a joint venture between the Moletele communal property association (51% stake) and Komati Fruit Group, with 30 permanent and 60 temporary jobs created. What is land restitution?',
    marks: 2, topicKey: "rural-urban-migration", cognitiveLevelName: "Recall",
    model_answer: "Returning land to its rightful owners, or compensating people for land that was forcefully taken away from them.",
    marking_notes: "Accept either: returning land to rightful owners, OR compensation for land forcefully taken away.",
    marking_points: [{ marks: 2, description: "returning land to rightful owners, or compensation for forcefully taken land", keywords: ["rightful owners", "compensation", "forcefully taken"] }],
  },
  {
    number: "1", sub_number: "1.3.5",
    text: "According to the extract, which option (model) of land restitution applied to the Moletele community?",
    marks: 1, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "They opted to take their land back (a joint-venture/community-led restitution model).",
    marking_notes: "Accept 'they opted to take their land back'.",
    marking_points: [{ marks: 1, description: "opted to take their land back", keywords: ["opted to take", "take their land back"] }],
  },
  {
    number: "1", sub_number: "1.3.6",
    text: "Suggest strategies that can be implemented after land restitution has taken place to reduce rural depopulation (as indicated in the graph).",
    marks: 6, topicKey: "rural-urban-migration", cognitiveLevelName: "Evaluation",
    model_answer: "Any three: facilitate skills training/education; provide technical support; provide financial training; promote commercial farming; create employment opportunities; form business partnerships; involve all stakeholders in decision-making; improve infrastructure; improve services; make financial subsidies available.",
    marking_notes: "Any THREE distinct strategies (2 marks each, max 6): skills training/education; technical support; financial training; promoting commercial farming; job creation; business partnerships; stakeholder involvement; improved infrastructure/services; financial subsidies.",
    marking_points: [
      { marks: 2, description: "facilitate skills training/education, or provide technical/financial support", keywords: ["skills training", "technical support", "financial training"] },
      { marks: 2, description: "promote commercial farming, or create employment opportunities", keywords: ["commercial farming", "employment opportunities"] },
      { marks: 2, description: "improve infrastructure/services, financial subsidies, or stakeholder involvement", keywords: ["improve infrastructure", "improve services", "financial subsidies", "stakeholders"] },
    ],
    image_url: `${IMG}/1.3-rural-population-graph.png`,
  },

  // ---------- 1.4 urban land-use zones, 15 marks ----------
  {
    number: "1", sub_number: "1.4.1",
    text: "Refer to the urban profile depicting urban land-use zones (A – Industrial zone, B – Residential zone, C – Transition zone, D – CBD, E – Rural-urban fringe) and photographs showing urban land use. What is an urban land-use zone?",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Land that has been zoned for a specific function in an urban settlement.",
    marking_notes: "Core concept: land zoned for a specific function.",
    marking_points: [{ marks: 2, description: "land zoned for a specific function", keywords: ["specific function", "zoned"] }],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },
  {
    number: "1", sub_number: "1.4.2",
    text: "Name TWO urban land-use zones where commercial functions are mainly found.",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Central Business District (CBD) and the Transition zone.",
    marking_notes: "Any TWO of: CBD; Transition zone; Residential zone; Rural-urban fringe. 1 mark each.",
    marking_points: [
      { marks: 1, description: "CBD", keywords: ["central business district", "cbd"] },
      { marks: 1, description: "Transition zone", keywords: ["transition"] },
    ],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },
  {
    number: "1", sub_number: "1.4.3a",
    text: "Refer to the urban profile and the photograph of a high-density residential aerial view (B2). Give evidence that the land use in B2 is a high-income residential area.",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: close to the rural-urban fringe; large plots; low density of buildings/large houses; far from heavy industries; architecture of buildings; residents own cars (garages); wide roads/streets; gardens and trees/aesthetically appealing; away from the CBD; high security walls.",
    marking_notes: "Any TWO of: close to fringe; large plots; low density/large houses; far from industry; architecture; garages; wide roads; gardens/trees; away from CBD; security walls. 1 mark each.",
    marking_points: [
      { marks: 1, description: "large plots / low density of buildings / large houses", keywords: ["large plots", "low density", "large houses"] },
      { marks: 1, description: "gardens and trees, security walls, or garages", keywords: ["gardens", "trees", "security walls", "garages"] },
    ],
    image_url: `${IMG}/1.4-residential-zone-photo.jpeg`,
  },
  {
    number: "1", sub_number: "1.4.3b",
    text: "Refer to the photograph of a smoke-stack industrial plant (A). Is the land use at A a heavy or a light industry?",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Heavy (industry).",
    marking_notes: "Accept only 'heavy'.",
    marking_points: [{ marks: 1, description: "heavy", keywords: ["heavy"] }],
    image_url: `${IMG}/1.4-industrial-zone-photo.png`,
  },
  {
    number: "1", sub_number: "1.4.4",
    text: "Explain TWO economic reasons why this land use (heavy industry, at A) is located on the outskirts of the urban area, as indicated in the urban profile.",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "Any two, explained: cheaper land is available; it's cheaper to build on flat land; it's less expensive to combat pollution there; it's close to bulk transport; it's close to the labour force; lower fuel costs; close to raw materials.",
    marking_notes: "Any TWO, each explained (2 marks each): cheaper land; cheaper flat-land construction; cheaper pollution control; close to bulk transport; close to labour force; lower fuel costs; close to raw materials.",
    marking_points: [
      { marks: 2, description: "cheaper land / flat land, or lower cost to combat pollution", keywords: ["cheaper land", "flat land", "combat pollution"] },
      { marks: 2, description: "close to bulk transport, labour force, or raw materials", keywords: ["bulk transport", "labour force", "raw materials", "fuel costs"] },
    ],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },
  {
    number: "1", sub_number: "1.4.5",
    text: "Why is the land use at B2 (high-income residential) not located close to the land use at A (heavy industry)?",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "Any two, explained: the two land uses are incompatible; keeping them apart preserves the aesthetics of the residential area; it maintains the high value of the land/property; it reduces the impact of pollution on residents; it alleviates traffic congestion; it reduces health risks.",
    marking_notes: "Any TWO, each explained (2 marks each): incompatible land uses; preserves aesthetics; maintains property value; reduces pollution impact; alleviates traffic congestion; reduces health risks.",
    marking_points: [
      { marks: 2, description: "land uses are incompatible / preserves aesthetics or property value", keywords: ["incompatible", "aesthetics", "value of land", "property"] },
      { marks: 2, description: "reduces pollution impact, traffic congestion, or health risks", keywords: ["pollution", "traffic congestion", "health risks"] },
    ],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },

  // ---------- 1.5 urban blight/decay, 15 marks ----------
  {
    number: "1", sub_number: "1.5.1",
    text: 'Refer to the extract "Urban blight/decay in Wynberg, Cape Town" and a photograph of a deteriorated building along Ebor Road covered in graffiti, with illegal water/electricity connections and people sleeping in squalor. What evidence in the photograph suggests that urban blight/decay has taken place?',
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: neglected/dilapidated buildings; broken windows; graffiti on the walls; litter/rubbish in the streets.",
    marking_notes: "Accept any ONE piece of visible evidence: dilapidated buildings, broken windows, graffiti, or litter.",
    marking_points: [{ marks: 1, description: "dilapidated buildings, broken windows, graffiti, or litter", keywords: ["dilapidated", "broken windows", "graffiti", "litter", "rubbish"] }],
    image_url: `${IMG}/1.5-urban-blight-photo.jpeg`,
  },
  {
    number: "1", sub_number: "1.5.2",
    text: "State TWO social causes of urban blight/decay.",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Any two: unemployment; poverty; lack of affordable housing; abandoned buildings; illegal occupation; landlords' lack of interest in upgrading properties; poor service delivery.",
    marking_notes: "Any TWO of: unemployment; poverty; lack of affordable housing; abandoned buildings; illegal occupation; uninterested landlords; poor service delivery. 1 mark each.",
    marking_points: [
      { marks: 1, description: "unemployment or poverty", keywords: ["unemployment", "poverty"] },
      { marks: 1, description: "lack of affordable housing, abandoned buildings, or illegal occupation", keywords: ["affordable housing", "abandoned buildings", "illegal occupation"] },
    ],
  },
  {
    number: "1", sub_number: "1.5.3",
    text: "Suggest possible reasons why the municipality of Cape Town has not attended to this issue of urban blight/decay in Wynberg.",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "Any two: lack of finances; mismanagement of funds; people fail to pay municipality bills; the municipality has other urgent priorities; lack of skills/capacity; illegal occupation of buildings; buildings are privately owned.",
    marking_notes: "Any TWO, each explained (2 marks each): lack of finances; mismanagement; unpaid bills; other priorities; lack of skills/capacity; illegal occupation; privately owned buildings.",
    marking_points: [
      { marks: 2, description: "lack of finances / mismanagement of funds / unpaid bills", keywords: ["lack of finances", "mismanagement", "fail to pay"] },
      { marks: 2, description: "other urgent priorities, lack of skills/capacity, illegal occupation, or privately owned buildings", keywords: ["urgent priorities", "lack of skills", "illegal occupation", "privately owned"] },
    ],
  },
  {
    number: "1", sub_number: "1.5.4",
    text: "In a paragraph of approximately EIGHT lines, explain the positive impact of urban renewal on the economy of Wynberg.",
    marks: 8, topicKey: "rural-urban-settlement", cognitiveLevelName: "Evaluation",
    model_answer: "Any four: attracts more businesses/investors; attracts more customers; attracts more tourists; boosts the multiplier effect; creates more job opportunities; upskills workers; increases the value of properties; improves infrastructure.",
    marking_notes: "Any FOUR distinct points, each explained (2 marks each, max 8): attracts businesses/investors; attracts customers/tourists; multiplier effect; job creation; upskilling; increased property value; improved infrastructure.",
    marking_points: [
      { marks: 2, description: "attracts more businesses/investors, customers, or tourists", keywords: ["attracts more businesses", "attracts more customers", "attracts more tourists"] },
      { marks: 2, description: "multiplier effect / more job opportunities / upskills workers", keywords: ["multiplier effect", "job opportunities", "upskill"] },
      { marks: 2, description: "increases property values, or improves infrastructure", keywords: ["increases the value", "improves infrastructure"] },
    ],
  },

  // ============ QUESTION 2: ECONOMIC GEOGRAPHY OF SOUTH AFRICA (60 marks) ============

  // ---------- 2.1 MCQ (A-D), 8 marks — sugar cane (2.1.1-2.1.4) + gold mining (2.1.5-2.1.8) ----------
  {
    number: "2", sub_number: "2.1.1",
    text: "… is a positive social factor of sugar cane production in KwaZulu-Natal. (A) Earning foreign exchange, (B) Provision of employment, (C) Stimulation of industrial production, (D) Contribution to the GDP.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "B — Provision of employment.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "… is/are a negative economic factor hindering sugar cane farming in KwaZulu-Natal. (A) Floods, (B) Lack of access to capital, (C) Shortage of large-scale farmers, (D) Crime.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "B — Lack of access to capital.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "TWO advantages of sugar cane farming for the economy of South Africa is/are … and … (i) contributing to the gross domestic product (GDP), (ii) fluctuating prices, (iii) development of infrastructure, (iv) retrenchment of workers. (A) (i) and (iv), (B) (ii) and (iv), (C) (i) and (iii), (D) (iii) and (iv).",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "C — (i) and (iii): contributing to GDP, development of infrastructure.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Climatic factors that favour KwaZulu-Natal as the highest producer of sugar cane in South Africa is/are … and … (i) high temperatures, (ii) low rainfall, (iii) high rainfall, (iv) low temperatures. (A) (i) and (ii), (B) (iii) and (iv), (C) (i) and (iii), (D) (ii) and (iv).",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "C — (i) and (iii): high temperatures, high rainfall.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.1.5",
    text: "The province that produces the most gold in South Africa is … (A) Limpopo, (B) Mpumalanga, (C) KwaZulu-Natal, (D) Gauteng.",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Recall",
    model_answer: "D — Gauteng.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "2", sub_number: "2.1.6",
    text: "Refer to the graph showing the number of people employed in gold mines in South Africa between 1995 and 2025 (roughly 380 000 in 1995 falling to around 80 000 by 2025). The number of people employed in South African gold mines decreased the most between … (A) 1995 and 2000, (B) 2000 and 2005, (C) 2005 and 2010, (D) 2010 and 2015.",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "A — 1995 and 2000.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2.1-gold-employment-graph.png`,
  },
  {
    number: "2", sub_number: "2.1.7",
    text: "A physical (natural) factor causing employment numbers to decrease in South African gold mines is/are … (A) threats of nationalisation, (B) depletion of gold in mines, (C) unskilled labourers, (D) less foreign investment in mines.",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "B — depletion of gold in mines.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "2", sub_number: "2.1.8",
    text: "An economic factor that has caused employment numbers to decrease from 2015 onwards is/are … (A) HIV and Aids, (B) fluctuating prices of gold, (C) environmental degradation, (D) strikes and protests.",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "B — fluctuating prices of gold.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/2.1-gold-employment-graph.png`,
  },

  // ---------- 2.2 matching (Y/Z), 7 marks ----------
  {
    number: "2", sub_number: "2.2.1",
    text: "Refer to a table of contributions (%) to the GDP during 2024 (Transport 11%; Agriculture 2,9%; Mining 8,4%; General government services 10,6%; Electricity and gas 2,8%; Construction 3%; Trade/catering/accommodation 14,7%; Manufacturing 15%; Finance and real estate 31,7%). Complete the statement: … is a secondary economic activity. (Y) Transport, (Z) Manufacturing.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Z — Manufacturing.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Primary economic activities accounted for … of the gross domestic product (GDP). (Y) 8,4%, (Z) 11,3%.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Z — 11,3% (Agriculture 2,9% + Mining 8,4%).",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "… makes the largest contribution to the tertiary sector. (Y) Finance and real estate, (Z) Construction.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Y — Finance and real estate.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.2.4",
    text: "The … sector was the greatest contributor to the gross domestic product (GDP) in 2024. (Y) secondary, (Z) tertiary.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Z — tertiary.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.2.5",
    text: "Refer to a sketch of a balance scale weighing 'Imports' against 'Exports'. The sketch illustrates … (Y) balance of trade, (Z) domestic trade.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Y — balance of trade.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.2.6",
    text: "A factor that advantages international trade … (Y) trade tariffs, (Z) well-developed infrastructure.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Z — well-developed infrastructure.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.2.7",
    text: "… is an economic benefit of international trade. (Y) Access to foreign currencies, (Z) Closing down of local industries.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Y — Access to foreign currencies.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },

  // ---------- 2.3 food security / small vs large-scale farming, 15 marks ----------
  {
    number: "2", sub_number: "2.3.1",
    text: "Refer to the infographic on food security and small/large-scale farming: in 2024, 25,8% of households faced moderate to severe food insecurity in South Africa. Define the concept food insecurity.",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "The condition of not having access to sufficient nutritious food.",
    marking_notes: "Core concept: not having access to sufficient nutritious food.",
    marking_points: [{ marks: 2, description: "not having access to sufficient nutritious food", keywords: ["access to sufficient", "nutritious food"] }],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "According to the extract, what percentage of households suffered from food insecurity in 2024?",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "25,8%.",
    marking_notes: "Accept only '25,8%' / '25.8'.",
    marking_points: [{ marks: 1, description: "25,8", keywords: ["25,8", "25.8"] }],
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "Refer to the photograph of large-scale farming (a tractor spraying rows of crops). What evidence in the photograph suggests that it would have a positive impact on food production?",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: large tracts of land are cultivated; use of machinery/tractors/technology; scientific methods are used; use of pesticides.",
    marking_notes: "Any ONE, described for 2 marks: large tracts cultivated; machinery/technology used; scientific methods; pesticides.",
    marking_points: [{ marks: 2, description: "large tracts cultivated / machinery and technology used / scientific methods / pesticides", keywords: ["large tracts", "machinery", "technology", "scientific methods", "pesticides"] }],
    image_url: `${IMG}/2.3-large-scale-farming.png`,
  },
  {
    number: "2", sub_number: "2.3.4",
    text: "Refer to the graph showing challenges experienced by small- and large-scale farmers (access to farming equipment/technology: 19,2% small vs 80,8% large; access to finance: 6,9% vs 93,1%; access to arable land: 25% vs 75%). Identify TWO economic challenges that small-scale farmers would more likely experience than large-scale farmers.",
    marks: 2, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: access to farming equipment/technology; access to finance; access to arable land.",
    marking_notes: "Any TWO of: access to farming equipment/technology; access to finance; access to arable land. 1 mark each.",
    marking_points: [
      { marks: 1, description: "access to farming equipment/technology", keywords: ["farming equipment", "technology"] },
      { marks: 1, description: "access to finance or arable land", keywords: ["access to finance", "arable land"] },
    ],
    image_url: `${IMG}/2.3-farming-challenges-graph.png`,
  },
  {
    number: "2", sub_number: "2.3.5",
    text: "In a paragraph of approximately EIGHT lines, explain how the economic challenges identified in the previous question (access to farming equipment/technology, finance, and arable land) can have a negative impact on food production.",
    marks: 8, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Evaluation",
    model_answer: "Lack of machinery reduces efficiency/productivity, and limited cultivation of land means less food is produced — manual labour is less efficient, leading to lower crop yields. Financial institutions will not grant loans to small-scale farmers, so they cannot purchase seeds or equipment, and cannot afford labour costs, resulting in less food production. Less arable land reduces food production directly, hampers crop diversity, and limits opportunities for expansion.",
    marking_notes: "Must cover at least TWO of the three challenges (equipment/technology, finance, arable land), any FOUR points total, each explained (2 marks each, max 8): lack of machinery reduces efficiency/yields; limited cultivation means less food; lack of finance means no loans/equipment/labour; less arable land reduces production/diversity/expansion.",
    marking_points: [
      { marks: 2, description: "lack of machinery/technology reduces efficiency and crop yields", keywords: ["lack of machinery", "reduce efficiency", "lower crop yields"] },
      { marks: 2, description: "limited cultivation of land means less food is produced", keywords: ["limited cultivation", "less food"] },
      { marks: 2, description: "lack of finance means no loans for seeds/equipment/labour", keywords: ["financial institutions", "will not grant loans", "afford labour"] },
      { marks: 2, description: "less arable land reduces production, crop diversity, or expansion", keywords: ["less arable land", "reduces food production", "crop diversity", "expansion"] },
    ],
  },

  // ---------- 2.4 Dube Trade Port IDZ, 15 marks ----------
  {
    number: "2", sub_number: "2.4.1",
    text: 'Refer to the extract "Dube Trade Port (IDZ) attracts investments from the automotive industry": major automotive companies (Auto Investment Holdings Group, Mahindra South Africa, Ogihara South Africa) pledged investment in August 2024, joining electronic, high-value manufacturing, food processing, and fibre optics sectors already at the Dube Trade Port. The IDZ is 30 minutes from Durban Harbour and 34 minutes (41 km) from the Durban-Pinetown industrial region. In which province is the Dube Trade Port (IDZ) located?',
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "KwaZulu-Natal.",
    marking_notes: "Accept only 'KwaZulu-Natal'.",
    marking_points: [{ marks: 1, description: "KwaZulu-Natal", keywords: ["kwazulu natal", "kwazulu-natal"] }],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Quote evidence from the extract that indicates that the Dube Trade Port (IDZ) has a variety of manufacturing industries.",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: '"The automotive industry would join the electronic, high value manufacturing, food processing, and fibre optics sectors."',
    marking_notes: "Must be a direct quote naming multiple industry types (automotive, electronic, high-value manufacturing, food processing, fibre optics).",
    marking_points: [{ marks: 2, description: "quotes the range of industries (automotive, electronic, food processing, fibre optics)", keywords: ["electronic", "high value manufacturing", "food processing", "fibre optics"] }],
  },
  {
    number: "2", sub_number: "2.4.3",
    text: "According to the extract, why is the Dube Trade Port classified as an industrial development zone (IDZ)?",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: it has direct links to the airport/harbour; it attracts (foreign) investment; it creates jobs.",
    marking_notes: "Any ONE, described for 2 marks: direct airport/harbour links; attracts investment; creates jobs.",
    marking_points: [{ marks: 2, description: "direct links to airport/harbour, attracts investment, or creates jobs", keywords: ["direct links", "airport", "harbour", "investment", "creates jobs"] }],
  },
  {
    number: "2", sub_number: "2.4.4",
    text: "How did the proximity (distance) to the airport and harbour favour the location of the automotive plants in the Dube Trade Port (IDZ)?",
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Any two: lower transport costs; the airport/harbour is easily accessible; access to international markets; reduces costs for exports/imports.",
    marking_notes: "Any TWO, each described (2 marks each): lower transport costs; easy airport/harbour access; access to international markets; reduced export/import costs.",
    marking_points: [
      { marks: 2, description: "lower transport costs / easily accessible airport or harbour", keywords: ["lower transport costs", "easily accessible"] },
      { marks: 2, description: "access to international markets / reduced export-import costs", keywords: ["international markets", "reduces costs for exports"] },
    ],
  },
  {
    number: "2", sub_number: "2.4.5",
    text: "Explain how the variety of manufacturing industries in the Dube Trade Port (IDZ) would have a positive impact on the economy of the province.",
    marks: 6, topicKey: "economic-geography-industry", cognitiveLevelName: "Evaluation",
    model_answer: "Any three: upskilling of local communities provides a variety of employment opportunities; upskilling results in higher income and greater buying power; the multiplier effect leads to more employment opportunities; different types of industries in one area attract investors; improved infrastructure attracts more businesses; more link industries increase employment opportunities; exporting these products increases port tariffs; foreign investments contribute to the Gross Geographic Product (GGP).",
    marking_notes: "Any THREE, each explained (2 marks each, max 6): upskilling/employment opportunities; multiplier effect; attracts investors/businesses; more link industries; export/port tariffs; foreign investment and GGP.",
    marking_points: [
      { marks: 2, description: "upskilling provides employment opportunities and higher income", keywords: ["upskilling", "employment opportunities", "higher income"] },
      { marks: 2, description: "multiplier effect / attracts investors and businesses due to variety", keywords: ["multiplier effect", "attract investors", "attract businesses"] },
      { marks: 2, description: "more link industries, export tariffs, or foreign investment/GGP contribution", keywords: ["link industries", "port tariffs", "foreign investments", "gross geographic product"] },
    ],
  },

  // ---------- 2.5 informal sector, 15 marks ----------
  {
    number: "2", sub_number: "2.5.1",
    text: 'Refer to the infographic "Give the informal sector a break": informal traders in Richards Bay (mostly women selling fruit and vegetables on the main road) were fined R300 each during the December peak season for selling without permits. What is the informal sector?',
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Businesses that are not registered and do not pay income tax.",
    marking_notes: "Core concept: unregistered businesses that don't pay income tax.",
    marking_points: [{ marks: 2, description: "businesses that are not registered and do not pay income tax", keywords: ["not registered", "do not pay income tax"] }],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Why is the informal trader in the photograph found on the main road?",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "More accessible to potential customers.",
    marking_notes: "Core concept: more accessible to customers.",
    marking_points: [{ marks: 1, description: "more accessible to potential customers", keywords: ["accessible", "potential customers"] }],
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "State TWO challenges that this informal trader is likely to experience with the type of goods being sold (fruit and vegetables).",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: no proper storage facilities; goods can rot; goods are stolen; insects/pests; harsh weather conditions; market competition.",
    marking_notes: "Any TWO of: no storage; rotting; theft; pests; weather; competition. 1 mark each.",
    marking_points: [
      { marks: 1, description: "no proper storage facilities / goods can rot", keywords: ["no proper storage", "goods can rot"] },
      { marks: 1, description: "goods stolen, pests, harsh weather, or market competition", keywords: ["goods are stolen", "insects", "pests", "harsh weather", "market competition"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.4",
    text: "Refer to the table showing the number of informal traders in Richards Bay CBD for 2024 (from 35 in January rising to 60 in December). Account for the large number of informal traders during the month of December.",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: the holiday season increases shoppers; more tourists mean more potential customers; the buying power of locals increases due to extra income/bonuses; people have additional income during the festive season.",
    marking_notes: "Any ONE, described for 2 marks: holiday season increases shoppers; more tourists; extra bonus/income increases buying power.",
    marking_points: [{ marks: 2, description: "holiday season increases shoppers/tourists, or extra festive-season income", keywords: ["holiday season", "more tourists", "extra income", "bonuses", "festive season"] }],
  },
  {
    number: "2", sub_number: "2.5.5",
    text: "How will the municipality of Richards Bay benefit by issuing permits to informal traders?",
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Any two: they would be able to regulate the sector; the information can be used to set up ideal locations for informal traders; it would increase their revenue base; they can monitor the quality of goods being sold; they can monitor health and safety conditions.",
    marking_notes: "Any TWO, each described (2 marks each): regulate the sector; plan ideal trading locations; increase revenue; monitor goods quality; monitor health and safety.",
    marking_points: [
      { marks: 2, description: "able to regulate the sector, or increase their revenue base", keywords: ["regulate the sector", "increase their revenue"] },
      { marks: 2, description: "plan ideal locations, or monitor quality/health and safety", keywords: ["ideal locations", "monitor the quality", "health and safety"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.6",
    text: "What can the municipality of Richards Bay provide to the informal traders with the money collected from the issuing of permits?",
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Any two: designate proper areas for trade; provide infrastructure; provide storage facilities; effective policing; facilitate partnerships with the formal/private sector; upskilling entrepreneurial programmes; access to funding; provision of basic services.",
    marking_notes: "Any TWO, each described (2 marks each): designated trading areas; infrastructure; storage facilities; policing; partnerships with formal sector; entrepreneurial upskilling; funding access; basic services.",
    marking_points: [
      { marks: 2, description: "designated trading areas, infrastructure, or storage facilities", keywords: ["designate areas", "infrastructure", "storage facilities"] },
      { marks: 2, description: "policing, partnerships, entrepreneurial programmes, funding, or basic services", keywords: ["policing", "partnerships", "entrepreneurial", "funding", "basic services"] },
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
