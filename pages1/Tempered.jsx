import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/Images/TemperedGlass.jpg"; // <-- Add background image here

export default function Tempered() {
  const pageStyle = {
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    minHeight: "100vh",
    background: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)),
      url(${bgImage}) center/cover no-repeat
    `,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadow: "0px 3px 10px rgba(0,0,0,0.6)",
    marginBottom: "35px",
  };

  const card = {
    maxWidth: "850px",
    width: "100%",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "18px",
    padding: "35px",
    color: "white",
    boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.25)",
  };

  const listStyle = {
    marginTop: "15px",
    paddingLeft: "22px",
    lineHeight: "1.9",
    fontSize: "18px",
  };

  return (
    <div style={pageStyle}>

      {/* Header – Fade In + Slide */}
      <motion.h1
        style={titleStyle}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tempered Glass
      </motion.h1>

      {/* Content Card – Fade + Zoom */}
      <motion.div
        style={card}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 35px rgba(0,0,0,0.45)" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Tempered glass is a high-strength safety glazing option that is
          approximately <strong>4–5 times stronger</strong> than standard annealed glass.
        </motion.p>

        <motion.ul
          style={listStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <li>Breaks into **small harmless beads** upon impact</li>
          <li>Compliant with <strong>ASTM C1048</strong> safety standards</li>
          <li>Used in doors, façades, partitions, railings, shower cubicles & more</li>
          <li>High thermal resistance prevents spontaneous breakage</li>
          <li>Ideal for modern structural glazing & architectural applications</li>
        </motion.ul>
      </motion.div>

    </div>
  );
}
