import React, { useState } from "react";
import { SendHorizontal, Paperclip, Menu, X } from "lucide-react";
import Navbar from "../components/Navbar";

function MentorshipPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mockMessages = [
    { sender: "Mentor", content: "Hi there! How can I help you today?", timestamp: "9:00 AM" },
    { sender: "You", content: "I need advice on improving my coding skills.", timestamp: "9:01 AM" },
    { sender: "Mentor", content: "Sure! Let's discuss some resources and techniques.", timestamp: "9:02 AM" },
  ];

  const events = [
    { title: "Mentorship Session", date: "Dec 1, 2024", time: "2:00 PM" },
    { title: "Career Advice", date: "Dec 3, 2024", time: "10:00 AM" },
  ];

  return (
    <>
    <Navbar />
    <div className="flex flex-col min-h-screen bg-white overflow-auto">
      
      <div className="flex flex-col md:flex-row flex-grow overflow-y-auto relative">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-16 left-4 z-50 p-2 bg-white rounded-full shadow-lg"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar */}
        <div className={`
          bg-white p-4 
          fixed md:relative top-5 left-0
          md:w-1/4 w-64
          h-full
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          z-40
        `}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search"
              className="bg-white w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>
          <ul className="space-y-2">
            {["Chat History", "Scheduled Events", "Help Topics", "Settings"].map((item, index) => (
              <li
                key={index}
                className="p-2 rounded hover:bg-aquamarine cursor-pointer text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col flex-grow bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-white px-6 py-4 border-b">
              <h1 className="text-xl font-semibold text-gray-800">Chat with Mentor</h1>
              <p className="text-sm text-gray-500">Online - Last seen recently</p>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {mockMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] ${
                      msg.sender === "You"
                        ? "bg-blue-500 text-white rounded-l-lg rounded-br-lg"
                        : "bg-white text-gray-800 rounded-r-lg rounded-bl-lg shadow-sm border"
                    } p-4`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">
                        {msg.sender}
                      </span>
                      <span className="text-xs opacity-75">
                        {msg.timestamp}
                      </span>
                    </div>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-500" />
                </button>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                />
                <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
                  <SendHorizontal className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white rounded shadow-lg p-4">
            <h2 className="text-xl font-bold text-black mb-4">Upcoming Events</h2>
            <ul className="space-y-4">
              {events.map((event, index) => (
                <li key={index} className="p-3 bg-gray-100 rounded shadow">
                  <p className="text-lg font-semibold">{event.title}</p>
                  <p className="text-gray-600">
                    {event.date} at {event.time}
                  </p>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-customBlue text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MentorshipPage;