import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Homepage from "./Components/Homepage.jsx";
import String_render from "./Components/String_render.jsx";
import Number_render from "./Components/Number_render.jsx";
import Ternary_render from "./Components/Ternary_render.jsx";
import Optional_render from "./Components/Optional_render.jsx";
import Template_literals from "./Components/Template_literals.jsx";
import Nullish_render from "./Components/Nullish_render.jsx";
import Object_render from "./Components/Object_render.jsx";
import Array_of_object_render from "./Components/Array_of_object_render.jsx";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/String_render" element={<String_render />} />
          <Route path="/Number_render" element={<Number_render />} />
          <Route path="/Ternary_render" element={<Ternary_render />} />
          <Route path="/Optional_render" element={<Optional_render />} />
          <Route path="/Template_literals" element={<Template_literals />} />
          <Route path="/Nullish_render" element={<Nullish_render />} />
          <Route path="/Object_render" element={<Object_render />} />
          <Route path="/Array_of_object_render" element={<Array_of_object_render />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
