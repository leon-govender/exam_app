// Real DBE past paper: Geography P1, November 2024, National (English).
// Source: official DBE question paper (fetched from stanmorephysics.com)
// + official DBE marking guideline (fetched separately from
// saexampapers.co.za). Both cross-verified page-by-page against each
// other. As with both Nov 2025 datasets, one early memo page turned out
// to be unrelated content (the exact same stray "South Atlantic
// High/Kalahari High/mouth/katabatic" content that appeared as a stray
// page in the Nov 2025 P2 memo too — looks like a templating artifact on
// whichever compiler produces these bundled memo PDFs) — discarded after
// the mismatch was caught.
//
// Scope: Section A only (Questions 1 & 2, 120 of 150 marks). Section B
// (Geographical Skills/mapwork, 30 marks) requires the actual 1:50 000
// topographical map (2829DB LADYSMITH) + orthophoto, which weren't
// obtained, so Section B is excluded — same reasoning as every other real
// paper in this app.
//
// Within Section A, one sub-question is a pure drawing task the app has
// no way to grade and is excluded: 1.4.4 (labelled cross-section of a
// mature tropical cyclone, 4 marks).
//
// Diagrams in this paper are vector line-drawings rendered directly into
// the page content stream, not separate embedded raster images — so
// unlike some other papers here, they were cropped from full-page
// renders rather than extracted as clean standalone images. The site's
// watermark ("Stanmorephysics.com" + a faint plant-pot photo) appears
// faintly on several of them; it doesn't obscure any exam content.
//
// Included total: 116 of 150 marks.
//
// Model answers/marking notes below are written in our own words from the
// official memo's content, not copied verbatim.

import type { MarkingPoint } from "../../src/lib/grader";

