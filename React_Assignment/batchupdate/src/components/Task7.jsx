import { useState } from "react";

const Task7 = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(prev => [...prev, prev.length + 1]);
  };

  const removeItem = () => {
    setItems(prev => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 7: Array State Update
        </h1>

        <ul className="mb-4">
          {items.map(item => (
            <li key={item} className="text-gray-700">
              Item {item}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button
            onClick={addItem}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            Add
          </button>

          <button
            onClick={removeItem}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task7;
