// Real DBE past paper: Information Technology P2, November 2021, National
// (English). Source: official DBE question paper + marking guidelines, fetched
// from stanmorephysics.com (source_url below points at the combined QP+memo
// PDF). QP is pages 1-16 (16 question pages, per the cover page); page 17 is
// the marking-guidelines title page; pages 18-31 are the memo (15 pages per
// its own cover). Confirmed by reading the extracted text of every page.
//
// Paper structure: SIX compulsory sections, 150 marks, 3 hours (cover page:
// MARKS 150, TIME 3 hours), cross-checked against each section's own TOTAL
// line and the memo's totals:
//   SECTION A: Short Questions (Q1)                                 15 marks
//   SECTION B: System Technologies (Q2)                             25 marks
//   SECTION C: Communications and Network Technologies (Q3)         30 marks
//   SECTION D: Data and Information Management (Q4)                 20 marks
//   SECTION E: Solution Development (Q5)                            20 marks
//   SECTION F: Integrated Scenario (Q6)                             40 marks
//                                                          GRAND TOTAL: 150
//
// Subject/cognitive levels/topics are identical to the Nov 2025 IT P2 file.
// Every question is mapped to the one real CAPS topic it belongs to
// (Section A and F are mixed-topic, mapped sub-question by sub-question).
//
// Grading: ALL questions use the stepped-MCQ pattern (`steps`); NO question
// uses `marking_points`. Conventions (same as the 2025 file):
//   - one step per mark-earning point; 4 plausible options (distractors are
//     realistic Grade 12 errors, never another memo-accepted answer);
//   - "state/give/name TWO ..." questions = two single-mark steps;
//   - TRUE/FALSE items: a two-option step (Q5.1 are the whole question);
//   - Section A 1.2 (matching to a Column B list of 20 terms, A-T) is shown as
//     4-option MCQ of terms with the real term from the memo;
//   - 4.3 (draw an ERD), 5.2.2 (rewrite swap algorithm), 5.3.2 (complete a
//     Delphi if-statement) are broken into one MCQ step per gradable element.
// The correct option position is rotated (computed by the `mc` helper) so the
// right answer is not always first.
//
// Images (cropped from 220dpi page renders into
// public/question-images/it-2021-p2/):
//   - 5-3-3-dice-throws.png (Q5.3.3): the A-D dice-throw table the question
//     asks about.
//   - 6-11-folder-permissions.png (Q6.11): the shared folder Security
//     permissions dialog.
// The tblPublishers / tblMagazines definitions (Q4) and the Magazine UML class
// (Q5.4) are plain text and are reproduced in the question text instead.
//
// FLAGS for review (odd/loose memo items, transcribed faithfully):
//   - FLAG 2.1.1: memo says "Two marks for editable (implies accessible); one
//     mark accessible/view/available". Modelled as two 1-mark steps
//     (viewable source, then editable) so a student who picks both gets 2.
//   - FLAG 3.4.1(b)/others: memo lists alternative acceptable answers; the
//     one primary answer is used as the correct option.
//   - FLAG 4.3: the ERD answer is a diagram (Publisher - Publishes - Magazine,
//     one-to-many). Memo accepts any acceptable notation/verb; split into
//     entities / relationship type / action verb steps.
//   - FLAG 4.8: memo gives two phrasings ("decrease the size and increase the
//     speed" OR "increasing the size of the warehouse decreases the speed");
//     the first is used.
//   - FLAG 5.1.3: the printed question says the value 23 would be displayed
//     for arrNumbers[2] + arrNumbers[3]; the memo answer is FALSE (2 + 3 = 5).
//     Transcribed as is.
//   - FLAG 5.2.1/5.2.2: the pseudocode assignment arrows are lost in the text
//     layer (rendered as blanks); the text here restores them as "<-" (the
//     memo's Temp <- A; A <- B; B <- Temp confirms the intent).
//   - FLAG 6.1.1: memo's list of "scripting languages" includes HTML 5; the
//     option used is PHP, and no distractor is a memo-accepted example.
//   - FLAG 5.3.3: memo adds rules for multiple-answer lists (not applicable
//     to MCQ); correct answer is B (3,3,3: neither rule fires).
//   - The question paper's Section A intro says answers 1.1.1-1.1.5 and
//     1.2.1-1.2.10; the instruction page lists Section A as 15 marks, all
//     consistent with the memo.

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
  year: 2021,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/08/NSC-Information-Technology-Grade-12-November-2021-P2-and-Memo.pdf" as string | null,
};

// The 2025 IT file already carries Information Technology's real exam dates.
export const examSchedule: {
  paperNumber: string;
  examType: "prelim" | "final";
  examDate: string;
  startTime: string;
  durationMinutes: number;
}[] = [];

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

const IMG = "/question-images/it-2021-p2";

