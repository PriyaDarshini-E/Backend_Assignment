import React, { useState } from "react";

const Task1 = () => {
  const [formdata, setFormdata] = useState({
    studName: "",
    studEmail: "",
    studCourse: "",
    studAge: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Student datas", JSON.stringify(formdata));
    alert("Successfully done");

    // clear form
    setFormdata({
      studName: "",
      studEmail: "",
      studCourse: "",
      studAge: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handlesubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Student Registration
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            name="studName"
            value={formdata.studName}
            onChange={handlechange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            name="studEmail"
            value={formdata.studEmail}
            onChange={handlechange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Course */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Course
          </label>
          <select
            name="studCourse"
            value={formdata.studCourse}
            onChange={handlechange}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your course</option>
            <option value="Java Developer">Java Developer</option>
            <option value="Javascript Developer">Javascript Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Age
          </label>
          <input
            type="number"
            name="studAge"
            value={formdata.studAge}
            onChange={handlechange}
            placeholder="Enter your age"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Task1;
