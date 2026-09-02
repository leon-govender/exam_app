// Real DBE past paper: English Home Language P2 (Literature), November 2025,
// National Senior Certificate. Source: official DBE combined question paper
// + marking guidelines PDF (55 pages: QP pages 1-28, memo pages 29-55),
// downloaded from stanmorephysics.com and confirmed genuine (official DBE
// crest, "MARKING GUIDELINES", "Copyright reserved" on every page — not a
// third-party publisher's memo). Read directly from the extracted text dump,
// with the original PDF available as a fallback for page-image checks (not
// needed here — no diagrams in this paper, pure text).
//
// ============================ SCOPE (IMPORTANT) ============================
// The real P2 paper offers students a CHOICE: TWO of four prescribed poems
// (plus a compulsory unseen poem), and ONE of two novels (The Picture of
// Dorian Gray OR Life of Pi), and ONE of three dramas (Hamlet OR Othello OR
// The Crucible) — 80 marks total on exam day. This app has no "answer one of
// several" mechanism, so every seeded question would be presented to the
// student. The user's son studied The Picture of Dorian Gray (novel) and
// Hamlet (drama) specifically, so this file is DELIBERATELY SCOPED to:
//   - ALL of Section A (Poetry): Questions 1-5 (all four prescribed poems,
//     not just two, plus the compulsory unseen poem) — poetry questions are
//     short and don't depend on which novel/drama a student studied, so
//     there is no reason to omit any of them.
//   - Section B (Novel): Questions 6 and 7 (The Picture of Dorian Gray only)
//   - Section C (Drama): Questions 10 and 11 (Hamlet only)
// Life of Pi (Questions 8-9), Othello (Questions 12-13) and The Crucible
// (Questions 14-15) are DELIBERATELY EXCLUDED — not ingested, not read
// closely beyond confirming their question numbers to skip them.
//
// This yields 5 x 10 + 4 x 25 = 150 scoped marks, MORE than the real exam's
// 80-mark sitting (which only requires 2 of the 4 prescribed poems + the
// unseen poem + 1 of Q6/7 + 1 of Q10/11). That is intentional: this is a
// practice bank covering everything relevant to the son's specific
// setworks, not a simulation of exam-day choice constraints. `paper.
// total_marks` below is therefore 150 (the scoped total), not the real
// paper's cover-page "MARKS: 80". `duration_minutes` is kept at the real
// exam's 150 minutes (2 1/2 hours) even though the scoped content exceeds
// what fits in a real sitting — the son can pace himself across sessions.
//
// =========================== GRADING APPROACH ==============================
// CONTEXTUAL questions (2, 3, 4, 5, 7, 11): the official memo gives
// itemized, point-by-point accepted answers for these short-answer
// literary-analysis questions (identify a technique, explain an effect,
// interpret a line, etc.). `marking_points` below are transcribed directly
// from those itemized memo answers, with marks summing exactly to each
// sub-question's own allocation.
//
// ESSAY questions (1, 6, 10): in the real exam these are marked holistically
// against a generic literary-essay rubric (CONTENT / STRUCTURE AND
// LANGUAGE — see the memo's own rubric on its pages 26-27, reproduced in
// summary in the comments above each essay question below: for the 10-mark
// poetry essay, 6 marks content + 4 marks structure & language; for the
// 25-mark novel/drama essays, 15 marks content + 10 marks structure &
// language), NOT a fixed list of "correct" facts, since each is an open
// argumentative essay. `marking_points` for these three questions are a
// DELIBERATE, DOCUMENTED APPROXIMATION of that holistic rubric as a small
// number of broad criteria, built from the key content/arguments the memo's
// own essay guidance highlights (its "VALID"/bulleted discussion points)
// plus generic structure/language criteria drawn from the rubric itself.
// This is NOT a literal transcription of an itemized memo list (the memo
// does not provide one for essays) — it is this app's best attempt to make
// a holistic rubric gradeable with `marking_points`.
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
    key: "poetry",
    name: "Poetry",
    caps_term: null as string | null,
    textbook_ref: "English Home Language — Prescribed and Unseen Poetry",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+english+home+language+poetry+analysis",
  },
  {
    key: "dorian_gray",
    name: "The Picture of Dorian Gray",
    caps_term: null as string | null,
    textbook_ref: "English Home Language — The Picture of Dorian Gray (Oscar Wilde)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=the+picture+of+dorian+gray+grade+12+study+guide",
  },
  {
    key: "hamlet",
    name: "Hamlet",
    caps_term: null as string | null,
    textbook_ref: "English Home Language — Hamlet (William Shakespeare)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=hamlet+grade+12+study+guide",
  },
];

