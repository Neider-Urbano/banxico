import React from "react";
import LinkDropdown from "../links/LinkDropdown";

const NavNotification = () => {
  return (
    <div className="relative" data-te-dropdown-ref>
      <a
        className="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        href="#"
        id="dropdownMenuButton1"
        role="button"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
      >
        <span className="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
          1
        </span>
      </a>
      <ul
        className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
        <LinkDropdown text="View" to="notifications/view" />
        <LinkDropdown text="Manage" to="notifications/manage" />
      </ul>
    </div>
  );
};

export default NavNotification;
