import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

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

const PriorityWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 16px;
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
  <CardContentWrapper variant="outlined">
    <Header>
      <Title variant="h6">Tickets by Priority</Title>
      <ConfirmationNumberOutlinedIcon />
    </Header>
    <PriorityWrapper>
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
    </PriorityWrapper>
  </CardContentWrapper>
);

export default TicketsByPriority;
