import { useState } from "react";

const Task5 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 5: Conditional Rendering
        </h1>

        {isLoggedIn ? (
          <p className="text-green-600 font-semibold mb-4">
            Welcome User 👋
          </p>
        ) : (
          <p className="text-red-600 font-semibold mb-4">
            Please Login
          </p>
        )}

        <button
          onClick={() => setIsLoggedIn(prev => !prev)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
        >
          Toggle Login
        </button>
      </div>
    </div>
  );
};

export default Task5;
