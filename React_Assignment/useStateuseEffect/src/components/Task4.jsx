import { useState } from "react";

function Task4() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button>Login</button>
          <p>{error}</p>
        </form>
      ) : (
        <h2>Welcome Admin 🎉</h2>
      )}
    </>
  );
}

export default Task4;
