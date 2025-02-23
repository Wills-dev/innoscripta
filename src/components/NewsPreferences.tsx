import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { setPreferences, clearPreference } from "@/store/newsPreferencesSlice";
import { filterValueProps } from "@/type";
import ExpandableButton from "./ExpandableButton";

const NewsPreferences = ({
  categories,
  authors,
  sources,
  handleActivateSidebar,
}: filterValueProps) => {
  const dispatch = useDispatch();
  const { preferredCategories, preferredSources, preferredAuthors } =
    useSelector((state: RootState) => state.preferences);

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(preferredCategories);
  const [selectedSources, setSelectedSources] =
    useState<string[]>(preferredSources);
  const [selectedAuthors, setSelectedAuthors] =
    useState<string[]>(preferredAuthors);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCatExpanded, setIsCatExpanded] = useState(false);
  const visibleAuthors = isExpanded ? authors : authors?.slice(0, 10);
  const visibleCategories = isCatExpanded
    ? categories
    : categories?.slice(0, 10);

  const toggleSelection = (
    list: string[],
    setList: Dispatch<SetStateAction<string[]>>,
    item: string
  ) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    );
  };

  const savePreferences = () => {
    dispatch(
      setPreferences({
        preferredCategories: selectedCategories,
        preferredSources: selectedSources,
        preferredAuthors: selectedAuthors,
      })
    );
    handleActivateSidebar();
  };

  const resetPreferences = () => {
    dispatch(clearPreference());
    setSelectedAuthors([]);
    setSelectedCategories([]);
    setSelectedSources([]);
  };

  return (
    <div className="max-w-lg w-full">
      <h2 className="sub-heading ">News Preferences</h2>

      {/* Preferences Selection */}
      <div className="my-4 border-primary-black pb-4 border-b-1  border-dotted">
        <p className="font-semibold">Categories</p>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {visibleCategories.map((cat) => (
            <label key={cat} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() =>
                  toggleSelection(
                    selectedCategories,
                    setSelectedCategories,
                    cat
                  )
                }
              />
              <span>{cat}</span>
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

      <div className="mb-4 border-primary-black pb-4 border-b-1  border-dotted">
        <p className="font-semibold">Sources</p>
        {sources.map((src) => (
          <label key={src} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedSources.includes(src)}
              onChange={() =>
                toggleSelection(selectedSources, setSelectedSources, src)
              }
            />
            <span>{src}</span>
          </label>
        ))}
      </div>

      <div className="mb-4 border-primary-black pb-4 border-b-1  border-dotted">
        <p className="font-semibold">Authors</p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {visibleAuthors?.map((auth) => (
            <label key={auth} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedAuthors.includes(auth)}
                onChange={() =>
                  toggleSelection(selectedAuthors, setSelectedAuthors, auth)
                }
              />
              <span>{auth}</span>
            </label>
          ))}
          {Array.isArray(authors) && authors.length > 10 && (
            <ExpandableButton
              isExpanded={isExpanded}
              toggleExpand={() => setIsExpanded((prev) => !prev)}
            />
          )}
        </motion.div>
      </div>

      <div className="flex flex-col gap-4 max-w-60 w-full">
        {" "}
        <button
          onClick={savePreferences}
          className="bg-primary-black text-white text-center w-full px-2 py-2"
        >
          Submit
        </button>{" "}
        <button
          onClick={resetPreferences}
          className="bg-white border-1 border-primary-black  px-2 py-2 w-full"
        >
          Reset Preferences
        </button>
      </div>
    </div>
  );
};

export default NewsPreferences;
