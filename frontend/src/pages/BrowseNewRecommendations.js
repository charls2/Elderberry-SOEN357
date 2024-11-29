import React from "react";
import placeholder from "../assets/placeholder_community.jpg"; // Adjust the path as per your folder structure
import Navbar from "../components/Navbar";

function BrowseNewRecommendations() {
  const cards = [
    { title: "Cooking Community", description: "Learn more about our mission and values.", posted: "Nov 12, 2024", goTo: "/communities/cooking" },
    { title: "Life Lessons Community", description: "Learn more about our mission and values.", posted: "Oct 22, 2024", goTo: "/communities/life-lessons" },
    { title: "Sports Community", description: "Reach out to our team for assistance.", posted: "Nov 15, 2024", goTo: "/communities/sports" },
    { title: "Financial Community", description: "Financial tips and resources.", posted: "Nov 18, 2024", goTo: "/communities/financial" },
    { title: "Social Skills Community", description: "Improve your social skills with us.", posted: "Nov 20, 2024", goTo: "/communities/social-skills" },
    { title: "Botanical Community", description: "Explore botanical wonders.", posted: "Nov 22, 2024", goTo: "/communities/botanical" },
    { title: "Therapy Community", description: "Find support and guidance.", posted: "Nov 25, 2024", goTo: "/communities/therapy" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-auto">
        <Navbar />
        {/* Main Content */}
        <div className="flex flex-col md:flex-row flex-grow overflow-y-auto">
            {/* Sidebar */}
            <div className="bg-customLiteBlue p-4 w-full md:w-1/4">
                {/* Search Bar */}
                <div className="mb-6">
                    <input type="text" placeholder="Search" className="bg-white w-full px-4 py-2 border 
                        border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300" />
                </div>
                <ul className="space-y-2">
                    {["Cooking", "Life Lessons", "Someone to talk to", "Sports", "Financial Advice"].map((item, index) => (
                    <li key={index} className="p-2 rounded hover:bg-purple-100 cursor-pointer text-black">
                        {item}
                    </li>
                    ))}
                </ul>
            </div>

            {/* Main Section */}
            <div className="flex-grow p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold text-black">Browse New Recommendations</h1>
                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    {cards.map((card, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image */}
                        <img
                        src={placeholder}
                        alt="Card Header"
                        className="w-full h-40 object-cover"
                        />
                        {/* Content */}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
                            <p className="text-gray-600 mt-2">{card.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-sm text-gray-500">Posted on: {card.posted}</span>
                                <button
                                onClick={() => (card.goTo ? (window.location.href = card.goTo) : null)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                                >
                                Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default BrowseNewRecommendations;
