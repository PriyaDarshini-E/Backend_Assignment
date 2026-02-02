import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { CounterProvider } from "./context/CounterContext";
import { FocusProvider } from "./context/FocusContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CounterProvider>
        <FocusProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </FocusProvider>
      </CounterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
