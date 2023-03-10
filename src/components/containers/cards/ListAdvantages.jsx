import React from "react";
import CardAdvantages from "../../pures/card/CardAdvantages";

const dataAdvantages = [
  "Agilidad en los procesos",
  "Diferentes colores para tus tableros",
  "Persistencia de datos",
  "Typewriter Polaroid Cray",
  "Pack Truffaut Blue",
  "The Catcher In The Rye",
];
const ListAdvantages = () => {
  return (
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      {dataAdvantages.map((advantage, key) => {
        return <CardAdvantages key={key + "r"} text={advantage} />;
      })}
    </div>
  );
};

export default ListAdvantages;
