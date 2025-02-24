import { useSelector } from "react-redux";

import { Article } from "@/type";
import { RootState } from "@/store/store";

const useFilteredNews = (allNews: Article[]) => {
  const { preferredCategories, preferredSources, preferredAuthors } =
    useSelector((state: RootState) => state.preferences);

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const { filteredCategories, filteredSources, date } = useSelector(
    (state: RootState) => state.newsFilter
  );

  const hasPreferences =
    preferredCategories.length ||
    preferredSources.length ||
    preferredAuthors.length;

  const preferredNews = hasPreferences
    ? allNews.filter(
        (news) =>
          (!preferredCategories.length ||
            preferredCategories.includes(news.category)) &&
          (!preferredSources.length ||
            preferredSources.includes(news.source)) &&
          (!preferredAuthors.length || preferredAuthors.includes(news.author))
      )
    : allNews;

  const searchedNews = preferredNews.filter(
    (news) =>
      !searchQuery ||
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.source.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNews = searchedNews.filter(
    (news) =>
      (!filteredCategories.length ||
        filteredCategories.includes(news.category)) &&
      (!filteredSources.length || filteredSources.includes(news.source)) &&
      (!date || news.publishedAt === date)
  );

  return filteredNews;
};

export default useFilteredNews;
