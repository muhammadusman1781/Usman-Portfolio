import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { portfolioData } from "./data";
import MUIButton from "../MUIButton";
import Link from "next/link";
import { portfolioData } from "./data";

export default function AllProjects({
  filter = 'All',
}: {
  filter?: 'All' | 'AR' | 'VR' | 'Multiplayer' | 'Hypercasual';
}) {
  const theme = useTheme();

  const list =
    filter === 'All'
      ? portfolioData
      : portfolioData.filter(p => (p as any).tags?.includes(filter));

  return (
    <Box>
      <Grid container spacing={2}>
        {list.map((val, index) => {
          return (
            <Grid item md={4} sx={{ width: "100%" }} key={val.id ?? index}>
              <Card sx={{ borderRadius: "20px", position: "relative" }}>
                <Box sx={{ padding: "30px" }}>
                  <Link href={`/portfolio/${index + 1}`}>
                    <CardMedia
                      sx={{
                        height: 240,
                        borderRadius: "20px",
                        transform: "scale(1, 1)",
                        transition: "transform 0.4s",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        "&:hover": { transform: "scale(1.05, 1.05)" },
                      }}
                      image={`${val.images[0]}`}
                      title={val.name}
                    />
                  </Link>
                </Box>
                <CardContent sx={{ px: "30px", py: 2 }}>
                  <Typography sx={{ fontSize: "22px", fontWeight: 500 }}>
                    {val.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ position: "relative", px: "30px" }}>
                  <Link href={`/portfolio/${index + 1}`}>
                    <MUIButton>View</MUIButton>
                  </Link>
                  <Box
                    component="img"
                    src="/assets/images/home/dot.png"
                    sx={{
                      position: "absolute",
                      right: "-24px",
                      bottom: "-84px",
                      width: 141,
                      height: 141,
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

