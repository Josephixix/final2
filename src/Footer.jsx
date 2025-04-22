// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Credits Section */}
        <div className="flex-1">
          <p className="text-sm">
            Thanks to <span className="font-semibold">Opumo</span> for the product images used in this demo theme. Head over to their store to get the products.
          </p>
          {/* Quick Links */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">FAQ</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">Terms of Use</a>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
            >
              Subscribe
            </button>
          </form>

          {/* Follow Us Section */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="text-white hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook Icon */}
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter Icon */}
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram Icon */}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.735 0 8.332.013 7.052.072 5.772.13 4.605.395 3.632 1.368 2.659 2.341 2.395 3.508 2.337 4.788 2.278 6.068 2.265 6.471 2.265 12s.013 5.932.072 7.212c.058 1.28.323 2.447 1.296 3.42.973.973 2.14 1.238 3.42 1.296 1.28.059 1.683.072 7.212.072s5.932-.013 7.212-.072c1.28-.058 2.447-.323 3.42-1.296.973-.973 1.238-2.14 1.296-3.42.059-1.28.072-1.683.072-7.212s-.013-5.932-.072-7.212c-.058-1.28-.323-2.447-1.296-3.42-.973-.973-2.14-1.238-3.42-1.296C15.932.013 15.529 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;