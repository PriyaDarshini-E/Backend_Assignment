import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <NavLink to="/task1" style={styles.link}>Task 1</NavLink>
      <NavLink to="/task2" style={styles.link}>Task 2</NavLink>
      <NavLink to="/task3" style={styles.link}>Task 3</NavLink>
      <NavLink to="/task4" style={styles.link}>Task 4</NavLink>
      <NavLink to="/task5" style={styles.link}>Task 5</NavLink>
      <NavLink to="/task6" style={styles.link}>Task 6</NavLink>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "15px",
    padding: "10px",
    background: "#222"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;
