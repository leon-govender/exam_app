-- Baseline table privileges. RLS (0001) controls which *rows* a role can
-- see; that only takes effect once the role also has a baseline GRANT on
-- the table itself — without this, every query fails with
-- "permission denied for table X" (Postgres error 42501) regardless of
-- policies. This mirrors what older Supabase projects granted by default.

grant usage on schema public to anon, authenticated, service_role;

grant select, insert, update, delete on all tables in schema public
  to service_role;

grant select on
  public.subjects, public.papers, public.cognitive_levels,
  public.topics, public.questions, public.memo_answers
  to anon, authenticated;

grant select, insert, update, delete on
  public.attempts, public.attempt_answers, public.study_actions
  to authenticated;

-- Apply the same grants to tables added by future migrations.
alter default privileges in schema public
  grant select, insert, update, delete on tables to service_role;
