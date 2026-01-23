import withThemeToggle from "../hocs/withThemeToggle";

function LightMode({ isDark, toggleTheme }) {
  return (
    <div>
      <h3>{isDark ? "Dark Mode" : "Light Mode"}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default withThemeToggle(LightMode);
