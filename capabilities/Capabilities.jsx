
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText } from "lucide-react";  // added FileText icon
import HERO_IMG from "../assets/Images/CAPABILITIES.jpg"


// ESG PDF
import esgFile from "../documents/ESG_REPORT.pdf";


// Optional: replace this hero URL with a local image import if you prefer
const src = {HERO_IMG};

const equipment = [
  {
    key: "tempering",
    title: "Tempering Furnaces",
    subtitle: "Continuous & convection lines",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden>
        <path fill="currentColor" d="M12 2C8 2 4 4 4 8c0 3 2 5 2 6 0 1-1 2-1 3v3h14v-3c0-1-1-2-1-3 0-1 2-3 2-6 0-4-4-6-8-6zM8 9a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"/>
      </svg>
    ),
  },
  {
    key: "lamination",
    title: "Lamination Lines",
    subtitle: "Multi-layer bonding with PVB/SGP/EVA",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden>
        <path fill="currentColor" d="M3 5h18v2H3V5zm0 4h18v10H3V9zm4 2v6h10v-6H7z"/>
      </svg>
    ),
  },
  {
    key: "igu",
    title: "IGU Automated Lines",
    subtitle: "Precision assembly & gas-filling",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden>
        <path fill="currentColor" d="M21 3H3v18h18V3zM5 5h14v6H5V5zm0 8h6v6H5v-6z"/>
      </svg>
    ),
  },
  {
    key: "cnc",
    title: "CNC Cutting & Edge Polishing",
    subtitle: "CNC precision for complex geometries",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden>
        <path fill="currentColor" d="M3 3h18v2H3V3zm2 6h14v2H5V9zm0 4h10v6H5v-6z"/>
      </svg>
    ),
  },
  {
    key: "heatsoak",
    title: "Heat-soak Chambers",
    subtitle: "Safety stress testing for tempered glass",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden>
        <path fill="currentColor" d="M12 2C8 2 5 5 5 9c0 4 4 9 7 11 3-2 7-7 7-11 0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1012 6a2.5 2.5 0 000 5.5z"/>
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f7fafc", minHeight: "100vh" }}>
      {/* HERO */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={{
          height: "46vh",
          minHeight: 260,
          backgroundImage: `linear-gradient(180deg, rgba(5,15,30,0.55), rgba(5,15,30,0.45)), url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 1100 }}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontSize: "clamp(28px, 4.2vw, 44px)", margin: 0, fontWeight: 800, letterSpacing: "-0.6px" }}
          >
            CAPABILITIES 
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 0.95 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ marginTop: 12, fontSize: 18, color: "rgba(255,255,255,0.95)" }}
          >
            Techno Glass operates one of the region’s leading glass processing facilities — engineered
            for quality, scale and sustainability.
          </motion.p>
        </div>
      </motion.header>

      {/* CONTENT */}
      <main style={{ maxWidth: 1200, margin: "48px auto", padding: "0 20px 80px" }}>
        {/* Intro / summary */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "white",
            padding: 28,
            borderRadius: 14,
            boxShadow: "0 10px 30px rgba(10,20,40,0.06)",
            marginBottom: 30,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#0f172a" }}> CAPABILITIES </h2>
          <p style={{ marginTop: 10, color: "#334155", lineHeight: 1.7 }}>
            Techno Glass operates one of the most advanced glass processing facilities in the region.
            Below is a concise summary of our major manufacturing & technology capabilities.
          </p>

          {/* Quick bullets */}
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 18 }}>
            <FeaturePill icon="🏭" label="High throughput production" />
            <FeaturePill icon="⚙️" label="Automated quality control" />
            <FeaturePill icon="🌱" label="Low-carbon initiatives" />
            <FeaturePill icon="🔬" label="R&D & prototyping" />
          </div>
        </motion.section>

        {/* Grid of equipment cards */}
        <motion.section
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {equipment.map((eq, i) => (
            <motion.article
              key={eq.key}
              whileHover={{ translateY: -8, boxShadow: "0 18px 48px rgba(15,23,42,0.12)" }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              style={{
                background: "linear-gradient(180deg, #fff, #fbfdff)",
                borderRadius: 12,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 160,
                border: "1px solid #edf2f7",
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 12,
                  background: "#eef2ff",
                  display: "grid",
                  placeItems: "center",
                  color: "#0b5cff",
                }}>
                  {eq.icon}
                </div>

                <div>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#0f172a" }}>{eq.title}</h3>
                  <p style={{ margin: 0, color: "#475569", fontSize: 14 }}>{eq.subtitle}</p>
                </div>
              </div>

              <div style={{ marginTop: 6, color: "#334155", fontSize: 14, lineHeight: 1.6 }}>
                {/* short descriptive sentence */}
                {getEquipmentDescription(eq.key)}
              </div>

              <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
                <Tag label="Capacity: high" />
                <Tag label="ISO/QC" />
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* Sustainability block */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          style={{
            marginTop: 34,
            borderRadius: 12,
            padding: 24,
            background: "linear-gradient(90deg,#f0fbf8,#f7fff9)",
            border: "1px solid #e6f5ec",
            display: "flex",
            gap: 24,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 72px", display: "grid", placeItems: "center" }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="11" stroke="#0aa062" strokeWidth="1.5" />
              <path d="M7 13.5l2.5 2.5L17 8" stroke="#0aa062" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
           {/* ESG REPORT BUTTON */}
           <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#0f172a" }}>Sustainability & ESG</h3>
            <p style={{ marginTop: 8, color: "#334155", lineHeight: 1.7 }}>
              Commitment to:
            </p>
            <ul style={{ marginTop: 8, color: "#334155", lineHeight: 1.7 }}>
              <li>Energy-efficient buildings</li>
              <li>Lower carbon glass production</li>
              <li>Zero-waste initiatives</li>
              <li>Environmental protection</li>
            </ul>
          </div>
<a
          href={esgFile}
          target="_blank"
          rel="noopener noreferrer"
          className="esg-btn"
        >
          <FileText size={20} /> View ESG Report
        </a>
      
        </motion.section>
      </main>
    </div>
  );
}

/* ---------- small helper subcomponents ---------- */

function Tag({ label }) {
  return (
    <span style={{
      fontSize: 12,
      padding: "6px 8px",
      background: "#f1f5f9",
      borderRadius: 8,
      color: "#0f172a",
      border: "1px solid #e6eef7",
    }}>
      {label}
    </span>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div style={{
      display: "inline-flex",
      gap: 10,
      alignItems: "center",
      background: "#ffffff",
      padding: "8px 12px",
      borderRadius: 999,
      boxShadow: "0 6px 18px rgba(10,20,40,0.06)",
      border: "1px solid #eef2f7",
      color: "#0f172a",
      fontWeight: 600,
    }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontSize: 14 }}>{label}</span>
    </div>
  );
}

/* ---------- small helpers for descriptions ---------- */
function getEquipmentDescription(key) {
  switch (key) {
    case "tempering":
      return "Continuous and convection tempering furnaces for high-strength safety glazing and efficiency at scale.";
    case "lamination":
      return "High-speed lamination lines supporting PVB, SGP and EVA interlayers for security and acoustic performance.";
    case "igu":
      return "Automated IGU assembly with spacer and gas-filling stations, quality inspection, and sealing.";
    case "cnc":
      return "CNC cutting and edge polishing with fine tolerances for complex shapes and high optical quality.";
    case "heatsoak":
      return "Heat-soak chambers for post-tempering safety testing to reduce spontaneous breakage risk.";
    default:
      return "";
  }
}
