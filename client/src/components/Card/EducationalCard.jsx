// src/components/Card/EducationalCard.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const EducationalCard = ({ imgSrc, heading, description, onReadMore, takeTestLink, bgColor }) => {
  return (
    <div className="w-full max-w-xs rounded-md border shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <img
        src={imgSrc}
        alt={heading}
        className="h-[200px] w-full rounded-md object-cover bg-gray-500"
        style={{ backgroundColor: bgColor }}
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
            className="flex items-center rounded-sm bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
            Read More
          </button>
          <Link
            to={takeTestLink}
            className="flex items-center rounded-sm bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{ textDecoration: 'none' }} // Ensure no underline
          >
            <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
            Take Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationalCard;
