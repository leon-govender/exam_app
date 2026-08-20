// Pilot dataset for Geography — a hand-authored excerpt in authentic NSC
// Paper 1 (Climatology & Geomorphology) style: same question format, mark
// allocation, and cognitive-level spread as a real DBE paper.
//
// NOTE: this is NOT a verbatim past paper. The DBE's own past-paper PDFs
// (and the third-party mirrors of them) use obfuscated/subsetted fonts that
// this machine's PDF tools (pdftotext, no OCR available) could not extract
// cleanly — the text came out as cipher-like garbage, not real characters.
// Rather than seed the database with garbage, this excerpt was authored to
// the same CAPS syllabus and exam conventions so the app is fully
// end-to-end testable today. Swap in verbatim past-paper text later by
// editing this file — the shape (topic/cognitive-level tags, mark
// allocations, memo) is what the rest of the app depends on, not the
// specific wording.
//
// Review this file before running `npm run seed` — correct any tag,
// wording, mark allocation, or marking point you're not happy with first.
// `marking_points` drives the free rule-based grader (src/lib/grader.ts):
// each point is awarded if any of its keyword phrases show up in the
// student's answer. Keep phrases short and put likely alternate wordings
// in the same point, not separate ones.

import type { MarkingPoint } from "../../src/lib/grader";

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
    key: "tropical-cyclones",
    name: "Tropical Cyclones",
    caps_term: "Term 1",
    textbook_ref: "Oxford Successful Geography Gr 12, Ch 1, pg 8–19",
    video_url: "https://www.youtube.com/results?search_query=tropical+cyclones+CAPS+geography+grade+12",
  },
  {
    key: "mid-latitude-cyclones",
    name: "Mid-latitude Cyclones (Cut-off Lows & Berg Winds)",
    caps_term: "Term 1",
    textbook_ref: "Oxford Successful Geography Gr 12, Ch 2, pg 22–35",
    video_url: "https://www.youtube.com/results?search_query=cut+off+low+berg+wind+geography+grade+12",
  },
  {
    key: "fluvial-processes",
    name: "Fluvial Processes",
    caps_term: "Term 2",
    textbook_ref: "Oxford Successful Geography Gr 12, Ch 5, pg 60–74",
    video_url: "https://www.youtube.com/results?search_query=fluvial+processes+river+long+profile+grade+12+geography",
  },
  {
    key: "drainage-basin-management",
    name: "Drainage Basin Management",
    caps_term: "Term 2",
    textbook_ref: "Oxford Successful Geography Gr 12, Ch 5, pg 75–80",
    video_url: "https://www.youtube.com/results?search_query=drainage+basin+flood+management+grade+12+geography",
  },
];

export const paper = {
  year: 2023,
  exam_diet: "November (pilot excerpt)",
  paper_number: "P1",
  duration_minutes: 60,
  total_marks: 50,
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
}

