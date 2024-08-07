import { Box } from "@mui/material";
import React from "react";
import HelpdeskComponent from "./HelpdeskComponent";
import RequesterInformation from "./RequesterInformation";
import Properties from "./Properties";
import styled from "styled-components";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledBox = styled(Box)`
  margin-bottom: 12px;
`;

const TicketRightView = () => {
  return (
    <Container>
      <StyledBox>
        <HelpdeskComponent />
      </StyledBox>
      <StyledBox>
        <RequesterInformation />
      </StyledBox>
      <StyledBox>
        <Properties />
      </StyledBox>
    </Container>
  );
};

export default TicketRightView;
