import { useState } from "react";

function Task3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} />
      <button>Submit</button>

      {submitted && (
        <div>
          <p>{submitted.name}</p>
          <p>{submitted.email}</p>
          <p>{submitted.mobile}</p>
        </div>
      )}
    </form>
  );
}

export default Task3;
