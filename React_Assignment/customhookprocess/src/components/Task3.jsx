import useInput from "../hooks/useInput";

const Task3 = () => {
  const { value, onChange, reset } = useInput("");

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Task 3 – useInput</h2>

      <input
        value={value}
        onChange={onChange}
        className="border p-2 rounded"
        placeholder="Type something..."
      />

      <p className="mt-4">Value: {value}</p>

      <button onClick={reset} className="btn mt-4">Clear</button>
    </div>
  );
};

export default Task3;
