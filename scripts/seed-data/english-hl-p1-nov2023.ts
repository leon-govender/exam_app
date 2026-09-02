// Real DBE past paper: English Home Language P1 (Language in Context),
// November 2023, National Senior Certificate (English).
// Source: full extracted text of the combined question paper (pages 1-13)
// + the genuine official DBE marking guideline (pages 14-22), confirmed by
// its own cover page ("MARKING GUIDELINES", official crest, "Copyright
// reserved") — downloaded from stanmorephysics.com. Every question and
// every memo answer below was read directly from that combined text dump,
// not guessed or reconstructed from a third-party source.
//
// Paper structure: THREE compulsory sections, 70 marks total, 2 hours —
// confirmed against the paper's own cover page ("MARKS: 70", "TIME: 2
// hours") and its own section/grand totals printed at the end of each
// section (SECTION A: 30, SECTION B: 10, SECTION C: 30, GRAND TOTAL: 70).
//   SECTION A — Comprehension (30): TEXT A (a prose article, "Listening
//     instead of reading is not cheating") and TEXT B (a visual/verbal
//     advertisement for Audible.com), Question 1, sub-questions 1.1-1.12.
//   SECTION B — Summary (10): TEXT C (a prose article, "Silence is
//     golden"), Question 2, a single open-ended summary-writing task.
//   SECTION C — Language structures and conventions (30): TEXT D (a
//     visual/verbal advertisement for Levi's 505 jeans, Question 3),
//     TEXT E (a Calvin and Hobbes cartoon, Question 4), and TEXT F (a
//     prose text with deliberate grammar/spelling errors, Question 5).
//
// This is a NEW subject for the app (first English Home Language paper
// ingested), so it is almost entirely open-ended free-text writing, unlike
// the Mathematics/Physical Sciences papers already in this app. Every
// sub-question here uses `marking_points` (free-text keyword grading, the
// same shape used for Geography/Physical Sciences extended responses)
// EXCEPT for the two genuine 4-option multiple-choice questions the paper
// actually prints with A/B/C/D options — this 2023 paper, unusually, prints
// NEITHER of those as an A/B/C/D list (every sub-question, including the
// ones testing identification like tone/homophone/synonym, is phrased as
// an open short-answer prompt, not a lettered-option MCQ) — so `steps` is
// not used anywhere in this file; every question is `marking_points`. This
// was verified by reading the full text of the question paper end to end:
// no "A/B/C/D" or "Choose the correct answer" option list appears anywhere
// in this specific paper.
//
// marking_points marks were split to sum exactly to each sub-question's own
// mark allocation, following the memo's own bracketed guidance (e.g.
// "[Award 2 marks only if X]", "[Award 1 mark for Y and 1 mark for Z]")
// wherever the memo gives it; where the memo gives one holistic model
// answer for a 2/3-mark question without an explicit split, that mark
// allocation was reflected by phrasing marking_points as sequential idea
// units (e.g. a 3-mark "discuss X" split into identification + explanation
// + link-to-effect points) matching how many separate ideas the model
// answer actually contains.
//
// Images: TEXT B (Audible.com ad) and TEXT D (Levi's jeans ad) are genuine
// visual/verbal advertisement texts; TEXT E is a 4-frame cartoon. All three
// were rendered from the source PDF (pages 5, 8, 10) and cropped to
// public/question-images/english-hl-2023-p1/. TEXT A, TEXT C and TEXT F are
// plain prose passages reproduced in full in question `text` fields, so
// they do not need images.

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
  year: 2023,
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

import type { MarkingPoint, MarkingPointStep } from "../../src/lib/grader";

const IMG = "/question-images/english-hl-2023-p1";

