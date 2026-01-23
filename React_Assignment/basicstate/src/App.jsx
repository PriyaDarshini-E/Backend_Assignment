import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import NumberState from "./number/Numberstate";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<NumberState />} />
      
      </Routes>
    </>
  );
}

export default App;
