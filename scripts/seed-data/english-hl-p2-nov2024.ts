// Real DBE past paper: English Home Language P2 (Literature), November
// 2024, National Senior Certificate. Source: the full combined question
// paper (29 pages) + official DBE marking guidelines (24 pages), both
// verified as genuine DBE documents (crest, "Copyright reserved",
// "NSC – Marking Guidelines" headers), fetched from stanmorephysics.com.
//
// SCOPE — this is a deliberately narrowed slice of the real 80-mark exam,
// not a simulation of it. The real P2 paper offers a CHOICE of prescribed
// novel (The Picture of Dorian Gray OR Life of Pi) and drama (Hamlet OR
// Othello OR The Crucible), and this app has no "answer one of several"
// mechanism — every seeded question would be presented to the student.
// The son this app is being used by studied THE PICTURE OF DORIAN GRAY and
// HAMLET specifically, so only those texts are ingested here, together with
// ALL of the poetry section (poetry questions are short and don't depend on
// which novel/drama a student studied). Life of Pi (Questions 8–9), Othello
// (Questions 12–13) and The Crucible (Questions 14–15) are NOT included at
// all — not even lightly read.
//
// Questions ingested, exactly per the paper's own table of contents (p4):
//   1. 'Fern Hill' — Essay (10)
//   2. 'This Winter Coming' — Contextual (10)
//   3. 'Prayer to Masks' — Contextual (10)
//   4. 'At a Funeral' — Contextual (10)
//   5. 'Farm Gate' (unseen poem) — Contextual (10)
//   6. The Picture of Dorian Gray — Essay (25)
//   7. The Picture of Dorian Gray — Contextual (25)
//  10. Hamlet — Essay (25)
//  11. Hamlet — Contextual (25)
// Total: 150 marks — MORE than the real exam's 80-mark sitting (which only
// requires 2 of the 4 prescribed poems + the compulsory unseen poem + 1 of
// Q6/7 + 1 of Q10/11). That's intentional: this is a practice bank covering
// everything relevant to the son's specific setworks, not a simulation of
// exam-day choice constraints, so paper.total_marks below is 150, not 80.
// duration_minutes is kept at the real exam's 150 minutes (2½ hours) even
// though the scoped content exceeds what a single sitting requires — he can
// pace himself across it.
//
// GRADING APPROACH:
// Contextual questions (2, 3, 4, 5, 7, 11) quote specific lines/extracts and
// ask short-answer literary-analysis questions. The official memo gives
// itemised point-by-point answers for these, so marking_points below is
// transcribed directly from the memo's actual accepted answers (in our own
// words where the memo used point-form fragments), with marks summing
// exactly to each sub-question's own allocation.
//
// Essay questions (1, 6, 10) are marked holistically by rubric in the real
// exam (the memo explicitly says "Refer to page 23/24 for the rubric to
// assess this question" — a generic planning/content, language/style,
// structure rubric), NOT a fixed list of "correct" facts, since these are
// open argumentative essays. The memo itself doesn't give an itemised mark
// list for essays — only a bulleted list of the KEY CONTENT/ARGUMENTS a
// strong essay should engage with. For each essay question below,
// marking_points is therefore a DELIBERATE APPROXIMATION: a small number of
// broad criteria (identifying the central theme/argument, analysing a
// specific device with a textual example, commenting on structure/form or
// character development and its effect, and reaching a coherent supported
// conclusion), drawn from the memo's own bulleted guidance and each worth a
// portion of the total marks. This is NOT a literal transcription of the
// memo (which has no itemised essay mark scheme) — it is our approximation
// of the holistic rubric, documented here as intentional, not an error.
//
// No images are needed for this paper — all content (poems, novel/drama
// extracts) is pure text with no visual texts to crop.

import type { MarkingPoint } from "../../src/lib/grader";

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
  year: 2024,
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

