import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const iconStyle = {
  borderRadius: "20px",
  padding: "5px",
  fontSize: "40px",
  "&:hover": {
    cursor: "pointer",
    color: "#fff",
    background: "#29a587",
    transition: "color 0.5s, background 0.5s",
  },
};

export default function SocialIcon() {
  return (
    <Box>
      <Link display={"none"} href="https://github.com/umar001" target="_blank">
        <GitHubIcon sx={iconStyle} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/muhammad-usman-6595b1146/"
        target="_blank"
      >
        <LinkedInIcon sx={iconStyle} />
      </Link>
      <Link href="mailto:muhammadusman1781@gmail.com">
        <EmailIcon sx={iconStyle} />
      </Link>
    </Box>
  );
}
