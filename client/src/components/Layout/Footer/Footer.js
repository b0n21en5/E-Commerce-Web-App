import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Rights Reserved &copy; b0n21en5</h4>
      <p className="text-center m-3">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
        <Link to="/policy">Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
