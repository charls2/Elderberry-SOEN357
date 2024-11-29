import React from "react";
import { useNavigate } from "react-router-dom";
import FloatingHelpWidget from "../components/Help";
import Navbar from "../components/Navbar";

const MyCommunities = () => {
  const navigate = useNavigate();

  // Dummy data for communities
  const communities = [
    { id: 2, name: "Life Lessons Community", description: "Learn more about our mission and values.", posted: "Oct 22, 2024", goTo: "/communities/life-lessons", members: 80 },
    { id: 3, name: "Sports Community", description: "Reach out to our team for assistance.", posted: "Nov 15, 2024", goTo: "/communities/sports", members: 65 },
    { id: 4, name: "Financial Community", description: "Financial tips and resources.", posted: "Nov 18, 2024", goTo: "/communities/financial", members: 85 },
    { id: 7, name: "Therapy Community", description: "Find support and guidance.", posted: "Nov 25, 2024", goTo: "/communities/therapy", members: 46 },
  ];

  // Handle click to navigate to a community's page
  const handleCardClick = (id) => {
    navigate(`/communities/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <div className="text-black text-center p-4">
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
