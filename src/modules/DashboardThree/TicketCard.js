import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { CardContentWrapper } from "./StyledComponents";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardTitle = styled(Typography)`
  font-size: 15px !important;
  font-weight: 600 !important;
  display: flex !important;
  font-family: system-ui !important;
`;

const CountTypography = styled(Typography)`
  font-weight: 700 !important;
  font-family: system-ui !important;
  margin-bottom: 2px !important;
`;

export const TicketCard = ({ title, count, percentage, icon, color, to }) => (
  <Card variant="outlined" style={{ borderRadius: "10px" }}>
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <CardContentWrapper>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <CardTitle>{title}</CardTitle>
          <Box style={{ display: "flex" }}>{icon}</Box>
        </Box>
        <Box>
          <CountTypography variant="h5">{count}</CountTypography>
          <Typography variant="body2" color="textSecondary">
            {percentage}
          </Typography>
        </Box>
      </CardContentWrapper>
    </Link>
  </Card>
);
