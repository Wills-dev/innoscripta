import React from "react";
import { Link } from "react-router-dom";

const MoreNews = () => {
  return (
    <section className="bg-white py-16">
      <div className="padding-ctn w-full">
        <div className="grid  grid-cols-10 w-full gap-8">
          <Link
            to="/"
            className="lg:col-span-6 col-span-11 space-y-10 w-full flex flex-col max-sm:items-center"
          >
            <div className="max-w-full w-full bg-gray-600">
              <img
                src="/src/assets/images/Imagine2200-transparent.webp"
                alt=""
                className="max-w-full w-full h-auto object-cover"
              />
            </div>
            <h3 className="font-bold sm:text-5xl text-3xl font-poly leading-normal text-primary-black hover:underline transition-all duration-500 max-sm:text-center">
              Republicans once embraced ‘green banks.’ Trump is trying to raid
              them.
            </h3>
            <div className="flex-c gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-400">
                <img
                  src="/src/assets/images/epa-gold-bars.webp"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <Link to="/about" className="sub-heading">
                Jake Will
              </Link>
            </div>
          </Link>
          <div className="lg:col-span-4 col-span-11 grid grid-cols-2 gap-8">
            <div className="sm:col-span-1 col-span-2 w-full no-scroll">
              <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                More climate fiction
              </h6>
              <div className="overflow-x-auto flex sm:flex-col w-full mt-2">
                {["", "", "", "", "", ""].map((news, i) => (
                  <div
                    key={i}
                    className="w-full max-sm:min-w-72 sm:border-b-1 max-sm:border-r-1  py-4 max-sm:px-4 space-y-2"
                  >
                    <h3 className="font-light sm:text-lg hover-link">
                      <a href="" className="">
                        What a more sustainable tourism industry could look like
                      </a>
                    </h3>
                    <h6 className="text-sm font-bold hover-link">
                      <a href="http://">Claire Elise Thompson</a>
                    </h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-1 col-span-2 w-full ">
              <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
                Imagine winners
              </h6>
              <div className="flex flex-col w-full">
                {["", "", ""].map((news, i) => (
                  <div key={i} className="w-full border-b-1 py-4 space-y-2">
                    <a href="" className="">
                      <div className="">
                        <div className="max-w-full w-full">
                          <img
                            src="/src/assets/images/GettyImages-2196460551.webp"
                            alt=""
                            className="max-w-full w-full h-auto object-cover"
                          />
                        </div>
                        <h3 className="font-light sm:text-lg hover-link">
                          What a more sustainable tourism industry could look
                          like
                        </h3>
                      </div>
                    </a>

                    <Link
                      to="/about"
                      className="sub-heading hover:underline transition-all duration-500 ease-ou"
                    >
                      Clayton Will
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreNews;
