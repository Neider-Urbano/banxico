import React from "react";

const TitlesSections = ({ title, informationTitle }) => {
  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        {informationTitle}
      </p>
    </>
  );
};

export default TitlesSections;
