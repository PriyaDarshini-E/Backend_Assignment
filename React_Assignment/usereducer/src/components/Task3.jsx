import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.value] };
    case "DELETE":
      return { todos: state.todos.filter((_, i) => i !== action.index) };
    case "CLEAR":
      return { todos: [] };
    default:
      return state;
  }
};

const Task3 = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <div className="flex gap-2">
        <input
          className="border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD", value: text });
            setText("");
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {state.todos.map((todo, i) => (
          <li
            key={i}
            className="flex justify-between bg-white px-4 py-2 rounded shadow w-64"
          >
            {todo}
            <button
              onClick={() => dispatch({ type: "DELETE", index: i })}
              className="text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => dispatch({ type: "CLEAR" })}
        className="px-4 py-2 bg-gray-800 text-white rounded"
      >
        Clear All
      </button>
    </div>
  );
};

export default Task3;