// Builds one 4-option MCQ step, rotating the position of the correct option.
let rot = 0;
function mc(marks: number, description: string, correct: string, wrong: [string, string, string]): MarkingPointStep {
  const pos = rot++ % 4;
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

// TRUE/FALSE step (two options).
function tf(marks: number, description: string, answer: boolean): MarkingPointStep {
  return { marks, description, options: ["TRUE", "FALSE"], correctIndex: answer ? 0 : 1 };
}

const SD = "solution-development";
const ST = "systems-technologies";
const CN = "communication-network-technologies";
const DM = "data-information-management";
const SI = "social-implications";

export const questions: QuestionSeed[] = [
  // ============ SECTION A: SHORT QUESTIONS (15 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "Software that translates programming instructions written in a high-level language into an executable file is called a …",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "A — compiler.", marking_notes: "Accept only A.",
    steps: [mc(1, "Which software translates high-level source code into an executable file?", "compiler", ["assembler", "driver", "interpreter"])],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Which data type for variable x in the following expression is CORRECT?\n\nx := 13 mod 3 = 0;",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "C — Boolean (13 mod 3 = 1, so the comparison 1 = 0 gives FALSE).", marking_notes: "Accept only C.",
    steps: [mc(1, "Which data type should x be?", "Boolean", ["Integer", "Real", "Char"])],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "An update to correct a specific bug in software is called a …",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "B — patch.", marking_notes: "Accept only B.",
    steps: [mc(1, "What is an update that corrects a specific bug called?", "patch", ["purge", "backup", "rollback"])],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "… refers to the simulation of human thinking in machines that are programmed to think like humans and mimic their actions.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "C — Artificial intelligence.", marking_notes: "Accept only C.",
    steps: [mc(1, "Which term refers to machines programmed to think like humans and mimic their actions?", "Artificial intelligence", ["A simulator", "A learning algorithm", "Human-computer interaction"])],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "What value will be displayed?\n\niCount <- 9\nWhile iCount < 10 do\n  iCount <- iCount + 1\nEnd While\nDisplay iCount",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "B — 10 (the loop runs once: 9 < 10, iCount becomes 10, then 10 < 10 is false).", marking_notes: "Accept only B.",
    steps: [mc(1, "What value will be displayed?", "10", ["9", "11", "Nothing will be displayed"])],
  },
  {
    number: "1", sub_number: "1.2.1",
    text: "Choose the term that matches the description: Used to help detect errors in manually entered data, such as bank account numbers.",
    marks: 1, topicKey: DM, cognitiveLevelName: "Remembering",
    model_answer: "F — check digit.", marking_notes: "Accept only F (check digit).",
    steps: [mc(1, "Which term describes a means of detecting errors in manually entered data such as bank account numbers?", "Check digit", ["Record locking", "Edit box", "Information overload"])],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Choose the term that matches the description: A peer-to-peer protocol used to share large files over the internet.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "I — BitTorrent.", marking_notes: "Accept only I (BitTorrent).",
    steps: [mc(1, "Which term describes a peer-to-peer protocol used to share large files over the internet?", "BitTorrent", ["SEO", "RFID", "Virtual reality"])],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Choose the term that matches the description: Storage space used by the operating system when there is insufficient RAM.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "G — virtual memory.", marking_notes: "Accept only G (virtual memory).",
    steps: [mc(1, "Which term describes storage space the operating system uses when there is insufficient RAM?", "Virtual memory", ["CMOS", "ROM", "IRQ"])],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Choose the term that matches the description: A component that is best suited to display the content of a two-dimensional array with multiple rows and columns.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "J — string-grid.", marking_notes: "Accept only J (string-grid).",
    steps: [mc(1, "Which component best displays a two-dimensional array of rows and columns?", "String-grid", ["Edit box", "Spin edit", "Rich edit"])],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "Choose the term that matches the description: An error that causes a break or termination in the running of a program.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "M — runtime error.", marking_notes: "Accept only M (runtime error).",
    steps: [mc(1, "Which term describes an error that terminates the running of a program?", "Runtime error", ["Logical error", "Syntax error", "Rollback"])],
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "Choose the term that matches the description: Data capturing technique that stores more data and is more interactive than conventional barcode systems.",
    marks: 1, topicKey: DM, cognitiveLevelName: "Remembering",
    model_answer: "N — RFID.", marking_notes: "Accept only N (RFID).",
    steps: [mc(1, "Which data capturing technique stores more data and is more interactive than conventional barcodes?", "RFID", ["Check digit", "Virtual reality", "Research"])],
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "Choose the term that matches the description: When a record in a database is open, either for editing or for inserting, the record is flagged as 'in use'.",
    marks: 1, topicKey: DM, cognitiveLevelName: "Remembering",
    model_answer: "P — record locking.", marking_notes: "Accept only P (record locking).",
    steps: [mc(1, "Which term describes flagging an open record as 'in use'?", "Record locking", ["Rollback", "Check digit", "Identity theft"])],
  },
  {
    number: "1", sub_number: "1.2.8",
    text: "Choose the term that matches the description: People are manipulated to divulge confidential information.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "A — social engineering.", marking_notes: "Accept only A (social engineering).",
    steps: [mc(1, "Which term describes manipulating people into divulging confidential information?", "Social engineering", ["Identity theft", "Information overload", "SEO"])],
  },
  {
    number: "1", sub_number: "1.2.9",
    text: "Choose the term that matches the description: Part of the memory that stores user preferences for the boot-up sequence.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "B — CMOS.", marking_notes: "Accept only B (CMOS).",
    steps: [mc(1, "Which part of the memory stores user preferences for the boot-up sequence?", "CMOS", ["ROM", "IRQ", "Virtual memory"])],
  },
  {
    number: "1", sub_number: "1.2.10",
    text: "Choose the term that matches the description: Providing large amounts of data that may leave the user confused and unable to make decisions.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "D — information overload.", marking_notes: "Accept only D (information overload).",
    steps: [mc(1, "Which term describes receiving so much data that the user is confused and cannot decide?", "Information overload", ["Identity theft", "Social engineering", "Research"])],
  },

  // ============ SECTION B: SYSTEM TECHNOLOGIES (25 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "Journalists are issued with laptops when they start working at a magazine publishing company. The company only uses free open-source software (FOSS). Explain the concept open source in the context of FOSS.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "The source code of the software is available/accessible to view and is editable.",
    marking_notes: "Two marks for editable (implies accessible); one mark for accessible/view/available. FLAG: modelled as two 1-mark steps.",
    steps: [
      mc(1, "What is available to the user with open-source software?", "The source code can be viewed (it is accessible/available)", ["Only the compiled executable file", "Only the installation manual", "Only a limited trial version of the program"]),
      mc(1, "What may users also do with it?", "Edit/modify the source code", ["Resell it as their own copyrighted product", "Use it only on one registered computer", "Run it only after paying a licence fee"]),
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Give ONE example of a free operating system the company could install on a laptop.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: Linux (Red Hat, Ubuntu); Chrome OS.", marking_notes: "Accept any one of Linux/Red Hat/Ubuntu/Chrome OS.",
    steps: [mc(1, "Which is a free operating system?", "Ubuntu (Linux)", ["Windows 10", "macOS", "iOS"])],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "State TWO disadvantages of using free open-source software.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: lack of formal support; no one to hold accountable for errors; possible bugs/unstable versions/malware; different versions; not regularly updated.",
    marking_notes: "One mark per correct disadvantage.",
    steps: [
      mc(1, "Which is a disadvantage of FOSS?", "Lack of formal support", ["It always costs more than commercial software", "It can only run on one type of computer", "The source code can never be changed"]),
      mc(1, "Which is another disadvantage of FOSS?", "Possible bugs/unstable versions", ["It cannot be installed on a laptop", "It requires a new licence fee every month", "It can never be updated by anyone"]),
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "The laptops are equipped with either an HDD or an SSD. Users of laptops equipped with HDDs are advised to defragment the HDD regularly. Briefly explain what defragmentation is.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Defragmentation rearranges files that are fragmented/scattered on the HDD disc.",
    marking_notes: "One mark for rearranging, one for fragmented/scattered files on the disc.",
    steps: [
      mc(1, "What does defragmentation do to files?", "Rearranges them", ["Deletes unused files", "Compresses them into a zip archive", "Copies them to a backup drive"]),
      mc(1, "Which files does it rearrange?", "Files that are fragmented/scattered across the HDD", ["Files that contain viruses", "Files that are older than one year", "Files stored in RAM"]),
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Write out the abbreviation SSD in full.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Solid State Drive.", marking_notes: "Accept only Solid State Drive.",
    steps: [mc(1, "What does SSD stand for?", "Solid State Drive", ["Serial Storage Disk", "Super Speed Drive", "System Storage Device"])],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Explain why an SSD accesses the data faster than an HDD.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO: an SSD is electronic; no moving/mechanical parts; no increased latency from read/write heads having to find the correct sectors/tracks.",
    marking_notes: "One mark per correct reason, any two.",
    steps: [
      mc(1, "Which is a reason an SSD is faster?", "It is electronic", ["It spins faster than an HDD", "It has a larger cache of magnetic platters", "It always stores less data"]),
      mc(1, "Which is another reason?", "No moving/mechanical parts, so no delay while read/write heads find sectors/tracks", ["It uses more read/write heads", "It is always connected through the network", "It is cooled by a larger fan"]),
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "The journalists can access their data remotely using virtualisation or Software as a Service (SaaS). Define the term virtualisation.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Creating an entity (virtual machine) that exists only in software / a machine running a guest OS on a host machine's hardware.",
    marking_notes: "Accept either memo definition.",
    steps: [mc(1, "What is virtualisation?", "Creating a virtual machine that only exists in software and runs on the host's hardware", ["Connecting several computers into one physical supercomputer", "Storing files on an external hard drive", "Converting a computer's hardware to run faster than normal"])],
  },
  {
    number: "2", sub_number: "2.3.2a",
    text: "Office365 is an example of SaaS. Except for remote data access, state TWO benefits of using SaaS.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: minimal setup/no installation; uses less space/resources on your machine; pay a licence fee instead of buying/minimal initial cost; automatic updates; new features regularly added; ubiquity; easy collaboration; scalability.",
    marking_notes: "One mark per correct benefit, any two (remote access excluded).",
    steps: [
      mc(1, "Which is a benefit of SaaS?", "Minimal setup; no need to install the software on your machine", ["Works without any internet connection", "You must buy the software outright", "You must manually install every update"]),
      mc(1, "Which is another benefit of SaaS?", "Software is updated automatically in the cloud", ["It uses more space on your machine", "Only one person can use a document at a time", "It needs expensive hardware at each user's desk"]),
    ],
  },
  {
    number: "2", sub_number: "2.3.2b",
    text: "Describe how the license model of SaaS works.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "You pay a subscription fee and gain access to the software / use of the service.",
    marking_notes: "One mark for subscription fee, one for gaining access/use of the service.",
    steps: [
      mc(1, "What does the user pay?", "A subscription fee", ["A single once-off purchase price for ownership", "Nothing, as it is always free", "A fine for each update"]),
      mc(1, "What does the user get in return?", "Access to the software/use of the service", ["Ownership of the source code", "A permanent copy installed on their own server", "The right to resell the software"]),
    ],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "An incremental backup strategy has been implemented to safeguard data. Explain how an incremental backup strategy works.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "A full backup is made initially and, at set intervals, all the changes made to the data are backed up.",
    marking_notes: "One mark for the initial full backup, one for backing up only the changes at intervals.",
    steps: [
      mc(1, "What is done first in an incremental backup strategy?", "A full backup is made", ["Only the newest file is copied", "All data is deleted from the system", "A backup of only the operating system is made"]),
      mc(1, "What is backed up afterwards at set intervals?", "Only the changes made to the data since the previous backup", ["A complete copy of all data every time", "Only the files the user selects manually", "Nothing, since the first backup is kept forever"]),
    ],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "The company considers installing biometric readers on all the laptops. How would a biometric reader help safeguard the data on a laptop?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Prevents unauthorised access (or an acceptable explanation).", marking_notes: "Accept prevents unauthorised access.",
    steps: [mc(1, "How does a biometric reader safeguard the data?", "It prevents unauthorised access to the laptop", ["It backs up the data automatically", "It protects the laptop from power surges", "It speeds up access to files"])],
  },
  {
    number: "2", sub_number: "2.5.1",
    text: "Power outages and power surges are often experienced in rural areas where journalists work. What device can be used to ensure that journalists are not affected by unexpected power outages?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: UPS / power bank; inverter with battery / generator / solar power; a device with a built-in battery.",
    marking_notes: "Accept any one.",
    steps: [mc(1, "Which device keeps journalists working during a power outage?", "A UPS (Uninterruptible Power Supply)", ["A surge protector", "A voltage meter", "A line-interactive router"])],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "If the USB ports of a laptop are damaged due to a power surge, how could a user get his/her peripheral devices to connect to the laptop?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: Wi-Fi/wirelessly/Bluetooth; LAN/network cable/wired connection (also accept HDMI/examples of cables).",
    marking_notes: "Accept any one.",
    steps: [mc(1, "How can peripherals still be connected to the laptop?", "Wirelessly, e.g. using Bluetooth or Wi-Fi", ["By replacing the laptop's RAM", "By formatting the hard drive", "By defragmenting the disk"])],
  },
  {
    number: "2", sub_number: "2.6.1",
    text: "The journalists use their laptops for word processing, research and to upload articles to the company's electronic database only. Would you classify these journalists as power users or SOHO users?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Applying and Analysing",
    model_answer: "SOHO.", marking_notes: "Accept only SOHO.",
    steps: [{ marks: 1, description: "Are these journalists power users or SOHO users?", options: ["Power users", "SOHO users"], correctIndex: 1 }],
  },
  {
    number: "2", sub_number: "2.6.2",
    text: "Explain how multithreading is applied in a word processor.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "More than one process runs at the same time, e.g. the word processor can type, spell check and auto save at the same time.",
    marking_notes: "One mark for more than one process at the same time, one for a suitable word-processor example.",
    steps: [
      mc(1, "What does multithreading allow?", "More than one process to run at the same time", ["Only one task to run at a time, in strict order", "Several users to share one keyboard", "Files to be stored in several locations"]),
      mc(1, "Which is a suitable example in a word processor?", "Typing, spell checking and auto-saving happen at the same time", ["The document can only be saved after spell checking has finished", "The word processor opens only one document per computer", "Printing blocks all typing until the page is done"]),
    ],
  },
  {
    number: "2", sub_number: "2.6.3",
    text: "The processing speed of the computers at head office is very low. Explain why installing more RAM could improve a computer's performance.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "More RAM can store more applications/data, with faster access from RAM; OR less use of virtual memory, since RAM is faster than virtual memory.",
    marking_notes: "Two concepts from either memo alternative.",
    steps: [
      mc(1, "What can more RAM do?", "Store more applications/data at the same time", ["Increase the clock speed of the CPU", "Store data permanently when the power is off", "Increase the network bandwidth"]),
      mc(1, "Why does this speed up the computer?", "RAM is faster than virtual memory, so less virtual memory is needed", ["RAM is slower than virtual memory but holds more", "It replaces the need for the hard drive", "It cools the CPU so it can run faster"]),
    ],
  },

  // ============ SECTION C: COMMUNICATIONS AND NETWORK TECHNOLOGIES (30 marks) ============

  {
    number: "3", sub_number: "3.1.1",
    text: "The magazine publishing company has branches all around the world that operate on a large scale. Having a large computer network presents potential challenges. Describe what a computer network is.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "A collection of computers/devices connected via a communication medium to allow users to share software, hardware, data and information.",
    marking_notes: "Any TWO concepts: multiple devices; connected with a communication medium; ability to communicate/share software, hardware, data and information.",
    steps: [
      mc(1, "What is connected in a computer network?", "Multiple computers/devices, joined by a communication medium", ["A single computer and its peripherals only", "Only computers using the same operating system", "Only computers in the same room"]),
      mc(1, "What does a network allow users to do?", "Communicate and share software, hardware, data and information", ["Run programs without any hardware", "Avoid the need for passwords", "Store data without using any storage device"]),
    ],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "What type of network could be used by an international company such as this?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Applying and Analysing",
    model_answer: "WAN / Internet (also accept GAN).", marking_notes: "Accept WAN, Internet or GAN.",
    steps: [mc(1, "Which type of network suits an international company?", "WAN (Wide Area Network)", ["LAN (Local Area Network)", "PAN (Personal Area Network)", "Intranet"])],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "State TWO disadvantages of using a computer network.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: administrator required/high expertise; sophisticated security required; malware can spread; cost implications; (also) malfunction can disrupt the network; loss of data due to crashes.",
    marking_notes: "One mark per correct disadvantage.",
    steps: [
      mc(1, "Which is a disadvantage of a network?", "Malware can spread across the network", ["Users cannot share files", "Every user needs their own printer", "Data can never be backed up"]),
      mc(1, "Which is another disadvantage?", "Sophisticated security and an administrator with expertise are required", ["Network hardware never costs anything to maintain", "Computers cannot communicate with each other", "Software cannot be shared between users"]),
    ],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "It was decided that a network with a star topology will be installed in their building at head office. Define the term topology.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "The layout/arrangement of devices in a network.", marking_notes: "Accept layout/arrangement of devices.",
    steps: [mc(1, "What is a network topology?", "The layout/arrangement of the devices in a network", ["The speed at which data travels", "The type of cable used", "The software that manages the network"])],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Explain what a star topology entails.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Each node/device is connected to a central hub/switch (independently, with its own cable).",
    marking_notes: "One mark for connected to a central hub/switch, one for each device using its own/individual connection.",
    steps: [
      mc(1, "What do all the devices connect to in a star topology?", "A central hub/switch", ["A single shared backbone cable", "Each other in a closed ring", "A different server each"]),
      mc(1, "How is each device connected?", "Independently, with its own cable", ["Through one shared cable running past every device", "Wirelessly only, with no cable at all", "Through the neighbouring device on each side"]),
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "It was suggested that VoIP technology be utilised by the company when communicating with clients. Give TWO reasons why a company would benefit from using VoIP technology.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO: lower call cost; software is generally free; allows video conferencing/calls; allows transfer of documents, images and videos while talking.",
    marking_notes: "One mark per benefit, any two.",
    steps: [
      mc(1, "Which is a benefit of VoIP?", "Lower call cost", ["It works without any internet connection", "Calls can only be made between two landlines", "It needs a separate telephone exchange at each branch"]),
      mc(1, "Which is another benefit?", "Allows video conferencing/calls", ["It guarantees no delay at all in calls", "It never requires speakers or a microphone", "It only allows text messages"]),
    ],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Besides the device you are using, state ONE other requirement needed to make a phone call using VoIP software.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: internet connection; same software on both devices; purchase credits for certain numbers; speakers, webcam and mic/headset.",
    marking_notes: "Accept any one.",
    steps: [mc(1, "Which is another requirement for a VoIP call?", "An internet connection", ["A telephone landline", "A SIM card in every call", "A dial-up modem"])],
  },
  {
    number: "3", sub_number: "3.4.1a",
    text: "Journalists need to use the internet to do research for their articles. What is the purpose of a web browser?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "A browser displays web pages (also accept: used to view web pages).", marking_notes: "Accept display/view web pages.",
    steps: [mc(1, "What is the purpose of a web browser?", "To display/view web pages", ["To search the internet for information", "To store web pages on the server", "To translate domain names into IP addresses"])],
  },
  {
    number: "3", sub_number: "3.4.1b",
    text: "Why can a web browser not be used on its own when searching for information?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "You need a search engine to search for content (also: a browser can only view pages, not search; with a search engine you do not need to know the URLs).",
    marking_notes: "Accept any one of the memo's wordings.",
    steps: [mc(1, "Why can a browser not be used on its own to search for information?", "A search engine is needed to search for content", ["A browser can only open one page at a time", "A browser cannot connect to the internet", "A browser cannot display images or text"])],
  },
  {
    number: "3", sub_number: "3.4.2a",
    text: "Cookies are used to improve the browsing experience of users. What is a cookie in this context?",
    marks: 2, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "A small text file used to store the preferences/settings of a website visited.",
    marking_notes: "One mark for small text file, one for storing preferences/settings of a visited website.",
    steps: [
      mc(1, "What kind of file is a cookie?", "A small text file", ["A large executable program", "A compressed video file", "A type of virus"]),
      mc(1, "What does it store?", "The preferences/settings of a website visited", ["The user's complete browsing hardware specs", "A backup copy of the website", "The website's source code"]),
    ],
  },
  {
    number: "3", sub_number: "3.4.2b",
    text: "Explain how a cookie will enhance the browsing experience of users.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "When visiting the same website again it 'remembers' your profile and applies your preferences automatically.",
    marking_notes: "Any answer implying stored user preferences are used.",
    steps: [mc(1, "How does a cookie enhance the browsing experience?", "On a return visit the site remembers the user's profile and applies their preferences", ["It makes the website load without any internet connection", "It blocks all adverts on every website", "It permanently deletes the browsing history"])],
  },
  {
    number: "3", sub_number: "3.4.3",
    text: "While browsing the internet, a journalist discovered that smaller magazine companies get many more likes on social media than bigger, more popular magazine companies. This could be due to the activities of click farms. Explain what a click farm is.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Companies that pay workers/bots/botnets to repeatedly click on website elements/generate 'likes' to artificially boost the status of a product or web page.",
    marking_notes: "Concepts: clicks being generated; artificially creating status/likes/popularity.",
    steps: [
      mc(1, "What do click farms do?", "Pay workers or use bots to generate repeated clicks/likes", ["Scan websites for malware", "Host large numbers of websites for rent", "Sell advertising space to genuine customers"]),
      mc(1, "What is the purpose of this?", "To artificially boost the popularity/status of a product or web page", ["To genuinely measure a page's popularity", "To speed up the page's loading time", "To protect the page against hackers"]),
    ],
  },
  {
    number: "3", sub_number: "3.5.1",
    text: "The company needs to renew their contract with their internet service provider (ISP). They need to evaluate the range and bandwidth provided by their current ISP. Differentiate between the terms range and bandwidth.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Range: how far data/a signal can be transmitted and received (distance covered). Bandwidth: how much data can be sent through the network per time unit (speed of connection).",
    marking_notes: "One mark for range, one for bandwidth.",
    steps: [
      mc(1, "What does range refer to?", "The distance a signal can be transmitted and received", ["The amount of data sent per second", "The monthly data limit", "The number of users on the network"]),
      mc(1, "What does bandwidth refer to?", "How much data can be sent through the network per unit of time", ["The distance a signal can travel", "The number of devices a router supports", "The strength of a Wi-Fi password"]),
    ],
  },
  {
    number: "3", sub_number: "3.5.2",
    text: "Differentiate between shaping and throttling in this context (an ISP's practices that could affect internet access).",
    marks: 3, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Both happen when there is congestion/high traffic/excessive data usage. Shaping limits bandwidth to specific prioritised activities (certain activities are restricted at peak times). Throttling limits bandwidth on all activities when the network is strained or the monthly limit is exceeded.",
    marking_notes: "Concepts: both occur during congestion/high usage; shaping limits specific activities; throttling limits all activities.",
    steps: [
      mc(1, "When do both shaping and throttling generally occur?", "During congestion, high traffic or excessive data usage", ["Only when the router is switched off", "Only when a user's password is wrong", "Only when a new website is created"]),
      mc(1, "What does shaping do?", "Limits bandwidth for specific prioritised/selected activities", ["Reduces bandwidth for all activities", "Increases bandwidth for all users", "Blocks the internet completely"]),
      mc(1, "What does throttling do?", "Limits bandwidth on all activities", ["Limits only specific selected activities", "Doubles the bandwidth for heavy users", "Prioritises video above everything else"]),
    ],
  },
  {
    number: "3", sub_number: "3.6.1",
    text: "The company requires a digital certificate, issued by a certificate authority (CA), before launching their website. Explain the purpose of a digital certificate when SSL encryption is used.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "A digital certificate is used to verify the validity/authenticity of a person or organisation.", marking_notes: "Accept verifying validity/authenticity.",
    steps: [mc(1, "What is the purpose of a digital certificate?", "To verify the authenticity/validity of a person or organisation", ["To compress the data being sent", "To increase the speed of the website", "To block unwanted visitors from the site"])],
  },
  {
    number: "3", sub_number: "3.6.2",
    text: "How would you identify a website that is encrypted with a secure connection?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: an 's' in the URL (https://...); a lock symbol in the address bar.", marking_notes: "Accept any one.",
    steps: [mc(1, "How can you identify a secure (encrypted) website?", "The URL starts with https and a lock symbol appears in the address bar", ["The URL starts with http and a warning triangle appears", "The page loads faster than normal", "The website has many adverts"])],
  },
  {
    number: "3", sub_number: "3.7.1",
    text: "Using the internet presents dangers such as being subjected to hacking and computer worms. Define the term computer worm.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: malware that exploits weaknesses in an application/OS/network to spread; spreads copies/replicates itself without interaction; spreads itself over a network.",
    marking_notes: "Accept any one.",
    steps: [mc(1, "What is a computer worm?", "Malware that replicates itself and spreads over a network without user interaction", ["Malware that locks files until a ransom is paid", "Software that records every key pressed", "A program that must be attached to a host file and run by the user"])],
  },
  {
    number: "3", sub_number: "3.7.2",
    text: "State ONE activity performed by your electronic device that indicates that the device could be infected with a computer worm.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: hard drive space decreases with no extra files loaded; performance decreases; files missing but not deleted by the user/new files not added by the user; anti-virus detects a worm; e-mails sent without the user's knowledge.",
    marking_notes: "Accept any one.",
    steps: [mc(1, "Which indicates a possible worm infection?", "Hard drive space decreases although no extra files have been loaded", ["The computer starts up a little faster", "The screen brightness increases", "The keyboard layout changes after an update"])],
  },
  {
    number: "3", sub_number: "3.7.3",
    text: "Briefly explain how a firewall can protect a network from being hacked.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "A firewall monitors incoming and outgoing network traffic and blocks unwanted traffic based on a set of security rules.",
    marking_notes: "Concepts: monitoring of traffic; blocking of unwanted traffic.",
    steps: [
      mc(1, "What does a firewall do with network traffic?", "Monitors incoming and outgoing traffic", ["Compresses the traffic to save bandwidth", "Stores a copy of all traffic permanently", "Encrypts all files stored on the server"]),
      mc(1, "What does it then do according to the security rules?", "Blocks unwanted traffic", ["Allows all traffic through without checking", "Deletes the files from users' computers", "Speeds up the unwanted traffic"]),
    ],
  },
  {
    number: "3", sub_number: "3.7.4",
    text: "Give the term used to describe a person that is hired by a company to hack into the company's network to test their level of security.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "White hat hacker / ethical hacker / security analyst (also accept penetration tester).", marking_notes: "Accept white hat, ethical hacker, security analyst or pen tester.",
    steps: [mc(1, "What is such a person called?", "A white hat (ethical) hacker", ["A black hat hacker", "A script kiddie", "A cracker"])],
  },

  // ============ SECTION D: DATA AND INFORMATION MANAGEMENT (20 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "SCENARIO: A media company manages the publishing of local and international magazines. An MS Access database manages the distribution of magazines published by several publishers. The database has two tables:\n\ntblPublishers: PublisherID (PK, Text), PublisherName (Text), Address (Text), PublisherContactNo (Text)\ntblMagazines: MagazineCode (PK, Text, e.g. MC001), Title (Text), Type (Text: sport/business/fashion/leisure/other), NumPrinted (Text), ReleaseDate (Text), Price (Text), eMagazine (Text: True if available in e-format), PublisherID (FK, Text)\n\nIt is advised that a relational database should be created. What is a relational database?",
    marks: 1, topicKey: DM, cognitiveLevelName: "Remembering",
    model_answer: "A database containing multiple tables linked together in a relationship (also accept: tables linked with primary and foreign keys).", marking_notes: "Accept either wording.",
    steps: [mc(1, "What is a relational database?", "A database with multiple tables linked together by relationships (primary and foreign keys)", ["A database stored in a single flat table", "A database that is stored on a remote website only", "A database that only stores text and no numbers"])],
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Name and explain ONE anomaly that can occur in an operational database if the database is not normalised.",
    marks: 2, topicKey: DM, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE with explanation: Insertion anomaly (required data cannot be added unless other unavailable/unrelated data is also added); Deletion anomaly (a legitimate deletion of a record causes deletion of other required data); Update/modification anomaly (incorrect data may have to be changed in many records, risking some being changed incorrectly).",
    marking_notes: "One mark for the name, one for the matching explanation. The insertion anomaly is used here.",
    steps: [
      mc(1, "Which is an anomaly that can occur in an unnormalised database?", "Insertion anomaly", ["Compression anomaly", "Encryption anomaly", "Backup anomaly"]),
      mc(1, "What is an insertion anomaly?", "Required data cannot be added unless another piece of unavailable/unrelated data is also added", ["A record is automatically added to every table", "Data is entered twice by two different users", "A new field is added without a data type"]),
    ],
  },
  {
    number: "4", sub_number: "4.2",
    text: "In tblMagazines every field is Text (MagazineCode, Title, Type, NumPrinted, ReleaseDate, Price, eMagazine, PublisherID). Identify THREE fields that require more suitable data types, and suggest a more suitable data type for EACH. Choose the suitable data type for each of the three fields below.",
    marks: 3, topicKey: DM, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any THREE: ReleaseDate: Date/Time (TDate); Price: Currency/Real/Double; eMagazine: Boolean/Yes-No; NumPrinted: Number/Integer/ShortInt/LongInt.",
    marking_notes: "One mark per field with a correct data type. ReleaseDate, Price and eMagazine are used here (NumPrinted: Integer is also accepted by the memo).",
    steps: [
      mc(1, "Which data type is suitable for ReleaseDate?", "Date/Time (TDate)", ["Boolean (Yes/No)", "Currency", "Integer"]),
      mc(1, "Which data type is suitable for Price?", "Currency (or Real/Double)", ["Date/Time", "Boolean (Yes/No)", "Memo (long text)"]),
      mc(1, "Which data type is suitable for eMagazine (true if available in e-format, false if not)?", "Boolean (Yes/No)", ["Currency", "Date/Time", "Autonumber"]),
    ],
  },
  {
    number: "4", sub_number: "4.3",
    text: "Draw an ERD of tblPublishers and tblMagazines showing the relationship type between the entities and a suitable action verb describing the relationship. Choose the correct elements of the ERD below.",
    marks: 3, topicKey: DM, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Entities Publisher and Magazine; relationship One-to-Many (one publisher publishes many magazines); action verb \"Publishes\" (Publisher - Publishes - Magazine).",
    marking_notes: "FLAG: ERD is a diagram. Marks: correct entities; correct relationship type (one-to-many, any acceptable notation); acceptable action verb.",
    steps: [
      mc(1, "Which entities must appear in the ERD?", "Publisher (tblPublishers) and Magazine (tblMagazines)", ["Magazine and Price", "Publisher and PublisherID only", "Magazine and eMagazine"]),
      mc(1, "Which relationship type exists between Publisher and Magazine?", "One-to-many (one publisher, many magazines)", ["One-to-one", "Many-to-many", "Many-to-one (many publishers per magazine)"]),
      mc(1, "Which is a suitable action verb on the relationship?", "Publishes", ["Prints on", "Belongs", "Is"]),
    ],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "Many database management systems (DBMSs) have built-in integrity controls that help to maintain the data integrity in the database. Explain what data integrity entails.",
    marks: 2, topicKey: DM, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO aspects: completeness of data; accuracy/correctness/reliability of data; consistency of data; validity.",
    marking_notes: "One mark per aspect, any two.",
    steps: [
      mc(1, "Which is an aspect of data integrity?", "Accuracy/correctness (reliability) of data", ["Speed of data transfer", "Size of the data", "Colour coding of data"]),
      mc(1, "Which is another aspect of data integrity?", "Consistency of data", ["Compression of data", "Duplication of data", "Visibility of data to everyone"]),
    ],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Apart from normalisation, state ONE other way to ensure data integrity in a database.",
    marks: 1, topicKey: DM, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: ensure referential integrity; include validation in the database design; verify that all the data is correct.", marking_notes: "Accept any one.",
    steps: [mc(1, "Which is another way to ensure data integrity?", "Enforcing referential integrity (with validation)", ["Deleting the primary keys", "Allowing duplicate primary keys", "Storing everything in one text field"])],
  },
  {
    number: "4", sub_number: "4.5",
    text: "State TWO ways in which the company can benefit from the use of a database management system.",
    marks: 2, topicKey: DM, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: improves organisation/storage of data; reduces redundancy; improves data transfer; enhances data security; improved data integration; minimises inconsistency; faster data access; better decision making; increased end-user productivity; easy insertion/deletion; prevents anomalies.",
    marking_notes: "One mark per benefit, any two (any other applicable correct answer accepted).",
    steps: [
      mc(1, "Which is a benefit of a DBMS?", "Reduces data redundancy", ["Increases data duplication", "Removes the need for any backups", "Makes data accessible only to one user at a time"]),
      mc(1, "Which is another benefit of a DBMS?", "Faster data access/improved data security", ["Slower data retrieval, but more disk space", "Makes data inconsistent so it can be checked later", "Removes the need for passwords"]),
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "Human error results in many issues when entering information into a database. Suggest ONE way to minimise user input.",
    marks: 1, topicKey: DM, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: default values; GUI components; importing/automated input; barcode scanner/reader; RFID.", marking_notes: "Accept any one.",
    steps: [mc(1, "How can user input be minimised?", "Use a barcode reader or default values", ["Make every field free-text so users can type anything", "Ask users to enter each value twice by hand", "Remove all validation from the forms"])],
  },
  {
    number: "4", sub_number: "4.7",
    text: "Explain why using a server-based database instead of a desktop database management system would be the better option for a company.",
    marks: 2, topicKey: DM, cognitiveLevelName: "Understanding",
    model_answer: "Ideal to accommodate a large number of users working simultaneously on the database, from many different locations.",
    marking_notes: "Any TWO of: large numbers of users; working simultaneously; from many different locations.",
    steps: [
      mc(1, "What can a server-based database accommodate?", "Large numbers of users working on it at the same time", ["Only one user at a time", "Only users on the same computer", "Only users who are offline"]),
      mc(1, "From where can these users work?", "From many different locations", ["Only from one office desk", "Only from the computer holding the file", "Only when connected to a printer"]),
    ],
  },
  {
    number: "4", sub_number: "4.8",
    text: "Data warehousing plays an important role in data maintenance. How does data warehousing affect the size and speed of a database?",
    marks: 2, topicKey: DM, cognitiveLevelName: "Understanding",
    model_answer: "Data warehousing will decrease the size of a database and increase the speed. (Alternative memo wording: increasing the size of the data warehouse decreases the speed of the data warehouse.)",
    marking_notes: "FLAG: memo accepts two phrasings; the first is used.",
    steps: [
      mc(1, "What is the effect on the size of the operational database?", "It decreases the size", ["It increases the size", "It has no effect on size", "It doubles the size to keep copies"]),
      mc(1, "What is the effect on the speed of the operational database?", "It increases the speed", ["It decreases the speed", "It has no effect on speed", "It makes it slower for fewer users"]),
    ],
  },
  {
    number: "4", sub_number: "4.9",
    text: "The company's database is used for data mining. State the role of a human in the data mining process.",
    marks: 1, topicKey: DM, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: selecting and preparing data sets; developing the data mining software and algorithms; interpreting/verifying the results delivered by the software.", marking_notes: "Accept any one.",
    steps: [mc(1, "What is a role of a human in data mining?", "Interpreting/verifying the results delivered by the software", ["Physically moving the stored data between servers", "Manually mining each record one by one without software", "Printing every record in the database"])],
  },

  // ============ SECTION E: SOLUTION DEVELOPMENT (20 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "Applicants for a software engineering position at the magazine company need to answer some questions on software development. Indicate whether the following statement is TRUE or FALSE: An array can only store elements of the same data type.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "TRUE.", marking_notes: "Accept only true.",
    steps: [tf(1, "Is it TRUE or FALSE that an array can only store elements of the same data type?", true)],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "Indicate whether the following statement is TRUE or FALSE: The index value for the first element in a Delphi array is always one.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "FALSE.", marking_notes: "Accept only false (the lower bound is declared; arrays may start at 0 or any value).",
    steps: [tf(1, "Is it TRUE or FALSE that the index of the first element in a Delphi array is always one?", false)],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Indicate whether the following statement is TRUE or FALSE: The value 23 will be displayed in the rich edit component when the following code is executed:\n\nvar\n  arrNumbers : array[1..5] of Integer = (4,2,3,1,8);\n  iValue : Integer;\nbegin\n  iValue := arrNumbers[2]+ arrNumbers[3];\n  redOutput.Lines.Add(intToStr(iValue));\nend;",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "FALSE (arrNumbers[2] + arrNumbers[3] = 2 + 3 = 5, which is added numerically, so 5 is displayed).", marking_notes: "Accept only false.",
    steps: [tf(1, "Is it TRUE or FALSE that the value 23 will be displayed?", false)],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "The following algorithm written in pseudocode has been provided to enter integer values into variables A and B, swap the contents of the two variables and display the values:\n\nInput A\nInput B\nA <- B\nB <- A\nDisplay A\nDisplay B\n\nWhat will be displayed if the value of 5 is entered into variable A and the value of 6 is entered into variable B?",
    marks: 2, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "6 and 6 (after A <- B both A and B are 6, so B <- A leaves B as 6).", marking_notes: "Any description indicating both values to be 6. FLAG: assignment arrows restored as <-.",
    steps: [
      mc(1, "What value of A is displayed?", "6", ["5", "11", "0"]),
      mc(1, "What value of B is displayed?", "6", ["5", "11", "0"]),
    ],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "Rewrite the algorithm so that the content of the variables will be swapped correctly. The original algorithm is: Input A; Input B; A <- B; B <- A; Display A; Display B.",
    marks: 3, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Input A\nInput B\nTemp <- A\nA <- B\nB <- Temp\nDisplay A\nDisplay B\n(any variable may be used as the temporary holder; the three statements must be in the correct order)",
    marking_notes: "One mark per correct swap statement in the correct order.",
    steps: [
      mc(1, "Which statement should come first in the swap?", "Temp <- A (store A in a temporary variable)", ["A <- B", "B <- Temp", "Temp <- B + A"]),
      mc(1, "Which statement comes second?", "A <- B", ["B <- Temp", "B <- A", "Temp <- Temp"]),
      mc(1, "Which statement comes third?", "B <- Temp", ["A <- Temp", "B <- A", "Temp <- B"]),
    ],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "A group of friends throws a six-sided dice three times to decide their meal. Rules: if the first throw is larger than the second they eat chicken, or else if the third throw is less than the first they eat fish, or else burgers.\n\nThe following incomplete Delphi solution is provided:\n\nvar\n  iFirst, iSecond, iThird : Integer;\n  sMeal : string;\nbegin\n  iFirst  := Inputbox('Enter value of first throw', '', '');\n  iSecond := Inputbox('Enter value of second throw', '', '');\n  iThird  := Inputbox('Enter value of third throw', '', '');\n  // Complete the program (Question 5.3.2)\n  showMessage(sMeal);\nend.\n\nExplain why a syntax error will be displayed when the provided part of the program is executed.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: a string value is assigned to an integer variable; the StrToInt function must be added (type cast from String to Integer).", marking_notes: "Accept any one.",
    steps: [mc(1, "Why is a syntax error displayed?", "Inputbox returns a String, which is assigned to an Integer variable", ["The variable sMeal is declared as a String", "showMessage cannot display a variable", "The begin keyword is missing a semicolon"])],
  },
  {
    number: "5", sub_number: "5.3.2",
    text: "Complete the missing part of the Delphi program (the comment line 'Complete the program') to assign the correct type of meal to sMeal according to the rules (chicken if the first throw is larger than the second; else fish if the third throw is less than the first; else burgers). Assume the syntax error in 5.3.1 has been corrected.",
    marks: 5, topicKey: SD, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "if iFirst > iSecond then sMeal := 'chicken'\nelse if iThird < iFirst then sMeal := 'fish'\nelse sMeal := 'burgers';",
    marking_notes: "Marks: IF with correct condition; correct assignment of chicken; ELSE IF with correct condition; correct assignment of fish; final ELSE assigning burgers (or initialising sMeal).",
    steps: [
      mc(1, "Which is the correct first condition?", "if iFirst > iSecond", ["if iFirst < iSecond", "if iFirst = iSecond", "if iThird > iFirst"]),
      mc(1, "What must be assigned when that condition is true?", "sMeal := 'chicken'", ["sMeal := 'fish'", "sMeal := 'burgers'", "sMeal := iFirst"]),
      mc(1, "Which is the correct second condition (in the else branch)?", "else if iThird < iFirst", ["else if iThird > iFirst", "else if iSecond < iThird", "else if iThird = iSecond"]),
      mc(1, "What must be assigned when the second condition is true?", "sMeal := 'fish'", ["sMeal := 'chicken'", "sMeal := 'burgers'", "sMeal := iThird"]),
      mc(1, "What happens in the final else (neither condition true)?", "sMeal := 'burgers'", ["sMeal := 'chicken'", "sMeal := 'fish'", "Nothing is assigned and sMeal stays empty"]),
    ],
  },
  {
    number: "5", sub_number: "5.3.3",
    text: "Which sequence of throws (A, B, C or D) in the table will result in the group of friends having burgers as a meal? (Rules: chicken if throw 1 > throw 2; else fish if throw 3 < throw 1; else burgers.)",
    marks: 2, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "B (throws 3, 3, 3: the first is not larger than the second, and the third is not less than the first).",
    marking_notes: "Accept only B. (A: 6,6,2 gives fish; C: 5,3,1 gives chicken; D: 2,4,1 gives fish.)",
    steps: [mc(2, "Which sequence of throws results in burgers?", "B", ["A", "C", "D"])],
    image_url: `${IMG}/5-3-3-dice-throws.png`,
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "The following UML (unified modelling language) class diagram represents a magazine object:\n\nMagazine\n- fMagazineID : Integer\n- fTitle : string\n- fPublisher : string\n- fDatePublished : TDate\n- fNumCopies : Integer\n+ calculateCost()\n+ setNumCopies()\n\nGive TWO reasons why a UML diagram is an important OOP modelling tool.",
    marks: 2, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO: specifies the structure/behaviour of an object / helps visualise it; provides a template to guide construction; breaks a complex object into simple parts; lists attributes/data types; indicates accessibility; generic and interpretable by any programmer.",
    marking_notes: "One mark per reason, any two.",
    steps: [
      mc(1, "Which is a reason a UML diagram is important?", "It provides a template/visual guide for constructing an object", ["It automatically compiles the program", "It stores the data of the object permanently", "It replaces the need for any programming"]),
      mc(1, "Which is another reason?", "It lists the attributes, data types and accessibility of the object", ["It speeds up the execution of the program", "It encrypts the object's attributes", "It can only be understood by the original programmer"]),
    ],
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "What is the purpose of an accessor method?",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "Returns the current value of an attribute of an object.", marking_notes: "Accept returning/getting an attribute's value.",
    steps: [mc(1, "What is the purpose of an accessor method?", "To return the current value of an attribute of an object", ["To change the value of an attribute", "To create a new object", "To delete an object from memory"])],
  },
  {
    number: "5", sub_number: "5.4.3",
    text: "Give an example of a mutator method in the given Magazine class diagram (attributes fMagazineID, fTitle, fPublisher, fDatePublished, fNumCopies; methods calculateCost(), setNumCopies()).",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "setNumCopies().", marking_notes: "Accept only setNumCopies().",
    steps: [mc(1, "Which is the mutator method?", "setNumCopies()", ["calculateCost()", "fNumCopies", "getTitle()"])],
  },

  // ============ SECTION F: INTEGRATED SCENARIO (40 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "The company has an online version of their magazine hosted on a website. Local and server-side scripting, CSS and SQL are used on the website. Give ONE example of a local or server-side scripting language.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: PHP; JavaScript; ASP.NET; Node.js; Ruby; Perl; Python; Lua (HTML 5 also listed).", marking_notes: "Accept any one from the memo's list.",
    steps: [mc(1, "Which is a local or server-side scripting language?", "PHP", ["CSS", "SQL", "FTP"])],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Explain the main purpose of running a CSS on a website.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "It allows web developers to design the layout and appearance of web pages once and then automatically apply the design to the other web pages.",
    marking_notes: "Concepts: design layout/appearance once; automatically applied to all web pages.",
    steps: [
      mc(1, "What does CSS allow a developer to design once?", "The layout and appearance of web pages", ["The database tables behind the pages", "The server's security rules", "The video content of the pages"]),
      mc(1, "What then happens to the other web pages?", "The design is automatically applied to all of them", ["Each page must be redesigned by hand", "The pages are automatically deleted", "The pages are converted to PDF"]),
    ],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "What is the purpose of using SQL statements on a website?",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "SQL is used to interact with the database (store and retrieve/extract data) and make the website more interactive.",
    marking_notes: "Concepts: interaction with the database; makes the website more interactive.",
    steps: [
      mc(1, "What does SQL on a website interact with?", "The database (to store and retrieve data)", ["The user's web browser cache", "The web page's colour scheme", "The internet service provider"]),
      mc(1, "What is the effect on the website?", "It makes the website more interactive", ["It makes the website static", "It encrypts the web pages", "It changes the layout of every page"]),
    ],
  },
  {
    number: "6", sub_number: "6.1.4a",
    text: "As magazine readers are from different countries, they can access the website conveniently from any location. Name the type of computing which refers to software that is based on a user's location.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Location-based computing.", marking_notes: "Accept location-based computing.",
    steps: [mc(1, "Which type of computing is based on a user's location?", "Location-based computing", ["Cloud computing", "Distributed computing", "Grid computing"])],
  },
  {
    number: "6", sub_number: "6.1.4b",
    text: "What satellite technology will enable an application to automatically update information displayed on a device based on the location of the user?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "GPS.", marking_notes: "Accept GPS.",
    steps: [mc(1, "Which satellite technology provides the user's location?", "GPS", ["RFID", "NFC", "Bluetooth"])],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "The company regularly upgrades some of its devices and disposes of devices that are no longer in use. Name TWO hardware components on the motherboard of a computer that can be upgraded.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: RAM; CPU; graphics card/GPU; I/O cards (also HDD/SSD).", marking_notes: "One mark per component.",
    steps: [
      mc(1, "Which component on the motherboard can be upgraded?", "RAM", ["The motherboard's printed circuit tracks", "The power cable", "The computer case"]),
      mc(1, "Which other component can be upgraded?", "CPU (or graphics card/GPU)", ["The system bus lines", "The keyboard", "The monitor cable"]),
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "Some offices are equipped with desktop computers instead of laptops. State TWO benefits of using desktop computers over laptops.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO: larger screens; modular/custom design; easily expandable/upgradeable; easier to repair; affordability/lower cost.", marking_notes: "One mark per benefit.",
    steps: [
      mc(1, "Which is a benefit of desktops over laptops?", "Larger screens", ["They are easier to carry around", "They run on a built-in battery", "They are always lighter"]),
      mc(1, "Which is another benefit?", "Easily expandable/upgradeable", ["Harder to repair so they last longer", "More expensive, which gives better quality", "They have no need for a power supply"]),
    ],
  },
  {
    number: "6", sub_number: "6.2.3",
    text: "After defragmenting their hard disks, some staff members complained that their computers are still functioning at a low speed. Suggest a way, other than defragmenting the hard disks, to improve the speed of the computers without adding additional hardware components.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: disable specific features; run system clean-up; clock manipulation; remove malware; update software; close some applications (or applicable examples).", marking_notes: "Accept any one.",
    steps: [mc(1, "How can speed be improved without adding hardware?", "Run a system clean-up/close unused applications", ["Install more RAM", "Replace the hard disk with an SSD", "Add a second CPU"])],
  },
  {
    number: "6", sub_number: "6.2.4",
    text: "Some of the devices replaced by the company need to be disposed of responsibly. Suggest TWO ways in which the computers can be disposed of in an eco-friendly manner.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO: recycle the material; dispose at an approved e-waste site; reuse components; donate computers; sell working parts/computers.", marking_notes: "One mark per way.",
    steps: [
      mc(1, "Which is an eco-friendly way to dispose of computers?", "Take them to an approved e-waste/recycling site", ["Throw them in the household waste bin", "Burn them at the back of the building", "Bury them in the garden"]),
      mc(1, "Which is another eco-friendly way?", "Donate them or reuse their working components", ["Dump them at a municipal landfill", "Smash them so they cannot be reused", "Leave them in storage forever"]),
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "Office automation has not been very popular amongst many workers in the magazine industry. What is office automation?",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "A process whereby certain routine office processes are carried out without human intervention (done by a computer/machine).", marking_notes: "Accept carried out without human intervention.",
    steps: [mc(1, "What is office automation?", "Routine office processes carried out by computers/machines without human intervention", ["Moving all employees to work from home", "Replacing the office building with a data centre", "Buying new office furniture"])],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "State TWO advantages of office automation to workers.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: saves time/completes repetitive tasks faster; more accurate; manages digital processes effectively; decreases the workload of workers.", marking_notes: "One mark per advantage.",
    steps: [
      mc(1, "Which is an advantage of office automation to workers?", "Saves time by completing repetitive tasks faster", ["It increases the number of repetitive tasks", "It removes the need for computers", "It makes mistakes more likely"]),
      mc(1, "Which is another advantage?", "More accurate and decreases the workload", ["It increases the workers' workload", "It makes paper records compulsory", "It reduces accuracy but is cheaper"]),
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "The company is setting up a computer network at a new branch. How would the employees be able to connect to the company's Wi-Fi network?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: hotspot/access point/Wi-Fi modem; naming a specific device/setting for Wi-Fi; a Network Interface Card (NIC) on the user's device.", marking_notes: "Accept any one.",
    steps: [mc(1, "How can employees connect to the Wi-Fi network?", "Through a wireless access point/hotspot using a device with a wireless NIC", ["By plugging a keyboard into the router", "By connecting a printer cable to the router", "By dialling the company's phone number"])],
  },
  {
    number: "6", sub_number: "6.4.2a",
    text: "Attenuation can be a problem in a cabled network. Why is attenuation a problem in networking?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: attenuation causes loss of signal strength; it limits the distance that signals can be transmitted.", marking_notes: "Accept any one.",
    steps: [mc(1, "Why is attenuation a problem?", "It causes loss of signal strength, which limits the distance a signal can travel", ["It increases the speed of the signal too much", "It makes the cable overheat", "It causes the signal to be sent twice"])],
  },
  {
    number: "6", sub_number: "6.4.2b",
    text: "What type of communication medium can be used to limit attenuation?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "Fibre optic cable.", marking_notes: "Accept fibre optic cable.",
    steps: [mc(1, "Which communication medium limits attenuation?", "Fibre optic cable", ["Unshielded twisted pair (UTP) cable", "Coaxial cable", "Telephone line"])],
  },
  {
    number: "6", sub_number: "6.4.3",
    text: "Give TWO reasons why WiMAX technology is considered to be more suitable than Wi-Fi technology.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO: wider range; more secure; faster speed/higher bandwidth.", marking_notes: "One mark per reason, any two of the memo's three.",
    steps: [
      mc(1, "Which is a reason WiMAX is more suitable than Wi-Fi?", "It has a wider range", ["It has a shorter range, which is safer", "It needs no base station or antenna", "It only works inside a single room"]),
      mc(1, "Which is another reason?", "It offers faster speed/higher bandwidth", ["It is slower but cheaper to use", "It can only be used by one person at a time", "It does not need any security"]),
    ],
  },
  {
    number: "6", sub_number: "6.5.1",
    text: "The development of mobile technologies and devices promoted the use of social media and microblogging sites. Describe the concept microblogging.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Posting of short text/pictures/audios/videos.", marking_notes: "One mark for short posts, one for the content types.",
    steps: [
      mc(1, "What is the nature of microblog posts?", "Short messages/updates", ["Long detailed articles of many pages", "Private one-to-one messages only", "Academic essays with references"]),
      mc(1, "What content can be posted?", "Text, pictures, audio and video", ["Executable programs only", "Database tables only", "Spreadsheets only"]),
    ],
  },
  {
    number: "6", sub_number: "6.5.2",
    text: "The excessive use of social media can impact negatively on the health of users. State TWO potential health problems caused by the extensive use of social media.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: anxiety; depression; addiction; overweight/obesity; eye strain; wrist aches/carpal tunnel; back aches; repetitive strain injury (or any appropriate health issue).", marking_notes: "One mark per problem.",
    steps: [
      mc(1, "Which is a health problem of extensive social media use?", "Eye strain", ["Improved eyesight", "Stronger immune system", "Lower blood pressure"]),
      mc(1, "Which is another health problem?", "Anxiety/depression", ["Improved sleep", "Increased concentration", "Reduced stress"]),
    ],
  },
  {
    number: "6", sub_number: "6.6.1",
    text: "IoT is one of the technologies that is investigated by the company to be used more effectively in future. Expand the abbreviation IoT.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Internet of Things.", marking_notes: "Accept only Internet of Things.",
    steps: [mc(1, "What does IoT stand for?", "Internet of Things", ["Input of Transactions", "Internet of Terminals", "Integration of Technology"])],
  },
  {
    number: "6", sub_number: "6.6.2",
    text: "State TWO ways in which IoT devices connect to the internet.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO: Wi-Fi/wirelessly; Bluetooth; cellular; satellite; physical/wired connection; sensors.", marking_notes: "One mark per way.",
    steps: [
      mc(1, "Which is a way IoT devices connect to the internet?", "Wi-Fi", ["A floppy disk", "A magnetic-stripe card", "A landline voice call"]),
      mc(1, "Which is another way?", "Bluetooth/cellular", ["A parallel printer cable", "Infrared from a TV remote", "A fax line"]),
    ],
  },
  {
    number: "6", sub_number: "6.7.1",
    text: "Distributed computing is being investigated by the company for possible implementation. What is distributed computing?",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "The processing power of many computers is combined to work together to solve a single problem.", marking_notes: "One mark for combining the processing power of many computers, one for solving a single problem.",
    steps: [
      mc(1, "What is combined in distributed computing?", "The processing power of many computers", ["The storage of one computer's drives", "The screens of several computers", "The passwords of many users"]),
      mc(1, "What are they used for?", "To work together to solve a single problem", ["To run many unrelated programs separately", "To act as a backup for one file", "To host a single website only"]),
    ],
  },
  {
    number: "6", sub_number: "6.7.2",
    text: "Give ONE example where distributed computing could be used.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: counting stars in galaxies; finding a cure for Ebola/childhood cancer/AIDS; finding new prime numbers; categorising galaxies; searching for alien life; weather modelling; genetic research (or any other applicable example).", marking_notes: "Accept any applicable example.",
    steps: [mc(1, "Which is an example of distributed computing?", "Weather modelling", ["Typing a letter in a word processor", "Playing a single-player offline game", "Sending an e-mail"])],
  },
  {
    number: "6", sub_number: "6.8",
    text: "The company decided to do research on the blockchain technology. Define the concept blockchain technology.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "A growing list of records/entries/transactions that are linked using cryptography, and are difficult or impossible to alter (incorruptible).", marking_notes: "Concepts: a list of linked records/transactions; difficult/impossible to change.",
    steps: [
      mc(1, "What does a blockchain consist of?", "A growing list of linked records/transactions (an open ledger)", ["A single database owned by one company", "A set of encrypted e-mails", "A list of passwords stored on a server"]),
      mc(1, "What is a key property of the records?", "They are difficult or impossible to change", ["They can be edited by anyone at any time", "They are deleted after one day", "They are kept private to one user"]),
    ],
  },
  {
    number: "6", sub_number: "6.9",
    text: "A multi-factor authentication system is used to log onto a website to make payments for services rendered. Explain how a multi-factor authentication system works.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "More than one level/factor/technique of authentication is required, with an explanation/example (e.g. a password followed by an OTP/SMS/e-mail/biometrics/QR code).", marking_notes: "Also accept two different security techniques named with appropriate examples.",
    steps: [
      mc(1, "How many authentication factors does the system require?", "More than one level/factor of authentication", ["Only a single password", "No authentication, only a username", "Only a fingerprint and nothing else"]),
      mc(1, "Which is a suitable example?", "A password followed by a one-time PIN (OTP) sent by SMS", ["Entering the same password twice", "Typing the username in capital letters", "A password sent in an unencrypted e-mail"]),
    ],
  },
  {
    number: "6", sub_number: "6.10",
    text: "Why does electronic media use DRM?",
    marks: 1, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: encryption/technique to control access to the content / protection of rights; to prevent unlawful copying/piracy.", marking_notes: "Accept any one.",
    steps: [mc(1, "Why does electronic media use DRM?", "To prevent unlawful copying/piracy by controlling access to the content", ["To make the media load faster", "To compress the media files", "To improve the picture quality"])],
  },
  {
    number: "6", sub_number: "6.11.1",
    text: "The following shared folder with permissions has been created (see the screenshot of the folder's Security permissions). State TWO tasks that can be performed with files in the folder with Read permissions.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO: list; read/access/open files; copy/download files; Save As; execute.", marking_notes: "One mark per task.",
    steps: [
      mc(1, "Which task can be performed with Read permission?", "Open/read the files", ["Delete the files", "Modify the contents and save over the file", "Change the permissions of the folder"]),
      mc(1, "Which other task can be performed with Read permission?", "Copy/download the files", ["Create new files in the folder", "Rename the folder", "Take ownership of the folder"]),
    ],
    image_url: `${IMG}/6-11-folder-permissions.png`,
  },
  {
    number: "6", sub_number: "6.11.2",
    text: "Who would usually be allocated the 'Full control' permission on the shared folder?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Administrator (any person in charge of the files in the folder).", marking_notes: "Accept administrator or the person in charge of the folder.",
    steps: [mc(1, "Who would usually be given Full control?", "The administrator", ["Every guest user", "Any anonymous visitor", "The person who only needs to read files"])],
    image_url: `${IMG}/6-11-folder-permissions.png`,
  },
];
