import { useState } from "react";

const Task2 = () => {
  const [user, setUser] = useState({
    name: "Priya",
    age: 22,
  });

  // ❌ Wrong way (mutation)
  const updateWrong = () => {
    user.name = "Darshini";
    setUser(user);
  };

  // ✅ Correct way (immutable update)
  const updateCorrect = () => {
    setUser(prev => ({
      ...prev,
      name: "Darshini",
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          TASK 2: Immutable Object Update
        </h1>

        <p className="text-lg mb-2">
          Name:
          <span className="font-bold text-indigo-600 ml-2">
            {user.name}
          </span>
        </p>

        <p className="text-lg mb-6">
          Age:
          <span className="font-bold text-gray-700 ml-2">
            {user.age}
          </span>
        </p>

        <div className="flex gap-3">
          <button
            onClick={updateWrong}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Wrong Update
          </button>

          <button
            onClick={updateCorrect}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Correct Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task2;
