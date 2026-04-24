import { Box, Container } from "@mui/material";
import SectionHeader from "../Section/SectionHeader";
import { section } from "../Style";
import PortfolioTabs from "./PortfolioTabs";
import AllProjects from "./AllProjects";
import { useState } from "react";
import { Tag } from "./data";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<"All" | Tag>("All");

  const btn = (label: Tag) => (
    <Box
      component="button"
      onClick={() => setFilter(label)}
      sx={{
        px: { xs: 2, md: 3 }, py: 1, borderRadius: 2, border: "none",
        bgcolor: filter === label ? "primary.dark" : "primary.main",
        color: "primary.contrastText",
        fontWeight: 600, fontSize: { xs: "0.9rem", md: "1rem" }, cursor: "pointer",
        transition: "background 0.2s",
        "&:hover": { bgcolor: "primary.dark" },
      }}
    >
      {label}
    </Box>
  );

  return (
    <Box id="portfolio" component="section" sx={section}>
      <Container>
        <SectionHeader heading="PORTFOLIO" subHeading="" />
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            justifyContent: "center",
            mt: 3,
            mb: 1,
            flexWrap: "wrap",
          }}
        >
          {/* Optional “All” button */}
          <Box component="button"
            onClick={() => setFilter('All')}
            sx={{
              px: { xs: 2, md: 3 }, py: 1, borderRadius: 2, border: "none",
              bgcolor: filter === 'All' ? "primary.dark" : "primary.main",
              color: "primary.contrastText", fontWeight: 600, fontSize: { xs: "0.9rem", md: "1rem" },
              cursor: "pointer", transition: "background 0.2s",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            All
          </Box>
          {btn("VR")}
          {btn("AR")}
          {btn("Multiplayer")}
          {btn("Hypercasual")}
          {btn("Educational")}
          {btn("Casino")}
        </Box>

        <Box sx={{ py: 5 }}>
          <AllProjects filter={filter} />
        </Box>
      </Container>
    </Box>
  );
}