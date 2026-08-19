-- Markbook schema
-- Content tables (subjects/papers/topics/questions/memos) are shared reference
-- data seeded by the ingestion pipeline. Attempt tables are per-user and RLS-scoped.

create extension if not exists "pgcrypto";

create table subjects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  stream text,
  created_at timestamptz not null default now()
);

create table papers (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references subjects(id) on delete cascade,
  year int not null,
  exam_diet text not null,          -- e.g. 'November', 'February/March'
  paper_number text not null,       -- e.g. 'P1', 'P2'
  duration_minutes int not null,
  total_marks int not null,
  source_url text,
  created_at timestamptz not null default now()
);

create table cognitive_levels (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references subjects(id) on delete cascade,
  name text not null,               -- subject-specific, e.g. Geography: Recall/Comprehension/Analysis/Evaluation
  order_index int not null
);

create table topics (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references subjects(id) on delete cascade,
  parent_topic_id uuid references topics(id) on delete set null,
  name text not null,
  caps_term text,                   -- e.g. 'Term 1'
  textbook_ref text,                -- e.g. 'Focus Geography Gr12, Ch 3, pg 40-52'
  video_url text
);

create table questions (
  id uuid primary key default gen_random_uuid(),
  paper_id uuid not null references papers(id) on delete cascade,
  number text not null,             -- e.g. '1'
  sub_number text,                  -- e.g. '1.1'
  text text not null,
  marks numeric not null,
  topic_id uuid references topics(id) on delete set null,
  cognitive_level_id uuid references cognitive_levels(id) on delete set null,
  order_index int not null default 0
);

create table memo_answers (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null unique references questions(id) on delete cascade,
  model_answer text not null,
  marking_notes text
);

create table attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  paper_id uuid not null references papers(id) on delete cascade,
  started_at timestamptz not null default now(),
  submitted_at timestamptz
);

create table attempt_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references attempts(id) on delete cascade,
  question_id uuid not null references questions(id) on delete cascade,
  answer_text text,
  marks_awarded numeric,
  marks_possible numeric not null,
  ai_feedback text,
  unique (attempt_id, question_id)
);

create table study_actions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_id uuid not null references topics(id) on delete cascade,
  status text not null default 'pending',   -- pending | reviewed | retested
  scheduled_retest_at timestamptz,
  created_at timestamptz not null default now()
);

-- Reference/content data: readable by any authenticated user (single-student app).
alter table subjects enable row level security;
alter table papers enable row level security;
alter table cognitive_levels enable row level security;
alter table topics enable row level security;
alter table questions enable row level security;
alter table memo_answers enable row level security;

create policy "authenticated read subjects" on subjects for select to authenticated using (true);
create policy "authenticated read papers" on papers for select to authenticated using (true);
create policy "authenticated read cognitive_levels" on cognitive_levels for select to authenticated using (true);
create policy "authenticated read topics" on topics for select to authenticated using (true);
create policy "authenticated read questions" on questions for select to authenticated using (true);
create policy "authenticated read memo_answers" on memo_answers for select to authenticated using (true);

-- Per-user data: owner-only.
alter table attempts enable row level security;
alter table attempt_answers enable row level security;
alter table study_actions enable row level security;

create policy "own attempts" on attempts for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own attempt_answers" on attempt_answers for all to authenticated
  using (exists (select 1 from attempts a where a.id = attempt_id and a.user_id = auth.uid()))
  with check (exists (select 1 from attempts a where a.id = attempt_id and a.user_id = auth.uid()));

create policy "own study_actions" on study_actions for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);
