import { Article } from "@/type";

export const getRandomizedNews = (array: Article[]): Article[] => {
  if (!array.length) return [];
  const randomizedNews = [...array].sort(() => Math.random() - 0.5);
  return randomizedNews;
};
