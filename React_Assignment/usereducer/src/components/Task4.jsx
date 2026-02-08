import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, dark: !state.dark };
    case "INC":
      return { ...state, fontSize: state.fontSize + 2 };
    case "DEC":
      return { ...state, fontSize: state.fontSize - 2 };
    default:
      return state;
  }
};

const Task4 = () => {
  const [state, dispatch] = useReducer(reducer, {
    dark: false,
    fontSize: 16,
  });

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-4 ${
        state.dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
      style={{ fontSize: state.fontSize }}
    >
      <p>Theme & Font Size</p>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: "TOGGLE" })}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Toggle
        </button>
        <button
          onClick={() => dispatch({ type: "INC" })}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DEC" })}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Task4;
