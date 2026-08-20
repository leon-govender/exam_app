import "server-only";
import { createClient } from "@/lib/supabase/server";

export async function getCurrentUser() {
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
