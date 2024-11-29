import React from "react";
import Navbar from "../components/Navbar";
import favicon from "../assets/blue-berry-new.png";

function Login() {
  return (
    <>
      <Navbar styles="fixed" />
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-customWhite min-h-screen">
          <div className="flex flex-col items-center justify-center w-full px-6 lg:px-0">
            <form className="rounded-lg shadow-lg space-y-4 border border-customLiteBlue w-full max-w-md p-6 lg:p-8">
              {/* Heading */}
              <h1 className="text-center text-2xl font-bold pb-2 text-black">
                Welcome Back!
              </h1>
              <p className="text-center text-gray-600 mb-4">Please enter your details</p>

              {/* Email */}
              <div>
                <label className="block font-medium mb-2">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block font-medium mb-2">Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                />
              </div>

              {/* Login Button */}
              <div className="flex flex-col justify-center items-center space-y-4">
                <a href="/register" className="text-center text-customBlue hover:underline">
                  Don't have an account?
                </a>
                <button
                  type="submit"
                  className="bg-customBlue text-white py-2 px-6 rounded font-bold hover:shadow-md"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-customLiteBlue flex flex-col min-h-screen justify-center items-center px-4">
          <img className="object-cover mb-6 w-32 h-32" src={favicon} alt="Logo" />
          <div className="flex justify-between space-x-4">
            <img className="w-20 h-20 object-cover" src={favicon} alt="Cherries" />
            <img className="w-20 h-20 object-cover" src={favicon} alt="Cherries" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