const IMG = "/question-images/geography-2024-p1";

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
  year: 2024,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 140, // scaled from the real 180 min / 150 marks to the 116 marks included here
  total_marks: 116,
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
  // ============ QUESTION 1: CLIMATE AND WEATHER (60 marks) ============

  // ---------- 1.1 anticyclones sketches A/B, MCQ (A-D), 8 marks ----------
  {
    number: "1", sub_number: "1.1.1",
    text: "Refer to sketches A (a Southern Africa map with H/L pressure cells over land and sea, in summer-like configuration) and B (a similar map showing a low over the interior and highs offshore). Sketch A shows typical … conditions. (A) summer, (B) spring, (C) winter, (D) autumn.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "C — winter.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "The low-pressure system in sketch B forms due to … over the land. (A) low evaporation, (B) intense heating, (C) cold dense air, (D) heavy rainfall.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "B — intense heating.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "… is the concept used to describe the elongation of the isobars associated with the South Atlantic anticyclone in sketch B. (A) Backing, (B) Divergence, (C) Ridging, (D) Convergence.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "C — Ridging.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "The anticyclones in sketch A and B change their positions seasonally because of the … (A) rotation of the Earth, (B) frictional drag, (C) shifting of the ITCZ, (D) Coriolis force.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "C — shifting of the ITCZ.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "The South Indian anticyclone in sketch B is likely to feed more moisture over the east coast in comparison with sketch A because it … (A) is a blocking high, (B) has a larger fetch (distance), (C) diverges dry air, (D) has a smaller fetch (distance).",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "B — has a larger fetch (distance).",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "The low-pressure system in sketch A will move in a … direction. (A) northerly, (B) westerly, (C) easterly, (D) southerly.",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "C — easterly.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Berg winds are most likely to develop in sketch A because of the presence of the … and … (i) Kalahari anticyclone, (ii) coastal low, (iii) South Indian anticyclone, (iv) heat low. (A) (i) and (ii), (B) (ii) and (iii), (C) (i) and (iv), (D) (iii) and (iv).",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "A — (i) and (ii): Kalahari anticyclone and coastal low.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "The inversion layer that forms over the escarpment in sketch B will favour the formation of … and … (i) frost, (ii) rainfall, (iii) fog, (iv) hail. (A) (i) and (ii), (B) (i) and (iii), (C) (ii) and (iv), (D) (iii) and (iv).",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "C — (ii) and (iv): rainfall and hail.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/1.1-anticyclones.png`,
  },

  // ---------- 1.2 valley climates + pollution domes matching (A/B), 7 marks ----------
  {
    number: "1", sub_number: "1.2.1",
    text: "Refer to sketches A and B on valley climates (photos of a V-shaped valley with arrows: A shows cold air flowing down both slopes; B shows warm air flowing up both slopes). Which sketch represents an anabatic wind?",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "B.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.2a-valley-climates.png`,
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Which sketch shows cold air forcing the warm air to rise, which forms an inversion layer?",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "A.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.2a-valley-climates.png`,
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Which sketch's wind occurs during the day due to insolation?",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "B.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.2a-valley-climates.png`,
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "In which sketch does frost form on the valley floor when the temperature drops below 0 °C?",
    marks: 1, topicKey: "valley-climates", cognitiveLevelName: "Comprehension",
    model_answer: "A.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.2a-valley-climates.png`,
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "Refer to sketches A and B on pollution domes over an urban area (A shows arrows pointing up out of the dome; B shows arrows pointing down into the dome). Which sketch represents a pollution dome at night?",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Comprehension",
    model_answer: "B.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.2b-pollution-domes.png`,
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "In which sketch are pollutants dispersed?",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Comprehension",
    model_answer: "A.",
    marking_notes: "Accept only 'A'.",
    marking_points: [{ marks: 1, description: "A", keywords: ["a"] }],
    image_url: `${IMG}/1.2b-pollution-domes.png`,
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "Which sketch shows a denser concentration of pollutants over the urban area?",
    marks: 1, topicKey: "urban-climates", cognitiveLevelName: "Comprehension",
    model_answer: "B.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/1.2b-pollution-domes.png`,
  },

  // ---------- 1.3 mid-latitude cyclone cross-section, 15 marks ----------
  {
    number: "1", sub_number: "1.3.1",
    text: "Refer to the cross-section of a mid-latitude cyclone below, showing a cold front A (12°C) to the west and a warm front B (8°C) to the east, moving from W to E. In which general direction do mid-latitude cyclones move?",
    marks: 1, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Recall",
    model_answer: "West to east (eastwards).",
    marking_notes: "Accept 'west to east' or 'eastwards'.",
    marking_points: [{ marks: 1, description: "west to east / eastwards", keywords: ["west to east", "eastwards"] }],
    image_url: `${IMG}/1.3-midlat-cyclone.png`,
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "Give a reason for your answer to the previous question (why mid-latitude cyclones move west to east).",
    marks: 2, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "They are driven by the westerlies, since they occur within the westerly wind belt.",
    marking_notes: "Accept 'driven by the westerlies' or 'occurs in the westerly wind belt'.",
    marking_points: [{ marks: 2, description: "driven by the westerlies / westerly wind belt", keywords: ["westerlies", "westerly wind belt"] }],
    image_url: `${IMG}/1.3-midlat-cyclone.png`,
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "How does front A (the cold front) give rise to the formation of cumulonimbus clouds?",
    marks: 4, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two: the steeper gradient of the cold front causes rapid uplift of the warm air ahead of it; this uplift causes cooling and condensation, which forms cumulonimbus clouds.",
    marking_notes: "Any TWO of: steep gradient causes rapid uplift of warm air; cooling and condensation occurs. 2 marks each.",
    marking_points: [
      { marks: 2, description: "steeper gradient causes rapid uplift of the warm air", keywords: ["steeper gradient", "rapid uplift"] },
      { marks: 2, description: "cooling and condensation occurs", keywords: ["cooling", "condensation"] },
    ],
    image_url: `${IMG}/1.3-midlat-cyclone.png`,
  },
  {
    number: "1", sub_number: "1.3.4",
    text: "In a paragraph of approximately EIGHT lines, explain strategies that can be put in place to manage the negative environmental impact of the heavy rainfall associated with mid-latitude cyclones.",
    marks: 8, topicKey: "mid-latitude-cyclones", cognitiveLevelName: "Evaluation",
    model_answer: "Any four: maintain natural vegetation and encourage afforestation to buffer the area; create effective drainage systems; use sandbags, retaining walls, catch nets, or canopies in areas prone to rockfalls; construct gabions, dam walls/weirs, or artificial levees/barriers; conserve wetlands, marshes and swamps; implement contour ploughing and terracing of slopes; widen or canalise river channels; educate people about environmental conservation and set up early-warning systems.",
    marking_notes: "Any FOUR distinct strategies, each explained (2 marks each, max 8): maintain vegetation/afforestation; drainage systems; sandbags/retaining walls/catch nets/canopies; gabions/dams/levees; conserve wetlands; contour ploughing/terracing; widen or canalise rivers; education/early-warning systems.",
    marking_points: [
      { marks: 2, description: "maintain natural vegetation, afforestation, or buffering the area", keywords: ["maintain natural vegetation", "afforestation", "buffering"] },
      { marks: 2, description: "effective drainage systems, or sandbags/retaining walls/gabions", keywords: ["drainage systems", "sandbags", "retaining walls", "gabions"] },
      { marks: 2, description: "construct dams/weirs/artificial levees, or conserve wetlands", keywords: ["dam", "weir", "artificial levees", "wetlands"] },
      { marks: 2, description: "contour ploughing/terracing, canalising rivers, or education and early-warning systems", keywords: ["contour ploughing", "terracing", "canalising", "early warning"] },
    ],
  },

  // ---------- 1.4 Tropical Cyclone Filipo, 11 of 15 marks — 1.4.4 excluded, drawing ----------
  {
    number: "1", sub_number: "1.4.1",
    text: "Refer to the infographic on Tropical Cyclone Filipo, which made landfall in Mozambique on 12 March, moved back over the ocean on 13 March, and developed into a tropical cyclone on 14 March. State ONE condition that could have led to the development of Tropical Cyclone Filipo.",
    marks: 1, topicKey: "tropical-cyclones", cognitiveLevelName: "Recall",
    model_answer: "Any one: presence of a low-pressure system/convergence of air; presence of the Coriolis force; sea surface temperatures of 26,5°C or more; calm conditions over the oceans; unstable conditions/high evaporation/high humidity; production of latent heat; upper air divergence.",
    marking_notes: "Any ONE of: low pressure/convergence; Coriolis force; warm sea temperatures (26,5°C+); calm ocean conditions; high evaporation/humidity; latent heat; upper air divergence.",
    marking_points: [{ marks: 1, description: "any valid development condition (low pressure, Coriolis, warm sea, calm ocean, high evaporation, latent heat, upper air divergence)", keywords: ["low pressure", "coriolis", "26,5", "calm conditions", "evaporation", "latent heat", "upper air divergence"] }],
    image_url: `${IMG}/1.4-cyclone-filipo.png`,
  },
  {
    number: "1", sub_number: "1.4.2",
    text: "Give evidence from the map and table of information that Tropical Cyclone Filipo had strengthened from 10 to 11 March.",
    marks: 2, topicKey: "tropical-cyclones", cognitiveLevelName: "Comprehension",
    model_answer: "It was exposed to more moisture over the ocean from 10 to 11 March, and wind speed increased from 63 km/h to 95 km/h / 116 km/h.",
    marking_notes: "Accept either: exposure to more ocean moisture; wind speed increase (63→95/116 km/h). 1 mark each if both given.",
    marking_points: [{ marks: 2, description: "more moisture over the ocean, or wind speed increased from 63 to 95/116 km/h", keywords: ["more moisture", "wind speed increased", "63", "95", "116"] }],
    image_url: `${IMG}/1.4-cyclone-filipo.png`,
  },
  {
    number: "1", sub_number: "1.4.3",
    text: "Give TWO reasons for the decrease in wind speed from 06:00 to 18:00 on 12 March.",
    marks: 4, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two: it moved over the land, resulting in less moisture; there was more friction over land; there was less latent heat; the system started to dissipate.",
    marking_notes: "Any TWO of: moved over land/less moisture; more friction; less latent heat; starting to dissipate. 2 marks each.",
    marking_points: [
      { marks: 2, description: "moved over the land, resulting in less moisture, or more friction", keywords: ["moved over the land", "less moisture", "more friction"] },
      { marks: 2, description: "less latent heat, or starting to dissipate", keywords: ["less latent heat", "dissipate"] },
    ],
    image_url: `${IMG}/1.4-cyclone-filipo.png`,
  },
  {
    number: "1", sub_number: "1.4.5",
    text: "Account for the lack of rainfall and clouds in the eye of the tropical cyclone.",
    marks: 4, topicKey: "tropical-cyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any two: air subsides (sinks) in the eye; the air heats up as it descends; moisture gets evaporated, so the air is dry; no condensation takes place.",
    marking_notes: "Any TWO of: air subsides; air heats up; moisture evaporates/air is dry; no condensation. 2 marks each.",
    marking_points: [
      { marks: 2, description: "air subsides in the eye and heats up", keywords: ["air subsides", "heats up"] },
      { marks: 2, description: "moisture evaporates, air is dry, and no condensation occurs", keywords: ["moisture gets evaporated", "air is dry", "no condensation"] },
    ],
    image_url: `${IMG}/1.4-cyclone-filipo.png`,
  },

  // ---------- 1.5 line thunderstorms, 15 marks ----------
  {
    number: "1", sub_number: "1.5.1",
    text: "Refer to the source below on line thunderstorms over South Africa (a moisture front between two high-pressure cells, with wind A and wind B feeding into it, and a fan showing heavy/moderate/light rainfall bands). According to the extract, in which season do line thunderstorms commonly occur?",
    marks: 1, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Recall",
    model_answer: "Summer.",
    marking_notes: "Accept only 'summer'.",
    marking_points: [{ marks: 1, description: "summer", keywords: ["summer"] }],
    image_url: `${IMG}/1.5-line-thunderstorms.png`,
  },
  {
    number: "1", sub_number: "1.5.2",
    text: "Describe the temperature and moisture content of wind A and wind B that led to the formation of the line thunderstorm.",
    marks: 4, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Wind A (south-westerly): cold and dry. Wind B (north-easterly): warm and moist.",
    marking_notes: "Wind A: cold (1) and dry (1). Wind B: warm (1) and moist (1). Max 4.",
    marking_points: [
      { marks: 2, description: "Wind A: cold and dry", keywords: ["cold", "dry"] },
      { marks: 2, description: "Wind B: warm and moist", keywords: ["warm", "moist"] },
    ],
    image_url: `${IMG}/1.5-line-thunderstorms.png`,
  },
  {
    number: "1", sub_number: "1.5.3",
    text: "Explain why the heaviest rainfall occurs closest to the moisture front, as evident in the source.",
    marks: 4, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Comprehension",
    model_answer: "Closest to the moisture front there is rapid uplift of air, causing greater (vertical) condensation and a dense line of cumulonimbus clouds to form; further from the front there is less uplift, less condensation, and fewer clouds.",
    marking_notes: "Any TWO points, referring to either close-to-front or further-from-front (2 marks each): rapid uplift/greater condensation/dense cumulonimbus clouds near the front, OR less uplift/less condensation/fewer clouds further away.",
    marking_points: [
      { marks: 2, description: "rapid uplift of air along the moisture front", keywords: ["rapid uplift", "uplift of air"] },
      { marks: 2, description: "greater condensation and dense cumulonimbus clouds form near the front", keywords: ["greater condensation", "cumulonimbus clouds"] },
    ],
    image_url: `${IMG}/1.5-line-thunderstorms.png`,
  },
  {
    number: "1", sub_number: "1.5.4",
    text: "Explain the negative physical (natural) impact of line thunderstorms.",
    marks: 6, topicKey: "subtropical-anticyclones", cognitiveLevelName: "Analysis",
    model_answer: "Any three: natural habitats and ecosystems will be destroyed; biodiversity will be reduced; topsoil will be washed away, causing soil erosion; mass movements can be triggered; wildlife would be displaced or drowned; trees and natural vegetation can be uprooted or destroyed; water quality will be reduced; increased leaching of soil; sinkholes may form; silting up/deposition of material occurs.",
    marking_notes: "Any THREE distinct impacts, each explained (2 marks each, max 6): destroyed habitats/ecosystems; reduced biodiversity; soil erosion; mass movements; displaced/drowned wildlife; uprooted vegetation; reduced water quality; soil leaching; sinkholes; silting/deposition.",
    marking_points: [
      { marks: 2, description: "destroyed natural habitats/ecosystems, or reduced biodiversity", keywords: ["natural habitats", "ecosystems", "biodiversity"] },
      { marks: 2, description: "topsoil washed away/soil erosion, or mass movements triggered", keywords: ["soil erosion", "topsoil", "mass movements"] },
      { marks: 2, description: "wildlife displaced/drowned, vegetation uprooted, reduced water quality, or sinkholes", keywords: ["displaced", "drowned", "uprooted", "water quality", "sinkholes"] },
    ],
    image_url: `${IMG}/1.5-line-thunderstorms.png`,
  },

  // ============ QUESTION 2: GEOMORPHOLOGY (60 marks) ============

  // ---------- 2.1 drainage basin matching (Y/Z), 7 marks ----------
  {
    number: "2", sub_number: "2.1.1",
    text: "Match the statement to the correct option. Statement: Area drained by a river and its tributaries. Options: (Y) catchment area, (Z) drainage basin.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Z — drainage basin.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Match the statement to the correct option. Statement: Promotes a rapid rise in the water table. Options: (Y) gentle gradient, (Z) steep gradient.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Y — gentle gradient.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Match the statement to the correct option. Statement: The upper level of ground water. Options: (Y) water table, (Z) through flow.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Y — water table.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Match the statement to the correct option. Statement: Seepage of water into the ground. Options: (Y) infiltration, (Z) run-off.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Y — infiltration.",
    marking_notes: "Accept only 'Y'.",
    marking_points: [{ marks: 1, description: "Y", keywords: ["y"] }],
  },
  {
    number: "2", sub_number: "2.1.5",
    text: "Match the statement to the correct option. Statement: Causes reduction of surface run-off. Options: (Y) impermeable rocks, (Z) dense vegetation.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Z — dense vegetation.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.1.6",
    text: "Refer to sketches Y and Z of two rivers merging. The confluence is located at Y or Z?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Z.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },
  {
    number: "2", sub_number: "2.1.7",
    text: "Refer to sketches Y and Z showing streams and high-lying areas. Which sketch (Y or Z) shows a high-lying area separating two tributaries in the same river system?",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Z.",
    marking_notes: "Accept only 'Z'.",
    marking_points: [{ marks: 1, description: "Z", keywords: ["z"] }],
  },

  // ---------- 2.2 fluvial landforms MCQ (A-D), 8 marks ----------
  {
    number: "2", sub_number: "2.2.1",
    text: "Refer to a sketch of a V-shaped river valley with a stream at the base. … is responsible for the shape of the river valley shown. (A) Deposition, (B) Lateral erosion, (C) Weathering, (D) Vertical erosion.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "D — Vertical erosion.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.2.1-river-valley.png`,
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "A … forms at the base of a waterfall. (A) braided stream, (B) delta, (C) gorge, (D) plunge pool.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "D — plunge pool.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Refer to a sketch of a stepped river long-profile with 'Soft Rocks' at the top and 'Outcrops of rock' lower down. The fluvial landform/feature depicted in the sketch is a … (A) waterfall, (B) valley, (C) rapid, (D) cliff.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "C — rapid.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
    image_url: `${IMG}/2.2.3-soft-rocks.png`,
  },
  {
    number: "2", sub_number: "2.2.4",
    text: "The flat, low-lying area along the banks of a river in the lower course is a/an … (A) meander, (B) delta, (C) flood plain, (D) alluvial fan.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "C — flood plain.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.2.5",
    text: "Refer to a sketch of a meander with point X marked on the inner bank. The slope at X on the inner bank of a meander is also referred to as a/an … slope. (A) steep, (B) undercut, (C) concave, (D) slip-off.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "D — slip-off.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
    image_url: `${IMG}/2.2.5-meander.png`,
  },
  {
    number: "2", sub_number: "2.2.6",
    text: "A/An … forms when the meander loop is cut off from the main stream. (A) delta, (B) rapid, (C) ox-bow lake, (D) flood plain.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "C — ox-bow lake.",
    marking_notes: "Accept only 'C'.",
    marking_points: [{ marks: 1, description: "C", keywords: ["c"] }],
  },
  {
    number: "2", sub_number: "2.2.7",
    text: "Refer to a sketch of natural levees along a river on a flood plain. The benefit of natural levees is … on the flood plain. (A) increased deposition, (B) reduced flooding, (C) reduced fertility, (D) increased flooding.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "B — reduced flooding.",
    marking_notes: "Accept only 'B'.",
    marking_points: [{ marks: 1, description: "B", keywords: ["b"] }],
    image_url: `${IMG}/2.2.7-natural-levees.png`,
  },
  {
    number: "2", sub_number: "2.2.8",
    text: "Deltas form at the river mouth when the following conditions occur: (i) Shallow sea bed, (ii) Steep sea bed, (iii) Strong currents, (iv) Small tidal range. (A) (i) and (ii), (B) (ii) and (iii), (C) (iii) and (iv), (D) (i) and (iv).",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "D — (i) and (iv): shallow sea bed and small tidal range.",
    marking_notes: "Accept only 'D'.",
    marking_points: [{ marks: 1, description: "D", keywords: ["d"] }],
  },

  // ---------- 2.3 drainage patterns A/B, 15 marks ----------
  {
    number: "2", sub_number: "2.3.1",
    text: "Refer to drainage patterns A (radiating outward from a central point, marked X) and B (a rectangular grid pattern) below. Identify drainage pattern A.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Radial (accept 'centrifugal').",
    marking_notes: "Accept 'radial' or 'centrifugal'.",
    marking_points: [{ marks: 1, description: "radial / centrifugal", keywords: ["radial", "centrifugal"] }],
    image_url: `${IMG}/2.3-drainage-patterns.png`,
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Determine the stream order of X in drainage pattern A.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "2nd order.",
    marking_notes: "Accept only '2nd order' (full 2 marks).",
    marking_points: [{ marks: 2, description: "2nd order", keywords: ["2nd order", "second order"] }],
    image_url: `${IMG}/2.3-drainage-patterns.png`,
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "Give a reason for the direction in which streams flow in drainage pattern A.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "The pattern radiates outwards from a high-lying central point (accept examples of landforms, e.g. a dome or volcanic peak).",
    marking_notes: "Core concept: radiates outward from a high-lying central point.",
    marking_points: [{ marks: 2, description: "radiates outward from a high-lying central point", keywords: ["radiates outwards", "high lying central point"] }],
    image_url: `${IMG}/2.3-drainage-patterns.png`,
  },
  {
    number: "2", sub_number: "2.3.4",
    text: "How does the joining of the tributaries to the mainstream differ in drainage patterns A and B?",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "The tributaries join the main river at acute angles in pattern A, but at right angles in pattern B.",
    marking_notes: "Must contrast both: acute angles (A) vs right angles (B).",
    marking_points: [{ marks: 2, description: "tributaries join at acute angles in A, right angles in B", keywords: ["acute angles", "right angles"] }],
    image_url: `${IMG}/2.3-drainage-patterns.png`,
  },
  {
    number: "2", sub_number: "2.3.5",
    text: "State TWO conditions associated with the underlying rock that contributed to the formation of trellis drainage pattern B.",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Alternate layers of hard and soft rock (varying resistance), and folded rocks.",
    marking_notes: "Both required for full marks: alternating hard/soft rock layers (2); folded rocks (2).",
    marking_points: [
      { marks: 2, description: "alternate layers of hard and soft rock", keywords: ["alternate layers", "hard and soft rock", "varying resistance"] },
      { marks: 2, description: "folded rocks", keywords: ["folded rocks"] },
    ],
    image_url: `${IMG}/2.3-drainage-patterns.png`,
  },
  {
    number: "2", sub_number: "2.3.6",
    text: "Why are human activities limited in areas where drainage patterns A and B are found?",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "Any two: the land is steep/uneven; it is prone to soil erosion and has thin soils; the soils are infertile; there is a risk of mass movements; the cost of developing the land is high.",
    marking_notes: "Any TWO, each explained (2 marks each): steep/uneven land; erosion-prone/thin soils; infertile soils; mass movement risk; high development cost.",
    marking_points: [
      { marks: 2, description: "land is steep/uneven, or prone to soil erosion with thin soils", keywords: ["steep", "uneven", "soil erosion", "thin soils"] },
      { marks: 2, description: "infertile soils, mass movement risk, or high cost of development", keywords: ["infertile soils", "mass movements", "high cost"] },
    ],
    image_url: `${IMG}/2.3-drainage-patterns.png`,
  },

  // ---------- 2.4 river rejuvenation, 15 marks ----------
  {
    number: "2", sub_number: "2.4.1",
    text: "Refer to the sketch below on river rejuvenation, showing river terraces, and points A and B along an incised meander. Define the term river rejuvenation.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "When the river experiences an increase in energy (erodes vertically).",
    marking_notes: "Core concept: an increase in the river's energy.",
    marking_points: [{ marks: 2, description: "an increase in energy (erodes vertically)", keywords: ["increase in energy", "erodes vertically"] }],
    image_url: `${IMG}/2.4-river-rejuvenation.png`,
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Identify the feature at A.",
    marks: 1, topicKey: "fluvial-processes", cognitiveLevelName: "Recall",
    model_answer: "Knickpoint (accept 'waterfall').",
    marking_notes: "Accept 'knickpoint' or 'waterfall'.",
    marking_points: [{ marks: 1, description: "knickpoint / waterfall", keywords: ["knickpoint", "waterfall"] }],
    image_url: `${IMG}/2.4-river-rejuvenation.png`,
  },
  {
    number: "2", sub_number: "2.4.3",
    text: "How does feature A indicate that river rejuvenation has taken place?",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: there is a change/drop in gradient; there is evidence of vertical erosion; the water is flowing faster; there is evidence of old and new river profiles.",
    marking_notes: "Any ONE, developed for 2 marks: change/drop in gradient; vertical erosion evidence; faster water flow; old and new profiles.",
    marking_points: [{ marks: 2, description: "change/drop in gradient, vertical erosion, faster flow, or old/new profiles", keywords: ["drop in gradient", "vertical erosion", "flowing faster", "old and new river profiles"] }],
    image_url: `${IMG}/2.4-river-rejuvenation.png`,
  },
  {
    number: "2", sub_number: "2.4.4",
    text: "Describe the change that river rejuvenation has made to the landscape at B.",
    marks: 2, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "Any one: it formed a valley within a valley; the river channel got deeper/steeper/wider.",
    marking_notes: "Any ONE, described for 2 marks: valley-in-a-valley formed; channel got deeper/steeper/wider.",
    marking_points: [{ marks: 2, description: "formed a valley within a valley, or the channel got deeper/steeper/wider", keywords: ["valley in a valley", "deeper", "steeper", "wider"] }],
    image_url: `${IMG}/2.4-river-rejuvenation.png`,
  },
  {
    number: "2", sub_number: "2.4.5",
    text: "Refer to the river terraces in the sketch above. How do river terraces form?",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: vertical erosion occurs on the flood plain; a new river valley is formed; this creates a step-like feature (known as a terrace); the old flood plain is now the river terrace.",
    marking_notes: "Any TWO of: vertical erosion on flood plain; new valley formed; step-like terrace feature created; old flood plain becomes the terrace. 2 marks each.",
    marking_points: [
      { marks: 2, description: "vertical erosion on the flood plain forms a new river valley", keywords: ["vertical erosion", "new river valley"] },
      { marks: 2, description: "a step-like feature forms, and the old flood plain becomes the terrace", keywords: ["step like feature", "old flood plain", "terrace"] },
    ],
    image_url: `${IMG}/2.4-river-rejuvenation.png`,
  },
  {
    number: "2", sub_number: "2.4.6",
    text: "Why are some river terraces not suitable for farming?",
    marks: 4, topicKey: "fluvial-processes", cognitiveLevelName: "Analysis",
    model_answer: "Any two: they are far from water sources; it is difficult/expensive to build infrastructure there; river terraces can be very narrow; use of machinery is limited; there is a decrease in soil fertility/thin soils; uneven slopes/rugged landscape; unstable soil/risk of mass movement.",
    marking_notes: "Any TWO, each explained (2 marks each): far from water; difficult/expensive infrastructure; narrow terraces; limited machinery use; poor soil fertility; uneven/rugged terrain; unstable soil/mass movement risk.",
    marking_points: [
      { marks: 2, description: "far from water sources, or difficult/expensive to build infrastructure", keywords: ["far from water", "expensive to build"] },
      { marks: 2, description: "narrow terraces, limited machinery use, poor soil fertility, or unstable/uneven terrain", keywords: ["very narrow", "limit use of machinery", "decrease in soil fertility", "uneven slopes", "unstable soil"] },
    ],
    image_url: `${IMG}/2.4-river-rejuvenation.png`,
  },

  // ---------- 2.5 catchment/river management, 15 marks ----------
  {
    number: "2", sub_number: "2.5.1",
    text: 'Refer to the extract below on the management of catchment areas and river networks: river catchments are under severe pressure in some parts of South Africa. The plentiful water they provide has meant the fertile ground surrounding them is ideal for agricultural activities. Unfortunately, humans have not always recognised the importance of river catchments — when toxins and heavy metals leach into catchment areas, they endanger flora and fauna, and agricultural run-off can carry chemicals into river catchments, creating an imbalance in nutrient levels. What is river management?',
    marks: 2, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "The monitoring and controlling (management) of water resources in a drainage basin/catchment area.",
    marking_notes: "Core concept: monitoring and controlling water resources in a catchment area.",
    marking_points: [{ marks: 2, description: "monitoring and controlling water resources in a catchment area", keywords: ["monitoring and controlling", "water resources", "catchment area"] }],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Name ONE human activity in the extract that has a negative impact on South Africa's catchment areas.",
    marks: 1, topicKey: "drainage-basin-management", cognitiveLevelName: "Recall",
    model_answer: "Agriculture (agricultural run-off).",
    marking_notes: "Accept 'agriculture' / 'agricultural run-off'.",
    marking_points: [{ marks: 1, description: "agriculture / agricultural run-off", keywords: ["agriculture", "agricultural run off"] }],
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "How does the human activity (answer to the previous question) negatively impact the health (water quality) of a catchment area?",
    marks: 4, topicKey: "drainage-basin-management", cognitiveLevelName: "Comprehension",
    model_answer: "Any two: it causes eutrophication/reduces oxygen levels; it creates an imbalance in nutrient levels; it reduces biodiversity/fauna and flora; it pollutes the water; it increases water-borne diseases; it disrupts ecosystems and natural habitats; it lowers the water table; it increases soil erosion.",
    marking_notes: "Any TWO, each explained (2 marks each): eutrophication/reduced oxygen; nutrient imbalance; reduced biodiversity; water pollution/disease; disrupted ecosystems; lowered water table; increased soil erosion.",
    marking_points: [
      { marks: 2, description: "causes eutrophication / reduces oxygen levels / nutrient imbalance", keywords: ["eutrophication", "oxygen levels", "nutrient levels"] },
      { marks: 2, description: "reduces biodiversity, pollutes water, or disrupts ecosystems/habitats", keywords: ["reduction in biodiversity", "water pollution", "ecosystems", "natural habitats"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.4",
    text: "In a paragraph of approximately EIGHT lines, suggest sustainable strategies the government can put in place to preserve river catchment areas.",
    marks: 8, topicKey: "drainage-basin-management", cognitiveLevelName: "Evaluation",
    model_answer: "Any four: run educational and awareness programmes; implement legislation, laws, or conservation zones; impose fines; improve waste-water/grey-water treatment; create buffer zones; encourage afforestation and remove alien vegetation; build proper sewerage/water purification systems; maximise grey-water usage; test water quality frequently; conserve wetlands; recycle agricultural/domestic/industrial waste; maintain and construct water infrastructure; encourage sustainable farming and rainwater harvesting.",
    marking_notes: "Any FOUR distinct strategies, each explained (2 marks each, max 8): education/awareness; legislation/conservation zones/fines; waste-water treatment/buffer zones; afforestation/alien vegetation removal; sewerage/purification systems; water testing/conservation of wetlands; recycling waste; water infrastructure/sustainable farming/rainwater harvesting.",
    marking_points: [
      { marks: 2, description: "educational/awareness programmes, or implement legislation/conservation zones/fines", keywords: ["educational programmes", "awareness programmes", "legislation", "conservation zones", "fines"] },
      { marks: 2, description: "improve waste-water treatment, or create buffer zones", keywords: ["waste water", "grey water treatment", "buffer zones"] },
      { marks: 2, description: "afforestation, remove alien vegetation, or proper sewerage/purification systems", keywords: ["afforestation", "alien vegetation", "sewerage", "water purification"] },
      { marks: 2, description: "frequent water testing, recycle waste, maintain infrastructure, or sustainable farming/rainwater harvesting", keywords: ["frequent testing", "recycle", "water infrastructure", "sustainable farming", "rain water harvesting"] },
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
