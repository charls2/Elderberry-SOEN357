import React from "react";
import { useNavigate } from "react-router-dom";
import FloatingHelpWidget from "../components/Help";
import Navbar from "../components/Navbar";

const MyCommunities = () => {
  const navigate = useNavigate();
  const cards = [
];
  // Dummy data for communities
  const joinedCommunities = [
    { id: 1, name: "Cooking Community", description: "Learn more about our mission and values.", posted: "Nov 12, 2024", goTo: "/communities/1", members: 120 },
    { id: 5, name: "Social Skills Community", description: "Improve your social skills with us.", posted: "Nov 20, 2024", goTo: "/communities/5", members: 162 },
    { id: 7, name: "Therapy Community", description: "Find support and guidance.", posted: "Nov 25, 2024", goTo: "/communities/7", members: 46 },

  ];

  const trendingCommunities = [
    { id: 2, name: "Life Lessons Community", description: "Learn more about our mission and values.", posted: "Oct 22, 2024", goTo: "/communities/2", members: 80 },
    { id: 6, name: "Botanical Community", description: "Explore botanical wonders.", posted: "Nov 22, 2024", goTo: "/communities/6", members: 51 },
    { id: 7, name: "Therapy Community", description: "Find support and guidance.", posted: "Nov 25, 2024", goTo: "/communities/7", members: 46 },
  ];

  const recommendedCommunities = [
    { id: 3, name: "Sports Community", description: "Reach out to our team for assistance.", posted: "Nov 15, 2024", goTo: "/communities/3", members: 65 },
    { id: 7, name: "Therapy Community", description: "Find support and guidance.", posted: "Nov 25, 2024", goTo: "/communities/7", members: 46 },
    { id: 5, name: "Social Skills Community", description: "Improve your social skills with us.", posted: "Nov 20, 2024", goTo: "/communities/5", members: 162 }
  ];

  // Handle click to navigate to a community's page
  const handleCardClick = (id) => {
    navigate(`/communities/${id}`);
  };

  // Render a community card
  const renderCommunityCard = (community) => (
    <div
      key={community.id}
      onClick={() => handleCardClick(community.id)}
      className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition duration-200"
    >
      <h2 className="text-xl font-semibold text-blue-600">{community.name}</h2>
      <p className="text-gray-600 mt-2">{community.description}</p>
      <p className="text-gray-500 mt-4">Members: {community.members}</p>
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        {/* Page Header */}
        <div className="bg-customLiteBlue text-black p-4 shadow-md">
          <h1 className="text-lg font-semibold text-center">My Communities</h1>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-16">
          {/* Trending Communities */}
          <section className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Trending Communities
            </h2>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {trendingCommunities.map(renderCommunityCard)}
              </div>
            </div>
          </section>

          {/* Your Joined Communities */}
          <section className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Your Joined Communities
            </h2>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {joinedCommunities.map(renderCommunityCard)}
              </div>
            </div>
          </section>

          {/* Recommended Communities */}
          <section className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Recommended for You
            </h2>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {recommendedCommunities.map(renderCommunityCard)}
              </div>
            </div>
          </section>
        </div>

        {/* Help Widget */}
        <FloatingHelpWidget />
      </div>
    </>
  );
};

export default MyCommunities;