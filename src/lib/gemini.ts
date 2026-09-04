import "server-only";
import { GoogleGenAI, Type } from "@google/genai";

// Constructed lazily, only when markAnswer() actually runs (i.e. only when
// a caller has already checked GEMINI_API_KEY is set — see submitAttempt in
// actions.ts) — not at module load. GoogleGenAI's constructor warns to the
// console when no key is configured, which would otherwise fire on every
// import of this file, including during builds/cold starts where AI
// marking is intentionally off.
let ai: GoogleGenAI | undefined;
function client(): GoogleGenAI {
  if (!ai) ai = new GoogleGenAI({});
  return ai;
}

export interface MarkResult {
  marks_awarded: number;
  feedback: string;
}

const MARK_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    marks_awarded: {
      type: Type.NUMBER,
      description: "Marks awarded, from 0 up to marks_possible. Partial credit allowed.",
    },
    feedback: {
      type: Type.STRING,
      description:
        "One or two sentences: what was missing or wrong, in the specific language of the memo (not generic encouragement).",
    },
  },
  required: ["marks_awarded", "feedback"],
};

export async function markAnswer(params: {
  questionText: string;
  marksPossible: number;
  modelAnswer: string;
  markingNotes: string | null;
  studentAnswer: string;
}): Promise<MarkResult> {
  const { questionText, marksPossible, modelAnswer, markingNotes, studentAnswer } = params;

  if (!studentAnswer.trim()) {
    return { marks_awarded: 0, feedback: "No answer given." };
  }

  const response = await client().models.generateContent({
    model: "gemini-3.6-flash",
    contents:
      `Question (${marksPossible} marks): ${questionText}\n\n` +
      `Memo answer: ${modelAnswer}\n` +
      (markingNotes ? `Marking notes: ${markingNotes}\n` : "") +
      `\nStudent's answer: ${studentAnswer}`,
    config: {
      systemInstruction:
        "You are a South African CAPS/NSC subject examiner marking a Grade 12 exam script strictly against the official memo. " +
        "Award partial marks the way a real marker would (method/content marks, not just the final answer), but never exceed marks_possible. " +
        "Be specific about which part of the memo the student missed.",
      responseMimeType: "application/json",
      responseSchema: MARK_SCHEMA,
    },
  });

  const text = response.text;
  if (!text) throw new Error("Gemini did not return a mark");

  const parsed = JSON.parse(text) as { marks_awarded: number; feedback: string };
  return {
    marks_awarded: Math.max(0, Math.min(marksPossible, parsed.marks_awarded)),
    feedback: parsed.feedback,
  };
}

export async function generateStudyNotes(params: {
  topicName: string;
  subjectName: string;
  recentMistakes: string[];
}): Promise<string> {
  const { topicName, subjectName, recentMistakes } = params;

  const response = await client().models.generateContent({
    model: "gemini-3.6-flash",
    contents:
      `Subject: ${subjectName}\nTopic: ${topicName}\n` +
      (recentMistakes.length
        ? `\nThis student's recent mistakes on this topic (from marked attempts):\n` +
          recentMistakes.map((m) => `- ${m}`).join("\n") +
          "\n"
        : "") +
      `\nWrite focused study notes on this topic for this student.`,
    config: {
      systemInstruction:
        "You are a South African CAPS/NSC tutor writing study notes for a Grade 12 student on a specific topic. " +
        "Structure the notes as: a short explanation of the core concept(s) (2-4 sentences), the key formulas/rules if any, " +
        "one worked example, and a short list of common mistakes to avoid. " +
        "If the student's recent mistakes are given, prioritise addressing those specifically rather than writing generic notes. " +
        "Write in plain text only — no markdown symbols (no #, *, **, -, or backticks). Use short paragraphs and blank lines between " +
        "sections instead. Keep it skimmable and exam-focused, not a full textbook chapter.",
    },
  });

  const text = response.text;
  if (!text) throw new Error("Gemini did not return study notes");
  return text.trim();
}
