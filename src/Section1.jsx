// Section1.jsx
import React from 'react';

const Section1 = () => {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-start"
      style=  {{ backgroundImage: `url('https://vendor.webuildthemes.com/assets/images/background-1.jpg')` }} // Using a working URL for testing
    >
      {/* Content */}
      <div className="relative z-10 pl-6 sm:pl-10 md:pl-16 lg:pl-20 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
          FASHION<br />WEEK<br />LOOKBOOK
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2 drop-shadow-lg">'19</p>

        <div className="flex space-x-4 mt-6">
          <button
            className="px-6 py-2 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            SHOP NOW
          </button>
          <div className="flex space-x-3">
            <button
              className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

