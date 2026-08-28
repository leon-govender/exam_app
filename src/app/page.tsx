import Link from "next/link";
import { redirect } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { Explainer } from "@/components/Explainer";
import { FrameChrome } from "@/components/FrameChrome";
import { getCurrentUser, getSubjects, getNextUnattemptedPaper, getNextExam } from "@/lib/queries";
import { getSubjectReadiness } from "@/lib/gap-analysis";
import { startAttempt } from "@/app/actions";

function severityPill(pct: number) {
  if (pct === 0) return { label: "Not started", cls: "bg-paper-3 text-ink-2" };
  if (pct < 50) return { label: "Gaps flagged", cls: "bg-mark-red-soft text-mark-red" };
  if (pct < 70) return { label: "Developing", cls: "bg-amber-soft text-amber" };
  return { label: "On track", cls: "bg-mastered-soft text-mastered" };
}

function barColor(pct: number) {
  if (pct === 0) return "var(--paper-3)";
  if (pct < 50) return "var(--mark-red)";
  if (pct < 70) return "var(--amber)";
  return "var(--mastered)";
}

function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + "T00:00:00");
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}

function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const subjects = await getSubjects();
  const readiness = await getSubjectReadiness(user.id);
  const nextExam = await getNextExam();

  const weakest = subjects
    .map((s) => ({ subject: s, pct: readiness[s.id]?.overallPct ?? 0 }))
    .sort((a, b) => a.pct - b.pct)[0];

  const nextPaper = weakest
    ? await getNextUnattemptedPaper(user.id, weakest.subject.id)
    : null;

  const overallPct = subjects.length
    ? Math.round(
        subjects.reduce((sum, s) => sum + (readiness[s.id]?.overallPct ?? 0), 0) /
          subjects.length,
      )
    : 0;

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow)" }}
        >
          <FrameChrome />
          <div className="p-6 sm:p-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold">
              {greeting()}
            </p>
            {nextExam && (
              <span className="rounded-full bg-mark-red-soft px-3 py-1.5 font-mono text-xs text-mark-red">
                {daysUntil(nextExam.examDate)} days to {nextExam.subjectName}{" "}
                {nextExam.paperNumber} ({nextExam.examType === "final" ? "Final" : "Prelim"}) ·{" "}
                {new Date(nextExam.examDate + "T00:00:00").toLocaleDateString("en-ZA", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
                {nextExam.startTime && ` · ${nextExam.startTime.slice(0, 5)}`}
              </span>
            )}
          </div>

          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-sm text-ink-2">Overall readiness</span>
            <span className="font-[family-name:var(--font-display)] text-lg">{overallPct}%</span>
          </div>
          <div className="mb-8 h-2 overflow-hidden rounded-full bg-paper-3">
            <div
              className="h-full rounded-full"
              style={{ width: `${overallPct}%`, background: "var(--gold)" }}
            />
          </div>

          {subjects.length === 0 ? (
            <p className="text-sm text-ink-2">
              No subjects yet — seed the database with a subject and paper to get started.
            </p>
          ) : (
            <div className={`grid grid-cols-1 gap-3 ${subjects.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {subjects.map((s) => {
                const r = readiness[s.id];
                const pct = r?.overallPct ?? 0;
                const pill = severityPill(pct);
                return (
                  <Link
                    key={s.id}
                    href={`/subjects/${s.id}`}
                    className="group rounded-lg border border-border bg-paper p-4 hover:border-gold"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <span className="text-sm font-semibold">{s.name}</span>
                      <span className="font-mono text-xl tabular-nums">{pct}%</span>
                    </div>
                    <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-paper-3">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: barColor(pct) }}
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between text-xs text-ink-2">
                      <span>
                        {r?.papersAttempted ?? 0} paper{r?.papersAttempted === 1 ? "" : "s"} sat
                      </span>
                      <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${pill.cls}`}>
                        {pct > 0 && r
                          ? `${r.gapCount} gap${r.gapCount === 1 ? "" : "s"}`
                          : pill.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-xs text-ink-2 group-hover:text-gold">
                      View papers <span aria-hidden>→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {nextPaper && weakest && (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border-soft pt-6">
              <p className="text-sm text-ink-2">
                Weakest right now: <b className="text-ink">{weakest.subject.name}</b>
              </p>
              <form action={startAttempt.bind(null, nextPaper.id)}>
                <button
                  type="submit"
                  className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-paper"
                >
                  Start {weakest.subject.name} {nextPaper.paper_number} · {nextPaper.exam_diet}{" "}
                  {nextPaper.year} →
                </button>
              </form>
            </div>
          )}

          {readiness &&
            Object.values(readiness).some((r) => r.gapCount > 0) && (
              <div className="mt-10">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
                  Flagged gaps
                </p>
                <div className="flex flex-col gap-2">
                  {Object.values(readiness)
                    .flatMap((r) => r.topics.filter((t) => t.severity === "gap"))
                    .slice(0, 5)
                    .map((t) => (
                      <Link
                        key={t.topicId}
                        href={`/study/${t.topicId}`}
                        className="flex items-center justify-between rounded-lg border border-border bg-paper px-4 py-3 text-sm hover:border-gold"
                      >
                        <span>{t.topicName}</span>
                        <span className="font-mono text-xs text-mark-red">{t.pct}%</span>
                      </Link>
                    ))}
                </div>
              </div>
            )}

          <Explainer label="Why">
            Readiness is weighted toward your most recent attempt on each topic — an old mistake
            doesn&apos;t count against you forever once you&apos;ve retried and improved on it.
          </Explainer>
          </div>
        </div>
      </main>
    </div>
  );
}
