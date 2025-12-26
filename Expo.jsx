import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= HERO IMAGES ================= */
import hero1 from "../assets/Images/bulletglass.jpg";
import hero2 from "../assets/Images/bulletglass.jpg";

/* ================= CONTENT IMAGES ================= */
import acousticPVB from "../assets/Images/bulletglass.jpg";
import pvbVariants from "../assets/Images/bulletglass.jpg";
import acousticAdvantage from "../assets/Images/bulletglass.jpg";

/* ================= DATA ================= */
const heroImages = [hero1, hero2];

const strengthCards = [
  {
    title: "Automotive Glass Product Range",
    points: [
      "Windshield & Sunroof Glass",
      "Front & Rear Door Glass",
      "Rear Fixed & Back Door Glass",
    ],
  },
  {
    title: "Manufacturing Excellence",
    points: [
      "100% Made in KSA",
      "Technical Support from TAMGLASS – Finland",
      "0.4M Laminated & 0.3M Tempered Capacity",
      "Single Radius Tempered Capability",
    ],
  },
  {
    title: "Engineering & Testing",
    points: [
      "In-house Screen Development Facility",
      "Bending Tools & Mould Design",
      "Lab Testing for Global Regulations",
    ],
  },
  {
    title: "Experience & Partnerships",
    points: [
      "10+ Years in Coated Glass Handling",
      "1300+ Windshields Developed",
      "30+ Years of Operational Expertise",
      "Strong Strategic Vendor Network",
    ],
  },
];

const COLORS = {
  navy: "#1C2833",
  cyan: "#00BFFF",
  glass: "rgba(255,255,255,0.15)",
};

