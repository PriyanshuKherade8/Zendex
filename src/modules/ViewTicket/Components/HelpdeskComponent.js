import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import { primaryColor } from "../../ThemeColor";
// Styled components
const StyledCard = styled(Card)({
  width: "100%",
  height: "250px",
});

const StyledCardHeader = styled(CardHeader)({
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: primaryColor,
});

const StyledCardTitle = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: "white",
});

const StyledCardDescription = styled(Typography)({
  fontSize: "0.875rem",
  color: "white",
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

const Container = styled(Box)`
  font-family: "system-ui";
  background-color: #fff;
  padding: 20px;
`;

const Label = styled(Typography)`
  font-family: system-ui !important;
  font-weight: 600 !important;
  color: #758694;
  font-size: 15px !important;
  margin-right: 8px;
  display: inline; /* Ensure it stays inline with the text */
`;

const Value = styled(Typography)`
  font-family: system-ui !important;
  font-weight: 600 !important;
  color: black;
  font-size: 15px !important;
  margin-right: 8px;
  display: inline;
`;

const HelpdeskComponent = () => {
  return (
    <StyledCard variant="outlined">
      <StyledCardHeader
        title={
          <StyledCardTitle>
            <HelpCenterOutlinedIcon style={{ fontSize: "32px" }} />
            IT Helpdesk
          </StyledCardTitle>
        }
        // subheader={
        //   <StyledCardDescription>
        //     View and track the status of your recent support tickets.
        //   </StyledCardDescription>
        // }
      />
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Label variant="h5">Ticket ID :</Label>
            <Value variant="body2">12378217401</Value>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Label variant="h5">Ticket ID :</Label>
            <Value variant="body2">lorem</Value>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Label variant="h5">Ticket ID :</Label>
            <Value variant="body2">lorem</Value>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Label variant="h5">Contact Us:</Label>
            <Value variant="body2">12378217401</Value>
          </Grid>
        </Grid>
      </Container>
    </StyledCard>
  );
};

export default HelpdeskComponent;
