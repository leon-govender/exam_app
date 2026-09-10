// Real DBE past paper: Information Technology P2, November 2025, National
// (English). Source: official DBE question paper + marking guidelines, both
// fetched from stanmorephysics.com (source_url below points at the combined
// QP+memo PDF). QP is pages 1-17 (17 question pages); page 18 is the
// marking-guidelines title page; pages 19-39 are the memo (memo itself says
// "22 pages", consistent with pages 19-39 plus front matter numbering
// restarting at 1 inside the memo). Confirmed by reading the actual
// extracted text of every page, not guessed.
//
// Paper structure: SIX compulsory sections (no choice), 150 marks, 3 hours —
// confirmed from the question paper's own "INSTRUCTIONS AND INFORMATION"
// page and cross-checked against every section's own "TOTAL SECTION X" line
// and the memo's per-section totals, which all agree:
//   SECTION A: Short Questions (Q1)                                 20 marks
//   SECTION B: Systems Technologies (Q2)                            25 marks
//   SECTION C: Communication and Network Technologies (Q3)          25 marks
//   SECTION D: Data and Information Management (Q4)                 20 marks
//   SECTION E: Solution Development (Q5)                            30 marks
//   SECTION F: Integrated Scenario (Q6)                             30 marks
//                                                          GRAND TOTAL: 150
//
// This is the first Information Technology paper ingested into this app, so
// this file also defines the IT subject, its cognitive levels, and its
// topics.
//
// Cognitive levels: IT (like CAT) uses the DBE Examination Guidelines'
// four-level taxonomy for theory papers — Remembering / Understanding /
// Applying and Analysing / Evaluating and Creating — a revised-Bloom's
// taxonomy specific to IT/CAT, distinct from Mathematics' Knowledge/Routine
// Procedures/Complex Procedures/Problem Solving and from the
// Recall/Comprehension/Analysis/Evaluation or
// Recall/Comprehension/Application/Evaluation taxonomies used by Geography
// and Physical Sciences respectively.
//
// Topics: mapped to IT CAPS's own five official content areas — Systems
// Technologies, Internet and Network Technologies (named "Communication and
// Network Technologies" on this paper), Data and Information Management,
// Solution Development, and Social Implications of IT. Section A's short
// questions are genuinely mixed-topic (hardware, networks, licensing,
// programming, etc.), so each 1.1/1.2/1.3 sub-question is mapped to
// whichever of the five real CAPS topics it actually belongs to, rather than
// inventing a sixth "general" topic. Section F (Integrated Scenario) is
// likewise mapped sub-question-by-sub-question to its real underlying topic.
//
// This is a THEORY paper (concepts, definitions, short explanations — not
// calculations), so `marking_points` (free-text keyword grading) is the
// default here, the opposite of the calculation-heavy Mathematics papers.
// The two exceptions, per the ingestion brief:
//   - Section A's 1.1.1-1.1.10 (choose A-D from four given options) use
//     single-step `steps: MarkingPointStep[]`, with the real four options
//     and the real correct answer read off the memo.
//   - 5.1.1/5.1.2 (Delphi CEIL/TRUNC value tracing) are also modelled as
//     single-step numeric MCQs, since the memo gives one exact numeric
//     answer with no partial credit, matching the stepped-MCQ pattern's
//     intent (pick the value you traced) better than free-text keyword
//     matching would.
// Everywhere else (1.2, 1.3, and all of Sections B-F) uses `marking_points`,
// each point built directly from an actual accepted-answer bullet in the
// memo (including the memo's own "Any TWO of" alternative phrasings, added
// as extra keyword options on the same point so any one accepted phrasing
// is creditable).
//
// Diagrams/screenshots: four are genuinely needed to answer their questions
// and were cropped from 220dpi page renders into
// public/question-images/it-2025-p2/:
//   - 3-4-network-diagram.png (Q3.4): the administrative-office network
//     diagram — 3.4.1/3.4.2 ask the student to identify the devices at the
//     labelled positions, which is impossible without seeing the diagram.
//   - 4-1-tblanimalsightings.png (Q4.1): the tblAnimalSightings sample data
//     table — 4.1.1/4.1.2 both depend on seeing the actual field values
//     (e.g. the Experience field's text-typed "3 years" values).
//   - 4-1-3-tables-diagram.png (Q4.1.3): the partially-completed
//     tblAnimals/tblRangers/tblSightings ER diagram the student must
//     redraw and complete — the whole question is "given this diagram,
//     fill in what's missing".
//   - 5-3-app-interface.png (Q5.3): the "Big 5 - Animal sighting" mobile
//     app screenshot — 5.3.1-5.3.3 (including the 7-mark UML diagram
//     question) all reference specific fields/controls visible only in
//     this screenshot.
// No diagrams were skipped as decorative on this paper — every image on the
// question pages is load-bearing for at least one sub-question.

export const subject = {
  name: "Information Technology",
  stream: null as string | null,
};

export const cognitiveLevels = [
  { name: "Remembering", order_index: 1 },
  { name: "Understanding", order_index: 2 },
  { name: "Applying and Analysing", order_index: 3 },
  { name: "Evaluating and Creating", order_index: 4 },
];

export const topics = [
  {
    key: "systems-technologies",
    name: "Systems Technologies",
    caps_term: "Term 1",
    textbook_ref: "Grade 12 Information Technology — Systems Technologies (Hardware, Operating Systems, Mobile and Emerging Technologies)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+information+technology+systems+technologies",
  },
  {
    key: "communication-network-technologies",
    name: "Communication and Network Technologies",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Information Technology — Communication and Network Technologies (Networks, Internet, Web Technologies)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+information+technology+communication+and+network+technologies",
  },
  {
    key: "data-information-management",
    name: "Data and Information Management",
    caps_term: "Term 2",
    textbook_ref: "Grade 12 Information Technology — Data and Information Management (Databases, Normalisation, Data Warehousing, Data Mining)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+information+technology+data+and+information+management+databases",
  },
  {
    key: "solution-development",
    name: "Solution Development",
    caps_term: "Term 1-3 (Programming)",
    textbook_ref: "Grade 12 Information Technology — Solution Development (Delphi Programming, Algorithms, OOP, File Handling)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+information+technology+delphi+programming+solution+development",
  },
  {
    key: "social-implications",
    name: "Social Implications of IT",
    caps_term: "Term 4",
    textbook_ref: "Grade 12 Information Technology — Social Implications (Information Security, Cybercrime, Netiquette, Software Licensing)",
    textbook_url: null as string | null,
    video_url: "https://www.youtube.com/results?search_query=grade+12+information+technology+social+implications+cybersecurity",
  },
];

