import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import heroImg from "../assets/Images/safetyGlass.jpg";
import habitatImg from "../assets/Images/bulletglass.jpeg";
import oemImg from "../assets/Images/bulletResistant.jpeg";
import aftermarketImg from "../assets/Images/SafetyGlass.jpg";
import transportImg from "../assets/Images/bulletGlass.jpeg";

export default function OEM() {
  const navigate = useNavigate();

  const markets = [
    {
      title: "Glazing Products – Habitat",
      desc: "Architectural glazing for residential & commercial buildings.",
      img: habitatImg,
      link: "/Habitat",
    },
    {
      title: "Automotive OEM Glass (ICE & EV)",
      desc: "Precision glazing for OEM vehicle manufacturers.",
      img: oemImg,
      link: "/Ice$Ev",
    },
    {
      title: "Automotive Glass Replacement",
      desc: "Aftermarket replacement glass solutions.",
      img: aftermarketImg,
      link: "/AfterMarket",
    },
    {
      title: "Transport Sector Glazing",
      desc: "Glass solutions for buses, railways & mass transport.",
      img: transportImg,
      link: "/Transport",
    },
  ];

  return (
    <div style={{ background: "#0F1B24", color: "#FFFFFF" }}>
      {/* ================= HERO ================= */}
      <section
        style={{
          height: "85vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Glass overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,27,36,0.9), rgba(0,0,0,0.7))",
            backdropFilter: "blur(10px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 900,
            padding: 20,
          }}
        >
          <h1 style={{ fontSize: 52, fontWeight: 800 }}>
            Safety & Security Glass
          </h1>
          <p style={{ fontSize: 20, color: "#D9D9D9", marginTop: 16 }}>
            Engineered glazing solutions delivering protection, performance, and
            confidence across industries.
          </p>
        </motion.div>
      </section>

      {/* ================= MARKET CARDS ================= */}
      <section
        style={{
          padding: "100px 8%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40,
        }}
      >
        {markets.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(item.link)}
            style={{
              cursor: "pointer",
              background: "rgba(167,216,240,0.12)",
              backdropFilter: "blur(16px)",
              borderRadius: 24,
              border: "1px solid rgba(70,130,180,0.6)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
              overflow: "hidden",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: 28 }}>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#00BFFF",
                  marginBottom: 12,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: 16,
                  color: "#D9D9D9",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
