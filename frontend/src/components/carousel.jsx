import React, { useState } from "react";

const Carousel = ({ activities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === activities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-white border rounded-lg shadow-lg p-6 w-4/5 mx-auto">
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="w-10 h-10"
        />
      </div>

      {/* Title Section */}
      <div className="text-left ml-12">
        <h2 className="text-2xl font-bold text-gray-800">
          {activities[currentIndex]?.title || "Event Title"}
        </h2>
        <p className="text-gray-600 mt-1">
          {activities[currentIndex]?.date && activities[currentIndex]?.time
            ? `${activities[currentIndex].date} at ${activities[currentIndex].time}`
            : "Event date and time"}
        </p>
      </div>

      {/* Event-Specific Image Section */}
      <div className="absolute top-2 right-14">
        <img
          src={activities[currentIndex]?.image || "https://via.placeholder.com/300x200"}
          alt={activities[currentIndex]?.title || "Event Image"}
          className="w-[200px] h-[150px] rounded-lg shadow-md object-cover mr-10"
        />
      </div>

      {/* Body Content */}
      <div className="mt-4 text-gray-700 text-left ml-12">
        <p>
          {activities[currentIndex]?.location ||
            "Event location details can go here. You can include brief descriptions to engage users and provide them with context about the event."}
        </p>
        <p className="mt-2">
          This event is designed for enthusiasts who enjoy connecting with like-minded
          individuals. Expect an exciting and memorable experience!
        </p>
      </div>

      {/* "Go to Event" Button */}
      <div className="mt-6 text-right mr-28">
        <button className="bg-aquamarine font-semibold text-black px-4 py-2 rounded-lg hover:bg-green-300 transition">
          Go to Event
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-aquamarine text-black p-3 rounded-full hover:bg-green-300 focus:outline-none"
      >
        {"<"}
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-aquamarine text-black p-3 rounded-full hover:bg-green-300 focus:outline-none"
      >
        {">"}
      </button>

      {/* Pagination Dots */}
      {activities && activities.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
