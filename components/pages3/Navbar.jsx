import React, { useState } from "react";
import { Link } from "react-router-dom";
import { solutionsData } from "./SolutionsData";

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  const navStyle = {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginRight: "20px",
    transition: "color 0.3s",
  };

  const hoverLink = (e) => (e.target.style.color = "#00aaff");
  const leaveLink = (e) => (e.target.style.color = "#fff");

  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
  };

  const menuStyle = (isOpen) => ({
    position: "absolute",
    top: "25px",
    left: "0",
    background: "#fff",
    color: "#000",
    padding: "10px",
    minWidth: "220px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-10px)",
    transition: "all 0.3s ease",
    pointerEvents: isOpen ? "auto" : "none",
    zIndex: 10,
  });

  const subMenuStyle = (isOpen) => ({
    paddingLeft: "15px",
    maxHeight: isOpen ? "500px" : "0px",
    overflow: "hidden",
    transition: "max-height 0.4s ease",
  });

  const menuLinkStyle = {
    margin: "5px 0",
    color: "#000",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
        Home
      </Link>

      <div style={dropdownStyle}>
        <span style={{ cursor: "pointer" }}>Solutions ▾</span>

        <div style={{ position: "relative" }}>
          {solutionsData.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                to={category.path}
                style={menuLinkStyle}
                onMouseEnter={hoverLink}
                onMouseLeave={leaveLink}
              >
                {category.title} {category.subItems && "▸"}
              </Link>

              {category.subItems && (
                <div style={subMenuStyle(openIndex === idx)}>
                  {category.subItems.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      to={sub.path}
                      style={menuLinkStyle}
                      onMouseEnter={hoverLink}
                      onMouseLeave={leaveLink}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
