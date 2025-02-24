import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ScrollTop from "./ScrollTop";

import { Article } from "@/type";

interface MainLayoutProps {
  children: React.ReactNode;
  handleActivateSidebar: () => void;
  isSidebarActive: boolean;
  setIsSideBarActive: (active: boolean) => void;
  allNews: Article[];
}

const MainLayout = ({
  children,
  handleActivateSidebar,
  isSidebarActive,
  setIsSideBarActive,
  allNews,
}: MainLayoutProps) => {
  return (
    <main className="relative min-h-screen w-full bg-gray-100">
      <ScrollTop />
      <Navbar handleActivateSidebar={handleActivateSidebar} />
      <Sidebar
        isSidebarActive={isSidebarActive}
        setIsSideBarActive={setIsSideBarActive}
        allNews={allNews}
      />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
