import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import SectionHeader from "../Section/SectionHeader";
import { section } from "../Style";

const skillsGroups = [
  {
    heading: "Game Development Core",
    points: ["Unity Engine", "C#", "2D & 3D Gameplay", "Performance Optimization"],
  },
  {
    heading: "Networking & Systems",
    points: [
      "Photon Fusion & Photon PUN",
      "WebSockets Integration",
      "REST API Integration",
      "Third-Party SDK Integration",
    ],
  },
  {
    heading: "Platforms & Delivery",
    points: [
      "Android, iOS, WebGL, PC",
      "Meta Quest 2 & 3 (VR)",
      "Version Control with Git",
      "Build, Testing, and Deployment",
    ],
  },
  {
    heading: "Leadership & Collaboration",
    points: [
      "Team Leadership",
      "Project Planning & Ownership",
      "Client Communication",
      "Cross-Functional Collaboration",
    ],
  },
  {
    heading: "AI-Accelerated Development",
    points: [
      "AI-assisted game architecture planning",
      "Faster feature prototyping and implementation",
      "Workflow acceleration with AI coding assistants",
      "Tools: Cursor, Bézi, Codex, Claude Sonnet, Claude Opus",
    ],
  },
];

export default function SkillSection() {
  return (
    <Box id="skills" component="section" sx={section}>
      <Container>
        <SectionHeader heading="PROFESSIONAL SKILLS" subHeading="Core Strengths" />
        <Box
          sx={{
            py: 5,
          }}
        >
          <Grid container spacing={3}>
            {skillsGroups.map((group, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      mb: 1.5,
                    }}
                  >
                    {group.heading}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                    {group.points.map((point) => (
                      <Box component="li" key={point} sx={{ mb: 0.75 }}>
                        <Typography variant="body1">{point}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
