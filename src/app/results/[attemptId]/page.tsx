import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/queries";
import { getAttemptReport } from "@/lib/gap-analysis";

function barColor(pct: number) {
  if (pct < 50) return "var(--mark-red)";
  if (pct < 70) return "var(--amber)";
  return "var(--mastered)";
}
function textColor(pct: number) {
  if (pct < 50) return "text-mark-red";
  if (pct < 70) return "text-amber";
  return "text-mastered";
}

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const supabase = await createClient();
  const { data: attempt } = await supabase
    .from("attempts")
    .select("id, user_id, paper_id, submitted_at")
    .eq("id", attemptId)
    .single();
  if (!attempt || attempt.user_id !== user.id) notFound();
  if (!attempt.submitted_at) redirect(`/exam/${attemptId}`);

  const { data: paper } = await supabase
    .from("papers")
    .select("*")
    .eq("id", attempt.paper_id)
    .single();

  const { data: subject } = paper
    ? await supabase.from("subjects").select("name").eq("id", paper.subject_id).single()
    : { data: null };

  const report = await getAttemptReport(user.id, attemptId);

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <p className="mb-1 text-sm text-ink-2">
          {paper ? `${subject?.name ?? ""} ${paper.paper_number} — ${paper.exam_diet} ${paper.year}` : ""}
        </p>
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-display)] text-4xl tabular-nums">
            {report.marksAwarded}
          </span>
          <span className="text-sm text-ink-2">
            / {report.marksPossible} marks · {report.pct}%
          </span>
        </div>

        <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
          By topic
        </p>
        <div className="mb-8 flex flex-col gap-2">
          {report.topics.map((t) => (
            <div key={t.topicId} className="flex items-center gap-3">
              <span className="w-40 flex-shrink-0 truncate text-sm">{t.topicName}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-paper-3">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${t.pct}%`, background: barColor(t.pct) }}
                />
              </div>
              <span className="w-9 text-right font-mono text-xs tabular-nums text-ink-2">
                {t.pct}%
              </span>
            </div>
          ))}
        </div>

        <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
          By cognitive level
        </p>
        <div className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {report.cognitiveLevels.map((c) => (
            <div key={c.levelId} className="rounded-lg border border-border p-3 text-center">
              <div className={`font-mono text-lg tabular-nums ${textColor(c.pct)}`}>{c.pct}%</div>
              <div className="mt-1 text-[11px] leading-tight text-ink-2">{c.levelName}</div>
            </div>
          ))}
        </div>

        {report.flaggedGaps.length > 0 && (
          <>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
              Flagged gaps
            </p>
            <div className="flex flex-col gap-3">
              {report.flaggedGaps.map(({ topic, priorLowAttempts }) => (
                <Link
                  key={topic.topicId}
                  href={`/study/${topic.topicId}`}
                  className="block rounded-lg border border-border border-l-[3px] p-4 hover:border-l-mark-red"
                  style={{ borderLeftColor: "var(--mark-red)" }}
                >
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-sm font-semibold">{topic.topicName}</span>
                    <span className="font-mono text-xs text-mark-red">
                      {topic.marksAwarded}/{topic.marksPossible} lost
                    </span>
                  </div>
                  <p className="text-xs text-ink-2">
                    {priorLowAttempts > 0
                      ? `Weak in ${priorLowAttempts} earlier attempt${priorLowAttempts > 1 ? "s" : ""} too — a repeat pattern, not a one-off.`
                      : "First time this topic has come up — worth a closer look before the next paper."}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
