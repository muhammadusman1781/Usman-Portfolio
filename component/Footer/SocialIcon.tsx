import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const actionIconSx = {
  borderRadius: "12px",
  p: 0.75,
  fontSize: "36px",
  border: "1px solid",
  borderColor: "divider",
  "&:hover": {
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(120deg, #5d7dff, #7a58e8)",
    transition: "all 0.3s ease",
  },
};

export default function SocialIcon() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Link display={"none"} href="https://github.com/umar001" target="_blank">
        <GitHubIcon sx={actionIconSx} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/muhammad-usman-6595b1146/"
        target="_blank"
      >
        <LinkedInIcon sx={actionIconSx} />
      </Link>
      <Link href="mailto:muhammadusman1781@gmail.com">
        <EmailIcon sx={actionIconSx} />
      </Link>
      <Link href="https://wa.me/923100505744" target="_blank">
        <WhatsAppIcon sx={actionIconSx} />
      </Link>
      <Link href="tel:+923100505744">
        <PhoneIcon sx={actionIconSx} />
      </Link>
    </Box>
  );
}
