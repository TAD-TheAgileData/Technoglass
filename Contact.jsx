// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";


export default function ContactPage() {
  const [form, setForm] = useState({
    drawings: null,
    glassSpecs: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFile = (e) => {
    setForm((s) => ({ ...s, drawings: e.target.files[0] || null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted (demo)");
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };
const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      style={{ fontFamily: "Inter, Arial, sans-serif" }}
      className="relative min-h-screen overflow-hidden bg-[#F4F6F9] text-black"
    >

      {/* ------- Premium animated background (white theme) ------- */}
<div
  className="absolute inset-0"
  aria-hidden
  style={{ pointerEvents: "none" }}
>
  {/* subtle gradient glows */}
  <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 20% 30%, rgba(0,150,255,0.10), transparent 45%)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 80% 70%, rgba(140,60,255,0.10), transparent 45%)",
        pointerEvents: "none",
      }}
    />
  </div>

  {/* animated white shimmer */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.08, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.25), transparent 35%)",
      mixBlendMode: "screen",
      filter: "blur(16px)",
      pointerEvents: "none",
    }}
  />

  {/* soft grid */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
      backgroundSize: "70px 70px",
      opacity: 0.5,
      pointerEvents: "none",
    }}
  />
</div>


      {/* ---------------- Main Page Content ---------------- */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            textAlign: "center",
            color: "#000",
          }}
          className="mb-12"
        >
          Contact & Support
        </motion.h1>

        {/* ----------- 6.1 Request Quote -------------- */}
       

        <motion.form
          onSubmit={handleSubmit}
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#FFFFFF",
            borderRadius: 20,
            padding: 28,
            border: "1px solid #E5E7EB",
            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
            marginBottom: 28,
            color: "black",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 6,
                height: 40,
                background: "linear-gradient(180deg,#007BFF,#5A00FF)",
                borderRadius: 6,
              }}
            />
            <div>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                Request a Project Quote
              </h2>
              <p style={{ margin: 0, color: "#555" }}>
                Upload drawings, enter glass specs and submit contact details.
              </p>
            </div>
          </div>

          {/* Upload file */}
          {/* Upload file with drag & drop */}
<div style={{ marginTop: 20 }}>
  <label className="font-semibold block mb-1 text-black">
    Upload Drawings
  </label>

  {/* Drag & Drop Box */}
  <div
    onDragOver={(e) => {
      e.preventDefault();
      setIsDragging(true);
    }}
    onDragLeave={() => setIsDragging(false)}
    onDrop={(e) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      setForm((s) => ({ ...s, drawings: file }));
    }}
    onClick={() => document.getElementById("fileInput").click()}
    style={{
      width: "100%",
      padding: "30px",
      borderRadius: 14,
      border: isDragging
        ? "2px dashed #007BFF"
        : "2px dashed #C9C9C9",
      background: isDragging ? "#E9F3FF" : "#F8F9FA",
      textAlign: "center",
      color: "#000",
      cursor: "pointer",
      transition: "0.2s",
    }}
  >
    {form.drawings ? (
      <strong>{form.drawings.name}</strong>
    ) : (
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Drag & Drop your file</p>
        <p style={{ margin: 0, fontSize: 13 }}>or click to browse</p>
      </div>
    )}
  </div>

  {/* Hidden File Input */}
  <input
    id="fileInput"
    type="file"
    onChange={(e) =>
      setForm((s) => ({ ...s, drawings: e.target.files[0] }))
    }
    style={{ display: "none" }}
  />
</div>


          {/* Glass Specs */}
          <div className="mt-4">
            <label className="font-semibold block mb-1 text-black">
              Glass Specifications
            </label>
            <textarea
              name="glassSpecs"
              rows="4"
              value={form.glassSpecs}
              onChange={handleChange}
              placeholder="Example: 6mm + 6mm laminated, Low-E, IGU, etc."
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 12,
                background: "#F8F9FA",
                border: "1px solid #DDD",
                color: "#000",
              }}
            ></textarea>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle()}
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle()}
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle()}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              marginTop: 20,
              width: "100%",
              padding: "14px 18px",
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(90deg,#007BFF,#0053D6)",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(0,80,255,0.25)",
            }}
          >
            Submit Quote Request
          </motion.button>
        </motion.form>

        {/* -------- 6.2 International Sales -------- */}
        <motion.section
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={cardBoxStyle()}
        >
          <h3 className="font-bold text-xl">International Sales</h3>
          <p>Dedicated global sales team supporting distributors and projects worldwide.</p>
        </motion.section>

        {/* -------- 6.3 Technical Support -------- */}
        <motion.section
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={cardBoxStyle()}
        >
          <h3 className="font-bold text-xl">Technical Support</h3>
          <p>Engineering assistance with a typical response time of 24–48 hours.</p>
        </motion.section>

        {/* -------- 6.4 Location & Map -------- */}
        <motion.section
  variants={cardVariant}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  style={cardBoxStyle()}
>
  <h3 className="font-bold text-xl">Location & Map</h3>
  <p>Visit our manufacturing plant and corporate office.</p>

  <div className="mt-3 rounded-xl overflow-hidden border border-gray-300">
    <iframe
      title="Factory Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623524.529737358!2d43.81525861370253!3d23.88594238947214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156e59c09dcf1e0f%3A0x4f4f49e5c060e7f2!2sSaudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
      style={{ width: "100%", height: 300, border: 0 }}
      loading="lazy"
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</motion.section>


      </div>
    </div>
  );
}

/* -------------------- Helper Styles -------------------- */
function cardBoxStyle() {
  return {
    background: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    border: "1px solid #E5E7EB",
    color: "black",
    boxShadow: "0 10px 35px rgba(0,0,0,0.07)",
    marginBottom: 22,
  };
}

function inputStyle() {
  return {
    padding: 12,
    width: "100%",
    borderRadius: 12,
    border: "1px solid #DDD",
    background: "#F8F9FA",
    color: "black",
    outline: "none",
  };
}
