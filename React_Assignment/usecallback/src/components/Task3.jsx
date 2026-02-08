import { useCallback, useState } from "react";

const Task3 = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = useCallback((e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-80 space-y-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <pre className="text-sm bg-gray-100 p-2 rounded">
          {JSON.stringify(form, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Task3;
