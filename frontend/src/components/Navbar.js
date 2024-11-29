import React from "react";
import { Link } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-customLiteBlue p-4 flex justify-between items-center shadow-md z-50 relative">
      <div className="flex items-center">
        <div className="bg-gray-400 p-2 rounded-full">
          <img
            src="/api/placeholder/32/32"
            alt="Logo"
            className="h-8 w-8"
          />
        </div>
        <h1 className="text-2xl font-itim font-bold text-black-100 ml-7">Elderberry</h1>
      </div>

      <div className="hidden md:flex space-x-6 justify-center">
        {["Home", "Preferences", "Communities", "Mentorship", "About Us", "Contact Us"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(" us", "")}`}
            className="px-4 py-2 bg-white rounded-md hover:bg-tan font-semibold transition"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <Settings className="w-6 h-6 text-gray-800 cursor-pointer hover:text-gray-600 transition" />
        <LogOut className="w-6 h-6 text-gray-800 cursor-pointer hover:text-gray-600 transition" />
      </div>
    </nav>
  );
}

export default Navbar;