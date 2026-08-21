import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/queries";
import { formatExamDiet } from "@/lib/format";
import { ExamClient } from "./ExamClient";

export default async function ExamPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const supabase = await createClient();

  const { data: attempt } = await supabase
    .from("attempts")
    .select("id, user_id, paper_id, submitted_at")
    .eq("id", attemptId)
    .single();

  if (!attempt || attempt.user_id !== user.id) notFound();
  if (attempt.submitted_at) redirect(`/results/${attemptId}`);

  const { data: paper } = await supabase
    .from("papers")
    .select("*")
    .eq("id", attempt.paper_id)
    .single();
  if (!paper) notFound();

  const { data: subject } = await supabase
    .from("subjects")
    .select("name")
    .eq("id", paper.subject_id)
    .single();

  const { data: questions } = await supabase
    .from("questions")
    .select("id, number, sub_number, text, marks, order_index, topic_id, image_url")
    .eq("paper_id", attempt.paper_id)
    .order("order_index");

  const topicIds = [...new Set((questions ?? []).map((q) => q.topic_id).filter(Boolean))] as string[];
  const { data: topics } = topicIds.length
    ? await supabase.from("topics").select("id, name").in("id", topicIds)
    : { data: [] };
  const topicNameById = new Map((topics ?? []).map((t) => [t.id, t.name]));

  const questionsWithTopic = (questions ?? []).map((q) => ({
    ...q,
    topicName: q.topic_id ? (topicNameById.get(q.topic_id) ?? null) : null,
  }));

  return (
    <ExamClient
      attemptId={attemptId}
      paper={{
        subjectPaper: `${subject?.name ?? ""} ${paper.paper_number}`,
        diet: formatExamDiet(paper.exam_diet, paper.year),
        title: `${subject?.name ?? ""} ${paper.paper_number} — ${paper.exam_diet} ${paper.year}`,
        durationMinutes: paper.duration_minutes,
        totalMarks: paper.total_marks,
      }}
      questions={questionsWithTopic}
    />
  );
}
