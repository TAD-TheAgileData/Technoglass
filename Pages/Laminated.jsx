import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/images/Laminated Glass.jpg";
import img2 from "../assets/images/Laminated Glass.jpg";
import img3 from "../assets/images/Laminated Glass.jpg";

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
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "#1C2833", // Deep Navy
      }}
    >
      {/* ================= HEADER ================= */}
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
        {/* Glass overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(28, 40, 51, 0.65)", // Deep Navy overlay
            backdropFilter: "blur(8px)",
          }}
        />

        <motion.div
          style={{
            position: "relative",
            zIndex: 2,
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
              color: "#FFFFFF", // Crystal White
            }}
          >
            Laminated Glass
          </h1>

          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              color: "#D9D9D9", // Frost Gray
            }}
          >
            High-safety glazing with exceptional impact resistance
          </p>
        </motion.div>
      </motion.header>

      {/* ================= SECTIONS ================= */}
      {sections.map((sec, index) => (
        <motion.div
          key={index}
          className={`section ${sec.reverse ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* IMAGE */}
          <motion.div
            className="img-box"
            whileHover={{ scale: 1.05 }}
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

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 100px 10%;
          gap: 50px;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        /* Glass Card */
        .section-content {
          background: rgba(167, 216, 240, 0.12); /* Ice Blue */
          backdrop-filter: blur(14px);
          border-radius: 24px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 30px 60px rgba(0, 191, 255, 0.25); /* Cyan Glow */
          max-width: 520px;
        }

        .img-box {
          width: 550px;
          height: 380px;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 25px 60px rgba(70, 130, 180, 0.45); /* Steel Blue */
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h2 {
          font-size: 36px;
          margin-bottom: 15px;
          color: #FFFFFF; /* Crystal White */
          font-weight: 700;
        }

        p {
          font-size: 18px;
          color: #D9D9D9; /* Frost Gray */
          line-height: 1.8;
        }

        /* Optional accent */
        h2::after {
          content: "";
          display: block;
          width: 70px;
          height: 4px;
          margin-top: 12px;
          background: #7FFFD4; /* Glass Green */
          border-radius: 4px;
        }

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
