import React from 'react'
import logo from "../../assets/file.jpg";
import youtube_logo from "../../assets/youtube.svg"
import AWS_logo from "../../assets/AWS.png"
import Meta_logo from "../../assets/Meta.png"
import Tiktok_logo from "../../assets/Tiktok.png"
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaPinterestP,
    FaLinkedinIn,
    FaYoutube,
    FaThreads
} from "react-icons/fa6";

import {footerLinks} from "../../Constants/Data"
const Footer = () => {
   
  return (
    <>
     <footer className="bg-[#f8f9fa] px-6 py-12 md:px-16 text-[#333333]">
  <div className="max-w-screen-xl mx-auto">

    {/* footer sec */}
    <div className="flex flex-col gap-10">
      <div>
        <img src={logo} alt="socialchamp" className="h-20 mb-2 mr-12" />
      </div>

      <div className="flex flex-wrap justify-between gap-y-10 overflow-x-auto">
        {footerLinks.map((section) => (
          <div key={section.title} className="min-w-[200px] flex-shrink-0">
            <h3 className="font-extrabold mb-2 text-[20px] whitespace-nowrap">
              {section.title}
            </h3>
            <ul className="space-y-1 text-sm">
              {section.links.map((link) => (
                <li
                  key={link}
                  className="hover:underline cursor-pointer text-[18px] text-[#555]"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* social links */}
    {/* <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6 gap-6">
      <div className="flex items-center gap-6 opacity-70 text-sm flex-wrap justify-center">
        <img src={Meta_logo} alt="socialchamp" className="h-10 mb-2" />
        <img src={Tiktok_logo} alt="socialchamp" className="h-10 mb-2" />
        <img src={AWS_logo} alt="socialchamp" className="h-10 mb-2" />
      </div>

      <div className="flex items-center gap-4 text-lg text-[#3f3f3f] flex-wrap justify-center">
        <FaFacebookF className="w-8 h-8 hover:text-[#3b5998] transition-all duration-200 cursor-pointer"  />
        <FaXTwitter className="w-8 h-8 hover:text-[#000000] transition-all duration-200 cursor-pointer"  />
        <FaInstagram  className="w-8 h-8 hover:text-pink-500 transition-all duration-200 cursor-pointer" />
        <FaPinterestP className="w-8 h-8 hover:text-red-600 transition-all duration-200 cursor-pointer"  />
        <FaLinkedinIn className="w-8 h-8 hover:text-[#0077b5] transition-all duration-200 cursor-pointer" />
        <FaThreads className="w-8 h-8 hover:text-black transition-all duration-200 cursor-pointer"  />
        <FaYoutube className="w-8 h-8 hover:text-red-700 transition-all duration-200 cursor-pointer"  />
      </div>
    </div> */}

    {/* copyrights */}
    <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t pt-4 text-sm text-[#888]">
      <p className='text-[18px] text-[#555] text-center'>© Copyright 2025, All Rights Reserved</p>
      {/* <div className="flex gap-4 mt-2 md:mt-0 flex-wrap justify-center">
        <a href="#" className="hover:underline text-[18px] text-[#555]">Privacy Policy</a>
        <a href="#" className="hover:underline text-[18px] text-[#555]">Sitemap</a>
        <a href="#" className="hover:underline text-[18px] text-[#555]">Terms of Service</a>
      </div> */}
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer