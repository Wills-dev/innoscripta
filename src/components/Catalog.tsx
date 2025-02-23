import { Article } from "@/type";

import RecentNews from "./RecentNews";
import SearchForm from "./SearchForm";
import NewsPreferences from "./NewsPreferences";
import { getFilterValues } from "@/helpers";

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
  const { categories, authors, sources } = getFilterValues(allNews);

  return (
    <section className="w-full sm:pt-40 pt-16">
      <div className="padding-ctn w-full">
        <SearchForm
          formStyle="sm:h-16 h-14  border-b-1 border-primary-black"
          searchIcon={false}
          inputStyle="sm:text-5xl text-2xl font-bold bg-gray-100"
          arrowIconStyle="md:size-14 size-10"
          handleActivateSidebar={() => setIsSideBarActive(false)}
        />
        <div className="flex gap-10 w-full">
          <div className="pt-8 max-xl:hidden">
            <NewsPreferences
              categories={categories}
              authors={authors}
              sources={sources}
              handleActivateSidebar={() => setIsSideBarActive(false)}
            />
          </div>
          <div className="w-full">
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
              <div className="">
                <RecentNews
                  maxWidth="max-w-7xl"
                  filteredNews={filteredNews}
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
