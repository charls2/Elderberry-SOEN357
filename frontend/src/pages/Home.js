import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Welcome Section */}
      <section className="p-6">
        <h2 className="text-lg font-semibold text-gray-700">
          Welcome back, {"{username}"}
        </h2>
      </section>

      {/* Carousel Section */}
      <section className="p-6">
        <Carousel />
      </section>

      {/* Feeds Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {["Feed 1", "Feed 2", "Feed 3"].map((feed, index) => (
          <div
            key={index}
            className="bg-gray-300 h-48 rounded-lg shadow-md flex items-center justify-center"
          >
            <span className="text-gray-700 font-semibold">{feed}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
