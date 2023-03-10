import React from "react";
import ButtonAzul from "../../pures/buttons/ButtonAzul";
import Input from "../inputs/Input";
import InputArea from "../inputs/InputArea";

const FormContact = () => {
  const handleClickButton = () => {
    alert("message send");
  };
  return (
    <div className="flex flex-wrap -m-2">
      <div className="p-2 w-1/2">
        <Input name="name" type="text" text="Name" />
      </div>
      <div className="p-2 w-1/2">
        <Input name="email" type="email" text="Email" />
      </div>
      <div className="p-2 w-full">
        <InputArea name="message" id="message" text="Message" />
      </div>
      <div className="p-2 w-full">
        <ButtonAzul text="Send" OnClickButton={handleClickButton} />
      </div>
    </div>
  );
};

export default FormContact;
