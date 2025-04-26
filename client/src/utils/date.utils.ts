import { format, isToday, parseISO } from "date-fns";

export const formatTimestamp = (dateString: string) => {
  const date = parseISO(dateString);

  if (isToday(date)) return format(date, "HH:mm");
  return format(date, "d MMM yyyy, HH:mm");
};