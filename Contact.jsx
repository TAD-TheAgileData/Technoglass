import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdWarning,
} from "react-icons/md";

/* ---------------- COLORS ---------------- */
const COLORS = {
  white: "#FFFFFF",        // Crystal White
  frost: "#D9D9D9",        // Frost Gray
  ice: "#A7D8F0",          // Ice Blue
  cyan: "#00BFFF",         // Cyan Glow
  steel: "#4682B4",        // Steel Blue
  navy: "#1C2833",         // Deep Navy
  glassGreen: "#7FFFD4",   // Glass Green
};

/* ---------------- Animation ---------------- */
const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ---------------- Component ---------------- */
export default function ContactPage() {
  const [tab, setTab] = useState("write");
  const fileRef = useRef(null);

  return (
    <div style={pageBg()}>
      <div style={container()}>

        {/* ---------------- Heading ---------------- */}
        <h1 style={heading()}>Contact Us</h1>
        <p style={tagline()}>
          We're Here to Help – Get in Touch for Inquiries, Quotes, or Partnerships
        </p>

        {/* ---------------- Tabs ---------------- */}
        <div style={tabs()}>
          {[
            ["write", "Write to Us"],
            ["touch", "Get in Touch"],
            ["visit", "Visit"],
            ["map", "Map"],
          ].map(([id, label]) => (
            <span
              key={id}
              onClick={() => setTab(id)}
              style={tabBtn(tab === id)}
            >
              {label}
              {tab === id && <div style={underline()} />}
            </span>
          ))}
        </div>

        {/* ---------------- Content ---------------- */}
        <AnimatePresence mode="wait">
          {tab === "touch" && (
            <motion.div key="touch" variants={fade} initial="hidden" animate="show">
              <div style={glassCard()}>
                <Info
                  icon={<MdLocationOn />}
                  title="Address"
                  text={
                    <>
                      Industrial Area Phase 5, Street 74<br />
                      Jeddah, Saudi Arabia<br />
                      P.O. Box: 32013, Jeddah 21428
                    </>
                  }
                />
                <Info
                  icon={<MdPhone />}
                  title="Phone"
                  text={
                    <>
                      <a href="tel:+966126379909">+966 12 637 9909</a><br />
                      Fax: +966 12 637 2041
                    </>
                  }
                />
                <Info
                  icon={<MdEmail />}
                  title="Email"
                  text={
                    <a href="mailto:info@technoglass.com.sa">
                      info@technoglass.com.sa
                    </a>
                  }
                />
              </div>
            </motion.div>
          )}

          {tab === "write" && (
            <motion.form key="write" variants={fade} initial="hidden" animate="show" style={glassCard()}>
              <label style={label()}>Upload Drawings</label>
              <div style={upload()} onClick={() => fileRef.current.click()}>
                Click to upload file
              </div>
              <input ref={fileRef} type="file" hidden />

              <label style={label()}>Message</label>
              <textarea rows="4" style={input()} />

              <div style={grid()}>
                <input placeholder="Name" style={input()} />
                <input placeholder="Email" style={input()} />
                <input placeholder="Phone" style={input()} />
              </div>

              <p style={note()}>We'll respond within 24–48 hours.</p>

              <button style={btn()}>Send Message</button>
            </motion.form>
          )}

          {tab === "visit" && (
            <motion.div key="visit" variants={fade} initial="hidden" animate="show" style={glassCard()}>
              <h3 style={sectionTitle()}>
                <MdWarning /> Visit Our Facility
              </h3>
              <ul style={list()}>
                <li>Observe all safety signs</li>
                <li>No photography inside plant</li>
                <li>Safety shoes mandatory</li>
              </ul>
            </motion.div>
          )}

          {tab === "map" && (
            <motion.div key="map" variants={fade} initial="hidden" animate="show">
              <iframe
                title="Technoglass Factory Location Map in Jeddah"
                src="https://www.google.com/maps?q=Industrial+Area+Phase+5,+Jeddah&output=embed"
                style={map()}
                loading="lazy"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

/* ---------------- UI Helpers ---------------- */
const Info = ({ icon, title, text }) => (
  <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
    <div style={iconBox()}>{icon}</div>
    <div>
      <strong style={{ color: COLORS.white }}>{title}</strong>
      <div style={{ color: COLORS.frost }}>{text}</div>
    </div>
  </div>
);

/* ---------------- Styles ---------------- */
const pageBg = () => ({
  minHeight: "100vh",
  background: `linear-gradient(180deg,${COLORS.navy},#0E1620)`,
});

const container = () => ({
  maxWidth: 1200,
  margin: "auto",
  padding: "80px 16px",
  fontFamily: '"Inter","Segoe UI",Arial,sans-serif',
});

const heading = () => ({
  textAlign: "center",
  color: COLORS.white,
  fontSize: "clamp(2.2rem,5vw,3rem)",
  fontWeight: 800,
});

const tagline = () => ({
  textAlign: "center",
  color: COLORS.ice,
  marginBottom: 40,
});

const tabs = () => ({
  display: "flex",
  justifyContent: "center",
  gap: 30,
  marginBottom: 40,
});

const tabBtn = (active) => ({
  cursor: "pointer",
  fontWeight: 600,
  color: active ? COLORS.cyan : COLORS.frost,
});

const underline = () => ({
  height: 3,
  background: COLORS.cyan,
  marginTop: 6,
  borderRadius: 4,
});

const glassCard = () => ({
  background: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(16px)",
  borderRadius: 20,
  padding: 26,
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
});

const label = () => ({
  color: COLORS.ice,
  fontWeight: 600,
  marginBottom: 6,
  display: "block",
});

const input = () => ({
  width: "100%",
  padding: 14,
  borderRadius: 12,
  border: `1px solid ${COLORS.steel}`,
});

const upload = () => ({
  padding: 30,
  border: `2px dashed ${COLORS.cyan}`,
  borderRadius: 14,
  textAlign: "center",
  cursor: "pointer",
  color: COLORS.white,
  marginBottom: 16,
});

const grid = () => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 14,
  marginTop: 14,
});

const note = () => ({
  fontSize: 13,
  color: COLORS.frost,
  marginTop: 10,
});

const btn = () => ({
  marginTop: 20,
  padding: "14px 28px",
  borderRadius: 14,
  border: "none",
  background: `linear-gradient(90deg,${COLORS.cyan},${COLORS.steel})`,
  color: COLORS.white,
  fontWeight: 700,
});

const iconBox = () => ({
  width: 42,
  height: 42,
  borderRadius: 10,
  background: COLORS.cyan,
  color: COLORS.glassGreen,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const sectionTitle = () => ({
  color: COLORS.white,
  display: "flex",
  gap: 8,
  marginBottom: 12,
});

const list = () => ({
  color: COLORS.frost,
  lineHeight: 1.8,
});

const map = () => ({
  width: "100%",
  height: 360,
  border: 0,
  borderRadius: 20,
});
