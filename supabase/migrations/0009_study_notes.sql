-- AI-generated study notes, cached per (user, topic) so repeat visits don't
-- re-call the model — regeneration is an explicit user action, not automatic.

create table study_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_id uuid not null references topics(id) on delete cascade,
  content text not null,
  generated_at timestamptz not null default now(),
  unique (user_id, topic_id)
);

alter table study_notes enable row level security;

create policy "own study_notes" on study_notes for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select, insert, update, delete on study_notes to authenticated;
