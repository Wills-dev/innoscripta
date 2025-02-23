import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useSelector } from "react-redux";

import Loader from "@/components/Loader";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RecentNews from "@/components/RecentNews";
import ScrollTop from "@/components/ScrollTop";
import Sidebar from "@/components/Sidebar";
import Topics from "@/components/Topics";
import StaffPick from "@/components/StaffPick";
import useFilteredNews from "@/hooks/useFilteredNews";
import FilterFeature from "@/components/FilterFeature";

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

  const { category, source, date } = useSelector(
    (state: RootState) => state.newsFilter
  );

  const { allNews, loading } = useGetAllNews();
  const filteredNews = useFilteredNews(allNews);

  const handleActivateSidebar = () => {
    setIsSideBarActive((prev) => !prev);
  };

  const userFilterNotFound = useMemo(() => {
    return (
      (category || source || date) &&
      filteredNews.length === 0 &&
      allNews.length > 0
    );
  }, [category, source, date, filteredNews, allNews]);

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
  } else if (userFilterNotFound) {
    content = <ErrorMessage errorMsg={errorMessages.noFilterMatch} />;
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
        <FilterFeature allNews={allNews} />
        <HeroSection
          filteredNews={filteredNews}
          additionalStyling="pt-10"
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
    <main className="relative min-h-screen w-full bg-gray-100">
      <ScrollTop />
      <Navbar handleActivateSidebar={handleActivateSidebar} />
      <Sidebar
        isSidebarActive={isSidebarActive}
        setIsSideBarActive={setIsSideBarActive}
        allNews={allNews}
      />
      {content}
      <Footer />
    </main>
  );
};

export default Home;
