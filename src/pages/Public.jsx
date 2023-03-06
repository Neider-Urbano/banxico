import React from "react";
import ContactUs from "../components/containers/contactus/ContactUs";
import { Advantages } from "../components/containers/advantages/Advantages";
import HeroPublic from "../components/containers/heros/HeroPublic";
import NavPublic from "../components/containers/navigations/NavPublic";
import Pricing from "../components/containers/pricing/Pricing";
import Footer from "../components/pures/footers/Footer";

function Public() {
  return (
    <div>
      <NavPublic />
      <HeroPublic />
      <Advantages />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Public;
