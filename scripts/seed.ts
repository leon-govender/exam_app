import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "../.env.local") });

import { createClient } from "@supabase/supabase-js";
import {
  subject,
  cognitiveLevels,
  topics,
  paper,
  questions,
} from "./seed-data/geography-p1-pilot";

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
    );
    process.exit(1);
  }
  const supabase = createClient(url, key, { auth: { persistSession: false } });

  console.log(`Seeding subject: ${subject.name}`);
  let { data: subjectRow } = await supabase
    .from("subjects")
    .select("id")
    .eq("name", subject.name)
    .maybeSingle();
  if (!subjectRow) {
    const { data, error } = await supabase
      .from("subjects")
      .insert(subject)
      .select("id")
      .single();
    if (error) throw error;
    subjectRow = data;
  }
  const subjectId = subjectRow!.id;

  console.log("Seeding cognitive levels");
  const cogLevelIds: Record<string, string> = {};
  for (const cl of cognitiveLevels) {
    const { data: existing } = await supabase
      .from("cognitive_levels")
      .select("id")
      .eq("subject_id", subjectId)
      .eq("name", cl.name)
      .maybeSingle();
    if (existing) {
      cogLevelIds[cl.name] = existing.id;
    } else {
      const { data, error } = await supabase
        .from("cognitive_levels")
        .insert({ ...cl, subject_id: subjectId })
        .select("id")
        .single();
      if (error) throw error;
      cogLevelIds[cl.name] = data.id;
    }
  }

  console.log("Seeding topics");
  const topicIds: Record<string, string> = {};
  for (const t of topics) {
    const { data: existing } = await supabase
      .from("topics")
      .select("id")
      .eq("subject_id", subjectId)
      .eq("name", t.name)
      .maybeSingle();
    if (existing) {
      topicIds[t.key] = existing.id;
    } else {
      const { data, error } = await supabase
        .from("topics")
        .insert({
          subject_id: subjectId,
          name: t.name,
          caps_term: t.caps_term,
          textbook_ref: t.textbook_ref,
          video_url: t.video_url,
        })
        .select("id")
        .single();
      if (error) throw error;
      topicIds[t.key] = data.id;
    }
  }

  console.log("Seeding paper");
  let { data: paperRow } = await supabase
    .from("papers")
    .select("id")
    .eq("subject_id", subjectId)
    .eq("year", paper.year)
    .eq("exam_diet", paper.exam_diet)
    .eq("paper_number", paper.paper_number)
    .maybeSingle();
  if (!paperRow) {
    const { data, error } = await supabase
      .from("papers")
      .insert({ ...paper, subject_id: subjectId })
      .select("id")
      .single();
    if (error) throw error;
    paperRow = data;
  }
  const paperId = paperRow!.id;

  console.log(`Seeding ${questions.length} questions + memos`);
  for (const [i, q] of questions.entries()) {
    const { data: existingQ } = await supabase
      .from("questions")
      .select("id")
      .eq("paper_id", paperId)
      .eq("number", q.number)
      .eq("sub_number", q.sub_number)
      .maybeSingle();

    let questionId: string;
    if (existingQ) {
      questionId = existingQ.id;
      await supabase
        .from("questions")
        .update({
          text: q.text,
          marks: q.marks,
          topic_id: topicIds[q.topicKey],
          cognitive_level_id: cogLevelIds[q.cognitiveLevelName],
          order_index: i,
        })
        .eq("id", questionId);
    } else {
      const { data, error } = await supabase
        .from("questions")
        .insert({
          paper_id: paperId,
          number: q.number,
          sub_number: q.sub_number,
          text: q.text,
          marks: q.marks,
          topic_id: topicIds[q.topicKey],
          cognitive_level_id: cogLevelIds[q.cognitiveLevelName],
          order_index: i,
        })
        .select("id")
        .single();
      if (error) throw error;
      questionId = data.id;
    }

    await supabase
      .from("memo_answers")
      .upsert(
        {
          question_id: questionId,
          model_answer: q.model_answer,
          marking_notes: q.marking_notes,
          marking_points: q.marking_points,
        },
        { onConflict: "question_id" },
      );
  }

  console.log("Done. Geography P1 pilot paper seeded.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
