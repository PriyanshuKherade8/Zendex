import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import styled from "styled-components";
import FlagIcon from "@mui/icons-material/Flag";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 16px;
  height: 350px;
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GapBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FlagIconStyled = styled(FlagIcon)`
  width: 24px;
  height: 24px;
`;

function PriorityItem({ color, priority, count, percentage, description }) {
  return (
    <Box display="grid" gap="8px">
      <FlexBox>
        <GapBox>
          <FlagIconStyled style={{ color }} />
          <Typography variant="body1" fontWeight="medium">
            {priority}
          </Typography>
        </GapBox>
        <Typography variant="body2" fontWeight="medium">
          {count}
        </Typography>
      </FlexBox>
      <LinearProgress variant="determinate" value={percentage} />
      <FlexBox>
        <Typography variant="body2" color="textSecondary">
          {percentage}% of total tickets
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </FlexBox>
    </Box>
  );
}

export default function TicketShowCount() {
  return (
    <StyledCard variant="outlined">
      <CardHeader>
        <Typography variant="h6">Tickets by Priority</Typography>
        <Typography variant="body2" color="textSecondary">
          This chart shows the breakdown of tickets by priority level.
        </Typography>
      </CardHeader>
      <CardContent>
        <PriorityItem
          color="red"
          priority="High"
          count="12"
          percentage={60}
          description="Requires immediate attention"
        />
        <PriorityItem
          color="yellow"
          priority="Medium"
          count="24"
          percentage={40}
          description="Should be addressed soon"
        />
        <PriorityItem
          color="green"
          priority="Low"
          count="8"
          percentage={20}
          description="Can be addressed when time permits"
        />
      </CardContent>
    </StyledCard>
  );
}
