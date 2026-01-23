import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Task1 from "./component/Task1";
import Task2 from "./component/Task2";
import Task3 from "./component/Task3";
import Task4 from "./component/Task4";
import Task5 from "./component/Task5";

function App() {
  return (
    <>
      <Navbar />

    <Routes>
    <Route path="/task1" element={<Task1 />}/>
    <Route path="/task2" element={<Task2 />}/>
    <Route path="/task3" element={<Task3 />}/>
    <Route path="/task4" element={<Task4 />}/>
    <Route path="/task5" element={<Task5 />}/>

    </Routes>

    </>


  );
}

export default App;
