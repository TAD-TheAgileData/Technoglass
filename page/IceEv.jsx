import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletGlass.jpeg";

export default function IceEv() {
  const automotiveProducts = [
    {
      name: "Windshields",
      description:
        "High-strength laminated glass providing clear visibility and passenger protection.",
      features: [
        "Shatter-resistant for safety",
        "UV protection",
        "Acoustic insulation",
      ],
    },
    {
      name: "Side & Rear Windows",
      description:
        "Tempered or laminated glass designed for durability and safety.",
      features: [
        "Impact-resistant",
        "Tinted options for privacy",
        "Optional soundproofing layers",
      ],
    },
    {
      name: "Sunroofs & Panoramic Roofs",
      description:
        "Advanced laminated or tempered glass for aesthetic appeal and safety.",
      features: [
        "Solar control coatings",
        "Lightweight yet strong",
        "Scratch-resistant surface",
      ],
    },
    {
      name: "EV Battery Protection Glass",
      description:
        "Specialized glass for electric vehicle battery compartments.",
      features: [
        "Thermal resistance",
        "High impact durability",
        "Corrosion-proof",
      ],
    },
    {
      name: "Advanced Driver Assistance Systems (ADAS) Glass",
      description:
        "Glass engineered for sensors, cameras, and radar transparency.",
      features: [
        "Optically precise",
        "Anti-reflective coatings",
        "Durable in all weather conditions",
      ],
    },
  ];

  const whyChoose = [
    "Automotive-grade quality and durability",
    "Safety and passenger protection",
    "Energy-efficient solutions for EVs",
    "Custom glass solutions for OEM requirements",
  ];

  return (
    <div style={{ background: "#1C2833", color: "#FFFFFF", minHeight: "100vh" }}>
      {/* HERO */}
      <section
        style={{
          height: "70vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(28,40,51,0.9), rgba(0,0,0,0.7))",
            backdropFilter: "blur(8px)",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            fontSize: 48,
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          Glazing Products – Automotive (ICE & EV)
        </motion.h1>
      </section>

      {/* INTRO */}
      <section style={{ padding: "60px 10%", maxWidth: 1000, margin: "auto" }}>
        <p style={{ fontSize: 18, color: "#D9D9D9", lineHeight: 1.8 }}>
          We provide specialized glazing solutions for OEMs in the automotive
          industry, including internal combustion engines (ICE) and electric
          vehicles (EVs). Our glass products are engineered for safety, durability,
          and optimal performance under all conditions.
        </p>
      </section>

      {/* AUTOMOTIVE PRODUCTS - CARD STYLE */}
      <section
        style={{
          padding: "60px 10%",
          maxWidth: 1200,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 30,
        }}
      >
        {automotiveProducts.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              backgroundColor: "#A7D8F0", // Ice Blue
              borderRadius: 12,
              padding: 25,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF", // Crystal White
                marginBottom: 10,
              }}
            >
              {product.name}
            </h2>
            <p style={{ fontSize: 16, color: "#D9D9D9", marginBottom: 10 }}>
              {product.description}
            </p>
            <ul style={{ color: "#D9D9D9", paddingLeft: 20 }}>
              {product.features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: 6 }}>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              style={{
                marginTop: 15,
                backgroundColor: "#00BFFF", // Cyan Glow
                color: "#FFFFFF",
                border: "none",
                padding: "10px 20px",
                borderRadius: 6,
                cursor: "pointer",
                fontWeight: 600,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#4682B4")} // Steel Blue hover
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#00BFFF")}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </section>

      {/* WHY CHOOSE */}
      <section
        style={{
          padding: "60px 10%",
          maxWidth: 1000,
          margin: "auto",
          borderTop: "2px solid #4682B4", // Steel Blue
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: 20,
          }}
        >
          Why Choose Our Automotive Glass
        </h2>
        <ul style={{ color: "#D9D9D9", paddingLeft: 20 }}>
          {whyChoose.map((point, idx) => (
            <li key={idx} style={{ marginBottom: 10 }}>
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
