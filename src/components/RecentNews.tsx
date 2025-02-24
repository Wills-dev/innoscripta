import { useMemo } from "react";

import { Article } from "@/type";
import { getRandomizedNews } from "@/helpers/randomizedNews";

import ReadMore from "./ReadMore";
import RecentNewsContent from "./RecentNewsContent";

interface RecentNewsProps {
  maxWidth: string;
  filteredNews: Article[];
  sectionTitle?: string;
  count: number;
}

const RecentNews = ({
  maxWidth,
  filteredNews,
  sectionTitle,
  count,
}: RecentNewsProps) => {
  const randomNews = useMemo(
    () => getRandomizedNews(filteredNews),
    [filteredNews]
  );

  return (
    <section className="w-full">
      <div className="padding-ctn w-full">
        <div className="space-y-4">
          {sectionTitle && (
            <h2 className="border-b-1 border-primary-black pb-1 border-dotted font-medium sm:text-xl">
              {sectionTitle}
            </h2>
          )}
          <RecentNewsContent
            maxWidth={maxWidth}
            count={count}
            randomNews={randomNews}
          />
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
