import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";

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
`;

const Title = styled(Typography)`
  font-size: 17px;
  font-weight: 600;
  font-family: system-ui;
`;

const StatsWrapper = styled(Box)`
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

const TopAgentsHeader = styled(Typography)`
  margin-bottom: 8px;
  padding: 4px;
  font-family: system-ui;
  font-weight: 600;
`;

const AgentsList = styled(Box)`
  padding: 4px;
`;

const AgentInfo = styled(Typography)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6px;
  font-family: system-ui;
`;

const AgentPerformance = () => (
  <CardContentWrapper variant="outlined">
    <Header>
      <Title variant="h6">Agent Performance</Title>
      <PortraitOutlinedIcon />
    </Header>
    <StatsWrapper>
      <StatBox>
        <StatValue variant="h4">8.2</StatValue>
        <Typography variant="body2" color="textSecondary">
          Tickets per agent
        </Typography>
      </StatBox>
      <StatBox>
        <StatValue variant="h4">4h 32m</StatValue>
        <Typography variant="body2" color="textSecondary">
          Avg. response time
        </Typography>
      </StatBox>
    </StatsWrapper>
    <Box style={{ width: "100%", marginTop: "16px" }}>
      <TopAgentsHeader variant="body1">Top Agents</TopAgentsHeader>
      <AgentsList>
        <AgentInfo>
          <span>John Doe</span>
          <span>1,234 tickets</span>
        </AgentInfo>
        <AgentInfo>
          <span>Jane Smith</span>
          <span>987 tickets</span>
        </AgentInfo>
        <AgentInfo>
          <span>Bob Johnson</span>
          <span>876 tickets</span>
        </AgentInfo>
        <AgentInfo>
          <span>John Doe</span>
          <span>1,234 tickets</span>
        </AgentInfo>
        <AgentInfo>
          <span>Jane Smith</span>
          <span>987 tickets</span>
        </AgentInfo>
      </AgentsList>
    </Box>
  </CardContentWrapper>
);

export default AgentPerformance;
