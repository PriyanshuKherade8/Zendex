import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Grid,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
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
  display: "flex",
  alignItems: "center",
  gap: "5px",
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

const AvatarName = styled(Box)`
  display: flex;
  align-items: center;
`;

const Break = styled(Box)`
  display: block;
`;

const RequesterInformation = () => {
  return (
    <StyledCard variant="outlined">
      <StyledCardHeader
        title={
          <StyledCardTitle>
            <PersonOutlineOutlinedIcon style={{ fontSize: "32px" }} />
            Requester Information
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
            {/* <Label variant="body1">Employee ID:</Label> */}
            <AvatarName>
              <Avatar alt="James Warren" src="/path/to/avatar.jpg" />
              <Value variant="body2" style={{ marginLeft: "8px" }}>
                James Warren (me)<Break>Sr. Technology Associate</Break>
              </Value>
            </AvatarName>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Label variant="h5">Mail ID :</Label>
            <Value variant="body2">abc@gmail.com</Value>
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

export default RequesterInformation;
