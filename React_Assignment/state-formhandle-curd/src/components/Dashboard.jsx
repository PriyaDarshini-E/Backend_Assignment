import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg mt-10">
        <h1 className="text-3xl font-bold mb-3">
          Welcome, {user?.name ?? "User"} 👋
        </h1>

        <p className="text-gray-700 mb-4">Email: {user?.email}</p>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
