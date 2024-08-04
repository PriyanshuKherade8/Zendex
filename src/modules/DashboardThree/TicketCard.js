import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { CardContentWrapper, CardTitle } from "./StyledComponents";
import { Link } from "react-router-dom";

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
          <CardTitle
            style={{
              display: "flex",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "system-ui",
            }}
          >
            {title}
          </CardTitle>
          <Box style={{ display: "flex" }}>{icon}</Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            style={{
              fontWeight: "700",
              fontFamily: "system-ui",
              marginBottom: "2px",
            }}
          >
            {count}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {percentage}
          </Typography>
        </Box>
      </CardContentWrapper>
    </Link>
  </Card>
);
