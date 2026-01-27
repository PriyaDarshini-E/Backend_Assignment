import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!savedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("loggedIn", true);
      navigate("/dashboard");
    } else {
      alert("Wrong email or password!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
