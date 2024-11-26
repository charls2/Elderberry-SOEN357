import React, { useState } from "react";

const Carousel = () => {
  // Activities for the carousel
  const activities = ["Activity 1", "Activity 2", "Activity 3"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-gray-300 h-32 rounded-lg shadow-md flex items-center justify-center">
      {/* Carousel Content */}
      <div className="text-center text-gray-800 font-medium">
        {activities[currentIndex]}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        {"<"}
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        {">"}
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 flex space-x-2">
        {activities.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index
                ? "bg-gray-800"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
