import { useCallback, useState } from "react";

const Task2 = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const deleteItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i !== id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-64 space-y-3">
        {items.map(i => (
          <div
            key={i}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>Item {i}</span>
            <button
              onClick={() => deleteItem(i)}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task2;
