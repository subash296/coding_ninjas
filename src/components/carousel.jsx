import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const testimonials = [
  {
    name: "CASIE H",
    title: "ALWAYS LEAVE WITH A SMILE!!",
    text: "Both my son and daughter seem to really enjoy the program  so far. They're excited to show me what they made that day, and they always leave with a smile. Parent's Night Out was also a great success!",
  },
  {
    name: "CASEY B",
    title: "LOVE THE FLEXIBILITY & PROGRAMS",
    text: "My son has been attending Code Ninjas in Los Alamitos for almost 2yrs now, they are amazing. Staff and owner is excellent. My son is learning a lot about coding. We love the flexibility and the ",
  },
  {
    name: "jANE D",
    title: "BLOWN AWAY",
    text: "I have been blown away by the positive impact Code Ninjas has had on the children in our community. Not only are they learning valuable technical skills, but they are also developing important problem-solving and critical-thinking abilities",
  },
  {
    name: "CASIE H",
    title: "ALWAYS LEAVE WITH A SMILE!!",
    text: "Both my son and daughter seem to really enjoy the program  so far. They're excited to show me what they made that day, and they always leave with a smile. Parent's Night Out was also a great success!",
  },
  {
    name: "CASEY B",
    title: "LOVE THE FLEXIBILITY & PROGRAMS",
    text: "My son has been attending Code Ninjas in Los Alamitos for almost 2yrs now, they are amazing. Staff and owner is excellent. My son is learning a lot about coding. We love the flexibility and the ",
  },
  {
    name: "jANE D",
    title: "BLOWN AWAY",
    text: "I have been blown away by the positive impact Code Ninjas has had on the children in our community. Not only are they learning valuable technical skills, but they are also developing important problem-solving and critical-thinking abilities",
  },
];

const Carousel = () => {
    const[activeIndex,setActiveIndex]=useState(1)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex+1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-900 text-white py-10 px-4">
        <h4 className="text-[#52b6ff] mb-4 text-center uppercase font-semibold">Hear from parents</h4>
      <h2 className="text-center text-3xl font-bold mb-6">TESTIMONIALS</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className={`p-6 testimonial rounded-lg text-center relative transition-all duration-300 ${
                  activeIndex === index ? "opacity-100 scale-105" : "opacity-50"
                }`}>
                <h3 className="text-xl font-bold text-[#187abf]">{testimonial.title}</h3>
                <p className="mt-2 text-[#506690]">{testimonial.text}</p>
                <div className="mt-4">
                  <span className="px-4 py-2 bg-blue-500 rounded-full font-bold">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
