import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "teal" : "aqua",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "teal" : "aqua",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/signin"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "teal" : "aqua",
        })}
      >
        Sign In
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "teal" : "aqua",
        })}
      >
        Login
      </NavLink>
      
    </div>
  );
};

export default Navbar;
