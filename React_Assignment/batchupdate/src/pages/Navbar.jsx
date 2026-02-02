import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 rounded-md text-sm font-medium transition";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">
        React batch update process 
      </h1>

      {/* Navigation Links */}
      <div className="space-x-4">

        <NavLink
          to="/task1"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task1
        </NavLink>

          <NavLink
          to="/task2"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task2
        </NavLink>

         <NavLink
          to="/task3"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task3
        </NavLink>

         <NavLink
          to="/task4"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task4
        </NavLink>

         <NavLink
          to="/task5"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task5
        </NavLink>

        <NavLink
          to="/task6"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task6
        </NavLink>

        <NavLink
          to="/task7"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task7
        </NavLink>

        <NavLink
          to="/task8"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task8
        </NavLink>

        <NavLink
          to="/task9"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >Task9
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
