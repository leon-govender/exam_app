// Real DBE past paper: Information Technology P2, November 2024, National
// (English). Source: official DBE question paper + marking guidelines, fetched
// from stanmorephysics.com (source_url below points at the combined QP+memo
// PDF). QP is pages 1-17 (cover page: MARKS 150, TIME 3 hours, "17 pages");
// page 18 is the marking-guidelines title page ("16 pages"); pages 19-33 are
// the memo. Confirmed by reading the extracted text of every page.
//
// Paper structure: SIX compulsory sections, 150 marks, 3 hours. NOTE the
// section totals differ from the Nov 2025 paper; all agree with the paper's
// own "TOTAL SECTION X" lines and the memo's totals:
//   SECTION A: Short Questions (Q1)                                 20 marks
//   SECTION B: Systems Technologies (Q2)                            25 marks
//   SECTION C: Communication and Network Technologies (Q3)          26 marks
//   SECTION D: Data and Information Management (Q4)                 24 marks
//   SECTION E: Solution Development (Q5)                            22 marks
//   SECTION F: Integrated Scenario (Q6)                             33 marks
//                                                          GRAND TOTAL: 150
//
// The IT subject, cognitive levels and topics are defined identically in all
// IT paper files (copied verbatim from the Nov 2025 file). Each question is
// mapped to the single CAPS topic it belongs to, sub-question by sub-question
// for the mixed-topic Sections A and F.
//
// Grading: like the Nov 2025 IT paper, every question uses the stepped-MCQ
// pattern (steps: MarkingPointStep[]); no marking_points are used:
//   - 1.1.x are single-step four-option MCQs with the real options.
//   - 1.2.x ("give ONE word/term") are single-step MCQs: the memo term plus
//     three plausible wrong IT terms.
//   - 1.3.x TRUE/FALSE-with-correction use a 0-mark TRUE/FALSE gate step then,
//     where FALSE, a one-mark correction step; the TRUE statement is one step.
//   - "State/give TWO ..." questions are two single-mark steps, one per item;
//     distractors are invented wrong answers, never another memo-accepted
//     item.
//   - Definition/explain questions are split into one step per memo concept.
//   - 5.3 (boolean trace) and 5.4 (insertion algorithm) are broken into one
//     MCQ step per gradable element; 5.1.1 is a two-option MCQ (A/B) as set.
//
// Images (cropped from page renders into public/question-images/it-2024-p2/):
//   - 3-4-qr-code.png (Q3.4.1/3.4.2): the QR code on the ticket.
//   - 4-1-2-tblathletes.png (Q4.1.2a-e): the tblAthletes result extract.
//   - 5-2-stringgrid.png (Q5.2): the StringGrid screenshot.
//   - 5-5-trunner-class.png (Q5.5): the TRunner class code (also in the text).
// The TechGlow Pro / FitFlex Ultra product text (Q6.3) is summarised in the
// 6.3.1a question text (no image needed); the 5.4 array table is given in the
// 5.4 question text.
//
// FLAG notes for review:
//   - 1.2.5: memo accepts "Big data" OR "Data warehouse"; only "Big data" is
//     offered so a single option is correct.
//   - 2.3.2: memo gives only ONE mark in total for the boot-process /
//     start-up-instructions point; the options avoid that point.
//   - 5.3: memo has four ticks (two on the substitution line); this seed uses
//     four one-mark steps (interpretation of the mark split).
//   - 5.4: memo brackets the loop block as [4]; this seed uses seven one-mark
//     steps (loop start, loop end, target index, source index, placement,
//     value, increment).
//   - 2.5.2, 3.1.5: the memo awards 1 + 1 for ONE point with its explanation;
//     modelled as two steps of that point.
//   - Section totals (C = 26, D = 24, E = 22, F = 33) differ from the Nov 2025
//     split (25/20/30/30); they are the real 2024 values.
//   - 5.5.x use "TRunner" code reproduced from the image; the memo accepts any
//     accessor for fNumMarathons / fRunnerNO / fQualify (5.5.3a).

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
  year: 2024,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2025/04/NSC-IT-Grade-12-November-2024-P2-and-Memo.pdf" as string | null,
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

const IMG = "/question-images/it-2024-p2";

