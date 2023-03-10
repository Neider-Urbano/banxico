import React from "react";
import LoginGoogle from "../../components/pures/buttons/LoginGoogle";
import FormLogin from "../../components/pures/forms/FormLogin";
import Logo from "../../assets/icons/icono.jpg";
const Login = () => {
  return (
    <section className="flex items-center px-5 mb-20 lg:px-20 ">
      <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
        <div className="mt-8">
          <div className="text-center">
            <div className="flex justify-center">
              <img src={Logo} alt="logo app" className="h-[30px]" />
              <p className="ml-1">Banxico</p>
            </div>
            <p className="mt-2 mb-7 text-gray-600">Log in to your account</p>
          </div>
          <FormLogin />
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-neutral-600 bg-white">
                {" "}
                Or continue with{" "}
              </span>
            </div>
          </div>
          <div>
            <LoginGoogle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
