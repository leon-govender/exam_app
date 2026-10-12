// Real DBE past paper: Information Technology P2, November 2022, National
// (English). Source: official DBE question paper + marking guidelines, fetched
// from stanmorephysics.com (source_url below points at the combined QP+memo
// PDF). QP is pages 1-16 (cover page 1, instructions page 2, questions pages
// 3-16); page 17 is the marking-guidelines title page; pages 18-30 are the
// memo (memo says "14 pages"). Confirmed from the extracted text of every page.
// Cover page: MARKS 150, TIME 3 hours.
//
// Paper structure: SIX compulsory sections, 150 marks, 3 hours. NOTE: the
// paper's own "INSTRUCTIONS AND INFORMATION" page lists section totals as
// A 15, B 25, C 25, D 25, E 20, F 40 (sums to 150), but the real section
// totals printed at the end of each section and in the memo are:
//   SECTION A: Short Questions (Q1)                                 15 marks
//   SECTION B: Systems Technologies (Q2)                            25 marks
//   SECTION C: Communication and Network Technologies (Q3)          30 marks
//   SECTION D: Data and Information Management (Q4)                 20 marks
//   SECTION E: Solution Development (Q5)                            20 marks
//   SECTION F: Integrated Scenario (Q6)                             40 marks
//                                                          GRAND TOTAL: 150
// (FLAG: the instructions page misprints C as 25 and D as 25; the per-question
// mark allocations and memo give C = 30 and D = 20, which is what is ingested.)
//
// Cognitive levels / topics: same shared definitions as the 2025 IT P2 file.
// Each sub-question is mapped to the one CAPS topic it belongs to.
//
// Grading: every question uses the stepped-MCQ pattern (`steps`), one step per
// mark-earning point, four options, the correct option taken from the memo and
// distractors invented as plausible Grade 12 errors (never another memo-
// accepted answer). No question uses `marking_points`.
//   - Q1.1 (A-D multiple choice) -> single-step MCQs with the real options.
//   - Q1.2 (match Column A to Column B, A-R) -> single-step MCQs offering the
//     correct Column B term plus three other Column B terms.
//   - "State/give TWO ..." questions -> two single-mark steps, one per item.
//   - "Explain/define/discuss" questions worth 2-3 marks -> one step per memo
//     concept; 1-mark ones -> one single-step MCQ.
//   - TRUE/FALSE (4.4.5) and VALID/INVALID (5.2) -> single-step two-option MCQs
//     worth the question's mark.
//   - 5.5.2 (rewrite a REPEAT loop as a WHILE loop, 4 marks) is split into one
//     MCQ step per code element.
//
// FLAGs for review (memo oddities / judgement calls):
//   - 1.1.5: memo accepts "C/D" (Error or 16). In Delphi "/" is real division
//     so assigning to an integer is a compile error (C); D (16) is also
//     memo-accepted. To keep exactly one correct option, option D (16) was
//     replaced with "8"; the question text is otherwise verbatim.
//   - 1.2.4: memo accepts "I/R" (JavaScript or Python). Python is omitted from
//     the options so only JavaScript (I) is correct.
//   - 2.1.3b: memo gives two concepts (CPU transfers large amounts of data /
//     dedicated single-component path vs shared bus), one step each.
//   - 2.8.2: memo accepts two phrasings; modelled as (1) OS identifies the
//     file type (2) so it can select the correct application.
//   - 3.1.1a: memo "UTP/Ethernet cables, also accept Fibre"; fibre is not
//     used as a distractor.
//   - 3.3.2, 4.3.1b, 5.3.1, 5.4.4b, 6.4.1: memo gives one sentence worth 2
//     marks; split by the transcriber into two concept steps.
//   - 4.4.2: memo says "CollectionNumber or any other suitable new field /
//     autonumber"; modelled as the correct answer "an AutoNumber ID field".
//   - 4.4.3: memo says Short Text (matches the foreign key ClientID shown).
//   - 5.4.3a/b: memo also accepts CompanyName with correct motivation;
//     CompanyName is therefore not used as a distractor.
//   - 5.5.2: the 4 marks are split by the transcriber (initial generation,
//     WHILE condition, regenerate inside the loop, upper bound 11); the memo
//     only gives the model code, not a mark-by-mark split.
//   - Memo section heading for Q5 is mislabelled "SECTION D" (it is E) and
//     its total reads 20; ingested as Section E = 20.
//
// Diagrams/screenshots (cropped from 220dpi renders into
// public/question-images/it-2022-p2/), all load-bearing:
//   - 3-2-network-diagram.png (Q3.2): client-server vs peer-to-peer diagram
//     (3.2.4 refers to the switch "marked X").
//   - 4-3-2a-worker-job.png / 4-3-2b-company-customers.png (Q4.3.2): the two
//     ER relationship diagrams to identify.
//   - 4-4-tblcollections.png (Q4.4): tblCollections design view.
//   - 5-4-class-diagram.png (Q5.4): the RecycleCompany class diagram.
//   - 6-2-2-attachment-error.png (Q6.2.2): the "attachment is too large"
//     e-mail error screenshot.

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
  year: 2022,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2026/08/NSC-Information-Technology-Grade-12-November-2022-P2-and-Memo.pdf" as string | null,
};

export const examSchedule: { paperNumber: string; examType: "prelim" | "final"; examDate: string; startTime: string; durationMinutes: number; }[] = [];

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

const IMG = "/question-images/it-2022-p2";

