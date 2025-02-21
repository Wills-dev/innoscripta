const NewsLetter = () => {
  return (
    <div className="space-y-4 max-sm:pb-16">
      <p className="text-sm">
        Get your weekly dose of good climate news to your inbox
      </p>
      <form className="flex-c gap-2 w-full">
        <input
          type="email"
          className="max-w-md w-full flex-1 sm:h-12 h-10 bg-white border-1 border-primary-black caret-blue-300 outline-none px-2"
          placeholder="Email Address"
        />
        <button className="sm:h-12 h-10 sm:px-6 px-3 bg-white border-1 border-primary-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
