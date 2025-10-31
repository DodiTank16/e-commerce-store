import React from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Shop<span className="text-blue-600">Zone</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-600 transition">
            Shop
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <FaSearch className="text-gray-500" />
            <input type="text" placeholder="Search products..." className="bg-transparent outline-none px-2 text-sm w-32 sm:w-48" />
          </div>

          {/* User Icon */}
          <button className="text-gray-700 hover:text-blue-600 transition">
            <FaUser size={20} />
          </button>

          {/* Cart Icon */}
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden bg-gray-50 border-t">
        <nav className="flex justify-around py-2 text-gray-700 text-sm">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-600">
            Shop
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
