import { Box, Container, Typography } from "@mui/material";
import { section } from "../Style";
import SocialIcon from "./SocialIcon";
export default function Footer() {
  return (
    <Box
      component="section"
      sx={{
        ...section,
        borderTop: "1px solid",
        borderColor: "divider",
        pt: 3,
      }}
    >
      <Container>
        <Box
          display="flex"
          justifyContent={{ md: "space-between", xs: "space-around" }}
          flexWrap="wrap"
          sx={{
            alignItem: "center",
            gap: 1.5,
          }}
        >
          <SocialIcon />
          <Box>
            <Typography sx={{ color: "text.secondary" }}>
              © 2022 <Box component="span">Usman</Box>. All Right Reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
