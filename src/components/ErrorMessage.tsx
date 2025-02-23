import React from "react";

interface ErrorMessageProps {
  errorMsg: string;
}
export const ErrorMessage = ({ errorMsg }: ErrorMessageProps) => {
  return (
    <div className="w-full sm:pt-28 pt-20 h-[60vh]">
      <div className="padding-ctn w-full">
        <p className="">{errorMsg}</p>
      </div>
    </div>
  );
};
