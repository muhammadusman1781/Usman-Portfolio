import { Box } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 999999999,
        backgroundColor: "#f5f5f5f5",
      }}
    >
      <Box component="img" src="/assets/images/loader.svg" width={100} />
    </Box>
  );
}
