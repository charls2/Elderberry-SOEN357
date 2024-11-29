import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';

function Welcome() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login"); // Navigate to the "About" page
  };

  const activities = [
    { title: "Cooking Lessons", description: "Unsure how to cook?", goTo: "/communities" },
    { title: "Life Lessons", description: "Gain valuable insights and practical advice for navigating life's challenges." },
    { title: "In-Person Events", description: "In-Person interaction." },
    { title: "Virtual Events", description: "Zoom sessions." },
    { title: "Sport Events", description: "My communities interest in sports." },
  ];
  const pages = [
    { title: "About Us", description: "Learn more about our mission and values.", goTo: "/about" },
    { title: "Become a Mentor", description: "Help guide and support the next generation.", goTo: "/mentors" },
    { title: "Need Help?", description: "Reach out to our team for assistance.", goTo: "/help" },
  ];

  return (
    <>
      {/* Main Container */}
      <div class="bg-white h-screen flex flex-col items-center">
        <Navbar styles="fixed" />
        {/* Header Section */}
        <div class="bg-customLiteBlue w-full py-12 text-center">
          <h1 class="text-4xl font-bold text-black">Welcome to Elderberry</h1>
          <p class="text-lg font-medium text-black mt-2">
            Bridging Generations, one connection at a time
          </p>
          <button onClick={handleButtonClick} class="mt-6 px-6 py-3 bg-tan text-black font-semibold rounded-full shadow-lg hover:shadow-md">
            Join Now / Login
          </button>
        </div>

      
        {/* Render Activities Dynamically */}
        <div class="w-full text-center pt-24">
          <h2 class="text-2xl font-bold text-black">
              Activities Currently Offered
          </h2>
          {<Carousel items={activities} />}
        </div>

        {/* Activities Section */}
        <div class="w-full text-center">
          <h2 class="text-2xl font-bold text-black">
            Misc
          </h2>

          {/* Render Activities Dynamically */}
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pages.map((activity, index) => (
              <div key={index} class="bg-customLiteBlue p-6 text-black rounded-lg shadow-lg">
                <h3 class="font-semibold text-lg">{activity.title}</h3>
                <p class="text-sm mt-2">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
