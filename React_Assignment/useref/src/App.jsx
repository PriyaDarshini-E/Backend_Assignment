import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Task1 from "./components/Task1"

const App = () => {
  return (
   <>
   <Navbar />

   
    <Routes>
    <Route path="/task1" element={<Task1 />}/>
  

    </Routes>
   
   </>
  )
}

export default App