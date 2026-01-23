import { useState } from "react";

const Task5 = () => {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleAdd = () => {
    if (number === "") return;
    setNumbers([...numbers, Number(number)]);
    setNumber("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold text-center mb-4">
          Enter Number & Show in Array
        </h3>

        <div className="flex gap-3 mb-4">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="w-full border px-4 py-2 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg
                       hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <div>
          <p className="font-medium mb-2">Array Values:</p>
          <div className="flex flex-wrap gap-2">
            {numbers.map((num, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
              >
                {num}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task5;
