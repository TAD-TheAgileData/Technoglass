import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/Images/VLTimage1.jpg";
import img2 from "../assets/Images/vlt2.jpg";
import img3 from "../assets/Images/vltimg3.jpg";
import heroImg from "../assets/Images/vltimg3.jpg"; // Hero background

export default function LowE() {
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    minHeight: "100vh",
    background: "#eef2f7",
    position: "relative",
    overflow: "hidden",
    paddingBottom: "50px",
  };

  const heroStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    textAlign: "center",
    position: "relative",
    color: "#fff",
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
    marginBottom: "15px",
    textShadow: "0 6px 20px rgba(0,0,0,0.35)",
  };

  const subtitleStyle = {
    fontSize: "20px",
    opacity: 0.9,
    maxWidth: "700px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginTop: "50px",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.85)", // glassmorphism
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };


  const imagesData = [
    
    {
      img: img1,
      title: "High VLT Low-E Glass",
      points: [
        "High visible light transmission",
        "Low U-Values for insulation",
        "Solar heat gain reduction",
      ],
    },
    {
      img: img2,
      title: "Energy Efficient Low-E Glass",
      points: [
        "Maximizes natural daylight",
        "Reduces energy consumption",
        "Improves thermal comfort",
      ],
    },
    {
      img: img3,
      title: "Solar Control Low-E Glass",
      points: ["Reduces glare", "Blocks UV radiation", "Maintains clear views"],
    },
  ];

  // Animation variants for staggered cards
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // stagger each card by 0.3s
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <div style={overlayStyle}></div>
        <motion.div
          style={heroContentStyle}
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 style={titleStyle}>Low-E & Solar Control Glass</h1>
          <p style={subtitleStyle}>
            High-performance glass solutions for energy efficiency, thermal comfort, and daylight optimization.
          </p>
        </motion.div>
      </div>

      {/* Staggered Glassmorphism Cards */}
      <motion.div
        style={gridStyle}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {imagesData.map((item, index) => (
          <motion.div
            key={index}
            style={cardStyle}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
          >
            <img
  src={item.img}
  alt={item.title}
  style={{
    width: "100%",
    height: "240px",      // FIXED HEIGHT
    objectFit: "cover",   // CROPS to fit
    borderRadius: "15px",
    marginBottom: "20px",
  }}
/>

            <h2 style={{ marginBottom: "15px" }}>{item.title}</h2>
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
              {item.points.map((point, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
