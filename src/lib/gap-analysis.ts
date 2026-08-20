import "server-only";
import { createClient } from "@/lib/supabase/server";

export type Severity = "gap" | "developing" | "strong";

export function severityFor(pct: number): Severity {
  if (pct < 50) return "gap";
  if (pct < 70) return "developing";
  return "strong";
}

interface AnsweredRow {
  marks_awarded: number;
  marks_possible: number;
  question_id: string;
  attempts: { id: string; submitted_at: string; paper_id: string };
  questions: {
    topic_id: string | null;
    cognitive_level_id: string | null;
    topics: { id: string; name: string; subject_id: string; textbook_ref: string | null; video_url: string | null } | null;
    cognitive_levels: { id: string; name: string } | null;
    papers: { id: string; subject_id: string; year: number; exam_diet: string; paper_number: string };
  };
}

/** All marked answers for a user's submitted attempts, newest attempt first. */
async function getAnsweredRows(userId: string): Promise<AnsweredRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("attempt_answers")
    .select(
      `marks_awarded, marks_possible, question_id,
       attempts!inner(id, submitted_at, paper_id, user_id),
       questions!inner(topic_id, cognitive_level_id,
         topics(id, name, subject_id, textbook_ref, video_url),
         cognitive_levels(id, name),
         papers(id, subject_id, year, exam_diet, paper_number))`,
    )
    .eq("attempts.user_id", userId)
    .not("attempts.submitted_at", "is", null)
    .not("marks_awarded", "is", null)
    .order("submitted_at", { referencedTable: "attempts", ascending: false });

  if (error) throw error;
  return (data ?? []) as unknown as AnsweredRow[];
}

export interface TopicPerf {
  topicId: string;
  topicName: string;
  textbookRef: string | null;
  videoUrl: string | null;
  marksAwarded: number;
  marksPossible: number;
  pct: number;
  severity: Severity;
  attemptsSeen: number;
}

export interface SubjectReadiness {
  subjectId: string;
  papersAttempted: number;
  overallPct: number;
  gapCount: number;
  topics: TopicPerf[];
}

/**
 * Readiness per subject, weighted toward the most recent attempt for each
 * topic (an old bad attempt shouldn't permanently sink a topic once it's
 * been retried and improved).
 */
export async function getSubjectReadiness(userId: string): Promise<Record<string, SubjectReadiness>> {
  const rows = await getAnsweredRows(userId); // newest attempt first

  const bySubject: Record<string, SubjectReadiness> = {};
  const seenTopicPerAttemptKey = new Set<string>(); // `${subjectId}:${topicId}` -> latest attempt already counted
  const topicLatestAttempt = new Map<string, string>(); // topicId -> attempt_id of most recent contributing attempt

  for (const row of rows) {
    const topic = row.questions.topics;
    const subjectId = row.questions.papers.subject_id;
    if (!topic) continue; // untagged questions don't contribute to gap analysis

    bySubject[subjectId] ??= {
      subjectId,
      papersAttempted: 0,
      overallPct: 0,
      gapCount: 0,
      topics: [],
    };
    const subj = bySubject[subjectId];

    // Only count a topic's marks from its single most recent attempt.
    const latest = topicLatestAttempt.get(topic.id);
    if (latest === undefined) {
      topicLatestAttempt.set(topic.id, row.attempts.id);
    } else if (latest !== row.attempts.id) {
      continue; // older attempt on an already-seen topic — skip
    }

    let topicEntry = subj.topics.find((t) => t.topicId === topic.id);
    if (!topicEntry) {
      topicEntry = {
        topicId: topic.id,
        topicName: topic.name,
        textbookRef: topic.textbook_ref,
        videoUrl: topic.video_url,
        marksAwarded: 0,
        marksPossible: 0,
        pct: 0,
        severity: "developing",
        attemptsSeen: 0,
      };
      subj.topics.push(topicEntry);
    }
    topicEntry.marksAwarded += row.marks_awarded;
    topicEntry.marksPossible += row.marks_possible;

    const key = `${topic.id}`;
    if (!seenTopicPerAttemptKey.has(key)) {
      seenTopicPerAttemptKey.add(key);
    }
  }

  for (const subj of Object.values(bySubject)) {
    let totalAwarded = 0;
    let totalPossible = 0;
    const paperIds = new Set<string>();
    for (const rowsForPaperCount of rows) {
      if (rowsForPaperCount.questions.papers.subject_id === subj.subjectId) {
        paperIds.add(rowsForPaperCount.attempts.paper_id);
      }
    }
    subj.papersAttempted = paperIds.size;

    for (const t of subj.topics) {
      t.pct = t.marksPossible > 0 ? Math.round((t.marksAwarded / t.marksPossible) * 100) : 0;
      t.severity = severityFor(t.pct);
      totalAwarded += t.marksAwarded;
      totalPossible += t.marksPossible;
    }
    subj.overallPct = totalPossible > 0 ? Math.round((totalAwarded / totalPossible) * 100) : 0;
    subj.gapCount = subj.topics.filter((t) => t.severity === "gap").length;
    subj.topics.sort((a, b) => a.pct - b.pct);
  }

  return bySubject;
}