const TEXT_A = `TEXT A

LISTENING INSTEAD OF READING IS NOT CHEATING.
— Gaby Hinsliff

From audiobooks to podcasts and voice notes, there's a steady generational shift in the way we understand the world.

(Paragraph 1) Insomniacs do it in the middle of the night. Dog owners do it while trudging around the park. Some people do it in the gym, but lately I have taken to doing it alone in the car, on long journeys north through the dark when I need distraction from everything circling around my head.

(Paragraph 2) Listening, that is; and perhaps more specifically, listening to things you might once have read instead. The growth of audiobooks, podcasts and even voice notes — those quick self-recorded clips that are steadily taking over from typed messages on WhatsApp — reflects a steady generational shift, away from eyes to ears, as the way we take in the world, and perhaps also in how we understand it.

(Paragraph 3) Reading instinctively feels like the higher art (line 11), perhaps because bedtime stories used to be strictly for children and oral storytelling is associated with more primitive cultures in the days before the printing press. But is that fair? (line 13) If the effort involved in sitting down and decoding written words with your actual eyes were to gradually fade away in years to come — just as the old-fashioned cord of a landline phone gave way to the freedom of a mobile in your pocket, and cash yielded to the clinical efficiency of credit cards — what exactly would we have lost?

(Paragraph 4) Reading is still very far from dead. Lockdown rekindled the love of curling up with a good novel, to publishers' delight, with more than a third of people claiming to be reading more to fill their days. But the audiobook market, while still small, also notched up its seventh year of double-digit growth in the 2021 pandemic year. Millennials in particular seem to be all ears; Katie Vanneck-Smith, the former Wall Street Journal president, admitted recently that when its members (who are mostly under 39 years old) were asked what they wanted to read, the consensus was, 'Actually, I listen, I don't read.' But their parents do so too: all the overloaded, frantically multitasking mid-lifers (lines 27-30) trying to keep up with whatever zeitgeist they are afraid of missing out on in an information-saturated world, while going for a run or cooking dinner.

(Paragraph 5) Yet the idea prevails that listening is flighty or unserious. A snooty 55% of respondents to one YouGov survey back in 2016 deemed audiobooks a 'lesser' way of consuming literature, and only 10% thought listening to a book was wholly equal to reading it. The view that listening is cheating prevails, even though nobody thinks it is lazy for a student to sit through lectures, and going to the theatre is not considered intellectually inferior to reading the play at home. One study by Beth Rogowsky, Associate Professor of Education at Bloomsburg University, asking students either to read a non-fiction book or listen to the audio version, found no significant differences in how much of it they absorbed.

(Paragraph 6, lines 42-47) There is an intimacy too, a confessional air that suits soul-baring podcast interviews and taboo-busting discussions about sex or menopause or parenting. And to hear a book read by its author is sometimes easier to understand, by the inflections of their voice, a meaning you would not otherwise have picked up. Voice notes suit the perennially anxious young in much the same way because they are less intrusive than a phone call, and harder to misunderstand than texts; people can hear when you are being ironic, lessening the risk of accidentally causing offence.

(Paragraph 7) What troubles me most about listening, I suppose, is that it is harder to share. You can recommend a podcast to a friend but you cannot leave it on the train seat for the next person when you get off, as I have done all my life with finished newspapers. You cannot give your goddaughter your dog-eared, spine-cracked copy of an audiobook that meant everything to you when you were her age. You will never buy an old audiobook from a second-hand store and find somebody else's faded notes scribbled in the margin, or a long-forgotten postcard used as a bookmark that makes you want to know more about the life of the person who sent it. Paper does not render itself useless in a power cut.

(Paragraph 8) All of which makes me think reading will never yield to listening completely; that like vinyl, handwritten love letters and cinema in the age of television, it will live on for pleasure or for romance but also because there are times when nothing else quite fits the bill. But if it turns out I am wrong — well, you did not hear it from me.

[Adapted from theguardian.com]`;

const TEXT_B = `TEXT B

A black-and-white advertisement for Audible.com. A young woman drives a car, one hand on the wheel, wearing an explorer's hat with faint outline graphics superimposed over her: a jaguar/wild cat prowling beside the car window, plants near the steering wheel. Large text reads: "TAKE AN ADVENTURE THROUGH THE AMAZON". Smaller text reads: "Your commute just got a lot more interesting with Audible.com. With thousands of books to choose from, you can listen to your favourite adventure novels whenever you want. So you have plenty of time to let your imagination explore the jungle." The Audible.com logo appears bottom right.

Glossary: Amazon — a vast jungle in South America.

[Adapted from Audible.com]`;

