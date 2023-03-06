import React from "react";

const ButtonAzul = ({ text, OnClickButton }) => {
  return (
    <button
      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      onClick={OnClickButton}
    >
      {text}
    </button>
  );
};

export default ButtonAzul;
