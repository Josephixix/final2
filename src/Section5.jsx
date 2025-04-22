// Section5.jsx
import React from 'react';

const Section5 = () => {
  return (
    <div className="w-full bg-white py-12">
      {/* Slider Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Featured Gallery
        </h2>

        {/* Slider Wrapper */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
          {/* Slider Track */}
          <div className="flex animate-slide w-[500%] h-full">
            {/* Image 1 */}
            <div className="w-1/5 h-full">
              <img
                src="https://vendor.webuildthemes.com/assets/images/instagram-1.jpg" 
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 2 */}
            <div className="w-1/5 h-full">
              <img
                src="	https://vendor.webuildthemes.com/assets/images/instagram-2.jpg"
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 3 */}
            <div className="w-1/5 h-full">
              <img
                src="	https://vendor.webuildthemes.com/assets/images/instagram-3.jpg" 
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 4 */}
            <div className="w-1/5 h-full">
              <img
                src="	https://vendor.webuildthemes.com/assets/images/instagram-4.jpg" 
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 5 */}
            <div className="w-1/5 h-full">
              <img
                src="	https://vendor.webuildthemes.com/assets/images/instagram-5.jpg"
                alt="Slide 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;