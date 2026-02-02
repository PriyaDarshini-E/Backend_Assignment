import { createContext, useRef } from "react";

export const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const inputRef = useRef(null);

  return (
    <FocusContext.Provider value={inputRef}>
      {children}
    </FocusContext.Provider>
  );
};
