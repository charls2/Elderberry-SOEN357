import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({styles}) {
  return (
    <nav class={`bg-customLiteBlue p-4 text-black flex justify-between w-full top-0 ${styles}`}>
      <div>
        <Link to="/" class="mr-4">
          Welcome
        </Link>
        <Link to="/home" class="mr-4">
          Home
        </Link>
        <Link to="/browse">
          Browse
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
