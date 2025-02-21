const RecentNews = () => {
  return (
    <section className="w-full py-16">
      <div className="padding-ctn w-full">
        <div className="space-y-4">
          <h2 className="border-b-1 border-primary-black pb-1 border-dotted font-medium sm:text-xl">
            Recent
          </h2>
          <div className="max-w-5xl w-full ">
            {["", "", "", ""].map((news, i) => (
              <div
                key={i}
                className="flex justify-between max-sm:flex-col-reverse gap-10 border-b-1  sm:py-8 py-6"
              >
                <div className="sm:space-y-6 space-y-4">
                  <h3 className="sm:text-4xl text-2xl font-medium font-poly">
                    <a href="">
                      Bogs hold a key to climate solutions through carbon
                      sequestration, but many have been drained
                    </a>
                  </h3>
                  <p className="md:max-w-[60%] max-w-[80%] text-lg font-gt font-light">
                    In Illinois alone, more than 90 percent of wetlands have
                    been lost.
                  </p>
                  <div className="flex-c font-bold text-sm gap-2">
                    <span className="hover-link">
                      <a href="">Jess Savage, WNIJ</a>
                    </span>{" "}
                    .
                    <span className="hover-link">
                      <a href="">Solutions</a>
                    </span>
                  </div>
                </div>
                <div className="md:w-80 w-full">
                  {" "}
                  <img
                    src="/assets/images/epa-gold-bars.webp"
                    alt=""
                    className="md:max-w-80 md:w-80 w-full min-w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
