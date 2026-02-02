import { useState } from "react";

const Task8 = () => {
  const [count, setCount] = useState(0);

  const increaseByFive = () => {
    setCount(prev => prev + 5);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 8: Counter Using Prev
        </h1>

        <p className="text-xl mb-4">
          Count:
          <span className="font-bold text-blue-600 ml-2">
            {count}
          </span>
        </p>

        <button
          onClick={increaseByFive}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Increase by 5
        </button>
      </div>
    </div>
  );
};

export default Task8;
