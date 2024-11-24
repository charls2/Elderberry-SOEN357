import React from 'react';

function Landing() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-8">Welcome to Elderberry</h1>
      <p className="text-lg">Bridging Generations, one connection at a time</p>
      <div className="mt-6">
        <a href="/login" className="mr-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </a>
        <a href="/register" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Register
        </a>
      </div>
    </div>
  );
}

export default Landing;
