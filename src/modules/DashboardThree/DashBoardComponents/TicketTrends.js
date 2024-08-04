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
`;

const data = [
  { name: "Jan", pv: 2400 },
  { name: "Feb", pv: 2210 },
  { name: "Mar", pv: 2290 },
  { name: "Apr", pv: 2000 },
  { name: "May", pv: 2181 },
  { name: "Jun", pv: 2500 },
];

const TicketTrends = () => (
  <Card variant="outlined" style={{ borderRadius: "12px" }}>
    <CardContentWrapper>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography
          style={{
            fontSize: "17px",
            fontWeight: "600",
            fontFamily: "system-ui",
          }}
          variant="h6"
        >
          Ticket Trends
        </Typography>
        <ConfirmationNumberOutlinedIcon />
      </Box>
      <Box style={{ width: "100%", height: "330px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#36BA98" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </CardContentWrapper>
  </Card>
);

export default TicketTrends;
