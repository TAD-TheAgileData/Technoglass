import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./OEM.css";

import heroImg from "../assets/Images/bulletglass.jpg";
import habitatImg from "../assets/Images/bulletglass.jpg";
import oemImg from "../assets/Images/bulletglass.jpg";
import aftermarketImg from "../assets/Images/bulletglass.jpg";
import transportImg from "../assets/Images/bulletglass.jpg";

export default function OEM() {
  const navigate = useNavigate();

  const markets = [
    {
      title: "Glazing Products – Habitat",
      desc: "Architectural glazing for residential & commercial buildings.",
      img: habitatImg,
      link: "/OEM/habitat",
    },
    {
      title: "Automotive OEM Glass (ICE & EV)",
      desc: "Precision glazing for OEM vehicle manufacturers.",
      img: oemImg,
      link: "/OEM/iceev",
    },
    {
      title: "Automotive Glass Replacement",
      desc: "Aftermarket replacement glass solutions.",
      img: aftermarketImg,
      link: "/OEM/aftermarket",
    },
    {
      title: "Transport Sector Glazing",
      desc: "Glass solutions for buses, railways & mass transport.",
      img: transportImg,
      link: "/OEM/transport",
    },
  ];

  return (
    <div className="oem-container">
      {/* ================= HERO ================= */}
      <section
        className="oem-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Glass overlay */}
        <div className="oem-hero-overlay" />

        <motion.div
          className="oem-hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h1>OEM Glass</h1>
          <p>
            Engineered glazing solutions delivering protection, performance, and
            confidence across industries.
          </p>
        </motion.div>
      </section>

      {/* ================= MARKET CARDS ================= */}
      <section className="oem-market-cards">
        {markets.map((item, index) => (
         <motion.div
  key={index}
  className="oem-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{
    y: -14,
    scale: 1.05,
    rotateX: 4,
    rotateY: -4,
  }}
  whileTap={{ scale: 0.97 }}
  onClick={() => navigate(item.link)}
>
  <div className="oem-card-img-wrapper">
    <img src={item.img} alt={item.title} className="oem-card-img" />
    <span className="oem-glass-shine" />
  </div>

  <div className="oem-card-content">
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
</motion.div>

        ))}
      </section>
    </div>
  );
}