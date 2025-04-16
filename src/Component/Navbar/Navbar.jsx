import React, { useState } from 'react';
import logo from "../../assets/file.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
      <nav className="hidden md:flex w-full items-center justify-between px-6 lg:px-20 xl:px-40 py-6 shadow-sm font-sans bg-white">
       
        <div className="flex items-center">
          <img
            src={logo}
            alt="SocialChamp Logo"
            className="h-auto max-h-[90px] w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] object-contain"
          />
        </div>

      
        {/* <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 text-[#3f3f3f]">
          {['Why Social Champ', 'Product', 'Resources'].map((item) => (
            <div key={item} className="flex items-center space-x-1 cursor-pointer">
              <span className="text-[18px] font-[500]">{item}</span>
              <span className="text-[10px]">▼</span>
            </div>
          ))}
          <span className="text-[18px] font-[500] hover:underline cursor-pointer">Pricing</span>
          <span className="text-[18px] font-[500] hover:underline cursor-pointer">Contact Sales</span>
        </div> */}

        
        <div className="flex items-center space-x-4 lg:space-x-6">
          <button className="text-[16px] text-[#f16a21] font-medium hover:underline">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-[#fff176] text-[16px] font-semibold text-black rounded-lg px-4 py-2 shadow hover:underline">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </nav>

      
      <nav className="md:hidden w-full px-4 py-4 shadow-sm bg-white font-sans">
        <div className="flex justify-between items-center">
          <img
            src={logo}
            alt="SocialChamp Logo"
            className="h-10 w-auto object-contain"
          />
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 flex flex-col space-y-4 text-[#3f3f3f]">
            {['Why Social Champ', 'Product', 'Resources'].map((item) => (
              <div key={item} className="flex items-center space-x-2 cursor-pointer">
                <span className="text-[16px] font-medium">{item}</span>
                <span className="text-[10px]">▼</span>
              </div>
            ))}
            <span className="text-[16px] font-medium hover:underline">Pricing</span>
            <span className="text-[16px] font-medium hover:underline">Contact Sales</span>
            <hr />
            <button className="text-[16px] text-[#f16a21] font-medium hover:underline">Login</button>
            <button className="bg-[#fff176] text-[16px] font-semibold text-black rounded-lg px-4 py-2 shadow hover:underline">
              Start Free Trial
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;