// Real DBE past paper: Information Technology P2, November 2023, National
// (English). Source: official DBE question paper + marking guidelines, fetched
// from stanmorephysics.com (source_url below points at the combined QP+memo
// PDF). QP is pages 1-17 (cover page confirmed: INFORMATION TECHNOLOGY P2,
// NOVEMBER 2023, MARKS 150, TIME 3 hours); page 18 is the marking-guidelines
// title page; pages 19-36 are the memo. Confirmed by reading the extracted
// text of every page.
//
// Paper structure: SIX compulsory sections (no choice), 150 marks, 3 hours.
// Section totals confirmed from the "INSTRUCTIONS AND INFORMATION" page, each
// section's own "TOTAL SECTION X" line and the memo, which all agree:
//   SECTION A: Short Questions (Q1)                                 20 marks
//   SECTION B: Systems Technologies (Q2)                            25 marks
//   SECTION C: Communication and Network Technologies (Q3)          30 marks
//   SECTION D: Data and Information Management (Q4)                 20 marks
//   SECTION E: Solution Development (Q5)                            22 marks
//   SECTION F: Integrated Scenario (Q6)                             33 marks
//                                                          GRAND TOTAL: 150
// (NB the section weightings differ from the Nov 2025 paper: C=30, E=22, F=33.)
//
// The IT subject, cognitive levels and topics are defined identically in all
// IT P2 seed files (copied verbatim from the Nov 2025 file). examSchedule is
// intentionally EMPTY here: the Nov 2025 file already carries IT's real exam
// dates.
//
// Grading: like the rest of this app, every question uses the stepped-MCQ
// pattern (`steps: MarkingPointStep[]`), one step per mark-earning point, four
// options each, with the correct option taken from the memo and distractors
// being realistic Grade 12 errors (never another memo-accepted answer).
// For brevity this file builds steps with a tiny local helper `mc(...)` that
// inserts the correct option at a chosen position among three wrong ones, so
// the correct answer is not always option A. The resulting objects have
// exactly the MarkingPointStep shape. Conversions used:
//   - Q1.1 (match a term from a 16-item COLUMN B list to a description) is
//     converted to four-option MCQs whose options are real COLUMN B terms; the
//     memo's term is the correct one.
//   - Q1.2 (A-D MCQ) keeps the real four options.
//   - Q1.3 ("give ONE word/term") -> single-step MCQ with the memo term plus
//     three plausible wrong IT terms.
//   - "State/give TWO ..." and "Any TWO ..." -> two single-mark steps.
//   - "Identify and motivate TWO LAN components" (3.1.3) and "Assess TWO VoIP
//     challenges" (3.3.2) -> four steps: (component/challenge, description) x2.
//   - 3.1.4(b) (draw an alternative network layout), 4.1.3(b) (redesign
//     tables), 5.1.4 (rewrite as conditional loop), 5.2 (trace table),
//     5.3 (reverse-word pseudocode) and 5.4 (UML class diagram) are
//     inherently drawing/writing tasks, so each is split into one MCQ step per
//     gradable element named by the memo's "Concepts".
//
// FLAG-for-review notes (memo oddities / judgement calls):
//   - FLAG 5.1.1(a): the memo writes "Line 1 (iCount := 0)" but the paper's
//     variable is iCounter. Transcribed as the paper's line 1 initialisation.
//   - FLAG 5.1.1 / 5.1.3: in the printed code the statement
//     redOutput.Lines.Add(sLine) (line 11) sits AFTER the closing "end" of the
//     outer loop, so only the last sLine is displayed; the memo accordingly
//     gives "*****" ("Only one line"). Transcribed faithfully.
//   - FLAG 5.1.3: the memo does not split the 2 marks; assumed 1 for the
//     string "*****" and 1 for it being displayed once on a single line.
//   - FLAG 5.2: the memo's concept list says "Is counter < 5" although the
//     question's column is "Is counter <= 5"; the traced values (True each
//     time) are the same under either reading. 4 steps follow the memo's four
//     concepts (counter column, counter<=5 column, arrNames[counter]=name
//     column, Display "Found").
//   - FLAG 5.3: the memo accepts two alternatives (loop from length downto 1
//     appending, or loop 1 to length prepending). The steps use the first
//     alternative; no option is the second alternative, so no wrong option is
//     also memo-accepted. The 2 marks for "correct adding of characters using
//     correct indexing" are split as 1 (indexing) + 1 (concatenation order).
//   - FLAG 5.4: the memo lists five concepts for 6 marks without a tick
//     split; assumed attribute names (1), attribute data types (1), private
//     attributes (1), public methods (1), constructor with the four
//     parameters (1), setStudyYear mutator with integer parameter (1). The
//     class heading TStudentCard is not separately credited in the memo.
//   - FLAG 6.4.3: the memo gives two alternatives, (a)=Information,
//     (b)=Knowledge OR (a)=Processing, (b)=Information/Knowledge. The steps
//     use alternative 1 and no option offers the alternative-2 labels.
//   - FLAG 6.5.3: memo accepts Partitioning OR Duplication (1+1). The steps
//     use Partitioning; "Duplication"/"Replication" are not offered as
//     options.
//   - FLAG 2.6: memo awards 2 marks for any ONE motivation (no/limited
//     separate ticks), so it is a single 2-mark step.
//   - FLAG 3.1.4(b), 4.1.3(b), 5.4: memo diagrams (central main switch with
//     four secondary switches; two-table split on RegisterClass; UML class)
//     are described in words in the options rather than imaged.
//   - FLAG 6.2.3: the memo gives a table of aspects (storage, speed of access,
//     internet dependency, ownership, cost, environment, quality, security);
//     two aspects (storage, speed of access) are tested, one step per side.
//
// Images (cropped from page renders into public/question-images/it-2023-p2/):
//   - 3-school-network-layout.png (Q3 / 3.1.x): the school network layout
//     diagram (server, Switches 1-5, PC counts per area).
//   - 4-tbllearners.png (Q4): the tblLearners extract, needed for 4.1.x.
//   - 5-2-flow-diagram.png (Q5.2): the 7-component search flow diagram.
// Other visuals were not needed as images: the Q3.5 advertisement banner is
// decorative (its text is in 3.5.1), the Q6.4 Surname/Grade table is given in
// the question text, and the Q6.4.3 four-box information-cycle diagram is
// described in the question text.

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
  year: 2023,
  exam_diet: "November",
  paper_number: "P2",
  duration_minutes: 180,
  total_marks: 150,
  source_url: "https://stanmorephysics.com/wp-content/uploads/2024/04/NSC-IT-Grade-12-November-2023-P2-and-Memo.pdf" as string | null,
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

const IMG = "/question-images/it-2023-p2";

// Builds a stepped-MCQ step: the correct option is inserted at index `pos`
// among three wrong options (so the correct answer position varies).
function mc(
  marks: number,
  description: string,
  correct: string,
  wrong: [string, string, string],
  pos = 0,
): MarkingPointStep {
  const options = [...wrong];
  options.splice(pos, 0, correct);
  return { marks, description, options, correctIndex: pos };
}

