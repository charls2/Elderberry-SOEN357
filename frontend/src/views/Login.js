import React from 'react';
import Navbar from '../components/Navbar';
import favicon from "../assets/blue-berry-new.png";

function Login() {
  return (
    <>
      <Navbar styles="fixed" />
      <div class="flex min-h-screen">
        {/* Left Section */}
        <div class="w-1/2 flex justify-center items-center bg-customWhite min-h-screen">
          <div className="min-h-screen flex flex-col items-center justify-center">
            {/* <h2 className="text-2xl font-bold mb-6">Welcome Back!</h2> */}
            <form class="rounded-lg shadow-lg space-y-2 border border-customLiteBlue w-80 p-8">
              {/* Heading */}
              <h1 class="text-center text-2xl font-bold pb-1 text-black">
                Welcome Back!
              </h1>
              <p class="text-center text-gray-600">Please enter your details</p>

              {/* Email */}
              <div>
                  <label class="block font-medium mb-2">Email:</label>
                  <input
                      type="email"
                      placeholder="Enter your email"
                      class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                  />
              </div>

              {/* Password */}
              <div>
                  <label class="block font-medium mb-2">Password:</label>
                  <input
                      type="password"
                      placeholder="Enter your password"
                      class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                  />
              </div>

              {/* Login Button */}
              <div class="flex flex-col justify-center items-center space-y-4">
                <a href="/register" class="text-center">Don't have an account?</a>
                <button type="submit" class="bg-customBlue text-white 
                    py-2 px-6 rounded font-bold hover:shadow-md">
                    Login
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Right Section */}
        <div class="w-1/2 bg-customLiteBlue flex flex-col min-h-screen justify-center items-center">
          <img class="object-cover" src={favicon} alt="Cherries" />
          <div class="flex justify-between w-30">
              <img class="" src={favicon} alt="Cherries" />
              <img class="" src={favicon} alt="Cherries" />
          </div>
        </div>
      </div>    
    </>
    
  );
}

export default Login;
