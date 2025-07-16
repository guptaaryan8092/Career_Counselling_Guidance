import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaUserGraduate, FaChalkboardTeacher, FaUserTie, FaQuoteLeft } from 'react-icons/fa';

function TestimonialCard({ quote, name, role, image }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 mx-4 transform transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="w-28 h-28 overflow-hidden rounded-full mb-4 border-4 border-blue-500">
          <img className="w-full h-full object-contain" src={image} alt={name} />
        </div>
        <div className="space-y-1">
          <p className="text-lg font-semibold text-blue-600">{name}</p>
          <p className="text-sm text-gray-500 flex items-center justify-center">
            {role === "Student" && <FaUserGraduate className="inline-block mr-2 text-blue-600" />}
            {role === "Counselor" && <FaUserTie className="inline-block mr-2 text-blue-600" />}
            {role === "Teacher" && <FaChalkboardTeacher className="inline-block mr-2 text-blue-600" />}
            {role}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          ))}
        </div>
        <blockquote className="text-center text-lg leading-relaxed text-gray-800 italic">
          <FaQuoteLeft className="inline-block text-blue-600 mr-2" />{quote}
        </blockquote>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "This platform has completely changed my perspective on career choices. I feel more confident about my future now.",
      name: "Aryan Gupta",
      role: "Student",
      image: "/assets/img/testimonial/1.svg",
    },
    {
      quote: "The career guidance here is top-notch. I've gained so much clarity.",
      name: "Divya Agarwal",
      role: "Counselor",
      image: "/assets/img/testimonial/2.svg",
    },
    {
      quote: "A must-have resource for anyone looking to advance their career.",
      name: "Anurag Kashyap",
      role: "Teacher",
      image: "/assets/img/testimonial/3.svg",
    },
    {
      quote: "The support and resources available are outstanding.",
      name: "Vanshika Sharma",
      role: "Student",
      image: "/assets/img/testimonial/4.svg",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-400 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white mb-6">What Our Users Say</h2>
        <div className="bg-white rounded-lg shadow-2xl p-6 relative overflow-hidden">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={600}
            className="max-w-5xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
