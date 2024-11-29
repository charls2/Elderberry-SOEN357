import React from "react";
import Carousel from "../components/carousel";
import FloatingHelpWidget from "../components/Help";

const Home = () => {
  // Mock data for activities (events)
  const activities = [
    {
      id: 1,
      title: "Yoga in the Park",
      date: "December 10, 2024",
      time: "10:00 AM",
      location: "Central Park",
      image: "https://t3.ftcdn.net/jpg/08/56/75/48/360_F_856754857_z9XJD3FDUrtjaJFNwINKYuC0FqV5YCE2.jpg"
    },
    {
      id: 2,
      title: "Coding Workshop",
      date: "December 15, 2024",
      time: "6:00 PM",
      location: "Tech Hub",
      image: "https://png.pngtree.com/png-vector/20220702/ourmid/pngtree-coding-logo-template-illustration-design-png-image_5673078.png"
    },
    {
      id: 3,
      title: "Community Gardening",
      date: "December 20, 2024",
      time: "1:00 PM",
      location: "Community Garden",
      image: "https://static.vecteezy.com/system/resources/previews/005/351/846/non_2x/shovel-and-plant-leaf-flower-garden-line-logo-design-agriculture-vector.jpg"
    },
  ];

  // Mock data for community news feeds
  const feeds = [
    {
      id: 1,
      title: "New Library Opened",
      summary: "The city has opened a new library with modern facilities, a vast collection of books, and dedicated spaces for community activities. It aims to be a hub for learning and engagement...",
      date: "March 5, 2024",
    },
    {
      id: 2,
      title: "Local School Wins Award",
      summary: "Our local school has been awarded for excellence in science education, recognizing its innovative teaching methods and the outstanding performance of its students in national competitions...",
      date: "March 7, 2024",
    },
    {
      id: 3,
      title: "Road Safety Campaign",
      summary: "A new campaign has been launched to improve road safety, focusing on educating drivers and pedestrians about traffic rules and promoting safe practices. The initiative includes workshops and awareness programs...",
      date: "March 9, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Welcome Section */}
      <section className="">
        <h2 className="text-2xl bg-customLiteBlue p-5 font-bold text-gray-800">
          Welcome back, {"John"}
        </h2>
      </section>

      {/* Trending Activities */}
      <section className="p-2">
        <h2 className="text-xl font-bold text-center text-black mb-4">Trending Activities</h2>
        </section>


      {/* Carousel Section */}
      <section className="p-4">
        <Carousel activities={activities} />
      </section>

      {/* Feeds Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
  {feeds.map((feed) => (
    <div
      key={feed.id}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between" // Expanded styling
    >
      {/* Title */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{feed.title}</h3>

        {/* Expanded Summary */}
        <p className="text-sm text-gray-600">
          {feed.summary} In addition, this initiative includes long-term plans to improve community 
          engagement and foster collaboration among residents. Stay updated as more details about 
          this exciting development are announced.
        </p>

        {/* Highlight Section */}
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-1">Highlights:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>New facilities to improve community involvement</li>
            <li>Workshops and interactive sessions planned</li>
            <li>Open to residents of all ages</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs text-gray-500">{feed.date}</p>
        <button className="px-4 py-2 bg-aquamarine text-black text-sm rounded-lg hover:bg-green-300">
          Read More
        </button>
      </div>
    </div>
  ))}
</section>
<div>
  <FloatingHelpWidget />
</div>
    </div>
  );
};

export default Home;