export interface CognitivePerf {
  levelId: string;
  levelName: string;
  marksAwarded: number;
  marksPossible: number;
  pct: number;
}

export interface AttemptReport {
  attemptId: string;
  paperId: string;
  marksAwarded: number;
  marksPossible: number;
  pct: number;
  topics: TopicPerf[];
  cognitiveLevels: CognitivePerf[];
  flaggedGaps: { topic: TopicPerf; questionsInThisAttempt: number; priorLowAttempts: number }[];
}

/** Full gap report for a single (just-submitted) attempt, plus history for pattern detection. */
export async function getAttemptReport(userId: string, attemptId: string): Promise<AttemptReport> {
  const supabase = await createClient();
  const { data: answers, error } = await supabase
    .from("attempt_answers")
    .select(
      `marks_awarded, marks_possible, question_id,
       questions!inner(topic_id, cognitive_level_id,
         topics(id, name, subject_id, textbook_ref, video_url),
         cognitive_levels(id, name),
         papers(id, subject_id))`,
    )
    .eq("attempt_id", attemptId);
  if (error) throw error;

  const rows = (answers ?? []) as unknown as Omit<AnsweredRow, "attempts">[];
  if (rows.length === 0) {
    throw new Error("Attempt has no answers");
  }
  const paperId = rows[0].questions.papers.id;

  const topicMap = new Map<string, TopicPerf>();
  const cogMap = new Map<string, CognitivePerf>();
  let marksAwarded = 0;
  let marksPossible = 0;

  for (const row of rows) {
    marksAwarded += row.marks_awarded ?? 0;
    marksPossible += row.marks_possible;

    const topic = row.questions.topics;
    if (topic) {
      const t = topicMap.get(topic.id) ?? {
        topicId: topic.id,
        topicName: topic.name,
        textbookRef: topic.textbook_ref,
        videoUrl: topic.video_url,
        marksAwarded: 0,
        marksPossible: 0,
        pct: 0,
        severity: "developing" as Severity,
        attemptsSeen: 0,
      };
      t.marksAwarded += row.marks_awarded ?? 0;
      t.marksPossible += row.marks_possible;
      topicMap.set(topic.id, t);
    }

    const cog = row.questions.cognitive_levels;
    if (cog) {
      const c = cogMap.get(cog.id) ?? {
        levelId: cog.id,
        levelName: cog.name,
        marksAwarded: 0,
        marksPossible: 0,
        pct: 0,
      };
      c.marksAwarded += row.marks_awarded ?? 0;
      c.marksPossible += row.marks_possible;
      cogMap.set(cog.id, c);
    }
  }

  const topics = [...topicMap.values()].map((t) => ({
    ...t,
    pct: t.marksPossible > 0 ? Math.round((t.marksAwarded / t.marksPossible) * 100) : 0,
  }));
  topics.forEach((t) => (t.severity = severityFor(t.pct)));
  topics.sort((a, b) => a.pct - b.pct);

  const cognitiveLevels = [...cogMap.values()].map((c) => ({
    ...c,
    pct: c.marksPossible > 0 ? Math.round((c.marksAwarded / c.marksPossible) * 100) : 0,
  }));

  // Pattern detection: has this topic been weak (<70%) in earlier submitted attempts too?
  const gapTopics = topics.filter((t) => t.severity === "gap");
  const flaggedGaps = [];
  for (const topic of gapTopics) {
    const { data: priorRows } = await supabase
      .from("attempt_answers")
      .select(
        `marks_awarded, marks_possible, attempt_id,
         attempts!inner(id, user_id, submitted_at),
         questions!inner(topic_id)`,
      )
      .eq("questions.topic_id", topic.topicId)
      .eq("attempts.user_id", userId)
      .neq("attempt_id", attemptId)
      .not("attempts.submitted_at", "is", null);

    const byAttempt = new Map<string, { awarded: number; possible: number }>();
    for (const r of (priorRows ?? []) as unknown as {
      marks_awarded: number;
      marks_possible: number;
      attempt_id: string;
    }[]) {
      const agg = byAttempt.get(r.attempt_id) ?? { awarded: 0, possible: 0 };
      agg.awarded += r.marks_awarded ?? 0;
      agg.possible += r.marks_possible;
      byAttempt.set(r.attempt_id, agg);
    }
    const priorLowAttempts = [...byAttempt.values()].filter(
      (a) => a.possible > 0 && a.awarded / a.possible < 0.7,
    ).length;

    flaggedGaps.push({
      topic,
      questionsInThisAttempt: rows.filter((r) => r.questions.topic_id === topic.topicId).length,
      priorLowAttempts,
    });
  }

  return {
    attemptId,
    paperId,
    marksAwarded,
    marksPossible,
    pct: marksPossible > 0 ? Math.round((marksAwarded / marksPossible) * 100) : 0,
    topics,
    cognitiveLevels,
    flaggedGaps,
  };
}
