import React from 'react'
import trialimg from "../../assets/Homepage-Footer_4x.webp"

const Featuregrid = () => {
    
  return (
    <>
   <section className="bg-[#f4f6f8] px-6 py-14 md:py-20 max-w-full">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-white rounded-3xl p-6 md:p-10 shadow-md gap-10">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#dce2e8] rounded-[2rem] p-6 relative">
            <img
              src={trialimg}
              alt="Feature Preview"
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#032333] mb-4">
            Try SocialChamp for free. No strings attached.
          </h2>
          <p className="text-[#032333] text-base md:text-lg leading-relaxed mb-6 max-w-xl">
            With your free SocialChamp trial, you get instant access to social
            media scheduling, analytics, messaging, and social listening.
            Completely free.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-shadow shadow-md">
              Start your free 30-day trial
            </button>
            <button className="text-[#00315a] hover:underline font-semibold text-sm md:text-base">
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Featuregrid
