import useToggle from "../hooks/useToggle";

const Task2 = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Task 2 – useToggle</h2>
      <p className="mb-4 text-lg">{isOn ? "ON" : "OFF"}</p>

      <button onClick={toggle} className="btn">
        Toggle
      </button>
    </div>
  );
};

export default Task2;
