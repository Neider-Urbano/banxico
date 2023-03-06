import React from "react";
import FormContact from "../../pures/forms/FormContact";
import TitlesSections from "../../pures/TitlesSections";
import { DivContact, DivDosContact, DivUnoContact } from "./Style";

const ContactUs = () => {
  return (
    <section className="text-gray-600 body-font relative" id="contactus">
      <DivContact>
        <DivUnoContact>
          <TitlesSections
            title="Contact Us"
            informationTitle="Let us know your comments through this form."
          />
        </DivUnoContact>
        <DivDosContact>
          <FormContact />
        </DivDosContact>
      </DivContact>
    </section>
  );
};

export default ContactUs;
