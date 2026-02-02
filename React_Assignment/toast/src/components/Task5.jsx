import { useState } from "react";
import { toast } from "react-toastify";

const Task5 = () => {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Number(num);

    if (n % 3 === 0 && n % 5 === 0) {
      toast.success("Special Number");
      setNum("");
    } else {
      toast.info("Normal Number");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Conditional Reset Checker
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter a number divisible by <b>3 & 5</b> to reset input
        </p>

        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter a number"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          disabled={!num}
          className={`w-full py-2 rounded-md font-semibold transition ${
            num
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Task5;
