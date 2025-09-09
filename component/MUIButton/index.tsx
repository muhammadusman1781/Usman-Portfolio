import { styled } from "@mui/system";
import { Button } from "@mui/material";

const MUIButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#000" : "#fff",
  borderRadius: "30px",
  boxShadow: "5px 5px rgb(0 0 0 / 20%)",
  padding: "12px 40px",
  display: "inline-block",
  position: "relative",
  transition: "color .5s",
  zIndex: 99999,
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: theme.palette.primary.main,
    transform: "scaleX(0) scaleY(0)",
    transition: "transform .5s",
    borderRadius: "30px",
    zIndex: -1,
  },
  "&:hover": {
    color: "#fff",
    zIndex: 2,
    "&::before": {
      transform: "scaleX(1)",
      zIndex: -1,
    },
  },
}));

export default MUIButton;
