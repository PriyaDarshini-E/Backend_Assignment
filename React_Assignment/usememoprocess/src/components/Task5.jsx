import { useMemo, useState } from "react";

const Task5 = () => {
  const [theme, setTheme] = useState(false);
  const numbers = [9, 4, 1, 7, 3, 8];

  const sorted = useMemo(() => {
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6
      ${theme ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <h2 className="text-xl font-semibold">
        Sorted Numbers
      </h2>

      <p className="bg-white text-black px-4 py-2 rounded shadow">
        {sorted.join(", ")}
      </p>

      <button
        onClick={() => setTheme(t => !t)}
        className="px-5 py-2 bg-indigo-600 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Task5;
