import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/icono.jpg";

const NavLogo = () => {
  return (
    <Link
      className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      to="/"
    >
      <img src={Logo} alt="logo app" className="h-[30px]" />
      <span className="ml-3 text-xl">Banxico</span>
    </Link>
  );
};

export default NavLogo;
