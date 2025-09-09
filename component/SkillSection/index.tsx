import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
  Grid,
  Divider,
} from "@mui/material";
import SectionHeader from "../Section/SectionHeader";
import SkillsCard from "../Section/SkillsCard";
import { section } from "../Style";
const skillsCardData = [
  {
    heading: "Unity",
    percentage: 90,
  },
  {
    heading: "C#",
    percentage: 90,
  },
  {
    heading: "APIs integration",
    percentage: 90,
  },
  {
    heading: "Third Parties SDKs",
    percentage: 90,
  },
  {
    heading: "Sockets Integrations",
    percentage: 85,
  },
  {
    heading: "Multiplayer games",
    percentage: 90,
  },
  {
    heading: ".NET",
    percentage: 80,
  },
  {
    heading: "Optimization",
    percentage: 85,
  },
  {
    heading: "2D",
    percentage: 80,
  },
  {
    heading: "3D",
    percentage: 90,
  },
  {
    heading: "Team Leadership",
    percentage: 90,
  },
  {
    heading: "Project Management",
    percentage: 90,
  },
  {
    heading: "Client Relationship",
    percentage: 85,
  },
  {
    heading: "Git",
    percentage: 80,
  },
  {
    heading: "Project Management Tools",
    percentage: 90,
  },
];
export default function SkillSection() {
  const theme = useTheme();
  return (
    <Box id="skills" component="section" sx={section}>
      <Container>
        <SectionHeader heading="PROFESSIONAL SKILLS" subHeading="MY TALENT" />
        <Box
          sx={{
            py: 5,
          }}
        >
          <Grid container spacing={4}>
            {skillsCardData.map((val, index) => (
              <Grid
                item
                md={4}
                sx={{
                  width: "100%",
                }}
              >
                <SkillsCard heading={val.heading} percentage={val.percentage} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
