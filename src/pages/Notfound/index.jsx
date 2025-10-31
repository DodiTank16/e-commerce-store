import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">The page you’re looking for doesn’t exist or has been moved.</p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
