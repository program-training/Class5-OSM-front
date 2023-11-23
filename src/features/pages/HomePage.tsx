import { Box, Container, CssBaseline, Typography } from "@mui/material";
// import { useAppSelector } from "../../../store/hooks";
// import { useNavigate } from "react-router-dom";
const HomePage = () => {
  // const navigate = useNavigate();
  // const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  return (
    <>
      <Container>
        <CssBaseline />
        <Typography
          variant="h3"
          sx={{
            marginTop: "60px",
            marginBottom: "10px",
          }}
        >
          TEAM 1 OMS
        </Typography>
        <Box
          sx={{
            display: "flex",
            maxWidth: "700px",
            marginBottom: "60px",
            marginTop: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Container>
    </>
  );
};
export default HomePage;
