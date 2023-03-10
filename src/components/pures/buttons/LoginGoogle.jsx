import React from "react";

const LoginGoogle = () => {
  return (
    <button
      type="submit"
      className="w-full items-center block px-10 py-3 bg-red-500 text-base text-white font-medium text-center transition duration-500 ease-in-out transform   rounded-xl hover:bg-red-600"
    >
      <div className="flex items-center justify-center">
        <span className="ml-4"> Log in with Google</span>
      </div>
    </button>
  );
};

export default LoginGoogle;
