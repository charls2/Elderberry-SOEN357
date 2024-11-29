import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const communities = [
    { id: 1, name: "Cooking Community", description: "Learn more about our mission and values.", posted: "Nov 12, 2024", goTo: "/communities/1", members: 120 },
    { id: 2, name: "Life Lessons Community", description: "Learn more about our mission and values.", posted: "Oct 22, 2024", goTo: "/communities/2", members: 80 },
    { id: 3, name: "Sports Community", description: "Reach out to our team for assistance.", posted: "Nov 15, 2024", goTo: "/communities/3", members: 65 },
    { id: 4, name: "Financial Community", description: "Financial tips and resources.", posted: "Nov 18, 2024", goTo: "/communities/4", members: 85 },
    { id: 5, name: "Social Skills Community", description: "Improve your social skills with us.", posted: "Nov 20, 2024", goTo: "/communities/5", members: 162 },
    { id: 6, name: "Botanical Community", description: "Explore botanical wonders.", posted: "Nov 22, 2024", goTo: "/communities/6", members: 51 },
    { id: 7, name: "Therapy Community", description: "Find support and guidance.", posted: "Nov 25, 2024", goTo: "/communities/7", members: 46 },
  ];
  const events = [
    {
      id: 1,
      communityId: 1, // Cooking Community
      name: "Mastering Italian Cuisine",
      description: "Join us for an exclusive Italian cooking class with a professional chef.",
      date: "Dec 1, 2024",
      time: "6:00 PM",
      location: "Community Kitchen, Main Hall",
    },
    {
      id: 2,
      communityId: 1, // Cooking Community
      name: "Holiday Baking Workshop",
      description: "Learn how to bake festive treats for the holiday season.",
      date: "Dec 15, 2024",
      time: "2:00 PM",
      location: "Downtown Baking Studio",
    },
    {
      id: 3,
      communityId: 2, // Life Lessons Community
      name: "Building Resilience",
      description: "A seminar on overcoming life's challenges and building mental strength.",
      date: "Nov 30, 2024",
      time: "5:00 PM",
      location: "Life Center Auditorium",
    },
    {
      id: 4,
      communityId: 2, // Life Lessons Community
      name: "Time Management 101",
      description: "Learn how to manage your time effectively in this interactive workshop.",
      date: "Dec 10, 2024",
      time: "4:00 PM",
      location: "Library Conference Room",
    },
    {
      id: 5,
      communityId: 3, // Sports Community
      name: "Community Soccer Tournament",
      description: "Participate or cheer for teams in our friendly soccer tournament.",
      date: "Dec 3, 2024",
      time: "10:00 AM",
      location: "City Park Soccer Field",
    },
    {
      id: 6,
      communityId: 3, // Sports Community
      name: "Yoga for Athletes",
      description: "Discover the benefits of yoga in enhancing sports performance.",
      date: "Dec 8, 2024",
      time: "7:00 PM",
      location: "Fitness Center Studio",
    },
    {
      id: 7,
      communityId: 4, // Financial Community
      name: "Budgeting Basics",
      description: "A beginner-friendly session on creating and maintaining a budget.",
      date: "Dec 5, 2024",
      time: "6:30 PM",
      location: "Financial Wellness Center",
    }]
  

function Community() {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedEvent, setSelectedEvent] = useState(null); // Store selected event
    const { id } = useParams(); // Get the community ID from the URL
  const community = communities.find((c) => c.id === parseInt(id, 10)); // Find the community by ID

  if (!community) {
    return <div>Community not found</div>;
  }
  
  const handleJoinClick = (event) => {
    setSelectedEvent(event); // Set the selected event for confirmation
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedEvent(null); // Clear the selected event
  };

  return (
<div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mt-6">
        {/* Community Details */}
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{community.name}</h1>
        <p className="text-gray-700 text-lg mb-6">{community.description}</p>
        <div className="text-gray-500 text-sm">
          <p className="mb-2">
            <span className="font-semibold text-gray-600">Posted on:</span> {community.posted}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Members:</span> {community.members}
          </p>
        </div>

        {/* Events Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          {events.filter((event) => event.communityId === community.id).length > 0 ? (
            events
              .filter((event) => event.communityId === community.id)
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-100 rounded-lg p-4 mb-4 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                  <button
                    onClick={() => handleJoinClick(event)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Join Event
                  </button>
                </div>
              ))
          ) : (
            <p className="text-gray-600">No events scheduled for this community.</p>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Join Event</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to join the event{" "}
              <span className="font-semibold">{selectedEvent?.name}</span>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  closeModal();
                  // Add your event joining logic here
                  alert(`You joined the event: ${selectedEvent?.name}`);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Community;