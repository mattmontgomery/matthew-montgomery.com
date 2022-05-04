import { differenceInDays, parseISO, format } from "date-fns";

export function formatDate(date: string) {
  const parsed = parseISO(date);
  const dayDiff = differenceInDays(new Date(), parsed) >= 365;
  const formattedMonth = format(parsed, "MMMM");
  return format(
    parsed,
    `${formattedMonth && formattedMonth.length > 5 ? "MMM. " : "MMMM"} dd${
      dayDiff ? ", yyyy" : ""
    }`
  );
}
