import React, { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const NotFound = lazy(() => import("../pages/NotFound"));
const Private = lazy(() => import("../pages/Private"));
const Public = lazy(() => import("../pages/Public"));
function Rutas() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Routes>
        <Route exact path="/" element={<Public />} />
        <Route exact path="/user" element={<Private />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Rutas;
