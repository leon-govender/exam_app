"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { markAnswer } from "@/lib/anthropic";
import { gradeAnswer, type MarkingPoint } from "@/lib/grader";

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function startAttempt(paperId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Reuse an in-progress attempt on this paper if one exists.
  const { data: existing } = await supabase
    .from("attempts")
    .select("id")
    .eq("user_id", user!.id)
    .eq("paper_id", paperId)
    .is("submitted_at", null)
    .maybeSingle();

  const attemptId =
    existing?.id ??
    (
      await supabase
        .from("attempts")
        .insert({ user_id: user!.id, paper_id: paperId })
        .select("id")
        .single()
        .throwOnError()
    ).data!.id;

  redirect(`/exam/${attemptId}`);
}

export async function submitAttempt(
  attemptId: string,
  answers: Record<string, string>,
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: attempt, error: attemptErr } = await supabase
    .from("attempts")
    .select("id, user_id, paper_id")
    .eq("id", attemptId)
    .single();
  if (attemptErr || !attempt || attempt.user_id !== user!.id) {
    throw new Error("Attempt not found");
  }

  const { data: questions, error: qErr } = await supabase
    .from("questions")
    .select("id, text, marks, memo_answers(model_answer, marking_notes, marking_points)")
    .eq("paper_id", attempt.paper_id);
  if (qErr) throw qErr;

  type QRow = {
    id: string;
    text: string;
    marks: number;
    memo_answers: {
      model_answer: string;
      marking_notes: string | null;
      marking_points: MarkingPoint[] | null;
    } | null;
  };

  // Marking against the memo: use Claude for nuanced marking when an API key
  // is configured, otherwise fall back to the free rule-based keyword grader
  // (src/lib/grader.ts) — no external call, no cost.
  const useAI = Boolean(process.env.ANTHROPIC_API_KEY);

  const results = await Promise.all(
    (questions as unknown as QRow[]).map(async (q) => {
      const studentAnswer = answers[q.id] ?? "";
      if (!q.memo_answers) {
        return {
          attempt_id: attemptId,
          question_id: q.id,
          answer_text: studentAnswer,
          marks_awarded: 0,
          marks_possible: q.marks,
          ai_feedback: "No memo available for this question yet.",
        };
      }

      const mark = useAI
        ? await markAnswer({
            questionText: q.text,
            marksPossible: q.marks,
            modelAnswer: q.memo_answers.model_answer,
            markingNotes: q.memo_answers.marking_notes,
            studentAnswer,
          })
        : gradeAnswer({
            marksPossible: q.marks,
            markingPoints: q.memo_answers.marking_points,
            studentAnswer,
          });

      return {
        attempt_id: attemptId,
        question_id: q.id,
        answer_text: studentAnswer,
        marks_awarded: mark.marks_awarded,
        marks_possible: q.marks,
        ai_feedback: mark.feedback,
      };
    }),
  );

  const { error: insertErr } = await supabase
    .from("attempt_answers")
    .upsert(results, { onConflict: "attempt_id,question_id" });
  if (insertErr) throw insertErr;

  await supabase
    .from("attempts")
    .update({ submitted_at: new Date().toISOString() })
    .eq("id", attemptId);

  revalidatePath("/");
  redirect(`/results/${attemptId}`);
}

export async function scheduleRetest(topicId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const retestAt = new Date();
  retestAt.setDate(retestAt.getDate() + 5);

  await supabase.from("study_actions").insert({
    user_id: user!.id,
    topic_id: topicId,
    status: "pending",
    scheduled_retest_at: retestAt.toISOString(),
  });

  revalidatePath(`/study/${topicId}`);
}
