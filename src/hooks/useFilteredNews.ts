import { useSelector } from "react-redux";

import { Article } from "@/type";
import { RootState } from "@/store/store";

const useFilteredNews = (allNews: Article[]) => {
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const { preferredCategories, preferredSources, preferredAuthors } =
    useSelector((state: RootState) => state.preferences);
  const { category, source, date } = useSelector(
    (state: RootState) => state.newsFilter
  );

  console.log("searchQuery", searchQuery);

  const hasPreferences =
    preferredCategories.length ||
    preferredSources.length ||
    preferredAuthors.length;

  const filteredNews = allNews.filter((news) => {
    const inPreferences =
      !hasPreferences ||
      ((!preferredCategories.length ||
        preferredCategories.includes(news.category)) &&
        (!preferredSources.length || preferredSources.includes(news.source)) &&
        (!preferredAuthors.length || preferredAuthors.includes(news.author)));

    const inFilters =
      (!category || news.category === category) &&
      (!source || news.source === source) &&
      (!date || news.publishedAt === date);

    const inSearch =
      !searchQuery ||
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.source.toLowerCase().includes(searchQuery.toLowerCase());

    console.log("inSearch", inSearch);

    return inPreferences && inSearch && inFilters;
  });

  return filteredNews;
};

export default useFilteredNews;
