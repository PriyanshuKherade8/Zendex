import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

const CardContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 350px;
  border-radius: 12px;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled(Typography)`
  font-size: 17px;
  font-weight: 600;
  font-family: system-ui;
`;

const ChartContainer = styled(Box)`
  width: 100%;
  height: 250px;
`;

const data = [
  { name: "Jan", Tickets: 2400 },
  { name: "Feb", Tickets: 1210 },
  { name: "Mar", Tickets: 2290 },
  { name: "Apr", Tickets: 1000 },
  { name: "May", Tickets: 2181 },
  { name: "Jun", Tickets: 2500 },
];

const TicketTrends = () => (
  <CardContentWrapper variant="outlined">
    <Header>
      <Title variant="h6">Ticket Trends</Title>
      <ConfirmationNumberOutlinedIcon />
    </Header>
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="Tickets" stroke="#36BA98" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </CardContentWrapper>
);

export default TicketTrends;
