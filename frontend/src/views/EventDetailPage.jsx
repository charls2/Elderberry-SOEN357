import React from "react";

function EventDetailPage() {
  const event = {
    title: "Photography Adventure in the Wild",
    imageUrl: "https://via.placeholder.com/800x400", // Replace with actual image/video URL
    tags: ["Photography", "Adventure", "Nature", "Accessible"],
    location: {
      address: "123 Nature Walk, Green Forest",
      city: "Hillside",
      country: "USA",
    },
    description: `Join us for a breathtaking photography adventure in the wild. 
      Capture stunning landscapes, discover new photography techniques, 
      and connect with fellow enthusiasts in this immersive experience.`,
    stats: {
      attendees: 120,
      spotsAvailable: 30,
    },
    date: "December 10, 2024",
    time: "10:00 AM - 4:00 PM",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-customLiteBlue p-6 text-white">
        <h1 className="text-3xl font-bold">{event.title}</h1>
        <p className="text-lg">{event.date} | {event.time}</p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row flex-grow p-6 gap-6">
        {/* Main Section */}
        <div className="flex-1 bg-white rounded-lg p-4 shadow">
          {/* Media */}
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={event.imageUrl}
              alt="Event media"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Location */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-gray-700">{event.location.address}</p>
            <p className="text-gray-700">{event.location.city}, {event.location.country}</p>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Event Details</h2>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80 bg-white rounded-lg p-4 shadow">
          {/* Stats */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Event Stats</h2>
            <p className="text-gray-700">
              <strong>Attendees:</strong> {event.stats.attendees}
            </p>
            <p className="text-gray-700">
              <strong>Spots Available:</strong> {event.stats.spotsAvailable}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Attend
            </button>
            <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Cancel Registration
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Event Date & Time</h2>
            <p className="text-gray-700">{event.date}</p>
            <p className="text-gray-700">{event.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
