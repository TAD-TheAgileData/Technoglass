import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletglass.jpeg";

export default function Habitat() {
  const glassProducts = [
    {
      name: "Float Glass",
      description: "Clear, high-quality basic glass for windows and doors.",
      features: ["Uniform thickness", "Excellent clarity", "Cost-effective"],
    },
    {
      name: "Tempered / Toughened Glass",
      description: "Heat-treated safety glass for enhanced strength.",
      features: [
        "4–5 times stronger than ordinary glass",
        "Shatters into small harmless pieces",
        "Ideal for doors, partitions, and balustrades",
      ],
    },
    {
      name: "Laminated Glass",
      description: "Multi-layer glass with interlayer for safety and sound insulation.",
      features: ["High impact resistance", "Noise reduction", "UV protection"],
    },
    {
      name: "Low-E Glass (Energy Efficient)",
      description: "Glass with low-emissivity coating to reduce heat loss.",
      features: [
        "Maintains indoor temperature",
        "Reduces energy consumption",
        "Protects interiors from UV damage",
      ],
    },
    {
      name: "Tinted / Reflective Glass",
      description: "Colored or reflective surface for privacy and solar control.",
      features: [
        "Enhances building aesthetics",
        "Reduces glare and heat",
        "Customizable colors",
      ],
    },
  ];

  const whyChoose = [
    "Superior quality and durability",
    "Energy-efficient solutions",
    "Advanced safety standards",
    "Wide variety of glass types for all habitats",
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
          style={{ position: "relative", fontSize: 48, fontWeight: 800, color: "#FFFFFF" }}
        >
          Glazing Products – Habitat
        </motion.h1>
      </section>

      {/* INTRO */}
      <section style={{ padding: "60px 10%", maxWidth: 1000, margin: "auto" }}>
        <p style={{ fontSize: 18, color: "#D9D9D9", lineHeight: 1.8 }}>
          At [Your Company Name], we specialize in providing high-quality glazing
          solutions for residential, commercial, and industrial spaces. Our Habitat
          range combines cutting-edge technology with elegant design, ensuring
          optimal light transmission, energy efficiency, and safety.
        </p>
      </section>

      {/* GLASS PRODUCTS - CARD STYLE */}
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
        {glassProducts.map((glass, index) => (
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
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>
              {glass.name}
            </h2>
            <p style={{ fontSize: 16, color: "#D9D9D9", marginBottom: 10 }}>
              {glass.description}
            </p>
            <ul style={{ color: "#D9D9D9", paddingLeft: 20 }}>
              {glass.features.map((feature, idx) => (
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
              onMouseEnter={e => (e.target.style.backgroundColor = "#4682B4")} // Steel Blue on hover
              onMouseLeave={e => (e.target.style.backgroundColor = "#00BFFF")}
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
          borderTop: "2px solid #4682B4", // Steel Blue divider
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", marginBottom: 20 }}>
          Why Choose Habitat Glass Products
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
