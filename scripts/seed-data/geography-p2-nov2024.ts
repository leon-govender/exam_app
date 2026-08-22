// Real DBE past paper: Geography P2, November 2024, National (English).
// Source: official DBE question paper (fetched from stanmorephysics.com)
// + official DBE marking guideline (fetched separately from
// saexampapers.co.za). Both cross-verified page-by-page against each
// other — this memo matched the question paper cleanly throughout, no
// stray/mismatched pages this time.
//
// This is the companion paper to geography-p1-nov2024.ts — same real DBE
// sitting, the Settlement Geography + Economic Geography half.
//
// Scope: Section A only (Questions 1 & 2, 120 of 150 marks). Section B
// (Geographical Skills and Techniques, 30 marks) requires the actual
// 1:50 000 topographical map + orthophoto for this sitting, which weren't
// obtained, so Section B is excluded — same reasoning as every other real
// paper in this app. Section A has no drawing-only sub-questions, so all
// 120 marks are included as-is.
//
// Diagrams in this paper are photos/graphics composited onto a single
// full-page raster image (with the source site's watermark baked in), not
// separate embedded images — so they were cropped from full-page renders
// rather than extracted cleanly. The watermark is faint and doesn't
// obscure any exam content.
//
// Reuses the 5 Settlement/Economic Geography topics already established
// by the other real P2 datasets in this app.
//
// Model answers/marking notes below are written in our own words from the
// official memo's content, not copied verbatim.

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/geography-2024-p2";

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

  // ---------- 1.1 matching (Y/Z), 8 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Match the statement to the correct option. Statement: Exact piece of land that a settlement is built on. Options: (Y) situation, (Z) site.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Z — site.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Match the statement to the correct option. Statement: The situation of a commercial livestock farm is influenced by ... Options: (Y) topography, (Z) markets.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Z — markets.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Match the statement to the correct option. Statement: Settlements located close to a water source in arid areas. Options: (Y) wet-point, (Z) dry-point.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Y — wet-point.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Match the statement to the correct option. Statement: The shape of this settlement is influenced by a river. Options: (Y) circular, (Z) linear.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Z — linear.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Match the statement to the correct option. Statement: The largest rural settlement type. Options: (Y) village, (Z) hamlet.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Y — village.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "Match the statement to the correct option. Statement: Greater profits are associated with this settlement pattern. Options: (Y) dispersed, (Z) nucleated.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Y — dispersed.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Match the statement to the correct option. Statement: Land returned to the original owners. Options: (Y) land restitution, (Z) land tenure.",
    marks: 1, topicKey: "rural-urban-migration", cognitiveLevelName: "Recall",
    model_answer: "Y — land restitution.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "Match the statement to the correct option. Statement: An economic challenge of land reform. Options: (Y) poverty, (Z) legal disputes.",
    marks: 1, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Y — poverty (accept Z if answered — memo allows either).",
    marking_notes: "Memo allows either Y or Z.",
    marking_points: [{ marks: 1, description: "Y or Z", keywords: ["y", "z"] }],
  },

  // ---------- 1.2 MCQ (A-D), 7 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "The smallest urban settlement in an urban hierarchy is a ... (A) city, (B) metropolis, (C) town, (D) megalopolis.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "C — town.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "A ... has the smallest number of settlements. (A) conurbation, (B) city, (C) town, (D) megalopolis.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "D — megalopolis.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "A ... is the largest settlement type found in South Africa. (A) megalopolis, (B) conurbation, (C) metropolis, (D) city.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "B — conurbation.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "A ... is an urban settlement type made up of a major city and towns. (A) metropolis, (B) conurbation, (C) city, (D) megalopolis.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "A — metropolis.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "The ... of a city covers a larger area than a town. (A) range, (B) sphere of influence, (C) threshold population, (D) service area.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "B — sphere of influence.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "A university has a ... range and a ... sphere of influence than a school. (A) smaller; larger, (B) smaller; smaller, (C) larger; larger, (D) larger; smaller.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "C — larger; larger.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "The range associated with the purchase of a motor vehicle is greater than the purchase of bread because it is: (i) More expensive, (ii) Purchased on a daily basis, (iii) Not purchased frequently, (iv) Less expensive. (A) (i) and (iii), (B) (ii) and (iv), (C) (i) and (ii), (D) (iii) and (iv).",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "A — (i) and (iii): more expensive, not purchased frequently.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },

  // ---------- 1.3 rural-urban migration poverty graph, 15 marks ----------
  {
    number: "1", sub_number: "1.3.1",
    text: "Refer to the sketch and graph below showing the levels of poverty caused by rural-urban migration, tracking the percentage level of poverty for young adults who remain in rural areas versus those who migrate to urban areas, from 1994 to 2024. Define the term rural-urban migration.",
    marks: 2, topicKey: "rural-urban-migration", cognitiveLevelName: "Recall",
    model_answer: "The movement of people from rural areas to urban areas.",
    marking_notes: "Core concept: movement of people from rural to urban areas.",
    marking_points: [{ marks: 2, description: "movement of people from rural areas to urban areas", keywords: ["movement of people", "rural areas to urban areas"] }],
    image_url: `${IMG}/1.3-poverty-graph.png`,
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "According to the graph, the percentage level of poverty decreased by a smaller amount in (rural/urban) areas.",
    marks: 1, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Rural.",
    marking_notes: "Accept only 'rural'.",
    marking_points: [{ marks: 1, description: "rural", keywords: ["rural"] }],
    image_url: `${IMG}/1.3-poverty-graph.png`,
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "How has unemployment contributed to this trend in poverty levels (the smaller decrease in poverty among young adults who remain in rural areas)?",
    marks: 2, topicKey: "rural-urban-migration", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: people earn no/low salaries; they are not able to afford basic services.",
    marking_notes: "Any ONE, developed for 2 marks: no/low salaries, or can't afford basic services.",
    marking_points: [{ marks: 2, description: "people earn no/low salaries, or can't afford basic services", keywords: ["no salaries", "low salaries", "afford basic services"] }],
    image_url: `${IMG}/1.3-poverty-graph.png`,
  },
  {
    number: "1", sub_number: "1.3.4",
    text: "How does the movement of young adults to urban areas have a negative social impact on the rural community?",
    marks: 4, topicKey: "rural-urban-migration", cognitiveLevelName: "Analysis",
    model_answer: "Any two: birth rate declines; the population ages; family units are disrupted; poverty increases; unemployment increases; access to services decreases; standard of living decreases; older/younger community members become vulnerable to social ills; the gender structure changes; quality of life decreases; brain drain occurs as skilled people leave; loss of community identity.",
    marking_notes: "Any TWO of: birth rate decline; ageing population; family disruption; increased poverty/unemployment; decreased services/standard of living; social vulnerability; gender structure changes; brain drain; loss of community identity. 2 marks each.",
    marking_points: [
      { marks: 2, description: "birth rate declines / population ages / family units disrupted", keywords: ["birth rate declines", "ageing population", "aging population", "disruption to family"] },
      { marks: 2, description: "increased poverty/unemployment, decreased services/standard of living, or brain drain", keywords: ["increase in poverty", "increase in unemployment", "decrease in services", "standard of living", "brain drain"] },
    ],
    image_url: `${IMG}/1.3-poverty-graph.png`,
  },
  {
    number: "1", sub_number: "1.3.5",
    text: "Suggest strategies that can be introduced in rural areas to reduce the movement of young adults to urban areas.",
    marks: 6, topicKey: "rural-urban-migration", cognitiveLevelName: "Evaluation",
    model_answer: "Any three: create opportunities for investments; increase employment opportunities; run skills development programmes; promote entrepreneurship; develop community projects; make services more accessible; improve the quality of services; improve infrastructure; increase recreational/cultural activities; promote tourism; subsidise education; run land reform programmes; give young farmers financial assistance; provide market-related salaries/bonuses.",
    marking_notes: "Any THREE distinct strategies, each described (2 marks each, max 6): investment opportunities; employment opportunities; skills development; entrepreneurship; community projects; accessible/improved services; improved infrastructure; recreational activities/tourism; subsidised education; land reform; financial assistance for young farmers; market-related salaries.",
    marking_points: [
      { marks: 2, description: "create investment/employment opportunities, or skills development programmes", keywords: ["investments", "employment opportunities", "skills development"] },
      { marks: 2, description: "promote entrepreneurship, community projects, or improved services/infrastructure", keywords: ["entrepreneurship", "community projects", "improve infrastructure", "accessible"] },
      { marks: 2, description: "recreational activities/tourism, subsidised education, land reform, or financial assistance", keywords: ["recreational", "tourism", "subsidising education", "land reform", "financial assistance"] },
    ],
    image_url: `${IMG}/1.3-poverty-graph.png`,
  },

  // ---------- 1.4 urban profile, 15 marks ----------
  {
    number: "1", sub_number: "1.4.1",
    text: "Refer to the sketch below showing an urban profile (CBD, Transition Zone, Residential, Industrial, and Rural-urban fringe zones across 25 km). Define the concept urban profile.",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "The side view of an urban area.",
    marking_notes: "Core concept: side view of an urban area.",
    marking_points: [{ marks: 2, description: "side view of an urban area", keywords: ["side view"] }],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },
  {
    number: "1", sub_number: "1.4.2",
    text: "Comment on the height of buildings in the CBD in comparison to those in the rural-urban fringe.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "Buildings are taller in the CBD and lower in the rural-urban fringe (height decreases moving away from the CBD).",
    marking_notes: "Accept any of: height decreases towards the fringe; buildings taller in CBD/lower in fringe.",
    marking_points: [{ marks: 1, description: "buildings are taller in the CBD, lower towards the fringe", keywords: ["taller in the cbd", "height decreases", "lower in the rural"] }],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },
  {
    number: "1", sub_number: "1.4.3",
    text: "How has the demand for land influenced the density of buildings in the CBD?",
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Comprehension",
    model_answer: "It resulted in a high building density.",
    marking_notes: "Core concept: resulted in high building density.",
    marking_points: [{ marks: 2, description: "resulted in a high building density", keywords: ["high building density"] }],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },
  {
    number: "1", sub_number: "1.4.4",
    text: "Why are both the transition zone and rural-urban fringe referred to as zones of change?",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "Any two: they are characterised by mixed land use; they undergo invasion and succession; urban renewal occurs there; urban expansion/urban sprawl occurs there.",
    marking_notes: "Any TWO of: mixed land use; invasion and succession; urban renewal; urban expansion/sprawl. 2 marks each.",
    marking_points: [
      { marks: 2, description: "characterised by mixed land use, or invasion and succession", keywords: ["mixed land use", "invasion and succession"] },
      { marks: 2, description: "urban renewal occurs, or urban expansion/sprawl occurs", keywords: ["urban renewal", "urban expansion", "urban sprawl"] },
    ],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },
  {
    number: "1", sub_number: "1.4.5",
    text: "Suggest economic reasons why the rural-urban fringe would be an attractive location for commercial activities.",
    marks: 6, topicKey: "rural-urban-settlement", cognitiveLevelName: "Evaluation",
    model_answer: "Any three: land is cheaper; land is available; the market is accessible; transport costs are reduced; transport infrastructure is accessible; costs are lower due to less crime; there is access to raw materials.",
    marking_notes: "Any THREE distinct reasons (2 marks each, max 6): cheaper land; available land; accessible market; reduced transport costs; accessible transport infrastructure; less crime-related costs; access to raw materials.",
    marking_points: [
      { marks: 2, description: "land is cheaper / available", keywords: ["land is cheaper", "available land"] },
      { marks: 2, description: "accessible market, or reduced transport costs/infrastructure", keywords: ["accessible market", "transport costs", "transport infrastructure"] },
      { marks: 2, description: "less crime-related costs, or access to raw materials", keywords: ["less costs incurred", "less crime", "raw materials"] },
    ],
    image_url: `${IMG}/1.4-urban-profile.png`,
  },

  // ---------- 1.5 informal settlements, 15 marks ----------
  {
    number: "1", sub_number: "1.5.1",
    text: 'Refer to the photographs and extract below on informal settlements: "Upgrading of Informal Settlements" (before/after photos). Informal settlements are generally located on any vacant land available, and are characterised by a lack of basic services, pollution, overcrowding, and poor waste management. Upgrading programmes — rather than uprooting and relocating residents — can improve neighbourhood infrastructure while low-income residents remain on site, and can create income-generating opportunities. Define the term informal settlement.',
    marks: 2, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "The building of structures on land that people occupy with no legal claim (accept: shacks erected from different materials on vacant, unplanned land with no basic services).",
    marking_notes: "Core concept: structures built on land occupied with no legal claim.",
    marking_points: [{ marks: 2, description: "structures built on land occupied with no legal claim", keywords: ["no legal claim", "occupy", "vacant land"] }],
    image_url: `${IMG}/1.5-informal-settlement-before-after.png`,
  },
  {
    number: "1", sub_number: "1.5.2",
    text: "State ONE factor in the extract that has a negative impact on the health of residents in informal settlements.",
    marks: 1, topicKey: "rural-urban-settlement", cognitiveLevelName: "Recall",
    model_answer: "Any one: lack of basic services; pollution; overcrowding; poor waste management.",
    marking_notes: "Accept any ONE of: lack of basic services; pollution; overcrowding; poor waste management.",
    marking_points: [{ marks: 1, description: "lack of basic services, pollution, overcrowding, or poor waste management", keywords: ["lack of basic services", "pollution", "overcrowding", "poor waste management"] }],
    image_url: `${IMG}/1.5-informal-settlement-before-after.png`,
  },
  {
    number: "1", sub_number: "1.5.3",
    text: "Explain TWO economic reasons for the increase in informal settlements.",
    marks: 4, topicKey: "rural-urban-settlement", cognitiveLevelName: "Analysis",
    model_answer: "Any two: municipal budgets cannot keep up with increasing demand; high unemployment/low wages; high levels of poverty; unaffordable formal housing/rent; difficulty obtaining financial assistance; high interest rates; cheaper to rent/build informally; closer proximity to work.",
    marking_notes: "Any TWO, each explained (2 marks each): municipal budget constraints; unemployment/low wages; poverty; unaffordable formal housing; difficulty accessing finance; high interest rates; cheaper to build/rent; proximity to work.",
    marking_points: [
      { marks: 2, description: "municipal budgets can't keep up with demand, or high unemployment/low wages/poverty", keywords: ["municipal budgets", "unemployment", "low wages", "poverty"] },
      { marks: 2, description: "unaffordable formal housing, difficulty accessing finance, or cheaper/closer to work", keywords: ["unaffordable formal housing", "financial assistance", "cheaper to rent", "proximity to work"] },
    ],
    image_url: `${IMG}/1.5-informal-settlement-before-after.png`,
  },
  {
    number: "1", sub_number: "1.5.4",
    text: "In a paragraph of approximately EIGHT lines, explain how the upgrading (improvement) of informal settlements would have a positive social impact for people living in these settlements.",
    marks: 8, topicKey: "rural-urban-settlement", cognitiveLevelName: "Evaluation",
    model_answer: "Any four: improved services improve quality of life; more facilities are built for greater convenience; improved transport infrastructure links surrounding areas for accessibility; upgraded infrastructure improves quality of life; better access to recreational facilities improves quality of life; preserved community networks lower crime levels; improved aesthetics and a healthier environment improve life expectancy; building social capital creates a sense of community belonging; locals learn new skills that could ensure employment; appointing local people creates job opportunities.",
    marking_notes: "Any FOUR distinct points, each explained (2 marks each, max 8): improved services/facilities; improved transport/infrastructure; better recreational access; preserved community networks/lower crime; improved aesthetics/health; social capital/community belonging; new skills/employment; local job appointments.",
    marking_points: [
      { marks: 2, description: "improved services/facilities improve quality of life", keywords: ["improved services", "more facilities", "quality of life"] },
      { marks: 2, description: "improved transport/infrastructure links surrounding areas", keywords: ["transport infrastructure", "upgraded infrastructure", "accessibility"] },
      { marks: 2, description: "community networks preserved, lowering crime, or improved aesthetics/health", keywords: ["community networks", "lowering levels of crime", "aesthetics", "healthier environment"] },
      { marks: 2, description: "new skills/employment, or local job appointments create opportunities", keywords: ["new skills", "employment", "job opportunities", "appointment of local people"] },
    ],
    image_url: `${IMG}/1.5-informal-settlement-before-after.png`,
  },

  // ============ QUESTION 2: ECONOMIC GEOGRAPHY OF SOUTH AFRICA (60 marks) ============

  // ---------- 2.1 farming MCQ (A-D), 8 marks ----------
  {
    number: "2", sub_number: "2.1.1",
    text: "The main difference between small-scale and large-scale farming is the ... (A) size of farm holdings, (B) use of research technology, (C) types of farmers, (D) impact on the market.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "A — size of farm holdings.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Refer to the photographs P (a combine harvester), Q (cattle), R (irrigation pivot), and S (a farmer manually tending rows of crops). Photograph ... below illustrates small-scale farming.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "D — S.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.1-farming-photos.png`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "A characteristic of small-scale farming evident in the photograph is ... (A) the use of hybrid seeds, (B) that it is only export-orientated, (C) the high capital investment, (D) the use of manual labour.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "D — the use of manual labour.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.1-farming-photos.png`,
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "... is an economic advantage for a farmer practising large-scale farming. (A) The use of machinery, (B) Larger profits, (C) A large labour force, (D) The practising of monoculture.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "B — Larger profits.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "2", sub_number: "2.1.5",
    text: "Cattle farming is an activity in the ... economic sector. (A) primary, (B) secondary, (C) tertiary, (D) quaternary.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "A — primary.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "2", sub_number: "2.1.6",
    text: "Distribution of dairy products is an activity in the ... economic sector. (A) primary, (B) secondary, (C) tertiary, (D) quaternary.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Recall",
    model_answer: "C — tertiary.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.1.7",
    text: "A factor favouring cattle farming in South Africa is ... (A) heavy rainfall, (B) high temperatures, (C) available grazing land, (D) climatic variation.",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "C — available grazing land.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.1.8",
    text: "Challenges faced by small-scale cattle farmers in South Africa are: (i) High rate of unemployment, (ii) Animal diseases, (iii) Semi-arid land, (iv) Export market. (A) (i) and (ii), (B) (ii) and (iii), (C) (i) and (iv), (D) (iii) and (iv).",
    marks: 1, topicKey: "economic-geography-agriculture", cognitiveLevelName: "Comprehension",
    model_answer: "B — (ii) and (iii): animal diseases, semi-arid land.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },

  // ---------- 2.2 IDZ/SDI matching (Y/Z), 7 marks ----------
  {
    number: "2", sub_number: "2.2.1",
    text: "Match the statement to the correct option. Statement: The main purpose of an industrial development zone (IDZ) is to promote ... Options: (Y) exports, (Z) imports.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Y — exports.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Match the statement to the correct option. Statement: SDIs are generally located in ... areas. Options: (Y) underdeveloped, (Z) developed.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Y — underdeveloped.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Match the statement to the correct option. Statement: A positive economic impact of spatial development initiatives (SDIs) is ... Options: (Y) improved quality of life, (Z) upgraded infrastructure.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Z — upgraded infrastructure.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.2.4",
    text: "Match the statement to the correct option. Statement: A social challenge experienced in the Saldanha Bay IDZ is ... Options: (Y) unskilled workforce, (Z) poor harbour facilities.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Y — unskilled workforce.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.2.5",
    text: "Match the statement to the correct option. Statement: The main industry associated with the West Coast SDI is a/an ... Options: (Y) automotive plant, (Z) steel plant.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "Z — steel plant.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.2.6",
    text: "Match the statement to the correct option. Statement: The South-western Cape core industrial region is restricted by ... Options: (Y) few mineral resources, (Z) small local markets.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Y — few mineral resources.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.2.7",
    text: "Match the statement to the correct option. Statement: A physical factor that promotes industries in the South-western Cape core industrial region is ... Options: (Y) overseas markets, (Z) coastal location.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Z — coastal location.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },

  // ---------- 2.3 coal mining, 15 marks ----------
  {
    number: "2", sub_number: "2.3.1",
    text: "Refer to the graph and extract below on coal mining in South Africa, showing coal exports (in billions of rands) and number of employees from 2016 to 2023. High-quality coal reserves have been decreasing over the years, and the shallow, high-quality resources in the Emalahleni (Witbank) coal field have been depleted. According to the graph, what amount of coal, in billions, was exported in 2023?",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Recall",
    model_answer: "R250 billion.",
    marking_notes: "Accept 'R250 billion' / '250'.",
    marking_points: [{ marks: 1, description: "250", keywords: ["250"] }],
    image_url: `${IMG}/2.3-coal-graph.png`,
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "What has been the general trend in profits from the export of coal in recent years?",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "An upward/increasing/positive trend.",
    marking_notes: "Accept 'upward', 'increasing', or 'positive trend' (or figures showing an increase in exports).",
    marking_points: [{ marks: 1, description: "upward / increasing / positive trend", keywords: ["upward", "increasing", "positive trend"] }],
    image_url: `${IMG}/2.3-coal-graph.png`,
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "According to the graph, between which years was the smallest number of employees recorded in the coal mining industry?",
    marks: 1, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "Between 2021 and 2022.",
    marking_notes: "Accept '2021 and 2022'.",
    marking_points: [{ marks: 1, description: "2021 and 2022", keywords: ["2021", "2022"] }],
    image_url: `${IMG}/2.3-coal-graph.png`,
  },
  {
    number: "2", sub_number: "2.3.4",
    text: "Give ONE possible reason for the small number of employees (answer to the previous question).",
    marks: 2, topicKey: "economic-geography-mining", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: depletion of coal; economic recession; impact of illness/pandemics; possible strikes/uprisings; increase in mechanisation; threats of nationalisation; use of environmentally friendly energy sources/reduced demand for coal; load-shedding; mine accidents.",
    marking_notes: "Any ONE, developed for 2 marks: depletion of coal; recession; illness/pandemics; strikes; mechanisation; nationalisation threats; environmentally friendly energy/reduced coal demand; load-shedding; mine accidents.",
    marking_points: [{ marks: 2, description: "any valid reason: depletion of coal, recession, mechanisation, strikes, load-shedding, or mine accidents", keywords: ["depletion of coal", "economic recession", "mechanisation", "strikes", "load shedding", "mine accidents"] }],
    image_url: `${IMG}/2.3-coal-graph.png`,
  },
  {
    number: "2", sub_number: "2.3.5",
    text: "According to the extract, the high-quality coal reserves in South Africa have been decreasing over the years. Explain the negative impact of decreasing high-quality coal reserves for the future supply of power in South Africa.",
    marks: 4, topicKey: "economic-geography-mining", cognitiveLevelName: "Analysis",
    model_answer: "Any two: there would be more frequent load-shedding/load reduction; there would be greater demand than supply; the cost of electricity would increase; lower-quality coal will have to be used, leading to shutdowns/maintenance of power stations; it is expensive to invest in alternative energy sources.",
    marking_notes: "Any TWO, each explained (2 marks each): more frequent load-shedding; greater demand than supply; increased electricity costs; lower-quality coal use/power station shutdowns; expensive alternative energy investment.",
    marking_points: [
      { marks: 2, description: "more frequent load-shedding, or greater demand than supply", keywords: ["frequent load shedding", "greater demand than supply"] },
      { marks: 2, description: "increased cost of electricity, or lower-quality coal leads to shutdowns/maintenance", keywords: ["cost of electricity", "lower quality coal", "shut downs", "maintenance"] },
    ],
    image_url: `${IMG}/2.3-coal-graph.png`,
  },
  {
    number: "2", sub_number: "2.3.6",
    text: "Explain why the coal mining industry is important to the economy of South Africa.",
    marks: 6, topicKey: "economic-geography-mining", cognitiveLevelName: "Evaluation",
    model_answer: "Any three: it creates employment opportunities, reducing dependency on government/increasing buying power; the multiplier effect stimulates other industries, growing the economy; coal mining contributes to the GDP; coal is South Africa's main power source, which all economic sectors depend on; the export of coal earns foreign exchange; taxes from the coal mining industry contribute to the GDP/GNP; coal is used as a raw material to manufacture other products; it promotes the development/upgrading of infrastructure that benefits other sectors.",
    marking_notes: "Any THREE distinct points, each explained (2 marks each, max 6): job creation; multiplier effect; GDP contribution; main power source; foreign exchange from exports; tax contribution; raw material use; infrastructure development.",
    marking_points: [
      { marks: 2, description: "creates employment opportunities / multiplier effect stimulates other industries", keywords: ["employment opportunities", "multiplier effect"] },
      { marks: 2, description: "contributes to GDP, or coal is the main source of power all sectors depend on", keywords: ["contributes to the gdp", "main source of power"] },
      { marks: 2, description: "exports earn foreign exchange, taxes contribute to GDP, raw material use, or infrastructure development", keywords: ["foreign exchange", "taxes from coal mining", "raw material", "infrastructure"] },
    ],
    image_url: `${IMG}/2.3-coal-graph.png`,
  },

  // ---------- 2.4 Gauteng (PWV) core industrial region, 15 marks ----------
  {
    number: "2", sub_number: "2.4.1",
    text: "Refer to the infographic below on the Gauteng (PWV) core industrial region: Gauteng (PWV) is the biggest contributor to South Africa's GDP, with about 10 000 businesses in its manufacturing sector employing over half a million people. Refer to the statistics and state the percentage that the Gauteng (PWV) core industrial region contributes to the GDP of South Africa.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "38%.",
    marking_notes: "Accept only '38%' / '38'.",
    marking_points: [{ marks: 1, description: "38", keywords: ["38"] }],
    image_url: `${IMG}/2.4-gauteng-infographic.png`,
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Quote evidence from the extract that shows why 31% of South Africa's labour force is found in the Gauteng (PWV) core industrial region.",
    marks: 2, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: '"[A] sector employing over half a million people," or "There are about 10 000 businesses involved in the province\'s manufacturing [sector]."',
    marking_notes: "Accept either direct quote (employing over half a million people / 10 000 businesses).",
    marking_points: [{ marks: 2, description: "quotes evidence of the scale of employment/businesses (half a million people / 10 000 businesses)", keywords: ["half a million people", "10 000 businesses", "employing"] }],
    image_url: `${IMG}/2.4-gauteng-infographic.png`,
  },
  {
    number: "2", sub_number: "2.4.3",
    text: "Refer to the sketch of major roads linking main industrial areas in the Gauteng (PWV) core industrial region (Pretoria, Witwatersrand, Vereeniging) and explain the role of the major roads in supporting industrial development in the region.",
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: they allow for effective transportation of goods/raw materials/labour; they create accessibility to major markets; the dense road network creates greater accessibility; the shortest possible distance to towns/cities is available, making it cost effective; an effective road network attracts investors; it decreases traffic congestion, allowing rapid delivery of products.",
    marking_notes: "Any TWO, each explained (2 marks each): effective transport of goods/labour; accessibility to markets; dense network/short distances are cost-effective; attracts investors; reduces congestion/speeds delivery.",
    marking_points: [
      { marks: 2, description: "effective transportation of goods/raw materials/labour, or accessibility to major markets", keywords: ["effective transportation", "accessibility to major markets"] },
      { marks: 2, description: "cost effective due to short distances, attracts investors, or decreases traffic congestion", keywords: ["cost effective", "attract investors", "traffic congestion", "rapid delivery"] },
    ],
    image_url: `${IMG}/2.4-gauteng-infographic.png`,
  },
  {
    number: "2", sub_number: "2.4.4",
    text: "Explain TWO challenges faced by the Gauteng (PWV) core industrial region.",
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Any two: load-shedding/load reduction reduces production; traffic congestion slows the movement of goods/people; shortage of water resources/water shedding; limited land available for further expansion; high petrol prices increase transport costs; deterioration of rail transport; increased dependency on road transport; labour strikes/unrest decrease production; increased operating costs (wage negotiations); distance from harbours increases transport costs; high crime rate; increased pollution; lack of skills; lack of maintenance of transport infrastructure; competition from cheap counterfeit products; political issues affecting business confidence.",
    marking_notes: "Any TWO distinct challenges, each explained (2 marks each): load-shedding; traffic congestion; water shortages; limited land; high transport/petrol costs; deteriorating rail; labour strikes; increased operating costs; distance from harbours; crime; pollution; lack of skills; poor infrastructure maintenance; counterfeit competition; political issues.",
    marking_points: [
      { marks: 2, description: "load-shedding reduces production, or traffic congestion slows movement of goods", keywords: ["load shedding", "traffic congestion"] },
      { marks: 2, description: "water shortages, limited land, high transport costs, labour strikes, crime, or pollution", keywords: ["water resources", "limited land", "transport costs", "labour strikes", "crime rate", "pollution"] },
    ],
    image_url: `${IMG}/2.4-gauteng-infographic.png`,
  },
  {
    number: "2", sub_number: "2.4.5",
    text: "Suggest ONE advantage and ONE disadvantage of industries moving towards high value-added production in the Gauteng (PWV) core industrial region.",
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Evaluation",
    model_answer: "Advantage (any one): higher profits; efficient production process; upskilling of people; increased investment; increased foreign income; access to a larger market; diversified production; opportunities in specialised sectors. Disadvantage (any one): fewer job opportunities for unskilled workers; skilled labour sourced from other countries/regions; buyers pay more for goods; businesses in low-value production are negatively affected; high cost for skills development; production losses due to load-shedding; requires large capital outlay; existing infrastructure struggles to meet demand; high maintenance cost.",
    marking_notes: "Must give ONE advantage AND ONE disadvantage (2 marks each, max 4): advantages include higher profits, efficiency, upskilling, increased investment/income, larger markets, diversification; disadvantages include fewer unskilled jobs, sourcing skilled labour abroad, higher prices, negative impact on low-value businesses, high skills/capital costs, infrastructure strain.",
    marking_points: [
      { marks: 2, description: "advantage: higher profits, efficient production, upskilling, or increased investment/market access", keywords: ["higher profits", "efficient production", "upskilling", "increased investment", "larger market"] },
      { marks: 2, description: "disadvantage: fewer unskilled jobs, sourcing skilled labour, higher prices, or high capital/infrastructure costs", keywords: ["less job opportunities", "skilled labour will be sourced", "pay more for goods", "large capital outlay", "infrastructure struggles"] },
    ],
    image_url: `${IMG}/2.4-gauteng-infographic.png`,
  },

  // ---------- 2.5 informal sector, 15 marks ----------
  {
    number: "2", sub_number: "2.5.1",
    text: 'Refer to the extract and graph below on the informal sector: "Regulating Trading in the Informal Sector" — 30% of informal trading in South Africa occurs in Johannesburg. According to the extract, what is the percentage of informal trading that takes place in Johannesburg?',
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Recall",
    model_answer: "30%.",
    marking_notes: "Accept only '30%' / '30'.",
    marking_points: [{ marks: 1, description: "30", keywords: ["30"] }],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Quote evidence from the extract why trading has been restricted in Johannesburg at night.",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: '"Exposes them to criminal activity."',
    marking_notes: "Accept only this exact/near-exact quote.",
    marking_points: [{ marks: 1, description: "exposes them to criminal activity", keywords: ["exposes them to criminal activity"] }],
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "According to the graph on the busiest time for trading in the informal sector in Johannesburg, which is the busiest time period for trading in the informal sector?",
    marks: 1, topicKey: "economic-geography-industry", cognitiveLevelName: "Comprehension",
    model_answer: "16:00 to 18:00.",
    marking_notes: "Accept '16:00 to 18:00' / '16:00-18:00'.",
    marking_points: [{ marks: 1, description: "16:00 to 18:00", keywords: ["16:00", "18:00"] }],
  },
  {
    number: "2", sub_number: "2.5.4",
    text: "Suggest TWO reasons for the rapid growth of the informal sector in the city of Johannesburg.",
    marks: 4, topicKey: "economic-geography-industry", cognitiveLevelName: "Analysis",
    model_answer: "Any two: high unemployment rate/retrenchments; low-paying jobs; a high number of illegal immigrants; increase in the urban population; lack of skills/education; economic recession/slump in the economy; increase in poverty; lower start-up costs; fewer regulations; lack of access to finance/loans; formal businesses sub-contract from the informal sector.",
    marking_notes: "Any TWO, each explained (2 marks each): high unemployment; low-paying jobs; illegal immigrants; urban population growth; lack of skills; economic recession; increased poverty; lower start-up costs; fewer regulations; lack of finance access; sub-contracting from formal sector.",
    marking_points: [
      { marks: 2, description: "high unemployment/retrenchments, or low-paying jobs", keywords: ["high unemployment", "retrenchments", "low paying jobs"] },
      { marks: 2, description: "lack of skills/education, economic recession, lower start-up costs, or lack of access to finance", keywords: ["lack of skills", "economic recession", "lower start up costs", "access to finance"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.5",
    text: "In a paragraph of approximately EIGHT lines, explain measures that the municipality can put in place to assist traders in the informal sector to operate under more favourable conditions.",
    marks: 8, topicKey: "economic-geography-industry", cognitiveLevelName: "Evaluation",
    model_answer: "Any four: regulate the informal sector; allocate space near markets; provide stalls; give access to storage facilities; give access to basic services; give access to financial assistance; provide skills training/learnership opportunities; create partnerships with the formal sector/private businesses; implement effective policing/increase security; run public-awareness campaigns/by-laws to improve the perception of the informal sector.",
    marking_notes: "Any FOUR distinct measures, each explained (2 marks each, max 8): regulation; allocated trading space; stalls; storage facilities; basic services access; financial assistance; skills training; partnerships with formal sector; policing/security; public awareness/by-laws.",
    marking_points: [
      { marks: 2, description: "regulate the informal sector, allocate space near markets, or provide stalls", keywords: ["regulate the informal sector", "allocate space", "provide them with stalls"] },
      { marks: 2, description: "access to storage/basic services, or financial assistance", keywords: ["storage facilities", "basic services", "financial assistance"] },
      { marks: 2, description: "skills training, or partnerships with the formal sector/private businesses", keywords: ["skills training", "learnership", "partnerships with the formal sector"] },
      { marks: 2, description: "effective policing/security, or public awareness/by-laws", keywords: ["effective policing", "increase security", "public awareness", "by laws"] },
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
