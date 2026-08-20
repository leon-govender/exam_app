-- Structured marking points for rule-based grading (no LLM required).
-- Each element: { "marks": number, "description": string, "keywords": string[] }
-- A point is awarded if any of its keyword phrases are found in the student's
-- answer (see src/lib/grader.ts). marking_notes (prose) is kept for human
-- reference on the study/results screens.

alter table memo_answers add column marking_points jsonb;
