import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="name">
        <h4>Priya Darshini Assignment</h4>
      </div>

      <nav className="nav-links">
        <Link className="linklist" to="/">Home</Link>
        <Link className="linklist" to="/String_render">String_render</Link>
        <Link className="linklist" to="/Number_render">Number_render</Link>
        <Link className="linklist" to="/Ternary_render">Ternary_render</Link>
        <Link className="linklist" to="/Optional_render">Optional_render</Link>
        <Link className="linklist" to="/Template_literals">Template_literals</Link>
        <Link className="linklist" to="/Nullish_render">Nullish_render</Link>
        <Link className="linklist" to="/Object_render">Object_render</Link>
        <Link className="linklist" to="/Array_of_object_render">Array_of_object_render</Link>
      </nav>
    </header>
  );
};

export default Navbar;
