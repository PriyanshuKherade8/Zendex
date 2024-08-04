import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import TicketsByPriority from "./TicketsByPriority";
import TicketTrends from "./TicketTrends";
import AgentPerformance from "./AgentPerformance";
import CustomerSatisfaction from "./CustomerSatisfaction";
import ResolutionTime from "./ResolutionTime";
// import TicketsByPriority from "./TicketsByPriority";
// import TicketTrends from "./TicketTrends";
// import AgentPerformance from "./AgentPerformance";

const MainContainer = styled("div")`
  padding: 24px;
`;

const DashBoardComp = () => (
  <MainContainer>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <TicketsByPriority />
      </Grid>
      <Grid item xs={12} md={4}>
        <TicketTrends />
      </Grid>
      <Grid item xs={12} md={4}>
        <AgentPerformance />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomerSatisfaction />
      </Grid>
      <Grid item xs={12} md={4}>
        <ResolutionTime />
      </Grid>
    </Grid>
  </MainContainer>
);

export default DashBoardComp;
