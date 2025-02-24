import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useSelector } from "react-redux";

import Loader from "@/components/Loader";
import Catalog from "@/components/Catalog";
import HeroSection from "@/components/HeroSection";
import RecentNews from "@/components/RecentNews";
import Topics from "@/components/Topics";
import StaffPick from "@/components/StaffPick";
import useFilteredNews from "@/hooks/useFilteredNews";
import MainLayout from "@/components/MainLayout";

import { RootState } from "@/store/store";
import { useGetAllNews } from "@/hooks/useGetAllNews";
import { ErrorMessage } from "@/components/ErrorMessage";
import { errorMessages } from "@/constants";

const Home = () => {
  const [isSidebarActive, setIsSideBarActive] = useState(false);
  const [searchParams] = useSearchParams();

  const searchQ = searchParams.get("q") || "";

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const { preferredCategories, preferredSources, preferredAuthors } =
    useSelector((state: RootState) => state.preferences);

  const { allNews, loading } = useGetAllNews();
  const filteredNews = useFilteredNews(allNews);

  const handleActivateSidebar = () => {
    setIsSideBarActive((prev) => !prev);
  };

  const userPreferenceNotFound = useMemo(() => {
    return (
      (preferredCategories.length > 0 ||
        preferredSources.length > 0 ||
        preferredAuthors.length > 0) &&
      filteredNews.length === 0 &&
      allNews.length > 0
    );
  }, [
    preferredCategories,
    preferredSources,
    preferredAuthors,
    filteredNews,
    allNews,
  ]);

  const userSearch = useMemo(() => {
    return searchQ && searchQuery;
  }, [searchQ, searchQuery]);

  let content;
  if (loading) {
    content = <Loader />;
  } else if (allNews.length < 1) {
    content = <ErrorMessage errorMsg={errorMessages.noNews} />;
  } else if (userPreferenceNotFound) {
    content = <ErrorMessage errorMsg={errorMessages.noPreferencesMatch} />;
  } else if (userSearch) {
    content = (
      <Catalog
        setIsSideBarActive={setIsSideBarActive}
        filteredNews={filteredNews}
        allNews={allNews}
      />
    );
  } else {
    content = (
      <>
        <HeroSection
          filteredNews={filteredNews}
          additionalStyling="sm:pt-40 pt-28"
          firstSubHeading="Latest"
          secondSubHeading="Featured"
        />
        <RecentNews
          maxWidth="max-w-5xl"
          filteredNews={filteredNews}
          sectionTitle="Recent"
          count={10}
        />
        <Topics />
        <StaffPick filteredNews={filteredNews} />
        <HeroSection
          filteredNews={filteredNews}
          additionalStyling="bg-white py-16"
          firstSubHeading="Imagine winners"
          secondSubHeading="Best rated"
        />
        <RecentNews
          maxWidth="max-w-7xl"
          filteredNews={filteredNews}
          count={30}
        />
      </>
    );
  }

  return (
    <MainLayout
      handleActivateSidebar={handleActivateSidebar}
      allNews={allNews}
      setIsSideBarActive={setIsSideBarActive}
      isSidebarActive={isSidebarActive}
    >
      {content}
    </MainLayout>
  );
};

export default Home;
