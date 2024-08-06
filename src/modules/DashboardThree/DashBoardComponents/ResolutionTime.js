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
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h6"
        style={{
          fontSize: "17px",
          fontWeight: "600",
          fontFamily: "system-ui",
        }}
      >
        Resolution Time
      </Typography>
      <HistoryOutlinedIcon />
    </Box>
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: "16px",
      }}
    >
      <Box style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{
            fontSize: "25px",
            fontWeight: "600",
            fontFamily: "system-ui",
            marginBottom: "5px",
          }}
        >
          12h 34m
        </Typography>
        <Typography
          color="textSecondary"
          style={{
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "system-ui",
            marginBottom: "5px",
          }}
        >
          Avg. Resolution Time
        </Typography>
      </Box>
      <Box style={{ textAlign: "center", color: "green" }}>
        <Typography
          variant="h4"
          color="success"
          style={{
            fontSize: "25px",
            fontWeight: "600",
            fontFamily: "system-ui",
            marginBottom: "5px",
          }}
        >
          +5.2%
        </Typography>
        <Typography
          color="textSecondary"
          style={{
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "system-ui",
            marginBottom: "5px",
          }}
        >
          Improvement from last month
        </Typography>
      </Box>
    </Box>
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
