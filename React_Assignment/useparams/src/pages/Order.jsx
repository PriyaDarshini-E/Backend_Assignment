import { useLocation } from "react-router-dom";
import { useState } from "react";

function Order() {
  const { state } = useLocation();
  const [status, setStatus] = useState(state.status);

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {state.id}</p>
      <p>Status: {status}</p>
      <button onClick={() => setStatus("Delivered")}>
        Change Status
      </button>
    </div>
  );
}

export default Order;
