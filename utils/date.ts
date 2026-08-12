// utils/date.ts

export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};