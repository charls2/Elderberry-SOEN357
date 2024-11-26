import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="bg-gray-400 p-2 rounded-full">
          <img
            src="https://via.placeholder.com/32" // Replace with your logo URL or remove the image
            alt="Logo"
            className="h-8 w-8"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link
          to="/home"
          className="px-4 py-2 bg-purple-200 rounded-md hover:bg-purple-300 transition"
        >
          Home
        </Link>
        <Link
          to="/preferences"
          className="px-4 py-2 bg-purple-200 rounded-md hover:bg-purple-300 transition"
        >
          Preferences
        </Link>
        <Link
          to="/communities"
          className="px-4 py-2 bg-purple-200 rounded-md hover:bg-purple-300 transition"
        >
          Communities
        </Link>
        <Link
          to="/mentors"
          className="px-4 py-2 bg-purple-200 rounded-md hover:bg-purple-300 transition"
        >
          Mentors
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 bg-purple-200 rounded-md hover:bg-purple-300 transition"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 bg-purple-200 rounded-md hover:bg-purple-300 transition"
        >
          Contact Us
        </Link>

      </div>

      {/* Logout Icon */}
      <div>
        <FaSignOutAlt
          size={24}
          className="text-gray-800 cursor-pointer hover:text-gray-600 transition"
        />
      </div>
    </nav>
  );
}

export default Navbar;
