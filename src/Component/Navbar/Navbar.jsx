import React, { useState } from 'react';
import logo from "../../assets/site-logo-new.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Large Screen Navbar */}
      <nav className="hidden xl:flex w-full items-center justify-between px-[350px] py-[30px] shadow-sm font-sans bg-white">
        <div className="flex items-center">
          <img src={logo} alt="SocialChamp Logo" className="h-[30px]" />
        </div>
        <div className="flex items-center space-x-[60px] text-[#3f3f3f]">
          <div className="flex items-center space-x-[4px] cursor-pointer">
            <span className="text-[20px] font-[500] text-[#464646]">Why Social Champ</span>
            <span className="text-[10px]">▼</span>
          </div>
          <div className="flex items-center space-x-[4px] cursor-pointer">
            <span className="text-[20px] font-[500] text-[#464646]">Product</span>
            <span className="text-[10px]">▼</span>
          </div>
          <div className="flex items-center space-x-[4px] cursor-pointer">
            <span className="text-[20px] font-[500] text-[#464646]">Resources</span>
            <span className="text-[10px]">▼</span>
          </div>
          <span className="text-[20px] font-[500] text-[#464646] cursor-pointer hover:underline">Pricing</span>
          <span className="text-[20px] font-[500] text-[#464646] cursor-pointer hover:underline">Contact Sales</span>
        </div>
        <div className="flex items-center space-x-[30px]">
          <button className="text-[20px] text-[#f16a21] font-medium hover:underline"><Link to="/login"> Login</Link></button>
          <button className="bg-[#fff176] text-[20px] font-semibold text-black rounded-lg px-[18px] py-[15px] shadow-md hover:underline">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* mobile and tablet screens */}
      <nav className="xl:hidden w-full px-6 py-4 shadow-sm bg-white font-sans">
        <div className="flex justify-between items-center">
          <img src={logo} alt="SocialChamp Logo" className="h-8" />
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