import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

import Dummy1 from "../assets/Images/vlt2.jpg";
import Dummy2 from "../assets/Images/vlt2.jpg";
import Dummy3 from "../assets/Images/vlt2.jpg";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerParent = {
  visible: { transition: { staggerChildren: 0.25 } },
};

/* ---------------- Counter Component ---------------- */

function Counter({ end, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(end / 80);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <div className="stat-box">
      <div className="stat-number">{count.toLocaleString()}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
// product
/* ---------------- Animation Variants ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const products = [
  { title: "All Passenger Cars", image: Dummy1, color: "#B5963F" },
  { title: "Buses and Coaches", image:  Dummy2, color: "#2E7D7B" },
  { title: " Trucks", image:  Dummy2, color: "#B85C5C" },
  { title: "Special Cars and Vans", image: Dummy1, color: "#607D8B" },
  { title: "Windscreens", image: Dummy2, color: "#7B4A63" },
  { title: "Automotive Bullet Resistant Glass", image:  Dummy2, color: "#0288D1" },
];

  // Internation 
const titleVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
/* ---------------- Home ---------------- */

const Home = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { end: 750, label: "Our Clients" },
    { end: 580, label: "Our Projects" },
    { end: 30, label: "Experience" },
    { end: 140, label: "Countries" },
  ];

  /* Detect when counter section enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStartCount(true),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ---------------- Why Choose ---------------- */}

      <section className="home-section">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose Technoglass?
        </motion.h2>

        <motion.p
          className="section-para"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          30+ years of excellence in glass manufacturing
        </motion.p>

        <motion.div
          className="cards-row"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[Dummy1, Dummy2, Dummy3].map((img, i) => (
            <motion.div
              key={i}
              className="info-card"
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
            >
              <img src={img} alt="card" className="card-img" />
              <h3 className="card-title">
                {i === 0
                  ? "Advanced Manufacturing"
                  : i === 1
                  ? "Quality Assured"
                  : "Proven Track Record"}
              </h3>
              <p className="card-text">
                {i === 0 &&
                  "State-of-the-art facilities with 50,000+ tons annual capacity."}
                {i === 1 &&
                  "ISO certified processes with strict quality controls."}
                {i === 2 &&
                  "500+ satisfied clients across regions."}
              </p>
              <Link to="/" className="card-link">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- Stats Section (IMAGE STYLE) ---------------- */}

      <section className="stats-section" ref={sectionRef}>
        <div className="stats-container">
          {stats.map((item, index) => (
            <Counter
              key={index}
              end={item.end}
              label={item.label}
              start={startCount}
            />
          ))}
        </div>
      </section>

      {/* ---------------- Differentiators ---------------- */}

      <section className="differentiators-section">
        <motion.h2
          className="diff-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Key Differentiators
        </motion.h2>

        {[
          ["🌍", "Global Reach, Local Expertise"],
          ["🧪", "Continuous Innovation"],
          ["🤝", "Strategic Partnerships"],
        ].map(([icon, title], i) => (
          <motion.div
            key={i}
            className="diff-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="diff-icon">{icon}</div>
            <div>
              <h3>{title}</h3>
              <p>
                Delivering excellence with strong partnerships and innovation.
              </p>
            </div>
          </motion.div>
        ))}
      </section>


     <section style={section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={title}
      >
        OUR PRODUCTS
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={grid}
      >
        {products.map((item, i) => (
          <motion.div
            key={i}
            variants={cardAnim}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={card}
          >
            {/* Header */}
            <div
              style={{
                ...cardHeader,
                background: item.color,
              }}
            >
              {item.title}
            </div>

            {/* Image */}
            <div style={imageWrap}>
              <motion.img
                src={item.image}
                alt={item.title}
                style={image}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            {/* Button */}
            <div style={btnWrap}>
              <button style={button}>View More</button>
            </div>
          </motion.div>
))}
      </motion.div>
    </section>
  



         
       
  
      {/* ================= International Customers ================= */}
{/* -------- International Customers -------- */}<motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={titleVariant}
      style={{ textAlign: "center", marginBottom: "40px" }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "800",
          letterSpacing: "1.5px",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        INTERNATIONAL CUSTOMERS
      </h2>

      {/* animated underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          height: "4px",
          background: "linear-gradient(90deg,#007BFF,#5A00FF)",
          margin: "0 auto",
          borderRadius: "4px",
        }}
      />
    </motion.div>
<motion.section
  className="international-customers"
  variants={staggerParent}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  style={{
    padding: "80px 20px",
    background: "#F9FAFB",
    marginTop: "80px",
  }}
>
 
  <motion.div
    variants={staggerParent}
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
    }}
  >
    {[
      "Master Auto Glass (UK)",
      "Technoglass SARL (Morocco)",
      "Expert Auto (Tunis)",
      "Vetrauto Glass (Italy)",
      "Saint Gobain (Greece)",
      "Nikel Glass (Kuwait)",
      "Afrigue Pare Brise (Senegal)",
      "Lion Auto (Mali)",
      "Wolde Abzaw Importer (Ethiopia)",
      "Petfrim Ltd (Ghana)",
      "Myjoan Trading PLC (Ethiopia)",
    ].map((customer, index) => (
      <motion.div
        key={index}
        variants={fadeUp}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={{
          background: "#FFFFFF",
          padding: "20px",
          borderRadius: "14px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          fontSize: "16px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {customer}
      </motion.div>
    ))}
  </motion.div>
</motion.section>

    </>
  );
};

export default Home;



/* -------------------- Styles -------------------- */
const section = {
  padding: "80px 20px",
  background: "#F6F7F9",
};

const title = {
  textAlign: "center",
  fontSize: "34px",
  fontWeight: "800",
  marginBottom: "60px",
  letterSpacing: "2px",
};

const grid = {
  maxWidth: "1300px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
};

const card = {
  background: "#fff",
  borderRadius: "22px",
  overflow: "hidden",
  boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
};

const cardHeader = {
  color: "#fff",
  fontSize: "18px",
  fontWeight: "700",
  padding: "16px",
  textAlign: "center",
};

const imageWrap = {
  overflow: "hidden",
};

const image = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
};

const btnWrap = {
  padding: "18px",
  display: "flex",
  justifyContent: "center",
};

const button = {
  background: "#0A7ACC",
  color: "#fff",
  border: "none",
  padding: "10px 28px",
  borderRadius: "30px",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
};