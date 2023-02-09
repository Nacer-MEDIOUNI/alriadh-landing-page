import React from "react";
import "./index.css";
import alriadhLogo from "../assets/alriadh-logo.png";
const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <img src={alriadhLogo} alt="" />
        <div className="links">
          <a href="#section1">عن مدينتي </a>
          <a href="#section2">خدمات مدينتي </a>
          <a href="#section3">دليل استخدام مدينتي </a>
          <a href="#section4">الشركاء </a>
          <a href="#section5">التواصل </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
