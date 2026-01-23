import { useState } from "react";

function Task2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("Email must contain @");
    } else if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
    } else {
      setMessage("Form submitted successfully ✅");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Submit</button>

      <p>{message}</p>
    </form>
  );
}

export default Task2;
