import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function SocialIcon() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Link display={"none"} href="https://github.com/umar001" target="_blank">
        <GitHubIcon
          sx={{
            borderRadius: "12px",
            p: 0.75,
            fontSize: "36px",
            border: "1px solid",
            borderColor: "divider",
            "&:hover": {
              cursor: "pointer",
              color: "#fff",
              background: "linear-gradient(120deg, #00d1ff, #8b5cf6)",
              transition: "all 0.3s ease",
            },
          }}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/muhammad-usman-6595b1146/"
        target="_blank"
      >
        <LinkedInIcon
          sx={{
            borderRadius: "12px",
            p: 0.75,
            fontSize: "36px",
            border: "1px solid",
            borderColor: "divider",
            "&:hover": {
              cursor: "pointer",
              color: "#fff",
              background: "linear-gradient(120deg, #00d1ff, #8b5cf6)",
              transition: "all 0.3s ease",
            },
          }}
        />
      </Link>
      <Link href="mailto:muhammadusman1781@gmail.com">
        <EmailIcon
          sx={{
            borderRadius: "12px",
            p: 0.75,
            fontSize: "36px",
            border: "1px solid",
            borderColor: "divider",
            "&:hover": {
              cursor: "pointer",
              color: "#fff",
              background: "linear-gradient(120deg, #00d1ff, #8b5cf6)",
              transition: "all 0.3s ease",
            },
          }}
        />
      </Link>
    </Box>
  );
}
