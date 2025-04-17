import React, { useState } from 'react'
import logo from "../../assets/file.jpg";
import caroline from "../../assets/caroline.png";
import mobile from "../../assets/mobile.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from 'axios';
import { colors } from '../../Constants/Color';
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmpassword,setconfirmpassword]=useState("");
  const [name,setname]=useState("");
  const [email,setemail]=useState("")
  const [error,seterror]=useState("");
  const [success,setsuccess]=useState("");
  

  const handleSubmitForm=async(e)=>{
    e.preventDefault();
    if(password!=confirmpassword){
      seterror("password does not match");
    }
    try{
      const response=await axios.post("http://localhost:8000/api/users/register/");
      console.log("registration successful",response.data);

      setsuccess(true);
      
      seterror(false);

    }catch(err){
      console.log("Registeration unsuccessful",err);
      seterror(err.response?.data?.message || "Something went wrong");
    }
  }
  

  

  return (
    <>
      <div className="flex flex-col lg:flex-row h-full lg:h-screen font-sans">
  {/* left-side-form-code */}
  <div style={{backgroundColor:colors.white}} className="w-full lg:w-1/2 xl:w-1/3  flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-10">
    <img
      src={logo}
      alt="Logo"
      className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] max-w-full h-auto mb-10"
    />

    <h1 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold text-[#1A1A1A] mb-6">
      Register
    </h1>

    <form className="w-full" onSubmit={handleSubmitForm}>
      <label className="block text-[16px] sm:text-[18px] font-semibold mb-1">
        Name
      </label>
      <input
      onChange={(e)=>{
        setname(e.target.name)
      }}
        type="text"
        className="w-full px-3 py-[12px] text-[16px] sm:text-[18px] border border-gray-300 rounded-md mb-4 focus:outline-none"
      />

      <label className="block text-[16px] sm:text-[18px] font-semibold mb-1">
        Email address
      </label>
      <input
      onChange={(e) => setemail(e.target.value)}
        type="email"
        className="w-full px-3 py-[12px] text-[16px] sm:text-[18px] border border-gray-300 rounded-md mb-4 focus:outline-none"
      />

      <label className="block text-[16px] sm:text-[18px] font-semibold mb-1">
        Password
      </label>
      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-[12px] text-[16px] sm:text-[18px] border border-gray-300 rounded-md focus:outline-none"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-[18px]"
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>

      <label className="block text-[16px] sm:text-[18px] font-semibold mb-1">
        Confirm Password
      </label>
      <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
            className="w-full px-3 py-[12px] border border-gray-300 rounded-md mb-2 focus:outline-none"
            required
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {success && <p className="text-green-600 text-sm mb-3">Registered successfully!</p>}


      <button
        type="submit"
        style={{backgroundColor:colors.primary}}
        className="w-full  text-white text-[18px] font-semibold py-[10px] rounded-md cursor-pointer hover:bg-blue-500"
      >
        Register
      </button>

      <button
        type="button"
        style={{backgroundColor:colors.white}}
        className="w-full mt-4 py-[10px] rounded-md cursor-pointer font-semibold text-[18px] flex items-center justify-center gap-3  text-gray-700 border border-gray-300 shadow hover:shadow-md hover:bg-gray-50 transition"
      >
        <FcGoogle className="w-6 h-6" />
        Continue with Google
      </button>
    </form>

    <div className="mt-8 text-[12px] text-gray-500 text-center sm:text-left">
      <a href="#" className="hover:underline mr-2">
        Terms and Conditions
      </a>
      <span>•</span>
      <a href="#" className="hover:underline ml-2">
        Privacy Policy
      </a>
    </div>
  </div>

  {/* right-image-section-code */}
  <div className="hidden lg:flex w-full lg:w-1/2 xl:w-2/3 bg-[#FEF08A] justify-center items-center">
    <img
      src={caroline}
      alt="Illustration"
      className="w-full max-w-[1000px] object-contain"
    />
  </div>
</div>

    </>
  );
}

export default Register;
