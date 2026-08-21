// Real school past paper: Parktown Boys' High School Geography Prelim
// Paper 1, 19 September 2023. Source: the school's own question paper +
// official memo (both supplied by the user as local PDFs, cross-verified
// page-by-page against each other — the memo bundles the full question
// paper text with answers inserted in red after each block, which made
// verification straightforward).
//
// Scope: Sections A (Climate & Weather, Q1-4) and B (Geomorphology, Q5-8)
// only — 150 of the paper's 150 marks are split 60/60/30 across three
// sections; Section C (Mapwork, 30 marks) requires the physical 1:50 000
// topographic map (2930CA MERRIVALE) + orthophoto (2930CA 5 MERRIVALE),
// which weren't supplied and aren't available as a download, so Section C
// is excluded entirely.
//
// Within A+B, a handful of sub-questions are pure drawing tasks the app
// has no way to grade and are excluded too: 3.3 (cross-section sketch, 4
// marks), 4.3 (cross-section sketch, 5 marks), 6.3 (flow diagram, 4
// marks), 6.4 (water-table diagrams, 4 marks). Question 7.5 asks for a
// diagram AND a written explanation (2 + 4 marks) — only the 4-mark
// written explanation is kept, with the question text adjusted to drop the
// drawing instruction.
//
// Included total: 101 of 150 marks (51 from Section A, 50 from Section B).
//
// KNOWN MEMO DISCREPANCY: in 5.2, the school's official memo answers
// 5.2.3 = G (Dendritic) and 5.2.8 = C (Trellis). Standard CAPS/textbook
// definitions have these swapped — 5.2.3's description ("inclined rock
// layers unequally resistant to erosion") is the textbook definition of a
// Trellis pattern, and 5.2.8's description ("uniform resistance,
// tributaries join at acute angles") is the textbook definition of a
// Dendritic pattern. Seeded here with the standard CAPS answers (5.2.3 =
// Trellis, 5.2.8 = Dendritic) rather than the memo's swapped answers, per
// user decision — flagged in both questions' marking_notes in case this
// exact memo is what his teacher marks against.
//
// Model answers/marking notes below are written in our own words from the
// memo's content, not copied verbatim (except short direct quotes from the
// tropical-cyclone news article reprinted in Question 2, which is itself
// quoted material within the original paper).

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/geography-2023-prelim-p1";

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
    key: "mid-latitude-cyclones",
    name: "Mid-latitude Cyclones (Cut-off Lows & Berg Winds)",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Mid-latitude Cyclones)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=cut+off+low+berg+wind+geography+grade+12",
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
  year: 2023,
  exam_diet: "September",
  paper_number: "P1",
  duration_minutes: 120, // scaled from the real 180 min / 150 marks to the 101 marks included here
  total_marks: 101,
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
  // ============ QUESTION 1: CLIMATE AND WEATHER (15 marks) ============

  // ---------- 1.1 MCQ (A-D), 8 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Terrestrial radiation refers to … (A) An area of a slope that receives permanent sun. (B) Heat given off by Earth. (C) Heat absorbed by Earth. (D) An area of a slope that only receives morning sun.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Recall",
    model_answer: "B — heat given off by Earth.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "A south facing slope in South Africa would experience ... (A) Warmer conditions between December and February. (B) Colder conditions between December and February. (C) Consistently warmer conditions throughout the year. (D) Consistently cooler conditions throughout the year.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "D — consistently cooler conditions throughout the year.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
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
    text: "Refer to the Urban Heat Island Profile diagram, showing late-afternoon temperature rising from rural areas, peaking downtown, dipping at a park, then falling again toward rural farmland. An Urban Heat Island can be defined as … (A) A phenomenon whereby the central part of a city is warmer than the surrounding rural areas. (B) A phenomenon whereby the central part of a city is cool than the surrounding rural areas. (C) A phenomenon whereby there is increased pollution in the air that is trapped by an inversion layer. (D) A combination of pollution, sinking inversion layers and intense heat increasing the temperature in the city centre.",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Recall",
    model_answer: "A — a phenomenon whereby the central part of a city is warmer than the surrounding rural areas.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.1-urban-heat-island.jpeg`,
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "Refer to the Urban Heat Island Profile diagram. A possible reason for the drop in temperature at the park may be … (A) Additional air conditioning units being used to cool the plants. (B) There is more traffic in this area creating more wind. (C) Vast areas of vegetation absorbing heat. (D) There is always more rain over parklands than urban centres.",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Analysis",
    model_answer: "C — vast areas of vegetation absorbing heat.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.1-urban-heat-island.jpeg`,
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "During which season are we most likely to experience urban heat islands? (A) Autumn & Spring. (B) Winter & Summer. (C) All year. (D) Winter only.",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Recall",
    model_answer: "C — all year.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "When thinking about precipitation it should be noted that … (A) Rural areas receive more rain than urban areas due to having less heat and more vegetation present. (B) Urban areas experience more thunderstorms due to the increased heat and hygroscopic nuclei present. (C) Suburban residential areas receive more rain as they are the perfect middle between cool temperatures and increased vegetation. (D) Downtown will experience less frequent storms due to the high-rise buildings preventing the natural flow of wind.",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Comprehension",
    model_answer: "B — urban areas experience more thunderstorms due to the increased heat and hygroscopic nuclei present.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },

  // ---------- 1.2 fill-in-the-blank on synoptic map, 7 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "Refer to the synoptic map showing pressure systems labelled A-D around southern Africa. The low pressure around Cape Town (A) would be an example of a (Berg Wind/Cut off low/Coastal low pressure).",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Coastal low pressure.",
    marking_notes: "Accept only 'coastal low pressure' / 'coastal low'.",
    marking_points: [{ marks: 1, description: "coastal low pressure", keywords: ["coastal low"] }],
    image_url: `${IMG}/1.2-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "The name of the high pressure cell at B is (South Atlantic/South Indian/Kalahari) Anticyclone.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "South Indian Anticyclone.",
    marking_notes: "Accept only 'South Indian'.",
    marking_points: [{ marks: 1, description: "South Indian", keywords: ["south indian"] }],
    image_url: `${IMG}/1.2-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "The wind coming into South Africa from C has a moisture content that is (more/less/the same) as the wind coming from B.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "Less.",
    marking_notes: "Accept only 'less'.",
    marking_points: [{ marks: 1, description: "less", keywords: ["less"] }],
    image_url: `${IMG}/1.2-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "The season depicted in the diagram would likely be (Summer/Winter/Spring).",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Winter.",
    marking_notes: "Accept only 'winter'.",
    marking_points: [{ marks: 1, description: "winter", keywords: ["winter"] }],
    image_url: `${IMG}/1.2-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "The air that circulates around the high pressure at D will rotate in a/an (clockwise/anticlockwise/upwards) direction.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Anticlockwise.",
    marking_notes: "Accept only 'anticlockwise'.",
    marking_points: [{ marks: 1, description: "anticlockwise", keywords: ["anticlockwise"] }],
    image_url: `${IMG}/1.2-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "The latitude at which the warmer Westerlies meet the cold Polar Easterlies is known as the (Sub-polar collision/Polar Front/Upfront meet).",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Polar Front.",
    marking_notes: "Accept only 'polar front'.",
    marking_points: [{ marks: 1, description: "polar front", keywords: ["polar front"] }],
    image_url: `${IMG}/1.2-synoptic-map.png`,
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "Bloemfontein is likely experiencing (partly cloudy/overcast/clear) conditions in this diagram.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "Clear.",
    marking_notes: "Accept only 'clear'.",
    marking_points: [{ marks: 1, description: "clear", keywords: ["clear"] }],
    image_url: `${IMG}/1.2-synoptic-map.png`,
  },

  // ============ QUESTION 2: TROPICAL CYCLONES (15 marks) ============
  {
    number: "2", sub_number: "2.1",
    text: 'Refer to the article below and answer the questions that follow.\n\n"A world first, every tropical ocean saw a Category 5 storm in 2023"\n\nFor the first time since weather satellites began peering at our skies from above, each of the world’s warm oceans have seen a scale-topping tropical cyclone so far in 2023. While we’d typically see at least one tropical system somewhere on Earth achieve this infamous milestone each year, we’ve never seen each of the world’s tropical ocean basins pump out a scale-topping storm all within the same year.\n\nThe first Category 5 tropical cyclone of 2023 was a deadly powerhouse of a storm in the Indian Ocean that’s likely to secure a spot in record books as the longest-lived tropical cyclone ever observed. Cyclone Freddy formed off the northwestern coast of Australia on February 6, continuing west across the entire Indian Ocean for more than a month. This storm caused record breaking destruction across the continent of Africa.\n\n"Hurricanes Jova and Lee exploded just hours apart" — Two hurricanes rapidly intensified on either side of North America over the course of two days in September. Jova formed far off the western coast of Mexico where it encountered very warm waters over the eastern Pacific Ocean. The system intensified from a tropical storm with 110 km/h winds on September 5, 2023, into a Category 5 hurricane with 260 km/h just 24 hours later. The following day, Hurricane Lee over in the Atlantic Ocean accomplished a similar feat, rapidly growing its maximum sustained winds from 130 km/h to 270 km/h over a 24-hour period — one of the fastest bouts of intensification ever observed over the Atlantic.\n\n"Mawar grew into the year’s strongest tropical cyclone" — the year’s strongest tropical system developed in the western Pacific Ocean back in May. Super Typhoon Mawar swiftly grew into a monstrous Category 5 equivalent storm when it peaked with maximum winds measuring as high as 295 km/h.\n\n"Three more storms round out 2023’s historic feat" — the hot waters around Oceania gave rise to another Category 5 cyclone at the end of February. Cyclone Kevin’s intense winds briefly reached the top of the scale after traversing the islands of Vanuatu.\n\nHow many typhoons occurred before Super Typhoon Mawar developed?',
    marks: 2, topicKey: "tropical-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "12.",
    marking_notes: "Accept only '12' (per the memo — based on the full article/data table as originally supplied to students, not fully reconstructable from the excerpt alone).",
    marking_points: [{ marks: 2, description: "12", keywords: ["12"] }],
  },
  {
    number: "2", sub_number: "2.2",
    text: "What is unique about the 'cyclone season' of 2023 according to the article?",
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "It was the first season on record in which every one of the world's tropical ocean basins produced a Category 5 storm.",
    marking_notes: "Core idea: first time every ocean basin had a Category 5 in the same year.",
    marking_points: [{ marks: 1, description: "first season with a Category 5 in every ocean basin", keywords: ["category 5", "every ocean", "all oceans", "every tropical ocean"] }],
  },
  {
    number: "2", sub_number: "2.3",
    text: "What do you think may have caused the cyclone season of 2023 to be so unique?",
    marks: 2, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Global warming — warmer oceans across the globe provided more of the heat energy that fuels tropical cyclones, leading to more storms developing and intensifying to Category 5.",
    marking_notes: "Accept logical answers — core idea is global warming / warmer oceans worldwide.",
    marking_points: [{ marks: 2, description: "global warming / warmer oceans worldwide", keywords: ["global warming", "warmer oceans", "climate change"] }],
  },
  {
    number: "2", sub_number: "2.4",
    text: "In the southern hemisphere, which section of a tropical cyclone would be the most destructive? The bottom left or the top left quadrant?",
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "The bottom left quadrant.",
    marking_notes: "Accept only 'bottom left'.",
    marking_points: [{ marks: 1, description: "bottom left", keywords: ["bottom left"] }],
  },
  {
    number: "2", sub_number: "2.5",
    text: "When considering hurricanes Jova and Lee, quote ONE piece of evidence from the article to support the notion that climate change may be responsible for these storms developing so rapidly.",
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: '"Encountered very warm waters over the eastern Pacific Ocean" — or the specific wind-speed jump (e.g. Jova going from 110 km/h to 260 km/h in 24 hours).',
    marking_notes: "Accept any correctly quoted piece of evidence of rapid intensification or unusually warm water from the article.",
    marking_points: [{ marks: 1, description: "quotes evidence of very warm water or rapid wind-speed increase", keywords: ["very warm waters", "110", "260", "130", "270", "24 hour", "24-hour"] }],
  },
  {
    number: "2", sub_number: "2.6",
    text: "In a paragraph of approximately EIGHT lines, discuss TWO social impacts of tropical cyclones and TWO strategies we can implement to mitigate the damage caused by these phenomena.",
    marks: 8, topicKey: "tropical-cyclones", cognitiveLevelName: "Evaluation",
    model_answer: "Social impacts (any two, described): loss of family members/lives; job losses; mental-health impacts on survivors; children being orphaned; destruction of infrastructure that affects communities directly, such as schools and hospitals. Mitigation strategies (any two, described): early prediction and warning systems so communities can prepare; advance planning (e.g. evacuation plans); having rescue operations ready and in place.",
    marking_notes: "Must be a DESCRIPTION, not just a listed term. Any TWO social impacts (2 marks each) + any TWO mitigation strategies (2 marks each), max 8.",
    marking_points: [
      { marks: 2, description: "social impact 1: family/job losses, mental health, or orphaned children", keywords: ["family losses", "job losses", "mental health", "orphaned"] },
      { marks: 2, description: "social impact 2: infrastructure damage affecting the community (e.g. schools/hospitals)", keywords: ["infrastructure damage", "schools", "hospitals", "educational institutions"] },
      { marks: 2, description: "mitigation strategy 1: prediction and early-warning systems", keywords: ["prediction", "early warning", "warning"] },
      { marks: 2, description: "mitigation strategy 2: advance planning and rescue operations", keywords: ["plan in advance", "advance planning", "rescue operations"] },
    ],
  },

  // ============ QUESTION 3: ANTI-CYCLONES (11 of 15 marks — 3.3 excluded, drawing) ============
  {
    number: "3", sub_number: "3.1",
    text: "Study the synoptic weather map below (13 September 2023, MSLP analysis) and answer the questions that follow. What is the name given to the anticyclone present directly over the east coast of South Africa?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "South Indian Anticyclone.",
    marking_notes: "Accept 'South Indian (AC/Anticyclone)'.",
    marking_points: [{ marks: 1, description: "South Indian Anticyclone", keywords: ["south indian"] }],
    image_url: `${IMG}/3-synoptic-map.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Provide labels for the pressure systems labelled A and B on the diagram.",
    marks: 2, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "A — South Atlantic High Pressure (anticyclone). B — a mid-latitude cyclone / cold front.",
    marking_notes: "A: South Atlantic high pressure (1). B: mid-latitude cyclone or cold front (1).",
    marking_points: [
      { marks: 1, description: "A: South Atlantic high pressure", keywords: ["south atlantic"] },
      { marks: 1, description: "B: mid-latitude cyclone / cold front", keywords: ["mid latitude cyclone", "cold front", "mid-latitude cyclone"] },
    ],
    image_url: `${IMG}/3-synoptic-map.png`,
  },
  {
    number: "3", sub_number: "3.4",
    text: "Over the next few weeks, are temperatures likely to increase or decrease across South Africa?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "Increase.",
    marking_notes: "Accept only 'increase'.",
    marking_points: [{ marks: 1, description: "increase", keywords: ["increase"] }],
  },
  {
    number: "3", sub_number: "3.5",
    text: "Provide ONE piece of evidence to substantiate your answer to QUESTION 3.4 (that temperatures will increase over the coming weeks).",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "The date on the map is 13 September — spring is approaching, so temperatures will keep rising.",
    marking_notes: "Accept reference to the date shown / the approaching season (spring).",
    marking_points: [{ marks: 1, description: "the date / approaching spring season", keywords: ["date", "september", "spring"] }],
    image_url: `${IMG}/3-synoptic-map.png`,
  },
  {
    number: "3", sub_number: "3.6",
    text: "Considering your answer to QUESTION 3.4, briefly describe what will happen to the Kalahari High Pressure system over the next few weeks.",
    marks: 4, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "As the interior heats up moving toward summer, rising air over the interior will lift the Kalahari High. This means the inversion layer will rise too, eventually allowing moist coastal air to move further into the interior.",
    marking_notes: "Accept reasonable answers: interior heats up (2); rising air lifts the Kalahari HP and/or the inversion layer rises, allowing coastal air inland (2).",
    marking_points: [
      { marks: 2, description: "interior heats up approaching summer", keywords: ["heat up", "interior will heat"] },
      { marks: 2, description: "rising air lifts the Kalahari HP / inversion layer rises, letting coastal air inland", keywords: ["rising air", "lift the kalahari", "inversion layer will rise", "coastal air into the interior"] },
    ],
  },
  {
    number: "3", sub_number: "3.7",
    text: "Describe ONE positive consequence for inland farmers as a result of the change in the Kalahari High Pressure system described in QUESTION 3.6.",
    marks: 2, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Evaluation",
    model_answer: "More rain can be expected inland as coastal moisture reaches further into the interior; or, the warmer temperatures mean less risk of frost damaging crops.",
    marking_notes: "Accept logical answers: more rain expected, or less frost risk for crops.",
    marking_points: [{ marks: 2, description: "more rain expected inland, or less frost risk for crops", keywords: ["more rain", "less risk of frost", "frost"] }],
  },

  // ============ QUESTION 4: MID-LATITUDE CYCLONES (10 of 15 marks — 4.3 excluded, drawing) ============
  {
    number: "4", sub_number: "4.1",
    text: "Study the diagram showing the formation of a mid-latitude cyclone over North America (six numbered stages, 1-6) and answer the questions that follow. Which hemisphere is this mid-latitude cyclone forming in?",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Recall",
    model_answer: "Northern hemisphere.",
    marking_notes: "Accept only 'Northern'.",
    marking_points: [{ marks: 1, description: "Northern", keywords: ["northern"] }],
    image_url: `${IMG}/4-midlat-cyclone.jpeg`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Refer to the diagram's six numbered stages of mid-latitude cyclone formation. Match stage 1 with the description that best fits it: (A) Cyclone degenerates, (B) Occlusion begins, (C) Winds begin to spiral, (D) Wave forms in polar front, (E) Fronts develop, (F) Fully mature mid-latitude cyclone is formed.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "D — wave forms in polar front.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/4-midlat-cyclone.jpeg`,
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "Match stage 2 with the description that best fits it: (A) Cyclone degenerates, (B) Occlusion begins, (C) Winds begin to spiral, (D) Wave forms in polar front, (E) Fronts develop, (F) Fully mature mid-latitude cyclone is formed.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "C — winds begin to spiral.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/4-midlat-cyclone.jpeg`,
  },
  {
    number: "4", sub_number: "4.2.3",
    text: "Match stage 3 with the description that best fits it: (A) Cyclone degenerates, (B) Occlusion begins, (C) Winds begin to spiral, (D) Wave forms in polar front, (E) Fronts develop, (F) Fully mature mid-latitude cyclone is formed.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "E — fronts develop.",
    marking_notes: "Accept only 'E'.",
    marking_points: [{ marks: 1, description: "E", keywords: ["e"] }],
    image_url: `${IMG}/4-midlat-cyclone.jpeg`,
  },
  {
    number: "4", sub_number: "4.2.4",
    text: "Match stage 4 with the description that best fits it: (A) Cyclone degenerates, (B) Occlusion begins, (C) Winds begin to spiral, (D) Wave forms in polar front, (E) Fronts develop, (F) Fully mature mid-latitude cyclone is formed.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "F — fully mature mid-latitude cyclone is formed.",
    marking_notes: "Accept only 'F'.",
    marking_points: [{ marks: 1, description: "F", keywords: ["f"] }],
    image_url: `${IMG}/4-midlat-cyclone.jpeg`,
  },
  {
    number: "4", sub_number: "4.2.5",
    text: "Match stage 5 with the description that best fits it: (A) Cyclone degenerates, (B) Occlusion begins, (C) Winds begin to spiral, (D) Wave forms in polar front, (E) Fronts develop, (F) Fully mature mid-latitude cyclone is formed.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "B — occlusion begins.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/4-midlat-cyclone.jpeg`,
  },
  {
    number: "4", sub_number: "4.2.6",
    text: "Match stage 6 with the description that best fits it: (A) Cyclone degenerates, (B) Occlusion begins, (C) Winds begin to spiral, (D) Wave forms in polar front, (E) Fronts develop, (F) Fully mature mid-latitude cyclone is formed.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "A — cyclone degenerates.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/4-midlat-cyclone.jpeg`,
  },
  {
    number: "4", sub_number: "4.4",
    text: "What is the likely cloud type that would develop at the cold front?",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Recall",
    model_answer: "Cumulonimbus.",
    marking_notes: "Accept only 'cumulonimbus'.",
    marking_points: [{ marks: 1, description: "cumulonimbus", keywords: ["cumulonimbus"] }],
  },
  {
    number: "4", sub_number: "4.5",
    text: "Explain the term 'occlusion'.",
    marks: 2, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Both the cold front and warm front combine/merge together to form a single, rainy front.",
    marking_notes: "Core concept: the two fronts combine into one rainy front.",
    marking_points: [{ marks: 2, description: "cold and warm fronts combine into a single, rainy front", keywords: ["combine", "merge", "single", "rainy front", "one front"] }],
  },

  // ============ QUESTION 5: SHORT QUESTIONS (15 marks) ============

  // ---------- 5.1 river-course stages, 7 marks ----------
  {
    number: "5", sub_number: "5.1.1",
    text: "The following descriptions are all features of a river system. State whether each is found in the UPPER, MIDDLE or LOWER course of a river. Erosion is dominant at this stage.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Upper.",
    marking_notes: "Accept only 'upper'.",
    marking_points: [{ marks: 1, description: "upper", keywords: ["upper"] }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "In an ideal transverse river profile, erosion and deposition would be equal at this stage.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "Middle.",
    marking_notes: "Accept only 'middle'.",
    marking_points: [{ marks: 1, description: "middle", keywords: ["middle"] }],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Rapids and waterfalls are a feature here.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Upper.",
    marking_notes: "Accept only 'upper'.",
    marking_points: [{ marks: 1, description: "upper", keywords: ["upper"] }],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Most headward erosion takes place at this stage.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Upper.",
    marking_notes: "Accept only 'upper'.",
    marking_points: [{ marks: 1, description: "upper", keywords: ["upper"] }],
  },
  {
    number: "5", sub_number: "5.1.5",
    text: "Oxbow lakes typically form here.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Lower.",
    marking_notes: "Accept only 'lower'.",
    marking_points: [{ marks: 1, description: "lower", keywords: ["lower"] }],
  },
  {
    number: "5", sub_number: "5.1.6",
    text: "Rivers may meander here, however there is still vertical erosion taking place.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "Middle.",
    marking_notes: "Accept only 'middle'.",
    marking_points: [{ marks: 1, description: "middle", keywords: ["middle"] }],
  },
  {
    number: "5", sub_number: "5.1.7",
    text: "Deltas are a common feature here.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Lower.",
    marking_notes: "Accept only 'lower'.",
    marking_points: [{ marks: 1, description: "lower", keywords: ["lower"] }],
  },

  // ---------- 5.2 drainage-pattern matching, 8 marks ----------
  {
    number: "5", sub_number: "5.2.1",
    text: "Choose a term that matches the geomorphological description: stream pattern that flows into a central pan or a low-lying area. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "F — Centripetal pattern.",
    marking_notes: "Accept only 'F'.",
    marking_points: [{ marks: 1, description: "F", keywords: ["f"] }],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Choose a term that matches the geomorphological description: forms on igneous rocks that have joints and cracks. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "A — Rectangular pattern.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "Choose a term that matches the geomorphological description: forms on inclined rock layers that are unequally resistant to erosion. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "C — Trellis pattern.",
    marking_notes: "MEMO DISCREPANCY: the school's official memo says 'G' (Dendritic) here, but standard CAPS/textbook definitions match this description to Trellis pattern (C) instead — 'inclined rock layers unequally resistant to erosion' is the classic Trellis definition, while Dendritic normally matches 5.2.8's description. Seeded with the standard CAPS answer (per user decision), not the memo's answer — flag this with his teacher if this exact memo is used to mark him.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "5", sub_number: "5.2.4",
    text: "Choose a term that matches the geomorphological description: develops on a dome where streams flow outwards. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "E — Radial/centrifugal pattern.",
    marking_notes: "Accept only 'E'.",
    marking_points: [{ marks: 1, description: "E", keywords: ["e"] }],
  },
  {
    number: "5", sub_number: "5.2.5",
    text: "Choose a term that matches the geomorphological description: a drainage pattern that is maintained even after the land has been uplifted and/or folded. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "D — Antecedent drainage.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "5", sub_number: "5.2.6",
    text: "Choose a term that matches the geomorphological description: a stream pattern that does not match the geology and topography of the existing landscape. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "B — Superimposed.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
  },
  {
    number: "5", sub_number: "5.2.7",
    text: "Choose a term that matches the geomorphological description: forms in mostly glacial regions where no specific pattern can be identified. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "I — Deranged pattern.",
    marking_notes: "Accept only 'I'.",
    marking_points: [{ marks: 1, description: "I", keywords: ["i"] }],
  },
  {
    number: "5", sub_number: "5.2.8",
    text: "Choose a term that matches the geomorphological description: occurs on rocks that have uniform resistance to erosion and where tributaries join the main river at acute angles. Options: (A) Rectangular pattern, (B) Superimposed, (C) Trellis pattern, (D) Antecedent drainage, (E) Radial/centrifugal pattern, (F) Centripetal pattern, (G) Dendritic pattern, (H) Braided pattern, (I) Deranged pattern.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "G — Dendritic pattern.",
    marking_notes: "MEMO DISCREPANCY: the school's official memo says 'C' (Trellis) here, but standard CAPS/textbook definitions match this description to Dendritic pattern (G) instead — 'uniform resistance, tributaries join at acute angles' is the classic Dendritic definition. Seeded with the standard CAPS answer (per user decision), not the memo's answer — see the note on 5.2.3.",
    marking_points: [{ marks: 1, description: "G", keywords: ["g"] }],
  },

  // ============ QUESTION 6: DRAINAGE BASINS (7 of 15 marks — 6.3 and 6.4 excluded, drawing) ============
  {
    number: "6", sub_number: "6.1",
    text: 'Refer to the cartoon below, showing wilted plants pleading "EEEEE!!! WE SURRENDER! HAVE MERCY!!" as a farmer sprays them with a hose connected to a tap labelled "VAAL WATER", with the farmer thinking "That can\'t be good." Why do the plants look terrified in the cartoon?',
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "The water being sprayed on them is polluted/poisoned.",
    marking_notes: "Accept reasonable answers: the water is polluted/poisoned.",
    marking_points: [{ marks: 2, description: "the water is polluted / poisoned", keywords: ["poisoned", "polluted", "contaminated"] }],
    image_url: `${IMG}/6-cartoon.jpeg`,
  },
  {
    number: "6", sub_number: "6.2",
    text: "Where is the water coming from in the cartoon?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "The Vaal (River).",
    marking_notes: "Accept 'the Vaal' / 'Vaal River'.",
    marking_points: [{ marks: 1, description: "the Vaal", keywords: ["vaal"] }],
    image_url: `${IMG}/6-cartoon.jpeg`,
  },
  {
    number: "6", sub_number: "6.5",
    text: "Describe TWO factors that influence the water table levels in any particular area.",
    marks: 4, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Any two, described: relief (slope/topography of the land); soil type; rock type/geology; soil moisture content; rainfall amount; land use (e.g. urbanisation reducing infiltration).",
    marking_notes: "Any TWO of: relief, soil type, rock type, soil moisture, rainfall, land use — must be a description, not just the term. 2 marks each.",
    marking_points: [
      { marks: 2, description: "factor 1: relief, soil type, or rock type", keywords: ["relief", "soil type", "rock type", "geology"] },
      { marks: 2, description: "factor 2: soil moisture, rainfall, or land use", keywords: ["soil moisture", "rainfall", "land use"] },
    ],
  },

  // ============ QUESTION 7: FLUVIAL PROCESSES (13 of 15 marks — 7.5 reduced from 6 to 4, diagram dropped) ============
  {
    number: "7", sub_number: "7.1",
    text: "Study the figure below, which illustrates river rejuvenation (before/after, showing a knickpoint and points A and B), and answer the questions that follow. Define the term river rejuvenation.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "An increase in a river's energy, usually caused by a drop in sea level or an uplift of the land.",
    marking_notes: "Core concept: an increase in river energy.",
    marking_points: [{ marks: 2, description: "an increase in river energy", keywords: ["increase in river energy", "increase in energy"] }],
    image_url: `${IMG}/7-river-rejuvenation.jpeg`,
  },
  {
    number: "7", sub_number: "7.2",
    text: "Name the rejuvenation feature indicated at B.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Incised meander (also accept 'valley within a valley').",
    marking_notes: "Accept 'incised meander' or 'valley within a valley'.",
    marking_points: [{ marks: 1, description: "incised meander", keywords: ["incised meander", "valley within a valley"] }],
    image_url: `${IMG}/7-river-rejuvenation.jpeg`,
  },
  {
    number: "7", sub_number: "7.3",
    text: "Explain how river rejuvenation would have led to the creation of the feature found at B.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "The increase in energy from rejuvenation resulted in an increase in (vertical) erosion, cutting the meander deeper into the landscape.",
    marking_notes: "Accept reasonable answers — core idea: increased energy led to increased erosion.",
    marking_points: [{ marks: 2, description: "increased energy led to increased erosion", keywords: ["increase in energy", "increase in erosion", "increased erosion"] }],
    image_url: `${IMG}/7-river-rejuvenation.jpeg`,
  },
  {
    number: "7", sub_number: "7.4",
    text: "Discuss TWO positive effects of river rejuvenation.",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "Any two: more water flows downstream; increased potential for farming; increased potential for tourism; increased potential for electricity generation; more alluvium is brought down, increasing soil fertility; expansion of habitats.",
    marking_notes: "Accept logical answers, any TWO described (2 marks each): more water downstream; farming potential; tourism potential; electricity generation potential; increased soil fertility from alluvium; habitat expansion.",
    marking_points: [
      { marks: 2, description: "effect 1: more water downstream, or farming/tourism/electricity potential", keywords: ["more water downstream", "farming", "tourism", "electricity generation"] },
      { marks: 2, description: "effect 2: increased soil fertility from alluvium, or habitat expansion", keywords: ["alluvium", "soil fertility", "expansion of habitats", "habitats"] },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Fully explain the formation of a knickpoint waterfall.",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "A knickpoint waterfall develops where a river crosses a layer of resistant rock that dips (points) upstream — this resistant tip is called the lip, or fall-maker. The softer rock beneath or downstream of this resistant layer is eroded away by the water (through hydraulic action and abrasion), undercutting the resistant lip and forming a plunge pool at the bottom.",
    marking_notes: "Any TWO explained points from: forms where the river crosses a resistant rock layer dipping upstream (the lip/fall-maker) (2); softer rock beneath/downstream is eroded by hydraulic action and abrasion, forming a plunge pool (2). NOTE: the original question also asked for a diagram (2 marks) — omitted here since the app can't grade drawings; marks rescaled from 6 to 4.",
    marking_points: [
      { marks: 2, description: "forms where the river crosses a resistant rock layer dipping upstream (the lip/fall-maker)", keywords: ["resistant rock", "dips upstream", "lip", "fall maker", "fall-maker"] },
      { marks: 2, description: "softer rock is eroded by hydraulic action/abrasion, forming a plunge pool", keywords: ["hydraulic action", "abrasion", "plunge pool", "softer rock"] },
    ],
  },

  // ============ QUESTION 8: RIVER MANAGEMENT (15 marks) ============
  {
    number: "8", sub_number: "8.1",
    text: 'Study the article below, "The Orange (Gariep) River: South Africa\'s biggest river", and its longitudinal profile diagram, and answer the questions that follow. The Orange (Gariep) River is South Africa\'s main river. It rises in the Maluti Mountains of Lesotho, flows south-west through Lesotho, meanders north-west and then west across South Africa, and finally flows through parts of the Kalahari and Namib Deserts, where it then enters the Atlantic Ocean at Oranjemund. In very dry years, it does not reach the sea. Navigation on the river is limited due to rapids, falls, and shoals (sandbanks) in braided sections of the river. The river provides water for irrigation and municipal use, and it generates hydroelectricity. The construction of the Vanderkloof Dam has made it possible to turn thousands of hectares of arid land into productive land. Via transfer schemes, tunnels divert water to the Great Fish and Sundays Rivers. The river mouth contains rich alluvial diamond deposits and forms a delta-type wetland. Which large river joins the Orange River basin between Hopetown and Upington?',
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "The Vaal River.",
    marking_notes: "Accept 'Vaal River' / 'the Vaal'.",
    marking_points: [{ marks: 1, description: "Vaal River", keywords: ["vaal"] }],
    image_url: `${IMG}/8-orange-river-profile.png`,
  },
  {
    number: "8", sub_number: "8.2",
    text: "Give the term for a large river that flows through a desert — like the Orange (Gariep) River does.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Exotic river.",
    marking_notes: "Accept only 'exotic river'.",
    marking_points: [{ marks: 1, description: "exotic river", keywords: ["exotic river", "exotic"] }],
  },
  {
    number: "8", sub_number: "8.3",
    text: "Is the river profile shown above a transverse or longitudinal profile?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Longitudinal.",
    marking_notes: "Accept only 'longitudinal'.",
    marking_points: [{ marks: 1, description: "longitudinal", keywords: ["longitudinal"] }],
    image_url: `${IMG}/8-orange-river-profile.png`,
  },
  {
    number: "8", sub_number: "8.4a",
    text: "On the river's profile, identify a knickpoint.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Augrabies Falls.",
    marking_notes: "Accept only 'Augrabies Falls'.",
    marking_points: [{ marks: 1, description: "Augrabies Falls", keywords: ["augrabies"] }],
    image_url: `${IMG}/8-orange-river-profile.png`,
  },
  {
    number: "8", sub_number: "8.4b",
    text: "On the river's profile, identify the permanent base level.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "The river mouth / the ocean (Atlantic Ocean).",
    marking_notes: "Accept 'river mouth' or 'ocean/sea'.",
    marking_points: [{ marks: 1, description: "river mouth / ocean", keywords: ["river mouth", "ocean", "sea"] }],
    image_url: `${IMG}/8-orange-river-profile.png`,
  },
  {
    number: "8", sub_number: "8.4c",
    text: "On the river's profile, identify TWO temporary base levels.",
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Gariep Dam and Vanderkloof Dam.",
    marking_notes: "Both required for full marks: Gariep Dam (1) and Vanderkloof Dam (1).",
    marking_points: [
      { marks: 1, description: "Gariep Dam", keywords: ["gariep dam", "gariep"] },
      { marks: 1, description: "Vanderkloof Dam", keywords: ["vanderkloof"] },
    ],
    image_url: `${IMG}/8-orange-river-profile.png`,
  },
  {
    number: "8", sub_number: "8.5",
    text: "Describe TWO ways in which the Orange (Gariep) River is under pressure (indirectly referred to in the extract), and suggest TWO management strategies or solutions for these problems.",
    marks: 8, topicKey: "drainage-basin-management", cognitiveLevelName: "Evaluation",
    model_answer: "Pressures (any two): climate change; drought; damming and irrigation schemes placing demands on the river's water. Management strategies (any two): create and enforce legislation controlling construction near the river; control deforestation; require Environmental Impact Assessments (EIAs) for developments; protect wetlands; control the clearing/spread of alien invasive plants; carefully plan construction near the river; educate farmers and the public on the importance of these systems.",
    marking_notes: "Accept reasonable answers. Any TWO pressures (2 marks each) + any TWO management strategies (2 marks each), max 8.",
    marking_points: [
      { marks: 2, description: "pressure 1: climate change / drought", keywords: ["climate change", "drought"] },
      { marks: 2, description: "pressure 2: damming and irrigation schemes", keywords: ["damming", "irrigation"] },
      { marks: 2, description: "strategy 1: legislation, EIAs, or protecting wetlands", keywords: ["legislation", "environmental impact assessment", "eia", "wetlands"] },
      { marks: 2, description: "strategy 2: controlling deforestation/alien plants, careful construction planning, or public education", keywords: ["deforestation", "alien plants", "invasive plants", "construction must be", "educate"] },
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
