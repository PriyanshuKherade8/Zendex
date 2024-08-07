import React from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import styled from "styled-components";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import { primaryColor } from "../../ThemeColor";

const FlagIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const PriorityLabel = styled(Typography)`
  display: flex;
  align-items: center;
`;

const PriorityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressLabel = styled(Typography)`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const CardContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 350px;
  border-radius: 12px !important;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled(Typography)`
  font-size: 17px !important;
  font-weight: 600 !important;
  font-family: system-ui !important;
`;

const TicketsByPriority = () => {
  const priorities = [
    {
      label: "High",
      count: 12,
      percentage: 60,
      description: "Requires immediate attention",
      color: "red",
    },
    {
      label: "Medium",
      count: 24,
      percentage: 40,
      description: "Should be addressed soon",
      color: "orange",
    },
    {
      label: "Low",
      count: 8,
      percentage: 20,
      description: "Can be addressed when time permits",
      color: "green",
    },
  ];

  return (
    <CardContentWrapper variant="outlined">
      <Header>
        <Title variant="h6">Tickets by Priority</Title>
        <ConfirmationNumberOutlinedIcon />
      </Header>
      <CardContent>
        {priorities.map((priority, index) => (
          <div key={index} style={{ marginBottom: "16px" }}>
            <PriorityContainer>
              <PriorityLabel
                variant="body1"
                style={{
                  color: priority.color,
                  marginBottom: "10px",
                  display: "flex",
                  gap: "6px",
                }}
              >
                <FlagIcon viewBox="0 0 24 24">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" x2="4" y1="22" y2="15" />
                </FlagIcon>
                {priority.label}
              </PriorityLabel>
              <Typography variant="body2">{priority.count}</Typography>
            </PriorityContainer>
            <LinearProgress
              variant="determinate"
              value={priority.percentage}
              sx={{
                height: 8,
                backgroundColor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: primaryColor,
                },
                marginBottom: "4px",
              }}
            />
            <ProgressLabel>
              <Typography
                variant="body1"
                style={{ fontFamily: "system-ui", fontWeight: 600 }}
              >
                {priority.percentage}% of total tickets
              </Typography>
              <Typography
                variant="body2"
                style={{ fontFamily: "system-ui", fontWeight: 600 }}
              >
                {priority.description}
              </Typography>
            </ProgressLabel>
          </div>
        ))}
      </CardContent>
    </CardContentWrapper>
  );
};

export default TicketsByPriority;
