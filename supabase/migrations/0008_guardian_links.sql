-- Parent/guardian read-only access: a guardian_links row is created
-- directly (one-time, out of band — see scripts/link-guardian.ts) linking
-- a guardian account to a student account. The guardian can then read
-- (never write) that student's attempts/attempt_answers/study_actions.
--
-- Emails are stored denormalized here rather than reading auth.users (not
-- exposed via PostgREST) or adding a profiles table.

create table guardian_links (
  id uuid primary key default gen_random_uuid(),
  guardian_user_id uuid not null references auth.users(id) on delete cascade,
  guardian_email text not null,
  student_user_id uuid not null references auth.users(id) on delete cascade,
  student_email text not null,
  created_at timestamptz not null default now(),
  unique (guardian_user_id, student_user_id)
);

alter table guardian_links enable row level security;

-- Either side of a link can see it and can delete it (student revokes a
-- guardian's access, or a guardian unlinks themselves). You can only ever
-- insert a link naming yourself as the guardian — never insert one naming
-- someone else as guardian_user_id.
create policy "see own guardian_links" on guardian_links for select to authenticated
  using (auth.uid() = guardian_user_id or auth.uid() = student_user_id);
create policy "create own guardian_links" on guardian_links for insert to authenticated
  with check (auth.uid() = guardian_user_id);
create policy "delete own guardian_links" on guardian_links for delete to authenticated
  using (auth.uid() = guardian_user_id or auth.uid() = student_user_id);

-- Additive guardian-read policies on the existing per-user tables. The
-- existing owner-only policies (0001_init.sql) are untouched — these are
-- separate, read-only policies that only ever widen access for a linked
-- guardian, never narrow the student's own access.
create policy "guardian read attempts" on attempts for select to authenticated
  using (
    exists (
      select 1 from guardian_links gl
      where gl.student_user_id = attempts.user_id
        and gl.guardian_user_id = auth.uid()
    )
  );

create policy "guardian read attempt_answers" on attempt_answers for select to authenticated
  using (
    exists (
      select 1 from attempts a
      join guardian_links gl on gl.student_user_id = a.user_id
      where a.id = attempt_answers.attempt_id
        and gl.guardian_user_id = auth.uid()
    )
  );

create policy "guardian read study_actions" on study_actions for select to authenticated
  using (
    exists (
      select 1 from guardian_links gl
      where gl.student_user_id = study_actions.user_id
        and gl.guardian_user_id = auth.uid()
    )
  );

grant select, insert, delete on guardian_links to authenticated;
