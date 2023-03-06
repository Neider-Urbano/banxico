import React from "react";
import ButtonAzul from "../../pures/buttons/ButtonAzul";
import TitlesSections from "../../pures/TitlesSections";
import ListAdvantages from "../cards/ListAdvantages";

export const Advantages = () => {
  return (
    <section className="text-gray-600 body-font" id="advantage">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <TitlesSections
            title="Raw Denim Heirloom Man Braid"
            informationTitle="Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug."
          />
        </div>
        <ListAdvantages />
        <div className="mt-16">
          <ButtonAzul
            text="Get started"
            OnClickButton={() => {
              alert("Welcome to Banxico");
            }}
          />
        </div>
      </div>
    </section>
  );
};
