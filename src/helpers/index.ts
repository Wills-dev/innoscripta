import { Article } from "@/type";

export function formatDate(isoString: string) {
  return isoString.split("T")[0];
}

export const categorizeArticle = (news: any): string => {
  const title = news?.title?.toLowerCase() || "";
  const source = news?.source?.name?.toLowerCase() || "";

  if (source.includes("techcrunch")) return "Technology";
  if (source.includes("thenextweb")) return "Tech & Business";

  if (title.includes("crypto") || title.includes("blockchain"))
    return "Cryptocurrency";
  if (title.includes("ai") || title.includes("artificial intelligence"))
    return "AI & Machine Learning";
  if (title.includes("startup") || title.includes("funding"))
    return "Startups & Business";
  if (title.includes("iphone") || title.includes("samsung"))
    return "Mobile & Gadgets";
  if (
    title.includes("sports") ||
    title.includes("football") ||
    title.includes("nba")
  )
    return "Sports";
  if (
    title.includes("health") ||
    title.includes("medicine") ||
    title.includes("covid")
  )
    return "Health";

  return "General";
};

export const newStructuredGuardianData = (data: any): Article[] => {
  return data?.map((news: any) => ({
    id: news?.id,
    title: news?.webTitle,
    description: news?.fields?.trailText || "",
    imageUrl:
      news?.elements?.[0]?.assets?.find((asset: any) => asset?.file)?.file ||
      "",
    source: "The Guardian",
    author: news?.fields?.byline || "Unknown",
    publishedAt: formatDate(news?.webPublicationDate),
    newsUrl: news?.webUrl,
    category: news?.sectionName,
  }));
};

export const newStructuredNYTimesData = (data: any): Article[] => {
  return data?.map((news: any) => ({
    id: news?.uri,
    title: news?.title,
    description: news?.abstract || "",
    imageUrl: news?.multimedia?.length ? news?.multimedia[0]?.url : "",
    source: "The New York Times",
    author: news?.byline || "Unknown",
    publishedAt: formatDate(news?.published_date),
    newsUrl: news?.url,
    category: news?.subsection || "General",
  }));
};

export const newStructuredOpenNewsData = (data: any): Article[] => {
  return data?.map((news: any) => ({
    id: news?.url,
    title: news?.title,
    description: news?.description || "",
    imageUrl: news?.urlToImage || "",
    source: "Open News",
    author: news?.author || "Unknown",
    publishedAt: formatDate(news?.publishedAt),
    newsUrl: news?.url,
    category: categorizeArticle(news),
  }));
};

export const getFilterValues = (articles: Article[]) => {
  const categories = new Set<string>();
  const authors = new Set<string>();
  const sources = new Set<string>();

  articles.forEach((article) => {
    if (article.category) categories.add(article.category);
    if (article.author) authors.add(article.author);
    if (article.source) sources.add(article.source);
  });

  return {
    categories: Array.from(categories).sort(),
    authors: Array.from(authors).sort(),
    sources: Array.from(sources).sort(),
  };
};
