import { motion } from "framer-motion";
import img1 from "../assets/Images/CeramicFrit1.jpg";
import img2 from "../assets/Images/controlSolarGain.jpg";
import img3 from "../assets/Images/PatternOptions.jpg";
import img4 from "../assets/Images/permanentColor.jpg";

/* ================= COLORS ================= */
const COLORS = {
  crystalWhite: "#FFFFFF",
  frostGray: "#D9D9D9",
  iceBlue: "#A7D8F0",
  cyanGlow: "#00BFFF",
  steelBlue: "#4682B4",
  deepNavy: "#1C2833",
  glassGreen: "#7FFFD4",
};

/* ================= FONT ================= */
const FONT =
  '"Montserrat","Helvetica Neue","Futura","Roboto","Avenir",sans-serif';

/* ================= ANIMATIONS ================= */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageHover = {
  hover: {
    scale: 1.08,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */
export default function Ceramic() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.deepNavy,
        padding: "60px 8%",
        fontFamily: FONT,
      }}
    >
      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 26,
          padding: "100px 20px",
          position: "relative",
          marginBottom: 90,
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(28,40,51,0.92), rgba(0,0,0,0.75))",
            backdropFilter: "blur(6px)",
          }}
        />

        <div style={{ position: "relative", textAlign: "center" }}>
          <motion.h1
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              color: COLORS.crystalWhite,
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Ceramic Frit & Back-Painted Glass
          </motion.h1>

          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{
              width: 90,
              height: 3,
              background: COLORS.cyanGlow,
              margin: "26px auto",
              boxShadow: `0 0 14px ${COLORS.cyanGlow}`,
            }}
          />

          <p
            style={{
              maxWidth: 720,
              margin: "auto",
              fontSize: 17,
              fontWeight: 300,
              color: COLORS.iceBlue,
              lineHeight: 1.8,
              textTransform: "lowercase",
            }}
          >
            Ceramic frit is a baked-on, non-fading ceramic enamel permanently
            fused onto the glass surface during the tempering process.
          </p>
        </div>
      </motion.section>

      {/* ================= GRID ================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 34,
        }}
      >
        {[
          {
            title: "Permanent Color",
            img: img1, 
            loading:"lazy",
            items: [
              "Fired at ~650°c, bonds permanently with the glass",
              "Does not fade, peel, or discolor",
              "UV & weather resistant",
            ],
          },
          {
            title: "Pattern Options",
            img: img4,loading:"lazy",
            items: [
              "Dots, lines, squares",
              "Custom patterns & branding",
              "Logos and identity integration",
              "Full-color coverage available",
            ],
          },
          {
            title: "Durability",
            img: img3,loading:"lazy",
            items: [
              "Scratch-resistant surface",
              "Chemical-resistant coating",
              "Suitable for interior & exterior use",
            ],
          }
          
        ].map((box, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              boxShadow: `0 0 35px ${COLORS.cyanGlow}55`,
              borderColor: COLORS.cyanGlow,
            }}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))",
              backdropFilter: "blur(18px)",
              borderRadius: 22,
              padding: 26,
              border: "1px solid rgba(255,255,255,0.25)",
              transition: "border 0.4s ease",
            }}
          >
            <motion.img
              src={box.img} loading="lazy"
              alt={box.title}
              variants={imageHover}
              whileHover="hover"
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 16,
                marginBottom: 20,
              }}
            />

            <h2
              style={{
                color: COLORS.crystalWhite,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              {box.title}
            </h2>

            <ul
              style={{
                color: COLORS.frostGray,
                fontWeight: 300,
                paddingLeft: 20,
                textTransform: "lowercase",
                lineHeight: 1.7,
              }}
            >
              {box.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* ================= KEY FEATURES ================= */}
        <motion.div
          variants={cardVariants}
          style={{
            gridColumn: "1 / -1",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
            backdropFilter: "blur(18px)",
            borderRadius: 26,
            padding: 34,
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <h2
            style={{
              color: COLORS.glassGreen,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Key Features
          </h2>

          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{
              width: 70,
              height: 3,
              background: COLORS.steelBlue,
              margin: "16px 0 22px",
            }}
          />

          <ul
            style={{
              color: COLORS.frostGray,
              fontWeight: 300,
              paddingLeft: 20,
              textTransform: "lowercase",
              lineHeight: 1.7,
            }}
          >
            <li>Uniform opaque finish</li>
            <li>UV stability & moisture resistance</li>
            <li>High customization capability</li>
            <li>Permanent ceramic fusion</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
