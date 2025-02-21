"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const screenHeight = window.innerHeight;
      // Show scroll-to-top button if user scrolls past screen height
      setShowScrollTop(currentScroll > screenHeight);

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary-blue text-primary-black p-3 rounded-full shadow-lg hover:bg-blue-200 transition-all duration-700 z-10 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M12 3a1 1 0 0 1 .71.29l6 6a1 1 0 0 1-1.42 1.42L13 6.41V20a1 1 0 1 1-2 0V6.41l-4.29 4.3a1 1 0 0 1-1.42-1.42l6-6A1 1 0 0 1 12 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollTop;
