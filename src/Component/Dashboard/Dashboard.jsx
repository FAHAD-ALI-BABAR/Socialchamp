import React, { useState } from 'react'
import analyticsImg from "../../assets/analytics.png"
import publishImg from "../../assets/dashboard.png"
import calendarImg from "../../assets/calendar.png"
import engageImg from "../../assets/engage.png"
import listeningImg from "../../assets/check.png"
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("analytics");
  const imageSources = {
    publish: publishImg,
    calendar: calendarImg,
    analytics: analyticsImg,
    engage: engageImg,
    socialListening: listeningImg,
  };

  const features = [
    {
      id: "publish",
      label: "Publish",
      icon: "\u2708\ufe0f",
      Heading: "11 Platforms, 1 Dashboard",
      desc:
        "Our publish tool combines everything you need: workspace, integrations, drafts, queue, repeat posting, Auto RSS, Champ AI Suite, bulk uploads, and more!",
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: "\ud83d\uddd3\ufe0f",
      Heading: "Sync, Schedule, Socialize",
      desc:
        "Manage all content in a grid view with an intuitive drag-and-drop feature. With our social media management platform, you can create, edit, reschedule, delete, filter, and preview posts.",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "\ud83d\udcca",
      Heading: "Analyze Trends, Amplify Connections",
      desc:
        "Our social media management tool lets you track the performance of all posts on all platforms.",
    },
    {
      id: "engage",
      label: "Engage",
      icon: "\ud83d\udcac",
      Heading: "Click, Connect, Converse",
      desc:
        "Manage messages, comments, reviews, and mentions from a centralized inbox.",
    },
    {
      id: "socialListening",
      label: "Social Listening",
      icon: "\ud83c\udfb5",
      Heading: "Listen, Track, Respond",
      desc:
        "Actively monitor the online chatter surrounding your business to gain insights.",
    },
  ];
  return (
    <>

<div className="flex flex-col md:flex-row h-full w-full bg-gradient-to-r from-yellow-200 via-yellow-100 to-white">
      {/* Left Side Panel */}
      <div className="w-full md:w-1/2 p-8 md:p-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => setActiveTab(feature.id)}
            className={`flex items-center justify-between border-b py-4 cursor-pointer transition-all duration-300 group ${
              activeTab === feature.id ? "text-orange-600 bg-orange-50 rounded-xl px-3" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl bg-orange-100 text-orange-600 p-2 rounded-full shadow-sm">{feature.icon}</div>
              <div className="font-bold text-lg group-hover:text-orange-500 transition-colors duration-200">
                {feature.label}
              </div>
            </div>
            <div className="text-xl group-hover:text-orange-500">{activeTab === feature.id ? "\u25b2" : "\u25bc"}</div>
          </div>
        ))}

        <div className="mt-8 p-4 bg-orange-50 rounded-xl shadow-inner">
          <p className="text-2xl font-bold text-gray-800 mb-2">
            {features.find((f) => f.id === activeTab)?.Heading}
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            {features.find((f) => f.id === activeTab)?.desc}
          </p>
        </div>

        <button className="mt-8 px-5 py-3 bg-orange-500 text-white rounded-xl font-medium shadow hover:bg-orange-600 transition">
          Explore all features ➜
        </button>
      </div>

      {/* Right Image Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-yellow-300 rounded-tl-[60px] relative">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white w-full max-w-md md:max-w-lg lg:max-w-xl">
          <img
            key={activeTab}
            src={imageSources[activeTab]}
            alt={activeTab + " preview"}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
        <div className="absolute top-6 right-6 bg-white text-yellow-500 font-bold px-4 py-1 rounded-full shadow">Feature Preview</div>
      </div>
    </div>

    </>
  )
}

export default Dashboard
