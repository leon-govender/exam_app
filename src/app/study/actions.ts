"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { generateStudyNotes } from "@/lib/gemini";

export async function generateStudyNotesAction(
  topicId: string,
): Promise<{ content: string } | { error: string }> {
  if (!process.env.GEMINI_API_KEY) {
    return { error: "AI study notes need GEMINI_API_KEY configured — see .env.example." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not signed in." };

  const { data: topicRaw, error: topicErr } = await supabase
    .from("topics")
    .select("name, subject_id, subjects(name)")
    .eq("id", topicId)
    .single();
  if (topicErr || !topicRaw) return { error: "Topic not found." };
  const topic = topicRaw as unknown as { name: string; subjects: { name: string } | null };
  const subjectName = topic.subjects?.name ?? "";

  // Recent AI feedback on this topic's weaker answers, most recent attempt
  // first — same source the study page itself already uses for "why" notes.
  const { data: answerRows } = await supabase
    .from("attempt_answers")
    .select(
      `marks_awarded, marks_possible, ai_feedback,
       attempts!inner(submitted_at, user_id),
       questions!inner(topic_id)`,
    )
    .eq("questions.topic_id", topicId)
    .eq("attempts.user_id", user.id)
    .not("attempts.submitted_at", "is", null)
    .order("submitted_at", { referencedTable: "attempts", ascending: false });

  const recentMistakes = ((answerRows ?? []) as unknown as {
    marks_awarded: number | null;
    marks_possible: number;
    ai_feedback: string | null;
  }[])
    .filter((r) => r.marks_possible > 0 && (r.marks_awarded ?? 0) / r.marks_possible < 0.7 && r.ai_feedback)
    .slice(0, 5)
    .map((r) => r.ai_feedback as string);

  let content: string;
  try {
    content = await generateStudyNotes({
      topicName: topic.name,
      subjectName,
      recentMistakes,
    });
  } catch (err) {
    console.error("generateStudyNotes failed:", err);
    return { error: "Generating study notes failed — try again in a moment." };
  }

  const { error: upsertErr } = await supabase.from("study_notes").upsert(
    {
      user_id: user.id,
      topic_id: topicId,
      content,
      generated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_id" },
  );
  if (upsertErr) return { error: upsertErr.message };

  revalidatePath(`/study/${topicId}`);
  return { content };
}
