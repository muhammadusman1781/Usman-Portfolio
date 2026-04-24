import TextRewriteSlide from "../Animations/TextRewriteSlide";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import {
  BounceInFwd,
  GlitchAnime,
  animatedGradiant,
} from "../Animations/Keyframes";
import ParticlesHeroSec from "../Animations/ParticlesHeroSec";
import SubHeader from "../SubHeader";
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
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: { xs: "auto", md: "78vh" },
            py: { xs: 11, md: 8 },
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
              <SubHeader text="Hello I`m" />
              <Typography
                variant="h2"
                sx={{
                  // animation: `${GlitchAnime} 500ms linear infinite`,
                  fontWeight: "900",
                  fontSize: { md: "58px", xs: "40px" },
                  lineHeight: { md: "72px", xs: "52px" },
                  color: "#fff",
                  py: { md: 0, xs: 1.5 },
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
              <TextRewriteSlide />
              <SocialIcon />
              <Box display={"none"}>
                <Link href="/FullStack-Developer.pdf" target="_blank">
                  <MUIButton>Download CV</MUIButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                maxWidth: { xs: 280, sm: 360, md: 420 },
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
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: 0,
            zIndex: -1,
            opacity: 0.03,
            fontSize: "7rem",
            fontFamily: "Caveat",
            fontWeight: 800,
            overflow: "hidden",
            display: { md: "block", sm: "none", xs: "none" },
          }}
        >
          Game Developer
        </Box>
        <Box
          component="span"
          sx={{
            position: "absolute",
            bottom: -20,
            zIndex: -1,
            opacity: 0.03,
            fontSize: "7rem",
            fontFamily: "Caveat",
            fontWeight: 800,
            overflow: "hidden",
            display: { md: "block", sm: "none", xs: "none" },
          }}
        >
          Unity Game Developer
        </Box>
      </Container>
    </Box>
  );
}

export default memo(HeroSection);
