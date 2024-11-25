import React from 'react';

function Landing() {

  const activities = [
    { title: "Cooking Lessons", description: "Unsure how to cook?" },
    { title: "Life Lessons", description: "Gain valuable insights and practical advice for navigating life's challenges." },
    { title: "Social Events", description: "Reach out to our team for assistance." },
  ];
  const pages = [
    { title: "About Us", description: "Learn more about our mission and values." },
    { title: "Become a Mentor", description: "Help guide and support the next generation." },
    { title: "Need Help?", description: "Reach out to our team for assistance." },
  ];
  
  return (
    <>
      {/* Main Container */}
      <div class="bg-brown min-h-screen flex flex-col items-center">
        {/* Header Section */}
        <div class="bg-tomato w-full py-12 text-center">
          <h1 class="text-4xl font-bold text-black">Welcome to Elderberry</h1>
          <p class="text-lg font-medium text-black mt-2">
            Bridging Generations, one connection at a time
          </p>
          <button class="mt-6 px-6 py-3 bg-yellow-200 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300">
            Join Now / Login
          </button>
        </div>

        {/* Render Activities Dynamically */}
        <div class="w-full text-center">
          <h2 class="text-2xl font-bold text-yellow-200">
              Activities Currently Offered
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto sm:py-12">
            {activities.map((activity, index) => (
              <div key={index} class="bg-yellow-200 p-6 text-black rounded-lg shadow-lg">
                <h3 class="font-semibold text-lg">{activity.title}</h3>
                <p class="text-sm mt-2">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div class="w-full text-center">
          <h2 class="text-2xl font-bold text-yellow-200 mb-8">
            News Stuff
          </h2>

          {/* Render Activities Dynamically */}
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pages.map((activity, index) => (
              <div key={index} class="bg-yellow-200 p-6 text-black rounded-lg shadow-lg">
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

export default Landing;
