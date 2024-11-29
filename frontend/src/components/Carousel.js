import React, { useState } from "react";

function Carousel({items}) {

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
    <div class="flex flex-col items-center justify-center w-full py-12">
      {/* <h2 class="text-3xl font-bold text-yellow-300 mb-8">Activities Offered</h2> */}
      <div class="relative w-full max-w-4xl flex items-center justify-center">
        {/* Cards Section */}
        <div class="flex w-full justify-center items-center space-x-8 relative">

            {/* Left Arrow */}
            <button
                onClick={() => handleArrowClick("left")}
                class="border border-customLiteBlue items-center justify-center rounded-full shadow-lg hover:scale-110">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="text-black">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>

            </button>

            {visibleCards.map((card, index) => {
                const cardStyles = card.position === "center"
                ? "scale-110 z-20 shadow-lg shadow-tan"
                : "scale-90 opacity-75 z-10";

                return (
                    <a href="/login"
                    key={index}
                    class={`flex-shrink-0 w-1/3 h-48 bg-customLiteBlue text-center text-black 
                        rounded-xl shadow-lg flex items-center justify-center transform transition-transform duration-500 relative ${cardStyles}`}>
                        <div>
                            <h3 class="font-bold text-lg">{card.title}</h3>
                            <p class="mt-2 text-sm">{card.description}</p>
                        </div>
                    </a>
                );
            })}

            

            {/* Right Arrow */}
            <button
            onClick={() => handleArrowClick("right")}
            class="border border-customLiteBlue items-center justify-center rounded-full shadow-lg hover:scale-110">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="text-black">
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
