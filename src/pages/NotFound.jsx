import React from "react";
import Logo from "../assets/icons/icono.jpg";
const NotFound = () => {
  return (
    <section className="px-4 py-32 mx-auto max-w-7xl">
      <div className="w-full mx-auto lg:w-1/3">
        <a
          href="#"
          title="Hellonext Home Page"
          className="flex items-center text-gray-600"
        >
          <img src={Logo} alt="logo app" className="h-[30px]" />
          <span className="ml-2">Banxico</span>
        </a>
        <p className="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">
          Page not found (404)
        </p>
        <p className="mb-3 text-base font-medium text-gray-700">
          The page you're looking for may have moved or no longer exists. Head
          back to our{" "}
          <button
            className="underline"
            onClick={() => {
              window.history.go(-1);
            }}
          >
            homepage
          </button>
          , or take a look at one of the sections below.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
