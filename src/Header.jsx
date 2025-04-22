import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">VENDOR</h1>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="mt-4 md:hidden">
          <a href="#" className="block py-2 hover:text-gray-300">Home</a>
          <a href="#" className="block py-2 hover:text-gray-300">About</a>
          <a href="#" className="block py-2 hover:text-gray-300">Services</a>
          <a href="#" className="block py-2 hover:text-gray-300">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;