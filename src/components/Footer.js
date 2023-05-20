import React from "react";
import Logo from "../img/cat.avif";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>INI FOOTER </span>
      <div>
        <span className="bx bxl-instagram" style={{ fontSize: 45 }}></span>
        <span className="bx bxl-instagram" style={{ fontSize: 45 }}></span>
        <span className="bx bxl-instagram" style={{ fontSize: 45 }}></span>
      </div>
    </footer>
  );
};

export default Footer;
