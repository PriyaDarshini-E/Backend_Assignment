import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { CounterContext } from "./context/CounterContext";
import { FocusContext } from "./context/FocusContext";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { count, setCount } = useContext(CounterContext);
  const inputRef = useContext(FocusContext);
  const { user, setUser } = useContext(AuthContext);

  /* Render Counter */
  const renderRef = useRef(0);
  useEffect(() => {
    renderRef.current += 1;
  });

  /* Previous Value */
  const [text, setText] = useState("");
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = text;
  }, [text]);

  return (
    <div className="min-h-screen p-6 space-y-8 max-w-3xl mx-auto">
      {/* Theme */}
      <div className="card">
        <h1 className="title">Theme Switcher</h1>
        <button onClick={toggleTheme} className="btn">
          Toggle {theme}
        </button>
      </div>

      {/* Global Counter */}
      <div className="card">
        <h1 className="title">Global Counter</h1>
        <p className="text-lg font-semibold">Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)} className="btn">
          Increment
        </button>
      </div>

      {/* Focus from another component */}
      <div className="card">
        <h1 className="title">Focus Input</h1>
        <input
          ref={inputRef}
          className="input"
          placeholder="Click button to focus"
        />
        <button onClick={() => inputRef.current.focus()} className="btn mt-3">
          Focus Input
        </button>
      </div>

      {/* Login Persistence */}
      <div className="card">
        <h1 className="title">Login Persistence</h1>
        {user ? (
          <>
            <p>Welcome, {user}</p>
            <button onClick={() => setUser(null)} className="btn">
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => setUser("Priya")} className="btn">
            Login
          </button>
        )}
      </div>

      {/* Render Count */}
      <div className="card">
        <h1 className="title">Render Count</h1>
        <p>Renders: {renderRef.current}</p>
      </div>

      {/* Previous Value */}
      <div className="card">
        <h1 className="title">Previous Value Tracker</h1>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="input"
        />
        <p>Current: {text}</p>
        <p>Previous: {prevRef.current}</p>
      </div>
    </div>
  );
}
