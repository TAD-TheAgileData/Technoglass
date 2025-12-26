import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/TemperedGlass.jpg";

const COLORS = {
  crystalWhite: "#FFFFFF",
  frostGray: "#D9D9D9",
  iceBlue: "#A7D8F0",
  cyanGlow: "#00BFFF",
  steelBlue: "#4682B4",
  deepNavy: "#1C2833",
  glassGreen: "#7FFFD4",
};

const FONT =
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",sans-serif';

export default function Tempered() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.deepNavy, // ✅ solid background
        fontFamily: FONT,
      }}
    >
      {/* ================= HERO HEADER ================= */}
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
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(28,40,51,0.92), rgba(0,0,0,0.75))",
            backdropFilter: "blur(6px)",
          }}
        />

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", textAlign: "center", padding: 20 }}
        >
          <h1
            style={{
              color: COLORS.crystalWhite,
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Tempered Glass
          </h1>

          <div
            style={{
              width: 90,
              height: 3,
              background: COLORS.cyanGlow,
              margin: "22px auto",
              boxShadow: `0 0 16px ${COLORS.cyanGlow}`,
            }}
          />

          <p
            style={{
              color: COLORS.iceBlue,
              fontSize: 18,
              fontWeight: 300,
              maxWidth: 720,
              margin: "auto",
              lineHeight: 1.8,
              textTransform: "lowercase",
            }}
          >
            high-strength safety glass engineered for durability, clarity, and
            architectural excellence.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section
        style={{
          padding: "90px 8%",
          display: "flex",
          flexDirection: "column",
          gap: 60,
        }}
      >
        {/* ===== MAIN INFO CARD ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            maxWidth: 1100,
            margin: "auto",
            padding: 40,
            borderRadius: 28,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <p
            style={{
              color: COLORS.frostGray,
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.9,
              textTransform: "lowercase",
              marginBottom: 25,
            }}
          >
            tempered glass is produced through controlled thermal processing,
            increasing its strength by{" "}
            <span style={{ color: COLORS.glassGreen }}>
              four to five times
            </span>{" "}
            compared to standard annealed glass.
          </p>

          <ul
            style={{
              color: COLORS.iceBlue,
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.9,
              paddingLeft: 22,
              textTransform: "lowercase",
            }}
          >
            <li>breaks into blunt, harmless fragments</li>
            <li>high resistance to thermal stress</li>
            <li>compliant with international safety standards</li>
            <li>ideal for modern architectural applications</li>
          </ul>
        </motion.div>

        {/* ===== KEY APPLICATIONS CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: 1100,
            margin: "auto",
            padding: 36,
            borderRadius: 28,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05))",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <h3
            style={{
              color: COLORS.crystalWhite,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Key Applications
          </h3>

          <div
            style={{
              width: 70,
              height: 3,
              background: COLORS.steelBlue,
              marginBottom: 24,
            }}
          />

          <p
            style={{
              color: COLORS.frostGray,
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.8,
              textTransform: "lowercase",
            }}
          >
            widely used in façades, doors, partitions, balustrades, shower
            enclosures, skylights, railings, and transport glazing where safety
            and performance are critical.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
