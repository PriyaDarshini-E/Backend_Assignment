import React, { useState } from "react";

const Task1 = () => {
  const [showdata, setShowdata] = useState("");

  const handlechange = (e) => {
    const inputdata = e.target.value;
    // console.log(inputdata);
    setShowdata(inputdata);
  };

  return (
    <>
      <div className="mt-10 p-20 flex items-center justify-center bg-gray-300">
        <div className="bg-white p-9 rounded-xl shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Showing the typed values on the screen
          </h3>

          <input
            type="text"
            placeholder="Type something..."
            onChange={handlechange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       text-gray-800 mb-4"
          />

          <p className="text-lg text-blue-600 font-medium text-center">
            {showdata}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task1;
