import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";
import ToastModal from "../toasts/ToastModal";

const ModalPrivate = () => {
  const [toasModal, setToastModal] = useState(false);
  const onClickAdd = () => {
    const localStorage = window.localStorage.getItem("data");
    var newJson = [];
    if (localStorage || localStorage.length < 1) {
      newJson = [{}];
    } else {
      newJson = [{}];
      localStorage.push(newJson);
    }
    window.localStorage.setItem("data", newJson);
  };
  return (
    <div
      data-te-modal-init
      className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        data-te-modal-dialog-ref
        className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] py-[100px] px-[20px]"
      >
        <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <Header onToastModal={setToastModal} />
          <Form />
          <Footer onClickAdd={onClickAdd} />
          {toasModal && <ToastModal />}
        </div>
      </div>
    </div>
  );
};

export default ModalPrivate;
