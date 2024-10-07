// src/components/Header.tsx

import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartFill } from "react-icons/ri"; 
import { FcLike } from "react-icons/fc";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import beauty from "../../assets/beauty.png";
import { Product } from '../../api/makeupApi';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [language, setLanguage] = useState<string>('uz');
  const [currency, setCurrency] = useState<string>('USD');

  useEffect(() => {
    try {
      const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cartItems.length);
    } catch (error) {
      console.error('Error parsing cart items from localStorage:', error);
      setCartCount(0);
    }

    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    const storedCurrency = localStorage.getItem('currency');
    if (storedCurrency) {
      setCurrency(storedCurrency);
    }
  }, []);

  
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
    localStorage.setItem('currency', e.target.value);
  };

  return (
    <div>
      <div className="bg-black text-white text-center py-2">
        <h1 className="text-sm">
          Get 15% off selected items when you spend 70€ with code: YAY
        </h1>
      </div>

      <div className="bg-gray-100 text-black text-center py-2 border-b flex flex-col md:flex-row justify-between items-center px-4 md:px-10 space-y-2 md:space-y-0">
        <h1 className="flex items-center justify-center text-center mx-auto font-bold text-sm md:text-base">
          FREE Liquid Cream Blush when you spend 50€ on By BEAUTY BAY | Download the app for exclusive offers and discounts 
        </h1>
        <div className="flex justify-center items-center space-x-4">
          {/* Language Select with Visually Hidden Label */}
          <label htmlFor="language-select" className="visually-hidden">
            Language
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          <label htmlFor="currency-select" className="visually-hidden">
            Currency
          </label>
          <select
            id="currency-select"
            value={currency}
            onChange={handleCurrencyChange}
            className="border border-gray-300 p-2 rounded-md w-[100px]"
          >
            <option value="USD">USD</option>
            <option value="UZS">UZS</option>
          </select>
        </div>
      </div>

      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/"> 
              <img src={beauty} alt="Beauty Bay" className="w-[120px]" />
            </Link>
          </div>

          <div className="flex-grow mx-8">
            <input
              type="text"
              placeholder="Search products, brands"
              className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <RiShoppingCartFill className="text-3xl" /> 
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {cartCount}
              </span>
            </Link>

            <Link to="/likes" className="relative">
              <FcLike className="text-3xl" />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full"> 
              </span>
            </Link>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow">
            <nav className="px-4 py-2 space-y-2">
              <Link to="/category/lipstick" className="block text-gray-700 hover:text-pink-600 transition">
                Lipsticks
              </Link>
              <Link to="/category/foundation" className="block text-gray-700 hover:text-pink-600 transition">
                Foundations
              </Link>
              <Link to="/category/eyeshadow" className="block text-gray-700 hover:text-pink-600 transition">
                Eyeshadows
              </Link>
             
            </nav>
          </div>
        )}
      </header>

      <div className="bg-white py-6">
        <div className="container mx-auto flex justify-center space-x-8 flex-wrap">
          <Link to="/gifting" className="text-sm text-gray-700 hover:text-black">Gifting</Link>
          <Link to="/offers" className="text-sm text-gray-700 hover:text-black">Offers</Link>
          <Link to="/about" className="text-sm text-gray-700 hover:text-black">By BEAUTY BAY</Link>
          <Link to="/new-trending" className="text-sm text-gray-700 hover:text-black">New & Trending</Link>
          <Link to="/brands" className="text-sm text-gray-700 hover:text-black">Brands</Link>
          <Link to="/makeup" className="text-sm text-gray-700 hover:text-black">Makeup</Link>
          <Link to="/skincare" className="text-sm text-gray-700 hover:text-black">Skincare</Link>
          <Link to="/haircare" className="text-sm text-gray-700 hover:text-black">Haircare</Link>
          <Link to="/body-care" className="text-sm text-gray-700 hover:text-black">Body Care</Link>
          <Link to="/wellness" className="text-sm text-gray-700 hover:text-black">Wellness</Link>
          <Link to="/tools-accessories" className="text-sm text-gray-700 hover:text-black">Tools & Accessories</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
