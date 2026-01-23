import { useLocation } from "react-router-dom";

function Theme() {
  const { search } = useLocation();
  const theme = new URLSearchParams(search).get("theme");

  const style = {
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    height: "100vh",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h2>{theme} Theme</h2>
    </div>
  );
}

export default Theme;
