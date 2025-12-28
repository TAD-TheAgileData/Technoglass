import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletglass.jpg";
import transportImg from "../assets/Images/bulletglass.jpg";

/* ================= COLOR PALETTE ================= */
const COLORS = {
  crystalWhite: "#FFFFFF",
  frostGray: "#D9D9D9",
  iceBlue: "#A7D8F0",
  cyanGlow: "#00BFFF",
  steelBlue: "#4682B4",
  deepNavy: "#1C2833",
  glassGreen: "#7FFFD4",
};

/* ================= FONT STACK ================= */
const FONT_STACK =
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",system-ui,sans-serif';

export default function Transport() {
  return (
    <div
      style={{
        background: COLORS.deepNavy,
        color: COLORS.crystalWhite,
        fontFamily: FONT_STACK,
        fontWeight: 300,
        letterSpacing: "0.02em",
      }}
    >
      {/* ================= HERO ================= */}
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
              "linear-gradient(135deg, rgba(28,40,51,0.92), rgba(0,0,0,0.75))",
            backdropFilter: "blur(6px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", textAlign: "center" }}
        >
          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 52px)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Glazing for the Transport Sector
          </h1>

          <div
            style={{
              width: 80,
              height: 4,
              background: COLORS.cyanGlow,
              margin: "18px auto",
              borderRadius: 10,
              boxShadow: `0 0 12px ${COLORS.cyanGlow}`,
            }}
          />

          <p style={{ color: COLORS.iceBlue, fontSize: 18 }}>
            Advanced safety & performance glass for modern mobility
          </p>
        </motion.div>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section
        style={{
          padding: "100px 10%",
          maxWidth: 1200,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* ===== IMAGE WITH HOVER ZOOM + GLOW ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 0 40px ${COLORS.cyanGlow}`,
          }}
          style={{
            height: 420,
            borderRadius: 18,
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${transportImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>

        {/* ===== CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 34px)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Transport Glazing Solutions
          </h2>

          <div
            style={{
              width: 60,
              height: 3,
              background: COLORS.cyanGlow,
              marginBottom: 24,
              borderRadius: 6,
              boxShadow: `0 0 10px ${COLORS.cyanGlow}`,
            }}
          />

          <p
            style={{
              fontSize: 17,
              color: COLORS.frostGray,
              lineHeight: 1.9,
              marginBottom: 20,
            }}
          >
            Our transport glazing solutions are designed for buses, coaches,
            metros, and railways, offering high-impact resistance with superior
            optical clarity.
          </p>

          <p
            style={{
              fontSize: 17,
              color: COLORS.frostGray,
              lineHeight: 1.9,
            }}
          >
            Built for extreme environments, our glass ensures durability,
            reduced maintenance, and compliance with global safety standards —
            driven by{" "}
            <span
              style={{
                color: COLORS.glassGreen,
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              sustainable innovation
            </span>
            .
          </p>
        </motion.div>
      </section>
    </div>
  );
}
