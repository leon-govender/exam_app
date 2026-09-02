import "server-only";
import { createClient } from "@/lib/supabase/server";

export interface GuardianLink {
  id: string;
  guardianUserId: string;
  guardianEmail: string;
  studentUserId: string;
  studentEmail: string;
  createdAt: string;
}

function mapLink(row: {
  id: string;
  guardian_user_id: string;
  guardian_email: string;
  student_user_id: string;
  student_email: string;
  created_at: string;
}): GuardianLink {
  return {
    id: row.id,
    guardianUserId: row.guardian_user_id,
    guardianEmail: row.guardian_email,
    studentUserId: row.student_user_id,
    studentEmail: row.student_email,
    createdAt: row.created_at,
  };
}

/** Students this guardian currently has read access to. */
export async function getLinkedStudents(guardianUserId: string): Promise<GuardianLink[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("guardian_links")
    .select("*")
    .eq("guardian_user_id", guardianUserId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(mapLink);
}

/** Guardians currently linked to this student. */
export async function getLinkedGuardians(studentUserId: string): Promise<GuardianLink[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("guardian_links")
    .select("*")
    .eq("student_user_id", studentUserId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(mapLink);
}

export interface AttemptHistoryEntry {
  attemptId: string;
  submittedAt: string;
  subjectName: string;
  paperNumber: string;
  examDiet: string;
  year: number;
  marksAwarded: number;
  marksPossible: number;
  pct: number;
}

/** Every submitted attempt for a student, newest first — for the guardian view's history list. */
export async function getAttemptHistory(studentUserId: string): Promise<AttemptHistoryEntry[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("attempt_answers")
    .select(
      `marks_awarded, marks_possible,
       attempts!inner(id, user_id, submitted_at,
         papers(paper_number, exam_diet, year, subjects(name)))`,
    )
    .eq("attempts.user_id", studentUserId)
    .not("attempts.submitted_at", "is", null)
    .order("submitted_at", { referencedTable: "attempts", ascending: false });
  if (error) throw error;

  type Row = {
    marks_awarded: number | null;
    marks_possible: number;
    attempts: {
      id: string;
      submitted_at: string;
      papers: { paper_number: string; exam_diet: string; year: number; subjects: { name: string } | null } | null;
    };
  };

  const byAttempt = new Map<string, AttemptHistoryEntry>();
  for (const row of (data ?? []) as unknown as Row[]) {
    const attempt = row.attempts;
    const paper = attempt.papers;
    if (!paper) continue;

    const entry = byAttempt.get(attempt.id) ?? {
      attemptId: attempt.id,
      submittedAt: attempt.submitted_at,
      subjectName: paper.subjects?.name ?? "",
      paperNumber: paper.paper_number,
      examDiet: paper.exam_diet,
      year: paper.year,
      marksAwarded: 0,
      marksPossible: 0,
      pct: 0,
    };
    entry.marksAwarded += row.marks_awarded ?? 0;
    entry.marksPossible += row.marks_possible;
    byAttempt.set(attempt.id, entry);
  }

  const entries = [...byAttempt.values()];
  for (const e of entries) {
    e.pct = e.marksPossible > 0 ? Math.round((e.marksAwarded / e.marksPossible) * 100) : 0;
  }
  entries.sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));
  return entries;
}
