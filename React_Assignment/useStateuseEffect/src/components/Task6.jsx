import { useState, useEffect } from "react";

function Task6() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user"));
    if (saved) setForm(saved);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button>Signup</button>
    </form>
  );
}

export default Task6;
