import { useState } from "react";

const Task6 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 6: Toggle Boolean Using Prev
        </h1>

        {isVisible && (
          <p className="mb-4 text-gray-700">
            👀 This text is visible
          </p>
        )}

        <button
          onClick={() => setIsVisible(prev => !prev)}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded transition"
        >
          Toggle Visibility
        </button>
      </div>
    </div>
  );
};

export default Task6;
