// Section2.jsx
import React from 'react';

const Section2 = () => {
  return (
    <div className="w-full bg-white py-12">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Featured Products
      </h2>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 - Large */}
        <div className="lg:col-span-2 lg:row-span-2 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://vendor.webuildthemes.com/assets/images/demo/product-15-2.jpg" 
            alt="Product 1"
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 1</h3>
            <p className="text-gray-600">$99.99</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://vendor.webuildthemes.com/assets/images/demo/product-16-2.jpg" 
            alt="Product 2"
            className="w-full h-100 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 2</h3>
            <p className="text-gray-600">$49.99</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://vendor.webuildthemes.com/assets/images/demo/product-17-2.jpg"
            alt="Product 3"
            className="w-full h-100 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 3</h3>
            <p className="text-gray-600">$59.99</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://vendor.webuildthemes.com/assets/images/demo/product-20-2.jpg" 
            alt="Product 4"
            className="w-full h-100 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 4</h3>
            <p className="text-gray-600">$39.99</p>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://vendor.webuildthemes.com/assets/images/demo/product-21-2.jpg" 
            alt="Product 5"
            className="w-full h-100 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Product 5</h3>
            <p className="text-gray-600">$79.99</p>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button
          className="px-6 py-3 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Section2;