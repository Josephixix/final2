// Section3.jsx
import React from 'react';

const Section3 = () => {
  return (
    <div  className="bg-sky-800">
    <div className="w-full py-12">
      {/* Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Divs - Flex on Large Screens */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-12">
          {/* Text 1 */}
          <div className="lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Spring ‘17 Collection
            </h2>
          </div>

          {/* Text 2 - Moves to 4th Column on Large Screens */}
          <div className="lg:w-3/4 lg:pl-8">
            <p className="text-lg sm:text-xl text-gray-700">
              Have given likeness every. Very were beginning signs moveth. Fly above sea itself.
              Divided so you'll there called. Gathering dry earth. Isn't heaven appear. Replenist.
              Hath after appear tree great fruitful green dominion moveth sixth abundantly image
            </p>
          </div>
        </div>

        {/* Bento Grid for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 - DRESSES */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://vendor.webuildthemes.com/assets/images/look-1.jpg"
              alt="Dresses"
              className="w-full h-100 object-cover"
            />
            <button
              className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black font-semibold text-sm rounded-sm hover:bg-gray-200 transition-all duration-300 ease-in-out"
            >
              DRESSES
            </button>
          </div>

          {/* Image 2 - WATCHES */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://vendor.webuildthemes.com/assets/images/look-2.jpg"
              alt="Watches"
              className="w-full h-100 object-cover"
            />
            <button
              className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black font-semibold text-sm rounded-sm hover:bg-gray-200 transition-all duration-300 ease-in-out"
            >
              WATCHES
            </button>
          </div>

          {/* Image 3 - SNEAKERS */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="	https://vendor.webuildthemes.com/assets/images/look-3.jpg" 
              alt="Sneakers"
              className="w-full h-100 object-cover"
            />
            <button
              className="absolute bottom-4 left-4 px-4 py-2 bg-white text-black font-semibold text-sm rounded-sm hover:bg-gray-200 transition-all duration-300 ease-in-out"
            >
              SNEAKERS
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section3;