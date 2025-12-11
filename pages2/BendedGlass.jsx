import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import headerImg from "../assets/Images/CurvedBendedGlass.jpg"; // Background image
import Img1 from "../assets/Images/CurvedBendedGlass.jpg";

// Animation for letter-by-letter title
const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } })
};

export default function BendedGlass() {
  const page = {
    fontFamily: "Arial, sans-serif",
    background: "#f1f5f9",
    minHeight: "100vh"
  };

  const header = {
    height: "300px",
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "0 4px 16px rgba(0,0,0,0.6)",
    fontSize: "42px",
    fontWeight: "bold",
    gap: "8px"
  };

  const section = {
    maxWidth: "1050px",
    margin: "50px auto",
    padding: "20px"
  };

  const card = {
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    lineHeight: "1.7",
    fontSize: "17px"
  };

  const partGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    marginBottom: "70px"
  };

  // Title parts
  const title1 = "Curved / Bended Glass";
  const title2 = "Manufacturing Technology";
  const title3 = "Applications & Advantages";

  return (
    <div style={page}>
      {/* HEADER */}
      <motion.div
        style={header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {title1.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariant}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* PART 1 — PRODUCT DESCRIPTION */}
      <motion.section
        style={{ ...section, ...partGrid }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div>
          <h2>
            {"Our Product ".split("").map((c, i) => (
              <motion.span key={i} custom={i} variants={letterVariant} initial="hidden" whileInView="visible">
                {c}
              </motion.span>
            ))}
          </h2>

          <p>
            Architectural curved glass engineered for iconic façades and custom-designed
            projects. Precision bending ensures smooth curvature and exceptional clarity.
          </p>

          <ul>
            <li>Tight-radius precision curvature</li>
            <li>Available in small, medium, and large-format bending</li>
            <li>Compatible with structural glazing systems</li>
            <li>Ideal for skylights, façades, railings & atriums</li>
          </ul>
        </div>

        <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable={true} glareColor="lightblue">
          <motion.img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Curved Glass"
            style={{ width: "100%", borderRadius: "16px", height: "380px", objectFit: "cover" }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </Tilt>
      </motion.section>

      {/* PART 2 — TECHNOLOGY */}
      <motion.section
        style={{ ...section, ...partGrid, direction: "rtl" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}> 
          <motion.img
            src={Img1}
            alt="Technology"
            style={{ width: "100%", borderRadius: "16px", height: "380px", objectFit: "cover" }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </Tilt>

        <div style={{ direction: "ltr" }}>
          <h2>
            {title2.split("").map((c, i) => (
              <motion.span key={i} custom={i} variants={letterVariant} initial="hidden" whileInView="visible">
                {c}
              </motion.span>
            ))}
          </h2>

          <p>
            Our advanced furnace technology allows smooth, distortion-free bending
            with temperature-controlled shaping and automated calibration.
          </p>

          <ul>
            <li>Precision thermal profiling</li>
            <li>High-pressure forming molds</li>
            <li>Robotic accuracy for consistent curvature</li>
            <li>Stress-resistant cooling chambers</li>
          </ul>
        </div>
      </motion.section>

      {/* PART 3 — APPLICATIONS */}
      <motion.section
        style={section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2>
          {title3.split("").map((c, i) => (
            <motion.span key={i} custom={i} variants={letterVariant} initial="hidden" whileInView="visible">
              {c}
            </motion.span>
          ))}
        </h2>

        <div style={card}>
          <ul>
            <li>Premium architectural façades</li>
            <li>Observation decks and skylights</li>
            <li>High-end interior partitions</li>
            <li>Curved display structures</li>
            <li>Modern atrium installations</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
