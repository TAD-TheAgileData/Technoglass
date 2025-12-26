import React from "react";
import { motion } from "framer-motion";
import headerImg from "../assets/Images/Heat-Strengthened-Glass.jpg";

export default function HeatStrengthened() {
  const FONT =
    "'Montserrat', 'Roboto', 'Helvetica Neue', 'Avenir', sans-serif";

  const COLORS = {
    navy: "#1C2833",
    white: "#FFFFFF",
    frost: "#D9D9D9",
    ice: "#A7D8F0",
    cyan: "#00BFFF",
    steel: "#4682B4",
    glass: "#7FFFD4",
  };

  const pageStyle = {
    background: COLORS.navy,
    minHeight: "100vh",
    fontFamily: FONT,
    lineHeight: "1.7",
    paddingBottom: "80px",
  };

  const headerStyle = {
    height: "320px",
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 0 22px 22px",
    position: "relative",
    marginBottom: "60px",
  };

  const headerOverlay = {
    position: "absolute",
    inset: 0,
    background: "rgba(28,40,51,0.65)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const headerTitle = {
    color: COLORS.white,
    fontSize: "42px",
    fontWeight: 600,
    letterSpacing: "3px",
    textTransform: "uppercase",
  };

  const gridStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
    padding: "0 20px",
  };

  const cardStyle = {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
    backdropFilter: "blur(18px)",
    borderRadius: "20px",
    padding: "34px",
    border: "1px solid rgba(255,255,255,0.25)",
    color: COLORS.frost,
  };

  const cardTitle = {
    fontSize: "22px",
    fontWeight: 600,
    color: COLORS.steel,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "16px",
    borderLeft: `4px solid ${COLORS.cyan}`,
    paddingLeft: "12px",
  };

  const listStyle = {
    paddingLeft: "22px",
    lineHeight: "1.8",
  };

  return (
    <div style={pageStyle}>
      {/* ================= HERO ================= */}
      <motion.div
        style={headerStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={headerOverlay}>
          <motion.h1
            style={headerTitle}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Heat-Strengthened Glass
          </motion.h1>
        </div>
      </motion.div>

      {/* ================= CARDS ================= */}
      <div style={gridStyle}>
        {/* Manufacturing */}
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
        >
          <h3 style={cardTitle}>Manufacturing Process</h3>
          <p>
            Heat-strengthened glass is heated to approximately{" "}
            <strong>600–700°C</strong> and cooled in a controlled manner. This
            process induces internal stresses that improve its strength.
          </p>
          <p>
            It becomes around <strong>1.5–2× stronger</strong> than annealed
            glass while maintaining dimensional stability.
          </p>
        </motion.div>

        {/* Properties */}
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ scale: 1.04 }}
        >
          <h3 style={cardTitle}>Key Properties</h3>
          <ul style={listStyle}>
            <li>Enhanced thermal stress resistance</li>
            <li>Improved wind-load performance</li>
            <li>Breaks into large, non-explosive fragments</li>
            <li>Greater durability than annealed glass</li>
          </ul>
        </motion.div>

        {/* Applications */}
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.04 }}
        >
          <h3 style={cardTitle}>Applications</h3>
          <ul style={listStyle}>
            <li>Building facades & curtain walls</li>
            <li>Balustrades & architectural glazing</li>
            <li>Windows exposed to thermal variation</li>
            <li>Areas where safety glass is not mandatory</li>
          </ul>
          
        </motion.div>

      </div>
      {/* ================= SEPARATOR ================= */}
<motion.div
  initial={{ opacity: 0, scaleX: 0 }}
  whileInView={{ opacity: 1, scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    maxWidth: "900px",
    height: "2px",
    margin: "80px auto",
    background:
      "linear-gradient(90deg, transparent, #00BFFF, #7FFFD4, #00BFFF, transparent)",
    borderRadius: "2px",
  }}
/>
{/* ================= ADDITIONAL CONTENT ================= */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px",
    color: "#D9D9D9",
  }}
>
  <h2
    style={{
      color: "#FFFFFF",
      fontSize: "26px",
      fontWeight: 600,
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "18px",
    }}
  >
    Heat-Strengthened vs Tempered Glass
  </h2>

  <p style={{ fontSize: "17px", lineHeight: "1.9" }}>
    While both heat-strengthened and tempered glass undergo thermal treatment,
    their performance characteristics differ significantly. Heat-strengthened
    glass offers enhanced strength and thermal resistance without the
    spontaneous breakage risk associated with tempered glass.
  </p>

  <p style={{ fontSize: "17px", lineHeight: "1.9", marginTop: "14px" }}>
    This makes heat-strengthened glass ideal for large façade panels where
    structural stability is required, but safety glazing regulations do not
    mandate tempered glass.
  </p>
</motion.section>

    </div>
  );
}
