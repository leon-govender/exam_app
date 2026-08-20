"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "verifying" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSendLink(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setStatus("error");
        setError(error.message);
      } else {
        setStatus("sent");
      }
    } catch {
      setStatus("error");
      setError("Supabase isn't configured yet — see .env.example / README.md.");
    }
  }

  async function handleVerifyCode(e: React.FormEvent) {
    e.preventDefault();
    setStatus("verifying");
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({ email, token: code, type: "email" });

    if (error) {
      setStatus("sent");
      setError(error.message);
    } else {
      window.location.href = "/";
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-gold-deep">
          MatricPrep
        </p>
        <h1 className="mb-2 font-[family-name:var(--font-display)] text-3xl font-semibold">
          Sign in
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-ink-2">
          Enter the email this MatricPrep account uses. We&apos;ll send a sign-in link and code
          — no password to remember.
        </p>

        {status === "sent" || status === "verifying" ? (
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-paper-2 p-4 text-sm text-ink-2">
              Check <b className="text-ink">{email}</b>. If the link in that email doesn&apos;t
              sign you in (some email apps &quot;click&quot; links automatically before you do,
              which uses them up), enter the 6-digit code from the same email below instead.
            </div>
            <form onSubmit={handleVerifyCode} className="flex flex-col gap-3">
              <input
                type="text"
                inputMode="numeric"
                required
                placeholder="123456"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="rounded-lg border border-border bg-card px-4 py-3 text-center font-mono text-lg tracking-widest outline-none focus:border-gold"
              />
              <button
                type="submit"
                disabled={status === "verifying"}
                className="rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-paper disabled:opacity-60"
              >
                {status === "verifying" ? "Verifying…" : "Verify code"}
              </button>
              {error && <p className="text-sm text-mark-red">{error}</p>}
            </form>
          </div>
        ) : (
          <form onSubmit={handleSendLink} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-paper disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send sign-in link"}
            </button>
            {error && <p className="text-sm text-mark-red">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
