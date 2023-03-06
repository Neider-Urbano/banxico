import React from "react";
import TitlesSections from "../../pures/TitlesSections";
import ListPricing from "../cards/ListPricing";

const Pricing = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden" id="pricing">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <TitlesSections
            title="Pricing"
            informationTitle="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical."
          />
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
              Monthly
            </button>
            <button className="py-1 px-4 focus:outline-none">Annually</button>
          </div>
        </div>
        <ListPricing />
      </div>
    </section>
  );
};

export default Pricing;
