import { useState } from "react";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MoreNews from "@/components/MoreNews";
import Navbar from "@/components/Navbar";
import RecentNews from "@/components/RecentNews";
import ScrollTop from "@/components/ScrollTop";
import Sidebar from "@/components/Sidebar";
import Topics from "@/components/Topics";
import StaffPick from "@/components/StaffPick";
import useFilteredNews from "@/hooks/useFilteredNews";

import { useGetAllNews } from "@/hooks/useGetAllNews";
import FilterFeature from "@/components/FilterFeature";

const Home = () => {
  const [isSidebarActive, setIsSideBarActive] = useState(false);

  const { allNews, loading } = useGetAllNews();
  const filteredNews = useFilteredNews(allNews);

  const handleActivateSidebar = () => {
    setIsSideBarActive((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen w-full bg-gray-100">
      <ScrollTop />
      <Navbar handleActivateSidebar={handleActivateSidebar} />
      <Sidebar
        isSidebarActive={isSidebarActive}
        handleActivateSidebar={handleActivateSidebar}
        allNews={allNews}
      />
      <FilterFeature allNews={allNews} />
      <HeroSection filteredNews={filteredNews} />
      <RecentNews maxWidth="max-w-5xl" />
      <Topics />
      <StaffPick />
      <MoreNews />
      <RecentNews maxWidth="max-w-7xl" />
      <Footer />
    </main>
  );
};

export default Home;
