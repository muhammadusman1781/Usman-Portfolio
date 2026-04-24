import { styled } from "@mui/system";
import { Button } from "@mui/material";

const MUIButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: "12px",
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: "0 6px 14px rgba(34, 46, 88, 0.22)",
  padding: "10px 24px",
  display: "inline-block",
  position: "relative",
  transition: "color .3s, transform .3s, box-shadow .3s",
  zIndex: 1,
  overflow: "hidden",
  fontWeight: 700,
  textTransform: "none",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transform: "translateX(-100%)",
    transition: "transform .35s ease",
    borderRadius: "12px",
    zIndex: -1,
  },
  "&:hover": {
    color: theme.palette.secondary.contrastText,
    transform: "translateY(-1px)",
    boxShadow: "0 10px 18px rgba(50, 61, 112, 0.32)",
    "&::before": {
      transform: "translateX(0)",
    },
  },
}));

export default MUIButton;
