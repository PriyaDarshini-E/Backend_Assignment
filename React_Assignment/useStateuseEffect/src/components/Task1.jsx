import { useState } from "react";

function Task1() {
  const [username, setUsername] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setSubmittedName(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>

      {submittedName && <p>Entered Username: {submittedName}</p>}
    </form>
  );
}

export default Task1;
