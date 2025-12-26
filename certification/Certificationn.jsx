import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= ASSETS ================= */
import iso9001 from "../assets/Images/certificatin.jpeg";
import iso14001 from "../assets/Images/certificatin.jpeg";
import iso45001 from "../assets/Images/certificatin.jpeg";
import iatf from "../assets/Images/certificatin.jpeg";
import ce from "../assets/Images/certificatin.jpeg";

/* ================= DESIGN TOKENS ================= */
const COLORS = {
  crystalWhite: "#FFFFFF",
  frostGray: "#D9D9D9",
  iceBlue: "#A7D8F0",
  cyanGlow: "#00BFFF",
  steelBlue: "#4682B4",
  deepNavy: "#1C2833",
  glassGreen: "#7FFFD4",
};

/* ================= MOTION VARIANTS ================= */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const item = (dir) => ({
  hidden: {
    opacity: 0,
    x: dir === "left" ? -80 : 80,
    scale: 0.92,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
});

/* ================= DATA ================= */
const CERTIFICATIONS = [
  {
    title: "ISO 9001",
    year: "2016",
    img: iso9001,
    desc: "Quality Management System ensuring consistent product quality and customer satisfaction.",
  },
  {
    title: "ISO 14001",
    year: "2018",
    img: iso14001,
    desc: "Environmental Management System focused on sustainability and eco-friendly operations.",
  },
  {
    title: "ISO 45001",
    year: "2019",
    img: iso45001,
    desc: "Occupational Health & Safety standard ensuring safe working conditions.",
  },
  {
    title: "IATF 16949",
    year: "2021",
    img: iatf,
    desc: "Automotive quality management standard for OEM and EV manufacturing.",
  },
  {
    title: "CE Certification",
    year: "2023",
    img: ce,
    desc: "European conformity certification ensuring safety and regulatory compliance.",
  },
];

/* ================= MAIN COMPONENT ================= */
export default function Certification() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ background: COLORS.deepNavy, minHeight: "100vh" }}>
      <Header />

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ position: "relative", padding: "0 8% 140px" }}
      >
        <AnimatedLine />

        {CERTIFICATIONS.map((itemData, i) => (
          <TimelineItem
            key={i}
            data={itemData}
            index={i}
            onClick={setActive}
          />
        ))}
      </motion.section>

      <CertificationModal active={active} onClose={() => setActive(null)} />
    </div>
  );
}

/* ================= HEADER ================= */
const Header = () => (
  <section style={{ padding: "90px 8%", textAlign: "center" }}>
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        color: COLORS.crystalWhite,
        fontSize: "clamp(34px,5vw,50px)",
        fontWeight: 800,
      }}
    >
      Certifications
    </motion.h1>
    <p style={{ color: COLORS.frostGray, marginTop: 8 }}>
      Global quality & compliance milestones
    </p>
  </section>
);

/* ================= TIMELINE LINE ================= */
const AnimatedLine = () => (
  <motion.div
    animate={{ backgroundPositionY: ["0%", "300%"] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    style={{
      position: "absolute",
      left: "50%",
      top: 0,
      bottom: 0,
      width: 4,
      transform: "translateX(-50%)",
      background:
        "linear-gradient(to bottom, #4682B4, #00BFFF, #7FFFD4)",
      backgroundSize: "100% 300%",
    }}
  />
);

/* ================= TIMELINE ITEM ================= */
const TimelineItem = ({ data, index, onClick }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={item(isLeft ? "left" : "right")}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-end" : "flex-start",
        marginBottom: 100,
        position: "relative",
      }}
    >
      <PulseDot />

      <motion.div
        whileHover={{ scale: 1.06 }}
        onClick={() => onClick(data)}
        style={{
          width: "min(460px, 90%)",
          padding: 24,
          borderRadius: 22,
          cursor: "pointer",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h3 style={{ color: COLORS.crystalWhite }}>{data.title}</h3>
        <p style={{ color: COLORS.frostGray }}>{data.year}</p>

        <img
          src={data.img}
          alt={data.title}
          style={{
            width: "100%",
            height: 150,
            objectFit: "contain",
            background: "#fff",
            borderRadius: 14,
            marginTop: 14,
            loading:"lazy",
          }}
        />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(28,40,51,0.94), rgba(28,40,51,0.8))",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            color: COLORS.crystalWhite,
            textAlign: "center",
          }}
        >
          <p>{data.desc}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* ================= PULSE DOT ================= */
const PulseDot = () => (
  <motion.div
    animate={{ scale: [1, 1.5, 1] }}
    transition={{ duration: 1.8, repeat: Infinity }}
    style={{
      position: "absolute",
      left: "50%",
      top: 36,
      transform: "translateX(-50%)",
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: COLORS.glassGreen,
      boxShadow: `0 0 18px ${COLORS.glassGreen}`,
    }}
  />
);

/* ================= MODAL ================= */
const CertificationModal = ({ active, onClose }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 90 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: COLORS.crystalWhite,
            padding: 30,
            borderRadius: 24,
            maxWidth: "90%",
            width: 600,
          }}
        >
          <h2>{active.title}</h2>
          <p style={{ marginBottom: 14 }}>{active.desc}</p>
          <img
            src={active.img}
            alt={active.title}
            style={{
              width: "100%",
              height: "55vh",
              objectFit: "contain",
            }}
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
