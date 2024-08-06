import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Grid,
  Avatar,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Dropdown from "../../UIComp/dropdown/Dropdown";
import { useForm } from "react-hook-form";
import { primaryColor } from "../../ThemeColor";
// Styled components
const StyledCard = styled(Card)({
  width: "100%",
  height: "270px",
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

const StyledCardDescription = styled(Typography)({
  fontSize: "0.875rem",
  color: "#6b6b6b",
});

const StyledCardContent = styled(CardContent)({
  display: "grid",
  gap: "16px",
});

const TicketContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const TicketDescription = styled(Typography)({
  fontSize: "0.875rem",
});

const StyledBadge = styled(Box)(({ variant }) => ({
  //   padding: "4px 8px",
  borderRadius: "4px",
  backgroundColor: variant === "secondary" ? "blue" : "transparent",
  color: variant === "secondary" ? "white" : "black",
  border: variant === "outline" ? "1px solid black" : "none",
}));

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
  display: inline; /* Ensure it stays inline with the text */
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

const Properties = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    control,
    watch,
    setValue,
    trigger,
    unregister,
  } = useForm();
  return (
    <StyledCard variant="outlined">
      <StyledCardHeader
        title={
          <StyledCardTitle>
            <AssignmentOutlinedIcon style={{ fontSize: "32px" }} />
            Properties
          </StyledCardTitle>
        }
        // subheader={
        //   <StyledCardDescription>
        //     View and track the status of your recent support tickets.
        //   </StyledCardDescription>
        // }
      />
      <Container>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Priority"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Status"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Source"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Type"}
                isRequired={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ justifyContent: "flex-end", display: "flex" }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                style={{ backgroundColor: primaryColor }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </StyledCard>
  );
};

export default Properties;
