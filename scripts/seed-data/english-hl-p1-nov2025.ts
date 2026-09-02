// Real DBE past paper: English Home Language P1 (Language in Context),
// November 2025, National Senior Certificate.
// Source: official DBE combined question paper + official DBE marking
// guideline (confirmed genuine — crest, "Copyright reserved", "MARKING
// GUIDELINES", NOT a third-party publisher). Question paper = pages 1-14,
// memo = pages 15-24 of the combined PDF. Both read in full before writing
// any marking_points below.
//
// Paper structure: SECTION A Comprehension (30, Q1 — TEXT A prose article
// on youth entrepreneurship + TEXT B advertisement image), SECTION B
// Summary (10, Q2 — TEXT C article), SECTION C Language structures and
// conventions (30 — Q3 TEXT D/E composting advertisements, Q4 TEXT F
// 'ZITS' cartoon, Q5 TEXT G prose passage with deliberate errors).
//
// Grading mode: almost entirely marking_points (free-text keyword
// grading), unlike the calculation-heavy Mathematics papers in this app.
// `steps` (stepped_mcq) is used ONLY for 1.5 and 5.6 — the two genuine
// 4-option multiple-choice questions in this paper; every other question
// is open-ended written response.
//
// Where the memo gives a single holistic multi-mark answer without an
// explicit "1 mark for X, 1 mark for Y" breakdown, that answer's distinct
// ideas were split into separate 1-mark marking_points (never invented —
// each point traces to content actually present in the memo's model
// answer), so each question's points still sum exactly to its own mark
// allocation.
//
// Q2 (Summary) marks: the memo's 7 required content points are worth
// 1 mark each (7 marks), plus a separate "language and fluency" marking
// point standing in for the memo's 3 language marks (own-words paragraph
// form, coherence, word count) — together summing to the question's 10
// marks, per the memo's own "7 content + 3 language = 10" breakdown.
//
// Images: TEXT B (MTN Youth Hustle Hub advertisement, p.5), TEXT D
// (compost flower advertisement, p.8), TEXT E (three-panel compost
// advertisement, p.10), and TEXT F (six-frame 'ZITS' cartoon, p.12) were
// rendered from the source PDF and cropped to just the visual graphic.
// TEXT F was kept as a single image showing all six frames (rather than
// split per-frame) since every TEXT F question already names which
// frame(s) it refers to in its own text, and all of Q4's sub-questions
// reference frames within the same short strip. TEXT A, TEXT C and TEXT G
// are plain prose and were not imaged.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/english-hl-2025-p1";

export const subject = {
  name: "English Home Language",
  stream: null as string | null,
};

export const cognitiveLevels = [
  { name: "Literal", order_index: 1 },
  { name: "Reorganisation", order_index: 2 },
  { name: "Inference", order_index: 3 },
  { name: "Evaluation", order_index: 4 },
];

export const topics = [
  {
    key: "comprehension",
    name: "Reading for Meaning and Understanding",
    caps_term: null as string | null,
    textbook_ref: "English Home Language — Comprehension (Reading for Meaning, Visual/Media Texts)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+english+home+language+comprehension+techniques",
  },
  {
    key: "summary_writing",
    name: "Summary Writing",
    caps_term: null as string | null,
    textbook_ref: "English Home Language — Summary Writing",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+english+home+language+summary+writing",
  },
  {
    key: "language_structures",
    name: "Language Structures and Conventions",
    caps_term: null as string | null,
    textbook_ref: "English Home Language — Language Structures and Conventions (Grammar, Punctuation, Editing, Visual Texts)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+english+home+language+structures+and+conventions",
  },
];

export const paper = {
  year: 2025,
  exam_diet: "November",
  paper_number: "P1",
  duration_minutes: 120,
  total_marks: 70,
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
  marking_points?: MarkingPoint[];
  steps?: MarkingPointStep[];
  image_url?: string;
}

