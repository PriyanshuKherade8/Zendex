// DrawerComponent.jsx
import React from "react";
import { Drawer, Box, Typography } from "@mui/material";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
  }
`;

const DrawerComponent = ({ open, onClose }) => {
  return (
    <StyledDrawer anchor="right" open={open} onClose={onClose}>
      <Box p={2} width="240px" role="presentation">
        <Typography variant="h6">Details</Typography>
        <Typography variant="body1">Additional information here.</Typography>
      </Box>
    </StyledDrawer>
  );
};

export default DrawerComponent;
