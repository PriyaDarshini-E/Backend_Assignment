import { useState } from "react";
import { toast } from "react-toastify";

function Task1() {
  const [num, setNum] = useState("");

  const checkNumber = (e) => {
    e.preventDefault();
    const n = Number(num);

    if (n >= 10 && n <= 100 && n % 10 === 0) {
      toast.success("Good Number");
    } else {
      toast.error("Not a Good Number");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={checkNumber}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Good Number Checker
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter <b>10, 20, 30</b> … up to <b>100</b>
        </p>

        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter a number"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={!num}
          className={`w-full py-2 rounded-md font-semibold transition ${
            num
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Check Number
        </button>
      </form>
    </div>
  );
}

export default Task1;
