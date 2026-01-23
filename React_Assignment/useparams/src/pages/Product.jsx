import { useLocation } from "react-router-dom";
import { useState } from "react";

function Product() {
  const location = useLocation();
  const [price, setPrice] = useState(location.state.price);

  return (
    <>
    <div>
      <h2>Product Page</h2>
      <p>Name: {location.state.name}</p>
      <p>Price: ₹{price}</p>
      <button onClick={() => setPrice(price + 5000)}>Increase Price</button>
    </div>


    </>
  );
}

export default Product;
