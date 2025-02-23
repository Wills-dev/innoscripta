import { useMemo } from "react";

import { StaffPickContentProps } from "@/type";
import { getRandomizedNews } from "@/helpers/randomizedNews";

const StaffPickContent = ({ title, filteredNews }: StaffPickContentProps) => {
  const randomNews = useMemo(
    () => getRandomizedNews(filteredNews),
    [filteredNews]
  );
  const mainNews = randomNews[randomNews.length - 1];

  return (
    <div className="lg:col-span-1 col-span-2 grid grid-cols-5 gap-8">
      <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted col-span-5 h-fit">
        {title}
      </h6>
      <div className="sm:col-span-3 col-span-5">
        <a
          href={mainNews?.newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full space-y-2 flex flex-col"
        >
          <div className="max-w-full w-full bg-gray-600">
            <img
              src={mainNews?.imageUrl}
              alt={mainNews?.title}
              className="max-w-full w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-lg font-light hover:underline transition-all duration-500">
            {mainNews?.title}
          </h3>
          <div className="">
            <h6 className="sub-heading font-poly">{mainNews?.author}</h6>
          </div>
        </a>
      </div>
      <div className="sm:col-span-2 col-span-5">
        <div className="flex flex-col w-full">
          {randomNews?.slice(0, 4).map((news, i) => (
            <div
              key={i}
              className={`w-full border-b-1 space-y-2 ${
                i > 0 ? "py-4" : "pt-0 pb-4"
              }`}
            >
              <h3 className="font-light text-lg hover-link">
                <a
                  href={news?.newsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {news?.title}
                </a>
              </h3>
              <h6 className="text-sm font-bold hover-link">{news?.author}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPickContent;
