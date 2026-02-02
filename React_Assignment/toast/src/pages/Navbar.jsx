import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseLink =
    "px-4 py-2 rounded-md text-sm font-semibold transition duration-200";

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <h1 className="text-xl font-bold tracking-wide">
          Toast Tasks
        </h1>

        {/* Links */}
        <div className="flex gap-3">
          <NavLink
            to="/task1"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-gray-700"
              }`
            }
          >
            Task 1
          </NavLink>

          <NavLink
            to="/task2"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-gray-700"
              }`
            }
          >
            Task 2 
          </NavLink>

          <NavLink
            to="/task3"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-gray-700"
              }`
            }
          >
            Task 3
          </NavLink>

          <NavLink
            to="/task4"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-gray-700"
              }`
            }
          >
            Task 4
          </NavLink>

          <NavLink
            to="/task5"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-gray-700"
              }`
            }
          >
            Task 5
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
