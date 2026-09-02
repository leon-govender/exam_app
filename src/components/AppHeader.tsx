import Link from "next/link";
import { logout } from "@/app/actions";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4">
      <Link
        href="/"
        className="font-[family-name:var(--font-display)] text-lg font-semibold"
      >
        MatricPrep
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/family" className="text-xs text-ink-2 hover:text-ink">
          Family
        </Link>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-md border border-border px-3 py-1.5 text-xs text-ink-2 hover:text-ink"
          >
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
