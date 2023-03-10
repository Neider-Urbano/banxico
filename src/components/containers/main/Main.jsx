import React from "react";
import ButtonAdd from "../../pures/buttons/ButtonAdd";
import ModalPrivate from "../../pures/modals/ModalPrivate";

const Main = () => {
  return (
    <div className="px-14">
      <div className="pt-7">
        <div className="pb-2 flex w-full items-center justify-between">
          <h1>Add new visualization</h1>
          <hr className="w-[85%]"></hr>
        </div>
        <ButtonAdd />
      </div>
      <div className="pt-12">
        <div className="pb-2 flex w-full items-center justify-between">
          <h1>Dashboard</h1>
          <hr className="w-[85%]"></hr>
        </div>
      </div>
      <ModalPrivate />
    </div>
  );
};

export default Main;
