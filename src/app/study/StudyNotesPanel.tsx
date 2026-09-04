"use client";

import { useState } from "react";
import { generateStudyNotesAction } from "./actions";

export function StudyNotesPanel({
  topicId,
  initialContent,
  initialGeneratedAt,
}: {
  topicId: string;
  initialContent: string | null;
  initialGeneratedAt: string | null;
}) {
  const [content, setContent] = useState(initialContent);
  const [generatedAt, setGeneratedAt] = useState(initialGeneratedAt);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleGenerate() {
    setPending(true);
    setError(null);
    const result = await generateStudyNotesAction(topicId);
    setPending(false);
    if ("error" in result) {
      setError(result.error);
    } else {
      setContent(result.content);
      setGeneratedAt(new Date().toISOString());
    }
  }

  return (
    <div className="mt-8 rounded-lg border border-border bg-paper p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-2">
          AI study notes
        </span>
        <button
          type="button"
          onClick={handleGenerate}
          disabled={pending}
          className="rounded-md border border-border px-3 py-1.5 text-xs text-ink-2 hover:text-ink disabled:opacity-60"
        >
          {pending ? "Generating…" : content ? "Regenerate" : "Generate"}
        </button>
      </div>

      {content ? (
        <>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-ink">{content}</p>
          {generatedAt && (
            <p className="mt-3 text-[11px] text-ink-2">
              Generated {new Date(generatedAt).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              {" · "}an AI first pass — check it against the memo/textbook, not a substitute for either.
            </p>
          )}
        </>
      ) : (
        <p className="text-sm text-ink-2">
          Generate focused notes on this topic, tuned to your recent mistakes here if you have any.
        </p>
      )}

      {error && <p className="mt-2 text-sm text-mark-red">{error}</p>}
    </div>
  );
}
