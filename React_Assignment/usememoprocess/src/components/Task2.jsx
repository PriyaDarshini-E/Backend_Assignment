import { useEffect, useMemo, useState } from "react";

const Task2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const total = useMemo(() => {
    return products.reduce((acc, p) => acc + p.price, 0);
  }, [products]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80 text-center">
        <h2 className="text-xl font-semibold mb-2">Total Price</h2>
        <p className="text-2xl font-bold text-green-600">₹ {total}</p>
      </div>
    </div>
  );
};

export default Task2;
