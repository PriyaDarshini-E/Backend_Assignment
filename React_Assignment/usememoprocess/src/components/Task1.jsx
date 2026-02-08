import { useMemo, useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const heavyResult = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += count;
    return sum;
  }, [count]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6 transition-all
      ${dark ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <h2 className="text-2xl font-bold">Result: {heavyResult}</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(c => c + 1)}
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          onClick={() => setDark(d => !d)}
          className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Task1;
