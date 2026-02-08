import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 5 };
    case "DEC":
      return { count: state.count - 5 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Task1 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Count: {state.count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "INC" })}
          className="px-5 py-2 bg-green-600 text-white rounded"
        >
          +5
        </button>

        <button
          onClick={() => dispatch({ type: "DEC" })}
          className="px-5 py-2 bg-red-600 text-white rounded"
        >
          -5
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="px-5 py-2 bg-gray-800 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Task1;
