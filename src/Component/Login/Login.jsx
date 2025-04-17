import React, { useState } from 'react';
import logo from "../../assets/file.jpg";
import caroline from "../../assets/caroline.png";
import { FcGoogle } from "react-icons/fc";
import { colors } from '../../Constants/Color';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-full lg:h-screen font-sans">
      {/* left-side-form-codee */}
      <div style={{backgroundColor:colors.white}} className="w-full lg:w-1/2 xl:w-1/3  flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-10">
       <img
                  src={logo}
                  alt="Logo"
                  className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] max-w-full h-auto mb-10"
                />

        <h1 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold text-[#1A1A1A] mb-6">
          Login
        </h1>

        <div className="w-full">
          <label className="block text-[16px] sm:text-[18px] font-semibold mb-1">Email address</label>
          <input
            type="email"
            className="w-full px-3 py-[12px] text-[16px] sm:text-[18px] border border-gray-300 rounded-md mb-4 focus:outline-none"
          />

          <label className="block text-[16px] sm:text-[18px] font-semibold mb-1">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-[12px] text-[16px] sm:text-[18px] border border-gray-300 rounded-md focus:outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-[18px]"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button style={{backgroundColor:colors.primary}} className="w-full  text-white text-[18px] font-semibold py-[10px] rounded-md cursor-pointer hover:bg-blue-500">
            Login
          </button>
          <button style={{backgroundColor:colors.white}} className="w-full mt-4 py-[10px] rounded-md cursor-pointer font-semibold text-[18px] flex items-center justify-center gap-3  text-gray-700 border border-gray-300 shadow hover:shadow-md hover:bg-gray-50 transition">
          <FcGoogle  className="w-6 h-6" />
  Continue with Google
</button>


          <div className="flex flex-col sm:flex-row sm:justify-between mt-4 text-[14px] sm:text-[16px] font-semibold text-[#1A1A1A] space-y-2 sm:space-y-0">
            <a href="/register" className="hover:underline">Create an account</a>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>

          {/* <p className="text-sm sm:text-[15px] text-center text-[#1A1A1A] mt-6">
            We no longer support social sign on. Please click{" "}
            <a href="#" className="text-blue-600 font-semibold">here</a>{" "}
            to set your password and access your account.
          </p> */}
        </div>

        {/* <div className="mt-8 text-[12px] text-gray-500 text-center sm:text-left">
          <a href="#" className="hover:underline mr-2">Terms and Conditions</a>
          <span>•</span>
          <a href="#" className="hover:underline ml-2">Privacy Policy</a>
        </div> */}
      </div>

      {/* right-image-section-code */}
      <div className="hidden lg:flex w-full lg:w-1/2 xl:w-2/3 bg-[#FEF08A] justify-center items-center">
        <img src={caroline} alt="Illustration" className="w-full max-w-[1000px] object-contain" />
      </div>
    </div>
  );
};

export default Login;
