import useTimer from "../hooks/useTimer";

const Task5 = () => {
  const seconds = useTimer();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Task 5 – useTimer</h2>
      <p className="text-xl">Seconds: {seconds}</p>
    </div>
  );
};

export default Task5;
