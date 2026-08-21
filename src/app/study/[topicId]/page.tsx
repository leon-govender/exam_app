import { notFound, redirect } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { Explainer } from "@/components/Explainer";
import { FrameChrome } from "@/components/FrameChrome";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/queries";
import { getSubjectReadiness } from "@/lib/gap-analysis";
import { scheduleRetest } from "@/app/actions";

function videoSearchLabel(url: string, fallback: string): string {
  try {
    const query = new URL(url).searchParams.get("search_query");
    return query ? query.replace(/\+/g, " ") : fallback;
  } catch {
    return fallback;
  }
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const supabase = await createClient();

  const { data: topic } = await supabase
    .from("topics")
    .select("*")
    .eq("id", topicId)
    .single();
  if (!topic) notFound();

  // Performance + recent AI feedback on this topic, most recent attempt first.
  const { data: answerRows } = await supabase
    .from("attempt_answers")
    .select(
      `marks_awarded, marks_possible, ai_feedback, question_id,
       attempts!inner(id, submitted_at, user_id),
       questions!inner(id, topic_id)`,
    )
    .eq("questions.topic_id", topicId)
    .eq("attempts.user_id", user.id)
    .not("attempts.submitted_at", "is", null)
    .order("submitted_at", { referencedTable: "attempts", ascending: false });

  const rows = (answerRows ?? []) as unknown as {
    marks_awarded: number;
    marks_possible: number;
    ai_feedback: string | null;
    question_id: string;
  }[];

  const marksAwarded = rows.reduce((s, r) => s + (r.marks_awarded ?? 0), 0);
  const marksPossible = rows.reduce((s, r) => s + r.marks_possible, 0);
  const pct = marksPossible > 0 ? Math.round((marksAwarded / marksPossible) * 100) : 0;
  const whyNotes = rows
    .filter((r) => r.marks_possible > 0 && r.marks_awarded / r.marks_possible < 0.7 && r.ai_feedback)
    .slice(0, 2)
    .map((r) => r.ai_feedback as string);

  // All questions this user has ever answered, across every topic — used to
  // filter "fresh" practice everywhere below, not just on this topic.
  const { data: allAnswerRows } = await supabase
    .from("attempt_answers")
    .select("question_id, attempts!inner(user_id, submitted_at)")
    .eq("attempts.user_id", user.id)
    .not("attempts.submitted_at", "is", null);
  const allAnsweredQuestionIds = new Set(
    ((allAnswerRows ?? []) as unknown as { question_id: string }[]).map((r) => r.question_id),
  );

  type PracticeQuestion = {
    id: string;
    number: string;
    sub_number: string | null;
    marks: number;
    topic_id: string | null;
    papers: { year: number; exam_diet: string; paper_number: string };
  };

  // Fresh practice: other questions on this topic not yet attempted.
  const { data: sameTopicQuestions } = await supabase
    .from("questions")
    .select("id, number, sub_number, marks, topic_id, papers(year, exam_diet, paper_number)")
    .eq("topic_id", topicId);
  let practiceQuestions = (
    (sameTopicQuestions ?? []) as unknown as PracticeQuestion[]
  ).filter((q) => !allAnsweredQuestionIds.has(q.id));
  let practiceFromSection = false;

  // This topic is out of fresh questions — fall back to sibling topics in
  // the same section (CAPS term) that are also currently gaps, so the
  // suggestion still targets real weak spots instead of going empty.
  let sectionTopicNames: string[] = [];
  if (practiceQuestions.length === 0 && topic.caps_term) {
    const { data: siblingTopics } = await supabase
      .from("topics")
      .select("id, name")
      .eq("subject_id", topic.subject_id)
      .eq("caps_term", topic.caps_term)
      .neq("id", topicId);

    const readiness = await getSubjectReadiness(user.id);
    const subjectTopics = readiness[topic.subject_id]?.topics ?? [];
    const gapSiblingIds = (siblingTopics ?? [])
      .filter((s) =>
        subjectTopics.some(
          (t) => t.topicId === s.id && (t.severity === "gap" || t.severity === "developing"),
        ),
      )
      .map((s) => s.id);

    if (gapSiblingIds.length > 0) {
      const { data: siblingQuestions } = await supabase
        .from("questions")
        .select("id, number, sub_number, marks, topic_id, papers(year, exam_diet, paper_number)")
        .in("topic_id", gapSiblingIds);
      practiceQuestions = (
        (siblingQuestions ?? []) as unknown as PracticeQuestion[]
      ).filter((q) => !allAnsweredQuestionIds.has(q.id));
      practiceFromSection = true;
      const nameById = new Map((siblingTopics ?? []).map((s) => [s.id, s.name]));
      sectionTopicNames = [
        ...new Set(practiceQuestions.map((q) => nameById.get(q.topic_id ?? "")).filter(Boolean)),
      ] as string[];
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-10">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow)" }}
        >
          <FrameChrome label={`study plan: ${topic.name}`} />
          <div className="p-6 sm:p-8">
          <div className="mb-1 flex items-baseline justify-between">
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
              {topic.name}
            </h1>
            <span
              className={`rounded-full px-2.5 py-1 font-mono text-xs ${
                pct < 50
                  ? "bg-mark-red-soft text-mark-red"
                  : pct < 70
                    ? "bg-amber-soft text-amber"
                    : "bg-mastered-soft text-mastered"
              }`}
            >
              {pct}%
            </span>
          </div>

          {whyNotes.length > 0 && (
            <div className="mb-8 border-b border-dashed border-border pb-6 text-sm leading-relaxed text-ink-2">
              {whyNotes.map((n, i) => (
                <p key={i} className={i > 0 ? "mt-2" : ""}>
                  {n}
                </p>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3">
          {topic.textbook_ref && topic.textbook_url && (
            <a
              href={topic.textbook_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg border border-border bg-paper p-3.5 hover:border-gold"
            >
              <span className="flex-shrink-0 rounded bg-gold-soft px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-gold-deep">
                Textbook
              </span>
              <span className="text-sm underline">{topic.textbook_ref}</span>
            </a>
          )}
          {topic.textbook_ref && !topic.textbook_url && (
            <div className="flex items-start gap-3 rounded-lg border border-border bg-paper p-3.5">
              <span className="flex-shrink-0 rounded bg-gold-soft px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-gold-deep">
                Textbook
              </span>
              <span className="text-sm">{topic.textbook_ref}</span>
            </div>
          )}
          {topic.video_url && (
            <a
              href={topic.video_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg border border-border bg-paper p-3.5 hover:border-gold"
            >
              <span className="flex-shrink-0 rounded bg-gold-soft px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-gold-deep">
                Video
              </span>
              <span className="text-sm underline">
                Search YouTube: {videoSearchLabel(topic.video_url, topic.name)}
              </span>
            </a>
          )}
          {practiceQuestions.length > 0 && (
            <div className="flex items-start gap-3 rounded-lg border border-border bg-paper p-3.5">
              <span className="flex-shrink-0 rounded bg-gold-soft px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-gold-deep">
                Practice
              </span>
              <span className="text-sm">
                {practiceQuestions.length} unattempted question
                {practiceQuestions.length > 1 ? "s" : ""}{" "}
                {practiceFromSection
                  ? `from other topics in this section that also need work (${sectionTopicNames.join(", ")}), from `
                  : "on this topic, from "}
                {[
                  ...new Set(
                    practiceQuestions.map(
                      (q) => `${q.papers.exam_diet} ${q.papers.year}`,
                    ),
                  ),
                ].join(", ")}
              </span>
            </div>
          )}
          <div className="flex items-start gap-3 rounded-lg border border-border bg-paper p-3.5">
            <span className="flex-shrink-0 rounded bg-gold-soft px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-gold-deep">
              Retest
            </span>
            <span className="text-sm">
              A short recheck in 5 days — just a few questions on this topic, not a full paper.
            </span>
          </div>
        </div>

          <form action={scheduleRetest.bind(null, topicId)} className="mt-8">
            <button
              type="submit"
              className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-paper"
            >
              Schedule a short retest in 5 days
            </button>
          </form>

          <Explainer label="About retests">
            Scheduling a retest just sets a reminder date here on the dashboard — it doesn&apos;t
            mark anything automatically. Come back and sit a few fresh questions on this topic
            when you&apos;re ready.
          </Explainer>
          </div>
        </div>
      </main>
    </div>
  );
}
