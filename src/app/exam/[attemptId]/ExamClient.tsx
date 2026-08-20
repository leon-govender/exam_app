"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { submitAttempt } from "@/app/actions";
import { FrameChrome } from "@/components/FrameChrome";

interface Question {
  id: string;
  number: string;
  sub_number: string | null;
  text: string;
  marks: number;
  order_index: number;
  topicName: string | null;
}

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export function ExamClient({
  attemptId,
  paper,
  questions,
}: {
  attemptId: string;
  paper: { subjectPaper: string; diet: string; title: string; durationMinutes: number; totalMarks: number };
  questions: Question[];
}) {
  const [secondsLeft, setSecondsLeft] = useState(paper.durationMinutes * 60);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const mainNumbers = useMemo(() => [...new Set(questions.map((q) => q.number))], [questions]);
  const answeredMainNumbers = useMemo(() => {
    const answered = new Set<string>();
    for (const q of questions) {
      if (answers[q.id]?.trim()) answered.add(q.number);
    }
    return answered;
  }, [questions, answers]);

  const currentNumber = mainNumbers[currentIndex];
  const currentGroup = questions.filter((q) => q.number === currentNumber);
  const groupMarks = currentGroup.reduce((s, q) => s + q.marks, 0);
  const topicName = currentGroup.find((q) => q.topicName)?.topicName ?? null;
  const isLast = currentIndex === mainNumbers.length - 1;

  function toggleFlag() {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(currentNumber)) next.delete(currentNumber);
      else next.add(currentNumber);
      return next;
    });
  }

  function handleSubmit() {
    startTransition(() => {
      submitAttempt(attemptId, answers);
    });
  }

  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow)" }}
        >
          <FrameChrome label={`sitting: ${paper.subjectPaper} · ${paper.diet}`} />

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border-soft pb-6">
              <div className="text-sm">
                <p className="text-ink-2">
                  Question {currentIndex + 1} of {mainNumbers.length}
                </p>
                <p className="font-[family-name:var(--font-display)] text-base font-semibold">
                  {paper.title}, DBE
                </p>
              </div>
              <div className="rounded-lg border border-border bg-paper-2 px-4 py-2 font-mono text-lg tabular-nums">
                {formatTime(secondsLeft)}
              </div>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-6">
              <nav className="flex h-fit flex-col gap-3">
                <div className="grid grid-cols-3 gap-1">
                  {mainNumbers.map((n, i) => {
                    const isCurrent = i === currentIndex;
                    const isFlagged = flagged.has(n);
                    const isAnswered = answeredMainNumbers.has(n);
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        className={`flex h-9 items-center justify-center rounded-md border font-mono text-xs ${
                          isFlagged
                            ? "border-transparent bg-amber-soft text-amber"
                            : isAnswered
                              ? "border-transparent bg-mastered-soft text-mastered"
                              : "border-border text-ink-2"
                        } ${isCurrent ? "outline outline-2 outline-gold" : ""}`}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-1.5 text-[11px] text-ink-2">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-mastered" /> Answered
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-amber" /> Flagged
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-paper-3" /> Unseen
                  </span>
                </div>
              </nav>

              <div className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm font-semibold text-mark-red">
                    QUESTION {currentNumber}
                    {topicName ? ` — ${topicName}` : ""}
                  </span>
                  <span className="font-mono text-xs text-ink-2">Total: {groupMarks} marks</span>
                </div>

                {currentGroup.map((q) => {
                  const hasAnswer = Boolean(answers[q.id]?.trim());
                  return (
                    <div key={q.id} className="flex gap-3">
                      {q.sub_number && (
                        <span className="w-10 flex-shrink-0 pt-2.5 font-mono text-xs text-ink-2">
                          {q.sub_number}
                        </span>
                      )}
                      <div className="flex-1">
                        <p className="mb-2 flex items-start justify-between gap-3 text-sm leading-relaxed">
                          <span>{q.text}</span>
                          <span className="flex-shrink-0 font-mono text-xs text-ink-2">
                            ({q.marks})
                          </span>
                        </p>
                        <textarea
                          value={answers[q.id] ?? ""}
                          onChange={(e) =>
                            setAnswers((a) => ({ ...a, [q.id]: e.target.value }))
                          }
                          rows={q.marks > 4 ? 5 : 2}
                          placeholder="Type your answer…"
                          className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-gold ${
                            hasAnswer
                              ? "border-transparent bg-mastered-soft"
                              : "border-border bg-card"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={toggleFlag}
                  className={`self-start rounded-md border px-3 py-1.5 text-xs ${
                    flagged.has(currentNumber)
                      ? "border-transparent bg-amber-soft text-amber"
                      : "border-border text-ink-2 hover:border-gold"
                  }`}
                >
                  {flagged.has(currentNumber) ? "Flagged for review" : "Flag for review"}
                </button>

                <div className="mt-4 flex items-center justify-between border-t border-border-soft pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                    disabled={currentIndex === 0}
                    className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
                  >
                    ← Previous
                  </button>
                  {isLast ? (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isPending}
                      className="rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-paper disabled:opacity-60"
                    >
                      {isPending ? "Marking your paper…" : "Submit paper"}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setCurrentIndex((i) => Math.min(mainNumbers.length - 1, i + 1))}
                      className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-paper"
                    >
                      Next →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
