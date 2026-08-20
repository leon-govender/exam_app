const MONTH_ABBREV: Record<string, string> = {
  january: "Jan",
  february: "Feb",
  march: "Mar",
  april: "Apr",
  may: "May",
  june: "Jun",
  july: "Jul",
  august: "Aug",
  september: "Sep",
  october: "Oct",
  november: "Nov",
  december: "Dec",
};

/** "November (pilot excerpt)", 2023 -> "Nov 2023". Strips parentheticals, abbreviates months. */
export function formatExamDiet(examDiet: string, year: number): string {
  const clean = examDiet.replace(/\s*\(.*?\)\s*/g, "").trim();
  const abbreviated = clean
    .split(/([/\s])/)
    .map((part) => MONTH_ABBREV[part.toLowerCase()] ?? part)
    .join("");
  return `${abbreviated} ${year}`;
}
