import { Article } from "@/type";
import { getFilterValues } from "@/helpers";

import TopicLinks from "./TopicLinks";
import RecentNews from "./RecentNews";
import SearchForm from "./SearchForm";
import RecentNewsContent from "./RecentNewsContent";
import { useState } from "react";

interface CatalogProps {
  setIsSideBarActive: (isSidebarActive: boolean) => void;
  filteredNews: Article[];
  allNews: Article[];
}

const Catalog = ({
  setIsSideBarActive,
  filteredNews,
  allNews,
}: CatalogProps) => {
  const { categories, sources } = getFilterValues(allNews);
  const [activateMobileFilter, setActivateMobileFilter] = useState(false);

  const classStyle =
    "xl:pt-8 max-xl:fixed max-xl:z-20 max-xl:w-full max-xl:min-h-screen max-xl:h-screen max-xl:transform left-0 top-0 max-xl:bg-primary-blue transition-all duration-700 no-scroll overflow-y-auto ";

  return (
    <section className="w-full sm:pt-40 pt-16 relative">
      <div className="padding-ctn w-full">
        <SearchForm
          formStyle="sm:h-16 h-14  border-b-1 border-primary-black"
          searchIcon={false}
          inputStyle="sm:text-5xl text-2xl font-bold bg-gray-100"
          arrowIconStyle="md:size-14 size-10"
          handleActivateSidebar={() => setIsSideBarActive(false)}
        />
        <div className="w-full pt-8 xl:hidden">
          <button
            className="flex-c justify-center bg-white gap-2 w-full py-2 text-center border-1 border-primary-black"
            onClick={() => setActivateMobileFilter(true)}
          >
            Filter{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex max-xl:flex-col gap-10 w-full">
          <div
            className={`${classStyle} ${
              activateMobileFilter
                ? " max-xl:translate-y-0 max-xl:pointer-events-auto"
                : "max-xl:translate-y-full max-xl:pointer-events-none"
            }`}
          >
            <TopicLinks
              activateMobileFilter={activateMobileFilter}
              setActivateMobileFilter={setActivateMobileFilter}
              sources={sources}
              categories={categories}
            />
          </div>
          <div className=" max-w-5xl w-full ">
            {" "}
            {filteredNews.length < 1 && allNews.length > 0 ? (
              <p className="sm:py-8 py-4 border-b-1 border-primary-black pb-1 border-dotted">
                There are no result that matched your search. Try something
                else.
              </p>
            ) : filteredNews.length > 0 && allNews.length > 0 ? (
              <p className="sm:py-8 py-4 border-b-1 border-primary-black pb-1 border-dotted  w-full">
                There are {filteredNews?.length} results that matched your
                search.
              </p>
            ) : null}
            {filteredNews.length > 0 && (
              <div className="w-full">
                <RecentNewsContent
                  maxWidth="max-w-5xl"
                  randomNews={filteredNews}
                  count={filteredNews?.length}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
