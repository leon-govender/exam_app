import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { FrameChrome } from "@/components/FrameChrome";
import { getCurrentUser, getSubjects } from "@/lib/queries";
import { getSubjectReadiness } from "@/lib/gap-analysis";
import { getLinkedStudents, getAttemptHistory } from "@/lib/family-queries";
import { formatExamDiet } from "@/lib/format";

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

export default async function StudentProgressPage({
  params,
}: {
  params: Promise<{ studentUserId: string }>;
}) {
  const { studentUserId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const linkedStudents = await getLinkedStudents(user.id);
  const link = linkedStudents.find((l) => l.studentUserId === studentUserId);
  if (!link) notFound();

  const [subjects, readiness, history] = await Promise.all([
    getSubjects(),
    getSubjectReadiness(studentUserId),
    getAttemptHistory(studentUserId),
  ]);

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
          <FrameChrome label={`family · ${link.studentEmail}`} />
          <div className="p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between gap-3">
              <h1 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                {link.studentEmail}
              </h1>
              <Link href="/family" className="text-xs text-ink-2 hover:text-ink">
                ← Family
              </Link>
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
              <p className="text-sm text-ink-2">No subjects seeded yet.</p>
            ) : (
              <div className={`grid grid-cols-1 gap-3 ${subjects.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {subjects.map((s) => {
                  const r = readiness[s.id];
                  const pct = r?.overallPct ?? 0;
                  const pill = severityPill(pct);
                  return (
                    <div key={s.id} className="rounded-lg border border-border bg-paper p-4">
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
                      <div className="flex items-center justify-between text-xs text-ink-2">
                        <span>
                          {r?.papersAttempted ?? 0} paper{r?.papersAttempted === 1 ? "" : "s"} sat
                        </span>
                        <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${pill.cls}`}>
                          {pct > 0 && r
                            ? `${r.gapCount} gap${r.gapCount === 1 ? "" : "s"}`
                            : pill.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {Object.values(readiness).some((r) => r.gapCount > 0) && (
              <div className="mt-10">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
                  Flagged gaps
                </p>
                <div className="flex flex-col gap-2">
                  {Object.values(readiness)
                    .flatMap((r) => r.topics.filter((t) => t.severity === "gap"))
                    .slice(0, 5)
                    .map((t) => (
                      <div
                        key={t.topicId}
                        className="flex items-center justify-between rounded-lg border border-border bg-paper px-4 py-3 text-sm"
                      >
                        <span>{t.topicName}</span>
                        <span className="font-mono text-xs text-mark-red">{t.pct}%</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
                Attempt history
              </p>
              {history.length === 0 ? (
                <p className="text-sm text-ink-2">No submitted attempts yet.</p>
              ) : (
                <div className="flex flex-col gap-2">
                  {history.map((h) => (
                    <div
                      key={h.attemptId}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-paper px-4 py-3 text-sm"
                    >
                      <span>
                        {h.subjectName} {h.paperNumber} · {formatExamDiet(h.examDiet, h.year)}
                      </span>
                      <span className="font-mono text-xs text-ink-2">
                        {h.marksAwarded}/{h.marksPossible} · {h.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
