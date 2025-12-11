import { motion } from "framer-motion";
import CEO from "../assets/Images/CEO.jpg";

// Partner logos
import logo1 from "../assets/Images/Technoglass.jpg";
import logo2 from "../assets/Images/Technoglass.jpg";
import logo3 from "../assets/Images/Technoglass.jpg";
import logo4 from "../assets/Images/Technoglass.jpg";
import logo5 from "../assets/Images/Technoglass.jpg";

const partnerLogos = [logo1, logo2, logo3, logo4, logo5];

export default function Company() {
  const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};
  const section = {
    maxWidth: "1200px",
    margin: "100px auto",
    padding: "0 25px",
    lineHeight: "1.8",
  };

  const title = {
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#0f172a",
  };

  const leaders = [
    { name: "Mr. Hashim Al Sheikh", role: "Chairman / CEO", img: CEO },
    { name: "Mr. Mousa El Gedaily", role: "Managing Director / COO", img: CEO },
    { name: "General Manager", role: "GM", img: CEO },
    { name: "Head of Engineering", role: "Engineering Lead", img: CEO },
    { name: "Head of R&D", role: "Research & Development", img: CEO },
  ];

  return (
    <div style={{ background: "#f8fafc", fontFamily: "Inter, Arial, sans-serif" }}>

      {/* ---------------- HEADER ---------------- */}
      <motion.div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "54px",
            fontWeight: "900",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          Company Profile
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontSize: "20px", marginTop: "12px", opacity: 0.9 }}
        >
          Excellence in Architectural Glass Since 1993
        </motion.p>
      </motion.div>

      {/* ---------------- OUR STORY ---------------- */}
      {/* ---------------- OUR STORY (LETTER BY LETTER ANIMATION) ---------------- */}

{/* // Animation variant for each letter */}


<motion.section
  style={{
    ...section,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "55px",
    alignItems: "center",
  }}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div>
    {/* ----------- LETTER BY LETTER HEADING ---------- */}
    <motion.h2
      style={title}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {"Our Story".split("").map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>

    {/* ----------- TEXT CONTENT ---------- */}
    <p style={{ fontSize: "18px", color: "#334155", marginBottom: "16px" }}>
      Since 1993, our journey has been defined by innovation, precision manufacturing,
      and a deep commitment to global architectural glass excellence.
    </p>

    <p style={{ fontSize: "18px", color: "#334155", marginBottom: "16px" }}>
      Guided by <b>Mr. Hashim Al Sheikh</b> and <b>Mr. Mousa El Gedaily</b>,
      we have expanded into a trusted global partner serving premium architectural,
      commercial, and industrial markets.
    </p>

    <p style={{ fontSize: "18px", color: "#334155" }}>
      We believe collaboration builds sustainable global relationships based on trust,
      performance, and long-term growth.
    </p>
  </div>

  {/* ----------- IMAGE BLOCK ---------- */}
  <motion.img
    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    alt="Our Story"
    style={{
      width: "100%",
      borderRadius: "16px",
      height: "380px",
      objectFit: "cover",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  />
</motion.section>

      {/* ---------------- LEADERSHIP ---------------- */}
      <motion.section
        style={{ maxWidth: "1100px", margin: "100px auto", padding: "10px" }}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "20px",
            color: "#0f172a",
          }}
        >
          Leadership
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 60px",
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.8",
          }}
        >
          Our leadership team brings together decades of innovation, engineering excellence,
          and industry-leading manufacturing experience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "45px",
          }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                textAlign: "center",
                background: "white",
                padding: "28px",
                borderRadius: "18px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.07)",
                border: "1px solid #e5e7eb",
              }}
            >
              <img
                src={leader.img}
                alt={leader.name}
                style={{
                  width: "100%",
    height: "240px",      // FIXED HEIGHT
    objectFit: "cover",   // CROPS to fit
    borderRadius: "15px",
    marginBottom: "20px",
                }}
              />

              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b" }}>
                {leader.name}
              </h3>

              <p style={{ color: "#64748b", marginTop: "6px", fontSize: "16px" }}>
                {leader.role}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
{/* ---------------- SUSTAINABILITY & ESG ---------------- */}
<motion.section
  style={{
    ...section,
    marginTop: "120px",
    marginBottom: "120px"
  }}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* LETTER BY LETTER TITLE */}
  <motion.h2
    style={title}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {"Sustainability & ESG".split("").map((letter, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterAnimation}
        style={{ display: "inline-block" }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h2>

  <p
    style={{
      fontSize: "18px",
      color: "#475569",
      marginBottom: "35px",
      maxWidth: "850px"
    }}
  >
    Our commitment to sustainability drives every stage of our manufacturing,
    design, and global operations — ensuring responsible production for future generations.
  </p>

  {/* ESG GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "30px",
      marginTop: "30px"
    }}
  >
    {[
      {
        title: "Energy-Efficient Buildings",
        text: "High-performance glass solutions that reduce energy consumption in modern architecture."
      },
      {
        title: "Lower-Carbon Glass Production",
        text: "Advanced furnaces, optimized firing systems, and reduced CO₂ emissions in manufacturing."
      },
      {
        title: "Zero-Waste Initiatives",
        text: "Glass recycling, raw-material optimization, and waste-free production practices."
      },
      {
        title: "Environmental Protection",
        text: "Sustainable sourcing, clean air standards, and eco-friendly facility operations."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        style={{
          background: "white",
          padding: "28px",
          borderRadius: "16px",
          boxShadow: "0 12px 35px rgba(0,0,0,0.07)",
          border: "1px solid #e2e8f0"
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#0f172a",
            marginBottom: "12px"
          }}
        >
          {item.title}
        </h3>

        <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7" }}>
          {item.text}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* ---------------- PARTNER WITH US ---------------- */}
      <motion.section
        style={section}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={title}>Partner With Us</h2>

        <p style={{ marginBottom: "25px", fontSize: "18px", color: "#334155" }}>
          We partner with developers, distributors, and international agencies to bring
          world-class architectural glass solutions to global markets.
        </p>

        <ul style={{ paddingLeft: "20px", marginBottom: "40px", color: "#475569" }}>
          <li>Fast, optimized production timelines</li>
          <li>Competitive priority pricing</li>
          <li>Full marketing & technical support</li>
          <li>Optional exclusive regional partnership</li>
        </ul>

        <h3 style={{ fontSize: "24px", marginBottom: "25px", fontWeight: "700" }}>
          Our Global Partners
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "35px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ rotateY: 180, scale: 1.1 }}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={logo}
                alt="Partner Logo"
                style={{ width: "100%", height: "80px", objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
