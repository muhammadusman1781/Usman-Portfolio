import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Button,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MUIButton from "../MUIButton";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Services", "Skills", "Portfolio", "Contact"];
const toolBarStyle = {
  width: "100%",
  maxWidth: 1200,
  mx: "auto",
};
export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href={"/"}>
        <Typography variant="h6" sx={{ my: 2, textTransform: "uppercase" }}>
          Usman - Game Dev
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              href={`${item === "Home" ? "/" : "#" + item.toLowerCase()}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: 600,
      }}
    >
      <AppBar
        component="nav"
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          left: 0,
          my: { xs: 0, sm: 0, md: 2 },
          borderRadius: { xs: 0, sm: 0, md: 4 },
        }}
      >
        <Toolbar sx={toolBarStyle}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: { xs: "block", sm: "block" },
              color: "common.white",
              textTransform: "uppercase",
            }}
          >
            <Link
              href={"/"}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Usman - Game Developer
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                href={`${item === "Home" ? "/" : "#" + item.toLowerCase()}`}
                key={item}
                sx={{
                  color: "common.white",
                  fontWeight: 600,
                  borderRadius: "10px",
                  px: 1.4,
                  border: "1px solid transparent",
                  "&:hover": {
                    bgcolor: "rgba(93,125,255,0.2)",
                    borderColor: "rgba(93,125,255,0.5)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", lg: "block" }, mr: 1 }}>
            <Box component="a" href="#contact" sx={{ textDecoration: "none" }}>
              <MUIButton>Contact Me</MUIButton>
            </Box>
          </Box>
          {mobileOpen ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 0, pr: 0, display: { sm: "none" } }}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 0, pr: 0, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{}}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
            },
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            zIndex: 122222,
            backgroundColor: "transparent",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
}
