import React, { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Private = lazy(() => import("../pages/Private"));
const Public = lazy(() => import("../pages/Public"));

function Rutas() {
  return (
    <Suspense
      fallback={
        <div className="w-full flex justify-center pt-20 ">
          <div
            className="inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-danger opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      }
    >
      <Routes>
        <Route exact path="/" element={<Public />} />
        <Route exact path="/user" element={<Private />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Rutas;
