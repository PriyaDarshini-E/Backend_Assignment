import { useState } from "react";

const Task8 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-xl font-semibold mb-4 text-blue-600">
          Task 8 – Count
        </h1>

        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Fetch
        </button>

        {loading && <p className="mt-3">Loading...</p>}
        {!loading && users.length > 0 && (
          <p className="mt-3 font-semibold">Total: {users.length}</p>
        )}
      </div>
    </div>
  );
};

export default Task8;