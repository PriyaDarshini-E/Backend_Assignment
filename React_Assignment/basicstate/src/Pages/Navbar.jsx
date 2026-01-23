import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle =
    "px-4 py-2 rounded-md text-sm font-medium transition";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold">State process with all Datatypes</h1>

      {/* Links */}
      <div className="space-x-4">
        <NavLink to="/" className={({ isActive }) =>
            `${linkStyle} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }` }> Numberstate </NavLink>

        <NavLink to="/stringstate" className={({ isActive }) =>
            `${linkStyle} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }` }> Stringstate
        </NavLink>

        <NavLink to="/booleanstate" className={({ isActive }) =>
            `${linkStyle} ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }` }>  Booleanstate
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
