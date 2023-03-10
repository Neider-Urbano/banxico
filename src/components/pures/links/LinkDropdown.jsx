import React from "react";
import { Link } from "react-router-dom";

const LinkDropdown = ({ text, to }) => {
  return (
    <li>
      <Link
        to={`${to}`}
        className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        data-te-dropdown-item-ref
      >
        {text}
      </Link>
    </li>
  );
};

export default LinkDropdown;
