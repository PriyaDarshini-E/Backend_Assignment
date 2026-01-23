import { useState } from "react";

const EvenOdd = () => {
  const numbers = [22, 25, 26, 34, 87, 89, 56, 66, 98, 2, 3, 6, 3, 7];
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("");

  const showEven = () => {
    setTitle("Even Numbers");
    setResult(numbers.filter(n => n % 2 === 0));
  };

  const showOdd = () => {
    setTitle("Odd Numbers");
    setResult(numbers.filter(n => n % 2 !== 0));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Even / Odd</h3>

      <div className="flex gap-4 mb-4">
        <button onClick={showEven} className="btn">Show Even Numbers</button>
        <button onClick={showOdd} className="btn">Show Odd Numbers</button>
      </div>

      <p className="text-lg">
        {title && `${title}: ${result.join(", ")}`}
      </p>
    </div>
  );
};

export default EvenOdd;