export const questions: QuestionSeed[] = [
  {
    number: "1",
    sub_number: "1.1",
    text: 'Define the term "tropical cyclone".',
    marks: 2,
    topicKey: "tropical-cyclones",
    cognitiveLevelName: "Recall",
    model_answer:
      "A tropical cyclone is an intense, rotating low-pressure system that develops over warm tropical oceans (sea temperature ≥ 27°C), characterised by strong winds spiralling around a calm centre (eye) and heavy rainfall.",
    marking_notes:
      "1 mark for 'intense/rotating low-pressure system', 1 mark for reference to warm-ocean origin or spiralling winds around a calm eye.",
    marking_points: [
      { marks: 1, description: "intense, rotating low-pressure system", keywords: ["rotating low pressure system", "intense low pressure system", "low pressure system"] },
      { marks: 1, description: "warm ocean origin or winds spiralling around a calm eye", keywords: ["warm ocean", "warm tropical ocean", "spiralling winds", "calm eye", "eye of the storm"] },
    ],
  },
  {
    number: "1",
    sub_number: "1.2",
    text: "State TWO conditions necessary for the formation of a tropical cyclone.",
    marks: 2,
    topicKey: "tropical-cyclones",
    cognitiveLevelName: "Recall",
    model_answer:
      "Any TWO: sea surface temperature of at least 26–27°C to a depth of ~60 m; Coriolis force present (forms more than 5° from the equator); high humidity in the mid-troposphere; low wind shear between surface and upper atmosphere; a pre-existing low-level disturbance.",
    marking_notes: "1 mark per valid condition, max 2.",
    marking_points: [
      { marks: 1, description: "warm sea surface temperature (≥26–27°C)", keywords: ["sea surface temperature", "warm sea", "26 degrees", "27 degrees"] },
      { marks: 1, description: "Coriolis force / far enough from the equator", keywords: ["coriolis force", "coriolis effect", "from the equator"] },
      { marks: 1, description: "high humidity in the mid-troposphere", keywords: ["high humidity", "moist air", "humid"] },
      { marks: 1, description: "low wind shear", keywords: ["low wind shear", "weak wind shear", "wind shear"] },
      { marks: 1, description: "a pre-existing disturbance", keywords: ["pre existing disturbance", "existing disturbance", "tropical wave"] },
    ],
  },
  {
    number: "1",
    sub_number: "1.3",
    text: "Explain why tropical cyclones lose energy rapidly after making landfall.",
    marks: 4,
    topicKey: "tropical-cyclones",
    cognitiveLevelName: "Comprehension",
    model_answer:
      "Once a tropical cyclone moves over land it is cut off from its main energy source — the warm ocean water that supplies latent heat through evaporation. Increased surface friction over land also disrupts the organised inflow of air toward the centre. Without a continuous energy supply the system rapidly loses intensity and dissipates or is downgraded to a tropical storm/depression.",
    marking_notes:
      "Look for loss of warm-water energy source AND increased land friction disrupting circulation. Award marks progressively for a developed explanation, not an isolated list.",
    marking_points: [
      { marks: 2, description: "cut off from its warm-water energy source (latent heat/evaporation)", keywords: ["cut off from warm water", "energy source", "latent heat", "evaporation supply", "no longer over the ocean"] },
      { marks: 2, description: "increased friction over land disrupts circulation", keywords: ["increased friction", "surface friction", "disrupts circulation", "disrupts the inflow"] },
    ],
  },
  {
    number: "1",
    sub_number: "1.4",
    text:
      "With reference to a named tropical cyclone that affected southern Africa, discuss the socio-economic impacts on the affected community.",
    marks: 6,
    topicKey: "tropical-cyclones",
    cognitiveLevelName: "Analysis",
    model_answer:
      "Any named cyclone (e.g. Idai, Freddy, Eloise) may be used. Impacts may include: loss of life and injury from flooding/wind/structural collapse; destruction of homes and infrastructure (roads, bridges, power lines); damage to agricultural land and crops causing food insecurity; displacement of communities into temporary shelters; disruption of health services and increased disease risk (e.g. cholera) from contaminated water; long-term economic cost of reconstruction.",
    marking_notes:
      "Discussion question — accept any named southern African cyclone. Award for range and depth of socio-economic impacts, not just a list; max 6.",
    marking_points: [
      { marks: 2, description: "loss of life / injury", keywords: ["loss of life", "injuries", "deaths", "fatalities"] },
      { marks: 2, description: "damage to homes / infrastructure", keywords: ["homes destroyed", "infrastructure damage", "roads damaged", "bridges damaged", "power lines"] },
      { marks: 2, description: "impact on agriculture / food security", keywords: ["crops damaged", "agricultural land", "food insecurity", "farmland destroyed"] },
      { marks: 2, description: "displacement / temporary shelters", keywords: ["displaced", "temporary shelters", "evacuated"] },
      { marks: 2, description: "health impact / disease risk", keywords: ["disease outbreak", "cholera", "contaminated water", "health services"] },
      { marks: 2, description: "economic / reconstruction cost", keywords: ["economic loss", "reconstruction cost", "municipal budget", "livelihoods"] },
    ],
  },
  {
    number: "2",
    sub_number: "2.1",
    text: "What is a cut-off low pressure system?",
    marks: 2,
    topicKey: "mid-latitude-cyclones",
    cognitiveLevelName: "Recall",
    model_answer:
      "A cut-off low is a cold-cored, upper-air low-pressure cell that has become detached ('cut off') from the main westerly wind flow, and can bring prolonged heavy rainfall, especially to the southern and eastern parts of South Africa.",
    marking_notes: "Award marks for 'cold, upper-air low' and 'detached from the main westerly flow / stationary system'.",
    marking_points: [
      { marks: 1, description: "cold, upper-air low-pressure cell", keywords: ["cold core", "upper air low", "cold upper level low"] },
      { marks: 1, description: "detached/cut off from the main westerly flow", keywords: ["cut off from the main flow", "detached from the westerlies", "stationary system", "cut off from the westerly"] },
    ],
  },
  {
    number: "2",
    sub_number: "2.2",
    text: "Explain the sequence of weather conditions associated with the passage of a cold front.",
    marks: 6,
    topicKey: "mid-latitude-cyclones",
    cognitiveLevelName: "Comprehension",
    model_answer:
      "Ahead of the front: warm, moist air; rising temperature; falling pressure; increasing cloud cover (cirrus thickening to altostratus/nimbostratus) and eventual steady rain. At the front: sudden wind shift, sharp temperature drop, brief but often heavy rainfall/thunderstorms. Behind the front: cold, clear, drier air; rising pressure; gusty/blustery winds.",
    marking_notes: "Mark in three stages (before/at/after the front), roughly 2 marks each; allow synonyms for temperature/pressure/cloud/wind changes; max 6.",
    marking_points: [
      { marks: 2, description: "ahead of the front: warm/moist air, falling pressure, thickening cloud", keywords: ["warm moist air", "rising temperature", "falling pressure", "cloud thickening", "steady rain"] },
      { marks: 2, description: "at the front: wind shift, sharp temperature drop, heavy rain/thunderstorms", keywords: ["wind shift", "temperature drop", "heavy rainfall", "thunderstorms", "sharp drop"] },
      { marks: 2, description: "behind the front: cold, clear, drier air, rising pressure, gusty wind", keywords: ["cold clear air", "rising pressure", "gusty winds", "drier air"] },
    ],
  },
  {
    number: "2",
    sub_number: "2.3",
    text:
      "Using your knowledge of berg winds, explain why temperatures rise rapidly ahead of a cold front in the interior of South Africa during winter.",
    marks: 5,
    topicKey: "mid-latitude-cyclones",
    cognitiveLevelName: "Analysis",
    model_answer:
      "Air is drawn ahead of the approaching cold front and forced to descend on the leeward (eastern) side of the escarpment. This descending air is compressed and warms adiabatically (the Foehn effect), producing a warm, dry berg wind that noticeably raises interior temperatures shortly before the front itself brings a temperature drop.",
    marking_notes:
      "Key concepts: descending/subsiding air, adiabatic compression and warming, leeward side of escarpment, temporary — ahead of the front. Award marks progressively for a developed causal chain, not isolated terms; max 5.",
    marking_points: [
      { marks: 2, description: "air descends on the leeward side of the escarpment", keywords: ["descending air", "subsiding air", "leeward side", "leeward slopes", "escarpment"] },
      { marks: 2, description: "compressed and warms adiabatically (Foehn effect)", keywords: ["adiabatic warming", "adiabatic compression", "compressed and warms", "foehn effect"] },
      { marks: 1, description: "temporary — occurs ahead of the front", keywords: ["ahead of the front", "before the front arrives", "temporary warming"] },
    ],
  },
  {
    number: "2",
    sub_number: "2.4",
    text:
      "Evaluate the effectiveness of early warning systems in reducing the impact of cut-off low systems on communities in the Eastern Cape.",
    marks: 6,
    topicKey: "mid-latitude-cyclones",
    cognitiveLevelName: "Evaluation",
    model_answer:
      "Strengths: satellite and radar tracking identify cut-off lows days in advance; the SA Weather Service issues watches/warnings enabling evacuation and emergency planning, reducing loss of life. Limitations: warnings do not prevent infrastructure damage; informal settlements in flood-prone areas often lack resources to act on warnings; poor communication/infrastructure in rural areas means warnings may not reach everyone in time. On balance, such systems reduce loss of life more effectively than they reduce economic/infrastructural damage.",
    marking_notes:
      "Evaluation question — expects a balanced judgement (strengths AND limitations) with a concluding stance, not just a list; reserve at least 1 mark for a clear evaluative conclusion; max 6.",
    marking_points: [
      { marks: 1, description: "satellite/radar tracking gives early detection", keywords: ["satellite tracking", "radar tracking", "early detection", "monitored in advance"] },
      { marks: 1, description: "weather service issues warnings enabling evacuation", keywords: ["weather service", "watches and warnings", "early warning", "evacuation"] },
      { marks: 1, description: "reduces loss of life", keywords: ["reduces loss of life", "saves lives"] },
      { marks: 1, description: "limitation: doesn't prevent infrastructure/economic damage", keywords: ["does not prevent damage", "infrastructure still damaged", "economic damage"] },
      { marks: 1, description: "limitation: informal settlements / rural communities under-served", keywords: ["informal settlements", "lack resources", "rural communities", "warnings do not reach"] },
      { marks: 1, description: "clear evaluative conclusion", keywords: ["on balance", "overall more effective", "in conclusion"] },
    ],
  },
  {
    number: "3",
    sub_number: "3.1",
    text: 'Define the term "drainage basin".',
    marks: 2,
    topicKey: "fluvial-processes",
    cognitiveLevelName: "Recall",
    model_answer:
      "A drainage basin is the total area of land drained by a river and its tributaries, bounded by a watershed/drainage divide.",
    marking_notes: "Award marks for 'area drained by a river and tributaries' and 'bounded by watershed/divide'.",
    marking_points: [
      { marks: 1, description: "area drained by a river and its tributaries", keywords: ["area drained", "river and its tributaries", "catchment area"] },
      { marks: 1, description: "bounded by a watershed/drainage divide", keywords: ["watershed", "drainage divide", "water divide"] },
    ],
  },
  {
    number: "3",
    sub_number: "3.2",
    text: "Distinguish between vertical and lateral erosion in a river system.",
    marks: 4,
    topicKey: "fluvial-processes",
    cognitiveLevelName: "Comprehension",
    model_answer:
      "Vertical erosion is the downward cutting of a river into its bed, dominant in the upper course where gradient and energy are high, producing V-shaped valleys. Lateral erosion is the sideways erosion of a river's banks, dominant in the middle to lower course, widening the valley floor and contributing to features such as meanders.",
    marking_notes: "Up to 2 marks per type (definition + course/context where dominant); max 4.",
    marking_points: [
      { marks: 2, description: "vertical erosion: downward cutting, dominant in upper course", keywords: ["downward erosion", "vertical erosion", "erodes vertically", "eroding vertically", "cutting into the bed", "downward cutting", "upper course"] },
      { marks: 2, description: "lateral erosion: sideways/bank erosion, dominant middle-lower course, widens valley/meanders", keywords: ["sideways erosion", "lateral erosion", "erodes sideways", "eroding the banks", "bank erosion", "widening the valley", "meanders"] },
    ],
  },
  {
    number: "3",
    sub_number: "3.3",
    text: "Explain how the graded profile of a river changes from source to mouth.",
    marks: 5,
    topicKey: "fluvial-processes",
    cognitiveLevelName: "Analysis",
    model_answer:
      "In the upper course, steep gradient and vertical erosion produce an irregular, steep long profile with features like waterfalls and rapids. Toward the middle and lower course, gradient decreases while discharge increases, erosion shifts from vertical to lateral, and the profile becomes smoother and more concave. Near the mouth, gradient approaches zero and deposition dominates, producing a very gently sloping profile — the river approaches a 'graded' state where erosion and deposition are balanced.",
    marking_notes:
      "Look for: change from steep/irregular to smooth/concave profile; shift from erosion-dominant to deposition-dominant processes; explicit reference to the graded concept. Max 5.",
    marking_points: [
      { marks: 2, description: "upper course: steep, irregular, waterfalls/rapids", keywords: ["steep gradient", "upper course", "waterfalls", "rapids"] },
      { marks: 2, description: "gradient decreases, erosion shifts to lateral, profile smooths", keywords: ["gradient decreases", "lateral erosion", "eroding sideways", "smoother profile", "concave", "discharge increases"] },
      { marks: 1, description: "graded concept: erosion and deposition balanced near the mouth", keywords: ["graded profile", "erosion and deposition balanced", "deposition dominates", "depositing more", "gently sloping"] },
    ],
  },
  {
    number: "3",
    sub_number: "3.4",
    text: "Discuss THREE strategies that can be used to manage flooding within a drainage basin.",
    marks: 6,
    topicKey: "drainage-basin-management",
    cognitiveLevelName: "Evaluation",
    model_answer:
      "Any THREE, each explained: building levees/floodwalls to contain high flows; constructing dams/flood-attenuation structures upstream to store and gradually release excess water; restricting development on the floodplain through land-use planning/zoning; restoring wetlands and riparian vegetation upstream to slow runoff and increase infiltration; dredging/channel maintenance to increase channel capacity.",
    marking_notes: "2 marks per valid strategy (1 for naming, 1 for explaining how it reduces flood risk); max 6 for any THREE distinct, well-explained strategies.",
    marking_points: [
      { marks: 2, description: "levees / floodwalls", keywords: ["levees", "floodwalls", "embankments"] },
      { marks: 2, description: "dams / flood-attenuation storage", keywords: ["dams", "flood attenuation", "storage reservoirs", "upstream dams"] },
      { marks: 2, description: "floodplain land-use planning / zoning", keywords: ["land use planning", "zoning", "restrict development", "floodplain development"] },
      { marks: 2, description: "wetland / riparian vegetation restoration", keywords: ["wetland restoration", "riparian vegetation", "slow runoff", "increase infiltration"] },
      { marks: 2, description: "dredging / channel maintenance", keywords: ["dredging", "channel maintenance", "channel capacity"] },
    ],
  },
];
