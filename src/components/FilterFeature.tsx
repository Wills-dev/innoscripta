import { useDispatch, useSelector } from "react-redux";

import { Article } from "@/type";
import { RootState } from "@/store/store";
import { getFilterValues } from "@/helpers";
import { setCategory } from "../store/newsFilterSlice";

interface FilterFeatureProps {
  allNews: Article[];
}

const FilterFeature = ({ allNews }: FilterFeatureProps) => {
  const { categories } = getFilterValues(allNews);

  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.newsFilter);

  return (
    <section className="w-full sm:pt-28 pt-20">
      <div className="padding-ctn w-full">
        <div className="flex gap-6 border-b-1 border-primary-black pb-1 border-dotted overflow-x-auto no-scroll w-full">
          {categories?.map((cat) => (
            <span
              key={cat}
              onClick={() => dispatch(setCategory(cat))}
              className={`font-basis text-sm font-bold whitespace-nowrap hover:text-blue-300 transition-all duration-300 cursor-pointer ${
                category === cat ? "text-blue-300" : "text-primary-black "
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterFeature;
