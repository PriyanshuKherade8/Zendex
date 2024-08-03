import React from "react";
import {
  StyledAppBar,
  StyledToolbar,
  SearchWrapper,
  StyledSearchIcon,
  StyledInputBase,
  Card,
  CardTitle,
  CardContentWrapper,
  MainContainer,
  ContentWrapper,
} from "./StyledComponents";
import { Grid, IconButton, Avatar, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
} from "recharts";
import TicketIcon from "@mui/icons-material/ConfirmationNumber";

const DashboardFive = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 239, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 349, pv: 4300, amt: 2100 },
  ];

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <MainContainer>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Typography variant="h6" noWrap>
            Zendesk
          </Typography>
          <SearchWrapper>
            <StyledSearchIcon />
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchWrapper>
          <IconButton edge="end" color="inherit">
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
      <ContentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContentWrapper>
                <TicketIcon />
                <CardTitle>Total Tickets</CardTitle>
                <Typography variant="h5">12,345</Typography>
                <Typography variant="body2" color="textSecondary">
                  +5.2% from last month
                </Typography>
              </CardContentWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContentWrapper>
                <TicketIcon />
                <CardTitle>Open Tickets</CardTitle>
                <Typography variant="h5">3,456</Typography>
                <Typography variant="body2" color="textSecondary">
                  +12% from last month
                </Typography>
              </CardContentWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContentWrapper>
                <TicketIcon />
                <CardTitle>Closed Tickets</CardTitle>
                <Typography variant="h5">8,234</Typography>
                <Typography variant="body2" color="textSecondary">
                  +3% from last month
                </Typography>
              </CardContentWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContentWrapper>
                <TicketIcon />
                <CardTitle>Pending Tickets</CardTitle>
                <Typography variant="h5">655</Typography>
                <Typography variant="body2" color="textSecondary">
                  -2% from last month
                </Typography>
              </CardContentWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContentWrapper>
                <Typography variant="h6">Ticket Trends</Typography>
                <LineChart width={400} height={200} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                </LineChart>
              </CardContentWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContentWrapper>
                <Typography variant="h6">Customer Satisfaction</Typography>
                <PieChart width={400} height={200}>
                  <Pie
                    data={pieData}
                    cx={200}
                    cy={100}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                </PieChart>
              </CardContentWrapper>
            </Card>
          </Grid>
        </Grid>
      </ContentWrapper>
    </MainContainer>
  );
};

export default DashboardFive;
