import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {testimonials} from "../../Constants/Data"
import { colors } from '../../Constants/Color';
// const testimonials = [
//     {
//       name: 'John Doe',
//       review: 'This tool has completely changed how I manage my brand on social media. Love it!',
//       image: 'https://randomuser.me/api/portraits/men/32.jpg',
//       rating: 5,
//     },
//     {
//       name: 'Emily Carter',
//       review: 'Scheduling and analytics have never been this easy. Highly recommend it!',
//       image: 'https://randomuser.me/api/portraits/women/44.jpg',
//       rating: 4.5,
//     },
//     {
//       name: 'Mike Johnson',
//       review: 'Intuitive interface and powerful AI features. I save hours every week!',
//       image: 'https://randomuser.me/api/portraits/men/75.jpg',
//       rating: 5,
//     },
//   ];
  const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>★</span>);
    }
  
    if (hasHalfStar) {
      stars.push(<span key="half">½</span>);
    }
  
    return (
      <div className="text-[#00ABE4] text-lg tracking-wider">
        {stars}
      </div>
    );
  };

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
  return (
    <>
     <section style={{backgroundColor:colors.secondary}} className=" py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-3">What Our Clients Say</h2>
        <p className="text-gray-600 text-xl">Real feedback from businesses growing with us</p>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div style={{backgroundColor:colors.white}} className=" rounded-2xl shadow-md p-16 mx-auto max-w-2xl text-center transition duration-500 ease-in-out transform">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-35 h-35 mx-auto rounded-full object-cover mb-4 border-4 border-orange-100"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
              <p className="text-gray-600 text-xl italic mb-3">"{testimonial.review}"</p>
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
        ))}
      </Slider>
    </section>

    </>
  )
}

export default Testimonials