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
// calculations), but like this app's Mathematics and Advanced Mathematics
// (AP Calc AB) papers, every question here uses the stepped-MCQ pattern
// (`steps: MarkingPointStep[]`) rather than free-text keyword grading —
// free-text keyword matching proved unreliable, so the student now picks an
// option per mark-earning step instead of typing an answer:
//   - Section A's 1.1.1-1.1.10 (choose A-D from four given options) are
//     single-step four-option MCQs, with the real four options and the real
//     correct answer read off the memo.
//   - 5.1.1/5.1.2 (Delphi CEIL/TRUNC value tracing) are also single-step
//     numeric MCQs, since the memo gives one exact numeric answer with no
//     partial credit.
//   - 1.2 ("give ONE word/term") questions are single-step MCQs with the
//     real term plus three plausible-but-wrong IT terms.
//   - 1.3 (TRUE/FALSE-with-correction) questions use a TRUE/FALSE step
//     (worth 0 marks, since the memo gives no credit for the TRUE/FALSE
//     call alone) followed, where the statement is FALSE, by a second step
//     worth the question's mark that picks the correct term/statement from
//     plausible wrong corrections; TRUE-only questions are a single step.
//   - "State/give/name TWO of ..." list-style questions (common through
//     Sections B-F) become two single-mark steps, one per required item —
//     each step's distractors are invented plausible-but-wrong IT answers,
//     never the OTHER correct item from the same memo list (which would
//     also be creditable in reality).
//   - 4.1.3 (redraw-and-complete an ER diagram) and 5.4.3b (write a
//     pseudocode algorithm) are inherently non-MCQ tasks, so each is broken
//     into one MCQ step per gradable element (which foreign key, which
//     relationship type, which loop bound, etc.) instead.
// Every step's correct option is taken verbatim from the memo-derived
// model_answer; distractors are invented, plausible wrong IT answers in the
// same register as the question, not other correct alternatives.
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
    steps: [{ marks: 1, description: "What word/term describes a sequence of steps used to solve a specific problem or task?", options: ["Algorithm", "Flowchart", "Pseudocode", "Syntax"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Give ONE word/term for the following description: The practice of good manners when communicating electronically.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Netiquette.",
    marking_notes: "Accept only \"netiquette\".",
    steps: [{ marks: 1, description: "What word/term describes the practice of good manners when communicating electronically?", options: ["Netiquette", "Cyberbullying", "Phishing", "Encryption"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Give ONE word/term for the following description: A complete web address for a specific web page or resource.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Uniform Resource Locator / URL.",
    marking_notes: "Accept \"URL\" or \"Uniform Resource Locator\".",
    steps: [{ marks: 1, description: "What word/term describes a complete web address for a specific web page or resource?", options: ["URL (Uniform Resource Locator)", "IP address", "DNS (Domain Name System)", "HTTP header"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Give ONE word/term for the following description: Software that facilitates communication between the operating system and hardware devices.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Device Driver (also accept: Driver).",
    marking_notes: "Accept \"device driver\" or just \"driver\".",
    steps: [{ marks: 1, description: "What word/term describes software that facilitates communication between the operating system and hardware devices?", options: ["Device driver", "Firmware", "BIOS", "Utility software"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "Give ONE word/term for the following description: A widely used website that allows for collaboration, where users can create, edit and link content easily.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Wiki/Wikipedia.",
    marking_notes: "Accept \"wiki\" or \"Wikipedia\".",
    steps: [{ marks: 1, description: "What word/term describes a widely used website that allows collaboration, where users can create, edit and link content easily?", options: ["Wiki", "Blog", "Podcast", "Forum"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.3.1",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): The function Randomrange(10,12) in Delphi returns a random integer value between 10 and 12, both inclusive.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "FALSE, Randomrange(10,13) [or Random(3) + 10] — Randomrange's upper bound is exclusive, so to include 12 the call must use 13 as the upper bound.",
    marking_notes: "No marks for FALSE alone; the corrected statement (Randomrange(10,13), or the equivalent Random(3) + 10) must also be given.",
    steps: [
      { marks: 0, description: "Is it TRUE or FALSE that Randomrange(10,12) returns a random integer between 10 and 12, both inclusive?", options: ["TRUE", "FALSE"], correctIndex: 1 },
      { marks: 1, description: "What is the correct call so that 12 is included as a possible result?", options: ["Randomrange(10,13)", "Randomrange(10,12)", "Randomrange(9,12)", "Random(12) + 10"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): The Linux Ubuntu operating system is commonly used in smartphones.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "FALSE, Android / iOS / Harmony OS.",
    marking_notes: "No marks for FALSE alone; a valid smartphone OS (Android, iOS or Harmony OS) must also be given.",
    steps: [
      { marks: 0, description: "Is it TRUE or FALSE that Linux Ubuntu is commonly used in smartphones?", options: ["TRUE", "FALSE"], correctIndex: 1 },
      { marks: 1, description: "Which operating system is actually commonly used in smartphones?", options: ["Android", "Windows Server", "MS-DOS", "Ubuntu Server"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): BitTorrent is a peer-to-peer file-sharing protocol.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "TRUE.",
    marking_notes: "Accept only TRUE.",
    steps: [{ marks: 1, description: "Is it TRUE or FALSE that BitTorrent is a peer-to-peer file-sharing protocol?", options: ["TRUE", "FALSE"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.3.4",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): Shareware software is free to use, but may have limited features or may require payment after a trial period.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "TRUE.",
    marking_notes: "Accept only TRUE.",
    steps: [{ marks: 1, description: "Is it TRUE or FALSE that shareware is free to use, but may have limited features or require payment after a trial period?", options: ["TRUE", "FALSE"], correctIndex: 0 }],
  },
  {
    number: "1", sub_number: "1.3.5",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE (do not just use \"NOT\"): The human-readable code of a program is referred to as machine code.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "FALSE, source code.",
    marking_notes: "No marks for FALSE alone; the corrected term \"source code\" must also be given.",
    steps: [
      { marks: 0, description: "Is it TRUE or FALSE that the human-readable code of a program is called machine code?", options: ["TRUE", "FALSE"], correctIndex: 1 },
      { marks: 1, description: "What is the human-readable code of a program correctly called?", options: ["Source code", "Machine code", "Object code", "Byte code"], correctIndex: 0 },
    ],
  },

  // ============ SECTION B: SYSTEMS TECHNOLOGIES (25 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "The motherboard is the 'heart' of any computer. State TWO functions of a motherboard.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: provides slots/ports/connectors for components; distributes power to components; enables communication between components.",
    marking_notes: "One mark per correct function, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a function of the motherboard?", options: ["Provides slots/ports/connectors for components", "Executes all arithmetic calculations for the CPU", "Permanently stores the operating system", "Converts AC power directly to DC without a power supply"], correctIndex: 0 },
      { marks: 1, description: "Which is another function of the motherboard?", options: ["Distributes power to components and enables communication between them", "Compresses files to save storage space", "Cools the CPU using a heat sink", "Encrypts data travelling across the network"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Explain why a bus communication path is slower than a point-to-point communication path on a motherboard.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "A bus is a shared communication path between components, causing a delay because only one component/device can communicate at a time; a point-to-point path is a dedicated communication path.",
    marking_notes: "Any TWO of the memo's three concepts.",
    steps: [
      { marks: 1, description: "What is a bus communication path?", options: ["A shared communication path used by multiple components", "A dedicated one-to-one communication path", "A wireless communication channel", "A path used only for power distribution"], correctIndex: 0 },
      { marks: 1, description: "Why does this shared use cause a delay compared to point-to-point?", options: ["Only one component/device can communicate at a time on it, unlike a dedicated point-to-point path", "It requires more electricity than a point-to-point path", "It uses a slower clock speed than point-to-point paths", "It cannot carry data between the CPU and RAM"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Explain why a GPU will improve the processing performance of a computer system.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "The GPU performs all graphics-related tasks/rendering, which releases the CPU from graphics tasks, giving the CPU more time to process other tasks.",
    marking_notes: "Any TWO of: GPU performs all graphical-related tasks; this lessens the burden on the CPU; the CPU has more time to process other tasks.",
    steps: [
      { marks: 1, description: "What does the GPU do that improves overall performance?", options: ["Performs all graphics-related tasks/rendering", "Executes the operating system's file management", "Stores frequently used data for faster CPU access", "Manages network communication for the computer"], correctIndex: 0 },
      { marks: 1, description: "What effect does this have on the CPU?", options: ["It frees the CPU to spend more time processing other tasks", "It forces the CPU to run at a lower clock speed", "It increases the CPU's cache size", "It reduces the CPU's need for cooling"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.4",
    text: "Compare the role of RAM and VRAM by specifically referring to the function of EACH.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "RAM stores data/instructions to be processed by the CPU; VRAM stores images/video data to be processed by the GPU.",
    marking_notes: "One mark for RAM's role, one mark for VRAM's role.",
    steps: [
      { marks: 1, description: "What is the role of RAM?", options: ["Stores data/instructions to be processed by the CPU", "Stores images/video data to be processed by the GPU", "Permanently stores the operating system files", "Provides power regulation to the CPU"], correctIndex: 0 },
      { marks: 1, description: "What is the role of VRAM?", options: ["Stores images/video data to be processed by the GPU", "Stores data/instructions to be processed by the CPU", "Manages network packets sent to the router", "Cools the graphics card during heavy use"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "Process management is one of the functions of an operating system. State a necessary hardware requirement of a CPU to enable multi-processing.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "The CPU must consist of more than one CPU core.",
    marking_notes: "Accept only the requirement of more than one CPU core.",
    steps: [{ marks: 1, description: "What hardware requirement must the CPU meet to enable multi-processing?", options: ["The CPU must have more than one core", "The CPU must have a higher clock speed", "The CPU must have more cache memory", "The CPU must support virtual memory"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Virtual memory is managed by the operating system. Explain what virtual memory is.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Virtual memory is an area on secondary storage, used as RAM when the system RAM is full/insufficient, used by the operating system to store data temporarily.",
    marking_notes: "Any TWO of the memo's three concepts.",
    steps: [
      { marks: 1, description: "What is virtual memory?", options: ["An area on secondary storage used as RAM", "A dedicated chip on the motherboard for graphics", "A type of cache built into the CPU", "A partition on RAM reserved for the operating system only"], correctIndex: 0 },
      { marks: 1, description: "When does the operating system use virtual memory?", options: ["When the system's RAM is full/insufficient, to store data temporarily", "When the CPU needs to permanently archive old files", "When the hard drive needs to be defragmented", "When the operating system boots up for the first time"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.3",
    text: "The IT team needs to manage data storage. Give a term for the process that removes documents that are no longer actively used from the computer's primary storage and stores the documents in a secondary storage space.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Archiving.",
    marking_notes: "Accept only \"archiving\".",
    steps: [{ marks: 1, description: "What is the term for removing documents no longer actively used from primary storage into secondary storage?", options: ["Archiving", "Formatting", "Defragmenting", "Compressing"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "Drones and mobile technology are often used to observe migration patterns of the 'Big 5' animals. Apart from drones, suggest ONE other mobile technology that can be used to observe migration patterns.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: GPS/satellite tracking of animals; RFID/tags/trackers and mobile receivers; tracking apps; apps using AI to identify animals/species; motion-sensing cameras linked to mobile devices.",
    marking_notes: "Accept any reasonable mobile-device-based example other than drones.",
    steps: [{ marks: 1, description: "Apart from drones, which mobile technology can be used to observe migration patterns?", options: ["GPS/satellite tracking of animals", "A desktop workstation", "A wired Ethernet sensor", "A landline telephone system"], correctIndex: 0 }],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "State TWO constraints of using mobile technologies.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: limited battery life; the tower providing signal may be out of range; limited computing power; limited storage; smaller screens are challenging to read; input methods are a challenge; not able to run desktop applications; may not include a full operating system; not easy to upgrade or repair.",
    marking_notes: "One mark per correct constraint, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine constraint of mobile technologies?", options: ["Limited battery life", "Unlimited processing power compared to desktops", "Larger screens than desktop monitors", "An always-on wired network connection"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine constraint of mobile technologies?", options: ["Input methods can be a challenge on small devices", "Mobile devices always include a full desktop operating system", "Mobile devices are easier to upgrade and repair than desktops", "Mobile devices have unlimited storage capacity"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.5.1",
    text: "A database dedicated to conservation is used to store critical data on endangered species and can be accessed by authorised users only. Suggest TWO biometric authentication methods that can be used to gain access to the database.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: facial recognition; fingerprint scanning; voice recognition; retina/iris/eye scanning.",
    marking_notes: "One mark per correct biometric method, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a biometric authentication method?", options: ["Facial recognition", "Password entry", "Security token", "PIN code"], correctIndex: 0 },
      { marks: 1, description: "Which is another biometric authentication method?", options: ["Voice recognition", "Two-factor SMS code", "Smart card swipe", "Username and password"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Use an example to explain the effect of garbage-in-garbage-out (GIGO) in relation to data collection in wildlife tracking systems.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Example: incorrect coordinates or a misidentified animal species being captured. Effect: the location of the animal species will be inaccurate, wasting time to find the animals; or the resulting analysis will be flawed and decisions taken will be unreliable.",
    marking_notes: "One mark for a valid example of bad input data, one mark for the resulting effect.",
    steps: [
      { marks: 1, description: "Which is a valid example of 'garbage in' for wildlife tracking data?", options: ["Incorrect coordinates or a misidentified animal species being captured", "Data collected using an encrypted connection", "Data backed up daily to the cloud", "Data entered by a certified ranger using a validated form"], correctIndex: 0 },
      { marks: 1, description: "What effect does this bad input data have?", options: ["The resulting analysis will be flawed and decisions taken will be unreliable", "The system will automatically correct itself with no consequences", "Data storage costs will increase significantly", "The network bandwidth will be reduced"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.5.3",
    text: "In order to safeguard critical data, state TWO precautions that can be taken to prevent hardware failure.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: safe handling/keeping/storing of hardware devices; regular maintenance; surge protection/use of a UPS; controlling environmental factors; use tools to monitor drivers (health checks); upgrading hardware.",
    marking_notes: "One mark per correct precaution, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a valid precaution to prevent hardware failure?", options: ["Safe handling and storing of hardware devices", "Disabling all firewall software", "Ignoring manufacturer maintenance schedules", "Removing surge protectors to save space"], correctIndex: 0 },
      { marks: 1, description: "Which is another valid precaution to prevent hardware failure?", options: ["Surge protection/use of a UPS", "Sharing admin passwords among all staff", "Running hardware continuously with no monitoring", "Disabling automatic software updates"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.6.1",
    text: "Virtual reality (VR) is becoming a powerful tool for wildlife conservation and education. State TWO limitations of VR technology.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: high cost; requires powerful hardware specifications; possibility of motion sickness/health impact; promotes social isolation; physical space limitation; technical setup/training required; latency/lagging.",
    marking_notes: "One mark per correct limitation, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine limitation of VR technology?", options: ["High cost/requires powerful hardware specifications", "Cannot be used for any educational purpose", "Only works with wired keyboards", "Eliminates the need for internet access entirely"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine limitation of VR technology?", options: ["Possibility of motion sickness or negative health impact", "Improves eyesight over long-term use", "Requires no technical setup or training", "Has no impact on the physical space needed"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.6.2",
    text: "Discuss TWO advantages of using VR for conservation awareness.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: users can experience wildlife/ecosystems realistically/interactively; conservation education reaches a broader audience; decreases impact on wildlife ecosystems; safer environment (no exposure to dangerous animals); no need to travel/pay for real-life encounters; convenient (experience wildlife from home).",
    marking_notes: "One mark per correct advantage, any two of the memo's list; other correct answers related to the scenario are accepted.",
    steps: [
      { marks: 1, description: "Which is a genuine advantage of using VR for conservation awareness?", options: ["Users can experience wildlife/ecosystems realistically and interactively", "Requires visitors to travel to the reserve in person", "Increases direct human contact with dangerous animals", "Reduces the audience able to access conservation education"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine advantage of using VR for conservation awareness?", options: ["Decreases the impact on wildlife ecosystems since no physical visit is needed", "Requires expensive travel and accommodation", "Exposes users to real danger from wildlife", "Limits access to only people who can visit in person"], correctIndex: 0 },
    ],
  },

  // ============ SECTION C: COMMUNICATION AND NETWORK TECHNOLOGIES (25 marks) ============

  {
    number: "3", sub_number: "3.1",
    text: "A luxury lodge in the wildlife reserve wants to upgrade its networking infrastructure. Give TWO reasons why a client-server network will be a suitable network to be used at the lodge.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: centralised management; better control over authentication/encrypted storage of sensitive data; scalability; backups made on the server; less network congestion than peer-to-peer; suitable for a large number of devices; no need for powerful client devices; easier communication between users.",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine reason a client-server network suits the lodge?", options: ["Centralised management and better control over authentication/security", "Every device must store its own duplicate copy of all shared files", "It requires no server hardware at all", "It cannot support more than two devices"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine reason?", options: ["Scalability and less network congestion than peer-to-peer", "Guarantees zero cost for hardware and maintenance", "Removes the need for any backups", "Only works if all devices are the same brand"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "During a safari walk, the same messages that are received on the tour guide's cellphone are accessed on the guide's smartwatch. Identify the type of area network used.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "PAN/WPAN.",
    marking_notes: "Accept PAN or WPAN.",
    steps: [{ marks: 1, description: "Which type of area network is used when a cellphone and smartwatch share the same messages?", options: ["PAN (Personal Area Network)", "LAN (Local Area Network)", "MAN (Metropolitan Area Network)", "WAN (Wide Area Network)"], correctIndex: 0 }],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "The lodge connects to an international wildlife conservation database via the internet. Identify the type of area network used.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "WAN/GAN.",
    marking_notes: "Accept WAN or GAN.",
    steps: [{ marks: 1, description: "Which type of area network is used when connecting to an international database via the internet?", options: ["WAN (Wide Area Network)", "PAN (Personal Area Network)", "LAN (Local Area Network)", "HAN (Home Area Network)"], correctIndex: 0 }],
  },
  {
    number: "3", sub_number: "3.3",
    text: "The lodge's research centre shares large data files on wildlife with conservationists worldwide. Apart from saving time and improving efficiency, give TWO other reasons why file transfer protocol (FTP) should be used to share large files.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: transfers can be interrupted and resumed; offers remote access; cross-platform compatibility; allows transfer of large files/large numbers of files; transfers can be automated with scripts; no restriction on file size; directory structure preservation. (\"Reliable\" is not accepted.)",
    marking_notes: "One mark per correct reason, any two of the memo's list; do NOT accept \"reliable\".",
    steps: [
      { marks: 1, description: "Which is a genuine reason (other than saving time/efficiency) to use FTP for sharing large files?", options: ["Transfers can be interrupted and resumed", "FTP guarantees the file will never be corrupted", "FTP requires no internet connection at all", "FTP automatically translates the file's content into any language"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine reason?", options: ["Cross-platform compatibility between different operating systems", "FTP encrypts all data by default with no configuration needed", "FTP limits file size to 1MB for safety", "FTP only works between two computers on the same LAN"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "The image shows the network environment in the administrative office. Identify the device labelled 3.4.1 in the image.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Switch/Hub.",
    marking_notes: "Accept Switch or Hub.",
    steps: [{ marks: 1, description: "Which device is labelled 3.4.1 in the network diagram?", options: ["Switch/Hub", "Router", "Modem", "Firewall appliance"], correctIndex: 0 }],
    image_url: `${IMG}/3-4-network-diagram.png`,
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Identify the device labelled 3.4.2 in the image (see 3.4.1's diagram).",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Router/Modem.",
    marking_notes: "Accept Router or Modem.",
    steps: [{ marks: 1, description: "Which device is labelled 3.4.2 in the network diagram?", options: ["Router/Modem", "Switch/Hub", "Network Interface Card", "Access Point antenna"], correctIndex: 0 }],
    image_url: `${IMG}/3-4-network-diagram.png`,
  },
  {
    number: "3", sub_number: "3.5.1",
    text: "There is increased bandwidth usage at the lodge due to many guests streaming videos on the wireless network. Differentiate between range and bandwidth in wireless networks.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Range: the distance covered by the signal before weakening. Bandwidth: the amount of data that can be transmitted per time unit / speed of transmission.",
    marking_notes: "One mark for range, one mark for bandwidth.",
    steps: [
      { marks: 1, description: "What does 'range' mean in a wireless network?", options: ["The distance covered by the signal before it weakens", "The amount of data transmitted per time unit", "The number of devices that can connect at once", "The encryption strength of the signal"], correctIndex: 0 },
      { marks: 1, description: "What does 'bandwidth' mean in a wireless network?", options: ["The amount of data that can be transmitted per time unit", "The physical distance the signal can travel", "The number of access points installed", "The colour of the network cabling used"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.5.2",
    text: "Give TWO possible reasons why there may be streaming delays and more buffering challenges at the chalets than at the main building where a wired network is used.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: the bandwidth capacity of a wireless network is lower; more data/traffic in the chalets sharing the same network channel; some guests may be located further from the router; signal/obstacle interference or weather.",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine reason for more buffering at the wireless chalets than at the wired main building?", options: ["The bandwidth capacity of a wireless network is lower than a wired one", "Wireless networks always have unlimited bandwidth", "Wired networks cannot support video streaming at all", "Wireless signals travel faster than light through walls"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine reason?", options: ["Guests may be located further from the router, causing signal/weather interference", "The chalets have a dedicated fibre line unlike the main building", "Wireless routers use less electricity than switches", "The main building has no internet connection"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.6.1",
    text: "The lodge is upgrading its website from static to dynamic. Discuss TWO benefits of a dynamic website for the lodge's customers.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: personalised experience (customers can see bookings/tailored content); real-time information (prices/promotions updated instantly); online bookings (reserve directly on the website); interactive features (contact forms, reviews, feedback).",
    marking_notes: "One mark per correct benefit, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine benefit of a dynamic website for customers?", options: ["Personalised experience with content tailored to the customer", "Content never changes, so it looks the same to every visitor", "Requires customers to download software to view any page", "Removes the ability to make online bookings"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine benefit of a dynamic website for customers?", options: ["Real-time information such as prices and promotions updated instantly", "Guarantees the website never needs a server", "Static pages that load once and never update", "Removes the need for any interactive features"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.6.2",
    text: "The web designer has requested the appointment of a web author at the lodge. Name TWO tasks that will typically be allocated to the web author.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: creates text/images/photos/video/content; structures/formats the content; hyperlink and SEO management; updates and maintains content; collaborates with designers/authors/developers; publishes and shares accessible, functional content.",
    marking_notes: "One mark per correct task, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a task typically allocated to a web author?", options: ["Creates text/images/video content for the website", "Designs the physical network cabling for the office", "Repairs faulty hardware components", "Manages the company's payroll system"], correctIndex: 0 },
      { marks: 1, description: "Which is another task typically allocated to a web author?", options: ["Updates and maintains the website's content", "Configures the router's firewall rules", "Installs the operating system on staff laptops", "Handles the lodge's financial audits"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.7.1",
    text: "Invisible data collection refers to the automatic gathering of user information online, without the user's active awareness. State and explain a technique used in invisible data capturing.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any one technique and explanation, e.g. Cookies: small files stored in a browser that track websites visited, clicks and preferences; Location/digital tracking: uses IP address, GPS, Wi-Fi or mobile sensors to track location and movement; Device/browser fingerprinting: collects device/browser info to identify a user uniquely; Clickstream tracking: scripts that secretly record navigation, clicks and scrolling.",
    marking_notes: "One mark for naming/describing a real technique, one mark for a correct explanation of it.",
    steps: [
      { marks: 1, description: "Which is a real invisible-data-capturing technique?", options: ["Cookies", "A CAPTCHA verification", "A firewall rule", "A digital signature"], correctIndex: 0 },
      { marks: 1, description: "How does this technique typically work?", options: ["Small files stored in the browser track websites visited, clicks and preferences", "It physically scans the user's fingerprint on every visit", "It requires the user to fill in a form on every visit", "It blocks all tracking of any kind by design"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.7.2",
    text: "How will location-based data, used collectively with invisible data capturing, contribute to the safety of guests at the reserve?",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "For example: monitor guest locations to stop them entering dangerous/restricted areas or to assist if they get lost; quickly identify a guest's exact location during medical/security incidents for faster ranger response; provide automatic wildlife/weather/terrain warnings based on the guest's position; use geo-fencing and crowd-management data to guide safe movement; analyse behaviour patterns to prevent risks.",
    marking_notes: "One mark for evidence of using location-based/invisible data, one mark for the resulting safety benefit (or equivalent example combining both).",
    steps: [
      { marks: 1, description: "How can location-based data be used to help keep guests safe?", options: ["Monitor guest locations to stop them entering dangerous/restricted areas", "Sell guest location data to third-party advertisers", "Disable all guest mobile devices while on the reserve", "Prevent guests from using any mobile app on the reserve"], correctIndex: 0 },
      { marks: 1, description: "What safety benefit results from combining this with invisible data capturing?", options: ["Faster ranger response by quickly identifying a guest's exact location during an incident", "Guests can no longer be located at all during emergencies", "It removes the need for rangers to patrol the reserve", "It guarantees no wildlife will ever approach a guest"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.8.1",
    text: "The IT team wants to improve security when staff log into the reservation system remotely. Briefly explain the concept multi-factor authentication (MFA).",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Authentication requires two or more verification methods.",
    marking_notes: "Accept only the concept of two or more verification methods being required.",
    steps: [{ marks: 1, description: "What is multi-factor authentication (MFA)?", options: ["Authentication that requires two or more verification methods", "Authentication that requires only a username", "A method that disables all passwords", "A method that only checks the device's MAC address"], correctIndex: 0 }],
  },
  {
    number: "3", sub_number: "3.8.2",
    text: "Motivate why a one-time pin (OTP) is an effective mechanism for verifying staff logins.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any ONE of: the staff member receives the OTP on their personal device, not accessible by others; it's an extra layer of security even if the password is compromised; OTPs are time-sensitive/one-time use, reducing the risk of re-use.",
    marking_notes: "Accept any one of the memo's three motivations.",
    steps: [{ marks: 1, description: "Why is an OTP an effective mechanism for verifying staff logins?", options: ["It is received only on the staff member's own device, adding an extra layer of security", "It never expires, so it can be reused indefinitely", "It replaces the need for any login credentials at all", "It is the same for every staff member, simplifying login"], correctIndex: 0 }],
  },
  {
    number: "3", sub_number: "3.9.1",
    text: "The wildlife reserve is setting up motion-activated cameras whose footage must be sent to a research centre several kilometres away. Which transmission medium would be the most appropriate to transfer the footage?",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: fibre optic; radio/electromagnetic waves; satellite.",
    marking_notes: "Accept fibre optic, radio waves, or satellite.",
    steps: [{ marks: 1, description: "Which transmission medium is most appropriate to send camera footage several kilometres to the research centre?", options: ["Fibre optic", "Bluetooth", "Infrared", "Standard telephone landline (dial-up)"], correctIndex: 0 }],
  },
  {
    number: "3", sub_number: "3.9.2",
    text: "Give TWO reasons to justify your answer to Question 3.9.1.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Fibre optic: reliable over long distances, high bandwidth, not affected by weather/EMI. Radio waves: no need for physical cables, suitable for remote/difficult terrain. Satellite: suited for long distances, high-speed data transfer, cost-effective for long distances, reliable in emergencies.",
    marking_notes: "One mark per correct reason matching the medium chosen in 3.9.1, any two.",
    steps: [
      { marks: 1, description: "Which is a genuine reason fibre optic suits transferring footage several kilometres away?", options: ["Reliable over long distances with high bandwidth", "Cannot travel further than a few metres", "Is always cheaper than any wireless option regardless of distance", "Requires no cabling to be installed at all"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine reason?", options: ["Not affected by weather or electromagnetic interference (EMI)", "Cannot carry video data, only text", "Loses signal strength every few centimetres", "Only works during daylight hours"], correctIndex: 0 },
    ],
  },

  // ============ SECTION D: DATA AND INFORMATION MANAGEMENT (20 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "A table called tblAnimalSightings has been designed to save details of animals, rangers and sightings. The Experience field is currently a text data type. Give a reason why the data and data type of this field should be changed to integer.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: to be able to update the years' experience by incrementing it; to perform calculations/processing/sorting/queries; simplifies data validation; avoids data inconsistencies; avoids redundant data.",
    marking_notes: "Accept any one of the memo's list.",
    steps: [{ marks: 1, description: "Why should the Experience field's data type be changed from text to integer?", options: ["To allow the years of experience to be incremented and used in calculations", "To allow the field to store any character including symbols", "To reduce the size of the database file to zero", "To prevent the field from ever being updated"], correctIndex: 0 }],
    image_url: `${IMG}/4-1-tblanimalsightings.png`,
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "State and explain the anomaly that will occur by having the RangerContact and Experience fields in the tblAnimalSightings table.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE anomaly with explanation: Insert — a new sighting cannot be added without adding ranger details; Delete — deleting a sighting may result in losing ranger contact details; Update — when a ranger's contact number changes, all records of sightings by that ranger must be updated.",
    marking_notes: "One mark for naming the correct anomaly type (insert/delete/update), one mark for a correct explanation of it.",
    steps: [
      { marks: 1, description: "Which type of anomaly occurs from storing RangerContact and Experience in tblAnimalSightings?", options: ["Update anomaly", "Syntax anomaly", "Compilation anomaly", "Encryption anomaly"], correctIndex: 0 },
      { marks: 1, description: "How does this anomaly manifest?", options: ["When a ranger's contact number changes, all records of sightings by that ranger must be updated", "The database automatically deletes all data every time it is updated", "It causes the application to crash on every login", "It prevents any new sighting from ever being saved"], correctIndex: 0 },
    ],
    image_url: `${IMG}/4-1-tblanimalsightings.png`,
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "The tblAnimalSightings table has been split into three separate tables to support normalisation rules. Redraw the tblAnimals, tblRangers and tblSightings tables in your ANSWER BOOK, including the provided fields, and complete the diagram by filling in ALL the missing fields required for the tblSightings table (including the foreign key(s)) and showing the relationship(s) between the tables.",
    marks: 6, topicKey: "data-information-management", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Diagram correctly copied with table names and primary-key field names. tblSightings needs two foreign keys, RangerID and AnimalID, plus the fields SightingLocation, SightingDate and SightingTime. Relationships: 1-to-Many on AnimalID from tblAnimals to tblSightings, and 1-to-Many on RangerID from tblRangers to tblSightings.",
    marking_notes: "Marking points per the memo's six ticks: diagram copied correctly; foreign key RangerID; foreign key AnimalID; the three missing fields (SightingLocation, SightingDate, SightingTime); the AnimalID 1-to-Many relationship; the RangerID 1-to-Many relationship.",
    steps: [
      { marks: 1, description: "What are the three tables after normalisation, and what must each show?", options: ["tblAnimals, tblRangers and tblSightings, each with its own primary key field", "A single merged table called tblSightings only", "tblAnimals and tblRangers only, with no separate sightings table", "tblSightingsAnimals, tblSightingsRangers and tblSightingsData"], correctIndex: 0 },
      { marks: 1, description: "Which foreign key must be added to tblSightings to link it to tblRangers?", options: ["RangerID", "RangerName", "RangerContact", "Experience"], correctIndex: 0 },
      { marks: 1, description: "Which foreign key must be added to tblSightings to link it to tblAnimals?", options: ["AnimalID", "AnimalName", "AnimalSpecies", "AnimalHabitat"], correctIndex: 0 },
      { marks: 1, description: "Besides the two foreign keys, which fields must also be added to tblSightings?", options: ["SightingLocation, SightingDate and SightingTime", "RangerContact and Experience", "AnimalName and AnimalSpecies", "LodgeName and LodgeAddress"], correctIndex: 0 },
      { marks: 1, description: "What is the relationship type between tblAnimals and tblSightings (via AnimalID)?", options: ["One-to-Many (one animal can have many sightings)", "Many-to-Many", "One-to-One", "No relationship is needed"], correctIndex: 0 },
      { marks: 1, description: "What is the relationship type between tblRangers and tblSightings (via RangerID)?", options: ["One-to-Many (one ranger can log many sightings)", "Many-to-Many", "One-to-One", "No relationship is needed"], correctIndex: 0 },
    ],
    image_url: `${IMG}/4-1-3-tables-diagram.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "The rangers rely on databases to store vast amounts of data aimed at monitoring the movements of the 'Big 5' animals. Differentiate between currency and relevance as characteristics of data.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Currency refers to how up to date/timely the data is. Relevance refers to usefulness/applicability — whether the data is appropriate for a specific context or purpose.",
    marking_notes: "One mark for currency, one mark for relevance.",
    steps: [
      { marks: 1, description: "What does 'currency' mean as a characteristic of data?", options: ["How up to date/timely the data is", "How useful the data is for a specific purpose", "How securely the data is stored", "How large the dataset is"], correctIndex: 0 },
      { marks: 1, description: "What does 'relevance' mean as a characteristic of data?", options: ["Usefulness/applicability of the data for a specific context or purpose", "How recently the data was captured", "How many users can access the data at once", "How the data is encrypted"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Several wildlife reserves across the country use a common booking system. Visitors who have qualified for loyalty cards will receive discounts at certain lodges and national parks. Give TWO potential benefits for a lodge when implementing a guest loyalty card programme.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: track guest behaviour/data collection; targeted marketing; increased lodge revenue; strengthens guest relationships/personalisation/recognition; improves lodge services/saves time with booking; differentiates the lodge from competitors; determines which booking times/seasons are more popular.",
    marking_notes: "One mark per correct benefit, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine benefit for the lodge of a guest loyalty card programme?", options: ["Tracking guest behaviour/data for targeted marketing", "Guarantees the lodge never has to advertise again", "Removes the need to store any guest information", "Automatically increases room prices for all guests"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine benefit?", options: ["Strengthens guest relationships through personalisation and recognition", "Eliminates the need for a booking system", "Prevents guests from ever leaving negative reviews", "Guarantees 100% occupancy every night"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "The lodge does not have the capacity to fund a new proprietary DBMS. Identify TWO open-source DBMS software applications from this list: Microsoft SQL Server; MySQL; Oracle; Microsoft Access; PostgreSQL.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "MySQL and PostgreSQL.",
    marking_notes: "One mark each for MySQL and PostgreSQL; the other three (Microsoft SQL Server, Oracle, Microsoft Access) are proprietary and must not be credited.",
    steps: [
      { marks: 1, description: "Which of these is an open-source DBMS?", options: ["MySQL", "Microsoft SQL Server", "Oracle", "Microsoft Access"], correctIndex: 0 },
      { marks: 1, description: "Which of the remaining listed DBMS is also open-source?", options: ["PostgreSQL", "Microsoft SQL Server", "Oracle", "Microsoft Access"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.1a",
    text: "Define the concept: Data warehouse.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "A central database that stores large collections of historical data gathered from multiple sources.",
    marking_notes: "Any TWO of the memo's four concepts: central database; stores large collections; of historical data; gathered from multiple sources.",
    steps: [
      { marks: 1, description: "What is a data warehouse, in terms of what it stores?", options: ["A central database that stores large collections of data", "A temporary cache cleared every hour", "A single spreadsheet used by one department", "A physical warehouse for storing hardware"], correctIndex: 0 },
      { marks: 1, description: "What kind of data does a data warehouse hold, and from where?", options: ["Historical data gathered from multiple sources", "Only today's data from a single source", "Randomly generated test data", "Only image and video files"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.1b",
    text: "Define the concept: Data mining.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Finding patterns/trends in large datasets using algorithms, to make informed decisions.",
    marking_notes: "Any TWO of the memo's four concepts: find patterns/trends; in large datasets; using algorithms; to make informed decisions.",
    steps: [
      { marks: 1, description: "What does data mining do?", options: ["Finds patterns/trends in large datasets", "Deletes duplicate records from a database", "Encrypts sensitive data for storage", "Formats a hard drive for reuse"], correctIndex: 0 },
      { marks: 1, description: "How does data mining find these patterns, and why?", options: ["Using algorithms, to make informed decisions", "Using manual visual inspection of paper reports only", "Using a single hard-coded formula with no data", "By guessing randomly with no analysis"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Give ONE specific example of data mining related to wildlife conservation.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: identifying species that signal extinction by analysing sighting trends; finding locations where certain animals are commonly sighted; predicting migration routes from past patterns; predicting poaching hotspots; planning feeding during problem seasons; controlling tourism's influence on animals.",
    marking_notes: "Accept any one reasonable, specific example related to wildlife conservation.",
    steps: [{ marks: 1, description: "Which is a specific example of data mining related to wildlife conservation?", options: ["Predicting migration routes from past sighting patterns", "Formatting a hard drive for reuse", "Sending a marketing email to all lodge staff", "Printing a paper copy of the reservation calendar"], correctIndex: 0 }],
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
    steps: [
      { marks: 1, description: "Is 'iAnsw := iNum/5;' (assigning to an Integer variable) CORRECT or INCORRECT?", options: ["CORRECT", "INCORRECT"], correctIndex: 1 },
      { marks: 1, description: "Why?", options: ["The / operator performs real division, so the result cannot be assigned to an integer variable", "Integer variables cannot store any numeric value", "The variable iNum was never declared", "Division is not allowed in Delphi"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "State whether Line 8 — rAnsw := 15 MOD 3; — is CORRECT or INCORRECT, and give a reason.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Correct — the result of the MOD operation can be assigned to a real or integer variable, although the result of MOD is itself an integer value.",
    marking_notes: "One mark for \"correct\", one mark for the reason. No marks for CORRECT alone.",
    steps: [
      { marks: 1, description: "Is 'rAnsw := 15 MOD 3;' (assigning to a Real variable) CORRECT or INCORRECT?", options: ["CORRECT", "INCORRECT"], correctIndex: 0 },
      { marks: 1, description: "Why?", options: ["The result of MOD (an integer) can be assigned to a real (or integer) variable", "MOD can only be used with real numbers", "MOD always produces a real number", "Real variables cannot hold whole numbers"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2.3",
    text: "State whether Line 9 — iAnsw := rNum MOD 3; — is CORRECT or INCORRECT, and give a reason.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Incorrect — rNum must be an integer data type; the MOD operator can only be used on integer values.",
    marking_notes: "One mark for \"incorrect\", one mark for the reason (MOD requires integer operands, rNum is Real). No marks for INCORRECT alone.",
    steps: [
      { marks: 1, description: "Is 'iAnsw := rNum MOD 3;' (rNum is Real) CORRECT or INCORRECT?", options: ["CORRECT", "INCORRECT"], correctIndex: 1 },
      { marks: 1, description: "Why?", options: ["The MOD operator can only be used on integer values, but rNum is Real", "MOD cannot be used with the number 3", "iAnsw was declared as a Real, not an Integer", "MOD only works inside loops"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.3.1a",
    text: "A DateTimePicker component is used to select the date of the sighting in the correct format. Name ONE other form of verification that can be applied to the date of sighting selected.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any ONE of: check the date matches the actual sighting date; test that the date selected is not in the future; test that the date is realistic; use the system date; visual checks/double entry/cross-referencing.",
    marking_notes: "Accept any one of the memo's list.",
    steps: [{ marks: 1, description: "Apart from using a DateTimePicker, which is another valid form of verification for the date of sighting?", options: ["Test that the date selected is not in the future", "Test that the field accepts any text input", "Remove all validation to speed up entry", "Only allow numbers with no date format at all"], correctIndex: 0 }],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.3.1b",
    text: "Use the example of the date of sighting selected to illustrate the difference between valid and correct data in this scenario.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "Valid data: using the DateTimePicker ensures the format/range/data type of the date is correct. Correct data: the date of sighting selected must correspond/match the actual date the sighting happened.",
    marking_notes: "One mark for explaining valid data (correct format/range/type via the DateTimePicker), one mark for explaining correct data (matches the real sighting date).",
    steps: [
      { marks: 1, description: "What does 'valid' data mean for the date of sighting?", options: ["The DateTimePicker ensures the format/range/data type of the date is correct", "The date must exactly match when the sighting actually happened", "The date field can accept any text the user types", "The date is automatically deleted after entry"], correctIndex: 0 },
      { marks: 1, description: "What does 'correct' data mean for the date of sighting?", options: ["The date selected must correspond to the actual date the sighting happened", "The date must simply be in a valid calendar format", "The date must be today's date only", "The date must be entered in words rather than digits"], correctIndex: 0 },
    ],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "The possible locations in the reserve where a sighting can be registered are: Tshokwane, Flamingo Dam, Mopani Camp and Elephant Valley. Give the name of a suitable component that can be added to the interface to ensure that a valid location is selected by the user.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: combo box; list box; radio group.",
    marking_notes: "Accept combo box, list box, or radio group.",
    steps: [{ marks: 1, description: "Which component ensures a valid location is selected from a fixed set of options?", options: ["Combo box", "Text edit box (Edit)", "Memo box", "Label"], correctIndex: 0 }],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.3.3",
    text: "Design a UML diagram for a Sighting object using the information provided on the 'Big 5 - Animal sighting' interface. The diagram must include: five Sighting object attributes; a constructor method without parameters; two accessor methods; one mutator method that receives a parameter; private/public accessibility of all attributes and methods; and data types where necessary.",
    marks: 7, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "TSighting: - fAnimal: String; - fNumSighted: Integer; - fLocationSighted: String; - fDateSighted: TDate; - fTimeSighted: TTime; + Constructor create(); + getAnimal: String; + getNumSighted: Integer; + setNumSighted(numSighted: Integer). (Also accept the equivalent accessor/mutator methods for the other fields, e.g. getDateSighted, setLocationSighted, etc.)",
    marking_notes: "Marking points per the memo's seven ticks: heading TSighting; five correct attributes; correct data types on all attributes; parameterless constructor; an accessor method with correct data type; a mutator method with correct parameter and data type; correct private (attributes) / public (methods) indication.",
    steps: [
      { marks: 1, description: "What should the UML class heading be?", options: ["TSighting", "Sighting_Record", "TAnimalSighting_Class", "clsBig5Sighting"], correctIndex: 0 },
      { marks: 1, description: "Which set is the correct five attributes for the Sighting object?", options: ["Animal, NumSighted, LocationSighted, DateSighted, TimeSighted", "Animal, Ranger, Lodge, Location, Contact", "NumSighted, DateSighted, TimeSighted, Username, Password", "Animal, NumSighted, LocationSighted, RangerID, LodgeName"], correctIndex: 0 },
      { marks: 1, description: "What are the correct data types for these attributes?", options: ["String, Integer, String, TDate, TTime", "Integer, String, Integer, String, String", "Boolean, Boolean, Boolean, Boolean, Boolean", "Real, Real, Real, Real, Real"], correctIndex: 0 },
      { marks: 1, description: "What must the constructor method look like?", options: ["A parameterless Constructor create()", "A constructor that requires all five attributes as parameters", "A destructor Destroy()", "A private method with no return type"], correctIndex: 0 },
      { marks: 1, description: "Which is a correctly written accessor (get) method?", options: ["getAnimal: String", "setAnimal(sAnimal: String)", "Animal: String; (a public field)", "getAnimal(sAnimal: String)"], correctIndex: 0 },
      { marks: 1, description: "Which is a correctly written mutator (set) method?", options: ["setNumSighted(numSighted: Integer)", "getNumSighted: Integer", "NumSighted: Integer; (a public field)", "setNumSighted: Integer"], correctIndex: 0 },
      { marks: 1, description: "What is the correct accessibility for the attributes and methods?", options: ["Attributes private, methods public", "Attributes public, methods private", "Everything private", "Everything public"], correctIndex: 0 },
    ],
    image_url: `${IMG}/5-3-app-interface.png`,
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "A text file called BirdSpeciesSpotted.txt contains the number of bird species spotted by an unknown number of bird watchers over four days. Give ONE reason why a conditional loop will be a suitable loop to read the data from the text file.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: to accommodate an unknown number of bird watchers/lines in the text file / loop until end of file (EOF); lines can be added to or removed from the text file without changing the code.",
    marking_notes: "Accept either of the memo's two reasons.",
    steps: [{ marks: 1, description: "Why is a conditional loop suitable for reading the text file?", options: ["To accommodate an unknown number of bird watchers/lines in the text file", "To make the program run without any loop at all", "To guarantee the loop runs exactly once", "To avoid having to open the text file"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "The AssignFile() and Reset() procedures are used to open a text file for reading purposes. Which procedure is used to create a new text file following the AssignFile() procedure?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Remembering",
    model_answer: "Rewrite().",
    marking_notes: "Accept only Rewrite().",
    steps: [{ marks: 1, description: "Which procedure is used to create a new text file following AssignFile()?", options: ["Rewrite()", "Reset()", "Append()", "CloseFile()"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.4.3a",
    text: "The data from BirdSpeciesSpotted.txt must be saved into arrays: a one-dimensional array arrBirdWatcherNames for the names, and a parallel two-dimensional array arr2DSpotted for the number of species spotted per day. Give ONE reason why the names of the bird watchers should NOT be included as part of the two-dimensional array arr2DSpotted.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: the bird watcher's name is a String while the species-spotted count is Integer; the data types of all data in a two-dimensional array must be the same; the array needs to be declared as integer to allow calculations.",
    marking_notes: "Accept any one of the memo's three reasons.",
    steps: [{ marks: 1, description: "Why should the bird watchers' names NOT be included in the 2D array arr2DSpotted?", options: ["The names are String while the species-spotted counts are Integer, and a 2D array needs one consistent data type", "Names take up too much disk space to store anywhere", "Arrays in Delphi cannot store any text at all", "The array would become impossible to declare with any name field"], correctIndex: 0 }],
  },
  {
    number: "5", sub_number: "5.4.3b",
    text: "A global variable iNumBirdWatchers stores the number of lines read from the text file. Write an algorithm that can be used to determine the highest number of bird species spotted by each bird watcher over the four days, and populate column 5 of the two-dimensional array arr2DSpotted with these values.",
    marks: 8, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Loop Row from 1 to iNumBirdWatchers\n    Highest ← arr2DSpotted[Row, 1]\n    Loop Col from 2 to 4\n        If Highest < arr2DSpotted[Row, Col]\n            Highest ← arr2DSpotted[Row, Col]\n    arr2DSpotted[Row, 5] ← Highest",
    marking_notes: "Marking points per the memo's eight ticks, covering the outer loop bounds, initialising Highest, the inner loop bounds, the comparison, the correct array reference used in it, the reassignment inside the if, writing into column 5, and assigning Highest there.",
    steps: [
      { marks: 1, description: "What should the outer loop bounds be?", options: ["Row from 1 to iNumBirdWatchers", "Row from 0 to iNumBirdWatchers", "Row from 1 to 4", "Row from 1 to 5"], correctIndex: 0 },
      { marks: 1, description: "How should Highest be initialised for each row?", options: ["Highest ← arr2DSpotted[Row, 1]", "Highest ← 0", "Highest ← arr2DSpotted[1, Row]", "Highest ← iNumBirdWatchers"], correctIndex: 0 },
      { marks: 1, description: "What should the inner loop bounds be?", options: ["Col from 2 to 4", "Col from 1 to 4", "Col from 2 to 5", "Col from 1 to iNumBirdWatchers"], correctIndex: 0 },
      { marks: 1, description: "What condition should be tested inside the inner loop?", options: ["If Highest < arr2DSpotted[Row, Col]", "If Highest > arr2DSpotted[Row, Col]", "If Highest = arr2DSpotted[Row, Col]", "If arr2DSpotted[Row, Col] < 0"], correctIndex: 0 },
      { marks: 1, description: "Which array reference should be used in that comparison?", options: ["arr2DSpotted[Row, Col]", "arr2DSpotted[Col, Row]", "arr2DSpotted[Row, 5]", "arrBirdWatcherNames[Row]"], correctIndex: 0 },
      { marks: 1, description: "What should happen inside the If when the condition is true?", options: ["Highest ← arr2DSpotted[Row, Col]", "Highest ← Highest + 1", "arr2DSpotted[Row, Col] ← Highest", "Col ← Col + 1"], correctIndex: 0 },
      { marks: 1, description: "After the inner loop ends, where should the result be written?", options: ["Into column 5 of the array, arr2DSpotted[Row, 5]", "Into column 1 of the array, arr2DSpotted[Row, 1]", "Into a new array called arrHighest", "Nowhere — the result is only displayed"], correctIndex: 0 },
      { marks: 1, description: "What value should be assigned into arr2DSpotted[Row, 5]?", options: ["Highest", "iNumBirdWatchers", "Row", "Col"], correctIndex: 0 },
    ],
  },

  // ============ SECTION F: INTEGRATED SCENARIO (30 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "IPTV is provided as a service for guests at the lodge. Expand the abbreviation IPTV.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Internet Protocol Television.",
    marking_notes: "Accept only \"Internet Protocol Television\".",
    steps: [{ marks: 1, description: "What does the abbreviation IPTV stand for?", options: ["Internet Protocol Television", "Interactive Personal TV Viewer", "Integrated Public Transmission Video", "Internal Program Transfer Video"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "State TWO challenges that are generally experienced by IPTV providers.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: high bandwidth/network limitations (buffering, latency, packet loss); licensing and legal challenges; technical/compatibility issues (device compatibility, scaling); high operating costs; cybersecurity threats; regional restrictions.",
    marking_notes: "One mark per correct challenge, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine challenge for IPTV providers?", options: ["High bandwidth/network limitations (buffering, latency, packet loss)", "Guaranteed unlimited bandwidth at no cost", "No licensing requirements of any kind", "Complete immunity to cybersecurity threats"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine challenge?", options: ["Licensing and legal challenges", "Zero operating costs", "No compatibility issues across devices", "No regional broadcasting restrictions"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "Compression technologies play a vital role in the transmission of multimedia data. Explain the relationship between the video quality and the speed of delivery of compressed video data.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "There is an inverse relationship: the higher the quality, the lower the speed of delivery (and vice versa).",
    marking_notes: "Accept either direction of the inverse relationship.",
    steps: [{ marks: 2, description: "What is the relationship between video quality and speed of delivery of compressed video data?", options: ["The higher the video quality, the lower the speed of delivery (an inverse relationship)", "The higher the video quality, the higher the speed of delivery", "Quality and delivery speed are unrelated", "The lower the video quality, the lower the speed of delivery"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "The e-mail system at the lodge was recently targeted by cyber gangs. Explain what social engineering is.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "The process of manipulating/tricking a person to give out their personal details.",
    marking_notes: "One mark for manipulating/tricking a person, one mark for the goal of obtaining personal details.",
    steps: [
      { marks: 1, description: "What does social engineering involve doing to a person?", options: ["Manipulating/tricking a person", "Physically breaking into a server room", "Installing a virus via a USB drive", "Intercepting network traffic with a sniffer"], correctIndex: 0 },
      { marks: 1, description: "What is the goal of social engineering?", options: ["To get the person to give out their personal details", "To slow down the victim's internet connection", "To permanently delete the victim's files", "To increase the victim's storage quota"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "State TWO ways by which users can identify phishing e-mails.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: suspicious sender address; generic greetings (\"Dear Customer\"); urgent or threatening language; suspicious links or attachments; poor spelling or grammar; too-good-to-be-true offers; requests for personal information.",
    marking_notes: "One mark per correct identifying sign, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine sign of a phishing e-mail?", options: ["A suspicious/unusual sender address", "A properly formatted company letterhead", "An email sent from a colleague's verified internal address", "Correct spelling and grammar throughout"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine sign of a phishing e-mail?", options: ["Urgent or threatening language pressuring quick action", "A calm, no-pressure tone with no links", "An email with no attachments or links at all", "An email addressed to you by your correct first name only"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.2.3",
    text: "The IT team requested the appointment of a digital forensic investigator. Explain the task of a digital forensic investigator.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "A digital forensic investigator analyses/identifies digital evidence from computers, networks and other devices to uncover facts about cybercrimes/data breaches/other digital incidents.",
    marking_notes: "One mark for analysing/identifying digital evidence, one mark for the purpose (uncovering facts about cybercrimes/breaches/incidents).",
    steps: [
      { marks: 1, description: "What does a digital forensic investigator do with digital evidence?", options: ["Analyses/identifies digital evidence from computers, networks and devices", "Deletes all evidence to protect user privacy", "Writes new application software from scratch", "Repairs broken hardware components"], correctIndex: 0 },
      { marks: 1, description: "Why do they do this?", options: ["To uncover facts about cybercrimes/data breaches/digital incidents", "To increase the company's marketing reach", "To back up the company's financial records", "To design the company's website"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "Researchers will be provided with a security token when using an online booking system to manage their accommodation. Describe how a security token works.",
    marks: 3, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "After successful authentication of a user, a security token is generated and sent to the user; the user stores the token and uses it for every subsequent request; the server validates the token by checking the expiry date or verifying a signature.",
    marking_notes: "Any THREE of the memo's four concepts: successful authentication of user; token generated and sent to user; token used/stored for subsequent requests; server validates the token.",
    steps: [
      { marks: 1, description: "When is a security token generated?", options: ["After successful authentication of the user", "Before the user even logs in", "Only when the server restarts", "Randomly at fixed time intervals regardless of login"], correctIndex: 0 },
      { marks: 1, description: "How is the token then used?", options: ["The user stores it and uses it for every subsequent request", "It is discarded immediately after being generated", "It is emailed to the user's friends", "It replaces the need for a username entirely"], correctIndex: 0 },
      { marks: 1, description: "How does the server confirm the token is still valid?", options: ["It validates the token by checking its expiry date or verifying a signature", "It ignores the token completely", "It asks the user to retype their password every time", "It compares the token to a list of banned words"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Explain how the use of SSL will improve website security.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "SSL provides encrypted data transmission between the website and the guest, preventing unauthorised access.",
    marking_notes: "One mark for encrypted transmission between website and user, one mark for preventing unauthorised access.",
    steps: [
      { marks: 1, description: "What does SSL provide between the website and the guest?", options: ["Encrypted data transmission", "Faster page-loading speed only", "Free web hosting", "Unlimited storage space"], correctIndex: 0 },
      { marks: 1, description: "What does this achieve?", options: ["Prevents unauthorised access to the data in transit", "Guarantees the website never goes offline", "Removes the need for a username and password", "Automatically translates the website into other languages"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "The lodge wants its website, 'Big 5 Safaris in South Africa', to appear at the top of search engine results to maximise the use of Web 3.0 capabilities. Suggest TWO techniques that may be used to enhance search engine optimisation to improve the website's visibility.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: use relevant keywords; high quality content; webpage optimisation (metatags, headers, image texts); secure website (HTTPS); mobile friendly design; fast page loading times; social media integration; regular updates. (Paying a search engine/for marketing is NOT accepted as SEO.)",
    marking_notes: "One mark per correct technique, any two of the memo's list; do not accept paying for search ranking or marketing.",
    steps: [
      { marks: 1, description: "Which is a genuine SEO technique?", options: ["Using relevant keywords and high-quality content", "Paying the search engine directly to guarantee top ranking", "Hiding text in the same colour as the background", "Copying content from other websites word-for-word"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine SEO technique?", options: ["A secure website (HTTPS) and mobile-friendly design", "Slower page loading to appear more 'premium'", "Removing all images to reduce SEO relevance", "Blocking search engines from indexing the site"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "Is the URL https://example.com/services?category=big5&sessionid=221 an example of Web 1.0 or Web 3.0?",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Web 3.0.",
    marking_notes: "Accept only Web 3.0.",
    steps: [{ marks: 1, description: "Is https://example.com/services?category=big5&sessionid=221 an example of Web 1.0 or Web 3.0?", options: ["Web 3.0", "Web 1.0", "Web 2.0", "Web 0.5"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.4.3",
    text: "Discuss how a semantic search could improve the accuracy of search results.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: semantic search focuses on meaning rather than keywords; uses metadata (data that defines and describes the characteristics of other data); uses Natural Language Processing (NLP).",
    marking_notes: "One mark per correct concept, any two of the memo's list.",
    steps: [
      { marks: 1, description: "What does semantic search focus on?", options: ["Meaning rather than just keywords", "Only the exact keywords typed, ignoring context", "The number of times a page has been shared", "The colour scheme of the website"], correctIndex: 0 },
      { marks: 1, description: "What technology does semantic search commonly use?", options: ["Natural Language Processing (NLP) and metadata", "A simple keyword-frequency count only", "Manual review by a human editor for every search", "A random selection algorithm"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.4.4",
    text: "Briefly explain what the characteristic of a mediated search method is.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any method that addresses the need for human/system involvement to refine or filter results.",
    marking_notes: "Accept the core concept of human/system involvement refining or filtering search results.",
    steps: [{ marks: 1, description: "What is the characteristic of a mediated search method?", options: ["Human/system involvement to refine or filter search results", "A search that runs entirely without any human or system input", "A search restricted to one website only", "A search that ignores all filters"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.5",
    text: "Researchers use a mobile app that allows them to view additional information about animals observed, while looking through the cameras of their mobile devices. Identify the type of technology that is used by this app.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Augmented Reality / AR.",
    marking_notes: "Accept Augmented Reality or AR.",
    steps: [{ marks: 1, description: "What type of technology lets a mobile app overlay information onto a live camera view of an animal?", options: ["Augmented Reality (AR)", "Virtual Reality (VR)", "Mixed hologram projection", "3D printing"], correctIndex: 0 }],
  },
  {
    number: "6", sub_number: "6.6.1",
    text: "The incident where poisoning of an elephant by poachers led to the poisoning of many vultures was discussed at a strategic planning session. Many of the poisoned vultures had active RFID tags. Differentiate between a passive and an active RFID tag, by referring to the power source of each.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "An active tag includes its own battery/power source. A passive tag receives power from the reader's antennae (has no power source of its own).",
    marking_notes: "One mark for active (has its own battery), one mark for passive (powered by the reader's antenna).",
    steps: [
      { marks: 1, description: "What powers an active RFID tag?", options: ["Its own battery/power source", "The reader's antenna only", "Solar panels built into the tag", "It requires no power at all"], correctIndex: 0 },
      { marks: 1, description: "What powers a passive RFID tag?", options: ["It receives power from the reader's antenna, with no power source of its own", "Its own internal battery", "A wired connection to the reader", "A separate solar cell"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.6.2",
    text: "Explain how RFID works and how rangers were able to locate the poisoned birds in time.",
    marks: 3, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "RFID uses radio waves to read a unique identifier/tag, to pinpoint the beacon/location of the bird using GPS capabilities.",
    marking_notes: "Three concepts, one mark each: uses radio waves; reads a unique identifier/tag; pinpoints the bird's location/beacon using GPS.",
    steps: [
      { marks: 1, description: "What does RFID use to read a tag?", options: ["Radio waves", "Sound waves", "Infrared light", "Visible light"], correctIndex: 0 },
      { marks: 1, description: "What does RFID read from the tag?", options: ["A unique identifier/tag", "The animal's exact weight", "The animal's medical history", "The battery percentage only"], correctIndex: 0 },
      { marks: 1, description: "How were rangers able to locate the poisoned birds in time?", options: ["By pinpointing the beacon/location of the bird using GPS capabilities", "By waiting for the bird to return to a feeding station", "By randomly searching the entire reserve", "By asking tourists if they had seen the birds"], correctIndex: 0 },
    ],
  },
  {
    number: "6", sub_number: "6.7",
    text: "The IT team suggested the implementation of distributed computing at the research centre. Motivate this suggestion by giving TWO reasons why distributed computing would benefit research projects.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO of: researchers pool computing power/storage they would not have individually (shared resources); tasks run in parallel on multiple devices, speeding up calculations (faster processing); more devices can be added easily as needs grow (scalability); if one device fails, others continue (high reliability); lower system requirements/cost (cost-effective); researchers can access shared data/resources from different locations (geographic access).",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a genuine benefit of distributed computing for research projects?", options: ["Researchers pool computing power/storage they would not have individually", "It requires every researcher to buy an identical expensive supercomputer", "It guarantees no device can ever fail", "It removes the need for any network connection"], correctIndex: 0 },
      { marks: 1, description: "Which is another genuine benefit?", options: ["Tasks run in parallel on multiple devices, speeding up calculations", "It reduces the number of researchers who can access the data", "It only works if all devices are shut down", "It prevents any device from being added later"], correctIndex: 0 },
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
