import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [countPrev, setCountPrev] = useState(0);

 // React batches state updates inside the same event handler.
// When using setCount(count + 1), all updates use the SAME
// snapshot of `count`, so the value increases only once.
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  console.log("state update ",count);
  

  // Using functional updates (prev => prev + 1)
// ensures each update receives the latest state value,
// so all updates are applied correctly even when batched.
  const handlePrevClick = () => {
    setCountPrev(prev => prev + 1);
    setCountPrev(prev => prev + 1);
    setCountPrev(prev => prev + 1);
  };
  console.log("Prev update",countPrev);
  

 return (
  <>
    <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
  TASK 1: State Update Process (Increase by 3)
</h1>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          State Update Demo
        </h2>

        <p className="text-lg mb-2">
          Normal Count:
          <span className="font-bold text-red-500 ml-2">{count}</span>
        </p>

        <p className="text-lg mb-4">
          Prev Count:
          <span className="font-bold text-blue-500 ml-2">{countPrev}</span>
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleClick}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            State update
          </button>

          <button
            onClick={handlePrevClick}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Prev update
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Task1;
