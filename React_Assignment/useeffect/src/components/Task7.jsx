import { useEffect, useState } from "react";

const Task7 = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h1 className="text-xl font-semibold text-center mb-4 text-blue-600">
          Task 7 – Search
        </h1>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Search name"
          onChange={e => setSearch(e.target.value)}
        />

        <ul className="space-y-2">
          {users
            .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
            .map(user => (
              <li key={user.id} className="bg-gray-50 p-2 rounded">
                {user.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Task7