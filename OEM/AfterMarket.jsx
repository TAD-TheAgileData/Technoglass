import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletglass.jpg";
import windscreen from "../assets/Images/bulletglass.jpg";
import sidelite from "../assets/Images/bulletglass.jpg";
import backlite from "../assets/Images/bulletglass.jpg";

/* ---------------- Animation ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* FONT STACK */
const FONT_STACK =
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",system-ui,sans-serif';

export default function AfterMarket() {
  return (
    <div
      style={{
        background: "#1C2833",
        color: "#FFFFFF",
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
          textAlign: "center",
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", maxWidth: 900 }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem,5vw,3.5rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Automotive Glass Replacement
          </h1>

          <p
            style={{
              marginTop: 14,
              color: "#A7D8F0",
              fontSize: 18,
              fontWeight: 300,
              letterSpacing: "0.03em",
            }}
          >
            Glazing Products for the Automotive Aftermarket
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section style={{ padding: "100px 10%", maxWidth: 1100, margin: "auto" }}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            color: "#D9D9D9",
            fontSize: 18,
            lineHeight: 1.9,
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          Our automotive aftermarket glazing solutions are engineered for safety,
          durability, and superior optical clarity. We supply high-quality
          replacement glass products for a wide range of vehicles.
        </motion.p>

        <div
          style={{
            width: 80,
            height: 4,
            background: "#4682B4",
            margin: "40px 0",
            borderRadius: 4,
          }}
        />

        {/* ================= PRODUCT CARDS ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 30,
            marginTop: 60,
          }}
        >
          <ProductCard
            image={windscreen}
            title="Windshields"
            desc="Laminated safety glass offering high impact resistance and superior visibility."
          />
          <ProductCard
            image={sidelite}
            title="Sidelites"
            desc="Precision-engineered side glass ensuring strength, clarity, and safety."
          />
          <ProductCard
            image={backlite}
            title="Backlites"
            desc="Durable rear glass designed for thermal stability and structural integrity."
          />
        </div>
      </section>
    </div>
  );
}

/* ================= CARD ================= */
const ProductCard = ({ image, title, desc }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,191,255,0.35)" }}
    style={{
      background: "rgba(255,255,255,0.1)",
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid #00BFFF",
      backdropFilter: "blur(12px)",
      cursor: "pointer",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: "100%", height: 200, objectFit: "cover" }}
    />

    <div style={{ padding: 20 }}>
      <h3
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#D9D9D9",
          lineHeight: 1.7,
          fontWeight: 300,
          letterSpacing: "0.02em",
        }}
      >
        {desc}
      </p>
    </div>
  </motion.div>
);