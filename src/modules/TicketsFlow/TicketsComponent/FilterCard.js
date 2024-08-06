import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  Grid,
  Button,
  styled,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Input from "../../UIComp/Input/Input"; // Adjust as necessary
import Dropdown from "../../UIComp/dropdown/Dropdown"; // Adjust as necessary
import { useForm } from "react-hook-form";
import { primaryColor } from "../../ThemeColor";

const CustomButton = styled(Button)(({ theme }) => ({
  width: "100%",
  justifyContent: "flex-start",
  textAlign: "left",
  fontWeight: "normal",
  borderRadius: "12px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

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
        padding: "16px",
        borderRadius: "16px",
        // boxShadow: 3,
        backgroundColor: "#ffffff",
        // height: "150px",
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", color: primaryColor }}
          >
            Filters
          </Typography>
        }
        subheader={
          <Typography variant="body2" color={primaryColor}>
            Apply filters to your Zendesk ticket list.
          </Typography>
        }
      />

      <CardContent>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Input
                id="ticket_id"
                name="ticket_id"
                placeholder="Enter Ticket ID"
                label="Ticket ID"
                isRequired={false}
                InputProps={{
                  startAdornment: (
                    <Search style={{ color: "gray", marginRight: "8px" }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                id="ticketnum"
                name="ticketnum"
                placeholder="Enter Ticket Number"
                label="Ticket Number"
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
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: primaryColor }}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default FilterCard;
