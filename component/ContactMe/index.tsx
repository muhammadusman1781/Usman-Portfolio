import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SectionHeader from "../Section/SectionHeader";
import MUIButton from "../MUIButton";
import { section } from "../Style";

const contactItems = [
  {
    title: "Email",
    value: "muhammadusman1781@gmail.com",
    href: "mailto:muhammadusman1781@gmail.com",
    icon: <EmailIcon sx={{ color: "primary.main" }} />,
  },
  {
    title: "Phone",
    value: "+92 310 0505744",
    href: "tel:+923100505744",
    icon: <PhoneIcon sx={{ color: "primary.main" }} />,
  },
  {
    title: "WhatsApp",
    value: "+92 310 0505744",
    href: "https://wa.me/923100505744",
    icon: <WhatsAppIcon sx={{ color: "primary.main" }} />,
  },
  {
    title: "LinkedIn",
    value: "Muhammad Usman",
    href: "https://www.linkedin.com/in/muhammad-usman-6595b1146/",
    icon: <LinkedInIcon sx={{ color: "primary.main" }} />,
  },
];

export default function ContactMe() {
  return (
    <Box id="contact" component="section" sx={section}>
      <Container>
        <SectionHeader heading="CONTACT ME" subHeading="Let's Build Something Great" />
        <Card
          sx={{
            borderRadius: "20px",
            p: { xs: 3, md: 4 },
            my: 4,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "none",
          }}
        >
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={5}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Open For Collaboration
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5 }}>
                If you need AR, VR, multiplayer, or game product development support,
                reach out directly through any channel below. I usually respond quickly.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2.5 }}>
                <Chip label="AR / VR" />
                <Chip label="Multiplayer" />
                <Chip label="Unity & C#" />
                <Chip label="Meta Quest" />
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                <Link href="mailto:muhammadusman1781@gmail.com" underline="none">
                  <MUIButton>Send Email</MUIButton>
                </Link>
                <Link href="https://wa.me/923100505744" target="_blank" underline="none">
                  <MUIButton>WhatsApp</MUIButton>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                {contactItems.map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: "16px",
                        boxShadow: "none",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <Box>{item.icon}</Box>
                        <Box>
                          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                            {item.title}
                          </Typography>
                          <Link
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            underline="hover"
                            sx={{ color: "text.secondary", wordBreak: "break-word" }}
                          >
                            {item.value}
                          </Link>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
