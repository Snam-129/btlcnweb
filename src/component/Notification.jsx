import React from 'react';

const Notification = ({ message}) => {
  return (
    <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 
      bg-green-500 text-white text-sm px-2 py-4 rounded-md shadow-lg flex items-center z-50 ">
      <div className="ml-2 mr-2 inline-flex items-center justify-center w-5 h-5 bg-white rounded-full">
        <svg 
          className="w-4 h-4 text-green-500"
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
      {message}
      <span
        className="ml-3 text-white font-bold hover:text-gray-200"
      >
      </span>
    </div>
  );
};

export default Notification;
