import { useState } from "react";

const Task2 = () => {
    const [product, setProduct] = useState({ productName: "", price: "", quantity: "" });
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        let inputdata = e.target.value
        const storedata = e.target.name

        setProduct({ ...product, [storedata]: inputdata});
    };

    const getStockStatus = () => {
        if (product.quantity == 0) return "Out of Stock";
        if (product.quantity < 5) return "Low Stock";
        return "In Stock";
    };

    return (
        <>
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">

      <h2 className="text-2xl font-bold text-center text-gray-700 mb-5">
        Product Details
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShow(true);
        }}
        className="space-y-4"
      >
        {/* Product Name */}
        <input
          name="productName"
          placeholder="Product Name"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Price */}
        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Quantity */}
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>

      {/* Output */}
      {show && (
        <div className="mt-6 bg-gray-50 border rounded-lg p-4 space-y-2">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {product.productName}
          </p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            {product.price}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span>{" "}
            {product.quantity}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={
                product.quantity > 0
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              {getStockStatus()}
            </span>
          </p>
        </div>
      )}
    </div>
  </div>
</>

    );
};

export default Task2;
