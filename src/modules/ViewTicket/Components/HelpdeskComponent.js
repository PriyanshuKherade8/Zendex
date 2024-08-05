import React from "react";
import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled components
const StyledCard = styled(Card)({
  width: "100%",
  height: "250px",
});

const StyledCardHeader = styled(CardHeader)({
  borderBottom: "1px solid #e0e0e0",
});

const StyledCardTitle = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: "bold",
});

const StyledCardDescription = styled(Typography)({
  fontSize: "0.875rem",
  color: "#6b6b6b",
});

const StyledCardContent = styled(CardContent)({
  display: "grid",
  gap: "16px",
});

const TicketContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const TicketDescription = styled(Typography)({
  fontSize: "0.875rem",
});

const StyledBadge = styled(Box)(({ variant }) => ({
  //   padding: "4px 8px",
  borderRadius: "4px",
  backgroundColor: variant === "secondary" ? "blue" : "transparent",
  color: variant === "secondary" ? "white" : "black",
  border: variant === "outline" ? "1px solid black" : "none",
}));

const HelpdeskComponent = () => {
  return (
    <StyledCard variant="outlined">
      <StyledCardHeader
        title={<StyledCardTitle>IT Helpdesk</StyledCardTitle>}
        subheader={
          <StyledCardDescription>
            View and track the status of your recent support tickets.
          </StyledCardDescription>
        }
      />
      {/* <StyledCardContent>
        {[
          {
            id: 123,
            description: "Unable to access company network",
            status: "Open",
          },
          { id: 124, description: "Printer not working", status: "Closed" },
          //   { id: 125, description: "Software update issue", status: "Open" },
          //   { id: 126, description: "Laptop not turning on", status: "Closed" },
        ].map((ticket) => (
          <React.Fragment key={ticket.id}>
            <TicketContainer>
              <Typography className="font-medium">
                Ticket #{ticket.id}
              </Typography>
              <StyledBadge
                variant={ticket.status === "Open" ? "secondary" : "outline"}
              >
                {ticket.status}
              </StyledBadge>
            </TicketContainer>
            <TicketDescription>{ticket.description}</TicketDescription>
          </React.Fragment>
        ))}
      </StyledCardContent> */}
    </StyledCard>
  );
};

export default HelpdeskComponent;
