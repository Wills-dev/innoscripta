import React from "react";
import ReadMore from "./ReadMore";
import { Article } from "@/type";

interface RecentNewsContentProps {
  randomNews: Article[];
  maxWidth: string;
  count: number;
}

const RecentNewsContent = ({
  maxWidth,
  randomNews,
  count,
}: RecentNewsContentProps) => {
  return (
    <div className={`${maxWidth} w-full `}>
      {randomNews?.slice(0, count).map((news, i) => (
        <div
          key={i}
          className="flex justify-between max-sm:flex-col-reverse gap-10 border-b-1  sm:py-8 py-6"
        >
          <div className="sm:space-y-6 space-y-4">
            <h3 className="sm:text-4xl text-2xl font-medium font-poly hover-link">
              <a href={news?.newsUrl} target="_blank" rel="noopener noreferrer">
                {news?.title}
              </a>
            </h3>
            <ReadMore
              text={news?.description}
              maxLength={100}
              style="md:max-w-[60%] max-w-[80%] text-lg font-gt font-light"
            />
            <div className="flex-c font-bold text-sm gap-2">
              <span className="hover-link">
                <a href="">{news?.author}</a>
              </span>{" "}
              .
              <span className="hover-link">
                <a href="">{news?.category}</a>
              </span>
            </div>
          </div>
          {news?.imageUrl && (
            <div className="md:w-80 w-full">
              {" "}
              <img
                src={news?.imageUrl}
                alt={news.title || "Recent News"}
                className="md:max-w-80 md:w-80 w-full min-w-full sm:max-h-48 object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecentNewsContent;
