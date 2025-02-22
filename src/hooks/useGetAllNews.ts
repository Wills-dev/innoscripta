import { Article } from "@/type";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllNews = () => {
  const [loading, setLoading] = useState(false);
  const [allNews, setAllNews] = useState([]);
  const [filter, setFilter] = useState("home");

  const nyTimesApiKey = import.meta.env.VITE_APP_NY_TIMES_KEY;
  const theGuardainApiKey = import.meta.env.VITE_APP_GUARDIAN_KEY;
  const openNewsApiKey = import.meta.env.VITE_APP_OPEN_NEWS_KEY;

  const getAllNews = async () => {
    const theGuardianAPI = `https://content.guardianapis.com/search?show-elements=image&api-key=${theGuardainApiKey}`;
    const newYorkTimesAPI = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nyTimesApiKey}`;
    const openNewsAPI = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${openNewsApiKey}`;

    try {
      const [guardianRes, nyTimesRes, openNewsRes] = await Promise.all([
        axios.get(theGuardianAPI),
        axios.get(newYorkTimesAPI, {
          headers: {
            Accept: "application/json",
          },
        }),
        axios.get(openNewsAPI),
      ]);
      const articles = [
        ...newStructuredGuardianData(guardianRes?.data?.response?.results),
        ...newStructuredNYTimesData(nyTimesRes?.data?.results),
        ...newStructuredOpenNewsData(openNewsRes?.data?.articles),
      ];

      console.log("guardianRes", guardianRes);
      console.log("nyTimesRes", nyTimesRes);
      console.log("openNewsRes", openNewsRes);
    } catch (error) {
      console.log("error getting news", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const newStructuredGuardianData = (data: any): Article[] => {
    return data?.map((news: any) => ({
      id: news?.id,
      title: news?.webTitle,
      description: news?.fields?.trailText || "",
      imageUrl: news?.fields?.thumbnail || "",
      source: "The Guardian",
      author: news?.fields?.byline || "Unknown",
      publishedAt: news?.webPublicationDate,
      newsUrl: news?.webUrl,
      category: news?.sectionName,
    }));
  };

  const newStructuredNYTimesData = (data: any): Article[] => {
    return data?.map((news: any) => ({
      id: news?.uri,
      title: news?.title,
      description: news?.abstract || "",
      imageUrl: news?.multimedia?.length
        ? `https://www.nytimes.com/${news?.multimedia[0].url}`
        : "",
      source: "The New York Times",
      author: news?.byline || "Unknown",
      publishedAt: news?.published_date,
      newsUrl: news?.url,
      category: news?.subsection,
    }));
  };

  const newStructuredOpenNewsData = (data: any): Article[] => {
    return data?.map((news: any) => ({
      id: news?.url,
      title: news?.title,
      description: news?.description || "",
      imageUrl: news?.urlToImage || "",
      source: "Open News",
      author: news?.author || "Unknown",
      publishedAt: news?.publishedAt,
      newsUrl: news?.url,
      category: news?.subsection, //No category
    }));
  };

  return {
    allNews,
    loading,
  };
};
