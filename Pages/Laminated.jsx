import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/images/Laminated Glass.jpg";
import img2 from "../assets/images/Laminated Glass.jpg";
import img3 from "../assets/images/Laminated Glass.jpg";

// Header background image
import headerBg from "../assets/Images/Laminated Glass.jpg";

export default function Laminated() {
  const sections = [
    {
      title: "Insulated Glass (IGU)",
      text: "Double & triple glazing engineered for thermal insulation, noise reduction, and energy efficiency.",
      img: img1,
      reverse: false,
    },
    {
      title: "Thermal & Acoustic Control",
      text: "IGUs designed with multi-layer construction and gas-filled cavities for maximum insulation performance.",
      img: img2,
      reverse: true,
    },
    {
      title: "Performance Glass",
      text: "Ultra-efficient performance glass engineered for comfort, safety, and long-term durability.",
      img: img3,
      reverse: false,
    },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#eef2f7" }}>
      {/* ======================= HEADER SECTION ======================= */}
      <motion.header
        style={{
          width: "100%",
          height: "70vh",
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
            top: 0,
            left: 0,
          }}
        ></div>

        <motion.div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            maxWidth: "850px",
            padding: "20px",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              letterSpacing: "-1px",
              background: "linear-gradient(90deg, #38bdf8, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Laminated Glass
          </h1>
          <p style={{ fontSize: "20px", marginTop: "10px", opacity: 0.9 }}>
            High-safety glazing with exceptional impact resistance
          </p>
        </motion.div>
      </motion.header>

      {/* ======================= THREE SECTIONS ======================= */}
      {sections.map((sec, index) => (
        <motion.div
          key={index}
          className={`section ${sec.reverse ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* IMAGE BOX – FIXED SIZE */}
          <motion.div
            className="img-box"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={sec.img} alt={sec.title} />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="section-content"
            initial={{ opacity: 0, x: sec.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>{sec.title}</h2>
            <p>{sec.text}</p>
          </motion.div>
        </motion.div>
      ))}

      {/* ======================= INLINE CSS ======================= */}
      <style jsx>{`
        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 100px 10%;
          gap: 50px;
          position: relative;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        /* 🔥 SAME IMAGE SIZE FOR ALL */
        .img-box {
          width: 550px;
          height: 380px;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          transition: 0.4s;
        }

        .section-content {
          flex: 1;
          max-width: 520px;
        }

        h2 {
          font-size: 36px;
          margin-bottom: 15px;
          color: #0f172a;
          font-weight: 700;
          background: linear-gradient(90deg, #38bdf8, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          font-size: 18px;
          color: #475569;
          line-height: 1.8;
          margin-top: 10px;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .section {
            flex-direction: column;
            text-align: center;
            padding: 60px 8%;
          }

          .reverse {
            flex-direction: column;
          }

          .img-box {
            width: 100%;
            height: 250px;
          }

          h2 {
            font-size: 28px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
