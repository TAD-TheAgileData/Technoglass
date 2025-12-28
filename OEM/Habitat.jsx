import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletglass.jpg";
import floatImg from "../assets/Images/bulletglass.jpg";
import temperedImg from "../assets/Images/bulletglass.jpg";
import laminatedImg from "../assets/Images/bulletglass.jpg";
import loweImg from "../assets/Images/bulletglass.jpg";
import tintedImg from "../assets/Images/bulletglass.jpg";

/* FONT STACK */
const FONT_STACK =
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",system-ui,sans-serif';

export default function Habitat() {
const glassProducts = [
  {
    name: "Float Glass",
    image: floatImg,
    description: "Clear, high-quality basic glass for windows and doors.",
    features: ["Uniform thickness", "Excellent clarity", "Cost-effective"],
  },
  {
    name: "Tempered / Toughened Glass",
    image: temperedImg,
    description: "Heat-treated safety glass for enhanced strength.",
    features: [
      "4–5 times stronger than ordinary glass",
      "Shatters into small harmless pieces",
      "Ideal for doors, partitions, and balustrades",
    ],
  },
  {
    name: "Laminated Glass",
    image: laminatedImg,
    description:
      "Multi-layer glass with interlayer for safety and sound insulation.",
    features: ["High impact resistance", "Noise reduction", "UV protection"],
  },
  {
    name: "Low-E Glass (Energy Efficient)",
    image: loweImg,
    description: "Glass with low-emissivity coating to reduce heat loss.",
    features: [
      "Maintains indoor temperature",
      "Reduces energy consumption",
      "Protects interiors from UV damage",
    ],
  },
  {
    name: "Tinted / Reflective Glass",
    image: tintedImg,
    description:
      "Colored or reflective surface for privacy and solar control.",
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
    <div
      style={{
        background: "#1C2833",
        color: "#FFFFFF",
        minHeight: "100vh",
        fontFamily: FONT_STACK,
        fontWeight: 300,
        letterSpacing: "0.02em",
      }}
    >
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
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FFFFFF",
          }}
        >
          Glazing Products – Habitat
        </motion.h1>
      </section>

      {/* INTRO */}
      <section style={{ padding: "60px 10%", maxWidth: 1000, margin: "auto" }}>
        <p
          style={{
            fontSize: 18,
            color: "#D9D9D9",
            lineHeight: 1.8,
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          We specialize in providing high-quality glazing solutions for
          residential, commercial, and industrial spaces. Our Habitat range
          combines cutting-edge technology with elegant design, ensuring optimal
          light transmission, energy efficiency, and safety.
        </p>
      </section>

    <section
  style={{
    padding: "60px 10%",
    maxWidth: 1200,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 40,
  }}
>
  {glassProducts.map((glass, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      whileHover={{
        scale: 1.04,
        rotateX: 4,
        rotateY: -4,
        boxShadow: "0 0 35px rgba(0,191,255,0.45)",
      }}
      style={{
        background: "rgba(15,30,43,0.88)",
        borderRadius: 18,
        overflow: "hidden",
        backdropFilter: "blur(14px)",
        transformStyle: "preserve-3d",
        perspective: 1200,
        cursor: "pointer",
      }}
    >
      {/* ================= IMAGE ================= */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          height: 210,
          backgroundImage: `url(${glass.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Glass shine overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0))",
          }}
        />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div style={{ padding: 26 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {glass.name}
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "#D9D9D9",
            lineHeight: 1.7,
            marginBottom: 14,
          }}
        >
          {glass.description}
        </p>

        <ul
          style={{
            color: "#D9D9D9",
            paddingLeft: 18,
            lineHeight: 1.6,
            fontSize: 14,
          }}
        >
          {glass.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</section>

      {/* WHY CHOOSE */}
      <section
        style={{
          padding: "60px 10%",
          maxWidth: 1000,
          margin: "auto",
          borderTop: "2px solid #4682B4",
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            marginBottom: 20,
          }}
        >
          Why Choose Habitat Glass Products
        </h2>

        <ul
          style={{
            color: "#D9D9D9",
            paddingLeft: 20,
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
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