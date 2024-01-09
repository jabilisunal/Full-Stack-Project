import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              color: isActive ? "#3A4D39" : "#739072",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/add"}
          style={({ isActive }) => {
            return {
              color: isActive ? "#3A4D39" : "#739072",
            };
          }}
        >
          Add Page
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
