import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import avatar from '../assets/avatar.png'

function AboutUs() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/"); // Navigate to the "About" page
  };

  return (
    <>
    <Navbar/>
    <div class="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div class="bg-customLiteBlue text-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl font-bold mb-4">About Us</h1>
          <p class="text-lg font-medium max-w-2xl mx-auto">
            Discover who we are and what drives us to connect generations and foster meaningful relationships.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 text-center space-y-8">
          <h2 class="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            At Elderberry, our mission is to bridge the gap between generations by fostering meaningful
            connections. We believe in the power of shared knowledge, mutual respect, and collaboration to
            create a more unified society.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member */}
            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={avatar}
                alt="Team Member"
                class="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 class="text-xl font-bold text-gray-800">Omar Tawil</h3>
              <p class="text-gray-600">Computer Engineering</p>
              <p class="mt-2 text-sm text-gray-500">
                Passionate about connecting people and building meaningful communities.
              </p>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={avatar}
                alt="Team Member"
                class="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 class="text-xl font-bold text-gray-800">Mann Patel</h3>
              <p class="text-gray-600">Software Engineering</p>
              <p class="mt-2 text-sm text-gray-500">
                Dedicated to creating vibrant and inclusive communities for all generations.
              </p>
            </div>

            <div class="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={avatar}
                alt="Team Member"
                class="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 class="text-xl font-bold text-gray-800">Oliver Baron</h3>
              <p class="text-gray-600">Computer Science</p>
              <p class="mt-2 text-sm text-gray-500">
                Focused on building cutting-edge solutions to enhance user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section class="py-16 bg-customLiteBlue text-white">
        <div class="container mx-auto px-6 text-center space-y-8">
          <h2 class="text-3xl font-bold">Join Us in Making a Difference</h2>
          <p class="text-lg max-w-2xl mx-auto">
            Whether you're looking to connect with others, share your knowledge, or learn something new, Elderberry
            is the place for you.
          </p>
          <button onClick={handleButtonClick} class="px-6 py-3 bg-white text-customLiteBlue font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
    </>
  );
}

export default AboutUs;