export const questions: QuestionSeed[] = [

  // ============ SECTION A: SHORT QUESTIONS (20 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "… is the loss of signal strength caused by internal or external factors.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "C — Attenuation.",
    marking_notes: "Accept only C.",
    steps: [
      { marks: 1, description: "What is the loss of signal strength caused by internal or external factors?", options: ["Electromagnetic interference","Eavesdropping","Attenuation","Crosstalk"], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "An e-mail protocol that downloads messages to the e-mail client is known as …",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "B — POP3.",
    marking_notes: "Accept only B.",
    steps: [
      { marks: 1, description: "Which e-mail protocol downloads messages to the e-mail client?", options: ["FTP","POP3","SMTP","VoIP"], correctIndex: 1 },
    ],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Embedded wires that allow data to travel in and out of the CPU are called …",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "D — buses.",
    marking_notes: "Accept only D.",
    steps: [
      { marks: 1, description: "What are the embedded wires that allow data to travel in and out of the CPU called?", options: ["bridges","arrays","streams","buses"], correctIndex: 3 },
    ],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Which type of software will allow users access to the code of an application by default?",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "A — Open-source.",
    marking_notes: "Accept only A.",
    steps: [
      { marks: 1, description: "Which type of software allows users access to the code by default?", options: ["Open-source","Shareware","Proprietary software","Freeware"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "What is the role of a compiler in software development?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Remembering",
    model_answer: "B — Translates source code into machine code.",
    marking_notes: "Accept only B.",
    steps: [
      { marks: 1, description: "What is the role of a compiler?", options: ["Compresses source code files","Translates source code into machine code","Encrypts and decrypts source code","Updates and adds source code"], correctIndex: 1 },
    ],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "What is the resulting data type of the DIV operator in Delphi programming?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Remembering",
    model_answer: "C — Integer.",
    marking_notes: "Accept only C.",
    steps: [
      { marks: 1, description: "What data type does the DIV operator result in?", options: ["Float","Boolean","Integer","String"], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "The following statements are given:\n\niNumber := 1;\nfor iRow := 1 to 4 do\n  for iCol := 1 to 2 do\n    inc(iNumber);\n\nThe value of iNumber after the execution of the provided code is:",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "C — 9 (1 + 4 x 2 = 9).",
    marking_notes: "Accept only C.",
    steps: [
      { marks: 1, description: "What is the value of iNumber after the nested loops finish?", options: ["7","8","9","11"], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "A distributed database with a growing list of records linked together, using cryptography, is known as …",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "C — blockchain.",
    marking_notes: "Accept only C.",
    steps: [
      { marks: 1, description: "Which term describes a distributed database of cryptographically linked records?", options: ["bitcoin","backbone","blockchain","BitTorrent"], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.1.9",
    text: "… is memory that loses its contents when the power is switched off.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "B — RAM.",
    marking_notes: "Accept only B.",
    steps: [
      { marks: 1, description: "Which of these is memory that loses its contents when the power is switched off?", options: ["EEPROM","RAM","ROM","SSD"], correctIndex: 1 },
    ],
  },
  {
    number: "1", sub_number: "1.1.10",
    text: "… is a programming language that is used to define the structure and content of a web page and adds dynamic behaviour to the web page.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "C — JavaScript.",
    marking_notes: "Accept only C.",
    steps: [
      { marks: 1, description: "Which language defines the structure/content of a web page and adds dynamic behaviour?", options: ["Hypertext mark-up language (HTML)","Extensible mark-up language (XML)","JavaScript","Structured query language (SQL)"], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.2.1",
    text: "Give ONE word/term for the following description: An instruction given to a DBMS to reverse a transaction and restore the database back to its previous state.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Rollback.",
    marking_notes: "Accept only \"rollback\".",
    steps: [
      { marks: 1, description: "Which term describes an instruction to a DBMS to reverse a transaction and restore the previous state?", options: ["Commit","Rollback","Backup","Checkpoint"], correctIndex: 1 },
    ],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "Give ONE word/term for the following description: A technique used by the operating system where tasks and processes are split up between the different CPU cores of a computer to be processed in parallel.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Multiprocessing.",
    marking_notes: "Accept only \"multiprocessing\".",
    steps: [
      { marks: 1, description: "Which technique splits tasks and processes between the CPU cores to be processed in parallel?", options: ["Multiprocessing","Multitasking","Virtual memory","Paging"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Give ONE word/term for the following description: A type of printer that uses filament/thermoplastic that melts when heated and turns solid when it cools down.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "3D printer.",
    marking_notes: "Accept only \"3D printer\".",
    steps: [
      { marks: 1, description: "Which type of printer melts filament/thermoplastic that turns solid when it cools?", options: ["Laser printer","Inkjet printer","Thermal printer","3D printer"], correctIndex: 3 },
    ],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Give ONE word/term for the following description: A type of technology that allows a host operating system to run other operating systems on the same device at the same time.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Virtualisation.",
    marking_notes: "Accept only \"virtualisation\".",
    steps: [
      { marks: 1, description: "Which technology lets a host operating system run other operating systems on the same device at the same time?", options: ["Cloud computing","Dual-booting","Virtualisation","Disk partitioning"], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "Give ONE word/term for the following description: The collection and storage of extremely large, diverse amounts of data over time that need to be processed, using complex algorithms.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Big data / Data warehouse.",
    marking_notes: "FLAG: memo accepts either \"Big data\" or \"Data warehouse\"; only \"Big data\" is offered as an option so exactly one choice is correct.",
    steps: [
      { marks: 1, description: "Which term describes collecting and storing extremely large, diverse amounts of data over time, processed with complex algorithms?", options: ["Metadata","Big data","Data validation","Data encryption"], correctIndex: 1 },
    ],
  },
  {
    number: "1", sub_number: "1.3.1",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE: A zombie is a network of computers that are remotely controlled by malware and then used by criminals to install and run malicious software.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "FALSE: Botnet.",
    marking_notes: "No mark for FALSE alone; the correct term (botnet) must also be given.",
    steps: [
      { marks: 0, description: "Is it TRUE or FALSE that a zombie is a network of computers remotely controlled by malware?", options: ["TRUE","FALSE"], correctIndex: 1 },
      { marks: 1, description: "What is the correct term for a network of computers remotely controlled by malware?", options: ["Botnet","Worm","Spyware","Trojan"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE: Green computing is the study and design of the workplace and the equipment that is used for the comfort and safety of people.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "FALSE: Ergonomics.",
    marking_notes: "No mark for FALSE alone; the correct term (ergonomics) must also be given.",
    steps: [
      { marks: 0, description: "Is it TRUE or FALSE that green computing is the study and design of the workplace and equipment for the comfort and safety of people?", options: ["TRUE","FALSE"], correctIndex: 1 },
      { marks: 1, description: "What is the correct term for the study and design of the workplace and equipment for comfort and safety?", options: ["Telecommuting","E-waste management","Digital citizenship","Ergonomics"], correctIndex: 3 },
    ],
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE: A hyperlink is a built-in connection to another web page, indicated as text underlined in blue, or as a graphic with a blue outline.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "TRUE.",
    marking_notes: "Accept only TRUE.",
    steps: [
      { marks: 1, description: "Is it TRUE or FALSE that a hyperlink is a built-in connection to another web page (underlined blue text or graphic with a blue outline)?", options: ["TRUE","FALSE"], correctIndex: 0 },
    ],
  },
  {
    number: "1", sub_number: "1.3.4",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE: A patch is a collection of updates combined into one package.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "FALSE: Service pack.",
    marking_notes: "No mark for FALSE alone; the correct term (service pack) must also be given.",
    steps: [
      { marks: 0, description: "Is it TRUE or FALSE that a patch is a collection of updates combined into one package?", options: ["TRUE","FALSE"], correctIndex: 1 },
      { marks: 1, description: "What is the correct term for a collection of updates combined into one package?", options: ["Driver","Firmware","Service pack","Hotfix"], correctIndex: 2 },
    ],
  },
  {
    number: "1", sub_number: "1.3.5",
    text: "Indicate whether the following is TRUE or FALSE, and correct it if FALSE: The WHERE clause in an SQL statement is used to test a condition that uses an aggregate function.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "FALSE: HAVING.",
    marking_notes: "No mark for FALSE alone; the correct term (HAVING) must also be given.",
    steps: [
      { marks: 0, description: "Is it TRUE or FALSE that the WHERE clause tests a condition that uses an aggregate function?", options: ["TRUE","FALSE"], correctIndex: 1 },
      { marks: 1, description: "Which SQL clause is used to test a condition that uses an aggregate function?", options: ["GROUP BY","HAVING","ORDER BY","DISTINCT"], correctIndex: 1 },
    ],
  },

  // ============ SECTION B: SYSTEMS TECHNOLOGIES (25 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "SCENARIO: Athletes from around the globe compete in a Global Marathon Series. The use of embedded ICT systems ensures a smooth and efficient experience for participants, organisers and spectators at a marathon.\n\nThe amount of memory in a computer system is crucial to ensure optimal performance. Explain the function of primary memory (RAM) in a computer system.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Primary memory is used to store data temporarily that is actively being used by the computer's CPU.",
    marking_notes: "Any TWO concepts: temporary storage; for data actively/currently used by the CPU; easily accessible for quick processing.",
    steps: [
      { marks: 1, description: "What kind of storage does RAM provide?", options: ["Temporary storage of data","Permanent storage of the operating system","Long-term archiving of files","Storage of the BIOS settings"], correctIndex: 0 },
      { marks: 1, description: "Which data does RAM hold?", options: ["Data that has not been used for months","Only the data of the BIOS","Only the data waiting to be printed","Data actively/currently being used by the CPU"], correctIndex: 3 },
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Discuss what cache memory is and how the use of cache memory contributes to the efficient functioning of a computer system.",
    marks: 3, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Cache memory is (a small amount of) high-speed memory. Any TWO of: located close to/on the CPU; stores frequently/previously accessed data and instructions; prevents a slower medium from slowing down a faster medium/faster access/prevents bottlenecking.",
    marking_notes: "One mark for high-speed memory plus any two of the three concepts.",
    steps: [
      { marks: 1, description: "What is cache memory?", options: ["A large amount of slow permanent storage","An area on the hard drive used as extra RAM","A small amount of high-speed memory","Memory that stores the BIOS"], correctIndex: 2 },
      { marks: 1, description: "Where is cache memory located?", options: ["On the hard drive","Close to / on the CPU","On the power supply","In the network card"], correctIndex: 1 },
      { marks: 1, description: "How does cache memory improve efficiency?", options: ["It stores frequently/previously accessed data and instructions, preventing a slower medium from bottlenecking a faster one","It increases the screen resolution","It permanently backs up data to the cloud","It replaces the need for a CPU"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "Explain why the use of virtual memory impacts negatively on the performance of a computer.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Accessing/using secondary storage is slower; virtual memory is accessed from storage / swapping of data between virtual memory and RAM.",
    marking_notes: "Any TWO concepts: virtual memory is accessed from storage; swapping of data between virtual memory and RAM; slower access.",
    steps: [
      { marks: 1, description: "Where is virtual memory located?", options: ["On the CPU","In the graphics card","On the motherboard's BIOS chip","On secondary storage"], correctIndex: 3 },
      { marks: 1, description: "Why does this reduce performance?", options: ["Secondary storage is faster than RAM, which overloads the CPU","Virtual memory deletes the data stored in RAM","Accessing/swapping data from secondary storage is slower than using RAM","It switches off the CPU cache"], correctIndex: 2 },
    ],
  },
  {
    number: "2", sub_number: "2.2",
    text: "Computers that are used to view a live marathon event are slow. It was suggested that a graphics processor unit (GPU) is installed in each of these computers. Name TWO key factors that determine the computational power of a GPU.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: memory size/amount of VRAM; memory type/bandwidth; clock speed/GPU processing speed; number of cores; type or generation of processor.",
    marking_notes: "One mark per correct factor, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a key factor that determines a GPU's computational power?", options: ["Size of the hard drive","Amount of VRAM (memory size)","Number of USB ports","Size of the computer case"], correctIndex: 1 },
      { marks: 1, description: "Which is another key factor?", options: ["Clock speed / GPU processing speed","Length of the network cable","Type of keyboard attached","Capacity of the monitor stand"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "A computer technician suggested that the computer used for the event should have a modular design with up-to-date software in the BIOS. State TWO advantages of the modular design of a computer.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: easy to repair; easy to upgrade; customise specifications; cheaper to replace a single part vs replacing an entire system.",
    marking_notes: "One mark per correct advantage, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is an advantage of a modular computer design?", options: ["Components are soldered permanently to the board","The whole computer must be replaced when one part fails","It cannot be customised","It is easy to repair"], correctIndex: 3 },
      { marks: 1, description: "Which is another advantage of a modular design?", options: ["It prevents any component from being replaced","It makes the system slower to configure","It is easy to upgrade","It is always more expensive to maintain"], correctIndex: 2 },
    ],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "State TWO functions of the BIOS.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: controls hardware at the lowest level; checks that the rest of the hardware is present and working (POST); finds the operating system and loads it; provides options for the user to configure (CMOS setup); locates software and drivers that interface with the OS once running; responsible for the boot process / stores start-up instructions (one mark only for the entire question).",
    marking_notes: "One mark per correct function, any two. FLAG: the memo awards only ONE mark in total for the boot-process/start-up-instructions point; the options below avoid that point.",
    steps: [
      { marks: 1, description: "Which is a function of the BIOS?", options: ["Compresses files on the hard drive","Checks that the hardware is present and working (POST)","Manages user accounts on the network","Translates source code into machine code"], correctIndex: 1 },
      { marks: 1, description: "Which is another function of the BIOS?", options: ["Finds the operating system and loads it","Encrypts all the files on the computer","Renders 3D graphics","Allocates IP addresses to devices"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.3.3",
    text: "Explain why the BIOS is stored on non-volatile memory.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "So that it can retain data even when the computer is powered off; to save the changes made to the instructions/settings that can be reloaded/affected during the next execution.",
    marking_notes: "Any TWO concepts: retaining data when powered off; saving changes made to the instructions/settings; to be reloaded/affected during the next execution.",
    steps: [
      { marks: 1, description: "What is the benefit of non-volatile memory for the BIOS?", options: ["It loses its data so the BIOS can start fresh every time","It runs faster than the CPU cache","It requires constant electricity to keep data","It retains its data even when the computer is powered off"], correctIndex: 3 },
      { marks: 1, description: "What does this allow regarding the BIOS settings?", options: ["Settings are reset to the factory defaults every time","The settings can never be changed","Changes made to the settings are saved and applied during the next start-up","The settings are copied to RAM permanently"], correctIndex: 2 },
    ],
  },
  {
    number: "2", sub_number: "2.4.1",
    text: "All the electronic devices used during a marathon event are connected to a network. Name a hardware component in a desktop computer that enables the computer to connect to a network.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Network Interface Controller/Card (NIC).",
    marking_notes: "Accept NIC.",
    steps: [
      { marks: 1, description: "Which hardware component lets a desktop computer connect to a network?", options: ["Graphics Processing Unit (GPU)","Network Interface Controller/Card (NIC)","Sound card","Power supply unit"], correctIndex: 1 },
    ],
  },
  {
    number: "2", sub_number: "2.4.2",
    text: "Besides hardware and software, what is another requirement for connecting a local network to the internet?",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Internet Service Provider (ISP).",
    marking_notes: "Accept ISP.",
    steps: [
      { marks: 1, description: "Besides hardware and software, what else is required to connect a local network to the internet?", options: ["An Internet Service Provider (ISP)","A printer server","A larger monitor","A dedicated file server on the LAN"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.5.1",
    text: "Cloud computing will be utilised at the marathons. Define cloud computing.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Cloud computing refers to the use of shared resources that are offered as services over the Internet/online. OR the process in which services on the internet are used to store, manage and process data.",
    marking_notes: "Two marks for the two concepts of either version.",
    steps: [
      { marks: 1, description: "What kind of resources does cloud computing use?", options: ["Resources that are installed only on the user's own computer","Resources available only on a LAN with no internet","Resources limited to a single user","Shared resources"], correctIndex: 3 },
      { marks: 1, description: "How are these resources made available?", options: ["Through a USB connection only","By installing hardware at each user's home","As services over the internet/online","Only through printed manuals"], correctIndex: 2 },
    ],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Motivate how the use of cloud computing will reduce the hardware requirements of the computers used during a marathon.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: cost saving of hardware as most of the processing is done in the cloud, lower hardware specifications; no/fewer local resources (e.g. storage space) required as storage is managed in the cloud; no dedicated back-up servers needed as cloud offers backup and recovery services (each worth 1 + 1).",
    marking_notes: "Any ONE point with its explanation (1 + 1).",
    steps: [
      { marks: 1, description: "What is the hardware benefit of cloud computing?", options: ["Each computer needs more RAM and storage","Fewer/no local resources (e.g. storage space) are required","Each computer needs its own backup server","Each computer needs a faster CPU for cloud services"], correctIndex: 1 },
      { marks: 1, description: "Why is this the case?", options: ["Storage (and processing) is managed in the cloud","Because the cloud only works offline","Because the cloud requires data to be kept on every local drive","Because the cloud deletes unused hardware"], correctIndex: 0 },
    ],
  },
  {
    number: "2", sub_number: "2.6.1",
    text: "The organisers of international marathons want to use virtual reality during the Global Marathon Series. Define virtual reality.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Virtual reality is an artificial environment that is created with software.",
    marking_notes: "Any TWO concepts: artificial/simulated environment; created with software/computer generated; appears as 3D space/interacted with via VR equipment.",
    steps: [
      { marks: 1, description: "What kind of environment is virtual reality?", options: ["The real physical environment around the user","A recording of a live video call","A purely text-based environment","An artificial/simulated environment"], correctIndex: 3 },
      { marks: 1, description: "How is it created?", options: ["With physical stage props only","With wireless routers only","With software (computer generated)","By photocopying real places"], correctIndex: 2 },
    ],
  },
  {
    number: "2", sub_number: "2.6.2",
    text: "Justify the use of virtual reality by giving TWO practical examples of how athletes can benefit from using this technology.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: interactive training modules designed for marathon preparation; athletes from around the world can participate without travelling (virtual marathons); creating opponents to compete against; simulating the real course/environment for preparation. Accept any relevant and correct answer.",
    marking_notes: "One mark per correct example, any two. Accept any relevant and correct answer.",
    steps: [
      { marks: 1, description: "Which is a practical benefit of VR for athletes?", options: ["Replacing the need to ever train physically","Simulating the real course/environment for preparation","Increasing the athlete's physical speed automatically","Printing the athlete's race number"], correctIndex: 1 },
      { marks: 1, description: "Which is another practical benefit of VR for athletes?", options: ["Athletes can participate in the series without travelling to the event (virtual marathons)","Athletes must travel further to take part","Athletes lose access to the race results","Athletes need no equipment of any kind to run"], correctIndex: 0 },
    ],
  },

  // ============ SECTION C: COMMUNICATION AND NETWORK TECHNOLOGIES (26 marks) ============

  {
    number: "3", sub_number: "3.1.1",
    text: "The finish line of one of the marathons will be at a sports stadium. A set of networked computers will be used to help manage the marathon.\n\nState the name of a cabled network that covers a limited geographical area, such as a sports stadium.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "LAN.",
    marking_notes: "Accept LAN.",
    steps: [
      { marks: 1, description: "Which cabled network covers a limited geographical area such as a stadium?", options: ["WAN (Wide Area Network)","PAN (Personal Area Network)","MAN (Metropolitan Area Network)","LAN (Local Area Network)"], correctIndex: 3 },
    ],
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Define the term bandwidth in the context of a network.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Bandwidth refers to the amount of data that can be sent over a network in a specific amount of time.",
    marking_notes: "One mark for amount of data, one mark for specific time.",
    steps: [
      { marks: 1, description: "What does bandwidth measure?", options: ["The physical length of the network cable","The number of devices on the network","The amount of data that can be sent over a network","The security level of the network"], correctIndex: 2 },
      { marks: 1, description: "Over what period is this measured?", options: ["Per kilometre of cable","In a specific amount of time","Per device connected","Per year of the network's use"], correctIndex: 1 },
    ],
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "State the unit of measurement of bandwidth in a network.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any ONE of: bps, Kbps, Mbps, Gbps (a / instead of p is accepted, e.g. Mb/s).",
    marking_notes: "Accept any one unit.",
    steps: [
      { marks: 1, description: "Which is a unit of measurement of network bandwidth?", options: ["Mbps (megabits per second)","MHz (megahertz)","GB (gigabytes)","dpi (dots per inch)"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.1.4",
    text: "Each computer on the network is assigned an IP address. Discuss the purpose of an IP address.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Uniquely identify the device on the network to allow communication on the network between the devices.",
    marking_notes: "One mark for unique identification, one mark for allowing communication.",
    steps: [
      { marks: 1, description: "What does an IP address do for a device?", options: ["Encrypts the device's data","Stores the device's files","Limits the device's processor speed","Uniquely identifies the device on the network"], correctIndex: 3 },
      { marks: 1, description: "What does this make possible?", options: ["Faster processing of programs","Automatic backup of all devices","Communication between the devices on the network","Removal of the need for cables"], correctIndex: 2 },
    ],
  },
  {
    number: "3", sub_number: "3.1.5",
    text: "A star topology has been suggested for this network. Motivate why a star topology will be a suitable layout for this network.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of (each worth 1 + 1): if a connection between a device and the switch fails, the other devices can still access the network; each device is easier to troubleshoot as it is connected via its own dedicated cable; devices can be added or removed easily by connecting/disconnecting them from a port on the switch; direct access as data does not have to travel through other devices.",
    marking_notes: "Any ONE point with its explanation (1 + 1).",
    steps: [
      { marks: 1, description: "Which is an advantage of a star topology?", options: ["If the central cable breaks, all devices continue to work","Devices can be added or removed easily","Data must pass through every other device","It requires no central device or cabling"], correctIndex: 1 },
      { marks: 1, description: "What explains this advantage?", options: ["A device is simply connected to/disconnected from an available port on the switch","Every device needs to be reconfigured individually","The whole network must be shut down and rebuilt","Devices share one long backbone cable"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "Users need to connect wirelessly to the network. State TWO technologies that can be used to connect to a wireless network.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: WiFi; Bluetooth; Satellite; Cellular (GPRS/Edge/3G/4G/5G); WiMAX. Do NOT accept hardware devices.",
    marking_notes: "One mark per correct technology. Hardware devices are not accepted.",
    steps: [
      { marks: 1, description: "Which is a wireless technology for connecting to a network?", options: ["UTP cable","Fibre optic cable","Network switch","WiFi"], correctIndex: 3 },
      { marks: 1, description: "Which is another wireless technology?", options: ["Router","Coaxial cable","Bluetooth","USB hub"], correctIndex: 2 },
    ],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Briefly describe how a person can connect to a wireless network from their device.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: move the device in range of an access point / switch WiFi on; select the name of the wireless network; type in the correct password.",
    marking_notes: "One mark per correct step, any two of the memo's list.",
    steps: [
      { marks: 1, description: "What must the user select to connect?", options: ["The MAC address of the router","The name of the wireless network","The brand of the router","The server's hard drive"], correctIndex: 1 },
      { marks: 1, description: "What must the user then do?", options: ["Type in the correct password","Plug in an Ethernet cable","Restart the router every time","Install a new operating system"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "A laptop's built-in wireless adaptor has been damaged. Name the peripheral device that can allow the laptop to still access the network wirelessly.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "A USB WiFi adaptor.",
    marking_notes: "Accept a USB WiFi adaptor.",
    steps: [
      { marks: 1, description: "Which peripheral can restore wireless access to the laptop?", options: ["A USB flash drive","A wired network switch","A webcam","A USB WiFi adaptor"], correctIndex: 3 },
    ],
  },
  {
    number: "3", sub_number: "3.3.1",
    text: "A website has been developed for the marathon event. The website allows participants to upload images and videos and share their experiences. Explain why a static website will not be a suitable choice for this website.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "A static website stays the same/is not updated regularly and does not allow the end-user to upload content to the website.",
    marking_notes: "Any TWO concepts: stays the same/not updated regularly; does not allow the end-user to upload content; no interactivity.",
    steps: [
      { marks: 1, description: "What is a limitation of a static website?", options: ["It changes automatically for every visitor","It is always connected to a database","It stays the same / is not updated regularly","It is only available on mobile devices"], correctIndex: 2 },
      { marks: 1, description: "What does this mean for users in this scenario?", options: ["It lets users edit any page directly","It does not allow users to upload content","It stores users' videos on their own devices","It makes the site load more slowly"], correctIndex: 1 },
    ],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Users will be requested to accept cookies when they visit the website. Explain what a cookie is and state TWO ways in which it can be used to benefit the user.",
    marks: 3, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "A cookie is a small text file saved on a user's device from the web to track the user's activities/preferences/settings and browsing history. Any TWO benefits: enhances the browsing experience by autocompleting/applying user preferences; saves time when navigating websites; recalls the user's profile on a revisit and applies preferences automatically; generates personalised adverts; creates recommendations based on previous browsing history.",
    marking_notes: "One mark for explaining a cookie, one mark per benefit (two).",
    steps: [
      { marks: 1, description: "What is a cookie?", options: ["A small text file saved on the user's device from the web to track preferences/activities","A virus that damages the user's files","A hardware component for storing passwords","A program that speeds up the internet connection"], correctIndex: 0 },
      { marks: 1, description: "Which is a way a cookie benefits the user?", options: ["It permanently deletes the user's browsing history","It increases the speed of the user's modem","It blocks all adverts permanently","It applies the user's preferences automatically, enhancing the browsing experience"], correctIndex: 3 },
      { marks: 1, description: "Which is another benefit?", options: ["It prevents the user from revisiting websites","It removes the need for an internet connection","It saves time by recalling the user's profile when the website is revisited","It encrypts the user's whole hard drive"], correctIndex: 2 },
    ],
  },
  {
    number: "3", sub_number: "3.4.1",
    text: "A ticketing system has been designed for the spectators at the event. Each ticket has an image similar to the one shown. What is this type of image called?",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "QR (Quick Response) code.",
    marking_notes: "Accept QR code.",
    steps: [
      { marks: 1, description: "What type of image is shown on the ticket?", options: ["Barcode","QR (Quick Response) code","Watermark","Pixel map"], correctIndex: 1 },
    ],
    image_url: `${IMG}/3-4-qr-code.png`,
  },
  {
    number: "3", sub_number: "3.4.2",
    text: "Describe TWO benefits of having such an image (the QR code) on the spectators' tickets.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: contactless; better security (very difficult to copy, different per ticket, not human readable); easy organisation (gate opens only when the correct code is presented, faster access); ticket saved on the user's phone, saves paper/cannot easily be lost; links to more data/information.",
    marking_notes: "One mark per correct benefit, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a benefit of a QR code on a ticket?", options: ["It is contactless (no physical contact needed)","It can be copied easily by anyone","It must be handwritten for each spectator","It is readable only by humans"], correctIndex: 0 },
      { marks: 1, description: "Which is another benefit of a QR code on a ticket?", options: ["It slows down entry at the gate","It makes every ticket identical","It requires a printed paper ticket only","Faster access/easier queue management, since the gate opens only for a correct code"], correctIndex: 3 },
    ],
    image_url: `${IMG}/3-4-qr-code.png`,
  },
  {
    number: "3", sub_number: "3.5.1",
    text: "The marathon can be streamed live or viewed on demand. Differentiate between live streaming and view on demand.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Live streaming: broadcasting of content in real time (as it happens). Viewing on demand: the content is pre-recorded / can be accessed at any time.",
    marking_notes: "One mark per correct description.",
    steps: [
      { marks: 1, description: "What is live streaming?", options: ["Content that has been pre-recorded and is stored for later","Downloading a file to watch offline only","Broadcasting of content in real time (as it happens)","Sending content by e-mail"], correctIndex: 2 },
      { marks: 1, description: "What is viewing on demand?", options: ["Content broadcast only in real time","Pre-recorded content that can be accessed at any time","Content that can be watched only once","Content that can only be viewed at the event"], correctIndex: 1 },
    ],
  },
  {
    number: "3", sub_number: "3.5.2a",
    text: "The server providing the streaming services has become unresponsive. State the term used for an attack that makes a website inaccessible by using a large number of computers to request data from the site at the same time.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "DDoS (Distributed Denial of Service).",
    marking_notes: "Accept DDoS.",
    steps: [
      { marks: 1, description: "Which attack makes a site inaccessible by using many computers to request data at once?", options: ["DDoS (Distributed Denial of Service)","Phishing","Spoofing","SQL injection"], correctIndex: 0 },
    ],
  },
  {
    number: "3", sub_number: "3.5.2b",
    text: "The server providing the streaming services has become unresponsive. Suggest TWO ways to prevent the server from becoming unresponsive in this context.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO relevant and correct examples of: increase the bandwidth to the server; upgrade the networking infrastructure; implement a queuing system; manage server resources; security solutions; access restriction; bot prevention; attack surface reduction; traffic management.",
    marking_notes: "One mark per correct way, any two relevant and correct examples.",
    steps: [
      { marks: 1, description: "Which is a way to prevent the server from becoming unresponsive?", options: ["Reduce the server's bandwidth","Allow unlimited requests from any source","Switch off the server's firewall","Increase the bandwidth to the server"], correctIndex: 3 },
      { marks: 1, description: "Which is another way to prevent this?", options: ["Remove all traffic management","Disable bot prevention","Implement a queuing system to access the website","Give all users administrator access"], correctIndex: 2 },
    ],
  },

  // ============ SECTION D: DATA AND INFORMATION MANAGEMENT (24 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "The school is organising a marathon. The entries of all the athletes are saved in a table called tblAthletes.\n\nGive TWO reasons why it would be more suitable to use a Google form rather than a printed entry form for the athletes to register for the marathon.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: takes less space/less paperwork; easy to retrieve information; easy to print reports and statistics; information available electronically for any application; easier to distribute to a larger group; saves time if not necessary to record manually; more environmentally friendly; minimises human error/more reliable data; entries can be done from any location.",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a reason a Google form is more suitable?", options: ["It requires athletes to be present to hand in the form","Information is available electronically and easy to retrieve","It uses more paper and storage space","It must be typed in manually by the school afterwards"], correctIndex: 1 },
      { marks: 1, description: "Which is another reason?", options: ["Entries can be done from any location","Entries can only be made at the school","Entries cannot be shared with a large group","Errors become more likely"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.1.2a",
    text: "tblAthletes extract (see the table image): fields AthleteNum, NameAndSurname, EmailAddress, CellNumber, MarathonType (Half-marathon / Full marathon), RaceTime and Position, for 7 of the 12 500 athletes (e.g. A001, Koos Nel, 627688255, Half-marathon, RaceTime 56, Position 2; A008, John Smith, 728854173, Full marathon, 205.55, 3).\n\nAn alphabetical list of data, sorted according to the athletes' surnames, is required by the school. Give a reason why this cannot be accomplished with the current design of the table and provide a solution to the anomaly.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE reason: multiple values in a field / can't be sorted on surname as it is the second value in the field. Solution: separate the name and surname into two separate fields.",
    marking_notes: "One mark for the reason, one for the solution.",
    steps: [
      { marks: 1, description: "Why can the table not be sorted on surname?", options: ["The AthleteNum field is not a number","The table has too few records to sort","Sorting is not possible on text fields","The field holds multiple values (name and surname together), and the surname is the second value"], correctIndex: 3 },
      { marks: 1, description: "What is the solution?", options: ["Delete the NameAndSurname field","Change the field's data type to Boolean","Separate the name and surname into two separate fields","Sort the table on Position instead"], correctIndex: 2 },
    ],
    image_url: `${IMG}/4-1-2-tblathletes.png`,
  },
  {
    number: "4", sub_number: "4.1.2b",
    text: "tblAthletes extract (see the table image): fields AthleteNum, NameAndSurname, EmailAddress, CellNumber, MarathonType (Half-marathon / Full marathon), RaceTime and Position, for 7 of the 12 500 athletes (e.g. A001, Koos Nel, 627688255, Half-marathon, RaceTime 56, Position 2; A008, John Smith, 728854173, Full marathon, 205.55, 3).\n\nThe data in the CellNumber field is not correct due to the first digit being omitted. Suggest a change in the design of the table to save the cellphone numbers correctly.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "The CellNumber field must have the data type text/string.",
    marking_notes: "Accept text/string data type.",
    steps: [
      { marks: 1, description: "Which change will save the cellphone numbers correctly?", options: ["Change the data type of CellNumber to Boolean","Change the data type of CellNumber to text/string","Change the data type of CellNumber to real/decimal","Change the data type of CellNumber to date/time"], correctIndex: 1 },
    ],
    image_url: `${IMG}/4-1-2-tblathletes.png`,
  },
  {
    number: "4", sub_number: "4.1.2c",
    text: "tblAthletes extract (see the table image): fields AthleteNum, NameAndSurname, EmailAddress, CellNumber, MarathonType (Half-marathon / Full marathon), RaceTime and Position, for 7 of the 12 500 athletes (e.g. A001, Koos Nel, 627688255, Half-marathon, RaceTime 56, Position 2; A008, John Smith, 728854173, Full marathon, 205.55, 3).\n\nIdentify a redundant field in the table and motivate why it is redundant.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "The Position field – it can be determined/calculated/derived using the data in the table.",
    marking_notes: "One mark for the field, one for the motivation.",
    steps: [
      { marks: 1, description: "Which field is redundant?", options: ["Position","AthleteNum","CellNumber","EmailAddress"], correctIndex: 0 },
      { marks: 1, description: "Why is it redundant?", options: ["It stores a value that cannot be calculated from anything","It is the primary key of the table","It contains duplicate athlete names","It can be calculated/derived from the data in the table (the RaceTime)"], correctIndex: 3 },
    ],
    image_url: `${IMG}/4-1-2-tblathletes.png`,
  },
  {
    number: "4", sub_number: "4.1.2d",
    text: "tblAthletes extract (see the table image): fields AthleteNum, NameAndSurname, EmailAddress, CellNumber, MarathonType (Half-marathon / Full marathon), RaceTime and Position, for 7 of the 12 500 athletes (e.g. A001, Koos Nel, 627688255, Half-marathon, RaceTime 56, Position 2; A008, John Smith, 728854173, Full marathon, 205.55, 3).\n\nState TWO fields from the table provided that will be used to identify the winner of the half-marathon.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "MarathonType AND RaceTime / Position.",
    marking_notes: "One mark for MarathonType, one for RaceTime/Position.",
    steps: [
      { marks: 1, description: "Which field is needed to select only the half-marathon athletes?", options: ["EmailAddress","CellNumber","MarathonType","NameAndSurname"], correctIndex: 2 },
      { marks: 1, description: "Which field identifies the winner among them?", options: ["AthleteNum","RaceTime (or Position)","EmailAddress","CellNumber"], correctIndex: 1 },
    ],
    image_url: `${IMG}/4-1-2-tblathletes.png`,
  },
  {
    number: "4", sub_number: "4.1.2e(i)",
    text: "tblAthletes extract (see the table image): fields AthleteNum, NameAndSurname, EmailAddress, CellNumber, MarathonType (Half-marathon / Full marathon), RaceTime and Position, for 7 of the 12 500 athletes (e.g. A001, Koos Nel, 627688255, Half-marathon, RaceTime 56, Position 2; A008, John Smith, 728854173, Full marathon, 205.55, 3).\n\nTwo characteristics of quality data are accuracy and consistency. Define the term accuracy and give an example using the RaceTime field from the table above.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Accuracy: the data needs to be precise; for example, the RaceTime 205.55 is not the same as the RaceTime 205.98.",
    marking_notes: "One mark for the definition, one for the example.",
    steps: [
      { marks: 1, description: "What is accuracy of data?", options: ["The data needs to be precise","The data must look the same in every table","The data must be stored in alphabetical order","The data must be as short as possible"], correctIndex: 0 },
      { marks: 1, description: "Which is a valid example using RaceTime?", options: ["RaceTime values must always start with the letter A","RaceTime must be stored as the athlete's name","All RaceTime values must be identical","A RaceTime of 205.55 is not the same as a RaceTime of 205.98"], correctIndex: 3 },
    ],
    image_url: `${IMG}/4-1-2-tblathletes.png`,
  },
  {
    number: "4", sub_number: "4.1.2e(ii)",
    text: "tblAthletes extract (see the table image): fields AthleteNum, NameAndSurname, EmailAddress, CellNumber, MarathonType (Half-marathon / Full marathon), RaceTime and Position, for 7 of the 12 500 athletes (e.g. A001, Koos Nel, 627688255, Half-marathon, RaceTime 56, Position 2; A008, John Smith, 728854173, Full marathon, 205.55, 3).\n\nDefine the term consistency and give an example using the AthleteNum field from the table above.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Consistency: the data in one part of a database should have the same format/not contradict/differ from the data in another part; for example, if AthleteNum starts with the letter \"A\" it should be applied the same throughout the database.",
    marking_notes: "One mark for the definition, one for the example.",
    steps: [
      { marks: 1, description: "What is consistency of data?", options: ["Data is correct to the last decimal place","Data is entered only once and then deleted","Data in one part of the database has the same format and does not contradict data in another part","Data is stored only in uppercase"], correctIndex: 2 },
      { marks: 1, description: "Which is a valid example using AthleteNum?", options: ["AthleteNum may start with different random symbols in each record","If AthleteNum starts with the letter \"A\", it should do so throughout the database","AthleteNum must be the same value for every athlete","AthleteNum should contain the athlete's race time"], correctIndex: 1 },
    ],
    image_url: `${IMG}/4-1-2-tblathletes.png`,
  },
  {
    number: "4", sub_number: "4.2.1",
    text: "Data integrity is a common term associated with database design and operations. Explain what physical data integrity refers to.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Physical data integrity refers to guarding against issues such as power failure, natural disasters, theft of hardware, etc. OR the protection of data accuracy and completeness while it is stored, retrieved and transmitted.",
    marking_notes: "Accept either version.",
    steps: [
      { marks: 1, description: "What does physical data integrity refer to?", options: ["Guarding against issues such as power failure, natural disasters and theft of hardware","Making sure all fields use the same data type","Making sure every record has a primary key","Removing duplicate records from tables"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.2.2",
    text: "State TWO hardware devices that can be used to ensure the physical integrity of data.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: UPS; RAID; access control devices (biometric, security doors, etc.); electronic locks; inverter and battery; external storage devices; power surge protecting devices.",
    marking_notes: "One mark per correct device, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which hardware device helps ensure the physical integrity of data?", options: ["Webcam","Optical mouse","Laser printer","UPS (Uninterruptible Power Supply)"], correctIndex: 3 },
      { marks: 1, description: "Which is another such device?", options: ["Graphics card","Speakers","RAID","Keyboard"], correctIndex: 2 },
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "Give ONE term for the following definition: The process of refining the structure of a database to minimise redundancy and improve integrity.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Normalisation.",
    marking_notes: "Accept only normalisation.",
    steps: [
      { marks: 1, description: "Which term describes refining a database structure to minimise redundancy and improve integrity?", options: ["Data mining","Normalisation","Data validation","Indexing"], correctIndex: 1 },
    ],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Give ONE term for the following definition: A field containing unique values that could be used as the primary key, but is not currently set as the primary key.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Alternate key.",
    marking_notes: "Accept only alternate key.",
    steps: [
      { marks: 1, description: "Which term describes a field with unique values that could be the primary key but is not set as it?", options: ["Alternate key","Foreign key","Composite key","Secondary index"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.4",
    text: "Explain how metadata adds value to data.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO ways: provides context and additional information that makes information easier to find/interpret/manage; helps users understand the origin, purpose and characteristics of data; helps make informed decisions about the data and its relevance; helps organise electronic resources, provide digital identification, and archive and preserve resources.",
    marking_notes: "One mark per correct way, any two of the memo's list.",
    steps: [
      { marks: 1, description: "How does metadata add value to data?", options: ["It increases the amount of data stored","It encrypts the data","It deletes outdated data automatically","It provides context that makes the information easier to find, interpret and manage"], correctIndex: 3 },
      { marks: 1, description: "Which is another way metadata adds value?", options: ["It removes the need to store the data itself","It makes the data editable by anyone","It helps users understand the origin, purpose and characteristics of the data","It speeds up the CPU"], correctIndex: 2 },
    ],
  },
  {
    number: "4", sub_number: "4.5",
    text: "There are different types of computer systems used in knowledge intensive organisations. Justify the use of an expert system, rather than a decision-support system, in such an organisation.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "A DS system does not give a solution but rather provides the user with information to use in their own decision making. An expert system will provide a fixed number of possible solutions gathered from experts in a certain field.",
    marking_notes: "One mark for each of the two statements.",
    steps: [
      { marks: 1, description: "What does a decision-support system do?", options: ["Gives a final solution gathered from experts","Provides information for the user to use in their own decision making, but not a solution","Replaces the need for any human","Stores only the organisation's financial data"], correctIndex: 1 },
      { marks: 1, description: "What does an expert system provide?", options: ["A fixed number of possible solutions gathered from experts in a field","Only raw unprocessed data","Information with no solution at all","Random suggestions"], correctIndex: 0 },
    ],
  },
  {
    number: "4", sub_number: "4.6",
    text: "A user's digital footprint is created through invisible data collection. Give TWO examples of where a digital footprint can be used.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: companies finding out more about employees before hiring them; data sold for advertising purposes; cybercriminals using the information for identity theft and phishing; context-aware search optimisation; companies using info to buy popular stock. Accept any other relevant and correct answer.",
    marking_notes: "One mark per correct example, any two. Accept other relevant and correct answers.",
    steps: [
      { marks: 1, description: "Where can a digital footprint be used?", options: ["To increase a user's computer processing speed","To physically repair a user's device","To remove all of a user's online data automatically","Companies use it to find out more about employees before hiring them"], correctIndex: 3 },
      { marks: 1, description: "Where else can a digital footprint be used?", options: ["To prevent a user from ever receiving adverts","To delete a user's social media posts","Collected data is sold for advertising purposes","To upgrade the user's operating system"], correctIndex: 2 },
    ],
  },

  // ============ SECTION E: SOLUTION DEVELOPMENT (22 marks) ============

  {
    number: "5", sub_number: "5.1.1",
    text: "The date of a marathon is assigned to a string variable in the format dd/mm/yyyy: sDate := '15/10/2024'; Which ONE of the following options (A or B) is the correct code to extract the month from the sDate variable?\n\nA: sMonth := copy(sDate,4,5);\nB: sMonth := copy(sDate,4,2);",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "B — sMonth := copy(sDate,4,2);",
    marking_notes: "Accept only B.",
    steps: [
      { marks: 1, description: "Which code correctly extracts the month from sDate?", options: ["sMonth := copy(sDate,4,5);","sMonth := copy(sDate,4,2);"], correctIndex: 1 },
    ],
  },
  {
    number: "5", sub_number: "5.1.2a",
    text: "The variable sMonth is a string variable holding the month extracted correctly from sDate. A syntax error in Line 1 of the CASE statement below prevents the code from being executed:\n\nLine 1: case sMonth of\n  // correct code to display month name\nend;\n\nGive a reason why a syntax error will occur in Line 1 of the above code.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE: only ordinal values can be used in a CASE statement; the string variable sMonth cannot be used.",
    marking_notes: "Accept either reason.",
    steps: [
      { marks: 1, description: "Why does a syntax error occur in Line 1?", options: ["The word \"case\" must be written in capital letters","Only ordinal values can be used in a CASE statement, so the string sMonth cannot be used","A CASE statement cannot contain comments","sMonth has not been declared with a length"], correctIndex: 1 },
    ],
  },
  {
    number: "5", sub_number: "5.1.2b",
    text: "The variable sMonth is a string variable holding the month extracted correctly from sDate. A syntax error in Line 1 of the CASE statement below prevents the code from being executed:\n\nLine 1: case sMonth of\n  // correct code to display month name\nend;\n\nExplain how Line 1 can be changed to make the code correct.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Convert the sMonth value to an integer.",
    marking_notes: "Accept converting sMonth to an integer.",
    steps: [
      { marks: 1, description: "How can Line 1 be corrected?", options: ["Convert the sMonth value to an integer","Convert the sMonth value to a longer string","Declare sMonth as a constant string","Replace the word of with the word then"], correctIndex: 0 },
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "A StringGrid component in Delphi is an effective way of presenting data in rows and columns. Write code that will display the text \"Koos Nel\" in the correct cell of the StringGrid component stgData, as shown in the screenshot (the text appears in column 1 of row 3; the fixed header row and fixed first column are index 0).",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "stgData.Cells[1,3] := 'Koos Nel';",
    marking_notes: "One mark for the correct cell reference, one for assigning the text.",
    steps: [
      { marks: 1, description: "Which cell reference is correct (Cells[column,row])?", options: ["stgData.Cells[3,1]","stgData.Cells[2,4]","stgData.Cells[1,2]","stgData.Cells[1,3]"], correctIndex: 3 },
      { marks: 1, description: "How is the text assigned?", options: ["stgData.Cells[1,3] = 'Koos Nel';","stgData.Cells[1,3] := Koos Nel;","stgData.Cells[1,3] := 'Koos Nel';","stgData.Cells[1,3] <- 'Koos Nel';"], correctIndex: 2 },
    ],
    image_url: `${IMG}/5-2-stringgrid.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "Determine the value of D in the following expression:\n\nD = (C = B MOD 5) AND NOT E OR (A – C = 1)\n\nwhere A = 5, B = 12, C = -4, E = FALSE. Show ALL the steps.",
    marks: 4, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "(-4 = 12 MOD 5) AND NOT FALSE OR (5-(-4) = 1) -> FALSE AND TRUE OR FALSE -> FALSE OR FALSE -> FALSE.",
    marking_notes: "FLAG: the memo gives four ticks (two on the substitution line, one on the second line, one on the final answer); this seed splits them into four single-mark steps (substitution, evaluating the brackets and NOT, applying AND, final value). The distribution of marks across the memo's ticks is therefore this seed's interpretation.",
    steps: [
      { marks: 1, description: "What is the expression after substituting the values?", options: ["(-4 = 12 DIV 5) AND NOT TRUE OR (5-4 = 1)","(-4 = 12 MOD 5) AND NOT FALSE OR (5-(-4) = 1)","(12 = -4 MOD 5) AND NOT FALSE OR (-4-5 = 1)","(-4 = 12 MOD 5) AND FALSE OR (5+(-4) = 1)"], correctIndex: 1 },
      { marks: 1, description: "What does the expression become after evaluating the brackets and NOT (12 MOD 5 = 2; 5-(-4) = 9)?", options: ["FALSE AND TRUE OR FALSE","TRUE AND TRUE OR FALSE","FALSE AND FALSE OR TRUE","TRUE AND FALSE OR TRUE"], correctIndex: 0 },
      { marks: 1, description: "What is the result after applying AND (AND before OR)?", options: ["TRUE OR FALSE","FALSE OR TRUE","TRUE OR TRUE","FALSE OR FALSE"], correctIndex: 3 },
      { marks: 1, description: "What is the final value of D?", options: ["TRUE","0","FALSE","-4"], correctIndex: 2 },
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "An array named arrNames has been declared to store up to eight names. It currently contains seven names (index 1 to 8, index 8 empty): 1 Sammy, 2 Brian, 3 Claire, 4 Thabiso, 5 Thomas, 6 Katleho, 7 Dean, 8 (empty). The variable iNumElements stores the number of names in the array.\n\nA new name must be inserted at any index/position of the array. Partially completed pseudocode:\n\nsName <- Input name to be inserted into array\niPosition <- Input index in array to insert the name\nif (iPosition > 8) OR (iPosition < 1)\n    Display error message\nelse\n    // write pseudocode to complete this part\n\nComplete the pseudocode using a loop to insert the name at the position that was entered, without losing any of the names currently stored. Example: inserting 'Ezio' at position 2 gives 1 Sammy, 2 Ezio, 3 Brian, 4 Claire, 5 Thabiso, 6 Thomas, 7 Katleho, 8 Dean.",
    marks: 7, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "loop iLoop from iNumElements downTo iPosition\n    arrNames[iLoop + 1] <- arrNames[iLoop]\narrNames[iPosition] <- sName\niNumElements <- iNumElements + 1",
    marking_notes: "Memo ticks: loop lower bound (iNumElements) and upper/end bound (iPosition) = 2; correct index reference iLoop+1 = 1; correct movement of names one place up = 1; arrNames[iPosition] replaced = 1; with the new name = 1; iNumElements incremented = 1. FLAG: this seed treats loop start, loop end, target index, source index, placement, value and increment as one mark each (memo's own bracketing is [4] for the loop block, 2 for the replacement, 1 for the increment).",
    steps: [
      { marks: 1, description: "Where should the loop start?", options: ["At iPosition, counting upwards","At iNumElements (the last used index), counting downwards","At 1, counting upwards","At 8, counting upwards"], correctIndex: 1 },
      { marks: 1, description: "Where should the loop end?", options: ["At iPosition","At 1","At iNumElements","At 8"], correctIndex: 0 },
      { marks: 1, description: "Which index receives the moved name?", options: ["arrNames[iLoop - 1]","arrNames[iPosition]","arrNames[iNumElements]","arrNames[iLoop + 1]"], correctIndex: 3 },
      { marks: 1, description: "Which element is moved up one place?", options: ["arrNames[iLoop - 1]","arrNames[iPosition + 1]","arrNames[iLoop]","sName"], correctIndex: 2 },
      { marks: 1, description: "After the loop, which element is replaced?", options: ["arrNames[iNumElements]","arrNames[iPosition]","arrNames[1]","arrNames[iPosition + 1]"], correctIndex: 1 },
      { marks: 1, description: "What value is placed there?", options: ["sName","iPosition","arrNames[iPosition + 1]","iNumElements"], correctIndex: 0 },
      { marks: 1, description: "What must happen to iNumElements?", options: ["iNumElements <- iNumElements - 1","iNumElements <- iPosition","iNumElements stays unchanged","iNumElements <- iNumElements + 1"], correctIndex: 3 },
    ],
  },
  {
    number: "5", sub_number: "5.5.1",
    text: "The following code is an extract of an object class Runner_U.pas:\n\ntype\n  TRunner = class(Tobject)\n  private\n    fRunnerNO: integer;\n    fName: String;\n    fQualify: boolean;\n    fNumMarathons: integer;\n  public\n    constructor Create(iRunnerNO: integer; sName: String; iNumMarathons: integer);\n    procedure setQualify(bQualify: boolean);\n    function getName: String;\n    function toString: String;\n  end;\n\nWhich keyword in the class definition above indicates that the attributes are not accessible outside the class?",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Remembering",
    model_answer: "Private.",
    marking_notes: "Accept private.",
    steps: [
      { marks: 1, description: "Which keyword makes the attributes inaccessible outside the class?", options: ["public","constructor","private","function"], correctIndex: 2 },
    ],
    image_url: `${IMG}/5-5-trunner-class.png`,
  },
  {
    number: "5", sub_number: "5.5.2",
    text: "Using the TRunner class definition (see the image and code): which method will be called to instantiate the Runner object?\n\ntype\n  TRunner = class(Tobject)\n  private\n    fRunnerNO: integer;\n    fName: String;\n    fQualify: boolean;\n    fNumMarathons: integer;\n  public\n    constructor Create(iRunnerNO: integer; sName: String; iNumMarathons: integer);\n    procedure setQualify(bQualify: boolean);\n    function getName: String;\n    function toString: String;\n  end;\n\n",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Remembering",
    model_answer: "The constructor/Create method.",
    marking_notes: "Accept constructor/Create.",
    steps: [
      { marks: 1, description: "Which method instantiates the Runner object?", options: ["setQualify","The constructor, Create","getName","toString"], correctIndex: 1 },
    ],
    image_url: `${IMG}/5-5-trunner-class.png`,
  },
  {
    number: "5", sub_number: "5.5.3a",
    text: "Using the TRunner class definition (see the image): one accessor method (getName) has already been declared. Write the declaration of any other accessor method that can be added to the class.\n\ntype\n  TRunner = class(Tobject)\n  private\n    fRunnerNO: integer;\n    fName: String;\n    fQualify: boolean;\n    fNumMarathons: integer;\n  public\n    constructor Create(iRunnerNO: integer; sName: String; iNumMarathons: integer);\n    procedure setQualify(bQualify: boolean);\n    function getName: String;\n    function toString: String;\n  end;\n\n",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE accessor for fNumMarathons, fRunnerNO or fQualify, e.g. function getNumMarathons: Integer; function getRunnerNO: Integer; function getQualify/isQualify: Boolean.",
    marking_notes: "One mark for a function with a suitable name, one mark for the correct data type.",
    steps: [
      { marks: 1, description: "Which is a correct way to start an accessor declaration?", options: ["function getNumMarathons","procedure getNumMarathons(iNum: integer)","procedure setNumMarathons","constructor getNumMarathons"], correctIndex: 0 },
      { marks: 1, description: "What data type must it return?", options: ["Boolean (: Boolean;)","String (: String;)","No return type","Integer (: Integer;)"], correctIndex: 3 },
    ],
    image_url: `${IMG}/5-5-trunner-class.png`,
  },
  {
    number: "5", sub_number: "5.5.3b",
    text: "Using the TRunner class definition (see the image): identify a mutator method in the code and explain the purpose of a mutator method.\n\ntype\n  TRunner = class(Tobject)\n  private\n    fRunnerNO: integer;\n    fName: String;\n    fQualify: boolean;\n    fNumMarathons: integer;\n  public\n    constructor Create(iRunnerNO: integer; sName: String; iNumMarathons: integer);\n    procedure setQualify(bQualify: boolean);\n    function getName: String;\n    function toString: String;\n  end;\n\n",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Understanding",
    model_answer: "setQualify; to change/set the value of the attribute/class variable.",
    marking_notes: "One mark for setQualify, one for the purpose.",
    steps: [
      { marks: 1, description: "Which method in the code is a mutator?", options: ["getName","toString","setQualify","Create"], correctIndex: 2 },
      { marks: 1, description: "What is the purpose of a mutator method?", options: ["To return the value of an attribute without changing it","To change/set the value of an attribute (class variable)","To create a new object of the class","To delete the class from memory"], correctIndex: 1 },
    ],
    image_url: `${IMG}/5-5-trunner-class.png`,
  },

  // ============ SECTION F: INTEGRATED SCENARIO (33 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "In preparation for a marathon, the organising committee has implemented an integrated information and communications technology (ICT) system to streamline various aspects of the event.\n\nA website has been developed for athletes to register for the marathon. Name TWO ways to determine whether a website is secure or not.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: https; security symbol; green address bar; view the SSL/digital certificate.",
    marking_notes: "One mark per correct way, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a way to tell that a website is secure?", options: ["The web address starts with https","The web address starts with http only","The web page has many pictures","The website loads very quickly"], correctIndex: 0 },
      { marks: 1, description: "Which is another way?", options: ["The site shows many pop-up adverts","The site asks for your password by e-mail","The domain name is very short","A security symbol (padlock) is shown / the SSL (digital) certificate can be viewed"], correctIndex: 3 },
    ],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "Describe how data is encrypted and decrypted using SSL.",
    marks: 4, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "The public key is used to encrypt data; the private and public key are linked using algorithms/processes/cryptography; the encrypted data can be sent to the recipient over the internet; the private key is used to decrypt the data.",
    marking_notes: "One mark per point (four).",
    steps: [
      { marks: 1, description: "Which key is used to encrypt the data?", options: ["The private key","The user's password only","The public key","No key is used"], correctIndex: 2 },
      { marks: 1, description: "How are the public and private keys related?", options: ["They are identical keys","They are linked using algorithms/processes/cryptography","They are unrelated random numbers","They are stored in the same cookie"], correctIndex: 1 },
      { marks: 1, description: "What happens to the encrypted data?", options: ["It is sent to the recipient over the internet","It is deleted before sending","It is stored on the sender's device only","It is printed and posted to the recipient"], correctIndex: 0 },
      { marks: 1, description: "Which key is used to decrypt the data?", options: ["The public key","The IP address","The URL","The private key"], correctIndex: 3 },
    ],
  },
  {
    number: "6", sub_number: "6.2.1",
    text: "The organisers of the marathon issue an RFID tag to each athlete. Explain how an RFID tag can be used to determine the time it took the athlete to complete the marathon.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "RFID tags are used to record the start and finish times of each athlete. The system captures the tag's unique identifier, allowing for precise time calculations.",
    marking_notes: "Any TWO concepts: unique identification of athletes/tag attached to an athlete; scanning/recording/capturing; start and finish times.",
    steps: [
      { marks: 1, description: "What does the RFID system capture?", options: ["The athlete's heart rate only","The athlete's e-mail address","The tag's unique identifier (identifying the athlete) when scanned","A photograph of the athlete"], correctIndex: 2 },
      { marks: 1, description: "How is the time calculated?", options: ["From the athlete's body weight","From the recorded start and finish times","From the distance of the route only","From the number of spectators"], correctIndex: 1 },
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "A few of the athletes are doubtful about the use of RFID tags. Briefly discuss how athletes can benefit from using RFID technology.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: accurate and automated timekeeping, eliminating manual recording; precise and reliable timing data for performance and rankings; immediate results; speeds up entry and reduces time in queues; captured data can be posted online in real time so spectators/family can follow progress.",
    marking_notes: "One mark per correct benefit, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a benefit of RFID for athletes?", options: ["Accurate, automated timekeeping, eliminating manual recording","Manual recording by officials is required for every athlete","Results are delayed until the next day","Athletes must stop at the finish line to be timed by hand"], correctIndex: 0 },
      { marks: 1, description: "Which is another benefit?", options: ["Results can never be shared online","Queues become longer at the start","Timing data becomes less reliable","Immediate results, and data can be posted online in real time for spectators"], correctIndex: 3 },
    ],
  },
  {
    number: "6", sub_number: "6.3.1a",
    text: "Study the properties of the TechGlow Pro (OLED touch screen, fitness tracking, smartphone compatibility, long battery) and FitFlex Ultra (waterproof, multi-sport modes, GPS connectivity, real-time heart rate/blood oxygen/stress data, customisable bands) wearable devices. The FitFlex Ultra has GPS connectivity. Discuss how GPS technology works.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "GPS technology uses signals from satellites to determine the device's location, enabling accurate tracking and mapping.",
    marking_notes: "One mark for satellite signals, one for determining the location.",
    steps: [
      { marks: 1, description: "What does GPS technology use?", options: ["Signals from the nearest cell tower only","Signals from a Wi-Fi router only","Signals from satellites","Signals from the device's battery"], correctIndex: 2 },
      { marks: 1, description: "What does it determine?", options: ["The wearer's blood pressure","The device's location, enabling accurate tracking and mapping","The device's battery level","The wearer's internet speed"], correctIndex: 1 },
    ],
  },
  {
    number: "6", sub_number: "6.3.1b",
    text: "The FitFlex Ultra has GPS connectivity. State TWO ethical issues related to wearing a device with GPS technology.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: invasion of privacy; data security; misuse of location information.",
    marking_notes: "One mark per correct issue.",
    steps: [
      { marks: 1, description: "Which is an ethical issue of wearing a GPS device?", options: ["Invasion of privacy","Increased battery life","Improved waterproofing","Customisable bands"], correctIndex: 0 },
      { marks: 1, description: "Which is another ethical issue?", options: ["The device is stylish","The device works with many sports","The device has an OLED screen","Misuse of location information (or data security)"], correctIndex: 3 },
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "The TechGlow Pro device is compatible with a smartphone. State which wireless technology will make this connection possible.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Bluetooth.",
    marking_notes: "Accept Bluetooth.",
    steps: [
      { marks: 1, description: "Which wireless technology connects the wearable to the smartphone?", options: ["Ethernet","Fibre optic","Bluetooth","Coaxial cable"], correctIndex: 2 },
    ],
  },
  {
    number: "6", sub_number: "6.3.3",
    text: "These wearable devices are able to measure items such as heart rate, sleep cycles, steps and calories burned. Name the technology inside wearable devices that make all these measurements possible.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Sensor/s.",
    marking_notes: "Accept sensors.",
    steps: [
      { marks: 1, description: "Which technology inside wearables makes these measurements possible?", options: ["Optical drives","Sensors","Network switches","Printers"], correctIndex: 1 },
    ],
  },
  {
    number: "6", sub_number: "6.3.4",
    text: "These wearable devices have limited processing power, but have access to the internet. Describe how the power of distributed computing can supplement the processing power of the wearable devices.",
    marks: 4, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Provides a link between the device and external servers/systems; supports devices by collecting data / AI capability; allows access to real-time information; shared battery life.",
    marking_notes: "One mark per point (four).",
    steps: [
      { marks: 1, description: "What link does distributed computing provide?", options: ["A link between the device and external servers/systems","A link between the device and its charger only","A link between the device and its strap","No link at all"], correctIndex: 0 },
      { marks: 1, description: "How does it support the device?", options: ["By removing all sensors","By disabling the internet","By reducing the screen size","By collecting data and providing AI capability"], correctIndex: 3 },
      { marks: 1, description: "What does it allow?", options: ["Only access to old, stored information","Only offline use","Access to real-time information","Only the display of the time"], correctIndex: 2 },
      { marks: 1, description: "What happens to the device's power demand?", options: ["The battery drains faster as all processing runs locally","Battery life is shared (processing is offloaded, saving the device's battery)","The battery is permanently disabled","Battery life becomes unlimited with no external help"], correctIndex: 1 },
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "The organisers of the marathon have decided to create a wiki website. State TWO advantages of a wiki site.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: collaborative editing and information sharing/uploading; real-time contribution and editing by multiple users; harnessing collective knowledge and expertise; creation of comprehensive and up-to-date information repositories; valuable for collaborative projects, research and knowledge sharing; cost effective; wikis track changes, holding contributors responsible.",
    marking_notes: "One mark per correct advantage, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is an advantage of a wiki site?", options: ["Collaborative editing and information sharing by many users","Only one administrator may ever edit it","Content can never be updated","Changes are never recorded"], correctIndex: 0 },
      { marks: 1, description: "Which is another advantage?", options: ["It is always expensive to run","It requires every author to be a programmer","It cannot be accessed online","It harnesses collective knowledge and expertise"], correctIndex: 3 },
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "Explain how content providers can improve the quality of the contributions made to a wiki site.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: encourage source/author verification; determine the currency/date of the information; implement moderation/validation/non-bias; foster a culture of responsibility; provide educational resources on critical evaluation.",
    marking_notes: "One mark per correct explanation, any two of the memo's list.",
    steps: [
      { marks: 1, description: "How can content providers improve contribution quality?", options: ["Allow anonymous edits with no review","Delete all references from articles","Encourage source/author verification","Lock all articles so nobody may edit them"], correctIndex: 2 },
      { marks: 1, description: "What else can they do?", options: ["Remove the date from all articles","Implement moderation/validation","Reward the longest articles regardless of accuracy","Hide the edit history"], correctIndex: 1 },
    ],
  },
  {
    number: "6", sub_number: "6.5",
    text: "The advancements in mobile computing have made the internet and information easily accessible to everyone. Explain the term information overload and motivate why it could pose a challenge to some individuals. Give a well-explained example as part of your answer.",
    marks: 4, topicKey: "social-implications", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Explain: information overload refers to the overwhelming abundance of information. Motivate: all the information makes it challenging for individuals to process and absorb, leading to difficulty in decision-making and information management. Example: researching a topic such as an IT PAT with many resources, and having to decide which sources are valid; or being easily distracted by excessive information. Accept any other relevant and correct example.",
    marking_notes: "One mark for the explanation, two for the motivation, one for a well-explained example.",
    steps: [
      { marks: 1, description: "What is information overload?", options: ["The overwhelming abundance of information","A shortage of information on a topic","The loss of information stored on a device","The encryption of information"], correctIndex: 0 },
      { marks: 1, description: "Why is it a challenge (processing)?", options: ["It makes processing easier for everyone","It frees up time for decision-making","It reduces the amount of data to read","It is hard for individuals to process and absorb all the information"], correctIndex: 3 },
      { marks: 1, description: "What effect does it have?", options: ["Faster and easier decision-making","Perfect information management","Difficulty in decision-making and information management","No effect on productivity"], correctIndex: 2 },
      { marks: 1, description: "Which is a well-explained example?", options: ["Reading a single reliable textbook and finding all the answers immediately","Researching a topic such as an IT PAT online and struggling to decide which of the many resources are valid","Switching off a device to avoid information","Finding that no websites exist on the topic"], correctIndex: 1 },
    ],
  },
  {
    number: "6", sub_number: "6.6.1",
    text: "It is the responsibility of the marathon organisers to ensure that the marathon statistics and other information are kept safe. Explain the term spoofing.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "An e-mail/website/source that appears to be from a legitimate organisation but is only a replica created with the intent to collect personal information.",
    marking_notes: "One mark for the replica/appears legitimate, one for the intent to collect personal information.",
    steps: [
      { marks: 1, description: "What is spoofing?", options: ["An e-mail/website that appears to be from a legitimate organisation but is only a replica","A program that records the keys typed","Software that locks files until a ransom is paid","A flood of requests that shuts down a server"], correctIndex: 0 },
      { marks: 1, description: "What is the intent of spoofing?", options: ["To speed up the victim's computer","To back up the victim's files","To update the victim's software","To collect personal information"], correctIndex: 3 },
    ],
  },
  {
    number: "6", sub_number: "6.6.2",
    text: "Ransomware is malware that encrypts files until a ransom amount has been paid. Why do criminals prefer the ransom amount to be paid in cryptocurrency?",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Cannot be traced / anonymity.",
    marking_notes: "Accept untraceable/anonymity.",
    steps: [
      { marks: 1, description: "Why do criminals prefer cryptocurrency for the ransom?", options: ["It is controlled by the victim's bank","It is refundable if the victim complains","It cannot be traced (anonymity)","It requires the criminal's identity to be registered"], correctIndex: 2 },
    ],
  },
  {
    number: "6", sub_number: "6.7",
    text: "Software updates should always be downloaded and installed on a device to ensure that an application has the latest features. What are TWO possible disadvantages of enabling automatic updates for software applications on a device?",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO of: an unexpected increase in internet/data usage; slows down/interrupts the device while updating; an unwanted restart of the device at an inconvenient time; does not support rollback features; installs updates that are not wanted/requested; loss of data that was not backed up; potential compatibility issues.",
    marking_notes: "One mark per correct disadvantage, any two of the memo's list.",
    steps: [
      { marks: 1, description: "Which is a disadvantage of automatic updates?", options: ["The device receives no security fixes","An unexpected increase in internet/data usage","The software becomes older over time","The user must manually install each update"], correctIndex: 1 },
      { marks: 1, description: "Which is another disadvantage?", options: ["The device may restart at an inconvenient time / slow down while updating","The updates are always smaller than expected","The device never needs to restart","The update is always the version the user wants"], correctIndex: 0 },
    ],
  },
];
