import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  useTheme,
} from "@mui/material";
import SectionHeader from "../Section/SectionHeader";
import { styled } from "@mui/material";
import MUIButton from "../MUIButton";
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "20px",
    },
  },
});
export default function ContactMe() {
  const theme = useTheme();
  return (
    <Box component="section">
      <Container>
        <SectionHeader
          heading="Contact Me"
          subHeading="Let's Talk About Ideas"
        />
        <Card
          sx={{
            backgroundColor: theme.palette.background.default,
            border: "none",
            padding: "40px",
            borderRadius: "20px",
            my: 5,
            position: "relative",
          }}
        >
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={5}>
              <Grid item md={6}>
                <CustomTextField
                  id="outlined-basic"
                  label="Your Full Name *"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <CustomTextField
                  id="outlined-basic"
                  label="Your Email Address *"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <CustomTextField
                  id="outlined-basic"
                  label="Your Subject *"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <TextareaAutosize
                  placeholder="Message"
                  maxRows={15}
                  style={{
                    width: "100%",
                    height: 200,
                    padding: 15,
                    backgroundColor: "transparent",
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                    outline: "none",
                    borderRadius: "20px",
                  }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                pt: 2,
              }}
            >
              <MUIButton>Send</MUIButton>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
