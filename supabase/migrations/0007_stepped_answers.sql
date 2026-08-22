-- Stepped multiple-choice answers for calculation questions: the student
-- works the problem out on paper as normal, then picks the correct option
-- for each mark-earning step (formula, substitution, final answer) instead
-- of typing anything, so grading stays exact-match deterministic without
-- needing OCR or numeric-tolerance guessing at handwritten working.

alter table questions add column answer_mode text not null default 'text'
  check (answer_mode in ('text', 'stepped_mcq'));

-- Public shape, safe to send to the client before the question is answered:
-- [{ description: string, options: string[] }, ...], one entry per step, in
-- the same order as the private per-step correctIndex/marks in
-- memo_answers.marking_points.
alter table questions add column step_options jsonb;

-- { [stepIndex: number]: number } — which option the student picked for
-- each step of a stepped_mcq question.
alter table attempt_answers add column step_answers jsonb;

-- memo_answers (model_answer, marking_notes, marking_points) was readable by
-- any authenticated user via a direct client call, bypassing the app UI
-- entirely -- already an answer-key leak, and untenable now that
-- marking_points can carry a stepped question's correctIndex. Grading reads
-- it through a service-role client instead (see src/lib/supabase/service.ts).
drop policy "authenticated read memo_answers" on memo_answers;
revoke select on public.memo_answers from anon, authenticated;
