import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { FrameChrome } from "@/components/FrameChrome";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser, getPapersForSubject, getAttemptStatusForSubject } from "@/lib/queries";
import { formatExamDiet } from "@/lib/format";
import { startAttempt } from "@/app/actions";

type Paper = Awaited<ReturnType<typeof getPapersForSubject>>[number];

function groupByPaperNumber(papers: Paper[]): [string, Paper[]][] {
  const groups = new Map<string, Paper[]>();
  for (const p of papers) {
    const group = groups.get(p.paper_number);
    if (group) group.push(p);
    else groups.set(p.paper_number, [p]);
  }
  return [...groups];
}

export default async function SubjectPapersPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const { subjectId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const supabase = await createClient();
  const { data: subject } = await supabase
    .from("subjects")
    .select("id, name")
    .eq("id", subjectId)
    .single();
  if (!subject) notFound();

  const [papers, status] = await Promise.all([
    getPapersForSubject(subjectId),
    getAttemptStatusForSubject(user.id, subjectId),
  ]);

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow)" }}
        >
          <FrameChrome label={`papers · ${subject.name}`} />
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h1 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                {subject.name}
              </h1>
              <Link href="/" className="text-xs text-ink-2 hover:text-ink">
                ← Dashboard
              </Link>
            </div>

            {papers.length === 0 ? (
              <p className="text-sm text-ink-2">No papers seeded for this subject yet.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {groupByPaperNumber(papers).map(([paperNumber, group]) => (
                  <div key={paperNumber}>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
                      {paperNumber}
                    </p>
                    <div className="flex flex-col gap-3">
                      {group.map((p) => {
                        const s = status[p.id];
                        return (
                          <div
                            key={p.id}
                            className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-paper p-4"
                          >
                            <div>
                              <p className="text-sm font-semibold">
                                {formatExamDiet(p.exam_diet, p.year)}
                              </p>
                              <p className="mt-0.5 font-mono text-xs text-ink-2">
                                {p.total_marks} marks · {Math.round(p.duration_minutes / 60)}h
                                {p.duration_minutes % 60 ? ` ${p.duration_minutes % 60}m` : ""}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {s?.submitted && (
                                <Link
                                  href={`/results/${s.attemptId}`}
                                  className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-ink-2 hover:text-ink"
                                >
                                  View results
                                </Link>
                              )}
                              {s && !s.submitted ? (
                                <Link
                                  href={`/exam/${s.attemptId}`}
                                  className="rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-paper"
                                >
                                  Continue →
                                </Link>
                              ) : (
                                <form action={startAttempt.bind(null, p.id)}>
                                  <button
                                    type="submit"
                                    className="rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-paper"
                                  >
                                    {s?.submitted ? "Retake" : "Start"} →
                                  </button>
                                </form>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
