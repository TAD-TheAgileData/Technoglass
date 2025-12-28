import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletglass.jpg";
import windshieldImg from "../assets/Images/bulletglass.jpg";
import sideRearImg from "../assets/Images/bulletglass.jpg";
import sunroofImg from "../assets/Images/bulletglass.jpg";
import evBatteryImg from "../assets/Images/bulletglass.jpg";
import adasImg from "../assets/Images/bulletglass.jpg";

/* FONT STACK */
const FONT_STACK =
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",system-ui,sans-serif';

export default function IceEv() {
  const automotiveProducts = [
  {
    name: "Windshields",
    image: windshieldImg,
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
    image: sideRearImg,
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
    image: sunroofImg,
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
    image: evBatteryImg,
    description:
      "Specialized glass for electric vehicle battery compartments.",
    features: [
      "Thermal resistance",
      "High impact durability",
      "Corrosion-proof",
    ],
  },
  {
    name: "ADAS Glass",
    image: adasImg,
    description:
      "Glass engineered for sensors, cameras, and radar transparency.",
    features: [
      "Optically precise",
      "Anti-reflective coatings",
      "All-weather durability",
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
          Glazing Products – Automotive (ICE & EV)
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
          We provide specialized glazing solutions for OEMs in the automotive
          industry, including internal combustion engines (ICE) and electric
          vehicles (EVs). Our glass products are engineered for safety, durability,
          and optimal performance under all conditions.
        </p>
      </section>

      {/* AUTOMOTIVE PRODUCTS */}
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
  {automotiveProducts.map((product, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 0 40px rgba(0,191,255,0.45)",
      }}
      style={{
        background: "rgba(15,30,43,0.9)",
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
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          height: 210,
          backgroundImage: `url(${product.image})`,
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
          {product.name}
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "#D9D9D9",
            lineHeight: 1.7,
            marginBottom: 14,
          }}
        >
          {product.description}
        </p>

        <ul
          style={{
            color: "#D9D9D9",
            paddingLeft: 18,
            lineHeight: 1.6,
            fontSize: 14,
          }}
        >
          {product.features.map((feature, idx) => (
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
          Why Choose Our Automotive Glass
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