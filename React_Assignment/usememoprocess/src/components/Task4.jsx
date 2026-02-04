import { useState } from "react";

const Task4 = () => {
  const [login, setLogin] = useState({username: "",password: "",role: ""});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let inputdata = e.target.value
    const storedata = e.target.name

    setLogin({ ...login, [storedata]: inputdata });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!login.username || !login.password || !login.role) {
      setError("All fields are required");
    } else {
      setError("");
    }
  };

  return (
    <>
  <div className="min-h-screen bg-blue-100 to-indigo-200 flex items-center justify-center">
    <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm">

      <h2 className="text-2xl font-bold text-center text-gray-700 mb-5">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Username */}
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Password */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Role */}
        <select
          name="role"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Error */}
      {error && (
        <p className="text-red-600 text-center mt-3 font-medium">
          {error}
        </p>
      )}

      {/* Dashboards */}
      {login.role === "admin" && (
        <h3 className="text-center text-indigo-700 font-semibold mt-4">
          Admin Dashboard
        </h3>
      )}

      {login.role === "user" && (
        <h3 className="text-center text-green-700 font-semibold mt-4">
          User Dashboard
        </h3>
      )}
    </div>
  </div>
</>

  );
};

export default Task4;
