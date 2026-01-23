import { useState } from "react";

const Agecheck = () => {

  const [result, setResult] = useState("");
  const [showresult, setshowresult] = useState("")


  const hanglechange = (e) =>{
    // console.log("this is event object",e);
      const inputdata = e.target.value
      setResult(inputdata)
  }

  const check = () =>{
    if (result <= 0) {
      setshowresult(`Please enter a valid age, ${result}`);
    } else if (result >= 18 && result <= 150) {
      setshowresult("You are eligible to vote");
    } else {
      setshowresult("You are not eligible to vote");
    }

  }
    

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Age Check</h3>

      <div className="flex gap-4 mb-4 items-center">
        <input type="number"
          placeholder="Enter your age"
          onChange={hanglechange}
          className="border px-3 py-2 rounded"
        />

        <button
          onClick={check}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Check Eligibility
        </button>
      </div>

      <p className="text-lg font-medium">{showresult}</p>
    </div>
  )

  };
export default Agecheck;
