import React from "react";

const CardPricing = ({ textMain, price, badge, arrayAdvantage, popular }) => {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div
        className={`h-full p-6 rounded-lg border-2 ${
          popular ? "border-indigo-500" : "border-gray-300"
        } flex flex-col relative overflow-hidden"`}
      >
        {popular && (
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
        )}
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          {textMain}
        </h2>
        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>{price}</span>
          <span className="text-lg ml-1 font-normal text-gray-500">
            {badge}
          </span>
        </h1>
        {arrayAdvantage.map((advantage, key) => {
          return (
            <p
              className={`flex items-center text-gray-600 ${
                key + 1 == arrayAdvantage.length ? "mb-6" : "mb-2"
              }`}
              key={key + "q"}
            >
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              {advantage}
            </p>
          );
        })}
        <button
          className={`flex items-center mt-auto text-white ${
            popular ? "bg-indigo-500" : "bg-gray-400"
          } border-0 py-2 px-4 w-full focus:outline-none ${
            popular ? "hover:bg-indigo-600" : "hover:bg-gray-500"
          } rounded`}
        >
          Select
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
};

export default CardPricing;
