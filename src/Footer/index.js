import React from "react";
import "./index.css";
import alriadhLogo from "../assets/alriadh-logo.png";
const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <img src={alriadhLogo} alt="" />
        <div className="links">
          <a href="section1">عن مدينتي </a>
          <a href="section1">خدمات مدينتي </a>
          <a href="section1">دليل استخدام مدينتي </a>
          <a href="section1">الشركاء </a>
          <a href="section1">التواصل </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
