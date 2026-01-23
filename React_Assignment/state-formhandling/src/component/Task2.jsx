import React, { useState } from "react";

const Task2 = () => {
  const [data, setData] = useState("");
  const [show, setShow] = useState("");

  const handlechange = (e) => {
    setData(e.target.value);
  };

  const handleclick = () => {
    setShow(data);
  };

  return (
    <>
      <div className="mt-10 h-90 flex items-center justify-center bg-gray-300">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Showing data after clicking the button
          </h3>

          <input
            type="text"
            placeholder="Enter something..."
            onChange={handlechange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleclick}
            className="w-full bg-green-500 text-white py-2 rounded-lg
                       hover:bg-green-600 transition duration-200"
          >
            Show Data
          </button>

          <p className="mt-4 text-lg text-center text-green-600 font-medium">
            {show}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task2;
