import { useCallback } from "react";

const Button = ({ label, onClick }) => {
  console.log(label, "rendered");
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-indigo-600 text-white rounded"
    >
      {label}
    </button>
  );
};

const Task4 = () => {
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-4">
      <Button label="One" onClick={handleClick} />
      <Button label="Two" onClick={handleClick} />
      <Button label="Three" onClick={handleClick} />
    </div>
  );
};

export default Task4;
