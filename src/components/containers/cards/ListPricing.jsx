import React from "react";
import CardPricing from "../../pures/card/CardPricing";

const ListPricing = () => {
  return (
    <div className="flex flex-wrap -m-4 lg:justify-center">
      <CardPricing
        textMain="START"
        price="Free"
        badge=""
        popular={false}
        arrayAdvantage={[
          "Vexillologist pitchfork",
          "Tumeric plaid portland",
          "Mixtape chillwave tumeric",
        ]}
      />
      <CardPricing
        textMain="PRO"
        price="$38"
        badge="/mo"
        popular={true}
        arrayAdvantage={[
          "Vexillologist pitchfork",
          "Tumeric plaid portland",
          "Hexagon neutra unicorn",
          "Mixtape chillwave tumeric",
        ]}
      />
      <CardPricing
        textMain="BUSINESS"
        price="$56"
        badge="/mo"
        popular={false}
        arrayAdvantage={[
          "Vexillologist pitchfork",
          "Tumeric plaid portland",
          "Hexagon neutra unicorn",
          "Vexillologist pitchfork",
          "Mixtape chillwave tumeric",
        ]}
      />
    </div>
  );
};

export default ListPricing;
