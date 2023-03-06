import React from "react";
import NavLogo from "../../pures/navs/NavLogo";
import NavLogoUser from "../../pures/navs/NavLogoUser";
import NavNotification from "../../pures/navs/NavNotification";
import NavRoutes from "../../pures/navs/NavRoutes";

const dataLinks = [
  {
    to: "dashboard",
    text: "Dashboard",
  },
  {
    to: "settings",
    text: "Settings",
  },
  {
    to: "favorites",
    text: "Favorites",
  },
  {
    to: "calendar",
    text: "Calendar",
  },
];
const NavPrivate = () => {
  return (
    <header className="body-font" id="header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLogo />
        <NavRoutes dataLinks={dataLinks} />
        <div className="flex items-center">
          <NavNotification />
          <NavLogoUser />
        </div>
      </div>
    </header>
  );
};

export default NavPrivate;
