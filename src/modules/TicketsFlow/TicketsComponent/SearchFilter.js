import React from "react";
import MainTicket from "./MainTicket";
import { Grid, Box } from "@mui/material";
import FilterCard from "./FilterCard";
import {
  ContentWrapper2,
  ContentWrapper,
  MainContainer,
  MainContainerTwo,
} from "../../DashboardThree/StyledComponents";
import TicketList from "../../DashBoardTwo/TicketList";

const SearchFilter = () => {
  return (
    <MainContainerTwo>
      <ContentWrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} md={9}>
            <TicketList />
          </Grid>
          <Grid item xs={12} md={3}>
            <FilterCard />
          </Grid>
        </Grid>
      </ContentWrapper>
    </MainContainerTwo>
  );
};

export default SearchFilter;
