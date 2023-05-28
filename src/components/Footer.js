import React from "react";
import Logo from "../img/cat.avif";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>You are receiving this email because you signup to our newsletter to receive inspirational stories and exclusive offers. </span>
      <span> Share in your IG stories or forward to a friend! </span>
      <span>Your support means the world to me </span>
      <span className="flex space-x-4 underline underline-offset-1">Follow Us On</span>
      <div>
        <span className="bx bxl-twitter" style={{ fontSize: 45 }}></span>
        <span className="bx bxl-instagram" style={{ fontSize: 45 }}></span>
        <span className="bx bxl-discord-alt" style={{ fontSize: 45 }}></span>
      </div>
    </footer>
  );
};

export default Footer;
