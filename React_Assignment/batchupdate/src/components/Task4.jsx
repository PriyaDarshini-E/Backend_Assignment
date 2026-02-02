import { useState } from "react";

const Task4 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    alert("Form submitted successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 4: Form Validation
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Task4;
