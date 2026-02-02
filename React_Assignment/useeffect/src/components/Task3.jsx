import { useEffect, useState } from "react";

const Task3 = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-xl font-semibold mb-4 text-blue-600">
          Task 3 – Show / Hide
        </h1>

        <button
          onClick={() => setShow(!show)}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          {show ? "Hide" : "Show"}
        </button>

        {show && (
          <ul className="space-y-2">
            {users.map(user => (
              <li key={user.id} className="bg-gray-50 p-2 rounded">
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Task3;
