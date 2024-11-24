import React from 'react';

function WelcomePage() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex flex-col items-center">
        <header className="bg-orange-300 w-full py-12 text-center">
          <h1 className="text-4xl font-bold text-black">Welcome to Elderberry</h1>
          <p className="text-lg font-medium text-black mt-2">
            Bridging Generations, one connection at a time
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-200 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300">
            Join Now / Login
          </button>
        </header>
      </div>
    </div>
  );
}

export default WelcomePage;
