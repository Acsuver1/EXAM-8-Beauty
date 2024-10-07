
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            BeautyBay Clone is a demo e-commerce platform showcasing beauty products using the Makeup API.
          </p>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/category/lipstick" className="hover:text-pink-600 transition">
                Lipsticks
              </Link>
            </li>
            <li>
              <Link to="/category/foundation" className="hover:text-pink-600 transition">
                Foundations
              </Link>
            </li>
            <li>
              <Link to="/category/eyeshadow" className="hover:text-pink-600 transition">
                Eyeshadows
              </Link>
            </li>
           
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MailIcon className="h-5 w-5 text-pink-600 mr-2" />
              <a href="mailto:support@beautybayclone.com" className="hover:text-pink-600 transition">
                support@beautybayclone.com
              </a>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-pink-600 mr-2" />
              <a href="tel:+1234567890" className="hover:text-pink-600 transition">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center">
              <LocationMarkerIcon className="h-5 w-5 text-pink-600 mr-2" />
              <span>123 Beauty Street, Makeup City, USA</span>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-600 transition">
              {/* Replace with actual social icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.5228-4.4771-10-10-10S2 6.4772 2 12c0 4.9913 3.6571 9.1286 8.438 9.878V15.56h-2.54v-3.56h2.54V9.845c0-2.5063 1.4927-3.89 3.7773-3.89 1.094 0 2.2383.1953 2.2383.1953v2.462h-1.2613c-1.242 0-1.63.7715-1.63 1.5625v1.875h2.773l-.443 3.56h-2.33v6.318C18.343 21.1286 22 16.9913 22 12z" />
              </svg>
            </a>
           
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} BeautyBay Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
