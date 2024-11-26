import React from "react";
import { useParams } from "react-router-dom";

const CommunityPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-lg font-semibold">Community Details</h1>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600">Community {id}</h2>
        <p className="mt-4 text-gray-700">
          This is the detailed page for Community {id}. You can add more
          details here, such as member list, posts, or events.
        </p>
      </div>
    </div>
  );
};

export default CommunityPage;
