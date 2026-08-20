import "server-only";
import { createClient } from "@/lib/supabase/server";

export async function getCurrentUser() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    // Not configured yet — treat as signed out so pages redirect to /login
    // instead of crashing (see .env.example).
    return null;
  }
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function getSubjects() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("subjects").select("*").order("name");
  if (error) throw error;
  return data;
}

export async function getPapersForSubject(subjectId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("papers")
    .select("*")
    .eq("subject_id", subjectId)
    .order("year", { ascending: false });
  if (error) throw error;
  return data;
}

/** First paper in the subject the user hasn't submitted an attempt for yet. */
export async function getNextUnattemptedPaper(userId: string, subjectId: string) {
  const supabase = await createClient();
  const { data: papers, error } = await supabase
    .from("papers")
    .select("*")
    .eq("subject_id", subjectId)
    .order("year", { ascending: false });
  if (error) throw error;
  if (!papers?.length) return null;

  const { data: attempted } = await supabase
    .from("attempts")
    .select("paper_id")
    .eq("user_id", userId)
    .not("submitted_at", "is", null);
  const attemptedIds = new Set((attempted ?? []).map((a) => a.paper_id));

  return papers.find((p) => !attemptedIds.has(p.id)) ?? papers[0];
}

export interface UpcomingExam {
  subjectId: string;
  subjectName: string;
  paperNumber: string;
  examType: string;
  examDate: string;
  startTime: string | null;
}

/** The soonest exam_schedule entry that hasn't happened yet, across all subjects. */
export async function getNextExam(): Promise<UpcomingExam | null> {
  const supabase = await createClient();
  const today = new Date().toISOString().slice(0, 10);

  const { data, error } = await supabase
    .from("exam_schedule")
    .select("subject_id, paper_number, exam_type, exam_date, start_time")
    .gte("exam_date", today)
    .order("exam_date", { ascending: true })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;

  const { data: subject } = await supabase
    .from("subjects")
    .select("name")
    .eq("id", data.subject_id)
    .single();

  return {
    subjectId: data.subject_id,
    subjectName: subject?.name ?? "",
    paperNumber: data.paper_number,
    examType: data.exam_type,
    examDate: data.exam_date,
    startTime: data.start_time,
  };
}

export async function getPaperWithQuestions(paperId: string) {
  const supabase = await createClient();
  const { data: paper, error: paperErr } = await supabase
    .from("papers")
    .select("*, subjects(name)")
    .eq("id", paperId)
    .single();
  if (paperErr) throw paperErr;

  const { data: questions, error: qErr } = await supabase
    .from("questions")
    .select("*")
    .eq("paper_id", paperId)
    .order("order_index");
  if (qErr) throw qErr;

  return { paper, questions: questions ?? [] };
}
