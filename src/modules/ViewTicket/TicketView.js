import React from "react";
import TicketMainView from "./Components/TicketMainView";
import TicketRightView from "./Components/TicketRightView";
import { Grid } from "@mui/material";
import {
  ContentWrapper,
  MainContainerTwo,
} from "../DashboardThree/StyledComponents";

const TicketView = () => {
  return (
    <>
      <MainContainerTwo>
        <ContentWrapper>
          <Grid container spacing={1}>
            <Grid item xs={12} md={9}>
              <TicketMainView />
            </Grid>
            <Grid item xs={12} md={3}>
              <TicketRightView />
            </Grid>
          </Grid>
        </ContentWrapper>
      </MainContainerTwo>
    </>
  );
};

export default TicketView;
