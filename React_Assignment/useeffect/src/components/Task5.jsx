import { useEffect, useState } from "react";

const Task5 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h1 className="text-xl font-semibold text-center mb-4 text-blue-600">
          Task 5 – Reverse List
        </h1>

        <button
          onClick={() => setUsers([...users].reverse())}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          Reverse
        </button>

        <ul className="space-y-2">
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

export default Task5