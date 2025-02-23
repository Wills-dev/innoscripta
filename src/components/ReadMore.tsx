import { ReadMoreProps } from "@/type";
import { useState } from "react";

const ReadMore = ({ text, maxLength, style }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > maxLength;

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <p className={style}>
      {" "}
      {shouldTruncate && !isExpanded ? `${text.slice(0, maxLength)}...` : text}
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className="underline text-blue-300 text-xs font-medium"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

export default ReadMore;
