import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

const CardContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 470px;
  border-radius: 12px;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Typography)`
  font-size: 17px;
  font-weight: 600;
  font-family: system-ui;
`;

const StatsContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 16px;
`;

const StatBox = styled(Box)`
  text-align: center;
`;

const StatValue = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
  font-family: system-ui;
  margin-bottom: 5px;
`;

const StatLabel = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: system-ui;
  margin-bottom: 5px;
`;

const ImprovementBox = styled(StatBox)`
  color: green;
`;

const ChartContainer = styled(Box)`
  width: 100%;
  height: 300px;
`;

const data = [
  { name: "Jan", Time: 13 },
  { name: "Feb", Time: 11 },
  { name: "Mar", Time: 12 },
  { name: "Apr", Time: 10 },
  { name: "May", Time: 11 },
  { name: "Jun", Time: 12 },
];

const ResolutionTime = () => (
  <CardContentWrapper variant="outlined">
    <Header>
      <Title variant="h6">Resolution Time</Title>
      <HistoryOutlinedIcon />
    </Header>
    <StatsContainer>
      <StatBox>
        <StatValue variant="h4">12h 34m</StatValue>
        <StatLabel color="textSecondary">Avg. Resolution Time</StatLabel>
      </StatBox>
      <ImprovementBox>
        <StatValue variant="h4" color="success">
          +5.2%
        </StatValue>
        <StatLabel color="textSecondary">Improvement from last month</StatLabel>
      </ImprovementBox>
    </StatsContainer>
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="Time" stroke="#36BA98" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </CardContentWrapper>
);

export default ResolutionTime;