export const questions: QuestionSeed[] = [
  // ============ SECTION A: COMPREHENSION — QUESTION 1 (30 marks) ============
  // TEXT A: 'Profit for purpose' is a key motivation for African youth
  // entering entrepreneurship (prose article, no image needed).

  {
    number: "1", sub_number: "1.1",
    text: "Refer to paragraph 1. Give a reason for encouraging entrepreneurship on the African continent.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Entrepreneurship addresses the lack of formal employment / creates alternative sources of employment / allows people to earn an income.",
    marking_notes: "Memo: any one valid reason tied to the lack of formal employment.",
    marking_points: [
      { marks: 1, description: "Reason: addresses lack of formal employment / alternative livelihood / income", keywords: ["lack of formal employment", "alternative", "income", "employment opportunities", "livelihoods"] },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: "In your own words, explain what the HSRC study (lines 4–6) investigated.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "The HSRC study investigated what drives graduate entrepreneurs to establish employment/business options for others.",
    marking_notes: "Memo: award only 1 mark if the candidate merely lifts from the text.",
    marking_points: [
      { marks: 1, description: "What motivates/drives graduate entrepreneurs", keywords: ["motivates", "drives", "graduate entrepreneurs", "what drives"] },
      { marks: 1, description: "To create employment/business opportunities for others", keywords: ["employment opportunities", "business options", "opportunities for others", "create jobs", "futures"] },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Explain why the writer has included case studies in paragraph 2.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The case studies strengthen the writer's point by referring to real-life experiences/success stories of entrepreneurship, thereby motivating the next generation.",
    marking_notes: "Memo credits valid alternative responses.",
    marking_points: [
      { marks: 1, description: "Refers to real-life experiences / success stories", keywords: ["real-life", "success stories", "case studies", "examples"] },
      { marks: 1, description: "Motivates/inspires the next generation of readers", keywords: ["motivate", "inspire", "next generation", "young people", "encourage"] },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Refer to paragraph 3. What point is the writer making about employment opportunities in Africa?",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The chances of jobseekers/graduates being employed are limited; entrepreneurship creates opportunities for employment.",
    marking_notes: "Memo: award only 1 mark for lifting.",
    marking_points: [
      { marks: 1, description: "Chances of formal employment are limited/scarce", keywords: ["limited", "scarce", "few opportunities", "high number of job seekers"] },
      { marks: 1, description: "Entrepreneurship creates alternative opportunities", keywords: ["entrepreneurship", "opportunities", "alternative", "creates jobs"] },
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Refer to lines 19–23: 'Yet, the stories … be better supported.' Choose the appropriate response: The writer's tone in these lines is …",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "D — optimistic.",
    marking_notes: "Memo: D — optimistic.",
    steps: [
      { marks: 1, description: "The writer's tone in these lines is …", options: ["ironic", "cautionary", "neutral", "optimistic"], correctIndex: 3 },
    ],
  },
  {
    number: "1", sub_number: "1.6",
    text: "Refer to paragraph 4. Discuss how Thandi's entrepreneurial style illustrates the findings of the TIE study.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "Although entrepreneurship is considered profit-driven, the TIE study reveals other complex factors at play. Thandi's style illustrates this: she is strongly motivated to use her university training to solve social problems, provide leadership and make a difference.",
    marking_notes: "Memo: award 3 marks for a discussion of two ideas; only 1 mark for lifting without discussion.",
    marking_points: [
      { marks: 1, description: "Entrepreneurship driven by complex factors, not just profit/necessity (TIE finding)", keywords: ["complex", "not simply", "overlap", "factors"] },
      { marks: 1, description: "Thandi applies university training to be solution-oriented / solve social problems", keywords: ["university training", "solution-oriented", "social problems", "solve"] },
      { marks: 1, description: "Thandi motivated by leadership / making a difference", keywords: ["leadership", "make a difference", "lead", "change"] },
    ],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Refer to paragraph 5. Account for the single-sentence paragraph.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The single sentence summarises the lessons learned from the case studies / highlights that entrepreneurs prefer to respond to social needs rather than profiteering.",
    marking_notes: "Memo splits 1 mark for the structural function, 1 mark for the content it emphasises.",
    marking_points: [
      { marks: 1, description: "Function: summarises/highlights/emphasises the case-study lessons", keywords: ["summarise", "highlight", "emphasise", "stands out"] },
      { marks: 1, description: "Content: entrepreneurs prioritise social needs over profit", keywords: ["social needs", "profit", "prefer", "lessons learned"] },
    ],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Discuss the implication of the information presented in paragraph 6.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The statistics imply that most entrepreneurs use their own resources or actively seek external funding from a wide variety of sources, showing they pursue resources proactively and are motivated by more than financial gain, e.g. social development.",
    marking_notes: "Memo: 3 marks for a discussion of two ideas, or 3 marks for one idea well discussed.",
    marking_points: [
      { marks: 1, description: "Majority use their own savings/resources (68%)", keywords: ["own savings", "own resources", "68"] },
      { marks: 1, description: "Actively/proactively seek external funding from a wide variety of sources", keywords: ["external funding", "variety", "grants", "investors", "government loans"] },
      { marks: 1, description: "Motivations beyond profit, e.g. social development", keywords: ["social development", "not only financial", "other motivations"] },
    ],
  },
  {
    number: "1", sub_number: "1.9",
    text: "Comment on how the diction in paragraph 7 reinforces the writer's argument on supporting entrepreneurs. Include at least TWO examples of diction.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The diction reinforces that entrepreneurs' success depends on the support of stakeholders, who play a 'pivotal role' and 'launch and scale' businesses. Words such as 'nurturing', 'help' and 'training' exemplify the support new entrepreneurs need.",
    marking_notes: "Memo: only 1 mark for a lift; 3 marks for a valid comment supported by TWO examples of diction.",
    marking_points: [
      { marks: 1, description: "Comment: diction reinforces stakeholders' vital supporting role", keywords: ["pivotal role", "support", "stakeholders"] },
      { marks: 1, description: "Example 1 of diction (e.g. 'pivotal role', 'launch and scale', 'essential')", keywords: ["pivotal", "launch and scale", "essential"] },
      { marks: 1, description: "Example 2 of diction (e.g. 'nurturing', 'help', 'training', 'enabling environments')", keywords: ["nurturing", "help", "training", "enabling environments"] },
    ],
  },
  {
    number: "1", sub_number: "1.10",
    text: "Is paragraph 9 an appropriate conclusion to TEXT A? Justify your response.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Yes. The conclusion highlights the main argument — that entrepreneurs are motivated by social benefit, not only financial gain — offers advice on supporting entrepreneurs through academic programmes, and references the two case studies, underscoring their role in communities.",
    marking_notes: "Memo: a NO response is unlikely but credited on merit; award 3 marks for a discussion of two ideas.",
    marking_points: [
      { marks: 1, description: "Highlights the main argument: social benefit over pure profit motive", keywords: ["social benefit", "not only financial", "motivated"] },
      { marks: 1, description: "Offers advice on supporting entrepreneurs via academic programmes", keywords: ["advice", "academic programmes", "support entrepreneurs"] },
      { marks: 1, description: "Refers back to the case studies / communities", keywords: ["case studies", "communities", "opportunities"] },
    ],
  },

  // TEXT B: MTN Youth Hustle Hub advertisement (image).

  {
    number: "1", sub_number: "1.11",
    text: "Discuss the manner in which the young woman represents the target audience.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The confident, suitably attired young woman makes direct eye contact, suggesting willingness to engage. She holds an electronic device, suggesting familiarity with technology — matching the proactive, positive young entrepreneurs the competition targets.",
    marking_notes: "Memo credits valid alternatives; 3 marks for two ideas well discussed.",
    marking_points: [
      { marks: 1, description: "Confident, professionally attired, direct eye contact suggests willingness to engage", keywords: ["confident", "eye contact", "attired", "engage"] },
      { marks: 1, description: "Holds an electronic device suggesting tech-savviness", keywords: ["device", "technology", "tablet", "tech"] },
      { marks: 1, description: "Matches target audience: proactive/positive young entrepreneurs", keywords: ["target audience", "proactive", "young entrepreneurs", "matches"] },
    ],
    image_url: `${IMG}/text-b-advertisement.png`,
  },
  {
    number: "1", sub_number: "1.12",
    text: "Why does the advertiser portray the letter 'H' in 'HUSTLE' as a shopping bag?",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The capital 'H' draws the reader's eye to the shopping-bag icon, linking to the retail activity of the MTN Y'ello Lane Market Hub / the pun of 'bag(ging)' the prize on offer.",
    marking_notes: "Memo: award 2 marks for an explanation of ONE idea.",
    marking_points: [
      { marks: 2, description: "Explains the link between the shopping-bag 'H' and retail/'bagging' the prize/hustle", keywords: ["shopping bag", "retail", "bagging", "pun", "hustle", "market hub"] },
    ],
    image_url: `${IMG}/text-b-advertisement.png`,
  },
  {
    number: "1", sub_number: "1.13",
    text: "To what extent does the advertiser in TEXT B propel 'entrepreneurial ambitions' (line 58) of TEXT A? Justify your response.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "TEXT B strongly encourages young people with entrepreneurial ambitions to launch their businesses with MTN's support (mentorship, funding). The competition entry (uploading a promo video) showcases their skills and propels their ventures to the next level.",
    marking_notes: "Memo: award 3 marks only if the candidate references both TEXT B and line 58 of TEXT A.",
    marking_points: [
      { marks: 1, description: "TEXT B encourages young people with entrepreneurial ambitions to launch businesses", keywords: ["encourages", "entrepreneurial ambitions", "launch"] },
      { marks: 1, description: "MTN supports/aids ventures (mentorship, funding, reward)", keywords: ["mtn", "support", "mentorship", "aid", "reward"] },
      { marks: 1, description: "Competition entry (video) propels/showcases skills to the next level", keywords: ["propel", "video", "showcase", "next level"] },
    ],
    image_url: `${IMG}/text-b-advertisement.png`,
  },

  // ============ SECTION B: SUMMARY — QUESTION 2 (10 marks) ============
  // TEXT C: Why we get excited during sporting events (prose article, no image needed).

  {
    number: "2", sub_number: null,
    text: "TEXT C highlights the excitement generated by sporting events. Summarise, in your own words, the factors that inspire people to become sport fanatics. Your summary should include SEVEN points and NOT exceed 90 words, written as a fluent paragraph, with your word count indicated at the end.",
    marks: 10, topicKey: "summary_writing", cognitiveLevelName: "Reorganisation",
    model_answer: "Sporting events are the only forms of entertainment that can elicit a range of emotions. Media promotions generate excitement luring fans to anticipate the actual event. Loyal fans identify with their team which boosts enthusiasm for the sport and generates fulfilment. Games are presented as dramatic entertainment enthralling viewers through the sensational broadcasting of conflict in the sport. Moreover, the structure of sporting events makes fans see themselves as participants in a drama and communal bonds are formed. Sport enables social engagement and cohesion with fans sharing their post-game emotions. [90 words]",
    marking_notes: "Memo: any 7 valid points from a list of 10, in paragraph form, own words — 7 marks for 7 points (1 each), 3 marks for language (reduced if quoted verbatim or fewer points are correct).",
    marking_points: [
      { marks: 1, description: "Point: sporting events uniquely elicit a range/spectrum of emotions", keywords: ["range of emotions", "spectrum of emotions", "unique", "unparalleled"] },
      { marks: 1, description: "Point: media/advertising promotions generate excitement and engage fans", keywords: ["media promotions", "advertising", "buzz", "engaged", "public relations"] },
      { marks: 1, description: "Point: anticipation/waiting before the event enhances the experience", keywords: ["anticipation", "waiting experience", "expectations", "rewarding"] },
      { marks: 1, description: "Point: loyalty and identification with a team leads to fulfilment/belonging", keywords: ["loyalty", "identify with their team", "sense of belonging", "fulfilment", "satisfied"] },
      { marks: 1, description: "Point: sport is presented as dramatic entertainment/storytelling", keywords: ["dramatic entertainment", "storytelling", "narratives", "underdog", "rivalry"] },
      { marks: 1, description: "Point: broadcasting/structure lets fans see themselves as participants in the drama", keywords: ["structure", "participants", "climax", "resolution", "narrative"] },
      { marks: 1, description: "Point: sport enables social interaction/community/cohesion, sharing post-game emotions", keywords: ["social interaction", "community", "cohesion", "commiserate", "celebrate victories"] },
      { marks: 3, description: "Language: fluent, coherent, own-words paragraph within the word limit", keywords: ["fluent", "coherent", "paragraph", "own words", "word count"] },
    ],
  },

  // ============ SECTION C: LANGUAGE STRUCTURES AND CONVENTIONS ============
  // QUESTION 3: TEXT D and TEXT E — composting advertisements (10 marks).

  {
    number: "3", sub_number: "3.1",
    text: "What is the impact of the exclamation mark in 'COMPOST!', in TEXT D?",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "The exclamation mark creates emphasis/urgency and compels/instructs the reader to engage in recycling.",
    marking_notes: "Memo credits valid alternative responses.",
    marking_points: [
      { marks: 1, description: "Creates emphasis/urgency/excitement", keywords: ["emphasis", "urgency", "excitement", "command"] },
      { marks: 1, description: "Compels/instructs the reader to recycle/engage", keywords: ["compels", "instructs", "engage", "recycle"] },
    ],
    image_url: `${IMG}/text-d-advertisement.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Provide the root word of 'RECYCLING'.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "cycle",
    marking_notes: "Memo: cycle.",
    marking_points: [
      { marks: 1, description: "cycle", keywords: ["cycle"] },
    ],
    image_url: `${IMG}/text-d-advertisement.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "Discuss ONE advertising technique used in the written text of TEXT E. Give ONE example to support your answer.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "The advertiser uses creative puns (e.g. 'APEELING', 'BERRY', 'LETTUCE') to engage the reader with humour/wit, making the message memorable.",
    marking_notes: "Memo: 1 mark for identifying a technique, 1 mark for an example, 1 mark for discussion; an example only counts if linked to a technique/discussion.",
    marking_points: [
      { marks: 1, description: "Identifies a technique (e.g. pun, imperative, repetition, bandwagon, personal pronoun, rhetorical question, font)", keywords: ["pun", "imperative", "repetition", "bandwagon", "personal pronoun", "rhetorical question", "font"] },
      { marks: 1, description: "Gives a matching example (e.g. 'APEELING', 'BERRY', 'LETTUCE', 'MAKE YOUR TRASH', 'everyone's doing it')", keywords: ["apeeling", "berry", "lettuce", "make your trash", "everyone's doing it", "did you know"] },
      { marks: 1, description: "Discusses the effect on the reader (humour, urgency, persuasion)", keywords: ["engages", "persuades", "humour", "urges", "appeals", "wit"] },
    ],
    image_url: `${IMG}/text-e-advertisement.png`,
  },
  {
    number: "3", sub_number: "3.4",
    text: "'LETTUCE DO MORE FOR THE ENVIRONMENT' — Replace the word 'LETTUCE' with its standard English equivalent.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "Let us / Let's",
    marking_notes: "Memo: Let us/Let's.",
    marking_points: [
      { marks: 1, description: "Let us / Let's", keywords: ["let us", "let's", "lets"] },
    ],
    image_url: `${IMG}/text-e-advertisement.png`,
  },
  {
    number: "3", sub_number: "3.5",
    text: "Refer to both TEXT D and TEXT E. In your view, which visual image conveys the advertiser's message more effectively? Justify your choice.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "TEXT D has a single flower pot with words related to composting patterned into the flower, leaves and stem, symbolising the positive results of composting. OR TEXT E has three clearly depicted images closely linked to the message; the link between puns and images helps readers connect recycling with everyday food items.",
    marking_notes: "Memo credits valid/mixed responses; 3 marks for two ideas well justified.",
    marking_points: [
      { marks: 1, description: "Describes the chosen advertisement's visual layout (single flower/pot vs three separate images)", keywords: ["flower", "pot", "single image", "three images"] },
      { marks: 1, description: "Explains the symbolism/connection between words and images", keywords: ["symbolises", "patterned", "link", "connection"] },
      { marks: 1, description: "Justifies why this makes the message clearer/more effective for the reader", keywords: ["clear", "effective", "understand", "message"] },
    ],
    image_url: `${IMG}/text-d-advertisement.png`,
  },

  // QUESTION 4: TEXT F — 'ZITS' cartoon (10 marks).

  {
    number: "4", sub_number: "4.1",
    text: "What is Jeremy's attitude towards his father in FRAME 1?",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "Jeremy shows a hesitant/nervous/uncertain/sheepish/deferential/respectful/cautious/humble attitude.",
    marking_notes: "Memo credits valid alternative responses in context.",
    marking_points: [
      { marks: 1, description: "Hesitant/nervous/uncertain/sheepish/deferential/respectful/cautious/humble", keywords: ["hesitant", "nervous", "uncertain", "sheepish", "deferential", "respectful", "cautious", "humble"] },
    ],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Describe the parents' relationship, with reference to their body language, in FRAME 1.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "The parents have an affectionate/loving/close relationship — they sit comfortably and cosily on the same chair, with the mother's arm around her husband's shoulder.",
    marking_notes: "Memo splits 1 mark for describing the relationship, 1 mark for the body-language evidence.",
    marking_points: [
      { marks: 1, description: "Affectionate/loving/close relationship", keywords: ["affectionate", "loving", "close"] },
      { marks: 1, description: "Body-language evidence: sitting together/arm around shoulder", keywords: ["arm around", "sitting together", "cosy", "comfortable"] },
    ],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.3",
    text: "Refer to FRAMES 2–5. Suggest why the cartoonist prolongs Jeremy's speech.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "The cartoonist extends Jeremy's speech to exaggerate the effort he undertook to acquire the gift, building towards a climax.",
    marking_notes: "Memo: one holistic idea, worth 2 marks — split here into the exaggeration and the climax-building effect.",
    marking_points: [
      { marks: 1, description: "Exaggerates the effort taken/builds up the account", keywords: ["exaggerate", "effort", "build up", "prolong"] },
      { marks: 1, description: "Creates a climax/suspense/anticipation", keywords: ["climax", "suspense", "anticipation", "tension"] },
    ],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.4",
    text: "Refer to FRAMES 3, 5 and 6. Critically discuss how the cartoonist uses irony to establish humour.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "In FRAME 3, the father is mildly pleased with a mediocre gift. This changes in FRAME 5 to extreme elation at realising his son has matured enough to have a job. It is ironic that the gift pleases him less than the news of the job; the 'CONTEXT THAT COUNTS' line in FRAME 6 underscores how successfully Jeremy manipulated his father.",
    marking_notes: "Memo: award 3 marks only if a critical discussion (not mere description) is provided.",
    marking_points: [
      { marks: 1, description: "Father mildly pleased with a mediocre gift in FRAME 3", keywords: ["mildly pleased", "mediocre gift", "frame 3"] },
      { marks: 1, description: "Changes to extreme elation/joy on realising his son has matured/has a job (FRAME 5/6)", keywords: ["elation", "joy", "realises", "job", "matured"] },
      { marks: 1, description: "Irony: the gift pleases him less than the news / 'context that counts' shows manipulation", keywords: ["ironic", "context", "counts", "manipulated"] },
    ],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.5",
    text: "State TWO functions of the apostrophe as used in FRAMES 1 and 2.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "FRAME 1 'FATHER'S' — possession/ownership. FRAME 2 'IT'S' — contraction/omission.",
    marking_notes: "Memo: 1 mark per frame's function.",
    marking_points: [
      { marks: 1, description: "FRAME 1 'FATHER'S' shows possession/ownership", keywords: ["possession", "ownership", "father's"] },
      { marks: 1, description: "FRAME 2 'IT'S' shows contraction/omission", keywords: ["contraction", "omission", "it's"] },
    ],
    image_url: `${IMG}/text-f-cartoon.png`,
  },

  // QUESTION 5: TEXT G — prose passage with deliberate errors (10 marks).

  {
    number: "5", sub_number: "5.1",
    text: "Provide a suitable antonym for the word 'different' (line 2), in context.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "similar / alike / identical",
    marking_notes: "Memo credits valid alternative responses in context.",
    marking_points: [
      { marks: 1, description: "similar/alike/identical", keywords: ["similar", "alike", "identical"] },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Identify the part of speech of 'grandly' (line 3).",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "adverb",
    marking_notes: "Memo: adverb.",
    marking_points: [
      { marks: 1, description: "adverb", keywords: ["adverb"] },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Refer to lines 4–6: 'I messaged a photo of the crater in her head to her grandfather, the cardiologist. He usually sews me up when I do stupid stuff.' Rewrite the above sentences as a complex sentence by adding a suitable conjunction.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "I messaged a photo of the crater in her head to her grandfather, the cardiologist, who usually sews me up when I do stupid stuff.",
    marking_notes: "Memo: uses the relative pronoun/conjunction 'who' to combine the two sentences.",
    marking_points: [
      { marks: 1, description: "Combines both clauses using 'who' (or similar conjunction) into one complex sentence", keywords: ["who", "cardiologist", "sews me up"] },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "He said that she needed stitches and that he wasn't doing it. (Lines 6–7) Rewrite the above sentence in direct speech. Begin with: Grandpa said …",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "Grandpa said, 'She needs stitches and I am not doing it!'",
    marking_notes: "Memo: 1 mark per correctly converted clause (tense/pronoun shift back to direct speech).",
    marking_points: [
      { marks: 1, description: "First clause correctly converted: 'She needs stitches'", keywords: ["needs stitches", "she needs"] },
      { marks: 1, description: "Second clause correctly converted: 'I am not doing it'", keywords: ["not doing it", "i am not"] },
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Correct the error of tense in 'Thirty minutes later … us as parents' (lines 7–9).",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "find → found",
    marking_notes: "Memo: find → found.",
    marking_points: [
      { marks: 1, description: "found", keywords: ["found"] },
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Refer to lines 10–11: 'It's already evident at the ripe old age of six that she's inherited my penchant for the dramatic.' Choose the appropriate response: The subordinate clause in the above sentence is:",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "B — 'that she's inherited my penchant for the dramatic.'",
    marking_notes: "Memo: B.",
    steps: [
      { marks: 1, description: "The subordinate clause in the above sentence is:", options: ["'It's already evident'", "'that she's inherited my penchant for the dramatic.'", "'at the ripe old age of six'", "'It's already evident at the ripe old age of six'"], correctIndex: 1 },
    ],
  },
  {
    number: "5", sub_number: "5.7",
    text: "'I promise I haven't taught her to be a drama queen, she just is' (lines 11–12). Replace the comma with a suitable alternative punctuation mark so that the above sentence is grammatically correct.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "I promise I haven't taught her to be a drama queen; she just is. (semicolon, colon, dash, full stop or exclamation mark also accepted)",
    marking_notes: "Memo accepts a semicolon, colon, dash, full stop, or exclamation mark in place of the comma.",
    marking_points: [
      { marks: 1, description: "Replaces the comma with a semicolon/colon/dash/full stop/exclamation mark, splitting the two independent clauses correctly", keywords: ["semicolon", "colon", "dash", "full stop", "exclamation"] },
    ],
  },
  {
    number: "5", sub_number: "5.8",
    text: "Why is the phrase 'modus operandi' (line 14) written in italics?",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "The italics indicate that the phrase is from a foreign language.",
    marking_notes: "Memo: indicates a foreign-language phrase.",
    marking_points: [
      { marks: 1, description: "Indicates the phrase is from a foreign language", keywords: ["foreign language", "foreign phrase", "not english", "latin"] },
    ],
  },
  {
    number: "5", sub_number: "5.9",
    text: "Replace a word used incorrectly in the last sentence with its homophone.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "passed → past",
    marking_notes: "Memo: past.",
    marking_points: [
      { marks: 1, description: "past", keywords: ["past"] },
    ],
  },
];

export const examSchedule: never[] = [];
