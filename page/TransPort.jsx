import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletGlass.jpeg";

export default function Transport() {
  return (
    <div style={{ background: "#1C2833", color: "#FFFFFF" }}>
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
          style={{ position: "relative", fontSize: 48, fontWeight: 800 }}
        >
          Transport Sector Glazing
        </motion.h1>
      </section>

      <section style={{ padding: "100px 10%", maxWidth: 1000, margin: "auto" }}>
        <p style={{ fontSize: 18, color: "#D9D9D9", lineHeight: 1.8 }}>
          Glass solutions for buses, railways, metros, and mass transport
          vehicles. Engineered for high impact resistance, passenger safety,
          and long service life.
        </p>
      </section>
    </div>
  );
}