export const questions: QuestionSeed[] = [
  // ============ SECTION A: SHORT QUESTIONS (20 marks) ============

  {
    number: "1", sub_number: "1.1.1",
    text: "Choose the term that matches the description: The efficient and environmentally responsible design and disposal of computer equipment.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "H — green computing.",
    marking_notes: "Accept only green computing.",
    steps: [mc(1, "Which term describes the efficient and environmentally responsible design and disposal of computer equipment?", "Green computing", ["Virtualisation", "Ergonomics", "Volatile"], 2)],
  },
  {
    number: "1", sub_number: "1.1.2",
    text: "Choose the term that matches the description: The interconnection of computing devices embedded in everyday objects, enabling them to send and receive data via the internet.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "I — IoT.",
    marking_notes: "Accept only IoT.",
    steps: [mc(1, "Which term describes computing devices embedded in everyday objects that send and receive data via the internet?", "IoT", ["Virtualisation", "Augmented reality", "Virtual reality"], 1)],
  },
  {
    number: "1", sub_number: "1.1.3",
    text: "Choose the term that matches the description: A term used to describe memory that loses its data when the power is switched off.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "J — volatile.",
    marking_notes: "Accept only volatile.",
    steps: [mc(1, "Which term describes memory that loses its data when the power is switched off?", "Volatile", ["ROM", "Virtualisation", "Ergonomics"], 3)],
  },
  {
    number: "1", sub_number: "1.1.4",
    text: "Choose the term that matches the description: The study and design of computer equipment to enhance the comfort and safety of the user.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "C — ergonomics.",
    marking_notes: "Accept only ergonomics.",
    steps: [mc(1, "Which term describes the study and design of equipment to enhance the comfort and safety of the user?", "Ergonomics", ["Green computing", "Virtualisation", "Augmented reality"], 0)],
  },
  {
    number: "1", sub_number: "1.1.5",
    text: "Choose the term that matches the description: A collaborative website where users can publish and organise a body of content for free.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "D — wiki.",
    marking_notes: "Accept only wiki.",
    steps: [mc(1, "Which term describes a collaborative website where users can publish and organise a body of content for free?", "Wiki", ["Domain name", "DBMS", "URL"], 2)],
  },
  {
    number: "1", sub_number: "1.1.6",
    text: "Choose the term that matches the description: The real-time integration of text, graphics, audio and other virtual enhancements with real-world objects.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "L — augmented reality.",
    marking_notes: "Accept only augmented reality.",
    steps: [mc(1, "Which term describes the real-time integration of virtual enhancements with real-world objects?", "Augmented reality", ["Virtual reality", "IoT", "Virtualisation"], 3)],
  },
  {
    number: "1", sub_number: "1.1.7",
    text: "Choose the term that matches the description: The process of extracting specific information from a database based on a set of criteria or conditions.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "P — query.",
    marking_notes: "Accept only query.",
    steps: [mc(1, "Which term describes extracting specific information from a database based on a set of criteria or conditions?", "Query", ["DBMS", "ROM", "Domain name"], 1)],
  },
  {
    number: "1", sub_number: "1.1.8",
    text: "Choose the term that matches the description: The file extension of an image file.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "M — jpeg.",
    marking_notes: "Accept only jpeg.",
    steps: [mc(1, "Which term is the file extension of an image file?", "jpeg", ["mp4", "URL", "BitTorrent"], 0)],
  },
  {
    number: "1", sub_number: "1.1.9",
    text: "Choose the term that matches the description: Refers to the unique address of a web page.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "G — URL.",
    marking_notes: "Accept only URL. (Domain name is a distractor in COLUMN B.)",
    steps: [mc(1, "Which term refers to the unique address of a web page?", "URL", ["Domain name", "DBMS", "jpeg"], 2)],
  },
  {
    number: "1", sub_number: "1.1.10",
    text: "Choose the term that matches the description: A peer-to-peer protocol used for the sharing and transfer of large files across a network.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "O — BitTorrent.",
    marking_notes: "Accept only BitTorrent.",
    steps: [mc(1, "Which term is a peer-to-peer protocol used for sharing and transferring large files across a network?", "BitTorrent", ["URL", "wiki", "mp4"], 3)],
  },
  {
    number: "1", sub_number: "1.2.1",
    text: "… refers to a group of compromised computers or mobile devices connected to a network used to attack other networks.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "A — Botnet.",
    marking_notes: "Accept only A.",
    steps: [mc(1, "What refers to a group of compromised devices on a network used to attack other networks?", "Botnet", ["Zombie cookie", "Skynet", "RAID"], 0)],
  },
  {
    number: "1", sub_number: "1.2.2",
    text: "… is a temporary storage area.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "D — Cache memory.",
    marking_notes: "Accept only D.",
    steps: [mc(1, "Which is a temporary storage area?", "Cache memory", ["ROM", "SSD", "HDD"], 3)],
  },
  {
    number: "1", sub_number: "1.2.3",
    text: "Linux is an example of … software, which means its code is provided free for use, modification and redistribution.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "C — Open-source.",
    marking_notes: "Accept only C.",
    steps: [mc(1, "Linux is an example of which type of software (code free for use, modification and redistribution)?", "Open-source", ["Proprietary", "Shrink-wrapped", "Virtual"], 2)],
  },
  {
    number: "1", sub_number: "1.2.4",
    text: "Most of today's internet connections are … connections that are capable of transmitting large amounts of data across the network.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "C — broadband.",
    marking_notes: "Accept only C.",
    steps: [mc(1, "Most of today's internet connections capable of transmitting large amounts of data are … connections.", "broadband", ["dial-up", "ADSL", "coaxial"], 2)],
  },
  {
    number: "1", sub_number: "1.2.5",
    text: "The answer to the expression: 24 MOD 7 * 5 DIV 2",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "C — 7. (24 MOD 7 = 3; 3 * 5 = 15; 15 DIV 2 = 7, evaluated left to right.)",
    marking_notes: "Accept only C (7).",
    steps: [mc(1, "What is the value of 24 MOD 7 * 5 DIV 2?", "7", ["3", "6", "7.5"], 2)],
  },
  {
    number: "1", sub_number: "1.3.1",
    text: "Give ONE word/term for the following description: A third-party program that extends the built-in functionality of an application or browser.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Plug-in / Extension / Add-on.",
    marking_notes: "Accept plug-in, extension or add-on.",
    steps: [mc(1, "What term describes a third-party program that extends the built-in functionality of an application or browser?", "Plug-in", ["Device driver", "Operating system", "Firmware"], 1)],
  },
  {
    number: "1", sub_number: "1.3.2",
    text: "Give ONE word/term for the following description: A data structure that consists of a collection of tables that are joined through linked fields.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Relational database.",
    marking_notes: "Accept only relational database.",
    steps: [mc(1, "What term describes a collection of tables joined through linked fields?", "Relational database", ["Flat-file database", "Spreadsheet", "Data warehouse"], 0)],
  },
  {
    number: "1", sub_number: "1.3.3",
    text: "Give ONE word/term for the following description: A type of malware that prevents a user from accessing his or her data on a device until a fee is paid.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Ransomware.",
    marking_notes: "Accept only ransomware.",
    steps: [mc(1, "What type of malware blocks access to a user's data until a fee is paid?", "Ransomware", ["Spyware", "Adware", "Trojan"], 3)],
  },
  {
    number: "1", sub_number: "1.3.4",
    text: "Give ONE word/term for the following description: A creator's exclusive legal right to reproduce, publish or sell intellectual property.",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Copyright.",
    marking_notes: "Accept only copyright.",
    steps: [mc(1, "What term describes a creator's exclusive legal right to reproduce, publish or sell intellectual property?", "Copyright", ["Plagiarism", "Software licence", "Netiquette"], 1)],
  },
  {
    number: "1", sub_number: "1.3.5",
    text: "Give ONE word/term for the following description: The ability of a system to increase or decrease its resources depending on the number of users.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Scalability.",
    marking_notes: "Accept only scalability.",
    steps: [mc(1, "What term describes a system's ability to increase or decrease its resources depending on the number of users?", "Scalability", ["Virtualisation", "Redundancy", "Portability"], 2)],
  },

  // ============ SECTION B: SYSTEMS TECHNOLOGIES (25 marks) ============

  {
    number: "2", sub_number: "2.1.1",
    text: "A university called 'LearnMore' is replacing the desktop computers in its administration building. State TWO characteristics of a motherboard that should be considered when purchasing new desktop computers.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: type of ZIF socket; type of CPU supported / bus speed; type of chipset; types of slots; number of slots; available ports; number of DIMM/RAM slots; extra features (Wi-Fi/Bluetooth); number of SATA ports; form factor/physical size; on-board features like NIC.",
    marking_notes: "One mark per correct characteristic, any two of the memo's list.",
    steps: [
      mc(1, "Which is a motherboard characteristic to consider when buying new computers?", "Type of CPU supported", ["Screen resolution of the monitor", "Capacity of the printer's ink cartridge", "Colour of the computer case"], 1),
      mc(1, "Which is another motherboard characteristic to consider?", "Number of DIMM/RAM slots", ["Keyboard layout", "Operating system version installed", "Speaker wattage"], 2),
    ],
  },
  {
    number: "2", sub_number: "2.1.2",
    text: "Except for the CPU, name ONE other component that will process data in a computer system.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "GPU / Graphics card / Video card.",
    marking_notes: "Accept GPU, graphics card or video card.",
    steps: [mc(1, "Apart from the CPU, which other component processes data in a computer system?", "GPU (graphics card)", ["RAM module", "Power supply unit", "Hard disk drive"], 0)],
  },
  {
    number: "2", sub_number: "2.1.3",
    text: "The secondary storage capacity is an important consideration when purchasing devices. Give TWO examples of flash storage devices that could be used in the administration building.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: flash drive; SSD / M.2; memory card / SD card.",
    marking_notes: "One mark per correct flash storage device, any two of the memo's list.",
    steps: [
      mc(1, "Which is a flash storage device?", "Flash drive", ["Hard disk drive (HDD)", "DVD", "Magnetic tape"], 1),
      mc(1, "Which is another flash storage device?", "SSD", ["CD-ROM", "Floppy disk", "Blu-ray disc"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.2.1",
    text: "The IT department suggested that cloud-based servers could be used for the administration department. Briefly explain what a cloud-based virtual server is.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "It is a server hosted/based on the internet (online) that does not exist as a physical entity / only exists in software.",
    marking_notes: "One mark for hosted/based on the internet; one mark for not existing as a physical entity (software only).",
    steps: [
      mc(1, "Where is a cloud-based virtual server hosted?", "On the internet (online)", ["On a USB flash drive in the server room", "On the user's own desktop computer only", "On a printer's firmware"], 2),
      mc(1, "What is its physical nature?", "It does not exist as a physical entity; it only exists in software", ["It is a dedicated physical machine rented per hour", "It is a cable that connects computers", "It is a type of external hard drive"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.2.2",
    text: "Justify the use of cloud-based virtual servers.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO of: accessibility (any location/any time with internet); scalability (specifications adapted to changing needs); does not use local resources; provider takes responsibility for maintenance and upgrading; outsourcing of skilled processes; improved reliability/availability; lower total operational cost.",
    marking_notes: "One mark per correct justification, any two of the memo's list.",
    steps: [
      mc(1, "Which is a valid justification for using a cloud-based virtual server?", "It can be accessed from any location at any time with an internet connection", ["It works even if the institution has no internet connection at all", "It can only be used from one specific computer", "It requires the university to buy extra physical servers"], 1),
      mc(1, "Which is another valid justification?", "The service provider takes responsibility for maintenance and software upgrading", ["The university must maintain every hardware component itself", "Its specifications can never be changed after set-up", "It uses more of the university's local resources"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.2.3",
    text: "Software as a Service (SaaS) is currently used on the computers in the administration building. Except for the benefit of renting instead of buying software, state TWO other benefits of using SaaS.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: no need to install software / easy setup; no need to update software on the computers; no need for high-end computers (run from a browser); SaaS company stores data and backups; work from multiple devices/locations; takes up less local resources; collaboration features; scalability. NOTE: do NOT accept renting/cost.",
    marking_notes: "One mark per correct benefit, any two of the memo's list. Renting/cost is NOT accepted.",
    steps: [
      mc(1, "Which is a benefit of SaaS (other than renting instead of buying)?", "No need to install or update the software on each computer", ["The software only works offline", "Every user must buy a new high-end computer", "Users must manually apply every update"], 2),
      mc(1, "Which is another benefit of SaaS?", "Users can work from multiple devices and locations", ["The software can only be used on one computer", "Data can never be accessed remotely", "Collaboration between users is impossible"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.2.4",
    text: "Some of the software being used requires licences. Motivate why acquiring a site licence is better than acquiring a single-user licence for each of the users.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "A site licence allows all the employees of the institution to use the same licence, which is cheaper than buying individual licences. Any TWO of: replaces the need for individual licences / all users use the same licence; leads to cost saving; leads to less administration.",
    marking_notes: "One mark per correct concept, any two of the memo's list.",
    steps: [
      mc(1, "How does a site licence differ from buying individual licences for each user?", "All users use the same licence, replacing the need for individual licences", ["Only one user may use the software at a time", "Each user must buy a separate activation key", "The software may only be installed on one computer"], 1),
      mc(1, "What is the benefit of this for the institution?", "It saves cost and means less administration", ["It increases administration because licences must be tracked per user", "It makes the software free forever", "It allows the software to be copied and sold to outsiders"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.3.1",
    text: "Critical to the success of the institution is ensuring no downtime and that regular backups of important data at the university are made. Explain what a backup strategy is and how it can help prevent downtime at the university.",
    marks: 3, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "A backup strategy ensures that regular copies of data are made that will prevent data loss and ensure quick recovery/restoring of data to prevent downtime. Any THREE of: creating copies of data; regular creation of back-ups; to prevent data loss; data can be quickly recovered/restored.",
    marking_notes: "One mark each for any three of the memo's four concepts.",
    steps: [
      mc(1, "What does a backup strategy involve creating?", "Copies of the data", ["A faster internet connection", "A new operating system", "A second monitor for the server"], 0),
      mc(1, "How often should these copies be made?", "Regularly", ["Only once, when the system is installed", "Only after the system has failed", "Only when the user remembers"], 2),
      mc(1, "How does this help prevent downtime?", "Data can be quickly recovered/restored, preventing data loss", ["It stops hardware from ever failing", "It removes the need to repair any computers", "It increases the speed of the CPU"], 1),
    ],
  },
  {
    number: "2", sub_number: "2.3.2",
    text: "A cloud storage service could be used to backup data off-site. State TWO disadvantages of using cloud storage to backup data off-site.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: internet access required; bandwidth issues for backing up large chunks of data; full data recovery could take some time; data costs associated with storing data off-site; security exposure; data may be lost if the company/service closes down.",
    marking_notes: "One mark per correct disadvantage, any two of the memo's list.",
    steps: [
      mc(1, "Which is a disadvantage of cloud storage for backups?", "Internet access is required to access the storage", ["Backups can never be restored", "Data is permanently stored on the local computer", "It requires no bandwidth at all"], 3),
      mc(1, "Which is another disadvantage?", "A large amount of bandwidth is needed to back up large amounts of data", ["Data is automatically protected from all security threats", "There are never any costs for storing data", "The data is always instantly recovered"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.4",
    text: "An Engineering Graphics and Design course, using AutoCAD as a drawing tool, is offered at the university. Give ONE term for the type of computer user associated with the course by choosing from: home office user; power user; mobile user; small office user.",
    marks: 1, topicKey: "systems-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Power user.",
    marking_notes: "Accept only power user.",
    steps: [mc(1, "Which type of computer user is associated with using AutoCAD for engineering drawing?", "Power user", ["Home office user", "Mobile user", "Small office user"], 1)],
  },
  {
    number: "2", sub_number: "2.5.1",
    text: "Data security is essential to safeguard computer systems at the university against malware threats. One such threat is a computer worm. State TWO characteristics of a computer worm.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: ability to replicate itself from one computer to another; creates back-doors for other threats; uses weak areas in an application/operating system to spread; transfers over a network to other devices; e-mails itself to all contacts in an address book; uses a lot of system resources; causes strain on network bandwidth; causes loss of data.",
    marking_notes: "One mark per correct characteristic, any two of the memo's list.",
    steps: [
      mc(1, "Which is a characteristic of a computer worm?", "It replicates itself from one computer to another", ["It needs a user to run a host program before it can spread", "It only affects the computer on which it was installed", "It is a legitimate program used for backups"], 2),
      mc(1, "Which is another characteristic of a computer worm?", "It spreads over a network by exploiting weaknesses in applications or the operating system", ["It only spreads when a floppy disk is inserted", "It improves network bandwidth", "It never uses system resources"], 0),
    ],
  },
  {
    number: "2", sub_number: "2.5.2",
    text: "Explain why an antivirus product, rather than a firewall, will protect a system from being infected by a computer worm.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "Firewalls monitor and manage access to a network from other networks, while an anti-virus identifies/blocks/removes malware. Concepts: a firewall monitors network traffic but does not always prevent the spread of malware; anti-virus identifies/removes malware.",
    marking_notes: "One mark for the firewall's role/limitation, one mark for the anti-virus's role.",
    steps: [
      mc(1, "What does a firewall do in relation to malware?", "It monitors network traffic but does not always prevent the spread of malware", ["It scans files and deletes every worm it finds", "It repairs infected files automatically", "It encrypts all stored files"], 1),
      mc(1, "What does an anti-virus product do?", "It identifies, blocks and removes malware", ["It only blocks unauthorised network connections", "It increases the computer's RAM", "It backs up files to the cloud"], 3),
    ],
  },
  {
    number: "2", sub_number: "2.6",
    text: "The new computers will be equipped with solid-state drives which do not need to be defragmented to optimise performance. Discuss why there is no need to defragment a solid-state drive.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: SSD has no moving parts; SSD is a type of electronic storage; the grouping/position of stored data does not influence access speed. (Each is worth 2 marks.)",
    marking_notes: "Memo awards the full 2 marks for any ONE of the three motivations (FLAG: no tick split, so a single 2-mark step).",
    steps: [mc(2, "Why is there no need to defragment a solid-state drive?", "It has no moving parts, so the position of stored data does not influence access speed", ["It stores data magnetically on spinning platters", "It has less storage capacity than an HDD so fragmentation cannot occur", "It automatically compresses all files so they never fragment"], 2)],
  },

  // ============ SECTION C: COMMUNICATION AND NETWORK TECHNOLOGIES (30 marks) ============

  {
    number: "3", sub_number: "3.1.1",
    text: "A school governing body decided to invest in communication and network technologies to upgrade the school network (see the layout diagram). Define the term network.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "A network is a group of interconnected devices that can communicate with each other. Concepts: multiple devices that are connected; via a communication medium.",
    marking_notes: "One mark for multiple devices connected; one mark for connection via a communication medium / ability to communicate.",
    steps: [
      mc(1, "What does a network consist of?", "Multiple interconnected devices", ["A single stand-alone computer", "Only a server and no clients", "Only software applications"], 1),
      mc(1, "How do these devices communicate?", "Via a communication medium (wired or wireless)", ["Only by physically moving storage devices between them", "Only through a printer", "Only by installing the same operating system"], 0),
    ],
    image_url: `${IMG}/3-school-network-layout.png`,
  },
  {
    number: "3", sub_number: "3.1.2",
    text: "Why do you think the school will benefit from investing in modern communication and network technologies?",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO reasons: improved productivity; improved communication speed; improved reliability; increased capacity; supports more devices; supports modern online services; improved collaboration. (Also accept any ONE reason with an explanation.)",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    steps: [
      mc(1, "Which is a benefit of investing in modern network technologies?", "Improved communication speed and productivity", ["It reduces the number of devices that can be connected", "It removes the need for any security", "It makes online services unavailable"], 2),
      mc(1, "Which is another benefit?", "It supports more devices and modern online services", ["It guarantees the network will never need maintenance", "It prevents collaboration between staff", "It limits network capacity"], 3),
    ],
    image_url: `${IMG}/3-school-network-layout.png`,
  },
  {
    number: "3", sub_number: "3.1.3",
    text: "Identify and motivate the need for at least TWO components used in a LAN.",
    marks: 4, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO components, each with a name and a motivation: Network Interface Card (connects a device to the network); Switch (connects multiple devices together in a LAN); Router/Modem (provides connection to the internet); Cabling/communication medium (carries signals/connects devices); Wireless Access Point (provides wireless access to the network).",
    marking_notes: "2 x name of component (1 mark each) + 2 x motivation (1 mark each). Steps use Switch and NIC.",
    steps: [
      mc(1, "Which is a component used in a LAN?", "Switch", ["Web browser", "Compiler", "Spreadsheet application"], 1),
      mc(1, "Why is a switch needed in a LAN?", "It connects multiple devices together in the local area network", ["It stores all the users' files permanently", "It translates web addresses into IP addresses", "It converts the signal into an image on the screen"], 0),
      mc(1, "Which other component is used in a LAN?", "Network Interface Card (NIC)", ["Graphics card", "Sound card", "Optical drive"], 3),
      mc(1, "Why is a NIC needed?", "It is the hardware component that connects a device to the network", ["It increases the speed of the CPU", "It stores data when the power is off", "It displays images on the monitor"], 2),
    ],
    image_url: `${IMG}/3-school-network-layout.png`,
  },
  {
    number: "3", sub_number: "3.1.4a",
    text: "The switches are connected to one another from the computer lab to Block B of the school (from Switch 1 to Switch 5). Describe a potential disadvantage of this layout.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE with explanation: failure of one device/switch can make other parts of the network inaccessible; OR multiple switches connected in series so if one fails it disrupts other parts; OR a single cable between segments can lead to congestion; OR the signal travels through multiple switches, slowing communication.",
    marking_notes: "One mark for the cause (switches in series / single cable / multiple hops), one mark for the effect (failure disrupts other parts / congestion / slower communication).",
    steps: [
      mc(1, "What feature of the layout causes a problem?", "The switches are connected in series (one after another)", ["Every switch is connected directly to a central switch", "There are too few PCs in each block", "The server is connected to every PC individually"], 2),
      mc(1, "What is the resulting problem?", "If one switch fails, other parts of the network become inaccessible or communication slows down", ["Every PC automatically gets a faster connection", "The server can no longer store any files", "The network can never have more than 40 PCs"], 1),
    ],
    image_url: `${IMG}/3-school-network-layout.png`,
  },
  {
    number: "3", sub_number: "3.1.4b",
    text: "Draw a basic diagram to suggest an alternative layout for the network that will prevent the potential problem described in Question 3.1.4(a). (Choose the correct elements of the alternative layout.)",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "A star layout: a centralised main switch/router (1), with the secondary switches (Switch 1 to Switch 4) each individually connected to it (1).",
    marking_notes: "Memo concepts: centralised switch (1); secondary switches individually connected (1). Diagram converted to two MCQ steps.",
    steps: [
      mc(1, "What should be placed at the centre of the improved layout?", "A centralised main switch/router", ["Another PC in the principal's office", "The school server only, with no switch", "A printer"], 3),
      mc(1, "How should the other switches be connected?", "Each secondary switch individually connected to the central switch", ["All switches joined in one long chain", "Only Switch 1 connected, the others through wireless only", "Each switch connected only to the switch next to it"], 0),
    ],
    image_url: `${IMG}/3-school-network-layout.png`,
  },
  {
    number: "3", sub_number: "3.2.1",
    text: "A network can be made up of wired and wireless communication media. Suggest ONE type of wireless technology that can be utilised in an extended network.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: Wi-Fi/Access points; range extenders; WiMAX; satellite; mesh technology.",
    marking_notes: "Accept any one of the memo's list.",
    steps: [mc(1, "Which wireless technology can be used in an extended network?", "Wi-Fi access points", ["Fibre optic cable", "UTP cable", "Coaxial cable"], 1)],
  },
  {
    number: "3", sub_number: "3.2.2",
    text: "Explain how the wireless capability of the school's network can be extended to cover the entire school grounds.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Using additional access points, which can be placed strategically/spread across the school grounds. OR WiMAX (1) has a larger range (1). Also accept other technically correct answers.",
    marking_notes: "One mark for the technology (additional access points), one mark for how (placed strategically / spread across the grounds).",
    steps: [
      mc(1, "What should be added to extend wireless coverage?", "Additional wireless access points", ["Additional keyboards", "A faster CPU in the server", "More RAM in the PCs"], 2),
      mc(1, "How should they be positioned?", "Placed strategically/spread across the school grounds", ["All placed next to the main router", "Placed inside locked cupboards", "Placed outside the school boundary"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.2.3",
    text: "The school needs to provide network access to their hostel at another location about one kilometre away. Suggest a possible solution and indicate how your solution would solve this problem.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any ONE solution with motivation: WiMAX/Wi-Fi (hostel in range); fibre cable (low attenuation, long distance); UTP with switches (signal repeatedly strengthened); VPN (use existing resources to securely connect over the internet).",
    marking_notes: "One mark for the solution, one mark for how it solves the distance problem.",
    steps: [
      mc(1, "Which is a suitable solution to connect a hostel one kilometre away?", "Fibre optic cable", ["A single 10 m UTP cable with no switches", "Bluetooth", "Infrared"], 3),
      mc(1, "How does it solve the problem?", "It has low attenuation, so data can be transferred over long distances", ["It only works within a single room", "It can only carry voice and not data", "It needs a separate power supply every metre"], 1),
    ],
  },
  {
    number: "3", sub_number: "3.3.1a",
    text: "The school would like to incorporate VoIP technology in the classrooms. Write out the acronym VoIP.",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Voice over Internet Protocol.",
    marking_notes: "Accept only Voice over Internet Protocol.",
    steps: [mc(1, "What does VoIP stand for?", "Voice over Internet Protocol", ["Video over Internal Protocol", "Voice over Integrated Programs", "Virtual operating Internet Protocol"], 2)],
  },
  {
    number: "3", sub_number: "3.3.1b",
    text: "How does VoIP differ from traditional telephone calls?",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: no dedicated connection/calls made over the internet; lower cost; allows for video calls; needs pre-installed software applications; can make calls to any computing device connected to the internet; call cost not dependent on distance.",
    marking_notes: "One mark per correct difference, any two of the memo's list.",
    steps: [
      mc(1, "Which is a difference between VoIP and traditional telephone calls?", "VoIP calls are made over the internet without a dedicated connection", ["VoIP needs a dedicated copper line for each call", "VoIP cannot be used on computers", "VoIP calls can only be made inside the same building"], 0),
      mc(1, "Which is another difference?", "VoIP allows video calls and its cost does not depend on distance", ["VoIP cost increases with distance", "VoIP cannot carry any video", "VoIP needs no software or device at all"], 3),
    ],
  },
  {
    number: "3", sub_number: "3.3.2",
    text: "Assess the possible technical challenges that might be faced when using VoIP at school. Discuss at least TWO challenges.",
    marks: 4, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO, each identified and described: stable internet connection (so the call does not disconnect); sufficient bandwidth (low speed influences call quality); software (must be the same version/compatible); data cost (high when making video calls).",
    marking_notes: "2 x challenge identified (1 mark each) + 2 x correctly described (1 mark each). Steps use stable connection and bandwidth.",
    steps: [
      mc(1, "Which is a technical challenge when using VoIP?", "A stable internet connection is required", ["VoIP needs no internet connection", "VoIP can only be used with analogue phones", "VoIP works only during the night"], 1),
      mc(1, "Why does this matter?", "Without it the call may disconnect", ["Without it the call becomes free", "Without it the call automatically turns into a video call", "Without it the caller's voice becomes louder"], 2),
      mc(1, "Which other technical challenge exists?", "Sufficient bandwidth is required", ["Excess electricity supply", "Too many pixels on the screen", "A larger keyboard"], 0),
      mc(1, "Why does this matter?", "A low connection speed can influence the quality of the call", ["A low connection speed makes the call encrypted", "A low connection speed increases the number of callers allowed", "A low connection speed has no effect on a call"], 3),
    ],
  },
  {
    number: "3", sub_number: "3.4",
    text: "One of the short-term goals of the school is to set up an intranet. Briefly explain what an intranet is and give a practical example of how it could be used in a school environment.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "An intranet is an organisation's private network / internet-like environment consisting of web pages. Course notes, schedules, news, announcements etc. could be posted to the intranet.",
    marking_notes: "One mark for the explanation, one mark for a valid school example.",
    steps: [
      mc(1, "What is an intranet?", "An organisation's private, internet-like network of web pages", ["A public network open to everyone on the internet", "A network that only connects two computers with a cable", "A program for creating spreadsheets"], 2),
      mc(1, "Which is a practical use of an intranet at a school?", "Posting course notes, schedules and announcements for staff and learners", ["Selling school uniforms to the public", "Streaming television programmes to the public", "Sending spam e-mails to parents"], 1),
    ],
  },
  {
    number: "3", sub_number: "3.5.1",
    text: "Below is an advertisement the school received to introduce remote teaching and learning: \"Work from anywhere – securely, easily and fully immersive. The ultimate remote access and work solution for remote employees, freelancers and hybrid systems.\" Recommend why a remote desktop connection should be used for people working from home.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Any TWO of: software is easily configured on host and target computer compared to setting up a VPN; allows users the same control on the remote device as if sitting in front of it; changes are made to files directly on the remote computer; software is included in your operating system.",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    steps: [
      mc(1, "Which is a reason to use a remote desktop connection?", "It gives the user the same control of the remote device as if sitting in front of it", ["It removes the need for an internet connection", "It copies the whole remote computer onto the home computer", "It only allows the user to view, never to control, the remote device"], 3),
      mc(1, "Which is another reason?", "Changes are made to files directly on the remote computer, and the software is included in the operating system", ["Files must first be emailed back and forth to be changed", "It requires buying separate hardware for every user", "It is harder to configure than a VPN"], 0),
    ],
  },
  {
    number: "3", sub_number: "3.5.2",
    text: "An example of 'remote access' is being able to access the school security while away from the school. State ONE advantage and ONE disadvantage of using remote access.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Advantage (any ONE): provides access from any location/any time; low maintenance cost; convenient/saves time/cost saving. Disadvantage (any ONE): can be hacked; setup cost is expensive; dependent on internet access/data cost; video material can take a long time to transfer.",
    marking_notes: "One mark for a valid advantage, one for a valid disadvantage.",
    steps: [
      mc(1, "Which is an advantage of remote access?", "It provides access from any location at any time", ["It works without any network or internet", "It guarantees the system can never be hacked", "It is free to set up in all cases"], 1),
      mc(1, "Which is a disadvantage of remote access?", "It can be hacked and depends on internet access", ["It can only be used inside the building", "It makes the system faster and more secure automatically", "It needs no equipment"], 0),
    ],
  },

  // ============ SECTION D: DATA AND INFORMATION MANAGEMENT (20 marks) ============

  {
    number: "4", sub_number: "4.1.1",
    text: "The school stores all the information of the learners in a database with multiple tables (extract from tblLearners shown). State the purpose of a primary key in a table.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "A primary key is a field in a table that uniquely identifies each record in that table.",
    marking_notes: "Accept the idea of uniquely identifying each record.",
    steps: [mc(1, "What is the purpose of a primary key?", "To uniquely identify each record in the table", ["To link a table to a table in another database file", "To sort the records alphabetically", "To prevent any field from being edited"], 2)],
    image_url: `${IMG}/4-tbllearners.png`,
  },
  {
    number: "4", sub_number: "4.1.2",
    text: "State a requirement of a primary key, except not having duplicate values.",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Cannot have a null value.",
    marking_notes: "Accept only: may not be null/empty.",
    steps: [mc(1, "Apart from not having duplicate values, what is a requirement of a primary key?", "It cannot have a null value", ["It must be a text data type", "It must be the first letter of the surname", "It must contain a date"], 0)],
    image_url: `${IMG}/4-tbllearners.png`,
  },
  {
    number: "4", sub_number: "4.1.3a",
    text: "The structure of the table above will result in anomalies. What design error in this table might lead to an anomaly?",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE design error with explanation: data is duplicated in the Teacher field (1) - if the teacher is replaced the data needs to be corrected everywhere (1); OR the table is not normalised (1) - it contains redundant data / Teacher is dependent on RegisterClass, a field that is not the primary key (1).",
    marking_notes: "One mark for the design error, one for the explanation.",
    steps: [
      mc(1, "What is the design error in tblLearners?", "Data is duplicated: the Teacher field repeats for every learner in the same register class", ["The ID field has duplicate values", "The Age field is a text data type", "There are too few records in the table"], 1),
      mc(1, "Why does this lead to an anomaly?", "If a teacher is replaced, the data must be corrected in every record", ["The primary key can no longer be set", "The table cannot be sorted by surname", "The Gender field can no longer be edited"], 3),
    ],
    image_url: `${IMG}/4-tbllearners.png`,
  },
  {
    number: "4", sub_number: "4.1.3b",
    text: "Suggest how this design error can be resolved and explain how a solution can be accomplished.",
    marks: 4, topicKey: "data-information-management", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Create a separate table and move the RegisterClass and Teacher fields to that table. Use the RegisterClass field as the foreign key in tblLearners and the primary key in the new table. Concepts: splitting the data into two tables; RegisterClass/teachers in a separate table; tables must be linked; indication of linking on RegisterClass.",
    marking_notes: "Four concepts, one mark each (concepts may be described or shown as a table diagram).",
    steps: [
      mc(1, "How many tables should the data be split into?", "Two tables (the learners table and a new table)", ["One table with all the fields merged", "Five tables, one per learner", "No change in the number of tables"], 2),
      mc(1, "Which fields should be placed in the new table?", "RegisterClass and Teacher", ["FirstName and Surname", "Age and Gender", "ID and Age"], 0),
      mc(1, "What must be done to the two tables?", "They must be linked (related)", ["They must be kept completely separate with no link", "They must be merged back together", "They must be stored in different databases"], 1),
      mc(1, "Which field forms the link?", "RegisterClass: the primary key in the new table and a foreign key in tblLearners", ["Surname: the primary key in both tables", "Age: the foreign key in the new table only", "Gender: the primary key in tblLearners"], 3),
    ],
    image_url: `${IMG}/4-tbllearners.png`,
  },
  {
    number: "4", sub_number: "4.2",
    text: "Data verification and data validation are important database management processes. Compare the concepts of verification and validation to clearly indicate why validation does not remove the need for verification.",
    marks: 4, topicKey: "data-information-management", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Validation ensures that data is acceptable/valid (1). Verification is ensuring the correctness of data (1). If data is valid, it only implies the data is in the correct format/data type/range/presence/check digit (1), and not necessarily factually correct (1). OR verification requires that the information be checked against the source (1), which validation does not do (1).",
    marking_notes: "Four marks: validation concept; verification concept; validity is only format/range etc.; not necessarily factually correct (or checking against the source).",
    steps: [
      mc(1, "What does validation ensure?", "That the data is acceptable/valid", ["That the data is factually correct", "That the data is encrypted", "That the data is backed up"], 1),
      mc(1, "What does verification ensure?", "That the data is correct", ["That the data has a legal format only", "That the database is running quickly", "That duplicates are always removed"], 0),
      mc(1, "What does valid data only imply?", "That it is in the correct format, data type or range", ["That it was typed by a teacher", "That it matches the printed source document exactly", "That it was entered twice"], 3),
      mc(1, "Why is verification still needed?", "Valid data is not necessarily factually correct; it must be checked against the source", ["Valid data is always incorrect", "Validation can only be done after verification", "Verification only checks the data type"], 2),
    ],
  },
  {
    number: "4", sub_number: "4.3.1",
    text: "The school uses a 'Microsoft Access' database as their DBMS solution. What programming language is mostly used to extract data from a database?",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "SQL / Structured Query Language.",
    marking_notes: "Accept SQL or Structured Query Language.",
    steps: [mc(1, "Which language is mostly used to extract data from a database?", "SQL (Structured Query Language)", ["HTML", "CSS", "Pascal"], 2)],
  },
  {
    number: "4", sub_number: "4.3.2",
    text: "Identify a typical scenario when a server-based database would be required and explain how a server-based database would serve to cater for the needs of the scenario identified.",
    marks: 3, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Where a lot of personnel need to access the same database. A server-based database allows many users to use the database at once, from many different locations. Concepts: scenario correctly identified with many users/locations; simultaneous use/access for many users; access possible from different locations/over a network.",
    marking_notes: "Three concepts, one mark each.",
    steps: [
      mc(1, "In which scenario is a server-based database required?", "When many personnel need to access the same database", ["When only one person uses the database on one computer", "When the database has fewer than ten records", "When the database is never updated"], 1),
      mc(1, "How does it cater for this need (users)?", "It allows many users to use the database at the same time", ["It allows only one user at a time to log in", "It deletes the data of other users", "It stops users from editing any record"], 3),
      mc(1, "How does it cater for this need (locations)?", "It can be accessed from different locations over a network", ["It can only be accessed from the computer it is stored on", "It can only be accessed by physically carrying the disk", "It can only be accessed during school hours"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.4.1",
    text: "An audit trail is used in the school's database. How does the creation of an audit trail enhance data security in the school database?",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: tracks WHAT changes are made; tracks WHEN changes were made; tracks WHO made changes.",
    marking_notes: "One mark per correct aspect, any two of the memo's three.",
    steps: [
      mc(1, "What does an audit trail record about changes?", "What changes were made", ["Which colour theme was used", "How fast the user typed", "Which printer was used"], 2),
      mc(1, "What else does an audit trail record?", "Who made the changes and when", ["The user's home address", "The size of the user's monitor", "The temperature of the server room"], 0),
    ],
  },
  {
    number: "4", sub_number: "4.4.2",
    text: "Besides using an audit trail, suggest an alternative method to enhance the security of the school's database and explain how it can be used.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE method with explanation: access control (permissions/access levels, passwords, biometrics, MFA, locking the server room); encryption (prevents unauthorised access to sensitive learner records); regular backups (protect data from loss); firewall (monitors incoming/outgoing traffic and blocks unwanted requests).",
    marking_notes: "One mark for the method, one for its explanation.",
    steps: [
      mc(1, "Which is an alternative method to enhance database security?", "Access control (user permissions and passwords)", ["Increasing the screen brightness", "Deleting the audit trail", "Using a shorter table name"], 1),
      mc(1, "How does it enhance security?", "Only users with the correct permissions/passwords can access or change the data", ["It allows anyone to edit any record", "It speeds up the printing of reports", "It stores the data on paper instead"], 3),
    ],
  },

  // ============ SECTION E: SOLUTION DEVELOPMENT (22 marks) ============

  {
    number: "5", sub_number: "5.1.1a",
    text: "Study the Delphi code: 1 iCounter := 0; 2 for iRow := 1 to 3 do 3 begin 4 sLine := ''; 5 for iCol := 1 to 5 do 6 begin 7 sLine := sLine + '*'; 8 inc(iCounter); 9 end; 10 end; 11 redOutput.Lines.Add(sLine); — Write down the line number of any line that implements Initialisation.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Line 1 (iCounter := 0) or Line 4 (sLine := '').",
    marking_notes: "Any ONE of lines 1 or 4. FLAG: the memo prints 'iCount := 0' although the variable is iCounter.",
    steps: [mc(1, "Which line initialises a variable?", "Line 1 (iCounter := 0)", ["Line 3 (begin)", "Line 7 (sLine := sLine + '*')", "Line 9 (end)"], 2)],
  },
  {
    number: "5", sub_number: "5.1.1b",
    text: "Write down the line number of any line of the code that implements Looping.",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Line 2 (for iRow := 1 to 3 do) or Line 5 (for iCol := 1 to 5 do).",
    marking_notes: "Any ONE of lines 2 or 5.",
    steps: [mc(1, "Which line implements looping?", "Line 2 (for iRow := 1 to 3 do)", ["Line 1 (iCounter := 0)", "Line 8 (inc(iCounter))", "Line 11 (redOutput.Lines.Add(sLine))"], 1)],
  },
  {
    number: "5", sub_number: "5.1.2",
    text: "What will be the value of iCounter after the above code has been executed? (Assume all variables are declared correctly and there are no errors.)",
    marks: 1, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "15 (3 rows x 5 columns).",
    marking_notes: "Accept only 15.",
    steps: [mc(1, "What is the final value of iCounter?", "15", ["5", "8", "3"], 0)],
  },
  {
    number: "5", sub_number: "5.1.3",
    text: "Provide the output of the program after the code above has been executed.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "***** (only one line).",
    marking_notes: "FLAG: line 11 (redOutput.Lines.Add) is outside the loops, so only one line is displayed. Memo does not split the 2 marks; assumed 1 for the string '*****' and 1 for a single line.",
    steps: [
      mc(1, "What does the string sLine contain when it is added to redOutput?", "*****", ["***************", "*", "**********"], 3),
      mc(1, "How many lines are displayed?", "Only one line", ["Three lines", "Five lines", "Fifteen lines"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.1.4",
    text: "Rewrite the second loop (for iCol := 1 to 5 do) as a conditional loop.",
    marks: 3, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "iCol := 1; while iCol <= 5 do begin ... inc(iCol); end; OR iCol := 0; repeat inc(iCol); ... until iCol = 5; OR any other correct solution.",
    marking_notes: "Concepts: initialise counter (1); conditional loop with correct condition (1); increment loop controller (1).",
    steps: [
      mc(1, "What must be done to the loop counter before a conditional loop?", "It must be initialised (e.g. iCol := 1)", ["Nothing, Delphi initialises it automatically to 5", "It must be declared as a String", "It must be set to 6"], 2),
      mc(1, "Which is a conditional loop with a correct condition that repeats 5 times?", "while iCol <= 5 do", ["while iCol > 5 do", "for iCol := 5 to 1 do", "repeat ... until iCol = 0"], 0),
      mc(1, "What must happen inside the loop?", "The loop controller must be incremented (inc(iCol))", ["The loop controller must be set to 0 each time", "The loop controller must be deleted", "The loop controller must be assigned a string"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.2",
    text: "An array arrNames: array [1..5] of String = ('Trevor', 'Mpho', 'Lebo', 'Steven', 'Verushka') is searched using the flow diagram shown. Complete the trace table (name, counter, Is counter <= 5?, Is arrNames[counter] = name?, Display) to determine the output if the name 'Lebo' is entered in component 1.",
    marks: 4, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "counter: 0, 1, 2, 3. Is counter <= 5?: True each time it is tested. Is arrNames[counter] = name?: False (Trevor), False (Mpho), True (Lebo). Display: Found.",
    marking_notes: "Memo concepts: correct counter column (1); correct 'Is counter <= 5' column (1); correct 'Is arrNames[counter] = name' column (1); Display any phrase indicating 'Found' (1). FLAG: memo labels the column 'Is counter < 5'.",
    steps: [
      mc(1, "What values does counter take in the trace?", "0, 1, 2, 3", ["1, 2, 3, 4, 5", "0, 1, 2", "3, 2, 1, 0"], 1),
      mc(1, "What are the results of 'Is counter <= 5?' in the trace?", "True every time it is tested", ["False every time it is tested", "True, True, False, False", "False, True, True, True"], 3),
      mc(1, "What are the results of 'Is arrNames[counter] = name?'?", "False (Trevor), False (Mpho), True (Lebo)", ["True (Trevor), False (Mpho), False (Lebo)", "False, False, False", "False (Mpho), True (Lebo), False (Steven)"], 0),
      mc(1, "What is displayed?", "Found", ["Not found", "Lebo, 3", "Nothing is displayed"], 2),
    ],
    image_url: `${IMG}/5-2-flow-diagram.png`,
  },
  {
    number: "5", sub_number: "5.3",
    text: "Write pseudocode to input a word and display the word in reverse letter order (e.g. 'database' is displayed as 'esabatad'). The first step is: Input sWord. The pseudocode must work for any word.",
    marks: 4, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Input sWord; Initialise sOutput; Loop K from length of sWord downto 1: sOutput <- sOutput + sWord[K] (OR loop K from 1 to length of sWord with sOutput <- sWord[K] + sOutput; or any other correct solution).",
    marking_notes: "Concepts: loop (1) for length (1); correct adding of characters using correct indexing (2) - FLAG: split here as indexing (1) + concatenation order (1). Steps use the memo's first alternative.",
    steps: [
      mc(1, "What control structure is needed to process the word?", "A loop that goes through every letter of the word", ["A single IF statement with no loop", "A second Input statement", "Sorting the letters alphabetically"], 3),
      mc(1, "What loop bounds reverse the word using sOutput <- sOutput + ...?", "K from length of sWord downto 1", ["K from 1 to 8", "K from 0 to length of sWord", "K from length of sWord to 2"], 0),
      mc(1, "Which character should be taken in each iteration?", "sWord[K]", ["sWord[1]", "sWord[length of sWord]", "sWord"], 2),
      mc(1, "How should the output string be built?", "sOutput <- sOutput + sWord[K]", ["sOutput <- sWord[K]", "sOutput <- sOutput + K", "sOutput <- sWord + sOutput"], 1),
    ],
  },
  {
    number: "5", sub_number: "5.4",
    text: "An object class is required to create a student card object. Details: unique student number (e.g. 013795), name ('Trevor'), surname ('Chabale'), year of study (2). Draw a UML class diagram for TStudentCard containing: all attributes with data types and public/private scope; a constructor method receiving values for all four attributes via a parameter list; a mutator method called setStudyYear receiving a new year of study as a parameter.",
    marks: 6, topicKey: "solution-development", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "TStudentCard: - fStudentNumber : String; - fName : String; - fSurname : String; - fStudyYear : integer; + <<constructor>> Create (sStudentNumber, sName, sSurname : String; iStudyYear : integer); + setStudyYear (iStudyYear : integer).",
    marking_notes: "Memo concepts: attributes private; methods public; all attributes declared correctly with correct data types; constructor declared correctly with correct parameters; mutator declared correctly with an integer parameter. FLAG: 5 concepts for 6 marks - split assumed (attribute names 1, data types 1, private 1, public 1, constructor 1, mutator 1).",
    steps: [
      mc(1, "Which set of attributes does TStudentCard need?", "StudentNumber, Name, Surname, StudyYear", ["StudentNumber, Marks, Grade, Subject", "Name, Surname, Age, Address", "StudentNumber, Name, Surname, SchoolName, Cellphone"], 1),
      mc(1, "What are the correct data types for these attributes?", "String, String, String, Integer", ["Integer, String, String, String", "String, Integer, Integer, Boolean", "Real, String, String, Real"], 3),
      mc(1, "What scope should the attributes have?", "Private (-)", ["Public (+)", "Protected (#) only", "Global with no scope sign"], 2),
      mc(1, "What scope should the methods have?", "Public (+)", ["Private (-)", "Private for the constructor and public for setStudyYear", "No scope is shown for methods"], 0),
      mc(1, "Which constructor is correct?", "Create(sStudentNumber, sName, sSurname : String; iStudyYear : integer)", ["Create() with no parameters", "Create(iStudyYear : integer) only", "Destroy(sStudentNumber, sName, sSurname : String; iStudyYear : integer)"], 1),
      mc(1, "Which mutator method is correct?", "setStudyYear(iStudyYear : integer)", ["setStudyYear : integer", "getStudyYear : integer", "setStudyYear(sStudyYear : String)"], 3),
    ],
  },

  // ============ SECTION F: INTEGRATED SCENARIO (33 marks) ============

  {
    number: "6", sub_number: "6.1.1",
    text: "Registration for a school open-day event takes place by using QR (quick response) codes to open a link to a form. Explain what a QR code is and how it can be captured.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "The use of an image/two-dimensional block code to store information/URL. It can be captured/scanned using a digital camera/smartphone.",
    marking_notes: "One mark for what it is, one mark for how it is captured.",
    steps: [
      mc(1, "What is a QR code?", "A two-dimensional block code (image) that stores information such as a URL", ["A one-dimensional line code that can only store numbers", "A password stored on a USB drive", "A type of file compression"], 2),
      mc(1, "How can it be captured?", "By scanning it with a digital camera or smartphone", ["By typing it into a spreadsheet", "By connecting it to a printer", "By saving it with a microphone"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.1.2",
    text: "When completing a form online, personal information, such as your e-mail address, is often automatically entered into the fields. How does that happen?",
    marks: 1, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any ONE of: autocomplete/autofill done by the browser; information stored in a cookie from previous visits to the site; device/app feature from registered/stored information.",
    marking_notes: "Accept any one of the memo's three.",
    steps: [mc(1, "How is personal information automatically entered into online forms?", "By browser autofill/autocomplete using stored information (e.g. cookies)", ["The website reads the user's thoughts", "The router types the data in from its memory", "The keyboard automatically remembers every word typed"], 1)],
  },
  {
    number: "6", sub_number: "6.2.1a",
    text: "A computer with the latest operating system and multiprocessing specifications was used to create the 3D tour video. Explain what multiprocessing is.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "A computer's OS utilises more than one processor or processing core to simultaneously execute multiple tasks/threads/processes.",
    marking_notes: "One mark for more than one processor/core; one mark for simultaneous execution of multiple tasks.",
    steps: [
      mc(1, "What hardware does multiprocessing use?", "More than one processor or processing core", ["A single core running at a very high speed", "Extra hard drives", "A larger monitor"], 3),
      mc(1, "What does it allow the OS to do?", "Execute multiple tasks/processes simultaneously", ["Execute only one task at a time", "Delete background tasks to save RAM", "Run tasks only when the computer is idle"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.2.1b",
    text: "Discuss how the different processes are managed by the operating system to ensure that all applications will have adequate resources.",
    marks: 2, topicKey: "systems-technologies", cognitiveLevelName: "Understanding",
    model_answer: "The process of ensuring that each process/task/thread gets enough CPU time and access to memory, storage and other hardware to be able to work without interference by other processes. Concepts: allocation/sharing of processing time; allocation of resources/memory/storage.",
    marking_notes: "One mark for allocating processing time, one for allocating other resources (memory/storage).",
    steps: [
      mc(1, "What does the OS allocate to each process?", "Enough CPU (processing) time", ["Its own dedicated monitor", "An unlimited amount of RAM", "A separate operating system"], 2),
      mc(1, "What else does the OS allocate to each process?", "Access to memory, storage and other hardware", ["Access to the user's passwords", "Permission to overwrite other processes", "Only access to the keyboard"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.2.2",
    text: "When a person visits the school's website more than once, it opens much faster because of the web cache. Explain the process of web-caching.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "When a website is visited for the first time, the browser downloads all the necessary content from the server to cache on local storage. When the user visits the website again, the browser loads the content from cache.",
    marking_notes: "One mark for content from previous visits being stored; one mark for content obtained from the cache on later visits.",
    steps: [
      mc(1, "What happens on the first visit?", "The browser downloads content from the server and stores it in the cache on local storage", ["The server deletes the content after it is viewed", "The content is stored only on the web server", "The browser blocks the content from being downloaded"], 0),
      mc(1, "What happens on later visits?", "The browser loads the content from the cache instead of downloading it again", ["The browser downloads everything again from scratch", "The browser asks the user to retype the web address", "The website is rebuilt from the user's e-mail"], 3),
    ],
  },
  {
    number: "6", sub_number: "6.2.3",
    text: "The online 3D tour can be downloaded or streamed. Critically discuss the increased use of streaming material rather than downloading (at least TWO aspects comparing both streaming and downloading).",
    marks: 4, topicKey: "communication-network-technologies", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "At least two aspects, each comparing streaming and downloading (2 x 2 marks), e.g. Storage: streaming is accessible without storing locally, downloading requires enough storage space. Speed of access: streaming is instantly available, downloading must be downloaded first. (Other aspects: internet dependency, ownership/copyright, cost, environmental impact, quality of experience, security.)",
    marking_notes: "Two aspects x two marks (one for each side). Steps test Storage and Speed of access.",
    steps: [
      mc(1, "Storage: what is true of streaming?", "It is accessible without the need to store the material locally", ["It requires enough local storage for the whole file", "It permanently saves the file on the device", "It can only be used with an external hard drive"], 1),
      mc(1, "Storage: what is true of downloading?", "It requires enough storage space for the downloaded material", ["It needs no storage space at all", "It only stores a small buffer", "It stores the file on the server only"], 2),
      mc(1, "Speed of access: what is true of streaming?", "The material is instantly available to start watching", ["The whole file must be downloaded before watching", "It can never be watched without a long wait", "It starts only after the file is installed"], 0),
      mc(1, "Speed of access: what is true of downloading?", "The file needs to be downloaded first before it can be watched", ["It can be watched instantly while still not downloaded", "It is always faster than streaming", "It never needs an internet connection at any stage"], 3),
    ],
  },
  {
    number: "6", sub_number: "6.3.1",
    text: "The school's website is an example of a Web 1.0 generation website. State TWO characteristics of a Web 1.0 website.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: static pages that do not change frequently; simple design with limited graphics/multimedia; user is a content consumer, not a creator; hyperlinks to other webpages; basic HTML and CSS used; no interactive or collaborative features (comments, social media integration).",
    marking_notes: "One mark per correct characteristic, any two of the memo's list.",
    steps: [
      mc(1, "Which is a characteristic of a Web 1.0 website?", "Static pages that do not change frequently", ["Users create and share content", "Highly interactive social features", "Pages tailored to each user in real time"], 1),
      mc(1, "Which is another characteristic of a Web 1.0 website?", "The user is a content consumer, not a content creator", ["Users post comments on every page", "Content is created mainly by the visitors", "Social media integration is built in"], 3),
    ],
  },
  {
    number: "6", sub_number: "6.3.2",
    text: "Give any TWO reasons that led to websites evolving from Web 1.0 to Web 2.0.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: to allow users to contribute content; to provide an interactive experience; to allow for social networking; availability of new web technologies; higher bandwidth availability; internet availability.",
    marking_notes: "One mark per correct reason, any two of the memo's list.",
    steps: [
      mc(1, "Which is a reason websites evolved from Web 1.0 to Web 2.0?", "To allow users to contribute content", ["To stop users from interacting with websites", "To reduce the use of the internet", "To remove all multimedia from the web"], 2),
      mc(1, "Which is another reason?", "Higher bandwidth and new web technologies became available", ["Bandwidth became much lower", "Web browsers were no longer used", "Social networking was banned"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.4.1",
    text: "The following variations of data were recorded for prospective learners' grades: Chetty - 7; Franklin - seven; Gumede - Gr. 7; Venter - Grade 7. Discuss why the data above might compromise the quality of input data.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Understanding",
    model_answer: "Any TWO of: the same information is entered in different formats (not standardised); it is difficult to group/compare/analyse/sort records with different formats; difficult to extract core information, which can lead to errors.",
    marking_notes: "Concepts: different formats lead to incorrect capturing of data OR difficulty extracting/interpreting the data (1 each).",
    steps: [
      mc(1, "What is wrong with the data as entered?", "The same information is entered in different, non-standardised formats", ["Every grade entered is incorrect", "The surnames are duplicated", "The data has been encrypted"], 1),
      mc(1, "What problem does this cause?", "It is difficult to group, compare, sort or analyse the records", ["It makes the database file smaller", "It automatically converts them to the same format", "It prevents anyone from reading the surname"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.4.2",
    text: "State TWO different techniques on how the form, in which the data is captured, could be optimised to prevent this type of input.",
    marks: 2, topicKey: "solution-development", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: selection components (list box, combo box/dropdown, radio group, spin edit); providing examples of the required format/default values; input mask.",
    marking_notes: "One mark per correct technique, any two of the memo's list.",
    steps: [
      mc(1, "Which is a technique to prevent inconsistent input on a form?", "Use a selection component such as a combo box or radio group", ["Use a free-text Memo box for every field", "Remove all labels from the form", "Allow any characters in every field"], 3),
      mc(1, "Which is another technique?", "Use an input mask (or give an example of the required format)", ["Hide the field names", "Increase the font size of the form title", "Make the form wider"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.4.3",
    text: "Data gathered from a form needs to be used for decision-making. The process of transforming data in the information cycle is depicted as: Data -> (a) -> (b) -> Decisions. Provide the missing label for part (a), then for part (b).",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Remembering",
    model_answer: "Alternative 1: (a) Information, (b) Knowledge. Alternative 2: (a) Processing, (b) Information/Knowledge.",
    marking_notes: "FLAG: two memo alternatives; steps use alternative 1 and do not offer the alternative-2 labels as options.",
    steps: [
      mc(1, "What is the label for part (a), directly after Data?", "Information", ["Storage", "Backup", "Input"], 0),
      mc(1, "What is the label for part (b), directly before Decisions?", "Knowledge", ["Storage", "Backup", "Input"], 2),
    ],
  },
  {
    number: "6", sub_number: "6.5.1",
    text: "The school is one of many schools in the 'LearnMore School' franchise enrolling new learners. A distributed database is used to save the data required by the school. Why would a distributed database be a more suitable option for this scenario?",
    marks: 1, topicKey: "data-information-management", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: increased performance levels / less traffic on network or server / less data transfer; can accommodate many users; needs to be accessed from many locations; more stable (reduces redundancy).",
    marking_notes: "Accept any one of the memo's list.",
    steps: [mc(1, "Why is a distributed database more suitable for many franchise schools?", "It can be accessed from many locations by many users with less network traffic", ["It can be accessed from only one location", "It stores all the data on a single stand-alone PC", "It cannot accommodate more than one user"], 1)],
  },
  {
    number: "6", sub_number: "6.5.2",
    text: "Private information that is transferred over public networks, such as the internet, should always be encrypted. Briefly explain how encryption works.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Understanding",
    model_answer: "The information is scrambled/made inaccessible using a secret key/algorithm/set of rules.",
    marking_notes: "One mark for scrambling/making information unreadable; one mark for using a key/algorithm/rules.",
    steps: [
      mc(1, "What happens to the information when it is encrypted?", "It is scrambled/made inaccessible to unauthorised people", ["It is compressed to a smaller file", "It is deleted from the sender's computer", "It is converted to a picture"], 2),
      mc(1, "How is it scrambled?", "Using a secret key/algorithm/set of rules", ["Using a random keyboard shortcut", "Using the sender's IP address only", "Using the file name"], 1),
    ],
  },
  {
    number: "6", sub_number: "6.5.3",
    text: "Suggest which distributed database model will be most suitable for this scenario and motivate your answer.",
    marks: 2, topicKey: "data-information-management", cognitiveLevelName: "Evaluating and Creating",
    model_answer: "Partitioning: each server only stores the part of the data it works with / less data to be stored or transferred. OR Duplication: every server holds all the data / data will not be lost if one server crashes.",
    marking_notes: "FLAG: memo accepts either partitioning or duplication (1 + 1); steps use partitioning and do not offer duplication/replication as options.",
    steps: [
      mc(1, "Which distributed database model suits the franchise?", "Partitioning", ["A centralised single-server database", "A flat-file database", "A stand-alone desktop database"], 0),
      mc(1, "What is the motivation for this model?", "Each server stores only the part of the data it works with, so less data is stored or transferred", ["Every server must store a copy of all the data", "All data is kept on one server only", "No server ever needs a network connection"], 3),
    ],
  },
  {
    number: "6", sub_number: "6.6.1",
    text: "Technology has made it possible for more people to gain access to information. Give TWO examples of digital communication platforms that can be used to promote the open-day event of the school.",
    marks: 2, topicKey: "communication-network-technologies", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any TWO of: e-mail; social media; blogs; online newspapers; instant messaging; website (or any two examples of these).",
    marking_notes: "One mark per correct platform, any two of the memo's list.",
    steps: [
      mc(1, "Which is a digital platform to promote the open day?", "Social media", ["A printed noticeboard", "A radio on the school bus", "A landline telephone book"], 1),
      mc(1, "Which is another digital platform?", "E-mail", ["A paper newsletter handed out at the gate", "A poster pinned in the staffroom", "A school bell"], 0),
    ],
  },
  {
    number: "6", sub_number: "6.6.2",
    text: "It has been reported that confidential information about parents and learners has been distributed without their knowledge. Which policy document can be used as motivation for the need to take disciplinary action against the perpetrator?",
    marks: 1, topicKey: "social-implications", cognitiveLevelName: "Applying and Analysing",
    model_answer: "Any ONE of: Acceptable Usage Policy (AUP); Privacy Policy; POPIA; EULA (End User License Agreement).",
    marking_notes: "Accept any one of the memo's list.",
    steps: [mc(1, "Which policy document can be used as motivation for disciplinary action?", "Acceptable Usage Policy (AUP)", ["A software installation guide", "A hardware warranty certificate", "A network cabling diagram"], 2)],
  },
  {
    number: "6", sub_number: "6.7",
    text: "The school decided to host a workshop on artificial intelligence (AI) and invited primary school learners. ChatGPT as an AI tool is frequently used to generate information based on user input. State TWO potential risks associated with the use of ChatGPT.",
    marks: 2, topicKey: "social-implications", cognitiveLevelName: "Remembering",
    model_answer: "Any TWO of: people rely on the information generated without fact-checking; copyright issues/plagiarism; over-reliance on the technology; replacing human skills/employment; removing motivation to learn skills; limited accountability; may generate inappropriate content for children; may generate malicious code; may track and store personal information. Also accept other valid examples.",
    marking_notes: "One mark per correct risk, any two of the memo's list.",
    steps: [
      mc(1, "Which is a potential risk of using ChatGPT?", "People may rely on the generated information without fact-checking", ["It always guarantees 100% accurate answers", "It can never produce plagiarised content", "It cannot generate any text"], 3),
      mc(1, "Which is another potential risk?", "It may generate inappropriate content for children or store personal information", ["It makes users more skilled without any effort", "It removes all copyright issues", "It is always accountable for its mistakes"], 1),
    ],
  },
];

// examSchedule intentionally empty: the Nov 2025 IT P2 seed file already
// carries IT's real final exam dates (P1 and P2).
export const examSchedule: { paperNumber: string; examType: "prelim" | "final"; examDate: string; startTime: string; durationMinutes: number; }[] = [];
