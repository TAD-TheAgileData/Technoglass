import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

import img1 from "../assets/images/Insulated Glass.jpg";
import img2 from "../assets/Images/vlt-img-2.jpg";
import img3 from "../assets/Images/vltimg3.jpg";
import heroImg from "../assets/Images/vltimg3.jpg";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

/* ================= COLOR THEME ================= */
const COLORS = {
  crystalWhite: "#FFFFFF",
  frostGray: "#D9D9D9",
  iceBlue: "#A7D8F0",
  cyanGlow: "#00BFFF",
  steelBlue: "#4682B4",
  deepNavy: "#1C2833",
  glassGreen: "#7FFFD4",
};

export default function Insulated() {
  const cards = [
    {
      img: img1,
      title: "Double & Triple Glazing",
      desc:
        "Multi-layer insulated glass engineered for superior thermal and acoustic performance.",
    },
    {
      img: img2,
      title: "Argon Gas Technology",
      desc:
        "Inert gas filling improves insulation efficiency and reduces energy loss.",
    },
    {
      img: img3,
      title: "Warm Edge Spacer",
      desc:
        "Advanced spacer systems that minimize condensation and improve durability.",
    },
  ];

  return (
    <Box sx={{ background: COLORS.deepNavy }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", md: "95vh" },
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Glass overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(28,40,51,0.65), rgba(0,0,0,0.5))",
            backdropFilter: "blur(10px)",
          }}
        />

        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          sx={{
            position: "relative",
            textAlign: "center",
            maxWidth: 760,
            px: 3,
          }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              fontSize: { xs: "36px", md: "52px" },
              color: COLORS.crystalWhite,
              mb: 2,
            }}
          >
            Next-Gen Insulated Glass
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: COLORS.frostGray,
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            Precision-engineered insulated glazing solutions designed for modern
            architecture, sustainability, and indoor comfort.
          </Typography>
        </MotionBox>
      </Box>

      {/* ================= TECHNOLOGY CARDS ================= */}
      <Container sx={{ py: 12 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={8}
          sx={{ color: COLORS.crystalWhite }}
        >
          Our Glass Technologies
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {cards.map((item, i) => (
            <MotionCard
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: `0 40px 90px ${COLORS.cyanGlow}44`,
              }}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
                gap: 4,
                alignItems: "center",
                borderRadius: "26px",
                background: "rgba(167,216,240,0.12)", // Ice Blue glass
                backdropFilter: "blur(16px)",
                border: `1px solid ${COLORS.steelBlue}`,
                p: 4,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glass texture */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    'url("https://grainy-gradients.vercel.app/noise.svg")',
                  opacity: 0.08,
                  pointerEvents: "none",
                }}
              />

              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: { xs: 180, md: 230 },
                  objectFit: "cover",
                  borderRadius: "22px",
                  zIndex: 1,
                }}
              />

              <CardContent sx={{ zIndex: 1 }}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  mb={1}
                  sx={{ color: COLORS.cyanGlow }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: COLORS.frostGray,
                    lineHeight: 1.8,
                  }}
                >
                  {item.desc}
                </Typography>

                {/* Accent line */}
                <Box
                  sx={{
                    width: 70,
                    height: 4,
                    background: COLORS.glassGreen,
                    borderRadius: 2,
                    mt: 2,
                  }}
                />
              </CardContent>
            </MotionCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
