import { Box, useTheme } from "@mui/material";
import { memo } from "react";

function SubHeader({ text }: { text: String }) {
  const theme = useTheme();
  return (
    <Box
      component="span"
      sx={{
        color: theme.palette.primary.main,
        // "&::after": {
        //   content: '""',
        //   height: "3px",
        //   width: "90px",
        //   backgroundColor: theme.palette.primary.contrastText,
        //   position: "absolute",
        //   left: { md: "28%" },
        //   top: "35%",
        // },
        // "&:before": {
        //   content: '""',
        //   height: "3px",
        //   width: "90px",
        //   backgroundColor: theme.palette.primary.contrastText,
        //   position: "absolute",
        //   left: "58%",
        //   top: "35%",
        // },
      }}
    >
      {text}
    </Box>
  );
}

export default memo(SubHeader);
