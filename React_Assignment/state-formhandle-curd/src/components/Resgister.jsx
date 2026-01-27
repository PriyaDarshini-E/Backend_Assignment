import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg"
        onSubmit={handleRegister} >
            
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <input type="text" placeholder="Full Name"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input type="email" placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input type="password" placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required/>

        <button type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Register
        </button>

        <p className="text-center mt-3"> Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")} >
            Login
          </span>
        </p>

      </form>
    </div>
  );
};

export default Register;
