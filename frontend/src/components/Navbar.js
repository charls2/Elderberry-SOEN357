import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <Link to="/" className="mr-4">
          Landing
        </Link>
        <Link to="/home" className="mr-4">
          Home
        </Link>
      </div>
      <div>
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
