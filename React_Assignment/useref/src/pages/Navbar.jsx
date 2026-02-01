import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 rounded-md text-sm font-medium transition";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">
        useRef Process 
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
      </div>
    </nav>
  );
};

export default Navbar;
