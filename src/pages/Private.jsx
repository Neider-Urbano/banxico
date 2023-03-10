import React, { useEffect } from "react";
import axios from "axios";
import Footer from "../components/pures/footers/Footer";
import NavPrivate from "../components/containers/navigations/NavPrivate";
import Main from "../components/containers/main/Main";

const Private = () => {
  useEffect(() => {
    axios
      .get(
        "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP74665,SF61745,SF60634,SF43773/datos/oportuno?token=ef53a06c30bb79b2a113d2c2b8c859086384619d9e10b1a03fd1f461b3612e5a"
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <NavPrivate />
      <Main />
      <Footer />
    </div>
  );
};

export default Private;
