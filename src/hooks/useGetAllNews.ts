import { useEffect, useState } from "react";

import axios from "axios";

import { Article } from "@/type";
import {
  newStructuredGuardianData,
  newStructuredNYTimesData,
  newStructuredOpenNewsData,
} from "@/helpers";

export const useGetAllNews = () => {
  const [loading, setLoading] = useState(false);
  const [allNews, setAllNews] = useState<Article[]>([]);

  const nyTimesApiKey = import.meta.env.VITE_APP_NY_TIMES_KEY;
  const theGuardainApiKey = import.meta.env.VITE_APP_GUARDIAN_KEY;
  const openNewsApiKey = import.meta.env.VITE_APP_OPEN_NEWS_KEY;

  const getAllNews = async () => {
    setLoading(true);
    const theGuardianAPI = `https://content.guardianapis.com/search?show-elements=image&show-fields=trailText&api-key=${theGuardainApiKey}`;
    const newYorkTimesAPI = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nyTimesApiKey}`;
    const openNewsAPI = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${openNewsApiKey}`;

    try {
      const results = await Promise.allSettled([
        axios.get(theGuardianAPI),
        axios.get(newYorkTimesAPI),
        axios.get(openNewsAPI),
      ]);

      const articles = [];

      if (results[0].status === "fulfilled") {
        articles.push(
          ...newStructuredGuardianData(results[0].value.data.response.results)
        );
      } else {
        console.error("Guardian API failed:", results[0].reason);
      }

      if (results[1].status === "fulfilled") {
        articles.push(
          ...newStructuredNYTimesData(results[1].value.data.results)
        );
      } else {
        console.error("NY Times API failed:", results[1].reason);
      }

      if (results[2].status === "fulfilled") {
        articles.push(
          ...newStructuredOpenNewsData(results[2].value.data.articles)
        );
      } else {
        console.error("Open News API failed:", results[2].reason);
      }

      setAllNews(articles);
    } catch (error) {
      console.log("error getting news", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return {
    allNews,
    loading,
  };
};
