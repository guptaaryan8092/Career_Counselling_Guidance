import React, { useEffect, useState } from 'react';

const Carousel = ({ images, hideIndicators }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-64">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-contain w-full h-full" // Changed to object-contain
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      {!hideIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
