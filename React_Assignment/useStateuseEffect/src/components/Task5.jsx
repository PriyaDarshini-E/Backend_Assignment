import { useState } from "react";

function Task5() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      {step === 1 && (
        <>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <button onClick={() => setStep(2)}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <input name="mobile" placeholder="Mobile" onChange={handleChange} />
          <input name="age" placeholder="Age" onChange={handleChange} />
          <button onClick={() => setStep(1)}>Previous</button>
          <button onClick={() => alert(JSON.stringify(data))}>Submit</button>
        </>
      )}
    </>
  );
}

export default Task5;
