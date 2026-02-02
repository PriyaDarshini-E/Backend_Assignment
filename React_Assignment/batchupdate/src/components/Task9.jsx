import { useState } from "react";

const Task9 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 9: Show / Hide Component
        </h1>

        {show && (
          <div className="mb-4 p-3 bg-gray-200 rounded">
            🎉 Hidden Component is Visible
          </div>
        )}

        <button
          onClick={() => setShow(prev => !prev)}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded"
        >
          Toggle Component
        </button>
      </div>
    </div>
  );
};

export default Task9;
