import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Task1 from "./components/Task1"
import Task2 from "./components/Task2"
import Task3 from "./components/Task3"
import Task4 from "./components/Task4"
import Task5 from "./components/Task5"
import Task6 from "./components/Task6"
import Task7 from "./components/Task7"
import Task8 from "./components/Task8"
import Task9 from "./components/Task9"


const App = () => {
  return (
   <>
   <Navbar />

   
    <Routes>
    <Route path="/task1" element={<Task1 />}/>
    <Route path="/task2" element={<Task2 />}/>
    <Route path="/task3" element={<Task3 />}/>
    <Route path="/task4" element={<Task4 />}/>
    <Route path="/task5" element={<Task5 />}/>
    <Route path="/task6" element={<Task6 />}/>
    <Route path="/task7" element={<Task7 />}/>
    <Route path="/task8" element={<Task8 />}/>
    <Route path="/task9" element={<Task9 />}/>

    </Routes>
   
   </>
  )
}

export default App