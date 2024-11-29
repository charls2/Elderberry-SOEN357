import React, { useState } from "react";

const EditPreferences = () => {
  // State to control edit mode and form data
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    phone: "123-456-7890",
    gender: "Male",
    birthday: "1990-01-01",
  });

  const [formData, setFormData] = useState({ ...profile });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes
  const handleSave = () => {
    setProfile({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <ul className="space-y-2 text-gray-700">
          <li className="hover:bg-purple-200 p-2 rounded">My Profile</li>
          <li className="hover:bg-purple-200 p-2 rounded">Notifications</li>
          <li className="hover:bg-purple-200 p-2 rounded">
            Create a Community
          </li>
          {Array(10)
            .fill("Menu Item")
            .map((item, index) => (
              <li
                key={index}
                className="hover:bg-purple-200 p-2 rounded"
              >
                {item}
              </li>
            ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-300 p-6">
        <h2 className="text-center text-2xl font-semibold mb-4">
          Edit Preferences
        </h2>

        {/* Profile Card */}
        {!isEditing ? (
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-1/2 mx-auto">
            <h3 className="font-semibold text-lg">My Profile</h3>
            <p>Name: {profile.name}</p>
            <p>Phone: {profile.phone}</p>
            <p>Gender: {profile.gender}</p>
            <p>Birthday: {profile.birthday}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          </div>
        ) : (
          /* Edit Form */
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-1/2 mx-auto">
            <h3 className="font-semibold text-lg">Edit Profile</h3>
            <form className="space-y-4">
              <div>
                <label className="block font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium">Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Birthday:</label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </form>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPreferences;
