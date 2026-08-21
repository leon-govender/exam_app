-- Real past papers lean heavily on diagrams, synoptic charts, graphs, and
-- maps embedded in the question itself — the hand-authored pilot avoided
-- these entirely, which doesn't hold once real DBE papers are seeded.
alter table questions add column image_url text;
