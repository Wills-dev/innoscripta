import { Article } from "@/type";

interface HeroSectionProps {
  filteredNews: Article[];
  additionalStyling: string;
  firstSubHeading: string;
  secondSubHeading: string;
}

const HeroSection = ({
  filteredNews,
  additionalStyling,
  firstSubHeading,
  secondSubHeading,
}: HeroSectionProps) => {
  const mainNews = filteredNews[filteredNews.length - 1];

  return (
    <section className={`w-full ${additionalStyling}`}>
      <div className="padding-ctn w-full">
        <div className="grid  grid-cols-10 w-full gap-8 ">
          <a
            href={mainNews?.newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-6 col-span-11 space-y-6 w-full flex flex-col max-sm:items-center"
          >
            <h3 className="font-bold sm:text-5xl text-3xl font-poly  text-primary-black hover:underline transition-all duration-500 max-sm:text-center">
              {mainNews?.title}
            </h3>
            <h6 className="sub-heading">{mainNews?.source}</h6>
            <div className="max-w-full w-full bg-gray-600">
              <img
                src={mainNews?.imageUrl}
                alt={mainNews?.title || "News Image"}
                className="max-w-full w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </a>
          <div className="lg:col-span-4 col-span-11 grid grid-cols-2 gap-8">
            <div className="sm:col-span-1 col-span-2 w-full no-scroll">
              <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                {firstSubHeading && firstSubHeading}
              </h6>
              <div className="no-scroll overflow-x-auto flex sm:flex-col w-full mt-2">
                {filteredNews?.slice(0, 5).map((news, i) => (
                  <div
                    key={i}
                    className="w-full max-sm:min-w-72 sm:border-b-1 max-sm:border-r-1  py-4 max-sm:px-4 space-y-2"
                  >
                    <h3 className="font-light sm:text-lg hover-link">
                      <a
                        href={news?.newsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        {news?.title}
                      </a>
                    </h3>
                    <h6 className="text-sm font-bold">{news?.source}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-1 col-span-2 w-full ">
              <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                {secondSubHeading && secondSubHeading}
              </h6>
              <div className="flex flex-col w-full">
                {filteredNews?.slice(0, 3).map((news, i) => (
                  <div key={i} className="w-full border-b-1 py-4 space-y-2">
                    <a
                      href={news?.newsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <div className="">
                        {news?.imageUrl && (
                          <div className="max-w-full w-full">
                            <img
                              src={news?.imageUrl}
                              alt={news.title || "Featured News"}
                              className="max-w-full w-full sm:max-h-40 h-auto object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <h3 className="font-light sm:text-lg hover-link">
                          {news?.title}
                        </h3>
                      </div>
                    </a>

                    <span className="sub-heading">{news?.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