// Build one MCQ step: the correct answer is placed at index `pos`, the wrong
// options fill the remaining slots in order.
function s(marks: number, description: string, correct: string, wrong: string[], pos: number): MarkingPointStep {
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

const ST = "systems-technologies";
const CN = "communication-network-technologies";
const DI = "data-information-management";
const SD = "solution-development";
const SI = "social-implications";

export const questions: QuestionSeed[] = [
  // ============ SECTION A: SHORT QUESTIONS (15 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "A process where a single program is broken up into multiple parts that can be processed simultaneously and independently:",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "C — Multithreading.", marking_notes: "Accept only C.",
    steps: [s(1, "Which process breaks a single program into parts that run simultaneously and independently?", "Multithreading", ["Multitasking", "Multiprocessing", "Multiflow"], 2)],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "The following is a type of volatile memory:",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "B — Disk cache.", marking_notes: "Accept only B.",
    steps: [s(1, "Which of these is a type of volatile memory?", "Disk cache", ["Solid-state disk", "Flash disk", "Blu-ray disk"], 1)],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "A … is a file which includes visual media and is made available for download.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "C — Vodcast.", marking_notes: "Accept only C.",
    steps: [s(1, "What is a file with visual media made available for download called?", "Vodcast", ["Media repository", "RSS feed", "Broadcast"], 2)],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "A programming language used exclusively for manipulating data in a database:",
    marks: 1, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "A — SQL.", marking_notes: "Accept only A.",
    steps: [s(1, "Which language is used exclusively for manipulating data in a database?", "SQL", ["AJAX", "DELPHI", "PHP"], 0)],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Given the following statement: iAnswer := 12 + 4/2 * 2/(9 MOD 2); The value of iAnswer will be …",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "C — Error (memo accepts C/D; see FLAG in header: / is real division so the result cannot be assigned to an integer).",
    marking_notes: "Memo accepts C or D. Option D (16) was replaced with 8 so exactly one option is correct (FLAG).",
    steps: [s(1, "What is the result of the statement?", "Error", ["12", "13", "8"], 2)],
  },
  {
    number: "1", sub_number: "1.2.1",
    text: "Match the description to a term: Any activity regarding creating, editing or deleting of data managed by a database management system (DBMS).",
    marks: 1, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "H — transaction.", marking_notes: "Accept only H.",
    steps: [s(1, "Which term describes any activity creating, editing or deleting data managed by a DBMS?", "Transaction", ["Synchronisation", "Class", "Convergence"], 3)],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Match the description to a term: A data structure that stores a set of values of the same data type.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "K — array.", marking_notes: "Accept only K.",
    steps: [s(1, "Which term describes a data structure storing a set of values of the same data type?", "Array", ["String", "Class", "Driver"], 1)],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Match the description to a term: A method used to bypass the normal authentication procedure on a network in order to obtain unauthorised access.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "J — backdoor.", marking_notes: "Accept only J.",
    steps: [s(1, "Which term describes a method used to bypass normal authentication to gain unauthorised access?", "Backdoor", ["Phishing", "AUP", "User rights"], 2)],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Match the description to a term: A programming language that can be used to add interactivity to a website.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "I — JavaScript (memo also accepts R — Python; Python is omitted from the options, see FLAG).",
    marking_notes: "Memo accepts I/R.",
    steps: [s(1, "Which language can be used to add interactivity to a website?", "JavaScript", ["C++", "Modulator", "Class"], 0)],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "Match the description to a term: Protection for any published work that helps to prevent that work from being used without permission from the author.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "A — copyright.", marking_notes: "Accept only A.",
    steps: [s(1, "Which term describes protection that prevents published work being used without the author's permission?", "Copyright", ["AUP", "User rights", "Scalability"], 1)],
  },
  {
    number: "1", sub_number: "1.2.6",
    text: "Match the description to a term: The process of having sets of the same data file on separate devices automatically being updated to the latest copy.",
    marks: 1, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "O — synchronisation.", marking_notes: "Accept only O.",
    steps: [s(1, "Which term describes automatically updating copies of the same file on separate devices to the latest version?", "Synchronisation", ["Convergence", "Transaction", "Scalability"], 3)],
  },
  {
    number: "1", sub_number: "1.2.7",
    text: "Match the description to a term: A program that enables the operating system to control a device.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "E — driver.", marking_notes: "Accept only E.",
    steps: [s(1, "Which term describes a program that enables the operating system to control a device?", "Driver", ["Modulator", "Class", "Backdoor"], 0)],
  },
  {
    number: "1", sub_number: "1.2.8",
    text: "Match the description to a term: Advanced settings for shared files, used by the server administrator to manage the type of access to the files.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "B — user rights.", marking_notes: "Accept only B.",
    steps: [s(1, "Which term describes advanced settings for shared files used by the administrator to manage the type of access?", "User rights", ["AUP", "Copyright", "Driver"], 2)],
  },
  {
    number: "1", sub_number: "1.2.9",
    text: "Match the description to a term: A field of computer science that usually involves data analytics, machine learning and rule-based decision-making to create the ability of automated decision-making.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "D — artificial intelligence.", marking_notes: "Accept only D.",
    steps: [s(1, "Which term describes the field combining data analytics, machine learning and rule-based decisions for automated decision-making?", "Artificial intelligence", ["Convergence", "Scalability", "Synchronisation"], 1)],
  },
  {
    number: "1", sub_number: "1.2.10",
    text: "Match the description to a term: The ability of a system to increase or decrease its resources depending on the number of users.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "C — scalability.", marking_notes: "Accept only C.",
    steps: [s(1, "Which term describes a system's ability to increase or decrease its resources depending on the number of users?", "Scalability", ["Convergence", "Synchronisation", "Transaction"], 0)],
  },

  // ============ SECTION B: SYSTEMS TECHNOLOGIES (25 marks) ============

  {
    number: "2", sub_number: "2.1.1a",
    text: "The local recycling club runs a gaming centre; you must buy computers for online gaming. Computers are built with slots that hold the RAM. Give the acronym for the slots that hold the RAM.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "DIMM slots.", marking_notes: "Accept DIMM.",
    steps: [s(1, "What is the acronym for the slots that hold the RAM?", "DIMM", ["PCI", "SATA", "USB"], 1)],
  },
  {
    number: "2", sub_number: "2.1.1b",
    text: "What is the base unit of measurement used to measure the size of the RAM?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Bytes (also MB / GB).", marking_notes: "Accept byte, MB or GB.",
    steps: [s(1, "What is the base unit used to measure the size of RAM?", "Byte", ["Hertz", "Bit per second", "Pixel"], 0)],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Give TWO hardware specifications that should be considered when choosing a GPU.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: speed/number of cores/type of processor; speed/size/type of RAM; slot type of the GPU.",
    marking_notes: "One mark per correct specification.",
    steps: [
      s(1, "Which is a hardware specification to consider when choosing a GPU?", "Speed/number of cores/type of the GPU's processor", ["The size of the computer's hard drive", "The brand of the keyboard", "The length of the monitor cable"], 2),
      s(1, "Which is another hardware specification to consider when choosing a GPU?", "The slot type the GPU fits into on the motherboard", ["The size of the computer case fan", "The version of the operating system", "The speed of the internet connection"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.1.3a",
    text: "A motherboard houses and connects the components of a computer. What is the component on the motherboard called that houses the CPU?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "ZIF socket.", marking_notes: "Accept ZIF socket.",
    steps: [s(1, "What is the component on the motherboard that houses the CPU?", "ZIF socket", ["DIMM slot", "PCI Express slot", "SATA connector"], 3)],
  },
  {
    number: "2", sub_number: "2.1.3b",
    text: "Explain why a point-to-point connection is used to connect the CPU to the RAM, rather than a bus as used for other components.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "The CPU needs to transfer large amounts of data to and from RAM (higher workload); a point-to-point connection is dedicated to a single component, whereas a bus is shared amongst many components.",
    marking_notes: "One mark per concept (see FLAG).",
    steps: [
      s(1, "Why does the CPU-to-RAM link need special treatment?", "The CPU transfers large amounts of data to and from RAM (high workload)", ["RAM only sends data once when the computer starts", "RAM is slower than the hard drive", "The CPU never reads data from RAM"], 1),
      s(1, "How does a point-to-point connection differ from a bus?", "A point-to-point connection is dedicated to a single component, while a bus is shared among many components", ["A point-to-point connection is shared among many components, while a bus is dedicated", "A point-to-point connection is wireless while a bus is wired", "A bus is faster because every component uses it at the same time"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "A specific operating system has been recommended for use at the centre. Define the term operating system.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Software that manages/controls all the activities of a computer system.", marking_notes: "Accept only this definition.",
    steps: [s(1, "What is an operating system?", "Software that manages and controls all the activities of a computer system", ["Hardware that stores all the programs of a computer", "Software that is used only to browse the internet", "A program that translates source code into machine code"], 2)],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "State any TWO functions of an operating system.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: provides a user interface; manages processes and tasks; manages memory; manages input/output and hardware/software; manages storage; manages security.",
    marking_notes: "One mark per correct function.",
    steps: [
      s(1, "Which is a function of an operating system?", "Provides a user interface", ["Designs web pages", "Compiles source code into executable files", "Creates backups on cloud servers only"], 1),
      s(1, "Which is another function of an operating system?", "Manages memory", ["Prevents all malware from being written", "Produces graphics for games only", "Registers domain names"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "The CPU is dependent on the RAM to process applications. What is the memory called that is created when the operating system reserves a portion of the storage to be used as memory (RAM)?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Virtual memory.", marking_notes: "Accept only virtual memory.",
    steps: [s(1, "What is memory created from reserved storage space, used as RAM, called?", "Virtual memory", ["Cache memory", "Video memory (VRAM)", "Read-only memory (ROM)"], 2)],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "Explain how the process of artificially increasing the RAM is used to ensure the smooth functioning of the computer system.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "When more applications are opened the system runs out of available RAM. Processes not actively being used are moved to virtual memory (special storage) to open up space in RAM for other applications.",
    marking_notes: "One mark per concept.",
    steps: [
      s(1, "When is the extra memory needed?", "When many applications are open and the system runs out of available RAM", ["When the computer is switched off", "When the CPU temperature is too low", "When the monitor resolution is changed"], 0),
      s(1, "How does the extra memory keep the system running smoothly?", "Processes not actively in use are moved to the special storage, freeing RAM for other applications", ["All open applications are closed automatically to free RAM", "The CPU clock speed is permanently doubled", "The RAM chips are cooled with the hard drive"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "A software bug was found while testing software. What is a software bug?",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "An error in software.", marking_notes: "Accept an error/fault in software.",
    steps: [s(1, "What is a software bug?", "An error in the software", ["A virus that infects the software", "An update that adds new features", "A licence restriction on the software"], 1)],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Give a practical example of how the software bug could be revealed to the user when running the software.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: incorrect/inaccurate calculated values; system crash/run-time error; system malfunction.",
    marking_notes: "Accept any one.",
    steps: [s(1, "How could a software bug be revealed to the user while running the software?", "Incorrect calculated values or a system crash", ["The software has a bright colour scheme", "The software takes up a lot of disk space when installed", "The software shows the licence agreement during installation"], 2)],
  },
  {
    number: "2", sub_number: "2.5",
    text: "The club management noticed an increase in unauthorised access to their computers and programs. What can be done to prevent unauthorised access to software at the centre?",
    marks: 1, topicKey: SI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: use passwords/access control; install anti-malware/anti-spyware; set up a firewall; physically restrict access.",
    marking_notes: "Accept any one.",
    steps: [s(1, "What can be done to prevent unauthorised access to the software?", "Use passwords/access control", ["Defragment the hard drives regularly", "Increase the RAM of each computer", "Change the desktop background of each computer"], 3)],
  },
  {
    number: "2", sub_number: "2.6.1",
    text: "Give TWO limitations related to the use of mobile devices when compared to devices such as PCs and laptops.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: small screen; small keyboard; limited processing power; limited storage; limited mobile OS; not expandable/upgradeable.",
    marking_notes: "One mark per correct limitation.",
    steps: [
      s(1, "Which is a limitation of mobile devices compared to PCs and laptops?", "Small screen", ["They cannot connect to the internet", "They cannot run any software", "They need a cable to make calls"], 0),
      s(1, "Which is another limitation of mobile devices compared to PCs and laptops?", "Limited processing power", ["They can only be used while plugged in", "They have no memory", "They cannot store any data at all"], 1),
    ],
  },
  {
    number: "2", sub_number: "2.6.2",
    text: "Smartphones have the functions and abilities of many different devices built into a single device. What is the term used for this design approach?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Convergence.", marking_notes: "Accept only convergence.",
    steps: [s(1, "What is the term for building the functions of many devices into one device?", "Convergence", ["Virtualisation", "Scalability", "Synchronisation"], 2)],
  },
  {
    number: "2", sub_number: "2.7.1",
    text: "The programmers decided to use a programming language which uses an interpreter instead of a compiler. What is the common goal of a compiler and an interpreter?",
    marks: 1, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "They both convert programs into machine code.", marking_notes: "Accept this statement.",
    steps: [s(1, "What is the common goal of a compiler and an interpreter?", "Both convert programs (source code) into machine code", ["Both check the spelling of comments in the program", "Both store the program on the hard drive", "Both display the program's output to the user"], 0)],
  },
  {
    number: "2", sub_number: "2.7.2",
    text: "Motivate why a compiler would be a better choice than an interpreter for programming in general.",
    marks: 2, topicKey: SD, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO of: a compiler compiles the whole program at once while an interpreter does it one line at a time; a compiler provides a list of errors while an interpreter stops at the first error; a compiled program does not need the compiler to execute while the interpreter is needed to run the program.",
    marking_notes: "One mark per correct reason.",
    steps: [
      s(1, "Which is a reason a compiler is better than an interpreter?", "A compiler translates the whole program at once, while an interpreter works one line at a time", ["A compiler translates one line at a time, while an interpreter translates the whole program", "A compiler only works on programs without any errors", "A compiler cannot create files that run on other computers"], 1),
      s(1, "Which is another reason a compiler is better than an interpreter?", "A compiler gives a list of errors, while an interpreter stops at the first error", ["A compiler stops at the first error, while an interpreter lists all errors", "A compiled program always needs the compiler installed to run", "A compiler can only be used with web pages"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.8.1",
    text: "Why is it necessary to clean up and arrange the items on a desktop computer?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: easy to locate programs; better organisation; avoid clutter; increase storage space/remove unnecessary files.",
    marking_notes: "Accept any one.",
    steps: [s(1, "Why should items on a desktop computer be cleaned up and arranged?", "It is easier to locate programs and files and avoids clutter", ["It permanently increases the CPU clock speed", "It stops all malware from infecting the computer", "It adds more RAM to the computer"], 3)],
  },
  {
    number: "2", sub_number: "2.8.2",
    text: "Explain why an operating system requires a file extension.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "For the operating system to select the correct application to open the file with; also accept: for the operating system to identify the type of file to be able to view the file.",
    marking_notes: "One mark per concept (see FLAG).",
    steps: [
      s(1, "What does the operating system use the file extension to do?", "Identify the type of file", ["Measure the size of the file", "Encrypt the contents of the file", "Count the number of times the file was opened"], 2),
      s(1, "Why is that needed?", "To select the correct application to open the file with", ["To decide which user may delete the file", "To decide which drive the file is saved on", "To compress the file automatically when opened"], 0),
    ],
  },

  // ============ SECTION C: COMMUNICATION AND NETWORK TECHNOLOGIES (30 marks) ============

  {
    number: "3", sub_number: "3.1.1a",
    text: "The Smart Energy Company's network needs to be upgraded. Name the most suitable medium with which to connect thirty computers at the company's computer centre to form a local area network.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Applying and Analysing",
    model_answer: "UTP/Ethernet cables (also accept fibre).", marking_notes: "Accept UTP/Ethernet cables or fibre.",
    steps: [s(1, "Which medium is most suitable to connect thirty computers in a LAN?", "UTP/Ethernet cables", ["Bluetooth", "Infrared", "Satellite link"], 1)],
  },
  {
    number: "3", sub_number: "3.1.1b",
    text: "Name the most suitable medium with which to connect mobile devices to the company's network.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: radio waves; Wi-Fi; microwaves.", marking_notes: "Accept any one.",
    steps: [s(1, "Which medium is most suitable to connect mobile devices to the company network?", "Wi-Fi (radio waves)", ["Coaxial cable", "UTP cable", "Telephone line"], 2)],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "State TWO advantages of installing a wireless network.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: mobility; no cables used; cost saving; easy to set up/connect.",
    marking_notes: "One mark per correct advantage.",
    steps: [
      s(1, "Which is an advantage of a wireless network?", "Mobility", ["Faster speeds than any cabled network", "Better security than a cabled network", "No interference from other devices"], 0),
      s(1, "Which is another advantage of a wireless network?", "No cables are needed", ["Unlimited range from the access point", "It never needs a password", "It uses no electricity"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "State a function that a local network can still perform even when there is a faulty connection between the internet and the network.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: transfer files/communication between computers; sharing of files/applications/software resources; share hardware.",
    marking_notes: "Accept any one.",
    steps: [s(1, "Which function can a local network still perform without an internet connection?", "Sharing files and printers between the computers on the network", ["Browsing websites on external servers", "Sending e-mail to people outside the network", "Downloading software updates from the internet"], 3)],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "A consultant suggested a peer-to-peer network will work better than a client-server network (see diagram). Give TWO reasons why a peer-to-peer network is less suitable for a company with many users.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: less secure in managing access to resources; difficult to manage a large number of computers; no centralised storage/services; more prone to the spread of malware.",
    marking_notes: "One mark per correct reason.",
    image_url: `${IMG}/3-2-network-diagram.png`,
    steps: [
      s(1, "Which is a reason a peer-to-peer network is less suitable for many users?", "It is difficult to manage a large number of computers", ["It needs a dedicated server for every user", "It cannot share files between computers", "It requires a separate cable for each file"], 1),
      s(1, "Which is another reason a peer-to-peer network is less suitable?", "It does not provide centralised storage or services", ["It always costs more than a client-server network", "It cannot be connected with a switch", "It can only have two computers"], 2),
    ],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Name a peer-to-peer file transfer protocol used for sharing large files over the internet.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "BitTorrent.", marking_notes: "Accept BitTorrent.",
    steps: [s(1, "Which peer-to-peer protocol is used for sharing large files over the internet?", "BitTorrent", ["SMTP", "HTTPS", "VoIP"], 0)],
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "State ONE possible role of a server in a server-based network.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: provides resources (software, storage); log-on controller; manages security settings on the network.",
    marking_notes: "Accept any one.",
    image_url: `${IMG}/3-2-network-diagram.png`,
    steps: [s(1, "Which is a possible role of a server in a server-based network?", "Acts as a log-on controller", ["Prints documents on every client PC", "Replaces the need for any network cables", "Converts digital signals into analogue signals"], 1)],
  },
  {
    number: "3", sub_number: "3.2.4",
    text: "The peer-to-peer network uses a switch (marked X). State ONE disadvantage when using a switch in a network.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "When a switch fails, all the computers connected to the switch will not be able to access the network (single point of failure).",
    marking_notes: "Accept single point of failure.",
    image_url: `${IMG}/3-2-network-diagram.png`,
    steps: [s(1, "What is a disadvantage of using a switch in a network?", "If the switch fails, all computers connected to it lose network access (single point of failure)", ["A switch broadcasts all data to every computer, making the network unusable", "A switch can only connect two computers", "A switch makes wireless connections impossible"], 2)],
  },
  {
    number: "3", sub_number: "3.3.1a",
    text: "A protocol is a set of rules for encoding and decoding data for transmission across a network. State the purpose of the hypertext transfer protocol.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "HTTP defines how web pages and their content are transferred across the Web.", marking_notes: "Accept this.",
    steps: [s(1, "What is the purpose of HTTP?", "To define how web pages and their content are transferred across the Web", ["To send e-mails from a client to a server", "To translate domain names into IP addresses", "To encrypt all data stored on a hard drive"], 0)],
  },
  {
    number: "3", sub_number: "3.3.1b",
    text: "Why has HTTP been extended to the HTTPS protocol?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "HTTPS provides for secure/encrypted transfer of web content.", marking_notes: "Accept secure/encrypted transfer.",
    steps: [s(1, "Why was HTTP extended to HTTPS?", "To provide secure/encrypted transfer of web content", ["To make web pages load faster", "To allow web pages to contain images", "To make web pages dynamic"], 3)],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Explain why data needs to be encoded before being transmitted over the internet.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "To change the format of data for transmission over different mediums.",
    marking_notes: "Memo gives one sentence worth 2 marks; split into what encoding does and why (FLAG).",
    steps: [
      s(1, "What does encoding do to the data?", "Changes the format of the data", ["Deletes the duplicate data", "Increases the amount of data stored", "Moves the data to another folder"], 1),
      s(1, "Why must this be done before transmission?", "So the data can be transmitted over different mediums", ["So the data can never be read by anyone", "So the data is stored permanently on the router", "So the data is transmitted without a protocol"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "The company requires assistance to market themselves on the internet. Explain the difference between a website and a web page.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "A website is a collection of related web pages.", marking_notes: "Accept this.",
    steps: [s(1, "What is the difference between a website and a web page?", "A website is a collection of related web pages", ["A web page is a collection of related websites", "A website is stored locally while a web page is stored online", "A web page is written in HTML while a website is not"], 2)],
  },
  {
    number: "3", sub_number: "3.4.2a",
    text: "The company decided to use search engine optimisation (SEO) to promote their website. What is the purpose of SEO?",
    marks: 1, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "To ensure a high ranking in search results/increase traffic to the website by changing the design of web pages.", marking_notes: "Accept high ranking/more traffic.",
    steps: [s(1, "What is the purpose of SEO?", "To get a high ranking in search results and increase traffic to the website", ["To protect the website from hackers", "To reduce the size of the web pages", "To store the website on more servers"], 1)],
  },
  {
    number: "3", sub_number: "3.4.2b",
    text: "State ONE way in which SEO can be applied in the design of their webpages.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Adding specific keywords/phrases that relate to the way search engines search content.", marking_notes: "Accept keywords/phrases.",
    steps: [s(1, "How can SEO be applied in the design of web pages?", "Add specific keywords/phrases that search engines look for", ["Encrypt the web pages with a password", "Remove all text from the web pages", "Use only one very large image per page"], 0)],
  },
  {
    number: "3", sub_number: "3.5",
    text: "The consultant advised that a good way to save time when designing and updating the website is to use CSS language. Explain how CSS works.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "CSS separates the formatting from the HTML and gathers it in one place (.css file); a change to the CSS file updates all web pages.",
    marking_notes: "Concepts: formatting in a single style sheet; formatting applied to all web pages.",
    steps: [
      s(1, "Where is the formatting kept when CSS is used?", "In a single .css style sheet, separate from the HTML", ["Inside every web page separately", "In the web server's operating system", "In a database table"], 2),
      s(1, "What is the effect when the formatting is changed?", "The change is applied to all the web pages that use the style sheet", ["Only the page currently open is changed", "All pages must be rewritten in HTML", "The web server must be restarted"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.6.1",
    text: "A person can gain access to the network at his/her workplace using a VPN service while connecting from a public hotspot. State TWO security risks that may be encountered when using a public hotspot.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: network might not be secured/encrypted; exposure to hacking; possible spread of malware; shoulder surfing; signal/hotspot spoofing.",
    marking_notes: "One mark per correct risk.",
    steps: [
      s(1, "Which is a security risk of using a public hotspot?", "The network might not be secured/encrypted", ["The connection always uses a VPN", "Data is automatically backed up to the hotspot", "The device cannot be infected with malware"], 1),
      s(1, "Which is another security risk of a public hotspot?", "Exposure to hacking", ["The hotspot deletes the user's files", "The battery drains faster", "The websites always load slower"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.6.2",
    text: "Explain the process a VPN service follows to give access to a workplace network.",
    marks: 3, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "A VPN creates an encrypted connection to a private network over a public network/the internet, to gain access with the same security as a direct local connection.",
    marking_notes: "Concepts: communication is encrypted; connecting to a private network over a public network/internet; same security as a local connection.",
    steps: [
      s(1, "How is the communication protected in a VPN?", "The communication is encrypted", ["The communication is sent as plain text over the hotspot", "The communication is compressed into a single packet", "The communication is stored on the hotspot"], 3),
      s(1, "What does the VPN connect to, and over what?", "A private network, over a public network/the internet", ["A public network, over a private cable", "Another hotspot, over a local cable", "A local printer, over Bluetooth"], 0),
      s(1, "What level of security does the user get?", "The same security as a direct local connection", ["No security, as with any public hotspot", "Security only for e-mail", "Less security than a local connection but faster"], 1),
    ],
  },
  {
    number: "3", sub_number: "3.7.1",
    text: "The internet has evolved to where Web 3.0 (semantic web) is used increasingly. Explain why companies have not abandoned static web pages completely for their websites.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "The company will have information on the website that stays the same over time/does not need to be regularly updated.", marking_notes: "Accept this.",
    steps: [s(1, "Why do companies still use static web pages?", "Some information stays the same over time and does not need regular updates", ["Static pages are always more secure than dynamic pages", "Static pages can interact with users in real time", "Dynamic pages cannot be created without static pages"], 2)],
  },
  {
    number: "3", sub_number: "3.7.2",
    text: "Dynamic web pages are created by software running on a web server each time the page is accessed. State TWO advantages for the users of dynamic web pages when compared to static web pages.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: relevant/customised versions of web pages; interaction with users; content more likely up to date; users can also be contributors of content.",
    marking_notes: "One mark per correct advantage.",
    steps: [
      s(1, "Which is an advantage of dynamic web pages for users?", "Users can receive relevant/customised versions of the page", ["The pages never need a web server", "The pages are always smaller in size", "The pages can be viewed without a browser"], 1),
      s(1, "Which is another advantage of dynamic web pages?", "The content is more likely to be up to date", ["The content can never change", "The pages can only be edited by the web designer in HTML", "The pages load without any internet access"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.7.3a",
    text: "The semantic web uses metadata to conduct searches. What is metadata?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "A set of data that describes and gives additional information on other data.", marking_notes: "Accept this.",
    steps: [s(1, "What is metadata?", "Data that describes and gives additional information about other data", ["Data that has been encrypted for security", "Data stored in a backup", "Data that has been deleted by the user"], 0)],
  },
  {
    number: "3", sub_number: "3.7.3b",
    text: "Explain how a semantic search would take place.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "A search uses the metadata of the relevant content on the internet and relates it to the user's contextual information to present results uniquely suited to the user.",
    marking_notes: "Concepts: metadata matched to the user's request/query; tailored/suitable results.",
    steps: [
      s(1, "What is matched during a semantic search?", "The metadata of content is matched to the user's search request/context", ["Only the exact keywords typed by the user", "The user's IP address to the nearest server", "The size of the web page to the user's bandwidth"], 2),
      s(1, "What does the user receive as a result?", "Tailored results suited to the user", ["The same results as every other user", "A list of random web pages", "Only pages that were visited before"], 3),
    ],
  },

  // ============ SECTION D: DATA AND INFORMATION MANAGEMENT (20 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "A loyalty program at stores is a way in which invisible data capturing can take place. Give another example of invisible data captured about a customer during purchases, other than their personal details such as name, surname and address.",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: purchasing habits/preferences; shopping hour preferences; gender/family composition; whether the person has pets; or any valid example.",
    marking_notes: "Accept any valid example.",
    steps: [s(1, "Which is an example of invisible data captured during purchases?", "The customer's purchasing habits/preferences", ["The customer's name typed on the application form", "The customer's address written on the form", "The customer's signature on the loyalty card application"], 1)],
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "Give ONE reason why a company would want to capture invisible data on the purchases made by cardholders.",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: predict/plan other products to stock; anticipate the needs of clients; target marketing.",
    marking_notes: "Accept any valid reason.",
    steps: [s(1, "Why would a company capture invisible data on cardholders' purchases?", "To anticipate customers' needs and target marketing", ["To lower the number of customers", "To stop customers using the card", "To reduce the size of the database"], 0)],
  },
  {
    number: "4", sub_number: "4.1.3",
    text: "Except for card readers and credit cards, name TWO other mechanisms of invisible data capturing.",
    marks: 2, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: forms; e-toll; cell phone logging; online activities; GPS navigation; security camera footage; background voice capturing; access control systems; smart devices/IoT; RFID.",
    marking_notes: "One mark per correct mechanism.",
    steps: [
      s(1, "Which is a mechanism of invisible data capturing?", "E-toll gates", ["A printed receipt given to the customer", "A paper suggestion box", "A customer filling in a name tag"], 2),
      s(1, "Which is another mechanism of invisible data capturing?", "GPS navigation", ["A shop's printed price list", "A handwritten shopping list", "A radio advertisement"], 1),
    ],
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "The company uses a database to store details of their customers. State TWO ways of ensuring the validity of captured data.",
    marks: 2, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: format check; data type check; range check; presence check; check digit; uniqueness check.",
    marking_notes: "One mark per correct validation.",
    steps: [
      s(1, "Which is a way of ensuring the validity of captured data?", "A range check", ["Making a daily backup", "Encrypting the database", "Sorting the records alphabetically"], 0),
      s(1, "Which is another way of ensuring the validity of captured data?", "A presence check", ["Compressing the database file", "Printing a report of all records", "Changing the font of the form"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "How can two customers with the same name and surname be distinguished in the database?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "A unique value, a primary key, is allocated to each customer (or any correct unique field).", marking_notes: "Accept primary key/unique field.",
    steps: [s(1, "How can two customers with the same name and surname be distinguished?", "By allocating each customer a unique primary key", ["By sorting the table alphabetically", "By adding a second copy of the customer's record", "By deleting the older record"], 3)],
  },
  {
    number: "4", sub_number: "4.3.1a",
    text: "It was found that some of the data was repeated in the database. What is the term given to the unnecessary repetition of data across multiple records?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "Data redundancy.", marking_notes: "Accept data redundancy.",
    steps: [s(1, "What is the unnecessary repetition of data across multiple records called?", "Data redundancy", ["Data integrity", "Data validation", "Data mining"], 2)],
  },
  {
    number: "4", sub_number: "4.3.1b",
    text: "An update anomaly can occur when data is repeated unnecessarily. Explain how an update anomaly takes place.",
    marks: 2, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "An update anomaly occurs when a record cannot be changed at a single entry but has to be changed at multiple entries.",
    marking_notes: "Memo single sentence (2 marks); split into the cause and the consequence (FLAG).",
    steps: [
      s(1, "Why can an update anomaly occur?", "The same data is stored at several entries", ["Each piece of data is stored in only one place", "The table has no primary key", "The data type of the field is text"], 1),
      s(1, "What then has to happen when the data is changed?", "The change must be made at multiple entries instead of a single entry", ["The change is made once and all copies update automatically", "The record has to be deleted permanently", "The database has to be recreated from the backup"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.3.2a",
    text: "Identify the type of relationship presented in the following diagram (Worker — has a — Job).",
    marks: 1, topicKey: DI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "One-to-one.", marking_notes: "Accept only one-to-one.",
    image_url: `${IMG}/4-3-2a-worker-job.png`,
    steps: [s(1, "What type of relationship does diagram (a) show?", "One-to-one", ["One-to-many", "Many-to-many", "Many-to-one only"], 0)],
  },
  {
    number: "4", sub_number: "4.3.2b",
    text: "Identify the type of relationship presented in the following diagram (Company — has — Customers).",
    marks: 1, topicKey: DI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "One-to-many.", marking_notes: "Accept only one-to-many.",
    image_url: `${IMG}/4-3-2b-company-customers.png`,
    steps: [s(1, "What type of relationship does diagram (b) show?", "One-to-many", ["One-to-one", "Many-to-many", "Many-to-one only"], 1)],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "The database CollectionDB consists of two related tables, tblClients and tblCollections (see design view). Name the type of key formed when multiple fields are used together as the primary key.",
    marks: 1, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "Composite/compound key.", marking_notes: "Accept composite or compound.",
    image_url: `${IMG}/4-4-tblcollections.png`,
    steps: [s(1, "What is a primary key made up of multiple fields called?", "Composite key", ["Foreign key", "Secondary key", "Alternate key"], 0)],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Suggest another key field that can be created in tblCollections instead of using the three fields as the primary key.",
    marks: 1, topicKey: DI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "CollectionNumber or any other suitable new field; also accept an AutoNumber field.", marking_notes: "Accept a new unique ID field (e.g. CollectionNumber/AutoNumber).",
    image_url: `${IMG}/4-4-tblcollections.png`,
    steps: [s(1, "Which new key field could replace the three-field primary key?", "A new unique AutoNumber ID field such as CollectionNumber", ["CollectionWeight", "CollectionDate on its own", "ClientID on its own"], 3)],
  },
  {
    number: "4", sub_number: "4.4.3",
    text: "The field ClientID also serves as the foreign key in table tblCollections. What will the data type of the primary key field in table tblClients be?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Short Text.", marking_notes: "Accept Short Text (same as the foreign key).",
    image_url: `${IMG}/4-4-tblcollections.png`,
    steps: [s(1, "What data type must the primary key ClientID in tblClients have?", "Short Text", ["Date/Time", "Number (decimal)", "Yes/No"], 1)],
  },
  {
    number: "4", sub_number: "4.4.4",
    text: "Referential integrity is enforced between the two tables tblCollections and tblClients. Explain the term referential integrity.",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "The data in a foreign key field must already exist as an entry in the table where the field is the primary key; no record in the many table may link to a non-existent record in the one table.", marking_notes: "Accept either phrasing.",
    steps: [s(1, "What does referential integrity ensure?", "A foreign key value must already exist as a primary key value in the related table", ["Every field in a table has a validation rule", "A table can have only one primary key", "Records are automatically sorted by primary key"], 2)],
  },
  {
    number: "4", sub_number: "4.4.5a",
    text: "Parallel data sets: Multiple copies of the data are kept. TRUE or FALSE?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "True.", marking_notes: "Accept only true.",
    steps: [s(1, "Is it TRUE or FALSE that parallel data sets keep multiple copies of the data?", "TRUE", ["FALSE"], 0)],
  },
  {
    number: "4", sub_number: "4.4.5b",
    text: "Parallel data sets: Downtime is expected when a data set gets damaged. TRUE or FALSE?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "False.", marking_notes: "Accept only false.",
    steps: [s(1, "Is it TRUE or FALSE that downtime is expected when a parallel data set gets damaged?", "FALSE", ["TRUE"], 1)],
  },
  {
    number: "4", sub_number: "4.4.5c",
    text: "Parallel data sets: Parallel data sets use less storage than distributed databases. TRUE or FALSE?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "False.", marking_notes: "Accept only false.",
    steps: [s(1, "Is it TRUE or FALSE that parallel data sets use less storage than distributed databases?", "FALSE", ["TRUE"], 1)],
  },
  {
    number: "4", sub_number: "4.4.5d",
    text: "Parallel data sets: Parallel data sets are used when mining data. TRUE or FALSE?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "False.", marking_notes: "Accept only false.",
    steps: [s(1, "Is it TRUE or FALSE that parallel data sets are used when mining data?", "FALSE", ["TRUE"], 1)],
  },

  // ============ SECTION E: SOLUTION DEVELOPMENT (20 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "Procedures and functions are coding constructs often used as part of modular programming. Give a reason for the use of modular programming.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: avoids repetition of code; methods can be reused in more than one class; enhances readability; easier to debug; collaboration between programmers.",
    marking_notes: "Accept any one.",
    steps: [s(1, "Which is a reason for using modular programming?", "It avoids repetition of code", ["It makes the program run without a compiler", "It removes the need for variables", "It prevents all runtime errors"], 0)],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "State ONE difference between a procedure and a function.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: a procedure does not necessarily return a value whilst a function must; a function has a data type associated with its name; a procedure is an independent call whilst a function must form part of another statement.",
    marking_notes: "Accept any one.",
    steps: [s(1, "What is a difference between a procedure and a function?", "A function must return a value, while a procedure does not necessarily return one", ["A procedure must return a value, while a function never returns a value", "A function cannot have parameters, while a procedure can", "A procedure can only be called once in a program"], 1)],
  },
  {
    number: "5", sub_number: "5.2.1",
    text: "State whether the following statement is valid or invalid: X := Y = 2; where the data type of X is Boolean and Y is integer.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Valid.", marking_notes: "Accept only valid.",
    steps: [s(1, "Is the statement X := Y = 2; (X Boolean, Y integer) valid or invalid?", "Valid", ["Invalid"], 0)],
  },
  {
    number: "5", sub_number: "5.2.2",
    text: "State whether the following statement is valid or invalid: If Name1 > Name2 then ….. where Name1 and Name2 are declared as string type variables.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Valid.", marking_notes: "Accept only valid.",
    steps: [s(1, "Is If Name1 > Name2 then … (both strings) valid or invalid?", "Valid", ["Invalid"], 0)],
  },
  {
    number: "5", sub_number: "5.3.1",
    text: "Many programmers use defensive programming techniques in their code. Explain what defensive programming is.",
    marks: 2, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "Defensive programming uses code to avoid/handle errors that will prevent the normal execution of a program.",
    marking_notes: "Memo single sentence (2 marks); split into the method and the purpose (FLAG).",
    steps: [
      s(1, "What does defensive programming use to deal with problems?", "Code written to avoid/handle errors", ["Extra hardware to repair errors", "Comments that describe errors", "A second computer that runs the program"], 2),
      s(1, "What is the aim of this?", "To prevent errors from stopping the normal execution of the program", ["To make the program run faster", "To make the source code shorter", "To remove the need for testing"], 0),
    ],
  },
  {
    number: "5", sub_number: "5.3.2a",
    text: "While the program was running, an error stopped it with the message 'Execution halted – an overflow error occurred'. Give a possible reason for an overflow error.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: a value to be stored in a variable is outside the range of the data type/too large; an endless loop.", marking_notes: "Accept any one.",
    steps: [s(1, "What is a possible reason for an overflow error?", "A value too large for the range of the variable's data type", ["A missing semicolon at the end of a line", "A misspelt comment in the code", "Dividing a number by 1"], 1)],
  },
  {
    number: "5", sub_number: "5.3.2b",
    text: "State a way in which programming code can be used to prevent a runtime error.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: data validation; exception handling; any example of defensive programming e.g. testing for division by zero.", marking_notes: "Accept any one.",
    steps: [s(1, "How can code be used to prevent a runtime error?", "Use exception handling or validate data before using it", ["Add more comments to the code", "Rename the variables to be shorter", "Remove the declaration of the variables"], 3)],
  },
  {
    number: "5", sub_number: "5.4.1",
    text: "Study the RecycleCompany class diagram. State the purpose of a constructor method.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Remembering",
    model_answer: "To instantiate/create/initialise an object.", marking_notes: "Accept create/instantiate/initialise.",
    image_url: `${IMG}/5-4-class-diagram.png`,
    steps: [s(1, "What is the purpose of a constructor method?", "To instantiate/create (initialise) an object", ["To delete an object from memory", "To return the value of an attribute", "To display the object as a string"], 0)],
  },
  {
    number: "5", sub_number: "5.4.2",
    text: "Identify an accessor method from the class diagram.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "getCompanyName.", marking_notes: "Accept getCompanyName.",
    image_url: `${IMG}/5-4-class-diagram.png`,
    steps: [s(1, "Which method in the class diagram is an accessor method?", "getCompanyName():String", ["isValidContactNumber():Boolean", "Constructor(CompanyNum, CompanyName, Address, ContactNumber)", "NumberOfEmployees"], 2)],
  },
  {
    number: "5", sub_number: "5.4.3a",
    text: "Mutator methods will be required for the object. For which attribute will the use of a mutator method be the LEAST applicable?",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "CompanyNum (memo also accepts CompanyName with correct motivation in (b)).", marking_notes: "Accept CompanyNum.",
    image_url: `${IMG}/5-4-class-diagram.png`,
    steps: [s(1, "For which attribute is a mutator method LEAST applicable?", "CompanyNum", ["Address", "ContactNumber", "NumberOfEmployees"], 0)],
  },
  {
    number: "5", sub_number: "5.4.3b",
    text: "Motivate your answer to QUESTION 5.4.3(a).",
    marks: 1, topicKey: SD, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "The company number uniquely identifies the company and should not be changed.", marking_notes: "Accept this motivation.",
    image_url: `${IMG}/5-4-class-diagram.png`,
    steps: [s(1, "Why is a mutator for CompanyNum least applicable?", "It uniquely identifies the company and should not be changed", ["It changes every time the company's address changes", "It is a public attribute that anyone can edit", "It is a calculated value from the other attributes"], 1)],
  },
  {
    number: "5", sub_number: "5.4.4a",
    text: "State where in the class diagram access specified to methods/attributes violates the recommended/allowed access to methods/attributes.",
    marks: 1, topicKey: SD, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Some attributes are declared public (+ ContactNumber, + NumberOfEmployees); attributes should be private.", marking_notes: "Accept public attributes or the two examples.",
    image_url: `${IMG}/5-4-class-diagram.png`,
    steps: [s(1, "Where does the class diagram violate the recommended access?", "The attributes ContactNumber and NumberOfEmployees are declared public", ["The attributes CompanyNum and CompanyName are declared private", "The constructor is declared public", "The method toString is declared public"], 2)],
  },
  {
    number: "5", sub_number: "5.4.4b",
    text: "Explain why the incorrect access to methods/attributes identified in QUESTION 5.4.4(a) might cause a problem when working with an object of this class.",
    marks: 2, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "A public attribute is directly accessible from outside the class, which could have unintended/unforeseen effects.",
    marking_notes: "Memo single sentence (2 marks); split into two concepts (FLAG).",
    image_url: `${IMG}/5-4-class-diagram.png`,
    steps: [
      s(1, "What does declaring an attribute public allow?", "Direct access to the attribute from outside the class", ["Access only from inside the class", "Access only through the constructor", "No access from any code at all"], 0),
      s(1, "Why can that cause a problem?", "Outside code may change the value in unintended/unforeseen ways", ["The attribute can no longer be stored in the object", "The object can no longer be created", "The attribute is deleted when the program ends"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.5.1",
    text: "A company randomly selects one of 10 bins for paper recycling, excluding full bins (presently bins 5 and 8). A random number must be generated repeatedly until a bin number other than 5 or 8 is found. When would a sentinel controlled/conditional loop be preferred to other loops?",
    marks: 1, topicKey: SD, cognitiveLevelName: "Understanding",
    model_answer: "When the number of repetitions is not known in advance.", marking_notes: "Accept this.",
    steps: [s(1, "When is a sentinel-controlled/conditional loop preferred?", "When the number of repetitions is not known in advance", ["When the loop must run exactly 10 times", "When a loop counter must be displayed", "When the loop must never run at all"], 3)],
  },
  {
    number: "5", sub_number: "5.5.2",
    text: "The following code generates a random number in the range 1 to 10, excluding 5 and 8: Repeat iNumber := RandomRange(1,11); Until (iNumber <> 5) AND (iNumber <> 8); Rewrite the code using a WHILE loop.",
    marks: 4, topicKey: SD, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "iNumber := RandomRange(1,11); While (iNumber = 5) OR (iNumber = 8) do iNumber := RandomRange(1,11);",
    marking_notes: "Memo gives only the model code; the 4-mark split is the transcriber's (initial generation, WHILE condition, regenerate inside the loop, correct upper bound) (FLAG).",
    steps: [
      s(1, "A WHILE loop tests its condition before running. What must be done before the loop?", "Generate an initial random number with iNumber := RandomRange(1,11);", ["Nothing; start the WHILE loop with iNumber unset", "Set iNumber := 5; so the loop always starts", "Set iNumber := 0; and add one inside the loop"], 0),
      s(1, "Which WHILE condition correctly keeps looping until a valid bin is found?", "While (iNumber = 5) OR (iNumber = 8) do", ["While (iNumber <> 5) AND (iNumber <> 8) do", "While (iNumber = 5) AND (iNumber = 8) do", "While (iNumber <> 5) OR (iNumber <> 8) do"], 2),
      s(1, "What must the loop body do?", "Generate a new random number: iNumber := RandomRange(1,11);", ["Increment iNumber by 1", "Display iNumber with ShowMessage only", "Set iNumber to 5 again"], 1),
      s(1, "Which call correctly allows 10 to be generated inside the loop?", "RandomRange(1,11)", ["RandomRange(1,10)", "RandomRange(0,10)", "Random(10)"], 0),
    ],
  },

  // ============ SECTION F: INTEGRATED SCENARIO (40 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "e-Waste Technologies Africa specialises in the recycling of electronic waste. Define the term electronic waste.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "Electronic devices or items related to electronics that are obsolete/no longer needed.", marking_notes: "Accept this.",
    steps: [s(1, "What is electronic waste?", "Electronic devices or items that are obsolete/no longer needed", ["Any data deleted from a computer", "Paper used for printing computer documents", "Software that is no longer supported"], 1)],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Give ONE reason why electronic waste is often hazardous to the environment.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Contains toxic/harmful materials.", marking_notes: "Accept toxic/harmful materials.",
    steps: [s(1, "Why is electronic waste often hazardous to the environment?", "It contains toxic/harmful materials", ["It uses too much electricity when discarded", "It produces loud noise as it decays", "It takes up a lot of storage space on computers"], 0)],
  },
  {
    number: "6", sub_number: "6.1.3",
    text: "State TWO ways to reduce electronic waste.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: keep old devices/replace only if necessary; extend the life of electronics; donate/sell used electronics; recycle electronics and batteries; refill toner cartridges.",
    marking_notes: "One mark per correct way.",
    steps: [
      s(1, "Which is a way to reduce electronic waste?", "Donate or sell used electronics", ["Replace devices every time a new model is released", "Throw old devices in the general rubbish", "Bury old devices in the garden"], 1),
      s(1, "Which is another way to reduce electronic waste?", "Recycle electronics and batteries", ["Burn old circuit boards", "Keep charging a battery at all times", "Buy a duplicate of every device"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.1.4",
    text: "Explain what should be done with regard to a user's privacy with any electronic storage device before it is recycled/discarded.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "The drive must be formatted/cleared/factory reset (or any way to permanently destroy access to the data) so personal information cannot be retrieved by others.", marking_notes: "Accept format/clear/factory reset.",
    steps: [s(1, "What should be done to a storage device before it is recycled or discarded?", "Format/clear it (or factory reset) so personal data cannot be retrieved", ["Rename the files on the device", "Leave the files on it so the next user can reuse them", "Move the files into a folder named Private"], 2)],
  },
  {
    number: "6", sub_number: "6.2.1a",
    text: "Differentiate between the POP protocol and the IMAP protocol used for e-mail.",
    marks: 2, topicKey: CN, cognitiveLevelName: "Understanding",
    model_answer: "With POP your e-mails are downloaded to your device and deleted from the server (unless default settings are changed); with IMAP e-mails reside on the server and can be read/interacted with from multiple devices.",
    marking_notes: "One mark for POP, one for IMAP.",
    steps: [
      s(1, "What does POP do with e-mails?", "Downloads them to the device and deletes them from the server (by default)", ["Keeps them only on the server for access from many devices", "Sends them to the recipient's server", "Encrypts them before they are saved"], 3),
      s(1, "What does IMAP do with e-mails?", "Keeps them on the server so they can be accessed from multiple devices", ["Downloads them and deletes them from the server", "Sends them from a mail client to a mail server", "Stores them only on the local hard drive"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.2.1b",
    text: "Spam is a problem for the employees at the company. State ONE way in which spam affects the company negatively.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Any ONE: clogs the internet/generates unnecessary traffic; impacts employee productivity; could contain malware that infects devices.", marking_notes: "Accept any one.",
    steps: [s(1, "How does spam affect the company negatively?", "It reduces employee productivity as they sift through junk mail", ["It increases the speed of the network", "It makes e-mail attachments larger", "It encrypts the employees' e-mail"], 1)],
  },
  {
    number: "6", sub_number: "6.2.1c",
    text: "Fake news usually spreads rapidly over the internet. Suggest TWO possible ways how to identify fake news.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: consider the source; check the author's references; apply common sense; cross-reference with reputable news sites, citations, fact-checking websites or experts.",
    marking_notes: "One mark per correct way.",
    steps: [
      s(1, "Which is a way to identify fake news?", "Consider the source of the news", ["Check how many times it was shared", "Check whether it has a catchy headline", "Believe it if it appears on social media"], 0),
      s(1, "Which is another way to identify fake news?", "Cross-reference it with fact-checking websites or reputable news sites", ["Forward it to friends to see if they believe it", "Check whether it contains pictures", "Check whether it was posted recently"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.2.2a",
    text: "An employee attempted to send an e-mail with an attachment, but the error message shown appeared (attachment too large). State another way in which to send the attachment successfully over the internet.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Applying and Analysing",
    model_answer: "Upload the file to cloud storage/a service and share it (e.g. Google Drive, OneDrive, WeTransfer, FTP).", marking_notes: "Accept any valid cloud/transfer service or FTP.",
    image_url: `${IMG}/6-2-2-attachment-error.png`,
    steps: [s(1, "How else could the large attachment be sent successfully?", "Upload it to cloud storage and share it", ["Rename the file extension to .txt", "Send the e-mail again until it works", "Increase the screen resolution of the computer"], 3)],
  },
  {
    number: "6", sub_number: "6.2.2b",
    text: "State ONE risk of sending the attachment when using your suggested method in QUESTION 6.2.2(a).",
    marks: 1, topicKey: SI, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any ONE: limited storage on free versions; the service might not have good security practices; might not have good backup policies; might oversell its services.", marking_notes: "Accept any one (cloud-based risk).",
    image_url: `${IMG}/6-2-2-attachment-error.png`,
    steps: [s(1, "What is a risk of sending the attachment via cloud storage?", "The service might not have good security practices", ["The file is always corrupted when uploaded", "The file cannot be shared with anyone", "The file's extension is permanently deleted"], 1)],
  },
  {
    number: "6", sub_number: "6.2.2c",
    text: "Explain what a media repository is.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "An online storage location for the sharing/downloading/streaming of files.", marking_notes: "Accept this.",
    steps: [s(1, "What is a media repository?", "An online storage location for sharing, downloading or streaming files", ["A program that converts media to another format", "A device that plays audio and video files", "A type of memory inside a graphics card"], 0)],
  },
  {
    number: "6", sub_number: "6.2.2d",
    text: "Define the term ubiquity in terms of the way in which we work with files on the internet.",
    marks: 1, topicKey: CN, cognitiveLevelName: "Remembering",
    model_answer: "The cloud/files can be accessed from anywhere and at any time.", marking_notes: "Accept anywhere/anytime.",
    steps: [s(1, "What does ubiquity mean for working with files on the internet?", "Files can be accessed from anywhere and at any time", ["Files can only be accessed from one registered device", "Files are automatically deleted after use", "Files are stored only on the user's computer"], 2)],
  },
  {
    number: "6", sub_number: "6.3.1a",
    text: "A RAT (remote access Trojan) was detected on one of the computers on the company network. Briefly explain what a RAT is.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "Software that appears useful/innocent, is installed, and then allows an attacker to remotely control the infected computer.", marking_notes: "Accept this.",
    steps: [s(1, "What is a RAT?", "Software that looks innocent but lets an attacker remotely control the infected computer", ["A program that deletes temporary files", "Hardware that increases the speed of the network", "A program that encrypts files and demands payment only"], 1)],
  },
  {
    number: "6", sub_number: "6.3.1b",
    text: "State TWO ways in which a user's computer could be infected with Trojan malware.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: opening an infected e-mail attachment; downloading/installing a Trojan file (possibly from a malicious site); reacting to spoofed chat messages; opening/installing a Trojan file from an infected removable storage device.",
    marking_notes: "One mark per correct way.",
    steps: [
      s(1, "Which is a way a computer could be infected with Trojan malware?", "Opening an infected e-mail attachment", ["Running a disk defragmenter", "Updating the operating system from the official site", "Using a password manager"], 2),
      s(1, "Which is another way a computer could be infected with a Trojan?", "Downloading and installing a Trojan file from a malicious site", ["Switching the computer off every night", "Using a screen saver", "Printing a document"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Give TWO reasons why websites are often hacked.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: steal users' personal information (e-mail addresses, passwords, credit card details) for identity theft; deface the website or place political messages; reroute traffic to a phishing website.",
    marking_notes: "One mark per correct reason.",
    steps: [
      s(1, "Which is a reason why websites are hacked?", "To steal users' personal information for identity theft", ["To increase the speed of the website", "To reduce the website's storage requirements", "To improve the website's search ranking"], 1),
      s(1, "Which is another reason why websites are hacked?", "To deface the website or place political messages on it", ["To install free updates on the website", "To make backups of the website", "To translate the website into other languages"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "The company uses a distributed database as their clients are spread over a large geographical area. Explain what a distributed database is.",
    marks: 2, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "A distributed database is where a database is spread/stored across servers in separate locations.",
    marking_notes: "Memo single sentence (2 marks); split into spread across servers and separate locations (FLAG).",
    steps: [
      s(1, "How is the database stored in a distributed database?", "It is spread/stored across several servers", ["It is stored on one single server", "It is stored only on the users' flash drives", "It is stored only in the memory (RAM) of one computer"], 1),
      s(1, "Where are those servers located?", "In separate locations", ["All in the same room", "Inside a single computer", "On the same hard drive"], 3),
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "What is the main difference between the Duplication model and Partitioning model in terms of the data that they store?",
    marks: 2, topicKey: DI, cognitiveLevelName: "Understanding",
    model_answer: "Duplication: every separate site has a copy of the entire database. Partitioning: each site stores only its own data that it works with.",
    marking_notes: "One mark for each model.",
    steps: [
      s(1, "What does each site store in the Duplication model?", "A copy of the entire database", ["Only the data that the site works with", "Only the index of the database", "Only the records that were deleted"], 0),
      s(1, "What does each site store in the Partitioning model?", "Only its own data that it works with", ["A copy of the entire database", "A backup of every other site's data", "No data, only the database structure"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.4.3",
    text: "Discuss why there is a need for regular data synchronisation when a distributed database model is used.",
    marks: 2, topicKey: DI, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "When data is duplicated each site works with its own copy and the data sets start to differ over time. Synchronisation ensures changes are replicated over all data sets to prevent problems.",
    marking_notes: "One mark for the problem, one for the solution.",
    steps: [
      s(1, "What happens to duplicated data sets over time?", "Each site changes its own copy, so the data sets start to differ", ["The copies become identical automatically", "The copies are merged into one file", "The copies are deleted from all sites"], 1),
      s(1, "What does synchronisation do?", "Replicates changes over all data sets to prevent problems", ["Deletes the oldest copy of the data", "Splits the data between the sites", "Encrypts all the copies"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.5.1",
    text: "The company uses a system that gathers information from a variety of sources, analyses it and presents it in a structured format to support decision-making. What is such a system called?",
    marks: 1, topicKey: DI, cognitiveLevelName: "Remembering",
    model_answer: "Decision Support System (DSS).", marking_notes: "Accept DSS.",
    steps: [s(1, "What is a system that gathers, analyses and presents information to support decision-making called?", "Decision support system (DSS)", ["Transaction processing system (TPS)", "Database management system (DBMS)", "Operating system (OS)"], 3)],
  },
  {
    number: "6", sub_number: "6.5.2",
    text: "Explain how an expert system/knowledge-based system can be used in conjunction with the system in QUESTION 6.5.1 to ensure quick automated decision-making.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Human expertise is coded into software to create a rule-based system that can make decisions based on the input obtained from a system such as the one in 6.5.1.",
    marking_notes: "One mark for each concept.",
    steps: [
      s(1, "How is an expert system built?", "Human expertise is coded into software as a rule-based system", ["It is built by copying the DSS database", "It is built from the employees' passwords", "It is built by recording network traffic"], 0),
      s(1, "How does it use the DSS?", "It makes decisions based on the input obtained from the DSS", ["It deletes the output of the DSS", "It replaces the DSS's data sources", "It only prints the DSS's reports"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.6.1",
    text: "The employees were provided with notebook computers with an open-source operating system. What does open-source refer to?",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "Software available with access to the source code, which can be modified and adapted by a user.", marking_notes: "Accept this.",
    steps: [s(1, "What does open-source refer to?", "Software with accessible source code that users may modify and adapt", ["Software that may only be used for one month", "Software that is always sold at a very high price", "Software that cannot be copied or changed"], 2)],
  },
  {
    number: "6", sub_number: "6.6.2",
    text: "Name ONE type of file that the disk clean-up program will identify and remove during scanning.",
    marks: 1, topicKey: ST, cognitiveLevelName: "Remembering",
    model_answer: "Any ONE: temporary/redundant files; cached web pages.", marking_notes: "Accept any one.",
    steps: [s(1, "Which type of file will disk clean-up identify and remove?", "Temporary files", ["Installed application files", "The user's saved documents", "The operating system's core files"], 0)],
  },
  {
    number: "6", sub_number: "6.6.3a",
    text: "The digital divide results in some employees not being able to work from home. Define the term digital divide.",
    marks: 1, topicKey: SI, cognitiveLevelName: "Remembering",
    model_answer: "The gap between those who have access to computers and the internet, and those who do not.", marking_notes: "Accept this.",
    steps: [s(1, "What is the digital divide?", "The gap between those with access to computers and the internet and those without", ["The difference in speed between two internet providers", "The gap between the cost of laptops and desktops", "The difference between hardware and software"], 1)],
  },
  {
    number: "6", sub_number: "6.6.3b",
    text: "State TWO factors that contribute to the digital divide.",
    marks: 2, topicKey: SI, cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: lack of financial resources; differences in educational levels; age gaps; disabilities; lack of supporting infrastructure; fear of ICT.",
    marking_notes: "One mark per correct factor.",
    steps: [
      s(1, "Which factor contributes to the digital divide?", "Lack of financial resources to acquire technology", ["The colour of the devices available", "The brand of the devices available", "The number of keys on the keyboard"], 2),
      s(1, "Which is another factor that contributes to the digital divide?", "Lack of supporting infrastructure", ["An excess of free internet access", "Too many technicians in the area", "Too many computer shops in the area"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.7.1",
    text: "Hyper-automation and robotic process automation (RPA) are new emerging technologies. Explain the difference between hyper-automation and RPA.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "RPA is used for repetitive, rule-based processes using robotics. Hyper-automation uses AI to decide on the best strategy for tasks.",
    marking_notes: "One mark for each.",
    steps: [
      s(1, "What is RPA used for?", "Repetitive, rule-based processes using robotics", ["Letting AI decide the best strategy for tasks", "Creating virtual worlds for users", "Storing data across several servers"], 1),
      s(1, "What does hyper-automation do?", "Uses AI to decide the best strategy for tasks", ["Repeats only simple rule-based tasks", "Adds computer graphics to the real world", "Removes the need for any software"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.7.2",
    text: "An analysis of the demographics of most developed countries shows an ageing population. Discuss how RPA will help solve this problem in order to keep factories running.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO of: robots can replace workers; improve worker productivity; do tasks that require strength and good health; take over dangerous tasks.",
    marking_notes: "One mark per correct concept.",
    steps: [
      s(1, "How can RPA help with an ageing workforce?", "Robots can replace workers who retire", ["Robots increase the number of people who retire", "Robots make the factory use less electricity", "Robots make the factories smaller"], 3),
      s(1, "What else can RPA robots do for the factory?", "Take over dangerous or physically demanding tasks", ["Teach the older workers new languages", "Replace the factory's managers' meetings", "Create more retirement homes"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.8.1",
    text: "Extended reality includes virtual reality, augmented reality and mixed reality. Differentiate between virtual reality and augmented reality.",
    marks: 2, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Virtual reality replaces reality with software; augmented reality enhances reality by adding onto the real-world experience using software.",
    marking_notes: "One mark for each (examples also accepted).",
    steps: [
      s(1, "What does virtual reality do?", "Replaces reality with software", ["Adds computer-generated items onto the real world only", "Stores the real world in a database", "Connects two computers together"], 0),
      s(1, "What does augmented reality do?", "Enhances reality by adding onto the real-world experience using software", ["Completely replaces the real world with a computer-generated one", "Records the real world as a video only", "Removes all real objects from view"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.8.2",
    text: "How is mixed reality a further improvement on the realities named in QUESTION 6.8.1?",
    marks: 1, topicKey: ST, cognitiveLevelName: "Understanding",
    model_answer: "Mixed reality super-imposes computer-generated objects that users can interact with.", marking_notes: "Accept this.",
    steps: [s(1, "How does mixed reality improve on virtual and augmented reality?", "It super-imposes computer-generated objects that the user can interact with", ["It removes the need for any display", "It only works with printed images", "It is limited to showing text on screen"], 1)],
  },
];
