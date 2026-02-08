import { useCallback, useState } from "react";

const Child = ({ onInc }) => {
  console.log("Child Render");
  return (
    <button
      onClick={onInc}
      className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Increment
    </button>
  );
};

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6
      ${dark ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <h2 className="text-2xl font-bold">Count: {count}</h2>

      <Child onInc={increment} />

      <button
        onClick={() => setDark(d => !d)}
        className="px-5 py-2 bg-gray-800 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Task1;