export const paper = {
  year: 2025,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 150,
  total_marks: 150,
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

import type { MarkingPoint } from "../../src/lib/grader";

export const questions: QuestionSeed[] = [
  // ============================================================
  // QUESTION 1: 'SOLITUDE' (Ella Wheeler Wilcox) — ESSAY QUESTION (10 marks)
  // Holistic-rubric approximation (see file header): 6 marks CONTENT,
  // 4 marks STRUCTURE AND LANGUAGE, built from the memo's own bulleted
  // discussion points and its generic essay rubric — not an itemized memo
  // list (the memo gives none for essays).
  // ============================================================
  {
    number: "1", sub_number: null,
    text: "Read the poem 'Solitude' by Ella Wheeler Wilcox. In this poem, the speaker expresses the idea that, despite moments of connection to others, people are ultimately alone. With close reference to imagery, structure and tone, critically discuss the above statement in relation to this poem. Your response should take the form of a well-constructed essay of 250-300 words (about ONE page).",
    marks: 10, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay engages with the paradox of connection and isolation the poem explores: joy invites others in ('Laugh, and the world laughs with you') while sorrow is faced alone ('Weep, and you weep alone'), and this pattern holds through rejoicing/grieving, feasting/fasting, and finally death itself ('no man can help you die'). The essay should analyse specific imagery (e.g. the personified earth with 'trouble enough of its own', the echoes that answer song but shrink from sighs, the 'narrow aisles of pain'), comment on the poem's structure (each stanza built from a contrasting pair of actions, with indentation marking the isolating half) and discuss its reflective/melancholic/resigned tone (or, validly, a critical/satirical reading of society's shallowness), reaching a coherent conclusion that ultimately, despite connection, solitude — especially in suffering and death — is inescapable.",
    marking_notes: "This essay is marked holistically in the real exam against a rubric (CONTENT 6 marks: interpretation of topic, depth of argument, textual support; STRUCTURE AND LANGUAGE 4 marks: coherent structure, mature/correct language, tone and style), not against an itemized answer key. The marking_points below approximate that rubric as broad criteria, drawn from the memo's own guideline discussion of the poem (paradox of connection/isolation, imagery, structure, tone) — this is a deliberate simplification for automated grading, not a literal memo transcription.",
    marking_points: [
      { marks: 2, description: "Engages with the central paradox of the statement: moments of connection (laughter, rejoicing, feasting, giving) contrast with the speaker's insistence that sorrow, grief and ultimately death are faced alone", keywords: ["alone", "solitary", "isolation", "connection", "weep alone", "die alone", "no man can help you die"] },
      { marks: 2, description: "Analyses at least one specific image or figure of speech with textual reference (e.g. personification of the 'sad old earth', the echoes that answer joy but not sighs, the feast/fast contrast, or the 'narrow aisles of pain')", keywords: ["personification", "earth", "echoes", "feast", "fast", "narrow aisles of pain", "imagery"] },
      { marks: 2, description: "Comments on the poem's structure (contrasting pairs within each stanza, indented lines marking the isolating half, rhyme/rhythm) and identifies its tone (reflective/melancholic/resigned, or validly critical/satirical of society's shallowness) with an explanation of effect", keywords: ["structure", "stanza", "indented", "tone", "reflective", "melancholic", "resigned", "satirical"] },
      { marks: 2, description: "Essay has a coherent structure: a clear introduction that engages the topic, a logically developed body, and a supported conclusion, within the 250-300 word guideline", keywords: ["introduction", "conclusion", "structure", "coherent"] },
      { marks: 2, description: "Demonstrates control of language, tone and style appropriate to a literary essay, with largely correct grammar, spelling and punctuation", keywords: ["language", "style", "grammar", "tone"] },
    ],
  },

  // ============================================================
  // QUESTION 2: 'IT IS A BEAUTEOUS EVENING, CALM AND FREE' (William Wordsworth)
  // — CONTEXTUAL QUESTION (10 marks)
  // ============================================================
  {
    number: "2", sub_number: "2.1",
    text: "Read the poem 'It Is a Beauteous Evening, Calm and Free' by William Wordsworth. What does the word, 'tranquillity' (line 4) suggest about the setting?",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The word 'tranquillity' refers to the calmness and peacefulness of the evening. Nature is harmonious/serene, as reflected in the stillness of the sea and the setting sun; time seems to have slowed down, creating a quiet, meditative setting.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "The setting is calm/peaceful/serene, reflected in the stillness of the sea and setting sun", keywords: ["calm", "peaceful", "serene", "stillness"] },
      { marks: 1, description: "Time seems to have slowed down, creating a quiet, meditative setting", keywords: ["slowed down", "meditative", "quiet"] },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Account for the speaker's reference to 'a nun' (line 2) in the context of the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Reorganisation",
    model_answer: "Nuns' devotion to and worship of God consume them; they are quiet and adoring while reflecting at evening prayers, and it is this quality that the speaker associates with his awe for the beauty of nature at this time of day. Just as a nun feels the presence of God, so too does the speaker as he appreciates the wonders of nature that surround him.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "A nun is quiet, devout and adoring, associated with reverence and worship of God", keywords: ["nun", "devotion", "worship", "adoration"] },
      { marks: 1, description: "The comparison shows the speaker feels the same awe/reverence for nature's beauty as a nun feels for God", keywords: ["awe", "reverence for nature", "speaker's appreciation"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Refer to lines 6-8: 'the mighty Being ... like thunder - everlastingly.' Identify the figure of speech in 'the mighty Being is awake'.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Personification.",
    marking_notes: "Accept only personification.",
    marking_points: [{ marks: 1, description: "Personification", keywords: ["personification"] }],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Discuss the effectiveness of the image in lines 6-8.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The image of the sea alludes to God's presence in nature. The ebb and flow of the tides is indicative of his involvement in all living things. The sound of the waves is compared to 'thunder', which suggests God's power, while the vastness of the ocean implies God's constant presence/omnipotence. The comparison effectively demonstrates the characteristics of a 'mighty' God, who is ever-present, everlasting and all powerful.",
    marking_notes: "Award 2 marks for a discussion of the effectiveness of the image.",
    marking_points: [
      { marks: 2, description: "The sea/thunder image conveys God's power, constant presence and omnipotence, effectively evoking a mighty, ever-present, everlasting God", keywords: ["thunder", "power", "omnipotence", "ever-present", "everlasting", "mighty"] },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "By referring to TWO examples of diction in the sestet, critically discuss the realisation to which the speaker comes.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The speaker realises that, unlike his conscious awareness ('solemn thought') of God's presence in nature, his daughter is instinctively in tune with God. By virtue of her being a child, she is naturally close ('dear') to God. She does not appear to be amazed ('appear untouched') by the extraordinary scenery because feeling close to God is an everyday experience for her. Her child-like innocence signals her constant connection to, and appreciation of, the power of nature and, therefore, God. He acknowledges that children have direct access to God ('inner shrine'), unlike adults ('God being with thee when we know it not'), and are naturally reverent ('worshipp'st at the temple'). 'Abraham's bosom' implies she is always in a state of blessedness. He longs for the same natural and spiritual connection.",
    marking_notes: "Award 1 mark for the diction and 2 marks for the critical discussion.",
    marking_points: [
      { marks: 1, description: "Identifies two examples of diction from the sestet (e.g. 'solemn thought', 'dear', 'untouched', 'inner shrine', 'Abraham's bosom', 'worshipp'st')", keywords: ["solemn thought", "dear", "untouched", "inner shrine", "abraham's bosom", "worshipp'st"] },
      { marks: 2, description: "Critically discusses the realisation that the child is instinctively/naturally close to God, unlike the adult speaker's conscious awareness, and that the speaker longs for the same natural spiritual connection", keywords: ["instinctively close to god", "child-like innocence", "naturally reverent", "longs for the same connection"] },
    ],
  },

  // ============================================================
  // QUESTION 3: 'POEM OF RETURN' (Jofre Rocha) — CONTEXTUAL QUESTION (10 marks)
  // ============================================================
  {
    number: "3", sub_number: "3.1",
    text: "Read the poem 'Poem of Return' by Jofre Rocha. What does the title of the poem suggest about the speaker's feelings? Give TWO reasons.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The word 'return' in the title suggests that the speaker is homesick and determined/anxious/eager/desperate/longing to return to his home country. The poem is a reflection on the loneliness of his exile/on his expectations for his homecoming, and he feels guilty at leaving the country during its fight for freedom.",
    marking_notes: "Award 1 mark for a feeling and 1 mark for the reason/s.",
    marking_points: [
      { marks: 1, description: "The speaker is homesick / longs to return to his home country", keywords: ["homesick", "longing", "eager to return"] },
      { marks: 1, description: "Reason: reflects the loneliness of exile / expectations of homecoming / guilt at leaving during the struggle", keywords: ["loneliness of exile", "guilt", "expectations", "homecoming"] },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Account for the repetition of the phrase, 'Bring me' throughout the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Reorganisation",
    model_answer: "The repetition of the phrase, 'Bring me' emphasises what the speaker actually wants rather than praise and recognition. His guilt at not being present during the struggle drives him to acknowledge the pain, suffering and deprivation experienced by those who remained.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Emphasises what the speaker actually wants (the truth of suffering) rather than praise/flowers/recognition", keywords: ["emphasises", "not flowers", "praise", "recognition"] },
      { marks: 1, description: "Reflects his guilt, driving him to acknowledge the pain, suffering and deprivation experienced by those who remained", keywords: ["guilt", "pain", "suffering", "deprivation"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Refer to line 14: 'and a thread of anger snaking from their eyes.' Identify the figure of speech in this line.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Metaphor.",
    marking_notes: "Accept only metaphor.",
    marking_points: [{ marks: 1, description: "Metaphor", keywords: ["metaphor"] }],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Discuss the effectiveness of the image in line 14.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The men's 'anger' transforms into a snake. This effectively conveys the danger that their deaths will generate. Just as a snake is poisonous, their deaths will spark anger in those left behind and will serve as inspiration to continue the struggle for freedom. The 'thread of anger' connects them to the fighters who will demand justice on their behalf.",
    marking_notes: "Award 2 marks for a discussion of the effectiveness of the image.",
    marking_points: [
      { marks: 2, description: "The snake image conveys the danger/poison of their anger, sparking those left behind to continue the struggle and demand justice", keywords: ["snake", "poisonous", "spark anger", "continue the struggle", "justice"] },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Critically discuss the changing tone throughout the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Initially an imperative tone is created when the speaker issues the command: 'do not bring me flowers' and repeats his assertion of what he actually wants. The tone changes to melancholic/sad/regretful as the speaker recognises the 'mourning', suffering and loss endured by his compatriots while he is in exile. The tone then shifts to one of defiance/anger, reflected in the description of the fallen 'heroes', ominously suggesting the threat of an imminent uprising.",
    marking_notes: "Award 2 marks for two examples of the changing tone and 1 mark for the critical discussion.",
    marking_points: [
      { marks: 1, description: "Initial imperative tone: the command 'do not bring me flowers' asserting what the speaker actually wants", keywords: ["imperative", "do not bring me flowers", "command"] },
      { marks: 1, description: "Shifts to a melancholic/sad/regretful tone recognising the mourning, suffering and loss endured by his compatriots", keywords: ["melancholic", "sad", "regretful", "mourning", "loss"] },
      { marks: 1, description: "Shifts finally to a defiant/angry tone in the description of the fallen heroes, suggesting an imminent uprising", keywords: ["defiant", "anger", "heroes", "uprising"] },
    ],
  },

  // ============================================================
  // QUESTION 4: 'THIS WINTER COMING' (Karen Press) — CONTEXTUAL QUESTION (10 marks)
  // ============================================================
  {
    number: "4", sub_number: "4.1",
    text: "Read the poem 'This Winter Coming' by Karen Press. Refer to lines 6-7: 'the seagulls will not land / under this sky, this shroud falling'. What does the word, 'shroud' reveal about 'this sky'?",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The word 'shroud' suggests that the rain clouds in the sky are widespread/cover a vast area/hiding the light/making visibility poor. The sky is dark/ominous/heavy/oppressive and appears to envelop the earth. (Credit candidates who allude to the political climate.)",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "The rain clouds are widespread, covering a vast area / hiding the light / making visibility poor", keywords: ["widespread", "covers", "hiding the light", "visibility"] },
      { marks: 1, description: "The sky is dark/ominous/heavy/oppressive and seems to envelop the earth (allusion to the political climate credited)", keywords: ["dark", "ominous", "oppressive", "envelop", "political climate"] },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Account for the repetition of the phrase, 'who is not frightened?' throughout the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Reorganisation",
    model_answer: "The repetition highlights the ominous nature of the coming storm. It emphasises the fact that the storm should be feared as it promises to be devastating. It also implies that everyone will be affected and that people who are not yet frightened should be. There is a pervasive feeling of fear conveyed by the question. (Credit candidates who allude to the political climate.)",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Highlights the ominous, devastating nature of the coming storm, which should be feared", keywords: ["ominous", "devastating", "feared"] },
      { marks: 1, description: "Implies everyone will be affected, conveying a pervasive feeling of fear (political climate allusion credited)", keywords: ["everyone affected", "pervasive fear", "political climate"] },
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Refer to lines 26-27: 'their bare bodies / a raging fire of dead children'. Identify the figure of speech used in line 27.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Metaphor/Hyperbole.",
    marking_notes: "Accept metaphor or hyperbole.",
    marking_points: [{ marks: 1, description: "Metaphor or hyperbole", keywords: ["metaphor", "hyperbole"] }],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Discuss the effectiveness of the image in lines 26-27.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The 'bare bodies' of the children are compared to a 'raging fire' indicating how their anger is fuelling the resistance to oppression. This response is motivated by years of suffering and the deaths of their peers. Despite their vulnerable and hopeless state, the children willingly sacrifice their lives to fight apartheid. The image is effective because it vividly conveys the loss of their innocence as well as the horror and tragedy of these oppressive conditions.",
    marking_notes: "Award 2 marks for a discussion of the effectiveness of the image.",
    marking_points: [
      { marks: 2, description: "The 'raging fire' image conveys the children's anger fuelling resistance, and vividly conveys the loss of innocence and horror/tragedy of the oppressive conditions", keywords: ["raging fire", "anger", "resistance", "loss of innocence", "horror", "tragedy"] },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Refer to lines 9-16: 'in every part ... drown the world'. With close reference to TWO examples of diction, critically discuss the tone in these lines.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "There is a tone of utter despair/sorrow/sadness/despondency in the third stanza. It depicts the harsh realities of life as the women are 'sad' and the children are 'crying'. The wretched state in which the oppressed exist is underscored by the world being 'so hungry'. A hopeless tone is created by referring to 'slow steps' and 'tide of sadness'. The word, 'tolling' introduces an ominous/foreboding tone because of its association with death ('drown'); this is emphasised by the imperative, 'will'. Candidates might refer to a bitter/resentful tone reflected in 'madam's house is clean', while the poor face harsh living conditions.",
    marking_notes: "Award 1 mark for the diction, 1 mark for the tone and 1 mark for the critical discussion.",
    marking_points: [
      { marks: 1, description: "Identifies two examples of diction from lines 9-16 (e.g. 'sad', 'crying', 'so hungry', 'slow steps', 'tide of sadness', 'tolling')", keywords: ["sad", "crying", "so hungry", "slow steps", "tide of sadness", "tolling"] },
      { marks: 1, description: "Identifies the tone as one of despair/sorrow/sadness/despondency (or validly bitter/resentful)", keywords: ["despair", "sorrow", "sadness", "despondency", "bitter", "resentful"] },
      { marks: 1, description: "Critically discusses how the diction creates this tone, e.g. 'tolling' evoking death/foreboding, or the contrast with 'madam's house is clean'", keywords: ["ominous", "foreboding", "death", "contrast", "madam's house"] },
    ],
  },

  // ============================================================
  // QUESTION 5: 'THE TREES' (Philip Larkin, unseen poem) — CONTEXTUAL QUESTION
  // (10 marks, COMPULSORY in the real exam)
  // ============================================================
  {
    number: "5", sub_number: "5.1",
    text: "Read the unseen poem 'The Trees' by Philip Larkin. What does the phrase, 'relax and spread' (line 3) tell us about the buds?",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The phrase, 'relax and spread' suggests that the buds are opening up to reveal their new growth. It conveys a sense of ease and natural progression as the buds unfold into leaves. The buds might be described as blooming/blossoming out of their tightly-bound nodule into fully unfurled leaves.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "The buds are opening up to reveal their new growth", keywords: ["opening up", "new growth"] },
      { marks: 1, description: "Conveys a sense of ease and natural progression as the buds unfold/blossom into leaves", keywords: ["ease", "natural progression", "unfold", "blossom"] },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Refer to lines 5-6: 'Is it that they are born again / And we grow old?' Explain how this question conveys the speaker's attitude towards the trees.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The speaker's attitude towards the trees might be envious/indignant/disgruntled/resentful/admiring as they seem to be superior in that they are able to renew themselves whilst man grows older. The trees are able to hide the effect of ageing whilst man is not.",
    marking_notes: "Award 1 mark for attitude and 1 mark for an explanation thereof.",
    marking_points: [
      { marks: 1, description: "Identifies an attitude: envious/indignant/disgruntled/resentful/admiring", keywords: ["envious", "resentful", "admiring", "indignant"] },
      { marks: 1, description: "Explains that trees seem superior, able to renew/hide ageing, while man grows old and cannot", keywords: ["renew", "hide ageing", "superior", "grow old"] },
    ],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Refer to lines 9-10: 'Yet still the unresting castles thresh / In fullgrown thickness every May.' Identify the figure of speech in line 9.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Metaphor/Personification.",
    marking_notes: "Accept metaphor or personification.",
    marking_points: [{ marks: 1, description: "Metaphor or personification", keywords: ["metaphor", "personification"] }],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Discuss the effectiveness of the image in lines 9-10.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The trees' growth is a continuous cycle of strenuous work, suggested by 'unresting' and 'thresh'. The trees are compared to castles as they grow thick/strong/imposing; they are fortified through their perennial cycle of growth. The image is effective as it evokes a vivid image of the trees' majestic and unceasing ('unresting') growth, causing the trees to become thicker and stronger each year. It emphasises the continuous cycle of renewal for the trees/nature and their resilience to withstand the destructive effects of time.",
    marking_notes: "Award 2 marks for a discussion of the effectiveness of the image.",
    marking_points: [
      { marks: 2, description: "The 'castles' image conveys the trees' majestic, unceasing, fortified growth, emphasising continuous renewal and resilience against time", keywords: ["castles", "unresting", "thresh", "majestic", "renewal", "resilience"] },
    ],
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "Refer to lines 11-12: 'Last year is dead, they seem to say, / Begin afresh, afresh, afresh.' Identify the tone of line 12.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Positive/Optimistic/Encouraging/Hopeful.",
    marking_notes: "Accept any one of: positive, optimistic, encouraging, hopeful.",
    marking_points: [{ marks: 1, description: "Positive/optimistic/encouraging/hopeful", keywords: ["positive", "optimistic", "encouraging", "hopeful"] }],
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "Critically discuss the effect of the repetition of 'afresh' in line 12.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The repetition of 'afresh' reinforces the idea of the resilience of all living things in contrast to their short lives. The natural world, despite death, accepts renewal, as every end is an opportunity to begin again.",
    marking_notes: "Award 2 marks only if there is a critical discussion.",
    marking_points: [
      { marks: 2, description: "Reinforces the resilience of living things and the idea that, despite death, nature accepts renewal — every end is an opportunity to begin again", keywords: ["resilience", "renewal", "begin again", "despite death"] },
    ],
  },

  // ============================================================
  // QUESTION 6: THE PICTURE OF DORIAN GRAY — ESSAY QUESTION (25 marks)
  // Holistic-rubric approximation (see file header): 15 marks CONTENT,
  // 10 marks STRUCTURE AND LANGUAGE, built from the memo's own "VALID"
  // bulleted discussion points and its generic essay rubric — not an
  // itemized memo list (the memo gives none for essays).
  // ============================================================
  {
    number: "6", sub_number: null,
    text: "Dorian Gray is too morally weak to stop his nature from changing. With close reference to the novel, critically discuss the validity of the above statement. Your response should take the form of a well-constructed essay of 400-450 words (2-2 1/2 pages).",
    marks: 25, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay traces how Dorian's initial innocence and impressionability leave him susceptible to Lord Henry's hedonistic influence, and how his wish for eternal youth (with the portrait ageing in his place) frees him to indulge without visible consequence. It should discuss key incidents of moral decline — his callous rejection of Sibyl Vane leading to her suicide, his growing paranoia and concealment of the portrait, his murder of Basil Hallward, his blackmail and destruction of Alan Campbell, and his eventual destruction of the portrait and death — as evidence that, despite moments of regret, his weaknesses repeatedly pull him back into hedonism. A critical essay also engages with the counter-argument: that external forces (Lord Henry's manipulation, Basil's portrait, the Yellow Book) merely reveal rather than cause his latent moral weakness, and that his moments of self-reflection suggest his nature was never wholly changed. The essay should reach a clear, supported position on the statement's validity.",
    marking_notes: "This essay is marked holistically in the real exam against a rubric (CONTENT 15 marks: interpretation of topic, depth of argument, textual support; STRUCTURE AND LANGUAGE 10 marks: coherent structure, mature/correct language, tone and style), not against an itemized answer key. The marking_points below approximate that rubric as broad criteria, drawn from the memo's own VALID/INVALID guideline discussion — this is a deliberate simplification for automated grading, not a literal memo transcription.",
    marking_points: [
      { marks: 4, description: "Explains Dorian's initial innocence/impressionability and susceptibility to Lord Henry's hedonistic worldview, and the significance of the wish that lets the portrait age in his place", keywords: ["innocence", "impressionable", "lord henry", "hedonism", "wish", "portrait ages"] },
      { marks: 4, description: "Traces specific incidents of moral decline with textual reference (e.g. Sibyl Vane's death, hiding the portrait, murdering Basil Hallward, blackmailing/destroying Alan Campbell) as evidence of weakening moral resolve", keywords: ["sibyl vane", "basil hallward", "alan campbell", "murder", "blackmail", "moral decline"] },
      { marks: 4, description: "Critically evaluates the validity of the statement, engaging with the counter-argument that external influences (Lord Henry, the portrait, the Yellow Book) merely reveal rather than change his latent nature, and/or that his regret and destruction of the portrait suggest some retained moral awareness", keywords: ["external influence", "latent weakness", "regret", "destroys the portrait", "moral awareness"] },
      { marks: 3, description: "Reaches a coherent, well-supported conclusion on the statement's validity, drawing the argument together", keywords: ["conclusion", "validity", "moral weakness"] },
      { marks: 5, description: "Essay has a coherent structure: clear introduction, well-developed and logically organised body paragraphs, and a strong conclusion, within the 400-450 word guideline", keywords: ["introduction", "conclusion", "structure", "paragraphs"] },
      { marks: 5, description: "Demonstrates mature control of language, tone and style appropriate to a literary essay, with largely correct grammar, spelling and punctuation", keywords: ["language", "style", "tone", "grammar"] },
    ],
  },

  // ============================================================
  // QUESTION 7: THE PICTURE OF DORIAN GRAY — CONTEXTUAL QUESTION (25 marks)
  // ============================================================
  {
    number: "7", sub_number: "7.1",
    text: "Read Extract A (Chapter 6, Dorian announces his engagement to Sibyl Vane). Refer to lines 5-6: 'Your portrait of ... of other people.' Briefly describe how the portrait has come to be painted.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Reorganisation",
    model_answer: "Having met Dorian at a party, Basil is captivated by his beauty and innocence. Basil is inspired and paints the portrait as an artistic tribute.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Basil met Dorian and was captivated by his beauty and innocence", keywords: ["basil met dorian", "captivated", "beauty", "innocence"] },
      { marks: 1, description: "Basil, inspired, painted the portrait as an artistic tribute", keywords: ["inspired", "painted the portrait", "artistic tribute"] },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Refer to line 3: 'Oh, she is better than good - she is beautiful'. Explain how Sibyl's beauty works against her.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "Sibyl's beauty attracts Dorian and causes him to idealise and idolise her, but when her acting falters due to the genuine love she feels, he cruelly rejects her, leading her to commit suicide. Her physical beauty becomes a curse, as it binds her fate to Dorian's superficial desires.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Her beauty causes Dorian to idealise/idolise her, but when her acting falters he cruelly rejects her", keywords: ["idealise", "idolise", "acting falters", "rejects her"] },
      { marks: 1, description: "Her beauty becomes a curse, binding her fate to Dorian's superficial desires and leading to her suicide", keywords: ["curse", "superficial", "suicide"] },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Refer to line 8: 'My dear Harry ... said the lad'. What does the word, 'lad' imply about Dorian?",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "The word 'lad' implies Dorian's youthful innocence and immaturity. While he has not yet been corrupted by Lord Henry's influence, the word is a reminder that he is impressionable and naive.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Implies Dorian's youthful innocence and immaturity, not yet corrupted by Lord Henry", keywords: ["youthful", "innocence", "immaturity", "not yet corrupted"] },
      { marks: 1, description: "A reminder that he is impressionable and naive", keywords: ["impressionable", "naive"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Refer to lines 1-2: 'I don't want ... ruin his intellect.' Discuss the irony of Basil's words in the context of the novel.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Basil believes Dorian to be pure and he fears that a person from the lower class will cause a stain on Dorian's reputation and character. However, it is Dorian who proves to be the 'vile creature' who destroys Sibyl. (Alternatively: it is ironic that it is Basil's own portrait and Lord Henry's theories of hedonism/aestheticism that are the catalyst for Dorian's ruination; or that it is not an external influence but Dorian's own decision-making that leads to his degradation.)",
    marking_notes: "Award 3 marks for a clear discussion of any ONE of the memo's examples of irony.",
    marking_points: [
      { marks: 3, description: "Clearly discusses one valid instance of irony: Basil fears Sibyl will corrupt/ruin Dorian, yet it is Dorian who proves to be the 'vile creature' who destroys her (or: it is Basil's own portrait/Lord Henry's influence, or Dorian's own choices, that cause his ruin)", keywords: ["irony", "vile creature", "destroys sibyl", "own portrait", "own decision-making"] },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Discuss what this extract reveals about Basil's character.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "In this extract, Basil is portrayed as cautious, caring and protective. His concern for Dorian's well-being and his disapproval of Dorian's engagement to an unknown fiancee reflect his moral and intellectual values. Basil's reliance on Lord Henry's opinion indicates his respect for Henry's judgement, despite their differing views. In not forgiving Dorian for telling Lord Henry and not him about his engagement, Basil displays his petulant/sulky nature. Basil is hurt as his devotion for Dorian is not reciprocated, leading to his feeling neglected, jealous and envious of the growing bond between Dorian and Lord Henry.",
    marking_notes: "Award 3 marks for two ideas well discussed.",
    marking_points: [
      { marks: 2, description: "Basil is cautious, caring and protective of Dorian, shown by his concern and disapproval of the hasty engagement", keywords: ["cautious", "caring", "protective", "concern", "disapproval"] },
      { marks: 1, description: "Basil is also petulant/hurt/jealous that Dorian told Lord Henry and not him, revealing his unreciprocated devotion", keywords: ["petulant", "hurt", "jealous", "unreciprocated", "envious"] },
    ],
  },
  {
    number: "7", sub_number: "7.6",
    text: "Read Extract B (Chapter 14, Dorian awaits Alan Campbell). Place this extract in context.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Reorganisation",
    model_answer: "Before going to Paris, Basil visits Dorian to confront him about the rumours he has heard about Dorian. In a fit of rage, Dorian murders Basil. Afterwards, Dorian realises he will need help disposing of the body and he writes a letter to Alan Campbell. The following morning, he sends his valet to deliver this letter.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Basil visited Dorian to confront him about rumours, and Dorian murdered him in a fit of rage", keywords: ["basil visits", "confront", "murders basil", "rage"] },
      { marks: 1, description: "Dorian needs help disposing of the body, so writes to and sends for Alan Campbell", keywords: ["dispose of the body", "letter", "alan campbell", "valet"] },
    ],
  },
  {
    number: "7", sub_number: "7.7",
    text: "What are the implications of the phrase, 'a beautiful caged thing' (line 3) in relation to Dorian?",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "This phrase highlights Dorian's loss of freedom. His beauty remains, but he is trapped by his own sins and paranoia. Dorian, despite his outward beauty, feels trapped by his own actions and the consequences of his hedonistic lifestyle. The image objectifies Dorian, highlighting the contrast between his appearance and his inner turmoil.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Highlights Dorian's loss of freedom; he is trapped by his own sins/paranoia despite his beauty", keywords: ["loss of freedom", "trapped", "sins", "paranoia"] },
      { marks: 1, description: "The image objectifies Dorian, contrasting his outward appearance with his inner turmoil", keywords: ["objectifies", "contrast", "inner turmoil"] },
    ],
  },
  {
    number: "7", sub_number: "7.8",
    text: "Refer to lines 12-15: 'Then, suddenly, Time ... made him stone.' Discuss how these lines influence your attitude to Dorian as he contemplates his future.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "The reader might feel revulsion for Dorian because he is trying to avoid the consequences of his actions; his depravity is at its lowest point and he deserves to feel guilty, agitated and horrified given his murder of Basil and the suffering he has caused others. Alternatively, the reader might feel pity for Dorian, as he fears the consequences of his actions and this overwhelms and immobilises him, petrified at the thought that his future might be ruined by his rash actions.",
    marking_notes: "Award 1 mark for attitude and 2 marks for a well-developed discussion thereof.",
    marking_points: [
      { marks: 1, description: "States an attitude: revulsion (or, alternatively, pity) towards Dorian", keywords: ["revulsion", "pity", "disgust"] },
      { marks: 2, description: "Well-developed discussion linking the attitude to Dorian's avoidance of consequences/guilt (revulsion), or his fear and immobilisation at the thought of ruin (pity)", keywords: ["avoid consequences", "guilt", "fear", "immobilised", "ruined"] },
    ],
  },
  {
    number: "7", sub_number: "7.9",
    text: "Refer to line 17: 'I had intended never to enter your house again, Gray.' Comment on the change Alan Campbell undergoes since the start of his association with Dorian.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Alan Campbell is introduced as a former friend of Dorian Gray. He is a talented chemist and musician, known for his scientific acumen and artistic sensibilities. However, his association with Dorian has spoiled his reputation. As a result of the souring relationship with Dorian, Alan becomes withdrawn/reclusive and dour. He gives up his music to focus on scientific study. Alan is forced to compromise his morals under the duress of blackmail, leading to his profound internal conflict. The weight of his crime causes him to commit suicide. Alan's change emphasises the corrupting influence Dorian has on those around him.",
    marking_notes: "Award 3 marks only if a cogent comment is made.",
    marking_points: [
      { marks: 3, description: "Comments cogently on Alan's change from talented chemist/musician and friend to withdrawn, morally compromised (blackmailed) figure who ultimately commits suicide, emphasising Dorian's corrupting influence", keywords: ["chemist", "musician", "withdrawn", "blackmail", "suicide", "corrupting influence"] },
    ],
  },
  {
    number: "7", sub_number: "7.10",
    text: "Dorian only has himself to blame for the 'horror' (line 15) he faces. Based on your knowledge of the novel as a whole, critically discuss the extent to which you agree with this statement.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "AGREE: Dorian's self-absorbed nature leads to his living a life of hedonism; he makes immoral choices and is responsible for the 'horror' he now faces, evident from his making the wish, rejecting Sibyl, using the Yellow Book as a guide, and murdering Basil, all done on his own volition — he refuses to take responsibility and ignores his own guilt. OR DISAGREE: Basil's portrait awakens Dorian's revelation of his own beauty and grants him freedom from consequence, while Lord Henry's theories of hedonism/aestheticism, his framing of Sibyl's suicide, and his gift of the Yellow Book are external catalysts responsible for the horror Dorian faces.",
    marking_notes: "Award 3 marks only if there is a critical discussion (agree, disagree, or a credited valid/mixed response).",
    marking_points: [
      { marks: 3, description: "Critically discusses the extent of agreement, with valid textual support either that Dorian's own choices (the wish, rejecting Sibyl, the Yellow Book, murdering Basil) make him responsible, or that external influences (Basil's portrait, Lord Henry's hedonism/aestheticism, the Yellow Book) are responsible, or a credited mixed response", keywords: ["own choices", "responsible", "external influences", "lord henry", "yellow book", "portrait"] },
    ],
  },

  // ============================================================
  // QUESTION 10: HAMLET — ESSAY QUESTION (25 marks)
  // Holistic-rubric approximation (see file header): 15 marks CONTENT,
  // 10 marks STRUCTURE AND LANGUAGE, built from the memo's own bulleted
  // discussion points and its generic essay rubric — not an itemized memo
  // list (the memo gives none for essays).
  // ============================================================
  {
    number: "10", sub_number: null,
    text: "Various characters in Hamlet use deception and disguise to achieve their goals. Critically discuss the above statement in relation to the play. Make reference to a minimum of THREE characters in your response. Your response should take the form of a well-constructed essay of 400-450 words (2-2 1/2 pages).",
    marks: 25, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay discusses at least three characters' use of deception. Claudius's murder of King Hamlet sets the deceit in motion: he charms Gertrude into marriage, presents himself as a loving stepfather and competent ruler, and plots against Hamlet using Polonius, Ophelia, and Rosencrantz and Guildenstern to spy on him, sending him to England under a pretence, and arranging the poisoned duel with Laertes. Hamlet feigns madness ('antic disposition') to conceal his intentions and verify the Ghost's claim, and stages The Mousetrap as a form of disguised confrontation, though this causes collateral damage, including Ophelia's descent into madness. A third character should be discussed with similar detail — e.g. Polonius disguising his self-interest as loyal service and using Ophelia to spy; Rosencrantz and Guildenstern betraying their friendship with Hamlet while themselves being deceived by Claudius; or Laertes hiding his vengeful intent behind reconciliation during the duel. The essay should conclude with a critical evaluation of how this pervasive deception drives the tragedy, contrasted perhaps with Horatio's honesty.",
    marking_notes: "This essay is marked holistically in the real exam against a rubric (CONTENT 15 marks: interpretation of topic, depth of argument, textual support; STRUCTURE AND LANGUAGE 10 marks: coherent structure, mature/correct language, tone and style), not against an itemized answer key. The marking_points below approximate that rubric as broad criteria, drawn from the memo's own guideline discussion — this is a deliberate simplification for automated grading, not a literal memo transcription.",
    marking_points: [
      { marks: 4, description: "Discusses Claudius's deception in detail (the murder, winning Gertrude, presenting himself as a competent ruler, and plotting against Hamlet via spies, the England plan, and the poisoned duel)", keywords: ["claudius", "murder", "gertrude", "spying", "poisoned duel", "polonius", "rosencrantz"] },
      { marks: 4, description: "Discusses Hamlet's feigned madness ('antic disposition') and staging of The Mousetrap as strategic disguise to test the Ghost's claim, noting its consequences (e.g. Ophelia's madness)", keywords: ["antic disposition", "feigned madness", "mousetrap", "ophelia's madness"] },
      { marks: 4, description: "Discusses at least a third character's deception with specific textual reference (e.g. Polonius using Ophelia to spy; Rosencrantz and Guildenstern betraying Hamlet while deceived themselves; or Laertes colluding with Claudius and hiding vengeful intent behind reconciliation)", keywords: ["polonius", "rosencrantz and guildenstern", "laertes", "poisoned sword", "reconciliation"] },
      { marks: 3, description: "Reaches a coherent, critical conclusion on how deception and disguise drive the tragedy, e.g. contrasting with Horatio's honesty/loyalty", keywords: ["conclusion", "tragedy", "horatio", "honest"] },
      { marks: 5, description: "Essay has a coherent structure: clear introduction, well-developed and logically organised body paragraphs referencing at least three characters, and a strong conclusion, within the 400-450 word guideline", keywords: ["introduction", "conclusion", "structure", "three characters"] },
      { marks: 5, description: "Demonstrates mature control of language, tone and style appropriate to a literary essay, with largely correct grammar, spelling and punctuation", keywords: ["language", "style", "tone", "grammar"] },
    ],
  },

  // ============================================================
  // QUESTION 11: HAMLET — CONTEXTUAL QUESTION (25 marks)
  // ============================================================
  {
    number: "11", sub_number: "11.1",
    text: "Read Extract E (Act 1, Scene 1, the sentries on watch). Describe the change that has recently occurred in the Royal family.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "King Hamlet has died/been murdered and his brother, Claudius, has been appointed as the new king of Denmark. Claudius and King Hamlet's widow, Gertrude, have subsequently married.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "King Hamlet has died/been murdered and Claudius has become the new king", keywords: ["king hamlet died", "claudius", "new king"] },
      { marks: 1, description: "Claudius has married Gertrude, King Hamlet's widow", keywords: ["claudius married gertrude", "widow"] },
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "Give TWO reasons why the guards are on edge in this extract.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "The guards are on edge because the ghost of the old king has appeared to them on two occasions. He is dressed in war clothes/armour and does not speak a word to them. He disappears when approached or questioned, leaving the guards confused and uneasy. They are also anxious as they are aware that Denmark appears to be preparing for war.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "The ghost of the old king has appeared twice, dressed for war, and vanishes without speaking, leaving them confused/uneasy", keywords: ["ghost", "appeared twice", "armour", "vanishes"] },
      { marks: 1, description: "They are anxious because Denmark appears to be preparing for war", keywords: ["denmark", "preparing for war"] },
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Refer to line 4: 'Long live the King!' In light of later events, explain the irony of Bernardo's statement.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "This statement demonstrates Bernardo's allegiance to the current king and his wish for the king's long reign. However, Claudius is not deserving of such loyalty and his reign will be cut short when Hamlet takes his revenge.",
    marking_notes: "Award 2 marks for a clear understanding of irony.",
    marking_points: [
      { marks: 2, description: "Explains the irony: Bernardo wishes the king a long reign, but Claudius does not deserve loyalty and his reign is later cut short by Hamlet's revenge", keywords: ["irony", "long reign", "claudius", "revenge", "cut short"] },
    ],
  },
  {
    number: "11", sub_number: "11.4",
    text: "Refer to line 21: 'O, farewell honest soldier'. Discuss the significance of honesty in relation to the play as a whole.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Surrounded by dishonesty, Hamlet struggles to uncover the truth about his father's death. He values honesty but realises he will need to use deceit to confirm the ghost's claims. Claudius, Polonius, and Rosencrantz and Guildenstern use manipulation and lies to pursue their ambitions/serve their own interests; however, they all meet their untimely deaths. Ophelia and Gertrude, caught in a web of lies, also suffer tragic fates. The play demonstrates that dishonesty leads to destruction and while the pursuit of truth may be difficult/challenging, it is necessary for justice to prevail.",
    marking_notes: "Award 3 marks only if the significance is well discussed.",
    marking_points: [
      { marks: 3, description: "Well-discussed significance: Hamlet values honesty yet must use deceit to uncover truth; those who deceive (Claudius, Polonius, Rosencrantz and Guildenstern) meet tragic ends, showing dishonesty leads to destruction while truth is necessary for justice", keywords: ["dishonesty", "destruction", "truth", "justice", "tragic ends"] },
    ],
  },
  {
    number: "11", sub_number: "11.5",
    text: "Refer to lines 33-39: 'Horatio says 'tis ... speak to it.' Discuss what these lines reveal about Horatio's character at this point in the play.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Horatio's scepticism is evident in his not immediately believing the guards' claims about the ghost. He wants to see the ghost for himself as he is rational/logical. The guards value and trust Horatio's opinion because he is well educated and respected.",
    marking_notes: "Award 3 marks for two ideas well discussed.",
    marking_points: [
      { marks: 2, description: "Horatio is sceptical/rational/logical, not immediately believing the guards' claims and wanting to see the ghost for himself", keywords: ["sceptical", "rational", "logical", "see for himself"] },
      { marks: 1, description: "The guards value and trust Horatio's opinion because he is educated and respected", keywords: ["trust", "educated", "respected"] },
    ],
  },
  {
    number: "11", sub_number: "11.6",
    text: "Read Extract F (Act 3, Scene 2, after the play-within-a-play). Place this extract in context.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "Hamlet has arranged for The Mousetrap, a play mimicking the circumstances surrounding King Hamlet's murder, to be presented to Claudius and the Royal Court. Hamlet plans to use the play to confirm the ghost's story and he has asked Horatio to observe Claudius's reaction. While watching the play, Claudius becomes agitated, stops the play and storms out.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Hamlet arranged The Mousetrap, mimicking King Hamlet's murder, to confirm the ghost's story, with Horatio watching Claudius", keywords: ["mousetrap", "confirm the ghost's story", "horatio watches claudius"] },
      { marks: 1, description: "Claudius becomes agitated, stops the play and storms out", keywords: ["agitated", "stops the play", "storms out"] },
    ],
  },
  {
    number: "11", sub_number: "11.7",
    text: "Refer to line 21: 'My lord, the queen would speak with you, and presently.' Account for the Queen's request to speak with Hamlet.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "Gertrude wants to speak to Hamlet to discover the truth behind his strange behaviour and because Polonius has convinced her to let him spy on Hamlet, as he is still trying to prove his theory that Hamlet's unstable mental state is due to heartbreak.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Gertrude wants to discover the truth behind Hamlet's strange behaviour", keywords: ["truth", "strange behaviour"] },
      { marks: 1, description: "Polonius has convinced her to let him spy on Hamlet to prove his heartbreak theory", keywords: ["polonius", "spy", "heartbreak theory"] },
    ],
  },
  {
    number: "11", sub_number: "11.8",
    text: "Refer to lines 37-38: 'Let me be ... but use none.' Comment on what these lines reveal about Hamlet's attitude towards Gertrude.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Hamlet is enraged by his mother's hasty marriage and is 'cruel' when addressing her. He wants to obey the ghost's instruction and not cause her physical harm; this suggests that he has some sympathy for Gertrude. Hamlet knows that he is expected to love and respect his mother; however, he is disgusted and disappointed in her 'frailty'. He is determined to confront her as he wants her to confess and take accountability for her actions.",
    marking_notes: "Award 1 mark for attitude and 2 marks for a cogent comment.",
    marking_points: [
      { marks: 1, description: "States an attitude: Hamlet is enraged/cruel yet retains some sympathy for Gertrude", keywords: ["enraged", "cruel", "sympathy"] },
      { marks: 2, description: "Cogent comment: he intends only verbal cruelty (not physical harm) per the ghost's instruction, disgusted by her 'frailty', and determined she confess and take accountability", keywords: ["verbal not physical", "frailty", "confess", "accountability"] },
    ],
  },
  {
    number: "11", sub_number: "11.9",
    text: "Refer to lines 7-8: 'Come, some music! Come, the / recorders!' If you were the director of a production of Hamlet, how would you instruct the actor to deliver these lines? Pay specific attention to body language and tone. Motivate your instructions.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Hamlet might use an excited/determined tone. He might beckon the musicians/jump up and down or wave his arms. He feels vindicated, as he now knows that Claudius is guilty and he is in a celebratory mood.",
    marking_notes: "Award 3 marks only if the candidate refers to body language and tone, and includes a motivation.",
    marking_points: [
      { marks: 1, description: "Specifies a tone (e.g. excited/determined/triumphant)", keywords: ["excited", "determined", "triumphant", "tone"] },
      { marks: 1, description: "Specifies body language (e.g. beckoning the musicians, animated gestures)", keywords: ["beckon", "gestures", "body language"] },
      { marks: 1, description: "Motivates the instructions: Hamlet feels vindicated, knowing Claudius is guilty, and is in a celebratory mood", keywords: ["vindicated", "claudius is guilty", "celebratory"] },
    ],
  },
  {
    number: "11", sub_number: "11.10",
    text: "Refer to lines 35-36: 'O heart, lose ... this firm bosom.' Critically discuss how Hamlet's inner conflict influences his actions throughout the play.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "When Hamlet is instructed to seek revenge by the ghost, he is hesitant because this request is in conflict with his values. Hamlet knows that as a son, he is duty-bound to honour his father's request for revenge. However, he is also aware this act could damn him. His decision to 'put on an antic disposition' and to stage The Mousetrap is part of his plan to test the veracity of the Ghost's claim, therefore ensuring that his actions are honourable. Hamlet's sense of justice does not allow him to act without definitive evidence. Initially, Hamlet's inner conflict leads to inaction, but he acts impulsively later in the play when he rashly kills Polonius and accepts the duel with Laertes. For most of the play Hamlet struggles with the morality of revenge and feels conflicted about his fate. However, when he returns from England, he is determined to kill Claudius and restore his country.",
    marking_notes: "Award 3 marks only if a critical discussion is included.",
    marking_points: [
      { marks: 3, description: "Critically discusses how Hamlet's inner conflict (duty to revenge vs. moral/religious hesitation) leads first to inaction and testing (antic disposition, The Mousetrap), then impulsive acts (killing Polonius, the duel), and finally resolve on returning from England", keywords: ["inner conflict", "antic disposition", "mousetrap", "kills polonius", "duel with laertes", "returns from england"] },
    ],
  },
];

export const examSchedule: never[] = [];
