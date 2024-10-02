// src/components/Card/TestCard.jsx
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const TestCard = ({ imgSrc, heading, description, onReadMore, takeTestLink }) => {
  return (
    <div className="w-full max-w-xs rounded-md border shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <img
        src={imgSrc}
        alt={heading}
        className="h-[200px] w-full rounded-md object-cover bg-sky-200"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{heading}</h1>
        <p className="mt-2 text-gray-600">
          {description}
        </p>
        <div className="mt-4 flex gap-4">
          {/* You can uncomment this button if you decide to use it */}
          {/* 
          <button
            type="button"
            onClick={onReadMore}
            className="rounded-sm bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read More
          </button>
          */}
          <Link
            to={takeTestLink}
            className="flex items-center rounded-sm bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{ textDecoration: 'none' }} // Ensure no underline
          >
            <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
            Start Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
