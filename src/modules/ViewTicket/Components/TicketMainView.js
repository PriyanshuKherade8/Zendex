import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicView from "./BasicView";
import TaskDetails from "../../Components/TaskDetails";
import TicketDetails from "../../Components/TicketDetails";
import TicketComments from "../../DashBoardTwo/TicketComments";
import { primaryColor } from "../../ThemeColor";

const StyledBox = styled(Box)({
  // height: "520px",
  marginBottom: "10px",
  backgroundColor: "#ffffff",
  paddingBottom: "20px",
});

const ScrollableTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: primaryColor,
  },
});

const CustomTab = styled(Tab)({
  fontWeight: "600",
  fontFamily: "system-ui",
  fontSize: "15px",
  textTransform: "capitalize",
});

const TicketMainView = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box style={{ backgroundColor: "white" }}>
        <BasicView />
      </Box>
      <StyledBox>
        <ScrollableTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs example"
        >
          <CustomTab label="Details" />
          <CustomTab label="Conversation" />
          <CustomTab label="Comments" />
        </ScrollableTabs>
        {value === 0 && (
          <Box style={{ padding: "12px 0px 0px 12px" }}>
            <TaskDetails />
          </Box>
        )}
        {value === 1 && (
          <Box style={{ padding: "12px 0px 0px 12px" }}>
            <TicketDetails />
          </Box>
        )}
        {value === 2 && (
          <Box style={{ padding: "12px 0px 0px 12px" }}>
            <TicketComments />
          </Box>
        )}
      </StyledBox>
    </>
  );
};

export default TicketMainView;
