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
import { Grid, IconButton, Avatar, Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
} from "recharts";
// import TicketIcon from "@mui/icons-material/ConfirmationNumber";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import { TicketCard } from "./TicketCard";
import TicketsByPriority from "./DashBoardComponents/TicketsByPriority";
import TicketTrends from "./DashBoardComponents/TicketTrends";
import AgentPerformance from "./DashBoardComponents/AgentPerformance";
import CustomerSatisfaction from "./DashBoardComponents/CustomerSatisfaction";
import ResolutionTime from "./DashBoardComponents/ResolutionTime";

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

  const ticketData = [
    {
      title: "Total Tickets",
      count: "12,345",
      percentage: "+5.2% from last month",
      icon: <ConfirmationNumberOutlinedIcon />,
      color: "#8884d8",
    },
    {
      title: "Open Tickets",
      count: "3,456",
      percentage: "+12% from last month",
      icon: <ConfirmationNumberOutlinedIcon />,
      color: "#82ca9d",
    },
    {
      title: "Closed Tickets",
      count: "8,234",
      percentage: "+3% from last month",
      icon: <ConfirmationNumberOutlinedIcon />,
      color: "#ffc658",
    },
    {
      title: "Pending Tickets",
      count: "655",
      percentage: "-2% from last month",
      icon: <ConfirmationNumberOutlinedIcon />,
      color: "#d884d8",
    },
  ];

  return (
    <MainContainer>
      <ContentWrapper>
        <Grid container spacing={3}>
          {ticketData.map((ticket, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TicketCard
                title={ticket.title}
                count={ticket.count}
                percentage={ticket.percentage}
                icon={ticket.icon}
                color={ticket.color}
              />
            </Grid>
          ))}
          <Grid item xs={12} md={4}>
            <TicketsByPriority />
          </Grid>
          <Grid item xs={12} md={4}>
            <TicketTrends />
          </Grid>
          <Grid item xs={12} md={4}>
            <AgentPerformance />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomerSatisfaction />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResolutionTime />
          </Grid>
        </Grid>
      </ContentWrapper>
    </MainContainer>
  );
};

export default DashboardFive;
