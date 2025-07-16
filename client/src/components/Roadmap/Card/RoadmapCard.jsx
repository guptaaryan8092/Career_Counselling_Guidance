import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function RoadmapCard({ imgSrc, heading, description, learnmore, bgColor }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null); // Create a ref for the card

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    // Handle clicks outside of the card
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        // Attach the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={cardRef} // Attach the ref to the card div
            className="w-full max-w-xs rounded-md border shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
            <img
                src={imgSrc}
                alt={heading}
                className="h-[200px] w-full rounded-md object-cover bg-gray-500"
                style={{ backgroundColor: bgColor }}
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">{heading}</h1>
                <p
                    className={`mt-2 text-gray-600 transition-all duration-300 ${
                        isExpanded ? "max-h-screen" : "max-h-16 overflow-hidden"
                    }`}
                >
                    {isExpanded
                        ? description
                        : `${description.split('. ').slice(0, 1).join('. ')}...`}
                </p>
                <button
                    onClick={handleToggle}
                    className="text-blue-600 underline mt-2"
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
                <div className="mt-4 flex gap-4">
                    <Link
                        to={learnmore}
                        className="rounded-sm bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        style={{ textDecoration: 'none' }} // Ensure no underline
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RoadmapCard;
