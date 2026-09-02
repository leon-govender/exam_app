// Real DBE past paper: English Home Language P2 (Literature), November
// 2023, National Senior Certificate.
// Source: official DBE question paper (25 pages) + the genuine official DBE
// marking guidelines (24 pages, confirmed by its own cover page: "MARKING
// GUIDELINES", official crest, "Copyright reserved"), both extracted from
// a single combined 52-page PDF (QP = pages 1-25, memo = pages 26-52) via
// stanmorephysics.com.
//
// ============================== SCOPE ======================================
// The real P2 paper offers a CHOICE of prescribed novel (The Picture of
// Dorian Gray OR Life of Pi) and drama (Hamlet OR Othello OR The Crucible),
// and this app has no "answer one of several" mechanism — every seeded
// question would be presented to the student. This file ingests ONLY the
// content relevant to the son who studied The Picture of Dorian Gray and
// Hamlet:
//   - ALL of Section A (Poetry): Questions 1-5 (prescribed poems 'Sonnet
//     130', 'Talk to the Peach Tree', 'The Shipwreck', 'Poem of Return', plus
//     the compulsory unseen poem 'The Abandoned Mine') — poetry questions are
//     short and don't depend on which novel/drama a student studied, so all
//     of Section A is included even though the real exam only requires
//     answering 2 of the 4 prescribed poems.
//   - Question 6 (Dorian Gray essay) and Question 7 (Dorian Gray contextual).
//   - Question 10 (Hamlet essay) and Question 11 (Hamlet contextual).
// Life of Pi (Questions 8-9), Othello (Questions 12-13) and The Crucible
// (Questions 14-15) are DELIBERATELY EXCLUDED — not read closely, not
// ingested at all.
//
// Because both the essay AND contextual question are included for both
// Dorian Gray and Hamlet (the real exam allows only ONE of the two per
// genre), and because all 4 prescribed poems are included (the real exam
// allows only 2 of 4), this file's total is 150 marks — MORE than the real
// exam's 80-mark single sitting (30 Poetry + 25 Novel + 25 Drama, with
// internal choice). That is intentional: this is a practice bank covering
// everything relevant to the son's specific setworks, not a simulation of
// exam-day choice constraints. `paper.total_marks` below is set to 150 (the
// scoped total), not 80.
//
// ============================ GRADING APPROACH ==============================
// CONTEXTUAL questions (2, 3, 4, 5, 7, 11) quote specific lines/extracts and
// ask short-answer literary-analysis questions. The official memo gives
// itemised point-by-point answers for these, so `marking_points` here is a
// direct transcription (in our own words in a few places to avoid verbatim
// duplication of memo prose) of the memo's actual accepted answers, with
// marks summing exactly to each sub-question's own allocation.
//
// ESSAY questions (1, 6, 10) are marked holistically in the real exam using
// a generic literature-essay rubric (planning/content, language/style,
// structure/technique — see the memo's reference to a rubric on p. 23/24 of
// the marking guidelines, which is not reproduced here since this app has
// no holistic-rubric grading mode). Since this app only supports
// `marking_points`, each essay question below approximates that holistic
// rubric with a small number of BROAD criteria distilled from the bullet
// list of key content/arguments the memo itself provides for that essay
// (DBE memos give such a list even for essay questions, despite the actual
// mark being a holistic score). This is a DELIBERATE, DOCUMENTED
// SIMPLIFICATION, not a literal transcription of an itemised memo — flagged
// again individually above each essay question below.
//
// This paper introduces English Home Language as a new subject to the app.
// No images are needed — every question here is pure text (poems, prose
// extracts, play extracts all reproduced in full in the question text).

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
  year: 2023,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 150, // real exam is 2.5 hours; kept even though scoped content exceeds a real sitting's marks
  total_marks: 150, // SCOPED total (see header) — not the real exam's 80
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

import type { MarkingPoint } from "../../src/lib/grader";

