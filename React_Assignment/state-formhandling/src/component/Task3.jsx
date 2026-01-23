import React, { useState } from "react";

const Task3 = () => {
  const [result, setResult] = useState("");
  const [showresult, setshowresult] = useState("");

  const hanglechange = (e) => {
    const inputdata = e.target.value;
    setResult(inputdata);
  };

  const check = () => {
    if (result <= 0) {
      setshowresult(`Please enter a valid age ${result}`);
    } else if (result >= 18 && result <= 150) {
      setshowresult("You are eligible to vote");
    } else {
      setshowresult("You are not eligible to vote");
    }
  };

  return (
    <>
      <div className="mt-10 h-90 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Check Voting Eligibility
          </h3>

          <div className="flex gap-3 mb-4">
            <input
              type="number"
              placeholder="Enter your age"
              onChange={hanglechange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={check}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg
                         hover:bg-blue-700 transition duration-200"
            >
              Check
            </button>
          </div>

          <p className="text-lg font-medium text-center text-gray-700">
            {showresult}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task3;
