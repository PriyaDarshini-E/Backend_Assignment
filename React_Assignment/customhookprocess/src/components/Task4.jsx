import useFetch from "../hooks/useFetch";

const Task4 = () => {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Task 4 – useFetch
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded shadow">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task4;
