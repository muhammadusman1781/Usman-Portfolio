import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import MUIButton from "../MUIButton";
import Link from "next/link";
import { portfolioDataWithId, Tag } from "./data";

const BEST_PROJECT_NAMES = [
  "Aramco F1 Paddock",
  "Brandweer Training",
  "Tarneeb Masters",
  "Quess",
];

export default function AllProjects({
  filter = "All",
}: {
  filter?: "All" | Tag;
}) {
  const list =
    filter === "All"
      ? portfolioDataWithId
      : portfolioDataWithId.filter((p) => p.tags?.includes(filter));

  const bestProjects = list.filter((p) => BEST_PROJECT_NAMES.includes(p.name));
  const otherProjects = list.filter((p) => !BEST_PROJECT_NAMES.includes(p.name));

  const renderProjectGrid = (projects: typeof list) => (
    <Grid container spacing={2}>
      {projects.map((val) => (
        <Grid item xs={12} sm={6} md={4} sx={{ width: "100%" }} key={val.id}>
          <Card
            sx={{
              borderRadius: "20px",
              position: "relative",
              transition: "transform 0.28s ease, box-shadow 0.28s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 16px 30px rgba(0, 0, 0, 0.28)",
              },
            }}
          >
            <Box sx={{ padding: "30px" }}>
              <Link href={`/portfolio/${val.id}`}>
                <CardMedia
                  sx={{
                    height: 240,
                    borderRadius: "20px",
                    transform: "scale(1, 1)",
                    transition: "transform 0.4s",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    "&:hover": { transform: "scale(1.06, 1.06)" },
                  }}
                  image={val.images?.[0] || "/assets/images/profile.jpg"}
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
              <Link href={`/portfolio/${val.id}`}>
                <MUIButton>View</MUIButton>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
      {filter === "All" ? (
        <>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
            Featured Accomplishments
          </Typography>
          {renderProjectGrid(bestProjects)}

          <Typography variant="h5" sx={{ mt: 6, mb: 2, fontWeight: 700 }}>
            Other Projects
          </Typography>
          {renderProjectGrid(otherProjects)}
        </>
      ) : (
        renderProjectGrid(list)
      )}
    </Box>
  );
}

