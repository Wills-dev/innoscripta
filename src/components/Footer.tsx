import { footerNavs, subscribes } from "@/constants";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full min-h-screen bg-primary-blue py-16">
      <div className="padding-ctn w-full">
        <div className="">
          <h2 className="border-b-1 border-primary-black pb-1 border-dotted font-medium sm:text-xl">
            Subscribe
          </h2>
          <div className="flex-c gap-10 py-10 flex-wrap">
            <div className="w-52 h-52 bg-primary-black relative overflow-hidden">
              <div className="w-40 h-40 rounded-full bg-primary-blue -left-5 absolute -top-6"></div>
            </div>
            {subscribes?.map((subscribe, i) => (
              <div key={i} className="max-w-sm w-full space-y-6">
                <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                  {subscribe?.title}
                </h6>
                <p className="font-light">{subscribe?.description}</p>
                <button className="bg-white h-12 px-4 border-1 border-primary-black hover:border-2 hover:shadow-md transition-all duration-300">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-1 border-primary-black border-dotted ">
          <div className="py-10 flex-c justify-center w-full">
            <div className="max-w-md">
              <p className="text-center text-xl font-gt font-light leading-normal">
                The only newsroom focused on finding solutions at the
                intersection of climate and justice. Donate today to help keep
                Grist’s site and newsletters free.{" "}
              </p>
              <div className="flex justify-center pt-5">
                <button className="bg-red-400 border-1 border-primary-black px-3 h-12 text-white">
                  Support Innoscripta
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          {footerNavs?.map((section, index) => (
            <div key={index} className="space-y-6 flex-1  min-w-44 ">
              <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                {section?.heading}
              </h6>
              <ul className="space-y-4">
                {section?.links?.map((link, i) => (
                  <li
                    key={i}
                    className="text-sm font-light hover:text-blue-400 transition-all duration-300"
                  >
                    <a href={link?.link}>{link?.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex-c-b gap-10 flex-wrap py-16">
          <div className="text-sm font-light space-x-2">
            <p className="">
              © 1999-2025 Innoscripta News, Inc. All rights reserved.
            </p>
            <div className="flex-c gap-2">
              <Link to="/" className="underline">
                Terms of use
              </Link>{" "}
              |{" "}
              <Link to="/" className="underline">
                Privacy policy
              </Link>
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
