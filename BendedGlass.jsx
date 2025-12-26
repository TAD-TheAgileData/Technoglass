import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import headerImg from "../assets/Images/CurvedBendedGlass.jpg";
import Img1 from "../assets/Images/CurvedBendedGlass.jpg";

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
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",sans-serif';

/* ================= LETTER ANIMATION ================= */
const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04 },
  }),
};

export default function BendedGlass() {
  /* ================= STYLES ================= */
  const page = {
    minHeight: "100vh",
    background: COLORS.deepNavy,
    fontFamily: FONT,
    color: COLORS.frostGray,
    fontWeight: 300,
  };

  const header = {
    height: "320px",
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    fontSize: "clamp(30px,4vw,44px)",
    fontWeight: 500,
    color: COLORS.crystalWhite,
    position: "relative",
  };

  const overlay = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(28,40,51,0.92), rgba(0,0,0,0.75))",
    backdropFilter: "blur(6px)",
  };

  const section = {
    maxWidth: "1150px",
    margin: "80px auto",
    padding: "0 20px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    alignItems: "center",
  };

  const glassCard = {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
    backdropFilter: "blur(18px)",
    borderRadius: "22px",
    padding: "36px",
    border: "1px solid rgba(255,255,255,0.25)",
    lineHeight: 1.9,
    fontWeight: 300,
    textTransform: "lowercase",
  };

  const h2 = {
    color: COLORS.iceBlue,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    fontWeight: 500,
    marginBottom: 22,
    fontSize: "22px",
  };

  const p = {
    fontWeight: 300,
    lineHeight: 1.9,
    textTransform: "lowercase",
  };

  const ul = {
    paddingLeft: 22,
    lineHeight: 2,
    fontWeight: 300,
    textTransform: "lowercase",
  };

  /* ================= TITLES ================= */
  const title1 = "360° Curved Bending Glass";
  const title2 = "Manufacturing Technology";
  const title3 = "Applications & Advantages";

  return (
    <div style={page}>
      {/* ================= HEADER ================= */}
      <motion.div
        style={header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <div style={overlay} />
        <div style={{ position: "relative", display: "flex", gap: 4 }}>
          {title1.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariant}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* ================= SECTION 1 ================= */}
      <motion.section
        style={{ ...section, ...grid }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 style={h2}>Our Product</h2>
          <p style={p}>
            architectural curved glass engineered for iconic facades and
            precision-driven design projects. clean curvature meets modern
            transparency.
          </p>

          <ul style={ul}>
            <li>tight-radius precision curvature</li>
            <li>small to large-format bending</li>
            <li>structural glazing compatibility</li>
            <li>ideal for façades, atriums & skylights</li>
          </ul>
        </div>

        <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable>
          <motion.img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Curved Glass"
            style={{
              loading:"lazy",
              width: "100%",
              height: "380px",
              objectFit: "cover",
              borderRadius: "22px",
            }}
            whileHover={{ scale: 1.04 }}
          />
        </Tilt>
      </motion.section>

      {/* ================= SECTION 2 ================= */}
      <motion.section
        style={{ ...section, ...grid, direction: "rtl" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <motion.img
            src={Img1}
            alt="Technology"
            style={{
              width: "100%",
              height: "380px",
              objectFit: "cover",
              borderRadius: "22px",
              loading:"lazy",
            }}
            whileHover={{ scale: 1.04 }}
          />
        </Tilt>

        <div style={{ direction: "ltr" }}>
          <h2 style={h2}>{title2}</h2>
          <p style={p}>
            advanced furnace-controlled bending technology ensures smooth,
            distortion-free curvature with exact geometric precision.
          </p>

          <ul style={ul}>
            <li>precision thermal profiling</li>
            <li>automated forming molds</li>
            <li>robotic calibration accuracy</li>
            <li>stress-controlled cooling</li>
          </ul>
        </div>
      </motion.section>

      {/* ================= SECTION 3 ================= */}
      <motion.section
        style={section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ ...h2, textAlign: "center", marginBottom: 32 }}>
          {title3}
        </h2>

        <div style={glassCard}>
          <ul style={ul}>
            <li>premium architectural façades</li>
            <li>observation decks & skylights</li>
            <li>luxury interior partitions</li>
            <li>curved display structures</li>
            <li>modern atrium installations</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
