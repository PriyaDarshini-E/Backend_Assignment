import { useState } from "react";
import { toast } from "react-toastify";

function Task4() {
  const [num, setNum] = useState("");

  const checkPattern = (e) => {
    e.preventDefault();

    if (/^9\d{3}$/.test(num)) {
      toast.success("Accepted Number");
      setNum("");
    } else {
      toast.error("Rejected Number");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={checkPattern}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Pattern Checker
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Must start with <b>9</b> and contain <b>4 digits</b>
        </p>

        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Ex: 9123"
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
          Check Pattern
        </button>
      </form>
    </div>
  );
}

export default Task4;
