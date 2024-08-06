import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { styled } from "@mui/system";
import { primaryColor } from "../../ThemeColor";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate, useParams } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// Create a styled component for Typography
const StyledTypography = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  padding: "4px",
  color: primaryColor,
  cursor: "pointer",
});

const StyledTypographyTwo = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "16px",
  alignItems: "center",
  display: "flex",
  gap: "6px",
});
const StyledTypographyThree = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "15px",
});

const StyledID = styled("span")({
  fontSize: "17px",
  color: "black",
  marginLeft: "5px",
  cursor: "default",
});

const BasicView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);
  return (
    <Box>
      <Grid container>
        <Grid item xs={11} md={11}>
          <Box>
            <StyledTypography
              variant="h6"
              onClick={() => {
                navigate("/total-tickets");
              }}
            >
              Tickets
              <ArrowForwardIosOutlinedIcon
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  cursor: "default",
                }}
              />
              <StyledID>{`#${id}`}</StyledID>
            </StyledTypography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Box padding={1}>
          <ShoppingCartOutlinedIcon
            style={{
              fontSize: "38px",
              // border: "1px solid red",
              color: "white",
              backgroundColor: primaryColor,
              padding: "8px",
            }}
          />
        </Box>
        <Grid item xs={11} md={11}>
          <Box
            style={{
              height: "98px",
            }}
          >
            <StyledTypography variant="h6">
              Request for user id : Add business gather requirement
            </StyledTypography>
            <StyledTypographyTwo variant="body2" gutterBottom>
              agent one (me) reported 24 days ago (Thu, 11 jul 1:18 PM) vai
              portal
              <LanguageOutlinedIcon />
            </StyledTypographyTwo>
            <StyledTypographyThree variant="body2" gutterBottom>
              Request for: self
            </StyledTypographyThree>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicView;
