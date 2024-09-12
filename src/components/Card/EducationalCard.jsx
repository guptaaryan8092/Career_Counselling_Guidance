// src/components/Card/EducationalCard.jsx
import React from 'react';

const EducationalCard = ({ imgSrc, heading, description, onReadMore, takeTestLink }) => {
  return (
    <div className="w-full max-w-xs rounded-md border shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <img
        src={imgSrc}
        alt={heading}
        className="h-[200px] w-full rounded-md object-cover bg-gray-500"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{heading}</h1>
        <p className="mt-2 text-gray-600">
          {description}
        </p>
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            onClick={onReadMore}
            className="rounded-sm bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read More
          </button>
          <a
            href={takeTestLink}
            className="rounded-sm bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Take Test
          </a>
        </div>
      </div>
    </div>
  );
};

export default EducationalCard;
