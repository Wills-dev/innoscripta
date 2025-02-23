import { useEffect } from "react";

import SearchForm from "./SearchForm";
import NewsLetter from "./NewsLetter";
import NavigationLinks from "./NavigationLinks";
import TopicLinks from "./TopicLinks";
import SocialLinks from "./SocialLinks";
import NewsPreferences from "./NewsPreferences";

import { Article } from "@/type";
import { getFilterValues } from "@/helpers";

interface SidebarProps {
  isSidebarActive: boolean;
  setIsSideBarActive: (isSidebarActive: boolean) => void;
  allNews: Article[];
}

const Sidebar = ({
  isSidebarActive,
  setIsSideBarActive,
  allNews,
}: SidebarProps) => {
  const { categories, authors, sources } = getFilterValues(allNews);

  useEffect(() => {
    document.body.style.overflow = isSidebarActive ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarActive]);

  const handleActivateSidebar = () => {
    setIsSideBarActive(false);
  };

  return (
    <aside
      className={`w-full fixed left-0 min-h-screen h-screen  transform transition-all duration-700  ease-out backdrop-blur-sm z-20  ${
        isSidebarActive
          ? "-translate-x-0 pointer-events-auto"
          : "-translate-x-full pointer-events-none"
      }`}
    >
      <div className="flex h-full sm:gap-4 gap-2 relative">
        <div className="max-w-2xl w-full h-full no-scroll overflow-y-auto bg-primary-blue p-8 max-sm:px-4">
          <p className="sm:text-2xl text-xl font-light font-gt ">
            A nonprofit, independent media organization dedicated to telling
            stories of climate solutions and a just future.
          </p>
          <div className="pt-14 space-y-10">
            <div className="space-y-4">
              <p className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                Search
              </p>
              <SearchForm
                formStyle="sm:h-12 h-10 bg-white px-2"
                searchIcon={true}
                inputStyle="bg-white"
                arrowIconStyle="md:size-10 size-8"
                handleActivateSidebar={handleActivateSidebar}
              />
            </div>
            <NewsPreferences
              categories={categories}
              authors={authors}
              sources={sources}
              handleActivateSidebar={handleActivateSidebar}
            />

            <TopicLinks
              categories={categories}
              sources={sources}
              handleActivateSidebar={handleActivateSidebar}
            />

            <div className="space-y-4">
              <p className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                Go To
              </p>
              <NavigationLinks />
            </div>

            <SocialLinks />
            <NewsLetter />
          </div>
        </div>
        <button
          type="button"
          className="md:w-16 md:h-16 w-12 h-12 rounded-full max-sm:absolute top-6 right-6 bg-white shadow flex-c justify-center mt-4"
          onClick={handleActivateSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="sm:size-8 size-5"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
