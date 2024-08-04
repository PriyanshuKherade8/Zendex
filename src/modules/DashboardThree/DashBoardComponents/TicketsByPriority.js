import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
const CardContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 16px;
  height: 350px;
`;

const AvatarWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

const TicketCount = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

const TicketsByPriority = () => (
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
          Tickets by Priority
        </Typography>
        <ConfirmationNumberOutlinedIcon />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "16px",
        }}
      >
        <AvatarWrapper>
          <TicketCount color="error">2,345</TicketCount>
          <Typography color="textSecondary">High</Typography>
        </AvatarWrapper>
        <AvatarWrapper>
          <TicketCount style={{ color: "#FF8225" }}>5,678</TicketCount>
          <Typography color="textSecondary">Medium</Typography>
        </AvatarWrapper>
        <AvatarWrapper>
          <TicketCount style={{ color: "#399918" }}>4,322</TicketCount>
          <Typography color="textSecondary">Low</Typography>
        </AvatarWrapper>
      </Box>
    </CardContentWrapper>
  </Card>
);

export default TicketsByPriority;
