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
      {/* ================= HERO ================= */}
      <section
        className="hero material-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Architectural Glass</h1>
          <h2>Engineered for Strength & Design</h2>
          <p>
            High-performance architectural glass for facades, commercial
            buildings, and modern infrastructure.
          </p>
        </motion.div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="material-section">
        <h2 className="card-title">Types of Architectural Glass</h2>

        <motion.div
          className="card-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.25 }}
        >
          {[
            { img: img1, title: "Low-E & Solar Control Glass", path: "/glass/lowe" },
            { img: img2, title: "Insulated Glass", path: "/glass/insulated" },
            { img: img3, title: "Laminated Glass", path: "/glass/laminated" },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="material-card"
              variants={cardVariants}
              whileHover={{ scale: 1.06 }}
              onClick={() => navigate(card.path)}
            >
              <img src={card.img} alt={card.title} />
              <h4>{card.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SPECIFICATION ================= */}
      <motion.section
        className="spec-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="spec-title">Specification</h2>

        <p>
          Laminated glass is a safety glass that holds together when shattered.
          An interlayer such as PVB or EVA provides strength, sound insulation,
          and impact resistance.
        </p>

        <ul>
          <li>Human impact and fall-risk zones</li>
          <li>Architectural facades and skylights</li>
          <li>Enhanced sound insulation</li>
          <li>Hurricane and security resistance</li>
          <li>Advanced autoclave processing lines</li>
        </ul>
      </motion.section>
    </>
  );
}
