export function Explainer({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 flex gap-3 rounded-lg border border-border-soft bg-paper-2 p-4 text-sm leading-relaxed text-ink-2">
      <span className="flex-shrink-0 font-mono text-[11px] uppercase tracking-wider text-gold-deep">
        {label}
      </span>
      <p>{children}</p>
    </div>
  );
}
