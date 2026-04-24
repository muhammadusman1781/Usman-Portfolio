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
        px: { xs: 2, md: 3 }, py: 1, borderRadius: 2, border: "1px solid",
        borderColor: filter === label ? "primary.light" : "divider",
        bgcolor: filter === label ? "primary.dark" : "background.paper",
        color: "primary.contrastText",
        fontWeight: 600, fontSize: { xs: "0.9rem", md: "1rem" }, cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: filter === label ? "0 0 0 1px rgba(93,125,255,0.25), 0 8px 18px rgba(93,125,255,0.28)" : "none",
        "&:hover": { bgcolor: "primary.dark", borderColor: "primary.main", transform: "translateY(-1px)" },
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
              px: { xs: 2, md: 3 }, py: 1, borderRadius: 2, border: "1px solid",
              borderColor: filter === 'All' ? "primary.light" : "divider",
              bgcolor: filter === 'All' ? "primary.dark" : "background.paper",
              color: "primary.contrastText", fontWeight: 600, fontSize: { xs: "0.9rem", md: "1rem" },
              cursor: "pointer", transition: "all 0.2s",
              boxShadow: filter === 'All' ? "0 0 0 1px rgba(93,125,255,0.25), 0 8px 18px rgba(93,125,255,0.28)" : "none",
              "&:hover": { bgcolor: "primary.dark", borderColor: "primary.main", transform: "translateY(-1px)" },
            }}
          >
            All
          </Box>
          {btn("VR")}
          {btn("AR")}
          {btn("Multiplayer")}
          {btn("Board Games")}
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