import parse from "html-react-parser";

import { Box, Container, Grid, Typography } from "@mui/material";
import { section } from "../Style";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import dynamic from "next/dynamic";
import Link from "next/link";
import { portfolioDataWithId, Tag } from "../PortfolioSection/data";

// --- add these helpers (local) ---
type MaybeTag = string | Tag;

const normalizeStringToTag = (s: string): Tag | null => {
  const up = s.trim().toUpperCase();
  if (up === "AR") return "AR";
  if (up === "VR") return "VR";
  if (up === "MULTIPLAYER") return "Multiplayer";
  if (up === "HYPERCASUAL") return "Hypercasual";
  if (up === "EDUCATIONAL" || up === "EDUCATIONAL GAMES") return "Educational";
  if (up === "CASINO" || up === "CASINO GAMES") return "Casino";
  if (up === "BOARD GAMES" || up === "BOARDGAMES") return "Board Games";
  return null;
};

const toTagArray = (arr?: readonly MaybeTag[]): Tag[] =>
  (arr ?? [])
    .map(t => (typeof t === "string" ? normalizeStringToTag(t) : t))
    .filter((t): t is Tag => !!t);

const overlap = (a?: readonly MaybeTag[], b?: readonly MaybeTag[]) => {
  const A = toTagArray(a);
  const B = toTagArray(b);
  return A.some(t => B.includes(t));
};


const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(12, 18, 34, 0.9)",
  border: "1px solid rgba(93, 125, 255, 0.35)",
  borderRadius: "16px",
  boxShadow: "none",
  overflow: "hidden",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.35)",
  },
}));

interface Project {
  id?: number | string;
  name: string;
  videoUrl?: string;
  images: string[];
  description?: string;
  playstore?: string;
  tags?: MaybeTag[]; // accept string[] or Tag[]
}
export default function PortfolioByIdSection({ data }: { data: Project }) {
  const similar = portfolioDataWithId
    .filter((p) => p.name !== data?.name && overlap(p.tags, data?.tags))
    .slice(0, 6);

  return (
    <Box id="portfolio" component="section" sx={section}>
      <Container sx={{ pt: { xs: 12, md: 16 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontSize: { xs: "28px", md: "36px" }, fontWeight: 700 }}
        >
          {data?.name}
        </Typography>

        {/* Video */}
        {data?.videoUrl && (
          <Box sx={{ borderRadius: "16px", overflow: "hidden", mb: 3 }}>
            <ReactPlayer url={data.videoUrl} controls width="100%" />
          </Box>
        )}

        {/* Images + Description */}
        <Grid container spacing={3}>
          {data?.images?.map((val, index) => (
            <Grid item md={3} xs={12} key={index}>
              <Box
                component="img"
                src={val}
                width={"100%"}
                height={"100%"}
                sx={{ objectFit: "cover", borderRadius: "16px" }}
              />
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
                    <Link href={`/portfolio/${p.id}`} legacyBehavior>
                      <Box
                        component="a"
                        sx={{
                          textDecoration: "none",
                          color: "common.white",
                          display: "block",
                          p: 1.5,
                        }}
                      >
                      <Box
                        component="img"
                        src={p.images?.[0] || "/assets/images/profile.jpg"}
                        sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "12px" }}
                      />
                      <Typography sx={{ mt: 1.2, fontWeight: 700, color: "common.white" }}>
                        {p.name}
                      </Typography>
                      {/* Optional: show tags */}
                      <Box sx={{ display: "flex", gap: 1, mt: 0.5, flexWrap: "wrap", maxWidth: "100%" }}>
                        {p.tags?.map(tag => (
                          <Box
                            key={tag}
                            sx={{
                              fontSize: 12,
                              px: 1,
                              py: 0.25,
                              borderRadius: 1,
                              bgcolor: "primary.dark",
                              color: "primary.contrastText",
                              border: "1px solid",
                              borderColor: "primary.main",
                              maxWidth: "100%",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>
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
