import React from "react";
import { Routes, Route } from "react-router-dom";
import Task1 from "../components/Task1";
import Task2 from "../components/Task2";
import Task3 from "../components/Task3";
import Task4 from "../components/Task4";
import Task5 from "../components/Task5";
import Task6 from "../components/Task6";
import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
      </Routes>
    </>
  );
};

export default Router;
