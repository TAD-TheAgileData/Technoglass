import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import img1 from "../assets/Images/bulletglass.jpg";

export default function AutomotiveWindscreens() {
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    minHeight: "100vh",
    background: "#eef0f3",
  };

  const heroStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    color: "white",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.45)",
    zIndex: 1,
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "0 6px 20px rgba(0,0,0,0.35)",
  };

  const textContainer = {
    maxWidth: "800px",
    margin: "40px auto",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "40px 30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const listItem = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "17px",
    cursor: "default",
  };

  // Staggered animation for bullets
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div style={pageStyle}>

      {/* Hero Section */}
      <div style={heroStyle}>
        <div style={overlayStyle}></div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${10 + Math.random() * 25}px`,
              height: `${10 + Math.random() * 25}px`,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(4px)",
            }}
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <motion.div
          style={heroContentStyle}
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 style={titleStyle}>Automotive Windscreens</h1>
          <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}>
            OEM-grade safety windscreens built for durability, clarity, and protection.
          </p>
        </motion.div>
      </div>

      {/* Content Card with Glassmorphism + Hover */}
      <motion.div
        style={textContainer}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ fontSize: "18px", marginBottom: "25px" }}>
          Manufactured to meet global automotive standards with superior safety and optical clarity.
        </p>

        <motion.ul
          style={{ paddingLeft: 0, listStyle: "none" }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            "Laminated or tempered construction",
            "High optical clarity for premium visibility",
            "UV filtering & superior impact resistance",
            "Suitable for cars, buses, trucks & specialty vehicles",
          ].map((text, index) => (
            <motion.li
              key={index}
              style={listItem}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FiCheckCircle size={22} style={{ marginRight: "12px", color: "#2563eb" }} />
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
