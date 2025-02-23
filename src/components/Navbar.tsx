import { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { topics } from "@/constants";

import Logo from "./Logo";

interface NavbarProps {
  handleActivateSidebar: () => void;
}

const Navbar = ({ handleActivateSidebar }: NavbarProps) => {
  const [visible, setVisible] = useState(true);
  const [isHeightGreaterThan400, setIsHeightGreaterThan400] = useState(false);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const currentScroll = window.scrollY;

      if (currentScroll > 50 && currentScroll < 400) {
        setVisible(false);
        setIsHeightGreaterThan400(false);
      } else if (currentScroll >= 400) {
        setVisible(true);
        setIsHeightGreaterThan400(true);
      } else {
        setVisible(true);
        setIsHeightGreaterThan400(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navbarClasses = `padding-x bg-primary-blue w-full fixed transition-transform duration-700 z-10 ${
    visible ? "translate-y-0" : "-translate-y-full"
  } ${isHeightGreaterThan400 && "border-b border-primary-black border-dotted"}`;

  const navClasses = `flex-c-b ${
    isHeightGreaterThan400 ? "py-3" : "sm:py-1 py-3"
  }`;

  const logoHeight = isHeightGreaterThan400 ? "sm:h-10 h-8" : "sm:h-20 h-10";

  return (
    <header className={navbarClasses}>
      <nav className={navClasses}>
        <p
          className={`${
            isHeightGreaterThan400 && "hidden"
          } sub-heading max-md:hidden`}
        >
          Climate. Justice. Solutions.
        </p>
        <Link to="/">
          <Logo logoHeight={logoHeight} />
        </Link>

        {isHeightGreaterThan400 && (
          <ul className="flex-c gap-6 font-basis text-primary-black font-bold max-md:hidden">
            {topics.map((item, i) => (
              <li
                key={i}
                className="hover:text-gray-500 transition-all duration-500 cursor-pointer"
              >
                {item.topic}
              </li>
            ))}
          </ul>
        )}

        <div onClick={handleActivateSidebar} className="flex-c gap-2">
          <a href="#search">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="md:size-6 size-5"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <button type="button" aria-label="Toggle Sidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:size-8 size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
