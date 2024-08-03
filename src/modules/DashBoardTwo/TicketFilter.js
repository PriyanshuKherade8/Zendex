import React from "react";
import { Box, TextField, MenuItem, Button, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
}));

const TicketFilter = () => {
  const priorities = ["All", "Low", "Medium", "High"];
  const statuses = ["All", "Open", "Closed", "In Progress"];

  return (
    <Container>
      <TextField label="Search" variant="outlined" fullWidth />
      <TextField label="Priority" variant="outlined" fullWidth select>
        {priorities.map((priority) => (
          <MenuItem key={priority} value={priority}>
            {priority}
          </MenuItem>
        ))}
      </TextField>
      <TextField label="Status" variant="outlined" fullWidth select>
        {statuses.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary">
        Filter
      </Button>
    </Container>
  );
};

export default TicketFilter;
