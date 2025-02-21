import Navbar from "@/components/Navbar";
import ScrollTop from "@/components/ScrollTop";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const Home = () => {
  const [isSidebarActive, setIsSideBarActive] = useState(false);

  const handleActivateSidebar = () => {
    setIsSideBarActive((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen">
      <ScrollTop />
      <Navbar handleActivateSidebar={handleActivateSidebar} />
      <Sidebar
        isSidebarActive={isSidebarActive}
        handleActivateSidebar={handleActivateSidebar}
      />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
};

export default Home;
