import React, { useEffect, useState } from "react";
import InputPrivate from "../inputs/InputPrivate";
import RadioPrivate from "../inputs/RadioPrivate";
import SelectPrivate from "../inputs/SelectPrivate";

const dataTipoVisualization = [
  {
    value: "Choose a series",
    key: "select",
  },
];

const dataFormatDate = [
  {
    value: "Choose a formar date",
    key: "select",
  },
];

const dataColors = [
  {
    value: "Choose a color",
    key: "select",
  },
];
const Form = () => {
  const [tipo, setTipo] = useState(true);
  const onClickRadio = (data) => {
    if (data === "grafico") {
      setTipo(false);
    } else if (data === "tabla") {
      setTipo(true);
    }
  };
  useEffect(() => {}, [tipo]);

  return (
    <div className="relative flex-auto p-4" data-te-modal-body-ref>
      <SelectPrivate data={dataTipoVisualization} />
      <div>
        <label>Choose a visualization type</label>
        <div className="md:flex md:justify-between">
          <RadioPrivate
            text="tabla"
            onClickRadio={onClickRadio}
            name="radiotipo"
          />
          <RadioPrivate
            text="grafico"
            onClickRadio={onClickRadio}
            name="radiotipo"
          />
        </div>
      </div>
      <div>
        <label>Choose a date range </label>
        <div className="md:flex md:justify-between">
          <InputPrivate labelText="Start" />
          <InputPrivate labelText="End" />
        </div>
      </div>
      {tipo ? (
        <div>
          <InputPrivate />
          <SelectPrivate data={dataFormatDate} />
        </div>
      ) : (
        <div>
          <SelectPrivate data={dataColors} />
          <InputPrivate />
        </div>
      )}
      <div>
        <InputPrivate />
        <div className="md:flex md:justify-between">
          <RadioPrivate
            text="Spanish"
            onClickRadio={onClickRadio}
            name="radioidioma"
          />
          <RadioPrivate
            text="English"
            onClickRadio={onClickRadio}
            name="radioidioma"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
