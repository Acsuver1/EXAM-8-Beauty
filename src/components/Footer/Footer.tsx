
import React from 'react';
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsArrowRight } from "react-icons/bs";
import logo from '../../assets/beauty.png';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
       <div className=" text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <img src={logo} alt="Company Logo" className="w-60 mb-4" />
        </div>
    
        <div>
          <h1 className="text-xl font-semibold mb-4">Help & Information</h1>
          <ul className="space-y-2">
            <li>Delivery & Returns</li>
            <li>Contact Us & FAQ's</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">Legal</h1>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>TRIBE Terms</li>
            <li>Website Terms of Use</li>
            <li>Privacy</li>
            <li>Anti-Slavery</li>
            <li>Cookies</li>
            <li>Manage Preferences</li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">No Spam, Just Beauty</h1>
          <p className="text-sm mb-4">
            Let’s stay in touch! We promise to send you the latest news, offers, and the freshest beauty drops, straight to your inbox.
          </p>
          <div className="flex items-center mb-4 gap-2">
            <input
              type="text"
              placeholder="Your Email"
              className="border border-gray-300 p-2 rounded-l-md w-full"
            />
            <button type="submit"
                aria-label="Subscribe to Newsletter"
                className="p-2 rounded-r-md text-gray-600 bg-white hover:bg-gray-200 transition-colors"
              >
              <BsArrowRight className="text-2xl" />
            </button>
          </div>
          <div className="flex space-x-4">
            <BsFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
            <BsInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
            <AiFillTwitterCircle className="text-3xl cursor-pointer hover:text-blue-400" />
            <FaTiktok className="text-2xl cursor-pointer hover:text-black" />
            <AiFillYoutube className="text-3xl cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <div className="">
      <div className="max-w-7xl mx-auto px-4 lex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-400 text-center md:text-left">
          <p className="text-center">Copyright © 2024 BEAUTY BAY Ltd.</p>
          <br />
          <p className="text-center">Registered office address Level 12, 5 Exchange Quay, M5 3EF. Registered in England, company registration number 6427672, VAT number GB 927197591.</p>
        </div>
<br />
        <div className="flex space-x-10 text-center justify-center mt-4 ">
          <img
            src="https://images.ctfassets.net/eoaaqxyywn6o/6rDEb4sJOBkiIga3rkaSfA/b705c283f12f64d22365f9d168d2e9be/PayPal.svg"
            alt="PayPal"
            className="h-8"
          />
          <img
            src="https://images.ctfassets.net/eoaaqxyywn6o/y8QrCXyaUnAPeqGSkYBXT/dcd21c778833eed8062c9707784ea812/Klarna.svg"
            alt="Klarna"
            className="h-8"
          />
          <img
            src="https://images.ctfassets.net/eoaaqxyywn6o/10YPF40EuGghbMiM8dvfZ4/604c660dfd975959ded92967d5acdd68/Apple.svg"
            alt="Apple Pay"
            className="h-8"
          />
          <img
            src="https://images.ctfassets.net/eoaaqxyywn6o/4QTzSyV3E2jIfll4u3GgIW/46acc6659798376dc8bb416454f2baba/Visa.svg"
            alt="Visa"
            className="h-8"
          />
          <img
            src="https://images.ctfassets.net/eoaaqxyywn6o/1R0NBLVCShxTQNVHNjanE4/c970e9e15ecbb026929000ae3fcce6ae/Amex.svg"
            alt="Amex"
            className="h-8"
          />
          <img
            src="https://images.ctfassets.net/eoaaqxyywn6o/5bs4r6UiioP3Fkj4Qg35o8/5583c0ecc4b6500a1083fd38cfabf6dc/Mastercard.svg"
            alt="Mastercard"
            className="h-8"
          />
          <img
            src="https://images.ctfassets.net/eoaaqxyywn6o/5IdXqCmgjNCVwZNyssRsdE/702c37ee931258aad2071e063bbd337e/Maestro.svg"
            alt="Maestro"
            className="h-8"
          />
        </div>
      </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
