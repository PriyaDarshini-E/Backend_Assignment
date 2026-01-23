import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : ""
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : ""
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
