import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="row header">
        <div className="logo col-12 col-md-3" title="Cuisine Dishes">
          🍔 Cuisine Dishes
        </div>
        <div className="midTitle col-12 col-md-6">Meal Cuisine Restaurant</div>
        <div className="contactBtn col-12 col-md-3">
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </div>
      </div>
    </>
  );
};

export default Header;
