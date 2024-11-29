import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import favicon from "../assets/blue-berry-new.png";

function Navbar({ styles }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-customLiteBlue p-4 text-black flex items-center justify-between w-full top-0 ${styles}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/" className="p-2 bg-purple-400 rounded-lg">
          <img
            src={favicon}
            alt="Logo"
            className="h-8 w-8"
          />
        </a>
      </div>

      {/* Menu Icon (Visible on smaller screens) */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

       {/* Navigation Links */}
       <div
        className={`${isOpen ? "block" : "hidden"} lg:flex flex-col lg:flex-row space-y-4 
          lg:space-y-0 lg:space-x-8 w-full lg:w-auto bg-customLiteBlue lg:bg-transparent p-4 lg:p-0 absolute lg:static top-14 left-0 z-50`}
      >
        <Link
          to="/home"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-customBlue hover:text-white transition"
        >
          Home
        </Link>
        <Link
          to="/preferences"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-customBlue hover:text-white transition"
        >
          Preferences
        </Link>
        <Link
          to="/communities"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-customBlue hover:text-white transition"
        >
          Communities
        </Link>
        <Link
          to="/browse"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-customBlue hover:text-white transition"
        >
          Browse Recommendations
        </Link>
        <Link
          to="/mentors"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-customBlue hover:text-white transition"
        >
          Mentors
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-customBlue hover:text-white transition"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-customBlue hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Logout Icon */}
      <a href="/login" className="hidden lg:block">
        <FaSignOutAlt size={24} className="text-gray-800 cursor-pointer hover:text-gray-600 transition" />
      </a>
    </nav>
  );
}

export default Navbar;
