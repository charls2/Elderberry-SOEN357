import React from "react";
import { useNavigate } from "react-router-dom";
import FloatingHelpWidget from "../components/Help";

const MyCommunities = () => {
  const navigate = useNavigate();

  // Dummy data for communities
  const communities = [
    {
      id: 1,
      name: "Community A",
      description: "This is a description of Community A. It focuses on ...",
      members: 120,
    },
    {
      id: 2,
      name: "Community B",
      description: "This is a description of Community B. Join us for ...",
      members: 85,
    },
    {
      id: 3,
      name: "Community C",
      description: "This is a description of Community C. We love ...",
      members: 200,
    },
  ];

  // Handle click to navigate to a community's page
  const handleCardClick = (id) => {
    navigate(`/community/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-lg font-semibold">My Communities</h1>
      </div>

      {/* Community Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <div
            key={community.id}
            onClick={() => handleCardClick(community.id)}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition duration-200"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              {community.name}
            </h2>
            <p className="text-gray-600 mt-2">{community.description}</p>
            <p className="text-gray-500 mt-4">Members: {community.members}</p>
          </div>
        ))}
      </div>
        
        {/* Help Widget */}
        <FloatingHelpWidget />
    </div>
  );
};

export default MyCommunities;
