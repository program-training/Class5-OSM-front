import React from "react";
import { Typography, Button, Container, Paper } from "@mui/material";
const NotLoggedInPage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  const handleGoHome = () => {
    window.location.href = "/oms";
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "40px", minHeight: "80vh" }}>
      <Paper elevation={2} style={{ padding: "45px", textAlign: "center" }}>
        <Typography variant="h5" style={{ margin: "16px", color: "white" }}>
          You must be logged in to see this page.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRefresh}>
          Refresh Page
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          style={{ marginLeft: "8px" }}
        >
          Go back to Home
        </Button>
      </Paper>
    </Container>
  );
};
export default NotLoggedInPage;
