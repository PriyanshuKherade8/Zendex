import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  MenuItem,
  Button,
  Popover,
  IconButton,
  Grid,
} from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Input from "../../UIComp/Input/Input";
import Dropdown from "../../UIComp/dropdown/Dropdown";
import { useForm } from "react-hook-form";

const CustomButton = styled(Button)({
  width: "100%",
  justifyContent: "flex-start",
  textAlign: "left",
  fontWeight: "normal",
});

const FilterCard = () => {
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card
      variant="outlined"
      sx={{
        // maxWidth: 400,
        // mx: "auto",
        padding: "4px",
        height: "100%",
      }}
    >
      <CardHeader
        style={{
          fontFamily: "system-ui",
          fontSize: "15px",
          // border: "1px solid red",
        }}
        title="Filters"
        subheader="Apply filters to your Zendesk ticket list."
      />

      <CardContent>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Input
                id={"ticket_id"}
                name={"ticket_id"}
                placeholder="Enter Ticket ID"
                label={"Ticket ID"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id={"ticket_id"}
                name={"ticket_id"}
                placeholder="Enter Ticket ID"
                label={"Ticket ID"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Transaction Stage"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Transaction Stage"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Transaction Stage"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">Apply</Button>
      </CardActions>
    </Card>
  );
};

export default FilterCard;
