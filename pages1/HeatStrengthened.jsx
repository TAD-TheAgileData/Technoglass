import React from "react";
import { motion } from "framer-motion";
import headerImg from "../assets/Images/Heat-Strengthened-Glass.jpg"; // ⭐ ADD YOUR IMAGE HERE

export default function HeatStrengthened() {
  const pageStyle = {
    background: "#e5e7eb",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  };

  const headerStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 0 20px 20px",
    position: "relative",
    overflow: "hidden",
    marginBottom: "40px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
  };

  const headerOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(3px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const headerTitle = {
    color: "white",
    fontSize: "40px",
    fontWeight: "bold",
    textShadow: "0px 4px 10px rgba(0,0,0,0.6)",
  };

  const textContainer = {
    maxWidth: "850px",
    margin: "0 auto",
    background: "white",
    padding: "35px",
    borderRadius: "14px",
    boxShadow: "0px 6px 18px rgba(0,0,0,0.15)",
    transition: "0.3s ease",
  };

  const listStyle = {
    marginTop: "15px",
    paddingLeft: "25px",
    lineHeight: "1.8",
    fontSize: "17px",
  };

  return (
    <div style={pageStyle}>
      
      {/* ⭐ HEADER WITH BACKGROUND IMAGE + FADE-IN */}
      <motion.div
        style={headerStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={headerOverlay}>
          <motion.h1
            style={headerTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Heat-Strengthened Glass
          </motion.h1>
        </div>
      </motion.div>

      {/* ⭐ CONTENT BLOCK WITH FADE + HOVER EFFECT */}
      <motion.div
        style={textContainer}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 10px 24px rgba(0,0,0,0.25)",
        }}
      >
        <p>
          Heat-strengthened glass is engineered for applications requiring enhanced
          strength and superior resistance to thermal stress. It offers increased 
          durability while maintaining a safer break pattern.
        </p>

        <ul style={listStyle}>
          <li>Nearly <strong>2× stronger</strong> than regular annealed glass</li>
          <li>High thermal shock resistance</li>
          <li>Breaks into large fragments – <strong>non-explosive</strong></li>
          <li>Suitable for façades, curtain walls & high-temperature zones</li>
        </ul>
      </motion.div>
    </div>
  );
}
