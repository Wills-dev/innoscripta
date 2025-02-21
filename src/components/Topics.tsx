const Topics = () => {
  return (
    <section className="w-full py-16">
      <div className="padding-ctn w-full">
        <div className="space-y-4">
          <h2 className="border-b-1 border-primary-black pb-1 border-dotted font-medium sm:text-xl">
            Topics
          </h2>
          <div className="">
            <h3 className="font-700 font-poly sm:text-8xl text-6xl max-sm:text-center">
              Innoscripta reports on topics like{" "}
              <a
                href=""
                className="text-blue-300 transition-all duration-500 ease-out hover:border-b-1 hover:border-dotted border-primary-black "
              >
                Politics
              </a>
              ,{" "}
              <a
                href=""
                className="text-blue-300 transition-all duration-500 ease-out hover:border-b-1 hover:border-dotted border-primary-black "
              >
                Energy
              </a>
              ,{" "}
              <a
                href=""
                className="text-blue-300 transition-all duration-500 ease-out hover:border-b-1 hover:border-dotted border-primary-black "
              >
                Equity
              </a>
              ,{" "}
              <a
                href=""
                className="text-blue-300 transition-all duration-500 ease-out hover:border-b-1 hover:border-dotted border-primary-black "
              >
                Solutions
              </a>
              , and how they intersect with climate.
              <a
                href=""
                className="text-blue-300 transition-all duration-500 ease-out hover:border-b-1 hover:border-dotted border-primary-black "
              >
                {" "}
                All Topics
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
