import useCounter from "../hooks/useCounter";

const Task1 = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Task 1 – useCounter</h2>
      <p className="text-xl mb-4">Count: {count}</p>

      <div className="space-x-3">
        <button onClick={increment} className="btn">+</button>
        <button onClick={decrement} className="btn">-</button>
        <button onClick={reset} className="btn bg-red-500">Reset</button>
      </div>
    </div>
  );
};

export default Task1;
