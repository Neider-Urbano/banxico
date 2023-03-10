import React from "react";
import LinkDropdown from "../links/LinkDropdown";

const NavLogoUser = () => {
  return (
    <div className="relative" data-te-dropdown-ref>
      <a
        className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
        href="#"
        id="dropdownMenuButton2"
        role="button"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
      >
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          className="h-[30px] rounded-full"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref
      >
        <li className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30">
          Name user
        </li>
        <LinkDropdown text="Profile" to="Profile" />
        <LinkDropdown text="Cookies" to="Cookies" />
        <LinkDropdown text="Sign off" to="/" />
      </ul>
    </div>
  );
};

export default NavLogoUser;
