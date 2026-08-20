import "server-only";
import Anthropic from "@anthropic-ai/sdk";

export const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export interface MarkResult {
  marks_awarded: number;
  feedback: string;
}

const MARK_TOOL: Anthropic.Tool = {
  name: "record_mark",
  description: "Record the mark awarded for a student's answer and why.",
  input_schema: {
    type: "object",
    properties: {
      marks_awarded: {
        type: "number",
        description: "Marks awarded, from 0 up to marks_possible. Partial credit allowed.",
      },
      feedback: {
        type: "string",
        description:
          "One or two sentences: what was missing or wrong, in the specific language of the memo (not generic encouragement).",
      },
    },
    required: ["marks_awarded", "feedback"],
  },
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

  const message = await anthropic.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 512,
    system:
      "You are a South African CAPS/NSC subject examiner marking a Grade 12 exam script strictly against the official memo. " +
      "Award partial marks the way a real marker would (method/content marks, not just the final answer), but never exceed marks_possible. " +
      "Be specific about which part of the memo the student missed.",
    tools: [MARK_TOOL],
    tool_choice: { type: "tool", name: "record_mark" },
    messages: [
      {
        role: "user",
        content:
          `Question (${marksPossible} marks): ${questionText}\n\n` +
          `Memo answer: ${modelAnswer}\n` +
          (markingNotes ? `Marking notes: ${markingNotes}\n` : "") +
          `\nStudent's answer: ${studentAnswer}`,
      },
    ],
  });

  const toolUse = message.content.find(
    (block): block is Anthropic.ToolUseBlock => block.type === "tool_use",
  );
  if (!toolUse) throw new Error("Model did not return a mark");

  const input = toolUse.input as { marks_awarded: number; feedback: string };
  return {
    marks_awarded: Math.max(0, Math.min(marksPossible, input.marks_awarded)),
    feedback: input.feedback,
  };
}
