import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg mt-4">This is where users can interact with the platform!</p>
    </div>
  );
}

export default Home;
