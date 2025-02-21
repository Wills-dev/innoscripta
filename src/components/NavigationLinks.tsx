import { Link } from "react-router-dom";

import { goTo } from "@/constants";

const NavigationLinks = () => {
  return (
    <ul className="grid grid-cols-6 gap-3">
      {goTo.map((link, index) => (
        <li
          key={index}
          className="sub-heading md:col-span-2 sm:col-span-3 col-span-6"
        >
          <Link to="/">{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