export const questions: QuestionSeed[] = [
  // ============ QUESTION 1: 'FERN HILL' — ESSAY (10 marks) ============
  // Essay question: the memo gives no itemised mark list, only a bulleted
  // discussion (and refers markers to a holistic rubric). The criteria
  // below approximate that rubric, drawn from the memo's own bullets.
  {
    number: "1", sub_number: null,
    text: "Read the extract from 'Fern Hill' by Dylan Thomas (lines 1–27). Childhood is a time of innocence, joy and wonder but sadly, it does not last. With close reference to diction, imagery and tone, critically discuss the above statement in relation to this extract from 'Fern Hill'. Your response should take the form of a well-constructed essay of 250–300 words (about ONE page).",
    marks: 10, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay shows how the speaker recalls a joyous, innocent childhood on an idyllic farm (diction like 'easy', 'happy', 'carefree', 'golden', personification/transferred epithets like the 'lilting' house), discusses at least one image (e.g. 'prince of the apple towns', the Eden allusion in 'apple boughs') and its effect, and shows how time is personified ('Time let me hail and climb', 'Time held me green and dying') to convey that this innocence is inevitably lost, alongside the poem's underlying bittersweet/nostalgic tone, reaching a coherent conclusion about the statement.",
    marking_notes: "Approximation of the memo's holistic essay rubric (planning/content, language/style, structure) — the memo gives a bulleted discussion, not an itemised mark scheme, and refers markers to a separate rubric (memo p23). Marks below are a deliberate, documented simplification into four broad criteria summing to 10, not a literal transcription.",
    marking_points: [
      { marks: 3, description: "Identifies and discusses the poem's central theme/argument: a joyous, innocent childhood on the farm that is inevitably lost, as the statement claims.", keywords: ["innocence", "joy", "childhood", "carefree", "happy", "wonder", "lost", "does not last", "farm"] },
      { marks: 3, description: "Analyses specific diction and/or imagery with a textual example (e.g. 'golden', 'green', the 'lilting house', the Eden allusion in 'apple boughs', the comparisons to 'prince of the apple towns'/'huntsman and herdsman') and explains its effect.", keywords: ["golden", "green", "lilting", "apple boughs", "prince", "huntsman", "herdsman", "eden", "image", "diction"] },
      { marks: 2, description: "Comments on the personification of 'Time' and/or the poem's tone (nostalgic, joyful, yet bittersweet/foreboding) and its effect on meaning.", keywords: ["time", "personif", "tone", "nostalgic", "bittersweet", "foreboding", "sombre", "held me green and dying"] },
      { marks: 2, description: "Reaches a coherent, well-supported conclusion that directly engages with the given statement, in a well-structured essay of appropriate length.", keywords: ["conclusion", "therefore", "ultimately", "in conclusion", "critically", "structure"] },
    ],
  },

  // ============ QUESTION 2: 'THIS WINTER COMING' — CONTEXTUAL (10 marks) ============
  {
    number: "2", sub_number: "2.1",
    text: "Read the poem 'This Winter Coming' by Karen Press. What does the word 'thick' (line 1) convey about the rain?",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "It conveys a heavy, soaking rain with low visibility — this type of rain is unpleasant/uncomfortable/impenetrable.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Conveys heavy, soaking rain / low visibility.", keywords: ["heavy", "soaking", "visibility", "low"] },
      { marks: 1, description: "Conveys that the rain is unpleasant, uncomfortable or impenetrable.", keywords: ["unpleasant", "uncomfortable", "impenetrable", "oppressive"] },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Refer to lines 4–5: 'the sea is … is sinking away'. Identify the mood in these lines.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The mood is unsettled/tense/ominous/chaotic/hostile/threatening/foreboding.",
    marking_notes: "Accept any one appropriate mood word from the memo's list.",
    marking_points: [
      { marks: 1, description: "Names an appropriate mood: unsettled, tense, ominous, chaotic, hostile, threatening, or foreboding.", keywords: ["unsettled", "tense", "ominous", "chaotic", "hostile", "threatening", "foreboding"] },
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Refer to lines 4–5: 'the sea is … is sinking away'. Explain how this mood is created.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Reorganisation",
    model_answer: "Describing the sea as 'swollen' suggests looming danger; 'churning' and 'broken' are associated with chaos and violence, adding to the hostile mood; the sand 'sinking away' reinforces the uncertainty/danger posed by the storm.",
    marking_notes: "Award 2 marks for a well-developed explanation. Credit candidates who allude to political turmoil.",
    marking_points: [
      { marks: 1, description: "'Swollen'/'churning'/'broken' suggest looming danger, chaos or violence.", keywords: ["swollen", "churning", "broken", "danger", "chaos", "violence"] },
      { marks: 1, description: "The sand 'sinking away' reinforces uncertainty/danger/menace (or a political-turmoil reading).", keywords: ["sinking away", "uncertainty", "danger", "menace", "political"] },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "Refer to lines 24–26: 'into the rain … fight the winter'. Comment on the effectiveness of the simile in these lines.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The children's thin bodies are compared to 'the barest twigs' to show how thin/malnourished/underweight they are; their inadequate clothing ('barest') makes them vulnerable to the cold, demonstrating the harsh reality of life for these children in an unequal society and their willingness to fight for freedom.",
    marking_notes: "Award 2 marks for a comment on the effectiveness of the image.",
    marking_points: [
      { marks: 1, description: "The simile ('barest twigs') shows the children are thin/malnourished and inadequately clothed/vulnerable.", keywords: ["twigs", "thin", "malnourished", "underweight", "vulnerable", "inadequate"] },
      { marks: 1, description: "This demonstrates the harsh reality/inequality these children face and their willingness to fight/struggle.", keywords: ["harsh reality", "unequal", "inequality", "fight for freedom", "suffer"] },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "Refer to lines 18–23: 'on every corner … is not frightened?' Critically discuss how these lines convey the central message of the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "In the harsh weather, homeless/impoverished men stand on street corners, living on the edge of death ('tombstones engraved with open eyes'). They are contrasted with the financially well-off who drive past in cars, 'sated', living comfortable lives. This inequality is unsustainable — a violent uprising is inevitable and everyone should fear the catastrophic consequences.",
    marking_notes: "Award 3 marks only if there is a critical discussion linked to the central message. Credit valid alternative responses.",
    marking_points: [
      { marks: 1, description: "The men are impoverished/without shelter, living on the edge of death ('tombstones engraved with open eyes').", keywords: ["impoverished", "shelter", "tombstones", "death", "poverty"] },
      { marks: 1, description: "Contrast with the privileged/well-off who pass by in cars, 'sated' and comfortable.", keywords: ["contrast", "privileged", "well-off", "sated", "cars", "comfortable"] },
      { marks: 1, description: "This inequality is unsustainable — a violent uprising/catastrophe is inevitable, which is why everyone should be frightened.", keywords: ["inequality", "unsustainable", "uprising", "inevitable", "catastrophic", "frightened"] },
    ],
  },

  // ============ QUESTION 3: 'PRAYER TO MASKS' — CONTEXTUAL (10 marks) ============
  {
    number: "3", sub_number: "3.1",
    text: "Read the poem 'Prayer to Masks' by Léopold Sédar Senghor. Explain why the speaker refers to his ancestor as 'lionheaded' (line 4).",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Lions are associated with majestic qualities of courage and strength; they are protectors of their pride. These are the same qualities the speaker believes are needed to liberate Africa from colonialism. Referring to his ancestor this way is complimentary and a sign of respect.",
    marking_notes: "Award 2 marks for two distinct points. If candidates only refer to the poet's biographical details, award a maximum of 1 mark.",
    marking_points: [
      { marks: 1, description: "Lions represent courage, strength and protection — qualities needed to liberate Africa.", keywords: ["courage", "strength", "protector", "majestic", "liberate", "lion"] },
      { marks: 1, description: "It is a complimentary/respectful way of referring to the ancestor.", keywords: ["compliment", "respect", "reverence", "honour"] },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "What does the word 'silence' (line 3) reveal about the speaker's attitude towards the ancestors? Motivate your response.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The speaker's attitude is respectful and reverential. His 'silence' acknowledges that he honours the ancestors' presence and is guided by their authority; he is in awe of them and reflective in their presence.",
    marking_notes: "Award 1 mark for the attitude and 1 mark for an explanation/motivation.",
    marking_points: [
      { marks: 1, description: "Names the attitude: respectful/reverential/in awe.", keywords: ["respectful", "reverential", "awe", "reverence"] },
      { marks: 1, description: "Motivates it: silence shows he honours the ancestors' presence/authority and is reflective in their presence.", keywords: ["honours", "authority", "reflective", "guided"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Refer to line 13: 'And who sacrifice their lives like the poor man his last garment'. Identify the figure of speech in this line.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Simile.",
    marking_notes: "Accept only 'simile'.",
    marking_points: [
      { marks: 1, description: "Simile.", keywords: ["simile"] },
    ],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Refer to line 13: 'And who sacrifice their lives like the poor man his last garment'. Comment on the effectiveness of this image.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Africans are compared to a poor man who has very little but is willing to sacrifice all he owns. This effectively demonstrates how Africans are prepared to give up everything, even their lives, to gain freedom.",
    marking_notes: "Award 2 marks for a comment on the effectiveness of the image.",
    marking_points: [
      { marks: 1, description: "Africans compared to a poor man who has little but is willing to sacrifice all he owns.", keywords: ["poor man", "sacrifice", "little", "compared"] },
      { marks: 1, description: "Effectively shows Africans are prepared to give up everything, even their lives, for freedom.", keywords: ["freedom", "everything", "lives", "willing"] },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Refer to line 20: 'But we are the men of the dance whose feet only gain power when they beat the hard soil.' Critically discuss how this line conveys the central message of the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The final line highlights how Africans will unite ('we are the men') to gain power and freedom. The reference to 'dance' and 'beat the hard soil' emphasises rhythm, harmony and connection with the land and ancestors. The line optimistically reinforces the belief that Africans will be liberated and regain their culture and traditions, becoming an example to the world of a harmonious, spiritual life.",
    marking_notes: "Award 3 marks only if there is a critical discussion linked to the central message.",
    marking_points: [
      { marks: 1, description: "Africans will unite to gain power and freedom.", keywords: ["unite", "power", "freedom", "we are the men"] },
      { marks: 1, description: "The dance/beating the soil emphasises rhythm, harmony and connection with the land/ancestors.", keywords: ["dance", "rhythm", "harmony", "connection", "land", "ancestors"] },
      { marks: 1, description: "Optimistically reinforces the belief in liberation and the regaining of culture/traditions as an example to the world.", keywords: ["optimistic", "liberation", "culture", "traditions", "example"] },
    ],
  },

  // ============ QUESTION 4: 'AT A FUNERAL' — CONTEXTUAL (10 marks) ============
  {
    number: "4", sub_number: "4.1",
    text: "Read the poem 'At a Funeral' by Dennis Brutus. Explain the use of the phrase 'Black, green and gold' (line 1) in the context of the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "These colours are associated with the liberation movements active during Apartheid, establishing that the poem is not only about a personal funeral but also political commentary. (Alternatively, they may represent the academic gowns worn by mourners, emphasising the tragic loss of a young educated woman.)",
    marking_notes: "Award 2 marks for an explanation of one idea (developed).",
    marking_points: [
      { marks: 1, description: "The colours are associated with liberation movements active during Apartheid.", keywords: ["liberation", "apartheid", "colours", "movement"] },
      { marks: 1, description: "This establishes the poem as political commentary, not only a personal experience of the funeral (or: represents academic gowns, emphasising the loss of a young educated woman).", keywords: ["political", "commentary", "academic gowns", "educated"] },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "What does the word 'pageantry' (line 1) convey about the funeral?",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "'Pageantry' implies an ostentatious display just for show. No matter how elaborate the funeral, it cannot make up for a young life of potential being lost — the funeral is actually a hollow and meaningless gesture.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Implies an ostentatious/elaborate display, just for show.", keywords: ["ostentatious", "elaborate", "display", "show"] },
      { marks: 1, description: "This is actually a hollow/meaningless gesture that cannot compensate for the lost life/potential.", keywords: ["hollow", "meaningless", "lost life", "potential"] },
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Refer to line 9: 'Arise! The brassy shout of Freedom stirs our earth'. Identify the figure of speech in this line.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Apostrophe/metaphor/personification/metonymy.",
    marking_notes: "Accept any one of: apostrophe, metaphor, personification, or metonymy.",
    marking_points: [
      { marks: 1, description: "Names one of: apostrophe, metaphor, personification, or metonymy.", keywords: ["apostrophe", "metaphor", "personification", "metonymy"] },
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Refer to line 9: 'Arise! The brassy shout of Freedom stirs our earth'. Comment on the effectiveness of this image.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "'Arise!' is a call to action against oppression. 'Brassy shout' evokes the harsh/shrill sound of a bugle/trumpet calling for revolutionary action. Personifying Freedom as having a loud, imposing voice shows the need for liberation is so vital that it can no longer be ignored — a revolution is inevitable.",
    marking_notes: "Award 2 marks for a comment on the effectiveness of the image.",
    marking_points: [
      { marks: 1, description: "'Arise!' is a call to action against oppression; 'brassy shout' evokes a harsh, trumpet-like sound calling for revolutionary action.", keywords: ["call to action", "brassy", "trumpet", "harsh", "revolutionary"] },
      { marks: 1, description: "Personifying Freedom as loud/imposing shows liberation can no longer be ignored — revolution is inevitable.", keywords: ["personification", "inevitable", "revolution", "cannot be ignored"] },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Refer to line 12: 'Better that we should die, than that we should lie down.' Critically discuss how this line conveys the central message of the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Majombozi's death represents the loss of potential under apartheid. The speaker uses this tragedy to encourage oppressed people to be defiant and resist tyranny rather than be submissive. The line implies physical death is preferable to the death of one's rights and dignity — the speaker is emphatic about being prepared to die for freedom.",
    marking_notes: "Award 3 marks only if there is a critical discussion linked to the central message.",
    marking_points: [
      { marks: 1, description: "Majombozi's death represents the loss of potential under apartheid.", keywords: ["loss of potential", "apartheid", "majombozi"] },
      { marks: 1, description: "Encourages oppressed people to be defiant/resist tyranny rather than be submissive.", keywords: ["defiant", "resist", "tyranny", "submissive"] },
      { marks: 1, description: "Physical death is preferable to the death of one's rights/dignity — a willingness to die for freedom.", keywords: ["rights", "dignity", "die for freedom", "prepared to die"] },
    ],
  },

  // ============ QUESTION 5: 'FARM GATE' (unseen) — CONTEXTUAL (10 marks) ============
  {
    number: "5", sub_number: "5.1",
    text: "Read the unseen poem 'Farm Gate' by Uys Krige. Refer to lines 1–4: 'Blood-red the aloes … each fire-lily glows.' What does this description reveal about the aloes?",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The aloes are growing abundantly along the road ('flank'); they are a vibrant, deep red colour, and their petals look like flames.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Growing abundantly/along the roadside ('flank').", keywords: ["abundant", "flank", "roadside", "growing"] },
      { marks: 1, description: "A vibrant, deep red colour, like flames/sparks.", keywords: ["vibrant", "red", "flame", "sparks", "colour"] },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Refer to lines 9–14: 'Above, the blue … still mountain scene.' What is suggested about the atmosphere in these lines?",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The repetition of 'blue' implies a clear, cloudless sky, creating warmth and tranquillity; nature imagery reinforces this peaceful atmosphere. The stream meanders slowly and there is 'no sound' — the scene is still, quiet and calm, reinforced by 'hovering peace'.",
    marking_notes: "Award 1 mark for naming the atmosphere and 1 mark for an explanation thereof.",
    marking_points: [
      { marks: 1, description: "Names the atmosphere: peaceful, tranquil, calm, or still.", keywords: ["peaceful", "tranquil", "calm", "still", "harmony"] },
      { marks: 1, description: "Explains it: the repetition of 'blue' and 'no sound'/'hovering peace' reinforce a clear, quiet, harmonious scene.", keywords: ["blue", "no sound", "hovering peace", "quiet", "meandering"] },
    ],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Refer to lines 15–16: 'Now after all … a gate again.' Identify the tone of these lines.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "Nostalgic/yearning/reflective/contented/hopeful/relieved/wistful.",
    marking_notes: "Accept any one appropriate tone word from the memo's list.",
    marking_points: [
      { marks: 1, description: "Names an appropriate tone: nostalgic, yearning, reflective, contented, hopeful, relieved, or wistful.", keywords: ["nostalgic", "yearning", "reflective", "contented", "hopeful", "relieved", "wistful"] },
    ],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Refer to lines 15–16: 'Now after all … a gate again.' Comment on the effectiveness of the tone.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The tone effectively captures the speaker's feelings as he returns to a place he left many years ago. He has been homesick and is now happy to open, not just a gate, but his heart to returning to his roots.",
    marking_notes: "Award 2 marks for a comment on the effectiveness of the tone.",
    marking_points: [
      { marks: 1, description: "Effectively captures the speaker's feelings returning after many years away/being homesick.", keywords: ["returning", "years", "homesick", "away"] },
      { marks: 1, description: "He is happy to open not just a physical gate but his heart to returning to his roots.", keywords: ["heart", "roots", "open", "gate"] },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Refer to lines 17–22: 'Where have my … in my head?' Critically discuss how the rhetorical question conveys the central message of the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "After travelling extensively and having his 'illusions shed', the speaker acknowledges that leaving the farm did not provide the better opportunities he assumed it would. He returns with more realistic ambitions ('clear dreams') and 'hope in his heart' that the farm will provide the happiness and fulfilment he previously pursued elsewhere — a wanderer returning to his childhood home with a clearer appreciation of what nature and the farm offer.",
    marking_notes: "Award 3 marks for a critical discussion linked to the central message. Credit valid alternative responses.",
    marking_points: [
      { marks: 1, description: "After travelling and having his illusions shed, he realises leaving the farm did not bring the opportunities he expected.", keywords: ["illusions shed", "travelling", "expectations", "opportunities"] },
      { marks: 1, description: "He returns with more realistic ambitions ('clear dreams') and hope.", keywords: ["clear dreams", "hope", "realistic"] },
      { marks: 1, description: "Conveys the central message of a wanderer returning home with a clearer appreciation of nature/the farm/his roots.", keywords: ["wanderer", "returning", "appreciation", "roots", "home"] },
    ],
  },

  // ============ QUESTION 6: THE PICTURE OF DORIAN GRAY — ESSAY (25 marks) ============
  // Essay question: the memo gives no itemised mark list, only a bulleted
  // "AGREE" discussion (and refers markers to a holistic rubric). The
  // criteria below approximate that rubric, drawn from the memo's bullets.
  {
    number: "6", sub_number: null,
    text: "The portrait of Dorian Gray is equally a blessing and a curse in Dorian's life. Critically discuss the extent to which you agree with this statement, with close reference to the novel. Your response should take the form of a well-constructed essay of 400–450 words (2–2½ pages).",
    marks: 25, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay discusses the portrait as a 'blessing': it grants Dorian perpetual youth/beauty, popularity and influence, and lets him escape consequences (Victorian society equates beauty with innocence, so he is never suspected of cruelty to Sibyl/Basil's murder/blackmailing Alan Campbell, and it even lets him escape James Vane). It then discusses the portrait as a 'curse': it fuels his narcissism and hedonism, prevents genuine relationships and emotional growth, makes him paranoid and secretive, and denies him true absolution — his guilty conscience is instead displayed in the portrait's decay, and when he stabs it he dies alone, wretched and cursed. The essay should reach a supported conclusion on the extent of agreement.",
    marking_notes: "Approximation of the memo's holistic essay rubric — the memo gives a bulleted 'AGREE' discussion, not an itemised mark scheme, and refers markers to a separate rubric (memo p24). Marks below are a deliberate, documented simplification into four broad criteria summing to 25, not a literal transcription.",
    marking_points: [
      { marks: 7, description: "Discusses the portrait as a 'blessing': grants perpetual youth/beauty, popularity/influence, and lets Dorian escape social consequences and suspicion (e.g. Sibyl, Basil's murder, Alan Campbell, James Vane), with specific reference to the novel.", keywords: ["blessing", "youth", "beauty", "popularity", "influence", "escape", "consequences", "james vane", "basil"] },
      { marks: 7, description: "Discusses the portrait as a 'curse': fuels narcissism/hedonism/recklessness, prevents genuine relationships and emotional growth, causes paranoia/secrecy, and denies true absolution/leads to his death, with specific reference to the novel.", keywords: ["curse", "narcissism", "hedonism", "paranoia", "secretive", "absolution", "dies", "wretched"] },
      { marks: 6, description: "Supports the discussion with a range of specific, accurate examples/incidents from across the novel (not just one episode).", keywords: ["example", "chapter", "incident", "sibyl", "yellow book", "lord henry"] },
      { marks: 5, description: "Reaches a coherent, well-supported conclusion critically evaluating the extent of agreement with the statement, in a well-structured essay of appropriate length.", keywords: ["conclusion", "extent", "agree", "critically", "therefore", "structure"] },
    ],
  },

  // ============ QUESTION 7: THE PICTURE OF DORIAN GRAY — CONTEXTUAL (25 marks) ============
  {
    number: "7", sub_number: "7.1",
    text: "Read Extract A (Chapter 8, Dorian resolving to make reparation to Sibyl Vane) and Extract B (Chapter 19, Dorian telling Lord Henry about Hetty) from The Picture of Dorian Gray. Place Extract A in context.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Reorganisation",
    model_answer: "Dorian, Basil and Lord Henry have attended the theatre to watch Sibyl perform. Her performance is dreadful and Dorian is embarrassed in front of his friends. After the performance, Dorian cruelly breaks up with Sibyl and spends the rest of the night wandering the city. When he returns home, he notices a change in the portrait's expression.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Sibyl's dreadful performance leads Dorian to cruelly break up with her, embarrassed in front of his friends.", keywords: ["sibyl", "performance", "breaks up", "embarrassed"] },
      { marks: 1, description: "After wandering the city, he returns home and notices a change in the portrait's expression.", keywords: ["wandering", "returns home", "portrait", "change", "expression"] },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Explain why Dorian would refer to his love for Sibyl as 'unreal' (line 3).",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "Dorian is not in love with Sibyl herself, but with the characters she portrays on stage. His love is not based on genuine feelings, as he does not see her as a real person.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "He loves the characters she portrays on stage, not Sibyl herself.", keywords: ["characters", "stage", "portrays", "acting"] },
      { marks: 1, description: "His love is not genuine, as he doesn't see her as a real person.", keywords: ["not genuine", "real person", "superficial"] },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Refer to lines 12–14: 'He did not … himself of madness.' Explain what these lines reveal about Dorian's state of mind at this point in the novel.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "Dorian writes the letter because he feels guilty about cruelly discarding Sibyl. He is also confused and anxious about the change he has witnessed in the portrait, desperately wanting her forgiveness but unsure how to make amends.",
    marking_notes: "Award 1 mark for Dorian's state of mind and 1 mark for an explanation.",
    marking_points: [
      { marks: 1, description: "He feels guilty about discarding Sibyl, and confused/anxious about the change in the portrait.", keywords: ["guilty", "confused", "anxious", "portrait"] },
      { marks: 1, description: "He desperately wants forgiveness but is unsure how to make amends.", keywords: ["forgiveness", "amends", "unsure"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Refer to lines 3–6: 'His unreal and … to us all.' Discuss the extent to which Dorian is able to sustain his decision to use the portrait as his moral compass.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian vows to use the portrait as a moral compass, but his impressionability lets him be easily influenced by Lord Henry. When gifted the Yellow Book, he quickly adopts its hedonist philosophy as his guidebook. Despite moments of remorse, his selfish and fickle nature prevent him from committing to a moral life — the portrait instead enables him to live sinfully.",
    marking_notes: "Award 3 marks for two well-developed ideas. Credit valid alternative responses.",
    marking_points: [
      { marks: 1, description: "He vows to use the portrait as a moral compass but is easily influenced by Lord Henry/the Yellow Book's hedonist philosophy.", keywords: ["moral compass", "lord henry", "yellow book", "hedonist"] },
      { marks: 1, description: "Despite moments of remorse, his selfish/fickle nature prevents him committing to a moral life.", keywords: ["remorse", "selfish", "fickle", "moral life"] },
      { marks: 1, description: "Ultimately the portrait enables rather than restrains his sinful life.", keywords: ["enables", "sinful life", "instead"] },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Refer to lines 15–18: 'There is a … had been forgiven.' Discuss the significance of these lines in relation to the novel as a whole.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian believes mere confession without changed behaviour is enough. His attempt to take accountability towards Sibyl is short-lived, as she kills herself before he can deliver the letter. Realising he will remain young and beautiful, he decides to live recklessly. His later half-hearted confession to Lord Henry about killing Basil shows the same pattern — he is protected by his youth and beauty from ever having to take true responsibility, so he never receives real absolution.",
    marking_notes: "Award 3 marks only if the significance is discussed. Credit valid alternative responses.",
    marking_points: [
      { marks: 1, description: "Dorian believes confession alone, without changed behaviour, is sufficient — his attempt towards Sibyl is undone by her suicide.", keywords: ["confession", "sibyl", "suicide", "insufficient"] },
      { marks: 1, description: "This pattern recurs (e.g. his half-hearted confession to Lord Henry about Basil's murder).", keywords: ["basil", "murder", "confession", "lord henry", "half-hearted"] },
      { marks: 1, description: "His youth/beauty protect him from true responsibility, so he never receives real absolution.", keywords: ["youth", "beauty", "protected", "absolution", "responsibility"] },
    ],
  },
  {
    number: "7", sub_number: "7.6",
    text: "Refer to line 18: 'The people are still discussing poor Basil's disappearance.' Account for Basil's disappearance.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Reorganisation",
    model_answer: "Before leaving for Paris, Basil visited Dorian, concerned about rumours of his degenerate lifestyle. Angered by Basil's questions and moralistic attitude, Dorian murdered him and blackmailed Alan Campbell into disposing of the body.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Basil visited Dorian, concerned about rumours of his degenerate lifestyle, before his planned trip to Paris.", keywords: ["basil", "visit", "rumours", "degenerate", "paris"] },
      { marks: 1, description: "Angered by Basil's moralistic questions, Dorian murdered him and had Alan Campbell dispose of the body.", keywords: ["murdered", "angered", "alan campbell", "dispose", "body"] },
    ],
  },
  {
    number: "7", sub_number: "7.7",
    text: "Refer to lines 4–6: 'Well, Hetty was … I loved her.' Discuss the irony in these lines.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian says he loved Hetty but is unsure whether his feelings are actually love — they are superficial and easily changed. It is ironic that despite being loved by many, Dorian does not understand the nature of love, indicative of his fickle, self-absorbed character.",
    marking_notes: "Award 2 marks only if there is a clear understanding of irony.",
    marking_points: [
      { marks: 1, description: "Dorian claims to love Hetty but his feelings are actually superficial/uncertain.", keywords: ["superficial", "uncertain", "shallow"] },
      { marks: 1, description: "Ironic that, despite being loved by many, Dorian does not understand love — showing his fickle, self-absorbed character.", keywords: ["irony", "fickle", "self-absorbed", "loved by many"] },
    ],
  },
  {
    number: "7", sub_number: "7.8",
    text: "Refer to lines 15–16: 'I want to be better. I am going to be better.' Discuss Dorian's resolution 'to be better'.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian resolves to be 'better' because his guilt about Basil's murder haunts him and his usual distractions no longer work; he has also recently escaped James Vane's revenge for his sister's suicide. He is bored of pursuing pleasure and doesn't want to face the painting. While he may want to spare Hetty, his reasons are ultimately selfish, so his resolution lacks sincerity/conviction.",
    marking_notes: "Award 3 marks for two well-developed ideas.",
    marking_points: [
      { marks: 1, description: "Guilt over Basil's murder haunts him, and he has recently escaped James Vane's revenge.", keywords: ["guilt", "basil", "james vane", "revenge"] },
      { marks: 1, description: "He is bored of pursuing pleasure and doesn't want to face the painting/his sins.", keywords: ["bored", "pleasure", "painting", "sins"] },
      { marks: 1, description: "His reasons are ultimately selfish, so the resolution lacks sincerity/conviction.", keywords: ["selfish", "lacks sincerity", "insincere", "conviction"] },
    ],
  },
  {
    number: "7", sub_number: "7.9",
    text: "Refer to lines 8–9: 'You gave her … of your reformation.' Comment on how these lines indicate a change in Lord Henry's attitude towards Dorian.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Lord Henry has always been indulgent of Dorian, seeing him as a social experiment, encouraging him to pursue pleasure without thought for consequences. However, he is less supportive of Dorian's treatment of Hetty — he is disapproving/critical and unconvinced by Dorian's so-called 'reformation', now concerned that Dorian's thoughtlessness is reckless and harmful to others.",
    marking_notes: "Award 3 marks only if a cogent comment is included.",
    marking_points: [
      { marks: 1, description: "Lord Henry has always been indulgent, encouraging pleasure-seeking without consequence.", keywords: ["indulgent", "encourage", "pleasure", "social experiment"] },
      { marks: 1, description: "He is now less supportive/disapproving of Dorian's treatment of Hetty, unconvinced by his 'reformation'.", keywords: ["disapproving", "critical", "unconvinced", "reformation"] },
      { marks: 1, description: "He is now concerned Dorian's thoughtlessness is reckless and harmful to others — a shift from his earlier attitude.", keywords: ["reckless", "harmful", "concerned", "shift"] },
    ],
  },
  {
    number: "7", sub_number: "7.10",
    text: "Refer to lines 13–15: 'Don't let us … sort of sin.' Using these lines as a starting point, critically discuss Dorian's understanding of 'self-sacrifice'.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian believes self-sacrifice means denying himself a pleasurable experience. He assumes forgoing the thrill of love to spare Hetty is honourable, but for him, denying himself something is really just a new experience — the very thing he seeks. He does not understand giving something of himself or conceding something important for another's well-being; giving up Hetty is superficial, since it costs him nothing meaningful. He is selfish, unwilling to sacrifice anything truly significant.",
    marking_notes: "Award 3 marks only if there is a critical discussion. Credit valid alternative responses.",
    marking_points: [
      { marks: 1, description: "He believes self-sacrifice means denying himself a pleasurable experience, and assumes sparing Hetty is honourable.", keywords: ["denying", "pleasurable", "honourable", "spare hetty"] },
      { marks: 1, description: "For him, this denial is really just another new experience/thrill he seeks, not a genuine sacrifice.", keywords: ["new experience", "thrill", "seeks", "not genuine"] },
      { marks: 1, description: "He is selfish and unwilling to sacrifice anything truly meaningful/significant to himself.", keywords: ["selfish", "meaningful", "significant", "superficial"] },
    ],
  },

  // ============ QUESTION 10: HAMLET — ESSAY (25 marks) ============
  // Essay question: the memo gives no itemised mark list, only a bulleted
  // "VALID" discussion (and refers markers to a holistic rubric). The
  // criteria below approximate that rubric, drawn from the memo's bullets.
  {
    number: "10", sub_number: null,
    text: "In Hamlet, the role of women contributes to the attitude and actions of the main character. Critically discuss the validity of the above statement with reference to the play as a whole. Your response should take the form of a well-constructed essay of 400–450 words (2–2½ pages).",
    marks: 25, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay discusses Gertrude's role: her 'o'er hasty marriage' to Claudius distresses Hamlet and strengthens Claudius's claim to the throne; learning of the Ghost's account of the murder and Gertrude's possible complicity exacerbates Hamlet's bitterness; her behaviour disillusions Hamlet about women generally ('Frailty, thy name is woman'), feeding his 'antic disposition'; her later shift in loyalty (lying to Claudius, warning Hamlet about the poisoned wine) shapes his actions. It also discusses Ophelia: her rejection of Hamlet (returning his gifts) provokes his vicious spurning of her; her death leads to his realisation of his love for her and his altercation with, then reconciliation with, Laertes, culminating in the tragic duel. The essay should reach a supported conclusion on the statement's validity.",
    marking_notes: "Approximation of the memo's holistic essay rubric — the memo gives a bulleted 'VALID' discussion, not an itemised mark scheme, and refers markers to a separate rubric (memo p24). Marks below are a deliberate, documented simplification into four broad criteria summing to 25, not a literal transcription.",
    marking_points: [
      { marks: 7, description: "Discusses Gertrude's role and its effect on Hamlet's attitude/actions (e.g. her hasty remarriage, his disillusionment with women, her later shift in loyalty), with specific reference to the play.", keywords: ["gertrude", "hasty marriage", "claudius", "disillusion", "frailty", "loyalty", "poisoned wine"] },
      { marks: 7, description: "Discusses Ophelia's role and its effect on Hamlet's attitude/actions (e.g. her rejection of him, his cruelty towards her, his reaction to her death and the duel with Laertes), with specific reference to the play.", keywords: ["ophelia", "rejection", "spurning", "death", "laertes", "duel"] },
      { marks: 6, description: "Supports the discussion with a range of specific, accurate examples/incidents from across the play (not just one episode).", keywords: ["example", "act", "scene", "incident"] },
      { marks: 5, description: "Reaches a coherent, well-supported conclusion critically evaluating the validity of the statement, in a well-structured essay of appropriate length.", keywords: ["conclusion", "validity", "critically", "therefore", "structure"] },
    ],
  },

  // ============ QUESTION 11: HAMLET — CONTEXTUAL (25 marks) ============
  {
    number: "11", sub_number: "11.1",
    text: "Read Extract E (Act 3 Scene 1, Ophelia's 'O, what a noble mind' speech and Claudius/Polonius's plan) and Extract F (Act 3 Scene 4, the Ghost's appearance in the closet scene) from Hamlet. Describe what occurred between Hamlet and Ophelia just prior to Extract E.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "Ophelia has returned Hamlet's love tokens, which he denies giving her. He insults her and is further angered on realising she has lied to him about her father's whereabouts. He storms off after viciously rejecting her.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Ophelia returns Hamlet's love tokens, which he denies giving her, and he insults her.", keywords: ["love tokens", "returns", "denies", "insults"] },
      { marks: 1, description: "He is further angered realising she lied about her father's whereabouts, and storms off after rejecting her.", keywords: ["lied", "father", "whereabouts", "storms off", "rejecting"] },
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "Why do Claudius and Polonius enter 'from behind the arras' (line 13)?",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Literal",
    model_answer: "Claudius and Polonius have hidden behind an arras to spy on the conversation between Ophelia and Hamlet, so as to discover the cause of his apparent madness.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "They were hiding/spying on the conversation between Ophelia and Hamlet.", keywords: ["spying", "hiding", "eavesdrop", "conversation"] },
      { marks: 1, description: "Their purpose was to discover the cause of Hamlet's apparent madness.", keywords: ["cause", "madness", "discover"] },
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Refer to lines 11–12: 'O, woe is … what I see!' Explain what these lines reveal about Ophelia's state of mind.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Inference",
    model_answer: "Ophelia is distressed/heartbroken/sorrowful at the change she has observed in Hamlet. She is devastated at the perceived deterioration of his mental state, distraught that his sweet 'vows' have been replaced by a cruel outburst.",
    marking_notes: "Award 1 mark for Ophelia's state of mind and 1 mark for an explanation.",
    marking_points: [
      { marks: 1, description: "Names her state of mind: distressed, heartbroken, sorrowful, or devastated.", keywords: ["distressed", "heartbroken", "sorrowful", "devastated"] },
      { marks: 1, description: "Explains it: distraught at the perceived deterioration of Hamlet's mental state / his sweet vows replaced by cruelty.", keywords: ["deterioration", "vows", "cruel", "outburst", "mental state"] },
    ],
  },
  {
    number: "11", sub_number: "11.4",
    text: "Refer to lines 16–19: 'There's something in … be some danger.' Discuss the insight given into Claudius's character in these lines.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Claudius is perceptive/astute/shrewd. He does not simply accept Polonius's theory that Hamlet is mad or suffering from unrequited love. He is able to discern that Hamlet is only feigning madness and suspects another reason for it, fearing Hamlet might be a threat to him.",
    marking_notes: "Award 3 marks for two ideas well discussed.",
    marking_points: [
      { marks: 1, description: "Claudius is perceptive/astute/shrewd — not simply accepting Polonius's theory.", keywords: ["perceptive", "astute", "shrewd", "polonius"] },
      { marks: 1, description: "He discerns Hamlet is only feigning madness and suspects another reason.", keywords: ["feigning", "suspects", "another reason"] },
      { marks: 1, description: "He fears Hamlet might be a threat to him.", keywords: ["threat", "fears", "danger"] },
    ],
  },
  {
    number: "11", sub_number: "11.5",
    text: "Refer to lines 32–34: 'Let her be … all their conference.' Discuss how Polonius's actions here are typical of him.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Polonius's devious nature causes him to use spying as his chief method of getting information — he has sent Reynaldo to spy on Laertes and now intends to spy on the conversation between Gertrude and Hamlet, hiding behind the arras to eavesdrop. His words 'so please you' show his attentiveness to Claudius's wishes and need for approval, highlighting his obsequious/sycophantic nature.",
    marking_notes: "Award 3 marks for two well-developed ideas.",
    marking_points: [
      { marks: 1, description: "Polonius habitually uses spying to gather information (e.g. sending Reynaldo to spy on Laertes).", keywords: ["spying", "reynaldo", "laertes", "eavesdrop"] },
      { marks: 1, description: "He intends to hide behind the arras to eavesdrop on Gertrude and Hamlet.", keywords: ["arras", "hide", "eavesdrop", "gertrude"] },
      { marks: 1, description: "'So please you' shows his obsequious/sycophantic need for Claudius's approval.", keywords: ["obsequious", "sycophantic", "approval", "so please you"] },
    ],
  },
  {
    number: "11", sub_number: "11.6",
    text: "Refer to lines 5–7: 'Do you not … your dread command?' Account for Hamlet's words to the Ghost.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "Hamlet has been instructed by his father's ghost to avenge his murder. However, despite having the opportunity to kill Claudius while he is at prayer, Hamlet let the opportunity pass. His guilt at not acting swiftly enough causes him to respond defensively.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Hamlet has been instructed by the Ghost to avenge his father's murder.", keywords: ["ghost", "avenge", "instructed", "murder"] },
      { marks: 1, description: "He let the opportunity to kill Claudius at prayer pass, and his guilt causes his defensive response.", keywords: ["claudius", "prayer", "guilt", "defensive", "delay"] },
    ],
  },
  {
    number: "11", sub_number: "11.7",
    text: "Explain the significance of the reference to 'weeds' (line 25) in the context of the play as a whole.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "The image of 'weeds' signifies the corruption rampant in Denmark. Gertrude has allowed corruption to flourish by ignoring Claudius's machinations. Elsewhere in the play, Denmark is referred to as an 'unweeded garden'.",
    marking_notes: "Award 2 marks only if the significance is explained.",
    marking_points: [
      { marks: 1, description: "'Weeds' signifies the corruption rampant in Denmark.", keywords: ["corruption", "denmark", "weeds"] },
      { marks: 1, description: "Links to Gertrude allowing corruption to flourish, and/or the play's earlier 'unweeded garden' image.", keywords: ["gertrude", "unweeded garden", "flourish", "ignoring"] },
    ],
  },
  {
    number: "11", sub_number: "11.8",
    text: "Refer to lines 11–14: 'But look, amazement … to her, Hamlet.' Comment on the irony of the Ghost's words in these lines.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Despite Gertrude's betrayal of their marriage vows, the Ghost of King Hamlet is concerned about her well-being. He realises she is morally weak and implores Hamlet to show compassion, recognising her troubled conscience — ironic given her betrayal and his own murder at Claudius's hands.",
    marking_notes: "Award 3 marks only if irony is well discussed.",
    marking_points: [
      { marks: 1, description: "Despite Gertrude's betrayal of their marriage vows, the Ghost is concerned about her well-being.", keywords: ["betrayal", "vows", "concerned", "well-being"] },
      { marks: 1, description: "He implores Hamlet to show her compassion, recognising her troubled conscience.", keywords: ["compassion", "conscience", "implores"] },
      { marks: 1, description: "This is ironic given her role in his death/betrayal, and his own murder by Claudius.", keywords: ["irony", "murder", "claudius", "betrayal"] },
    ],
  },
  {
    number: "11", sub_number: "11.9",
    text: "Refer to line 30: 'O, Hamlet, thou hast cleft my heart in twain.' If you were the director of a production of Hamlet, how would you instruct the actor to deliver these lines? Pay specific attention to body language and tone. Motivate your instructions.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Gertrude might put her hand on her heart, wring her hands, or hold out her hands in a gesture of pleading. Her tone might be anguished/agonised/tormented/distressed, because her loyalties are divided and she is conflicted between guilt at what she has done and her desire to preserve her marriage with Claudius.",
    marking_notes: "Award 3 marks only if the candidate refers to both body language and tone, and includes a justification. Credit valid alternative responses; the response should be convincing in context.",
    marking_points: [
      { marks: 1, description: "Suggests appropriate body language (e.g. hand on heart, wringing hands, pleading gesture).", keywords: ["hand", "heart", "wring", "gesture", "pleading"] },
      { marks: 1, description: "Suggests an appropriate tone (e.g. anguished, agonised, tormented, distressed).", keywords: ["anguished", "agonised", "tormented", "distressed", "tone"] },
      { marks: 1, description: "Motivates the instruction: her divided loyalties/guilt versus her desire to preserve her marriage to Claudius.", keywords: ["divided", "loyalties", "guilt", "conflicted", "claudius"] },
    ],
  },
  {
    number: "11", sub_number: "11.10",
    text: "Refer to lines 9–10: 'This visitation … almost blunted purpose.' Using your knowledge of the play as a whole, critically discuss the accuracy of the Ghost's observation that Hamlet's purpose has been 'blunted'.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Although Hamlet has not acted as swiftly as the Ghost would like, his purpose has not truly been 'blunted', as his obsession with avenging his father consumes him; he has been consistently plotting even when not evident in action, and needed to ascertain Claudius's guilt via the 'antic disposition' and the play-within-a-play. He delays killing Claudius at prayer so his soul won't ascend to heaven, and his accidental killing of Polonius hastens his exile — but he does avenge his father on returning to Denmark. Alternatively, his 'antic disposition' might be seen as a genuine ploy to delay, since his anxiety/self-doubt and moral conflict with the idea of revenge do defer his purpose.",
    marking_notes: "Award 3 marks only if there is a critical discussion. Credit valid alternative/mixed responses.",
    marking_points: [
      { marks: 1, description: "Argues his purpose is not truly blunted: his obsession with revenge consumes him and he is consistently plotting (e.g. testing Claudius's guilt via the play, delaying at prayer to damn Claudius's soul).", keywords: ["obsession", "revenge", "plotting", "prayer", "guilt", "play-within-a-play"] },
      { marks: 1, description: "Notes that he does eventually avenge his father on returning to Denmark, despite the accidental killing of Polonius hastening his exile.", keywords: ["returns", "denmark", "avenge", "polonius", "exile"] },
      { marks: 1, description: "Critically weighs the alternative view: his 'antic disposition'/self-doubt and moral conflict over revenge may genuinely have deferred his purpose.", keywords: ["antic disposition", "self-doubt", "moral conflict", "delay", "deferred"] },
    ],
  },
];

export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
