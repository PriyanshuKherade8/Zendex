// import React from "react";

// const RaiseForm = () => {
//   return <div>RaiseForm</div>;
// };

// export default RaiseForm;

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import Input from "../../UIComp/Input/Input";
import Dropdown from "../../UIComp/dropdown/Dropdown";
import { useForm } from "react-hook-form";
import Textarea from "../../UIComp/textarea/Textarea";
import { primaryColor } from "../../ThemeColor";
import { useNavigate } from "react-router-dom";

const CustomCard = styled(Card)({
  width: "100%",
  //   maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
});

const FormRow = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "16px",
});

export default function RaiseForm() {
  const navigate = useNavigate();
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
    <CustomCard variant="outlined">
      <CardHeader
        title={
          <Typography variant="h5" color={primaryColor}>
            Raise a Ticket
          </Typography>
        }
        subheader={
          <Typography variant="body2" color={primaryColor}>
            Fill out the form below to submit a new support ticket.
          </Typography>
        }
      />

      <CardContent>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticket_id"}
                name={"ticket_id"}
                placeholder="Enter Ticket ID"
                label={"Ticket ID"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticket_id"}
                name={"ticket_id"}
                placeholder="Enter Ticket ID"
                label={"Ticket ID"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticket_id"}
                name={"ticket_id"}
                placeholder="Enter Ticket ID"
                label={"Ticket ID"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticketnum"}
                name={"ticketnum"}
                placeholder="Enter Ticket Number"
                label={"Ticket Number"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticket_id"}
                name={"ticket_id"}
                placeholder="Enter Ticket ID"
                label={"Ticket ID"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input
                id={"ticket_id"}
                name={"ticket_id"}
                placeholder="Enter Ticket ID"
                label={"Ticket ID"}
                isRequired={false}
              />
            </Grid>

            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Textarea
                label="Query Title"
                id="queryTitle"
                name="queryTitle"
                {...register("queryTitle")}
                placeholder="Enter your query title here..."
                errors={errors}
                watch={watch}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Textarea
                label="Query Description"
                id="queryDescription"
                name="queryDescription"
                {...register("queryDescription")}
                placeholder="Enter your query description here..."
                errors={errors}
                watch={watch}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>

      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: primaryColor }}
          type="submit"
          onClick={() => {
            navigate(`/total-tickets`);
          }}
        >
          Submit Ticket
        </Button>
      </CardActions>
    </CustomCard>
  );
}
