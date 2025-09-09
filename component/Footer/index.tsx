import { Box, Container, Typography, useTheme } from "@mui/material";
import { section } from "../Style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialIcon from "./SocialIcon";
const iconStyle = {
  mx: 1,
  borderRadius: "20px",
  padding: "5px",
  fontSize: "40px",
  "&:hover": {
    cursor: "pointer",
    color: "#fff",
    background: "#29a587",
    transition: "color 0.5s, background 0.5s",
  },
};
export default function Footer() {
  const theme = useTheme();
  return (
    <Box component="section" sx={section}>
      <Container>
        <Box
          display="flex"
          justifyContent={{ md: "space-between", xs: "space-around" }}
          flexWrap="wrap"
          sx={{
            alignItem: "center",
          }}
        >
          <SocialIcon />
          <Box>
            <Typography>
              © 2022 <Box component="span">Usman</Box>. All Right Reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