export const questions: QuestionSeed[] = [
  // ======================================================================
  // SECTION A: POETRY (30 marks) — all four prescribed poems + the
  // compulsory unseen poem are included; the real exam requires only 2 of
  // the 4 prescribed poems.
  // ======================================================================

  // ---------- QUESTION 1: 'Sonnet 130' — ESSAY QUESTION (10 marks) ----------
  // Approximation of a holistic rubric (see header). The memo gives a long
  // bullet list of content a strong essay should engage with; distilled here
  // into four broad, gradable criteria summing to 10 marks.
  {
    number: "1", sub_number: null,
    text: "Read the poem 'Sonnet 130' by William Shakespeare:\n\n" +
      "My mistress' eyes are nothing like the sun,\n" +
      "Coral is far more red than her lips' red,\n" +
      "If snow be white, why then her breasts are dun,\n" +
      "If hairs be wires, black wires grow on her head.\n" +
      "I have seen roses damasked, red and white,\n" +
      "But no such roses see I in her cheeks,\n" +
      "And in some perfumes is there more delight\n" +
      "Than in the breath that from my mistress reeks.\n" +
      "I love to hear her speak, yet well I know\n" +
      "That music hath a far more pleasing sound.\n" +
      "I grant I never saw a goddess go:\n" +
      "My mistress when she walks treads on the ground.\n" +
      "And yet, by heaven, I think my love as rare\n" +
      "As any she belied with false compare.\n\n" +
      "The speaker mocks the manner in which women are presented in traditional love poetry. " +
      "Discuss the extent to which you agree with this statement with close reference to imagery, tone and structure. " +
      "Your response should take the form of a well-constructed essay of 250–300 words (about ONE page).",
    marks: 10, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay argues that the speaker mocks/satirises the clichéd, exaggerated comparisons of traditional love poetry " +
      "(bright eyes, red lips, rosy cheeks, goddess-like grace) by systematically denying them of his mistress in the two quatrains, then " +
      "reveals in the third quatrain and closing couplet that his love is genuine precisely because it does not depend on such false, " +
      "idealised imagery — the poem's tone shifts from apparently derogatory/unflattering to sincerely appreciative, and this movement, " +
      "carried by the sonnet's quatrain-quatrain-quatrain-couplet structure, is what makes the mockery of traditional love poetry effective.",
    marking_notes: "Marked holistically by rubric in the real exam (see header comment) — approximated here as four broad criteria.",
    marking_points: [
      { marks: 3, description: "Identifies and discusses the poem's central argument: the speaker rejects the exaggerated, idealised comparisons of traditional love poetry as false/insincere, arguing that his love is more genuine and 'rare' precisely because it doesn't rely on them.", keywords: ["traditional", "comparisons", "false", "idealised", "genuine", "sincere", "rare", "cliche"] },
      { marks: 3, description: "Analyses at least one specific image/figure of speech from the poem (e.g. the sun, coral, damasked roses, the goddess comparison) with a concrete example and explains its effect in undercutting conventional beauty standards.", keywords: ["imagery", "simile", "comparison", "sun", "coral", "roses", "goddess", "hyperbole"] },
      { marks: 2, description: "Comments on the poem's structure/form (three quatrains building the mock-comparisons, followed by the volta/turn in the closing rhyming couplet) and its effect on meaning or tone.", keywords: ["quatrain", "couplet", "structure", "volta", "turn", "form", "sonnet"] },
      { marks: 2, description: "Discusses the shift in tone across the poem (from apparently unflattering/derogatory to genuinely appreciative/tender) and reaches a coherent, well-supported conclusion about the extent of agreement with the statement.", keywords: ["tone", "shift", "sincere", "mocking", "satirical", "ironic", "conclusion"] },
    ],
  },

  // ---------- QUESTION 2: 'Talk to the Peach Tree' — CONTEXTUAL (10 marks) ----------
  {
    number: "2", sub_number: "2.1",
    text: "Read the poem 'Talk to the Peach Tree' by Sipho Sepamla:\n\n" +
      "Let's talk to the swallows visiting us in summer\nask how it is in other countries\n\n" +
      "Let's talk to the afternoon shadow\nask how the day has been so far\n\n" +
      "Let's raise our pets to our level\nask them what they don't know of us\n\n" +
      "words have lost meaning\nlike all notations they've been misused\n\n" +
      "most people will admit\na whining woman can overstate her case\n\n" +
      "Talk to the paralysing heat in the air\ninquire how long the mercilessness will last\n\n" +
      "Let's pick out items from the rubbish heap\nask how the stench is like down there\n\n" +
      "Let's talk to the peach tree\nfind out how it feels to be in the ground\n\n" +
      "Let's talk to the moon going down\nask if it isn't enough eyeing what's been going on\n\n" +
      "come on\nlet's talk to the devil himself\nit's about time\n\n" +
      "2.1 Explain the use of the word, 'stench' in line 14.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "'Stench' suggests a horrible, disgusting smell, implying that the living conditions for people of colour were awful and inhumane under apartheid — they were treated as lacking value/disposable, and the word may also imply that the apartheid system itself was rotten and unbearable.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "'Stench' implies the living/social conditions of people of colour under apartheid were horrible, disgusting or inhumane.", keywords: ["horrible", "disgusting", "inhumane", "conditions", "smell"] },
      { marks: 1, description: "Implies people of colour were treated as valueless/disposable, or that the apartheid system itself was rotten/unbearable.", keywords: ["disposable", "valueless", "rotten", "apartheid", "system"] },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Refer to the poem 'Talk to the Peach Tree'. Account for the repetition of the phrase, 'Let's talk' throughout the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The repetition creates a sense of urgency and indicates the speaker's strong desire for discussion; it emphasises the need for open communication and a peaceful resolution, and indicates the speaker's insistence on continuing dialogue even though previous attempts at communication were futile.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Creates a sense of urgency / indicates the speaker's strong desire for discussion.", keywords: ["urgency", "desire", "discussion", "insistence"] },
      { marks: 1, description: "Emphasises the need for open communication and a peaceful resolution, despite futile past attempts.", keywords: ["communication", "peaceful", "resolution", "dialogue", "futile"] },
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Refer to lines 11–12 of 'Talk to the Peach Tree': 'Talk to the paralysing heat in the air/inquire how long the mercilessness will last.' Identify the figure of speech used in line 11.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Metaphor/Personification.",
    marking_notes: "Accept either 'metaphor' or 'personification'.",
    marking_points: [{ marks: 1, description: "Metaphor or personification.", keywords: ["metaphor", "personification"] }],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Refer to lines 11–12 of 'Talk to the Peach Tree': 'Talk to the paralysing heat in the air/inquire how long the mercilessness will last.' Comment on the effectiveness of the image in these lines.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The apartheid system is compared to 'paralysing heat': 'paralysing' indicates a lack of movement referring to restrictive apartheid laws, while 'heat' emphasises the stifling, oppressive nature of the system. The 'mercilessness' of the oppressors is emphasised by the question of how long their callous treatment must be endured — effectively conveying how the apartheid regime inflicted suffering on people of colour.",
    marking_notes: "Award 2 marks for a comment on the effectiveness of the image.",
    marking_points: [
      { marks: 1, description: "'Paralysing heat' compared to the apartheid system: 'paralysing' suggests restrictive laws/lack of movement, 'heat' suggests stifling oppression.", keywords: ["paralysing", "heat", "restrictive", "oppressive", "stifling"] },
      { marks: 1, description: "'Mercilessness' emphasises the callous, prolonged suffering inflicted on people of colour by the apartheid regime.", keywords: ["mercilessness", "callous", "suffering", "oppressors", "regime"] },
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "Refer to lines 19–21 of 'Talk to the Peach Tree': 'come on/let's talk to the devil himself/it's about time.' Critically discuss how these lines convey the central message of the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The final stanza conveys a sense of urgency/resignation/cynicism and a realisation that, for a resolution to be found, the oppressed must be courageous enough to overcome their aversion to dealing with the apartheid government by conversing with 'the devil'. Despite the apparent futility of engaging with an oppressive system, there is no other option but to engage with the enemy — the blunt closing instruction highlights the inevitability of dialogue with the regime.",
    marking_notes: "Award 3 marks only if there is a critical discussion linked to the central message.",
    marking_points: [
      { marks: 1, description: "Identifies the sense of urgency/resignation/cynicism in the final lines.", keywords: ["urgency", "resignation", "cynicism", "inevitable"] },
      { marks: 2, description: "Critically links this to the central message: despite the futility of dialogue with an oppressive regime ('the devil'), engagement is unavoidable if a resolution is to be found.", keywords: ["devil", "oppressive", "regime", "dialogue", "inevitable", "engage"] },
    ],
  },

  // ---------- QUESTION 3: 'The Shipwreck' — CONTEXTUAL (10 marks) ----------
  {
    number: "3", sub_number: "3.1",
    text: "Read the poem 'The Shipwreck' by Emily Dickinson:\n\n" +
      "Glee! the great storm is over!\nFour have recovered the land;\nForty gone down together\nInto the boiling sand.\n\n" +
      "Ring, for the scant salvation!\nToll, for the bonnie souls, –\nNeighbour and friend and bridegroom,\nSpinning upon the shoals!\n\n" +
      "How they will tell the shipwreck\nWhen winter shakes the door,\nTill the children ask, 'But the forty?\nDid they come back no more?'\n\n" +
      "Then a silence suffuses the story,\nAnd a softness the teller's eye;\nAnd the children no further question,\nAnd only the waves reply.\n\n" +
      "3.1 Identify and explain the mood in line 1: 'Glee! the great storm is over!'",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The exclamation 'Glee!' creates a mood of joy/happiness/relief that the danger presented by the storm has passed.",
    marking_notes: "Award 1 mark for the identification of mood and 1 mark for an explanation.",
    marking_points: [
      { marks: 1, description: "Identifies the mood as joy/happiness/relief/glee.", keywords: ["joy", "happiness", "relief", "glee"] },
      { marks: 1, description: "Explains this is because the danger of the storm has passed.", keywords: ["danger", "storm", "passed", "over"] },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "Refer to line 7 of 'The Shipwreck': 'Neighbour and friend and bridegroom'. Explain why the victims of the shipwreck are described in this manner.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The words acknowledge the close and varied relationships that exist between people in the community; this intensifies the sense of loss and makes the tragedy more personal and real, as each of the deceased may have left behind a loved one.",
    marking_notes: "Award 2 marks for one idea well-explained.",
    marking_points: [{ marks: 2, description: "Acknowledges the close, varied community relationships (neighbour, friend, bridegroom), intensifying the sense of loss and making the tragedy personal/real.", keywords: ["community", "relationships", "personal", "loss", "intensifies"] }],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "Refer to lines 3–4 of 'The Shipwreck': 'Forty gone down together/Into the boiling sand.' Identify the figure of speech used in these lines.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Metaphor/Euphemism.",
    marking_notes: "Accept either 'metaphor' or 'euphemism'.",
    marking_points: [{ marks: 1, description: "Metaphor or euphemism.", keywords: ["metaphor", "euphemism"] }],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Refer to lines 3–4 of 'The Shipwreck': 'Forty gone down together/Into the boiling sand.' Comment on the effectiveness of this image.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The storm has caused huge surges of water to stir up the ocean bed, creating a dangerous concoction of sand and water; the turbulent, whirling motion of the rough sea is similar to boiling water. The image is effective because it emphasises the violence and terror of the forty people who lost their lives under such horrific circumstances.",
    marking_notes: "Award 2 marks for a comment on the effectiveness of the image.",
    marking_points: [
      { marks: 1, description: "The turbulent, whirling motion of the rough sea is likened to boiling water/sand stirred up by the storm.", keywords: ["turbulent", "whirling", "boiling", "storm", "sea"] },
      { marks: 1, description: "Effective because it emphasises the violence and terror of the forty people's deaths.", keywords: ["violence", "terror", "deaths", "horrific"] },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "Refer to lines 13–16 of 'The Shipwreck': 'Then a silence suffuses the story,/And a softness the teller's eye;/And the children no further question,/And only the waves reply.' Critically discuss the effectiveness of these lines as a conclusion to the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The last stanza is effective as it conveys the finality of death and the idea that nature is a powerful, uncontrollable force. There is a poignant acceptance of the mysterious workings of nature — the children realise there is no way of explaining a natural disaster that claims so many lives, and an acknowledgment that 'only the waves' have the answers: some things are inexplicable and beyond human comprehension.",
    marking_notes: "Award 3 marks only if there is a critical discussion linked to the conclusion.",
    marking_points: [
      { marks: 1, description: "Conveys the finality of death and nature's uncontrollable power.", keywords: ["finality", "death", "nature", "powerful"] },
      { marks: 2, description: "Critically links this to a poignant acceptance that some things (why the storm claimed so many lives) are inexplicable/beyond human comprehension — 'only the waves' have the answers.", keywords: ["acceptance", "inexplicable", "waves", "mystery", "comprehension"] },
    ],
  },

  // ---------- QUESTION 4: 'Poem of Return' — CONTEXTUAL (10 marks) ----------
  {
    number: "4", sub_number: "4.1",
    text: "Read the poem 'Poem of Return' by Jofre Rocha:\n\n" +
      "When I return from the land of exile and silence,\ndo not bring me flowers.\n\n" +
      "Bring me rather all the dews,\ntears of dawns which witnessed dramas.\n" +
      "Bring me the immense hunger for love\nand the plaint of tumid sexes in star-studded night.\n" +
      "Bring me the long night of sleeplessness\nwith mothers mourning, their arms bereft of sons.\n" +
      "When I return from the land of exile and silence,\nno, do not bring me flowers ...\n\n" +
      "Bring me only, just this\nthe last wish of heroes fallen at day-break\n" +
      "with a wingless stone in hand\nand a thread of anger snaking from their eyes.\n\n" +
      "4.1 Explain the use of the word, 'silence' (line 1) in the context of the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "'Silence' suggests that the speaker's time in exile has been lonely and he feels isolated from his people. He misses hearing the sounds of home, and being in exile, he feels that his voice of protest may be censored.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Suggests loneliness/isolation from his people during exile.", keywords: ["lonely", "isolated", "exile", "alone"] },
      { marks: 1, description: "Suggests his voice of protest may be censored/silenced, or that he misses the sounds of home.", keywords: ["censored", "voice", "protest", "silenced", "home"] },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "Refer to 'Poem of Return'. Account for the use of the ellipsis in line 10: 'no, do not bring me flowers ...'",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The ellipsis creates a dramatic pause after the speaker emphatically states that he does not want flowers; the reader waits with anticipation to find out what it is that the speaker actually wants.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Creates a dramatic pause after the emphatic rejection of flowers.", keywords: ["dramatic", "pause", "emphatic"] },
      { marks: 1, description: "Builds the reader's anticipation to find out what the speaker actually wants instead.", keywords: ["anticipation", "suspense", "reader"] },
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Refer to lines 3–4 of 'Poem of Return': 'Bring me rather all the dews,/tears of dawns which witnessed dramas.' Identify the figure of speech in these lines.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Personification.",
    marking_notes: "Accept only 'personification'.",
    marking_points: [{ marks: 1, description: "Personification.", keywords: ["personification"] }],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Refer to lines 3–4 of 'Poem of Return': 'Bring me rather all the dews,/tears of dawns which witnessed dramas.' Comment on the effectiveness of this image.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "Dawn is personified to suggest that witnessing all the tragedy has brought it to tears ('dew'). The injustices the people have suffered have been so immense and frequent that even nature responds with grief and sorrow.",
    marking_notes: "Award 2 marks for a comment on the effectiveness of the image.",
    marking_points: [{ marks: 2, description: "Dawn personified as weeping ('dew' as tears) suggests the injustices/tragedies suffered were so immense that even nature responds with grief and sorrow.", keywords: ["dawn", "tears", "dew", "grief", "nature", "tragedy"] }],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Refer to lines 11–14 of 'Poem of Return': 'Bring me only, just this/the last wish of heroes fallen at day-break/with a wingless stone in hand/and a thread of anger snaking from their eyes.' Critically discuss how the final stanza reinforces the central message of the poem.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The stanza conveys how the speaker wants only one thing: justice for the people who have lost their lives in the struggle for freedom. He views those who died for the cause as the real 'heroes' who fought a difficult, hopeless battle ('wingless stone'). The speaker is angry and insistent that their 'last wish' be fulfilled.",
    marking_notes: "Award 3 marks only if there is a critical discussion linked to the central message.",
    marking_points: [
      { marks: 1, description: "Identifies that the speaker wants justice for the 'heroes' who died in the struggle for freedom.", keywords: ["justice", "heroes", "struggle", "freedom", "died"] },
      { marks: 2, description: "Critically links this to the central message: the futility/hopelessness of their battle ('wingless stone') and the speaker's anger and insistence that their 'last wish' be honoured.", keywords: ["wingless stone", "hopeless", "anger", "insistent", "last wish"] },
    ],
  },

  // ---------- QUESTION 5: 'The Abandoned Mine' (unseen) — CONTEXTUAL (10 marks) ----------
  {
    number: "5", sub_number: "5.1",
    text: "Read the unseen poem 'The Abandoned Mine' by Charles Claybrook Wollacott:\n\n" +
      "A heap of rock marks the abandoned mine.\nThe veld's unpitying silence lies around\n" +
      "Those broken stones – a mute and mournful sign\nOf human enterprise with failure crowned.\n" +
      "Here is the trail along which used to pass\nThe workers to and fro: a narrow track\n" +
      "That winds away among the bush and grass –\nBut those who trod it will no more come back!\n" +
      "Time, with slow hands, shall from the scene anew\nRepair the gashes in the wounded soil,\n" +
      "And cover up the last remaining clue\nTo a poor useless record of men's toil.\n" +
      "And this the mound they built when hopes were high,\nShall be a grave, where those hopes buried lie.\n\n" +
      "5.1 Account for the use of the word, 'abandoned' in the title and line 1 of the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The mine is in a derelict condition. It is empty/deserted/uninhabited/vacant, and it is no longer a productive mine.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "The mine is derelict/deserted/empty/uninhabited.", keywords: ["derelict", "deserted", "empty", "uninhabited", "vacant"] },
      { marks: 1, description: "It is no longer productive/in use/worked.", keywords: ["productive", "worked", "unused", "disused"] },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "Refer to lines 5–8 of 'The Abandoned Mine': 'Here is the trail along which used to pass/The workers to and fro: a narrow track/That winds away among the bush and grass –/But those who trod it will no more come back!' Identify and explain the tone conveyed in these lines.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Inference",
    model_answer: "The tone is nostalgic — there is a yearning/longing for a time when the trail was busy and the mine was productive. Alternatively, the tone is sad and regretful at the loss of the workers who died toiling in the mine, or at the loss of livelihood and its impact on mining communities.",
    marking_notes: "Award 1 mark for the identification of tone and 1 mark for the explanation.",
    marking_points: [
      { marks: 1, description: "Identifies the tone as nostalgic, or sad/regretful.", keywords: ["nostalgic", "sad", "regretful", "yearning", "longing"] },
      { marks: 1, description: "Explains this as longing for the busy/productive past, or grief at the loss of workers/livelihood.", keywords: ["busy", "productive", "past", "loss", "workers", "livelihood"] },
    ],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Refer to lines 9–12 of 'The Abandoned Mine': 'Time, with slow hands, shall from the scene anew/Repair the gashes in the wounded soil,/And cover up the last remaining clue/To a poor useless record of men's toil.' Identify the figure of speech in these lines.",
    marks: 1, topicKey: "poetry", cognitiveLevelName: "Literal",
    model_answer: "Personification.",
    marking_notes: "Accept only 'personification'.",
    marking_points: [{ marks: 1, description: "Personification.", keywords: ["personification"] }],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Refer to lines 9–12 of 'The Abandoned Mine': 'Time, with slow hands, shall from the scene anew/Repair the gashes in the wounded soil,/And cover up the last remaining clue/To a poor useless record of men's toil.' Comment on how this image adds meaning to the poem.",
    marks: 2, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The image implies that over time the earth will be restored and resume its natural state, with little evidence that a mine was ever there. Time is depicted as a force mightier than mankind's pursuits.",
    marking_notes: "Award 2 marks only if a comment is made.",
    marking_points: [{ marks: 2, description: "Time will restore/heal the land to its natural state, erasing evidence of the mine — depicting time as a force mightier than human endeavour.", keywords: ["restore", "heal", "natural", "erase", "mightier", "time"] }],
  },
  {
    number: "5", sub_number: "5.4",
    text: "Refer to lines 13–14 of 'The Abandoned Mine': 'And this the mound they built when hopes were high,/Shall be a grave, where those hopes buried lie.' Critically discuss how the diction in these lines contributes to the central idea of the poem. Your response should include TWO examples of diction.",
    marks: 3, topicKey: "poetry", cognitiveLevelName: "Evaluation",
    model_answer: "The poem's central idea is that nature endures while human endeavours do not. Despite the hard work undertaken by men to accomplish their ambitions ('hopes'), their endeavours are ultimately futile. 'Mound' refers to the mine dump created when digging for resources; this becomes a 'grave', suggesting not only the possible loss of miners' lives but also the death and burial of their dreams of enriching themselves. Their initial optimism has been dashed as they never extracted the riches they anticipated.",
    marking_notes: "Award 3 marks for a critical discussion of the central idea, supported by TWO examples of diction. No marks for mere identification of diction.",
    marking_points: [
      { marks: 1, description: "Identifies and comments on the word 'mound' (the mine dump/heap of failed effort).", keywords: ["mound", "dump", "heap"] },
      { marks: 1, description: "Identifies and comments on the word 'grave' or 'hopes buried' (death/burial of the miners' dreams and, possibly, lives).", keywords: ["grave", "buried", "hopes", "death"] },
      { marks: 1, description: "Critically links both examples to the central idea: human endeavour and ambition are ultimately futile against enduring nature/time.", keywords: ["futile", "endeavour", "ambition", "nature", "endure"] },
    ],
  },

  // ======================================================================
  // SECTION B: NOVEL — The Picture of Dorian Gray (Oscar Wilde), 25 marks
  // ======================================================================

  // ---------- QUESTION 6: ESSAY QUESTION (25 marks) ----------
  // Approximation of a holistic rubric (see header) — distilled from the
  // memo's bullet list of key content into five broad criteria.
  {
    number: "6", sub_number: null,
    text: "Dorian Gray's refusal to face reality leads to his moral decline. Critically discuss the extent to which you agree with this statement. Your response should take the form of a well-constructed essay of 400–450 words (2–2½ pages).",
    marks: 25, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "A strong essay traces Dorian's refusal to face reality from his wish to remain eternally young (allowing him to live without consequence), through his rejection of the 'real' Sibyl once she loses her illusory artistic magic and his refusal to accept responsibility for her death, to his growing dependence on Lord Henry's hedonistic philosophy and the Yellow Book, culminating in his murder of Basil (whom he depersonalises as 'the thing'), his use of opium to escape his conscience, and finally his destruction of the portrait — the one act that forces reality and consequence back onto him, resulting in his death. A balanced response may also consider that Dorian's moral decline stems partly from external influences (Lord Henry, society's obsession with beauty) rather than his refusal to face reality alone.",
    marking_notes: "Marked holistically by rubric in the real exam (see header comment) — approximated here as five broad criteria.",
    marking_points: [
      { marks: 5, description: "Discusses Dorian's wish for eternal youth (in response to Basil's portrait/Lord Henry's influence) as the founding act of refusing reality, and explains how it frees him to live without consequence.", keywords: ["eternal youth", "portrait", "wish", "consequence", "Lord Henry"] },
      { marks: 5, description: "Discusses Dorian's rejection of Sibyl Vane once she becomes 'real' (loses her artistic illusion), and his refusal to accept responsibility for her suicide (dismissing it as a 'wonderful ending to a wonderful play').", keywords: ["Sibyl Vane", "reality", "suicide", "wonderful ending", "responsibility"] },
      { marks: 5, description: "Discusses Dorian's growing moral corruption under Lord Henry's hedonistic philosophy and the influence of the Yellow Book, and/or his murder of Basil Hallward and depersonalising him as 'the thing'.", keywords: ["hedonism", "Yellow Book", "Basil", "murder", "the thing"] },
      { marks: 5, description: "Discusses Dorian's use of opium/sensation to escape confronting his conscience, and his lack of accountability/punishment throughout the novel, which prevents any growth or reflection.", keywords: ["opium", "conscience", "accountability", "punishment", "escape"] },
      { marks: 5, description: "Reaches a coherent, well-supported conclusion on the extent of agreement with the statement, referencing the destruction of the portrait and Dorian's death as the final, inescapable confrontation with reality — and/or considers a balanced/alternative view (e.g. that society and Lord Henry share responsibility for his decline).", keywords: ["destroys the portrait", "death", "conclusion", "reunites", "society"] },
    ],
  },

  // ---------- QUESTION 7: CONTEXTUAL QUESTION (25 marks) ----------
  {
    number: "7", sub_number: "7.1",
    text: "Read Extract A from The Picture of Dorian Gray (Chapter 7):\n\n" +
      "She rose from her knees and, with a piteous expression of pain in her face, came across the room to him. She put her hand upon his arm, and looked into his eyes. He thrust her back. 'Don't touch me!' he cried.\n\n" +
      "A low moan broke from her, and she flung herself at his feet, and lay there like a trampled flower. 'Dorian, Dorian, don't leave me!' she whispered.\n\n" +
      "… 'Don't go away from me. I couldn't bear it. Oh! don't go away from me. My brother … No; never mind. He didn't mean it. He was in jest. … But you, oh! can't you forgive me for to-night? I will work so hard, and try to improve. Don't be cruel to me because I love you better than anything in the world. After all, it is only once that I have not pleased you. But you are quite right, Dorian. I should have shown myself more of an artist. It was foolish of me; and yet I couldn't help it. Oh, don't leave me, don't leave me.' A fit of passionate sobbing choked her. She crouched on the floor like a wounded thing, and Dorian Gray, with his beautiful eyes, looked down at her, and his chiselled lips curled in exquisite disdain. There is always something ridiculous about the emotions of people whom one has ceased to love. Sibyl Vane to him seemed to be absurdly melodramatic. Her tears and sobs annoyed him.\n\n" +
      "7.1 Refer to line 3: '\"Don't touch me!\" he cried.' Give TWO reasons for the change in Dorian's feelings toward Sibyl.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "Dorian has been mesmerised by Sibyl's artistry and has imagined himself to be in love with her. However, on the night he takes Lord Henry and Basil to the theatre, her performance is disappointingly dreadful — she has embarrassed him and he is no longer attracted to her.",
    marking_notes: "Award 2 marks for two distinct reasons.",
    marking_points: [
      { marks: 1, description: "Sibyl's performance that night was disappointingly dreadful/bad.", keywords: ["performance", "dreadful", "bad", "acting"] },
      { marks: 1, description: "Dorian was in love with her artistry/talent, not the 'real' Sibyl, and feels embarrassed by her in front of Lord Henry and Basil.", keywords: ["artistry", "talent", "embarrassed", "real"] },
    ],
  },
  {
    number: "7", sub_number: "7.2",
    text: "Refer to Extract A, lines 6–7: 'My brother … He was in jest.' Suggest why Sibyl makes reference to her brother in these lines.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "Sibyl's reference to her brother James reminds us that when she told him she had fallen in love with 'Prince Charming', he was concerned she would get hurt — James is suspicious of Dorian's intentions, especially since Dorian is upper class, and warns Sibyl that if Dorian ever wrongs her, he will kill Dorian. She might be considering using his threat to convince Dorian not to leave her but thinks better of it.",
    marking_notes: "Award 3 marks for any three distinct points.",
    marking_points: [
      { marks: 1, description: "James warned Sibyl to be careful of/was suspicious of Dorian, an upper-class stranger.", keywords: ["James", "warned", "suspicious", "upper class"] },
      { marks: 1, description: "James threatened to kill Dorian if he ever wronged Sibyl.", keywords: ["threatened", "kill", "wronged"] },
      { marks: 1, description: "Sibyl considers using this threat to keep Dorian from leaving her, but decides against it/thinks better of it.", keywords: ["threat", "keep", "leaving", "reconsiders"] },
    ],
  },
  {
    number: "7", sub_number: "7.3",
    text: "Refer to Extract A, lines 4–5: 'A low moan … me!\" she whispered.' Discuss how these lines influence your view of Sibyl.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "The reader might view Sibyl with pity/sympathy, as she is heartbroken and distraught that Dorian is ending their relationship so cruelly — her flinging herself at his feet indicates her desperation, and her fragility is suggested by the comparison to a 'trampled flower'; she is devastated that her dream of marrying her 'Prince Charming' is in tatters. Alternatively, the reader might view Sibyl with disdain, perceiving her as weak/naïve in her response to Dorian's rejection.",
    marking_notes: "Award 1 mark for the reader's view of Sibyl and 2 marks for a discussion thereof.",
    marking_points: [
      { marks: 1, description: "States a view of Sibyl (e.g. pity/sympathy, or disdain/she seems weak/naïve).", keywords: ["pity", "sympathy", "disdain", "weak", "naive"] },
      { marks: 2, description: "Discusses this view with reference to the extract: e.g. her desperation (flinging herself at his feet), her fragility ('trampled flower'), or her devastation that her dream is shattered.", keywords: ["desperation", "trampled flower", "fragility", "devastated", "dream"] },
    ],
  },
  {
    number: "7", sub_number: "7.4",
    text: "Refer to Extract A, lines 12–14: 'Dorian Gray, with … in exquisite disdain.' Comment on what these lines reveal about Dorian in the context of the novel as a whole.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian's contempt for Sibyl is reflected in his sneer; he is cruelly indifferent to the pain he has caused her and dismissive of her feelings. He is self-absorbed and lacks empathy — the sudden change in his attitude toward Sibyl is indicative of his fickle nature. His arrogance is evident in the condescending manner in which he describes her, and the reference to 'his beautiful eyes' reminds us that his handsome appearance hides a cruel nature.",
    marking_notes: "Award 3 marks only if a comment is made.",
    marking_points: [
      { marks: 1, description: "Reveals Dorian's cruelty/contempt/indifference toward Sibyl's suffering.", keywords: ["cruelty", "contempt", "indifferent", "sneer"] },
      { marks: 1, description: "Reveals his self-absorption, lack of empathy, arrogance or fickle nature.", keywords: ["self-absorbed", "empathy", "arrogant", "fickle"] },
      { marks: 1, description: "Links this to the novel as a whole: his beauty masks a cruel nature, foreshadowing his moral decline.", keywords: ["beauty", "mask", "cruel nature", "novel as a whole", "decline"] },
    ],
  },
  {
    number: "7", sub_number: "7.5",
    text: "Read Extract B from The Picture of Dorian Gray (Chapter 15):\n\n" +
      "Certainly no one looking at Dorian Gray that night could have believed that he had passed through a tragedy as horrible as any tragedy of our age. Those finely-shaped fingers could never have clutched a knife for sin, nor those smiling lips have cried out on God and goodness. He himself could not help wondering at the calm of his demeanour, and for a moment felt keenly the terrible pleasure of a double life.\n\n" +
      "… He was rather sorry he had come, till Lady Narborough, looking at the great ormolu gilt clock that sprawled in gaudy curves on the mauve-draped mantelshelf, exclaimed: 'How horrid of Henry Wotton to be so late! I sent round to him this morning on chance, and he promised faithfully not to disappoint me.'\n\n" +
      "It was some consolation that Harry was to be there, and when the door opened and he heard his slow musical voice lending charm to some insincere apology, he ceased to feel bored.\n\n" +
      "But at dinner he could not eat anything. Plate after plate went away untasted. Lady Narborough kept scolding him for what she called 'an insult to poor Adolphe, who invented the menu specially for you,' and now and then Lord Henry looked across at him, wondering at his silence and abstracted manner. From time to time the butler filled his glass with champagne. He drank eagerly, and his thirst seemed to increase.\n\n" +
      "'Dorian,' said Lord Henry at last, as the chaudfroid was being handed round, 'what is the matter with you to-night? You are quite out of sorts.'\n\n" +
      "7.5 Place this extract in context.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Reorganisation",
    model_answer: "Basil has visited Dorian to inform him that he is going to Paris and also to address the rumours about Dorian. Dorian decides to show Basil the altered portrait, as he blames Basil for his moral decline. In a fit of rage, he murders Basil and then sends for Alan Campbell to dispose of Basil's body. Now Dorian has arrived at Lady Narborough's party, attended by a number of socialites.",
    marking_notes: "Award 3 marks for any three distinct points.",
    marking_points: [
      { marks: 1, description: "Basil visited Dorian (to tell him he is leaving for Paris and to address rumours about him).", keywords: ["Basil", "visited", "Paris", "rumours"] },
      { marks: 1, description: "Dorian showed Basil the altered portrait and, in a fit of rage, murdered him, then had Alan Campbell dispose of the body.", keywords: ["murdered", "portrait", "Alan Campbell", "dispose", "body"] },
      { marks: 1, description: "Dorian has now arrived at Lady Narborough's dinner party/social gathering.", keywords: ["Lady Narborough", "party", "dinner", "socialites"] },
    ],
  },
  {
    number: "7", sub_number: "7.6",
    text: "Refer to Extract B, lines 2–3: 'Those finely-shaped fingers … knife for sin'. Explain why people in this society think that Dorian is not capable of committing a sin.",
    marks: 2, topicKey: "dorian_gray", cognitiveLevelName: "Inference",
    model_answer: "Dorian lives in a society that judges people's worth and moral character by their physical appearance. As Dorian is so exquisitely handsome, it is assumed that he is innocent and morally upright.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Society judges moral character/worth by physical appearance.", keywords: ["appearance", "judges", "moral character", "society"] },
      { marks: 1, description: "Dorian's exquisite beauty leads people to assume he is innocent/morally upright.", keywords: ["beauty", "innocent", "morally upright", "assume"] },
    ],
  },
  {
    number: "7", sub_number: "7.7",
    text: "Refer to Extract B, lines 6–7: 'Lady Narborough, looking … the mauve-draped mantelshelf'. Discuss how the description of the clock in these lines reveals the author's attitude toward upper-class Victorian society.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "The ornate clock in Lady Narborough's home reflects the upper class's lavish and ostentatious lifestyle. The description of the clock as having 'gaudy curves' suggests an elaborate design and reveals the author's critical/judgemental/disapproving attitude toward the upper class — they surround themselves with extravagant possessions, and everything they own is flashy and flamboyant. They are materialistic/self-centred/narcissistic.",
    marking_notes: "Award 1 mark for the attitude and 2 marks for a well-developed discussion.",
    marking_points: [
      { marks: 1, description: "Identifies the author's attitude as critical/judgemental/disapproving of the upper class.", keywords: ["critical", "disapproving", "judgemental"] },
      { marks: 2, description: "Discusses how the clock's 'gaudy curves'/ornate description reflects the upper class's lavish, ostentatious, materialistic lifestyle.", keywords: ["gaudy", "ornate", "lavish", "materialistic", "ostentatious"] },
    ],
  },
  {
    number: "7", sub_number: "7.8",
    text: "Refer to Extract B, lines 10–12: 'It was some … to feel bored.' Using these lines as a starting point, comment on the influence that Lord Henry has on Dorian.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian's mood lifts when Lord Henry enters because he finds Lord Henry's charismatic personality appealing; his charm is endearing and disarming. This allows Lord Henry to influence Dorian into following a hedonistic lifestyle — introducing him to the idea that life should be lived for beauty and pleasure. Lord Henry's gifting of the yellow book, after knowing how it had opened his own mind, is another way he subtly influences Dorian to adopt a life of decadence, setting Dorian on a self-indulgent, ultimately destructive path.",
    marking_notes: "Award 3 marks only if a comment is made.",
    marking_points: [
      { marks: 1, description: "Dorian finds Lord Henry's charm/personality appealing and disarming.", keywords: ["charm", "appealing", "disarming", "charismatic"] },
      { marks: 1, description: "Lord Henry influences Dorian toward a hedonistic lifestyle (living for beauty and pleasure).", keywords: ["hedonism", "pleasure", "beauty", "lifestyle"] },
      { marks: 1, description: "The yellow book is another means by which Lord Henry subtly leads Dorian to a life of decadence, setting him on a destructive path.", keywords: ["yellow book", "decadence", "destructive", "subtle"] },
    ],
  },
  {
    number: "7", sub_number: "7.9",
    text: "Refer to Extract B, lines 4–5: 'He himself could … a double life.' Based on your knowledge of the novel as a whole, critically discuss the impact that leading a double life has on Dorian.",
    marks: 3, topicKey: "dorian_gray", cognitiveLevelName: "Evaluation",
    model_answer: "Dorian's wish regarding the painting splits his body and soul, affording him the opportunity to live a double life. At first he finds being duplicitous thrilling, as he can get away with risky behaviour, and nobody suspects him because his beauty is equated with innocence and purity. There are no consequences to his illicit affairs, visiting brothels and opium dens, and destroying people's lives. This lack of accountability leads him to further depravity, and although he has moments of regret, he never takes responsibility for his actions. The lack of growth in his character results in his living an unfulfilling, empty life, and his frustration at the state of his life leads to his stabbing the portrait, which results in his death.",
    marking_notes: "Award 3 marks only if there is a critical discussion.",
    marking_points: [
      { marks: 1, description: "The double life initially thrills Dorian, as his beauty means nobody suspects his illicit/risky behaviour.", keywords: ["thrilling", "beauty", "suspects", "illicit"] },
      { marks: 1, description: "This lack of accountability leads to further depravity (affairs, opium, destroying lives) with no genuine growth or reflection.", keywords: ["depravity", "opium", "accountability", "no growth"] },
      { marks: 1, description: "Ultimately results in an unfulfilling, empty life and, when he destroys the portrait in frustration, his own death.", keywords: ["empty life", "unfulfilling", "destroys portrait", "death"] },
    ],
  },

  // ======================================================================
  // SECTION C: DRAMA — Hamlet (William Shakespeare), 25 marks
  // ======================================================================

  // ---------- QUESTION 10: ESSAY QUESTION (25 marks) ----------
  // Approximation of a holistic rubric (see header) — distilled from the
  // memo's bullet list of key content into five broad criteria.
  {
    number: "10", sub_number: null,
    text: "Many of the characters in Hamlet are totally dishonourable and cannot be redeemed. Critically discuss the extent to which you agree with this statement. Your response should take the form of a well-constructed essay of 400–450 words (2–2½ pages).",
    marks: 25, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "A balanced (mixed) response is ideal: some characters are indeed dishonourable (Claudius's murder of his brother and manipulation of others; Polonius's spying and self-serving ingratiation; Rosencrantz and Guildenstern's betrayal of Hamlet's friendship), while others show redeeming qualities (Laertes confesses the plot and asks forgiveness before dying; Gertrude ultimately protects Hamlet; Hamlet himself, though driven to dishonourable acts by his obsession with revenge, returns from England willing to accept his fate; Horatio remains honourable throughout).",
    marking_notes: "Marked holistically by rubric in the real exam (see header comment) — approximated here as five broad criteria.",
    marking_points: [
      { marks: 5, description: "Discusses Hamlet's own dishonourable behaviour (cruel rejection of Ophelia, killing of Polonius, sending Rosencrantz and Guildenstern to their deaths without remorse) alongside his eventual acceptance of fate and reliance on Horatio to restore his honour/name.", keywords: ["Hamlet", "Ophelia", "Polonius", "Rosencrantz", "Guildenstern", "Horatio", "honour"] },
      { marks: 5, description: "Discusses Claudius as fundamentally dishonourable (fratricide, manipulation of Rosencrantz/Guildenstern and Laertes, plotting Hamlet's death) while acknowledging his soliloquy of remorse as a possible redeeming quality.", keywords: ["Claudius", "murder", "manipulate", "remorse", "soliloquy"] },
      { marks: 5, description: "Discusses Polonius's self-serving, dishonourable conduct (spying on his own children and on Hamlet, ingratiating himself with Claudius) and/or Rosencrantz and Guildenstern's betrayal of Hamlet's friendship for reward.", keywords: ["Polonius", "spying", "ingratiate", "betrayal", "friendship"] },
      { marks: 5, description: "Discusses Laertes's dishonourable collusion with Claudius (the poisoned sword, hypocritical acceptance of Hamlet's apology) contrasted with his redemption when he confesses the plot and begs forgiveness before dying, and/or Gertrude's redeeming acts (protecting Hamlet, warning him about the poisoned drink).", keywords: ["Laertes", "poisoned sword", "confesses", "forgiveness", "Gertrude", "redeem"] },
      { marks: 5, description: "Reaches a coherent, well-supported conclusion on the extent of agreement, ideally recognising a mixed response (some characters redeemed, others not) rather than a purely one-sided view, with reference to Horatio as a consistently honourable foil.", keywords: ["conclusion", "mixed", "redeemed", "Horatio", "honourable"] },
    ],
  },

  // ---------- QUESTION 11: CONTEXTUAL QUESTION (25 marks) ----------
  {
    number: "11", sub_number: "11.1",
    text: "Read Extract E from Hamlet (Act 3, Scene 3):\n\n" +
      "CLAUDIUS: I like him not, nor stands it safe with us/To let his madness range. Therefore prepare you,/I your commission will forthwith dispatch,/And he to England shall along with you./The terms of our estate may not endure/Hazard so near's as doth hourly grow/Out of his brows.\n\n" +
      "GUILDENSTERN: We will ourselves provide./Most holy and religious fear it is/To keep those many many bodies safe/That live and feed upon your majesty.\n\n" +
      "… CLAUDIUS: Arm you, I pray you, to this speedy voyage,/For we will fetters put about this fear,/Which now goes too free-footed.\n\n" +
      "ROSENCRANTZ: We will haste us.\n\n" +
      "Enter Polonius\n\n" +
      "POLONIUS: My lord, he's going to his mother's closet./Behind the arras I'll convey myself/To hear the process. I'll warrant she'll tax him home,/And as you said, and wisely was it said,/'Tis meet that some more audience than a mother,/Since nature makes them partial, should o'erhear/The speech of vantage. Fare you well, my liege,/I'll call upon you ere you go to bed,/And tell you what I know.\n\n" +
      "CLAUDIUS: Thanks, dear my lord.\n\n" +
      "Polonius off\n\n" +
      "O, my offence is rank, it smells to heaven;/It hath the primal eldest curse upon't,/A brother's murder! Pray can I not,/Though inclination be as sharp as will./My stronger guilt defeats my strong intent,/And like a man to double business bound,/I stand in pause where I shall first begin,/And both neglect.\n\n" +
      "11.1 Refer to lines 1–2: 'I like him … his madness range.' What has prompted Claudius to utter these words about Hamlet?",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "Claudius has watched the play, The Mousetrap, and he now realises that Hamlet is aware of his crime. As such, Hamlet represents a serious threat to Claudius. He says that Hamlet's madness is dangerous if he is not restrained.",
    marking_notes: "Award 3 marks for three distinct points.",
    marking_points: [
      { marks: 1, description: "Claudius has just watched the play-within-the-play, The Mousetrap.", keywords: ["Mousetrap", "play", "watched"] },
      { marks: 1, description: "He realises Hamlet now knows he murdered King Hamlet.", keywords: ["realises", "knows", "murder", "crime"] },
      { marks: 1, description: "Hamlet now represents a serious/dangerous threat to Claudius that must be restrained.", keywords: ["threat", "dangerous", "restrained"] },
    ],
  },
  {
    number: "11", sub_number: "11.2",
    text: "Refer to Extract E, lines 8–11: 'We will ourselves … upon your majesty.' Explain what these lines reveal about Guildenstern.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Inference",
    model_answer: "Guildenstern is obsequious/sycophantic/servile. He is willing to do Claudius's bidding by accompanying Hamlet, his supposed friend, to England. He flatters the king because he is hoping to gain Claudius's favour and benefit from Claudius's gratitude.",
    marking_notes: "Award 3 marks for three distinct points.",
    marking_points: [
      { marks: 1, description: "Guildenstern is obsequious/sycophantic/servile toward Claudius.", keywords: ["obsequious", "sycophantic", "servile", "flatter"] },
      { marks: 1, description: "He is willing to betray his supposed friendship with Hamlet by doing Claudius's bidding.", keywords: ["betray", "friend", "bidding", "Hamlet"] },
      { marks: 1, description: "He hopes to gain Claudius's favour/benefit materially from his gratitude.", keywords: ["favour", "gratitude", "benefit", "reward"] },
    ],
  },
  {
    number: "11", sub_number: "11.3",
    text: "Refer to Extract E, lines 18–20: 'My lord, he's … hear the process.' Explain how Polonius's plan, as described in these lines, is typical of his behaviour elsewhere in the play.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Inference",
    model_answer: "Polonius intends to spy on Hamlet and Gertrude's conversation. This is typical of his behaviour, as he also spies on Hamlet and Ophelia's conversation and sends Reynaldo to spy on Laertes in Paris.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Polonius plans to spy on Hamlet and Gertrude's conversation by hiding behind the arras.", keywords: ["spy", "arras", "Gertrude", "hide"] },
      { marks: 1, description: "This is typical: he also spies on Hamlet and Ophelia, and sends Reynaldo to spy on Laertes in Paris.", keywords: ["Reynaldo", "Laertes", "Ophelia", "typical"] },
    ],
  },
  {
    number: "11", sub_number: "11.4",
    text: "Refer to Extract E, lines 22–23: ' 'Tis meet that … makes them partial'. Based on your knowledge of the play as a whole, comment on Gertrude's loyalty toward Hamlet.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Throughout the play, Gertrude is conflicted between her love for her son and her feelings for Claudius. She displays sincere concern for Hamlet's wellbeing and worries that her hasty marriage to Claudius may be responsible for his melancholic state/madness. However, she never actively opposes Claudius — even after Hamlet reveals that Claudius murdered King Hamlet — nor does she oppose the plan to send Hamlet to England; she even defends Claudius when he is threatened by Laertes. She does, however, protect Hamlet by lying to Claudius about Polonius's death, attributing Hamlet's actions to madness, and warns him during the duel that the wine is poisoned.",
    marking_notes: "Award 3 marks only if a comment is made.",
    marking_points: [
      { marks: 1, description: "Gertrude is conflicted between love for Hamlet and her feelings for Claudius; she is sincerely concerned about Hamlet's wellbeing.", keywords: ["conflicted", "love", "concern", "wellbeing"] },
      { marks: 1, description: "She never actively opposes Claudius, even after learning of the murder, and defends him when threatened.", keywords: ["never opposes", "defends Claudius", "murder"] },
      { marks: 1, description: "She does protect Hamlet at key moments: lying about Polonius's death, and warning him about the poisoned wine during the duel.", keywords: ["protects", "lies", "Polonius", "poisoned wine", "warns"] },
    ],
  },
  {
    number: "11", sub_number: "11.5",
    text: "Refer to Extract E, lines 29–33: 'O, my offence … my strong intent'. Discuss how these lines influence your attitude toward Claudius.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "The reader might feel sympathy/pity toward Claudius because he grapples with his conscience, tormented by guilt at having murdered his brother; he acknowledges it is an unnatural act, a sin against his own blood, yet longs to pray for forgiveness and is unable to do so. Alternatively, the reader might feel disgusted and appalled, as Claudius is not prepared to give up the fruits of his crime — the crown and his marriage to Gertrude — showing he is not sincerely remorseful nor willing to face the consequences of his actions.",
    marking_notes: "Award 3 marks for a well-developed discussion.",
    marking_points: [
      { marks: 1, description: "States an attitude toward Claudius (e.g. sympathy/pity, or disgust/being appalled).", keywords: ["sympathy", "pity", "disgust", "appalled"] },
      { marks: 2, description: "Develops this with reference to the extract: his genuine torment/guilt over the fratricide and inability to pray, OR his unwillingness to relinquish the crown/Gertrude, showing insincere remorse.", keywords: ["guilt", "fratricide", "pray", "crown", "remorse", "consequences"] },
    ],
  },
  {
    number: "11", sub_number: "11.6",
    text: "Read Extract F from Hamlet (Act 5, Scene 2):\n\n" +
      "CLAUDIUS: Come, Hamlet, come and take this hand from me.\n\n" +
      "HAMLET: Give me your pardon, sir. I have done you wrong,/But pardon't, as you are a gentleman./This presence knows, and you must needs have heard,/How I am punished with a sore distraction./What I have done/That might your nature, honour and exception/Roughly awake, I here proclaim was madness./Was't Hamlet wronged Laertes? Never Hamlet./If Hamlet from himself be ta'en away,/And when he's not himself does wrong Laertes,/Then Hamlet does it not, Hamlet denies it./Who does it then? His madness. If't be so,/Hamlet is of the faction that is wronged;/His madness is poor Hamlet's enemy./Sir, in this audience,/Let my disclaiming from a purposed evil/Free me so far in your most generous thoughts,/That I have shot my arrow o'er the house,/And hurt my brother.\n\n" +
      "LAERTES: I am satisfied in nature,/Whose motive in this case should stir me most/To my revenge. But in my terms of honour/I stand aloof, and will no reconcilement,/Till by some elder masters of known honour/I have a voice and precedent of peace,/To keep my name ungored. But till that time,/I do receive your offered love like love,/And will not wrong it.\n\n" +
      "HAMLET: I embrace it freely,/And will this brother's wager frankly play …/Give us the foils. Come on.\n\n" +
      "11.6 Place this extract in context.",
    marks: 2, topicKey: "hamlet", cognitiveLevelName: "Reorganisation",
    model_answer: "Claudius has arranged a duel between Hamlet and Laertes, which Hamlet accepts. Hamlet is not aware that Laertes and Claudius have treacherously plotted his death and that the tip of Laertes's sword is poisoned.",
    marking_notes: "Award 2 marks for two distinct points.",
    marking_points: [
      { marks: 1, description: "Claudius has arranged a fencing duel between Hamlet and Laertes, which Hamlet has accepted.", keywords: ["duel", "fencing", "Laertes", "accepted"] },
      { marks: 1, description: "Hamlet is unaware that Claudius and Laertes have plotted his death using a poisoned sword tip.", keywords: ["plotted", "poisoned", "sword", "unaware"] },
    ],
  },
  {
    number: "11", sub_number: "11.7",
    text: "Refer to Extract F, lines 2–5: 'Give me your … a sore distraction.' If you were the director of a production of Hamlet, how would you instruct the actor to deliver these lines? Pay specific attention to body language and tone. Motivate your instructions.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Hamlet might take Laertes by the hand or place his hand on his heart/shoulder to indicate the sincerity of his feelings. He genuinely regrets the wrong he has done to Laertes, which he attributes to his madness. His tone might be sincere/apologetic/humble as he asks for forgiveness.",
    marking_notes: "Award 3 marks only if the candidate refers to both body language and tone, and includes a justification. The candidate's response should be convincing in context.",
    marking_points: [
      { marks: 1, description: "Suggests appropriate body language (e.g. taking Laertes's hand, hand on heart/shoulder) indicating sincerity.", keywords: ["hand", "heart", "shoulder", "body language", "sincerity"] },
      { marks: 1, description: "Suggests appropriate tone (e.g. sincere, apologetic, humble).", keywords: ["sincere", "apologetic", "humble", "tone"] },
      { marks: 1, description: "Motivates the instructions with reference to Hamlet's genuine regret and appeal for forgiveness.", keywords: ["regret", "forgiveness", "motivate", "genuine"] },
    ],
  },
  {
    number: "11", sub_number: "11.8",
    text: "Refer to Extract F, lines 27–29: 'But till that … not wrong it.' Comment on the irony in these lines.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Laertes appears to accept Hamlet's apology fully, saying that he 'will not wrong it'. However, he intends to betray his word and murder Hamlet, hence the statement is dishonest and hypocritical — he will, in fact, kill Hamlet with his poisoned sword.",
    marking_notes: "Award 3 marks for a clear understanding of irony.",
    marking_points: [
      { marks: 1, description: "Laertes appears to sincerely accept Hamlet's apology and offer of love/friendship.", keywords: ["accept", "apology", "sincere", "offer"] },
      { marks: 2, description: "The irony: Laertes has already agreed to betray this and kill Hamlet with the poisoned sword, making his words hypocritical/dishonest.", keywords: ["irony", "betray", "poisoned sword", "hypocritical", "dishonest"] },
    ],
  },
  {
    number: "11", sub_number: "11.9",
    text: "Refer to Extract F, lines 30–31: 'I embrace it … wager frankly play'. Critically discuss the change in Hamlet's attitude toward Laertes in the play.",
    marks: 3, topicKey: "hamlet", cognitiveLevelName: "Evaluation",
    model_answer: "Initially, Hamlet was violent and confrontational toward Laertes at Ophelia's funeral. However, he now realises that they have both lost their fathers and that Laertes has as much right as he to want to avenge his father's death. Hamlet recognises that he was wrong to scorn Laertes's grief and imply that Laertes's love for Ophelia was not as deep as his own. Hamlet's attitude is now more empathetic, and his demeanour is rational and reasonable.",
    marking_notes: "Award 3 marks only if a change in attitude is critically discussed.",
    marking_points: [
      { marks: 1, description: "Identifies Hamlet's earlier violent/confrontational attitude toward Laertes (e.g. at Ophelia's funeral).", keywords: ["violent", "confrontational", "funeral", "Ophelia"] },
      { marks: 2, description: "Critically discusses the shift to a more empathetic, rational attitude — recognising Laertes's shared grief and right to avenge his father, and regretting his earlier scorn.", keywords: ["empathetic", "rational", "shared grief", "avenge", "regret"] },
    ],
  },
];

// No exam_schedule entries here, matching the Mathematics ingestion
// convention for this scoped-content dataset.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
