import React, { useState } from "react";
import { motion } from "framer-motion";

import img1 from "../assets/Images/VLTimage1.jpg";
import img2 from "../assets/Images/vlt2.jpg";
import img3 from "../assets/Images/vltimg3.jpg";
import heroImg from "../assets/Images/vltimg3.jpg";

export default function Insulated() {
  const [hoverCard, setHoverCard] = useState(null);

  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    background: "#eef2f7",
    minHeight: "100vh",
  };

  const heroStyle = {
    width: "100%",
    height: "75vh",
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.55)",
    zIndex: 1,
  };

  const heroText = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "white",
    maxWidth: "900px",
    padding: "20px",
  };

  const cardSection = {
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
    padding: "50px 20px",
  };

  const cardWrapper = {
    display: "inline-flex",
    gap: "25px",
  };

  const cardStyle = {
    minWidth: "330px",
    maxWidth: "330px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s ease",
  };

  const imagesData = [
    {
      img: img1,
      title: "Double or Triple Pane",
      points: [
        "High visible light transmission",
        "Low U-Values for insulation",
        "Solar heat gain reduction",
      ],
      description:
        "Double or triple pane glass offers superior insulation by creating multiple barriers against heat and noise. Ideal for modern residential and commercial buildings.",
    },
    {
      img: img2,
      title: "Argon-Filled Cavities",
      points: [
        "Maximizes natural daylight",
        "Reduces energy consumption",
        "Improves thermal comfort",
      ],
      description:
        "Argon gas between glass layers reduces heat transfer, improving thermal efficiency and reducing HVAC load.",
    },
    {
      img: img3,
      title: "Warm-Edge Spacers",
      points: ["Reduces glare", "Blocks UV radiation", "Maintains clear views"],
      description:
        "Specialized spacers reduce condensation, improve edge insulation, and extend the lifespan of insulated units.",
    },
  ];

  return (
    <div style={pageStyle}>
      {/* HERO SECTION */}
      <div style={heroStyle}>
        <div style={overlayStyle}></div>

        <motion.div
          style={heroText}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 style={{ fontSize: "52px", fontWeight: "800" }}>
            Insulated Glass (Double/Triple Glazing)
          </h1>
          <p style={{ fontSize: "22px", opacity: 0.9 }}>
            Engineered for superior thermal insulation and sound control.
          </p>
        </motion.div>
      </div>

      {/* SLIDING CARDS */}
      <div style={cardSection}>
        <div style={cardWrapper}>
          {imagesData.map((item, index) => (
            <motion.div
              key={index}
              style={{
                ...cardStyle,
                transform: hoverCard === index ? "scale(1.03)" : "scale(1)",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setHoverCard(index)}
              onMouseLeave={() => setHoverCard(null)}
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


              <h2 style={{ marginBottom: "10px", fontWeight: "600" }}>
                {item.title}
              </h2>

              <ul style={{ textAlign: "left", paddingLeft: "18px" }}>
                {item.points.map((p, i) => (
                  <li key={i} style={{ marginBottom: "7px" }}>
                    {p}
                  </li>
                ))}
              </ul>

              {/* AUTO EXPAND CONTENT (NO BUTTON) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  hoverCard === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                style={{
                  overflow: "hidden",
                  marginTop: "10px",
                  textAlign: "left",
                  fontSize: "15px",
                  lineHeight: "1.5",
                }}
              >
                <p>{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
