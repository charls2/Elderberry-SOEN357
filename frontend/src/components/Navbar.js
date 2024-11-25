import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="bg-tomato p-4 text-white flex justify-between fixed top-0 w-full">
      <div>
        <Link to="/" class="mr-4">
          Landing
        </Link>
        <Link to="/home" class="mr-4">
          Home
        </Link>
      </div>
      <div>
        <Link to="/login" class="mr-4">
          Login
        </Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
