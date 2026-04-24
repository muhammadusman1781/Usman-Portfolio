import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  Container,
} from "@mui/material";
import { section } from "../Style";

const capabilityData = [
  {
    category: "Multiplayer",
    heading: "Multiplayer Games",
    description:
      "Design and development of realtime multiplayer games with matchmaking, private rooms, social lobbies, and stable networking using Photon Fusion, Photon PUN, and WebSockets.",
  },
  {
    category: "AR",
    heading: "Augmented Reality Experiences",
    description:
      "Marker-based and markerless AR apps for events, education, and branded activations with immersive interactions, multilingual support, and production-ready user flows.",
  },
  {
    category: "VR",
    heading: "VR Simulations & Training",
    description:
      "Immersive VR projects for Meta Quest 2/3 including firefighter drills, equipment training, and industrial demos with realistic interaction design and guided learning.",
  },
  {
    category: "Hypercasual",
    heading: "Hypercasual & Casual Games",
    description:
      "Fast-loop hypercasual concepts built for retention and replayability, with clean controls, progressive difficulty, and rapid prototyping from idea to release.",
  },
  {
    category: "Educational",
    heading: "Educational Game Systems",
    description:
      "Knowledge-focused interactive modules with scenario-based flow, visual explanations, and end-of-session question rounds for practical learning and onboarding.",
  },
  {
    category: "Casino",
    heading: "Casino & Real-Money Features",
    description:
      "Development of casino-style game logic, wallet integrations, probability balancing, and secure transaction-aware gameplay systems for competitive real-money ecosystems.",
  },
];
export default function ServiceSection() {
  return (
    <Box id="services" component="section" sx={section}>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "44px",
              lineHeight: 1.3,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            WHAT I DO
          </Typography>
          <Typography color="primary.main">Core Capabilities</Typography>
        </Box>
        <Box
          sx={{
            py: 5,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
            }}
          >
            {capabilityData.map((val, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    borderRadius: "20px",
                    boxShadow: "none",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.28s ease, border-color 0.28s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      borderRadius: "20px",
                      padding: "1px",
                      background:
                        "linear-gradient(130deg, rgba(93,125,255,0.45), rgba(122,88,232,0.35))",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                      pointerEvents: "none",
                    },
                    "&:hover": {
                      transform: "translateY(-6px)",
                      "&::before": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      my: 1,
                    }}
                  >
                    <Chip
                      label={val.category}
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        bgcolor: "rgba(93, 125, 255, 0.16)",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "20px",
                        mb: 1.5,
                        fontWeight: 700,
                      }}
                      component="div"
                    >
                      {val.heading}
                    </Typography>
                    <Typography variant="body2">{val.description}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
