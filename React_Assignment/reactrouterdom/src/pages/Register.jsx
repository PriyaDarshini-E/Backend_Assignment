import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FaUserPlus /> Register
        </h2>

        <button
          onClick={() => navigate("/login")}
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Register;
