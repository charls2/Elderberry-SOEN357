import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ACTIVITY_OPTIONS = [
  "Hiking", "Photography", "Cooking", "Gaming",
  "Reading", "Travel", "Music", "Sports",
  "Art", "Technology", "Yoga", "Dancing"
];

const EditPreferences = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    phone: "123-456-7890",
    gender: "Male",
    birthday: "1990-01-01",
    activities: ["Hiking", "Photography"]
  });

  const [formData, setFormData] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleActivity = (activity) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleSave = () => {
    setProfile({ ...formData });
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        {/* Side Menu */}
        <div className={`lg:block ${isMenuOpen ? "block" : "hidden"} lg:w-64 bg-white border-r p-4 space-y-2`}>
          <div className="font-semibold mb-4">Settings</div>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">My Profile</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Notifications</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Communities</button>
        </div>

        {/* Menu Toggle for Small Screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block lg:hidden px-4 py-2 bg-blue-600 text-white rounded mx-4 my-2"
        >
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>

            {!isEditing ? (
              <div className="space-y-4">
                {/* Profile Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1">{profile.name}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <div className="mt-1">{profile.phone}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <div className="mt-1">{profile.gender}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Birthday</label>
                    <div className="mt-1">{profile.birthday}</div>
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Activities</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profile.activities.map((activity) => (
                      <span key={activity} className="px-3 py-1 bg-aquamarine text-black rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Edit Button */}
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Editable Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Birthday</label>
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Activities Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Activities & Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {ACTIVITY_OPTIONS.map((activity) => (
                      <button
                        key={activity}
                        onClick={() => toggleActivity(activity)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          formData.activities.includes(activity)
                            ? "bg-aquamarine text-black"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {activity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPreferences;
