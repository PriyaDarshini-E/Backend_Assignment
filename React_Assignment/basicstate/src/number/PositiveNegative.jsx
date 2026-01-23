import { useState } from "react";

const PositiveNegative = () => {
  const numbers = [22, -25, 26, -34, 87, -89, 56, 66, -98, 2, 3, 6,0, -3,0, 7];
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("");

  const showPositive = () => {
    setTitle("Positive Numbers");
    setResult(numbers.filter(n => n > 0));
  };

  const showNegative = () => {
    setTitle("Negative Numbers");
    setResult(numbers.filter(n => n < 0));
  };

  const showZero = () => {
    setTitle("Zero Numbers");
    setResult(numbers.filter(n => n === 0));
  };


  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Positive / Negative / Zero</h3>

      <div className="flex gap-4 mb-4">
        <button onClick={showPositive} className="btn">Show Positive Numbers</button>
        <button onClick={showNegative} className="btn">Show Negative Numbers</button>
        <button onClick={showZero} className="btn">Show Zero</button>
      </div>

      <p className="text-lg">
        {title && `${title}: ${result.join(", ")}`}
      </p>
    </div>
  );
};

export default PositiveNegative;
