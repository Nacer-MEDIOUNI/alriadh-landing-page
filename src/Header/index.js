import React, { useEffect, useState } from "react";
import "./index.css";
import alriadhLogo from "../assets/alriadh-logo.png";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState("section1");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = [
      "section1",
      "section2",
      "section4",
      "section3",
      "section5",
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    });

    sections.forEach((section) => {
      const sectionElement = document.querySelector(`#${section}`);
      observer.observe(sectionElement);
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.querySelector(`#${section}`);
        observer.unobserve(sectionElement);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50 && !scrolled) {
        setScrolled(true);
      } else if (window.pageYOffset <= 50 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
console.log(activeLink)
  return (
    <header className={`header fixed ${scrolled ? "header--scrolled" : ""}`}>
      <a href="#section1">
        <img className="header__logo" src={alriadhLogo} alt="alriadh-logo" />
      </a>
      <nav className={`header__nav ${showNav ? "header__nav--show" : ""}`}>
        <a
          className={`${activeLink === "section5" ? "active" : ""}`}
          href="#section5"
          onClick={() => setShowNav(!showNav)}
        >
          التواصل
        </a>

        <a
          className={`${activeLink === "section4" ? "active" : ""}`}
          href="#section4"
          onClick={() => setShowNav(!showNav)}
        >
          الشركاء
        </a>
        <a
          className={`${activeLink === "section3" ? "active" : ""}`}
          href="#section3"
          onClick={() => setShowNav(!showNav)}
        >
          دليل استخدام مدينتي
        </a>
        <a
          className={`${activeLink === "section2" ? "active" : ""}`}
          href="#section2"
          onClick={() => setShowNav(!showNav)}
        >
          خدمات مدينتي
        </a>
        <a
          className={`${activeLink === "section1" ? "active" : ""}`}
          href="#section1"
          onClick={() => setShowNav(!showNav)}
        >
          عن مدينتي
        </a>
      </nav>
      <div className="header__menu-icon" onClick={() => setShowNav(!showNav)}>
        <CgMenuRight />
      </div>
      {showNav && (
        <div
          className="header__nav__close-icon"
          onClick={() => setShowNav(false)}
        >
          <CgMenuRight />
        </div>
      )}
    </header>
  );
};

export default Header;
