import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import favicon from "../assets/blue-berry-new.png";

function Navbar({styles}) {
  return (
    <nav class={`bg-customLiteBlue p-4 text-black flex justify-between w-full top-0 ${styles}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/" className="p-2">
          <img
            src={favicon} // Replace with your logo URL or remove the image
            alt="Logo"
            className="h-8 w-8"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/home" className="px-4 py-2 border border-customBlue rounded-md hover:bg-tan transition">
          Home
        </Link>
        <Link to="/preferences" className="px-4 py-2 border border-customBlue rounded-md hover:bg-tan transition">
          Preferences
        </Link>
        <Link to="/communities" className="px-4 py-2 border border-customBlue rounded-md hover:bg-tan transition">
          Communities
        </Link>
        <Link to="/browse" className="px-4 py-2 border border-customBlue rounded-md hover:bg-tan transition">
          Browse Recommendations
        </Link>
        <Link to="/mentors" className="px-4 py-2 border border-customBlue rounded-md hover:bg-tan transition">
          Mentors
        </Link>
        <Link to="/about" className="px-4 py-2 border border-customBlue rounded-md hover:bg-tan transition">
          About Us
        </Link>
        <Link to="/contact" className="px-4 py-2 border border-customBlue rounded-md hover:bg-tan transition">
          Contact Us
        </Link>
      </div>

      {/* Logout Icon */}
      <a href="/login">
        <FaSignOutAlt size={24} className="text-gray-800 cursor-pointer hover:text-gray-600 transition"/>
      </a>
    </nav>
  );
}

export default Navbar;
