import { useState } from "react";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { setFilter, setDate, clearFilter } from "../store/newsFilterSlice";
import { RootState } from "../store/store";

import ExpandableButton from "./ExpandableButton";
import { toggleSelection } from "@/helpers";

interface TopicLinksProps {
  categories: string[];
  sources: string[];
  activateMobileFilter: boolean;
  setActivateMobileFilter: (activateMobileFilter: boolean) => void;
}

const TopicLinks = ({
  categories,
  sources,
  activateMobileFilter,
  setActivateMobileFilter,
}: TopicLinksProps) => {
  const dispatch = useDispatch();
  const { filteredCategories, filteredSources, date } = useSelector(
    (state: RootState) => state.newsFilter
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    filteredCategories || []
  );
  const [selectedSources, setSelectedSources] = useState<string[]>(
    filteredSources || []
  );
  const [isCatExpanded, setIsCatExpanded] = useState(false);

  const visibleCategories = isCatExpanded
    ? categories
    : categories?.slice(0, 10);

  const saveFilter = () => {
    dispatch(
      setFilter({
        filteredCategories: selectedCategories,
        filteredSources: selectedSources,
      })
    );
    setDate(date);
    setActivateMobileFilter(false);
  };

  const resetFilter = () => {
    dispatch(clearFilter());
    setSelectedSources([]);
    setSelectedCategories([]);
    setDate(null);
  };

  return (
    <div className="relative max-xl:p-8 max-sm:px-4">
      <button
        type="button"
        className="xl:hidden md:w-16 md:h-16 w-12 h-12 rounded-full max-xl:absolute top-6 right-6 bg-white shadow flex-c justify-center mt-4"
        onClick={() => setActivateMobileFilter(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="sm:size-8 size-5"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="space-y-4 border-primary-black py-4 border-b-1  border-dotted">
        <h6 className="sub-heading ">Categories</h6>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          {visibleCategories?.map((cat) => (
            <label key={cat} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories?.includes(cat)}
                onChange={() =>
                  toggleSelection(
                    selectedCategories,
                    setSelectedCategories,
                    cat
                  )
                }
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
          {Array.isArray(categories) && categories?.length > 10 && (
            <ExpandableButton
              isExpanded={isCatExpanded}
              toggleExpand={() => setIsCatExpanded((prev) => !prev)}
            />
          )}
        </motion.div>
      </div>
      <div className="space-y-4 border-b-1 border-primary-black py-4 border-dotted">
        <h6 className="sub-heading">Source</h6>
        <div className="space-y-2">
          {sources?.map((src) => (
            <label key={src} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSources?.includes(src)}
                onChange={() =>
                  toggleSelection(selectedSources, setSelectedSources, src)
                }
              />
              <span className="text-sm">{src}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-2 border-b-1 border-primary-black py-4 border-dotted">
        <p className="sub-heading ">Date</p>
        <input
          type="date"
          className="max-w-40 w-full p-2 border rounded-md outline-none"
          value={date || ""}
          onChange={(e) => dispatch(setDate(e.target.value))}
        />
      </div>
      <div className="flex flex-col gap-2 max-w-60 w-full pt-6">
        <button
          onClick={saveFilter}
          className="bg-primary-black text-white text-center w-full px-2 py-2"
        >
          Submit
        </button>{" "}
        <button
          onClick={resetFilter}
          className="bg-white border-1 border-primary-black  px-2 py-2 w-full"
        >
          Reset filter
        </button>
      </div>
    </div>
  );
};

export default TopicLinks;
