import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Theme from "./pages/Theme";
import Order from "./pages/Order";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/order" element={<Order />} />
      <Route path="/edit-product" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
