import { useState } from "react";

const Task4 = () => {
  const numbers = [22, 25, 26, 34, 87, 89, 56, 66, 98, 2, 3, 6, 3, 7];
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("");

  const showEven = () => {
    setTitle("Even Numbers");
    setResult(numbers.filter((n) => n % 2 === 0));
  };

  const showOdd = () => {
    setTitle("Odd Numbers");
    setResult(numbers.filter((n) => n % 2 !== 0));
  };

  return (
    <>
      <div className="mt-10 h-90 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Showing Even and Odd Numbers from Array
          </h3>

          <div className="flex gap-4 mb-6 justify-center">
            <button
              onClick={showEven}
              className="bg-green-500 text-white px-4 py-2 rounded-lg
                         hover:bg-green-600 transition duration-200"
            >
              Show Even Numbers
            </button>

            <button
              onClick={showOdd}
              className="bg-purple-500 text-white px-4 py-2 rounded-lg
                         hover:bg-purple-600 transition duration-200"
            >
              Show Odd Numbers
            </button>
          </div>

          {title && (
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {title}
              </p>
              <p className="text-gray-600">
                {result.join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Task4;
