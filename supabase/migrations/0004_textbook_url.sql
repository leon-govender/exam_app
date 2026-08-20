-- textbook_ref was display-only text with no link. Add a URL so the study
-- page can render it as a real link, same as video_url already does.
alter table topics add column textbook_url text;
