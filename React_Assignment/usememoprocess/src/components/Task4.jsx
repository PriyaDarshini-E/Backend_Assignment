import { useMemo, useState } from "react";

const Task4 = () => {
  const [num, setNum] = useState(1);
  const [theme, setTheme] = useState(false);

  const factorial = useMemo(() => {
    let res = 1;
    for (let i = 1; i <= num; i++) res *= i;
    return res;
  }, [num]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6
      ${theme ? "bg-slate-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <input
        type="number"
        min="1"
        onChange={e => setNum(+e.target.value)}
        className="p-3 rounded border w-48 text-black"
      />

      <h2 className="text-2xl font-bold">Factorial: {factorial}</h2>

      <button
        onClick={() => setTheme(t => !t)}
        className="px-5 py-2 bg-purple-600 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Task4;
