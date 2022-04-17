import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <div>
        <h5>Created By</h5>
        <h3>AL-Amin Hussain</h3>
        <p>Copyright ©{year} alamin</p>
      </div>
    </div>
  );
};

export default Footer;
