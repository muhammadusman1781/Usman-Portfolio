import { Box, Container } from "@mui/material";
import SectionHeader from "../Section/SectionHeader";
import { section } from "../Style";
import PortfolioTabs from "./PortfolioTabs";
import AllProjects from "./AllProjects";
export default function PortfolioSection() {
  return (
    <Box id="portfolio" component="section" sx={section}>
      <Container>
        <SectionHeader heading="PORTFOLIO" subHeading="MY Casessss" />
        {/* Filter Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            mt: 3,
            mb: 1,
          }}
        >
          <Box component="button"
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              border: "none",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            VR
          </Box>
          <Box component="button"
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              border: "none",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            AR
          </Box>
          <Box component="button"
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              border: "none",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Multiplayer
          </Box>
          <Box component="button"
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              border: "none",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Hypercasual
          </Box>
        </Box>
        <Box
          sx={{
            py: 5,
          }}
        >
          <AllProjects />
        </Box>
      </Container>
    </Box>
  );
}
