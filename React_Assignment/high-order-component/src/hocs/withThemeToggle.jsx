import React, { useState } from "react";

const withThemeToggle = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    return (
      <WrappedComponent
        isDark={isDark}
        toggleTheme={toggleTheme}
        {...props}
      />
    );
  };
};

export default withThemeToggle;
