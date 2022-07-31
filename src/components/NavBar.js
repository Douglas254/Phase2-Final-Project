import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  textAlign: "center",
  display: "inline-block",
  width: "115px",
  padding: "12px",
  margin: "15px 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  borderRadius: "4px",
};

const NavBar = () => {
  return (
    <>
      <div className="text-center">
        <NavLink
          exact="true"
          to="/"
          style={linkStyles}
          className="navLink"
          activeclassname="active"
        >
          Home
        </NavLink>

        <NavLink
          exact="true"
          to="/category"
          style={linkStyles}
          className="navLink"
          activeclassname="active"
        >
          Categories
        </NavLink>
        <NavLink
          exact="true"
          to="/contact"
          style={linkStyles}
          className="navLink"
          activeclassname="active"
        >
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
