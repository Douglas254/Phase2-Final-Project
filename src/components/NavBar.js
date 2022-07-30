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
          exact
          to="/"
          style={linkStyles}
          className="navLink"
          activeClassName="active"
        >
          Home
        </NavLink>

        <NavLink
          exact
          to="/categories"
          style={linkStyles}
          className="navLink"
          activeClassName="active"
        >
          Categories
        </NavLink>
        <NavLink
          exact
          to="/contact"
          style={linkStyles}
          className="navLink"
          activeClassName="active"
        >
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
