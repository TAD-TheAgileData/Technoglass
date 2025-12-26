import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletglass.jpg";

/* ================= DESIGN SYSTEM ================= */
const COLORS = {
  crystalWhite: "#FFFFFF",
  frostGray: "#D9D9D9",
  iceBlue: "#A7D8F0",
  cyanGlow: "#00BFFF",
  steelBlue: "#4682B4",
  deepNavy: "#1C2833",
};

const FONT =
  '"Helvetica Neue","Montserrat","Futura","Roboto","Avenir",sans-serif';

export default function MirrorGlass() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.deepNavy,
        fontFamily: FONT,
        color: COLORS.frostGray,
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          height: "65vh",
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
              "linear-gradient(135deg, rgba(28,40,51,0.92), rgba(0,0,0,0.7))",
            backdropFilter: "blur(6px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", textAlign: "center" }}
        >
          <h1
            style={{
              color: COLORS.crystalWhite,
              fontSize: "clamp(34px,5vw,52px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Mirror Glass
          </h1>

          <div
            style={{
              width: 90,
              height: 3,
              background: COLORS.cyanGlow,
              margin: "24px auto",
              boxShadow: `0 0 18px ${COLORS.cyanGlow}`,
            }}
          />

          <p
            style={{
              maxWidth: 720,
              margin: "auto",
              color: COLORS.iceBlue,
              fontWeight: 300,
              lineHeight: 1.9,
              textTransform: "lowercase",
            }}
          >
            high-clarity mirror glass engineered for architectural,
            commercial and interior manufacturing applications
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCT OVERVIEW ================= */}
      <section style={{ padding: "90px 8%", maxWidth: 1100, margin: "auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: COLORS.iceBlue,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: 26,
          }}
        >
          Product Overview
        </motion.h2>

        <p style={{ lineHeight: 1.9, fontWeight: 300 }}>
          Our mirror glass is manufactured using advanced coating and
          polishing processes to deliver exceptional reflectivity,
          durability and optical clarity. Designed for precision-driven
          architectural and interior projects.
        </p>
      </section>

      {/* ================= MANUFACTURING PROCESS ================= */}
      <section
        style={{
          padding: "90px 8%",
          background: "rgba(255,255,255,0.03)",
          borderTop: `1px solid ${COLORS.steelBlue}`,
          borderBottom: `1px solid ${COLORS.steelBlue}`,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: COLORS.crystalWhite,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Manufacturing Process
        </motion.h2>

        <ul
          style={{
            maxWidth: 900,
            margin: "auto",
            lineHeight: 2,
            fontWeight: 300,
            paddingLeft: 22,
            textTransform: "lowercase",
          }}
        >
          <li>high-quality float glass selection</li>
          <li>precision surface polishing</li>
          <li>silver / aluminum reflective coating</li>
          <li>protective paint backing</li>
          <li>quality inspection & edge finishing</li>
        </ul>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section style={{ padding: "90px 8%", maxWidth: 1100, margin: "auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: COLORS.iceBlue,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: 30,
          }}
        >
          Technical Specifications
        </motion.h2>

        <ul
          style={{
            lineHeight: 2,
            fontWeight: 300,
            paddingLeft: 22,
            textTransform: "lowercase",
          }}
        >
          <li>thickness range: 4mm – 12mm</li>
          <li>available in clear, bronze & grey</li>
          <li>high corrosion resistance</li>
          <li>custom cutting & edge polishing</li>
        </ul>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section
        style={{
          padding: "90px 8%",
          background: "rgba(255,255,255,0.04)",
          borderTop: `1px solid ${COLORS.steelBlue}`,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: COLORS.cyanGlow,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Applications
        </motion.h2>

        <ul
          style={{
            maxWidth: 900,
            margin: "auto",
            lineHeight: 2,
            fontWeight: 300,
            paddingLeft: 22,
            textTransform: "lowercase",
          }}
        >
          <li>architectural facades</li>
          <li>interior wall cladding</li>
          <li>bathroom & wardrobe mirrors</li>
          <li>commercial interiors</li>
          <li>decorative glass installations</li>
        </ul>
      </section>
    </div>
  );
}
