import React from "react";
import FloatingHelpWidget from "../components/Help";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-beige">
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Logo or Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 border-gray-300 rounded focus:ring-purple-400" />
              Remember me
            </label>
            <a href="/" className="text-customBlue hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-customBlue focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        
        </div>

        {/* Sign Up */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="/Register" className="text-customBlue font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
        {/*Help Widget*/}
        < FloatingHelpWidget />
      </div>
    
  );
}

export default LoginPage;
