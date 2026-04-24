import {
  Box,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { BounceInFwd, animatedGradiant } from "../Animations/Keyframes";
import ParticlesHeroSec from "../Animations/ParticlesHeroSec";
import MUIButton from "../MUIButton";
import { memo } from "react";
import SocialIcon from "../Footer/SocialIcon";

function HeroSection() {
  const theme = useTheme();
  const tags = ["AR", "VR", "Multiplayer", "Hypercasual", "Educational", "Casino"];

  return (
    <Box component="section">
      <Container maxWidth="lg">
        <ParticlesHeroSec />
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: { xs: "auto", md: "62vh" },
            pt: { xs: 11, md: 10 },
            pb: { xs: 4, md: 5 },
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              zIndex: 1,
            }}
          >
            <Box
              component="div"
              sx={{
                textAlign: { xs: "center", md: "left" },
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: 700,
                  color: "primary.main",
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  mb: 1,
                }}
              >
                Crafting Interactive Experiences
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "900",
                  fontSize: { md: "46px", xs: "32px" },
                  lineHeight: { md: "56px", xs: "40px" },
                  color: "#fff",
                  py: { md: 0, xs: 1 },
                  textShadow:
                    "2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgb(0 0 0 / 20%)",
                  fontFamily: "Jost",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  Muhammad
                </Box>
                {" "}Usman
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  mb: 2,
                  maxWidth: 620,
                  mx: { xs: "auto", md: 0 },
                  color: "text.secondary",
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.75,
                }}
              >
                Unity game developer focused on AR, VR, and realtime multiplayer
                products for mobile, web, and Meta Quest. I turn ideas into
                production-ready experiences with clean gameplay architecture,
                stable networking, and user-first design.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: 2.5,
                }}
              >
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                }}
              >
                <Box component="a" href="#portfolio" sx={{ textDecoration: "none" }}>
                  <MUIButton>View Portfolio</MUIButton>
                </Box>
                <Box component="a" href="#services" sx={{ textDecoration: "none" }}>
                  <MUIButton>What I Do</MUIButton>
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <SocialIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: "relative",
                maxWidth: { xs: 220, sm: 260, md: 300 },
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(60deg, #F4F1DE, #29a587, #3D405B, #F2CC8F)",
                  borderRadius: 100,
                  backgroundSize: "300% 300%",
                  animation: `${BounceInFwd} 4s both,${animatedGradiant} 3s ease alternate infinite`,
                  margin: "auto",
                }}
              ></Box>
              <Box
                component="img"
                src="/assets/images/profile.jpg"
                sx={{
                  display: "block",
                  padding: "5px",
                  borderRadius: 100,
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  objectFit: "cover",

                  animation: `${BounceInFwd} 4s both`,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default memo(HeroSection);
