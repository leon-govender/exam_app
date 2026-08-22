"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createServiceClient } from "@/lib/supabase/service";
import { gradeAnswer, gradeSteppedAnswer, type MarkingPoint, type MarkingPointStep } from "@/lib/grader";

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

/**
 * Verifying via a server action (not a client-side call + manual navigate)
 * so the session cookie is set in the same request/response cycle that
 * redirects — a client-side verifyOtp() followed by window.location.href
 * raced the cookie write against the next request and lost.
 */
export async function verifySignInCode(email: string, token: string) {
  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({ email, token, type: "magiclink" });
  if (error) {
    return { error: error.message };
  }
  redirect("/");
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

export type AttemptAnswer =
  | { mode: "text"; text: string }
  | { mode: "stepped_mcq"; steps: Record<number, number> };

export async function submitAttempt(
  attemptId: string,
  answers: Record<string, AttemptAnswer>,
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
    .select("id, marks, answer_mode")
    .eq("paper_id", attempt.paper_id);
  if (qErr) throw qErr;

  // memo_answers holds each question's correct answer, so it's only ever
  // read through the service-role client, never the student's own
  // RLS-scoped session (see 0007_stepped_answers.sql).
  const service = createServiceClient();
  const { data: memos, error: mErr } = await service
    .from("memo_answers")
    .select("question_id, marking_points")
    .in(
      "question_id",
      questions.map((q) => q.id),
    );
  if (mErr) throw mErr;
  const memoByQuestion = new Map(memos.map((m) => [m.question_id, m.marking_points]));

  const results = questions.map((q) => {
    const answer = answers[q.id];
    const markingPoints = memoByQuestion.get(q.id) ?? null;

    if (!markingPoints) {
      return {
        attempt_id: attemptId,
        question_id: q.id,
        answer_text: answer?.mode === "text" ? answer.text : null,
        step_answers: answer?.mode === "stepped_mcq" ? answer.steps : null,
        marks_awarded: 0,
        marks_possible: q.marks,
        ai_feedback: "No memo available for this question yet.",
      };
    }

    if (q.answer_mode === "stepped_mcq") {
      const stepAnswers = answer?.mode === "stepped_mcq" ? answer.steps : {};
      const mark = gradeSteppedAnswer({
        marksPossible: q.marks,
        steps: markingPoints as unknown as MarkingPointStep[],
        stepAnswers,
      });
      return {
        attempt_id: attemptId,
        question_id: q.id,
        answer_text: null,
        step_answers: stepAnswers,
        marks_awarded: mark.marks_awarded,
        marks_possible: q.marks,
        ai_feedback: mark.feedback,
      };
    }

    const studentAnswer = answer?.mode === "text" ? answer.text : "";
    const mark = gradeAnswer({
      marksPossible: q.marks,
      markingPoints: markingPoints as unknown as MarkingPoint[],
      studentAnswer,
    });
    return {
      attempt_id: attemptId,
      question_id: q.id,
      answer_text: studentAnswer,
      step_answers: null,
      marks_awarded: mark.marks_awarded,
      marks_possible: q.marks,
      ai_feedback: mark.feedback,
    };
  });

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
