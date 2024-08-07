import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicView from "./BasicView";
import TaskDetails from "../../Components/TaskDetails";
import TicketDetails from "../../Components/TicketDetails";
import TicketComments from "../../DashBoardTwo/TicketComments";
import { primaryColor } from "../../ThemeColor";

const StyledBox = styled(Box)({
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

const BackgroundBox = styled(Box)({
  backgroundColor: "white",
});

const ContentBox = styled(Box)({
  padding: "12px 0px 0px 12px",
});

const TicketMainView = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BackgroundBox>
        <BasicView />
      </BackgroundBox>
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
          <ContentBox>
            <TaskDetails />
          </ContentBox>
        )}
        {value === 1 && (
          <ContentBox>
            <TicketDetails />
          </ContentBox>
        )}
        {value === 2 && (
          <ContentBox>
            <TicketComments />
          </ContentBox>
        )}
      </StyledBox>
    </>
  );
};

export default TicketMainView;
