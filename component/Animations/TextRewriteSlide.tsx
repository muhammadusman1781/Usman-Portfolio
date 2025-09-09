import { Box, useTheme } from "@mui/material";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { BlinkCursor } from "./Keyframes";
const _CONTENT = [
  "Unity Engine, C#",
  "2D, 3D, Web Sockets ",
  "Photon Networking Engine, Restful APIs",
  "Platforms : Android, iOS, WebGL, PC, Mac, Linux",
];
// Current sentence being processed
let part = 0;
let partIndex = 0;
// Holds the handle returned from setInterval
var _INTERVAL_VAL: any;
function TextRewriteSlide() {
  const textRef = useRef(null);
  const theme = useTheme();
  const [text, setText] = useState("");
  const deleteText = () => {
    const text = _CONTENT[part].substring(0, partIndex - 1);
    setText(text);
    partIndex--;
    if (text === "") {
      clearInterval(_INTERVAL_VAL);

      if (part === _CONTENT.length - 1) {
        part = 0;
      } else {
        part++;
      }
      partIndex = 0;
      setTimeout(function () {
        _INTERVAL_VAL = setInterval(typeText, 100);
      }, 200);
    }
  };
  const typeText = () => {
    const text = _CONTENT[part].substring(0, partIndex + 1);
    setText(text);
    partIndex++;
    if (text === _CONTENT[part]) {
      clearInterval(_INTERVAL_VAL);
      setTimeout(() => {
        _INTERVAL_VAL = setInterval(deleteText, 25);
      }, 1000);
    }
  };
  useEffect(() => {
    // typeText();
    _INTERVAL_VAL = setInterval(typeText, 100);

    // clear on component unmount
    return () => {
      clearInterval(_INTERVAL_VAL);
    };
  }, []);
  return (
    <>
      <Box
        ref={textRef}
        sx={{
          display: "inline-block",
          fontWeight: "bold",
          color: theme.palette.primary.main,
          py: { xs: 2 },
        }}
      >
        {text}
        <Box
          component="span"
          sx={{
            animation: `${BlinkCursor} 1s linear infinite`,
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: 1,
            color: "#fff",
          }}
        >
          |
        </Box>
      </Box>
    </>
  );
}
export default memo(TextRewriteSlide);
