-- Real upcoming exam dates (prelim and final NSC), separate from `papers`
-- which holds past papers used for practice. Powers a "days to your next
-- exam" countdown on the dashboard.

create table exam_schedule (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references subjects(id) on delete cascade,
  paper_number text not null,
  exam_type text not null check (exam_type in ('prelim', 'final')),
  exam_date date not null,
  start_time time,
  duration_minutes int
);

alter table exam_schedule enable row level security;
create policy "authenticated read exam_schedule" on exam_schedule
  for select to authenticated using (true);
grant select on exam_schedule to anon, authenticated;
grant select, insert, update, delete on exam_schedule to service_role;
