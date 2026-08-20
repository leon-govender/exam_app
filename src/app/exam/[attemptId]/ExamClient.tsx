"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { submitAttempt } from "@/app/actions";

interface Question {
  id: string;
  number: string;
  sub_number: string | null;
  text: string;
  marks: number;
  order_index: number;
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
  paper: { title: string; durationMinutes: number; totalMarks: number };
  questions: Question[];
}) {
  const [secondsLeft, setSecondsLeft] = useState(paper.durationMinutes * 60);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const mainNumbers = useMemo(
    () => [...new Set(questions.map((q) => q.number))],
    [questions],
  );
  const answeredMainNumbers = useMemo(() => {
    const answered = new Set<string>();
    for (const q of questions) {
      if (answers[q.id]?.trim()) answered.add(q.number);
    }
    return answered;
  }, [questions, answers]);

  function handleSubmit() {
    startTransition(() => {
      submitAttempt(attemptId, answers);
    });
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
        <div className="text-sm">
          <p className="font-[family-name:var(--font-display)] text-base font-semibold">
            {paper.title}
          </p>
          <p className="text-xs text-ink-2">{paper.totalMarks} marks total</p>
        </div>
        <div className="rounded-lg border border-border bg-paper-2 px-4 py-2 font-mono text-lg tabular-nums">
          {formatTime(secondsLeft)}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-4xl flex-1 grid-cols-[100px_1fr] gap-6 px-6 py-8">
        <nav className="flex h-fit flex-col gap-1">
          {mainNumbers.map((n) => (
            <a
              key={n}
              href={`#q-${n}`}
              className={`flex h-9 items-center justify-center rounded-md border font-mono text-xs ${
                answeredMainNumbers.has(n)
                  ? "border-transparent bg-mastered-soft text-mastered"
                  : "border-border text-ink-2"
              }`}
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-8 pb-10">
          {mainNumbers.map((n) => {
            const group = questions.filter((q) => q.number === n);
            const groupMarks = group.reduce((s, q) => s + q.marks, 0);
            return (
              <div key={n} id={`q-${n}`} className="scroll-mt-6">
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="font-mono text-sm text-gold-deep">QUESTION {n}</span>
                  <span className="font-mono text-xs text-ink-2">Total: {groupMarks} marks</span>
                </div>
                <div className="flex flex-col gap-4">
                  {group.map((q) => (
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
                          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="mt-4 self-end rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-paper disabled:opacity-60"
          >
            {isPending ? "Marking your paper…" : "Submit paper"}
          </button>
        </div>
      </div>
    </div>
  );
}
