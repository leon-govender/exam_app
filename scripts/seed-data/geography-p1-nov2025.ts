// Real DBE past paper: Geography P1, November 2025, National (English).
// Source: official DBE question paper + official DBE marking guideline
// (both fetched and cross-verified against each other page-by-page — one
// early memo page turned out to be unrelated content bundled into the same
// PDF by whoever compiled it, discarded after the mismatch was caught).
//
// Scope: Section A only (Questions 1 & 2, 120 of 150 marks). Section B
// (Geographical Skills/mapwork, 30 marks) requires the actual 1:50 000
// topographical map + orthophoto of Stellenbosch, which is a separate
// government survey product (Chief Directorate: National Geo-spatial
// Information) — it isn't included in any past-paper download and was
// never obtained, so Section B is excluded entirely rather than faked.
//
// This file covers Question 1 (Climate and Weather) only. Question
// 1.3.5 (draw a labelled cross-section) is excluded — the app has no way
// to grade a drawing.
//
// Model answers/marking notes below are written in our own words from the
// official memo's content, not copied verbatim.

import type { MarkingPoint } from "../../src/lib/grader";

// Textbook: Focus Geography Grade 12 (Maskew Miller Longman) — his actual
// school textbook. No chapter/page numbers or link: see the matching note
// in geography-p1-pilot.ts for why.
const IMG = "/question-images/geography-2025-p1";

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
    key: "subtropical-anticyclones",
    name: "Subtropical Anticyclones & Pressure Systems",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Subtropical Anticyclones)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=subtropical+anticyclones+south+africa+geography+grade+12",
  },
  {
    key: "valley-climates",
    name: "Valley Climates",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Valley Climates)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=valley+climates+anabatic+katabatic+winds+geography+grade+12",
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
    key: "tropical-cyclones",
    name: "Tropical Cyclones",
    caps_term: "Term 1",
    textbook_ref: "Focus Geography Grade 12 — Climatology (Tropical Cyclones)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=tropical+cyclones+CAPS+geography+grade+12",
  },
  // Same topics as the pilot paper (matched by name on seed) — river
  // capture and meanders both fall under Fluvial Processes; the
  // settlement/catchment extract falls under Drainage Basin Management.
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
  year: 2025,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 120, // Section A only (Q1+Q2), excerpted from the real 3-hour/150-mark paper
  total_marks: 116, // 120 minus the 4-mark drawing question we can't grade
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
  // ---------- 1.1 matching (Y/Z), 8 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Name the air-pressure cell that dominates the interior of South Africa in winter: heat low, or Kalahari high?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Kalahari high.",
    marking_notes: "Accept only 'Kalahari high'.",
    marking_points: [{ marks: 1, description: "Kalahari high", keywords: ["kalahari high", "kalahari"] }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Air movement associated with high-pressure cells: convergence, or divergence?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Divergence.",
    marking_notes: "Accept only 'divergence'.",
    marking_points: [{ marks: 1, description: "divergence", keywords: ["divergence", "diverge"] }],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "The general direction of movement of a coastal low-pressure system is: easterly, or westerly?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Easterly.",
    marking_notes: "Accept only 'easterly'.",
    marking_points: [{ marks: 1, description: "easterly", keywords: ["easterly", "east"] }],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Which system is known as a blocking high when it sits in the path of a mid-latitude cyclone: the South Indian high, or the Kalahari high?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "South Indian high.",
    marking_notes: "Accept only 'South Indian high'.",
    marking_points: [{ marks: 1, description: "South Indian high", keywords: ["south indian high", "south indian"] }],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "The elongation of isobars extending outward from a high-pressure cell is called: diverging, or ridging?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Ridging.",
    marking_notes: "Accept only 'ridging'.",
    marking_points: [{ marks: 1, description: "ridging", keywords: ["ridging", "ridge"] }],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "A boundary found between two air masses of different moisture content is called a: moisture front, or inter-tropical convergence zone?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Moisture front.",
    marking_notes: "Accept only 'moisture front'.",
    marking_points: [{ marks: 1, description: "moisture front", keywords: ["moisture front"] }],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Two high-pressure cells sit either side of a dashed convergence line running between them on the sketch. The conditions this represents will lead to: line thunderstorms, or berg winds?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Line thunderstorms.",
    marking_notes: "Accept only 'line thunderstorms'.",
    marking_points: [{ marks: 1, description: "line thunderstorms", keywords: ["line thunderstorms", "thunderstorms"] }],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "On the sketch, a low-pressure system sits inland with 20 knots of wind marked near Durban. Rainfall with 20 knots of wind is likely at: Durban, or Cape Town?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Durban.",
    marking_notes: "Accept only 'Durban'.",
    marking_points: [{ marks: 1, description: "Durban", keywords: ["durban"] }],
  },

  // ---------- 1.2 MCQ (A-D), 7 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "Refer to the photograph of a valley with slopes labelled A and B. Slope aspect refers to: (A) upslope movement of air in a valley, (B) climate on a smaller scale, (C) a zone of warmer air in the valley, (D) slope direction in relation to the sun.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Recall",
    model_answer: "D — slope direction in relation to the sun.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/1.2-slope-aspect.png`,
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "The photograph represents a valley in the ... hemisphere: (A) Northern, (B) Eastern, (C) Southern, (D) Western.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "C — Southern.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.2-slope-aspect.png`,
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Slope B represents a ... and ... slope — (i) cooler, (ii) warmer, (iii) moist, (iv) drier. (A) i and ii, (B) ii and iii, (C) i and iii, (D) ii and iv.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Analysis",
    model_answer: "C — cooler and moist (i and iii).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.2-slope-aspect.png`,
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Refer to the photograph of a mountain valley with wind arrows labelled A flowing downslope at night. The arrows at A indicate a/an ... wind: (A) anabatic, (B) katabatic, (C) upslope, (D) onshore.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Recall",
    model_answer: "B — katabatic.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.2-valley-winds.jpeg`,
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "The main conditions for the formation of the wind at A are ... and ... — (i) terrestrial radiation, (ii) solar radiation, (iii) low temperatures, (iv) high temperatures. (A) i and iii, (B) i and iv, (C) ii and iii, (D) ii and iv.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "A — terrestrial radiation and low temperatures (i and iii).",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.2-valley-winds.jpeg`,
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "... forms when the dew point temperature of air is below freezing point on the valley floor: (A) Mist, (B) Fog, (C) Frost, (D) Smog.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Recall",
    model_answer: "C — Frost.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "The negative physical (natural) impact of frost is that it: (A) reduces visibility, (B) increases pollution, (C) increases rainfall, (D) destroys vegetation.",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Analysis",
    model_answer: "D — destroys vegetation.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },

  // ---------- 1.3 mid-latitude cyclone, 11 marks (1.3.5 drawing excluded) ----------
  {
    number: "1", sub_number: "1.3.1",
    text: 'Refer to sketch A, showing warm air and cold air on either side of a boundary. What is the name of the boundary between the two air masses shown in sketch A?',
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Recall",
    model_answer: "The polar front.",
    marking_notes: "Accept 'polar front' only.",
    marking_points: [{ marks: 1, description: "polar front", keywords: ["polar front"] }],
    image_url: `${IMG}/1.3-sketch-a.png`,
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "Give ONE reason why the boundary between the two air masses in sketch A would form a wave.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: atmospheric instability; frictional drag; jet streams; orographic features; temperature differences between the air masses; windspeed differences between the air masses.",
    marking_notes: "Any ONE valid reason, 1 mark.",
    marking_points: [{ marks: 1, description: "a valid reason (instability/friction/jet stream/orographic/temperature or wind-speed difference)", keywords: ["atmospheric instability", "frictional drag", "jet stream", "orographic", "temperature difference", "windspeed difference", "wind speed difference"] }],
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "Refer to the photographs showing strong winds bending palm trees, and flooded streets. Name the stage of development of the mid-latitude cyclone associated with the weather conditions in these two photographs.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Recall",
    model_answer: "The mature stage.",
    marking_notes: "Accept 'mature stage' only.",
    marking_points: [{ marks: 1, description: "mature stage", keywords: ["mature stage", "mature"] }],
    image_url: `${IMG}/1.3-photo-c.png`,
  },
  {
    number: "1", sub_number: "1.3.4",
    text: "Explain how the weather conditions illustrated in the photographs (strong wind damage, flooding) developed during the mature stage.",
    marks: 4, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two, each explained: a steep pressure gradient across the mature system results in gale-force/strong winds; strong updraughts and rapid uplift form cumulonimbus clouds and heavy rainfall; the cold air behind the cold front undercuts the warm air ahead of it, forcing further uplift, cloud development, and heavy rainfall. The answer must cover both strong winds AND heavy rainfall between the two points chosen.",
    marking_notes: "Any TWO explained causes (2 marks each), and between them the answer must account for both the strong winds and the heavy rainfall seen in the photos.",
    marking_points: [
      { marks: 2, description: "steep pressure gradient causes gale-force/strong winds", keywords: ["steep pressure gradient", "gale force winds", "strong winds"] },
      { marks: 2, description: "strong updraughts/uplift cause heavy rainfall", keywords: ["strong updraughts", "rapid uplift", "cumulonimbus", "heavy rainfall"] },
    ],
    image_url: `${IMG}/1.3-photo-d.png`,
  },
  {
    number: "1", sub_number: "1.3.6",
    text: "Refer to sketch B, showing a cold front (E) approaching a warm front (F). Explain how the difference in temperature of the air masses behind the cold front and ahead of the warm front results in the formation of a cold front occlusion.",
    marks: 4, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "The air behind the cold front is colder than the air ahead of the warm front. Because cold fronts move faster than warm fronts, the cold air behind the cold front eventually catches up to and undercuts the warmer air ahead of the warm front. This forces the warmer, less dense air to be uplifted completely off the ground, forming a cold front occlusion.",
    marking_notes: "Award for: air behind the cold front is colder (1); the cold air undercuts the warmer air (1); the warmer, less dense air is uplifted (1) — max 2 marks per correctly developed point, max 4 total.",
    marking_points: [
      { marks: 2, description: "air behind the cold front is colder than air ahead of the warm front", keywords: ["air behind the cold front is colder", "cold front colder"] },
      { marks: 2, description: "cold air undercuts the warm air, uplifting it (occlusion)", keywords: ["undercuts the warm", "warmer air is uplifted", "less dense air is uplifted", "occlusion"] },
    ],
    image_url: `${IMG}/1.3-sketch-b.jpeg`,
  },

  // ---------- 1.4 Tropical Cyclone Dikeledi, 15 marks ----------
  {
    number: "1", sub_number: "1.4.1",
    text: 'Fact file on Tropical Cyclone Dikeledi — 8 January 2025: central pressure 996 hPa, maximum wind speed 75 km/h. 13 January 2025: central pressure 976 hPa, maximum wind speed 150 km/h. According to the fact file, in which stage of development was Tropical Cyclone Dikeledi on 8 January 2025?',
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Recall",
    model_answer: "The immature stage.",
    marking_notes: "Accept 'immature stage' only.",
    marking_points: [{ marks: 1, description: "immature stage", keywords: ["immature stage", "immature"] }],
  },
  {
    number: "1", sub_number: "1.4.2",
    text: "Give TWO reasons in the fact file to support your answer above (that Dikeledi was in its immature stage on 8 January).",
    marks: 2, topicKey: "tropical-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: the central pressure was still relatively high, at 996 hPa; the maximum wind speed was still relatively low, at 75 km/h; the system had only just been given a name.",
    marking_notes: "Any TWO of: pressure 996 hPa; wind speed 75 km/h; system had just been named. 1 mark each.",
    marking_points: [
      { marks: 1, description: "central pressure was 996 hPa", keywords: ["996"] },
      { marks: 1, description: "wind speed was 75 km/h", keywords: ["75"] },
    ],
  },
  {
    number: "1", sub_number: "1.4.3",
    text: "Refer to the location map, which shows Tropical Cyclone Dikeledi forming in the Indian Ocean between 5°S and 20°S off the coast of Madagascar. Explain why Tropical Cyclone Dikeledi developed between 5° and 20° south of the equator.",
    marks: 4, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two, explained: the Coriolis force is present at these latitudes (it is too weak closer to the equator), causing the necessary deflection/rotation of the system; sea temperatures here are high enough (warm oceans) to promote a high rate of evaporation; the latent heat released during condensation fuels the system; the resulting high evaporation rate leads to the intense low pressure a tropical cyclone needs.",
    marking_notes: "Any TWO explained points from: Coriolis force present (1); high temperatures/warm oceans promote evaporation (1); latent heat released on condensation (1); high evaporation rate leads to intense low pressure (1) — max 2 marks per point pair, max 4 total.",
    marking_points: [
      { marks: 2, description: "Coriolis force is present at these latitudes, causing deflection", keywords: ["coriolis force"] },
      { marks: 2, description: "warm ocean temperatures promote evaporation / latent heat / low pressure", keywords: ["warm ocean", "high evaporation", "latent heat", "intense low pressure"] },
    ],
    image_url: `${IMG}/1.4-location-map.png`,
  },
  {
    number: "1", sub_number: "1.4.4",
    text: "Refer to the satellite image showing the forward left-hand quadrant (dangerous semicircle) of Tropical Cyclone Dikeledi. Describe the weather conditions associated with the forward left-hand quadrant (dangerous semicircle).",
    marks: 4, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two: hurricane-force, very strong, destructive winds; torrential/heavy rainfall and thunderstorms; hailstorms; lightning.",
    marking_notes: "Any TWO of: hurricane-force winds (2); torrential rainfall/thunderstorms (2); hailstorms (2); lightning (2) — max 4.",
    marking_points: [
      { marks: 2, description: "hurricane-force/very strong destructive winds", keywords: ["hurricane force", "destructive winds", "strong winds"] },
      { marks: 2, description: "torrential rainfall/thunderstorms/hail/lightning", keywords: ["torrential rainfall", "heavy rainfall", "thunderstorms", "hailstorms", "lightning"] },
    ],
    image_url: `${IMG}/1.4-satellite-d.png`,
  },
  {
    number: "1", sub_number: "1.4.5",
    text: "Explain why Tropical Cyclone Dikeledi intensified from 8 January to 13 January 2025 (pressure dropped from 996 hPa to 976 hPa; wind speed rose from 75 km/h to 150 km/h; the system moved from near Madagascar into the Mozambique Channel).",
    marks: 4, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two: the system moved from land/Madagascar to the warmer waters of the Mozambique Channel, increasing evaporation and latent heat release; there is less frictional drag over the ocean than over land, which increases wind speed; the central pressure dropped from 996 hPa to 976 hPa as a direct result of the warmer ocean beneath it.",
    marking_notes: "Any TWO of: moved to warmer water/increased evaporation (2); less frictional drag over ocean increases wind speed (2); central pressure dropped 996→976 hPa (2) — max 4.",
    marking_points: [
      { marks: 2, description: "moved to warmer ocean water, increasing evaporation/latent heat", keywords: ["warmer water", "mozambique channel", "increased evaporation"] },
      { marks: 2, description: "less friction over ocean increases wind speed, or pressure dropped further", keywords: ["less frictional drag", "wind speed increased", "pressure dropped"] },
    ],
  },

  // ---------- 1.5 berg winds / synoptic map, 15 marks ----------
  {
    number: "1", sub_number: "1.5.1",
    text: "Refer to the synoptic weather map showing South African berg wind conditions, with hot, dry conditions expected across the Eastern Cape (temperatures above 30°C). Name ONE South African city indicated on the map that is experiencing berg wind conditions.",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Recall",
    model_answer: "Either East London or Durban.",
    marking_notes: "Accept East London OR Durban.",
    marking_points: [{ marks: 1, description: "East London or Durban", keywords: ["east london", "durban"] }],
    image_url: `${IMG}/1.5-synoptic-map.jpeg`,
  },
  {
    number: "1", sub_number: "1.5.2",
    text: "Give evidence from the synoptic weather map to support your answer above.",
    marks: 2, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Any one, developed: a large temperature range is shown at the station; high air temperatures are recorded there (e.g. around 34°C/27°C); low humidity and a clear sky are shown; a Kalahari high combined with a coastal low is indicated on the map.",
    marking_notes: "Any ONE piece of evidence, developed for 2 marks: large temp range / high temperature reading / low humidity-clear sky / Kalahari high + coastal low.",
    marking_points: [{ marks: 2, description: "large temperature range / high temperature / low humidity / Kalahari high & coastal low shown", keywords: ["temperature range", "high temperature", "low humidity", "clear sky", "kalahari high", "coastal low"] }],
  },
  {
    number: "1", sub_number: "1.5.3",
    text: "Explain the processes that lead to berg winds being warm and dry.",
    marks: 4, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Temperature: air descends from the interior plateau down the escarpment toward the coast, and is heated adiabatically as it descends (roughly 1°C per 100 m). Moisture: as the air descends and warms, its relative humidity drops and any moisture is evaporated, leaving it dry. A complete answer must cover both the temperature process and the moisture process.",
    marking_notes: "Must include BOTH a temperature explanation (air descends the escarpment and warms adiabatically) AND a moisture explanation (moisture evaporates as the air descends) — 2 marks each, max 4.",
    marking_points: [
      { marks: 2, description: "air descends and warms adiabatically (temperature)", keywords: ["descends", "adiabatic", "warms", "escarpment"] },
      { marks: 2, description: "moisture evaporates as air descends (moisture/dryness)", keywords: ["moisture evaporates", "relative humidity", "dry"] },
    ],
  },
  {
    number: "1", sub_number: "1.5.4",
    text: "The warm and dry conditions of a berg wind can influence veld fires. In a paragraph of approximately EIGHT lines, suggest sustainable strategies that can be put in place to reduce the negative impact of veld fires.",
    marks: 8, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Evaluation",
    model_answer: "Any four, each explained: create firebreaks/buffer zones around vulnerable areas; build water storage facilities for firefighting use; educate the community on fire-prevention strategies; make emergency services quickly accessible; ensure access to fire-fighting equipment; implement early-warning systems; create emergency assembly points; run public-awareness campaigns; install lookout towers; install sprinkler systems; plan and mark evacuation routes; remove flammable alien/invasive vegetation.",
    marking_notes: "Any FOUR distinct strategies, each explained (2 marks each, max 8): firebreaks; water storage; community education; accessible emergency services; fire-fighting equipment; early-warning systems; assembly points; awareness campaigns; lookout towers; sprinklers; evacuation routes; alien-vegetation removal.",
    marking_points: [
      { marks: 2, description: "firebreaks / buffer zones", keywords: ["firebreaks", "buffer zone"] },
      { marks: 2, description: "water storage facilities for firefighting", keywords: ["water storage"] },
      { marks: 2, description: "community education / awareness", keywords: ["educate", "awareness"] },
      { marks: 2, description: "accessible emergency services / fire-fighting equipment", keywords: ["emergency services", "fire fighting equipment", "firefighting equipment"] },
      { marks: 2, description: "early warning systems", keywords: ["early warning"] },
      { marks: 2, description: "evacuation routes and plans", keywords: ["evacuation routes", "evacuation plan"] },
      { marks: 2, description: "remove flammable alien vegetation", keywords: ["alien vegetation", "invasive vegetation"] },
      { marks: 2, description: "lookout towers or sprinkler systems", keywords: ["lookout tower", "sprinkler"] },
    ],
  },

  // ============ QUESTION 2: GEOMORPHOLOGY (60 marks) ============

  // ---------- 2.1 matching (Y/Z), 8 marks ----------
  {
    number: "2", sub_number: "2.1.1",
    text: "Refer to the sketch of a drainage basin. The main river A and its tributaries are referred to as a: catchment area, or river system?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "River system.",
    marking_notes: "Accept only 'river system'.",
    marking_points: [{ marks: 1, description: "river system", keywords: ["river system"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "The feature at B, which separates one stream from another, is called a: watershed, or interfluve?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Interfluve.",
    marking_notes: "Accept only 'interfluve'.",
    marking_points: [{ marks: 1, description: "interfluve", keywords: ["interfluve"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "The area at C, which is vegetated, will have a ... infiltration rate: low, or high?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "High.",
    marking_notes: "Accept only 'high'.",
    marking_points: [{ marks: 1, description: "high", keywords: ["high"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "The river at D, shown with a solid line in the key, is a ... river: permanent, or periodic?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Permanent.",
    marking_notes: "Accept only 'permanent'.",
    marking_points: [{ marks: 1, description: "permanent", keywords: ["permanent"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.5",
    text: "The confluence (where two rivers join) on the sketch is located at: E, or F?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "E.",
    marking_notes: "Accept only 'E'.",
    marking_points: [{ marks: 1, description: "E", keywords: ["e"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.6",
    text: "... will increase in area G due to the steep slope there: infiltration, or run-off?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Analysis",
    model_answer: "Run-off.",
    marking_notes: "Accept only 'run-off'.",
    marking_points: [{ marks: 1, description: "run-off", keywords: ["run off", "runoff"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.7",
    text: "The stage of the river at H, near the mouth, is the ... course: lower, or middle?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Lower.",
    marking_notes: "Accept only 'lower'.",
    marking_points: [{ marks: 1, description: "lower", keywords: ["lower"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },
  {
    number: "2", sub_number: "2.1.8",
    text: "A key shows a rainy-season water table (dashed line, closer to the surface, dipping toward the river) and a dry-season water table (dotted line, deeper, flatter). At point I, will the water table more closely resemble the rainy-season pattern or the dry-season pattern?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Analysis",
    model_answer: "The dry-season pattern (deeper, flatter water table).",
    marking_notes: "Accept 'dry season' / 'dry-season water table'.",
    marking_points: [{ marks: 1, description: "dry-season pattern", keywords: ["dry season", "dry"] }],
    image_url: `${IMG}/2.1-drainage-basin.jpeg`,
  },

  // ---------- 2.2 MCQ (A-D), 7 marks — river capture ----------
  {
    number: "2", sub_number: "2.2.1",
    text: "A river that has its water diverted into another river is referred to as a: (A) captured stream, (B) stream piracy, (C) captor stream, (D) headward stream.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "A — captured stream.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/2.2-river-capture-a.jpeg`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Rivers flowing over areas with a ... are more likely to be the captor stream: (A) gentle gradient and soft rock, (B) steep gradient and low rainfall, (C) steep gradient and soft rock, (D) heavy rainfall and resistant rock.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "C — steep gradient and soft rock.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Refer to sketch B, showing the drainage pattern after river capture. Evidence that river capture has taken place in sketch B: (A) River Y has more water flowing in it, (B) River Y has captured the headwaters of river X, (C) River X has captured the headwaters of river Y, (D) River X has a smaller drainage basin.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "C — River X has captured the headwaters of river Y.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2.2-river-capture-b.png`,
  },
  {
    number: "2", sub_number: "2.2.4",
    text: "The cause of river capture, as shown in sketch B, is: (A) headward erosion by river Y, (B) lateral erosion by river X, (C) headward erosion by river X, (D) vertical erosion by river Y.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "C — headward erosion by river X.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2.2-river-capture-b.png`,
  },
  {
    number: "2", sub_number: "2.2.5",
    text: "The part of the river that has less water after river capture is known as the ... stream: (A) captor, (B) non-perennial, (C) perennial, (D) misfit.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "D — misfit.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "2", sub_number: "2.2.6",
    text: "River X has more erosive power after river capture because of: (A) a greater volume of water and turbulent stream flow, (B) a greater volume of water and laminar flow, (C) headward erosion and turbulent stream flow, (D) rejuvenation and laminar flow.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "A — a greater volume of water and turbulent stream flow.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
  },
  {
    number: "2", sub_number: "2.2.7",
    text: "The physical (natural) impact of river capture on the captor stream is that the ... and ... — (i) drainage basin decreases, (ii) river rejuvenation takes place, (iii) deposition increases, (iv) water flows faster. (A) i and iv, (B) i and iii, (C) ii and iv, (D) ii and iii.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "C — river rejuvenation takes place and water flows faster (ii and iv).",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },

  // ---------- 2.3 longitudinal & cross river profiles, 15 marks ----------
  {
    number: "2", sub_number: "2.3.1",
    text: "What is a longitudinal profile?",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "A side view of a river showing how its gradient/elevation changes along its length, from its source to its mouth.",
    marking_notes: "Core concept: a side view of the river from source to mouth.",
    marking_points: [{ marks: 2, description: "a side view of a river from source to mouth", keywords: ["side view", "source to mouth", "source to the mouth"] }],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Refer to sketches A and B, showing two longitudinal river profiles — sketch A has a waterfall, resistant rock, a dam, and irregular steps before the sea; sketch B is a single smooth curve from source to sea. Which ONE of the sketches shows a graded longitudinal profile?",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Sketch B.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/2.3-river-profiles.png`,
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "Give evidence in the sketch to support your answer to the question above (that sketch B is graded).",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: there are no temporary base levels or knickpoints along its length; there are no obstructions (e.g. no waterfall or dam); the profile has a smooth, concave shape throughout.",
    marking_notes: "Any TWO of: no temporary base levels/knickpoints; no obstructions; smooth concave shape. 1 mark each.",
    marking_points: [
      { marks: 1, description: "no temporary base levels/knickpoints", keywords: ["no temporary base level", "no knickpoint"] },
      { marks: 1, description: "smooth, concave shape / no obstructions", keywords: ["smooth", "concave", "no obstruction"] },
    ],
    image_url: `${IMG}/2.3-river-profiles.png`,
  },
  {
    number: "2", sub_number: "2.3.4",
    text: "Refer to sketch A, which shows a waterfall (over resistant rock) and a dam along the river's course. Classify EACH of these temporary base levels as either natural or human-made.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "The waterfall is natural; the dam is human-made.",
    marking_notes: "Waterfall = natural (1); Dam = human-made (1).",
    marking_points: [
      { marks: 1, description: "waterfall is natural", keywords: ["waterfall", "natural"] },
      { marks: 1, description: "dam is human-made", keywords: ["dam", "human made", "human-made", "artificial"] },
    ],
    image_url: `${IMG}/2.3-river-profiles.png`,
  },
  {
    number: "2", sub_number: "2.3.5",
    text: "Why is the sea indicated as the permanent base level?",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "The sea is the lowest (ultimate) level to which a river can erode its bed — a river cannot cut its channel any lower than the level of the body of water it flows into.",
    marking_notes: "Core concept: it is the lowest/ultimate level to which the river can erode.",
    marking_points: [{ marks: 2, description: "lowest/ultimate level a river can erode down to", keywords: ["lowest level", "ultimate level", "cannot erode below"] }],
  },
  {
    number: "2", sub_number: "2.3.6",
    text: "Refer to cross-profiles C and D (taken from sketches A and B respectively). Differentiate between the shapes of cross-profiles C and D.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "Cross-profile C is a closed, V-shape — narrow, deep, and steep-sided. Cross-profile D is an open, U-shape — very wide and gently sloping. A complete answer must describe both profiles.",
    marking_notes: "Must mention BOTH profiles: C is a narrow/steep V-shape; D is a wide/gentle U-shape.",
    marking_points: [
      { marks: 1, description: "C is a narrow, deep, steep V-shape", keywords: ["v shape", "narrow", "steep sided"] },
      { marks: 1, description: "D is a wide, gentle U-shape", keywords: ["u shape", "wide", "gently sloping"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.7",
    text: "Explain the main processes that give rise to the difference in the shape of cross-profiles C and D.",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "Profile C (upper course): vertical/downward erosion is dominant here, cutting a narrow, deep V-shaped valley. Profile D (lower course): deposition is dominant, and lateral erosion widens the valley floor, producing a wide, gently sloping U-shape. A complete answer must refer to both profiles.",
    marking_notes: "Must refer to BOTH profiles: C — vertical/downward erosion dominant (2); D — deposition dominant and/or lateral erosion occurs (2).",
    marking_points: [
      { marks: 2, description: "profile C: vertical/downward erosion dominant", keywords: ["vertical erosion", "downward erosion"] },
      { marks: 2, description: "profile D: deposition dominant / lateral erosion", keywords: ["deposition", "lateral erosion"] },
    ],
    image_url: `${IMG}/2.3-river-profiles.png`,
  },

  // ---------- 2.4 meanders & oxbow lakes, 15 marks ----------
  {
    number: "2", sub_number: "2.4.1",
    text: "Meanders are more likely to form in the (upper/lower) stage/course of a river.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Lower.",
    marking_notes: "Accept only 'lower'.",
    marking_points: [{ marks: 1, description: "lower", keywords: ["lower"] }],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Refer to photograph A of a meandering river, with cross-section C–D taken across the bend (C on the inner bank, D on the outer bank). Account for the gentle gradient of the inner bank at C.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "The inner bank has a gentle gradient because deposition dominates there — the water moves slowly on the inside of the bend, so sediment is deposited, building up a gently sloping bank.",
    marking_notes: "Any one, developed: due to deposition; due to slow movement/velocity of water on the inner bank.",
    marking_points: [{ marks: 2, description: "deposition / slow water movement on inner bank", keywords: ["deposition", "slow movement", "slow velocity"] }],
    image_url: `${IMG}/2.4-photo-a.png`,
  },
  {
    number: "2", sub_number: "2.4.3",
    text: "Refer to photograph B, showing an incised (deeply cut) meander with cross-section E–F. How does the process of river rejuvenation lead to the formation of incised meanders?",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "River rejuvenation (e.g. due to a drop in sea level or land uplift) gives the river renewed energy, causing vertical/downward erosion to resume even within its existing meander bends. This cuts a deeper stream channel/valley into the landscape, producing an incised meander.",
    marking_notes: "Award for: rejuvenation results in vertical/downward erosion (2); this results in a deeper stream channel/valley (2).",
    marking_points: [
      { marks: 2, description: "rejuvenation causes renewed vertical/downward erosion", keywords: ["rejuvenation", "vertical erosion", "downward erosion"] },
      { marks: 2, description: "results in a deeper channel/valley", keywords: ["deeper channel", "deeper valley", "deeper stream"] },
    ],
    image_url: `${IMG}/2.4-photo-b.png`,
  },
  {
    number: "2", sub_number: "2.4.4",
    text: "Refer to photograph A. In a paragraph of approximately EIGHT lines, explain how an oxbow lake is formed.",
    marks: 8, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "Continuous lateral erosion takes place on the outer bank (the undercut slope) of a meander bend, while deposition builds up the inner bank (the slip-off slope) on the opposite side. Over time this process makes the neck of the meander loop narrower and narrower. Eventually, often during a flood, the river breaks through and cuts across the narrow neck, taking the shorter, more direct path. Deposition then seals off the old meander loop from the new, straighter channel, leaving it isolated as a crescent-shaped oxbow lake.",
    marking_notes: "Any FOUR points in sequence: continuous lateral erosion on the outer bank/undercut slope (2); deposition on the inner bank/slip-off slope (2); the meander neck narrows (2); the river floods and cuts through the neck, and the loop is separated by deposition to form the oxbow lake (2).",
    marking_points: [
      { marks: 2, description: "lateral erosion on the outer bank / undercut slope", keywords: ["outer bank", "undercut slope", "lateral erosion"] },
      { marks: 2, description: "deposition on the inner bank / slip-off slope", keywords: ["inner bank", "slip off slope", "slip-off slope"] },
      { marks: 2, description: "the meander neck narrows", keywords: ["neck narrows", "narrows"] },
      { marks: 2, description: "river cuts through the neck and the loop is separated off by deposition", keywords: ["cuts through", "meander loop is separated", "oxbow lake"] },
    ],
    image_url: `${IMG}/2.4-crosssection-cd.png`,
  },

  // ---------- 2.5 catchment/river management extract, 15 marks ----------
  {
    number: "2", sub_number: "2.5.1",
    text: 'Extract: "Dense settlements that locate along rivers have a negative impact on rivers. The main reason is that these settlements generally receive poor service provision. These poor communities also do not have the means to pay for the provision of services, such as waste removal. When large amounts of waste pile up in the settlement, the community is more likely to dispose of the waste in the river." According to the extract, why are dense settlements along rivers associated with pollution?',
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: they generally receive poor service provision; residents don't have the means to pay for waste-removal services; piled-up waste in the settlement ends up being disposed of in the river.",
    marking_notes: "Any ONE of: poor service provision; can't afford waste removal; waste gets dumped in the river.",
    marking_points: [{ marks: 1, description: "poor service provision / can't afford waste removal / waste dumped in river", keywords: ["poor service", "waste removal", "dispose of the waste", "dumped in the river"] }],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Refer to the photograph showing informal housing built right up to the edge of a rubbish-filled river channel. Give TWO reasons from the photograph to support your answer above.",
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: there is visible solid waste/rubbish in and around the river; there is no visible infrastructure for waste removal; there is no evidence of proper sanitation/potable water infrastructure.",
    marking_notes: "Any TWO of: evidence of solid waste; no infrastructure to remove waste; no evidence of potable water/sanitation. 1 mark each.",
    marking_points: [
      { marks: 1, description: "visible solid waste in the river", keywords: ["solid waste", "rubbish", "litter"] },
      { marks: 1, description: "no waste-removal infrastructure / no sanitation or potable water", keywords: ["no infrastructure", "no potable water", "no sanitation"] },
    ],
    image_url: `${IMG}/2.5-settlement-river.png`,
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "Explain how a rise in the water level of the river will negatively affect the houses in the photograph, due to their location.",
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Any one, developed: the houses are built so close to the river that they could easily flood; the river banks could collapse (e.g. through erosion undercutting them), destroying the houses built on them.",
    marking_notes: "Any ONE, developed for 2 marks: houses close to river could flood; river banks could collapse and destroy houses.",
    marking_points: [{ marks: 2, description: "houses close to the river could flood, or banks could collapse", keywords: ["close to the river", "could flood", "banks could collapse"] }],
    image_url: `${IMG}/2.5-settlement-river.png`,
  },
  {
    number: "2", sub_number: "2.5.4",
    text: "Explain the negative impact of poor river management on the health of rivers.",
    marks: 4, topicKey: "drainage-basin-management", cognitiveLevelName: "Analysis",
    model_answer: "Any two: it reduces water quality; it damages the habitat that aquatic life depends on; it destroys food chains/food webs; it can cause eutrophication (excess nutrients starving the water of oxygen); it disrupts ecosystems and can cause loss of biodiversity; it leads to increased sedimentation of the river.",
    marking_notes: "Any TWO, each developed (2 marks each, max 4): reduced water quality; damaged aquatic habitat; destroyed food chains; eutrophication; disrupted ecosystems/biodiversity loss; increased sedimentation.",
    marking_points: [
      { marks: 2, description: "reduced water quality / eutrophication", keywords: ["water quality", "eutrophication"] },
      { marks: 2, description: "damaged habitat / food chains / biodiversity / sedimentation", keywords: ["habitat", "food chain", "food web", "biodiversity", "sedimentation", "ecosystem"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.5",
    text: "Suggest strategies that the municipality can put in place to ensure the sustainability of the river in the photograph.",
    marks: 6, topicKey: "drainage-basin-management", cognitiveLevelName: "Evaluation",
    model_answer: "Any three: relocate the people living dangerously close to the river; create a buffer zone along the riverbank; run community awareness campaigns and educate people on river management; discourage building on the river bank; implement and enforce legislation, including fines; plant more vegetation along the banks; provide more refuse-removal facilities; continuously monitor and test water quality; encourage community involvement and offer incentives; encourage recycling of waste; build proper sanitation/drainage systems and water treatment plants; maintain existing infrastructure.",
    marking_notes: "Any THREE distinct strategies, each explained (2 marks each, max 6): relocation; buffer zone; awareness/education; legislation/fines; vegetation; refuse facilities; monitoring; community involvement/incentives; recycling; sanitation/water treatment infrastructure; infrastructure maintenance.",
    marking_points: [
      { marks: 2, description: "relocate people / create a buffer zone", keywords: ["relocate", "buffer zone"] },
      { marks: 2, description: "awareness campaigns / education / legislation / fines", keywords: ["awareness", "educate", "legislation", "fines"] },
      { marks: 2, description: "refuse removal / recycling / sanitation infrastructure / monitoring", keywords: ["refuse removal", "recycling", "sanitation", "water treatment", "monitoring", "maintain infrastructure"] },
    ],
    image_url: `${IMG}/2.5-settlement-river.png`,
  },
];

// No exam_schedule entries here — the real dates (prelim + final) are
// already carried by the pilot dataset's examSchedule and keyed to the
// Geography subject as a whole, not to any one paper.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
