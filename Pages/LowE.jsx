import React from "react";
import { motion } from "framer-motion";
import {
  MdWbSunny,
  MdThermostat,
  MdVisibility,
} from "react-icons/md";
import PageTransition from "../components/PageTransition";
import "./LowE.css";

import heroImg from "../assets/images/vltimg3.jpg";
import img1 from "../assets/images/VLT-image-1.jpg";
import img2 from "../assets/images/vlt-img-2.jpg";
import img3 from "../assets/images/vltimg3.jpg";

const data = [
  {
    img: img1,
    title: "High VLT Low-E Glass",
    desc: "Maximum daylight with advanced thermal insulation.",
    points: [
      { icon: <MdVisibility />, text: "High visible light transmission" },
      { icon: <MdThermostat />, text: "Excellent insulation performance" },
      { icon: <MdWbSunny />, text: "Reduced solar heat gain" },
    ],
  },
  {
    img: img2,
    title: "Energy Efficient Low-E Glass",
    desc: "Designed to reduce energy costs and improve comfort.",
    points: [
      { icon: <MdThermostat />, text: "Lower cooling & heating loads" },
      { icon: <MdWbSunny />, text: "Optimized daylight usage" },
      { icon: <MdVisibility />, text: "Balanced clarity & performance" },
    ],
  },
  {
    img: img3,
    title: "Solar Control Low-E Glass",
    desc: "Superior glare control and UV protection.",
    points: [
      { icon: <MdWbSunny />, text: "Controls glare & heat" },
      { icon: <MdVisibility />, text: "Blocks harmful UV rays" },
      { icon: <MdThermostat />, text: "Stable indoor temperature" },
    ],
  },
];

export default function LowE() {
  return (
     <PageTransition>
    <div className="lowe-page">

      {/* ================= HERO ================= */}
      <section
        className="lowe-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="lowe-hero-overlay" />

        <motion.div
          className="lowe-hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Low-E & Solar Control Glass</h1>
          <p>
            Advanced architectural glazing delivering superior energy
            efficiency, comfort, and visual clarity.
          </p>
        </motion.div>
      </section>

      {/* ================= FEATURE SECTIONS ================= */}
      <section className="lowe-sections">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="lowe-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lowe-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="lowe-info">
              <h2>{item.title}</h2>
              <p className="desc">{item.desc}</p>

              <ul>
                {item.points.map((p, i) => (
                  <li key={i}>
                    <span className="icon">{p.icon}</span>
                    {p.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
     </PageTransition>
  );
}
