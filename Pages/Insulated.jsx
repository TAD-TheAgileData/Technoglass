import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

import img1 from "../assets/images/Insulated Glass.jpg";
import img2 from "../assets/Images/vlt-img-2.jpg";
import img3 from "../assets/Images/vltimg3.jpg";
import heroImg from "../assets/Images/vltimg3.jpg";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

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
    <Box sx={{ background: "#eef3f7", color: "#0f172a" }}>
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
          color: "#fff",
        }}
      >
        {/* Frosted overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.35))",
            backdropFilter: "blur(6px)",
          }}
        />
        {/* Hero Content */}
        <MotionBox
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          sx={{ position: "relative", textAlign: "center", maxWidth: 720 }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              fontSize: { xs: "36px", md: "52px" },
              lineHeight: 1.1,
              mb: 2,
              background: "linear-gradient(90deg, #38bdf8, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Next-Gen Insulated Glass
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#eef3f7",
              opacity: 0.9,
              fontSize: { xs: "16px", md: "20px" },
              maxWidth: 600,
              margin: "0 auto",
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
          sx={{
            background: "linear-gradient(90deg, #044865ff, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Glass Technologies
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {cards.map((item, i) => (
            <MotionCard
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                y: -8,
                boxShadow: "0 35px 80px rgba(0,0,0,0.18)",
                scale: 1.02,
              }}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
                gap: 4,
                alignItems: "center",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                p: 3,
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: { xs: 180, md: 220 },
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} mb={1}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </MotionCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
