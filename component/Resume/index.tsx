import { Accordion, Box, Container } from "@mui/material";
import { section } from "../Style";
import SectionHeader from "../Section/SectionHeader";
import ResumeAccordion from "./ResumeAccordion";
export default function Resume() {
  return (
    <Box component="section" sx={section}>
      <Container>
        <SectionHeader heading="Resume" subHeading="My Story" />
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <ResumeAccordion />
        </Box>
      </Container>
    </Box>
  );
}
