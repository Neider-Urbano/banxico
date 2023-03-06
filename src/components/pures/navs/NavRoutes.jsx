import React from "react";

const NavRoutes = ({ dataLinks }) => {
  return (
    <nav className="text-gray-600  md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {dataLinks.map((link, key) => {
        return (
          <a
            href={`#${link.to}`}
            className="mr-5 cursor-pointer hover:text-gray-900"
            key={key + "*"}
          >
            {link.text}
          </a>
        );
      })}
    </nav>
  );
};

export default NavRoutes;
