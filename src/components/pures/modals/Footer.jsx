import React from "react";

const Footer = ({ onClickAdd }) => {
  return (
    <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
      <button
        type="button"
        className="inline-block bg-red-500 rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-600"
        data-te-modal-dismiss
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Cancel
      </button>
      <button
        type="button"
        className="ml-1 inline-block rounded bg-indigo-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={onClickAdd}
      >
        Generate
      </button>
    </div>
  );
};

export default Footer;
