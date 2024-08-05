import { Box } from "@mui/material";
import React from "react";
import HelpdeskComponent from "./HelpdeskComponent";

const TicketRightView = () => {
  return (
    <>
      <Box>
        <Box
          style={{
            border: "1px solid red",
            height: "250px",
            marginBottom: "10px",
          }}
        >
          {"comp1"}
        </Box>
        <Box
          style={{
            border: "1px solid red",
            height: "250px",
            marginBottom: "10px",
          }}
        >
          {"comp2"}
        </Box>
        <Box>
          <HelpdeskComponent />
        </Box>
      </Box>
    </>
  );
};

export default TicketRightView;
