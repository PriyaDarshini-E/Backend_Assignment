import { useState } from "react";

const Task2 = () => {
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
          Task 2 – Fetch on Click
        </h1>

        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-3 hover:bg-blue-600"
        >
          Fetch Data
        </button>

        {loading && <p className="text-blue-500">Loading...</p>}

        <ul className="space-y-2 mt-3">
          {users.map(user => (
            <li key={user.id} className="bg-gray-50 p-2 rounded">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task2;
