import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  Divider,
  keyframes,
} from "@mui/material";
const skillsCardHeader = {
  fontSize: "18px",
  fontWeight: 600,
};
const skillsCardDesc = {
  fontSize: "14px",
  fontWeight: 400,
};
export default function SkillsCard({
  heading,
  percentage,
}: {
  heading: String;
  percentage: any;
}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={skillsCardHeader}>{heading}</Typography>
          <Typography
            sx={{
              ...skillsCardHeader,
              color: theme.palette.primary.main,
            }}
          >
            {percentage} {"%"}
          </Typography>
        </Box>
        {/* <Box component="p" sx={skillsCardDesc}>
          {description}
        </Box> */}
        <Box
          component="div"
          sx={{
            position: "relative",
            py: 2,
          }}
        >
          <Divider
            sx={{
              borderWidth: "medium",
              borderRadius: "10px",
            }}
          />
          <Box
            component="span"
            sx={{
              width: "25px",
              height: "25px",
              border: "2px solid #000",
              position: "absolute",
              backgroundColor: theme.palette.primary.main,
              top: "6px",
              left: `${percentage}%`,
              borderRadius: "50%",
            }}
          ></Box>
        </Box>
      </CardContent>
    </Card>
  );
}
