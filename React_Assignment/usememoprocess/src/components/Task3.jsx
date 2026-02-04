import { useState } from "react";

const Task3 = () => {
  const [user, setUser] = useState({name: "Priya",email: "priya@gmail.com",city: "Bangalore"});
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
     let inputdata = e.target.value
    const storedata = e.target.name

    setUser({ ...user, [storedata]: inputdata});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Profile Updated Successfully");
  };

  return (
   <>
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm space-y-4"
    >
      <h2 className="text-xl font-bold text-center text-gray-700">
        Update Profile
      </h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Name
        </label>
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Email
        </label>
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          City
        </label>
        <input
          name="city"
          value={user.city}
          onChange={handleChange}
          placeholder="Enter city"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
      >
        Update
      </button>

      {/* Message */}
      {msg && (
        <h3 className="text-center text-green-600 font-medium">
          {msg}
        </h3>
      )}
    </form>
  </div>
</>

  );
};

export default Task3;
