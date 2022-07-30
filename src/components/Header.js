import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row header">
        <div className="logo col-12 col-md-3" title="Cuisine Dishes">
          🍔 Cuisine Dishes
        </div>
        <div className="midTitle col-12 col-md-7">Meal Cuisine Restaurant</div>
        <div className="contactBtn col-12 col-md-2">
          <Link className="contact_btn_link" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
