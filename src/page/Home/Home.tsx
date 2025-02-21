import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RecentNews from "@/components/RecentNews";
import ScrollTop from "@/components/ScrollTop";
import Sidebar from "@/components/Sidebar";
import Topics from "@/components/Topics";
import { useState } from "react";

const Home = () => {
  const [isSidebarActive, setIsSideBarActive] = useState(false);

  const handleActivateSidebar = () => {
    setIsSideBarActive((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen w-full">
      <ScrollTop />
      <Navbar handleActivateSidebar={handleActivateSidebar} />
      <Sidebar
        isSidebarActive={isSidebarActive}
        handleActivateSidebar={handleActivateSidebar}
      />
      <HeroSection />
      <RecentNews />
      <Topics />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
};

export default Home;
