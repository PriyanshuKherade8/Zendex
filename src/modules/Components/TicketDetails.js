import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Avatar,
  Paper,
  styled,
} from "@mui/material";

const Container = styled(Card)({
  margin: "auto",
  padding: "16px",
  backgroundColor: "#ffffff",
  fontFamily: "system-ui",
});

const CustomCardHeader = styled(CardHeader)({
  padding: "5px",
  fontFamily: "system-ui",
  "& .MuiCardHeader-title": {
    fontSize: "18px",
    fontWeight: "500",
  },
  "& .MuiCardHeader-subheader": {
    fontSize: "16px",
    color: "black",
    fontSize: "18px",
    fontWeight: "500",
  },
});

const CustomTypography = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "14px",
});

const ConversationTypography = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "16px",
  fontWeight: "bold",
});

const CustomPaper = styled(Paper)({
  display: "flex",
  alignItems: "flex-start",
  padding: "16px",
  marginBottom: "16px",
  borderRadius: "8px",
  fontFamily: "system-ui",
});

const TicketDetails = () => {
  const ticket = {
    id: "12345",
    subject: "Issue with product functionality",
    description:
      "The customer is reporting an issue with the core functionality of our product. They are unable to complete a key task and it is impacting their workflow.",
    conversation: [
      {
        name: "John Doe",
        message:
          "Hi, I'm having trouble with the core functionality of your product. Can you please help me resolve this issue?",
        time: "3 days ago",
      },
      {
        name: "Jane Doe",
        message:
          "Hi John, I'm sorry to hear you're having trouble. Can you please provide more details about the issue you're facing? I'd be happy to look into this for you.",
        time: "1 day ago",
      },
    ],
  };

  return (
    <>
      <CustomCardHeader
        // title={`Ticket #${ticket.id}`}
        subheader={ticket.subject}
        titleTypographyProps={{ variant: "h5", component: "div" }}
        subheaderTypographyProps={{
          variant: "subtitle1",
          color: "textSecondary",
        }}
      />
      <CardContent style={{ padding: "4px" }}>
        <CustomTypography variant="body1" paragraph>
          {ticket.description}
        </CustomTypography>
        <Divider sx={{ my: 2 }} />
        <ConversationTypography variant="h6" gutterBottom>
          Conversation
        </ConversationTypography>
        {ticket.conversation.map((entry, index) => (
          <CustomPaper key={index} variant="outlined">
            <Avatar sx={{ mr: 2 }}>{entry.name.charAt(0)}</Avatar>
            <Box>
              <CustomTypography variant="subtitle2">
                {entry.name}
              </CustomTypography>
              <CustomTypography variant="body2" color="textSecondary">
                {entry.time}
              </CustomTypography>
              <CustomTypography variant="body1" mt={1}>
                {entry.message}
              </CustomTypography>
            </Box>
          </CustomPaper>
        ))}
      </CardContent>
    </>
  );
};

export default TicketDetails;
