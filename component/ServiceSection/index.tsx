import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useTheme,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { section } from "../Style";
const slideData = [
  {
    category: "game development",
    heading: "Multiplayer Games",
    description:
      "As a specialist in multiplayer games, I have the knowledge and expertise to create engaging and immersive gaming experiences that allow players to connect and compete with each other in exciting ways. Whether I'm working on a first-person shooter, a strategy game, or a racing game, my focus is on designing games that allow players to engage in meaningful and challenging gameplay, either locally or online.",
  },
  {
    category: "game development",
    heading: "2D & 3D Games",
    description:
      "As a provider of 2D and 3D game development services, I offer a range of services to clients who are looking to create engaging and immersive games for a variety of platforms. Whether my clients are looking to create simple 2D mobile games or complex 3D titles for Mac and PCs, I work hard with design team to bring their idea to life.",
  },
  // {
  //   category: "web development",
  //   heading: "ERP Systems",
  //   description:
  //     "I have hands-on experience working and deploying ERP systems where he has utilized diversified skill sets including CodeIgniter, Jquery, Javascript, PHP, MySQL. ",
  // },
  {
    category: "game development",
    heading: "Open world games",
    description:
      "I love open world games and i would like to extend my career in this genre of games. I have not worked much in this category but i am eager to adopt this genre. I am fully confident that my skills can help me learn and adopt open world genre in very less time",
  },
  {
    category: "game development",
    heading: "Story Based Games",
    description:
      "As a provider of story-based game development services, I'm specialized in creating games that focus on immersive narratives, compelling characters, and engaging gameplay mechanics. I love to develop games that offer a rich and captivating story that keeps players engaged from start to finish.",
  },
  {
    category: "game development",
    heading: "Idle Games",
    description:
      'Idle games, also known as incremental games or clicker games, are a unique type of game that offers a different kind of gaming experience compared to other genres. As a provider of idle games experience, I"m specialized in creating games that offer a more relaxed and casual style of play that can be enjoyed over an extended period.',
  },
];
export default function ServiceSection() {
  const theme = useTheme();
  return (
    <Box id="services" component="section" sx={section}>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "44px",
              lineHeight: 1.3,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            WHAT I DO
          </Typography>
          <Typography color={theme.palette.primary.main}>
            My Services
          </Typography>
        </Box>
        <Box
          sx={{
            py: 5,
          }}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slideData?.map((val, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      width: "100%",
                      textAlign: "left",
                      borderRadius: "20px",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent
                      sx={{
                        my: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          textTransform: "uppercase",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {val.category}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          mt: 3,
                          mb: 1,
                          fontWeight: 600,
                        }}
                        component="div"
                      >
                        {val.heading}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          minHeight: 150,
                        }}
                      >
                        {val.description}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        position: "relative",
                        mt: 5,
                      }}
                    >
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
