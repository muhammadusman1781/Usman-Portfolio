import { Box, Typography, useTheme } from "@mui/material";

export default function SectionHeader({
  heading,
  subHeading,
}: {
  heading: String;
  subHeading: String;
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { md: "44px", xs: "28px" },
          lineHeight: 1.3,
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {heading}
      </Typography>
      <Typography color={theme.palette.primary.main}>{subHeading}</Typography>
    </Box>
  );
}
