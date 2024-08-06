import { Box } from "@mui/material";
import React from "react";
import HelpdeskComponent from "./HelpdeskComponent";
import RequesterInformation from "./RequesterInformation";
import Properties from "./Properties";

const TicketRightView = () => {
  return (
    <>
      <Box>
        <Box style={{ marginBottom: "12px" }}>
          <HelpdeskComponent />
        </Box>
        <Box style={{ marginBottom: "12px" }}>
          <RequesterInformation />
        </Box>
        <Box style={{ marginBottom: "12px" }}>
          <Properties />
        </Box>
      </Box>
    </>
  );
};

export default TicketRightView;
