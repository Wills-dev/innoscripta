import { Link } from "react-router-dom";

const StaffPick = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="padding-ctn w-full">
        <div className="grid grid-cols-2 gap-10">
          <div className="lg:col-span-1 col-span-2 grid grid-cols-5 gap-8">
            <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted col-span-5">
              Extreme Weather
            </h6>
            <div className="sm:col-span-3 col-span-5">
              <Link to="/" className="w-full space-y-2 flex flex-col">
                <div className="max-w-full w-full bg-gray-600">
                  <img
                    src="/assets/images/epa-gold-bars.webp"
                    alt=""
                    className="max-w-full w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-light hover:underline transition-all duration-500">
                  Republicans once embraced ‘green banks.’ Trump is trying to
                  raid them.
                </h3>
                <div className="">
                  <Link to="/about" className="sub-heading font-poly">
                    Jake Will
                  </Link>
                </div>
              </Link>
            </div>
            <div className="sm:col-span-2 col-span-5">
              <div className="flex flex-col w-full">
                {["", "", "", ""].map((news, i) => (
                  <div
                    key={i}
                    className={`w-full border-b-1 space-y-2 ${
                      i > 0 ? "py-4" : "pt-0 pb-4"
                    }`}
                  >
                    <h3 className="font-light text-lg hover-link">
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
          </div>
          <div className="lg:col-span-1 col-span-2 grid grid-cols-5 gap-8">
            <h6 className="sub-heading border-b-1 border-primary-black pb-1 border-dotted col-span-5">
              Indigenous Affairs
            </h6>
            <div className="sm:col-span-3 col-span-5">
              <Link to="/" className="w-full space-y-2 flex flex-col">
                <div className="max-w-full w-full bg-gray-600">
                  <img
                    src="/assets/images/GettyImages-2196460551.webp"
                    alt=""
                    className="max-w-full w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-light hover:underline transition-all duration-500">
                  Sámi need better legal protections to save their homelands
                </h3>
                <div className="">
                  <Link to="/" className="sub-heading font-poly">
                    Taylar Dawn Stagner
                  </Link>
                </div>
              </Link>
            </div>
            <div className="sm:col-span-2 col-span-5">
              <div className="flex flex-col w-full">
                {["", "", "", ""].map((news, i) => (
                  <div
                    key={i}
                    className={`w-full border-b-1 space-y-2 ${
                      i > 0 ? "py-4" : "pt-0 pb-4"
                    }`}
                  >
                    <h3 className="font-light text-lg hover-link">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffPick;
