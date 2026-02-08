import { useReducer } from "react";

const initialState = { name: "", email: "", password: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Task2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80 space-y-4">
        <input
          placeholder="Name"
          className="border p-2 w-full rounded"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "name",
              value: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="border p-2 w-full rounded"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "email",
              value: e.target.value,
            })
          }
        />

        <input
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "password",
              value: e.target.value,
            })
          }
        />

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="w-full py-2 bg-red-600 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Task2;
