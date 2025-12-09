import { motion } from "framer-motion";
import img1 from "../assets/Images/CeramicFrit1.jpg";
import img2 from "../assets/Images/controlSolarGain.jpg";
import img3 from "../assets/Images/PatternOptions.jpg";
import img4 from "../assets/Images/permanentColor.jpg";

function Ceramic() {
  const pageStyle = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    background: "#d8d8daff",
    minHeight: "100vh",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  };

  const boxStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
  };

  const listStyle = {
    marginTop: "10px",
    fontSize: "16px",
    paddingLeft: "20px",
    lineHeight: "1.5",
  };

  return (
    <div style={pageStyle}>
      
      {/* Fade-in Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "80px 20px",
          color: "#0d0a0aff"
        }}
      >
        <h1 style={titleStyle}>Ceramic Frit & Back-Painted Glass</h1>

        <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px auto" }}>
          Ceramic frit is a baked-on, non-fading ceramic enamel permanently fused onto the glass
          surface during the tempering process.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div style={gridStyle}>

        {/* Fade-in box animation settings */}
        {[
          {
            title: "Permanent Color",
            img: img1,
            items: [
              "Fired at ~650°C, bonds permanently with the glass",
              "Does not fade, peel, or discolor",
              "UV & weather resistant"
            ]
          },
          {
            title: "Pattern Options",
            img: img4,
            items: ["Dots, lines, squares", "Custom patterns & branding", "Logos and branding", "Full-color coverage available"]
          },
          {
            title: "Durability",
            img: img3,
            items: ["Scratch-resistant", "Chemical-resistant", "Suitable for interior & exterior use"]
          },
          {
            title: "Control of Solar Gain",
            img: img2,
            items: ["Reduces heat gain", "Helps minimize glare", "Ideal for building façades"]
          }
        ].map((box, index) => (
          <motion.div
            key={index}
            style={boxStyle}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h2>{box.title}</h2>
            <ul style={listStyle}>
              <img
  src={box.img}
  alt={box.title}
  style={{
    width: "100%",
    height: "240px",      // FIXED HEIGHT
    objectFit: "cover",   // CROPS to fit
    borderRadius: "15px",
    marginBottom: "20px",
  }}
/>

              {box.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Key Features Box */}
        <motion.div
          style={boxStyle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <h2>Key Features</h2>
          <ul style={listStyle}>
            <li>Uniform Opaque Finish</li>
            <li>UV Stability & Moisture Resistance</li>
            <li>Customization</li>
            <li>Not Fused like Ceramic Frit</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}

export default Ceramic;
