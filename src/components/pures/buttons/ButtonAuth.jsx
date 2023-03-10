import React from "react";
import { Link } from "react-router-dom";

const ButtonAuth = ({ text, to }) => {
  return (
    <button
      className={` inline-flex items-center ${
        to === "login"
          ? "bg-indigo-500 hover:bg-indigo-600 text-gray-100"
          : "bg-gray-100 hover:bg-gray-200 text-gray-600 "
      } border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0`}
    >
      <Link to={"/" + to}>{text}</Link>
    </button>
  );
};

export default ButtonAuth;
