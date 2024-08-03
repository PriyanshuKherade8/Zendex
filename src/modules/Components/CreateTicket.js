// // CreateTicket.js
// import React from "react";
// import {
//   Box,
//   TextField,
//   Typography,
//   Button,
//   MenuItem,
//   styled,
// } from "@mui/material";

// const Container = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: theme.spacing(2),
//   padding: theme.spacing(2),
//   border: `1px solid ${theme.palette.divider}`,
//   borderRadius: theme.shape.borderRadius,
// }));

// const CreateTicket = () => {
//   const priorities = ["Low", "Medium", "High"];
//   const assignees = ["John Doe", "Jane Doe", "Jim Doe"];

//   return (
//     <Container>
//       <Typography variant="h5">Create Ticket</Typography>
//       <TextField label="Subject" variant="outlined" fullWidth />
//       <TextField
//         label="Description"
//         variant="outlined"
//         fullWidth
//         multiline
//         rows={4}
//       />
//       <TextField label="Priority" variant="outlined" fullWidth select>
//         {priorities.map((priority) => (
//           <MenuItem key={priority} value={priority}>
//             {priority}
//           </MenuItem>
//         ))}
//       </TextField>
//       <TextField label="Assignee" variant="outlined" fullWidth select>
//         {assignees.map((assignee) => (
//           <MenuItem key={assignee} value={assignee}>
//             {assignee}
//           </MenuItem>
//         ))}
//       </TextField>
//       <Button variant="contained" color="primary">
//         Create Ticket
//       </Button>
//     </Container>
//   );
// };

// export default CreateTicket;
import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
  styled,
} from "@mui/material";

const Container = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  //   marginTop: theme.spacing(5),
  padding: theme.spacing(2),
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

const CreateTicket = () => {
  const priorities = ["Low", "Medium", "High"];
  const assignees = ["John Doe", "Jane Doe", "Jim Doe"];

  return (
    <Container>
      <CardHeader
        title="Create Ticket"
        titleTypographyProps={{ variant: "h5", component: "div" }}
        sx={{ textAlign: "center" }}
      />
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Subject" variant="outlined" fullWidth />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <TextField label="Priority" variant="outlined" fullWidth select>
            {priorities.map((priority) => (
              <MenuItem key={priority} value={priority}>
                {priority}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Assignee" variant="outlined" fullWidth select>
            {assignees.map((assignee) => (
              <MenuItem key={assignee} value={assignee}>
                {assignee}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Create Ticket
          </Button>
        </Box>
      </CardContent>
    </Container>
  );
};

export default CreateTicket;
