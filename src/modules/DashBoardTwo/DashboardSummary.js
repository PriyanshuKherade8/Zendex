import React from "react";
import { Box, Typography, Paper, Grid, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
}));

const SummaryBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

const DashboardSummary = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard Summary
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryBox>
            <Typography variant="h5">Total Tickets</Typography>
            <Typography variant="h4">120</Typography>
          </SummaryBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryBox>
            <Typography variant="h5">Open Tickets</Typography>
            <Typography variant="h4">45</Typography>
          </SummaryBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryBox>
            <Typography variant="h5">Closed Tickets</Typography>
            <Typography variant="h4">65</Typography>
          </SummaryBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryBox>
            <Typography variant="h5">Pending Tickets</Typography>
            <Typography variant="h4">10</Typography>
          </SummaryBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardSummary;
