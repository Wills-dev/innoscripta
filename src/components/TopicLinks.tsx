import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSource,
  setDate,
  resetFilters,
} from "../store/newsFilterSlice";
import { RootState } from "../store/store";

interface TopicLinksProps {
  categories: string[];
  sources: string[];
}

const TopicLinks = ({ categories, sources }: TopicLinksProps) => {
  const dispatch = useDispatch();
  const { category, source, date } = useSelector(
    (state: RootState) => state.newsFilter
  );

  return (
    <>
      <div className="space-y-4">
        <div className="flex-c-b flex-wrap border-primary-black pb-1 border-b-1  border-dotted">
          <p className="sub-heading ">Filter News By Category</p>
        </div>

        <ul className="space-y-2 pt-4">
          {categories.map((topic, index) => (
            <li
              key={index}
              className={`text-sm font-bold font-poly cursor-pointer ${
                category === topic ? "text-blue-300" : ""
              }`}
              onClick={() => dispatch(setCategory(topic))}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <p className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
          Filter News By Source
        </p>
        <ul className="space-y-2 pt-4">
          {sources.map((src, index) => (
            <li
              key={index}
              className={`text-sm font-bold font-poly cursor-pointer ${
                source === src ? "text-blue-300" : ""
              }`}
              onClick={() => dispatch(setSource(src))}
            >
              {src}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <p className="sub-heading border-b-1 border-primary-black pb-1 border-dotted">
          Filter News By Date
        </p>
        <input
          type="date"
          className="max-w-40 w-full p-2 border rounded-md outline-none"
          value={date || ""}
          onChange={(e) => dispatch(setDate(e.target.value))}
        />
      </div>
      <button
        className="w-fit bg-blue-200 py-1 px-4 rounded-md"
        onClick={() => dispatch(resetFilters())}
      >
        Reset Filters
      </button>
    </>
  );
};

export default TopicLinks;
