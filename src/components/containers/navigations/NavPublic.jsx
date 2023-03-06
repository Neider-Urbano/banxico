import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/icono.jpg";
import ButtonAuth from "../../pures/buttons/ButtonAuth";
import NavLogo from "../../pures/navs/NavLogo";

const dataLinks = [
  {
    to: "advantage",
    text: "Advantages",
  },
  {
    to: "pricing",
    text: "Pricing",
  },
  {
    to: "contactus",
    text: "Contact us",
  },
];
const NavPublic = () => {
  return (
    <header className="body-font" id="header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLogo />
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
        <div className="flex gap-4">
          <ButtonAuth to="login" text="Sign in" />
          <ButtonAuth to="register" text="Sign up" />
        </div>
      </div>
    </header>
  );
};

export default NavPublic;
