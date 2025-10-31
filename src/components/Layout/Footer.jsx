import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Shop<span className="text-blue-500">Zone</span>
          </h2>
          <p className="text-sm leading-relaxed mb-4">Your one-stop shop for the latest fashion, electronics, and home essentials.</p>
          <div className="flex space-x-3">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-blue-400 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:text-blue-400 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-blue-400 transition">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>123 Market Street, Mumbai, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>support@shopzone.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-blue-400 font-medium">ShopZone</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