export const questions: QuestionSeed[] = [
  // ============ SECTION A: QUESTION 1 — TEXTS A & B (30 marks) ============

  {
    number: "1", sub_number: "1.1",
    text: `${TEXT_A}\n\n1.1 Why does the writer use the word 'it' repeatedly in paragraph 1?`,
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "To create curiosity/suspense and pique the reader's interest before revealing what 'it' refers to.",
    marking_notes: "Any one of: emphasis, curiosity, pique interest, suspense, engage the reader.",
    marking_points: [
      { marks: 1, description: "creates curiosity/suspense/engages the reader", keywords: ["curiosity", "suspense", "emphasis", "interest", "engage", "intrigue", "mystery"] },
    ],
  },
  {
    number: "1", sub_number: "1.2",
    text: `${TEXT_B}\n\n1.2 Refer to paragraph 2 of TEXT A.\n\nExplain why listening to audiobooks is regarded as a 'generational shift'.`,
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The previous/older generation processed information through reading, whereas the current/younger generation prefers listening to information.",
    marking_notes: "Award 2 marks only if the change between generations is evident.",
    marking_points: [
      { marks: 1, description: "older generation read/took in information visually", keywords: ["older generation", "previous generation", "reading", "eyes"] },
      { marks: 1, description: "younger/current generation prefers listening", keywords: ["younger generation", "current generation", "listening", "ears", "prefer"] },
    ],
  },
  {
    number: "1", sub_number: "1.3",
    text: "1.3 What does the writer mean by the expression, 'Reading instinctively feels like the higher art' (line 11)?",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The writer means reading is automatically/naturally regarded as being superior/more intelligent/more sophisticated than listening.",
    marking_notes: "1 mark for 'automatically/naturally regarded', 1 mark for 'superior/intelligent/sophisticated'.",
    marking_points: [
      { marks: 1, description: "automatically/naturally regarded", keywords: ["automatically", "naturally", "instinctively", "generally"] },
      { marks: 1, description: "superior/more intelligent/sophisticated", keywords: ["superior", "intelligent", "sophisticated", "higher", "better"] },
    ],
  },
  {
    number: "1", sub_number: "1.4",
    text: "1.4 Account for the use of the rhetorical question in, 'But is that fair?' (line 13) in the context of paragraph 3.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The rhetorical question invites the reader to think about/reflect on the argument, and prepares the reader for the counter-argument that follows.",
    marking_notes: "Two ideas from the memo: invites reader to think about the argument; prepares reader for the counter-argument.",
    marking_points: [
      { marks: 1, description: "invites the reader to think about/reflect on the argument", keywords: ["invites", "think about", "reflect", "consider", "ponder"] },
      { marks: 1, description: "prepares the reader for the counter-argument", keywords: ["counter-argument", "counter argument", "prepares", "opposing view"] },
    ],
  },
  {
    number: "1", sub_number: "1.5",
    text: "1.5 Discuss the irony evident in paragraph 5.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Listening to audiobooks is widely seen as lacking commitment/as a lesser form of reading; very few people acknowledge it as an ideal way of 'reading' literature. However, people who attend lectures or the theatre are not judged in the same negative way, even though these are also forms of listening — this contradiction is the irony.",
    marking_notes: "Award 3 marks only if irony is actually discussed (not just described).",
    marking_points: [
      { marks: 1, description: "listening/audiobooks seen as lesser/lacking commitment", keywords: ["lesser", "lacking commitment", "unserious", "flighty", "cheating"] },
      { marks: 1, description: "yet lectures/theatre-goers not judged the same way", keywords: ["lectures", "theatre", "not judged", "not considered inferior"] },
      { marks: 1, description: "contradiction/irony identified between the two", keywords: ["irony", "contradiction", "hypocrisy", "inconsistent"] },
    ],
  },
  {
    number: "1", sub_number: "1.6.1",
    text: "1.6 Refer to paragraph 6, lines 42-47: 'And to hear ... accidentally causing offence.'\n\n1.6.1 Identify the tone used in these lines.",
    marks: 1, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The writer uses a persuasive/assertive/matter-of-fact/conversational tone.",
    marking_notes: "Accept any one of: persuasive, assertive, matter-of-fact, conversational.",
    marking_points: [
      { marks: 1, description: "persuasive/assertive/matter-of-fact/conversational tone", keywords: ["persuasive", "assertive", "matter-of-fact", "matter of fact", "conversational"] },
    ],
  },
  {
    number: "1", sub_number: "1.6.2",
    text: "1.6.2 Comment on the suitability of the tone used in lines 42-47.",
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The tone highlights the benefits of listening, in that it eliminates misinterpretations, leading to greater clarity; the pronoun 'you' also addresses the reader directly, reinforcing the writer's view of the benefits of listening.",
    marking_notes: "Award 2 marks only if a comment/link to suitability is actually made, not just the tone repeated.",
    marking_points: [
      { marks: 1, description: "highlights benefits/clarity of listening (reduces misunderstanding)", keywords: ["benefits of listening", "clarity", "misinterpretation", "misunderstand", "reduces"] },
      { marks: 1, description: "engages/addresses the reader directly, reinforcing the writer's view", keywords: ["addresses the reader", "engages the reader", "pronoun you", "reinforces"] },
    ],
  },
  {
    number: "1", sub_number: "1.7",
    text: "1.7 Critically discuss how the diction in paragraph 7 conveys the writer's attitude towards print media. Provide TWO examples of diction in your response.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The writer is sentimental and uses compound adjectives ('dog-eared', 'spine-cracked') to qualify the longevity of books. References to 'faded notes scribbled in the margin' and 'a long-forgotten postcard used as a bookmark' convey the writer's nostalgia. This emphasises the value of print media, which the writer believes cannot be replaced by audiobooks — the ephemeral nature of audiobooks is highlighted.",
    marking_notes: "Award 3 marks only if TWO examples of diction and the writer's attitude have been critically discussed.",
    marking_points: [
      { marks: 1, description: "example: 'dog-eared'/'spine-cracked' (compound adjectives showing longevity/wear)", keywords: ["dog-eared", "spine-cracked", "dog eared", "spine cracked"] },
      { marks: 1, description: "example: 'faded notes'/'long-forgotten postcard' (nostalgia/sentiment)", keywords: ["faded notes", "long-forgotten postcard", "long forgotten postcard", "scribbled in the margin"] },
      { marks: 1, description: "attitude: writer is sentimental/nostalgic, values print media as irreplaceable", keywords: ["sentimental", "nostalgia", "nostalgic", "value of print", "irreplaceable"] },
    ],
  },
  {
    number: "1", sub_number: "1.8",
    text: "1.8 Refer to paragraph 8.\n\nIs the final paragraph an appropriate conclusion to the article? Justify your response.",
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "Yes. The writer asserts her belief that reading will never be entirely replaced by listening, as print media has an authentic, purposeful quality. However, the final sentence humorously offers the reader an opportunity to differ from the writer's opinion ('But if it turns out I am wrong'). The conclusion supports the balanced views presented throughout the article, that both listening and reading have value in different contexts.",
    marking_notes: "No marks for a bare YES/NO. Award 3 marks for TWO ideas well discussed, e.g. reinforces writer's balanced view + humorous/open-minded acknowledgement she could be wrong.",
    marking_points: [
      { marks: 1, description: "reinforces writer's belief reading will not be fully replaced/print has lasting value", keywords: ["never yield", "reading will never", "print media", "authentic", "purposeful"] },
      { marks: 1, description: "humorous/self-deprecating final line lets reader disagree ('if it turns out I am wrong')", keywords: ["humorous", "if it turns out", "wrong", "humour"] },
      { marks: 1, description: "conclusion matches/supports the balanced view running through the article", keywords: ["balanced", "consistent", "supports the argument", "throughout the article"] },
    ],
  },
  {
    number: "1", sub_number: "1.9",
    text: `${TEXT_B}\n\n1.9 Refer to the verbal text of TEXT B.\n\nHow does Audible.com contribute to a more enjoyable journey?`,
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Literal",
    model_answer: "The driver has the ability to listen to her favourite books and use her imagination while driving.",
    marking_notes: "Award only 1 mark if the candidate merely lifts the text without expressing both ideas (listening to favourite books, and using her imagination).",
    image_url: `${IMG}/text-b-audible-ad.png`,
    marking_points: [
      { marks: 1, description: "she can listen to her favourite (adventure) books/novels while driving", keywords: ["listen to her favourite", "favourite books", "adventure novels", "while driving"] },
      { marks: 1, description: "she can use/let her imagination explore", keywords: ["imagination", "imagine", "explore"] },
    ],
  },
  {
    number: "1", sub_number: "1.10",
    text: `${TEXT_B}\n\n1.10 'So you have plenty of time to let your imagination explore the jungle.'\n\nIdentify how the imaginary jungle is depicted in the visual image. Provide its purpose.`,
    marks: 2, topicKey: "comprehension", cognitiveLevelName: "Inference",
    model_answer: "The graphic images depict the exploration of a jungle by a jaguar/wild cat at the window of her car, with an explorer's hat superimposed on her head and plants near the steering wheel. These images illustrate her thought processes/the content of the audiobook she is listening to.",
    marking_notes: "1 mark for identifying how the jungle is depicted (jaguar/wild cat, explorer's hat, plants), 1 mark for the purpose (illustrates her thoughts/the audiobook content).",
    marking_points: [
      { marks: 1, description: "depiction: jaguar/wild cat at the window, explorer's hat, plants/jungle graphics superimposed", keywords: ["jaguar", "wild cat", "explorer", "hat", "plants", "superimposed"] },
      { marks: 1, description: "purpose: illustrates her thoughts/imagination/the content of the audiobook", keywords: ["thought process", "thoughts", "content of the audiobook", "imagination", "illustrate"] },
    ],
  },
  {
    number: "1", sub_number: "1.11",
    text: `${TEXT_B}\n\n1.11 Comment on the effectiveness of the portrayal of the woman in conveying the message of TEXT B.`,
    marks: 3, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "The woman's calm, engrossed demeanour reveals that listening to an audiobook enhances her journey; her ability to focus on both the story and her driving is evident. The portrayal conveys the message that Audible.com can change a dreary commute into a flight of fantasy. (Alternatively: her expressionless face does not reveal her being entertained, suggesting she is more focused on driving than enjoying the experience — this would make the portrayal less effective.)",
    marking_notes: "Credit mixed/opposing responses provided they are justified. Award 3 marks for a fully developed comment linking her portrayal to the ad's message.",
    marking_points: [
      { marks: 1, description: "describes her demeanour (calm/engrossed OR expressionless/focused on driving)", keywords: ["calm", "engrossed", "expressionless", "demeanour", "focused"] },
      { marks: 1, description: "links this to the effectiveness/ineffectiveness of conveying enjoyment", keywords: ["effective", "ineffective", "convey", "enjoy", "entertained"] },
      { marks: 1, description: "connects to overall message: dreary commute becomes an adventure/journey enhanced", keywords: ["dreary commute", "flight of fantasy", "adventure", "journey", "enhances"] },
    ],
  },
  {
    number: "1", sub_number: "1.12",
    text: `${TEXT_A}\n\n${TEXT_B}\n\n1.12 Refer to both TEXT A and TEXT B.\n\nCritically discuss the extent to which TEXT B supports the subheading, 'From audiobooks to ... understand the world' and paragraph 4 of TEXT A.`,
    marks: 4, topicKey: "comprehension", cognitiveLevelName: "Evaluation",
    model_answer: "In TEXT B, the woman represents millennials, who are easily able to multi-task by listening to an audiobook while driving. This supports the subheading's reference to a 'generational shift' — a preference for listening — and the statement in paragraph 4, that they 'seem to be all ears'. In paragraph 4 of TEXT A, the writer references a survey concluding that younger people preferred listening to reading; however, this phenomenon is not restricted to the younger generation, as shown by the reference to 'frantically multitasking mid-lifers ... going for a run or cooking dinner', which is echoed in TEXT B's image of the woman multi-tasking while driving. Together, the subheading, paragraph 4 of TEXT A and TEXT B show that while reading is not 'dead', there is a shift in the market towards listening to audiobooks.",
    marking_notes: "Award 4 marks only if the subheading, paragraph 4 of TEXT A, AND TEXT B are all critically discussed together (not treated separately).",
    marking_points: [
      { marks: 1, description: "TEXT B's woman represents multitasking millennials, supporting the 'generational shift' idea", keywords: ["millennials", "multi-task", "multitask", "generational shift"] },
      { marks: 1, description: "links to 'all ears' / preference for listening in paragraph 4", keywords: ["all ears", "prefer listening", "listen"] },
      { marks: 1, description: "notes it is not only the young — 'frantically multitasking mid-lifers' also listen while doing other tasks", keywords: ["mid-lifers", "multitasking", "going for a run", "cooking dinner"] },
      { marks: 1, description: "overall conclusion: reading not dead, but market shift towards listening confirmed by TEXT B", keywords: ["reading is not dead", "shift", "market", "confirmed"] },
    ],
  },

  // ============ SECTION B: QUESTION 2 — SUMMARY (10 marks) ============

  {
    number: "2", sub_number: null,
    text: `SECTION B: SUMMARY

QUESTION 2: SUMMARISING IN YOUR OWN WORDS

TEXT C discusses the benefits of silence. Summarise, in your own words, how silence helps one to cope with everyday life.

NOTE:
1. Your summary should include SEVEN points and NOT exceed 90 words.
2. You must write a fluent paragraph.
3. You are NOT required to include a title for the summary.
4. Indicate your word count at the end of your summary.

TEXT C

SILENCE IS GOLDEN

The world around us is often a difficult place in which to cope. Many of us tend to lose focus and find it difficult to remain consistently productive. With all the distractions of our daily lives, it is easy to recognise that we need less noise in order to keep our concentration. A little less noise is good for our well-being.

One of the major reasons why silence has become an important part of everyday life is that it provides one with the ability to focus, because the modern world and its various noises enter one's brain all at once. A silent environment helps one to concentrate optimally. Studies have shown that solitude contributes to the success of the creative process. It is reported that visionary scientists like Albert Einstein and Sir Isaac Newton worked almost exclusively alone for the majority of their lives.

If people's attention is always being drawn away through daily distractions, they will never know how their lives can be improved. Quiet time for self-reflection is important to make a conscious improvement to the daily routines of life. Stress is one of the most difficult aspects of modern life. A period of silence each day allows one the chance to relax, thereby reducing stress levels.

There is a link between the level of noise that children are exposed to, and their performance as students. The more noise children are exposed to, the more difficult they find it to concentrate. Moreover, in the 21st century, the exposure of children to a plethora of electronic devices has resulted in hearing impairment which also affects their achievements as students. In an article in Inc, research suggests that remaining silent increases the production of new brain cells. Taking time to daydream may improve productivity tenfold.

In today's fast-paced world, almost everyone has a short fuse for frustration. Learning to relish silence cultivates calm and peace. When silence is practised regularly, tolerance levels improve. People will have more patience with daily irritations, like traffic jams and long lines at the store, if they learn to savour silent moments.

[Adapted from whisperroom.com]`,
    marks: 10, topicKey: "summary_writing", cognitiveLevelName: "Reorganisation",
    model_answer: "Silence assists with concentration, enhances focus and is beneficial to our overall health. Being on one's own stimulates one's creativity. Solitude provides the opportunity to introspect on ways to improve our daily living. Moreover, it reduces stress, affording one the opportunity to relax. Maintaining silence boosts the formation of brain cells, and daydreaming is linked to optimal productivity. Tranquillity is achieved when one learns to enjoy silence. When silence is embraced consistently, it helps one cope with everyday life by promoting tolerance and decreasing impatience.",
    marking_notes: "7 marks for 7 valid points (1 each), plus 3 marks for language, per the memo — combined here as one 10-mark question with 7 content marking_points at 1 mark each and one 3-mark language/fluency point requiring most of the content points to be covered (mirrors the memo's rule: 6-7 points correct in own words = 3 language marks).",
    marking_points: [
      { marks: 1, description: "a quiet environment assists with/enhances concentration and focus", keywords: ["concentration", "focus", "concentrate"] },
      { marks: 1, description: "less noise/silence is beneficial to overall health/well-being", keywords: ["well-being", "wellbeing", "health", "beneficial"] },
      { marks: 1, description: "solitude/being alone stimulates creativity", keywords: ["creativity", "creative", "solitude", "alone"] },
      { marks: 1, description: "quiet time allows self-reflection/introspection to improve daily life", keywords: ["self-reflection", "introspect", "reflection", "improve"] },
      { marks: 1, description: "silence reduces stress and allows relaxation", keywords: ["stress", "relax", "relaxation"] },
      { marks: 1, description: "silence increases/boosts production of new brain cells", keywords: ["brain cells", "production of new brain"] },
      { marks: 1, description: "daydreaming improves/is linked to productivity", keywords: ["daydream", "productivity"] },
      { marks: 3, description: "written as a fluent, coherent own-words paragraph covering most points (language mark)", keywords: ["tolerance", "patience", "calm", "tranquillity", "cope"] },
    ],
  },

  // ============ SECTION C: QUESTION 3 — TEXT D (10 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: `SECTION C: LANGUAGE STRUCTURES AND CONVENTIONS

QUESTION 3: ANALYSING ADVERTISING

Study the advertisement (TEXT D) below and answer the set questions.

TEXT D (see image): a black-and-white Levi's 505 jeans advertisement. A young woman stands with her back to the viewer in a field, one hand shading her eyes as she looks up at a flock of birds flying overhead in a V-shaped/word-like formation. Text reads: "LEVI'S 505™ JEANS. NO ORDINARY FLIGHT OF FASHION. Call them fashion classic if you like. Just simple, honest 100% cotton jeans that never wear out their welcome. Never? No, never! Even that comfortable fit grows friendlier with every wearing. Pre-shrunk, zipper fly, Levi's 505s. Timeless. Dependable. Uncomplicated. Sometimes, don't you wish everything was a little more like that? Available in Petites, Juniors, Misses and Women's sizes." The Levi's logo and a circular inset of the "Levi Strauss & Co." leather patch appear near the woman's waistband.

[Adapted from pinterest.com]

3.1 How does the image of the birds link with the phrase, 'NO ORDINARY FLIGHT'?`,
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "The flock of birds is flying in an unusual formation, resembling the shape of the word 'LEVI'S'.",
    marking_notes: "One idea: birds fly in an unusual formation shaped like the brand name/word.",
    image_url: `${IMG}/text-d-levis-ad.png`,
    marking_points: [
      { marks: 1, description: "birds fly in an unusual formation resembling the word/logo 'LEVI'S'", keywords: ["unusual formation", "shape of the word", "levi's", "formation"] },
    ],
  },
  {
    number: "3", sub_number: "3.2",
    text: "3.2 Account for the use of the phrase, 'fashion classic'.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "'Classic' refers to something traditional, while 'fashion' refers to something current — the phrase indicates the brand has remained popular over time with long-lasting appeal.",
    marking_notes: "1 mark for explaining classic = traditional and fashion = current, 1 mark for the overall meaning (long-lasting/timeless popularity).",
    marking_points: [
      { marks: 1, description: "'classic' = traditional, 'fashion' = current/trendy", keywords: ["traditional", "classic", "current", "trendy"] },
      { marks: 1, description: "brand has remained popular over time/long-lasting appeal", keywords: ["long-lasting", "popular over time", "remained popular", "timeless appeal"] },
    ],
  },
  {
    number: "3", sub_number: "3.3",
    text: "3.3 Explain the persuasive appeal of ONE stylistic technique used by the advertiser in the written text.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "The use of emotive diction ('simple', 'honest', 'Timeless', 'Dependable', 'Uncomplicated') persuades the reader of the value of the product. (Alternative acceptable techniques: the rhetorical question, personification, single-word emphasis, idiomatic/alliterative expressions, or the personal pronoun 'you'.)",
    marking_notes: "1 mark for identifying the technique with an example, 1 mark for explaining its persuasive effect.",
    marking_points: [
      { marks: 1, description: "identifies a technique with an example (emotive diction/rhetorical question/personification/repetition/pronoun)", keywords: ["emotive diction", "rhetorical question", "personification", "repetition", "personal pronoun", "simple", "honest", "timeless", "dependable", "uncomplicated"] },
      { marks: 1, description: "explains the persuasive effect (e.g. persuades of the product's value/trustworthiness/reassurance)", keywords: ["persuades", "value", "trustworthy", "reassurance", "engages the reader"] },
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "3.4 Comment on how the depiction of the woman reinforces the message of the advertisement.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "The woman is standing casually, in a relaxed position; the comfortable fit of the jeans is emphasised by her outstretched body. Her shirt is tucked into her jeans, which focuses attention on the label and fit, and her back is turned to the reader, emphasising the universal appeal of the jeans. This reinforces the advertiser's message that Levi's jeans are timeless and comfortable.",
    marking_notes: "Award 3 marks only if a comment linking the depiction to the ad's message is actually made.",
    marking_points: [
      { marks: 1, description: "describes her casual/relaxed pose or outstretched body", keywords: ["casual", "relaxed", "outstretched", "position"] },
      { marks: 1, description: "notes focus on fit/label or back turned to viewer for universal appeal", keywords: ["fit", "label", "back to the reader", "universal appeal"] },
      { marks: 1, description: "links this to the message: jeans are timeless/comfortable/dependable", keywords: ["timeless", "comfortable", "reinforces", "dependable"] },
    ],
  },
  {
    number: "3", sub_number: "3.5",
    text: "3.5 'Just simple, honest 100% cotton jeans that never wear out their welcome.'\n\nThe word 'welcome' has been used as a noun in the above sentence.\n\nUse the word 'welcome' as a verb in a sentence of your choice.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "She stood at the door to welcome her guests.",
    marking_notes: "Accept any grammatically correct sentence using any form of the verb 'welcome' (welcome/welcomed/welcoming/welcomes).",
    marking_points: [
      { marks: 1, description: "correct sentence using 'welcome' as a verb", keywords: ["welcome", "welcomed", "welcoming", "welcomes"] },
    ],
  },
  {
    number: "3", sub_number: "3.6",
    text: "3.6 Account for the use of the apostrophe in 'LEVI'S', in the logo of the advertisement.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "The apostrophe indicates possession.",
    marking_notes: "One idea: possession.",
    marking_points: [
      { marks: 1, description: "indicates possession", keywords: ["possession", "possessive"] },
    ],
  },

  // ============ SECTION C: QUESTION 4 — TEXT E (10 marks) ============

  {
    number: "4", sub_number: "4.1",
    text: `QUESTION 4: UNDERSTANDING OTHER ASPECTS OF THE MEDIA

Study the cartoon (TEXT E) below and answer the set questions.

TEXT E — CALVIN AND HOBBES (4-frame cartoon; characters: Calvin, a young boy, and Hobbes, his tiger)

FRAME 1: Calvin (writing at his desk): "YOU KNOW, I DON'T THINK MATH IS A SCIENCE. I THINK IT'S A RELIGION." Hobbes (scratching his head, in a speech bubble): "A RELIGION?"

FRAME 2: Calvin (standing, arms out): "YEAH. ALL THESE EQUATIONS ARE LIKE MIRACLES. YOU TAKE TWO NUMBERS AND WHEN YOU ADD THEM, THEY MAGICALLY BECOME ONE NEW NUMBER! NO ONE CAN SAY HOW IT HAPPENS. YOU EITHER BELIEVE IT OR YOU DON'T."

FRAME 3: Calvin: "THIS WHOLE BOOK IS FULL OF THINGS THAT HAVE TO BE ACCEPTED ON FAITH! IT'S A RELIGION!"

FRAME 4: Hobbes (leaning over Calvin, who is at his desk): "AND IN THE PUBLIC SCHOOLS NO LESS. CALL A LAWYER." Calvin: "AS A MATH ATHEIST, I SHOULD BE EXCUSED FROM THIS."

[Source: mashupmaths.com]

4.1 Refer to FRAME 1.\n\nProvide ONE indicator reflecting Hobbes's confusion.`,
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "Hobbes is scratching his head, and there is a question mark in his speech bubble.",
    marking_notes: "Any one of: Hobbes scratching his head; the question mark in the speech bubble.",
    image_url: `${IMG}/text-e-calvin-hobbes-cartoon.png`,
    marking_points: [
      { marks: 1, description: "Hobbes scratching his head OR the question mark in his speech bubble", keywords: ["scratching his head", "question mark", "scratches his head"] },
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "4.2 How would Hobbes's tone change if 'A RELIGION?' were to be written in a jagged speech bubble?",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Inference",
    model_answer: "It would indicate that he is shocked/flabbergasted/surprised by Calvin's suggestion.",
    marking_notes: "Any one of: shocked, flabbergasted, surprised.",
    marking_points: [
      { marks: 1, description: "shocked/flabbergasted/surprised", keywords: ["shocked", "flabbergasted", "surprised", "shock", "surprise"] },
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "4.3 Refer to FRAMES 1 and 3.\n\nWith close reference to the verbal cues in these frames, discuss the change in Calvin's viewpoint.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "In Frame 1, Calvin tentatively proposes his theory to Hobbes that Math is a religion ('I THINK IT'S A RELIGION'). In Frame 3, Calvin is convinced by his own argument; he asserts/concludes with an affirmative 'IT'S A RELIGION!', further emphasised by the exclamation mark.",
    marking_notes: "Award 3 marks only if the change (tentative to convinced/assertive) is actually discussed with reference to both frames.",
    marking_points: [
      { marks: 1, description: "Frame 1: Calvin tentatively proposes/suggests the theory ('I THINK it's a religion')", keywords: ["tentative", "proposes", "suggests", "i think"] },
      { marks: 1, description: "Frame 3: Calvin is now convinced, asserts/concludes affirmatively ('IT'S A RELIGION!')", keywords: ["convinced", "asserts", "affirmative", "concludes"] },
      { marks: 1, description: "notes the exclamation mark/emphatic tone reflects this shift in conviction", keywords: ["exclamation mark", "emphasis", "emphasised", "shift"] },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "4.4 Critically discuss how humour is created in the final frame.",
    marks: 3, topicKey: "language_structures", cognitiveLevelName: "Evaluation",
    model_answer: "Hobbes is being sarcastic when he says, 'CALL A LAWYER'. Calvin's real reason for the dramatic argument becomes apparent — he simply does not want to study Math. Calvin's over-simplified argument, corroborated by Hobbes, culminates in a humorous conclusion.",
    marking_notes: "Award 3 marks only if the candidate provides a critical discussion (not just a description) of how the humour arises.",
    marking_points: [
      { marks: 1, description: "Hobbes's sarcastic remark ('CALL A LAWYER')", keywords: ["sarcastic", "call a lawyer", "sarcasm"] },
      { marks: 1, description: "Calvin's real motive is revealed: avoiding/not wanting to do Math homework", keywords: ["avoid", "does not want to study", "excused", "homework", "math atheist"] },
      { marks: 1, description: "the over-simplified/exaggerated argument leads to an absurd, humorous conclusion", keywords: ["exaggerated", "absurd", "over-simplified", "humorous conclusion"] },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "4.5 Provide the suffix required for the adjectival form of 'RELIGION' (FRAME 1).",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "-ious (religious)",
    marking_notes: "Accept -ious/-ous, or the full word 'religious'.",
    marking_points: [
      { marks: 1, description: "-ious/-ous/religious", keywords: ["ious", "ous", "religious"] },
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "4.6 Give a suitable synonym for 'LAWYER' (FRAME 4).",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "Attorney/solicitor/legal practitioner/barrister/advocate/prosecutor.",
    marking_notes: "Accept any of: attorney, solicitor, legal practitioner, barrister, advocate, prosecutor.",
    marking_points: [
      { marks: 1, description: "attorney/solicitor/legal practitioner/barrister/advocate/prosecutor", keywords: ["attorney", "solicitor", "legal practitioner", "barrister", "advocate", "prosecutor"] },
    ],
  },

  // ============ SECTION C: QUESTION 5 — TEXT F (10 marks) ============

  {
    number: "5", sub_number: "5.1",
    text: `QUESTION 5: USING LANGUAGE CORRECTLY

Read TEXT F, which contains some deliberate errors, and answer the set questions.

TEXT F

HOW AFRICA IS GIVING FAST-FOOD A NEW SPIN

(Paragraph 1, lines 1-6) When Ebele Enunwa stopped for a bite to eat at his local fast-food restaurant, the queue (line 2) of people snaked all the way to the car park. The young investment banker decided to start his own fast-food eatery. In 2004 he opened Kilimanjaro, a chain of fast-food restaurants, (lines 3-4) which today has twenty outlets across Nigeria. The company is one of a growing number of fast-food restaurants to sprout across Africa recently.

(Paragraph 2, lines 7-9) 'Kenya and Nigeria offers the desirable ingredients of an expanding middle-class, and a strong private sector backbone,' says Elias Schulze, managing partner at Africa Group.

(Paragraph 3, lines 10-16) Some international chains have tailored their products to local tastes. (line 10) Popular local ingredients have been added. In Nigeria, Domino's sells pizza topped with Jollof rice, a West African staple. KFC in Kenya offers a product based on ugali, a popular maize-based porridge. Apart from their profound (line 13) knowledge of local, home-grown (line 14) tastes, their chains are also adapt (line 15) at managing a business in challenging circumstances, such as when electricity is in short supply.

(Paragraph 4, lines 17-18) 'The other main obstacles include challenging and underdeveloped supply chains, weak logistics networks, sensitive local partnerships and an unhelpful regulatory environment,' said Schulze. He added that ultimately it was a gamble on the future. (line 18)

[Adapted from edition.cnn.com]

5.1 Refer to the title.\n\nReplace the word 'spin' with a formal English word.`,
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "look/appeal/flavour/outlook.",
    marking_notes: "Accept any valid, formal synonym in context.",
    marking_points: [
      { marks: 1, description: "look/appeal/flavour/outlook (formal synonym for 'spin')", keywords: ["look", "appeal", "flavour", "flavor", "outlook", "twist", "angle"] },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "5.2 Provide the homophone of 'queue' (line 2).",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "Cue",
    marking_notes: "Spelling must be correct: 'cue'.",
    marking_points: [
      { marks: 1, description: "cue", keywords: ["cue"] },
    ],
  },
  {
    number: "5", sub_number: "5.3",
    text: "5.3 Replace the commas in lines 3 and 4 with suitable alternative punctuation marks.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "Dashes or brackets.",
    marking_notes: "Accept dashes or brackets.",
    marking_points: [
      { marks: 1, description: "dashes/brackets", keywords: ["dashes", "brackets", "dash", "bracket"] },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "5.4 Correct the concord error in paragraph 2.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "offers should be corrected to offer.",
    marking_notes: "Must show the correction from 'offers' to 'offer'.",
    marking_points: [
      { marks: 1, description: "offers to offer", keywords: ["offer"] },
    ],
  },
  {
    number: "5", sub_number: "5.5",
    text: "5.5 'Some international chains have tailored their products to local tastes.' (line 10)\n\nRewrite the above sentence in the passive voice.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "Their products have been tailored to local tastes by some international chains.",
    marking_notes: "Must correctly transform the sentence into the passive voice.",
    marking_points: [
      { marks: 1, description: "correct passive voice: 'Their products have been tailored to local tastes by some international chains.'", keywords: ["their products", "have been tailored", "by some international chains"] },
    ],
  },
  {
    number: "5", sub_number: "5.6",
    text: "5.6 Provide an antonym for the word 'profound' in the context of line 13.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "superficial/shallow/basic/minimal/limited/insufficient.",
    marking_notes: "Accept any valid alternative antonym.",
    marking_points: [
      { marks: 1, description: "superficial/shallow/basic/minimal/limited/insufficient", keywords: ["superficial", "shallow", "basic", "minimal", "limited", "insufficient"] },
    ],
  },
  {
    number: "5", sub_number: "5.7.1",
    text: "5.7 Refer to paragraph 3.\n\n5.7.1 Remove the redundancy.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "'local' or 'home-grown' should be removed (they are redundant together).",
    marking_notes: "Accept only ONE of the two words (local or home-grown).",
    marking_points: [
      { marks: 1, description: "local/home-grown", keywords: ["local", "home-grown", "home grown"] },
    ],
  },
  {
    number: "5", sub_number: "5.7.2",
    text: "5.7.2 Correct the malapropism.",
    marks: 1, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "adapt should be corrected to adept.",
    marking_notes: "Spelling must be correct: 'adept'.",
    marking_points: [
      { marks: 1, description: "adapt to adept", keywords: ["adept"] },
    ],
  },
  {
    number: "5", sub_number: "5.8",
    text: "5.8 'He added that ultimately it was a gamble on the future' (line 18).\n\nRewrite the above sentence in direct speech.",
    marks: 2, topicKey: "language_structures", cognitiveLevelName: "Literal",
    model_answer: "He added, 'Ultimately it is a gamble on the future.'",
    marking_notes: "1 mark for correct punctuation (comma, quotation marks, capital letter), 1 mark for the correct tense change (was to is).",
    marking_points: [
      { marks: 1, description: "correct punctuation of direct speech (comma, quotation marks, capital letter)", keywords: ["\"ultimately", "'ultimately", "he added"] },
      { marks: 1, description: "correct tense change: 'was' becomes 'is'", keywords: ["it is a gamble", "is a gamble"] },
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
