import React from "react";
import { useNavigate } from "react-router-dom";
import FloatingHelpWidget from "../components/Help";

const MyCommunities = () => {
  const navigate = useNavigate();

  // Dummy data for communities
  const joinedCommunities = [
    {
      id: 1,
      name: "Community A",
      description: "This is a description of Community A. It focuses on health and wellness activities like yoga, meditation, and group workouts.",
      members: 120,
    },
    {
      id: 2,
      name: "Community B",
      description: "This is a description of Community B. Join us for engaging book discussions and creative writing workshops.",
      members: 85,
    },
  ];

  const trendingCommunities = [
    {
      id: 3,
      name: "Photography Enthusiasts",
      description: "A place for photographers of all levels to share tips, tricks, and stunning shots.",
      members: 300,
    },
    {
      id: 4,
      name: "Adventure Seekers",
      description: "Join our adventurous community and discover thrilling activities like hiking, camping, and kayaking.",
      members: 250,
    },
  ];

  const recommendedCommunities = [
    {
      id: 5,
      name: "Nature Lovers",
      description: "A group dedicated to appreciating and protecting nature through outdoor events and conservation efforts.",
      members: 180,
    },
    {
      id: 6,
      name: "Tech Innovators",
      description: "Explore cutting-edge tech topics, coding challenges, and innovation workshops.",
      members: 210,
    },
  ];

  // Handle click to navigate to a community's page
  const handleCardClick = (id) => {
    navigate(`/community/${id}`);
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
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-customLiteBlue text-black p-4 shadow-md">
        <h1 className="text-lg font-semibold text-center">My Communities</h1>
      </div>

      <div className="p-6 space-y-8">
        {/* Trending Communities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Trending Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCommunities.map(renderCommunityCard)}
          </div>
        </section>

        {/* Your Joined Communities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Joined Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {joinedCommunities.map(renderCommunityCard)}
          </div>
        </section>

        {/* Recommended Communities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recommended for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCommunities.map(renderCommunityCard)}
          </div>
        </section>
      </div>

      {/* Help Widget */}
      <FloatingHelpWidget />
    </div>
  );
};

export default MyCommunities;
