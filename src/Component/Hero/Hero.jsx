import React from 'react'
import hero_sec_image from "../../assets/social-champ-hero_sec_img.png"
const Hero = () => {
  return (
   <>
     <section className="bg-white w-full min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full text-center md:flex-row  gap-40">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Effortless Social Media Management <br />
            Management —  <span className="text-orange-500">Save Time. Get Seen. Grow Faster. </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Social Champ uses AI to manage your scheduling, posting, and even content ideation. Try our social media management tool now, and save time to focus on what matters most – growing your business!
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center flex-wrap gap-4 ">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition duration-200 text-base md:text-lg">
              Start Free →
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-md transition duration-200 text-base md:text-lg">
              Book a demo →
            </button>
          </div>

          {/* Trial Note */}
          <p className="text-sm text-gray-500">Free for 14 days. No card required!</p>

         
          
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img
            src={hero_sec_image}
            alt="Social media dashboard"
            className="w-full max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
   </>
  )
}

export default Hero