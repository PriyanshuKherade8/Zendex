import React from "react";
import { Card, CardHeader, Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import { primaryColor } from "../../ThemeColor";

const StyledCard = styled(Card)({
  width: "100%",
  height: "250px",
});

const StyledCardHeader = styled(CardHeader)({
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: primaryColor,
  padding: "10px",
});

const StyledCardTitle = styled(Typography)({
  fontSize: "17px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: "white",
  fontFamily: "system-ui",
});

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
  display: inline;
`;

const Value = styled(Typography)`
  font-family: system-ui !important;
  font-weight: 600 !important;
  color: black;
  font-size: 15px !important;
  margin-right: 8px;
  display: inline;
`;

const StyledGridItem = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 5px;
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
      />
      <Container>
        <Grid container spacing={2}>
          <StyledGridItem item xs={12} md={12}>
            <Label variant="h5">Ticket ID :</Label>
            <Value variant="body2">12378217401</Value>
          </StyledGridItem>
          <StyledGridItem item xs={12} md={12}>
            <Label variant="h5">Ticket ID :</Label>
            <Value variant="body2">lorem</Value>
          </StyledGridItem>
          <StyledGridItem item xs={12} md={12}>
            <Label variant="h5">Ticket ID :</Label>
            <Value variant="body2">lorem</Value>
          </StyledGridItem>
          <StyledGridItem item xs={12} md={12}>
            <Label variant="h5">Contact Us:</Label>
            <Value variant="body2">12378217401</Value>
          </StyledGridItem>
        </Grid>
      </Container>
    </StyledCard>
  );
};

export default HelpdeskComponent;
