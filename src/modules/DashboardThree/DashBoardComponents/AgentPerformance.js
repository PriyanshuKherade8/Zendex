import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
const CardContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 16px;
  height: 350px;
`;

const AgentInfo = styled(Typography)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6px;
  font-family: system-ui;
`;

const AgentPerformance = () => (
  <Card variant="outlined" style={{ borderRadius: "12px" }}>
    <CardContentWrapper>
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
          Agent Performance
        </Typography>
        <PortraitOutlinedIcon />
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
          <Typography variant="h4">8.2</Typography>
          <Typography variant="body2" color="textSecondary">
            Tickets per agent
          </Typography>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h4">4h 32m</Typography>
          <Typography variant="body2" color="textSecondary">
            Avg. response time
          </Typography>
        </Box>
      </Box>
      <Box style={{ width: "100%", marginTop: "16px" }}>
        <Typography
          variant="body1"
          style={{
            marginBottom: "8px",
            padding: "4px",
            fontFamily: "system-ui",
            fontWeight: "600",
          }}
        >
          Top Agents
        </Typography>
        <Box style={{ padding: "4px" }}>
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
        </Box>
      </Box>
    </CardContentWrapper>
  </Card>
);

export default AgentPerformance;
