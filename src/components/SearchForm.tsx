import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { setSearchQuery, clearSearch } from "../store/searchSlice";

interface SearchFormProps {
  handleActivateSidebar: () => void;
  formStyle: string;
  searchIcon: boolean;
  inputStyle: string;
  arrowIconStyle: string;
}

const SearchForm = ({
  handleActivateSidebar,
  formStyle,
  searchIcon,
  inputStyle,
  arrowIconStyle,
}: SearchFormProps) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const [inputValue, setInputValue] = useState(searchQuery);

  const hasUserTyped = searchQuery || inputValue;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(setSearchQuery(inputValue));
    navigate(`/?q=${encodeURIComponent(inputValue.trim())}`);
    handleActivateSidebar();
  };

  return (
    <form
      className={`flex-c-b sm:gap-4 ${formStyle}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      {searchIcon && (
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="md:size-8 size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="flex-1 w-full h-full flex-c-b">
        <input
          id="search"
          type="search"
          placeholder="Search"
          className={`"lex-1 outline-none h-full caret-primary-blue capitalize ${inputStyle}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {hasUserTyped && (
          <button
            type="button"
            onClick={() => {
              dispatch(clearSearch());
              setInputValue("");
              navigate("/");
            }}
            className="text-red-500 font-bold"
          >
            X
          </button>
        )}
      </div>

      <button
        type="submit"
        className="hover:text-blue-200 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={arrowIconStyle}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
