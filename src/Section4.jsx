// Section4.jsx
import React from 'react';

const Section4 = () => {
  return (
    <div className="w-full bg-white py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Blog Post and News
          </h2>
          <button
            className="px-6 py-2 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View All
          </button>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://vendor.webuildthemes.com/assets/images/news-1.jpg"
              alt="Shoes 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">22 March 2019</p>
              <p className="text-lg font-semibold">
                The shoes that will instantly update any outfit
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://vendor.webuildthemes.com/assets/images/news-2.jpg"
              alt="Shoes 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">22 March 2019</p>
              <p className="text-lg font-semibold">
                The shoes that will instantly update any outfit
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src=	"https://vendor.webuildthemes.com/assets/images/news-3.jpg"
              alt="Shoes 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">22 March 2019</p>
              <p className="text-lg font-semibold">
                The shoes that will instantly update any outfit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;