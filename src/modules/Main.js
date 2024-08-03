import React from "react";
import StickyHeadTable from "./Table";
import { Box } from "@mui/material";
import CreateTicket from "./Components/CreateTicket";
import TicketDetails from "./Components/TicketDetails";

const Main = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "10px" }}>
        {/* <Box style={{ width: "25%" }}>
          <TicketDetails />
        </Box> */}
        <Box style={{ width: "80%" }}>
          <StickyHeadTable />
        </Box>
        <Box style={{ width: "25%" }}>
          <CreateTicket />
        </Box>
      </Box>
    </>
  );
};

export default Main;
