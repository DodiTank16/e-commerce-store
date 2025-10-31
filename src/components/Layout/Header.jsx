import React from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
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
          <Link to="#" className="hover:text-blue-600 transition">
            Shop
          </Link>
          <Link to="#" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="#" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQty}
            </span>
          </Link>

          {/* User Icon */}
          <button className="text-gray-700 hover:text-blue-600 transition">
            <FaUser size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden bg-gray-50 border-t">
        <nav className="flex justify-around py-2 text-gray-700 text-sm">
          <Link to="#" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Shop
          </Link>
          <Link to="#" className="hover:text-blue-600">
            About
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
