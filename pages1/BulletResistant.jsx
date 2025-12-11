import React from "react";
import bgImage from "../assets/Images/bulletglass.jpg"; // <-- Add a glass-themed background

export default function BulletResistant() {
  const pageStyle = {
    padding: "60px 20px",
    fontFamily: "Arial, sans-serif",
    background: `url(${bgImage}) center/cover fixed`,
    minHeight: "100vh",
    animation: "fadeIn 1.2s ease",
  };

  const overlayStyle = {
    background: "rgba(240, 244, 250, 0.85)",
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(5px)",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "38px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#0d1b2a",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  };

  const boxStyle = {
    background: "white",
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "0px 6px 18px rgba(0,0,0,0.15)",
    transition: "0.3s ease",
    cursor: "pointer",
    animation: "fadeInUp 1s ease",
  };

  const boxHover = {
    transform: "scale(1.03)",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
  };

  const listStyle = {
    marginTop: "10px",
    fontSize: "16px",
    paddingLeft: "20px",
    lineHeight: "1.5",
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const sections = [
    {
      title: "International Standards",
      items: ["NIJ Standard", "UL 752 Certification", "EN 1063 Ballistic Compliance"],
    },
    {
      title: "Construction",
      items: [
        "Multi-layer Laminated Glass",
        "High Impact Absorption",
        "PVB/SGP Interlayer Options",
      ],
    },
    {
      title: "Protection Levels",
      items: ["BR1 to BR7", "Handgun to Rifle Resistance", "Optional Anti-Spall Layer"],
    },
    {
      title: "Applications",
      items: ["Banks", "Embassies", "Cash Counters", "Defense Facilities", "VIP Zones"],
    },
  ];

  return (
    <div style={pageStyle}>
      {/* Overlay Card Background */}
      <div style={overlayStyle}>
        <h1 style={titleStyle}>Bullet-Resistant Glass</h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 40px auto",
            color: "#1b263b",
            fontSize: "18px",
          }}
        >
          High-security laminated glazing engineered for ballistic and impact protection.
        </p>

        {/* Grid */}
        <div style={gridStyle}>
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                ...boxStyle,
                ...(hoveredIndex === index ? boxHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 style={{ fontSize: "22px", marginBottom: "10px", color: "#0a1a2f" }}>
                {section.title}
              </h2>
              <ul style={listStyle}>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