export const paper = {
  year: 2025,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/07/NSC-IT-Grade-12-November-2025-P2-and-Memo.pdf" as string | null,
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

const IMG = "/question-images/it-2025-p2";

export const questions: QuestionSeed[] = [
  // ============ SECTION A: SHORT QUESTIONS (20 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "… is a protocol used to send e-mails from a mail client to a mail server.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "B — SMTP.",
    marking_notes: "Accept only B (SMTP).",
    steps: [{ marks: 1, description: "Which protocol sends e-mails from a mail client to a mail server?", options: ["FTP", "SMTP", "HTTP", "VoIP"], correctIndex: 1 }],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Arrange the following according to the speed of data access, from the fastest to the slowest.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "C — CPU cache; VRAM; RAM; SSD; HDD.",
    marking_notes: "Accept only C.",
    steps: [{ marks: 1, description: "Which order is fastest to slowest?", options: ["CPU cache; VRAM; SSD; RAM; HDD", "VRAM; CPU cache; RAM; SSD; HDD", "CPU cache; VRAM; RAM; SSD; HDD", "CPU cache; RAM; VRAM; SSD; HDD"], correctIndex: 2 }],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "An … is a private network that offers access to employees of a company.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "D — intranet.",
    marking_notes: "Accept only D (intranet).",
    steps: [{ marks: 1, description: "What is a private network offering access only to a company's employees called?", options: ["internet", "extranet", "outsourceNet", "intranet"], correctIndex: 3 }],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Changing the regional and language settings of a device is part of …",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "C — system configuration.",
    marking_notes: "Accept only C.",
    steps: [{ marks: 1, description: "Changing regional/language settings is part of…", options: ["security management", "file compression", "system configuration", "disk clean-up"], correctIndex: 2 }],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "… is a type of license that is often used in open-source software to allow users to edit, copy and distribute the software.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "B — General Public License.",
    marking_notes: "Accept only B.",
    steps: [{ marks: 1, description: "Which license type is used in open-source software to allow editing, copying and distribution?", options: ["End User License", "General Public License", "Creative Commons License", "Shrink-wrap Licence"], correctIndex: 1 }],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "Which ONE of the following is NOT a feature of microblogs?",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "C — Includes content of text format only.",
    marking_notes: "Accept only C.",
    steps: [{ marks: 1, description: "Which is NOT a feature of microblogs?", options: ["Fast to create and share", "Typically hosted on social networking platforms", "Includes content of text format only", "Posts are immediate and contain a limited number of characters"], correctIndex: 2 }],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Malware that remotely takes control of a group of computers without the users' knowledge is known as a …",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "C — botnet.",
    marking_notes: "Accept only C.",
    steps: [{ marks: 1, description: "Malware remotely controlling a group of computers without the users' knowledge is a…", options: ["zombie", "DDoS attack", "botnet", "keylogger"], correctIndex: 2 }],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "Which ONE of the following data types is NOT suitable to be used as part of a case statement in Delphi?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "C — String.",
    marking_notes: "Accept only C.",
    steps: [{ marks: 1, description: "Which data type is NOT suitable for a Delphi case statement?", options: ["Char", "Boolean", "String", "Integer"], correctIndex: 2 }],
  },
  {
    number: "1", sub_number: "1.1.9",
    text: "The following TWO variables have been declared in Delphi: sString: String; cChar: Char; Which ONE of the following statements will result in an error?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "B — sString := UpCase(sString);",
    marking_notes: "Accept only B (UpCase expects a Char, not a String).",
    steps: [{ marks: 1, description: "Which statement results in an error?", options: ["cChar := UpCase(cChar);", "sString := UpCase(sString);", "sString := UpperCase(cChar);", "sString := UpperCase(sString);"], correctIndex: 1 }],
  },
  {
    number: "1", sub_number: "1.1.10",
    text: "Which ONE of the following statements will result in TRUE?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "C — TRUE AND (FALSE OR TRUE).",
    marking_notes: "Accept only C.",
    steps: [{ marks: 1, description: "Which boolean expression evaluates to TRUE?", options: ["NOT(TRUE) AND NOT(FALSE)", "NOT(TRUE OR FALSE)", "TRUE AND (FALSE OR TRUE)", "FALSE AND (FALSE AND (TRUE OR FALSE))"], correctIndex: 2 }],
  },
  {
    number: "1", sub_number: "1.2.1",
    text: "Give ONE word/term for the following description: A sequence of steps used to solve a specific problem or task.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Remembering",
    model_answer: "Algorithm.",
    marking_notes: "Accept only \"algorithm\".",
    marking_points: [{ marks: 1, description: "algorithm", keywords: ["algorithm"] }],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Give ONE word/term for the following description: The practice of good manners when communicating electronically.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Netiquette.",
    marking_notes: "Accept only \"netiquette\".",
    marking_points: [{ marks: 1, description: "netiquette", keywords: ["netiquette"] }],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Give ONE word/term for the following description: A complete web address for a specific web page or resource.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Uniform Resource Locator / URL.",
    marking_notes: "Accept \"URL\" or \"Uniform Resource Locator\".",
    marking_points: [{ marks: 1, description: "URL / Uniform Resource Locator", keywords: ["url", "uniform resource locator"] }],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Give ONE word/term for the following description: Software that facilitates communication between the operating system and hardware devices.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Device Driver (also accept: Driver).",
    marking_notes: "Accept \"device driver\" or just \"driver\".",
    marking_points: [{ marks: 1, description: "device driver / driver", keywords: ["device driver", "driver"] }],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "Give ONE word/term for the following description: A widely used website that allows for collaboration, where users can create, edit and link content easily.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Wiki/Wikipedia.",
    marking_notes: "Accept \"wiki\" or \"Wikipedia\".",
    marking_points: [{ marks: 1, description: "wiki / Wikipedia", keywords: ["wiki", "wikipedia"] }],
  },
  {
    number: "1", sub_number: "1.3.1",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): The function Randomrange(10,12) in Delphi returns a random integer value between 10 and 12, both inclusive.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "FALSE, Randomrange(10,13) [or Random(3) + 10] — Randomrange's upper bound is exclusive, so to include 12 the call must use 13 as the upper bound.",
    marking_notes: "No marks for FALSE alone; the corrected statement (Randomrange(10,13), or the equivalent Random(3) + 10) must also be given.",
    marking_points: [{ marks: 1, description: "FALSE, with the corrected call Randomrange(10,13) or Random(3) + 10", keywords: ["false randomrange 10 13", "false random 3 10"] }],
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): The Linux Ubuntu operating system is commonly used in smartphones.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "FALSE, Android / iOS / Harmony OS.",
    marking_notes: "No marks for FALSE alone; a valid smartphone OS (Android, iOS or Harmony OS) must also be given.",
    marking_points: [{ marks: 1, description: "FALSE, with a real smartphone OS such as Android, iOS or Harmony OS", keywords: ["false android", "false ios", "false harmony"] }],
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): BitTorrent is a peer-to-peer file-sharing protocol.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "TRUE.",
    marking_notes: "Accept only TRUE.",
    marking_points: [{ marks: 1, description: "TRUE", keywords: ["true"] }],
  },
  {
    number: "1", sub_number: "1.3.4",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): Shareware software is free to use, but may have limited features or may require payment after a trial period.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "TRUE.",
    marking_notes: "Accept only TRUE.",
    marking_points: [{ marks: 1, description: "TRUE", keywords: ["true"] }],
  },
  {
    number: "1", sub_number: "1.3.5",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): The human-readable code of a program is referred to as machine code.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "FALSE, source code.",
    marking_notes: "No marks for FALSE alone; the corrected term \"source code\" must also be given.",
    marking_points: [{ marks: 1, description: "FALSE, source code", keywords: ["false source"] }],
  },

  // ============ SECTION B: SYSTEMS TECHNOLOGIES (25 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The motherboard is the 'heart' of any computer. State TWO functions of a motherboard.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: provides slots/ports/connectors for components; distributes power to components; enables communication between components.",
    marking_notes: "One mark per correct function, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "provides slots/ports/connectors for components", keywords: ["slots ports connectors", "provides slots", "provides ports", "provides connectors"] },
      { marks: 1, description: "distributes power to components / enables communication between components", keywords: ["distributes power", "enables communication", "communication between components"] },
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Explain why a bus communication path is slower than a point-to-point communication path on a motherboard.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "A bus is a shared communication path between components, causing a delay because only one component/device can communicate at a time; a point-to-point path is a dedicated communication path.",
    marking_notes: "Any TWO of the memo's three concepts.",
    marking_points: [
      { marks: 1, description: "a bus is a shared communication path between components", keywords: ["shared communication path", "shared path"] },
      { marks: 1, description: "delay because only one component can communicate at a time / point-to-point is dedicated", keywords: ["one component at a time", "one device at a time", "dedicated communication path", "dedicated path"] },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Explain why a GPU will improve the processing performance of a computer system.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "The GPU performs all graphics-related tasks/rendering, which releases the CPU from graphics tasks, giving the CPU more time to process other tasks.",
    marking_notes: "Any TWO of: GPU performs all graphical-related tasks; this lessens the burden on the CPU; the CPU has more time to process other tasks.",
    marking_points: [
      { marks: 1, description: "the GPU performs all graphics-related tasks/rendering", keywords: ["graphic related tasks", "graphical related tasks", "rendering"] },
      { marks: 1, description: "the CPU has more time to process other tasks / lessens burden on CPU", keywords: ["more time to process", "lessens the burden", "cpu free"] },
    ],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Compare the role of RAM and VRAM by specifically referring to the function of EACH.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "RAM stores data/instructions to be processed by the CPU; VRAM stores images/video data to be processed by the GPU.",
    marking_notes: "One mark for RAM's role, one mark for VRAM's role.",
    marking_points: [
      { marks: 1, description: "RAM stores data/instructions for the CPU", keywords: ["ram stores data", "ram stores instructions"] },
      { marks: 1, description: "VRAM stores images/video data for the GPU", keywords: ["vram stores images", "vram stores video"] },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Process management is one of the functions of an operating system. State a necessary hardware requirement of a CPU to enable multi-processing.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "The CPU must consist of more than one CPU core.",
    marking_notes: "Accept only the requirement of more than one CPU core.",
    marking_points: [{ marks: 1, description: "the CPU must have more than one core", keywords: ["more than one core", "multiple cores", "multi core"] }],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Virtual memory is managed by the operating system. Explain what virtual memory is.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Virtual memory is an area on secondary storage, used as RAM when the system RAM is full/insufficient, used by the operating system to store data temporarily.",
    marking_notes: "Any TWO of the memo's three concepts.",
    marking_points: [
      { marks: 1, description: "an area on secondary storage used as RAM", keywords: ["secondary storage", "used as ram"] },
      { marks: 1, description: "used when system RAM is full/insufficient, to store data temporarily", keywords: ["ram is full", "ram is insufficient", "store data temporarily"] },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "The IT team needs to manage data storage. Give a term for the process that removes documents that are no longer actively used from the computer's primary storage and stores the documents in a secondary storage space.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Archiving.",
    marking_notes: "Accept only \"archiving\".",
    marking_points: [{ marks: 1, description: "archiving", keywords: ["archiving", "archive"] }],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "Drones and mobile technology are often used to observe migration patterns of the 'Big 5' animals. Apart from drones, suggest ONE other mobile technology that can be used to observe migration patterns.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: GPS/satellite tracking of animals; RFID/tags/trackers and mobile receivers; tracking apps; apps using AI to identify animals/species; motion-sensing cameras linked to mobile devices.",
    marking_notes: "Accept any reasonable mobile-device-based example other than drones.",
    marking_points: [{ marks: 1, description: "a mobile tracking technology such as GPS/satellite tracking, RFID tags/trackers, tracking apps, or motion-sensing cameras linked to a mobile device", keywords: ["gps", "satellite tracking", "rfid", "tracking app", "motion sensing camera"] }],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "State TWO constraints of using mobile technologies.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: limited battery life; the tower providing signal may be out of range; limited computing power; limited storage; smaller screens are challenging to read; input methods are a challenge; not able to run desktop applications; may not include a full operating system; not easy to upgrade or repair.",
    marking_notes: "One mark per correct constraint, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "limited battery life / limited computing power / limited storage", keywords: ["limited battery", "limited computing power", "limited storage"] },
      { marks: 1, description: "out of signal range / smaller screens hard to read / input methods a challenge / cannot run desktop apps / no full OS / not easy to upgrade or repair", keywords: ["out of range", "smaller screens", "input methods", "desktop applications", "full operating system", "upgrade or repair"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.1",
    text: "A database dedicated to conservation is used to store critical data on endangered species and can be accessed by authorised users only. Suggest TWO biometric authentication methods that can be used to gain access to the database.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: facial recognition; fingerprint scanning; voice recognition; retina/iris/eye scanning.",
    marking_notes: "One mark per correct biometric method, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "facial recognition / fingerprint scanning", keywords: ["facial recognition", "fingerprint scanning", "fingerprint"] },
      { marks: 1, description: "voice recognition / retina/iris/eye scanning", keywords: ["voice recognition", "retina scanning", "iris scanning", "eye scanning"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Use an example to explain the effect of garbage-in-garbage-out (GIGO) in relation to data collection in wildlife tracking systems.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Example: incorrect coordinates or a misidentified animal species being captured. Effect: the location of the animal species will be inaccurate, wasting time to find the animals; or the resulting analysis will be flawed and decisions taken will be unreliable.",
    marking_notes: "One mark for a valid example of bad input data, one mark for the resulting effect.",
    marking_points: [
      { marks: 1, description: "example: incorrect coordinates or a misidentified species captured", keywords: ["incorrect coordinates", "misidentified animal", "misidentified species"] },
      { marks: 1, description: "effect: inaccurate location/time wasted, or flawed analysis/unreliable decisions", keywords: ["inaccurate location", "time wastage", "flawed analysis", "unreliable decisions"] },
    ],
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "In order to safeguard critical data, state TWO precautions that can be taken to prevent hardware failure.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: safe handling/keeping/storing of hardware devices; regular maintenance; surge protection/use of a UPS; controlling environmental factors; use tools to monitor drivers (health checks); upgrading hardware.",
    marking_notes: "One mark per correct precaution, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "safe handling/storing of hardware / regular maintenance", keywords: ["safe handling", "safe storing", "regular maintenance"] },
      { marks: 1, description: "surge protection/UPS / controlling environmental factors / monitoring tools / upgrading hardware", keywords: ["surge protection", "use an ups", "environmental factors", "monitor drivers", "health checks", "upgrading hardware"] },
    ],
  },
  {
    number: "2", sub_number: "2.6.1",
    text: "Virtual reality (VR) is becoming a powerful tool for wildlife conservation and education. State TWO limitations of VR technology.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: high cost; requires powerful hardware specifications; possibility of motion sickness/health impact; promotes social isolation; physical space limitation; technical setup/training required; latency/lagging.",
    marking_notes: "One mark per correct limitation, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "high cost / requires powerful hardware", keywords: ["high cost", "powerful hardware"] },
      { marks: 1, description: "motion sickness / social isolation / physical space limitation / technical setup/training / latency or lagging", keywords: ["motion sickness", "social isolation", "physical space", "training required", "latency", "lagging"] },
    ],
  },
  {
    number: "2", sub_number: "2.6.2",
    text: "Discuss TWO advantages of using VR for conservation awareness.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: users can experience wildlife/ecosystems realistically/interactively; conservation education reaches a broader audience; decreases impact on wildlife ecosystems; safer environment (no exposure to dangerous animals); no need to travel/pay for real-life encounters; convenient (experience wildlife from home).",
    marking_notes: "One mark per correct advantage, any two of the memo's list; other correct answers related to the scenario are accepted.",
    marking_points: [
      { marks: 1, description: "realistic/interactive experience of wildlife, reaching a broader audience", keywords: ["realistic", "interactive way", "broader audience"] },
      { marks: 1, description: "decreases impact on ecosystems / safer (no exposure to dangerous animals) / no need to travel / convenient", keywords: ["decreases impact", "undisturbed", "safer environment", "no need to travel", "convenient"] },
    ],
  },

  // ============ SECTION C: COMMUNICATION AND NETWORK TECHNOLOGIES (25 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A luxury lodge in the wildlife reserve wants to upgrade its networking infrastructure. Give TWO reasons why a client-server network will be a suitable network to be used at the lodge.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: centralised management; better control over authentication/encrypted storage of sensitive data; scalability; backups made on the server; less network congestion than peer-to-peer; suitable for a large number of devices; no need for powerful client devices; easier communication between users.",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "centralised management / better security and authentication control", keywords: ["centralised management", "user authentication", "encrypted storage"] },
      { marks: 1, description: "scalability / backups on server / less congestion / suitable for many devices / no need for powerful clients", keywords: ["scalability", "backups", "congested", "large number of devices", "powerful client devices"] },
    ],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "During a safari walk, the same messages that are received on the tour guide's cellphone are accessed on the guide's smartwatch. Identify the type of area network used.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "PAN/WPAN.",
    marking_notes: "Accept PAN or WPAN.",
    marking_points: [{ marks: 1, description: "PAN / WPAN", keywords: ["pan", "wpan"] }],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "The lodge connects to an international wildlife conservation database via the internet. Identify the type of area network used.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "WAN/GAN.",
    marking_notes: "Accept WAN or GAN.",
    marking_points: [{ marks: 1, description: "WAN / GAN", keywords: ["wan", "gan"] }],
  },
  {
    number: "3", sub_number: "3.3",
    text: "The lodge's research centre shares large data files on wildlife with conservationists worldwide. Apart from saving time and improving efficiency, give TWO other reasons why file transfer protocol (FTP) should be used to share large files.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: transfers can be interrupted and resumed; offers remote access; cross-platform compatibility; allows transfer of large files/large numbers of files; transfers can be automated with scripts; no restriction on file size; directory structure preservation. (\"Reliable\" is not accepted.)",
    marking_notes: "One mark per correct reason, any two of the memo's list; do NOT accept \"reliable\".",
    marking_points: [
      { marks: 1, description: "transfers can be interrupted and resumed / offers remote access", keywords: ["interrupted and resumed", "remote access"] },
      { marks: 1, description: "cross-platform compatibility / no restriction on file size / can be automated / preserves directory structure", keywords: ["cross platform", "no restriction on file size", "automated with scripts", "directory structure"] },
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "The image shows the network environment in the administrative office. Identify the device labelled 3.4.1 in the image.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Switch/Hub.",
    marking_notes: "Accept Switch or Hub.",
    marking_points: [{ marks: 1, description: "switch / hub", keywords: ["switch", "hub"] }],
    image_url: `${IMG}/3-4-network-diagram.png`,
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Identify the device labelled 3.4.2 in the image (see 3.4.1's diagram).",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Router/Modem.",
    marking_notes: "Accept Router or Modem.",
    marking_points: [{ marks: 1, description: "router / modem", keywords: ["router", "modem"] }],
    image_url: `${IMG}/3-4-network-diagram.png`,
  },
  {
    number: "3", sub_number: "3.5.1",
    text: "There is increased bandwidth usage at the lodge due to many guests streaming videos on the wireless network. Differentiate between range and bandwidth in wireless networks.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Range: the distance covered by the signal before weakening. Bandwidth: the amount of data that can be transmitted per time unit / speed of transmission.",
    marking_notes: "One mark for range, one mark for bandwidth.",
    marking_points: [
      { marks: 1, description: "range = distance covered by the signal before weakening", keywords: ["distance covered", "signal before weakening"] },
      { marks: 1, description: "bandwidth = amount of data transmitted per time unit / speed of transmission", keywords: ["data transmitted", "speed of transmission"] },
    ],
  },
  {
    number: "3", sub_number: "3.5.2",
    text: "Give TWO possible reasons why there may be streaming delays and more buffering challenges at the chalets than at the main building where a wired network is used.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: the bandwidth capacity of a wireless network is lower; more data/traffic in the chalets sharing the same network channel; some guests may be located further from the router; signal/obstacle interference or weather.",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "lower bandwidth capacity of wireless network / more traffic sharing the same channel", keywords: ["bandwidth capacity", "traffic", "same network channel"] },
      { marks: 1, description: "guests further from the router / signal or weather interference", keywords: ["further away from the router", "signal interference", "weather"] },
    ],
  },
  {
    number: "3", sub_number: "3.6.1",
    text: "The lodge is upgrading its website from static to dynamic. Discuss TWO benefits of a dynamic website for the lodge's customers.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: personalised experience (customers can see bookings/tailored content); real-time information (prices/promotions updated instantly); online bookings (reserve directly on the website); interactive features (contact forms, reviews, feedback).",
    marking_notes: "One mark per correct benefit, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "personalised experience / real-time updated information", keywords: ["personalised experience", "tailored content", "real time information", "updated instantly"] },
      { marks: 1, description: "online bookings / interactive features (forms, reviews, feedback)", keywords: ["online bookings", "reservations directly", "interactive features", "contact forms"] },
    ],
  },
  {
    number: "3", sub_number: "3.6.2",
    text: "The web designer has requested the appointment of a web author at the lodge. Name TWO tasks that will typically be allocated to the web author.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: creates text/images/photos/video/content; structures/formats the content; hyperlink and SEO management; updates and maintains content; collaborates with designers/authors/developers; publishes and shares accessible, functional content.",
    marking_notes: "One mark per correct task, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "creates and structures/formats website content", keywords: ["creates text", "creates content", "structures the content", "format the content"] },
      { marks: 1, description: "hyperlink/SEO management / updates and maintains content / collaborates with others / publishes content", keywords: ["seo management", "update and maintain", "collaborate with", "publish and share"] },
    ],
  },
  {
    number: "3", sub_number: "3.7.1",
    text: "Invisible data collection refers to the automatic gathering of user information online, without the user's active awareness. State and explain a technique used in invisible data capturing.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any one technique and explanation, e.g. Cookies: small files stored in a browser that track websites visited, clicks and preferences; Location/digital tracking: uses IP address, GPS, Wi-Fi or mobile sensors to track location and movement; Device/browser fingerprinting: collects device/browser info to identify a user uniquely; Clickstream tracking: scripts that secretly record navigation, clicks and scrolling.",
    marking_notes: "One mark for naming/describing a real technique, one mark for a correct explanation of it.",
    marking_points: [
      { marks: 1, description: "names a real invisible-data-capturing technique (cookies, location/digital tracking, device fingerprinting, metadata tracking, or clickstream tracking)", keywords: ["cookies", "location tracking", "digital tracking", "fingerprinting", "metadata tracking", "clickstream"] },
      { marks: 1, description: "correct explanation of how that technique works", keywords: ["small files stored", "track your location", "identify you uniquely", "record how you navigate", "collects information about the context"] },
    ],
  },
  {
    number: "3", sub_number: "3.7.2",
    text: "How will location-based data, used collectively with invisible data capturing, contribute to the safety of guests at the reserve?",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "For example: monitor guest locations to stop them entering dangerous/restricted areas or to assist if they get lost; quickly identify a guest's exact location during medical/security incidents for faster ranger response; provide automatic wildlife/weather/terrain warnings based on the guest's position; use geo-fencing and crowd-management data to guide safe movement; analyse behaviour patterns to prevent risks.",
    marking_notes: "One mark for evidence of using location-based/invisible data, one mark for the resulting safety benefit (or equivalent example combining both).",
    marking_points: [
      { marks: 1, description: "monitor guest locations / identify exact location during an incident", keywords: ["monitor guest locations", "exact location", "geo fencing"] },
      { marks: 1, description: "to stop entering dangerous areas, assist if lost, faster ranger response, or automatic hazard warnings", keywords: ["dangerous or restricted areas", "assist if they get lost", "faster ranger response", "automatic wildlife", "weather warnings"] },
    ],
  },
  {
    number: "3", sub_number: "3.8.1",
    text: "The IT team wants to improve security when staff log into the reservation system remotely. Briefly explain the concept multi-factor authentication (MFA).",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Authentication requires two or more verification methods.",
    marking_notes: "Accept only the concept of two or more verification methods being required.",
    marking_points: [{ marks: 1, description: "authentication requires two or more verification methods", keywords: ["two or more verification methods", "multiple verification methods"] }],
  },
  {
    number: "3", sub_number: "3.8.2",
    text: "Motivate why a one-time pin (OTP) is an effective mechanism for verifying staff logins.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any ONE of: the staff member receives the OTP on their personal device, not accessible by others; it's an extra layer of security even if the password is compromised; OTPs are time-sensitive/one-time use, reducing the risk of re-use.",
    marking_notes: "Accept any one of the memo's three motivations.",
    marking_points: [{ marks: 1, description: "received only on the staff member's own device, adds an extra layer of security, or is time-sensitive/one-time use", keywords: ["personal device", "not accessible by others", "extra layer of security", "time sensitive", "one time use"] }],
  },
  {
    number: "3", sub_number: "3.9.1",
    text: "The wildlife reserve is setting up motion-activated cameras whose footage must be sent to a research centre several kilometres away. Which transmission medium would be the most appropriate to transfer the footage?",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: fibre optic; radio/electromagnetic waves; satellite.",
    marking_notes: "Accept fibre optic, radio waves, or satellite.",
    marking_points: [{ marks: 1, description: "fibre optic / radio waves / satellite", keywords: ["fibre optic", "radio waves", "electromagnetic waves", "satellite"] }],
  },
  {
    number: "3", sub_number: "3.9.2",
    text: "Give TWO reasons to justify your answer to Question 3.9.1.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Fibre optic: reliable over long distances, high bandwidth, not affected by weather/EMI. Radio waves: no need for physical cables, suitable for remote/difficult terrain. Satellite: suited for long distances, high-speed data transfer, cost-effective for long distances, reliable in emergencies.",
    marking_notes: "One mark per correct reason matching the medium chosen in 3.9.1, any two.",
    marking_points: [
      { marks: 1, description: "reliable over long distances / high bandwidth / not affected by weather or EMI / no cables needed / suited to remote terrain", keywords: ["reliable over long distances", "high bandwidth", "not affected by weather", "not affected by emi", "no need for physical cables", "remote or difficult terrain"] },
      { marks: 1, description: "high-speed data transfer / cost-effective over long distances / reliable in emergencies", keywords: ["high speed data transfer", "cost effective", "reliable in emergencies"] },
    ],
  },

  // ============ SECTION D: DATA AND INFORMATION MANAGEMENT (20 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "A table called tblAnimalSightings has been designed to save details of animals, rangers and sightings. The Experience field is currently a text data type. Give a reason why the data and data type of this field should be changed to integer.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: to be able to update the years' experience by incrementing it; to perform calculations/processing/sorting/queries; simplifies data validation; avoids data inconsistencies; avoids redundant data.",
    marking_notes: "Accept any one of the memo's list.",
    marking_points: [{ marks: 1, description: "to allow incrementing/calculations/sorting/queries, simplify validation, or avoid inconsistent/redundant data", keywords: ["incrementing", "calculations", "sorting", "queries", "simplifies data validation", "data inconsistencies", "redundant data"] }],
    image_url: `${IMG}/4-1-tblanimalsightings.png`,
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "State and explain the anomaly that will occur by having the RangerContact and Experience fields in the tblAnimalSightings table.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE anomaly with explanation: Insert — a new sighting cannot be added without adding ranger details; Delete — deleting a sighting may result in losing ranger contact details; Update — when a ranger's contact number changes, all records of sightings by that ranger must be updated.",
    marking_notes: "One mark for naming the correct anomaly type (insert/delete/update), one mark for a correct explanation of it.",
    marking_points: [
      { marks: 1, description: "names the anomaly type: insert, delete, or update anomaly", keywords: ["insert anomaly", "delete anomaly", "update anomaly", "insertion anomaly", "deletion anomaly", "updating anomaly"] },
      { marks: 1, description: "explains it correctly (e.g. can't add a sighting without ranger details; deleting a sighting loses ranger details; a changed contact number must be updated everywhere)", keywords: ["cannot be added without adding ranger", "losing ranger contact", "must be updated with the new contact"] },
    ],
    image_url: `${IMG}/4-1-tblanimalsightings.png`,
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "The tblAnimalSightings table has been split into three separate tables to support normalisation rules. Redraw the tblAnimals, tblRangers and tblSightings tables in your ANSWER BOOK, including the provided fields, and complete the diagram by filling in ALL the missing fields required for the tblSightings table (including the foreign key(s)) and showing the relationship(s) between the tables.",
    marks: 6, topicKey: "data-information-management", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Diagram correctly copied with table names and primary-key field names. tblSightings needs two foreign keys, RangerID and AnimalID, plus the fields SightingLocation, SightingDate and SightingTime. Relationships: 1-to-Many on AnimalID from tblAnimals to tblSightings, and 1-to-Many on RangerID from tblRangers to tblSightings.",
    marking_notes: "Marking points per the memo's six ticks: diagram copied correctly; foreign key RangerID; foreign key AnimalID; the three missing fields (SightingLocation, SightingDate, SightingTime); the AnimalID 1-to-Many relationship; the RangerID 1-to-Many relationship.",
    marking_points: [
      { marks: 1, description: "diagram correctly copied, with table names and primary-key fields shown", keywords: ["tblanimals", "tblrangers", "tblsightings", "primary key"] },
      { marks: 1, description: "foreign key RangerID added to tblSightings", keywords: ["rangerid foreign key", "foreign key rangerid"] },
      { marks: 1, description: "foreign key AnimalID added to tblSightings", keywords: ["animalid foreign key", "foreign key animalid"] },
      { marks: 1, description: "fields SightingLocation, SightingDate and SightingTime added to tblSightings", keywords: ["sightinglocation", "sightingdate", "sightingtime"] },
      { marks: 1, description: "1-to-Many relationship on AnimalID from tblAnimals to tblSightings", keywords: ["1 to many animalid", "one to many animalid"] },
      { marks: 1, description: "1-to-Many relationship on RangerID from tblRangers to tblSightings", keywords: ["1 to many rangerid", "one to many rangerid"] },
    ],
    image_url: `${IMG}/4-1-3-tables-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "The rangers rely on databases to store vast amounts of data aimed at monitoring the movements of the 'Big 5' animals. Differentiate between currency and relevance as characteristics of data.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Currency refers to how up to date/timely the data is. Relevance refers to usefulness/applicability — whether the data is appropriate for a specific context or purpose.",
    marking_notes: "One mark for currency, one mark for relevance.",
    marking_points: [
      { marks: 1, description: "currency = timeliness / how up to date the data is", keywords: ["timeliness", "up to date"] },
      { marks: 1, description: "relevance = usefulness/applicability for a specific context or purpose", keywords: ["usefulness", "applicability", "specific context", "specific purpose"] },
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Several wildlife reserves across the country use a common booking system. Visitors who have qualified for loyalty cards will receive discounts at certain lodges and national parks. Give TWO potential benefits for a lodge when implementing a guest loyalty card programme.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: track guest behaviour/data collection; targeted marketing; increased lodge revenue; strengthens guest relationships/personalisation/recognition; improves lodge services/saves time with booking; differentiates the lodge from competitors; determines which booking times/seasons are more popular.",
    marking_notes: "One mark per correct benefit, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "tracks guest behaviour/data for targeted marketing, or increases revenue", keywords: ["track guest behaviour", "targeted marketing", "increased lodge revenue"] },
      { marks: 1, description: "strengthens guest relationships/personalisation, improves services, differentiates from competitors, or reveals popular booking seasons", keywords: ["guest relationships", "guest personalisation", "improves lodge services", "differentiate the lodge", "popular"] },
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "The lodge does not have the capacity to fund a new proprietary DBMS. Identify TWO open-source DBMS software applications from this list: Microsoft SQL Server; MySQL; Oracle; Microsoft Access; PostgreSQL.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "MySQL and PostgreSQL.",
    marking_notes: "One mark each for MySQL and PostgreSQL; the other three (Microsoft SQL Server, Oracle, Microsoft Access) are proprietary and must not be credited.",
    marking_points: [
      { marks: 1, description: "MySQL", keywords: ["mysql"] },
      { marks: 1, description: "PostgreSQL", keywords: ["postgresql", "postgres"] },
    ],
  },
  {
    number: "4", sub_number: "4.4.1a",
    text: "Define the concept: Data warehouse.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "A central database that stores large collections of historical data gathered from multiple sources.",
    marking_notes: "Any TWO of the memo's four concepts: central database; stores large collections; of historical data; gathered from multiple sources.",
    marking_points: [
      { marks: 1, description: "a central database that stores large collections of data", keywords: ["central database", "large collections"] },
      { marks: 1, description: "historical data gathered from multiple sources", keywords: ["historical data", "multiple sources"] },
    ],
  },
  {
    number: "4", sub_number: "4.4.1b",
    text: "Define the concept: Data mining.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Finding patterns/trends in large datasets using algorithms, to make informed decisions.",
    marking_notes: "Any TWO of the memo's four concepts: find patterns/trends; in large datasets; using algorithms; to make informed decisions.",
    marking_points: [
      { marks: 1, description: "finds patterns/trends in large datasets", keywords: ["patterns", "trends", "large datasets"] },
      { marks: 1, description: "uses algorithms to make informed decisions", keywords: ["using algorithms", "informed decisions"] },
    ],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Give ONE specific example of data mining related to wildlife conservation.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: identifying species that signal extinction by analysing sighting trends; finding locations where certain animals are commonly sighted; predicting migration routes from past patterns; predicting poaching hotspots; planning feeding during problem seasons; controlling tourism's influence on animals.",
    marking_notes: "Accept any one reasonable, specific example related to wildlife conservation.",
    marking_points: [{ marks: 1, description: "a specific wildlife-conservation data-mining example, e.g. predicting migration routes, poaching hotspots, or extinction-signalling species", keywords: ["sighting trends", "commonly sighted", "migration routes", "poaching hotspots", "feeding during problem seasons", "influence of tourism"] }],
  },

  // ============ SECTION E: SOLUTION DEVELOPMENT (30 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "Give the value of iResult in the following Delphi statement: iResult := CEIL(-2.3)",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "iResult = -2.",
    marking_notes: "CEIL rounds up towards positive infinity, so CEIL(-2.3) = -2.",
    steps: [{ marks: 1, description: "What is CEIL(-2.3)?", options: ["-2", "-3", "2", "3"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Give the value of iResult in the following Delphi statement: iResult := TRUNC(-2.3)",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "iResult = -2.",
    marking_notes: "TRUNC discards the decimal part, so TRUNC(-2.3) = -2.",
    steps: [{ marks: 1, description: "What is TRUNC(-2.3)?", options: ["-2", "-3", "2", "0"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "Given the code segment (var iNum, iAnsw: Integer; rNum, rAnsw: Real; iNum := 25; rNum := 15;) state whether Line 7 — iAnsw := iNum/5; — is CORRECT or INCORRECT, and give a reason.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Incorrect — the / operator performs real division, so the result must be assigned to a real variable, not an integer; the / operator should be replaced by the DIV operator.",
    marking_notes: "One mark for \"incorrect\", one mark for a valid reason (real division result assigned to an integer, or / should be DIV). No marks for INCORRECT alone.",
    marking_points: [
      { marks: 1, description: "incorrect", keywords: ["incorrect"] },
      { marks: 1, description: "the result of / is real and cannot go into an integer variable, or / should be DIV", keywords: ["real division", "must be real", "div operator", "replaced by the div"] },
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "State whether Line 8 — rAnsw := 15 MOD 3; — is CORRECT or INCORRECT, and give a reason.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Correct — the result of the MOD operation can be assigned to a real or integer variable, although the result of MOD is itself an integer value.",
    marking_notes: "One mark for \"correct\", one mark for the reason. No marks for CORRECT alone.",
    marking_points: [
      { marks: 1, description: "correct", keywords: ["correct"] },
      { marks: 1, description: "the MOD result (an integer) can be assigned to a real (or integer) variable", keywords: ["can be assigned to a real", "assigned to a real or integer"] },
    ],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "State whether Line 9 — iAnsw := rNum MOD 3; — is CORRECT or INCORRECT, and give a reason.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Incorrect — rNum must be an integer data type; the MOD operator can only be used on integer values.",
    marking_notes: "One mark for \"incorrect\", one mark for the reason (MOD requires integer operands, rNum is Real). No marks for INCORRECT alone.",
    marking_points: [
      { marks: 1, description: "incorrect", keywords: ["incorrect"] },
      { marks: 1, description: "rNum must be an integer / MOD can only be used on integer values", keywords: ["must be an integer", "mod operator can only be used on integer"] },
    ],
  },
  {
    number: "5", sub_number: "5.3.1a",
    text: "A DateTimePicker component is used to select the date of the sighting in the correct format. Name ONE other form of verification that can be applied to the date of sighting selected.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any ONE of: check the date matches the actual sighting date; test that the date selected is not in the future; test that the date is realistic; use the system date; visual checks/double entry/cross-referencing.",
    marking_notes: "Accept any one of the memo's list.",
    marking_points: [{ marks: 1, description: "check the date is not in the future / is realistic / matches system date / cross-referenced or double-entered", keywords: ["not in the future", "realistic", "system date", "double entry", "cross referencing", "correspond", "match to the actual date"] }],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.3.1b",
    text: "Use the example of the date of sighting selected to illustrate the difference between valid and correct data in this scenario.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "Valid data: using the DateTimePicker ensures the format/range/data type of the date is correct. Correct data: the date of sighting selected must correspond/match the actual date the sighting happened.",
    marking_notes: "One mark for explaining valid data (correct format/range/type via the DateTimePicker), one mark for explaining correct data (matches the real sighting date).",
    marking_points: [
      { marks: 1, description: "valid data: the DateTimePicker ensures the correct format/range/data type", keywords: ["format", "range", "data type is correct"] },
      { marks: 1, description: "correct data: the date must match/correspond to the actual date of the sighting", keywords: ["correspond", "match", "actual date of the sighting"] },
    ],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "The possible locations in the reserve where a sighting can be registered are: Tshokwane, Flamingo Dam, Mopani Camp and Elephant Valley. Give the name of a suitable component that can be added to the interface to ensure that a valid location is selected by the user.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: combo box; list box; radio group.",
    marking_notes: "Accept combo box, list box, or radio group.",
    marking_points: [{ marks: 1, description: "combo box / list box / radio group", keywords: ["combo box", "list box", "radiogroup", "radio group"] }],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.3.3",
    text: "Design a UML diagram for a Sighting object using the information provided on the 'Big 5 - Animal sighting' interface. The diagram must include: five Sighting object attributes; a constructor method without parameters; two accessor methods; one mutator method that receives a parameter; private/public accessibility of all attributes and methods; and data types where necessary.",
    marks: 7, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "TSighting: - fAnimal: String; - fNumSighted: Integer; - fLocationSighted: String; - fDateSighted: TDate; - fTimeSighted: TTime; + Constructor create(); + getAnimal: String; + getNumSighted: Integer; + setNumSighted(numSighted: Integer). (Also accept the equivalent accessor/mutator methods for the other fields, e.g. getDateSighted, setLocationSighted, etc.)",
    marking_notes: "Marking points per the memo's seven ticks: heading TSighting; five correct attributes; correct data types on all attributes; parameterless constructor; an accessor method with correct data type; a mutator method with correct parameter and data type; correct private (attributes) / public (methods) indication.",
    marking_points: [
      { marks: 1, description: "UML diagram headed TSighting", keywords: ["tsighting"] },
      { marks: 1, description: "five correct attributes (animal, number sighted, location, date, time)", keywords: ["fanimal", "fnumsighted", "flocationsighted", "fdatesighted", "ftimesighted"] },
      { marks: 1, description: "all attribute data types correct (String, Integer, TDate, TTime)", keywords: ["string integer", "tdate", "ttime"] },
      { marks: 1, description: "a constructor method without parameters", keywords: ["constructor create"] },
      { marks: 1, description: "an accessor (get) method with the correct return data type", keywords: ["getanimal", "getnumsighted", "getdatesighted", "gettimesighted", "getlocationsighted"] },
      { marks: 1, description: "a mutator (set) method with a correct parameter and data type", keywords: ["setnumsighted", "setdatesighted", "settimesighted", "setanimal", "setlocationsighted"] },
      { marks: 1, description: "correct private (all attributes) and public (all methods) accessibility shown", keywords: ["private", "public"] },
    ],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "A text file called BirdSpeciesSpotted.txt contains the number of bird species spotted by an unknown number of bird watchers over four days. Give ONE reason why a conditional loop will be a suitable loop to read the data from the text file.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: to accommodate an unknown number of bird watchers/lines in the text file / loop until end of file (EOF); lines can be added to or removed from the text file without changing the code.",
    marking_notes: "Accept either of the memo's two reasons.",
    marking_points: [{ marks: 1, description: "accommodates an unknown number of lines / loops until EOF, or lines can be added/removed without changing the code", keywords: ["unknown number", "end of file", "eof", "added to or removed"] }],
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "The AssignFile() and Reset() procedures are used to open a text file for reading purposes. Which procedure is used to create a new text file following the AssignFile() procedure?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Remembering",
    model_answer: "Rewrite().",
    marking_notes: "Accept only Rewrite().",
    marking_points: [{ marks: 1, description: "Rewrite()", keywords: ["rewrite"] }],
  },
  {
    number: "5", sub_number: "5.4.3a",
    text: "The data from BirdSpeciesSpotted.txt must be saved into arrays: a one-dimensional array arrBirdWatcherNames for the names, and a parallel two-dimensional array arr2DSpotted for the number of species spotted per day. Give ONE reason why the names of the bird watchers should NOT be included as part of the two-dimensional array arr2DSpotted.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: the bird watcher's name is a String while the species-spotted count is Integer; the data types of all data in a two-dimensional array must be the same; the array needs to be declared as integer to allow calculations.",
    marking_notes: "Accept any one of the memo's three reasons.",
    marking_points: [{ marks: 1, description: "names are String but the counts are Integer / a 2D array must hold one consistent data type / it must be Integer to allow calculations", keywords: ["data type of the name", "data types of all data", "same", "declared as integer", "calculations"] }],
  },
  {
    number: "5", sub_number: "5.4.3b",
    text: "A global variable iNumBirdWatchers stores the number of lines read from the text file. Write an algorithm that can be used to determine the highest number of bird species spotted by each bird watcher over the four days, and populate column 5 of the two-dimensional array arr2DSpotted with these values.",
    marks: 8, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Loop Row from 1 to iNumBirdWatchers\n    Highest ← arr2DSpotted[Row, 1]\n    Loop Col from 2 to 4\n        If Highest < arr2DSpotted[Row, Col]\n            Highest ← arr2DSpotted[Row, Col]\n    arr2DSpotted[Row, 5] ← Highest",
    marking_notes: "Marking points per the memo's eight ticks, covering the outer loop bounds, initialising Highest, the inner loop bounds, the comparison, the correct array reference used in it, the reassignment inside the if, writing into column 5, and assigning Highest there.",
    marking_points: [
      { marks: 1, description: "outer loop: Row from 1 to iNumBirdWatchers", keywords: ["loop row", "1 to inumbirdwatchers"] },
      { marks: 1, description: "Highest initialised to arr2DSpotted[Row, 1]", keywords: ["highest", "arr2dspotted row 1"] },
      { marks: 1, description: "inner loop: Col from 2 to 4", keywords: ["loop col", "2 to 4"] },
      { marks: 1, description: "an If condition comparing Highest to the current day's value", keywords: ["if highest", "highest <"] },
      { marks: 1, description: "correct array reference arr2DSpotted[Row, Col] used in the comparison", keywords: ["arr2dspotted row col"] },
      { marks: 1, description: "Highest reassigned to arr2DSpotted[Row, Col] inside the If", keywords: ["highest arr2dspotted row col"] },
      { marks: 1, description: "column 5 of the array, arr2DSpotted[Row, 5], is written to after the inner loop", keywords: ["arr2dspotted row 5"] },
      { marks: 1, description: "Highest is assigned into arr2DSpotted[Row, 5]", keywords: ["row 5 highest", "5 highest"] },
    ],
  },

  // ============ SECTION F: INTEGRATED SCENARIO (30 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "IPTV is provided as a service for guests at the lodge. Expand the abbreviation IPTV.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Internet Protocol Television.",
    marking_notes: "Accept only \"Internet Protocol Television\".",
    marking_points: [{ marks: 1, description: "Internet Protocol Television", keywords: ["internet protocol television"] }],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "State TWO challenges that are generally experienced by IPTV providers.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: high bandwidth/network limitations (buffering, latency, packet loss); licensing and legal challenges; technical/compatibility issues (device compatibility, scaling); high operating costs; cybersecurity threats; regional restrictions.",
    marking_notes: "One mark per correct challenge, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "bandwidth/network limitations (buffering, latency, packet loss) or licensing/legal challenges", keywords: ["bandwidth", "buffering", "latency", "packet loss", "licensing", "legal challenges"] },
      { marks: 1, description: "device compatibility/scaling issues, high operating costs, cybersecurity threats, or regional restrictions", keywords: ["device compatibility", "scaling", "operating costs", "cybersecurity threats", "regional restrictions"] },
    ],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "Compression technologies play a vital role in the transmission of multimedia data. Explain the relationship between the video quality and the speed of delivery of compressed video data.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "There is an inverse relationship: the higher the quality, the lower the speed of delivery (and vice versa).",
    marking_notes: "Accept either direction of the inverse relationship.",
    marking_points: [{ marks: 2, description: "inverse relationship: higher quality means lower delivery speed, or lower quality means higher delivery speed", keywords: ["higher the quality the lower the speed", "lower the quality the higher the speed", "inverse relationship"] }],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "The e-mail system at the lodge was recently targeted by cyber gangs. Explain what social engineering is.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "The process of manipulating/tricking a person to give out their personal details.",
    marking_notes: "One mark for manipulating/tricking a person, one mark for the goal of obtaining personal details.",
    marking_points: [
      { marks: 1, description: "manipulating/tricking a person", keywords: ["manipulating", "tricking a person"] },
      { marks: 1, description: "to give out their personal details", keywords: ["personal details", "give out"] },
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "State TWO ways by which users can identify phishing e-mails.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: suspicious sender address; generic greetings (\"Dear Customer\"); urgent or threatening language; suspicious links or attachments; poor spelling or grammar; too-good-to-be-true offers; requests for personal information.",
    marking_notes: "One mark per correct identifying sign, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "suspicious/unusual sender address, or generic greeting", keywords: ["suspicious sender", "unusual email domain", "generic greeting", "dear customer"] },
      { marks: 1, description: "urgent/threatening language, suspicious links/attachments, poor spelling/grammar, too-good-to-be-true offers, or requests for personal info", keywords: ["urgent", "threatening language", "suspicious links", "attachments", "poor spelling", "grammar", "too good to be true", "personal information"] },
    ],
  },
  {
    number: "6", sub_number: "6.2.3",
    text: "The IT team requested the appointment of a digital forensic investigator. Explain the task of a digital forensic investigator.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "A digital forensic investigator analyses/identifies digital evidence from computers, networks and other devices to uncover facts about cybercrimes/data breaches/other digital incidents.",
    marking_notes: "One mark for analysing/identifying digital evidence, one mark for the purpose (uncovering facts about cybercrimes/breaches/incidents).",
    marking_points: [
      { marks: 1, description: "analyses/identifies digital evidence from computers, networks and devices", keywords: ["digital evidence", "analyses", "identifies"] },
      { marks: 1, description: "to uncover facts about cybercrimes/data breaches/digital incidents", keywords: ["cybercrimes", "data breaches", "digital incidents"] },
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "Researchers will be provided with a security token when using an online booking system to manage their accommodation. Describe how a security token works.",
    marks: 3, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "After successful authentication of a user, a security token is generated and sent to the user; the user stores the token and uses it for every subsequent request; the server validates the token by checking the expiry date or verifying a signature.",
    marking_notes: "Any THREE of the memo's four concepts: successful authentication of user; token generated and sent to user; token used/stored for subsequent requests; server validates the token.",
    marking_points: [
      { marks: 1, description: "after successful authentication, a token is generated and sent to the user", keywords: ["successful authentication", "token generated", "sent to the user"] },
      { marks: 1, description: "the user stores/uses the token for every subsequent request", keywords: ["stores the token", "subsequent request"] },
      { marks: 1, description: "the server validates the token (checking expiry or signature)", keywords: ["server validates", "expiry date", "verification of a signature"] },
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Explain how the use of SSL will improve website security.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "SSL provides encrypted data transmission between the website and the guest, preventing unauthorised access.",
    marking_notes: "One mark for encrypted transmission between website and user, one mark for preventing unauthorised access.",
    marking_points: [
      { marks: 1, description: "provides encrypted data transmission between website and guest", keywords: ["encrypted data transmission", "between website and guest"] },
      { marks: 1, description: "prevents unauthorised access", keywords: ["prevent unauthorised access"] },
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "The lodge wants its website, 'Big 5 Safaris in South Africa', to appear at the top of search engine results to maximise the use of Web 3.0 capabilities. Suggest TWO techniques that may be used to enhance search engine optimisation to improve the website's visibility.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: use relevant keywords; high quality content; webpage optimisation (metatags, headers, image texts); secure website (HTTPS); mobile friendly design; fast page loading times; social media integration; regular updates. (Paying a search engine/for marketing is NOT accepted as SEO.)",
    marking_notes: "One mark per correct technique, any two of the memo's list; do not accept paying for search ranking or marketing.",
    marking_points: [
      { marks: 1, description: "relevant keywords / high quality content / webpage optimisation (metatags, headers, image text)", keywords: ["relevant keywords", "high quality content", "metatags", "headers", "image texts"] },
      { marks: 1, description: "secure website (HTTPS) / mobile friendly / fast loading times / social media integration / regular updates", keywords: ["https", "mobile friendly", "page loading times", "social media integration", "regular updates"] },
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "Is the URL https://example.com/services?category=big5&sessionid=221 an example of Web 1.0 or Web 3.0?",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Web 3.0.",
    marking_notes: "Accept only Web 3.0.",
    marking_points: [{ marks: 1, description: "Web 3.0", keywords: ["web 3 0", "web3"] }],
  },
  {
    number: "6", sub_number: "6.4.3",
    text: "Discuss how a semantic search could improve the accuracy of search results.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: semantic search focuses on meaning rather than keywords; uses metadata (data that defines and describes the characteristics of other data); uses Natural Language Processing (NLP).",
    marking_notes: "One mark per correct concept, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "focuses on meaning rather than keywords", keywords: ["focuses on meaning", "no emphasis on keywords"] },
      { marks: 1, description: "uses metadata / Natural Language Processing (NLP)", keywords: ["metadata", "natural language processing", "nlp"] },
    ],
  },
  {
    number: "6", sub_number: "6.4.4",
    text: "Briefly explain what the characteristic of a mediated search method is.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any method that addresses the need for human/system involvement to refine or filter results.",
    marking_notes: "Accept the core concept of human/system involvement refining or filtering search results.",
    marking_points: [{ marks: 1, description: "human/system involvement to refine or filter results", keywords: ["human involvement", "system involvement", "refine", "filter results"] }],
  },
  {
    number: "6", sub_number: "6.5",
    text: "Researchers use a mobile app that allows them to view additional information about animals observed, while looking through the cameras of their mobile devices. Identify the type of technology that is used by this app.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Augmented Reality / AR.",
    marking_notes: "Accept Augmented Reality or AR.",
    marking_points: [{ marks: 1, description: "Augmented Reality / AR", keywords: ["augmented reality", "ar"] }],
  },
  {
    number: "6", sub_number: "6.6.1",
    text: "The incident where poisoning of an elephant by poachers led to the poisoning of many vultures was discussed at a strategic planning session. Many of the poisoned vultures had active RFID tags. Differentiate between a passive and an active RFID tag, by referring to the power source of each.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "An active tag includes its own battery/power source. A passive tag receives power from the reader's antennae (has no power source of its own).",
    marking_notes: "One mark for active (has its own battery), one mark for passive (powered by the reader's antenna).",
    marking_points: [
      { marks: 1, description: "an active tag includes its own battery/power source", keywords: ["active tag", "battery", "power source"] },
      { marks: 1, description: "a passive tag receives power from the reader's antenna", keywords: ["passive tag", "reader s antennae", "receives power"] },
    ],
  },
  {
    number: "6", sub_number: "6.6.2",
    text: "Explain how RFID works and how rangers were able to locate the poisoned birds in time.",
    marks: 3, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "RFID uses radio waves to read a unique identifier/tag, to pinpoint the beacon/location of the bird using GPS capabilities.",
    marking_notes: "Three concepts, one mark each: uses radio waves; reads a unique identifier/tag; pinpoints the bird's location/beacon using GPS.",
    marking_points: [
      { marks: 1, description: "RFID uses radio waves", keywords: ["radio waves"] },
      { marks: 1, description: "to read a unique identifier/tag", keywords: ["unique identifier", "tag"] },
      { marks: 1, description: "to pinpoint the beacon/location of the bird using GPS", keywords: ["pinpoint", "beacon", "location of the bird", "gps"] },
    ],
  },
  {
    number: "6", sub_number: "6.7",
    text: "The IT team suggested the implementation of distributed computing at the research centre. Motivate this suggestion by giving TWO reasons why distributed computing would benefit research projects.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO of: researchers pool computing power/storage they would not have individually (shared resources); tasks run in parallel on multiple devices, speeding up calculations (faster processing); more devices can be added easily as needs grow (scalability); if one device fails, others continue (high reliability); lower system requirements/cost (cost-effective); researchers can access shared data/resources from different locations (geographic access).",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    marking_points: [
      { marks: 1, description: "pooled/shared computing resources, or faster parallel processing", keywords: ["shared resources", "pool computing power", "parallel", "faster processing"] },
      { marks: 1, description: "easy scalability, higher reliability (fault tolerance), cost-effectiveness, or geographic access to shared data", keywords: ["scalability", "one device fails", "reliability", "cost effective", "geographic access", "different locations"] },
    ],
  },
];

// No exam_schedule entries here, matching the Mathematics/Physical Sciences
// ingestion convention — this paper's real NSC exam dates are not modelled
// in this ingestion.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];
