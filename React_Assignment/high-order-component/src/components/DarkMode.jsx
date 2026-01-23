import withThemeToggle from "../hocs/withThemeToggle";

function DarkMode({ isDark, toggleTheme }) {
  return (
    <div style={{
      background: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
      padding: "20px"
    }}>
      <h3>{isDark ? "Dark Mode Active" : "Light Mode Active"}</h3>
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
}

export default withThemeToggle(DarkMode);
