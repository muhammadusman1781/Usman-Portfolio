import TextRewriteSlide from "../Animations/TextRewriteSlide";
import {
  Box,
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
  return (
    <Box component="section">
      <Container maxWidth="lg">
        <ParticlesHeroSec />
        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: { xs: "auto", md: "66vh" },
            pt: { xs: 12, md: 10 },
            pb: { xs: 6, md: 6 },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
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
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  color: "primary.main",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  mb: 1,
                }}
              >
                Unity Game Developer
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "900",
                  fontSize: { md: "52px", xs: "34px" },
                  lineHeight: { md: "62px", xs: "42px" },
                  color: "#fff",
                  py: { md: 0, xs: 1 },
                  textTransform: "uppercase",
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
                  Muhammad{" "}
                </Box>
                Usman
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  mb: 2.5,
                  maxWidth: 560,
                  mx: { xs: "auto", md: 0 },
                  color: "text.secondary",
                  fontSize: { xs: "15px", md: "17px" },
                  lineHeight: 1.7,
                }}
              >
                I build high-performance AR, VR, and multiplayer experiences for
                mobile, web, and Meta Quest platforms, with a strong focus on
                gameplay quality, networking stability, and real-world results.
              </Typography>

              <TextRewriteSlide />

              <Box
                sx={{
                  mt: 2.5,
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

              <Box sx={{ mt: 2.5 }}>
                <SocialIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                maxWidth: { xs: 240, sm: 300, md: 340 },
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
                  "&::after": {
                    content: '""',
                  },
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
