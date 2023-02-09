import React from "react";
import "./index.css";
import alriadhLogo from "../assets/alriadh-logo.png";
const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <img src={alriadhLogo} alt="" />
        <div className="links">
          <a href="#">عن مدينتي </a>
          <a href="#">خدمات مدينتي </a>
          <a href="#">دليل استخدام مدينتي </a>
          <a href="#">الشركاء </a>
          <a href="#">التواصل </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
