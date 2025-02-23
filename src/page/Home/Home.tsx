import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

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
import Loader from "@/components/Loader";

const Home = () => {
  const location = useLocation();

  const [isSidebarActive, setIsSideBarActive] = useState(false);

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const { allNews, loading } = useGetAllNews();
  const filteredNews = useFilteredNews(allNews);

  const searchParams = new URLSearchParams(location.search);
  const searchQ = searchParams.get("q") || "";

  const handleActivateSidebar = () => {
    setIsSideBarActive((prev) => !prev);
  };

  const userSearch = searchQ && searchQuery;

  return (
    <main className="relative min-h-screen w-full bg-gray-100">
      <ScrollTop />
      <Navbar handleActivateSidebar={handleActivateSidebar} />
      <Sidebar
        isSidebarActive={isSidebarActive}
        setIsSideBarActive={setIsSideBarActive}
        allNews={allNews}
      />

      {loading ? (
        <Loader />
      ) : (
        <>
          {userSearch ? (
            <Catalog
              setIsSideBarActive={setIsSideBarActive}
              filteredNews={filteredNews}
              allNews={allNews}
            />
          ) : (
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
          )}
        </>
      )}
      <Footer />
    </main>
  );
};

export default Home;
