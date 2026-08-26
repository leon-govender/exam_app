# MatricPrep

Past-paper exam simulation, gap analysis, and study-plan referral for
South African NSC matric prep. Subjects: **Geography** and **Physical Sciences**.

## How it works

1. **Dashboard** — per-subject readiness %, flagged gaps, one-click into the next paper.
2. **Exam simulation** — a real timed sitting of a past paper, mark allocations shown per sub-question.
3. **Gap report** — on submit, each written answer is marked against the memo (partial credit + a short note on what was missed), then the app rolls that up by topic and by CAPS cognitive level.
4. **Study plan** — every flagged topic links to a textbook reference, a video search, fresh unattempted practice questions, and a "schedule a retest in 5 days" action.

## One-time setup

### 1. Supabase (database + auth)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL editor, run [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql).
3. In **Settings → API**, copy the Project URL, `anon` public key, and `service_role` key.
4. In **Authentication → Providers**, email/magic-link sign-in is enabled by default — no extra setup needed.
5. In **Authentication → URL Configuration**, add `http://localhost:3000/auth/callback` as a redirect URL (and your deployed URL later).

### 2. Marking: free by default, AI marking optional

- **Free-text questions** default to a keyword grader (`gradeAnswer` in
  `src/lib/grader.ts`) — no API key, no cost. Each memo question carries
  `marking_points` (short gradable concepts pulled from the marking notes,
  including a tolerance-based numeric match for calculated values); a point
  is awarded if the student's answer contains any of its keyword phrases or
  a number within tolerance of the expected value. It's a coverage check,
  not a reasoning check — it can't tell a correct explanation from a
  jumbled one that happens to use the right words. Set `GEMINI_API_KEY`
  (free, from [aistudio.google.com](https://aistudio.google.com)) to switch
  this to AI marking (`src/lib/gemini.ts`) instead — it reads the answer
  and writes a specific note on what was missing, with better feedback
  quality than keyword matching. `submitAttempt` picks the key up
  automatically; if the API call ever fails (the free tier's quotas are
  tighter than a paid one), it falls back to the keyword grader for that
  answer rather than failing the submission. Google's free tier may use
  submitted content to improve their models — worth knowing since this
  sends real exam answers.
- **Calculation questions** (mostly Physical Sciences) always use stepped
  multiple-choice instead of free text (`gradeSteppedAnswer`), regardless
  of whether AI marking is on: the student works the problem out on paper,
  then picks the option matching their result for each mark-earning step
  (formula, substitution, final answer), so partial credit is exact — no
  keyword ambiguity, no OCR, no AI call needed for these at all.

### 3. Environment variables

```bash
cp .env.example .env.local
```

Fill in the Supabase values from step 1. `GEMINI_API_KEY` is optional — see step 2.

### 4. Install and seed

```bash
npm install
npm run seed
```

`npm run seed` loads the pilot Geography Paper 1 dataset from
[`scripts/seed-data/geography-p1-pilot.ts`](scripts/seed-data/geography-p1-pilot.ts)
into your Supabase project. **Read that file before running it** — it's the
review step for the ingestion pipeline described below.

> **On the pilot data**: this excerpt is hand-authored in authentic NSC
> Paper 1 style (same topics, mark allocations, and cognitive-level spread as
> a real DBE paper) rather than a verbatim past paper. The DBE's own PDFs —
> and third-party mirrors of them — use font encodings that this machine's
> PDF tooling couldn't extract into clean text (no OCR available here). To
> add a real past paper: get clean extracted text for it (e.g. from a
> machine with OCR, or by pasting the text directly), then add a new file
> under `scripts/seed-data/` following the same shape and update
> `scripts/seed.ts` to include it.

### 5. Run it

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), sign in with your email
(a magic link arrives via Supabase's default email provider — fine for
personal testing; swap in a custom SMTP provider in Supabase settings before
wider use), and sit the seeded paper.

## Known limitations (MVP scope)

- **The free grader is a keyword-coverage check, not a reasoning check.** See step 2 — it can under- or over-credit an answer compared to a real marker. AI marking (optional) is meaningfully better.
- **One subject, one paper.** More papers/subjects follow the same seed-file pattern — see step 4.
- **No admin UI for tagging.** The seed file *is* the review step; there's no in-app screen to retag questions yet.
- **Marking isn't cheat-proof.** `memo_answers` is readable by any authenticated user under the current RLS policy (single-user app) — fine for personal use, but don't rely on it to stop a determined student from reading the memo via the network tab.
- **Spaced repetition is a scheduled date, not a reminder.** `study_actions.scheduled_retest_at` is stored but nothing currently emails or notifies when it's due — the dashboard would need a "due today" surface, or an external reminder.

## Still to do

- **Exam-date countdown on the dashboard.** Blocked on confirming the exact
  2026 NSC Geography timetable dates: Paper 2 is confirmed as **Thursday,
  12 November 2026** (afternoon) from the official DBE Oct/Nov 2026
  timetable PDF, but Paper 1's exact date couldn't be reliably extracted
  from that PDF (complex table layout, no OCR tooling on this machine to
  read it visually instead) — one third-party blog's claim of 29 October
  2026 was checked against the official PDF and appears to be wrong.
  Confirm both dates against the son's actual school-issued timetable, then
  add an `exam_date` per paper/subject and a "days to your next exam"
  surface on the dashboard.

## Deploying

Push to a GitHub repo, import it into [Vercel](https://vercel.com/new), and
add the same environment variables from `.env.local` (the 3 required ones,
plus `GEMINI_API_KEY` if you set it) in the Vercel
project settings. Add the deployed URL to Supabase's redirect URL allow-list
(step 1.5 above).
