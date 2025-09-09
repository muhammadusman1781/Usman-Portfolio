import { Box, Container } from "@mui/material";
import SectionHeader from "../Section/SectionHeader";
import { section } from "../Style";
import PortfolioTabs from "./PortfolioTabs";
import AllProjects from "./AllProjects";
import { useState } from "react";
export default function PortfolioSection() {
  const [filter, setFilter] =
    useState<'All' | 'AR' | 'VR' | 'Multiplayer' | 'Hypercasual'>('All');

  const btn = (label: 'AR' | 'VR' | 'Multiplayer' | 'Hypercasual') => (
    <Box
      component="button"
      onClick={() => setFilter(label)}
      sx={{
        px: 3, py: 1, borderRadius: 2, border: "none",
        bgcolor: filter === label ? "primary.dark" : "primary.main",
        color: "primary.contrastText",
        fontWeight: 600, fontSize: "1rem", cursor: "pointer",
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
        <SectionHeader heading="PORTFOLIO" subHeading="MY Casessss" />
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3, mb: 1 }}>
          {/* Optional “All” button */}
          <Box component="button"
            onClick={() => setFilter('All')}
            sx={{
              px: 3, py: 1, borderRadius: 2, border: "none",
              bgcolor: filter === 'All' ? "primary.dark" : "primary.main",
              color: "primary.contrastText", fontWeight: 600, fontSize: "1rem",
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
        </Box>

        <Box sx={{ py: 5 }}>
          <AllProjects filter={filter} />
        </Box>
      </Container>
    </Box>
  );
}