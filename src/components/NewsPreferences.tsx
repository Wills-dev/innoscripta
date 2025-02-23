import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { setPreferences, clearPreference } from "@/store/newsPreferencesSlice";
import { filterValueProps } from "@/type";

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
    <div className="">
      <h2 className="sub-heading border-primary-black pb-1 border-b-1  border-dotted">
        News Preferences
      </h2>

      {/* Selected Preferences */}
      <div className="mt-2">
        {selectedCategories.length > 0 && (
          <>
            <p className="sub-heading">Preferred Categories:</p>
            <div className="flex flex-wrap gap-1">
              {selectedCategories.map((c: string) => (
                <span key={c} className="text-sm font-light">
                  {c},
                </span>
              ))}
            </div>
          </>
        )}
        {selectedSources.length > 0 && (
          <>
            <p className="sub-heading mt-2">Preferred Sources:</p>
            <div className="flex flex-wrap gap-1">
              {selectedSources.map((s: string) => (
                <span key={s} className="text-sm font-light">
                  {s},
                </span>
              ))}
            </div>
          </>
        )}
        {selectedAuthors.length > 0 && (
          <>
            {" "}
            <p className="sub-heading mt-2">Preferred Authors:</p>
            <div className="flex flex-wrap gap-1 ">
              {selectedAuthors.map((a: string) => (
                <span key={a} className="text-sm font-light">
                  {a},
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Preferences Selection */}
      <div className="my-4">
        <p className="font-semibold">Categories</p>

        {categories.map((cat) => (
          <label key={cat} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() =>
                toggleSelection(selectedCategories, setSelectedCategories, cat)
              }
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
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

      <div className="mb-4">
        <p className="font-semibold">Authors</p>
        <div className="max-h-48 overflow-y-auto">
          {authors?.map((auth) => (
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
        </div>
      </div>

      <div className="flex gap-4">
        {" "}
        <button
          onClick={savePreferences}
          className="bg-blue-300 px-2 py-1 rounded-md w-fit"
        >
          Save Preferences
        </button>{" "}
        <button
          onClick={resetPreferences}
          className="bg-blue-300 px-2 py-1 rounded-md w-fit"
        >
          Reset Preferences
        </button>
      </div>
    </div>
  );
};

export default NewsPreferences;
