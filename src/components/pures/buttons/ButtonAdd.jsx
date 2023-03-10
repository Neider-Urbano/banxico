import React from "react";

const ButtonAdd = () => {
  return (
    <button
      className="px-7 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 "
      data-te-toggle="modal"
      data-te-target="#exampleModal"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      +
    </button>
  );
};

export default ButtonAdd;
