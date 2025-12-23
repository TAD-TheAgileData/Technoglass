import "./Architectural.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import heroImg from "../assets/images/Insulated Glass.jpg";
import img1 from "../assets/images/Low-E & Solar Control Glass.jpg";
import img2 from "../assets/images/Insulated Glass.jpg";
import img3 from "../assets/images/Laminated Glass.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ArchitecturalGlass() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section
        className="hero material-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Architectural Glass</h1>
          <h2>Engineered for Strength and Design</h2>
          <p>
            High-performance architectural glass for facades,
            commercial buildings, and modern infrastructure.
          </p>
        </motion.div>
      </section>

      {/* CARD SECTION */}
      <section className="card-section material-section">
        <h2 className="card-title">Types of Architectural Glass</h2>
        <motion.div
          className="card-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { img: img1, title: "Low-E & Solar Control Glass", path: "/glass/lowe" },
            { img: img2, title: "Insulated Glass", path: "/glass/insulated" },
            { img: img3, title: "Laminated Glass", path: "/glass/laminated" }
          ].map((card, i) => (
            <motion.div
              key={i}
              className="image-card material-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(0,0,0,0.25)" }}
              onClick={() => navigate(card.path)}
            >
              <img src={card.img} alt={card.title} />
              <h4>{card.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SPECIFICATION */}
      <motion.section
        className="spec-section material-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="spec-title">Specification</h2>
        <p>
          Laminated glass is a type of safety glass that holds together when shattered.
          It has an interlayer, typically of polyvinyl (PVB) or EVA, between two or more layers.
          It produces a characteristic "Spider Web" cracking pattern.
        </p>
        <ul>
          <li>Used in human impact zones or where glass could fall.</li>
          <li>Ideal for architectural applications, skylights, and windshields.</li>
          <li>Increases sound insulation rating.</li>
          <li>Hurricane-resistant constructions and exterior storefronts.</li>
          <li>Barrak Glass Factory has state-of-the-art automated lines with autoclave.</li>
        </ul>
      </motion.section>
    </>
  );
}
