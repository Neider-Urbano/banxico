import React from "react";
import Hero from "../../../assets/images/hero.jpg";
import { DivHero, DivUnoHero, TitleHero } from "./Style";
const HeroPublic = () => {
  return (
    <section className="text-gray-600 body-font" id="home">
      <DivHero>
        <DivUnoHero>
          <TitleHero>Before they sold out</TitleHero>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
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
