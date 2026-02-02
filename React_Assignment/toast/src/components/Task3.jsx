import { useState } from "react";
import { toast } from "react-toastify";

function Task3() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (count >= 3) {
      toast.error("Limit Reached");
      return;
    }

    setCount(count + 1);
    toast.success(`Submitted ${count + 1} time(s)`);
    setValue("");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Attempt Limit
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          You can submit only <b>3 times</b>
        </p>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter something"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={count >= 3 || !value}
          className={`w-full py-2 rounded-md font-semibold transition ${
            count < 3 && value
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit ({count}/3)
        </button>
      </form>
    </div>
  );
}

export default Task3;
