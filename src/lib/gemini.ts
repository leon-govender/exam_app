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
    model: "gemini-2.5-flash",
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
