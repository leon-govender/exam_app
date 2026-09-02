// Real DBE past paper: English Home Language P1 (Language in Context),
// November 2024, National Senior Certificate.
// Source: official DBE question paper + official DBE marking guideline,
// combined into one 23-page PDF (question paper pages 1-13, marking
// guidelines pages 14-23), pre-verified as the genuine official DBE memo
// (crest, "NSC − Marking Guidelines", "Copyright reserved") and not a
// third-party publisher's memo. Read directly from the extracted text dump
// rather than page images (no maths symbols to misread in an English
// paper), with the original PDF used only to render/crop the four visual
// texts (TEXT B, D, E, F).
//
// Paper structure: SECTION A Comprehension (30 marks, Question 1 — TEXT A
// a prose article, TEXT B a 4-frame cartoon), SECTION B Summary (10 marks,
// Question 2 — TEXT C), SECTION C Language structures and conventions (30
// marks, Question 3 on TEXTS D/E adverts, Question 4 on TEXT F a 10-frame
// cartoon, Question 5 on TEXT G a prose text with deliberate errors).
// Grand total 70, confirmed against the paper's own cover page (MARKS: 70,
// TIME: 2 hours) and its own printed section/question sub-totals, all of
// which were cross-checked against the sum of every question's marks in
// this file.
//
// This is almost entirely open-ended free-text writing, unlike the
// calculation-heavy Mathematics papers in this app, so nearly every
// sub-question uses `marking_points` (free-text keyword grading), styled
// after geography-p1-nov2025.ts. Only the two genuine 4-option
// multiple-choice sub-questions explicitly printed with A/B/C/D in the
// question paper (1.6.1 and 3.3) use `steps` (stepped_mcq).
//
// Judgment calls:
// - Cognitive levels (Literal/Reorganisation/Inference/Evaluation) are not
//   individually labelled in the memo for every sub-question, so most were
//   inferred from the nature of each question per the standard DBE English
//   framework described in the task brief.
// - Question 2 (Summary): the memo's own mark scheme splits the 10 marks
//   into "7 marks for 7 points (1 mark per main point)" + "3 marks for
//   language". Seven of the memo's nine listed acceptable content points
//   were selected here (points 1, 2, 4, 5, 6, 7, 9 — omitting 3 and 8 as
//   close restatements of points already covered) as the 7 one-mark
//   content marking_points, plus one additional 3-mark marking_point for
//   the language/fluent-paragraph-form requirement — this last point is
//   inherently about writing quality rather than a checkable fact, so its
//   keywords are necessarily weaker than the content points; a human/LLM
//   grader would do this part more justice than keyword matching can.
// - Several multi-idea marking guideline entries that say things like
//   "award 3 marks for a critical discussion of BOTH X and Y" or "award 2
//   marks only if both parts are discussed" are represented as a single
//   marking_point carrying the full mark value (rather than force-split
//   into artificial sub-points), since the memo itself does not offer a
//   clean per-idea split for those.
// - 3.5 (TEXTS D and E) and 1.13 (TEXTS A and B) each reference two visual
//   texts already introduced in earlier sub-questions; each is given the
//   image_url of the more recently introduced/most relevant one (TEXT E and
//   TEXT B respectively) rather than duplicating both.
//
// Images: TEXT B (cartoon, 4 frames), TEXT D (advert), TEXT E (advert) and
// TEXT F (cartoon, 10 frames) were rendered from the source PDF and cropped
// to just the visual text (title label + graphic + source line), saved
// under public/question-images/english-hl-2024-p1/. TEXT A, TEXT C and
// TEXT G are plain prose passages, already fully captured as text, and do
// not need images.

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/english-hl-2024-p1";

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
  year: 2024,
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
  // ============ SECTION A: COMPREHENSION (30 marks) ============
  // QUESTION 1: TEXT A (article) and TEXT B (cartoon)

  {
    number: "1", sub_number: "1.1",
    text: "Provide a definition of the word 'gratification' in the title, 'The Era of Instant Gratification'.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "Happiness/satisfaction/indulgence/pleasure.",
    marking_notes: "Accept any suitable alternative definition.",
    marking_points: [{ marks: 1, description: "happiness/satisfaction/indulgence/pleasure", keywords: ["happiness", "satisfaction", "indulgence", "pleasure", "gratifying"] }],
  },
  {
    number: "1", sub_number: "1.2",
    text: "Refer to the opening sentence of paragraph 1: 'The youngest of …, you name it …'. What is the writer's opinion about the younger generation?",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "The writer believes that the younger generation has easy access to everything/lives an easier life.",
    marking_notes: "Accept valid alternative phrasing of the same idea.",
    marking_points: [{ marks: 1, description: "younger generation has easy access to everything / an easier life", keywords: ["easy access", "easier life", "things are easy", "everything is easy"] }],
  },
  {
    number: "1", sub_number: "1.3",
    text: "Explain the difference between the two generations, as expressed in paragraph 1.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Reorganisation",
    model_answer: "The older generation had to learn social skills from their parents, whereas the younger generation learns from technology / the older generation is able to function independently, whereas the younger generation is dependent on technology.",
    marking_notes: "Award only 1 mark total if the candidate merely lifts the text without explaining. Full marks need both halves of the contrast.",
    marking_points: [
      { marks: 1, description: "older generation learned from/depended on parents", keywords: ["depended on their parents", "learn from their parents", "parents for different things"] },
      { marks: 1, description: "younger generation depends on/learns from technology", keywords: ["depend on technology", "dependent on technology", "learns from technology"] },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "Refer to paragraph 2. Explain what is meant by 'the value of genuine \"socialness\" has been whittled away' (lines 14–15), in the context of the paragraph.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The writer is stating that the importance of social skills has been compromised/eroded.",
    marking_notes: "Award 1 mark for identifying social skills/interaction as the subject, 1 mark for the idea that this has been eroded/reduced/lost over time.",
    marking_points: [
      { marks: 1, description: "importance of social skills/genuine interaction", keywords: ["social skills", "genuine social", "social interaction", "socialness"] },
      { marks: 1, description: "has been compromised/eroded/reduced", keywords: ["eroded", "compromised", "diminished", "lost", "reduced", "whittled"] },
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "Discuss the point that the writer is making by repeating, 'I have heard many a time …' in paragraph 3.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The writer is reinforcing how commonplace and clichéd people's 'lack of time' excuse is / he is being dismissive of those who use lack of time as an excuse for neglecting social effort.",
    marking_notes: "Award 1 mark for identifying the effect of the repetition (reinforcing/emphasising how common the excuse is), 1 mark for linking it to the writer's dismissive/critical stance.",
    marking_points: [
      { marks: 1, description: "reinforces/emphasises how commonplace or clichéd the excuse is", keywords: ["reinforcing", "commonplace", "clichéd", "cliched", "common excuse", "repetition emphasises"] },
      { marks: 1, description: "writer is dismissive/critical of the excuse", keywords: ["dismissive", "critical", "excuse for neglecting", "not making an effort"] },
    ],
  },
  {
    number: "1", sub_number: "1.6.1",
    text: "Choose the most appropriate response from the list of options provided: The writer's attitude in paragraph 4 could be described as … A insincere. B critical. C sarcastic. D understanding.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "B — critical.",
    marking_notes: "Only one correct option; accept the letter and/or the word written out.",
    steps: [{ marks: 1, description: "The writer's attitude in paragraph 4 could be described as …", options: ["insincere.", "critical.", "sarcastic.", "understanding."], correctIndex: 1 }],
  },
  {
    number: "1", sub_number: "1.6.2",
    text: "Comment on how the diction in paragraph 4 conveys the writer's attitude. Include ONE example of diction in your response.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The writer uses words with negative connotations, such as 'parasites', 'shallow' and 'deficit', to convey his attitude towards current society's dependence on technology at the expense of authentic/meaningful relationships.",
    marking_notes: "Award 1 mark for identifying an example of diction (e.g. 'parasites'/'shallow'/'deficit') and 2 marks for a comment linking it to the writer's critical attitude.",
    marking_points: [
      { marks: 1, description: "identifies an example of negative diction (e.g. 'parasites'/'shallow'/'deficit')", keywords: ["parasites", "shallow", "deficit", "negative connotation", "negative words"] },
      { marks: 2, description: "comment linking the diction to the writer's critical attitude towards technology dependence", keywords: ["critical attitude", "dependence on technology", "lack of authentic", "meaningful relationships", "negative light"] },
    ],
  },
  {
    number: "1", sub_number: "1.7",
    text: "Explain the writer's intention in using a series of rhetorical questions in paragraph 5.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The writer challenges the reader to reflect on how technology, as a measure of progress, devalues the contribution of the previous generation / the writer engages the reader on whether enough consideration is given to the impact of technology on society.",
    marking_notes: "Award only 1 mark for a purely technical response (e.g. 'to make the reader think' with no development). Award 2 marks for one idea, well explained.",
    marking_points: [{ marks: 2, description: "prompts the reader to reflect critically on technology's impact on society/values (one idea, well explained)", keywords: ["reflect", "challenges the reader", "engages the reader", "makes the reader think", "impact of technology"] }],
  },
  {
    number: "1", sub_number: "1.8",
    text: "Discuss the paradox in the argument presented in paragraph 6.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The paradox conveys the view that it is in doing what is deemed to be 'unnecessary' that we show our humanity and our connectedness to our fellow human beings. Living a life that just meets expectations is equivalent to existing and not living ('That is just following a formula').",
    marking_notes: "Award 1 mark for identifying the paradox (the 'unnecessary' is actually valuable/necessary) and 2 marks for discussing it.",
    marking_points: [
      { marks: 1, description: "identifies the paradox: 'unnecessary' things are actually meaningful/valuable", keywords: ["unnecessary", "paradox", "contradiction"] },
      { marks: 2, description: "discusses how unnecessary acts show humanity/connectedness, while only doing what's necessary is merely existing", keywords: ["humanity", "connectedness", "just following a formula", "just existing", "not truly living"] },
    ],
  },
  {
    number: "1", sub_number: "1.9",
    text: "To what extent does the concluding paragraph support the subheading, 'The modern world has devalued genuineness in social settings'? Motivate your response.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The concluding paragraph supports the sub-heading that modern society ('we') is collectively responsible for devaluing 'genuineness'. The older generation has enabled this behaviour by allowing the younger generation to become dependent on 'instant gratification'/technology instead of instilling established values and morals that promote togetherness/humanity.",
    marking_notes: "Award 3 marks for TWO ideas well-discussed (e.g. collective responsibility for devaluing genuineness, and the older generation enabling dependency on technology instead of instilling values).",
    marking_points: [{ marks: 3, description: "discusses TWO ideas linking the conclusion to the sub-heading (collective responsibility; older generation enabling dependency instead of instilling values)", keywords: ["collectively responsible", "devaluing", "instant gratification", "older generation", "instil", "values and morals"] }],
  },
  {
    number: "1", sub_number: "1.10",
    text: "How does the list given by the cab driver in FRAMES 1 and 2 relate to instant gratification?",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The list given indicates how access to consumables/technology has made life easy/effortless/convenient.",
    marking_notes: "Award 1 mark for identifying that the list refers to consumables/technology, 1 mark for linking this to life being made easy/convenient.",
    marking_points: [
      { marks: 1, description: "refers to access to consumables/technology", keywords: ["consumables", "technology", "instant mashed potatoes", "digital cameras"] },
      { marks: 1, description: "has made life easy/effortless/convenient", keywords: ["easy", "effortless", "convenient"] },
    ],
    image_url: `${IMG}/text-b-cartoon.png`,
  },
  {
    number: "1", sub_number: "1.11",
    text: "In the context of the cartoon, suggest why the driver's facial expression remains unchanged.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The cab driver has accepted that impatience/the need for instant gratification has become the norm and that nothing can be done to change human behaviour / the cab driver's thoughts are focused on driving, and remain focused on the same idea in all the frames.",
    marking_notes: "Award full marks for one well-developed idea (e.g. that the driver has accepted instant gratification as the norm) or two related points (his thoughts stay focused on the same idea/on driving throughout).",
    marking_points: [{ marks: 2, description: "driver has resigned himself to/accepted instant gratification as the norm, or remains focused on the same train of thought throughout", keywords: ["accepted", "the norm", "nothing can be done", "focused on driving", "same idea"] }],
    image_url: `${IMG}/text-b-cartoon.png`,
  },
  {
    number: "1", sub_number: "1.12",
    text: "With close reference to FRAME 4, comment on the satirical message conveyed in the cartoon.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The cab driver is musing about society's obsession with instant gratification when the passenger asks him to speed up. This satirises how the modern world promotes instant gratification instead of a virtue like patience.",
    marking_notes: "Award 3 marks only if a comment on satire is provided (not merely a description of what happens in the frame).",
    marking_points: [{ marks: 3, description: "comments on the satire: modern society favours instant gratification/impatience over patience, illustrated by the passenger demanding speed", keywords: ["satirises", "instant gratification", "patience", "can't you go any faster", "impatience"] }],
    image_url: `${IMG}/text-b-cartoon.png`,
  },
  {
    number: "1", sub_number: "1.13",
    text: "Refer to both TEXT A and TEXT B. Critically discuss the extent to which TEXT B illustrates the writer's view in paragraph 7 of TEXT A.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "TEXT B successfully illustrates the writer's view in paragraph 7 of TEXT A. The cab driver epitomises 'maturity and awareness' since he understands the attitude of modern society, where people lack the patience to achieve anything beyond instant gratification. This is represented by the passenger, who lacks 'core values' such as patience, tolerance and kindness.",
    marking_notes: "Credit valid alternative responses. Award 3 marks for a critical discussion of BOTH paragraph 7 of TEXT A and TEXT B.",
    marking_points: [{ marks: 3, description: "critical discussion linking paragraph 7's ideas (maturity/awareness, core values) to the cab driver and passenger in TEXT B", keywords: ["maturity and awareness", "core values", "patience", "passenger", "cab driver"] }],
    image_url: `${IMG}/text-b-cartoon.png`,
  },

  // ============ SECTION B: SUMMARY (10 marks) ============
  // QUESTION 2: TEXT C

  {
    number: "2", sub_number: null,
    text: "TEXT C discusses why people choose happiness over contentment. Summarise, in your own words, why contentment is preferable. Your summary should include SEVEN points and NOT exceed 90 words, written as a fluent paragraph (no title required); indicate your word count at the end.",
    marks: 10, topicKey: "summary_writing", cognitiveLevelName: "Reorganisation",
    model_answer: "Contentment goes hand in hand with a deeper feeling of appreciation and is a timeless experience. Contented people are satisfied with waiting for rewards. Contentment encourages realistic goal-setting. Contented people are neither materialistic nor greedy and are not competitive. Lastly, people who are contented show perseverance and determination — they are goal-driven. [69]",
    marking_notes: "Mark allocation: 7 marks for 7 valid content points (1 mark each) + 3 marks for language (fluent paragraph form, own words, within the word limit). Any 7 of the memo's valid points may be credited; do not deduct marks for an incorrect/missing word count unless the limit is exceeded, in which case read only up to the last sentence before the limit.",
    marking_points: [
      { marks: 1, description: "contentment goes hand in hand with a deeper feeling of fulfilment/appreciation", keywords: ["deeper feeling", "fulfilment", "appreciation", "gratitude"] },
      { marks: 1, description: "contentment is a timeless/lasting experience (unlike happiness)", keywords: ["timeless", "lasts indefinitely", "long lasting", "long-lasting"] },
      { marks: 1, description: "contented people are satisfied with waiting for rewards (delayed gratification)", keywords: ["waiting for rewards", "delayed gratification", "willing to wait"] },
      { marks: 1, description: "contentment encourages realistic/lower goal-setting", keywords: ["realistic goal", "lower expectations", "reasonable expectations", "goal setting"] },
      { marks: 1, description: "contented people are neither materialistic nor greedy", keywords: ["materialistic", "greedy", "greed", "absence of greed"] },
      { marks: 1, description: "contented people are not competitive/find gratitude in what they have", keywords: ["not competitive", "satisfied with what they have", "gratitude"] },
      { marks: 1, description: "contented people show perseverance/determination and are goal-driven", keywords: ["perseverance", "determination", "goal driven", "goal-driven", "purpose and resilience"] },
      { marks: 3, description: "written as a fluent, coherent paragraph in the candidate's own words, within the word limit", keywords: ["contentment", "content", "however", "furthermore", "therefore"] },
    ],
  },

  // ============ SECTION C: LANGUAGE STRUCTURES AND CONVENTIONS (30 marks) ============
  // QUESTION 3: TEXT D and TEXT E (advertisements)

  {
    number: "3", sub_number: "3.1",
    text: "What is the purpose of the slogan, '#PlayYourPart'?",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "The slogan encourages the reader to become involved in making a positive contribution to South Africa.",
    marking_notes: "Award 1 mark for 'encourages the reader to become involved' and 1 mark for 'making a positive contribution'. Do not credit a response that only refers to the hashtag itself.",
    marking_points: [
      { marks: 1, description: "encourages the reader to become involved/take action", keywords: ["encourages", "become involved", "get involved", "take part"] },
      { marks: 1, description: "make a positive contribution to South Africa", keywords: ["positive contribution", "south africa", "playing their part"] },
    ],
    image_url: `${IMG}/text-d-advert.png`,
  },
  {
    number: "3", sub_number: "3.2",
    text: "Refer to the written text: 'INSPIRING EXCELLENCE THROUGH … to the World.' With reference to ONE technique and ONE example, comment on how the advertiser promotes the campaign.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "The advertiser uses emotive diction, e.g. 'driving force'/'global stage'/'Inspiration', to appeal to the reader's sense of patriotism.",
    marking_notes: "Award 1 mark for identifying a technique (e.g. bold font, emotive diction, alliteration, capitalisation, pronouns, imperative sentence, repetition, continuous present tense), 1 mark for a matching example, and 1 mark for a comment on its effect. A mark can only be awarded for an example if linked to a technique or comment.",
    marking_points: [
      { marks: 1, description: "identifies a technique (e.g. emotive diction, bold font, alliteration, capitalisation, pronouns, imperative sentence, repetition)", keywords: ["emotive diction", "bold font", "alliteration", "capitalisation", "pronouns", "imperative", "repetition"] },
      { marks: 1, description: "gives a matching example from the text", keywords: ["driving force", "global stage", "inspiration", "our", "us", "be part of a team", "inspiring"] },
      { marks: 1, description: "comments on the effect (e.g. appeals to patriotism/creates inclusion/unity/motivation)", keywords: ["patriotism", "inclusion", "unity", "motivation", "sense of pride"] },
    ],
    image_url: `${IMG}/text-d-advert.png`,
  },
  {
    number: "3", sub_number: "3.3",
    text: "Choose the most appropriate response from the list of options provided: 'Sport continues to be a driving force that inspires our people and positions South Africa positively on the global stage.' The above is an example of a/an … A simple sentence. B adverbial clause. C complex sentence. D compound sentence.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "C — complex sentence.",
    marking_notes: "Only one correct option; accept the letter and/or the word written out.",
    steps: [{ marks: 1, description: "The above is an example of a/an …", options: ["simple sentence.", "adverbial clause.", "complex sentence.", "compound sentence."], correctIndex: 2 }],
    image_url: `${IMG}/text-d-advert.png`,
  },
  {
    number: "3", sub_number: "3.4",
    text: "Rewrite the following clause as a statement that includes a subject: 'Be Part of a Team'.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Reorganisation",
    model_answer: "You can/should/ought to/must be part of a team.",
    marking_notes: "The clause 'be part of a team' must be included in the response. Accept valid alternatives with a subject added.",
    marking_points: [{ marks: 1, description: "adds a subject to the clause (e.g. 'You should be part of a team')", keywords: ["you", "you should", "you can", "you must", "be part of a team"] }],
    image_url: `${IMG}/text-d-advert.png`,
  },
  {
    number: "3", sub_number: "3.5",
    text: "Consider TEXTS D and E. In your opinion, which visual image is more effective to promote the campaign? Justify your response.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "TEXT D: the visual image is more effective as it includes diverse sporting codes; the dynamic, overlapping figures represent unity, diversity and equality in sport. OR TEXT E: the human figures are more convincing/relatable; the team members look assertive and confident, evoking pride in national sporting success.",
    marking_notes: "Credit valid alternative/mixed responses for either TEXT D or TEXT E. Award 3 marks for a justification of TWO ideas.",
    marking_points: [{ marks: 3, description: "justifies choice of TEXT D or TEXT E with TWO developed ideas (e.g. diverse sports/unity for D, or relatable/confident figures evoking pride for E)", keywords: ["diverse", "unity", "vibrancy", "energy", "relatable", "confident", "pride", "assertive"] }],
    image_url: `${IMG}/text-e-advert.png`,
  },

  // QUESTION 4: TEXT F (cartoon)

  {
    number: "4", sub_number: "4.1.1",
    text: "Refer to FRAME 2. What does Elizabeth's response, 'IS THAT ALL?' reveal about her feelings?",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "Elizabeth is disappointed/dissatisfied/unimpressed.",
    marking_notes: "Accept valid alternative responses, in context.",
    marking_points: [{ marks: 1, description: "disappointed/dissatisfied/unimpressed", keywords: ["disappointed", "dissatisfied", "unimpressed", "ungrateful"] }],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Refer to FRAME 2. Suggest why Elizabeth's friend does not respond to her question.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "Elizabeth's friend is shocked/astonished/dumbfounded/taken aback by her arrogance/sense of entitlement/lack of gratitude.",
    marking_notes: "Award 1 mark for 'shocked/astonished/dumbfounded' and 1 mark for the reason (her arrogance/entitlement/lack of gratitude), or 2 marks for noting he does not respond to a rhetorical question.",
    marking_points: [
      { marks: 1, description: "friend is shocked/astonished/dumbfounded/taken aback", keywords: ["shocked", "astonished", "dumbfounded", "taken aback", "speechless"] },
      { marks: 1, description: "reason: her arrogance/entitlement/lack of gratitude, or it is a rhetorical question", keywords: ["arrogance", "entitlement", "lack of gratitude", "ungrateful", "rhetorical question"] },
    ],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Discuss how the visual cue in either FRAME 5 OR FRAME 6 conveys the mother's attitude towards love.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "In FRAME 5, the mother places her hand on her chest, leans forward and is smiling, expressing her romantic view of love. OR In FRAME 6, the mother is staring into the distance with her finger on her chin and clutching her chest, reinforcing her painful longing for someone 'far away'.",
    marking_notes: "Award 2 marks only if the visual cue AND the attitude are both discussed. If the candidate responds to both frames, mark only the first response.",
    marking_points: [{ marks: 2, description: "describes a visual cue (hand on chest, smiling / staring into distance, finger on chin) AND links it to the mother's romantic or longing attitude towards love", keywords: ["hand on her chest", "smiling", "leans forward", "staring into the distance", "finger on her chin", "longing", "far away"] }],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.3",
    text: "Refer to FRAMES 9 and 10. Critically discuss how the interaction between the father and the daughter creates humour in this cartoon.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "In FRAME 9, the father shows his interest/enthusiasm about his wife's views on love and expects a positive response from his daughter. However, in FRAME 10, he is deflated by the girl's curt, unflattering, anti-climactic response. The girl's literal misunderstanding of her mother's explanation creates humour.",
    marking_notes: "Award 3 marks for a critical discussion of BOTH frames and the link to humour.",
    marking_points: [{ marks: 3, description: "discusses the father's anticipation in FRAME 9 and his deflation at the anti-climactic/literal response in FRAME 10, linking this to the humour", keywords: ["anticipation", "expects a positive response", "deflated", "anti-climactic", "anticlimactic", "literal misunderstanding", "humour"] }],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.4",
    text: "Replace 'GOT' (FRAME 1) with a more suitable verb, in context.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "received/were given/were sent/obtained",
    marking_notes: "Accept suitable alternatives, in context. Do NOT accept colloquialisms.",
    marking_points: [{ marks: 1, description: "received/were given/were sent/obtained", keywords: ["received", "were given", "were sent", "obtained"] }],
    image_url: `${IMG}/text-f-cartoon.png`,
  },
  {
    number: "4", sub_number: "4.5",
    text: "Provide the comparative form of 'seriously' (FRAME 7).",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "more (seriously)",
    marking_notes: "Only accept 'more seriously'/'more'.",
    marking_points: [{ marks: 1, description: "more seriously", keywords: ["more seriously", "more"] }],
    image_url: `${IMG}/text-f-cartoon.png`,
  },

  // QUESTION 5: TEXT G (prose with deliberate errors)

  {
    number: "5", sub_number: "5.1",
    text: "Refer to line 1. Provide a synonym for 'returns', in context.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "benefits/gains/profits/rewards/results",
    marking_notes: "Accept a valid alternative, in context.",
    marking_points: [{ marks: 1, description: "benefits/gains/profits/rewards/results", keywords: ["benefits", "gains", "profits", "rewards", "results"] }],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Rewrite the expression 'figure out' (line 2) in Standard English.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Reorganisation",
    model_answer: "determine/consider/calculate/understand/find out",
    marking_notes: "Credit a valid alternative response.",
    marking_points: [{ marks: 1, description: "determine/consider/calculate/understand", keywords: ["determine", "consider", "calculate", "understand", "find out"] }],
  },
  {
    number: "5", sub_number: "5.3",
    text: "Correct the pronoun error in paragraph 1.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "'One' should be changed to 'you' (the world around you).",
    marking_notes: "If 'you' is changed to 'one' throughout instead, that is also acceptable, provided the sentence remains consistent.",
    marking_points: [{ marks: 1, description: "corrects 'one' to 'you' (or consistently to 'one') in 'the world around one/you'", keywords: ["one", "you", "world around"] }],
  },
  {
    number: "5", sub_number: "5.4",
    text: "'… travelling expands your social connections to different people.' (Line 5). Rewrite the above sentence fragment in the passive voice.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Your social connections to different people are expanded by travelling.",
    marking_notes: "Must be grammatically correct passive voice.",
    marking_points: [{ marks: 1, description: "your social connections to different people are expanded by travelling", keywords: ["are expanded by travelling", "expanded by travelling"] }],
  },
  {
    number: "5", sub_number: "5.5",
    text: "Remove the redundancy in paragraph 2.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Reorganisation",
    model_answer: "Remove either 'various' or 'other'/the second 'perspective'.",
    marking_notes: "Accept identification of either redundant word/phrase.",
    marking_points: [{ marks: 1, description: "removes 'various' or 'other', or the repeated 'perspective'", keywords: ["various", "other", "perspective"] }],
  },
  {
    number: "5", sub_number: "5.6",
    text: "Give the function of the hyphen in line 8 ('work-life balance').",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "It forms a compound adjective/compound word, joining two words.",
    marking_notes: "Accept 'compound adjective'/'compound word'/'joins two words'.",
    marking_points: [{ marks: 1, description: "compound adjective/compound word/joins two words", keywords: ["compound adjective", "compound word", "joins two words"] }],
  },
  {
    number: "5", sub_number: "5.7.1",
    text: "'While you grow with travel, you're also improving the world around you – especially if you follow ethical travel practises' (lines 11–12). Explain why the word 'practises' is used incorrectly in this sentence.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "'Practises' with an 's' is a verb; a noun should have been used in this sentence.",
    marking_notes: "Must identify that 'practises' is a verb and a noun is needed.",
    marking_points: [{ marks: 1, description: "'practises' is a verb, but a noun is needed here", keywords: ["verb", "noun"] }],
  },
  {
    number: "5", sub_number: "5.7.2",
    text: "Replace 'practises' with the correct word.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "practices",
    marking_notes: "Only accept 'practices' (with a 'c').",
    marking_points: [{ marks: 1, description: "practices", keywords: ["practices"] }],
  },
  {
    number: "5", sub_number: "5.8.1",
    text: "Refer to lines 12–13: 'You're helping to create jobs – one in ten jobs on the planet are in the travel and tourism industry!' Correct the concord error in the above sentence.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "'are' should be changed to 'is'.",
    marking_notes: "Only accept 'is' as the correction.",
    marking_points: [{ marks: 1, description: "changes 'are' to 'is'", keywords: ["is"] }],
  },
  {
    number: "5", sub_number: "5.8.2",
    text: "Replace the dash with a suitable conjunction without changing the meaning of the sentence: 'You're helping to create jobs – one in ten jobs on the planet are in the travel and tourism industry!'",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Reorganisation",
    model_answer: "You're helping to create jobs because/as/since one in ten jobs on the planet is in the travel and tourism industry!",
    marking_notes: "Credit valid alternatives (because/as/since).",
    marking_points: [{ marks: 1, description: "because/as/since", keywords: ["because", "as", "since"] }],
  },
];

// This paper is in the past — no exam schedule entries.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
