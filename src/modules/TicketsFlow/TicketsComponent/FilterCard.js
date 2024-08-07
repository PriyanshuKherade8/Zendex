import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Grid,
  Button,
  styled,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Input from "../../UIComp/Input/Input";
import Dropdown from "../../UIComp/dropdown/Dropdown";
import { useForm } from "react-hook-form";
import { primaryColor } from "../../ThemeColor";

const FilterCard = () => {
  const {
    formState: { errors },
    control,
  } = useForm();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: "16px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
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
