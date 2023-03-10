import React from "react";

const RadioPrivate = ({ text, onClickRadio, name }) => {
  return (
    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 w-[45%]">
      <input
        id={`bordered-radio-${text}`}
        name={name}
        type="radio"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onClick={() => onClickRadio(text)}
      />
      <label
        htmlFor={`bordered-radio-${text}`}
        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};

export default RadioPrivate;
