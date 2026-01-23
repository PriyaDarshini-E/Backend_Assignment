import { useLocation } from "react-router-dom";
import { useState } from "react";

function EditProduct() {
  const { state } = useLocation();
  const [product, setProduct] = useState(state);

  return (
    <div>
      <h2>Edit Product</h2>

      <input
        value={product.name}
        onChange={(e) =>
          setProduct({ ...product, name: e.target.value })
        }
      />

      <input
        type="number"
        value={product.price}
        onChange={(e) =>
          setProduct({ ...product, price: e.target.value })
        }
      />

      <p>Saved: {product.name} - ₹{product.price}</p>
    </div>
  );
}

export default EditProduct;
