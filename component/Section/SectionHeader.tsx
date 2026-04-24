import { Box, Typography, useTheme } from "@mui/material";

export default function SectionHeader({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
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
          fontSize: { md: "42px", xs: "28px" },
          lineHeight: 1.3,
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {heading}
      </Typography>
      {subHeading ? (
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            mt: 0.5,
            textTransform: "uppercase",
            letterSpacing: 0.8,
          }}
        >
          {subHeading}
        </Typography>
      ) : null}
      <Box
        sx={{
          width: 90,
          height: 3,
          mt: 1.5,
          mx: "auto",
          borderRadius: 99,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      />
    </Box>
  );
}
