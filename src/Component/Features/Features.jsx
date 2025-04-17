import React from 'react'
import { FaMagic, FaHeadset, FaPiggyBank } from 'react-icons/fa';
import coin from "../../assets/coin.svg"
import heart from "../../assets/heart.png"
import headphone from "../../assets/headphone.png"
import { colors } from '../../Constants/Color';
const features = [
    {
      icon: <img src={heart} className="text-purple-600 text-4xl mb-4 w-28 h-28" />,
      title: 'Effortless Experience',
      description: 'Our seamless UI/UX simplifies your workflow, helping you cut content creation time by over 50%. Less stress, more impact.',
      highlight: '50% faster creation',
    },
    {
      icon: <img src={headphone} className="text-blue-600 text-4xl mb-4 w-24 h-24" />,
      title: 'Support that Cares',
      description: 'You’re never alone—our 24/7 team has a 96% satisfaction rate and responds within 30 minutes. We’ve got your back.',
      highlight: '96% satisfaction',
    },
    {
      icon: <img src={coin}  className="text-green-600 text-4xl mb-4 w-24 h-24" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Just honest, budget-friendly plans that help SMBs save up to 30% without compromising quality.',
      highlight: '30% savings',
    },
  ];

const Features = () => {
  return (
    <>
     <section className="bg-gray-50 py-16 px-4 md:px-20 text-center">
      <h2 className="text-6xl font-black text-gray-800 mb-10">
        Why You'll Love Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {features.map((feature, index) => (
          <div
            key={index}
            style={{backgroundColor:colors.secondary}}
            className=" rounded-2xl shadow-lg p-16 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="mb-6  flex justify-center items-center">
              {feature.icon}
            </div>
            <h3 className=" text-gray-800 mb-2 text-3xl font-black">{feature.title}</h3>
            <p className="text-gray-600 mb-3">{feature.description}</p>
            <p className="text-sm text-purple-500 font-medium">{feature.highlight}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Features