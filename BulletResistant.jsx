import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Images/bulletglass.jpg";

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

export default function BulletResistant() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.deepNavy,
        fontFamily: FONT,
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
              "linear-gradient(135deg, rgba(28,40,51,0.9), rgba(0,0,0,0.75))",
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
              fontSize: "clamp(36px, 5vw, 54px)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 500, // lighter = glass feel
            }}
          >
            Bullet Resistant Glass
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
              maxWidth: 720,
              margin: "auto",
              color: COLORS.iceBlue,
              fontWeight: 300,
              lineHeight: 1.8,
              textTransform: "lowercase",
            }}
          >
            Advanced laminated glazing engineered to resist ballistic impact
            while maintaining clarity and structural performance.
          </p>
        </motion.div>
      </section>

      {/* ================= TECHNICAL CARDS ================= */}
      <section style={{ padding: "90px 8%" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 36,
          }}
        >
          {[
            {
              title: "International Standards",
              items: [
                "nij ballistic standards",
                "ul 752 certification",
                "en 1063 compliance",
              ],
            },
            {
              title: "Construction",
              items: [
                "multi-layer laminated glass",
                "high energy absorption",
                "pvb / sgp interlayers",
              ],
            },
            {
              title: "Protection Levels",
              items: [
                "br1 to br7 resistance",
                "handgun to rifle threats",
                "optional anti-spall layer",
              ],
            },
          ].map((sec, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                padding: 28,
                borderRadius: 24,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <h3
                style={{
                  color: COLORS.crystalWhite,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                {sec.title}
              </h3>

              <ul
                style={{
                  color: COLORS.frostGray,
                  fontWeight: 300,
                  lineHeight: 1.9,
                  paddingLeft: 20,
                  textTransform: "lowercase",
                }}
              >
                {sec.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APPLICATIONS (NOT CARD) ================= */}
      <section
        style={{
          padding: "90px 8%",
          background: "rgba(255,255,255,0.03)",
          borderTop: `1px solid ${COLORS.steelBlue}`,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: COLORS.glassGreen,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 40,
            fontWeight: 500,
          }}
        >
          Key Applications
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            maxWidth: 900,
            margin: "auto",
            color: COLORS.frostGray,
            fontSize: 18,
            lineHeight: 2,
            listStyle: "square",
            paddingLeft: 22,
            textTransform: "lowercase",
            fontWeight: 300,
          }}
        >
          <li>Banks and financial institutions</li>
          <li>Embassies and government buildings</li>
          <li>Defense and military installations</li>
          <li>Cash counters and secure transaction zones</li>
          <li>VIP residences and panic rooms</li>
        </motion.ul>
      </section>
    </div>
  );
}
