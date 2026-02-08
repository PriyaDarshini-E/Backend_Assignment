import { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child Render");
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 bg-blue-600 text-white rounded"
    >
      Child Button
    </button>
  );
});

const Task5 = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      <Child onClick={handleClick} />

      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-5 py-2 bg-gray-800 text-white rounded"
      >
        Parent Count: {count}
      </button>
    </div>
  );
};

export default Task5;
