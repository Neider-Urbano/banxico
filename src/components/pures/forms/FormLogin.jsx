import React from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/user");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
      <div className="grid grid-cols-1 gap-2">
        <div>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              required={true}
              placeholder="Your Email"
              className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
        </div>
        <div className="space-y-1">
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              required={true}
              placeholder="Your Password"
              className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            placeholder="Your password"
            className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="remember-me"
            className="block ml-2 text-sm text-neutral-600"
          >
            {" "}
            Remember me{" "}
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            {" "}
            Forgot your password?{" "}
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
