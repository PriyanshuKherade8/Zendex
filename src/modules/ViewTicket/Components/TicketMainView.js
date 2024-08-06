import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicView from "./BasicView";
import TaskDetails from "../../Components/TaskDetails";

const StyledBox = styled(Box)({
  height: "520px",
  marginBottom: "10px",
  backgroundColor: "#ffffff",
});

const ScrollableTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
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
          <CustomTab label="Related tickets" />
          <CustomTab label="Tasks" />
          <CustomTab label="Assets" />
          <CustomTab label="Associations" />
          <CustomTab label="Approvals" />
          <CustomTab label="Activities" />
          <CustomTab label="Resolution" />
        </ScrollableTabs>
        {value === 0 && (
          <Box style={{ padding: "12px 0px 0px 12px" }}>
            <TaskDetails />
          </Box>
        )}
        {value === 1 && <Box p={3}>Content for Ticket Two</Box>}
        {value === 2 && <Box p={3}>Content for Ticket Three</Box>}
        {value === 3 && <Box p={3}>Content for Ticket Four</Box>}
        {value === 4 && <Box p={3}>Content for Ticket Five</Box>}
        {value === 5 && <Box p={3}>Content for Ticket Six</Box>}
        {value === 6 && <Box p={3}>Content for Ticket Seven</Box>}
        {value === 7 && <Box p={3}>Content for Ticket Seven</Box>}
      </StyledBox>
    </>
  );
};

export default TicketMainView;
