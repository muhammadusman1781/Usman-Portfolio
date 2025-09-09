import { useEffect, useState } from "react";
import parse from "html-react-parser";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { section } from "../Style";
import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { portfolioData } from "../PortfolioSection/data";
import Loader from "../Loader";
import { portfolioData } from "../PortfolioSection/data";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  backgroundColor: "transparent",
  border: 0,
  boxShadow: "none",
}));

interface Project {
  name: string;
  videoUrl: string;
  images: string[];
  description: string;
  playstore: string;
  tags?: Array<'AR' | 'VR' | 'Multiplayer' | 'Hypercasual'>; // <-- NEW
}

export default function PortfolioByIdSection({ data }: { data: Project }) {
  const similar = portfolioData
    .filter(p =>
      p.name !== data?.name &&
      p.tags?.some(t => data?.tags?.includes(t))
    )
    .slice(0, 6); // show up to 6

  return (
    <Box id="portfolio" component="section" sx={section}>
      <Container>
        {/* ...existing content... */}

        {/* Description */}
        <Grid container spacing={3}>
          {data?.images?.map((val, index) => (
            <Grid item md={3} xs={12} key={index}>
              <Box component="img" src={val} width={"100%"} height={"100%"} sx={{ objectFit: "cover", borderRadius: "16px" }} />
            </Grid>
          ))}
          <Grid item md={12} py={3}>
            <Typography component="div">
              {data?.description ? parse(data?.description) : ""}
            </Typography>
          </Grid>
        </Grid>

        {/* Similar Projects */}
        {similar.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Similar Projects
            </Typography>
            <Grid container spacing={2}>
              {similar.map((p, i) => (
                <Grid item md={4} xs={12} key={p.id ?? p.name ?? i}>
                  <Item>
                    <Link href={`/portfolio/${p.id}`}>
                      <Box
                        component="img"
                        src={p.images[0]}
                        sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "16px" }}
                      />
                      <Typography sx={{ mt: 1, fontWeight: 600 }}>{p.name}</Typography>
                      {/* Optional: show tags */}
                      <Box sx={{ display: "flex", gap: 1, mt: 0.5, flexWrap: "wrap" }}>
                        {p.tags?.map(tag => (
                          <Box key={tag} sx={{ fontSize: 12, px: 1, py: 0.25, borderRadius: 1, bgcolor: "action.hover" }}>
                            {tag}
                          </Box>
                        ))}
                      </Box>
                    </Link>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
}
