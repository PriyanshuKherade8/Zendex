import React from "react";
import { Card, CardHeader, Typography, Box, Grid, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
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

const AvatarName = styled(Box)`
  display: flex;
  align-items: center;
`;

const Break = styled(Box)`
  display: block;
`;

const StyledGridItem = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MarginLeftValue = styled(Value)`
  margin-left: 8px;
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
      />
      <Container>
        <Grid container spacing={2}>
          <StyledGridItem item xs={12} md={12}>
            <AvatarName>
              <Avatar alt="James Warren" src="/path/to/avatar.jpg" />
              <MarginLeftValue variant="body2">
                James Warren (me)<Break>Sr. Technology Associate</Break>
              </MarginLeftValue>
            </AvatarName>
          </StyledGridItem>
          <StyledGridItem item xs={12} md={12}>
            <Label variant="h5">Mail ID :</Label>
            <Value variant="body2">abc@gmail.com</Value>
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

export default RequesterInformation;
