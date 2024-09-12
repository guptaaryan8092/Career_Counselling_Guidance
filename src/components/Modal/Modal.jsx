import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    onClick={onClose}  // Close on overlay click
    >
        
      <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}  // Prevent click inside content from closing
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-yellow-400 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="space-y-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
