import { useState } from "react";
import DashboardLayout from "../component/DashboardLayout";
import NumberSidebar from "../component/NumberSidebar";
import EvenOdd from "./EvenOdd";
import PositiveNegative from "./PositiveNegative";
import Agecheck from "./Agecheck";

const NumberState = () => {
  const [activeComponent, setActiveComponent] = useState("");

 const renderComponent = () => {
  switch (activeComponent) {
    case "even-odd":
      return <EvenOdd />;

    case "positive-negative":
      return <PositiveNegative />;

    case "agecheck":
      return <Agecheck />;

    default:
      return <p className="text-gray-500">Select an option from sidebar</p>;
  }
};


  return (
    <DashboardLayout
      sidebar={<NumberSidebar onSelect={setActiveComponent} />}
    >
      <h2 className="text-2xl font-bold mb-6">Number State Process </h2>
      {renderComponent()}
    </DashboardLayout>
  );
};

export default NumberState;
