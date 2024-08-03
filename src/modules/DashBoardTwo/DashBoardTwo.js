import React, { useState } from "react";
import { Grid, Box, styled } from "@mui/material";
import DashboardSummary from "./DashboardSummary";
import TicketFilter from "./TicketFilter";
import TicketDetails from "../Components/TicketDetails";
import TicketComments from "./TicketComments";
import CreateTicket from "../Components/CreateTicket";
import UserProfile from "./UserProfile";
import TicketList from "./TicketList";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const DashboardTwo = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DashboardSummary />
        </Grid>
        <Grid item xs={12} md={3}>
          <TicketFilter />
        </Grid>
        <Grid item xs={12} md={9}>
          <TicketList onSelectTicket={setSelectedTicket} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TicketDetails ticket={selectedTicket} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TicketComments />
        </Grid>
        <Grid item xs={12}>
          <CreateTicket />
        </Grid>
        <Grid item xs={12}>
          <UserProfile user={selectedTicket ? selectedTicket.user : null} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardTwo;
