import React, { useState } from "react";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Card 2 in the middle

  const getVisibleCards = () => {
    const leftIndex = (currentIndex - 1 + items.length) % items.length;
    const rightIndex = (currentIndex + 1) % items.length;

    return [
      { ...items[leftIndex], position: "left" },
      { ...items[currentIndex], position: "center" },
      { ...items[rightIndex], position: "right" },
    ];
  };

  const visibleCards = getVisibleCards();

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-x-hidden py-6">
      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto">
        {/* Cards */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-8">
          {visibleCards.map((card, index) => {
            const cardStyles =
              card.position === "center"
                ? "scale-110 z-20 shadow-lg shadow-tan"
                : "scale-90 opacity-75 z-10";

            return (
              <div
                key={index}
                className={`flex-shrink-0 w-2/3 sm:w-1/3 lg:w-1/4 h-48 bg-customLiteBlue text-center text-black 
                  rounded-xl shadow-lg flex items-center justify-center transform transition-transform duration-500 ${cardStyles}`}
              >
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow Buttons Below Middle Card */}
        <div className="flex justify-center items-center mt-6 space-x-6">
          {/* Left Arrow */}
          <button
            onClick={() => handleArrowClick("left")}
            className="bg-white border border-customLiteBlue rounded-full shadow-lg p-2 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrowClick("right")}
            className="bg-white border border-customLiteBlue rounded-full shadow-lg p-2 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
