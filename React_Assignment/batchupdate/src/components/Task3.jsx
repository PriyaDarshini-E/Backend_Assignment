import { useState } from "react";

const Task3 = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 3: Multiple Input Form
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <div className="text-left text-sm text-gray-700">
          <p><b>Username:</b> {form.username}</p>
          <p><b>Email:</b> {form.email}</p>
          <p><b>Password:</b> {form.password}</p>
        </div>
      </div>
    </div>
  );
};

export default Task3;
