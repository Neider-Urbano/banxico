import React from "react";
import Hero from "../../../assets/images/hero.jpg";
import { DivHero, DivUnoHero, TitleHero } from "./Style";
const HeroPublic = () => {
  return (
    <section className="text-gray-600 body-font" id="home">
      <DivHero>
        <DivUnoHero>
          <TitleHero>¡Unete a Banxico!</TitleHero>
          <p className="mb-8 leading-relaxed">
            Necesitas el mejor servicio para crear tableros personalizados,
            entonces, bienvenido a Banxico, pagina web donde podrás administrar
            y gestionar tus tableros. Empieza este viaje con Banxico y no te
            arrepentiras.
          </p>
        </DivUnoHero>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Hero}
          />
        </div>
      </DivHero>
    </section>
  );
};

export default HeroPublic;
