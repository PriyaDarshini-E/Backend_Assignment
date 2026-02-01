import { useEffect, useRef, useState } from "react";

const Task1 = () => {
  /* ---------- Task 1 ---------- */
  const headingRef = useRef(null);

  /* ---------- Task 2 ---------- */
  const boxRef = useRef(null);

  /* ---------- Task 3 ---------- */
  const inputFocusRef = useRef(null);

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);

  /* ---------- Task 4 ---------- */
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const resultRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    resultRef.current.innerText = `
Name: ${nameRef.current.value}
Email: ${emailRef.current.value}`;
  };

  /* ---------- Task 5 ---------- */
  const countRef = useRef(0);
  const displayCountRef = useRef(null);

  const increaseCount = () => {
    countRef.current += 1;
    displayCountRef.current.innerText = countRef.current;
  };

  /* ---------- Task 6 ---------- */
  const paraRef = useRef(null);

  /* ---------- Task 7 ---------- */
  const sectionRef = useRef(null);

  /* ---------- Task 8 ---------- */
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  /* ---------- Task 9 ---------- */
  const inputValueRef = useRef(null);

  /* ---------- Task 10 ---------- */
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

    {/* Page Title */}
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
      Day 22 – useRef Practice Tasks
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Task 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 ref={headingRef} className="text-xl font-semibold text-blue-600">
          Task 1 – Change Text
        </h2>
        <button
          onClick={() => (headingRef.current.innerText = "Text Changed!")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Change Text
        </button>
      </div>

      {/* Task 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 2 – Change Background
        </h2>
        <div
          ref={boxRef}
          className="w-full h-24 bg-blue-300 rounded-md"
        ></div>
        <button
          onClick={() => (boxRef.current.style.backgroundColor = "tomato")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Change Color
        </button>
      </div>

      {/* Task 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 3 – Auto Focus Input
        </h2>
        <input
          ref={inputFocusRef}
          placeholder="Focused on load"
          className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Task 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 4 – Uncontrolled Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            ref={nameRef}
            placeholder="Name"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            ref={emailRef}
            placeholder="Email"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
        <pre
          ref={resultRef}
          className="bg-gray-100 p-3 rounded-md text-sm text-gray-700"
        ></pre>
      </div>

      {/* Task 5 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4 text-center">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 5 – Counter (useRef)
        </h2>
        <p ref={displayCountRef} className="text-3xl font-bold text-gray-800">
          0
        </p>
        <button
          onClick={increaseCount}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Increase
        </button>
      </div>

      {/* Task 6 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 6 – Get Text
        </h2>
        <p ref={paraRef} className="text-gray-700">
          Hello from paragraph
        </p>
        <button
          onClick={() => alert(paraRef.current.innerText)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Show Alert
        </button>
      </div>

      {/* Task 7 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 7 – Scroll Into View
        </h2>
        <button
          onClick={() =>
            sectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Scroll Down
        </button>
      </div>

      {/* Target Section */}
      <div
        ref={sectionRef}
        className="col-span-1 md:col-span-2 h-40 bg-green-300 rounded-xl flex items-center justify-center text-lg font-semibold"
      >
        Target Section
      </div>

      {/* Task 8 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4 md:col-span-2">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 8 – Multiple Sections
        </h2>
        <div className="flex gap-3">
          {[section1, section2, section3, section4].map((ref, i) => (
            <button
              key={i}
              onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
            >
              Section {i + 1}
            </button>
          ))}
        </div>
      </div>

      {[section1, section2, section3, section4].map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className="h-32 bg-purple-200 rounded-xl flex items-center justify-center font-semibold"
        >
          Section {i + 1}
        </div>
      ))}

      {/* Task 9 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 9 – Set Input Value
        </h2>
        <input
          ref={inputValueRef}
          className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={() => (inputValueRef.current.value = "Preset Value")}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Set Value
        </button>
      </div>

      {/* Task 10 */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
        <h2 className="text-xl font-semibold text-blue-600">
          Task 10 – Previous State
        </h2>
        <p className="text-gray-700">Current: {count}</p>
        <p className="text-gray-700">Previous: {prevCount.current}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Increase
        </button>
      </div>

    </div>
  </div>
);

};

export default Task1;
