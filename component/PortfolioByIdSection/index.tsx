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
}

export default function PortfolioByIdSection({ data }: { data: Project }) {
  return (
    <Box id="portfolio" component="section" sx={section}>
      <Container>
        <Box
          sx={{
            mt: 10,
            py: 5,
          }}
        >
          <Box textAlign={"center"} sx={{}} py={5}>
            <Typography variant="h3">{data?.name}</Typography>
          </Box>
          <Box textAlign={"center"}>
            {data?.playstore ? (
              <Button href="">
                <Box
                  component="img"
                  src="/assets/images/googleplay.svg"
                  width={"30px"}
                  height={"50px"}
                />
                Play Store
              </Button>
            ) : (
              ""
            )}
          </Box>
          <br />
          <Grid2 container spacing={3}>
            <Grid2 xs={12} xsOffset={0} md={6} mdOffset={3}>
              <Item
                sx={{
                  height: { md: "350px", sm: "350px", xs: "250px" },
                }}
              >
                <ReactPlayer
                  url={data?.videoUrl}
                  style={{ margin: "auto auto", borderRadius: "16px" }}
                  width={"100%"}
                  height={"100%"}
                />
              </Item>
            </Grid2>
          </Grid2>
          <Grid container spacing={3}>
            {data?.images?.map((val, index) => {
              return (
                // <Image></Image>
                <Grid item md={3} xs={12} key={index}>
                  <Box
                    component="img"
                    src={val}
                    width={"100%"}
                    height={"100%"}
                    sx={{
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  />
                </Grid>
              );
            })}
            <Grid item md={12} py={3}>
              <Typography component="div">
                {data?.description ? parse(data?.description) : ""}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
