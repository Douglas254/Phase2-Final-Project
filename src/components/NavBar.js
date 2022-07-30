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
        <NavLink to="/" style={linkStyles} exact activeClassName="active">
          Home
        </NavLink>

        <NavLink
          to="/categories"
          style={linkStyles}
          exact
          activeClassName="active"
        >
          Categories
        </NavLink>
        <NavLink
          to="/contact"
          style={linkStyles}
          exact
          activeClassName="active"
        >
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