/* ================= COMPONENT ================= */
export default function Expo() {
  const [activeHero, setActiveHero] = useState(0);
  const [preview, setPreview] = useState(null);

  return (
    <div style={{ background: COLORS.navy, minHeight: "100vh" }}>
      
      {/* ================= HERO SECTION ================= */}
      <section style={{ position: "relative", height: "80vh" }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={activeHero}
            src={heroImages[activeHero]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </AnimatePresence>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              background: COLORS.glass,
              backdropFilter: "blur(20px)",
              padding: "40px 60px",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.3)",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "#fff", fontSize: 48, fontWeight: 800 }}>
              Technology Strengths
            </h1>
            <p style={{ color: "#D9D9D9", marginTop: 12 }}>
              Advanced Automotive & Acoustic Glass Solutions
            </p>
          </motion.div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveHero(i)}
              style={{
                width: 14,
                height: 14,
                margin: "0 6px",
                borderRadius: "50%",
                border: "none",
                background: i === activeHero ? COLORS.cyan : "#94A3B8",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>

      {/* ================= VALUE ADDED PRODUCTS ================= */}
      <section style={{ padding: "100px 8%" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            color: "#FFFFFF",
            fontSize: 36,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          Value Added Products – Acoustic PVB Variants
        </motion.h2>

        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 45px rgba(0,191,255,0.7)",
          }}
          transition={{ duration: 0.6 }}
          onClick={() => setPreview(pvbVariants)}
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: COLORS.glass,
            backdropFilter: "blur(22px)",
            borderRadius: 30,
            padding: 32,
            border: "1px solid rgba(255,255,255,0.25)",
            cursor: "pointer",
          }}
        >
          <img
            src={pvbVariants}
            alt="Acoustic PVB Variants"
            style={{
              width: "100%",
              borderRadius: 20,
              background: "#fff",
              padding: 14,
            }}
          />

          <p
            style={{
              textAlign: "center",
              marginTop: 18,
              color: "#D9D9D9",
              fontSize: 14,
            }}
          >
            Hover for details • Click to zoom full structure
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 30,
              marginTop: 30,
            }}
          >
            <div>
              <h3 style={{ color: COLORS.cyan }}>Acoustic Shaded PVB</h3>
              <ul style={{ color: "#CBD5F5", lineHeight: 1.8 }}>
                <li>Clear</li>
                <li>Green</li>
                <li>Solar</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "#94A3B8" }}>
                Acoustic Shaded PVB (SR)
              </h3>
              <ul style={{ color: "#CBD5F5", lineHeight: 1.8 }}>
                <li>Clear – Solar Reduction</li>
                <li>Green – Solar Reduction</li>
                <li>Solar – Enhanced Heat Control</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= STRENGTH CARDS ================= */}
      <section style={{ padding: "80px 8%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
          }}
        >
          {strengthCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 35px rgba(0,191,255,0.6)",
              }}
              style={{
                background: COLORS.glass,
                backdropFilter: "blur(18px)",
                borderRadius: 24,
                padding: 26,
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <h3 style={{ color: COLORS.cyan, fontSize: 22 }}>
                {card.title}
              </h3>
              <ul
                style={{
                  color: "#CBD5F5",
                  lineHeight: 1.7,
                  marginTop: 12,
                }}
              >
                {card.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              cursor: "zoom-out",
            }}
          >
            <motion.img
              src={preview}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: 20,
                boxShadow: "0 0 50px rgba(0,191,255,0.8)",
                background: "#fff",
                padding: 14,
              }}
            />
          </motion.div>
        )}

        {/* ================= ACOUSTIC PVB ADVANTAGES ================= */}
{/* ================= ACOUSTIC PVB ADVANTAGES ================= */}
<section style={{ padding: "100px 8%" }}>
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      color: "#FFFFFF",
      fontSize: 36,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 70,
    }}
  >
    Advanced Acoustic PVB – Advantages
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25,
        },
      },
    }}
    style={{
      maxWidth: 1300,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
      gap: 50,
      alignItems: "center",
    }}
  >
    {/* IMAGE CARD */}
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 60px rgba(0,191,255,0.7)",
      }}
      animate={{
        y: [0, -6, 0],
      }}
      style={{
        background: COLORS.glass,
        backdropFilter: "blur(22px)",
        borderRadius: 30,
        padding: 22,
        border: "1px solid rgba(255,255,255,0.25)",
        cursor: "zoom-in",
      }}
      onClick={() => setPreview(acousticAdvantage)}
    >
      <img
        src={acousticAdvantage}
        alt="Advanced Acoustic PVB Comparison"
        style={{
          width: "100%",
          borderRadius: 22,
          background: "#fff",
          padding: 14,
        }}
      />
    </motion.div>

    {/* CONTENT CARD */}
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{
        background: COLORS.glass,
        backdropFilter: "blur(22px)",
        borderRadius: 30,
        padding: 40,
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <h3
        style={{
          color: COLORS.cyan,
          fontSize: 26,
          marginBottom: 18,
        }}
      >
        Why Advanced Acoustic PVB?
      </h3>

      <ul
        style={{
          color: "#CBD5F5",
          lineHeight: 1.9,
          fontSize: 16,
        }}
      >
        <li>Homogeneous single soft sound-damping PVB layer</li>
        <li>Superior noise reduction across wide frequency ranges</li>
        <li>Outperforms conventional multi-layer acoustic PVB</li>
        <li>Maintains optical clarity and safety compliance</li>
        <li>Ideal for premium automotive & architectural glazing</li>
      </ul>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          marginTop: 26,
          padding: 20,
          borderRadius: 18,
          background: "rgba(0,191,255,0.12)",
          border: "1px solid rgba(0,191,255,0.45)",
        }}
      >
        <p style={{ color: "#D9D9D9", fontSize: 14 }}>
          <strong style={{ color: COLORS.cyan }}>
            Advanced Acoustic PVB
          </strong>{" "}
          uses a uniform damping layer that delivers enhanced sound insulation
          with reduced thickness compared to conventional layered PVB systems.
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
</section>


      </AnimatePresence>
    </div>
  );
}
