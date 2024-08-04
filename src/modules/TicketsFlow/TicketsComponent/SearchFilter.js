import React from "react";
import MainTicket from "./MainTicket";
import { Grid, Box } from "@mui/material";
import FilterCard from "./FilterCard";
import {
  ContentWrapper2,
  ContentWrapper,
  MainContainer,
} from "../../DashboardThree/StyledComponents";
import TicketList from "../../DashBoardTwo/TicketList";

const SearchFilter = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <TicketList />
          </Grid>
          <Grid item xs={12} md={4}>
            <FilterCard />
          </Grid>
        </Grid>
      </ContentWrapper>
    </MainContainer>
  );
};

export default SearchFilter;
